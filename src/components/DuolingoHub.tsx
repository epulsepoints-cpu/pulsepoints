import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen, 
  Trophy, 
  Target, 
  Users, 
  Settings,
  Crown,
  Flame,
  Zap,
  Heart,
  Diamond,
  Star,
  TrendingUp,
  Award,
  Bell,
  Calendar,
  ChevronRight,
  Play,
  BarChart3
} from 'lucide-react';

// Import our new Duolingo components
import ECGLearningPath from './ECGLearningPath';
import DuolingoLesson from './DuolingoLesson';
import DuolingoProgress from './DuolingoProgress';

interface DuolingoHubProps {
  user: {
    id: string;
    name: string;
    level: number;
    xp: number;
    xpToNextLevel: number;
    currentStreak: number;
    longestStreak: number;
    hearts: number;
    gems: number;
    totalLessons: number;
    lessonsThisWeek: number;
    perfectLessons: number;
    fastCompletions: number;
  };
  modules: any[];
  moduleProgress: Record<string, any>;
  onLessonComplete: (score: number, timeSpent: number) => void;
  onHeartLost: () => void;
}

const DuolingoHub: React.FC<DuolingoHubProps> = ({
  user,
  modules,
  moduleProgress,
  onLessonComplete,
  onHeartLost
}) => {
  const [currentView, setCurrentView] = useState<'home' | 'learn' | 'progress' | 'lesson'>('home');
  const [selectedLesson, setSelectedLesson] = useState<any>(null);
  const [showNotifications, setShowNotifications] = useState(false);

  // Sample achievements data
  const achievements = [
    {
      id: 'first-lesson',
      title: 'First Steps',
      description: 'Complete your first lesson',
      icon: <BookOpen className="w-6 h-6" />,
      progress: user.totalLessons > 0 ? 1 : 0,
      total: 1,
      completed: user.totalLessons > 0,
      rarity: 'common' as const,
      reward: { xp: 10 }
    },
    {
      id: 'week-streak',
      title: 'Week Warrior',
      description: 'Maintain a 7-day streak',
      icon: <Flame className="w-6 h-6" />,
      progress: Math.min(user.currentStreak, 7),
      total: 7,
      completed: user.currentStreak >= 7,
      rarity: 'rare' as const,
      reward: { xp: 50, gems: 10 }
    },
    {
      id: 'perfect-score',
      title: 'Perfectionist',
      description: 'Get perfect scores in 10 lessons',
      icon: <Star className="w-6 h-6" />,
      progress: user.perfectLessons,
      total: 10,
      completed: user.perfectLessons >= 10,
      rarity: 'epic' as const,
      reward: { xp: 100, gems: 25 }
    },
    {
      id: 'speed-demon',
      title: 'Speed Demon',
      description: 'Complete 5 lessons in under 3 minutes',
      icon: <Zap className="w-6 h-6" />,
      progress: user.fastCompletions,
      total: 5,
      completed: user.fastCompletions >= 5,
      rarity: 'legendary' as const,
      reward: { xp: 200, gems: 50, title: 'Lightning Learner' }
    }
  ];

  const handleLessonSelect = (moduleId: string, lessonId: string) => {
    // Find the lesson
    const module = modules.find(m => m.id === moduleId);
    const lesson = module?.lessons.find(l => l.id === lessonId);
    
    if (lesson) {
      setSelectedLesson(lesson);
      setCurrentView('lesson');
    }
  };

  const handleLessonComplete = (score: number, timeSpent: number) => {
    onLessonComplete(score, timeSpent);
    setCurrentView('home');
    setSelectedLesson(null);
  };

  const handleClaimReward = (achievementId: string) => {
    console.log('Claiming reward for:', achievementId);
    // Handle reward claiming logic
  };

  // Get current lesson streak bonus
  const getStreakBonus = () => {
    if (user.currentStreak >= 30) return '3x XP';
    if (user.currentStreak >= 14) return '2x XP';
    if (user.currentStreak >= 7) return '1.5x XP';
    return null;
  };

  const streakBonus = getStreakBonus();

  if (currentView === 'lesson' && selectedLesson) {
    return (
      <DuolingoLesson
        lesson={selectedLesson}
        onComplete={handleLessonComplete}
        onExit={() => setCurrentView('home')}
        userHearts={user.hearts}
        onHeartLost={onHeartLost}
      />
    );
  }

  if (currentView === 'progress') {
    return (
      <DuolingoProgress
        userStats={user}
        achievements={achievements}
        weeklyGoal={7}
        onClaimReward={handleClaimReward}
      />
    );
  }

  if (currentView === 'learn') {
    return (
      <ECGLearningPath
        modules={modules}
        moduleProgress={moduleProgress}
        onLessonSelect={handleLessonSelect}
        onModuleSelect={(moduleId) => console.log('Selected module:', moduleId)}
        userStreak={user.currentStreak}
        userXP={user.xp}
        userLevel={user.level}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
      
      {/* Top Navigation Bar */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            
            {/* Left side - User info */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {user.name.charAt(0)}
              </div>
              <div>
                <h2 className="font-bold text-gray-900">{user.name}</h2>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Crown className="w-4 h-4 text-yellow-500" />
                  <span>Level {user.level}</span>
                </div>
              </div>
            </div>

            {/* Center - Stats */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-center gap-2 bg-orange-50 px-3 py-2 rounded-full">
                <Flame className="w-5 h-5 text-orange-500" />
                <span className="font-bold text-orange-600">{user.currentStreak}</span>
                <span className="text-sm text-gray-600">day streak</span>
                {streakBonus && (
                  <Badge className="bg-orange-500 text-white text-xs ml-2">
                    {streakBonus}
                  </Badge>
                )}
              </div>
              
              <div className="flex items-center gap-2 bg-yellow-50 px-3 py-2 rounded-full">
                <Zap className="w-5 h-5 text-yellow-500" />
                <span className="font-bold text-yellow-600">{user.xp.toLocaleString()}</span>
                <span className="text-sm text-gray-600">XP</span>
              </div>
              
              <div className="flex items-center gap-2 bg-red-50 px-3 py-2 rounded-full">
                <Heart className="w-5 h-5 text-red-500" />
                <span className="font-bold text-red-600">{user.hearts}</span>
              </div>
              
              <div className="flex items-center gap-2 bg-purple-50 px-3 py-2 rounded-full">
                <Diamond className="w-5 h-5 text-purple-500" />
                <span className="font-bold text-purple-600">{user.gems}</span>
              </div>
            </div>

            {/* Right side - Notifications */}
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative"
              >
                <Bell className="w-5 h-5" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-4 space-y-6">
        
        {/* Welcome Section */}
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome back, {user.name}!</h1>
          <p className="text-gray-600 text-lg">Ready to continue your ECG mastery journey?</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card 
            className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
            onClick={() => setCurrentView('learn')}
          >
            <CardContent className="p-6 text-center">
              <BookOpen className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Continue Learning</h3>
              <p className="text-blue-100">Pick up where you left off</p>
              <div className="mt-4">
                <Button className="bg-white text-blue-600 hover:bg-blue-50">
                  Start Lesson <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
            onClick={() => setCurrentView('progress')}
          >
            <CardContent className="p-6 text-center">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
              <h3 className="text-xl font-bold mb-2">View Progress</h3>
              <p className="text-gray-600">Track achievements & stats</p>
              <div className="mt-4">
                <Button variant="outline">
                  View Progress <BarChart3 className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-6 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-green-500" />
              <h3 className="text-xl font-bold mb-2">Study Groups</h3>
              <p className="text-gray-600">Learn with others</p>
              <div className="mt-4">
                <Button variant="outline">
                  Join Group <Users className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Level Progress */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-blue-500" />
              Level {user.level} Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>{user.xp} XP</span>
                <span>{user.xpToNextLevel} XP to Level {user.level + 1}</span>
              </div>
              <Progress value={(user.xp / user.xpToNextLevel) * 100} className="h-4" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">{user.totalLessons}</div>
                <div className="text-sm text-gray-600">Total Lessons</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">{user.lessonsThisWeek}</div>
                <div className="text-sm text-gray-600">This Week</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">{user.perfectLessons}</div>
                <div className="text-sm text-gray-600">Perfect Scores</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600">{user.currentStreak}</div>
                <div className="text-sm text-gray-600">Day Streak</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Achievements */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-6 h-6 text-yellow-500" />
              Recent Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.filter(a => a.completed).slice(0, 4).map((achievement) => (
                <div key={achievement.id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-bold">{achievement.title}</h4>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                  <Badge className="bg-green-100 text-green-700">
                    Completed
                  </Badge>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <Button 
                variant="outline" 
                onClick={() => setCurrentView('progress')}
              >
                View All Achievements
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Daily Goals */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-6 h-6 text-green-500" />
              Today's Goals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Complete 1 lesson</span>
                <div className="flex items-center gap-2">
                  {user.lessonsThisWeek > 0 ? (
                    <Badge className="bg-green-100 text-green-700">
                      ✓ Done
                    </Badge>
                  ) : (
                    <Button size="sm" onClick={() => setCurrentView('learn')}>
                      Start
                    </Button>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span>Maintain streak</span>
                <Badge className="bg-orange-100 text-orange-700">
                  {user.currentStreak} days
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Earn 50 XP</span>
                <div className="flex items-center gap-2">
                  <Progress value={Math.min((user.xp % 50), 50) * 2} className="w-20 h-2" />
                  <span className="text-sm text-gray-600">{user.xp % 50}/50</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Notifications Panel */}
      {showNotifications && (
        <div className="fixed right-4 top-20 w-80 bg-white rounded-lg shadow-xl border z-50">
          <div className="p-4 border-b">
            <h3 className="font-bold">Notifications</h3>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-start gap-3">
              <Flame className="w-5 h-5 text-orange-500 mt-1" />
              <div>
                <p className="text-sm font-medium">Streak reminder</p>
                <p className="text-xs text-gray-600">Don't forget to complete your lesson today!</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Trophy className="w-5 h-5 text-yellow-500 mt-1" />
              <div>
                <p className="text-sm font-medium">Achievement unlocked</p>
                <p className="text-xs text-gray-600">You earned the \"First Steps\" badge!</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DuolingoHub;
