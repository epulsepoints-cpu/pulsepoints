import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

interface LottieAnimationProps {
  /** Path to the Lottie JSON file (relative to public folder) */
  animationPath: string;
  /** Width of the animation container */
  width?: number | string;
  /** Height of the animation container */
  height?: number | string;
  /** Whether the animation should loop */
  loop?: boolean;
  /** Whether the animation should autoplay */
  autoplay?: boolean;
  /** Animation speed (1 = normal, 2 = 2x speed, 0.5 = half speed) */
  speed?: number;
  /** CSS class name for styling */
  className?: string;
  /** Callback when animation completes */
  onComplete?: () => void;
  /** Whether to show loading state */
  showLoading?: boolean;
  /** Custom loading component */
  loadingComponent?: React.ReactNode;
  /** Error fallback component */
  errorFallback?: React.ReactNode;
  /** Whether animation should be interactive (clickable) */
  interactive?: boolean;
  /** Click handler for interactive animations */
  onClick?: () => void;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationPath,
  width = 200,
  height = 200,
  loop = true,
  autoplay = true,
  speed = 1,
  className = '',
  onComplete,
  showLoading = true,
  loadingComponent,
  errorFallback,
  interactive = false,
  onClick
}) => {
  const [animationData, setAnimationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAnimation = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Try to fetch the animation data
        const response = await fetch(animationPath);
        if (!response.ok) {
          throw new Error(`Failed to load animation: ${response.status}`);
        }
        
        const data = await response.json();
        setAnimationData(data);
      } catch (err) {
        console.error('Error loading Lottie animation:', err);
        setError(err instanceof Error ? err.message : 'Failed to load animation');
      } finally {
        setLoading(false);
      }
    };

    if (animationPath) {
      loadAnimation();
    }
  }, [animationPath]);

  // Loading state
  if (loading) {
    if (loadingComponent) {
      return <>{loadingComponent}</>;
    }
    
    if (showLoading) {
      return (
        <div 
          className={`flex items-center justify-center ${className}`}
          style={{ width, height }}
        >
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      );
    }
    
    return null;
  }

  // Error state
  if (error) {
    if (errorFallback) {
      return <>{errorFallback}</>;
    }
    
    return (
      <div 
        className={`flex items-center justify-center bg-gray-100 rounded-lg ${className}`}
        style={{ width, height }}
      >
        <div className="text-center text-gray-500">
          <div className="text-sm">Animation Error</div>
          <div className="text-xs">{error}</div>
        </div>
      </div>
    );
  }

  // Animation component
  const containerStyle = {
    width,
    height,
    cursor: interactive ? 'pointer' : 'default'
  };

  return (
    <div 
      className={className}
      style={containerStyle}
      onClick={interactive ? onClick : undefined}
    >
      <Lottie
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        style={{ width: '100%', height: '100%' }}
        onComplete={onComplete}
      />
    </div>
  );
};

export default LottieAnimation;