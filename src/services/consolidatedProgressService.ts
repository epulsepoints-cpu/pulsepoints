import { db } from '@/firebase';
import { doc, getDoc, setDoc, updateDoc, increment, serverTimestamp } from 'firebase/firestore';

export interface LessonCompletionData {
  moduleId: string;
  lessonId: string;
  score: number;
  timeSpent: number; // in seconds
  perfect: boolean;
  userId: string;
}

/**
 * Consolidated lesson completion handler that updates all necessary Firebase collections
 */
export const handleLessonCompletion = async (data: LessonCompletionData): Promise<void> => {
  const { userId, moduleId, lessonId, score, timeSpent, perfect } = data;
  
  try {
    console.log('🎯 ConsolidatedProgressService: Starting lesson completion update', data);
    
    // Calculate rewards
    const baseXP = score >= 95 ? 75 : score >= 80 ? 50 : score >= 70 ? 30 : 20;
    const bonusXP = perfect ? 25 : 0;
    const totalXP = baseXP + bonusXP;
    const gems = score >= 95 ? 10 : score >= 80 ? 5 : score >= 70 ? 3 : 1;
    
    console.log('💎 Calculated rewards:', { totalXP, gems, perfect });
    
    // Update all documents in parallel
    const updatePromises = [
      updateUserDocument(userId, totalXP, gems, perfect),
      updateUserProgressStats(userId, score, timeSpent, perfect),
      updateModuleProgress(userId, moduleId, score, timeSpent),
      updateUserLearningProfile(userId, score, timeSpent)
    ];
    
    await Promise.all(updatePromises);
    console.log('✅ All progress updates completed successfully');
    
  } catch (error) {
    console.error('❌ Failed to update lesson progress:', error);
    throw error;
  }
};

/**
 * Update user document with XP, gems, and other basic stats
 */
const updateUserDocument = async (userId: string, xp: number, gems: number, perfect: boolean): Promise<void> => {
  const userRef = doc(db, 'users', userId);
  
  // Get current user data to handle streak properly
  const userDoc = await getDoc(userRef);
  const userData = userDoc.exists() ? userDoc.data() : {};
  
  // Update streak count - increment if lesson passed (score >= 70), reset to 1 if failed
  const currentStreak = (userData.streakCount || 0);
  const newStreak = xp > 20 ? currentStreak + 1 : 1; // XP > 20 means score >= 70
  const longestStreak = Math.max(userData.longestStreak || 0, newStreak);
  
  await updateDoc(userRef, {
    xp: increment(xp),
    gems: increment(gems),
    totalLessonsCompleted: increment(1),
    perfectLessons: perfect ? increment(1) : increment(0),
    streakCount: newStreak,
    longestStreak: longestStreak,
    lastActive: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
  
  console.log('✅ User document updated:', { xp, gems, perfect, newStreak, longestStreak });
};

/**
 * Update comprehensive user progress stats
 */
const updateUserProgressStats = async (userId: string, score: number, timeSpent: number, perfect: boolean): Promise<void> => {
  const statsRef = doc(db, 'userProgressStats', userId);
  const statsDoc = await getDoc(statsRef);
  
  if (!statsDoc.exists()) {
    // Create initial stats document
    await setDoc(statsRef, {
      totalLessons: 1,
      perfectLessons: perfect ? 1 : 0,
      fastCompletions: timeSpent < 180 ? 1 : 0,
      totalTimeSpent: Math.round(timeSpent / 60), // Convert to minutes
      averageScore: score,
      currentStreak: 1,
      longestStreak: 1,
      createdAt: serverTimestamp(),
      lastUpdated: serverTimestamp()
    });
  } else {
    const currentData = statsDoc.data();
    const newTotalLessons = (currentData.totalLessons || 0) + 1;
    const newAverageScore = Math.round(
      ((currentData.averageScore || 0) * (currentData.totalLessons || 0) + score) / newTotalLessons
    );
    
    // Calculate streak - increment if passing (score >= 70), reset to 1 if failing
    const currentStreak = currentData.currentStreak || 0;
    const newStreak = score >= 70 ? currentStreak + 1 : 1;
    const newLongestStreak = Math.max(currentData.longestStreak || 0, newStreak);
    
    await updateDoc(statsRef, {
      totalLessons: increment(1),
      perfectLessons: perfect ? increment(1) : increment(0),
      fastCompletions: timeSpent < 180 ? increment(1) : increment(0),
      totalTimeSpent: increment(Math.round(timeSpent / 60)),
      averageScore: newAverageScore,
      currentStreak: newStreak,
      longestStreak: newLongestStreak,
      lastUpdated: serverTimestamp()
    });
  }
  
  console.log('✅ Progress stats updated');
};

/**
 * Update module-specific progress
 */
const updateModuleProgress = async (userId: string, moduleId: string, score: number, timeSpent: number): Promise<void> => {
  const progressRef = doc(db, 'moduleProgress', `${userId}_${moduleId}`);
  const progressDoc = await getDoc(progressRef);
  
  if (!progressDoc.exists()) {
    // Create initial module progress
    await setDoc(progressRef, {
      userId,
      moduleId,
      completedLessons: 1,
      totalLessons: 10, // Default, will be updated as needed
      averageScore: score,
      timeSpent: Math.round(timeSpent / 60),
      accuracy: score,
      lastAccessedAt: serverTimestamp(),
      status: 'in-progress'
    });
  } else {
    const currentData = progressDoc.data();
    const newCompletedLessons = (currentData.completedLessons || 0) + 1;
    const newAverageScore = Math.round(
      ((currentData.averageScore || 0) * (currentData.completedLessons || 0) + score) / newCompletedLessons
    );
    
    await updateDoc(progressRef, {
      completedLessons: increment(1),
      averageScore: newAverageScore,
      timeSpent: increment(Math.round(timeSpent / 60)),
      accuracy: newAverageScore, // Use average score as accuracy
      lastAccessedAt: serverTimestamp(),
      status: newCompletedLessons >= (currentData.totalLessons || 10) ? 'completed' : 'in-progress'
    });
  }
  
  console.log('✅ Module progress updated');
};

/**
 * Update user learning profile
 */
const updateUserLearningProfile = async (userId: string, score: number, timeSpent: number): Promise<void> => {
  const profileRef = doc(db, 'userLearningProfiles', userId);
  const profileDoc = await getDoc(profileRef);
  
  if (!profileDoc.exists()) {
    // Create initial profile
    await setDoc(profileRef, {
      userId,
      totalLessonsCompleted: 1,
      totalTimeSpent: Math.round(timeSpent / 60),
      totalPointsEarned: score,
      averageAccuracy: score,
      learningStreak: 1,
      longestLearningStreak: 1,
      completedModules: [],
      unlockedModules: ['module-1'],
      preferredDifficulty: 'beginner',
      lastUpdated: serverTimestamp(),
      createdAt: serverTimestamp()
    });
  } else {
    const currentData = profileDoc.data();
    const newTotalLessons = (currentData.totalLessonsCompleted || 0) + 1;
    const newAverageAccuracy = Math.round(
      ((currentData.averageAccuracy || 0) * (currentData.totalLessonsCompleted || 0) + score) / newTotalLessons
    );
    
    await updateDoc(profileRef, {
      totalLessonsCompleted: increment(1),
      totalTimeSpent: increment(Math.round(timeSpent / 60)),
      totalPointsEarned: increment(score),
      averageAccuracy: newAverageAccuracy,
      learningStreak: score >= 70 ? increment(1) : 1, // Reset if score too low
      longestLearningStreak: score >= 70 && (currentData.learningStreak || 0) >= (currentData.longestLearningStreak || 0)
        ? increment(1) : (currentData.longestLearningStreak || 1),
      lastUpdated: serverTimestamp()
    });
  }
  
  console.log('✅ Learning profile updated');
};

export default { handleLessonCompletion };
