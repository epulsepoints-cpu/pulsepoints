// Lesson types for Vercel API
export interface Lesson {
  id: string;
  moduleId: string;
  title: string;
  description: string;
  order: number;
  estimatedTime: number;
  content: LessonContent;
}

export interface LessonContent {
  type: 'mixed' | 'slides' | 'video' | 'audio';
  introduction: string;
  sections?: LessonSection[];
  slides?: LessonSlide[];
  tasks?: LessonTask[];
}

export interface LessonSection {
  id: string;
  title: string;
  content: string;
  mediaType?: 'image' | 'video' | 'audio';
  mediaUrl?: string;
}

export interface LessonSlide {
  id: string;
  title: string;
  content: string;
  type: 'content' | 'highlight' | 'quiz' | 'media';
  layout?: 'centered' | 'image-left' | 'image-right' | 'full-width';
  backgroundColor?: string;
  textColor?: string;
  animation?: string;
  imageUrl?: string;
  imageAlt?: string;
  highlights?: string[];
  keyPoints?: string[];
  hint?: string;
}

export interface LessonTask {
  id: string;
  title: string;
  type: 'quiz' | 'drag-drop' | 'multiple-choice' | 'fill-blank';
  content: QuizContent | any;
}

export interface QuizContent {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}
