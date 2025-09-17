import { Lesson } from '../types/learning';

export const optimizedLesson34: Lesson = {
  id: 'lesson-4-6-optimized',
  moduleId: 'module-4',
  title: "Premature Junctional Contractions Mastery",
  description: "Master premature junctional contractions through 6 focused learning units with enhanced interactive elements: Foundation concepts, mechanisms with audio, ECG recognition, timing analysis with audio, clinical significance, and management mastery with celebration audio",
  order: 6,
  estimatedTime: 45,
  content: {
    type: 'mixed',
    introduction: "🎯 Welcome to PJC Mastery! Master premature junctional contractions through 6 progressive units with enhanced interactive elements, strategic audio, and comprehensive assessments.",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your PJC Learning Journey",
        content: "UNIT 1: Foundation Concepts → UNIT 2: Mechanisms + Audio → UNIT 3: ECG Recognition → UNIT 4: Timing Analysis + Audio → UNIT 5: Clinical Significance → UNIT 6: Management Mastery + Celebration Audio",
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
        content: 'Master the fundamentals of premature junctional contractions! Understanding when the AV junction fires early and disrupts normal rhythm.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson34/pjc-overview.jpg',
        hint: '⚡ Junction jumping the gun!'
      },
      
      {
        id: 'pjc-definition-flashcard',
        title: '🧠 PJC Definition',
        content: 'Master the definition of premature junctional contractions',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '⚡',
          question: 'What is a premature junctional contraction (PJC)?',
          answer: 'An early heartbeat originating from the AV junction before the next expected sinus beat. Key: Narrow QRS with inverted or absent P waves, often followed by compensatory pause.',
          imageUrl: '/lessonimages/module4/lesson34/pjc-definition.jpg'
        },
        hint: '🧠 Flip to learn PJC fundamentals!'
      },

      {
        id: 'junction-anatomy',
        title: 'AV Junction Anatomy',
        content: 'AV NODE: Slow conduction, primary pacemaker backup. HIS BUNDLE: Rapid conduction pathway. BUNDLE BRANCHES: Left and right ventricular pathways. JUNCTIONAL TISSUE: Backup pacemaker cells between atria and ventricles.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson34/junction-anatomy.jpg',
        hint: '🏗️ The heart\'s relay station!'
      },

      {
        id: 'pjc-characteristics-steps',
        title: 'PJC Characteristics',
        content: 'Key identifying features of premature junctional contractions',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Early Timing',
            description: 'Occurs before next expected sinus beat'
          },
          {
            number: 2,
            title: 'Narrow QRS',
            description: 'Usually <120ms, same as sinus beats'
          },
          {
            number: 3,
            title: 'P Wave Changes',
            description: 'Inverted, absent, or after QRS'
          },
          {
            number: 4,
            title: 'Compensatory Pause',
            description: 'Usually complete compensation'
          }
        ],
        hint: '👣 Follow the identifying features!'
      },

      {
        id: 'pjc-types-tabs',
        title: 'Types of PJC P Waves',
        content: 'Explore different P wave patterns with PJCs',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        tabs: [
          {
            title: 'Inverted P Waves',
            content: 'P waves inverted in leads II, III, aVF. Retrograde atrial activation. P wave before QRS with short PR interval (<120ms).',
            icon: '🔻'
          },
          {
            title: 'Absent P Waves',
            content: 'No visible P wave. P wave buried in QRS complex. Most common presentation in clinical practice.',
            icon: '👻'
          },
          {
            title: 'Retrograde P Waves',
            content: 'P wave follows QRS complex. Inverted in inferior leads. Results from slow retrograde conduction to atria.',
            icon: '🔄'
          }
        ],
        hint: '📑 Explore P wave patterns!'
      },

      {
        id: 'normal-vs-pjc',
        title: 'Normal Beat vs PJC Comparison',
        content: 'NORMAL BEAT: Expected timing, upright P wave, normal PR interval. PJC: Early timing, altered P wave, narrow QRS. PAUSE: PJC followed by compensatory pause. ORIGIN: Sinus node vs AV junction.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson34/normal-vs-pjc.jpg',
        hint: '⚖️ Compare and contrast!'
      },

      {
        id: 'unit1-quiz',
        title: 'Unit 1 Quiz: Foundation Check',
        content: 'Test your understanding of PJC fundamentals!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'The most characteristic feature of a PJC is:',
        options: [
          'Wide QRS complex',
          'Early timing with narrow QRS',
          'Always visible P waves',
          'No compensatory pause'
        ],
        correctAnswer: 1,
        explanation: 'Correct! PJCs are characterized by early timing (premature) and narrow QRS complexes since they originate above the ventricles in the AV junction.',
        imageUrl: '/lessonimages/module4/lesson34/unit1-quiz.jpg',
        hint: '🎯 Think about the key defining features!'
      },

      // ===============================================
      // 🎯 UNIT 2: MECHANISMS + AUDIO (8 slides)
      // ===============================================
      {
        id: 'unit2-intro',
        title: '🎯 Unit 2: Mechanisms + Audio',
        content: 'Discover the mechanisms behind PJCs! Learn how and why the AV junction fires prematurely.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson34/mechanisms-overview.jpg',
        hint: '⚙️ Understand the cellular machinery!'
      },

      {
        id: 'pjc-mechanisms-audio',
        title: '🎧 PJC Mechanisms Explained',
        content: 'Listen to detailed explanation of PJC formation mechanisms',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module4/lesson34/pjc-mechanisms-detailed.mp3',
        hint: '🎧 Listen and learn the mechanisms!'
      },

      {
        id: 'automaticity-mechanism',
        title: 'Enhanced Automaticity',
        content: 'CAUSE: Increased automaticity in junctional cells. TRIGGERS: Stress, caffeine, hypoxia, digitalis. RESULT: Junction fires before sinus node. PATTERN: Usually isolated beats, can be frequent.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson34/automaticity-mechanism.jpg',
        hint: '🔋 Cellular pacemaker overdrive!'
      },

      {
        id: 'reentry-mechanism-flashcard',
        title: '🧠 Reentry Mechanism',
        content: 'Understanding reentrant PJCs',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🌪️',
          question: 'How does reentry cause PJCs?',
          answer: 'Circuit within AV junction allows impulse to loop back. Requires slow conduction in one pathway and block in another. Creates premature activation when circuit completes.',
          imageUrl: '/lessonimages/module4/lesson34/reentry-mechanism.jpg'
        },
        hint: '🧠 Flip to understand reentry circuits!'
      },

      {
        id: 'triggered-activity-accordion',
        title: 'Triggered Activity Mechanisms',
        content: 'Explore different triggered activity patterns',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Early Afterdepolarizations (EADs)',
            content: 'Occur during phase 2-3 of action potential. Associated with prolonged QT. Triggered by drugs, bradycardia, electrolyte abnormalities.',
            icon: '🌊'
          },
          {
            title: 'Delayed Afterdepolarizations (DADs)',
            content: 'Occur after completion of action potential. Calcium overload mechanism. Associated with digitalis toxicity, catecholamines.',
            icon: '⏰'
          },
          {
            title: 'Oscillatory Mechanisms',
            content: 'Spontaneous calcium release from sarcoplasmic reticulum. Creates membrane potential oscillations. Can trigger premature activation.',
            icon: '〰️'
          }
        ],
        hint: '🎯 Click to expand trigger mechanisms!'
      },

      {
        id: 'conduction-patterns',
        title: 'PJC Conduction Patterns',
        content: 'ANTEGRADE: Junction to ventricles (normal QRS). RETROGRADE: Junction to atria (inverted P). BIDIRECTIONAL: Both directions simultaneously. CONCEALED: Retrograde blocked, no P wave visible.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson34/conduction-patterns.jpg',
        hint: '🗺️ Mapping electrical pathways!'
      },

      {
        id: 'metabolic-factors',
        title: 'Metabolic and Drug Factors',
        content: 'ELECTROLYTES: Hypokalemia, hypomagnesemia, hypercalcemia. DRUGS: Digitalis, theophylline, sympathomimetics. METABOLIC: Hyperthyroidism, acidosis. ISCHEMIA: Myocardial oxygen deprivation.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson34/metabolic-factors.jpg',
        hint: '🧪 Chemical triggers for PJCs!'
      },

      {
        id: 'unit2-quiz',
        title: 'Unit 2 Quiz: Mechanisms Check',
        content: 'Test your understanding of PJC mechanisms!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'The most common mechanism for PJCs is:',
        options: [
          'Reentry within the AV junction',
          'Enhanced automaticity',
          'Early afterdepolarizations',
          'Delayed afterdepolarizations'
        ],
        correctAnswer: 1,
        explanation: 'Correct! Enhanced automaticity is the most common mechanism for PJCs, often triggered by stress, caffeine, or other stimulants that increase junctional cell firing rate.',
        imageUrl: '/lessonimages/module4/lesson34/unit2-quiz.jpg',
        hint: '🎯 Think about the most frequent cause!'
      },

      // ===============================================
      // 🎯 UNIT 3: ECG RECOGNITION (7 slides)  
      // ===============================================
      {
        id: 'unit3-intro',
        title: '🎯 Unit 3: ECG Recognition',
        content: 'Master ECG recognition of PJCs! Learn to spot premature junctional beats on rhythm strips.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson34/ecg-recognition-overview.jpg',
        hint: '📈 Become a PJC detective!'
      },

      {
        id: 'recognition-algorithm-steps',
        title: 'PJC Recognition Algorithm',
        content: 'Step-by-step approach to identifying PJCs',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Check Timing',
            description: 'Is the beat early (premature)?'
          },
          {
            number: 2,
            title: 'Analyze QRS',
            description: 'Is the QRS narrow and similar to sinus?'
          },
          {
            number: 3,
            title: 'Examine P Waves',
            description: 'Inverted, absent, or retrograde P wave?'
          },
          {
            number: 4,
            title: 'Assess Pause',
            description: 'Is there a compensatory pause after?'
          }
        ],
        hint: '👣 Follow the systematic approach!'
      },

      {
        id: 'p-wave-analysis-flashcard',
        title: '🧠 P Wave Analysis',
        content: 'Mastering P wave changes in PJCs',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🔍',
          question: 'What P wave changes suggest a PJC?',
          answer: 'INVERTED P in II, III, aVF (retrograde conduction). ABSENT P (buried in QRS). RETROGRADE P after QRS. PR interval <120ms if P visible before QRS.',
          imageUrl: '/lessonimages/module4/lesson34/p-wave-analysis.jpg'
        },
        hint: '🧠 Flip to analyze P wave patterns!'
      },

      {
        id: 'morphology-clues-accordion',
        title: 'QRS Morphology Clues',
        content: 'Analyze QRS characteristics in PJCs',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Narrow QRS Complex',
            content: 'Usually <120ms duration. Same morphology as sinus beats. Supraventricular origin confirmed by narrow width.',
            icon: '📏'
          },
          {
            title: 'Aberrant Conduction',
            content: 'Occasionally wide QRS if bundle branch block. Usually right bundle branch pattern. Still junctional origin if timing and P waves consistent.',
            icon: '🌐'
          },
          {
            title: 'Lead-Specific Changes',
            content: 'May see subtle axis shifts. T wave changes possible. Overall morphology usually preserved from normal sinus beats.',
            icon: '📊'
          }
        ],
        hint: '🎯 Click to expand morphology analysis!'
      },

      {
        id: 'timing-measurements-tabs',
        title: 'Timing Measurement Techniques',
        content: 'Master precise timing analysis for PJCs',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        tabs: [
          {
            title: 'Coupling Interval',
            content: 'Distance from preceding sinus beat to PJC. Usually fixed for same ectopic focus. Measure R-R interval from last normal beat.',
            icon: '📐'
          },
          {
            title: 'Compensatory Pause',
            content: 'Pause after PJC before next sinus beat. Complete compensation = R-R including PJC equals 2x sinus cycle length.',
            icon: '⏸️'
          },
          {
            title: 'Prematurity Index',
            content: 'Coupling interval ÷ sinus cycle length. Values <85% suggest premature origin. Helps differentiate from escape beats.',
            icon: '📈'
          }
        ],
        hint: '📑 Explore measurement techniques!'
      },

      {
        id: 'common-patterns',
        title: 'Common PJC Patterns',
        content: 'ISOLATED PJCs: Single premature beats. BIGEMINY: Every other beat is PJC. TRIGEMINY: Every third beat is PJC. COUPLETS: Two PJCs in a row. RUNS: Three or more consecutive PJCs.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson34/common-patterns.jpg',
        hint: '🎼 PJC rhythm patterns!'
      },

      {
        id: 'unit3-quiz',
        title: 'Unit 3 Quiz: Recognition Check',
        content: 'Test your PJC recognition skills!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'A narrow QRS complex occurring early with an inverted P wave in lead II most likely represents:',
        options: [
          'Premature atrial contraction',
          'Premature junctional contraction',
          'Premature ventricular contraction',
          'Normal sinus beat'
        ],
        correctAnswer: 1,
        explanation: 'Correct! The combination of early timing, narrow QRS, and inverted P wave in lead II (retrograde atrial activation) is classic for PJCs.',
        imageUrl: '/lessonimages/module4/lesson34/unit3-quiz.jpg',
        hint: '🎯 Think about P wave direction!'
      },

      // ===============================================
      // 🎯 UNIT 4: TIMING ANALYSIS + AUDIO (7 slides)
      // ===============================================
      {
        id: 'unit4-intro',
        title: '🎯 Unit 4: Timing Analysis + Audio',
        content: 'Master advanced timing analysis of PJCs! Learn precise measurement techniques and their clinical significance.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson34/timing-overview.jpg',
        hint: '⏱️ Precision timing analysis!'
      },

      {
        id: 'timing-analysis-audio',
        title: '🎧 Advanced Timing Analysis',
        content: 'Listen to detailed explanation of PJC timing measurements',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module4/lesson34/timing-analysis-detailed.mp3',
        hint: '🎧 Audio guide to timing mastery!'
      },

      {
        id: 'coupling-intervals-flashcard',
        title: '🧠 Coupling Intervals',
        content: 'Master coupling interval analysis',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🔗',
          question: 'What does a fixed coupling interval indicate?',
          answer: 'Same ectopic focus producing PJCs. Consistent timing suggests stable underlying mechanism. Variable coupling may indicate multiple foci or changing substrate.',
          imageUrl: '/lessonimages/module4/lesson34/coupling-intervals.jpg'
        },
        hint: '🧠 Flip to learn coupling significance!'
      },

      {
        id: 'pause-analysis-steps',
        title: 'Compensatory Pause Analysis',
        content: 'Step-by-step pause measurement and interpretation',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Measure Total Interval',
            description: 'R-R from beat before PJC to beat after pause'
          },
          {
            number: 2,
            title: 'Calculate Expected',
            description: 'Two times the normal sinus cycle length'
          },
          {
            number: 3,
            title: 'Compare Values',
            description: 'Complete compensation = measured equals expected'
          },
          {
            number: 4,
            title: 'Clinical Significance',
            description: 'Complete pause suggests non-conducted retrograde P'
          }
        ],
        hint: '👣 Follow the pause analysis!'
      },

      {
        id: 'pattern-recognition-tabs',
        title: 'Advanced Pattern Recognition',
        content: 'Recognize complex PJC timing patterns',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: 'Interpolated PJCs',
            content: 'PJC occurs without disturbing sinus rhythm. No compensatory pause. Retrograde conduction blocked. Rare but important pattern.',
            icon: '🔀'
          },
          {
            title: 'Reset Phenomenon',
            content: 'PJC resets sinus node timing. Next sinus beat comes sooner than expected. Indicates successful retrograde conduction.',
            icon: '🔄'
          },
          {
            title: 'Exit Block',
            content: 'Junctional pacemaker fires but conduction blocked. May see only retrograde P waves. Creates complex timing patterns.',
            icon: '🚫'
          }
        ],
        hint: '📑 Explore complex patterns!'
      },

      {
        id: 'mathematical-analysis',
        title: 'Mathematical Relationships',
        content: 'PREMATURITY INDEX: CI/CL < 0.85 indicates premature. PAUSE RATIO: Total interval / 2 × sinus cycle. FREQUENCY ANALYSIS: PJCs per minute, percentage of total beats. PATTERN STABILITY: Consistency over time.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson34/mathematical-analysis.jpg',
        hint: '🧮 Quantifying PJC patterns!'
      },

      {
        id: 'unit4-quiz',
        title: 'Unit 4 Quiz: Timing Check',
        content: 'Test your timing analysis skills!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'A complete compensatory pause after a PJC indicates:',
        options: [
          'The PJC reset the sinus node',
          'No retrograde conduction to the atria',
          'The PJC was interpolated',
          'Multiple ectopic foci are present'
        ],
        correctAnswer: 1,
        explanation: 'Correct! A complete compensatory pause indicates that the PJC did not conduct retrogradely to reset the sinus node, so the next sinus beat comes exactly on time.',
        imageUrl: '/lessonimages/module4/lesson34/unit4-quiz.jpg',
        hint: '🎯 Think about sinus node timing!'
      },

      // ===============================================
      // 🎯 UNIT 5: CLINICAL SIGNIFICANCE (6 slides)
      // ===============================================
      {
        id: 'unit5-intro',
        title: '🎯 Unit 5: Clinical Significance',
        content: 'Master clinical significance and implications! Learn when PJCs matter and their prognostic importance.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson34/clinical-overview.jpg',
        hint: '👩‍⚕️ From ECG to patient care!'
      },

      {
        id: 'clinical-spectrum-accordion',
        title: 'Clinical Spectrum of PJCs',
        content: 'Explore the range of clinical presentations',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Benign PJCs',
            content: 'Isolated, infrequent PJCs. Normal heart structure and function. Often stress or caffeine related. Usually asymptomatic.',
            icon: '😊'
          },
          {
            title: 'Symptomatic PJCs',
            content: 'Frequent PJCs causing palpitations. May cause fatigue or anxiety. Often related to underlying triggers. Requires evaluation.',
            icon: '💗'
          },
          {
            title: 'Pathologic PJCs',
            content: 'Associated with heart disease. May indicate digitalis toxicity. Can be marker of increased arrhythmia risk. Requires treatment.',
            icon: '⚠️'
          }
        ],
        hint: '🎯 Click to explore clinical spectrum!'
      },

      {
        id: 'underlying-causes-tabs',
        title: 'Underlying Causes Analysis',
        content: 'Systematic evaluation of PJC causes',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: 'Physiologic',
            content: 'Stress, exercise, caffeine, nicotine. Sleep deprivation, anxiety. Usually benign and self-limiting.',
            icon: '🏃'
          },
          {
            title: 'Pathologic',
            content: 'Coronary artery disease, heart failure. Valvular disease, cardiomyopathy. May indicate structural heart disease.',
            icon: '💔'
          },
          {
            title: 'Pharmacologic',
            content: 'Digitalis toxicity (classic cause). Theophylline, sympathomimetics. Antiarrhythmic drug proarrhythmia.',
            icon: '💊'
          }
        ],
        hint: '📑 Assess underlying causes!'
      },

      {
        id: 'prognostic-implications',
        title: 'Prognostic Implications',
        content: 'BENIGN: Isolated PJCs in normal hearts have excellent prognosis. WARNING SIGNS: Frequent PJCs may precede more serious arrhythmias. DRUG TOXICITY: PJCs may be early sign of digitalis excess. FOLLOW-UP: Monitor frequency and triggers.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson34/prognostic-implications.jpg',
        hint: '🔮 Long-term outlook assessment!'
      },

      {
        id: 'risk-stratification-flashcard',
        title: '🧠 Risk Stratification',
        content: 'Assessing PJC risk levels',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🎯',
          question: 'How do you stratify PJC risk?',
          answer: 'LOW RISK: Infrequent, normal heart, no symptoms. MODERATE RISK: Frequent, symptomatic, normal heart. HIGH RISK: Any PJCs with heart disease or drug toxicity.',
          imageUrl: '/lessonimages/module4/lesson34/risk-stratification.jpg'
        },
        hint: '🧠 Flip to learn risk assessment!'
      },

      {
        id: 'unit5-quiz',
        title: 'Unit 5 Quiz: Clinical Check',
        content: 'Test your clinical knowledge!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'PJCs in the setting of digitalis therapy should raise concern for:',
        options: [
          'Drug efficacy',
          'Drug toxicity',
          'Drug interaction',
          'Drug resistance'
        ],
        correctAnswer: 1,
        explanation: 'Correct! PJCs are a classic early sign of digitalis toxicity. The increased automaticity of junctional tissue is one of the first manifestations of excess digitalis.',
        imageUrl: '/lessonimages/module4/lesson34/unit5-quiz.jpg',
        hint: '🎯 Think about drug effects!'
      },

      // ===============================================
      // 🎯 UNIT 6: MANAGEMENT MASTERY + CELEBRATION AUDIO (7 slides)
      // ===============================================
      {
        id: 'unit6-intro',
        title: '🎯 Unit 6: Management Mastery',
        content: 'Congratulations! Complete your PJC mastery with advanced management strategies and celebration!',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson34/management-mastery.jpg',
        hint: '🏆 You have reached management mastery!'
      },

      {
        id: 'management-celebration-audio',
        title: '🎧 Management Mastery Celebration',
        content: 'Celebrate your PJC management mastery achievement!',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module4/lesson34/management-celebration.mp3',
        hint: '🎧 Celebration time! You have mastered PJC management!'
      },

      {
        id: 'management-algorithm-tabs',
        title: 'Management Algorithm',
        content: 'Systematic approach to PJC management',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        tabs: [
          {
            title: 'Asymptomatic PJCs',
            content: 'No treatment needed for occasional PJCs. Identify and eliminate triggers. Reassurance and lifestyle counseling.',
            icon: '😌'
          },
          {
            title: 'Symptomatic PJCs',
            content: 'Beta-blockers for symptom control. Calcium channel blockers alternative. Avoid stimulants and stress.',
            icon: '💊'
          },
          {
            title: 'Frequent PJCs',
            content: 'Consider underlying causes. Evaluate for heart disease. May need antiarrhythmic therapy.',
            icon: '🔍'
          }
        ],
        hint: '📑 Master management decisions!'
      },

      {
        id: 'treatment-strategies-accordion',
        title: 'Treatment Strategies Mastery',
        content: 'Comprehensive treatment approaches',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Non-Pharmacologic',
            content: 'Lifestyle modifications: reduce caffeine, stress management. Exercise training, adequate sleep. Elimination of triggers most effective.',
            icon: '🌱'
          },
          {
            title: 'Pharmacologic',
            content: 'Beta-blockers: metoprolol, atenolol first-line. Calcium blockers: diltiazem, verapamil alternative. Antiarrhythmics for refractory cases.',
            icon: '💉'
          },
          {
            title: 'Special Situations',
            content: 'Digitalis toxicity: stop drug, check levels. Electrolyte abnormalities: correct imbalances. Heart disease: treat underlying condition.',
            icon: '🎯'
          }
        ],
        hint: '🎯 Click for treatment mastery!'
      },

      {
        id: 'monitoring-strategies-flashcard',
        title: '🧠 Monitoring Strategies',
        content: 'Master long-term PJC monitoring',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '📊',
          question: 'How should you monitor PJCs long-term?',
          answer: 'Holter monitoring for frequency assessment. Event monitors for symptoms. Serial ECGs to track changes. Patient symptom diaries helpful.',
          imageUrl: '/lessonimages/module4/lesson34/monitoring-strategies.jpg'
        },
        hint: '🧠 Flip to learn monitoring approaches!'
      },

      {
        id: 'prevention-strategies',
        title: 'Prevention Strategies',
        content: 'PRIMARY PREVENTION: Identify and avoid triggers, lifestyle modifications. SECONDARY PREVENTION: Optimal medical therapy, regular monitoring. LIFESTYLE: Stress reduction, adequate sleep, moderate exercise. DIETARY: Limit caffeine, alcohol, maintain electrolyte balance.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson34/prevention-strategies.jpg',
        hint: '🛡️ Prevention is key!'
      },

      {
        id: 'unit6-final-quiz',
        title: 'Unit 6 Quiz: Management Mastery Validation',
        content: 'Validate your PJC management mastery!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'The most effective initial management for symptomatic PJCs in a structurally normal heart is:',
        options: [
          'Immediate antiarrhythmic therapy',
          'Trigger identification and beta-blockers',
          'Permanent pacemaker implantation',
          'Radiofrequency ablation'
        ],
        correctAnswer: 1,
        explanation: 'Perfect! The most effective approach is identifying and eliminating triggers combined with beta-blockers for symptom control in structurally normal hearts.',
        imageUrl: '/lessonimages/module4/lesson34/mastery-quiz.jpg',
        hint: '🎯 Think about first-line therapy!'
      }
    ],
    summary: "🏆 Congratulations! You have achieved PJC mastery! You can recognize premature junctional contractions, understand their mechanisms, perform timing analysis, and apply optimal management strategies.",
    keyPoints: [
      "PJCs = premature beats from AV junction with narrow QRS and altered P waves",
      "Look for early timing, inverted or absent P waves, and compensatory pauses",
      "Timing analysis reveals coupling intervals and pause characteristics", 
      "Strategic audio reinforcement in Units 2, 4, and 6 enhanced learning",
      "Most PJCs are benign but may indicate underlying triggers or pathology",
      "Management focuses on trigger elimination and symptom control"
    ],
    resources: [
      {
        title: "PJC Mastery Reference",
        url: "https://ecgkid.com/pjc-complete-guide",
        type: "video"
      }
    ]
  },
  tasks: [
    {
      id: 'final-pjc-mastery-assessment',
      type: 'final-assessment',
      xp: 50,
      audio: {
        mainNarration: {
          audioUrl: '/lessonaudio/module4/lesson34/mastery-celebration.mp3',
          duration: 12,
          transcript: 'Outstanding work! You have achieved true mastery of premature junctional contractions. You can recognize PJCs on ECGs, understand their mechanisms, perform precise timing analysis, and apply optimal management strategies. Your expertise will serve patients well!'
        }
      },
      images: {
        mainImage: '/lessonimages/module4/lesson34/mastery-achievement.jpg',
        slideImages: []
      },
      content: {
        prerequisiteMessage: '🏆 Final Assessment: Complete all 6 units to unlock this comprehensive PJC mastery evaluation.',
        questions: [
          {
            id: 'pjc-recognition-mastery',
            type: 'multiple-choice',
            question: 'A 45-year-old patient shows occasional early beats with narrow QRS complexes and inverted P waves in leads II and III. The most likely diagnosis is:',
            options: [
              'Premature atrial contractions with aberrancy',
              'Premature junctional contractions',
              'Premature ventricular contractions',
              'Sinus arrhythmia with PACs'
            ],
            correctAnswer: 1,
            explanation: 'This is classic for PJCs: early timing, narrow QRS (supraventricular origin), and inverted P waves in inferior leads (retrograde atrial activation from the AV junction).',
            imageUrl: '/lessonimages/module4/lesson34/assessment/recognition-mastery.jpg'
          },
          {
            id: 'timing-analysis-mastery',
            type: 'multiple-choice', 
            question: 'A PJC with a complete compensatory pause indicates:',
            options: [
              'The sinus node was reset by retrograde conduction',
              'No retrograde conduction to the atria occurred',
              'The PJC was interpolated between sinus beats',
              'Multiple ectopic foci are present'
            ],
            correctAnswer: 1,
            explanation: 'A complete compensatory pause indicates that the PJC did not conduct retrogradely to reset the sinus node, so the next sinus beat arrives exactly on schedule, creating a pause that compensates for the early beat.',
            imageUrl: '/lessonimages/module4/lesson34/assessment/timing-analysis.jpg'
          },
          {
            id: 'clinical-significance-mastery',
            type: 'multiple-choice',
            question: 'PJCs in a patient taking digoxin should raise concern for:',
            options: [
              'Therapeutic drug level',
              'Drug toxicity',
              'Drug underdosing',
              'Drug resistance'
            ],
            correctAnswer: 1,
            explanation: 'PJCs are a classic early sign of digitalis toxicity. Enhanced automaticity in junctional tissue is one of the first manifestations of excess digitalis, often appearing before more serious arrhythmias.',
            imageUrl: '/lessonimages/module4/lesson34/assessment/clinical-significance.jpg'
          },
          {
            id: 'management-mastery',
            type: 'multiple-choice',
            question: 'The most appropriate initial management for frequent symptomatic PJCs in a structurally normal heart is:',
            options: [
              'Immediate antiarrhythmic drug therapy',
              'Identify triggers and consider beta-blockers',
              'Radiofrequency ablation procedure',
              'Permanent pacemaker implantation'
            ],
            correctAnswer: 1,
            explanation: 'The most effective approach is identifying and eliminating triggers (caffeine, stress, etc.) combined with beta-blockers for symptom control. This conservative approach is appropriate for structurally normal hearts.',
            imageUrl: '/lessonimages/module4/lesson34/assessment/management-mastery.jpg'
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
