import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/firebase';

export interface LessonProgressState {
  lessonId: string;
  moduleId: string;
  currentStep: number;
  answers: { [stepId: string]: number };
  startTime: number;
  stepStartTime: number;
  hearts: number;
  score: number;
  streak: number;
  mistakes: number;
  perfectAnswers: number;
  timeSpentPerStep: { [stepId: string]: number };
  completed: boolean;
  finalScore?: number;
  totalTimeSpent?: number;
  lastUpdated: number;
}

export interface UserLessonProgress {
  [lessonId: string]: LessonProgressState;
}

/**
 * Save lesson progress to both localStorage and Firestore
 */
export const saveLessonProgress = async (
  userId: string | null,
  lessonId: string,
  moduleId: string,
  progressState: Partial<LessonProgressState>
): Promise<void> => {
  const timestamp = Date.now();
  
  const fullState: LessonProgressState = {
    lessonId,
    moduleId,
    currentStep: 0,
    answers: {},
    startTime: timestamp,
    stepStartTime: timestamp,
    hearts: 5,
    score: 0,
    streak: 0,
    mistakes: 0,
    perfectAnswers: 0,
    timeSpentPerStep: {},
    completed: false,
    lastUpdated: timestamp,
    ...progressState
  };

  // Always save to localStorage for immediate access
  const localKey = `lesson-${lessonId}-progress`;
  localStorage.setItem(localKey, JSON.stringify(fullState));

  // Save to Firestore if user is authenticated
  if (userId) {
    try {
      const userProgressRef = doc(db, 'userLessonProgress', userId);
      
      // Get existing progress or create new
      const docSnap = await getDoc(userProgressRef);
      const existingProgress: UserLessonProgress = docSnap.exists() 
        ? docSnap.data() as UserLessonProgress 
        : {};

      // Update with new lesson progress
      const updatedProgress = {
        ...existingProgress,
        [lessonId]: fullState
      };

      await setDoc(userProgressRef, updatedProgress, { merge: true });
      console.log('✅ Lesson progress saved to Firestore:', lessonId);
    } catch (error) {
      console.error('❌ Failed to save lesson progress to Firestore:', error);
      // Continue with local storage only
    }
  }
};

/**
 * Load lesson progress from Firestore or localStorage
 */
export const loadLessonProgress = async (
  userId: string | null,
  lessonId: string
): Promise<LessonProgressState | null> => {
  // Try to load from Firestore first if user is authenticated
  if (userId) {
    try {
      const userProgressRef = doc(db, 'userLessonProgress', userId);
      const docSnap = await getDoc(userProgressRef);
      
      if (docSnap.exists()) {
        const progressData = docSnap.data() as UserLessonProgress;
        const lessonProgress = progressData[lessonId];
        
        if (lessonProgress && !lessonProgress.completed) {
          console.log('✅ Loaded lesson progress from Firestore:', lessonId);
          return lessonProgress;
        }
      }
    } catch (error) {
      console.error('❌ Failed to load lesson progress from Firestore:', error);
      // Fall back to localStorage
    }
  }

  // Fall back to localStorage
  const localKey = `lesson-${lessonId}-progress`;
  const localData = localStorage.getItem(localKey);
  
  if (localData) {
    try {
      const progress = JSON.parse(localData) as LessonProgressState;
      if (!progress.completed) {
        console.log('✅ Loaded lesson progress from localStorage:', lessonId);
        return progress;
      }
    } catch (error) {
      console.error('❌ Failed to parse local lesson progress:', error);
    }
  }

  return null;
};

/**
 * Mark lesson as completed and clean up progress
 */
export const completeLessonProgress = async (
  userId: string | null,
  lessonId: string,
  moduleId: string,
  finalScore: number,
  totalTimeSpent: number
): Promise<void> => {
  const timestamp = Date.now();

  // Update progress state to completed
  const completedState: Partial<LessonProgressState> = {
    completed: true,
    finalScore,
    totalTimeSpent,
    lastUpdated: timestamp
  };

  // Save completed state briefly, then clean up
  await saveLessonProgress(userId, lessonId, moduleId, completedState);

  // Clean up local storage after a short delay
  setTimeout(() => {
    const localKey = `lesson-${lessonId}-progress`;
    localStorage.removeItem(localKey);
    console.log('🧹 Cleaned up local lesson progress:', lessonId);
  }, 5000);

  // Mark as completed in Firestore but keep for analytics
  if (userId) {
    try {
      const userProgressRef = doc(db, 'userLessonProgress', userId);
      const docSnap = await getDoc(userProgressRef);
      
      if (docSnap.exists()) {
        const existingProgress = docSnap.data() as UserLessonProgress;
        const lessonProgress = existingProgress[lessonId];
        
        if (lessonProgress) {
          const updatedProgress = {
            ...existingProgress,
            [lessonId]: {
              ...lessonProgress,
              ...completedState
            }
          };
          
          await setDoc(userProgressRef, updatedProgress, { merge: true });
          console.log('✅ Marked lesson as completed in Firestore:', lessonId);
        }
      }
    } catch (error) {
      console.error('❌ Failed to mark lesson as completed in Firestore:', error);
    }
  }
};

/**
 * Clear all lesson progress (for testing or reset)
 */
export const clearLessonProgress = async (
  userId: string | null,
  lessonId?: string
): Promise<void> => {
  if (lessonId) {
    // Clear specific lesson
    const localKey = `lesson-${lessonId}-progress`;
    localStorage.removeItem(localKey);
    
    if (userId) {
      try {
        const userProgressRef = doc(db, 'userLessonProgress', userId);
        const docSnap = await getDoc(userProgressRef);
        
        if (docSnap.exists()) {
          const existingProgress = docSnap.data() as UserLessonProgress;
          delete existingProgress[lessonId];
          
          await setDoc(userProgressRef, existingProgress);
          console.log('✅ Cleared lesson progress from Firestore:', lessonId);
        }
      } catch (error) {
        console.error('❌ Failed to clear lesson progress from Firestore:', error);
      }
    }
  } else {
    // Clear all lesson progress
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.includes('lesson-') && key.includes('-progress')) {
        localStorage.removeItem(key);
      }
    });
    
    if (userId) {
      try {
        const userProgressRef = doc(db, 'userLessonProgress', userId);
        await setDoc(userProgressRef, {});
        console.log('✅ Cleared all lesson progress from Firestore');
      } catch (error) {
        console.error('❌ Failed to clear all lesson progress from Firestore:', error);
      }
    }
  }
};

/**
 * Get lesson completion statistics
 */
export const getLessonStats = async (
  userId: string | null
): Promise<{
  totalStarted: number;
  totalCompleted: number;
  averageScore: number;
  totalTimeSpent: number;
  lessonsByModule: { [moduleId: string]: number };
}> => {
  if (!userId) {
    return {
      totalStarted: 0,
      totalCompleted: 0,
      averageScore: 0,
      totalTimeSpent: 0,
      lessonsByModule: {}
    };
  }

  try {
    const userProgressRef = doc(db, 'userLessonProgress', userId);
    const docSnap = await getDoc(userProgressRef);
    
    if (!docSnap.exists()) {
      return {
        totalStarted: 0,
        totalCompleted: 0,
        averageScore: 0,
        totalTimeSpent: 0,
        lessonsByModule: {}
      };
    }

    const progressData = docSnap.data() as UserLessonProgress;
    const lessons = Object.values(progressData);
    
    const totalStarted = lessons.length;
    const completedLessons = lessons.filter(lesson => lesson.completed);
    const totalCompleted = completedLessons.length;
    const totalTimeSpent = completedLessons.reduce((sum, lesson) => sum + (lesson.totalTimeSpent || 0), 0);
    const averageScore = totalCompleted > 0 
      ? completedLessons.reduce((sum, lesson) => sum + (lesson.finalScore || 0), 0) / totalCompleted 
      : 0;
    
    const lessonsByModule: { [moduleId: string]: number } = {};
    completedLessons.forEach(lesson => {
      lessonsByModule[lesson.moduleId] = (lessonsByModule[lesson.moduleId] || 0) + 1;
    });

    return {
      totalStarted,
      totalCompleted,
      averageScore: Math.round(averageScore),
      totalTimeSpent,
      lessonsByModule
    };
  } catch (error) {
    console.error('❌ Failed to get lesson stats:', error);
    return {
      totalStarted: 0,
      totalCompleted: 0,
      averageScore: 0,
      totalTimeSpent: 0,
      lessonsByModule: {}
    };
  }
};
