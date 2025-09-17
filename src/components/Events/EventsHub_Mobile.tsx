import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, Trophy, Lock, Star, Calendar, Target, 
  Award, Gift, LogIn, UserPlus, ArrowLeft, Zap 
} from 'lucide-react';
import { SimpleEvent } from '../../types/simpleEventTypes';
import { simpleEventsService } from '../../services/simpleEventsService';
import { useAuth } from '../../hooks/useAuth';

interface EventsHubProps {
  onNavigateToEvent: (eventId: string) => void;
  onShowLogin?: () => void;
  onBack?: () => void;
}

export const EventsHub: React.FC<EventsHubProps> = ({ 
  onNavigateToEvent, 
  onShowLogin, 
  onBack 
}) => {
  const { user } = useAuth();
  const [events, setEvents] = useState<SimpleEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [userStats, setUserStats] = useState(simpleEventsService.getUserStats());

  useEffect(() => {
    loadEvents();
  }, [user]);

  const loadEvents = async () => {
    try {
      setLoading(true);
      const eventsData = await simpleEventsService.getEvents();
      setEvents(eventsData);
      setUserStats(simpleEventsService.getUserStats());
    } catch (error) {
      console.error('Failed to load events:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateEventProgress = (event: SimpleEvent) => {
    const completedTasks = event.days.reduce((total, day) => 
      total + day.tasks.filter(task => task.completed).length, 0
    );
    const totalTasks = event.days.reduce((total, day) => total + day.tasks.length, 0);
    const completedDays = event.days.filter(day => 
      day.tasks.every(task => task.completed)
    ).length;
    
    const percentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    const nextDay = Math.min(completedDays + 1, event.totalDays);

    return { 
      percentage, 
      completedDays, 
      totalDays: event.totalDays,
      nextDay 
    };
  };

  const formatTimeSpent = (minutes: number): string => {
    if (minutes < 60) return `${minutes}m`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Mobile-optimized full-width layout */}
      <div className="w-full">
        {/* Welcome Header - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl font-bold mb-1">
                ECG Events Hub
              </h1>
              <p className="text-blue-100 text-sm">
                Master ECG interpretation
              </p>
            </div>
            
            {/* Compact stats for mobile */}
            <div className="text-right">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Star className="w-4 h-4 text-yellow-300" />
                <span>{userStats.totalXP} XP</span>
              </div>
              <div className="text-xs text-blue-200">
                {userStats.eventsCompleted} events completed
              </div>
            </div>
          </div>
        </motion.div>

        {/* Events Grid - Full Width with minimal padding */}
        <div className="p-3 space-y-4">
          {events.map((event, index) => {
            const progress = calculateEventProgress(event);
            
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`
                  relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer
                  transform transition-all duration-300 hover:scale-[1.01] hover:shadow-xl
                  border-2 border-opacity-30
                `}
                style={{ borderColor: event.theme.primary }}
                onClick={() => onNavigateToEvent(event.id)}
              >
                {/* Event Header - Compact for mobile */}
                <div className={`${event.theme.gradient} p-4 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 text-4xl opacity-20 transform translate-x-2 -translate-y-1">
                    {event.badgeIcon}
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-1">{event.title}</h3>
                        <p className="text-sm opacity-90 mb-2">{event.subtitle}</p>
                      </div>
                      <div className="text-right ml-3">
                        <div className="text-xs opacity-75">{event.totalDays} Days</div>
                        <div className="text-xs opacity-75">{event.tasksPerDay} Tasks/Day</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Section - Compact */}
                <div className="p-4">
                  <div className="mb-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600">Progress</span>
                      <span className="text-sm font-bold text-gray-800">
                        {progress.completedDays}/{progress.totalDays} Days
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress.percentage}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className={`h-full rounded-full ${event.theme.gradient}`}
                      />
                    </div>
                    <div className="text-center mt-1">
                      <span className="text-sm font-bold" style={{ color: event.theme.primary }}>
                        {progress.percentage}%
                      </span>
                    </div>
                  </div>

                  {/* Compact description */}
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {event.description}
                  </p>

                  {/* Compact rewards */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500 text-sm">⚡</span>
                        <span className="text-xs text-gray-600">+{event.rewards.daily.xp}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-green-500 text-sm">💎</span>
                        <span className="text-xs text-gray-600">+{event.rewards.daily.gems}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-red-500 text-sm">❤️</span>
                        <span className="text-xs text-gray-600">+{event.rewards.daily.hearts}</span>
                      </div>
                    </div>
                    
                    {/* Action indicator */}
                    <div 
                      className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-white"
                      style={{ backgroundColor: event.theme.primary }}
                    >
                      {progress.percentage === 100 ? (
                        <>
                          <Trophy className="w-3 h-3" />
                          <span>Complete</span>
                        </>
                      ) : (
                        <>
                          <span>Day {progress.nextDay}</span>
                          <ChevronRight className="w-3 h-3" />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Guest Mode Notice - Compact */}
        {!user && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="m-3 bg-blue-50 border border-blue-200 rounded-lg p-4"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-base font-semibold text-blue-800 mb-1">
                  🎯 Sign In to Save Progress
                </h3>
                <p className="text-blue-600 text-sm">
                  Save progress across devices and compete!
                </p>
              </div>
              {onShowLogin && (
                <button
                  onClick={onShowLogin}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm ml-3 flex-shrink-0"
                >
                  <LogIn className="w-4 h-4" />
                  Sign In
                </button>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default EventsHub;
