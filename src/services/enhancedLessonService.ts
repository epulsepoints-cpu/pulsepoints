import { LessonUploadService } from './lessonUploadService';
import { Lesson } from '@/types/learning';
import { enableIndexedDbPersistence } from 'firebase/firestore';
import { db } from '../firebase';

// Import local lessons as fallback
import { optimizedLesson1 } from '../data/optimized-lesson-1';
import { optimizedLesson2 } from '../data/optimized-lesson-2';
import { optimizedLesson3 } from '../data/optimized-lesson-3';
import { optimizedLesson4 } from '../data/optimized-lesson-4';
import { optimizedLesson5 } from '../data/optimized-lesson-5';
import { optimizedLesson6 } from '../data/optimized-lesson-6';
import { optimizedLesson7 } from '../data/optimized-lesson-7';
import { optimizedLesson8 } from '../data/optimized-lesson-8';
import { optimizedLesson9 } from '../data/optimized-lesson-9';
import { optimizedLesson10 } from '../data/optimized-lesson-10';
import { optimizedLesson11 } from '../data/optimized-lesson-11';
import { optimizedLesson12 } from '../data/optimized-lesson-12';
import { optimizedLesson13 } from '../data/optimized-lesson-13';
import { optimizedLesson14 } from '../data/optimized-lesson-14';
import { optimizedLesson15 } from '../data/optimized-lesson-15';
import { optimizedLesson16 } from '../data/optimized-lesson-16';
import { optimizedLesson17 } from '../data/optimized-lesson-17';
import { optimizedLesson18 } from '../data/optimized-lesson-18';
import { optimizedLesson19 } from '../data/optimized-lesson-19';
import { optimizedLesson20 } from '../data/optimized-lesson-20';
import { optimizedLesson21 } from '../data/optimized-lesson-21';
import { optimizedLesson22 } from '../data/optimized-lesson-22';
import { optimizedLesson23 } from '../data/optimized-lesson-23';
import { optimizedLesson24 } from '../data/optimized-lesson-24';
import { optimizedLesson25 } from '../data/optimized-lesson-25';
import { optimizedLesson26Comprehensive } from '../data/optimized-lesson-26';
import { optimizedLesson27Comprehensive } from '../data/optimized-lesson-27';
import { optimizedLesson28 } from '../data/optimized-lesson-28';
import { optimizedLesson29 } from '../data/optimized-lesson-29';
import { optimizedLesson30 } from '../data/optimized-lesson-30';
import { optimizedLesson31 } from '../data/optimized-lesson-31-6unit';
import { optimizedLesson32 } from '../data/optimized-lesson-32';
import { optimizedLesson33 } from '../data/optimized-lesson-33';
import { optimizedLesson34 } from '../data/optimized-lesson-34';
import { optimizedLesson35 } from '../data/optimized-lesson-35';
import { optimizedLesson36 } from '../data/optimized-lesson-36';
import { optimizedLesson37 } from '../data/optimized-lesson-37';
import { optimizedLesson38 } from '../data/optimized-lesson-38';
import { optimizedLesson39 } from '../data/optimized-lesson-39';
import { optimizedLesson40 } from '../data/optimized-lesson-40';
import { optimizedLesson41 } from '../data/optimized-lesson-41';
import { optimizedLesson42 } from '../data/optimized-lesson-42';
import { optimizedLesson43 } from '../data/optimized-lesson-43';
import { optimizedLesson44 } from '../data/optimized-lesson-44';
import { optimizedLesson45 } from '../data/optimized-lesson-45';
import { optimizedLesson46 } from '../data/optimized-lesson-46';
import { optimizedLesson47 } from '../data/optimized-lesson-47';
import { optimizedLesson48 } from '../data/optimized-lesson-48';
import { optimizedLesson49 } from '../data/optimized-lesson-49';
import { optimizedLesson50 } from '../data/optimized-lesson-50';
import { optimizedLesson51 } from '../data/optimized-lesson-51';
import { optimizedLesson52 } from '../data/optimized-lesson-52';
import { optimizedLesson53 } from '../data/optimized-lesson-53';
import { optimizedLesson54 } from '../data/optimized-lesson-54';
import { optimizedLesson55 } from '../data/optimized-lesson-55';
import { optimizedLesson56 } from '../data/optimized-lesson-56';
import { optimizedLesson57 } from '../data/optimized-lesson-57';
import { optimizedLesson58 } from '../data/optimized-lesson-58';
import { optimizedLesson59 } from '../data/optimized-lesson-59';
import { optimizedLesson60 } from '../data/optimized-lesson-60';
import { optimizedLesson61 } from '../data/optimized-lesson-61';
import { optimizedLesson62 } from '../data/optimized-lesson-62';
import { optimizedLesson63 } from '../data/optimized-lesson-63';
import { optimizedLesson64 } from '../data/optimized-lesson-64';
import { optimizedLesson65 } from '../data/optimized-lesson-65';
import { optimizedLesson66 } from '../data/optimized-lesson-66';
import { optimizedLesson67 } from '../data/optimized-lesson-67';
import { optimizedLesson68 } from '../data/optimized-lesson-68';
import { optimizedLesson69 } from '../data/optimized-lesson-69-6unit';
import { optimizedLesson70 } from '../data/optimized-lesson-70-6unit';
import { optimizedLesson71 } from '../data/optimized-lesson-71-6unit';
import { optimizedLesson72 } from '../data/optimized-lesson-72-6unit';
import { optimizedLesson73 } from '../data/optimized-lesson-73';
import { optimizedLesson74 } from '../data/optimized-lesson-74';
import { optimizedLesson75 } from '../data/optimized-lesson-75';
import { optimizedLesson76 } from '../data/optimized-lesson-76-6unit';

const LOCAL_LESSONS: { [key: string]: Lesson } = {
  'module-1-lesson-1': optimizedLesson1,
  'module-1-lesson-2': optimizedLesson2,
  'module-1-lesson-3': optimizedLesson3,
  'module-1-lesson-4': optimizedLesson4,
  'module-1-lesson-5': optimizedLesson5,
  'module-1-lesson-6': optimizedLesson6,
  'module-1-lesson-7': optimizedLesson7,
  'module-1-lesson-8': optimizedLesson8,
  'module-1-lesson-9': optimizedLesson9,
  'module-1-lesson-10': optimizedLesson10,
  'module-1-lesson-11': optimizedLesson11,
  'module-1-lesson-12': optimizedLesson12,
  'module-1-lesson-13': optimizedLesson13,
  'module-2-lesson-14': optimizedLesson14,
  'module-2-lesson-15': optimizedLesson15,
  'module-2-lesson-16': optimizedLesson16,
  'module-2-lesson-17': optimizedLesson17,
  'module-2-lesson-18': optimizedLesson18,
  'module-2-lesson-19': optimizedLesson19,
  'module-2-lesson-20': optimizedLesson20,
  'module-3-lesson-21': optimizedLesson21,
  'module-3-lesson-22': optimizedLesson22,
  'module-3-lesson-23': optimizedLesson23,
  'module-3-lesson-24': optimizedLesson24,
  'module-3-lesson-25': optimizedLesson25,
  'module-3-lesson-26': optimizedLesson26Comprehensive,
  'module-3-lesson-27': optimizedLesson27Comprehensive,
  'module-3-lesson-28': optimizedLesson28,
  'module-3-lesson-29': optimizedLesson29,
  'module-4-lesson-30': optimizedLesson30,
  'module-4-lesson-31': optimizedLesson31,
  'module-4-lesson-32': optimizedLesson32,
  'module-4-lesson-33': optimizedLesson33,
  'module-4-lesson-34': optimizedLesson34,
  'module-4-lesson-35': optimizedLesson35,
  'module-4-lesson-36': optimizedLesson36,
  'module-4-lesson-37': optimizedLesson37,
  'module-4-lesson-38': optimizedLesson38,
  'module-5-lesson-39': optimizedLesson39,
  'module-5-lesson-40': optimizedLesson40,
  'module-5-lesson-41': optimizedLesson41,
  'module-5-lesson-42': optimizedLesson42,
  'module-5-lesson-43': optimizedLesson43,
  'module-5-lesson-44': optimizedLesson44,
  'module-6-lesson-46': optimizedLesson46,
  'module-6-lesson-47': optimizedLesson47,
  'module-6-lesson-48': optimizedLesson48,
  'module-6-lesson-49': optimizedLesson49,
  'module-6-lesson-50': optimizedLesson50,
  'module-6-lesson-51': optimizedLesson51,
  'module-6-lesson-52': optimizedLesson52,
  'module-7-lesson-53': optimizedLesson53,
  'module-7-lesson-54': optimizedLesson54,
  'module-7-lesson-55': optimizedLesson55,
  'module-7-lesson-56': optimizedLesson56,
  'module-7-lesson-57': optimizedLesson57,
  'module-7-lesson-58': optimizedLesson58,
  'module-8-lesson-59': optimizedLesson59,
  'module-8-lesson-60': optimizedLesson60,
  'module-8-lesson-61': optimizedLesson61,
  'module-8-lesson-62': optimizedLesson62,
  'module-8-lesson-63': optimizedLesson63,
  'module-8-lesson-64': optimizedLesson64,
  'module-8-lesson-65': optimizedLesson65,
  'module-8-lesson-66': optimizedLesson66,
  'module-8-lesson-67': optimizedLesson67,
  'module-8-lesson-68': optimizedLesson68,
  'module-9-lesson-69': optimizedLesson69,
  'module-9-lesson-70': optimizedLesson70,
  'module-9-lesson-71': optimizedLesson71,
  'module-9-lesson-72': optimizedLesson72,
  'module-9-lesson-73': optimizedLesson73,
  'module-9-lesson-74': optimizedLesson74,
  'module-9-lesson-75': optimizedLesson75,
  'module-9-lesson-76': optimizedLesson76,
  'module-10-lesson-45': optimizedLesson45, // Lesson 45 is actually in module 10
};

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
      
      // Immediate fallback to local lesson
      console.log(`📁 Using local lesson ${lessonId}...`);
      const localLesson = LOCAL_LESSONS[lessonId];
      
      if (localLesson) {
        console.log(`✅ Loaded lesson ${lessonId} from local files`);
        // Cache local lesson for consistency
        lessonCache.set(lessonId, localLesson);
        return localLesson;
      }
      
      console.error(`❌ Lesson ${lessonId} not found in Firebase or locally`);
      return null;
      
    } catch (error) {
      console.error(`❌ Critical error loading lesson ${lessonId}:`, error);
      
      // Emergency fallback to local
      const localLesson = LOCAL_LESSONS[lessonId];
      if (localLesson) {
        console.log(`🚨 Emergency fallback: loaded ${lessonId} locally`);
        lessonCache.set(lessonId, localLesson);
        return localLesson;
      }
      
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
      
      // Immediate fallback to local lessons
      console.log(`📁 Using local lessons for module ${moduleId}...`);
      const localLessons = Object.values(LOCAL_LESSONS)
        .filter(lesson => lesson.moduleId === moduleId)
        .sort((a, b) => a.order - b.order);
      
      if (localLessons.length > 0) {
        console.log(`✅ Loaded ${localLessons.length} lessons for module ${moduleId} from local files`);
        
        // Cache local lessons
        localLessons.forEach(lesson => {
          lessonCache.set(lesson.id, lesson);
        });
        moduleCache.set(moduleId, localLessons);
        
        return localLessons;
      }
      
      console.error(`❌ No lessons found for module ${moduleId}`);
      return [];
      
    } catch (error) {
      console.error(`❌ Critical error loading lessons for module ${moduleId}:`, error);
      
      // Emergency fallback to cached data or local lessons
      if (moduleCache.has(moduleId)) {
        console.log(`🚨 Using cached data for module ${moduleId}`);
        return moduleCache.get(moduleId)!;
      }
      
      // Final fallback to local lessons
      const localLessons = Object.values(LOCAL_LESSONS)
        .filter(lesson => lesson.moduleId === moduleId)
        .sort((a, b) => a.order - b.order);
      
      if (localLessons.length > 0) {
        console.log(`🚨 Emergency fallback: using local lessons for module ${moduleId}`);
        return localLessons;
      }
      
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
    
    // Check local lessons
    return LOCAL_LESSONS.hasOwnProperty(lessonId);
  }
  
  /**
   * Get lesson source information
   */
  static async getLessonSource(lessonId: string): Promise<'cache' | 'firestore' | 'local' | 'not-found'> {
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
    
    // Check local lessons
    if (LOCAL_LESSONS.hasOwnProperty(lessonId)) {
      return 'local';
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
    
    // Get modules from local lessons
    Object.values(LOCAL_LESSONS).forEach(lesson => {
      modules.add(lesson.moduleId);
    });
    
    return Array.from(modules).sort();
  }
  
  /**
   * Get lesson count by module
   */
  static getLessonCountByModule(): { [moduleId: string]: number } {
    const counts: { [moduleId: string]: number } = {};
    
    Object.values(LOCAL_LESSONS).forEach(lesson => {
      counts[lesson.moduleId] = (counts[lesson.moduleId] || 0) + 1;
    });
    
    return counts;
  }
}
