/**
 * 🚀 ENHANCED ANDROID-OPTIMIZED LESSON LOADER
 * Fixes dynamic loading issues for Android app builds
 */

import { Lesson } from '@/types/learning';

// Enhanced caching with version control
interface CachedLesson {
  lesson: Lesson;
  timestamp: number;
  version: string;
}

// Android-optimized lesson loader
class AndroidLessonLoader {
  private cache = new Map<string, CachedLesson>();
  private loadingPromises = new Map<string, Promise<Lesson | null>>();
  private readonly CACHE_VERSION = '1.0.0';
  private readonly CACHE_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours

  /**
   * Available lesson registry - only includes lessons that actually exist
   */
  private readonly availableLessons = new Set([
    // Module 1 (Basic lessons)
    'module-1-lesson-1', 'module-1-lesson-2', 'module-1-lesson-3', 'module-1-lesson-4',
    'module-1-lesson-5', 'module-1-lesson-6', 'module-1-lesson-7', 'module-1-lesson-8',
    'module-1-lesson-9', 'module-1-lesson-10',
    
    // Module 2
    'module-2-lesson-1', 'module-2-lesson-2', 'module-2-lesson-3', 'module-2-lesson-4',
    'module-2-lesson-5', 'module-2-lesson-6', 'module-2-lesson-7', 'module-2-lesson-8',
    'module-2-lesson-9', 'module-2-lesson-10',
    
    // Module 3
    'module-3-lesson-1', 'module-3-lesson-2', 'module-3-lesson-3', 'module-3-lesson-4',
    'module-3-lesson-5', 'module-3-lesson-6', 'module-3-lesson-7', 'module-3-lesson-8',
    'module-3-lesson-9', 'module-3-lesson-10',
    
    // Module 4 (6-unit lessons)
    'module-4-lesson-1-6unit', 'module-4-lesson-2-6unit', 'module-4-lesson-3-6unit',
    'module-4-lesson-4-6unit', 'module-4-lesson-5-6unit', 'module-4-lesson-6-6unit',
    
    // Module 5 (6-unit lessons)  
    'module-5-lesson-1-6unit', 'module-5-lesson-2-6unit', 'module-5-lesson-3-6unit',
  ]);

  /**
   * Enhanced lesson registry with Android-optimized imports
   */
  private readonly lessonRegistry: Record<string, () => Promise<any>> = {
    // Module 1 - Basic lessons
    'module-1-lesson-1': () => this.safeImport(() => import('@/data/optimized-lesson-1')),
    'module-1-lesson-2': () => this.safeImport(() => import('@/data/optimized-lesson-2')),
    'module-1-lesson-3': () => this.safeImport(() => import('@/data/optimized-lesson-3')),
    'module-1-lesson-4': () => this.safeImport(() => import('@/data/optimized-lesson-4')),
    'module-1-lesson-5': () => this.safeImport(() => import('@/data/optimized-lesson-5')),
    'module-1-lesson-6': () => this.safeImport(() => import('@/data/optimized-lesson-6')),
    'module-1-lesson-7': () => this.safeImport(() => import('@/data/optimized-lesson-7')),
    'module-1-lesson-8': () => this.safeImport(() => import('@/data/optimized-lesson-8')),
    'module-1-lesson-9': () => this.safeImport(() => import('@/data/optimized-lesson-9')),
    'module-1-lesson-10': () => this.safeImport(() => import('@/data/optimized-lesson-10')),

    // Module 2
    'module-2-lesson-1': () => this.safeImport(() => import('@/data/optimized-lesson-11')),
    'module-2-lesson-2': () => this.safeImport(() => import('@/data/optimized-lesson-12')),
    'module-2-lesson-3': () => this.safeImport(() => import('@/data/optimized-lesson-13')),
    'module-2-lesson-4': () => this.safeImport(() => import('@/data/optimized-lesson-14')),
    'module-2-lesson-5': () => this.safeImport(() => import('@/data/optimized-lesson-15')),
    'module-2-lesson-6': () => this.safeImport(() => import('@/data/optimized-lesson-16')),
    'module-2-lesson-7': () => this.safeImport(() => import('@/data/optimized-lesson-17')),
    'module-2-lesson-8': () => this.safeImport(() => import('@/data/optimized-lesson-18')),
    'module-2-lesson-9': () => this.safeImport(() => import('@/data/optimized-lesson-19')),
    'module-2-lesson-10': () => this.safeImport(() => import('@/data/optimized-lesson-20')),

    // Module 3
    'module-3-lesson-1': () => this.safeImport(() => import('@/data/optimized-lesson-21')),
    'module-3-lesson-2': () => this.safeImport(() => import('@/data/optimized-lesson-22')),
    'module-3-lesson-3': () => this.safeImport(() => import('@/data/optimized-lesson-23')),
    'module-3-lesson-4': () => this.safeImport(() => import('@/data/optimized-lesson-24')),
    'module-3-lesson-5': () => this.safeImport(() => import('@/data/optimized-lesson-25')),
    'module-3-lesson-6': () => this.safeImport(() => import('@/data/optimized-lesson-26')),
    'module-3-lesson-7': () => this.safeImport(() => import('@/data/optimized-lesson-27-comprehensive')),
    'module-3-lesson-8': () => this.safeImport(() => import('@/data/optimized-lesson-28')),
    'module-3-lesson-9': () => this.safeImport(() => import('@/data/optimized-lesson-29')),
    'module-3-lesson-10': () => this.safeImport(() => import('@/data/optimized-lesson-30')),

    // Module 4 - 6-unit lessons
    'module-4-lesson-1-6unit': () => this.safeImport(() => import('@/data/optimized-lesson-31-6unit')),
    'module-4-lesson-2-6unit': () => this.safeImport(() => import('@/data/optimized-lesson-32-6unit')),
    'module-4-lesson-3-6unit': () => this.safeImport(() => import('@/data/optimized-lesson-33-6unit')),
    'module-4-lesson-4-6unit': () => this.safeImport(() => import('@/data/optimized-lesson-34-6unit')),
    'module-4-lesson-5-6unit': () => this.safeImport(() => import('@/data/optimized-lesson-37-6unit')),
    'module-4-lesson-6-6unit': () => this.safeImport(() => import('@/data/optimized-lesson-38-6unit')),

    // Module 5 - 6-unit lessons
    'module-5-lesson-1-6unit': () => this.safeImport(() => import('@/data/optimized-lesson-41-6unit')),
    'module-5-lesson-2-6unit': () => this.safeImport(() => import('@/data/optimized-lesson-42-6unit')),
    'module-5-lesson-3-6unit': () => this.safeImport(() => import('@/data/optimized-lesson-43-6unit')),
  };

  /**
   * Android-safe import wrapper with retry logic and chunking
   */
  private async safeImport(importFn: () => Promise<any>, retries = 3): Promise<any> {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        return await importFn();
      } catch (error) {
        console.warn(`⚠️ Import attempt ${attempt}/${retries} failed:`, error);
        
        if (attempt === retries) {
          throw error;
        }
        
        // Progressive delay for Android WebView
        await new Promise(resolve => setTimeout(resolve, attempt * 500));
      }
    }
  }

  /**
   * Android WebView optimized loading with chunking to prevent UI blocking
   */
  private async loadWithChunking(loader: () => Promise<any>): Promise<any> {
    return new Promise((resolve, reject) => {
      // Use requestIdleCallback if available for better Android performance
      const scheduleChunk = (callback: () => void) => {
        if (typeof requestIdleCallback !== 'undefined') {
          requestIdleCallback(callback, { timeout: 50 });
        } else {
          setTimeout(callback, 0);
        }
      };

      scheduleChunk(async () => {
        try {
          const result = await loader();
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
    });
  }

  /**
   * Validate lesson structure for Android WebView compatibility
   */
  private validateLessonStructure(lesson: Lesson): void {
    // Ensure all required properties exist
    if (!lesson.content) {
      lesson.content = {
        type: 'mixed',
        introduction: 'Lesson content loading...',
        sections: [],
        slides: [],
        summary: '',
        keyPoints: [],
        resources: []
      };
    }

    // Ensure sections have required id field
    if (lesson.content.sections) {
      lesson.content.sections = lesson.content.sections.map((section, index) => ({
        id: section.id || `section-${index}`,
        title: section.title || `Section ${index + 1}`,
        content: section.content || '',
        ...section
      }));
    }

    // Ensure arrays are initialized
    lesson.tasks = lesson.tasks || [];
    lesson.content.slides = lesson.content.slides || [];
    lesson.content.keyPoints = lesson.content.keyPoints || [];
    lesson.content.resources = lesson.content.resources || [];
  }

  /**
   * Check if lesson is available for loading
   */
  isLessonAvailable(lessonId: string): boolean {
    return this.availableLessons.has(lessonId);
  }

  /**
   * Get list of all available lessons
   */
  getAvailableLessons(): string[] {
    return Array.from(this.availableLessons);
  }

  /**
   * Enhanced lesson loading with Android optimizations
   */
  async loadLesson(lessonId: string): Promise<Lesson | null> {
    console.log('🔄 Android lesson load requested:', lessonId);

    // Check if lesson is available
    if (!this.isLessonAvailable(lessonId)) {
      console.warn(`❌ Lesson not available: ${lessonId}`);
      return null;
    }

    // Check cache first
    const cached = this.cache.get(lessonId);
    if (cached && this.isCacheValid(cached)) {
      console.log('📦 Lesson loaded from cache:', lessonId);
      return cached.lesson;
    }

    // Check if already loading to prevent duplicate requests
    if (this.loadingPromises.has(lessonId)) {
      console.log('⏳ Lesson already loading, waiting...', lessonId);
      return this.loadingPromises.get(lessonId)!;
    }

    // Start loading
    const loadingPromise = this.performLessonLoad(lessonId);
    this.loadingPromises.set(lessonId, loadingPromise);

    try {
      const lesson = await loadingPromise;
      return lesson;
    } finally {
      this.loadingPromises.delete(lessonId);
    }
  }

  /**
   * Core lesson loading logic with Android WebView optimizations
   */
  private async performLessonLoad(lessonId: string): Promise<Lesson | null> {
    const loader = this.lessonRegistry[lessonId];
    if (!loader) {
      console.error('❌ No loader function for lesson:', lessonId);
      return null;
    }

    try {
      console.time(`⏱️ Loading lesson ${lessonId}`);
      
      // ✅ ANDROID OPTIMIZATION: Use chunked loading to prevent UI blocking
      const moduleExports = await this.loadWithChunking(loader);
      const lesson = this.extractLessonFromModule(moduleExports, lessonId);
      
      if (!lesson) {
        console.error('❌ Lesson data not found in module:', lessonId);
        return null;
      }

      // Enhance lesson metadata
      lesson.id = lessonId;
      lesson.moduleId = this.extractModuleId(lessonId);

      // ✅ ANDROID: Validate lesson structure for WebView compatibility
      this.validateLessonStructure(lesson);

      // Cache the lesson
      this.cacheLesson(lessonId, lesson);
      
      console.timeEnd(`⏱️ Loading lesson ${lessonId}`);
      console.log('✅ Android lesson loaded successfully:', lessonId);
      
      return lesson;

    } catch (error) {
      console.error(`❌ Failed to load lesson ${lessonId}:`, error);
      return null;
    }
  }

  /**
   * Extract lesson from module exports
   */
  private extractLessonFromModule(moduleExports: any, lessonId: string): Lesson | null {
    // Handle different export patterns
    if (moduleExports.default) {
      return moduleExports.default;
    }

    // Look for lesson by common naming patterns
    const possibleKeys = [
      'optimizedLesson' + lessonId.split('-')[2],
      'optimizedLesson' + lessonId.split('-')[2] + '6unit',
      'optimizedLesson' + lessonId.split('-')[2] + 'Comprehensive',
      Object.keys(moduleExports)[0] // First export
    ];

    for (const key of possibleKeys) {
      if (moduleExports[key]) {
        return moduleExports[key];
      }
    }

    return null;
  }

  /**
   * Extract module ID from lesson ID
   */
  private extractModuleId(lessonId: string): string {
    const parts = lessonId.split('-lesson-');
    return parts[0];
  }

  /**
   * Cache lesson with version control
   */
  private cacheLesson(lessonId: string, lesson: Lesson): void {
    this.cache.set(lessonId, {
      lesson,
      timestamp: Date.now(),
      version: this.CACHE_VERSION
    });
  }

  /**
   * Check if cached lesson is still valid
   */
  private isCacheValid(cached: CachedLesson): boolean {
    const age = Date.now() - cached.timestamp;
    return age < this.CACHE_EXPIRY && cached.version === this.CACHE_VERSION;
  }

  /**
   * Clear expired cache entries
   */
  clearExpiredCache(): void {
    for (const [lessonId, cached] of this.cache.entries()) {
      if (!this.isCacheValid(cached)) {
        this.cache.delete(lessonId);
      }
    }
  }

  /**
   * Preload next lesson for smooth navigation
   */
  async preloadNextLesson(currentLessonId: string): Promise<void> {
    const nextLessonId = this.getNextLessonId(currentLessonId);
    if (nextLessonId && this.isLessonAvailable(nextLessonId)) {
      console.log('🔄 Preloading next lesson:', nextLessonId);
      this.loadLesson(nextLessonId).catch(error => {
        console.warn('⚠️ Failed to preload next lesson:', error);
      });
    }
  }

  /**
   * Get next lesson ID for preloading
   */
  private getNextLessonId(currentLessonId: string): string | null {
    const parts = currentLessonId.split('-');
    if (parts.length < 4) return null;

    const moduleNum = parseInt(parts[1]);
    const lessonNum = parseInt(parts[3]);
    const isSixUnit = currentLessonId.includes('6unit');

    // Next lesson in same module
    const nextLessonNum = lessonNum + 1;
    const nextInModule = `module-${moduleNum}-lesson-${nextLessonNum}${isSixUnit ? '-6unit' : ''}`;
    
    if (this.isLessonAvailable(nextInModule)) {
      return nextInModule;
    }

    // First lesson in next module
    const nextModule = `module-${moduleNum + 1}-lesson-1${isSixUnit ? '-6unit' : ''}`;
    if (this.isLessonAvailable(nextModule)) {
      return nextModule;
    }

    return null;
  }

  /**
   * Generate fallback lesson for unavailable content
   */
  generateFallbackLesson(lessonId: string): Lesson {
    const parts = lessonId.split('-');
    const moduleNum = parts[1] || '1';
    const lessonNum = parts[3] || '1';

    return {
      id: lessonId,
      moduleId: `module-${moduleNum}`,
      title: `ECG Fundamentals ${moduleNum}.${lessonNum}`,
      description: 'This lesson is being prepared and will be available soon.',
      order: parseInt(lessonNum),
      estimatedTime: 10,
      completed: false,
      attempts: 0,
      content: {
        type: 'mixed',
        introduction: '📚 This lesson content is currently being optimized for the best learning experience.',
        sections: [
          {
            id: 'coming-soon-section',
            title: 'Coming Soon',
            content: 'We\'re working hard to bring you high-quality ECG learning content. This lesson will be available in the next update!'
          }
        ],
        slides: [],
        summary: 'This lesson is currently being prepared and will be available in the next update.',
        keyPoints: [
          'Lesson content is being optimized for mobile performance',
          'Check back soon for updated content',
          'Try other available lessons in the meantime'
        ],
        resources: []
      },
      tasks: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
  }
}

// Export singleton instance
export const androidLessonLoader = new AndroidLessonLoader();

// Export main loading function for backward compatibility
export async function loadLessonDynamically(lessonId: string): Promise<Lesson | null> {
  const lesson = await androidLessonLoader.loadLesson(lessonId);
  
  if (!lesson) {
    // Return fallback lesson instead of null
    return androidLessonLoader.generateFallbackLesson(lessonId);
  }
  
  // Preload next lesson for smooth navigation
  androidLessonLoader.preloadNextLesson(lessonId);
  
  return lesson;
}

// Export utility functions - use direct function calls to avoid binding issues
export function isLessonAvailable(lessonId: string): boolean {
  return androidLessonLoader.isLessonAvailable(lessonId);
}

export function getAvailableLessons(): string[] {
  return androidLessonLoader.getAvailableLessons();
}

export function clearExpiredCache(): void {
  return androidLessonLoader.clearExpiredCache();
}

export function preloadNextLesson(currentLessonId: string): Promise<void> {
  return androidLessonLoader.preloadNextLesson(currentLessonId);
}