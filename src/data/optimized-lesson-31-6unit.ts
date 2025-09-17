import { Lesson } from '@/types/learning';

export const optimizedLesson31: Lesson = {
  id: 'lesson-4-3-optimized',
  moduleId: 'module-4',
  title: "Accelerated Junctional Rhythm Mastery",
  description: "Master accelerated junctional rhythms through 6 focused learning units: Enhanced Automaticity, Rate Criteria, ECG Recognition, Comparison Analysis, Clinical Causes, and Management Approaches",
  order: 3,
  estimatedTime: 45,
  content: {
    type: 'mixed',
    introduction: "🎯 Welcome to Accelerated Junctional Rhythm Mastery! Master this enhanced automaticity rhythm through 6 progressive units with slides, audio, interactive content, and quizzes. Build expertise in recognition, differentiation, and clinical management.",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your Accelerated Junctional Learning Journey",
        content: "UNIT 1: Enhanced Automaticity → UNIT 2: Rate Criteria → UNIT 3: ECG Recognition → UNIT 4: Comparison Analysis → UNIT 5: Clinical Causes → UNIT 6: Management Approaches",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // ===============================================
      // 🎯 UNIT 1: ENHANCED AUTOMATICITY (7 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: Enhanced Automaticity',
        content: 'Start your accelerated junctional mastery! Learn how the AV junction can fire faster than its normal escape rate.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson31/unit1/enhanced-automaticity-overview.jpg',
        imageAlt: 'Enhanced automaticity concept overview',
        audio: {
          narrationUrl: 'audio/module4/lesson31/unit1/enhanced-automaticity-overview.mp3',
          autoPlay: false
        },
        hint: '⚡ When the junction speeds up!'
      },
      
      {
        id: 'automaticity-basics',
        title: 'Automaticity Fundamentals',
        content: 'NORMAL JUNCTION: 40-60 bpm escape rate. ENHANCED STATE: Increased firing rate 60-100 bpm. MECHANISM: Faster phase 4 depolarization. THRESHOLD: Reaches threshold sooner.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson31/unit1/automaticity-basics.jpg',
        imageAlt: 'Automaticity fundamentals diagram',hint: '📈 Faster depolarization!'
      },

      {
        id: 'cellular-mechanisms',
        title: 'Cellular Mechanisms',
        content: 'PHASE 4: Steeper slope of spontaneous depolarization. CALCIUM: Enhanced calcium influx. SODIUM: Increased sodium permeability. POTASSIUM: Reduced potassium efflux.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson31/unit1/cellular-mechanisms.jpg',
        imageAlt: 'Cellular action potential mechanisms',hint: '🔬 At the cellular level!'
      },

      {
        id: 'enhanced-triggers',
        title: 'Triggers for Enhancement',
        content: 'MEDICATIONS: Digitalis, catecholamines. ELECTROLYTES: Hypokalemia, hypercalcemia. ISCHEMIA: Increased automaticity. INFLAMMATION: Myocarditis effects.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson31/unit1/enhanced-triggers.jpg',
        imageAlt: 'Triggers for enhanced automaticity',hint: '🎯 What makes it speed up!'
      },

      {
        id: 'suppression-override',
        title: 'Overdrive Suppression Override',
        content: 'NORMAL STATE: Sinus rhythm suppresses junction. ENHANCEMENT: Junction overcomes suppression. COMPETITION: May compete with sinus node. DOMINANCE: Faster pacemaker wins.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson31/unit1/suppression-override.jpg',
        imageAlt: 'Overdrive suppression override concept',hint: '🥊 Junction fights back!'
      },

      {
        id: 'unit1-quiz',
        title: 'Unit 1 Quiz: Enhanced Automaticity',
        content: 'Test your understanding of enhanced automaticity!',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: '/lessonimages/module4/lesson31/unit1/unit1-quiz.jpg',
        imageAlt: 'Enhanced automaticity quiz',
        hint: '🧠 Test your automaticity knowledge!',
        question: "What causes enhanced automaticity in the AV junction?",
        options: [
          "Slower phase 4 depolarization",
          "Faster phase 4 depolarization", 
          "Blocked conduction pathways",
          "Reduced calcium influx"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Enhanced automaticity is caused by faster phase 4 depolarization, allowing the junction to reach threshold more quickly.",
        audio: {
          narrationUrl: 'audio/module4/lesson31/unit1/unit1-quiz.mp3',
          autoPlay: false
        }
      },

      // ===============================================
      // 🎯 UNIT 2: RATE CRITERIA (7 slides)  
      // ===============================================
      {
        id: 'unit2-intro',
        title: '🎯 Unit 2: Rate Criteria',
        content: 'Master rate classification for junctional rhythms! Learn the critical rate ranges that define each rhythm type.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson31/unit2/rate-criteria-overview.jpg',
        imageAlt: 'Rate criteria overview for junctional rhythms',
        audio: {
          narrationUrl: 'audio/module4/lesson31/unit2/rate-criteria-overview.mp3',
          autoPlay: false
        },
        hint: '📊 Rate defines the rhythm!'
      },

      {
        id: 'junctional-classification',
        title: 'Junctional Rhythm Classification',
        content: 'ESCAPE: 40-60 bpm (protective backup). ACCELERATED: 60-100 bpm (enhanced automaticity). TACHYCARDIA: >100 bpm (abnormal acceleration). BRADYCARDIA: <40 bpm (failing junction).',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson31/normal_75bpm.png',
        imageAlt: 'ECG showing accelerated junctional rhythm at 75 bpm',hint: '🎯 Four distinct categories!'
      },

      {
        id: 'accelerated-range',
        title: 'Accelerated Range Focus',
        content: 'LOWER LIMIT: 60 bpm - faster than escape. UPPER LIMIT: 100 bpm - slower than tachycardia. OPTIMAL ZONE: 70-90 bpm usually well-tolerated. MEASUREMENT: Use standard rate calculation methods.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson31/normal_85bpm_2.png',
        imageAlt: 'ECG showing accelerated junctional rhythm in optimal range',hint: '📏 The 60-100 sweet spot!'
      },

      {
        id: 'rate-variability',
        title: 'Rate Variability Factors',
        content: 'AUTONOMIC TONE: Sympathetic increases, parasympathetic decreases. MEDICATIONS: Digitalis, beta-agonists, atropine. METABOLIC: Fever, hyperthyroidism. PATHOLOGIC: Ischemia, inflammation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson31/unit2/rate-variability.jpg',
        imageAlt: 'Factors affecting accelerated junctional rate',hint: '🎛️ Many factors influence rate!'
      },

      {
        id: 'measurement-precision',
        title: 'Measurement Precision',
        content: 'CALIPER METHOD: Most accurate for rate determination. BORDER ZONES: 58-62 bpm and 98-102 bpm require careful measurement. AVERAGING: Measure multiple cycles. CONTEXT: Consider clinical picture.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson31/normal_95bpm.png',
        imageAlt: 'ECG demonstrating precise rate measurement technique',hint: '🎯 Precision matters at borders!'
      },

      {
        id: 'unit2-quiz',
        title: 'Unit 2 Quiz: Rate Criteria',
        content: 'Test your rate classification skills!',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'slide',
        imageUrl: '/lessonimages/module4/lesson31/unit2/unit2-quiz.jpg',
        imageAlt: 'Rate criteria quiz',
        hint: '📊 Classify the rate!',
        question: "A junctional rhythm at 85 bpm should be classified as:",
        options: [
          "Junctional escape rhythm",
          "Accelerated junctional rhythm",
          "Junctional tachycardia",
          "Supraventricular tachycardia"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! A junctional rhythm at 85 bpm falls in the accelerated junctional range (60-100 bpm)."},

      // ===============================================
      // 🎯 UNIT 3: ECG RECOGNITION (7 slides)
      // ===============================================
      {
        id: 'unit3-intro',
        title: '🎯 Unit 3: ECG Recognition',
        content: 'Master ECG recognition of accelerated junctional rhythms! Learn the key visual features and measurement techniques.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson31/unit3/ecg-recognition-overview.jpg',
        imageAlt: 'ECG recognition overview for accelerated junctional',hint: '👁️ Visual recognition mastery!'
      },

      {
        id: 'qrs-morphology',
        title: 'QRS Morphology Features',
        content: 'WIDTH: Narrow (<120ms) - supraventricular origin. SHAPE: Normal morphology unless aberrant. AXIS: Usually normal unless structural disease. CONSISTENCY: Uniform appearance throughout.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson31/normal_80bpm_3.png',
        imageAlt: 'ECG showing narrow QRS complexes in accelerated junctional',hint: '📏 Narrow and consistent!'
      },

      {
        id: 'rhythm-regularity',
        title: 'Rhythm Regularity Assessment',
        content: 'REGULARITY: Perfectly regular R-R intervals. MEASUREMENT: Use calipers for precision. STABILITY: Rate remains constant over time. EXCEPTIONS: May have slight irregularity during competition.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson31/normal_70bpm_2.png',
        imageAlt: 'ECG demonstrating regular rhythm pattern',hint: '📐 Clockwork precision!'
      },

      {
        id: 'p-wave-analysis',
        title: 'P Wave Analysis',
        content: 'HIDDEN: Most common - P waves buried in QRS. RETROGRADE: Inverted P waves after QRS. ANTEGRADE: Short PR interval if before QRS. DISSOCIATED: Independent sinus P waves may be present.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson31/unit3/p-wave-analysis.jpg',
        imageAlt: 'P wave patterns in accelerated junctional rhythm',hint: '🔍 P waves tell the story!'
      },

      {
        id: 'competition-patterns',
        title: 'Competition Pattern Recognition',
        content: 'SINUS COMPETITION: When sinus rate similar to junctional. FUSION BEATS: Combination of sinus and junctional. CAPTURE BEATS: Temporary sinus capture. ISORHYTHMIC AV DISSOCIATION: Rates nearly equal.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson31/unit3/competition-patterns.jpg',
        imageAlt: 'ECG showing competition between sinus and junctional',hint: '🥊 Battle of the pacemakers!'
      },

      {
        id: 'unit3-quiz',
        title: 'Unit 3 Quiz: ECG Recognition',
        content: 'Test your ECG recognition expertise!',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'slide',
        imageUrl: '/lessonimages/module4/lesson31/unit3/unit3-quiz.jpg',
        imageAlt: 'ECG recognition quiz',
        hint: '👁️ What do you recognize?',
        question: "In accelerated junctional rhythm, QRS complexes are typically:",
        options: [
          "Wide due to aberrant conduction",
          "Narrow due to supraventricular origin",
          "Variable width depending on rate",
          "Always showing bundle branch block"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! QRS complexes are narrow because accelerated junctional rhythm originates from the supraventricular AV junction."},

      // ===============================================
      // 🎯 UNIT 4: COMPARISON ANALYSIS (7 slides)
      // ===============================================
      {
        id: 'unit4-intro',
        title: '🎯 Unit 4: Comparison Analysis',
        content: 'Master comparison analysis of junctional rhythms! Learn to differentiate accelerated junctional from other similar rhythms.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson31/unit4/comparison-overview.jpg',
        imageAlt: 'Comparison analysis overview',hint: '🔍 Spot the differences!'
      },

      {
        id: 'vs-escape-rhythm',
        title: 'vs Junctional Escape Rhythm',
        content: 'RATE: Accelerated 60-100 vs Escape 40-60 bpm. QRS: Same narrow morphology. P WAVES: Same patterns (hidden/inverted). MECHANISM: Enhanced vs normal automaticity.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson31/unit4/vs-escape-rhythm.jpg',
        imageAlt: 'Comparison between accelerated and escape junctional',hint: '📊 Rate is the key difference!'
      },

      {
        id: 'vs-sinus-bradycardia',
        title: 'vs Sinus Bradycardia',
        content: 'P WAVES: Present in sinus vs hidden/inverted in junctional. RATE: Both can be 60-100 bpm. PR INTERVAL: Normal in sinus vs short/absent in junctional. RESPONSE: Sinus responds to atropine.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson31/normal_100bpm.png',
        imageAlt: 'ECG comparison showing P wave differences',hint: '👀 Look for P waves!'
      },

      {
        id: 'vs-junctional-tachycardia',
        title: 'vs Junctional Tachycardia',
        content: 'RATE: Accelerated 60-100 vs Tachycardia >100 bpm. SYMPTOMS: Tachycardia more symptomatic. TOLERANCE: Accelerated usually well-tolerated. URGENCY: Tachycardia needs urgent evaluation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson31/unit4/vs-junctional-tachycardia.jpg',
        imageAlt: 'Rate comparison between accelerated and tachycardia',hint: '⚡ Speed matters clinically!'
      },

      {
        id: 'vs-atrial-flutter',
        title: 'vs Atrial Flutter with Block',
        content: 'FLUTTER WAVES: Sawtooth pattern in atrial flutter. REGULARITY: Both can be regular. RATE: Similar rates possible. RESPONSE: Flutter responds to vagal maneuvers.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson31/unit4/vs-atrial-flutter.jpg',
        imageAlt: 'Comparison with atrial flutter patterns',hint: '🌊 Look for flutter waves!'
      },

      {
        id: 'unit4-quiz',
        title: 'Unit 4 Quiz: Comparison Analysis',
        content: 'Test your differential diagnosis skills!',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'slide',
        imageUrl: '/lessonimages/module4/lesson31/unit4/unit4-quiz.jpg',
        imageAlt: 'Comparison analysis quiz',
        hint: '🔍 What\'s the difference?',
        question: "The main difference between accelerated junctional rhythm and junctional escape rhythm is:",
        options: [
          "QRS width and morphology",
          "P wave presence and morphology",
          "Heart rate (60-100 vs 40-60 bpm)",
          "Rhythm regularity pattern"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! The main difference is the heart rate: accelerated junctional is 60-100 bpm while junctional escape is 40-60 bpm."},

      // ===============================================
      // 🎯 UNIT 5: CLINICAL CAUSES (7 slides)
      // ===============================================
      {
        id: 'unit5-intro',
        title: '🎯 Unit 5: Clinical Causes',
        content: 'Master the clinical causes of accelerated junctional rhythms! Learn the common triggers and underlying pathophysiology.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson31/unit5/clinical-causes-overview.jpg',
        imageAlt: 'Clinical causes overview',hint: '🔍 Find the root cause!'
      },

      {
        id: 'digitalis-toxicity',
        title: 'Digitalis Toxicity',
        content: 'CLASSIC CAUSE: Most common reversible cause. MECHANISM: Enhanced automaticity, delayed afterdepolarizations. SIGNS: AV block + accelerated junctional. MANAGEMENT: Stop digitalis, consider Fab fragments.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson31/unit5/digitalis-toxicity.jpg',
        imageAlt: 'Digitalis toxicity effects on cardiac conduction',hint: '💊 Classic cardiology case!'
      },

      {
        id: 'ischemic-causes',
        title: 'Ischemic Causes',
        content: 'INFERIOR MI: RCA supplies AV node. REPERFUSION: Ischemia-reperfusion injury. INFLAMMATION: Pericarditis, myocarditis. MECHANISM: Altered cell membrane properties.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson31/unit5/ischemic-causes.jpg',
        imageAlt: 'Ischemic causes of enhanced automaticity',hint: '💔 When blood flow matters!'
      },

      {
        id: 'electrolyte-imbalances',
        title: 'Electrolyte Imbalances',
        content: 'HYPOKALEMIA: Enhances automaticity. HYPERCALCEMIA: Affects membrane stability. HYPOMAGNESEMIA: Often concurrent with hypokalemia. MONITORING: Regular electrolyte checks essential.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson31/unit5/electrolyte-imbalances.jpg',
        imageAlt: 'Electrolyte effects on cardiac automaticity',hint: '⚖️ Balance is everything!'
      },

      {
        id: 'other-causes',
        title: 'Other Clinical Causes',
        content: 'SYMPATHOMIMETICS: Catecholamines, cocaine. HYPERTHYROIDISM: Increased metabolic rate. FEVER: Enhanced automaticity. CARDIAC SURGERY: Post-operative changes.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson31/unit5/other-causes.jpg',
        imageAlt: 'Other causes of accelerated junctional rhythm',hint: '🎭 Many actors in this drama!'
      },

      {
        id: 'unit5-quiz',
        title: 'Unit 5 Quiz: Clinical Causes',
        content: 'Test your clinical knowledge!',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'slide',
        imageUrl: '/lessonimages/module4/lesson31/unit5/unit5-quiz.jpg',
        imageAlt: 'Clinical causes quiz',
        hint: '🏥 What caused this rhythm?',
        question: "Which is the most classic cause of accelerated junctional rhythm?",
        options: [
          "Myocardial infarction",
          "Digitalis toxicity",
          "Hyperkalemia",
          "Pulmonary embolism"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Digitalis toxicity is the most classic and well-known cause of accelerated junctional rhythm due to enhanced automaticity."},

      // ===============================================
      // 🎯 UNIT 6: MANAGEMENT APPROACHES (7 slides)
      // ===============================================
      {
        id: 'unit6-intro',
        title: '🎯 Unit 6: Management Approaches',
        content: 'Master management strategies for accelerated junctional rhythms! Learn assessment, treatment, and monitoring approaches.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson31/unit6/management-overview.jpg',
        imageAlt: 'Management approaches overview',hint: '⚕️ Treatment strategies!'
      },

      {
        id: 'initial-assessment',
        title: 'Initial Assessment Protocol',
        content: 'HEMODYNAMICS: Blood pressure, perfusion status. SYMPTOMS: Palpitations, dizziness, chest pain. MEDICATIONS: Review current drugs. ELECTROLYTES: Check K+, Mg2+, Ca2+.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson31/unit6/initial-assessment.jpg',
        imageAlt: 'Initial assessment protocol flowchart',hint: '🔍 Systematic evaluation first!'
      },

      {
        id: 'cause-specific-treatment',
        title: 'Cause-Specific Treatment',
        content: 'DIGITALIS TOXICITY: Stop digitalis, consider Fab fragments. ELECTROLYTES: Correct imbalances gradually. ISCHEMIA: Treat underlying coronary disease. HYPERTHYROIDISM: Antithyroid therapy.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson31/unit6/cause-specific-treatment.jpg',
        imageAlt: 'Cause-specific treatment algorithms',hint: '🎯 Target the root cause!'
      },

      {
        id: 'symptomatic-management',
        title: 'Symptomatic Management',
        content: 'ASYMPTOMATIC: Monitor closely, no specific treatment. SYMPTOMATIC: Treat underlying cause. HEMODYNAMIC COMPROMISE: Rarely occurs. RATE CONTROL: Usually not needed in this range.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson31/unit6/symptomatic-management.jpg',
        imageAlt: 'Symptomatic management strategies',hint: '😌 Usually well-tolerated!'
      },

      {
        id: 'monitoring-followup',
        title: 'Monitoring and Follow-up',
        content: 'TELEMETRY: Continuous monitoring initially. SERIAL ECGs: Track rhythm changes. ELECTROLYTES: Regular monitoring. MEDICATION LEVELS: Digitalis levels if relevant.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson31/unit6/monitoring-followup.jpg',
        imageAlt: 'Monitoring and follow-up protocols',hint: '📊 Keep watching!'
      },

      {
        id: 'unit6-quiz',
        title: 'Unit 6 Quiz: Management',
        content: 'Test your management skills!',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: '/lessonimages/module4/lesson31/unit6/unit6-quiz.jpg',
        imageAlt: 'Management approaches quiz',
        hint: '⚕️ What\'s the best approach?',
        question: "An asymptomatic patient with accelerated junctional rhythm at 75 bpm should be:",
        options: [
          "Given immediate antiarrhythmic drugs",
          "Monitored while investigating underlying causes",
          "Scheduled for emergency pacing",
          "Started on beta-blockers immediately"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Asymptomatic accelerated junctional rhythm should be monitored while investigating and treating underlying causes."}
    ],
    summary: "🎉 Congratulations! You've mastered comprehensive accelerated junctional rhythm through 6 specialized units. You understand enhanced automaticity mechanisms, can classify rates accurately, recognize ECG patterns expertly, differentiate from similar rhythms, identify clinical causes, and implement appropriate management strategies. You're now an accelerated junctional expert!",
    keyPoints: [
      "Accelerated junctional rhythm: 60-100 bpm with enhanced automaticity",
      "Rate is the primary distinguishing feature from other junctional rhythms",
      "Digitalis toxicity is the classic reversible cause",
      "ECG shows narrow QRS complexes with hidden or inverted P waves",
      "Usually well-tolerated hemodynamically at this rate range",
      "Management focuses on identifying and treating underlying causes"
    ],
    resources: [
      {
        title: "Advanced Junctional Rhythm Analysis",
        url: "https://youtube.com/watch?v=accelerated_junctional_mastery",
        type: "video"
      },
      {
        title: "Digitalis Toxicity Recognition",
        url: "https://cardiology.org/digitalis-toxicity-guide",
        type: "article"
      }
    ]
  },
  tasks: [],

  // ============= LESSON COMPLETION METADATA =============
  completed: false,
  score: 0,
  attempts: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
