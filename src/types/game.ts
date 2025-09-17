export interface User {
  id: string;
  username: string;
  email?: string;
  xp: number;
  gems: number;
  streak: number;
  streakCount?: number;
  totalPoints?: number;
  lastLoginDate: string;
  rank: Rank;
  
  // Add Firebase profile fields:
  avatar?: string;
  joinDate?: string;
  totalTasksCompleted?: number;
  videosWatched?: number;
  quizzesCompleted?: number;
  flashcardsStudied?: number;
  achievements?: string[];
  badges?: Badge[];
  claimedRewards?: string[];
  lastCompletionDate?: string;
  currentStreak?: number;
  longestStreak?: number;
  
  // Extended profile fields:
  bio?: string;
  location?: string;
  profession?: string;
  specialization?: string;
  phone?: string;
  yearsOfExperience?: string;
  institution?: string;
  goals?: string;
  lastUpdated?: string;
  prefix?: string; // Optional prefix (e.g., Dr., Mr., Ms.)
  
  // New onboarding professional data:
  professionCategory?: 'physician' | 'nursing' | 'student' | 'allied-health';
  professionRole?: string; // Specific role within category
  experienceLevel?: 'beginner' | 'intermediate' | 'advanced';
  onboardingAssessmentScore?: number;
  recommendedModule?: number;
  learningGoals?: string;
  dailyGoal?: string;
  studySchedule?: string;
  onboardingCompleted?: boolean;
  onboardingCompletedDate?: string;
  
  // Learning progress fields:
  totalLearningTime?: number;
  learningStreak?: number;
  lessonsPerfected?: number;
  modulesCompleted?: number;
  hearts?: number;
  learningLevel?: number;
}

export type Rank = 'ECGKid Intern' | 'ECGKid Resident' | 'ECG Cadet' | 'Rhythm Specialist' | 'Wave Virtuoso' | 'ECG Grandmaster' | 'Cardiac Supreme';

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  unlockedAt?: string;
  rank?: Rank;
}

export interface Task {
  id: string;
  type: 'quiz' | 'flashcard' | 'case' | 'rhythm' | 'lead-match';
  title: string;
  question: string;
  options?: string[];
  correctAnswer: string | number;
  points: number;
  difficulty: 'easy' | 'medium' | 'hard';
  imageUrl?: string;
  explanation?: string;
}

export interface DailyTask {
  id: string;
  title: string;
  type: 'quiz' | 'flashcard' | 'case' | 'rhythm' | 'lead-match' | 'video';
  question: string;
  options?: string[];
  correctAnswer?: number | string; // Allow both types
  points: number;
  xp?: number; // XP reward for task completion
  gems?: number; // Gems reward for task completion
  difficulty: 'easy' | 'medium' | 'hard';
  completed: boolean;
  earnedPoints?: number;
  imageUrl?: string;
  ecgImageUrl?: string; // Added for compatibility with Firestore data
  explanation?: string;
  completionMessage?: string; // Custom completion message for task
  
  // YouTube video properties:
  youtubeVideoId?: string;
  youtubeEmbedUrl?: string;
  youtubeWatchUrl?: string;
  youtubeThumbnail?: string;
  videoTitle?: string;
  videoDescription?: string;
  videoDuration?: number;
  watchTimeRequired?: number; // Minimum watch time in seconds
  minimumWatchTime?: number; // Alternative property name
  
  // Task content structure
  content?: any; // For lesson task content
}

export interface GameState {
  user: User | null;
  dailyTasks: DailyTask[];
  completedTasks: number;
  todayDate: string;
  isAuthenticated: boolean;
  isGuestUser: boolean;
  // Learning progress tracking
  learningProgress: Record<string, {
    moduleId: string;
    status: 'locked' | 'available' | 'in-progress' | 'completed' | 'mastered';
    completedLessons: number;
    totalLessons: number;
    lastAccessed?: string;
    averageScore?: number;
    totalTimeSpent?: number;
    streak?: number;
    masteryLevel?: number;
  }>;
  currentLearningModule?: string;
  currentLearningLesson?: string;
  // Heart shop state
  showHeartShop?: boolean;
}

export const RANK_THRESHOLDS: { rank: Rank; xpRequired: number; gemCost: number }[] = [
  { rank: 'ECGKid Intern', xpRequired: 0, gemCost: 0 },
  { rank: 'ECGKid Resident', xpRequired: 500, gemCost: 50 },
  { rank: 'ECG Cadet', xpRequired: 1000, gemCost: 100 },
  { rank: 'Rhythm Specialist', xpRequired: 2500, gemCost: 300 },
  { rank: 'Wave Virtuoso', xpRequired: 5000, gemCost: 800 },
  { rank: 'ECG Grandmaster', xpRequired: 8000, gemCost: 1500 },
  { rank: 'Cardiac Supreme', xpRequired: 12000, gemCost: 3000 },
];