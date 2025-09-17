import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BookOpen, Zap, Target, TrendingUp, Trophy, CheckCircle, Circle, Lock, PlayCircle, Brain, Clock, RefreshCcw, Loader2 } from 'lucide-react';
import { LearningModule, ModuleProgress, UserLearningProfile, ModuleCategory } from '@/types/learning';

interface ECGRoadmapProps {
  modules: LearningModule[];
  progress: Record<string, ModuleProgress>;
  userProfile: UserLearningProfile | null;
  onModuleSelect: (module: LearningModule) => void;
  onModuleSync?: (module: LearningModule) => Promise<void>;
}

const categoryConfig = {
  fundamentals: { 
    title: 'Fundamentals', 
    icon: BookOpen, 
    color: 'bg-blue-500',
    description: 'Master the basics',
    modules: ['ECG Fundamentals', 'Normal Sinus Rhythm & Variants', 'Intervals & Measurements', 'Axis & Lead Analysis']
  },
  arrhythmias: { 
    title: 'Arrhythmias', 
    icon: Zap, 
    color: 'bg-red-500',
    description: 'Heart rhythm disorders',
    modules: ['Atrial Arrhythmias', 'Junctional & Ventricular Arrhythmias']
  },
  ischemia: { 
    title: 'Ischemia', 
    icon: Target, 
    color: 'bg-orange-500',
    description: 'Cardiac ischemia',
    modules: ['Ischemia & Infarction']
  },
  conduction: { 
    title: 'Conduction', 
    icon: TrendingUp, 
    color: 'bg-green-500',
    description: 'Electrical conduction',
    modules: ['AV Blocks & Conduction']
  },
  advanced: { 
    title: 'Advanced', 
    icon: Trophy, 
    color: 'bg-purple-500',
    description: 'Complex cases',
    modules: ['Chamber Enlargement & Hypertrophy', 'Special Situations & Advanced Topics']
  }
};

const curriculumRoadmap = [
  { title: 'ECG Fundamentals', category: 'fundamentals', difficulty: 'beginner', order: 1, estimatedTime: 150 },
  { title: 'Normal Sinus Rhythm & Variants', category: 'fundamentals', difficulty: 'beginner', order: 2, estimatedTime: 150 },
  { title: 'Intervals & Measurements', category: 'fundamentals', difficulty: 'intermediate', order: 3, estimatedTime: 150 },
  { title: 'Axis & Lead Analysis', category: 'fundamentals', difficulty: 'intermediate', order: 4, estimatedTime: 150 },
  { title: 'Atrial Arrhythmias', category: 'arrhythmias', difficulty: 'intermediate', order: 5, estimatedTime: 150 },
  { title: 'Junctional & Ventricular Arrhythmias', category: 'arrhythmias', difficulty: 'advanced', order: 6, estimatedTime: 150 },
  { title: 'AV Blocks & Conduction', category: 'conduction', difficulty: 'advanced', order: 7, estimatedTime: 150 },
  { title: 'Ischemia & Infarction', category: 'ischemia', difficulty: 'advanced', order: 8, estimatedTime: 150 },
  { title: 'Chamber Enlargement & Hypertrophy', category: 'advanced', difficulty: 'advanced', order: 9, estimatedTime: 150 },
  { title: 'Special Situations & Advanced Topics', category: 'advanced', difficulty: 'advanced', order: 10, estimatedTime: 150 }
];

export default function ECGRoadmap({ modules, progress, onModuleSelect, onModuleSync }: ECGRoadmapProps) {
  const [syncingId, setSyncingId] = useState<string | null>(null);
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">ECG Mastery Roadmap</h2>
        <p className="text-gray-600">Track your progress and master ECG interpretation</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Brain className="w-5 h-5" />
            <span>ECG Mastery Roadmap</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="text-sm text-gray-600 mb-4">
              Progress through our comprehensive 10-module ECG curriculum. Each module contains 10 lessons for systematic learning.
            </div>
            <div className="grid gap-4">
              {curriculumRoadmap.map((moduleInfo, index) => {
                const module = modules.find(m => m.title === moduleInfo.title);
                const moduleProgress = module ? progress[module.id] : null;
                const isCompleted = moduleProgress?.status === 'completed';
                const isInProgress = moduleProgress?.status === 'in-progress';
                const isUnlocked = module?.unlocked || false;
                const config = categoryConfig[moduleInfo.category as ModuleCategory];
                return (
                  <div key={index} className="relative">
                    {/* Connection line to next module */}
                    {index < curriculumRoadmap.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-8 bg-gray-200"></div>
                    )}
                    <div 
                      className={`flex items-center space-x-4 p-4 rounded-lg border transition-all ${
                        isCompleted ? 'bg-green-50 border-green-200' :
                        isInProgress ? 'bg-blue-50 border-blue-200' :
                        isUnlocked ? 'bg-white border-gray-200 hover:border-gray-300 cursor-pointer' :
                        'bg-gray-50 border-gray-100'
                      }`}
                      onClick={() => module && isUnlocked && onModuleSelect(module)}
                    >
                      <div className="flex-shrink-0">
                        {isCompleted ? (
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        ) : isInProgress ? (
                          <PlayCircle className="w-6 h-6 text-blue-500" />
                        ) : isUnlocked ? (
                          <Circle className="w-6 h-6 text-gray-400" />
                        ) : (
                          <Lock className="w-6 h-6 text-gray-300" />
                        )}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center space-x-2 mb-1">
                          <div className={`w-3 h-3 rounded-full ${config.color}`}></div>
                          <span className="font-semibold text-sm">{moduleInfo.title}</span>
                          <Badge variant={moduleInfo.difficulty === 'beginner' ? 'default' : 
                                        moduleInfo.difficulty === 'intermediate' ? 'secondary' : 'destructive'}>
                            {moduleInfo.difficulty}
                          </Badge>
                        </div>
                        <div className="text-xs text-gray-600 mb-2">
                          Module {moduleInfo.order} • {config.title} • ~{Math.round(moduleInfo.estimatedTime / 60)}h
                        </div>
                        {moduleProgress && (
                          <div className="space-y-1">
                            <div className="flex justify-between text-xs">
                              <span>Lessons: {moduleProgress.completedLessons}/{moduleProgress.totalLessons}</span>
                              <span>{Math.round((moduleProgress.completedLessons / moduleProgress.totalLessons) * 100)}%</span>
                            </div>
                            <Progress 
                              value={(moduleProgress.completedLessons / moduleProgress.totalLessons) * 100} 
                              className="h-1" 
                            />
                          </div>
                        )}
                      </div>
                      {/* Sync/refresh icon for unlocked modules */}
                      {isUnlocked && onModuleSync && module && (
                        <button
                          className="ml-2 p-1 rounded-full hover:bg-gray-100 focus:outline-none"
                          title="Sync module data"
                          onClick={async e => {
                            e.stopPropagation();
                            setSyncingId(module.id);
                            try {
                              await onModuleSync(module);
                            } finally {
                              setSyncingId(null);
                            }
                          }}
                          disabled={syncingId === module.id}
                        >
                          {syncingId === module.id ? (
                            <Loader2 className="w-4 h-4 animate-spin text-blue-500" />
                          ) : (
                            <RefreshCcw className="w-4 h-4 text-gray-400 hover:text-blue-500" />
                          )}
                        </button>
                      )}
                      <div className="flex-shrink-0 text-right">
                        {isCompleted && (
                          <div className="text-xs text-green-600 font-semibold">
                            <Trophy className="w-4 h-4 inline mr-1" />
                            Mastered
                          </div>
                        )}
                        {isInProgress && (
                          <div className="text-xs text-blue-600 font-semibold">
                            <Clock className="w-4 h-4 inline mr-1" />
                            Learning
                          </div>
                        )}
                        {!isUnlocked && (
                          <div className="text-xs text-gray-400">
                            Locked
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
