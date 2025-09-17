// Android-optimized Progressive Lesson Loading Service
import { useState, useEffect } from 'react';
import { EnhancedLessonService } from '@/services/enhancedLessonService';
import { LessonUploadService } from '@/services/lessonUploadService';
import { Lesson } from '@/types/learning';
import { Capacitor } from '@capacitor/core';

export interface LoadingProgress {
  total: number;
  loaded: number;
  currentLesson?: string;
  phase: 'preparing' | 'loading' | 'complete' | 'error';
  error?: string;
}

/**
 * Android-optimized Progressive Lesson Loader
 * Uses smaller batch sizes and longer delays on mobile devices
 */
export class AndroidProgressiveLessonLoader {
  private static cache = new Map<string, Lesson[]>();
  private static loadingStates = new Map<string, LoadingProgress>();
  private static listeners = new Map<string, Set<(progress: LoadingProgress) => void>>();

  /**
   * Get optimized settings for the current platform
   */
  private static getPlatformSettings() {
    const isAndroid = Capacitor.getPlatform() === 'android';
    const isNative = Capacitor.isNativePlatform();
    
    return {
      batchSize: isAndroid ? 2 : 3, // Smaller batches on Android
      batchDelay: isNative ? 200 : 100, // Longer delays on native
      timeout: isNative ? 15000 : 10000, // Longer timeout on native
      maxRetries: isAndroid ? 3 : 2 // More retries on Android
    };
  }

  /**
   * Load lessons progressively with Android optimizations
   */
  static async loadModuleLessons(moduleId: string): Promise<Lesson[]> {
    // Check cache first
    if (this.cache.has(moduleId)) {
      console.log(`📋 Using cached lessons for ${moduleId}`);
      return this.cache.get(moduleId)!;
    }

    const settings = this.getPlatformSettings();
    console.log(`🎯 Loading ${moduleId} with platform settings:`, settings);

    // Set up error handling with cleanup
    const cleanup = () => {
      this.loadingStates.delete(moduleId);
    };

    try {
      // Initialize loading state
      const initialProgress: LoadingProgress = {
        total: 0,
        loaded: 0,
        phase: 'preparing'
      };
      this.loadingStates.set(moduleId, initialProgress);
      this.notifyListeners(moduleId, initialProgress);

      console.log(`🚀 Starting Android-optimized load for module ${moduleId}`);

      // First, get lesson list with timeout
      const lessonIds = await Promise.race([
        this.getLessonIdsList(moduleId),
        new Promise<string[]>((_, reject) => 
          setTimeout(() => reject(new Error('Lesson list timeout')), settings.timeout)
        )
      ]);
      
      if (lessonIds.length === 0) {
        console.log(`📁 No Firebase lessons found, using enhanced service for ${moduleId}`);
        
        // Use enhanced service with timeout for Android
        const lessons = await Promise.race([
          EnhancedLessonService.getLessonsByModule(moduleId),
          new Promise<Lesson[]>((_, reject) => 
            setTimeout(() => reject(new Error('Enhanced service timeout')), settings.timeout)
          )
        ]);
        
        this.cache.set(moduleId, lessons);
        
        const completeProgress: LoadingProgress = {
          total: lessons.length,
          loaded: lessons.length,
          phase: 'complete'
        };
        this.loadingStates.set(moduleId, completeProgress);
        this.notifyListeners(moduleId, completeProgress);
        
        return lessons;
      }

      // Update progress with total count
      const countProgress: LoadingProgress = {
        total: lessonIds.length,
        loaded: 0,
        phase: 'loading'
      };
      this.loadingStates.set(moduleId, countProgress);
      this.notifyListeners(moduleId, countProgress);

      // Load lessons progressively with Android-optimized settings
      const lessons: Lesson[] = [];
      
      for (let i = 0; i < lessonIds.length; i += settings.batchSize) {
        const batch = lessonIds.slice(i, i + settings.batchSize);
        
        // Load batch in parallel with retries
        const batchPromises = batch.map(async (lessonId) => {
          return this.loadLessonWithRetry(lessonId, settings.maxRetries, settings.timeout);
        });

        const batchResults = await Promise.allSettled(batchPromises);
        
        // Process results
        batchResults.forEach((result, index) => {
          if (result.status === 'fulfilled' && result.value) {
            lessons.push(result.value);
            
            // Update progress
            const currentProgress = this.loadingStates.get(moduleId)!;
            const updatedProgress: LoadingProgress = {
              ...currentProgress,
              loaded: lessons.length,
              currentLesson: result.value.title
            };
            this.loadingStates.set(moduleId, updatedProgress);
            this.notifyListeners(moduleId, updatedProgress);
          } else {
            console.warn(`⚠️ Failed to load lesson ${batch[index]}:`, 
              result.status === 'rejected' ? result.reason : 'Unknown error');
          }
        });
        
        // Android-optimized delay between batches
        if (i + settings.batchSize < lessonIds.length) {
          await new Promise(resolve => setTimeout(resolve, settings.batchDelay));
        }
      }

      // Sort lessons by order
      lessons.sort((a, b) => (a.order || 0) - (b.order || 0));

      // Cache and complete
      this.cache.set(moduleId, lessons);
      
      const completeProgress: LoadingProgress = {
        total: lessonIds.length,
        loaded: lessons.length,
        phase: 'complete'
      };
      this.loadingStates.set(moduleId, completeProgress);
      this.notifyListeners(moduleId, completeProgress);

      console.log(`✅ Android-optimized load complete for ${moduleId}: ${lessons.length} lessons`);
      return lessons;

    } catch (error) {
      console.error(`❌ Android load failed for ${moduleId}:`, error);
      
      const errorProgress: LoadingProgress = {
        total: 0,
        loaded: 0,
        phase: 'error',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
      this.loadingStates.set(moduleId, errorProgress);
      this.notifyListeners(moduleId, errorProgress);
      
      cleanup();
      throw error;
    }
  }

  /**
   * Load a single lesson with retry logic for Android
   */
  private static async loadLessonWithRetry(
    lessonId: string, 
    maxRetries: number, 
    timeout: number
  ): Promise<Lesson | null> {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const lesson = await Promise.race([
          EnhancedLessonService.getLesson(lessonId),
          new Promise<Lesson | null>((_, reject) => 
            setTimeout(() => reject(new Error(`Lesson ${lessonId} timeout`)), timeout)
          )
        ]);
        
        if (lesson) {
          return lesson;
        }
      } catch (error) {
        console.warn(`⚠️ Attempt ${attempt}/${maxRetries} failed for lesson ${lessonId}:`, error);
        
        if (attempt < maxRetries) {
          // Exponential backoff for retries
          const delay = Math.min(1000 * Math.pow(2, attempt - 1), 5000);
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    }
    
    return null;
  }

  /**
   * Get lesson IDs list quickly from Firebase with Android optimizations
   */
  private static async getLessonIdsList(moduleId: string): Promise<string[]> {
    try {
      const lessons = await LessonUploadService.getLessonsByModule(moduleId);
      return lessons.map(lesson => lesson.id).filter(Boolean);
    } catch (error) {
      console.warn(`⚠️ Failed to get lesson IDs for ${moduleId}:`, error);
      return [];
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
   * Notify all listeners of progress updates
   */
  private static notifyListeners(moduleId: string, progress: LoadingProgress) {
    const listeners = this.listeners.get(moduleId);
    if (listeners) {
      listeners.forEach(callback => {
        try {
          callback(progress);
        } catch (error) {
          console.error('❌ Error in progress callback:', error);
        }
      });
    }
  }

  /**
   * Clear cache for a module
   */
  static clearCache(moduleId?: string) {
    if (moduleId) {
      this.cache.delete(moduleId);
      this.loadingStates.delete(moduleId);
      this.listeners.delete(moduleId);
    } else {
      this.cache.clear();
      this.loadingStates.clear();
      this.listeners.clear();
    }
  }
}

/**
 * React hook for using Android-optimized progressive lesson loading
 */
export function useAndroidProgressiveLessonLoader(moduleId: string) {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [progress, setProgress] = useState<LoadingProgress>({
    total: 0,
    loaded: 0,
    phase: 'preparing'
  });
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (!moduleId) return;

    let isMounted = true;

    const loadLessons = async () => {
      try {
        setError('');
        
        // Subscribe to progress updates
        const unsubscribe = AndroidProgressiveLessonLoader.subscribe(moduleId, (newProgress) => {
          if (isMounted) {
            setProgress(newProgress);
            if (newProgress.error) {
              setError(newProgress.error);
            }
          }
        });

        // Start loading
        const loadedLessons = await AndroidProgressiveLessonLoader.loadModuleLessons(moduleId);
        
        if (isMounted) {
          setLessons(loadedLessons);
        }

        return unsubscribe;
      } catch (err) {
        if (isMounted) {
          const errorMessage = err instanceof Error ? err.message : 'Failed to load lessons';
          setError(errorMessage);
        }
      }
    };

    let unsubscribePromise = loadLessons();

    return () => {
      isMounted = false;
      unsubscribePromise.then(unsubscribe => {
        if (unsubscribe) unsubscribe();
      });
    };
  }, [moduleId]);

  return {
    lessons,
    progress,
    error,
    isLoading: progress.phase === 'preparing' || progress.phase === 'loading',
    isComplete: progress.phase === 'complete',
    retry: () => {
      AndroidProgressiveLessonLoader.clearCache(moduleId);
      // Trigger re-render to restart loading
      setProgress({ total: 0, loaded: 0, phase: 'preparing' });
      setError('');
    }
  };
}