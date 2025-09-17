import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import { GripVertical, CheckCircle, X, RotateCcw, Target } from 'lucide-react';
import { TaskData } from '../../../types/eventTypes';
import MobileTaskWrapper from './MobileTaskWrapper';

interface DragDropTaskProps {
  task: TaskData;
  onProgress: (score: number) => void;
  onComplete: (score: number) => void;
  onBack?: () => void;
}

interface DragItem {
  id: string;
  content: string;
  correctZone: string;
  description?: string;
}

interface DropZone {
  id: string;
  title: string;
  color: string;
  description?: string;
}

interface TaskDataType {
  title: string;
  instruction: string;
  items: DragItem[];
  zones: DropZone[];
}

export const DragDropTask: React.FC<DragDropTaskProps> = ({ 
  task, 
  onProgress, 
  onComplete,
  onBack
}) => {
  const [dropZones, setDropZones] = useState<{ [key: string]: string[] }>({});
  const [submitted, setSubmitted] = useState(false);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [touchDrag, setTouchDrag] = useState<{
    itemId: string | null;
    startX: number;
    startY: number;
    currentX: number;
    currentY: number;
  }>({
    itemId: null,
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0
  });
  const [availableItems, setAvailableItems] = useState<string[]>([]);
  const dragControls = useDragControls();

  // Get task data from props or use default
  const taskData: TaskDataType = task.data?.dragDropData || {
    title: task.title || 'ECG Classification Challenge',
    instruction: task.description || 'Classify each ECG rhythm into the correct category',
    items: [
      { 
        id: 'sinus-rhythm', 
        content: 'Normal Sinus Rhythm', 
        correctZone: 'normal-rhythms',
        description: '60-100 bpm, regular P waves, normal PR interval'
      },
      { 
        id: 'sinus-brady', 
        content: 'Sinus Bradycardia', 
        correctZone: 'normal-rhythms',
        description: '<60 bpm, regular P waves, normal PR interval'
      },
      { 
        id: 'atrial-fib', 
        content: 'Atrial Fibrillation', 
        correctZone: 'abnormal-rhythms',
        description: 'Irregularly irregular, no P waves, fibrillatory waves'
      },
      { 
        id: 'svt', 
        content: 'Supraventricular Tachycardia', 
        correctZone: 'abnormal-rhythms',
        description: '>150 bpm, narrow QRS, regular rhythm'
      },
      { 
        id: 'vtach', 
        content: 'Ventricular Tachycardia', 
        correctZone: 'emergency-rhythms',
        description: '>100 bpm, wide QRS, regular rhythm'
      },
      { 
        id: 'vfib', 
        content: 'Ventricular Fibrillation', 
        correctZone: 'emergency-rhythms',
        description: 'Chaotic, no identifiable QRS complexes'
      },
      { 
        id: 'asystole', 
        content: 'Asystole', 
        correctZone: 'emergency-rhythms',
        description: 'Flat line, no electrical activity'
      },
      { 
        id: 'third-degree-block', 
        content: 'Complete Heart Block', 
        correctZone: 'emergency-rhythms',
        description: 'P waves and QRS independent, regular P-P intervals'
      }
    ],
    zones: [
      { 
        id: 'normal-rhythms', 
        title: 'Normal Rhythms', 
        color: 'green',
        description: 'Physiologically normal cardiac rhythms'
      },
      { 
        id: 'abnormal-rhythms', 
        title: 'Abnormal Rhythms', 
        color: 'yellow',
        description: 'Rhythm disturbances requiring monitoring'
      },
      { 
        id: 'emergency-rhythms', 
        title: 'Emergency Rhythms', 
        color: 'red',
        description: 'Life-threatening rhythms requiring immediate intervention'
      }
    ]
  };

  // Initialize drop zones and available items
  useEffect(() => {
    const initialDropZones: { [key: string]: string[] } = {};
    taskData.zones.forEach(zone => {
      initialDropZones[zone.id] = [];
    });
    setDropZones(initialDropZones);
    setAvailableItems(taskData.items.map(item => item.id));
  }, []);

  // Handle desktop drag start
  const handleDragStart = (itemId: string) => {
    setDraggedItem(itemId);
  };

  // Handle drag end
  const handleDragEnd = (info: any, itemId: string) => {
    setDraggedItem(null);
  };

  // Handle drag over
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  // Handle drag drop
  const handleDragDrop = (e: React.DragEvent, zoneId: string) => {
    e.preventDefault();
    if (draggedItem) {
      handleDrop(zoneId, draggedItem);
    }
  };

  // Handle desktop drop
  const handleDrop = (zoneId: string, itemId: string) => {
    if (!itemId) return;

    // Remove item from its current location
    const newDropZones = { ...dropZones };
    Object.keys(newDropZones).forEach(key => {
      newDropZones[key] = newDropZones[key].filter(id => id !== itemId);
    });
    
    // Remove from available items
    const newAvailableItems = availableItems.filter(id => id !== itemId);
    
    // Add to target zone
    newDropZones[zoneId] = [...newDropZones[zoneId], itemId];

    setDropZones(newDropZones);
    setAvailableItems(newAvailableItems);
    setDraggedItem(null);
    
    updateProgress(newDropZones);
  };

  // Handle touch drag start
  const handleTouchStart = (e: React.TouchEvent, itemId: string) => {
    e.preventDefault();
    const touch = e.touches[0];
    setTouchDrag({
      itemId,
      startX: touch.clientX,
      startY: touch.clientY,
      currentX: touch.clientX,
      currentY: touch.clientY
    });
  };

  // Handle touch drag move
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchDrag.itemId) return;
    e.preventDefault();
    
    const touch = e.touches[0];
    setTouchDrag(prev => ({
      ...prev,
      currentX: touch.clientX,
      currentY: touch.clientY
    }));
  };

  // Handle touch drag end
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchDrag.itemId) return;
    e.preventDefault();

    // Find drop zone under touch point
    const touch = e.changedTouches[0];
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    const dropZone = element?.closest('[data-drop-zone]');
    
    if (dropZone) {
      const zoneId = dropZone.getAttribute('data-drop-zone');
      if (zoneId) {
        handleDrop(zoneId, touchDrag.itemId);
      }
    }

    setTouchDrag({
      itemId: null,
      startX: 0,
      startY: 0,
      currentX: 0,
      currentY: 0
    });
  };

  // Handle touch drop
  const handleTouchDrop = (zoneId: string) => {
    if (touchDrag.itemId) {
      handleDrop(zoneId, touchDrag.itemId);
    }
  };

  // Handle item return to available items
  const handleReturnItem = (itemId: string) => {
    const newDropZones = { ...dropZones };
    Object.keys(newDropZones).forEach(key => {
      newDropZones[key] = newDropZones[key].filter(id => id !== itemId);
    });
    
    const newAvailableItems = [...availableItems, itemId];
    
    setDropZones(newDropZones);
    setAvailableItems(newAvailableItems);
    updateProgress(newDropZones);
  };

  // Update progress
  const updateProgress = (currentDropZones: { [key: string]: string[] }) => {
    const totalItems = taskData.items.length;
    const placedItems = Object.values(currentDropZones).flat().length;
    const progress = Math.round((placedItems / totalItems) * 100);
    onProgress(progress);
  };

  // Submit for grading
  const handleSubmit = () => {
    setSubmitted(true);
    
    let correctPlacements = 0;
    const totalItems = taskData.items.length;
    
    Object.entries(dropZones).forEach(([zoneId, itemIds]) => {
      itemIds.forEach(itemId => {
        const item = taskData.items.find(i => i.id === itemId);
        if (item && item.correctZone === zoneId) {
          correctPlacements++;
        }
      });
    });
    
    const score = Math.round((correctPlacements / totalItems) * 100);
    
    setTimeout(() => {
      onComplete(score);
    }, 3000);
  };

  // Reset task
  const handleReset = () => {
    const initialDropZones: { [key: string]: string[] } = {};
    taskData.zones.forEach(zone => {
      initialDropZones[zone.id] = [];
    });
    setDropZones(initialDropZones);
    setAvailableItems(taskData.items.map(item => item.id));
    setSubmitted(false);
    onProgress(0);
  };

  // Get zone color for styling
  const getZoneColor = (color: string) => {
    switch (color) {
      case 'green':
        return 'border-green-300 bg-green-50 hover:border-green-400 hover:bg-green-100';
      case 'yellow':
        return 'border-yellow-300 bg-yellow-50 hover:border-yellow-400 hover:bg-yellow-100';
      case 'red':
        return 'border-red-300 bg-red-50 hover:border-red-400 hover:bg-red-100';
      default:
        return 'border-gray-300 bg-gray-50 hover:border-gray-400 hover:bg-gray-100';
    }
  };

  // Get item status for results
  const getItemStatus = (itemId: string, zoneId: string) => {
    if (!submitted) return 'pending';
    
    const item = taskData.items.find(i => i.id === itemId);
    if (!item) return 'pending';
    
    return item.correctZone === zoneId ? 'correct' : 'incorrect';
  };

  // Find item by ID
  const findItem = (itemId: string) => taskData.items.find(item => item.id === itemId);

  return (
    <MobileTaskWrapper 
      title={taskData.title} 
      onBack={onBack} 
      showBackButton={!!onBack}
    >
      <div className="space-y-4 p-4">
        {/* Simple Instructions - Mobile Optimized */}
        <div className="bg-blue-50 rounded-lg p-3">
          <p className="text-blue-800 text-sm font-medium">{taskData.instruction}</p>
          <div className="mt-2 flex items-center justify-between text-xs text-blue-600">
            <span>{Object.values(dropZones).flat().length} / {taskData.items.length} classified</span>
            <button onClick={handleReset} className="text-blue-600 hover:text-blue-800">
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Simplified Layout */}
        <div className="grid grid-cols-1 gap-4">
          {/* Available Items */}
          <div className="bg-white rounded-lg p-3 border border-gray-200">
            <h4 className="text-sm font-semibold mb-3 text-gray-700">Items to Classify</h4>
            <div className="space-y-2">
              {availableItems.map(itemId => {
                const item = findItem(itemId);
                if (!item) return null;
                
                return (
                  <motion.div
                    key={itemId}
                    drag
                    dragControls={dragControls}
                    onDragStart={() => handleDragStart(itemId)}
                    onDragEnd={(_, info) => handleDragEnd(info, itemId)}
                    onTouchStart={(e) => handleTouchStart(e, itemId)}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    className="bg-gray-50 p-3 rounded-lg border border-gray-200 cursor-move touch-manipulation"
                    whileHover={{ scale: 1.02 }}
                    whileDrag={{ scale: 1.05, zIndex: 1000 }}
                  >
                    <div className="flex items-center space-x-2">
                      <GripVertical className="w-4 h-4 text-gray-400" />
                      <div>
                        <div className="font-medium text-sm">{item.content}</div>
                        {item.description && (
                          <div className="text-xs text-gray-500 mt-1">{item.description}</div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Drop Zones */}
          <div className="space-y-3">
            {taskData.zones.map(zone => (
              <motion.div
                key={zone.id}
                data-drop-zone={zone.id}
                className={`
                  p-4 rounded-lg border-2 border-dashed transition-all duration-200 min-h-[80px]
                  ${getZoneColor(zone.color)}
                  ${draggedItem ? 'border-opacity-100' : 'border-opacity-50'}
                `}
                onDrop={(e) => handleDragDrop(e, zone.id)}
                onDragOver={handleDragOver}
                onTouchEnd={() => handleTouchDrop(zone.id)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-sm">{zone.title}</h4>
                  <span className="text-xs bg-white bg-opacity-70 px-2 py-1 rounded">
                    {dropZones[zone.id]?.length || 0} items
                  </span>
                </div>
                
                {zone.description && (
                  <p className="text-xs opacity-75 mb-2">{zone.description}</p>
                )}
                
                <div className="space-y-2">
                  {dropZones[zone.id]?.map(itemId => {
                    const item = findItem(itemId);
                    const status = submitted ? getItemStatus(itemId, zone.id) : 'pending';
                    return (
                      <motion.div
                        key={itemId}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`
                          p-2 rounded border text-sm
                          ${status === 'correct' ? 'bg-green-100 border-green-300 text-green-800' :
                            status === 'incorrect' ? 'bg-red-100 border-red-300 text-red-800' :
                            'bg-white border-gray-200'}
                        `}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{item?.content}</span>
                          {submitted && (
                            <span>
                              {status === 'correct' ? '✅' : status === 'incorrect' ? '❌' : '⏳'}
                            </span>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSubmit}
          disabled={submitted || Object.values(dropZones).flat().length === 0}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white py-3 px-4 rounded-lg font-semibold transition-colors touch-manipulation"
        >
          {submitted ? 'Completed!' : 'Submit Classification'}
        </motion.button>
      </div>
    </MobileTaskWrapper>
  );
};

export default DragDropTask;