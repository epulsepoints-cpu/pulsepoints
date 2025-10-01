import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

interface AnimationFeedbackProps {
  type: 'success' | 'error' | 'loading' | 'achievement' | 'notification';
  size?: number;
  className?: string;
  onComplete?: () => void;
  loop?: boolean;
}

const AnimationFeedback: React.FC<AnimationFeedbackProps> = ({
  type,
  size = 60,
  className = '',
  onComplete,
  loop = true
}) => {
  const getAnimationSrc = () => {
    switch (type) {
      case 'success':
        return '/animations/success-checkmark.json';
      case 'error':
        return '/animations/error-feedback.json';
      case 'loading':
        return '/animations/loading-medical.json';
      case 'achievement':
        return '/animations/achievement-badge.json';
      case 'notification':
        return '/animations/notification-bell.json';
      default:
        return '/animations/loading-medical.json';
    }
  };

  const getBackgroundColor = () => {
    switch (type) {
      case 'success':
        return 'bg-green-50';
      case 'error':
        return 'bg-red-50';
      case 'loading':
        return 'bg-blue-50';
      case 'achievement':
        return 'bg-yellow-50';
      case 'notification':
        return 'bg-purple-50';
      default:
        return 'bg-gray-50';
    }
  };

  return (
    <div 
      className={`inline-flex items-center justify-center rounded-full ${getBackgroundColor()} ${className}`}
      style={{ width: size + 20, height: size + 20 }}
    >
      <Player
        autoplay
        loop={loop}
        src={getAnimationSrc()}
        style={{ height: size, width: size }}
        onEvent={(event) => {
          if (event === 'complete' && onComplete) {
            onComplete();
          }
        }}
      />
    </div>
  );
};

export default AnimationFeedback;