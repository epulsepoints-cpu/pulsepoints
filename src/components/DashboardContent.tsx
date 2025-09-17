import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GameState } from '@/types/game';
import TaskCard from './TaskCard';
import Hearts from './Hearts';
import { Target, Sparkles } from 'lucide-react';
import SocialShareCard from './SocialSharedCard';
import LoadingSpinner from './LoadingSpinner';
import SkeletonLoader from './SkeletonLoader';
import CircularProgress from './CircularProgress';
import { Gem, Star, Flame, TrendingUp } from 'lucide-react';
import { ProfileBadgeDisplay } from './ProfileBadgeDisplay';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { useUnifiedNotifications } from '@/hooks/useUnifiedNotifications';
import { useRewardSound } from '@/hooks/useRewardSound';
import { unifiedNotificationService } from '@/services/unifiedNotificationService';

interface DashboardContentProps {
  gameState: GameState;
  onCompleteTask: (taskId: string, isCorrect: boolean) => void;
  onRefreshTasks?: () => Promise<void>; // Optional function to refresh tasks
}

const DashboardContent: React.FC<DashboardContentProps> = ({ gameState, onCompleteTask, onRefreshTasks }) => {
  const { user, dailyTasks, completedTasks } = gameState;
  const [showShare, setShowShare] = useState(false);
  const totalTasks = dailyTasks.length || 1;
  const progressPercentage = (completedTasks / totalTasks) * 100;
  const allTasksComplete = completedTasks === totalTasks;
  const { refreshNotifications } = useUnifiedNotifications();
  const { playRewardSound } = useRewardSound();
  const [isLoadingTasks, setIsLoadingTasks] = useState(dailyTasks.length === 0);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Track previous completed tasks to detect changes
  const [prevCompletedTasks, setPrevCompletedTasks] = useState(completedTasks);

  // Log task loading status for debugging
  useEffect(() => {
    console.log('🧩 Dashboard Content - Daily Tasks:', { 
      count: dailyTasks.length,
      loading: isLoadingTasks,
      completed: completedTasks,
      tasks: dailyTasks.map(t => ({
        id: t.id,
        type: t.type,
        title: t.title,
        completed: t.completed
      }))
    });
  }, [dailyTasks, completedTasks, isLoadingTasks]);

  // Update previous completed tasks when it changes
  useEffect(() => {
    setPrevCompletedTasks(completedTasks);
  }, [completedTasks]);

  const [xpProgress, setXpProgress] = useState(0);
  const [gemsProgress, setGemsProgress] = useState(0);
  const [rankProgress, setRankProgress] = useState(0);
  const [streakProgress, setStreakProgress] = useState(0);
  const [openTask, setOpenTask] = useState<null | typeof dailyTasks[0]>(null);
  const [showStats, setShowStats] = useState(false); // Hidden by default
  const tasksSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setXpProgress(Math.min(100, (user.xp % 100))), 200);
    setTimeout(() => setGemsProgress(Math.min(100, (user.gems % 100))), 400);
    // Rank progress: use XP as a proxy (e.g., percent to next rank)
    setTimeout(() => setRankProgress(Math.min(100, (user.xp % 100))), 600);
    setTimeout(() => setStreakProgress(Math.min(100, (user.streakCount ? user.streakCount * 10 : 0))), 800);
  }, [user.xp, user.gems, user.streakCount]);

  const dailyGoal = 5;
  const dailyProgress = Math.min(100, (completedTasks / dailyGoal) * 100);

  if (!user) return <div className="flex justify-center items-center min-h-40"><LoadingSpinner /></div>;

  // Handler for task completion
  const handleTaskComplete = (taskId: string, isCorrect: boolean) => {
    onCompleteTask(taskId, isCorrect);
    
    // Play reward sound for any task completion (XP and gems are always earned)
    if (isCorrect) {
      playRewardSound();
    }
  };

  // Show share popup only when all tasks are complete
  useEffect(() => {
    if (allTasksComplete && completedTasks > 0) {
      setShowShare(true);
      
      // 🎯 DUOLINGO-STYLE: Track daily goal completion for reminder system
      if (user?.id) {
        unifiedNotificationService.trackDailyGoalCompletion(user.id);
        
        console.log('✅ All tasks completed, notifications handled by unified service');
      }
    }
  }, [allTasksComplete, completedTasks, user?.id]);

  // Auto-refresh notifications when page becomes visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden && user?.id) {
        // Page became visible, refresh notifications
        refreshNotifications();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [user?.id, refreshNotifications]);

  return (
    <div className="min-h-[60vh] bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 px-1 sm:px-6 py-2 sm:py-6">
      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
        {/* Modern Header Section */}
  <div className="text-center mb-4 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Welcome back, {user.username || 'Learner'}!
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">Let's continue your ECG learning journey</p>
        </div>

        {/* Stats Cards - Mobile Optimized */}
        <div className="mb-4 sm:mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3 sm:mb-4">
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
              Your Progress
            </h2>
            <button
              className="text-xs px-3 py-1.5 rounded-full bg-indigo-100 text-indigo-700 font-medium hover:bg-indigo-200 transition-colors flex items-center gap-1"
              onClick={() => setShowStats((v) => !v)}
            >
              {showStats ? 'Hide Stats' : 'Show Stats'}
            </button>
          </div>
          
          {showStats && (
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4 animate-in fade-in-50 slide-in-from-top-4">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-md transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-blue-700 mb-1">{user.xp.toLocaleString()}</div>
                  <p className="text-xs text-blue-600 font-medium uppercase tracking-wide">Total XP</p>
                  <Progress value={xpProgress} className="w-full h-2 mt-2" />
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-emerald-200 hover:shadow-md transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Gem className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="text-2xl font-bold text-emerald-700 mb-1">{user.gems.toLocaleString()}</div>
                  <p className="text-xs text-emerald-600 font-medium uppercase tracking-wide">Gems</p>
                  <Progress value={gemsProgress} className="w-full h-2 mt-2" />
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 hover:shadow-md transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <ProfileBadgeDisplay 
                    userRank={user.rank || 'ECGKid Intern'} 
                    className="justify-center mb-2"
                  />
                  <p className="text-xs text-amber-600 font-medium uppercase tracking-wide">Current Rank</p>
                  <Progress value={rankProgress} className="w-full h-2 mt-2" />
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 hover:shadow-md transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Flame className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="text-2xl font-bold text-orange-700 mb-1">{user.streakCount || 0}</div>
                  <p className="text-xs text-orange-600 font-medium uppercase tracking-wide">Day Streak</p>
                  <Progress value={streakProgress} className="w-full h-2 mt-2" />
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Daily Goal - Redesigned */}
        <Card 
          className={`cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
            completedTasks >= dailyGoal 
              ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-green-100' 
              : 'bg-gradient-to-br from-purple-50 to-indigo-50 border-purple-200 shadow-purple-100'
          }`}
          onClick={() => {
            if (tasksSectionRef.current) {
              tasksSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
        >
          <CardContent className="p-3 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-bold text-gray-900 mb-1">Daily Goal</h3>
                <p className="text-gray-600 text-sm">{completedTasks} of {dailyGoal} tasks completed</p>
                {completedTasks >= dailyGoal ? (
                  <Badge className="mt-2 bg-green-100 text-green-700 border-green-200">
                    � Goal Achieved!
                  </Badge>
                ) : (
                  <p className="text-xs text-gray-500 mt-1">Keep going to reach your goal!</p>
                )}
              </div>
              
              <div className={`relative ${completedTasks >= dailyGoal ? 'animate-pulse' : ''}`}>
                <CircularProgress 
                  value={dailyProgress} 
                  size={80} 
                  strokeWidth={6}
                />
                {completedTasks >= dailyGoal && (
                  <div className="absolute inset-0 flex items-center justify-center text-2xl animate-bounce">
                    🎁
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tasks Section - Modern Design */}
        <div
          id="dashboard-tasks-section"
          ref={tasksSectionRef}
          className="space-y-2 sm:space-y-4 animate-in fade-in-50 slide-in-from-bottom-4"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Target className="w-6 h-6 text-indigo-600" />
              Today's Tasks
            </h2>
            <div className="flex items-center gap-3">
              {onRefreshTasks && (
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                  onClick={async () => {
                    setIsRefreshing(true);
                    try {
                      await onRefreshTasks();
                    } finally {
                      setIsRefreshing(false);
                    }
                  }}
                  disabled={isRefreshing}
                >
                  {isRefreshing ? (
                    <>
                      <div className="w-3 h-3 border-2 border-t-transparent border-blue-600 rounded-full animate-spin mr-1"></div>
                      Refreshing...
                    </>
                  ) : (
                    <>
                      🔄 Refresh
                    </>
                  )}
                </Button>
              )}
              <Badge variant="outline" className="text-sm">
                {completedTasks}/{dailyTasks.length} Complete
              </Badge>
            </div>
          </div>

          {dailyTasks.length === 0 ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      </div>
                      <div className="w-20 h-8 bg-gray-200 rounded-full"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-2 sm:space-y-4">
              {dailyTasks.map((task, idx) => (
                <Card 
                  key={task.id} 
                  className={`group transition-all duration-300 hover:shadow-lg border-2 ${
                    task.completed 
                      ? 'bg-green-50 border-green-200 opacity-75' 
                      : task.type === 'quiz' 
                        ? task.difficulty === 'easy' 
                          ? 'bg-green-50 border-green-200 hover:border-green-300 hover:shadow-green-100' 
                          : task.difficulty === 'medium' 
                            ? 'bg-amber-50 border-amber-200 hover:border-amber-300 hover:shadow-amber-100' 
                            : 'bg-red-50 border-red-200 hover:border-red-300 hover:shadow-red-100'
                        : 'bg-blue-50 border-blue-200 hover:border-blue-300 hover:shadow-blue-100'
                  }`}
                  id={idx === 0 ? "dashboard-task-1" : undefined}
                >
                  <CardContent className="p-2 sm:p-4 lg:p-6">
                    {/* Mobile-optimized task header */}
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                      <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold ${
                        task.completed ? 'bg-green-500 text-white' : 'bg-indigo-100 text-indigo-700'
                      }`}>
                        {task.completed ? '✓' : idx + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-gray-500 font-medium">
                          Task {idx + 1} of {dailyTasks.length}
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2 mt-1">
                          {task.type === 'quiz' && (
                            <Badge 
                              variant="outline" 
                              className={`text-xs px-1.5 py-0.5 ${
                                task.difficulty === 'easy' ? 'border-green-300 text-green-700' :
                                task.difficulty === 'medium' ? 'border-amber-300 text-amber-700' :
                                'border-red-300 text-red-700'
                              }`}
                            >
                              {task.difficulty?.charAt(0).toUpperCase() + task.difficulty?.slice(1)} Quiz
                            </Badge>
                          )}
                          {task.type === 'video' && (
                            <Badge variant="outline" className="text-xs px-1.5 py-0.5 border-blue-300 text-blue-700">
                              Video Task
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Mobile-first responsive layout */}
                    <div 
                      className={`${!task.completed ? 'cursor-pointer' : 'cursor-default'}`}
                      onClick={() => !task.completed && setOpenTask(task)}
                    >
                      {/* Mobile layout: stacked vertically */}
                      <div className="space-y-3">
                        {/* Content and image section */}
                        <div className="flex gap-3">
                          {/* Image - smaller on mobile */}
                          {(task.imageUrl || task.youtubeThumbnail) && (
                            <div className="relative flex-shrink-0">
                              <img 
                                src={task.imageUrl || task.youtubeThumbnail} 
                                alt={task.type === 'video' ? "Video thumbnail" : "ECG image"} 
                                className="w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 object-cover rounded-lg border shadow-sm bg-white"
                              />
                              {task.type === 'video' && !task.completed && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs sm:text-sm">
                                    ▶
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                          
                          {/* Title and description */}
                          <div className="flex-1 min-w-0">
                            <h3 className={`font-bold text-xs sm:text-base lg:text-lg text-gray-900 mb-1 sm:mb-2 leading-tight ${
                              task.completed ? 'line-through opacity-60' : ''
                            }`}>
                              {task.title || task.question}
                            </h3>
                          </div>
                        </div>
                        
                        {/* Badges and button section */}
                        <div className="flex flex-col space-y-1 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                          {/* Badges */}
                          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                            <Badge className="bg-indigo-100 text-indigo-700 border-indigo-200 text-xs px-2 py-0.5">
                              +{task.points || 10} XP
                            </Badge>
                            {task.gems && (
                              <Badge className="bg-pink-100 text-pink-700 border-pink-200 text-xs px-2 py-0.5">
                                +{task.gems} Gems
                              </Badge>
                            )}
                            {task.completed && (
                              <Badge className="bg-green-100 text-green-700 border-green-200 text-xs px-2 py-0.5">
                                ✓ Completed
                              </Badge>
                            )}
                          </div>

                          {/* Action button */}
                          {!task.completed && (
                            <div className="w-full sm:w-auto">
                              <button className={`w-full sm:w-auto px-2 py-2 sm:px-4 sm:py-2 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-200 shadow-sm hover:shadow-md touch-manipulation ${
                                task.type === 'video' 
                                  ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                  : task.difficulty === 'easy'
                                    ? 'bg-green-600 hover:bg-green-700 text-white'
                                    : task.difficulty === 'medium'
                                      ? 'bg-amber-600 hover:bg-amber-700 text-white'
                                      : 'bg-red-600 hover:bg-red-700 text-white'
                              }`}>
                                {task.type === 'video' ? 'Watch & Complete' : 'Start Quiz'}
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Modern Task Modal - Mobile Responsive */}
        <Dialog open={!!openTask} onOpenChange={(open) => { if (!open) setOpenTask(null); }}>
          <DialogContent className="p-0 gap-0 bg-gradient-to-br from-white via-blue-50 to-indigo-50 overflow-hidden">
            {openTask && (
              <>
                <DialogTitle className="hidden">{openTask.title || openTask.question || "Task"}</DialogTitle>
                
                {/* Mobile Back Button - Outside of scrollable area */}
                <div className="sticky top-0 left-0 z-20 sm:hidden">
                  <button
                    onClick={() => setOpenTask(null)}
                    className="absolute top-4 left-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/100 transition-all touch-manipulation"
                    style={{ minHeight: '44px', minWidth: '44px' }}
                  >
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                </div>
                
                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto min-h-0 pt-16 sm:pt-0 p-4">
                  <TaskCard 
                    task={openTask} 
                    onComplete={(id, correct) => {
                      handleTaskComplete(id, correct);
                    }} 
                    modalMode 
                    onCloseModal={() => setOpenTask(null)}
                  />
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Celebration Card - Enhanced */}
        {allTasksComplete && (
          <Card className="border-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 shadow-2xl animate-in zoom-in-50 duration-500">
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4 animate-bounce">🎉</div>
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">
                Outstanding Work!
              </h3>
              <p className="text-gray-700 text-base sm:text-lg mb-6">
                You've completed all daily tasks! Your dedication is impressive.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  🎁 Claim Daily Bonus
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  📊 View Progress
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-4">
                Come back tomorrow for new challenges!
              </p>
            </CardContent>
          </Card>
        )}

        {/* Modern Social Share Modal */}
        {showShare && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in-0">
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full">
              <button
                onClick={() => setShowShare(false)}
                className="absolute -top-3 -right-3 bg-gray-800 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg hover:bg-gray-700 shadow-lg z-10"
              >
                ×
              </button>
              <SocialShareCard 
                completedTasks={completedTasks}
                totalPoints={user?.totalPoints || 0}
                streakCount={user?.streakCount || 0}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardContent;
