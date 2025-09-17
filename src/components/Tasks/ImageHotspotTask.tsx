import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EnhancedImage from '../EnhancedImage';

interface Hotspot {
  x: number;
  y: number;
  radius: number;
  label: string;
  feedback: string;
  isCorrect: boolean;
}

interface ImageHotspotTaskProps {
  image: string;
  imageAlt?: string;
  hotspots: Hotspot[];
  instructions: string;
  onComplete?: (score: number) => void;
}

export const ImageHotspotTask: React.FC<ImageHotspotTaskProps> = ({
  image,
  imageAlt,
  hotspots,
  instructions,
  onComplete
}) => {
  const [selectedHotspots, setSelectedHotspots] = useState<Set<number>>(new Set());
  const [showFeedback, setShowFeedback] = useState<{ index: number; hotspot: Hotspot } | null>(null);
  const [isComplete, setIsComplete] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (imageRef.current && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const imageRect = imageRef.current.getBoundingClientRect();
        setImageDimensions({
          width: imageRect.width,
          height: imageRect.height
        });
      }
    };

    if (imageLoaded) {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [imageLoaded]);

  const handleHotspotClick = (index: number, hotspot: Hotspot, event: React.MouseEvent) => {
    event.preventDefault();
    
    if (selectedHotspots.has(index)) return;

    const newSelected = new Set(selectedHotspots);
    newSelected.add(index);
    setSelectedHotspots(newSelected);
    
    setShowFeedback({ index, hotspot });
    
    // Hide feedback after 3 seconds
    setTimeout(() => {
      setShowFeedback(null);
    }, 3000);

    // Check if all correct hotspots are selected
    const correctHotspots = hotspots.filter(h => h.isCorrect).length;
    const selectedCorrect = Array.from(newSelected).filter(i => hotspots[i].isCorrect).length;
    
    if (selectedCorrect === correctHotspots) {
      setTimeout(() => {
        setIsComplete(true);
        const score = Math.round((selectedCorrect / hotspots.length) * 100);
        onComplete?.(score);
      }, 1000);
    }
  };

  const getHotspotPosition = (hotspot: Hotspot) => {
    if (!imageDimensions.width || !imageDimensions.height) return { left: 0, top: 0 };
    
    return {
      left: (hotspot.x / 100) * imageDimensions.width,
      top: (hotspot.y / 100) * imageDimensions.height
    };
  };

  const getHotspotSize = (radius: number) => {
    // Make hotspots larger on mobile for better touch targets
    const isMobile = window.innerWidth < 768;
    const baseSize = isMobile ? 40 : 30;
    return Math.max(baseSize, (radius / 100) * Math.min(imageDimensions.width, imageDimensions.height) * 0.1);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Instructions */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">Instructions</h3>
        <p className="text-blue-800">{instructions}</p>
        <div className="mt-2 text-sm text-blue-600">
          Tap on the highlighted areas to identify key features
        </div>
      </div>

      {/* Image Container */}
      <div 
        ref={containerRef}
        className="relative bg-white rounded-lg shadow-lg overflow-hidden border-2 border-gray-200"
        style={{ minHeight: '300px' }}
      >
        {/* Loading State */}
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading ECG image...</p>
            </div>
          </div>
        )}

        {/* ECG Image */}
        <img
          ref={imageRef}
          src={image}
          alt={imageAlt || "ECG strip for analysis"}
          className="w-full h-auto block"
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            // Fallback to a placeholder image
            if (imageRef.current) {
              imageRef.current.src = '/images/ecg-placeholder.png';
            }
          }}
          style={{ maxHeight: '70vh', objectFit: 'contain' }}
        />

        {/* Hotspots Overlay */}
        {imageLoaded && imageDimensions.width > 0 && (
          <div className="absolute inset-0 pointer-events-none">
            {hotspots.map((hotspot, index) => {
              const position = getHotspotPosition(hotspot);
              const size = getHotspotSize(hotspot.radius);
              const isSelected = selectedHotspots.has(index);
              
              return (
                <motion.div
                  key={index}
                  className={`absolute pointer-events-auto cursor-pointer transform -translate-x-1/2 -translate-y-1/2 ${
                    isSelected ? 'z-20' : 'z-10'
                  }`}
                  style={{
                    left: position.left,
                    top: position.top,
                    width: size,
                    height: size
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: isSelected ? 1.2 : 1, 
                    opacity: 1 
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => handleHotspotClick(index, hotspot, e)}
                >
                  {/* Hotspot Circle */}
                  <div className={`w-full h-full rounded-full border-3 transition-all duration-300 ${
                    isSelected
                      ? hotspot.isCorrect
                        ? 'bg-green-500 bg-opacity-80 border-green-400 shadow-lg'
                        : 'bg-red-500 bg-opacity-80 border-red-400 shadow-lg'
                      : 'bg-blue-500 bg-opacity-60 border-blue-400 hover:bg-opacity-80'
                  }`}>
                    {/* Pulse Animation for Unselected Hotspots */}
                    {!isSelected && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-blue-400"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.6, 0, 0.6]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                    
                    {/* Check mark for correct answers */}
                    {isSelected && hotspot.isCorrect && (
                      <div className="flex items-center justify-center w-full h-full text-white">
                        <svg className="w-1/2 h-1/2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                    
                    {/* X mark for incorrect answers */}
                    {isSelected && !hotspot.isCorrect && (
                      <div className="flex items-center justify-center w-full h-full text-white">
                        <svg className="w-1/2 h-1/2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  {/* Label */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap pointer-events-none">
                    {hotspot.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Feedback Popup */}
        <AnimatePresence>
          {showFeedback && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-4 left-4 right-4 z-30"
            >
              <div className={`p-4 rounded-lg shadow-lg border-l-4 ${
                showFeedback.hotspot.isCorrect
                  ? 'bg-green-50 border-green-500 text-green-800'
                  : 'bg-red-50 border-red-500 text-red-800'
              }`}>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    {showFeedback.hotspot.isCorrect ? (
                      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold">{showFeedback.hotspot.label}</h4>
                    <p className="text-sm mt-1">{showFeedback.hotspot.feedback}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Completion Overlay */}
        <AnimatePresence>
          {isComplete && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute inset-0 bg-green-500 bg-opacity-20 flex items-center justify-center z-40"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white rounded-lg p-6 shadow-xl border border-green-200"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Task Complete!</h3>
                  <p className="text-green-600">You've successfully identified all key features.</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Progress */}
      <div className="mt-4 text-center">
        <div className="text-sm text-gray-600 mb-2">
          Progress: {selectedHotspots.size} of {hotspots.filter(h => h.isCorrect).length} features identified
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(selectedHotspots.size / hotspots.filter(h => h.isCorrect).length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};
