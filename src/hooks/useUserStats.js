import { useMemo } from 'react';
/**
 * Custom hook that provides consistent user statistics across all components
 * Uses actual Firebase values to prevent display inconsistencies
 */
export const useUserStats = (user) => {
    return useMemo(() => {
        if (!user)
            return null;
        // Ensure we have valid numbers for calculations
        const xp = user.xp || 0;
        const gems = user.gems || 0;
        const streakCount = user.streakCount || 0;
        const totalTasksCompleted = user.totalTasksCompleted || 0;
        // Calculate level based on XP (every 250 XP = 1 level)
        const xpPerLevel = 250;
        const level = Math.floor(xp / xpPerLevel) + 1;
        // Calculate XP progress to next level
        const xpInCurrentLevel = xp % xpPerLevel;
        const xpProgress = (xpInCurrentLevel / xpPerLevel) * 100;
        // Calculate gems progress (for display purposes, every 100 gems = full bar)
        const gemsProgress = Math.min(100, (gems % 100));
        // Calculate rank progress (based on XP)
        const rankThresholds = [
            { rank: 'ECGKid Intern', xpRequired: 0 },
            { rank: 'ECGKid Resident', xpRequired: 500 },
            { rank: 'ECG Cadet', xpRequired: 1000 },
            { rank: 'Rhythm Specialist', xpRequired: 2500 },
            { rank: 'Wave Virtuoso', xpRequired: 5000 },
            { rank: 'ECG Grandmaster', xpRequired: 8000 },
            { rank: 'Cardiac Supreme', xpRequired: 12000 },
        ];
        // Find current rank based on XP
        let currentRank = 'ECGKid Intern';
        let currentRankIndex = 0;
        for (let i = rankThresholds.length - 1; i >= 0; i--) {
            if (xp >= rankThresholds[i].xpRequired) {
                currentRank = rankThresholds[i].rank;
                currentRankIndex = i;
                break;
            }
        }
        // Calculate rank progress
        const nextRankIndex = Math.min(currentRankIndex + 1, rankThresholds.length - 1);
        const currentRankXp = rankThresholds[currentRankIndex].xpRequired;
        const nextRankXp = rankThresholds[nextRankIndex].xpRequired;
        const rankProgress = currentRankIndex === rankThresholds.length - 1
            ? 100
            : ((xp - currentRankXp) / (nextRankXp - currentRankXp)) * 100;
        return {
            id: user.id,
            name: user.username || user.email || 'ECG Learner',
            level,
            xp,
            xpToNextLevel: xpPerLevel,
            xpProgress,
            gems,
            gemsProgress,
            rank: user.rank || currentRank,
            rankProgress: Math.max(0, Math.min(100, rankProgress)),
            currentStreak: streakCount,
            longestStreak: Math.max(streakCount, user.longestStreak || 0),
            hearts: user.hearts || 5,
            totalTasksCompleted,
            // Additional computed values
            nextLevelXpRequired: xpPerLevel - xpInCurrentLevel,
            progressToNextLevel: xpProgress,
        };
    }, [user]);
};
export default useUserStats;
