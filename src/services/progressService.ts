import { db } from '@/firebase';
import { doc, getDoc, setDoc, updateDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { ModuleProgress, UserLearningProfile } from '@/types/learning';

export interface UserProgressStats {
  level: number;
  xp: number;
  xpToNextLevel: number;
  currentStreak: number;
  longestStreak: number;
  totalLessons: number;
  lessonsThisWeek: number;
  hearts: number;
  gems: number;
  perfectLessons: number;
  fastCompletions: number;
  completedModules: string[];
  weeklyGoal: number;
  lastActive: string;
  moduleProgress: Record<string, ModuleProgress>;
}

/**
 * Calculate user level from XP
 */
export const calculateLevel = (xp: number): { level: number; xpToNextLevel: number } => {
  // XP required for each level increases progressively
  const baseXP = 100;
  let level = 1;
  let totalXPRequired = 0;
  
  while (totalXPRequired + (baseXP * level) <= xp) {
    totalXPRequired += baseXP * level;
    level++;
  }
  
  const xpToNextLevel = baseXP * level;
  
  return { level, xpToNextLevel };
};

/**
 * Get comprehensive user progress stats from Firebase
 */
export const getUserProgressStats = async (userId: string): Promise<UserProgressStats> => {
  try {
    console.log('📊 Fetching user progress stats from Firebase:', userId);
    
    // Get user document
    const userRef = doc(db, 'users', userId);
    const userDoc = await getDoc(userRef);
    
    // Get dedicated progress stats document
    const statsRef = doc(db, 'userProgressStats', userId);
    const statsDoc = await getDoc(statsRef);
    
    // Get user learning profile
    const profileRef = doc(db, 'userLearningProfiles', userId);
    const profileDoc = await getDoc(profileRef);
    
    // Get user module progress
    const progressQuery = query(
      collection(db, 'moduleProgress'),
      where('userId', '==', userId)
    );
    const progressSnapshot = await getDocs(progressQuery);
    
    // Default user data
    const userData = userDoc.exists() ? userDoc.data() : {
      xp: 0,
      gems: 0,
      hearts: 5,
      totalLessonsCompleted: 0,
      perfectLessons: 0,
      lastActive: new Date().toISOString()
    };
    
    // Use dedicated stats document if available, otherwise create/initialize it
    let statsData;
    if (statsDoc.exists()) {
      statsData = statsDoc.data();
      console.log('📊 Using existing stats document:', statsData);
    } else {
      console.log('📊 No stats document found, creating initial stats from user data');
      // Create initial stats from user data
      const initialStats = {
        totalLessons: userData.totalLessonsCompleted || 0,
        perfectLessons: userData.perfectLessons || 0,
        fastCompletions: 0,
        currentStreak: userData.streakCount || 0,
        longestStreak: userData.longestStreak || 0,
        averageScore: 0,
        totalTimeSpent: 0,
        createdAt: new Date().toISOString(),
        lastUpdated: new Date().toISOString()
      };
      
      // Save the initial stats document
      try {
        await setDoc(statsRef, initialStats);
        console.log('✅ Created initial stats document');
      } catch (error) {
        console.warn('⚠️ Failed to create stats document, using local data:', error);
      }
      
      statsData = initialStats;
    }
    
    console.log('📊 Raw stats data:', statsData);
    console.log('👤 Raw user data:', userData);
    
    // Default profile data
    const profileData = profileDoc.exists() ? profileDoc.data() as any : {
      completedModules: [],
      studySchedule: {
        daysPerWeek: 7
      }
    };
    
    // Process module progress for additional stats
    let lessonsThisWeek = 0;
    const moduleProgress: Record<string, ModuleProgress> = {};
    
    progressSnapshot.docs.forEach(doc => {
      const progress = doc.data() as ModuleProgress;
      
      // Store module progress
      moduleProgress[progress.moduleId] = progress;
      
      // Count lessons this week (rough estimate)
      const lastWeek = new Date();
      lastWeek.setDate(lastWeek.getDate() - 7);
      
      // Handle Firebase timestamp or string date
      let lastAccessDate: Date | null = null;
      if (progress.lastAccessedAt) {
        try {
          if (typeof progress.lastAccessedAt === 'string') {
            lastAccessDate = new Date(progress.lastAccessedAt);
          } else {
            // Handle Firebase Timestamp
            const timestamp = progress.lastAccessedAt as any;
            if (timestamp && typeof timestamp.toDate === 'function') {
              lastAccessDate = timestamp.toDate();
            } else if (timestamp && typeof timestamp.seconds === 'number') {
              lastAccessDate = new Date(timestamp.seconds * 1000);
            }
          }
        } catch (error) {
          console.warn('Failed to parse lastAccessedAt:', error);
        }
      }
      
      if (lastAccessDate && lastAccessDate > lastWeek) {
        lessonsThisWeek += Math.min(progress.completedLessons, 7); // Rough estimate
      }
    });
    
    // Calculate level
    const { level, xpToNextLevel } = calculateLevel(userData.xp || 0);
    
    const stats: UserProgressStats = {
      level,
      xp: userData.xp || 0,
      xpToNextLevel,
      currentStreak: statsData.currentStreak || 0,
      longestStreak: statsData.longestStreak || 0,
      totalLessons: statsData.totalLessons || 0,
      lessonsThisWeek,
      hearts: userData.hearts || 5,
      gems: userData.gems || 0,
      perfectLessons: statsData.perfectLessons || 0,
      fastCompletions: statsData.fastCompletions || 0,
      completedModules: profileData.completedModules || [],
      weeklyGoal: profileData.studySchedule?.daysPerWeek || 7,
      lastActive: userData.lastActive || new Date().toISOString(),
      moduleProgress
    };
    
    console.log('✅ User progress stats loaded:', stats);
    return stats;
  } catch (error) {
    console.error('❌ Failed to fetch user progress stats:', error);
    
    // Return default stats on error
    return {
      level: 1,
      xp: 0,
      xpToNextLevel: 100,
      currentStreak: 0,
      longestStreak: 0,
      totalLessons: 0,
      lessonsThisWeek: 0,
      hearts: 5,
      gems: 0,
      perfectLessons: 0,
      fastCompletions: 0,
      completedModules: [],
      weeklyGoal: 7,
      lastActive: new Date().toISOString(),
      moduleProgress: {}
    };
  }
};

/**
 * Update user progress stats when lesson is completed
 */
export const updateUserProgressOnLessonComplete = async (
  userId: string,
  lessonData: {
    moduleId: string;
    lessonId: string;
    score: number;
    timeSpent: number; // in seconds
    passed: boolean;
  }
): Promise<void> => {
  try {
    console.log('📈 Updating user progress on lesson completion:', lessonData);
    
    const userRef = doc(db, 'users', userId);
    const profileRef = doc(db, 'userLearningProfiles', userId);
    const progressRef = doc(db, 'moduleProgress', `${userId}_${lessonData.moduleId}`);
    
    // Get current data
    const [userDoc, profileDoc, progressDoc] = await Promise.all([
      getDoc(userRef),
      getDoc(profileRef),
      getDoc(progressRef)
    ]);
    
    const userData = userDoc.exists() ? userDoc.data() : {};
    const profileData = profileDoc.exists() ? profileDoc.data() : {};
    const progressData = progressDoc.exists() ? progressDoc.data() : {};
    
    // Calculate XP reward
    let xpReward = 20; // Base XP
    if (lessonData.score >= 95) xpReward += 10; // Perfect score bonus
    if (lessonData.timeSpent < 180) xpReward += 5; // Speed bonus
    if (lessonData.passed) xpReward += 5; // Pass bonus
    
    // Update user document
    const newXP = (userData.xp || 0) + xpReward;
    const currentStreak = (userData.streakCount || 0) + 1; // Simplified streak logic
    
    await setDoc(userRef, {
      ...userData,
      xp: newXP,
      streakCount: currentStreak,
      longestStreak: Math.max(userData.longestStreak || 0, currentStreak),
      lastActive: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }, { merge: true });
    
    // Update learning profile
    const updatedProfile = {
      ...profileData,
      totalLessonsCompleted: (profileData.totalLessonsCompleted || 0) + 1,
      totalTimeSpent: (profileData.totalTimeSpent || 0) + Math.round(lessonData.timeSpent / 60),
      totalPointsEarned: (profileData.totalPointsEarned || 0) + xpReward,
      lastUpdated: new Date().toISOString()
    };
    
    await setDoc(profileRef, updatedProfile, { merge: true });
    
    // Update module progress
    const updatedProgress: ModuleProgress = {
      moduleId: lessonData.moduleId,
      userId,
      status: 'in-progress' as const,
      completedLessons: (progressData.completedLessons || 0) + 1,
      totalLessons: progressData.totalLessons || 10, // Default assumption
      completedTasks: (progressData.completedTasks || 0) + 1,
      totalTasks: progressData.totalTasks || 50,
      totalPoints: progressData.totalPoints || 1000,
      earnedPoints: (progressData.earnedPoints || 0) + lessonData.score,
      averageScore: progressData.averageScore 
        ? ((progressData.averageScore * (progressData.completedLessons || 0)) + lessonData.score) / ((progressData.completedLessons || 0) + 1)
        : lessonData.score,
      timeSpent: (progressData.timeSpent || 0) + Math.round(lessonData.timeSpent / 60),
      lastAccessedAt: new Date().toISOString(),
      correctAnswers: (progressData.correctAnswers || 0) + (lessonData.passed ? 1 : 0),
      totalAnswers: (progressData.totalAnswers || 0) + 1,
      accuracy: progressData.accuracy 
        ? ((progressData.accuracy * (progressData.totalAnswers || 0)) + (lessonData.passed ? 100 : 0)) / ((progressData.totalAnswers || 0) + 1)
        : (lessonData.passed ? 100 : 0),
      streak: lessonData.passed ? (progressData.streak || 0) + 1 : 0,
      longestStreak: Math.max(progressData.longestStreak || 0, lessonData.passed ? (progressData.streak || 0) + 1 : 0),
      reviewCount: progressData.reviewCount || 0,
      masteryLevel: Math.min(100, (progressData.masteryLevel || 0) + (lessonData.passed ? 2 : 0))
    };
    
    await setDoc(progressRef, updatedProgress, { merge: true });
    
    console.log('✅ User progress updated successfully');
  } catch (error) {
    console.error('❌ Failed to update user progress:', error);
    throw error;
  }
};

/**
 * Get user's module progress data
 */
export const getUserModuleProgress = async (userId: string): Promise<Record<string, ModuleProgress>> => {
  try {
    console.log('📚 Fetching user module progress:', userId);
    
    const progressQuery = query(
      collection(db, 'moduleProgress'),
      where('userId', '==', userId)
    );
    
    const progressSnapshot = await getDocs(progressQuery);
    const moduleProgress: Record<string, ModuleProgress> = {};
    
    progressSnapshot.docs.forEach(doc => {
      const progress = doc.data() as ModuleProgress;
      moduleProgress[progress.moduleId] = progress;
    });
    
    console.log('✅ Module progress loaded:', Object.keys(moduleProgress));
    return moduleProgress;
  } catch (error) {
    console.error('❌ Failed to fetch module progress:', error);
    return {};
  }
};

/**
 * Initialize user progress for a new user
 */
export const initializeUserProgress = async (userId: string, email: string): Promise<void> => {
  try {
    console.log('🆕 Initializing progress for new user:', userId);
    
    const userRef = doc(db, 'users', userId);
    const profileRef = doc(db, 'userLearningProfiles', userId);
    
    // Initialize user document
    await setDoc(userRef, {
      email,
      xp: 0,
      gems: 0,
      hearts: 5,
      streakCount: 0,
      longestStreak: 0,
      lastActive: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }, { merge: true });
    
    // Initialize learning profile
    const learningProfile: UserLearningProfile = {
      userId,
      learningPath: ['module-1', 'module-2', 'module-3', 'module-4', 'module-5', 'module-6', 'module-7', 'module-8'],
      completedModules: [],
      unlockedModules: ['module-1'],
      totalModulesCompleted: 0,
      totalLessonsCompleted: 0,
      totalTasksCompleted: 0,
      totalTimeSpent: 0,
      totalPointsEarned: 0,
      averageAccuracy: 0,
      learningStreak: 0,
      longestLearningStreak: 0,
      preferredDifficulty: 'beginner',
      learningGoals: ['Master ECG Fundamentals'],
      studySchedule: {
        daysPerWeek: 5,
        minutesPerDay: 30,
        preferredTimeSlots: ['morning'],
        reminderEnabled: true,
        reminderTime: '09:00'
      },
      strengthAreas: [],
      weaknessAreas: [],
      recommendedModules: ['module-1'],
      lastUpdated: new Date().toISOString()
    };
    
    await setDoc(profileRef, learningProfile, { merge: true });
    
    console.log('✅ User progress initialized successfully');
  } catch (error) {
    console.error('❌ Failed to initialize user progress:', error);
    throw error;
  }
};
