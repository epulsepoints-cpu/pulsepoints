import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { 
  Calendar,
  Clock,
  Trophy,
  Lock,
  Unlock,
  Star,
  Flame,
  Target,
  Zap,
  CheckCircle,
  Crown,
  Timer,
  Users,
  Gift,
  Sparkles,
  Award,
  Play,
  AlertTriangle,
  Heart
} from 'lucide-react';
import { 
  WeeklyEvent, 
  UserEventProgress, 
  EventDay 
} from '@/types/events';
import { 
  getCurrentActiveEvent,
  getUserEventProgress,
  initializeUserEventProgress,
  subscribeToCurrentEvent,
  subscribeToUserProgress,
  completeDayProgress
} from '@/services/eventService';
import { useAuth } from '@/hooks/useAuth';
// import EventDayCard from './EventDayCard';
// import BossChallengeModal from './BossChallengeModal';
// import EventCountdown from './EventCountdown';
// import EventLeaderboard from './EventLeaderboard';

interface WeeklyEventsProps {
  className?: string;
}

const WeeklyEvents: React.FC<WeeklyEventsProps> = ({ className }) => {
  const { user } = useAuth();
  const [currentEvent, setCurrentEvent] = useState<WeeklyEvent | null>(null);
  const [userProgress, setUserProgress] = useState<UserEventProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState<EventDay | null>(null);
  const [showBossChallenge, setShowBossChallenge] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  // Load current event and user progress
  useEffect(() => {
    if (!user?.uid) {
      setLoading(false);
      return;
    }

    let eventUnsubscribe: () => void;
    let progressUnsubscribe: () => void;

    const loadData = async () => {
      try {
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
      } catch (error) {
        console.error('Error loading weekly events data:', error);
        toast({
          title: 'Error Loading Events',
          description: 'Failed to load weekly events. Please try again later.',
          variant: 'destructive'
        });
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

  // Handle day completion
  const handleDayComplete = async (dayNumber: number, xpEarned: number, gemsEarned: number, accuracy: number, timeSpent: number) => {
    if (!user?.uid || !currentEvent) return;

    try {
      await completeDayProgress(user.uid, currentEvent.id, dayNumber, xpEarned, gemsEarned, accuracy, timeSpent);
      
      toast({
        title: `Day ${dayNumber} Complete! 🎉`,
        description: `You earned ${xpEarned} XP and ${gemsEarned} gems!`,
        duration: 4000
      });

      // Show celebration animation
      setTimeout(() => {
        toast({
          title: 'Great Progress! ✨',
          description: dayNumber < 7 ? `Day ${dayNumber + 1} is now unlocked!` : 'Event completed! Check your rewards!',
          duration: 3000
        });
      }, 2000);
    } catch (error) {
      console.error('Error completing day:', error);
      toast({
        title: 'Error',
        description: 'Failed to save progress. Please try again.',
        variant: 'destructive'
      });
    }
  };

  // Get theme styling
  const getThemeStyles = (theme: WeeklyEvent['theme']) => {
    const themes = {
      'shock-zone': {
        gradient: 'from-red-500 via-orange-500 to-yellow-500',
        iconColor: 'text-red-500',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200'
      },
      'pulse-racer': {
        gradient: 'from-purple-500 via-pink-500 to-red-500',
        iconColor: 'text-purple-500',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-200'
      },
      'code-blue-rush': {
        gradient: 'from-blue-600 via-blue-500 to-cyan-400',
        iconColor: 'text-blue-500',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200'
      },
      'stemi-gauntlet': {
        gradient: 'from-green-600 via-emerald-500 to-teal-400',
        iconColor: 'text-green-500',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200'
      }
    };
    return themes[theme] || themes['shock-zone'];
  };

  // Get event icon based on theme
  const getEventIcon = (theme: WeeklyEvent['theme']) => {
    const icons = {
      'shock-zone': Zap,
      'pulse-racer': Heart,
      'code-blue-rush': Target,
      'stemi-gauntlet': Award
    };
    return icons[theme] || Zap;
  };

  if (loading) {
    return (
      <div className={cn("p-6 space-y-4", className)}>
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="h-48 bg-gray-200 rounded"></div>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className="h-20 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className={cn("p-6 flex flex-col items-center justify-center min-h-[400px]", className)}>
        <div className="text-center space-y-4">
          <Calendar className="w-16 h-16 text-gray-400 mx-auto" />
          <h3 className="text-xl font-bold text-gray-900">Join Weekly Events!</h3>
          <p className="text-gray-600 max-w-md">
            Sign in to participate in exciting weekly ECG challenges, earn exclusive rewards, and compete with other learners!
          </p>
          <Button className="mt-4">
            Sign In to Join Events
          </Button>
        </div>
      </div>
    );
  }

  if (!currentEvent) {
    return (
      <div className={cn("p-6 flex flex-col items-center justify-center min-h-[400px]", className)}>
        <div className="text-center space-y-4">
          <Clock className="w-16 h-16 text-gray-400 mx-auto" />
          <h3 className="text-xl font-bold text-gray-900">No Active Events</h3>
          <p className="text-gray-600 max-w-md">
            New weekly events start every Monday! Check back soon for exciting new challenges.
          </p>
        </div>
      </div>
    );
  }

  const themeStyles = getThemeStyles(currentEvent.theme);
  const EventIcon = getEventIcon(currentEvent.theme);
  const progressPercent = userProgress ? (userProgress.daysCompleted.length / 7) * 100 : 0;
  const completedDays = userProgress?.daysCompleted.length || 0;

  return (
    <div className={cn("p-4 space-y-6 pb-24", className)}>
      {/* Event Header */}
      <Card className={cn("border-2", themeStyles.borderColor, themeStyles.bgColor)}>
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className={cn("p-3 rounded-xl bg-gradient-to-br", themeStyles.gradient)}>
                <EventIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold flex items-center gap-2">
                  {currentEvent.title}
                  <Badge variant="secondary" className="px-2 py-1">
                    <Users className="w-3 h-3 mr-1" />
                    {currentEvent.participants}
                  </Badge>
                </CardTitle>
                <p className="text-gray-600 mt-1">{currentEvent.description}</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowLeaderboard(true)}
              className="shrink-0"
            >
              <Trophy className="w-4 h-4 mr-1" />
              Leaderboard
            </Button>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">Progress: {completedDays}/7 days</span>
              <span className={cn("font-medium", themeStyles.iconColor)}>
                {progressPercent.toFixed(0)}% Complete
              </span>
            </div>
            <Progress value={progressPercent} className="h-3" />
          </div>

          {/* Event Countdown */}
          <div className="flex items-center justify-center gap-2 p-3 bg-white/50 rounded-lg border">
            <Timer className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">
              Event ends in: {Math.ceil((currentEvent.endDate.getTime() - Date.now()) / (1000 * 60 * 60 * 24))} days
            </span>
          </div>
        </CardHeader>

        <CardContent className="pt-0">
          {/* Rewards Preview */}
          <div className="flex items-center justify-between p-3 bg-white/50 rounded-lg border">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="font-medium">{currentEvent.totalRewards.xp} XP</span>
              </div>
              <div className="flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-blue-500" />
                <span className="font-medium">{currentEvent.totalRewards.gems} Gems</span>
              </div>
              <div className="flex items-center gap-1">
                <Gift className="w-4 h-4 text-purple-500" />
                <span className="font-medium">{currentEvent.totalRewards.badges.length} Badges</span>
              </div>
            </div>
            {userProgress?.isEligibleForBoss && (
              <Badge className={cn("bg-gradient-to-r", themeStyles.gradient, "text-white border-0")}>
                <Crown className="w-3 h-3 mr-1" />
                Boss Unlocked!
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Daily Challenges Grid */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Daily Challenges
        </h3>
        
        <div className="grid grid-cols-7 gap-2 md:gap-3">
          {currentEvent.days.map((day, index) => {
            const dayProgress = userProgress?.dailyProgress[day.dayNumber];
            const isUnlocked = dayProgress?.isUnlocked || day.dayNumber === 1;
            const isCompleted = dayProgress?.isCompleted || false;
            const isBoss = day.isBossChallenge;
            
            return (
              <div
                key={day.id}
                className={cn(
                  "aspect-square p-2 rounded-lg border-2 cursor-pointer transition-all",
                  isCompleted ? "bg-green-100 border-green-300" : 
                  isUnlocked ? `bg-white border-gray-300 hover:${themeStyles.borderColor}` :
                  "bg-gray-100 border-gray-200 cursor-not-allowed opacity-60",
                  isBoss && "ring-2 ring-yellow-400"
                )}
                onClick={() => {
                  if (isUnlocked) {
                    if (isBoss) {
                      setShowBossChallenge(true);
                    } else {
                      setSelectedDay(day);
                    }
                  } else {
                    toast({
                      title: 'Day Locked',
                      description: `Complete Day ${day.dayNumber - 1} to unlock this challenge.`,
                      variant: 'destructive'
                    });
                  }
                }}
              >
                <div className="flex flex-col items-center justify-center h-full text-center">
                  {isBoss ? (
                    <Crown className="w-4 h-4 text-yellow-500 mb-1" />
                  ) : isCompleted ? (
                    <CheckCircle className="w-4 h-4 text-green-500 mb-1" />
                  ) : isUnlocked ? (
                    <div className={cn("w-3 h-3 rounded-full mb-1", `bg-gradient-to-br ${themeStyles.gradient}`)} />
                  ) : (
                    <Lock className="w-4 h-4 text-gray-400 mb-1" />
                  )}
                  <span className="text-xs font-medium">
                    {isBoss ? 'Boss' : `Day ${day.dayNumber}`}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Completion Status */}
      {completedDays >= 7 && userProgress?.bossCompleted && (
        <Card className="border-2 border-yellow-400 bg-gradient-to-r from-yellow-50 to-orange-50">
          <CardContent className="p-6 text-center">
            <Crown className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Event Completed! 🎉</h3>
            <p className="text-gray-600 mb-4">
              Congratulations! You've mastered the {currentEvent.title} challenge!
            </p>
            <div className="flex justify-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">{userProgress.totalXpEarned}</div>
                <div className="text-sm text-gray-600">Total XP</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{userProgress.totalGemsEarned}</div>
                <div className="text-sm text-gray-600">Total Gems</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">{userProgress.badgesEarned.length}</div>
                <div className="text-sm text-gray-600">Badges Earned</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Day Challenge Modal would go here */}
      {selectedDay && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Day {selectedDay.dayNumber}: {selectedDay.title}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedDay(null)}
                >
                  ×
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{selectedDay.description}</p>
              {/* Day challenge content would be rendered here based on type */}
              <div className="bg-gray-100 p-4 rounded-lg text-center">
                <Play className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <p className="text-gray-600">Challenge content coming soon!</p>
                <Button 
                  className="mt-4"
                  onClick={() => {
                    // Simulate completion for demo
                    const mockXP = selectedDay.rewards.xp;
                    const mockGems = selectedDay.rewards.gems;
                    handleDayComplete(selectedDay.dayNumber, mockXP, mockGems, 85, 5);
                    setSelectedDay(null);
                  }}
                >
                  Complete Challenge (Demo)
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Boss Challenge Modal */}
      {showBossChallenge && currentEvent && userProgress && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Crown className="w-6 h-6 text-yellow-500" />
                  Boss Challenge
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowBossChallenge(false)}
                >
                  ×
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Face the ultimate challenge of this event!</p>
              <div className="bg-yellow-50 p-4 rounded-lg text-center border-2 border-yellow-200">
                <Crown className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">Ultimate Challenge</h3>
                <p className="text-gray-600 mb-4">This is the final test of your skills!</p>
                <Button 
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600"
                  onClick={() => {
                    setShowBossChallenge(false);
                    toast({
                      title: 'Boss Challenge Complete! 👑',
                      description: 'You are now a master of this event!',
                      duration: 5000
                    });
                  }}
                >
                  Complete Boss Challenge (Demo)
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Leaderboard Modal */}
      {showLeaderboard && currentEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-yellow-500" />
                  Event Leaderboard
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowLeaderboard(false)}
                >
                  ×
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
                  <p className="text-gray-600">Leaderboard data coming soon!</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Compete with other learners and see your ranking
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default WeeklyEvents;
