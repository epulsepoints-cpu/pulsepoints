import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface SimpleImageViewerProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * Simple Image Viewer - Clean and straightforward
 * - Images fit properly in container without scaling issues
 * - Click to view full-size image in popup
 * - No complex zoom/rotation features
 */
const SimpleImageViewer: React.FC<SimpleImageViewerProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  onLoad,
  onError,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoading(false);
    setImageError(false);
    onLoad?.();
  };

  const handleImageError = () => {
    setImageLoading(false);
    setImageError(true);
    onError?.();
  };

  const handleImageClick = () => {
    if (!imageError) {
      setIsDialogOpen(true);
    }
  };

  return (
    <>
      {/* Container for the image */}
      <div 
        className={`relative overflow-hidden rounded-lg bg-gray-900/50 cursor-pointer hover:bg-gray-900/70 transition-colors ${containerClassName}`}
        onClick={handleImageClick}
      >
        {/* Loading state */}
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
          </div>
        )}

        {/* Error state */}
        {imageError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-red-300 text-center p-4">
            <div className="text-lg mb-2">⚠️</div>
            <div className="text-sm">Image failed to load</div>
          </div>
        )}

        {/* The actual image - fits container properly */}
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-contain transition-opacity duration-300 ${
            imageLoading ? 'opacity-0' : 'opacity-100'
          } ${className}`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          draggable={false}
        />

        {/* Click hint overlay */}
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 hover:opacity-100">
          <div className="bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
            Click to view full size
          </div>
        </div>
      </div>

      {/* Full-size image dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95">
          {/* Close button */}
          <button
            onClick={() => setIsDialogOpen(false)}
            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Full-size image */}
          <div className="w-full h-full flex items-center justify-center p-4">
            <img
              src={src}
              alt={alt}
              className="max-w-full max-h-full object-contain"
              draggable={false}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SimpleImageViewer;