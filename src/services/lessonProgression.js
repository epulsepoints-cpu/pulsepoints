import { getAllModules, getUserModuleProgress, getAllUserProgress, isModuleUnlocked } from './learningModules';
/**
 * Handles automatic lesson progression and unlocking
 */
export async function handleLessonProgression(userId, moduleId, completedLessonId, score, timeSpent, isFirstAttempt = true) {
    try {
        console.log('🎯 Processing lesson progression for:', { userId, moduleId, completedLessonId, score });
        // Get all modules and current module
        const allModules = await getAllModules();
        const currentModule = allModules.find(m => m.id === moduleId);
        if (!currentModule) {
            throw new Error('Module not found');
        }
        // Get user's progress for this module
        const moduleProgress = await getUserModuleProgress(userId, moduleId);
        const completedLessons = moduleProgress?.completedLessons || 0;
        const totalLessons = currentModule.lessons.length;
        // Check if this completes the module
        const moduleCompleted = (completedLessons + 1) >= totalLessons;
        // Find next lesson in current module
        const completedLessonIndex = currentModule.lessons.findIndex(l => l.id === completedLessonId);
        const nextLessonInModule = completedLessonIndex < currentModule.lessons.length - 1
            ? currentModule.lessons[completedLessonIndex + 1]
            : null;
        // Check for next module unlock if current module is completed
        let nextModuleUnlocked = false;
        let nextModule = null;
        if (moduleCompleted) {
            // Find modules that have this module as a prerequisite
            const dependentModules = allModules.filter(module => module.prerequisites.includes(currentModule.title));
            for (const module of dependentModules) {
                const isUnlocked = await isModuleUnlocked(module.id, userId, allModules);
                if (isUnlocked && !module.unlocked) {
                    nextModuleUnlocked = true;
                    nextModule = module;
                    break;
                }
            }
        }
        // Calculate rewards
        const rewards = calculateLessonRewards(currentModule.difficulty, score, timeSpent, currentModule.lessons.find(l => l.id === completedLessonId)?.estimatedTime || 15, isFirstAttempt, moduleCompleted);
        return {
            nextLessonAvailable: !!nextLessonInModule,
            nextLessonId: nextLessonInModule?.id,
            nextLessonTitle: nextLessonInModule?.title,
            moduleCompleted,
            nextModuleUnlocked,
            nextModuleId: nextModule?.id,
            nextModuleTitle: nextModule?.title,
            rewards
        };
    }
    catch (error) {
        console.error('❌ Error in lesson progression:', error);
        throw error;
    }
}
/**
 * Calculate lesson completion rewards
 */
export function calculateLessonRewards(difficulty, score, timeSpent, estimatedTime, isFirstAttempt, moduleCompleted) {
    const baseXP = difficulty === 'beginner' ? 25 : difficulty === 'intermediate' ? 50 : 100;
    const baseGems = difficulty === 'beginner' ? 2 : difficulty === 'intermediate' ? 3 : 5;
    let totalXP = baseXP;
    let totalGems = baseGems;
    const bonuses = [];
    // Performance bonus (score-based)
    if (score >= 95) {
        const perfectBonus = Math.floor(baseXP * 0.6);
        totalXP += perfectBonus;
        totalGems += 3;
        bonuses.push(`🏆 Perfect Score: +${perfectBonus} XP, +3 gems`);
    }
    else if (score >= 90) {
        const excellentBonus = Math.floor(baseXP * 0.4);
        totalXP += excellentBonus;
        totalGems += 2;
        bonuses.push(`⭐ Excellent Score: +${excellentBonus} XP, +2 gems`);
    }
    else if (score >= 80) {
        const goodBonus = Math.floor(baseXP * 0.25);
        totalXP += goodBonus;
        totalGems += 1;
        bonuses.push(`👍 Good Score: +${goodBonus} XP, +1 gem`);
    }
    // Speed bonus (completed under estimated time)
    if (timeSpent < estimatedTime * 0.8) {
        const speedBonus = Math.floor(baseXP * 0.3);
        totalXP += speedBonus;
        bonuses.push(`⚡ Speed Bonus: +${speedBonus} XP`);
    }
    else if (timeSpent < estimatedTime) {
        const quickBonus = Math.floor(baseXP * 0.15);
        totalXP += quickBonus;
        bonuses.push(`🚀 Quick Completion: +${quickBonus} XP`);
    }
    // First attempt bonus
    if (isFirstAttempt) {
        const firstTryBonus = Math.floor(baseXP * 0.2);
        totalXP += firstTryBonus;
        totalGems += 1;
        bonuses.push(`🎯 First Try: +${firstTryBonus} XP, +1 gem`);
    }
    // Module completion bonus
    if (moduleCompleted) {
        const moduleBonus = Math.floor(baseXP * 1.5);
        const moduleGemBonus = Math.floor(baseGems * 2);
        totalXP += moduleBonus;
        totalGems += moduleGemBonus;
        bonuses.push(`🏅 Module Complete: +${moduleBonus} XP, +${moduleGemBonus} gems`);
    }
    return {
        xp: totalXP,
        gems: totalGems,
        bonuses
    };
}
/**
 * Get next recommended lesson/module for user
 */
export async function getNextRecommendedLesson(userId, currentModuleId, currentLessonId) {
    try {
        const allModules = await getAllModules();
        const currentModule = allModules.find(m => m.id === currentModuleId);
        if (!currentModule)
            return null;
        // Check for next lesson in current module
        const currentLessonIndex = currentModule.lessons.findIndex(l => l.id === currentLessonId);
        if (currentLessonIndex < currentModule.lessons.length - 1) {
            const nextLesson = currentModule.lessons[currentLessonIndex + 1];
            return {
                type: 'lesson',
                id: nextLesson.id,
                title: nextLesson.title,
                moduleTitle: currentModule.title
            };
        }
        // Check for next unlocked module
        const userProgress = await getAllUserProgress(userId);
        const unlockedModules = await Promise.all(allModules.map(async (module) => ({
            module,
            unlocked: await isModuleUnlocked(module.id, userId, allModules)
        })));
        const nextUnlockedModule = unlockedModules.find(({ module, unlocked }) => unlocked && module.id !== currentModuleId &&
            !userProgress.some(p => p.moduleId === module.id && p.status === 'completed'));
        if (nextUnlockedModule) {
            return {
                type: 'module',
                id: nextUnlockedModule.module.id,
                title: nextUnlockedModule.module.lessons[0]?.title || 'Start Module',
                moduleTitle: nextUnlockedModule.module.title
            };
        }
        return null;
    }
    catch (error) {
        console.error('❌ Error getting next recommended lesson:', error);
        return null;
    }
}
/**
 * Check if user has unlocked all available content
 */
export async function checkLearningCompletion(userId) {
    try {
        const allModules = await getAllModules();
        const userProgress = await getAllUserProgress(userId);
        const completedModules = userProgress.filter(p => p.status === 'completed').length;
        const unlockedModules = await Promise.all(allModules.map(async (module) => ({
            module,
            unlocked: await isModuleUnlocked(module.id, userId, allModules)
        })));
        const unlockedCount = unlockedModules.filter(({ unlocked }) => unlocked).length;
        const allContentUnlocked = unlockedCount === allModules.length;
        const completionPercentage = Math.round((completedModules / allModules.length) * 100);
        return {
            totalModules: allModules.length,
            completedModules,
            unlockedModules: unlockedCount,
            allContentUnlocked,
            completionPercentage
        };
    }
    catch (error) {
        console.error('❌ Error checking learning completion:', error);
        return {
            totalModules: 0,
            completedModules: 0,
            unlockedModules: 0,
            allContentUnlocked: false,
            completionPercentage: 0
        };
    }
}
/**
 * Generate personalized learning recommendations
 */
export async function generateLearningRecommendations(userId, userProgress, allModules) {
    try {
        const recommendations = [];
        const reasons = {};
        // Find modules user is struggling with (low accuracy)
        const strugglingModules = userProgress.filter(p => p.accuracy < 70 && p.status === 'in-progress');
        // Find modules with high accuracy but incomplete
        const readyToAdvance = userProgress.filter(p => p.accuracy >= 80 && p.status === 'in-progress');
        // Find next modules to unlock
        const unlockedModules = await Promise.all(allModules.map(async (module) => ({
            module,
            unlocked: await isModuleUnlocked(module.id, userId, allModules)
        })));
        const availableModules = unlockedModules.filter(({ unlocked }) => unlocked);
        for (const { module } of availableModules) {
            const progress = userProgress.find(p => p.moduleId === module.id);
            const moduleReasons = [];
            if (!progress) {
                // New module
                moduleReasons.push('New content available');
                recommendations.push(module);
            }
            else if (progress.accuracy < 70) {
                // Struggling module
                moduleReasons.push('Needs review - low accuracy');
                recommendations.push(module);
            }
            else if (progress.accuracy >= 80 && progress.status === 'in-progress') {
                // Ready to complete
                moduleReasons.push('Ready to complete - high accuracy');
                recommendations.push(module);
            }
            if (moduleReasons.length > 0) {
                reasons[module.id] = moduleReasons;
            }
        }
        return {
            recommended: recommendations.slice(0, 3), // Top 3 recommendations
            reasons
        };
    }
    catch (error) {
        console.error('❌ Error generating recommendations:', error);
        return {
            recommended: [],
            reasons: {}
        };
    }
}
