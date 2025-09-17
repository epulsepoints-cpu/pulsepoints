import { Lesson } from '@/types/learning';

export const optimizedLesson9: Lesson = {
  id: 'optimized-lesson-9',
  moduleId: 'module-1',
  title: 'Complete ECG Axis Mastery',
  description: 'Master ECG axis interpretation with 6 comprehensive units: Normal Axis Concepts, Axis Calculation Methods, Left Axis Deviation, Right Axis Deviation, Extreme Axis Deviation, and Clinical Significance. Build expertise through progressive learning with immediate assessment.',
  order: 9,
  estimatedTime: 45,
  
  // Duolingo-style lesson structure
  content: {
    type: 'mixed',
    introduction: 'Welcome to your complete ECG axis mastery journey! 🧭 You\'ll progress through 6 carefully designed units that build upon each other, just like Duolingo lessons. Each unit ends with a quick quiz to ensure understanding before moving forward.',
    sections: [
      {
        id: 'axis-overview',
        title: '🎯 ECG Axis Learning Journey',
        content: '🎯 UNIT 1: Normal Axis Concepts → UNIT 2: Calculation Methods → UNIT 3: Left Axis Deviation → UNIT 4: Right Axis Deviation → UNIT 5: Extreme Axis Deviation → UNIT 6: Clinical Significance',
        mediaType: 'image'
      }
    ],
    summary: 'Complete mastery of ECG axis interpretation through systematic progressive learning with 6 comprehensive units covering normal axis, calculation methods, deviations, and clinical applications.',
    
    // ===============================================
    // 📚 COMPREHENSIVE SLIDES (6 UNITS × ~8 SLIDES EACH = ~48 SLIDES)
    // ===============================================
    slides: [
      
      // ===============================================
      // 🎯 UNIT 1: NORMAL AXIS CONCEPTS (8 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: Normal Axis Concepts',
        content: 'Begin your axis mastery',
        '🎯 Learn the fundamental concepts of electrical axis, normal ranges, and the physiological basis for cardiac electrical direction.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/normal_sinus_95bpm_4.png',
        imageAlt: 'Normal ECG axis concepts',
        highlights: [
          '🧭 Electrical compass concept',
          '📐 Normal range -30° to +90°',
          '💓 Left ventricle dominance',
          '🎯 Quick recognition methods'
        ],
        hint: '🧭 The heart's electrical compass!'
      },
      
      {
        id: 'axis-definition',
        title: 'What is ECG Axis?',
        type: 'flashcard',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        flashcardFront: '🧭 What exactly IS the ECG axis?',
        flashcardBack: 'The average direction of electrical activation through the ventricles',
        '🎯 📐\n\nThink of it as an ARROW pointing in the heart's main electrical direction.\n\nNormal range: -30° to +90°\nShows: Conduction system health 💓',
        hint: '📐 It's the heart's electrical direction!'
      },

      {
        id: 'hexaxial-reference-system',
        title: 'Hexaxial Reference System',
        type: 'tabs',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: '🎯 The 6 Main Leads',
            content: 'Lead I: 0° (3 o'clock)\nLead II: +60° (5 o'clock)\nLead III: +120° (7 o'clock)\naVR: -150° (9 o'clock)\naVL: -30° (1 o'clock)\naVF: +90° (6 o'clock)'
          },
          {
            title: '🧭 Compass Analogy',
            content: 'Think of it as a compass!\n\n• 360° circle around the heart\n• Each lead = specific direction\n• Electrical vector points somewhere\n• We find where it points!'
          },
          {
            title: '📐 Degree System',
            content: 'Positive degrees: Rightward/Downward\nNegative degrees: Leftward/Upward\n\n0° = Right (3 o'clock)\n+90° = Down (6 o'clock)\n±180° = Left (9 o'clock)\n-90° = Up (12 o'clock)'
          }
        ],
        hint: '🎯 The 360° electrical compass!'
      },

      {
        id: 'normal-axis-range',
        title: 'Normal Axis Range',
        type: 'accordion',
        backgroundColor: '#f0fff4',
        textColor: '#065f46',
        animation: 'fade',
        accordionItems: [
          {
            title: '✅ Standard Normal Range',
            content: 'NORMAL AXIS: -30° to +90°\n(Some textbooks say +100°)\n\nMost adults: 0° to +90°\nThis represents healthy electrical conduction'
          },
          {
            title: '👶 Age Variations',
            content: 'CHILDREN: +90° to +120° can be normal\nADULTS: -30° to +90°\nELDERLY: Often shifts leftward with age\n\nReason: Heart changes shape and position'
          },
          {
            title: '🏃‍♂️ Population Differences',
            content: 'ATHLETES: May have wider range (-30° to +120°)\nTHIN PEOPLE: More vertical axis\nOBESE PEOPLE: More horizontal axis\nPREGNANCY: Shifts leftward'
          },
          {
            title: '⚠️ Important Note',
            content: 'Normal axis ≠ Normal heart!\n\nYou can have:\n• Normal axis with heart disease\n• Abnormal axis with healthy heart\n\nAxis is just one piece of the puzzle'
          }
        ],
        hint: '✅ -30° to +90° = Normal zone!'
      },

      {
        id: 'physiological-basis',
        title: 'Why Axis Points Where It Does',
        type: 'steps',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Left Ventricle Dominance',
            description: 'LV has much more muscle mass than RV, so electrical forces point toward LV (leftward)'
          },
          {
            number: 2,
            title: 'Depolarization Sequence',
            description: 'Septum → Apex → Base → Posterior wall',
        '🎯 The net direction of all these vectors creates the axis'
          },
          {
            number: 3,
            title: 'Anatomical Position',
            description: 'Heart sits tilted in chest, with apex pointing left and down, influencing electrical direction'
          },
          {
            number: 4,
            title: 'Muscle Distribution',
            description: 'Where the most muscle is located determines the strongest electrical forces and overall axis'
          }
        ],
        hint: '💪 LV dominance = leftward axis!'
      },

      {
        id: 'quick-axis-recognition',
        title: 'Quick Normal Axis Recognition',
        type: 'flashcard',
        backgroundColor: '#ecfdf5',
        textColor: '#047857',
        animation: 'fade',
        flashcardFront: '👁️ Quick way to spot normal axis?',
        flashcardBack: 'SUPER EASY METHOD',
        '🎯 👀\n\nLead I positive + Lead II positive = NORMAL AXIS!\n\nEven easier:\nLead I ⬆️ + aVF ⬆️ = Normal!\n\nIf both are upright → You're good'

  ],

  type: 'highlight',

  animation: 'fade',

  imageUrl: '/lessonimages/axis-mastery.png',

  imageAlt: 'ECG axis mastery',

  hint: '🎯 Master axis interpretation!'

}
    ],
    
    keyPoints: [
      "Normal axis range: -30° to +90°",
      "Quadrant method: Use Lead I and aVF polarity",
      "Left axis deviation: Often LAFB or LVH",
      "Right axis deviation: Consider RVH or PE",
      "Extreme axis deviation: Emergency until proven otherwise",
      "Clinical correlation essential for axis interpretation"
    ],
    
    resources: [
      {
        title: "ECG Axis Quick Reference Guide",
        url: "/resources/axis-quick-reference",
        type: "reference",
        description: "Downloadable quick reference for ECG axis interpretation"
      },
      {
        title: "Axis Calculation Practice Tool",
        url: "/tools/axis-calculator",
        type: "tool", 
        description: "Interactive tool for practicing axis calculations"
      },
      {
        title: "Hexaxial Reference System",
        url: "/resources/hexaxial-system",
        type: "reference",
        description: "Visual reference for the hexaxial reference system"
      }
    ]
  },

  // ===============================================
  // 🎯 DUOLINGO-STYLE TASKS (6 UNIT QUIZZES + FINAL ASSESSMENT)
  // ===============================================
  tasks: [
    
    // ==================== UNIT 1 QUIZ: NORMAL AXIS CONCEPTS ====================
    {
      id: 'unit1-quiz',
      type: 'quiz',
      xp: 15,
      
      content: {
        questions: [
          {
            id: 'normal-axis-range',
            type: 'multiple-choice',
            question: 'What is the normal ECG axis range in adults?',
            options: [
              '0° to +90°',
              '-30° to +90°',
              '-45° to +120°',
              '+30° to +120°'
            ],
            correctAnswer: 1,
            explanation: 'Excellent! The normal ECG axis range is -30° to +90°. Some sources extend this to +100°, but -30° to +90° is the most widely accepted range.',
            hint: 'Think about the most commonly cited normal range',
            imageUrl: '/lessonimages/normal-axis-range.png',
            imageAlt: 'Normal axis range on hexaxial system'
          },
          {
            id: 'quick-axis-check',
            type: 'multiple-choice',
            question: 'For quick normal axis recognition, which leads should both be positive?',
            options: [
              'Lead I and Lead III',
              'Lead I and Lead II', 
              'Lead II and aVF',
              'aVL and aVF'
            ],
            correctAnswer: 1,
            explanation: 'Perfect! When both Lead I and Lead II are positive, the axis is likely normal. This is a quick bedside check that works in most cases.',
            hint: 'Remember the quick visual check rule',
            imageUrl: '/lessonimages/normal-axis-recognition.png',
            imageAlt: 'Quick normal axis recognition'
          },
          {
            id: 'axis-physiology',
            type: 'multiple-choice',
            question: 'Why is the normal cardiac axis typically leftward?',
            options: [
              'The right ventricle is larger',
              'The left ventricle is thicker and more muscular',
              'The electrical system favors the right side',
              'It is random variation'
            ],
            correctAnswer: 1,
            explanation: 'Correct! The left ventricle is much thicker and more muscular than the right ventricle, so its electrical forces dominate, creating a leftward axis.',
            hint: 'Think about which ventricle does more work',
            imageUrl: '/lessonimages/axis-physiology.png',
            imageAlt: 'Physiological basis of ECG axis'
          }
        ]
      }
    },

    // ==================== UNIT 2 QUIZ: CALCULATION METHODS ====================
    {
      id: 'unit2-quiz',
      type: 'quiz',
      xp: 15,
      
      content: {
        questions: [
          {
            id: 'quadrant-method',
            type: 'multiple-choice',
            question: 'Using the quadrant method, if Lead I is positive and aVF is negative, what is the axis?',
            options: [
              'Normal axis (0° to +90°)',
              'Right axis deviation (+90° to +180°)',
              'Left axis deviation (-30° to -90°)',
              'Extreme axis deviation (-90° to ±180°)'
            ],
            correctAnswer: 2,
            explanation: 'Excellent! Lead I positive + aVF negative = Left axis deviation (-30° to -90°). This is a classic quadrant method application.',
            hint: 'Use the quadrant method with these two key leads',
            imageUrl: '/lessonimages/quadrant-method.png',
            imageAlt: 'Quadrant method for axis determination'
          },
          {
            id: 'isoelectric-method',
            type: 'multiple-choice',
            question: 'If Lead II is most isoelectric (smallest QRS deflection), where is the axis likely pointing?',
            options: [
              'Toward Lead II (+60°)',
              'Perpendicular to Lead II (-30° or +150°)',
              'Opposite to Lead II (-120°)',
              'Cannot determine from this information'
            ],
            correctAnswer: 1,
            explanation: 'Perfect! The axis is perpendicular (90°) to the most isoelectric lead. Since Lead II is at +60°, the axis is at -30° or +150°.',
            hint: 'The axis is 90° away from the isoelectric lead',
            imageUrl: '/lessonimages/isoelectric-method.png',
            imageAlt: 'Isoelectric lead method explained'
          },
          {
            id: 'calculation-accuracy',
            type: 'multiple-choice',
            question: 'Which method provides the most precise axis calculation?',
            options: [
              'Quick estimation using Lead I and aVF',
              'Quadrant method',
              'Mathematical calculation with net QRS deflections',
              'Visual inspection of all leads'
            ],
            correctAnswer: 2,
            explanation: 'Correct! Mathematical calculation using net QRS deflections in perpendicular leads provides the most precise axis determination (within 5°).',
            hint: 'Think about which method uses actual measurements',
            imageUrl: '/lessonimages/precise-calculation.png',
            imageAlt: 'Precise mathematical axis calculation'
          }
        ]
      }
    },

    // ==================== UNIT 3 QUIZ: LEFT AXIS DEVIATION ====================
    {
      id: 'unit3-quiz',
      type: 'quiz',
      xp: 15,
      
      content: {
        questions: [
          {
            id: 'lad-definition',
            type: 'multiple-choice',
            question: 'Left axis deviation is defined as an axis more negative than:',
            options: [
              '-15°',
              '-30°',
              '-45°',
              '-60°'
            ],
            correctAnswer: 1,
            explanation: 'Excellent! Left axis deviation is defined as an axis more negative than -30°. This is the most widely accepted definition.',
            hint: 'Remember the standard LAD definition threshold',
            imageUrl: '/lessonimages/lad-definition.png',
            imageAlt: 'Left axis deviation definition'
          },
          {
            id: 'lafb-recognition',
            type: 'multiple-choice',
            question: 'What is the most common cause of left axis deviation?',
            options: [
              'Left ventricular hypertrophy',
              'Inferior myocardial infarction',
              'Left anterior fascicular block',
              'Hyperkalemia'
            ],
            correctAnswer: 2,
            explanation: 'Perfect! Left anterior fascicular block (LAFB) is the most common cause of left axis deviation. It causes classic qR in Lead I and rS in Lead III.',
            hint: 'Think about the most frequent conduction abnormality',
            imageUrl: '/lessonimages/lafb-details.png',
            imageAlt: 'Left anterior fascicular block details'
          },
          {
            id: 'lad-clinical-significance',
            type: 'multiple-choice',
            question: 'A 70-year-old with new left axis deviation (-60°) and right bundle branch block should be monitored for:',
            options: [
              'Atrial fibrillation',
              'Complete heart block progression',
              'Ventricular tachycardia',
              'Myocardial infarction'
            ],
            correctAnswer: 1,
            explanation: 'Excellent! LAFB + RBBB = bifascicular block, which carries risk of progression to complete heart block. This requires monitoring and possible pacemaker evaluation.',
            hint: 'Think about conduction system progression risk',
            imageUrl: '/lessonimages/lad-clinical.png',
            imageAlt: 'Clinical significance of left axis deviation'
          }
        ]
      }
    },

    // ==================== UNIT 4 QUIZ: RIGHT AXIS DEVIATION ====================
    {
      id: 'unit4-quiz',
      type: 'quiz',
      xp: 15,
      
      content: {
        questions: [
          {
            id: 'rad-definition',
            type: 'multiple-choice',
            question: 'Right axis deviation is defined as an axis more positive than:',
            options: [
              '+90°',
              '+100°',
              '+110°',
              '+120°'
            ],
            correctAnswer: 0,
            explanation: 'Correct! Right axis deviation is commonly defined as an axis more positive than +90°. Some sources use +100°, but +90° is most standard.',
            hint: 'Remember the standard RAD definition threshold',
            imageUrl: '/lessonimages/rad-definition.png',
            imageAlt: 'Right axis deviation definition'
          },
          {
            id: 'rvh-recognition',
            type: 'multiple-choice',
            question: 'A 45-year-old with COPD has right axis deviation. What ECG finding would support right ventricular hypertrophy?',
            options: [
              'Deep Q waves in leads III and aVF',
              'Tall R wave in V1 and deep S wave in V6',
              'ST elevation in leads V1-V3',
              'Prolonged PR interval'
            ],
            correctAnswer: 1,
            explanation: 'Perfect! Tall R wave in V1 and deep S wave in V6 are classic signs of RVH. Combined with RAD and COPD history, this strongly suggests RVH.',
            hint: 'Think about precordial lead changes in RVH',
            imageUrl: '/lessonimages/rvh-details.png',
            imageAlt: 'Right ventricular hypertrophy details'
          },
          {
            id: 'rad-age-consideration',
            type: 'multiple-choice',
            question: 'Right axis deviation in a healthy 6-year-old child is:',
            options: [
              'Always pathological and requires immediate evaluation',
              'Normal due to physiological right ventricular dominance',
              'Concerning and suggests congenital heart disease',
              'Requires exercise stress testing'
            ],
            correctAnswer: 1,
            explanation: 'Excellent! RAD is normal in young children due to physiological right ventricular dominance. The axis gradually shifts leftward with age.',
            hint: 'Consider normal developmental physiology',
            imageUrl: '/lessonimages/rad-age.png',
            imageAlt: 'Age considerations for right axis deviation'
          }
        ]
      }
    },

    // ==================== UNIT 5 QUIZ: EXTREME AXIS DEVIATION ====================
    {
      id: 'unit5-quiz',
      type: 'quiz',
      xp: 15,
      
      content: {
        questions: [
          {
            id: 'extreme-recognition',
            type: 'multiple-choice',
            question: 'Extreme axis deviation is recognized when:',
            options: [
              'Lead I is positive and aVF is negative',
              'Lead I is negative and aVF is positive',
              'Both Lead I and aVF are negative',
              'Both Lead I and aVF are positive'
            ],
            correctAnswer: 2,
            explanation: 'Perfect! Extreme axis deviation occurs when both Lead I and aVF are negative, placing the axis in "no man\'s land" (-90° to ±180°).',
            hint: 'Think about which quadrant is "no man\'s land"',
            imageUrl: '/lessonimages/extreme-recognition.png',
            imageAlt: 'Extreme axis deviation recognition patterns'
          },
          {
            id: 'extreme-emergency',
            type: 'multiple-choice',
            question: 'A patient presents with wide QRS tachycardia and extreme axis deviation. Your immediate concern is:',
            options: [
              'Lead misplacement',
              'Ventricular tachycardia',
              'Hyperkalemia',
              'Bundle branch block'
            ],
            correctAnswer: 1,
            explanation: 'Excellent! Wide QRS + extreme axis + tachycardia = strong concern for ventricular tachycardia. This requires immediate evaluation and treatment.',
            hint: 'Think about the most dangerous possibility',
            imageUrl: '/lessonimages/vt-vs-extreme.png',
            imageAlt: 'VT vs other extreme axis causes'
          },
          {
            id: 'lead-misplacement',
            type: 'multiple-choice',
            question: 'If arm leads are reversed (RA-LA switched), this would cause:',
            options: [
              'Normal axis',
              'Left axis deviation',
              'Right axis deviation', 
              'Extreme axis deviation'
            ],
            correctAnswer: 3,
            explanation: 'Correct! RA-LA lead reversal causes extreme axis deviation. Always verify lead placement when you see extreme axis, especially if the patient appears stable.',
            hint: 'Think about how lead reversal affects the axis',
            imageUrl: '/lessonimages/lead-misplacement.png',
            imageAlt: 'Lead misplacement causing extreme axis'
          }
        ]
      }
    },

    // ==================== UNIT 6 QUIZ: CLINICAL SIGNIFICANCE ====================
    {
      id: 'unit6-quiz',
      type: 'quiz',
      xp: 15,
      
      content: {
        questions: [
          {
            id: 'clinical-priority',
            type: 'multiple-choice',
            question: 'Which axis finding requires the most immediate concern?',
            options: [
              'New left axis deviation in an elderly patient',
              'Right axis deviation in a child',
              'Extreme axis deviation with wide QRS',
              'Stable mild left axis deviation'
            ],
            correctAnswer: 2,
            explanation: 'Perfect! Extreme axis deviation with wide QRS requires immediate concern as it may represent ventricular tachycardia or severe hyperkalemia.',
            hint: 'Think about which finding could be immediately life-threatening',
            imageUrl: '/lessonimages/when-to-worry.png',
            imageAlt: 'When to worry about axis deviations'
          },
          {
            id: 'axis-trending',
            type: 'multiple-choice',
            question: 'A patient\'s ECG shows new right axis deviation compared to previous normal axis. This suggests:',
            options: [
              'Normal aging process',
              'Technical error in lead placement',
              'Possible acute pathology (PE, pneumothorax, etc.)',
              'Medication effect'
            ],
            correctAnswer: 2,
            explanation: 'Excellent! New right axis deviation (change from baseline) suggests acute pathology like pulmonary embolism, pneumothorax, or acute RV strain.',
            hint: 'Focus on the word "new" - change from baseline is important',
            imageUrl: '/lessonimages/axis-progression.png',
            imageAlt: 'Axis progression monitoring'
          },
          {
            id: 'treatment-approach',
            type: 'multiple-choice',
            question: 'For a patient with left anterior fascicular block, the appropriate management is:',
            options: [
              'Immediate pacemaker implantation',
              'Monitor for progression, especially if other conduction abnormalities develop',
              'Start antiarrhythmic medications',
              'No follow-up needed'
            ],
            correctAnswer: 1,
            explanation: 'Perfect! LAFB alone usually requires monitoring for progression, especially if RBBB develops (bifascicular block), which increases complete heart block risk.',
            hint: 'Think about when isolated LAFB becomes concerning',
            imageUrl: '/lessonimages/treatment-implications.png',
            imageAlt: 'Axis treatment implications'
          }
        ]
      }
    },

    // ==================== FINAL COMPREHENSIVE ASSESSMENT ====================
    {
      id: 'final-assessment',
      type: 'final-assessment',
      xp: 50,
      
      content: {
        instructions: 'Demonstrate your complete ECG axis mastery! This comprehensive assessment covers all 6 units: Normal Axis, Calculation Methods, Left Axis Deviation, Right Axis Deviation, Extreme Axis Deviation, and Clinical Significance.',
        
        questions: [
          {
            id: 'comprehensive-case-1',
            type: 'case-scenario',
            question: 'A 28-year-old athlete presents for routine screening. ECG shows: Lead I positive (+8mm), Lead II positive (+6mm), aVF positive (+4mm). Heart rate 45 bpm. What is the most likely axis and clinical significance?',
            clinicalScenario: {
              patientAge: 28,
              patientGender: 'male',
              symptoms: 'Routine screening, asymptomatic',
              history: 'Professional athlete, no cardiac history'
            },
            options: [
              'Left axis deviation; concerning for conduction disease',
              'Normal axis; appropriate for trained athlete',
              'Right axis deviation; suggests pulmonary pathology',
              'Extreme axis deviation; requires immediate evaluation'
            ],
            correctAnswer: 1,
            explanation: 'Excellent comprehensive thinking! Lead I positive + Lead II positive + aVF positive = Normal axis (~+30°). Combined with bradycardia in a young athlete, this is completely normal and expected.',
            hint: 'Consider normal findings in athletic population',
            imageUrl: '/ecg/medical_accurate/normal_80bpm.png',
            imageAlt: 'Normal axis in athlete ECG'
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
