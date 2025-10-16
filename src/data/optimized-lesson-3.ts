import { Lesson } from '@/types/learning';

// ENHANCED LESSON 3: Complete ECG Paper & Measurements Mastery - Duolingo-Style Units
export const optimizedLesson3: Lesson = {
  id: 'module-1-lesson-3',
  moduleId: 'module-1',
  title: "Complete ECG Paper & Measurements Mastery",
  description: "Master ECG measurements through 6 focused learning units: Paper Fundamentals, Time Measurements, Voltage Measurements, Calibration, Measurement Techniques, and Clinical Applications",
  order: 3,
  estimatedTime: 40,
  content: {
    type: 'mixed',
    introduction: "📏 Welcome to ECG Measurement Mastery! Learn precise measurement techniques through 6 progressive units: grid fundamentals, time calculations, voltage measurements, calibration verification, measurement techniques, and clinical applications.",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your ECG Measurement Journey",
        content: "UNIT 1: Paper Fundamentals → UNIT 2: Time Measurements → UNIT 3: Voltage Measurements → UNIT 4: Calibration & Standards → UNIT 5: Measurement Techniques → UNIT 6: Clinical Applications",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // ===============================================
      // 🎯 UNIT 1: PAPER FUNDAMENTALS (7 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: Paper Fundamentals',
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'ECG paper grid system overview',
        videoUrl: '/lessonvideos/ecg-measurement-techniques.mp4',
        highlights: [
          '📏 Standardized grid system for all measurements',
          '🟡 Small squares: 1mm × 1mm precision',
          '� Large squares: 5mm × 5mm (5 small squares)',
          '⚡ Foundation for time, voltage, and rate calculations'
        ],
        hint: '�📏 Your measurement foundation!'
      },

      // 🎬 YOUTUBE VIDEO: ECG Measurement Fundamentals
      {
        id: 'youtube-ecg-measurements',
        title: '🎬 ECG Measurement Mastery',
        content: 'Learn the fundamentals of ECG measurement from this comprehensive masterclass. Perfect foundation for understanding grid systems and calculations!',
        type: 'youtube',
        youtubeId: 'WnrvNGa_bPY',
        videoDuration: 3600,
        minimumWatchTime: 900,
        requireFullWatch: false,
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        hint: '📐 Master the fundamentals of precise ECG measurements!'
      },
      
      {
        id: 'paper-grid-flashcard',
        title: 'ECG Paper Grid System',
        type: 'flashcard',
        animation: 'fade',
        flashcard: {
          icon: '📐',
          question: 'What makes ECG paper measurements universal?',
          answer: 'Standardized grid system! 📏\n\n• SMALL SQUARES: 1mm × 1mm precision\n• LARGE SQUARES: 5mm × 5mm (bold lines)\n• RATIO: 5 small squares = 1 large square\n• This creates the foundation for ALL ECG measurements!',
          category: 'concept',
          difficulty: 'beginner'
        },
        hint: '🟢 Grid = universal measurement standard!'
      },

      {
        id: 'square-sizes-steps',
        title: 'Small vs Large Squares',
        type: 'steps',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Comparison of small and large squares on ECG paper',
        audioUrl: '/lessonaudio/ecg-measurements/paper-grid-intro.mp3',
        steps: [
          {
            number: 1,
            title: 'Small Squares',
            description: '1mm × 1mm precision units - Light grid lines form tiny 1mm squares for precise measurements'
          },
          {
            number: 2,
            title: 'Large Squares',
            description: '5mm × 5mm calculation units - Bold/dark lines form 5mm squares - easier to count quickly'
          },
          {
            number: 3,
            title: '5:1 Ratio',
            description: '5 small squares = 1 large square - This fundamental ratio drives ALL ECG calculations'
          }
        ],
        hint: '5️⃣ 5 small squares = 1 large square!'
      },

      {
        id: 'paper-speed-accordion',
        title: 'Paper Speed Standard',
        type: 'accordion',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'ECG paper speed demonstration',
        accordionItems: [
          {
            title: '🏃‍♂️ Standard Speed: 25mm/second',
            content: 'Worldwide standard paper speed ensures consistent measurements across all ECG machines and hospitals.'
          },
          {
            title: '⏱️ Time Calculation',
            content: 'Every 1mm horizontal distance = 0.04 seconds\nEvery 1 small square = 0.04 seconds\nEvery 1 large square = 0.20 seconds'
          },
          {
            title: '📊 Paper Movement',
            content: 'At 25mm/second, the paper moves:\n• 25 small squares per second\n• 5 large squares per second\n• 1500mm (1.5 meters) per minute'
          }
        ],
        hint: '🏃‍♂️ 25mm/second = global standard!'
      },

      {
        id: 'coordinate-system-tabs',
        title: 'ECG Coordinate System',
        type: 'tabs',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'ECG coordinate system showing time and voltage axes',
        tabs: [
          {
            title: 'X-Axis (Time)',
            content: 'Horizontal axis represents TIME ⏰\n\n• Measured in seconds\n• Left to right progression\n• 1mm = 0.04 seconds\n• Foundation for rate and interval calculations'
          },
          {
            title: 'Y-Axis (Voltage)',
            content: 'Vertical axis represents VOLTAGE ⚡\n\n• Measured in millivolts (mV)\n• Up/down deflections\n• 1mm = 0.1mV (standard calibration)\n• Shows electrical amplitude'
          },
          {
            title: 'Grid Intersection',
            content: 'Every point on ECG = specific time + voltage 📍\n\n• X,Y coordinates\n• Precise measurements possible\n• Like plotting points on a graph\n• Enables accurate diagnosis'
          }
        ],
        hint: '📈 X = time, Y = voltage!'
      },

      {
        id: 'measurement-precision-highlight',
        title: 'Measurement Precision',
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Precise ECG measurement tools',
        highlights: [
          '⚠️ ECG measurements must be precise!',
          '🔧 Use rulers, calipers, or count squares carefully',
          '💔 Small errors → misdiagnosis → patient harm',
          '💡 Precision saves lives in cardiology!'
        ],
        hint: '🎯 Precision = accurate diagnosis!'
      },

      {
        id: 'paper-fundamentals-audio',
        title: '🎵 Paper Grid Audio Guide',
        type: 'audio',
        animation: 'fade',
        audioUrl: '/lessonaudio/ecg-measurements/paper-grid-intro.mp3',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'ECG paper fundamentals audio lesson',
        audio: {
          transcript: 'Comprehensive overview of ECG paper fundamentals. Learn how the standardized grid system enables precise medical measurements and forms the foundation of all ECG analysis.'
        },
        hint: '🔊 Listen to grid mastery!'
      },

      // ==================== UNIT 1 QUIZ: PAPER FUNDAMENTALS ====================
      {
        id: 'unit1-paper-quiz',
        title: '🎯 Unit 1 Quiz: Paper Fundamentals',
        content: "Test your knowledge of ECG paper fundamentals!",
        type: 'quiz',
        layout: 'centered',
        animation: 'slide',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'ECG paper fundamentals quiz',
        hint: '🧠 Test your Unit 1 knowledge!',
        question: "What is the standard paper speed for ECG recordings?",
        options: [
          "50mm/second",
          "25mm/second",
          "10mm/second",
          "100mm/second"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! The standard ECG paper speed is 25mm/second worldwide. This creates the foundation for all time measurements on ECG strips."
      },

      // ================================================
      // 🎯 UNIT 2: TIME MEASUREMENTS (8 slides)
      // ================================================
      {
        id: 'unit2-intro',
        title: '🎯 Unit 2: Time Measurements',
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/qt-measurement-technique.png',
        imageAlt: 'ECG time measurements overview',
        highlights: [
          '⏱️ Master the horizontal time axis',
          '📏 Learn precise interval measurements',
          '💓 Calculate heart rates accurately',
          '🎯 Time precision = diagnostic accuracy'
        ],
        hint: '⏱️ Time = horizontal axis mastery!'
      },

      {
        id: 'horizontal-time-flashcard',
        title: 'Horizontal = Time',
        type: 'flashcard',
        animation: 'fade',
        flashcard: {
          icon: '➡️',
          question: 'Which axis represents TIME on an ECG?',
          answer: 'Horizontal axis (X-axis)! ➡️\n\n• LEFT TO RIGHT = time progression\n• DISTANCE = time duration\n• EVENTS: Earlier ← → Later\n• Foundation of all ECG timing analysis!',
          category: 'concept',
          difficulty: 'beginner'
        },
        hint: '➡️ Left to right = time flow!'
      },

      {
        id: 'time-values-accordion',
        title: 'Square Time Values',
        type: 'accordion',
        animation: 'fade',
        imageUrl: '/lessonimages/qt-measurement-technique.png',
        imageAlt: 'Square time value demonstration',
        accordionItems: [
          {
            title: '� Small Square = 0.04 seconds',
            content: 'Each small square represents 0.04 seconds (40 milliseconds).\nAt standard speed 25mm/sec: 1mm = 0.04 seconds.\nYour basic precision unit for exact measurements!'
          },
          {
            title: '🟫 Large Square = 0.20 seconds', 
            content: 'Each large square represents 0.20 seconds (200 milliseconds).\nLarge square = 5 small squares = 5 × 0.04s = 0.20s.\nPerfect for quick calculations and heart rate!'
          },
          {
            title: '🧮 Calculation Tips',
            content: 'Use small squares for precision (intervals, durations).\nUse large squares for speed (heart rate, rough estimates).\nMix both methods for optimal accuracy and efficiency!'
          }
        ],
        hint: '📏 Know your time values!'
      },

      {
        id: 'heart-rate-steps',
        title: 'Heart Rate Calculation',
        type: 'steps',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Heart rate calculation methods',
        audioUrl: '/lessonaudio/ecg-measurements/heart-rate-calculation.mp3',
        steps: [
          {
            number: 1,
            title: 'Find R-R Interval',
            description: 'Measure distance between consecutive R waves - Use peak-to-peak measurement for consistency'
          },
          {
            number: 2,
            title: 'Count Large Squares',
            description: 'Count large squares between R waves - Include partial squares for accuracy'
          },
          {
            number: 3,
            title: 'Apply 300 Rule',
            description: 'Heart Rate = 300 ÷ number of large squares - Quick method: 300, 150, 100, 75, 60, 50...'
          },
          {
            number: 4,
            title: 'Verify Result',
            description: 'Check if result makes clinical sense - Normal resting HR: 60-100 BPM'
          }
        ],
        hint: '💓 300 ÷ large squares = heart rate!'
      },

      {
        id: 'intervals-tabs',
        title: 'Key Interval Measurements',
        type: 'tabs',
        animation: 'fade',
        imageUrl: '/lessonimages/pr-interval-measurement-nsr.png',
        imageAlt: 'ECG interval measurements with normal ranges',
        tabs: [
          {
            title: 'PR Interval',
            content: 'NORMAL: 0.12-0.20 seconds (3-5 small squares) ⏱️\n\n• Start: Beginning of P wave\n• End: Beginning of QRS\n• Measures AV conduction time\n• Abnormal: <0.12s or >0.20s'
          },
          {
            title: 'QRS Duration',
            content: 'NORMAL: <0.12 seconds (<3 small squares) ⚡\n\n• Start: First deflection of QRS\n• End: Return to baseline\n• Measures ventricular depolarization\n• Wide QRS >0.12s = conduction delay'
          },
          {
            title: 'QT Interval',
            content: 'NORMAL: <0.44 seconds (<11 small squares) 💓\n\n• Start: Beginning of QRS\n• End: End of T wave\n• Measures total ventricular activity\n• Long QT = arrhythmia risk'
          }
        ],
        hint: '📊 Know your normal ranges!'
      },

      {
        id: 'measurement-techniques-highlight',
        title: 'Time Measurement Techniques',
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/qt-measurement-technique.png',
        imageAlt: 'ECG time measurement techniques',
        highlights: [
          '🔧 Use calipers for maximum precision',
          '🟫 Count squares for quick estimates',
          '📏 Measure from beginning to beginning',
          '📊 Average multiple cycles for irregular rhythms'
        ],
        hint: '🔧 Tools improve accuracy!'
      },

      {
        id: 'time-measurements-audio',
        title: '🎵 Time Calculations Audio Guide',
        type: 'audio',
        animation: 'fade',
        audioUrl: '/lessonaudio/ecg-measurements/time-calculations.mp3',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Time measurements audio lesson',
        audio: {
          transcript: 'Detailed time calculation methods. Learn heart rate formulas, interval measurements, and practical tips for accurate time analysis in clinical practice.'
        },
        hint: '🔊 Master time calculations!'
      },

      // ==================== UNIT 2 QUIZ: TIME MEASUREMENTS ====================
      {
        id: 'unit2-time-quiz',
        title: '🎯 Unit 2 Quiz: Time Measurements',
        content: "Test your time measurement skills!",
        type: 'quiz',
        layout: 'centered',
        animation: 'slide',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Time measurements quiz',
        hint: '🧠 Test your Unit 2 knowledge!',
        question: "If there are 4 large squares between R waves, what is the heart rate?",
        options: [
          "60 beats per minute",
          "75 beats per minute",
          "100 beats per minute",
          "300 beats per minute"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Heart rate = 300 ÷ 4 large squares = 75 beats per minute. The 300 method is perfect for regular rhythms."
      },

      // ================================================
      // 🎯 UNIT 3: VOLTAGE MEASUREMENTS (8 slides)
      // ================================================
      {
        id: 'unit3-intro',
        title: '🎯 Unit 3: Voltage Measurements',
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/qrs-duration-comparison.png',
        imageAlt: 'ECG voltage measurements overview',
        highlights: [
          '⚡ Master the vertical voltage axis',
          '📏 Learn calibration standards (1mV = 10mm)',
          '📊 Measure wave amplitudes accurately',
          '🚨 Recognize pathological voltage changes'
        ],
        hint: '⚡ Voltage = vertical axis mastery!'
      },

      {
        id: 'vertical-voltage-flashcard',
        title: 'Vertical = Voltage',
        type: 'flashcard',
        animation: 'fade',
        flashcard: {
          icon: '⬆️',
          question: 'What does the vertical axis represent on ECG?',
          answer: 'VOLTAGE amplitude! ⚡\n\n• UP/DOWN = electrical strength\n• HIGHER waves = stronger activity\n• BASELINE = zero voltage reference\n• Essential for cardiac diagnosis!',
          category: 'concept',
          difficulty: 'beginner'
        },
        hint: '⬆️ Up/down = voltage strength!'
      },

      {
        id: 'voltage-calibration-tabs',
        title: 'Standard Voltage Calibration',
        type: 'tabs',
        animation: 'fade',
        imageUrl: '/lessonimages/qrs-duration-comparison.png',
        imageAlt: 'ECG voltage calibration standard',
        tabs: [
          {
            title: 'Standard Calibration',
            content: '1mV = 10mm (2 large squares) 📏\n\n• Universal standard worldwide\n• Always verify calibration mark\n• Some machines use half/double standard\n• Critical for accurate measurements!'
          },
          {
            title: 'Small Square Value',
            content: '1 small square = 0.1mV ⚡\n\n• Precision measurement unit\n• 1mm = 0.1mV at standard calibration\n• Use for exact amplitude calculations\n• Perfect for detailed analysis'
          },
          {
            title: 'Large Square Value',
            content: '1 large square = 0.5mV 📦\n\n• Quick estimation unit\n• 5mm = 0.5mV at standard calibration\n• Faster for routine measurements\n• Good for screening abnormalities'
          }
        ],
        hint: '📏 1mV = 10mm = 2 large squares!'
      },

      {
        id: 'wave-amplitude-steps',
        title: 'Measuring Wave Amplitudes',
        type: 'steps',
        animation: 'fade',
        imageUrl: '/lessonimages/qrs-complex-components.png',
        imageAlt: 'ECG wave amplitude measurements',
        audioUrl: '/lessonaudio/ecg-measurements/voltage-measurement.mp3',
        steps: [
          {
            number: 1,
            title: 'Find Baseline',
            description: 'Identify the isoelectric line (zero voltage) - Usually the PR or TP segment level'
          },
          {
            number: 2,
            title: 'Measure to Peak',
            description: 'Count squares from baseline to wave peak - Use highest point of positive waves, lowest for negative'
          },
          {
            number: 3,
            title: 'Calculate Voltage',
            description: 'Multiply squares × voltage per square - Small squares × 0.1mV OR large squares × 0.5mV'
          },
          {
            number: 4,
            title: 'Compare to Normal',
            description: 'Check if amplitude is within normal ranges - Abnormal amplitudes suggest pathology'
          }
        ],
        hint: '📊 Baseline to peak = amplitude!'
      },

      {
        id: 'normal-voltage-ranges-accordion',
        title: 'Normal Voltage Ranges',
        type: 'accordion',
        animation: 'fade',
        imageUrl: '/lessonimages/p-wave-analysis-overview.png',
        imageAlt: 'Normal ECG voltage ranges',
        accordionItems: [
          {
            title: '� P Wave: 0.5-2.5mV',
            content: 'Normal atrial depolarization amplitude.\n• <0.5mV: May indicate atrial enlargement\n• >2.5mV: Suggests right atrial enlargement\n• Shape matters as much as size!'
          },
          {
            title: '🔺 QRS Complex: 5-25mV',
            content: 'Normal ventricular depolarization amplitude.\n• Varies significantly by lead position\n• <5mV: Low voltage (effusion, obesity)\n• >25mV: High voltage (hypertrophy, athletes)'
          },
          {
            title: '🔶 T Wave: <5mV',
            content: 'Normal ventricular repolarization amplitude.\n• Usually 1/8 to 2/3 of QRS height\n• >5mV: Hyperacute T waves (early MI)\n• Inverted T waves often pathological'
          }
        ],
        hint: '📊 Know normal voltage ranges!'
      },

      {
        id: 'st-segment-highlight',
        title: 'ST Segment Measurement',
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/qt-measurement-technique.png',
        imageAlt: 'ST segment measurement technique',
        highlights: [
          '🚨 Measure 80ms (2 small squares) after J-point',
          '📈 ST elevation >1mV = STEMI (heart attack)',
          '📉 ST depression >0.5mV = ischemia',
          '💔 Critical for cardiac emergency diagnosis!'
        ],
        hint: '🚨 ST changes = cardiac emergency!'
      },

      {
        id: 'voltage-measurements-audio',
        title: '🎵 Voltage Measurements Audio Guide',
        type: 'audio',
        animation: 'fade',
        audioUrl: '/lessonaudio/ecg-measurements/voltage-measurements.mp3',
        imageUrl: '/lessonimages/qrs-complex-components.png',
        imageAlt: 'Voltage measurements audio lesson',
        audio: {
          transcript: 'Comprehensive voltage measurement techniques. Learn calibration verification, amplitude calculations, and clinical significance of voltage changes in cardiac diagnosis.'
        },
        hint: '🔊 Master voltage precision!'
      },

      // ==================== UNIT 3 QUIZ: VOLTAGE MEASUREMENTS ====================
      {
        id: 'unit3-voltage-quiz',
        title: '🎯 Unit 3 Quiz: Voltage Measurements',
        content: "Test your voltage measurement knowledge!",
        type: 'quiz',
        layout: 'centered',
        animation: 'slide',
        imageUrl: '/lessonimages/qrs-complex-components.png',
        imageAlt: 'Voltage measurements quiz',
        hint: '🧠 Test your Unit 3 knowledge!',
        question: "If a QRS complex is 20mm tall, what is its voltage amplitude?",
        options: [
          "1.0mV",
          "2.0mV",
          "10mV",
          "20mV"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! 20mm ÷ 10mm/mV = 2.0mV. Remember the standard calibration: 1mV = 10mm, so 20mm = 2.0mV amplitude."
      },

      // ================================================
      // 🎯 UNIT 4: CALIBRATION & STANDARDS (8 slides)
      // ================================================
      {
        id: 'unit4-intro',
        title: '🎯 Unit 4: Calibration & Standards',
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'ECG calibration and standards overview',
        highlights: [
          '🎯 Master calibration pulse verification',
          '⚙️ Understand different gain settings',
          '🔧 Troubleshoot calibration problems',
          '📏 Essential for measurement accuracy'
        ],
        hint: '🎯 Calibration = measurement accuracy!'
      },

      {
        id: 'calibration-pulse-flashcard',
        title: 'Calibration Pulse Basics',
        type: 'flashcard',
        animation: 'fade',
        flashcard: {
          icon: '🟦',
          question: 'What does the calibration pulse show you?',
          answer: 'Machine settings verification! 🟦\n\n• STANDARD: 1mV = 10mm height\n• SQUARE WAVE: Shows gain setting\n• DURATION: Shows paper speed\n• Always check this FIRST before interpreting!',
          category: 'procedure',
          difficulty: 'intermediate'
        },
        hint: '🟦 Square pulse = calibration check!'
      },

      {
        id: 'standard-settings-tabs',
        title: 'Standard Calibration Settings',
        type: 'tabs',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Standard ECG calibration settings',
        tabs: [
          {
            title: 'Paper Speed: 25mm/sec',
            content: 'Standard worldwide speed ⚡\n\n• Creates universal time measurements\n• 1mm = 0.04 seconds\n• Different speeds change appearance\n• Always verify speed setting!'
          },
          {
            title: 'Gain: 10mm/mV',
            content: 'Standard voltage calibration 📏\n\n• 1mV produces 10mm deflection\n• Creates universal voltage measurements\n• Different gains change amplitude\n• Calibration pulse shows gain!'
          },
          {
            title: 'Combined Standard',
            content: '25mm/sec + 10mm/mV = Universal System 🌍\n\n• Enables consistent measurements worldwide\n• All ECG teaching based on this\n• Deviations must be clearly marked\n• Foundation of ECG interpretation'
          }
        ],
        hint: '⚙️ 25mm/sec, 10mm/mV = standard!'
      },

      {
        id: 'gain-variations-accordion',
        title: 'Gain Setting Variations',
        type: 'accordion',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'ECG gain setting variations',
        accordionItems: [
          {
            title: '🔽 Half Gain (5mm/mV)',
            content: 'Calibration pulse = 5mm tall\n• Used for very tall QRS complexes\n• Prevents waveforms from running together\n• All voltage measurements appear half size\n• Must multiply readings by 2!'
          },
          {
            title: '🔼 Double Gain (20mm/mV)',
            content: 'Calibration pulse = 20mm tall\n• Used for very small QRS complexes\n• Makes small waveforms easier to see\n• All voltage measurements appear double size\n• Must divide readings by 2!'
          },
          {
            title: '📏 Recognition Tips',
            content: 'Always check calibration pulse height!\n• 10mm = standard gain\n• 5mm = half gain setting\n• 20mm = double gain setting\n• Wrong assumption = wrong diagnosis!'
          }
        ],
        hint: '📏 Pulse height reveals gain setting!'
      },

      {
        id: 'speed-variations',
        title: 'Paper Speed Variations',
        highlights: [
          '🎯 Double speed (50mm/sec): Waves appear wider, easier to see details',
          '🎯 Half speed (12.5mm/sec): Saves paper, waves appear compressed',
          '🎯 Speed affects time calculations!',
          '🎯 Standard speed is 25mm/sec for normal analysis',
          '🎯 Different speeds serve different diagnostic purposes'
        ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/qt-measurement-technique.png',
        imageAlt: 'ECG paper speed variations',
        hint: '🏃‍♂️ Speed changes wave appearance!'
      },

      {
        id: 'calibration-troubleshooting',
        title: 'Calibration Troubleshooting',
        highlights: [
          '🎯 No pulse? Check machine setup carefully',
          '🎯 Wrong height? Verify gain settings',
          '🎯 Slanted pulse? Check paper speed consistency',
          '🎯 Distorted pulse? Machine malfunction possible',
          '🎯 Always troubleshoot systematically!'
        ],
        type: 'highlight',
        layout: 'centered',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'ECG calibration troubleshooting guide',
        hint: '🔧 Fix calibration, fix diagnosis!'
      },

      {
        id: 'clinical-calibration-importance',
        title: 'Clinical Importance of Calibration',
        highlights: [
        '🎯 Wrong calibration = wrong diagnosis',
        '🎯 STEMI may be missed with half gain',
        '🎯 Arrhythmias misdiagnosed with wrong speed'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Clinical importance of ECG calibration',
        hint: '💔 Wrong calibration = missed diagnosis!'
      },

      {
        id: 'calibration-mastery-audio',
        title: '🎵 Calibration Mastery Audio',
        content: 'Listen to advanced calibration concepts. Learn to identify all calibration variations and understand their clinical impact on ECG interpretation.',
        type: 'audio',
        layout: 'centered',
        animation: 'fade',
        audioUrl: '/lessonaudio/ecg-measurements/calibration-mastery.mp3',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Calibration mastery audio lesson',
        hint: '🔊 Master calibration expertise!'
      },

      // ==================== UNIT 4 QUIZ: CALIBRATION & STANDARDS ====================
      {
        id: 'unit4-calibration-quiz',
        title: '🎯 Unit 4 Quiz: Calibration & Standards',
        content: "Test your calibration knowledge!",
        type: 'quiz',
        layout: 'centered',
        animation: 'slide',
        imageUrl: '/lessonimages/bazett-formula-calculation.png',
        imageAlt: 'Calibration and standards quiz',
        hint: '🧠 Test your Unit 4 knowledge!',
        question: "If the calibration pulse is 5mm tall instead of 10mm, what does this indicate?",
        options: [
          "Normal calibration",
          "Half gain setting (5mm/mV)",
          "Double gain setting (20mm/mV)",
          "Machine malfunction"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! A 5mm calibration pulse indicates half gain setting (5mm/mV). This means all voltage measurements appear half their actual size."
      },

      // ================================================
      // 🎯 UNIT 5: MEASUREMENT TECHNIQUES (8 slides)
      // ================================================
      {
        id: 'unit5-intro',
        title: '🎯 Unit 5: Measurement Techniques',
        highlights: [
        '🎯 Master practical measurement techniques! Learn to use tools, improve accuracy, handle irregular rhythms, and apply professional measurement methods in clinical practice.'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/pr-interval-measurement-nsr.png',
        imageAlt: 'ECG measurement techniques overview',
        hint: '🔧 Professional measurement skills!'
      },

      {
        id: 'measurement-tools',
        title: 'Essential Measurement Tools',
        highlights: [
        '🎯 Calipers: Most accurate for intervals',
        '🎯 Rulers: Good for voltage measurements',
        '🎯 Digital calipers: Automatic calculations'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/qt-measurement-technique.png',
        imageAlt: 'ECG measurement tools and techniques',
        hint: '🔧 Right tool = accurate measurement!'
      },

      {
        id: 'interval-measurement-technique',
        title: 'Interval Measurement Technique',
        highlights: [
        '🎯 PR interval: Start of P to start of QRS',
        '🎯 QRS width: Start to end of QRS complex',
        '🎯 QT interval: Start of QRS to end of T wave'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/qt-measurement-technique.png',
        imageAlt: 'ECG interval measurement landmarks',
        hint: '📍 Consistent landmarks = accurate intervals!'
      },

      {
        id: 'irregular-rhythm-measurement',
        title: 'Measuring Irregular Rhythms',
        highlights: [
        '🎯 For irregular rhythms: Measure multiple R-R intervals',
        '🎯 Calculate average',
        '🎯 Use 6-second strip method: count complexes × 10 = heart rate'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/qt-measurement-technique.png',
        imageAlt: 'Irregular rhythm measurement techniques',
        hint: '📊 Average multiple measurements!'
      },

      {
        id: 'amplitude-measurement-technique',
        title: 'Amplitude Measurement Technique',
        highlights: [
        '🎯 Measure from isoelectric baseline to peak',
        '🎯 For biphasic waves, measure positive and negative components separately',
        '🎯 Use magnification for tiny waves.'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/qrs-duration-comparison.png',
        imageAlt: 'ECG amplitude measurement techniques',
        hint: '📏 Baseline to peak = amplitude!'
      },

      {
        id: 'measurement-accuracy-tips',
        title: 'Accuracy Improvement Tips',
        highlights: [
        '🎯 Good lighting improves visibility',
        '🎯 Clean ECG strips prevent errors',
        '🎯 Measure in good leads (less artifact)'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/six-second-method.png',
        imageAlt: 'ECG measurement accuracy tips',
        hint: '💡 Environment affects accuracy!'
      },

      {
        id: 'digital-vs-manual',
        title: 'Digital vs Manual Measurement',
        highlights: [
        '🎯 Digital systems: Automatic, fast, consistent',
        '🎯 Manual measurement: Required skill, backup method, quality control',
        '🎯 Learn both methods for complete competency!'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/300-rule-demonstration.png',
        imageAlt: 'Digital vs manual ECG measurement',
        hint: '🖥️ Learn both digital and manual!'
      },

      {
        id: 'measurement-video-techniques',
        title: '🎥 Measurement Techniques Video',
        content: 'Watch professional ECG measurement techniques in action. See caliper use, interval measurements, and accuracy tips demonstrated by experts.',
        type: 'video',
        layout: 'centered',
        animation: 'fade',
        videoUrl: '/lessonvideos/ecg-measurement-techniques.mp4',
        imageUrl: '/lessonimages/pr-interval-measurement-nsr.png',
        imageAlt: 'ECG measurement techniques video',
        hint: '🎬 Watch professional techniques!'
      },

      // ==================== UNIT 5 QUIZ: MEASUREMENT TECHNIQUES ====================
      {
        id: 'unit5-techniques-quiz',
        title: '🎯 Unit 5 Quiz: Measurement Techniques',
        content: "Test your measurement technique knowledge!",
        type: 'quiz',
        layout: 'centered',
        animation: 'slide',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Measurement techniques quiz',
        hint: '🧠 Test your Unit 5 knowledge!',
        question: "What is the most accurate tool for measuring ECG intervals?",
        options: [
          "Ruler",
          "Calipers",
          "Magnifying glass",
          "Finger measurement"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Calipers are the most accurate tool for measuring ECG intervals because they maintain consistent distance and can be precisely positioned."
      },

      // ================================================
      // 🎯 UNIT 6: CLINICAL APPLICATIONS (7 slides)
      // ================================================
      {
        id: 'unit6-intro',
        title: '🎯 Unit 6: Clinical Applications',
        highlights: [
        '🎯 Apply measurement skills in real clinical scenarios! Learn diagnostic thresholds, emergency measurements, and how precise measurements save lives in cardiology practice.'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/qrs-duration-comparison.png',
        imageAlt: 'Clinical ECG applications overview',
        hint: '🏥 Real-world measurement skills!'
      },

      {
        id: 'diagnostic-thresholds',
        title: 'Critical Diagnostic Thresholds',
        highlights: [
        '🎯 QRS >0.12s = wide complex',
        '🎯 PR >0.20s = AV block',
        '🎯 QTc >0.44s = prolonged'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/qrs-duration-comparison.png',
        imageAlt: 'ECG diagnostic thresholds',
        hint: '🚨 Critical thresholds = life/death!'
      },

      {
        id: 'emergency-measurements',
        title: 'Emergency Measurement Priorities',
        highlights: [
        '🎯 STEMI: ST elevation >1mV in 2+ leads',
        '🎯 VT: QRS >0.12s + rate >150',
        '🎯 Complete heart block: PR dissociation'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/rhythm-vs-rate-overview.png',
        imageAlt: 'Emergency ECG measurements',
        hint: '⚡ Emergency = fast + accurate!'
      },

      {
        id: 'serial-ecg-comparison',
        title: 'Serial ECG Comparison',
        highlights: [
        '🎯 Compare measurements over time',
        '🎯 Watch for evolving ST elevation',
        '🎯 Track QTc with medications'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/sinus-tachycardia-assessment-strategy.png',
        imageAlt: 'Serial ECG comparison techniques',
        hint: '📈 Trends reveal the diagnosis!'
      },

      {
        id: 'medication-monitoring',
        title: 'Medication Effect Monitoring',
        highlights: [
        '🎯 Digoxin: Watch QT shortening',
        '🎯 Quinidine: Watch QT prolongation',
        '🎯 Beta-blockers: Watch PR prolongation'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/bazett-formula-calculation.png',
        imageAlt: 'ECG monitoring for medications',
        hint: '💊 Measurements guide medication safety!'
      },

      {
        id: 'quality-control',
        title: 'Measurement Quality Control',
        highlights: [
        '🎯 Double-check critical measurements',
        '🎯 Have colleagues verify emergency findings',
        '🎯 Use multiple leads for confirmation'
      ],
        type: 'highlight',
        animation: 'fade',
        imageUrl: '/lessonimages/qt-measurement-technique.png',
        imageAlt: 'ECG measurement quality control',
        hint: '✅ Double-check = patient safety!'
      },

      {
        id: 'measurements-mastery-celebration',
        title: '🎉 ECG Measurements Mastery!',
        content: 'Congratulations! You\'ve mastered ECG paper fundamentals, time calculations, voltage measurements, calibration verification, measurement techniques, and clinical applications!',
        type: 'audio',
        layout: 'centered',
        animation: 'fade',
        audioUrl: '/lessonaudio/ecg-measurements/measurements-mastery-celebration.mp3',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'ECG measurements mastery celebration',
        hint: '🏆 You\'re a measurement expert!'
      },

      // ==================== UNIT 6 QUIZ: CLINICAL APPLICATIONS ====================
      {
        id: 'unit6-clinical-quiz',
        title: '🎯 Unit 6 Quiz: Clinical Applications',
        content: "Test your clinical application knowledge!",
        type: 'quiz',
        layout: 'centered',
        animation: 'slide',
        imageUrl: '/lessonimages/rate-calculation-methods.png',
        imageAlt: 'Clinical applications quiz',
        hint: '🧠 Test your Unit 6 knowledge!',
        question: "What ST elevation measurement indicates STEMI?",
        options: [
          "≥0.5mV in any lead",
          "≥1mV in 2 or more contiguous leads",
          "≥2mV in any lead",
          "Any ST elevation"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! STEMI criteria require ≥1mV (1mm) ST elevation in 2 or more contiguous leads. This is a critical emergency diagnosis threshold."
      }
    ],
    summary: "🎉 Congratulations! You've mastered complete ECG measurements through 6 progressive units: Paper Fundamentals, Time Measurements, Voltage Measurements, Calibration & Standards, Measurement Techniques, and Clinical Applications!",
    keyPoints: [
      "📏 ECG paper grid: Small squares (1mm), Large squares (5mm) for precise measurements",
      "⏱️ Time calculations: Small square = 0.04s, Large square = 0.20s, Heart rate = 300÷squares",
      "⚡ Voltage measurements: Small square = 0.1mV, Large square = 0.5mV, Standard 1mV = 10mm",
      "🎯 Calibration verification: Always check pulse height, gain settings affect all measurements",
      "🔧 Measurement techniques: Use calipers for accuracy, consistent landmarks, quality control",
      "🏥 Clinical applications: Know diagnostic thresholds, emergency priorities, serial comparisons"
    ],
    resources: [
      {
        title: "Interactive ECG Measurement Calculator",
        url: "/resources/ecg-calculator",
        type: "tool",
        description: "Practice ECG measurements with automatic calculations"
      },
      {
        title: "ECG Calibration Checker",
        url: "/resources/calibration-checker",
        type: "tool",
        description: "Learn to identify different calibration settings"
      },
      {
        title: "Measurement Technique Simulator",
        url: "/resources/measurement-simulator",
        type: "tool",
        description: "Practice with virtual calipers and measurement tools"
      }
    ]
  },
  
  // ============= ENHANCED DUOLINGO-STYLE TASKS (Final Assessment Only) =============
  tasks: [
    
    // ==================== FINAL MEASUREMENTS MASTERY ASSESSMENT ====================
    {
      id: 'final-measurements-mastery-assessment',
      type: 'final-assessment',
      xp: 50,
      audio: {
        mainNarration: {
          audioUrl: '/lessonaudio/ecg-measurements/measurements-mastery-celebration.mp3',
          duration: 10,
          transcript: "Congratulations on completing all 6 units of ECG measurements mastery! You've learned paper fundamentals, time calculations, voltage measurements, calibration verification, measurement techniques, and clinical applications. Now prove your expertise!"
        }
      },
      images: {
        mainImage: '/lessonimages/rate-calculation-methods.png',
        slideImages: []
      },
      content: {
        prerequisiteMessage: "🏆 Final Assessment: Complete all 6 units to unlock your ECG Measurements Mastery Certificate!",
        questions: [
          {
            id: "time-calculation-mastery",
            type: "multiple-choice",
            question: "If the R-R interval spans 6 large squares, what is the heart rate?",
            options: [
              "30 beats per minute",
              "50 beats per minute",
              "60 beats per minute",
              "75 beats per minute"
            ],
            correctAnswer: 1,
            explanation: "✅ Correct! Heart rate = 300 ÷ 6 large squares = 50 beats per minute. The 300 method is perfect for regular rhythms.",
            imageUrl: "/lessonimages/ecg-time-measurements.png"
          },
          {
            id: "voltage-amplitude-mastery",
            type: "multiple-choice",
            question: "If a QRS complex measures 25mm tall with standard calibration, what is its amplitude?",
            options: [
              "1.25mV",
              "2.5mV",
              "5.0mV",
              "25mV"
            ],
            correctAnswer: 1,
            explanation: "✅ Correct! 25mm ÷ 10mm/mV = 2.5mV. With standard calibration (1mV = 10mm), this QRS has normal amplitude.",
            imageUrl: "/lessonimages/ecg-voltage-measurements.png"
          },
          {
            id: "calibration-identification-mastery",
            type: "multiple-choice",
            question: "What does a 20mm calibration pulse indicate?",
            options: [
              "Standard calibration (10mm/mV)",
              "Half gain setting (5mm/mV)",
              "Double gain setting (20mm/mV)",
              "Machine malfunction"
            ],
            correctAnswer: 2,
            explanation: "✅ Correct! A 20mm calibration pulse indicates double gain (20mm/mV). All voltage measurements appear twice normal size.",
            imageUrl: "/lessonimages/ecg-calibration-pulse.png"
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
