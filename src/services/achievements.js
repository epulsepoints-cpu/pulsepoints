import { db } from '@/firebase';
import { doc, getDoc, setDoc, updateDoc, collection, addDoc } from 'firebase/firestore';
// Check and unlock achievements based on user progress
export const checkAchievements = async (userId, user) => {
    const achievements = [
        {
            id: 'first_steps',
            title: 'First Steps',
            description: 'Complete your first task',
            type: 'tasks',
            requirement: 1,
            reward: { xp: 10, gems: 5 },
            unlocked: (user.totalTasksCompleted || 0) >= 1
        },
        {
            id: 'xp_collector',
            title: 'XP Collector',
            description: 'Earn 100 XP',
            type: 'xp',
            requirement: 100,
            reward: { gems: 10 },
            unlocked: user.xp >= 100
        },
        {
            id: 'streak_warrior',
            title: 'Streak Warrior',
            description: 'Maintain a 7-day streak',
            type: 'streak',
            requirement: 7,
            reward: { xp: 50, gems: 20 },
            unlocked: (user.streakCount || 0) >= 7
        },
        {
            id: 'video_enthusiast',
            title: 'Video Enthusiast',
            description: 'Watch 10 educational videos',
            type: 'video',
            requirement: 10,
            reward: { gems: 15 },
            unlocked: (user.videosWatched || 0) >= 10
        },
        {
            id: 'quiz_master',
            title: 'Quiz Master',
            description: 'Complete 25 quiz questions',
            type: 'quiz',
            requirement: 25,
            reward: { xp: 100, gems: 25 },
            unlocked: (user.quizzesCompleted || 0) >= 25
        },
        {
            id: 'flashcard_scholar',
            title: 'Flashcard Scholar',
            description: 'Study 50 flashcards',
            type: 'flashcard',
            requirement: 50,
            reward: { gems: 20 },
            unlocked: (user.flashcardsStudied || 0) >= 50
        },
        {
            id: 'intern_ecg_reader_rank',
            title: 'Rhythm Specialist Achievement',
            description: 'Reach Rhythm Specialist rank',
            type: 'xp',
            requirement: 100,
            reward: { gems: 50 },
            unlocked: user.xp >= 100
        },
        {
            id: 'cardiologist_rank',
            title: 'Cardiologist Achievement',
            description: 'Reach Cardiologist rank',
            type: 'xp',
            requirement: 500,
            reward: { gems: 100 },
            unlocked: user.xp >= 500
        },
        {
            id: 'ecg_wizard',
            title: 'Cardiac Supreme',
            description: 'Reach Cardiac Supreme rank',
            type: 'xp',
            requirement: 1000,
            reward: { gems: 200 },
            unlocked: user.xp >= 1000
        }
    ];
    // Get previously unlocked achievements
    try {
        const userProgressRef = doc(db, 'userProgress', userId);
        const userProgressDoc = await getDoc(userProgressRef);
        let previousAchievements = [];
        if (userProgressDoc.exists()) {
            previousAchievements = userProgressDoc.data().achievements || [];
        }
        // Check for newly unlocked achievements
        const newlyUnlocked = [];
        const updatedAchievements = achievements.map(achievement => {
            const previouslyUnlocked = previousAchievements.find(prev => prev.id === achievement.id);
            if (achievement.unlocked && !previouslyUnlocked?.unlocked) {
                // Newly unlocked achievement
                newlyUnlocked.push({
                    ...achievement,
                    unlockedAt: new Date().toISOString()
                });
                return {
                    ...achievement,
                    unlockedAt: new Date().toISOString()
                };
            }
            return {
                ...achievement,
                unlockedAt: previouslyUnlocked?.unlockedAt
            };
        });
        // Update user progress in Firestore
        await setDoc(userProgressRef, {
            userId,
            totalTasksCompleted: user.totalTasksCompleted || 0,
            quizzesCompleted: user.quizzesCompleted || 0,
            videosWatched: user.videosWatched || 0,
            flashcardsStudied: user.flashcardsStudied || 0,
            currentStreak: user.streakCount || 0,
            longestStreak: user.longestStreak || 0,
            achievements: updatedAchievements,
            lastUpdated: new Date().toISOString()
        }, { merge: true });
        // Award rewards for newly unlocked achievements
        if (newlyUnlocked.length > 0) {
            await awardAchievementRewards(userId, newlyUnlocked);
        }
        return updatedAchievements;
    }
    catch (error) {
        console.error('Error checking achievements:', error);
        return achievements;
    }
};
// Award rewards for unlocked achievements
const awardAchievementRewards = async (userId, achievements) => {
    try {
        const userRef = doc(db, 'users', userId);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
            const userData = userDoc.data();
            let totalXpReward = 0;
            let totalGemReward = 0;
            achievements.forEach(achievement => {
                if (achievement.reward.xp)
                    totalXpReward += achievement.reward.xp;
                if (achievement.reward.gems)
                    totalGemReward += achievement.reward.gems;
            });
            if (totalXpReward > 0 || totalGemReward > 0) {
                await updateDoc(userRef, {
                    xp: (userData.xp || 0) + totalXpReward,
                    gems: (userData.gems || 0) + totalGemReward,
                    lastUpdated: new Date().toISOString()
                });
            }
        }
    }
    catch (error) {
        console.error('Error awarding achievement rewards:', error);
    }
};
// Get user progress
export const getUserProgress = async (userId) => {
    try {
        const userProgressRef = doc(db, 'userProgress', userId);
        const userProgressDoc = await getDoc(userProgressRef);
        if (userProgressDoc.exists()) {
            return userProgressDoc.data();
        }
        return null;
    }
    catch (error) {
        console.error('Error getting user progress:', error);
        return null;
    }
};
// Update user activity
export const updateUserActivity = async (userId, activity) => {
    try {
        const activityRef = collection(db, 'userActivity');
        await addDoc(activityRef, {
            userId,
            ...activity,
            timestamp: new Date().toISOString(),
            date: new Date().toDateString()
        });
    }
    catch (error) {
        console.error('Error updating user activity:', error);
    }
};
// Get user activity log
export const getUserActivity = async (userId, limit = 10) => {
    try {
        // This would need to be implemented with proper query
        // For now, return empty array
        return [];
    }
    catch (error) {
        console.error('Error getting user activity:', error);
        return [];
    }
};
