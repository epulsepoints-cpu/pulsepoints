// Cloudinary configuration and utilities
import { Cloudinary } from '@cloudinary/url-gen';
import { quality, format } from '@cloudinary/url-gen/actions/delivery';
import { auto } from '@cloudinary/url-gen/qualifiers/format';
import { auto as autoQuality } from '@cloudinary/url-gen/qualifiers/quality';
import { fill, scale, fit } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';

// Cloudinary instance
export const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'your-cloud-name'
  }
});

// Media folders configuration
export const CLOUDINARY_FOLDERS = {
  LESSON_IMAGES: 'ecgkid/lesson-images',
  LESSON_AUDIO: 'ecgkid/lesson-audio', 
  LESSON_VIDEOS: 'ecgkid/lesson-videos',
  ECG_SAMPLES: 'ecgkid/ecg-samples',
  AVATARS: 'ecgkid/avatars',
  ICONS: 'ecgkid/icons'
} as const;

// Image transformation presets
export const imagePresets = {
  // For lesson images - high quality with optimization
  lessonImage: {
    width: 800,
    height: 600,
    quality: 'auto:best',
    format: 'auto'
  },
  
  // For thumbnails - smaller, optimized
  thumbnail: {
    width: 300,
    height: 200,
    quality: 'auto:good',
    format: 'auto'
  },
  
  // For mobile - responsive
  mobile: {
    width: 800,
    height: 600,
    quality: 'auto:eco',
    format: 'auto'
  },

  // ECG detailed images - highest quality
  ecgDetailed: {
    width: 1200,
    height: 800,
    quality: 'auto:best',
    format: 'auto'
  },

  // Avatar images
  avatar: {
    width: 150,
    height: 150,
    quality: 'auto:good',
    format: 'auto'
  },
  
  // For ECG strips - preserve quality
  ecgStrip: {
    width: 1000,
    height: 600,
    quality: 'auto:good',
    format: 'auto'
  }
};

// Generate optimized image URL
export const getCloudinaryImage = (
  imageName: string, 
  preset: keyof typeof imagePresets = 'lessonImage',
  folder: string = 'ecgkid/lesson-images'
) => {
  const presetConfig = imagePresets[preset];
  
  const image = cld.image(`${folder}/${imageName}`)
    .delivery(format(auto()))
    .delivery(quality(autoQuality()))
    .resize(fill().width(presetConfig.width).height(presetConfig.height).gravity(autoGravity()));
    
  return image;
};

// Generate audio URL
export const getCloudinaryAudio = (
  audioName: string,
  folder: string = 'ecgkid/lesson-audio'
) => {
  return cld.video(`${folder}/${audioName}`)
    .delivery(quality(autoQuality()))
    .toURL();
};

// Generate video URL
export const getCloudinaryVideo = (
  videoName: string,
  folder: string = 'ecgkid/lesson-videos'
) => {
  return cld.video(`${folder}/${videoName}`)
    .delivery(quality(autoQuality()))
    .delivery(format(auto()))
    .toURL();
};

// Folder structure for organization
export const cloudinaryFolders = {
  lessonImages: 'ecgkid/lesson-images',
  lessonAudio: 'ecgkid/lesson-audio',
  lessonVideos: 'ecgkid/lesson-videos',
  ecgStrips: 'ecgkid/ecg-strips',
  anatomyImages: 'ecgkid/anatomy',
  icons: 'ecgkid/icons',
  certificates: 'ecgkid/certificates'
};

// Utility to remove file extension for Cloudinary public_id
export const getPublicId = (filename: string): string => {
  return filename.replace(/\.[^/.]+$/, '');
};

// Quick helper to get optimized image URL as string
export const getImageUrl = (
  imageName: string,
  preset: keyof typeof imagePresets = 'lessonImage',
  folder: string = 'ecgkid/lesson-images'
): string => {
  return getCloudinaryImage(imageName, preset, folder).toURL();
};

// Check if Cloudinary is configured
export const isCloudinaryConfigured = (): boolean => {
  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  return !!(cloudName && cloudName !== 'your-cloud-name');
};
