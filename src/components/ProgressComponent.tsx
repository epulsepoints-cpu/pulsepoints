import React from 'react';
import { useGameState } from '@/hooks/useGameState';
import DuolingoProgress from './DuolingoProgress';
import { getUserAchievements } from '@/services/achievementService';
import { getUserProgressStats } from '@/services/progressService';
import { toast } from '@/components/ui/use-toast';

// Simple debounce function
const debounce = (func: Function, wait: number) => {
  let timeout: ReturnType<typeof setTimeout>;
  const debounced = (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(null, args), wait);
  };
  debounced.cancel = () => clearTimeout(timeout);
  return debounced;
};

const ProgressComponent: React.FC = () => {
  const { gameState, logout } = useGameState();
  const [achievements, setAchievements] = React.useState<any[]>([]);
  const [progressStats, setProgressStats] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  console.log('🔧 ProgressComponent: Component rendered', {
    isAuthenticated: gameState.isAuthenticated,
    isGuestUser: gameState.isGuestUser,
    userId: gameState.user?.id,
    userXP: gameState.user?.xp,
    userGems: gameState.user?.gems,
    progressStats,
    achievements: achievements.length
  });

  // Add debounced refresh to prevent rapid successive updates
  const debouncedLoadUserData = React.useRef<ReturnType<typeof debounce>>();

  const loadUserData = async () => {
    if (!gameState.user?.id) return;
    
    console.log('🔄 ProgressComponent: Loading user data for', gameState.user.id);
    setIsLoading(true);
    try {
      // Load achievements and progress stats in parallel
      const [achievementsData, statsData] = await Promise.all([
        getUserAchievements(gameState.user.id),
        getUserProgressStats(gameState.user.id)
      ]);
      
      console.log('📊 ProgressComponent: Raw stats data:', statsData);
      console.log('🏆 ProgressComponent: Raw achievements data:', achievementsData);
      
      // Handle achievements data
      let achievementsArray: any[] = [];
      if (achievementsData && achievementsData.achievements) {
        // Convert Firebase achievements to array format
        achievementsArray = Object.entries(achievementsData.achievements).map(([id, achievement]) => ({
          id,
          ...achievement
        }));
        console.log('🏆 ProgressComponent: Processed achievements:', achievementsArray.length);
      } else {
        // Initialize default achievements if none exist
        console.log('🆕 No achievements found, initializing defaults');
        const { initializeUserAchievements } = await import('@/services/achievementService');
        const newAchievementsData = await initializeUserAchievements(gameState.user.id);
        
        achievementsArray = Object.entries(newAchievementsData.achievements).map(([id, achievement]) => ({
          id,
          ...achievement
        }));
        console.log('🆕 ProgressComponent: Initialized achievements:', achievementsArray.length);
      }
      
      // Force state update with completely new references
      setAchievements(achievementsArray); 
      setProgressStats({
        ...statsData,
        // Add timestamp to force re-renders
        _refreshTimestamp: Date.now()
      });
      
      console.log('✅ ProgressComponent: Data loaded and states updated');
    } catch (error) {
      console.error('❌ Failed to load user data:', error);
      toast({
        title: "Loading Error",
        description: "Failed to load achievements. Please refresh the page.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Initialize debounced function after loadUserData is defined
  React.useEffect(() => {
    debouncedLoadUserData.current = debounce(() => {
      console.log('🔄 ProgressComponent: Debounced refresh triggered');
      loadUserData();
    }, 500);
  }, []);

  // Load user data on mount and when gameState changes
  React.useEffect(() => {
    console.log('🔄 ProgressComponent: Effect triggered', {
      isAuthenticated: gameState.isAuthenticated,
      isGuestUser: gameState.isGuestUser,
      userId: gameState.user?.id
    });
    
    if (gameState.isAuthenticated && !gameState.isGuestUser && gameState.user?.id) {
      // Force immediate refresh when component mounts or user changes
      loadUserData();
    } else {
      setIsLoading(false);
    }
  }, [
    gameState.isAuthenticated, 
    gameState.user?.id, 
    gameState.user?.xp, 
    gameState.user?.gems,
    gameState.learningProgress // Track learning progress changes
  ]);

  // Force refresh when the app becomes visible or when component first mounts
  React.useEffect(() => {
    // Immediate refresh on mount
    if (gameState.isAuthenticated && !gameState.isGuestUser && gameState.user?.id) {
      console.log('🔄 ProgressComponent: Initial mount refresh');
      loadUserData();
    }

    const handleVisibilityChange = () => {
      if (!document.hidden && gameState.isAuthenticated && gameState.user?.id) {
        console.log('👀 ProgressComponent: Page became visible, refreshing data');
        debouncedLoadUserData.current?.();
      }
    };

    // Listen for custom progress update events
    const handleProgressUpdate = (event: CustomEvent) => {
      console.log('🔄 ProgressComponent: Received progress update event', event.detail);
      if (gameState.isAuthenticated && gameState.user?.id) {
        // Use debounced version to prevent rapid updates
        debouncedLoadUserData.current?.();
      }
    };

    // Force refresh when component becomes visible (tab switch, window focus)
    const handleFocus = () => {
      if (gameState.isAuthenticated && gameState.user?.id) {
        console.log('🔍 ProgressComponent: Window focused, refreshing data');
        debouncedLoadUserData.current?.();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleFocus);
    window.addEventListener('progressUpdated', handleProgressUpdate as EventListener);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleFocus);
      window.removeEventListener('progressUpdated', handleProgressUpdate as EventListener);
    };
  }, [gameState.isAuthenticated, gameState.user?.id]);

  const handleClaimReward = async (achievementId: string) => {
    if (!gameState.user?.id) {
      toast({
        title: "Error",
        description: "Please log in to claim rewards",
        variant: "destructive",
      });
      return;
    }

    try {
      const { claimAchievementReward } = await import('@/services/achievementService');
      const result = await claimAchievementReward(gameState.user.id, achievementId);
      
      toast({
        title: "Reward Claimed! 🎉",
        description: `You earned ${result.xp || 0} XP${result.gems ? ` and ${result.gems} gems` : ''}!`,
      });
      
      // Reload achievements to show updated claimed status and trigger progress refresh
      await loadUserData();
      
      // Also dispatch progress update event for other components
      const progressUpdateEvent = new CustomEvent('progressUpdated', {
        detail: {
          userId: gameState.user.id,
          type: 'achievementClaimed',
          achievementId
        }
      });
      window.dispatchEvent(progressUpdateEvent);
    } catch (error) {
      console.error('❌ Failed to claim reward:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to claim reward. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Default stats for fallback
  const defaultStats = {
    level: 1,
    xp: 0,
    xpToNextLevel: 100,
    currentStreak: 0,
    longestStreak: 0,
    totalLessons: 0,
    lessonsThisWeek: 0,
    hearts: 5,
    gems: 0,
    perfectLessons: 0,
    fastCompletions: 0
  };

  // Use Firebase stats or fallback to gameState/defaults
  // Create fresh userStats object every render to ensure DuolingoProgress re-renders
  const userStats = React.useMemo(() => {
    console.log('📊 ProgressComponent: Calculating userStats with:', {
      progressStats,
      gameStateUser: gameState.user
    });
    
    return {
      level: progressStats?.level || Math.floor((gameState.user?.xp || 0) / 100) + 1,
      xp: progressStats?.xp || gameState.user?.xp || 0,
      xpToNextLevel: progressStats?.xpToNextLevel || 100,
      currentStreak: progressStats?.currentStreak || gameState.user?.streakCount || 0,
      longestStreak: progressStats?.longestStreak || gameState.user?.longestStreak || 0,
      totalLessons: progressStats?.totalLessons || 0,
      lessonsThisWeek: progressStats?.lessonsThisWeek || 0,
      hearts: progressStats?.hearts || gameState.user?.hearts || 5,
      gems: progressStats?.gems || gameState.user?.gems || 0,
      perfectLessons: progressStats?.perfectLessons || 0,
      fastCompletions: progressStats?.fastCompletions || 0
    };
  }, [
    // Include all possible data sources as dependencies
    progressStats?.level, progressStats?.xp, progressStats?.xpToNextLevel,
    progressStats?.currentStreak, progressStats?.longestStreak, progressStats?.totalLessons,
    progressStats?.lessonsThisWeek, progressStats?.hearts, progressStats?.gems,
    progressStats?.perfectLessons, progressStats?.fastCompletions,
    gameState.user?.xp, gameState.user?.streakCount, gameState.user?.hearts, 
    gameState.user?.gems, gameState.user?.longestStreak,
    // Add timestamp to force refresh when progressStats object changes
    progressStats?.lastUpdated, progressStats
  ]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your progress...</p>
        </div>
      </div>
    );
  }

  if (!gameState.isAuthenticated || gameState.isGuestUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-6xl mb-4">🔒</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Progress Locked</h2>
          <p className="text-gray-600 mb-6">
            Sign in to track your learning progress, earn achievements, and unlock rewards!
          </p>
          <button
            onClick={async () => {
              try {
                // Clear guest session and trigger login form
                await logout();
              } catch (error) {
                console.error('Error during sign out:', error);
                // Fallback to page reload if logout fails
                window.location.reload();
              }
            }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Sign In to Continue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto p-4">
        <DuolingoProgress
          userStats={userStats}
          achievements={achievements}
          weeklyGoal={progressStats?.weeklyGoal || 7}
          userRank={gameState.user?.rank}
          onClaimReward={handleClaimReward}
        />
      </div>
    </div>
  );
};

export default ProgressComponent;
