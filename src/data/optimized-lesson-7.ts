import { Lesson } from '@/types/learning';

// ENHANCED LESSON 7: Complete Normal ECG Variations Mastery - Duolingo-Style Units
export const optimizedLesson7: Lesson = {
  id: 'module-1-lesson-7',
  moduleId: 'module-1',
  title: "Complete Normal ECG Variations Mastery",
  description: "Master normal ECG variations through 6 focused learning units: Age Variants, Gender Differences, Positional Changes, Athletic Hearts, Population Variations, and Clinical Recognition - each with interactive content and quizzes",
  order: 7,
  estimatedTime: 45,
  content: {
    type: 'mixed',
    introduction: "📊 Welcome to Normal ECG Variations Mastery! Learn to recognize normal variants that prevent misdiagnosis through 6 progressive units with slides, audio, video, and quizzes.",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your Learning Journey",
        content: "UNIT 1: Age Variants → UNIT 2: Gender Differences → UNIT 3: Positional Changes → UNIT 4: Athletic Hearts → UNIT 5: Population Variations → UNIT 6: Clinical Recognition",
        mediaType: 'image'
      }
    ],
    slides: [
    
      // ===============================================
      // 🎯 UNIT 1: AGE VARIANTS (7 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: Age Variants',
        content: 'Start your normal variations journey! Learn how ECG patterns change naturally with age from newborns to elderly - what\'s normal at different life stages.',
        type: 'highlight',
        layout: 'centered',
        animation: 'fade',
        imageUrl: '/lessonimages/age-related-ecg-changes.png',
        imageAlt: 'Age-related ECG variants overview for foundation learning',
        highlights: [
          '👶 Pediatric normal variants',
          '🧑 Adult pattern evolution',
          '👴 Elderly ECG changes', 
          '📈 Age-specific normal ranges'
        ],
        hint: '🚀 Age changes everything!'
      },

      // 🎬 YOUTUBE VIDEO: Day 2 - The P Wave
      {
        id: 'youtube-day2-p-wave',
        title: '🎬 Day 2: The P Wave on ECG',
        content: 'Understanding P waves - atrial depolarization and normal variations. Essential foundation for recognizing P wave variations across age groups!',
        type: 'youtube',
        youtubeId: 'jfRil3V0Wkw',
        videoDuration: 600,
        minimumWatchTime: 480,
        requireFullWatch: true,
        backgroundColor: '#fefce8',
        textColor: '#a16207',
        animation: 'fade',
        hint: '🔍 P wave fundamentals - critical for variations!'
      },

      // 🎬 YOUTUBE VIDEO: Day 3 - QRS Complex
      {
        id: 'youtube-day3-qrs-complex',
        title: '🎬 Day 3: QRS Complex In Action',
        content: 'QRS complex analysis - ventricular depolarization patterns and normal variations. Perfect for understanding how QRS changes with age!',
        type: 'youtube',
        youtubeId: 'XW1sYQSUAs8',
        videoDuration: 600,
        minimumWatchTime: 480,
        requireFullWatch: true,
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        hint: '⚡ QRS variations across different populations!'
      },
      
      {
        id: 'pediatric-variants',
        title: 'Pediatric ECG Variants',
        type: 'flashcard',
        icon: '👶',
        flashcardFront: 'What\'s normal in children\'s ECGs?',
        flashcardBack: 'Faster rates (100-150 bpm)! Right axis deviation, shorter intervals, T inversions V1-V3 until teens. Growing hearts = changing patterns! 👶💓',
        animation: 'fade',
        hint: '👶 Kids\' hearts are different!'
      },

      {
        id: 'pediatric-details',
        title: 'Age-Specific Normal Patterns',
        type: 'steps',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Newborn (0-1 month)',
            description: 'HR: 110-150 bpm, Right axis deviation normal, T wave inversions V1-V6 common'
          },
          {
            number: 2,
            title: 'Infant (1-12 months)',
            description: 'HR: 100-150 bpm, Gradual leftward axis shift, T inversions V1-V4 still normal'
          },
          {
            number: 3,
            title: 'Child (1-12 years)',
            description: 'HR: 80-120 bpm, Adult-like axis, T inversions V1-V3 normal until age 8-12'
          },
          {
            number: 4,
            title: 'Adolescent (12-18 years)',
            description: 'HR: 60-100 bpm, Adult patterns emerge, Juvenile T inversions disappear'
          }
        ],
        hint: '📈 Each age has its normal!'
      },

      {
        id: 'adult-aging-changes',
        title: 'Adult Aging Progression',
        type: 'tabs',
        animation: 'fade',
        tabs: [
          {
            title: '🧑 Young Adult (18-40)',
            content: 'Stable patterns established\n\n• HR: 60-100 bpm typical\n• Consistent axis\n• Sharp waveforms\n• Minimal variations'
          },
          {
            title: '👨‍💼 Middle Age (40-65)', 
            content: 'Subtle changes begin\n\n• Slight PR lengthening\n• Minor axis shifts\n• Small voltage changes\n• Still within normal'
          },
          {
            title: '👴 Elderly (65+)',
            content: 'Normal aging effects\n\n• Longer PR intervals\n• Left axis shift\n• Lower voltages\n• Wider QRS acceptable'
          }
        ],
        hint: '🔄 Aging is normal!'
      },

      {
        id: 'elderly-normal-changes',
        title: 'Normal Elderly ECG Changes',
        type: 'accordion',
        animation: 'fade',
        accordionItems: [
          {
            title: '📏 Interval Changes',
            content: 'PR interval: Up to 220ms acceptable\nQRS: Slight widening to 110ms normal\nQT: May lengthen slightly with age'
          },
          {
            title: '⚡ Voltage Changes', 
            content: 'Lower limb lead voltages common\nLess prominent precordial forces\nNot necessarily pathological'
          },
          {
            title: '📐 Axis Shifts',
            content: 'Left axis deviation more common\nUsually benign age-related change\nReflects normal cardiac aging'
          },
          {
            title: '🔍 Recognition Key',
            content: 'Know age-appropriate normals\nAvoid over-interpretation\nContext is crucial for diagnosis'
          }
        ],
        hint: '👴 Aging gracefully includes the ECG!'
      },

      {
        id: 'age-interpretation-tips',
        title: 'Age-Based Interpretation',
        type: 'flashcard',
        animation: 'fade',
        flashcardFront: 'How do you interpret ECGs across ages?',
        flashcardBack: 'Use AGE-APPROPRIATE normals! What\'s abnormal in adults may be normal in children and vice versa. Always consider the patient\'s age first! 📊',
        hint: '📊 Age context is everything!'
      },

      {
        id: 'age-variants-audio',
        title: '🎵 Age Variants Audio Guide',
        content: 'Listen to detailed explanation of normal ECG variants across different age groups with examples and clinical significance.',
        type: 'audio',
        layout: 'centered',
        animation: 'fade',
        imageUrl: '/lessonimages/age-related-ecg-changes.png',
        imageAlt: 'Age variants audio lesson',
        hint: '🔊 Listen to age-related ECG wisdom!'
      },

      // ==================== UNIT 1 QUIZ: AGE VARIANTS ====================
      {
        id: 'unit1-age-quiz',
        title: '🎯 Unit 1 Quiz: Age Variants',
        content: "Test your knowledge of age-related ECG variants!",
        type: 'quiz',
        layout: 'centered',
        animation: 'slide',
        imageUrl: '/lessonimages/age-related-ecg-changes.png',
        imageAlt: 'Age variants quiz',
        hint: '🧠 Test your Unit 1 knowledge!',
        question: "T wave inversions in leads V1-V3 in a 10-year-old child are:",
        options: [
          "Always abnormal and require immediate evaluation",
          "Normal variant (juvenile T waves) until adolescence", 
          "Sign of heart disease in children",
          "Only normal in newborns"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! T wave inversions in V1-V3 are normal juvenile variants in children and typically disappear during adolescence as adult patterns emerge."
      },

      // ================================================
      // 🎯 UNIT 2: GENDER DIFFERENCES (8 slides)
      // ================================================
      {
        id: 'unit2-intro',
        title: '🎯 Unit 2: Gender Differences',
        content: 'Master gender-specific ECG variations! Learn how male and female hearts show different normal patterns and why these differences matter clinically.',
        type: 'highlight',
        layout: 'centered',
        animation: 'fade',
        imageUrl: '/lessonimages/gender-ecg-differences.png',
        imageAlt: 'Gender-specific ECG patterns overview',
        highlights: [
          '♀️ Female normal variants',
          '♂️ Male pattern differences',
          '⚡ Voltage variations',
          '📏 Interval differences'
        ],
        hint: '⚖️ Gender matters in ECG!'
      },

      {
        id: 'female-ecg-patterns',
        title: 'Female ECG Characteristics',
        type: 'steps',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Heart Rate',
            description: 'Typically 5-10 bpm faster than males due to smaller heart size and higher sympathetic tone'
          },
          {
            number: 2,
            title: 'QT Interval',
            description: 'Naturally longer QT intervals - higher risk for drug-induced torsades de pointes'
          },
          {
            number: 3,
            title: 'Voltages',
            description: 'Generally lower QRS voltages due to smaller heart size and breast tissue'
          },
          {
            number: 4,
            title: 'ST Segments',
            description: 'More likely to have benign early repolarization patterns in precordial leads'
          }
        ],
        hint: '♀️ Female hearts have unique normals!'
      },

      {
        id: 'male-ecg-patterns',
        title: 'Male ECG Characteristics',
        type: 'accordion',
        animation: 'fade',
        accordionItems: [
          {
            title: '💪 Higher Voltages',
            content: 'Larger heart size and muscle mass\nLess breast tissue attenuation\nMore prominent R waves in precordial leads'
          },
          {
            title: '📏 Shorter QT',
            content: 'Naturally shorter QT intervals\nLower risk for torsades de pointes\nTestosterone effects on repolarization'
          },
          {
            title: '⚡ Early Repolarization',
            content: 'More common benign early repolarization\nJ-point elevation and notching\nParticularly in young males'
          },
          {
            title: '🔄 Rate Differences',
            content: 'Slightly slower resting heart rates\nHigher vagal tone influence\nLarger stroke volume compensation'
          }
        ],
        hint: '♂️ Male patterns reflect physiology!'
      },

      {
        id: 'qt-interval-gender',
        title: 'QT Interval Gender Differences',
        type: 'flashcard',
        animation: 'fade',
        flashcardFront: 'Why do women have longer QT intervals?',
        flashcardBack: 'Hormonal effects! Estrogen lengthens QT, testosterone shortens it. Women have 10-15ms longer QTc - important for drug safety! ⚡♀️',
        hint: '⚡ Hormones affect electrical timing!'
      },

      {
        id: 'voltage-criteria-gender',
        title: 'Gender-Adjusted Voltage Criteria',
        type: 'tabs',
        animation: 'fade',
        tabs: [
          {
            title: '📊 LVH Criteria',
            content: 'Cornell criteria adjusted for gender\n\n• Males: S(V3) + R(aVL) ≥ 28mm\n• Females: S(V3) + R(aVL) ≥ 20mm\n• Accounts for physiological differences'
          },
          {
            title: '⚡ Low Voltage',
            content: 'Different thresholds needed\n\n• Consider breast tissue in females\n• Body habitus effects\n• Age-related changes\n• Gender-specific normals'
          },
          {
            title: '🔍 Clinical Impact',
            content: 'Avoid misdiagnosis\n\n• Don\'t over-call LVH in males\n• Don\'t under-diagnose in females\n• Use appropriate criteria\n• Consider clinical context'
          }
        ],
        hint: '📏 One size doesn\'t fit all!'
      },

      {
        id: 'hormonal-effects',
        title: 'Hormonal Effects on ECG',
        type: 'accordion',
        animation: 'fade',
        accordionItems: [
          {
            title: '🌸 Estrogen Effects',
            content: 'Lengthens QT interval\nMay enhance early repolarization\nAffects autonomic balance\nCycle-related variations possible'
          },
          {
            title: '💪 Testosterone Effects',
            content: 'Shortens QT interval\nIncreases voltage amplitudes\nMay promote early repolarization\nInfluences autonomic tone'
          },
          {
            title: '🤰 Pregnancy Changes',
            content: 'Left axis shift common\nST depression in inferior leads\nQ waves in III, aVF possible\nRate increase normal'
          },
          {
            title: '📉 Menopause Effects',
            content: 'QT interval may shorten\nVoltage changes possible\nIncreased arrhythmia risk\nAutonomic changes'
          }
        ],
        hint: '🧬 Hormones shape the ECG!'
      },

      {
        id: 'gender-clinical-pearls',
        title: 'Clinical Pearls: Gender & ECG',
        type: 'steps',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Drug Safety',
            description: 'Women at higher risk for drug-induced QT prolongation - monitor closely'
          },
          {
            number: 2,
            title: 'Diagnostic Criteria',
            description: 'Use gender-adjusted criteria for LVH and other voltage-based diagnoses'
          },
          {
            number: 3,
            title: 'Normal Variants',
            description: 'Early repolarization more common in young males - usually benign'
          },
          {
            number: 4,
            title: 'Pregnancy Awareness',
            description: 'Normal pregnancy changes can mimic pathology - know the patterns'
          }
        ],
        hint: '💡 Gender-smart interpretation!'
      },

      // Add Audio lesson for Unit 2
      {
        id: 'gender-differences-audio',
        title: '🎵 Gender ECG Differences',
        content: 'Listen to comprehensive analysis of male and female ECG differences with clinical examples and interpretation guidelines.',
        type: 'audio',
        layout: 'centered',
        animation: 'fade',
        audioUrl: '/lessonaudio/normal-variants/gender-differences-analysis.mp3',
        imageUrl: '/lessonimages/gender-ecg-differences.png',
        imageAlt: 'Gender differences audio lesson',
        hint: '🔊 Master gender-specific patterns!'
      },

      // ==================== UNIT 2 QUIZ: GENDER DIFFERENCES ====================
      {
        id: 'unit2-gender-quiz',
        title: '🎯 Unit 2 Quiz: Gender Differences',
        content: "Test your knowledge of gender-specific ECG patterns!",
        type: 'quiz',
        layout: 'centered',
        animation: 'slide',
        imageUrl: '/lessonimages/gender-ecg-differences.png',
        imageAlt: 'Gender differences quiz',
        hint: '🧠 Test your Unit 2 knowledge!',
        question: "Why should women be monitored more carefully for drug-induced QT prolongation?",
        options: [
          "Women take more medications than men",
          "Women naturally have longer QT intervals making them more susceptible",
          "Women have weaker hearts than men",
          "Women metabolize drugs differently"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Women naturally have longer QT intervals due to hormonal effects (estrogen), making them more susceptible to drug-induced QT prolongation and torsades de pointes."
      },

      // ================================================
      // 🎯 UNIT 3: POSITIONAL CHANGES (8 slides)
      // ================================================
      {
        id: 'unit3-intro',
        title: '🎯 Unit 3: Positional Changes',
        content: 'Master positional ECG variations! Learn how body position, lead placement, and technical factors create normal variants that shouldn\'t be mistaken for pathology.',
        type: 'highlight',
        layout: 'centered',
        animation: 'fade',
        imageUrl: '/lessonimages/positional-ecg-changes.png',
        imageAlt: 'Positional ECG changes overview',
        highlights: [
          '🔄 Position-dependent changes',
          '📐 Lead placement effects',
          '🫁 Respiratory variations',
          '🏥 Technical artifacts'
        ],
        hint: '📐 Position changes everything!'
      },

    {
      id: 'elderly-variants',
      title: 'Elderly ECG Variants',
      highlights: [
        '🎯 ELDERLY: Slower heart rates common',
        '🎯 Longer PR, QRS, QT intervals',
        '🎯 First-degree AV block frequent'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/lessonimages/elderly-ecg-variants.png',
      imageAlt: 'Elderly ECG normal variants',
      hint: '👴 Slower but often still normal!'
    },
    {
      id: 'age-interpretation-principles',
      title: 'Age-Based Interpretation Principles',
      highlights: [
        '🎯 REMEMBER: Compare to age-appropriate normals',
        '🎯 Consider developmental stage carefully',
        '🎯 Don\'t apply adult criteria to children',
        '🎯 Don\'t pathologize normal aging changes',
        '🎯 Context is everything in interpretation'
      ],
      type: 'highlight',
      animation: 'fade',
      imageUrl: '/lessonimages/age-interpretation.png',
      imageAlt: 'Age-based interpretation principles',
      hint: '🎯 Age-appropriate interpretation!'
    },

    // UNIT 1 QUIZ
    {
      id: 'unit1-age-quiz',
      title: '🎯 Unit 1 Quiz: Age Variants',
      content: "Test your knowledge of age-related ECG variants!",
      type: 'quiz',
      layout: 'centered',
      animation: 'slide',
      imageUrl: '/lessonimages/age-related-ecg-changes.png',
      imageAlt: 'Age variants quiz',
      hint: '🧠 Test your Unit 1 knowledge!',
      question: "T wave inversions in leads V1-V3 in a 10-year-old child are:",
      options: [
        "Always pathological and require investigation",
        "Normal variants that may persist into teens",
        "Signs of right heart strain",
        "Indicative of ischemia"
      ],
      correctAnswer: 1,
      explanation: "✅ Correct! T wave inversions in V1-V3 are normal variants in children and may persist into the teenage years as part of normal development."
    },

    // ===============================================
    // 🎯 UNIT 2: GENDER DIFFERENCES (8 slides)
    // ===============================================
    {
      id: 'unit2-intro',
      title: '🎯 Unit 2: Gender Differences',
      highlights: [
        '🎯 Master gender-based ECG differences! Learn how hormones, anatomy, and physiology create normal differences between male and female ECG patterns.'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/lessonimages/gender-ecg-differences.png',
      imageAlt: 'Gender differences overview',
      hint: '♀️♂️ Gender creates normal differences!'
    },
    {
      id: 'female-ecg-patterns',
      title: 'Female ECG Characteristics',
      highlights: [
        '🎯 WOMEN: Faster baseline heart rates',
        '🎯 Shorter QT intervals (corrected for rate)',
        '🎯 Smaller R wave amplitudes'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/lessonimages/female-ecg-patterns.png',
      imageAlt: 'Female ECG characteristics',
      hint: '♀️ Female patterns are distinctive!'
    },
    {
      id: 'male-ecg-patterns',
      title: 'Male ECG Characteristics',
      highlights: [
        '🎯 MEN: Larger QRS voltages overall',
        '🎯 More prominent Q waves in III, aVF',
        '🎯 Early repolarization more common'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/lessonimages/male-ecg-patterns.png',
      imageAlt: 'Male ECG characteristics',
      hint: '♂️ Male patterns show higher voltages!'
    },
    {
      id: 'hormonal-influences',
      title: 'Hormonal Influences on ECG',
      highlights: [
        '🎯 ESTROGEN: Affects QT interval, repolarization',
        '🎯 TESTOSTERONE: Influences voltage, axis',
        '🎯 MENSTRUAL CYCLE: May cause minor QT variations'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/lessonimages/hormonal-influences.png',
      imageAlt: 'Hormonal influences on ECG',
      hint: '🧬 Hormones shape ECG patterns!'
    },
    {
      id: 'pregnancy-ecg-changes',
      title: 'Pregnancy ECG Changes',
      highlights: [
        '🎯 PREGNANCY: Heart rate increases 10-15 bpm',
        '🎯 Left axis shift (enlarged uterus)',
        '🎯 QT interval may shorten'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/lessonimages/pregnancy-ecg-changes.png',
      imageAlt: 'Pregnancy-related ECG changes',
      hint: '🤰 Pregnancy creates predictable changes!'
    },
    {
      id: 'gender-specific-criteria',
      title: 'Gender-Specific Diagnostic Criteria',
      highlights: [
        '🎯 LVH CRITERIA: Different voltage thresholds for men/women',
        '🎯 QT INTERVALS: Gender-specific upper limits',
        '🎯 AXIS: Different normal ranges by gender',
        '🎯 Don\'t apply male criteria to females!',
        '🎯 Always consider gender in interpretation'
      ],
      type: 'highlight',
      animation: 'fade',
      imageUrl: '/lessonimages/gender-criteria.png',
      imageAlt: 'Gender-specific diagnostic criteria',
      hint: '📏 Different criteria for different genders!'
    },

    {
      id: 'gender-interpretation-pitfalls',
      title: 'Gender Interpretation Pitfalls',
      highlights: [
        '🎯 AVOID: Using male-only reference ranges',
        '🎯 REMEMBER: Hormonal influences are normal',
        '🎯 CONSIDER: Pregnancy effects on ECG',
        '🎯 DON\'T: Pathologize normal gender differences',
        '🎯 Always use gender-specific criteria'
      ],
      type: 'highlight',
      animation: 'fade',
      imageUrl: '/lessonimages/gender-pitfalls.png',
      imageAlt: 'Gender interpretation pitfalls',
      hint: '⚠️ Avoid gender bias in interpretation!'
    },

    {
      id: 'gender-differences-audio',
      title: '🎵 Gender ECG Differences',
      content: 'Listen to detailed explanation of gender-based ECG differences with clinical examples and interpretation guidelines.',
      type: 'audio',
      layout: 'centered',
      animation: 'fade',
      audioUrl: '/lessonaudio/normal-variations/gender-differences.mp3',
      imageUrl: '/lessonimages/gender-ecg-differences.png',
      imageAlt: 'Gender differences audio lesson',
      hint: '🔊 Learn gender-specific patterns!'
    },

    // UNIT 2 QUIZ
    {
      id: 'unit2-gender-quiz',
      title: '🎯 Unit 2 Quiz: Gender Differences',
      content: "Test your knowledge of gender-based ECG differences!",
      type: 'quiz',
      layout: 'centered',
      animation: 'slide',
      imageUrl: '/lessonimages/gender-ecg-differences.png',
      imageAlt: 'Gender differences quiz',
      hint: '🧠 Test your Unit 2 knowledge!',
      question: "Which ECG characteristic is typically more prominent in men than women?",
      options: [
        "Faster heart rates",
        "Shorter QT intervals",
        "Higher QRS voltages",
        "Smaller R wave amplitudes"
      ],
      correctAnswer: 2,
      explanation: "✅ Correct! Men typically have higher QRS voltages than women due to differences in body composition, muscle mass, and chest wall anatomy."
    },

    // ===============================================
    // 🎯 UNIT 3: POSITIONAL CHANGES (8 slides)
    // ===============================================
    {
      id: 'unit3-intro',
      title: '🎯 Unit 3: Positional Changes',
      highlights: [
        '🎯 Master positional ECG variations! Learn how body habitus, position, and anatomical differences create normal ECG changes that can mimic pathology.'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/lessonimages/positional-ecg-variants.png',
      imageAlt: 'Positional changes overview',
      hint: '📐 Position affects ECG patterns!'
    },
    {
      id: 'body-habitus-effects',
      title: 'Body Habitus Effects',
      highlights: [
        '🎯 TALL/THIN: Vertical heart position, rightward axis, prominent Q in III',
        '🎯 SHORT/BROAD: Horizontal heart, leftward axis, prominent R in I, aVL',
        '🎯 Normal anatomical variations!'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/lessonimages/body-habitus-ecg.png',
      imageAlt: 'Body habitus ECG effects',
      hint: '📏 Body shape determines heart position!'
    },
    {
      id: 'patient-positioning',
      title: 'Patient Position Effects',
      highlights: [
        '🎯 SUPINE: Standard position for most ECGs',
        '🎯 UPRIGHT: May shift axis slightly left',
        '🎯 LATERAL: Alters precordial lead placement effects'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/lessonimages/patient-positioning.png',
      imageAlt: 'Patient positioning effects',
      hint: '🛏️ Position matters for consistency!'
    },
    {
      id: 'respiratory-effects',
      title: 'Respiratory Effects on ECG',
      highlights: [
        '🎯 INSPIRATION: Heart moves down, rightward axis shift',
        '🎯 EXPIRATION: Heart moves up, leftward axis shift',
        '🎯 DEEP BREATHING: Exaggerates changes'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/lessonimages/respiratory-ecg-effects.png',
      imageAlt: 'Respiratory effects on ECG',
      hint: '🫁 Breathing changes heart position!'
    },
    {
      id: 'chest-anatomy-variations',
      title: 'Chest Anatomy Variations',
      highlights: [
        '🎯 BARREL CHEST: Heart appears more vertical',
        '🎯 PECTUS: Altered electrode-heart distance',
        '🎯 SCOLIOSIS: Rotational effects'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/lessonimages/chest-anatomy-variations.png',
      imageAlt: 'Chest anatomy ECG variations',
      hint: '🫁 Chest shape affects ECG!'
    },
    {
      id: 'obesity-effects',
      title: 'Obesity Effects on ECG',
      highlights: [
        '🎯 OBESITY: Lower voltage due to increased tissue distance',
        '🎯 Leftward axis shift',
        '🎯 Poor R wave progression possible'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/lessonimages/obesity-ecg-effects.png',
      imageAlt: 'Obesity effects on ECG',
      hint: '📊 More tissue = lower voltage!'
    },
    {
      id: 'electrode-placement-variations',
      title: 'Electrode Placement Considerations',
      highlights: [
        '🎯 BREAST TISSUE: May require electrode repositioning',
        '🎯 SURGICAL SCARS: Affect placement options',
        '🎯 MEDICAL DEVICES: Create placement challenges'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/lessonimages/electrode-placement.png',
      imageAlt: 'Electrode placement variations',
      hint: '📍 Consistent placement crucial!'
    },
    {
      id: 'positional-variations-audio',
      title: '🎵 Positional ECG Variations',
      content: 'Listen to comprehensive analysis of how position and anatomy affect ECG patterns with practical recognition tips.',
      type: 'audio',
      layout: 'centered',
      animation: 'fade',
      audioUrl: '/lessonaudio/normal-variations/age-related-variations.mp3',
      imageUrl: '/lessonimages/positional-ecg-variants.png',
      imageAlt: 'Positional variations audio lesson',
      hint: '🔊 Master positional effects!'
    },

    // UNIT 3 QUIZ
    {
      id: 'unit3-positional-quiz',
      title: '🎯 Unit 3 Quiz: Positional Changes',
      content: "Test your knowledge of positional ECG changes!",
      type: 'quiz',
      layout: 'centered',
      animation: 'slide',
      imageUrl: '/lessonimages/positional-ecg-variants.png',
      imageAlt: 'Positional changes quiz',
      hint: '🧠 Test your Unit 3 knowledge!',
      question: "In obese patients, ECG voltage is typically:",
      options: [
        "Higher than normal due to increased muscle mass",
        "Lower than normal due to increased tissue distance",
        "The same as normal patients",
        "Variable depending on weight"
      ],
      correctAnswer: 1,
      explanation: "✅ Correct! In obese patients, ECG voltage is typically lower than normal due to increased distance between the heart and recording electrodes caused by increased subcutaneous tissue."
    },

    // ===============================================
    // 🎯 UNIT 4: ATHLETIC HEARTS (8 slides)
    // ===============================================
    {
      id: 'unit4-intro',
      title: '🎯 Unit 4: Athletic Hearts',
      highlights: [
        '🎯 Master athletic heart patterns! Learn how physical conditioning creates ECG changes that can appear abnormal but are actually beneficial adaptations.'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/lessonimages/athletic-heart-ecg.png',
      imageAlt: 'Athletic heart overview',
      hint: '🏃‍♂️ Fitness changes the heart!'
    },
    {
      id: 'athletic-bradycardia',
      title: 'Athletic Bradycardia',
      highlights: [
        '🎯 ATHLETES: Resting heart rates 40-60 bpm common',
        '🎯 Efficient stroke volume',
        '🎯 Vagal dominance'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/ecg/medical_accurate/bradycardia_45bpm.png',
      imageAlt: 'Athletic bradycardia patterns',
      hint: '❤️ Efficient hearts beat slower!'
    },
    {
      id: 'athletic-voltage-changes',
      title: 'Athletic Voltage Changes',
      highlights: [
        '🎯 INCREASED VOLTAGES: Larger R waves, deeper S waves',
        '🎯 LVH criteria often met',
        '🎯 Physiological, not pathological hypertrophy'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/lessonimages/athletic-voltage-changes.png',
      imageAlt: 'Athletic voltage changes',
      hint: '💪 Stronger heart = bigger voltages!'
    },
    {
      id: 'early-repolarization-athletes',
      title: 'Early Repolarization in Athletes',
      highlights: [
        '🎯 EARLY REPOLARIZATION: ST elevation with J-point elevation',
        '🎯 Especially in young male athletes',
        '🎯 Benign finding'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/lessonimages/early-repolarization-athletic.png',
      imageAlt: 'Early repolarization in athletes',
      hint: '📈 ST elevation that\'s normal!'
    },
    {
      id: 'athletic-conduction-changes',
      title: 'Athletic Conduction Changes',
      highlights: [
        '🎯 FIRST-DEGREE AV BLOCK: PR prolongation common',
        '🎯 JUNCTIONAL RHYTHMS: During rest',
        '🎯 WENCKEBACH: May occur at rest'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/lessonimages/athletic-conduction.png',
      imageAlt: 'Athletic conduction changes',
      hint: '🔄 Vagal tone affects conduction!'
    },
    {
      id: 'sport-specific-patterns',
      title: 'Sport-Specific ECG Patterns',
      highlights: [
        '🎯 ENDURANCE: More bradycardia, voltage changes',
        '🎯 STRENGTH: Less dramatic changes',
        '🎯 MIXED SPORTS: Intermediate patterns'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/lessonimages/sport-specific-patterns.png',
      imageAlt: 'Sport-specific ECG patterns',
      hint: '🏃‍♂️ Different sports, different patterns!'
    },
    {
      id: 'athletic-vs-pathological',
      title: 'Athletic vs Pathological Changes',
      highlights: [
        '🎯 ATHLETIC: Reversible with deconditioning',
        '🎯 Symmetric changes',
        '🎯 Good exercise tolerance'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/lessonimages/athletic-vs-pathological.png',
      imageAlt: 'Athletic vs pathological comparison',
      hint: '⚖️ Key distinction for diagnosis!'
    },
    {
      id: 'normal-variations-video',
      title: '🎥 Normal ECG Variations Comprehensive Review',
      content: 'Watch comprehensive analysis of all normal ECG variations with real examples and clinical decision-making guidance.',
      type: 'video',
      layout: 'centered',
      animation: 'fade',
      videoUrl: '/lessonvideos/normal-ecg-variations.mp4',
      imageUrl: '/lessonimages/athletic-heart-ecg.png',
      imageAlt: 'Normal variations video lesson',
      hint: '🎬 See all variations in action!'
    },

    // UNIT 4 QUIZ
    {
      id: 'unit4-athletic-quiz',
      title: '🎯 Unit 4 Quiz: Athletic Hearts',
      content: "Test your knowledge of athletic heart patterns!",
      type: 'quiz',
      layout: 'centered',
      animation: 'slide',
      imageUrl: '/lessonimages/athletic-heart-ecg.png',
      imageAlt: 'Athletic heart quiz',
      hint: '🧠 Test your Unit 4 knowledge!',
      question: "A heart rate of 45 bpm in a trained marathon runner is:",
      options: [
        "Pathological and requires pacing",
        "Normal athletic adaptation",
        "Sign of sick sinus syndrome",
        "Drug-induced bradycardia"
      ],
      correctAnswer: 1,
      explanation: "✅ Correct! A heart rate of 45 bpm in a trained athlete is a normal adaptation to conditioning, representing increased cardiac efficiency and vagal tone."
    },

    // ===============================================
    // 🎯 UNIT 5: POPULATION VARIATIONS (8 slides)
    // ===============================================
    {
      id: 'unit5-intro',
      title: '🎯 Unit 5: Population Variations',
      highlights: [
        '🎯 Master population-specific variations! Learn how ethnicity, genetics, and geographic factors create normal ECG differences across diverse populations.'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/lessonimages/population-variations.png',
      imageAlt: 'Population variations overview',
      hint: '🌍 Population diversity affects normals!'
    },
    {
      id: 'ethnic-variations',
      title: 'Ethnic ECG Variations',
      highlights: [
        '🎯 AFRICAN DESCENT: Early repolarization more common',
        '🎯 Higher voltage criteria',
        '🎯 Different T wave patterns'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/lessonimages/ethnic-variations.png',
      imageAlt: 'Ethnic ECG variations',
      hint: '👥 Genetics influence ECG patterns!'
    },
    {
      id: 'altitude-effects',
      title: 'Altitude and Environmental Effects',
      highlights: [
        '🎯 HIGH ALTITUDE: Right heart effects',
        '🎯 Axis changes',
        '🎯 Acclimatization patterns'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/lessonimages/altitude-effects.png',
      imageAlt: 'Altitude ECG effects',
      hint: '🏔️ Environment affects the heart!'
    },
    {
      id: 'genetic-factors',
      title: 'Genetic Factors in ECG Patterns',
      highlights: [
        '🎯 ION CHANNELS: Genetic variants affect intervals',
        '🎯 STRUCTURAL GENES: Influence chamber sizes',
        '🎯 CONDUCTION: Hereditary patterns'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/lessonimages/genetic-factors.png',
      imageAlt: 'Genetic factors in ECG',
      hint: '🧬 Genes determine normal ranges!'
    },
    {
      id: 'socioeconomic-factors',
      title: 'Socioeconomic and Lifestyle Factors',
      highlights: [
        '🎯 NUTRITION: Affects electrolytes, intervals',
        '🎯 EXERCISE ACCESS: Population fitness levels',
        '🎯 STRESS: Chronic effects on patterns'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/lessonimages/socioeconomic-factors.png',
      imageAlt: 'Socioeconomic factors affecting ECG',
      hint: '💰 Lifestyle affects cardiac health!'
    },
    {
      id: 'reference-range-considerations',
      title: 'Reference Range Considerations',
      highlights: [
        '🎯 POPULATION-SPECIFIC: Different normal ranges',
        '🎯 SAMPLE BIAS: Historical research limitations',
        '🎯 DIVERSITY: Need for inclusive studies'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/lessonimages/reference-ranges.png',
      imageAlt: 'Reference range considerations',
      hint: '📊 Reference ranges must represent populations!'
    },
    {
      id: 'global-ecg-standards',
      title: 'Global ECG Standards',
      highlights: [
        '🎯 INTERNATIONAL GUIDELINES: Standardization efforts',
        '🎯 REGIONAL ADAPTATIONS: Local population considerations',
        '🎯 TECHNOLOGY: Global equipment standardization'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/lessonimages/global-standards.png',
      imageAlt: 'Global ECG standards',
      hint: '🌐 Global standards, local adaptations!'
    },
    {
      id: 'population-variations-audio',
      title: '🎵 Population Variations Analysis',
      content: 'Listen to expert analysis of population-specific ECG variations and their clinical implications for diverse patient care.',
      type: 'audio',
      layout: 'centered',
      animation: 'fade',
        imageUrl: '/lessonimages/population-variations.png',
      imageAlt: 'Population variations audio lesson',
      hint: '🔊 Learn population-specific patterns!'
    },

    // UNIT 5 QUIZ
    {
      id: 'unit5-population-quiz',
      title: '🎯 Unit 5 Quiz: Population Variations',
      content: "Test your knowledge of population variations!",
      type: 'quiz',
      layout: 'centered',
      animation: 'slide',
      imageUrl: '/lessonimages/population-variations.png',
      imageAlt: 'Population variations quiz',
      hint: '🧠 Test your Unit 5 knowledge!',
      question: "Early repolarization patterns are most commonly seen in:",
      options: [
        "Elderly women",
        "Young men of African descent",
        "Asian children",
        "Middle-aged Europeans"
      ],
      correctAnswer: 1,
      explanation: "✅ Correct! Early repolarization patterns are most commonly seen in young men, particularly those of African descent, and represent a normal variant."
    },

    // ===============================================
    // 🎯 UNIT 6: CLINICAL RECOGNITION (7 slides)
    // ===============================================
    {
      id: 'unit6-intro',
      title: '🎯 Unit 6: Clinical Recognition',
      highlights: [
        '🎯 Master clinical recognition skills! Learn systematic approaches to identify normal variants and avoid misdiagnosis in clinical practice.'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/lessonimages/clinical-recognition.png',
      imageAlt: 'Clinical recognition overview',
      hint: '🔍 Recognize variants to prevent errors!'
    },
    {
      id: 'systematic-approach',
      title: 'Systematic Approach to Variants',
      highlights: [
        '🎯 STEP 1: Consider patient demographics',
        '🎯 STEP 2: Assess clinical context',
        '🎯 STEP 3: Apply appropriate normal ranges'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/lessonimages/systematic-approach.png',
      imageAlt: 'Systematic approach to variant recognition',
      hint: '📋 Systematic approach prevents errors!'
    },
    {
      id: 'red-flags-vs-variants',
      title: 'Red Flags vs Normal Variants',
      highlights: [
        '🎯 RED FLAGS: Progressive changes',
        '🎯 Symptoms correlation',
        '🎯 Family history concerning'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/lessonimages/red-flags-variants.png',
      imageAlt: 'Red flags vs normal variants',
      hint: '🚩 Some patterns need investigation!'
    },
    {
      id: 'documentation-standards',
      title: 'Documentation of Variants',
      highlights: [
        '🎯 CLEAR DESCRIPTION: What variant is present',
        '🎯 CONTEXT: Patient demographics, fitness',
        '🎯 STABILITY: Compare to previous ECGs'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/lessonimages/variant-documentation.png',
      imageAlt: 'Variant documentation standards',
      hint: '📝 Clear documentation prevents confusion!'
    },
    {
      id: 'patient-education',
      title: 'Patient Education About Variants',
      highlights: [
        '🎯 EXPLAIN: What the variant means',
        '🎯 REASSURE: When appropriate',
        '🎯 EDUCATE: About normal variations'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/lessonimages/patient-education.png',
      imageAlt: 'Patient education about variants',
      hint: '🗣️ Education reduces patient anxiety!'
    },
    {
      id: 'quality-assurance',
      title: 'Quality Assurance for Variant Recognition',
      highlights: [
        '🎯 TRAINING: Regular education updates',
        '🎯 PROTOCOLS: Standardized approaches',
        '🎯 REVIEW: Peer consultation available'
      ],
      type: 'highlight',
      animation: 'fade',
        imageUrl: '/lessonimages/quality-assurance.png',
      imageAlt: 'Quality assurance for variants',
      hint: '✅ Systems prevent misinterpretation!'
    },
    {
      id: 'variations-mastery-celebration',
      title: '🎵 Normal Variations Mastery',
      content: 'Congratulations! You\'ve mastered normal ECG variations. Listen to this celebration and guidance for applying your knowledge in clinical practice.',
      type: 'audio',
      layout: 'centered',
      animation: 'fade',
        imageUrl: '/lessonimages/clinical-recognition.png',
      imageAlt: 'Normal variations mastery celebration',
      hint: '🎉 You\'ve mastered normal variations!'
    },

    // UNIT 6 QUIZ
    {
      id: 'unit6-recognition-quiz',
      title: '🎯 Unit 6 Quiz: Clinical Recognition',
      content: "Test your knowledge of clinical recognition!",
      type: 'quiz',
      layout: 'centered',
      animation: 'slide',
      imageUrl: '/lessonimages/clinical-recognition.png',
      imageAlt: 'Clinical recognition quiz',
      hint: '🧠 Test your Unit 6 knowledge!',
      question: "When evaluating a potential ECG variant, the most important first step is:",
      options: [
        "Immediately order additional testing",
        "Consider patient demographics and clinical context",
        "Apply adult male reference ranges",
        "Assume it represents pathology"
      ],
      correctAnswer: 1,
      explanation: "✅ Correct! When evaluating potential ECG variants, the most important first step is considering patient demographics and clinical context to apply appropriate interpretation standards."
    }
  ],
  
  // ============= LESSON METADATA =============
  summary: "This comprehensive lesson teaches normal ECG variations across age groups, genders, positions, athletic populations, ethnic groups, and provides systematic clinical recognition skills to prevent misdiagnosis.",
  keyPoints: [
    "Age-related ECG changes from pediatric to elderly are normal developmental patterns",
    "Gender differences in ECG patterns require appropriate reference ranges",
    "Body position and anatomy significantly affect ECG appearance",
    "Athletic training creates beneficial cardiac adaptations that appear on ECG",
    "Population and ethnic variations require culturally appropriate interpretation",
    "Systematic clinical recognition prevents misdiagnosis of normal variants"
  ],
  resources: [
    {
      title: "Age-Specific ECG Reference Ranges",
      url: "/resources/age-ecg-ranges",
      type: "reference",
      description: "Comprehensive age-specific normal ECG values"
    },
    {
      title: "Gender-Based ECG Interpretation Guidelines",
      url: "/resources/gender-ecg-guidelines",
      type: "article",
      description: "Clinical guidelines for gender-appropriate ECG interpretation"
    },
    {
      title: "Athletic Heart ECG Atlas",
      url: "/resources/athletic-heart-atlas",
      type: "reference",
      description: "Visual atlas of normal athletic ECG adaptations"
    },
    {
      title: "Population Variation Database",
      url: "/resources/population-variations",
      type: "reference",
      description: "Ethnic and geographic ECG variation patterns"
    },
    {
      title: "Clinical Decision Support",
      url: "/resources/variant-decisions",
      type: "tool",
      description: "Decision support for variant vs pathology determination"
    }
  ]
  },
  
  // ============= ENHANCED DUOLINGO-STYLE TASKS =============
  tasks: [
    {
      id: 'final-variations-mastery-assessment',
      type: 'final-assessment',
      xp: 50,
      audio: {
        mainNarration: {
          audioUrl: '/lessonaudio/normal-variations/final-mastery.mp3',
          duration: 10,
          transcript: "Congratulations on completing all 6 units of normal ECG variations mastery! You've learned age variants, gender differences, positional changes, athletic hearts, population variations, and clinical recognition. Now prove your mastery!"
        }
      },
      images: {
        mainImage: '/lessonimages/age-related-ecg-changes.png',
        slideImages: []
      },
      content: {
        prerequisiteMessage: "🏆 Final Assessment: Complete all 6 units to unlock your Normal ECG Variations Mastery Certificate!",
        questions: [
          {
            id: "athletic-heart-recognition",
            type: "multiple-choice",
            question: "Early repolarization in a young athlete should be interpreted as:",
            options: [
              "Acute myocardial infarction requiring immediate treatment",
              "Normal training adaptation requiring no intervention",
              "Pericarditis requiring anti-inflammatory treatment",
              "Electrolyte abnormality requiring correction"
            ],
            correctAnswer: 1,
            explanation: "Early repolarization in young athletes is a common, benign training adaptation that requires no intervention.",
            imageUrl: "/lessonimages/early-repolarization-athletic.png"
          },
          {
            id: "pediatric-variant-recognition",
            type: "multiple-choice",
            question: "T wave inversions in V1-V3 in a healthy 8-year-old child are:",
            options: [
              "Always pathological requiring immediate cardiology referral",
              "Normal developmental variants that may persist into teens",
              "Signs of right ventricular hypertrophy",
              "Indicative of ischemic heart disease"
            ],
            correctAnswer: 1,
            explanation: "T wave inversions in V1-V3 are normal developmental variants in children and may persist into the teenage years.",
            imageUrl: "/lessonimages/pediatric-ecg-variants.png"
          },
          {
            id: "gender-voltage-differences",
            type: "multiple-choice",
            question: "When applying LVH voltage criteria, you should:",
            options: [
              "Use the same criteria for all patients regardless of gender",
              "Apply gender-specific voltage thresholds",
              "Only use voltage criteria in men",
              "Double the voltage criteria for women"
            ],
            correctAnswer: 1,
            explanation: "Gender-specific voltage thresholds should be applied as men typically have higher baseline voltages than women.",
            imageUrl: "/lessonimages/gender-criteria.png"
          },
          {
            id: "positional-voltage-effects",
            type: "multiple-choice",
            question: "Low voltage in an obese patient is most likely due to:",
            options: [
              "Underlying cardiomyopathy",
              "Increased distance between heart and electrodes",
              "Electrolyte abnormalities",
              "Pericardial effusion"
            ],
            correctAnswer: 1,
            explanation: "In obese patients, low voltage is typically due to increased subcutaneous tissue creating greater distance between the heart and recording electrodes.",
            imageUrl: "/lessonimages/obesity-ecg-effects.png"
          },
          {
            id: "population-variation-recognition",
            type: "multiple-choice",
            question: "Early repolarization patterns are most commonly seen in:",
            options: [
              "Elderly women of European descent",
              "Young men of African descent",
              "Middle-aged Asian women",
              "Pediatric patients of all ethnicities"
            ],
            correctAnswer: 1,
            explanation: "Early repolarization patterns are most commonly seen in young men, particularly those of African descent.",
            imageUrl: "/lessonimages/ethnic-variations.png"
          },
          {
            id: "clinical-recognition-approach",
            type: "multiple-choice",
            question: "The first step in evaluating a potential ECG variant is:",
            options: [
              "Ordering additional cardiac testing",
              "Considering patient demographics and clinical context",
              "Applying standard adult reference ranges",
              "Assuming the finding represents pathology"
            ],
            correctAnswer: 1,
            explanation: "Correct! Patient demographics, clinical context, and correlation with symptoms are most important for determining if an ECG finding represents a normal variant versus pathology.",
            imageUrl: "/lessonimages/systematic-approach.png"
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
