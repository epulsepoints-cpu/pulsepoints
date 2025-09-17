import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowLeft, 
  Play, 
  CheckCircle, 
  Circle, 
  Clock, 
  Trophy, 
  BookOpen,
  Target,
  Star,
  Lock,
  Unlock,
  ArrowRight,
  Gem,
  Zap,
  RefreshCw,
  Heart
} from 'lucide-react';
import { LearningModule, Lesson, ModuleProgress } from '@/types/learning';
import { 
  getModuleById, 
  getLessonsByModule, 
  getUserModuleProgress, 
  updateModuleProgress,
  getAllModules,
  isModuleUnlocked 
} from '@/services/learningModules';
import { getNextRecommendedLesson, calculateLessonRewards } from '@/services/lessonProgression';
import { toast } from '@/components/ui/use-toast';
import { useGameState } from '@/hooks/useGameState';
import { auth } from '@/firebase';
import LoadingSpinner from './LoadingSpinner';
import { onSnapshot, doc as firestoreDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import './ModuleDetail.mobile.css'; // Add a mobile-specific style file for tweaks
import styles from './ModuleStatsRow.module.css';
import { usePlatformProgressiveLessonLoader } from '@/services/PlatformProgressiveLessonLoader';
import { useFirebaseOnlyLessons } from '@/services/FirebaseOnlyLessonService';
import { LessonLoadingProgressSimple } from '@/components/LessonLoadingProgressSimple';

interface ModuleDetailProps {
  moduleId: string;
  onBack: () => void;
  onLessonSelect: (lesson: Lesson) => void;
  refreshTrigger?: number; // Add refresh trigger
  onLessonComplete?: () => void; // Optional callback for lesson completion
}

export default function ModuleDetail({ moduleId, onBack, onLessonSelect, refreshTrigger, onLessonComplete }: ModuleDetailProps) {
  const navigate = useNavigate();
  const { gameState, updateLearningProgressInState } = useGameState();
  const [progress, setProgress] = useState<ModuleProgress | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isModuleLocked, setIsModuleLocked] = useState(false);

  // Use Firebase-only lesson loading for Android compatibility
  const {
    lessons,
    isLoading: lessonsLoading,
    progress: loadingProgress,
    error: loadingError,
    isComplete: lessonsComplete,
    retry
  } = useFirebaseOnlyLessons(moduleId);

  // Fetch module and metadata (lighter data) using react-query
  const {
    data: moduleData,
    isLoading: moduleLoading,
    error: moduleError,
    refetch: refetchModuleData,
  } = useQuery({
    queryKey: ['moduleBasic', moduleId],
    queryFn: async () => {
      const [module, allModules] = await Promise.all([
        getModuleById(moduleId),
        getAllModules(),
      ]);
      return { module, allModules };
    },
    enabled: !!moduleId,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // Real-time progress sync
  useEffect(() => {
    if (!auth.currentUser || gameState.isGuestUser) return;
    const userId = auth.currentUser.uid;
    const progressDocRef = firestoreDoc(db, 'learningProgress', `${userId}_${moduleId}`);
    const unsubscribe = onSnapshot(progressDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const progressData = docSnap.data() as ModuleProgress;
        setProgress(progressData);
        updateLearningProgressInState(moduleId, progressData);
      } else {
        setProgress(null);
      }
    }, (error) => {
      console.error('❌ Error in real-time progress listener:', error);
    });
    return () => unsubscribe();
  }, [moduleId, gameState.isGuestUser, gameState.isAuthenticated, auth.currentUser]);

  // Check module lock status when data loads
  useEffect(() => {
    if (
      moduleData?.module &&
      moduleData.allModules &&
      gameState.isAuthenticated &&
      !gameState.isGuestUser &&
      auth.currentUser
    ) {
      isModuleUnlocked(moduleId, auth.currentUser.uid, moduleData.allModules).then((unlocked) => {
        setIsModuleLocked(!unlocked);
      });
    } else {
      setIsModuleLocked(false);
    }
  }, [moduleData, gameState.isAuthenticated, gameState.isGuestUser, moduleId, auth.currentUser]);

  // Optionally, refetch on refreshTrigger
  useEffect(() => {
    if (refreshTrigger && refreshTrigger > 0) {
      refetchModuleData();
    }
  }, [refreshTrigger, refetchModuleData]);

  // Error handling
  useEffect(() => {
    if (moduleError) {
      setError('Failed to load module. Please try again.');
    } else {
      setError(null);
    }
  }, [moduleError]);

  const handleStartModule = async () => {
    if (gameState.isGuestUser) {
      toast({
        title: 'Sign in Required',
        description: 'Please sign in to start learning modules.',
        variant: 'default'
      });
      return;
    }

    if (isModuleLocked) {
      toast({
        title: 'Module Locked',
        description: 'Complete the prerequisite modules to unlock this one.',
        variant: 'destructive'
      });
      return;
    }

    if (!auth.currentUser || !moduleData?.module) return;

    try {
      // Create initial progress record
      await updateModuleProgress(auth.currentUser.uid, moduleId, {
        status: 'in-progress',
        totalLessons: lessons.length,
        totalTasks: lessons.reduce((sum, lesson) => sum + lesson.tasks.length, 0),
        startedAt: new Date().toISOString()
      });

      // Start with the first lesson
      if (lessons.length > 0) {
        onLessonSelect(lessons[0]);
      }
    } catch (error) {
      console.error('❌ Error starting module:', error);
      toast({
        title: 'Error',
        description: 'Failed to start module. Please try again.',
        variant: 'destructive'
      });
    }
  };

  const handleLessonClick = (lesson: Lesson) => {
    if (gameState.isGuestUser) {
      toast({
        title: 'Sign in Required',
        description: 'Please sign in to access lessons.',
        variant: 'default'
      });
      return;
    }

    // Check if user has hearts remaining
    const currentHearts = gameState.user?.hearts || 5;
    if (currentHearts <= 0) {
      toast({
        title: '💔 No Hearts Left!',
        description: 'Hearts regenerate over time. Take a break and come back later, or practice completed lessons!',
        variant: 'destructive',
        duration: 5000,
      });
      return;
    }

    onLessonSelect(lesson);
  };

  const getCompletionPercentage = (): number => {
    if (!progress || !lessons.length) return 0;
    
    // Calculate completion based on completed lessons vs total lessons
    const completedLessons = progress.completedLessons || 0;
    const totalLessons = lessons.length;
    
    if (totalLessons === 0) return 0;
    
    return Math.round((completedLessons / totalLessons) * 100);
  };

  const renderLessonCard = (lesson: Lesson, index: number) => {
    // Check if this specific lesson is completed based on lesson order
    const isCompleted = progress?.completedLessons ? 
      progress.completedLessons >= lesson.order : 
      false;
    
    // Check if user has hearts
    const hasHearts = !gameState.isGuestUser && (gameState.user?.hearts || 5) > 0;
    
    // First lesson (order 1) is always accessible, subsequent lessons unlock after previous completion
    const isProgressionUnlocked = (lesson.order === 1 || (progress?.completedLessons && progress.completedLessons >= (lesson.order - 1))) && !isModuleLocked;
    
    // A lesson is accessible if progression allows it AND user has hearts (or is guest) AND not completed
    const isAccessible = isProgressionUnlocked && (gameState.isGuestUser || hasHearts || isCompleted);
    
    // Different types of locks
    const isProgressLocked = !isProgressionUnlocked && !gameState.isGuestUser;
    const isHeartLocked = isProgressionUnlocked && !gameState.isGuestUser && !hasHearts && !isCompleted;
    const isLocked = isProgressLocked || isHeartLocked;
    
    const isRecommended = isAccessible && !isCompleted && 
      (lesson.order === 1 || (progress?.completedLessons && progress.completedLessons >= (lesson.order - 1)));

    console.log(`🎓 Lesson "${lesson.title}" (Order: ${lesson.order}):`, {
      isCompleted,
      isAccessible,
      isProgressLocked,
      isHeartLocked,
      isRecommended,
      hasHearts,
      userHearts: gameState.user?.hearts,
      completedLessons: progress?.completedLessons || 0,
      progressData: progress
    });

    // Calculate potential rewards for this lesson
    const potentialRewards = calculateLessonRewards(
      moduleData!.module.difficulty,
      85, // Estimated score
      lesson.estimatedTime,
      lesson.estimatedTime,
      true,
      false
    );

    return (
      <Card 
        key={lesson.id} 
        className={`w-full rounded-lg shadow-sm transition active:opacity-80 overflow-hidden ${
          isLocked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        } ${isCompleted ? 'border-green-500 bg-green-50' : ''} ${
          isRecommended ? 'border-blue-500 bg-blue-50 shadow-md' : ''
        }`}
        onClick={() => isAccessible && handleLessonClick(lesson)}
      >
        <CardContent className="p-4 flex flex-col items-stretch gap-2 overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-2 w-full">
            <div className="flex items-center space-x-3 w-full">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 shrink-0">
                {isHeartLocked && <Heart className="w-4 h-4 text-red-400" />}
                {isProgressLocked && <Lock className="w-4 h-4 text-gray-400" />}
                {isCompleted && <CheckCircle className="w-4 h-4 text-green-500" />}
                {isRecommended && <Zap className="w-4 h-4 text-blue-500" />}
                {!isLocked && !isCompleted && !isRecommended && <Circle className="w-4 h-4 text-gray-400" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold text-sm truncate">{lesson.title}</h3>
                  {isRecommended && (
                    <Badge variant="outline" className="text-xs text-blue-600 border-blue-300">
                      Next
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-gray-600 mt-1 truncate">{lesson.description}</p>
                <div className="flex flex-wrap items-center space-x-3 mt-2">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3 text-gray-500" />
                    <span className="text-xs text-gray-500">{lesson.estimatedTime}min</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="w-3 h-3 text-gray-500" />
                    <span className="text-xs text-gray-500">{lesson.tasks.length} tasks</span>
                  </div>
                  {lesson.score && (
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-500" />
                      <span className="text-xs text-gray-500">{lesson.score}%</span>
                    </div>
                  )}
                  {/* Reward Preview */}
                  {!isCompleted && isAccessible && (
                    <div className="flex items-center space-x-2 text-xs">
                      <div className="flex items-center space-x-1">
                        <Trophy className="w-3 h-3 text-yellow-500" />
                        <span className="text-yellow-600">{potentialRewards.xp}+ XP</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Gem className="w-3 h-3 text-purple-500" />
                        <span className="text-purple-600">{potentialRewards.gems}+ gems</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full sm:w-auto sm:items-end gap-2 mt-2 sm:mt-0">
              {isCompleted && (
                <Badge variant="secondary" className="text-xs w-full sm:w-auto text-center">
                  Completed
                </Badge>
              )}
              {!isCompleted && isAccessible && (
                <Button size="sm" variant={isRecommended ? "default" : "outline"} className="w-full sm:w-auto min-h-[44px] min-w-[44px]">
                  <Play className="w-3 h-3 mr-1" />
                  {isRecommended ? 'Continue' : 'Start'}
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  const renderModuleStats = () => {
    if (!moduleData?.module) return null;

    const totalTasks = lessons.reduce((sum, lesson) => sum + lesson.tasks.length, 0);
    const completedLessons = progress?.completedLessons || 0;
    const earnedPoints = progress?.earnedPoints || 0;
    const averageScore = progress?.averageScore || 0;

    return (
      <div className={styles.statsRow}>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{completedLessons}/{lessons.length}</div>
          <div className={styles.statLabel}>Lessons</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{Math.round(averageScore)}%</div>
          <div className={styles.statLabel}>Avg Score</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statValue}>{earnedPoints}</div>
          <div className={styles.statLabel}>XP Earned</div>
        </div>
      </div>
    );
  };

  if (moduleLoading) {
    return (
      <div className="flex items-center justify-center min-h-[300px]">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !moduleData?.module) {
    return (
      <div className="text-center py-12">
        <div className="text-red-500 mb-4">⚠️ {error || 'Module not found'}</div>
        <Button onClick={onBack} variant="outline">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Modules
        </Button>
      </div>
    );
  }

  const completionPercentage = getCompletionPercentage();
  const isCompleted = progress?.status === 'completed';
  const isInProgress = progress?.status === 'in-progress';
  const hasStarted = progress !== null;

  // Debug logging
  console.log('📊 ModuleDetail Progress Debug:', {
    moduleId,
    progress,
    completionPercentage,
    isCompleted,
    isInProgress,
    hasStarted,
    refreshTrigger
  });

  return (
    <div className="min-h-screen h-full w-full overflow-y-auto bg-white relative safe-area-pb px-4 sm:px-0">
      <div className="max-w-4xl mx-auto space-y-6 px-0 sm:px-0">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-4 pt-2">
          <Button onClick={onBack} variant="ghost" className="self-start">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-xl font-bold flex-1 text-center sm:text-left mobile-text-lg">Module Details</h2>
        </div>
        
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">{moduleData.module.title}</h1>
            <p className="text-gray-600 mb-4">{moduleData.module.description}</p>
            
            <div className="flex items-center space-x-4 mb-4">
              <Badge className={`${
                moduleData.module.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                moduleData.module.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {moduleData.module.difficulty}
              </Badge>
              
              <Badge variant="outline">
                {moduleData.module.category}
              </Badge>
              
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">{moduleData.module.estimatedTime} min</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {isModuleLocked && (
              <Badge className="bg-gray-500 text-white">
                <Lock className="w-3 h-3 mr-1" />
                Locked
              </Badge>
            )}
            {isCompleted && !isModuleLocked && (
              <Badge className="bg-green-500 text-white">
                <Trophy className="w-3 h-3 mr-1" />
                Completed
              </Badge>
            )}
            {isInProgress && !isModuleLocked && (
              <Badge className="bg-blue-500 text-white">
                In Progress
              </Badge>
            )}
          </div>
        </div>
        
        {/* Progress Bar */}
        {hasStarted && (
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Progress</span>
              <span>{completionPercentage}% ({progress?.completedLessons || 0}/{lessons.length} lessons)</span>
            </div>
            <Progress value={completionPercentage} className="h-2" />
          </div>
        )}
        
        {/* Action Button */}
        {!hasStarted && (
          <Button 
            onClick={handleStartModule}
            className="w-full sm:w-auto"
            disabled={gameState.isGuestUser || isModuleLocked}
          >
            {isModuleLocked ? (
              <>
                <Lock className="w-4 h-4 mr-2" />
                Module Locked
              </>
            ) : (
              <>
                <Play className="w-4 h-4 mr-2" />
                Start Module
              </>
            )}
          </Button>
        )}
      </div>

      {/* Stats */}
      {renderModuleStats()}
      
      {/* Prerequisites */}
      {moduleData.module.prerequisites.length > 0 && (
        <Card className={`mb-6 ${isModuleLocked ? 'border-orange-300 bg-orange-50' : ''}`}>
          <CardHeader>
            <CardTitle className="text-lg flex items-center space-x-2">
              <Target className="w-5 h-5" />
              <span>Prerequisites</span>
              {isModuleLocked && (
                <Badge variant="outline" className="text-orange-600 border-orange-300">
                  Required
                </Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-3">
              {isModuleLocked 
                ? "Complete these modules to unlock this one:"
                : "Prerequisites completed:"
              }
            </p>
            <div className="flex flex-wrap gap-2">
              {moduleData.module.prerequisites.map((prereq, index) => (
                <Badge 
                  key={index} 
                  variant={isModuleLocked ? "destructive" : "secondary"}
                  className="flex items-center space-x-1"
                >
                  {isModuleLocked ? (
                    <Circle className="w-3 h-3" />
                  ) : (
                    <CheckCircle className="w-3 h-3" />
                  )}
                  <span>{prereq}</span>
                </Badge>
              ))}
            </div>
            {isModuleLocked && (
              <p className="text-xs text-orange-600 mt-2">
                💡 Complete the prerequisite modules to unlock this content.
              </p>
            )}
          </CardContent>
        </Card>
      )}
      
      {/* Lessons */}
      <Card className="mt-4 rounded-lg shadow-sm w-full">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Lessons</CardTitle>
            <Badge variant="outline">
              {lessons.filter(l => l.completed).length} / {lessons.length} completed
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          {/* Progress Overview */}
          {progress && (
            <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3">📊 Your Progress</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">
                    {progress.completedLessons}
                  </div>
                  <div className="text-xs text-gray-600">Lessons Done</div>
                </div>
              </div>
              
              {/* Next Lesson Recommendation */}
              {progress.completedLessons < lessons.length && (
                <div className="mt-4 p-3 bg-white rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-800">
                        Next: {lessons[progress.completedLessons]?.title}
                      </span>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-blue-600 border-blue-300"
                      style={{ pointerEvents: 'auto', zIndex: 1 }}
                      onClick={() => {
                        const nextLesson = lessons[progress.completedLessons];
                        if (nextLesson) {
                          navigate(`/lessons/${nextLesson.id}`);
                        }
                      }}
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="space-y-3">
            {/* Show loading progress when lessons are loading */}
            {lessonsLoading && (
              <LessonLoadingProgressSimple 
                progress={loadingProgress}
              />
            )}
            
            {/* Show error if lesson loading failed */}
            {loadingError && (
              <div className="text-center py-8 text-red-500">
                <p>Failed to load lessons: {loadingError}</p>
                <Button 
                  variant="outline" 
                  onClick={retry}
                  className="mt-2"
                >
                  Retry Loading
                </Button>
              </div>
            )}
            
            {/* Render loaded lessons */}
            {lessons.map((lesson, index) => renderLessonCard(lesson, index))}
          </div>
          
          {lessonsComplete && lessons.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No lessons available yet.
            </div>
          )}
        </CardContent>
      </Card>
      
      {/* Tags */}
      {moduleData.module.tags.length > 0 && (
        <Card className="mt-6 rounded-lg w-full">
          <CardHeader>
            <CardTitle className="text-lg">Tags</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 overflow-x-auto pb-2 px-1">
              {moduleData.module.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
