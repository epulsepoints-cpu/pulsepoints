import React, { memo, useMemo, useState, useEffect, useRef, useCallback } from 'react';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Play, Lock, Heart } from 'lucide-react';
import { Lesson } from '@/types/learning';

interface VirtualLessonListProps {
  lessons: Lesson[];
  onLessonClick: (lesson: Lesson, index: number) => void;
  gameState: any;
  progress: any;
  moduleId: string;
  startIndex?: number;
}

interface LessonItemProps {
  lesson: Lesson;
  index: number;
  onLessonClick: (lesson: Lesson, index: number) => void;
  gameState: any;
  progress: any;
  moduleId: string;
  startIndex: number;
}

// Memoized lesson item component to prevent unnecessary re-renders
const LessonItem = memo(({ lesson, index, onLessonClick, gameState, progress, moduleId, startIndex }: LessonItemProps) => {
  if (!lesson) {
    return (
      <div className="p-4">
        <div className="animate-pulse bg-gray-200 h-20 rounded-lg"></div>
      </div>
    );
  }

  const actualIndex = startIndex + index;
  const lessonOrder = lesson.order || (actualIndex + 1);
  const completedLessons = progress?.completedLessons || 0;
  
  // Use proper progression-based unlocking
  const isCompleted = completedLessons >= lessonOrder;
  const isProgressionUnlocked = lessonOrder === 1 || completedLessons >= (lessonOrder - 1);
  const hasHearts = gameState.isGuestUser || (gameState.user?.hearts || 5) > 0;
  const isAvailable = isProgressionUnlocked && (gameState.isGuestUser || hasHearts || isCompleted);
  const isNext = completedLessons === lessonOrder - 1 && !isCompleted;
  const isLocked = !isAvailable;
  const isHeartLocked = isProgressionUnlocked && !gameState.isGuestUser && !hasHearts && !isCompleted;
  const isProgressLocked = !isProgressionUnlocked;

  const handleClick = () => {
    if (isAvailable) {
      onLessonClick(lesson, actualIndex);
    }
  };

  return (
    <div className="p-2">
      <div
        className={`
          p-4 rounded-lg border transition-all duration-200 cursor-pointer
          ${isAvailable ? 'hover:shadow-md hover:border-blue-300' : 'cursor-not-allowed opacity-60'}
          ${isCompleted ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'}
          ${isNext ? 'ring-2 ring-blue-400 ring-opacity-50' : ''}
        `}
        onClick={handleClick}
        style={{ height: '112px' }} // Fixed height for virtual scrolling
      >
        <div className="flex items-center gap-4">
          <div className={`
            w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold
            ${isCompleted ? 'bg-green-500 text-white' : 
              isNext ? 'bg-blue-500 text-white' : 
              isLocked ? 'bg-gray-300 text-gray-500' : 'bg-gray-100 text-gray-700'}
          `}>
            {isProgressLocked ? <Lock className="w-6 h-6 text-gray-400" /> :
             isCompleted ? <CheckCircle className="w-6 h-6" /> :
             isNext ? <Play className="w-6 h-6" /> :
             actualIndex + 1}
          </div>
          
          <div className="flex-1">
            <h4 className="font-bold text-gray-900 mb-1">{lesson.title}</h4>
            <p className="text-gray-600 text-sm mb-2 line-clamp-1">{lesson.description}</p>
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span>⏱️ {lesson.estimatedTime} min</span>
              <span>📖 {lesson.content?.sections?.length || 1} sections</span>
              {lesson.content?.slides && (
                <span>🖼️ {lesson.content.slides?.length || 0} slides</span>
              )}
            </div>
          </div>

          <div className="text-right">
            {isCompleted && (
              <div className="text-green-600 font-bold">
                ✓ Completed
              </div>
            )}
            {isNext && isAvailable && (
              <Badge className="bg-blue-500 text-white">
                Continue
              </Badge>
            )}
            {isHeartLocked && (
              <Badge className="bg-red-100 text-red-700">
                💔 No Hearts
              </Badge>
            )}
            {isProgressLocked && (
              <Badge className="bg-gray-100 text-gray-700">
                🔒 Locked
              </Badge>
            )}
            {!isCompleted && !isNext && isAvailable && (
              <Badge className="bg-gray-500 text-white">
                Start
              </Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

LessonItem.displayName = 'LessonItem';

// Virtual lesson list component with simple performance optimization
const VirtualLessonList = memo(({
  lessons,
  onLessonClick,
  gameState,
  progress,
  moduleId,
  startIndex = 0
}: VirtualLessonListProps) => {
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 10 });
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<number | null>(null);
  const ITEM_HEIGHT = 120;
  const VISIBLE_ITEMS = 8;
  const BUFFER_SIZE = 3;

  // Throttled scroll handler for Android performance
  const handleScroll = useCallback(() => {
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    scrollTimeoutRef.current = setTimeout(() => {
      if (!containerRef.current) return;
      
      const scrollTop = containerRef.current.scrollTop;
      const start = Math.floor(scrollTop / ITEM_HEIGHT);
      const end = Math.min(lessons.length, start + VISIBLE_ITEMS + BUFFER_SIZE);
      
      setVisibleRange({ start: Math.max(0, start - BUFFER_SIZE), end });
    }, 16); // ~60fps throttling
  }, [lessons.length, ITEM_HEIGHT, VISIBLE_ITEMS, BUFFER_SIZE]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Memoize the visible lessons to prevent unnecessary recalculations
  const visibleLessons = useMemo(() => {
    return lessons.slice(visibleRange.start, visibleRange.end).map((lesson, index) => ({
      lesson,
      originalIndex: visibleRange.start + index
    }));
  }, [lessons, visibleRange]);

  if (lessons.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading lessons...</p>
      </div>
    );
  }

  const totalHeight = lessons.length * ITEM_HEIGHT;
  const containerHeight = Math.min(totalHeight, VISIBLE_ITEMS * ITEM_HEIGHT);

  return (
    <div 
      ref={containerRef}
      className="virtual-lesson-container overflow-auto"
      style={{ 
        height: containerHeight,
        WebkitOverflowScrolling: 'touch', // iOS smooth scrolling
        transform: 'translateZ(0)', // Force hardware acceleration
        willChange: 'scroll-position' // Optimize for scrolling
      }}
      onScroll={handleScroll}
    >
      {/* Virtual spacer for items before visible range */}
      <div style={{ height: visibleRange.start * ITEM_HEIGHT }} />
      
      {/* Render only visible items */}
      <div className="space-y-2">
        {visibleLessons.map(({ lesson, originalIndex }) => (
          <LessonItem
            key={lesson.id}
            lesson={lesson}
            index={originalIndex}
            onLessonClick={onLessonClick}
            gameState={gameState}
            progress={progress}
            moduleId={moduleId}
            startIndex={startIndex}
          />
        ))}
      </div>
      
      {/* Virtual spacer for items after visible range */}
      <div style={{ height: (lessons.length - visibleRange.end) * ITEM_HEIGHT }} />
    </div>
  );
});

VirtualLessonList.displayName = 'VirtualLessonList';

export default VirtualLessonList;