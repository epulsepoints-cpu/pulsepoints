import { Lesson } from '@/types/learning';

export const optimizedLesson19: Lesson = {
  id: 'lesson-2-9-optimized',
  moduleId: 'module-2',
  title: "Complete Premature Atrial Contractions Mastery",
  description: "Master premature atrial contractions through 6 focused learning units: Foundation, Mechanisms, Recognition, Patterns, Clinical Assessment, and Management - each with detailed P wave analysis and comprehensive clinical correlation",
  order: 9,
  estimatedTime: 30,
  content: {
    type: 'mixed',
    introduction: "⚡ Welcome to Premature Atrial Contractions Mastery! Learn these common early beats through 6 progressive units with detailed ECG analysis, pattern recognition, and clinical significance assessment. Master the difference between benign and concerning PACs!",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your Learning Journey",
        content: "UNIT 1: Foundation → UNIT 2: Mechanisms → UNIT 3: Recognition → UNIT 4: Patterns → UNIT 5: Clinical Assessment → UNIT 6: Management",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: PAC Foundation',
        content: 'Begin your journey to master premature atrial contractions! Learn what PACs are, why they occur, and their clinical significance. This foundation will help you confidently recognize and assess these common early beats.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module2/lesson19/pac-overview.jpg',
        imageAlt: 'Premature atrial contractions learning journey overview',
        hint: '⚡ The most common cardiac arrhythmia!',
        highlights: ['premature atrial contractions', 'early beats', 'clinical significance', 'confidently recognize'],
        audio: {
          narrationUrl: 'audio/module2/lesson19/unit1-intro.mp3',
          autoPlay: false
        }
      },
      {
        id: 'pac-definition',
        title: 'What are Premature Atrial Contractions?',
        content: 'PACs are early atrial beats that occur before the next expected sinus beat.',
        type: 'flashcard',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'zoom',
        imageUrl: 'images/ecg/medical_accurate/premature_atrial_85bpm_1.png',
        imageAlt: 'ECG showing premature atrial contraction with abnormal P wave',
        hint: '⚡ Early beats disrupting normal rhythm!',
        flashcardFront: '🎯 What makes a PAC "premature"?',
        flashcardBack: '⏰ A PAC arrives EARLY - before the next expected sinus beat! It originates from an ectopic atrial focus (not the SA node) and has an abnormal P wave shape. Think "early bird" atrial beat!'},
      {
        id: 'pac-diagnostic-criteria',
        title: '📋 PAC Diagnostic Criteria',
        content: "Master the specific features that confirm a premature atrial contraction!",
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'slide',
        imageUrl: 'images/ecg/medical_accurate/premature_atrial_85bpm_2.png',
        imageAlt: 'ECG demonstrating PAC diagnostic criteria',
        hint: '🔍 Look for these key features!',
        steps: [
          "⏰ Premature timing - arrives early before expected sinus beat",
          "👁️ Abnormal P wave morphology - different from sinus P waves",
          "🔗 Usually followed by normal QRS complex",
          "⏸️ Incomplete compensatory pause after the PAC",
          "🕵️ P wave may be hidden in preceding T wave (look carefully!)"
        ]},
      {
        id: 'pac-prevalence',
        title: '📊 PAC Prevalence & Demographics',
        content: "Understanding who gets PACs and how common they are.",
        type: 'accordion',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: 'images/module2/lesson19/prevalence.jpg',
        imageAlt: 'Demographics and prevalence of PACs',
        hint: '👥 PACs are extremely common!',
        accordionItems: [
          {
            title: '📈 Overall Prevalence',
            content: 'Found in 60-70% of healthy adults on 24-hour Holter monitoring. Most common cardiac arrhythmia encountered. Frequency increases with age - nearly universal in elderly.'
          },
          {
            title: '👶 Age Distribution',
            content: 'Children: Rare, usually benign if present. Young adults: Common during stress or caffeine use. Middle-aged: Increasing frequency, often lifestyle-related. Elderly: Nearly universal, may indicate underlying disease.'
          },
          {
            title: '⚖️ Gender Differences',
            content: 'Slightly more common in women. Hormonal influences during pregnancy and menopause. Stress-related PACs more frequent in women. Overall clinical significance similar between genders.'
          },
          {
            title: '🏃‍♂️ Athletic Population',
            content: 'Very common in athletes due to increased vagal tone. Often more frequent at rest than during exercise. Usually completely benign in conditioned athletes. May disappear with exercise (good prognostic sign).'
          }
        ]},
      {
        id: 'pac-significance-overview',
        title: '🎯 Clinical Significance Overview',
        content: "When are PACs benign vs concerning?",
        type: 'tabs',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'slide',
        imageUrl: 'images/module2/lesson19/clinical-significance.jpg',
        imageAlt: 'Clinical significance assessment of PACs',
        hint: '⚖️ Context determines significance!',
        tabs: [
          {
            title: '😊 Benign PACs',
            content: 'Isolated, infrequent PACs in healthy individuals. No underlying heart disease. Normal exercise tolerance. No symptoms or mild awareness only.',
            icon: '😊'
          },
          {
            title: '⚠️ Concerning Features',
            content: 'Very frequent PACs (>30% of beats). Triggering sustained arrhythmias. Associated with symptoms (chest pain, dyspnea). In setting of structural heart disease.',
            icon: '⚠️'
          },
          {
            title: '🔍 Need Investigation',
            content: 'New onset in elderly patients. Associated with syncope or presyncope. Family history of sudden cardiac death. Occurring with other arrhythmias.',
            icon: '🔍'
          },
          {
            title: '🏥 Emergency Concerns',
            content: 'PACs in acute MI setting. Triggering ventricular arrhythmias. Associated with hemodynamic instability. In context of drug toxicity.',
            icon: '🏥'
          }
        ],
        audio: {
          narrationUrl: 'audio/module2/lesson19/significance-overview.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit1-foundation-quiz',
        title: '🎯 Unit 1 Quiz: PAC Foundation',
        content: "Test your knowledge of PAC fundamentals!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: 'images/module2/lesson19/foundation-quiz.jpg',
        imageAlt: 'PAC foundation quiz',
        hint: '🧠 Test your Unit 1 knowledge!',
        question: "What is the key feature that distinguishes a PAC from a normal sinus beat?",
        options: [
          "QRS complex is always wide",
          "P wave morphology is abnormal and timing is premature",
          "Always followed by a long pause",
          "Only occurs during exercise"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! The key distinguishing features of a PAC are abnormal P wave morphology (different from sinus P waves) and premature timing (arrives early before the expected sinus beat). The QRS is usually normal unless there's aberrant conduction.",
        audio: {
          narrationUrl: 'audio/module2/lesson19/unit1-quiz.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit2-intro',
        title: '🎯 Unit 2: Mechanisms & Electrophysiology',
        content: 'Understand the cellular and electrical mechanisms behind PACs! Learn how ectopic atrial foci develop and fire prematurely, creating these common interruptions in normal sinus rhythm.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module2/lesson19/mechanisms-overview.jpg',
        imageAlt: 'PAC mechanisms and electrophysiology overview',
        hint: '⚡ Understanding the electrical basis!',
        highlights: ['cellular mechanisms', 'ectopic atrial foci', 'electrical mechanisms', 'premature firing']},
      {
        id: 'ectopic-focus-development',
        title: '🔬 Ectopic Focus Development',
        content: "How do abnormal atrial pacemaker sites develop?",
        type: 'accordion',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: 'images/module2/lesson19/ectopic-focus.jpg',
        imageAlt: 'Development of ectopic atrial foci',
        hint: '🧬 Cellular mechanisms of abnormal automaticity!',
        accordionItems: [
          {
            title: '⚡ Enhanced Automaticity',
            content: 'Normal atrial cells develop abnormal spontaneous depolarization. Increased slope of phase 4 action potential. Can be triggered by catecholamines, hypoxia, or electrolyte imbalances.'
          },
          {
            title: '🔄 Triggered Activity',
            content: 'Early afterdepolarizations (EADs) or delayed afterdepolarizations (DADs). Often calcium-mediated mechanisms. Common with digitalis toxicity or calcium overload states.'
          },
          {
            title: '🧲 Reentrant Circuits',
            content: 'Small microreentrant circuits in atrial tissue. Usually requires some degree of conduction block or slowing. Less common mechanism for isolated PACs.'
          }
        ]},
      {
        id: 'recognition-checklist',
        title: '📋 PAC Recognition Checklist',
        content: "Your systematic approach to PAC identification!",
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'slide',
        imageUrl: 'images/ecg/medical_accurate/premature_atrial_85bpm_2.png',
        imageAlt: 'ECG with PAC recognition checklist applied',
        hint: '✅ Follow this systematic approach!',
        steps: [
          "🕐 TIMING: Is the beat early (premature)?",
          "👁️ P WAVE: Is P wave morphology different from sinus?",
          "🔗 QRS: Is QRS usually normal (unless aberrant)?",
          "⏸️ PAUSE: Is there an incomplete compensatory pause?",
          "🔍 HIDDEN P: Check T wave for hidden P waves",
          "📏 MEASURE: Compare with normal sinus intervals"
        ]},
      {
        id: 'p-wave-analysis',
        title: '👁️ P Wave Analysis Mastery',
        content: "The key to PAC recognition is careful P wave analysis!",
        type: 'flashcard',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'zoom',
        imageUrl: 'images/module2/lesson19/p-wave-analysis.jpg',
        imageAlt: 'Detailed P wave analysis for PAC recognition',
        hint: '👁️ P wave holds all the secrets!',
        flashcardFront: '🔍 How do you analyze P waves in PACs?',
        flashcardBack: '👁️ Compare PAC P waves to sinus P waves! Look for: 1) Different SHAPE (morphology), 2) Different AXIS (positive/negative in leads), 3) Different TIMING (early arrival), 4) May be HIDDEN in preceding T wave, 5) May be INVERTED if from low atrial focus. The P wave tells you everything!'},
      {
        id: 'unit4-intro',
        title: '🎯 Unit 4: PAC Patterns',
        content: 'Learn the various patterns PACs can present in! From isolated beats to complex rhythms like bigeminy and trigeminy. Understanding patterns helps assess frequency and clinical significance.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module2/lesson19/patterns-overview.jpg',
        imageAlt: 'Various PAC patterns overview',
        hint: '🎵 Patterns tell the story!',
        highlights: ['various patterns', 'bigeminy', 'trigeminy', 'frequency assessment']},
      {
        id: 'pac-pattern-types',
        title: '🎵 PAC Pattern Classifications',
        content: "Master the different PAC patterns and their significance!",
        type: 'tabs',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'slide',
        imageUrl: 'images/module2/lesson19/pattern-types.jpg',
        imageAlt: 'Different PAC pattern classifications',
        hint: '🎵 Each pattern has clinical meaning!',
        tabs: [
          {
            title: '🎯 Isolated PACs',
            content: 'Occasional single PACs interspersed with normal sinus beats. Usually benign. Common after caffeine or stress. Often patient is unaware.',
            icon: '🎯'
          },
          {
            title: '👥 PAC Bigeminy',
            content: 'PAC alternating with every sinus beat (PAC-sinus-PAC-sinus). Creates regular irregular pattern. More concerning than isolated PACs. May indicate increased atrial irritability.',
            icon: '👥'
          },
          {
            title: '🎭 PAC Trigeminy',
            content: 'PAC every third beat (sinus-sinus-PAC pattern). Less common than bigeminy. Often associated with underlying triggers. May progress to more complex arrhythmias.',
            icon: '🎭'
          },
          {
            title: '🌊 Multifocal PACs',
            content: 'PACs from multiple atrial locations with varying P wave morphologies. Higher arrhythmogenic potential. May precede atrial fibrillation. Requires careful monitoring.',
            icon: '🌊'
          }
        ]},
      {
        id: 'unit5-intro',
        title: '🎯 Unit 5: Clinical Assessment',
        content: 'Learn to assess the clinical significance of PACs! Understand when PACs are benign versus concerning, what symptoms they cause, and how to evaluate patients with frequent PACs.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module2/lesson19/clinical-assessment-overview.jpg',
        imageAlt: 'Clinical assessment of PACs overview',
        hint: '🩺 Clinical context is everything!',
        highlights: ['clinical significance', 'benign versus concerning', 'symptoms', 'frequent PACs']},
      {
        id: 'pac-symptom-assessment',
        title: '💭 PAC Symptom Assessment',
        content: "Understanding how PACs affect patients and when to be concerned!",
        type: 'accordion',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: 'images/module2/lesson19/symptom-assessment.jpg',
        imageAlt: 'PAC symptom assessment guide',
        hint: '💭 Symptoms guide significance!',
        accordionItems: [
          {
            title: '😊 Asymptomatic PACs',
            content: 'Many patients completely unaware of PACs. Discovered incidentally on ECG or monitoring. Generally indicate low clinical significance. No intervention usually needed.'
          },
          {
            title: '💓 Palpitation Symptoms',
            content: 'Patient feels "skipped beat" or "flutter". Often describes "heart stopping" sensation. Usually benign but can be bothersome. May require reassurance and lifestyle modification.'
          },
          {
            title: '😰 Anxiety-Related Symptoms',
            content: 'PACs can trigger anxiety, which increases PACs (vicious cycle). Patients may fear serious heart disease. Reassurance and anxiety management important. Beta-blockers may help break cycle.'
          },
          {
            title: '🚨 Concerning Symptoms',
            content: 'Chest pain, dyspnea, presyncope, or syncope with PACs. May indicate underlying heart disease. Requires comprehensive cardiac evaluation. ECG monitoring and stress testing indicated.'
          }
        ]},
      {
        id: 'unit6-intro',
        title: '🎯 Unit 6: Management Strategies',
        content: 'Master the complete management approach for PACs! Learn lifestyle modifications, trigger identification, when to treat medically, and long-term monitoring strategies.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module2/lesson19/management-overview.jpg',
        imageAlt: 'Comprehensive PAC management strategies overview',
        hint: '🎯 Comprehensive management approach!',
        highlights: ['complete management', 'lifestyle modifications', 'trigger identification', 'monitoring strategies']},
      {
        id: 'pac-management-algorithm',
        title: '📋 PAC Management Algorithm',
        content: "Your systematic approach to PAC management!",
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'slide',
        imageUrl: 'images/module2/lesson19/management-algorithm.jpg',
        imageAlt: 'PAC management decision algorithm',
        hint: '📋 Follow this systematic approach!',
        steps: [
          "🔍 ASSESS: Frequency, symptoms, and underlying conditions",
          "🎯 IDENTIFY: Triggers (caffeine, stress, medications, etc.)",
          "🔄 MODIFY: Lifestyle changes and trigger avoidance",
          "💊 CONSIDER: Medical therapy if symptomatic and frequent",
          "📊 MONITOR: Follow-up based on symptoms and frequency",
          "🚨 EVALUATE: Further testing if concerning features present"
        ]},
      {
        id: 'lifestyle-modifications',
        title: '🌱 Lifestyle Modification Strategies',
        content: "Effective non-pharmacological approaches to reduce PACs!",
        type: 'tabs',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'slide',
        imageUrl: 'images/module2/lesson19/lifestyle-modifications.jpg',
        imageAlt: 'Lifestyle modifications for PAC management',
        hint: '🌱 Lifestyle is often the best medicine!',
        tabs: [
          {
            title: '☕ Stimulant Reduction',
            content: 'Reduce caffeine intake gradually. Limit alcohol consumption. Avoid energy drinks and excessive chocolate. Monitor response to dietary changes.',
            icon: '☕'
          },
          {
            title: '😌 Stress Management',
            content: 'Regular exercise (moderate intensity). Stress reduction techniques (meditation, yoga). Adequate sleep (7-9 hours nightly). Work-life balance optimization.',
            icon: '😌'
          },
          {
            title: '💊 Medication Review',
            content: 'Review all medications with healthcare provider. Consider alternatives for stimulating medications. Proper timing of bronchodilators. Thyroid medication optimization.',
            icon: '💊'
          },
          {
            title: '🔄 Follow-up Monitoring',
            content: 'Symptom diary with trigger identification. Follow-up ECGs if indicated. Holter monitoring for frequent PACs. Regular cardiovascular risk assessment.',
            icon: '🔄'
          }
        ]},
      {
        id: 'medical-therapy-options',
        title: '💊 Medical Therapy for PACs',
        content: "When and how to use medications for symptomatic PACs!",
        type: 'flashcard',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'zoom',
        imageUrl: 'images/module2/lesson19/medical-therapy.jpg',
        imageAlt: 'Medical therapy options for PAC management',
        hint: '💊 Medications when lifestyle isn\'t enough!',
        flashcardFront: '🤔 When should you consider medical therapy for PACs?',
        flashcardBack: '💊 Consider medications when: 1) Lifestyle modifications ineffective, 2) Symptoms significantly impair quality of life, 3) Very frequent PACs (>30% of beats), 4) PACs triggering sustained arrhythmias. First-line: Beta-blockers (metoprolol, atenolol). Second-line: Calcium channel blockers. Antiarrhythmics rarely needed!'},
      {
        id: 'unit6-management-quiz',
        title: '🎯 Unit 6 Quiz: Management',
        content: "Test your PAC management expertise!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: 'images/module2/lesson19/management-quiz.jpg',
        imageAlt: 'PAC management quiz',
        hint: '🧠 Test your management knowledge!',
        question: "A healthy 30-year-old reports palpitations and shows isolated PACs on ECG after drinking 5 cups of coffee daily. What's the best initial management?",
        options: [
          "Start beta-blocker therapy immediately",
          "Recommend caffeine reduction and lifestyle modification",
          "Order immediate cardiac catheterization",
          "Prescribe antiarrhythmic medications"
        ],
        correctAnswer: 1,
        explanation: "✅ Perfect! In a young, healthy patient with isolated PACs clearly related to excessive caffeine intake, the best initial approach is caffeine reduction and lifestyle modification. This addresses the trigger directly and avoids unnecessary medications in a benign condition."},
      {
        id: 'comprehensive-pac-assessment-1',
        title: '🏆 Comprehensive PAC Assessment 1: Advanced Recognition',
        content: "Master advanced PAC recognition in complex scenarios!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: 'images/ecg/medical_accurate/premature_atrial_complex_scenarios.png',
        imageAlt: 'Complex ECG with multiple PAC scenarios',
        hint: '🎯 Apply all your recognition skills!',
        question: "This ECG shows irregular rhythm with early beats. Some have wide QRS complexes. What's the most likely diagnosis?",
        options: [
          "Atrial fibrillation with RVR",
          "PACs with aberrant conduction",
          "Ventricular bigeminy",
          "Multifocal atrial tachycardia"
        ],
        correctAnswer: 1,
        explanation: "🎯 Excellent analysis! This shows PACs with aberrant conduction. The key clues are: 1) Early beats with preceding abnormal P waves, 2) Wide QRS due to bundle branch refractoriness, 3) Irregular pattern typical of PACs, 4) Normal QRS in some PACs. Aberrant conduction occurs when PACs arrive early and find conduction system still refractory."},
      {
        id: 'comprehensive-pac-assessment-2',
        title: '🏆 Comprehensive PAC Assessment 2: Clinical Integration',
        content: "Integrate PAC knowledge with clinical decision-making!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'slide',
        imageUrl: 'images/module2/lesson19/clinical-integration.jpg',
        imageAlt: 'Clinical scenario with PAC integration',
        hint: '🩺 Clinical integration mastery!',
        question: "A 65-year-old with heart failure shows frequent multifocal PACs (40% of beats) and reports worsening dyspnea. What's your priority?",
        options: [
          "Reassure patient that PACs are always benign",
          "Evaluate for triggers and optimize heart failure management",
          "Start high-dose antiarrhythmic therapy",
          "Recommend immediate ablation procedure"
        ],
        correctAnswer: 1,
        explanation: "🩺 Outstanding clinical thinking! In a heart failure patient with frequent multifocal PACs and worsening symptoms, the priority is trigger evaluation and heart failure optimization. Frequent PACs in heart failure may indicate: 1) Worsening heart failure, 2) Electrolyte imbalances, 3) Medication effects, 4) Potential progression to atrial arrhythmias. Address underlying conditions first!"},
      {
        id: 'comprehensive-pac-assessment-3',
        title: '🏆 Comprehensive PAC Assessment 3: Management Mastery',
        content: "Demonstrate mastery of comprehensive PAC management!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'slide',
        imageUrl: 'images/module2/lesson19/management-mastery.jpg',
        imageAlt: 'PAC management mastery scenario',
        hint: '🎯 Complete management approach!',
        question: "A 25-year-old athlete has PAC bigeminy during rest but normal rhythm during exercise. Echocardiogram is normal. Best approach?",
        options: [
          "Restrict all athletic activities immediately",
          "Start beta-blockers before exercise",
          "Reassurance and continued monitoring - likely benign",
          "Urgent electrophysiology study needed"
        ],
        correctAnswer: 2,
        explanation: "🏆 Perfect! In a young athlete with PACs at rest that disappear with exercise and normal echo, this pattern is typically benign and related to increased vagal tone. Key favorable features: 1) Young age, 2) Normal structure, 3) PACs disappear with exercise (good prognostic sign), 4) Athlete's heart physiology. Reassurance and monitoring are appropriate!"}
    ],
    summary: "🏆 Congratulations! You've mastered premature atrial contractions through 6 comprehensive units! You understand their mechanisms, can recognize them on ECG, know the different patterns, can assess clinical significance, and understand management approaches.",
    keyPoints: [
      "PACs are early atrial beats with abnormal P wave morphology - most common arrhythmia",
      "Mechanism involves ectopic atrial foci with enhanced automaticity or triggered activity",
      "Recognition requires identifying premature timing and abnormal P wave shapes",
      "Patterns include isolated, bigeminy, trigeminy, and multifocal configurations",
      "Clinical significance depends on frequency, symptoms, and underlying heart disease",
      "Management focuses on trigger identification and lifestyle modifications",
      "Most PACs are benign but frequent PACs may trigger sustained arrhythmias"
    ],
    resources: [
      {
        title: "Advanced PAC Recognition",
        url: "https://youtube.com/watch?v=pac_recognition_mastery",
        type: "video"
      },
      {
        title: "Atrial Ectopy Clinical Guidelines",
        url: "https://example.com/atrial-ectopy-guidelines",
        type: "article"
      },
      {
        title: "ECG Practice: Premature Beats",
        url: "https://example.com/premature-beats-practice",
        type: "tool"
      }
    ]
  },
  tasks: [
    {
      id: 'pac-mastery-assessment',
      type: 'quiz',
      xp: 50,
      audio: null,
      images: {
        mainImage: 'images/module2/lesson19/final-assessment.jpg',
        slideImages: [
          {
            slideId: 'final-assessment',
            imageUrl: 'images/ecg/medical_accurate/premature_atrial_85bpm_1.png',
            imageAlt: 'Comprehensive ECG showing PACs for final assessment',
            caption: 'Apply all your PAC knowledge to this comprehensive assessment'
          }
        ]
      },
      content: {
        question: 'A 45-year-old patient shows frequent early beats with abnormal P wave shapes occurring every 3rd beat. The patient drinks 6 cups of coffee daily and reports palpitations. What is your assessment and recommendation?',
        options: [
          'Normal variant requiring no intervention',
          'PAC trigeminy - recommend caffeine reduction and follow-up',
          'Dangerous arrhythmia requiring immediate hospitalization',
          'Atrial fibrillation requiring anticoagulation'
        ],
        correctAnswer: 1,
        explanation: 'Excellent assessment! This is PAC trigeminy (PACs every 3rd beat) likely triggered by excessive caffeine intake. The management approach should include caffeine reduction, lifestyle modification, and clinical follow-up to ensure symptoms improve and no progression to sustained arrhythmias.',
        hint: '☕ Coffee + early beats + trigeminy pattern = ?',
        completionMessage: 'Outstanding! 🎉 You\'ve achieved premature atrial contractions mastery! You can recognize PACs, assess their significance, and recommend appropriate management. +50 XP! 🏆',
        retryMessage: 'Remember: PAC patterns and triggers help guide management - lifestyle modification is often the key!',
        celebrationAnimation: 'rhythm-analysis-expert'
      }
    }
  ],
  completed: false,
  attempts: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
