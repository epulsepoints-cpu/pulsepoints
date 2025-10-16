import { Lesson } from '@/types/learning';

// ENHANCED LESSON 8: Complete Artifact Recognition Mastery - Duolingo-Style Units
export const optimizedLesson8: Lesson = {
  id: 'module-1-lesson-8',
  moduleId: 'module-1',
  title: "Complete Artifact Recognition Mastery",
  description: "Master artifact recognition through 6 focused learning units: Motion Artifacts, Electrical Interference, Technical Problems, Baseline Issues, Clinical Correlation, and Prevention Strategies - each with interactive content and quizzes",
  order: 8,
  estimatedTime: 40,
  content: {
    type: 'mixed',
    introduction: "🔍 Welcome to Artifact Recognition Mastery! Learn to identify and prevent ECG artifacts that can mimic dangerous rhythms through 6 progressive units with slides, audio, video, and quizzes.",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your Learning Journey",
        content: "UNIT 1: Motion Artifacts → UNIT 2: Electrical Interference → UNIT 3: Technical Problems → UNIT 4: Baseline Issues → UNIT 5: Clinical Correlation → UNIT 6: Prevention Strategies",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // ===============================================
      // 🎯 UNIT 1: MOTION ARTIFACTS (7 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: Motion Artifacts',
        content: 'Start your artifact mastery! Learn to identify motion artifacts that can mimic dangerous arrhythmias - the most common cause of false alarms in ECG monitoring.',
        type: 'highlight',
        layout: 'centered',
        animation: 'fade',
        imageUrl: '/lessonimages/artifact-causes-overview.png',
        imageAlt: 'Motion artifacts overview for foundation learning',
        highlights: [
          '🏃‍♂️ Patient movement effects',
          '🤲 Muscle tremor artifacts',
          '🫁 Respiratory variations', 
          '🔍 Recognition techniques'
        ],
        hint: '🚀 Movement creates fake rhythms!'
      },

      // 🎬 YOUTUBE VIDEO: Day 4 - ST Segment Analysis
      {
        id: 'youtube-day4-st-segment',
        title: '🎬 Day 4: Decoding the ST Segment',
        content: 'ST segment analysis - ischemia and injury patterns vs artifacts. Learn to distinguish real ST changes from technical artifacts!',
        type: 'youtube',
        youtubeId: '_lIS_1tUDGQ',
        videoDuration: 600,
        minimumWatchTime: 480,
        requireFullWatch: true,
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        hint: '🚨 Critical for distinguishing real ischemia from artifacts!'
      },

      // 🎬 YOUTUBE VIDEO: Day 5 - T Wave Analysis  
      {
        id: 'youtube-day5-t-waves',
        title: '🎬 Day 5: Demystifying T Waves',
        content: 'T wave interpretation - repolarization abnormalities vs artifacts. Essential for recognizing when T wave changes are real vs technical!',
        type: 'youtube',
        youtubeId: 'VWS9uTDyaTE',
        videoDuration: 600,
        minimumWatchTime: 420,
        requireFullWatch: false,
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        hint: '📊 Real T wave changes vs technical artifacts!'
      },
      
      {
        id: 'patient-movement-artifacts',
        title: 'Patient Movement Artifacts',
        type: 'flashcard',
        icon: '🏃‍♂️',
        flashcardFront: 'What ECG patterns can patient movement create?',
        flashcardBack: 'Muscle tremor mimics A-fib! Shivering creates chaos, talking causes spikes, breathing shifts baseline. Movement = fake arrhythmias! 🏃‍♂️⚡',
        animation: 'fade',
        hint: '🏃‍♂️ Movement mimics dangerous rhythms!'
      },

      {
        id: 'muscle-tremor-patterns',
        title: 'Muscle Tremor Recognition',
        type: 'steps',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Frequency Characteristics',
            description: 'Tremor usually 4-6 Hz creating regular oscillations that can mimic atrial fibrillation'
          },
          {
            number: 2,
            title: 'Distribution Pattern',
            description: 'Affects limb leads more than precordial leads due to electrode placement'
          },
          {
            number: 3,
            title: 'QRS Preservation',
            description: 'QRS complexes remain normal and regular despite baseline artifact'
          },
          {
            number: 4,
            title: 'Clinical Context',
            description: 'Patient appears anxious, cold, or has neurological conditions causing tremor'
          }
        ],
        hint: '🤲 Tremor has characteristic patterns!'
      },

      {
        id: 'respiratory-artifacts',
        title: 'Respiratory Artifact Types',
        type: 'tabs',
        animation: 'fade',
        tabs: [
          {
            title: '🫁 Baseline Wander',
            content: 'Slow breathing shifts\n\n• Up and down with chest movement\n• Sine-wave pattern\n• Affects all leads similarly\n• Normal respiratory cycle'
          },
          {
            title: '💨 Deep Breathing',
            content: 'Exaggerated movements\n\n• Large baseline shifts\n• May trigger alarms\n• Often during procedures\n• Ask patient to breathe normally'
          },
          {
            title: '😤 Hyperventilation',
            content: 'Rapid irregular breathing\n\n• Chaotic baseline changes\n• May mimic arrhythmias\n• Anxiety or medical causes\n• Clinical correlation needed'
          }
        ],
        hint: '🫁 Breathing affects ECG baseline!'
      },

      {
        id: 'movement-vs-arrhythmia',
        title: 'Movement vs Real Arrhythmia',
        type: 'accordion',
        animation: 'fade',
        accordionItems: [
          {
            title: '🔍 Key Distinguishing Features',
            content: 'ARTIFACT: QRS remains normal and regular\nREAL ARRHYTHMIA: QRS changes with rhythm\nARTIFACT: Starts/stops with movement\nREAL: Independent of patient activity'
          },
          {
            title: '🏥 Clinical Clues',
            content: 'Watch the patient during recording\nArtifacts correlate with movement\nReal arrhythmias may have symptoms\nVital signs help distinguish'
          },
          {
            title: '⚡ Technical Assessment',
            content: 'Check lead connections and placement\nRepeat ECG with patient still\nMultiple leads show same timing\nArtifacts affect leads differently'
          },
          {
            title: '🎯 Decision Strategy',
            content: 'When in doubt, repeat the ECG\nObserve patient during recording\nCorrelate with clinical picture\nDon\'t treat artifacts!'
          }
        ],
        hint: '🔍 Always distinguish artifact from real!'
      },

      {
        id: 'motion-recognition-tips',
        title: 'Motion Artifact Recognition',
        type: 'flashcard',
        animation: 'fade',
        flashcardFront: 'Quick tip: How to spot motion artifacts?',
        flashcardBack: 'Look for NORMAL QRS complexes with chaotic baselines! Real arrhythmias change the QRS, artifacts don\'t. Watch the patient! 👀',
        hint: '👀 Watch the patient during recording!'
      },

      {
        id: 'motion-artifacts-audio',
        title: '🎵 Motion Artifacts Analysis',
        content: 'Listen to detailed explanation of motion artifacts with audio examples and recognition techniques for distinguishing from real arrhythmias.',
        type: 'audio',
        layout: 'centered',
        animation: 'fade',
        audioUrl: '/lessonaudio/artifacts/motion-artifacts-recognition.mp3',
        imageUrl: '/lessonimages/artifact-causes-overview.png',
        imageAlt: 'Motion artifacts audio lesson',
        hint: '🔊 Learn to hear the difference!'
      },

      // ==================== UNIT 1 QUIZ: MOTION ARTIFACTS ====================
      {
        id: 'unit1-motion-quiz',
        title: '🎯 Unit 1 Quiz: Motion Artifacts',
        content: "Test your knowledge of motion artifact recognition!",
        type: 'quiz',
        layout: 'centered',
        animation: 'slide',
        imageUrl: '/lessonimages/artifact-vs-real-rhythm.png',
        imageAlt: 'Motion artifacts quiz',
        hint: '🧠 Test your Unit 1 knowledge!',
        question: "The key feature that distinguishes motion artifacts from real arrhythmias is:",
        options: [
          "Motion artifacts always affect all leads equally",
          "QRS complexes remain normal and regular in motion artifacts",
          "Motion artifacts only occur in young patients",
          "Real arrhythmias never have baseline changes"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! The key distinguishing feature is that motion artifacts preserve normal, regular QRS complexes while only affecting the baseline, whereas real arrhythmias actually change the cardiac rhythm."
      },

      // ===============================================
      // 🎯 UNIT 2: ELECTRICAL INTERFERENCE (8 slides)
      // ===============================================
      {
        id: 'unit2-intro',
        title: '🎯 Unit 2: Electrical Interference',
        content: 'Master electrical interference recognition! Learn to identify power line noise, equipment interference, and electronic device artifacts that contaminate ECG signals.',
        type: 'highlight',
        layout: 'centered',
        animation: 'fade',
        imageUrl: '/lessonimages/artifact-causes-overview.png',
        imageAlt: 'Electrical interference overview for mastery',
        highlights: [
          '⚡ 60Hz power line noise',
          '📱 Electronic device interference',
          '🏥 Medical equipment artifacts',
          '🔌 Grounding problems'
        ],
        hint: '⚡ Electricity is everywhere!'
      },

      {
        id: 'power-line-interference',
        title: '60 Hz Power Line Interference',
        type: 'flashcard',
        icon: '⚡',
        flashcardFront: 'What does 60Hz interference look like?',
        flashcardBack: 'Fine, regular fuzzy oscillations at 60 cycles/second! Creates "hairy" baseline throughout ECG. Check grounding and move electrical devices! ⚡',
        animation: 'fade',
        hint: '⚡ Power line = fuzzy baseline!'
      },

      {
        id: 'electrical-source-identification',
        title: 'Common Electrical Interference Sources',
        type: 'accordion',
        animation: 'fade',
        accordionItems: [
          {
            title: '🏥 Medical Equipment',
            content: 'IV pumps, ventilators, dialysis machines\nElectrocautery during surgery\nMRI scanners nearby\nX-ray equipment activation'
          },
          {
            title: '📱 Personal Electronics',
            content: 'Cell phones and smartphones\nTablets and laptops\nWireless devices\nBluetooth connections'
          },
          {
            title: '🔌 Power Sources',
            content: '60Hz power line noise\nPoor electrical grounding\nFlourescent lighting\nElevator motors and pumps'
          },
          {
            title: '📡 Wireless Interference',
            content: 'WiFi networks and routers\nRadio frequency transmissions\nTelemetry systems\nNurse call systems'
          }
        ],
        hint: '⚡ Many sources of electrical noise!'
      },

      {
        id: 'interference-patterns',
        title: 'Electrical Interference Pattern Types',
        type: 'tabs',
        animation: 'fade',
        tabs: [
          {
            title: '📊 60Hz Noise',
            content: 'Regular oscillations\n\n• Consistent frequency\n• Fine "fuzzy" appearance\n• Throughout entire recording\n• Most common interference'
          },
          {
            title: '📱 Device Spikes',
            content: 'Intermittent artifacts\n\n• Sharp vertical spikes\n• Random timing\n• Phone calls/texts\n• Turn off devices nearby'
          },
          {
            title: '🏥 Equipment Noise',
            content: 'Specific patterns\n\n• Related to equipment cycles\n• Predictable timing\n• May be unavoidable\n• Document source'
          },
          {
            title: '📡 RF Interference',
            content: 'Variable patterns\n\n• Irregular bursts\n• High frequency\n• Radio/wireless sources\n• Change frequencies if possible'
          }
        ],
        hint: '📊 Different sources, different patterns!'
      },

      {
        id: 'grounding-issues',
        title: 'Electrical Grounding Problems',
        type: 'steps',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Identify Poor Grounding',
            description: 'Excessive 60Hz noise, unstable baseline, equipment-related interference'
          },
          {
            number: 2,
            title: 'Check Connections',
            description: 'Verify all electrodes properly attached, cables connected securely'
          },
          {
            number: 3,
            title: 'Ground the Patient',
            description: 'Ensure proper grounding electrode placement and skin contact'
          },
          {
            number: 4,
            title: 'Environmental Assessment',
            description: 'Move away from electrical equipment, check room wiring if persistent'
          }
        ],
        hint: '🔌 Good grounding prevents interference!'
      },

      {
        id: 'troubleshooting-electrical',
        title: 'Electrical Interference Troubleshooting',
        type: 'flashcard',
        animation: 'fade',
        flashcardFront: 'Quick fix for electrical interference?',
        flashcardBack: 'Turn off nearby devices, check grounding, move away from equipment! If 60Hz persists, check building electrical. Simple steps first! 🔧',
        hint: '🔧 Simple steps often solve it!'
      },

      {
        id: 'interference-vs-arrhythmia',
        title: 'Interference vs Real Arrhythmias',
        type: 'accordion',
        animation: 'fade',
        accordionItems: [
          {
            title: '🔍 Recognition Clues',
            content: 'INTERFERENCE: Regular patterns unrelated to heart rate\nARRHYTHMIA: Related to cardiac electrical activity\nINTERFERENCE: Affects baseline, preserves QRS\nARRHYTHMIA: Changes QRS timing and morphology'
          },
          {
            title: '⚡ Technical Tests',
            content: 'Turn off suspected sources\nRepeat ECG in different location\nCheck if pattern changes with equipment\nFilter settings may help identify'
          },
          {
            title: '🏥 Clinical Context',
            content: 'Patient symptoms don\'t match\nVital signs remain stable\nInterference timing correlates with environment\nDisappears with technical changes'
          },
          {
            title: '📋 Documentation',
            content: 'Note suspected interference source\nRecord steps taken to resolve\nRepeat ECG when interference resolved\nEducate staff about prevention'
          }
        ],
        hint: '🔍 Technical patterns vs cardiac patterns!'
      },

      // Add Audio lesson for Unit 2
      {
        id: 'electrical-interference-audio',
        title: '🎵 Electrical Interference Analysis',
        content: 'Listen to comprehensive analysis of electrical interference patterns with troubleshooting techniques and prevention strategies.',
        type: 'audio',
        layout: 'centered',
        animation: 'fade',
        audioUrl: '/lessonaudio/artifacts/electrical-interference-guide.mp3',
        imageUrl: '/lessonimages/artifact-causes-overview.png',
        imageAlt: 'Electrical interference audio lesson',
        hint: '🔊 Master electrical troubleshooting!'
      },

      // ==================== UNIT 2 QUIZ: ELECTRICAL INTERFERENCE ====================
      {
        id: 'unit2-electrical-quiz',
        title: '🎯 Unit 2 Quiz: Electrical Interference',
        content: "Test your knowledge of electrical interference recognition!",
        type: 'quiz',
        layout: 'centered',
        animation: 'slide',
        imageUrl: '/lessonimages/artifact-causes-overview.png',
        imageAlt: 'Electrical interference quiz',
        hint: '🧠 Test your Unit 2 knowledge!',
        question: "The most common cause of fine, regular oscillations throughout an ECG recording is:",
        options: [
          "Patient muscle tremor",
          "60Hz power line interference",
          "Loose electrode connections",
          "Atrial fibrillation"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! 60Hz power line interference creates characteristic fine, regular oscillations at 60 cycles per second throughout the ECG recording, creating a 'fuzzy' baseline appearance."
      },

      // ===============================================
      // 🎯 UNIT 3: TECHNICAL PROBLEMS (7 slides)
      // ===============================================
      {
        id: 'unit3-intro',
        title: '🎯 Unit 3: Technical Problems',
        content: 'Master technical problem identification! Learn to recognize electrode issues, equipment malfunctions, and recording problems that affect ECG quality.',
        type: 'highlight',
        layout: 'centered',
        animation: 'fade',
        imageUrl: '/lessonimages/artifact-causes-overview.png',
        imageAlt: 'Technical problems overview for mastery',
        highlights: [
          '📍 Electrode placement errors',
          '🔧 Equipment malfunctions',
          '📊 Recording calibration issues',
          '⚙️ Lead connection problems'
        ],
        hint: '🔧 Technical quality matters!'
      },

      {
        id: 'electrode-problems',
        title: 'Common Electrode Problems',
        type: 'tabs',
        animation: 'fade',
        tabs: [
          {
            title: '📍 Poor Placement',
            content: 'Incorrect positioning\n\n• Wrong anatomical locations\n• Inconsistent placement\n• Leads too close together\n• Missing standard positions'
          },
          {
            title: '🔌 Connection Issues',
            content: 'Loose or faulty connections\n\n• Intermittent contact\n• Corroded connectors\n• Broken cables\n• Poor skin contact'
          },
          {
            title: '🧴 Skin Preparation',
            content: 'Inadequate prep causes artifacts\n\n• Oily or dirty skin\n• Hair interference\n• No abrasion for contact\n• Poor electrode adhesion'
          },
          {
            title: '⚡ Lead Reversal',
            content: 'Swapped electrode positions\n\n• Right/left arm reversal\n• Limb lead errors\n• Precordial misplacement\n• Creates bizarre patterns'
          }
        ],
        hint: '📍 Good technique prevents problems!'
      },

      {
        id: 'lead-reversal-detection',
        title: 'Lead Reversal Recognition',
        type: 'accordion',
        animation: 'fade',
        accordionItems: [
          {
            title: '🔄 Right-Left Arm Reversal',
            content: 'Most common reversal pattern:\n• Negative P wave in lead I\n• Positive P wave in aVR\n• Overall inverted pattern in lead I\n• Check arm electrode placement'
          },
          {
            title: '⚡ Limb Lead Problems',
            content: 'Various limb reversals create:\n• Unusual axis deviations\n• Inverted P waves where unexpected\n• QRS patterns that don\'t fit anatomy\n• Always verify lead placement'
          },
          {
            title: '💓 Precordial Misplacement',
            content: 'Chest lead errors cause:\n• Poor R wave progression\n• Unexpected Q waves\n• Inconsistent patterns\n• Anatomical impossibilities'
          },
          {
            title: '🎯 Quick Detection Tips',
            content: 'Red flags for lead reversal:\n• Bizarre patterns that don\'t fit\n• Negative P in lead I with normal sinus\n• Impossible anatomical findings\n• When in doubt, recheck placement'
          }
        ],
        hint: '🔄 Bizarre patterns = check leads!'
      },

      {
        id: 'equipment-calibration',
        title: 'Equipment Calibration Issues',
        type: 'steps',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Gain Settings',
            description: 'Standard is 10mm/mV. Wrong gain makes complexes too large or small'
          },
          {
            number: 2,
            title: 'Paper Speed',
            description: 'Standard is 25mm/second. Wrong speed distorts timing measurements'
          },
          {
            number: 3,
            title: 'Filter Settings',
            description: 'Inappropriate filtering can remove important diagnostic information'
          },
          {
            number: 4,
            title: 'Calibration Pulse',
            description: 'Should be 1mV = 10mm. Verify with calibration signal at start'
          }
        ],
        hint: '⚙️ Standard settings prevent errors!'
      },

      {
        id: 'technical-troubleshooting',
        title: 'Technical Problem Troubleshooting',
        type: 'flashcard',
        animation: 'fade',
        flashcardFront: 'ECG looks abnormal - what to check first?',
        flashcardBack: 'TECHNICAL FIRST! 🔧\n\n1. Lead placement correct?\n2. Electrodes attached well?\n3. Calibration settings standard?\n4. Patient positioned properly?\n\nRule out technical before clinical!',
        hint: '🔧 Technical problems mimic pathology!'
      },

      {
        id: 'recording-quality-assessment',
        title: 'Recording Quality Assessment',
        type: 'accordion',
        animation: 'fade',
        accordionItems: [
          {
            title: '📊 Baseline Quality',
            content: 'Stable, flat baseline between complexes\nMinimal wandering or drift\nNo excessive noise or artifacts\nClear, sharp waveform definition'
          },
          {
            title: '⚡ Signal Amplitude',
            content: 'Appropriate QRS height (5-25mm normal)\nP waves visible (usually 1-3mm)\nT waves proportional to QRS\nNo clipping or saturation'
          },
          {
            title: '🔍 Technical Markers',
            content: 'Proper calibration pulse present\nCorrect paper speed markings\nLead labels accurate\nPatient information complete'
          },
          {
            title: '✅ Quality Standards',
            content: 'All leads clearly readable\nMinimal artifact interference\nConsistent electrode contact\nDiagnostic quality achieved'
          }
        ],
        hint: '📊 Quality first, then interpret!'
      },

      {
        id: 'technical-documentation',
        title: '🎵 Technical Problem Documentation',
        content: 'Listen to guidance on properly documenting technical issues and corrective actions taken to improve ECG quality.',
        type: 'audio',
        layout: 'centered',
        animation: 'fade',
        audioUrl: '/lessonaudio/artifacts/technical-documentation.mp3',
        imageUrl: '/lessonimages/artifact-causes-overview.png',
        imageAlt: 'Technical documentation audio lesson',
        hint: '🔊 Document everything properly!'
      },

      // ==================== UNIT 3 QUIZ: TECHNICAL PROBLEMS ====================
      {
        id: 'unit3-technical-quiz',
        title: '🎯 Unit 3 Quiz: Technical Problems',
        content: "Test your knowledge of technical problem recognition!",
        type: 'quiz',
        layout: 'centered',
        animation: 'slide',
        imageUrl: '/lessonimages/artifact-causes-overview.png',
        imageAlt: 'Technical problems quiz',
        hint: '🧠 Test your Unit 3 knowledge!',
        question: "An ECG shows negative P waves in lead I and positive P waves in aVR in a patient with normal sinus rhythm. This most likely indicates:",
        options: [
          "Acute myocardial infarction",
          "Right-left arm electrode reversal",
          "Atrial enlargement",
          "Junctional rhythm"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! This classic pattern indicates right-left arm electrode reversal - a technical error, not cardiac pathology. Always check lead placement when seeing bizarre patterns!"
      },

      // ===============================================
      // 🎯 UNIT 4: BASELINE ISSUES (7 slides)
      // ===============================================
      {
        id: 'unit4-intro',
        title: '🎯 Unit 4: Baseline Issues',
        content: 'Master baseline problem recognition! Learn to identify and correct baseline wandering, drift, and instability that can obscure important cardiac findings.',
        type: 'highlight',
        layout: 'centered',
        animation: 'fade',
        imageUrl: '/lessonimages/artifact-causes-overview.png',
        imageAlt: 'Baseline issues overview for mastery',
        highlights: [
          '📈 Baseline drift and wandering',
          '🌊 Respiratory effects',
          '🔧 Correction techniques',
          '📏 Measurement accuracy'
        ],
        hint: '📈 Stable baseline = accurate reading!'
      },

      {
        id: 'baseline-wandering-types',
        title: 'Types of Baseline Problems',
        type: 'tabs',
        animation: 'fade',
        tabs: [
          {
            title: '🌊 Respiratory Wandering',
            content: 'Breathing-related movement\n\n• Sine wave pattern\n• Follows respiratory cycle\n• Usually slow and regular\n• Most common type'
          },
          {
            title: '📈 Progressive Drift',
            content: 'Gradual baseline shift\n\n• Steady upward or downward\n• Often electrode drying\n• Poor skin contact\n• Temperature changes'
          },
          {
            title: '⚡ Sudden Shifts',
            content: 'Abrupt baseline changes\n\n• Patient movement\n• Electrode displacement\n• Cable problems\n• Position changes'
          },
          {
            title: '🔄 Intermittent Issues',
            content: 'On-and-off problems\n\n• Loose connections\n• Intermittent contact\n• Variable skin contact\n• Cable damage'
          }
        ],
        hint: '🌊 Different causes, different patterns!'
      },

      {
        id: 'respiratory-baseline-effects',
        title: 'Respiratory Baseline Effects',
        type: 'accordion',
        animation: 'fade',
        accordionItems: [
          {
            title: '🫁 Normal Respiratory Variation',
            content: 'Chest movement creates natural baseline shifts\nSlow, regular sine-wave pattern\nFollows breathing rate and depth\nUsually manageable and expected'
          },
          {
            title: '💨 Excessive Breathing Effects',
            content: 'Deep or rapid breathing increases wandering\nAnxiety or pain worsen the effect\nMay obscure important waveforms\nAsk patient to breathe normally'
          },
          {
            title: '🎯 Minimizing Respiratory Effects',
            content: 'Position patient comfortably\nEncourage calm, shallow breathing\nRecord during quiet respiration\nAvoid recording during deep breaths'
          },
          {
            title: '📊 When to Accept vs Correct',
            content: 'Mild wandering is usually acceptable\nSevere wandering needs correction\nRepeat if diagnostic quality compromised\nDocument if unable to eliminate'
          }
        ],
        hint: '🫁 Work with breathing, not against it!'
      },

      {
        id: 'baseline-correction-techniques',
        title: 'Baseline Correction Methods',
        type: 'steps',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Check Electrodes',
            description: 'Ensure all electrodes have good skin contact and proper adhesion'
          },
          {
            number: 2,
            title: 'Improve Skin Prep',
            description: 'Clean skin, light abrasion, remove oils and lotions for better contact'
          },
          {
            number: 3,
            title: 'Stabilize Patient',
            description: 'Comfortable position, support arms, encourage relaxed breathing'
          },
          {
            number: 4,
            title: 'Check Equipment',
            description: 'Verify cable connections, ground lead, equipment calibration'
          }
        ],
        hint: '🔧 Systematic approach to baseline issues!'
      },

      {
        id: 'measurement-accuracy-impact',
        title: 'Impact on ECG Measurements',
        type: 'flashcard',
        animation: 'fade',
        flashcardFront: 'How does baseline wandering affect measurements?',
        flashcardBack: 'Makes everything harder! 📏\n\n• ST segments hard to assess\n• T wave changes obscured\n• Amplitude measurements inaccurate\n• Rhythm analysis complicated\n\nStable baseline = reliable measurements!',
        hint: '📏 Wandering baseline = unreliable data!'
      },

      {
        id: 'baseline-vs-pathology',
        title: 'Baseline Issues vs Real Pathology',
        type: 'accordion',
        animation: 'fade',
        accordionItems: [
          {
            title: '🔍 Distinguishing Features',
            content: 'BASELINE WANDER: Affects all leads similarly\nPATHOLOGY: Specific lead patterns\nWANDER: Smooth, gradual changes\nPATHOLOGY: Sharp, specific changes'
          },
          {
            title: '📊 ST Segment Confusion',
            content: 'Baseline shift can mimic ST elevation\nTrue ST changes have specific patterns\nCheck multiple leads for consistency\nBaseline issues affect entire rhythm strip'
          },
          {
            title: '⚡ Rhythm vs Baseline',
            content: 'Baseline issues don\'t change rhythm\nTrue arrhythmias change cardiac timing\nBaseline problems are respiratory/technical\nArrhythmias are cardiac electrical'
          },
          {
            title: '🎯 Clinical Correlation',
            content: 'Patient symptoms help distinguish\nBaseline issues rarely cause symptoms\nTrue pathology often has clinical signs\nWhen in doubt, repeat with better technique'
          }
        ],
        hint: '🔍 Technical vs cardiac - big difference!'
      },

      {
        id: 'baseline-quality-audio',
        title: '🎵 Baseline Quality Assessment',
        content: 'Listen to expert guidance on assessing baseline quality and determining when recordings are adequate for interpretation.',
        type: 'audio',
        layout: 'centered',
        animation: 'fade',
        imageUrl: '/lessonimages/artifact-causes-overview.png',
        imageAlt: 'Baseline quality audio lesson',
        hint: '🔊 Learn quality standards!'
      },

      // ==================== UNIT 4 QUIZ: BASELINE ISSUES ====================
      {
        id: 'unit4-baseline-quiz',
        title: '🎯 Unit 4 Quiz: Baseline Issues',
        content: "Test your knowledge of baseline problem recognition!",
        type: 'quiz',
        layout: 'centered',
        animation: 'slide',
        imageUrl: '/lessonimages/artifact-causes-overview.png',
        imageAlt: 'Baseline issues quiz',
        hint: '🧠 Test your Unit 4 knowledge!',
        question: "The most common cause of baseline wandering in ECG recordings is:",
        options: [
          "Equipment malfunction",
          "Patient respiratory movement",
          "Electrical interference",
          "Lead placement errors"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Respiratory movement is the most common cause of baseline wandering, creating a characteristic sine-wave pattern that follows the patient's breathing cycle."
      },

      // ===============================================
      // 🎯 UNIT 5: CLINICAL CORRELATION (7 slides)
      // ===============================================
      {
        id: 'unit5-intro',
        title: '🎯 Unit 5: Clinical Correlation',
        content: 'Master clinical correlation skills! Learn to distinguish ECG artifacts from real pathology by correlating monitor findings with patient assessment.',
        type: 'highlight',
        layout: 'centered',
        animation: 'fade',
        imageUrl: '/lessonimages/clinical-applications-overview.png',
        imageAlt: 'Clinical correlation overview for mastery',
        highlights: [
          '👤 Patient assessment first',
          '📊 Monitor vs clinical findings',
          '⚡ Artifact vs real emergency',
          '🎯 Decision-making skills'
        ],
        hint: '👤 Patient first, monitor second!'
      },

      {
        id: 'patient-first-principle',
        title: 'Patient Assessment Priority',
        type: 'flashcard',
        animation: 'fade',
        flashcardFront: 'Monitor shows V-fib, but what should you check FIRST?',
        flashcardBack: 'THE PATIENT! 👤\n\nIf they\'re awake and talking = ARTIFACT!\nReal V-fib = unconscious, no pulse\n\nNEVER treat the monitor, treat the patient!\n\nCheck pulse, consciousness, breathing FIRST!',
        hint: '👤 Conscious patient ≠ real V-fib!'
      },

      {
        id: 'clinical-assessment-steps',
        title: 'Systematic Clinical Assessment',
        type: 'steps',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Check Patient Consciousness',
            description: 'Awake and alert? Can they respond? Conscious patients don\'t have V-fib!'
          },
          {
            number: 2,
            title: 'Assess Vital Signs',
            description: 'Check pulse, blood pressure, respiratory rate, oxygen saturation'
          },
          {
            number: 3,
            title: 'Evaluate Symptoms',
            description: 'Chest pain? Shortness of breath? Do symptoms match the rhythm?'
          },
          {
            number: 4,
            title: 'Physical Examination',
            description: 'Heart sounds, lung sounds, perfusion, overall appearance'
          }
        ],
        hint: '👤 Systematic approach prevents errors!'
      },

      {
        id: 'artifact-vs-emergency-scenarios',
        title: 'Artifact vs Real Emergency Scenarios',
        type: 'tabs',
        animation: 'fade',
        tabs: [
          {
            title: '⚡ False V-fib Alarm',
            content: 'MONITOR: Shows V-fib pattern\nPATIENT: Awake, talking, stable\nCONCLUSION: Technical artifact\nACTION: Check leads, don\'t shock!'
          },
          {
            title: '💓 False Asystole',
            content: 'MONITOR: Flat line\nPATIENT: Awake with pulse\nCONCLUSION: Lead disconnection\nACTION: Check connections'
          },
          {
            title: '🔍 Real Emergency',
            content: 'MONITOR: Dangerous rhythm\nPATIENT: Unconscious, no pulse\nCONCLUSION: True emergency\nACTION: Immediate intervention'
          },
          {
            title: '⚠️ Uncertain Cases',
            content: 'MONITOR: Abnormal\nPATIENT: Symptoms unclear\nCONCLUSION: Needs evaluation\nACTION: Assess thoroughly'
          }
        ],
        hint: '🔍 Clinical picture tells the truth!'
      },

      {
        id: 'symptom-rhythm-correlation',
        title: 'Symptom-Rhythm Correlation',
        type: 'accordion',
        animation: 'fade',
        accordionItems: [
          {
            title: '💓 When Symptoms Match Rhythm',
            content: 'Patient has chest pain + ST elevation = likely real\nFast heart rate + palpitations = probably real\nSlow rhythm + dizziness = likely real\nSymptoms support ECG findings'
          },
          {
            title: '🤔 When Symptoms Don\'t Match',
            content: 'V-fib on monitor + patient talking = artifact\nST elevation + no chest pain = question accuracy\nBradycardia + normal activity = check leads\nMismatch suggests technical problem'
          },
          {
            title: '⚠️ Silent Conditions',
            content: 'Some real conditions are asymptomatic\nElderly may have silent MIs\nDiabetics may have silent ischemia\nDon\'t dismiss based on symptoms alone'
          },
          {
            title: '🎯 Clinical Judgment',
            content: 'Consider patient\'s overall condition\nReview medical history and medications\nAssess risk factors and context\nWhen in doubt, investigate further'
          }
        ],
        hint: '💭 Symptoms + rhythm should make sense!'
      },

      {
        id: 'decision-making-framework',
        title: 'Clinical Decision Framework',
        type: 'flashcard',
        animation: 'fade',
        flashcardFront: 'ECG abnormal - what\'s your decision process?',
        flashcardBack: 'STOP-LOOK-THINK-ACT! 🎯\n\nSTOP: Don\'t panic\nLOOK: Check patient first\nTHINK: Does it make sense?\nACT: Appropriate response\n\nArtifact = technical fix\nReal = medical response',
        hint: '🎯 Systematic thinking prevents errors!'
      },

      {
        id: 'communication-with-team',
        title: 'Team Communication About Findings',
        type: 'accordion',
        animation: 'fade',
        accordionItems: [
          {
            title: '📢 Clear Reporting',
            content: 'State what you see: "Monitor shows V-fib but patient is awake"\nDistinguish technical from clinical\nExplain your assessment rationale\nBe specific about findings vs interpretation'
          },
          {
            title: '🚨 Emergency Communication',
            content: 'For real emergencies: Clear, urgent, specific\nFor artifacts: Calm explanation of technical issue\nPrevent unnecessary code team activation\nEducate team about artifact recognition'
          },
          {
            title: '📋 Documentation',
            content: 'Document clinical assessment\nNote correlation (or lack thereof)\nRecord corrective actions taken\nDescribe patient\'s condition throughout'
          },
          {
            title: '👥 Team Education',
            content: 'Share artifact recognition knowledge\nDiscuss prevention strategies\nDebrief false alarms for learning\nBuild team competency in correlation'
          }
        ],
        hint: '📢 Clear communication saves time and stress!'
      },

      {
        id: 'clinical-correlation-audio',
        title: '🎵 Clinical Correlation Mastery',
        content: 'Listen to expert guidance on correlating ECG findings with patient condition to distinguish artifacts from real pathology.',
        type: 'audio',
        layout: 'centered',
        animation: 'fade',
        imageUrl: '/lessonimages/clinical-applications-overview.png',
        imageAlt: 'Clinical correlation audio lesson',
        hint: '🔊 Master clinical thinking!'
      },

      // ==================== UNIT 5 QUIZ: CLINICAL CORRELATION ====================
      {
        id: 'unit5-clinical-quiz',
        title: '🎯 Unit 5 Quiz: Clinical Correlation',
        content: "Test your knowledge of clinical correlation!",
        type: 'quiz',
        layout: 'centered',
        animation: 'slide',
        imageUrl: '/lessonimages/clinical-applications-overview.png',
        imageAlt: 'Clinical correlation quiz',
        hint: '🧠 Test your Unit 5 knowledge!',
        question: "The monitor shows ventricular fibrillation, but the patient is awake and talking. This indicates:",
        options: [
          "Immediate defibrillation is needed",
          "Artifact requiring technical check",
          "New type of conscious V-fib",
          "Monitor malfunction only"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Patients cannot be conscious and talking during true ventricular fibrillation. This clinical-ECG mismatch indicates artifact requiring technical evaluation, not medical intervention."
      },

      // ===============================================
      // 🎯 UNIT 6: PREVENTION STRATEGIES (7 slides)
      // ===============================================
      {
        id: 'unit6-intro',
        title: '🎯 Unit 6: Prevention Strategies',
        content: 'Master artifact prevention! Learn systematic approaches to minimize artifacts through proper technique, equipment maintenance, and quality assurance protocols.',
        type: 'highlight',
        layout: 'centered',
        animation: 'fade',
        imageUrl: '/lessonimages/artifact-causes-overview.png',
        imageAlt: 'Prevention strategies overview for mastery',
        highlights: [
          '🛡️ Proactive prevention',
          '📏 Proper technique protocols',
          '🔧 Equipment maintenance',
          '✅ Quality assurance'
        ],
        hint: '🛡️ Prevention is the best medicine!'
      },

      {
        id: 'proper-technique-protocols',
        title: 'Proper ECG Technique Protocols',
        type: 'steps',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Skin Preparation',
            description: 'Clean, dry, light abrasion for optimal electrode contact'
          },
          {
            number: 2,
            title: 'Electrode Placement',
            description: 'Anatomically correct positions using standard landmarks'
          },
          {
            number: 3,
            title: 'Cable Management',
            description: 'Secure connections, prevent tension, loop excess cable'
          },
          {
            number: 4,
            title: 'Patient Positioning',
            description: 'Comfortable, stable position with supported arms'
          }
        ],
        hint: '📏 Good technique prevents artifacts!'
      },

      {
        id: 'equipment-maintenance-program',
        title: 'Equipment Maintenance Program',
        type: 'tabs',
        animation: 'fade',
        tabs: [
          {
            title: '⚙️ Regular Calibration',
            content: 'Daily calibration checks\n\n• Verify gain settings\n• Check timing accuracy\n• Test calibration pulse\n• Document results'
          },
          {
            title: '🔍 Cable Inspection',
            content: 'Routine cable assessment\n\n• Check for damage/wear\n• Test electrical continuity\n• Replace as needed\n• Clean connections'
          },
          {
            title: '📍 Electrode Quality',
            content: 'Electrode management\n\n• Check expiration dates\n• Store properly\n• Fresh gel/adhesive\n• Quality control testing'
          },
          {
            title: '🧼 Cleaning Protocols',
            content: 'Equipment hygiene\n\n• Regular cleaning schedule\n• Infection control standards\n• Proper disinfection\n• Equipment rotation'
          }
        ],
        hint: '🔧 Well-maintained equipment works better!'
      },

      {
        id: 'environmental-controls',
        title: 'Environmental Controls',
        type: 'accordion',
        animation: 'fade',
        accordionItems: [
          {
            title: '⚡ Electrical Safety',
            content: 'Proper grounding and shielding\nControl electromagnetic interference\nManage electrical equipment placement\nEnsure proper room wiring'
          },
          {
            title: '📱 Device Management',
            content: 'Control electronic interference\nTurn off unnecessary devices\nManage cell phone usage\nCoordinate equipment operation'
          },
          {
            title: '🌡️ Temperature Control',
            content: 'Prevent patient shivering\nMaintain comfortable room temperature\nUse warming blankets if needed\nControl environmental conditions'
          },
          {
            title: '🔇 Noise Reduction',
            content: 'Minimize patient movement\nReduce environmental distractions\nCreate calm atmosphere\nControl room activity'
          }
        ],
        hint: '🌡️ Control the environment!'
      },

      {
        id: 'quality-assurance-programs',
        title: 'Quality Assurance Programs',
        type: 'flashcard',
        animation: 'fade',
        flashcardFront: 'What makes a good QA program for ECG quality?',
        flashcardBack: 'SYSTEMATIC MONITORING! ✅\n\n• Regular staff training\n• Competency assessments\n• Artifact rate tracking\n• Equipment performance monitoring\n• Continuous improvement\n\nMeasure, monitor, improve!',
        hint: '✅ QA prevents problems!'
      },

      {
        id: 'staff-education-training',
        title: 'Staff Education and Training',
        type: 'accordion',
        animation: 'fade',
        accordionItems: [
          {
            title: '📚 Recognition Training',
            content: 'Teach artifact identification skills\nDevelop pattern recognition\nPractice with examples\nRegular skills assessment'
          },
          {
            title: '🔧 Technique Training',
            content: 'Proper ECG procedures\nEquipment operation\nTroubleshooting skills\nBest practice protocols'
          },
          {
            title: '🧠 Problem-Solving Skills',
            content: 'Systematic troubleshooting approach\nDecision-making frameworks\nClinical correlation skills\nCritical thinking development'
          },
          {
            title: '🆕 Continuous Updates',
            content: 'Stay current with technology\nNew equipment training\nUpdated guidelines\nOngoing competency maintenance'
          }
        ],
        hint: '👨‍🏫 Education prevents errors!'
      },

      {
        id: 'prevention-success-metrics',
        title: 'Prevention Success Metrics',
        type: 'flashcard',
        animation: 'fade',
        flashcardFront: 'How do you measure artifact prevention success?',
        flashcardBack: 'TRACK THE NUMBERS! 📊\n\n• Artifact rate trends\n• Repeat ECG frequency\n• False alarm rates\n• Quality scores\n• Staff competency scores\n\nWhat gets measured gets improved!',
        hint: '📊 Measure to improve!'
      },

      {
        id: 'prevention-mastery-audio',
        title: '🎵 Artifact Prevention Mastery',
        content: 'Congratulations! You\'ve mastered ECG artifact recognition and prevention. Listen to this celebration and guidance for applying your skills clinically.',
        type: 'audio',
        layout: 'centered',
        animation: 'fade',
        imageUrl: '/lessonimages/artifact-causes-overview.png',
        imageAlt: 'Prevention mastery audio lesson',
        hint: '🎉 You\'ve mastered artifact prevention!'
      },

      // ==================== UNIT 6 QUIZ: PREVENTION STRATEGIES ====================
      {
        id: 'unit6-prevention-quiz',
        title: '🎯 Unit 6 Quiz: Prevention Strategies',
        content: "Test your knowledge of prevention strategies!",
        type: 'quiz',
        layout: 'centered',
        animation: 'slide',
        imageUrl: '/lessonimages/artifact-causes-overview.png',
        imageAlt: 'Prevention strategies quiz',
        hint: '🧠 Test your Unit 6 knowledge!',
        question: "The most effective way to prevent ECG artifacts is:",
        options: [
          "Using more expensive equipment",
          "Proper technique and equipment maintenance",
          "Always using maximum gain settings",
          "Avoiding ECGs when possible"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Proper technique, including good skin preparation, correct electrode placement, and regular equipment maintenance, is the most effective way to prevent ECG artifacts."
      }
    ],
    summary: "You learned to identify motion, electrical, and technical artifacts - preventing false alarms and ensuring accurate interpretation!",
    keyPoints: [
      "Motion artifacts: patient movement, loose leads (check patient first)",
      "Electrical interference: 60Hz power, phones, equipment (turn off/ground)", 
      "Technical artifacts: lead reversal, calibration, skin prep (check technique)",
      "Artifacts are inconsistent, real pathology persists",
      "When in doubt: repeat ECG with proper technique"
    ],
    resources: [
      {
        title: "Artifact Recognition Guide",
        url: "/resources/artifact-guide",
        type: "tool",
        description: "Interactive guide for identifying common ECG artifacts"
      }
    ]
  },
  
  tasks: [],
  completed: false,
  attempts: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};

export default optimizedLesson8;
