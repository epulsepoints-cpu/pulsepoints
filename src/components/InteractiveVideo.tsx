import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, Volume2, HelpCircle, CheckCircle } from 'lucide-react';

interface InteractiveVideoProps {
  content: {
    videoUrl: string;
    title: string;
    duration: number;
    interactions: Array<{
      timestamp: number;
      type: 'quiz' | 'hotspot' | 'pause' | 'branch';
      question?: string;
      options?: string[];
      correct?: number;
      description?: string;
      hotspotArea?: { x: number; y: number; width: number; height: number };
      branchTo?: string;
    }>;
    completionRequirement: 'watch_all' | 'all_interactions' | 'score_threshold';
    minimumScore?: number;
  };
  onComplete: (score: number, watchTime: number) => void;
}

const InteractiveVideo: React.FC<InteractiveVideoProps> = ({ content, onComplete }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [currentInteraction, setCurrentInteraction] = useState<any>(null);
  const [completedInteractions, setCompletedInteractions] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [totalWatchTime, setTotalWatchTime] = useState(0);
  const [showHotspots, setShowHotspots] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const time = video.currentTime;
      setCurrentTime(time);
      setTotalWatchTime(prev => prev + 0.1);

      // Check for interactions at current timestamp
      const interaction = content.interactions.find(
        inter => Math.abs(inter.timestamp - time) < 0.5 && !completedInteractions.includes(inter.timestamp)
      );

      if (interaction) {
        video.pause();
        setIsPlaying(false);
        setCurrentInteraction(interaction);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      checkCompletion();
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('ended', handleEnded);
    };
  }, [completedInteractions, content.interactions]);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (time: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = time;
    setCurrentTime(time);
  };

  const handleVolumeChange = (newVolume: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.volume = newVolume;
    setVolume(newVolume);
  };

  const handleInteractionResponse = (selectedIndex?: number) => {
    if (!currentInteraction) return;

    let points = 0;
    if (currentInteraction.type === 'quiz' && selectedIndex !== undefined) {
      if (selectedIndex === currentInteraction.correct) {
        points = 10;
        setScore(prev => prev + points);
      }
    } else if (currentInteraction.type === 'hotspot' || currentInteraction.type === 'pause') {
      points = 5;
      setScore(prev => prev + points);
    }

    setCompletedInteractions(prev => [...prev, currentInteraction.timestamp]);
    setCurrentInteraction(null);

    // Resume video
    const video = videoRef.current;
    if (video) {
      video.play();
      setIsPlaying(true);
    }
  };

  const handleHotspotClick = (interaction: any) => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    setIsPlaying(false);
    setCurrentInteraction(interaction);
  };

  const checkCompletion = () => {
    const watchPercentage = (currentTime / duration) * 100;
    const interactionPercentage = (completedInteractions.length / content.interactions.length) * 100;
    
    let isComplete = false;
    
    switch (content.completionRequirement) {
      case 'watch_all':
        isComplete = watchPercentage >= 95;
        break;
      case 'all_interactions':
        isComplete = interactionPercentage >= 100;
        break;
      case 'score_threshold':
        isComplete = score >= (content.minimumScore || 70);
        break;
    }

    if (isComplete) {
      onComplete(score, totalWatchTime);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-black rounded-lg overflow-hidden shadow-lg">
      {/* Video Player */}
      <div className="relative">
        <video
          ref={videoRef}
          src={content.videoUrl}
          className="w-full aspect-video"
          onClick={togglePlayPause}
        />

        {/* Interactive Hotspots */}
        {showHotspots && content.interactions
          .filter(inter => inter.type === 'hotspot' && Math.abs(inter.timestamp - currentTime) < 1)
          .map((interaction, index) => (
            <button
              key={index}
              className="absolute bg-blue-500 bg-opacity-80 text-white rounded-full p-2 hover:bg-opacity-100 transition-opacity animate-pulse"
              style={{
                left: `${interaction.hotspotArea?.x || 50}%`,
                top: `${interaction.hotspotArea?.y || 50}%`,
                transform: 'translate(-50%, -50%)'
              }}
              onClick={() => handleHotspotClick(interaction)}
            >
              <HelpCircle className="w-6 h-6" />
            </button>
          ))
        }

        {/* Play/Pause Overlay */}
        {!isPlaying && !currentInteraction && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <button
              onClick={togglePlayPause}
              className="bg-white bg-opacity-80 rounded-full p-4 hover:bg-opacity-100 transition-opacity"
            >
              <Play className="w-12 h-12 text-gray-800" />
            </button>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="bg-gray-900 text-white p-4">
        <div className="flex items-center gap-4 mb-3">
          <button onClick={togglePlayPause} className="hover:text-blue-400">
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </button>
          
          <button onClick={() => handleSeek(currentTime + 10)} className="hover:text-blue-400">
            <SkipForward className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            <Volume2 className="w-5 h-5" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
              className="w-20"
            />
          </div>

          <div className="ml-auto text-sm">
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative">
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-200"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          
          {/* Interaction Markers */}
          {content.interactions.map((interaction, index) => (
            <div
              key={index}
              className={`absolute top-0 w-1 h-2 rounded-full transform -translate-x-1/2 ${
                completedInteractions.includes(interaction.timestamp)
                  ? 'bg-green-400'
                  : 'bg-yellow-400'
              }`}
              style={{ left: `${(interaction.timestamp / duration) * 100}%` }}
              title={`Interaction at ${formatTime(interaction.timestamp)}`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="flex justify-between items-center mt-3 text-sm">
          <div>Score: {score} points</div>
          <div>Interactions: {completedInteractions.length}/{content.interactions.length}</div>
        </div>
      </div>

      {/* Interaction Modal */}
      {currentInteraction && (
        <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-bold mb-4">
              {currentInteraction.type === 'quiz' ? 'Quiz Question' : 'Information'}
            </h3>
            
            {currentInteraction.question && (
              <p className="mb-4">{currentInteraction.question}</p>
            )}
            
            {currentInteraction.description && (
              <p className="mb-4 text-gray-600">{currentInteraction.description}</p>
            )}
            
            {currentInteraction.type === 'quiz' && currentInteraction.options ? (
              <div className="space-y-2">
                {currentInteraction.options.map((option: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => handleInteractionResponse(index)}
                    className="w-full text-left p-3 rounded border hover:bg-gray-50 transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            ) : (
              <button
                onClick={() => handleInteractionResponse()}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
              >
                Continue
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveVideo;
