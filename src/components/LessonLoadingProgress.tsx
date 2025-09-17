import React from 'react';
import { LoadingProgress } from '@/services/ProgressiveLessonLoader';
import { motion } from 'framer-motion';

interface LessonLoadingProgressProps {
  progress: LoadingProgress;
  className?: string;
}

export const LessonLoadingProgress: React.FC<LessonLoadingProgressProps> = ({
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
      {progress.phase !== 'error' && progress.total > 0 && (
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{progress.loaded} of {progress.total} lessons</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
          
          <div className="text-center mt-2">
            <span className="text-lg font-bold text-blue-600">
              {progressPercentage}%
            </span>
          </div>
        </div>
      )}

      {/* Loading Animation */}
      {progress.phase === 'loading' && (
        <div className="flex justify-center mb-4">
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-blue-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Current Lesson Info */}
      {progress.currentLesson && progress.phase === 'loading' && (
        <div className="bg-blue-50 rounded-lg p-3 mb-4">
          <div className="text-sm text-blue-800">
            <span className="font-medium">Currently loading:</span>
          </div>
          <div className="text-sm text-blue-600 truncate">
            {progress.currentLesson}
          </div>
        </div>
      )}

      {/* Tips */}
      {progress.phase === 'loading' && (
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="text-xs text-gray-600 text-center">
            💡 <strong>Pro tip:</strong> Lessons are downloaded once and cached for offline use!
          </div>
        </div>
      )}

      {/* Error State */}
      {progress.phase === 'error' && (
        <div className="bg-red-50 rounded-lg p-4">
          <div className="text-sm text-red-800 mb-2">
            <strong>Error:</strong> {progress.error || 'Unknown error occurred'}
          </div>
          <div className="text-xs text-red-600">
            Don't worry! Your lessons are also available offline. 
            Check your internet connection and try again.
          </div>
        </div>
      )}

      {/* Success State */}
      {progress.phase === 'complete' && (
        <motion.div
          className="text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-green-600 mb-2">
            🎉 <strong>Ready to learn!</strong>
          </div>
          <div className="text-sm text-gray-600">
            {progress.total} lessons loaded and ready for your ECG mastery journey
          </div>
        </motion.div>
      )}
    </div>
  );
};

// Compact version for smaller spaces
export const CompactLessonProgress: React.FC<LessonLoadingProgressProps> = ({
  progress,
  className = ''
}) => {
  const progressPercentage = progress.total > 0 
    ? Math.round((progress.loaded / progress.total) * 100) 
    : 0;

  if (progress.phase === 'complete') {
    return null; // Hide when complete
  }

  return (
    <div className={`bg-blue-50 rounded-lg p-3 mb-4 ${className}`}>
      <div className="flex items-center space-x-3">
        {/* Loading Spinner */}
        {progress.phase === 'loading' && (
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-500 border-t-transparent" />
        )}
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-blue-800 truncate">
            {progress.phase === 'preparing' && 'Preparing lessons...'}
            {progress.phase === 'loading' && `Loading lessons (${progress.loaded}/${progress.total})`}
            {progress.phase === 'error' && 'Loading failed'}
          </div>
          
          {progress.total > 0 && progress.phase === 'loading' && (
            <div className="w-full bg-blue-200 rounded-full h-1 mt-1">
              <motion.div
                className="h-full bg-blue-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}
        </div>
        
        {/* Percentage */}
        {progress.total > 0 && progress.phase === 'loading' && (
          <div className="text-sm font-bold text-blue-600">
            {progressPercentage}%
          </div>
        )}
      </div>
    </div>
  );
};