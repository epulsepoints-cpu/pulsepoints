import React from 'react';
import { LoadingProgress } from '@/services/ProgressiveLessonLoader';

interface LessonLoadingProgressProps {
  progress: LoadingProgress;
  className?: string;
}

export const LessonLoadingProgressSimple: React.FC<LessonLoadingProgressProps> = ({
  progress,
  className = ''
}) => {
  const getPhaseMessage = () => {
    switch (progress.phase) {
      case 'preparing':
        return '🔍 Preparing lesson data...';
      case 'loading':
        return progress.currentLesson 
          ? `📖 Loading: ${progress.currentLesson}...`
          : '📚 Loading lessons...';
      case 'complete':
        return '✅ All lessons loaded successfully!';
      case 'error':
        return '❌ Failed to load lessons';
      default:
        return '⏳ Loading...';
    }
  };

  const getProgressPercentage = () => {
    if (progress.total === 0) return 0;
    return Math.round((progress.loaded / progress.total) * 100);
  };

  const progressPercentage = getProgressPercentage();

  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 mx-4 ${className}`}>
      {/* Header */}
      <div className="text-center mb-6">
        <div className="text-2xl mb-2">
          {progress.phase === 'error' ? '⚠️' : '📚'}
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          Loading Your Lessons
        </h3>
        <p className="text-sm text-gray-600">
          {getPhaseMessage()}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Progress</span>
          <span>{progress.loaded}/{progress.total} lessons</span>
        </div>
        
        {/* Simple CSS-based progress bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-300 ease-out"
            style={{ 
              width: `${progressPercentage}%`,
              transition: 'width 0.3s ease-out'
            }}
          />
        </div>
        
        <div className="text-center mt-2">
          <span className="text-lg font-semibold text-blue-600">
            {progressPercentage}%
          </span>
        </div>
      </div>

      {/* Current Lesson Info */}
      {progress.currentLesson && progress.phase === 'loading' && (
        <div className="bg-blue-50 rounded-lg p-3 mb-4">
          <div className="flex items-center gap-2 text-blue-800">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium">
              Currently loading: {progress.currentLesson}
            </span>
          </div>
        </div>
      )}

      {/* Error Message */}
      {progress.error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-2 text-red-800">
            <span className="text-sm">⚠️ {progress.error}</span>
          </div>
        </div>
      )}

      {/* Loading Tips */}
      {progress.phase === 'loading' && (
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            💡 Did you know?
          </h4>
          <p className="text-xs text-gray-600">
            Lessons are loaded progressively to ensure smooth performance. 
            You can start learning as soon as the first few lessons are ready!
          </p>
        </div>
      )}

      {/* Completion Message */}
      {progress.phase === 'complete' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="text-center">
            <div className="text-2xl mb-2">🎉</div>
            <p className="text-green-800 font-medium">
              All lessons loaded! Ready to start learning.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

// Also export a compact version
export const LessonLoadingProgressCompact: React.FC<LessonLoadingProgressProps> = ({
  progress,
  className = ''
}) => {
  const progressPercentage = progress.total > 0 ? Math.round((progress.loaded / progress.total) * 100) : 0;

  return (
    <div className={`bg-white rounded-lg shadow p-4 ${className}`}>
      <div className="flex items-center gap-3">
        <div className="text-lg">
          {progress.phase === 'error' ? '⚠️' : '📚'}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-700">
              Loading lessons...
            </span>
            <span className="text-xs text-gray-500">
              {progress.loaded}/{progress.total}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="h-full bg-blue-500 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>
      
      {progress.error && (
        <div className="mt-2 text-xs text-red-600">
          Error: {progress.error}
        </div>
      )}
    </div>
  );
};