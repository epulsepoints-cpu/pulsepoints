/**
 * 🚨 ANDROID UI FREEZE RECOVERY UTILITY
 * Prevents and recovers from Android WebView UI freezes
 */

interface AndroidRecoveryOptions {
  maxRetries?: number;
  retryDelay?: number;
  fallbackAction?: () => void;
}

class AndroidRecoveryManager {
  private static instance: AndroidRecoveryManager;
  private isAndroid: boolean;
  private pendingOperations: Set<string> = new Set();
  private freezeDetectionTimer: number | null = null;
  
  static getInstance(): AndroidRecoveryManager {
    if (!AndroidRecoveryManager.instance) {
      AndroidRecoveryManager.instance = new AndroidRecoveryManager();
    }
    return AndroidRecoveryManager.instance;
  }
  
  constructor() {
    this.isAndroid = typeof window !== 'undefined' && 
      (window.navigator.userAgent.includes('Android') || 
       window.navigator.userAgent.includes('wv')); // WebView detection
    
    if (this.isAndroid) {
      this.setupFreezeDetection();
    }
  }
  
  /**
   * Wraps async operations to prevent UI freezes
   */
  async safeAsyncOperation<T>(
    operation: () => Promise<T>,
    operationId: string,
    options: AndroidRecoveryOptions = {}
  ): Promise<T> {
    const { maxRetries = 3, retryDelay = 1000, fallbackAction } = options;
    
    if (!this.isAndroid) {
      return operation(); // No Android optimizations needed
    }
    
    this.pendingOperations.add(operationId);
    
    try {
      // Add artificial delay for Android WebView performance
      await new Promise(resolve => setTimeout(resolve, 50));
      
      let lastError: Error | null = null;
      
      for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
          console.log(`🤖 Android Safe Operation: ${operationId} (attempt ${attempt}/${maxRetries})`);
          
          const result = await Promise.race([
            operation(),
            new Promise<never>((_, reject) => 
              setTimeout(() => reject(new Error('Operation timeout')), 10000)
            )
          ]);
          
          this.pendingOperations.delete(operationId);
          console.log(`✅ Android Safe Operation: ${operationId} completed successfully`);
          return result;
          
        } catch (error) {
          lastError = error as Error;
          console.warn(`⚠️ Android Safe Operation: ${operationId} failed (attempt ${attempt}):`, error);
          
          if (attempt < maxRetries) {
            // Progressive delay with jitter
            const delay = retryDelay * attempt + Math.random() * 500;
            await new Promise(resolve => setTimeout(resolve, delay));
            
            // Force garbage collection if available
            if ('gc' in window && typeof (window as any).gc === 'function') {
              try {
                (window as any).gc();
              } catch (gcError) {
                // Ignore GC errors
              }
            }
          }
        }
      }
      
      // All retries failed
      this.pendingOperations.delete(operationId);
      console.error(`❌ Android Safe Operation: ${operationId} failed after ${maxRetries} attempts`);
      
      if (fallbackAction) {
        console.log(`🔄 Android Safe Operation: Executing fallback for ${operationId}`);
        fallbackAction();
      }
      
      throw lastError || new Error(`Operation ${operationId} failed`);
      
    } catch (error) {
      this.pendingOperations.delete(operationId);
      throw error;
    }
  }
  
  /**
   * Optimized navigation for Android
   */
  safeNavigate(navigationFn: () => void, fallback?: () => void): void {
    if (!this.isAndroid) {
      navigationFn();
      return;
    }
    
    console.log('🧭 Android Safe Navigate: Starting');
    
    // Immediate UI update
    try {
      navigationFn();
      console.log('✅ Android Safe Navigate: Completed successfully');
    } catch (error) {
      console.error('❌ Android Safe Navigate: Failed, trying fallback', error);
      
      if (fallback) {
        setTimeout(() => {
          try {
            fallback();
            console.log('✅ Android Safe Navigate: Fallback completed');
          } catch (fallbackError) {
            console.error('❌ Android Safe Navigate: Fallback also failed', fallbackError);
          }
        }, 100);
      }
    }
  }
  
  /**
   * Setup UI freeze detection
   */
  private setupFreezeDetection(): void {
    let lastHeartbeat = Date.now();
    
    const heartbeat = () => {
      lastHeartbeat = Date.now();
      this.freezeDetectionTimer = window.setTimeout(heartbeat, 1000);
    };
    
    // Check for freezes every 5 seconds
    setInterval(() => {
      const timeSinceLastHeartbeat = Date.now() - lastHeartbeat;
      
      if (timeSinceLastHeartbeat > 3000) { // 3 second freeze threshold
        console.warn('🚨 Android UI Freeze detected! Attempting recovery...');
        this.recoverFromFreeze();
      }
    }, 5000);
    
    heartbeat();
  }
  
  /**
   * Attempt to recover from UI freeze
   */
  private recoverFromFreeze(): void {
    console.log('🔄 Android Freeze Recovery: Starting recovery sequence');
    
    // Clear pending operations
    this.pendingOperations.clear();
    
    // Force repaint
    if (document.body) {
      document.body.style.transform = 'translateZ(0)';
      setTimeout(() => {
        document.body.style.transform = '';
      }, 100);
    }
    
    // Send recovery event
    window.dispatchEvent(new CustomEvent('android-recovery', {
      detail: { timestamp: Date.now() }
    }));
  }
  
  /**
   * Get current Android performance status
   */
  getPerformanceStatus(): {
    isAndroid: boolean;
    pendingOperations: number;
    memoryUsage?: number;
  } {
    return {
      isAndroid: this.isAndroid,
      pendingOperations: this.pendingOperations.size,
      memoryUsage: (performance as any).memory?.usedJSHeapSize || undefined
    };
  }
}

// Export singleton instance
export const androidRecoveryManager = AndroidRecoveryManager.getInstance();

// React hook for Android-safe operations
export const useAndroidSafeOperation = () => {
  return {
    safeAsync: androidRecoveryManager.safeAsyncOperation.bind(androidRecoveryManager),
    safeNavigate: androidRecoveryManager.safeNavigate.bind(androidRecoveryManager),
    performanceStatus: androidRecoveryManager.getPerformanceStatus()
  };
};