import { Lesson } from '@/types/learning';

export const optimizedLesson16: Lesson = {
  id: 'lesson-2-6-optimized',
  moduleId: 'module-2',
  title: "Complete Sick Sinus Syndrome Mastery",
  description: "Master sick sinus syndrome through 6 focused learning units: Foundation, Pathophysiology, Recognition, Classification, Differential Diagnosis, and Clinical Management - each with interactive content and assessments",
  order: 6,
  estimatedTime: 40,
  content: {
    type: 'mixed',
    introduction: "⚠️ Welcome to Sick Sinus Syndrome Mastery! Learn this critical cardiac condition through 6 progressive units with ECG analysis, case studies, and clinical decision-making. Each unit builds expertise for emergency recognition and management.",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your Learning Journey",
        content: "UNIT 1: Foundation → UNIT 2: Pathophysiology → UNIT 3: Recognition → UNIT 4: Classification → UNIT 5: Differential Diagnosis → UNIT 6: Clinical Management",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // ===============================================
      // 🎯 UNIT 1: SICK SINUS SYNDROME FOUNDATION (7 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: Sick Sinus Syndrome Foundation',
        content: 'Begin your critical care mastery! Understand what sick sinus syndrome is, why it\'s dangerous, and who\'s at risk. This foundation is essential for recognizing this life-threatening condition.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/bradycardia_35bpm_1.png',
        imageAlt: 'Sick sinus syndrome learning journey overview with warning indicators',
        hint: '⚠️ Critical condition requiring immediate recognition!',
        highlights: [
          'life-threatening condition',
          'why it\'s dangerous',
          'who\'s at risk'
        ],
        audio: {
          narrationUrl: 'audio/module2/lesson16/unit1-intro.mp3',
          autoPlay: false
        }
      },

      {
        id: 'sss-definition',
        title: 'What is Sick Sinus Syndrome?',
        content: 'Sick sinus syndrome (SSS) is a GROUP of serious rhythm disorders caused by sinus node dysfunction. It\'s NOT a single condition but a spectrum of problems affecting the heart\'s natural pacemaker, leading to dangerous bradycardias, pauses, and rhythm instability.',
        type: 'flashcard',
        layout: 'centered',
        backgroundColor: '#fff1f2',
        textColor: '#e11d48',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/bradycardia_42bpm_2.png',
        imageAlt: 'ECG showing sick sinus syndrome with irregular, slow rhythm',
        hint: '🚨 Group of disorders, not just one!',
        flashcardFront: 'What is Sick Sinus Syndrome?',
        flashcardBack: 'GROUP of serious rhythm disorders from sinus node dysfunction → dangerous bradycardias, pauses, rhythm instability'},

      {
        id: 'spectrum-overview',
        title: 'The SSS Spectrum',
        content: 'Sick sinus syndrome includes: Severe sinus bradycardia, Sinus pauses/arrests, Sinoatrial exit blocks, Tachy-brady syndrome (most dangerous), Chronotropic incompetence, Atrial fibrillation with slow response.',
        type: 'accordion',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/bradycardia_50bpm.png',
        imageAlt: 'Spectrum of sick sinus syndrome manifestations on ECG',
        hint: '📊 Multiple manifestations of the same disease!',
        accordionItems: [
          {
            title: '🐌 Severe Sinus Bradycardia',
            content: 'Heart rate <50 bpm with sinus rhythm. Often the first sign of SSS. May cause fatigue, dizziness, or exercise intolerance.'
          },
          {
            title: '⏸️ Sinus Pauses/Arrests',
            content: 'Prolonged periods without sinus node activity (>3 seconds). Can cause syncope or near-syncope episodes.'
          },
          {
            title: '🚫 Sinoatrial Exit Blocks',
            content: 'Sinus node fires but impulse blocked from reaching atria. Creates predictable pause patterns different from arrest.'
          },
          {
            title: '⚡ Tachy-Brady Syndrome',
            content: 'Most dangerous form: alternates between fast arrhythmias (like A-fib) and slow rhythms. High stroke risk.'
          }
        ],
        audio: {
          narrationUrl: 'audio/module2/lesson16/spectrum-overview.mp3',
          autoPlay: false
        }
      },

      {
        id: 'who-gets-sss',
        title: 'Who Develops SSS?',
        content: 'Primary risk factors: Age >65 years (most common), Ischemic heart disease, Cardiomyopathy, Cardiac surgery/trauma, Medications (beta-blockers, calcium blockers), Infiltrative diseases (amyloidosis, sarcoidosis).',
        type: 'tabs',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/bradycardia_52bpm_4.png',
        imageAlt: 'Risk factors and demographics for sick sinus syndrome development',
        hint: '👥 Age is the biggest risk factor!',
        tabs: [
          {
            title: '👴 Age Factor',
            content: 'Most common in patients >65 years. Degenerative changes in sinus node with aging. Prevalence increases dramatically with advanced age.'
          },
          {
            title: '💔 Cardiac Causes',
            content: 'Ischemic heart disease affecting sinus node blood supply. Cardiomyopathy causing structural changes. Previous cardiac surgery or trauma.'
          },
          {
            title: '💊 Medications',
            content: 'Beta-blockers, calcium channel blockers, digoxin, amiodarone. Anti-arrhythmic drugs. Always review medication history in SSS patients.'
          },
          {
            title: '🔬 Other Causes',
            content: 'Infiltrative diseases (amyloidosis, sarcoidosis). Collagen vascular diseases. Hypothyroidism or electrolyte imbalances.'
          }
        ]},

      {
        id: 'why-dangerous',
        title: 'Why SSS is Dangerous',
        content: 'Immediate dangers: Syncope and falls, Cardiac arrest from asystole, Stroke from poor perfusion, Heart failure from rhythm instability. Long-term risks: Progressive heart failure, Sudden cardiac death, Reduced quality of life.',
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/bradycardia_55bpm_5.png',
        imageAlt: 'Clinical complications and dangers of sick sinus syndrome',
        hint: '⚠️ Life-threatening complications require urgent action!',
        steps: [
          { 
            number: 1,
            title: 'Syncope & Falls',
            description: 'Sudden loss of consciousness from severe bradycardia or pauses. High risk of injury from falls. Emergency presentation common.',
            icon: '🏥'
          },
          { 
            number: 2,
            title: 'Cardiac Arrest Risk',
            description: 'Prolonged asystole can lead to cardiac arrest. Backup pacemakers may fail. Risk of sudden cardiac death.',
            icon: '💀'
          },
          { 
            number: 3,
            title: 'Stroke & Embolism',
            description: 'Poor cardiac output and rhythm instability increase stroke risk. Atrial fibrillation in tachy-brady syndrome adds embolic risk.',
            icon: '🧠'
          },
          { 
            number: 4,
            title: 'Heart Failure',
            description: 'Chronic rhythm instability leads to progressive heart failure. Reduced exercise tolerance and quality of life.',
            icon: '💔'
          }
        ]},

      {
        id: 'symptoms-overview',
        title: 'Classic SSS Symptoms',
        content: 'Cardinal symptoms: Syncope/near-syncope (most common), Fatigue and weakness, Dizziness, Palpitations (especially with tachy-brady), Exercise intolerance, Cognitive symptoms ("brain fog").',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/symptoms.jpg',
        imageAlt: 'Patient symptoms and presentation of sick sinus syndrome',
        hint: '😵 Syncope is the red flag symptom!'},

      {
        id: 'reversible-vs-permanent',
        title: 'Reversible vs Permanent SSS',
        content: 'Reversible causes: Medications (check first!), Electrolyte abnormalities, Hypothyroidism, Sleep apnea. Permanent causes: Age-related fibrosis, Ischemic damage, Infiltrative disease, Genetic mutations.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#854d0e',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/reversible-permanent.jpg',
        imageAlt: 'Comparison of reversible versus permanent causes of SSS',
        hint: '💊 Always check medications first!'},

      // ==================== UNIT 1 QUIZ: FOUNDATION ====================
      {
        id: 'unit1-foundation-quiz',
        title: '🎯 Unit 1 Quiz: SSS Foundation',
        content: "Test your knowledge of sick sinus syndrome fundamentals!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'slide',
        imageUrl: 'images/module2/lesson16/foundation-quiz.jpg',
        imageAlt: 'Sick sinus syndrome foundation quiz',
        hint: '🧠 Test your Unit 1 knowledge!',
        question: "What is the most common symptom of sick sinus syndrome?",
        options: [
          "Chest pain",
          "Shortness of breath",
          "Syncope or near-syncope",
          "Ankle swelling"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! Syncope (fainting) or near-syncope is the most common and concerning symptom of SSS, often resulting from bradycardia, pauses, or rhythm instability."},

      // ================================================
      // 🎯 UNIT 2: PATHOPHYSIOLOGY MECHANISMS (8 slides)
      // ================================================
      {
        id: 'unit2-intro',
        title: '🎯 Unit 2: Pathophysiology Mechanisms',
        content: 'Dive deep into HOW sick sinus syndrome develops! Understand sinus node anatomy, conduction system failure, and the cascade of events leading to rhythm disorders.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/pathophysiology-overview.jpg',
        imageAlt: 'Pathophysiology mechanisms overview',
        hint: '🔬 Understanding WHY helps predict WHEN!'},

      {
        id: 'sinus-node-anatomy',
        title: 'Sinus Node: The Master Pacemaker',
        content: 'Location: Right atrial wall near SVC, Size: Only 10-20mm long!, Cells: Specialized pacemaker cells, Blood supply: RCA (usually) or LCX, Innervation: Heavy autonomic control. When damaged, backup pacemakers take over - but they\'re slower and unreliable.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/sinus-node-anatomy.jpg',
        imageAlt: 'Anatomical diagram of sinus node location and structure',
        hint: '💓 Small but mighty - 20mm controls everything!'},

      {
        id: 'fibrosis-process',
        title: 'Age-Related Fibrosis',
        content: 'The primary mechanism: Normal aging → Collagen deposition → Fibrosis of conduction tissue → Loss of pacemaker cells → Conduction delays and blocks → Clinical SSS. This process is accelerated by ischemia, inflammation, and infiltrative diseases.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/fibrosis-process.jpg',
        imageAlt: 'Progressive fibrosis of sinus node tissue over time',
        hint: '🧓 Age + fibrosis = sick sinus!'},

      {
        id: 'ischemic-damage',
        title: 'Ischemic Mechanisms',
        content: 'Coronary disease effects: RCA occlusion → Sinus node ischemia → Acute SSS, Chronic ischemia → Progressive fibrosis → Gradual SSS, Reperfusion injury → Additional damage → Mixed SSS patterns.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/ischemic-damage.jpg',
        imageAlt: 'Ischemic damage to sinus node from coronary artery disease',
        hint: '🫀 Poor blood flow = poor pacemaker function!'},

      {
        id: 'medication-effects',
        title: 'Medication-Induced SSS',
        content: 'Common culprits: Beta-blockers (especially non-selective), Calcium channel blockers (verapamil, diltiazem), Antiarrhythmics (amiodarone, sotalol), Digoxin toxicity, Lithium (chronic use). Always the first thing to check and potentially reverse!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/medication-effects.jpg',
        imageAlt: 'Common medications causing iatrogenic sick sinus syndrome',
        hint: '💊 Check the med list first!'},

      {
        id: 'autonomic-dysfunction',
        title: 'Autonomic System Dysfunction',
        content: 'Normal: Sympathetic ↑HR, Parasympathetic ↓HR. In SSS: Blunted sympathetic response, Excessive vagal sensitivity, Loss of circadian rhythm, Chronotropic incompetence. The heart loses its ability to respond appropriately to physiologic demands.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/autonomic-dysfunction.jpg',
        imageAlt: 'Autonomic nervous system dysfunction in sick sinus syndrome',
        hint: '⚖️ Lost balance = lost rhythm control!'},

      {
        id: 'tachy-brady-mechanism',
        title: 'Tachy-Brady Mechanism',
        content: 'The dangerous cascade: Sick sinus → Inadequate rate → Atrial irritability → Atrial fibrillation → Fast rate → Sinus suppression → When A-fib stops → Long pause → Syncope! This is why tachy-brady is the most dangerous form.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#854d0e',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/tachy-brady-mechanism.jpg',
        imageAlt: 'Mechanism of tachy-brady syndrome showing cycle of arrhythmias',
        hint: '🔄 Vicious cycle of fast then dangerously slow!'},

      {
        id: 'compensatory-mechanisms',
        title: 'Failing Compensatory Mechanisms',
        content: 'When sinus fails, backup systems try to help: Atrial escape rhythms (60-80 bpm), Junctional escape (40-60 bpm), Ventricular escape (20-40 bpm). But these are unreliable, slower, and can\'t respond to physiologic needs - hence symptoms.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/compensatory-mechanisms.jpg',
        imageAlt: 'Hierarchy of backup pacemakers when sinus node fails',
        hint: '🆘 Backup systems aren\'t good enough!'},

      // ==================== UNIT 2 QUIZ: PATHOPHYSIOLOGY ====================
      {
        id: 'unit2-pathophysiology-quiz',
        title: '🎯 Unit 2 Quiz: Pathophysiology',
        content: "Test your understanding of SSS mechanisms!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'slide',
        imageUrl: 'images/module2/lesson16/pathophysiology-quiz.jpg',
        imageAlt: 'Pathophysiology quiz',
        hint: '🧠 Test your Unit 2 knowledge!',
        question: "What is the primary mechanism of age-related sick sinus syndrome?",
        options: [
          "Acute coronary occlusion",
          "Progressive fibrosis of conduction tissue",
          "Sudden autonomic failure",
          "Medication toxicity"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Progressive fibrosis and collagen deposition in the sinus node and conduction system is the primary mechanism of age-related SSS, leading to loss of pacemaker cells and conduction delays."},

      // ===============================================
      // 🎯 UNIT 3: ECG RECOGNITION PATTERNS (8 slides)
      // ===============================================
      {
        id: 'unit3-intro',
        title: '🎯 Unit 3: ECG Recognition Patterns',
        content: 'Master the ECG patterns that spell DANGER! Learn to recognize the various manifestations of SSS on ECG strips and become expert at emergency detection.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/recognition-overview.jpg',
        imageAlt: 'ECG recognition patterns overview',
        hint: '👁️ Pattern recognition saves lives!'},

      {
        id: 'severe-bradycardia-pattern',
        title: 'Severe Sinus Bradycardia',
        content: 'Key features: Rate <50 bpm (often <40), P waves present but slow, Normal P wave morphology, 1:1 P:QRS relationship, May have escape beats. Critical when: Symptomatic, Rate <40 bpm, Or with pauses.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/bradycardia_50bpm.png',
        imageAlt: 'ECG showing severe sinus bradycardia in sick sinus syndrome',
        hint: '🐌 Too slow to sustain life!'},

      {
        id: 'sinus-pause-arrest',
        title: 'Sinus Pause and Arrest',
        content: 'Sinus pause: Missing P-QRS cycles, Pause <3 seconds (usually). Sinus arrest: Missing cycles >3 seconds, May have escape beats, Life-threatening if prolonged. Measure: Count seconds of asystole, Document escape rhythms.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/sinus-pause-arrest.jpg',
        imageAlt: 'ECG showing sinus pauses and arrest with escape beats',
        hint: '⏸️ Pauses >3 seconds = emergency!'},

      {
        id: 'sa-exit-block',
        title: 'Sinoatrial Exit Block',
        content: 'Pattern recognition: Type I: Progressive PR interval lengthening, then dropped P wave. Type II: Fixed interval, sudden dropped P waves. Look for: Regular P-P intervals with sudden gaps, Mathematical relationship in dropped beats.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/sa-exit-block.jpg',
        imageAlt: 'ECG patterns of Type I and Type II sinoatrial exit block',
        hint: '🔢 Count the pattern - math doesn\'t lie!'},

      {
        id: 'tachy-brady-recognition',
        title: 'Tachy-Brady Pattern Recognition',
        content: 'The most dangerous pattern: Atrial fibrillation (fast, irregular), Sudden termination to sinus, Long pause (>3 seconds), Possible escape beats, Return to baseline rhythm. This pattern requires immediate intervention!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/tachy-brady-pattern.jpg',
        imageAlt: 'ECG showing classic tachy-brady syndrome pattern',
        hint: '⚡➡️⏸️ Fast to slow = most dangerous!'},

      {
        id: 'chronotropic-incompetence',
        title: 'Chronotropic Incompetence',
        content: 'Exercise testing reveals: Resting rate normal or slow, Minimal rate increase with exercise, <70% predicted max rate achieved, Symptoms during exertion, Normal when rate increases with pacing. Needs stress testing to diagnose!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/chronotropic-incompetence.jpg',
        imageAlt: 'Exercise stress test showing chronotropic incompetence',
        hint: '🏃‍♂️ Heart can\'t speed up when needed!'},

      {
        id: 'measurement-techniques',
        title: 'Critical Measurement Techniques',
        content: 'Essential measurements: Pause duration (count seconds), Escape interval timing, Rate variability analysis, P-P interval consistency, QRS escape morphology. Document: Longest pause, Symptoms during pauses, Response to interventions.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#854d0e',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/measurement-techniques.jpg',
        imageAlt: 'Techniques for measuring critical intervals in SSS',
        hint: '📏 Precise measurement guides treatment!'},

      {
        id: 'holter-findings',
        title: 'Holter Monitor Findings',
        content: 'Gold standard for SSS diagnosis: 24-48 hour monitoring, Captures intermittent events, Documents symptom correlation, Measures heart rate variability, Assesses circadian patterns. Key findings: Pauses >3 seconds, Max rate <90 bpm, Symptom-rhythm correlation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/holter-findings.jpg',
        imageAlt: 'Holter monitor results showing sick sinus syndrome patterns',
        hint: '📊 24 hours tells the whole story!'},

      // ==================== UNIT 3 QUIZ: RECOGNITION ====================
      {
        id: 'unit3-recognition-quiz',
        title: '🎯 Unit 3 Quiz: ECG Recognition',
        content: "Test your ECG pattern recognition skills!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'slide',
        imageUrl: 'images/module2/lesson16/recognition-quiz.jpg',
        imageAlt: 'ECG recognition quiz',
        hint: '🧠 Test your Unit 3 knowledge!',
        question: "What pause duration is considered dangerous in sick sinus syndrome?",
        options: [
          "Greater than 1 second",
          "Greater than 2 seconds", 
          "Greater than 3 seconds",
          "Greater than 5 seconds"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! Pauses greater than 3 seconds are considered dangerous and often symptomatic in sick sinus syndrome, requiring immediate evaluation and often urgent intervention."},

      // ================================================
      // 🎯 UNIT 4: SSS CLASSIFICATION SYSTEM (7 slides)
      // ================================================
      {
        id: 'unit4-intro',
        title: '🎯 Unit 4: SSS Classification System',
        content: 'Master the classification of sick sinus syndrome! Learn the different types, severity grading, and clinical categories that guide treatment decisions.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/classification-overview.jpg',
        imageAlt: 'SSS classification system overview',
        hint: '📂 Classification guides treatment!'},

      {
        id: 'type-1-intrinsic',
        title: 'Type 1: Intrinsic SSS',
        content: 'Primary sinus node disease: Age-related fibrosis, Ischemic damage, Infiltrative disease, Genetic mutations. Characteristics: Persistent abnormalities, Progressive worsening, Usually requires permanent pacing, Poor response to medications.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/type1-intrinsic.jpg',
        imageAlt: 'Intrinsic sick sinus syndrome characteristics and ECG patterns',
        hint: '🔴 Primary disease = permanent problem!'},

      {
        id: 'type-2-extrinsic',
        title: 'Type 2: Extrinsic SSS',
        content: 'Secondary to external factors: Medications (most common), Electrolyte abnormalities, Hypothyroidism, Sleep apnea. Characteristics: Potentially reversible, Responds to cause correction, May not need permanent pacing, Good prognosis if reversed.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/type2-extrinsic.jpg',
        imageAlt: 'Extrinsic causes of sick sinus syndrome',
        hint: '🟡 Secondary causes = potentially fixable!'},

      {
        id: 'severity-grading',
        title: 'Severity Grading System',
        content: 'Mild SSS: Asymptomatic bradycardia, Pauses <3 seconds, Normal exercise tolerance. Moderate SSS: Mild symptoms, Pauses 3-5 seconds, Some exercise limitation. Severe SSS: Syncope, Pauses >5 seconds, Significant symptoms, Requires urgent intervention.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/severity-grading.jpg',
        imageAlt: 'Severity grading system for sick sinus syndrome',
        hint: '📊 Severity = urgency of treatment!'},

      {
        id: 'brady-only-form',
        title: 'Bradycardia-Only Form',
        content: 'Simple persistent bradycardia: Rate consistently <50 bpm, May have pauses, No tachycardia episodes, Progressive symptoms, Usually in elderly. Management: Often needs pacing, Rate-responsive pacing preferred, Good prognosis with pacing.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/brady-only.jpg',
        imageAlt: 'Bradycardia-only form of sick sinus syndrome',
        hint: '🐌 Simple slow, but still serious!'},

      {
        id: 'tachy-brady-form',
        title: 'Tachy-Brady Form (Most Dangerous)',
        content: 'Alternating fast and slow: Atrial fibrillation episodes, Followed by long pauses, Most symptomatic form, Highest syncope risk, Most complex management. Treatment: Often needs pacing PLUS anticoagulation, Rate and rhythm control, Highest mortality if untreated.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/tachy-brady-form.jpg',
        imageAlt: 'Tachy-brady form showing alternating rhythms',
        hint: '⚡⏸️ Most dangerous form - dual threat!'},

      {
        id: 'chronotropic-form',
        title: 'Chronotropic Incompetence Form',
        content: 'Exercise intolerance pattern: Normal resting rate, Inadequate rate response to exercise, Fatigue with exertion, Normal structure, younger patients. Diagnosis: Requires exercise testing, <70% predicted max rate, May need rate-responsive pacing.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#854d0e',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/chronotropic-form.jpg',
        imageAlt: 'Chronotropic incompetence with exercise testing',
        hint: '🏃‍♂️ Can\'t keep up with life\'s demands!'},

      // ==================== UNIT 4 QUIZ: CLASSIFICATION ====================
      {
        id: 'unit4-classification-quiz',
        title: '🎯 Unit 4 Quiz: Classification',
        content: "Test your knowledge of SSS classification!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'slide',
        imageUrl: 'images/module2/lesson16/classification-quiz.jpg',
        imageAlt: 'Classification quiz',
        hint: '🧠 Test your Unit 4 knowledge!',
        question: "Which form of sick sinus syndrome is considered most dangerous?",
        options: [
          "Bradycardia-only form",
          "Chronotropic incompetence",
          "Tachy-brady syndrome",
          "Extrinsic SSS"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! Tachy-brady syndrome is the most dangerous form because it combines the risks of both tachycardia (stroke risk) and severe bradycardia/pauses (syncope/cardiac arrest risk)."},

      // ================================================
      // 🎯 UNIT 5: DIFFERENTIAL DIAGNOSIS (7 slides)
      // ================================================
      {
        id: 'unit5-intro',
        title: '🎯 Unit 5: Differential Diagnosis',
        content: 'Master the art of distinguishing SSS from other bradycardias! Learn the key differences that separate true sick sinus from other causes of slow heart rates.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/differential-overview.jpg',
        imageAlt: 'Differential diagnosis overview',
        hint: '🔍 Accurate diagnosis saves lives!'},

      {
        id: 'vs-normal-bradycardia',
        title: 'vs Normal Sinus Bradycardia',
        content: 'Normal bradycardia: Athletes, young adults, During sleep, Asymptomatic, Rate responds to exercise, No pauses. SSS: Symptomatic bradycardia, Poor exercise response, Associated pauses, Older patients, Progressive symptoms.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/normal_sinus_100bpm_5.png',
        imageAlt: 'Comparison of normal versus pathologic bradycardia',
        hint: '💪 Athletes are different from patients!'},

      {
        id: 'vs-av-blocks',
        title: 'vs AV Blocks',
        content: 'AV blocks: P waves present and regular, Problem is P-QRS relationship, PR intervals prolonged or blocked, Sinus rate often normal. SSS: Problem is P wave generation, Irregular P-P intervals, Normal AV conduction when P waves present.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/first_degree_av_block_60bpm_1.png',
        imageAlt: 'Comparison of sick sinus syndrome with AV blocks',
        hint: '🔗 AV blocks = connection problem, SSS = generation problem!'},

      {
        id: 'vs-medication-effects',
        title: 'vs Medication-Induced Bradycardia',
        content: 'Medication bradycardia: Temporal relationship to drug, Dose-dependent effect, Reversible with drug cessation, Usually predictable. SSS: May be medication-triggered, But underlying disease present, Doesn\'t always reverse, Progressive even off drugs.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/vs-medications.jpg',
        imageAlt: 'Distinguishing medication effects from intrinsic SSS',
        hint: '💊 Check timing and reversibility!'},

      {
        id: 'vs-hypothyroidism',
        title: 'vs Hypothyroidism',
        content: 'Hypothyroid bradycardia: Systemic symptoms (fatigue, cold, weight gain), Elevated TSH, Responsive to thyroid replacement, Usually reversible. SSS: Primarily cardiac symptoms, Normal thyroid function, Requires pacing if severe, Progressive disease.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/vs-hypothyroidism.jpg',
        imageAlt: 'Comparison of hypothyroid versus sick sinus bradycardia',
        hint: '🦋 Check TSH in every bradycardia!'},

      {
        id: 'vs-sleep-apnea',
        title: 'vs Sleep Apnea Bradycardia',
        content: 'Sleep apnea: Bradycardia during apneic episodes, Normal rates when awake, Cyclical pattern with breathing, Responds to CPAP treatment. SSS: Bradycardia independent of sleep, Present during waking hours, No respiratory correlation, Needs cardiac intervention.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/vs-sleep-apnea.jpg',
        imageAlt: 'Sleep apnea versus sick sinus syndrome patterns',
        hint: '😴 Timing and breathing patterns matter!'},

      {
        id: 'diagnostic-algorithm-sss',
        title: 'SSS Diagnostic Algorithm',
        content: 'Step 1: Symptomatic bradycardia? Step 2: Rule out reversible causes, Step 3: Document rhythm-symptom correlation, Step 4: Exercise testing if needed, Step 5: Consider electrophysiology study. All pointing to SSS = Consider pacemaker!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#854d0e',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/diagnostic-algorithm.jpg',
        imageAlt: 'Step-by-step diagnostic algorithm for SSS',
        hint: '✅ Systematic approach prevents misdiagnosis!'},

      // ==================== UNIT 5 QUIZ: DIFFERENTIAL DIAGNOSIS ====================
      {
        id: 'unit5-differential-quiz',
        title: '🎯 Unit 5 Quiz: Differential Diagnosis',
        content: "Test your differential diagnosis skills!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'slide',
        imageUrl: 'images/module2/lesson16/differential-quiz.jpg',
        imageAlt: 'Differential diagnosis quiz',
        hint: '🧠 Test your Unit 5 knowledge!',
        question: "What is the key difference between sick sinus syndrome and AV block?",
        options: [
          "Heart rate is faster in AV block",
          "SSS affects P wave generation; AV block affects P-QRS conduction",
          "AV block is more dangerous",
          "They cannot be differentiated"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! SSS is a problem with P wave generation (sinus node dysfunction), while AV block is a problem with conduction from atria to ventricles (normal P waves with conduction issues)."},

      // ===============================================
      // 🎯 UNIT 6: CLINICAL MANAGEMENT (7 slides)
      // ===============================================
      {
        id: 'unit6-intro',
        title: '🎯 Unit 6: Clinical Management',
        content: 'Master the management of sick sinus syndrome! Learn emergency treatment, pacemaker indications, medication management, and long-term care strategies.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/management-overview.jpg',
        imageAlt: 'Clinical management overview',
        hint: '⚕️ Management saves lives!'},

      {
        id: 'emergency-management',
        title: 'Emergency Management',
        content: 'Immediate assessment: Check symptoms and vital signs, Document rhythm and pauses, Identify reversible causes. Acute treatment: Atropine 0.5-1mg IV (may not work), Transcutaneous pacing if severe, Temporary transvenous pacing, Avoid beta-blockers/CCBs.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/emergency-management.jpg',
        imageAlt: 'Emergency management protocols for SSS',
        hint: '🚨 Atropine often doesn\'t work in SSS!'},

      {
        id: 'pacemaker-indications',
        title: 'Pacemaker Indications (Class I)',
        content: 'Definite indications: Symptomatic bradycardia, Pauses >3 seconds with symptoms, Chronotropic incompetence with symptoms, Tachy-brady syndrome. Consider (Class II): Asymptomatic pauses >3 seconds, Bradycardia with medications needed for other conditions.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/pacemaker-indications.jpg',
        imageAlt: 'Pacemaker indications for sick sinus syndrome',
        hint: '🔋 Symptoms + SSS = pacemaker needed!'},

      {
        id: 'pacemaker-type-selection',
        title: 'Pacemaker Type Selection',
        content: 'Single chamber (AAIR): Sinus node disease only, Normal AV conduction, Rate-responsive preferred. Dual chamber (DDDR): Most common choice, Sinus node + potential AV disease, Maintains AV synchrony, Rate-responsive capability.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/pacemaker-types.jpg',
        imageAlt: 'Different pacemaker types for SSS management',
        hint: '🔧 DDDR is usually the best choice!'},

      {
        id: 'tachy-brady-management',
        title: 'Tachy-Brady Management',
        content: 'Complex dual therapy: Pacemaker first (prevents pauses), Then treat tachycardia safely, Anticoagulation for A-fib, Rate or rhythm control possible, Beta-blockers safe with pacemaker backup. Sequence matters - pace first, then treat fast rhythms!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/tachy-brady-management.jpg',
        imageAlt: 'Management strategy for tachy-brady syndrome',
        hint: '🔄 Pace first, then control the fast rhythms!'},

      {
        id: 'medication-considerations',
        title: 'Medication Considerations',
        content: 'Avoid if no pacemaker: Beta-blockers, Calcium channel blockers, Antiarrhythmics (class I, III). Safe with pacemaker: All antiarrhythmics, Rate control agents, Anticoagulants. Always: Correct electrolytes, Treat thyroid disease, Review ALL medications.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/medications.jpg',
        imageAlt: 'Medication considerations in SSS management',
        hint: '💊 Pacemaker = safety net for meds!'},

      {
        id: 'long-term-prognosis',
        title: 'Long-Term Prognosis',
        content: 'With appropriate treatment: Excellent symptom relief with pacing, Normal life expectancy, Good functional capacity, Low complication rates. Without treatment: Progressive symptoms, Increased fall risk, Possible sudden death, Reduced quality of life.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#854d0e',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/prognosis.jpg',
        imageAlt: 'Long-term prognosis with and without treatment',
        hint: '🎯 Treatment works - excellent prognosis!'},

      // ==================== UNIT 6 QUIZ: CLINICAL MANAGEMENT ====================
      {
        id: 'unit6-management-quiz',
        title: '🎯 Unit 6 Quiz: Clinical Management',
        content: "Test your management knowledge!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'slide',
        imageUrl: 'images/module2/lesson16/management-quiz.jpg',
        imageAlt: 'Clinical management quiz',
        hint: '🧠 Test your Unit 6 knowledge!',
        question: "What is the definitive treatment for symptomatic sick sinus syndrome?",
        options: [
          "Atropine administration",
          "Beta-blocker therapy",
          "Permanent pacemaker implantation",
          "Calcium channel blocker therapy"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! Permanent pacemaker implantation is the definitive treatment for symptomatic sick sinus syndrome. Atropine is often ineffective, and beta-blockers/CCBs are contraindicated without pacemaker backup."},

      // Final Integration Slide
      {
        id: 'sss-mastery-complete',
        title: '🏆 Sick Sinus Syndrome Mastery Complete!',
        content: 'Outstanding! You\'ve mastered all 6 units of sick sinus syndrome management. You understand the pathophysiology, can recognize ECG patterns, classify severity, differentiate from other conditions, and know the complete management strategy. You\'re ready for critical cardiac care!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: 'images/module2/lesson16/sss-mastery-complete.jpg',
        imageAlt: 'Completion celebration - sick sinus syndrome mastery achieved',
        hint: '🎉 You\'re now a SSS expert - ready to save lives!',
        audio: {
          narrationUrl: 'audio/module2/lesson16/sss-mastery-complete.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "🏆 Congratulations! You've mastered sick sinus syndrome through 6 comprehensive units! You understand it's a serious condition requiring emergency recognition, know the complex pathophysiology, can identify ECG patterns, classify severity, differentiate from other conditions, and apply complete management strategies including pacemaker therapy.",
    keyPoints: [
      "Sick sinus syndrome is a spectrum of serious sinus node dysfunction disorders - not a single condition",
      "Most dangerous form is tachy-brady syndrome with alternating fast/slow rhythms and pauses",
      "Pauses >3 seconds with symptoms are dangerous and require immediate intervention",
      "Age-related fibrosis is the primary mechanism, but always check for reversible causes first",
      "Symptomatic SSS requires permanent pacemaker - it's the definitive treatment",
      "Tachy-brady needs pacemaker first, then safe treatment of tachycardia with anticoagulation",
      "Excellent prognosis with appropriate treatment, but progressive and dangerous if untreated"
    ],
    resources: [
      {
        title: "Advanced SSS Recognition and Management",
        url: "https://youtube.com/watch?v=sick_sinus_syndrome_mastery",
        type: "video"
      },
      {
        title: "Pacemaker Indications in SSS",
        url: "https://example.com/pacemaker-guidelines",
        type: "article"
      },
      {
        title: "Emergency Management of Bradycardia",
        url: "https://example.com/emergency-bradycardia",
        type: "tool"
      }
    ]
  },
  tasks: [
    // Tasks will be automatically generated from quiz slides
    {
      id: 'sick-sinus-syndrome-mastery-assessment',
      type: 'quiz',
      xp: 60,
      audio: null,
      images: {
        mainImage: 'images/module2/lesson16/final-assessment.jpg',
        slideImages: [
          {
            slideId: 'final-assessment',
            imageUrl: 'images/module2/lesson16/comprehensive-sss-case.jpg',
            imageAlt: 'Comprehensive sick sinus syndrome case with multiple ECG strips',
            caption: 'Apply all your SSS knowledge to this critical case'
          }
        ]
      },
      content: {
        question: 'A 78-year-old patient presents with syncope. ECG shows periods of atrial fibrillation at 150 bpm alternating with sinus bradycardia at 35 bpm and 4-second pauses. Patient takes no medications. What is your immediate management?',
        options: [
          'Start beta-blocker for rate control',
          'Cardiovert the atrial fibrillation immediately',
          'Arrange urgent temporary pacing, then permanent pacemaker',
          'Discharge home with Holter monitor'
        ],
        correctAnswer: 2,
        explanation: 'Perfect! This is classic tachy-brady syndrome - the most dangerous form of SSS. The patient needs urgent temporary pacing for the dangerous pauses, followed by permanent pacemaker implantation. Only then can the atrial fibrillation be safely treated. Never use rate-slowing drugs without pacemaker backup in SSS!',
        hint: '⚡⏸️ Tachy-brady + syncope + long pauses = URGENT intervention needed!',
        completionMessage: 'Outstanding! 🎉 You\'ve achieved sick sinus syndrome mastery! You can recognize emergency presentations and know the life-saving management strategies. +60 XP! 🏆',
        retryMessage: 'Remember: Symptomatic SSS with dangerous pauses requires immediate pacing intervention before any other treatments.',
        celebrationAnimation: 'critical-care-hero'
      }
    }
  ],
  completed: false,
  attempts: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
