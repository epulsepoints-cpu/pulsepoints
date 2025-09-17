import { Lesson } from '@/types/learning';

// ENHANCED LESSON 22: Atrial Flutter Mastery - Duolingo-Style Units
export const optimizedLesson22: Lesson = {
  id: 'module-3-lesson-2',
  moduleId: 'module-3',
  title: "Atrial Flutter Mastery",
  description: "Master atrial flutter through 3 focused learning units: Recognition, Mechanisms, and Conduction - each with interactive flashcards, tabs, accordions, audio and quizzes",
  order: 2,
  estimatedTime: 25,
  content: {
    type: 'mixed',
    introduction: "⚡ Welcome to Atrial Flutter Mastery! Learn this organized atrial arrhythmia through 3 progressive units with flashcards, audio, tabs, accordions and quizzes. Master the sawtooth pattern!",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your Flutter Learning Journey",
        content: "UNIT 1: Recognition → UNIT 2: Mechanisms → UNIT 3: Conduction",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // ===============================================
      // 🎯 UNIT 1: FLUTTER RECOGNITION (7 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: Flutter Recognition',
        content: 'Master instant recognition! Learn the hallmark sawtooth pattern, key features, and how to differentiate flutter from other arrhythmias.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/atrial_flutter_150bpm_3.png',
        imageAlt: 'Classic atrial flutter ECG showing sawtooth pattern',
        highlights: [
          '🌊 Continuous sawtooth waves',
          '📏 No isoelectric baseline',
          '⚡ Organized vs chaotic pattern',
          '🎯 Rate ~300 bpm in atria'
        ],
        hint: '🌊 The sawtooth pattern is unmistakable!'
      },

      // 🎬 ECGKID ADVANCED: Atrial Rate & Rhythm Analysis
      {
        id: 'youtube-ecgkid-atrial-analysis',
        title: '🎬 ECGkid Advanced: Atrial Rate & Rhythm Analysis',
        content: 'Master advanced atrial rhythm recognition! Learn systematic approach to analyzing atrial rates, patterns, and complex atrial arrhythmias including flutter variants.',
        type: 'youtube',
        youtubeId: 'el0L8zgJl3A',
        videoDuration: 369,
        minimumWatchTime: 300,
        requireFullWatch: true,
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        hint: '⚡ ECGkid mastery: Advanced atrial rhythm analysis techniques!'
      },
      
      {
        id: 'sawtooth-signature',
        title: 'The Sawtooth Signature',
        type: 'flashcard',
        flashcardFront: '🌊 What makes atrial flutter instantly recognizable?',
        flashcardBack: 'The continuous sawtooth waves! No flat baseline between waves - they connect in an endless chain around 300 bpm. Like a musical saw cutting through the ECG! 🎵',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        hint: '🌊 Continuous sawtooth = flutter signature!'
      },

      {
        id: 'flutter-vs-fib',
        title: 'Flutter vs Fibrillation: The Key Difference',
        type: 'tabs',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/flutter-vs-afib-comparison.png',
        imageAlt: 'Side-by-side comparison of flutter vs fibrillation patterns',
        tabs: [
          {
            title: '⚡ Atrial Flutter',
            content: 'ORGANIZED chaos:\n• Continuous sawtooth waves\n• Regular atrial rate ~300 bpm\n• Predictable pattern\n• Single macro-reentry circuit'
          },
          {
            title: '🌪️ Atrial Fibrillation', 
            content: 'CHAOTIC storm:\n• Irregular fibrillatory waves\n• Variable baseline\n• Unpredictable intervals\n• Multiple micro-reentry circuits'
          },
          {
            title: '🎯 Quick ID',
            content: 'Flutter = Organized waves\nFib = Chaotic baseline\nFlutter = Predictable\nFib = Totally random'
          }
        ],
        hint: '⚡ Organization vs chaos!'
      },

      {
        id: 'instant-recognition-steps',
        title: 'Instant Recognition Steps',
        type: 'steps',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Look for Sawtooth',
            description: 'Scan for continuous, regular waves - no flat baseline between them'
          },
          {
            number: 2,
            title: 'Check the Rate',
            description: 'Atrial rate should be around 300 bpm (one large box = 300 bpm)'
          },
          {
            number: 3,
            title: 'Find Best Lead',
            description: 'Check inferior leads (II, III, aVF) for clearest sawtooth pattern'
          },
          {
            number: 4,
            title: 'Count Conduction',
            description: 'Determine AV ratio - usually 2:1, 3:1, or 4:1 conduction'
          }
        ],
        hint: '👁️ Four steps to flutter mastery!'
      },

      {
        id: 'lead-selection-flutter',
        title: 'Best Leads for Flutter Recognition',
        type: 'accordion',
        backgroundColor: '#fff1f2',
        textColor: '#be185d',
        animation: 'fade',
        accordionItems: [
          {
            title: '📊 Lead II - The Classic',
            content: 'Best overall view of atrial activity. Sawtooth waves typically very prominent and negative in typical flutter.'
          },
          {
            title: '📈 Lead III - Confirmation',
            content: 'Often shows even more prominent sawtooth than Lead II. Great for confirmation when Lead II is unclear.'
          },
          {
            title: '📉 Lead aVF - The Clincher',
            content: 'Inferior lead that beautifully displays the negative sawtooth pattern in typical (Type I) flutter.'
          },
          {
            title: '👁️ Lead V1 - Special View',
            content: 'May show positive flutter waves, helpful when inferior leads are unclear or in atypical flutter.'
          }
        ],
        hint: '📊 Inferior leads are flutter gold!'
      },

      {
        id: 'typical-vs-atypical',
        title: 'Typical vs Atypical Flutter',
        type: 'flashcard',
        flashcardFront: '🔄 What\'s the difference between typical and atypical flutter?',
        flashcardBack: 'Typical (90%): Counter-clockwise around tricuspid valve → negative sawtooth in inferior leads. Atypical: Other circuits → variable morphology. Typical is what you\'ll see most!',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        hint: '🔄 Most flutter is typical - learn it first!'
      },

      // UNIT 1 QUIZ
      {
        id: 'unit1-recognition-quiz',
        title: '🎯 Unit 1 Quiz: Flutter Recognition',
        content: "Test your flutter recognition skills!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: '/ecg/medical_accurate/atrial_flutter_100bpm_2.png',
        imageAlt: 'Atrial flutter ECG for recognition quiz',
        hint: '🧠 Test your sawtooth skills!',
        question: "What is the hallmark ECG feature that distinguishes atrial flutter from atrial fibrillation?",
        options: [
          "Irregular ventricular rate",
          "Continuous sawtooth waves without isoelectric baseline", 
          "Wide QRS complexes",
          "Absent P waves"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! The continuous sawtooth waves without isoelectric baseline are the classic hallmark that distinguishes organized atrial flutter from chaotic atrial fibrillation."
      },

      // Audio Lesson after Unit 1
      {
        id: 'flutter-recognition-audio',
        title: '🎧 Flutter Recognition Audio Mastery',
        content: 'Consolidate your flutter recognition skills through comprehensive audio instruction covering sawtooth identification, lead selection, and quick recognition techniques.',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/atrial_flutter_150bpm_3.png',
        imageAlt: 'Atrial flutter with prominent sawtooth pattern',
        audioUrl: '/lessonaudio/module3/lesson22/flutter-recognition-mastery.mp3',
        hint: '🎧 Master flutter recognition through audio!'
      },

      // ===============================================
      // 🎯 UNIT 2: FLUTTER MECHANISMS (6 slides)
      // ===============================================
      {
        id: 'unit2-intro',
        title: '🎯 Unit 2: Flutter Mechanisms',
        content: 'Understand the engine! Learn about macro-reentry circuits, why flutter is organized, and the anatomy that makes it possible.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/typical-atypical-flutter-circuits.png',
        imageAlt: 'Anatomical diagram showing flutter reentry circuits',
        highlights: [
          '🔄 Single macro-reentry circuit',
          '🫀 Around tricuspid annulus',
          '⚡ Organized electrical activity',
          '🎯 Predictable pattern creation'
        ],
        hint: '🔄 One big circuit = organized pattern!'
      },

      {
        id: 'macro-reentry-circuit',
        title: 'The Macro-Reentry Circuit',
        type: 'flashcard',
        flashcardFront: '🔄 How does atrial flutter create its organized pattern?',
        flashcardBack: 'ONE large reentry circuit spins around the tricuspid valve! Unlike AFib\'s hundreds of tiny circuits, flutter has just one big, organized loop creating the predictable sawtooth pattern.',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        hint: '🔄 One big loop vs many small ones!'
      },

      {
        id: 'circuit-anatomy',
        title: 'Flutter Circuit Anatomy',
        type: 'tabs',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        tabs: [
          {
            title: '🫀 Tricuspid Annulus',
            content: 'The highway:\n• Fibrous ring around tricuspid valve\n• Provides structural pathway\n• Circuit spins around this landmark\n• Natural anatomical boundary'
          },
          {
            title: '⚡ Cavotricuspid Isthmus',
            content: 'The bottleneck:\n• Critical narrow zone\n• Between tricuspid valve & IVC\n• Slow conduction area\n• Target for ablation therapy'
          },
          {
            title: '🔄 Circuit Direction',
            content: 'The flow:\n• Typical: Counter-clockwise\n• Up the septum, down the wall\n• Creates negative waves in inferior leads\n• 90% of all flutter cases'
          }
        ],
        hint: '🫀 Anatomy determines the pattern!'
      },

      {
        id: 'why-organized',
        title: 'Why Flutter is Organized vs AFib Chaos',
        type: 'accordion',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        accordionItems: [
          {
            title: '🎯 Single vs Multiple',
            content: 'Flutter: ONE macro-circuit creates predictable waves. AFib: HUNDREDS of micro-circuits create chaos.'
          },
          {
            title: '📏 Size Matters',
            content: 'Large reentry circuit is stable and organized. Tiny circuits are unstable and chaotic.'
          },
          {
            title: '🏗️ Anatomical Constraint',
            content: 'Flutter circuit follows fixed anatomical boundaries. AFib circuits wander randomly.'
          },
          {
            title: '⚡ Wavelength Physics',
            content: 'Large circuit accommodates longer wavelengths → organized. Small circuits → disorganized collision.'
          }
        ],
        hint: '🎯 Size and structure create organization!'
      },

      {
        id: 'rate-physiology',
        title: 'Why ~300 BPM?',
        type: 'steps',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Circuit Length',
            description: 'The tricuspid annulus circuit has a fixed anatomical length'
          },
          {
            number: 2,
            title: 'Conduction Velocity',
            description: 'Electrical impulse travels at a specific speed through atrial tissue'
          },
          {
            number: 3,
            title: 'Mathematical Result',
            description: 'Circuit length ÷ conduction speed = ~300 bpm cycle time'
          },
          {
            number: 4,
            title: 'Clinical Range',
            description: 'Actual rate: 250-350 bpm, but 300 is the classic teaching point'
          }
        ],
        hint: '📐 Physics determines the rate!'
      },

      // UNIT 2 QUIZ
      {
        id: 'unit2-mechanisms-quiz',
        title: '🎯 Unit 2 Quiz: Flutter Mechanisms',
        content: "Test your understanding of flutter mechanisms!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'slide',
        imageUrl: '/lessonimages/typical-atypical-flutter-circuits.png',
        imageAlt: 'Flutter circuit diagram for quiz',
        hint: '🧠 Test your mechanism knowledge!',
        question: "What anatomical structure does the typical atrial flutter reentry circuit revolve around?",
        options: [
          "Mitral valve annulus",
          "Tricuspid valve annulus",
          "Pulmonary valve annulus", 
          "Aortic valve annulus"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Typical atrial flutter involves a macro-reentry circuit that revolves around the tricuspid valve annulus in the right atrium."
      },

      // Audio Lesson after Unit 2
      {
        id: 'flutter-mechanisms-audio',
        title: '🎧 Flutter Mechanisms Deep Dive',
        content: 'Master the underlying mechanisms through detailed audio instruction covering reentry circuits, anatomical pathways, and the physics behind the organized pattern.',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/typical-atypical-flutter-circuits.png',
        imageAlt: 'Detailed flutter circuit mechanisms',
        audioUrl: '/lessonaudio/module3/lesson22/flutter-mechanisms-audio.mp3',
        hint: '🎧 Understand the engine behind flutter!'
      },

      // ===============================================
      // 🎯 UNIT 3: CONDUCTION PATTERNS (5 slides) 
      // ===============================================
      {
        id: 'unit3-intro',
        title: '🎯 Unit 3: Conduction Patterns',
        content: 'Master AV conduction! Learn about 2:1, 3:1, 4:1 patterns, rate calculations, and why the AV node protects us from 1:1 conduction.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/atrial_flutter_75bpm_1.png',
        imageAlt: 'Atrial flutter showing clear conduction pattern',
        highlights: [
          '🚦 AV node filtering protection',
          '🔢 2:1, 3:1, 4:1 conduction ratios',
          '📊 Ventricular rate calculation',
          '⚠️ Dangerous 1:1 conduction'
        ],
        hint: '🚦 AV node is the traffic controller!'
      },

      {
        id: 'av-node-protector',
        title: 'AV Node: The Protective Filter',
        type: 'flashcard',
        flashcardFront: '🛡️ How does the AV node protect us during flutter?',
        flashcardBack: 'AV node CAN\'T conduct 300 bpm! It filters the flutter waves, conducting only every 2nd, 3rd, or 4th wave. Without this protection, 1:1 conduction would cause dangerous ventricular rates!',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        hint: '🛡️ Natural protective mechanism!'
      },

      {
        id: 'conduction-ratios',
        title: 'Common Conduction Ratios',
        type: 'tabs',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: '2️⃣ 2:1 Conduction',
            content: '2 flutter waves : 1 QRS\nAtrial: 300 bpm\nVentricular: 150 bpm\nMost common pattern\nMay appear regular'
          },
          {
            title: '3️⃣ 3:1 Conduction',
            content: '3 flutter waves : 1 QRS\nAtrial: 300 bpm\nVentricular: 100 bpm\nStable, well-tolerated\nEasy to identify'
          },
          {
            title: '4️⃣ 4:1 Conduction',
            content: '4 flutter waves : 1 QRS\nAtrial: 300 bpm\nVentricular: 75 bpm\nSlower rate\nMay seem like bradycardia'
          },
          {
            title: '🔄 Variable Block',
            content: 'Changing ratios\nIrregular ventricular rate\nCan mimic other arrhythmias\nLook for consistent flutter waves'
          }
        ],
        hint: '🔢 Math makes it simple!'
      },

      {
        id: 'rate-calculation-mastery',
        title: 'Flutter Rate Calculation Made Easy',
        type: 'steps',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Identify Flutter Waves',
            description: 'Count the sawtooth waves - they\'re usually around 300 bpm'
          },
          {
            number: 2,
            title: 'Count QRS Complexes',
            description: 'Determine the ventricular rate using your preferred method'
          },
          {
            number: 3,
            title: 'Calculate the Ratio',
            description: 'Atrial rate ÷ Ventricular rate = Conduction ratio (e.g., 300÷150 = 2:1)'
          },
          {
            number: 4,
            title: 'Verify the Pattern',
            description: 'Check if the ratio is consistent across the strip'
          }
        ],
        hint: '📊 Simple division tells the story!'
      },

      // UNIT 3 QUIZ
      {
        id: 'unit3-conduction-quiz',
        title: '🎯 Unit 3 Quiz: Conduction Patterns',
        content: "Test your conduction calculation skills!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'slide',
        imageUrl: '/ecg/medical_accurate/atrial_flutter_100bpm_2.png',
        imageAlt: 'Atrial flutter for conduction analysis',
        hint: '🧠 Calculate those ratios!',
        question: "If atrial flutter has an atrial rate of 300 bpm with 3:1 AV conduction, what is the ventricular rate?",
        options: [
          "300 bpm",
          "150 bpm",
          "100 bpm", 
          "75 bpm"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! With 3:1 conduction, the ventricular rate is the atrial rate divided by 3: 300 ÷ 3 = 100 bpm."
      },

      // Audio Lesson after Unit 3
      {
        id: 'conduction-patterns-audio',
        title: '🎧 Conduction Patterns Mastery',
        content: 'Master AV conduction through comprehensive audio instruction covering ratio calculations, pattern recognition, and clinical significance of different conduction patterns.',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/atrial_flutter_75bpm_1.png',
        imageAlt: 'Clear conduction pattern demonstration',
        audioUrl: '/lessonaudio/module3/lesson22/conduction-patterns-mastery.mp3',
        hint: '🎧 Master the math and patterns!'
      },

      // Final completion slide
      {
        id: 'flutter-mastery-complete',
        title: '🏆 Atrial Flutter Mastery Complete!',
        content: 'Outstanding! You\'ve mastered atrial flutter recognition, mechanisms, and conduction patterns. You can now identify sawtooth waves, understand the reentry circuit, and calculate conduction ratios like a pro!',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: '/lessonimages/atrial-flutter-mastery-complete.png',
        imageAlt: 'Completion celebration - Flutter mastery achieved',
        highlights: [
          '✅ Instant sawtooth recognition',
          '✅ Mechanism understanding',
          '✅ Conduction ratio mastery',
          '✅ Ready for advanced arrhythmias!'
        ],
        hint: '🎉 You\'re now a flutter expert!'
      }
    ],
    summary: "🎉 Congratulations! You've mastered atrial flutter with 3 focused units covering recognition, mechanisms, and conduction patterns. You can now identify sawtooth waves, understand macro-reentry circuits, and calculate AV conduction ratios with confidence!",
    keyPoints: [
      "Atrial flutter has continuous sawtooth waves without isoelectric baseline",
      "Single macro-reentry circuit around tricuspid annulus creates organized pattern",
      "AV node filters 300 bpm atrial rate into manageable ventricular rates",
      "Common conduction ratios are 2:1 (150 bpm), 3:1 (100 bpm), 4:1 (75 bpm)",
      "Inferior leads (II, III, aVF) best show the classic negative sawtooth pattern"
    ],
    resources: [
      {
        title: "Interactive Flutter ECG Simulator",
        url: "/resources/flutter-simulator", 
        type: "tool",
        description: "Practice flutter recognition with interactive ECGs"
      },
      {
        title: "Flutter Rate Calculator",
        url: "/resources/flutter-calculator",
        type: "tool", 
        description: "Calculate conduction ratios and ventricular rates"
      },
      {
        title: "Advanced Flutter Patterns",
        url: "/resources/advanced-flutter",
        type: "reference",
        description: "Atypical flutter and complex conduction patterns"
      }
    ]
  },
  tasks: [],
  completed: false,
  attempts: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
