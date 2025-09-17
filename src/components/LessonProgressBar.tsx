import React from 'react';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { Heart, Star, Flame, Trophy } from 'lucide-react';

interface LessonProgressBarProps {
  currentStep: number;
  totalSteps: number;
  hearts: number;
  maxHearts: number;
  score: number;
  streak: number;
  className?: string;
}

const LessonProgressBar: React.FC<LessonProgressBarProps> = ({
  currentStep,
  totalSteps,
  hearts,
  maxHearts,
  score,
  streak,
  className = ""
}) => {
  const progressPercentage = (currentStep / totalSteps) * 100;
  const heartPercentage = (hearts / maxHearts) * 100;

  return (
    <div className={`bg-white border-b border-gray-200 px-4 py-3 ${className}`}>
      {/* Top Row: Progress and Hearts */}
      <div className="flex items-center justify-between mb-3">
        {/* Progress Section */}
        <div className="flex-1 mr-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm font-medium text-gray-600">
              Progress
            </span>
            <span className="text-sm font-bold text-gray-800">
              {currentStep}/{totalSteps}
            </span>
          </div>
          
          <div className="relative">
            <Progress 
              value={progressPercentage} 
              className="h-3 bg-gray-200"
            />
            
            {/* Animated progress fill */}
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            
            {/* Step markers */}
            {Array.from({ length: totalSteps }).map((_, index) => (
              <motion.div
                key={index}
                className={`absolute top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full border-2 ${
                  index < currentStep 
                    ? 'bg-green-500 border-green-500' 
                    : index === currentStep
                    ? 'bg-white border-green-500'
                    : 'bg-white border-gray-300'
                }`}
                style={{ left: `${(index / (totalSteps - 1)) * 100}%`, marginLeft: '-6px' }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.1 }}
              />
            ))}
          </div>
        </div>

        {/* Hearts Section */}
        <div className="flex items-center gap-1">
          {Array.from({ length: maxHearts }).map((_, index) => (
            <motion.div
              key={index}
              animate={index < hearts ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              <Heart 
                className={`w-6 h-6 ${
                  index < hearts 
                    ? 'text-red-500 fill-current' 
                    : 'text-gray-300'
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Row: Stats */}
      <div className="flex items-center justify-between">
        {/* Score */}
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-yellow-500" />
          <span className="text-sm font-semibold text-gray-700">
            {score.toLocaleString()}
          </span>
        </div>

        {/* Streak */}
        {streak > 0 && (
          <motion.div 
            className="flex items-center gap-2"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5 }}
          >
            <Flame className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-semibold text-orange-600">
              {streak} streak
            </span>
          </motion.div>
        )}

        {/* Completion Indicator */}
        {progressPercentage === 100 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex items-center gap-2"
          >
            <Trophy className="w-5 h-5 text-purple-500" />
            <span className="text-sm font-semibold text-purple-600">
              Complete!
            </span>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default LessonProgressBar;
