// Performance Monitor for Android Optimization
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Monitor, 
  Cpu, 
  MemoryStick, 
  Zap, 
  Clock,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';

interface PerformanceMetrics {
  memoryUsage: number;
  renderTime: number;
  bundleSize: number;
  lazyLoadsCount: number;
  cacheHits: number;
  cacheMisses: number;
  errorCount: number;
}

interface PerformanceMonitorProps {
  isVisible: boolean;
  onToggle: () => void;
}

export function PerformanceMonitor({ isVisible, onToggle }: PerformanceMonitorProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    memoryUsage: 0,
    renderTime: 0,
    bundleSize: 0,
    lazyLoadsCount: 0,
    cacheHits: 0,
    cacheMisses: 0,
    errorCount: 0
  });

  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const updateMetrics = () => {
      // Get performance data
      const performance = window.performance;
      const memory = (performance as any).memory;
      
      const newMetrics: PerformanceMetrics = {
        memoryUsage: memory ? Math.round(memory.usedJSHeapSize / 1024 / 1024) : 0,
        renderTime: Math.round(performance.now()),
        bundleSize: Math.round((performance.getEntriesByType('navigation')[0] as any)?.transferSize / 1024 || 0),
        lazyLoadsCount: parseInt(localStorage.getItem('lazy-loads-count') || '0'),
        cacheHits: parseInt(localStorage.getItem('cache-hits') || '0'),
        cacheMisses: parseInt(localStorage.getItem('cache-misses') || '0'),
        errorCount: parseInt(localStorage.getItem('error-count') || '0')
      };

      setMetrics(newMetrics);
      
      // Determine if app is optimized based on metrics
      const optimized = newMetrics.memoryUsage < 100 && // Less than 100MB
                       newMetrics.cacheHits > newMetrics.cacheMisses &&
                       newMetrics.errorCount < 5;
      setIsOptimized(optimized);
    };

    // Update immediately
    updateMetrics();
    
    // Update every 2 seconds
    const interval = setInterval(updateMetrics, 2000);
    
    return () => clearInterval(interval);
  }, [isVisible]);

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={onToggle}
          className="bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <Monitor className="h-5 w-5" />
        </button>
      </div>
    );
  }

  const getStatusColor = (value: number, threshold: number, reverse = false) => {
    const isGood = reverse ? value < threshold : value > threshold;
    return isGood ? 'text-green-600' : 'text-red-600';
  };

  const getStatusIcon = (value: number, threshold: number, reverse = false) => {
    const isGood = reverse ? value < threshold : value > threshold;
    return isGood ? <TrendingUp className="h-4 w-4 text-green-600" /> : <TrendingDown className="h-4 w-4 text-red-600" />;
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 w-80">
      <Card className="shadow-lg">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-sm flex items-center gap-2">
              <Monitor className="h-4 w-4" />
              Performance Monitor
            </CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant={isOptimized ? 'default' : 'destructive'}>
                {isOptimized ? (
                  <CheckCircle className="h-3 w-3 mr-1" />
                ) : (
                  <AlertTriangle className="h-3 w-3 mr-1" />
                )}
                {isOptimized ? 'Optimized' : 'Needs Optimization'}
              </Badge>
              <button
                onClick={onToggle}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          {/* Memory Usage */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MemoryStick className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium">Memory Usage</span>
              </div>
              <div className="flex items-center gap-1">
                <span className={`text-sm font-medium ${getStatusColor(metrics.memoryUsage, 100, true)}`}>
                  {metrics.memoryUsage} MB
                </span>
                {getStatusIcon(metrics.memoryUsage, 100, true)}
              </div>
            </div>
            <Progress 
              value={Math.min((metrics.memoryUsage / 200) * 100, 100)} 
              className="h-2"
            />
          </div>

          {/* Bundle Size */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Cpu className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium">Bundle Size</span>
              </div>
              <span className={`text-sm font-medium ${getStatusColor(metrics.bundleSize, 5000, true)}`}>
                {metrics.bundleSize} KB
              </span>
            </div>
            <Progress 
              value={Math.min((metrics.bundleSize / 10000) * 100, 100)} 
              className="h-2"
            />
          </div>

          {/* Lazy Loading Stats */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-yellow-600" />
                <span className="text-sm font-medium">Lazy Loads</span>
              </div>
              <span className="text-sm font-medium text-blue-600">
                {metrics.lazyLoadsCount}
              </span>
            </div>
          </div>

          {/* Cache Performance */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium">Cache Hit Rate</span>
              </div>
              <span className="text-sm font-medium text-green-600">
                {metrics.cacheHits + metrics.cacheMisses > 0 
                  ? Math.round((metrics.cacheHits / (metrics.cacheHits + metrics.cacheMisses)) * 100)
                  : 0}%
              </span>
            </div>
            <div className="flex justify-between text-xs text-gray-600">
              <span>Hits: {metrics.cacheHits}</span>
              <span>Misses: {metrics.cacheMisses}</span>
            </div>
          </div>

          {/* Error Count */}
          {metrics.errorCount > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-600" />
                  <span className="text-sm font-medium">Errors</span>
                </div>
                <span className="text-sm font-medium text-red-600">
                  {metrics.errorCount}
                </span>
              </div>
            </div>
          )}

          {/* Optimization Tips */}
          {!isOptimized && (
            <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
              <h4 className="text-sm font-medium text-yellow-800 mb-2">
                Optimization Tips:
              </h4>
              <ul className="text-xs text-yellow-700 space-y-1">
                {metrics.memoryUsage > 100 && (
                  <li>• High memory usage detected - clear cache or restart app</li>
                )}
                {metrics.cacheMisses > metrics.cacheHits && (
                  <li>• Low cache hit rate - consider preloading frequently used lessons</li>
                )}
                {metrics.errorCount > 5 && (
                  <li>• Multiple errors detected - check network connection</li>
                )}
              </ul>
            </div>
          )}

          {isOptimized && (
            <div className="mt-4 p-3 bg-green-50 rounded-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-800">
                  App is running optimally!
                </span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

// Hook to track performance metrics
export function usePerformanceTracking() {
  useEffect(() => {
    // Track lazy loads
    const incrementLazyLoads = () => {
      const current = parseInt(localStorage.getItem('lazy-loads-count') || '0');
      localStorage.setItem('lazy-loads-count', (current + 1).toString());
    };

    // Track cache hits/misses
    const trackCacheHit = () => {
      const current = parseInt(localStorage.getItem('cache-hits') || '0');
      localStorage.setItem('cache-hits', (current + 1).toString());
    };

    const trackCacheMiss = () => {
      const current = parseInt(localStorage.getItem('cache-misses') || '0');
      localStorage.setItem('cache-misses', (current + 1).toString());
    };

    // Track errors
    const trackError = () => {
      const current = parseInt(localStorage.getItem('error-count') || '0');
      localStorage.setItem('error-count', (current + 1).toString());
    };

    // Listen for custom events
    window.addEventListener('lazy-load', incrementLazyLoads);
    window.addEventListener('cache-hit', trackCacheHit);
    window.addEventListener('cache-miss', trackCacheMiss);
    window.addEventListener('app-error', trackError);

    return () => {
      window.removeEventListener('lazy-load', incrementLazyLoads);
      window.removeEventListener('cache-hit', trackCacheHit);
      window.removeEventListener('cache-miss', trackCacheMiss);
      window.removeEventListener('app-error', trackError);
    };
  }, []);

  const clearMetrics = () => {
    localStorage.removeItem('lazy-loads-count');
    localStorage.removeItem('cache-hits');
    localStorage.removeItem('cache-misses');
    localStorage.removeItem('error-count');
  };

  return { clearMetrics };
}