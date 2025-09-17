import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Play, Maximize2, Minimize2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface YouTubeVideoTaskProps {
  task: {
    taskId: number;
    videoTitle: string;
    videoDescription: string;
    youtubeVideoId: string;
    youtubeEmbedUrl: string;
    youtubeWatchUrl: string;
    youtubeThumbnail: string;
    videoDuration: number;
    xp: number;
    gems: number;
    explanation: string;
  };
  onComplete: (taskId: number) => void;
}

const YouTubeVideoTask: React.FC<YouTubeVideoTaskProps> = ({ task, onComplete }) => {
  const [watchTime, setWatchTime] = useState(0);
  const [isWatched, setIsWatched] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  // Calculate minimum watch time (80% of video duration)
  const minWatchTime = Math.floor(task.videoDuration * 0.8);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (showVideo) {
      // Start tracking watch time when video is shown
      setIsLoading(true);
      
      // Hide loading after a short delay
      const loadTimer = setTimeout(() => {
        setIsLoading(false);
      }, 1500);
      
      interval = setInterval(() => {
        setWatchTime(prev => {
          const newTime = prev + 1;
          if (newTime >= minWatchTime && !isWatched) {
            setIsWatched(true);
          }
          return newTime;
        });
      }, 1000);
      
      return () => {
        clearInterval(interval);
        clearTimeout(loadTimer);
      };
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [showVideo, minWatchTime, isWatched]);

  const handleComplete = () => {
    onComplete(task.taskId);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const watchPercentage = Math.min((watchTime / task.videoDuration) * 100, 100);
  
  // Enhanced embed URL with better parameters
  const enhancedEmbedUrl = `${task.youtubeEmbedUrl}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}&iv_load_policy=3`;

  return (
    <Card className={`mb-4 ${isFullscreen ? 'fixed inset-0 z-50 rounded-none' : ''}`} id="lesson-video">
      <CardContent className={`p-4 flex flex-col items-center ${isFullscreen ? 'h-full' : ''}`}>
        <div className={`space-y-4 w-full ${isFullscreen ? 'h-full flex flex-col' : ''}`}>
          {/* Video Title */}
          <div className={`${isFullscreen ? 'pb-2' : ''}`}>
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-blue-800">{task.videoTitle}</h2>
              {showVideo && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={toggleFullscreen}
                  className="ml-2"
                >
                  {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                </Button>
              )}
            </div>
            {!isFullscreen && <p className="text-gray-600">{task.videoDescription}</p>}
          </div>

          {/* Video Thumbnail or Embedded Player */}
          <div 
            ref={videoContainerRef}
            className={`relative ${isFullscreen ? 'flex-1' : ''}`}
          >
            {!showVideo ? (
              <div className="relative group cursor-pointer" onClick={() => setShowVideo(true)}>
                <img
                  src={task.youtubeThumbnail}
                  alt="Video thumbnail"
                  className="w-full aspect-video rounded-lg object-cover shadow-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg group-hover:bg-opacity-40 transition-all">
                  <div className="bg-red-600 rounded-full p-4 transform group-hover:scale-110 transition-transform shadow-xl">
                    <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                  {formatTime(task.videoDuration)}
                </div>
              </div>
            ) : (
              <div className="relative w-full h-full min-h-[200px]">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg z-10">
                    <div className="space-y-2 w-full px-4">
                      <Skeleton className="h-4 w-3/4 mx-auto bg-gray-200" />
                      <Skeleton className="h-4 w-1/2 mx-auto bg-gray-200" />
                      <div className="flex justify-center mt-4">
                        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-red-600"></div>
                      </div>
                    </div>
                  </div>
                )}
                <iframe
                  src={enhancedEmbedUrl}
                  title={task.videoTitle}
                  className={`w-full rounded-lg shadow-lg ${isFullscreen ? 'h-full' : 'aspect-video'}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onLoad={() => setIsLoading(false)}
                  style={{
                    border: 'none',
                  }}
                />
              </div>
            )}
          </div>

          {/* Watch Progress */}
          {showVideo && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Watched: {formatTime(watchTime)}</span>
                <span>{watchPercentage.toFixed(0)}% completed</span>
                <span>Duration: {formatTime(task.videoDuration)}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-red-500 to-red-600 h-3 rounded-full transition-all duration-300"
                  style={{ width: `${watchPercentage}%` }}
                />
              </div>
              <div className="text-xs text-gray-500 text-center">
                Watch {formatTime(minWatchTime)} to unlock completion ({Math.floor((minWatchTime / task.videoDuration) * 100)}% required)
              </div>
            </div>
          )}

          {!isFullscreen && (
            <>
              {/* External Link */}
              <div className="flex justify-center">
                <a
                  href={task.youtubeWatchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Watch on YouTube
                </a>
              </div>

              {/* Rewards Info */}
              <div className="flex justify-between items-center p-4 bg-gradient-to-r from-red-50 to-blue-50 rounded-lg shadow-inner">
                <div className="text-sm text-gray-600">
                  Rewards for completion:
                </div>
                <div className="flex gap-4">
                  <span className="text-blue-600 font-semibold">+{task.xp} XP</span>
                  <span className="text-purple-600 font-semibold">+{task.gems} 💎</span>
                </div>
              </div>

              {/* Complete Button */}
              <Button
                onClick={handleComplete}
                disabled={!isWatched}
                className={`w-full transition-all duration-300 ${
                  isWatched 
                    ? 'bg-green-500 hover:bg-green-600 shadow-lg' 
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                {isWatched ? '✅ Complete & Claim Rewards' : `⏳ Watch ${formatTime(minWatchTime)} to unlock`}
              </Button>

              {/* Explanation */}
              {task.explanation && (
                <div className="p-4 bg-blue-50 rounded-lg shadow-inner">
                  <h4 className="font-semibold text-blue-800 mb-2">What you'll learn:</h4>
                  <p className="text-blue-700">{task.explanation}</p>
                </div>
              )}
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default YouTubeVideoTask;