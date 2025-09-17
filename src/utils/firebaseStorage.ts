// Firebase Storage utilities for ECG PulsePoints media
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL, deleteObject, listAll, getMetadata } from 'firebase/storage';

// Media folder configuration
export const STORAGE_FOLDERS = {
  LESSON_IMAGES: 'lesson-images',
  LESSON_AUDIO: 'lesson-audio',
  LESSON_VIDEOS: 'lesson-videos',
  ECG_SAMPLES: 'ecg-samples',
  AVATARS: 'avatars',
  THUMBNAILS: 'thumbnails'
} as const;

// File size limits (in bytes)
export const FILE_LIMITS = {
  IMAGE: 10 * 1024 * 1024, // 10MB
  AUDIO: 50 * 1024 * 1024, // 50MB
  VIDEO: 100 * 1024 * 1024, // 100MB
  AVATAR: 2 * 1024 * 1024   // 2MB
} as const;

// Allowed file types
export const ALLOWED_TYPES = {
  IMAGE: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/webp'],
  AUDIO: ['audio/mp3', 'audio/wav', 'audio/ogg', 'audio/mpeg'],
  VIDEO: ['video/mp4', 'video/webm', 'video/mov', 'video/avi'],
  DOCUMENT: ['application/pdf', 'text/plain']
} as const;

/**
 * Upload a file to Firebase Storage
 */
export const uploadMediaFile = async (
  file: File,
  folder: string,
  filename?: string
): Promise<{ url: string; path: string; size: number }> => {
  try {
    // Validate file
    validateFile(file, folder);
    
    // Generate filename if not provided
    const finalFilename = filename || generateFilename(file.name);
    const filePath = `${folder}/${finalFilename}`;
    
    console.log(`📤 Uploading ${file.name} to ${filePath}...`);
    
    // Create storage reference
    const storageRef = ref(storage, filePath);
    
    // Upload file
    const snapshot = await uploadBytes(storageRef, file);
    
    // Get download URL
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    console.log(`✅ Upload complete: ${finalFilename}`);
    
    return {
      url: downloadURL,
      path: filePath,
      size: file.size
    };
    
  } catch (error) {
    console.error(`❌ Upload failed for ${file.name}:`, error);
    throw new Error(`Failed to upload ${file.name}: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

/**
 * Get download URL for a media file
 */
export const getMediaUrl = async (filePath: string): Promise<string> => {
  try {
    const storageRef = ref(storage, filePath);
    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error(`❌ Failed to get URL for ${filePath}:`, error);
    throw new Error(`Failed to get download URL: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

/**
 * Delete a media file from Firebase Storage
 */
export const deleteMediaFile = async (filePath: string): Promise<void> => {
  try {
    const storageRef = ref(storage, filePath);
    await deleteObject(storageRef);
    console.log(`🗑️ Deleted: ${filePath}`);
  } catch (error) {
    console.error(`❌ Failed to delete ${filePath}:`, error);
    throw error;
  }
};

/**
 * List all files in a folder
 */
export const listMediaFiles = async (folder: string): Promise<Array<{
  name: string;
  path: string;
  url: string;
  size: number;
  timeCreated: string;
}>> => {
  try {
    const folderRef = ref(storage, folder);
    const listResult = await listAll(folderRef);
    
    const files = await Promise.all(
      listResult.items.map(async (item) => {
        const [url, metadata] = await Promise.all([
          getDownloadURL(item),
          getMetadata(item)
        ]);
        
        return {
          name: item.name,
          path: item.fullPath,
          url,
          size: metadata.size,
          timeCreated: metadata.timeCreated
        };
      })
    );
    
    return files.sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.error(`❌ Failed to list files in ${folder}:`, error);
    return [];
  }
};

/**
 * Upload multiple files with progress tracking
 */
export const uploadMultipleFiles = async (
  files: File[],
  folder: string,
  onProgress?: (completed: number, total: number, currentFile: string) => void
): Promise<Array<{ url: string; path: string; size: number; filename: string }>> => {
  const results = [];
  
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    onProgress?.(i, files.length, file.name);
    
    try {
      const result = await uploadMediaFile(file, folder);
      results.push({
        ...result,
        filename: file.name
      });
    } catch (error) {
      console.error(`Failed to upload ${file.name}:`, error);
      // Continue with other files
    }
  }
  
  onProgress?.(files.length, files.length, 'Complete');
  return results;
};

/**
 * Validate file before upload
 */
const validateFile = (file: File, folder: string): void => {
  // Check file size and type based on folder type
  let maxSize = FILE_LIMITS.IMAGE;
  let allowedTypes: readonly string[];
  
  if (folder.includes('audio')) {
    maxSize = FILE_LIMITS.AUDIO;
    allowedTypes = ALLOWED_TYPES.AUDIO;
  } else if (folder.includes('video')) {
    maxSize = FILE_LIMITS.VIDEO;
    allowedTypes = ALLOWED_TYPES.VIDEO;
  } else if (folder.includes('avatar')) {
    maxSize = FILE_LIMITS.AVATAR;
    allowedTypes = ALLOWED_TYPES.IMAGE;
  } else {
    allowedTypes = ALLOWED_TYPES.IMAGE;
  }
  
  // Check file size
  if (file.size > maxSize) {
    throw new Error(`File too large. Maximum size: ${(maxSize / 1024 / 1024).toFixed(1)}MB`);
  }
  
  // Check file type
  if (!allowedTypes.includes(file.type)) {
    throw new Error(`Invalid file type. Allowed: ${allowedTypes.join(', ')}`);
  }
};

/**
 * Generate unique filename
 */
const generateFilename = (originalName: string): string => {
  const timestamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 8);
  const extension = originalName.split('.').pop();
  const nameWithoutExt = originalName.replace(/\.[^/.]+$/, '');
  
  // Clean filename
  const cleanName = nameWithoutExt
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  
  return `${cleanName}-${timestamp}-${randomString}.${extension}`;
};

/**
 * Get optimized URL for lesson images (with fallback to local)
 */
export const getLessonImageUrl = async (imageName: string): Promise<string> => {
  try {
    // Try Firebase Storage first
    const url = await getMediaUrl(`${STORAGE_FOLDERS.LESSON_IMAGES}/${imageName}`);
    return url;
  } catch (error) {
    // Fallback to local public folder
    console.warn(`Using local fallback for ${imageName}`);
    return `/lessonimages/${imageName}`;
  }
};

/**
 * Get lesson audio URL with fallback
 */
export const getLessonAudioUrl = async (audioName: string): Promise<string> => {
  try {
    const url = await getMediaUrl(`${STORAGE_FOLDERS.LESSON_AUDIO}/${audioName}`);
    return url;
  } catch (error) {
    console.warn(`Using local fallback for ${audioName}`);
    return `/lessonaudio/${audioName}`;
  }
};

/**
 * Get lesson video URL with fallback
 */
export const getLessonVideoUrl = async (videoName: string): Promise<string> => {
  try {
    const url = await getMediaUrl(`${STORAGE_FOLDERS.LESSON_VIDEOS}/${videoName}`);
    return url;
  } catch (error) {
    console.warn(`Using local fallback for ${videoName}`);
    return `/lessonvideos/${videoName}`;
  }
};

/**
 * Check if Firebase Storage is properly configured
 */
export const isStorageConfigured = (): boolean => {
  try {
    return !!storage;
  } catch {
    return false;
  }
};
