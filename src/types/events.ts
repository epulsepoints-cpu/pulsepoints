// Types for the Weekly Event System

export interface WeeklyEvent {
  id: string;
  title: string;
  description: string;
  theme: 'shock-zone' | 'pulse-racer' | 'code-blue-rush' | 'stemi-gauntlet';
  startDate: Date;
  endDate: Date;
  status: 'upcoming' | 'active' | 'expired';
  imageUrl?: string;
  backgroundGradient: string;
  iconColor: string;
  days: EventDay[];
  minDaysRequired: number; // Minimum days to unlock boss challenge
  participants: number;
  totalRewards: {
    xp: number;
    gems: number;
    badges: string[];
  };
}

export interface EventDay {
  id: string;
  eventId: string;
  dayNumber: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  title: string;
  description: string;
  type: EventTaskType;
  isUnlocked: boolean;
  isCompleted: boolean;
  isBossChallenge?: boolean;
  tasks: EventTask[];
  rewards: {
    xp: number;
    gems: number;
    badges?: string[];
  };
  timeLimit?: number; // in minutes, for timed challenges
  completedAt?: Date;
}

export type EventTaskType = 
  | 'intro-lesson'
  | 'mini-quiz' 
  | 'ecg-case'
  | 'drag-drop-puzzle'
  | 'time-challenge'
  | 'visual-sorting'
  | 'scenario-choice'
  | 'flashcards'
  | 'annotation-task'
  | 'boss-challenge'
  | 'quiz'
  | 'image_analysis'
  | 'video'
  | 'practical'
  | 'ecg_simulator'
  | 'h5p_interactive'
  | 'interactive_video'
  | 'clinical_scenario'
  | 'case_study'
  | 'scenario_based';

export interface EventTask {
  id: string;
  dayId: string;
  type: EventTaskType;
  title: string;
  description: string;
  content: TaskContent;
  difficulty: 'easy' | 'medium' | 'hard';
  timeLimit?: number;
  points: number;
  completed: boolean;
  userAnswer?: any;
  isCorrect?: boolean;
  completedAt?: Date;
}

export type TaskContent = 
  | IntroLessonContent
  | MiniQuizContent
  | ECGCaseContent
  | DragDropContent
  | TimeChallengeContent
  | VisualSortingContent
  | ScenarioChoiceContent
  | FlashcardsContent
  | AnnotationTaskContent
  | BossChallengeContent
  | QuizContent
  | ImageAnalysisContent
  | VideoContent
  | PracticalContent
  | ECGSimulatorContent
  | H5PInteractiveContent
  | InteractiveVideoContent
  | ClinicalScenarioContent
  | CaseStudyContent;

export interface IntroLessonContent {
  type: 'intro-lesson';
  text: string;
  imageUrl?: string;
  videoUrl?: string;
  keyPoints: string[];
}

export interface MiniQuizContent {
  type: 'mini-quiz';
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  imageUrl?: string;
}

export interface ECGCaseContent {
  type: 'ecg-case';
  patientInfo: {
    age: number;
    gender: 'male' | 'female';
    symptoms: string[];
    history: string;
  };
  ecgImageUrl: string;
  questions: QuizQuestion[];
  diagnosis: string;
  explanation: string;
}

export interface DragDropContent {
  type: 'drag-drop-puzzle';
  title: string;
  description: string;
  items: DragDropItem[];
  dropZones: DropZone[];
  correctMappings: Record<string, string>; // itemId -> dropZoneId
}

export interface DragDropItem {
  id: string;
  content: string;
  imageUrl?: string;
  category: string;
}

export interface DropZone {
  id: string;
  label: string;
  category: string;
  acceptsCategory: string;
}

export interface TimeChallengeContent {
  type: 'time-challenge';
  timeLimit: number; // in seconds
  questions: QuizQuestion[];
  passingScore: number; // percentage
}

export interface VisualSortingContent {
  type: 'visual-sorting';
  title: string;
  description: string;
  criteria: 'heart-rate' | 'waveform' | 'rhythm' | 'amplitude';
  ecgStrips: ECGStrip[];
}

export interface ECGStrip {
  id: string;
  imageUrl: string;
  value: number; // for sorting
  label: string;
  description: string;
}

export interface ScenarioChoiceContent {
  type: 'scenario-choice';
  scenario: {
    title: string;
    description: string;
    setting: string;
    patientInfo: string;
    imageUrl?: string;
  };
  choices: ScenarioChoice[];
  consequences: Record<string, string>; // choiceId -> consequence
}

export interface ScenarioChoice {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation: string;
  nextScenario?: string;
}

export interface FlashcardsContent {
  type: 'flashcards';
  cards: FlashCard[];
  studyMode: 'recognition' | 'recall' | 'mixed';
}

export interface FlashCard {
  id: string;
  front: string;
  back: string;
  imageUrl?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

export interface AnnotationTaskContent {
  type: 'annotation-task';
  ecgImageUrl: string;
  instructions: string;
  annotationPoints: AnnotationPoint[];
  tools: AnnotationTool[];
}

export interface AnnotationPoint {
  id: string;
  x: number;
  y: number;
  type: 'wave' | 'interval' | 'abnormality';
  label: string;
  required: boolean;
}

export interface AnnotationTool {
  id: string;
  type: 'point' | 'line' | 'circle' | 'arrow';
  label: string;
  color: string;
}

export interface BossChallengeContent {
  type: 'boss-challenge';
  title: string;
  description: string;
  phases: BossPhase[];
  finalRewards: {
    xp: number;
    gems: number;
    specialBadge: string;
    unlocks: string[];
  };
}

export interface BossPhase {
  id: string;
  title: string;
  description: string;
  type: EventTaskType;
  content: TaskContent;
  passingScore: number;
  timeLimit?: number;
}

// User Progress Types
export interface UserEventProgress {
  userId: string;
  eventId: string;
  daysCompleted: number[];
  totalXpEarned: number;
  totalGemsEarned: number;
  badgesEarned: string[];
  startedAt: Date;
  lastActivityAt: Date;
  isEligibleForBoss: boolean;
  bossCompleted: boolean;
  bossCompletedAt?: Date;
  dailyProgress: Record<number, DayProgress>; // day number -> progress
}

export interface DayProgress {
  dayNumber: number;
  isUnlocked: boolean;
  isCompleted: boolean;
  completedAt?: Date;
  tasksCompleted: number;
  totalTasks: number;
  xpEarned: number;
  gemsEarned: number;
  timeSpent: number; // in minutes
  accuracy: number; // percentage
}

// Event Configuration Types
export interface EventConfig {
  eventRotation: WeeklyEventTemplate[];
  globalSettings: {
    eventDuration: number; // days
    minDaysForBoss: number;
    baseRewards: {
      dailyXp: number;
      dailyGems: number;
      bossXp: number;
      bossGems: number;
    };
    timezoneOffset: number;
  };
}

export interface WeeklyEventTemplate {
  id: string;
  title: string;
  description: string;
  theme: WeeklyEvent['theme'];
  backgroundGradient: string;
  iconColor: string;
  dayTemplates: EventDayTemplate[];
}

export interface EventDayTemplate {
  dayNumber: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  title: string;
  description: string;
  type: EventTaskType;
  isBossChallenge?: boolean;
  taskTemplates: EventTaskTemplate[];
  baseRewards: {
    xp: number;
    gems: number;
  };
}

export interface EventTaskTemplate {
  type: EventTaskType;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
  timeLimit?: number;
  contentTemplate: any; // Flexible for different task types
}

// Enhanced Content Types for Interactive Learning

export interface QuizContent {
  type: 'quiz';
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  imageUrl?: string;
}

export interface ImageAnalysisContent {
  type: 'image_analysis';
  imageUrl: string;
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
  annotations?: Array<{
    x: number;
    y: number;
    label: string;
  }>;
}

export interface VideoContent {
  type: 'video';
  videoUrl: string;
  title: string;
  duration: number;
  transcript?: string;
  keyPoints?: string[];
}

export interface PracticalContent {
  type: 'practical';
  scenario: string;
  steps: string[];
  timeLimit?: number;
  requiredTools?: string[];
  safetyNotes?: string[];
}

export interface ECGSimulatorContent {
  type: 'ecg_simulator';
  simulatorType: 'rhythm_analysis' | 'measurement' | 'interpretation';
  ecgStrips: string[]; // URLs to ECG images/SVGs
  interactiveFeatures: Array<'caliper_tool' | 'rate_calculator' | 'axis_measurement' | 'interval_measurement'>;
  realTimeWaveform?: boolean;
  skillAssessment: boolean;
  targetRhythm?: string;
  learningObjectives: string[];
  hints?: string[];
}

export interface H5PInteractiveContent {
  type: 'h5p_interactive';
  h5pUrl: string;
  contentType: 'interactive_video' | 'drag_drop' | 'timeline' | 'image_hotspots' | 'course_presentation';
  completionTracking: boolean;
  scoreRequired: number;
  estimatedTime: number; // in minutes
  learningObjectives: string[];
}

export interface InteractiveVideoContent {
  type: 'interactive_video';
  videoUrl: string;
  title: string;
  duration: number;
  interactions: Array<{
    timestamp: number;
    type: 'quiz' | 'hotspot' | 'pause' | 'branch';
    question?: string;
    options?: string[];
    correct?: number;
    description?: string;
    hotspotArea?: { x: number; y: number; width: number; height: number };
    branchTo?: string;
  }>;
  branches?: boolean;
  completionRequirement: 'watch_all' | 'all_interactions' | 'score_threshold';
  minimumScore?: number;
}

export interface ClinicalScenarioContent {
  type: 'clinical_scenario';
  scenario: string;
  patientInfo: {
    age: number;
    gender: 'male' | 'female' | 'other';
    chiefComplaint: string;
    vitals: {
      hr: number;
      bp: string;
      rr: number;
      spo2: number;
      temp: number;
    };
  };
  ecgStrip?: string;
  labValues?: Record<string, string>;
  decisionTree: {
    question: string;
    options: Array<{
      text: string;
      outcome: 'correct' | 'partial' | 'incorrect';
      points: number;
      feedback: string;
      nextStep?: string;
    }>;
  };
  timeLimit: number; // in seconds
  scoreTracking: boolean;
  learningPoints: string[];
}

export interface CaseStudyContent {
  type: 'case_study';
  caseTitle: string;
  patientPresentation: string;
  history: string;
  physicalExam: string;
  diagnosticTests: Array<{
    test: string;
    result: string;
    imageUrl?: string;
  }>;
  questions: Array<{
    question: string;
    type: 'multiple_choice' | 'short_answer' | 'drag_drop';
    options?: string[];
    correctAnswer: string | number;
    explanation: string;
    points: number;
  }>;
  estimatedTime: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}
