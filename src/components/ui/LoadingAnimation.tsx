import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

interface LoadingAnimationProps {
  type?: 'medical' | 'spinner' | 'pulse' | 'dots';
  size?: number;
  message?: string;
  className?: string;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({
  type = 'medical',
  size = 80,
  message = 'Loading...',
  className = ''
}) => {
  const getAnimationSrc = () => {
    switch (type) {
      case 'medical':
        return '/animations/loading-medical.json';
      case 'pulse':
        return '/animations/heartbeat.json';
      case 'spinner':
        return '/animations/loading-spinner.json';
      case 'dots':
        return '/animations/loading-dots.json';
      default:
        return '/animations/loading-medical.json';
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      <div className="relative">
        <Player
          autoplay
          loop
          src={getAnimationSrc()}
          style={{ height: size, width: size }}
        />
      </div>
      {message && (
        <p className="text-sm text-gray-600 font-medium animate-pulse">
          {message}
        </p>
      )}
    </div>
  );
};

export default LoadingAnimation;