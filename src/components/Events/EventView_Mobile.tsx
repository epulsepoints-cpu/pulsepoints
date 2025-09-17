import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Lock, CheckCircle, Play, Star, Clock, 
  Target, Trophy, Calendar, Zap, BookOpen
} from 'lucide-react';
import { SimpleEvent, SimpleDay, SimpleTask } from '../../types/simpleEventTypes';
import { simpleEventsService } from '../../services/simpleEventsService';

interface EventViewProps {
  eventId: string;
  onBack: () => void;
  onStartTask: (taskId: string, taskType: string) => void;
}

export const EventView: React.FC<EventViewProps> = ({ 
  eventId, 
  onBack, 
  onStartTask 
}) => {
  const [event, setEvent] = useState<SimpleEvent | null>(null);
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEvent();
  }, [eventId]);

  const loadEvent = () => {
    try {
      setLoading(true);
      const eventData = simpleEventsService.getEvent(eventId);
      if (eventData) {
        setEvent(eventData);
        // Auto-select the next available day
        const nextDay = eventData.days.find(day => !day.completed)?.dayNumber || 1;
        setSelectedDay(nextDay);
      }
    } catch (error) {
      console.error('Failed to load event:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!event) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 mb-4">Event not found.</p>
        <button
          onClick={onBack}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  const getSelectedDayData = (): SimpleDay | null => {
    return event.days.find(day => day.dayNumber === selectedDay) || null;
  };

  const calculateEventProgress = () => {
    const completedDays = event.days.filter(day => day.completed).length;
    const totalDays = event.totalDays;
    const percentage = Math.round((completedDays / totalDays) * 100);
    
    return { completedDays, totalDays, percentage };
  };

  const getDifficultyColor = (difficulty: string): string => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'hard': return 'text-orange-600 bg-orange-100';
      case 'expert': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTaskIcon = (taskType: string) => {
    switch (taskType) {
      case 'ecg-quiz': return BookOpen;
      case 'rhythm-recognition': return Zap;
      case 'clinical-scenario': return Target;
      default: return BookOpen;
    }
  };

  const selectedDayData = getSelectedDayData();
  const progress = calculateEventProgress();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Mobile-first full-width layout */}
      
      {/* Event Header - Full Width */}
      <div className={`${event.theme.gradient} text-white`}>
        <div className="p-4">
          {/* Event Info */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-xl font-bold mb-1">{event.title}</h1>
              <p className="text-sm opacity-90 mb-2">{event.subtitle}</p>
              <p className="text-sm opacity-80 line-clamp-2">{event.description}</p>
            </div>
            <div className="text-right ml-3">
              <div className="text-sm opacity-75">Day {selectedDay}</div>
              <div className="text-xs opacity-75">{event.totalDays} total</div>
            </div>
          </div>
          
          {/* Progress bar */}
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span>Overall Progress</span>
              <span>{progress.percentage}%</span>
            </div>
            <div className="w-full bg-white bg-opacity-30 rounded-full h-2">
              <div 
                className="bg-white h-full rounded-full transition-all duration-1000"
                style={{ width: `${progress.percentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Days Sidebar - Mobile: Horizontal scroll */}
        <div className="lg:w-80 bg-white border-b lg:border-r lg:border-b-0 border-gray-200">
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              Event Days
            </h2>
            
            {/* Mobile: Horizontal scroll, Desktop: Vertical stack */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
              {event.days.map((day) => {
                const completedTasks = day.tasks.filter(task => task.completed).length;
                const totalTasks = day.tasks.length;
                const dayProgress = Math.round((completedTasks / totalTasks) * 100);
                
                return (
                  <motion.button
                    key={day.id}
                    onClick={() => setSelectedDay(day.dayNumber)}
                    className={`
                      flex-shrink-0 lg:flex-shrink lg:w-full p-3 rounded-lg border-2 transition-all text-left min-w-[120px] lg:min-w-0
                      ${selectedDay === day.dayNumber
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : day.unlocked
                          ? 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                          : 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed'
                      }
                    `}
                    disabled={!day.unlocked}
                    whileHover={day.unlocked ? { scale: 1.02 } : {}}
                    whileTap={day.unlocked ? { scale: 0.98 } : {}}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-sm">Day {day.dayNumber}</span>
                      {!day.unlocked && <Lock className="w-3 h-3" />}
                      {day.completed && <CheckCircle className="w-3 h-3 text-green-500" />}
                    </div>
                    <div className="text-xs mb-2 line-clamp-1">{day.title}</div>
                    
                    {/* Progress bar */}
                    <div className="w-full bg-gray-200 rounded-full h-1">
                      <div 
                        className="bg-blue-500 h-full rounded-full transition-all"
                        style={{ width: `${dayProgress}%` }}
                      />
                    </div>
                    <div className="text-xs mt-1 text-gray-600">
                      {completedTasks}/{totalTasks} tasks
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4">
          {selectedDayData ? (
            <motion.div
              key={selectedDayData.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Day Header */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">{selectedDayData.title}</h2>
                <p className="text-gray-600 mb-4">{selectedDayData.description}</p>
                
                {/* Day Progress */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Day Progress</span>
                    <span className="text-sm font-bold text-gray-800">
                      {selectedDayData.tasks.filter(t => t.completed).length}/{selectedDayData.tasks.length} tasks
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-full rounded-full ${event.theme.gradient}`}
                      style={{ 
                        width: `${Math.round((selectedDayData.tasks.filter(t => t.completed).length / selectedDayData.tasks.length) * 100)}%` 
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Tasks Grid */}
              <div className="space-y-4">
                {selectedDayData.tasks.map((task, index) => {
                  const TaskIcon = getTaskIcon(task.type);
                  
                  return (
                    <motion.div
                      key={task.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`
                        bg-white rounded-lg shadow-sm border-2 transition-all cursor-pointer
                        ${task.completed 
                          ? 'border-green-200 bg-green-50' 
                          : task.unlocked
                            ? 'border-gray-200 hover:border-blue-300 hover:shadow-md'
                            : 'border-gray-100 bg-gray-50 cursor-not-allowed'
                        }
                      `}
                      onClick={() => task.unlocked && onStartTask(task.id, task.type)}
                      whileHover={task.unlocked ? { scale: 1.01 } : {}}
                      whileTap={task.unlocked ? { scale: 0.99 } : {}}
                    >
                      <div className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3 flex-1">
                            <div className={`
                              p-2 rounded-lg 
                              ${task.completed 
                                ? 'bg-green-100 text-green-600'
                                : task.unlocked
                                  ? 'bg-blue-100 text-blue-600'
                                  : 'bg-gray-100 text-gray-400'
                              }
                            `}>
                              <TaskIcon className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-base mb-1">{task.title}</h3>
                              <p className="text-gray-600 text-sm line-clamp-2">{task.description}</p>
                            </div>
                          </div>
                          
                          <div className="flex flex-col items-end gap-1">
                            {!task.unlocked && <Lock className="w-4 h-4 text-gray-400" />}
                            {task.completed && <CheckCircle className="w-4 h-4 text-green-500" />}
                            
                            <span className={`
                              px-2 py-1 text-xs font-medium rounded-full
                              ${getDifficultyColor(task.difficulty)}
                            `}>
                              {task.difficulty}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              <span>{task.estimatedTime} min</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-3 h-3" />
                              <span>+{task.rewards.xp} XP</span>
                            </div>
                          </div>
                          
                          {task.unlocked && !task.completed && (
                            <div className="flex items-center gap-1 text-blue-600 text-sm font-medium">
                              <Play className="w-3 h-3" />
                              <span>Start</span>
                            </div>
                          )}
                          
                          {task.completed && (
                            <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                              <Trophy className="w-3 h-3" />
                              <span>Complete</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">Select a day to view tasks</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventView;
