import React, { useState, useEffect } from 'react';
import { CheckCircle, Star, Zap, Gift } from 'lucide-react';

interface TaskCompletionAnimationProps {
  show: boolean;
  xpEarned: number;
  gemsEarned: number;
  taskTitle: string;
  completionMessage: string;
  onAnimationComplete: () => void;
  duration?: number; // Duration in milliseconds
}

export const TaskCompletionAnimation: React.FC<TaskCompletionAnimationProps> = ({
  show,
  xpEarned,
  gemsEarned,
  taskTitle,
  completionMessage,
  onAnimationComplete,
  duration = 3000
}) => {
  const [animationPhase, setAnimationPhase] = useState<'hidden' | 'enter' | 'show' | 'exit'>('hidden');

  useEffect(() => {
    if (show) {
      // Phase 1: Enter animation
      setAnimationPhase('enter');
      
      // Phase 2: Show content
      setTimeout(() => setAnimationPhase('show'), 300);
      
      // Phase 3: Exit animation
      setTimeout(() => setAnimationPhase('exit'), duration - 500);
      
      // Phase 4: Complete and hide
      setTimeout(() => {
        setAnimationPhase('hidden');
        onAnimationComplete();
      }, duration);
    } else {
      setAnimationPhase('hidden');
    }
  }, [show, duration, onAnimationComplete]);

  if (animationPhase === 'hidden') {
    return null;
  }

  const getAnimationClasses = () => {
    switch (animationPhase) {
      case 'enter':
        return 'scale-0 opacity-0 rotate-180';
      case 'show':
        return 'scale-100 opacity-100 rotate-0';
      case 'exit':
        return 'scale-75 opacity-0 translate-y-4';
      default:
        return 'scale-0 opacity-0';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 pointer-events-none">
      
      {/* Floating particles/stars */}
      {animationPhase === 'show' && (
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float-star"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              ⭐
            </div>
          ))}
        </div>
      )}

      <div className={`transform transition-all duration-500 ease-out ${getAnimationClasses()}`}>
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl shadow-2xl p-8 max-w-md mx-4 text-center border-4 border-gradient-to-r from-green-400 to-blue-500 relative overflow-hidden">
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 text-4xl animate-float-up">💫</div>
            <div className="absolute top-6 right-6 text-3xl animate-glow-pulse">⭐</div>
            <div className="absolute bottom-6 left-6 text-3xl animate-celebration-bounce delay-300">🎉</div>
            <div className="absolute bottom-4 right-4 text-4xl animate-zoom-celebration delay-500">✨</div>
          </div>

          {/* Success Icon with Enhanced Animation */}
          <div className="relative mb-6 z-10">
            <div className="relative">
              <CheckCircle className="w-24 h-24 text-green-500 mx-auto animate-celebration-bounce" />
              <div className="absolute inset-0 w-24 h-24 mx-auto">
                <div className="w-full h-full bg-green-400 rounded-full animate-ping opacity-30"></div>
              </div>
              <div className="absolute inset-0 w-24 h-24 mx-auto animate-spin-slow">
                <div className="w-full h-full border-4 border-yellow-400 border-t-transparent rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Hooray Message */}
          <div className="mb-4 z-10 relative">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2 animate-celebration-bounce">
              HOORAY! 🎉
            </h2>
            <div className="text-2xl font-bold text-green-600 animate-glow-pulse">
              TASK COMPLETED! ⭐
            </div>
          </div>

          {/* Task Title with Better Styling */}
          <div className="mb-4 z-10 relative">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 bg-white bg-opacity-80 rounded-lg p-2">
              {taskTitle}
            </h3>
          </div>

          {/* Enhanced Completion Message */}
          <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-xl p-4 mb-6 z-10 relative border-2 border-blue-200">
            <p className="text-blue-800 font-medium text-lg leading-relaxed">
              {completionMessage}
            </p>
          </div>

          {/* Enhanced Rewards Display */}
          <div className="flex justify-center space-x-3 mb-6 z-10 relative">
            
            {/* XP Reward with Animation */}
            <div className="flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full px-6 py-3 transform hover:scale-110 transition-all duration-300 shadow-lg">
              <Zap className="w-6 h-6 mr-2 animate-pulse" />
              <span className="font-bold text-lg">+{xpEarned} XP</span>
            </div>

            {/* Gems Reward with Animation */}
            <div className="flex items-center bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full px-6 py-3 transform hover:scale-110 transition-all duration-300 shadow-lg">
              <Gift className="w-6 h-6 mr-2 animate-pulse" />
              <span className="font-bold text-lg">+{gemsEarned} Gems</span>
            </div>
          </div>

          {/* Enhanced Continue Learning Message */}
          <div className="z-10 relative">
            <div className="text-green-600 font-bold text-xl animate-pulse bg-green-50 rounded-lg p-3 border-2 border-green-200">
              Continue Learning! 🚀
            </div>
            <div className="text-sm text-gray-600 mt-2 italic">
              "Every task completed makes you stronger! 💪"
            </div>
          </div>

          {/* Enhanced Progress Indicator */}
          <div className="mt-6 z-10 relative">
            <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
              <div 
                className="bg-gradient-to-r from-green-400 via-blue-400 to-green-600 h-3 rounded-full animate-pulse shadow-lg"
                style={{ width: '100%' }}
              ></div>
            </div>
            <div className="text-xs text-gray-600 mt-1 font-medium">
              Task Progress: 100% Complete! ✅
            </div>
          </div>

        </div>
      </div>

      {/* CSS for floating star animation */}
      <style>{`
        @keyframes float-star {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-20px) scale(1.2);
            opacity: 1;
          }
        }
        .animate-float-star {
          animation: float-star ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default TaskCompletionAnimation;
