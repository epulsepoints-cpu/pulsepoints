import React from 'react';
import InteractiveImageViewer from './InteractiveImageViewer';

interface EnhancedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  downloadFileName?: string;
  // Enhanced features (all enabled by default)
  enableZoom?: boolean;
  enableRotation?: boolean;
  enableFullscreen?: boolean;
  enableDownload?: boolean;
  // Original img props for compatibility
  onLoad?: () => void;
  onError?: () => void;
  loading?: 'lazy' | 'eager';
  crossOrigin?: string;
}

/**
 * Enhanced Image Component with zoom, rotation, fullscreen and download
 * Drop-in replacement for regular <img> tags with interactive features
 */
const EnhancedImage: React.FC<EnhancedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  downloadFileName,
  enableZoom = true,
  enableRotation = true,
  enableFullscreen = true,
  enableDownload = true,
  onLoad,
  onError,
  loading,
  crossOrigin,
  ...props
}) => {
  // Generate download filename from src if not provided
  const fileName = downloadFileName || `ecg-image-${Date.now()}.png`;
  
  // Build container styles
  const containerStyle: React.CSSProperties = {};
  if (width) containerStyle.width = width;
  if (height) containerStyle.height = height;

  return (
    <div style={containerStyle} className={className}>
      <InteractiveImageViewer
        src={src}
        alt={alt}
        downloadFileName={fileName}
        enableZoom={enableZoom}
        enableRotation={enableRotation}
        enableFullscreen={enableFullscreen}
        enableDownload={enableDownload}
        className="w-full h-full"
        onLoad={onLoad}
        onError={onError}
        loading={loading}
        crossOrigin={crossOrigin}
      />
    </div>
  );
};

export default EnhancedImage;
