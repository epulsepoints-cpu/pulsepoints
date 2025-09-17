// ECG Learning Event Types and Themes
export interface EventProgress {
  currentDay: number;
  completedDays: string[];
  completedTasks: string[];
  totalScore: number;
  timeSpent: number;
  attempts: number;
  lastAccessed: Date;
  isCompleted: boolean;
  completedAt?: Date;
}

export interface EventRewards {
  daily: {
    xp: number;
    gems: number;
    hearts: number;
  };
  weekly: {
    xp: number;
    gems: number;
    hearts: number;
  };
  completion: {
    xp: number;
    gems: number;
    hearts: number;
    specialBadge: string;
  };
}

export interface EventTheme {
  primary: string;
  secondary: string;
  gradient: string;
  borderClass: string;
  textClass: string;
  accentColor: string;
}

export interface EventData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  theme: EventTheme;
  totalDays: number;
  tasksPerDay: number;
  bannerImage: string;
  badgeIcon: string;
  rewards: EventRewards;
  unlocked: boolean;
  isCompleted?: boolean;
  days?: DayData[]; // Add days property
}

export interface TaskData {
  id: string;
  type: 'h5p-quiz' | 'ecg-rhythm' | 'image-hotspot' | 'drag-drop' | 'ecg-simulator' | 'interactive-video' | 'video';
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'expert';
  estimatedTime: number; // minutes
  content?: TaskContent;
  data?: any; // For additional task-specific data
  rewards: {
    xp: number;
    gems: number;
    ecgCoins?: number;
  };
  unlocked?: boolean;
  completed?: boolean;
  bestScore?: number;
}

export interface TaskContent {
  // H5P Quiz Content
  quiz?: {
    questions: QuizQuestion[];
    passingScore: number;
    timeLimit?: number;
    educationalVideo?: EducationalVideo;
    referenceImages?: string[];
  };
  
  // ECG Rhythm Strip Content
  ecgRhythm?: {
    stripImage: string;
    stripImageAlt?: string;
    rhythmType: string;
    annotations: ECGAnnotation[];
    questions: QuizQuestion[];
    educationalVideo?: EducationalVideo;
  };
  
  // Image Hotspot Content
  imageHotspot?: {
    image: string;
    imageAlt?: string;
    hotspots: Hotspot[];
    instructions: string;
    educationalVideo?: EducationalVideo;
  };
  
  // Drag & Drop Content
  dragDrop?: {
    items: DragItem[];
    dropZones: DropZone[];
    instructions: string;
    referenceImages?: string[];
    educationalVideo?: EducationalVideo;
  };
  
  // ECG Simulator Content
  simulator?: {
    scenario: string;
    patientInfo: PatientInfo;
    rhythmPattern: string;
    interactiveElements: SimulatorElement[];
    caseImages?: string[];
    educationalVideo?: EducationalVideo;
  };
}

export interface EducationalVideo {
  youtubeUrl: string;
  title: string;
  description: string;
  duration: number;
  thumbnail?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface ECGAnnotation {
  x: number;
  y: number;
  label: string;
  description: string;
}

export interface Hotspot {
  x: number; // percentage
  y: number; // percentage
  radius: number;
  label: string;
  feedback: string;
  isCorrect: boolean;
}

export interface DragItem {
  id: string;
  content: string;
  category: string;
  correctZone: string;
}

export interface DropZone {
  id: string;
  label: string;
  acceptsCategory: string[];
}

export interface PatientInfo {
  age: number;
  gender: 'male' | 'female';
  chiefComplaint: string;
  vitals: {
    hr: number;
    bp: string;
    rr: number;
    spo2: number;
    temp: number;
  };
}

export interface SimulatorElement {
  type: 'caliper' | 'measurement' | 'annotation';
  position: { x: number; y: number };
  data: any;
}

export interface DayData {
  id: string;
  dayNumber: number;
  title: string;
  description: string;
  tasks: TaskData[];
  unlocked: boolean;
  completed: boolean;
  rewards: {
    xp: number;
    gems: number;
    hearts?: number;
  };
}

// ECG Learning Event Themes
export const eventThemes: Record<string, EventTheme> = {
  shockZone: {
    primary: '#ef4444', // red-500
    secondary: '#f97316', // orange-500
    gradient: 'bg-gradient-to-br from-red-500 via-orange-500 to-red-600',
    borderClass: 'border-red-400 hover:border-red-300',
    textClass: 'text-red-600',
    accentColor: '#dc2626' // red-600
  },
  codePulse: {
    primary: '#3b82f6', // blue-500
    secondary: '#06b6d4', // cyan-500
    gradient: 'bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600',
    borderClass: 'border-blue-400 hover:border-blue-300',
    textClass: 'text-blue-600',
    accentColor: '#2563eb' // blue-600
  },
  leadMaster: {
    primary: '#8b5cf6', // violet-500
    secondary: '#6366f1', // indigo-500
    gradient: 'bg-gradient-to-br from-violet-500 via-indigo-500 to-violet-600',
    borderClass: 'border-violet-400 hover:border-violet-300',
    textClass: 'text-violet-600',
    accentColor: '#7c3aed' // violet-600
  },
  rhythmHunter: {
    primary: '#10b981', // emerald-500
    secondary: '#eab308', // yellow-500
    gradient: 'bg-gradient-to-br from-emerald-500 via-yellow-500 to-emerald-600',
    borderClass: 'border-emerald-400 hover:border-emerald-300',
    textClass: 'text-emerald-600',
    accentColor: '#059669' // emerald-600
  }
};

// Task Type Icons
export const taskIcons: Record<string, string> = {
  'h5p-quiz': '❓',
  'ecg-rhythm': '📈',
  'image-hotspot': '🎯',
  'drag-drop': '🧩',
  'ecg-simulator': '⚡'
};

// Difficulty Colors
export const difficultyColors: Record<string, string> = {
  easy: 'text-green-600 bg-green-100',
  medium: 'text-yellow-600 bg-yellow-100',
  hard: 'text-orange-600 bg-orange-100',
  expert: 'text-red-600 bg-red-100'
};
