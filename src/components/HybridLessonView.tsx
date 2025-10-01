import React, { useState, useEffect } from 'react';
import { HybridLessonLoader, RemoteLessonContent } from '@/services/hybridLessonLoader';
import { AndroidLessonDebugger } from '@/utils/androidLessonDebugger';

interface HybridLessonViewProps {
  lessonId: string;
  onComplete?: (score: number) => void;
  onExit?: () => void;
}

export const HybridLessonView: React.FC<HybridLessonViewProps> = ({
  lessonId,
  onComplete,
  onExit
}) => {
  const [lessonContent, setLessonContent] = useState<RemoteLessonContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadLesson = async () => {
      try {
        AndroidLessonDebugger.logLesson('Loading hybrid lesson', { lessonId });
        setLoading(true);
        setError(null);
        
        const content = await HybridLessonLoader.loadLessonContent(lessonId);
        
        if (!mounted) return;
        
        if (content) {
          setLessonContent(content);
          AndroidLessonDebugger.logLesson('Hybrid lesson loaded successfully', { 
            lessonId, 
            title: content.title 
          });
        } else {
          setError('Failed to load lesson content from server');
          AndroidLessonDebugger.logLesson('Failed to load hybrid lesson', { lessonId });
        }
      } catch (err) {
        if (!mounted) return;
        
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        setError(errorMessage);
        AndroidLessonDebugger.logLesson('Hybrid lesson error', { lessonId, error: errorMessage });
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    loadLesson();

    return () => {
      mounted = false;
    };
  }, [lessonId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Loading Lesson</h2>
          <p className="text-gray-600">Fetching content from server...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-xl font-semibold text-red-800 mb-2">Failed to Load Lesson</h2>
          <p className="text-red-600 mb-4">{error}</p>
          <div className="space-x-3">
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Retry
            </button>
            {onExit && (
              <button 
                onClick={onExit}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                Go Back
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (!lessonContent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-yellow-500 text-6xl mb-4">📭</div>
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">No Lesson Content</h2>
          <p className="text-yellow-600">This lesson is not available yet.</p>
        </div>
      </div>
    );
  }

  // Render the actual lesson content
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">{lessonContent.title}</h1>
            <p className="text-blue-100 text-sm">Lesson {lessonContent.id}</p>
          </div>
          {onExit && (
            <button 
              onClick={onExit}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Lesson Content */}
      <div className="p-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-blue-800 mb-2">🌐 Hybrid Lesson Mode</h3>
          <p className="text-sm text-blue-600">
            This lesson is loaded from the cloud while your app runs locally for optimal performance.
          </p>
        </div>

        {/* Dynamic lesson content rendering */}
        <LessonContentRenderer 
          content={lessonContent.content}
          onComplete={onComplete}
        />
      </div>

      {/* Debug Info (only in development) */}
      {import.meta.env.DEV && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white p-2 rounded text-xs">
          Version: {lessonContent.version}
        </div>
      )}
    </div>
  );
};

// Component to render the actual lesson content
const LessonContentRenderer: React.FC<{
  content: any;
  onComplete?: (score: number) => void;
}> = ({ content, onComplete }) => {
  // This would dynamically render based on the content structure
  // For now, show a placeholder that demonstrates the concept
  
  const handleComplete = () => {
    AndroidLessonDebugger.logLesson('Lesson completed');
    onComplete?.(100); // Perfect score for demo
  };

  return (
    <div className="space-y-6">
      {/* Example lesson structure */}
      <div className="bg-white border rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">📚 Lesson Content</h2>
        
        {/* This would be dynamically generated from content */}
        <div className="prose max-w-none">
          <p className="text-gray-700 mb-4">
            This is where the actual lesson content from Vercel would be rendered.
            The content structure would be defined by the remote lesson data.
          </p>
          
          <div className="bg-gray-50 p-4 rounded border">
            <pre className="text-sm overflow-auto">
              {JSON.stringify(content, null, 2)}
            </pre>
          </div>
        </div>
        
        <div className="mt-6 flex justify-center">
          <button 
            onClick={handleComplete}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold"
          >
            Complete Lesson ✅
          </button>
        </div>
      </div>
    </div>
  );
};

export default HybridLessonView;