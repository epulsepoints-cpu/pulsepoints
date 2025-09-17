// Platform-adaptive Progressive Lesson Loader
import { Capacitor } from '@capacitor/core';
import { useProgressiveLessonLoader } from '@/services/ProgressiveLessonLoader';
import { useAndroidProgressiveLessonLoader } from '@/services/AndroidProgressiveLessonLoader';

/**
 * Hook that automatically chooses the best loader for the current platform
 */
export function usePlatformProgressiveLessonLoader(moduleId: string) {
  const isAndroid = Capacitor.getPlatform() === 'android';
  const isNative = Capacitor.isNativePlatform();
  
  // Use Android-optimized loader for Android/native platforms
  const androidLoader = useAndroidProgressiveLessonLoader(moduleId);
  const webLoader = useProgressiveLessonLoader(moduleId);
  
  if (isAndroid || isNative) {
    console.log('🤖 Using Android-optimized loader');
    return androidLoader;
  } else {
    console.log('🌐 Using web-optimized loader');
    return webLoader;
  }
}