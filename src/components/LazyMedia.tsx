// Lazy Media Components for Optimized Loading
import React, { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Loader2,
  Image as ImageIcon,
  AlertTriangle,
  RefreshCw 
} from 'lucide-react';

// Lazy Image Component with Intersection Observer
interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  fallback?: React.ReactNode;
  onLoad?: () => void;
  onError?: () => void;
}

export function LazyImage({ 
  src, 
  alt, 
  className = '', 
  placeholder,
  fallback,
  onLoad,
  onError 
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const retry = () => {
    setHasError(false);
    setIsLoaded(false);
  };

  if (hasError) {
    return (
      <div className={`flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg ${className}`}>
        <AlertTriangle className="h-8 w-8 text-gray-400 mb-2" />
        <p className="text-sm text-gray-600 mb-2">Failed to load image</p>
        <Button size="sm" variant="outline" onClick={retry}>
          <RefreshCw className="h-4 w-4 mr-1" />
          Retry
        </Button>
      </div>
    );
  }

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
          {isInView ? (
            <Loader2 className="h-8 w-8 text-gray-400 animate-spin" />
          ) : (
            <ImageIcon className="h-8 w-8 text-gray-400" />
          )}
        </div>
      )}
      
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
        />
      )}
    </div>
  );
}

// Lazy Audio Component
interface LazyAudioProps {
  src: string;
  title?: string;
  autoPlay?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

export function LazyAudio({ 
  src, 
  title = 'Audio', 
  autoPlay = false,
  onLoad,
  onError 
}: LazyAudioProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const loadAudio = () => {
    setShouldLoad(true);
  };

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  if (hasError) {
    return (
      <Card className="p-4">
        <div className="flex items-center space-x-3">
          <AlertTriangle className="h-6 w-6 text-red-500" />
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Audio Error</p>
            <p className="text-xs text-gray-600">Failed to load audio file</p>
          </div>
          <Button size="sm" variant="outline" onClick={() => { setHasError(false); setShouldLoad(true); }}>
            Retry
          </Button>
        </div>
      </Card>
    );
  }

  if (!shouldLoad) {
    return (
      <Card className="p-4">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
            <Volume2 className="h-5 w-5 text-blue-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">{title}</p>
            <p className="text-xs text-gray-600">Tap to load audio</p>
          </div>
          <Button size="sm" onClick={loadAudio}>
            Load Audio
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-4">
      <div className="flex items-center space-x-3">
        <Button
          size="sm"
          variant="outline"
          onClick={togglePlay}
          disabled={!isLoaded}
          className="h-10 w-10 p-0"
        >
          {!isLoaded ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : isPlaying ? (
            <Pause className="h-4 w-4" />
          ) : (
            <Play className="h-4 w-4" />
          )}
        </Button>
        
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900">{title}</p>
          <p className="text-xs text-gray-600">
            {isLoaded ? (isPlaying ? 'Playing...' : 'Ready to play') : 'Loading...'}
          </p>
        </div>
        
        <Button
          size="sm"
          variant="ghost"
          onClick={toggleMute}
          disabled={!isLoaded}
          className="h-8 w-8 p-0"
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4" />
          ) : (
            <Volume2 className="h-4 w-4" />
          )}
        </Button>
      </div>
      
      {shouldLoad && (
        <audio
          ref={audioRef}
          src={src}
          preload="none"
          onLoadedData={handleLoad}
          onError={handleError}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
          autoPlay={autoPlay}
        />
      )}
    </Card>
  );
}

// Lazy Video Component
interface LazyVideoProps {
  src: string;
  poster?: string;
  title?: string;
  autoPlay?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

export function LazyVideo({ 
  src, 
  poster, 
  title = 'Video',
  autoPlay = false,
  onLoad,
  onError 
}: LazyVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const loadVideo = () => {
    setShouldLoad(true);
  };

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  if (hasError) {
    return (
      <Card className="p-4">
        <div className="flex items-center space-x-3">
          <AlertTriangle className="h-6 w-6 text-red-500" />
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">Video Error</p>
            <p className="text-xs text-gray-600">Failed to load video file</p>
          </div>
          <Button size="sm" variant="outline" onClick={() => { setHasError(false); setShouldLoad(true); }}>
            Retry
          </Button>
        </div>
      </Card>
    );
  }

  if (!shouldLoad) {
    return (
      <Card className="p-4 cursor-pointer" onClick={loadVideo}>
        <div className="relative aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
          {poster ? (
            <img src={poster} alt={title} className="w-full h-full object-cover rounded-lg" />
          ) : (
            <div className="text-center">
              <Play className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600">{title}</p>
            </div>
          )}
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
            <Button size="lg">
              <Play className="h-6 w-6 mr-2" />
              Load Video
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-4">
      <div className="relative">
        {shouldLoad && (
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            className="w-full aspect-video rounded-lg"
            preload="metadata"
            controls
            onLoadedData={handleLoad}
            onError={handleError}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            autoPlay={autoPlay}
          />
        )}
        
        {!isLoaded && shouldLoad && (
          <div className="absolute inset-0 bg-gray-100 rounded-lg flex items-center justify-center">
            <Loader2 className="h-8 w-8 text-gray-400 animate-spin" />
          </div>
        )}
      </div>
    </Card>
  );
}

// Media Preloader Hook
interface UseMediaPreloaderResult {
  preloadImage: (src: string) => Promise<void>;
  preloadAudio: (src: string) => Promise<void>;
  preloadVideo: (src: string) => Promise<void>;
  isPreloading: boolean;
}

export function useMediaPreloader(): UseMediaPreloaderResult {
  const [isPreloading, setIsPreloading] = useState(false);

  const preloadImage = async (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => reject(new Error(`Failed to preload image: ${src}`));
      img.src = src;
    });
  };

  const preloadAudio = async (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const audio = new Audio();
      audio.oncanplay = () => resolve();
      audio.onerror = () => reject(new Error(`Failed to preload audio: ${src}`));
      audio.src = src;
    });
  };

  const preloadVideo = async (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const video = document.createElement('video');
      video.oncanplay = () => resolve();
      video.onerror = () => reject(new Error(`Failed to preload video: ${src}`));
      video.src = src;
    });
  };

  return {
    preloadImage,
    preloadAudio,
    preloadVideo,
    isPreloading
  };
}