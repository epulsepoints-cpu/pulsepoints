/**
 * 🔧 ANDROID LESSON DEBUG UTILITY
 * Special debugging tools for Android lesson freezing issues
 */

export class AndroidLessonDebugger {
  private static isAndroid = /android/i.test(navigator.userAgent);
  private static debugLogs: string[] = [];
  private static maxLogs = 100;

  /**
   * Initialize Android-specific debugging
   */
  static init() {
    if (!this.isAndroid) return;

    console.log('🔧 ANDROID DEBUG: Initializing lesson debugging...');
    
    // Monitor for lesson freezing patterns
    this.monitorLessonLoading();
    this.monitorMemoryUsage();
    this.setupErrorRecovery();
    
    // Report debug info
    this.reportSystemInfo();
  }

  /**
   * Log lesson-specific debug info
   */
  static logLesson(message: string, data?: any) {
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = `[${timestamp}] 📚 LESSON: ${message}`;
    
    console.log(logEntry, data || '');
    this.addToDebugLog(logEntry + (data ? ` | Data: ${JSON.stringify(data)}` : ''));
  }

  /**
   * Monitor lesson loading patterns
   */
  private static monitorLessonLoading() {
    let lessonLoadStart: number | null = null;
    let loadingTimeouts: number[] = [];

    // Hook into lesson loading
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      const url = args[0]?.toString() || '';
      
      if (url.includes('lesson') || url.includes('firebase')) {
        lessonLoadStart = Date.now();
        this.logLesson('Fetch started', { url });
        
        // Set timeout to detect hanging requests
        const timeout = window.setTimeout(() => {
          this.logLesson('POTENTIAL HANG DETECTED', { 
            url, 
            duration: Date.now() - (lessonLoadStart || 0) 
          });
        }, 10000); // 10 second timeout
        
        loadingTimeouts.push(timeout);
      }
      
      try {
        const response = await originalFetch(...args);
        
        if (url.includes('lesson') || url.includes('firebase')) {
          const duration = Date.now() - (lessonLoadStart || 0);
          this.logLesson('Fetch completed', { url, duration, status: response.status });
          
          // Clear timeouts
          loadingTimeouts.forEach(timeout => window.clearTimeout(timeout));
          loadingTimeouts = [];
        }
        
        return response;
      } catch (error) {
        if (url.includes('lesson') || url.includes('firebase')) {
          this.logLesson('Fetch failed', { url, error: error.message });
        }
        throw error;
      }
    };
  }

  /**
   * Monitor memory usage
   */
  private static monitorMemoryUsage() {
    if (!(performance as any).memory) return;

    setInterval(() => {
      const memory = (performance as any).memory;
      const usage = {
        used: Math.round(memory.usedJSHeapSize / 1024 / 1024),
        limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024)
      };
      
      if (usage.used > usage.limit * 0.8) {
        this.logLesson('HIGH MEMORY USAGE WARNING', usage);
      }
    }, 30000); // Check every 30 seconds
  }

  /**
   * Setup error recovery
   */
  private static setupErrorRecovery() {
    window.addEventListener('error', (event) => {
      this.logLesson('GLOBAL ERROR', {
        message: event.message,
        filename: event.filename,
        line: event.lineno,
        column: event.colno
      });
    });

    window.addEventListener('unhandledrejection', (event) => {
      this.logLesson('UNHANDLED PROMISE REJECTION', {
        reason: event.reason?.toString() || 'Unknown'
      });
    });
  }

  /**
   * Report system information
   */
  private static reportSystemInfo() {
    const info = {
      userAgent: navigator.userAgent,
      language: navigator.language,
      platform: navigator.platform,
      memory: (performance as any).memory ? {
        limit: Math.round((performance as any).memory.jsHeapSizeLimit / 1024 / 1024) + 'MB'
      } : 'Not available',
      connection: (navigator as any).connection ? {
        effectiveType: (navigator as any).connection.effectiveType,
        downlink: (navigator as any).connection.downlink
      } : 'Not available'
    };
    
    this.logLesson('SYSTEM INFO', info);
  }

  /**
   * Add to debug log
   */
  private static addToDebugLog(entry: string) {
    this.debugLogs.push(entry);
    if (this.debugLogs.length > this.maxLogs) {
      this.debugLogs.shift();
    }
  }

  /**
   * Get debug report
   */
  static getDebugReport(): string {
    return this.debugLogs.join('\n');
  }

  /**
   * Clear debug logs
   */
  static clearLogs() {
    this.debugLogs = [];
  }

  /**
   * Export debug data
   */
  static exportDebugData() {
    const data = {
      timestamp: new Date().toISOString(),
      isAndroid: this.isAndroid,
      logs: this.debugLogs,
      systemInfo: {
        userAgent: navigator.userAgent,
        memory: (performance as any).memory ? {
          used: Math.round((performance as any).memory.usedJSHeapSize / 1024 / 1024),
          limit: Math.round((performance as any).memory.jsHeapSizeLimit / 1024 / 1024)
        } : null
      }
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `android-lesson-debug-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }
}

// Initialize on Android devices
if (typeof window !== 'undefined' && /android/i.test(navigator.userAgent)) {
  AndroidLessonDebugger.init();
}