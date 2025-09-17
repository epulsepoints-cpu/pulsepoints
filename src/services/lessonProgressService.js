import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/firebase';
/**
 * Save lesson progress to both localStorage and Firestore
 */
export const saveLessonProgress = async (userId, lessonId, moduleId, progressState) => {
    const timestamp = Date.now();
    const fullState = {
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
            const existingProgress = docSnap.exists()
                ? docSnap.data()
                : {};
            // Update with new lesson progress
            const updatedProgress = {
                ...existingProgress,
                [lessonId]: fullState
            };
            await setDoc(userProgressRef, updatedProgress, { merge: true });
            console.log('✅ Lesson progress saved to Firestore:', lessonId);
        }
        catch (error) {
            console.error('❌ Failed to save lesson progress to Firestore:', error);
            // Continue with local storage only
        }
    }
};
/**
 * Load lesson progress from Firestore or localStorage
 */
export const loadLessonProgress = async (userId, lessonId) => {
    // Try to load from Firestore first if user is authenticated
    if (userId) {
        try {
            const userProgressRef = doc(db, 'userLessonProgress', userId);
            const docSnap = await getDoc(userProgressRef);
            if (docSnap.exists()) {
                const progressData = docSnap.data();
                const lessonProgress = progressData[lessonId];
                if (lessonProgress && !lessonProgress.completed) {
                    console.log('✅ Loaded lesson progress from Firestore:', lessonId);
                    return lessonProgress;
                }
            }
        }
        catch (error) {
            console.error('❌ Failed to load lesson progress from Firestore:', error);
            // Fall back to localStorage
        }
    }
    // Fall back to localStorage
    const localKey = `lesson-${lessonId}-progress`;
    const localData = localStorage.getItem(localKey);
    if (localData) {
        try {
            const progress = JSON.parse(localData);
            if (!progress.completed) {
                console.log('✅ Loaded lesson progress from localStorage:', lessonId);
                return progress;
            }
        }
        catch (error) {
            console.error('❌ Failed to parse local lesson progress:', error);
        }
    }
    return null;
};
/**
 * Mark lesson as completed and clean up progress
 */
export const completeLessonProgress = async (userId, lessonId, moduleId, finalScore, totalTimeSpent) => {
    const timestamp = Date.now();
    // Update progress state to completed
    const completedState = {
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
                const existingProgress = docSnap.data();
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
        }
        catch (error) {
            console.error('❌ Failed to mark lesson as completed in Firestore:', error);
        }
    }
};
/**
 * Clear all lesson progress (for testing or reset)
 */
export const clearLessonProgress = async (userId, lessonId) => {
    if (lessonId) {
        // Clear specific lesson
        const localKey = `lesson-${lessonId}-progress`;
        localStorage.removeItem(localKey);
        if (userId) {
            try {
                const userProgressRef = doc(db, 'userLessonProgress', userId);
                const docSnap = await getDoc(userProgressRef);
                if (docSnap.exists()) {
                    const existingProgress = docSnap.data();
                    delete existingProgress[lessonId];
                    await setDoc(userProgressRef, existingProgress);
                    console.log('✅ Cleared lesson progress from Firestore:', lessonId);
                }
            }
            catch (error) {
                console.error('❌ Failed to clear lesson progress from Firestore:', error);
            }
        }
    }
    else {
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
            }
            catch (error) {
                console.error('❌ Failed to clear all lesson progress from Firestore:', error);
            }
        }
    }
};
/**
 * Get lesson completion statistics
 */
export const getLessonStats = async (userId) => {
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
        const progressData = docSnap.data();
        const lessons = Object.values(progressData);
        const totalStarted = lessons.length;
        const completedLessons = lessons.filter(lesson => lesson.completed);
        const totalCompleted = completedLessons.length;
        const totalTimeSpent = completedLessons.reduce((sum, lesson) => sum + (lesson.totalTimeSpent || 0), 0);
        const averageScore = totalCompleted > 0
            ? completedLessons.reduce((sum, lesson) => sum + (lesson.finalScore || 0), 0) / totalCompleted
            : 0;
        const lessonsByModule = {};
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
    }
    catch (error) {
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
