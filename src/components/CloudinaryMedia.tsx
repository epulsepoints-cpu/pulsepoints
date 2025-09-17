import { getCloudinaryAudio, getCloudinaryVideo } from '../utils/cloudinary';

interface CloudinaryAudioProps {
  src: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  className?: string;
  folder?: string;
}

export const CloudinaryAudio: React.FC<CloudinaryAudioProps> = ({
  src,
  controls = true,
  autoPlay = false,
  loop = false,
  className = '',
  folder = 'ecgkid/lesson-audio'
}) => {
  // Remove file extension for Cloudinary public_id
  const publicId = src.replace(/\.[^/.]+$/, '');
  const audioUrl = getCloudinaryAudio(publicId, folder);

  return (
    <audio
      src={audioUrl}
      controls={controls}
      autoPlay={autoPlay}
      loop={loop}
      className={className}
      preload="metadata"
    >
      Your browser does not support the audio element.
    </audio>
  );
};

interface CloudinaryVideoProps {
  src: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
  folder?: string;
  width?: string | number;
  height?: string | number;
}

export const CloudinaryVideo: React.FC<CloudinaryVideoProps> = ({
  src,
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  className = '',
  folder = 'ecgkid/lesson-videos',
  width = '100%',
  height = 'auto'
}) => {
  // Remove file extension for Cloudinary public_id
  const publicId = src.replace(/\.[^/.]+$/, '');
  const videoUrl = getCloudinaryVideo(publicId, folder);

  return (
    <video
      src={videoUrl}
      controls={controls}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      className={className}
      width={width}
      height={height}
      preload="metadata"
      style={{ maxWidth: '100%' }}
    >
      Your browser does not support the video element.
    </video>
  );
};

// Fallback components
export const FallbackAudio: React.FC<{
  src: string;
  controls?: boolean;
  className?: string;
}> = ({ src, controls = true, className }) => (
  <audio
    src={src.startsWith('/') ? src : `/lessonaudio/${src}`}
    controls={controls}
    className={className}
    preload="metadata"
  >
    Your browser does not support the audio element.
  </audio>
);

export const FallbackVideo: React.FC<{
  src: string;
  controls?: boolean;
  className?: string;
}> = ({ src, controls = true, className }) => (
  <video
    src={src.startsWith('/') ? src : `/lessonvideos/${src}`}
    controls={controls}
    className={className}
    style={{ maxWidth: '100%' }}
    preload="metadata"
  >
    Your browser does not support the video element.
  </video>
);
