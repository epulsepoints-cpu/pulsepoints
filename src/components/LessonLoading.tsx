// Lesson Loading Component with Suspense and Error Boundaries
import React, { Suspense } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Loader2, 
  RefreshCw, 
  AlertTriangle, 
  BookOpen,
  Download,
  CheckCircle 
} from 'lucide-react';

interface LessonLoadingProps {
  isLoading: boolean;
  error: string | null;
  onRetry?: () => void;
  lessonTitle?: string;
  progress?: number;
}

export function LessonLoading({ 
  isLoading, 
  error, 
  onRetry, 
  lessonTitle,
  progress = 0 
}: LessonLoadingProps) {
  // Error state
  if (error) {
    return (
      <Card className="w-full max-w-md mx-auto mt-8">
        <CardContent className="p-6 text-center">
          <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Failed to Load Lesson
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            {error}
          </p>
          {onRetry && (
            <Button 
              onClick={onRetry}
              variant="outline"
              className="w-full"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Try Again
            </Button>
          )}
        </CardContent>
      </Card>
    );
  }

  // Loading state
  if (isLoading) {
    return (
      <Card className="w-full max-w-md mx-auto mt-8">
        <CardContent className="p-6 text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <Loader2 className="h-12 w-12 text-blue-500 animate-spin" />
              <Download className="h-6 w-6 text-blue-600 absolute top-3 left-3" />
            </div>
            
            <div className="space-y-2 w-full">
              <h3 className="text-lg font-semibold text-gray-900">
                Loading {lessonTitle || 'Lesson'}...
              </h3>
              
              <p className="text-sm text-gray-600">
                Please wait while we prepare your lesson content
              </p>
              
              {progress > 0 && (
                <div className="w-full space-y-2">
                  <Progress value={progress} className="w-full" />
                  <p className="text-xs text-gray-500">
                    {Math.round(progress)}% complete
                  </p>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return null;
}

// Lesson Suspense Wrapper
interface LessonSuspenseProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  lessonTitle?: string;
}

export function LessonSuspense({ 
  children, 
  fallback, 
  lessonTitle 
}: LessonSuspenseProps) {
  const defaultFallback = (
    <LessonLoading 
      isLoading={true} 
      error={null} 
      lessonTitle={lessonTitle}
    />
  );

  return (
    <Suspense fallback={fallback || defaultFallback}>
      {children}
    </Suspense>
  );
}

// Preload Progress Component
interface PreloadProgressProps {
  isPreloading: boolean;
  progress: number;
  total?: number;
  onCancel?: () => void;
}

export function PreloadProgress({ 
  isPreloading, 
  progress, 
  total = 100,
  onCancel 
}: PreloadProgressProps) {
  if (!isPreloading) return null;

  return (
    <Card className="w-full max-w-md mx-auto mt-4">
      <CardContent className="p-4">
        <div className="flex items-center space-x-3">
          <BookOpen className="h-5 w-5 text-blue-500" />
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">
              Preloading lessons...
            </p>
            <div className="flex items-center space-x-2 mt-1">
              <Progress value={progress} className="flex-1" />
              <span className="text-xs text-gray-500 min-w-[3rem]">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
          {onCancel && (
            <Button
              size="sm"
              variant="ghost"
              onClick={onCancel}
            >
              Cancel
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// Success notification component
interface LoadSuccessProps {
  lessonTitle: string;
  onContinue: () => void;
}

export function LoadSuccess({ lessonTitle, onContinue }: LoadSuccessProps) {
  return (
    <Card className="w-full max-w-md mx-auto mt-4">
      <CardContent className="p-4 text-center">
        <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
        <p className="text-sm font-medium text-gray-900 mb-3">
          {lessonTitle} loaded successfully!
        </p>
        <Button onClick={onContinue} size="sm" className="w-full">
          Start Lesson
        </Button>
      </CardContent>
    </Card>
  );
}