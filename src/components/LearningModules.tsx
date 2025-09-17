import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  Play, 
  Clock, 
  Trophy, 
  Lock,
  CheckCircle,
  Circle,
  Star,
  TrendingUp,
  Target,
  Zap
} from 'lucide-react';
import { LearningModule, ModuleCategory, ModuleProgress, UserLearningProfile } from '@/types/learning';
import { getAllModules, getUserLearningProfile, getAllUserProgress } from '@/services/learningModules';
import { toast } from '@/components/ui/use-toast';
import { useGameState } from '@/hooks/useGameState';
import { auth } from '@/firebase';
import SkeletonLoader from './SkeletonLoader';
import ECGMasteryBanner from './ECGMasteryBanner';

interface LearningModulesProps {
  onModuleSelect: (module: LearningModule) => void;
}

const difficultyColors = {
  beginner: 'bg-green-100 text-green-800',
  intermediate: 'bg-yellow-100 text-yellow-800',
  advanced: 'bg-red-100 text-red-800'
};

export default function LearningModules({ onModuleSelect }: LearningModulesProps) {
  const { gameState } = useGameState();
  const [modules, setModules] = useState<LearningModule[]>([]);
  const [progress, setProgress] = useState<Record<string, ModuleProgress>>({});
  const [userProfile, setUserProfile] = useState<UserLearningProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (gameState.isAuthenticated && !gameState.isGuestUser) {
      loadUserData();
    } else {
      // Load basic module data for guest users
      loadBasicModules();
    }
  }, [gameState.isAuthenticated, gameState.isGuestUser]);

  const loadUserData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const userId = auth.currentUser?.uid;
      if (!userId) return;

      // Load modules, progress, and profile in parallel
      const [allModules, userProgress, profile] = await Promise.all([
        getAllModules(),
        getAllUserProgress(userId),
        getUserLearningProfile(userId)
      ]);

      // Convert progress array to object for easier lookup
      const progressMap: Record<string, ModuleProgress> = {};
      userProgress.forEach(p => {
        progressMap[p.moduleId] = p;
      });

      // Update modules with unlock status
      const modulesWithUnlockStatus = allModules.map(module => ({
        ...module,
        unlocked: profile?.unlockedModules.includes(module.id) || 
                 module.difficulty === 'beginner' ||
                 module.prerequisites.length === 0
      }));

      setModules(modulesWithUnlockStatus);
      setProgress(progressMap);
      setUserProfile(profile);
    } catch (error) {
      console.error('❌ Error loading user data:', error);
      setError('Failed to load learning modules. Please try again.');
      toast({
        title: 'Error',
        description: 'Failed to load learning modules. Please try again.',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const loadBasicModules = async () => {
    try {
      setLoading(true);
      const allModules = await getAllModules();
      
      // For guest users, only show beginner modules as unlocked
      const modulesWithUnlockStatus = allModules.map(module => ({
        ...module,
        unlocked: module.difficulty === 'beginner'
      }));

      setModules(modulesWithUnlockStatus);
    } catch (error) {
      console.error('❌ Error loading basic modules:', error);
      setError('Failed to load learning modules. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getModuleProgress = (moduleId: string): ModuleProgress | null => {
    return progress[moduleId] || null;
  };

  const getCompletionPercentage = (moduleId: string): number => {
    const moduleProgress = getModuleProgress(moduleId);
    if (!moduleProgress) return 0;
    
    if (moduleProgress.totalTasks === 0) return 0;
    return Math.round((moduleProgress.completedTasks / moduleProgress.totalTasks) * 100);
  };

  const handleModuleClick = (module: LearningModule) => {
    if (gameState.isGuestUser) {
      toast({
        title: 'Sign in Required',
        description: 'Please sign in to access learning modules.',
        variant: 'default'
      });
      return;
    }

    if (!module.unlocked) {
      toast({
        title: 'Module Locked',
        description: 'Complete the prerequisite modules to unlock this content.',
        variant: 'default'
      });
      return;
    }

    onModuleSelect(module);
  };

  const renderModuleCard = (module: LearningModule, idx?: number) => {
    const moduleProgress = getModuleProgress(module.id);
    const completionPercentage = getCompletionPercentage(module.id);
    const isCompleted = moduleProgress?.status === 'completed';
    const isInProgress = moduleProgress?.status === 'in-progress';

    return (
      <Card 
        key={module.id} 
        className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
          !module.unlocked ? 'opacity-50 cursor-not-allowed' : ''
        } ${isCompleted ? 'border-green-500 bg-green-50' : ''}`}
        onClick={() => handleModuleClick(module)}
        id={idx === 0 ? 'module-item' : undefined}
      >
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              {!module.unlocked && <Lock className="w-5 h-5 text-gray-400" />}
              {isCompleted && <CheckCircle className="w-5 h-5 text-green-500" />}
              {isInProgress && <Circle className="w-5 h-5 text-blue-500" />}
              
              <div>
                <CardTitle className="text-lg">{module.title}</CardTitle>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge className={difficultyColors[module.difficulty]}>
                    {module.difficulty}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {module.category}
                  </Badge>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600">{module.estimatedTime}min</span>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <p className="text-sm text-gray-600 mb-4">{module.description}</p>
          
          {moduleProgress && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>{completionPercentage}%</span>
              </div>
              <Progress value={completionPercentage} className="h-2" />
              
              <div className="flex justify-between text-xs text-gray-500">
                <span>{moduleProgress.completedLessons}/{moduleProgress.totalLessons} lessons</span>
                <span>{moduleProgress.earnedPoints} XP</span>
              </div>
            </div>
          )}
          
          {!moduleProgress && module.unlocked && (
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">
                {module.lessons?.length || 0} lessons
              </span>
              <Button size="sm" variant="outline">
                <Play className="w-4 h-4 mr-1" />
                Start
              </Button>
            </div>
          )}
          
          {module.prerequisites.length > 0 && (
            <div className="mt-2 pt-2 border-t">
              <div className="text-xs text-gray-500">
                Prerequisites: {module.prerequisites.length} module(s)
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    );
  };

  const renderOverviewStats = () => {
    if (gameState.isGuestUser) {
      return (
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Welcome to ECG Learning</h3>
              <p className="text-gray-600 mb-4">
                Sign in to track your progress and unlock advanced modules
              </p>
              <Button>Sign In to Continue</Button>
            </div>
          </CardContent>
        </Card>
      );
    }

    const totalModules = modules.length;
    const completedModules = Object.values(progress).filter(p => p.status === 'completed').length;
    const totalXP = Object.values(progress).reduce((sum, p) => sum + p.earnedPoints, 0);
    const averageAccuracy = userProfile?.averageAccuracy || 0;

    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{completedModules}</div>
              <div className="text-sm text-gray-600">Completed</div>
              <div className="text-xs text-gray-500">of {totalModules}</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{totalXP}</div>
              <div className="text-sm text-gray-600">Total XP</div>
              <div className="text-xs text-gray-500">Learning</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{averageAccuracy}%</div>
              <div className="text-sm text-gray-600">Accuracy</div>
              <div className="text-xs text-gray-500">Average</div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{userProfile?.learningStreak || 0}</div>
              <div className="text-sm text-gray-600">Streak</div>
              <div className="text-xs text-gray-500">Days</div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="p-4">
            <SkeletonLoader height="2rem" className="mb-2" />
            <SkeletonLoader height="1.2rem" width="60%" className="mb-2" />
            <SkeletonLoader height="1.2rem" width="80%" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-500 mb-4">⚠️ {error}</div>
        <Button onClick={loadUserData} variant="outline">
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-2 sm:p-4">
      <ECGMasteryBanner />
      <div className="mb-4">
        <h1 className="text-2xl font-bold mb-2">ECG Learning Modules</h1>
        <p className="text-gray-600 text-sm">
          Master ECG interpretation through structured, progressive learning
        </p>
      </div>

      {renderOverviewStats()}

      <div className="space-y-4 px-1 sm:px-0">
        <div className="flex flex-col sm:flex-row items-center gap-2 mb-3">
          <h2 className="text-lg font-semibold flex-1 text-center sm:text-left">All Modules</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {modules.map(renderModuleCard)}
        </div>
        
        {modules.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500">No modules available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
