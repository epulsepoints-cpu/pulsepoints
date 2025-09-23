/**
 * 🌐 EXTERNAL LESSON LOADER - True Dynamic Loading
 * Loads lessons from Vercel deployment to eliminate bundle bloat
 * This completely removes lesson content from mobile app bundle
 */

import { Lesson } from '@/types/learning';

interface LessonResponse {
  lesson?: Lesson;
  lessons?: Lesson[];
  error?: string;
}

class ExternalLessonLoader {
  // Primary URL (Vercel) - fallback to GitHub raw files if needed
  private baseUrl = 'https://raw.githubusercontent.com/rajkalale/pulsepoints/main/public/lessons-data';
  private cache = new Map<string, Lesson>();
  private moduleCache = new Map<string, Lesson[]>();
  private loadingPromises = new Map<string, Promise<Lesson | null>>();
  
  /**
   * Load lesson from external API with caching
   */
  async loadLesson(lessonId: string): Promise<Lesson | null> {
    console.log(`🌐 External loading lesson: ${lessonId}`);
    
    // Return cached lesson if available
    if (this.cache.has(lessonId)) {
      console.log(`📖 Returning cached external lesson: ${lessonId}`);
      return this.cache.get(lessonId)!;
    }
    
    // Return existing loading promise if in progress
    if (this.loadingPromises.has(lessonId)) {
      console.log(`⏳ External lesson already loading: ${lessonId}`);
      return this.loadingPromises.get(lessonId)!;
    }
    
    // Start new loading process
    const loadingPromise = this.fetchLessonFromAPI(lessonId);
    this.loadingPromises.set(lessonId, loadingPromise);
    
    try {
      const lesson = await loadingPromise;
      if (lesson) {
        this.cache.set(lessonId, lesson);
        console.log(`✅ External lesson loaded and cached: ${lessonId}`);
      }
      return lesson;
    } finally {
      this.loadingPromises.delete(lessonId);
    }
  }
  
  /**
   * Fetch lesson from static JSON files
   */
  private async fetchLessonFromAPI(lessonId: string): Promise<Lesson | null> {
    try {
      console.log(`🚀 Fetching from API: ${this.baseUrl}/lesson-${lessonId}.json`);
      
      const response = await fetch(`${this.baseUrl}/lesson-${lessonId}.json`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=3600' // 1 hour cache
        },
        // Add timeout for Android performance
        signal: AbortSignal.timeout(10000) // 10 second timeout
      });
      
      if (!response.ok) {
        if (response.status === 404) {
          console.warn(`⚠️ Lesson not found on server: ${lessonId}`);
          return null;
        }
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data: LessonResponse = await response.json();
      
      if (data.error) {
        console.error(`❌ API error for lesson ${lessonId}:`, data.error);
        return null;
      }
      
      const lesson = data.lesson || data as Lesson;
      
      // Ensure lesson has correct ID
      lesson.id = lessonId;
      
      console.log(`✅ Successfully fetched lesson from API: ${lessonId}`);
      return lesson;
      
    } catch (error) {
      if (error.name === 'TimeoutError') {
        console.error(`⏱️ Timeout loading lesson ${lessonId}`);
      } else if (error.name === 'NetworkError') {
        console.error(`🌐 Network error loading lesson ${lessonId}:`, error);
      } else {
        console.error(`❌ Failed to fetch lesson ${lessonId}:`, error);
      }
      return null;
    }
  }
  
  /**
   * Load lessons by module from external API
   */
  async getLessonsByModule(moduleId: string): Promise<Lesson[]> {
    console.log(`🌐 External loading module: ${moduleId}`);
    
    // Return cached module if available
    if (this.moduleCache.has(moduleId)) {
      console.log(`📁 Returning cached external module: ${moduleId}`);
      return this.moduleCache.get(moduleId)!;
    }
    
    try {
      const response = await fetch(`${this.baseUrl}/module-${moduleId}.json`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        signal: AbortSignal.timeout(15000) // 15 second timeout for modules
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const data: LessonResponse = await response.json();
      const lessons = data.lessons || [];
      
      // Cache the module lessons
      this.moduleCache.set(moduleId, lessons);
      
      // Also cache individual lessons
      lessons.forEach(lesson => {
        this.cache.set(lesson.id, lesson);
      });
      
      console.log(`✅ External module loaded: ${moduleId} (${lessons.length} lessons)`);
      return lessons;
      
    } catch (error) {
      console.error(`❌ Failed to fetch module ${moduleId}:`, error);
      return [];
    }
  }
  
  /**
   * Preload lessons in background for better performance
   */
  async preloadLessons(lessonIds: string[]): Promise<void> {
    console.log(`🔄 Preloading ${lessonIds.length} lessons...`);
    
    const promises = lessonIds
      .filter(id => !this.cache.has(id)) // Only preload uncached lessons
      .map(id => this.loadLesson(id).catch(() => null)); // Ignore errors during preload
    
    await Promise.allSettled(promises);
    console.log(`✅ Preloading completed`);
  }
  
  /**
   * Get available lesson IDs (for compatibility)
   */
  getAvailableLessons(): string[] {
    // Generate lesson IDs based on known structure
    const lessons: string[] = [];
    for (let i = 1; i <= 76; i++) {
      lessons.push(`module-1-lesson-${i}`);
    }
    return lessons;
  }
  
  /**
   * Check if lesson is available (optimistic check)
   */
  isLessonAvailable(lessonId: string): boolean {
    // Return true for known lesson format, will be verified when loading
    return /module-\d+-lesson-\d+/.test(lessonId);
  }
  
  /**
   * Clear cache (useful for memory management)
   */
  clearCache(): void {
    this.cache.clear();
    this.moduleCache.clear();
    console.log(`🗑️ External lesson cache cleared`);
  }
  
  /**
   * Get cache statistics
   */
  getCacheStats() {
    return {
      lessonsInCache: this.cache.size,
      modulesInCache: this.moduleCache.size,
      totalCacheSize: this.cache.size + this.moduleCache.size,
      loadingInProgress: this.loadingPromises.size
    };
  }
  
  /**
   * Health check for external API
   */
  async healthCheck(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/health.json`, {
        method: 'GET',
        signal: AbortSignal.timeout(5000)
      });
      return response.ok;
    } catch {
      return false;
    }
  }
}

// Export singleton instance
export const externalLessonLoader = new ExternalLessonLoader();

// Export class for testing
export { ExternalLessonLoader };