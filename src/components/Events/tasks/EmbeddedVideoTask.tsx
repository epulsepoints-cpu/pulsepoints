import React, { useState, useEffect, useRef } from 'react';
import { Play, CheckCircle, Clock, Trophy, ArrowRight, Volume2, VolumeX, Maximize } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TaskData } from '../../../types/eventTypes';
import MobileTaskWrapper from './MobileTaskWrapper';

interface Props {
  task: TaskData;
  onComplete: (score: number) => void;
  onProgress: (progress: number) => void;
  onBack?: () => void;
}

export default function EmbeddedVideoTask({ task, onComplete, onProgress, onBack }: Props) {
  const [videoStarted, setVideoStarted] = useState(false);
  const [videoWatched, setVideoWatched] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({});
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [watchTime, setWatchTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [videoError, setVideoError] = useState(false);
  
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const watchTimeRef = useRef<ReturnType<typeof setInterval>>();

  // Extract video data from task (matching InteractiveVideoTask structure)
  const videoData = {
    id: task.id,
    title: task.data?.videoTitle || task.title,
    description: task.data?.videoDescription || task.description,
    videoUrl: task.data?.youtubeUrl || 'https://www.youtube.com/watch?v=LXb3EKWsInQ',
    duration: task.data?.videoDuration || 300,
    quizPoints: task.data?.quizPoints || []
  };

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string): string => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : '';
  };

  const videoId = getYouTubeVideoId(videoData.videoUrl);
  const embedUrl = `https://www.youtube.com/embed/${videoId}?enablejsapi=1&rel=0&modestbranding=1&controls=1&autoplay=0`;

  // Start watching timer when video starts
  const startWatching = () => {
    setVideoStarted(true);
    setVideoWatched(true);
    setIsPlaying(true);
    onProgress(25);
    
    // Track watch time
    watchTimeRef.current = setInterval(() => {
      setWatchTime(prev => {
        const newTime = prev + 1;
        const progress = Math.min((newTime / videoData.duration) * 60, 60); // 60% for watching
        onProgress(25 + progress);
        
        // Auto-start quiz when video is nearly finished
        if (newTime >= videoData.duration * 0.85 && videoData.quizPoints.length > 0) {
          startQuiz();
          return newTime;
        }
        
        return newTime;
      });
    }, 1000);
  };

  // Start quiz after video
  const startQuiz = () => {
    if (watchTimeRef.current) {
      clearInterval(watchTimeRef.current);
    }
    setShowQuiz(true);
    setCurrentQuizIndex(0);
    setIsPlaying(false);
    onProgress(85);
  };

  // Handle quiz answer
  const handleQuizAnswer = (answerIndex: number) => {
    const newAnswers = { ...quizAnswers, [currentQuizIndex]: answerIndex };
    setQuizAnswers(newAnswers);

    if (currentQuizIndex < videoData.quizPoints.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
    } else {
      completeTask(newAnswers);
    }
  };

  // Complete the task
  const completeTask = (finalAnswers: { [key: number]: number }) => {
    const correctAnswers = videoData.quizPoints.filter((quiz, index) => 
      finalAnswers[index] === quiz.correct
    ).length;
    
    const quizScore = videoData.quizPoints.length > 0 ? (correctAnswers / videoData.quizPoints.length) * 40 : 40; // 40% for quiz
    const watchScore = Math.min((watchTime / videoData.duration) * 60, 60); // 60% for watching
    const totalScore = Math.round(quizScore + watchScore);
    
    setTaskCompleted(true);
    onProgress(100);
    
    // Play success sound
    try {
      const audio = new Audio('/audio/win.mp3');
      audio.play().catch(console.error);
    } catch (error) {
      console.error('Error playing win sound:', error);
    }

    // Auto-complete after 2 seconds
    setTimeout(() => {
      onComplete(totalScore);
    }, 2000);
  };

  // Skip to quiz if no video interaction after some time
  const handleSkipToQuiz = () => {
    if (watchTimeRef.current) {
      clearInterval(watchTimeRef.current);
    }
    setWatchTime(videoData.duration * 0.8); // Give partial credit
    startQuiz();
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (watchTimeRef.current) {
        clearInterval(watchTimeRef.current);
      }
    };
  }, []);

  // Auto-start quiz if video takes too long to load or user doesn't interact
  useEffect(() => {
    if (videoStarted) {
      const fallbackTimer = setTimeout(() => {
        if (!showQuiz && !taskCompleted) {
          handleSkipToQuiz();
        }
      }, videoData.duration * 1000 + 30000); // Video duration + 30 seconds

      return () => clearTimeout(fallbackTimer);
    }
  }, [videoStarted, showQuiz, taskCompleted, videoData.duration]);

  if (taskCompleted) {
    const correctAnswers = videoData.quizPoints.filter((quiz, index) => 
      quizAnswers[index] === quiz.correct
    ).length;
    const score = Math.round(
      (videoData.quizPoints.length > 0 ? (correctAnswers / videoData.quizPoints.length) * 40 : 40) + 
      Math.min((watchTime / videoData.duration) * 60, 60)
    );

    return (
      <MobileTaskWrapper title="Completed!" onBack={onBack} showBackButton={!!onBack}>
        <div className="flex items-center justify-center p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 border border-green-200 rounded-xl p-6 text-center max-w-sm"
          >
            <Trophy className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-900 mb-2">Video Complete!</h3>
            {videoData.quizPoints.length > 0 && (
              <p className="text-green-700 mb-4">
                Quiz Score: {correctAnswers}/{videoData.quizPoints.length}
              </p>
            )}
            <div className="text-2xl font-bold text-green-800">
              +{score} XP
            </div>
            <p className="text-sm text-green-600 mt-2">Well done!</p>
          </motion.div>
        </div>
      </MobileTaskWrapper>
    );
  }

  if (showQuiz) {
    const currentQuiz = videoData.quizPoints[currentQuizIndex];
    return (
      <MobileTaskWrapper title="Quiz" onBack={onBack} showBackButton={!!onBack}>
        <div className="p-4 space-y-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-blue-700">
                Question {currentQuizIndex + 1} of {videoData.quizPoints.length}
              </span>
              <span className="text-xs text-blue-600">
                {Math.floor(currentQuiz.time / 60)}:{(currentQuiz.time % 60).toString().padStart(2, '0')}
              </span>
            </div>
            
            <p className="text-blue-900 font-medium mb-4">{currentQuiz.question}</p>
            
            <div className="space-y-2">
              {currentQuiz.options.map((option, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleQuizAnswer(index)}
                  className="w-full text-left p-3 rounded-lg border border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 touch-manipulation"
                >
                  <span className="font-medium">{String.fromCharCode(65 + index)}. </span>
                  {option}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </MobileTaskWrapper>
    );
  }

  return (
    <MobileTaskWrapper title={videoData.title} onBack={onBack} showBackButton={!!onBack}>
      <div className="space-y-4">
        {/* Video Section - Fullscreen */}
        <div className="bg-black aspect-video relative">
          {!videoStarted ? (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={startWatching}
                  className="bg-red-600 hover:bg-red-700 text-white rounded-full p-6 shadow-lg mb-4"
                >
                  <Play className="w-12 h-12 ml-1" />
                </motion.button>
                <p className="text-white text-lg font-medium">Click to Start Video</p>
                <p className="text-gray-300 text-sm">
                  Duration: {Math.floor(videoData.duration / 60)}:{(videoData.duration % 60).toString().padStart(2, '0')}
                </p>
              </div>
            </div>
          ) : (
            <iframe
              ref={iframeRef}
              src={embedUrl}
              title={videoData.title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              onLoad={() => console.log('Video loaded')}
              onError={() => setVideoError(true)}
            />
          )}
          
          {/* Video Controls Overlay */}
          {videoStarted && (
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black bg-opacity-70 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white text-sm">
                    {Math.floor(watchTime / 60)}:{(watchTime % 60).toString().padStart(2, '0')} / 
                    {Math.floor(videoData.duration / 60)}:{(videoData.duration % 60).toString().padStart(2, '0')}
                  </div>
                  {videoData.quizPoints.length > 0 && watchTime >= videoData.duration * 0.5 && (
                    <button
                      onClick={handleSkipToQuiz}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors"
                    >
                      Quiz
                    </button>
                  )}
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div 
                    className="bg-red-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min((watchTime / videoData.duration) * 100, 100)}%` }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Simple Instructions */}
        <div className="px-4 pb-4">
          <div className="bg-blue-50 rounded-lg p-3">
            <p className="text-blue-800 text-sm font-medium">{videoData.description}</p>
            <p className="text-blue-600 text-xs mt-1">
              Watch the video and {videoData.quizPoints.length > 0 ? 'answer quiz questions' : 'complete to earn XP'}
            </p>
          </div>
        </div>
      </div>
    </MobileTaskWrapper>
  );
}
