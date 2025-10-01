import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface PerformanceStats {
  memoryUsage: number;
  frameRate: number;
  loadTime: number;
  bundleSize: number;
  jsHeapSize: number;
}

export const AndroidPerformanceMonitor: React.FC = () => {
  const [stats, setStats] = useState<PerformanceStats>({
    memoryUsage: 0,
    frameRate: 0,
    loadTime: 0,
    bundleSize: 0,
    jsHeapSize: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateStats = () => {
      try {
        // Get memory info if available
        const memory = (performance as any).memory;
        const memoryUsage = memory ? memory.usedJSHeapSize / 1024 / 1024 : 0; // MB
        const jsHeapSize = memory ? memory.totalJSHeapSize / 1024 / 1024 : 0; // MB

        // Calculate frame rate
        let frameCount = 0;
        let lastTime = performance.now();
        const calculateFPS = () => {
          frameCount++;
          const currentTime = performance.now();
          if (currentTime >= lastTime + 1000) {
            const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
            setStats(prev => ({ ...prev, frameRate: fps }));
            frameCount = 0;
            lastTime = currentTime;
          }
          requestAnimationFrame(calculateFPS);
        };
        calculateFPS();

        // Get navigation timing
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const loadTime = navigation ? navigation.loadEventEnd - navigation.startTime : 0;

        // Estimate bundle size from resource timing
        const resources = performance.getEntriesByType('resource');
        const bundleSize = resources.reduce((total, resource) => {
          if (resource.name.includes('.js')) {
            return total + ((resource as any).transferSize || 0);
          }
          return total;
        }, 0) / 1024 / 1024; // MB

        setStats(prev => ({
          ...prev,
          memoryUsage,
          jsHeapSize,
          loadTime: loadTime / 1000, // seconds
          bundleSize
        }));
      } catch (error) {
        console.warn('Performance monitoring error:', error);
      }
    };

    updateStats();
    const interval = setInterval(updateStats, 2000);

    return () => clearInterval(interval);
  }, []);

  // Toggle visibility with triple tap
  useEffect(() => {
    let tapCount = 0;
    const handleTripleTap = () => {
      tapCount++;
      setTimeout(() => { tapCount = 0; }, 1000);
      if (tapCount === 3) {
        setIsVisible(!isVisible);
        tapCount = 0;
      }
    };

    document.addEventListener('click', handleTripleTap);
    return () => document.removeEventListener('click', handleTripleTap);
  }, [isVisible]);

  if (!isVisible) {
    return (
      <div 
        className="fixed bottom-4 right-4 w-4 h-4 bg-blue-500 rounded-full z-50 opacity-30"
        title="Triple tap to show performance monitor"
      />
    );
  }

  const getStatusColor = (value: number, thresholds: [number, number]) => {
    if (value < thresholds[0]) return 'text-green-600';
    if (value < thresholds[1]) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <Card className="fixed bottom-4 right-4 w-64 z-50 bg-black/80 text-white text-xs">
      <CardContent className="p-3">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold">Performance Monitor</h3>
          <button 
            onClick={() => setIsVisible(false)}
            className="text-white/70 hover:text-white"
          >
            ✕
          </button>
        </div>
        
        <div className="space-y-1">
          <div className="flex justify-between">
            <span>Memory:</span>
            <span className={getStatusColor(stats.memoryUsage, [100, 300])}>
              {stats.memoryUsage.toFixed(1)}MB
            </span>
          </div>
          
          <div className="flex justify-between">
            <span>JS Heap:</span>
            <span className={getStatusColor(stats.jsHeapSize, [150, 400])}>
              {stats.jsHeapSize.toFixed(1)}MB
            </span>
          </div>
          
          <div className="flex justify-between">
            <span>FPS:</span>
            <span className={getStatusColor(60 - stats.frameRate, [15, 30])}>
              {stats.frameRate}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span>Load Time:</span>
            <span className={getStatusColor(stats.loadTime, [3, 7])}>
              {stats.loadTime.toFixed(1)}s
            </span>
          </div>
          
          <div className="flex justify-between">
            <span>Bundle:</span>
            <span className={getStatusColor(stats.bundleSize, [5, 10])}>
              {stats.bundleSize.toFixed(1)}MB
            </span>
          </div>
        </div>
        
        <div className="mt-2 pt-2 border-t border-white/20 text-xs text-white/70">
          Triple tap anywhere to toggle
        </div>
      </CardContent>
    </Card>
  );
};

export default AndroidPerformanceMonitor;