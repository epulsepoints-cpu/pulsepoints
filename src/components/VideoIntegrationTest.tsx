import React from 'react';
import { Play, ExternalLink } from 'lucide-react';

// Test component for video integration
const VideoIntegrationTest = () => {
  const testVideos = [
    {
      title: "Heart Anatomy Introduction",
      url: "https://www.youtube.com/watch?v=48Oxvum8fds",
      description: "Basic cardiac structure and function"
    },
    {
      title: "12-Lead ECG Placement",
      url: "https://www.youtube.com/watch?v=4xIwZPQwmjY",
      description: "Proper lead placement technique"
    },
    {
      title: "QRS Complex Analysis",
      url: "https://www.youtube.com/watch?v=XW1sYQSUAs8",
      description: "Understanding QRS morphology"
    }
  ];

  const extractYouTubeId = (url: string): string => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : '';
  };

  const isValidYouTubeUrl = (url: string): boolean => {
    const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;
    return youtubeRegex.test(url);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Video Integration Test</h1>
      
      {testVideos.map((video, index) => {
        const videoId = extractYouTubeId(video.url);
        const isValid = isValidYouTubeUrl(video.url);
        
        return (
          <div key={index} className="mb-8 p-4 border rounded-lg">
            <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
            <p className="text-gray-600 mb-3">{video.description}</p>
            
            <div className="mb-2 text-sm text-gray-500">
              <strong>Original URL:</strong> {video.url}
            </div>
            <div className="mb-2 text-sm text-gray-500">
              <strong>Extracted ID:</strong> {videoId}
            </div>
            <div className="mb-4 text-sm text-gray-500">
              <strong>Valid URL:</strong> {isValid ? '✅ Yes' : '❌ No'}
            </div>
            
            {isValid && videoId ? (
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Play className="h-5 w-5 text-blue-600" />
                  <h4 className="font-semibold text-gray-800">Educational Video</h4>
                </div>
                <div className="relative">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&fs=1&cc_load_policy=1`}
                    title={video.title}
                    className="w-full aspect-video rounded-lg shadow-md"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="mt-2 text-xs text-gray-500 flex items-center gap-1">
                  <ExternalLink className="h-3 w-3" />
                  <a 
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 hover:underline"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-red-50 p-4 rounded-lg text-red-700">
                ❌ Invalid YouTube URL or unable to extract video ID
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default VideoIntegrationTest;
