import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, RotateCcw, Settings, Clock, CheckCircle2 } from 'lucide-react';

interface YouTubeMetadata {
  videoId: string;
  duration?: number; // in seconds
  title: string;
  description?: string;
  startTime?: number; // optional start time in seconds
}

interface EnhancedYouTubePlayerProps {
  video: YouTubeMetadata;
  autoPlay?: boolean;
  onComplete?: () => void;
  onProgress?: (currentTime: number, duration: number) => void;
  showDescription?: boolean;
  className?: string;
  requireFullWatch?: boolean; // If true, user must watch full video
  minimumWatchTime?: number; // Minimum seconds required to mark as complete
}

export const EnhancedYouTubePlayer: React.FC<EnhancedYouTubePlayerProps> = ({
  video,
  autoPlay = false,
  onComplete,
  onProgress,
  showDescription = false,
  className = '',
  requireFullWatch = false,
  minimumWatchTime = 0
}) => {
  const playerRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(video.duration || 0);
  const [volume, setVolume] = useState(75);
  const [isMuted, setIsMuted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [watchedTime, setWatchedTime] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);

  const speedOptions = [0.5, 0.75, 1, 1.25, 1.5, 2];

  // YouTube API Integration
  useEffect(() => {
    // Load YouTube IFrame API
    if (!(window as any).YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

      (window as any).onYouTubeIframeAPIReady = () => {
        initializePlayer();
      };
    } else {
      initializePlayer();
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  const initializePlayer = () => {
    if (!playerRef.current) {
      playerRef.current = new (window as any).YT.Player('youtube-player', {
        height: '100%',
        width: '100%',
        videoId: video.videoId,
        playerVars: {
          autoplay: autoPlay ? 1 : 0,
          controls: 0, // Hide default controls
          disablekb: 1,
          fs: 1,
          modestbranding: 1,
          rel: 0,
          start: video.startTime || 0,
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      });
    }
  };

  const onPlayerReady = (event: any) => {
    setIsPlayerReady(true);
    setDuration(event.target.getDuration());
    setVolume(event.target.getVolume());
    
    // Start progress tracking
    const interval = setInterval(() => {
      if (playerRef.current && playerRef.current.getCurrentTime) {
        const current = playerRef.current.getCurrentTime();
        const total = playerRef.current.getDuration();
        
        setCurrentTime(current);
        setWatchedTime(prev => Math.max(prev, current));
        
        if (onProgress) {
          onProgress(current, total);
        }

        // Check completion conditions
        if (!isCompleted) {
          const isVideoComplete = current >= total - 1; // 1 second buffer
          const hasWatchedMinimum = minimumWatchTime === 0 || watchedTime >= minimumWatchTime;
          const hasWatchedRequired = !requireFullWatch || current >= total * 0.95; // 95% for full watch

          if (isVideoComplete || (hasWatchedMinimum && hasWatchedRequired)) {
            setIsCompleted(true);
            if (onComplete) {
              onComplete();
            }
          }
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  };

  const onPlayerStateChange = (event: any) => {
    const state = event.data;
    setIsPlaying(state === (window as any).YT.PlayerState.PLAYING);
    
    if (state === (window as any).YT.PlayerState.ENDED) {
      setIsCompleted(true);
      if (onComplete) {
        onComplete();
      }
    }
  };

  const togglePlayPause = () => {
    if (!playerRef.current) return;
    
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  const toggleMute = () => {
    if (!playerRef.current) return;
    
    if (isMuted) {
      playerRef.current.unMute();
      setIsMuted(false);
    } else {
      playerRef.current.mute();
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    if (!playerRef.current) return;
    setVolume(newVolume);
    playerRef.current.setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const handleSeek = (seconds: number) => {
    if (!playerRef.current) return;
    playerRef.current.seekTo(seconds, true);
  };

  const handleSpeedChange = (speed: number) => {
    if (!playerRef.current) return;
    playerRef.current.setPlaybackRate(speed);
    setPlaybackSpeed(speed);
    setShowSpeedMenu(false);
  };

  const restart = () => {
    if (!playerRef.current) return;
    playerRef.current.seekTo(0);
    playerRef.current.playVideo();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;
  const watchedPercentage = duration > 0 ? (watchedTime / duration) * 100 : 0;
  const requiredPercentage = minimumWatchTime > 0 ? (minimumWatchTime / duration) * 100 : 0;

  return (
    <div className={`bg-gradient-to-br from-red-50 to-pink-100 p-6 rounded-xl border border-red-200 shadow-lg ${className}`}>
      {/* Video Title and Status */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-bold text-red-800 text-lg flex items-center gap-2">
            🎬 {video.title}
            {isCompleted && <CheckCircle2 className="w-5 h-5 text-green-600" />}
          </h3>
          {showDescription && video.description && (
            <p className="text-red-600 text-sm mt-1">{video.description}</p>
          )}
        </div>
        <div className="flex items-center gap-2">
          {isCompleted && (
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
              ✅ Complete
            </span>
          )}
        </div>
      </div>

      {/* YouTube Player Container */}
      <div className="relative bg-black rounded-lg overflow-hidden mb-4" style={{ paddingBottom: '56.25%', height: 0 }}>
        <div
          id="youtube-player"
          className="absolute top-0 left-0 w-full h-full"
        />
        
        {/* Custom Controls Overlay */}
        {showControls && isPlayerReady && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            {/* Progress Bar */}
            <div className="mb-3">
              <div className="relative h-2 bg-gray-600 rounded-full cursor-pointer">
                {/* Watched Progress (Gray) */}
                <div
                  className="absolute top-0 left-0 h-full bg-gray-400 rounded-full transition-all duration-200"
                  style={{ width: `${watchedPercentage}%` }}
                />
                {/* Current Progress (Red) */}
                <div
                  className="absolute top-0 left-0 h-full bg-red-500 rounded-full transition-all duration-200"
                  style={{ width: `${progressPercentage}%` }}
                />
                {/* Required Watch Marker */}
                {requiredPercentage > 0 && (
                  <div
                    className="absolute top-0 h-full w-1 bg-yellow-400"
                    style={{ left: `${requiredPercentage}%` }}
                  />
                )}
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Play/Pause */}
                <button
                  onClick={togglePlayPause}
                  className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>

                {/* Restart */}
                <button
                  onClick={restart}
                  className="text-white hover:text-red-300 transition-colors"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>

                {/* Volume Control */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    className="text-white hover:text-red-300 transition-colors"
                  >
                    {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => handleVolumeChange(parseInt(e.target.value))}
                    className="w-20 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>

                {/* Time Display */}
                <div className="text-white text-sm font-mono">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Speed Control */}
                <div className="relative">
                  <button
                    onClick={() => setShowSpeedMenu(!showSpeedMenu)}
                    className="text-white hover:text-red-300 transition-colors flex items-center gap-1"
                  >
                    <Settings className="w-4 h-4" />
                    <span className="text-sm">{playbackSpeed}x</span>
                  </button>
                  
                  {showSpeedMenu && (
                    <div className="absolute bottom-full right-0 mb-2 bg-gray-800 rounded-lg shadow-lg py-2 z-10">
                      {speedOptions.map((speed) => (
                        <button
                          key={speed}
                          onClick={() => handleSpeedChange(speed)}
                          className={`block w-full px-4 py-2 text-sm text-left hover:bg-gray-700 transition-colors ${
                            playbackSpeed === speed ? 'text-red-400 bg-gray-700' : 'text-white'
                          }`}
                        >
                          {speed}x
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Countdown Timer */}
                {!isCompleted && duration > 0 && (
                  <div className="flex items-center gap-1 text-white bg-black/50 px-2 py-1 rounded">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-mono">
                      -{formatTime(duration - currentTime)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Progress Info */}
      <div className="bg-white/70 rounded-lg p-4 space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-red-700 font-medium">Watch Progress</span>
          <span className="text-red-800 font-bold">
            {Math.round(progressPercentage)}% ({formatTime(currentTime)} / {formatTime(duration)})
          </span>
        </div>
        
        {minimumWatchTime > 0 && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-orange-700 font-medium">Minimum Required</span>
            <span className={`font-bold ${watchedTime >= minimumWatchTime ? 'text-green-600' : 'text-orange-600'}`}>
              {formatTime(Math.min(watchedTime, minimumWatchTime))} / {formatTime(minimumWatchTime)}
              {watchedTime >= minimumWatchTime && ' ✓'}
            </span>
          </div>
        )}

        {requireFullWatch && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-purple-700 font-medium">Full Video Required</span>
            <span className={`font-bold ${watchedPercentage >= 95 ? 'text-green-600' : 'text-purple-600'}`}>
              {watchedPercentage >= 95 ? 'Complete ✓' : `${Math.round(watchedPercentage)}% watched`}
            </span>
          </div>
        )}
      </div>

      {/* Completion Status */}
      {!isCompleted ? (
        <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800 text-center font-medium flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" />
            {requireFullWatch 
              ? 'Watch the complete video to continue'
              : minimumWatchTime > 0 
                ? `Watch at least ${formatTime(minimumWatchTime)} to continue`
                : 'Video is loading...'
            }
          </p>
        </div>
      ) : (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm text-green-800 text-center font-medium flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Video completed! You can now continue to the next slide.
          </p>
        </div>
      )}

      {/* Tips */}
      <p className="text-sm text-red-600 text-center mt-3">
        💡 Use the speed controls to adjust playback • Click fullscreen for better viewing
      </p>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #ef4444;
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #ef4444;
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  );
};
