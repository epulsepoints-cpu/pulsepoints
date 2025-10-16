import { Lesson } from '@/types/learning';

// ENHANCED LESSON 5: Complete Heart Rate Calculation Mastery - Duolingo-Style Units
export const optimizedLesson5: Lesson = {
  id: 'module-1-lesson-5',
  moduleId: 'module-1',
  title: "Complete Heart Rate Calculation Mastery",
  description: "Master heart rate calculation through 6 focused learning units: Fundamentals, 300 Rule, 1500 Rule, 6-Second Method, Method Selection, and Clinical Application - each with interactive content and quizzes",
  order: 5,
  estimatedTime: 40,
  content: {
    type: 'mixed',
    introduction: "🔢 Welcome to Heart Rate Mastery! Learn calculation methods through 6 progressive units with slides, audio, video, and quizzes. Master every method for accurate rate determination.",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your Learning Journey",
        content: "UNIT 1: Fundamentals → UNIT 2: 300 Rule → UNIT 3: 1500 Rule → UNIT 4: 6-Second Method → UNIT 5: Method Selection → UNIT 6: Clinical Application",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // ===============================================
      // 🎯 UNIT 1: RATE FUNDAMENTALS (7 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: Rate Fundamentals',
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Heart rate fundamentals overview',
        highlights: [
          '💓 Learn what heart rate means and why it matters',
          '📊 Master normal ranges and abnormal classifications',
          '🎯 Understand why accurate calculation saves lives',
          '🚀 Foundation for all ECG rate analysis'
        ],
        hint: '🚀 Foundation for all rate calculations!'
      },

      // 🎬 YOUTUBE VIDEO: Heart Rate Calculation Methods
      {
        id: 'youtube-rate-calculation',
        title: '🎬 Heart Rate Calculation Mastery',
        content: 'Master all the essential heart rate calculation methods with this comprehensive ECG training. Learn the 300 rule, 1500 rule, and 6-second method!',
        type: 'youtube',
        youtubeId: 'WnrvNGa_bPY',
        videoDuration: 3600,
        minimumWatchTime: 900,
        requireFullWatch: false,
        backgroundColor: '#fefce8',
        textColor: '#a16207',
        animation: 'fade',
        hint: '🔢 Master all rate calculation methods like a pro!'
      },
      
      {
        id: 'rate-definition',
        title: 'What is Heart Rate?',
        type: 'flashcard',
        animation: 'fade',
        flashcard: {
          icon: '💓',
          question: 'What exactly is heart rate and how do we measure it?',
          answer: 'Heart rate = heartbeats per minute! 💓\n\n• DEFINITION: Number of heartbeats in 60 seconds\n• MEASUREMENT: Each QRS complex = 1 heartbeat\n• UNITS: Beats per minute (bpm)\n• METHOD: Count QRS complexes and convert to per-minute rate',
          category: 'concept',
          difficulty: 'beginner'
        },
        hint: '💓 QRS = heartbeat, count per minute!'
      },

      {
        id: 'normal-ranges',
        title: 'Normal Heart Rate Ranges',
        type: 'accordion',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Normal heart rate ranges chart',
        accordionItems: [
          {
            title: '💚 Normal Range: 60-100 bpm',
            content: 'The healthy heart rate zone for adults at rest.\n• Optimal cardiac function\n• Normal oxygen delivery\n• Efficient cardiac output\n• Most common in healthy adults'
          },
          {
            title: '🐌 Bradycardia: <60 bpm (Slow)',
            content: 'Below normal heart rate - may cause symptoms.\n• Fatigue and weakness\n• Dizziness or lightheadedness\n• Syncope (fainting)\n• May require pacemaker'
          },
          {
            title: '🏃‍♂️ Tachycardia: >100 bpm (Fast)',
            content: 'Above normal heart rate - often symptomatic.\n• Palpitations (racing heart)\n• Chest pain or discomfort\n• Shortness of breath\n• May need medications'
          }
        ],
        hint: '📊 60-100 = normal zone!'
      },

      {
        id: 'clinical-significance',
        title: 'Clinical Significance of Rate',
        type: 'steps',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Clinical symptoms of rate abnormalities',
        audioUrl: '/lessonaudio/heart-rate-calculations/clinical-significance.mp3',
        steps: [
          {
            number: 1,
            title: 'Slow Rates (Bradycardia)',
            description: 'May cause fatigue, dizziness, and syncope - Inadequate oxygen delivery to tissues'
          },
          {
            number: 2,
            title: 'Fast Rates (Tachycardia)', 
            description: 'May cause palpitations, chest pain, shortness of breath - Heart works too hard'
          },
          {
            number: 3,
            title: 'Treatment Decisions',
            description: 'Accurate rate calculation guides medication choices and interventions'
          },
          {
            number: 4,
            title: 'Patient Safety',
            description: 'Wrong rate calculation can lead to inappropriate treatment and harm'
          }
        ],
        hint: '🏥 Rate affects symptoms and treatment!'
      },

      {
        id: 'regular-vs-irregular',
        title: 'Regular vs Irregular Rhythms',
        type: 'tabs',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Regular vs irregular rhythm patterns',
        tabs: [
          {
            title: '📏 Regular Rhythms',
            content: 'Equal R-R intervals throughout\n\n• R-R spacing is consistent\n• Use 300 Rule or 1500 Rule\n• Most accurate methods for regular\n• Examples: NSR, sinus tachycardia'
          },
          {
            title: '🌊 Irregular Rhythms',
            content: 'Varying R-R intervals\n\n• R-R spacing changes constantly\n• Use 6-Second Method only\n• Average rate over time period\n• Examples: Atrial fibrillation'
          },
          {
            title: '⚡ Method Selection',
            content: 'Choose based on rhythm pattern\n\n• Regular = 300/1500 Rule\n• Irregular = 6-Second Method\n• Check rhythm first, then calculate\n• Wrong method = wrong rate!'
          }
        ],
        hint: '📈 Rhythm type determines calculation method!'
      },

      {
        id: 'calculation-accuracy',
        title: 'Accuracy Considerations',
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Accuracy comparison of different methods',
        highlights: [
          '🎯 Different methods have different accuracy levels',
          '📊 Choose the right method for the situation',
          '🔄 Multiple measurements improve accuracy',
          '👤 Consider patient factors (age, condition, medications)'
        ],
        hint: '🎯 Right method = accurate results!'
      },

      {
        id: 'paper-speed-basics',
        title: 'ECG Paper Speed Basics',
        type: 'flashcard',
        animation: 'fade',
        flashcard: {
          icon: '📏',
          question: 'What is the standard ECG paper speed and why does it matter?',
          answer: 'Standard paper speed = 25mm/second! 📏\n\n• UNIVERSAL STANDARD: Used worldwide\n• TIMING: Each large square = 0.2 seconds\n• PRECISION: Each small square = 0.04 seconds\n• FOUNDATION: This timing is crucial for ALL calculations',
          category: 'procedure',
          difficulty: 'beginner'
        },
        hint: '📏 25mm/sec = standard ECG speed!'
      },

      // ==================== UNIT 1 QUIZ: RATE FUNDAMENTALS ====================
      {
        id: 'unit1-fundamentals-quiz',
        title: '🎯 Unit 1 Quiz: Rate Fundamentals',
        content: "Test your knowledge of heart rate fundamentals!",
        type: 'quiz',
        layout: 'centered',
        animation: 'slide',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Heart rate fundamentals quiz',
        hint: '🧠 Test your Unit 1 knowledge!',
        question: "What defines bradycardia?",
        options: [
          "Heart rate greater than 100 bpm",
          "Heart rate less than 60 bpm",
          "Irregular heart rhythm",
          "Heart rate between 60-100 bpm"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Bradycardia is defined as a heart rate less than 60 beats per minute, which may cause symptoms like fatigue and dizziness."
      },

      // ================================================
      // 🎯 UNIT 2: 300 RULE METHOD (8 slides)
      // ================================================
      {
        id: 'unit2-intro',
        title: '🎯 Unit 2: 300 Rule Method',
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/300-rule-demonstration.png',
        imageAlt: '300 rule method overview',
        highlights: [
          '🏃‍♂️ Fastest method for regular rhythms',
          '🔢 Simple formula: 300 ÷ large squares = rate',
          '📊 Learn the quick reference chart',
          '🎯 Perfect for emergency situations'
        ],
        hint: '🏠 Fastest method for regular rhythms!'
      },

      {
        id: 'rule-300-basics',
        title: '300 Rule: How It Works',
        type: 'steps',
        animation: 'fade',
        imageUrl: '/lessonimages/300-rule-demonstration.png',
        imageAlt: '300 rule calculation explanation',
        audioUrl: '/lessonaudio/heart-rate-calculations/300-rule-basics.mp3',
        steps: [
          {
            number: 1,
            title: 'Understanding the Math',
            description: '300 large squares = 60 seconds on ECG paper - This is the foundation of the 300 rule'
          },
          {
            number: 2,
            title: 'Count Large Squares',
            description: 'Count large squares between two consecutive R waves - Use peak-to-peak measurement'
          },
          {
            number: 3,
            title: 'Apply the Formula',
            description: 'Divide 300 by the number of large squares - Result = heart rate in beats per minute'
          },
          {
            number: 4,
            title: 'Verify the Result',
            description: 'Check if the calculated rate makes clinical sense - Compare to patient symptoms'
          }
        ],
        hint: '4️⃣ 300 ÷ large squares = rate!'
      },

      {
        id: 'rule-300-examples',
        title: '300 Rule Quick Reference',
        type: 'flashcard',
        animation: 'fade',
        flashcard: {
          icon: '🔢',
          question: 'What are the common 300 Rule calculations?',
          answer: 'Quick 300 Rule Reference Chart! 📊\n\n• 1 square = 300 bpm\n• 2 squares = 150 bpm\n• 3 squares = 100 bpm\n• 4 squares = 75 bpm\n• 5 squares = 60 bpm\n• 6 squares = 50 bpm',
          category: 'clinical',
          difficulty: 'intermediate'
        },
        hint: '🔢 Flip to see quick reference!'
      },

      {
        id: 'rule-300-technique',
        title: '300 Rule Technique',
        type: 'accordion',
        animation: 'fade',
        imageUrl: '/lessonimages/300-rule-demonstration.png',
        imageAlt: '300 rule measurement technique',
        accordionItems: [
          {
            title: '🎯 Step 1: Find a Clear R Wave',
            content: 'Choose an R wave that lands exactly on a large square line.\n• Makes counting easier\n• Reduces measurement error\n• Provides reference point'
          },
          {
            title: '📏 Step 2: Count Large Squares',
            content: 'Count large squares to the next R wave peak.\n• Include partial squares in your count\n• Use calipers or paper edge for accuracy\n• Double-check your count'
          },
          {
            title: '🧮 Step 3: Apply Formula',
            content: 'Divide 300 by the number of large squares.\n• 300 ÷ squares = heart rate\n• Works best for regular rhythms\n• Quick method for emergencies'
          }
        ],
        hint: '📐 Accuracy matters for good results!'
      },

      {
        id: 'rule-300-limitations',
        title: '300 Rule Limitations',
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/300-rule-demonstration.png',
        imageAlt: '300 rule limitations and best uses',
        highlights: [
          '✅ BEST FOR: Regular rhythms, quick estimates',
          '❌ LIMITED BY: Irregular rhythms, precision needs',
          '⚠️ NOT suitable for: Atrial fibrillation, frequent ectopics',
          '💡 USE OTHER METHODS: When 300 rule isn\'t suitable'
        ],
        hint: '⚠️ Know when to use other methods!'
      },

      {
        id: 'rule-300-memory',
        title: '300 Rule Memory Aids',
        type: 'tabs',
        animation: 'fade',
        imageUrl: '/lessonimages/300-rule-demonstration.png',
        imageAlt: '300 rule memory techniques',
        tabs: [
          {
            title: '🔢 Number Sequence',
            content: 'SEQUENCE: 300-150-100-75-60-50\n\n• Divide by 1,2,3,4,5,6\n• Easy mathematical progression\n• Most common clinical rates\n• Memorize this sequence!'
          },
          {
            title: '🏈 Memory Phrase',
            content: 'PHRASE: "Big Bad Boys Play Football Slowly"\n\n• Big = 300 bpm\n• Bad = 150 bpm  \n• Boys = 100 bpm\n• Play = 75 bpm\n• Football = 60 bpm\n• Slowly = 50 bpm'
          },
          {
            title: '🎯 Practice Tips',
            content: 'MEMORIZATION TECHNIQUES:\n\n• Write sequence 10 times daily\n• Practice with flash cards\n• Use in clinical scenarios\n• Test yourself regularly'
          }
        ],
        hint: '🧠 Memory tricks make it easier!'
      },

      {
        id: 'rule-300-practice',
        title: '300 Rule Practice Tips',
        type: 'steps',
        animation: 'fade',
        imageUrl: '/lessonimages/300-rule-demonstration.png',
        imageAlt: '300 rule practice recommendations',
        audioUrl: '/lessonaudio/heart-rate-calculations/300-rule-practice.mp3',
        steps: [
          {
            number: 1,
            title: 'Start with Graph Paper',
            description: 'Practice on graph paper first - Learn the spacing and develop accuracy'
          },
          {
            number: 2,
            title: 'Use Real ECG Strips',
            description: 'Progress to actual patient ECGs - Build confidence with real rhythms'
          },
          {
            number: 3,
            title: 'Check Your Answers',
            description: 'Verify with other methods - Use 1500 rule or 6-second method for confirmation'
          },
          {
            number: 4,
            title: 'Build Speed and Accuracy',
            description: 'Practice daily repetition - Aim for speed AND precision in calculations'
          }
        ],
        hint: '💪 Practice makes perfect!'
      },

      // Add Audio lesson for Unit 2
      {
        id: 'rule-300-audio-lesson',
        title: '🎵 300 Rule Audio Walkthrough',
        type: 'audio',
        animation: 'fade',
        audioUrl: '/lessonaudio/heart-rate-calculations/300-rule-walkthrough.mp3',
        imageUrl: '/lessonimages/300-rule-demonstration.png',
        imageAlt: '300 rule audio lesson',
        audio: {
          transcript: 'Detailed explanation of the 300 rule method with step-by-step examples and common pitfalls to avoid. Learn professional techniques for accurate heart rate calculations.'
        },
        hint: '🔊 Listen and learn the 300 rule!'
      },

      // ==================== UNIT 2 QUIZ: 300 RULE ====================
      {
        id: 'unit2-300rule-quiz',
        title: '🎯 Unit 2 Quiz: 300 Rule',
        content: "Test your knowledge of the 300 rule method!",
        type: 'quiz',
        layout: 'centered',
        animation: 'slide',
        imageUrl: '/lessonimages/300-rule-demonstration.png',
        imageAlt: '300 rule quiz',
        hint: '🧠 Test your Unit 2 knowledge!',
        question: "If there are 4 large squares between R waves, what is the heart rate using the 300 rule?",
        options: [
          "60 bpm",
          "75 bpm", 
          "100 bpm",
          "150 bpm"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! 300 ÷ 4 = 75 bpm. The 300 rule divides 300 by the number of large squares between consecutive R waves."
      },

      // ================================================
      // 🎯 UNIT 3: 1500 RULE METHOD (8 slides)
      // ================================================
      {
        id: 'unit3-intro',
        title: '🎯 Unit 3: 1500 Rule Method',
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: '1500 rule method overview',
        highlights: [
          '🔍 More precise than the 300 rule',
          '📏 Uses small squares for accuracy',
          '🧮 Formula: 1500 ÷ small squares = rate',
          '⚡ Perfect for detailed analysis'
        ],
        hint: '🔍 More precise calculations!'
      },

      {
        id: 'rule-1500-basics',
        title: '1500 Rule: How It Works',
        type: 'flashcard',
        animation: 'fade',
        flashcard: {
          icon: '🔬',
          question: 'How does the 1500 Rule provide greater precision?',
          answer: '1500 small squares = 60 seconds! 🔬\n\n• PRECISION: Uses small squares (1mm each)\n• CALCULATION: Count small squares between R waves\n• FORMULA: 1500 ÷ small squares = precise heart rate\n• ADVANTAGE: More accurate than 300 rule',
          category: 'clinical',
          difficulty: 'intermediate'
        },
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: '1500 rule calculation explanation',
        hint: '🔢 1500 ÷ small squares = precise rate!'
      },

      {
        id: 'rule-1500-precision',
        title: '1500 Rule Advantages',
        type: 'accordion',
        animation: 'fade',
        accordionItems: [
          {
            title: '🎯 Higher Precision',
            content: 'Small squares provide finer measurements\n• 5x more precise than 300 rule\n• Better decimal accuracy\n• Ideal for borderline rates'
          },
          {
            title: '⚖️ When to Use',
            content: 'Best situations for 1500 rule\n• Rates near 60 or 100 bpm\n• When precision matters clinically\n• Regular rhythms with clear R waves'
          },
          {
            title: '⏱️ Time vs Accuracy',
            content: 'Trade-off considerations\n• Takes longer to count small squares\n• More precise results\n• Worth it for critical decisions'
          },
          {
            title: '🚫 Limitations',
            content: 'When NOT to use 1500 rule\n• Irregular rhythms\n• Poor quality tracings\n• When speed is priority'
          }
        ],
        hint: '⚖️ Precision vs speed - choose wisely!'
      },

      {
        id: 'rule-1500-technique',
        title: '1500 Rule Technique',
        type: 'steps',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: '1500 rule measurement technique',
        audioUrl: '/lessonaudio/heart-rate-calculations/1500-rule-technique.mp3',
        steps: [
          {
            number: 1,
            title: 'Find Clear R Wave',
            description: 'Choose an R wave that\'s easy to identify - Clear peak, good amplitude, minimal artifact'
          },
          {
            number: 2,
            title: 'Count Small Squares',
            description: 'Count small squares to next R wave carefully - Use magnifying glass if needed for accuracy'
          },
          {
            number: 3,
            title: 'Double-Check Count',
            description: 'Verify your count before calculating - Small errors multiply in final result'
          },
          {
            number: 4,
            title: 'Calculate Rate',
            description: 'Apply formula: 1500 ÷ count = heart rate - Use calculator for accuracy'
          }
        ],
        hint: '🔍 Careful counting is key!'
      },

      {
        id: 'rule-1500-examples',
        title: '1500 Rule Examples',
        type: 'flashcard',
        animation: 'fade',
        flashcard: {
          icon: '🧮',
          question: 'What are common 1500 Rule calculations?',
          answer: '1500 Rule Quick Examples! 🧮\n\n• 15 small squares = 100 bpm\n• 20 squares = 75 bpm\n• 25 squares = 60 bpm\n• 30 squares = 50 bpm\n• Practice these calculations!',
          category: 'clinical',
          difficulty: 'intermediate'
        },
        hint: '📝 Master these key examples!'
      },

      {
        id: 'rule-1500-vs-300',
        title: '1500 vs 300 Rule Comparison',
        type: 'tabs',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: '1500 vs 300 rule comparison chart',
        tabs: [
          {
            title: '🚀 300 Rule',
            content: 'ADVANTAGES:\n• Faster calculation\n• Good for emergencies\n• Easy to remember\n\nDISADVANTAGES:\n• Less precise\n• Estimates only\n• Not ideal for borderline rates'
          },
          {
            title: '🔬 1500 Rule',
            content: 'ADVANTAGES:\n• Higher precision\n• Better accuracy\n• Ideal for critical decisions\n\nDISADVANTAGES:\n• Takes more time\n• Requires careful counting\n• More complex calculation'
          },
          {
            title: '⚖️ When to Use',
            content: 'CHOOSE 300 RULE:\n• Emergency situations\n• Quick screening\n• Clear normal/abnormal rates\n\nCHOOSE 1500 RULE:\n• Borderline rates\n• Medication decisions\n• Precise documentation'
          }
        ],
        hint: '⚖️ Each method has its place!'
      },

      {
        id: 'rule-1500-clinical',
        title: '1500 Rule Clinical Applications',
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: '1500 rule clinical applications',
        highlights: [
          '🎯 Use for borderline rates (58-62 bpm or 98-102 bpm)',
          '💊 Important for medication decisions',
          '🔋 Critical for pacemaker evaluations',
          '🏥 Precision matters in cardiology!'
        ],
        hint: '🏥 Precision guides treatment!'
      },

      // Add Audio lesson for Unit 3
      {
        id: 'rule-1500-audio-lesson',
        title: '🎵 1500 Rule Precision Training',
        type: 'audio',
        layout: 'centered',
        animation: 'fade',
        audioUrl: '/lessonaudio/heart-rate/1500-rule-precise.mp3',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: '1500 rule audio lesson',
        hint: '🔊 Master precise calculations!'
      },

      // ==================== UNIT 3 QUIZ: 1500 RULE ====================
      {
        id: 'unit3-1500rule-quiz',
        title: '🎯 Unit 3 Quiz: 1500 Rule',
        content: "Test your knowledge of the 1500 rule method!",
        type: 'quiz',
        layout: 'centered',
        animation: 'slide',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: '1500 rule quiz',
        hint: '🧠 Test your Unit 3 knowledge!',
        question: "When is the 1500 rule preferred over the 300 rule?",
        options: [
          "For very fast heart rates only",
          "When greater precision is needed",
          "For irregular rhythms only",
          "When time is limited"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! The 1500 rule is preferred when greater precision is needed, especially for borderline rates where clinical decisions depend on accurate measurements."
      },

      // ================================================
      // 🎯 UNIT 4: 6-SECOND METHOD (8 slides)
      // ================================================
      {
        id: 'unit4-intro',
        title: '🎯 Unit 4: 6-Second Method',
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/six-second-method.png',
        imageAlt: '6-second method overview',
        highlights: [
          '⏱️ Perfect for irregular rhythms',
          '🔢 Simple formula: Count QRS × 10 = rate',
          '📊 Works for any rhythm pattern',
          '🎯 Most versatile calculation method'
        ],
        hint: '⏱️ Best method for irregular rhythms!'
      },

      {
        id: 'method-6sec-basics',
        title: '6-Second Method: How It Works',
        type: 'steps',
        animation: 'fade',
        imageUrl: '/lessonimages/six-second-method.png',
        imageAlt: '6-second method calculation steps',
        audioUrl: '/lessonaudio/heart-rate-calculations/6-second-method-basics.mp3',
        steps: [
          {
            number: 1,
            title: 'Find 6-Second Strip',
            description: 'Locate a clear 6-second section on the ECG - Usually marked by time markers'
          },
          {
            number: 2,
            title: 'Count QRS Complexes',
            description: 'Count every QRS complex in the 6-second strip - Include partial complexes at edges'
          },
          {
            number: 3,
            title: 'Multiply by 10',
            description: 'Multiply count by 10 to get beats per minute - 6 seconds × 10 = 60 seconds (1 minute)'
          },
          {
            number: 4,
            title: 'Verify Result',
            description: 'Check if calculated rate makes clinical sense - Consider patient condition'
          }
        ],
        hint: '✖️ Count × 10 = rate per minute!'
      },

      {
        id: 'method-6sec-counting',
        title: '6-Second Counting Technique',
        type: 'accordion',
        animation: 'fade',
        imageUrl: '/lessonimages/six-second-method.png',
        imageAlt: '6-second counting technique details',
        accordionItems: [
          {
            title: '🔢 What to Count',
            content: 'Count every QRS complex in the 6-second strip.\n• Only count QRS complexes\n• Don\'t count P waves or T waves\n• Include clear, identifiable complexes'
          },
          {
            title: '📏 Partial Complexes',
            content: 'Include partial complexes at strip edges.\n• If more than half visible = count it\n• If less than half visible = don\'t count\n• Use consistent criteria'
          },
          {
            title: '🎯 Accuracy Tips',
            content: 'Methods to improve counting accuracy:\n• Use a pen to mark each complex\n• Count systematically left to right\n• Double-check your count'
          }
        ],
        hint: '📊 Only count QRS complexes!'
      },

      {
        id: 'method-6sec-examples',
        title: '6-Second Method Examples',
        highlights: [
        '🎯 5 QRS in 6 seconds = 50 bpm',
        '🎯 7 QRS = 70 bpm',
        '🎯 10 QRS = 100 bpm'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/six-second-method.png',
        imageAlt: '6-second method examples',
        hint: '🔢 Simple multiplication!'
      },

      {
        id: 'method-6sec-irregular',
        title: '6-Second Method for Irregular Rhythms',
        highlights: [
        '🎯 PERFECT for atrial fibrillation, frequent PVCs, sinus arrhythmia',
        '🎯 Gives average rate over time',
        '🎯 More representative than single R-R interval measurements.'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/six-second-method.png',
        imageAlt: '6-second method for irregular rhythms',
        hint: '📈 Average rate for irregular rhythms!'
      },

      {
        id: 'method-6sec-accuracy',
        title: '6-Second Method Accuracy',
        highlights: [
        '🎯 Accuracy improves with longer strips',
        '🎯 Use multiple 6-second counts if available',
        '🎯 Average several measurements'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/six-second-method.png',
        imageAlt: '6-second method accuracy considerations',
        hint: '📊 Multiple counts improve accuracy!'
      },

      // Add Video lesson for Unit 4
      {
        id: 'rate-calculation-video',
        title: '🎥 Heart Rate Calculation Methods',
        content: 'Watch comprehensive demonstrations of all three rate calculation methods with real ECG examples and clinical scenarios.',
        type: 'video',
        layout: 'centered',
        animation: 'fade',
        videoUrl: '/lessonvideos/heart-rate-calculation-methods.mp4',
        imageUrl: '/lessonimages/six-second-method.png',
        imageAlt: 'Heart rate calculation video',
        hint: '🎬 See all methods in action!'
      },

      // ==================== UNIT 4 QUIZ: 6-SECOND METHOD ====================
      {
        id: 'unit4-6second-quiz',
        title: '🎯 Unit 4 Quiz: 6-Second Method',
        content: "Test your knowledge of the 6-second method!",
        type: 'quiz',
        layout: 'centered',
        animation: 'slide',
        imageUrl: '/lessonimages/six-second-method.png',
        imageAlt: '6-second method quiz',
        hint: '🧠 Test your Unit 4 knowledge!',
        question: "The 6-second method is best used for which type of rhythm?",
        options: [
          "Only regular rhythms",
          "Only very fast rhythms",
          "Irregular rhythms",
          "Only very slow rhythms"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! The 6-second method is ideal for irregular rhythms because it provides an average rate over time, which is more representative than measuring single R-R intervals."
      },

      // ================================================
      // 🎯 UNIT 5: METHOD SELECTION (8 slides)
      // ================================================
      {
        id: 'unit5-intro',
        title: '🎯 Unit 5: Method Selection',
        highlights: [
        '🎯 Master choosing the right method! Learn when to use 300 rule, 1500 rule, or 6-second method based on rhythm type and clinical needs.'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Method selection overview',
        hint: '🎯 Right method for right situation!'
      },

      {
        id: 'method-decision-tree',
        title: 'Method Selection Guide',
        type: 'tabs',
        animation: 'fade',
        tabs: [
          {
            title: '📏 Regular Rhythms',
            content: 'Equal R-R intervals\n\n• FAST estimate: 300 Rule\n• PRECISE calculation: 1500 Rule\n• Consider clinical urgency\n• Both methods work well'
          },
          {
            title: '🌊 Irregular Rhythms',
            content: 'Varying R-R intervals\n\n• ONLY use: 6-Second Method\n• Provides average rate\n• Other methods inaccurate\n• Standard for A-fib, PACs'
          },
          {
            title: '⚡ Emergency Situations',
            content: 'When speed matters\n\n• Use 300 Rule for regular\n• Use 6-Second for irregular\n• Don\'t delay for precision\n• Quick estimate is enough'
          },
          {
            title: '🎯 Clinical Precision',
            content: 'When accuracy critical\n\n• Use 1500 Rule for regular\n• Use 6-Second for irregular\n• Worth the extra time\n• Important for drug dosing'
          }
        ],
        hint: '🌳 Choose method by rhythm and urgency!'
      },

      {
        id: 'regular-rhythm-choice',
        title: 'Regular Rhythm Method Choice',
        type: 'tabs',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Regular rhythm calculation method selection',
        tabs: [
          {
            title: '🚀 Quick Estimate',
            content: 'Use 300 Rule (fastest method)\n\n• Emergency situations\n• Screening purposes\n• When speed is priority\n• Good enough for triage'
          },
          {
            title: '🔬 Precise Measurement',
            content: 'Use 1500 Rule (most accurate)\n\n• Critical decisions\n• Borderline rates\n• Medication calculations\n• Documentation needs'
          },
          {
            title: '✅ Backup Verification',
            content: 'Use 6-Second Method (confirmation)\n\n• Double-check other methods\n• When other methods unclear\n• Universal verification\n• Builds confidence'
          }
        ],
        hint: '⚡ Speed vs precision choice!'
      },

      {
        id: 'irregular-rhythm-approach',
        title: 'Irregular Rhythm Approach',
        highlights: [
        '🎯 FIRST CHOICE: 6-second method (gives average rate)',
        '🎯 AVOID: 300/1500 rules (not representative)',
        '🎯 MULTIPLE STRIPS: Use several 6-second counts for better accuracy.'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/six-second-method.png',
        imageAlt: 'Irregular rhythm calculation approach',
        hint: '📊 Average rate for irregular rhythms!'
      },

      {
        id: 'clinical-scenarios',
        title: 'Clinical Scenario Examples',
        highlights: [
        '🎯 EMERGENCY: Use 300 rule (fast)',
        '🎯 MEDICATION DOSING: Use 1500 rule (precise)',
        '🎯 ATRIAL FIB: Use 6-second method (irregular)'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Clinical scenarios for method selection',
        hint: '🏥 Clinical need guides method choice!'
      },

      {
        id: 'accuracy-vs-speed',
        title: 'Accuracy vs Speed Balance',
        highlights: [
        '🎯 FAST & ROUGH: 300 rule (±5 bpm accuracy)',
        '🎯 SLOW & PRECISE: 1500 rule (±1-2 bpm accuracy)',
        '🎯 PRACTICAL: 6-second method (±5-10 bpm accuracy).'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Accuracy vs speed comparison',
        hint: '⚖️ Balance accuracy and speed!'
      },

      {
        id: 'common-mistakes',
        title: 'Common Method Selection Mistakes',
        highlights: [
        '🎯 MISTAKE 1: Using 300 rule on irregular rhythms',
        '🎯 MISTAKE 2: Using 6-second method when precision needed',
        '🎯 MISTAKE 3: Not verifying with second method.'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/nsr-rate-physiology.png',
        imageAlt: 'Common method selection mistakes',
        hint: '⚠️ Avoid these common errors!'
      },

      // Add Audio lesson for Unit 5
      {
        id: 'method-selection-audio',
        title: '🎵 Method Selection Strategy',
        content: 'Listen to expert strategies for choosing the right rate calculation method based on clinical scenarios and rhythm characteristics.',
        type: 'audio',
        layout: 'centered',
        animation: 'fade',
        audioUrl: '/lessonaudio/heart-rate/rate-calculation-intro.mp3',
        imageUrl: '/lessonimages/six-second-method.png',
        imageAlt: 'Method selection audio guide',
        hint: '🔊 Learn expert selection strategies!'
      },

      // ==================== UNIT 5 QUIZ: METHOD SELECTION ====================
      {
        id: 'unit5-selection-quiz',
        title: '🎯 Unit 5 Quiz: Method Selection',
        content: "Test your knowledge of method selection!",
        type: 'quiz',
        layout: 'centered',
        animation: 'slide',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Method selection quiz',
        hint: '🧠 Test your Unit 5 knowledge!',
        question: "In an emergency situation requiring a quick heart rate estimate for a regular rhythm, which method is best?",
        options: [
          "1500 rule for maximum precision",
          "300 rule for speed",
          "6-second method",
          "Multiple methods for verification"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! In emergency situations with regular rhythms, the 300 rule provides fast, reasonably accurate estimates when speed is critical for immediate clinical decisions."
      },

      // ================================================
      // 🎯 UNIT 6: CLINICAL APPLICATION (7 slides)
      // ================================================
      {
        id: 'unit6-intro',
        title: '🎯 Unit 6: Clinical Application',
        highlights: [
        '🎯 Apply your rate calculation skills! Learn real-world scenarios, quality checks, and how rate calculations guide patient care decisions.'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/nsr-clinical-significance.png',
        imageAlt: 'Clinical application overview',
        hint: '🏥 Real-world application time!'
      },

      {
        id: 'quality-assurance',
        title: 'Quality Assurance Checks',
        highlights: [
        '🎯 VERIFY: Use two different methods when possible',
        '🎯 CHECK: Does rate make clinical sense? COMPARE: Previous ECGs for trends',
        '🎯 CONSIDER: Patient symptoms and medications.'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Quality assurance for rate calculations',
        hint: '✅ Always double-check your work!'
      },

      {
        id: 'documentation-standards',
        title: 'Documentation Standards',
        highlights: [
        '🎯 RECORD: Rate value and method used',
        '🎯 NOTE: Rhythm regularity',
        '🎯 INCLUDE: Clinical correlation'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/normal-sinus-rhythm-overview.png',
        imageAlt: 'Documentation standards for rate',
        hint: '📝 Good documentation saves lives!'
      },

      {
        id: 'treatment-implications',
        title: 'Treatment Implications',
        highlights: [
        '🎯 BRADYCARDIA: May need pacing, medication adjustment',
        '🎯 TACHYCARDIA: May need rate control, cardioversion',
        '🎯 NORMAL RATE: Monitor trends, assess symptoms.'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/nsr-clinical-significance.png',
        imageAlt: 'Treatment implications of rate findings',
        hint: '💊 Rate guides treatment decisions!'
      },

      {
        id: 'monitoring-strategies',
        title: 'Monitoring Strategies',
        highlights: [
        '🎯 CONTINUOUS: For unstable patients',
        '🎯 SERIAL: For medication titration',
        '🎯 SPOT-CHECK: For stable patients'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Heart rate monitoring strategies',
        hint: '📈 Different situations need different monitoring!'
      },

      {
        id: 'technology-integration',
        title: 'Technology Integration',
        highlights: [
        '🎯 MONITORS: Automatic calculation available',
        '🎯 VERIFY: Always double-check machine calculations',
        '🎯 UNDERSTAND: How machines calculate rates'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Technology integration in rate calculation',
        hint: '🤖 Machines help, but verify!'
      },

      // Add final audio lesson with celebration
      {
        id: 'rate-mastery-celebration',
        title: '🎵 Rate Calculation Mastery',
        content: 'Congratulations! You\'ve mastered all heart rate calculation methods. Listen to this celebration of your achievement and future learning opportunities.',
        type: 'audio',
        layout: 'centered',
        animation: 'fade',
        audioUrl: '/lessonaudio/heart-rate/rate-mastery-celebration.mp3',
        imageUrl: '/lessonimages/nsr-clinical-significance.png',
        imageAlt: 'Rate calculation mastery celebration',
        hint: '🎉 You\'ve mastered rate calculations!'
      },

      // ==================== UNIT 6 QUIZ: CLINICAL APPLICATION ====================
      {
        id: 'unit6-clinical-quiz',
        title: '🎯 Unit 6 Quiz: Clinical Application',
        content: "Test your knowledge of clinical applications!",
        type: 'quiz',
        layout: 'centered',
        animation: 'slide',
        imageUrl: '/lessonimages/nsr-clinical-significance.png',
        imageAlt: 'Clinical application quiz',
        hint: '🧠 Test your Unit 6 knowledge!',
        question: "When should you verify your heart rate calculation with a second method?",
        options: [
          "Only when the rate seems abnormal",
          "Only in emergency situations",
          "When the rate will guide treatment decisions",
          "Never - one calculation is sufficient"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! You should verify rate calculations with a second method when the results will guide important treatment decisions, ensuring accuracy for patient safety."
      }
    ],
    summary: "🎉 Congratulations! You've mastered complete heart rate calculation through 6 progressive units: Fundamentals, 300 Rule, 1500 Rule, 6-Second Method, Method Selection, and Clinical Application!",
    keyPoints: [
      "🔢 Rate fundamentals: 60-100 bpm normal, method depends on rhythm",
      "⚡ 300 Rule: Fast estimates for regular rhythms (300 ÷ large squares)",
      "🎯 1500 Rule: Precise calculations for regular rhythms (1500 ÷ small squares)",
      "⏱️ 6-Second Method: Best for irregular rhythms (count × 10)",
      "🎯 Method selection: Choose based on rhythm type and clinical needs",
      "🏥 Clinical application: Quality checks, documentation, treatment implications"
    ],
    resources: [
      {
        title: "Interactive Rate Calculator",
        url: "/resources/rate-calculator",
        type: "tool",
        description: "Practice rate calculations with real ECG strips"
      },
      {
        title: "Method Selection Guide",
        url: "/resources/method-guide",
        type: "tool", 
        description: "Quick reference for choosing calculation methods"
      },
      {
        title: "Clinical Scenarios Practice",
        url: "/resources/clinical-practice",
        type: "tool",
        description: "Apply rate calculations to real clinical scenarios"
      }
    ]
  },
  
  // ============= ENHANCED DUOLINGO-STYLE TASKS (Final Assessment Only) =============
  tasks: [
    
    // ==================== FINAL MASTERY ASSESSMENT ====================
    {
      id: 'final-rate-mastery-assessment',
      type: 'final-assessment',
      xp: 50,
      audio: {
        mainNarration: {
          audioUrl: '/lessonaudio/heart-rate/rate-mastery-celebration.mp3',
          duration: 10,
          transcript: "Congratulations on completing all 6 units of heart rate calculation! You've mastered all methods: 300 rule, 1500 rule, 6-second method, method selection, and clinical application. Now prove your mastery!"
        }
      },
      images: {
        mainImage: '/lessonimages/rate-calculation-methods.png',
        slideImages: []
      },
      content: {
        prerequisiteMessage: "🏆 Final Assessment: Complete all 6 units to unlock your Heart Rate Calculation Mastery Certificate!",
        questions: [
          {
            id: "rate-calculation-method-selection",
            type: "multiple-choice",
            question: "For an irregular rhythm, which method provides the most accurate rate?",
            options: [
              "300 rule for speed",
              "1500 rule for precision",
              "6-second method for averaging",
              "Any method works equally well"
            ],
            correctAnswer: 2,
            explanation: "Correct! The 6-second method provides the most accurate rate for irregular rhythms by averaging the rate over time rather than assuming regularity.",
            imageUrl: "/lessonimages/6-second-method.png"
          },
          {
            id: "precision-calculation-example",
            type: "multiple-choice",
            question: "Using the 1500 rule, if there are 25 small squares between R waves, what is the heart rate?",
            options: [
              "50 bpm",
              "60 bpm",
              "75 bpm",
              "100 bpm"
            ],
            correctAnswer: 1,
            explanation: "Correct! 1500 ÷ 25 = 60 bpm. The 1500 rule provides precise calculations using small square measurements.",
            imageUrl: "/lessonimages/1500-rule-calculation.png"
          },
          {
            id: "clinical-rate-application",
            type: "multiple-choice",
            question: "In an emergency requiring quick rate assessment of a regular rhythm, which method is best?",
            options: [
              "6-second method for accuracy",
              "1500 rule for precision",
              "300 rule for speed",
              "Multiple methods for verification"
            ],
            correctAnswer: 2,
            explanation: "Correct! In emergencies with regular rhythms, the 300 rule provides fast, accurate estimates when speed is critical for immediate decisions.",
            imageUrl: "/lessonimages/300-rule-calculation.png"
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
