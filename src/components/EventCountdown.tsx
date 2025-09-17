import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { 
  Clock,
  AlertTriangle,
  Calendar
} from 'lucide-react';

interface EventCountdownProps {
  endDate: Date;
  className?: string;
}

const EventCountdown: React.FC<EventCountdownProps> = ({ endDate, className }) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isExpired: boolean;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: false });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const eventEnd = new Date(endDate).getTime();
      const difference = eventEnd - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
      }
    };

    // Calculate immediately
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  const { days, hours, minutes, seconds, isExpired } = timeLeft;

  if (isExpired) {
    return (
      <div className={cn("flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg", className)}>
        <AlertTriangle className="w-5 h-5 text-red-500" />
        <span className="text-red-600 font-medium">Event Expired</span>
      </div>
    );
  }

  // Determine urgency styling
  const isUrgent = days < 1;
  const isCritical = hours < 6 && days === 0;

  return (
    <div className={cn(
      "flex items-center gap-3 p-3 rounded-lg border",
      isCritical ? "bg-red-50 border-red-200" :
      isUrgent ? "bg-orange-50 border-orange-200" :
      "bg-blue-50 border-blue-200",
      className
    )}>
      <div className="flex items-center gap-2">
        <Clock className={cn(
          "w-5 h-5",
          isCritical ? "text-red-500" :
          isUrgent ? "text-orange-500" :
          "text-blue-500"
        )} />
        <span className={cn(
          "font-medium text-sm",
          isCritical ? "text-red-700" :
          isUrgent ? "text-orange-700" :
          "text-blue-700"
        )}>
          {isCritical ? "Ending Soon!" :
           isUrgent ? "Less than 1 day left" :
           "Time Remaining"}
        </span>
      </div>

      <div className="flex items-center gap-2 ml-auto">
        {days > 0 && (
          <div className="text-center">
            <div className={cn(
              "text-lg font-bold",
              isCritical ? "text-red-600" :
              isUrgent ? "text-orange-600" :
              "text-blue-600"
            )}>
              {days}
            </div>
            <div className="text-xs text-gray-600">day{days !== 1 ? 's' : ''}</div>
          </div>
        )}

        {(days > 0 || hours > 0) && (
          <div className="text-center">
            <div className={cn(
              "text-lg font-bold",
              isCritical ? "text-red-600" :
              isUrgent ? "text-orange-600" :
              "text-blue-600"
            )}>
              {hours.toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-gray-600">hrs</div>
          </div>
        )}

        <div className="text-center">
          <div className={cn(
            "text-lg font-bold",
            isCritical ? "text-red-600" :
            isUrgent ? "text-orange-600" :
            "text-blue-600"
          )}>
            {minutes.toString().padStart(2, '0')}
          </div>
          <div className="text-xs text-gray-600">min</div>
        </div>

        {(days === 0 && hours < 1) && (
          <div className="text-center">
            <div className={cn(
              "text-lg font-bold",
              isCritical ? "text-red-600 animate-pulse" :
              "text-orange-600"
            )}>
              {seconds.toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-gray-600">sec</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCountdown;
