export const DIFFICULTY_PROGRESSION = [
    {
        rank: 'ECGKid Intern',
        difficultyMultiplier: 0.7,
        xpMultiplier: 1.0,
        gemMultiplier: 1.0,
        timeLimit: 45,
        allowedMistakes: 3,
        hintAvailable: true,
        complexQuestions: false,
        advancedCases: false,
        description: 'Beginner-friendly with hints and extra time'
    },
    {
        rank: 'ECGKid Resident',
        difficultyMultiplier: 0.85,
        xpMultiplier: 1.1,
        gemMultiplier: 1.1,
        timeLimit: 40,
        allowedMistakes: 3,
        hintAvailable: true,
        complexQuestions: false,
        advancedCases: false,
        description: 'Basic ECG patterns with guided learning'
    },
    {
        rank: 'ECG Cadet',
        difficultyMultiplier: 1.0,
        xpMultiplier: 1.2,
        gemMultiplier: 1.2,
        timeLimit: 35,
        allowedMistakes: 2,
        hintAvailable: true,
        complexQuestions: true,
        advancedCases: false,
        description: 'Standard difficulty with basic clinical scenarios'
    },
    {
        rank: 'Rhythm Specialist',
        difficultyMultiplier: 1.2,
        xpMultiplier: 1.4,
        gemMultiplier: 1.3,
        timeLimit: 30,
        allowedMistakes: 2,
        hintAvailable: false,
        complexQuestions: true,
        advancedCases: true,
        description: 'Advanced patterns with clinical correlation'
    },
    {
        rank: 'Wave Virtuoso',
        difficultyMultiplier: 1.4,
        xpMultiplier: 1.6,
        gemMultiplier: 1.5,
        timeLimit: 25,
        allowedMistakes: 1,
        hintAvailable: false,
        complexQuestions: true,
        advancedCases: true,
        description: 'Expert-level interpretation challenges'
    },
    {
        rank: 'ECG Grandmaster',
        difficultyMultiplier: 1.6,
        xpMultiplier: 1.8,
        gemMultiplier: 1.7,
        timeLimit: 20,
        allowedMistakes: 1,
        hintAvailable: false,
        complexQuestions: true,
        advancedCases: true,
        description: 'Complex arrhythmias and rare conditions'
    },
    {
        rank: 'Cardiac Supreme',
        difficultyMultiplier: 1.8,
        xpMultiplier: 2.0,
        gemMultiplier: 2.0,
        timeLimit: 15,
        allowedMistakes: 0,
        hintAvailable: false,
        complexQuestions: true,
        advancedCases: true,
        description: 'Master-level diagnostic challenges'
    }
];
export class ProgressiveDifficultySystem {
    static getDifficultySettings(rank) {
        return DIFFICULTY_PROGRESSION.find(setting => setting.rank === rank) || DIFFICULTY_PROGRESSION[0];
    }
    static adjustTaskDifficulty(baseTask, rank) {
        const settings = this.getDifficultySettings(rank);
        return {
            ...baseTask,
            points: Math.round(baseTask.points * settings.difficultyMultiplier),
            xp: Math.round((baseTask.xp || baseTask.points) * settings.xpMultiplier),
            gems: Math.round((baseTask.gems || Math.floor(baseTask.points / 10)) * settings.gemMultiplier),
            timeLimit: settings.timeLimit,
            allowedMistakes: settings.allowedMistakes,
            hintsEnabled: settings.hintAvailable,
            difficulty: this.calculateDifficultyLevel(rank),
            metadata: {
                rankSpecific: true,
                originalDifficulty: baseTask.difficulty,
                adjustedFor: rank,
                settings: settings
            }
        };
    }
    static calculateDifficultyLevel(rank) {
        const settings = this.getDifficultySettings(rank);
        if (settings.difficultyMultiplier <= 0.8)
            return 'easy';
        if (settings.difficultyMultiplier <= 1.1)
            return 'medium';
        if (settings.difficultyMultiplier <= 1.5)
            return 'hard';
        return 'expert';
    }
    static getProgressionInsights(currentRank, nextRank) {
        const current = this.getDifficultySettings(currentRank);
        if (!nextRank) {
            return {
                current: current,
                progression: "You've reached the highest rank!",
                benefits: "Maximum XP and gem multipliers achieved",
                challenges: "Ultimate diagnostic precision required"
            };
        }
        const next = this.getDifficultySettings(nextRank);
        return {
            current: current,
            next: next,
            progression: `Advancing to ${nextRank}`,
            benefits: `+${Math.round((next.xpMultiplier - current.xpMultiplier) * 100)}% XP boost, +${Math.round((next.gemMultiplier - current.gemMultiplier) * 100)}% gem bonus`,
            challenges: `${next.timeLimit}s time limit, ${next.allowedMistakes} mistake${next.allowedMistakes !== 1 ? 's' : ''} allowed`
        };
    }
    static getRecommendedStudyPlan(rank) {
        const settings = this.getDifficultySettings(rank);
        const basePlan = [
            "Complete daily ECG challenges",
            "Review fundamental rhythm patterns",
            "Practice with flashcards"
        ];
        if (settings.complexQuestions) {
            basePlan.push("Study complex arrhythmias", "Learn advanced interpretation techniques");
        }
        if (settings.advancedCases) {
            basePlan.push("Analyze clinical case studies", "Practice differential diagnosis");
        }
        if (!settings.hintAvailable) {
            basePlan.push("Develop independent analysis skills", "Master pattern recognition");
        }
        return basePlan;
    }
}
export default ProgressiveDifficultySystem;
