import React, { createContext, useContext, useState, useEffect } from 'react';

interface LessonProgress {
  moduleId: string;
  lessonId: string;
  currentTaskIndex: number;
  totalTasks: number;
  progress: number;
  startedAt: string;
  lastActivityAt: string;
}

interface LessonProgressContextType {
  currentProgress: LessonProgress | null;
  saveProgress: (progress: LessonProgress) => void;
  loadProgress: (moduleId: string, lessonId: string) => LessonProgress | null;
  clearProgress: (moduleId: string, lessonId: string) => void;
  getAllProgress: () => Record<string, LessonProgress>;
}

const LessonProgressContext = createContext<LessonProgressContextType | undefined>(undefined);

export const useLessonProgress = () => {
  const context = useContext(LessonProgressContext);
  if (!context) {
    throw new Error('useLessonProgress must be used within a LessonProgressProvider');
  }
  return context;
};

interface LessonProgressProviderProps {
  children: React.ReactNode;
}

export const LessonProgressProvider: React.FC<LessonProgressProviderProps> = ({ children }) => {
  const [currentProgress, setCurrentProgress] = useState<LessonProgress | null>(null);

  const generateProgressKey = (moduleId: string, lessonId: string) => 
    `lesson_progress_${moduleId}_${lessonId}`;

  const saveProgress = (progress: LessonProgress) => {
    const key = generateProgressKey(progress.moduleId, progress.lessonId);
    const progressWithTimestamp = {
      ...progress,
      lastActivityAt: new Date().toISOString()
    };
    
    localStorage.setItem(key, JSON.stringify(progressWithTimestamp));
    setCurrentProgress(progressWithTimestamp);
    
    // Also save to a general progress index for easier retrieval
    const allProgressKey = 'all_lesson_progress';
    const existingProgress = JSON.parse(localStorage.getItem(allProgressKey) || '{}');
    existingProgress[key] = progressWithTimestamp;
    localStorage.setItem(allProgressKey, JSON.stringify(existingProgress));
  };

  const loadProgress = (moduleId: string, lessonId: string): LessonProgress | null => {
    const key = generateProgressKey(moduleId, lessonId);
    const saved = localStorage.getItem(key);
    
    if (saved) {
      try {
        const progress = JSON.parse(saved) as LessonProgress;
        setCurrentProgress(progress);
        return progress;
      } catch (error) {
        console.error('Error loading lesson progress:', error);
        return null;
      }
    }
    return null;
  };

  const clearProgress = (moduleId: string, lessonId: string) => {
    const key = generateProgressKey(moduleId, lessonId);
    localStorage.removeItem(key);
    
    // Also remove from general progress index
    const allProgressKey = 'all_lesson_progress';
    const existingProgress = JSON.parse(localStorage.getItem(allProgressKey) || '{}');
    delete existingProgress[key];
    localStorage.setItem(allProgressKey, JSON.stringify(existingProgress));
    
    if (currentProgress?.moduleId === moduleId && currentProgress?.lessonId === lessonId) {
      setCurrentProgress(null);
    }
  };

  const getAllProgress = (): Record<string, LessonProgress> => {
    const allProgressKey = 'all_lesson_progress';
    return JSON.parse(localStorage.getItem(allProgressKey) || '{}');
  };

  return (
    <LessonProgressContext.Provider value={{
      currentProgress,
      saveProgress,
      loadProgress,
      clearProgress,
      getAllProgress
    }}>
      {children}
    </LessonProgressContext.Provider>
  );
};
