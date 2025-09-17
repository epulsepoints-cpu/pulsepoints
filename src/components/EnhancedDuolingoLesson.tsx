import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useUISounds } from '@/hooks/useUISounds';
import { useGameState } from '@/hooks/useGameState';
import { EnhancedAudioPlayer } from '@/components/EnhancedAudioPlayer';
import { EnhancedYouTubePlayer } from '@/components/EnhancedYouTubePlayer';
import styles from './FlippableFlashcard.module.css';
import { 
  ArrowLeft, 
  ChevronLeft,
  ChevronRight,
  CheckCircle, 
  X,
  Heart,
  Zap,
  Target,
  Brain,
  Timer,
  Star,
  Trophy,
  Flame,
  Award,
  Crown,
  Sparkles,
  ZoomIn,
  Play,
  Pause,
  Music
} from 'lucide-react';
import { Lesson } from '@/types/learning';
import { StepData } from '@/types/learning';
import { 
  saveLessonProgress, 
  loadLessonProgress,
  completeLessonProgress,
  LessonProgressState
} from '@/services/lessonProgressService';
import { handleLessonCompletion } from '@/services/consolidatedProgressService';
import LessonCompletion from '@/components/LessonCompletionMobile';

// Add CSS for 3D flip effect
const flipCardStyles = `
.backface-hidden {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
`;

// Inject styles
if (typeof document !== 'undefined' && !document.getElementById('flip-card-styles')) {
  const style = document.createElement('style');
  style.id = 'flip-card-styles';
  style.textContent = flipCardStyles;
  document.head.appendChild(style);
}

interface EnhancedNativeLessonProps {
  lesson: Lesson;
  onComplete: (score: number, timeSpent: number) => void;
  onExit: () => void;
  userHearts: number;
  onHeartLost: () => void;
  isFullScreen?: boolean;
}

interface LessonStep {
  id: string;
  type: 'introduction' | 'content' | 'quiz' | 'audio' | 'video' | 'youtube' | 'summary' | 'flashcard' | 'accordion' | 'tabs' | 'steps' | 'highlight';
  title: string;
  content: string;
  options?: string[];
  correctAnswer?: number;
  explanation?: string;
  imageUrl?: string;
  audioUrl?: string;
  videoUrl?: string;
  youtubeId?: string;
  videoDuration?: number; // Duration in seconds for YouTube videos
  requireFullWatch?: boolean; // Require watching full video
  minimumWatchTime?: number; // Minimum watch time in seconds
  hint?: string;
  interactive?: boolean;
  // Interactive slide properties
  flashcard?: {
    icon: string;
    question: string;
    answer: string;
    category?: string;
    difficulty?: string;
    imageUrl?: string;
  };
  accordion?: {
    title: string;
    content: string;
  }[];
  tabs?: {
    label: string;
    content: string;
  }[];
  steps?: {
    title: string;
    content: string;
  }[];
  highlights?: {
    text: string;
    type: 'info' | 'warning' | 'success' | 'error';
  }[];
}

interface LessonState {
  currentStep: number;
  answers: { [stepId: string]: number };
  startTime: number;
  stepStartTime: number;
  hearts: number;
  score: number;
  streak: number;
  mistakes: number;
  perfectAnswers: number;
  timeSpentPerStep: { [stepId: string]: number };
  totalQuestions: number;
  correctAnswers: number;
  earnedXP: number; // Track XP earned during lesson
}

// Enhanced Flippable Flashcard Component
const FlippableFlashcard: React.FC<{
  flashcard: {
    icon: string;
    question: string;
    answer: string;
    category?: string;
    difficulty?: string;
    imageUrl?: string;
  };
  backgroundColor?: string;
  textColor?: string;
}> = ({ flashcard, backgroundColor = '#f0f9ff', textColor = '#1e40af' }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  console.log('🔍 FlippableFlashcard rendering with:', { 
    flashcard: flashcard ? { ...flashcard } : 'null/undefined',
    hasQuestion: !!flashcard?.question,
    hasAnswer: !!flashcard?.answer 
  });

  // Fixed 3D flashcard with responsive scaling
  return (
    <div className={styles.flashcardContainer}>
      <motion.div
        className={styles.flashcardInner}
        onClick={() => setIsFlipped(!isFlipped)}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* Front side (Question) */}
        <div className={`${styles.flashcardSide} ${styles.flashcardFront}`}>
          {flashcard?.icon && (
            <div className={styles.flashcardIcon}>
              {flashcard.icon}
            </div>
          )}
          <h3 className={styles.flashcardTitle}>
            {flashcard?.question || 'No question available'}
          </h3>
          <p className={styles.flashcardSubtext}>
            Tap to reveal answer
          </p>
        </div>

        {/* Back side (Answer) */}
        <div className={`${styles.flashcardSide} ${styles.flashcardBack}`}>
          {flashcard?.icon && (
            <div className={styles.flashcardIcon}>
              {flashcard.icon}
            </div>
          )}
          <h3 className={styles.flashcardTitle}>
            Answer:
          </h3>
          <p className={styles.flashcardText}>
            {flashcard?.answer || 'No answer available'}
          </p>
          <p className={styles.flashcardSubtext}>
            Tap to see question
          </p>
        </div>
      </motion.div>
    </div>
  );
};

// Enhanced Celebration Component with Confetti
const CelebrationAnimation: React.FC<{ 
  type: 'correct' | 'perfect' | 'complete' | 'streak' | 'heart-lost'; 
  onComplete: () => void;
  isFullScreen?: boolean;
}> = ({ type, onComplete, isFullScreen = false }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (type === 'complete' || type === 'perfect' || type === 'streak') {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
    
    // Remove automatic timeout - let user control progression
    // const timer = setTimeout(onComplete, type === 'complete' ? 3000 : 1500);
    // return () => clearTimeout(timer);
  }, [type]);

  const animations = {
    correct: {
      icon: <CheckCircle className="w-16 h-16 text-green-500" />,
      bgColor: "from-green-50 to-emerald-100",
      borderColor: "border-green-200",
      textColor: "text-green-700",
      text: "Correct!",
      subText: "+10 XP"
    },
    perfect: {
      icon: <Crown className="w-16 h-16 text-yellow-500" />,
      bgColor: "from-yellow-50 to-amber-100", 
      borderColor: "border-yellow-200",
      textColor: "text-yellow-700",
      text: "Perfect!",
      subText: "+15 XP Bonus"
    },
    complete: {
      icon: <Trophy className="w-16 h-16 text-purple-500" />,
      bgColor: "from-purple-50 to-indigo-100",
      borderColor: "border-purple-200", 
      textColor: "text-purple-700",
      text: "Lesson Complete!",
      subText: "Well Done!"
    },
    streak: {
      icon: <Flame className="w-16 h-16 text-orange-500" />,
      bgColor: "from-orange-50 to-red-100",
      borderColor: "border-orange-200",
      textColor: "text-orange-700", 
      text: "Streak!",
      subText: "You're on fire!"
    },
    'heart-lost': {
      icon: <Heart className="w-16 h-16 text-red-500" />,
      bgColor: "from-red-50 to-pink-100",
      borderColor: "border-red-200",
      textColor: "text-red-700",
      text: "Heart Lost!",
      subText: "Be more careful"
    }
  };

  const anim = animations[type];

  return (
    <>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={type === 'complete' ? 200 : 100}
          gravity={0.1}
        />
      )}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        className={`fixed inset-0 z-50 flex items-center justify-center ${isFullScreen ? 'bg-black/70' : 'bg-black/50'}`}
      >
        <motion.div
          initial={{ y: 50, scale: 0.8 }}
          animate={{ y: 0, scale: 1 }}
          className={`bg-gradient-to-br ${anim.bgColor} border-4 ${anim.borderColor} rounded-3xl p-8 text-center shadow-2xl mx-4 max-w-sm relative`}
        >
          {/* Close X Button */}
          <button
            onClick={onComplete}
            className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white ${anim.textColor} hover:scale-110 transition-all duration-200 flex items-center justify-center shadow-md`}
            aria-label="Close celebration"
          >
            <X className="w-4 h-4" />
          </button>

          <motion.div
            animate={{ 
              rotate: type === 'correct' ? [0, 10, -10, 0] : [0, -5, 5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 0.6, repeat: 1 }}
          >
            {anim.icon}
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`text-3xl font-bold ${anim.textColor} mt-4`}
          >
            {anim.text}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className={`text-lg ${anim.textColor} mt-2 opacity-80`}
          >
            {anim.subText}
          </motion.p>

          {/* Continue Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            onClick={onComplete}
            className={`mt-6 px-6 py-3 bg-white ${anim.textColor} font-bold text-lg rounded-full hover:scale-105 transition-all duration-200 shadow-lg border-2 ${anim.borderColor}`}
          >
            Continue
          </motion.button>
          
          {/* Animated sparkles */}
          {(type === 'correct' || type === 'perfect' || type === 'complete') && (
            <>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    y: [-10, -30, -50]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    delay: i * 0.1,
                    repeat: 2
                  }}
                />
              ))}
            </>
          )}
        </motion.div>
      </motion.div>
    </>
  );
};

// Enhanced Progress Bar with Animations - Improved Mobile Header
const LessonProgressBar: React.FC<{ 
  current: number; 
  total: number; 
  hearts: number; 
  streak: number; 
  score: number;
  earnedXP: number;
  isFullScreen?: boolean;
  onExit: () => void;
}> = ({ current, total, hearts, streak, score, earnedXP, isFullScreen = false, onExit }) => {
  const progress = ((current + 1) / total) * 100;
  
  return (
    <header className={`${isFullScreen ? 'bg-gradient-to-r from-indigo-600/90 to-purple-600/90 backdrop-blur-md border-b border-white/20' : 'bg-white shadow-md border-b-2 border-blue-200'} ${isFullScreen ? 'p-3' : 'p-4'} sticky top-0 z-[100]`}>
      <div className="w-full max-w-4xl mx-auto">
        {/* Main Header Row */}
        <div className="flex items-center justify-between gap-4">
          {/* Back Button - Enhanced */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('🔴 IMPROVED Back button clicked!');
              console.log('🔴 Calling onExit directly without confirmation');
              onExit();
            }}
            className={`group flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 ${
              isFullScreen 
                ? 'bg-white/20 hover:bg-white/30 text-white hover:scale-105 active:scale-95' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 hover:scale-105 active:scale-95'
            } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
            aria-label="Exit lesson and return to module"
            type="button"
          >
            <ArrowLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
          </button>
          
          {/* Progress Section - Center */}
          <div className="flex-1 max-w-md mx-4">
            {/* Progress Bar */}
            <div className={`relative w-full h-3 rounded-full overflow-hidden ${
              isFullScreen ? 'bg-white/20' : 'bg-gray-200'
            }`}>
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                style={{ width: `${progress}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              {/* Progress sparkle effect */}
              <motion.div
                className="absolute inset-y-0 right-0 w-1 bg-white/60 rounded-full"
                style={{ left: `${Math.max(0, progress - 2)}%` }}
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
            
            {/* Progress Text */}
            <div className="text-center mt-1">
              <span className={`text-sm font-medium ${isFullScreen ? 'text-white/90' : 'text-gray-600'}`}>
                Step {current + 1} of {total}
              </span>
            </div>
          </div>
          
          {/* Stats Row - Right */}
          <div className="flex items-center gap-3">
            {/* Hearts */}
            <motion.div 
              className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/10"
              animate={hearts <= 1 ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 0.5, repeat: hearts <= 1 ? Infinity : 0 }}
            >
              <Heart className={`w-4 h-4 ${hearts <= 1 ? 'text-red-400' : 'text-red-500'}`} />
              <span className={`font-bold text-sm ${isFullScreen ? 'text-white' : 'text-red-600'}`}>
                {hearts}
              </span>
            </motion.div>
            
            {/* Streak */}
            <motion.div 
              className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/10"
              animate={streak >= 3 ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              <Flame className={`w-4 h-4 ${streak >= 3 ? 'text-orange-400' : 'text-gray-400'}`} />
              <span className={`font-bold text-sm ${isFullScreen ? 'text-white' : streak >= 3 ? 'text-orange-600' : 'text-gray-500'}`}>
                {streak}
              </span>
            </motion.div>
            
            {/* XP Display */}
            <motion.div 
              className="flex items-center gap-1 px-2 py-1 rounded-full bg-white/10"
              key={`xp-${earnedXP}`}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 0.3 }}
            >
              <Star className="w-4 h-4 text-yellow-400" />
              <span className={`font-bold text-sm ${isFullScreen ? 'text-white' : 'text-yellow-600'}`}>
                {earnedXP}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

// Bottom Navigation Component
const BottomNavigation: React.FC<{
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  canGoBack: boolean;
  canGoForward: boolean;
  isFullScreen?: boolean;
  showResult?: boolean;
}> = ({ currentStep, totalSteps, onPrevious, onNext, canGoBack, canGoForward, isFullScreen = false, showResult = false }) => {
  return (
    <div className={`${isFullScreen ? 'bg-black/20 backdrop-blur-sm border-t border-white/20' : 'bg-white shadow-sm border-t-2 border-blue-200'} p-3`}>
      <div className="flex items-center justify-between max-w-lg mx-auto">
        {/* Previous Button */}
        <Button
          variant="ghost"
          onClick={onPrevious}
          disabled={!canGoBack}
          className={`p-3 ${
            isFullScreen 
              ? 'text-white hover:bg-white/20 disabled:text-gray-400' 
              : 'hover:bg-gray-100 disabled:text-gray-300'
          } disabled:hover:bg-transparent transition-opacity duration-200 ${
            !canGoBack ? 'opacity-50' : 'opacity-100'
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        {/* Step Indicator */}
        <div className="flex items-center gap-1">
          {Array.from({ length: Math.min(totalSteps, 5) }, (_, i) => {
            const stepIndex = totalSteps <= 5 ? i : 
              currentStep <= 2 ? i :
              currentStep >= totalSteps - 2 ? totalSteps - 5 + i :
              currentStep - 2 + i;
            
            return (
              <motion.div
                key={stepIndex}
                className={`w-2 h-2 rounded-full ${
                  stepIndex === currentStep 
                    ? (isFullScreen ? 'bg-white' : 'bg-blue-500')
                    : stepIndex < currentStep 
                      ? (isFullScreen ? 'bg-white/60' : 'bg-blue-300')
                      : (isFullScreen ? 'bg-white/20' : 'bg-gray-300')
                }`}
                initial={{ scale: 0.8 }}
                animate={{ scale: stepIndex === currentStep ? 1.2 : 1 }}
                transition={{ duration: 0.2 }}
              />
            );
          })}
        </div>

        {/* Next Button */}
        <Button
          variant="ghost"
          onClick={onNext}
          disabled={!canGoForward}
          className={`p-3 ${
            isFullScreen 
              ? 'text-white hover:bg-white/20 disabled:text-gray-400' 
              : 'hover:bg-gray-100 disabled:text-gray-300'
          } disabled:hover:bg-transparent transition-opacity duration-200 ${
            !canGoForward ? 'opacity-50' : 'opacity-100'
          } ${showResult ? 'ring-2 ring-blue-400 ring-opacity-50' : ''}`}
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
};

const EnhancedNativeLesson: React.FC<EnhancedNativeLessonProps> = ({
  lesson,
  onComplete,
  onExit,
  userHearts,
  onHeartLost,
  isFullScreen = false
}) => {
  // Initialize UI sounds and game state
  const { playClickSound, playCorrectSound, playErrorSound } = useUISounds();
  const { gameState } = useGameState();
  
  // Refs for media control
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Helper function to get slide data by index
  const getSlideByIndex = (index: number) => {
    if (!lesson.content?.slides) return null;
    const contentSlidesCount = lesson.content.slides.length;
    // Skip intro step (index 0)
    const slideIndex = index - 1;
    if (slideIndex >= 0 && slideIndex < contentSlidesCount) {
      return lesson.content.slides[slideIndex];
    }
    return null;
  };
  
  // Core lesson state with persistence
  const [lessonState, setLessonState] = useState<LessonState>(() => ({
    currentStep: 0,
    answers: {},
    startTime: Date.now(),
    stepStartTime: Date.now(),
    hearts: userHearts,
    score: 0,
    streak: 0,
    mistakes: 0,
    perfectAnswers: 0,
    timeSpentPerStep: {},
    totalQuestions: 0,
    correctAnswers: 0,
    earnedXP: 0 // Track XP earned during lesson
  }));
  
  // UI state
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showCelebration, setShowCelebration] = useState<'correct' | 'perfect' | 'complete' | 'streak' | 'heart-lost' | null>(null);
  const [showImageZoom, setShowImageZoom] = useState(false);
  const [zoomedImageSrc, setZoomedImageSrc] = useState('');
  const [showCompletionPopup, setShowCompletionPopup] = useState(false);

  // Debug completion popup state
  useEffect(() => {
    console.log('🎉 Completion popup state changed:', showCompletionPopup);
  }, [showCompletionPopup]);
  const [audioCompleted, setAudioCompleted] = useState(false);
  const [videoCompleted, setVideoCompleted] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  
  // Touch/swipe state for mobile navigation
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(null);
  const swipeThreshold = 50;

  // Generate lesson steps from lesson data
  const generateSteps = useCallback((): LessonStep[] => {
    const steps: LessonStep[] = [];
    let questionCount = 0;

    console.log('🔍 Generating steps for lesson:', lesson.title);
    console.log('📚 Total slides:', lesson.content?.slides?.length || 0);
    console.log('📚 Tasks available:', lesson.tasks?.length || 0);
    
    // Debug: Log first few slides to see their structure
    if (lesson.content?.slides) {
      lesson.content.slides.slice(0, 5).forEach((slide, idx) => {
        console.log(`Slide ${idx + 1}:`, { 
          id: slide.id, 
          type: slide.type, 
          title: slide.title,
          hasFlashcard: !!(slide.flashcard || (slide.flashcardFront && slide.flashcardBack)),
          hasAccordion: !!slide.accordionItems,
          hasTabs: !!slide.tabs,
          hasSteps: !!slide.steps
        });
      });
    }
    
    if (lesson.tasks) {
      lesson.tasks.forEach((task, idx) => {
        console.log(`Task ${idx + 1}:`, { type: task.type, id: task.id });
      });
    }

    // Introduction step
    steps.push({
      id: 'intro',
      type: 'introduction',
      title: `Let's learn about ${lesson.title}`,
      content: lesson.content?.introduction || `Welcome to ${lesson.title}`
      // No default image - only use imageUrl if explicitly provided in lesson data
    });

    // Content slides if they exist
    if (lesson.content?.slides && Array.isArray(lesson.content.slides)) {
      lesson.content.slides.forEach((slide, index) => {
        const step: LessonStep = {
          id: slide.id || `slide-${index}`,
          type: slide.type as any || 'content',
          title: slide.title || `Slide ${index + 1}`,
          content: Array.isArray(slide.content) ? slide.content.join('\n') : slide.content,
          imageUrl: slide.imageUrl,
          hint: slide.hint
        };

        // Add media-specific properties
        if (slide.type === 'audio' && slide.audioUrl) {
          step.audioUrl = slide.audioUrl;
        } else if (slide.type === 'video' && slide.videoUrl) {
          step.videoUrl = slide.videoUrl;
        } else if (slide.type === 'youtube' && slide.youtubeId) {
          step.youtubeId = slide.youtubeId;
        } else if (slide.type === 'quiz' && slide.question) {
          step.type = 'quiz';
          step.content = slide.question;
          step.options = slide.options;
          step.correctAnswer = slide.correctAnswer;
          step.explanation = slide.explanation;
          questionCount++;
        } else if (slide.type === 'flashcard' && (slide.flashcard || (slide.flashcardFront && slide.flashcardBack))) {
          // Handle both new structured format and legacy format
          if (slide.flashcard) {
            console.log('📋 Processing new flashcard format:', slide.id, slide.flashcard);
            step.type = 'flashcard';
            step.flashcard = slide.flashcard;
          } else if (slide.flashcardFront && slide.flashcardBack) {
            console.log('📋 Processing legacy flashcard format:', slide.id, { front: slide.flashcardFront, back: slide.flashcardBack });
            step.type = 'flashcard';
            step.flashcard = {
              icon: slide.icon || '💡',
              question: slide.flashcardFront,
              answer: slide.flashcardBack,
              category: 'general',
              difficulty: 'intermediate'
            };
          }
        } else if (slide.type === 'accordion' && slide.accordionItems) {
          console.log('📖 Processing accordion:', slide.id, { items: slide.accordionItems.length });
          step.type = 'accordion';
          step.accordion = slide.accordionItems.map(item => ({
            title: item.title,
            content: item.content
          }));
        } else if (slide.type === 'tabs' && slide.tabs) {
          console.log('🗂️ Processing tabs:', slide.id, { tabs: slide.tabs.length });
          step.type = 'tabs';
          step.tabs = slide.tabs.map(tab => ({
            label: tab.title,
            content: tab.content
          }));
        } else if (slide.type === 'steps' && slide.steps) {
          console.log('🔢 Processing steps:', slide.id, { steps: slide.steps.length });
          step.type = 'steps';
          step.steps = Array.isArray(slide.steps) && typeof slide.steps[0] === 'object' 
            ? (slide.steps as StepData[]).map(stepItem => ({
                title: stepItem.title,
                content: stepItem.description
              }))
            : (slide.steps as string[]).map((stepText, idx) => ({
                title: `Step ${idx + 1}`,
                content: stepText
              }));
        } else if (slide.type === 'highlight' && slide.highlights) {
          console.log('✨ Processing highlights:', slide.id, { highlights: slide.highlights.length });
          step.type = 'highlight';
          step.highlights = slide.highlights.map(text => ({
            text: text,
            type: 'info' as const
          }));
        }

        console.log('➕ Adding step:', { id: step.id, type: step.type, title: step.title });
        steps.push(step);
      });
    }

    // Process lesson tasks
    if (lesson.tasks) {
      lesson.tasks.forEach((task, index) => {
        // Task introduction
        steps.push({
          id: `${task.id}-intro`,
          type: 'content',
          title: `Task ${index + 1}: ${task.type?.charAt(0).toUpperCase() + task.type?.slice(1).replace('-', ' ') || 'Activity'}`,
          content: `Get ready for an interactive ${task.type || 'learning'} task worth ${task.xp || 10} XP!`,
          imageUrl: task.images?.mainImage || '/lessonimages/heart-anatomy-overview.png'
        });

        // Audio listening step if available
        if (task.audio?.mainNarration?.transcript) {
          steps.push({
            id: `${task.id}-listening`,
            type: 'audio',
            title: `🎧 Audio Lesson: ${task.type?.charAt(0).toUpperCase() + task.type?.slice(1) || 'Listen'}`,
            content: task.audio.mainNarration.transcript,
            audioUrl: task.audio.mainNarration.audioUrl,
            imageUrl: task.images?.mainImage,
            hint: 'Listen carefully to the audio content'
          });
        }

        // Main task content
        if (task.content && typeof task.content === 'object') {
          console.log(`🎯 Processing task content for ${task.type}:`, task.content);
          
          if (task.type === 'final-assessment' && 'questions' in task.content && task.content.questions) {
            console.log('🏆 Found final assessment with questions!', task.content.questions.length);
            
            // Final Assessment - Add preparatory video if available
            if (task.content.preparatoryVideo) {
              steps.push({
                id: `${task.id}-prep-video`,
                type: 'video',
                title: `🎥 ${task.content.preparatoryVideo.videoTitle || 'Preparation Video'}`,
                content: task.content.preparatoryVideo.videoDescription || 'Watch this video to prepare for the final assessment.',
                videoUrl: task.content.preparatoryVideo.youtubeUrl,
                imageUrl: task.images?.mainImage,
                hint: `Required viewing time: ${task.content.preparatoryVideo.minimumWatchTime || 60} seconds`
              });
            }

            // Add final assessment introduction
            steps.push({
              id: `${task.id}-assessment-intro`,
              type: 'introduction',
              title: '🏆 Final Assessment',
              content: `You're about to take the final assessment! This comprehensive test contains ${task.content.questions.length} questions and will test your understanding of the entire lesson. You need ${task.content.passingScore || 70}% to pass.${task.content.timeLimit ? ` Time limit: ${task.content.timeLimit} minutes.` : ''}`,
              imageUrl: task.images?.mainImage || '/lessonimages/final-assessment.png',
              hint: 'Take your time and read each question carefully!'
            });

            // Add each assessment question as a quiz step
            task.content.questions.forEach((question, qIndex) => {
              // Safely parse correctAnswer to ensure it's a number
              let correctAnswerIndex: number;
              if (typeof question.correctAnswer === 'string') {
                correctAnswerIndex = parseInt(question.correctAnswer);
              } else if (typeof question.correctAnswer === 'number') {
                correctAnswerIndex = question.correctAnswer;
              } else {
                correctAnswerIndex = 0; // fallback to first option
              }

              steps.push({
                id: `${task.id}-question-${qIndex + 1}`,
                type: 'quiz',
                title: `Assessment Question ${qIndex + 1} of ${task.content.questions.length}`,
                content: question.question,
                options: question.options,
                correctAnswer: correctAnswerIndex,
                explanation: question.explanation,
                imageUrl: question.imageUrl || task.images?.mainImage,
                hint: question.hint
              });
              questionCount++;
            });

            // Add assessment completion step
            steps.push({
              id: `${task.id}-assessment-complete`,
              type: 'summary',
              title: '🎉 Assessment Complete!',
              content: 'Congratulations! You have completed the final assessment. Your results will be calculated and you will receive your score.',
              imageUrl: task.images?.mainImage || '/lessonimages/assessment-complete.png'
            });

          } else if ('question' in task.content) {
            // Regular Quiz task
            steps.push({
              id: `${task.id}-quiz`,
              type: 'quiz',
              title: 'Quiz Challenge',
              content: task.content.question,
              options: task.content.options,
              correctAnswer: typeof task.content.correctAnswer === 'string' ? 
                parseInt(task.content.correctAnswer) : task.content.correctAnswer,
              explanation: task.content.explanation,
              imageUrl: task.content.imageUrl || task.images?.mainImage
            });
            questionCount++;
          } else if ('front' in task.content && 'back' in task.content) {
            // Flashcard task
            steps.push({
              id: `${task.id}-flashcard`,
              type: 'content',
              title: task.content.front,
              content: task.content.back,
              imageUrl: task.images?.mainImage
            });
          } else if ('videoUrl' in task.content || task.type === 'video') {
            // Video task
            steps.push({
              id: `${task.id}-video`,
              type: 'video',
              title: `🎥 ${task.content.videoTitle || task.content.title || 'Learning Video'}`,
              content: task.content.videoDescription || task.content.description || 'Watch this educational video to learn more.',
              videoUrl: task.content.videoUrl,
              imageUrl: task.images?.mainImage,
              hint: task.content.completionRequirement
            });
          }
        }
      });
    }

    // Summary step
    steps.push({
      id: 'summary',
      type: 'summary',
      title: 'Lesson Complete!',
      content: lesson.content?.summary || 'Congratulations! You have completed this lesson.'
      // No default image - only use imageUrl if explicitly provided in lesson data
    });

    console.log(`📊 Generated ${steps.length} total steps:`);
    steps.forEach((step, idx) => {
      console.log(`  Step ${idx + 1}: ${step.type} - ${step.title}`);
    });

    // Update total questions in state
    setTimeout(() => {
      setLessonState(prev => ({ ...prev, totalQuestions: questionCount }));
    }, 0);

    return steps;
  }, [lesson]);

  const [steps] = useState<LessonStep[]>(generateSteps());
  const currentStepData = steps[lessonState.currentStep];

  // Load lesson progress on mount
  useEffect(() => {
    const loadProgress = async () => {
      if (gameState.user?.id) {
        const savedProgress = await loadLessonProgress(gameState.user.id, lesson.id);
        if (savedProgress && !savedProgress.completed) {
          setLessonState(prev => ({
            ...prev,
            currentStep: savedProgress.currentStep,
            answers: savedProgress.answers,
            hearts: Math.min(savedProgress.hearts, userHearts),
            score: savedProgress.score,
            streak: savedProgress.streak,
            mistakes: savedProgress.mistakes,
            perfectAnswers: savedProgress.perfectAnswers,
            timeSpentPerStep: savedProgress.timeSpentPerStep
          }));
        }
      }
    };
    loadProgress();
  }, [gameState.user?.id, lesson.id, userHearts]);

  // Save lesson progress on state changes
  const saveProgressRef = useRef<() => void>();
  saveProgressRef.current = useCallback(async () => {
    if (gameState.user?.id) {
      await saveLessonProgress(
        gameState.user.id,
        lesson.id,
        'module-1', // You may want to pass moduleId as prop
        {
          currentStep: lessonState.currentStep,
          answers: lessonState.answers,
          hearts: lessonState.hearts,
          score: lessonState.score,
          streak: lessonState.streak,
          mistakes: lessonState.mistakes,
          perfectAnswers: lessonState.perfectAnswers,
          timeSpentPerStep: lessonState.timeSpentPerStep
        }
      );
    }
  }, [gameState.user?.id, lesson.id, lessonState]);

  useEffect(() => {
    if (saveProgressRef.current) {
      saveProgressRef.current();
    }
  }, [lessonState]);

  // Handle touch events for swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touch = e.touches[0];
    setTouchEnd({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const deltaX = touchStart.x - touchEnd.x;
    const deltaY = Math.abs(touchStart.y - touchEnd.y);
    
    // Only trigger swipe if horizontal movement is greater than vertical
    if (deltaY < 100) {
      if (deltaX > swipeThreshold) {
        // Swipe left - next step
        if (lessonState.currentStep < steps.length - 1 && (!showResult || currentStepData.type !== 'quiz')) {
          handleContinue();
        }
      } else if (deltaX < -swipeThreshold) {
        // Swipe right - previous step
        if (lessonState.currentStep > 0 && !showResult) {
          handlePreviousStep();
        }
      }
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    playClickSound();
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null || !currentStepData) return;

    const stepTime = Date.now() - lessonState.stepStartTime;
    const correct = selectedAnswer === currentStepData.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);

    setLessonState(prev => {
      const newState = { ...prev };
      newState.answers[currentStepData.id] = selectedAnswer;
      newState.timeSpentPerStep[currentStepData.id] = stepTime;

      if (correct) {
        playCorrectSound();
        newState.score += 10;
        newState.streak += 1;
        newState.correctAnswers += 1;
        
        // Add XP for correct answers
        const questionXP = 5; // Base XP per correct answer
        newState.earnedXP += questionXP;
        
        // Fast answer bonus
        if (stepTime < 5000) {
          newState.score += 5;
          newState.perfectAnswers += 1;
          newState.earnedXP += 3; // Bonus XP for fast answers
          setTimeout(() => setShowCelebration('perfect'), 500);
        } else if (newState.streak >= 5) {
          newState.earnedXP += 2; // Streak bonus XP
          setTimeout(() => setShowCelebration('streak'), 500);
        } else {
          setTimeout(() => setShowCelebration('correct'), 500);
        }
      } else {
        playErrorSound();
        newState.mistakes += 1;
        newState.hearts -= 1;
        newState.streak = 0;
        onHeartLost();
        setTimeout(() => setShowCelebration('heart-lost'), 500);
      }

      return newState;
    });
  };

  const handleContinue = () => {
    console.log('🔄 handleContinue called');
    console.log('📊 Current step:', lessonState.currentStep, '/', steps.length - 1);
    
    setShowResult(false);
    setSelectedAnswer(null);
    setShowCelebration(null);
    
    if (lessonState.currentStep < steps.length - 1) {
      console.log('➡️ Moving to next step');
      setLessonState(prev => ({
        ...prev,
        currentStep: prev.currentStep + 1,
        stepStartTime: Date.now()
      }));
    } else {
      console.log('🏁 Lesson complete! Showing completion popup');
      // Lesson complete - show completion immediately
      const timeSpent = Math.round((Date.now() - lessonState.startTime) / 1000);
      const finalScore = Math.max(0, lessonState.score - (lessonState.mistakes * 5));
      
      console.log('📈 Final score:', finalScore, 'Time:', timeSpent);
      
      // Show lesson completion popup directly
      setShowCompletionPopup(true);
    }
  };

  const handlePreviousStep = () => {
    if (lessonState.currentStep > 0) {
      setShowResult(false);
      setSelectedAnswer(null);
      setLessonState(prev => ({
        ...prev,
        currentStep: prev.currentStep - 1,
        stepStartTime: Date.now()
      }));
      playClickSound();
    }
  };

  const handleNextStep = () => {
    console.log('⏭️ handleNextStep called');
    console.log('📊 Current step:', lessonState.currentStep, '/', steps.length - 1);
    console.log('🎯 Current step type:', currentStepData?.type);
    
    // If we're showing a quiz result, clear it and continue to next step
    if (showResult) {
      console.log('📋 Clearing quiz result and continuing');
      handleContinue();
      return;
    }
    
    // Audio enforcement: OPTIONAL - allow skipping audio
    if (currentStepData.type === 'audio' && !audioCompleted) {
      console.log('🔊 Audio slide - user can listen or proceed');
      // Allow proceeding without completing audio - just visual feedback
    }
    
    // Video enforcement: OPTIONAL - allow skipping video  
    if ((currentStepData.type === 'video' || currentStepData.type === 'youtube') && !videoCompleted) {
      console.log('🎬 Video/YouTube slide - user can watch or proceed');
      // Allow proceeding without completing video - just visual feedback
    }
    
    // If it's a quiz but no answer selected, don't proceed
    if (currentStepData.type === 'quiz' && selectedAnswer === null) {
      console.log('⚠️ Quiz step but no answer selected');
      // Shake animation or highlight the need to select an answer
      return;
    }
    
    // If it's a quiz with selected answer, submit it
    if (currentStepData.type === 'quiz' && selectedAnswer !== null && !showResult) {
      console.log('📝 Submitting quiz answer');
      handleSubmitAnswer();
      return;
    }
    
    // For non-quiz steps, proceed normally
    if (lessonState.currentStep < steps.length - 1) {
      console.log('➡️ Moving to next step');
      setShowResult(false);
      setSelectedAnswer(null);
      // Reset audio/video completion for next step
      setAudioCompleted(false);
      setVideoCompleted(false);
      setLessonState(prev => ({
        ...prev,
        currentStep: prev.currentStep + 1,
        stepStartTime: Date.now()
      }));
      playClickSound();
    } else {
      console.log('🏁 Last step reached - calling handleContinue');
      // Last step - complete lesson
      handleContinue();
    }
  };

  const handleCompletionContinue = async () => {
    const timeSpent = Math.round((Date.now() - lessonState.startTime) / 1000);
    const finalScore = Math.max(0, lessonState.score - (lessonState.mistakes * 5));
    
    // Mark lesson as completed
    if (gameState.user?.id) {
      try {
        console.log('🎯 Completing lesson with score:', finalScore, 'time:', timeSpent);
        
        // Use consolidated progress service for comprehensive Firebase updates
        await handleLessonCompletion({
          userId: gameState.user.id,
          moduleId: 'module-1', // You may want to pass this as a prop
          lessonId: lesson.id,
          score: finalScore,
          timeSpent: timeSpent,
          perfect: lessonState.mistakes === 0 && finalScore >= 95
        });
        
        // Also update the old lesson progress service for backward compatibility
        await completeLessonProgress(gameState.user.id, lesson.id, 'module-1', finalScore, timeSpent);
        
        console.log('✅ Lesson completion saved to Firebase with XP and rewards!');
      } catch (error) {
        console.error('❌ Failed to save lesson completion:', error);
      }
    }
    
    setShowCompletionPopup(false);
    onComplete(finalScore, timeSpent);
  };

  const handleExit = () => {
    console.log('🔙 Exit button clicked in lesson - Direct exit without confirmation');
    console.log('✅ Calling onExit directly');
    onExit();
  };

  const handleImageZoom = (imageSrc: string) => {
    setZoomedImageSrc(imageSrc);
    setShowImageZoom(true);
  };

  const toggleVideo = () => {
    if (videoRef.current) {
      if (videoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setVideoPlaying(!videoPlaying);
    }
  };

  if (!currentStepData) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading lesson...</p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`${isFullScreen ? 'fixed inset-0 z-50' : 'min-h-screen'} flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header with Progress */}
      <LessonProgressBar
        current={lessonState.currentStep}
        total={steps.length}
        hearts={lessonState.hearts}
        streak={lessonState.streak}
        score={lessonState.score}
        earnedXP={lessonState.earnedXP}
        isFullScreen={isFullScreen}
        onExit={handleExit}
      />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-1 py-2 overflow-hidden">
        <div className="w-full h-full flex items-center">
          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={`step-${lessonState.currentStep}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <Card className={`shadow-xl border-0 ${isFullScreen ? 'bg-white/95 backdrop-blur-sm' : 'bg-white'} ${isFullScreen ? 'h-[82vh]' : 'min-h-[75vh]'} flex flex-col w-full max-w-none`}>
                  <CardContent className="p-0 flex-1 flex flex-col overflow-hidden">
                    {/* Scrollable Content Container */}
                    <div className="flex-1 overflow-y-auto scrollbar-hide px-3 py-3 pb-20">
                      {/* Step Type Badge */}
                      <div className="flex items-center justify-center mb-2">
                        <Badge 
                          variant="outline" 
                          className={`px-2 py-0.5 text-xs ${
                            currentStepData.type === 'introduction' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                            currentStepData.type === 'content' ? 'bg-green-50 text-green-700 border-green-200' :
                            currentStepData.type === 'quiz' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                            currentStepData.type === 'audio' ? 'bg-indigo-50 text-indigo-700 border-indigo-200' :
                            currentStepData.type === 'video' ? 'bg-red-50 text-red-700 border-red-200' :
                            currentStepData.type === 'flashcard' ? 'bg-orange-50 text-orange-700 border-orange-200' :
                            currentStepData.type === 'accordion' ? 'bg-teal-50 text-teal-700 border-teal-200' :
                            currentStepData.type === 'tabs' ? 'bg-cyan-50 text-cyan-700 border-cyan-200' :
                            currentStepData.type === 'steps' ? 'bg-violet-50 text-violet-700 border-violet-200' :
                            currentStepData.type === 'highlight' ? 'bg-pink-50 text-pink-700 border-pink-200' :
                            'bg-amber-50 text-amber-700 border-amber-200'
                          }`}
                        >
                          {currentStepData.type === 'introduction' && <Brain className="w-3 h-3 mr-1" />}
                          {currentStepData.type === 'content' && <Zap className="w-3 h-3 mr-1" />}
                          {currentStepData.type === 'quiz' && <Target className="w-3 h-3 mr-1" />}
                          {currentStepData.type === 'audio' && <Music className="w-3 h-3 mr-1" />}
                          {currentStepData.type === 'video' && <Play className="w-3 h-3 mr-1" />}
                          {currentStepData.type === 'summary' && <Star className="w-3 h-3 mr-1" />}
                          {currentStepData.type === 'flashcard' && <Star className="w-3 h-3 mr-1" />}
                          {currentStepData.type === 'accordion' && <ChevronRight className="w-3 h-3 mr-1" />}
                          {currentStepData.type === 'tabs' && <CheckCircle className="w-3 h-3 mr-1" />}
                          {currentStepData.type === 'steps' && <Trophy className="w-3 h-3 mr-1" />}
                          {currentStepData.type === 'highlight' && <Sparkles className="w-3 h-3 mr-1" />}
                          {currentStepData.type.charAt(0).toUpperCase() + currentStepData.type.slice(1)}
                        </Badge>
                      </div>

                      {/* Title */}
                      <motion.h2 
                        className="text-xl font-bold text-center text-gray-900 mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        {currentStepData.title}
                      </motion.h2>

                      {/* All Content in Scrollable Area */}
                      <motion.div 
                        className="flex flex-col"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        {/* Image Content - Hide for audio/video/youtube steps */}
                        {currentStepData.imageUrl && 
                         currentStepData.type !== 'audio' && 
                         currentStepData.type !== 'video' && 
                         currentStepData.type !== 'youtube' && (
                          <motion.div 
                            className="mb-4 text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            <div className="relative inline-block">
                              <img 
                                src={currentStepData.imageUrl} 
                                alt={currentStepData.title}
                                className="max-w-full h-auto max-h-80 object-contain rounded-lg shadow-lg cursor-pointer"
                                onClick={() => handleImageZoom(currentStepData.imageUrl!)}
                              />
                              <Button
                                variant="outline"
                                size="sm"
                                className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                                onClick={() => handleImageZoom(currentStepData.imageUrl!)}
                              >
                                <ZoomIn className="w-4 h-4" />
                              </Button>
                            </div>
                          </motion.div>
                        )}
                      {/* Text Content */}
                      <div className="mb-4">
                        <p className="text-gray-800 text-base font-semibold leading-relaxed text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                          {currentStepData.content}
                        </p>
                        
                        {currentStepData.hint && (
                          <div className="mt-3 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-blue-400 shadow-sm">
                            <p className="text-blue-800 text-sm font-medium">
                              💡 <strong className="text-indigo-700">Hint:</strong> {currentStepData.hint}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Audio Content */}
                      {currentStepData.type === 'audio' && currentStepData.audioUrl && (
                        <motion.div 
                          className="mb-6"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <EnhancedAudioPlayer
                            audio={{
                              url: currentStepData.audioUrl,
                              title: currentStepData.title || 'Audio Lesson',
                              transcript: currentStepData.content
                            }}
                            onComplete={() => setAudioCompleted(true)}
                            showTranscript={true}
                          />
                        </motion.div>
                      )}

                      {/* Video Content */}
                      {currentStepData.type === 'video' && currentStepData.videoUrl && (
                        <motion.div 
                          className="mb-6 bg-gradient-to-br from-red-50 to-pink-100 p-6 rounded-xl border border-red-200"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <video 
                            ref={videoRef}
                            controls 
                            className="w-full rounded-lg"
                            preload="metadata"
                            style={{ maxHeight: isFullScreen ? '50vh' : '300px' }}
                            onPlay={() => setVideoPlaying(true)}
                            onPause={() => setVideoPlaying(false)}
                            onEnded={() => {
                              setVideoPlaying(false);
                              setVideoCompleted(true);
                            }}
                          >
                            <source src={currentStepData.videoUrl} type="video/mp4" />
                            Your browser does not support the video element.
                          </video>
                          <p className="text-sm text-red-600 text-center mt-3">
                            📱 Tap to play video • Use fullscreen for better viewing
                          </p>
                          {!videoCompleted && (
                            <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                              <p className="text-sm text-yellow-800 text-center font-medium">
                                ⏸️ Watch the complete video to continue to the next slide
                              </p>
                            </div>
                          )}
                        </motion.div>
                      )}

                      {/* YouTube Content */}
                      {currentStepData.type === 'youtube' && currentStepData.youtubeId && (
                        <motion.div 
                          className="mb-6"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <EnhancedYouTubePlayer
                            video={{
                              videoId: currentStepData.youtubeId,
                              title: currentStepData.title || 'Educational Video',
                              description: currentStepData.content,
                              duration: currentStepData.videoDuration || 0
                            }}
                            onComplete={() => setVideoCompleted(true)}
                            showDescription={true}
                            requireFullWatch={currentStepData.requireFullWatch || false}
                            minimumWatchTime={currentStepData.minimumWatchTime || 0}
                          />
                        </motion.div>
                      )}

                      {/* Quiz Options */}
                      {currentStepData.type === 'quiz' && currentStepData.options && (
                        <motion.div 
                          className="space-y-3 mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          {currentStepData.options.map((option, index) => (
                            <motion.button
                              key={index}
                              onClick={() => handleAnswerSelect(index)}
                              className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${
                                selectedAnswer === index
                                  ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-900 shadow-lg transform scale-[1.02]'
                                  : 'border-gray-300 bg-gradient-to-r from-white to-gray-50 hover:border-indigo-400 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 text-gray-800'
                              }`}
                              whileHover={{ scale: 1.01 }}
                              whileTap={{ scale: 0.99 }}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + index * 0.1 }}
                            >
                              <div className="flex items-center gap-3">
                                <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold transition-colors ${
                                  selectedAnswer === index
                                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md'
                                    : 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700'
                                }`}>
                                  {String.fromCharCode(65 + index)}
                                </div>
                                <span className="font-semibold text-base">{option}</span>
                              </div>
                            </motion.button>
                          ))}
                          
                          {/* Quiz Submit Button - Inside scrollable area */}
                          {currentStepData.type === 'quiz' && !showResult && (
                            <motion.div 
                              className="flex justify-center pt-4"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5 }}
                            >
                              <Button
                                onClick={handleSubmitAnswer}
                                disabled={selectedAnswer === null}
                                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-base border-0"
                                size="lg"
                              >
                                Check Answer
                              </Button>
                            </motion.div>
                          )}
                        </motion.div>
                      )}

                      {/* Flashcard Content - Enhanced Flippable Version */}
                      {currentStepData.type === 'flashcard' && currentStepData.flashcard && (
                        <>
                          {console.log('🎯 FLASHCARD DEBUG:')}
                          {console.log('📊 currentStepData:', currentStepData)}
                          {console.log('💳 flashcard object:', currentStepData.flashcard)}
                          {console.log('❓ question:', currentStepData.flashcard.question)}
                          {console.log('✅ answer:', currentStepData.flashcard.answer)}
                          {console.log('🎨 icon:', currentStepData.flashcard.icon)}
                          <FlippableFlashcard 
                            flashcard={currentStepData.flashcard}
                            backgroundColor={getSlideByIndex(lessonState.currentStep)?.backgroundColor}
                            textColor={getSlideByIndex(lessonState.currentStep)?.textColor}
                          />
                        </>
                      )}

                      {/* Accordion Content */}
                      {currentStepData.type === 'accordion' && currentStepData.accordion && (
                        <motion.div 
                          className="mb-6 space-y-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          {currentStepData.accordion.map((item, index) => (
                            <div key={index} className="bg-teal-50 border border-teal-200 rounded-lg">
                              <div className="bg-teal-100 p-3 font-medium text-teal-800 rounded-t-lg">
                                {item.title}
                              </div>
                              <div className="p-3 text-gray-700">
                                {item.content}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}

                      {/* Tabs Content */}
                      {currentStepData.type === 'tabs' && currentStepData.tabs && (
                        <motion.div 
                          className="mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="border border-cyan-200 rounded-lg overflow-hidden">
                            {currentStepData.tabs.map((tab, index) => (
                              <div key={index} className="border-b border-cyan-200 last:border-b-0">
                                <div className="bg-cyan-100 p-3 font-medium text-cyan-800">
                                  {tab.label}
                                </div>
                                <div className="p-3 bg-white text-gray-700">
                                  {tab.content}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {/* Steps Content */}
                      {currentStepData.type === 'steps' && currentStepData.steps && (
                        <motion.div 
                          className="mb-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="space-y-3">
                            {currentStepData.steps.map((step, index) => (
                              <div key={index} className="flex items-start gap-3 p-3 bg-violet-50 border border-violet-200 rounded-lg">
                                <div className="flex-shrink-0 w-6 h-6 bg-violet-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                  {index + 1}
                                </div>
                                <div>
                                  <h4 className="font-medium text-violet-800 mb-1">{step.title}</h4>
                                  <p className="text-gray-700 text-sm">{step.content}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}

                      {/* Highlights Content */}
                      {currentStepData.type === 'highlight' && currentStepData.highlights && (
                        <motion.div 
                          className="mb-6 space-y-3"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          {currentStepData.highlights.map((highlight, index) => (
                            <div 
                              key={index} 
                              className={`p-3 rounded-lg border ${
                                highlight.type === 'info' ? 'bg-blue-50 border-blue-200 text-blue-800' :
                                highlight.type === 'warning' ? 'bg-yellow-50 border-yellow-200 text-yellow-800' :
                                highlight.type === 'success' ? 'bg-green-50 border-green-200 text-green-800' :
                                highlight.type === 'error' ? 'bg-red-50 border-red-200 text-red-800' :
                                'bg-gray-50 border-gray-200 text-gray-800'
                              }`}
                            >
                              {highlight.text}
                            </div>
                          ))}
                        </motion.div>
                      )}
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ) : (
              /* Result Card */
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <Card className={`shadow-xl border-0 ${isCorrect ? 'bg-green-50' : 'bg-red-50'} ${isFullScreen ? 'h-[70vh]' : 'min-h-[60vh]'} flex flex-col`}>
                  <CardContent className="p-8 text-center flex-1 flex flex-col justify-center">
                    <motion.div 
                      className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center ${
                        isCorrect ? 'bg-green-500' : 'bg-red-500'
                      }`}
                      animate={{ 
                        rotate: isCorrect ? [0, 10, -10, 0] : [0, -10, 10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      {isCorrect ? (
                        <CheckCircle className="w-10 h-10 text-white" />
                      ) : (
                        <X className="w-10 h-10 text-white" />
                      )}
                    </motion.div>

                    <motion.h2 
                      className={`text-4xl font-extrabold mb-4 ${
                        isCorrect ? 'text-green-700' : 'text-red-700'
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {isCorrect ? '🎉 Correct!' : '😔 Oops!'}
                    </motion.h2>

                    {isCorrect && (
                      <motion.div 
                        className="flex items-center justify-center gap-2 mb-4"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                      >
                        <Zap className="w-6 h-6 text-yellow-500" />
                        <span className="font-bold text-lg text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">+10 XP</span>
                      </motion.div>
                    )}

                    <motion.p 
                      className={`text-base mb-8 font-semibold ${
                        isCorrect ? 'text-green-600' : 'text-red-600'
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {currentStepData.explanation}
                    </motion.p>

                    {/* Result content ends here - navigation handled by bottom arrows */}
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Hearts Warning */}
      <AnimatePresence>
        {lessonState.hearts <= 1 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 z-40"
          >
            <Card className="bg-red-500 text-white shadow-xl">
              <CardContent className="p-4">
                <motion.div 
                  className="flex items-center gap-3"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart className="w-6 h-6" />
                  <div>
                    <p className="font-bold">Low on hearts!</p>
                    <p className="text-sm text-red-100">Be careful with your next answer</p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Zoom Modal */}
      <AnimatePresence>
        {showImageZoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setShowImageZoom(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-5xl max-h-full bg-white p-4 rounded-xl shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={zoomedImageSrc} 
                alt="Zoomed image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowImageZoom(false)}
                className="absolute top-6 right-6 bg-gray-600 hover:bg-gray-700 text-white border-2 border-gray-400 shadow-lg"
              >
                <X className="w-6 h-6" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation */}
      {!showCompletionPopup && (
        <BottomNavigation
          currentStep={lessonState.currentStep}
          totalSteps={steps.length}
          onPrevious={handlePreviousStep}
          onNext={handleNextStep}
          canGoBack={lessonState.currentStep > 0 && !showResult}
          canGoForward={
            showResult 
              ? true // Always allow going forward when showing quiz results
              : currentStepData.type === 'audio' 
                ? true // Always allow proceeding from audio slides
                : (currentStepData.type === 'video' || currentStepData.type === 'youtube')
                  ? true // Always allow proceeding from video slides
                  : currentStepData.type !== 'quiz' || selectedAnswer !== null
          }
          isFullScreen={isFullScreen}
          showResult={showResult}
        />
      )}

      {/* Celebration Animation */}
      <AnimatePresence>
        {showCelebration && (
          <CelebrationAnimation
            type={showCelebration}
            onComplete={() => {
              setShowCelebration(null);
              // Remove auto-advance - let user manually continue when ready
              // User must manually click Continue button to proceed
            }}
            isFullScreen={isFullScreen}
          />
        )}
      </AnimatePresence>

      {/* Lesson Completion Popup */}
      {showCompletionPopup && (
        <LessonCompletion
          lessonTitle={lesson.title || "ECG Lesson"}
          score={Math.max(0, lessonState.score - (lessonState.mistakes * 5))}
          totalXP={(() => {
            const finalScore = Math.max(0, lessonState.score - (lessonState.mistakes * 5));
            const baseXP = finalScore >= 95 ? 75 : finalScore >= 80 ? 50 : finalScore >= 70 ? 30 : 20;
            const bonusXP = lessonState.mistakes === 0 && finalScore >= 95 ? 25 : 0;
            return baseXP + bonusXP;
          })()}
          totalGems={(() => {
            const finalScore = Math.max(0, lessonState.score - (lessonState.mistakes * 5));
            return finalScore >= 95 ? 10 : finalScore >= 80 ? 5 : finalScore >= 70 ? 3 : 1;
          })()}
          timeSpent={Math.round((Date.now() - lessonState.startTime) / 1000)}
          tasksCompleted={lessonState.correctAnswers}
          totalTasks={lessonState.totalQuestions}
          onContinue={handleCompletionContinue}
          showAnimation={true}
        />
      )}
    </div>
  );
};

export default EnhancedNativeLesson;
