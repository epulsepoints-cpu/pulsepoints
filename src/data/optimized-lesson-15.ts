import { Lesson } from '@/types/learning';

export const optimizedLesson15: Lesson = {
  id: 'lesson-2-5-optimized',
  moduleId: 'module-2',
  title: "Complete Sinus Arrest & Pause Mastery",
  description: "Master sinus arrest and pauses through 6 focused learning units: Foundation, Mechanisms, Recognition, Classification, Clinical Impact, and Management - each with interactive content and quizzes",
  order: 5,
  estimatedTime: 35,
  content: {
    type: 'mixed',
    introduction: "🫀 Welcome to Sinus Arrest & Pause Mastery! Learn these critical rhythm disturbances through 6 progressive units with slides, ECG strips, and quizzes. Each unit builds on the previous one for complete understanding.",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your Learning Journey",
        content: "UNIT 1: Foundation → UNIT 2: Mechanisms → UNIT 3: Recognition → UNIT 4: Classification → UNIT 5: Clinical Impact → UNIT 6: Management",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // ===============================================
      // 🎯 UNIT 1: SINUS ARREST FOUNDATION (6 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: Sinus Arrest Foundation',
        content: 'Start your sinus arrest mastery journey! Learn the basics: what happens when the sinus node fails, why it matters, and the fundamental concepts. This foundation is crucial for understanding everything that follows.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/bradycardia_35bpm.png',
        imageAlt: 'Sinus arrest learning journey overview',
        hint: '🚀 Your first step to understanding sinus node failure!',
        highlights: [
          'sinus node fails',
          'why it matters',
          'fundamental concepts'
        ],
        audio: {
          narrationUrl: 'audio/module2/lesson15/unit1-intro.mp3',
          autoPlay: false
        }
      },

      // 🎥 ECGkid Master Video - Perfect Topic Match!
      {
        id: 'ecgkid-sinus-node-fails',
        title: '🎥 Master Class: What Happens When the Sinus Node Fails?',
        content: 'Watch this comprehensive breakdown from ECGkid Portal! Learn exactly what happens during sinus pause and arrest, understand the consequences, and master the ECG recognition. This is the definitive guide to sinus node failure.',
        type: 'youtube',
        layout: 'centered',
        backgroundColor: '#1e40af',
        textColor: '#ffffff',
        animation: 'fade',
        youtubeId: 'l_sA_hdzoUU',
        videoDuration: 424, // 7 minutes, 4 seconds
        minimumWatchTime: 360, // 6 minutes minimum - critical content
        requireFullWatch: true, // Essential master class content
        imageUrl: '/ecg/medical_accurate/sinus_arrest_ecg.png',
        imageAlt: 'ECGkid master class on sinus node failure',
        hint: '🫀 Essential ECGkid master class - when the heart\'s pacemaker stops!',
        highlights: [
          'Complete sinus node failure breakdown',
          'ECG pattern recognition',
          'Clinical consequences explained',
          'Professional cardiologist guidance'
        ]
      },

      {
        id: 'arrest-definition',
        title: 'What is Sinus Arrest?',
        content: 'Sinus arrest occurs when the sinus node FAILS to generate an impulse. The heart literally "skips a beat" - or several beats! During the pause, there are NO P waves, QRS complexes, or T waves. The heart temporarily stops its normal electrical activity.',
        type: 'flashcard',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/bradycardia_40bpm.png',
        imageAlt: 'ECG showing sinus arrest with missing beats and pauses',
        hint: '💔 When the heart\'s pacemaker fails!',
        flashcardFront: 'What is Sinus Arrest?',
        flashcardBack: 'Sinus node FAILS to generate impulse → NO P waves, QRS, or T waves during pause → Heart temporarily stops electrical activity'},

      {
        id: 'normal-vs-abnormal',
        title: 'Normal vs Abnormal Pauses',
        content: 'Normal: Brief pauses <2 seconds (like sinus arrhythmia), Expected rate variations, Breathing-related changes. Abnormal: Sudden stops >2 seconds, No warning signs, Complete absence of activity, May cause symptoms.',
        type: 'tabs',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/bradycardia_45bpm.png',
        imageAlt: 'Comparison of normal pause vs pathologic sinus arrest',
        hint: '⏰ Duration matters - longer = more concerning!',
        tabs: [
          {
            title: '✅ Normal Pauses',
            content: 'Brief pauses <2 seconds often related to breathing (sinus arrhythmia). Expected rate variations during respiratory cycles. Usually benign in healthy individuals.'
          },
          {
            title: '⚠️ Abnormal Pauses',
            content: 'Sudden stops >2 seconds with no warning. Complete absence of electrical activity. May cause symptoms like dizziness, syncope, or chest discomfort.'
          },
          {
            title: '🎯 Clinical Assessment',
            content: 'Duration, symptoms, and patient context determine significance. Consider underlying conditions, medications, and hemodynamic impact.'
          }
        ]},

      {
        id: 'sinus-node-anatomy',
        title: 'Sinus Node: The Heart\'s Master Clock',
        content: 'The sinus node is a small group of specialized cells in the right atrium. It normally fires 60-100 times per minute. When it fails, the entire heart\'s rhythm is affected. It\'s like the conductor suddenly leaving the orchestra!',
        type: 'accordion',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/normal_sinus_75bpm_2.png',
        imageAlt: 'Anatomical diagram of sinus node location and function',
        hint: '🎼 The heart\'s conductor can sometimes miss a beat!',
        accordionItems: [
          {
            title: '📍 Location & Structure',
            content: 'Small group of specialized pacemaker cells located in the right atrium near the superior vena cava. These cells have unique properties that allow them to generate electrical impulses automatically.'
          },
          {
            title: '⚡ Normal Function',
            content: 'Fires 60-100 times per minute in healthy adults. Each impulse spreads through the atria, creating P waves, then travels to the ventricles via the AV node.'
          },
          {
            title: '🚫 When It Fails',
            content: 'When the sinus node fails to generate an impulse, the entire heart\'s rhythm is affected. Like a conductor suddenly leaving an orchestra - everything stops until someone else takes over.'
          }
        ]},

      {
        id: 'backup-systems',
        title: 'Heart\'s Backup Systems',
        content: 'Good news: The heart has backup pacemakers! AV junction (40-60 bpm), Ventricular pacemakers (20-40 bpm). These "escape" rhythms can take over during long pauses. They\'re slower but keep you alive!',
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/bradycardia_48bpm_3.png',
        imageAlt: 'Heart conduction system showing backup pacemaker hierarchy',
        hint: '🆘 Built-in safety systems protect you!',
        steps: [
          { 
            number: 1,
            title: 'Primary Pacemaker Fails',
            description: 'When the sinus node fails to generate an impulse, a pause begins. The heart temporarily has no electrical activity.',
            icon: '🚫'
          },
          { 
            number: 2,
            title: 'AV Junction Takes Over',
            description: 'After 1-2 seconds, the AV junction can step in as backup pacemaker, generating 40-60 bpm. Creates junctional escape rhythm.',
            icon: '🔄'
          },
          { 
            number: 3,
            title: 'Ventricular Backup',
            description: 'If AV junction also fails, ventricular pacemakers activate at 20-40 bpm. This is the last line of defense.',
            icon: '⚡'
          },
          { 
            number: 4,
            title: 'Life-Saving Function',
            description: 'These backup systems are slower but maintain circulation. They literally keep you alive during sinus node failures.',
            icon: '💖'
          }
        ]},

      {
        id: 'terminology-clarification',
        title: 'Understanding the Terms',
        content: 'Sinus Pause: 2-3 seconds of silence, Sinus Arrest: >3 seconds of silence, Sinus Exit Block: Different mechanism (we\'ll cover later), Sick Sinus Syndrome: Chronic problem with multiple issues.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/terminology.jpg',
        imageAlt: 'Medical terminology chart for sinus node disorders',
        hint: '📚 Different names, same basic problem!'},

      // ==================== UNIT 1 QUIZ: FOUNDATION ====================
      {
        id: 'unit1-foundation-quiz',
        title: '🎯 Unit 1 Quiz: Sinus Arrest Foundation',
        content: "Test your knowledge of sinus arrest foundation concepts!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: 'images/module2/lesson15/foundation-quiz.jpg',
        imageAlt: 'Sinus arrest foundation quiz',
        hint: '🧠 Test your Unit 1 knowledge!',
        question: "What happens during sinus arrest?",
        options: [
          "Heart rate speeds up dramatically",
          "Sinus node fails to generate impulses, creating a pause",
          "P waves become inverted",
          "QRS complexes become wider"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! During sinus arrest, the sinus node fails to generate impulses, resulting in a pause where no P waves, QRS complexes, or T waves appear on the ECG.",
        audio: {
          narrationUrl: 'audio/module2/lesson15/unit1-quiz.mp3',
          autoPlay: false
        }
      },

      // ================================================
      // 🎯 UNIT 2: MECHANISMS & CAUSES (7 slides)
      // ================================================
      {
        id: 'unit2-intro',
        title: '🎯 Unit 2: Mechanisms & Causes',
        content: 'Now dive into WHY sinus arrest happens! Learn the physiological mechanisms, common causes, and risk factors. Understanding the "why" helps with recognition and treatment.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/mechanisms-overview.jpg',
        imageAlt: 'Mechanisms and causes overview',
        hint: '🧠 Time to understand the science behind the silence!'},

      {
        id: 'electrical-failure-mechanism',
        title: 'Electrical Failure Mechanism',
        content: 'Sinus arrest = electrical failure at the source. The sinus node\'s pacemaker cells stop depolarizing. This can be due to: Cell membrane problems, Ion channel dysfunction, Metabolic issues, or External influences.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/electrical-failure.jpg',
        imageAlt: 'Cellular mechanism of sinus node electrical failure',
        hint: '⚡ When the spark doesn\'t happen!'},

      {
        id: 'common-causes',
        title: 'Common Causes of Sinus Arrest',
        content: 'Medications: Beta blockers, Calcium channel blockers, Digoxin. Medical conditions: Sick sinus syndrome, Heart attacks, Sleep apnea. Other factors: High vagal tone, Electrolyte imbalances, Hypothermia.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/common-causes.jpg',
        imageAlt: 'Medical chart showing various causes of sinus arrest and pauses',
        hint: '💊 Medications are often the culprit!'},

      {
        id: 'vagal-influence',
        title: 'Vagal Tone Influence',
        content: 'High vagal tone can trigger sinus arrest. Common triggers: Valsalva maneuver, Coughing, Straining, Carotid sinus massage. Athletes may have episodes due to high baseline vagal tone. Usually benign in young, healthy people.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/vagal-influence.jpg',
        imageAlt: 'Vagal stimulation effects on sinus node function',
        hint: '🧘‍♂️ Sometimes relaxation goes too far!'},

      {
        id: 'medication-effects',
        title: 'Medication-Induced Arrest',
        content: 'Many medications can cause sinus arrest: Beta blockers (metoprolol, atenolol), Calcium blockers (verapamil, diltiazem), Digoxin toxicity, Antiarrhythmics. Always check medication list in patients with pauses!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/medication-effects.jpg',
        imageAlt: 'Chart of medications that can cause sinus arrest',
        hint: '💊 The cure can sometimes cause the problem!'},

      {
        id: 'sick-sinus-syndrome',
        title: 'Sick Sinus Syndrome',
        content: 'Chronic condition with multiple sinus node problems: Sinus bradycardia, Sinus arrest/pause, Chronotropic incompetence, Tachy-brady syndrome. Usually requires pacemaker. Most common in elderly patients.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/sick-sinus-syndrome.jpg',
        imageAlt: 'ECG examples of sick sinus syndrome manifestations',
        hint: '🤒 When the sinus node gets chronically sick!'},

      {
        id: 'reversible-causes',
        title: 'Reversible vs Irreversible Causes',
        content: 'Reversible: Medication effects, Electrolyte imbalances, Hypothermia, Acute vagal stimulation. Irreversible: Degenerative sinus node disease, Post-surgical damage, Chronic fibrosis. Identifying reversible causes is crucial!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/reversible-causes.jpg',
        imageAlt: 'Flow chart of reversible vs irreversible causes',
        hint: '🔄 Some causes can be fixed, others need permanent solutions!'},

      // ==================== UNIT 2 QUIZ: MECHANISMS ====================
      {
        id: 'unit2-mechanisms-quiz',
        title: '🎯 Unit 2 Quiz: Mechanisms & Causes',
        content: "Test your knowledge of sinus arrest mechanisms!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: 'images/module2/lesson15/mechanisms-quiz.jpg',
        imageAlt: 'Sinus arrest mechanisms quiz',
        hint: '🧠 Test your Unit 2 knowledge!',
        question: "Which is the most common reversible cause of sinus arrest?",
        options: [
          "Congenital heart disease",
          "Medication effects (beta blockers, calcium blockers)",
          "Previous heart surgery",
          "Age-related degeneration"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Medication effects, particularly from beta blockers and calcium channel blockers, are the most common reversible cause of sinus arrest. This is why medication review is crucial in evaluation."},

      // ===============================================
      // 🎯 UNIT 3: ECG RECOGNITION SKILLS (7 slides)
      // ===============================================
      {
        id: 'unit3-intro',
        title: '🎯 Unit 3: ECG Recognition Skills',
        content: 'Time to become an expert at spotting sinus arrest on ECG! Learn to measure pauses, identify key features, and differentiate from other rhythm disturbances.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/recognition-overview.jpg',
        imageAlt: 'ECG recognition skills overview',
        hint: '👁️ Train your eye to spot the silence!',
        highlights: ['expert', 'spotting', 'measure', 'identify', 'differentiate']},

      {
        id: 'systematic-approach',
        title: '📋 Systematic ECG Analysis for Sinus Arrest',
        content: "Follow this step-by-step approach to never miss a sinus arrest!",
        type: 'steps',
        layout: 'centered', 
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'slide',
        imageUrl: 'images/ecg/medical_accurate/bradycardia_35bpm.png',
        imageAlt: 'ECG showing sinus arrest pattern',
        hint: '🔍 Systematic analysis prevents missed diagnoses!',
        steps: [
          "📏 Calculate baseline R-R intervals from normal beats",
          "🔍 Identify any pauses longer than expected cycle",
          "⏱️ Measure pause duration precisely in seconds",
          "🎯 Look for P-wave absence during the pause",
          "✅ Confirm sinus rhythm resumes after pause"
        ]},

      {
        id: 'measurement-mastery',
        title: '📐 Mastering Pause Measurements',
        content: "Accurate measurement is critical for proper diagnosis and treatment decisions.",
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#ecfdf5',
        textColor: '#047857',
        animation: 'slide',
        imageUrl: 'images/ecg/medical_accurate/bradycardia_48bpm_3.png',
        imageAlt: 'ECG with measurement markers for pause duration',
        hint: '📏 Precision matters in pause measurement!',
        tabs: [
          {
            title: '⚡ Basic Method',
            content: 'Count large boxes × 0.2 seconds = pause duration. Each large box = 0.2 seconds on standard ECG paper.',
            icon: '📏'
          },
          {
            title: '💻 Digital Calipers',
            content: 'Use electronic calipers for precise measurements. Most monitors calculate automatically to nearest millisecond.',
            icon: '💻'
          },
          {
            title: '🏥 Clinical Impact',
            content: '2-3 seconds: Usually benign, 3-5 seconds: Monitor closely, >5 seconds: Consider intervention urgently.',
            icon: '🏥'
          }
        ],
        audio: {
          narrationUrl: 'audio/module2/lesson15/measurement-mastery.mp3',
          autoPlay: false
        }
      },

      {
        id: 'visual-pattern-recognition',
        title: 'The Visual Pattern',
        content: 'What to look for: Normal sinus rhythm baseline, Sudden COMPLETE absence of activity, Pause longer than expected, No gradual slowing, Abrupt resumption of rhythm. It\'s like a silent gap in the music!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/visual-pattern.jpg',
        imageAlt: 'Visual pattern of sinus arrest on ECG strip',
        hint: '🔇 Look for the sudden silence!'},

      {
        id: 'measurement-technique',
        title: 'How to Measure Pauses',
        content: 'Step 1: Identify last normal beat before pause, Step 2: Find first beat after pause, Step 3: Measure time between them, Step 4: Compare to normal R-R interval. Use calipers or count small squares (each = 0.04 seconds).',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/measurement-technique.jpg',
        imageAlt: 'Technique for measuring sinus arrest pause duration',
        hint: '📏 Accurate measurement is key to diagnosis!'},

      {
        id: 'rhythm-context',
        title: 'Rhythm Context Matters',
        content: 'Before the pause: Usually normal sinus rhythm, Regular P-P intervals, Normal rate (60-100 bpm). After the pause: May return to same rhythm, Rate might be different, Watch for escape beats during long pauses.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/rhythm-context.jpg',
        imageAlt: 'ECG showing rhythm context before and after sinus arrest',
        hint: '📖 Read the whole story, not just the pause!'},

      {
        id: 'escape-beat-identification',
        title: 'Identifying Escape Beats',
        content: 'During long pauses, look for: Junctional escapes (narrow QRS, no P wave), Ventricular escapes (wide QRS, bizarre shape). These are PROTECTIVE - not dangerous! They keep the heart going until sinus node recovers.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/escape-beats.jpg',
        imageAlt: 'Examples of junctional and ventricular escape beats during sinus arrest',
        hint: '🆘 Escape beats are the heart\'s safety net!'},

      {
        id: 'artifact-vs-real',
        title: 'Artifact vs Real Pause',
        content: 'Artifacts can mimic sinus arrest: Loose electrodes create "flat lines", Patient movement causes interference, Monitor malfunctions. Real pause: Other leads show same finding, Patient may have symptoms, Consistent with clinical picture.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/artifact-vs-real.jpg',
        imageAlt: 'Comparison of real sinus arrest vs ECG artifacts',
        hint: '🔍 Don\'t be fooled by technical problems!'},

      {
        id: 'multi-lead-analysis',
        title: 'Multi-Lead Analysis',
        content: 'Check multiple leads: Sinus arrest appears in ALL leads, Artifacts usually affect one lead, Confirm with rhythm strip, Look at lead II for best P wave visualization. Never diagnose from a single lead!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/multi-lead-analysis.jpg',
        imageAlt: '12-lead ECG showing sinus arrest in multiple leads',
        hint: '📊 More leads = more confidence in diagnosis!'},

      // ==================== UNIT 3 QUIZ: RECOGNITION ====================
      {
        id: 'unit3-recognition-quiz',
        title: '🎯 Unit 3 Quiz: ECG Recognition',
        content: "Test your ECG recognition skills!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: 'images/module2/lesson15/recognition-quiz.jpg',
        imageAlt: 'ECG recognition quiz',
        hint: '🧠 Test your Unit 3 knowledge!',
        question: "What is the key visual feature of sinus arrest on ECG?",
        options: [
          "Gradual slowing of heart rate",
          "Inverted P waves",
          "Sudden complete absence of cardiac activity",
          "Wide QRS complexes"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! Sinus arrest shows sudden, complete absence of all cardiac activity (P waves, QRS complexes, T waves) for a measurable period, unlike gradual changes seen in other conditions."},

      // ================================================
      // 🎯 UNIT 4: CLASSIFICATION & MEASUREMENTS (6 slides)
      // ================================================
      {
        id: 'unit4-intro',
        title: '🎯 Unit 4: Classification & Measurements',
        content: 'Master the classification system! Learn to distinguish between pause and arrest, measure durations accurately, and understand the clinical significance of different pause lengths.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/classification-overview.jpg',
        imageAlt: 'Classification and measurements overview',
        hint: '📏 Size matters in sinus arrests!'},

      {
        id: 'pause-vs-arrest',
        title: 'Pause vs Arrest Classification',
        content: 'Sinus Pause: 2-3 seconds duration, Often asymptomatic, May be physiologic. Sinus Arrest: >3 seconds duration, More likely symptomatic, Usually pathologic. The 3-second rule is your guide!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/pause-vs-arrest.jpg',
        imageAlt: 'Comparison chart showing differences between sinus pause and sinus arrest',
        hint: '⏱️ 3 seconds is the magic number!'},

      {
        id: 'duration-measurement',
        title: 'Accurate Duration Measurement',
        content: 'Measurement steps: 1) Find last normal beat, 2) Find first beat after pause, 3) Count small squares between them, 4) Multiply by 0.04 seconds per square. Example: 75 squares × 0.04 = 3.0 seconds.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/duration-measurement.jpg',
        imageAlt: 'Step-by-step measurement technique with calipers',
        hint: '🧮 Math makes the diagnosis!'},

      {
        id: 'severity-grading',
        title: 'Severity Grading System',
        content: 'Mild: 2-4 seconds (concerning but manageable), Moderate: 4-6 seconds (definitely abnormal), Severe: >6 seconds (high risk for symptoms), Extreme: >10 seconds (emergency situation). Longer = more dangerous!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/severity-grading.jpg',
        imageAlt: 'Severity grading chart for sinus arrest duration',
        hint: '🚨 Longer pauses = higher priority!'},

      {
        id: 'frequency-assessment',
        title: 'Frequency Assessment',
        content: 'How often do pauses occur? Rare: <1 per hour (usually benign), Occasional: 1-5 per hour (needs monitoring), Frequent: >5 per hour (concerning), Clustered: Multiple in short time (high risk). Frequency matters as much as duration!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/frequency-assessment.jpg',
        imageAlt: 'Chart showing frequency patterns of sinus arrest episodes',
        hint: '📊 Count the pauses, not just their length!'},

      {
        id: 'documentation-standards',
        title: 'Documentation Standards',
        content: 'Document clearly: "Sinus arrest lasting X seconds", Note any escape rhythms, Record frequency over time, Include symptoms if present. Example: "Sinus arrest, 4.2 seconds, with junctional escape, patient asymptomatic".',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/documentation-standards.jpg',
        imageAlt: 'Examples of proper sinus arrest documentation',
        hint: '📝 Good documentation saves lives!'},

      // ==================== UNIT 4 QUIZ: CLASSIFICATION ====================
      {
        id: 'unit4-classification-quiz',
        title: '🎯 Unit 4 Quiz: Classification & Measurements',
        content: "Test your classification skills!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: 'images/module2/lesson15/classification-quiz.jpg',
        imageAlt: 'Classification quiz',
        hint: '🧠 Test your Unit 4 knowledge!',
        question: "A pause lasting 4.5 seconds is classified as:",
        options: [
          "Normal sinus variation",
          "Sinus pause",
          "Sinus arrest",
          "Heart block"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! A pause lasting 4.5 seconds is classified as sinus arrest (>3 seconds). This duration is clinically significant and may require evaluation for underlying causes."},

      // ================================================
      // 🎯 UNIT 5: CLINICAL IMPACT & SYMPTOMS (7 slides)
      // ================================================
      {
        id: 'unit5-intro',
        title: '🎯 Unit 5: Clinical Impact & Symptoms',
        content: 'Understand what sinus arrest means for patients! Learn about symptoms, hemodynamic effects, and how to assess clinical significance. This determines urgency of treatment.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/clinical-impact-overview.jpg',
        imageAlt: 'Clinical impact and symptoms overview',
        hint: '🏥 Patient impact guides treatment urgency!',
        highlights: ['symptoms', 'hemodynamic effects', 'clinical significance', 'urgency']},

      {
        id: 'symptom-spectrum',
        title: '🎭 Symptom Spectrum Analysis',
        content: "Sinus arrest affects patients differently based on pause duration and frequency.",
        type: 'accordion',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'slide',
        imageUrl: 'images/ecg/medical_accurate/bradycardia_35bpm_1.png',
        imageAlt: 'ECG showing various pause durations',
        hint: '🔍 Symptoms correlate with pause duration!',
        accordionItems: [
          {
            title: '😊 Asymptomatic Presentations',
            content: 'Short pauses (2-3 seconds): Often completely asymptomatic, discovered incidentally on routine ECG or monitoring, may occur during sleep or rest periods.'
          },
          {
            title: '😐 Mild Symptoms', 
            content: 'Moderate pauses (3-5 seconds): Subtle lightheadedness, brief fatigue, "skipped beat" sensation, mild anxiety about heart rhythm.'
          },
          {
            title: '😨 Significant Symptoms',
            content: 'Long pauses (5-8 seconds): Dizziness, near-syncope, palpitations, chest discomfort, exercise intolerance, cognitive symptoms.'
          },
          {
            title: '🚨 Emergency Symptoms',
            content: 'Very long pauses (>8 seconds): Syncope, falls, seizure-like activity, emergency intervention required, potential cardiac arrest risk.'
          }
        ]},

      {
        id: 'hemodynamic-impact',
        title: '💓 Hemodynamic Impact Assessment',
        content: "Understanding how pauses affect circulation and blood pressure.",
        type: 'flashcard',
        layout: 'centered',
        backgroundColor: '#fee2e2', 
        textColor: '#dc2626',
        animation: 'zoom',
        imageUrl: 'images/ecg/medical_accurate/bradycardia_38bpm_1.png',
        imageAlt: 'ECG demonstrating hemodynamic compromise',
        hint: '💗 Blood flow stops during pause!',
        flashcardFront: '🫀 What happens to circulation during a 6-second sinus arrest?',
        flashcardBack: '⚠️ CRITICAL: No cardiac output for 6 seconds! Blood pressure drops, cerebral perfusion decreases, patient may lose consciousness. This is why >5-second pauses often cause syncope.'},

      {
        id: 'hemodynamic-effects',
        title: 'Hemodynamic Effects',
        content: 'During pause: No cardiac output, Blood pressure drops, Brain perfusion decreases. After pause: Compensatory increase, Heart rate may temporarily rise, Blood pressure recovers. Length and frequency determine severity!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/hemodynamic-effects.jpg',
        imageAlt: 'Blood pressure and cardiac output during sinus arrest',
        hint: '💔 No beats = no blood flow!'},

      {
        id: 'symptom-spectrum',
        title: 'Symptom Spectrum',
        content: 'Asymptomatic: Short pauses, good compensation. Mild symptoms: Dizziness, weakness, fatigue. Moderate symptoms: Near-syncope, palpitations. Severe symptoms: Syncope, falls, injury. Symptoms guide treatment urgency!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/symptom-spectrum.jpg',
        imageAlt: 'Spectrum of symptoms from mild to severe',
        hint: '😵 Symptoms tell you how urgent this is!'},

      {
        id: 'syncope-mechanism',
        title: 'Syncope Mechanism',
        content: 'Why syncope occurs: Pause >4-6 seconds typically needed, Brain needs constant blood flow, Cerebral hypoperfusion causes loss of consciousness, Recovery usually rapid when rhythm returns. Syncope = serious symptom!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/syncope-mechanism.jpg',
        imageAlt: 'Mechanism of syncope during sinus arrest',
        hint: '🧠 Brain needs blood every second!'},

      {
        id: 'risk-factors',
        title: 'High-Risk Situations',
        content: 'Higher risk groups: Elderly patients, Structural heart disease, Multiple medications, Previous syncope. Higher risk situations: Driving, Working at heights, Swimming, Operating machinery. Risk assessment is crucial!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/risk-factors.jpg',
        imageAlt: 'High-risk situations and patient factors',
        hint: '⚠️ Some patients and situations are riskier!'},

      {
        id: 'quality-of-life',
        title: 'Quality of Life Impact',
        content: 'Even without syncope: Fear of symptoms, Activity restrictions, Anxiety about episodes, Social isolation, Work limitations. Treating symptomatic patients improves quality of life significantly!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/quality-of-life.jpg',
        imageAlt: 'Quality of life impacts of sinus arrest symptoms',
        hint: '😔 Symptoms affect more than just the heart!'},

      {
        id: 'symptom-correlation',
        title: 'Correlating Symptoms with ECG',
        content: 'Key principle: Symptoms must correlate with pauses! Use event monitors, Holter monitors, or implantable loop recorders. If symptoms occur without pauses, look for other causes. Correlation = causation in this case!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/symptom-correlation.jpg',
        imageAlt: 'Event monitor showing symptoms correlating with sinus arrest',
        hint: '🔗 Prove the connection between symptoms and pauses!'},

      // ==================== UNIT 5 QUIZ: CLINICAL IMPACT ====================
      {
        id: 'unit5-clinical-quiz',
        title: '🎯 Unit 5 Quiz: Clinical Impact',
        content: "Test your knowledge of clinical impact!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: 'images/module2/lesson15/clinical-impact-quiz.jpg',
        imageAlt: 'Clinical impact quiz',
        hint: '🧠 Test your Unit 5 knowledge!',
        question: "What is the most serious symptom associated with sinus arrest?",
        options: [
          "Mild fatigue",
          "Palpitations",
          "Syncope (fainting)",
          "Chest discomfort"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! Syncope (fainting) is the most serious symptom as it indicates significant cerebral hypoperfusion and poses risks for injury. It typically requires urgent evaluation and often pacemaker therapy."},

      // ===============================================
      // 🎯 UNIT 6: MANAGEMENT & TREATMENT (6 slides)
      // ===============================================
      {
        id: 'unit6-intro',
        title: '🎯 Unit 6: Management & Treatment',
        content: 'Learn how to manage sinus arrest! Understand when to treat, treatment options, and monitoring strategies. This unit focuses on practical clinical decision-making.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/management-overview.jpg',
        imageAlt: 'Management and treatment overview',
        hint: '⚕️ Time to learn how to help patients!',
        highlights: ['manage', 'when to treat', 'treatment options', 'clinical decision-making']},

      {
        id: 'treatment-decision-tree',
        title: '🌳 Treatment Decision Algorithm',
        content: "Follow this systematic approach to treatment decisions.",
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'slide',
        imageUrl: 'images/ecg/medical_accurate/bradycardia_35bpm.png',
        imageAlt: 'Treatment decision algorithm for sinus arrest',
        hint: '🎯 Systematic approach prevents missed opportunities!',
        steps: [
          "📋 Confirm sinus arrest diagnosis with accurate measurement",
          "🤔 Assess symptoms: Are they clearly related to pauses?",
          "⏱️ Evaluate pause frequency and duration pattern",
          "🏥 Consider reversible causes (medications, electrolytes)",
          "⚖️ Weigh risks vs benefits of intervention"
        ]},

      {
        id: 'pacemaker-options',
        title: '🔋 Pacemaker Therapy Options',
        content: "Modern pacemaker technology offers several effective solutions.",
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'slide',
        imageUrl: 'images/ecg/medical_accurate/bradycardia_42bpm_2.png',
        imageAlt: 'ECG showing paced rhythm after treatment',
        hint: '🔋 Technology saves lives!',
        tabs: [
          {
            title: '🏥 Single Chamber (VVI)',
            content: 'Ventricular pacing only. Simple, reliable. Good for patients with atrial fibrillation or limited mobility. Lower cost option.',
            icon: '🔋'
          },
          {
            title: '🫀 Dual Chamber (DDD)',
            content: 'Maintains AV synchrony. Better hemodynamics. Preserves normal heart sequence. Preferred for most patients with sinus node disease.',
            icon: '🫀'
          },
          {
            title: '⚡ Rate Responsive',
            content: 'Adjusts rate with activity. Uses sensors for motion/minute ventilation. Improves exercise capacity. Essential for active patients.',
            icon: '⚡'
          }
        ]},

      {
        id: 'medication-review',
        title: 'Medication Management',
        content: 'First step: Review ALL medications! Stop or reduce: Beta blockers if possible, Calcium blockers if not essential, Digoxin if toxic levels. Alternative medications: ACE inhibitors for blood pressure, Different antiarrhythmics if needed.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/medication-management.jpg',
        imageAlt: 'Medication review process and alternatives',
        hint: '💊 Sometimes less medicine is more!'},

      {
        id: 'monitoring-strategies',
        title: 'Monitoring Strategies',
        content: 'Monitoring options: Holter monitor (24-48 hours), Event monitors (weeks to months), Implantable loop recorders (years), Hospital telemetry (continuous). Choose based on symptom frequency and clinical urgency.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/monitoring-strategies.jpg',
        imageAlt: 'Various cardiac monitoring devices and their uses',
        hint: '📱 Match monitor to symptom frequency!'},

      {
        id: 'emergency-management',
        title: 'Emergency Management',
        content: 'For severe symptomatic episodes: IV atropine 0.5-1mg, Temporary transcutaneous pacing, Consider dopamine or epinephrine, Arrange urgent cardiology consultation. Prevention of recurrence usually requires permanent pacemaker.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/emergency-management.jpg',
        imageAlt: 'Emergency treatment algorithms for sinus arrest',
        hint: '🚨 Know what to do in emergencies!'},

      // ==================== UNIT 6 QUIZ: MANAGEMENT ====================
      {
        id: 'unit6-management-quiz',
        title: '🎯 Unit 6 Quiz: Management & Treatment',
        content: "Test your knowledge of management strategies!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: 'images/module2/lesson15/management-quiz.jpg',
        imageAlt: 'Management quiz',
        hint: '🧠 Test your Unit 6 knowledge!',
        question: "What is the primary treatment for symptomatic sinus arrest?",
        options: [
          "Increased caffeine intake",
          "Beta blocker medications",
          "Permanent pacemaker implantation",
          "Dietary changes only"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! Permanent pacemaker implantation is the primary treatment for symptomatic sinus arrest, providing reliable backup pacing to prevent dangerous pauses and their associated symptoms."},

      // ==================== COMPREHENSIVE FINAL ASSESSMENT ====================
      {
        id: 'comprehensive-final-assessment',
        title: '🏆 Comprehensive Sinus Arrest Mastery Assessment',
        content: "Test your complete understanding of sinus arrest and pause!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: 'images/ecg/medical_accurate/bradycardia_35bpm_1.png',
        imageAlt: 'Comprehensive assessment quiz',
        hint: '🧠 Demonstrate your complete mastery!',
        question: "A 72-year-old patient has a 6-second pause on ECG during dizziness. What is the most appropriate next step?",
        options: [
          "Reassurance - this is normal aging",
          "Increase beta blocker dose",
          "Emergency pacemaker consultation",
          "Discharge with follow-up in 6 months"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! A 6-second pause causing symptoms in an elderly patient requires urgent pacemaker evaluation. This represents symptomatic sinus arrest with high risk for syncope and injury. Emergency cardiology consultation is appropriate."},

      {
        id: 'clinical-integration-quiz',
        title: '🎯 Clinical Integration Challenge',
        content: "Apply your knowledge to complex clinical scenarios!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'slide',
        imageUrl: 'images/ecg/medical_accurate/bradycardia_48bpm_3.png',
        imageAlt: 'Clinical integration challenge',
        hint: '🏥 Real-world application skills!',
        question: "Which combination of findings MOST strongly indicates need for pacemaker therapy?",
        options: [
          "5-second pause + no symptoms + young age",
          "2-second pause + dizziness + multiple medications",
          "4-second pause + syncope + medication review failed",
          "3-second pause + anxiety + normal echo"
        ],
        correctAnswer: 2,
        explanation: "✅ Excellent! A 4-second pause causing syncope after failed medication review strongly indicates pacemaker need. This combines significant pause duration, serious symptoms, and failed conservative management - the classic triad for intervention."},

      // Final Integration Slide
      {
        id: 'mastery-complete',
        title: '🏆 Sinus Arrest & Pause Mastery Complete!',
        content: 'Congratulations! You\'ve mastered all 6 units of sinus arrest and pause. You understand the foundation, mechanisms, recognition, classification, clinical impact, and management. You\'re ready to confidently identify and manage these important rhythm disturbances!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: 'images/module2/lesson15/mastery-complete.jpg',
        imageAlt: 'Completion celebration - sinus arrest mastery achieved',
        hint: '🎉 You\'re now a sinus arrest expert!'}
    ],
    summary: "🏆 Congratulations! You've mastered sinus arrest and pause through 6 comprehensive units! You understand the foundation, mechanisms, recognition, classification, clinical impact, and management. You can confidently identify these rhythm disturbances and make appropriate treatment decisions.",
    keyPoints: [
      "Sinus arrest: complete absence of sinus activity >3 seconds - potentially serious",
      "Caused by sinus node failure due to medications, disease, or high vagal tone",
      "Look for sudden complete silence on ECG with abrupt resumption of rhythm",
      "Classify by duration: pause (2-3 sec) vs arrest (>3 sec) and frequency",
      "Symptoms range from none to syncope - correlation with pauses is crucial",
      "Treatment focuses on reversible causes first, then pacemaker for symptomatic cases",
      "Emergency management includes atropine and temporary pacing for severe cases"
    ],
    resources: [
      {
        title: "Advanced Sinus Arrest Recognition",
        url: "https://youtube.com/watch?v=sinus_arrest_mastery",
        type: "video"
      },
      {
        title: "Pacemaker Therapy Guidelines",
        url: "https://example.com/pacemaker-guidelines",
        type: "article"
      },
      {
        title: "Cardiac Monitoring Strategies",
        url: "https://example.com/monitoring-strategies",
        type: "tool"
      }
    ]
  },
  tasks: [
    // Tasks will be automatically generated from quiz slides
    {
      id: 'sinus-arrest-mastery-assessment',
      type: 'quiz',
      xp: 50,
      audio: null,
      images: {
        mainImage: 'images/module2/lesson15/final-assessment.jpg',
        slideImages: [
          {
            slideId: 'final-assessment',
            imageUrl: 'images/module2/lesson15/comprehensive-ecg-strip.jpg',
            imageAlt: 'Comprehensive ECG showing sinus arrest with escape rhythm',
            caption: 'Apply all your knowledge to this final assessment'
          }
        ]
      },
      content: {
        question: 'A 68-year-old patient on metoprolol presents with dizziness. This ECG shows normal sinus rhythm interrupted by a 5.2-second pause, followed by a junctional escape beat, then resumption of sinus rhythm. Patient reports similar episodes 3-4 times daily. What is your management plan?',
        options: [
          'Increase metoprolol dose to prevent episodes',
          'Reassure patient this is normal aging',
          'Stop metoprolol and consider pacemaker evaluation',
          'Prescribe antiarrhythmic medication'
        ],
        correctAnswer: 2,
        explanation: 'Perfect! This is symptomatic sinus arrest (>3 seconds) likely caused by metoprolol. With frequent episodes causing symptoms, the medication should be stopped if possible, and pacemaker evaluation is indicated since symptoms correlate with pauses.',
        hint: '👴 Medication + symptoms + long pause = action needed!',
        completionMessage: 'Outstanding! 🎉 You\'ve achieved sinus arrest mastery! You can confidently identify, classify, and manage these critical rhythm disturbances. +50 XP! 🏆',
        retryMessage: 'Close! Remember: symptomatic pauses >3 seconds need intervention, especially when medication-related.',
        celebrationAnimation: 'heart-rescue-success'
      }
    }
  ],
  completed: false,
  attempts: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
