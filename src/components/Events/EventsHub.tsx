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
        {/* Welcome Header - Compact for Mobile */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3"
        >
          <div className="flex items-center justify-between">
            {/* Navigation and Title */}
            <div className="flex items-center flex-1">
              {onBack && (
                <button
                  onClick={onBack}
                  className="flex items-center justify-center w-7 h-7 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors mr-2"
                >
                  <ArrowLeft className="w-3 h-3" />
                </button>
              )}
              <div>
                <h1 className="text-base sm:text-lg font-bold mb-0.5">
                  ECG Events Hub
                </h1>
                <p className="text-blue-100 text-xs">
                  Master ECG interpretation
                </p>
              </div>
            </div>
            
            {/* Compact stats for mobile */}
            <div className="text-right">
              <div className="flex items-center gap-1 text-sm font-medium">
                <Star className="w-3 h-3 text-yellow-300" />
                <span>{userStats.totalXP} XP</span>
              </div>
              <div className="text-xs text-blue-200">
                {userStats.eventsCompleted} events
              </div>
            </div>
          </div>
        </motion.div>

        {/* Events Grid - Full Width with no padding */}
        <div className="space-y-2">
          {events.map((event, index) => {
            const progress = calculateEventProgress(event);
            const isLocked = !event.unlocked || event.isUpcoming;
            
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`
                  relative bg-white rounded-none shadow-lg overflow-hidden 
                  transform transition-all duration-300 
                  border-b-2 border-opacity-30
                  ${isLocked 
                    ? 'opacity-75 cursor-not-allowed' 
                    : 'cursor-pointer hover:scale-[1.01] hover:shadow-xl'
                  }
                `}
                style={{ borderColor: event.theme.primary }}
                onClick={() => {
                  if (isLocked) {
                    // Show detailed coming soon information for locked events
                    import('@/components/ui/use-toast').then(({ toast }) => {
                      if (event.isUpcoming) {
                        // Special detailed toast for upcoming events
                        toast({
                          title: `� ${event.title} - Coming Soon!`,
                          description: (
                            <div className="space-y-2">
                              <p>{event.previewDescription || event.description}</p>
                              <div className="text-sm">
                                <p className="font-semibold">📅 Release Date: {new Date(event.releaseDate || '').toLocaleDateString()}</p>
                                <p className="font-semibold">⏱️ Duration: {event.totalDays} days</p>
                                <p className="font-semibold">🎯 Difficulty: Expert Level</p>
                              </div>
                              {event.features && (
                                <div className="text-sm">
                                  <p className="font-semibold mb-1">✨ Features:</p>
                                  <ul className="space-y-0.5">
                                    {event.features.slice(0, 3).map((feature, idx) => (
                                      <li key={idx}>• {feature}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                              <p className="text-xs text-gray-600 mt-2">Stay tuned for this exciting challenge! 🎉</p>
                            </div>
                          ),
                          duration: 6000,
                        });
                      } else {
                        // Standard locked event toast
                        toast({
                          title: "🔒 Event Locked",
                          description: `${event.title} is currently locked. Complete other events to unlock this challenge!`,
                          duration: 4000,
                        });
                      }
                    });
                  } else {
                    onNavigateToEvent(event.id);
                  }
                }}
              >
                {/* Notification badge for upcoming events */}
                {event.isUpcoming && (
                  <div className="absolute top-2 right-2 z-30">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg"
                    >
                      Coming Soon
                    </motion.div>
                  </div>
                )}

                {/* Lock overlay for upcoming/locked events */}
                {isLocked && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-gray-900 bg-opacity-20 z-20 flex items-center justify-center"
                  >
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="bg-white bg-opacity-95 rounded-lg p-3 m-4 text-center shadow-lg backdrop-blur-sm"
                    >
                      <motion.div
                        animate={{ 
                          rotate: [0, -5, 5, -5, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3
                        }}
                      >
                        <Lock className="w-6 h-6 text-gray-500 mx-auto mb-2" />
                      </motion.div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">
                        {event.isUpcoming ? '🚀 Coming Soon' : '🔒 Locked'}
                      </p>
                      {event.isUpcoming && event.releaseDate && (
                        <p className="text-xs text-gray-600">
                          Available: {new Date(event.releaseDate).toLocaleDateString()}
                        </p>
                      )}
                      <p className="text-xs text-blue-600 mt-1 font-medium">
                        Tap to learn more
                      </p>
                    </motion.div>
                  </motion.div>
                )}

                {/* Event Header - Extra Compact for mobile */}
                <div className={`${event.theme.gradient} p-2 text-white relative overflow-hidden ${isLocked ? 'opacity-75' : ''}`}>
                  <div className="absolute top-0 right-0 text-2xl opacity-10 transform translate-x-1 -translate-y-1">
                    {event.badgeIcon}
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-sm font-bold mb-0.5 leading-tight">{event.title}</h3>
                        <p className="text-xs opacity-90 mb-0.5">{event.subtitle}</p>
                      </div>
                      <div className="text-right ml-2">
                        <div className="text-xs opacity-75">{event.totalDays} Days</div>
                        <div className="text-xs opacity-75">{event.tasksPerDay}/Day</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Section - Extra Compact */}
                <div className={`p-2 ${isLocked ? 'opacity-75' : ''}`}>
                  {isLocked && event.isUpcoming ? (
                    /* Coming Soon Preview */
                    <div className="mb-1.5">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-medium text-gray-600">Coming Soon</span>
                        <span className="text-xs font-bold text-orange-600">
                          {event.releaseDate && new Date(event.releaseDate).toLocaleDateString()}
                        </span>
                      </div>
                      
                      {/* Preview features */}
                      {event.features && (
                        <div className="mb-2">
                          <p className="text-xs text-gray-600 mb-1">What to expect:</p>
                          <div className="space-y-0.5">
                            {event.features.slice(0, 3).map((feature, idx) => (
                              <div key={idx} className="text-xs text-gray-500 flex items-center">
                                <span className="mr-1">•</span>
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Locked progress bar */}
                      <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                        <div className="h-full bg-gray-300 w-0 rounded-full" />
                      </div>
                      <div className="text-center mt-1">
                        <span className="text-xs font-bold text-gray-400">Locked</span>
                      </div>
                    </div>
                  ) : (
                    /* Normal progress for unlocked events */
                    <div className="mb-1.5">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-medium text-gray-600">Progress</span>
                        <span className="text-xs font-bold text-gray-800">
                          {progress.completedDays}/{progress.totalDays} Days
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${progress.percentage}%` }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          className={`h-full rounded-full ${event.theme.gradient}`}
                        />
                      </div>
                      <div className="text-center mt-1">
                        <span className="text-xs font-bold" style={{ color: event.theme.primary }}>
                          {progress.percentage}%
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Compact description */}
                  <p className="text-gray-600 text-xs mb-1.5 line-clamp-2">
                    {isLocked && event.previewDescription ? event.previewDescription : event.description}
                  </p>

                  {/* Extra compact rewards */}
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500 text-xs">⚡</span>
                        <span className="text-xs text-gray-600">+{event.rewards.daily.xp}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-green-500 text-xs">💎</span>
                        <span className="text-xs text-gray-600">+{event.rewards.daily.gems}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-red-500 text-xs">❤️</span>
                        <span className="text-xs text-gray-600">+{event.rewards.daily.hearts}</span>
                      </div>
                    </div>
                    
                    {/* Action indicator - smaller */}
                    <div 
                      className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                        isLocked 
                          ? 'bg-gray-400 text-white cursor-not-allowed' 
                          : 'text-white'
                      }`}
                      style={{ 
                        backgroundColor: isLocked ? '#9CA3AF' : event.theme.primary 
                      }}
                    >
                      {isLocked ? (
                        <>
                          <Lock className="w-3 h-3" />
                          <span>{event.isUpcoming ? 'Soon' : 'Locked'}</span>
                        </>
                      ) : progress.percentage === 100 ? (
                        <>
                          <Trophy className="w-3 h-3" />
                          <span>Done</span>
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

        {/* Guest Mode Notice - Extra Compact */}
        {!user && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-blue-50 border-t border-blue-200 p-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-blue-800 mb-0.5">
                  🎯 Sign In to Save Progress
                </h3>
                <p className="text-blue-600 text-xs">
                  Save progress across devices and compete!
                </p>
              </div>
              {onShowLogin && (
                <button
                  onClick={onShowLogin}
                  className="flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs ml-2 flex-shrink-0"
                >
                  <LogIn className="w-3 h-3" />
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
