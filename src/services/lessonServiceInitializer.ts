import { EnhancedLessonService } from './enhancedLessonService';

/**
 * Initialize lesson services for optimal performance
 * Call this function on app startup, preferably in main.ts or App.tsx
 */
export async function initializeLessonServices(): Promise<void> {
  console.log('🚀 Initializing lesson services for Firebase-first loading...');
  
  try {
    // Initialize the enhanced lesson service
    await EnhancedLessonService.initialize();
    
    console.log('✅ Lesson services initialized successfully');
  } catch (error) {
    console.error('❌ Failed to initialize lesson services:', error);
    // Non-blocking error - the app can still function with local lessons
  }
}

/**
 * Get lesson service status for debugging
 */
export function getLessonServiceStatus(): any {
  return {
    enhanced: EnhancedLessonService.getConnectionStatus(),
    timestamp: new Date().toISOString()
  };
}

/**
 * Force refresh lessons from Firebase
 */
export async function refreshLessonsFromFirebase(moduleId?: string): Promise<void> {
  console.log('🔄 Manually refreshing lessons from Firebase...');
  await EnhancedLessonService.refreshLessonsFromFirebase(moduleId);
}

/**
 * Clear all lesson caches
 */
export function clearLessonCaches(): void {
  console.log('🗑️ Clearing all lesson caches...');
  EnhancedLessonService.clearCache();
}