import { Lesson } from '@/types/learning';

export interface LessonProgress {
  lessonId: string;
  currentStep: number;
  totalSteps: number;
  answers: { [stepId: string]: number | string };
  timeSpentPerStep: { [stepId: string]: number };
  startTime: number;
  lastAccessTime: number;
  hearts: number;
  score: number;
  streak: number;
  mistakes: number;
  perfectAnswers: number;
  isCompleted: boolean;
  completionTime?: number;
  finalScore?: number;
}

export interface LessonStep {
  id: string;
  type: 'introduction' | 'content' | 'quiz' | 'practice' | 'summary' | 'video' | 'audio';
  title: string;
  content: string;
  options?: string[];
  correctAnswer?: number | string;
  explanation?: string;
  mediaUrl?: string;
  interactive?: boolean;
  points?: number;
  difficulty?: 'easy' | 'medium' | 'hard';
}

class LessonStateManager {
  private storageKey = 'ecgkid_lesson_progress';

  // Save lesson progress to localStorage
  saveProgress(progress: LessonProgress): void {
    try {
      const allProgress = this.getAllProgress();
      allProgress[progress.lessonId] = {
        ...progress,
        lastAccessTime: Date.now()
      };
      localStorage.setItem(this.storageKey, JSON.stringify(allProgress));
    } catch (error) {
      console.error('Failed to save lesson progress:', error);
    }
  }

  // Get lesson progress from localStorage
  getProgress(lessonId: string): LessonProgress | null {
    try {
      const allProgress = this.getAllProgress();
      return allProgress[lessonId] || null;
    } catch (error) {
      console.error('Failed to get lesson progress:', error);
      return null;
    }
  }

  // Get all lesson progress
  getAllProgress(): { [lessonId: string]: LessonProgress } {
    try {
      const stored = localStorage.getItem(this.storageKey);
      return stored ? JSON.parse(stored) : {};
    } catch (error) {
      console.error('Failed to get all lesson progress:', error);
      return {};
    }
  }

  // Initialize new lesson progress
  initializeProgress(lesson: Lesson, steps: LessonStep[], initialHearts: number = 5): LessonProgress {
    return {
      lessonId: lesson.id,
      currentStep: 0,
      totalSteps: steps.length,
      answers: {},
      timeSpentPerStep: {},
      startTime: Date.now(),
      lastAccessTime: Date.now(),
      hearts: initialHearts,
      score: 0,
      streak: 0,
      mistakes: 0,
      perfectAnswers: 0,
      isCompleted: false
    };
  }

  // Update step progress
  updateStepProgress(
    lessonId: string, 
    stepId: string, 
    answer: number | string, 
    isCorrect: boolean,
    timeSpent: number
  ): LessonProgress | null {
    const progress = this.getProgress(lessonId);
    if (!progress) return null;

    // Update answers and time
    progress.answers[stepId] = answer;
    progress.timeSpentPerStep[stepId] = timeSpent;

    // Update score and streaks
    if (isCorrect) {
      progress.score += 10;
      progress.streak += 1;
      progress.perfectAnswers += 1;
    } else {
      progress.streak = 0;
      progress.mistakes += 1;
      progress.hearts = Math.max(0, progress.hearts - 1);
    }

    // Bonus points for streaks
    if (progress.streak >= 3) {
      progress.score += 5;
    }

    this.saveProgress(progress);
    return progress;
  }

  // Move to next step
  nextStep(lessonId: string): LessonProgress | null {
    const progress = this.getProgress(lessonId);
    if (!progress) return null;

    progress.currentStep = Math.min(progress.currentStep + 1, progress.totalSteps - 1);
    this.saveProgress(progress);
    return progress;
  }

  // Move to previous step
  previousStep(lessonId: string): LessonProgress | null {
    const progress = this.getProgress(lessonId);
    if (!progress) return null;

    progress.currentStep = Math.max(0, progress.currentStep - 1);
    this.saveProgress(progress);
    return progress;
  }

  // Complete lesson
  completeLesson(lessonId: string): LessonProgress | null {
    const progress = this.getProgress(lessonId);
    if (!progress) return null;

    progress.isCompleted = true;
    progress.completionTime = Date.now();
    progress.finalScore = progress.score;

    // Bonus points for completion
    progress.score += 50;

    // Perfect lesson bonus
    if (progress.mistakes === 0) {
      progress.score += 100;
    }

    this.saveProgress(progress);
    return progress;
  }

  // Reset lesson progress
  resetLesson(lessonId: string): void {
    try {
      const allProgress = this.getAllProgress();
      delete allProgress[lessonId];
      localStorage.setItem(this.storageKey, JSON.stringify(allProgress));
    } catch (error) {
      console.error('Failed to reset lesson progress:', error);
    }
  }

  // Check if lesson can be resumed
  canResumeLesson(lessonId: string): boolean {
    const progress = this.getProgress(lessonId);
    return progress !== null && !progress.isCompleted && progress.currentStep > 0;
  }

  // Get lesson completion percentage
  getCompletionPercentage(lessonId: string): number {
    const progress = this.getProgress(lessonId);
    if (!progress) return 0;
    return Math.round((progress.currentStep / progress.totalSteps) * 100);
  }

  // Convert lesson content to steps
  convertLessonToSteps(lesson: Lesson): LessonStep[] {
    const steps: LessonStep[] = [];

    // Introduction step
    steps.push({
      id: `intro_${lesson.id}`,
      type: 'introduction',
      title: lesson.title,
      content: lesson.description || `Welcome to ${lesson.title}!`,
      interactive: false
    });

    // Process lesson content
    if (lesson.content && Array.isArray(lesson.content)) {
      lesson.content.forEach((content, index) => {
        if (content.type === 'quiz' && content.questions) {
          // Quiz questions
          content.questions.forEach((question, qIndex) => {
            steps.push({
              id: `quiz_${lesson.id}_${index}_${qIndex}`,
              type: 'quiz',
              title: `Question ${qIndex + 1}`,
              content: question.question,
              options: question.options,
              correctAnswer: question.correctAnswer,
              explanation: question.explanation,
              points: question.difficulty === 'hard' ? 15 : question.difficulty === 'medium' ? 10 : 5,
              difficulty: question.difficulty || 'medium',
              interactive: true
            });
          });
        } else {
          // Regular content
          steps.push({
            id: `content_${lesson.id}_${index}`,
            type: content.type === 'video' ? 'video' : content.type === 'audio' ? 'audio' : 'content',
            title: content.title || `Step ${index + 1}`,
            content: content.content || content.description || '',
            mediaUrl: content.videoUrl || content.audioUrl,
            interactive: false
          });
        }
      });
    }

    // Summary step
    steps.push({
      id: `summary_${lesson.id}`,
      type: 'summary',
      title: 'Lesson Complete!',
      content: `Congratulations! You've completed "${lesson.title}". Great job!`,
      interactive: false
    });

    return steps;
  }
}

export const lessonStateManager = new LessonStateManager();
