/**
 * 🌐 HYBRID LESSON LOADER
 * Loads lesson content from Vercel while keeping app structure local
 * This prevents Android freezing by reducing local bundle size
 */

export interface RemoteLessonContent {
  id: string;
  title: string;
  content: any; // The actual lesson data
  version: string;
}

export class HybridLessonLoader {
  private static cache = new Map<string, RemoteLessonContent>();
  private static baseUrl = 'https://pulsepoints-144ua2o4z-310891s-projects.vercel.app/api';
  
  /**
   * Load lesson content from Vercel API
   */
  static async loadLessonContent(lessonId: string): Promise<RemoteLessonContent | null> {
    console.log(`🌐 Loading lesson ${lessonId} from Vercel...`);
    
    // Check cache first
    if (this.cache.has(lessonId)) {
      console.log(`📦 Returning cached lesson ${lessonId}`);
      return this.cache.get(lessonId)!;
    }
    
    try {
      const response = await fetch(`${this.baseUrl}/lessons?lesson=${lessonId}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        // Android-friendly timeout
        signal: AbortSignal.timeout(8000)
      });
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      
      const lessonContent: RemoteLessonContent = await response.json();
      
      // Cache the lesson
      this.cache.set(lessonId, lessonContent);
      
      console.log(`✅ Loaded lesson ${lessonId} from Vercel`);
      return lessonContent;
      
    } catch (error) {
      console.error(`❌ Failed to load lesson ${lessonId}:`, error);
      return null;
    }
  }
  
  /**
   * Load multiple lessons in batch
   */
  static async loadLessonsBatch(lessonIds: string[]): Promise<Map<string, RemoteLessonContent>> {
    console.log(`🚀 Loading ${lessonIds.length} lessons from Vercel...`);
    
    const results = new Map<string, RemoteLessonContent>();
    
    // Load in parallel but with limited concurrency for Android
    const batchSize = 3;
    for (let i = 0; i < lessonIds.length; i += batchSize) {
      const batch = lessonIds.slice(i, i + batchSize);
      
      const promises = batch.map(id => this.loadLessonContent(id));
      const batchResults = await Promise.allSettled(promises);
      
      batchResults.forEach((result, index) => {
        if (result.status === 'fulfilled' && result.value) {
          results.set(batch[index], result.value);
        }
      });
      
      // Small delay between batches for Android stability
      if (i + batchSize < lessonIds.length) {
        await new Promise(resolve => setTimeout(resolve, 100));
      }
    }
    
    console.log(`✅ Loaded ${results.size}/${lessonIds.length} lessons from Vercel`);
    return results;
  }
  
  /**
   * Preload lessons for a module
   */
  static async preloadModuleLessons(moduleId: string): Promise<void> {
    try {
      const response = await fetch(`${this.baseUrl}/lessons`, {
        signal: AbortSignal.timeout(5000)
      });
      
      if (response.ok) {
        const lessonIds: string[] = await response.json();
        await this.loadLessonsBatch(lessonIds);
      }
    } catch (error) {
      console.warn(`⚠️ Failed to preload module ${moduleId} lessons:`, error);
    }
  }
  
  /**
   * Clear cache to free memory
   */
  static clearCache(): void {
    this.cache.clear();
    console.log('🧹 Lesson cache cleared');
  }
  
  /**
   * Get cache size for monitoring
   */
  static getCacheInfo(): { size: number; lessons: string[] } {
    return {
      size: this.cache.size,
      lessons: Array.from(this.cache.keys())
    };
  }
}