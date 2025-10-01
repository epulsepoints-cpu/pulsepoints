import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useGameState } from '@/hooks/useGameState';
import { getUserAchievements, claimAchievementReward, checkAchievements } from '@/services/achievementService';
import { getUserProgressStats, updateUserProgressOnLessonComplete } from '@/services/progressService';
import { handleLessonCompletion } from '@/services/consolidatedProgressService';
import { useUnifiedNotifications } from '@/hooks/useUnifiedNotifications';
import { unifiedNotificationService } from '@/services/unifiedNotificationService';
import { useUISounds } from '@/hooks/useUISounds';
import { 
  BookOpen, 
  Trophy, 
  Target, 
  Settings,
  Crown,
  Flame,
  Zap,
  Heart,
  Diamond,
  Star,
  TrendingUp,
  Award,
  Calendar,
  ChevronRight,
  Play,
  BarChart3,
  Brain,
  Activity,
  Sparkles,
  CheckCircle,
  Lock,
  ArrowLeft,
  Map,
  Bell,
  BellRing,
  Clock,
  GraduationCap,
  Users,
  Lightbulb,
  BookMarked,
  Timer,
  Gauge,
  Check,
  Home,
  ChevronLeft,
  Navigation,
  Compass,
  MapPin,
  Route,
  Stethoscope,
  Activity as Pulse,
  Monitor,
  FileText,
  Image,
  Video,
  Headphones,
  Globe,
  Library,
  School,
  Bookmark
} from 'lucide-react';

// Import our Duolingo components
import ECGLearningPath from './ECGLearningPath';
import EnhancedDuolingoLesson from './EnhancedDuolingoLesson';
import ECGLearningRoadmap from './ECGLearningRoadmap';

// Import the comprehensive sample modules
import { sampleLearningModules } from '@/data/sampleModules';
// ✅ ANDROID-OPTIMIZED DYNAMIC LOADING: Enhanced lesson loading for Android builds
import { loadLessonDynamically, isLessonAvailable, getAvailableLessons } from '@/services/androidLessonLoader';
import { useDynamicLesson } from '@/hooks/useDynamicLesson';
import { DynamicLessonLoading, DynamicLessonError } from '@/components/DynamicLessonLoading';
import { LearningModule, Lesson, ModuleProgress } from '@/types/learning';
import { GameState } from '@/types/game';
import { androidSafeAsync, androidSafeStateUpdate, isAndroidWebView, androidResourcePreloader } from '@/utils/AndroidPerformanceUtils';

// ✅ DYNAMIC LOADING: Convert sample modules with dynamic lesson loading
// ✅ ANDROID PERFORMANCE: Ultra-lazy module loading to prevent UI freeze
const createMinimalModules = (): LearningModule[] => {
  console.log('🚀 Creating minimal modules to prevent UI freeze...');
  
  return sampleLearningModules.map((module, index) => ({
    ...module,
    id: `module-${index + 1}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    unlocked: true,
    order: index + 1,
    tags: ['ecg', 'cardiology', module.category],
    featured: false,
    // ⚡ PERFORMANCE: Create empty lessons array initially - load on demand
    lessons: [] // Start with empty array to prevent processing 84 lessons
  }));
};

// ✅ PERFORMANCE: Function to load lessons for a specific module on demand
const loadModuleLessons = (moduleIndex: number): Lesson[] => {
  console.log(`📚 Loading lessons for module ${moduleIndex + 1}...`);
  
  const module = sampleLearningModules[moduleIndex];
  if (!module?.lessons) return [];
  
  return module.lessons.map((lesson, lessonIndex) => {
    const lessonId = `module-${moduleIndex + 1}-lesson-${lessonIndex + 1}`;
    
    return {
      id: lessonId,
      moduleId: `module-${moduleIndex + 1}`,
      title: lesson.title || `Lesson ${lessonIndex + 1}`,
      description: lesson.description || `ECG lesson ${lessonIndex + 1}`,
      order: lessonIndex + 1,
      estimatedTime: lesson.estimatedTime || 15,
      isDynamicallyLoaded: true,
      content: null, // Content loaded when lesson is opened
      tasks: [],
      completed: false,
      attempts: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    } as Lesson;
  });
};

const LESSONS_PER_PAGE = 10; // ⚡ PERFORMANCE: Constant for lesson pagination

interface ECGMasterHubProps {
  onLessonComplete: (moduleId: string, lessonId: string, score: number, timeSpent: number, perfect?: boolean) => void;
  onHeartLost: () => void;
  onBack: () => void;
  onLessonViewChange?: (isInLessonView: boolean) => void; // New callback for lesson view state
}

// Enhanced progress tracking state
interface ModuleProgressState {
  moduleId: string;
  status: 'locked' | 'available' | 'in-progress' | 'completed' | 'mastered';
  completedLessons: number;
  totalLessons: number;
  lastAccessed?: string;
  averageScore?: number;
  totalTimeSpent?: number;
  streak?: number;
  masteryLevel?: number; // 0-100
}

// Navigation breadcrumb interface
interface Breadcrumb {
  label: string;
  view: string;
  icon?: React.ReactNode;
}

// Enhanced view types
type ViewType = 'home' | 'learn' | 'lesson' | 'notifications' | 'module-detail' | 'learning-path' | 'achievements' | 'profile';

// ECG Mastery Path structure
interface MasteryPath {
  id: string;
  title: string;
  description: string;
  totalModules: number;
  estimatedWeeks: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  prerequisites?: string[];
  modules: string[];
  skillsLearned: string[];
  careerRelevance: string;
  badge?: string;
}

const ECGMasterHub: React.FC<ECGMasterHubProps> = ({
  onLessonComplete,
  onHeartLost,
  onBack,
  onLessonViewChange
}) => {
  // Use useGameState directly to get all the necessary functions and state
  const { gameState, loadLearningProgress, completeLearningLesson } = useGameState();
  const { createNotification } = useUnifiedNotifications();
  
  // Initialize UI sounds
  const { playRewardSound, playClickSound, playSwooshSound, playBrandSound, playCorrectSound, playErrorSound } = useUISounds();
  
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedLesson, setSelectedLesson] = useState<any>(null);
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [currentModuleId, setCurrentModuleId] = useState<number | null>(null);
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([
    { label: 'ECG Master', view: 'home', icon: <Home className="w-4 h-4" /> }
  ]);
  
  // New state for Firebase integration
  const [achievements, setAchievements] = useState<any[]>([]);
  const [progressStats, setProgressStats] = useState<any>(null);
  const [isLoadingData, setIsLoadingData] = useState(false); // Changed from true to false initially
  
  // ⚡ PERFORMANCE: Lazy module loading to prevent UI freeze
  const [comprehensiveModules, setComprehensiveModules] = useState<LearningModule[]>([]);
  const [modulesLoaded, setModulesLoaded] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(false);

  // ⚡ PERFORMANCE: Pagination for lesson lists to prevent rendering 84 lessons at once
  const [lessonPagination, setLessonPagination] = useState<{[moduleId: string]: number}>({});
  
  // Navigation and view state
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<any>(null);
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbItem[]>([
    { label: 'ECG Master', view: 'home', icon: <Home className="w-4 h-4" /> }
  ]);
  
  // Access data from gameState
  const user = gameState.user;
  const learningProgress = gameState.learningProgress || {};
  const masteryPaths = gameState.masteryPaths || [];
  
  // Navigation functions
  const navigateBack = () => {
    if (onBack) {
      onBack();
    } else {
      setCurrentView('home');
    }
  };
  
  const navigateToView = (view: ViewType, label: string, icon: React.ReactNode) => {
    setCurrentView(view);
    setBreadcrumbs(prev => [...prev, { label, view, icon }]);
  };
  
  // Missing functions - simplified implementations
  const loadUserData = async () => {
    console.log('Loading user data...');
  };
  
  const loadUserAchievements = async () => {
    console.log('Loading achievements...');
  };
  
  // Handle learning path selection
  const handleLearningPathClick = (pathId: string) => {
    console.log('Selected learning path:', pathId);
    setCurrentView('modules');
  };
  
  // ECG Mastery Paths - structured learning routes
  const masteryPaths: MasteryPath[] = [
    {
      id: 'fundamentals',
      title: 'ECG Fundamentals Mastery',
      description: 'Master the basics of ECG interpretation from anatomy to rhythm recognition',
      totalModules: 2,
      estimatedWeeks: 4,
      difficulty: 'beginner',
      modules: ['module-1', 'module-2'],
      skillsLearned: ['Heart anatomy', 'Lead placement', 'Basic waveforms', 'Normal rhythms'],
      careerRelevance: 'Essential for nurses, EMTs, and medical students',
      badge: '🏆 ECG Foundation'
    },
    {
      id: 'clinical',
      title: 'Clinical ECG Interpretation',
      description: 'Advanced interpretation skills for real clinical scenarios',
      totalModules: 3,
      estimatedWeeks: 8,
      difficulty: 'intermediate',
      prerequisites: ['fundamentals'],
      modules: ['module-3', 'module-4', 'module-5'],
      skillsLearned: ['Arrhythmia recognition', 'Axis calculation', 'MI diagnosis', 'Clinical correlation'],
      careerRelevance: 'For healthcare professionals and residents',
      badge: '👨‍⚕️ Clinical Expert'
    },
    {
      id: 'advanced',
      title: 'Advanced ECG Mastery',
      description: 'Expert-level interpretation and complex cases',
      totalModules: 2,
      estimatedWeeks: 6,
      difficulty: 'advanced',
      prerequisites: ['clinical'],
      modules: ['module-6', 'module-7'],
      skillsLearned: ['Complex arrhythmias', 'Pacemaker rhythms', 'Drug effects', 'Electrolyte disorders'],
      careerRelevance: 'For cardiologists and critical care specialists',
      badge: '👑 ECG Master'
    }
  ];
  
  // Use gameState for user and progress data
  const user = gameState.user;
  const learningProgress = gameState.learningProgress;

  // Initialize learning progress on component mount
  useEffect(() => {
    const initializeLearningProgress = async () => {
      // Check if learning progress is empty or not loaded and user is authenticated
      if (gameState.isAuthenticated && !gameState.isGuestUser && gameState.user?.id) {
        if (!learningProgress || Object.keys(learningProgress).length === 0) {
          console.log('📚 ECG Master Hub: Loading learning progress for user:', gameState.user.id);
          
          try {
            // Call the loadLearningProgress function to initialize or load existing progress
            await loadLearningProgress();
            console.log('✅ ECG Master Hub: Learning progress loaded successfully');
          } catch (error) {
            console.error('❌ ECG Master Hub: Error loading learning progress:', error);
          }
        } else {
          console.log('✅ ECG Master Hub: Learning progress already loaded with', Object.keys(learningProgress).length, 'modules');
        }
      } else {
        console.log('⚠️ ECG Master Hub: Waiting for user authentication...');
      }
    };

    initializeLearningProgress();
  }, [gameState.isAuthenticated, gameState.user?.id, gameState.isGuestUser, loadLearningProgress, learningProgress]);

  // Check for recommended module from assessment and auto-navigate
  useEffect(() => {
    const handleRecommendedModule = async () => {
      const recommendedModule = localStorage.getItem('ecg-recommended-module');
      if (recommendedModule && gameState.isAuthenticated) {
        console.log('🎯 Auto-navigating to recommended module:', recommendedModule);
        
        // Navigate to the specific module
        const moduleId = `module-${recommendedModule}`;
        setSelectedModule(moduleId);
        setCurrentView('module-detail');
        
        // Update breadcrumbs
        setBreadcrumbs([
          { label: 'ECG Master', view: 'home', icon: <Home className="w-4 h-4" /> },
          { label: `Module ${recommendedModule}`, view: 'module-detail', icon: <BookOpen className="w-4 h-4" /> }
        ]);
        
        // Clear the stored recommendation
        localStorage.removeItem('ecg-recommended-module');
        
        // Show success notification
        if (gameState.user?.id) {
          await unifiedNotificationService.createNotification({
            userId: gameState.user.id,
            title: 'Assessment Complete! 🎉',
            body: `Welcome to Module ${recommendedModule}! This module is recommended based on your assessment performance.`,
            type: 'progress',
            actionUrl: `/ecg-master?module=${recommendedModule}`,
            category: 'success',
            priority: 'normal'
          });
        }
      }
    };

    handleRecommendedModule();
  }, [gameState.isAuthenticated, gameState.user?.id]);

  // Load user achievements and progress data
  useEffect(() => {
    if (gameState.isAuthenticated && !gameState.isGuestUser && gameState.user?.id) {
      loadUserData();
    }
  }, [gameState.isAuthenticated, gameState.user?.id]);

  // ⚡ PERFORMANCE: Ultra-lazy load modules to prevent UI freeze with 84 lessons
  useEffect(() => {
    const loadModulesMinimal = async () => {
      if (modulesLoaded) return;
      
      console.log('⚡ Starting ultra-lazy module loading to prevent UI freeze...');
      setIsLoadingData(true);
      
      try {
        // Use androidSafeAsync for Android-safe loading
        await androidSafeAsync(async () => {
          // Create minimal modules without lessons using requestIdleCallback
          const modules = await new Promise<LearningModule[]>((resolve) => {
            if (typeof requestIdleCallback !== 'undefined') {
              requestIdleCallback(() => {
                const loadedModules = createMinimalModules();
                console.log(`✅ Loaded ${loadedModules.length} modules with minimal data (no lessons loaded yet)`);
                resolve(loadedModules);
              });
            } else {
              // Fallback for environments without requestIdleCallback
              setTimeout(() => {
                const loadedModules = createMinimalModules();
                console.log(`✅ Loaded ${loadedModules.length} modules (fallback minimal loading)`);
                resolve(loadedModules);
              }, 0);
            }
          });
          
          setComprehensiveModules(modules);
          setModulesLoaded(true);
          setIsLoadingData(false);
          
          console.log('🎉 Minimal module loading complete - UI should be very responsive now');
        });
      } catch (error) {
        console.error('❌ Error loading modules:', error);
        setIsLoadingData(false);
      }
    };

    loadModulesMinimal();
  }, [modulesLoaded]);

  // ✅ ANDROID OPTIMIZATION: Initialize lesson availability on component mount
  useEffect(() => {
    const initializeAndroidLessons = async () => {
      console.log('🤖 Initializing Android-optimized lesson system...');
      
      // Detect Android WebView
      const isAndroid = isAndroidWebView();
      console.log(`📱 Android WebView detected: ${isAndroid}`);
      
      const availableLessons = getAvailableLessons();
      console.log(`✅ Android lesson system ready: ${availableLessons.length} lessons available`);
      console.log('Available lessons:', availableLessons.slice(0, 10).join(', '), '...');
      
      // Preload first few lessons for better performance
      if (isAndroid && availableLessons.length > 0) {
        console.log('🔄 Preloading initial lessons for Android performance...');
        try {
          await androidResourcePreloader.preloadLessons(availableLessons.slice(0, 5));
          console.log('✅ Initial lesson preloading complete');
        } catch (error) {
          console.warn('⚠️ Lesson preloading failed:', error);
        }
      }
    };

    initializeAndroidLessons();
  }, []); // Run once on mount

  const loadUserData = async () => {
    if (!gameState.user?.id) return;
    
    setIsLoadingData(true);
    try {
      // Load achievements and progress stats in parallel
      const [achievementsData, statsData] = await Promise.all([
        getUserAchievements(gameState.user.id),
        getUserProgressStats(gameState.user.id)
      ]);
      
      // Convert Firebase achievements to array format if needed
      let achievementsArray: any[] = [];
      if (achievementsData && achievementsData.achievements) {
        // Convert object to array format
        achievementsArray = Object.entries(achievementsData.achievements).map(([id, achievement]) => ({
          id,
          ...achievement
        }));
      }
      
      setAchievements(achievementsArray);
      setProgressStats(statsData);
      
      console.log('✅ User data loaded:', { achievementsArray, statsData });
    } catch (error) {
      console.error('❌ Failed to load user data:', error);
    } finally {
      setIsLoadingData(false);
    }
  };

  const loadUserAchievements = async () => {
    if (!gameState.user?.id) return;
    
    try {
      const achievementsData = await getUserAchievements(gameState.user.id);
      
      // Convert Firebase achievements to array format if needed
      let achievementsArray: any[] = [];
      if (achievementsData && achievementsData.achievements) {
        // Convert object to array format
        achievementsArray = Object.entries(achievementsData.achievements).map(([id, achievement]) => ({
          id,
          ...achievement
        }));
      }
      
      setAchievements(achievementsArray);
    } catch (error) {
      console.error('❌ Failed to reload achievements:', error);
    }
  };

  // Calculate user level and enhanced stats from Firebase data or defaults
  const userLevel = progressStats?.level || Math.floor((user?.xp || 0) / 1000) + 1;
  const xpToNextLevel = progressStats?.xpToNextLevel || (userLevel * 1000) - (user?.xp || 0);
  const currentStreak = progressStats?.currentStreak || user?.streakCount || 0;
  const hearts = progressStats?.hearts || user?.hearts || 5;
  const lessonsThisWeek = progressStats?.lessonsThisWeek || 3;
  
  // Calculate real progress from comprehensive modules and gameState
  const totalLessonsAcrossAllModules = comprehensiveModules?.reduce((sum, module) => sum + module.lessons.length, 0) || 0;
  const completedLessonsAcrossAllModules = Object.values(learningProgress).reduce((sum, progress) => sum + progress.completedLessons, 0);
  
  const totalLessons = progressStats?.totalLessons || user?.totalTasksCompleted || completedLessonsAcrossAllModules;
  const perfectLessons = progressStats?.perfectLessons || user?.lessonsPerfected || 0;
  
  // Weekly learning goal progress
  const weeklyGoal = 7; // lessons per week
  const weeklyProgress = (lessonsThisWeek / weeklyGoal) * 100;

  // Navigation helpers
  const navigateToView = (view: ViewType, label: string, icon?: React.ReactNode, additionalData?: any) => {
    setCurrentView(view);
    
    // Notify parent about lesson view changes
    if (onLessonViewChange) {
      onLessonViewChange(view === 'lesson');
    }
    
    // Update breadcrumbs
    const newBreadcrumbs = [...breadcrumbs];
    const existingIndex = newBreadcrumbs.findIndex(b => b.view === view);
    
    if (existingIndex >= 0) {
      // Remove all breadcrumbs after this view
      newBreadcrumbs.splice(existingIndex + 1);
    } else {
      // Add new breadcrumb
      newBreadcrumbs.push({ label, view, icon });
    }
    
    setBreadcrumbs(newBreadcrumbs);
    
    // Handle additional data
    if (additionalData?.moduleId) {
      setSelectedModule(additionalData.moduleId);
    }
  };

  const navigateBack = () => {
    console.log('🔙 NavigateBack called in ECGMasterHub');
    console.log('📊 Current breadcrumbs:', breadcrumbs);
    console.log('🎯 Current view:', currentView);
    console.log('🔢 Breadcrumbs length:', breadcrumbs.length);
    
    if (breadcrumbs.length > 1) {
      const newBreadcrumbs = [...breadcrumbs];
      newBreadcrumbs.pop();
      setBreadcrumbs(newBreadcrumbs);
      
      const previousView = newBreadcrumbs[newBreadcrumbs.length - 1];
      console.log('⬅️ Navigating back to view:', previousView.view);
      console.log('⬅️ New breadcrumbs:', newBreadcrumbs);
      setCurrentView(previousView.view as ViewType);
      
      // Notify parent about lesson view changes
      if (onLessonViewChange) {
        onLessonViewChange(previousView.view === 'lesson');
      }
    } else {
      console.log('🏠 Exiting hub entirely - no more breadcrumbs');
      // Exiting the hub entirely, not in lesson view
      if (onLessonViewChange) {
        onLessonViewChange(false);
      }
      onBack();
    }
  };

  const renderBreadcrumbs = () => (
    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
      {breadcrumbs.map((crumb, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400" />}
          <button
            onClick={() => {
              if (index < breadcrumbs.length - 1) {
                const newBreadcrumbs = breadcrumbs.slice(0, index + 1);
                setBreadcrumbs(newBreadcrumbs);
                setCurrentView(crumb.view as ViewType);
                
                // Notify parent about lesson view changes
                if (onLessonViewChange) {
                  onLessonViewChange(crumb.view === 'lesson');
                }
              }
            }}
            className={`flex items-center gap-1 hover:text-blue-600 transition-colors ${
              index === breadcrumbs.length - 1 ? 'text-blue-600 font-medium' : 'text-gray-500'
            }`}
          >
            {crumb.icon}
            {crumb.label}
          </button>
        </React.Fragment>
      ))}
    </div>
  );

  // Use Firebase achievements or fallback to local achievements for display
  // Note: Firebase achievements loaded in state will override this if available
  const fallbackAchievements = [
    {
      id: 'first-lesson',
      title: 'ECG Apprentice',
      description: 'Complete your first ECG lesson',
      icon: <BookOpen className="w-6 h-6" />,
      progress: totalLessons > 0 ? 1 : 0,
      total: 1,
      completed: totalLessons > 0,
      rarity: 'common' as const,
      reward: { xp: 50 }
    },
    {
      id: 'fundamentals-master',
      title: 'Fundamentals Master',
      description: 'Complete the ECG Fundamentals module',
      icon: <GraduationCap className="w-6 h-6" />,
      progress: learningProgress['module-1']?.completedLessons || 0,
      total: comprehensiveModules[0]?.lessons.length || 9,
      completed: learningProgress['module-1']?.status === 'completed',
      rarity: 'rare' as const,
      reward: { xp: 200, gems: 50 }
    },
    {
      id: 'week-streak',
      title: 'Rhythm Master',
      description: 'Maintain a 7-day learning streak',
      icon: <Flame className="w-6 h-6" />,
      progress: Math.min(currentStreak, 7),
      total: 7,
      completed: currentStreak >= 7,
      rarity: 'rare' as const,
      reward: { xp: 100, gems: 25 }
    },
    {
      id: 'perfect-score',
      title: 'Perfect Score',
      description: 'Get a perfect score on any lesson',
      icon: <Star className="w-6 h-6" />,
      progress: perfectLessons > 0 ? 1 : 0,
      total: 1,
      completed: perfectLessons > 0,
      rarity: 'rare' as const,
      reward: { xp: 75, gems: 10 }
    },
    {
      id: 'intermediate-unlock',
      title: 'Rhythm Analyzer',
      description: 'Complete Modules 2 & 3 (Sinus Rhythm + Intervals)',
      icon: <BarChart3 className="w-6 h-6" />,
      progress: (learningProgress['module-2']?.status === 'completed' ? 1 : 0) + (learningProgress['module-3']?.status === 'completed' ? 1 : 0),
      total: 2,
      completed: learningProgress['module-2']?.status === 'completed' && learningProgress['module-3']?.status === 'completed',
      rarity: 'rare' as const,
      reward: { xp: 300, gems: 75 }
    },
    {
      id: 'arrhythmia-expert',
      title: 'Arrhythmia Expert',
      description: 'Master both Atrial & Ventricular Arrhythmias',
      icon: <Activity className="w-6 h-6" />,
      progress: (learningProgress['module-4']?.status === 'completed' ? 1 : 0) + (learningProgress['module-5']?.status === 'completed' ? 1 : 0),
      total: 2,
      completed: false,
      rarity: 'epic' as const,
      reward: { xp: 500, gems: 100 }
    },
    {
      id: 'master-title',
      title: 'ECG Master',
      description: 'Complete all 5 comprehensive modules',
      icon: <Crown className="w-6 h-6" />,
      progress: Object.values(learningProgress).filter(p => p.status === 'completed').length,
      total: 5,
      completed: false,
      rarity: 'legendary' as const,
      reward: { xp: 1000, gems: 200, title: 'ECG Master' }
    }
  ];

  // Use Firebase achievements if available, otherwise use fallback
  const displayAchievements = achievements.length > 0 ? achievements : fallbackAchievements;

  // Convert learning progress for compatibility with ECGLearningPath
  const convertToLegacyProgress = (progressData: Record<string, any>): Record<string, ModuleProgress> => {
    const converted: Record<string, ModuleProgress> = {};
    
    Object.entries(progressData).forEach(([moduleId, progress]) => {
      converted[moduleId] = {
        moduleId,
        userId: user?.id || '',
        status: progress.status === 'completed' ? 'completed' :
                progress.status === 'in-progress' ? 'in-progress' : 'not-started', // All modules available by default
        completedLessons: progress.completedLessons,
        totalLessons: progress.totalLessons,
        completedTasks: progress.completedLessons * 3, // Estimate 3 tasks per lesson
        totalTasks: progress.totalLessons * 3,
        totalPoints: progress.averageScore ? progress.averageScore * progress.completedLessons * 10 : 0,
        earnedPoints: progress.averageScore ? progress.averageScore * progress.completedLessons * 10 : 0,
        averageScore: progress.averageScore || 0,
        timeSpent: progress.totalTimeSpent || 0,
        lastAccessedAt: progress.lastAccessed || new Date().toISOString(),
        correctAnswers: progress.averageScore ? Math.round(progress.averageScore * progress.completedLessons / 10) : 0,
        totalAnswers: progress.completedLessons * 10, // Estimate 10 questions per lesson
        accuracy: progress.averageScore || 0,
        streak: 0, // Will be managed separately
        longestStreak: 0,
        reviewCount: 0,
        masteryLevel: progress.masteryLevel || 0
      };
    });
    
    return converted;
  };

  const handleLearningPathClick = (path: MasteryPath) => {
    console.log('🎯 Learning path clicked:', path.title, 'Modules:', path.modules);
    
    // Get the first available module from this learning path
    const firstModuleId = path.modules[0];
    const firstModule = comprehensiveModules?.find(m => m.id === firstModuleId);
    
    if (firstModule) {
      console.log('📖 Navigating to first module:', firstModule.title);
      
      // Navigate directly to the first module in this learning path
      setSelectedModule(firstModuleId);
      setCurrentView('module-detail');
      
      // Update breadcrumbs to show the learning path context
      setBreadcrumbs([
        { label: 'ECG Master', view: 'home', icon: <Home className="w-4 h-4" /> },
        { label: 'Learning Paths', view: 'learning-path', icon: <Route className="w-4 h-4" /> },
        { label: firstModule.title, view: 'module-detail', icon: <BookOpen className="w-4 h-4" /> }
      ]);
      
      // Show notification about starting the learning path
      if (gameState.user?.id) {
        unifiedNotificationService.createNotification({
          userId: gameState.user.id,
          title: `🎯 ${path.title} Started!`,
          body: `Welcome to your structured learning journey. Starting with ${firstModule.title}.`,
          type: 'system',
          actionUrl: `/ecg-master?module=${firstModuleId}`,
          category: 'info',
          priority: 'normal'
        });
      }
    } else {
      console.warn('⚠️ No modules found for learning path:', path.title);
      
      // Fallback to general learning view
      navigateToView('learn', 'Quick Learn', <BookOpen className="w-4 h-4" />);
    }
  };

  const handleLessonSelect = async (moduleId: string, lessonId: string) => {
    console.log('� Virtual lesson loading:', { moduleId, lessonId });
    
    // ⚡ Use the new virtual lesson loading approach
    await loadLessonContent(moduleId, lessonId);
      
      // Check if user has hearts remaining (only for authenticated users)
      const currentHearts = gameState.user?.hearts || 5;
      if (!gameState.isGuestUser && currentHearts <= 0) {
        if (gameState.user?.id) {
          await unifiedNotificationService.createNotification({
            userId: gameState.user.id,
            title: '💔 No Hearts Left!',
            body: 'Hearts regenerate over time. Take a break and come back later, or practice completed lessons!',
            type: 'system',
            actionUrl: '/dashboard',
            category: 'warning',
            priority: 'high'
          });
        }
        return;
      }
      
      // ✨ ANDROID-ENHANCED: Dynamic lesson loading with WebView optimization
      console.time(`Loading lesson ${lessonId}`);
      try {
        // Set a loading placeholder first - immediate UI update
        const loadingPlaceholder = {
          ...lesson,
          isLoading: true,
          content: {
            type: 'mixed' as const,
            introduction: 'Loading lesson content...',
            sections: [],
            slides: [],
            summary: 'Loading...',
            keyPoints: ['Loading lesson content...'],
            resources: []
          }
        };
        
        playClickSound(); // Play click sound when lesson is selected
        setSelectedLesson(loadingPlaceholder);
        
        // ✅ ANDROID OPTIMIZATION: Use async scheduling to prevent UI blocking
        const loadLessonAsync = async () => {
          return androidSafeAsync(
            async () => {
              const dynamicLesson = await loadLessonDynamically(lessonId);
              
              if (dynamicLesson) {
                console.log('✅ Android-optimized lesson loaded successfully:', {
                  lessonId,
                  title: dynamicLesson.title,
                  hasSlides: dynamicLesson.content?.slides?.length || 0,
                  hasTasks: dynamicLesson.tasks?.length || 0,
                  cached: true // Android loader provides caching
                });
                
                // ✅ ANDROID: Use safe state update to prevent UI blocking
                androidSafeStateUpdate(setSelectedLesson, dynamicLesson);
                console.timeEnd(`Loading lesson ${lessonId}`);
                
                // Preload next lesson for smooth navigation
                const availableLessons = getAvailableLessons();
                const currentIndex = availableLessons.indexOf(lessonId);
                if (currentIndex >= 0 && currentIndex < availableLessons.length - 1) {
                  const nextLessonId = availableLessons[currentIndex + 1];
                  androidResourcePreloader.preloadLessons([nextLessonId]);
                }
                
              } else {
                console.warn('⚠️ Android lesson loading failed, using fallback');
                const fallbackLesson = {
                  ...lesson,
                  content: {
                    type: 'mixed' as const,
                    introduction: 'This lesson is being optimized for Android. Please try another lesson.',
                    sections: [{
                      id: 'available-lessons',
                      title: 'Available Lessons',
                      content: `Try one of these optimized lessons: ${getAvailableLessons().slice(0, 3).join(', ')}`
                    }],
                    slides: [],
                    summary: 'Lesson not available',
                    keyPoints: ['Try another lesson'],
                    resources: []
                  }
                };
                androidSafeStateUpdate(setSelectedLesson, fallbackLesson);
              }
            },
            {
              timeout: 100,
              onProgress: (message) => console.log(`📱 Android loading: ${message}`)
            }
          );
        };
        
        // Execute the async loading
        await loadLessonAsync();
        
      } catch (error) {
        console.error('❌ Critical Android lesson loading error:', error);
        // Final fallback
        const errorFallback = {
          ...lesson,
          content: {
            type: 'mixed' as const,
            introduction: 'Critical error loading lesson content. Please try another lesson.',
            sections: [{
              id: 'error-section',
              title: 'Error',
              content: `Please try one of these lessons: ${getAvailableLessons().slice(0, 3).join(', ')}`
            }],
            slides: [],
            summary: 'Critical loading error',
            keyPoints: ['Try another lesson'],
            resources: []
          }
        };
        androidSafeStateUpdate(setSelectedLesson, errorFallback);
      }
      
      // Set up navigation and breadcrumbs
      if (currentView !== 'module-detail' || selectedModule !== moduleId) {
        console.log('🔄 Setting up module context before lesson');
        setSelectedModule(moduleId);
        const moduleLabel = `${module.title}`;
        setBreadcrumbs([
          { label: 'ECG Master', view: 'home', icon: <Home className="w-4 h-4" /> },
          { label: moduleLabel, view: 'module-detail', icon: <BookOpen className="w-4 h-4" /> },
          { label: lesson.title, view: 'lesson', icon: <BookOpen className="w-4 h-4" /> }
        ]);
      } else {
        navigateToView('lesson', lesson.title, <BookOpen className="w-4 h-4" />);
      }
      
      setCurrentView('lesson');
      
      // Notify parent about lesson view changes
      if (onLessonViewChange) {
        onLessonViewChange(true);
      }
      
      // Lesson start notification with action URL
      if (gameState.user?.id) {
        await unifiedNotificationService.createNotification({
          userId: gameState.user.id,
          title: 'Lesson Started',
          body: `Good luck with "${lesson.title}"! You've got this! 💪`,
          type: 'system',
          actionUrl: `/lesson/${moduleId}/${lessonId}`,
          category: 'info',
          priority: 'normal'
        });
      }
    }
  };

  // Enhanced lesson completion with progress tracking
  const handleLessonComplete = async (score: number, timeSpent: number) => {
    if (selectedLesson && gameState.user?.id) {
      const moduleId = selectedLesson.moduleId;
      const lessonId = selectedLesson.id;
      const passed = score >= 70; // Pass threshold
      const perfect = score >= 95; // Perfect score threshold
      
      // Play swoosh sound for lesson completion
      playSwooshSound();
      
      console.log('🎯 ECGMasterHub: Lesson completion starting', {
        moduleId,
        lessonId,
        score,
        timeSpent,
        passed,
        perfect
      });
      
      try {
        console.log('🎯 ECGMasterHub: Starting consolidated lesson completion');
        
        // Use the new consolidated progress service
        try {
          await handleLessonCompletion({
            userId: gameState.user.id,
            moduleId: moduleId || 'module-1',
            lessonId: lessonId || 'lesson-1',
            score,
            timeSpent,
            perfect
          });
          console.log('✅ ECGMasterHub: Consolidated progress update completed');
        } catch (consolidatedError) {
          console.error('⚠️ Consolidated progress update failed:', consolidatedError);
          // Continue with fallback methods
        }
        
        // Also call the original completeLearningLesson for state management
        try {
          await completeLearningLesson(
            moduleId || 'module-1',
            lessonId || 'lesson-1',
            score,
            timeSpent,
            perfect
          );
          console.log('✅ ECGMasterHub: State management lesson completion successful');
        } catch (stateError) {
          console.error('⚠️ State management update failed:', stateError);
          // This is more critical as it affects UI state
          throw stateError;
        }
        
        // Check for new achievements with updated stats
        try {
          const updatedStats = await getUserProgressStats(gameState.user.id);
          console.log('📊 Updated stats for achievement check:', updatedStats);
          
          const newlyCompletedAchievements = await checkAchievements(gameState.user.id, {
            totalLessons: updatedStats.totalLessons || 0,
            completedModules: updatedStats.completedModules || [],
            currentStreak: updatedStats.currentStreak || 0,
            perfectLessons: updatedStats.perfectLessons || 0,
            fastCompletions: updatedStats.fastCompletions || 0
          });
          
          // Show notifications for newly unlocked achievements with action URLs
          if (newlyCompletedAchievements && newlyCompletedAchievements.length > 0) {
            newlyCompletedAchievements.forEach(async (achievementId) => {
              await unifiedNotificationService.createNotification({
                userId: gameState.user.id,
                title: '🏆 Achievement Unlocked!',
                body: `You've earned a new achievement! Check your achievements to claim your reward.`,
                type: 'achievement',
                actionUrl: `/dashboard?tab=achievements&highlight=${achievementId}`,
                category: 'success',
                priority: 'high'
              });
            });
            console.log('🎉 New achievements unlocked:', newlyCompletedAchievements);
          }
          
          console.log('✅ Achievement check completed successfully');
        } catch (achievementError) {
          console.error('⚠️ Achievement check failed (non-critical):', achievementError);
          // Don't throw - achievements are nice to have but not critical
        }
        
        // Reload user data to reflect changes
        try {
          await loadUserData();
          console.log('✅ User data reloaded successfully');
        } catch (userDataError) {
          console.error('⚠️ Failed to reload user data (non-critical):', userDataError);
          // UI will update on next refresh/navigation
        }
        
        console.log('🎉 ECGMasterHub: All updates completed successfully');
        
        // Small delay to ensure all Firebase writes are complete before notifying other components
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Dispatch custom event to notify other components about progress update
        const progressUpdateEvent = new CustomEvent('progressUpdated', {
          detail: {
            userId: gameState.user.id,
            moduleId,
            lessonId,
            score,
            perfect,
            timestamp: Date.now()
          }
        });
        window.dispatchEvent(progressUpdateEvent);
        console.log('📢 ECGMasterHub: Progress update event dispatched');
        
        // Lesson completion notifications with action URLs
        if (score >= 90) {
          await unifiedNotificationService.createNotification({
            userId: gameState.user.id,
            title: 'Perfect Score! ⭐',
            body: `Amazing! You scored ${score}% on "${selectedLesson.title}"`,
            type: 'achievement',
            actionUrl: `/dashboard?tab=achievements`,
            category: 'success',
            priority: 'high'
          });
        } else if (score >= 80) {
          await unifiedNotificationService.createNotification({
            userId: gameState.user.id,
            title: 'Great Job! 👏',
            body: `Well done! You scored ${score}% on "${selectedLesson.title}"`,
            type: 'achievement',
            actionUrl: `/dashboard?tab=progress`,
            category: 'success',
            priority: 'normal'
          });
        } else {
          await unifiedNotificationService.createNotification({
            userId: gameState.user.id,
            title: 'Lesson Completed! 📚',
            body: `You completed "${selectedLesson.title}" with ${score}%`,
            type: 'lesson',
            actionUrl: `/dashboard?tab=progress`,
            category: 'info',
            priority: 'normal'
          });
        }
        
        // Call parent completion handler with module and lesson IDs
        onLessonComplete(
          moduleId || 'module-1',
          lessonId || `lesson-${Date.now()}`,
          score,
          timeSpent,
          perfect
        );
        
        // Force refresh of learning progress to show newly unlocked lessons
        console.log('🔄 ECGMasterHub: Refreshing learning progress...');
        try {
          await loadLearningProgress();
          console.log('🔄 ECGMasterHub: Learning progress refreshed successfully');
          console.log('📊 Current progress after refresh:', gameState.learningProgress);
        } catch (progressError) {
          console.error('⚠️ Failed to refresh learning progress:', progressError);
          // Continue anyway - user can manually refresh
        }
        
        console.log('🔄 ECGMasterHub: All completion tasks finished, navigating back');
        
        // Navigate back immediately - don't wait for additional delays
        console.log('🔄 ECGMasterHub: Navigating back to module view');
        navigateBack();
        setSelectedLesson(null);
      } catch (error) {
        console.error('❌ Failed to update lesson progress:', error);
        
        // Show specific error message with action URL
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        await unifiedNotificationService.createNotification({
          userId: gameState.user.id,
          title: "Progress Save Error",
          body: `Failed to save progress: ${errorMessage}. Your lesson completion was recorded but some data may not be updated.`,
          type: 'system',
          actionUrl: '/dashboard?tab=support',
          category: 'error',
          priority: 'high'
        });
        
        // Still navigate back even on error - user completed the lesson
        navigateBack();
        setSelectedLesson(null);
      }
    } else {
      navigateBack();
      setSelectedLesson(null);
    }
  };

  const handleClaimReward = async (achievementId: string) => {
    if (!user?.id) {
      await unifiedNotificationService.createNotification({
        userId: 'guest',
        title: "Error",
        body: "Please log in to claim rewards",
        type: 'system',
        actionUrl: '/login',
        category: 'error',
        priority: 'normal'
      });
      return;
    }

    try {
      console.log('🎁 Claiming reward for achievement:', achievementId);
      
      // Use the achievement service to claim the reward
      const result = await claimAchievementReward(user.id, achievementId);
      
      // Achievement reward claim notification with action URL
      await unifiedNotificationService.createNotification({
        userId: user.id,
        title: "Reward Claimed! 🎉",
        body: `You earned ${result.xp || 0} XP${result.gems ? ` and ${result.gems} gems` : ''}!`,
        type: 'achievement',
        actionUrl: '/dashboard?tab=inventory',
        category: 'success',
        priority: 'high'
      });
      
      // Play reward sound for successful claim
      playRewardSound();
      
      // Refresh achievements to show updated claimed status
      loadUserAchievements();
      
    } catch (error) {
      console.error('❌ Failed to claim reward:', error);
      await unifiedNotificationService.createNotification({
        userId: user.id,
        title: "Error",
        body: error instanceof Error ? error.message : "Failed to claim reward. Please try again.",
        type: 'system',
        actionUrl: '/dashboard?tab=support',
        category: 'error',
        priority: 'normal'
      });
    }
  };

  // ⚡ VIRTUAL LESSON LOADING: Load actual lesson content only when clicked
  const loadLessonContent = async (moduleId: string, lessonId: string) => {
    console.log(`🔄 Loading lesson content for ${lessonId} in module ${moduleId}`);
    
    // Extract module and lesson indices from IDs
    const moduleIndex = parseInt(moduleId.split('-')[1]) - 1;
    const lessonIndex = parseInt(lessonId.split('-lesson-')[1]) - 1;
    
    try {
      // Load only the specific lesson content from the optimized lessons
      const lessons = loadModuleLessons(moduleIndex);
      const specificLesson = lessons[lessonIndex];
      
      if (specificLesson) {
        console.log(`✅ Loaded lesson content: ${specificLesson.title}`);
        
        // Navigate to the lesson with the loaded content
        setSelectedLesson({
          ...specificLesson,
          moduleId
        });
        setCurrentView('lesson');
      } else {
        console.error(`❌ Lesson not found at index ${lessonIndex} in module ${moduleIndex}`);
      }
    } catch (error) {
      console.error('❌ Failed to load lesson content:', error);
    }
  };

  // Render Module Detail View
  const renderModuleDetail = () => {
    const module = comprehensiveModules?.find(m => m.id === selectedModule);
    if (!module) return null;

    // ⚡ ULTRA PERFORMANCE: Virtual scrolling - only get lesson count, not full lessons
    const getModuleLessonCount = (moduleIndex: number) => {
      // Get lesson count without loading full lessons
      switch (moduleIndex) {
        case 0: return 12; // Basic ECG Foundations
        case 1: return 10; // Heart Rhythm Analysis
        case 2: return 15; // Arrhythmia Detection
        case 3: return 14; // Advanced Pattern Recognition
        case 4: return 18; // Clinical Case Studies
        case 5: return 15; // Emergency ECG Protocols
        default: return 10;
      }
    };

    const moduleIndex = parseInt(module.id.split('-')[1]) - 1;
    const totalLessons = getModuleLessonCount(moduleIndex);
    
    // Create lightweight lesson placeholders for virtual scrolling
    const lessonPlaceholders = Array.from({ length: totalLessons }, (_, index) => ({
      id: `${module.id}-lesson-${index + 1}`,
      title: `Lesson ${index + 1}`,
      description: "Click to load lesson content...",
      order: index + 1,
      estimatedTime: 15,
      isLoaded: false
    }));

    const progress = learningProgress[module.id];
    const progressPercentage = progress ? (progress.completedLessons / totalLessons) * 100 : 0;
    
    // ⚡ VIRTUAL SCROLLING: Use placeholders for pagination instead of loading all lessons
    const currentPage = lessonPagination[module.id] || 1;
    const startIndex = (currentPage - 1) * LESSONS_PER_PAGE;
    const endIndex = startIndex + LESSONS_PER_PAGE;
    const paginatedLessons = lessonPlaceholders.slice(startIndex, endIndex);
    const totalPages = Math.ceil(lessonPlaceholders.length / LESSONS_PER_PAGE);
    
    return (
      <div className="space-y-6">
        {/* Module Header */}
        <Card className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <CardContent className="p-8">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Monitor className="w-10 h-10" />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">{module.title}</h1>
                <p className="text-blue-100 text-lg mb-4">{module.description}</p>
                <div className="flex items-center gap-4 text-sm">
                  <Badge className="bg-white/20 text-white">
                    {module.difficulty}
                  </Badge>
                  <span>⏱️ {module.estimatedTime} minutes</span>
                  <span>📚 {module.lessons.length} lessons</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">{Math.round(progressPercentage)}%</div>
                <div className="text-blue-100">Complete</div>
              </div>
            </div>
            <div className="mt-6">
              <Progress value={progressPercentage} className="h-3 bg-white/20" />
            </div>
          </CardContent>
        </Card>

        {/* Lessons List */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-green-500" />
              Module Lessons {totalLessons > LESSONS_PER_PAGE && (
                <Badge variant="secondary" className="ml-2">
                  {totalLessons} total
                </Badge>
              )}
            </h3>
            
            {/* Virtual scrolling - always show lessons immediately */}
            <div className="space-y-4">
                {paginatedLessons.map((lesson, index) => {
                const actualIndex = startIndex + index;
                const lessonOrder = lesson.order || (actualIndex + 1);
                const completedLessons = progress?.completedLessons || 0;
                
                // Use proper progression-based unlocking (matching ModuleDetail logic)
                const isCompleted = completedLessons >= lessonOrder;
                const isProgressionUnlocked = lessonOrder === 1 || completedLessons >= (lessonOrder - 1);
                const hasHearts = gameState.isGuestUser || (gameState.user?.hearts || 5) > 0;
                const isAvailable = isProgressionUnlocked && (gameState.isGuestUser || hasHearts || isCompleted);
                const isNext = completedLessons === lessonOrder - 1 && !isCompleted;

                console.log(`🎓 Lesson status for "${lesson.title}" (Order: ${lessonOrder}):`, {
                  completedLessons,
                  isAvailable,
                  isCompleted,
                  isNext,
                  isProgressionUnlocked,
                  hasHearts,
                  moduleId: module.id
                });

                const isLocked = !isAvailable;
                const isHeartLocked = isProgressionUnlocked && !gameState.isGuestUser && !hasHearts && !isCompleted;
                const isProgressLocked = !isProgressionUnlocked;

                return (
                  <Card 
                    key={lesson.id}
                    className={`transition-all duration-300 hover:shadow-md ${
                      isLocked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                    } ${isCompleted ? 'bg-green-50 border-green-200' :
                      isNext ? 'bg-blue-50 border-blue-200 shadow-md' :
                      'bg-white border-gray-200 hover:bg-gray-50'
                    }`}
                    onClick={() => isAvailable && handleLessonSelect(module.id, lesson.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                          isLocked ? 'bg-gray-300' :
                          isCompleted ? 'bg-green-500' :
                          isNext ? 'bg-blue-500' :
                          'bg-gray-400'
                        }`}>
                          {isHeartLocked ? <Heart className="w-6 h-6 text-red-400" /> :
                           isProgressLocked ? <Lock className="w-6 h-6 text-gray-400" /> :
                           isCompleted ? <CheckCircle className="w-6 h-6" /> :
                           isNext ? <Play className="w-6 h-6" /> :
                           index + 1}
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-1">{lesson.title}</h4>
                          <p className="text-gray-600 text-sm mb-2">{lesson.description}</p>
                          <div className="flex items-center gap-3 text-xs text-gray-500">
                            <span>⏱️ {lesson.estimatedTime} min</span>
                            <span>📖 Multiple sections</span>
                            <span>🖼️ Interactive content</span>
                          </div>
                        </div>

                        <div className="text-right">
                          {isCompleted && (
                            <div className="text-green-600 font-bold">
                              ✓ Completed
                            </div>
                          )}
                          {isNext && isAvailable && (
                            <Badge className="bg-blue-500 text-white">
                              Continue
                            </Badge>
                          )}
                          {isHeartLocked && (
                            <Badge className="bg-red-100 text-red-700">
                              💔 No Hearts
                            </Badge>
                          )}
                          {isProgressLocked && (
                            <Badge className="bg-gray-100 text-gray-700">
                              🔒 Locked
                            </Badge>
                          )}
                          {!isCompleted && !isNext && isAvailable && (
                            <Badge className="bg-gray-500 text-white">
                              Available
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
              
              {/* ⚡ PERFORMANCE: Pagination controls for large lesson lists */}
              {totalPages > 1 && (
                <div className="mt-6 flex items-center justify-between border-t pt-4">
                  <div className="text-sm text-gray-600">
                    Showing {startIndex + 1}-{Math.min(endIndex, totalLessons)} of {totalLessons} lessons
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setLessonPagination(prev => ({
                        ...prev,
                        [module.id]: Math.max(1, currentPage - 1)
                      }))}
                      disabled={currentPage === 1}
                    >
                      ← Previous
                    </Button>
                    <span className="text-sm text-gray-600">
                      Page {currentPage} of {totalPages}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setLessonPagination(prev => ({
                        ...prev,
                        [module.id]: Math.min(totalPages, currentPage + 1)
                      }))}
                      disabled={currentPage === totalPages}
                    >
                      Next →
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  // Render Learning Path Selection
  const renderLearningPaths = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your ECG Mastery Path</h2>
        <p className="text-gray-600 text-lg">Select a structured learning journey that matches your goals</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {masteryPaths.map((path) => {
          const completedModules = path.modules.filter(moduleId => 
            learningProgress[moduleId]?.status === 'completed'
          ).length;
          const progressPercentage = (completedModules / path.totalModules) * 100;
          const isUnlocked = !path.prerequisites || 
            path.prerequisites.every(prereq => {
              const prereqPath = masteryPaths.find(p => p.id === prereq);
              return prereqPath?.modules.every(modId => 
                learningProgress[modId]?.status === 'completed'
              );
            });
          
          return (
            <Card 
              key={path.id}
              className={`transition-all duration-300 ${
                isUnlocked 
                  ? 'cursor-pointer hover:shadow-xl hover:scale-105 bg-gradient-to-br from-white to-blue-50 border-blue-200' 
                  : 'bg-gray-50 border-gray-200 opacity-75 cursor-not-allowed'
              }`}
              onClick={() => {
                if (isUnlocked) {
                  handleLearningPathClick(path);
                } else {
                  // Show tooltip or notification about prerequisites
                  if (gameState.user?.id) {
                    unifiedNotificationService.createNotification({
                      userId: gameState.user.id,
                      title: '🔒 Prerequisites Required',
                      body: `Complete ${path.prerequisites?.join(' and ')} mastery path(s) first to unlock ${path.title}.`,
                      type: 'system',
                      actionUrl: '/ecg-master?tab=learning-paths',
                      category: 'info',
                      priority: 'normal'
                    });
                  }
                }
              }}
            >
              <CardContent className="p-6">
                {!isUnlocked && (
                  <div className="absolute top-2 right-2">
                    <div className="bg-gray-500 text-white p-1 rounded-full">
                      <Lock className="w-4 h-4" />
                    </div>
                  </div>
                )}
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-white font-bold text-xl mb-3 ${
                    !isUnlocked ? 'bg-gray-400' :
                    path.difficulty === 'beginner' ? 'bg-green-500' :
                    path.difficulty === 'intermediate' ? 'bg-blue-500' : 'bg-purple-500'
                  }`}>
                    {path.difficulty === 'beginner' ? <School className="w-8 h-8" /> :
                     path.difficulty === 'intermediate' ? <Stethoscope className="w-8 h-8" /> :
                     <Crown className="w-8 h-8" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{path.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{path.description}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium">{completedModules}/{path.totalModules} modules</span>
                  </div>
                  <Progress value={progressPercentage} className="h-2" />
                  
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                    <div>📚 {path.totalModules} modules</div>
                    <div>⏱️ {path.estimatedWeeks} weeks</div>
                  </div>
                  
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-xs text-gray-500 mb-2">Modules included:</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {path.modules.map((moduleId, index) => {
                        const module = comprehensiveModules?.find(m => m.id === moduleId);
                        const moduleProgress = learningProgress[moduleId];
                        const isCompleted = moduleProgress?.status === 'completed';
                        
                        return (
                          <Badge 
                            key={index} 
                            variant="outline" 
                            className={`text-xs ${
                              isCompleted ? 'bg-green-100 text-green-800 border-green-300' : 
                              !isUnlocked ? 'bg-gray-100 text-gray-500' : 'bg-blue-100 text-blue-800'
                            }`}
                          >
                            {isCompleted && '✓ '}
                            {module?.title.replace('Module ', 'M') || `Module ${index + 1}`}
                          </Badge>
                        );
                      })}
                    </div>
                    
                    {path.prerequisites && !isUnlocked && (
                      <div className="mb-3">
                        <p className="text-xs text-amber-600 mb-1">📋 Prerequisites:</p>
                        <div className="flex flex-wrap gap-1">
                          {path.prerequisites.map((prereqId, index) => {
                            const prereqPath = masteryPaths.find(p => p.id === prereqId);
                            return (
                              <Badge key={index} variant="outline" className="text-xs bg-amber-50 text-amber-700 border-amber-300">
                                {prereqPath?.title || prereqId}
                              </Badge>
                            );
                          })}
                        </div>
                      </div>
                    )}
                    
                    <p className="text-xs text-gray-500 mb-2">You'll learn:</p>
                    <div className="flex flex-wrap gap-1">
                      {path.skillsLearned.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {path.skillsLearned.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{path.skillsLearned.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  {path.badge && (
                    <div className="text-center pt-2">
                      <Badge className="bg-yellow-100 text-yellow-800">
                        {path.badge}
                      </Badge>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );

  if (currentView === 'lesson' && selectedLesson) {
    // ✅ ANDROID OPTIMIZATION: Find current module for lesson context
    const currentModule = comprehensiveModules?.find(m => m.id === selectedLesson.moduleId);
    const currentLessonIndex = currentModule?.lessons.findIndex(l => l.id === selectedLesson.id) || 0;
    
    return (
      <div className="fixed inset-0 bg-white z-50 flex flex-col">
        {/* Full-screen lesson content - Android optimized */}
        <div className="flex-1 lesson-viewer-scroll mobile-scroll-optimized scroll-indicator">
          {selectedLesson.isLoading ? (
            /* ✨ Android-optimized loading indicator */
            <DynamicLessonLoading 
              lessonId={selectedLesson.id}
              message="Loading optimized lesson content..."
              showProgress={true}
            />
          ) : (
            /* ✅ ANDROID-SAFE: Use EnhancedDuolingoLesson for optimized lesson rendering */
            <EnhancedDuolingoLesson
              lesson={selectedLesson}
              onComplete={(score, timeSpent) => {
                // ✅ ANDROID: Use safe async completion
                androidSafeAsync(async () => {
                  await handleLessonComplete(score, timeSpent);
                });
              }}
              onExit={navigateBack}
              userHearts={gameState?.user?.hearts || 5}
              onHeartLost={() => {
                // ✅ ANDROID: Safe heart loss handling
                androidSafeAsync(async () => {
                  if (onHeartLost) {
                    onHeartLost();
                  }
                });
              }}
              isFullScreen={true}
            />
          )}
        </div>
      </div>
    );
  }

  if (currentView === 'learning-path') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Navigation Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Button 
                variant="ghost" 
                onClick={navigateBack}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              <h1 className="text-xl font-bold text-gray-900">Learning Paths</h1>
              <div className="w-16"></div> {/* Spacer */}
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto p-4">
          {renderLearningPaths()}
        </div>
      </div>
    );
  }

  if (currentView === 'module-detail') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 w-full overflow-x-hidden">
        {/* Navigation Header */}
        <div className="bg-white shadow-sm border-b w-full">
          <div className="w-full max-w-none px-4 py-4 md:max-w-6xl md:mx-auto">
            <div className="flex items-center justify-between">
              <Button 
                variant="ghost" 
                onClick={navigateBack}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              <div className="text-center">
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">Module Details</h1>
              </div>
              <div className="w-16"></div> {/* Spacer */}
            </div>
          </div>
        </div>
        
        <div className="w-full max-w-none px-4 py-4 md:max-w-6xl md:mx-auto">
          {renderModuleDetail()}
        </div>
      </div>
    );
  }

  if (currentView === 'learn') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 w-full overflow-x-hidden">
        {/* Navigation Header */}
        <div className="bg-white shadow-sm border-b w-full">
          <div className="w-full max-w-none px-4 py-4 md:max-w-6xl md:mx-auto">
            <div className="flex items-center justify-between">
              <Button 
                variant="ghost" 
                onClick={navigateBack}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">ECG Learning Path</h1>
              <div className="w-16"></div> {/* Spacer */}
            </div>
          </div>
        </div>
        
        <ECGLearningPath
          modules={comprehensiveModules}
          moduleProgress={convertToLegacyProgress(learningProgress)}
          onLessonSelect={handleLessonSelect}
          onModuleSelect={(moduleId) => {
            setSelectedModule(moduleId);
            navigateToView('module-detail', 'Module Details', <BookOpen className="w-4 h-4" />, { moduleId });
          }}
          userStreak={currentStreak}
          userXP={user?.xp || 0}
          userLevel={userLevel}
        />
      </div>
    );
  }

  // ⚡ Show loading state while modules are being loaded to prevent UI freeze
  if (!modulesLoaded || isLoadingData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 w-full overflow-x-hidden flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-800">Loading ECG Lessons</h2>
            <p className="text-sm text-gray-600">Preparing your learning experience...</p>
            <div className="w-64 bg-gray-200 rounded-full h-2 mx-auto">
              <div className="bg-indigo-600 h-2 rounded-full w-3/4 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 w-full overflow-x-hidden">
      {/* Main Content */}
      <div className="w-full max-w-sm mx-auto px-3 py-4 space-y-4 sm:max-w-2xl sm:px-4 sm:space-y-6 md:max-w-4xl lg:max-w-6xl">
        
        {/* Simple Welcome Section */}
        <Card className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white overflow-hidden relative w-full">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full"></div>
          <CardContent className="p-3 sm:p-4 md:p-6 relative z-10">
            <div className="text-center">
              <h1 className="text-base sm:text-lg md:text-2xl font-bold mb-2">
                Welcome back, {user?.username || 'Student'}! 
                <span className="inline-block animate-bounce ml-2">👋</span>
              </h1>
              <p className="text-purple-100 text-xs sm:text-sm md:text-base">Continue your ECG mastery journey</p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Navigation Actions */}
        <div className="grid grid-cols-2 gap-3 w-full sm:gap-4 lg:grid-cols-4">
          <Card 
            className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-green-400 to-emerald-600 text-white overflow-hidden relative w-full"
            onClick={() => navigateToView('learning-path', 'Learning Paths', <Route className="w-4 h-4" />)}
          >
            <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-white/10 rounded-full"></div>
            <CardContent className="p-3 sm:p-4 md:p-6 text-center relative z-10">
              <Route className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 mx-auto mb-2 sm:mb-4" />
              <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold mb-1 sm:mb-2">Learning Paths</h3>
              <p className="text-green-100 text-[10px] sm:text-xs md:text-sm">Structured ECG mastery journeys</p>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-blue-500 to-indigo-600 text-white overflow-hidden relative w-full"
            onClick={() => navigateToView('learn', 'Quick Learn', <BookOpen className="w-4 h-4" />)}
          >
            <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full"></div>
            <CardContent className="p-3 sm:p-4 md:p-6 text-center relative z-10">
              <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 mx-auto mb-2 sm:mb-4" />
              <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold mb-1 sm:mb-2">Quick Learn</h3>
              <p className="text-blue-100 text-[10px] sm:text-xs md:text-sm">Jump into any module</p>
            </CardContent>
          </Card>
        </div>

        {/* ECG Learning Roadmap Section */}
        <ECGLearningRoadmap 
          onModuleClick={(moduleId) => {
            // Navigate to specific module in learning path
            setCurrentView('learning-path');
            setCurrentModuleId(moduleId);
            // You can add additional logic here to jump to specific module
          }}
          userProgress={(() => {
            // Convert ModuleProgress to percentage-based progress for roadmap
            const convertedProgress: Record<number, number> = {};
            const moduleProgress = progressStats?.moduleProgress || {};
            
            // Map module IDs to roadmap IDs and calculate percentages
            Object.entries(moduleProgress).forEach(([moduleId, progress]) => {
              const roadmapId = parseInt(moduleId.replace('module-', ''));
              if (!isNaN(roadmapId) && progress && typeof progress === 'object') {
                // Safely access properties with fallbacks and proper type checking
                const completedLessons = (progress as any).completedLessons || 0;
                const totalLessons = (progress as any).totalLessons || 1;
                const percentage = Math.round((completedLessons / totalLessons) * 100);
                convertedProgress[roadmapId] = percentage;
              }
            });
            
            return convertedProgress;
          })()}
        />
      </div>
    </div>
  );
};

export default ECGMasterHub;
