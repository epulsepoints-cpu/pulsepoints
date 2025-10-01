import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, Trophy, Lock, Star, Calendar, Target, 
  Award, Gift, LogIn, UserPlus, ArrowLeft, Zap, Clock 
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Mobile-optimized full-width layout */}
      <div className="w-full">
        {/* Enhanced Welcome Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-black bg-opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative z-10 p-4 sm:p-6">
            <div className="flex items-center justify-between">
              {/* Navigation and Title */}
              <div className="flex items-center flex-1">
                {onBack && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onBack}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 mr-3 backdrop-blur-sm"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </motion.button>
                )}
                <div>
                  <motion.h1 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl sm:text-2xl font-bold mb-1 flex items-center gap-2"
                  >
                    <Calendar className="w-6 h-6 text-yellow-300" />
                    ECG Events Hub
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-blue-100 text-sm sm:text-base font-medium"
                  >
                    Master ECG interpretation through challenges
                  </motion.p>
                </div>
              </div>
              
              {/* Enhanced stats for mobile */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="text-right bg-white bg-opacity-15 rounded-lg p-3 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 text-base font-bold mb-1">
                  <Star className="w-4 h-4 text-yellow-300" />
                  <span>{userStats.totalXP.toLocaleString()}</span>
                  <span className="text-xs font-normal opacity-75">XP</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-200">
                  <Trophy className="w-3 h-3" />
                  <span>{userStats.eventsCompleted} events completed</span>
                </div>
              </motion.div>
            </div>

            {/* Quick Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-4 flex items-center justify-between bg-white bg-opacity-15 rounded-lg p-3 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Target className="w-4 h-4 text-green-300" />
                  <span className="font-medium">{events.filter(e => !e.isUpcoming && e.unlocked).length}</span>
                  <span className="opacity-75">Available</span>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="w-4 h-4 text-orange-300" />
                  <span className="font-medium">{events.filter(e => e.isUpcoming).length}</span>
                  <span className="opacity-75">Coming Soon</span>
                </div>
              </div>
              <div className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded-full">
                Weekly Challenges
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Events Grid - Professional Layout */}
        <div className="p-4 space-y-4">
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
                  group relative bg-white rounded-2xl shadow-md overflow-hidden 
                  transform transition-all duration-300 hover:shadow-xl
                  border border-gray-100
                  ${isLocked 
                    ? 'opacity-90 cursor-not-allowed' 
                    : 'cursor-pointer hover:scale-[1.02] hover:-translate-y-1'
                  }
                `}
                onClick={() => {
                  if (isLocked) {
                    // Show detailed coming soon information for locked events
                    import('@/components/ui/use-toast').then(({ toast }) => {
                      if (event.isUpcoming) {
                        // Special detailed toast for upcoming events
                        toast({
                          title: `🚀 ${event.title} - Coming Soon!`,
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
                {/* Status Badge */}
                {event.isUpcoming && (
                  <div className="absolute top-4 right-4 z-30">
                    <motion.div
                      initial={{ scale: 0, rotate: -12 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        delay: 0.3 + index * 0.1,
                        type: "spring",
                        stiffness: 200 
                      }}
                      className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-lg flex items-center gap-1"
                    >
                      <Zap className="w-3 h-3" />
                      Coming Soon
                    </motion.div>
                  </div>
                )}

                {/* Enhanced Header Section */}
                <div className={`${event.theme.gradient} relative overflow-hidden ${isLocked ? 'opacity-75' : ''}`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-black bg-opacity-5">
                    <div className="absolute top-0 right-0 text-6xl opacity-10 transform translate-x-4 -translate-y-2">
                      {event.badgeIcon}
                    </div>
                  </div>
                  
                  <div className="relative z-10 p-5">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <motion.h3 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                          className="text-lg font-bold mb-2 text-white leading-tight"
                        >
                          {event.title}
                        </motion.h3>
                        <motion.p 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          className="text-sm text-white text-opacity-90 mb-3 font-medium"
                        >
                          {event.subtitle}
                        </motion.p>
                        
                        {/* Duration and Tasks Info */}
                        <div className="flex items-center gap-4 text-white text-opacity-75">
                          <div className="flex items-center gap-1 bg-white bg-opacity-15 px-2 py-1 rounded-md">
                            <Calendar className="w-3 h-3" />
                            <span className="text-xs font-medium">{event.totalDays} Days</span>
                          </div>
                          <div className="flex items-center gap-1 bg-white bg-opacity-15 px-2 py-1 rounded-md">
                            <Target className="w-3 h-3" />
                            <span className="text-xs font-medium">{event.tasksPerDay} Tasks/Day</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Content Section */}
                <div className={`p-5 ${isLocked ? 'opacity-75' : ''}`}>
                  {isLocked && event.isUpcoming ? (
                    /* Enhanced Coming Soon Preview */
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                          <Clock className="w-4 h-4 text-orange-500" />
                          Coming Soon
                        </span>
                        <span className="text-sm font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                          {event.releaseDate && new Date(event.releaseDate).toLocaleDateString()}
                        </span>
                      </div>
                      
                      {/* Preview features */}
                      {event.features && (
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500" />
                            What to expect:
                          </p>
                          <div className="space-y-1">
                            {event.features.slice(0, 3).map((feature, idx) => (
                              <div key={idx} className="text-sm text-gray-600 flex items-center">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Locked progress bar */}
                      <div className="space-y-2">
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div className="h-full bg-gray-300 w-0 rounded-full" />
                        </div>
                        <div className="text-center">
                          <span className="text-sm font-bold text-gray-400">🔒 Locked - Stay Tuned!</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Enhanced progress for unlocked events */
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                          <Trophy className="w-4 h-4 text-blue-500" />
                          Progress
                        </span>
                        <span className="text-sm font-bold text-gray-800 bg-blue-50 px-3 py-1 rounded-full">
                          {progress.completedDays}/{progress.totalDays} Days
                        </span>
                      </div>
                      
                      {/* Enhanced Progress Bar */}
                      <div className="space-y-2">
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progress.percentage}%` }}
                            transition={{ 
                              duration: 1.2, 
                              delay: 0.5 + index * 0.1,
                              ease: "easeOut"
                            }}
                            className={`h-full rounded-full ${event.theme.gradient} shadow-sm relative overflow-hidden`}
                          >
                            <div className="absolute inset-0 bg-white bg-opacity-20 animate-pulse" />
                          </motion.div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">
                            {progress.completedDays * event.tasksPerDay} tasks completed
                          </span>
                          <span className="text-sm font-bold" style={{ color: event.theme.primary }}>
                            {progress.percentage}% Complete
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Enhanced description */}
                  <div className="mt-4">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {isLocked && event.previewDescription ? event.previewDescription : event.description}
                    </p>
                  </div>

                  {/* Enhanced rewards section */}
                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1.5 bg-yellow-50 px-3 py-2 rounded-lg">
                        <span className="text-yellow-600 text-sm">⚡</span>
                        <span className="text-sm font-semibold text-yellow-700">+{event.rewards.daily.xp}</span>
                        <span className="text-xs text-yellow-600">XP</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-green-50 px-3 py-2 rounded-lg">
                        <span className="text-green-600 text-sm">💎</span>
                        <span className="text-sm font-semibold text-green-700">+{event.rewards.daily.gems}</span>
                        <span className="text-xs text-green-600">gems</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-red-50 px-3 py-2 rounded-lg">
                        <span className="text-red-600 text-sm">❤️</span>
                        <span className="text-sm font-semibold text-red-700">+{event.rewards.daily.hearts}</span>
                        <span className="text-xs text-red-600">hearts</span>
                      </div>
                    </div>
                    
                    {/* Enhanced Action Button */}
                    <motion.div 
                      whileHover={{ scale: isLocked ? 1 : 1.05 }}
                      whileTap={{ scale: isLocked ? 1 : 0.95 }}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm shadow-md transition-all duration-200 ${
                        isLocked 
                          ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
                          : 'text-white shadow-lg'
                      }`}
                      style={{ 
                        backgroundColor: isLocked ? undefined : event.theme.primary,
                        boxShadow: isLocked ? undefined : `0 4px 12px ${event.theme.primary}30`
                      }}
                    >
                      {isLocked ? (
                        <>
                          <Lock className="w-4 h-4" />
                          <span>{event.isUpcoming ? 'Soon' : 'Locked'}</span>
                        </>
                      ) : progress.percentage === 100 ? (
                        <>
                          <Trophy className="w-4 h-4" />
                          <span>Completed</span>
                        </>
                      ) : (
                        <>
                          <span>Continue Day {progress.nextDay}</span>
                          <ChevronRight className="w-4 h-4" />
                        </>
                      )}
                    </motion.div>
                  </div>
                </div>

                {/* Lock overlay for upcoming/locked events - More Subtle */}
                {isLocked && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-gray-900 via-transparent to-gray-900 bg-opacity-5 z-10 pointer-events-none"
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Guest Mode Notice */}
        {!user && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="m-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-800">
                    🎯 Unlock Your Full Potential
                  </h3>
                </div>
                <p className="text-blue-700 text-sm leading-relaxed mb-3">
                  Sign in to save your progress, compete with others, and unlock exclusive rewards across all devices!
                </p>
                <div className="flex items-center gap-4 text-xs text-blue-600">
                  <div className="flex items-center gap-1">
                    <Trophy className="w-3 h-3" />
                    <span>Save Progress</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Target className="w-3 h-3" />
                    <span>Compete</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Gift className="w-3 h-3" />
                    <span>Earn Rewards</span>
                  </div>
                </div>
              </div>
              {onShowLogin && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onShowLogin}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg font-semibold ml-4 flex-shrink-0"
                >
                  <LogIn className="w-4 h-4" />
                  Sign In
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default EventsHub;
