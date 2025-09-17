import { Lesson } from '@/types/learning';

export const optimizedLesson10: Lesson = {
  id: 'optimized-lesson-10',
  moduleId: 'module-1',
  title: 'Module 1 Complete: ECG Fundamentals Mastery',
  description: 'Comprehensive Module 1 summary and final assessment covering all ECG fundamentals: Reading, Interpretation, Heart Blocks, Artifact Recognition, and Axis Mastery. Includes video summaries, comprehensive assessments, PDF download, and module completion certification.',
  order: 10,
  estimatedTime: 60,
  
  content: {
    type: 'mixed',
    introduction: '🎉 Congratulations on reaching the final lesson of Module 1! This comprehensive summary brings together everything you\'ve learned about ECG fundamentals. You\'ll review key concepts through interactive summaries, complete comprehensive assessments, and earn your Module 1 completion certificate with downloadable PDF reference materials.',
    sections: [
      {
        id: 'module-overview',
        title: '🏆 Module 1 Journey Complete',
        content: 'LESSON 6: Basic Reading → LESSON 7: Systematic Interpretation → LESSON 8: Artifact Recognition → LESSON 9: Axis Mastery → LESSON 10: Module Mastery Assessment',
        mediaType: 'image'
      }
    ],
    summary: 'Complete mastery of ECG fundamentals with comprehensive assessment, video review, PDF resources, and module completion certification.',
    
    slides: [
      
      // ===============================================
      // 🎯 MODULE 1 SUMMARY OVERVIEW (5 slides)
      // ===============================================
      {
        id: 'module1-celebration',
        title: '🎉 Module 1 Journey Complete!',
        content: 'INCREDIBLE ACHIEVEMENT! You\'ve mastered ECG fundamentals through 5 comprehensive lessons. From basic reading to advanced axis interpretation, you\'ve built the foundation for expert ECG analysis.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#047857',
        animation: 'fade',
        imageUrl: '/lessonimages/module1-completion-celebration.png',
        imageAlt: 'Module 1 completion celebration',
        highlights: [
          '🏆 5 lessons completed successfully',
          '📊 180+ interactive slides mastered',
          '🎯 50+ quizzes passed',
          '🧭 Ready for Module 2 challenges'
        ],
        hint: '🏆 You\'ve achieved ECG fundamentals mastery!'
      },

      // 🎬 YOUTUBE VIDEO: Module 1 - Decoding The ECG Code
      {
        id: 'youtube-module1-decoding',
        title: '🎬 Module 1: Decoding The ECG Code - Complete Course',
        content: 'Interactive ECG interpretation course - Module 1. Perfect comprehensive review of everything you\'ve learned in this module!',
        type: 'youtube',
        youtubeId: 'RCShRZ396SE',
        videoDuration: 2400,
        minimumWatchTime: 1800,
        requireFullWatch: false,
        backgroundColor: '#fefce8',
        textColor: '#a16207',
        animation: 'fade',
        hint: '🎓 Comprehensive review of Module 1 concepts!'
      },

      // 🎬 YOUTUBE VIDEO: 12-Lead ECG Placement
      {
        id: 'youtube-ecg-placement',
        title: '🎬 12-Lead ECG: Proper Lead Placement',
        content: 'Master proper technique for 12-lead ECG placement. Essential practical skill to complement your theoretical knowledge!',
        type: 'youtube',
        youtubeId: '4xIwZPQwmjY',
        videoDuration: 480,
        minimumWatchTime: 360,
        requireFullWatch: true,
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        hint: '🔧 Essential practical skill for ECG mastery!'
      },

      {
        id: 'knowledge-recap',
        title: 'Your Knowledge Journey',
        type: 'tabs',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: '📖 Lesson 6: Reading',
            content: 'ECG Paper Interpretation\n\n• Paper speed & calibration\n• Lead placement systems\n• Basic wave recognition\n• Normal variants'
          },
          {
            title: '🔍 Lesson 7: Analysis',
            content: 'Systematic Interpretation\n\n• Rate calculation methods\n• Rhythm assessment\n• Axis determination\n• Interval measurements'
          },
          {
            title: '⚡ Lesson 8: Artifacts',
            content: 'Artifact Recognition\n\n• Motion artifacts\n• Electrical interference\n• Technical problems\n• Clinical correlation'
          },
          {
            title: '🧭 Lesson 9: Axis',
            content: 'Axis Mastery\n\n• Normal ranges\n• Calculation methods\n• Deviation patterns\n• Clinical significance'
          }
        ],
        hint: '📚 Look how much you\'ve learned!'
      },

      {
        id: 'skills-mastered',
        title: 'Skills You\'ve Mastered',
        type: 'accordion',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        accordionItems: [
          {
            title: '✅ ECG Reading Foundation',
            content: 'Paper interpretation skills\nLead system understanding\nWave recognition ability\nNormal variant identification'
          },
          {
            title: '✅ Systematic Analysis',
            content: 'Rate calculation mastery\nRhythm assessment skills\nAxis determination techniques\nInterval measurement precision'
          },
          {
            title: '✅ Artifact Detection',
            content: 'Motion artifact recognition\nElectrical interference identification\nTechnical problem troubleshooting\nClinical correlation abilities'
          },
          {
            title: '✅ Clinical Confidence',
            content: 'Normal vs abnormal distinction\nWhen to be concerned\nClinical correlation skills\nReady for advanced modules'
          }
        ],
        hint: '🎯 These skills are your foundation!'
      },

      {
        id: 'assessment-preparation',
        title: 'Final Assessment Preparation',
        type: 'steps',
        backgroundColor: '#fef5e7',
        textColor: '#92400e',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Review Key Concepts',
            description: 'Watch video summaries and review highlighted key points from each lesson'
          },
          {
            number: 2,
            title: 'Take Practice Quizzes',
            description: 'Retake unit quizzes to reinforce learning and identify any weak areas'
          },
          {
            number: 3,
            title: 'Complete Final Assessment',
            description: '25 comprehensive questions covering all Module 1 content (80% required)'
          },
          {
            number: 4,
            title: 'Earn Certification',
            description: 'Download your certificate and PDF study guide upon successful completion'
          }
        ],
        hint: '📝 You\'re ready for this challenge!'
      },

      {
        id: 'whats-next-preview',
        title: 'What\'s Next: Module 2 Preview',
        type: 'flashcard',
        backgroundColor: '#fdf4ff',
        textColor: '#86198f',
        animation: 'fade',
        flashcardFront: '🚀 Ready for your next adventure?',
        flashcardBack: 'MODULE 2: ADVANCED ARRHYTHMIAS! 🔥\n\n• Atrial fibrillation mastery\n• Ventricular tachycardia recognition\n• Heart block complexities\n• Emergency ECG scenarios\n\nReal-world clinical challenges await! 💪',
        hint: '🚀 Your next learning adventure awaits!'
      },

      // ===============================================
      // 📹 VIDEO SUMMARY REVIEW (4 video slides)
      // ===============================================
      {
        id: 'video-summary-intro',
        title: '📹 Video Summary Review',
        content: 'Before your final assessment, review key concepts with these comprehensive video summaries. Each video reinforces critical knowledge from your Module 1 journey.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/video-review-intro.png',
        imageAlt: 'Video summary review introduction',
        highlights: [
          '🎬 4 comprehensive review videos',
          '⏱️ 35 minutes of expert instruction',
          '📊 Visual reinforcement of concepts',
          '🎯 Perfect assessment preparation'
        ],
        hint: '📺 Visual reinforcement of key concepts!'
      },

      {
        id: 'video-ecg-basics',
        title: 'Video 1: ECG Reading Fundamentals',
        type: 'tabs',
        backgroundColor: '#f0fff4',
        textColor: '#047857',
        animation: 'fade',
        tabs: [
          {
            title: '📐 Paper Basics',
            content: '8-minute comprehensive review\n\n• Paper speed & calibration\n• Grid measurements\n• Timing calculations\n• Clinical applications'
          },
          {
            title: '🔌 Lead Systems',
            content: 'Lead placement mastery\n\n• 12-lead configuration\n• Limb vs precordial leads\n• Normal progressions\n• Troubleshooting tips'
          },
          {
            title: '⚡ Wave Recognition',
            content: 'Essential wave patterns\n\n• P-QRS-T morphology\n• Normal variants\n• Age-related changes\n• Clinical significance'
          },
          {
            title: '🎬 Watch Now',
            content: 'YouTube Video ID: ECG_BASICS_SUMMARY\n\nPerfect refresher before your assessment!\n\nDuration: 8 minutes of expert instruction'
          }
        ],
        hint: '🎬 Perfect refresher before assessment!'
      },

      {
        id: 'video-systematic-approach',
        title: 'Video 2: Systematic ECG Interpretation',
        type: 'steps',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Rate Calculation',
            description: 'Multiple methods for accurate rate determination in regular and irregular rhythms'
          },
          {
            number: 2,
            title: 'Rhythm Assessment',
            description: 'P-wave analysis, regularity evaluation, and rhythm classification techniques'
          },
          {
            number: 3,
            title: 'Axis Determination',
            description: 'Quick quadrant method and precise degree calculation for cardiac axis'
          },
          {
            number: 4,
            title: 'Interval Measurements',
            description: 'PR, QRS, and QT interval assessment with clinical significance'
          },
          {
            number: 5,
            title: 'Morphology Analysis',
            description: 'Wave shape assessment and pattern recognition for comprehensive interpretation'
          }
        ],
        hint: '🔄 The method that never fails!'
      },

      {
        id: 'video-artifacts-axis',
        title: 'Video 3: Artifacts & Axis Mastery',
        type: 'accordion',
        backgroundColor: '#fef5e7',
        textColor: '#a16207',
        animation: 'fade',
        accordionItems: [
          {
            title: '🔧 Artifact Recognition',
            content: 'Motion artifacts: Baseline wander patterns\nElectrical interference: 60Hz noise identification\nTechnical problems: Lead reversal detection\nClinical correlation: When to repeat vs interpret'
          },
          {
            title: '🧭 Normal Axis Range',
            content: 'Normal: -30° to +90°\nLeft deviation: -30° to -90°\nRight deviation: +90° to +180°\nExtreme deviation: -90° to +180°'
          },
          {
            title: '📊 Calculation Methods',
            content: 'Quadrant method: Quick assessment\nPrecise calculation: Using leads I and aVF\nClinical shortcuts: Pattern recognition\nPitfall avoidance: Common mistakes'
          },
          {
            title: '🎬 Video Details',
            content: 'Duration: 12 minutes\nYouTube ID: ARTIFACTS_AXIS_MASTERY\nCovers: Lessons 8-9 key concepts\nBonus: Clinical pearls and troubleshooting'
          }
        ],
        hint: '🔍 Master the tricky concepts!'
      },

      {
        id: 'video-comprehensive-review',
        title: 'Video 4: Comprehensive Module Review',
        type: 'flashcard',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcardFront: '🎬 Ready for the complete review?',
        flashcardBack: 'COMPREHENSIVE MODULE REVIEW (15 minutes)\n\n📋 All lessons integrated\n🎯 Assessment preparation\n💡 Expert tips and tricks\n🏆 Confidence building\n\nYouTube ID: MODULE_1_COMPLETE\n\nWatch this before your final assessment!',
        hint: '🎯 Your final preparation step!'
      },

      {
        id: 'final-confidence-boost',
        title: '💪 Final Confidence Boost',
        type: 'highlight',
        backgroundColor: '#f0fff4',
        textColor: '#047857',
        animation: 'fade',
        imageUrl: '/lessonimages/confidence-boost-celebration.png',
        imageAlt: 'Confidence boost for final assessment',
        highlights: [
          '🧠 You\'ve absorbed 180+ comprehensive slides',
          '🎯 Mastered 50+ interactive quiz questions',
          '⚡ Completed 4 complete lesson modules',
          '🏆 Ready to prove your ECG expertise!'
        ],
        hint: '💪 You\'ve got this! Time to show your mastery!'
      },

      {
        id: 'assessment-strategy',
        title: 'Smart Assessment Strategy',
        type: 'steps',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Read Each Question Carefully',
            description: 'Take your time to understand what\'s being asked. Look for key words and clinical context.'
          },
          {
            number: 2,
            title: 'Use Systematic Approach',
            description: 'Apply Rate → Rhythm → Axis → Intervals → Morphology for interpretation questions.'
          },
          {
            number: 3,
            title: 'Eliminate Obviously Wrong Answers',
            description: 'Use process of elimination to narrow down choices before making final selection.'
          },
          {
            number: 4,
            title: 'Trust Your Training',
            description: 'You\'ve learned this material thoroughly. Go with your educated first instinct.'
          }
        ],
        hint: '🧠 Strategy + knowledge = success!'
      },

      {
        id: 'final-reminders',
        title: 'Key Reminders for Success',
        type: 'accordion',
        backgroundColor: '#fef5e7',
        textColor: '#92400e',
        animation: 'fade',
        accordionItems: [
          {
            title: '📏 ECG Basics Never Forget',
            content: 'Paper speed: 25mm/sec standard\nCalibration: 10mm = 1mV\nLead placement: Precision matters\nWave recognition: P-QRS-T sequence'
          },
          {
            title: '🔄 Systematic Method',
            content: 'Rate: Use multiple methods\nRhythm: Check P-wave consistency\nAxis: Quadrant method works\nIntervals: Normal ranges crucial'
          },
          {
            title: '⚡ Artifact Awareness',
            content: 'Motion: Baseline wander patterns\nElectrical: 60Hz interference\nTechnical: Lead reversal clues\nClinical: When to repeat ECG'
          },
          {
            title: '🎯 Clinical Confidence',
            content: 'Normal variants: Age and gender differences\nWhen to worry: Know the red flags\nClinical correlation: ECG + patient\nNext steps: Advanced modules await!'
          }
        ],
        hint: '🎯 These fundamentals are your foundation!'
      }
    ],
    
    keyPoints: [
      "Module 1 covers complete ECG fundamentals foundation",
      "Systematic interpretation prevents missed findings",
      "Artifact recognition essential for accurate diagnosis", 
      "Axis interpretation provides crucial clinical information",
      "80% passing score required for module completion",
      "Certificate and PDF resources awarded upon completion"
    ],
    
    resources: [
      {
        title: "Module 1 Complete Study Guide (PDF)",
        url: "/downloads/module1-complete-study-guide.pdf",
        type: "reference",
        description: "Comprehensive 50-page PDF covering all Module 1 content with quick reference charts"
      },
      {
        title: "ECG Fundamentals Quick Reference Card",
        url: "/downloads/ecg-fundamentals-reference-card.pdf", 
        type: "reference",
        description: "Pocket-sized reference card for clinical use"
      },
      {
        title: "Module 1 Video Library",
        url: "/videos/module1-complete-library",
        type: "video",
        description: "All Module 1 instructional videos in one convenient location"
      },
      {
        title: "Interactive ECG Practice Tool",
        url: "/tools/ecg-practice-module1",
        type: "tool",
        description: "Practice ECG interpretation with Module 1 concepts"
      }
    ]
  },

  // ===============================================
  // 🎯 COMPREHENSIVE MODULE 1 TASKS
  // ===============================================
  tasks: [
    
    // ==================== PREPARATORY VIDEO TASK ====================
    {
      id: 'preparation-video',
      type: 'video',
      xp: 25,
      youtubeVideoId: 'MODULE1_FINAL_PREP',
      videoTitle: 'Module 1 Final Assessment Preparation',
      videoDescription: 'Complete preparation for your Module 1 final assessment. Reviews all key concepts and assessment strategies.',
      videoDuration: 900, // 15 minutes
      minimumWatchTime: 720, // Must watch at least 12 minutes
      
      content: {
        title: 'Module 1 Assessment Preparation Video',
        videoTitle: 'Complete Module 1 Review & Assessment Strategies',
        videoDescription: 'This comprehensive 15-minute video prepares you for the Module 1 final assessment. Dr. Sarah explains key concepts, common mistakes to avoid, and optimal assessment strategies.',
        videoDuration: 900,
        minimumWatchTime: 720,
        required: true,
        completionRequirement: 'Watch at least 12 minutes to unlock final assessment',
        completionMessage: 'Excellent preparation! You\'re ready for the final assessment! +25 XP! 🎯',
        retryMessage: 'Please watch at least 12 minutes to ensure proper preparation.'
      }
    },

    // ==================== LESSON 6 REVIEW QUIZ ====================
    {
      id: 'lesson6-review',
      type: 'quiz',
      xp: 15,
      
      content: {
        question: 'For proper ECG interpretation, what is the standard paper speed and voltage calibration?',
        options: [
          '25 mm/sec and 10 mm/mV',
          '50 mm/sec and 10 mm/mV', 
          '25 mm/sec and 5 mm/mV',
          '12.5 mm/sec and 10 mm/mV'
        ],
        correctAnswer: 0,
        explanation: 'Perfect! Standard ECG paper runs at 25 mm/sec with 10 mm/mV calibration. This allows accurate measurement of intervals and voltages.',
        hint: 'Remember the standard settings for all clinical ECGs',
        imageUrl: '/lessonimages/ecg-paper-calibration.png',
        completionMessage: 'Excellent! ECG basics mastered! +15 XP! 📜',
        retryMessage: 'Review the ECG paper fundamentals and try again.'
      }
    },

    // ==================== LESSON 7 REVIEW QUIZ ====================
    {
      id: 'lesson7-review',
      type: 'quiz',
      xp: 15,
      
      content: {
        question: 'What is the correct systematic approach for ECG interpretation?',
        options: [
          'Rate → Axis → Rhythm → Intervals → Morphology',
          'Rate → Rhythm → Axis → Intervals → Morphology',
          'Rhythm → Rate → Axis → Morphology → Intervals',
          'Axis → Rate → Rhythm → Intervals → Morphology'
        ],
        correctAnswer: 1,
        explanation: 'Excellent! The systematic approach is: Rate → Rhythm → Axis → Intervals → Morphology. This sequence ensures nothing is missed.',
        hint: 'Remember the logical sequence that builds from basic to complex',
        imageUrl: '/lessonimages/systematic-approach-sequence.png',
        completionMessage: 'Outstanding! Systematic approach mastered! +15 XP! 🔄',
        retryMessage: 'Review the systematic interpretation method and try again.'
      }
    },

    // ==================== LESSON 8 REVIEW QUIZ ====================
    {
      id: 'lesson8-review',
      type: 'quiz',
      xp: 15,
      
      content: {
        question: 'What is the most common cause of artifact that can mimic ventricular tachycardia?',
        options: [
          'Electrical interference from devices',
          'Poor electrode contact',
          'Patient movement/muscle artifact',
          'Lead wire problems'
        ],
        correctAnswer: 2,
        explanation: 'Perfect! Patient movement and muscle artifact are the most common causes of irregular baseline that can mimic dangerous arrhythmias like VT.',
        hint: 'Think about what causes the most frequent false alarms',
        imageUrl: '/lessonimages/movement-artifact-example.png',
        completionMessage: 'Excellent! Artifact recognition mastered! +15 XP! 🔍',
        retryMessage: 'Review artifact types and their appearances.'
      }
    },

    // ==================== LESSON 9 REVIEW QUIZ ====================
    {
      id: 'lesson9-review',
      type: 'quiz',
      xp: 15,
      
      content: {
        question: 'Using the quadrant method, if Lead I is negative and aVF is positive, what is the axis?',
        options: [
          'Normal axis (0° to +90°)',
          'Left axis deviation (-30° to -90°)',
          'Right axis deviation (+90° to +180°)',
          'Extreme axis deviation (-90° to ±180°)'
        ],
        correctAnswer: 2,
        explanation: 'Excellent! Lead I negative + aVF positive = Right axis deviation (+90° to +180°). This is the classic quadrant method application.',
        hint: 'Use the two-lead quadrant method systematically',
        imageUrl: '/lessonimages/quadrant-method-example.png',
        completionMessage: 'Outstanding! Axis mastery achieved! +15 XP! 🧭',
        retryMessage: 'Review the quadrant method for axis determination.'
      }
    },

    // ==================== COMPREHENSIVE CASE STUDIES ====================
    {
      id: 'comprehensive-case-1',
      type: 'case-study',
      xp: 20,
      
      content: {
        patientInfo: {
          title: 'Emergency Department Case',
          age: 45,
          gender: 'male',
          symptoms: 'Chest pain and shortness of breath',
          history: 'Hypertension, no previous cardiac history'
        },
        question: 'This 45-year-old male presents to ED with chest pain. ECG shows: Rate 85 bpm, regular rhythm, Lead I positive, aVF positive, PR interval 0.16 sec, QRS width 0.09 sec. What is your interpretation?',
        options: [
          'Abnormal ECG requiring immediate intervention',
          'Normal ECG with reassuring findings',
          'Artifact masquerading as normal rhythm',
          'Technical error requiring repeat ECG'
        ],
        correctAnswer: 1,
        explanation: 'Excellent systematic analysis! Rate 85 (normal), regular rhythm (normal), axis normal (I+ aVF+), PR 0.16 (normal), QRS 0.09 (normal). This is a normal ECG despite the patient\'s symptoms.',
        hint: 'Apply the systematic approach step by step',
        imageUrl: '/ecg/medical_accurate/normal_100bpm.png',
        completionMessage: 'Outstanding clinical reasoning! +20 XP! 🩺',
        retryMessage: 'Apply the systematic interpretation method to each parameter.'
      }
    },

    {
      id: 'comprehensive-case-2',
      type: 'case-study',
      xp: 20,
      
      content: {
        patientInfo: {
          title: 'ICU Monitoring Alert',
          age: 70,
          gender: 'female',
          symptoms: 'Telemetry alarm for irregular rhythm',
          history: 'Post-operative day 2 after hip surgery'
        },
        question: 'Telemetry shows irregular baseline with what appears to be rapid ventricular rhythm. Patient is comfortable, moving in bed, and talking. What is your priority action?',
        options: [
          'Prepare for immediate cardioversion',
          'Start antiarrhythmic medications',
          'Check electrode placement and artifact',
          'Call cardiology emergency consult'
        ],
        correctAnswer: 2,
        explanation: 'Perfect clinical judgment! Patient comfort and movement suggest artifact. Always correlate ECG findings with clinical presentation. Movement artifact commonly mimics dangerous rhythms.',
        hint: 'Consider clinical context and patient appearance',
        imageUrl: '/lessonimages/case2-movement-artifact.png',
        completionMessage: 'Excellent clinical correlation! +20 XP! 👩‍⚕️',
        retryMessage: 'Remember to always correlate ECG with clinical presentation.'
      }
    },

    // ==================== FINAL COMPREHENSIVE ASSESSMENT ====================
    {
      id: 'final-comprehensive-assessment',
      type: 'final-assessment',
      xp: 100,
      
      content: {
        prerequisiteTask: 'preparation-video',
        prerequisiteMessage: 'Please complete the preparation video before starting the final assessment.',
        
        instructions: 'This comprehensive assessment evaluates your complete Module 1 mastery. You have 45 minutes to complete 25 questions covering ECG reading, systematic interpretation, artifact recognition, and axis analysis. A score of 80% or higher is required for module completion.',
        
        questions: [
          // ECG Basics Questions (5 questions)
          {
            id: 'basics-1',
            type: 'multiple-choice',
            question: 'At standard paper speed (25 mm/sec), how much time does each large box represent?',
            options: ['0.04 seconds', '0.20 seconds', '0.12 seconds', '0.08 seconds'],
            correctAnswer: 1,
            explanation: 'Correct! Each large box (5 mm) represents 0.20 seconds at standard 25 mm/sec paper speed.',
            hint: 'Large box = 5 small boxes × 0.04 seconds each',
            imageUrl: '/lessonimages/ecg-paper-timing.png',
            imageAlt: 'ECG paper timing diagram'
          },
          
          {
            id: 'basics-2', 
            type: 'multiple-choice',
            question: 'Which lead provides the best view of the inferior wall of the heart?',
            options: ['Lead I', 'Lead II', 'Lead V1', 'Lead aVL'],
            correctAnswer: 1,
            explanation: 'Excellent! Lead II provides the best view of the inferior wall and is commonly used for rhythm monitoring.',
            hint: 'Think about anatomical positioning of leads',
            imageUrl: '/lessonimages/lead-anatomy-correlation.png',
            imageAlt: 'Lead anatomical correlation diagram'
          },

          {
            id: 'basics-3',
            type: 'multiple-choice', 
            question: 'Normal QRS duration should be less than:',
            options: ['0.10 seconds', '0.12 seconds', '0.16 seconds', '0.20 seconds'],
            correctAnswer: 1,
            explanation: 'Perfect! Normal QRS duration is less than 0.12 seconds (3 small boxes). Wider QRS suggests conduction delays.',
            hint: 'Remember the upper limit of normal conduction',
            imageUrl: '/ecg/medical_accurate/normal_60bpm.png',
            imageAlt: 'Normal QRS duration measurement'
          },

          {
            id: 'basics-4',
            type: 'multiple-choice',
            question: 'The P wave represents:',
            options: ['Ventricular depolarization', 'Atrial depolarization', 'Ventricular repolarization', 'Atrial repolarization'],
            correctAnswer: 1,
            explanation: 'Correct! The P wave represents atrial depolarization, the electrical activation of the atria.',
            hint: 'Think about the first electrical event in each heartbeat',
            imageUrl: '/lessonimages/p-wave-physiology.png',
            imageAlt: 'P wave physiological correlation'
          },

          {
            id: 'basics-5',
            type: 'multiple-choice',
            question: 'Normal heart rate range for adults is:',
            options: ['50-90 bpm', '60-100 bpm', '70-110 bpm', '80-120 bpm'],
            correctAnswer: 1,
            explanation: 'Excellent! Normal adult heart rate is 60-100 bpm. Below 60 is bradycardia, above 100 is tachycardia.',
            hint: 'Standard definition used in all clinical settings',
            imageUrl: '/ecg/medical_accurate/normal_70bpm.png',
            imageAlt: 'Normal heart rate ranges by age'
          },

          // Systematic Interpretation Questions (5 questions)
          {
            id: 'systematic-1',
            type: 'multiple-choice',
            question: 'When using the systematic approach, what should you assess FIRST?',
            options: ['Heart rate', 'Rhythm regularity', 'Axis deviation', 'QRS morphology'],
            correctAnswer: 0,
            explanation: 'Perfect! Rate is always first in systematic interpretation. It determines patient stability and guides subsequent analysis.',
            hint: 'Think about what determines immediate patient status',
            imageUrl: '/lessonimages/systematic-step1-rate.png',
            imageAlt: 'Systematic approach step 1 - rate assessment'
          },

          {
            id: 'systematic-2',
            type: 'multiple-choice',
            question: 'Normal PR interval range is:',
            options: ['0.08-0.12 seconds', '0.12-0.20 seconds', '0.16-0.24 seconds', '0.20-0.28 seconds'],
            correctAnswer: 1,
            explanation: 'Excellent! Normal PR interval is 0.12-0.20 seconds, representing normal AV node conduction time.',
            hint: 'Time from atrial activation to ventricular activation',
            imageUrl: '/ecg/medical_accurate/normal_75bpm.png',
            imageAlt: 'Normal PR interval measurement'
          },

          {
            id: 'systematic-3',
            type: 'multiple-choice',
            question: 'To assess rhythm regularity, you should:',
            options: ['Count the heart rate only', 'Measure R-R intervals consistently', 'Look at P wave morphology', 'Check QRS width'],
            correctAnswer: 1,
            explanation: 'Correct! Rhythm regularity is assessed by measuring R-R intervals. Equal intervals = regular rhythm.',
            hint: 'Consistent spacing between similar waveforms',
            imageUrl: '/lessonimages/rhythm-regularity-assessment.png',
            imageAlt: 'Rhythm regularity assessment technique'
          },

          {
            id: 'systematic-4',
            type: 'multiple-choice',
            question: 'Which interval represents ventricular repolarization time?',
            options: ['PR interval', 'QRS duration', 'QT interval', 'RR interval'],
            correctAnswer: 2,
            explanation: 'Perfect! QT interval represents total ventricular depolarization and repolarization time.',
            hint: 'From start of ventricular activation to end of recovery',
            imageUrl: '/lessonimages/qt-interval-physiology.png',
            imageAlt: 'QT interval physiological significance'
          },

          {
            id: 'systematic-5',
            type: 'multiple-choice',
            question: 'In systematic interpretation, when should you assess ST segments?',
            options: ['First, before rate', 'After rate and rhythm', 'After complete morphology analysis', 'Only if chest pain present'],
            correctAnswer: 2,
            explanation: 'Excellent! ST segment analysis comes after rate, rhythm, axis, and intervals as part of morphology assessment.',
            hint: 'Follow the systematic sequence completely',
            imageUrl: '/lessonimages/systematic-sequence-complete.png',
            imageAlt: 'Complete systematic interpretation sequence'
          },

          // Artifact Recognition Questions (5 questions)
          {
            id: 'artifact-1',
            type: 'multiple-choice',
            question: 'Which type of artifact is most likely to cause a false VT alarm?',
            options: ['60 Hz electrical interference', 'Loose electrode', 'Patient movement', 'Lead wire break'],
            correctAnswer: 2,
            explanation: 'Perfect! Patient movement creates irregular baseline activity that closely mimics ventricular tachycardia patterns.',
            hint: 'Think about what creates irregular, rapid-appearing complexes',
            imageUrl: '/lessonimages/movement-artifact-vt-mimic.png',
            imageAlt: 'Movement artifact mimicking VT'
          },

          {
            id: 'artifact-2',
            type: 'multiple-choice',
            question: 'How can you distinguish between artifact and true arrhythmia?',
            options: ['Check heart rate only', 'Correlate with patient clinical status', 'Look at one lead only', 'Ignore and continue monitoring'],
            correctAnswer: 1,
            explanation: 'Excellent! Clinical correlation is key. Patients with true dangerous arrhythmias look sick; artifact patients appear well.',
            hint: 'The patient\'s appearance tells the story',
            imageUrl: '/lessonimages/clinical-correlation-importance.png',
            imageAlt: 'Clinical correlation in artifact detection'
          },

          {
            id: 'artifact-3',
            type: 'multiple-choice',
            question: 'What causes 60 Hz electrical interference on ECGs?',
            options: ['Patient movement', 'Poor skin preparation', 'Nearby electrical devices', 'Broken lead wires'],
            correctAnswer: 2,
            explanation: 'Correct! 60 Hz interference comes from nearby electrical devices like monitors, pumps, or poor electrical grounding.',
            hint: 'Think about the frequency of household electricity',
            imageUrl: '/lessonimages/60hz-interference-sources.png',
            imageAlt: '60 Hz electrical interference sources'
          },

          {
            id: 'artifact-4',
            type: 'multiple-choice',
            question: 'The best immediate action when artifact is suspected is:',
            options: ['Start emergency medications', 'Check patient and electrode placement', 'Call a code blue', 'Increase monitor alarm limits'],
            correctAnswer: 1,
            explanation: 'Perfect! Always check the patient first, then electrode placement. This quickly differentiates artifact from real emergency.',
            hint: 'Patient assessment comes before technical intervention',
            imageUrl: '/lessonimages/artifact-response-protocol.png',
            imageAlt: 'Artifact response protocol flowchart'
          },

          {
            id: 'artifact-5',
            type: 'multiple-choice',
            question: 'Which lead placement error causes the most dramatic ECG changes?',
            options: ['V1-V2 reversal', 'Right arm-left arm reversal', 'V5-V6 reversal', 'Leg lead misplacement'],
            correctAnswer: 1,
            explanation: 'Excellent! Right arm-left arm reversal dramatically changes the ECG appearance and can mimic pathology.',
            hint: 'Limb lead reversals have the biggest impact',
            imageUrl: '/lessonimages/limb-lead-reversal-effects.png',
            imageAlt: 'Effects of limb lead reversal'
          },

          // Axis Analysis Questions (5 questions)
          {
            id: 'axis-1',
            type: 'multiple-choice',
            question: 'Normal cardiac axis range is:',
            options: ['-30° to +90°', '0° to +90°', '-45° to +120°', '+30° to +120°'],
            correctAnswer: 0,
            explanation: 'Perfect! Normal cardiac axis is -30° to +90°. This represents normal left ventricular dominance.',
            hint: 'Most widely accepted normal range in cardiology',
            imageUrl: '/ecg/medical_accurate/normal_80bpm.png',
            imageAlt: 'Normal cardiac axis range on hexaxial system'
          },

          {
            id: 'axis-2',
            type: 'multiple-choice',
            question: 'Using the quadrant method, Lead I positive and aVF negative indicates:',
            options: ['Normal axis', 'Right axis deviation', 'Left axis deviation', 'Extreme axis deviation'],
            correctAnswer: 2,
            explanation: 'Excellent! Lead I positive + aVF negative = Left axis deviation (-30° to -90°).',
            hint: 'Use the two-lead quadrant method systematically',
            imageUrl: '/lessonimages/quadrant-method-lad.png',
            imageAlt: 'Quadrant method showing left axis deviation'
          },

          {
            id: 'axis-3',
            type: 'multiple-choice',
            question: 'The most common cause of left axis deviation is:',
            options: ['Left ventricular hypertrophy', 'Left anterior fascicular block', 'Inferior myocardial infarction', 'Hyperkalemia'],
            correctAnswer: 1,
            explanation: 'Perfect! Left anterior fascicular block (LAFB) is the most common cause of left axis deviation.',
            hint: 'Think about conduction system abnormalities',
            imageUrl: '/lessonimages/lafb-common-cause.png',
            imageAlt: 'LAFB as common cause of LAD'
          },

          {
            id: 'axis-4',
            type: 'multiple-choice',
            question: 'Right axis deviation in adults is most concerning for:',
            options: ['Normal variant', 'Right ventricular hypertrophy', 'Left heart disease', 'Technical error'],
            correctAnswer: 1,
            explanation: 'Excellent! In adults, right axis deviation often indicates right ventricular hypertrophy from pulmonary disease.',
            hint: 'RAD in adults is usually pathological',
            imageUrl: '/lessonimages/rad-rvh-correlation.png',
            imageAlt: 'Right axis deviation and RVH correlation'
          },

          {
            id: 'axis-5',
            type: 'multiple-choice',
            question: 'Extreme axis deviation (both Lead I and aVF negative) requires immediate consideration of:',
            options: ['Normal variant', 'Lead placement error', 'Ventricular tachycardia', 'Both B and C'],
            correctAnswer: 3,
            explanation: 'Outstanding! Extreme axis deviation requires immediate consideration of both lead misplacement and ventricular tachycardia.',
            hint: 'Always consider both technical and pathological causes',
            imageUrl: '/lessonimages/extreme-axis-differential.png',
            imageAlt: 'Extreme axis deviation differential diagnosis'
          },

          // Integration and Clinical Application (5 questions)
          {
            id: 'integration-1',
            type: 'case-scenario',
            question: 'A 65-year-old with COPD has ECG showing: Rate 95, regular rhythm, Lead I negative, aVF positive, normal intervals. Most likely axis and significance?',
            clinicalScenario: {
              patientAge: 65,
              patientGender: 'male',
              symptoms: 'Shortness of breath',
              history: 'COPD, pulmonary hypertension',
              ecgDescription: 'Lead I negative, aVF positive'
            },
            options: [
              'Normal axis - reassuring finding',
              'Left axis deviation - consider heart block',
              'Right axis deviation - consistent with RVH',
              'Extreme axis deviation - emergency evaluation'
            ],
            correctAnswer: 2,
            explanation: 'Excellent clinical correlation! Lead I negative + aVF positive = RAD, consistent with RVH from COPD/pulmonary hypertension.',
            hint: 'Connect axis findings with patient\'s underlying disease',
            imageUrl: '/lessonimages/copd-rad-case.png',
            imageAlt: 'COPD patient with right axis deviation'
          },

          {
            id: 'integration-2',
            type: 'case-scenario',
            question: 'Telemetry shows apparent VT in a post-op patient who is sitting up, talking, and comfortable. Best next action?',
            clinicalScenario: {
              patientAge: 55,
              patientGender: 'female',
              symptoms: 'None - comfortable and talking',
              history: 'Post-operative day 1',
              ecgDescription: 'Irregular wide complex rhythm on monitor'
            },
            options: [
              'Immediate defibrillation',
              'IV antiarrhythmic medications',
              'Check patient and electrode placement',
              'Call code blue immediately'
            ],
            correctAnswer: 2,
            explanation: 'Perfect clinical judgment! Comfortable, talking patient with "VT" suggests artifact. Always check patient first.',
            hint: 'Clinical appearance doesn\'t match ECG severity',
            imageUrl: '/lessonimages/artifact-vs-vt-case.png',
            imageAlt: 'Artifact mimicking VT in comfortable patient'
          },

          {
            id: 'integration-3',
            type: 'multiple-choice',
            question: 'For a complete ECG interpretation, you must systematically assess:',
            options: [
              'Rate and rhythm only',
              'Rate, rhythm, and axis only',
              'Rate, rhythm, axis, intervals, and morphology',
              'Only abnormal findings'
            ],
            correctAnswer: 2,
            explanation: 'Excellent! Complete systematic interpretation requires: Rate → Rhythm → Axis → Intervals → Morphology. Never skip steps.',
            hint: 'All five components prevent missed findings',
            imageUrl: '/lessonimages/complete-systematic-approach.png',
            imageAlt: 'Complete systematic ECG interpretation approach'
          },

          {
            id: 'integration-4',
            type: 'multiple-choice',
            question: 'When ECG findings don\'t match clinical presentation, you should:',
            options: [
              'Trust the ECG over clinical signs',
              'Ignore the ECG completely',
              'Consider artifact and repeat ECG',
              'Assume equipment malfunction'
            ],
            correctAnswer: 2,
            explanation: 'Perfect! When ECG and clinical presentation don\'t match, suspect artifact and obtain repeat ECG with careful electrode placement.',
            hint: 'Clinical correlation is always essential',
            imageUrl: '/lessonimages/ecg-clinical-correlation.png',
            imageAlt: 'Importance of ECG-clinical correlation'
          },

          {
            id: 'integration-5',
            type: 'multiple-choice',
            question: 'The primary goal of systematic ECG interpretation is to:',
            options: [
              'Impress colleagues with knowledge',
              'Ensure consistent, complete analysis',
              'Find complex abnormalities quickly',
              'Avoid using computer interpretation'
            ],
            correctAnswer: 1,
            explanation: 'Outstanding! Systematic interpretation ensures consistent, complete analysis and prevents missed findings through standardized approach.',
            hint: 'Consistency and completeness prevent errors',
            imageUrl: '/lessonimages/systematic-goals.png',
            imageAlt: 'Goals of systematic ECG interpretation'
          }
        ],
        
        passingScore: 80,
        timeLimit: 45,
        completionCelebration: {
          animation: 'module-completion',
          confetti: true,
          sounds: true,
          duration: 5000
        }
      }
    },

    // ==================== MODULE COMPLETION CERTIFICATION TASK ====================
    {
      id: 'module-completion-certification',
      type: 'final-assessment',
      xp: 150,
      
      content: {
        prerequisiteTask: 'final-comprehensive-assessment',
        prerequisiteMessage: 'Please complete the final comprehensive assessment with 80% or higher score to unlock certification.',
        
        instructions: 'Congratulations! You have successfully completed Module 1: ECG Fundamentals. Download your completion certificate and comprehensive study materials.',
        
        questions: [
          {
            id: 'certification-completion',
            type: 'multiple-choice',
            question: 'You have successfully completed Module 1: ECG Fundamentals! What would you like to do next?',
            options: [
              'Download my completion certificate and study materials',
              'Review my progress and achievements',
              'Start Module 2: Advanced Arrhythmias',
              'Share my achievement on social media'
            ],
            correctAnswer: 0,
            explanation: '🎉 CONGRATULATIONS! You have mastered ECG fundamentals! Your certificate and comprehensive study materials are now available for download. You\'re ready for advanced ECG interpretation!',
            hint: 'Celebrate your achievement and get your materials!',
            imageUrl: '/lessonimages/module1-certificate.png',
            imageAlt: 'Module 1 completion certificate'
          }
        ],
        
        completionCelebration: {
          animation: 'certificate-presentation',
          confetti: true,
          sounds: true,
          duration: 10000
        }
      }
    }
  ],
  
  // Module completion status and progression
  completed: false,
  attempts: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
