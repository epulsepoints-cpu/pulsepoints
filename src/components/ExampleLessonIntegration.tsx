// Example: How to integrate the Enhanced Duolingo Lesson component

import React from 'react';
import EnhancedDuolingoLesson from '@/components/EnhancedDuolingoLesson';
import { Lesson } from '@/types/learning';

const ExampleLessonIntegration: React.FC = () => {
  const [showLesson, setShowLesson] = React.useState(false);
  const [userHearts, setUserHearts] = React.useState(5);

  // Example lesson data structure
  const sampleLesson: Lesson = {
    id: 'ecg-basics-1',
    title: 'ECG Basics: Heart Rhythm Analysis',
    content: {
      introduction: 'Welcome to ECG Basics! In this lesson, you will learn fundamental concepts about heart rhythm analysis and ECG interpretation.',
      summary: 'Great job! You have successfully completed the ECG Basics lesson. You now understand the fundamental principles of heart rhythm analysis.',
      slides: [
        {
          id: 'slide-1',
          type: 'content',
          title: 'What is an ECG?',
          content: 'An electrocardiogram (ECG) is a test that records the electrical activity of your heart. It shows how fast your heart is beating and whether its rhythm is steady or irregular.',
          imageUrl: '/lessonimages/ecg-overview.png'
        },
        {
          id: 'slide-2', 
          type: 'audio',
          title: 'Listen: Normal Heart Sounds',
          content: 'Listen carefully to normal heart sounds to understand the baseline rhythm.',
          audioUrl: '/audio/normal-heart-sounds.mp3',
          hint: 'Pay attention to the regular lub-dub pattern'
        },
        {
          id: 'slide-3',
          type: 'quiz',
          title: 'Quick Check',
          question: 'What does ECG stand for?',
          content: 'What does ECG stand for?',
          options: [
            'Electrocardiogram',
            'Electroencephalogram', 
            'Electromyogram',
            'Electroretinogram'
          ],
          correctAnswer: 0,
          explanation: 'Correct! ECG stands for Electrocardiogram, which measures the heart\'s electrical activity.'
        },
        {
          id: 'slide-4',
          type: 'video',
          title: 'ECG Placement Tutorial',
          content: 'Watch this video to learn proper ECG electrode placement techniques.',
          videoUrl: '/videos/ecg-placement.mp4'
        }
      ],
      sections: [
        {
          title: 'Understanding Heart Rhythms',
          content: 'The heart has its own electrical system that controls the timing of heartbeats. Understanding this system is crucial for ECG interpretation.',
          mediaUrl: '/lessonimages/heart-electrical-system.png'
        },
        {
          title: 'ECG Waveforms',
          content: 'ECG waveforms represent different phases of the cardiac cycle. The P wave shows atrial depolarization, QRS complex shows ventricular depolarization, and T wave shows ventricular repolarization.',
          mediaUrl: '/lessonimages/ecg-waveforms.png'
        }
      ]
    },
    tasks: [
      {
        id: 'task-1',
        type: 'quiz',
        xp: 15,
        content: {
          question: 'Which ECG wave represents ventricular depolarization?',
          options: ['P wave', 'QRS complex', 'T wave', 'U wave'],
          correctAnswer: 1,
          explanation: 'The QRS complex represents ventricular depolarization, when the ventricles contract to pump blood.',
          imageUrl: '/lessonimages/qrs-complex.png'
        },
        images: {
          mainImage: '/lessonimages/ecg-waves-labeled.png'
        }
      },
      {
        id: 'task-2',
        type: 'audio-quiz',
        xp: 20,
        audio: {
          mainNarration: {
            audioUrl: '/audio/arrhythmia-example.mp3',
            duration: 30,
            transcript: 'Listen to this heart rhythm. Notice the irregular pattern and varying intervals between beats. This is an example of atrial fibrillation.'
          }
        },
        content: {
          question: 'What type of arrhythmia did you hear?',
          options: ['Normal sinus rhythm', 'Atrial fibrillation', 'Ventricular tachycardia', 'Heart block'],
          correctAnswer: 1,
          explanation: 'Correct! This irregular rhythm with no clear P waves is characteristic of atrial fibrillation.'
        },
        images: {
          mainImage: '/lessonimages/afib-ecg.png'
        }
      }
    ]
  };

  const handleLessonComplete = (score: number, timeSpent: number) => {
    console.log(`Lesson completed! Score: ${score}, Time: ${timeSpent}s`);
    setShowLesson(false);
    // Handle lesson completion - update progress, show achievements, etc.
  };

  const handleLessonExit = () => {
    setShowLesson(false);
    // Handle lesson exit - save progress, return to module view, etc.
  };

  const handleHeartLost = () => {
    setUserHearts(prev => Math.max(0, prev - 1));
    // Handle heart loss - play animation, check if game over, etc.
  };

  if (showLesson) {
    return (
      <EnhancedDuolingoLesson
        lesson={sampleLesson}
        onComplete={handleLessonComplete}
        onExit={handleLessonExit}
        userHearts={userHearts}
        onHeartLost={handleHeartLost}
        isFullScreen={true} // Set to true for immersive mobile experience
      />
    );
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Enhanced Duolingo-Style Lesson Demo</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Features Included:</h2>
        <ul className="space-y-2 text-gray-700">
          <li>✅ <strong>Duolingo-style Progress Bar:</strong> Visual progress with hearts, streak, and score</li>
          <li>✅ <strong>Celebration Animations:</strong> Confetti and motion effects for achievements</li>
          <li>✅ <strong>State Management:</strong> Automatic progress saving and restoration</li>
          <li>✅ <strong>Mobile-First Navigation:</strong> Touch gestures and swipe support</li>
          <li>✅ <strong>Multimedia Support:</strong> Audio, video, YouTube, and image content</li>
          <li>✅ <strong>Interactive Quizzes:</strong> Multiple choice with instant feedback</li>
          <li>✅ <strong>Sound Effects:</strong> Click, correct, and error audio feedback</li>
          <li>✅ <strong>Responsive Design:</strong> Works on all screen sizes</li>
          <li>✅ <strong>Persistent Progress:</strong> Resume where you left off</li>
          <li>✅ <strong>Performance Optimized:</strong> Smooth animations and fast loading</li>
        </ul>
      </div>

      <div className="bg-blue-50 rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold mb-3 text-blue-800">Current Stats:</h3>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">❤️</span>
            <span className="font-bold text-red-600">{userHearts} Hearts</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            <span className="font-bold text-orange-600">0 Streak</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <span className="font-bold text-yellow-600">0 XP</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowLesson(true)}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
      >
        🚀 Start Enhanced Lesson Experience
      </button>

      <div className="mt-6 text-sm text-gray-600">
        <p><strong>Pro Tip:</strong> This lesson component automatically saves your progress as you go. 
        If you exit and return, you'll resume from where you left off!</p>
      </div>
    </div>
  );
};

export default ExampleLessonIntegration;
