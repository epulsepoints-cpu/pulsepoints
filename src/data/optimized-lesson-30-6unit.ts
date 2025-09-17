import { Lesson } from '../types/learning';

export const optimizedLesson30: Lesson = {
  id: 'lesson-4-2-optimized',
  moduleId: 'module-4',
  title: "Junctional Escape Rhythm Mastery",
  description: "Master junctional escape rhythms through 6 focused learning units: Escape Mechanism, ECG Recognition, Rate Analysis, P Wave Patterns, Clinical Significance, and Management Strategies",
  order: 2,
  estimatedTime: 45,
  content: {
    type: 'mixed',
    introduction: "🎯 Welcome to Junctional Escape Rhythm Mastery! Master this protective cardiac mechanism through 6 progressive units with slides, audio, interactive content, and quizzes. Build expertise in recognition, analysis, and clinical management.",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your Junctional Escape Learning Journey",
        content: "UNIT 1: Escape Mechanism → UNIT 2: ECG Recognition → UNIT 3: Rate Analysis → UNIT 4: P Wave Patterns → UNIT 5: Clinical Significance → UNIT 6: Management Strategies",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // ===============================================
      // 🎯 UNIT 1: ESCAPE MECHANISM (7 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: Escape Mechanism',
        content: 'Start your junctional escape mastery! Learn how the AV junction protects the heart when higher pacemakers fail.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson30/rate-analysis-overview.jpg',
        imageAlt: 'Junctional escape mechanism overview',
        audio: {
          narrationUrl: 'audio/module4/lesson30/unit1/escape-mechanism-overview.mp3',
          autoPlay: false
        },
        hint: '🛡️ The heart\'s protective backup system!'
      },
      
      {
        id: 'pacemaker-hierarchy',
        title: 'Cardiac Pacemaker Hierarchy',
        content: 'NORMAL HIERARCHY: SA node (60-100 bpm) → AV junction (40-60 bpm) → Ventricles (20-40 bpm). ESCAPE RULE: When higher pacemaker fails, lower pacemaker takes over automatically.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson30/bradycardia_45bpm.png',
        imageAlt: 'ECG showing slow rhythm suggesting escape mechanism',hint: '📊 Built-in backup system!'
      },

      {
        id: 'escape-trigger',
        title: 'What Triggers Junctional Escape?',
        content: 'TRIGGERS: Sinus node dysfunction, Sinus arrest/pause, Complete AV block, Severe sinus bradycardia. PROTECTION: Prevents asystole, Maintains cardiac output, Life-saving mechanism.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson30/bradycardia_40bpm.png',
        imageAlt: 'ECG showing bradycardia that could trigger escape rhythm',hint: '🚨 When the primary system fails!'
      },

      {
        id: 'junction-anatomy',
        title: 'AV Junction Anatomy',
        content: 'LOCATION: Area around AV node and bundle of His. CELLS: Automatic pacemaker cells with inherent rate 40-60 bpm. CONDUCTION: Can conduct both antegrade and retrograde.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson30/abnormal-p-waves.png',
        imageAlt: 'Anatomical diagram of AV junction location and structure',hint: '🫀 The backup headquarters!'
      },

      {
        id: 'automaticity-concept',
        title: 'Automaticity and Escape',
        content: 'AUTOMATICITY: Ability to spontaneously generate impulses. SUPPRESSION: Normally suppressed by faster sinus rhythm. EMERGENCE: Emerges when sinus rate falls below junction rate.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson30/antiarrhythmic-drugs.jpg',
        imageAlt: 'Diagram showing automaticity and overdrive suppression',hint: '⚡ Hidden power waiting to activate!'
      },

      {
        id: 'unit1-quiz',
        title: 'Unit 1 Quiz: Escape Mechanism',
        content: 'Test your understanding of junctional escape mechanisms!',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: '/lessonimages/module4/lesson30/unit1-quiz.jpg',
        imageAlt: 'Escape mechanism quiz',
        hint: '🧠 Test your escape knowledge!',
        question: "What is the primary protective function of junctional escape rhythm?",
        options: [
          "Increase heart rate during exercise",
          "Prevent asystole when higher pacemakers fail", 
          "Improve cardiac contractility",
          "Reduce oxygen consumption"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Junctional escape rhythm prevents asystole by providing a backup pacemaker when the sinus node fails or is blocked.",
        audio: {
          narrationUrl: 'audio/module4/lesson30/unit1/unit1-quiz.mp3',
          autoPlay: false
        }
      },

      // ===============================================
      // 🎯 UNIT 2: ECG RECOGNITION (7 slides)  
      // ===============================================
      {
        id: 'unit2-intro',
        title: '🎯 Unit 2: ECG Recognition',
        content: 'Master ECG recognition of junctional escape rhythms! Learn the key features that distinguish this protective rhythm.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson30/rate-analysis-overview.jpg',
        imageAlt: 'ECG recognition overview for junctional escape',
        audio: {
          narrationUrl: 'audio/module4/lesson30/unit2/ecg-recognition-overview.mp3',
          autoPlay: false
        },
        hint: '👁️ Learn to spot the escape!'
      },

      {
        id: 'qrs-characteristics',
        title: 'QRS Complex Characteristics',
        content: 'WIDTH: Narrow (<120ms) - supraventricular origin. MORPHOLOGY: Normal shape unless aberrant conduction. REGULARITY: Perfectly regular R-R intervals. RATE: 40-60 bpm consistently.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson30/bradycardia_50bpm.png',
        imageAlt: 'ECG showing narrow QRS complexes in escape rhythm',hint: '📏 Narrow and regular!'
      },

      {
        id: 'rhythm-regularity',
        title: 'Rhythm Regularity Assessment',
        content: 'MEASUREMENT: Use calipers or count method. CONSISTENCY: R-R intervals should be identical. RATE CALCULATION: 300/large boxes or 1500/small boxes. STABILITY: Rate remains constant.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson30/bradycardia_48bpm_3.png',
        imageAlt: 'ECG demonstrating regular rhythm measurement',hint: '📐 Perfectly predictable timing!'
      },

      {
        id: 'rate-range',
        title: 'Rate Range Recognition',
        content: 'JUNCTIONAL ESCAPE: 40-60 bpm. SLOWER THAN: Accelerated junctional (60-100 bpm). FASTER THAN: Ventricular escape (20-40 bpm). CLINICAL IMPACT: May cause symptoms below 50 bpm.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson30/bradycardia_52bpm_4.png',
        imageAlt: 'ECG showing typical junctional escape rate',hint: '🎯 The 40-60 zone!'
      },

      {
        id: 'differential-features',
        title: 'Differential ECG Features',
        content: 'vs SINUS BRADYCARDIA: P waves present in sinus. vs VENTRICULAR ESCAPE: Wide QRS in ventricular. vs ACCELERATED JUNCTIONAL: Rate >60 bpm in accelerated.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson30/abnormal-p-waves.png',
        imageAlt: 'Comparison of different escape rhythms',hint: '🔍 Spot the differences!'
      },

      {
        id: 'unit2-quiz',
        title: 'Unit 2 Quiz: ECG Recognition',
        content: 'Test your ECG recognition skills!',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'slide',
        imageUrl: '/lessonimages/module4/lesson30/unit2-quiz.jpg',
        imageAlt: 'ECG recognition quiz',
        hint: '👁️ What do you see?',
        question: "What is the typical QRS width in junctional escape rhythm?",
        options: [
          "Wide (>120ms) because it's ventricular",
          "Narrow (<120ms) because it's supraventricular",
          "Variable depending on the rate",
          "Always exactly 120ms"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Junctional escape rhythm has narrow QRS complexes (<120ms) because the impulse originates from the supraventricular AV junction."},

      // ===============================================
      // 🎯 UNIT 3: RATE ANALYSIS (7 slides)
      // ===============================================
      {
        id: 'unit3-intro',
        title: '🎯 Unit 3: Rate Analysis',
        content: 'Master rate analysis in junctional escape! Learn precise measurement techniques and clinical significance of rate variations.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson30/rate-analysis-overview.jpg',
        imageAlt: 'Rate analysis overview for junctional escape',hint: '📊 Precision in measurement!'
      },

      {
        id: 'measurement-techniques',
        title: 'Rate Measurement Techniques',
        content: 'CALIPER METHOD: Measure R-R interval precisely. 300 RULE: 300 ÷ large boxes between R waves. 1500 RULE: 1500 ÷ small boxes for accuracy. 6-SECOND METHOD: Count beats × 10.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson30/bradycardia_55bpm.png',
        imageAlt: 'ECG with rate measurement demonstration',hint: '🧮 Multiple methods, same answer!'
      },

      {
        id: 'inherent-rate',
        title: 'Junctional Inherent Rate',
        content: 'NATURAL RATE: 40-60 bpm intrinsic automaticity. OPTIMAL RANGE: 50-60 bpm usually well-tolerated. CONCERNING RANGE: <45 bpm may cause symptoms. MECHANISM: Cell membrane instability.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson30/bradycardia_42bpm_2.png',
        imageAlt: 'ECG showing slower junctional escape rate',hint: '💗 The junction\'s natural tempo!'
      },

      {
        id: 'rate-variability',
        title: 'Rate Variability Factors',
        content: 'AUTONOMIC TONE: Vagal stimulation slows rate. MEDICATIONS: Beta-blockers, calcium channel blockers. ISCHEMIA: Can affect automaticity. AGE: Older patients may have slower rates.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson30/rate-variability.jpg',
        imageAlt: 'Factors affecting junctional escape rate',hint: '🎛️ Many factors influence rate!'
      },

      {
        id: 'hemodynamic-correlation',
        title: 'Rate and Hemodynamic Correlation',
        content: 'RATE >50 BPM: Usually hemodynamically stable. RATE 40-50 BPM: May cause fatigue, dizziness. RATE <40 BPM: Often symptomatic, needs evaluation. SYMPTOMS: Syncope, presyncope, fatigue.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson30/bradycardia_35bpm.png',
        imageAlt: 'ECG showing very slow escape rhythm',hint: '⚖️ Rate affects patient comfort!'
      },

      {
        id: 'unit3-quiz',
        title: 'Unit 3 Quiz: Rate Analysis',
        content: 'Test your rate analysis expertise!',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'slide',
        imageUrl: '/lessonimages/module4/lesson30/unit3-quiz.jpg',
        imageAlt: 'Rate analysis quiz',
        hint: '📏 Measure precisely!',
        question: "A junctional escape rhythm at 35 bpm is most likely to cause:",
        options: [
          "No symptoms - this is normal",
          "Symptoms due to inadequate cardiac output",
          "Increased exercise tolerance",
          "Improved cardiac function"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! A rate of 35 bpm is below the typical junctional range and likely to cause symptoms due to inadequate cardiac output."},

      // ===============================================
      // 🎯 UNIT 4: P WAVE PATTERNS (7 slides)
      // ===============================================
      {
        id: 'unit4-intro',
        title: '🎯 Unit 4: P Wave Patterns',
        content: 'Master P wave analysis in junctional escape! Learn to identify the various P wave patterns and their clinical significance.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson30/abnormal-p-waves.png',
        imageAlt: 'P wave patterns overview',hint: '👀 P waves tell the story!'
      },

      {
        id: 'absent-p-waves',
        title: 'Absent P Waves Pattern',
        content: 'HIDDEN P WAVES: Simultaneous atrial and ventricular depolarization. MECHANISM: P wave buried within QRS complex. APPEARANCE: No visible P waves on ECG. FREQUENCY: Most common pattern.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson30/abnormal-p-waves.png',
        imageAlt: 'ECG showing absent P waves in junctional escape',hint: '🫥 Hidden but not gone!'
      },

      {
        id: 'inverted-p-waves',
        title: 'Inverted P Waves Pattern',
        content: 'RETROGRADE CONDUCTION: Atria depolarized from AV junction. MORPHOLOGY: Inverted in leads II, III, aVF. TIMING: P wave follows QRS complex. SIGNIFICANCE: Confirms junctional origin.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson30/abnormal-p-waves.png',
        imageAlt: 'ECG showing inverted P waves after QRS',hint: '🔄 Backwards atrial activation!'
      },

      {
        id: 'preceding-p-waves',
        title: 'Preceding P Waves Pattern',
        content: 'SHORT PR INTERVAL: <120ms due to junctional origin. MORPHOLOGY: May be slightly inverted. CONDUCTION: Antegrade to atria, then ventricles. RARITY: Less common pattern.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson30/unit4/preceding-p-waves.jpg',
        imageAlt: 'ECG showing P waves before QRS with short PR',hint: '⚡ Fast track to the atria!'
      },

      {
        id: 'av-dissociation',
        title: 'AV Dissociation Considerations',
        content: 'DEFINITION: Atria and ventricles beat independently. JUNCTIONAL ESCAPE: Usually no AV dissociation. EXCEPTION: If sinus continues at slower rate. IDENTIFICATION: Look for independent P waves.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson30/unit4/av-dissociation.jpg',
        imageAlt: 'ECG showing AV dissociation concepts',hint: '🚂 Sometimes trains run separately!'
      },

      {
        id: 'unit4-quiz',
        title: 'Unit 4 Quiz: P Wave Patterns',
        content: 'Test your P wave pattern recognition!',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'slide',
        imageUrl: '/lessonimages/module4/lesson30/unit4-quiz.jpg',
        imageAlt: 'P wave patterns quiz',
        hint: '🔍 Where are the P waves?',
        question: "In junctional escape rhythm, P waves are most commonly:",
        options: [
          "Present before each QRS with normal PR interval",
          "Hidden within the QRS complex",
          "Inverted after each QRS complex",
          "Completely absent from the cardiac cycle"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! In junctional escape rhythm, P waves are most commonly hidden within the QRS complex due to simultaneous atrial and ventricular depolarization."},

      // ===============================================
      // 🎯 UNIT 5: CLINICAL SIGNIFICANCE (7 slides)
      // ===============================================
      {
        id: 'unit5-intro',
        title: '🎯 Unit 5: Clinical Significance',
        content: 'Master the clinical significance of junctional escape rhythms! Learn when they\'re protective and when they require intervention.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson30/unit5/clinical-significance-overview.jpg',
        imageAlt: 'Clinical significance overview',hint: '🏥 When escape becomes important!'
      },

      {
        id: 'protective-mechanism',
        title: 'Protective Mechanism Function',
        content: 'LIFE-SAVING: Prevents asystole when sinus fails. CARDIAC OUTPUT: Maintains adequate circulation. TEMPORARY: Often resolves when underlying cause treated. ADAPTATION: Body\'s natural backup system.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson30/unit5/protective-mechanism.jpg',
        imageAlt: 'Diagram showing protective function of escape rhythm',hint: '🛡️ Nature\'s safety net!'
      },

      {
        id: 'underlying-causes',
        title: 'Common Underlying Causes',
        content: 'SINUS NODE: Sick sinus syndrome, ischemia. MEDICATIONS: Beta-blockers, calcium channel blockers. ELECTROLYTES: Hyperkalemia, hyponatremia. ISCHEMIA: Inferior MI affecting SA node.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson30/unit5/underlying-causes.jpg',
        imageAlt: 'Common causes of junctional escape rhythm',hint: '🔍 Find the root cause!'
      },

      {
        id: 'symptomatic-presentation',
        title: 'Symptomatic Presentation',
        content: 'ASYMPTOMATIC: Many patients, especially at rest. SYMPTOMATIC: Fatigue, dizziness, syncope. EXERTIONAL: Symptoms worsen with activity. RATE-DEPENDENT: Slower rates more symptomatic.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson30/unit5/symptomatic-presentation.jpg',
        imageAlt: 'Patient symptoms in junctional escape rhythm',hint: '😴 How patients feel matters!'
      },

      {
        id: 'prognosis-outcomes',
        title: 'Prognosis and Outcomes',
        content: 'TRANSIENT: Often resolves with treatment of cause. CHRONIC: May require permanent pacing. SURVIVAL: Generally good if underlying cause treatable. MONITORING: Regular follow-up needed.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson30/unit5/prognosis-outcomes.jpg',
        imageAlt: 'Prognosis and outcomes flowchart',hint: '📈 Generally favorable outlook!'
      },

      {
        id: 'unit5-quiz',
        title: 'Unit 5 Quiz: Clinical Significance',
        content: 'Test your clinical understanding!',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'slide',
        imageUrl: '/lessonimages/module4/lesson30/unit5-quiz.jpg',
        imageAlt: 'Clinical significance quiz',
        hint: '🏥 Clinical thinking time!',
        question: "A junctional escape rhythm in a patient with complete heart block should be considered:",
        options: [
          "Abnormal and requiring immediate suppression",
          "A protective mechanism preventing asystole",
          "A sign of recovering sinus function",
          "An indication for immediate cardioversion"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! In complete heart block, junctional escape rhythm is a life-saving protective mechanism that prevents asystole while maintaining cardiac output."},

      // ===============================================
      // 🎯 UNIT 6: MANAGEMENT STRATEGIES (7 slides)
      // ===============================================
      {
        id: 'unit6-intro',
        title: '🎯 Unit 6: Management Strategies',
        content: 'Master management strategies for junctional escape rhythms! Learn when to intervene and when to monitor.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson30/management-overview.jpg',
        imageAlt: 'Management strategies overview',hint: '⚕️ When and how to treat!'
      },

      {
        id: 'assessment-approach',
        title: 'Initial Assessment Approach',
        content: 'HEMODYNAMICS: Check blood pressure, perfusion. SYMPTOMS: Assess for dizziness, syncope, fatigue. RATE: Measure precise heart rate. UNDERLYING CAUSE: Investigate precipitants.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson30/unit6/assessment-approach.jpg',
        imageAlt: 'Clinical assessment flowchart',hint: '🔍 Assess before you act!'
      },

      {
        id: 'conservative-management',
        title: 'Conservative Management',
        content: 'ASYMPTOMATIC: Monitor closely, no immediate intervention. TREAT CAUSE: Address underlying conditions. MEDICATION REVIEW: Adjust bradycardic drugs. FOLLOW-UP: Regular monitoring.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson30/unit6/conservative-management.jpg',
        imageAlt: 'Conservative management strategies',hint: '⏳ Sometimes watching is best!'
      },

      {
        id: 'pharmacological-intervention',
        title: 'Pharmacological Interventions',
        content: 'ATROPINE: May increase rate temporarily. ISOPROTERENOL: Beta-agonist for acute management. THEOPHYLLINE: Sometimes used chronically. LIMITATIONS: Often ineffective long-term.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson30/unit6/pharmacological-intervention.jpg',
        imageAlt: 'Pharmacological treatment options',hint: '💊 Medications have limits!'
      },

      {
        id: 'pacing-indications',
        title: 'Pacing Indications',
        content: 'SYMPTOMATIC: Persistent symptoms despite treatment. HEMODYNAMIC: Compromise affecting organ function. RATE: Consistently <40 bpm. PROGRESSION: Worsening conduction disease.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson30/unit6/pacing-indications.jpg',
        imageAlt: 'Pacemaker indication criteria',hint: '⚡ When electricity is the answer!'
      },

      {
        id: 'unit6-quiz',
        title: 'Unit 6 Quiz: Management',
        content: 'Test your management decision-making!',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: '/lessonimages/module4/lesson30/unit6-quiz.jpg',
        imageAlt: 'Management strategies quiz',
        hint: '⚕️ What\'s the best approach?',
        question: "An asymptomatic patient with junctional escape rhythm at 55 bpm should be managed with:",
        options: [
          "Immediate pacemaker implantation",
          "High-dose atropine therapy",
          "Observation and monitoring",
          "Emergency cardioversion"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! An asymptomatic patient with junctional escape at 55 bpm should be monitored closely while investigating and treating any underlying causes."}
    ],
    summary: "🎉 Congratulations! You've mastered comprehensive junctional escape rhythm through 6 specialized units. You understand the protective escape mechanism, can expertly recognize ECG patterns, accurately analyze rates, interpret P wave variations, understand clinical significance, and implement appropriate management strategies. You're now a junctional escape expert!",
    keyPoints: [
      "Junctional escape is a protective mechanism preventing asystole when higher pacemakers fail",
      "Typical rate is 40-60 bpm with narrow QRS complexes and regular rhythm",
      "P waves are commonly hidden within QRS complex due to simultaneous depolarization",
      "Rate <45 bpm often causes symptoms requiring evaluation and possible intervention",
      "Conservative management is appropriate for asymptomatic patients with adequate rates",
      "Permanent pacing indicated for symptomatic bradycardia unresponsive to medical therapy"
    ],
    resources: [
      {
        title: "Advanced Junctional Rhythm Recognition",
        url: "https://youtube.com/watch?v=junctional_escape_mastery",
        type: "video"
      },
      {
        title: "Pacemaker Indications in Bradycardia",
        url: "https://cardiology.org/bradycardia-pacing-guidelines",
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
