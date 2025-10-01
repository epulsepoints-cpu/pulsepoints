import { useState, useEffect, useCallback } from 'react';
import { Lesson } from '@/types/learning';
import { loadLessonDynamically, preloadLesson } from '@/services/lessonRegistry';

// Loading states for lesson data
export interface LessonLoadingState {
  lesson: Lesson | null;
  isLoading: boolean;
  error: string | null;
  isPreloading: boolean;
}

/**
 * React hook for dynamic lesson loading
 * Replaces static imports with on-demand loading
 * Provides loading states and error handling
 */
export function useDynamicLesson(lessonId: string | null): LessonLoadingState {
  const [state, setState] = useState<LessonLoadingState>({
    lesson: null,
    isLoading: false,
    error: null,
    isPreloading: false
  });

  const loadLesson = useCallback(async (id: string) => {
    setState(prev => ({ ...prev, isLoading: true, error: null }));
    
    try {
      const lesson = await loadLessonDynamically(id);
      if (lesson) {
        setState({
          lesson,
          isLoading: false,
          error: null,
          isPreloading: false
        });
      } else {
        setState(prev => ({
          ...prev,
          isLoading: false,
          error: `Lesson not found: ${id}`,
          isPreloading: false
        }));
      }
    } catch (error) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        error: `Failed to load lesson: ${error instanceof Error ? error.message : 'Unknown error'}`,
        isPreloading: false
      }));
    }
  }, []);

  useEffect(() => {
    if (lessonId) {
      loadLesson(lessonId);
    } else {
      setState({
        lesson: null,
        isLoading: false,
        error: null,
        isPreloading: false
      });
    }
  }, [lessonId, loadLesson]);

  return state;
}

/**
 * Hook for preloading lessons (useful for hover effects)
 */
export function useLessonPreloader() {
  const [preloadingIds, setPreloadingIds] = useState<Set<string>>(new Set());

  const preload = useCallback((lessonId: string) => {
    if (!preloadingIds.has(lessonId)) {
      setPreloadingIds(prev => new Set(prev).add(lessonId));
      preloadLesson(lessonId);
      
      // Remove from preloading set after a delay
      setTimeout(() => {
        setPreloadingIds(prev => {
          const newSet = new Set(prev);
          newSet.delete(lessonId);
          return newSet;
        });
      }, 2000);
    }
  }, [preloadingIds]);

  return { preload, isPreloading: (lessonId: string) => preloadingIds.has(lessonId) };
}

/**
 * Hook for managing multiple lessons with caching
 */
export function useLessonManager() {
  const [loadedLessons, setLoadedLessons] = useState<Map<string, Lesson>>(new Map());
  const [loadingIds, setLoadingIds] = useState<Set<string>>(new Set());
  const [errors, setErrors] = useState<Map<string, string>>(new Map());

  const loadLesson = useCallback(async (lessonId: string): Promise<Lesson | null> => {
    // Return cached lesson if available
    if (loadedLessons.has(lessonId)) {
      return loadedLessons.get(lessonId)!;
    }

    // Skip if already loading
    if (loadingIds.has(lessonId)) {
      return null;
    }

    setLoadingIds(prev => new Set(prev).add(lessonId));
    setErrors(prev => {
      const newErrors = new Map(prev);
      newErrors.delete(lessonId);
      return newErrors;
    });

    try {
      const lesson = await loadLessonDynamically(lessonId);
      if (lesson) {
        setLoadedLessons(prev => new Map(prev).set(lessonId, lesson));
        return lesson;
      } else {
        setErrors(prev => new Map(prev).set(lessonId, `Lesson not found: ${lessonId}`));
        return null;
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setErrors(prev => new Map(prev).set(lessonId, errorMessage));
      return null;
    } finally {
      setLoadingIds(prev => {
        const newSet = new Set(prev);
        newSet.delete(lessonId);
        return newSet;
      });
    }
  }, [loadedLessons, loadingIds]);

  const getLessonState = useCallback((lessonId: string): LessonLoadingState => {
    return {
      lesson: loadedLessons.get(lessonId) || null,
      isLoading: loadingIds.has(lessonId),
      error: errors.get(lessonId) || null,
      isPreloading: false
    };
  }, [loadedLessons, loadingIds, errors]);

  const preloadLessons = useCallback((lessonIds: string[]) => {
    lessonIds.forEach(id => {
      if (!loadedLessons.has(id) && !loadingIds.has(id)) {
        preloadLesson(id);
      }
    });
  }, [loadedLessons, loadingIds]);

  return {
    loadLesson,
    getLessonState,
    preloadLessons,
    loadedCount: loadedLessons.size,
    isLoading: loadingIds.size > 0,
    hasErrors: errors.size > 0
  };
}