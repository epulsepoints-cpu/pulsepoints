import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Gem, Star, X } from 'lucide-react';
import { Achievement } from '@/services/achievements';

interface AchievementNotificationProps {
  achievement: Achievement;
  onDismiss: () => void;
  show: boolean;
}

const AchievementNotification: React.FC<AchievementNotificationProps> = ({ 
  achievement, 
  onDismiss, 
  show 
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);
      // Auto-dismiss after 5 seconds
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(onDismiss, 300); // Wait for animation to complete
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [show, onDismiss]);

  if (!show) return null;

  return (
    <div className={`fixed top-4 right-4 z-50 transition-all duration-300 ${
      visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <Card className="border-2 border-yellow-400 bg-gradient-to-r from-yellow-50 to-yellow-100 shadow-lg max-w-sm">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-full bg-yellow-500 text-white">
              <Trophy className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-bold text-yellow-800 text-sm">🎉 Achievement Unlocked!</h4>
                <button
                  onClick={() => {
                    setVisible(false);
                    setTimeout(onDismiss, 300);
                  }}
                  className="text-yellow-600 hover:text-yellow-800"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <h5 className="font-semibold text-yellow-800 mb-1">{achievement.title}</h5>
              <p className="text-xs text-yellow-700 mb-2">{achievement.description}</p>
              <div className="flex gap-2">
                {achievement.reward.xp && (
                  <Badge variant="outline" className="text-xs bg-blue-100 text-blue-800">
                    <Star className="w-3 h-3 mr-1" />
                    +{achievement.reward.xp} XP
                  </Badge>
                )}
                {achievement.reward.gems && (
                  <Badge variant="outline" className="text-xs bg-purple-100 text-purple-800">
                    <Gem className="w-3 h-3 mr-1" />
                    +{achievement.reward.gems} Gems
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AchievementNotification;
