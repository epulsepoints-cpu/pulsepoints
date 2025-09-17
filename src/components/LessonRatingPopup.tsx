import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { 
  Star, 
  ThumbsUp, 
  ThumbsDown, 
  MessageCircle, 
  ArrowRight,
  Trophy,
  Gem,
  Clock,
  Target
} from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface LessonRatingPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (rating: number, feedback?: string) => void;
  onContinue: () => void;
  lessonTitle: string;
  lessonScore: number;
  xpEarned: number;
  gemsEarned: number;
  timeSpent: number;
  hasNextLesson: boolean;
}

const LessonRatingPopup: React.FC<LessonRatingPopupProps> = ({
  isOpen,
  onClose,
  onSubmit,
  onContinue,
  lessonTitle,
  lessonScore,
  xpEarned,
  gemsEarned,
  timeSpent,
  hasNextLesson
}) => {
  const [rating, setRating] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleRatingClick = (value: number) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (rating === 0) {
      toast({
        title: "Please rate the lesson",
        description: "Select a star rating before submitting.",
        variant: "destructive"
      });
      return;
    }

    onSubmit(rating, feedback);
    setSubmitted(true);
    
    toast({
      title: "Thank you for your feedback!",
      description: "Your rating helps us improve the learning experience.",
    });
  };

  const handleContinue = () => {
    onContinue();
    onClose();
  };

  const getRatingText = (rating: number): string => {
    switch (rating) {
      case 1: return "Poor";
      case 2: return "Fair";
      case 3: return "Good";
      case 4: return "Very Good";
      case 5: return "Excellent";
      default: return "";
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-2 sm:p-4">
      <Card className="w-full max-w-xs sm:max-w-lg bg-white shadow-xl relative">
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-10 p-1 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <CardHeader className="text-center bg-gradient-to-r from-blue-50 to-purple-50 border-b pt-8 pb-4 sm:pt-6 sm:pb-4">
          <div className="flex items-center justify-center mb-2">
            <Trophy className="w-8 h-8 text-yellow-500" />
          </div>
          <CardTitle className="text-lg sm:text-xl font-bold text-gray-900">
            🎉 Lesson Completed!
          </CardTitle>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            "{lessonTitle}"
          </p>
        </CardHeader>
        <CardContent className="p-3 sm:p-6">
          {/* Stats Summary */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 p-3 rounded-lg text-center border border-blue-100">
              <Target className="w-5 h-5 mx-auto mb-1 text-blue-600" />
              <div className="text-lg font-bold text-blue-700">{lessonScore}%</div>
              <div className="text-xs text-blue-600">Score</div>
            </div>
            <div className="bg-green-50 p-3 rounded-lg text-center border border-green-100">
              <Clock className="w-5 h-5 mx-auto mb-1 text-green-600" />
              <div className="text-lg font-bold text-green-700">{timeSpent}min</div>
              <div className="text-xs text-green-600">Time</div>
            </div>
          </div>

          {/* Rewards */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg mb-6 border border-purple-100">
            <h3 className="font-semibold text-gray-900 mb-2 text-center">Rewards Earned</h3>
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-1">
                <Trophy className="w-5 h-5 text-yellow-500" />
                <span className="font-bold text-yellow-700">+{xpEarned} XP</span>
              </div>
              <div className="flex items-center gap-1">
                <Gem className="w-5 h-5 text-purple-500" />
                <span className="font-bold text-purple-700">+{gemsEarned} Gems</span>
              </div>
            </div>
          </div>

          {/* Rating Section */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3 text-center">
              How would you rate this lesson?
            </h3>
            
            <div className="flex items-center justify-center gap-2 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => handleRatingClick(star)}
                  className={`p-1 rounded-full transition-all hover:scale-110 ${
                    star <= rating ? 'text-yellow-500' : 'text-gray-300'
                  }`}
                >
                  <Star 
                    className={`w-8 h-8 ${
                      star <= rating ? 'fill-current' : ''
                    }`} 
                  />
                </button>
              ))}
            </div>
            
            {rating > 0 && (
              <div className="text-center">
                <Badge variant="outline" className="text-sm">
                  {getRatingText(rating)}
                </Badge>
              </div>
            )}
          </div>

          {/* Feedback Section */}
          {rating > 0 && (
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Additional Feedback (Optional)
              </h4>
              <Textarea
                placeholder="Share your thoughts about this lesson..."
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="min-h-[80px] resize-none"
              />
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            {!submitted ? (
              <>
                <Button
                  variant="outline"
                  onClick={onClose}
                  className="flex-1"
                >
                  Skip Rating
                </Button>
                <Button
                  onClick={handleSubmit}
                  disabled={rating === 0}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                >
                  Submit Rating
                </Button>
              </>
            ) : (
              <Button
                onClick={handleContinue}
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
              >
                {hasNextLesson ? (
                  <>
                    Continue to Next Lesson
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                ) : (
                  "Back to Module"
                )}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LessonRatingPopup;
