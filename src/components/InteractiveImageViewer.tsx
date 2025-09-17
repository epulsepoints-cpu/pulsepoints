import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { 
  ZoomIn, 
  ZoomOut, 
  RotateCw, 
  Download, 
  X, 
  Maximize2,
  Move,
  RotateCcw,
  RefreshCw
} from 'lucide-react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface InteractiveImageViewerProps {
  src: string;
  alt: string;
  className?: string;
  downloadFileName?: string;
  enableFullscreen?: boolean;
  enableZoom?: boolean;
  enableRotation?: boolean;
  enableDownload?: boolean;
  maxZoom?: number;
  minZoom?: number;
  onLoad?: () => void;
  onError?: () => void;
  loading?: 'lazy' | 'eager';
  crossOrigin?: string;
}

const InteractiveImageViewer: React.FC<InteractiveImageViewerProps> = ({
  src,
  alt,
  className = '',
  downloadFileName,
  enableFullscreen = true,
  enableZoom = true,
  enableRotation = true,
  enableDownload = true,
  maxZoom = 5,
  minZoom = 0.5,
  onLoad,
  onError,
  loading,
  crossOrigin
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastPinchDistance = useRef<number>(0);
  const lastTouchCenter = useRef({ x: 0, y: 0 });

  // Motion values for smooth interactions
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);
  const rotate = useMotionValue(0);

  // Reset zoom and position when image changes
  useEffect(() => {
    setZoom(1);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
    setImageLoaded(false);
    x.set(0);
    y.set(0);
    scale.set(1);
    rotate.set(0);
  }, [src]);

  // Handle zoom with bounds checking
  const handleZoom = useCallback((newZoom: number, centerX?: number, centerY?: number) => {
    if (!enableZoom) return;
    
    const clampedZoom = Math.max(minZoom, Math.min(maxZoom, newZoom));
    setZoom(clampedZoom);
    scale.set(clampedZoom);
    
    // Adjust position to zoom around center point
    if (centerX !== undefined && centerY !== undefined && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const centerXRel = centerX - rect.left - rect.width / 2;
      const centerYRel = centerY - rect.top - rect.height / 2;
      
      const newX = position.x - centerXRel * (clampedZoom - zoom) / zoom;
      const newY = position.y - centerYRel * (clampedZoom - zoom) / zoom;
      
      setPosition({ x: newX, y: newY });
      x.set(newX);
      y.set(newY);
    }
  }, [enableZoom, zoom, position, minZoom, maxZoom, x, y, scale]);

  // Handle rotation
  const handleRotation = useCallback((degrees: number) => {
    if (!enableRotation) return;
    
    const newRotation = (rotation + degrees) % 360;
    setRotation(newRotation);
    rotate.set(newRotation);
  }, [enableRotation, rotation, rotate]);

  // Handle wheel zoom
  const handleWheel = useCallback((e: React.WheelEvent) => {
    if (!enableZoom) return;
    
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    handleZoom(zoom + delta, e.clientX, e.clientY);
  }, [enableZoom, zoom, handleZoom]);

  // Handle touch gestures
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      // Pinch gesture
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const distance = Math.sqrt(
        Math.pow(touch2.clientX - touch1.clientX, 2) + 
        Math.pow(touch2.clientY - touch1.clientY, 2)
      );
      lastPinchDistance.current = distance;
      
      const centerX = (touch1.clientX + touch2.clientX) / 2;
      const centerY = (touch1.clientY + touch2.clientY) / 2;
      lastTouchCenter.current = { x: centerX, y: centerY };
    }
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!enableZoom) return;
    
    if (e.touches.length === 2) {
      e.preventDefault();
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const distance = Math.sqrt(
        Math.pow(touch2.clientX - touch1.clientX, 2) + 
        Math.pow(touch2.clientY - touch1.clientY, 2)
      );
      
      if (lastPinchDistance.current > 0) {
        const delta = distance / lastPinchDistance.current;
        handleZoom(zoom * delta, lastTouchCenter.current.x, lastTouchCenter.current.y);
      }
      
      lastPinchDistance.current = distance;
    }
  }, [enableZoom, zoom, handleZoom]);

  // Handle mouse drag
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      e.preventDefault();
    }
  }, [zoom]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      e.preventDefault();
      const newX = position.x + e.movementX;
      const newY = position.y + e.movementY;
      setPosition({ x: newX, y: newY });
      x.set(newX);
      y.set(newY);
    }
  }, [isDragging, zoom, position, x, y]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Download functionality
  const handleDownload = useCallback(async () => {
    if (!enableDownload) return;
    
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = downloadFileName || `image-${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download failed:', error);
    }
  }, [enableDownload, src, downloadFileName]);

  // Reset all transformations
  const handleReset = useCallback(() => {
    setZoom(1);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
    x.set(0);
    y.set(0);
    scale.set(1);
    rotate.set(0);
  }, [x, y, scale, rotate]);

  // Auto-rotation for mobile landscape
  useEffect(() => {
    const handleOrientationChange = () => {
      if (window.screen && window.screen.orientation) {
        const orientation = window.screen.orientation.angle;
        // Auto-adjust rotation based on device orientation if in fullscreen
        if (isFullscreen && enableRotation) {
          setRotation(orientation);
          rotate.set(orientation);
        }
      }
    };

    if (isFullscreen) {
      window.addEventListener('orientationchange', handleOrientationChange);
      return () => window.removeEventListener('orientationchange', handleOrientationChange);
    }
  }, [isFullscreen, enableRotation, rotate]);

  const ImageControls = () => (
    <div className="absolute top-4 right-4 z-50 flex flex-col gap-2 bg-black/70 rounded-lg p-2">
      {enableZoom && (
        <>
          <Button
            size="sm"
            variant="ghost"
            className="text-white hover:bg-white/20 p-2 h-auto"
            onClick={() => handleZoom(zoom + 0.25)}
            disabled={zoom >= maxZoom}
          >
            <ZoomIn className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="text-white hover:bg-white/20 p-2 h-auto"
            onClick={() => handleZoom(zoom - 0.25)}
            disabled={zoom <= minZoom}
          >
            <ZoomOut className="w-4 h-4" />
          </Button>
        </>
      )}
      
      {enableRotation && (
        <>
          <Button
            size="sm"
            variant="ghost"
            className="text-white hover:bg-white/20 p-2 h-auto"
            onClick={() => handleRotation(90)}
          >
            <RotateCw className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="text-white hover:bg-white/20 p-2 h-auto"
            onClick={() => handleRotation(-90)}
          >
            <RotateCcw className="w-4 h-4" />
          </Button>
        </>
      )}
      
      <Button
        size="sm"
        variant="ghost"
        className="text-white hover:bg-white/20 p-2 h-auto"
        onClick={handleReset}
      >
        <RefreshCw className="w-4 h-4" />
      </Button>
      
      {enableDownload && (
        <Button
          size="sm"
          variant="ghost"
          className="text-white hover:bg-white/20 p-2 h-auto"
          onClick={handleDownload}
        >
          <Download className="w-4 h-4" />
        </Button>
      )}
      
      {enableFullscreen && isFullscreen && (
        <Button
          size="sm"
          variant="ghost"
          className="text-white hover:bg-white/20 p-2 h-auto"
          onClick={() => setIsFullscreen(false)}
        >
          <X className="w-4 h-4" />
        </Button>
      )}
    </div>
  );

  // Check if this is an ECG image
  const isECGImage = src.includes('/ecg/') || alt.includes('ECG');
  
  const imageElement = (
    <motion.img
      ref={imageRef}
      src={src}
      alt={alt}
      className={`select-none ${
        isDragging 
          ? 'cursor-grabbing' 
          : zoom > 1 
            ? 'cursor-grab' 
            : enableZoom 
              ? 'cursor-zoom-in' 
              : 'cursor-pointer'
      }`}
      style={{
        x,
        y,
        scale,
        rotate,
        maxWidth: '100%',
        maxHeight: '100%',
        // Let CSS handle object-fit for ECG images, use contain for others
        ...(isECGImage ? {} : { objectFit: 'contain' })
      }}
      onLoad={() => {
        setImageLoaded(true);
        onLoad?.();
      }}
      onError={() => {
        onError?.();
      }}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onClick={(e) => {
        e.stopPropagation();
        
        if (enableZoom) {
          // Click-to-zoom functionality: 1x -> 2x -> 3x -> 1x cycle
          if (zoom === 1) {
            handleZoom(2); // First click: zoom to 2x
          } else if (zoom === 2) {
            handleZoom(3); // Second click: zoom to 3x
          } else {
            handleZoom(1); // Third click: reset to normal size
          }
        }
      }}
      onDoubleClick={(e) => {
        e.stopPropagation();
        
        // Double-click opens fullscreen (only if fullscreen is enabled)
        if (enableFullscreen) {
          setIsFullscreen(true);
        }
      }}
      draggable={false}
    />
  );

  return (
    <>
      {/* Main Image Display */}
      <div
        ref={containerRef}
        className={`relative overflow-hidden rounded-lg bg-gray-50 ${className}`}
        style={{ minHeight: '200px' }}
      >
        {/* Always render image element so it can load */}
        <div>
          {imageElement}
          {imageLoaded && zoom > 1 && (
            <div className="absolute bottom-4 left-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
              {Math.round(zoom * 100)}%
            </div>
          )}
          {imageLoaded && enableFullscreen && zoom === 1 && (
            <div className="absolute top-4 left-4 bg-black/70 text-white p-2 rounded opacity-0 hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
          )}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
          <DialogContent className="max-w-full max-h-full w-screen h-screen m-0 p-0 bg-black">
            <div className="relative w-full h-full flex items-center justify-center">
              {imageLoaded && (
                <>
                  {imageElement}
                  <ImageControls />
                  {zoom > 1 && (
                    <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded">
                      Zoom: {Math.round(zoom * 100)}%
                      {isDragging && <span className="ml-2 opacity-70">• Dragging</span>}
                    </div>
                  )}
                  {zoom > 1 && (
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm opacity-70">
                      <Move className="w-3 h-3 inline mr-1" />
                      Drag to pan
                    </div>
                  )}
                </>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default InteractiveImageViewer;
