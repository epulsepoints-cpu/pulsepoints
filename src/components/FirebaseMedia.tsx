import React, { useState, useEffect } from 'react';
import { getLessonImageUrl, getLessonAudioUrl, getLessonVideoUrl } from '../utils/firebaseStorage';

interface FirebaseImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * Firebase Storage Image Component with local fallback
 */
export const FirebaseImage: React.FC<FirebaseImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  onLoad,
  onError
}) => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const loadImage = async () => {
      try {
        setIsLoading(true);
        setHasError(false);
        
        // Extract filename from src if it includes path
        const filename = src.split('/').pop() || src;
        const url = await getLessonImageUrl(filename);
        setImageUrl(url);
      } catch (error) {
        console.warn('Firebase image load failed, using local fallback:', error);
        setHasError(true);
        // Fallback to local path
        setImageUrl(src.startsWith('/') ? src : `/lessonimages/${src}`);
      } finally {
        setIsLoading(false);
      }
    };

    loadImage();
  }, [src]);

  if (isLoading) {
    return (
      <div className={`animate-pulse bg-gray-200 ${className}`}>
        <div className="w-full h-full bg-gray-300 rounded"></div>
      </div>
    );
  }

  return (
    <img
      src={imageUrl}
      alt={alt}
      className={className}
      loading={loading}
      onLoad={onLoad}
      onError={(e) => {
        if (!hasError) {
          // Try local fallback
          const img = e.target as HTMLImageElement;
          const filename = src.split('/').pop() || src;
          img.src = `/lessonimages/${filename}`;
          setHasError(true);
        }
        onError?.();
      }}
    />
  );
};

interface FirebaseAudioProps {
  src: string;
  className?: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
}

/**
 * Firebase Storage Audio Component with local fallback
 */
export const FirebaseAudio: React.FC<FirebaseAudioProps> = ({
  src,
  className = '',
  controls = true,
  autoPlay = false,
  loop = false
}) => {
  const [audioUrl, setAudioUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAudio = async () => {
      try {
        setIsLoading(true);
        const filename = src.split('/').pop() || src;
        const url = await getLessonAudioUrl(filename);
        setAudioUrl(url);
      } catch (error) {
        console.warn('Firebase audio load failed, using local fallback:', error);
        setAudioUrl(src.startsWith('/') ? src : `/lessonaudio/${src}`);
      } finally {
        setIsLoading(false);
      }
    };

    loadAudio();
  }, [src]);

  if (isLoading) {
    return (
      <div className={`animate-pulse bg-gray-200 h-12 rounded ${className}`}>
        Loading audio...
      </div>
    );
  }

  return (
    <audio
      src={audioUrl}
      className={className}
      controls={controls}
      autoPlay={autoPlay}
      loop={loop}
      onError={(e) => {
        const audio = e.target as HTMLAudioElement;
        const filename = src.split('/').pop() || src;
        audio.src = `/lessonaudio/${filename}`;
      }}
    >
      Your browser does not support the audio element.
    </audio>
  );
};

interface FirebaseVideoProps {
  src: string;
  className?: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  poster?: string;
}

/**
 * Firebase Storage Video Component with local fallback
 */
export const FirebaseVideo: React.FC<FirebaseVideoProps> = ({
  src,
  className = '',
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  poster
}) => {
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadVideo = async () => {
      try {
        setIsLoading(true);
        const filename = src.split('/').pop() || src;
        const url = await getLessonVideoUrl(filename);
        setVideoUrl(url);
      } catch (error) {
        console.warn('Firebase video load failed, using local fallback:', error);
        setVideoUrl(src.startsWith('/') ? src : `/lessonvideos/${src}`);
      } finally {
        setIsLoading(false);
      }
    };

    loadVideo();
  }, [src]);

  if (isLoading) {
    return (
      <div className={`animate-pulse bg-gray-200 aspect-video rounded ${className}`}>
        <div className="w-full h-full bg-gray-300 rounded flex items-center justify-center">
          Loading video...
        </div>
      </div>
    );
  }

  return (
    <video
      src={videoUrl}
      className={className}
      controls={controls}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      poster={poster}
      onError={(e) => {
        const video = e.target as HTMLVideoElement;
        const filename = src.split('/').pop() || src;
        video.src = `/lessonvideos/${filename}`;
      }}
    >
      Your browser does not support the video element.
    </video>
  );
};

/**
 * Specialized ECG Lesson Image Component
 */
export const ECGLessonImage: React.FC<Omit<FirebaseImageProps, 'loading'>> = (props) => {
  return (
    <FirebaseImage
      {...props}
      loading="lazy"
      className={`max-w-full h-auto ${props.className || ''}`}
    />
  );
};

/**
 * Lesson Thumbnail Component
 */
export const LessonThumbnail: React.FC<Omit<FirebaseImageProps, 'loading'>> = (props) => {
  return (
    <FirebaseImage
      {...props}
      loading="lazy"
      className={`w-full h-32 object-cover rounded ${props.className || ''}`}
    />
  );
};
