import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/components/ui/use-toast';
import { 
  ArrowLeft, 
  Clock, 
  BookOpen, 
  CheckCircle,
  Play,
  Lock,
  Trophy,
  Download
} from 'lucide-react';
import { LearningModule, ModuleProgress } from '@/types/learning';
import { 
  getAllModules, 
  getUserModuleProgress, 
  getUnlockedModulesForUser,
  importSampleModules,
  checkIfSampleDataExists 
} from '@/services/learningModules';
import { useGameState } from '@/hooks/useGameState';
import { auth } from '@/firebase';
import SkeletonLoader from './SkeletonLoader';
import ECGMasteryBanner from './ECGMasteryBanner';
import moduleCardStyles from './ModuleGradientCard.module.css';

interface LearningModulesProps {
  onBack: () => void;
  onModuleSelect: (moduleId: string) => void;
}

export default function LearningModules({ onBack, onModuleSelect }: LearningModulesProps) {
  const { gameState } = useGameState();
  const [modules, setModules] = useState<LearningModule[]>([]);
  const [moduleProgress, setModuleProgress] = useState<Record<string, ModuleProgress>>({});
  const [loading, setLoading] = useState(true);
  const [showSampleDataButton, setShowSampleDataButton] = useState(false);

  useEffect(() => {
    loadModules();
    checkSampleData();
  }, []);

  const checkSampleData = async () => {
    try {
      const hasData = await checkIfSampleDataExists();
      setShowSampleDataButton(!hasData);
    } catch (error) {
      console.error('Error checking sample data:', error);
    }
  };

  const handleImportSampleData = async () => {
    try {
      console.log('🔄 Starting sample data import...');
      console.log('Authentication status:', gameState.isAuthenticated);
      console.log('Is guest user:', gameState.isGuestUser);
      console.log('Auth user:', auth.currentUser?.uid);
      
      await importSampleModules();
      console.log('✅ Sample data import completed');
      setShowSampleDataButton(false);
      loadModules(); // Reload modules
      toast({
        title: "Success",
        description: "Sample learning modules imported successfully!",
      });
    } catch (error) {
      console.error('❌ Error importing sample data:', error);
      toast({
        title: "Error", 
        description: `Failed to import sample modules: ${error instanceof Error ? error.message : 'Unknown error'}`,
        variant: "destructive"
      });
    }
  };

  const loadModules = async () => {
    try {
      setLoading(true);
      let modulesData = await getAllModules();
      
      // Apply unlocking logic for authenticated users
      if (gameState.isAuthenticated && !gameState.isGuestUser && auth.currentUser) {
        modulesData = await getUnlockedModulesForUser(auth.currentUser.uid, modulesData);
      } else {
        // For guest users, show all modules as unlocked but with limited functionality
        modulesData = modulesData.map(module => ({ ...module, unlocked: true }));
      }
      
      setModules(modulesData);

      // Load progress for authenticated users
      if (gameState.isAuthenticated && !gameState.isGuestUser && auth.currentUser) {
        const progressPromises = modulesData.map(async (module) => {
          const progress = await getUserModuleProgress(auth.currentUser!.uid, module.id);
          return { moduleId: module.id, progress };
        });

        const progressResults = await Promise.all(progressPromises);
        const progressMap = progressResults.reduce((acc, { moduleId, progress }) => {
          if (progress) acc[moduleId] = progress;
          return acc;
        }, {} as Record<string, ModuleProgress>);

        setModuleProgress(progressMap);
      }
    } catch (error) {
      console.error('❌ Error loading modules:', error);
    } finally {
      setLoading(false);
    }
  };

  const getModuleStatus = (module: LearningModule) => {
    const progress = moduleProgress[module.id];
    if (!progress) return 'not-started';
    return progress.status;
  };

  const getCompletionPercentage = (moduleId: string): number => {
    const progress = moduleProgress[moduleId];
    if (!progress || progress.totalTasks === 0) return 0;
    return Math.round((progress.completedTasks / progress.totalTasks) * 100);
  };

  const gradientClasses = [
    moduleCardStyles.gradientPurplePink,
    moduleCardStyles.gradientBlueCyan,
    moduleCardStyles.gradientOrangeRed,
    moduleCardStyles.gradientGreenTeal,
    moduleCardStyles.gradientPinkYellow,
    moduleCardStyles.gradientIndigoBlue,
  ];

  const renderModuleCard = (module: LearningModule, idx: number) => {
    const status = getModuleStatus(module);
    const completionPercentage = getCompletionPercentage(module.id);
    const isCompleted = status === 'completed';
    const isInProgress = status === 'in-progress';
    const isLocked = !module.unlocked && !gameState.isGuestUser;
    const gradientClass = gradientClasses[idx % gradientClasses.length];

    return (
      <div
        key={module.id}
        className={
          moduleCardStyles.moduleGradientCard +
          ' ' + gradientClass +
          ` ${isLocked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${isCompleted ? 'ring-2 ring-green-400' : ''}`}
        onClick={() => {
          if (!isLocked) {
            onModuleSelect(module.id);
          } else {
            toast({
              title: "Module Locked",
              description: "Complete the prerequisite modules to unlock this one.",
              variant: "destructive"
            });
          }
        }}
      >
        <div>
          <div className={moduleCardStyles.moduleGradientTitle}>{module.title}</div>
          <div className={moduleCardStyles.moduleGradientDesc}>{module.description}</div>
          <div className="flex items-center space-x-2 mb-3">
            <Badge className={`$ {
              module.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
              module.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {module.difficulty}
            </Badge>
            <Badge variant="outline">{module.category}</Badge>
          </div>
          <div className="flex items-center space-x-4 text-sm text-white/80">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{module.estimatedTime} min</span>
            </div>
            <div className="flex items-center space-x-1">
              <BookOpen className="w-4 h-4" />
              <span>{module.lessons.length} lessons</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end space-y-2 mt-4">
          {isLocked && (
            <div className="flex items-center space-x-1 text-white/70">
              <Lock className="w-4 h-4" />
              <span className="text-xs font-medium">Locked</span>
            </div>
          )}
          {isCompleted && !isLocked && (
            <div className="flex items-center space-x-1 text-white">
              <CheckCircle className="w-4 h-4" />
              <span className="text-xs font-medium">Completed</span>
            </div>
          )}
          {isInProgress && !isLocked && (
            <div className="flex items-center space-x-1 text-white">
              <Play className="w-4 h-4" />
              <span className="text-xs font-medium">In Progress</span>
            </div>
          )}
          {!isCompleted && !isLocked && (
            <button className={moduleCardStyles.moduleGradientBtn}>
              {isInProgress ? 'Continue' : 'Start Module'}
            </button>
          )}
        </div>
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

  return (
    <div className="space-y-6 px-2 sm:px-0">
      <ECGMasteryBanner />
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mb-4">
        <Button onClick={onBack} variant="ghost" className="self-start">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h2 className="text-xl font-bold flex-1 text-center sm:text-left">Learning Modules</h2>
      </div>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((m, i) => renderModuleCard(m, i))}
      </div>

      {modules.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-600 mb-2">No modules found</h3>
          <p className="text-gray-500">No modules available yet.</p>
        </div>
      )}
    </div>
  );
}
