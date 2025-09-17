import React from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { getCloudinaryImage, imagePresets } from '../utils/cloudinary';

interface CloudinaryImageProps {
  src: string;
  alt: string;
  preset?: keyof typeof imagePresets;
  folder?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  onClick?: () => void;
}

export const CloudinaryImage: React.FC<CloudinaryImageProps> = ({
  src,
  alt,
  preset = 'lessonImage',
  folder,
  className = '',
  loading = 'lazy',
  onClick
}) => {
  // Remove file extension if present (Cloudinary uses public_id without extension)
  const publicId = src.replace(/\.[^/.]+$/, '');
  
  const cloudinaryImage = getCloudinaryImage(publicId, preset, folder);

  return (
    <AdvancedImage
      cldImg={cloudinaryImage}
      alt={alt}
      className={className}
      loading={loading}
      onClick={onClick}
      style={{ 
        maxWidth: '100%', 
        height: 'auto',
        cursor: onClick ? 'pointer' : 'default'
      }}
    />
  );
};

// Specialized components for different use cases
export const LessonImage: React.FC<Omit<CloudinaryImageProps, 'preset' | 'folder'>> = (props) => (
  <CloudinaryImage 
    {...props} 
    preset="lessonImage" 
    folder="ecgkid/lesson-images"
  />
);

export const ECGStripImage: React.FC<Omit<CloudinaryImageProps, 'preset' | 'folder'>> = (props) => (
  <CloudinaryImage 
    {...props} 
    preset="ecgStrip" 
    folder="ecgkid/ecg-strips"
  />
);

export const AnatomyImage: React.FC<Omit<CloudinaryImageProps, 'preset' | 'folder'>> = (props) => (
  <CloudinaryImage 
    {...props} 
    preset="lessonImage" 
    folder="ecgkid/anatomy"
  />
);

export const ThumbnailImage: React.FC<Omit<CloudinaryImageProps, 'preset'>> = (props) => (
  <CloudinaryImage 
    {...props} 
    preset="thumbnail"
  />
);

// Fallback component for when Cloudinary is not available
export const FallbackImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
}> = ({ src, alt, className }) => (
  <img 
    src={src.startsWith('/') ? src : `/lessonimages/${src}`}
    alt={alt}
    className={className}
    style={{ maxWidth: '100%', height: 'auto' }}
    loading="lazy"
  />
);

// Smart image component that falls back to local images if Cloudinary fails
export const SmartImage: React.FC<CloudinaryImageProps> = (props) => {
  const [useCloudinary, setUseCloudinary] = React.useState(true);
  const [hasError, setHasError] = React.useState(false);

  const handleError = () => {
    if (useCloudinary && !hasError) {
      setHasError(true);
      setUseCloudinary(false);
    }
  };

  if (useCloudinary && !hasError) {
    return (
      <div onError={handleError}>
        <CloudinaryImage {...props} />
      </div>
    );
  }

  return <FallbackImage src={props.src} alt={props.alt} className={props.className} />;
};
