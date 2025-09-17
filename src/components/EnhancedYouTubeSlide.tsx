import React from 'react';
import { EnhancedYouTubePlayer } from './EnhancedYouTubePlayer';

interface YouTubeSlideProps {
  videoId: string;
  title: string;
  description?: string;
  duration?: number;
  minimumWatchTime?: number;
  requireFullWatch?: boolean;
  autoPlay?: boolean;
  onVideoComplete: () => void;
}

export const EnhancedYouTubeSlide: React.FC<YouTubeSlideProps> = ({
  videoId,
  title,
  description,
  duration,
  minimumWatchTime = 0,
  requireFullWatch = false,
  autoPlay = false,
  onVideoComplete
}) => {
  return (
    <EnhancedYouTubePlayer
      video={{
        videoId,
        title,
        description,
        duration
      }}
      autoPlay={autoPlay}
      onComplete={onVideoComplete}
      showDescription={true}
      requireFullWatch={requireFullWatch}
      minimumWatchTime={minimumWatchTime}
    />
  );
};
