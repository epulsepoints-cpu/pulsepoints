import { Lesson } from '../types/learning';

export const optimizedLesson38: Lesson = {
  id: 'lesson-4-10-optimized',
  moduleId: 'module-4',
  title: "Complete Heart Block Mastery",
  description: "Master complete heart block (third-degree AV block) through 6 focused learning units with enhanced interactive elements: Pathophysiology foundations, clinical presentation with audio, ECG recognition, hemodynamic effects with audio, management protocols, and advanced scenarios with celebration audio",
  order: 10,
  estimatedTime: 45,
  content: {
    type: 'mixed',
    introduction: "🎯 Welcome to Complete Heart Block Mastery! Master third-degree AV block through 6 progressive units with enhanced interactive elements, strategic audio, and comprehensive clinical training.",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your Complete Heart Block Learning Journey",
        content: "UNIT 1: Pathophysiology Foundations → UNIT 2: Clinical Presentation + Audio → UNIT 3: ECG Recognition → UNIT 4: Hemodynamic Effects + Audio → UNIT 5: Management Protocols → UNIT 6: Advanced Scenarios + Celebration Audio",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // ===============================================
      // 🎯 UNIT 1: PATHOPHYSIOLOGY FOUNDATIONS (7 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: Pathophysiology Foundations',
        content: 'Master the pathophysiology of complete heart block! Understand why AV conduction fails completely.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/ecg/ecg_dataset_clean/3AVB_third_degree_AV_block/clean_07688_third degree AV block.png',
        hint: '🚫 Complete AV conduction failure!'
      },
      
      {
        id: 'chb-definition-flashcard',
        title: '🧠 Complete Heart Block Definition',
        content: 'Understanding complete heart block pathophysiology',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🚫',
          question: 'What defines complete (third-degree) heart block?',
          answer: 'Complete absence of AV conduction. No impulses from atria reach ventricles. Atria and ventricles beat independently with separate pacemakers. P waves and QRS complexes have no relationship.',
          imageUrl: '/ecg/ecg_dataset_clean/3AVB_third_degree_AV_block/clean_08210_third degree AV block.png'
        },
        hint: '🧠 Flip to understand complete block!'
      },

      {
        id: 'anatomical-levels',
        title: 'Anatomical Levels of Block',
        content: 'AV NODAL: Block at AV node level. Narrow QRS escape (40-60 bpm). Better prognosis. HIS-PURKINJE: Block below AV node. Wide QRS escape (20-40 bpm). Worse prognosis, needs pacing.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson38/anatomical-levels.jpg',
        hint: '📍 Location determines prognosis!'
      },

      {
        id: 'etiology-steps',
        title: 'Complete Heart Block Etiology',
        content: 'Understanding causes of complete heart block',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Acute Myocardial Infarction',
            description: 'Inferior MI affects RCA supply to AV node. Anterior MI affects septal branches'
          },
          {
            number: 2,
            title: 'Degenerative Disease',
            description: 'Lev disease (calcific), Lenegre disease (primary fibrosis), aging processes'
          },
          {
            number: 3,
            title: 'Infiltrative Disorders',
            description: 'Sarcoidosis, amyloidosis, tumor infiltration, inflammatory conditions'
          },
          {
            number: 4,
            title: 'Drug Toxicity',
            description: 'Digitalis, beta-blockers, calcium channel blockers, antiarrhythmics'
          }
        ],
        hint: '👣 Multiple pathways to complete block!'
      },

      {
        id: 'congenital-vs-acquired-tabs',
        title: 'Congenital vs Acquired CHB',
        content: 'Distinguish congenital from acquired complete heart block',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        tabs: [
          {
            title: 'Congenital CHB',
            content: 'Present at birth. Often associated with maternal anti-Ro/SSA antibodies. Usually junctional escape (narrow QRS). Better long-term prognosis if adequate rate.',
            icon: '👶'
          },
          {
            title: 'Acquired CHB',
            content: 'Develops later in life. Multiple etiologies (ischemic, degenerative, infiltrative). Often requires pacing. Prognosis depends on underlying disease.',
            icon: '⏰'
          },
          {
            title: 'Clinical Implications',
            content: 'Congenital: Monitor growth, exercise capacity. Acquired: Urgent evaluation, likely pacing needed. Both require cardiology follow-up.',
            icon: '👩‍⚕️'
          }
        ],
        hint: '📑 Age of onset matters!'
      },

      {
        id: 'escape-rhythm-hierarchy-accordion',
        title: 'Escape Rhythm Hierarchy',
        content: 'Understanding backup pacemaker systems',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Junctional Escape (AV Node Block)',
            content: 'Rate: 40-60 bpm. QRS: Narrow (usually). Origin: AV junction. Prognosis: Better. May not need immediate pacing.',
            icon: '🔶'
          },
          {
            title: 'Ventricular Escape (Infranodal Block)',
            content: 'Rate: 20-40 bpm. QRS: Wide (>120ms). Origin: Ventricles. Prognosis: Poor. Usually needs urgent pacing.',
            icon: '🔸'
          },
          {
            title: 'No Escape Rhythm',
            content: 'Ventricular standstill. Life-threatening emergency. Requires immediate pacing or CPR. Very poor prognosis without intervention.',
            icon: '⛑️'
          }
        ],
        hint: '🎯 Click to explore backup systems!'
      },

      {
        id: 'unit1-quiz',
        title: 'Unit 1 Quiz: Pathophysiology Check',
        content: 'Test your understanding of CHB pathophysiology!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'Complete heart block with wide QRS escape rhythm indicates:',
        options: [
          'AV nodal level block with good prognosis',
          'Infranodal block requiring urgent pacing',
          'Functional block that will resolve',
          'Normal compensatory mechanism'
        ],
        correctAnswer: 1,
        explanation: 'Correct! Wide QRS escape rhythm indicates infranodal (His-Purkinje) block with unreliable ventricular escape, requiring urgent pacing due to poor prognosis.',
        imageUrl: '/lessonimages/module4/lesson38/unit1-quiz.jpg',
        hint: '🎯 Think about escape rhythm location!'
      },

      // ===============================================
      // 🎯 UNIT 2: CLINICAL PRESENTATION + AUDIO (8 slides)
      // ===============================================
      {
        id: 'unit2-intro',
        title: '🎯 Unit 2: Clinical Presentation + Audio',
        content: 'Master clinical presentation of complete heart block! Learn to recognize symptoms and physical findings.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson38/clinical-overview.jpg',
        hint: '👩‍⚕️ Recognize clinical patterns!'
      },

      {
        id: 'clinical-presentation-audio',
        title: '🎧 Clinical Presentation Guide',
        content: 'Listen to detailed explanation of complete heart block clinical presentation',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module4/lesson38/clinical-presentation.mp3',
        hint: '🎧 Audio guide to clinical findings!'
      },

      {
        id: 'symptom-severity-accordion',
        title: 'Symptom Severity Spectrum',
        content: 'Explore the range of CHB clinical presentations',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Asymptomatic (Compensated)',
            content: 'Adequate escape rate (≥40 bpm). Good functional capacity. May be discovered incidentally. Still needs cardiology evaluation.',
            icon: '😌'
          },
          {
            title: 'Mildly Symptomatic',
            content: 'Fatigue, weakness, exercise intolerance. Bradycardia-related symptoms. Reduced quality of life. Pacing usually beneficial.',
            icon: '😟'
          },
          {
            title: 'Severely Symptomatic',
            content: 'Syncope, presyncope, heart failure. Stokes-Adams attacks. Hemodynamic compromise. Urgent pacing required.',
            icon: '😰'
          }
        ],
        hint: '🎯 Click to assess symptom severity!'
      },

      {
        id: 'stokes-adams-flashcard',
        title: '🧠 Stokes-Adams Attacks',
        content: 'Understanding syncope in complete heart block',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🚨',
          question: 'What are Stokes-Adams attacks in CHB?',
          answer: 'Sudden syncopal episodes due to ventricular standstill or very slow escape rhythms. Caused by failure of escape pacemaker. Can be life-threatening. Indication for urgent pacing.',
          imageUrl: '/lessonimages/module4/lesson38/stokes-adams.jpg'
        },
        hint: '🧠 Flip to understand syncope!'
      },

      {
        id: 'physical-examination',
        title: 'Physical Examination Findings',
        content: 'PULSE: Slow, regular (escape rhythm). JUGULAR VEINS: Cannon A waves (intermittent). HEART SOUNDS: Variable S1 intensity. BLOOD PRESSURE: May be normal or low depending on compensation.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson38/physical-exam.jpg',
        hint: '👩‍⚕️ Classic physical findings!'
      },

      {
        id: 'cannon-waves-explanation',
        title: 'Cannon A Waves Physiology',
        content: 'Large jugular venous waves when atrium contracts against closed tricuspid valve. Occur when P wave coincides with QRS. Pathognomonic finding in AV dissociation. May be intermittent in CHB.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson38/cannon-waves.jpg',
        hint: '🌊 Diagnostic physical finding!'
      },

      {
        id: 'functional-capacity-tabs',
        title: 'Functional Capacity Assessment',
        content: 'Assess functional impact of complete heart block',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        tabs: [
          {
            title: 'NYHA Class I',
            content: 'No symptoms with ordinary activity. May have adequate chronotropic response. Consider pacing for optimal QOL.',
            icon: '1️⃣'
          },
          {
            title: 'NYHA Class II-III',
            content: 'Symptoms with moderate activity. Exercise intolerance developing. Clear indication for pacemaker therapy.',
            icon: '2️⃣'
          },
          {
            title: 'NYHA Class IV',
            content: 'Symptoms at rest. Severe functional limitation. Urgent pacing required. May have heart failure.',
            icon: '4️⃣'
          }
        ],
        hint: '📑 Assess functional impact!'
      },

      {
        id: 'unit2-quiz',
        title: 'Unit 2 Quiz: Clinical Presentation',
        content: 'Test your clinical recognition skills!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'Cannon A waves in CHB are caused by:',
        options: [
          'Atrial contraction against closed AV valves',
          'Ventricular contraction against closed semilunar valves',
          'Increased venous return',
          'Tricuspid regurgitation'
        ],
        correctAnswer: 0,
        explanation: 'Correct! Cannon A waves occur when the atrium contracts against closed AV valves during AV dissociation, creating large jugular venous waves.',
        imageUrl: '/lessonimages/module4/lesson38/unit2-quiz.jpg',
        hint: '🎯 Think about AV dissociation!'
      },

      // ===============================================
      // 🎯 UNIT 3: ECG RECOGNITION (7 slides)  
      // ===============================================
      {
        id: 'unit3-intro',
        title: '🎯 Unit 3: ECG Recognition',
        content: 'Master ECG recognition of complete heart block! Learn diagnostic criteria and pattern variations.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/ecg/ecg_dataset_clean/3AVB_third_degree_AV_block/clean_10505_third degree AV block.png',
        hint: '📈 Recognize CHB patterns!'
      },

      {
        id: 'diagnostic-criteria-steps',
        title: 'CHB Diagnostic Criteria',
        content: 'Step-by-step approach to diagnosing complete heart block',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Identify P Waves',
            description: 'Regular P waves at normal rate (60-100 bpm)'
          },
          {
            number: 2,
            title: 'Identify QRS Complexes',
            description: 'Regular QRS rhythm at slower rate (20-60 bpm)'
          },
          {
            number: 3,
            title: 'Assess AV Relationship',
            description: 'No consistent P-QRS relationship - complete dissociation'
          },
          {
            number: 4,
            title: 'Determine Escape Level',
            description: 'Narrow QRS = junctional. Wide QRS = ventricular escape'
          }
        ],
        hint: '👣 Systematic CHB recognition!'
      },

      {
        id: 'junctional-vs-ventricular-tabs',
        title: 'Junctional vs Ventricular Escape',
        content: 'Distinguish escape rhythm levels in CHB',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: 'Junctional Escape CHB',
            content: 'QRS: Narrow (<120ms). Rate: 40-60 bpm. Block level: AV node. Prognosis: Better. May tolerate better.',
            icon: '🔶'
          },
          {
            title: 'Ventricular Escape CHB',
            content: 'QRS: Wide (>120ms). Rate: 20-40 bpm. Block level: His-Purkinje. Prognosis: Worse. Usually needs pacing.',
            icon: '🔸'
          },
          {
            title: 'Clinical Correlation',
            content: 'Narrow escape: May defer pacing if asymptomatic. Wide escape: Usually symptomatic, needs pacing urgently.',
            icon: '👩‍⚕️'
          }
        ],
        hint: '📑 Escape level determines urgency!'
      },

      {
        id: 'rate-variations-accordion',
        title: 'Escape Rate Variations',
        content: 'Understanding escape rhythm rate patterns',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Fast Junctional (50-60 bpm)',
            content: 'Better hemodynamic tolerance. May be asymptomatic. Consider pacing for optimal function. Monitor for progression.',
            icon: '🏃'
          },
          {
            title: 'Slow Junctional (40-50 bpm)',
            content: 'Moderate symptoms likely. Exercise intolerance common. Usually benefits from pacing. Good response expected.',
            icon: '🚶'
          },
          {
            title: 'Ventricular (<40 bpm)',
            content: 'High symptom burden. Poor exercise tolerance. Urgent pacing indicated. May have Stokes-Adams attacks.',
            icon: '🐌'
          }
        ],
        hint: '🎯 Click to understand rate impact!'
      },

      {
        id: 'differential-diagnosis-flashcard',
        title: '🧠 CHB Differential Diagnosis',
        content: 'Distinguish CHB from other bradycardias',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🔍',
          question: 'How do you differentiate CHB from severe second-degree AV block?',
          answer: 'CHB: No P waves conduct, complete AV dissociation. Severe 2nd degree: Some P waves still conduct occasionally, not complete dissociation. CHB has constant P-QRS independence.',
          imageUrl: '/ecg/ecg_dataset_clean/3AVB_third_degree_AV_block/clean_16271_third degree AV block.png'
        },
        hint: '🧠 Flip for differential diagnosis!'
      },

      {
        id: 'pacing-artifacts',
        title: 'Paced CHB Recognition',
        content: 'VENTRICULAR PACING: Pacing spikes before wide QRS. AV SEQUENTIAL: A-spikes before P waves, V-spikes before QRS. DUAL CHAMBER: Normal AV synchrony restored with appropriate timing.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson38/paced-chb.jpg',
        hint: '⚡ Paced rhythm patterns!'
      },

      {
        id: 'unit3-quiz',
        title: 'Unit 3 Quiz: ECG Recognition',
        content: 'Test your ECG diagnostic skills!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'In complete heart block, the relationship between P waves and QRS complexes is:',
        options: [
          'Fixed but prolonged PR interval',
          'Variable PR intervals with some conduction',
          'Complete independence with no relationship',
          'Retrograde P waves after each QRS'
        ],
        correctAnswer: 2,
        explanation: 'Correct! Complete heart block shows complete independence between P waves and QRS complexes with no consistent relationship or conduction.',
        imageUrl: '/lessonimages/module4/lesson38/unit3-quiz.jpg',
        hint: '🎯 Think about complete dissociation!'
      },

      // ===============================================
      // 🎯 UNIT 4: HEMODYNAMIC EFFECTS + AUDIO (7 slides)
      // ===============================================
      {
        id: 'unit4-intro',
        title: '🎯 Unit 4: Hemodynamic Effects + Audio',
        content: 'Master hemodynamic consequences of complete heart block! Understand cardiovascular physiology impact.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson38/hemodynamic-overview.jpg',
        hint: '💓 Understand circulatory impact!'
      },

      {
        id: 'hemodynamic-audio',
        title: '🎧 Hemodynamic Effects Analysis',
        content: 'Listen to detailed explanation of CHB hemodynamic consequences',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module4/lesson38/hemodynamic-effects.mp3',
        hint: '🎧 Audio guide to hemodynamic impact!'
      },

      {
        id: 'cardiac-output-impact',
        title: 'Cardiac Output Consequences',
        content: 'HEART RATE: Severely reduced (20-60 bpm). STROKE VOLUME: Initially increases to compensate. CARDIAC OUTPUT: CO = HR × SV, usually reduced overall. COMPENSATION: Limited by structural heart disease.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson38/cardiac-output.jpg',
        hint: '📊 CO = HR × SV relationship!'
      },

      {
        id: 'compensatory-mechanisms-tabs',
        title: 'Compensatory Mechanisms',
        content: 'Physiologic responses to bradycardia',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: 'Frank-Starling Mechanism',
            content: 'Increased ventricular filling time. Greater preload and stroke volume. Compensates for slow heart rate. Limited by heart failure.',
            icon: '💪'
          },
          {
            title: 'Sympathetic Activation',
            content: 'Increased contractility and peripheral vasoconstriction. Cannot increase AV conduction in CHB. May improve escape rate slightly.',
            icon: '⚡'
          },
          {
            title: 'Ventricular Remodeling',
            content: 'Chronic volume overload from increased stroke volume. May lead to LV dilation and dysfunction. Indicates need for pacing.',
            icon: '🏗️'
          }
        ],
        hint: '📑 Body\'s adaptation attempts!'
      },

      {
        id: 'exercise-response-accordion',
        title: 'Exercise Response in CHB',
        content: 'Understanding exercise limitations',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Normal Exercise Response',
            content: 'Heart rate increases 2-3 fold. Cardiac output increases proportionally. Adequate oxygen delivery to tissues.',
            icon: '🏃‍♂️'
          },
          {
            title: 'CHB Exercise Response',
            content: 'Heart rate cannot increase (fixed escape rate). Stroke volume limited by filling. Cardiac output inadequate for demand.',
            icon: '😓'
          },
          {
            title: 'Clinical Consequences',
            content: 'Exercise intolerance and fatigue. Dyspnea with minimal exertion. Quality of life significantly impaired.',
            icon: '📉'
          }
        ],
        hint: '🎯 Click to understand exercise impact!'
      },

      {
        id: 'heart-failure-development-flashcard',
        title: '🧠 Heart Failure in CHB',
        content: 'Understanding CHB-related heart failure',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '💔',
          question: 'How does CHB lead to heart failure?',
          answer: 'Chronic bradycardia → Increased stroke volume → Volume overload → Ventricular dilation → Reduced ejection fraction → Heart failure. Pacing can reverse this process if done early.',
          imageUrl: '/lessonimages/module4/lesson38/heart-failure.jpg'
        },
        hint: '🧠 Flip to understand HF development!'
      },

      {
        id: 'unit4-quiz',
        title: 'Unit 4 Quiz: Hemodynamic Effects',
        content: 'Test your understanding of hemodynamic consequences!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'The primary compensatory mechanism in early CHB is:',
        options: [
          'Increased heart rate through sympathetic stimulation',
          'Increased stroke volume via Frank-Starling mechanism',
          'Peripheral vasoconstriction only',
          'Decreased metabolic demand'
        ],
        correctAnswer: 1,
        explanation: 'Correct! The Frank-Starling mechanism increases stroke volume through enhanced ventricular filling, partially compensating for the slow heart rate in CHB.',
        imageUrl: '/lessonimages/module4/lesson38/unit4-quiz.jpg',
        hint: '🎯 Think about stroke volume compensation!'
      },

      // ===============================================
      // 🎯 UNIT 5: MANAGEMENT PROTOCOLS (6 slides)
      // ===============================================
      {
        id: 'unit5-intro',
        title: '🎯 Unit 5: Management Protocols',
        content: 'Master management protocols for complete heart block! Learn acute and chronic treatment strategies.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson38/management-overview.jpg',
        hint: '👩‍⚕️ Evidence-based management!'
      },

      {
        id: 'acute-management-accordion',
        title: 'Acute CHB Management',
        content: 'Emergency management of newly diagnosed CHB',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Hemodynamically Stable',
            content: 'Cardiology consultation. Transcutaneous pacing pads. Monitor closely. Avoid medications that suppress escape rhythm.',
            icon: '✅'
          },
          {
            title: 'Hemodynamically Unstable',
            content: 'Immediate transcutaneous pacing. Atropine trial (may help if nodal block). Prepare for transvenous pacing.',
            icon: '🚨'
          },
          {
            title: 'Cardiac Arrest/Asystole',
            content: 'ACLS protocol. Immediate pacing if available. Epinephrine. Consider reversible causes (drugs, electrolytes).',
            icon: '⛑️'
          }
        ],
        hint: '🎯 Click for emergency protocols!'
      },

      {
        id: 'pacing-indications-tabs',
        title: 'Pacemaker Indications',
        content: 'Evidence-based indications for permanent pacing',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: 'Class I (Definite)',
            content: 'Symptomatic CHB. Asymptomatic CHB with periods of asystole ≥3 seconds. CHB with escape rate <40 bpm.',
            icon: '1️⃣'
          },
          {
            title: 'Class IIa (Reasonable)',
            content: 'Asymptomatic CHB with escape rate >40 bpm. CHB with cardiomegaly or LV dysfunction.',
            icon: '2️⃣'
          },
          {
            title: 'Class III (Not Indicated)',
            content: 'Asymptomatic congenital CHB with adequate rate and function. Drug-induced CHB expected to resolve.',
            icon: '3️⃣'
          }
        ],
        hint: '📑 Evidence-based pacing decisions!'
      },

      {
        id: 'temporary-pacing-methods',
        title: 'Temporary Pacing Methods',
        content: 'TRANSCUTANEOUS: Non-invasive, immediate. Painful, short-term only. TRANSVENOUS: Invasive but reliable. Bridge to permanent device. EPICARDIAL: Surgical placement, post-operative use.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson38/temporary-pacing.jpg',
        hint: '⚡ Temporary pacing options!'
      },

      {
        id: 'permanent-pacing-flashcard',
        title: '🧠 Permanent Pacemaker Selection',
        content: 'Choosing the right permanent pacing mode',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '⚡',
          question: 'What pacing mode is preferred for CHB with normal atrial function?',
          answer: 'DDD (dual chamber) pacing is preferred. Maintains AV synchrony, improves cardiac output, prevents pacemaker syndrome. VVI acceptable if contraindications to atrial lead.',
          imageUrl: '/lessonimages/module4/lesson38/permanent-pacing.jpg'
        },
        hint: '🧠 Flip for pacing mode selection!'
      },

      {
        id: 'unit5-quiz',
        title: 'Unit 5 Quiz: Management Check',
        content: 'Test your management knowledge!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'The most appropriate initial treatment for symptomatic CHB is:',
        options: [
          'Atropine administration',
          'Beta-blocker therapy',
          'Temporary pacing',
          'Calcium channel blocker'
        ],
        correctAnswer: 2,
        explanation: 'Correct! Temporary pacing is the most appropriate initial treatment for symptomatic CHB, providing immediate hemodynamic support while arranging permanent pacing.',
        imageUrl: '/lessonimages/module4/lesson38/unit5-quiz.jpg',
        hint: '🎯 Think about immediate needs!'
      },

      // ===============================================
      // 🎯 UNIT 6: ADVANCED SCENARIOS + CELEBRATION AUDIO (7 slides)
      // ===============================================
      {
        id: 'unit6-intro',
        title: '🎯 Unit 6: Advanced Scenarios',
        content: 'Congratulations! Complete your CHB mastery with advanced clinical scenarios and expert insights!',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson38/mastery-celebration.jpg',
        hint: '🏆 You have reached mastery level!'
      },

      {
        id: 'mastery-celebration-audio',
        title: '🎧 Mastery Celebration',
        content: 'Celebrate your complete heart block mastery achievement!',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module4/lesson38/mastery-celebration.mp3',
        hint: '🎧 Celebration time! You have mastered CHB!'
      },

      {
        id: 'special-populations-tabs',
        title: 'Special Population Considerations',
        content: 'CHB management in special populations',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        tabs: [
          {
            title: 'Pregnancy',
            content: 'Monitor maternal and fetal well-being. Pacing if symptomatic or rate <50 bpm. Consider mode of delivery. Fetal monitoring essential.',
            icon: '🤰'
          },
          {
            title: 'Athletes',
            content: 'Higher baseline fitness may mask symptoms. Exercise testing important. Consider pacing for return to competition.',
            icon: '🏃‍♂️'
          },
          {
            title: 'Elderly',
            content: 'Higher complication risk. Consider comorbidities. May have better tolerance but still need pacing if symptomatic.',
            icon: '👴'
          }
        ],
        hint: '📑 Special population needs!'
      },

      {
        id: 'post-mi-chb-accordion',
        title: 'Post-MI Complete Heart Block',
        content: 'Managing CHB in acute MI setting',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Inferior MI CHB',
            content: 'Usually AV nodal level. May be transient. Often resolves in days-weeks. Monitor closely, temporary pacing if symptomatic.',
            icon: '⬇️'
          },
          {
            title: 'Anterior MI CHB',
            content: 'Usually infranodal level. Often permanent. Associated with large infarct. High mortality, usually needs permanent pacing.',
            icon: '⬆️'
          },
          {
            title: 'Treatment Approach',
            content: 'Revascularization priority. Temporary pacing for hemodynamic support. Permanent pacing if persists >7 days.',
            icon: '🏥'
          }
        ],
        hint: '🎯 Click for MI-related CHB!'
      },

      {
        id: 'drug-induced-chb-flashcard',
        title: '🧠 Drug-Induced CHB',
        content: 'Managing medication-related complete heart block',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '💊',
          question: 'How do you manage drug-induced CHB?',
          answer: 'Identify and discontinue offending drug. Check drug levels (digitalis). Consider antidotes (digibind). Temporary pacing if symptomatic. Monitor for resolution. May be reversible.',
          imageUrl: '/lessonimages/module4/lesson38/drug-induced.jpg'
        },
        hint: '🧠 Flip for drug management!'
      },

      {
        id: 'long-term-outcomes',
        title: 'Long-Term Outcomes & Prognosis',
        content: 'PACED CHB: Excellent prognosis with appropriate device. Normal life expectancy in most cases. UNTREATED CHB: Poor prognosis, especially wide QRS escape. Sudden death risk high.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson38/long-term-outcomes.jpg',
        hint: '📈 Pacing transforms prognosis!'
      },

      {
        id: 'clinical-pearls',
        title: 'Expert Clinical Pearls',
        content: 'PEARL 1: Wide QRS escape = urgent pacing needed. PEARL 2: Cannon A waves confirm AV dissociation. PEARL 3: New CHB in MI = poor prognosis. PEARL 4: Drug-induced CHB may be reversible. PEARL 5: DDD pacing preferred in normal sinus.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson38/clinical-pearls.jpg',
        hint: '💎 Essential clinical wisdom!'
      },

      {
        id: 'unit6-final-quiz',
        title: 'Unit 6 Quiz: Mastery Validation',
        content: 'Validate your complete heart block mastery!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'The most important factor determining urgency of pacing in CHB is:',
        options: [
          'Patient age',
          'QRS width of escape rhythm',
          'Time since diagnosis',
          'Presence of atrial fibrillation'
        ],
        correctAnswer: 1,
        explanation: 'Perfect! QRS width of escape rhythm is most important - wide QRS indicates infranodal block with unreliable escape, requiring urgent pacing.',
        imageUrl: '/lessonimages/module4/lesson38/mastery-quiz.jpg',
        hint: '🎯 Think about escape rhythm reliability!'
      }
    ],
    summary: "🏆 Congratulations! You have achieved complete heart block mastery! You can recognize CHB patterns, understand hemodynamic consequences, manage patients appropriately, and handle complex clinical scenarios.",
    keyPoints: [
      "Complete heart block shows total AV dissociation with independent atrial and ventricular rhythms",
      "Wide QRS escape indicates infranodal block requiring urgent pacing",
      "Stokes-Adams attacks are syncopal episodes indicating need for immediate pacing",
      "Strategic audio reinforcement in Units 2, 4, and 6 enhanced learning retention",
      "DDD pacing is preferred for CHB with normal atrial function",
      "Post-MI CHB has different prognosis depending on infarct location"
    ],
    resources: [
      {
        title: "Complete Heart Block Mastery Reference",
        url: "https://ecgkid.com/complete-heart-block-guide",
        type: "video"
      }
    ]
  },
  tasks: [
    {
      id: 'final-chb-mastery-assessment',
      type: 'final-assessment',
      xp: 50,
      audio: {
        mainNarration: {
          audioUrl: '/lessonaudio/module4/lesson38/mastery-celebration.mp3',
          duration: 12,
          transcript: 'Exceptional achievement! You have completely mastered complete heart block. You understand pathophysiology, can recognize ECG patterns, assess clinical severity, and manage patients expertly. Your knowledge will save lives!'
        }
      },
      images: {
        mainImage: '/lessonimages/module4/lesson38/mastery-achievement.jpg',
        slideImages: []
      },
      content: {
        prerequisiteMessage: '🏆 Final Assessment: Complete all 6 units to unlock this comprehensive CHB mastery evaluation.',
        questions: [
          {
            id: 'chb-recognition-mastery',
            type: 'multiple-choice',
            question: 'The hallmark ECG finding of complete heart block is:',
            options: [
              'Wide QRS complexes',
              'Complete AV dissociation with independent P waves and QRS',
              'Prolonged PR intervals',
              'Irregular ventricular rhythm'
            ],
            correctAnswer: 1,
            explanation: 'Complete AV dissociation with independent P waves and QRS complexes is the hallmark of complete heart block, showing no electrical connection between atria and ventricles.',
            imageUrl: '/lessonimages/module4/lesson38/assessment/chb-recognition.jpg'
          },
          {
            id: 'escape-rhythm-significance-mastery',
            type: 'multiple-choice', 
            question: 'Wide QRS escape rhythm in CHB indicates:',
            options: [
              'AV nodal level block with good prognosis',
              'Infranodal block requiring urgent pacing',
              'Functional block that will resolve',
              'No immediate intervention needed'
            ],
            correctAnswer: 1,
            explanation: 'Wide QRS escape rhythm indicates infranodal (His-Purkinje) block with unreliable ventricular escape pacemaker, requiring urgent pacing due to risk of sudden death.',
            imageUrl: '/lessonimages/module4/lesson38/assessment/escape-rhythm.jpg'
          },
          {
            id: 'stokes-adams-management-mastery',
            type: 'multiple-choice',
            question: 'A patient with CHB has Stokes-Adams attacks. The most appropriate management is:',
            options: [
              'Increase fluid intake',
              'Urgent permanent pacemaker implantation',
              'Beta-blocker therapy',
              'Observation only'
            ],
            correctAnswer: 1,
            explanation: 'Stokes-Adams attacks indicate dangerous ventricular pauses or standstill requiring urgent permanent pacemaker implantation to prevent sudden death.',
            imageUrl: '/lessonimages/module4/lesson38/assessment/stokes-adams.jpg'
          },
          {
            id: 'pacing-mode-selection-mastery',
            type: 'multiple-choice',
            question: 'The preferred pacing mode for CHB with normal atrial function is:',
            options: [
              'VVI (single chamber ventricular)',
              'AAI (single chamber atrial)',
              'DDD (dual chamber)',
              'VOO (asynchronous ventricular)'
            ],
            correctAnswer: 2,
            explanation: 'DDD (dual chamber) pacing is preferred for CHB with normal atrial function as it maintains AV synchrony, optimizes cardiac output, and prevents pacemaker syndrome.',
            imageUrl: '/lessonimages/module4/lesson38/assessment/pacing-mode.jpg'
          }
        ]
      }
    }
  ],
  completed: false,
  attempts: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
