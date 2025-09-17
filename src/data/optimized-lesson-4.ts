import { Lesson } from '@/types/learning';

// ENHANCED LESSON 4: Complete ECG Waveforms Mastery - Duolingo-Style Units
export const optimizedLesson4: Lesson = {
  id: 'module-1-lesson-4',
  moduleId: 'module-1',
  title: "Complete ECG Waveforms Mastery",
  description: "Master ECG waveform analysis through 6 focused learning units: Waveform Fundamentals, P Wave Mastery, QRS Complex, T Wave Analysis, Waveform Integration, and Clinical Interpretation",
  order: 4,
  estimatedTime: 40,
  content: {
    type: 'mixed',
    introduction: "📊 Welcome to ECG Waveform Mastery! Master the building blocks of every heartbeat through 6 progressive units: fundamentals, P waves, QRS complexes, T waves, integration, and clinical interpretation.",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your ECG Waveform Journey",
        content: "UNIT 1: Waveform Fundamentals → UNIT 2: P Wave Mastery → UNIT 3: QRS Complex → UNIT 4: T Wave Analysis → UNIT 5: Waveform Integration → UNIT 6: Clinical Interpretation",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // ===============================================
      // 🎯 UNIT 1: WAVEFORM FUNDAMENTALS (7 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: Waveform Fundamentals',
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/basic-ecg-waveforms.png',
        imageAlt: 'ECG waveform fundamentals overview',
        highlights: [
          '📊 Learn the electrical foundation of waveforms',
          '⚡ Master depolarization vs repolarization',
          '3️⃣ Understand P-QRS-T sequence',
          '🎨 Recognize normal waveform morphology'
        ],
        hint: '📊 Your waveform foundation!'
      },

      // 🎬 YOUTUBE VIDEO: Advanced ECG Waveform Analysis
      {
        id: 'youtube-advanced-ecg',
        title: '🎬 Advanced ECG Analysis Training',
        content: 'Deep dive into ECG waveform analysis with this comprehensive training. Perfect for mastering P waves, QRS complexes, and T waves!',
        type: 'youtube',
        youtubeId: 'WnrvNGa_bPY',
        videoDuration: 3600,
        minimumWatchTime: 1200,
        requireFullWatch: false,
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        hint: '📊 Professional waveform analysis techniques!'
      },
      
      {
        id: 'electrical-activity-flashcard',
        title: 'Electrical Activity Basics',
        type: 'flashcard',
        animation: 'fade',
        flashcard: {
          icon: '⚡',
          question: 'What creates ECG waveforms?',
          answer: 'Heart electrical activity! ⚡\n\n• ELECTRICAL IMPULSES spread through cardiac muscle\n• DEPOLARIZATION = activation (contraction)\n• REPOLARIZATION = recovery (relaxation)\n• ECG records this electrical activity as waveforms!',
          category: 'physiology',
          difficulty: 'beginner'
        },
        hint: '⚡ Electrical activity = ECG waveforms!'
      },

      {
        id: 'depolarization-repolarization-tabs',
        title: 'Depolarization vs Repolarization',
        type: 'tabs',
        animation: 'fade',
        imageUrl: '/lessonimages/p-qrs-t-wave-sequence.png',
        imageAlt: 'Depolarization and repolarization waveforms',
        tabs: [
          {
            title: 'Depolarization',
            content: 'ELECTRICAL ACTIVATION ⚡\n\n• Cell membrane becomes positive\n• Triggers muscle contraction\n• Creates SHARP, distinct waveforms\n• Examples: P wave, QRS complex'
          },
          {
            title: 'Repolarization',
            content: 'ELECTRICAL RECOVERY 🔄\n\n• Cell membrane returns to negative\n• Muscle relaxes and resets\n• Creates GRADUAL, broader waveforms\n• Examples: T wave, U wave'
          },
          {
            title: 'Clinical Significance',
            content: 'Shape tells the story! 🎨\n\n• Sharp = depolarization (activation)\n• Gradual = repolarization (recovery)\n• Abnormal shapes = pathology\n• Timing sequence is critical'
          }
        ],
        hint: '🔄 Contract = sharp, recover = gradual!'
      },

      {
        id: 'three-waveforms-accordion',
        title: 'The Three Main Waveforms',
        type: 'accordion',
        animation: 'fade',
        imageUrl: '/lessonimages/basic-ecg-waveforms.png',
        imageAlt: 'P wave, QRS complex, and T wave',
        accordionItems: [
          {
            title: '🔵 P Wave - Atrial Depolarization',
            content: 'First wave of each heartbeat cycle\n• Represents atrial contraction\n• Small, smooth, upright wave\n• Duration: <0.12 seconds\n• Amplitude: <2.5mV'
          },
          {
            title: '🔺 QRS Complex - Ventricular Depolarization',
            content: 'Main wave of each heartbeat cycle\n• Represents ventricular contraction\n• Sharp, prominent deflection\n• Duration: <0.12 seconds\n• Amplitude: 5-25mV (varies by lead)'
          },
          {
            title: '🔶 T Wave - Ventricular Repolarization',
            content: 'Final wave of each heartbeat cycle\n• Represents ventricular recovery\n• Asymmetric, gradual wave\n• Duration: variable\n• Amplitude: <5mV'
          }
        ],
        hint: '3️⃣ P-QRS-T = one complete cycle!'
      },

      {
        id: 'waveform-timing-steps',
        title: 'Waveform Timing & Sequence',
        type: 'steps',
        animation: 'fade',
        imageUrl: '/lessonimages/p-qrs-t-wave-sequence.png',
        imageAlt: 'ECG waveform timing and sequence',
        audioUrl: '/lessonaudio/ecg-waveforms/waveform-sequence.mp3',
        steps: [
          {
            number: 1,
            title: '1️⃣ P Wave Starts',
            description: 'Atrial depolarization begins the cycle - SA node fires → atria contract → blood fills ventricles'
          },
          {
            number: 2,
            title: '2️⃣ QRS Follows',
            description: 'Ventricular depolarization (main event) - AV node delays → ventricles contract → blood pumped out'
          },
          {
            number: 3,
            title: '3️⃣ T Wave Completes',
            description: 'Ventricular repolarization ends the cycle - Ventricles recover → ready for next cycle'
          },
          {
            number: 4,
            title: '🔄 Cycle Repeats',
            description: 'Regular rhythm repeats this sequence - Normal heart: 60-100 cycles per minute'
          }
        ],
        hint: '⏰ Perfect timing = healthy heart!'
      },

      {
        id: 'waveform-morphology-highlight',
        title: 'Waveform Morphology Basics',
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/ecg-waves-anatomy-correlation.png',
        imageAlt: 'ECG waveform morphology characteristics',
        highlights: [
          '🎨 Morphology = shape and appearance',
          '🔵 P waves: smooth, rounded, small',
          '🔺 QRS complexes: sharp, distinct, prominent',
          '🔶 T waves: asymmetric, gradual slope'
        ],
        hint: '🎨 Shape = diagnostic information!'
      },

      {
        id: 'waveforms-intro-audio',
        title: '🎵 Waveforms Introduction Audio',
        type: 'audio',
        animation: 'fade',
        audioUrl: '/lessonaudio/ecg-waveforms/waveforms-intro.mp3',
        imageUrl: '/lessonimages/basic-ecg-waveforms.png',
        imageAlt: 'ECG waveforms introduction audio',
        audio: {
          transcript: 'Comprehensive introduction to ECG waveforms. Learn how electrical activity creates the patterns you see and understand the foundation for waveform analysis.'
        },
        hint: '🔊 Listen to waveform basics!'
      },

      // ==================== UNIT 1 QUIZ: WAVEFORM FUNDAMENTALS ====================
      {
        id: 'unit1-fundamentals-quiz',
        title: '🎯 Unit 1 Quiz: Waveform Fundamentals',
        content: "Test your knowledge of ECG waveform fundamentals!",
        type: 'quiz',
        layout: 'centered',
        animation: 'slide',
        imageUrl: '/lessonimages/p-qrs-t-wave-sequence.png',
        imageAlt: 'Waveform fundamentals quiz',
        hint: '🧠 Test your Unit 1 knowledge!',
        question: "What creates the waveforms we see on an ECG?",
        options: [
          "Blood flow through the heart",
          "Heart valve movements",
          "Electrical activity of the heart",
          "Heart muscle contractions only"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! ECG waveforms are created by the electrical activity of the heart as it depolarizes and repolarizes during each cardiac cycle."
      },

      // ================================================
      // 🎯 UNIT 2: P WAVE MASTERY (8 slides)
      // ================================================
      {
        id: 'unit2-intro',
        title: '🎯 Unit 2: P Wave Mastery',
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/p-wave-analysis-overview.png',
        imageAlt: 'P wave mastery overview',
        highlights: [
          '🔵 Master P wave identification',
          '📏 Learn duration and amplitude measurements',
          '🔍 Recognize abnormal P wave patterns',
          '🏥 Understand clinical significance'
        ],
        hint: '📈 P wave = atrial expertise!'
      },

      {
        id: 'p-wave-definition-flashcard',
        title: 'P Wave: Atrial Depolarization',
        type: 'flashcard',
        animation: 'fade',
        flashcard: {
          icon: '🫀',
          question: 'What does the P wave represent?',
          answer: 'Atrial depolarization! 🫀\n\n• ATRIA CONTRACT to fill ventricles\n• FIRST WAVE of each heartbeat cycle\n• Without P wave = no atrial activity\n• Normal P wave = healthy atria!',
          category: 'anatomy',
          difficulty: 'beginner'
        },
        hint: '🫀 P = atria Pumping first!'
      },

      {
        id: 'normal-p-wave-tabs',
        title: 'Normal P Wave Characteristics',
        type: 'tabs',
        animation: 'fade',
        imageUrl: '/lessonimages/p-wave-characteristics-nsr.png',
        imageAlt: 'Normal P wave characteristics and measurements',
        tabs: [
          {
            title: 'Shape & Direction',
            content: 'UPRIGHT in leads I, II, aVF 📈\n\n• Smooth, rounded appearance\n• Consistent morphology across beats\n• May be inverted in aVR (normal)\n• Biphasic in some leads (normal)'
          },
          {
            title: 'Duration',
            content: 'NORMAL: <0.12 seconds (3 small squares) ⏱️\n\n• Measure from beginning to end\n• Adult normal: 0.08-0.12 seconds\n• Pediatric: shorter durations\n• Wide P waves suggest atrial enlargement'
          },
          {
            title: 'Amplitude',
            content: 'NORMAL: <2.5mm height 📏\n\n• Measure from baseline to peak\n• Lead II typically shows best P waves\n• Tall P waves suggest right atrial enlargement\n• Small P waves may be normal variant'
          }
        ],
        hint: '📏 <0.12s, <2.5mm, smooth and upright!'
      },

      {
        id: 'p-wave-measurement-steps',
        title: 'P Wave Measurement Technique',
        type: 'steps',
        animation: 'fade',
        imageUrl: '/lessonimages/p-wave-measurement-technique.png',
        imageAlt: 'P wave measurement technique demonstration',
        audioUrl: '/lessonaudio/ecg-waveforms/p-wave-measurement.mp3',
        steps: [
          {
            number: 1,
            title: 'Identify P Wave',
            description: 'Find the small wave before QRS complex - Look in lead II for clearest P waves'
          },
          {
            number: 2,
            title: 'Mark Beginning',
            description: 'Find where P wave starts from baseline - Use calipers or ruler for precision'
          },
          {
            number: 3,
            title: 'Mark End',
            description: 'Find where P wave returns to baseline - Before PR segment begins'
          },
          {
            number: 4,
            title: 'Calculate Duration',
            description: 'Count squares × 0.04 seconds - Normal: 2-3 small squares (0.08-0.12s)'
          }
        ],
        hint: '📏 Beginning to end = P wave duration!'
      },

      {
        id: 'abnormal-p-waves',
        title: 'Abnormal P Wave Patterns',
        highlights: [
        '🎯 Wide P waves (>0.12s) = left atrial enlargement',
        '🎯 Tall P waves (>2.5mm) = right atrial enlargement',
        '🎯 Inverted P waves = abnormal origin'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/p-wave-analysis-overview.png',
        imageAlt: 'Abnormal P wave patterns and meanings',
        hint: '🚨 Abnormal P waves = atrial problems!'
      },

      {
        id: 'p-wave-lead-variations',
        title: 'P Wave in Different Leads',
        highlights: [
        '🎯 Lead II: Best for P wave analysis',
        '🎯 aVR: P wave normally inverted',
        '🎯 V1: May be biphasic'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/p-wave-analysis-overview.png',
        imageAlt: 'P wave appearance in different leads',
        hint: '📊 Different leads = different P wave views!'
      },

      {
        id: 'clinical-significance-p-wave',
        title: 'Clinical Significance of P Waves',
        highlights: [
        '🎯 P waves reveal atrial health',
        '🎯 Enlarged P waves indicate atrial enlargement',
        '🎯 Absent P waves suggest atrial fibrillation'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/p-wave-systematic-analysis.png',
        imageAlt: 'Clinical significance of P wave changes',
        hint: '🏥 P waves = atrial health indicators!'
      },

      {
        id: 'p-wave-detailed-audio',
        title: '🎵 P Wave Analysis Audio Guide',
        content: 'Listen to detailed P wave analysis techniques. Learn measurement methods, normal variations, and how to identify pathological P wave changes in clinical practice.',
        type: 'audio',
        layout: 'centered',
        animation: 'fade',
        imageUrl: '/lessonimages/p-wave-characteristics-nsr.png',
        imageAlt: 'P wave analysis audio guide',
        hint: '🔊 Master P wave analysis!'
      },

      // ==================== UNIT 2 QUIZ: P WAVE MASTERY ====================
      {
        id: 'unit2-p-wave-quiz',
        title: '🎯 Unit 2 Quiz: P Wave Mastery',
        content: "Test your P wave analysis skills!",
        type: 'quiz',
        layout: 'centered',
        animation: 'slide',
        imageUrl: '/lessonimages/normal-p-wave-detailed.png',
        imageAlt: 'P wave mastery quiz',
        hint: '🧠 Test your Unit 2 knowledge!',
        question: "What is the maximum normal duration for a P wave?",
        options: [
          "0.08 seconds",
          "0.12 seconds",
          "0.20 seconds",
          "0.24 seconds"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! The maximum normal P wave duration is 0.12 seconds (3 small squares). Longer P waves indicate delayed atrial conduction."
      },

      // ================================================
      // 🎯 UNIT 3: QRS COMPLEX (8 slides)
      // ================================================
      {
        id: 'unit3-intro',
        title: '🎯 Unit 3: QRS Complex',
        highlights: [
        '🎯 Master QRS complex analysis! Learn Q, R, and S wave components, normal duration and morphology, bundle branch patterns, and ventricular conduction abnormalities.'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/qrs-complex-components.png',
        imageAlt: 'QRS complex mastery overview',
        hint: '💪 QRS = ventricular power!'
      },

      {
        id: 'qrs-definition-components',
        title: 'QRS Complex: Ventricular Depolarization',
        highlights: [
        '🎯 QRS complex represents ventricular depolarization - the main pumping action',
        '🎯 Q = initial negative deflection, R = positive deflection, S = negative deflection after R',
        '🎯 The powerhouse of the heartbeat!'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/qrs-complex-components.png',
        imageAlt: 'QRS complex components Q, R, S waves',
        hint: '⚡ Q-R-S = ventricular activation sequence!'
      },

      {
        id: 'qrs-nomenclature',
        title: 'QRS Component Analysis',
        type: 'accordion',
        animation: 'fade',
        accordionItems: [
          {
            title: '⬇️ Q Wave (Initial Negative)',
            content: 'First negative deflection of QRS\n• Represents initial septal depolarization\n• Should be narrow (<0.04s) and small\n• Wide/deep Q waves = old heart attack'
          },
          {
            title: '⬆️ R Wave (Main Positive)',
            content: 'Positive deflection of QRS complex\n• Main ventricular depolarization\n• Tallest part of QRS in most leads\n• Progressive R wave increase V1→V6'
          },
          {
            title: '⬇️ S Wave (Final Negative)',
            content: 'Negative deflection after R wave\n• Completes ventricular depolarization\n• Deep in V1-V2, shallow in V5-V6\n• Normal progression pattern'
          },
          {
            title: '🔄 Special Patterns',
            content: 'QS Complex = all negative (no R wave)\n• R\' = second positive deflection\n• rS = small R, large S\n• Naming follows strict ECG rules'
          }
        ],
        hint: '📝 Q-R-S = systematic ventricular activation!'
      },

      {
        id: 'normal-qrs-characteristics',
        title: 'Normal QRS Characteristics',
        highlights: [
        '🎯 Normal QRS duration: <0.12 seconds (3 small squares)',
        '🎯 Amplitude varies by lead (tallest in V2-V4)',
        '🎯 Sharp, narrow appearance'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/qrs-duration-comparison.png',
        imageAlt: 'Normal QRS complex characteristics',
        hint: '📏 <0.12s = normal ventricular conduction!'
      },

      {
        id: 'wide-qrs-complexes',
        title: 'Wide QRS Complexes',
        highlights: [
        '🎯 Wide QRS (≥0.12s) indicates delayed ventricular conduction',
        '🎯 Causes: Bundle branch blocks, ventricular rhythms, hyperkalemia, drug effects',
        '🎯 Wide = abnormal conduction!'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/qrs-duration-comparison.png',
        imageAlt: 'Wide QRS complexes and causes',
        hint: '🚨 Wide QRS = conduction problem!'
      },

      {
        id: 'bundle-branch-patterns',
        title: 'Bundle Branch Block Analysis',
        type: 'flashcard',
        animation: 'fade',
        flashcard: {
          icon: '🛤️',
          question: 'How do you identify RBBB vs LBBB patterns?',
          answer: 'Look at leads V1 and V6 for the pattern! 📋\n\n• RBBB: RSR\' in V1, wide S in V6\n• LBBB: Wide R in V6, deep S in V1\n• Duration: ≥0.12 seconds (3 squares)\n• Remember: V1 and V6 are your guide leads!',
          category: 'clinical',
          difficulty: 'advanced'
        },
        hint: '🛤️ Flip to see BBB pattern rules!'
      },

      {
        id: 'qrs-axis-basics',
        title: 'QRS Axis Basics',
        highlights: [
        '🎯 QRS axis = overall direction of ventricular depolarization',
        '🎯 Normal axis: -30° to +90°',
        '🎯 Left axis deviation: -30° to -90°'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/qrs-duration-comparison.png',
        imageAlt: 'QRS axis and deviations',
        hint: '🧭 Axis = electrical direction!'
      },

      {
        id: 'qrs-analysis-audio',
        title: '🎵 QRS Complex Analysis Audio',
        content: 'Listen to comprehensive QRS complex analysis. Learn systematic approach to QRS evaluation, bundle branch block recognition, and clinical interpretation of ventricular conduction.',
        type: 'audio',
        layout: 'centered',
        animation: 'fade',
        audioUrl: '/lessonaudio/ecg-waveforms/qrs-complex-analysis.mp3',
        imageUrl: '/lessonimages/qrs-complex-components.png',
        imageAlt: 'QRS complex analysis audio',
        hint: '🔊 Master QRS interpretation!'
      },

      // ==================== UNIT 3 QUIZ: QRS COMPLEX ====================
      {
        id: 'unit3-qrs-quiz',
        title: '🎯 Unit 3 Quiz: QRS Complex',
        content: "Test your QRS complex knowledge!",
        type: 'quiz',
        layout: 'centered',
        animation: 'slide',
        imageUrl: '/lessonimages/qrs-complex-components.png',
        imageAlt: 'QRS complex quiz',
        hint: '🧠 Test your Unit 3 knowledge!',
        question: "What does a QRS duration ≥0.12 seconds indicate?",
        options: [
          "Normal ventricular conduction",
          "Delayed ventricular conduction",
          "Fast heart rate",
          "Atrial abnormality"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! A QRS duration ≥0.12 seconds indicates delayed ventricular conduction, such as bundle branch blocks or ventricular rhythms."
      },

      // ================================================
      // 🎯 UNIT 4: T WAVE ANALYSIS (8 slides)
      // ================================================
      {
        id: 'unit4-intro',
        title: '🎯 Unit 4: T Wave Analysis',
        highlights: [
        '🎯 Master T wave interpretation! Learn normal T wave morphology, repolarization patterns, T wave abnormalities, and their clinical significance in cardiac diagnosis.'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/t-wave-normal-vs-abnormal.png',
        imageAlt: 'T wave analysis overview',
        hint: '🔄 T wave = repolarization mastery!'
      },

      {
        id: 't-wave-definition',
        title: 'T Wave: Ventricular Repolarization',
        highlights: [
        '🎯 T wave represents ventricular repolarization - when the ventricles recover and prepare for the next beat',
        '🎯 It reflects the electrical recovery phase after contraction.'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/t-wave-normal-vs-abnormal.png',
        imageAlt: 'T wave representing ventricular repolarization',
        hint: '🔄 T = reTurning to baseline!'
      },

      {
        id: 'normal-t-wave-characteristics',
        title: 'Normal T Wave Characteristics',
        highlights: [
        '🎯 Normal T wave: Upright in most leads',
        '🎯 Asymmetric shape (slow upstroke, fast downstroke)',
        '🎯 Amplitude <5mm in limb leads, <10mm in chest leads'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/t-wave-normal-vs-abnormal.png',
        imageAlt: 'Normal T wave characteristics',
        hint: '📈 Asymmetric, upright, concordant!'
      },

      {
        id: 't-wave-morphology',
        title: 'T Wave Pattern Recognition',
        type: 'tabs',
        animation: 'fade',
        tabs: [
          {
            title: '✅ Normal T Waves',
            content: 'Asymmetric upright waves\n\n• Slow upstroke, fast downstroke\n• Concordant with QRS direction\n• <5mm limb leads, <10mm chest leads\n• Normal repolarization pattern'
          },
          {
            title: '⚠️ Peaked T Waves',
            content: 'Tall, narrow, symmetric\n\n• Often indicates hyperkalemia\n• Early sign of elevated K+\n• Can progress to sine wave pattern\n• Emergency if K+ >6.5 mEq/L'
          },
          {
            title: '🔻 Inverted T Waves',
            content: 'Downward deflection\n\n• Indicates ischemia or old MI\n• Location shows coronary territory\n• Deep inversions = severe disease\n• Serial changes important'
          },
          {
            title: '➖ Flat T Waves',
            content: 'Low amplitude, minimal deflection\n\n• May indicate early ischemia\n• Can suggest electrolyte abnormality\n• Less specific than other changes\n• Consider clinical context'
          }
        ],
        hint: '🎨 T wave shape reveals pathology!'
      },

      {
        id: 't-wave-inversions',
        title: 'T Wave Inversions',
        highlights: [
        '🎯 Inverted T waves indicate abnormality in most leads',
        '🎯 Causes: Ischemia, previous MI, ventricular strain, electrolyte imbalances',
        '🎯 Location helps identify affected coronary territory.'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/t-wave-normal-vs-abnormal.png',
        imageAlt: 'T wave inversions and causes',
        hint: '🔻 Inverted T waves = cardiac pathology!'
      },

      {
        id: 'qt-interval-t-wave',
        title: 'QT Interval and T Wave',
        highlights: [
        '🎯 QT interval includes T wave duration',
        '🎯 Prolonged QT increases arrhythmia risk',
        '🎯 T wave abnormalities can affect QT measurement'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/qt-interval-t-wave.png',
        imageAlt: 'QT interval and T wave relationship',
        hint: '⏱️ QT interval includes T wave!'
      },

      {
        id: 'electrolyte-t-waves',
        title: 'Electrolyte Effects on T Waves',
        highlights: [
        '🎯 Hyperkalemia: Tall, peaked, symmetric T waves',
        '🎯 Hypokalemia: Flat T waves, U waves',
        '🎯 Hypercalcemia: Short QT, flat T waves'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/electrolyte-t-waves.png',
        imageAlt: 'Electrolyte effects on T waves',
        hint: '🧪 Electrolytes change T wave shape!'
      },

      {
        id: 't-wave-clinical-audio',
        title: '🎵 T Wave Clinical Analysis Audio',
        content: 'Listen to advanced T wave clinical interpretation. Learn to recognize ischemic patterns, electrolyte effects, and drug-induced T wave changes in clinical practice.',
        type: 'audio',
        layout: 'centered',
        animation: 'fade',
        audioUrl: '/lessonaudio/ecg-waveforms/t-wave-clinical.mp3',
        imageUrl: '/lessonimages/t-wave-normal.png',
        imageAlt: 'T wave clinical analysis audio',
        hint: '🔊 Clinical T wave expertise!'
      },

      // ==================== UNIT 4 QUIZ: T WAVE ANALYSIS ====================
      {
        id: 'unit4-t-wave-quiz',
        title: '🎯 Unit 4 Quiz: T Wave Analysis',
        content: "Test your T wave interpretation skills!",
        type: 'quiz',
        layout: 'centered',
        animation: 'slide',
        imageUrl: '/lessonimages/t-wave-normal.png',
        imageAlt: 'T wave analysis quiz',
        hint: '🧠 Test your Unit 4 knowledge!',
        question: "What do tall, peaked, symmetric T waves typically indicate?",
        options: [
          "Normal variant",
          "Hypokalemia",
          "Hyperkalemia",
          "Hypocalcemia"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! Tall, peaked, symmetric T waves are characteristic of hyperkalemia (elevated potassium levels), which can be life-threatening."
      },

      // ================================================
      // 🎯 UNIT 5: WAVEFORM INTEGRATION (8 slides)
      // ================================================
      {
        id: 'unit5-intro',
        title: '🎯 Unit 5: Waveform Integration',
        highlights: [
        '🎯 Master complete waveform analysis! Learn to integrate P-QRS-T analysis, measure intervals, assess morphology relationships, and perform systematic ECG interpretation.'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/basic-ecg-waveforms.png',
        imageAlt: 'Complete waveform integration overview',
        hint: '🔗 Integration = complete analysis!'
      },

      {
        id: 'systematic-waveform-analysis',
        title: 'Systematic ECG Analysis Steps',
        type: 'steps',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Rate & Rhythm',
            description: 'Calculate heart rate and assess rhythm regularity'
          },
          {
            number: 2,
            title: 'P Wave Analysis',
            description: 'Evaluate P wave presence, morphology, and relationship to QRS'
          },
          {
            number: 3,
            title: 'QRS Complex',
            description: 'Assess QRS duration, morphology, and axis'
          },
          {
            number: 4,
            title: 'T Wave Assessment',
            description: 'Examine T wave morphology and concordance'
          },
          {
            number: 5,
            title: 'Interval Measurements',
            description: 'Measure PR, QRS, and QT intervals systematically'
          },
          {
            number: 6,
            title: 'Clinical Integration',
            description: 'Combine findings for complete interpretation'
          }
        ],
        hint: '📋 6 steps = complete ECG mastery!'
      },

      {
        id: 'pr-interval-analysis',
        title: 'PR Interval Analysis',
        highlights: [
        '🎯 PR interval: From P wave start to QRS start',
        '🎯 Normal: 0.12-0.20 seconds',
        '🎯 Short PR: Pre-excitation syndromes'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/p-qrs-t-wave-sequence.png',
        imageAlt: 'PR interval measurement and significance',
        hint: '⏱️ PR = AV conduction time!'
      },

      {
        id: 'qt-interval-analysis',
        title: 'QT Interval Analysis',
        highlights: [
        '🎯 QT interval: From QRS start to T wave end',
        '🎯 Corrected QT (QTc): Adjusts for heart rate',
        '🎯 Normal QTc: <440ms (men), <460ms (women)'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/qt-interval.png',
        imageAlt: 'QT interval measurement and correction',
        hint: '📏 QTc = rate-corrected repolarization time!'
      },

      {
        id: 'st-segment-analysis',
        title: 'ST Segment Analysis',
        highlights: [
        '🎯 ST segment: From QRS end to T wave start',
        '🎯 Should be isoelectric (on baseline)',
        '🎯 ST elevation: Acute MI'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/st-segment.png',
        imageAlt: 'ST segment analysis and measurement',
        hint: '📊 ST segment = ischemia indicator!'
      },

      {
        id: 'waveform-relationships',
        title: 'Waveform Relationships',
        highlights: [
        '🎯 P-QRS relationship: Each P should have a QRS',
        '🎯 QRS-T concordance: T wave follows QRS direction',
        '🎯 Morphology consistency: Waveforms should look similar across beats.'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/waveform-relationships.png',
        imageAlt: 'ECG waveform relationships and patterns',
        hint: '🔗 Relationships reveal rhythm secrets!'
      },

      {
        id: 'rhythm-vs-morphology',
        title: 'Rhythm vs Morphology Analysis',
        highlights: [
        '🎯 Rhythm analysis: Rate, regularity, P-QRS relationship',
        '🎯 Morphology analysis: Wave shapes, durations, amplitudes',
        '🎯 Both needed for complete interpretation'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/rhythm-morphology.png',
        imageAlt: 'Rhythm versus morphology analysis',
        hint: '🎵 Rhythm + morphology = complete picture!'
      },

      {
        id: 'waveform-integration-video',
        title: '🎥 Complete Waveform Analysis Video',
        content: 'Watch systematic ECG waveform analysis in action. See how to integrate P-QRS-T evaluation with interval measurements for comprehensive ECG interpretation.',
        type: 'video',
        layout: 'centered',
        animation: 'fade',
        videoUrl: '/lessonvideos/ecg-waveform-analysis.mp4',
        imageUrl: '/lessonimages/complete-ecg-cycle.png',
        imageAlt: 'Complete waveform analysis video',
        hint: '🎬 See integration in practice!'
      },

      // ==================== UNIT 5 QUIZ: WAVEFORM INTEGRATION ====================
      {
        id: 'unit5-integration-quiz',
        title: '🎯 Unit 5 Quiz: Waveform Integration',
        content: "Test your waveform integration skills!",
        type: 'quiz',
        layout: 'centered',
        animation: 'slide',
        imageUrl: '/lessonimages/complete-ecg-cycle.png',
        imageAlt: 'Waveform integration quiz',
        hint: '🧠 Test your Unit 5 knowledge!',
        question: "What is the normal range for the PR interval?",
        options: [
          "0.08-0.12 seconds",
          "0.12-0.20 seconds",
          "0.20-0.24 seconds",
          "0.24-0.32 seconds"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! The normal PR interval is 0.12-0.20 seconds, representing the time for electrical conduction from atria through the AV node to ventricles."
      },

      // ================================================
      // 🎯 UNIT 6: CLINICAL INTERPRETATION (7 slides)
      // ================================================
      {
        id: 'unit6-intro',
        title: '🎯 Unit 6: Clinical Interpretation',
        highlights: [
        '🎯 Apply waveform knowledge in clinical practice! Learn to recognize pathological patterns, make clinical correlations, and understand the diagnostic significance of waveform abnormalities.'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/clinical-ecg.png',
        imageAlt: 'Clinical ECG interpretation overview',
        hint: '🏥 Clinical application mastery!'
      },

      {
        id: 'pathological-patterns',
        title: 'Common Pathological Patterns',
        highlights: [
        '🎯 STEMI: ST elevation, abnormal Q waves',
        '🎯 NSTEMI: ST depression, T inversions',
        '🎯 Bundle blocks: Wide QRS patterns'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/pathological-patterns.png',
        imageAlt: 'Common pathological ECG patterns',
        hint: '🚨 Patterns = rapid diagnosis!'
      },

      {
        id: 'acute-mi-waveforms',
        title: 'Acute MI Waveform Evolution',
        highlights: [
        '🎯 Hyperacute T waves → ST elevation → Q wave development → T wave inversion → Normalization (or persistent changes)',
        '🎯 Evolution helps time the MI and guide treatment.'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/mi-evolution.png',
        imageAlt: 'Acute MI waveform evolution stages',
        hint: '⏰ Evolution = MI timing!'
      },

      {
        id: 'ischemic-patterns',
        title: 'Ischemic Waveform Patterns',
        highlights: [
          '🎯 ST depression: Subendocardial ischemia pattern',
          '🎯 T wave inversions: Previous ischemia/infarction indicator',
          '🎯 Pseudonormalization: Acute posterior ischemia sign',
          '🎯 Wellens\' signs: LAD stenosis warning patterns',
          '🎯 Recognition is critical for patient safety'
        ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/ischemic-patterns.png',
        imageAlt: 'Ischemic ECG waveform patterns',
        hint: '💔 Ischemia = specific patterns!'
      },

      {
        id: 'drug-electrolyte-effects',
        title: 'Drug and Electrolyte Effects',
        highlights: [
        '🎯 Digoxin: ST scooping',
        '🎯 Quinidine: QT prolongation',
        '🎯 Hyperkalemia: Peaked T waves'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/drug-electrolyte-effects.png',
        imageAlt: 'Drug and electrolyte effects on ECG',
        hint: '💊 Drugs/electrolytes = ECG mimics!'
      },

      {
        id: 'clinical-correlation',
        title: 'Clinical Correlation Importance',
        highlights: [
        '🎯 Always correlate ECG with clinical picture! Patient symptoms, vital signs, and history guide interpretation',
        '🎯 ECG changes without symptoms may be old',
        '🎯 Context is everything!'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/clinical-correlation.png',
        imageAlt: 'Clinical correlation with ECG findings',
        hint: '🩺 Clinical context = accurate diagnosis!'
      },

      {
        id: 'waveforms-mastery-celebration',
        title: '🎉 ECG Waveforms Mastery!',
        content: 'Congratulations! You\'ve mastered ECG waveform analysis! You can now systematically evaluate P-QRS-T morphology, measure intervals, and interpret clinical significance!',
        type: 'audio',
        layout: 'centered',
        animation: 'fade',
        imageUrl: '/lessonimages/ecg-waveform-overview.png',
        imageAlt: 'ECG waveforms mastery celebration',
        hint: '🏆 You\'re a waveform expert!'
      },

      // ==================== UNIT 6 QUIZ: CLINICAL INTERPRETATION ====================
      {
        id: 'unit6-clinical-quiz',
        title: '🎯 Unit 6 Quiz: Clinical Interpretation',
        content: "Test your clinical interpretation skills!",
        type: 'quiz',
        layout: 'centered',
        animation: 'slide',
        imageUrl: '/lessonimages/clinical-ecg.png',
        imageAlt: 'Clinical interpretation quiz',
        hint: '🧠 Test your Unit 6 knowledge!',
        question: "ST elevation in leads II, III, and aVF indicates which coronary territory?",
        options: [
          "Anterior wall (LAD)",
          "Lateral wall (LCX)",
          "Inferior wall (RCA)",
          "Posterior wall"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! ST elevation in leads II, III, and aVF indicates inferior wall MI, typically involving the right coronary artery (RCA) territory."
      }
    ],
    summary: "🎉 Congratulations! You've mastered complete ECG waveform analysis through 6 progressive units: Waveform Fundamentals, P Wave Mastery, QRS Complex, T Wave Analysis, Waveform Integration, and Clinical Interpretation!",
    keyPoints: [
      "📊 Waveform fundamentals: P-QRS-T sequence represents complete cardiac electrical cycle",
      "📈 P wave mastery: Atrial depolarization, <0.12s duration, upright in I/II/aVF, smooth morphology",
      "💪 QRS complex: Ventricular depolarization, <0.12s width, Q-R-S components, conduction patterns",
      "🔄 T wave analysis: Ventricular repolarization, asymmetric morphology, concordance with QRS",
      "🔗 Waveform integration: Systematic analysis, interval measurements, morphology relationships",
      "🏥 Clinical interpretation: Pattern recognition, MI evolution, ischemic changes, drug effects"
    ],
    resources: [
      {
        title: "Interactive ECG Waveform Atlas",
        url: "/resources/waveform-atlas",
        type: "tool",
        description: "Comprehensive atlas of normal and abnormal ECG waveforms"
      },
      {
        title: "Waveform Measurement Simulator",
        url: "/resources/waveform-measurement",
        type: "tool",
        description: "Practice precise waveform measurements and analysis"
      },
      {
        title: "Clinical Pattern Recognition Tool",
        url: "/resources/pattern-recognition",
        type: "tool",
        description: "Learn to recognize pathological waveform patterns"
      }
    ]
  },
  
  // ============= ENHANCED DUOLINGO-STYLE TASKS (Final Assessment Only) =============
  tasks: [
    
    // ==================== FINAL WAVEFORMS MASTERY ASSESSMENT ====================
    {
      id: 'final-waveforms-mastery-assessment',
      type: 'final-assessment',
      xp: 50,
      audio: {
        mainNarration: {
          audioUrl: '/lessonaudio/ecg-waveforms/waveforms-mastery-celebration.mp3',
          duration: 10,
          transcript: "Congratulations on completing all 6 units of ECG waveform mastery! You've learned fundamentals, P waves, QRS complexes, T waves, integration, and clinical interpretation. Now prove your expertise!"
        }
      },
      images: {
        mainImage: '/lessonimages/ecg-waveform-overview.png',
        slideImages: []
      },
      content: {
        prerequisiteMessage: "🏆 Final Assessment: Complete all 6 units to unlock your ECG Waveforms Mastery Certificate!",
        questions: [
          {
            id: "waveform-sequence-mastery",
            type: "multiple-choice",
            question: "In a normal heartbeat, which sequence correctly represents the electrical events?",
            options: [
              "P wave → T wave → QRS complex",
              "QRS complex → P wave → T wave",
              "P wave → QRS complex → T wave",
              "T wave → QRS complex → P wave"
            ],
            correctAnswer: 2,
            explanation: "✅ Correct! Normal sequence is P wave (atrial depolarization) → QRS complex (ventricular depolarization) → T wave (ventricular repolarization).",
            imageUrl: "/lessonimages/ecg-waveform-overview.png"
          },
          {
            id: "qrs-duration-significance",
            type: "multiple-choice",
            question: "A QRS complex duration of 0.14 seconds indicates:",
            options: [
              "Normal ventricular conduction",
              "Delayed ventricular conduction",
              "Fast heart rate",
              "Atrial abnormality"
            ],
            correctAnswer: 1,
            explanation: "✅ Correct! QRS duration ≥0.12 seconds indicates delayed ventricular conduction, such as bundle branch blocks or ventricular rhythms.",
            imageUrl: "/lessonimages/qrs-complex-components.png"
          },
          {
            id: "t-wave-clinical-significance",
            type: "multiple-choice",
            question: "Symmetric, peaked T waves are most characteristic of:",
            options: [
              "Normal variant",
              "Hyperkalemia",
              "Hypokalemia",
              "Digitalis effect"
            ],
            correctAnswer: 1,
            explanation: "✅ Correct! Symmetric, peaked T waves are characteristic of hyperkalemia and require immediate attention as this can be life-threatening.",
            imageUrl: "/ecg/medical_accurate/normal_sinus_60bpm_1.png"
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
