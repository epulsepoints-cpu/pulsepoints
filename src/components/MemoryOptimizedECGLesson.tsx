import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ArrowLeft, 
  ChevronLeft,
  ChevronRight,
  CheckCircle, 
  X,
  Heart,
  Target,
  ZoomIn
} from 'lucide-react';
import { Lesson } from '@/types/learning';
import { useUISounds } from '@/hooks/useUISounds';
import { useGameState } from '@/hooks/useGameState';
import LessonCompletion from '@/components/LessonCompletionMobile';
import StarRating from '@/components/StarRating';
import { checkAchievements } from '@/services/achievementService';
import { getUserProgressStats } from '@/services/progressService';
import styles from './MemoryOptimizedECGLesson.module.css';

interface MemoryOptimizedECGLessonProps {
  lesson: Lesson;
  onComplete: (score: number, timeSpent: number) => void;
  onExit: () => void;
  userHearts: number;
  onHeartLost: () => void;
  isFullScreen?: boolean;
}

const MemoryOptimizedECGLesson: React.FC<MemoryOptimizedECGLessonProps> = ({
  lesson,
  onComplete,
  onExit,
  userHearts,
  onHeartLost,
  isFullScreen = false
}) => {
  const { playClickSound, playCorrectSound, playErrorSound } = useUISounds();
  const { gameState } = useGameState();
  
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [hearts, setHearts] = useState(userHearts);
  const [startTime] = useState(Date.now());
  const [showImageZoom, setShowImageZoom] = useState(false);
  const [zoomedImageSrc, setZoomedImageSrc] = useState<string>('');
  const [showHeartAnimation, setShowHeartAnimation] = useState(false);
  const [showKeyboardHelp, setShowKeyboardHelp] = useState(false);
  const [heartAnimationType, setHeartAnimationType] = useState<'lost' | 'gained'>('lost');
  const [showCompletionPopup, setShowCompletionPopup] = useState(false);
  const [lessonScore, setLessonScore] = useState(0);
  const [lessonTimeSpent, setLessonTimeSpent] = useState(0);
  const [starRating, setStarRating] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  // Touch/Swipe gesture support for mobile
  const [isSwiping, setIsSwiping] = useState(false);
  const [showSwipeHint, setShowSwipeHint] = useState(true);

  // Generate simple steps from lesson data
  const generateSteps = () => {
    const steps = [];
    
    console.log('🔍 Lesson Debug Info:');
    console.log('📖 Lesson Title:', lesson.title);
    console.log('📋 Lesson ID:', lesson.id);
    console.log('🎯 Lesson Content:', lesson.content);
    console.log('📚 Content Slides:', lesson.content?.slides);
    console.log('🎮 Tasks:', lesson.tasks);
    
    // Add lesson introduction
    steps.push({
      id: 'lesson-intro',
      type: 'content' as const,
      title: lesson.title,
      content: lesson.content?.introduction || `Welcome to ${lesson.title}`,
      imageUrl: '/lessonimages/heart-anatomy-overview.png'
    });
    
    // First, add content slides if they exist
    if (lesson.content?.slides && Array.isArray(lesson.content.slides)) {
      console.log('📖 Adding', lesson.content.slides.length, 'content slides');
      lesson.content.slides.forEach((slide, index) => {
        console.log(`  Slide ${index + 1}:`, slide.title, '(ID:', slide.id, 'Type:', slide.type, ')');
        
        // Create step based on slide type
        const step: any = {
          id: slide.id || `slide-${index}`,
          type: slide.type || 'content' as const,
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
        }

        steps.push(step);
      });
    } else {
      console.log('❌ No content slides found or slides is not an array');
    }
    
    // Then add lesson tasks as interactive steps (with multiple steps per task)
    if (lesson.tasks) {
      console.log('🎯 Adding', lesson.tasks.length, 'interactive tasks');
      lesson.tasks.forEach((task, index) => {
        console.log(`  Task ${index + 1}:`, task.id, 'Type:', task.type, 'Content keys:', Object.keys(task.content || {}));
        
        // 1. Add task introduction step
        steps.push({
          id: `${task.id}-intro`,
          type: 'content' as const,
          title: `Task ${index + 1}: ${task.type?.charAt(0).toUpperCase() + task.type?.slice(1).replace('-', ' ') || 'Activity'}`,
          content: `Get ready for an interactive ${task.type || 'learning'} task worth ${task.xp || 10} XP!`,
          imageUrl: task.images?.mainImage || '/lessonimages/heart-anatomy-overview.png'
        });
        
        // 2. Add audio/listening step if available
        if (task.audio?.mainNarration?.transcript) {
          console.log(`    → Audio listening step for task ${task.id}`);
          steps.push({
            id: `${task.id}-listening`,
            type: 'content' as const,
            title: `🎧 Audio Lesson: ${task.type?.charAt(0).toUpperCase() + task.type?.slice(1) || 'Listen'} Narration`,
            content: task.audio.mainNarration.transcript,
            imageUrl: task.images?.mainImage,
            hint: 'Listen carefully to the audio content'
          });
        }
        
        // 3. Add main task step based on content structure
        if (task.content && typeof task.content === 'object') {
          
          if ('question' in task.content) {
            // Quiz task - has question and options
            console.log(`    → Quiz task: ${task.content.question}`);
            steps.push({
              id: `${task.id}-quiz`,
              type: 'quiz' as const,
              title: 'Quiz Challenge',
              content: task.content.question,
              options: task.content.options,
              correctAnswer: task.content.correctAnswer,
              explanation: task.content.explanation,
              imageUrl: task.content.imageUrl || task.images?.mainImage
            });
            
          } else if ('front' in task.content && 'back' in task.content) {
            // Flashcard task - has front and back
            console.log(`    → Flashcard task: ${task.content.front}`);
            steps.push({
              id: `${task.id}-flashcard`,
              type: 'content' as const,
              title: task.content.front,
              content: task.content.back,
              imageUrl: task.images?.mainImage
            });
            
          } else if ('videoUrl' in task.content || task.type === 'video') {
            // Video task - has videoUrl and description
            console.log(`    → Video task: ${task.content.videoTitle || task.content.title || 'Video'}`);
            steps.push({
              id: `${task.id}-video`,
              type: 'content' as const,
              title: `🎥 ${task.content.videoTitle || task.content.title || 'Learning Video'}`,
              content: task.content.videoDescription || task.content.description || 'Watch this educational video to learn more.',
              imageUrl: task.images?.mainImage,
              hint: task.content.completionRequirement
            });
            
          } else if ('questions' in task.content && Array.isArray(task.content.questions)) {
            // Final assessment with multiple questions
            console.log(`    → Final assessment with ${task.content.questions.length} questions`);
            
            // Add assessment intro
            steps.push({
              id: `${task.id}-assessment-intro`,
              type: 'content' as const,
              title: 'Final Assessment',
              content: task.content.prerequisiteMessage || 'Complete this final assessment to master the lesson!',
              imageUrl: task.images?.mainImage
            });
            
            // Add each question as a separate step
            task.content.questions.forEach((question, qIndex) => {
              console.log(`      → Assessment question ${qIndex + 1}: ${question.question}`);
              steps.push({
                id: `${task.id}-question-${qIndex + 1}`,
                type: 'quiz' as const,
                title: `Assessment Question ${qIndex + 1}`,
                content: question.question,
                options: question.options,
                correctAnswer: typeof question.correctAnswer === 'string' ? parseInt(question.correctAnswer) : question.correctAnswer,
                explanation: question.explanation,
                imageUrl: question.imageUrl || task.images?.mainImage
              });
            });
            
          } else {
            // General content task - try to extract meaningful content
            console.log(`    → General content task`);
            const contentText = task.content.description || 
                               (task.content as any).audioTranscript || 
                               task.content.title ||
                               'Interactive learning activity';
            steps.push({
              id: `${task.id}-content`,
              type: 'content' as const,
              title: `Activity: ${task.type || 'Learning'}`,
              content: contentText,
              imageUrl: task.images?.mainImage
            });
          }
          
        } else if (task.content && typeof task.content === 'string') {
          // Simple content string
          console.log(`    → Simple string content task`);
          steps.push({
            id: `${task.id}-simple`,
            type: 'content' as const,
            title: `Activity: ${task.type || 'Learning'}`,
            content: task.content,
            imageUrl: task.images?.mainImage
          });
          
        } else {
          // Fallback - create basic content step
          console.log(`    → Fallback content task`);
          steps.push({
            id: `${task.id}-fallback`,
            type: 'content' as const,
            title: `${task.type?.charAt(0).toUpperCase() + task.type?.slice(1) || 'Activity'}`,
            content: `Interactive ${task.type || 'learning'} activity`,
            imageUrl: task.images?.mainImage
          });
        }
      });
    } else {
      console.log('❌ No tasks found');
    }

    console.log('📚 Total steps generated:', steps.length);
    console.log('🗂️ Steps:', steps.map(s => ({ id: s.id, type: s.type, title: s.title })));
    return steps;
  };

  const [steps] = useState(generateSteps());
  const currentStepData = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  // Image zoom handler
  const handleImageZoom = (imageSrc: string) => {
    playClickSound();
    setZoomedImageSrc(imageSrc);
    setShowImageZoom(true);
  };

  // Heart animation
  const showHeartAnimationModal = (type: 'lost' | 'gained') => {
    setHeartAnimationType(type);
    setShowHeartAnimation(true);
    setTimeout(() => setShowHeartAnimation(false), 2000);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    playClickSound();
    setSelectedAnswers([answerIndex]);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswers.length === 0) return;

    const correct = selectedAnswers[0] === currentStepData.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);

    if (correct) {
      playCorrectSound();
      setCorrectAnswers(prev => prev + 1);
    } else {
      playErrorSound();
      const newHeartCount = hearts - 1;
      setHearts(newHeartCount);
      onHeartLost();
      showHeartAnimationModal('lost');
    }
  };

  const handleContinue = () => {
    setShowResult(false);
    setSelectedAnswers([]);
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Lesson completed - show completion popup first
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      const score = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 85;
      
      setLessonScore(score);
      setLessonTimeSpent(timeSpent);
      setShowCompletionPopup(true);
    }
  };

  const handleCompletionContinue = async () => {
    console.log('🎯 MemoryOptimizedECGLesson: Starting lesson completion process');
    setShowCompletionPopup(false);
    
    // Check achievements after lesson completion
    if (gameState.isAuthenticated && !gameState.isGuestUser && gameState.user?.id) {
      try {
        console.log('🔍 MemoryOptimizedECGLesson: Checking achievements for authenticated user', gameState.user.id);
        
        // Get current user stats first
        const currentStats = await getUserProgressStats(gameState.user.id);
        console.log('📊 MemoryOptimizedECGLesson: Current stats before lesson:', currentStats);
        
        // Calculate new stats after this lesson
        const isFirstLesson = (currentStats?.totalLessons || 0) === 0;
        const isPerfectScore = lessonScore >= 95;
        const isFastCompletion = lessonTimeSpent < 180; // Under 3 minutes
        
        const newStats = {
          totalLessons: (currentStats?.totalLessons || 0) + 1,
          completedModules: currentStats?.completedModules || [],
          currentStreak: currentStats?.currentStreak || 1,
          perfectLessons: (currentStats?.perfectLessons || 0) + (isPerfectScore ? 1 : 0),
          fastCompletions: (currentStats?.fastCompletions || 0) + (isFastCompletion ? 1 : 0)
        };
        
        console.log('📈 MemoryOptimizedECGLesson: New stats to check:', newStats);

        // Check for achievement unlocks
        const newlyCompleted = await checkAchievements(gameState.user.id, newStats);
        
        if (newlyCompleted.length > 0) {
          console.log('🎉 New achievements unlocked:', newlyCompleted);
        } else {
          console.log('ℹ️ No new achievements unlocked');
        }
      } catch (error) {
        console.error('❌ Failed to check achievements:', error);
      }
    } else {
      console.log('👤 MemoryOptimizedECGLesson: Guest user or not authenticated, skipping achievement check');
    }
    
    console.log('✅ MemoryOptimizedECGLesson: Calling onComplete with score:', lessonScore, 'time:', lessonTimeSpent);
    onComplete(lessonScore, lessonTimeSpent);
  };

  const handlePreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setShowResult(false);
      setSelectedAnswers([]);
    }
  };

  // Enhanced Mobile-Optimized Swipe functionality and keyboard shortcuts for fullscreen
  useEffect(() => {
    let startX: number | null = null;
    let startY: number | null = null;
    let startTime: number = 0;
    let isHorizontalSwipe = false;
    let preventScroll = false;
    let swipeThreshold = 60; // Base threshold
    
    // Adjust swipe threshold based on screen size
    const updateSwipeThreshold = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 375) {
        swipeThreshold = 40; // Smaller threshold for very small screens
      } else if (screenWidth < 768) {
        swipeThreshold = 50; // Medium threshold for mobile
      } else {
        swipeThreshold = 70; // Larger threshold for tablets
      }
    };
    
    updateSwipeThreshold();

    const handleTouchStart = (e: TouchEvent) => {
      // Ignore if touch started on an interactive element
      const target = e.target as HTMLElement;
      if (target.closest('button, input, select, textarea, a, [role="button"]')) {
        return;
      }
      
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      startTime = Date.now();
      isHorizontalSwipe = false;
      preventScroll = false;
      setIsSwiping(false);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (startX === null || startY === null) return;
      
      const touch = e.touches[0];
      const currentX = touch.clientX;
      const currentY = touch.clientY;
      const deltaX = Math.abs(currentX - startX);
      const deltaY = Math.abs(currentY - startY);
      
      // Determine if this is a horizontal swipe (better threshold for mobile)
      if (deltaX > 20 && deltaX > deltaY * 1.8) {
        isHorizontalSwipe = true;
        setIsSwiping(true);
        preventScroll = true;
        
        // Only prevent scroll for horizontal swipes to avoid breaking vertical scrolling
        if (preventScroll) {
          e.preventDefault();
        }
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (startX === null || startY === null) {
        startX = null;
        startY = null;
        return;
      }
      
      const touch = e.changedTouches[0];
      const endX = touch.clientX;
      const endY = touch.clientY;
      const deltaX = endX - startX;
      const deltaY = endY - startY;
      const deltaTime = Date.now() - startTime;
      
      // More mobile-friendly swipe detection with velocity consideration
      const distance = Math.abs(deltaX);
      const velocity = distance / deltaTime; // pixels per millisecond
      const maxSwipeTime = 600; // Maximum time for a valid swipe
      
      const isValidSwipe = distance > swipeThreshold && 
                          Math.abs(deltaX) > Math.abs(deltaY) * 1.5 && 
                          deltaTime < maxSwipeTime &&
                          velocity > 0.1 && // Minimum velocity
                          isHorizontalSwipe;
      
      if (isValidSwipe) {
        // Hide swipe hint after first successful swipe
        setShowSwipeHint(false);
        
        // Add haptic feedback on supported devices
        if ('vibrate' in navigator) {
          navigator.vibrate(10);
        }
        
        if (deltaX > 0 && currentStep > 0) {
          // Swipe right - go to previous step
          playClickSound();
          handlePreviousStep();
        } else if (deltaX < 0 && (currentStepData?.type !== 'quiz' || showResult)) {
          // Swipe left - go to next step (only if quiz is answered or not a quiz)
          playClickSound();
          handleContinue();
        }
      }
      
      // Reset touch state
      startX = null;
      startY = null;
      setIsSwiping(false);
      isHorizontalSwipe = false;
      preventScroll = false;
    };

    // Handle window resize to update swipe threshold
    const handleResize = () => {
      updateSwipeThreshold();
    };

    // Keyboard shortcuts for fullscreen navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      // Work in both fullscreen and regular mode for better accessibility
      switch (e.key) {
        case 'Escape':
          if (isFullScreen) onExit();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          if (currentStep > 0) handlePreviousStep();
          break;
        case 'ArrowRight':
          e.preventDefault();
          if (currentStep < steps.length - 1 || (currentStepData?.type === 'quiz' && showResult)) {
            handleContinue();
          }
          break;
        case ' ': // Spacebar
          e.preventDefault();
          if (currentStepData?.type === 'quiz' && !showResult && selectedAnswers.length > 0) {
            handleSubmitAnswer();
          } else if (currentStep < steps.length - 1 || (currentStepData?.type === 'quiz' && showResult)) {
            handleContinue();
          }
          break;
        case 'Enter':
          e.preventDefault();
          if (currentStepData?.type === 'quiz' && !showResult && selectedAnswers.length > 0) {
            handleSubmitAnswer();
          } else if (currentStep < steps.length - 1 || (currentStepData?.type === 'quiz' && showResult)) {
            handleContinue();
          }
          break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
          e.preventDefault();
          if (currentStepData?.type === 'quiz' && !showResult) {
            const index = parseInt(e.key) - 1;
            if (index < (currentStepData.options?.length || 0)) {
              handleAnswerSelect(index);
            }
          }
          break;
      }
    };

    // Add event listeners with proper passive/active configuration for mobile
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: false }); // Allow preventDefault for swipes
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    if (isFullScreen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', handleResize);
      if (isFullScreen) {
        document.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [currentStep, currentStepData?.type, showResult, isFullScreen]);

  // Show keyboard help briefly when entering fullscreen
  useEffect(() => {
    if (isFullScreen) {
      setShowKeyboardHelp(true);
      const timer = setTimeout(() => setShowKeyboardHelp(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isFullScreen]);

  // Auto-hide swipe hint after 5 seconds
  useEffect(() => {
    if (isFullScreen && showSwipeHint) {
      const timer = setTimeout(() => setShowSwipeHint(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [isFullScreen, showSwipeHint]);

  if (!currentStepData) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-white">Loading lesson...</p>
      </div>
    );
  }

  return (
    <div className={`${isFullScreen ? 'fixed inset-0 z-50' : 'h-screen'} flex flex-col bg-gradient-to-br from-gray-50 via-white to-gray-100 lesson-viewer-mobile ${isFullScreen ? `lesson-fullscreen-mode ${styles.lessonFullscreenMode}` : ''}`}>
      
      {/* Main Content - Full Viewport when in fullscreen */}
      <div className={`flex-1 flex flex-col overflow-hidden relative z-10 ${isFullScreen ? 'p-0' : 'p-2 pb-20 lesson-safe-area-pb'}`}>
        <Card className={`h-full ${isFullScreen ? 'bg-transparent border-0 shadow-none rounded-none' : 'bg-white/95 border border-gray-200 rounded-lg shadow-xl backdrop-blur-sm'}`}>
          <CardContent className={`${isFullScreen ? 'p-0' : 'p-3'} h-full flex flex-col`}>
            
            {/* Compact Mobile Header - Optimized for fullscreen */}
            <div className={`flex-shrink-0 ${isFullScreen ? 'mb-1' : 'mb-2'}`}>
              <div className={`flex items-center justify-between ${isFullScreen ? 'mb-1' : 'mb-2'}`}>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onExit}
                  className={`text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-50 border border-gray-300 hover:border-gray-400 px-2 py-1 rounded text-xs shadow-sm ${isFullScreen ? 'fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-sm' : ''}`}
                >
                  <ArrowLeft className="w-3 h-3 mr-1" />
                  {isFullScreen ? 'Exit' : 'Back'}
                </Button>
                
                <div className={`flex items-center gap-1.5 bg-white px-2 py-1 rounded border border-gray-300 shadow-sm ${isFullScreen ? 'fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm' : ''}`}>
                  <Heart className="w-3 h-3 text-red-500 fill-current" />
                  <span className="text-xs font-bold text-red-600">{hearts}</span>
                </div>
              </div>

              {/* Progress indicators only shown in non-fullscreen mode */}
              {!isFullScreen && (
                <>
                  {/* Unit Progress Indicator */}
                  {currentStepData?.id?.includes('unit') && (
                    <div className="mb-2 p-2 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg border border-blue-200">
                      <div className="flex items-center justify-center">
                        <span className="text-xs font-semibold text-blue-700">
                          {currentStepData.id.includes('unit1') && '🎯 Unit 1: Heart Foundation'}
                          {currentStepData.id.includes('unit2') && '🎯 Unit 2: Heart Chambers'}
                          {currentStepData.id.includes('unit3') && '🎯 Unit 3: Heart Valves'}
                          {currentStepData.id.includes('unit4') && '🎯 Unit 4: Coronary System'}
                          {currentStepData.id.includes('unit5') && '🎯 Unit 5: Electrical System'}
                          {currentStepData.id.includes('unit6') && '🎯 Unit 6: Heart Sounds'}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Compact Progress Bar */}
                  <div className="relative bg-gray-100 rounded-full h-1.5 mb-1 border border-gray-200 shadow-sm">
                    <div 
                      className="bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 h-full rounded-full transition-all duration-500" 
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  
                  <div className="flex justify-between text-xs">
                    <span className="text-white bg-gray-600 px-1.5 py-0.5 rounded text-xs shadow-sm">{currentStep + 1}/{steps.length}</span>
                    <span className="text-white bg-gray-700 px-1.5 py-0.5 rounded text-xs shadow-sm">{Math.round(progress)}%</span>
                  </div>
                </>
              )}
            </div>

            {/* Content Area - Maximized for fullscreen */}
            <div className={`flex-1 overflow-y-auto bg-transparent rounded-none p-0 border-0 shadow-none lesson-content-scroll ${isFullScreen ? 'px-4 pt-4 pb-4' : 'sm:bg-gray-50/50 sm:rounded-lg sm:p-3 sm:border sm:border-gray-200 sm:shadow-inner'}`}>
              <div className="text-center space-y-3 max-w-4xl mx-auto px-2">
                <h2 className={`${isFullScreen ? 'text-2xl md:text-3xl' : 'text-lg'} font-bold text-white bg-gray-700 px-3 py-1.5 rounded shadow-md mb-3`}>
                  {currentStepData.title}
                </h2>

                {currentStepData.imageUrl && (
                  <div className={`relative group cursor-pointer bg-white p-2 rounded-lg shadow-lg border border-gray-200 ${isFullScreen ? 'max-w-none' : ''}`} onClick={() => handleImageZoom(currentStepData.imageUrl)}>
                    <img 
                      src={currentStepData.imageUrl} 
                      alt={currentStepData.title}
                      className={`w-full ${isFullScreen ? 'max-h-96 md:max-h-[60vh]' : 'max-h-48'} object-contain mx-auto rounded-lg`}
                    />
                    <div className="absolute top-4 right-4 bg-gray-600 text-white p-2 rounded-full opacity-80 group-hover:opacity-100 transition-opacity shadow-lg">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                )}

                {/* Audio Content - Enhanced for fullscreen */}
                {currentStepData.type === 'audio' && currentStepData.audioUrl && (
                  <div className={`bg-gradient-to-br from-blue-50 to-indigo-100 ${isFullScreen ? 'p-8' : 'p-6'} rounded-xl shadow-lg border border-blue-200`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`${isFullScreen ? 'w-16 h-16' : 'w-14 h-14'} bg-blue-500 rounded-full flex items-center justify-center shadow-md`}>
                        <svg className={`${isFullScreen ? 'w-8 h-8' : 'w-7 h-7'} text-white`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.794l-4.5-3.5A1 1 0 003 12.5v-5a1 1 0 01.383-.794l4.5-3.5zM15 8.75a.75.75 0 01.75.75 3.5 3.5 0 010 7 .75.75 0 01-.75-.75v-7z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold text-gray-800 ${isFullScreen ? 'text-xl' : 'text-lg'}`}>🎵 Audio Lesson</h3>
                        <p className={`${isFullScreen ? 'text-base' : 'text-sm'} text-gray-600`}>Listen carefully to learn about heart sounds</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-inner">
                      <audio 
                        controls 
                        className={`w-full ${isFullScreen ? 'h-16' : 'h-12'}`}
                        preload="metadata"
                        style={{ 
                          borderRadius: '8px',
                          outline: 'none'
                        }}
                      >
                        <source src={currentStepData.audioUrl} type="audio/mpeg" />
                        <source src={currentStepData.audioUrl} type="audio/wav" />
                        <source src={currentStepData.audioUrl} type="audio/ogg" />
                        Your browser does not support the audio element.
                      </audio>
                      <div className={`mt-3 ${isFullScreen ? 'text-sm' : 'text-xs'} text-gray-500 text-center`}>
                        🎧 Use headphones for the best learning experience
                      </div>
                    </div>
                  </div>
                )}

                {/* Video Content - Enhanced for fullscreen */}
                {currentStepData.type === 'video' && currentStepData.videoUrl && (
                  <div className={`bg-gradient-to-br from-red-50 to-pink-100 ${isFullScreen ? 'p-8' : 'p-6'} rounded-xl shadow-lg border border-red-200`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`${isFullScreen ? 'w-16 h-16' : 'w-14 h-14'} bg-red-500 rounded-full flex items-center justify-center shadow-md`}>
                        <svg className={`${isFullScreen ? 'w-8 h-8' : 'w-7 h-7'} text-white`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold text-gray-800 ${isFullScreen ? 'text-xl' : 'text-lg'}`}>🎥 Video Lesson</h3>
                        <p className={`${isFullScreen ? 'text-base' : 'text-sm'} text-gray-600`}>Watch this educational video to understand better</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-2 shadow-inner">
                      <video 
                        controls 
                        className="w-full rounded-lg"
                        preload="metadata"
                        style={{ maxHeight: isFullScreen ? '70vh' : '400px' }}
                        poster="/lessonimages/heart-anatomy-overview.png"
                      >
                        <source src={currentStepData.videoUrl} type="video/mp4" />
                        <source src={currentStepData.videoUrl} type="video/webm" />
                        <source src={currentStepData.videoUrl} type="video/ogg" />
                        Your browser does not support the video element.
                      </video>
                      <div className={`mt-3 ${isFullScreen ? 'text-sm' : 'text-xs'} text-gray-500 text-center`}>
                        📱 Tap to play video • Use fullscreen for better viewing
                      </div>
                    </div>
                  </div>
                )}

                {/* YouTube Video Content - Enhanced for fullscreen */}
                {currentStepData.type === 'youtube' && currentStepData.youtubeId && (
                  <div className={`bg-gradient-to-br from-red-50 to-yellow-100 ${isFullScreen ? 'p-8' : 'p-6'} rounded-xl shadow-lg border border-red-200`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`${isFullScreen ? 'w-16 h-16' : 'w-14 h-14'} bg-red-600 rounded-full flex items-center justify-center shadow-md`}>
                        <svg className={`${isFullScreen ? 'w-8 h-8' : 'w-7 h-7'} text-white`} fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold text-gray-800 ${isFullScreen ? 'text-xl' : 'text-lg'}`}>📺 YouTube Educational Video</h3>
                        <p className={`${isFullScreen ? 'text-base' : 'text-sm'} text-gray-600`}>Watch this comprehensive educational content</p>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-2 shadow-inner">
                      <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                        <iframe
                          src={`https://www.youtube.com/embed/${currentStepData.youtubeId}?rel=0&modestbranding=1`}
                          title={currentStepData.title}
                          frameBorder="0"
                          allowFullScreen
                          className="absolute top-0 left-0 w-full h-full rounded-lg"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        />
                      </div>
                      <div className={`mt-3 ${isFullScreen ? 'text-sm' : 'text-xs'} text-gray-500 text-center`}>
                        🎬 Watch in fullscreen for the best experience
                      </div>
                    </div>
                  </div>
                )}

                <div className={`${isFullScreen ? 'bg-white/95 p-6 rounded-xl shadow-lg border border-gray-200 backdrop-blur-sm' : 'bg-white p-3 rounded shadow-md border border-gray-200'}`}>
                  <p className={`${isFullScreen ? 'text-lg md:text-xl' : 'text-base'} text-gray-800 font-medium leading-relaxed`}>
                    {currentStepData.content}
                  </p>
                  {currentStepData.hint && (
                    <div className={`mt-3 ${isFullScreen ? 'p-4' : 'p-2'} bg-blue-50 border-l-4 border-blue-400 rounded-r-lg`}>
                      <p className={`${isFullScreen ? 'text-base' : 'text-sm'} text-blue-800 italic`}>
                        💡 {currentStepData.hint}
                      </p>
                    </div>
                  )}
                </div>

                {currentStepData.type === 'quiz' && (
                  <div className={`space-y-3 w-full ${isFullScreen ? 'max-w-3xl mx-auto px-2' : 'max-w-2xl mx-auto px-1'}`}>
                    {currentStepData.options?.map((option, index) => (
                      <Button
                        key={index}
                        variant={selectedAnswers.includes(index) ? "default" : "outline"}
                        onClick={() => handleAnswerSelect(index)}
                        className={`w-full ${isFullScreen ? 'p-4 text-base min-h-[60px]' : 'p-3 text-sm min-h-[50px]'} text-left justify-start font-medium rounded shadow border transition-all ${
                          selectedAnswers.includes(index) 
                            ? 'bg-gray-700 hover:bg-gray-800 text-white border-gray-600' 
                            : 'bg-white hover:bg-gray-50 text-gray-800 border-gray-300 hover:border-gray-400'
                        } ${showResult ? 'opacity-60' : ''}`}
                        disabled={showResult}
                      >
                        <div className={`${styles.quizOptionContainer}`}>
                          <span className={`${styles.quizOptionLabel} ${
                            selectedAnswers.includes(index) 
                              ? 'bg-white text-gray-700 border-white' 
                              : 'border-gray-400'
                          } border ${isFullScreen ? 'text-sm' : 'text-xs'}`}>
                            {String.fromCharCode(65 + index)}
                          </span>
                          <span className={`${styles.quizOptionText} ${styles.quizOption}`}>
                            {option}
                          </span>
                        </div>
                      </Button>
                    ))}

                    {selectedAnswers.length > 0 && !showResult && (
                      <Button 
                        onClick={handleSubmitAnswer} 
                        className={`w-full mt-4 bg-green-600 hover:bg-green-700 text-white ${isFullScreen ? 'p-4 text-lg' : 'p-3 text-base'} font-bold rounded shadow border border-green-400`}
                      >
                        Submit Answer
                      </Button>
                    )}
                  </div>
                )}

                {showResult && (
                  <div className={`mt-4 p-3 rounded border shadow ${
                    isCorrect 
                      ? 'bg-green-100 border-green-400' 
                      : 'bg-red-100 border-red-400'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      {isCorrect ? (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      ) : (
                        <X className="w-6 h-6 text-red-600" />
                      )}
                      <h3 className={`text-lg font-bold ${
                        isCorrect ? 'text-green-700' : 'text-red-700'
                      }`}>
                        {isCorrect ? 'Excellent!' : 'Not quite right!'}
                      </h3>
                    </div>
                    
                    {currentStepData.explanation && (
                      <div className={`p-2 rounded ${
                        isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
                      }`}>
                        <p className={`text-sm font-medium ${
                          isCorrect ? 'text-green-800' : 'text-red-800'
                        }`}>
                          {currentStepData.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Mobile Swipe Indicator - Enhanced for better user guidance */}
      {isFullScreen && showSwipeHint && steps.length > 1 && (
        <div className={`md:hidden ${styles.swipeIndicator}`}>
          <div className="flex items-center gap-2">
            <span className="text-lg">👈</span>
            <span className="text-xs font-medium">Swipe to navigate</span>
            <span className="text-lg">👉</span>
          </div>
          <div className="text-xs opacity-75 mt-1">
            {currentStep > 0 ? 'Previous' : ''} 
            {currentStep > 0 && currentStep < steps.length - 1 ? ' • ' : ''}
            {currentStep < steps.length - 1 ? 'Next' : ''}
          </div>
        </div>
      )}

      {/* Minimal Bottom Navigation - Ultra compact for distraction-free fullscreen */}
      <div className={`${isFullScreen ? 'fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40' : 'fixed bottom-0 left-0 right-0 z-50'} ${isFullScreen ? 'bg-black/20 backdrop-blur-sm' : 'bg-white/95 backdrop-blur-lg'} ${isFullScreen ? 'rounded-full px-3 py-1.5' : 'border border-gray-200 shadow-lg rounded-lg'} ${isFullScreen ? 'hidden md:block' : ''}`} style={{paddingBottom: isFullScreen ? '0' : 'env(safe-area-inset-bottom, 0)'}}>
        <div className={`flex items-center ${isFullScreen ? 'gap-3' : 'justify-between'} ${isFullScreen ? '' : 'px-3 py-3 max-w-md mx-auto'}`}>
          
          {/* Previous Button - Compact for fullscreen */}
          <Button
            variant="outline"
            onClick={handlePreviousStep}
            disabled={currentStep === 0}
            className={`${isFullScreen ? 'w-8 h-8 p-0' : 'w-11 h-11 p-0'} rounded-full border transition-all touch-target flex-shrink-0 ${
              currentStep === 0 
                ? 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed' 
                : isFullScreen 
                  ? 'bg-white/20 border-white/30 text-white hover:bg-white/30'
                  : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-gray-400'
            }`}
          >
            <ChevronLeft className={`${isFullScreen ? 'w-4 h-4' : 'w-5 h-5'}`} />
          </Button>

          {/* Compact Progress Indicator */}
          <div className={`${isFullScreen ? '' : 'flex items-center justify-center px-2 flex-1 min-w-0'}`}>
            {isFullScreen ? (
              // Ultra minimal progress for fullscreen - just numbers
              <div className="text-white/80 text-xs font-medium px-2">
                {currentStep + 1}/{steps.length}
              </div>
            ) : (
              // Regular progress for non-fullscreen
              steps.length <= 20 ? (
                // Show dots for lessons with 20 or fewer slides
                <div className="flex items-center gap-1">
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        index === currentStep 
                          ? 'bg-gray-700 w-3' 
                          : index < currentStep 
                            ? 'bg-green-500' 
                            : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              ) : (
                // Show progress bar for lessons with more than 20 slides
                <div className="w-full max-w-32">
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
                    <span>{currentStep + 1}</span>
                    <span>{steps.length}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div 
                      className="bg-gray-700 h-1.5 rounded-full transition-all duration-300"
                      style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                    />
                  </div>
                </div>
              )
            )}
          </div>

          {/* Next/Complete Button - Compact for fullscreen */}
          <Button
            onClick={handleContinue}
            disabled={currentStepData.type === 'quiz' && !showResult}
            className={`${isFullScreen ? 'w-8 h-8 p-0' : 'w-11 h-11 p-0'} rounded-full border transition-all touch-target flex-shrink-0 ${
              (currentStepData.type === 'quiz' && !showResult)
                ? 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed' 
                : currentStep === steps.length - 1
                  ? isFullScreen 
                    ? 'bg-green-500/80 hover:bg-green-500 text-white border-green-400/50'
                    : 'bg-green-600 hover:bg-green-700 text-white border-green-400'
                  : isFullScreen
                    ? 'bg-white/20 border-white/30 text-white hover:bg-white/30'
                    : 'bg-gray-700 hover:bg-gray-800 text-white border-gray-600'
            }`}
          >
            {currentStep === steps.length - 1 ? (
              <CheckCircle className={`${isFullScreen ? 'w-4 h-4' : 'w-5 h-5'}`} />
            ) : (
              <ChevronRight className={`${isFullScreen ? 'w-4 h-4' : 'w-5 h-5'}`} />
            )}
          </Button>
        </div>
      </div>

      {/* Image Zoom Modal */}
      {showImageZoom && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4" onClick={() => setShowImageZoom(false)}>
          <div className="relative max-w-5xl max-h-full bg-white p-4 rounded-xl shadow-2xl border border-gray-200">
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
          </div>
        </div>
      )}

      {/* Heart Animation Modal */}
      {showHeartAnimation && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center pointer-events-none">
          <div className="bg-red-600 border-4 border-red-400 rounded-2xl p-8 text-center shadow-2xl">
            <Heart className="w-16 h-16 mx-auto text-white fill-white animate-bounce mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Heart Lost!</h3>
            <p className="text-red-100 text-lg font-medium">{hearts} hearts remaining</p>
          </div>
        </div>
      )}

      {/* Keyboard shortcuts help overlay - only in fullscreen */}
      {isFullScreen && showKeyboardHelp && (
        <div className="fixed top-20 right-4 z-60 bg-black/80 text-white p-4 rounded-lg backdrop-blur-sm max-w-xs">
          <h4 className="font-bold text-sm mb-2">⌨️ Keyboard Shortcuts</h4>
          <div className="text-xs space-y-1">
            <div><kbd className="bg-gray-700 px-1 rounded">←→</kbd> Navigate</div>
            <div><kbd className="bg-gray-700 px-1 rounded">Space</kbd> Continue/Submit</div>
            <div><kbd className="bg-gray-700 px-1 rounded">1-5</kbd> Select Quiz Answer</div>
            <div><kbd className="bg-gray-700 px-1 rounded">Esc</kbd> Exit Fullscreen</div>
          </div>
        </div>
      )}

      {/* Lesson Completion Popup */}
      {showCompletionPopup && (
        <LessonCompletion
          lessonTitle={lesson.title || "ECG Lesson"}
          score={lessonScore}
          totalXP={75} // Fixed 75 XP as requested
          totalGems={10} // Fixed 10 gems as requested  
          timeSpent={lessonTimeSpent}
          tasksCompleted={totalQuestions}
          totalTasks={totalQuestions}
          onContinue={handleCompletionContinue}
          showAnimation={true}
        />
      )}
    </div>
  );
};

export default MemoryOptimizedECGLesson;
