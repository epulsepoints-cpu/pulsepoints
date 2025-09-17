import { TaskData } from '../types/eventTypes';

// Import the YouTube video task data
import youtubeTasksPart2 from '../../new-youtube-tasks-part2.json';
import youtubeTasksPart3 from '../../new-youtube-tasks-part3.json';
import youtubeTasksPart4 from '../../new-youtube-tasks-part4.json';

interface YouTubeTaskData {
  taskId: number;
  taskStatus: string;
  taskType: string;
  question: string;
  correctAnswer: string;
  explanation: string;
  youtubeUrl: string;
  videoTitle: string;
  videoDescription: string;
  videoDuration: number;
  xp: number;
  gems: number;
  difficulty: string;
  category: string;
  tags: string[];
  usageCount: number;
  priority: number;
}

/**
 * Convert various YouTube URL formats to proper embed URL for react-youtube
 */
const convertToEmbedUrl = (url: string): string => {
  try {
    // Handle different YouTube URL formats
    let videoId = '';
    
    if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('watch?v=')[1].split('&')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('youtube.com/embed/')) {
      // Already an embed URL, extract video ID
      videoId = url.split('embed/')[1].split('?')[0];
    } else {
      console.warn('Unknown YouTube URL format:', url);
      return 'https://www.youtube.com/watch?v=09R8_2nJtjg'; // Fallback to Khan Academy
    }
    
    // Return watch URL format for react-youtube (it handles the conversion internally)
    return `https://www.youtube.com/watch?v=${videoId}`;
  } catch (error) {
    console.error('Error converting YouTube URL:', error);
    return 'https://www.youtube.com/watch?v=09R8_2nJtjg'; // Fallback to Khan Academy ECG Basics
  }
};

/**
 * Convert YouTube video JSON data to our TaskData format
 */
export const convertYouTubeTaskToTaskData = (youtubeTask: YouTubeTaskData, eventId: string, dayNumber: number, taskIndex: number): TaskData => {
  return {
    id: `${eventId}-day-${dayNumber}-task-${taskIndex + 1}`,
    title: youtubeTask.videoTitle,
    description: youtubeTask.videoDescription,
    type: 'interactive-video',
    difficulty: youtubeTask.difficulty as 'easy' | 'medium' | 'hard',
    estimatedTime: Math.ceil(youtubeTask.videoDuration / 60), // Convert seconds to minutes
    rewards: {
      xp: youtubeTask.xp,
      gems: youtubeTask.gems,
      ecgCoins: Math.floor(youtubeTask.xp / 3) // 1 coin per 3 XP
    },
    data: {
      youtubeUrl: convertToEmbedUrl(youtubeTask.youtubeUrl), // Convert to proper embed URL
      videoTitle: youtubeTask.videoTitle,
      videoDescription: youtubeTask.videoDescription,
      videoDuration: youtubeTask.videoDuration,
      category: youtubeTask.category,
      tags: youtubeTask.tags,
      
      // Add interactive quiz questions based on video content
      quizPoints: generateQuizPointsForVideo(youtubeTask)
    }
  };
};

/**
 * Generate interactive quiz questions based on video content and category
 */
const generateQuizPointsForVideo = (youtubeTask: YouTubeTaskData) => {
  const baseQuestions = {
    arrhythmia: [
      {
        timestamp: Math.floor(youtubeTask.videoDuration * 0.3),
        question: 'What is the key identifying feature of this arrhythmia?',
        options: ['Regular rhythm', 'Irregular rhythm', 'Wide QRS', 'Absent P waves'],
        correct: 1,
        explanation: 'Most arrhythmias are characterized by irregular heart rhythms.'
      },
      {
        timestamp: Math.floor(youtubeTask.videoDuration * 0.7),
        question: 'What is the primary treatment consideration for this condition?',
        options: ['Rate control', 'Rhythm control', 'Both rate and rhythm', 'No treatment needed'],
        correct: 2,
        explanation: 'Most arrhythmias require both rate and rhythm management strategies.'
      }
    ],
    interpretation: [
      {
        timestamp: Math.floor(youtubeTask.videoDuration * 0.4),
        question: 'What should you assess first when reading an ECG?',
        options: ['Heart rate', 'Rhythm', 'Axis', 'All systematically'],
        correct: 3,
        explanation: 'ECG interpretation requires a systematic approach to all components.'
      }
    ],
    'ecg challenge': [
      {
        timestamp: Math.floor(youtubeTask.videoDuration * 0.5),
        question: 'What is the normal range for this measurement?',
        options: ['60-100', '80-120', '100-150', '50-80'],
        correct: 0,
        explanation: 'Normal adult heart rate is 60-100 beats per minute.'
      }
    ]
  };

  // Return questions based on category, or default questions
  return baseQuestions[youtubeTask.category as keyof typeof baseQuestions] || baseQuestions.interpretation;
};

/**
 * Get all YouTube video tasks organized by difficulty
 */
export const getAllYouTubeVideoTasks = (): YouTubeTaskData[] => {
  const allTasks = [
    ...youtubeTasksPart2.tasks,
    ...youtubeTasksPart3.tasks,
    ...youtubeTasksPart4.tasks
  ];

  return allTasks.filter((task: YouTubeTaskData) => task.taskType === 'video');
};

/**
 * Get YouTube video tasks filtered by difficulty
 */
export const getYouTubeVideoTasksByDifficulty = (difficulty: 'easy' | 'medium' | 'hard'): YouTubeTaskData[] => {
  return getAllYouTubeVideoTasks().filter(task => task.difficulty === difficulty);
};

/**
 * Get YouTube video tasks filtered by category
 */
export const getYouTubeVideoTasksByCategory = (category: string): YouTubeTaskData[] => {
  return getAllYouTubeVideoTasks().filter(task => task.category === category);
};

/**
 * Generate video tasks for an event day based on difficulty progression
 */
export const generateVideoTasksForDay = (eventId: string, dayNumber: number, targetDifficulty: 'easy' | 'medium' | 'hard', count: number = 2): TaskData[] => {
  const availableVideos = getYouTubeVideoTasksByDifficulty(targetDifficulty);
  
  // Shuffle and take the required count
  const shuffled = availableVideos.sort(() => Math.random() - 0.5);
  const selectedVideos = shuffled.slice(0, count);
  
  return selectedVideos.map((video, index) => 
    convertYouTubeTaskToTaskData(video, eventId, dayNumber, index)
  );
};

/**
 * Generate a mixed set of video tasks for variety
 */
export const generateMixedVideoTasks = (eventId: string, dayNumber: number, count: number = 5): TaskData[] => {
  const easy = getYouTubeVideoTasksByDifficulty('easy');
  const medium = getYouTubeVideoTasksByDifficulty('medium'); 
  const hard = getYouTubeVideoTasksByDifficulty('hard');
  
  // Mix: 2 easy, 2 medium, 1 hard for balanced progression
  const mixedVideos = [
    ...easy.slice(0, 2),
    ...medium.slice(0, 2),
    ...hard.slice(0, 1)
  ].sort(() => Math.random() - 0.5); // Shuffle
  
  return mixedVideos.slice(0, count).map((video, index) => 
    convertYouTubeTaskToTaskData(video, eventId, dayNumber, index)
  );
};

export default {
  getAllYouTubeVideoTasks,
  getYouTubeVideoTasksByDifficulty,
  getYouTubeVideoTasksByCategory,
  generateVideoTasksForDay,
  generateMixedVideoTasks,
  convertYouTubeTaskToTaskData
};
