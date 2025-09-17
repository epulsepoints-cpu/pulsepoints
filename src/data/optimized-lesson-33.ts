import { Lesson } from '@/types/learning';

export const optimizedLesson33: Lesson = {
  id: 'lesson-4-5-optimized',
  moduleId: 'module-4',
  title: "AV Dissociation",
  description: "Master the concept of independent atrial and ventricular rhythms",
  order: 5,
  estimatedTime: 15,
  content: {
    type: 'mixed',
    introduction: "Master AV dissociation! Learn when atria and ventricles march to different drummers independently.",
    sections: [
      {
        id: 'section-overview',
        title: "AV Dissociation Learning Path",
        content: "STEP 1: Dissociation Concept → STEP 2: Types and Causes → STEP 3: ECG Recognition → STEP 4: Capture Beats → STEP 5: Clinical Significance",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // 🎬 YOUTUBE VIDEO: Pulmonary Embolism ECG Changes
      {
        id: 'youtube-pulmonary-embolism',
        title: '🎬 Pulmonary Embolism - ECG Changes and Recognition',
        content: 'Master pulmonary embolism ECG changes including S1Q3T3 pattern, right heart strain, and subtle findings. Critical emergency recognition!',
        type: 'youtube',
        youtubeId: 'y5zKzWX1Fr8',
        videoDuration: 480,
        minimumWatchTime: 420,
        requireFullWatch: true,
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        hint: '🫁 Life-threatening emergency - recognize the signs!'
      },

      // 🎬 YOUTUBE VIDEO: Right Heart Strain
      {
        id: 'youtube-right-heart-strain',
        title: '🎬 Right Heart Strain Patterns - Emergency Recognition',
        content: 'Learn right heart strain ECG patterns including right axis deviation, T-wave inversions, and acute changes. Essential for PE recognition!',
        type: 'youtube',
        youtubeId: 'rFVWnOG6mzI',
        videoDuration: 360,
        minimumWatchTime: 300,
        requireFullWatch: true,
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        hint: '🚨 Right heart strain - emergency pattern!'
      },

      {
        id: 'dissociation-concept',
        title: 'AV Dissociation Concept',
        content: 'AV dissociation occurs when atria and ventricles beat independently, controlled by separate pacemakers. This is a sign, not a specific rhythm.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module4/lesson33/dissociation-concept.jpg',
        imageAlt: 'Diagram showing independent atrial and ventricular pacemakers',
        audio: {
          narrationUrl: 'audio/module4/lesson33/dissociation-concept.mp3',
          autoPlay: false
        }
      },
      {
        id: 'types-and-causes',
        title: 'Types and Causes of AV Dissociation',
        content: [
          'Interference: Junctional rhythm faster than sinus',
          'Default: Sinus slows, junction takes over',
          'AV block: Impulses blocked at AV node',
          'Combination: Multiple mechanisms present',
          'Temporary vs permanent dissociation',
          'May be complete or incomplete'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module4/lesson33/types-and-causes.jpg',
        imageAlt: 'Classification of AV dissociation types and mechanisms',
        audio: {
          narrationUrl: 'audio/module4/lesson33/types-and-causes.mp3',
          autoPlay: false
        }
      },
      {
        id: 'ecg-recognition',
        title: 'ECG Recognition of AV Dissociation',
        content: [
          'P waves and QRS complexes unrelated',
          'Different P-P and R-R intervals',
          'P waves may be buried in QRS/T waves',
          'Varying PR intervals when P waves visible',
          'Look for marching P waves',
          'Count atrial and ventricular rates separately'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module4/lesson33/ecg-recognition.jpg',
        imageAlt: 'ECG showing AV dissociation with independent P waves and QRS'},
      {
        id: 'capture-beats',
        title: 'Capture Beats',
        question: 'What is a capture beat in AV dissociation?',
        options: [
          'A ventricular beat that captures the atrium',
          'A sinus beat that captures the ventricle',
          'A junctional beat that captures both chambers',
          'An ectopic beat that captures the sinus node'
        ],
        correctAnswer: 1,
        explanation: 'A capture beat occurs when a sinus P wave finds the ventricles not refractory and conducts normally, temporarily interrupting the dissociation.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module4/lesson33/capture-beats.jpg',
        imageAlt: 'ECG showing capture beats interrupting AV dissociation'},
      {
        id: 'clinical-significance',
        title: 'Clinical Significance',
        question: 'AV dissociation is most concerning when it indicates:',
        options: [
          'Normal heart function',
          'Underlying heart disease or drug toxicity',
          'Enhanced athletic conditioning',
          'Temporary electrolyte imbalance'
        ],
        correctAnswer: 1,
        explanation: 'AV dissociation often indicates underlying heart disease, drug toxicity (especially digitalis), or ischemia requiring further evaluation.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module4/lesson33/clinical-significance.jpg',
        imageAlt: 'Clinical implications and causes of AV dissociation',
        audio: {
          narrationUrl: 'audio/module4/lesson33/clinical-significance.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "You've mastered AV dissociation! You can recognize independent atrial and ventricular rhythms and understand their significance.",
    keyPoints: [
      "AV dissociation = independent atrial and ventricular rhythms",
      "Sign, not a specific rhythm diagnosis",
      "Look for marching P waves unrelated to QRS",
      "Capture beats prove temporary conduction",
      "Often indicates underlying pathology"
    ],
    resources: [
      {
        title: "AV Dissociation Recognition",
        url: "https://youtube.com/watch?v=av_dissociation",
        type: "video"
      }
    ]
  },
  tasks: [],
  completed: false,
  attempts: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
