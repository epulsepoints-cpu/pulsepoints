import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, RotateCcw, RotateCw } from 'lucide-react';

interface AudioMetadata {
  url: string;
  duration?: number; // in seconds
  title: string;
  transcript?: string;
}

interface EnhancedAudioPlayerProps {
  audio: AudioMetadata;
  autoPlay?: boolean;
  onComplete?: () => void;
  onProgress?: (currentTime: number, duration: number) => void;
  showTranscript?: boolean;
  className?: string;
}

export const EnhancedAudioPlayer: React.FC<EnhancedAudioPlayerProps> = ({
  audio,
  autoPlay = false,
  onComplete,
  onProgress,
  showTranscript = false,
  className = ''
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(audio.duration || 0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    // Audio event listeners
    const handleLoadedMetadata = () => {
      setDuration(audioElement.duration);
      setIsLoading(false);
    };

    const handleTimeUpdate = () => {
      const current = audioElement.currentTime;
      setCurrentTime(current);
      onProgress?.(current, audioElement.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      onComplete?.();
    };

    const handleError = () => {
      setError('Failed to load audio file');
      setIsLoading(false);
    };

    const handleCanPlay = () => {
      setIsLoading(false);
      if (autoPlay) {
        audioElement.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          setError('Autoplay failed - please click play');
        });
      }
    };

    // Attach event listeners
    audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);
    audioElement.addEventListener('timeupdate', handleTimeUpdate);
    audioElement.addEventListener('ended', handleEnded);
    audioElement.addEventListener('error', handleError);
    audioElement.addEventListener('canplay', handleCanPlay);

    return () => {
      audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audioElement.removeEventListener('timeupdate', handleTimeUpdate);
      audioElement.removeEventListener('ended', handleEnded);
      audioElement.removeEventListener('error', handleError);
      audioElement.removeEventListener('canplay', handleCanPlay);
    };
  }, [audio.url, autoPlay, onComplete, onProgress]);

  const togglePlayPause = async () => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    try {
      if (isPlaying) {
        audioElement.pause();
        setIsPlaying(false);
      } else {
        await audioElement.play();
        setIsPlaying(true);
      }
    } catch (error) {
      setError('Failed to play audio');
      console.error('Audio play error:', error);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    const newTime = parseFloat(e.target.value);
    audioElement.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    if (isMuted) {
      audioElement.volume = volume;
      setIsMuted(false);
    } else {
      audioElement.volume = 0;
      setIsMuted(true);
    }
  };

  const skipSeconds = (seconds: number) => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    const newTime = Math.max(0, Math.min(audioElement.duration, audioElement.currentTime + seconds));
    audioElement.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (seconds: number): string => {
    if (isNaN(seconds)) return '0:00';
    
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const getTimeRemaining = (): string => {
    const remaining = duration - currentTime;
    return formatTime(remaining);
  };

  const getProgressPercentage = (): number => {
    if (duration === 0) return 0;
    return (currentTime / duration) * 100;
  };

  if (error) {
    return (
      <div className={`bg-red-50 border border-red-200 rounded-lg p-4 ${className}`}>
        <div className="text-red-600 font-medium">Audio Error</div>
        <div className="text-red-500 text-sm mt-1">{error}</div>
        <div className="text-red-400 text-xs mt-1">File: {audio.url}</div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-xl shadow-sm border border-gray-200 p-6 ${className}`}>
      {/* Hidden HTML5 Audio Element */}
      <audio
        ref={audioRef}
        src={audio.url}
        preload="metadata"
      />

      {/* Audio Title */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{audio.title}</h3>
        {isLoading && (
          <div className="text-sm text-gray-500 flex items-center gap-2 mt-1">
            <div className="animate-spin w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>
            Loading audio...
          </div>
        )}
      </div>

      {/* Main Controls */}
      <div className="flex items-center gap-4 mb-4">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          disabled={isLoading}
          className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white rounded-full p-3 transition-colors duration-200 flex items-center justify-center"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6 ml-0.5" />
          )}
        </button>

        {/* Skip Backward */}
        <button
          onClick={() => skipSeconds(-15)}
          disabled={isLoading}
          className="p-2 text-gray-600 hover:text-blue-500 disabled:text-gray-300 transition-colors"
          title="Skip back 15 seconds"
        >
          <RotateCcw className="w-5 h-5" />
        </button>

        {/* Skip Forward */}
        <button
          onClick={() => skipSeconds(15)}
          disabled={isLoading}
          className="p-2 text-gray-600 hover:text-blue-500 disabled:text-gray-300 transition-colors"
          title="Skip forward 15 seconds"
        >
          <RotateCw className="w-5 h-5" />
        </button>

        {/* Time Display */}
        <div className="flex-1 text-center">
          <div className="text-sm text-gray-600">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
          <div className="text-xs text-blue-600 font-medium">
            ⏰ {getTimeRemaining()} remaining
          </div>
        </div>

        {/* Volume Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleMute}
            className="p-2 text-gray-600 hover:text-blue-500 transition-colors"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-20 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="relative">
          <input
            type="range"
            min="0"
            max={duration || 100}
            value={currentTime}
            onChange={handleSeek}
            disabled={isLoading}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider disabled:cursor-not-allowed"
          />
          {/* Progress Fill */}
          <div
            className="absolute top-0 left-0 h-3 bg-blue-500 rounded-lg pointer-events-none transition-all duration-200"
            style={{ width: `${getProgressPercentage()}%` }}
          />
        </div>
      </div>

      {/* Transcript */}
      {showTranscript && audio.transcript && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <div className="text-sm font-medium text-gray-700 mb-2">Transcript:</div>
          <div className="text-sm text-gray-600 leading-relaxed">
            {audio.transcript}
          </div>
        </div>
      )}

      {/* Status Indicator */}
      <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
        <div className="flex items-center gap-2">
          <div
            className={`w-2 h-2 rounded-full ${
              isPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-300'
            }`}
          />
          <span>{isPlaying ? 'Playing' : 'Paused'}</span>
        </div>
        <div>
          Progress: {Math.round(getProgressPercentage())}%
        </div>
      </div>
    </div>
  );
};
