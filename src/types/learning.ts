// Learning Module Types
export type ModuleCategory = 'fundamentals' | 'arrhythmias' | 'ischemia' | 'conduction' | 'advanced';
export type ModuleDifficulty = 'beginner' | 'intermediate' | 'advanced';
export type LearningTaskType = 'video' | 'quiz' | 'flashcard' | 'case-study' | 'interpretation' | 'practice' | 'final-assessment';

export interface LearningModule {
  featured: any;
  id: string;
  title: string;
  description: string;
  category: ModuleCategory;
  difficulty: ModuleDifficulty;
  estimatedTime: number; // in minutes
  prerequisites: string[]; // module IDs that must be completed first
  lessons: Lesson[];
  unlocked: boolean;
  order: number; // for sorting modules
  imageUrl?: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  description: string;
  order: number;
  estimatedTime: number; // in minutes
  content: LessonContent;
  tasks: LearningTask[];
  completed: boolean;
  score?: number;
  completedAt?: string;
  attempts: number;
  createdAt: string;
  updatedAt: string;
}

export interface LessonContent {
  type: 'text' | 'video' | 'interactive' | 'mixed';
  introduction: string;
  sections: ContentSection[];
  slides?: Slide[]; // Google Primer style slides
  summary: string;
  keyPoints: string[];
  resources: ResourceLink[];
}

export interface ContentSection {
  id: string;
  title: string;
  content: string;
  mediaUrl?: string;
  mediaType?: 'image' | 'video' | 'audio';
  interactive?: InteractiveElement;
  slides?: Slide[]; // Section-specific slides
}

// Google Primer style slide interface
export interface Slide {
  id?: string;
  title: string;
  content?: string | string[]; // Allow both string and string array for content
  type: 'text' | 'image' | 'diagram' | 'comparison' | 'steps' | 'highlight' | 'question' | 'quiz' | 'audio' | 'video' | 'youtube' | 'flashcard' | 'accordion' | 'tabs';
  layout?: 'full' | 'split' | 'centered' | 'sidebar';
  backgroundColor?: string;
  textColor?: string;
  imageUrl?: string;
  imageAlt?: string; // Alt text for accessibility and image description
  highlights?: string[]; // Text to highlight
  bullets?: string[]; // Bullet points
  diagram?: DiagramData;
  comparison?: ComparisonData;
  steps?: StepData[] | string[]; // Allow both detailed and simple step arrays
  animation?: 'fade' | 'slide' | 'zoom' | 'none';
  
  // Enhanced audio support for slides
  audio?: {
    narrationUrl?: string; // Audio narration for this slide
    backgroundMusicUrl?: string; // Background music
    duration?: number; // Audio duration in seconds
    autoPlay?: boolean; // Auto-start when slide loads
    transcript?: string; // Text transcript for accessibility
  };
  
  // Audio/Video content URLs for media slides
  audioUrl?: string; // Direct audio file URL for audio slides
  videoUrl?: string; // Direct video file URL for video slides
  youtubeId?: string; // YouTube video ID for youtube slides
  
  // YouTube-specific properties for enhanced player
  videoDuration?: number; // Video duration in seconds
  minimumWatchTime?: number; // Minimum watch time required in seconds
  requireFullWatch?: boolean; // Whether user must watch the entire video
  
  // Additional properties for educational slides
  hint?: string; // Educational hint for the slide
  question?: string; // Question for interactive slides
  options?: string[]; // Multiple choice options
  correctAnswer?: number; // Index of correct answer
  explanation?: string; // Explanation for the answer
  
  // Comparison slide data
  leftTitle?: string;
  rightTitle?: string;
  leftContent?: string[];
  rightContent?: string[];
  
  // NEW: Interactive slide types
  // Flashcard properties (legacy - for backwards compatibility)
  icon?: string; // Emoji or icon for flashcard
  flashcardFront?: string; // Front of flashcard (question/term)
  flashcardBack?: string; // Back of flashcard (answer/definition)
  
  // Enhanced flashcard structure (new - preferred)
  flashcard?: {
    icon: string; // Emoji or icon for the flashcard
    question: string; // The question or term to learn
    answer: string; // The answer or definition
    category?: 'concept' | 'terminology' | 'anatomy' | 'physiology' | 'clinical' | 'procedure';
    difficulty?: 'beginner' | 'intermediate' | 'advanced';
    imageUrl?: string; // Optional image for visual learning
    tags?: string[]; // Tags for filtering and organization
  };
  
  // Accordion properties
  accordionItems?: Array<{
    title: string;
    content: string;
    icon?: string;
  }>;
  
  // Tabs properties
  tabs?: Array<{
    title: string;
    content: string;
    icon?: string;
  }>;
}

export interface DiagramData {
  type: 'flowchart' | 'anatomy' | 'waveform' | 'timeline';
  elements: DiagramElement[];
}

export interface DiagramElement {
  id: string;
  type: 'box' | 'arrow' | 'circle' | 'label';
  x: number;
  y: number;
  width?: number;
  height?: number;
  text?: string;
  color?: string;
}

export interface ComparisonData {
  leftTitle: string;
  rightTitle: string;
  leftItems: string[];
  rightItems: string[];
}

export interface StepData {
  number: number;
  title: string;
  description: string;
  icon?: string;
}

export interface InteractiveElement {
  type: 'quiz' | 'drag-drop' | 'annotation' | 'simulation';
  data: any; // specific to each interactive type
}

export interface ResourceLink {
  title: string;
  url: string;
  type: 'article' | 'video' | 'tool' | 'reference';
  description?: string;
}

// Enhanced Audio Support for Tasks - Optimized Interactive Learning
export interface TaskAudio {
  // OPTIMIZED: Single main narration with interactive questions
  mainNarration?: {
    audioUrl: string;
    duration: number;
    transcript: string;
    interactiveQuestions?: InteractiveAudioQuestion[];
  };
  
  // OPTIMIZED: Single pronunciation guide covering all terms
  pronunciationGuide?: {
    audioUrl: string;
    duration: number;
    terms: { term: string; timestamp: number }[];
  };
  
  // OPTIMIZED: Task-specific interactive audio (case studies, listening exercises)
  conductionSequence?: {
    audioUrl: string;
    duration: number;
    transcript: string;
    listeningTask?: {
      instruction: string;
      questions: AudioTimestampQuestion[];
    };
  };
  
  caseStudyNarration?: {
    audioUrl: string;
    duration: number;
    transcript: string;
    analyticalQuestions?: AudioTimestampQuestion[];
  };
  
  ecgCorrelationLesson?: {
    audioUrl: string;
    duration: number;
    transcript: string;
    waveformQuiz?: {
      instruction: string;
      questions: AudioWaveformQuestion[];
    };
  };
  
  clinicalScenario?: {
    audioUrl: string;
    duration: number;
    transcript: string;
    realTimeDecisions?: ClinicalDecisionPoint[];
  };
}

export interface InteractiveAudioQuestion {
  timestamp: number; // When to pause and ask question
  question: string;
  options: string[];
  correctAnswer: number;
  feedback: string;
}

export interface AudioTimestampQuestion {
  timestamp?: number;
  question: string;
  options: string[];
  correctAnswer: number;
  feedback?: string;
  audioTimestamp?: number; // Which part of audio this refers to
}

export interface AudioWaveformQuestion {
  audioTimestamp: number;
  question: string;
  options: string[];
  correctAnswer: number;
  audioHint: string; // What to listen for in the audio
}

export interface ClinicalDecisionPoint {
  timestamp: number;
  urgencyLevel: 'low' | 'medium' | 'high' | 'critical';
  question: string;
  options: string[];
  correctAnswer: number;
  clinicalReasoning: string;
}

// Enhanced Image Support for Tasks
export interface TaskImages {
  mainImage?: string; // Primary task image
  slideImages?: SlideImage[]; // Unique image for each slide
  supplementaryImages?: string[]; // Additional supporting images
  diagramImages?: string[]; // Interactive diagram images
}

export interface SlideImage {
  slideId: string;
  imageUrl: string;
  imageAlt: string;
  caption?: string;
  interactive?: boolean; // Can user interact with this image?
}

export interface LearningTask {
  id: string;
  type: 'quiz' | 'video' | 'flashcard' | 'case-study' | 'interpretation' | 'final-assessment';
  points?: number; // Legacy support
  xp: number; // XP reward for completing task
  gems?: number; // Gems reward for completing task (optional - used for daily tasks, not lessons)
  
  // YouTube Video Integration
  youtubeVideoId?: string; // YouTube video ID (e.g., "FF9Wj_tywhg")
  youtubeEmbedUrl?: string; // Full embed URL
  youtubeWatchUrl?: string; // Full watch URL  
  youtubeThumbnail?: string; // Thumbnail image URL
  videoDuration?: number; // Duration in seconds
  videoTitle?: string; // Video title
  videoDescription?: string; // Video description
  
  // Enhanced audio support for each task
  audio?: TaskAudio;
  // Unique images per task
  images?: TaskImages;
  // Video watch time requirements
  watchTimeRequired?: number; // Custom minimum watch time in seconds
  minimumWatchTime?: number; // Alternative property name for same purpose
  content: {
    // Quiz
    question?: string;
    options?: string[];
    correctAnswer?: number | string;
    explanation?: string;
    hint?: string;
    description?: string;
    imageUrl?: string;
    completionMessage?: string; // Success message
    retryMessage?: string; // Retry/failure message
    celebrationAnimation?: string; // Animation type for completion

    // Video
    title?: string;
    videoUrl?: string;
    videoTitle?: string;
    videoDescription?: string;
    videoDuration?: number;
    minimumWatchTime?: number; // Minimum seconds user must watch
    required?: boolean; // Whether watching is required to proceed
    completionRequirement?: string; // Description of what's needed to complete

    // Flashcard
    front?: string;
    back?: string;

    // Case Study
    patientInfo?: {
      title?: string;
      age?: number;
      gender?: string;
      symptoms?: string;
      history?: string;
    };

    // Interpretation
    instructions?: string;

    // Final Assessment
    prerequisiteTask?: string; // Task ID that must be completed first
    prerequisiteMessage?: string; // Message shown if prerequisite not met
    preparatoryVideo?: {
      youtubeUrl: string;
      videoTitle: string;
      videoDescription: string;
      videoDuration: number;
      minimumWatchTime?: number; // Minimum seconds user must watch
      required?: boolean; // Whether watching is required to proceed
    };
    questions?: FinalAssessmentQuestion[];
    passingScore?: number;
    timeLimit?: number; // in minutes
    completionCelebration?: {
      animation: string;
      confetti?: boolean;
      sounds?: boolean;
      duration?: number; // milliseconds
    };
  };
}

// Final Assessment Question Types
export interface FinalAssessmentQuestion {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'drag-drop' | 'image-analysis' | 'case-scenario';
  question: string;
  points?: number; // Legacy support
  xp?: number; // XP reward for correct answer
  options?: string[];
  correctAnswer: number | string | string[];
  explanation: string;
  hint?: string;
  imageUrl?: string;
  imageAlt?: string;
  
  // For drag-drop questions
  draggableItems?: string[];
  dropZones?: string[];
  
  // For case scenarios
  clinicalScenario?: {
    patientAge: number;
    patientGender: string;
    symptoms: string;
    history?: string;
    ecgDescription?: string;
  };
}

export interface ModuleProgress {
  moduleId: string;
  userId: string;
  status: 'not-started' | 'in-progress' | 'completed' | 'mastered';
  completedLessons: number;
  totalLessons: number;
  completedTasks: number;
  totalTasks: number;
  totalPoints: number;
  earnedPoints: number;
  averageScore: number;
  timeSpent: number; // in minutes
  startedAt?: string;
  completedAt?: string;
  lastAccessedAt: string;
  currentLessonId?: string;
  
  // Performance metrics
  correctAnswers: number;
  totalAnswers: number;
  accuracy: number;
  streak: number;
  longestStreak: number;
  
  // Spaced repetition
  nextReviewDate?: string;
  reviewCount: number;
  masteryLevel: number; // 0-100
}

export interface UserLearningProfile {
  userId: string;
  currentModuleId?: string;
  currentLessonId?: string;
  learningPath: string[]; // ordered list of module IDs
  completedModules: string[];
  unlockedModules: string[];
  totalModulesCompleted: number;
  totalLessonsCompleted: number;
  totalTasksCompleted: number;
  totalTimeSpent: number;
  totalPointsEarned: number;
  averageAccuracy: number;
  learningStreak: number;
  longestLearningStreak: number;
  
  // Preferences
  preferredDifficulty: ModuleDifficulty;
  learningGoals: string[];
  studySchedule: StudySchedule;
  
  // Analytics
  strengthAreas: string[];
  weaknessAreas: string[];
  recommendedModules: string[];
  
  lastUpdated: string;
}

export interface StudySchedule {
  daysPerWeek: number;
  minutesPerDay: number;
  preferredTimeSlots: string[];
  reminderEnabled: boolean;
  reminderTime: string;
}

export interface LearningAnalytics {
  userId: string;
  moduleId: string;
  date: string;
  
  // Session data
  sessionDuration: number;
  tasksCompleted: number;
  tasksCorrect: number;
  pointsEarned: number;
  
  // Performance
  accuracy: number;
  speed: number; // tasks per minute
  difficulty: ModuleDifficulty;
  
  // Engagement
  videosWatched: number;
  notesCreated: number;
  resourcesAccessed: number;
  
  createdAt: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  type: 'module' | 'streak' | 'accuracy' | 'speed' | 'completion' | 'special';
  category: ModuleCategory | 'general';
  criteria: AchievementCriteria;
  reward: AchievementReward;
  unlocked: boolean;
  unlockedAt?: string;
  progress: number; // 0-100
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

export interface AchievementCriteria {
  type: 'complete_module' | 'maintain_streak' | 'accuracy_threshold' | 'speed_threshold' | 'total_points';
  value: number;
  moduleId?: string;
  category?: ModuleCategory;
}

export interface AchievementReward {
  type: 'xp' | 'gems' | 'badge' | 'unlock';
  value: number;
  description: string;
}

// Extended GameState to include learning modules
export interface ExtendedGameState {
  // Existing game state properties
  user: any;
  dailyTasks: any[];
  completedTasks: number;
  todayDate: string;
  isAuthenticated: boolean;
  isGuestUser: boolean;
  
  // New learning module properties
  currentModule?: LearningModule;
  availableModules: LearningModule[];
  userLearningProfile?: UserLearningProfile;
  learningProgress: Record<string, ModuleProgress>;
  isLearningMode: boolean;
  
  // Learning-specific daily tasks
  adaptiveTasks: LearningTask[];
  recommendedModule?: LearningModule;
}

// API Response types
export interface ModuleListResponse {
  modules: LearningModule[];
  total: number;
  page: number;
  limit: number;
}

export interface LearningProgressResponse {
  progress: ModuleProgress[];
  analytics: LearningAnalytics[];
  achievements: Achievement[];
  recommendations: string[];
}

export interface TaskCompletionRequest {
  taskId: string;
  lessonId: string;
  moduleId: string;
  isCorrect: boolean;
  timeSpent: number;
  answer: string | number;
}

export interface TaskCompletionResponse {
  success: boolean;
  pointsEarned: number;
  newAchievements: Achievement[];
  progressUpdate: ModuleProgress;
  nextRecommendation?: string;
}

// Lesson Completion & Social Sharing Types
export interface LessonCompletionData {
  lessonId: string;
  lessonTitle: string;
  moduleTitle: string;
  finalScore: number;
  timeSpent: number; // in seconds
  passingScore: number;
  questionsAnswered: number;
  totalQuestions: number;
  completedAt: string;
  achievements?: string[];
}

export interface ShareableCard {
  id: string;
  lessonTitle: string;
  moduleTitle: string;
  score: number;
  timeSpent: string;
  studentName?: string;
  completionDate: string;
  cardImageUrl?: string;
  badgeImageUrl?: string;
}

export interface LessonRating {
  lessonId: string;
  userId: string;
  rating: number; // 1-5 stars
  review?: string;
  categories: {
    contentClarity: number;
    difficultyLevel: number;
    realWorldApplicability: number;
    overallExperience: number;
  };
  wouldRecommend: boolean;
  completionTime: number;
  helpfulCount: number;
  createdAt: string;
}

export interface CelebrationAnimation {
  type: 'confetti' | 'fireworks' | 'boom' | 'sparkles' | 'particles';
  duration: number; // in milliseconds
  intensity: 'low' | 'medium' | 'high';
  colors?: string[];
}
