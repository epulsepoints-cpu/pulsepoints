import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import AchievementTree from './AchievementTree';
import { ProfileBadgeDisplay } from './ProfileBadgeDisplay';
import {
  Trophy,
  Star,
  Flame,
  Target,
  Crown,
  Award,
  Zap,
  Calendar,
  BookOpen,
  TrendingUp,
  Heart,
  Diamond,
  Shield,
  Clock,
  CheckCircle,
  Gift
} from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  progress: number;
  total: number;
  completed: boolean;
  claimed?: boolean; // Firebase structure
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  reward: {
    xp: number;
    gems?: number;
    title?: string;
  };
}

// Firebase achievement type for compatibility
interface FirebaseAchievement {
  id: string;
  title: string;
  description: string;
  progress: number;
  total: number;
  completed: boolean;
  claimed: boolean;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  reward: {
    xp: number;
    gems?: number;
    title?: string;
  };
  unlockedAt?: string;
  claimedAt?: string;
}

interface DuolingoProgressProps {
  userStats: {
    level: number;
    xp: number;
    xpToNextLevel: number;
    currentStreak: number;
    longestStreak: number;
    totalLessons: number;
    lessonsThisWeek: number;
    hearts: number;
    gems: number;
    perfectLessons: number;
    fastCompletions: number;
  };
  achievements: Achievement[] | FirebaseAchievement[];
  weeklyGoal: number;
  userRank?: string; // Add userRank as optional prop
  onClaimReward: (achievementId: string) => void;
}

const DuolingoProgress: React.FC<DuolingoProgressProps> = ({
  userStats,
  achievements,
  weeklyGoal,
  userRank,
  onClaimReward
}) => {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'achievements' | 'streak'>('overview');
  const [celebratingLevel, setCelebratingLevel] = useState(false);

  const weeklyProgress = (userStats.lessonsThisWeek / weeklyGoal) * 100;
  const levelProgress = (userStats.xp / userStats.xpToNextLevel) * 100;

  useEffect(() => {
    // Trigger level up celebration
    if (userStats.xp >= userStats.xpToNextLevel) {
      setCelebratingLevel(true);
      setTimeout(() => setCelebratingLevel(false), 3000);
    }
  }, [userStats.level, userStats.xp, userStats.xpToNextLevel]);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'text-gray-600 bg-gray-100 border-gray-300';
      case 'rare': return 'text-blue-600 bg-blue-100 border-blue-300';
      case 'epic': return 'text-purple-600 bg-purple-100 border-purple-300';
      case 'legendary': return 'text-yellow-600 bg-yellow-100 border-yellow-300';
      default: return 'text-gray-600 bg-gray-100 border-gray-300';
    }
  };

  const getStreakEmoji = (days: number) => {
    if (days >= 365) return '🔥';
    if (days >= 100) return '💎';
    if (days >= 30) return '⭐';
    if (days >= 7) return '🌟';
    return '✨';
  };

  // Helper function to get default icon for achievement
  const getDefaultIcon = (achievementId: string) => {
    switch (achievementId) {
      case 'first-lesson': return <BookOpen className="w-6 h-6" />;
      case 'fundamentals-master': return <Crown className="w-6 h-6" />;
      case 'streak-3': return <Zap className="w-6 h-6" />;
      case 'week-streak': return <Flame className="w-6 h-6" />;
      case 'streak-14': return <Target className="w-6 h-6" />;
      case 'streak-30': return <Trophy className="w-6 h-6" />;
      case 'streak-100': return <Crown className="w-6 h-6" />;
      case 'perfect-score': return <Star className="w-6 h-6" />;
      case 'speed-demon': return <Zap className="w-6 h-6" />;
      case 'knowledge-seeker': return <BookOpen className="w-6 h-6" />;
      case 'ecg-master': return <Crown className="w-6 h-6" />;
      case 'master-title': return <Trophy className="w-6 h-6" />;
      default: return <Award className="w-6 h-6" />;
    }
  };

  // Check for unclaimed achievements - handle both Firebase and local structures
  const unclaimedAchievements = achievements.filter(a => {
    // Firebase structure has explicit 'claimed' field
    if ('claimed' in a) {
      return a.completed && !a.claimed;
    }
    // Local structure assumes unclaimed if completed and progress >= total
    return a.completed && a.progress >= a.total;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Your Progress</h1>
          <p className="text-gray-600">Track your ECG learning journey</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-1 shadow-lg">
            {(['overview', 'achievements', 'streak'] as const).map((tab) => (
              <Button
                key={tab}
                variant={selectedTab === tab ? 'default' : 'ghost'}
                onClick={() => setSelectedTab(tab)}
                className={`px-6 py-2 rounded-full capitalize ${
                  selectedTab === tab 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab === 'overview' && <TrendingUp className="w-4 h-4 mr-2" />}
                {tab === 'achievements' && <Trophy className="w-4 h-4 mr-2" />}
                {tab === 'streak' && <Flame className="w-4 h-4 mr-2" />}
                {tab}
              </Button>
            ))}
          </div>
        </div>

        {/* Level Up Celebration */}
        {celebratingLevel && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <Card className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-2xl animate-pulse">
              <CardContent className="p-8 text-center">
                <Crown className="w-16 h-16 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-2">Level Up!</h2>
                <p className="text-xl">You reached Level {userStats.level}!</p>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5" />
                  <span>+50 XP Bonus</span>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Content based on selected tab */}
        {selectedTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Level & XP Card */}
            <Card className="lg:col-span-2 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="w-6 h-6 text-yellow-500" />
                  Level {userStats.level}
                  <div className="ml-auto">
                    <ProfileBadgeDisplay userRank={(userRank as any) || 'ECGKid Intern'} />
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>{userStats.xp} XP</span>
                    <span>{userStats.xpToNextLevel} XP</span>
                  </div>
                  <Progress value={levelProgress} className="h-4" />
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{userStats.totalLessons}</div>
                    <div className="text-sm text-gray-600">Total Lessons</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{userStats.perfectLessons}</div>
                    <div className="text-sm text-gray-600">Perfect Scores</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{userStats.gems}</div>
                    <div className="text-sm text-gray-600">Gems</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">{userStats.hearts}</div>
                    <div className="text-sm text-gray-600">Hearts</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Goal Card */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-green-500" />
                  Weekly Goal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-green-600 mb-1">
                    {userStats.lessonsThisWeek}/{weeklyGoal}
                  </div>
                  <div className="text-sm text-gray-600">Lessons this week</div>
                </div>
                <Progress value={weeklyProgress} className="h-3 mb-4" />
                {weeklyProgress >= 100 ? (
                  <Badge className="w-full justify-center bg-green-500">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Goal Achieved!
                  </Badge>
                ) : (
                  <p className="text-sm text-gray-600 text-center">
                    {weeklyGoal - userStats.lessonsThisWeek} lessons to go
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Streak Card */}
            <Card className="lg:col-span-3 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flame className="w-6 h-6 text-orange-500" />
                  Streak Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-6xl mb-2">{getStreakEmoji(userStats.currentStreak)}</div>
                    <div className="text-3xl font-bold text-orange-600 mb-1">
                      {userStats.currentStreak}
                    </div>
                    <div className="text-gray-600">Current Streak</div>
                  </div>
                  <div className="text-center">
                    <div className="text-6xl mb-2">🏆</div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      {userStats.longestStreak}
                    </div>
                    <div className="text-gray-600">Longest Streak</div>
                  </div>
                </div>
                
                {userStats.currentStreak > 0 && (
                  <div className="mt-6 space-y-3">
                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <div className="flex items-center gap-2 text-orange-700">
                        <Flame className="w-5 h-5" />
                        <span className="font-medium">
                          Don't break your streak! Complete a lesson today.
                        </span>
                      </div>
                    </div>
                    
                    {/* Next reward indicator */}
                    {(() => {
                      const nextMilestone = userStats.currentStreak < 3 ? 3 : 
                                          userStats.currentStreak < 7 ? 7 :
                                          userStats.currentStreak < 14 ? 14 :
                                          userStats.currentStreak < 30 ? 30 :
                                          userStats.currentStreak < 100 ? 100 : null;
                      
                      if (nextMilestone) {
                        const daysToGo = nextMilestone - userStats.currentStreak;
                        const nextReward = nextMilestone === 3 ? '15 Gems + 75 XP' :
                                         nextMilestone === 7 ? '50 Gems + 150 XP' :
                                         nextMilestone === 14 ? '100 Gems + 300 XP' :
                                         nextMilestone === 30 ? '250 Gems + 750 XP' :
                                         '500 Gems + Legendary Title';
                        
                        return (
                          <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="text-purple-700 font-medium">Next Reward</div>
                                <div className="text-sm text-purple-600">{nextReward}</div>
                              </div>
                              <div className="text-right">
                                <div className="text-purple-700 font-bold text-lg">{daysToGo}</div>
                                <div className="text-sm text-purple-600">days to go</div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    })()}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}

        {selectedTab === 'achievements' && (
          <AchievementTree 
            achievements={achievements.map(a => ({
              ...a,
              category: a.category || 'beginner'
            }))}
            onClaimReward={onClaimReward}
          />
        )}

        {selectedTab === 'streak' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Streak Calendar */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-blue-500" />
                  Streak Calendar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <div className="text-6xl mb-2">{getStreakEmoji(userStats.currentStreak)}</div>
                  <div className="text-2xl font-bold text-orange-600">
                    {userStats.currentStreak} Day Streak
                  </div>
                </div>
                
                {/* Simple calendar representation */}
                <div className="grid grid-cols-7 gap-2 text-center text-sm">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="font-medium text-gray-600 py-2">{day}</div>
                  ))}
                  {Array.from({length: 35}, (_, i) => (
                    <div 
                      key={i} 
                      className={`w-8 h-8 rounded flex items-center justify-center text-xs ${
                        i % 3 === 0 ? 'bg-green-500 text-white' : 
                        i % 7 === 0 ? 'bg-orange-500 text-white' :
                        'bg-gray-100 text-gray-400'
                      }`}
                    >
                      {(i % 30) + 1}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Streak Rewards */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-purple-500" />
                  Streak Rewards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { days: 3, reward: '15 Gems + 75 XP', icon: '⭐', completed: userStats.currentStreak >= 3 },
                    { days: 7, reward: '50 Gems + 150 XP', icon: '�', completed: userStats.currentStreak >= 7 },
                    { days: 14, reward: '100 Gems + 300 XP', icon: '💎', completed: userStats.currentStreak >= 14 },
                    { days: 30, reward: '250 Gems + 750 XP', icon: '🏆', completed: userStats.currentStreak >= 30 },
                    { days: 100, reward: '500 Gems + Legendary Title', icon: '�', completed: userStats.currentStreak >= 100 },
                  ].map((milestone) => (
                    <div 
                      key={milestone.days}
                      className={`flex items-center gap-4 p-4 rounded-lg border ${
                        milestone.completed 
                          ? 'bg-green-50 border-green-200' 
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="text-2xl">{milestone.icon}</div>
                      <div className="flex-1">
                        <div className="font-bold">{milestone.days} Day Streak</div>
                        <div className="text-sm text-gray-600">{milestone.reward}</div>
                      </div>
                      {milestone.completed && (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default DuolingoProgress;
