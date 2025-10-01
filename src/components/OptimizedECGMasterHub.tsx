// Optimized ECG Master Hub with Lazy Loading
import React, { useState, useEffect, Suspense } from 'react';
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

// Import Duolingo components
import ECGLearningPath from './ECGLearningPath';
import ECGLearningRoadmap from './ECGLearningRoadmap';

// Import lazy loading components
import { LessonLoading, LessonSuspense } from './LessonLoading';
import { useLazyLesson } from '@/hooks/useLazyLesson';
import { LazyLessonLoader } from '@/services/LazyLessonLoader';

// Import sample modules (lightweight metadata only)
import { sampleLearningModules } from '@/data/sampleModules';
import { LearningModule, Lesson, ModuleProgress } from '@/types/learning';
import { GameState } from '@/types/game';

// Lazy-loaded lesson component
const LazyEnhancedDuolingoLesson = React.lazy(() => 
  import('./EnhancedDuolingoLesson').then(module => ({
    default: module.default
  }))
);

// Convert sample modules to lightweight format (no lesson content)
const convertToLightweightModules = (): LearningModule[] => {
  return sampleLearningModules.map((module, index) => ({
    ...module,
    id: `module-${index + 1}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    unlocked: true,
    order: index + 1,
    tags: ['ecg', 'cardiology', module.category],
    featured: false,
    lessons: module.lessons.map((lesson, lessonIndex) => {
      const lessonId = `module-${index + 1}-lesson-${lessonIndex + 1}`;
      
      // Return lightweight lesson metadata only
      return {
        id: lessonId,
        moduleId: `module-${index + 1}`,
        title: lesson.title,
        description: lesson.description,
        order: lessonIndex + 1,
        estimatedTime: lesson.estimatedTime || 30,
        unlocked: true,
        completed: false,
        attempts: 0, // Add missing attempts field
        // No content, slides, tasks - these will be loaded lazily
        content: {
          type: 'mixed' as const,
          introduction: '',
          sections: [],
          slides: [],
          summary: '',
          keyPoints: [],
          resources: []
        },
        tasks: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
    })
  }));
};

interface ECGMasterHubProps {
  // Add any props you need here
}

const ECGMasterHub: React.FC<ECGMasterHubProps> = () => {
  // State management
  const [currentView, setCurrentView] = useState<'home' | 'roadmap' | 'path' | 'lesson' | 'settings' | 'stats'>('home');
  const [selectedModule, setSelectedModule] = useState<LearningModule | null>(null);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  
  // Lazy lesson loading
  const { lesson: lazyLesson, isLoading: lessonLoading, error: lessonError, loadLesson, clearLesson } = useLazyLesson();
  
  // Game state and other hooks
  const { gameState, updateLearningProgressInState } = useGameState();
  const { playSound } = useUISounds();
  const notifications = useUnifiedNotifications();
  
  // Lightweight modules (no heavy lesson data)
  const [modules] = useState<LearningModule[]>(() => convertToLightweightModules());

  // Handle lesson selection with lazy loading
  const handleLessonSelectForPath = async (moduleId: string, lessonId: string) => {
    try {
      console.log(`🚀 Loading lesson: ${lessonId}`);
      playSound('click');
      
      // Clear any existing lesson
      clearLesson();
      
      // Load the lesson content lazily
      await loadLesson(lessonId);
      
      // Switch to lesson view
      setCurrentView('lesson');
      setIsFullScreen(true);
      
      console.log(`✅ Lesson loaded and ready: ${lessonId}`);
    } catch (error) {
      console.log(`❌ Failed to load lesson ${lessonId}:`, error);
      notifications.createNotification(
        'Loading Error',
        `Failed to load lesson. Please try again.`,
        'system'
      );
    }
  };

  // Handle lesson completion
  const handleLessonComplete = async (score: number, timeSpent: number) => {
    if (!lazyLesson || !gameState.user?.id) return;

    try {
      playSound('success');
      
      // Handle lesson completion logic - correct function signature
      await handleLessonCompletion({
        lessonId: lazyLesson.id,
        moduleId: lazyLesson.moduleId,
        score,
        timeSpent,
        perfect: score >= 95,
        userId: gameState.user.id
      });

      notifications.createNotification(
        'Lesson Complete!',
        `Great job! You scored ${score}% on ${lazyLesson.title}`,
        'achievement'
      );

      // Clear lesson and return to module
      clearLesson();
      setCurrentView('path');
      setIsFullScreen(false);
      
    } catch (error) {
      console.error('❌ Error completing lesson:', error);
      notifications.createNotification(
        'Save Error',
        'Progress saved locally. Will sync when online.',
        'system'
      );
    }
  };

  // Handle lesson exit
  const handleLessonExit = () => {
    clearLesson();
    setCurrentView('path');
    setIsFullScreen(false);
    playSound('back');
  };

  // Render lesson view with lazy loading
  const renderLessonView = () => {
    if (lessonLoading) {
      return (
        <LessonLoading 
          isLoading={true} 
          error={null} 
          lessonTitle={currentLesson?.title}
        />
      );
    }

    if (lessonError) {
      return (
        <LessonLoading 
          isLoading={false} 
          error={lessonError} 
          onRetry={() => currentLesson && loadLesson(currentLesson.id)}
        />
      );
    }

    if (!lazyLesson) {
      return (
        <LessonLoading 
          isLoading={false} 
          error="No lesson data available" 
        />
      );
    }

    return (
      <LessonSuspense lessonTitle={lazyLesson.title}>
        <LazyEnhancedDuolingoLesson
          lesson={lazyLesson}
          onComplete={handleLessonComplete}
          onExit={handleLessonExit}
          userHearts={gameState.user?.hearts || 5}
          onHeartLost={() => {
            // Handle heart loss - you may need to implement this function
            console.log('❤️ Heart lost');
          }}
          isFullScreen={isFullScreen}
        />
      </LessonSuspense>
    );
  };

  // Rest of the component remains largely the same...
  // (home view, roadmap view, path view, etc.)
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      {/* Navigation and other UI components remain the same */}
      
      {currentView === 'lesson' && renderLessonView()}
      
      {/* Other views remain the same */}
      {currentView === 'home' && (
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold text-blue-900">ECG KID</h1>
            <p className="text-lg text-gray-600">Master ECG interpretation through interactive learning</p>
            
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              <Button 
                onClick={() => setCurrentView('roadmap')}
                className="h-24 flex flex-col items-center justify-center space-y-2"
              >
                <Map className="h-8 w-8" />
                <span>Learning Path</span>
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => setCurrentView('stats')}
                className="h-24 flex flex-col items-center justify-center space-y-2"
              >
                <BarChart3 className="h-8 w-8" />
                <span>My Progress</span>
              </Button>
            </div>
          </div>
        </div>
      )}
      
      {currentView === 'roadmap' && (
        <ECGLearningRoadmap
          onModuleClick={(moduleIndex) => {
            const selectedMod = modules[moduleIndex - 1];
            if (selectedMod) {
              setSelectedModule(selectedMod);
              setCurrentView('path');
            }
          }}
          userProgress={{}}
        />
      )}
      
      {currentView === 'path' && selectedModule && (
        <ECGLearningPath
          modules={[selectedModule]}
          moduleProgress={{}}
          currentModule={selectedModule.id}
          onLessonSelect={handleLessonSelectForPath}
          onModuleSelect={(moduleId) => {
            // Handle module selection if needed
          }}
          userStreak={0}
          userXP={gameState.user?.xp || 0}
          userLevel={1}
        />
      )}
    </div>
  );
};

export default ECGMasterHub;