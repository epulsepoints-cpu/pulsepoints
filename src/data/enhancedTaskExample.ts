import { LearningTask } from '@/types/learning';

// EXAMPLE: Enhanced Task with Unique Images and Audio
export const enhancedTaskExample: LearningTask = {
  id: 'enhanced-task-anatomy-basics',
  type: 'final-assessment',
  points: 100,
  
  // ===== ENHANCED AUDIO SYSTEM =====
  audio: {
    introduction: '/lessonaudio/module-1/lesson-1/task-1/intro-narration.mp3',
    instructionAudio: '/lessonaudio/module-1/lesson-1/task-1/instructions.mp3',
    hintAudio: '/lessonaudio/module-1/lesson-1/task-1/hints.mp3',
    explanationAudio: '/lessonaudio/module-1/lesson-1/task-1/explanations.mp3',
    backgroundMusic: '/lessonaudio/ambient/study-focus-light.mp3',
    slideNarrations: [
      {
        slideId: 'slide-1',
        audioUrl: '/lessonaudio/module-1/lesson-1/task-1/slide-1-narration.mp3',
        duration: 45,
        autoPlay: true,
        transcript: 'Welcome to heart anatomy basics. Let\'s explore the four chambers that make your heart an incredible pump...'
      },
      {
        slideId: 'slide-2', 
        audioUrl: '/lessonaudio/module-1/lesson-1/task-1/slide-2-narration.mp3',
        duration: 52,
        autoPlay: true,
        transcript: 'The right atrium receives deoxygenated blood from your body. Think of it as the collection chamber...'
      },
      {
        slideId: 'slide-3',
        audioUrl: '/lessonaudio/module-1/lesson-1/task-1/slide-3-narration.mp3', 
        duration: 48,
        autoPlay: true,
        transcript: 'Now we move to the electrical system. The SA node is your heart\'s natural pacemaker...'
      },
      {
        slideId: 'slide-4',
        audioUrl: '/lessonaudio/module-1/lesson-1/task-1/slide-4-narration.mp3',
        duration: 55,
        autoPlay: true,
        transcript: 'The AV node creates a crucial delay. This isn\'t a problem - it\'s a feature that optimizes pumping...'
      },
      {
        slideId: 'slide-5',
        audioUrl: '/lessonaudio/module-1/lesson-1/task-1/slide-5-narration.mp3',
        duration: 43,
        autoPlay: true,
        transcript: 'Let\'s test your knowledge with this clinical scenario. Remember what we learned about electrical activity...'
      }
    ],
    pronunciation: [
      {
        term: 'Sinoatrial',
        pronunciation: 'SY-no-AY-tree-al',
        audioUrl: '/lessonaudio/module-1/lesson-1/task-1/pronunciations/sinoatrial.mp3',
        definition: 'The heart\'s natural pacemaker node'
      },
      {
        term: 'Atrioventricular',
        pronunciation: 'AY-tree-oh-ven-TRIK-yu-lar',
        audioUrl: '/lessonaudio/module-1/lesson-1/task-1/pronunciations/atrioventricular.mp3',
        definition: 'Node that delays electrical signals between atria and ventricles'
      },
      {
        term: 'Purkinje',
        pronunciation: 'pur-KIN-jee',
        audioUrl: '/lessonaudio/module-1/lesson-1/task-1/pronunciations/purkinje.mp3',
        definition: 'Fibers that spread electrical signals throughout ventricles'
      }
    ]
  },

  // ===== ENHANCED IMAGE SYSTEM =====
  images: {
    mainImage: '/lessonimages/module-1/lesson-1/task-1/main-heart-anatomy-assessment.png',
    slideImages: [
      {
        slideId: 'slide-1',
        imageUrl: '/lessonimages/module-1/lesson-1/task-1/slide-1-heart-chambers-overview.png',
        imageAlt: 'Heart anatomy showing four chambers with clear labels and blood flow arrows',
        caption: 'The heart\'s four chambers work together as two coordinated pumps',
        interactive: false
      },
      {
        slideId: 'slide-2',
        imageUrl: '/lessonimages/module-1/lesson-1/task-1/slide-2-right-atrium-detail.png',
        imageAlt: 'Detailed view of right atrium showing venous connections and tricuspid valve',
        caption: 'Right atrium: The collection chamber for deoxygenated blood',
        interactive: true
      },
      {
        slideId: 'slide-3',
        imageUrl: '/lessonimages/module-1/lesson-1/task-1/slide-3-sa-node-location.png',
        imageAlt: 'SA node highlighted in the right atrium with electrical pathway indicators',
        caption: 'SA node: Your heart\'s natural pacemaker generates 60-100 impulses per minute',
        interactive: false
      },
      {
        slideId: 'slide-4',
        imageUrl: '/lessonimages/module-1/lesson-1/task-1/slide-4-av-node-delay.png',
        imageAlt: 'AV node showing electrical delay with timing diagram and blood flow coordination',
        caption: 'AV node delay: Essential for optimal ventricular filling',
        interactive: true
      },
      {
        slideId: 'slide-5',
        imageUrl: '/lessonimages/module-1/lesson-1/task-1/slide-5-clinical-ecg-correlation.png',
        imageAlt: 'ECG waveform correlated with heart anatomy showing P wave, QRS, and T wave origins',
        caption: 'Clinical correlation: How anatomy creates the ECG patterns you see',
        interactive: false
      }
    ],
    supplementaryImages: [
      '/lessonimages/module-1/lesson-1/task-1/detailed-conduction-pathway.png',
      '/lessonimages/module-1/lesson-1/task-1/heart-valve-function.png'
    ],
    diagramImages: [
      '/lessonimages/module-1/lesson-1/task-1/interactive-blood-flow-diagram.png'
    ]
  },

  content: {
    preparatoryVideo: {
      youtubeUrl: 'https://www.youtube.com/watch?v=48Oxvum8fds',
      videoTitle: 'Heart Anatomy & Electrical System - Complete Overview',
      videoDescription: 'Comprehensive introduction to cardiac anatomy with focus on electrical conduction system.',
      videoDuration: 300
    },
    passingScore: 70,
    timeLimit: 20,
    questions: [
      {
        id: 'q1-chamber-function',
        type: 'multiple-choice',
        question: 'Which heart chamber is responsible for pumping oxygenated blood to the entire body?',
        points: 25,
        options: [
          'Right atrium',
          'Right ventricle', 
          'Left atrium',
          'Left ventricle'
        ],
        correctAnswer: 3,
        explanation: 'The left ventricle is the heart\'s main pumping chamber. It has the thickest muscular walls and generates the highest pressure to send oxygenated blood throughout the body.',
        hint: 'Think about which chamber needs the most muscle power to pump blood the farthest distance.',
        imageUrl: '/lessonimages/module-1/lesson-1/task-1/q1-left-ventricle-highlighted.png',
        imageAlt: 'Heart diagram with left ventricle highlighted showing its thick muscular walls and connection to aorta'
      },
      {
        id: 'q2-electrical-sequence',
        type: 'true-false',
        question: 'True or False: The electrical signal always travels from SA node → AV node → Bundle of His → Purkinje fibers.',
        points: 25,
        options: ['True', 'False'],
        correctAnswer: 0,
        explanation: 'TRUE. This is the normal electrical conduction pathway. The SA node initiates the signal, AV node delays it, Bundle of His conducts it down, and Purkinje fibers spread it throughout the ventricles.',
        hint: 'Remember the electrical highway: SA → AV → Bundle → Purkinje.',
        imageUrl: '/lessonimages/module-1/lesson-1/task-1/q2-electrical-pathway-sequence.png',
        imageAlt: 'Heart conduction system showing numbered sequence: 1-SA node, 2-AV node, 3-Bundle of His, 4-Purkinje fibers'
      },
      {
        id: 'q3-clinical-correlation',
        type: 'case-scenario',
        question: 'A patient\'s ECG shows no P waves with an irregular rhythm. Based on heart anatomy, which structure is most likely malfunctioning?',
        points: 25,
        clinicalScenario: {
          patientAge: 72,
          patientGender: 'Female',
          symptoms: 'Palpitations, irregular heartbeat',
          history: 'Hypertension, diabetes',
          ecgDescription: 'Absent P waves, irregularly irregular rhythm, rate 110-150 bpm'
        },
        options: [
          'SA node dysfunction',
          'AV node block',
          'Bundle branch block',
          'Ventricular tachycardia'
        ],
        correctAnswer: 0,
        explanation: 'SA node dysfunction (likely atrial fibrillation). P waves are generated by SA node and atrial depolarization. No P waves = SA node isn\'t working normally or atria aren\'t contracting in organized fashion.',
        hint: 'What part of the heart creates P waves on the ECG?',
        imageUrl: '/lessonimages/module-1/lesson-1/task-1/q3-afib-ecg-anatomy.png',
        imageAlt: 'ECG strip showing absent P waves with corresponding heart anatomy highlighting chaotic atrial activity'
      },
      {
        id: 'q4-av-node-function',
        type: 'multiple-choice',
        question: 'Why is the AV node delay essential for optimal heart function?',
        points: 25,
        options: [
          'It prevents the heart from beating too fast',
          'It allows atria to empty completely before ventricular contraction',
          'It generates backup electrical signals',
          'It controls blood pressure'
        ],
        correctAnswer: 1,
        explanation: 'The AV node delay allows atria to empty completely before ventricles contract. This timing ensures optimal ventricular filling and maximizes cardiac output with each heartbeat.',
        hint: 'Think about the timing between atrial and ventricular contractions.',
        imageUrl: '/lessonimages/module-1/lesson-1/task-1/q4-av-delay-timing.png',
        imageAlt: 'Heart diagram showing atrial emptying during AV delay with timing indicators and blood flow arrows'
      }
    ]
  }
};
