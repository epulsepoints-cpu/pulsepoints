import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { 
  Crown,
  X,
  Star,
  Trophy,
  Target,
  Clock,
  Zap,
  CheckCircle,
  AlertTriangle,
  Play
} from 'lucide-react';
import { WeeklyEvent, UserEventProgress } from '@/types/events';

interface BossChallengeModalProps {
  event: WeeklyEvent;
  userProgress: UserEventProgress;
  onClose: () => void;
  onComplete: () => void;
}

const BossChallengeModal: React.FC<BossChallengeModalProps> = ({
  event,
  userProgress,
  onClose,
  onComplete
}) => {
  const bossDay = event.days.find(day => day.isBossChallenge);
  const isEligible = userProgress.isEligibleForBoss;
  const isCompleted = userProgress.bossCompleted;
  const completedDays = userProgress.daysCompleted.length;

  if (!bossDay) return null;

  const handleStartChallenge = () => {
    // In a real implementation, this would launch the boss challenge
    // For now, we'll simulate completion
    setTimeout(() => {
      onComplete();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute top-4 right-4"
          >
            <X className="w-4 h-4" />
          </Button>

          <div className="text-center space-y-4">
            {/* Boss Challenge Icon */}
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-xl">
              <Crown className="w-10 h-10 text-white" />
            </div>

            <div>
              <CardTitle className="text-2xl font-bold mb-2">
                {bossDay.title}
              </CardTitle>
              <p className="text-gray-600">{bossDay.description}</p>
            </div>

            {/* Status Badge */}
            {isCompleted ? (
              <Badge className="bg-green-500 text-white px-4 py-2">
                <CheckCircle className="w-4 h-4 mr-2" />
                Completed
              </Badge>
            ) : isEligible ? (
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2">
                <Crown className="w-4 h-4 mr-2" />
                Unlocked
              </Badge>
            ) : (
              <Badge variant="secondary" className="px-4 py-2">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Locked
              </Badge>
            )}
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Requirements */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Target className="w-5 h-5" />
              Requirements
            </h3>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span>Complete at least 4 daily challenges</span>
                <div className="flex items-center gap-2">
                  <span className={cn(
                    "font-medium",
                    completedDays >= 4 ? "text-green-600" : "text-gray-600"
                  )}>
                    {completedDays}/4
                  </span>
                  {completedDays >= 4 ? (
                    <CheckCircle className="w-4 h-4 text-green-500" />
                  ) : (
                    <Clock className="w-4 h-4 text-gray-400" />
                  )}
                </div>
              </div>
              
              <Progress 
                value={(completedDays / 4) * 100} 
                className="h-2"
              />
            </div>
          </div>

          {/* Boss Challenge Preview */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Challenge Overview
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Trophy className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="font-bold text-blue-600">{bossDay.rewards.xp}</div>
                <div className="text-sm text-gray-600">Bonus XP</div>
              </div>
              
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <Star className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <div className="font-bold text-purple-600">{bossDay.rewards.gems}</div>
                <div className="text-sm text-gray-600">Bonus Gems</div>
              </div>
              
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <Crown className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="font-bold text-yellow-600">Special</div>
                <div className="text-sm text-gray-600">Badge</div>
              </div>
            </div>
          </div>

          {/* Challenge Phases */}
          {bossDay.tasks && bossDay.tasks.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-bold text-lg">Challenge Phases</h3>
              <div className="space-y-2">
                {bossDay.tasks.map((task, index) => (
                  <div 
                    key={task.id}
                    className="flex items-center gap-3 p-3 border rounded-lg"
                  >
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="font-bold text-sm">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{task.title}</div>
                      <div className="text-sm text-gray-600">{task.description}</div>
                    </div>
                    <Badge variant="outline">{task.points} pts</Badge>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Close
            </Button>
            
            {isCompleted ? (
              <Button disabled className="flex-1">
                <CheckCircle className="w-4 h-4 mr-2" />
                Completed
              </Button>
            ) : isEligible ? (
              <Button
                onClick={handleStartChallenge}
                className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white"
              >
                <Play className="w-4 h-4 mr-2" />
                Start Boss Challenge
              </Button>
            ) : (
              <Button disabled className="flex-1">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Complete More Days
              </Button>
            )}
          </div>

          {/* Warning for incomplete requirements */}
          {!isEligible && (
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5" />
                <div>
                  <div className="font-medium text-yellow-800">
                    Complete more challenges to unlock
                  </div>
                  <div className="text-yellow-700 text-sm mt-1">
                    You need to complete at least 4 daily challenges before attempting the boss challenge. 
                    Come back when you've made more progress!
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BossChallengeModal;
