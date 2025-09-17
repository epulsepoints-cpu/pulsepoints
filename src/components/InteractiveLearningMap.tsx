import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Activity, 
  Zap, 
  Timer, 
  Target, 
  Brain, 
  CheckCircle,
  Clock,
  Lock,
  Play,
  Star
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';

interface Module {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  estimatedTime: number;
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
  textColor: string;
  position: { x: number; y: number };
  prerequisites?: string[];
}

interface ModuleProgress {
  [key: string]: {
    completed: boolean;
    progress: number;
  };
}

interface InteractiveLearningMapProps {
  userProgress: ModuleProgress;
  onModuleSelect: (moduleId: string) => void;
}

// Interactive Learning Map Modules - Optimized for Engagement
const ECG_MODULES: Module[] = [
  {
    id: 'ecg-fundamentals',
    title: 'ECG Fundamentals',
    shortTitle: 'Basics',
    description: 'Learn ECG anatomy, leads, and basic interpretation',
    difficulty: 'beginner',
    estimatedTime: 45,
    icon: Heart,
    color: 'from-emerald-400 to-emerald-600',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-700',
    position: { x: 50, y: 20 }
  },
  {
    id: 'sinus-rhythms',
    title: 'Sinus Rhythms',
    shortTitle: 'Sinus',
    description: 'Master normal sinus rhythm and variations',
    difficulty: 'beginner',
    estimatedTime: 35,
    icon: Activity,
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700',
    position: { x: 50, y: 32 },
    prerequisites: ['ecg-fundamentals']
  },
  {
    id: 'rate-analysis',
    title: 'Rate Analysis',
    shortTitle: 'Rates',
    description: 'Calculate heart rate and rhythm assessment',
    difficulty: 'intermediate',
    estimatedTime: 30,
    icon: Timer,
    color: 'from-purple-400 to-purple-600',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-700',
    position: { x: 50, y: 44 },
    prerequisites: ['sinus-rhythms']
  },
  {
    id: 'atrial-rhythms',
    title: 'Atrial Rhythms',
    shortTitle: 'Atrial',
    description: 'A-fib, A-flutter, and SVT recognition',
    difficulty: 'intermediate',
    estimatedTime: 40,
    icon: Zap,
    color: 'from-orange-400 to-orange-600',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-700',
    position: { x: 50, y: 56 },
    prerequisites: ['rate-analysis']
  },
  {
    id: 'junctional-rhythms',
    title: 'Junctional Rhythms',
    shortTitle: 'Junction',
    description: 'AV junctional rhythms and escape beats',
    difficulty: 'intermediate',
    estimatedTime: 25,
    icon: Target,
    color: 'from-indigo-400 to-indigo-600',
    bgColor: 'bg-indigo-50',
    textColor: 'text-indigo-700',
    position: { x: 50, y: 68 },
    prerequisites: ['atrial-rhythms']
  },
  {
    id: 'ventricular-rhythms',
    title: 'Ventricular Rhythms',
    shortTitle: 'V-Rhythms',
    description: 'Life-threatening V-tach and V-fib',
    difficulty: 'advanced',
    estimatedTime: 50,
    icon: Brain,
    color: 'from-red-400 to-red-600',
    bgColor: 'bg-red-50',
    textColor: 'text-red-700',
    position: { x: 50, y: 80 },
    prerequisites: ['junctional-rhythms']
  }
];

// Connection Path Component with Enhanced Styling
const ConnectionPath = ({ from, to, isUnlocked }: { 
  from: { x: number; y: number }, 
  to: { x: number; y: number }, 
  isUnlocked: boolean 
}) => {
  const pathColor = isUnlocked ? "#10b981" : "#e5e7eb";
  
  return (
    <motion.line
      x1={`${from.x}%`}
      y1={`${from.y}%`}
      x2={`${to.x}%`}
      y2={`${to.y}%`}
      stroke={pathColor}
      strokeWidth="4"
      strokeDasharray={isUnlocked ? "0" : "8,8"}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: isUnlocked ? 1 : 0.5 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="drop-shadow-sm"
      style={{
        filter: isUnlocked ? 'drop-shadow(0 2px 4px rgba(16, 185, 129, 0.3))' : 'none'
      }}
    />
  );
};

// Module Node Component with Enhanced Engagement
const ModuleNode = ({ 
  module, 
  progress, 
  isUnlocked, 
  onSelect 
}: { 
  module: Module, 
  progress: { completed: boolean; progress: number },
  isUnlocked: boolean,
  onSelect: (moduleId: string) => void
}) => {
  const Icon = module.icon;
  
  const getStatusIcon = () => {
    if (progress.completed) return CheckCircle;
    if (progress.progress > 0) return Clock;
    if (!isUnlocked) return Lock;
    return Play;
  };
  
  const StatusIcon = getStatusIcon();
  
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: parseFloat(module.id.slice(-1)) * 0.15,
        type: "spring",
        stiffness: 400,
        damping: 15
      }}
      className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
      style={{ 
        left: `${module.position.x}%`, 
        top: `${module.position.y}%` 
      }}
      onClick={() => isUnlocked && onSelect(module.id)}
      whileHover={isUnlocked ? { scale: 1.15, y: -5 } : {}}
      whileTap={isUnlocked ? { scale: 0.95 } : {}}
    >
      {/* Enhanced glow effect for unlocked modules */}
      {isUnlocked && (
        <motion.div
          className={`absolute inset-0 rounded-full bg-gradient-to-r ${module.color} opacity-30 blur-xl`}
          animate={{ 
            scale: [1, 1.4, 1], 
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      )}
      
      {/* Pulse animation for available modules */}
      {isUnlocked && !progress.completed && (
        <motion.div
          className={`absolute inset-0 rounded-full bg-gradient-to-r ${module.color} opacity-20`}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
      )}
      
      {/* Main module circle with enhanced styling */}
      <div className={`
        relative w-20 h-20 md:w-24 md:h-24 rounded-full 
        ${isUnlocked 
          ? `bg-gradient-to-br ${module.color} shadow-2xl` 
          : 'bg-gradient-to-br from-gray-200 to-gray-300 shadow-lg'
        }
        flex items-center justify-center
        ${isUnlocked ? 'border-3 border-white' : 'border-3 border-gray-300'}
        transition-all duration-300 backdrop-blur-sm
        ${progress.completed ? 'ring-4 ring-green-400 ring-opacity-50' : ''}
      `}>
        <Icon className={`
          w-8 h-8 md:w-10 md:h-10 
          ${isUnlocked ? 'text-white' : 'text-gray-400'}
          transition-all duration-300
        `} />
        
        {/* Enhanced status indicator */}
        <div className={`
          absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg
          ${progress.completed ? 'bg-green-500' : 
            progress.progress > 0 ? 'bg-blue-500' : 
            !isUnlocked ? 'bg-gray-400' : 'bg-emerald-500'}
          border-2 border-white
        `}>
          <StatusIcon className="w-4 h-4 text-white" />
        </div>
        
        {/* Enhanced progress ring */}
        {progress.progress > 0 && (
          <svg className="absolute inset-0 w-full h-full transform -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r="40%"
              fill="transparent"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="3"
            />
            <motion.circle
              cx="50%"
              cy="50%"
              r="40%"
              fill="transparent"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 40} ${2 * Math.PI * 40}`}
              initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
              animate={{ 
                strokeDashoffset: 2 * Math.PI * 40 * (1 - progress.progress / 100) 
              }}
              transition={{ duration: 1.5, delay: 0.5 }}
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(255,255,255,0.5))'
              }}
            />
          </svg>
        )}
        
        {/* Module title below the circle */}
        <div className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 text-center min-w-max">
          <h3 className="font-bold text-sm md:text-base text-gray-800 mb-1 px-2">
            {module.shortTitle}
          </h3>
          <Badge 
            variant="outline" 
            className={`${module.textColor} ${module.bgColor} border-0 shadow-sm text-xs`}
          >
            {module.difficulty}
          </Badge>
        </div>
      </div>
      
      {/* Enhanced tooltip with better positioning */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        whileHover={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute top-full mt-16 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none group-hover:pointer-events-auto"
      >
        <Card className="w-64 shadow-2xl border-0 bg-white/95 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="text-center">
              <h3 className="font-bold text-base mb-2 text-gray-900">{module.title}</h3>
              <p className="text-sm text-gray-600 mb-3 leading-relaxed">{module.description}</p>
              
              <div className="flex justify-between items-center text-sm mb-3">
                <div className="flex items-center gap-1 text-gray-500">
                  <Timer className="w-4 h-4" />
                  <span>{module.estimatedTime}m</span>
                </div>
                {isUnlocked && (
                  <div className="flex items-center gap-1 text-emerald-600">
                    <Play className="w-4 h-4" />
                    <span className="font-medium">Start Learning</span>
                  </div>
                )}
              </div>
              
              {progress.progress > 0 && (
                <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                  <Progress value={progress.progress} className="h-2 mb-2" />
                  <p className="text-sm font-medium text-gray-700">
                    {progress.completed ? '🎉 Completed!' : `${progress.progress}% complete`}
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

// Main Interactive Learning Map Component
export const InteractiveLearningMap: React.FC<InteractiveLearningMapProps> = ({
  userProgress,
  onModuleSelect
}) => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);

  // Check if module is unlocked based on prerequisites
  const isModuleUnlocked = (module: Module): boolean => {
    if (!module.prerequisites || module.prerequisites.length === 0) {
      return true; // First module is always unlocked
    }
    
    return module.prerequisites.every(prereqId => 
      userProgress[prereqId]?.completed === true
    );
  };

  // Get overall progress statistics
  const getOverallProgress = () => {
    const completedModules = Object.values(userProgress).filter(p => p.completed).length;
    const totalModules = ECG_MODULES.length;
    const overallProgress = totalModules > 0 ? (completedModules / totalModules) * 100 : 0;
    
    return {
      completed: completedModules,
      total: totalModules,
      percentage: Math.round(overallProgress)
    };
  };

  const progress = getOverallProgress();

  return (
    <div className="relative w-full h-[700px] md:h-[800px] bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 rounded-2xl overflow-hidden border border-white/20 shadow-xl">
      {/* Header with enhanced styling */}
      <div className="relative z-10 p-6 md:p-8">
        <div className="text-center mb-6">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-3"
          >
            ECG Learning Journey
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-base md:text-lg"
          >
            Master ECG interpretation step by step
          </motion.p>
          
          {/* Enhanced Overall Progress */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 bg-white/80 backdrop-blur-md rounded-xl p-4 inline-block shadow-lg border border-white/30"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Star className="w-6 h-6 text-yellow-500" />
                <span className="font-bold text-gray-800 text-lg">
                  {progress.completed}/{progress.total} Modules
                </span>
              </div>
              <Progress value={progress.percentage} className="w-40 h-3" />
              <span className="text-base font-bold text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                {progress.percentage}%
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Map Container with better spacing */}
      <div className="relative w-full h-full px-4">
        {/* Enhanced connection paths */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-20">
          {ECG_MODULES.map((module, index) => {
            if (index === 0) return null; // First module has no connections
            
            const prevModule = ECG_MODULES[index - 1];
            const isUnlocked = isModuleUnlocked(module);
            
            return (
              <ConnectionPath
                key={`connection-${module.id}`}
                from={prevModule.position}
                to={module.position}
                isUnlocked={isUnlocked}
              />
            );
          })}
        </svg>

        {/* Module nodes with enhanced animations */}
        {ECG_MODULES.map((module) => {
          const moduleProgress = userProgress[module.id] || { completed: false, progress: 0 };
          const isUnlocked = isModuleUnlocked(module);
          
          return (
            <ModuleNode
              key={module.id}
              module={module}
              progress={moduleProgress}
              isUnlocked={isUnlocked}
              onSelect={(moduleId) => {
                setSelectedModule(moduleId);
                onModuleSelect(moduleId);
              }}
            />
          );
        })}
        
        {/* Enhanced floating legend */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/30"
        >
          <h4 className="font-bold text-base text-gray-800 mb-3 flex items-center gap-2">
            <Activity className="w-4 h-4 text-blue-500" />
            Status Guide
          </h4>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-gray-700">Completed</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-gray-700">In Progress</span>
            </div>
            <div className="flex items-center gap-3">
              <Play className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-medium text-gray-700">Available</span>
            </div>
            <div className="flex items-center gap-3">
              <Lock className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-medium text-gray-700">Locked</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};