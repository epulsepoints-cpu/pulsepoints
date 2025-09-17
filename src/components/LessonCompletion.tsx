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
    if (score >= 90) return "OUTSTANDING! 🌟";
    if (score >= 80) return "EXCELLENT! 🎉";
    if (score >= 70) return "GREAT JOB! 👏";
    return "WELL DONE! 💪";
  };

  const getScoreColor = () => {
    if (score >= 90) return "text-yellow-600";
    if (score >= 80) return "text-green-600";
    if (score >= 70) return "text-blue-600";
    return "text-purple-600";
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti-fall text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              {['🎉', '⭐', '🎊', '✨', '🌟', '💫', '🏆'][Math.floor(Math.random() * 7)]}
            </div>
          ))}
        </div>
      )}

      <Card className={`max-w-2xl w-full mx-auto transform transition-all duration-700 ${
        showElements ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
      }`}>
        <CardContent className="p-8 text-center space-y-6">
          
          {/* Main Trophy and Title */}
          <div className="space-y-4">
            <div className={`transform transition-all duration-1000 ${
              showElements ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
            }`}>
              <Trophy className="w-20 h-20 text-yellow-500 mx-auto animate-zoom-celebration" />
            </div>
            
            <h1 className="text-4xl font-bold text-gray-800 animate-celebration-bounce">
              LESSON COMPLETED! 🏆
            </h1>
            
            <p className="text-xl text-gray-600">
              {lessonTitle}
            </p>
          </div>

          {/* Performance Message */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            showElements ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <h2 className={`text-3xl font-bold ${getScoreColor()} animate-glow-pulse`}>
              {getPerformanceMessage()}
            </h2>
          </div>

          {/* Stats Grid */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 transform transition-all duration-1000 delay-500 ${
            showElements ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            
            {/* Score */}
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-lg p-4 transform hover:scale-105 transition-all duration-300 animate-zoom-celebration">
              <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2 animate-glow-pulse" />
              <div className="text-2xl font-bold text-yellow-800">{score}%</div>
              <div className="text-sm text-yellow-700">Score</div>
            </div>

            {/* XP Earned */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-4 transform hover:scale-105 transition-all duration-300 animate-zoom-celebration delay-100">
              <Zap className="w-8 h-8 text-blue-600 mx-auto mb-2 animate-glow-pulse" />
              <div className="text-2xl font-bold text-blue-800">+{totalXP}</div>
              <div className="text-sm text-blue-700">XP Earned</div>
            </div>

            {/* Gems Earned */}
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-4 transform hover:scale-105 transition-all duration-300 animate-zoom-celebration delay-200">
              <Gift className="w-8 h-8 text-purple-600 mx-auto mb-2 animate-glow-pulse" />
              <div className="text-2xl font-bold text-purple-800">+{totalGems}</div>
              <div className="text-sm text-purple-700">Gems Earned</div>
            </div>

            {/* Time */}
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-4 transform hover:scale-105 transition-all duration-300 animate-zoom-celebration delay-300">
              <Heart className="w-8 h-8 text-green-600 mx-auto mb-2 animate-glow-pulse" />
              <div className="text-2xl font-bold text-green-800">{formatTime(timeSpent)}</div>
              <div className="text-sm text-green-700">Time</div>
            </div>
          </div>

          {/* Tasks Completed */}
          <div className={`transform transition-all duration-1000 delay-700 ${
            showElements ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="text-lg font-semibold text-gray-800 mb-2">
                Tasks Completed: {tasksCompleted}/{totalTasks}
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-300 rounded-full h-3 mb-2">
                <div 
                  className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-1000 animate-shimmer relative overflow-hidden"
                  style={{ width: `${(tasksCompleted / totalTasks) * 100}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
                </div>
              </div>
              
              <div className="text-sm text-gray-600">
                Amazing work! Your heart knowledge is beating strong! 💖
              </div>
            </div>
          </div>

          {/* Heart Restoration & Star Rating */}
          <div className={`transform transition-all duration-1000 delay-800 ${
            showElements ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            {/* Heart Restoration Message */}
            <div className="bg-gradient-to-r from-pink-100 to-red-100 rounded-lg p-6 border-2 border-pink-300 mb-4">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Heart className="w-8 h-8 text-red-500 fill-red-500 animate-pulse" />
                <span className="text-2xl font-bold text-gray-800">All Hearts Restored!</span>
                <Heart className="w-8 h-8 text-red-500 fill-red-500 animate-pulse" />
              </div>
              <p className="text-center text-gray-700 font-medium">
                {score >= 95 ? "Perfect performance! 💯" : score >= 80 ? "Excellent work! 🌟" : "Great effort! 👏"}
              </p>
            </div>

            {/* Star Rating */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border-2 border-yellow-300">
              <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">Rate This Lesson</h3>
              <div className="flex justify-center mb-3">
                <StarRating 
                  rating={starRating} 
                  setRating={setStarRating}
                  size="lg" 
                />
              </div>
              {starRating > 0 && (
                <p className="text-center text-green-600 font-medium animate-fade-in">
                  Thank you for your {starRating}-star rating! 🌟
                </p>
              )}
            </div>
          </div>

          {/* Continue Button */}
          <div className={`transform transition-all duration-1000 delay-1000 ${
            showElements ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <Button 
              onClick={onContinue}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-4 px-8 rounded-full text-lg transform transition-all duration-200 hover:scale-105 active:scale-95 animate-glow-pulse"
            >
              Continue Learning! 🚀
            </Button>
          </div>

          {/* Motivational Message */}
          <div className={`transform transition-all duration-1000 delay-1200 ${
            showElements ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <p className="text-gray-600 text-lg italic">
              "Every heartbeat is a step forward in your medical journey!"
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default LessonCompletion;
