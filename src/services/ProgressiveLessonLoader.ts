// Progressive Lesson Loading Service
import { useState, useEffect } from 'react';
import { EnhancedLessonService } from '@/services/enhancedLessonService';
import { LessonUploadService } from '@/services/lessonUploadService';
import { Lesson } from '@/types/learning';
import { AndroidDebug } from '@/utils/androidDebug';

export interface LoadingProgress {
  total: number;
  loaded: number;
  currentLesson?: string;
  phase: 'preparing' | 'loading' | 'complete' | 'error';
  error?: string;
}

export class ProgressiveLessonLoader {
  private static cache = new Map<string, Lesson[]>();
  private static loadingStates = new Map<string, LoadingProgress>();
  private static listeners = new Map<string, Set<(progress: LoadingProgress) => void>>();

  /**
   * Load lessons progressively with progress updates
   */
  static async loadModuleLessons(
    moduleId: string,
    onProgress?: (progress: LoadingProgress) => void
  ): Promise<Lesson[]> {
    // Return cached lessons if available
    if (this.cache.has(moduleId)) {
      console.log(`📦 Returning cached lessons for ${moduleId}`);
      return this.cache.get(moduleId)!;
    }

    // Check if already loading
    if (this.loadingStates.has(moduleId)) {
      console.log(`⏳ Already loading ${moduleId}, subscribing to progress...`);
      return new Promise((resolve, reject) => {
        const checkCompletion = () => {
          const state = this.loadingStates.get(moduleId);
          if (state?.phase === 'complete') {
            resolve(this.cache.get(moduleId) || []);
          } else if (state?.phase === 'error') {
            reject(new Error(state.error));
          } else {
            setTimeout(checkCompletion, 100);
          }
        };
        if (onProgress) {
          this.subscribe(moduleId, onProgress);
        }
        checkCompletion();
      });
    }

    try {
      // Initialize loading state
      const initialProgress: LoadingProgress = {
        total: 0,
        loaded: 0,
        phase: 'preparing'
      };
      this.loadingStates.set(moduleId, initialProgress);
      this.notifyListeners(moduleId, initialProgress);

      console.log(`🚀 Starting progressive load for module ${moduleId}`);
      AndroidDebug.log(`Starting progressive load for module ${moduleId}`, {
        isAndroid: AndroidDebug.isAndroidWebView(),
        deviceInfo: AndroidDebug.getDeviceInfo()
      });

      // Add timeout for Android compatibility - First try Firebase
      let lessonIds: string[] = [];
      try {
        console.log(`🔍 Attempting Firebase lesson fetch for ${moduleId}...`);
        const timeoutPromise = new Promise<never>((_, reject) => {
          setTimeout(() => reject(new Error('Firebase timeout')), 15000);
        });
        
        lessonIds = await Promise.race([
          this.getLessonIdsList(moduleId),
          timeoutPromise
        ]);
        
        console.log(`📋 Firebase returned ${lessonIds.length} lesson IDs for ${moduleId}`);
      } catch (firebaseError) {
        console.warn(`⚠️ Firebase lesson fetch failed for ${moduleId}:`, firebaseError);
        lessonIds = [];
      }
      
      if (lessonIds.length === 0) {
        // Fallback to enhanced service for full load
        console.log(`📁 Using enhanced service fallback for ${moduleId}`);
        
        const fallbackProgress: LoadingProgress = {
          total: 0,
          loaded: 0,
          phase: 'loading',
          currentLesson: 'Loading from local service...'
        };
        this.loadingStates.set(moduleId, fallbackProgress);
        this.notifyListeners(moduleId, fallbackProgress);
        
        const lessons = await EnhancedLessonService.getLessonsByModule(moduleId);
        this.cache.set(moduleId, lessons);
        
        const completeProgress: LoadingProgress = {
          total: lessons.length,
          loaded: lessons.length,
          phase: 'complete'
        };
        this.loadingStates.set(moduleId, completeProgress);
        this.notifyListeners(moduleId, completeProgress);
        
        console.log(`✅ Fallback load complete for ${moduleId}: ${lessons.length} lessons`);
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

      // Load lessons progressively
      const lessons: Lesson[] = [];
      const batchSize = 2; // Reduced batch size for Android stability
      
      console.log(`📦 Starting progressive load: ${lessonIds.length} lessons in batches of ${batchSize}`);
      
      for (let i = 0; i < lessonIds.length; i += batchSize) {
        const batch = lessonIds.slice(i, i + batchSize);
        const batchNumber = Math.floor(i/batchSize) + 1;
        const totalBatches = Math.ceil(lessonIds.length/batchSize);
        
        console.log(`📦 Loading batch ${batchNumber}/${totalBatches} for ${moduleId}`);
        
        // Load batch in parallel with individual timeouts
        const batchPromises = batch.map(async (lessonId) => {
          try {
            // Individual lesson timeout for Android
            const lessonTimeout = new Promise<never>((_, reject) => {
              setTimeout(() => reject(new Error(`Timeout loading lesson ${lessonId}`)), 8000);
            });
            
            const lesson = await Promise.race([
              EnhancedLessonService.getLesson(lessonId),
              lessonTimeout
            ]);
            
            if (lesson) {
              lessons.push(lesson);
              
              // Update progress
              const currentProgress = this.loadingStates.get(moduleId)!;
              const updatedProgress: LoadingProgress = {
                ...currentProgress,
                loaded: lessons.length,
                currentLesson: lesson.title
              };
              this.loadingStates.set(moduleId, updatedProgress);
              this.notifyListeners(moduleId, updatedProgress);
              
              console.log(`📄 Loaded: ${lesson.title} (${lessons.length}/${lessonIds.length})`);
            }
            return lesson;
          } catch (error) {
            console.warn(`⚠️ Failed to load lesson ${lessonId}:`, error);
            return null;
          }
        });

        await Promise.all(batchPromises);
        
        // Longer delay between batches for Android stability
        if (i + batchSize < lessonIds.length) {
          console.log(`⏳ Pausing between batches...`);
          await new Promise(resolve => setTimeout(resolve, 300));
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

      console.log(`✅ Progressive load complete for ${moduleId}: ${lessons.length} lessons`);
      return lessons;

    } catch (error) {
      console.error(`❌ Progressive load failed for ${moduleId}:`, error);
      
      const errorProgress: LoadingProgress = {
        total: 0,
        loaded: 0,
        phase: 'error',
        error: error instanceof Error ? error.message : 'Unknown error'
      };
      this.loadingStates.set(moduleId, errorProgress);
      this.notifyListeners(moduleId, errorProgress);
      
      throw error;
    }
  }

  /**
   * Get lesson IDs list quickly from Firebase
   */
  private static async getLessonIdsList(moduleId: string): Promise<string[]> {
    try {
      // Use a lighter query to just get lesson IDs and order
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
   * Get current loading state
   */
  static getLoadingState(moduleId: string): LoadingProgress | null {
    return this.loadingStates.get(moduleId) || null;
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

  /**
   * Preload critical modules in background
   */
  static async preloadCriticalModules() {
    const criticalModules = ['module-1', 'module-2'];
    
    console.log('🎯 Starting background preload of critical modules...');
    
    // Load modules one by one to avoid overwhelming
    for (const moduleId of criticalModules) {
      try {
        if (!this.cache.has(moduleId)) {
          console.log(`📥 Background loading ${moduleId}...`);
          await this.loadModuleLessons(moduleId);
          console.log(`✅ Background loaded ${moduleId}`);
        }
      } catch (error) {
        console.warn(`⚠️ Background preload failed for ${moduleId}:`, error);
      }
    }
    
    console.log('🎉 Background preload completed');
  }
}

/**
 * React hook for progressive lesson loading
 */
export function useProgressiveLessonLoader(moduleId: string) {
  const [progress, setProgress] = useState<LoadingProgress>({
    total: 0,
    loaded: 0,
    phase: 'preparing'
  });
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!moduleId) return;

    let isMounted = true;
    
    const loadLessons = async () => {
      try {
        setError(null);
        console.log(`🎣 Hook starting load for ${moduleId}`);
        
        // Subscribe to progress updates
        const unsubscribe = ProgressiveLessonLoader.subscribe(moduleId, (newProgress) => {
          if (isMounted) {
            console.log(`📊 Progress update for ${moduleId}:`, newProgress);
            setProgress(newProgress);
          }
        });

        // Add overall timeout for Android
        const loadingTimeout = new Promise<never>((_, reject) => {
          setTimeout(() => reject(new Error('Loading timeout - please try again')), 60000);
        });

        // Start loading with timeout protection
        const loadedLessons = await Promise.race([
          ProgressiveLessonLoader.loadModuleLessons(moduleId),
          loadingTimeout
        ]);
        
        if (isMounted) {
          console.log(`✅ Hook completed loading ${moduleId}: ${loadedLessons.length} lessons`);
          setLessons(loadedLessons);
        }

        return unsubscribe;
      } catch (err) {
        if (isMounted) {
          const errorMessage = err instanceof Error ? err.message : 'Failed to load lessons';
          console.error(`❌ Hook error for ${moduleId}:`, errorMessage);
          setError(errorMessage);
          
          // Set error state in progress
          setProgress({
            total: 0,
            loaded: 0,
            phase: 'error',
            error: errorMessage
          });
        }
        return undefined;
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
      ProgressiveLessonLoader.clearCache(moduleId);
      // Trigger re-render to restart loading
      setProgress({ total: 0, loaded: 0, phase: 'preparing' });
    }
  };
}