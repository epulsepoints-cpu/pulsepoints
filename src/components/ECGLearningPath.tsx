import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  CheckCircle, 
  Play, 
  Lock, 
  Star, 
  Trophy,
  Zap,
  Heart,
  Target,
  BookOpen,
  Brain,
  Activity,
  Crown,
  Diamond,
  Flame,
  Award,
  Users,
  Clock,
  TrendingUp
} from 'lucide-react';
import { LearningModule, ModuleProgress, Lesson } from '@/types/learning';

interface LearningPathProps {
  modules: LearningModule[];
  moduleProgress: Record<string, ModuleProgress>;
  currentModule?: string;
  onLessonSelect: (moduleId: string, lessonId: string) => void;
  onModuleSelect: (moduleId: string) => void;
  userStreak: number;
  userXP: number;
  userLevel: number;
}

const ECGLearningPath: React.FC<LearningPathProps> = ({
  modules,
  moduleProgress,
  currentModule,
  onLessonSelect,
  onModuleSelect,
  userStreak,
  userXP,
  userLevel
}) => {
  const [selectedPath, setSelectedPath] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');
  const [showPathSelection, setShowPathSelection] = useState(false);

  // Filter modules by difficulty/path
  const pathModules = modules.filter(module => 
    selectedPath === 'beginner' ? module.difficulty === 'beginner' :
    selectedPath === 'intermediate' ? module.difficulty === 'intermediate' :
    module.difficulty === 'advanced'
  );

  // Calculate overall progress
  const calculateOverallProgress = () => {
    const totalModules = pathModules.length;
    const completedModules = pathModules.filter(module => {
      const progress = moduleProgress[module.id];
      return progress?.status === 'completed';
    }).length;
    return totalModules > 0 ? (completedModules / totalModules) * 100 : 0;
  };

  // Get current lesson recommendation
  const getCurrentLesson = () => {
    for (const module of pathModules) {
      const progress = moduleProgress[module.id];
      if (!progress || progress.status !== 'completed') {
        const nextLessonIndex = progress?.completedLessons || 0;
        if (nextLessonIndex < module.lessons.length) {
          return {
            module,
            lesson: module.lessons[nextLessonIndex],
            isNext: true
          };
        }
      }
    }
    return null;
  };

  const currentLesson = getCurrentLesson();

  // Path selection cards
  const pathOptions = [
    {
      key: 'beginner' as const,
      title: 'ECG Fundamentals',
      description: 'Start your ECG journey with basics',
      icon: BookOpen,
      color: 'bg-gradient-to-br from-green-400 to-emerald-500',
      modules: modules.filter(m => m.difficulty === 'beginner').length
    },
    {
      key: 'intermediate' as const,
      title: 'Clinical Mastery',
      description: 'Advanced interpretation skills',
      icon: Brain,
      color: 'bg-gradient-to-br from-blue-400 to-indigo-500',
      modules: modules.filter(m => m.difficulty === 'intermediate').length
    },
    {
      key: 'advanced' as const,
      title: 'Expert Level',
      description: 'Complex cases and specialties',
      icon: Trophy,
      color: 'bg-gradient-to-br from-purple-400 to-pink-500',
      modules: modules.filter(m => m.difficulty === 'advanced').length
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-2 sm:p-4">
      <div className="max-w-4xl mx-auto space-y-4">
        
        {/* Header Stats - Mobile Optimized */}
        <div className="flex items-center justify-end mb-4">
          <Button 
            variant="outline" 
            onClick={() => setShowPathSelection(!showPathSelection)}
            className="shadow-sm text-sm"
            size="sm"
          >
            Switch Path
          </Button>
        </div>

        {/* Path Selection */}
        {showPathSelection && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            {pathOptions.map((path) => (
              <Card 
                key={path.key}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedPath === path.key ? 'ring-2 ring-blue-400 shadow-md' : 'hover:shadow-md'
                }`}
                onClick={() => {
                  setSelectedPath(path.key);
                  setShowPathSelection(false);
                }}
              >
                <CardContent className="p-4">
                  <div className={`w-10 h-10 rounded-full ${path.color} flex items-center justify-center mb-3 mx-auto`}>
                    <path.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-center mb-2 text-sm">{path.title}</h3>
                  <p className="text-xs text-gray-600 text-center mb-3">{path.description}</p>
                  <div className="text-center">
                    <Badge variant="secondary" className="text-xs">{path.modules} modules</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Current Progress Overview */}
        <Card className="bg-gradient-to-r from-blue-400 to-blue-500 text-white shadow-md">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <h2 className="text-lg font-semibold mb-2">
                  {pathOptions.find(p => p.key === selectedPath)?.title}
                </h2>
                <p className="text-blue-100 mb-3 text-sm">
                  {Math.round(calculateOverallProgress())}% Complete
                </p>
                <Progress 
                  value={calculateOverallProgress()} 
                  className="w-full md:w-64 h-2 bg-white/20" 
                />
              </div>
              
              {currentLesson && (
                <div className="text-center">
                  <p className="text-xs text-blue-100 mb-2">Continue Learning</p>
                  <Button 
                    onClick={() => onLessonSelect(currentLesson.module.id, currentLesson.lesson.id)}
                    className="bg-white text-blue-600 hover:bg-blue-50 font-semibold shadow-md text-sm"
                    size="sm"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    {currentLesson.lesson.title}
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Learning Path - Mobile Optimized */}
        <div className="space-y-6">
          {pathModules.map((module, moduleIndex) => {
            const progress = moduleProgress[module.id];
            const isCompleted = progress?.status === 'completed';
            const isInProgress = progress?.status === 'in-progress';
            const isLocked = !module.unlocked;
            const completionPercentage = progress ? 
              Math.round((progress.completedLessons / module.lessons.length) * 100) : 0;

            return (
              <div key={module.id} className="relative">
                {/* Module Header */}
                <div 
                  className="flex items-center mb-4 cursor-pointer hover:bg-white p-3 rounded-lg transition-colors shadow-sm"
                  onClick={() => !isLocked && onModuleSelect(module.id)}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-md ${
                    isCompleted ? 'bg-green-500' :
                    isInProgress ? 'bg-blue-500' :
                    isLocked ? 'bg-gray-400' : 'bg-blue-400'
                  }`}>
                    {isCompleted ? <CheckCircle className="w-6 h-6" /> :
                     isLocked ? <Lock className="w-6 h-6" /> :
                     moduleIndex + 1}
                  </div>
                  <div className="ml-3 flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">{module.title}</h3>
                    <p className="text-gray-600 text-sm">{module.description}</p>
                    {progress && (
                      <div className="flex items-center gap-3 mt-2">
                        <Progress value={completionPercentage} className="flex-1 h-2" />
                        <span className="text-xs font-medium text-gray-600">
                          {progress.completedLessons}/{module.lessons.length}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Lessons in Mobile-Optimized Style */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {module.lessons.map((lesson, lessonIndex) => {
                    const lessonCompleted = progress?.completedLessons > lessonIndex;
                    const lessonAccessible = lessonIndex === 0 || progress?.completedLessons >= lessonIndex;
                    const lessonCurrent = progress?.completedLessons === lessonIndex && !lessonCompleted;
                    const lessonLocked = !lessonAccessible || isLocked;

                    return (
                      <Card
                        key={lesson.id}
                        className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                          lessonCompleted ? 'bg-green-50 border-green-200' :
                          lessonCurrent ? 'bg-blue-50 border-blue-200 ring-1 ring-blue-300' :
                          lessonLocked ? 'bg-gray-50 border-gray-200 opacity-60' :
                          'bg-white border-gray-200 hover:shadow-md'
                        }`}
                        onClick={() => !lessonLocked && onLessonSelect(module.id, lesson.id)}
                      >
                        <CardContent className="p-3">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-xs ${
                              lessonCompleted ? 'bg-green-500' :
                              lessonCurrent ? 'bg-blue-500' :
                              lessonLocked ? 'bg-gray-400' : 'bg-blue-400'
                            }`}>
                              {lessonCompleted ? <CheckCircle className="w-5 h-5" /> :
                               lessonLocked ? <Lock className="w-5 h-5" /> :
                               lessonCurrent ? <Play className="w-5 h-5" /> :
                               lessonIndex + 1}
                            </div>
                            
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 mb-1 text-sm">{lesson.title}</h4>
                              <p className="text-xs text-gray-600 mb-2 line-clamp-2">{lesson.description}</p>
                              
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-xs">
                                  {lesson.estimatedTime} min
                                </Badge>
                                {lessonCompleted && (
                                  <Badge className="bg-green-100 text-green-700 text-xs">
                                    ✓ Completed
                                  </Badge>
                                )}
                                {lessonCurrent && (
                                  <Badge className="bg-blue-100 text-blue-700 text-xs">
                                    ⚡ Next
                                  </Badge>
                                )}
                              </div>
                            </div>

                            {!lessonLocked && (
                              <div className="text-right">
                                <div className="text-xs text-gray-500 mb-1">Reward</div>
                                <div className="flex items-center gap-1 text-xs">
                                  <Zap className="w-3 h-3 text-yellow-500" />
                                  <span>25-50 XP</span>
                                </div>
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                {/* Path connector line */}
                {moduleIndex < pathModules.length - 1 && (
                  <div className="flex justify-center mb-8">
                    <div className="w-1 h-16 bg-gradient-to-b from-indigo-300 to-indigo-500 rounded-full"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Achievement Section */}
        <Card className="bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-xl">
          <CardContent className="p-6 text-center">
            <Trophy className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Keep Learning!</h3>
            <p className="text-amber-100 mb-4">
              Complete your daily lesson to maintain your {userStreak}-day streak
            </p>
            <div className="flex justify-center gap-2">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    i < userStreak % 7 ? 'bg-white text-orange-500' : 'bg-orange-400/50'
                  }`}
                >
                  {i < userStreak % 7 ? <Heart className="w-4 h-4" /> : <div className="w-3 h-3 bg-white/30 rounded-full" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ECGLearningPath;
                  