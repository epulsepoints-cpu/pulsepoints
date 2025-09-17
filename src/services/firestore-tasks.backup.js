import { db } from '@/firebase';
import { collection, getDocs, doc, updateDoc, query, where, orderBy, getDoc, limit } from 'firebase/firestore';
// Verify Firebase connection with enhanced guest mode handling
const verifyFirebaseConnection = async (isGuestMode = false) => {
    try {
        if (!db) {
            console.error('❌ Firestore DB is not initialized');
            return false;
        }
        // Detect environment type for better logging
        const isLocalhost = window.location.hostname === 'localhost' ||
            window.location.hostname === '127.0.0.1';
        const isDev = isLocalhost || window.location.hostname.includes('dev') ||
            window.location.hostname.includes('test');
        console.log(`🌐 Environment: ${isDev ? 'Development' : 'Production'}`);
        // Special handling for guest mode
        if (isGuestMode) {
            console.log('🧑‍🦱 Verifying Firebase connection in guest mode');
            // For guest mode, try multiple public collections with more robust error handling
            try {
                // First try to access ecgTasks collection which should be public read
                const tasksRef = collection(db, 'ecgTasks');
                const q = query(tasksRef, limit(1));
                const snapshot = await getDocs(q);
                // If we got data, great!
                if (!snapshot.empty) {
                    console.log('✅ Firebase connection verified in guest mode (ecgTasks access)');
                    return true;
                }
                // If we're here, the collection exists but might be empty - that's still a success
                console.log('✓ Firebase connection appears good, but ecgTasks collection may be empty');
                return true;
            }
            catch (err) {
                // First error might be permission related, try another approach
                console.warn('⚠️ Primary guest mode check failed:', err);
                try {
                    // Try with a simpler approach - just check if we can connect at all
                    await getDoc(doc(db, 'public', 'status'));
                    console.log('✓ Firebase connection verified via fallback method');
                    return true;
                }
                catch (secondErr) {
                    // If both methods fail, we likely have a real connection problem
                    console.error('❌ Firebase connection fully failed in guest mode:', secondErr);
                    // Extra debugging for network issues
                    if (navigator.onLine) {
                        console.log('🌐 Browser reports online, but Firebase connection failed');
                    }
                    else {
                        console.log('🔌 Browser reports offline - network connection is the likely issue');
                    }
                    return false;
                }
            }
        }
        // Standard authentication check for logged-in users
        try {
            const authInstance = await import('firebase/auth').then(module => module.getAuth());
            if (!authInstance.currentUser) {
                console.warn('⚠️ Firebase connection verification - user not authenticated');
                // If we're not in guest mode but there's no user, let's do a simple connection test
                // This handles the case where authentication isn't fully initialized yet
                try {
                    // Try with a public collection that doesn't need auth
                    const tasksRef = collection(db, 'ecgTasks');
                    const q = query(tasksRef, limit(1));
                    await getDocs(q);
                    console.log('✓ Firebase connection verified without authentication');
                    return true;
                }
                catch (publicErr) {
                    console.error('❌ Unable to verify Firebase connection without auth:', publicErr);
                    return false;
                }
            }
            // Full authenticated check
            const userId = authInstance.currentUser.uid;
            console.log(`👤 Verifying connection for user ${userId}`);
            const userRef = doc(db, 'users', userId);
            const userDoc = await getDoc(userRef);
            if (userDoc.exists()) {
                console.log('✅ Firebase connection and authentication fully verified');
            }
            else {
                console.log('✓ Firebase connection good, but user document not found');
            }
            return true;
        }
        catch (error) {
            console.error('❌ Firebase authenticated connection test failed:', error);
            return false;
        }
    }
    catch (error) {
        console.error('❌ Firebase connection test critically failed:', error);
        return false;
    }
};
// In-memory cache for tasks
let cachedTasks = null;
const cacheTimestamp = { time: 0 };
const CACHE_EXPIRY = 30 * 60 * 1000; // 30 minutes in milliseconds
// Fetch all active tasks from Firestore
export const fetchAllActiveTasks = async (isGuestMode = false) => {
    try {
        console.log('🔄 Fetching tasks from Firestore...');
        console.log(`👤 User mode: ${isGuestMode ? 'Guest' : 'Authenticated'}`);
        // Check if we're running on localhost or development
        const isLocalhost = window.location.hostname === 'localhost' ||
            window.location.hostname === '127.0.0.1';
        // First check for guest mode specific behavior
        const isGuestModeConfirmed = isGuestMode || localStorage.getItem('ecg-guest-mode') === 'true';
        // Check if we have a valid cache appropriate for the current mode
        const now = Date.now();
        if (cachedTasks && cachedTasks.length > 0 && now - cacheTimestamp.time < CACHE_EXPIRY) {
            console.log('✅ Using cached tasks, count:', cachedTasks.length);
            // For guest mode, ensure we have video tasks in the cache
            if (isGuestModeConfirmed) {
                const videoTasks = cachedTasks.filter(t => t.taskType === 'video');
                console.log('📺 Video tasks in cache:', videoTasks.length);
                // If we don't have enough video tasks in the cache for guest mode, merge with sample video tasks
                if (videoTasks.length < 3) {
                    const sampleTasks = getSampleTasks();
                    const sampleVideoTasks = sampleTasks.filter(t => t.taskType === 'video');
                    console.log('🔀 Enhancing cache with sample video tasks for guest mode');
                    // Filter out any duplicates by ID
                    const enhancedTasks = [
                        ...cachedTasks,
                        ...sampleVideoTasks.filter(st => !cachedTasks.some(ct => ct.id === st.id))
                    ];
                    // Update cache with the enhanced set
                    cachedTasks = enhancedTasks;
                    cacheTimestamp.time = now;
                    return enhancedTasks;
                }
            }
            return cachedTasks;
        }
        // First verify Firebase connection - pass the guest mode flag
        const isConnected = await verifyFirebaseConnection(isGuestModeConfirmed);
        // Special handling for guest mode
        if (isGuestModeConfirmed && !isConnected) {
            console.log('👤 Guest mode detected with no connection - using enhanced sample data');
            const sampleTasks = getSampleTasks();
            // In guest mode with no connection, prioritize video tasks
            const videoTasks = sampleTasks.filter(t => t.taskType === 'video');
            console.log('📺 Sample video tasks available for guest mode:', videoTasks.length);
            // Update cache
            cachedTasks = sampleTasks;
            cacheTimestamp.time = now;
            return sampleTasks;
        }
        if (!isConnected) {
            console.warn('⚠️ Firebase connection issue detected, using fallback data');
            // If we have previously cached tasks, use those instead of sample tasks
            if (cachedTasks && cachedTasks.length > 0) {
                console.log('📋 Using previously cached tasks despite connection issues');
                return cachedTasks;
            }
            // Otherwise, use sample tasks
            const sampleTasks = getSampleTasks();
            console.log('📋 Using sample tasks with video content:', sampleTasks.filter(t => t.taskType === 'video').length);
            return sampleTasks;
        }
        // Connection verified, proceed with Firestore query
        console.log('🔥 Querying Firestore for active tasks...');
        const tasksRef = collection(db, 'ecgTasks');
        const q = query(tasksRef, where('taskStatus', '==', 'active'), orderBy('usageCount', 'asc'));
        const querySnapshot = await getDocs(q);
        const tasks = [];
        querySnapshot.forEach((doc) => {
            tasks.push({
                id: doc.id,
                ...doc.data()
            });
        });
        // Log specific details about task types for debugging
        const videoTasks = tasks.filter(t => t.taskType === 'video');
        const quizTasks = tasks.filter(t => t.taskType === 'quiz');
        console.log('✅ Fetched', tasks.length, 'active tasks from Firestore');
        console.log('📊 Task types breakdown:', {
            video: videoTasks.length,
            quiz: quizTasks.length,
            other: tasks.length - videoTasks.length - quizTasks.length
        });
        if (videoTasks.length > 0) {
            console.log('📺 Sample video task:', {
                title: videoTasks[0].videoTitle,
                youtubeId: videoTasks[0].youtubeVideoId,
                thumbnail: videoTasks[0].youtubeThumbnail ? '✅' : '❌'
            });
        }
        // Handle specific issue: No video tasks but we're in guest mode
        if (isGuestModeConfirmed && videoTasks.length < 3) {
            console.warn('⚠️ Insufficient video tasks for guest mode, supplementing with sample video tasks');
            // Get sample tasks and extract video tasks
            const sampleTasks = getSampleTasks();
            const sampleVideoTasks = sampleTasks.filter(t => t.taskType === 'video');
            // Combine real tasks with sample video tasks, avoiding duplicates
            const enhancedTasks = [
                ...tasks,
                ...sampleVideoTasks.filter(st => !tasks.some(t => t.id === st.id))
            ];
            console.log('🔀 Enhanced tasks count:', enhancedTasks.length);
            console.log('📺 Video tasks after enhancement:', enhancedTasks.filter(t => t.taskType === 'video').length);
            // Update cache
            cachedTasks = enhancedTasks;
            cacheTimestamp.time = now;
            return enhancedTasks;
        }
        // If we got 0 tasks from Firebase (which is unlikely if properly set up),
        // return sample tasks to ensure the app has content
        if (tasks.length === 0) {
            console.warn('⚠️ No tasks found in Firestore, returning sample tasks');
            const sampleTasks = getSampleTasks();
            // Update cache
            cachedTasks = sampleTasks;
            cacheTimestamp.time = now;
            return sampleTasks;
        }
        // Update our cache
        cachedTasks = tasks;
        cacheTimestamp.time = now;
        return tasks;
    }
    catch (error) {
        console.error('❌ Error fetching tasks from Firestore:', error);
        // If we have previously cached tasks, use those instead of sample tasks
        if (cachedTasks && cachedTasks.length > 0) {
            console.log('📋 Using previously cached tasks due to error');
            return cachedTasks;
        }
        // Otherwise, use sample tasks with enhanced video content
        console.log('🔄 Returning sample tasks with enhanced video content...');
        const sampleTasks = getSampleTasks();
        // Update cache even for fallback tasks
        cachedTasks = sampleTasks;
        cacheTimestamp.time = Date.now();
        return sampleTasks;
    }
};
// Enhanced sample tasks for development with more video content
const getSampleTasks = () => {
    return [
        {
            id: 'sample-1',
            taskId: 1,
            taskStatus: 'active',
            question: 'What is the normal heart rate range for adults?',
            taskType: 'quiz',
            optionA: '60-100 bpm',
            optionB: '80-120 bpm',
            optionC: '40-80 bpm',
            optionD: '100-140 bpm',
            correctAnswer: '60-100 bpm',
            xp: 10,
            difficulty: 'easy',
            explanation: 'Normal adult heart rate is 60-100 beats per minute at rest',
            usageCount: 0,
            priority: 1
        },
        {
            id: 'sample-2',
            taskId: 2,
            taskStatus: 'active',
            question: 'Which lead shows the best view of the inferior wall?',
            taskType: 'quiz',
            optionA: 'Lead II',
            optionB: 'Lead V1',
            optionC: 'Lead aVF',
            optionD: 'Lead V6',
            correctAnswer: 'Lead aVF',
            xp: 15,
            difficulty: 'medium',
            explanation: 'Lead aVF provides the best view of the inferior wall of the heart',
            usageCount: 0,
            priority: 1
        },
        // YouTube video tasks - increased number for guest mode
        {
            id: 'sample-video-1',
            taskId: 101,
            taskStatus: 'active',
            question: 'Watch this ECG interpretation tutorial',
            taskType: 'video',
            correctAnswer: 'video-watched',
            xp: 25,
            difficulty: 'easy',
            explanation: 'This video explains basic ECG interpretation techniques',
            usageCount: 0,
            priority: 2,
            youtubeVideoId: 'dEZ2pGJdvTg',
            youtubeEmbedUrl: 'https://www.youtube.com/embed/dEZ2pGJdvTg',
            youtubeWatchUrl: 'https://www.youtube.com/watch?v=dEZ2pGJdvTg',
            youtubeThumbnail: 'https://img.youtube.com/vi/dEZ2pGJdvTg/hqdefault.jpg',
            videoTitle: 'ECG Interpretation - Basic Principles',
            videoDescription: 'Learn the fundamentals of ECG interpretation in this comprehensive tutorial',
            videoDuration: 480, // 8 minutes
            gems: 15
        },
        {
            id: 'sample-video-2',
            taskId: 102,
            taskStatus: 'active',
            question: 'Learn about arrhythmia detection in this video',
            taskType: 'video',
            correctAnswer: 'video-watched',
            xp: 30,
            difficulty: 'medium',
            explanation: 'This video covers common arrhythmias and how to identify them',
            usageCount: 0,
            priority: 2,
            youtubeVideoId: 'Knv6AeghK_Y',
            youtubeEmbedUrl: 'https://www.youtube.com/embed/Knv6AeghK_Y',
            youtubeWatchUrl: 'https://www.youtube.com/watch?v=Knv6AeghK_Y',
            youtubeThumbnail: 'https://img.youtube.com/vi/Knv6AeghK_Y/hqdefault.jpg',
            videoTitle: 'Common Arrhythmias Detection',
            videoDescription: 'Learn to identify the most common cardiac arrhythmias on ECG',
            videoDuration: 550, // About 9 minutes
            gems: 20
        },
        {
            id: 'sample-video-3',
            taskId: 103,
            taskStatus: 'active',
            question: 'ECG Basics: How to Identify a Normal ECG',
            taskType: 'video',
            correctAnswer: 'video-watched',
            xp: 20,
            difficulty: 'easy',
            explanation: 'This video teaches you how to recognize a normal ECG pattern',
            usageCount: 0,
            priority: 1,
            youtubeVideoId: 'HB6S3MHr4fE',
            youtubeEmbedUrl: 'https://www.youtube.com/embed/HB6S3MHr4fE',
            youtubeWatchUrl: 'https://www.youtube.com/watch?v=HB6S3MHr4fE',
            youtubeThumbnail: 'https://img.youtube.com/vi/HB6S3MHr4fE/hqdefault.jpg',
            videoTitle: 'Normal ECG Patterns',
            videoDescription: 'Learn how to identify a normal ECG and key features to look for',
            videoDuration: 420, // 7 minutes
            gems: 15
        },
        {
            id: 'sample-video-4',
            taskId: 104,
            taskStatus: 'active',
            question: 'ST Elevation Myocardial Infarction (STEMI) Tutorial',
            taskType: 'video',
            correctAnswer: 'video-watched',
            xp: 35,
            difficulty: 'medium',
            explanation: 'Learn to identify STEMI patterns on ECG',
            usageCount: 0,
            priority: 2,
            youtubeVideoId: '9wcWr_S5QZg',
            youtubeEmbedUrl: 'https://www.youtube.com/embed/9wcWr_S5QZg',
            youtubeWatchUrl: 'https://www.youtube.com/watch?v=9wcWr_S5QZg',
            youtubeThumbnail: 'https://img.youtube.com/vi/9wcWr_S5QZg/hqdefault.jpg',
            videoTitle: 'STEMI Patterns on ECG',
            videoDescription: 'Comprehensive guide to identifying ST elevation myocardial infarction patterns',
            videoDuration: 600, // 10 minutes
            gems: 25
        },
        {
            id: 'sample-3',
            taskId: 3,
            taskStatus: 'active',
            question: 'What does a prolonged QT interval increase the risk of?',
            taskType: 'quiz',
            optionA: 'Atrial fibrillation',
            optionB: 'Torsades de pointes',
            optionC: 'Heart block',
            optionD: 'Bradycardia',
            correctAnswer: 'Torsades de pointes',
            xp: 20,
            difficulty: 'hard',
            explanation: 'Prolonged QT interval is a risk factor for torsades de pointes',
            usageCount: 0,
            priority: 1
        },
        {
            id: 'sample-4',
            taskId: 4,
            taskStatus: 'active',
            question: 'What is the normal PR interval duration?',
            taskType: 'quiz',
            optionA: '0.12-0.20 seconds',
            optionB: '0.06-0.12 seconds',
            optionC: '0.20-0.40 seconds',
            optionD: '0.04-0.08 seconds',
            correctAnswer: '0.12-0.20 seconds',
            xp: 10,
            difficulty: 'easy',
            explanation: 'Normal PR interval is 0.12-0.20 seconds (3-5 small squares)',
            usageCount: 0,
            priority: 1
        },
        {
            id: 'sample-5',
            taskId: 5,
            taskStatus: 'active',
            question: 'Which rhythm is characterized by irregular R-R intervals?',
            taskType: 'quiz',
            optionA: 'Sinus rhythm',
            optionB: 'Atrial fibrillation',
            optionC: 'Ventricular tachycardia',
            optionD: 'Complete heart block',
            correctAnswer: 'Atrial fibrillation',
            xp: 15,
            difficulty: 'medium',
            explanation: 'Atrial fibrillation shows irregularly irregular R-R intervals',
            usageCount: 0,
            priority: 1
        }
    ];
};
// Update task usage count
export const updateTaskUsage = async (taskId) => {
    try {
        console.log('🔄 Updating task usage for:', taskId);
        // Skip updating sample tasks
        if (taskId.startsWith('sample-')) {
            console.log('⏭️ Skipping usage update for sample task');
            return;
        }
        const taskRef = doc(db, 'ecgTasks', taskId);
        const today = new Date().toISOString().split('T')[0];
        // Get current task to increment usage count
        const taskDoc = await getDoc(taskRef);
        if (!taskDoc.exists()) {
            console.warn('⚠️ Task not found for usage update:', taskId);
            return;
        }
        const currentUsageCount = taskDoc.data().usageCount || 0;
        await updateDoc(taskRef, {
            lastUsedDate: today,
            usageCount: currentUsageCount + 1
        });
        console.log('✅ Updated task usage:', taskId, 'count:', currentUsageCount + 1);
    }
    catch (error) {
        console.error('❌ Failed to update task usage:', error);
    }
};
// Smart task selection algorithm
export const selectDailyTasks = (allTasks, seed, count = 5) => {
    console.log('🎯 Selecting daily tasks:', { totalTasks: allTasks.length, seed, count });
    if (allTasks.length === 0) {
        console.warn('⚠️ No tasks available for selection');
        return [];
    }
    // Function to create consistent random numbers from seed
    const random = (index) => {
        const x = Math.sin(seed + index) * 10000;
        return x - Math.floor(x);
    };
    // Separate tasks by type for better selection
    const videoTasks = allTasks.filter(task => task.taskType === 'video');
    const quizTasks = allTasks.filter(task => task.taskType === 'quiz');
    const otherTasks = allTasks.filter(task => task.taskType !== 'video' && task.taskType !== 'quiz');
    console.log('📊 Available tasks by type:', {
        video: videoTasks.length,
        quiz: quizTasks.length,
        other: otherTasks.length
    });
    // If we have no video tasks, log a warning
    if (videoTasks.length === 0) {
        console.warn('⚠️ No video tasks available - this may indicate a Firebase connection issue');
    }
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const sevenDaysAgoStr = sevenDaysAgo.toISOString().split('T')[0];
    // Get tasks not used in the last 7 days
    const recentlyUnusedTasks = allTasks.filter(task => !task.lastUsedDate || task.lastUsedDate < sevenDaysAgoStr);
    console.log('📅 Tasks not used in last 7 days:', recentlyUnusedTasks.length);
    // Initialize selection array
    const selected = [];
    // STEP 1: ALWAYS include at least one video task if available
    if (videoTasks.length > 0) {
        // Use the seed to deterministically select a video task
        const videoIndex = Math.floor(random(42) * videoTasks.length);
        selected.push(videoTasks[videoIndex]);
        console.log('📺 Selected video task:', videoTasks[videoIndex].question);
    }
    // STEP 2: Add weighted selection for remaining tasks
    // Prepare the pool of remaining tasks, excluding already selected ones
    const remainingTasksPool = allTasks.filter(task => !selected.some(s => s.id === task.id));
    // Weight the tasks based on usage count and randomness
    const weightedTasks = remainingTasksPool.map((task, index) => ({
        ...task,
        // Formula: Less used tasks get higher weight + some randomness
        weight: (1 / ((task.usageCount || 0) + 1)) + (task.priority || 1) * 0.5 + random(index) * 0.3
    })).sort((a, b) => b.weight - a.weight);
    // Track difficulty distribution
    const difficultyCount = { easy: 0, medium: 0, hard: 0 };
    // Count difficulties of already selected tasks
    selected.forEach(task => {
        const difficulty = task.difficulty;
        if (difficulty)
            difficultyCount[difficulty]++;
    });
    // STEP 3: Fill remaining slots with balanced difficulty
    for (const task of weightedTasks) {
        if (selected.length >= count)
            break;
        const difficulty = task.difficulty;
        // Calculate max per difficulty - allow slightly more easy tasks
        const maxPerDifficulty = difficulty === 'easy'
            ? Math.ceil(count / 2)
            : Math.ceil(count / 3);
        if (difficultyCount[difficulty] < maxPerDifficulty) {
            selected.push(task);
            difficultyCount[difficulty]++;
        }
    }
    // STEP 4: If we still don't have enough tasks, add any remaining
    while (selected.length < count && selected.length < allTasks.length) {
        const remaining = weightedTasks.filter(task => !selected.some(s => s.id === task.id));
        if (remaining.length > 0) {
            selected.push(remaining[0]);
        }
        else
            break;
    }
    const finalSelection = selected.slice(0, count);
    // Log detailed selection info for debugging
    console.log('✅ Final task selection:', finalSelection.map(t => ({
        id: t.id,
        type: t.taskType,
        question: t.question?.substring(0, 30) + '...',
        difficulty: t.difficulty,
        videoId: t.taskType === 'video' ? t.youtubeVideoId : undefined
    })));
    // Double check video task inclusion
    const videoTaskCount = finalSelection.filter(t => t.taskType === 'video').length;
    console.log(`📊 Task type distribution: ${videoTaskCount} video task(s), ${finalSelection.length - videoTaskCount} other tasks`);
    return finalSelection;
};
