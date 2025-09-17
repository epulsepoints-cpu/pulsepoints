import { Lesson } from '../types/learning';

export const optimizedLesson33: Lesson = {
  id: 'lesson-4-5-optimized',
  moduleId: 'module-4',
  title: "AV Dissociation Mastery",
  description: "Master AV dissociation through 6 focused learning units with enhanced interactive elements: Foundation concepts, mechanisms with audio, ECG recognition, capture phenomena with audio, clinical applications, and mastery with celebration audio",
  order: 5,
  estimatedTime: 45,
  content: {
    type: 'mixed',
    introduction: "🎯 Welcome to AV Dissociation Mastery! Master when atria and ventricles march to different drummers through 6 progressive units with enhanced interactive elements, strategic audio, and comprehensive assessments.",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your AV Dissociation Learning Journey",
        content: "UNIT 1: Foundation Concepts → UNIT 2: Mechanisms + Audio → UNIT 3: ECG Recognition → UNIT 4: Capture Phenomena + Audio → UNIT 5: Clinical Applications → UNIT 6: Mastery + Celebration Audio",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // ===============================================
      // 🎯 UNIT 1: FOUNDATION CONCEPTS (7 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: Foundation Concepts',
        content: 'Master the fundamental concept of AV dissociation! Understand when atria and ventricles beat independently like two separate drummers.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson33/dissociation-overview.jpg',
        hint: '🥁 Two drummers, different rhythms!'
      },
      
      {
        id: 'independence-flashcard',
        title: '🧠 Independence Definition',
        content: 'Master the definition of AV dissociation',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '💫',
          question: 'What is AV dissociation?',
          answer: 'Independent beating of atria and ventricles controlled by separate pacemakers. Key: It is a SIGN, not a specific rhythm diagnosis!',
          imageUrl: '/lessonimages/module4/lesson33/independence-definition.jpg'
        },
        hint: '🧠 Flip to learn the definition!'
      },

      {
        id: 'normal-vs-dissociated',
        title: 'Normal vs Dissociated Conduction',
        content: 'NORMAL: 1:1 P wave to QRS relationship. DISSOCIATED: Independent P waves and QRS complexes. TIMING: Unrelated atrial and ventricular rates. CONTROL: Separate pacemaker systems.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson33/normal-vs-dissociated.jpg',
        hint: '🔄 Connected vs independent!'
      },

      {
        id: 'physiologic-impact-steps',
        title: 'Physiologic Impact Steps',
        content: 'Understanding the hemodynamic consequences',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Lost AV Synchrony',
            description: 'Atria and ventricles no longer coordinated'
          },
          {
            number: 2,
            title: 'Reduced Atrial Kick',
            description: 'Atrial contribution to ventricular filling lost'
          },
          {
            number: 3,
            title: 'Variable Filling',
            description: 'Unpredictable ventricular filling patterns'
          }
        ],
        hint: '👣 Follow the hemodynamic impact!'
      },

      {
        id: 'dissociation-types-tabs',
        title: 'Dissociation Types Explorer',
        content: 'Explore different types of AV dissociation',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        tabs: [
          {
            title: 'Complete',
            content: 'Total independence between atria and ventricles. No conduction occurs. P waves and QRS complexes completely unrelated.',
            icon: '🔴'
          },
          {
            title: 'Incomplete',
            content: 'Partial independence with occasional conduction. Some P waves may conduct. Intermittent capture beats possible.',
            icon: '🟡'
          },
          {
            title: 'Temporary',
            content: 'Transient dissociation that resolves. Often drug-related or metabolic. May be reversible with treatment.',
            icon: '⏰'
          }
        ],
        hint: '📑 Explore each type!'
      },

      {
        id: 'recognition-clues',
        title: 'Recognition Clues',
        content: 'MARCHING P WAVES: Independent from QRS complexes. VARIABLE PR: Constantly changing PR intervals. DIFFERENT RATES: Atrial rate ≠ ventricular rate. HIDDEN P WAVES: May be buried in QRS or T waves.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson33/recognition-clues.jpg',
        hint: '🔍 Look for these key signs!'
      },

      {
        id: 'unit1-quiz',
        title: 'Unit 1 Quiz: Foundation Check',
        content: 'Test your understanding of AV dissociation foundations!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'AV dissociation is best described as:',
        options: [
          'A specific cardiac rhythm diagnosis',
          'Independent atrial and ventricular beating',
          'A type of heart block only',
          'Always a medical emergency'
        ],
        correctAnswer: 1,
        explanation: 'Correct! AV dissociation describes independent atrial and ventricular beating - it is a sign, not a specific rhythm diagnosis.',
        imageUrl: '/lessonimages/module4/lesson33/unit1-quiz.jpg',
        hint: '🎯 Think about the fundamental concept!'
      },

      // ===============================================
      // 🎯 UNIT 2: MECHANISMS + AUDIO (8 slides)
      // ===============================================
      {
        id: 'unit2-intro',
        title: '🎯 Unit 2: Mechanisms + Audio',
        content: 'Discover the mechanisms behind AV dissociation! Learn how and why atria and ventricles become independent.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson33/mechanisms-overview.jpg',
        hint: '⚙️ Understand the machinery!'
      },

      {
        id: 'mechanisms-audio',
        title: '🎧 Mechanisms Explained',
        content: 'Listen to detailed explanation of AV dissociation mechanisms',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module4/lesson33/mechanisms-detailed.mp3',
        hint: '🎧 Listen and learn the mechanisms!'
      },

      {
        id: 'interference-mechanism',
        title: 'Interference Mechanism',
        content: 'CAUSE: Junctional pacemaker faster than sinus. RESULT: Junction takes control. EXAMPLE: Junctional tachycardia at 120 bpm vs sinus at 80 bpm. OUTCOME: Sinus impulses cannot capture.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson33/interference-mechanism.jpg',
        hint: '🏃 Fastest pacemaker wins!'
      },

      {
        id: 'default-mechanism-flashcard',
        title: '🧠 Default Mechanism',
        content: 'Understanding default AV dissociation',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🐌',
          question: 'What causes default AV dissociation?',
          answer: 'Sinus node slows below normal escape rate. Example: Sinus bradycardia at 45 bpm allows junctional escape at 50 bpm. Result: Junction takes over by default!',
          imageUrl: '/lessonimages/module4/lesson33/default-mechanism.jpg'
        },
        hint: '🧠 Flip to understand default mechanism!'
      },

      {
        id: 'block-mechanism-accordion',
        title: 'Block Mechanisms Explorer',
        content: 'Explore different block mechanisms causing dissociation',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        accordionItems: [
          {
            title: '1st Degree Block',
            content: 'PR interval >200ms but all impulses conduct. Usually maintains 1:1 relationship. Rarely causes dissociation alone.',
            icon: '1️⃣'
          },
          {
            title: '2nd Degree Block',
            content: 'Some impulses blocked. Type I (Wenckebach) or Type II patterns. Can create intermittent dissociation periods.',
            icon: '2️⃣'
          },
          {
            title: '3rd Degree Block',
            content: 'Complete AV block. No impulses conduct from atria to ventricles. Always causes complete AV dissociation.',
            icon: '3️⃣'
          }
        ],
        hint: '🎯 Click to expand each mechanism!'
      },

      {
        id: 'combination-mechanisms',
        title: 'Combination Mechanisms',
        content: 'MULTIPLE CAUSES: Often more than one mechanism present. EXAMPLES: Block + slow sinus, interference + block. COMPLEXITY: Makes diagnosis challenging. TREATMENT: Must address all mechanisms.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson33/combination-mechanisms.jpg',
        hint: '🎭 Multiple actors on stage!'
      },

      {
        id: 'isorhythmic-concept',
        title: 'Isorhythmic Dissociation',
        content: 'DEFINITION: Atrial and ventricular rates nearly identical. APPEARANCE: May seem like normal conduction. KEY CLUE: P-QRS relationship varies slightly. CHALLENGE: Hardest type to recognize.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson33/isorhythmic-dissociation.jpg',
        hint: '⚖️ Same rate, different drummers!'
      },

      {
        id: 'unit2-quiz',
        title: 'Unit 2 Quiz: Mechanisms Check',
        content: 'Test your understanding of dissociation mechanisms!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'Interference dissociation occurs when:',
        options: [
          'Sinus rate is too slow',
          'AV block prevents conduction',
          'Junctional rate exceeds sinus rate',
          'Atria stop contracting'
        ],
        correctAnswer: 2,
        explanation: 'Correct! Interference dissociation occurs when the junctional pacemaker fires faster than the sinus node, taking control of the ventricles.',
        imageUrl: '/lessonimages/module4/lesson33/unit2-quiz.jpg',
        hint: '🎯 Think about competing pacemakers!'
      },

      // ===============================================
      // 🎯 UNIT 3: ECG RECOGNITION (7 slides)  
      // ===============================================
      {
        id: 'unit3-intro',
        title: '🎯 Unit 3: ECG Recognition',
        content: 'Master ECG recognition of AV dissociation! Learn to spot the telltale signs on rhythm strips.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson33/ecg-recognition-overview.jpg',
        hint: '📈 Read the rhythm like a detective!'
      },

      {
        id: 'marching-p-waves-steps',
        title: 'Marching P Waves Recognition',
        content: 'Step-by-step approach to identifying marching P waves',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Find P Waves',
            description: 'Locate all P waves, including hidden ones'
          },
          {
            number: 2,
            title: 'Track P-P Intervals',
            description: 'Measure consistency of P wave timing'
          },
          {
            number: 3,
            title: 'Compare to QRS',
            description: 'Assess P wave relationship to QRS complexes'
          },
          {
            number: 4,
            title: 'Look for Patterns',
            description: 'P waves should march independently of QRS'
          }
        ],
        hint: '👣 Follow the systematic approach!'
      },

      {
        id: 'variable-pr-flashcard',
        title: '🧠 Variable PR Intervals',
        content: 'Understanding PR interval variations',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '📊',
          question: 'Why do PR intervals vary in AV dissociation?',
          answer: 'P waves and QRS complexes are independent! The apparent PR interval is just coincidental timing. True PR interval does not exist - no actual conduction relationship.',
          imageUrl: '/lessonimages/module4/lesson33/variable-pr-intervals.jpg'
        },
        hint: '🧠 Flip to understand PR variation!'
      },

      {
        id: 'hidden-p-waves-accordion',
        title: 'Hidden P Waves Detective Work',
        content: 'Master finding P waves hidden in QRS and T waves',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        accordionItems: [
          {
            title: 'P Waves in QRS',
            content: 'Look for QRS notching or widening. Compare QRS morphology beat-to-beat. Subtle changes may indicate hidden P waves.',
            icon: '🏔️'
          },
          {
            title: 'P Waves in T Waves',
            content: 'Watch for T wave distortion. Variable T wave heights or shapes. Extra peaks or notches in T waves.',
            icon: '🌊'
          },
          {
            title: 'P Waves on Baseline',
            content: 'Scan between beats carefully. Look for subtle baseline undulations. May be very small amplitude.',
            icon: '📊'
          }
        ],
        hint: '🎯 Click to expand detective techniques!'
      },

      {
        id: 'rate-comparison-tabs',
        title: 'Rate Comparison Analysis',
        content: 'Compare atrial and ventricular rates systematically',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        tabs: [
          {
            title: 'Atrial Rate',
            content: 'Count P waves per 6-second strip × 10. Use P-P intervals for accuracy. Normal: 60-100 bpm typically.',
            icon: '🔺'
          },
          {
            title: 'Ventricular Rate',
            content: 'Count QRS complexes per 6-second strip × 10. Use R-R intervals for accuracy. Escape rate depends on origin.',
            icon: '🔻'
          },
          {
            title: 'Rate Relationship',
            content: 'In dissociation: Rates are independent. May be similar (isorhythmic) or different. No mathematical relationship.',
            icon: '⚖️'
          }
        ],
        hint: '📑 Explore rate calculation methods!'
      },

      {
        id: 'morphology-clues',
        title: 'QRS Morphology Clues',
        content: 'ESCAPE ORIGIN: QRS width indicates pacemaker location. JUNCTIONAL: Narrow QRS (80-120 ms). VENTRICULAR: Wide QRS (>120 ms). BUNDLE BRANCH: May cause widening.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson33/morphology-clues.jpg',
        hint: '🔬 QRS shape tells the story!'
      },

      {
        id: 'unit3-quiz',
        title: 'Unit 3 Quiz: Recognition Check',
        content: 'Test your ECG recognition skills!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'The key ECG finding in AV dissociation is:',
        options: [
          'Fixed PR intervals',
          'Regular rhythm throughout',
          'P waves marching independently of QRS',
          'Wide QRS complexes only'
        ],
        correctAnswer: 2,
        explanation: 'Correct! P waves marching independently of QRS complexes is the hallmark ECG finding of AV dissociation.',
        imageUrl: '/lessonimages/module4/lesson33/unit3-quiz.jpg',
        hint: '🎯 Think about the fundamental ECG sign!'
      },

      // ===============================================
      // 🎯 UNIT 4: CAPTURE PHENOMENA + AUDIO (7 slides)
      // ===============================================
      {
        id: 'unit4-intro',
        title: '🎯 Unit 4: Capture Phenomena + Audio',
        content: 'Master capture beats and fusion beats! Learn these crucial diagnostic signs that prove AV dissociation.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson33/capture-overview.jpg',
        hint: '🎣 Catch the capture beats!'
      },

      {
        id: 'capture-phenomena-audio',
        title: '🎧 Capture Beat Phenomena',
        content: 'Listen to detailed explanation of capture and fusion beats',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module4/lesson33/capture-phenomena-detailed.mp3',
        hint: '🎧 Audio guide to capture beats!'
      },

      {
        id: 'capture-beat-definition-flashcard',
        title: '🧠 Capture Beat Definition',
        content: 'Master the concept of capture beats',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🎣',
          question: 'What is a capture beat?',
          answer: 'A sinus P wave that finds the ventricles NOT refractory and conducts normally. Key: Temporarily interrupts the dissociation! Proves some conduction ability remains.',
          imageUrl: '/lessonimages/module4/lesson33/capture-beat-definition.jpg'
        },
        hint: '🧠 Flip to learn capture beats!'
      },

      {
        id: 'fusion-beat-steps',
        title: 'Fusion Beat Recognition',
        content: 'Step-by-step fusion beat identification',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Timing Collision',
            description: 'Sinus and escape impulses arrive simultaneously'
          },
          {
            number: 2,
            title: 'Hybrid Morphology',
            description: 'QRS shape between sinus and escape beats'
          },
          {
            number: 3,
            title: 'Diagnostic Value',
            description: 'Proves AV dissociation with intact conduction'
          }
        ],
        hint: '👣 Follow the fusion process!'
      },

      {
        id: 'capture-types-tabs',
        title: 'Types of Capture Events',
        content: 'Explore different types of capture phenomena',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: 'Normal Capture',
            content: 'Complete sinus capture with normal PR interval. QRS identical to normal sinus beats. Most common type.',
            icon: '✅'
          },
          {
            title: 'Partial Capture',
            content: 'Incomplete ventricular activation. May show bundle branch block pattern. Less complete conduction.',
            icon: '🟡'
          },
          {
            title: 'Fusion Capture',
            content: 'Hybrid QRS from dual activation. Morphology between sinus and escape beats. Diagnostic gold standard.',
            icon: '🎭'
          }
        ],
        hint: '📑 Explore capture varieties!'
      },

      {
        id: 'diagnostic-significance',
        title: 'Diagnostic Significance',
        content: 'PROVES DISSOCIATION: Capture beats confirm independent rhythms. RULES OUT BLOCKS: Shows some AV conduction remains. PROGNOSTIC: Indicates reversible dissociation. THERAPEUTIC: Guides treatment decisions.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson33/diagnostic-significance.jpg',
        hint: '💡 Critical diagnostic information!'
      },

      {
        id: 'unit4-quiz',
        title: 'Unit 4 Quiz: Capture Check',
        content: 'Test your understanding of capture phenomena!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'Capture beats in AV dissociation indicate:',
        options: [
          'Complete heart block is present',
          'No conduction ability remains',
          'Some AV conduction is still possible',
          'The rhythm is dangerous'
        ],
        correctAnswer: 2,
        explanation: 'Correct! Capture beats prove that some AV conduction ability remains, making the dissociation potentially reversible.',
        imageUrl: '/lessonimages/module4/lesson33/unit4-quiz.jpg',
        hint: '🎯 Think about what capture proves!'
      },

      // ===============================================
      // 🎯 UNIT 5: CLINICAL APPLICATIONS (6 slides)
      // ===============================================
      {
        id: 'unit5-intro',
        title: '🎯 Unit 5: Clinical Applications',
        content: 'Master clinical significance and management! Learn when AV dissociation matters and how to respond.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson33/clinical-overview.jpg',
        hint: '👩‍⚕️ From ECG to bedside!'
      },

      {
        id: 'causes-accordion',
        title: 'Common Causes Explorer',
        content: 'Explore the various causes of AV dissociation',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Ischemic Causes',
            content: 'Acute MI affecting conduction system. Inferior MI (RCA occlusion). Chronic CAD with fibrosis. Reversible with reperfusion.',
            icon: '💔'
          },
          {
            title: 'Drug-Related Causes',
            content: 'Digitalis toxicity (classic). Beta blockers overdose. Calcium channel blockers. Antiarrhythmic drugs.',
            icon: '💊'
          },
          {
            title: 'Structural Heart Disease',
            content: 'Congenital heart disease. Cardiomyopathy. Infiltrative diseases. Post-surgical changes.',
            icon: '🏗️'
          },
          {
            title: 'Metabolic Causes',
            content: 'Hyperkalemia. Hypothyroidism. Hypoxia. Acidosis.',
            icon: '⚗️'
          }
        ],
        hint: '🎯 Click to explore causes!'
      },

      {
        id: 'hemodynamic-impact-tabs',
        title: 'Hemodynamic Impact Analysis',
        content: 'Understand the clinical consequences',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: 'Mild Impact',
            content: 'Normal ventricular rate. Preserved cardiac output. Minimal symptoms. Often well-tolerated.',
            icon: '🟢'
          },
          {
            title: 'Moderate Impact',
            content: 'Reduced atrial kick contribution. Exercise intolerance. Fatigue and weakness. May need intervention.',
            icon: '🟡'
          },
          {
            title: 'Severe Impact',
            content: 'Severe bradycardia. Hemodynamic compromise. Syncope risk. Urgent intervention needed.',
            icon: '🔴'
          }
        ],
        hint: '📑 Assess clinical severity!'
      },

      {
        id: 'management-strategies',
        title: 'Management Strategies',
        content: 'IDENTIFY CAUSE: Address underlying etiology. ASSESS HEMODYNAMICS: Evaluate clinical impact. TREAT REVERSIBLE: Correct drugs, electrolytes, ischemia. PACING: If symptomatic bradycardia.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson33/management-strategies.jpg',
        hint: '🎯 Systematic approach to management!'
      },

      {
        id: 'prognosis-factors-flashcard',
        title: '🧠 Prognostic Factors',
        content: 'Understanding prognosis in AV dissociation',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🔮',
          question: 'What determines prognosis in AV dissociation?',
          answer: 'UNDERLYING CAUSE: Reversible vs permanent. CAPTURE BEATS: Present = better prognosis. HEMODYNAMICS: Stable = better outcome. AGE: Younger patients recover better',
          imageUrl: '/lessonimages/module4/lesson33/prognostic-factors.jpg'
        },
        hint: '🧠 Flip to learn prognostic factors!'
      },

      {
        id: 'unit5-quiz',
        title: 'Unit 5 Quiz: Clinical Check',
        content: 'Test your clinical application knowledge!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'AV dissociation with capture beats suggests:',
        options: [
          'Permanent complete heart block',
          'No treatment is needed',
          'Potentially reversible condition',
          'Immediate surgery required'
        ],
        correctAnswer: 2,
        explanation: 'Correct! Capture beats indicate preserved AV conduction, suggesting the dissociation may be reversible with appropriate treatment.',
        imageUrl: '/lessonimages/module4/lesson33/unit5-quiz.jpg',
        hint: '🎯 Consider the prognostic significance!'
      },

      // ===============================================
      // 🎯 UNIT 6: MASTERY + CELEBRATION AUDIO (7 slides)
      // ===============================================
      {
        id: 'unit6-intro',
        title: '🎯 Unit 6: Mastery Achievement',
        content: 'Congratulations! Complete your AV dissociation mastery with advanced applications and celebration!',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson33/mastery-celebration.jpg',
        hint: '🏆 You have reached mastery level!'
      },

      {
        id: 'mastery-celebration-audio',
        title: '🎧 Mastery Celebration',
        content: 'Celebrate your AV dissociation mastery achievement!',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module4/lesson33/mastery-celebration.mp3',
        hint: '🎧 Celebration time! You have mastered AV dissociation!'
      },

      {
        id: 'differential-diagnosis-tabs',
        title: 'Advanced Differential Diagnosis',
        content: 'Master distinguishing AV dissociation from similar rhythms',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        tabs: [
          {
            title: 'vs Complete Block',
            content: 'Complete AV block: Always dissociated. AV dissociation: May have capture beats. Block is a cause of dissociation.',
            icon: '🚫'
          },
          {
            title: 'vs Ventricular Tachycardia',
            content: 'VT: Wide QRS, AV dissociation common. Junctional with dissociation: Narrow QRS usually. Rate differences help.',
            icon: '⚡'
          },
          {
            title: 'vs AT with Block',
            content: 'AT with block: Fixed conduction ratio. AV dissociation: Independent rates, variable relationships.',
            icon: '🔄'
          }
        ],
        hint: '📑 Master advanced differentiation!'
      },

      {
        id: 'teaching-points-accordion',
        title: 'Key Teaching Points Mastery',
        content: 'Master the essential teaching points for AV dissociation',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Sign, Not Rhythm',
            content: 'AV dissociation describes a RELATIONSHIP, not a specific rhythm. Always identify the underlying rhythm causing dissociation.',
            icon: '🎯'
          },
          {
            title: 'Capture Beats Are Gold',
            content: 'Capture beats PROVE AV dissociation. They show independent rhythms with intact conduction capability. Look for them always!',
            icon: '🏆'
          },
          {
            title: 'Treat the Underlying Cause',
            content: 'Do not just treat the dissociation - find and treat the underlying cause. This determines prognosis and therapy.',
            icon: '💊'
          }
        ],
        hint: '🎯 Click for mastery insights!'
      },

      {
        id: 'advanced-cases-flashcard',
        title: '🧠 Advanced Case Analysis',
        content: 'Master challenging AV dissociation scenarios',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🎭',
          question: 'A patient has junctional rhythm at 65 bpm with occasional normal-looking QRS complexes at irregular intervals. What is happening?',
          answer: 'Junctional rhythm with AV dissociation and capture beats! The normal QRS = sinus captures. Irregular timing = independent sinus P waves. This proves dissociation with preserved conduction.',
          imageUrl: '/lessonimages/module4/lesson33/advanced-case.jpg'
        },
        hint: '🧠 Flip to analyze this complex case!'
      },

      {
        id: 'clinical-pearls',
        title: 'Clinical Pearls Collection',
        content: 'PEARL 1: Always look for P waves in unusual places. PEARL 2: Capture beats are diagnostic gold. PEARL 3: Rate comparison reveals independence. PEARL 4: Morphology clues indicate escape origin. PEARL 5: Reversible causes offer best prognosis.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson33/clinical-pearls.jpg',
        hint: '💎 Precious clinical wisdom!'
      },

      {
        id: 'unit6-final-quiz',
        title: 'Unit 6 Quiz: Mastery Validation',
        content: 'Validate your AV dissociation mastery!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'The most important teaching point about AV dissociation is:',
        options: [
          'It always requires immediate treatment',
          'It is a sign describing a relationship, not a rhythm',
          'It only occurs in complete heart block',
          'It has no clinical significance'
        ],
        correctAnswer: 1,
        explanation: 'Perfect! AV dissociation is a SIGN that describes the relationship between atria and ventricles - always identify the underlying rhythm causing it.',
        imageUrl: '/lessonimages/module4/lesson33/mastery-quiz.jpg',
        hint: '🎯 Think about the fundamental concept!'
      }
    ],
    summary: "🏆 Congratulations! You have achieved AV dissociation mastery! You can recognize independent atrial and ventricular rhythms, understand their mechanisms, identify capture beats, and apply clinical knowledge.",
    keyPoints: [
      "AV dissociation = independent atrial and ventricular rhythms (it is a SIGN, not a rhythm)",
      "Look for marching P waves unrelated to QRS complexes",
      "Capture beats prove dissociation with intact conduction ability", 
      "Strategic audio reinforcement in Units 2, 4, and 6 enhanced learning",
      "Multiple causes: interference, default, block, or combination mechanisms",
      "Clinical significance depends on underlying cause and hemodynamic impact"
    ],
    resources: [
      {
        title: "AV Dissociation Mastery Reference",
        url: "https://ecgkid.com/av-dissociation-complete-guide",
        type: "video"
      }
    ]
  },
  tasks: [
    {
      id: 'final-av-dissociation-mastery-assessment',
      type: 'final-assessment',
      xp: 50,
      audio: {
        mainNarration: {
          audioUrl: '/lessonaudio/module4/lesson33/mastery-celebration.mp3',
          duration: 12,
          transcript: 'Outstanding work! You have achieved true mastery of AV dissociation. You can recognize independent atrial and ventricular rhythms, understand the mechanisms, identify capture beats, and apply this knowledge clinically. Your systematic approach to ECG analysis will serve you well in practice!'
        }
      },
      images: {
        mainImage: '/lessonimages/module4/lesson33/mastery-achievement.jpg',
        slideImages: []
      },
      content: {
        prerequisiteMessage: '🏆 Final Assessment: Complete all 6 units to unlock this comprehensive AV dissociation mastery evaluation.',
        questions: [
          {
            id: 'av-dissociation-definition-mastery',
            type: 'multiple-choice',
            question: 'A 68-year-old patient presents with an ECG showing regular QRS complexes at 55 bpm and regular P waves at 85 bpm with no consistent relationship. This represents:',
            options: [
              'Sinus bradycardia with first-degree AV block',
              'AV dissociation due to sinus bradycardia (default mechanism)',
              'Complete heart block with junctional escape',
              'Atrial fibrillation with slow ventricular response'
            ],
            correctAnswer: 1,
            explanation: 'This represents AV dissociation due to default mechanism. The sinus rate (85) is faster than the ventricular rate (55), but since the QRS complexes are regular and independent, the sinus impulses are not conducting. The slow ventricular rate suggests an escape rhythm has taken over by default.',
            imageUrl: '/lessonimages/module4/lesson33/assessment/definition-mastery.jpg'
          },
          {
            id: 'capture-beat-recognition-mastery',
            type: 'multiple-choice', 
            question: 'During monitoring of a patient with AV dissociation, you observe an occasional QRS complex that appears identical to the patient baseline sinus beats. This finding:',
            options: [
              'Indicates the rhythm is actually normal sinus',
              'Proves complete AV block is present',
              'Represents a capture beat, confirming AV dissociation',
              'Suggests the need for immediate pacing'
            ],
            correctAnswer: 2,
            explanation: 'This represents a capture beat, which actually confirms AV dissociation while proving that some AV conduction remains intact. Capture beats occur when a sinus P wave finds the ventricles not refractory and conducts normally, temporarily interrupting the dissociation. This finding suggests potentially reversible dissociation.',
            imageUrl: '/lessonimages/module4/lesson33/assessment/capture-recognition.jpg'
          },
          {
            id: 'clinical-management-mastery',
            type: 'multiple-choice',
            question: 'A patient with AV dissociation and capture beats is hemodynamically stable. The best initial management approach is:',
            options: [
              'Immediate transcutaneous pacing',
              'Identify and treat underlying causes',
              'Administer atropine bolus',
              'Prepare for emergency cardioversion'
            ],
            correctAnswer: 1,
            explanation: 'The presence of capture beats indicates potentially reversible AV dissociation, and hemodynamic stability allows time for systematic evaluation. The priority is identifying and treating underlying causes (drugs, electrolytes, ischemia) rather than immediate invasive interventions. The capture beats suggest preserved conduction that may improve with appropriate treatment.',
            imageUrl: '/lessonimages/module4/lesson33/assessment/clinical-management.jpg'
          },
          {
            id: 'differential-diagnosis-mastery',
            type: 'multiple-choice',
            question: 'Which finding best distinguishes AV dissociation from complete AV block?',
            options: [
              'Presence of P waves on the ECG',
              'Wide QRS complexes in the ventricular rhythm',
              'Occurrence of capture beats during monitoring',
              'Bradycardic ventricular escape rate'
            ],
            correctAnswer: 2,
            explanation: 'Capture beats are the key distinguishing feature. In complete AV block, NO conduction occurs from atria to ventricles, so capture beats cannot happen. The presence of capture beats in AV dissociation proves that some conduction pathway remains, making the condition potentially reversible. This is a crucial prognostic and therapeutic distinction.',
            imageUrl: '/lessonimages/module4/lesson33/assessment/differential-diagnosis.jpg'
          }
        ]
      }
    }
  ],
  completed: false,
  attempts: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
