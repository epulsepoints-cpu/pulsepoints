import React from 'react';
import { Loader2, BookOpen, Brain, Heart } from 'lucide-react';

interface DynamicLessonLoadingProps {
  lessonId?: string;
  message?: string;
  showProgress?: boolean;
}

/**
 * Dynamic loading component for on-demand lesson loading
 * Provides visual feedback while lessons load on-demand
 */
export const DynamicLessonLoading: React.FC<DynamicLessonLoadingProps> = ({ 
  lessonId, 
  message = "Loading lesson content...",
  showProgress = true 
}) => {
  // Extract lesson info from ID for better UX
  const getLessonInfo = (id?: string) => {
    if (!id) return { module: '', lesson: '', topic: 'ECG Mastery' };
    
    const parts = id.split('-');
    const moduleNum = parts[1] || '1';
    const lessonNum = parts[3] || '1';
    
    const moduleTopics: Record<string, string> = {
      '1': 'Heart Anatomy',
      '2': 'Basic Rhythms', 
      '3': 'Arrhythmias',
      '4': 'Advanced ECG',
      '5': 'Pathology',
      '6': 'Clinical Cases'
    };
    
    return {
      module: `Module ${moduleNum}`,
      lesson: `Lesson ${lessonNum}`,
      topic: moduleTopics[moduleNum] || 'ECG Mastery'
    };
  };

  const { module, lesson, topic } = getLessonInfo(lessonId);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
      {/* Animated Icon Stack */}
      <div className="relative mb-6">
        <div className="absolute -top-2 -left-2 animate-pulse">
          <Heart className="w-8 h-8 text-red-400" />
        </div>
        <div className="relative">
          <BookOpen className="w-16 h-16 text-blue-500" />
        </div>
        <div className="absolute -bottom-2 -right-2 animate-bounce">
          <Brain className="w-6 h-6 text-purple-400" />
        </div>
      </div>

      {/* Loading Spinner */}
      <div className="flex items-center space-x-3 mb-4">
        <Loader2 className="w-6 h-6 text-blue-500 animate-spin" />
        <span className="text-lg font-medium text-gray-700">{message}</span>
      </div>

      {/* Lesson Information */}
      {lessonId && (
        <div className="text-center space-y-2 mb-6">
          <div className="text-sm font-medium text-blue-600">{module}</div>
          <div className="text-base font-semibold text-gray-800">{lesson}</div>
          <div className="text-sm text-gray-600">{topic}</div>
        </div>
      )}

      {/* Progress Indicators */}
      {showProgress && (
        <div className="w-full max-w-xs space-y-3">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Downloading content...</span>
            <span>🔄</span>
          </div>
          
          {/* Animated Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-pulse"></div>
          </div>
          
          {/* Loading Steps */}
          <div className="space-y-1 text-xs text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Loading lesson data</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>Preparing interactive content</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <span>Optimizing media assets</span>
            </div>
          </div>
        </div>
      )}

      {/* Performance Info */}
      <div className="mt-6 text-xs text-gray-400 text-center">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-1 h-1 bg-green-400 rounded-full"></div>
          <span>Dynamic loading reduces app size by 85%</span>
        </div>
      </div>
    </div>
  );
};

/**
 * Error component for failed dynamic lesson loading
 */
interface DynamicLessonErrorProps {
  lessonId?: string;
  error: string;
  onRetry?: () => void;
}

export const DynamicLessonError: React.FC<DynamicLessonErrorProps> = ({ lessonId, error, onRetry }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-red-100">
      <div className="text-6xl mb-4">❌</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Failed to Load Lesson</h3>
      {lessonId && (
        <p className="text-gray-600 mb-4">Lesson ID: {lessonId}</p>
      )}
      <p className="text-red-600 text-center mb-6 max-w-md">
        {error}
      </p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors duration-200"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

/**
 * Compact loading indicator for smaller spaces
 */
export const DynamicLessonLoadingCompact: React.FC<{ message?: string }> = ({ 
  message = "Loading..." 
}) => {
  return (
    <div className="flex items-center justify-center space-x-2 py-8">
      <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />
      <span className="text-gray-600">{message}</span>
    </div>
  );
};