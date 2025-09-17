import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { 
  Trophy,
  X,
  Crown,
  Star,
  Medal,
  TrendingUp,
  Users,
  Calendar
} from 'lucide-react';
import { WeeklyEvent } from '@/types/events';

interface EventLeaderboardProps {
  event: WeeklyEvent;
  onClose: () => void;
}

interface LeaderboardEntry {
  userId: string;
  username: string;
  avatar?: string;
  daysCompleted: number;
  totalXp: number;
  totalGems: number;
  completionTime: number; // hours
  bossCompleted: boolean;
  rank: number;
}

const EventLeaderboard: React.FC<EventLeaderboardProps> = ({ event, onClose }) => {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState<'overall' | 'speed' | 'completion'>('overall');

  useEffect(() => {
    // Simulate loading leaderboard data
    // In a real implementation, this would fetch from Firebase
    const generateMockLeaderboard = (): LeaderboardEntry[] => {
      const mockUsers = [
        { username: 'ECG_Master_42', daysCompleted: 7, totalXp: 520, totalGems: 104, completionTime: 12, bossCompleted: true },
        { username: 'HeartRhythm_Pro', daysCompleted: 7, totalXp: 485, totalGems: 97, completionTime: 18, bossCompleted: true },
        { username: 'CodeBlue_Hero', daysCompleted: 6, totalXp: 445, totalGems: 89, completionTime: 24, bossCompleted: false },
        { username: 'Cardio_Ninja', daysCompleted: 7, totalXp: 510, totalGems: 102, completionTime: 15, bossCompleted: true },
        { username: 'STEMI_Detective', daysCompleted: 5, totalXp: 375, totalGems: 75, completionTime: 30, bossCompleted: false },
        { username: 'Rhythm_Warrior', daysCompleted: 7, totalXp: 495, totalGems: 99, completionTime: 20, bossCompleted: true },
        { username: 'ECG_Wizard', daysCompleted: 4, totalXp: 300, totalGems: 60, completionTime: 36, bossCompleted: false },
        { username: 'ArrhythmiaHunter', daysCompleted: 6, totalXp: 420, totalGems: 84, completionTime: 28, bossCompleted: false },
        { username: 'PulseChaser', daysCompleted: 7, totalXp: 475, totalGems: 95, completionTime: 22, bossCompleted: true },
        { username: 'VFib_Vanquisher', daysCompleted: 3, totalXp: 225, totalGems: 45, completionTime: 42, bossCompleted: false },
      ];

      return mockUsers.map((user, index) => ({
        userId: `user_${index}`,
        ...user,
        rank: index + 1
      }));
    };

    setTimeout(() => {
      const mockData = generateMockLeaderboard();
      
      // Sort based on selected tab
      let sortedData = [...mockData];
      switch (selectedTab) {
        case 'speed':
          sortedData.sort((a, b) => {
            if (a.daysCompleted !== b.daysCompleted) {
              return b.daysCompleted - a.daysCompleted;
            }
            return a.completionTime - b.completionTime;
          });
          break;
        case 'completion':
          sortedData.sort((a, b) => {
            if (a.bossCompleted !== b.bossCompleted) {
              return a.bossCompleted ? -1 : 1;
            }
            return b.daysCompleted - a.daysCompleted;
          });
          break;
        default: // overall
          sortedData.sort((a, b) => {
            if (a.bossCompleted !== b.bossCompleted) {
              return a.bossCompleted ? -1 : 1;
            }
            if (a.daysCompleted !== b.daysCompleted) {
              return b.daysCompleted - a.daysCompleted;
            }
            return b.totalXp - a.totalXp;
          });
      }

      // Update ranks
      sortedData.forEach((entry, index) => {
        entry.rank = index + 1;
      });

      setLeaderboard(sortedData);
      setLoading(false);
    }, 1000);
  }, [selectedTab]);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-5 h-5 text-yellow-500" />;
      case 2:
        return <Medal className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Medal className="w-5 h-5 text-amber-600" />;
      default:
        return <span className="w-5 h-5 flex items-center justify-center text-sm font-bold text-gray-500">#{rank}</span>;
    }
  };

  const getRankBg = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-200";
      case 2:
        return "bg-gradient-to-r from-gray-50 to-slate-50 border-gray-200";
      case 3:
        return "bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200";
      default:
        return "bg-white border-gray-100";
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Trophy className="w-6 h-6 text-yellow-500" />
              <div>
                <CardTitle className="text-xl">Event Leaderboard</CardTitle>
                <p className="text-sm text-gray-600 mt-1">{event.title}</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mt-4">
            <Button
              variant={selectedTab === 'overall' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedTab('overall')}
            >
              <Star className="w-4 h-4 mr-1" />
              Overall
            </Button>
            <Button
              variant={selectedTab === 'speed' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedTab('speed')}
            >
              <TrendingUp className="w-4 h-4 mr-1" />
              Speed
            </Button>
            <Button
              variant={selectedTab === 'completion' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedTab('completion')}
            >
              <Calendar className="w-4 h-4 mr-1" />
              Completion
            </Button>
          </div>

          {/* Event Stats */}
          <div className="grid grid-cols-3 gap-4 mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{event.participants}</div>
              <div className="text-sm text-gray-600">Participants</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {leaderboard.filter(entry => entry.bossCompleted).length}
              </div>
              <div className="text-sm text-gray-600">Boss Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {leaderboard.filter(entry => entry.daysCompleted === 7).length}
              </div>
              <div className="text-sm text-gray-600">Full Completion</div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          <ScrollArea className="h-[400px]">
            {loading ? (
              <div className="p-6 space-y-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="animate-pulse flex items-center gap-4 p-4">
                    <div className="w-8 h-8 bg-gray-200 rounded"></div>
                    <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 space-y-2">
                {leaderboard.map((entry, index) => (
                  <div
                    key={entry.userId}
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md",
                      getRankBg(entry.rank)
                    )}
                  >
                    {/* Rank */}
                    <div className="flex items-center justify-center w-8">
                      {getRankIcon(entry.rank)}
                    </div>

                    {/* Avatar */}
                    <Avatar className="w-10 h-10">
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold">
                        {entry.username.charAt(0).toUpperCase()}
                      </div>
                    </Avatar>

                    {/* User Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold truncate">{entry.username}</h4>
                        {entry.bossCompleted && (
                          <Crown className="w-4 h-4 text-yellow-500" />
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>{entry.daysCompleted}/7 days</span>
                        <span>{entry.completionTime}h completion</span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="text-right">
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="font-bold text-blue-600">{entry.totalXp}</div>
                          <div className="text-xs text-gray-500">XP</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-purple-600">{entry.totalGems}</div>
                          <div className="text-xs text-gray-500">Gems</div>
                        </div>
                      </div>
                    </div>

                    {/* Progress Badge */}
                    <div className="ml-2">
                      {entry.bossCompleted ? (
                        <Badge className="bg-green-500 text-white">
                          Complete
                        </Badge>
                      ) : entry.daysCompleted >= 4 ? (
                        <Badge className="bg-yellow-500 text-white">
                          Boss Ready
                        </Badge>
                      ) : (
                        <Badge variant="secondary">
                          In Progress
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventLeaderboard;
