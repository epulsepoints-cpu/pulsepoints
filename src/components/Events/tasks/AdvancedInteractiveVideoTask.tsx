import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, CheckCircle, Clock, Trophy, AlertCircle, ArrowRight, SkipForward, Maximize } from 'lucide-react';
import ReactPlayer from 'react-player';
import { TaskData } from '../../../types/eventTypes';

interface AdvancedInteractiveVideoTaskProps {
  task: TaskData;
  onProgress: (score: number) => void;
  onComplete: (score: number) => void;
}

export const AdvancedInteractiveVideoTask: React.FC<AdvancedInteractiveVideoTaskProps> = ({ 
  task, 
  onProgress, 
  onComplete 
}) => {
  // State management
  const [isPlaying, setIsPlaying] = useState(false);
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  
  // Interactive features
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({});
  const [watchedSegments, setWatchedSegments] = useState<boolean[]>([]);
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  
  // Refs
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Video data from task
  const videoData = {
    url: task.data?.youtubeUrl || 'https://www.youtube.com/watch?v=LXb3EKWsInQ',
    title: task.data?.videoTitle || task.title,
    description: task.data?.videoDescription || task.description,
    duration: task.data?.videoDuration || 300,
    quizPoints: task.data?.quizPoints || [],
    xp: task.rewards?.xp || 45,
    gems: task.rewards?.gems || 7
  };

  // Initialize watched segments tracking
  useEffect(() => {
    const segments = Math.ceil(videoData.duration / 30); // 30-second segments
    setWatchedSegments(new Array(segments).fill(false));
  }, [videoData.duration]);

  // Handle video progress
  const handleProgress = useCallback((state: any) => {
    setPlayed(state.played);
    setCurrentTime(state.playedSeconds);
    
    // Track watched segments
    const segmentIndex = Math.floor(state.playedSeconds / 30);
    setWatchedSegments(prev => {
      const newSegments = [...prev];
      if (segmentIndex < newSegments.length) {
        newSegments[segmentIndex] = true;
      }
      return newSegments;
    });
    
    // Update progress (60% for watching, 40% for quiz)
    const watchProgress = Math.min(state.played * 60, 60);
    onProgress(watchProgress);
    
    // Check for quiz triggers
    const currentQuiz = videoData.quizPoints.find(
      quiz => Math.abs(state.playedSeconds - quiz.timestamp) < 2 && !showQuiz
    );
    
    if (currentQuiz && isPlaying) {
      triggerQuiz(currentQuiz);
    }
  }, [videoData.quizPoints, showQuiz, isPlaying, onProgress]);

  // Trigger interactive quiz
  const triggerQuiz = (quizPoint: any) => {
    setIsPlaying(false);
    playerRef.current?.getInternalPlayer()?.pauseVideo?.();
    
    const quizIndex = videoData.quizPoints.findIndex(q => q.timestamp === quizPoint.timestamp);
    setCurrentQuizIndex(quizIndex);
    setShowQuiz(true);
  };

  // Handle quiz answer
  const handleQuizAnswer = (answerIndex: number) => {
    const newAnswers = { ...quizAnswers, [currentQuizIndex]: answerIndex };
    setQuizAnswers(newAnswers);
    setShowQuiz(false);
    
    // Resume video
    setTimeout(() => {
      setIsPlaying(true);
      playerRef.current?.getInternalPlayer()?.playVideo?.();
    }, 1000);
    
    // Check if this was the last quiz
    if (currentQuizIndex === videoData.quizPoints.length - 1) {
      completeVideoSection();
    }
  };

  // Complete video section
  const completeVideoSection = () => {
    const watchedPercentage = watchedSegments.filter(Boolean).length / watchedSegments.length;
    const quizScore = videoData.quizPoints.length > 0 
      ? Object.values(quizAnswers).filter((answer, index) => 
          answer === videoData.quizPoints[index]?.correct
        ).length / videoData.quizPoints.length 
      : 1;
    
    const totalScore = Math.round((watchedPercentage * 60) + (quizScore * 40));
    
    setTaskCompleted(true);
    onProgress(100);
    
    // Play success sound
    try {
      const audio = new Audio('/audio/success.mp3');
      audio.volume = 0.6;
      audio.play().catch(console.error);
    } catch (error) {
      console.error('Audio playback failed:', error);
    }
    
    // Auto-complete after showing results
    setTimeout(() => {
      onComplete(totalScore);
    }, 3000);
  };

  // Handle video end
  const handleVideoEnd = () => {
    setIsPlaying(false);
    if (videoData.quizPoints.length === 0 || Object.keys(quizAnswers).length === videoData.quizPoints.length) {
      completeVideoSection();
    }
  };

  // Skip to next quiz or end
  const handleSkipToNext = () => {
    if (currentQuizIndex < videoData.quizPoints.length - 1) {
      const nextQuiz = videoData.quizPoints[currentQuizIndex + 1];
      playerRef.current?.seekTo(nextQuiz.timestamp);
    } else {
      playerRef.current?.seekTo(duration * 0.9); // Near end
    }
  };

  // Player configuration for YouTube
  const playerConfig = {
    youtube: {
      playerVars: {
        controls: 1,
        disablekb: 0,
        enablejsapi: 1,
        fs: 1,
        iv_load_policy: 3,
        modestbranding: 1,
        playsinline: 1,
        rel: 0,
        showinfo: 0
      }
    }
  };

  // Handle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement && containerRef.current) {
      containerRef.current.requestFullscreen().catch(console.error);
      setFullscreen(true);
    } else {
      document.exitFullscreen().catch(console.error);
      setFullscreen(false);
    }
  };

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.target !== document.body) return;
      
      switch (e.key) {
        case ' ':
          e.preventDefault();
          setIsPlaying(!isPlaying);
          break;
        case 'f':
          toggleFullscreen();
          break;
        case 'm':
          setMuted(!muted);
          break;
        case 'ArrowRight':
          playerRef.current?.seekTo(currentTime + 10);
          break;
        case 'ArrowLeft':
          playerRef.current?.seekTo(currentTime - 10);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [isPlaying, muted, currentTime]);

  if (taskCompleted) {
    const quizScore = videoData.quizPoints.length > 0 
      ? Object.values(quizAnswers).filter((answer, index) => 
          answer === videoData.quizPoints[index]?.correct
        ).length / videoData.quizPoints.length 
      : 1;
    
    const watchedPercentage = watchedSegments.filter(Boolean).length / watchedSegments.length;
    const totalScore = Math.round((watchedPercentage * 60) + (quizScore * 40));

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-400 rounded-xl p-8 text-center"
      >
        <Trophy className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-900 mb-2">Interactive Video Completed!</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 border border-green-200">
            <div className="text-2xl font-bold text-green-800">{Math.round(watchedPercentage * 100)}%</div>
            <div className="text-sm text-green-600">Video Watched</div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-green-200">
            <div className="text-2xl font-bold text-blue-800">
              {Object.keys(quizAnswers).length}/{videoData.quizPoints.length}
            </div>
            <div className="text-sm text-blue-600">Quiz Questions</div>
          </div>
        </div>
        
        <div className="text-3xl font-bold text-green-800 mb-2">
          +{totalScore} XP
        </div>
        <div className="text-lg text-green-700 mb-4">
          +{videoData.gems} gems earned!
        </div>
        <p className="text-sm text-green-600">Continuing automatically...</p>
      </motion.div>
    );
  }

  if (showQuiz) {
    const currentQuiz = videoData.quizPoints[currentQuizIndex];
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-blue-900">
              Interactive Quiz • Question {currentQuizIndex + 1}/{videoData.quizPoints.length}
            </h3>
            <div className="text-sm text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
              At {Math.floor(currentQuiz.timestamp / 60)}:{(currentQuiz.timestamp % 60).toString().padStart(2, '0')}
            </div>
          </div>
          
          <p className="text-blue-800 mb-6 text-lg leading-relaxed">{currentQuiz.question}</p>
          
          <div className="space-y-3">
            {currentQuiz.options.map((option: string, index: number) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleQuizAnswer(index)}
                className="w-full text-left p-4 rounded-xl border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 bg-white"
              >
                <span className="font-bold text-blue-600">{String.fromCharCode(65 + index)}. </span>
                <span className="text-gray-800">{option}</span>
              </motion.button>
            ))}
          </div>
          
          <div className="mt-4 text-center">
            <button
              onClick={() => setShowQuiz(false)}
              className="text-blue-600 hover:text-blue-800 text-sm underline"
            >
              Continue watching (you can answer later)
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Video Player Section */}
      <div ref={containerRef} className="bg-white rounded-xl shadow-xl overflow-hidden">
        {/* Video Header */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{videoData.title}</h2>
          <p className="text-gray-600">{videoData.description}</p>
          <div className="mt-3 flex items-center gap-4 text-sm text-gray-500">
            <span>📺 Interactive YouTube Video</span>
            <span>⏱️ Duration: {Math.floor(videoData.duration / 60)}:{(videoData.duration % 60).toString().padStart(2, '0')}</span>
            {videoData.quizPoints.length > 0 && (
              <span>❓ {videoData.quizPoints.length} Quiz Questions</span>
            )}
          </div>
        </div>
        
        {/* Video Player */}
        <div className="relative bg-black aspect-video">
          {videoError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white">
              <div className="text-center">
                <AlertCircle className="w-12 h-12 mx-auto mb-4 text-red-400" />
                <p className="text-lg mb-4">Video unavailable</p>
                <a
                  href={videoData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg inline-flex items-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  Open in YouTube
                </a>
              </div>
            </div>
          ) : (
            <ReactPlayer
              ref={playerRef}
              url={videoData.url}
              config={playerConfig}
              width="100%"
              height="100%"
              playing={isPlaying}
              volume={volume}
              muted={muted}
              onReady={() => setVideoReady(true)}
              onStart={() => setIsPlaying(true)}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={handleVideoEnd}
              onError={() => setVideoError(true)}
              onDuration={(duration) => setDuration(duration)}
              onProgress={handleProgress}
              progressInterval={1000}
            />
          )}
          
          {/* Custom Controls Overlay */}
          {videoReady && !videoError && (
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black bg-opacity-75 rounded-lg p-4">
                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="flex items-center justify-between text-white text-sm mb-1">
                    <span>{Math.floor(currentTime / 60)}:{(Math.floor(currentTime) % 60).toString().padStart(2, '0')}</span>
                    <span>{Math.floor(duration / 60)}:{(Math.floor(duration) % 60).toString().padStart(2, '0')}</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-red-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${played * 100}%` }}
                    />
                  </div>
                </div>
                
                {/* Control Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-white hover:text-red-400 transition-colors"
                    >
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                    </button>
                    
                    <button
                      onClick={() => setMuted(!muted)}
                      className="text-white hover:text-red-400 transition-colors"
                    >
                      {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>
                    
                    <button
                      onClick={toggleFullscreen}
                      className="text-white hover:text-red-400 transition-colors"
                    >
                      <Maximize className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {videoData.quizPoints.length > 0 && (
                      <button
                        onClick={handleSkipToNext}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm flex items-center gap-1"
                      >
                        <SkipForward className="w-4 h-4" />
                        Next Quiz
                      </button>
                    )}
                    
                    <div className="text-white text-sm">
                      Progress: {Math.round(played * 100)}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Instructions & Progress */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
        <h3 className="font-bold text-blue-900 mb-3">Interactive Video Instructions:</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <ol className="text-blue-800 space-y-2 text-sm">
              <li>🎥 <strong>Watch</strong> the embedded YouTube video within the app</li>
              <li>❓ <strong>Answer</strong> interactive quiz questions as they appear</li>
              <li>⌨️ <strong>Keyboard shortcuts:</strong> Space (play/pause), F (fullscreen), M (mute)</li>
              <li>🏆 <strong>Earn XP</strong> based on watch time and quiz performance</li>
            </ol>
          </div>
          <div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-lg font-bold text-gray-800 mb-2">
                Watch Progress: {Math.round(played * 100)}%
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${played * 100}%` }}
                />
              </div>
              {videoData.quizPoints.length > 0 && (
                <div className="mt-2 text-sm text-gray-600">
                  Quiz Questions: {Object.keys(quizAnswers).length}/{videoData.quizPoints.length} answered
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
