import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { 
  Lock, 
  CheckCircle, 
  Crown, 
  Star,
  Zap,
  Heart,
  Target,
  Award,
  Clock,
  Play
} from 'lucide-react';
import { EventDay } from '@/types/events';

interface EventDayCardProps {
  day: EventDay;
  dayNumber: number;
  isUnlocked: boolean;
  isCompleted: boolean;
  isBossChallenge?: boolean;
  themeStyles: {
    gradient: string;
    iconColor: string;
    bgColor: string;
    borderColor: string;
  };
  onClick: () => void;
  onComplete: (xp: number, gems: number, accuracy: number, timeSpent: number) => void;
}

const EventDayCard: React.FC<EventDayCardProps> = ({
  day,
  dayNumber,
  isUnlocked,
  isCompleted,
  isBossChallenge,
  themeStyles,
  onClick
}) => {
  // Get day type icon
  const getTypeIcon = () => {
    if (isBossChallenge) return Crown;
    
    const icons = {
      'intro-lesson': Star,
      'mini-quiz': Target,
      'ecg-case': Heart,
      'drag-drop-puzzle': Zap,
      'time-challenge': Clock,
      'visual-sorting': Award,
      'scenario-choice': Play,
      'flashcards': Star,
      'annotation-task': Target,
      'boss-challenge': Crown
    };
    
    return icons[day.type] || Star;
  };

  const TypeIcon = getTypeIcon();

  // Get card styling based on state
  const getCardStyles = () => {
    if (isCompleted) {
      return {
        border: 'border-green-300 border-2',
        bg: 'bg-green-50',
        shadow: 'shadow-lg shadow-green-100'
      };
    }
    
    if (isBossChallenge && isUnlocked) {
      return {
        border: `border-2 ${themeStyles.borderColor}`,
        bg: `bg-gradient-to-br ${themeStyles.gradient} opacity-90`,
        shadow: 'shadow-xl shadow-purple-200'
      };
    }
    
    if (isUnlocked) {
      return {
        border: `border-2 ${themeStyles.borderColor}`,
        bg: themeStyles.bgColor,
        shadow: 'shadow-md'
      };
    }
    
    return {
      border: 'border-gray-200',
      bg: 'bg-gray-50',
      shadow: 'shadow-sm'
    };
  };

  const cardStyles = getCardStyles();
  const isDayWeekend = dayNumber === 6 || dayNumber === 7;

  return (
    <Card 
      className={cn(
        "relative cursor-pointer transition-all duration-300 hover:scale-105",
        cardStyles.border,
        cardStyles.bg,
        cardStyles.shadow,
        !isUnlocked && "cursor-not-allowed opacity-60",
        "min-h-[100px]"
      )}
      onClick={onClick}
    >
      <CardContent className="p-3 text-center h-full flex flex-col justify-between">
        {/* Day Number */}
        <div className={cn(
          "text-xs font-bold mb-2",
          isCompleted ? "text-green-600" : 
          isUnlocked ? themeStyles.iconColor : "text-gray-400"
        )}>
          Day {dayNumber}
          {isDayWeekend && (
            <Badge variant="secondary" className="ml-1 text-xs">
              {dayNumber === 6 ? 'Sat' : 'Sun'}
            </Badge>
          )}
        </div>

        {/* Icon */}
        <div className="flex-1 flex items-center justify-center mb-2">
          {!isUnlocked ? (
            <Lock className="w-6 h-6 text-gray-400" />
          ) : isCompleted ? (
            <div className="relative">
              <CheckCircle className="w-8 h-8 text-green-500" />
              <div className="absolute -top-1 -right-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
              </div>
            </div>
          ) : isBossChallenge ? (
            <div className={cn(
              "p-2 rounded-full",
              "bg-gradient-to-br from-yellow-400 to-orange-500 text-white",
              "animate-pulse"
            )}>
              <Crown className="w-5 h-5" />
            </div>
          ) : (
            <div className={cn(
              "p-2 rounded-full",
              isUnlocked ? themeStyles.bgColor : "bg-gray-100"
            )}>
              <TypeIcon className={cn(
                "w-5 h-5",
                isUnlocked ? themeStyles.iconColor : "text-gray-400"
              )} />
            </div>
          )}
        </div>

        {/* Title */}
        <div className={cn(
          "text-xs font-medium leading-tight",
          isCompleted ? "text-green-700" :
          isUnlocked ? "text-gray-700" : "text-gray-400"
        )}>
          {isBossChallenge ? "Boss" : day.title.split(' ').slice(0, 2).join(' ')}
        </div>

        {/* Rewards */}
        {isUnlocked && (
          <div className="mt-2 flex justify-center gap-1 text-xs">
            <Badge variant="secondary" className="px-1 py-0.5 text-xs">
              {day.rewards.xp}XP
            </Badge>
            <Badge variant="secondary" className="px-1 py-0.5 text-xs">
              {day.rewards.gems}💎
            </Badge>
          </div>
        )}

        {/* Special indicators */}
        {day.timeLimit && isUnlocked && !isCompleted && (
          <div className="absolute top-1 right-1">
            <Badge variant="destructive" className="text-xs px-1 py-0.5">
              <Clock className="w-3 h-3 mr-0.5" />
              {Math.floor(day.timeLimit / 60)}m
            </Badge>
          </div>
        )}

        {isBossChallenge && isUnlocked && (
          <div className="absolute -top-2 -right-2">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full border-2 border-white shadow-lg">
              BOSS
            </div>
          </div>
        )}

        {isCompleted && (
          <div className="absolute -top-1 -right-1">
            <div className="bg-green-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
              ✓
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default EventDayCard;
