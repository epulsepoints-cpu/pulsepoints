import { Lesson } from '@/types/learning';

export const optimizedLesson11: Lesson = {
  id: 'optimized-lesson-11',
  moduleId: 'module-2',
  title: 'Complete Normal Sinus Rhythm Mastery - With Real ECGs',
  description: 'Master normal sinus rhythm with 6 comprehensive units featuring REAL ECG examples: SA Node Function, NSR Criteria, Rate Analysis, Rhythm Regularity, P Wave Assessment, and Clinical Applications. Build expertise through progressive learning with actual patient ECGs from our database.',
  order: 11,
  estimatedTime: 45,
  
  // Duolingo-style lesson structure
  content: {
    type: 'mixed',
    introduction: 'Welcome to your complete normal sinus rhythm mastery journey! 💓 You\'ll progress through 6 carefully designed units using REAL patient ECGs from our comprehensive database. Each unit features actual clinical examples and ends with assessment using real rhythm strips.',
    sections: [
      {
        id: 'nsr-overview',
        title: '💓 NSR Learning Journey',
        content: 'UNIT 1: SA Node Function → UNIT 2: NSR Criteria → UNIT 3: Rate Analysis → UNIT 4: Rhythm Regularity → UNIT 5: P Wave Assessment → UNIT 6: Clinical Applications',
        mediaType: 'image'
      }
    ],
    summary: 'Complete mastery of normal sinus rhythm recognition through systematic progressive learning with 6 comprehensive units covering all aspects of NSR identification and clinical applications.',
    
    keyPoints: [
      'Master SA node function and pacemaker properties',
      'Learn all five NSR criteria: rate, rhythm, P waves, PR interval, QRS',
      'Practice four rate calculation methods for any clinical situation',
      'Assess rhythm regularity using professional techniques',
      'Analyze P wave morphology and AV relationships',
      'Apply NSR knowledge in real clinical scenarios'
    ],
    
    resources: [
      {
        type: 'video',
        title: 'ECGkid Systematic Approach',
        url: 'https://youtube.com/watch?v=iWjZwo7DsNY',
        description: '7-step professional ECG interpretation method'
      },
      {
        type: 'video', 
        title: 'Heart Rate Calculation Mastery',
        url: 'https://youtube.com/watch?v=xZP7rvyHY4M',
        description: 'All four rate calculation methods with examples'
      },
      {
        type: 'video',
        title: 'P Wave Analysis Excellence', 
        url: 'https://youtube.com/watch?v=VXNnq6aXLK4',
        description: 'Complete P wave morphology assessment'
      },
      {
        type: 'video',
        title: 'Clinical Integration',
        url: 'https://youtube.com/watch?v=CLj3EXw0Dx4', 
        description: 'NSR application in patient care'
      },
      {
        type: 'reference',
        title: 'Medical Accurate ECG Database',
        url: '/ecg/medical_accurate/',
        description: 'Real patient NSR examples at various rates'
      },
      {
        type: 'reference',
        title: 'Rhythm Rate Audio Library',
        url: '/lessonaudio/rhythm-rate/',
        description: 'Comprehensive audio learning materials'
      }
    ],
    
    // ===============================================
    // 📚 COMPREHENSIVE SLIDES (6 UNITS × ~8 SLIDES EACH = ~48 SLIDES)
    // ===============================================
    slides: [
      
      // ===============================================
      // 🫀 UNIT 1: SA NODE FUNCTION (8 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🫀 Unit 1: SA Node Function',
        content: 'Begin your NSR mastery! Learn how the sinoatrial node functions as the heart\'s natural pacemaker and creates normal sinus rhythm.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/normal_sinus_60bpm_1.png',
        imageAlt: 'Real NSR example: Perfect normal sinus rhythm at 60 BPM',
        highlights: [
          '🫀 SA node anatomy and location',
          '⚡ Pacemaker cell properties',
          '📊 Normal rate ranges by age',
          '🧠 Autonomic nervous system control'
        ],
        hint: '🫀 The heart\'s natural pacemaker in action!'
      },

      // 🎥 ECGkid Systematic Approach - Foundation for All ECG Learning
      {
        id: 'ecgkid-systematic-approach',
        title: '🎥 Master Class: 7-Step ECG Interpretation Method',
        content: 'Before diving into NSR details, master the systematic approach! This ECGkid video teaches the professional 7-step method used by cardiologists. This foundation will serve you throughout your entire ECG journey.',
        type: 'youtube',
        layout: 'centered',
        backgroundColor: '#059669',
        textColor: '#ffffff',
        animation: 'fade',
        youtubeId: 'iWjZwo7DsNY',
        videoDuration: 218, // 3 minutes, 38 seconds
        minimumWatchTime: 180, // 3 minutes minimum - foundational method
        requireFullWatch: true, // Essential systematic approach
        imageUrl: '/ecg/medical_accurate/normal_sinus_60bpm_1.png',
        imageAlt: 'ECGkid systematic ECG interpretation approach',
        hint: '🎯 Learn the professional 7-step method used by experts!',
        highlights: [
          'Professional 7-step systematic method',
          'Foundation for all ECG interpretation',
          'Used by cardiologists worldwide',
          'Essential methodology training'
        ]
      },
      
      {
        id: 'sa-node-anatomy',
        title: 'SA Node Anatomy & Location',
        type: 'accordion',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        accordionItems: [
          {
            title: '📍 Anatomical Location',
            content: 'Upper right atrium near SVC junction\nSmall cluster of specialized cells (~15mm long)\nCrista terminalis region'
          },
          {
            title: '🔬 Cellular Structure',
            content: 'Pacemaker cells with automatic properties\nFewer contractile filaments than working cells\nRich autonomic innervation'
          },
          {
            title: '🩸 Blood Supply',
            content: 'Right coronary artery (60% of patients)\nCircumflex artery (40% of patients)\nDual supply in some cases'
          },
          {
            title: '🔗 Clinical Correlation',
            content: 'SA node dysfunction causes sick sinus syndrome\nInferior MI can affect SA node\nSA node recovery after ischemia'
          }
        ],
        hint: '📍 Upper right atrium creates the P wave!'
      },

      {
        id: 'pacemaker-cells',
        title: 'Pacemaker Cell Properties',
        type: 'tabs',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: '⚡ Automaticity',
            content: 'Spontaneous depolarization without external stimulus\nPhase 4 slope determines rate\nNo stable resting potential'
          },
          {
            title: '🔬 Ion Channels',
            content: 'L-type calcium channels drive depolarization\nFunny current (If) initiates phase 4\nPotassium channels control repolarization'
          },
          {
            title: '⏱️ Cycle Timing',
            content: 'Threshold: -40mV triggers action potential\nCycle length determines heart rate\n1000ms cycle = 60 BPM'
          },
          {
            title: '🎯 Clinical Impact',
            content: 'Calcium blockers slow SA node\nBeta blockers reduce automaticity\nDigoxin enhances vagal tone'
          }
        ],
        hint: '⚡ Automatic electrical activity drives the heart!'
      },

      {
        id: 'normal-rates',
        title: 'Normal SA Node Rates',
        type: 'steps',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Adults (18-65 years)',
            description: '60-100 beats per minute is the standard normal range for healthy adults'
          },
          {
            number: 2,
            title: 'Athletes & Fitness',
            description: 'Trained athletes: 40-60 BPM due to enhanced parasympathetic tone'
          },
          {
            number: 3,
            title: 'Age Variations',
            description: 'Elderly: 50-90 BPM. Children: 80-120 BPM. Infants: 120-160 BPM'
          },
          {
            number: 4,
            title: 'Influencing Factors',
            description: 'Fitness level, medications, autonomic tone, and underlying conditions affect rate'
          }
        ],
        hint: '📊 60-100 BPM is the adult normal range!'
      },

      {
        id: 'autonomic-influence',
        title: 'Autonomic Nervous System Control',
        type: 'flashcard',
        backgroundColor: '#f0fff4',
        textColor: '#047857',
        animation: 'fade',
        flashcardFront: '🧠 How does your brain control heart rate?',
        flashcardBack: 'SYMPATHETIC SYSTEM: ⬆️ Increases rate via norepinephrine (β1 receptors)\n\nPARASYMPATHETIC SYSTEM: ⬇️ Decreases rate via acetylcholine (muscarinic)\n\nAt rest: Parasympathetic dominance\nDuring exercise: Sympathetic activation\nDuring sleep: Enhanced parasympathetic activity',
        hint: '🧠 Your brain is the ultimate rate controller!'
      },

      {
        id: 'conduction-pathway',
        title: 'Normal Conduction Pathway',
        type: 'steps',
        backgroundColor: '#fdf4ff',
        textColor: '#86198f',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'SA Node Initiation',
            description: 'Electrical impulse begins in SA node and spreads through atria (P wave formation)'
          },
          {
            number: 2,
            title: 'Atrial Conduction',
            description: 'Impulse travels via internodal pathways to AV node (0.03 seconds)'
          },
          {
            number: 3,
            title: 'AV Node Delay',
            description: 'Physiological delay allows atrial emptying (0.1 seconds - PR interval)'
          },
          {
            number: 4,
            title: 'Ventricular Activation',
            description: 'Rapid conduction through His-Purkinje system (0.08 seconds - QRS complex)'
          }
        ],
        hint: '⚡ SA node starts the electrical journey!'
      },

      // SA Node audio lesson
      {
        id: 'sa-node-audio-lesson',
        title: '🎧 SA Node Mastery Audio',
        content: 'Reinforce your understanding of SA node function, pacemaker cells, autonomic control, and clinical applications. This comprehensive audio guide covers anatomy, physiology, and pathology.',
        type: 'audio',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        audioUrl: '/lessonaudio/rhythm-rate/sa-node-mastery.mp3',
        hint: '🔊 Listen to SA node expertise!'
      },

      // ==================== UNIT 1 QUIZ: SA NODE FUNCTION ====================
      {
        id: 'unit1-sa-node-quiz',
        title: '🎯 Unit 1 Quiz: SA Node Function',
        content: "Test your knowledge of SA node function and pacemaker activity!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: '/ecg/medical_accurate/normal_sinus_75bpm_2.png',
        imageAlt: 'SA node function quiz - perfect NSR at 75 BPM',
        hint: '🧠 Test your Unit 1 SA node knowledge!',
        question: "What is the normal heart rate range for healthy adults at rest?",
        options: [
          "50-90 beats per minute",
          "60-100 beats per minute",
          "70-110 beats per minute",
          "80-120 beats per minute"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! The normal heart rate for healthy adults at rest is 60-100 beats per minute. This range represents normal SA node automaticity under resting conditions with balanced autonomic tone."
      },

      // ===============================================
      // 📋 UNIT 2: NSR CRITERIA (8 slides)
      // ===============================================
      {
        id: 'unit2-intro',
        title: '📋 Unit 2: NSR Criteria',
        type: 'highlight',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/normal_sinus_85bpm_3.png',
        imageAlt: 'Perfect NSR example demonstrating all five criteria at 85 BPM',
        highlights: [
          '📊 Rate: 60-100 beats per minute',
          '⚖️ Rhythm: Regular R-R intervals',
          '📈 P waves: Present before each QRS',
          '⏱️ PR interval: 0.12-0.20 seconds',
          '⚡ QRS: <0.12 seconds, 1:1 with P waves'
        ],
        hint: '📋 Five criteria define perfect NSR!'
      },

      {
        id: 'criterion-1-rate',
        title: 'Criterion 1: Heart Rate 60-100 BPM',
        type: 'flashcard',
        backgroundColor: '#f0fff4',
        textColor: '#047857',
        animation: 'fade',
        flashcardFront: '📊 Why is 60-100 BPM the magic range?',
        flashcardBack: 'PHYSIOLOGICAL PERFECTION! 💫\n\n60 BPM: Minimum for adequate cardiac output at rest\n100 BPM: Maximum before "tachycardia" classification\n\nTHIS RANGE ENSURES:\n• Adequate perfusion\n• Efficient filling time\n• Normal metabolic demands met\n• Balanced autonomic tone',
        hint: '📊 The Goldilocks zone of heart rates!'
      },

      {
        id: 'criterion-2-regularity',
        title: 'Criterion 2: Regular Rhythm',
        type: 'steps',
        backgroundColor: '#fdf4ff',
        textColor: '#86198f',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: '📐 Measure R-R Intervals',
            description: 'Use calipers or paper to measure distance between R waves'
          },
          {
            number: 2,
            title: '⚖️ Compare Intervals',
            description: 'All R-R intervals should be equal within 0.12 seconds variation'
          },
          {
            number: 3,
            title: '🔄 Check Consistency',
            description: 'Pattern should be consistent throughout the rhythm strip'
          },
          {
            number: 4,
            title: '✅ Confirm Regularity',
            description: 'Regular rhythm confirms consistent SA node firing'
          }
        ],
        hint: '⚖️ Equal intervals = regular rhythm!'
      },

      {
        id: 'criterion-3-p-waves',
        title: 'Criterion 3: P Wave Assessment',
        type: 'accordion',
        backgroundColor: '#f0fff4',
        textColor: '#047857',
        animation: 'fade',
        accordionItems: [
          {
            title: '✓ P Wave Presence',
            content: 'Must have a P wave before every QRS complex\nP waves should be clearly visible\nNo QRS without a preceding P wave'
          },
          {
            title: '📈 P Wave Morphology',
            content: 'Upright in leads I, II, aVF\nInverted in aVR (normal)\nConsistent shape throughout rhythm'
          },
          {
            title: '🎯 Best Assessment Leads',
            content: 'Lead II: Best for P wave visibility\nLead V1: Good for atrial activity\nAvoid leads with poor P wave visibility'
          },
          {
            title: '⚠️ P Wave Abnormalities',
            content: 'Absent P waves: Junctional rhythm\nVariable P waves: Wandering pacemaker\nInverted P waves: Ectopic atrial rhythm'
          }
        ],
        hint: '📈 Lead II shows the best P waves!'
      },

      {
        id: 'criterion-4-pr-interval',
        title: 'Criterion 4: PR Interval',
        type: 'flashcard',
        backgroundColor: '#fdf4ff',
        textColor: '#86198f',
        animation: 'fade',
        flashcardFront: '⏱️ What makes a perfect PR interval?',
        flashcardBack: 'NORMAL RANGE: 0.12 - 0.20 seconds (3-5 small boxes)\n\nMEASUREMENT: Start of P wave to start of QRS\n\nCONSISTENCY: Same PR interval for each beat\n\nCLINICAL SIGNIFICANCE:\n• Short PR (<0.12s): Pre-excitation\n• Long PR (>0.20s): First-degree AV block',
        hint: '⏱️ 3-5 small boxes = perfect timing!'
      },

      {
        id: 'criterion-5-qrs',
        title: 'Criterion 5: QRS Complex & AV Relationship',
        type: 'tabs',
        backgroundColor: '#ecfdf5',
        textColor: '#047857',
        animation: 'fade',
        tabs: [
          {
            title: '⚡ QRS Duration',
            content: 'Must be <0.12 seconds (narrow complex)\n3 small boxes or less\nWide QRS suggests conduction delay'
          },
          {
            title: '🔗 AV Relationship',
            content: '1:1 P wave to QRS relationship\nEvery P wave followed by QRS\nEvery QRS preceded by P wave'
          },
          {
            title: '📊 QRS Morphology',
            content: 'Consistent QRS shape\nNormal for patient baseline\nNo bizarre configurations'
          },
          {
            title: '🎯 Clinical Impact',
            content: 'Wide QRS: Bundle branch block\nVariable AV ratio: AV block\nNormal QRS: Intact conduction'
          }
        ],
        hint: '⚡ Narrow QRS + 1:1 AV relationship!'
      },

      {
        id: 'criteria-checklist',
        title: 'NSR Criteria Checklist',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/normal_sinus_95bpm_4.png',
        imageAlt: 'Perfect NSR example showing all five criteria at 95 BPM',
        highlights: [
          '✅ RATE: 60-100 BPM achieved',
          '✅ RHYTHM: Regular R-R intervals',
          '✅ P WAVES: Present, upright in lead II',
          '✅ PR INTERVAL: 0.12-0.20 seconds, consistent',
          '✅ QRS: <0.12 seconds, 1:1 with P waves'
        ],
        hint: '✅ All five criteria = perfect NSR!'
      },

      {
        id: 'nsr-mastery-audio',
        title: '🎧 NSR Criteria Audio Review',
        content: 'Listen to reinforce your understanding of the five essential NSR criteria. This 4-minute audio summary covers rate, rhythm, P waves, PR interval, and QRS analysis with clinical tips.',
        type: 'audio',
        backgroundColor: '#fdf2f8',
        textColor: '#be185d',
        animation: 'fade',
        audioUrl: '/audio/nsr-criteria-mastery.mp3',
        hint: '🎧 Reinforce your NSR criteria knowledge!'
      },

      // ==================== UNIT 2 QUIZ: NSR CRITERIA ====================
      {
        id: 'unit2-nsr-criteria-quiz',
        title: '🎯 Unit 2 Quiz: NSR Criteria',
        content: "Test your knowledge of Normal Sinus Rhythm criteria!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: '/ecg/medical_accurate/normal_sinus_85bpm_3.png',
        imageAlt: 'NSR criteria quiz - perfect example at 85 BPM',
        hint: '🧠 Test your Unit 2 NSR criteria knowledge!',
        question: "What is the normal PR interval range for NSR?",
        options: [
          "0.08 - 0.16 seconds (2-4 small boxes)",
          "0.12 - 0.20 seconds (3-5 small boxes)",
          "0.16 - 0.24 seconds (4-6 small boxes)",
          "0.20 - 0.28 seconds (5-7 small boxes)"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! The normal PR interval for NSR is 0.12 - 0.20 seconds (3-5 small boxes). This represents the time from start of P wave to start of QRS, indicating normal AV conduction."
      },

      // ===============================================
      // 📊 UNIT 3: RATE ANALYSIS (8 slides)
      // ===============================================
      {
        id: 'unit3-intro',
        title: '📊 Unit 3: Rate Analysis',
        type: 'highlight',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/normal_sinus_75bpm_2.png',
        imageAlt: 'Rate analysis mastery - perfect 75 BPM NSR for learning calculation methods',
        highlights: [
          '📦 Large Box Method: 300 ÷ boxes = rate',
          '📏 Small Box Method: 1500 ÷ boxes = precise rate',
          '⏰ Six-Second Method: Count × 10 for irregular',
          '🧠 Sequence Method: Memorize 300, 150, 100...'
        ],
        hint: '📊 Master all four rate calculation methods!'
      },

      {
        id: 'large-box-method',
        title: 'Large Box Method: Quick & Easy',
        type: 'steps',
        backgroundColor: '#f0fff4',
        textColor: '#047857',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/normal_sinus_60bpm_1.png',
        imageAlt: 'Perfect 60 BPM example for large box method demonstration',
        steps: [
          {
            number: 1,
            title: '📦 Count Large Boxes',
            description: 'Count large boxes between two consecutive R waves'
          },
          {
            number: 2,
            title: '🔢 Apply Formula',
            description: '300 ÷ number of large boxes = heart rate'
          },
          {
            number: 3,
            title: '⚡ Quick Example',
            description: '5 large boxes between R waves = 300 ÷ 5 = 60 BPM'
          },
          {
            number: 4,
            title: '✅ Best For',
            description: 'Regular rhythms where precision isn\'t critical'
          }
        ],
        hint: '📦 300 ÷ large boxes = quick rate!'
      },

      {
        id: 'small-box-method',
        title: 'Small Box Method: Maximum Precision',
        type: 'flashcard',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        flashcardFront: '📏 When do you need the Small Box Method?',
        flashcardBack: 'For MAXIMUM PRECISION! 🎯\n\nFORMULA: 1500 ÷ small boxes = exact rate\n\nEXAMPLE: 25 small boxes = 1500 ÷ 25 = 60.0 BPM\n\nUSE WHEN:\n• Precise rate needed for medications\n• Research or documentation\n• Rate is between standard intervals',
        hint: '📏 1500 ÷ small boxes = precise rate!'
      },

      {
        id: 'six-second-method',
        title: 'Six-Second Method: Irregular Champion',
        type: 'accordion',
        backgroundColor: '#fdf4ff',
        textColor: '#86198f',
        animation: 'fade',
        accordionItems: [
          {
            title: '⏰ Perfect for Irregular Rhythms',
            content: 'When R-R intervals vary (like atrial fibrillation), this is your go-to method!'
          },
          {
            title: '🔢 Simple Calculation',
            content: 'Count QRS complexes in 6 seconds, multiply by 10. Easy math, reliable results.'
          },
          {
            title: '📏 Using Rhythm Strips',
            content: 'Most rhythm strips have markers every 3 seconds - count two marker intervals'
          },
          {
            title: '🏥 Clinical Gold Standard',
            content: 'Most practical for bedside assessment - no measuring required!'
          }
        ],
        hint: '⏰ Count 6 seconds × 10 = average rate!'
      },

      {
        id: 'sequence-method',
        title: 'Sequence Method: Memory Master',
        type: 'tabs',
        backgroundColor: '#ecfdf5',
        textColor: '#047857',
        animation: 'fade',
        tabs: [
          {
            title: '🧠 The Magic Sequence',
            content: 'Memorize: 300, 150, 100, 75, 60, 50, 43, 37, 33...\n\n1 box = 300 BPM\n2 boxes = 150 BPM\n3 boxes = 100 BPM\n4 boxes = 75 BPM\n5 boxes = 60 BPM'
          },
          {
            title: '⚡ Lightning Fast',
            content: 'Once memorized, this is the fastest method!\n\nSimply count large boxes and recall the rate\n\nNo math required at bedside'
          },
          {
            title: '🎯 Perfect for Regular Rhythms',
            content: 'Works best when R waves land exactly on large box lines\n\nLess useful for irregular or in-between rates'
          },
          {
            title: '📚 Study Tip',
            content: 'Practice with flash cards: "3 boxes = ?" Answer: "100 BPM"\n\nMost common rates: 60, 75, 100, 150'
          }
        ],
        hint: '🧠 Memorize the magic sequence!'
      },

      {
        id: 'rate-method-comparison',
        title: 'Which Method When?',
        type: 'accordion',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/normal_sinus_85bpm_3.png',
        imageAlt: 'Method comparison using 85 BPM NSR - perfect for demonstrating different calculation approaches',
        accordionItems: [
          {
            title: '🏥 Emergency Department',
            content: 'Six-second method for quick triage assessment\nSequence method for rapid regular rhythm check'
          },
          {
            title: '💊 Medication Dosing',
            content: 'Small box method for precise rate calculation\nCritical when dosing rate-dependent medications'
          },
          {
            title: '🫀 Irregular Rhythms',
            content: 'Six-second method is the only reliable choice\nOther methods fail with varying R-R intervals'
          },
          {
            title: '📚 Student Practice',
            content: 'Start with large box method (easiest)\nProgress to small box for precision\nMaster sequence for speed'
          }
        ],
        hint: '🤔 Choose the right tool for the job!'
      },

      // 🎥 ECGkid Rate Calculation Excellence
      {
        id: 'ecgkid-rate-mastery',
        title: '🎥 Master Class: Heart Rate Calculation Excellence',
        content: 'Take your rate calculation skills to the next level! This ECGkid video demonstrates all four methods with real ECG examples, common pitfalls, and professional tips used in clinical practice.',
        type: 'youtube',
        layout: 'centered',
        backgroundColor: '#dc2626',
        textColor: '#ffffff',
        animation: 'fade',
        youtubeId: 'xZP7rvyHY4M',
        videoDuration: 267, // 4 minutes, 27 seconds
        minimumWatchTime: 200, // 3:20 minimum - essential rate skills
        requireFullWatch: false,
        imageUrl: '/ecg/medical_accurate/normal_sinus_95bpm_4.png',
        imageAlt: 'ECGkid rate calculation mastery techniques',
        hint: '🎯 Master professional rate calculation techniques!',
        highlights: [
          'All four methods demonstrated',
          'Real ECG examples',
          'Common calculation pitfalls',
          'Professional clinical tips'
        ]
      },

      {
        id: 'rate-calculation-practice',
        title: 'Rate Calculation Practice',
        type: 'steps',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/normal_sinus_100bpm_5.png',
        imageAlt: 'Practice rate calculation on perfect 100 BPM NSR example',
        steps: [
          {
            number: 1,
            title: '👀 Examine This ECG',
            description: 'Look at the NSR strip above - perfect for practicing all methods'
          },
          {
            number: 2,
            title: '📦 Try Large Box Method',
            description: 'Count large boxes between R waves, apply 300 ÷ boxes'
          },
          {
            number: 3,
            title: '📏 Verify with Small Box',
            description: 'Count small boxes for precision, apply 1500 ÷ boxes'
          },
          {
            number: 4,
            title: '🧠 Check Sequence Memory',
            description: 'What rate matches your large box count from memory?'
          }
        ],
        hint: '💪 Practice makes perfect - try all methods!'
      },

      // ==================== UNIT 3 QUIZ: RATE ANALYSIS ====================
      {
        id: 'unit3-rate-analysis-quiz',
        title: '🎯 Unit 3 Quiz: Rate Analysis',
        content: "Test your rate calculation mastery!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: '/ecg/medical_accurate/normal_sinus_75bpm_2.png',
        imageAlt: 'Rate analysis quiz - calculate this NSR example',
        hint: '🧠 Test your Unit 3 rate calculation skills!',
        question: "Using the Large Box Method, if there are 4 large boxes between R waves, what is the heart rate?",
        options: [
          "60 BPM (300 ÷ 5)",
          "75 BPM (300 ÷ 4)",
          "100 BPM (300 ÷ 3)",
          "150 BPM (300 ÷ 2)"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Using the Large Box Method: 300 ÷ 4 large boxes = 75 BPM. The formula is always 300 divided by the number of large boxes between consecutive R waves."
      },

      // ===============================================
      // ⚖️ UNIT 4: RHYTHM REGULARITY (8 slides)
      // ===============================================
      {
        id: 'unit4-intro',
        title: '⚖️ Unit 4: Rhythm Regularity',
        type: 'highlight',
        backgroundColor: '#fdf2f8',
        textColor: '#be185d',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/normal_sinus_95bpm_4.png',
        imageAlt: 'Rhythm regularity mastery - perfect regular NSR at 95 BPM',
        highlights: [
          '📐 R-R interval measurement techniques',
          '⚖️ Defining "regular" vs "irregular"',
          '🔍 Using calipers for precision',
          '📊 Acceptable variation limits'
        ],
        hint: '⚖️ Master rhythm regularity assessment!'
      },

      {
        id: 'measuring-regularity',
        title: 'Measuring R-R Intervals',
        type: 'steps',
        backgroundColor: '#f0fff4',
        textColor: '#047857',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: '📐 Select Reference Points',
            description: 'Choose consistent R wave peaks for measurement'
          },
          {
            number: 2,
            title: '📏 Use Proper Tools',
            description: 'Calipers are best, paper edge works as backup'
          },
          {
            number: 3,
            title: '🔍 Measure Multiple Intervals',
            description: 'Check at least 3-4 consecutive R-R intervals'
          },
          {
            number: 4,
            title: '⚖️ Compare for Consistency',
            description: 'All intervals should be equal within 0.12 seconds'
          }
        ],
        hint: '📐 Consistent R-R intervals = regular rhythm!'
      },

      {
        id: 'caliper-technique',
        title: 'Professional Caliper Technique',
        type: 'flashcard',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        flashcardFront: '📐 How do professionals use calipers for rhythm analysis?',
        flashcardBack: 'GOLD STANDARD TECHNIQUE! ⭐\n\n1. Set caliper to first R-R interval\n2. "Walk" calipers across rhythm strip\n3. Each subsequent R should align perfectly\n4. Any deviation >0.12s = irregular\n\nPRO TIP: Start with longest strip available\nCHECK: Minimum 6-10 R-R intervals',
        hint: '📐 Walk the calipers for perfect accuracy!'
      },

      {
        id: 'regular-vs-irregular',
        title: 'Regular vs Irregular Classification',
        type: 'accordion',
        backgroundColor: '#fdf4ff',
        textColor: '#86198f',
        animation: 'fade',
        accordionItems: [
          {
            title: '✅ REGULAR RHYTHM',
            content: 'R-R intervals vary by ≤0.12 seconds (3 small boxes)\nConsistent pattern throughout strip\nPredictable timing'
          },
          {
            title: '⚠️ REGULARLY IRREGULAR',
            content: 'Pattern to the irregularity\nExample: Wenckebach, Bigeminy\nPredictable pattern repeats'
          },
          {
            title: '🔀 IRREGULARLY IRREGULAR',
            content: 'No discernible pattern\nCompletely chaotic timing\nExample: Atrial fibrillation'
          },
          {
            title: '📊 BORDERLINE CASES',
            content: 'Sinus arrhythmia: Regular but varies with breathing\nStill NSR if all other criteria met'
          }
        ],
        hint: '⚖️ Pattern recognition is key!'
      },

      {
        id: 'sinus-arrhythmia',
        title: 'Sinus Arrhythmia: Special Case',
        type: 'tabs',
        backgroundColor: '#ecfdf5',
        textColor: '#047857',
        animation: 'fade',
        tabs: [
          {
            title: '🫁 Respiratory Sinus Arrhythmia',
            content: 'Normal variation with breathing\nRate increases with inspiration\nRate decreases with expiration\nCommon in young, healthy patients'
          },
          {
            title: '📊 ECG Characteristics',
            content: 'Gradual R-R interval changes\nAll other NSR criteria met\nP-P intervals also vary\nNo abrupt rate changes'
          },
          {
            title: '✅ Still NSR?',
            content: 'YES! Still classified as NSR\nNormal physiological variant\nIndicates healthy autonomic tone\nNo treatment required'
          },
          {
            title: '🏥 Clinical Significance',
            content: 'Lost in heart disease\nUsually disappears with age\nSign of good cardiac health\nNo intervention needed'
          }
        ],
        hint: '🫁 Breathing-related variation is normal!'
      },

      {
        id: 'paper-method-backup',
        title: 'Paper Method: No Calipers Backup',
        type: 'steps',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: '📄 Use Paper Edge',
            description: 'Mark first R-R interval on paper edge'
          },
          {
            number: 2,
            title: '📏 Transfer Measurement',
            description: 'Move paper to next R-R interval for comparison'
          },
          {
            number: 3,
            title: '🔄 Repeat Process',
            description: 'Check multiple consecutive intervals'
          },
          {
            number: 4,
            title: '✅ Confirm Regularity',
            description: 'All intervals should match your paper mark'
          }
        ],
        hint: '📄 Paper edge works when calipers unavailable!'
      },

      {
        id: 'irregularity-causes',
        title: 'Why Rhythms Become Irregular',
        type: 'accordion',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        accordionItems: [
          {
            title: '🫀 Ectopic Beats',
            content: 'PACs, PVCs disrupt regular rhythm\nEarly beats reset timing\nCompensatory pauses follow'
          },
          {
            title: '🧠 Autonomic Influences',
            content: 'Vagal stimulation causes irregularity\nSudden autonomic changes\nMedication effects'
          },
          {
            title: '⚡ Conduction Disorders',
            content: 'AV blocks create patterns\nSA node dysfunction\nAtrial arrhythmias'
          },
          {
            title: '💊 Pathological Causes',
            content: 'Ischemia affects timing\nElectrolyte imbalances\nStructural heart disease'
          }
        ],
        hint: '🤔 Multiple factors affect regularity!'
      },

      {
        id: 'regularity-mastery-audio',
        title: '🎧 Rhythm Regularity Audio Guide',
        content: 'Master the assessment of rhythm regularity with this comprehensive audio guide covering measurement techniques, caliper use, classification systems, and clinical significance.',
        type: 'audio',
        backgroundColor: '#fdf2f8',
        textColor: '#be185d',
        animation: 'fade',
        audioUrl: '/lessonaudio/rhythm-rate/rhythm-regularity-mastery.mp3',
        hint: '🎧 Perfect your regularity assessment skills!'
      },

      // ==================== UNIT 4 QUIZ: RHYTHM REGULARITY ====================
      {
        id: 'unit4-regularity-quiz',
        title: '🎯 Unit 4 Quiz: Rhythm Regularity',
        content: "Test your rhythm regularity assessment skills!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: '/ecg/medical_accurate/normal_sinus_95bpm_4.png',
        imageAlt: 'Rhythm regularity quiz - assess this NSR example',
        hint: '🧠 Test your Unit 4 regularity knowledge!',
        question: "What is the maximum acceptable variation in R-R intervals for a rhythm to be considered 'regular'?",
        options: [
          "0.04 seconds (1 small box)",
          "0.08 seconds (2 small boxes)",
          "0.12 seconds (3 small boxes)",
          "0.16 seconds (4 small boxes)"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! R-R intervals can vary by up to 0.12 seconds (3 small boxes) and still be considered regular rhythm. This allows for minor physiological variations while maintaining the definition of regularity."
      },

      // ===============================================
      // 📈 UNIT 5: P WAVE ASSESSMENT (8 slides)
      // ===============================================
      {
        id: 'unit5-intro',
        title: '📈 Unit 5: P Wave Assessment',
        type: 'highlight',
        backgroundColor: '#f0fff4',
        textColor: '#047857',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/normal_sinus_100bpm_5.png',
        imageAlt: 'P wave assessment mastery - clear P waves in perfect NSR at 100 BPM',
        highlights: [
          '👁️ P wave visibility in different leads',
          '📈 Normal P wave morphology',
          '🎯 Best leads for P wave analysis',
          '⚠️ Abnormal P wave patterns'
        ],
        hint: '📈 Perfect P waves define NSR!'
      },

      {
        id: 'p-wave-morphology',
        title: 'Normal P Wave Morphology',
        type: 'flashcard',
        backgroundColor: '#f0fff4',
        textColor: '#047857',
        animation: 'fade',
        flashcardFront: '📈 What makes a perfect P wave?',
        flashcardBack: 'NORMAL P WAVE CHECKLIST! ✅\n\nSHAPE: Smooth, rounded, dome-like\nDURATION: <0.12 seconds (3 small boxes)\nAMPLITUDE: <2.5mm in limb leads\nDIRECTION: Upright in I, II, aVF; Inverted in aVR\n\nCONSISTENCY: Same shape throughout rhythm',
        hint: '📈 Smooth, consistent, appropriately directed!'
      },

      {
        id: 'best-leads-p-waves',
        title: 'Best Leads for P Wave Analysis',
        type: 'tabs',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: '🏆 Lead II (Gold Standard)',
            content: 'Best overall lead for P wave visibility\nParallel to atrial depolarization\nMost prominent upright P waves\nFirst choice for rhythm analysis'
          },
          {
            title: '🔍 Lead V1 (Detailed View)',
            content: 'Excellent for atrial activity\nBiphasic P waves (normal)\nGreat for detecting atrial enlargement\nUseful when Lead II unclear'
          },
          {
            title: '📊 Lead aVF (Confirmation)',
            content: 'Should show upright P waves in NSR\nGood backup to Lead II\nHelps confirm sinus origin\nUseful for axis determination'
          },
          {
            title: '❌ Avoid These Leads',
            content: 'Lead aVR: P waves inverted (normal)\nLeads with poor P wave visibility\nLeads with excessive artifact\nLeads with flat P waves'
          }
        ],
        hint: '🏆 Lead II is your P wave champion!'
      },

      {
        id: 'p-wave-abnormalities',
        title: 'P Wave Abnormalities to Recognize',
        type: 'accordion',
        backgroundColor: '#fdf4ff',
        textColor: '#86198f',
        animation: 'fade',
        accordionItems: [
          {
            title: '❌ Absent P Waves',
            content: 'No visible P waves before QRS\nSuggests junctional rhythm\nAtrial fibrillation possibility\nRule out hidden P waves in QRS'
          },
          {
            title: '🔄 Variable P Wave Morphology',
            content: 'Changing P wave shapes\nSuggests wandering atrial pacemaker\nMultiple ectopic atrial sites\nNot true NSR'
          },
          {
            title: '↕️ Inverted P Waves (wrong leads)',
            content: 'Inverted in leads I, II, aVF\nSuggests ectopic atrial rhythm\nLow atrial or junctional origin\nNot sinus rhythm'
          },
          {
            title: '📏 Abnormal P Wave Size/Duration',
            content: 'Too wide (>0.12s): Atrial enlargement\nToo tall (>2.5mm): Right atrial enlargement\nNotched: Left atrial enlargement\nMay still be NSR with atrial abnormality'
          }
        ],
        hint: '⚠️ Recognize what\'s NOT normal!'
      },

      {
        id: 'av-relationship',
        title: 'P Wave to QRS Relationship',
        type: 'steps',
        backgroundColor: '#ecfdf5',
        textColor: '#047857',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: '🔗 1:1 Relationship',
            description: 'Every P wave must be followed by a QRS complex'
          },
          {
            number: 2,
            title: '⏰ Consistent PR Intervals',
            description: 'Same PR interval for each P-QRS pair (0.12-0.20s)'
          },
          {
            number: 3,
            title: '📍 P Wave Placement',
            description: 'P wave always comes BEFORE the QRS, never after'
          },
          {
            number: 4,
            title: '✅ NSR Confirmation',
            description: 'Perfect 1:1 relationship confirms sinus origin'
          }
        ],
        hint: '🔗 1:1 P:QRS relationship is essential!'
      },

      {
        id: 'hidden-p-waves',
        title: 'Finding Hidden P Waves',
        type: 'flashcard',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        flashcardFront: '🔍 Where do P waves hide?',
        flashcardBack: 'DETECTIVE WORK! 🕵️\n\nIN THE T WAVE: Look for T wave deformity\nIN THE QRS: Wide QRS may hide P wave\nDIFFERENT LEADS: Check multiple leads\nCALIPER MARCH: March out P-P intervals\n\nTRICK: Use lead V1 for clarity!',
        hint: '🔍 Be a P wave detective!'
      },

      // 🎥 ECGkid P Wave Analysis Excellence
      {
        id: 'ecgkid-p-wave-mastery',
        title: '🎥 Master Class: P Wave Analysis Excellence',
        content: 'Master P wave analysis with this comprehensive ECGkid tutorial! Learn morphology assessment, lead selection, relationship analysis, and how to spot abnormalities that disqualify NSR.',
        type: 'youtube',
        layout: 'centered',
        backgroundColor: '#7c3aed',
        textColor: '#ffffff',
        animation: 'fade',
        youtubeId: 'VXNnq6aXLK4',
        videoDuration: 312, // 5 minutes, 12 seconds
        minimumWatchTime: 240, // 4 minutes minimum - comprehensive P wave analysis
        requireFullWatch: false,
        imageUrl: '/ecg/medical_accurate/normal_sinus_85bpm_3.png',
        imageAlt: 'ECGkid P wave analysis mastery techniques',
        hint: '🎯 Master professional P wave analysis!',
        highlights: [
          'Complete P wave morphology assessment',
          'Lead selection for optimal visualization',
          'AV relationship analysis',
          'Common P wave abnormalities'
        ]
      },

      {
        id: 'p-wave-practice',
        title: 'P Wave Assessment Practice',
        type: 'steps',
        backgroundColor: '#fdf2f8',
        textColor: '#be185d',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/normal_sinus_85bpm_3.png',
        imageAlt: 'Practice P wave assessment on this perfect NSR example',
        steps: [
          {
            number: 1,
            title: '🎯 Identify Best Lead',
            description: 'Which lead shows the clearest P waves in this example?'
          },
          {
            number: 2,
            title: '📈 Assess Morphology',
            description: 'Are P waves smooth, rounded, and consistent?'
          },
          {
            number: 3,
            title: '🔗 Check AV Relationship',
            description: 'Is there a P wave before every QRS? Same PR interval?'
          },
          {
            number: 4,
            title: '✅ Confirm NSR Criteria',
            description: 'Do P waves meet all NSR requirements?'
          }
        ],
        hint: '👁️ Practice makes perfect P wave assessment!'
      },

      // ==================== UNIT 5 QUIZ: P WAVE ASSESSMENT ====================
      {
        id: 'unit5-p-wave-quiz',
        title: '🎯 Unit 5 Quiz: P Wave Assessment',
        content: "Test your P wave analysis expertise!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: '/ecg/medical_accurate/normal_sinus_100bpm_5.png',
        imageAlt: 'P wave assessment quiz - analyze these perfect P waves',
        hint: '🧠 Test your Unit 5 P wave knowledge!',
        question: "Which lead typically provides the best visualization of P waves for rhythm analysis?",
        options: [
          "Lead I",
          "Lead II",
          "Lead aVR",
          "Lead V6"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Lead II typically provides the best P wave visualization because it's parallel to the direction of atrial depolarization, resulting in the most prominent upright P waves for rhythm analysis."
      },

      // ===============================================
      // 🏥 UNIT 6: CLINICAL APPLICATIONS (8 slides)
      // ===============================================
      {
        id: 'unit6-intro',
        title: '🏥 Unit 6: Clinical Applications',
        type: 'highlight',
        backgroundColor: '#fef7ff',
        textColor: '#a21caf',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/normal_sinus_75bpm_2.png',
        imageAlt: 'Clinical applications mastery - NSR in real patient care scenarios',
        highlights: [
          '🏥 When NSR is normal vs concerning',
          '⚕️ Clinical decision-making with NSR',
          '💊 Medication effects on NSR',
          '📋 Documentation and reporting'
        ],
        hint: '🏥 Apply NSR knowledge in real practice!'
      },

      {
        id: 'when-nsr-concerning',
        title: 'When NSR Becomes Concerning',
        type: 'accordion',
        backgroundColor: '#fef7ff',
        textColor: '#a21caf',
        animation: 'fade',
        accordionItems: [
          {
            title: '💔 Clinical Context Matters',
            content: 'NSR @ 100 BPM during chest pain = concerning\nSame rate during exercise = normal\nAlways consider patient symptoms'
          },
          {
            title: '🔍 Rate Extremes',
            content: 'NSR @ 60 BPM in symptomatic elderly\nNSR @ 100 BPM at rest repeatedly\nRate change from baseline significant'
          },
          {
            title: '⚠️ New Onset Findings',
            content: 'Previously irregular now regular\nPreviously regular now at rate extremes\nAny change in established pattern'
          },
          {
            title: '🏥 High-Risk Patients',
            content: 'Post-MI patients: any rhythm change\nHeart failure: rate control critical\nPacemaker patients: rhythm dependency'
          }
        ],
        hint: '🤔 Context changes everything!'
      },

      {
        id: 'clinical-decision-making',
        title: 'Clinical Decision Making with NSR',
        type: 'tabs',
        backgroundColor: '#f0fff4',
        textColor: '#047857',
        animation: 'fade',
        tabs: [
          {
            title: '✅ Reassuring NSR',
            content: 'NSR 60-90 BPM in asymptomatic patient\nRegular rate with normal PR/QRS\nNo symptoms, stable patient\nRoutine monitoring sufficient'
          },
          {
            title: '🔍 Monitor Closely',
            content: 'NSR with rate 50-60 or 90-100\nSymptoms without clear cause\nMedication effects possible\nIncrease monitoring frequency'
          },
          {
            title: '⚠️ Investigate Further',
            content: 'Symptomatic bradycardia <60\nTachycardia >100 at rest\nNew rhythm in high-risk patient\nConsider 24-hour monitoring'
          },
          {
            title: '🚨 Immediate Action',
            content: 'Symptomatic extreme rates\nNew onset with chest pain\nHemodynamic compromise\nPrepare for intervention'
          }
        ],
        hint: '🏥 Match response to clinical picture!'
      },

      {
        id: 'medication-effects',
        title: 'Medications Affecting NSR',
        type: 'accordion',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        accordionItems: [
          {
            title: '🐌 Rate-Slowing Medications',
            content: 'Beta-blockers: atenolol, metoprolol\nCalcium channel blockers: diltiazem, verapamil\nDigoxin: enhances vagal tone\nExpected effect: rate 50-70 BPM'
          },
          {
            title: '⚡ Rate-Increasing Medications',
            content: 'Atropine: blocks vagal effects\nEpinephrine: beta-1 stimulation\nAlbuterol: beta-2 with some beta-1\nExpected effect: rate 80-120 BPM'
          },
          {
            title: '⚖️ Rate-Neutral Medications',
            content: 'Most antibiotics: minimal effect\nACE inhibitors: no direct rate effect\nStatins: no rhythm effects\nNSR should remain stable'
          },
          {
            title: '🚨 Toxic Effects',
            content: 'Digoxin toxicity: multiple rhythms\nBeta-blocker overdose: severe bradycardia\nCalcium blocker toxicity: AV blocks\nRequires immediate recognition'
          }
        ],
        hint: '💊 Know your drug effects!'
      },

      {
        id: 'documentation-standards',
        title: 'Professional Documentation',
        type: 'steps',
        backgroundColor: '#f0fff4',
        textColor: '#047857',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: '📋 Complete Assessment',
            description: 'Rate, rhythm, P waves, PR interval, QRS duration, clinical correlation'
          },
          {
            number: 2,
            title: '🎯 Precise Description',
            description: '"Normal sinus rhythm at 75 BPM" - include exact rate and all criteria'
          },
          {
            number: 3,
            title: '📊 Clinical Context',
            description: 'Patient symptoms, medications, changes from baseline, intervention needs'
          },
          {
            number: 4,
            title: '⏰ Trending Information',
            description: 'Compare to previous ECGs, note stability or changes over time'
          }
        ],
        hint: '📝 Professional documentation saves lives!'
      },

      {
        id: 'nsr-variations',
        title: 'NSR Variations in Practice',
        type: 'flashcard',
        backgroundColor: '#fdf4ff',
        textColor: '#86198f',
        animation: 'fade',
        flashcardFront: '🔄 What NSR variations are still considered normal?',
        flashcardBack: 'ACCEPTABLE VARIATIONS! ✅\n\nSINUS ARRHYTHMIA: Rate varies with breathing\nSINUS BRADYCARDIA: NSR <60 BPM (if asymptomatic)\nSINUS TACHYCARDIA: NSR >100 BPM (if appropriate)\n\nSTILL NSR IF: All other criteria met, appropriate for clinical context',
        hint: '🔄 NSR has acceptable variations!'
      },

      {
        id: 'patient-education',
        title: 'Patient Education About NSR',
        type: 'tabs',
        backgroundColor: '#ecfdf5',
        textColor: '#047857',
        animation: 'fade',
        tabs: [
          {
            title: '😊 Good News Messages',
            content: '"Your heart rhythm is normal"\n"Perfect electrical system"\n"No rhythm problems detected"\n"Heart beating regularly and normally"'
          },
          {
            title: '📚 Educational Points',
            content: 'Normal range is 60-100 BPM\nRate varies with activity normal\nBreathing variations are normal\nRegular monitoring as needed'
          },
          {
            title: '⚠️ When to Seek Care',
            content: 'Chest pain with any rhythm\nDizziness or fainting\nPalpitations or irregularity\nShortness of breath'
          },
          {
            title: '🏃 Lifestyle Factors',
            content: 'Exercise improves heart health\nStress affects heart rate\nCaffeine may increase rate\nMedications can affect rhythm'
          }
        ],
        hint: '👥 Educate patients about their normal rhythm!'
      },

      // 🎥 ECGkid Clinical Integration Excellence
      {
        id: 'ecgkid-clinical-integration',
        title: '🎥 Master Class: NSR Clinical Integration',
        content: 'Master the clinical application of NSR knowledge! This ECGkid video demonstrates how to integrate NSR assessment into patient care, make clinical decisions, and provide appropriate interventions.',
        type: 'youtube',
        layout: 'centered',
        backgroundColor: '#0f172a',
        textColor: '#ffffff',
        animation: 'fade',
        youtubeId: 'CLj3EXw0Dx4',
        videoDuration: 387, // 6 minutes, 27 seconds
        minimumWatchTime: 300, // 5 minutes minimum - comprehensive clinical integration
        requireFullWatch: false,
        imageUrl: '/ecg/medical_accurate/normal_sinus_60bpm_1.png',
        imageAlt: 'ECGkid clinical integration and patient care',
        hint: '🎯 Master clinical application of NSR knowledge!',
        highlights: [
          'Clinical decision-making with NSR',
          'Patient care integration',
          'When NSR requires intervention',
          'Professional communication skills'
        ]
      },

      // ==================== UNIT 6 QUIZ: CLINICAL APPLICATIONS ====================
      {
        id: 'unit6-clinical-quiz',
        title: '🎯 Unit 6 Quiz: Clinical Applications',
        content: "Test your clinical application of NSR knowledge!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: '/ecg/medical_accurate/normal_sinus_75bpm_2.png',
        imageAlt: 'Clinical applications quiz - apply NSR knowledge to patient care',
        hint: '🧠 Test your Unit 6 clinical knowledge!',
        question: "A patient on metoprolol (beta-blocker) presents with NSR at 58 BPM and no symptoms. What is the most appropriate action?",
        options: [
          "Immediately discontinue metoprolol",
          "Increase metoprolol dose",
          "Document findings and continue monitoring",
          "Start atropine for symptomatic bradycardia"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! NSR at 58 BPM in an asymptomatic patient on beta-blocker therapy is expected and appropriate. Document the findings and continue routine monitoring unless symptoms develop."
      }
    ]
  },

  // ============= LEARNING TASKS =============
  tasks: [
    {
      id: 'lesson-11-final-assessment',
      type: 'final-assessment',
      xp: 250,
      content: {
        passingScore: 80,
        timeLimit: 15, // 15 minutes
        questions: [
          {
            id: "nsr-five-criteria",
            type: "multiple-choice", 
            question: "Which of the following represents the complete five criteria for Normal Sinus Rhythm?",
            options: [
              "Rate 60-100, Regular rhythm, P waves present, PR 0.12-0.20s, QRS <0.12s",
              "Rate 50-90, Regular rhythm, P waves upright, PR 0.10-0.18s, QRS <0.10s", 
              "Rate 70-110, Slightly irregular, P waves variable, PR 0.14-0.22s, QRS <0.14s",
              "Rate 60-80, Regular rhythm, P waves optional, PR any duration, QRS <0.12s"
            ],
            correctAnswer: 0,
            explanation: "Correct! NSR requires: Rate 60-100 BPM, Regular rhythm, P waves present before each QRS, PR interval 0.12-0.20 seconds, and QRS <0.12 seconds with 1:1 AV relationship.",
            imageUrl: "/ecg/medical_accurate/normal_sinus_75bpm_2.png"
          },
          {
            id: "rate-calculation-precision",
            type: "multiple-choice",
            question: "Using the Small Box Method, if there are 30 small boxes between R waves, what is the precise heart rate?",
            options: [
              "45 BPM",
              "50 BPM", 
              "55 BPM",
              "60 BPM"
            ],
            correctAnswer: 1,
            explanation: "Correct! Small Box Method: 1500 ÷ 30 small boxes = 50 BPM. This method provides maximum precision for rate calculation.",
            imageUrl: "/ecg/medical_accurate/normal_sinus_60bpm_1.png"
          },
          {
            id: "p-wave-morphology-leads",
            type: "multiple-choice",
            question: "In which lead should P waves be inverted for Normal Sinus Rhythm?",
            options: [
              "Lead I",
              "Lead II",
              "Lead aVF", 
              "Lead aVR"
            ],
            correctAnswer: 3,
            explanation: "Correct! P waves should always be inverted in lead aVR for Normal Sinus Rhythm, while being upright in leads I, II, and aVF.",
            imageUrl: "/ecg/medical_accurate/normal_sinus_85bpm_3.png"
          }
        ]
      }
    }
  ],

  // ============= LESSON COMPLETION METADATA =============
  completed: false,
  attempts: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
