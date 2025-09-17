import { collection, getDocs, doc, updateDoc, query, where, orderBy, limit, increment } from 'firebase/firestore';
import { db, testFirebaseConnection, handleFirebaseError } from '../firebase';
const CACHE_KEY = 'ecg-tasks-cache';
const CACHE_EXPIRY = 30 * 60 * 1000; // 30 minutes
const CACHE_VERSION = '2.0'; // Update this when task structure changes
// In-memory cache
let memoryCache = null;
// Enhanced cache management
const getCachedTasks = () => {
    try {
        // Check memory cache first
        if (memoryCache &&
            Date.now() - memoryCache.timestamp < CACHE_EXPIRY &&
            memoryCache.version === CACHE_VERSION) {
            console.log('📚 Using memory cached tasks');
            return memoryCache.tasks;
        }
        // Check localStorage cache
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
            const parsedCache = JSON.parse(cached);
            if (Date.now() - parsedCache.timestamp < CACHE_EXPIRY &&
                parsedCache.version === CACHE_VERSION) {
                console.log('💾 Using localStorage cached tasks');
                // Update memory cache
                memoryCache = parsedCache;
                return parsedCache.tasks;
            }
            else {
                console.log('🗑️ Cache expired, clearing...');
                localStorage.removeItem(CACHE_KEY);
            }
        }
        return null;
    }
    catch (error) {
        console.warn('⚠️ Error reading cache:', error);
        localStorage.removeItem(CACHE_KEY);
        return null;
    }
};
const setCachedTasks = (tasks) => {
    try {
        const cache = {
            tasks,
            timestamp: Date.now(),
            version: CACHE_VERSION
        };
        // Update memory cache
        memoryCache = cache;
        // Update localStorage cache
        localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
        console.log(`💾 Cached ${tasks.length} tasks`);
    }
    catch (error) {
        console.warn('⚠️ Error saving cache:', error);
    }
};
// Enhanced sample tasks with more video content
const getEnhancedSampleTasks = () => {
    return [
        // Video Tasks
        {
            id: 'sample-video-1',
            taskId: 101,
            taskStatus: 'active',
            question: 'ECG Interpretation Basics - Understanding Normal Rhythms',
            taskType: 'video',
            correctAnswer: 'video-watched',
            xp: 25,
            difficulty: 'easy',
            explanation: 'This video covers the fundamentals of ECG interpretation and normal cardiac rhythms',
            usageCount: 0,
            priority: 1,
            youtubeVideoId: 'dEZ2pGJdvTg',
            youtubeEmbedUrl: 'https://www.youtube.com/embed/dEZ2pGJdvTg',
            youtubeWatchUrl: 'https://www.youtube.com/watch?v=dEZ2pGJdvTg',
            youtubeThumbnail: 'https://img.youtube.com/vi/dEZ2pGJdvTg/hqdefault.jpg',
            videoTitle: 'ECG Interpretation - Normal Rhythms',
            videoDescription: 'Learn to identify normal ECG patterns and understand the basics of cardiac rhythm interpretation',
            videoDuration: 480,
            gems: 20
        },
        {
            id: 'sample-video-2',
            taskId: 102,
            taskStatus: 'active',
            question: 'Common Arrhythmias - Recognition and Clinical Significance',
            taskType: 'video',
            correctAnswer: 'video-watched',
            xp: 35,
            difficulty: 'medium',
            explanation: 'Advanced tutorial on identifying and understanding common cardiac arrhythmias',
            usageCount: 0,
            priority: 2,
            youtubeVideoId: 'Knv6AeghK_Y',
            youtubeEmbedUrl: 'https://www.youtube.com/embed/Knv6AeghK_Y',
            youtubeWatchUrl: 'https://www.youtube.com/watch?v=Knv6AeghK_Y',
            youtubeThumbnail: 'https://img.youtube.com/vi/Knv6AeghK_Y/hqdefault.jpg',
            videoTitle: 'Common Arrhythmias Identification',
            videoDescription: 'Comprehensive guide to recognizing atrial fibrillation, ventricular tachycardia, and other common arrhythmias',
            videoDuration: 720,
            gems: 30
        },
        {
            id: 'sample-video-3',
            taskId: 103,
            taskStatus: 'active',
            question: 'STEMI Recognition - Identifying Heart Attacks on ECG',
            taskType: 'video',
            correctAnswer: 'video-watched',
            xp: 40,
            difficulty: 'hard',
            explanation: 'Critical skills for identifying ST-elevation myocardial infarction patterns',
            usageCount: 0,
            priority: 2,
            youtubeVideoId: '9wcWr_S5QZg',
            youtubeEmbedUrl: 'https://www.youtube.com/embed/9wcWr_S5QZg',
            youtubeWatchUrl: 'https://www.youtube.com/watch?v=9wcWr_S5QZg',
            youtubeThumbnail: 'https://img.youtube.com/vi/9wcWr_S5QZg/hqdefault.jpg',
            videoTitle: 'STEMI Patterns and Recognition',
            videoDescription: 'Learn to quickly identify ST-elevation patterns and understand their clinical implications',
            videoDuration: 900,
            gems: 40
        },
        {
            id: 'sample-video-4',
            taskId: 104,
            taskStatus: 'active',
            question: 'ECG Lead Placement and Troubleshooting',
            taskType: 'video',
            correctAnswer: 'video-watched',
            xp: 20,
            difficulty: 'easy',
            explanation: 'Practical guide to proper ECG lead placement and common artifacts',
            usageCount: 0,
            priority: 1,
            youtubeVideoId: 'HB6S3MHr4fE',
            youtubeEmbedUrl: 'https://www.youtube.com/embed/HB6S3MHr4fE',
            youtubeWatchUrl: 'https://www.youtube.com/watch?v=HB6S3MHr4fE',
            youtubeThumbnail: 'https://img.youtube.com/vi/HB6S3MHr4fE/hqdefault.jpg',
            videoTitle: 'Proper ECG Lead Placement',
            videoDescription: 'Step-by-step guide to correct ECG electrode placement and artifact recognition',
            videoDuration: 360,
            gems: 15
        },
        // Quiz Tasks
        {
            id: 'sample-quiz-1',
            taskId: 201,
            taskStatus: 'active',
            question: 'What is the normal heart rate range for adults at rest?',
            taskType: 'quiz',
            optionA: '60-100 bpm',
            optionB: '80-120 bpm',
            optionC: '40-80 bpm',
            optionD: '100-140 bpm',
            correctAnswer: '60-100 bpm',
            xp: 10,
            difficulty: 'easy',
            explanation: 'Normal adult resting heart rate is 60-100 beats per minute. Rates below 60 are bradycardia, above 100 are tachycardia.',
            usageCount: 0,
            priority: 1
        },
        {
            id: 'sample-quiz-2',
            taskId: 202,
            taskStatus: 'active',
            question: 'Which lead provides the best view of the inferior wall of the heart?',
            taskType: 'quiz',
            optionA: 'Lead II',
            optionB: 'Lead V1',
            optionC: 'Lead aVF',
            optionD: 'Lead V6',
            correctAnswer: 'Lead aVF',
            xp: 15,
            difficulty: 'medium',
            explanation: 'Lead aVF, along with leads II and III, provides the best view of the inferior wall of the heart.',
            usageCount: 0,
            priority: 1
        },
        {
            id: 'sample-quiz-3',
            taskId: 203,
            taskStatus: 'active',
            question: 'What does a prolonged QT interval increase the risk of?',
            taskType: 'quiz',
            optionA: 'Atrial fibrillation',
            optionB: 'Torsades de pointes',
            optionC: 'Complete heart block',
            optionD: 'Sinus bradycardia',
            correctAnswer: 'Torsades de pointes',
            xp: 25,
            difficulty: 'hard',
            explanation: 'Prolonged QT interval is a major risk factor for torsades de pointes, a potentially fatal arrhythmia.',
            usageCount: 0,
            priority: 1
        }
    ];
};
// Enhanced Firebase connection verification
const verifyFirebaseConnection = async (isGuestMode = false) => {
    try {
        console.log(`🔄 Verifying Firebase connection (Guest mode: ${isGuestMode})`);
        // Test the connection using our new firebase module
        const isConnected = await testFirebaseConnection();
        if (isConnected) {
            console.log('✅ Firebase connection verified');
            return true;
        }
        else {
            console.log('❌ Firebase connection test failed');
            return false;
        }
    }
    catch (error) {
        console.error('❌ Firebase connection verification error:', error);
        return false;
    }
};
// Enhanced task fetching with comprehensive error handling
export const fetchAllActiveTasks = async (isGuestMode = false) => {
    try {
        console.log('🔄 Fetching ECG tasks...');
        console.log(`👤 Mode: ${isGuestMode ? 'Guest' : 'Authenticated'}`);
        // Check cache first
        const cachedTasks = getCachedTasks();
        if (cachedTasks && cachedTasks.length > 0) {
            console.log(`✅ Using cached tasks (${cachedTasks.length} tasks)`);
            // For guest mode, ensure we have enough video tasks
            if (isGuestMode) {
                const videoTasks = cachedTasks.filter(t => t.taskType === 'video');
                if (videoTasks.length < 3) {
                    console.log('🎥 Enhancing cache with sample video tasks for guest mode');
                    const sampleTasks = getEnhancedSampleTasks();
                    const sampleVideoTasks = sampleTasks.filter(t => t.taskType === 'video');
                    const enhancedTasks = [
                        ...cachedTasks,
                        ...sampleVideoTasks.filter(st => !cachedTasks.some(ct => ct.id === st.id))
                    ];
                    setCachedTasks(enhancedTasks);
                    return enhancedTasks;
                }
            }
            return cachedTasks;
        }
        // Verify Firebase connection
        const isConnected = await verifyFirebaseConnection(isGuestMode);
        if (!isConnected) {
            console.warn('⚠️ Firebase connection failed, using sample data');
            const sampleTasks = getEnhancedSampleTasks();
            setCachedTasks(sampleTasks);
            return sampleTasks;
        }
        // Fetch from Firestore
        console.log('🔥 Fetching from Firestore...');
        const tasksRef = collection(db, 'ecgTasks');
        const q = query(tasksRef, where('taskStatus', '==', 'active'), orderBy('usageCount', 'asc'), limit(50) // Limit to prevent large downloads
        );
        const querySnapshot = await getDocs(q);
        const tasks = [];
        querySnapshot.forEach((doc) => {
            tasks.push({
                id: doc.id,
                ...doc.data()
            });
        });
        // Log task breakdown
        const videoTasks = tasks.filter(t => t.taskType === 'video');
        const quizTasks = tasks.filter(t => t.taskType === 'quiz');
        console.log(`✅ Fetched ${tasks.length} tasks from Firestore`);
        console.log(`📊 Breakdown: ${videoTasks.length} videos, ${quizTasks.length} quizzes`);
        // Handle insufficient content scenarios
        if (tasks.length === 0) {
            console.warn('⚠️ No tasks found in Firestore, using sample data');
            const sampleTasks = getEnhancedSampleTasks();
            setCachedTasks(sampleTasks);
            return sampleTasks;
        }
        // For guest mode, ensure adequate video content
        if (isGuestMode && videoTasks.length < 3) {
            console.log('🎥 Supplementing with sample video tasks for guest mode');
            const sampleTasks = getEnhancedSampleTasks();
            const sampleVideoTasks = sampleTasks.filter(t => t.taskType === 'video');
            const enhancedTasks = [
                ...tasks,
                ...sampleVideoTasks.filter(st => !tasks.some(t => t.id === st.id))
            ];
            setCachedTasks(enhancedTasks);
            return enhancedTasks;
        }
        // Cache the results
        setCachedTasks(tasks);
        return tasks;
    }
    catch (error) {
        console.error('❌ Error fetching tasks:', error);
        console.error('Error details:', handleFirebaseError(error));
        // Try to use cache even if expired
        const emergencyCache = getCachedTasks();
        if (emergencyCache) {
            console.log('🆘 Using emergency cache despite expiration');
            return emergencyCache;
        }
        // Final fallback to sample data
        console.log('🆘 Final fallback to sample data');
        const sampleTasks = getEnhancedSampleTasks();
        setCachedTasks(sampleTasks);
        return sampleTasks;
    }
};
// Enhanced task selection with improved video prioritization
export const selectDailyTasks = (allTasks, seed, count = 5, prioritizeVideos = false) => {
    console.log(`🎯 Selecting ${count} daily tasks from ${allTasks.length} available`);
    if (allTasks.length === 0)
        return [];
    // Separate tasks by type
    const videoTasks = allTasks.filter(task => task.taskType === 'video');
    const otherTasks = allTasks.filter(task => task.taskType !== 'video');
    console.log(`📊 Available: ${videoTasks.length} videos, ${otherTasks.length} other tasks`);
    // For guest mode or when prioritizing videos, ensure at least 2-3 video tasks
    let selectedTasks = [];
    if (prioritizeVideos && videoTasks.length > 0) {
        // Select 2-3 video tasks first
        const videoCount = Math.min(Math.ceil(count * 0.6), videoTasks.length, 3);
        const selectedVideos = videoTasks
            .sort(() => 0.5 - Math.random()) // Simple shuffle based on seed
            .slice(0, videoCount);
        selectedTasks.push(...selectedVideos);
        console.log(`🎥 Selected ${selectedVideos.length} video tasks`);
    }
    // Fill remaining slots with other tasks
    const remainingSlots = count - selectedTasks.length;
    if (remainingSlots > 0 && otherTasks.length > 0) {
        const availableOtherTasks = otherTasks.filter(task => !selectedTasks.some(selected => selected.id === task.id));
        const selectedOthers = availableOtherTasks
            .sort(() => 0.5 - Math.random())
            .slice(0, remainingSlots);
        selectedTasks.push(...selectedOthers);
        console.log(`📚 Selected ${selectedOthers.length} other tasks`);
    }
    // If we still need more tasks, fill with any remaining tasks
    if (selectedTasks.length < count) {
        const remainingTasks = allTasks.filter(task => !selectedTasks.some(selected => selected.id === task.id));
        const additionalTasks = remainingTasks
            .sort(() => 0.5 - Math.random())
            .slice(0, count - selectedTasks.length);
        selectedTasks.push(...additionalTasks);
    }
    console.log(`✅ Final selection: ${selectedTasks.length} tasks`);
    console.log(`📊 Types: ${selectedTasks.filter(t => t.taskType === 'video').length} videos, ${selectedTasks.filter(t => t.taskType !== 'video').length} others`);
    return selectedTasks.slice(0, count);
};
// Enhanced task usage tracking
export const updateTaskUsage = async (taskId) => {
    try {
        // Skip Firestore operations in development to prevent permission errors
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log(`🚧 Skipping task usage update in development environment: ${taskId}`);
            return;
        }
        console.log(`📈 Updating usage for task: ${taskId}`);
        // Test connection first
        const isConnected = await verifyFirebaseConnection();
        if (!isConnected) {
            console.warn('⚠️ Cannot update task usage - Firebase not connected');
            return;
        }
        const taskRef = doc(db, 'ecgTasks', taskId);
        await updateDoc(taskRef, {
            usageCount: increment(1),
            lastUsed: new Date().toISOString()
        });
        console.log('✅ Task usage updated successfully');
    }
    catch (error) {
        console.error('❌ Error updating task usage:', error);
        // Don't throw - this is not critical for user experience
    }
};
// Cache management utilities
export const clearTaskCache = () => {
    localStorage.removeItem(CACHE_KEY);
    memoryCache = null;
    console.log('🗑️ Task cache cleared');
};
export const getCacheInfo = () => {
    const cached = getCachedTasks();
    return {
        hasCachedTasks: !!cached,
        taskCount: cached?.length || 0,
        isExpired: false // If we got here, cache is valid
    };
};
// Diagnostic utilities
export const diagnoseTaskService = async () => {
    console.log('🔍 ECG Task Service Diagnostics');
    console.log('================================');
    const cacheInfo = getCacheInfo();
    console.log('Cache Status:', cacheInfo);
    const connectionTest = await verifyFirebaseConnection();
    console.log('Firebase Connection:', connectionTest ? 'OK' : 'FAILED');
    try {
        const tasks = await fetchAllActiveTasks(true);
        console.log('Task Fetch Test:', `${tasks.length} tasks retrieved`);
        const videoTasks = tasks.filter(t => t.taskType === 'video');
        console.log('Video Tasks Available:', videoTasks.length);
        return {
            cacheWorking: cacheInfo.hasCachedTasks,
            firebaseWorking: connectionTest,
            tasksAvailable: tasks.length > 0,
            videoTasksAvailable: videoTasks.length > 0
        };
    }
    catch (error) {
        console.error('Task Service Error:', error);
        return {
            cacheWorking: false,
            firebaseWorking: false,
            tasksAvailable: false,
            videoTasksAvailable: false,
            error: error.message
        };
    }
};
