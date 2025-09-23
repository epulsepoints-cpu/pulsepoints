// React Hook for Lazy Lesson Loading
import { useState, useEffect, useCallback } from 'react';
import { Lesson } from '@/types/learning';
import { LazyLessonLoader } from '@/services/LazyLessonLoader';

interface UseLazyLessonResult {
  lesson: Lesson | null;
  isLoading: boolean;
  error: string | null;
  loadLesson: (lessonId: string) => Promise<void>;
  clearLesson: () => void;
}

export function useLazyLesson(): UseLazyLessonResult {
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadLesson = useCallback(async (lessonId: string) => {
    if (!lessonId) {
      setError('No lesson ID provided');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      console.log(`🔄 Loading lesson: ${lessonId}`);
      const loadedLesson = await LazyLessonLoader.loadLesson(lessonId);
      
      if (loadedLesson) {
        setLesson(loadedLesson);
        console.log(`✅ Lesson loaded: ${lessonId}`);
      } else {
        setError(`Failed to load lesson: ${lessonId}`);
        console.error(`❌ Lesson not found: ${lessonId}`);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      console.error(`❌ Error loading lesson ${lessonId}:`, err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearLesson = useCallback(() => {
    setLesson(null);
    setError(null);
    setIsLoading(false);
  }, []);

  return {
    lesson,
    isLoading,
    error,
    loadLesson,
    clearLesson
  };
}

// Hook for preloading multiple lessons
interface UsePreloadLessonsResult {
  preloadLessons: (lessonIds: string[]) => Promise<void>;
  isPreloading: boolean;
  preloadProgress: number;
  preloadError: string | null;
}

export function usePreloadLessons(): UsePreloadLessonsResult {
  const [isPreloading, setIsPreloading] = useState(false);
  const [preloadProgress, setPreloadProgress] = useState(0);
  const [preloadError, setPreloadError] = useState<string | null>(null);

  const preloadLessons = useCallback(async (lessonIds: string[]) => {
    if (lessonIds.length === 0) return;

    setIsPreloading(true);
    setPreloadProgress(0);
    setPreloadError(null);

    try {
      console.log(`🔄 Preloading ${lessonIds.length} lessons...`);
      
      // Load lessons one by one to track progress
      for (let i = 0; i < lessonIds.length; i++) {
        try {
          await LazyLessonLoader.loadLesson(lessonIds[i]);
          setPreloadProgress(((i + 1) / lessonIds.length) * 100);
        } catch (error) {
          console.warn(`⚠️ Failed to preload lesson ${lessonIds[i]}:`, error);
        }
      }
      
      console.log(`🎉 Preloading complete!`);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Preloading failed';
      setPreloadError(errorMessage);
      console.error('❌ Preloading error:', error);
    } finally {
      setIsPreloading(false);
    }
  }, []);

  return {
    preloadLessons,
    isPreloading,
    preloadProgress,
    preloadError
  };
}