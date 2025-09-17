import { useState, useEffect, useCallback } from 'react';
import { User, DailyTask, GameState, RANK_THRESHOLDS } from '@/types/game';
import { toast } from '@/components/ui/use-toast';
import { 
  fetchAllActiveTasks, 
  selectDailyTasks, 
  updateTaskUsage,
  FirestoreTask 
} from '@/services/firestore-tasks';
import { checkAchievements, updateUserActivity } from '@/services/achievements';
import { auth, db, getUserData, createUserIfNotExists, updateUserStreak } from "@/firebase";
import { doc, setDoc, getDoc, onSnapshot, collection, query, where } from "firebase/firestore";
import { unifiedNotificationService } from '@/services/unifiedNotificationService';
import { useRewardSound } from './useRewardSound';

// Valid task types and difficulties
const validTaskTypes = ['quiz', 'flashcard', 'case', 'rhythm', 'lead-match', 'video'] as const;
type ValidTaskType = typeof validTaskTypes[number];

const validDifficulties = ['easy', 'medium', 'hard'] as const;
type ValidDifficulty = typeof validDifficulties[number];

const isValidTaskType = (type: string): type is ValidTaskType => {
  return validTaskTypes.includes(type as ValidTaskType);
};

const isValidDifficulty = (difficulty: string): difficulty is ValidDifficulty => {
  return validDifficulties.includes(difficulty as ValidDifficulty);
};

const getRankFromXP = (xp: number): User['rank'] => {
  // Find the highest rank the user qualifies for
  for (let i = RANK_THRESHOLDS.length - 1; i >= 0; i--) {
    if (xp >= RANK_THRESHOLDS[i].xpRequired) {
      return RANK_THRESHOLDS[i].rank;
    }
  }
  return 'ECGKid Intern'; // Default to the lowest rank
};

// Enhanced task selection with video prioritization
const selectDailyTasksWithVideos = (allTasks: FirestoreTask[], seed: number, count: number = 5): FirestoreTask[] => {
  console.log(`🎯 Selecting ${count} daily tasks from ${allTasks.length} available tasks`);
  
  if (allTasks.length === 0) return [];
  
  // Separate video tasks from other tasks
  const videoTasks = allTasks.filter(task => task.taskType === 'video');
  const otherTasks = allTasks.filter(task => task.taskType !== 'video');
  
  console.log(`📺 Found ${videoTasks.length} video tasks, ${otherTasks.length} other tasks`);
  
  // Ensure at least 1 video task appears every day (if available)
  const selectedTasks: FirestoreTask[] = [];
  
  // Always include 1 video task if available (guaranteed video every day)
  if (videoTasks.length > 0) {
    const videoIndex = seed % videoTasks.length;
    selectedTasks.push(videoTasks[videoIndex]);
    console.log(`✅ Selected video task: ${videoTasks[videoIndex].question}`);
  }
  
  // Create weighted list for remaining tasks
  const remainingSlots = count - selectedTasks.length;
  const availableOtherTasks = otherTasks.filter(task => !selectedTasks.includes(task));
  
  // Simple random selection for remaining slots
  const shuffledOtherTasks = [...availableOtherTasks].sort(() => {
    // Use seed for deterministic "randomness"
    return (seed * 9301 + 49297) % 233280 / 233280 - 0.5;
  });
  
  // Fill remaining slots with other task types
  for (let i = 0; i < remainingSlots && i < shuffledOtherTasks.length; i++) {
    selectedTasks.push(shuffledOtherTasks[i]);
  }
  
  // Add more video tasks if we have slots and video tasks available
  const remainingVideoTasks = videoTasks.filter(task => !selectedTasks.includes(task));
  const stillNeedTasks = count - selectedTasks.length;
  
  for (let i = 0; i < stillNeedTasks && i < remainingVideoTasks.length; i++) {
    selectedTasks.push(remainingVideoTasks[i]);
    console.log(`✅ Added additional video task: ${remainingVideoTasks[i].question}`);
  }
  
  console.log('✅ Final task selection:', selectedTasks.map(t => ({ 
    id: t.id, 
    type: t.taskType,
    question: t.question?.substring(0, 50) + '...',
  })));

  return selectedTasks.slice(0, count);
};

export const useGameState = () => {
  // Initialize all state variables first to maintain consistent hook order
  const [gameState, setGameState] = useState<GameState>({
    user: null,
    dailyTasks: [],
    completedTasks: 0,
    todayDate: new Date().toDateString(),
    isAuthenticated: false,
    isGuestUser: false,
    learningProgress: {},
    currentLearningModule: undefined,
    currentLearningLesson: undefined,
    showHeartShop: false,
  });
  
  const [lastRefreshTime, setLastRefreshTime] = useState<number>(Date.now());
  
  // Custom hooks after all useState calls
  const { playRewardSound } = useRewardSound();

  // Fetch daily tasks from Firestore with video prioritization
  const fetchDailyTasksFromFirestore = useCallback(async (): Promise<DailyTask[]> => {
    try {
      console.log('🔄 Fetching daily tasks from Firestore...');
      
      // Get today's date as seed for consistent daily selection
      const daysSinceEpoch = Math.floor(Date.now() / (1000 * 60 * 60 * 24));
      
      // Check if we're in guest mode
      const isGuestMode = gameState.isGuestUser;
      console.log(isGuestMode ? '🧑‍🦱 Operating in guest mode' : '👤 Operating in authenticated mode');
      
      // Fetch all active tasks from Firestore - pass the guest mode flag
      const firestoreTasks = await fetchAllActiveTasks(isGuestMode);
      
      // Log more details about the Firestore connection
      console.log('🔥 Firebase connection status:', db ? 'Connected' : 'Not connected');
      console.log('🔑 Firebase authentication status:', auth?.currentUser ? `Authenticated as ${auth.currentUser.uid}` : 'Not authenticated');
      
      if (firestoreTasks.length === 0) {
        console.warn('⚠️ No active tasks found in Firestore');
        toast({
          title: 'No Tasks Available',
          description: 'No active tasks found. Please import tasks to Firestore.',
          variant: 'destructive',
        });
        return [];
      }

      console.log(`📋 Found ${firestoreTasks.length} active tasks in Firestore`);
      console.log(`📺 Video tasks available: ${firestoreTasks.filter(t => t.taskType === 'video').length}`);

      // DEBUG: Log raw Firestore tasks
      console.log('🔍 DEBUG: Raw Firestore tasks:', firestoreTasks.map(t => ({
        id: t.id,
        taskType: t.taskType,
        question: t.question?.substring(0, 50),
        youtubeVideoId: t.youtubeVideoId
      })));

      // Use enhanced selection with video prioritization
      const selectedTasks = selectDailyTasksWithVideos(firestoreTasks, daysSinceEpoch, 5);
      
      console.log(`🎯 Selected ${selectedTasks.length} tasks for today`);

      // DEBUG: Log selected tasks
      console.log('🔍 DEBUG: Selected tasks:', selectedTasks.map(t => ({
        id: t.id,
        taskType: t.taskType,
        question: t.question?.substring(0, 50),
        youtubeVideoId: t.youtubeVideoId
      })));

      // Update usage tracking for selected tasks (async, non-blocking)
      selectedTasks.forEach(task => {
        updateTaskUsage(task.id).catch(console.error);
      });

      // Convert to DailyTask format with proper type validation
      const processedTasks: DailyTask[] = selectedTasks
        .map((firestoreTask) => {
          // Validate and sanitize task type
          const rawTaskType = firestoreTask.taskType || 'quiz';
          const taskType: ValidTaskType = isValidTaskType(rawTaskType) ? rawTaskType : 'quiz';
          
          // Validate and sanitize difficulty
          const rawDifficulty = firestoreTask.difficulty || 'easy';
          const difficulty: ValidDifficulty = isValidDifficulty(rawDifficulty) ? rawDifficulty : 'easy';
          
          const optionsArray: string[] = [
            firestoreTask.optionA,
            firestoreTask.optionB, 
            firestoreTask.optionC,
            firestoreTask.optionD,
          ].filter(Boolean);

          let parsedCorrectAnswer: string | number;
          if (taskType === 'flashcard' || taskType === 'video') {
            parsedCorrectAnswer = firestoreTask.correctAnswer;
          } else {
            parsedCorrectAnswer = parseInt(firestoreTask.correctAnswer, 10);
            if (isNaN(parsedCorrectAnswer)) {
              parsedCorrectAnswer = optionsArray.indexOf(firestoreTask.correctAnswer);
              if (parsedCorrectAnswer === -1) parsedCorrectAnswer = firestoreTask.correctAnswer;
            }
          }

          // Ensure all required fields are present
          if (!firestoreTask.question) {
            console.warn(`⚠️ Task ${firestoreTask.id} missing question, skipping`);
            return null;
          }

          return {
            id: firestoreTask.id,
            type: taskType,
            title: taskType === 'video' 
              ? (firestoreTask.videoTitle || `${taskType.charAt(0).toUpperCase() + taskType.slice(1)} Task`)
              : `${taskType.charAt(0).toUpperCase() + taskType.slice(1)} Task`,
            question: firestoreTask.question,
            options: optionsArray.length > 0 ? optionsArray : undefined,
            correctAnswer: taskType === 'flashcard' || taskType === 'video' 
              ? firestoreTask.correctAnswer 
              : (typeof parsedCorrectAnswer === 'number' ? parsedCorrectAnswer : 0),
            points: firestoreTask.xp || 10,
            difficulty: difficulty,
            imageUrl: firestoreTask.ecgImageUrl || firestoreTask.imageUrl,
            explanation: firestoreTask.explanation || '',
            completed: false,
            earnedPoints: 0,
            
            // Add YouTube video properties:
            youtubeVideoId: firestoreTask.youtubeVideoId,
            youtubeEmbedUrl: firestoreTask.youtubeEmbedUrl,
            youtubeWatchUrl: firestoreTask.youtubeWatchUrl,
            youtubeThumbnail: firestoreTask.youtubeThumbnail,
            videoTitle: firestoreTask.videoTitle,
            videoDescription: firestoreTask.videoDescription,
            videoDuration: firestoreTask.videoDuration,
            gems: firestoreTask.gems,
          };
        })
        .filter((task) => task !== null);

      // DEBUG: Log final processed tasks
      console.log('🔍 DEBUG: Final processed tasks:', processedTasks.map(t => ({
        id: t.id,
        type: t.type,
        question: t.question?.substring(0, 50),
        youtubeVideoId: t.youtubeVideoId,
        options: t.options?.length
      })));

      console.log('✅ Processed tasks:', processedTasks.length);
      console.log('📊 Task breakdown:', {
        total: processedTasks.length,
        byType: processedTasks.reduce((acc, task) => {
          acc[task.type] = (acc[task.type] || 0) + 1;
          return acc;
        }, {} as Record<string, number>),
        byDifficulty: processedTasks.reduce((acc, task) => {
          acc[task.difficulty] = (acc[task.difficulty] || 0) + 1;
          return acc;
        }, {} as Record<string, number>)
      });

      return processedTasks;
      
    } catch (error: any) {
      console.error('💥 Failed to fetch daily tasks:', error);
      toast({
        title: 'Error fetching tasks',
        description: error.message || 'Failed to load tasks from Firestore',
        variant: 'destructive',
      });
      return [];
    }
  }, []);

  const login = useCallback(async (username: string, email?: string) => {
    console.log('🔐 Logging in user:', username);
    
    const userEmail = email || `${username}@example.com`;
    
    // Check if this is a guest login
    const isGuestUser = username.startsWith('GuestUser');
    
    // Store guest mode status in localStorage for persistence
    if (isGuestUser) {
      localStorage.setItem('ecg-guest-mode', 'true');
      console.log('👤 Setting guest mode in localStorage');
    } else {
      // Make sure to remove guest mode flag if logging in as a real user
      localStorage.removeItem('ecg-guest-mode');
    }
    
    // Get or create a consistent guest ID
    let guestId = localStorage.getItem('ecg-guest-id');
    if (!guestId && isGuestUser) {
      guestId = `guest-${Date.now()}-${Math.random().toString(36).substring(2, 10)}`;
      localStorage.setItem('ecg-guest-id', guestId);
    }
    
    // Try to load existing user data from Firebase first
    let user: User = {
      id: isGuestUser ? (guestId || `guest-${Date.now()}`) : 'mock-user-123',
      username,
      email: userEmail,
      xp: 0,
      gems: 50, // Give guest users some starting gems
      streak: 0,
      streakCount: 0,
      totalPoints: 0,
      lastLoginDate: new Date().toDateString(),
      rank: 'ECGKid Intern'
    };

    // Only load from Firebase if not a guest user
    if (auth.currentUser && !isGuestUser) {
      const userId = auth.currentUser.uid;
      user.id = userId;
      
      try {
        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);
        
        if (userSnap.exists()) {
          const userData = userSnap.data();
          console.log('📊 Loading existing user data:', userData);
          
          // Merge existing data with defaults
          user = {
            ...user,
            xp: userData.xp || 0,
            gems: userData.gems || 0,
            streak: userData.streak || 0,
            streakCount: userData.streakCount || 0,
            totalPoints: userData.totalPoints || 0,
            rank: userData.rank || 'ECGKid Intern',
            totalTasksCompleted: userData.totalTasksCompleted || 0,
            videosWatched: userData.videosWatched || 0,
            quizzesCompleted: userData.quizzesCompleted || 0,
            flashcardsStudied: userData.flashcardsStudied || 0,
            currentStreak: userData.currentStreak || 0,
            longestStreak: userData.longestStreak || 0,
            joinDate: userData.joinDate || userData.createdAt || new Date().toISOString(),
            // Extended profile fields
            bio: userData.bio || '',
            location: userData.location || '',
            profession: userData.profession || '',
            specialization: userData.specialization || '',
            phone: userData.phone || '',
            yearsOfExperience: userData.yearsOfExperience || '',
            institution: userData.institution || '',
            goals: userData.goals || '',
            avatar: userData.avatar || '',
            // Learning progress fields
            totalLearningTime: userData.totalLearningTime || 0,
            learningStreak: userData.learningStreak || 0,
            lessonsPerfected: userData.lessonsPerfected || 0,
            modulesCompleted: userData.modulesCompleted || 0,
            hearts: userData.hearts || 5,
            learningLevel: userData.learningLevel || 1,
            // New onboarding professional data
            professionCategory: userData.professionCategory,
            professionRole: userData.professionRole,
            experienceLevel: userData.experienceLevel,
            onboardingAssessmentScore: userData.onboardingAssessmentScore,
            recommendedModule: userData.recommendedModule,
            learningGoals: userData.learningGoals,
            dailyGoal: userData.dailyGoal,
            studySchedule: userData.studySchedule,
            onboardingCompleted: userData.onboardingCompleted || false,
            onboardingCompletedDate: userData.onboardingCompletedDate
          };
          console.log('✅ User data loaded from Firebase');
        } else {
          // Create new user document if doesn't exist
          await setDoc(userRef, {
            username,
            email: userEmail,
            xp: user.xp,
            gems: user.gems,
            streak: user.streak,
            streakCount: user.streakCount,
            totalPoints: user.totalPoints,
            lastLoginDate: new Date().toDateString(),
            rank: user.rank,
            totalTasksCompleted: 0,
            videosWatched: 0,
            quizzesCompleted: 0,
            flashcardsStudied: 0,
            currentStreak: 0,
            longestStreak: 0,
            joinDate: new Date().toISOString(),
            createdAt: new Date().toISOString(),
            // Learning progress fields
            totalLearningTime: 0,
            learningStreak: 0,
            lessonsPerfected: 0,
            modulesCompleted: 0,
            hearts: 5,
            learningLevel: 1
          });
          console.log('✅ New user created in Firebase');
        }
        
        // Update last login date
        await setDoc(userRef, {
          lastLoginDate: new Date().toDateString(),
          username,
          email: userEmail
        }, { merge: true });

      } catch (error) {
        console.error('❌ Failed to load/save user data:', error);
      }
    }

    const fetchedTasks = await fetchDailyTasksFromFirestore();

    // Load today's completed tasks from Firebase only for authenticated users
    if (auth.currentUser && !isGuestUser) {
      try {
        const userProgressRef = doc(db, "userProgress", auth.currentUser.uid);
        const progressSnap = await getDoc(userProgressRef);
        
        if (progressSnap.exists()) {
          const progressData = progressSnap.data();
          const completedTasksFromFirestore = progressData.completedTasks || {};
          
          // Update fetched tasks with completion status
          const updatedTasks = fetchedTasks.map(task => {
            if (completedTasksFromFirestore[task.id]) {
              return {
                ...task,
                completed: true,
                earnedPoints: task.points
              };
            }
            return task;
          });
          
          const completedCount = updatedTasks.filter(t => t.completed).length;
          
          setGameState(prev => ({
            ...prev,
            user,
            isAuthenticated: true,
            isGuestUser,
            dailyTasks: updatedTasks,
            completedTasks: completedCount,
            todayDate: new Date().toDateString(),
          }));
          
          console.log(`✅ Loaded ${completedCount} completed tasks from Firebase`);

          // 🎯 DUOLINGO-STYLE: Send comprehensive login notifications
          try {
            // Welcome back notification with actual task progress
            await unifiedNotificationService.sendLoginWelcomeNotification(user.id, {
              completedTasks: completedCount,
              totalTasks: 5,
              currentStreak: user.currentStreak || 0
            });

            // Send new events notification for returning users
            if (user.totalTasksCompleted > 0) {
              await unifiedNotificationService.sendNewEventsNotification(user.id, 2);
            }

            // Send progress encouragement if user has incomplete tasks
            if (completedCount > 0 && completedCount < 5) {
              await unifiedNotificationService.sendProgressEncouragementNotification(user.id, {
                completedTasks: completedCount,
                currentStreak: user.currentStreak || 0,
                totalTasksCompleted: user.totalTasksCompleted || 0
              });
            }

            console.log('🎯 Login notifications sent successfully for returning user');
          } catch (error) {
            console.error('❌ Failed to send login notifications:', error);
          }

          return;
        }
      } catch (error) {
        console.error('❌ Failed to load completed tasks:', error);
      }
    }

    setGameState(prev => ({
      ...prev,
      user,
      isAuthenticated: true,
      isGuestUser,
      dailyTasks: fetchedTasks,
      completedTasks: 0,
      todayDate: new Date().toDateString(),
    }));

    // 🎯 DUOLINGO-STYLE: Send comprehensive login notifications
    try {
      // Welcome back notification with task progress
      const completedToday = fetchedTasks.filter(t => t.completed).length;
      await unifiedNotificationService.sendLoginWelcomeNotification(user.id, {
        completedTasks: completedToday,
        totalTasks: 5,
        currentStreak: user.currentStreak || 0
      });

      // Send new events notification (you can customize this based on actual events)
      if (!isGuestUser && user.totalTasksCompleted > 0) {
        await unifiedNotificationService.sendNewEventsNotification(user.id, 2);
      }

      // Send progress encouragement if user has some progress
      if (completedToday > 0 && completedToday < 5) {
        await unifiedNotificationService.sendProgressEncouragementNotification(user.id, {
          completedTasks: completedToday,
          currentStreak: user.currentStreak || 0,
          totalTasksCompleted: user.totalTasksCompleted || 0
        });
      }

      console.log('🎯 Login notifications sent successfully');
    } catch (error) {
      console.error('❌ Failed to send login notifications:', error);
    }
  }, [fetchDailyTasksFromFirestore]);

  const skipLogin = useCallback(async () => {
    const guestName = `GuestUser${Math.floor(Math.random() * 1000)}`;
    console.log('👤 Creating guest user:', guestName);
    
    try {
      // Let's store guest mode setting first, before the login call
      localStorage.setItem('ecg-guest-mode', 'true');
      
      // Generate consistent guest ID to use across sessions
      let guestId = localStorage.getItem('ecg-guest-id');
      if (!guestId) {
        guestId = `guest-${Date.now()}-${Math.random().toString(36).substring(2, 10)}`;
        localStorage.setItem('ecg-guest-id', guestId);
      }
      
      // Pre-load tasks before login to ensure we have content ready
      console.log('🔄 Pre-loading tasks for guest mode...');
      const tasks = await fetchAllActiveTasks(true);
      console.log(`✅ Pre-loaded ${tasks.length} tasks for guest mode`);
      
      // Then login as guest
      login(guestName);
    } catch (error) {
      console.error('❌ Error in guest login:', error);
      // Fallback to regular login
      login(guestName);
    }
  }, [login, fetchAllActiveTasks]);

  // Add this function to calculate and update streaks
  const updateUserStreaks = useCallback(async (userId: string) => {
    try {
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);
      
      if (userSnap.exists()) {
        const userData = userSnap.data();
        const today = new Date().toDateString();
        const lastCompletion = userData.lastCompletionDate;
        
        let newStreak = 1;
        let currentStreak = userData.currentStreak || 0;
        let streakBroken = false;
        
        if (lastCompletion) {
          const lastDate = new Date(lastCompletion);
          const todayDate = new Date(today);
          const daysDiff = Math.floor((todayDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24));
          
          if (daysDiff === 1) {
            // Consecutive day
            newStreak = currentStreak + 1;
          } else if (daysDiff === 0) {
            // Same day
            newStreak = currentStreak;
          } else {
            // Streak broken
            if (currentStreak > 0) {
              streakBroken = true;
            }
            newStreak = 1;
          }
        }
        
        // Update streak data
        await setDoc(userRef, {
          currentStreak: newStreak,
          longestStreak: Math.max(userData.longestStreak || 0, newStreak),
          lastCompletionDate: today,
          streakCount: newStreak, // Keep for compatibility
        }, { merge: true });

        // Create streak notifications with throttling
        try {
          if (streakBroken && currentStreak > 1) {
            // Only send streak broken notification once per day
            const streakBrokenKey = `streak-broken-${today}`;
            const lastStreakBrokenNotification = localStorage.getItem(streakBrokenKey);
            
            if (!lastStreakBrokenNotification) {
              await unifiedNotificationService.createNotification({
                userId,
                title: '💔 Streak Lost',
                body: `Your ${currentStreak}-day streak has ended. Start a new one today!`,
                type: 'reminder'
              });
              localStorage.setItem(streakBrokenKey, 'sent');
            }
          } else if (newStreak > currentStreak && newStreak > 1) {
            // Celebrate streak milestones - only once per milestone
            if (newStreak % 7 === 0 || newStreak === 3 || newStreak === 5) {
              const milestoneKey = `streak-milestone-${newStreak}-${today}`;
              const lastMilestoneNotification = localStorage.getItem(milestoneKey);
              
              if (!lastMilestoneNotification) {
                await unifiedNotificationService.createNotification({
                  userId,
                  title: `🔥 ${newStreak}-Day Streak!`,
                  body: `Amazing! You're on fire with your learning consistency!`,
                  type: 'celebration'
                });
                localStorage.setItem(milestoneKey, 'sent');
              }
            }
          }
        } catch (notificationError) {
          console.error('Failed to create streak notification:', notificationError);
        }
        
        // Update local state
        setGameState(prev => ({
          ...prev,
          user: prev.user ? {
            ...prev.user,
            currentStreak: newStreak,
            longestStreak: Math.max(userData.longestStreak || 0, newStreak),
            streakCount: newStreak,
            lastCompletionDate: today
          } : null
        }));
        
        console.log('✅ Streak updated:', newStreak);
      }
    } catch (error) {
      console.error('❌ Failed to update streaks:', error);
    }
  }, []);

  // Update completeTask function to track detailed stats
  const completeTask = useCallback(async (taskId: string, isCorrect: boolean) => {
    console.log('📝 Completing task:', taskId, 'correct:', isCorrect);
    
    let updatedUser: User | null = null;
    
    setGameState(prev => {
      const task = prev.dailyTasks.find(t => t.id === taskId);
      if (!task || task.completed) {
        console.warn('⚠️ Task not found or already completed:', taskId);
        return prev;
      }

      // Calculate rewards
      const points = task.type === 'video' ? task.points : (isCorrect ? task.points : Math.floor(task.points / 2));
      const gemsEarned = task.type === 'video' ? (task.gems || 1) : (isCorrect ? 1 : 0);

      const updatedTasks = prev.dailyTasks.map(t =>
        t.id === taskId ? { ...t, completed: true, earnedPoints: points } : t
      );

      const newCompletedTasks = updatedTasks.filter(t => t.completed).length;
      let bonusXP = 0;
      if (newCompletedTasks === updatedTasks.length && updatedTasks.length > 0) {
        bonusXP = 50;
        console.log('🎉 All tasks completed! Bonus XP awarded:', bonusXP);
      }

      // Update user stats
      updatedUser = prev.user ? {
        ...prev.user,
        xp: prev.user.xp + points + bonusXP,
        gems: prev.user.gems + gemsEarned,
        totalTasksCompleted: (prev.user.totalTasksCompleted || 0) + 1,
        videosWatched: task.type === 'video' ? (prev.user.videosWatched || 0) + 1 : (prev.user.videosWatched || 0),
        quizzesCompleted: task.type === 'quiz' ? (prev.user.quizzesCompleted || 0) + 1 : (prev.user.quizzesCompleted || 0),
        flashcardsStudied: task.type === 'flashcard' ? (prev.user.flashcardsStudied || 0) + 1 : (prev.user.flashcardsStudied || 0),
      } : null;

      if (updatedUser) {
        updatedUser.rank = getRankFromXP(updatedUser.xp);
      }

      return {
        ...prev,
        dailyTasks: updatedTasks,
        completedTasks: newCompletedTasks,
        user: updatedUser
      };
    });
    
    // Save to Firebase with detailed stats (only for authenticated users, not guests)
    if (auth.currentUser && updatedUser && !gameState.isGuestUser) {
      const userId = auth.currentUser.uid;
      
      try {
        // Update user profile with detailed stats
        const userRef = doc(db, "users", userId);
        await setDoc(userRef, {
          xp: updatedUser.xp,
          gems: updatedUser.gems,
          rank: updatedUser.rank,
          totalTasksCompleted: updatedUser.totalTasksCompleted,
          videosWatched: updatedUser.videosWatched,
          quizzesCompleted: updatedUser.quizzesCompleted,
          flashcardsStudied: updatedUser.flashcardsStudied,
          lastLoginDate: new Date().toISOString(),
          lastUpdated: new Date().toISOString()
        }, { merge: true });

        // Update user progress
        const userProgressRef = doc(db, "userProgress", userId);
        let prevCompletedTasks = {};
        const snap = await getDoc(userProgressRef);
        if (snap.exists()) {
          const progress = snap.data();
          prevCompletedTasks = progress.completedTasks || {};
        }

        await setDoc(userProgressRef, {
          completedTasks: {
            ...prevCompletedTasks,
            [taskId]: {
              completed: true,
              isCorrect,
              completedAt: new Date().toISOString(),
              taskType: gameState.dailyTasks.find(t => t.id === taskId)?.type,
            },
          },
          lastUpdated: new Date().toISOString(),
        }, { merge: true });

        // Check if all daily tasks completed and update streaks
        const allTasksCompleted = gameState.dailyTasks.every((task) => {
          if (task.id === taskId) return true;
          return task.completed;
        });

        if (allTasksCompleted) {
          await updateUserStreaks(userId);
        }

        // Check and update achievements
        try {
          const task = gameState.dailyTasks.find(t => t.id === taskId);
          const taskType = task?.type;
          const mappedType = taskType === 'case' || taskType === 'rhythm' || taskType === 'lead-match' ? 'quiz' : taskType || 'task';
          
          await updateUserActivity(userId, {
            type: mappedType as 'quiz' | 'flashcard' | 'video' | 'task',
            taskId,
            points: task?.points || 0,
            correct: isCorrect
          });
          
          await checkAchievements(userId, updatedUser);
          console.log('✅ Achievements checked and updated');
        } catch (error) {
          console.error('❌ Failed to check/update achievements:', error);
        }

        // Create progress notifications for milestones
        try {
          if (updatedUser) {
            const totalCompleted = updatedUser.totalTasksCompleted || 0;
            const currentXP = updatedUser.xp || 0;
            
            // 🎯 DUOLINGO-STYLE: Daily task progress encouragement (already throttled in service)
            const currentDailyTasks = gameState.dailyTasks.filter(t => t.completed).length + 1; // +1 for the just completed task
            const dailyTasksRemaining = 5 - currentDailyTasks;
            
            if (dailyTasksRemaining > 0 && currentDailyTasks > 0) {
              await unifiedNotificationService.sendProgressEncouragementNotification(userId, {
                completedTasks: currentDailyTasks,
                currentStreak: updatedUser.currentStreak || 0,
                totalTasksCompleted: totalCompleted
              });
            }
            
            // All daily tasks completed - send notification only once per day
            if (allTasksCompleted) {
              const dailyCompleteKey = `daily-complete-${new Date().toDateString()}`;
              const lastDailyCompleteNotification = localStorage.getItem(dailyCompleteKey);
              
              if (!lastDailyCompleteNotification) {
                await unifiedNotificationService.createNotification({
                  userId,
                  title: '🎉 Daily Goals Complete!',
                  body: 'Amazing work! You\'ve completed all daily tasks. New weekly events are now unlocked!',
                  type: 'celebration',
                  actionUrl: '/dashboard?tab=events',
                  data: { milestone: 'daily_complete', date: new Date().toDateString() }
                });
                localStorage.setItem(dailyCompleteKey, 'sent');
                
                // Also send new events unlocked notification (already throttled in service)
                await unifiedNotificationService.sendNewEventsNotification(userId, 1);
              }
            }
          }
        } catch (notificationError) {
          console.error('Failed to create progress notification:', notificationError);
        }

        console.log('✅ Progress and stats saved to Firebase');
      } catch (error) {
        console.error('❌ Failed to save progress:', error);
      }
    }
  }, [gameState.dailyTasks, updateUserStreaks]);

  const loadUserProfile = useCallback(async (userId: string) => {
    try {
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);
      
      if (userSnap.exists()) {
        const userData = userSnap.data();
        
        setGameState(prev => ({
          ...prev,
          user: prev.user ? {
            ...prev.user,
            totalTasksCompleted: userData.totalTasksCompleted || 0,
            videosWatched: userData.videosWatched || 0,
            quizzesCompleted: userData.quizzesCompleted || 0,
            flashcardsStudied: userData.flashcardsStudied || 0,
            currentStreak: userData.currentStreak || 0,
            longestStreak: userData.longestStreak || 0,
            joinDate: userData.joinDate || userData.createdAt || new Date().toISOString(),
            achievements: userData.achievements || [],
            claimedRewards: userData.claimedRewards || [],
          } : null
        }));
        
        console.log('✅ User profile loaded from Firebase');
      }
    } catch (error) {
      console.error('❌ Failed to load user profile:', error);
    }
  }, []);

  // Call loadUserProfile after authentication
  useEffect(() => {
    if (auth.currentUser && gameState.isAuthenticated) {
      loadUserProfile(auth.currentUser.uid);
    }
  }, [auth.currentUser, gameState.isAuthenticated, loadUserProfile]);

  // Initialize authentication state with enhanced guest mode support
  useEffect(() => {
    // First check if we have a guest mode preference stored
    const storedGuestMode = localStorage.getItem('ecg-guest-mode') === 'true';
    
    if (storedGuestMode) {
      console.log('👤 Restoring previous guest session');
      // We're in guest mode, create a guest user automatically
      const guestName = `GuestUser${Math.floor(Math.random() * 1000)}`;
      login(guestName);
      return () => {}; // No cleanup needed for guest mode
    }
    
    // Standard Firebase authentication flow for normal users
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log('🔐 User authenticated:', user.uid);
        
        // Clear any guest mode flags when logging in as a real user
        localStorage.removeItem('ecg-guest-mode');
        localStorage.removeItem('ecg-guest-id');
        
        // Auto-login if user is authenticated but game state isn't set
        if (!gameState.isAuthenticated) {
          const userRef = doc(db, "users", user.uid);
          const userSnap = await getDoc(userRef);
          
          if (userSnap.exists()) {
            const userData = userSnap.data();
            console.log('🔄 Auto-logging in existing user');
            await login(userData.username || 'User', userData.email);
          }
        }
      } else {
        console.log('🔓 No authenticated user');
        // Clear game state when user logs out
        if (gameState.isAuthenticated) {
          console.log('🔄 Clearing game state on logout');
          setGameState(prev => ({
            ...prev,
            isAuthenticated: false,
            user: null,
            isGuestUser: false,
            dailyTasks: [],
            hearts: 5,
            currentStreak: 0
          }));
          
          // Clear any stored auth data
          localStorage.removeItem('ecg-guest-mode');
          localStorage.removeItem('ecg-guest-id');
          localStorage.removeItem('ecg-user-data');
        }
      }
    });

    return () => unsubscribe();
  }, [gameState.isAuthenticated, login]);

  useEffect(() => {
    const currentTodayDate = new Date().toDateString();
    if (gameState.isAuthenticated && gameState.todayDate !== currentTodayDate) {
      console.log('📅 New day detected, refreshing tasks...');
      setGameState(prev => ({
        ...prev,
        dailyTasks: [],
        completedTasks: 0,
        todayDate: currentTodayDate,
        user: prev.user ? { ...prev.user, streak: prev.user.streak + 1 } : null,
      }));
      fetchDailyTasksFromFirestore();
    } else if (gameState.isAuthenticated && gameState.dailyTasks.length === 0) {
      console.log('📋 No tasks loaded, fetching...');
      fetchDailyTasksFromFirestore();
    }
  }, [gameState.isAuthenticated, gameState.todayDate, gameState.dailyTasks.length, fetchDailyTasksFromFirestore]);

  // Merge Firestore progress into local state when both are ready
  useEffect(() => {
    const mergeProgress = async () => {
      if (auth.currentUser && gameState.dailyTasks.length > 0) {
        console.log('🔄 Merging progress from Firebase...');
        const userId = auth.currentUser.uid;
        const userProgressRef = doc(db, "userProgress", userId);
        
        try {
          const snap = await getDoc(userProgressRef);
          if (snap.exists()) {
            const progress = snap.data();
            setGameState(prev => {
              const completedTasksFromFirestore = progress.completedTasks || {};
              const updatedDailyTasks = prev.dailyTasks.map(task => {
                if (completedTasksFromFirestore[task.id]) {
                  return {
                    ...task,
                    completed: true,
                    earnedPoints: task.points,
                  };
                }
                return task;
              });
              
              const mergedState = {
                ...prev,
                dailyTasks: updatedDailyTasks,
                completedTasks: updatedDailyTasks.filter(t => t.completed).length,
                user: prev.user
                  ? {
                      ...prev.user,
                      streak: progress.streak ?? prev.user.streak,
                      gems: progress.gems ?? prev.user.gems,
                      xp: progress.xp ?? prev.user.xp,
                      streakCount: progress.streakCount ?? prev.user.streakCount,
                      totalPoints: progress.totalPoints ?? prev.user.totalPoints,
                    }
                  : prev.user,
              };
              
              console.log('✅ Progress merged from Firebase');
              return mergedState;
            });
          }
        } catch (error) {
          console.error('❌ Failed to merge progress from Firebase:', error);
        }
      }
    };
    mergeProgress();
  }, [auth.currentUser, gameState.dailyTasks.length]);

  // Debug function to check current state
  const debugCurrentState = useCallback(() => {
    console.log('🔍 DEBUG: Current Game State:', {
      isAuthenticated: gameState.isAuthenticated,
      user: gameState.user ? {
        id: gameState.user.id,
        username: gameState.user.username,
        xp: gameState.user.xp,
        gems: gameState.user.gems,
        rank: gameState.user.rank,
        totalTasksCompleted: gameState.user.totalTasksCompleted
      } : null,
      dailyTasksCount: gameState.dailyTasks.length,
      completedTasks: gameState.completedTasks
    });
  }, [gameState]);

  // Expose debug function globally in development
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).debugGameState = debugCurrentState;
    }
  }, [debugCurrentState]);

  // Immediate state refresh function for real-time updates
  const refreshUserStatsImmediately = useCallback(async () => {
    if (!auth.currentUser || gameState.isGuestUser) return;

    try {
      console.log('⚡ Refreshing user stats immediately...');
      
      // Refresh user data
      const userData = await getUserData(auth.currentUser.uid);
      if (userData) {
        setGameState(prev => ({
          ...prev,
          user: {
            ...prev.user,
            ...userData,
            id: auth.currentUser!.uid
          } as User
        }));
      }

      console.log('✅ User stats refreshed immediately');
    } catch (error) {
      console.error('❌ Error refreshing user stats:', error);
    }
  }, [gameState.isGuestUser]);

  // Learning progress management functions
  const loadLearningProgress = useCallback(async () => {
    // Special handling for guest mode
    if (gameState.isGuestUser) {
      console.log('👤 Setting up learning progress for guest user');
      
      // For guest users, provide a more complete learning experience with unlocked modules
      const guestProgress = {
        'module-1': {
          moduleId: 'module-1',
          status: 'available' as const,
          completedLessons: 2, // Simulate some progress to make it more engaging
          totalLessons: 10,
          lastAccessed: new Date().toISOString(),
          averageScore: 75,
          totalTimeSpent: 600, // 10 minutes
          streak: 1,
          masteryLevel: 15
        },
        'module-2': {
          moduleId: 'module-2',
          status: 'available' as const,
          completedLessons: 0,
          totalLessons: 8,
          lastAccessed: new Date().toISOString(),
          averageScore: 0,
          totalTimeSpent: 0,
          streak: 0,
          masteryLevel: 0
        }
      };
      
      setGameState(prev => ({
        ...prev,
        learningProgress: guestProgress,
        currentLearningModule: 'module-1',
        currentLearningLesson: 'lesson-3' // Set to the next uncompleted lesson
      }));
      
      console.log('✅ Guest learning progress initialized with sample data');
      return;
    }
    
    // Regular flow for authenticated users
    if (!auth.currentUser) return;

    try {
      const userId = auth.currentUser.uid;
      const learningProgressRef = doc(db, "learningProgress", userId);
      const progressSnap = await getDoc(learningProgressRef);
      
      if (progressSnap.exists()) {
        const progressData = progressSnap.data();
        setGameState(prev => ({
          ...prev,
          learningProgress: progressData.modules || {},
          currentLearningModule: progressData.currentModule,
          currentLearningLesson: progressData.currentLesson,
        }));
        console.log('✅ Learning progress loaded from Firebase');
      } else {
        // Initialize with first module available
        const initialProgress = {
          'module-1': {
            moduleId: 'module-1',
            status: 'available' as const,
            completedLessons: 0,
            totalLessons: 10, // This will be updated with real data
            lastAccessed: new Date().toISOString(),
            averageScore: 0,
            totalTimeSpent: 0,
            streak: 0,
            masteryLevel: 0
          }
        };
        
        setGameState(prev => ({
          ...prev,
          learningProgress: initialProgress,
          currentLearningModule: 'module-1'
        }));
        
        // Save initial progress to Firebase
        await setDoc(learningProgressRef, {
          modules: initialProgress,
          currentModule: 'module-1',
          createdAt: new Date().toISOString(),
          lastUpdated: new Date().toISOString()
        });
        
        console.log('✅ Initialized learning progress in Firebase');
      }
    } catch (error) {
      console.error('❌ Failed to load learning progress:', error);
    }
  }, [gameState.isGuestUser]);

  const completeLearningLesson = useCallback(async (
    moduleId: string, 
    lessonId: string, 
    score: number, 
    timeSpent: number,
    perfect: boolean = false
  ) => {
    console.log('🎯 Completing learning lesson:', { moduleId, lessonId, score, timeSpent, perfect });
    
    // Special handling for guest mode
    if (gameState.isGuestUser) {
      console.log('👤 Updating guest learning progress locally');
      
      // For guest users, update progress in local state only
      setGameState(prev => {
        const currentModule = prev.learningProgress[moduleId];
        if (!currentModule) return prev;

        // Calculate next lesson ID based on simple increment
        const lessonNumber = parseInt(lessonId.split('-')[1], 10);
        const nextLessonId = `lesson-${lessonNumber + 1}`;
        const newCompletedLessons = currentModule.completedLessons + 1;
        
        // Update guest module progress
        const updatedProgress = {
          ...prev.learningProgress,
          [moduleId]: {
            ...currentModule,
            completedLessons: newCompletedLessons,
            lastAccessed: new Date().toISOString(),
            averageScore: Math.round(((currentModule.averageScore || 0) * (currentModule.completedLessons || 0) + score) / newCompletedLessons),
            totalTimeSpent: (currentModule.totalTimeSpent || 0) + timeSpent,
            streak: perfect ? (currentModule.streak || 0) + 1 : 0,
            masteryLevel: Math.min(100, (currentModule.masteryLevel || 0) + (perfect ? 5 : 3)),
            status: newCompletedLessons >= currentModule.totalLessons ? 'completed' as const : 'in-progress' as const
          }
        };
        
        // Check if we need to unlock the next module
        if (moduleId === 'module-1' && newCompletedLessons >= 5 && !prev.learningProgress['module-2']) {
          // Unlock module 2 after completing 5 lessons of module 1
          updatedProgress['module-2'] = {
            moduleId: 'module-2',
            status: 'available',
            completedLessons: 0,
            totalLessons: 8,
            lastAccessed: new Date().toISOString(),
            averageScore: 0,
            totalTimeSpent: 0,
            streak: 0,
            masteryLevel: 0
          };
        }
        
        // Calculate XP and gems to award
        const baseXP = score >= 80 ? 25 : score >= 60 ? 15 : 10;
        const bonusXP = perfect ? 10 : 0;
        const earnedXP = baseXP + bonusXP;
        const earnedGems = score >= 90 ? 3 : score >= 70 ? 2 : 1;
        
        // Handle hearts: restore for perfect, lose for poor performance
        let heartsChange = 0;
        if (perfect) {
          heartsChange = 1; // Restore heart for perfect score
        } else if (score < 60) {
          heartsChange = -1; // Lose heart for poor performance
        }
        
        // Update user with new XP, gems, and hearts
        const updatedUser = prev.user ? {
          ...prev.user,
          xp: (prev.user.xp || 0) + earnedXP,
          gems: (prev.user.gems || 0) + earnedGems,
          hearts: Math.max(0, Math.min(5, (prev.user.hearts || 5) + heartsChange)),
          rank: getRankFromXP((prev.user.xp || 0) + earnedXP)
        } : null;
        
        console.log(`✅ Guest user earned ${earnedXP} XP and ${earnedGems} gems, hearts: ${heartsChange > 0 ? '+' : ''}${heartsChange}`);
        
        // Show appropriate toast based on progression
        const hasNextLesson = lessonNumber < (currentModule.totalLessons || 8);
        const hasUnlockedModule = moduleId === 'module-1' && newCompletedLessons >= 5;
        
        if (hasUnlockedModule) {
          toast({
            title: '🎉 Module 2 Unlocked!',
            description: `Amazing! You've completed 5 lessons and unlocked the next module!`,
            variant: 'default',
          });
        } else if (hasNextLesson) {
          toast({
            title: perfect ? '🌟 Perfect! Next Lesson Unlocked!' : '✅ Next Lesson Unlocked!',
            description: `You earned ${earnedXP} XP and ${earnedGems} gems. Ready for lesson ${lessonNumber + 1}?`,
            variant: 'default',
          });
        } else {
          toast({
            title: perfect ? '🌟 Perfect Score!' : '✅ Lesson Completed',
            description: `You earned ${earnedXP} XP and ${earnedGems} gems.`,
            variant: 'default',
          });
        }
        
        // Return updated state with next lesson automatically set
        return {
          ...prev,
          learningProgress: updatedProgress,
          currentLearningModule: moduleId,
          currentLearningLesson: hasNextLesson ? nextLessonId : lessonId,
          user: updatedUser
        };
      });
      
      return;
    }
    
    // Normal flow for authenticated users
    if (!auth.currentUser) return;

    try {
      const userId = auth.currentUser.uid;
      const learningProgressRef = doc(db, "learningProgress", userId);
      const userRef = doc(db, "users", userId);
      
      // Use lesson progression service for proper unlocking logic
      try {
        const { handleLessonProgression } = await import('@/services/lessonProgression');
        
        // Get progression results including next lesson unlocking
        const progressionResult = await handleLessonProgression(
          userId,
          moduleId,
          lessonId,
          score,
          timeSpent,
          true // First attempt
        );
        
        console.log('📈 Progression result:', progressionResult);
        
        // Update local state with progression results
        setGameState(prev => {
          const currentModule = prev.learningProgress[moduleId];
          if (!currentModule) return prev;

          const updatedProgress = {
            ...prev.learningProgress,
            [moduleId]: {
              ...currentModule,
              completedLessons: currentModule.completedLessons + 1,
              lastAccessed: new Date().toISOString(),
              averageScore: Math.round(((currentModule.averageScore || 0) * (currentModule.completedLessons || 0) + score) / (currentModule.completedLessons + 1)),
              totalTimeSpent: (currentModule.totalTimeSpent || 0) + timeSpent,
              streak: perfect ? (currentModule.streak || 0) + 1 : 0,
              masteryLevel: Math.min(100, (currentModule.masteryLevel || 0) + (perfect ? 5 : 3)),
              status: currentModule.completedLessons + 1 >= currentModule.totalLessons ? 'completed' as const : 'in-progress' as const
            }
          };

          // Handle hearts: restore for perfect, lose for poor performance
          let heartsChange = 0;
          if (perfect) {
            heartsChange = 1; // Restore heart for perfect score
          } else if (score < 60) {
            heartsChange = -1; // Lose heart for poor performance
          }

          // Update user with progression rewards and hearts
          const updatedUser = prev.user ? {
            ...prev.user,
            xp: prev.user.xp + progressionResult.rewards.xp,
            gems: prev.user.gems + progressionResult.rewards.gems,
            hearts: Math.max(0, Math.min(5, (prev.user.hearts || 5) + heartsChange)),
            totalLearningTime: (prev.user.totalLearningTime || 0) + timeSpent,
            lessonsPerfected: perfect ? (prev.user.lessonsPerfected || 0) + 1 : (prev.user.lessonsPerfected || 0)
          } : null;

          // Show progression-based toasts
          if (progressionResult.nextModuleUnlocked) {
            toast({
              title: '🎉 New Module Unlocked!',
              description: `Congratulations! You've unlocked "${progressionResult.nextModuleTitle}"!`,
              variant: 'default',
            });
          } else if (progressionResult.nextLessonAvailable) {
            toast({
              title: perfect ? '🌟 Perfect! Next Lesson Unlocked!' : '✅ Next Lesson Unlocked!',
              description: `You earned ${progressionResult.rewards.xp} XP and ${progressionResult.rewards.gems} gems. Ready for "${progressionResult.nextLessonTitle}"?`,
              variant: 'default',
            });
          } else if (progressionResult.moduleCompleted) {
            toast({
              title: '🏆 Module Completed!',
              description: `Amazing work! You've completed the entire module!`,
              variant: 'default',
            });
          } else {
            toast({
              title: perfect ? '🌟 Perfect Score!' : '✅ Lesson Completed',
              description: `You earned ${progressionResult.rewards.xp} XP and ${progressionResult.rewards.gems} gems.`,
              variant: 'default',
            });
          }

          return {
            ...prev,
            learningProgress: updatedProgress,
            currentLearningLesson: progressionResult.nextLessonId || lessonId,
            currentLearningModule: moduleId,
            user: updatedUser
          };
        });
        
      } catch (importError) {
        console.warn('⚠️ Lesson progression service not available, using fallback logic');
        
        // Fallback to basic progression logic
        setGameState(prev => {
          const currentModule = prev.learningProgress[moduleId];
          if (!currentModule) return prev;

          const updatedProgress = {
            ...prev.learningProgress,
            [moduleId]: {
              ...currentModule,
              completedLessons: currentModule.completedLessons + 1,
              lastAccessed: new Date().toISOString(),
              averageScore: Math.round(((currentModule.averageScore || 0) * (currentModule.completedLessons || 0) + score) / (currentModule.completedLessons + 1)),
              totalTimeSpent: (currentModule.totalTimeSpent || 0) + timeSpent,
              streak: perfect ? (currentModule.streak || 0) + 1 : 0,
              masteryLevel: Math.min(100, (currentModule.masteryLevel || 0) + (perfect ? 5 : 3)),
              status: currentModule.completedLessons + 1 >= currentModule.totalLessons ? 'completed' as const : 'in-progress' as const
            }
          };

          // Calculate XP and gems earned
          const baseXP = score >= 80 ? 25 : score >= 60 ? 15 : 10;
          const bonusXP = perfect ? 10 : 0;
          const totalXP = baseXP + bonusXP;
          const gemsEarned = perfect ? 2 : 1;

          // Handle hearts
          let heartsChange = 0;
          if (perfect) {
            heartsChange = 1;
          } else if (score < 60) {
            heartsChange = -1;
          }

          return {
            ...prev,
            learningProgress: updatedProgress,
            currentLearningLesson: lessonId,
            user: prev.user ? {
              ...prev.user,
              xp: prev.user.xp + totalXP,
              gems: prev.user.gems + gemsEarned,
              hearts: Math.max(0, Math.min(5, (prev.user.hearts || 5) + heartsChange)),
              totalLearningTime: (prev.user.totalLearningTime || 0) + timeSpent,
              lessonsPerfected: perfect ? (prev.user.lessonsPerfected || 0) + 1 : (prev.user.lessonsPerfected || 0)
            } : null
          };
        });
      }

      // Calculate next lesson for progression
      const lessonNumber = parseInt(lessonId.split('-')[1], 10);
      const nextLessonId = `lesson-${lessonNumber + 1}`;
      const currentModule = gameState.learningProgress[moduleId];
      const newCompletedLessons = (currentModule?.completedLessons || 0) + 1;
      
      // Save progress to Firebase
      console.log('💾 Starting Firebase save operations...');
      console.log(`   User ID: ${userId}`);
      console.log(`   Module: ${moduleId}, Lesson: ${lessonId}`);
      console.log(`   Score: ${score}, Time: ${timeSpent}, Perfect: ${perfect}`);
      
      const progressSnap = await getDoc(learningProgressRef);
      const existingData = progressSnap.exists() ? progressSnap.data() : {};
      console.log(`   Existing progress data: ${progressSnap.exists() ? 'Found' : 'Creating new'}`);
      
      const updatedModuleProgress = {
        ...currentModule,
        completedLessons: newCompletedLessons,
        lastAccessed: new Date().toISOString(),
        averageScore: currentModule ? 
          Math.round(((currentModule.averageScore || 0) * (currentModule.completedLessons || 0) + score) / newCompletedLessons) 
          : score,
        totalTimeSpent: (currentModule?.totalTimeSpent || 0) + timeSpent,
        streak: perfect ? (currentModule?.streak || 0) + 1 : 0,
        masteryLevel: Math.min(100, (currentModule?.masteryLevel || 0) + (perfect ? 5 : 3)),
        status: newCompletedLessons >= (currentModule?.totalLessons || 10) ? 'completed' : 'in-progress'
      };

      // Check if we should unlock next module
      let updatedModules = {
        ...existingData.modules,
        [moduleId]: updatedModuleProgress
      };

      // Auto-unlock module 2 after completing 5 lessons of module 1
      if (moduleId === 'module-1' && newCompletedLessons >= 5 && !updatedModules['module-2']) {
        console.log('🎉 Unlocking Module 2!');
        updatedModules['module-2'] = {
          moduleId: 'module-2',
          status: 'available',
          completedLessons: 0,
          totalLessons: 8,
          lastAccessed: new Date().toISOString(),
          averageScore: 0,
          totalTimeSpent: 0,
          streak: 0,
          masteryLevel: 0
        };
      }

      // Determine next lesson to set
      const hasNextLesson = lessonNumber < (currentModule?.totalLessons || 10);
      const nextLesson = hasNextLesson ? nextLessonId : lessonId;
      console.log(`   Next lesson: ${nextLesson} (has next: ${hasNextLesson})`);

      console.log('💾 Saving learning progress to Firebase...');
      await setDoc(learningProgressRef, {
        ...existingData,
        modules: updatedModules,
        currentModule: moduleId,
        currentLesson: nextLesson,
        lastUpdated: new Date().toISOString()
      }, { merge: true });
      console.log('✅ Learning progress saved successfully');

      // Update user stats
      const baseXP = score >= 80 ? 25 : score >= 60 ? 15 : 10;
      const bonusXP = perfect ? 10 : 0;
      const totalXP = baseXP + bonusXP;
      const gemsEarned = perfect ? 2 : 1;

      // Handle hearts
      let heartsChange = 0;
      if (perfect) {
        heartsChange = 1;
      } else if (score < 60) {
        heartsChange = -1;
      }

      console.log(`💎 Updating user stats: +${totalXP} XP, +${gemsEarned} gems, ${heartsChange > 0 ? '+' : ''}${heartsChange} hearts`);
      await setDoc(userRef, {
        xp: (gameState.user?.xp || 0) + totalXP,
        gems: (gameState.user?.gems || 0) + gemsEarned,
        totalLearningTime: (gameState.user?.totalLearningTime || 0) + timeSpent,
        lessonsPerfected: perfect ? (gameState.user?.lessonsPerfected || 0) + 1 : (gameState.user?.lessonsPerfected || 0),
        hearts: Math.max(0, Math.min(5, (gameState.user?.hearts || 5) + heartsChange)),
        lastUpdated: new Date().toISOString()
      }, { merge: true });
      console.log('✅ User stats saved successfully');

      // Update local state to reflect progression
      setGameState(prev => ({
        ...prev,
        learningProgress: {
          ...prev.learningProgress,
          ...updatedModules
        },
        currentLearningLesson: nextLesson,
        user: prev.user ? {
          ...prev.user,
          xp: prev.user.xp + totalXP,
          gems: prev.user.gems + gemsEarned,
          hearts: Math.max(0, Math.min(5, (prev.user.hearts || 5) + heartsChange)),
          totalLearningTime: (prev.user.totalLearningTime || 0) + timeSpent,
          lessonsPerfected: perfect ? (prev.user.lessonsPerfected || 0) + 1 : (prev.user.lessonsPerfected || 0)
        } : null
      }));

      // Show progression toasts
      if (moduleId === 'module-1' && newCompletedLessons >= 5 && !existingData.modules?.['module-2']) {
        toast({
          title: '🎉 Module 2 Unlocked!',
          description: `Amazing! You've completed 5 lessons and unlocked the next module!`,
          variant: 'default',
        });
      } else if (hasNextLesson) {
        toast({
          title: perfect ? '🌟 Perfect! Next Lesson Unlocked!' : '✅ Next Lesson Unlocked!',
          description: `You earned ${totalXP} XP and ${gemsEarned} gems. Ready for lesson ${lessonNumber + 1}?`,
          variant: 'default',
        });
      } else {
        toast({
          title: perfect ? '🌟 Perfect Score!' : '✅ Lesson Completed',
          description: `You earned ${totalXP} XP and ${gemsEarned} gems.`,
          variant: 'default',
        });
      }

      // Create achievement notifications
      if (perfect) {
        await unifiedNotificationService.createNotification({
          userId,
          title: '⭐ Perfect Lesson!',
          body: `You completed the lesson with a perfect score! +${bonusXP} bonus XP earned.`,
          type: 'achievement',
          data: { type: 'perfect_lesson', moduleId, lessonId, score }
        });
      }

      // Play reward sound
      playRewardSound();

      console.log('✅ Learning lesson completed and saved to Firebase');
    } catch (error) {
      console.error('❌ Failed to complete learning lesson:', error);
      
      // Check if it's a permission error
      if (error.code === 'permission-denied') {
        console.error('🔐 Permission denied - user may not be properly authenticated');
        toast({
          title: '🔐 Permission Error',
          description: 'Unable to save progress. Please sign in again.',
          variant: 'destructive',
        });
        
        // Try to refresh auth state
        if (auth.currentUser) {
          try {
            await auth.currentUser.getIdToken(true); // Force token refresh
            console.log('🔄 Auth token refreshed, please try again');
          } catch (tokenError) {
            console.error('❌ Failed to refresh auth token:', tokenError);
          }
        }
      } else {
        // Show error to user
        toast({
          title: '❌ Save Failed',
          description: `Failed to save progress: ${error.message || 'Unknown error'}`,
          variant: 'destructive',
        });
      }
      
      // Still update local state even if Firebase save fails
      setGameState(prev => {
        const currentModule = prev.learningProgress[moduleId];
        if (!currentModule) return prev;

        const lessonNumber = parseInt(lessonId.split('-')[1], 10);
        const nextLessonId = `lesson-${lessonNumber + 1}`;
        const newCompletedLessons = currentModule.completedLessons + 1;
        const hasNextLesson = lessonNumber < (currentModule.totalLessons || 10);
        
        const updatedProgress = {
          ...prev.learningProgress,
          [moduleId]: {
            ...currentModule,
            completedLessons: newCompletedLessons,
            lastAccessed: new Date().toISOString(),
            averageScore: Math.round(((currentModule.averageScore || 0) * (currentModule.completedLessons || 0) + score) / newCompletedLessons),
            totalTimeSpent: (currentModule.totalTimeSpent || 0) + timeSpent,
            streak: perfect ? (currentModule.streak || 0) + 1 : 0,
            masteryLevel: Math.min(100, (currentModule.masteryLevel || 0) + (perfect ? 5 : 3)),
            status: newCompletedLessons >= (currentModule.totalLessons || 10) ? 'completed' as const : 'in-progress' as const
          }
        };

        const baseXP = score >= 80 ? 25 : score >= 60 ? 15 : 10;
        const bonusXP = perfect ? 10 : 0;
        const totalXP = baseXP + bonusXP;
        const gemsEarned = perfect ? 2 : 1;

        let heartsChange = 0;
        if (perfect) {
          heartsChange = 1;
        } else if (score < 60) {
          heartsChange = -1;
        }

        return {
          ...prev,
          learningProgress: updatedProgress,
          currentLearningLesson: hasNextLesson ? nextLessonId : lessonId,
          user: prev.user ? {
            ...prev.user,
            xp: prev.user.xp + totalXP,
            gems: prev.user.gems + gemsEarned,
            hearts: Math.max(0, Math.min(5, (prev.user.hearts || 5) + heartsChange)),
            totalLearningTime: (prev.user.totalLearningTime || 0) + timeSpent,
            lessonsPerfected: perfect ? (prev.user.lessonsPerfected || 0) + 1 : (prev.user.lessonsPerfected || 0)
          } : null
        };
      });
    }
  }, [gameState.learningProgress, gameState.user, gameState.isGuestUser, playRewardSound]);

  const loseHeart = useCallback(async () => {
    if (gameState.isGuestUser) {
      // Handle heart loss for guest users
      setGameState(prev => ({
        ...prev,
        user: prev.user ? {
          ...prev.user,
          hearts: Math.max(0, (prev.user.hearts || 5) - 1)
        } : null
      }));
      
      const currentHearts = Math.max(0, (gameState.user?.hearts || 5) - 1);
      
      if (currentHearts <= 0) {
        // Show heart shop when hearts reach 0
        setGameState(prev => ({
          ...prev,
          showHeartShop: true
        }));
        
        toast({
          title: '💔 No Hearts Left!',
          description: 'Purchase hearts to continue immediately, or wait for them to regenerate!',
          variant: 'destructive',
        });
      } else {
        toast({
          title: '💔 Heart Lost!',
          description: `${currentHearts} hearts remaining. Keep trying!`,
          variant: 'destructive',
        });
      }
      
      return;
    }
    
    if (!auth.currentUser) return;

    try {
      const userId = auth.currentUser.uid;
      const userRef = doc(db, "users", userId);

      const newHearts = Math.max(0, (gameState.user?.hearts || 5) - 1);

      setGameState(prev => ({
        ...prev,
        user: prev.user ? {
          ...prev.user,
          hearts: newHearts
        } : null
      }));

      await setDoc(userRef, {
        hearts: newHearts,
        lastHeartLossTime: new Date().toISOString(),
        lastUpdated: new Date().toISOString()
      }, { merge: true });

      if (newHearts <= 0) {
        // Show heart shop when hearts reach 0
        setGameState(prev => ({
          ...prev,
          showHeartShop: true
        }));
        
        toast({
          title: '💔 No Hearts Left!',
          description: 'Purchase hearts to continue immediately, or wait for them to regenerate!',
          variant: 'destructive',
        });
      } else {
        toast({
          title: '💔 Heart Lost!',
          description: `${newHearts} hearts remaining. Keep trying!`,
          variant: 'destructive',
        });
      }

      console.log('💔 Heart lost and saved to Firebase');
    } catch (error) {
      console.error('❌ Failed to lose heart:', error);
    }
  }, [gameState.user, gameState.isGuestUser]);

  // Heart regeneration logic - regenerate 1 heart every 30 minutes
  const regenerateHearts = useCallback(async () => {
    if (!gameState.user || gameState.user.hearts >= 5) return;
    
    if (gameState.isGuestUser) {
      // For guest users, just update local state
      const lastHeartLossTime = localStorage.getItem('ecg-last-heart-loss');
      if (lastHeartLossTime) {
        const timeSinceLastLoss = Date.now() - parseInt(lastHeartLossTime);
        const heartsToRegenerate = Math.floor(timeSinceLastLoss / (30 * 60 * 1000)); // 30 minutes per heart
        
        if (heartsToRegenerate > 0) {
          setGameState(prev => ({
            ...prev,
            user: prev.user ? {
              ...prev.user,
              hearts: Math.min(5, (prev.user.hearts || 0) + heartsToRegenerate)
            } : null
          }));
          
          localStorage.setItem('ecg-last-heart-loss', (Date.now() - (timeSinceLastLoss % (30 * 60 * 1000))).toString());
        }
      }
      return;
    }
    
    if (!auth.currentUser) return;

    try {
      const userId = auth.currentUser.uid;
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);
      
      if (userSnap.exists()) {
        const userData = userSnap.data();
        const lastHeartLossTime = userData.lastHeartLossTime;
        
        if (lastHeartLossTime) {
          const timeSinceLastLoss = Date.now() - new Date(lastHeartLossTime).getTime();
          const heartsToRegenerate = Math.floor(timeSinceLastLoss / (30 * 60 * 1000)); // 30 minutes per heart
          
          if (heartsToRegenerate > 0) {
            const newHearts = Math.min(5, (userData.hearts || 0) + heartsToRegenerate);
            
            setGameState(prev => ({
              ...prev,
              user: prev.user ? {
                ...prev.user,
                hearts: newHearts
              } : null
            }));

            await setDoc(userRef, {
              hearts: newHearts,
              lastHeartLossTime: newHearts >= 5 ? null : lastHeartLossTime, // Clear if full hearts
              lastUpdated: new Date().toISOString()
            }, { merge: true });

            if (newHearts > (userData.hearts || 0)) {
              toast({
                title: '� Hearts Regenerated!',
                description: `You now have ${newHearts} hearts. Ready to continue learning?`,
                variant: 'default',
              });
            }
          }
        }
      }
    } catch (error) {
      console.error('❌ Failed to regenerate hearts:', error);
    }
  }, [gameState.user, gameState.isGuestUser]);

  // Check for heart regeneration every minute
  useEffect(() => {
    const heartRegenInterval = setInterval(regenerateHearts, 60000); // Check every minute
    
    // Run initial check
    regenerateHearts();
    
    return () => clearInterval(heartRegenInterval);
  }, [regenerateHearts]);

  // Load learning progress when user is authenticated
  useEffect(() => {
    if (gameState.isAuthenticated && !gameState.isGuestUser) {
      loadLearningProgress();
    }
  }, [gameState.isAuthenticated, gameState.isGuestUser, loadLearningProgress]);

  // Function to force refresh daily tasks from Firebase
  const refreshDailyTasks = useCallback(async () => {
    console.log('🔄 Force refreshing daily tasks from Firebase...');
    
    try {
      // Reset last refresh time to prevent throttling
      setLastRefreshTime(Date.now());
      
      // Check auth state first to prevent permission errors
      const isAuthenticated = auth.currentUser !== null && !gameState.isGuestUser;
      if (!isAuthenticated) {
        console.warn('⚠️ Cannot refresh tasks - user not authenticated');
        toast({
          title: 'Authentication Required',
          description: 'Please log in to refresh your tasks.',
          variant: 'destructive'
        });
        return;
      }
      
      // Fetch fresh tasks from Firebase
      const freshTasks = await fetchDailyTasksFromFirestore();
      
      if (freshTasks.length > 0) {
        console.log('✅ Successfully refreshed tasks:', freshTasks.length);
        
        // Update completed status if user is authenticated
        if (auth.currentUser && !gameState.isGuestUser) {
          try {
            const userProgressRef = doc(db, "userProgress", auth.currentUser.uid);
            const progressSnap = await getDoc(userProgressRef);
            
            if (progressSnap.exists()) {
              const progressData = progressSnap.data();
              const completedTasksFromFirestore = progressData.completedTasks || {};
              
              // Update tasks with completion status
              const updatedTasks = freshTasks.map(task => {
                if (completedTasksFromFirestore[task.id]) {
                  return {
                    ...task,
                    completed: true,
                    earnedPoints: task.points
                  };
                }
                return task;
              });
              
              const completedCount = updatedTasks.filter(t => t.completed).length;
              
              setGameState(prev => ({
                ...prev,
                dailyTasks: updatedTasks,
                completedTasks: completedCount
              }));
              
              console.log(`✅ Updated ${completedCount} completed tasks from Firebase`);
              return;
            }
          } catch (error) {
            console.error('❌ Failed to load completed tasks during refresh:', error);
          }
        }
        
        // If not authenticated or no completion data, just update tasks
        setGameState(prev => ({
          ...prev,
          dailyTasks: freshTasks
        }));
      } else {
        console.warn('⚠️ No tasks returned during refresh');
        toast({
          title: 'No Daily Tasks Available',
          description: 'Unable to load tasks from Firebase. Please check your connection.',
          variant: 'destructive'
        });
      }
    } catch (error) {
      console.error('❌ Error refreshing daily tasks:', error);
      toast({
        title: 'Error Refreshing Tasks',
        description: 'Failed to refresh daily tasks. Please try again later.',
        variant: 'destructive'
      });
    }
  }, [fetchDailyTasksFromFirestore, gameState.isGuestUser]);

  // Function to update learning progress in state (used by real-time sync)
  const updateLearningProgressInState = useCallback((moduleId: string, progressData: any) => {
    setGameState(prev => ({
      ...prev,
      learningProgress: {
        ...prev.learningProgress,
        [moduleId]: progressData
      }
    }));
  }, []);

  // Add logout function
  const logout = useCallback(async () => {
    try {
      console.log('🚪 Logging out user...');
      
      // First clear local state immediately
      setGameState(prev => ({
        ...prev,
        isAuthenticated: false,
        user: null,
        isGuestUser: false,
        dailyTasks: [],
        hearts: 5,
        currentStreak: 0,
        totalXP: 0,
        todayXP: 0,
        rank: 'Bronze',
        todayDate: new Date().toDateString()
      }));
      
      // Clear all localStorage items
      localStorage.removeItem('ecg-guest-mode');
      localStorage.removeItem('ecg-guest-id');
      localStorage.removeItem('ecg-user-data');
      localStorage.removeItem('gameState');
      
      // Sign out from Firebase
      const { signOutUser } = await import('@/firebase');
      await signOutUser();
      
      console.log('✅ Logout completed');
      
      // Force a page reload to ensure clean state
      setTimeout(() => {
        window.location.reload();
      }, 100);
      
    } catch (error) {
      console.error('❌ Error during logout:', error);
    }
  }, []);

  // Function to update user profile with onboarding data
  const updateUserOnboardingData = useCallback(async (onboardingData: {
    professionCategory: 'physician' | 'nursing' | 'student' | 'allied-health';
    professionRole: string;
    experienceLevel: 'beginner' | 'intermediate' | 'advanced';
    assessmentScore?: number;
    recommendedModule: number;
    learningGoals: string;
    dailyGoal: string;
    studySchedule: string;
  }) => {
    try {
      console.log('📝 Updating user onboarding data:', onboardingData);
      
      if (auth.currentUser && !gameState.isGuestUser) {
        const userId = auth.currentUser.uid;
        const userRef = doc(db, "users", userId);
        
        // Update Firebase with onboarding data
        await setDoc(userRef, {
          professionCategory: onboardingData.professionCategory,
          professionRole: onboardingData.professionRole,
          experienceLevel: onboardingData.experienceLevel,
          onboardingAssessmentScore: onboardingData.assessmentScore || 0,
          recommendedModule: onboardingData.recommendedModule,
          learningGoals: onboardingData.learningGoals,
          dailyGoal: onboardingData.dailyGoal,
          studySchedule: onboardingData.studySchedule,
          onboardingCompleted: true,
          onboardingCompletedDate: new Date().toISOString(),
          lastUpdated: new Date().toISOString()
        }, { merge: true });
        
        // Update local state
        setGameState(prev => ({
          ...prev,
          user: prev.user ? {
            ...prev.user,
            professionCategory: onboardingData.professionCategory,
            professionRole: onboardingData.professionRole,
            experienceLevel: onboardingData.experienceLevel,
            onboardingAssessmentScore: onboardingData.assessmentScore || 0,
            recommendedModule: onboardingData.recommendedModule,
            learningGoals: onboardingData.learningGoals,
            dailyGoal: onboardingData.dailyGoal,
            studySchedule: onboardingData.studySchedule,
            onboardingCompleted: true,
            onboardingCompletedDate: new Date().toISOString()
          } : prev.user
        }));
        
        console.log('✅ Onboarding data updated successfully');
        
        // Create welcome notification with personalized content
        await unifiedNotificationService.createNotification({
          userId,
          title: `Welcome, ${onboardingData.professionRole}!`,
          body: `Your personalized ECG learning journey starts with Module ${onboardingData.recommendedModule}. Goal: ${onboardingData.learningGoals}`,
          type: 'progress'
        });
        
      } else if (gameState.isGuestUser) {
        // Store onboarding data in localStorage for guest users
        localStorage.setItem('ecg-guest-onboarding', JSON.stringify(onboardingData));
        
        // Update local state for guest users
        setGameState(prev => ({
          ...prev,
          user: prev.user ? {
            ...prev.user,
            professionCategory: onboardingData.professionCategory,
            professionRole: onboardingData.professionRole,
            experienceLevel: onboardingData.experienceLevel,
            onboardingAssessmentScore: onboardingData.assessmentScore || 0,
            recommendedModule: onboardingData.recommendedModule,
            learningGoals: onboardingData.learningGoals,
            dailyGoal: onboardingData.dailyGoal,
            studySchedule: onboardingData.studySchedule,
            onboardingCompleted: true,
            onboardingCompletedDate: new Date().toISOString()
          } : prev.user
        }));
        
        console.log('✅ Guest onboarding data stored locally');
      }
      
    } catch (error) {
      console.error('❌ Error updating onboarding data:', error);
      toast({
        title: "Setup Error",
        description: "Failed to save your preferences. Please try again.",
        variant: "destructive",
      });
    }
  }, [gameState.isGuestUser]);

  // Heart shop functions
  const showHeartShop = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      showHeartShop: true
    }));
  }, []);

  const hideHeartShop = useCallback(() => {
    setGameState(prev => ({
      ...prev,
      showHeartShop: false
    }));
  }, []);

  const handleHeartPurchaseSuccess = useCallback(async (heartsReceived: number) => {
    try {
      // Update hearts in gameState
      setGameState(prev => ({
        ...prev,
        user: prev.user ? {
          ...prev.user,
          hearts: Math.min(5, (prev.user.hearts || 0) + heartsReceived)
        } : null,
        showHeartShop: false // Hide the shop after successful purchase
      }));

      // Show success message
      toast({
        title: '💖 Hearts Purchased!',
        description: `Successfully added ${heartsReceived} hearts. Keep learning!`,
        variant: 'default',
      });

      console.log(`💖 Heart purchase successful: +${heartsReceived} hearts`);
    } catch (error) {
      console.error('❌ Error handling heart purchase:', error);
    }
  }, []);

  return { 
    gameState, 
    login, 
    logout, // Add logout function
    skipLogin, 
    completeTask,
    refreshUserStatsImmediately,
    refreshDailyTasks, // Add the new function
    updateUserOnboardingData, // Add new onboarding function
    // Learning functions
    loadLearningProgress,
    completeLearningLesson,
    updateLearningProgressInState,
    loseHeart,
    regenerateHearts,
    // Heart shop functions
    showHeartShop,
    hideHeartShop,
    handleHeartPurchaseSuccess
  };
};

