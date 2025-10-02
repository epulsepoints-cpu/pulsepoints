// Dynamic Lesson Loader - Loads lessons only when needed
import { Lesson } from '@/types/learning';

interface LessonCache {
  [key: string]: Lesson;
}

interface LoadingState {
  [key: string]: Promise<Lesson> | null;
}

export class LazyLessonLoader {
  private static cache: LessonCache = {};
  private static loadingStates: LoadingState = {};
  
  /**
   * Load a lesson dynamically only when needed
   */
  static async loadLesson(lessonId: string): Promise<Lesson | null> {
    try {
      // Check cache first
      if (this.cache[lessonId]) {
        console.log(`📋 Cache hit for lesson: ${lessonId}`);
        return this.cache[lessonId];
      }

      // Check if already loading
      if (this.loadingStates[lessonId]) {
        console.log(`⏳ Already loading lesson: ${lessonId}`);
        return await this.loadingStates[lessonId]!;
      }

      console.log(`🚀 Dynamic loading lesson: ${lessonId}`);
      
      // Create loading promise
      const loadingPromise = this.dynamicImportLesson(lessonId);
      this.loadingStates[lessonId] = loadingPromise;

      const lesson = await loadingPromise;
      
      // Cache the result
      if (lesson) {
        this.cache[lessonId] = lesson;
      }
      
      // Clear loading state
      this.loadingStates[lessonId] = null;
      
      return lesson;
    } catch (error) {
      console.error(`❌ Failed to load lesson ${lessonId}:`, error);
      this.loadingStates[lessonId] = null;
      return null;
    }
  }

  /**
   * Dynamic import for individual lessons
   */
  private static async dynamicImportLesson(lessonId: string): Promise<Lesson | null> {
    const lessonNumber = this.extractLessonNumber(lessonId);
    
    if (!lessonNumber) {
      console.warn(`⚠️ Could not extract lesson number from: ${lessonId}`);
      return null;
    }

    try {
      let lessonModule;
      
      // Dynamic import based on lesson number with proper path
      switch (lessonNumber) {
        case 1:
          lessonModule = await import('@/data/optimized-lesson-1');
          return lessonModule.optimizedLesson1;
        case 2:
          lessonModule = await import('@/data/optimized-lesson-2');
          return lessonModule.optimizedLesson2;
        case 3:
          lessonModule = await import('@/data/optimized-lesson-3');
          return lessonModule.optimizedLesson3;
        case 4:
          lessonModule = await import('@/data/optimized-lesson-4');
          return lessonModule.optimizedLesson4;
        case 5:
          lessonModule = await import('@/data/optimized-lesson-5');
          return lessonModule.optimizedLesson5;
        case 6:
          lessonModule = await import('@/data/optimized-lesson-6');
          return lessonModule.optimizedLesson6;
        case 7:
          lessonModule = await import('@/data/optimized-lesson-7');
          return lessonModule.optimizedLesson7;
        case 8:
          lessonModule = await import('@/data/optimized-lesson-8');
          return lessonModule.optimizedLesson8;
        case 9:
          lessonModule = await import('@/data/optimized-lesson-9');
          return lessonModule.optimizedLesson9;
        case 10:
          lessonModule = await import('@/data/optimized-lesson-10');
          return lessonModule.optimizedLesson10;
        case 11:
          lessonModule = await import('@/data/optimized-lesson-11');
          return lessonModule.optimizedLesson11;
        case 12:
          lessonModule = await import('@/data/optimized-lesson-12');
          return lessonModule.optimizedLesson12;
        case 13:
          lessonModule = await import('@/data/optimized-lesson-13');
          return lessonModule.optimizedLesson13;
        case 14:
          lessonModule = await import('@/data/optimized-lesson-14');
          return lessonModule.optimizedLesson14;
        case 15:
          lessonModule = await import('@/data/optimized-lesson-15');
          return lessonModule.optimizedLesson15;
        case 16:
          lessonModule = await import('@/data/optimized-lesson-16');
          return lessonModule.optimizedLesson16;
        case 17:
          lessonModule = await import('@/data/optimized-lesson-17');
          return lessonModule.optimizedLesson17;
        case 18:
          lessonModule = await import('@/data/optimized-lesson-18');
          return lessonModule.optimizedLesson18;
        case 19:
          lessonModule = await import('@/data/optimized-lesson-19');
          return lessonModule.optimizedLesson19;
        case 20:
          lessonModule = await import('@/data/optimized-lesson-20');
          return lessonModule.optimizedLesson20;
        case 21:
          lessonModule = await import('@/data/optimized-lesson-21');
          return lessonModule.optimizedLesson21;
        case 22:
          lessonModule = await import('@/data/optimized-lesson-22');
          return lessonModule.optimizedLesson22;
        case 23:
          lessonModule = await import('@/data/optimized-lesson-23');
          return lessonModule.optimizedLesson23;
        case 24:
          lessonModule = await import('@/data/optimized-lesson-24');
          return lessonModule.optimizedLesson24;
        case 25:
          lessonModule = await import('@/data/optimized-lesson-25');
          return lessonModule.optimizedLesson25;
        case 26:
          lessonModule = await import('@/data/optimized-lesson-26');
          return lessonModule.optimizedLesson26Comprehensive;
        case 27:
          lessonModule = await import('@/data/optimized-lesson-27');
          return lessonModule.optimizedLesson27Comprehensive;
        case 28:
          lessonModule = await import('@/data/optimized-lesson-28');
          return lessonModule.optimizedLesson28;
        case 29:
          lessonModule = await import('@/data/optimized-lesson-29');
          return lessonModule.optimizedLesson29;
        case 30:
          lessonModule = await import('@/data/optimized-lesson-30');
          return lessonModule.optimizedLesson30;
        // Continue pattern for all lessons...
        case 31:
          lessonModule = await import('@/data/optimized-lesson-31-6unit');
          return lessonModule.optimizedLesson31;
        case 32:
          lessonModule = await import('@/data/optimized-lesson-32');
          return lessonModule.optimizedLesson32;
        case 33:
          lessonModule = await import('@/data/optimized-lesson-33');
          return lessonModule.optimizedLesson33;
        case 34:
          lessonModule = await import('@/data/optimized-lesson-34');
          return lessonModule.optimizedLesson34;
        case 35:
          lessonModule = await import('@/data/optimized-lesson-35');
          return lessonModule.optimizedLesson35;
        case 36:
          lessonModule = await import('@/data/optimized-lesson-36');
          return lessonModule.optimizedLesson36;
        case 37:
          lessonModule = await import('@/data/optimized-lesson-37');
          return lessonModule.optimizedLesson37;
        case 38:
          lessonModule = await import('@/data/optimized-lesson-38');
          return lessonModule.optimizedLesson38;
        case 39:
          lessonModule = await import('@/data/optimized-lesson-39');
          return lessonModule.optimizedLesson39;
        case 40:
          lessonModule = await import('@/data/optimized-lesson-40');
          return lessonModule.optimizedLesson40;
        case 41:
          lessonModule = await import('@/data/optimized-lesson-41');
          return lessonModule.optimizedLesson41;
        case 42:
          lessonModule = await import('@/data/optimized-lesson-42');
          return lessonModule.optimizedLesson42;
        case 43:
          lessonModule = await import('@/data/optimized-lesson-43');
          return lessonModule.optimizedLesson43;
        case 44:
          lessonModule = await import('@/data/optimized-lesson-44');
          return lessonModule.optimizedLesson44;
        case 45:
          lessonModule = await import('@/data/optimized-lesson-45');
          return lessonModule.optimizedLesson45;
        case 46:
          lessonModule = await import('@/data/optimized-lesson-46');
          return lessonModule.optimizedLesson46;
        case 47:
          lessonModule = await import('@/data/optimized-lesson-47');
          return lessonModule.optimizedLesson47;
        case 48:
          lessonModule = await import('@/data/optimized-lesson-48');
          return lessonModule.optimizedLesson48;
        case 49:
          lessonModule = await import('@/data/optimized-lesson-49');
          return lessonModule.optimizedLesson49;
        case 50:
          lessonModule = await import('@/data/optimized-lesson-50');
          return lessonModule.optimizedLesson50;
        case 51:
          lessonModule = await import('@/data/optimized-lesson-51');
          return lessonModule.optimizedLesson51;
        case 52:
          lessonModule = await import('@/data/optimized-lesson-52');
          return lessonModule.optimizedLesson52;
        case 53:
          lessonModule = await import('@/data/optimized-lesson-53');
          return lessonModule.optimizedLesson53;
        case 54:
          lessonModule = await import('@/data/optimized-lesson-54');
          return lessonModule.optimizedLesson54;
        case 55:
          lessonModule = await import('@/data/optimized-lesson-55');
          return lessonModule.optimizedLesson55;
        case 56:
          lessonModule = await import('@/data/optimized-lesson-56');
          return lessonModule.optimizedLesson56;
        case 57:
          lessonModule = await import('@/data/optimized-lesson-57');
          return lessonModule.optimizedLesson57;
        case 58:
          lessonModule = await import('@/data/optimized-lesson-58');
          return lessonModule.optimizedLesson58;
        case 59:
          lessonModule = await import('@/data/optimized-lesson-59');
          return lessonModule.optimizedLesson59;
        case 60:
          lessonModule = await import('@/data/optimized-lesson-60');
          return lessonModule.optimizedLesson60;
        case 61:
          lessonModule = await import('@/data/optimized-lesson-61');
          return lessonModule.optimizedLesson61;
        case 62:
          lessonModule = await import('@/data/optimized-lesson-62');
          return lessonModule.optimizedLesson62;
        case 63:
          lessonModule = await import('@/data/optimized-lesson-63');
          return lessonModule.optimizedLesson63;
        case 64:
          lessonModule = await import('@/data/optimized-lesson-64');
          return lessonModule.optimizedLesson64;
        case 65:
          lessonModule = await import('@/data/optimized-lesson-65');
          return lessonModule.optimizedLesson65;
        case 66:
          lessonModule = await import('@/data/optimized-lesson-66');
          return lessonModule.optimizedLesson66;
        case 67:
          lessonModule = await import('@/data/optimized-lesson-67');
          return lessonModule.optimizedLesson67;
        case 68:
          lessonModule = await import('@/data/optimized-lesson-68');
          return lessonModule.optimizedLesson68;
        case 69:
          lessonModule = await import('@/data/optimized-lesson-69-6unit');
          return lessonModule.optimizedLesson69;
        case 70:
          lessonModule = await import('@/data/optimized-lesson-70-6unit');
          return lessonModule.optimizedLesson70;
        case 71:
          lessonModule = await import('@/data/optimized-lesson-71-6unit');
          return lessonModule.optimizedLesson71;
        case 72:
          lessonModule = await import('@/data/optimized-lesson-72-6unit');
          return lessonModule.optimizedLesson72;
        case 73:
          lessonModule = await import('@/data/optimized-lesson-73');
          return lessonModule.optimizedLesson73;
        case 74:
          lessonModule = await import('@/data/optimized-lesson-74');
          return lessonModule.optimizedLesson74;
        case 75:
          lessonModule = await import('@/data/optimized-lesson-75');
          return lessonModule.optimizedLesson75;
        case 76:
          lessonModule = await import('@/data/optimized-lesson-76');
          return lessonModule.optimizedLesson76;
        case 77:
          lessonModule = await import('@/data/optimized-lesson-77');
          return lessonModule.optimizedLesson77;
        case 78:
          lessonModule = await import('@/data/optimized-lesson-78');
          return lessonModule.optimizedLesson78;
        case 79:
          lessonModule = await import('@/data/optimized-lesson-79');
          return lessonModule.optimizedLesson79;
        case 80:
          lessonModule = await import('@/data/optimized-lesson-80');
          return lessonModule.optimizedLesson80;
        case 81:
          lessonModule = await import('@/data/optimized-lesson-81');
          return lessonModule.optimizedLesson81;
        case 82:
          lessonModule = await import('@/data/optimized-lesson-82');
          return lessonModule.optimizedLesson82;
        case 83:
          lessonModule = await import('@/data/optimized-lesson-83');
          return lessonModule.optimizedLesson83;
        case 84:
          lessonModule = await import('@/data/optimized-lesson-84');
          return lessonModule.optimizedLesson84;
        default:
          console.warn(`⚠️ No dynamic import defined for lesson ${lessonNumber}`);
          return null;
      }
    } catch (error) {
      console.error(`❌ Dynamic import failed for lesson ${lessonNumber}:`, error);
      return null;
    }
  }

  /**
   * Extract lesson number from lesson ID
   */
  private static extractLessonNumber(lessonId: string): number | null {
    const match = lessonId.match(/lesson-(\d+)/);
    return match ? parseInt(match[1], 10) : null;
  }

  /**
   * Preload lessons for better UX (optional)
   */
  static async preloadLessons(lessonIds: string[]): Promise<void> {
    console.log(`🔄 Preloading ${lessonIds.length} lessons...`);
    
    const preloadPromises = lessonIds.map(async (lessonId) => {
      try {
        await this.loadLesson(lessonId);
        console.log(`✅ Preloaded: ${lessonId}`);
      } catch (error) {
        console.warn(`⚠️ Failed to preload: ${lessonId}`, error);
      }
    });

    await Promise.all(preloadPromises);
    console.log(`🎉 Preloading complete!`);
  }

  /**
   * Clear cache to free memory
   */
  static clearCache(): void {
    this.cache = {};
    this.loadingStates = {};
    console.log('🧹 Lesson cache cleared');
  }

  /**
   * Get cache stats for debugging
   */
  static getCacheStats() {
    return {
      cachedLessons: Object.keys(this.cache).length,
      currentlyLoading: Object.keys(this.loadingStates).filter(key => this.loadingStates[key] !== null).length
    };
  }
}