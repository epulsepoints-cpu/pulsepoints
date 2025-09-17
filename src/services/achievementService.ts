import { db } from '@/firebase';
import { doc, setDoc, getDoc, updateDoc, arrayUnion, serverTimestamp } from 'firebase/firestore';

export interface AchievementProgress {
  id: string;
  title: string;
  description: string;
  progress: number;
  total: number;
  completed: boolean;
  claimed: boolean;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  reward: {
    xp: number;
    gems?: number;
    title?: string;
  };
  category: 'beginner' | 'progress' | 'mastery' | 'special';
  prerequisites?: string[];
  unlockedAt?: string;
  claimedAt?: string;
}

export interface UserAchievements {
  achievements: Record<string, AchievementProgress>;
  lastUpdated: string;
}

/**
 * Get user achievements from Firebase
 */
export const getUserAchievements = async (userId: string): Promise<UserAchievements | null> => {
  try {
    console.log('🔍 Fetching user achievements from Firebase:', userId);
    
    const achievementsRef = doc(db, 'userAchievements', userId);
    const achievementsDoc = await getDoc(achievementsRef);
    
    if (achievementsDoc.exists()) {
      const data = achievementsDoc.data() as UserAchievements;
      console.log('✅ User achievements loaded:', Object.keys(data.achievements).length);
      return data;
    } else {
      console.log('⚠️ No achievements found for user, creating default set');
      return null;
    }
  } catch (error) {
    console.error('❌ Failed to fetch user achievements:', error);
    throw error;
  }
};

/**
 * Initialize default achievements for a new user
 */
export const initializeUserAchievements = async (userId: string): Promise<UserAchievements> => {
  try {
    console.log('🆕 Initializing achievements for new user:', userId);
    
    const defaultAchievements: Record<string, AchievementProgress> = {
      'first-lesson': {
        id: 'first-lesson',
        title: 'ECG Apprentice',
        description: 'Complete your first ECG lesson',
        progress: 0,
        total: 1,
        completed: false,
        claimed: false,
        rarity: 'common',
        reward: { xp: 50 },
        category: 'beginner'
      },
      'fundamentals-master': {
        id: 'fundamentals-master',
        title: 'Fundamentals Master',
        description: 'Complete the ECG Fundamentals module',
        progress: 0,
        total: 9,
        completed: false,
        claimed: false,
        rarity: 'rare',
        reward: { xp: 200, gems: 50 },
        category: 'mastery'
      },
      'streak-3': {
        id: 'streak-3',
        title: 'Getting Started',
        description: 'Maintain a 3-day learning streak',
        progress: 0,
        total: 3,
        completed: false,
        claimed: false,
        rarity: 'common',
        reward: { xp: 75, gems: 15 },
        category: 'progress'
      },
      'week-streak': {
        id: 'week-streak',
        title: 'Rhythm Master',
        description: 'Maintain a 7-day learning streak',
        progress: 0,
        total: 7,
        completed: false,
        claimed: false,
        rarity: 'rare',
        reward: { xp: 150, gems: 50 },
        category: 'progress'
      },
      'streak-14': {
        id: 'streak-14',
        title: 'Dedicated Learner',
        description: 'Maintain a 14-day learning streak',
        progress: 0,
        total: 14,
        completed: false,
        claimed: false,
        rarity: 'rare',
        reward: { xp: 300, gems: 100 },
        category: 'progress'
      },
      'streak-30': {
        id: 'streak-30',
        title: 'Habit Master',
        description: 'Maintain a 30-day learning streak',
        progress: 0,
        total: 30,
        completed: false,
        claimed: false,
        rarity: 'epic',
        reward: { xp: 750, gems: 250 },
        category: 'progress'
      },
      'streak-100': {
        id: 'streak-100',
        title: 'Unstoppable Force',
        description: 'Maintain a 100-day learning streak',
        progress: 0,
        total: 100,
        completed: false,
        claimed: false,
        rarity: 'legendary',
        reward: { xp: 2000, gems: 500, title: 'Streak Legend' },
        category: 'progress'
      },
      'perfect-score': {
        id: 'perfect-score',
        title: 'Perfect Score',
        description: 'Get a perfect score on any lesson',
        progress: 0,
        total: 1,
        completed: false,
        claimed: false,
        rarity: 'rare',
        reward: { xp: 75, gems: 10 },
        category: 'progress'
      },
      'speed-demon': {
        id: 'speed-demon',
        title: 'Speed Demon',
        description: 'Complete 5 lessons in under 3 minutes each',
        progress: 0,
        total: 5,
        completed: false,
        claimed: false,
        rarity: 'epic',
        reward: { xp: 150, gems: 30 },
        category: 'special'
      },
      'knowledge-seeker': {
        id: 'knowledge-seeker',
        title: 'Knowledge Seeker',
        description: 'Complete 50 total lessons',
        progress: 0,
        total: 50,
        completed: false,
        claimed: false,
        rarity: 'epic',
        reward: { xp: 500, gems: 100 },
        category: 'progress'
      },
      'ecg-master': {
        id: 'ecg-master',
        title: 'Wave Virtuoso',
        description: 'Complete all available modules',
        progress: 0,
        total: 8,
        completed: false,
        claimed: false,
        rarity: 'legendary',
        reward: { xp: 1000, gems: 250, title: 'Wave Virtuoso' },
        category: 'mastery'
      }
    };

    const userAchievements: UserAchievements = {
      achievements: defaultAchievements,
      lastUpdated: new Date().toISOString()
    };

    const achievementsRef = doc(db, 'userAchievements', userId);
    await setDoc(achievementsRef, userAchievements);
    
    console.log('✅ Default achievements initialized');
    return userAchievements;
  } catch (error) {
    console.error('❌ Failed to initialize user achievements:', error);
    throw error;
  }
};

/**
 * Update achievement progress
 */
export const updateAchievementProgress = async (
  userId: string,
  achievementId: string,
  progress: number,
  autoComplete: boolean = true
): Promise<void> => {
  try {
    console.log('📈 Updating achievement progress:', { userId, achievementId, progress });
    
    const achievementsRef = doc(db, 'userAchievements', userId);
    const achievementsDoc = await getDoc(achievementsRef);
    
    if (!achievementsDoc.exists()) {
      console.log('⚠️ User achievements not found, initializing...');
      await initializeUserAchievements(userId);
      return updateAchievementProgress(userId, achievementId, progress, autoComplete);
    }

    const data = achievementsDoc.data() as UserAchievements;
    const achievement = data.achievements[achievementId];
    
    if (!achievement) {
      console.warn('⚠️ Achievement not found:', achievementId);
      return;
    }

    // Update progress
    achievement.progress = Math.min(progress, achievement.total);
    
    // Auto-complete if progress reaches total
    if (autoComplete && achievement.progress >= achievement.total && !achievement.completed) {
      achievement.completed = true;
      achievement.unlockedAt = new Date().toISOString();
      console.log('🎉 Achievement completed:', achievement.title);
    }

    // Update in Firebase
    await updateDoc(achievementsRef, {
      [`achievements.${achievementId}`]: achievement,
      lastUpdated: new Date().toISOString()
    });

    console.log('✅ Achievement progress updated');
  } catch (error) {
    console.error('❌ Failed to update achievement progress:', error);
    throw error;
  }
};

/**
 * Claim achievement reward
 */
export const claimAchievementReward = async (
  userId: string,
  achievementId: string
): Promise<{ xp: number; gems: number; title?: string }> => {
  try {
    console.log('🎁 Claiming achievement reward:', { userId, achievementId });
    
    const achievementsRef = doc(db, 'userAchievements', userId);
    const userRef = doc(db, 'users', userId);
    
    // Get current achievement data
    const achievementsDoc = await getDoc(achievementsRef);
    if (!achievementsDoc.exists()) {
      throw new Error('User achievements not found');
    }

    const achievementsData = achievementsDoc.data() as UserAchievements;
    const achievement = achievementsData.achievements[achievementId];
    
    if (!achievement) {
      throw new Error('Achievement not found');
    }

    if (!achievement.completed) {
      throw new Error('Achievement not completed yet');
    }

    if (achievement.claimed) {
      throw new Error('Achievement reward already claimed');
    }

    // Get current user data
    const userDoc = await getDoc(userRef);
    const userData = userDoc.exists() ? userDoc.data() : { xp: 0, gems: 0 };
    
    // Calculate new totals
    const newXP = (userData.xp || 0) + achievement.reward.xp;
    const newGems = (userData.gems || 0) + (achievement.reward.gems || 0);

    // Update achievement as claimed
    achievement.claimed = true;
    achievement.claimedAt = new Date().toISOString();

    // Update both documents atomically
    await Promise.all([
      updateDoc(achievementsRef, {
        [`achievements.${achievementId}`]: achievement,
        lastUpdated: new Date().toISOString()
      }),
      setDoc(userRef, {
        ...userData,
        xp: newXP,
        gems: newGems,
        lastActive: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }, { merge: true })
    ]);

    console.log('✅ Achievement reward claimed successfully:', {
      xp: achievement.reward.xp,
      gems: achievement.reward.gems || 0,
      title: achievement.reward.title
    });

    return {
      xp: achievement.reward.xp,
      gems: achievement.reward.gems || 0,
      title: achievement.reward.title
    };
  } catch (error) {
    console.error('❌ Failed to claim achievement reward:', error);
    throw error;
  }
};

/**
 * Check and update multiple achievements based on user stats
 */
export const checkAchievements = async (
  userId: string,
  stats: {
    totalLessons: number;
    completedModules: string[];
    currentStreak: number;
    perfectLessons: number;
    fastCompletions: number;
  }
): Promise<string[]> => {
  try {
    console.log('🔍 Checking achievements for user:', userId);
    
    const newlyCompleted: string[] = [];

    // First lesson achievement
    if (stats.totalLessons >= 1) {
      await updateAchievementProgress(userId, 'first-lesson', 1);
      newlyCompleted.push('first-lesson');
    }

    // Fundamentals master (module-1 completion)
    if (stats.completedModules.includes('module-1')) {
      await updateAchievementProgress(userId, 'fundamentals-master', 9);
      newlyCompleted.push('fundamentals-master');
    }

    // Streak achievements - check all streak milestones
    if (stats.currentStreak >= 3) {
      await updateAchievementProgress(userId, 'streak-3', stats.currentStreak);
      newlyCompleted.push('streak-3');
    }
    
    if (stats.currentStreak >= 7) {
      await updateAchievementProgress(userId, 'week-streak', stats.currentStreak);
      newlyCompleted.push('week-streak');
    }
    
    if (stats.currentStreak >= 14) {
      await updateAchievementProgress(userId, 'streak-14', stats.currentStreak);
      newlyCompleted.push('streak-14');
    }
    
    if (stats.currentStreak >= 30) {
      await updateAchievementProgress(userId, 'streak-30', stats.currentStreak);
      newlyCompleted.push('streak-30');
    }
    
    if (stats.currentStreak >= 100) {
      await updateAchievementProgress(userId, 'streak-100', stats.currentStreak);
      newlyCompleted.push('streak-100');
    }

    // Perfect score
    if (stats.perfectLessons >= 1) {
      await updateAchievementProgress(userId, 'perfect-score', 1);
      newlyCompleted.push('perfect-score');
    }

    // Speed demon
    if (stats.fastCompletions >= 5) {
      await updateAchievementProgress(userId, 'speed-demon', stats.fastCompletions);
      newlyCompleted.push('speed-demon');
    }

    // Knowledge seeker
    if (stats.totalLessons >= 50) {
      await updateAchievementProgress(userId, 'knowledge-seeker', stats.totalLessons);
      newlyCompleted.push('knowledge-seeker');
    }

    // ECG Master (all modules)
    if (stats.completedModules.length >= 8) {
      await updateAchievementProgress(userId, 'ecg-master', stats.completedModules.length);
      newlyCompleted.push('ecg-master');
    }

    console.log('✅ Achievement check completed:', newlyCompleted);
    return newlyCompleted;
  } catch (error) {
    console.error('❌ Failed to check achievements:', error);
    throw error;
  }
};
