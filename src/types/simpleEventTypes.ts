// Simplified Event Types for New EventHub System
export interface SimpleEventTheme {
  primary: string;
  secondary: string;
  gradient: string;
  borderClass: string;
  textClass: string;
  accentColor: string;
}

export interface SimpleEventRewards {
  daily: { xp: number; gems: number; hearts: number };
  weekly: { xp: number; gems: number; hearts: number };
  completion: { xp: number; gems: number; hearts: number; specialBadge: string };
}

export interface SimpleTask {
  id: string;
  type: 'ecg-quiz' | 'rhythm-recognition' | 'clinical-scenario' | 'flashcard-learning' | 'crisis-simulator';
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'expert';
  estimatedTime: number; // minutes
  ecgImage?: string; // Path to ECG image
  ecgImageAlt?: string; // Alternative ECG image
  rhythmType?: string; // For rhythm recognition tasks
  questions: SimpleQuestion[];
  flashcards?: FlashCard[]; // For flashcard learning tasks
  crisisScenario?: CrisisScenario; // For crisis simulator tasks
  rewards: { xp: number; gems: number };
  completed?: boolean;
  unlocked?: boolean;
  bestScore?: number;
}

export interface FlashCard {
  id: string;
  title: string;
  ecgImage: string;
  frontContent: string;
  backContent: string;
  keyPoints: string[];
  difficulty: 'easy' | 'medium' | 'hard' | 'expert';
}

export interface CrisisScenario {
  id: string;
  title: string;
  patientInfo: {
    age: number;
    gender: string;
    presentation: string;
    vitalSigns: string;
  };
  timeLimit: number; // seconds
  ecgImage: string;
  initialFindings: string[];
  decisions: CrisisDecision[];
  learningObjectives: string[];
}

export interface CrisisDecision {
  id: string;
  phase: number; // Multiple phases in a crisis
  question: string;
  options: CrisisOption[];
  timeAllowed: number; // seconds for this decision
  criticalLevel: 'low' | 'medium' | 'high' | 'critical';
}

export interface CrisisOption {
  id: string;
  text: string;
  isCorrect: boolean;
  immediateConsequence: string;
  points: number;
  feedback: string;
  nextPhase?: number; // Branching scenarios
}

export interface SimpleQuestion {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'expert';
}

export interface SimpleDay {
  id: string;
  dayNumber: number;
  title: string;
  description: string;
  topic: string;
  tasks: SimpleTask[];
  completed?: boolean;
  unlocked?: boolean;
  totalScore?: number;
}

export interface SimpleEvent {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  theme: SimpleEventTheme;
  totalDays: number;
  tasksPerDay: number;
  bannerImage: string;
  badgeIcon: string;
  rewards: SimpleEventRewards;
  unlocked: boolean;
  days: SimpleDay[];
  isCompleted?: boolean;
  userProgress?: SimpleEventProgress;
  // Upcoming event properties
  isUpcoming?: boolean;
  releaseDate?: string;
  previewDescription?: string;
  features?: string[];
}

export interface SimpleEventProgress {
  eventId: string;
  currentDay: number;
  completedDays: string[];
  completedTasks: string[];
  totalScore: number;
  timeSpent: number; // minutes
  lastAccessed: Date;
  isCompleted: boolean;
  completedAt?: Date;
}

export interface SimpleUserProgress {
  userId?: string;
  events: { [eventId: string]: SimpleEventProgress };
  overallStats: {
    totalXP: number;
    totalGems: number;
    totalTimeSpent: number;
    eventsCompleted: number;
    tasksCompleted: number;
    averageScore: number;
    lastActiveDate: Date;
  };
}

// ECG Rhythm Categories for organizing images
export const ECG_RHYTHM_CATEGORIES = {
  NORMAL: 'Normal Rhythms',
  BRADYCARDIA: 'Bradycardia',
  TACHYCARDIA: 'Tachycardia', 
  ATRIAL_FIBRILLATION: 'Atrial Fibrillation',
  ATRIAL_FLUTTER: 'Atrial Flutter',
  VENTRICULAR_TACHYCARDIA: 'Ventricular Tachycardia',
  BUNDLE_BRANCH_BLOCKS: 'Bundle Branch Blocks',
  AV_BLOCKS: 'AV Blocks',
  PVC: 'Premature Ventricular Contractions',
  SVT: 'Supraventricular Tachycardia'
} as const;

// Event themes (keeping the same as before for UI consistency)
export const eventThemes = {
  'shock-wave': {
    primary: '#DC2626',
    secondary: '#FEE2E2', 
    gradient: 'bg-gradient-to-br from-red-600 via-orange-500 to-red-700',
    borderClass: 'border-red-400 hover:border-red-300',
    textClass: 'text-red-600',
    accentColor: '#EF4444'
  },
  'shock-zone-challenge': {
    primary: '#DC2626',
    secondary: '#FEE2E2',
    gradient: 'bg-gradient-to-br from-red-500 via-orange-500 to-red-600',
    borderClass: 'border-red-400 hover:border-red-300',
    textClass: 'text-red-600',
    accentColor: '#EF4444'
  },
  'code-pulse': {
    primary: '#7C2D12',
    secondary: '#FED7AA',
    gradient: 'bg-gradient-to-br from-orange-600 via-red-500 to-orange-700',
    borderClass: 'border-orange-400 hover:border-orange-300',
    textClass: 'text-orange-600',
    accentColor: '#EA580C'
  },
  'lead-master-quest': {
    primary: '#1E40AF',
    secondary: '#DBEAFE',
    gradient: 'bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600',
    borderClass: 'border-blue-400 hover:border-blue-300',
    textClass: 'text-blue-600',
    accentColor: '#3B82F6'
  },
  'rhythm-hunter': {
    primary: '#581C87',
    secondary: '#F3E8FF',
    gradient: 'bg-gradient-to-br from-purple-600 via-violet-500 to-purple-700',
    borderClass: 'border-purple-400 hover:border-purple-300',
    textClass: 'text-purple-600',
    accentColor: '#8B5CF6'
  },
  'pulse-detective': {
    primary: '#0F766E',
    secondary: '#CCFBF1',
    gradient: 'bg-gradient-to-br from-teal-600 via-cyan-500 to-teal-700',
    borderClass: 'border-teal-400 hover:border-teal-300',
    textClass: 'text-teal-600',
    accentColor: '#14B8A6'
  }
};

export type EventThemeKey = keyof typeof eventThemes;
