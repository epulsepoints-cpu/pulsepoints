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
      const eventsData = simpleEventsService.getEvents();
      setEvents(eventsData);
      setUserStats(simpleEventsService.getUserStats());
    } catch (error) {
      console.error('Failed to load events:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateEventProgress = (event: SimpleEvent): { 
    percentage: number; 
    completedDays: number; 
    totalDays: number;
    nextDay: number;
  } => {
    const progress = event.userProgress;
    if (!progress) {
      return { percentage: 0, completedDays: 0, totalDays: event.totalDays, nextDay: 1 };
    }

    const completedDays = progress.completedDays.length;
    const percentage = Math.round((completedDays / event.totalDays) * 100);
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
                {userStats.completedTasks}/{userStats.totalTasks} tasks
              </div>
            </div>
          </div>
        </motion.div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{userStats.eventsCompleted}</div>
              <div className="text-sm text-gray-600">Events Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{userStats.tasksCompleted}</div>
              <div className="text-sm text-gray-600">Tasks Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{userStats.averageScore}%</div>
              <div className="text-sm text-gray-600">Average Score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{formatTimeSpent(userStats.totalTimeSpent)}</div>
              <div className="text-sm text-gray-600">Time Studied</div>
            </div>
          </div>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, index) => {
            const progress = calculateEventProgress(event);
            
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`
                  relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer
                  transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
                  ${event.theme.borderClass}
                `}
                onClick={() => onNavigateToEvent(event.id)}
              >
                {/* Event Header */}
                <div className={`${event.theme.gradient} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 text-6xl opacity-20 transform translate-x-4 -translate-y-2">
                    {event.badgeIcon}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                    <p className="text-sm opacity-90 mb-3">{event.subtitle}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{event.totalDays} Days</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="w-4 h-4" />
                        <span className="text-sm">{event.tasksPerDay} Tasks/Day</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Section */}
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600">Progress</span>
                      <span className="text-sm font-bold text-gray-800">
                        {progress.completedDays}/{progress.totalDays} Days
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress.percentage}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className={`h-full rounded-full ${event.theme.gradient}`}
                      />
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-lg font-bold" style={{ color: event.theme.primary }}>
                        {progress.percentage}%
                      </span>
                    </div>
                  </div>

                  {/* Event Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  {/* Rewards */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-yellow-500 text-lg">⚡</div>
                      <div className="text-xs text-gray-600">+{event.rewards.daily.xp} XP</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-500 text-lg">💎</div>
                      <div className="text-xs text-gray-600">+{event.rewards.daily.gems} Gems</div>
                    </div>
                    <div className="text-center">
                      <div className="text-red-500 text-lg">❤️</div>
                      <div className="text-xs text-gray-600">+{event.rewards.daily.hearts} Hearts</div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center justify-between">
                    {progress.percentage === 100 ? (
                      <div className="flex items-center gap-2 text-green-600">
                        <Trophy className="w-4 h-4" />
                        <span className="text-sm font-medium">Completed!</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-gray-600">
                        <span className="text-sm">Next: Day {progress.nextDay}</span>
                      </div>
                    )}
                    
                    <div className={`
                      flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium
                      ${event.theme.textClass} bg-opacity-10
                    `}
                    style={{ backgroundColor: `${event.theme.primary}20` }}
                    >
                      <span>Enter</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Guest Mode Notice */}
        {!user && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  🎯 Unlock Full Potential
                </h3>
                <p className="text-blue-600 mb-4">
                  Sign in to save your progress across devices and compete with other medical professionals!
                </p>
              </div>
              {onShowLogin && (
                <button
                  onClick={onShowLogin}
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  Sign In
                </button>
              )}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default EventsHub;
