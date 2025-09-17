import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Trophy, 
  Star, 
  Clock, 
  Target, 
  Share2, 
  Twitter, 
  Linkedin, 
  Facebook,
  Download,
  Copy,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { LessonCompletionData, CelebrationAnimation } from '@/types/learning';

interface LessonCompletionCelebrationProps {
  completionData: LessonCompletionData;
  onContinue: () => void;
  onClose: () => void;
  showRatingPrompt?: boolean;
}

const LessonCompletionCelebration: React.FC<LessonCompletionCelebrationProps> = ({
  completionData,
  onContinue,
  onClose,
  showRatingPrompt = true
}) => {
  const [showCard, setShowCard] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<'celebration' | 'card' | 'rating'>('celebration');
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [copied, setCopied] = useState(false);

  // Start celebration animation
  useEffect(() => {
    // Phase 1: Celebration animation (3 seconds)
    const celebrationTimer = setTimeout(() => {
      setAnimationPhase('card');
      setShowCard(true);
    }, 3000);

    // Create confetti animation
    createConfettiAnimation();

    return () => clearTimeout(celebrationTimer);
  }, []);

  const createConfettiAnimation = () => {
    if (typeof window === 'undefined') return;

    // Create confetti container
    const confettiContainer = document.createElement('div');
    confettiContainer.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 10000;
      overflow: hidden;
    `;

    // Create multiple confetti pieces
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      confetti.style.cssText = `
        position: absolute;
        width: 10px;
        height: 10px;
        background: ${randomColor};
        top: -10px;
        left: ${Math.random() * 100}vw;
        transform: rotate(${Math.random() * 360}deg);
        animation: confettiFall ${2 + Math.random() * 3}s linear forwards;
      `;
      
      confettiContainer.appendChild(confetti);
    }

    // Add CSS animation
    if (!document.getElementById('confetti-styles')) {
      const style = document.createElement('style');
      style.id = 'confetti-styles';
      style.textContent = `
        @keyframes confettiFall {
          0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        @keyframes celebrationBounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0) scale(1);
          }
          40% {
            transform: translateY(-30px) scale(1.1);
          }
          60% {
            transform: translateY(-15px) scale(1.05);
          }
        }
      `;
      document.head.appendChild(style);
    }

    document.body.appendChild(confettiContainer);

    // Clean up after animation
    setTimeout(() => {
      if (confettiContainer.parentNode) {
        confettiContainer.parentNode.removeChild(confettiContainer);
      }
    }, 6000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-orange-600';
  };

  const getScoreBadge = (score: number) => {
    if (score >= 95) return { text: 'OUTSTANDING!', color: 'bg-green-500' };
    if (score >= 90) return { text: 'EXCELLENT!', color: 'bg-blue-500' };
    if (score >= 80) return { text: 'GREAT JOB!', color: 'bg-purple-500' };
    if (score >= 70) return { text: 'GOOD WORK!', color: 'bg-yellow-500' };
    return { text: 'PASSED!', color: 'bg-orange-500' };
  };

  const shareToTwitter = () => {
    const text = `🎉 Just completed "${completionData.lessonTitle}" with a score of ${completionData.finalScore}%! 📚 Learning ECG interpretation step by step. #ECGLearning #MedicalEducation #Achievement`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const shareToLinkedIn = () => {
    const text = `Proud to share that I just completed "${completionData.lessonTitle}" with a ${completionData.finalScore}% score! 🏆 Continuously improving my ECG interpretation skills through hands-on learning. #MedicalEducation #ContinuousLearning #ECG`;
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.origin)}&text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const shareToFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin)}&quote=${encodeURIComponent(`Just completed "${completionData.lessonTitle}" with ${completionData.finalScore}%! 🎉`)}`;
    window.open(url, '_blank');
  };

  const copyShareText = async () => {
    const text = `🎉 Just completed "${completionData.lessonTitle}" with a score of ${completionData.finalScore}%! 📚 #ECGLearning`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleRating = (stars: number) => {
    setRating(stars);
    // Here you would typically save the rating to your backend
    console.log('Lesson rated:', stars, 'stars');
  };

  const scoreBadge = getScoreBadge(completionData.finalScore);

  if (animationPhase === 'celebration') {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="text-center text-white" style={{ animation: 'celebrationBounce 2s ease-in-out infinite' }}>
          <div className="text-6xl mb-4">🎉</div>
          <div className="text-4xl font-bold mb-2">LESSON COMPLETED!</div>
          <div className="text-2xl">{completionData.lessonTitle}</div>
          <div className="text-xl mt-4 opacity-90">
            Score: {completionData.finalScore}%
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <CardContent className="p-8">
          {/* Achievement Header */}
          <div className="text-center mb-6">
            <div className="relative inline-block">
              <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <Sparkles className="w-6 h-6 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Lesson Completed!
            </h2>
            <Badge className={`${scoreBadge.color} text-white text-sm px-3 py-1`}>
              {scoreBadge.text}
            </Badge>
          </div>

          {/* Completion Card */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              {completionData.lessonTitle}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {completionData.moduleTitle}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center">
                <div className={`text-2xl font-bold ${getScoreColor(completionData.finalScore)}`}>
                  {completionData.finalScore}%
                </div>
                <div className="text-xs text-gray-600">Final Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {formatTime(completionData.timeSpent)}
                </div>
                <div className="text-xs text-gray-600">Time Spent</div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Target className="w-4 h-4" />
                {completionData.questionsAnswered}/{completionData.totalQuestions} Questions
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Passed ({completionData.passingScore}%+ required)
              </div>
            </div>
          </div>

          {/* Social Sharing */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3 text-center">
              🎊 Share Your Achievement
            </h4>
            <div className="flex justify-center gap-2 mb-3">
              <Button
                variant="outline"
                size="sm"
                onClick={shareToTwitter}
                className="flex items-center gap-2"
              >
                <Twitter className="w-4 h-4" />
                Twitter
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={shareToLinkedIn}
                className="flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={shareToFacebook}
                className="flex items-center gap-2"
              >
                <Facebook className="w-4 h-4" />
                Facebook
              </Button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={copyShareText}
              className="w-full flex items-center gap-2"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy Share Text
                </>
              )}
            </Button>
          </div>

          {/* Rating System */}
          {showRatingPrompt && (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2 text-center">
                Rate This Lesson
              </h4>
              <div className="flex justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleRating(star)}
                    onMouseEnter={() => setHoveredStar(star)}
                    onMouseLeave={() => setHoveredStar(0)}
                    className="p-1 transition-colors"
                  >
                    <Star
                      className={`w-6 h-6 ${
                        star <= (hoveredStar || rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
              {rating > 0 && (
                <p className="text-sm text-center text-gray-600">
                  Thank you for rating this lesson!
                </p>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Review Lesson
            </Button>
            <Button
              onClick={onContinue}
              className="flex-1 bg-green-600 hover:bg-green-700"
            >
              Continue Learning →
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LessonCompletionCelebration;
