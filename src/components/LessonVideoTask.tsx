import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Play, Maximize2, Minimize2, Zap } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

// YouTube Player API types
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

interface LessonVideoTaskProps {
  task: {
    id: string;
    type: string;
    xp: number;
    gems?: number; // Optional - not used in lessons
    youtubeVideoId: string;
    youtubeEmbedUrl: string;
    youtubeWatchUrl: string;
    youtubeThumbnail: string;
    videoDuration: number;
    videoTitle?: string;
    videoDescription?: string;
    watchTimeRequired?: number;
    minimumWatchTime?: number;
    content?: {
      title?: string;
      videoTitle?: string;
      videoDescription?: string;
      completionMessage?: string;
      watchTimeRequired?: number;
      minimumWatchTime?: number;
    };
  };
  onComplete: (taskId: string, success: boolean) => void;
}

const LessonVideoTask: React.FC<LessonVideoTaskProps> = ({ task, onComplete }) => {
  const [watchTime, setWatchTime] = useState(0);
  const [isWatched, setIsWatched] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [actualVideoTime, setActualVideoTime] = useState(0);
  const [canComplete, setCanComplete] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const videoTrackingIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Calculate minimum watch time (use custom if provided, otherwise 60 seconds)
  const minWatchTime = task.watchTimeRequired || 
                      task.content?.watchTimeRequired || 
                      task.minimumWatchTime || 
                      task.content?.minimumWatchTime || 
                      60; // Default to 60 seconds as requested

  // Get video details
  const videoTitle = task.content?.videoTitle || task.videoTitle || task.content?.title || 'Educational Video';
  const videoDescription = task.content?.videoDescription || task.videoDescription || 'Watch this educational video to continue learning.';
  
  // Extract video ID from YouTube URL
  const videoId = task.youtubeVideoId || 
                  (task.youtubeWatchUrl ? task.youtubeWatchUrl.split('v=')[1]?.split('&')[0] : '') ||
                  (task.youtubeEmbedUrl ? task.youtubeEmbedUrl.split('/embed/')[1]?.split('?')[0] : '') ||
                  '48Oxvum8fds'; // Fallback to heart anatomy video

  // Load YouTube API and initialize player
  useEffect(() => {
    if (!showVideo) return;

    const loadYouTubeAPI = () => {
      // If YouTube API is already loaded
      if (window.YT && window.YT.Player) {
        initializePlayer();
        return;
      }

      // Load YouTube API script
      window.onYouTubeIframeAPIReady = initializePlayer;
      
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        script.async = true;
        document.body.appendChild(script);
      }
    };

    const initializePlayer = () => {
      if (!videoContainerRef.current) return;

      playerRef.current = new window.YT.Player(videoContainerRef.current, {
        height: '315',
        width: '100%',
        videoId: videoId,
        playerVars: {
          autoplay: 0,
          controls: 1,
          disablekb: 0,
          enablejsapi: 1,
          fs: 1,
          modestbranding: 1,
          rel: 0,
          showinfo: 0
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange
        }
      });
    };

    const onPlayerReady = () => {
      setIsLoading(false);
    };

    const onPlayerStateChange = (event: any) => {
      const YT = window.YT;
      
      if (event.data === YT.PlayerState.PLAYING) {
        setIsVideoPlaying(true);
        startVideoTracking();
      } else if (event.data === YT.PlayerState.PAUSED || 
                 event.data === YT.PlayerState.ENDED || 
                 event.data === YT.PlayerState.BUFFERING) {
        setIsVideoPlaying(false);
        stopVideoTracking();
      }

      if (event.data === YT.PlayerState.ENDED) {
        // Video completed naturally
        setActualVideoTime(minWatchTime);
        setCanComplete(true);
        setIsWatched(true);
      }
    };

    loadYouTubeAPI();

    return () => {
      stopVideoTracking();
      if (playerRef.current && typeof playerRef.current.destroy === 'function') {
        playerRef.current.destroy();
      }
    };
  }, [showVideo, videoId, minWatchTime]);

  // Start tracking actual video play time
  const startVideoTracking = () => {
    if (videoTrackingIntervalRef.current) return;

    videoTrackingIntervalRef.current = setInterval(() => {
      if (isVideoPlaying && playerRef.current) {
        setActualVideoTime(prev => {
          const newTime = prev + 1;
          setWatchTime(newTime); // Update display time
          
          // Check if minimum watch time is reached
          if (newTime >= minWatchTime && !canComplete) {
            setCanComplete(true);
            setIsWatched(true);
          }
          
          return newTime;
        });
      }
    }, 1000);
  };

  // Stop tracking video time
  const stopVideoTracking = () => {
    if (videoTrackingIntervalRef.current) {
      clearInterval(videoTrackingIntervalRef.current);
      videoTrackingIntervalRef.current = null;
    }
  };

  const handleComplete = () => {
    // Strict validation: must have watched minimum time via actual video playback
    if (canComplete && isWatched && actualVideoTime >= minWatchTime) {
      onComplete(task.id, true);
    } else {
      // Show warning if trying to complete without proper viewing
      console.warn('Video not fully watched. Watched:', actualVideoTime, 'Required:', minWatchTime);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const watchPercentage = Math.min((actualVideoTime / task.videoDuration) * 100, 100);
  const requiredPercentage = Math.min((minWatchTime / task.videoDuration) * 100, 100);
  
  // Enhanced embed URL with better parameters
  const enhancedEmbedUrl = `${task.youtubeEmbedUrl}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}&iv_load_policy=3`;

  return (
    <div className={`w-full ${isFullscreen ? 'fixed inset-0 z-50 bg-black' : ''}`}>
      <Card className={`${isFullscreen ? 'h-full rounded-none border-0' : 'mb-6'}`}>
        <CardContent className={`p-3 sm:p-6 ${isFullscreen ? 'h-full flex flex-col' : ''}`}>
          
          {/* Minimal Header - Just Back Arrow for Mobile */}
          <div className="mb-3 sm:mb-4">
            <div className="flex items-center justify-between">
              {/* Back button or minimal controls */}
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Video Task</span>
              </div>
              
              {showVideo && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={toggleFullscreen}
                  className="p-2"
                  style={{ minHeight: '44px', minWidth: '44px' }}
                >
                  {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                </Button>
              )}
            </div>
          </div>

          {/* Video Player Area */}
          <div className={`${isFullscreen ? 'flex-1 flex flex-col' : ''}`}>
            <div 
              ref={videoContainerRef}
              className={`relative ${isFullscreen ? 'flex-1' : 'mb-6'}`}
            >
              {!showVideo ? (
                <div className="relative group cursor-pointer" onClick={() => setShowVideo(true)}>
                  <img
                    src={task.youtubeThumbnail}
                    alt="Video thumbnail"
                    className="w-full aspect-video rounded-lg object-cover shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg group-hover:bg-opacity-40 transition-all">
                    <div className="bg-red-600 rounded-full p-6 transform group-hover:scale-110 transition-transform shadow-xl">
                      <Play className="h-12 w-12 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-3 py-2 rounded-lg text-sm font-medium">
                    {formatTime(task.videoDuration)}
                  </div>
                  <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-bold">
                    📺 Click to Play
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full min-h-[400px]">
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg z-10">
                      <div className="space-y-3 w-full px-6">
                        <Skeleton className="h-4 w-3/4 mx-auto bg-gray-200" />
                        <Skeleton className="h-4 w-1/2 mx-auto bg-gray-200" />
                        <div className="flex justify-center mt-6">
                          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
                        </div>
                        <p className="text-center text-gray-600 text-sm">Loading video...</p>
                      </div>
                    </div>
                  )}
                  {/* YouTube Player API Container */}
                  <div 
                    className={`w-full rounded-lg shadow-lg ${isFullscreen ? 'h-full' : 'aspect-video'}`}
                    style={{
                      border: 'none',
                      minHeight: isFullscreen ? '100%' : '400px'
                    }}
                  />
                </div>
              )}
            </div>

            {/* Watch Progress */}
            {showVideo && (
              <div className={`space-y-4 ${isFullscreen ? 'bg-white p-4 rounded-lg' : ''}`}>
                <div className="flex justify-between text-sm text-gray-600">
                  <span className="font-medium">Watched: {formatTime(actualVideoTime)}</span>
                  <span className="font-medium">{watchPercentage.toFixed(0)}% completed</span>
                  <span className="font-medium">Required: {formatTime(minWatchTime)}</span>
                </div>
                
                <div className="space-y-2">
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                    <div
                      className="bg-gradient-to-r from-red-500 to-red-600 h-4 rounded-full transition-all duration-300 relative"
                      style={{ width: `${watchPercentage}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Progress</span>
                    <span className="font-medium">
                      Required: {formatTime(minWatchTime)} ({requiredPercentage.toFixed(0)}% minimum)
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {!isFullscreen && (
            <div className="space-y-4">
              {/* External Link */}
              <div className="flex justify-center">
                <a
                  href={task.youtubeWatchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors font-medium"
                >
                  <ExternalLink className="h-4 w-4" />
                  Watch on YouTube
                </a>
              </div>

              {/* Rewards Info */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-4 border border-blue-200">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-700 font-medium">
                    🏆 Rewards for completion:
                  </div>
                  <div className="flex items-center gap-1 bg-blue-100 rounded-full px-4 py-2">
                    <Zap className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-800 font-bold">+{task.xp} XP</span>
                  </div>
                </div>
              </div>

              {/* Complete Button */}
              <Button
                onClick={handleComplete}
                disabled={!canComplete || !isWatched || actualVideoTime < minWatchTime}
                className={`w-full py-4 text-lg font-bold transition-all duration-300 ${
                  (canComplete && isWatched && actualVideoTime >= minWatchTime)
                    ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg transform hover:scale-105' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {(canComplete && isWatched && actualVideoTime >= minWatchTime) ? (
                  <span className="flex items-center justify-center gap-2">
                    ✅ Complete Video Task & Claim {task.xp} XP!
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    ⏳ Watch {formatTime(minWatchTime)} to unlock completion ({formatTime(actualVideoTime)}/{formatTime(minWatchTime)})
                  </span>
                )}
              </Button>

              {/* Requirement Message */}
              <div className="text-center p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-yellow-800 text-sm font-medium">
                  📋 You must actively watch at least {formatTime(minWatchTime)} of this video (video must be playing) to continue.
                </p>
                <p className="text-yellow-600 text-xs mt-1">
                  Current watch time: {formatTime(actualVideoTime)} | Required: {formatTime(minWatchTime)}
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default LessonVideoTask;
