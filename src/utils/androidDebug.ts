// Android Debug Utilities for Progressive Loading

export class AndroidDebug {
  private static isDebugMode = false;
  private static debugLogs: string[] = [];

  /**
   * Enable debug mode (can be called from browser console)
   */
  static enableDebug() {
    this.isDebugMode = true;
    console.log('🐛 Android Debug Mode Enabled');
    // Make it accessible from browser console
    (window as any).androidDebug = AndroidDebug;
  }

  /**
   * Log with Android-specific context
   */
  static log(message: string, data?: any) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${message}`;
    
    if (this.isDebugMode) {
      console.log(`🤖 ANDROID: ${message}`, data);
    }
    
    this.debugLogs.push(logEntry);
    
    // Keep only last 100 logs
    if (this.debugLogs.length > 100) {
      this.debugLogs = this.debugLogs.slice(-100);
    }
  }

  /**
   * Get all debug logs
   */
  static getLogs(): string[] {
    return [...this.debugLogs];
  }

  /**
   * Export logs for debugging
   */
  static exportLogs(): string {
    return this.debugLogs.join('\n');
  }

  /**
   * Clear debug logs
   */
  static clearLogs() {
    this.debugLogs = [];
    console.log('🧹 Android debug logs cleared');
  }

  /**
   * Check if running in Android WebView
   */
  static isAndroidWebView(): boolean {
    const userAgent = navigator.userAgent;
    return userAgent.includes('Android') && userAgent.includes('wv');
  }

  /**
   * Get device info for debugging
   */
  static getDeviceInfo() {
    return {
      userAgent: navigator.userAgent,
      isAndroid: this.isAndroidWebView(),
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      connection: (navigator as any).connection?.effectiveType || 'unknown',
      memory: (navigator as any).deviceMemory || 'unknown'
    };
  }

  /**
   * Test Firebase connectivity
   */
  static async testFirebaseConnectivity() {
    this.log('Testing Firebase connectivity...');
    
    try {
      // Import Firebase dynamically to avoid issues
      const { db } = await import('@/firebase');
      const { collection, getDocs, limit, query } = await import('firebase/firestore');
      
      const testQuery = query(collection(db, 'lessons'), limit(1));
      const snapshot = await getDocs(testQuery);
      
      this.log(`Firebase test successful: ${snapshot.size} documents found`);
      return true;
    } catch (error) {
      this.log('Firebase test failed', error);
      return false;
    }
  }

  /**
   * Monitor memory usage
   */
  static monitorMemory() {
    if ((performance as any).memory) {
      const memory = (performance as any).memory;
      this.log('Memory usage', {
        used: Math.round(memory.usedJSHeapSize / 1024 / 1024) + ' MB',
        total: Math.round(memory.totalJSHeapSize / 1024 / 1024) + ' MB',
        limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024) + ' MB'
      });
    }
  }
}

// Auto-enable debug mode in development
if (import.meta.env.DEV) {
  AndroidDebug.enableDebug();
}

// Make it available globally for debugging
(window as any).AndroidDebug = AndroidDebug;