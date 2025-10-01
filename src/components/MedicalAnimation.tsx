import React from 'react';
import LottieAnimation from './LottieAnimation';

export type MedicalAnimationType = 
  | 'heartbeat'
  | 'ecg-wave'
  | 'pulse'
  | 'stethoscope'
  | 'medical-cross'
  | 'dna-helix'
  | 'brain-activity'
  | 'blood-flow'
  | 'success-check'
  | 'error-cross'
  | 'loading-medical'
  | 'celebration'
  | 'level-up'
  | 'xp-gain'
  | 'gem-sparkle'
  | 'trophy-win'
  | 'star-rating'
  | 'progress-bar'
  | 'book-open'
  | 'graduation-cap';

interface MedicalAnimationProps {
  /** Type of medical animation to display */
  type: MedicalAnimationType;
  /** Size preset for the animation */
  size?: 'small' | 'medium' | 'large' | 'xl';
  /** Custom width (overrides size preset) */
  width?: number | string;
  /** Custom height (overrides size preset) */
  height?: number | string;
  /** Whether the animation should loop */
  loop?: boolean;
  /** Whether the animation should autoplay */
  autoplay?: boolean;
  /** Animation speed multiplier */
  speed?: number;
  /** CSS class name for additional styling */
  className?: string;
  /** Callback when animation completes */
  onComplete?: () => void;
  /** Whether animation should be clickable */
  interactive?: boolean;
  /** Click handler for interactive animations */
  onClick?: () => void;
}

const MedicalAnimation: React.FC<MedicalAnimationProps> = ({
  type,
  size = 'medium',
  width,
  height,
  loop = true,
  autoplay = true,
  speed = 1,
  className = '',
  onComplete,
  interactive = false,
  onClick
}) => {
  // Animation path mapping
  const getAnimationPath = (animationType: MedicalAnimationType): string => {
    const basePath = '/animations';
    
    switch (animationType) {
      case 'heartbeat':
        return `${basePath}/heartbeat.json`;
      case 'ecg-wave':
        return `${basePath}/ecg-wave.json`;
      case 'pulse':
        return `${basePath}/pulse.json`;
      case 'stethoscope':
        return `${basePath}/stethoscope.json`;
      case 'medical-cross':
        return `${basePath}/medical-cross.json`;
      case 'dna-helix':
        return `${basePath}/dna-helix.json`;
      case 'brain-activity':
        return `${basePath}/brain-activity.json`;
      case 'blood-flow':
        return `${basePath}/blood-flow.json`;
      case 'success-check':
        return `${basePath}/success-check.json`;
      case 'error-cross':
        return `${basePath}/error-cross.json`;
      case 'loading-medical':
        return `${basePath}/loading-medical.json`;
      case 'celebration':
        return `${basePath}/celebration.json`;
      case 'level-up':
        return `${basePath}/level-up.json`;
      case 'xp-gain':
        return `${basePath}/xp-gain.json`;
      case 'gem-sparkle':
        return `${basePath}/gem-sparkle.json`;
      case 'trophy-win':
        return `${basePath}/trophy-win.json`;
      case 'star-rating':
        return `${basePath}/star-rating.json`;
      case 'progress-bar':
        return `${basePath}/progress-bar.json`;
      case 'book-open':
        return `${basePath}/book-open.json`;
      case 'graduation-cap':
        return `${basePath}/graduation-cap.json`;
      default:
        return `${basePath}/heartbeat.json`; // Fallback
    }
  };

  // Size presets
  const getSizePreset = (sizePreset: string) => {
    switch (sizePreset) {
      case 'small':
        return { width: 32, height: 32 };
      case 'medium':
        return { width: 64, height: 64 };
      case 'large':
        return { width: 128, height: 128 };
      case 'xl':
        return { width: 200, height: 200 };
      default:
        return { width: 64, height: 64 };
    }
  };

  // Use custom dimensions or size preset
  const dimensions = width && height 
    ? { width, height }
    : getSizePreset(size);

  // Animation-specific configurations
  const getAnimationConfig = (animationType: MedicalAnimationType) => {
    switch (animationType) {
      case 'heartbeat':
      case 'pulse':
        return { loop: true, speed: 1.2 };
      case 'ecg-wave':
        return { loop: true, speed: 0.8 };
      case 'success-check':
      case 'error-cross':
        return { loop: false, speed: 1 };
      case 'celebration':
      case 'level-up':
        return { loop: false, speed: 1.5 };
      case 'loading-medical':
        return { loop: true, speed: 1 };
      default:
        return { loop, speed };
    }
  };

  const animationConfig = getAnimationConfig(type);
  const finalLoop = loop !== undefined ? loop : animationConfig.loop;
  const finalSpeed = speed !== undefined ? speed : animationConfig.speed;

  return (
    <LottieAnimation
      animationPath={getAnimationPath(type)}
      width={dimensions.width}
      height={dimensions.height}
      loop={finalLoop}
      autoplay={autoplay}
      speed={finalSpeed}
      className={className}
      onComplete={onComplete}
      interactive={interactive}
      onClick={onClick}
      showLoading={true}
      loadingComponent={
        <div 
          className={`flex items-center justify-center ${className}`}
          style={dimensions}
        >
          <div className="animate-pulse rounded-full bg-blue-200" style={{ width: '60%', height: '60%' }} />
        </div>
      }
      errorFallback={
        <div 
          className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`}
          style={dimensions}
        >
          <div className="text-gray-400 text-xs">❤️</div>
        </div>
      }
    />
  );
};

export default MedicalAnimation;