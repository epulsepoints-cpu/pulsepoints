// Pure Firebase-Only Lesson Service
// No local file dependencies - works perfectly on Android
import React from 'react';
import { LessonUploadService } from './lessonUploadService';
import { Lesson } from '@/types/learning';

export interface LoadingProgress {
  total: number;
  loaded: number;
  currentLesson?: string;
  phase: 'preparing' | 'loading' | 'complete' | 'error';
  error?: string;
}

/**
 * Pure Firebase-only lesson service for Android compatibility
 * NO local file imports - everything comes from Firebase
 */
export class FirebaseOnlyLessonService {
  private static cache = new Map<string, Lesson[]>();
  private static lessonCache = new Map<string, Lesson>();
  private static loadingStates = new Map<string, LoadingProgress>();
  private static listeners = new Map<string, Set<(progress: LoadingProgress) => void>>();

  /**
   * Get lessons for a module - Firebase only
   */
  static async getLessonsByModule(moduleId: string): Promise<Lesson[]> {
    try {
      console.log(`🔥 Firebase-only: Loading lessons for ${moduleId}`);
      
      // Check cache first
      if (this.cache.has(moduleId)) {
        console.log(`📋 Cache hit for ${moduleId}`);
        return this.cache.get(moduleId)!;
      }

      // Load directly from Firebase
      const lessons = await LessonUploadService.getLessonsByModule(moduleId);
      
      console.log(`✅ Firebase-only: Loaded ${lessons.length} lessons for ${moduleId}`);
      
      // Cache the results
      this.cache.set(moduleId, lessons);
      
      // Also cache individual lessons
      lessons.forEach(lesson => {
        if (lesson.id) {
          this.lessonCache.set(lesson.id, lesson);
        }
      });

      return lessons;
    } catch (error) {
      console.error(`❌ Firebase-only: Failed to load lessons for ${moduleId}:`, error);
      throw new Error(`Failed to load lessons for ${moduleId}: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Get a single lesson - Firebase only
   */
  static async getLesson(lessonId: string): Promise<Lesson | null> {
    try {
      console.log(`🔥 Firebase-only: Loading lesson ${lessonId}`);
      
      // Check individual lesson cache first
      if (this.lessonCache.has(lessonId)) {
        console.log(`📋 Cache hit for lesson ${lessonId}`);
        return this.lessonCache.get(lessonId)!;
      }

      // Load directly from Firebase
      const lesson = await LessonUploadService.getLesson(lessonId);
      
      if (lesson) {
        console.log(`✅ Firebase-only: Loaded lesson ${lessonId}`);
        this.lessonCache.set(lessonId, lesson);
      } else {
        console.warn(`⚠️ Firebase-only: Lesson ${lessonId} not found`);
      }

      return lesson;
    } catch (error) {
      console.error(`❌ Firebase-only: Failed to load lesson ${lessonId}:`, error);
      throw new Error(`Failed to load lesson ${lessonId}: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  /**
   * Progressive loading with Firebase-only approach
   */
  static async loadModuleLessonsProgressively(
    moduleId: string,
    onProgress?: (progress: LoadingProgress) => void
  ): Promise<Lesson[]> {
    try {
      // Check cache first
      if (this.cache.has(moduleId)) {
        const cached = this.cache.get(moduleId)!;
        if (onProgress) {
          onProgress({
            total: cached.length,
            loaded: cached.length,
            phase: 'complete'
          });
        }
        return cached;
      }

      console.log(`🚀 Firebase-only progressive: Starting ${moduleId}`);

      // Initialize progress
      const initialProgress: LoadingProgress = {
        total: 0,
        loaded: 0,
        phase: 'preparing'
      };
      
      if (onProgress) onProgress(initialProgress);

      // Get lesson list quickly
      const lessons = await LessonUploadService.getLessonsByModule(moduleId);
      
      if (lessons.length === 0) {
        const emptyProgress: LoadingProgress = {
          total: 0,
          loaded: 0,
          phase: 'complete'
        };
        if (onProgress) onProgress(emptyProgress);
        return [];
      }

      // Update progress with total
      const countProgress: LoadingProgress = {
        total: lessons.length,
        loaded: lessons.length, // Firebase already loaded all lessons
        phase: 'complete'
      };
      
      if (onProgress) onProgress(countProgress);

      // Sort lessons by order
      lessons.sort((a, b) => (a.order || 0) - (b.order || 0));

      // Cache everything
      this.cache.set(moduleId, lessons);
      lessons.forEach(lesson => {
        if (lesson.id) {
          this.lessonCache.set(lesson.id, lesson);
        }
      });

      console.log(`✅ Firebase-only progressive: Complete ${moduleId} (${lessons.length} lessons)`);
      return lessons;

    } catch (error) {
      console.error(`❌ Firebase-only progressive: Failed ${moduleId}:`, error);
      
      const errorProgress: LoadingProgress = {
        total: 0,
        loaded: 0,
        phase: 'error',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
      
      if (onProgress) onProgress(errorProgress);
      throw error;
    }
  }

  /**
   * Subscribe to loading progress updates
   */
  static subscribe(moduleId: string, callback: (progress: LoadingProgress) => void): () => void {
    if (!this.listeners.has(moduleId)) {
      this.listeners.set(moduleId, new Set());
    }
    
    this.listeners.get(moduleId)!.add(callback);
    
    // Send current state immediately if available
    const currentState = this.loadingStates.get(moduleId);
    if (currentState) {
      callback(currentState);
    }
    
    // Return unsubscribe function
    return () => {
      this.listeners.get(moduleId)?.delete(callback);
    };
  }

  /**
   * Clear cache
   */
  static clearCache(moduleId?: string) {
    if (moduleId) {
      this.cache.delete(moduleId);
      this.loadingStates.delete(moduleId);
      this.listeners.delete(moduleId);
      console.log(`🧹 Firebase-only: Cleared cache for ${moduleId}`);
    } else {
      this.cache.clear();
      this.lessonCache.clear();
      this.loadingStates.clear();
      this.listeners.clear();
      console.log(`🧹 Firebase-only: Cleared all cache`);
    }
  }

  /**
   * Get cache statistics
   */
  static getCacheStats() {
    return {
      modules: this.cache.size,
      lessons: this.lessonCache.size,
      loadingStates: this.loadingStates.size,
      listeners: this.listeners.size
    };
  }

  /**
   * Preload critical modules
   */
  static async preloadCriticalModules() {
    const criticalModules = ['module-1', 'module-2', 'module-3'];
    
    console.log('🎯 Firebase-only: Preloading critical modules...');
    
    for (const moduleId of criticalModules) {
      try {
        await this.getLessonsByModule(moduleId);
        console.log(`✅ Preloaded ${moduleId}`);
      } catch (error) {
        console.warn(`⚠️ Failed to preload ${moduleId}:`, error);
      }
    }
    
    console.log('🎯 Firebase-only: Preload complete');
  }
}

/**
 * React Hook for Firebase-only lesson loading
 */
export function useFirebaseOnlyLessons(moduleId: string) {
  const [lessons, setLessons] = React.useState<Lesson[]>([]);
  const [progress, setProgress] = React.useState<LoadingProgress>({
    total: 0,
    loaded: 0,
    phase: 'preparing'
  });
  const [error, setError] = React.useState<string>('');

  React.useEffect(() => {
    if (!moduleId) return;

    let isMounted = true;

    const loadLessons = async () => {
      try {
        setError('');
        setProgress({ total: 0, loaded: 0, phase: 'preparing' });

        const loadedLessons = await FirebaseOnlyLessonService.loadModuleLessonsProgressively(
          moduleId,
          (progressUpdate) => {
            if (isMounted) {
              setProgress(progressUpdate);
            }
          }
        );

        if (isMounted) {
          setLessons(loadedLessons);
        }
      } catch (err) {
        if (isMounted) {
          const errorMessage = err instanceof Error ? err.message : 'Failed to load lessons';
          setError(errorMessage);
          setProgress(prev => ({ ...prev, phase: 'error', error: errorMessage }));
        }
      }
    };

    loadLessons();

    return () => {
      isMounted = false;
    };
  }, [moduleId]);

  return {
    lessons,
    progress,
    error,
    isLoading: progress.phase === 'preparing' || progress.phase === 'loading',
    isComplete: progress.phase === 'complete',
    retry: () => {
      FirebaseOnlyLessonService.clearCache(moduleId);
      setProgress({ total: 0, loaded: 0, phase: 'preparing' });
    }
  };
}