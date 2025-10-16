import { Lesson } from '@/types/learning';

// ENHANCED LESSON 9: Complete ECG Axis Mastery - 6-Unit Structure
export const optimizedLesson9: Lesson = {
  id: 'module-1-lesson-9',
  moduleId: 'module-1',
  title: "Complete ECG Axis Mastery",
  description: "Master ECG axis interpretation through 6 focused learning units: Axis Basics, Normal Axis, Calculation Methods, Axis Deviations, Clinical Patterns, and Advanced Applications - each with interactive content and quizzes",
  order: 9,
  estimatedTime: 45,
  content: {
    type: 'mixed',
    introduction: "⚡ Welcome to ECG Axis Mastery! Learn electrical axis interpretation through 6 progressive units with slides, audio, video, and quizzes. Each unit builds on the previous one for complete understanding.",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your Learning Journey",
        content: "UNIT 1: Axis Basics → UNIT 2: Normal Axis → UNIT 3: Calculation Methods → UNIT 4: Axis Deviations → UNIT 5: Clinical Patterns → UNIT 6: Advanced Applications",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // ===============================================
      // 🎯 UNIT 1: AXIS BASICS (7 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: ECG Axis Basics',
        content: 'Start your ECG axis mastery journey! Learn the fundamental concepts that make everything else possible.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/basic-ecg-waveforms.png',
        imageAlt: 'ECG axis basics and electrical vectors',
        highlights: [
          '⚡ What is electrical axis?',
          '🧭 Direction of electrical impulse',
          '📐 Axis measurement in degrees', 
          '🎯 Clinical significance'
        ],
        hint: '🚀 Foundation to axis mastery!'
      },

      // 🎬 YOUTUBE VIDEO: ECG Axis Fundamentals
      {
        id: 'youtube-axis-fundamentals',
        title: '🎬 ECG Axis Fundamentals',
        content: 'Understanding what ECG axis represents and why it matters clinically. Essential foundation for axis interpretation!',
        type: 'youtube',
        youtubeId: 'CIsKlVXRjnY',
        videoDuration: 600,
        minimumWatchTime: 480,
        requireFullWatch: true,
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        hint: '⚡ Master the electrical foundation!'
      },

      {
        id: 'what-is-axis-flashcard',
        title: 'What is ECG Axis?',
        type: 'flashcard',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'flip',
        flashcardFront: 'What does ECG axis represent?',
        flashcardBack: 'ECG axis represents the OVERALL DIRECTION of electrical depolarization through the ventricles. It shows which way the heart\'s main electrical vector points! ⚡',
        hint: '⚡ Direction of electrical flow!'
      },

      {
        id: 'axis-vector-concept',
        title: 'ECG Axis as Vector',
        type: 'steps',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Vector Basics',
            description: 'Electrical axis is a VECTOR - it has both magnitude (strength) and direction'
          },
          {
            number: 2,
            title: 'Depolarization Wave',
            description: 'Represents the net direction of ventricular depolarization'
          },
          {
            number: 3,
            title: 'Clinical Tool',
            description: 'Helps detect heart position, enlargement, and conduction abnormalities'
          },
          {
            number: 4,
            title: 'Degree System',
            description: 'Measured in degrees from -180° to +180° using standard reference'
          }
        ],
        hint: '🧭 Vector has direction and meaning!'
      },

      {
        id: 'axis-reference-system',
        title: 'ECG Axis Reference System',
        content: 'Understanding the 360-degree reference circle for axis interpretation.',
        type: 'tabs',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        tabs: [
          {
            title: '0° Reference',
            content: 'Lead I is 0° - pointing horizontally to the left arm'
          },
          {
            title: '+90° Position', 
            content: 'Lead aVF is +90° - pointing straight down (inferior)'
          },
          {
            title: 'Negative Degrees',
            content: 'Upper hemisphere: -90° is straight up, -30° is upper left'
          },
          {
            title: 'Clinical Range',
            content: 'Normal axis: -30° to +90°. Outside this = deviation!'
          }
        ],
        hint: '🧭 Master the reference system!'
      },

      {
        id: 'why-axis-matters-flashcard',
        title: 'Why Axis Matters Clinically',
        type: 'flashcard',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'flip',
        flashcardFront: 'Why is ECG axis clinically important?',
        flashcardBack: 'Axis helps detect: 1) Heart position/rotation 2) Ventricular hypertrophy 3) Bundle branch blocks 4) Fascicular blocks 5) Previous MIs. It\'s a powerful diagnostic tool! 🎯',
        hint: '🩺 Diagnostic power!'
      },

      {
        id: 'axis-basics-summary',
        title: 'Axis Basics Summary',
        content: 'Key concepts for ECG axis fundamentals.',
        type: 'summary',
        backgroundColor: '#f8fafc',
        textColor: '#334155',
        animation: 'fade',
        summaryPoints: [
          '⚡ Axis = direction of ventricular depolarization',
          '🧭 Measured in degrees (-180° to +180°)',
          '📏 Normal range: -30° to +90°',
          '🎯 Detects heart problems and position'
        ],
        hint: '📚 Foundation complete!'
      },

      // ==================== UNIT 1 QUIZ: AXIS BASICS ====================
      {
        id: 'unit1-axis-basics-quiz',
        title: '🎯 Unit 1 Quiz: Axis Basics',
        content: "Test your knowledge of ECG axis fundamentals!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: '/lessonimages/basic-ecg-waveforms.png',
        imageAlt: 'ECG axis basics quiz',
        hint: '� Test your Unit 1 knowledge!',
        question: "What does ECG axis represent?",
        options: [
          "The heart rate in beats per minute",
          "The overall direction of ventricular depolarization",
          "The strength of atrial contraction",
          "The timing of electrical impulses"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! ECG axis represents the overall direction (vector) of electrical depolarization through the ventricles, showing which way the heart's main electrical activity points."
      },

      // ================================================
      // 🎯 UNIT 2: NORMAL AXIS (7 slides)
      // ================================================
      {
        id: 'unit2-intro',
        title: '🎯 Unit 2: Normal ECG Axis',
        type: 'highlight',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lessonimages/normal-sinus-rhythm-overview.png',
        imageAlt: 'Normal ECG axis patterns and ranges',
        highlights: [
          '✅ Normal range: -30° to +90°',
          '📊 Most common: 0° to +90°',
          '🫀 Anatomical position factors',
          '👥 Age and body habitus variations'
        ],
        hint: '✅ Learn what normal looks like!'
      },

      {
        id: 'normal-axis-range-flashcard',
        title: 'Normal Axis Range',
        type: 'flashcard',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'flip',
        flashcardFront: 'What is the normal ECG axis range?',
        flashcardBack: 'Normal axis: -30° to +90°. Most adults: 0° to +90°. Children often have more rightward axis. Remember: "Negative thirty to positive ninety!" 📐',
        hint: '📐 Know the normal range!'
      },

      {
        id: 'normal-axis-factors',
        title: 'Factors Affecting Normal Axis',
        type: 'steps',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Age Factor',
            description: 'Newborns: +90° to +180°, Children: +60° to +120°, Adults: -30° to +90°'
          },
          {
            number: 2,
            title: 'Body Habitus',
            description: 'Tall/thin: more vertical axis, Short/stocky: more horizontal axis'
          },
          {
            number: 3,
            title: 'Heart Position',
            description: 'Diaphragm position, pregnancy, obesity affect heart position and axis'
          },
          {
            number: 4,
            title: 'Breathing',
            description: 'Deep inspiration can shift axis slightly rightward'
          }
        ],
        hint: '📊 Normal varies with patient!'
      },

      {
        id: 'recognizing-normal-axis',
        title: 'Recognizing Normal Axis',
        type: 'tabs',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        tabs: [
          {
            title: 'Quick Check',
            content: 'Lead I positive + aVF positive = Normal axis (0° to +90°)'
          },
          {
            title: 'Borderline Left', 
            content: 'Lead I strongly positive + aVF slightly negative = -30° to 0°'
          },
          {
            title: 'Borderline Right',
            content: 'Lead I slightly positive + aVF strongly positive = +90° to +120°'
          },
          {
            title: 'Most Common',
            content: 'Healthy adults typically have axis between +30° to +75°'
          }
        ],
        hint: '👀 Quick visual recognition!'
      },

      {
        id: 'axis-age-variations-flashcard',
        title: 'Age-Related Axis Variations',
        type: 'flashcard',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'flip',
        flashcardFront: 'How does normal axis change with age?',
        flashcardBack: 'Newborns: RIGHT axis (+90° to +180°). Children: Gradual leftward shift. Adults: -30° to +90°. Elderly: May shift slightly left due to heart changes. 👶👴',
        hint: '👶 Age changes everything!'
      },

      {
        id: 'normal-axis-clinical-significance',
        title: 'Clinical Significance of Normal Axis',
        content: 'Understanding what normal axis tells us clinically.',
        type: 'summary',
        backgroundColor: '#f8fafc',
        textColor: '#334155',
        animation: 'fade',
        summaryPoints: [
          '✅ Normal conduction system function',
          '🫀 Appropriate heart position',
          '💪 No significant ventricular enlargement',
          '🔄 Proper electrical propagation'
        ],
        hint: '✅ Normal = healthy!'
      },

      // ==================== UNIT 2 QUIZ: NORMAL AXIS ====================
      {
        id: 'unit2-normal-axis-quiz',
        title: '🎯 Unit 2 Quiz: Normal Axis',
        content: "Test your knowledge of normal ECG axis!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'slide',
        imageUrl: '/lessonimages/normal-sinus-rhythm-overview.png',
        imageAlt: 'Normal axis quiz',
        hint: '🧠 Test your normal axis knowledge!',
        question: "What is the normal ECG axis range for healthy adults?",
        options: [
          "-90° to 0°",
          "-30° to +90°",
          "0° to +180°",
          "+30° to +120°"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! The normal ECG axis range for healthy adults is -30° to +90°. Most commonly falls between 0° to +90°."
      },

      // ================================================
      // 🎯 UNIT 3: CALCULATION METHODS (8 slides)
      // ================================================
      {
        id: 'unit3-intro',
        title: '🎯 Unit 3: Axis Calculation Methods',
        type: 'highlight',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/qrs-complex-components.png',
        imageAlt: 'ECG axis calculation methods and techniques',
        highlights: [
          '🎯 Lead I and aVF method',
          '📐 Precise degree calculation',
          '⚡ QRS vector analysis',
          '🔧 Multiple calculation techniques'
        ],
        hint: '🧮 Master the calculations!'
      },

      {
        id: 'lead1-avf-method-flashcard',
        title: 'Lead I and aVF Method',
        type: 'flashcard',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'flip',
        flashcardFront: 'How do you use Lead I and aVF to determine axis?',
        flashcardBack: 'Lead I (0°) + aVF (+90°): Both positive = Normal (0°-90°), I+ aVF- = Left deviation, I- aVF+ = Right deviation, Both negative = Extreme deviation! 🧭',
        hint: '🧭 Two leads tell the story!'
      },

      {
        id: 'quadrant-method',
        title: 'Four-Quadrant Method',
        type: 'steps',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Quadrant I (0° to +90°)',
            description: 'Lead I positive, aVF positive = Normal axis'
          },
          {
            number: 2,
            title: 'Quadrant II (+90° to +180°)',
            description: 'Lead I negative, aVF positive = Right axis deviation'
          },
          {
            number: 3,
            title: 'Quadrant III (-90° to -180°)',
            description: 'Lead I negative, aVF negative = Extreme axis deviation'
          },
          {
            number: 4,
            title: 'Quadrant IV (-90° to 0°)',
            description: 'Lead I positive, aVF negative = Left axis deviation'
          }
        ],
        hint: '🎯 Four quadrants, clear rules!'
      },

      {
        id: 'precise-calculation-method',
        title: 'Precise Degree Calculation',
        type: 'tabs',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        tabs: [
          {
            title: 'Net QRS Method',
            content: 'Calculate net QRS in Lead I and aVF, then use trigonometry: Axis = arctan(aVF/Lead I)'
          },
          {
            title: 'Isoelectric Lead', 
            content: 'Find lead where QRS is most isoelectric (equal positive/negative). Axis is perpendicular to that lead'
          },
          {
            title: 'Multiple Lead Analysis',
            content: 'Use additional leads (II, III, aVL, aVR) to confirm and refine calculation'
          },
          {
            title: 'Clinical Approximation',
            content: 'Quick visual method: identify most positive QRS lead for approximate axis'
          }
        ],
        hint: '📐 Precision when needed!'
      },

      // 🎬 YOUTUBE VIDEO: Heart Activity Analysis for Axis
      {
        id: 'youtube-heart-activity-axis',
        title: '🎬 Heart Activity Analysis for Axis Calculation',
        content: 'Comprehensive heart activity analysis through ECG patterns. Perfect foundation for understanding how electrical axis relates to overall heart function!',
        type: 'youtube',
        youtubeId: 'HvzLAcynxP4',
        videoDuration: 720,
        minimumWatchTime: 600,
        requireFullWatch: false,
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        hint: '🫀 Complete heart activity understanding!'
      },

      {
        id: 'calculation-shortcuts-flashcard',
        title: 'Axis Calculation Shortcuts',
        type: 'flashcard',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'flip',
        flashcardFront: 'What are quick shortcuts for axis calculation?',
        flashcardBack: '1) Lead I & aVF quadrant method 2) Most positive QRS lead points toward axis 3) Isoelectric lead is perpendicular to axis 4) Remember normal patterns! ⚡',
        hint: '⚡ Speed with accuracy!'
      },

      {
        id: 'common-calculation-errors',
        title: 'Common Calculation Errors',
        content: 'Avoiding mistakes in axis calculation.',
        type: 'summary',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        summaryPoints: [
          '❌ Forgetting to check QRS morphology',
          '❌ Ignoring lead quality/artifacts',
          '❌ Not considering patient factors',
          '❌ Over-precision in borderline cases'
        ],
        hint: '⚠️ Avoid common pitfalls!'
      },

      // ==================== UNIT 3 QUIZ: CALCULATION METHODS ====================
      {
        id: 'unit3-calculation-quiz',
        title: '🎯 Unit 3 Quiz: Calculation Methods',
        content: "Test your axis calculation skills!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        imageUrl: '/lessonimages/qrs-complex-components.png',
        imageAlt: 'Axis calculation quiz',
        hint: '🧠 Test your calculation knowledge!',
        question: "If Lead I is positive and aVF is negative, what does this indicate?",
        options: [
          "Normal axis (0° to +90°)",
          "Right axis deviation (+90° to +180°)",
          "Left axis deviation (-30° to -90°)",
          "Extreme axis deviation (-90° to -180°)"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! Lead I positive + aVF negative = Left axis deviation (-30° to -90°). This places the axis in the fourth quadrant."
      },

      // ================================================
      // 🎯 UNIT 4: AXIS DEVIATIONS (8 slides)
      // ================================================
      {
        id: 'unit4-intro',
        title: '🎯 Unit 4: ECG Axis Deviations',
        type: 'highlight',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: '/lessonimages/rhythm-patterns-examples.png',
        imageAlt: 'ECG axis deviations and abnormal patterns',
        highlights: [
          '⬅️ Left axis deviation (LAD)',
          '➡️ Right axis deviation (RAD)',
          '🔄 Extreme axis deviation',
          '🩺 Clinical significance of each'
        ],
        hint: '🚨 When axis goes wrong!'
      },

      {
        id: 'left-axis-deviation-flashcard',
        title: 'Left Axis Deviation (LAD)',
        type: 'flashcard',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'flip',
        flashcardFront: 'What defines Left Axis Deviation and what causes it?',
        flashcardBack: 'LAD = axis -30° to -90°. Causes: LAFB (most common), LVH, inferior MI, WPW syndrome, hyperkalemia. Lead I positive, aVF negative! ⬅️',
        hint: '⬅️ Left deviation patterns!'
      },

      {
        id: 'right-axis-deviation-flashcard',
        title: 'Right Axis Deviation (RAD)',
        type: 'flashcard',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'flip',
        flashcardFront: 'What defines Right Axis Deviation and what causes it?',
        flashcardBack: 'RAD = axis +90° to +180°. Causes: RVH, LPFB, lateral MI, PE, COPD, normal in children. Lead I negative, aVF positive! ➡️',
        hint: '➡️ Right deviation patterns!'
      },

      {
        id: 'extreme-axis-deviation',
        title: 'Extreme Axis Deviation',
        type: 'steps',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Definition',
            description: 'Axis between -90° and -180° (northwest quadrant)'
          },
          {
            number: 2,
            title: 'Recognition',
            description: 'Both Lead I and aVF are negative - very abnormal!'
          },
          {
            number: 3,
            title: 'Causes',
            description: 'Severe conduction disease, ventricular rhythms, lead misplacement'
          },
          {
            number: 4,
            title: 'Urgency',
            description: 'Often indicates serious cardiac pathology - investigate immediately!'
          }
        ],
        hint: '🚨 Extreme = investigate now!'
      },

      {
        id: 'deviation-causes-tabs',
        title: 'Common Causes of Axis Deviations',
        type: 'tabs',
        backgroundColor: '#f8fafc',
        textColor: '#334155',
        animation: 'fade',
        tabs: [
          {
            title: 'LAD Causes',
            content: 'LAFB (most common), LVH, inferior MI, ostium primum ASD, hyperkalemia, WPW'
          },
          {
            title: 'RAD Causes', 
            content: 'RVH, LPFB, lateral MI, pulmonary embolism, COPD, normal variant in young/thin'
          },
          {
            title: 'Extreme Causes',
            content: 'Severe conduction blocks, ventricular tachycardia, lead placement errors'
          },
          {
            title: 'Age Factors',
            content: 'Children: RAD normal. Elderly: slight LAD common. Consider age in interpretation'
          }
        ],
        hint: '🎯 Know the causes!'
      },

      {
        id: 'axis-deviation-urgency-flashcard',
        title: 'Clinical Urgency of Deviations',
        type: 'flashcard',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'flip',
        flashcardFront: 'Which axis deviations require urgent evaluation?',
        flashcardBack: 'EXTREME deviation (both I & aVF negative) = URGENT! New LAD or RAD in chest pain = concerning. Stable chronic deviations = routine follow-up. 🚨',
        hint: '🚨 Know when to worry!'
      },

      {
        id: 'deviation-patterns-summary',
        title: 'Axis Deviation Summary',
        content: 'Key patterns for all axis deviations.',
        type: 'summary',
        backgroundColor: '#f8fafc',
        textColor: '#334155',
        animation: 'fade',
        summaryPoints: [
          '⬅️ LAD: I positive, aVF negative (-30° to -90°)',
          '➡️ RAD: I negative, aVF positive (+90° to +180°)',
          '🔄 Extreme: Both I and aVF negative (-90° to -180°)',
          '🩺 Consider age, symptoms, and clinical context'
        ],
        hint: '📚 Master the patterns!'
      },

      // ==================== UNIT 4 QUIZ: AXIS DEVIATIONS ====================
      {
        id: 'unit4-deviations-quiz',
        title: '🎯 Unit 4 Quiz: Axis Deviations',
        content: "Test your knowledge of axis deviations!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'slide',
        imageUrl: '/lessonimages/rhythm-patterns-examples.png',
        imageAlt: 'Axis deviations quiz',
        hint: '🧠 Test your deviation knowledge!',
        question: "What is the most common cause of left axis deviation?",
        options: [
          "Left ventricular hypertrophy",
          "Left anterior fascicular block (LAFB)",
          "Inferior myocardial infarction",
          "Hyperkalemia"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Left anterior fascicular block (LAFB) is the most common cause of left axis deviation, typically producing an axis between -30° to -60°."
      },

      // ================================================
      // 🎯 UNIT 5: CLINICAL PATTERNS (8 slides)
      // ================================================
      {
        id: 'unit5-intro',
        title: '🎯 Unit 5: Clinical Axis Patterns',
        type: 'highlight',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lessonimages/clinical-applications-overview.png',
        imageAlt: 'Clinical axis patterns in various heart conditions',
        highlights: [
          '💪 Ventricular hypertrophy patterns',
          '🚫 Conduction block patterns',
          '💔 Myocardial infarction changes',
          '🔍 Differential diagnosis approach'
        ],
        hint: '🩺 Real clinical scenarios!'
      },

      {
        id: 'hypertrophy-axis-patterns-flashcard',
        title: 'Hypertrophy and Axis',
        type: 'flashcard',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'flip',
        flashcardFront: 'How do ventricular hypertrophy patterns affect axis?',
        flashcardBack: 'LVH → Left axis (enlarged left ventricle pulls axis left). RVH → Right axis (enlarged right ventricle pulls axis right). Biventricular → May appear normal! 💪',
        hint: '💪 Big chambers pull axis!'
      },

      {
        id: 'conduction-block-axis',
        title: 'Conduction Blocks and Axis',
        type: 'steps',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'LAFB Pattern',
            description: 'Left axis deviation (-30° to -60°), small Q in aVL, small R in II/III/aVF'
          },
          {
            number: 2,
            title: 'LPFB Pattern',
            description: 'Right axis deviation (+90° to +120°), small Q in II/III/aVF, small R in aVL'
          },
          {
            number: 3,
            title: 'RBBB Effect',
            description: 'May not change axis significantly, but can mask or reveal fascicular blocks'
          },
          {
            number: 4,
            title: 'LBBB Effect',
            description: 'Often causes left axis deviation due to altered depolarization pattern'
          }
        ],
        hint: '🚫 Blocks change everything!'
      },

      {
        id: 'mi-axis-changes',
        title: 'MI and Axis Changes',
        type: 'tabs',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        tabs: [
          {
            title: 'Inferior MI',
            content: 'May cause left axis deviation due to loss of inferior forces and possible LAFB'
          },
          {
            title: 'Lateral MI', 
            content: 'May cause right axis deviation due to loss of lateral forces'
          },
          {
            title: 'Anterior MI',
            content: 'Usually preserves axis unless extensive with septal involvement'
          },
          {
            title: 'Chronic Changes',
            content: 'Old MIs may permanently alter axis due to scar tissue and conduction changes'
          }
        ],
        hint: '💔 Scars change conduction!'
      },

      {
        id: 'axis-differential-diagnosis-flashcard',
        title: 'Axis in Differential Diagnosis',
        type: 'flashcard',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'flip',
        flashcardFront: 'How does axis help in ECG differential diagnosis?',
        flashcardBack: 'Axis narrows possibilities: LAD + wide QRS = ?LAFB vs LVH. RAD + RV strain = ?RVH vs PE. Normal axis + BBB = isolated conduction disease. Context matters! 🔍',
        hint: '🔍 Axis guides diagnosis!'
      },

      {
        id: 'pediatric-axis-patterns',
        title: 'Pediatric Axis Considerations',
        content: 'Special axis patterns in children and infants.',
        type: 'summary',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        summaryPoints: [
          '👶 Newborns: +90° to +180° is normal (RVH physiology)',
          '🧒 Children: Gradual leftward shift with age',
          '👦 Adolescents: Approaching adult normal by teens',
          '⚠️ Persistent RAD in older children may indicate RVH'
        ],
        hint: '👶 Kids are different!'
      },

      {
        id: 'clinical-interpretation-approach',
        title: 'Systematic Clinical Approach',
        content: 'Step-by-step approach to axis interpretation.',
        type: 'steps',
        backgroundColor: '#f8fafc',
        textColor: '#334155',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Calculate Axis',
            description: 'Use Lead I and aVF to determine quadrant and approximate degrees'
          },
          {
            number: 2,
            title: 'Compare to Normal',
            description: 'Consider patient age, body habitus, and clinical context'
          },
          {
            number: 3,
            title: 'Look for Patterns',
            description: 'Check for hypertrophy, blocks, or MI patterns in other leads'
          },
          {
            number: 4,
            title: 'Integrate Clinically',
            description: 'Combine axis with symptoms, exam findings, and other ECG changes'
          }
        ],
        hint: '🎯 Systematic approach wins!'
      },

      // ==================== UNIT 5 QUIZ: CLINICAL PATTERNS ====================
      {
        id: 'unit5-clinical-quiz',
        title: '🎯 Unit 5 Quiz: Clinical Patterns',
        content: "Test your clinical axis interpretation!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'slide',
        imageUrl: '/lessonimages/clinical-applications-overview.png',
        imageAlt: 'Clinical patterns quiz',
        hint: '🧠 Test your clinical knowledge!',
        question: "A patient has left axis deviation with small Q waves in aVL. What is the most likely diagnosis?",
        options: [
          "Left ventricular hypertrophy",
          "Left anterior fascicular block (LAFB)",
          "Inferior myocardial infarction",
          "Left bundle branch block"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Left axis deviation with small Q waves in aVL is the classic pattern for left anterior fascicular block (LAFB)."
      },

      // ================================================
      // 🎯 UNIT 6: ADVANCED APPLICATIONS (8 slides)  
      // ================================================
      {
        id: 'unit6-intro',
        title: '🎯 Unit 6: Advanced Axis Applications',
        type: 'highlight',
        backgroundColor: '#f8fafc',
        textColor: '#334155',
        animation: 'fade',
        imageUrl: '/lessonimages/ecg-waves-anatomy-correlation.png',
        imageAlt: 'Advanced ECG axis applications and complex scenarios',
        highlights: [
          '🔬 Complex axis calculations',
          '🎯 Serial axis monitoring',
          '⚡ Axis in arrhythmias',
          '🩺 Clinical decision making'
        ],
        hint: '🎓 Master advanced concepts!'
      },

      {
        id: 'serial-axis-monitoring-flashcard',
        title: 'Serial Axis Monitoring',
        type: 'flashcard',
        backgroundColor: '#f8fafc',
        textColor: '#334155',
        animation: 'flip',
        flashcardFront: 'Why monitor ECG axis changes over time?',
        flashcardBack: 'Serial axis changes detect: Progressive heart disease, new conduction blocks, drug effects, worsening hypertrophy, post-MI complications. Trend = powerful diagnostic tool! 📈',
        hint: '📈 Trends tell stories!'
      },

      {
        id: 'axis-in-arrhythmias',
        title: 'Axis in Arrhythmias',
        type: 'steps',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'VT vs SVT',
            description: 'VT often has extreme axis deviation, SVT usually preserves normal axis'
          },
          {
            number: 2,
            title: 'VT Origin',
            description: 'Axis helps localize VT origin: LAD suggests RV origin, RAD suggests LV origin'
          },
          {
            number: 3,
            title: 'Aberrant Conduction',
            description: 'SVT with aberrancy may mimic VT but typically maintains more normal axis'
          },
          {
            number: 4,
            title: 'Paced Rhythms',
            description: 'Paced axis depends on lead location and programming'
          }
        ],
        hint: '⚡ Axis in fast rhythms!'
      },

      {
        id: 'complex-axis-scenarios',
        title: 'Complex Clinical Scenarios',
        type: 'tabs',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        tabs: [
          {
            title: 'Bifascicular Block',
            content: 'RBBB + LAFB = LAD with wide QRS. High risk for complete heart block.'
          },
          {
            title: 'Dextrocardia', 
            content: 'Marked RAD with decreasing R wave progression V1-V6. Consider mirror image.'
          },
          {
            title: 'Lead Misplacement',
            content: 'Extreme axis may indicate technical error. Always check lead placement first!'
          },
          {
            title: 'Drug Effects',
            content: 'Na+ channel blockers, hyperkalemia can cause progressive axis changes'
          }
        ],
        hint: '🧩 Complex puzzles solved!'
      },

      {
        id: 'axis-clinical-decisions-flashcard',
        title: 'Axis in Clinical Decisions',
        type: 'flashcard',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'flip',
        flashcardFront: 'How does axis influence clinical decisions?',
        flashcardBack: 'New axis deviation → investigate cause. Extreme axis → urgent evaluation. Progressive axis changes → serial monitoring. Normal axis → reassurance when appropriate! 🩺',
        hint: '🩺 Axis guides action!'
      },

      {
        id: 'advanced-calculation-techniques',
        title: 'Advanced Calculation Techniques',
        content: 'Sophisticated methods for precise axis determination.',
        type: 'summary',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        summaryPoints: [
          '📐 Vector analysis using multiple leads',
          '🎯 Computer-assisted axis calculation',
          '📊 Statistical correlation with imaging',
          '🔬 Research applications and validation'
        ],
        hint: '🔬 Precision techniques!'
      },

      {
        id: 'axis-mastery-integration',
        title: 'Integrating Axis Mastery',
        content: 'Bringing together all axis concepts for expert interpretation.',
        type: 'steps',
        backgroundColor: '#f8fafc',
        textColor: '#334155',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Pattern Recognition',
            description: 'Instantly recognize normal vs abnormal axis patterns'
          },
          {
            number: 2,
            title: 'Clinical Context',
            description: 'Always interpret axis within full clinical picture'
          },
          {
            number: 3,
            title: 'Serial Comparison',
            description: 'Compare to previous ECGs when available'
          },
          {
            number: 4,
            title: 'Action Planning',
            description: 'Determine if axis findings require immediate action or follow-up'
          }
        ],
        hint: '🎓 Expert integration!'
      },

      // ==================== UNIT 6 QUIZ: ADVANCED APPLICATIONS ====================
      {
        id: 'unit6-advanced-quiz',
        title: '🎯 Unit 6 Quiz: Advanced Applications',
        content: "Test your advanced axis knowledge!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f8fafc',
        textColor: '#334155',
        animation: 'slide',
        imageUrl: '/lessonimages/ecg-waves-anatomy-correlation.png',
        imageAlt: 'Advanced applications quiz',
        hint: '🧠 Test your advanced knowledge!',
        question: "In ventricular tachycardia, what does the axis help determine?",
        options: [
          "The heart rate of the tachycardia",
          "The likely origin of the VT in the ventricles",
          "The patient's hemodynamic stability",
          "The duration of the tachycardia"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! In VT, the axis helps localize the likely origin: left axis deviation suggests right ventricular origin, right axis deviation suggests left ventricular origin."
      }
      
    ],
    keyPoints: [
      'ECG axis represents the heart\'s main electrical direction',
      'Normal axis range is -30° to +90°',
      'Use Lead I and aVF to determine axis quadrant',
      'Left axis deviation: Lead I positive, aVF negative',
      'Right axis deviation: Lead I negative, aVF positive',
      'Extreme axis deviation requires immediate clinical evaluation'
    ],
    resources: [
      {
        type: 'reference',
        title: 'ECG Axis Reference Guide',
        url: '/resources/ecg-axis-guide.pdf'
      },
      {
        type: 'video', 
        title: 'Axis Calculation Methods',
        url: '/resources/axis-calculation-video.mp4'
      },
      {
        type: 'tool',
        title: 'ECG Axis Calculator',
        url: '/tools/axis-calculator'
      }
    ]
  },
  
  tasks: [],
  
  completed: false,
  attempts: 0,  
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
} as any; // Type assertion to allow extended properties
