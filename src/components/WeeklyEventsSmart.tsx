import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Trophy, Users, Star, Zap, Heart, Target } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { getCurrentActiveEvent, getUserEventProgress, initializeUserEventProgress } from '@/services/eventService';
import { WeeklyEvent, UserEventProgress } from '@/types/events';
import WeeklyEventsSimple from './WeeklyEventsSimple';

interface WeeklyEventsSmartProps {
  className?: string;
}

/**
 * Smart Weekly Events component that automatically detects if the system is set up
 * and switches between fallback and full UI accordingly
 */
const WeeklyEventsSmart: React.FC<WeeklyEventsSmartProps> = ({ className }) => {
  const { user } = useAuth();
  const [currentEvent, setCurrentEvent] = useState<WeeklyEvent | null>(null);
  const [userProgress, setUserProgress] = useState<UserEventProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const [systemReady, setSystemReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check if the events system is set up
  useEffect(() => {
    const checkSystemStatus = async () => {
      try {
        const event = await getCurrentActiveEvent();
        if (event) {
          setCurrentEvent(event);
          setSystemReady(true);
          
          // If user is authenticated, load their progress
          if (user?.uid) {
            let progress = await getUserEventProgress(user.uid, event.id);
            
            if (!progress) {
              // Initialize progress for new users
              await initializeUserEventProgress(user.uid, event.id);
              progress = await getUserEventProgress(user.uid, event.id);
            }
            
            setUserProgress(progress);
          }
        } else {
          setSystemReady(false);
        }
      } catch (err) {
        console.error('Error checking system status:', err);
        setSystemReady(false);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    checkSystemStatus();
  }, [user?.uid]);

  // If system is not ready, show the setup component
  if (!systemReady) {
    return <WeeklyEventsSimple className={className} />;
  }

  // If loading, show loading state
  if (loading) {
    return (
      <div className={`p-6 flex items-center justify-center min-h-[400px] ${className}`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Weekly Events...</p>
        </div>
      </div>
    );
  }

  // Calculate event progress
  const progressPercent = userProgress ? (userProgress.daysCompleted.length / 7) * 100 : 0;
  const completedDays = userProgress?.daysCompleted.length || 0;

  // Calculate time remaining
  const getTimeRemaining = () => {
    if (!currentEvent) return 'Loading...';
    
    const now = new Date();
    let endDate: Date;
    
    // Handle both Date objects and Firestore Timestamps
    if (currentEvent.endDate instanceof Date) {
      endDate = currentEvent.endDate;
    } else if (currentEvent.endDate && typeof currentEvent.endDate === 'object' && 'toDate' in currentEvent.endDate) {
      // Firestore Timestamp
      endDate = (currentEvent.endDate as any).toDate();
    } else {
      // Fallback - assume it's a string and parse it
      endDate = new Date(currentEvent.endDate);
    }
    
    const diff = endDate.getTime() - now.getTime();
    
    if (diff <= 0) return 'Event ended';
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    if (days > 0) return `${days}d ${hours}h`;
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  };

  // Get theme styling
  const getThemeStyles = () => {
    if (!currentEvent) return { gradient: 'from-gray-400 to-gray-600', iconColor: 'text-gray-500' };
    
    const themes = {
      'shock-zone': {
        gradient: 'from-red-500 via-orange-500 to-yellow-500',
        iconColor: 'text-red-500'
      },
      'pulse-racer': {
        gradient: 'from-purple-500 via-pink-500 to-red-500',
        iconColor: 'text-purple-500'
      },
      'code-blue-rush': {
        gradient: 'from-blue-600 via-blue-500 to-cyan-400',
        iconColor: 'text-blue-500'
      },
      'stemi-gauntlet': {
        gradient: 'from-green-600 via-emerald-500 to-teal-400',
        iconColor: 'text-green-500'
      }
    };
    
    return themes[currentEvent.theme] || themes['shock-zone'];
  };

  const themeStyles = getThemeStyles();

  return (
    <div className={`p-6 space-y-6 ${className}`}>
      {/* Event Header */}
      <div className={`border-2 border-gray-200 bg-gradient-to-r ${themeStyles.gradient} rounded-lg p-6 text-white`}>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2">
                {currentEvent?.title || 'Loading...'}
                <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-sm">
                  <Users className="w-3 h-3 mr-1 inline" />
                  {currentEvent?.participants || 0}
                </span>
              </h2>
              <p className="text-white/90 mt-1">{currentEvent?.description}</p>
            </div>
          </div>
          <button className="px-3 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded text-sm hover:bg-white/30 transition-colors">
            <Trophy className="w-4 h-4 mr-1 inline" />
            Leaderboard
          </button>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2 mt-4">
          <div className="flex justify-between text-sm">
            <span className="font-medium">Progress: {completedDays}/7 days</span>
            <span className="font-medium">{Math.round(progressPercent)}% Complete</span>
          </div>
          <div className="w-full bg-white/20 backdrop-blur-sm rounded-full h-3 border border-white/30">
            <div 
              className="bg-white h-3 rounded-full transition-all duration-500" 
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        {/* Event Countdown */}
        <div className="flex items-center justify-center gap-2 p-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 mt-4">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-medium">
            Event ends in: {getTimeRemaining()}
          </span>
        </div>
      </div>

      {/* Daily Challenges Grid */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Daily Challenges
        </h3>
        
        <div className="grid grid-cols-7 gap-2 md:gap-3">
          {currentEvent?.days.map((day, index) => {
            const isUnlocked = day.isUnlocked || index === 0 || (userProgress && userProgress.daysCompleted.includes(index));
            const isCompleted = userProgress?.daysCompleted.includes(day.dayNumber) || false;
            const isBoss = day.isBossChallenge;
            
            return (
              <div
                key={day.id}
                className={`
                  aspect-square rounded-lg border-2 p-2 flex flex-col items-center justify-center text-center cursor-pointer
                  transition-all duration-200 hover:scale-105
                  ${isCompleted 
                    ? 'border-green-300 bg-green-50 text-green-700' 
                    : isUnlocked
                    ? `border-blue-300 bg-blue-50 text-blue-700 ${isBoss ? 'ring-2 ring-yellow-400' : ''}` 
                    : 'border-gray-200 bg-gray-50 text-gray-400'
                  }
                `}
                onClick={() => {
                  if (isUnlocked && !isCompleted) {
                    alert(`Starting ${day.title}!\n\n${day.description}\n\nRewards: ${day.rewards.xp} XP, ${day.rewards.gems} gems`);
                  } else if (isCompleted) {
                    alert(`${day.title} completed! ✅`);
                  } else {
                    alert('This challenge is locked. Complete previous days first!');
                  }
                }}
              >
                <div className="text-lg font-bold mb-1 flex items-center gap-1">
                  {day.dayNumber}
                  {isBoss && <Star className="w-3 h-3 text-yellow-500" />}
                </div>
                <div className="text-xs flex items-center gap-1">
                  {isCompleted ? (
                    <>✅ Done</>
                  ) : isUnlocked ? (
                    <>
                      {day.type === 'quiz' && <Zap className="w-3 h-3" />}
                      {day.type === 'image_analysis' && <Target className="w-3 h-3" />}
                      {day.type === 'video' && <Heart className="w-3 h-3" />}
                      {day.type === 'practical' && <Trophy className="w-3 h-3" />}
                      {isBoss ? 'Boss' : 'Start'}
                    </>
                  ) : (
                    '🔒 Locked'
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Rewards Summary */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-medium text-yellow-900 mb-2 flex items-center gap-2">
          <Trophy className="w-5 h-5" />
          Event Rewards
        </h4>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-yellow-600">{currentEvent?.totalRewards.xp}</div>
            <div className="text-sm text-yellow-700">Total XP</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-yellow-600">{currentEvent?.totalRewards.gems}</div>
            <div className="text-sm text-yellow-700">Total Gems</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-yellow-600">{currentEvent?.totalRewards.badges.length}</div>
            <div className="text-sm text-yellow-700">Special Badges</div>
          </div>
        </div>
      </div>

      {/* Quick Action Message */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-medium text-blue-900 mb-2">� Ready to Challenge?</h4>
        <p className="text-sm text-blue-800">
          Jump into today's challenge! Complete daily tasks to unlock rewards, 
          climb the leaderboards, and master ECG skills. Your progress is automatically saved.
        </p>
      </div>
    </div>
  );
};

export default WeeklyEventsSmart;
