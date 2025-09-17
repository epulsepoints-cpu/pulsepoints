import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, CheckCircle, X, Eye, EyeOff } from 'lucide-react';
import { TaskData } from '../../../types/eventTypes';
import { MobileTaskWrapper } from './MobileTaskWrapper';
import EnhancedImage from '../../EnhancedImage';

interface ImageHotspotTaskProps {
  task: TaskData;
  onProgress: (score: number) => void;
  onComplete: (score: number) => void;
  onBack?: () => void;
}

interface Hotspot {
  id: number;
  x: number;
  y: number;
  radius: number;
  label: string;
  feedback: string;
  isCorrect: boolean;
}

interface ImageData {
  image: string;
  title: string;
  instruction: string;
  hotspots: Hotspot[];
}

export const ImageHotspotTask: React.FC<ImageHotspotTaskProps> = ({ 
  task, 
  onProgress, 
  onComplete,
  onBack
}) => {
  const [selectedHotspots, setSelectedHotspots] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Get image data from task content or use default
  const imageData: ImageData = task.content?.imageHotspot || task.data?.imageData || {
    image: task.content?.imageHotspot?.image || '/ecg/medical_accurate/ventricular_tachycardia_150bpm_1.png',
    title: task.title || 'ECG Analysis Task',
    instruction: task.description || 'Identify the key features in this ECG',
    hotspots: [
      {
        id: 1,
        x: 25,
        y: 40,
        radius: 3,
        label: 'Wide QRS Complex',
        feedback: 'Correct! Wide QRS complexes (>120ms) indicate ventricular origin.',
        isCorrect: true
      },
      {
        id: 2,
        x: 65,
        y: 35,
        radius: 4,
        label: 'Regular Rhythm',
        feedback: 'Excellent! The rhythm is regular at approximately 200 bpm.',
        isCorrect: true
      },
      {
        id: 3,
        x: 80,
        y: 45,
        radius: 3,
        label: 'No P Waves',
        feedback: 'Great! Absence of discernible P waves supports VT diagnosis.',
        isCorrect: true
      },
      {
        id: 4,
        x: 45,
        y: 70,
        radius: 2,
        label: 'Narrow QRS',
        feedback: 'Incorrect. This shows wide QRS complexes, not narrow ones.',
        isCorrect: false
      }
    ]
  };

  // Update image dimensions when image loads or window resizes
  useEffect(() => {
    const updateDimensions = () => {
      if (imageRef.current && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const imageRect = imageRef.current.getBoundingClientRect();
        setImageDimensions({
          width: imageRect.width,
          height: imageRect.height
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [imageLoaded]);

  const handleHotspotClick = (hotspotId: number, event: React.MouseEvent | React.TouchEvent) => {
    event.preventDefault();
    if (showResults) return;

    setSelectedHotspots(prev => {
      if (prev.includes(hotspotId)) {
        return prev.filter(id => id !== hotspotId);
      } else {
        const newSelected = [...prev, hotspotId];
        updateProgress(newSelected);
        return newSelected;
      }
    });
  };

  const updateProgress = (selected: number[]) => {
    const correctSpots = imageData.hotspots.filter(h => h.isCorrect);
    const correctSelected = selected.filter(id => 
      correctSpots.some(spot => spot.id === id)
    );
    
    const progress = Math.round((correctSelected.length / correctSpots.length) * 100);
    onProgress(progress);
  };

  const handleSubmit = () => {
    setShowResults(true);
    
    const correctSpots = imageData.hotspots.filter(h => h.isCorrect);
    const correctSelected = selectedHotspots.filter(id => 
      correctSpots.some(spot => spot.id === id)
    );
    const incorrectSelected = selectedHotspots.filter(id => 
      !correctSpots.some(spot => spot.id === id)
    );
    
    // Calculate score: (correct selections / total correct) * 100 - penalty for incorrect
    const baseScore = (correctSelected.length / correctSpots.length) * 100;
    const penalty = incorrectSelected.length * 10; // 10 point penalty per incorrect
    const finalScore = Math.max(0, Math.round(baseScore - penalty));
    
    setTimeout(() => {
      onComplete(finalScore);
    }, 3000);
  };

  const getHotspotPosition = (hotspot: Hotspot) => {
    if (!imageDimensions.width || !imageDimensions.height) {
      return { left: '50%', top: '50%' };
    }
    
    return {
      left: `${hotspot.x}%`,
      top: `${hotspot.y}%`
    };
  };

  const getHotspotStatus = (hotspot: Hotspot) => {
    const isSelected = selectedHotspots.includes(hotspot.id);
    
    if (!showResults) {
      return isSelected ? 'selected' : 'unselected';
    }
    
    if (isSelected) {
      return hotspot.isCorrect ? 'correct' : 'incorrect';
    } else {
      return hotspot.isCorrect ? 'missed' : 'unselected';
    }
  };

  const getHotspotStyles = (status: string) => {
    const baseStyles = 'w-8 h-8 rounded-full border-2 border-white shadow-lg flex items-center justify-center transition-all duration-200';
    
    switch (status) {
      case 'selected':
        return `${baseStyles} bg-blue-500 scale-110`;
      case 'correct':
        return `${baseStyles} bg-green-500 scale-110`;
      case 'incorrect':
        return `${baseStyles} bg-red-500 scale-110`;
      case 'missed':
        return `${baseStyles} bg-yellow-500 scale-110 animate-pulse`;
      default:
        return `${baseStyles} bg-gray-300 hover:bg-gray-400 cursor-pointer`;
    }
  };

  return (
    <MobileTaskWrapper 
      title={imageData.title || "Image Analysis"} 
      onBack={onBack} 
      showBackButton={!!onBack}
    >
      <div className="w-full space-y-6 px-4">
      {/* Instructions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Target className="w-5 h-5 text-blue-500" />
            <h3 className="text-lg font-semibold">{imageData.title}</h3>
          </div>
          <button
            onClick={() => setShowHints(!showHints)}
            className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900"
          >
            {showHints ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            <span>{showHints ? 'Hide' : 'Show'} Hints</span>
          </button>
        </div>
        
        <p className="text-gray-600 mb-4">{imageData.instruction}</p>
        
        {/* Progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-500">
            <span>Progress: {selectedHotspots.length} spots selected</span>
            <span>{imageData.hotspots.filter(h => h.isCorrect).length} correct spots total</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ 
                width: `${Math.min((selectedHotspots.filter(id => 
                  imageData.hotspots.find(h => h.id === id)?.isCorrect
                ).length / imageData.hotspots.filter(h => h.isCorrect).length) * 100, 100)}%` 
              }}
              className="h-full bg-blue-500 rounded-full transition-all duration-300"
            />
          </div>
        </div>

        {/* Hints */}
        <AnimatePresence>
          {showHints && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500"
            >
              <h4 className="font-medium text-blue-800 mb-2">💡 Hints:</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Look for wide QRS complexes {'>'}120ms</li>
                <li>• Check for regular or irregular rhythm patterns</li>
                <li>• Identify presence or absence of P waves</li>
                <li>• Note the heart rate and rhythm characteristics</li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Interactive Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        {/* ECG Image Display */}
        <div className="bg-white p-4 rounded-lg mb-4">
          <div className="text-center mb-2">
            <p className="text-sm text-gray-600">Loading ECG: {imageData.image}</p>
          </div>
          <img
            ref={imageRef}
            src={imageData.image}
            alt="ECG Analysis"
            className="w-full h-auto border border-gray-200 rounded ecg-hotspot-image-visible"
            style={{ 
              display: 'block',
              visibility: 'visible',
              opacity: '1',
              maxHeight: '400px',
              objectFit: 'contain',
              backgroundColor: 'white',
              zIndex: 10,
              position: 'relative',
              minHeight: '200px'
            } as React.CSSProperties}
            onLoad={(e) => {
              console.log('✅ Hotspot ECG Image loaded successfully:', imageData.image);
              const img = e.target as HTMLImageElement;
              console.log('📐 Image dimensions:', img.naturalWidth, 'x', img.naturalHeight);
              console.log('📍 Image position:', img.getBoundingClientRect());
              
              // Force visibility after load
              img.style.display = 'block';
              img.style.visibility = 'visible';
              img.style.opacity = '1';
              setImageLoaded(true);
            }}
            onError={(e) => {
              console.error('❌ Hotspot ECG Image failed to load:', imageData.image);
              setImageLoaded(true); // Show hotspots even if image fails to load
            }}
          />
        </div>

        {/* Hotspots Container */}
        <div 
          ref={containerRef}
          className="relative w-full aspect-[16/10] bg-gradient-to-br from-green-50 to-blue-50 rounded-lg overflow-hidden"
        >
          {/* ECG Background Pattern */}
          <div className="absolute inset-0">
            <svg className="w-full h-full">
              <defs>
                <pattern id="ecg-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#10b981" strokeWidth="0.5" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ecg-grid)" />
              
              {/* Mock ECG Waveform */}
              <path 
                d="M0,200 L50,200 L60,150 L70,250 L80,200 L150,200 L160,150 L170,250 L180,200 L250,200 L260,150 L270,250 L280,200 L350,200 L360,150 L370,250 L380,200 L450,200"
                fill="none" 
                stroke="#10b981" 
                strokeWidth="2"
                opacity="0.8"
              />
            </svg>
          </div>

          {/* Hotspots */}
          {imageLoaded && imageData.hotspots.map((hotspot) => {
            const position = getHotspotPosition(hotspot);
            const status = getHotspotStatus(hotspot);
            const isVisible = status !== 'unselected' || showResults;

            return (
              <div key={hotspot.id}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: isVisible ? 1 : 0.7 }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                  style={position}
                  onClick={(e) => handleHotspotClick(hotspot.id, e)}
                  onTouchEnd={(e) => handleHotspotClick(hotspot.id, e)}
                >
                  <motion.div
                    whileHover={!showResults ? { scale: 1.2 } : {}}
                    whileTap={!showResults ? { scale: 0.9 } : {}}
                    className={getHotspotStyles(status)}
                    style={{ 
                      minWidth: `${Math.max(hotspot.radius * 8, 32)}px`,
                      minHeight: `${Math.max(hotspot.radius * 8, 32)}px`
                    }}
                  >
                    {showResults && (
                      status === 'correct' ? (
                        <CheckCircle className="w-4 h-4 text-white" />
                      ) : status === 'incorrect' ? (
                        <X className="w-4 h-4 text-white" />
                      ) : status === 'missed' ? (
                        <Target className="w-4 h-4 text-white" />
                      ) : null
                    )}
                  </motion.div>

                  {/* Feedback Tooltip */}
                  {(selectedHotspots.includes(hotspot.id) || showResults) && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-20"
                    >
                      <div className={`
                        max-w-xs px-3 py-2 rounded-lg text-xs font-medium text-white shadow-lg
                        ${status === 'correct' ? 'bg-green-600' : 
                          status === 'incorrect' ? 'bg-red-600' : 
                          status === 'missed' ? 'bg-yellow-600' : 'bg-blue-600'}
                      `}>
                        <div className="font-medium">{hotspot.label}</div>
                        {showResults && (
                          <div className="text-xs opacity-90 mt-1">
                            {hotspot.feedback}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Mobile Instructions */}
        <div className="mt-4 p-3 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 text-center">
            📱 Tap on areas of interest • 💡 Use hints if needed • ✅ Submit when ready
          </p>
        </div>
      </motion.div>

      {/* Results Summary */}
      <AnimatePresence>
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              Analysis Complete
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {selectedHotspots.filter(id => 
                    imageData.hotspots.find(h => h.id === id)?.isCorrect
                  ).length}
                </div>
                <div className="text-sm text-green-700">Correct Identifications</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600">
                  {selectedHotspots.filter(id => 
                    !imageData.hotspots.find(h => h.id === id)?.isCorrect
                  ).length}
                </div>
                <div className="text-sm text-red-700">Incorrect Selections</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600">
                  {imageData.hotspots.filter(h => 
                    h.isCorrect && !selectedHotspots.includes(h.id)
                  ).length}
                </div>
                <div className="text-sm text-yellow-700">Missed Features</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit Button */}
      {!showResults && selectedHotspots.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSubmit}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg"
          >
            Submit Analysis
          </motion.button>
        </motion.div>
      )}
    </div>
    </MobileTaskWrapper>
  );
};

export default ImageHotspotTask;
