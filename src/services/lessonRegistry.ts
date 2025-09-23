import { Lesson } from '@/types/learning';

/**
 * Dynamic Lesson Registry Service
 * Maps lesson IDs to dynamic import functions for code splitting
 * Replaces static imports with lazy loading on-demand
 */

// Type for dynamic lesson loader function
type LessonLoader = () => Promise<{ [key: string]: Lesson }>;

// Registry mapping lesson IDs to their dynamic import functions
const LESSON_REGISTRY: Record<string, LessonLoader> = {
  // Module 1 Lessons (1-10)
  'module-1-lesson-1': () => import('@/data/optimized-lesson-1').then(m => ({ optimizedLesson1: m.optimizedLesson1 })),
  'module-1-lesson-2': () => import('@/data/optimized-lesson-2').then(m => ({ optimizedLesson2: m.optimizedLesson2 })),
  'module-1-lesson-3': () => import('@/data/optimized-lesson-3').then(m => ({ optimizedLesson3: m.optimizedLesson3 })),
  'module-1-lesson-4': () => import('@/data/optimized-lesson-4').then(m => ({ optimizedLesson4: m.optimizedLesson4 })),
  'module-1-lesson-5': () => import('@/data/optimized-lesson-5').then(m => ({ optimizedLesson5: m.optimizedLesson5 })),
  'module-1-lesson-6': () => import('@/data/optimized-lesson-6').then(m => ({ optimizedLesson6: m.optimizedLesson6 })),
  'module-1-lesson-7': () => import('@/data/optimized-lesson-7').then(m => ({ optimizedLesson7: m.optimizedLesson7 })),
  'module-1-lesson-8': () => import('@/data/optimized-lesson-8').then(m => ({ optimizedLesson8: m.optimizedLesson8 })),
  'module-1-lesson-9': () => import('@/data/optimized-lesson-9').then(m => ({ optimizedLesson9: m.optimizedLesson9 })),
  'module-1-lesson-10': () => import('@/data/optimized-lesson-10').then(m => ({ optimizedLesson10: m.optimizedLesson10 })),

  // Module 2 Lessons (11-20)
  'module-2-lesson-1': () => import('@/data/optimized-lesson-11').then(m => ({ optimizedLesson11: m.optimizedLesson11 })),
  'module-2-lesson-2': () => import('@/data/optimized-lesson-12').then(m => ({ optimizedLesson12: m.optimizedLesson12 })),
  'module-2-lesson-3': () => import('@/data/optimized-lesson-13').then(m => ({ optimizedLesson13: m.optimizedLesson13 })),
  'module-2-lesson-4': () => import('@/data/optimized-lesson-14').then(m => ({ optimizedLesson14: m.optimizedLesson14 })),
  'module-2-lesson-5': () => import('@/data/optimized-lesson-15').then(m => ({ optimizedLesson15: m.optimizedLesson15 })),
  'module-2-lesson-6': () => import('@/data/optimized-lesson-16').then(m => ({ optimizedLesson16: m.optimizedLesson16 })),
  'module-2-lesson-7': () => import('@/data/optimized-lesson-17').then(m => ({ optimizedLesson17: m.optimizedLesson17 })),
  'module-2-lesson-8': () => import('@/data/optimized-lesson-18').then(m => ({ optimizedLesson18: m.optimizedLesson18 })),
  'module-2-lesson-9': () => import('@/data/optimized-lesson-19').then(m => ({ optimizedLesson19: m.optimizedLesson19 })),
  'module-2-lesson-10': () => import('@/data/optimized-lesson-20').then(m => ({ optimizedLesson20: m.optimizedLesson20 })),

  // Module 3 Lessons (21-30)
  'module-3-lesson-1': () => import('@/data/optimized-lesson-21').then(m => ({ optimizedLesson21: m.optimizedLesson21 })),
  'module-3-lesson-2': () => import('@/data/optimized-lesson-22').then(m => ({ optimizedLesson22: m.optimizedLesson22 })),
  'module-3-lesson-3': () => import('@/data/optimized-lesson-23').then(m => ({ optimizedLesson23: m.optimizedLesson23 })),
  'module-3-lesson-4': () => import('@/data/optimized-lesson-24').then(m => ({ optimizedLesson24: m.optimizedLesson24 })),
  'module-3-lesson-5': () => import('@/data/optimized-lesson-25').then(m => ({ optimizedLesson25: m.optimizedLesson25 })),
  'module-3-lesson-6': () => import('@/data/optimized-lesson-26').then(m => ({ optimizedLesson26Comprehensive: m.optimizedLesson26Comprehensive })),
  'module-3-lesson-7': () => import('@/data/optimized-lesson-27').then(m => ({ optimizedLesson27Comprehensive: m.optimizedLesson27Comprehensive })),
  'module-3-lesson-8': () => import('@/data/optimized-lesson-28').then(m => ({ optimizedLesson28: m.optimizedLesson28 })),
  'module-3-lesson-9': () => import('@/data/optimized-lesson-29').then(m => ({ optimizedLesson29: m.optimizedLesson29 })),
  'module-3-lesson-10': () => import('@/data/optimized-lesson-30').then(m => ({ optimizedLesson30: m.optimizedLesson30 })),

  // Module 4 Lessons (31-40)
  'module-4-lesson-1': () => import('@/data/optimized-lesson-31-6unit').then(m => ({ optimizedLesson31: m.optimizedLesson31 })),
  'module-4-lesson-2': () => import('@/data/optimized-lesson-32').then(m => ({ optimizedLesson32: m.optimizedLesson32 })),
  'module-4-lesson-3': () => import('@/data/optimized-lesson-33').then(m => ({ optimizedLesson33: m.optimizedLesson33 })),
  'module-4-lesson-4': () => import('@/data/optimized-lesson-34').then(m => ({ optimizedLesson34: m.optimizedLesson34 })),
  'module-4-lesson-5': () => import('@/data/optimized-lesson-35').then(m => ({ optimizedLesson35: m.optimizedLesson35 })),
  'module-4-lesson-6': () => import('@/data/optimized-lesson-36').then(m => ({ optimizedLesson36: m.optimizedLesson36 })),
  'module-4-lesson-7': () => import('@/data/optimized-lesson-37').then(m => ({ optimizedLesson37: m.optimizedLesson37 })),
  'module-4-lesson-8': () => import('@/data/optimized-lesson-38').then(m => ({ optimizedLesson38: m.optimizedLesson38 })),
  'module-4-lesson-9': () => import('@/data/optimized-lesson-39').then(m => ({ optimizedLesson39: m.optimizedLesson39 })),
  'module-4-lesson-10': () => import('@/data/optimized-lesson-40').then(m => ({ optimizedLesson40: m.optimizedLesson40 })),

  // Module 5 Lessons (41-50)
  'module-5-lesson-1': () => import('@/data/optimized-lesson-41').then(m => ({ optimizedLesson41: m.optimizedLesson41 })),
  'module-5-lesson-2': () => import('@/data/optimized-lesson-42').then(m => ({ optimizedLesson42: m.optimizedLesson42 })),
  'module-5-lesson-3': () => import('@/data/optimized-lesson-43').then(m => ({ optimizedLesson43: m.optimizedLesson43 })),
  'module-5-lesson-4': () => import('@/data/optimized-lesson-44').then(m => ({ optimizedLesson44: m.optimizedLesson44 })),
  'module-5-lesson-5': () => import('@/data/optimized-lesson-45').then(m => ({ optimizedLesson45: m.optimizedLesson45 })),
  'module-5-lesson-6': () => import('@/data/optimized-lesson-46').then(m => ({ optimizedLesson46: m.optimizedLesson46 })),
  'module-5-lesson-7': () => import('@/data/optimized-lesson-47').then(m => ({ optimizedLesson47: m.optimizedLesson47 })),
  'module-5-lesson-8': () => import('@/data/optimized-lesson-48').then(m => ({ optimizedLesson48: m.optimizedLesson48 })),
  'module-5-lesson-9': () => import('@/data/optimized-lesson-49').then(m => ({ optimizedLesson49: m.optimizedLesson49 })),
  'module-5-lesson-10': () => import('@/data/optimized-lesson-50').then(m => ({ optimizedLesson50: m.optimizedLesson50 })),

  // Module 6 Lessons (51-60+)
  'module-6-lesson-1': () => import('@/data/optimized-lesson-51').then(m => ({ optimizedLesson51: m.optimizedLesson51 })),
  'module-6-lesson-2': () => import('@/data/optimized-lesson-52').then(m => ({ optimizedLesson52: m.optimizedLesson52 })),
  'module-6-lesson-3': () => import('@/data/optimized-lesson-53').then(m => ({ optimizedLesson53: m.optimizedLesson53 })),
  'module-6-lesson-4': () => import('@/data/optimized-lesson-54').then(m => ({ optimizedLesson54: m.optimizedLesson54 })),
  'module-6-lesson-5': () => import('@/data/optimized-lesson-55').then(m => ({ optimizedLesson55: m.optimizedLesson55 })),
  'module-6-lesson-6': () => import('@/data/optimized-lesson-56').then(m => ({ optimizedLesson56: m.optimizedLesson56 })),
  'module-6-lesson-7': () => import('@/data/optimized-lesson-57').then(m => ({ optimizedLesson57: m.optimizedLesson57 })),
  'module-6-lesson-8': () => import('@/data/optimized-lesson-58').then(m => ({ optimizedLesson58: m.optimizedLesson58 })),
  'module-6-lesson-9': () => import('@/data/optimized-lesson-59').then(m => ({ optimizedLesson59: m.optimizedLesson59 })),
  'module-6-lesson-10': () => import('@/data/optimized-lesson-60').then(m => ({ optimizedLesson60: m.optimizedLesson60 })),
  'module-6-lesson-11': () => import('@/data/optimized-lesson-61').then(m => ({ optimizedLesson61: m.optimizedLesson61 })),
  'module-6-lesson-12': () => import('@/data/optimized-lesson-62').then(m => ({ optimizedLesson62: m.optimizedLesson62 })),
  'module-6-lesson-13': () => import('@/data/optimized-lesson-63').then(m => ({ optimizedLesson63: m.optimizedLesson63 })),
  'module-6-lesson-14': () => import('@/data/optimized-lesson-64').then(m => ({ optimizedLesson64: m.optimizedLesson64 })),
  'module-6-lesson-15': () => import('@/data/optimized-lesson-65').then(m => ({ optimizedLesson65: m.optimizedLesson65 })),
  'module-6-lesson-16': () => import('@/data/optimized-lesson-66').then(m => ({ optimizedLesson66: m.optimizedLesson66 })),
  'module-6-lesson-17': () => import('@/data/optimized-lesson-67').then(m => ({ optimizedLesson67: m.optimizedLesson67 })),

  // 6-Unit Enhanced Lessons
  'module-1-lesson-3-6unit': () => import('@/data/optimized-lesson-33-6unit').then(m => ({ optimizedLesson33: m.optimizedLesson33 })),
  'module-1-lesson-4-6unit': () => import('@/data/optimized-lesson-34-6unit').then(m => ({ optimizedLesson34: m.optimizedLesson34 })),
  'module-4-lesson-7-6unit': () => import('@/data/optimized-lesson-37-6unit').then(m => ({ optimizedLesson37: m.optimizedLesson37 })),
  'module-4-lesson-8-6unit': () => import('@/data/optimized-lesson-38-6unit').then(m => ({ optimizedLesson38: m.optimizedLesson38 })),
  'module-4-lesson-9-6unit': () => import('@/data/optimized-lesson-39-6unit').then(m => ({ optimizedLesson39: m.optimizedLesson39 })),
  'module-4-lesson-10-6unit': () => import('@/data/optimized-lesson-40-6unit').then(m => ({ optimizedLesson40: m.optimizedLesson40 })),
  'module-5-lesson-1-6unit': () => import('@/data/optimized-lesson-41-6unit').then(m => ({ optimizedLesson41: m.optimizedLesson41 })),
  'module-5-lesson-2-6unit': () => import('@/data/optimized-lesson-42-6unit').then(m => ({ optimizedLesson42: m.optimizedLesson42 })),
  'module-5-lesson-3-6unit': () => import('@/data/optimized-lesson-43-6unit').then(m => ({ optimizedLesson43: m.optimizedLesson43 })),

  // Special Lessons
  'module-4-lesson-9-module4': () => import('@/data/optimized-lesson-39-module4').then(m => ({ optimizedLesson39Module4: m.optimizedLesson39Module4 })),
};

// Cache for loaded lessons to avoid re-imports
const lessonCache = new Map<string, Lesson>();

/**
 * Dynamically loads a lesson by ID on-demand
 * Uses caching to avoid re-loading the same lesson
 * Implements proper error handling and loading states
 */
export async function loadLessonDynamically(lessonId: string): Promise<Lesson | null> {
  console.log('🔄 Dynamic lesson load requested for:', lessonId);
  
  // Check cache first
  if (lessonCache.has(lessonId)) {
    console.log('📦 Lesson loaded from cache:', lessonId);
    return lessonCache.get(lessonId)!;
  }

  // Get loader function
  const loader = LESSON_REGISTRY[lessonId];
  if (!loader) {
    console.warn('❌ No loader found for lesson:', lessonId);
    return null;
  }

  try {
    console.time(`⏱️ Loading lesson ${lessonId}`);
    const moduleExports = await loader();
    const lesson = Object.values(moduleExports)[0] as Lesson;
    
    if (!lesson) {
      console.error('❌ Lesson data not found in module:', lessonId);
      return null;
    }

    // Update lesson metadata
    lesson.id = lessonId;
    lesson.moduleId = lessonId.split('-lesson-')[0];

    // Cache for future use
    lessonCache.set(lessonId, lesson);
    console.timeEnd(`⏱️ Loading lesson ${lessonId}`);
    console.log('✅ Dynamic lesson loaded successfully:', lessonId);
    
    return lesson;
  } catch (error) {
    console.error('❌ Failed to load lesson dynamically:', lessonId, error);
    return null;
  }
}

/**
 * Preloads specific lessons for better UX
 * Can be called when user hovers over lesson or module
 */
export function preloadLesson(lessonId: string): void {
  if (!lessonCache.has(lessonId) && LESSON_REGISTRY[lessonId]) {
    loadLessonDynamically(lessonId).catch(error => {
      console.warn('⚠️ Preload failed for lesson:', lessonId, error);
    });
  }
}

/**
 * Gets all available lesson IDs without loading content
 */
export function getAvailableLessonIds(): string[] {
  return Object.keys(LESSON_REGISTRY);
}

/**
 * Clears lesson cache (useful for development/testing)
 */
export function clearLessonCache(): void {
  lessonCache.clear();
  console.log('🗑️ Lesson cache cleared');
}

/**
 * Gets cache statistics for debugging
 */
export function getCacheStats(): { cached: number; total: number; cachedIds: string[] } {
  return {
    cached: lessonCache.size,
    total: Object.keys(LESSON_REGISTRY).length,
    cachedIds: Array.from(lessonCache.keys())
  };
}