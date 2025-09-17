import { useState, useEffect, useCallback } from 'react';
import { 
  WeeklyEvent, 
  UserEventProgress,
  EventDay 
} from '@/types/events';
import { 
  getCurrentActiveEvent,
  getUserEventProgress,
  initializeUserEventProgress,
  completeDayProgress,
  completeBossChallenge,
  subscribeToCurrentEvent,
  subscribeToUserProgress
} from '@/services/eventService';
import { useAuth } from '@/hooks/useAuth';

interface UseWeeklyEventsReturn {
  currentEvent: WeeklyEvent | null;
  userProgress: UserEventProgress | null;
  loading: boolean;
  error: string | null;
  
  // Actions
  joinEvent: (eventId: string) => Promise<void>;
  completeDay: (dayNumber: number, xpEarned: number, gemsEarned: number, accuracy: number, timeSpent: number) => Promise<void>;
  completeBoss: (xpEarned: number, gemsEarned: number, specialBadge: string) => Promise<void>;
  
  // Computed properties
  progressPercent: number;
  completedDays: number;
  isEligibleForBoss: boolean;
  isDayUnlocked: (dayNumber: number) => boolean;
  isDayCompleted: (dayNumber: number) => boolean;
}

export const useWeeklyEvents = (): UseWeeklyEventsReturn => {
  const { user } = useAuth();
  const [currentEvent, setCurrentEvent] = useState<WeeklyEvent | null>(null);
  const [userProgress, setUserProgress] = useState<UserEventProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load initial data and set up subscriptions
  useEffect(() => {
    if (!user?.uid) {
      setLoading(false);
      return;
    }

    let eventUnsubscribe: () => void;
    let progressUnsubscribe: () => void;

    const loadData = async () => {
      try {
        setError(null);
        
        // Load current active event
        const event = await getCurrentActiveEvent();
        setCurrentEvent(event);

        if (event) {
          // Subscribe to event updates
          eventUnsubscribe = subscribeToCurrentEvent((updatedEvent) => {
            setCurrentEvent(updatedEvent);
          });

          // Load user progress
          const progress = await getUserEventProgress(user.uid, event.id);
          
          if (!progress) {
            // Initialize progress for new users
            await initializeUserEventProgress(user.uid, event.id);
            const newProgress = await getUserEventProgress(user.uid, event.id);
            setUserProgress(newProgress);
          } else {
            setUserProgress(progress);
          }

          // Subscribe to progress updates
          progressUnsubscribe = subscribeToUserProgress(user.uid, event.id, (updatedProgress) => {
            setUserProgress(updatedProgress);
          });
        }
      } catch (err) {
        console.error('Error loading weekly events data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load events');
      } finally {
        setLoading(false);
      }
    };

    loadData();

    // Cleanup subscriptions
    return () => {
      if (eventUnsubscribe) eventUnsubscribe();
      if (progressUnsubscribe) progressUnsubscribe();
    };
  }, [user?.uid]);

  // Join an event (initialize user progress)
  const joinEvent = useCallback(async (eventId: string) => {
    if (!user?.uid) throw new Error('User not authenticated');
    
    try {
      await initializeUserEventProgress(user.uid, eventId);
      const progress = await getUserEventProgress(user.uid, eventId);
      setUserProgress(progress);
    } catch (err) {
      console.error('Error joining event:', err);
      throw err;
    }
  }, [user?.uid]);

  // Complete a day
  const completeDay = useCallback(async (
    dayNumber: number, 
    xpEarned: number, 
    gemsEarned: number, 
    accuracy: number, 
    timeSpent: number
  ) => {
    if (!user?.uid || !currentEvent) throw new Error('User not authenticated or no active event');
    
    try {
      await completeDayProgress(user.uid, currentEvent.id, dayNumber, xpEarned, gemsEarned, accuracy, timeSpent);
      
      // Progress will be updated via subscription
    } catch (err) {
      console.error('Error completing day:', err);
      throw err;
    }
  }, [user?.uid, currentEvent]);

  // Complete boss challenge
  const completeBoss = useCallback(async (
    xpEarned: number, 
    gemsEarned: number, 
    specialBadge: string
  ) => {
    if (!user?.uid || !currentEvent) throw new Error('User not authenticated or no active event');
    
    try {
      await completeBossChallenge(user.uid, currentEvent.id, xpEarned, gemsEarned, specialBadge);
      
      // Progress will be updated via subscription
    } catch (err) {
      console.error('Error completing boss challenge:', err);
      throw err;
    }
  }, [user?.uid, currentEvent]);

  // Computed properties
  const progressPercent = userProgress ? (userProgress.daysCompleted.length / 7) * 100 : 0;
  const completedDays = userProgress?.daysCompleted.length || 0;
  const isEligibleForBoss = userProgress?.isEligibleForBoss || false;

  const isDayUnlocked = useCallback((dayNumber: number): boolean => {
    if (!userProgress) return dayNumber === 1;
    
    const dayProgress = userProgress.dailyProgress[dayNumber];
    return dayProgress?.isUnlocked || dayNumber === 1;
  }, [userProgress]);

  const isDayCompleted = useCallback((dayNumber: number): boolean => {
    if (!userProgress) return false;
    
    const dayProgress = userProgress.dailyProgress[dayNumber];
    return dayProgress?.isCompleted || false;
  }, [userProgress]);

  return {
    currentEvent,
    userProgress,
    loading,
    error,
    
    // Actions
    joinEvent,
    completeDay,
    completeBoss,
    
    // Computed properties
    progressPercent,
    completedDays,
    isEligibleForBoss,
    isDayUnlocked,
    isDayCompleted
  };
};

/**
 * Hook for getting event statistics and leaderboard data
 */
export const useEventStatistics = (eventId?: string) => {
  const [stats, setStats] = useState({
    totalParticipants: 0,
    completedUsers: 0,
    averageCompletionTime: 0,
    topPerformers: [] as any[]
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!eventId) {
      setLoading(false);
      return;
    }

    // In a real implementation, this would fetch statistics from Firebase
    // For now, we'll simulate it
    const loadStats = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setStats({
          totalParticipants: Math.floor(Math.random() * 500) + 100,
          completedUsers: Math.floor(Math.random() * 50) + 20,
          averageCompletionTime: Math.floor(Math.random() * 24) + 12, // hours
          topPerformers: []
        });
      } catch (error) {
        console.error('Error loading event statistics:', error);
      } finally {
        setLoading(false);
      }
    };

    loadStats();
  }, [eventId]);

  return { stats, loading };
};

export default useWeeklyEvents;
