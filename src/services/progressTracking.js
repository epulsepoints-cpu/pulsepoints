import { doc, updateDoc, getDoc, setDoc, serverTimestamp, collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';
// FIFA Mobile-style rewards calculation
export const calculateEventRewards = (eventId, dayId, score) => {
    const eventRewards = {
        'ecg-core-foundations': { baseXP: 100, baseCoins: 25 },
        'rhythm-hunters': { baseXP: 150, baseCoins: 35 },
        'deadly-patterns': { baseXP: 200, baseCoins: 50 },
        'icu-bosses': { baseXP: 300, baseCoins: 75 }
    };
    const eventReward = eventRewards[eventId] || { baseXP: 100, baseCoins: 25 };
    // Score multiplier (FIFA style)
    const multiplier = score >= 90 ? 2.0 : score >= 80 ? 1.5 : score >= 70 ? 1.2 : 1.0;
    const rewards = {
        xp: Math.floor(eventReward.baseXP * multiplier),
        ecgCoins: Math.floor(eventReward.baseCoins * multiplier),
        badges: [],
        achievements: []
    };
    // Performance badges (FIFA style)
    if (score >= 95) {
        rewards.badges.push('Master Diagnostician');
        rewards.ecgCoins += 50;
    }
    else if (score >= 90) {
        rewards.badges.push('Expert Reader');
        rewards.ecgCoins += 25;
    }
    else if (score >= 80) {
        rewards.badges.push('Skilled Interpreter');
        rewards.ecgCoins += 10;
    }
    return rewards;
};
/**
 * Initialize user progress tracking
 */
export const initializeUserProgress = async (userId) => {
    try {
        const userProgressRef = doc(db, 'userProgress', userId);
        const existingProgress = await getDoc(userProgressRef);
        if (!existingProgress.exists()) {
            const initialProgress = {
                userId,
                currentEvent: 1, // Start with first event
                completedEvents: [],
                eventProgress: {},
                taskScores: {},
                eventStats: {}, // Changed from weeklyStats
                overallStats: {
                    totalXP: 0,
                    totalECGCoins: 0, // Changed from totalGems
                    totalBadges: [],
                    averageScore: 0,
                    totalTimeSpent: 0,
                    streakDays: 0,
                    lastActiveDate: new Date(),
                    eventsCompleted: 0,
                    totalTasksCompleted: 0
                },
                achievements: []
            };
            await setDoc(userProgressRef, {
                ...initialProgress,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp()
            });
            console.log('✅ User progress initialized for FIFA Mobile-style events:', userId);
        }
    }
    catch (error) {
        console.error('❌ Failed to initialize user progress:', error);
    }
};
/**
 * Update task completion and score
 */
export const updateTaskProgress = async (userId, taskId, eventId, dayId, score, timeSpent, completed) => {
    try {
        const userProgressRef = doc(db, 'userProgress', userId);
        const progressDoc = await getDoc(userProgressRef);
        if (!progressDoc.exists()) {
            await initializeUserProgress(userId);
        }
        const currentProgress = progressDoc.data();
        // Update task scores
        const taskProgress = currentProgress.taskScores[taskId] || {
            bestScore: 0,
            attempts: 0,
            timeSpent: 0,
            lastAttempt: new Date(),
            completed: false
        };
        taskProgress.attempts += 1;
        taskProgress.timeSpent += timeSpent;
        taskProgress.lastAttempt = new Date();
        if (score > taskProgress.bestScore) {
            taskProgress.bestScore = score;
        }
        if (completed) {
            taskProgress.completed = true;
        }
        // Update event progress
        const eventProgress = currentProgress.eventProgress[eventId] || {
            currentDay: 1, // Track current unlocked day in FIFA style
            completedDays: [],
            completedTasks: [],
            totalScore: 0,
            timeSpent: 0,
            attempts: 0,
            lastAccessed: new Date(),
            isCompleted: false
        };
        if (completed && !eventProgress.completedTasks.includes(taskId)) {
            eventProgress.completedTasks.push(taskId);
        }
        eventProgress.totalScore += score;
        eventProgress.timeSpent += timeSpent;
        eventProgress.attempts += 1;
        eventProgress.lastAccessed = new Date();
        // Check if day is completed (all 6 tasks in day completed)
        const dayTasksCompleted = eventProgress.completedTasks.filter(t => t.includes(dayId)).length;
        const isCurrentDayComplete = dayTasksCompleted >= 6; // 6 tasks per day (including interactive video)
        if (completed && !eventProgress.completedDays.includes(dayId) && isCurrentDayComplete) {
            eventProgress.completedDays.push(dayId);
            // Unlock next day (FIFA Mobile progression style)
            const currentDayNumber = parseInt(dayId.split('-').pop() || '1');
            const nextDayNumber = currentDayNumber + 1;
            if (nextDayNumber <= 30) { // Max 30 days
                eventProgress.currentDay = Math.max(eventProgress.currentDay, nextDayNumber);
                console.log(`🚀 Day ${nextDayNumber} unlocked for user ${userId} in event ${eventId}`);
            }
        }
        // Update overall stats
        currentProgress.overallStats.totalTimeSpent += timeSpent;
        currentProgress.overallStats.lastActiveDate = new Date();
        await updateDoc(userProgressRef, {
            [`taskScores.${taskId}`]: taskProgress,
            [`eventProgress.${eventId}`]: eventProgress,
            'overallStats.totalTimeSpent': currentProgress.overallStats.totalTimeSpent,
            'overallStats.lastActiveDate': currentProgress.overallStats.lastActiveDate,
            updatedAt: serverTimestamp()
        });
        // Check for achievements
        await checkAndAwardAchievements(userId, currentProgress);
        console.log(`✅ Progress updated for user ${userId}, task ${taskId}: ${score}%`);
    }
    catch (error) {
        console.error('❌ Failed to update task progress:', error);
    }
};
/**
 * Complete an event in FIFA Mobile style
 */
export const completeEvent = async (userId, eventId, totalXP, totalECGCoins, badges) => {
    try {
        const userProgressRef = doc(db, 'userProgress', userId);
        const progressDoc = await getDoc(userProgressRef);
        if (!progressDoc.exists())
            return;
        const currentProgress = progressDoc.data();
        // Mark event as completed
        if (!currentProgress.completedEvents.includes(eventId)) {
            currentProgress.completedEvents.push(eventId);
        }
        // Update event progress
        if (currentProgress.eventProgress[eventId]) {
            currentProgress.eventProgress[eventId].isCompleted = true;
            currentProgress.eventProgress[eventId].completedAt = new Date();
        }
        // Update event stats (FIFA Mobile style)
        currentProgress.eventStats[eventId] = {
            totalXP,
            totalECGCoins,
            badges,
            averageScore: calculateAverageScore(currentProgress, eventId),
            totalTimeSpent: currentProgress.eventProgress[eventId]?.timeSpent || 0,
            completionDate: new Date(),
            daysCompleted: currentProgress.eventProgress[eventId]?.completedDays.length || 0
        };
        // Update overall stats
        currentProgress.overallStats.totalXP += totalXP;
        currentProgress.overallStats.totalECGCoins += totalECGCoins;
        currentProgress.overallStats.totalBadges = [...new Set([...currentProgress.overallStats.totalBadges, ...badges])];
        currentProgress.overallStats.eventsCompleted += 1;
        // Progress to next event (FIFA Mobile style progression)
        currentProgress.currentEvent = Math.min(currentProgress.currentEvent + 1, 4); // Max 4 events
        await updateDoc(userProgressRef, {
            completedEvents: currentProgress.completedEvents,
            [`eventProgress.${eventId}`]: currentProgress.eventProgress[eventId],
            [`eventStats.${eventId}`]: currentProgress.eventStats[eventId],
            'overallStats.totalXP': currentProgress.overallStats.totalXP,
            'overallStats.totalECGCoins': currentProgress.overallStats.totalECGCoins,
            'overallStats.totalBadges': currentProgress.overallStats.totalBadges,
            'overallStats.eventsCompleted': currentProgress.overallStats.eventsCompleted,
            currentEvent: currentProgress.currentEvent,
            updatedAt: serverTimestamp()
        });
        console.log(`✅ FIFA Mobile Event completed: ${eventId}, current event: ${currentProgress.currentEvent}`);
    }
    catch (error) {
        console.error('❌ Failed to complete event:', error);
    }
};
/**
 * Calculate average score for an event
 */
const calculateAverageScore = (progress, eventId) => {
    const eventProgress = progress.eventProgress[eventId];
    if (!eventProgress || eventProgress.completedTasks.length === 0)
        return 0;
    const totalScore = eventProgress.completedTasks.reduce((sum, taskId) => {
        return sum + (progress.taskScores[taskId]?.bestScore || 0);
    }, 0);
    return Math.round(totalScore / eventProgress.completedTasks.length);
};
/**
 * Check and award achievements
 */
const checkAndAwardAchievements = async (userId, progress) => {
    const newAchievements = [];
    // First task completion
    const completedTasks = Object.values(progress.taskScores).filter(task => task.completed).length;
    if (completedTasks === 1 && !hasAchievement(progress, 'first-task')) {
        newAchievements.push({
            id: 'first-task',
            name: 'First Steps',
            description: 'Completed your first ECG learning task',
            unlockedAt: new Date(),
            category: 'completion'
        });
    }
    // Perfect score achievement
    const perfectScores = Object.values(progress.taskScores).filter(task => task.bestScore === 100).length;
    if (perfectScores >= 5 && !hasAchievement(progress, 'perfectionist')) {
        newAchievements.push({
            id: 'perfectionist',
            name: 'Perfectionist',
            description: 'Achieved perfect scores on 5 different tasks',
            unlockedAt: new Date(),
            category: 'score'
        });
    }
    // Speed demon
    const fastCompletions = Object.values(progress.taskScores).filter(task => task.completed && task.timeSpent < 300 // Under 5 minutes
    ).length;
    if (fastCompletions >= 3 && !hasAchievement(progress, 'speed-demon')) {
        newAchievements.push({
            id: 'speed-demon',
            name: 'Speed Demon',
            description: 'Completed 3 tasks in under 5 minutes each',
            unlockedAt: new Date(),
            category: 'speed'
        });
    }
    // Update achievements if any new ones
    if (newAchievements.length > 0) {
        const userProgressRef = doc(db, 'userProgress', userId);
        await updateDoc(userProgressRef, {
            achievements: [...progress.achievements, ...newAchievements],
            updatedAt: serverTimestamp()
        });
        console.log(`🏆 New achievements awarded to ${userId}:`, newAchievements.map(a => a.name));
    }
};
/**
 * Check if user has specific achievement
 */
const hasAchievement = (progress, achievementId) => {
    return progress.achievements.some(achievement => achievement.id === achievementId);
};
/**
 * Get user progress data
 */
export const getUserProgress = async (userId) => {
    try {
        const userProgressRef = doc(db, 'userProgress', userId);
        const progressDoc = await getDoc(userProgressRef);
        if (progressDoc.exists()) {
            return progressDoc.data();
        }
        return null;
    }
    catch (error) {
        console.error('❌ Failed to get user progress:', error);
        return null;
    }
};
/**
 * Get FIFA Mobile-style event leaderboard
 */
export const getEventLeaderboard = async (eventId) => {
    try {
        const progressRef = collection(db, 'userProgress');
        const querySnapshot = await getDocs(progressRef);
        const leaderboard = [];
        querySnapshot.forEach((doc) => {
            const progress = doc.data();
            const eventStats = progress.eventStats[eventId];
            if (eventStats) {
                leaderboard.push({
                    userId: progress.userId,
                    totalXP: eventStats.totalXP,
                    totalECGCoins: eventStats.totalECGCoins,
                    averageScore: eventStats.averageScore,
                    badges: eventStats.badges.length,
                    daysCompleted: eventStats.daysCompleted,
                    completionTime: eventStats.totalTimeSpent,
                    completionDate: eventStats.completionDate
                });
            }
        });
        // Sort by XP descending
        return leaderboard.sort((a, b) => b.totalXP - a.totalXP);
    }
    catch (error) {
        console.error('❌ Failed to get event leaderboard:', error);
        return [];
    }
};
