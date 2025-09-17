// Integration helper for Enhanced Audio Player in lessons
import React from 'react';
import { EnhancedAudioPlayer } from '../components/EnhancedAudioPlayer';
import { getAudioMetadata, AUDIO_REGISTRY } from '../data/audioRegistry';

/**
 * Enhanced Audio Slide Component
 * Integrates the Enhanced Audio Player with lesson slides
 */
export const EnhancedAudioSlide: React.FC<{
  slide: any;
  onComplete?: () => void;
}> = ({ slide, onComplete }) => {
  // Map lesson audio URL to registry metadata
  const getAudioFromSlide = (slide: any) => {
    if (slide.audioUrl) {
      // Try to find in registry first
      const registryEntry = Object.values(AUDIO_REGISTRY).find(
        (audio: any) => audio.url === slide.audioUrl
      );
      
      if (registryEntry) {
        return registryEntry;
      }
      
      // Fallback: create metadata from slide
      return {
        url: slide.audioUrl,
        title: slide.title || 'Audio Content',
        duration: 180, // Default 3 minutes - should be updated with real duration
        transcript: slide.hint || slide.content
      };
    }
    return null;
  };

  const audioData = getAudioFromSlide(slide);

  if (!audioData) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="text-yellow-800 font-medium">Audio Configuration Error</div>
        <div className="text-yellow-600 text-sm">This slide is marked as audio but no audio URL is configured.</div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Slide Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{slide.title}</h2>
        {slide.content && (
          <p className="text-gray-600 mb-4">{slide.content}</p>
        )}
      </div>

      {/* Enhanced Audio Player */}
      <EnhancedAudioPlayer
        audio={audioData}
        autoPlay={false}
        showTranscript={true}
        onComplete={onComplete}
        onProgress={(currentTime, duration) => {
          // Optional: track progress for analytics
          console.log(`Audio progress: ${currentTime}/${duration} seconds`);
        }}
        className="max-w-2xl mx-auto"
      />

      {/* Slide Footer */}
      {slide.hint && (
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
          <p className="text-blue-800 text-sm">
            💡 <strong>Hint:</strong> {slide.hint}
          </p>
        </div>
      )}
    </div>
  );
};

/**
 * Usage in EnhancedDuolingoLesson component:
 * 
 * In your slide rendering logic, replace audio slide rendering with:
 * 
 * ```typescript
 * if (slide.type === 'audio') {
 *   return (
 *     <EnhancedAudioSlide
 *       slide={slide}
 *       onComplete={() => {
 *         setAudioCompleted(true);
 *         // Allow progression to next slide
 *       }}
 *     />
 *   );
 * }
 * ```
 */
