import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { DailyTask } from '@/types/game';
import { CheckCircle, Circle, Star, Brain, FileText, Activity, Zap, Play } from 'lucide-react';
import YouTubeVideoTask from './YouTubeVideoTask';
import LessonVideoTask from './LessonVideoTask';
import { motion, AnimatePresence } from 'framer-motion';
import { useRewardSound } from '@/hooks/useRewardSound';
import { useUISounds } from '@/hooks/useUISounds';
import EnhancedImage from './EnhancedImage';

interface TaskCardProps {
  task: DailyTask;
  onComplete: (taskId: string, isCorrect: boolean) => void;
  modalMode?: boolean;
  onCloseModal?: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onComplete, modalMode, onCloseModal }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [xpFloat, setXpFloat] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [motivation, setMotivation] = useState('');
  const [timer, setTimer] = useState(60);
  const [timedOut, setTimedOut] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const { playRewardSound } = useRewardSound();
  const { playClickSound, playCorrectSound, playErrorSound } = useUISounds();

  const getTaskIcon = () => {
    switch (task.type) {
      case 'quiz': return <Brain className="w-5 h-5" />;
      case 'flashcard': return <FileText className="w-5 h-5" />;
      case 'case': return <Activity className="w-5 h-5" />;
      case 'rhythm': return <Zap className="w-5 h-5" />;
      case 'lead-match': return <Star className="w-5 h-5" />;
      case 'video': return <Play className="w-5 h-5" />;
      default: return <Circle className="w-5 h-5" />;
    }
  };

  const getDifficultyColor = () => {
    switch (task.difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleSubmit = () => {
    if (task.type === 'flashcard') {
      // Play reward sound for flashcard completion
      playRewardSound();
      onComplete(task.id, true);
      setMotivation('Great! Keep going.');
      
      // Close modal after short delay if in modal mode
      if (modalMode && onCloseModal) {
        setTimeout(() => {
          onCloseModal();
        }, 1500);
      }
      return;
    }
    
    if (selectedAnswer !== null) {
      const isCorrect = selectedAnswer === task.correctAnswer;
      setShowAnswer(true);
      
      if (isCorrect) {
        setXpFloat(true);
        setMotivation('Nice! Keep it up!');
        // Play correct answer sound
        playCorrectSound();
        // Play reward sound for correct answer
        playRewardSound();
      } else {
        setMotivation('Keep trying! Review the explanation.');
        // Play error sound for wrong answer
        playErrorSound();
      }
      
      // Complete the task and close modal automatically
      setTimeout(() => {
        setXpFloat(false);
        onComplete(task.id, isCorrect);
        
        // Close modal after completion if in modal mode
        if (modalMode && onCloseModal) {
          setTimeout(() => {
            onCloseModal();
          }, 1000);
        }
      }, isCorrect ? 1800 : 1200); // Longer delay for correct answers to show reward
    }
  };

  const handleFlashcardFlip = () => {
    setFlipped(!flipped);
  };

  // Timer effect for quiz in modalMode
  useEffect(() => {
    if (modalMode && task.type === 'quiz' && !showAnswer && !timedOut) {
      if (timer > 0) {
        const interval = setInterval(() => setTimer((t) => t - 1), 1000);
        return () => clearInterval(interval);
      } else {
        setTimedOut(true);
        setShowAnswer(true);
        setMotivation('Time is up!');
        onComplete(task.id, false);
        
        // Close modal after timeout
        if (onCloseModal) {
          setTimeout(() => {
            onCloseModal();
          }, 2000);
        }
      }
    }
  }, [modalMode, task.type, timer, showAnswer, timedOut, onComplete, task.id, onCloseModal]);

  if (task.type === 'video' && (task.youtubeVideoId || task.youtubeEmbedUrl)) {
    console.log('🎬 Rendering lesson video task:', task);
    return (
      <LessonVideoTask
        task={{
          id: task.id,
          type: task.type,
          xp: task.xp || task.points || 10,
          gems: task.gems || 5,
          youtubeVideoId: task.youtubeVideoId || '',
          youtubeEmbedUrl: task.youtubeEmbedUrl || `https://www.youtube.com/embed/${task.youtubeVideoId}`,
          youtubeWatchUrl: task.youtubeWatchUrl || `https://www.youtube.com/watch?v=${task.youtubeVideoId}`,
          youtubeThumbnail: task.youtubeThumbnail || `https://img.youtube.com/vi/${task.youtubeVideoId}/maxresdefault.jpg`,
          videoDuration: task.videoDuration || 300,
          videoTitle: task.videoTitle || task.title,
          videoDescription: task.videoDescription || task.explanation,
          watchTimeRequired: task.watchTimeRequired || task.minimumWatchTime,
          minimumWatchTime: task.minimumWatchTime || task.watchTimeRequired,
          content: task.content || {}
        }}
        onComplete={(taskId, success) => onComplete(taskId, success)}
      />
    );
  }

  if (task.completed) {
    return (
      <Card className="border-green-200 bg-green-50 transform transition-all duration-300 hover:scale-105">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 animate-bounceIn" />
              <CardTitle className="text-lg text-green-800">{task.title}</CardTitle>
            </div>
            <Badge className="bg-green-100 text-green-800 animate-pulse">+{task.earnedPoints} XP</Badge>
          </div>
        </CardHeader>
        <CardContent>
          {motivation && <div className="text-green-700 text-sm mt-2 text-center animate-fadeIn">{motivation}</div>}
        </CardContent>
      </Card>
    );
  }

  // Card color by difficulty
  const difficultyBg = task.difficulty === 'easy' ? 'bg-green-50 border-green-200' :
    task.difficulty === 'medium' ? 'bg-yellow-50 border-yellow-200' :
    task.difficulty === 'hard' ? 'bg-red-50 border-red-200' : 'bg-blue-50 border-blue-200';
  const difficultyBadge = task.difficulty === 'easy' ? 'bg-green-500' : task.difficulty === 'medium' ? 'bg-yellow-500' : 'bg-red-500';

  if (modalMode && task.type === 'quiz') {
    return (
      <div className="p-2 sm:p-4 w-full max-w-[95vw] max-w-sm sm:max-w-md mx-auto">
        <div className="flex items-center justify-between mb-4">
          <span className={`font-bold text-lg capitalize text-gray-900`}>{task.title}</span>
          <span className={`ml-2 px-3 py-1 rounded-full font-bold text-white text-sm ${difficultyBadge}`}>+{task.points} XP</span>
        </div>
        {/* ECG Image Display in modal */}
        {(task.imageUrl || task.ecgImageUrl) && (
          <div className="mb-4">
            <div className="relative overflow-hidden rounded-lg border bg-gray-50">
              <img
                src={task.imageUrl || task.ecgImageUrl}
                alt="ECG Strip"
                className={`w-full h-auto max-h-64 object-contain transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'} cursor-zoom-in`}
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageLoaded(true)}
                onClick={() => setZoomed(true)}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
              )}
            </div>
            {/* Zoom Modal */}
            {zoomed && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={() => setZoomed(false)}>
                <img
                  src={task.imageUrl || task.ecgImageUrl}
                  alt="ECG Strip Zoomed"
                  className="max-w-full max-h-full object-contain cursor-zoom-out shadow-2xl rounded-lg border-4 border-white"
                />
              </div>
            )}
          </div>
        )}
        <div className="mb-2 text-gray-700 font-semibold">{task.question}</div>
        {/* Timer for quiz in modalMode */}
        {modalMode && task.type === 'quiz' && !showAnswer && (
          <div className="w-full flex justify-center mb-2">
            <span className={`px-3 py-1 rounded-full font-bold text-white ${timer <= 10 ? 'bg-red-500 animate-pulse' : 'bg-blue-500'}`}>Time Left: {timer}s</span>
          </div>
        )}
        {timedOut && (
          <div className="w-full flex justify-center mb-2">
            <span className="px-3 py-1 rounded-full font-bold text-white bg-red-600">Time's up!</span>
          </div>
        )}
        {task.options && (
          <div className="space-y-2 mb-4">
            {task.options.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  playClickSound(); // Play click sound for answer selection
                  setSelectedAnswer(index);
                }}
                className={`w-full p-3 text-left rounded-lg border transition-all duration-300 hover:scale-102 font-medium
                  ${selectedAnswer === index ? 'border-blue-500 bg-blue-50 shadow-md' : 'border-gray-200 hover:border-gray-300'}
                  ${showAnswer ? (index === task.correctAnswer ? 'border-green-500 bg-green-50 animate-pulse' : selectedAnswer === index ? 'border-red-500 bg-red-50 animate-shake' : '') : ''}
                `}
                disabled={showAnswer}
              >
                {option}
              </button>
            ))}
          </div>
        )}
        <button
          onClick={handleSubmit}
          disabled={selectedAnswer === null || showAnswer}
          className={`w-full py-3 rounded-lg font-bold text-white mt-2 transition-all duration-300
            ${showAnswer ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {showAnswer ? (timedOut ? 'Time Up - Closing...' : 'Processing... ⚡') : 'Complete Task'}
        </button>
        {motivation && <div className="text-blue-700 text-sm mt-2 text-center animate-fadeIn">{motivation}</div>}
        {/* Explanation after answer */}
        {showAnswer && task.explanation && (
          <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400 animate-fadeIn mt-3">
            <div>
              <button
                className="text-xs text-blue-700 underline mb-1"
                onClick={() => setShowExplanation((v) => !v)}
              >
                {showExplanation ? 'Hide Explanation' : 'Show Explanation'}
              </button>
              {showExplanation && <p className="text-sm text-blue-800 mt-1">{task.explanation}</p>}
            </div>
            {modalMode && (
              <div className="text-xs text-gray-600 mt-2 text-center">
                {timedOut ? 'Closing automatically...' : 'Task completed! Closing automatically...'}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  if (modalMode && task.type === 'video') {
    // Video modal with progress bar and CTA
    const [progress, setProgress] = useState(0);
    const [watched, setWatched] = useState(false);
    useEffect(() => {
      if (!watched && progress < 100) {
        const duration = task.videoDuration || 60;
        const interval = setInterval(() => {
          setProgress((p) => {
            if (p >= 100) return 100;
            return p + 100 / duration;
          });
        }, 1000);
        return () => clearInterval(interval);
      }
    }, [watched, progress, task.videoDuration]);
    return (
      <div className="w-full min-h-0 flex flex-col p-3 sm:p-4 max-h-full overflow-hidden">
        <div className="flex items-center justify-between mb-3 flex-shrink-0">
          <span className="font-bold text-lg capitalize text-gray-900 line-clamp-1">{task.title}</span>
          <div className="flex gap-2 items-center flex-shrink-0">
            <span className="px-3 py-1 rounded-full font-bold text-white text-sm bg-blue-500">+{task.points || 10} XP</span>
            {task.gems ? <span className="px-3 py-1 rounded-full font-bold text-white text-sm bg-pink-500">+{task.gems} Gems</span> : null}
          </div>
        </div>
        
        <div className="mb-3 text-gray-700 font-semibold flex-shrink-0 line-clamp-2">{task.videoDescription}</div>
        
        <div className="w-full rounded-lg overflow-hidden mb-4 bg-black flex-shrink-0 max-h-[40vh]" style={{ aspectRatio: '16/9' }}>
          <iframe
            src={task.youtubeEmbedUrl || `https://www.youtube.com/embed/${task.youtubeVideoId}`}
            title={task.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg"
          />
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-3 mb-4 flex-shrink-0">
          <div
            className="bg-blue-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <button
          onClick={() => { setWatched(true); onComplete(task.id, true); }}
          disabled={watched || progress < 100}
          className={`w-full py-3 rounded-lg font-bold text-white transition-all duration-300 flex-shrink-0
            ${watched ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
        >
          {watched ? 'Completed' : progress < 100 ? 'Watch Full Video to Complete' : 'Mark as Watched'}
        </button>
      </div>
    );
  }

  // Inline card for video task
  if (task.type === 'video' && !modalMode) {
    return (
      <div className={`rounded-xl p-4 mb-2 shadow-md border-2 flex items-center gap-4 bg-blue-50 border-blue-200`}>
        {task.youtubeThumbnail && (
          <img src={task.youtubeThumbnail} alt="Video" className="w-16 h-16 object-contain rounded-lg border bg-white" />
        )}
        <div className="flex-1">
          <span className="font-bold text-lg mb-1 capitalize text-gray-900 block">{task.title}</span>
          <span className="text-xs text-blue-700 font-bold">Video Task</span>
        </div>
        <div className="flex flex-col gap-1 items-end">
          <span className="px-3 py-1 rounded-full font-bold text-white text-sm bg-blue-500">+{task.points || 10} XP</span>
          {task.gems ? <span className="px-3 py-1 rounded-full font-bold text-white text-sm bg-pink-500">+{task.gems} Gems</span> : null}
        </div>
      </div>
    );
  }

  return (
    <Card className={`border-2 ${difficultyBg} hover:shadow-lg transition-all duration-300 hover:scale-[1.02] p-2 sm:p-4`} id={task.type === 'quiz' ? 'quiz-section' : undefined}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {getTaskIcon()}
            <CardTitle className="text-lg">{task.title}</CardTitle>
          </div>
          <div className="flex gap-2">
            <Badge className={getDifficultyColor()}>{task.difficulty}</Badge>
            <Badge variant="secondary">{task.points} XP</Badge>
          </div>
        </div>
        {/* Timer for quiz in modalMode */}
        {modalMode && task.type === 'quiz' && !showAnswer && (
          <div className="w-full flex justify-center mt-2">
            <span className={`px-3 py-1 rounded-full font-bold text-white ${timer <= 10 ? 'bg-red-500 animate-pulse' : 'bg-blue-500'}`}>Time Left: {timer}s</span>
          </div>
        )}
        {timedOut && (
          <div className="w-full flex justify-center mt-2">
            <span className="px-3 py-1 rounded-full font-bold text-white bg-red-600">Time's up!</span>
          </div>
        )}
      </CardHeader>
      <CardContent>
        {/* ECG Image Display */}
        {(task.imageUrl || task.ecgImageUrl) && (
          <div className="mb-4">
            <EnhancedImage
              src={task.imageUrl || task.ecgImageUrl}
              alt="ECG Strip"
              className="w-full max-h-64 rounded-lg border bg-gray-50"
              downloadFileName={`ecg-task-${task.id}.png`}
              enableZoom={true}
              enableRotation={true}
              enableFullscreen={true}
              enableDownload={true}
            />
          </div>
        )}

        {task.type === 'flashcard' ? (
          <div className="space-y-4">
            <div 
              className="min-h-[100px] bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md"
              onClick={handleFlashcardFlip}
            >
              <p className="text-center font-medium">
                {flipped ? task.correctAnswer : task.question}
              </p>
            </div>
            <p className="text-sm text-gray-600 text-center">
              Click to flip the card
            </p>
            {flipped && (
              <Button onClick={handleSubmit} className="w-full transition-all duration-300 hover:scale-105">
                Mark Complete ✨
              </Button>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <p className="font-medium">{task.question}</p>
            {task.options && (
              <div className="space-y-2">
                {task.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      playClickSound(); // Play click sound for answer selection
                      setSelectedAnswer(index);
                    }}
                    className={`w-full p-3 text-left rounded-lg border transition-all duration-300 hover:scale-102 ${
                      selectedAnswer === index
                        ? 'border-blue-500 bg-blue-50 shadow-md'
                        : 'border-gray-200 hover:border-gray-300'
                    } ${
                      showAnswer
                        ? index === task.correctAnswer
                          ? 'border-green-500 bg-green-50 animate-pulse'
                          : selectedAnswer === index
                          ? 'border-red-500 bg-red-50 animate-shake'
                          : ''
                        : ''
                    }`}
                    disabled={showAnswer}
                  >
                    {option}
                    {/* Animated check/cross icon */}
                    <AnimatePresence>
                      {showAnswer && index === task.correctAnswer && (
                        <motion.span
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1.2, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="inline-block ml-2 align-middle"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        </motion.span>
                      )}
                      {showAnswer && selectedAnswer === index && index !== task.correctAnswer && (
                        <motion.span
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1.2, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="inline-block ml-2 align-middle"
                        >
                          <Circle className="w-4 h-4 text-red-500" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                ))}
              </div>
            )}
            {/* XP Float Animation */}
            <AnimatePresence>
              {xpFloat && (
                <motion.div
                  initial={{ y: 0, opacity: 1 }}
                  animate={{ y: -40, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-1 rounded-full bg-green-500 text-white font-bold shadow text-sm z-20"
                  style={{ pointerEvents: 'none' }}
                >
                  +{task.points} XP
                </motion.div>
              )}
            </AnimatePresence>
            {/* Explanation Toggle */}
            {showAnswer && task.explanation && (
              <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400 animate-fadeIn">
                <button
                  className="text-xs text-blue-700 underline mb-1"
                  onClick={() => setShowExplanation((v) => !v)}
                >
                  {showExplanation ? 'Hide Explanation' : 'Show Explanation'}
                </button>
                {showExplanation && <p className="text-sm text-blue-800 mt-1">{task.explanation}</p>}
              </div>
            )}
            <Button 
              onClick={handleSubmit} 
              disabled={selectedAnswer === null || showAnswer}
              className="w-full transition-all duration-300 hover:scale-105"
            >
              {showAnswer ? 'Processing... ⚡' : 'Submit Answer 🚀'}
            </Button>
            {/* Motivating message */}
            {motivation && <div className="text-blue-700 text-sm mt-2 text-center animate-fadeIn">{motivation}</div>}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TaskCard;