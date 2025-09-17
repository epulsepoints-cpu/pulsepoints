import React from 'react';
import EnhancedDuolingoLesson from '@/components/EnhancedDuolingoLesson';
import { Lesson } from '@/types/learning';

// Example lesson data - this would come from your database
const exampleLesson: Lesson = {
  id: 'ecg-basics-1',
  title: 'ECG Basics: Understanding Heart Rhythms',
  description: 'Learn the fundamentals of ECG interpretation',
  difficulty: 'beginner',
  estimatedTime: 15,
  content: [
    {
      type: 'introduction',
      title: 'Welcome to ECG Basics',
      content: 'In this lesson, you\'ll learn how to read and interpret basic ECG patterns.',
    },
    {
      type: 'content',
      title: 'What is an ECG?',
      content: 'An electrocardiogram (ECG) is a test that records the electrical activity of your heart.',
      videoUrl: '/videos/ecg-intro.mp4'
    },
    {
      type: 'quiz',
      questions: [
        {
          question: 'What does ECG stand for?',
          options: [
            'Electrocardiogram',
            'Electrocardiology',
            'Electronic Cardiogram',
            'Electrical Chart Graph'
          ],
          correctAnswer: 0,
          explanation: 'ECG stands for Electrocardiogram, which measures the electrical activity of the heart.',
          difficulty: 'easy'
        },
        {
          question: 'How many leads does a standard ECG have?',
          options: [
            '6 leads',
            '8 leads', 
            '10 leads',
            '12 leads'
          ],
          correctAnswer: 3,
          explanation: 'A standard ECG uses 12 leads to provide a comprehensive view of heart activity.',
          difficulty: 'medium'
        }
      ]
    },
    {
      type: 'content',
      title: 'ECG Waveforms',
      content: 'The ECG shows different waves that represent different parts of the heart\'s electrical cycle.',
      audioUrl: '/audio/ecg-waveforms.mp3'
    }
  ]
};

const LessonExample: React.FC = () => {
  const handleLessonComplete = (score: number, timeSpent: number) => {
    console.log(`Lesson completed! Score: ${score}, Time: ${timeSpent}ms`);
    // Here you would save the lesson completion to your database
    // and redirect to the next lesson or back to the lesson list
  };

  const handleLessonExit = () => {
    console.log('Lesson exited');
    // Here you would navigate back to the lesson list or main app
  };

  const handleHeartLost = () => {
    console.log('Heart lost!');
    // Here you could update the user's heart count in your global state
  };

  return (
    <EnhancedDuolingoLesson
      lesson={exampleLesson}
      onComplete={handleLessonComplete}
      onExit={handleLessonExit}
      userHearts={5}
      onHeartLost={handleHeartLost}
      resumeProgress={true} // Allow users to resume where they left off
    />
  );
};

export default LessonExample;
