import React, { useState, useEffect } from 'react';
import { Trophy, Star, Heart, Zap, Gift } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import StarRating from '@/components/StarRating';

interface LessonCompletionProps {
  lessonTitle: string;
  totalXP: number;
  totalGems: number;
  score: number;
  timeSpent: number; // in seconds
  tasksCompleted: number;
  totalTasks: number;
  onContinue: () => void;
  showAnimation?: boolean;
}

export const LessonCompletion: React.FC<LessonCompletionProps> = ({
  lessonTitle,
  totalXP,
  totalGems,
  score,
  timeSpent,
  tasksCompleted,
  totalTasks,
  onContinue,
  showAnimation = true
}) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showElements, setShowElements] = useState(false);
  const [starRating, setStarRating] = useState(0);

  useEffect(() => {
    if (showAnimation) {
      // Start confetti animation
      setShowConfetti(true);
      
      // Show elements with delay
      setTimeout(() => setShowElements(true), 500);
      
      // Remove confetti after animation
      setTimeout(() => setShowConfetti(false), 3000);
    } else {
      setShowElements(true);
    }
  }, [showAnimation]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getPerformanceMessage = () => {
    if (score >= 95) return "PERFECT! 🌟";
    if (score >= 90) return "EXCELLENT! 🎯";
    if (score >= 80) return "GREAT JOB! 👏";
    if (score >= 70) return "WELL DONE! 💪";
    return "GOOD EFFORT! 🔥";
  };

  const getScoreColor = () => {
    if (score >= 95) return "text-yellow-600";
    if (score >= 90) return "text-green-600";
    if (score >= 80) return "text-blue-600";
    if (score >= 70) return "text-blue-600";
    return "text-purple-600";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-3 sm:p-4">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      <Card className="w-full max-w-xs sm:max-w-sm mx-auto bg-white shadow-2xl border-4 border-yellow-300 animate-zoom-celebration max-h-[85vh] sm:max-h-[90vh] overflow-y-auto">
        <CardContent className="p-3 sm:p-4 text-center space-y-2 sm:space-y-3">
          
          {/* Trophy and Title - Compact */}
          <div className={`transform transition-all duration-1000 ${
            showElements ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <div className={`relative ${
              showElements ? 'animate-celebration-bounce' : ''
            }`}>
              <Trophy className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-500 mx-auto animate-zoom-celebration" />
            </div>
            
            <h1 className="text-lg sm:text-2xl font-bold text-gray-800 animate-celebration-bounce mb-1">
              LESSON COMPLETED! 🏆
            </h1>
            
            <p className="text-xs sm:text-sm text-gray-600 leading-tight">
              {lessonTitle}
            </p>
          </div>

          {/* Performance Message - Compact */}
          <div className={`transform transition-all duration-1000 delay-200 ${
            showElements ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <h2 className={`text-base sm:text-xl font-bold ${getScoreColor()} animate-glow-pulse`}>
              {getPerformanceMessage()}
            </h2>
          </div>

          {/* Stats Grid - Mobile Optimized */}
          <div className={`grid grid-cols-2 gap-1.5 sm:gap-2 transform transition-all duration-1000 delay-300 ${
            showElements ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            
            {/* Score */}
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg p-2 sm:p-3 transform hover:scale-105 transition-all duration-300">
              <Star className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-600 mx-auto mb-1" />
              <div className="text-sm sm:text-lg font-bold text-yellow-800">{score}%</div>
              <div className="text-xs text-yellow-700">Score</div>
            </div>

            {/* XP Earned */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-2 sm:p-3 transform hover:scale-105 transition-all duration-300">
              <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600 mx-auto mb-1" />
              <div className="text-sm sm:text-lg font-bold text-blue-800">+{totalXP}</div>
              <div className="text-xs text-blue-700">XP Earned</div>
            </div>

            {/* Gems Earned */}
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-2 sm:p-3 transform hover:scale-105 transition-all duration-300">
              <Gift className="w-4 h-4 sm:w-6 sm:h-6 text-purple-600 mx-auto mb-1" />
              <div className="text-sm sm:text-lg font-bold text-purple-800">+{totalGems}</div>
              <div className="text-xs text-purple-700">Gems Earned</div>
            </div>

            {/* Time */}
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-2 sm:p-3 transform hover:scale-105 transition-all duration-300">
              <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-green-600 mx-auto mb-1" />
              <div className="text-sm sm:text-lg font-bold text-green-800">{formatTime(timeSpent)}</div>
              <div className="text-xs text-green-700">Time</div>
            </div>
          </div>

          {/* Heart Restoration & Star Rating - Compact */}
          <div className={`transform transition-all duration-1000 delay-400 ${
            showElements ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            {/* Heart Restoration Message */}
            <div className="bg-gradient-to-r from-pink-100 to-red-100 rounded-lg p-2 sm:p-3 border-2 border-pink-300 mb-2 sm:mb-3">
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-red-500 fill-red-500 animate-pulse" />
                <span className="text-sm sm:text-lg font-bold text-gray-800">All Hearts Restored!</span>
                <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-red-500 fill-red-500 animate-pulse" />
              </div>
              <p className="text-center text-gray-700 font-medium text-xs sm:text-sm">
                {score >= 95 ? "Perfect performance! 💯" : score >= 80 ? "Excellent work! 🌟" : "Great effort! 👏"}
              </p>
            </div>

            {/* Star Rating */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-2 sm:p-3 border-2 border-yellow-300">
              <h3 className="text-sm sm:text-base font-bold text-gray-800 mb-1 sm:mb-2 text-center">Rate This Lesson</h3>
              <div className="flex justify-center mb-1 sm:mb-2">
                <StarRating 
                  rating={starRating} 
                  setRating={setStarRating}
                  size="sm" 
                />
              </div>
              {starRating > 0 && (
                <p className="text-center text-green-600 font-medium text-xs sm:text-sm animate-fade-in">
                  Thank you for your {starRating}-star rating! 🌟
                </p>
              )}
            </div>
          </div>

          {/* Continue Button - Prominent */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            showElements ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <Button 
              onClick={onContinue}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-base transform transition-all duration-200 hover:scale-105 active:scale-95 animate-glow-pulse"
            >
              Continue to Next Lesson! 🚀
            </Button>
          </div>

          {/* Motivational Message - Compact */}
          <div className={`transform transition-all duration-1000 delay-600 ${
            showElements ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <p className="text-gray-600 text-xs sm:text-sm italic">
              "Every heartbeat is a step forward!"
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default LessonCompletion;
