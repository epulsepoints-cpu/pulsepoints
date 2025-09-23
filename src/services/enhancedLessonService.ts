import { LessonUploadService } from './lessonUploadService';
import { Lesson } from '@/types/learning';
import { enableIndexedDbPersistence } from 'firebase/firestore';
import { db } from '../firebase';

// ⚡ EXTERNAL LOADING: Replace dynamic imports with external API loader  
import { externalLessonLoader } from './externalLessonLoader';




// ⚡ DYNAMIC IMPORTS: LOCAL_LESSONS removed - now using dynamic loader
// All lessons are loaded on-demand via externalLessonLoader

// Cache for Firestore lessons to avoid repeated fetches
const lessonCache = new Map<string, Lesson>();
const moduleCache = new Map<string, Lesson[]>();

export class EnhancedLessonService {
  
  // Initialize offline persistence for better Android performance
  private static isOfflinePersistenceEnabled = false;
  private static firebaseConnectionStatus: 'connected' | 'disconnected' | 'checking' = 'checking';
  private static connectionRetryCount = 0;
  private static maxRetries = 3;
  
  static async enableOfflinePersistence(): Promise<void> {
    if (this.isOfflinePersistenceEnabled) return;
    
    try {
      await enableIndexedDbPersistence(db);
      this.isOfflinePersistenceEnabled = true;
      console.log('✅ Offline persistence enabled for lessons');
    } catch (err: any) {
      console.warn('⚠️ Failed to enable offline persistence:', err.message);
      // This is okay - it just means multiple tabs are open or it's not supported
    }
  }
  
  /**
   * Check Firebase connection status
   */
  private static async checkFirebaseConnection(): Promise<boolean> {
    try {
      this.firebaseConnectionStatus = 'checking';
      
      // Try a simple Firestore read operation with timeout
      const testPromise = LessonUploadService.lessonExists('connection-test');
      const timeoutPromise = new Promise<boolean>((_, reject) => 
        setTimeout(() => reject(new Error('Connection timeout')), 5000)
      );
      
      await Promise.race([testPromise, timeoutPromise]);
      this.firebaseConnectionStatus = 'connected';
      this.connectionRetryCount = 0;
      return true;
    } catch (error) {
      console.warn('⚠️ Firebase connection check failed:', error);
      this.firebaseConnectionStatus = 'disconnected';
      return false;
    }
  }
  
  /**
   * Get lesson with Firebase priority, intelligent fallback, and aggressive caching
   */
  static async getLesson(lessonId: string): Promise<Lesson | null> {
    try {
      // Check cache first - prioritize cached data for speed
      if (lessonCache.has(lessonId)) {
        console.log(`🔄 Loaded lesson ${lessonId} from cache`);
        return lessonCache.get(lessonId)!;
      }
      
      // Check Firebase connection status before attempting
      const isConnected = this.firebaseConnectionStatus === 'connected' || 
                         await this.checkFirebaseConnection();
      
      if (isConnected && this.connectionRetryCount < this.maxRetries) {
        try {
          console.log(`🔍 Loading lesson ${lessonId} from Firebase...`);
          
          // Set timeout for Firebase request
          const firestorePromise = LessonUploadService.getLesson(lessonId);
          const timeoutPromise = new Promise<Lesson | null>((_, reject) => 
            setTimeout(() => reject(new Error('Firebase timeout')), 8000)
          );
          
          const firestoreLesson = await Promise.race([firestorePromise, timeoutPromise]);
          
          if (firestoreLesson) {
            console.log(`✅ Loaded lesson ${lessonId} from Firebase`);
            // Cache the lesson aggressively
            lessonCache.set(lessonId, firestoreLesson);
            this.firebaseConnectionStatus = 'connected';
            return firestoreLesson;
          }
        } catch (firebaseError) {
          console.warn(`⚠️ Firebase lesson fetch failed for ${lessonId}:`, firebaseError);
          this.connectionRetryCount++;
          this.firebaseConnectionStatus = 'disconnected';
        }
      }
      
      // ⚡ EXTERNAL LOADING: Use external API loader instead of dynamic imports
      console.log(`🌐 Loading lesson from external API: ${lessonId}...`);
      const externalLesson = await externalLessonLoader.loadLesson(lessonId);
      
      if (externalLesson) {
        console.log(`✅ Loaded lesson ${lessonId} from external API`);
        // Cache external lesson for consistency
        lessonCache.set(lessonId, externalLesson);
        return externalLesson;
      }
      
      console.error(`❌ Lesson ${lessonId} not found in Firebase or locally`);
      return null;
      
    } catch (error) {
      console.error(`❌ Critical error loading lesson ${lessonId}:`, error);
      
      // ⚡ EXTERNAL LOADING: Emergency fallback is not needed - external API is the primary source
      console.warn(`⚠️ External API failed, lesson ${lessonId} unavailable`);
      return null;
      
      return null;
    }
  }
  
  /**
   * Get all lessons for a module with Firebase priority and intelligent fallback
   */
  static async getLessonsByModule(moduleId: string): Promise<Lesson[]> {
    try {
      // Check cache first
      if (moduleCache.has(moduleId)) {
        console.log(`🔄 Loaded module ${moduleId} lessons from cache`);
        return moduleCache.get(moduleId)!;
      }
      
      // Check Firebase connection before attempting
      const isConnected = this.firebaseConnectionStatus === 'connected' || 
                         await this.checkFirebaseConnection();
      
      if (isConnected && this.connectionRetryCount < this.maxRetries) {
        try {
          console.log(`🔍 Loading module ${moduleId} lessons from Firebase...`);
          
          // Set timeout for Firebase request
          const firestorePromise = LessonUploadService.getLessonsByModule(moduleId);
          const timeoutPromise = new Promise<Lesson[]>((_, reject) => 
            setTimeout(() => reject(new Error('Firebase timeout')), 10000)
          );
          
          const firestoreLessons = await Promise.race([firestorePromise, timeoutPromise]);
          
          if (firestoreLessons.length > 0) {
            console.log(`✅ Loaded ${firestoreLessons.length} lessons for module ${moduleId} from Firebase`);
            
            // Cache individual lessons and module
            firestoreLessons.forEach(lesson => {
              lessonCache.set(lesson.id, lesson);
            });
            moduleCache.set(moduleId, firestoreLessons);
            
            this.firebaseConnectionStatus = 'connected';
            return firestoreLessons;
          }
        } catch (firebaseError) {
          console.warn(`⚠️ Firebase module fetch failed for ${moduleId}:`, firebaseError);
          this.connectionRetryCount++;
          this.firebaseConnectionStatus = 'disconnected';
        }
      }
      
      // ⚡ EXTERNAL LOADING: Generate lesson list for external API loading
      console.log(`🌐 Generating lesson list for module ${moduleId}...`);
      
      // Get available lesson IDs for this module from external loader
      const allAvailableLessons = externalLessonLoader.getAvailableLessons();
      const moduleLessonIds = allAvailableLessons.filter(lessonId => 
        lessonId.startsWith(moduleId + '-lesson-')
      );
      
      if (moduleLessonIds.length > 0) {
        console.log(`✅ Found ${moduleLessonIds.length} lessons for module ${moduleId}`);
        
        // Create lightweight lesson metadata (don't load full content yet)
        const moduleLessons: Lesson[] = [];
        for (let i = 0; i < moduleLessonIds.length; i++) {
          const lessonId = moduleLessonIds[i];
          const lessonNumber = parseInt(lessonId.match(/lesson-(\d+)$/)?.[1] || '0');
          
          // Create minimal lesson metadata
          const lessonMetadata: Lesson = {
            id: lessonId,
            moduleId: moduleId,
            title: `ECG Lesson ${lessonNumber}`,
            description: `Comprehensive ECG training lesson ${lessonNumber}`,
            order: lessonNumber,
            estimatedTime: 30,
            content: {
              type: 'mixed',
              introduction: '',
              sections: [],
              slides: [],
              summary: '',
              keyPoints: [],
              resources: []
            },
            tasks: [],
            completed: false,
            attempts: 0,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          };
          
          moduleLessons.push(lessonMetadata);
        }
        
        // Sort by lesson order
        moduleLessons.sort((a, b) => a.order - b.order);
        
        // Cache the lesson metadata (not full content)
        moduleCache.set(moduleId, moduleLessons);
        
        return moduleLessons;
      }
      
      console.error(`❌ No lessons found for module ${moduleId}`);
      return [];
      
    } catch (error) {
      console.error(`❌ Critical error loading lessons for module ${moduleId}:`, error);
      
      // Emergency fallback to cached data
      if (moduleCache.has(moduleId)) {
        console.log(`🚨 Using cached data for module ${moduleId}`);
        return moduleCache.get(moduleId)!;
      }
      
      // ⚡ DYNAMIC IMPORTS: Final fallback - return empty array
      console.warn(`🚨 No lessons available for module ${moduleId} - all sources exhausted`);
      return [];
    }
  }
  
  /**
   * Preload critical lessons for better performance
   */
  static async preloadCriticalLessons(): Promise<void> {
    const criticalModules = ['module-1', 'module-2', 'module-3'];
    
    console.log('🚀 Preloading critical lessons...');
    
    // First ensure Firebase connection is checked
    await this.checkFirebaseConnection();
    
    for (const moduleId of criticalModules) {
      try {
        const lessons = await this.getLessonsByModule(moduleId);
        console.log(`✅ Preloaded ${lessons.length} lessons for ${moduleId}`);
        
        // Preload first lesson of each module individually
        if (lessons.length > 0) {
          const firstLesson = lessons[0];
          await this.getLesson(firstLesson.id);
        }
        
      } catch (error) {
        console.error(`❌ Failed to preload lessons for ${moduleId}:`, error);
      }
    }
    
    console.log('🎉 Critical lesson preloading completed');
  }
  
  /**
   * Force refresh lessons from Firebase (bypass cache)
   */
  static async refreshLessonsFromFirebase(moduleId?: string): Promise<void> {
    console.log('🔄 Forcing refresh from Firebase...');
    
    // Clear relevant cache
    if (moduleId) {
      moduleCache.delete(moduleId);
      // Clear individual lesson cache for this module
      for (const [lessonId, lesson] of lessonCache.entries()) {
        if (lesson.moduleId === moduleId) {
          lessonCache.delete(lessonId);
        }
      }
    } else {
      this.clearCache();
    }
    
    // Reset connection status to force reconnection
    this.firebaseConnectionStatus = 'checking';
    this.connectionRetryCount = 0;
    
    // If specific module, preload it
    if (moduleId) {
      await this.getLessonsByModule(moduleId);
    } else {
      await this.preloadCriticalLessons();
    }
  }
  
  /**
   * Get connection status and statistics
   */
  static getConnectionStatus(): {
    firebaseStatus: 'connected' | 'disconnected' | 'checking';
    retryCount: number;
    cachedLessons: number;
    cachedModules: number;
    offlinePersistenceEnabled: boolean;
  } {
    return {
      firebaseStatus: this.firebaseConnectionStatus,
      retryCount: this.connectionRetryCount,
      cachedLessons: lessonCache.size,
      cachedModules: moduleCache.size,
      offlinePersistenceEnabled: this.isOfflinePersistenceEnabled
    };
  }
  
  /**
   * Initialize the service (call this on app startup)
   */
  static async initialize(): Promise<void> {
    console.log('🔧 Initializing Enhanced Lesson Service...');
    
    try {
      // Enable offline persistence first
      await this.enableOfflinePersistence();
      
      // Check Firebase connection
      await this.checkFirebaseConnection();
      
      // Preload critical lessons in background
      this.preloadCriticalLessons().catch(error => {
        console.warn('⚠️ Background preloading failed:', error);
      });
      
      console.log('✅ Enhanced Lesson Service initialized');
    } catch (error) {
      console.error('❌ Failed to initialize Enhanced Lesson Service:', error);
    }
  }
  
  /**
   * Clear lesson cache (useful for refreshing data)
   */
  static clearCache(): void {
    lessonCache.clear();
    moduleCache.clear();
    console.log('🗑️ Lesson cache cleared');
  }
  
  /**
   * Get cache statistics
   */
  static getCacheStats(): {
    cachedLessons: number;
    cachedModules: number;
    totalCacheSize: number;
  } {
    return {
      cachedLessons: lessonCache.size,
      cachedModules: moduleCache.size,
      totalCacheSize: lessonCache.size + moduleCache.size
    };
  }
  
  /**
   * Check if lesson exists in any source
   */
  static async lessonExists(lessonId: string): Promise<boolean> {
    // Check cache first
    if (lessonCache.has(lessonId)) {
      return true;
    }
    
    // Check Firestore
    try {
      const firestoreExists = await LessonUploadService.lessonExists(lessonId);
      if (firestoreExists) {
        return true;
      }
    } catch (error) {
      console.warn(`Warning: Error checking Firestore for lesson ${lessonId}:`, error);
    }
    
    // ⚡ EXTERNAL LOADING: Check if lesson is available for external loading
    return externalLessonLoader.isLessonAvailable(lessonId);
  }
  
  /**
   * Get lesson source information
   */
  static async getLessonSource(lessonId: string): Promise<'cache' | 'firestore' | 'external' | 'not-found'> {
    // Check cache first
    if (lessonCache.has(lessonId)) {
      return 'cache';
    }
    
    // Check Firestore
    try {
      const firestoreExists = await LessonUploadService.lessonExists(lessonId);
      if (firestoreExists) {
        return 'firestore';
      }
    } catch (error) {
      console.warn(`Warning: Error checking Firestore for lesson ${lessonId}:`, error);
    }
    
    // ⚡ EXTERNAL LOADING: Check if lesson is available for external loading
    if (externalLessonLoader.isLessonAvailable(lessonId)) {
      return 'external';
    }
    
    return 'not-found';
  }
  
  /**
   * Extract module ID from lesson ID
   */
  private static extractModuleId(lessonId: string): string {
    // Extract module-X from lesson ID like 'module-1-lesson-1'
    const match = lessonId.match(/module-(\d+)/);
    return match ? `module-${match[1]}` : 'module-1';
  }
  
  /**
   * Get all available modules
   */
  static getAvailableModules(): string[] {
    const modules = new Set<string>();
    
    // ⚡ EXTERNAL LOADING: Get modules from available external lessons
    const availableLessons = externalLessonLoader.getAvailableLessons();
    availableLessons.forEach(lessonId => {
      const moduleId = this.extractModuleId(lessonId);
      modules.add(moduleId);
    });
    
    return Array.from(modules).sort();
  }
  
  /**
   * Get lesson count by module
   */
  static getLessonCountByModule(): { [moduleId: string]: number } {
    const counts: { [moduleId: string]: number } = {};
    
    // ⚡ EXTERNAL LOADING: Count lessons from available external lessons
    const availableLessons = externalLessonLoader.getAvailableLessons();
    availableLessons.forEach(lessonId => {
      const moduleId = this.extractModuleId(lessonId);
      counts[moduleId] = (counts[moduleId] || 0) + 1;
    });
    
    return counts;
  }
}
