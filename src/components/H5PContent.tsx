import React, { useState, useRef, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Play, Pause, RotateCcw, Check, X, ArrowRight, Clock, Trophy } from 'lucide-react';

interface H5PContentProps {
  content: {
    type: 'drag-drop' | 'timeline' | 'interactive-video' | 'quiz-set' | 'image-hotspots';
    title: string;
    description: string;
    activity: any; // Specific to content type
    scoring: {
      maxPoints: number;
      passingScore: number;
    };
  };
  onComplete: (score: number, details: any) => void;
}

// Drag and Drop Component
const DragDropActivity: React.FC<{
  activity: any;
  onScore: (score: number, details: any) => void;
}> = ({ activity, onScore }) => {
  const [items, setItems] = useState(activity.items);
  const [dropZones, setDropZones] = useState(activity.dropZones);
  const [isComplete, setIsComplete] = useState(false);
  const [score, setScore] = useState(0);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const { source, destination } = result;
    
    // Move item from source to destination
    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(source.index, 1);
    
    // Update drop zones
    const newDropZones = { ...dropZones };
    const destZoneId = destination.droppableId;
    
    if (!newDropZones[destZoneId]) {
      newDropZones[destZoneId] = [];
    }
    
    newDropZones[destZoneId].splice(destination.index, 0, reorderedItem);
    
    setItems(newItems);
    setDropZones(newDropZones);
    
    // Check if activity is complete
    checkCompletion(newDropZones);
  };

  const checkCompletion = (zones: any) => {
    let correctPlacements = 0;
    let totalPlacements = 0;
    
    Object.entries(zones).forEach(([zoneId, zoneItems]: [string, any]) => {
      zoneItems.forEach((item: any) => {
        totalPlacements++;
        if (item.correctZone === zoneId) {
          correctPlacements++;
        }
      });
    });
    
    if (totalPlacements > 0) {
      const calculatedScore = Math.round((correctPlacements / totalPlacements) * 100);
      setScore(calculatedScore);
      
      if (totalPlacements >= activity.items.length) {
        setIsComplete(true);
        onScore(calculatedScore, {
          correctPlacements,
          totalPlacements,
          zones: zones
        });
      }
    }
  };

  const resetActivity = () => {
    setItems(activity.items);
    setDropZones(activity.dropZones);
    setIsComplete(false);
    setScore(0);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Mobile-optimized header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-4">
        <h3 className="text-base sm:text-lg font-semibold leading-tight">{activity.title}</h3>
        <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 xs:gap-4">
          <div className="text-base sm:text-lg font-bold text-blue-600">Score: {score}%</div>
          <button
            onClick={resetActivity}
            className="flex items-center gap-2 px-3 py-1.5 bg-gray-200 rounded hover:bg-gray-300 transition-colors text-sm touch-manipulation"
            style={{ minHeight: '44px' }} // Minimum touch target size
          >
            <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4" />
            Reset
          </button>
        </div>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        {/* Items Pool - Mobile Optimized */}
        <div className="mb-4 sm:mb-6">
          <h4 className="font-medium mb-2 text-sm sm:text-base">Drag items to the correct zones:</h4>
          <Droppable droppableId="items-pool" direction="horizontal">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="flex flex-wrap gap-2 p-3 sm:p-4 bg-gray-50 rounded-lg min-h-[50px] sm:min-h-[60px]"
              >
                {items.map((item: any, index: number) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`px-2 py-1.5 sm:px-3 sm:py-2 bg-white border rounded text-xs sm:text-sm shadow cursor-move transition-transform touch-manipulation ${
                          snapshot.isDragging ? 'rotate-3 shadow-lg scale-105' : 'hover:shadow-md'
                        }`}
                        style={{
                          ...provided.draggableProps.style,
                          minHeight: '44px', // Minimum touch target size
                        }}
                      >
                        {item.text}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>

        {/* Drop Zones - Responsive Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {Object.entries(activity.zones).map(([zoneId, zone]: [string, any]) => (
            <Droppable key={zoneId} droppableId={zoneId}>
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={`p-3 sm:p-4 border-2 border-dashed rounded-lg min-h-[100px] sm:min-h-[120px] transition-colors ${
                    snapshot.isDraggingOver
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-300 bg-gray-50'
                  }`}
                >
                  <h4 className="font-medium mb-2 text-sm sm:text-base">{zone.title}</h4>
                  <div className="space-y-2">
                    {(dropZones[zoneId] || []).map((item: any, index: number) => (
                      <div
                        key={`${item.id}-${index}`}
                        className={`px-2 py-1.5 sm:px-3 sm:py-2 rounded border text-xs sm:text-sm ${
                          isComplete
                            ? item.correctZone === zoneId
                              ? 'bg-green-100 border-green-500 text-green-800'
                              : 'bg-red-100 border-red-500 text-red-800'
                            : 'bg-white border-gray-300'
                        }`}
                        style={{ minHeight: '44px' }} // Minimum touch target size
                      >
                        <div className="flex items-center justify-between">
                          <span className="leading-tight">{item.text}</span>
                          {isComplete && (
                            item.correctZone === zoneId ? (
                              <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0 ml-2" />
                            ) : (
                              <X className="w-3 h-3 sm:w-4 sm:h-4 text-red-600 flex-shrink-0 ml-2" />
                            )
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>

      {isComplete && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center gap-2 text-green-800">
            <Trophy className="w-5 h-5" />
            <span className="font-semibold">Activity Complete!</span>
          </div>
          <p className="text-green-700 mt-1">
            You scored {score}% ({score >= activity.passingScore ? 'Passed' : 'Keep practicing!'})
          </p>
        </div>
      )}
    </div>
  );
};

// Timeline Activity Component
const TimelineActivity: React.FC<{
  activity: any;
  onScore: (score: number, details: any) => void;
}> = ({ activity, onScore }) => {
  const [selectedEvents, setSelectedEvents] = useState<any[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [userTimeline, setUserTimeline] = useState<any[]>([]);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = window.setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= activity.duration) {
            setIsPlaying(false);
            return activity.duration;
          }
          return prev + 1;
        });
      }, 1000);
    } else if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [isPlaying, activity.duration]);

  const addEventToTimeline = (event: any) => {
    const newEvent = { ...event, timestamp: currentTime };
    setUserTimeline(prev => [...prev, newEvent].sort((a, b) => a.timestamp - b.timestamp));
  };

  const calculateScore = () => {
    let score = 0;
    const totalEvents = activity.correctTimeline.length;
    
    activity.correctTimeline.forEach((correctEvent: any) => {
      const userEvent = userTimeline.find(ue => ue.id === correctEvent.id);
      if (userEvent) {
        const timeDiff = Math.abs(userEvent.timestamp - correctEvent.timestamp);
        const maxAllowedDiff = activity.tolerance || 5; // 5 seconds tolerance
        
        if (timeDiff <= maxAllowedDiff) {
          score += 100 / totalEvents;
        } else if (timeDiff <= maxAllowedDiff * 2) {
          score += 50 / totalEvents; // Partial credit
        }
      }
    });
    
    return Math.round(score);
  };

  const submitTimeline = () => {
    const finalScore = calculateScore();
    onScore(finalScore, {
      userTimeline,
      correctTimeline: activity.correctTimeline,
      score: finalScore
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{activity.title}</h3>
        <div className="flex items-center gap-4">
          <div className="text-lg font-bold text-blue-600">
            Time: {Math.floor(currentTime / 60)}:{(currentTime % 60).toString().padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Timeline Controls */}
      <div className="bg-gray-100 rounded-lg p-4">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isPlaying ? 'Pause' : 'Play'} Timeline
          </button>
          
          <button
            onClick={() => {
              setCurrentTime(0);
              setIsPlaying(false);
              setUserTimeline([]);
            }}
            className="flex items-center gap-2 px-3 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
            style={{ width: `${(currentTime / activity.duration) * 100}%` }}
          />
        </div>

        {/* Current Events */}
        <div className="text-sm text-gray-600">
          Current scenario: {activity.scenario}
        </div>
      </div>

      {/* Available Events */}
      <div>
        <h4 className="font-medium mb-2">Available Interventions:</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {activity.events.map((event: any) => (
            <button
              key={event.id}
              onClick={() => addEventToTimeline(event)}
              disabled={!isPlaying}
              className="p-3 text-left border rounded hover:bg-blue-50 hover:border-blue-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="font-medium text-sm">{event.name}</div>
              <div className="text-xs text-gray-600">{event.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* User Timeline */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-medium">Your Timeline:</h4>
          {userTimeline.length > 0 && (
            <button
              onClick={submitTimeline}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            >
              <Check className="w-4 h-4" />
              Submit Timeline
            </button>
          )}
        </div>
        
        <div className="bg-white border rounded-lg p-4 min-h-[100px]">
          {userTimeline.length === 0 ? (
            <div className="text-gray-500 text-center py-8">
              Play the timeline and add interventions as appropriate
            </div>
          ) : (
            <div className="space-y-2">
              {userTimeline.map((event, index) => (
                <div key={index} className="flex items-center gap-4 p-2 bg-blue-50 rounded">
                  <div className="flex items-center gap-2 text-blue-600">
                    <Clock className="w-4 h-4" />
                    <span className="font-mono text-sm">
                      {Math.floor(event.timestamp / 60)}:{(event.timestamp % 60).toString().padStart(2, '0')}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  <span className="font-medium">{event.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const H5PContent: React.FC<H5PContentProps> = ({ content, onComplete }) => {
  const [completed, setCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const handleActivityComplete = (score: number, details: any) => {
    setFinalScore(score);
    setCompleted(true);
    onComplete(score, details);
  };

  const renderActivity = () => {
    switch (content.type) {
      case 'drag-drop':
        return (
          <DragDropActivity
            activity={content.activity}
            onScore={handleActivityComplete}
          />
        );
      case 'timeline':
        return (
          <TimelineActivity
            activity={content.activity}
            onScore={handleActivityComplete}
          />
        );
      default:
        return (
          <div className="text-center py-8 text-gray-500">
            Activity type "{content.type}" not yet implemented
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6">
        <h2 className="text-2xl font-bold mb-2">{content.title}</h2>
        <p className="text-purple-100">{content.description}</p>
        <div className="mt-4 flex items-center gap-4 text-sm">
          <span>Max Points: {content.scoring.maxPoints}</span>
          <span>Passing Score: {content.scoring.passingScore}%</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {renderActivity()}
      </div>

      {/* Results */}
      {completed && (
        <div className="border-t bg-gray-50 p-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {finalScore}%
            </div>
            <div className="text-lg text-gray-700">
              {finalScore >= content.scoring.passingScore ? (
                <span className="text-green-600">🎉 Excellent work!</span>
              ) : (
                <span className="text-yellow-600">Keep practicing!</span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default H5PContent;
