import React, { useRef, useEffect, useState } from 'react';
import { ECGSignal } from '@/services/ecgApiService';
import { Button } from '@/components/ui/button';
import { Play, Pause, RotateCcw, ZoomIn, ZoomOut } from 'lucide-react';

interface ECGWaveformProps {
  signal: ECGSignal;
  width?: number;
  height?: number;
  showControls?: boolean;
  className?: string;
}

export const ECGWaveform: React.FC<ECGWaveformProps> = ({ 
  signal, 
  width = 800, 
  height = 300,
  showControls = true,
  className = ''
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (signal) {
      drawECG(false);
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [signal, zoom, offset]);

  const drawGrid = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
    // Medical paper grid styling
    ctx.strokeStyle = '#ffcccc';
    ctx.lineWidth = 0.5;
    
    // Major grid lines (every 20px = 0.2s at standard speed)
    for (let x = 0; x <= w; x += 20) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    
    for (let y = 0; y <= h; y += 20) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
    
    // Minor grid lines (every 4px = 0.04s)
    ctx.strokeStyle = '#ffe6e6';
    ctx.lineWidth = 0.25;
    
    for (let x = 0; x <= w; x += 4) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    
    for (let y = 0; y <= h; y += 4) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
  };

  const drawStaticECGTrace = (
    ctx: CanvasRenderingContext2D, 
    data: number[], 
    w: number, 
    h: number
  ) => {
    if (data.length === 0) return;

    // Apply zoom and offset
    const startIndex = Math.max(0, Math.floor(offset * data.length));
    const endIndex = Math.min(data.length, startIndex + Math.floor(data.length / zoom));
    const visibleData = data.slice(startIndex, endIndex);
    
    if (visibleData.length === 0) return;

    // Normalize data to canvas height
    const minVal = Math.min(...visibleData);
    const maxVal = Math.max(...visibleData);
    const range = maxVal - minVal || 1; // Prevent division by zero
    
    ctx.strokeStyle = '#2563eb';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    for (let i = 0; i < visibleData.length; i++) {
      const x = (i / (visibleData.length - 1)) * w;
      const y = h - ((visibleData[i] - minVal) / range) * h * 0.8 - h * 0.1;
      
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    
    ctx.stroke();
  };

  const animateECGTrace = (
    ctx: CanvasRenderingContext2D, 
    data: number[], 
    w: number, 
    h: number
  ) => {
    setIsAnimating(true);
    let currentIndex = 0;
    const animationSpeed = Math.max(1, Math.floor(data.length / 500)); // Adjust speed based on data length
    
    const animate = () => {
      if (currentIndex >= data.length) {
        setIsAnimating(false);
        return;
      }
      
      // Clear and redraw grid
      ctx.clearRect(0, 0, w, h);
      drawGrid(ctx, w, h);
      
      // Draw ECG trace up to current index
      if (currentIndex > 0) {
        const visibleData = data.slice(0, currentIndex);
        const minVal = Math.min(...data);
        const maxVal = Math.max(...data);
        const range = maxVal - minVal || 1;
        
        ctx.strokeStyle = '#2563eb';
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        for (let i = 0; i < visibleData.length; i++) {
          const x = (i / (data.length - 1)) * w;
          const y = h - ((visibleData[i] - minVal) / range) * h * 0.8 - h * 0.1;
          
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.stroke();
        
        // Draw moving cursor
        const cursorX = (currentIndex / (data.length - 1)) * w;
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(cursorX, 0);
        ctx.lineTo(cursorX, h);
        ctx.stroke();
      }
      
      currentIndex += animationSpeed;
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
  };

  const drawECG = (animate = false) => {
    const canvas = canvasRef.current;
    if (!canvas || !signal) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Draw grid (medical paper style)
    drawGrid(ctx, width, height);
    
    // Draw ECG signal
    const data = signal.signal_data;
    
    if (animate) {
      animateECGTrace(ctx, data, width, height);
    } else {
      drawStaticECGTrace(ctx, data, width, height);
    }
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev * 1.5, 10));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev / 1.5, 0.5));
  };

  const handleReset = () => {
    setZoom(1);
    setOffset(0);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setIsAnimating(false);
    drawECG(false);
  };

  const formatHeartRate = (rate: number): string => {
    if (rate < 60) return `${rate} BPM (Bradycardia)`;
    if (rate > 100) return `${rate} BPM (Tachycardia)`;
    return `${rate} BPM (Normal)`;
  };

  return (
    <div className={`ecg-waveform bg-white rounded-lg border border-gray-300 p-4 ${className}`}>
      {/* ECG Canvas */}
      <div className="relative">
        <canvas 
          ref={canvasRef} 
          width={width} 
          height={height}
          className="border border-gray-200 bg-white cursor-crosshair"
          style={{ 
            backgroundImage: 'radial-gradient(circle, #ffcccc 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        />
        
        {isAnimating && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
            Recording...
          </div>
        )}
      </div>

      {/* Signal Information */}
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div className="bg-gray-50 p-2 rounded">
          <div className="font-semibold text-gray-700">Rhythm</div>
          <div className="text-blue-600">{signal.metadata.description}</div>
        </div>
        
        <div className="bg-gray-50 p-2 rounded">
          <div className="font-semibold text-gray-700">Heart Rate</div>
          <div className="text-red-600 font-bold">
            {formatHeartRate(signal.metadata.heart_rate_bpm)}
          </div>
        </div>
        
        <div className="bg-gray-50 p-2 rounded">
          <div className="font-semibold text-gray-700">Duration</div>
          <div className="text-green-600">{signal.metadata.duration_seconds}s</div>
        </div>
        
        <div className="bg-gray-50 p-2 rounded">
          <div className="font-semibold text-gray-700">Quality</div>
          <div className={`font-medium ${
            signal.metadata.signal_quality === 'good' ? 'text-green-600' :
            signal.metadata.signal_quality === 'moderate' ? 'text-yellow-600' : 'text-red-600'
          }`}>
            {signal.metadata.signal_quality.toUpperCase()}
          </div>
        </div>
      </div>

      {/* Controls */}
      {showControls && (
        <div className="mt-4 flex flex-wrap gap-2 justify-center">
          <Button 
            onClick={() => drawECG(true)}
            disabled={isAnimating}
            variant="outline"
            size="sm"
            className="gap-2"
          >
            {isAnimating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isAnimating ? 'Recording' : 'Animate'}
          </Button>
          
          <Button 
            onClick={handleZoomIn}
            variant="outline"
            size="sm"
            className="gap-2"
          >
            <ZoomIn className="w-4 h-4" />
            Zoom In
          </Button>
          
          <Button 
            onClick={handleZoomOut}
            variant="outline"
            size="sm" 
            className="gap-2"
          >
            <ZoomOut className="w-4 h-4" />
            Zoom Out
          </Button>
          
          <Button 
            onClick={handleReset}
            variant="outline"
            size="sm"
            className="gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </Button>
        </div>
      )}

      {/* Technical Details */}
      <div className="mt-4 text-xs text-gray-500 grid grid-cols-2 md:grid-cols-3 gap-2">
        <div>Sampling: {signal.metadata.sampling_rate} Hz</div>
        <div>Beats: {signal.metadata.num_beats}</div>
        <div>Zoom: {zoom.toFixed(1)}x</div>
      </div>
    </div>
  );
};
