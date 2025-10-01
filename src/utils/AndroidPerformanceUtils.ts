/**
 * 🤖 ANDROID UI PERFORMANCE UTILITIES
 * Prevents UI freezing during dynamic lesson loading
 */

/**
 * Android-safe async execution that prevents UI blocking
 */
export function androidSafeAsync<T>(
  operation: () => Promise<T>,
  options: {
    timeout?: number;
    onProgress?: (message: string) => void;
    chunkSize?: number;
  } = {}
): Promise<T> {
  const { timeout = 100, onProgress, chunkSize = 1 } = options;
  
  return new Promise((resolve, reject) => {
    const scheduleWork = (callback: () => void) => {
      if (typeof requestIdleCallback !== 'undefined') {
        requestIdleCallback(callback, { timeout });
      } else {
        setTimeout(callback, 0);
      }
    };

    scheduleWork(async () => {
      try {
        onProgress?.('Starting operation...');
        const result = await operation();
        onProgress?.('Operation completed');
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  });
}

/**
 * Break large operations into chunks for Android WebView
 */
export async function processInChunks<T, R>(
  items: T[],
  processor: (item: T, index: number) => Promise<R>,
  chunkSize: number = 5
): Promise<R[]> {
  const results: R[] = [];
  
  for (let i = 0; i < items.length; i += chunkSize) {
    const chunk = items.slice(i, i + chunkSize);
    
    // Process chunk
    const chunkResults = await Promise.all(
      chunk.map((item, index) => processor(item, i + index))
    );
    
    results.push(...chunkResults);
    
    // Yield control back to UI thread between chunks
    await new Promise(resolve => {
      if (typeof requestIdleCallback !== 'undefined') {
        requestIdleCallback(() => resolve(void 0), { timeout: 50 });
      } else {
        setTimeout(() => resolve(void 0), 0);
      }
    });
  }
  
  return results;
}

/**
 * Detect if running in Android WebView
 */
export function isAndroidWebView(): boolean {
  if (typeof window === 'undefined') return false;
  
  const userAgent = window.navigator.userAgent.toLowerCase();
  return userAgent.includes('android') && (
    userAgent.includes('wv') || 
    userAgent.includes('ecgkidapp') ||
    userAgent.includes('version/')
  );
}

/**
 * Android-optimized state updates that prevent UI blocking
 */
export function androidSafeStateUpdate<T>(
  setState: (newState: T) => void,
  newState: T,
  delay: number = 0
): void {
  const scheduleUpdate = () => {
    if (typeof requestIdleCallback !== 'undefined') {
      requestIdleCallback(() => setState(newState), { timeout: 50 });
    } else {
      setTimeout(() => setState(newState), delay);
    }
  };

  if (isAndroidWebView()) {
    scheduleUpdate();
  } else {
    setState(newState);
  }
}

/**
 * Preload resources for smoother Android performance
 */
export class AndroidResourcePreloader {
  private preloadedModules = new Map<string, any>();
  private isPreloading = false;

  async preloadLessons(lessonIds: string[]): Promise<void> {
    if (this.isPreloading) return;
    
    this.isPreloading = true;
    console.log('🔄 Preloading lessons for Android performance:', lessonIds.length);

    try {
      await processInChunks(
        lessonIds,
        async (lessonId) => {
          try {
            // Simulate lesson import structure
            const modulePath = this.getLessonModulePath(lessonId);
            if (modulePath && !this.preloadedModules.has(lessonId)) {
              console.log(`📦 Preloading: ${lessonId}`);
              // Note: Actual preloading would be done by the lesson loader
              this.preloadedModules.set(lessonId, { preloaded: true, timestamp: Date.now() });
            }
          } catch (error) {
            console.warn(`⚠️ Failed to preload ${lessonId}:`, error);
          }
        },
        3 // Small chunks for Android
      );
    } finally {
      this.isPreloading = false;
    }
  }

  private getLessonModulePath(lessonId: string): string | null {
    // Extract lesson number for module path
    const match = lessonId.match(/lesson-(\d+)/);
    if (!match) return null;
    
    const lessonNum = match[1];
    return `@/data/optimized-lesson-${lessonNum}`;
  }

  isPreloaded(lessonId: string): boolean {
    return this.preloadedModules.has(lessonId);
  }

  clearExpiredPreloads(): void {
    const now = Date.now();
    const expiry = 30 * 60 * 1000; // 30 minutes
    
    for (const [lessonId, data] of this.preloadedModules.entries()) {
      if (now - data.timestamp > expiry) {
        this.preloadedModules.delete(lessonId);
      }
    }
  }
}

export const androidResourcePreloader = new AndroidResourcePreloader();