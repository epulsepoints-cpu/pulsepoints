import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, CheckCircle, Clock, Trophy, ArrowRight, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TaskData } from '../../../types/eventTypes';

interface Props {
  task: TaskData;
  onComplete: (score: number) => void;
  onProgress: (progress: number) => void;
}

// YouTube Player API types
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function AdvancedVideoTask({ task, onComplete, onProgress }: Props) {
  const [player, setPlayer] = useState<any>(null);
  const [videoState, setVideoState] = useState<'unstarted' | 'playing' | 'paused' | 'ended'>('unstarted');
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({});
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [watchTime, setWatchTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [apiLoaded, setApiLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  
  const playerRef = useRef<HTMLDivElement>(null);
  const watchTimeRef = useRef<ReturnType<typeof setInterval>>();

  // Extract video data from task
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

  // Load YouTube Player API
  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        setApiLoaded(true);
      };
    } else {
      setApiLoaded(true);
    }

    // Cleanup function
    return () => {
      if (watchTimeRef.current) {
        clearInterval(watchTimeRef.current);
      }
    };
  }, []);

  // Initialize YouTube Player
  useEffect(() => {
    if (apiLoaded && playerRef.current && !player) {
      try {
        const newPlayer = new window.YT.Player(playerRef.current, {
          height: '100%',
          width: '100%',
          videoId: videoId,
          playerVars: {
            autoplay: 0,
            controls: 1,
            rel: 0,
            modestbranding: 1,
            fs: 1,
            cc_load_policy: 0,
            iv_load_policy: 3,
            enablejsapi: 1
          },
          events: {
            onReady: handlePlayerReady,
            onStateChange: handlePlayerStateChange,
            onError: handlePlayerError
          }
        });
        setPlayer(newPlayer);
      } catch (error) {
        console.error('Error initializing YouTube player:', error);
        setVideoError(true);
      }
    }
  }, [apiLoaded, player, videoId]);

  const handlePlayerReady = useCallback((event: any) => {
    console.log('YouTube player ready');
    const duration = event.target.getDuration();
    setVideoDuration(duration || videoData.duration);
  }, [videoData.duration]);

  const handlePlayerStateChange = useCallback((event: any) => {
    const state = event.data;
    switch (state) {
      case window.YT.PlayerState.PLAYING:
        setVideoState('playing');
        startWatchTimeTracking();
        break;
      case window.YT.PlayerState.PAUSED:
        setVideoState('paused');
        stopWatchTimeTracking();
        break;
      case window.YT.PlayerState.ENDED:
        setVideoState('ended');
        stopWatchTimeTracking();
        if (videoData.quizPoints.length > 0) {
          startQuiz();
        } else {
          completeTask({});
        }
        break;
      default:
        setVideoState('unstarted');
        break;
    }
  }, [videoData.quizPoints]);

  const handlePlayerError = useCallback((event: any) => {
    console.error('YouTube player error:', event.data);
    setVideoError(true);
  }, []);

  const startWatchTimeTracking = () => {
    if (watchTimeRef.current) {
      clearInterval(watchTimeRef.current);
    }
    
    watchTimeRef.current = setInterval(() => {
      setWatchTime(prev => {
        const newTime = prev + 1;
        const progress = Math.min((newTime / videoDuration) * 60, 60);
        onProgress(20 + progress);
        
        // Check for quiz triggers
        if (videoData.quizPoints.length > 0) {
          const triggerQuiz = videoData.quizPoints.find(quiz => 
            Math.abs(quiz.time - newTime) < 1 && !quizAnswers.hasOwnProperty(videoData.quizPoints.indexOf(quiz))
          );
          
          if (triggerQuiz && player) {
            player.pauseVideo();
            const quizIndex = videoData.quizPoints.indexOf(triggerQuiz);
            setCurrentQuizIndex(quizIndex);
            setShowQuiz(true);
          }
        }
        
        return newTime;
      });
    }, 1000);
  };

  const stopWatchTimeTracking = () => {
    if (watchTimeRef.current) {
      clearInterval(watchTimeRef.current);
    }
  };

  const startQuiz = () => {
    stopWatchTimeTracking();
    setShowQuiz(true);
    setCurrentQuizIndex(0);
    onProgress(80);
  };

  const handleQuizAnswer = (answerIndex: number) => {
    const newAnswers = { ...quizAnswers, [currentQuizIndex]: answerIndex };
    setQuizAnswers(newAnswers);
    setShowQuiz(false);

    if (currentQuizIndex < videoData.quizPoints.length - 1) {
      // Resume video after quiz
      if (player && videoState !== 'ended') {
        player.playVideo();
      }
    } else {
      // All quizzes completed
      if (videoState === 'ended' || watchTime >= videoDuration * 0.8) {
        completeTask(newAnswers);
      } else {
        // Resume video to completion
        if (player) {
          player.playVideo();
        }
      }
    }
  };

  const completeTask = (finalAnswers: { [key: number]: number }) => {
    stopWatchTimeTracking();
    
    const correctAnswers = videoData.quizPoints.filter((quiz, index) => 
      finalAnswers[index] === quiz.correct
    ).length;
    
    const quizScore = videoData.quizPoints.length > 0 
      ? (correctAnswers / videoData.quizPoints.length) * 40 
      : 40;
    const watchScore = Math.min((watchTime / videoDuration) * 60, 60);
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

    setTimeout(() => {
      onComplete(totalScore);
    }, 2000);
  };

  if (taskCompleted) {
    const correctAnswers = videoData.quizPoints.filter((quiz, index) => 
      quizAnswers[index] === quiz.correct
    ).length;
    const score = Math.round(
      (videoData.quizPoints.length > 0 ? (correctAnswers / videoData.quizPoints.length) * 40 : 40) + 
      Math.min((watchTime / videoDuration) * 60, 60)
    );

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-green-50 border-2 border-green-500 rounded-xl p-6 text-center"
      >
        <Trophy className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-900 mb-2">Video Task Completed!</h3>
        {videoData.quizPoints.length > 0 && (
          <p className="text-green-700 mb-4">
            You scored {correctAnswers}/{videoData.quizPoints.length} quiz questions correct
          </p>
        )}
        <div className="text-2xl font-bold text-green-800">
          +{score} XP
        </div>
        <p className="text-sm text-green-600 mt-2">Continuing automatically...</p>
      </motion.div>
    );
  }

  if (showQuiz && videoData.quizPoints[currentQuizIndex]) {
    const currentQuiz = videoData.quizPoints[currentQuizIndex];
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
            <div className="text-center mb-4">
              <CheckCircle className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <h3 className="text-lg font-bold text-gray-900">
                Quiz Question {currentQuizIndex + 1}
              </h3>
              <p className="text-sm text-gray-500">
                Time: {Math.floor(currentQuiz.time / 60)}:
                {(currentQuiz.time % 60).toString().padStart(2, '0')}
              </p>
            </div>
            
            <p className="text-gray-800 mb-4 font-medium">
              {currentQuiz.question}
            </p>
            
            <div className="space-y-2">
              {currentQuiz.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleQuizAnswer(index)}
                  className="w-full text-left p-3 rounded-lg border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200"
                >
                  <span className="font-medium">{String.fromCharCode(65 + index)}. </span>
                  {option}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  if (videoError) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h3 className="text-lg font-bold text-red-900 mb-2">Video Unavailable</h3>
        <p className="text-red-700 mb-4">
          Unable to load the video. This might be due to YouTube restrictions.
        </p>
        <div className="space-y-3">
          <a
            href={videoData.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            <Play className="w-4 h-4 mr-2" />
            Watch on YouTube
          </a>
          {videoData.quizPoints.length > 0 && (
            <button
              onClick={startQuiz}
              className="block w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Skip to Quiz
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Video Section */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{videoData.title}</h2>
          <p className="text-gray-600">{videoData.description}</p>
        </div>
        
        <div className="relative bg-black aspect-video">
          {!apiLoaded ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                <p className="text-white">Loading player...</p>
              </div>
            </div>
          ) : (
            <div ref={playerRef} className="w-full h-full" />
          )}
          
          {/* Progress Overlay */}
          {apiLoaded && (
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black bg-opacity-70 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white text-sm">
                    Progress: {Math.floor(watchTime / 60)}:{(watchTime % 60).toString().padStart(2, '0')} / 
                    {Math.floor(videoDuration / 60)}:{(videoDuration % 60).toString().padStart(2, '0')}
                  </div>
                  <div className="text-white text-sm capitalize">
                    {videoState}
                  </div>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div 
                    className="bg-red-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${videoDuration > 0 ? (watchTime / videoDuration) * 100 : 0}%` }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Instructions */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-2">Interactive Video Instructions:</h3>
        <ol className="text-blue-800 space-y-1 text-sm">
          <li>1. Watch the embedded YouTube video</li>
          <li>2. {videoData.quizPoints.length > 0 ? 'Quiz questions will appear during the video' : 'Watch to completion'}</li>
          <li>3. {videoData.quizPoints.length > 0 ? 'Answer all quiz questions correctly for maximum points' : 'Full completion gives maximum points'}</li>
          <li>4. Progress is tracked automatically</li>
        </ol>
      </div>
    </div>
  );
}
