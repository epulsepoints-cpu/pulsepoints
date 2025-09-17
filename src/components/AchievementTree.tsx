import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Award,
  Trophy,
  Crown,
  Star,
  Flame,
  Zap,
  Diamond,
  BookOpen,
  Target,
  CheckCircle,
  Lock,
  Gift
} from 'lucide-react';

interface Achievement {
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
  category: 'beginner' | 'progress' | 'mastery' | 'special';
  prerequisites?: string[];
}

interface AchievementTreeProps {
  achievements: Achievement[];
  onClaimReward: (achievementId: string) => void;
}

const AchievementTree: React.FC<AchievementTreeProps> = ({ achievements, onClaimReward }) => {
  
  const getAchievementIcon = (achievementId: string, completed: boolean) => {
    const iconClass = `w-8 h-8 ${completed ? 'text-yellow-500' : 'text-gray-400'}`;
    
    switch (achievementId) {
      case 'first-lesson': return <BookOpen className={iconClass} />;
      case 'fundamentals-master': return <Crown className={iconClass} />;
      case 'week-streak': return <Flame className={iconClass} />;
      case 'perfect-score': return <Star className={iconClass} />;
      case 'speed-demon': return <Zap className={iconClass} />;
      case 'knowledge-seeker': return <Target className={iconClass} />;
      case 'ecg-master': return <Trophy className={iconClass} />;
      default: return <Award className={iconClass} />;
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'bg-gray-100 border-gray-300 text-gray-700';
      case 'rare': return 'bg-blue-100 border-blue-300 text-blue-700';
      case 'epic': return 'bg-purple-100 border-purple-300 text-purple-700';
      case 'legendary': return 'bg-yellow-100 border-yellow-300 text-yellow-700';
      default: return 'bg-gray-100 border-gray-300 text-gray-700';
    }
  };

  const getCategoryAchievements = (category: string) => {
    return achievements.filter(a => a.category === category);
  };

  const isAchievementUnlocked = (achievement: Achievement) => {
    if (!achievement.prerequisites || achievement.prerequisites.length === 0) {
      return true;
    }
    
    return achievement.prerequisites.every(preReqId => {
      const preReq = achievements.find(a => a.id === preReqId);
      return preReq && preReq.completed;
    });
  };

  const renderAchievementCard = (achievement: Achievement) => {
    const unlocked = isAchievementUnlocked(achievement);
    const canClaim = achievement.completed && !achievement.claimed;
    
    return (
      <Card 
        key={achievement.id}
        className={`relative transition-all duration-300 ${
          achievement.completed 
            ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-lg' 
            : unlocked 
              ? 'bg-white border-gray-200 hover:shadow-md' 
              : 'bg-gray-50 border-gray-100 opacity-70'
        }`}
      >
        {!unlocked && (
          <div className="absolute top-2 right-2">
            <Lock className="w-4 h-4 text-gray-400" />
          </div>
        )}
        
        {canClaim && (
          <div className="absolute -top-2 -right-2">
            <div className="bg-yellow-400 text-yellow-900 rounded-full p-1 animate-pulse">
              <Gift className="w-4 h-4" />
            </div>
          </div>
        )}

        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className={`flex-shrink-0 ${!unlocked ? 'opacity-50' : ''}`}>
              {getAchievementIcon(achievement.id, achievement.completed)}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className={`font-semibold text-sm ${!unlocked ? 'text-gray-400' : 'text-gray-900'}`}>
                  {achievement.title}
                </h4>
                <Badge 
                  variant="outline" 
                  className={`text-xs ${getRarityColor(achievement.rarity)}`}
                >
                  {achievement.rarity}
                </Badge>
              </div>
              
              <p className={`text-xs mb-3 ${!unlocked ? 'text-gray-400' : 'text-gray-600'}`}>
                {achievement.description}
              </p>
              
              {unlocked && (
                <>
                  <div className="mb-3">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                      <span>{achievement.progress}/{achievement.total}</span>
                      <span>{Math.round((achievement.progress / achievement.total) * 100)}%</span>
                    </div>
                    <Progress 
                      value={(achievement.progress / achievement.total) * 100} 
                      className="h-2"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs">
                      <Zap className="w-3 h-3 text-yellow-500" />
                      <span className="font-medium">{achievement.reward.xp} XP</span>
                      {achievement.reward.gems && (
                        <>
                          <Diamond className="w-3 h-3 text-purple-500" />
                          <span className="font-medium">{achievement.reward.gems} Gems</span>
                        </>
                      )}
                    </div>
                    
                    {canClaim && (
                      <Button 
                        size="sm" 
                        onClick={() => onClaimReward(achievement.id)}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs px-2 py-1 h-6"
                      >
                        Claim
                      </Button>
                    )}
                  </div>
                </>
              )}
              
              {achievement.completed && (
                <Badge className="mt-2 bg-green-500 text-white text-xs">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Completed
                </Badge>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  const categoryData = [
    {
      id: 'beginner',
      title: 'First Steps',
      description: 'Start your ECG learning journey',
      icon: <BookOpen className="w-6 h-6 text-blue-500" />,
      color: 'from-blue-50 to-cyan-50 border-blue-200'
    },
    {
      id: 'progress',
      title: 'Learning Progress',
      description: 'Track your consistent learning',
      icon: <Target className="w-6 h-6 text-green-500" />,
      color: 'from-green-50 to-emerald-50 border-green-200'
    },
    {
      id: 'mastery',
      title: 'Mastery Achievements',
      description: 'Prove your ECG expertise',
      icon: <Crown className="w-6 h-6 text-purple-500" />,
      color: 'from-purple-50 to-violet-50 border-purple-200'
    },
    {
      id: 'special',
      title: 'Special Accomplishments',
      description: 'Rare and legendary achievements',
      icon: <Trophy className="w-6 h-6 text-yellow-500" />,
      color: 'from-yellow-50 to-amber-50 border-yellow-200'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Achievement Tree</h2>
        <p className="text-gray-600">Complete lessons and modules to unlock new achievements</p>
      </div>

      {categoryData.map(category => {
        const categoryAchievements = getCategoryAchievements(category.id);
        if (categoryAchievements.length === 0) return null;

        return (
          <Card key={category.id} className={`bg-gradient-to-r ${category.color}`}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                {category.icon}
                <div>
                  <h3 className="text-lg font-bold">{category.title}</h3>
                  <p className="text-sm text-gray-600 font-normal">{category.description}</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryAchievements.map(renderAchievementCard)}
              </div>
            </CardContent>
          </Card>
        );
      })}
      
      {achievements.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <Trophy className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Achievements Yet</h3>
            <p className="text-gray-600">Complete your first lesson to start earning achievements!</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AchievementTree;
