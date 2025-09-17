import { Lesson } from '@/types/learning';

// ENHANCED LESSON 6: Complete Rhythm vs Rate Mastery - Duolingo-Style Units
export const optimizedLesson6: Lesson = {
  id: 'module-1-lesson-6',
  moduleId: 'module-1',
  title: "Complete Rhythm vs Rate Mastery",
  description: "Master rhythm vs rate through 6 focused learning units: Concepts, Rate Analysis, Rhythm Patterns, Integration, Clinical Assessment, and Advanced Applications - each with interactive content and quizzes",
  order: 6,
  estimatedTime: 40,
  content: {
    type: 'mixed',
    introduction: "🎵 Welcome to Rhythm vs Rate Mastery! Learn to distinguish between heart rate (speed) and rhythm (pattern) through 6 progressive units with slides, audio, video, and quizzes.",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your Learning Journey",
        content: "UNIT 1: Core Concepts → UNIT 2: Rate Analysis → UNIT 3: Rhythm Patterns → UNIT 4: Integration → UNIT 5: Clinical Assessment → UNIT 6: Advanced Applications",
        mediaType: 'image'
      }
    ],
    summary: "Mastered the critical distinction between heart rate (speed) and rhythm (pattern), enabling accurate ECG interpretation and clinical decision-making.",
    keyPoints: [
      "Heart rate measures speed (beats per minute)",
      "Rhythm describes the pattern and regularity",
      "Both rate and rhythm must be analyzed together",
      "Clinical scenarios require integrated assessment",
      "Medication interactions affect both parameters"
    ],
    resources: [],
    slides: [
      
      // ===============================================
      // 🎯 UNIT 1: CORE CONCEPTS (7 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: Core Concepts',
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/rhythm-vs-rate-overview.png',
        imageAlt: 'Rhythm vs rate core concepts',
        highlights: [
          '🎵 Understand the fundamental difference: Speed vs Pattern',
          '🏃‍♂️ Rate = How fast (beats per minute)',
          '🎼 Rhythm = How regular (pattern consistency)',
          '🔄 They are independent characteristics!'
        ],
        hint: '🚀 Understanding the fundamental difference!'
      },

      // 🎬 YOUTUBE VIDEO: Day 1 - Know Your ECG Expertise
      {
        id: 'youtube-day1-expertise',
        title: '🎬 Day 1: Know Your ECG Expertise',
        content: 'Assess your current ECG interpretation skills and knowledge baseline. Perfect foundation before diving into rhythm vs rate concepts!',
        type: 'youtube',
        youtubeId: 'u6ISIifO7kA',
        videoDuration: 720,
        minimumWatchTime: 540,
        requireFullWatch: false,
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        hint: '📊 Know your starting point for better learning!'
      },

      // 🎬 YOUTUBE VIDEO: ECG Rhythm Game
      {
        id: 'youtube-rhythm-game',
        title: '🎬 Learn ECG Rhythm with Interactive Game',
        content: 'Interactive approach to learning ECG rhythm interpretation. Perfect complement to rate vs rhythm concepts!',
        type: 'youtube',
        youtubeId: 'C70FLhYihLk',
        videoDuration: 600,
        minimumWatchTime: 420,
        requireFullWatch: false,
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        hint: '🎮 Learn through interactive gameplay!'
      },
      
      {
        id: 'rate-definition',
        title: 'Rate: How Fast (Speed)',
        type: 'flashcard',
        animation: 'fade',
        flashcard: {
          icon: '🏃‍♂️',
          question: 'What does RATE measure in ECG analysis?',
          answer: 'Rate = SPEED of heartbeats! 🏃‍♂️\n\n• DEFINITION: Number of beats per minute (bpm)\n• MEASUREMENT: Count heartbeats in 60 seconds\n• NORMAL RANGE: 60-100 bpm\n• INDEPENDENT: Can be fast, slow, or normal regardless of rhythm pattern',
          category: 'concept',
          difficulty: 'beginner'
        },
        hint: '🏃‍♂️ Rate = Speed, measured in bpm!'
      },

      {
        id: 'rhythm-definition',
        title: 'Rhythm: How Regular (Pattern)',
        type: 'flashcard',
        animation: 'fade',
        flashcard: {
          icon: '🎵',
          question: 'What does RHYTHM measure in ECG analysis?',
          answer: 'Rhythm = PATTERN of heartbeats! 🎵\n\n• DEFINITION: How consistent R-R intervals are\n• TYPES: Regular, regularly irregular, irregularly irregular\n• MEASUREMENT: Compare spacing between beats\n• INDEPENDENT: Can be regular or irregular regardless of speed',
          category: 'concept',
          difficulty: 'beginner'
        },
        hint: '🎵 Rhythm = Pattern, like music!'
      },

      {
        id: 'independence-concept',
        title: 'Rate and Rhythm Are Independent',
        type: 'tabs',
        animation: 'fade',
        imageUrl: '/lessonimages/rhythm-vs-rate-overview.png',
        imageAlt: 'Rate and rhythm independence',
        tabs: [
          {
            title: '🔄 Independence Concept',
            content: 'Rate and rhythm are SEPARATE characteristics!\n\n• They can vary independently\n• One normal doesn\'t mean other is normal\n• Both must be assessed separately\n• Different clinical implications'
          },
          {
            title: '📊 Possible Combinations',
            content: 'All combinations are possible:\n\n• Fast + Regular (sinus tachycardia)\n• Slow + Regular (sinus bradycardia)\n• Normal + Irregular (atrial fibrillation)\n• Fast + Irregular (rapid atrial fibrillation)'
          },
          {
            title: '🎯 Assessment Rule',
            content: 'ALWAYS assess BOTH characteristics:\n\n• Calculate rate first\n• Then evaluate rhythm pattern\n• Describe both findings\n• Consider combined clinical significance'
          }
        ],
        hint: '🔄 Two separate characteristics!'
      },

      {
        id: 'clinical-analogy',
        title: 'Musical Analogy',
        type: 'steps',
        animation: 'fade',
        imageUrl: '/lessonimages/rhythm-vs-rate-overview.png',
        imageAlt: 'Musical analogy for rhythm vs rate',
        audioUrl: '/lessonaudio/rhythm-vs-rate/musical-analogy.mp3',
        steps: [
          {
            number: 1,
            title: 'Think of Music',
            description: 'A song has both tempo and rhythm - just like the heart has rate and rhythm'
          },
          {
            number: 2,
            title: 'Tempo = Heart Rate',
            description: 'How fast the song plays = how fast the heart beats (bpm)'
          },
          {
            number: 3,
            title: 'Beat Pattern = Heart Rhythm',
            description: 'The regularity of the beat = the consistency of R-R intervals'
          },
          {
            number: 4,
            title: 'Independent Variables',
            description: 'A song can be fast with regular beat, OR slow with irregular beat'
          }
        ],
        hint: '🎼 Like tempo vs beat in music!'
      },

      {
        id: 'assessment-approach',
        title: 'Systematic Assessment Steps',
        type: 'steps',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Calculate the Rate',
            description: 'Determine heart rate using appropriate method (300, 1500, or 6-second)'
          },
          {
            number: 2,
            title: 'Assess the Rhythm',
            description: 'Check if R-R intervals are regular, regularly irregular, or irregularly irregular'
          },
          {
            number: 3,
            title: 'Describe Both Findings',
            description: 'State both rate (bpm) and rhythm pattern clearly'
          },
          {
            number: 4,
            title: 'Clinical Integration',
            description: 'Consider significance of rate-rhythm combination for patient care'
          }
        ],
        hint: '📋 4 steps to complete assessment!'
      },

      {
        id: 'common-mistakes',
        title: 'Common Assessment Pitfalls',
        type: 'accordion',
        animation: 'fade',
        accordionItems: [
          {
            title: '🚫 Mistake 1: Confusing Speed with Pattern',
            content: 'Confusing fast rate with irregular rhythm\n• Fast can be regular (sinus tachycardia)\n• Fast can be irregular (atrial fibrillation)\n• Speed ≠ Pattern regularity'
          },
          {
            title: '🚫 Mistake 2: False Assumptions', 
            content: 'Assuming regular rhythm means normal rate\n• Regular rhythm can be slow (sinus bradycardia)\n• Regular rhythm can be fast (sinus tachycardia)\n• Regularity ≠ Normal rate'
          },
          {
            title: '🚫 Mistake 3: Incomplete Assessment',
            content: 'Only assessing one characteristic\n• Rate without rhythm = incomplete picture\n• Rhythm without rate = missing critical info\n• Both are needed for full assessment'
          },
          {
            title: '🚫 Mistake 4: Missing Clinical Context',
            content: 'Not considering both in diagnosis\n• Rate-rhythm combination affects treatment\n• Different combinations = different urgency\n• Clinical context matters for interpretation'
          }
        ],
        hint: '⚠️ Avoid these common pitfalls!'
      },

      // ==================== UNIT 1 QUIZ: CORE CONCEPTS ====================
      {
        id: 'unit1-concepts-quiz',
        title: '🎯 Unit 1 Quiz: Core Concepts',
        content: "Test your knowledge of rhythm vs rate concepts!",
        type: 'quiz',
        layout: 'centered',
        animation: 'slide',
        imageUrl: '/lessonimages/rhythm-vs-rate-overview.png',
        imageAlt: 'Core concepts quiz',
        hint: '🧠 Test your Unit 1 knowledge!',
        question: "What is the key difference between rate and rhythm?",
        options: [
          "Rate is for fast hearts, rhythm is for slow hearts",
          "Rate measures speed (bpm), rhythm measures pattern (regularity)",
          "Rate and rhythm mean the same thing",
          "Rate is more important than rhythm"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Rate measures speed (how fast in bpm) while rhythm measures pattern (how regular the intervals are). They are independent characteristics."
      },

      // ================================================
      // 🎯 UNIT 2: RATE ANALYSIS (8 slides)
      // ================================================
      {
        id: 'unit2-intro',
        title: '🎯 Unit 2: Rate Analysis',
        highlights: [
        '🎯 Master rate analysis! Learn to categorize heart rates as bradycardia, normal, or tachycardia and understand their clinical significance.'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Rate analysis overview',
        hint: '📊 Categorizing heart rates!'
      },

      {
        id: 'bradycardia-analysis',
        title: 'Bradycardia: Slow Rate (<60 bpm)',
        highlights: [
        '🎯 BRADYCARDIA: Heart rate less than 60 bpm',
        '🎯 Causes: Athletic conditioning, medications, heart block, sick sinus syndrome',
        '🎯 Symptoms: Fatigue, dizziness, syncope.'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/bradycardia_55bpm.png',
        imageAlt: 'Bradycardia analysis and causes',
        hint: '🐌 Slow but may be normal in athletes!'
      },

      {
        id: 'normal-rate-analysis',
        title: 'Normal Rate (60-100 bpm)',
        highlights: [
        '🎯 NORMAL RATE: 60-100 bpm for adults',
        '🎯 Variations: Lower end for fit individuals, higher end for sedentary',
        '🎯 Children have higher normal rates'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/normal_80bpm.png',
        imageAlt: 'Normal rate analysis across populations',
        hint: '✅ Normal range with individual variations!'
      },

      {
        id: 'tachycardia-analysis',
        title: 'Tachycardia: Fast Rate (>100 bpm)',
        highlights: [
        '🎯 TACHYCARDIA: Heart rate greater than 100 bpm',
        '🎯 Causes: Exercise, anxiety, fever, medications, arrhythmias',
        '🎯 Symptoms: Palpitations, chest pain, shortness of breath.'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/tachycardia_115bpm_2.png',
        imageAlt: 'Tachycardia analysis and causes',
        hint: '🏃‍♂️ Fast - but is it normal response or pathological?'
      },

      {
        id: 'rate-context',
        title: 'Rate Context Considerations',
        highlights: [
        '🎯 CONSIDER: Patient age, fitness level, medications, clinical situation',
        '🎯 NORMAL RESPONSES: Exercise-induced tachycardia, sleep-related bradycardia',
        '🎯 PATHOLOGICAL: Inappropriate rates for situation.'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Rate context and clinical considerations',
        hint: '🎯 Context makes rate meaningful!'
      },

      {
        id: 'rate-trends',
        title: 'Rate Trends and Monitoring',
        highlights: [
        '🎯 TRENDING: Monitor rate changes over time',
        '🎯 PATTERNS: Look for rate variations with position, activity, medications',
        '🎯 DOCUMENTATION: Record rate trends for clinical decision-making.'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Rate trending and monitoring',
        hint: '📈 Trends tell the story!'
      },

      {
        id: 'rate-intervention',
        title: 'Rate-Based Interventions',
        highlights: [
        '🎯 BRADYCARDIA: Atropine, pacing, medication adjustment',
        '🎯 TACHYCARDIA: Beta-blockers, cardioversion, rate control medications',
        '🎯 NORMAL RATE: Monitor and address underlying causes.'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Rate-based interventions',
        hint: '💊 Rate guides treatment choices!'
      },

      // Add Audio lesson for Unit 2
      {
        id: 'rate-analysis-audio',
        title: '🎵 Rate Analysis Audio Guide',
        content: 'Listen to detailed rate analysis techniques with clinical examples of bradycardia, normal rates, and tachycardia assessment.',
        type: 'audio',
        layout: 'centered',
        animation: 'fade',
        audioUrl: '/lessonaudio/rhythm-rate/regular-rhythm-analysis.mp3',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Rate analysis audio lesson',
        hint: '🔊 Listen to rate analysis techniques!'
      },

      // ==================== UNIT 2 QUIZ: RATE ANALYSIS ====================
      {
        id: 'unit2-rate-quiz',
        title: '🎯 Unit 2 Quiz: Rate Analysis',
        content: "Test your knowledge of rate analysis!",
        type: 'quiz',
        layout: 'centered',
        animation: 'slide',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Rate analysis quiz',
        hint: '🧠 Test your Unit 2 knowledge!',
        question: "A heart rate of 45 bpm in a marathon runner is most likely:",
        options: [
          "Pathological bradycardia requiring immediate treatment",
          "Normal athletic conditioning",
          "Sign of heart block",
          "Medication side effect"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! A heart rate of 45 bpm in a trained athlete like a marathon runner is typically normal athletic conditioning, where the heart becomes more efficient."
      },

      // ================================================
      // 🎯 UNIT 3: RHYTHM PATTERNS (8 slides)
      // ================================================
      {
        id: 'unit3-intro',
        title: '🎯 Unit 3: Rhythm Patterns',
        highlights: [
        '🎯 Master rhythm pattern recognition! Learn to identify regular, regularly irregular, and irregularly irregular rhythms and their clinical significance.'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/regular-rhythm-intervals.png',
        imageAlt: 'Rhythm patterns overview',
        hint: '🎼 Pattern recognition mastery!'
      },

      {
        id: 'regular-rhythm',
        title: 'Regular Rhythm: Consistent Intervals',
        highlights: [
        '🎯 REGULAR RHYTHM: R-R intervals are equal (±10%)',
        '🎯 Examples: Normal sinus rhythm, atrial flutter with fixed block',
        '🎯 Assessment: Use calipers or visual inspection to check consistency.'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/sinus-arrhythmia-clinical-decision.png',
        imageAlt: 'Regular rhythm pattern examples',
        hint: '📏 Equal intervals like a metronome!'
      },

      {
        id: 'rhythm-pattern-types',
        title: 'Rhythm Pattern Classification',
        type: 'tabs',
        animation: 'fade',
        tabs: [
          {
            title: '📏 Regular',
            content: 'Equal R-R intervals throughout\n\n• Like a metronome\n• Consistent spacing\n• Examples: NSR, sinus bradycardia\n• Assessment: All intervals equal'
          },
          {
            title: '🔄 Regularly Irregular',
            content: 'Pattern repeats predictably\n\n• Irregular but follows pattern\n• Cycle repeats consistently\n• Examples: Wenckebach, bigeminy\n• Assessment: Look for repeating cycles'
          },
          {
            title: '🌊 Irregularly Irregular',
            content: 'No predictable pattern\n\n• Completely chaotic\n• No repeating cycles\n• Examples: Atrial fibrillation, MAT\n• Assessment: Random R-R intervals'
          },
          {
            title: '🔍 Assessment Tips',
            content: 'How to determine pattern type\n\n• Use calipers for precision\n• Check multiple intervals\n• Look for any repeating cycles\n• Consider strip length needed'
          }
        ],
        hint: '🎵 Three main rhythm patterns!'
      },

      {
        id: 'rhythm-assessment-technique',
        title: 'Rhythm Assessment Technique',
        highlights: [
        '🎯 CALIPERS: Set on two consecutive R waves, march across strip',
        '🎯 VISUAL: Look for pattern consistency',
        '🎯 MEASUREMENT: Compare multiple R-R intervals'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/rhythm-patterns-examples.png',
        imageAlt: 'Rhythm assessment techniques',
        hint: '🔍 Systematic assessment is key!'
      },

      {
        id: 'rhythm-clinical-significance',
        title: 'Clinical Significance of Rhythm',
        highlights: [
        '🎯 REGULAR: Often indicates stable electrical conduction',
        '🎯 REGULARLY IRREGULAR: May indicate specific conduction blocks',
        '🎯 IRREGULARLY IRREGULAR: Often indicates atrial arrhythmias.'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/nsr-clinical-significance.png',
        imageAlt: 'Clinical significance of rhythm patterns',
        hint: '🏥 Rhythm patterns have clinical meaning!'
      },

      {
        id: 'rhythm-documentation',
        title: 'Rhythm Documentation',
        highlights: [
        '🎯 DESCRIBE: Regular vs irregular type',
        '🎯 QUANTIFY: Degree of irregularity if present',
        '🎯 CORRELATE: With other ECG findings'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/normal-sinus-rhythm-overview.png',
        imageAlt: 'Rhythm documentation standards',
        hint: '📝 Clear documentation prevents errors!'
      },

      // Add Audio lesson for Unit 3
      {
        id: 'rhythm-patterns-audio',
        title: '🎵 Rhythm Pattern Analysis',
        content: 'Listen to expert analysis of different rhythm patterns with audio examples and recognition techniques for regular and irregular rhythms.',
        type: 'audio',
        layout: 'centered',
        animation: 'fade',
        audioUrl: '/lessonaudio/rhythm-rate/irregular-rhythm-analysis.mp3',
        imageUrl: '/lessonimages/regular-rhythm-intervals.png',
        imageAlt: 'Rhythm patterns audio lesson',
        hint: '🔊 Master rhythm pattern recognition!'
      },

      // ==================== UNIT 3 QUIZ: RHYTHM PATTERNS ====================
      {
        id: 'unit3-rhythm-quiz',
        title: '🎯 Unit 3 Quiz: Rhythm Patterns',
        content: "Test your knowledge of rhythm patterns!",
        type: 'quiz',
        layout: 'centered',
        animation: 'slide',
        imageUrl: '/lessonimages/regular-rhythm-intervals.png',
        imageAlt: 'Rhythm patterns quiz',
        hint: '🧠 Test your Unit 3 knowledge!',
        question: "What type of rhythm pattern is characteristic of atrial fibrillation?",
        options: [
          "Regular rhythm",
          "Regularly irregular",
          "Irregularly irregular",
          "Slightly irregular"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! Atrial fibrillation is characterized by an irregularly irregular rhythm pattern with no predictable R-R interval pattern."
      },

      // ================================================
      // 🎯 UNIT 4: INTEGRATION (8 slides)
      // ================================================
      {
        id: 'unit4-intro',
        title: '🎯 Unit 4: Integration',
        highlights: [
        '🎯 Master integration of rate and rhythm! Learn to combine rate and rhythm findings for complete assessment and accurate clinical interpretation.'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/rhythm-vs-rate-overview.png',
        imageAlt: 'Rate and rhythm integration',
        hint: '🔗 Bringing it all together!'
      },

      {
        id: 'systematic-integration',
        title: 'Systematic Integration Approach',
        highlights: [
        '🎯 STEP 1: Determine rate category',
        '🎯 STEP 2: Assess rhythm pattern',
        '🎯 STEP 3: Combine findings'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Systematic integration steps',
        hint: '📋 Step-by-step integration!'
      },

      {
        id: 'common-combinations',
        title: 'Common Rate-Rhythm Combinations',
        highlights: [
        '🎯 NORMAL + REGULAR: Sinus rhythm',
        '🎯 FAST + REGULAR: Sinus tachycardia',
        '🎯 FAST + IRREGULAR: Atrial fibrillation with RVR'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/rhythm-vs-rate-overview.png',
        imageAlt: 'Common rate-rhythm combinations',
        hint: '🔄 Learn these key combinations!'
      },

      {
        id: 'clinical-interpretation',
        title: 'Clinical Interpretation Guide',
        highlights: [
        '🎯 NORMAL RATE + REGULAR RHYTHM: Usually benign',
        '🎯 ABNORMAL RATE + REGULAR RHYTHM: Consider causes',
        '🎯 ANY RATE + IRREGULAR RHYTHM: Investigate arrhythmia'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/nsr-clinical-significance.png',
        imageAlt: 'Clinical interpretation guide',
        hint: '🎯 Interpretation drives action!'
      },

      {
        id: 'priority-assessment',
        title: 'Priority Assessment Matrix',
        highlights: [
        '🎯 HIGH PRIORITY: Fast irregular, very slow, very fast regular',
        '🎯 MODERATE PRIORITY: Mild bradycardia, regularly irregular',
        '🎯 LOW PRIORITY: Normal rate regular rhythm'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Priority assessment matrix',
        hint: '⚡ Some combinations need immediate attention!'
      },

      {
        id: 'integration-pitfalls',
        title: 'Integration Pitfalls',
        highlights: [
        '🎯 PITFALL 1: Focusing only on rate or rhythm',
        '🎯 PITFALL 2: Ignoring clinical context',
        '🎯 PITFALL 3: Not trending changes'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/rhythm-vs-rate-overview.png',
        imageAlt: 'Common integration pitfalls',
        hint: '⚠️ Avoid these integration errors!'
      },

      {
        id: 'advanced-integration',
        title: 'Advanced Integration Concepts',
        highlights: [
        '🎯 RATE VARIABILITY: Normal slight variations vs pathological',
        '🎯 RHYTHM TRANSITIONS: Changes between patterns',
        '🎯 DRUG EFFECTS: How medications affect both rate and rhythm.'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Advanced integration concepts',
        hint: '🎓 Advanced integration skills!'
      },

      // Add Video lesson for Unit 4
      {
        id: 'rhythm-rate-video',
        title: '🎥 Rhythm vs Rate Integration',
        content: 'Watch comprehensive analysis of rhythm and rate integration with real ECG examples and clinical decision-making processes.',
        type: 'video',
        layout: 'centered',
        animation: 'fade',
        videoUrl: '/lessonvideos/rhythm-vs-rate-analysis.mp4',
        imageUrl: '/lessonimages/rhythm-vs-rate-overview.png',
        imageAlt: 'Rhythm vs rate integration video',
        hint: '🎬 See integration in action!'
      },
    
    // ==================== TASK 5: CLINICAL SCENARIOS CHALLENGE ====================
    {
      id: 'clinical-scenarios',
      title: '🏥 Clinical Scenarios Challenge',
      type: 'quiz',
      
      // Audio challenge with clinical scenarios
      audio: {
        narrationUrl: '/lessonaudio/rhythm-vs-rate/clinical-scenarios-task.mp3',
        duration: 35,
        transcript: 'Let\'s analyze a clinical scenario. A patient has a heart rate of 85 beats per minute with completely irregular R-R intervals. The rate is normal, but the rhythm is irregularly irregular. This combination suggests atrial fibrillation with a controlled ventricular response. Both rate and rhythm information are needed for diagnosis.'
      },
      
      content: [
        'A patient has NORMAL rate (75 bpm) but IRREGULARLY IRREGULAR rhythm. What\'s the likely diagnosis?'
      ],
      
      question: 'A patient has NORMAL rate (75 bpm) but IRREGULARLY IRREGULAR rhythm. What\'s the likely diagnosis?',
      options: ['Normal sinus rhythm', 'Sinus bradycardia', 'Atrial fibrillation', 'Sinus tachycardia'],
      correctAnswer: 2,
      explanation: 'Excellent analysis! Normal rate + irregularly irregular rhythm = atrial fibrillation. This shows why both rate AND rhythm matter!',
      hint: '🎵 Think about what causes irregular rhythms'
    },
    
    // ==================== TASK 6: FINAL RHYTHM VS RATE MASTERY ====================
    {
      id: 'rhythm-rate-mastery',
      title: '🏆 Final Rhythm vs Rate Mastery',
      type: 'quiz',
      
      // Final mastery audio
      audio: {
        narrationUrl: '/lessonaudio/rhythm-vs-rate/final-mastery-task.mp3',
        duration: 15,
        transcript: 'Final rhythm vs rate mastery test! You\'ve learned the critical difference between rate and rhythm, and how to analyze both. Time to demonstrate your comprehensive understanding!'
      },
      
      content: [
        'Final rhythm vs rate mastery test! Time to demonstrate your comprehensive understanding!'
      ],
      
      question: 'In an elderly patient with multiple medications, the priority when assessing rate and rhythm abnormalities is:',
      options: [
        "Immediately normalize all values",
        "Consider medication interactions and patient stability",
        "Focus only on the ECG findings",
        "Discontinue all cardiac medications"
      ],
      correctAnswer: 1,
      explanation: "✅ Correct! In elderly patients with multiple medications, priority should be given to assessing medication interactions and overall patient stability rather than just ECG values."
    }
  ]
  },
  
  // Learning tasks for this lesson
  tasks: [],
  
  // Required lesson completion metadata
  completed: false,
  attempts: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
