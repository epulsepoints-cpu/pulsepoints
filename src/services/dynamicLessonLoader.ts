/**
 * 🎯 DYNAMIC LESSON LOADER - Eliminates UI Freeze
 * Loads lessons on-demand using dynamic imports instead of static imports
 * This prevents all 84 lessons from loading at app startup
 */

import { Lesson } from '@/types/learning';

// Dynamic lesson loader with caching
class DynamicLessonLoader {
  private cache = new Map<string, Lesson>();
  private loadingPromises = new Map<string, Promise<Lesson | null>>();
  
  /**
   * Load lesson dynamically with caching
   */
  async loadLesson(lessonId: string): Promise<Lesson | null> {
    // Return cached lesson if available
    if (this.cache.has(lessonId)) {
      console.log(`📖 Returning cached lesson: ${lessonId}`);
      return this.cache.get(lessonId)!;
    }
    
    // Return existing loading promise if in progress
    if (this.loadingPromises.has(lessonId)) {
      console.log(`⏳ Lesson already loading: ${lessonId}`);
      return this.loadingPromises.get(lessonId)!;
    }
    
    // Start new loading process
    const loadingPromise = this.loadLessonDynamically(lessonId);
    this.loadingPromises.set(lessonId, loadingPromise);
    
    try {
      const lesson = await loadingPromise;
      if (lesson) {
        this.cache.set(lessonId, lesson);
        console.log(`✅ Dynamically loaded and cached lesson: ${lessonId}`);
      }
      return lesson;
    } finally {
      this.loadingPromises.delete(lessonId);
    }
  }
  
  /**
   * Dynamically import lesson based on lesson ID
   */
  private async loadLessonDynamically(lessonId: string): Promise<Lesson | null> {
    console.log(`🔄 Dynamic import starting for: ${lessonId}`);
    
    try {
      // Extract lesson number from lesson ID
      const lessonMatch = lessonId.match(/lesson-(\d+)/);
      if (!lessonMatch) {
        console.warn(`⚠️ Invalid lesson ID format: ${lessonId}`);
        return null;
      }
      
      const lessonNumber = parseInt(lessonMatch[1]);
      
      // Map lesson numbers to file names
      const lessonModule = await this.importLessonFile(lessonNumber);
      
      if (!lessonModule) {
        console.warn(`⚠️ No lesson found for number: ${lessonNumber}`);
        return null;
      }
      
      // Extract the lesson object from the module
      const lessonKey = Object.keys(lessonModule).find(key => 
        key.startsWith('optimizedLesson')
      );
      
      if (!lessonKey || !lessonModule[lessonKey]) {
        console.warn(`⚠️ Invalid lesson module structure for: ${lessonId}`);
        return null;
      }
      
      const lesson = lessonModule[lessonKey] as Lesson;
      
      // Ensure lesson has correct ID
      lesson.id = lessonId;
      
      console.log(`✅ Successfully loaded lesson: ${lessonId}`);
      return lesson;
      
    } catch (error) {
      console.error(`❌ Failed to load lesson ${lessonId}:`, error);
      return null;
    }
  }
  
  /**
   * Import lesson file using dynamic import
   */
  private async importLessonFile(lessonNumber: number) {
    try {
      switch (lessonNumber) {
        case 1: return await import('../data/optimized-lesson-1');
        case 2: return await import('../data/optimized-lesson-2');
        case 3: return await import('../data/optimized-lesson-3');
        case 4: return await import('../data/optimized-lesson-4');
        case 5: return await import('../data/optimized-lesson-5');
        case 6: return await import('../data/optimized-lesson-6');
        case 7: return await import('../data/optimized-lesson-7');
        case 8: return await import('../data/optimized-lesson-8');
        case 9: return await import('../data/optimized-lesson-9');
        case 10: return await import('../data/optimized-lesson-10');
        case 11: return await import('../data/optimized-lesson-11');
        case 12: return await import('../data/optimized-lesson-12');
        case 13: return await import('../data/optimized-lesson-13');
        case 14: return await import('../data/optimized-lesson-14');
        case 15: return await import('../data/optimized-lesson-15');
        case 16: return await import('../data/optimized-lesson-16');
        case 17: return await import('../data/optimized-lesson-17');
        case 18: return await import('../data/optimized-lesson-18');
        case 19: return await import('../data/optimized-lesson-19');
        case 20: return await import('../data/optimized-lesson-20');
        case 21: return await import('../data/optimized-lesson-21');
        case 22: return await import('../data/optimized-lesson-22');
        case 23: return await import('../data/optimized-lesson-23');
        case 24: return await import('../data/optimized-lesson-24');
        case 25: return await import('../data/optimized-lesson-25');
        case 26: return await import('../data/optimized-lesson-26');
        case 27: return await import('../data/optimized-lesson-27');
        case 28: return await import('../data/optimized-lesson-28');
        case 29: return await import('../data/optimized-lesson-29');
        case 30: return await import('../data/optimized-lesson-30');
        case 31: return await import('../data/optimized-lesson-31-6unit');
        case 32: return await import('../data/optimized-lesson-32');
        case 33: return await import('../data/optimized-lesson-33');
        case 34: return await import('../data/optimized-lesson-34');
        case 35: return await import('../data/optimized-lesson-35');
        case 36: return await import('../data/optimized-lesson-36');
        case 37: return await import('../data/optimized-lesson-37');
        case 38: return await import('../data/optimized-lesson-38');
        case 39: return await import('../data/optimized-lesson-39');
        case 40: return await import('../data/optimized-lesson-40');
        case 41: return await import('../data/optimized-lesson-41');
        case 42: return await import('../data/optimized-lesson-42');
        case 43: return await import('../data/optimized-lesson-43');
        case 44: return await import('../data/optimized-lesson-44');
        case 45: return await import('../data/optimized-lesson-45');
        case 46: return await import('../data/optimized-lesson-46');
        case 47: return await import('../data/optimized-lesson-47');
        case 48: return await import('../data/optimized-lesson-48');
        case 49: return await import('../data/optimized-lesson-49');
        case 50: return await import('../data/optimized-lesson-50');
        case 51: return await import('../data/optimized-lesson-51');
        case 52: return await import('../data/optimized-lesson-52');
        case 53: return await import('../data/optimized-lesson-53');
        case 54: return await import('../data/optimized-lesson-54');
        case 55: return await import('../data/optimized-lesson-55');
        case 56: return await import('../data/optimized-lesson-56');
        case 57: return await import('../data/optimized-lesson-57');
        case 58: return await import('../data/optimized-lesson-58');
        case 59: return await import('../data/optimized-lesson-59');
        case 60: return await import('../data/optimized-lesson-60');
        case 61: return await import('../data/optimized-lesson-61');
        case 62: return await import('../data/optimized-lesson-62');
        case 63: return await import('../data/optimized-lesson-63');
        case 64: return await import('../data/optimized-lesson-64');
        case 65: return await import('../data/optimized-lesson-65');
        case 66: return await import('../data/optimized-lesson-66');
        case 67: return await import('../data/optimized-lesson-67');
        case 68: return await import('../data/optimized-lesson-68');
        case 69: return await import('../data/optimized-lesson-69-6unit');
        case 70: return await import('../data/optimized-lesson-70-6unit');
        case 71: return await import('../data/optimized-lesson-71-6unit');
        case 72: return await import('../data/optimized-lesson-72-6unit');
        case 73: return await import('../data/optimized-lesson-73');
        case 74: return await import('../data/optimized-lesson-74');
        case 75: return await import('../data/optimized-lesson-75');
        case 76: return await import('../data/optimized-lesson-76');
        default:
          console.warn(`⚠️ No lesson file found for lesson number: ${lessonNumber}`);
          return null;
      }
    } catch (error) {
      console.error(`❌ Failed to import lesson ${lessonNumber}:`, error);
      return null;
    }
  }
  
  /**
   * Preload specific lessons for better performance
   */
  async preloadLessons(lessonIds: string[]): Promise<void> {
    console.log(`🔄 Preloading ${lessonIds.length} lessons...`);
    
    const promises = lessonIds.map(lessonId => 
      this.loadLesson(lessonId).catch(error => {
        console.warn(`⚠️ Failed to preload lesson ${lessonId}:`, error);
        return null;
      })
    );
    
    await Promise.all(promises);
    console.log(`✅ Preloading complete for ${lessonIds.length} lessons`);
  }
  
  /**
   * Check if lesson is available without loading it
   */
  isLessonAvailable(lessonId: string): boolean {
    const lessonMatch = lessonId.match(/lesson-(\d+)/);
    if (!lessonMatch) return false;
    
    const lessonNumber = parseInt(lessonMatch[1]);
    return lessonNumber >= 1 && lessonNumber <= 76;
  }
  
  /**
   * Get list of all available lesson IDs
   */
  getAvailableLessons(): string[] {
    const lessons = [];
    for (let i = 1; i <= 76; i++) {
      lessons.push(`module-${Math.ceil(i / 10)}-lesson-${i}`);
    }
    return lessons;
  }
  
  /**
   * Clear cache to free memory
   */
  clearCache(): void {
    this.cache.clear();
    this.loadingPromises.clear();
    console.log('🧹 Dynamic lesson cache cleared');
  }
  
  /**
   * Get cache statistics
   */
  getCacheStats(): { cached: number; loading: number } {
    return {
      cached: this.cache.size,
      loading: this.loadingPromises.size
    };
  }
}

// Export singleton instance
export const dynamicLessonLoader = new DynamicLessonLoader();

// Export main functions for backward compatibility
export async function loadLessonDynamically(lessonId: string): Promise<Lesson | null> {
  return dynamicLessonLoader.loadLesson(lessonId);
}

export function isLessonAvailable(lessonId: string): boolean {
  return dynamicLessonLoader.isLessonAvailable(lessonId);
}

export function getAvailableLessons(): string[] {
  return dynamicLessonLoader.getAvailableLessons();
}

export function preloadLessons(lessonIds: string[]): Promise<void> {
  return dynamicLessonLoader.preloadLessons(lessonIds);
}

export function clearLessonCache(): void {
  return dynamicLessonLoader.clearCache();
}