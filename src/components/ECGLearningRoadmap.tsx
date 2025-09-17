import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Activity, 
  Zap, 
  Brain, 
  Target, 
  AlertTriangle, 
  TrendingUp, 
  Stethoscope, 
  Eye, 
  Sparkles,
  CheckCircle,
  Lock,
  ArrowRight,
  Star,
  Crown
} from 'lucide-react';

interface Module {
  id: number;
  title: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  progress: number;
  isUnlocked: boolean;
  lessons: number;
  estimatedTime: string;
  icon: React.ComponentType<any>;
  color: string;
  description: string;
}

interface ECGLearningRoadmapProps {
  onModuleClick: (moduleId: number) => void;
  userProgress?: Record<number, number>;
}

const ECGLearningRoadmap: React.FC<ECGLearningRoadmapProps> = ({ 
  onModuleClick, 
  userProgress = {} 
}) => {
  const [animationDelay, setAnimationDelay] = useState(0);

  // Module data based on our sampleModules analysis
  const modules: Module[] = [
    {
      id: 1,
      title: "ECG Fundamentals",
      category: "fundamentals",
      difficulty: "beginner",
      progress: userProgress[1] || 0,
      isUnlocked: true,
      lessons: 10,
      estimatedTime: "2h",
      icon: Heart,
      color: "from-rose-400 to-pink-500",
      description: "Master the basics of ECG interpretation"
    },
    {
      id: 2,
      title: "Sinus Rhythms & Atrial",
      category: "arrhythmias",
      difficulty: "intermediate",
      progress: userProgress[2] || 0,
      isUnlocked: userProgress[1] >= 80,
      lessons: 9,
      estimatedTime: "3h",
      icon: Activity,
      color: "from-blue-400 to-indigo-500",
      description: "Understand normal and abnormal sinus patterns"
    },
    {
      id: 3,
      title: "Atrial Arrhythmias",
      category: "arrhythmias",
      difficulty: "intermediate",
      progress: userProgress[3] || 0,
      isUnlocked: userProgress[2] >= 70,
      lessons: 8,
      estimatedTime: "2.5h",
      icon: Zap,
      color: "from-amber-400 to-orange-500",
      description: "Identify common atrial rhythm disorders"
    },
    {
      id: 4,
      title: "STEMI & NSTEMI",
      category: "ischemia",
      difficulty: "intermediate",
      progress: userProgress[4] || 0,
      isUnlocked: userProgress[3] >= 70,
      lessons: 8,
      estimatedTime: "3h",
      icon: Target,
      color: "from-emerald-400 to-green-500",
      description: "Critical myocardial infarction recognition"
    },
    {
      id: 5,
      title: "Ventricular Rhythms",
      category: "arrhythmias",
      difficulty: "advanced",
      progress: userProgress[5] || 0,
      isUnlocked: userProgress[4] >= 70,
      lessons: 9,
      estimatedTime: "3.5h",
      icon: AlertTriangle,
      color: "from-red-400 to-rose-500",
      description: "Critical ventricular arrhythmia identification"
    },
    {
      id: 6,
      title: "AV Blocks & Complex",
      category: "arrhythmias",
      difficulty: "advanced",
      progress: userProgress[6] || 0,
      isUnlocked: userProgress[5] >= 70,
      lessons: 8,
      estimatedTime: "3h",
      icon: Brain,
      color: "from-purple-400 to-violet-500",
      description: "Advanced conduction disorders"
    },
    {
      id: 7,
      title: "Emergency Arrhythmias",
      category: "arrhythmias",
      difficulty: "advanced",
      progress: userProgress[7] || 0,
      isUnlocked: userProgress[6] >= 70,
      lessons: 10,
      estimatedTime: "4h",
      icon: TrendingUp,
      color: "from-red-500 to-red-600",
      description: "Life-threatening rhythm recognition"
    },
    {
      id: 8,
      title: "Electrolytes & Medications",
      category: "advanced",
      difficulty: "advanced",
      progress: userProgress[8] || 0,
      isUnlocked: userProgress[7] >= 70,
      lessons: 8,
      estimatedTime: "2.5h",
      icon: Stethoscope,
      color: "from-teal-400 to-cyan-500",
      description: "ECG effects of drugs and electrolytes"
    },
    {
      id: 9,
      title: "Junctional Rhythms",
      category: "arrhythmias",
      difficulty: "advanced",
      progress: userProgress[9] || 0,
      isUnlocked: userProgress[8] >= 70,
      lessons: 8,
      estimatedTime: "3h",
      icon: Eye,
      color: "from-orange-400 to-red-400",
      description: "Master advanced junctional patterns"
    },
    {
      id: 10,
      title: "Special Patterns & Advanced",
      category: "advanced",
      difficulty: "advanced",
      progress: userProgress[10] || 0,
      isUnlocked: userProgress[9] >= 70,
      lessons: 10,
      estimatedTime: "4h",
      icon: Sparkles,
      color: "from-indigo-400 to-purple-500",
      description: "Complex ECG patterns and expert topics"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-700';
      case 'intermediate': return 'bg-blue-100 text-blue-700';
      case 'advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const handleModuleClick = (module: Module) => {
    if (module.isUnlocked) {
      onModuleClick(module.id);
    }
  };

  useEffect(() => {
    setAnimationDelay(100);
  }, []);

  return (
    <div className="w-full space-y-8">
      {/* Section Header */}
      <div className="text-center space-y-4 animate-fade-in mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
          ECG Learning Journey
        </h2>
      </div>

      {/* Learning Path Progress Overview */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 mb-8">
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Journey Progress</h3>
              <p className="text-sm text-gray-600">
                {Object.values(userProgress).filter(p => p >= 100).length} of {modules.length} modules mastered
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">
                {Math.round(Object.values(userProgress).reduce((acc, val) => acc + val, 0) / modules.length)}%
              </div>
              <div className="text-xs text-gray-500">Complete</div>
            </div>
          </div>
          <Progress 
            value={Object.values(userProgress).reduce((acc, val) => acc + val, 0) / modules.length} 
            className="h-2"
          />
        </CardContent>
      </Card>

      {/* Duolingo-Style Learning Map */}
      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-8">
        {/* SVG Path Background */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          style={{ height: `${modules.length * 120 + 100}px` }}
          viewBox={`0 0 400 ${modules.length * 120 + 100}`}
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          
          {/* Main learning path - winding road */}
          <path
            d={`M 200 50 
                Q 300 100 200 150
                Q 100 200 200 250  
                Q 300 300 200 350
                Q 100 400 200 450
                Q 300 500 200 550
                Q 100 600 200 650
                Q 300 700 200 750
                Q 100 800 200 850
                Q 300 900 200 950
                L 200 ${modules.length * 120 + 50}`}
            stroke="url(#pathGradient)"
            strokeWidth="4"
            fill="none"
            strokeDasharray="8,4"
            className="learning-path-flow"
          />
        </svg>

        {/* Module Nodes */}
        <div className="relative z-10 space-y-8 py-8">
          {modules.map((module, index) => {
            const IconComponent = module.icon;
            const isCompleted = module.progress >= 100;
            const isInProgress = module.progress > 0 && module.progress < 100;
            const isNext = index === 0 || modules[index - 1].progress >= 70;
            const isLocked = !module.isUnlocked;

            // Calculate position for zigzag pattern
            const isEven = index % 2 === 0;
            const translateX = isEven ? 'translate-x-0' : 'translate-x-8 sm:translate-x-16';
            
            return (
              <div 
                key={module.id}
                className={`flex ${isEven ? 'justify-center sm:justify-start' : 'justify-center sm:justify-end'} animate-slide-in-up`}
                style={{
                  animationDelay: `${index * 200}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Module Node Container */}
                <div 
                  className={`relative group cursor-pointer transition-all duration-300 map-node ${
                    module.isUnlocked ? 'hover:scale-110' : 'cursor-not-allowed'
                  }`}
                  onClick={() => handleModuleClick(module)}
                >
                  {/* Connection Line to Previous Module (except first) */}
                  {index > 0 && (
                    <div className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 h-8 w-0.5 ${
                      modules[index - 1].progress >= 70 ? 'bg-green-400' : 'bg-gray-300'
                    }`} />
                  )}

                  {/* Main Module Circle */}
                  <div className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-white font-bold shadow-lg transition-all duration-300 ${
                    isCompleted ? 'bg-gradient-to-br from-green-400 to-green-600 ring-4 ring-green-200' :
                    isInProgress ? 'bg-gradient-to-br from-blue-400 to-blue-600 ring-4 ring-blue-200' :
                    isNext ? `bg-gradient-to-br ${module.color} ring-4 ring-blue-200 animate-pulse` :
                    isLocked ? 'bg-gradient-to-br from-gray-400 to-gray-500' :
                    `bg-gradient-to-br ${module.color}`
                  }`}>
                    
                    {/* Status Indicator */}
                    <div className="absolute -top-2 -right-2 z-10">
                      {isCompleted ? (
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                      ) : isLocked ? (
                        <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center shadow-lg">
                          <Lock className="w-5 h-5 text-white" />
                        </div>
                      ) : isNext ? (
                        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                          <Star className="w-5 h-5 text-white" />
                        </div>
                      ) : null}
                    </div>

                    {/* Module Icon */}
                    <IconComponent className="w-8 h-8 sm:w-10 sm:h-10" />
                    
                    {/* Progress Ring */}
                    {module.progress > 0 && (
                      <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                        <circle
                          cx="50%"
                          cy="50%"
                          r="45%"
                          stroke="rgba(255,255,255,0.3)"
                          strokeWidth="3"
                          fill="none"
                        />
                        <circle
                          cx="50%"
                          cy="50%"
                          r="45%"
                          stroke="white"
                          strokeWidth="3"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 45} ${2 * Math.PI * 45}`}
                          strokeDashoffset={`${2 * Math.PI * 45 * (1 - module.progress / 100)}`}
                          className="transition-all duration-500"
                        />
                      </svg>
                    )}
                  </div>

                  {/* Module Info Card */}
                  <div className={`absolute top-full mt-4 left-1/2 transform -translate-x-1/2 sm:${isEven ? 'left-full sm:ml-4 sm:translate-x-0' : 'right-full sm:mr-4 sm:translate-x-0'} sm:top-1/2 sm:transform sm:-translate-y-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto z-20`}>
                    <Card className="w-72 sm:w-64 bg-white shadow-xl border-2 border-blue-100">
                      <CardContent className="p-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <h4 className="font-bold text-gray-800 text-sm">{module.title}</h4>
                            <Badge className={`text-xs ${getDifficultyColor(module.difficulty)}`}>
                              {module.difficulty}
                            </Badge>
                          </div>
                          
                          <p className="text-xs text-gray-600 line-clamp-2">
                            {module.description}
                          </p>
                          
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>{module.lessons} lessons</span>
                            <span>{module.estimatedTime}</span>
                          </div>

                          {module.isUnlocked && (
                            <div className="space-y-1">
                              <div className="flex justify-between text-xs">
                                <span className="text-gray-600">Progress</span>
                                <span className="text-blue-600 font-medium">{module.progress}%</span>
                              </div>
                              <Progress value={module.progress} className="h-1.5" />
                            </div>
                          )}

                          {/* Action Indicator */}
                          <div className="pt-2 text-center">
                            <div className={`text-xs font-medium px-2 py-1 rounded ${
                              isCompleted ? 'bg-green-100 text-green-700' :
                              isInProgress ? 'bg-blue-100 text-blue-700' :
                              isNext ? 'bg-yellow-100 text-yellow-700' :
                              isLocked ? 'bg-gray-100 text-gray-500' :
                              'bg-blue-50 text-blue-600'
                            }`}>
                              {isCompleted ? '✓ Completed' :
                               isInProgress ? '📚 Continue' :
                               isNext ? '⭐ Start Here' :
                               isLocked ? '🔒 Locked' :
                               '🚀 Available'}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Journey Complete Badge */}
        {Object.values(userProgress).filter(p => p >= 100).length === modules.length && (
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8">
            <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white shadow-xl animate-bounce">
              <div className="text-center">
                <Crown className="w-8 h-8 mx-auto mb-1" />
                <div className="text-xs font-bold">ECG MASTER</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Journey Tips */}
      <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200">
        <CardContent className="p-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <h3 className="font-semibold text-amber-800">Journey Guide</h3>
          </div>
          <p className="text-sm text-amber-700">
            Follow the winding path to ECG mastery! Complete each module with 70% or higher to unlock the next stage. Hover over modules to see details.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ECGLearningRoadmap;
