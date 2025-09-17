import { Lesson } from '../types/learning';

export const optimizedLesson35: Lesson = {
  id: 'lesson-4-7-optimized',
  moduleId: 'module-4',
  title: "Third Degree AV Block Mastery",
  description: "Master complete AV block through 6 focused learning units with enhanced interactive elements: Foundation concepts, mechanisms with audio, ECG recognition, hemodynamic impact with audio, clinical applications, and management mastery with celebration audio",
  order: 7,
  estimatedTime: 45,
  content: {
    type: 'mixed',
    introduction: "🎯 Welcome to Third Degree AV Block Mastery! Master complete heart block through 6 progressive units with enhanced interactive elements, strategic audio, and comprehensive assessments.",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your Third Degree AV Block Learning Journey",
        content: "UNIT 1: Foundation Concepts → UNIT 2: Mechanisms + Audio → UNIT 3: ECG Recognition → UNIT 4: Hemodynamic Impact + Audio → UNIT 5: Clinical Applications → UNIT 6: Management + Celebration Audio",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // ===============================================
      // 🎯 UNIT 1: FOUNDATION CONCEPTS (7 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: Foundation Concepts',
        content: 'Master the fundamental concept of third degree AV block! Understand complete heart block where no atrial impulses reach the ventricles.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/ecg/ecg_dataset_clean/3AVB_third_degree_AV_block/clean_08210_third degree AV block.png',
        hint: '🚫 Complete electrical blockade!'
      },
      
      {
        id: 'complete-block-definition-flashcard',
        title: '🧠 Complete Block Definition',
        content: 'Master the definition of third degree AV block',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🚫',
          question: 'What is third degree (complete) AV block?',
          answer: 'NO conduction from atria to ventricles. Atria and ventricles beat independently with separate pacemakers. P waves and QRS complexes are completely dissociated.',
          imageUrl: '/ecg/ecg_dataset_clean/3AVB_third_degree_AV_block/clean_10505_third degree AV block.png'
        },
        hint: '🧠 Flip to learn complete block!'
      },

      {
        id: 'block-vs-dissociation',
        title: 'Complete Block vs AV Dissociation',
        content: 'COMPLETE BLOCK: NO conduction possible, always results in dissociation. AV DISSOCIATION: May have occasional conduction (capture beats). KEY: Complete block is a CAUSE of dissociation. PROGNOSIS: Complete block more serious.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        imageUrl: '/ecg/ecg_dataset_clean/3AVB_third_degree_AV_block/clean_07688_third degree AV block.png',
        hint: '🔄 Block causes dissociation!'
      },

      {
        id: 'escape-rhythm-steps',
        title: 'Escape Rhythm Formation',
        content: 'Understanding how escape rhythms develop',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Sinus Impulses Blocked',
            description: 'All atrial impulses fail to conduct to ventricles'
          },
          {
            number: 2,
            title: 'Ventricular Standstill',
            description: 'Without escape, ventricles would stop beating'
          },
          {
            number: 3,
            title: 'Escape Pacemaker Activates',
            description: 'Junctional or ventricular pacemaker takes over'
          },
          {
            number: 4,
            title: 'Independent Rhythms',
            description: 'Atria and ventricles beat at different rates'
          }
        ],
        hint: '👣 Follow the escape sequence!'
      },

      {
        id: 'escape-types-tabs',
        title: 'Types of Escape Rhythms',
        content: 'Explore different escape rhythm origins',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        tabs: [
          {
            title: 'Junctional Escape',
            content: 'Rate: 40-60 bpm. QRS: Usually narrow (<120ms). Origin: AV junction. Prognosis: Better than ventricular.',
            icon: '🟡'
          },
          {
            title: 'Ventricular Escape',
            content: 'Rate: 20-40 bpm. QRS: Wide (>120ms). Origin: Ventricular tissue. Prognosis: More concerning.',
            icon: '🔴'
          },
          {
            title: 'No Escape',
            content: 'Rate: 0 bpm (asystole). QRS: None. Origin: No pacemaker. Prognosis: Immediately life-threatening.',
            icon: '⚫'
          }
        ],
        hint: '📑 Explore escape origins!'
      },

      {
        id: 'anatomical-levels',
        title: 'Anatomical Block Levels',
        content: 'AV NODE BLOCK: More common, better escape rhythm. HIS-PURKINJE BLOCK: Less common, worse escape rhythm. INFRANODAL: Below AV node, wide QRS escape. COMBINATION: Multiple level involvement possible.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson35/anatomical-block-levels.jpg',
        hint: '📍 Location matters for prognosis!'
      },

      {
        id: 'unit1-quiz',
        title: 'Unit 1 Quiz: Foundation Check',
        content: 'Test your understanding of complete AV block foundations!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'In third degree AV block, the key characteristic is:',
        options: [
          'Some P waves conduct to ventricles',
          'No P waves conduct to ventricles',
          'P waves conduct with long PR intervals',
          'Only alternate P waves conduct'
        ],
        correctAnswer: 1,
        explanation: 'Correct! In third degree (complete) AV block, NO P waves conduct to the ventricles. This creates complete AV dissociation.',
        imageUrl: '/lessonimages/module4/lesson35/unit1-quiz.jpg',
        hint: '🎯 Think about "complete" blockade!'
      },

      // ===============================================
      // 🎯 UNIT 2: MECHANISMS + AUDIO (8 slides)
      // ===============================================
      {
        id: 'unit2-intro',
        title: '🎯 Unit 2: Mechanisms + Audio',
        content: 'Discover the mechanisms behind complete AV block! Learn how and why complete electrical blockade occurs.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson35/mechanisms-overview.jpg',
        hint: '⚙️ Understand complete blockade!'
      },

      {
        id: 'mechanisms-audio',
        title: '🎧 Complete Block Mechanisms',
        content: 'Listen to detailed explanation of third degree AV block mechanisms',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module4/lesson35/complete-block-mechanisms.mp3',
        hint: '🎧 Audio guide to complete block!'
      },

      {
        id: 'acquired-causes-accordion',
        title: 'Acquired Causes Explorer',
        content: 'Explore the various acquired causes of complete AV block',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Ischemic Causes',
            content: 'Acute MI (especially inferior). Chronic coronary disease. Progressive fibrosis. Often reversible if acute.',
            icon: '💔'
          },
          {
            title: 'Inflammatory Causes',
            content: 'Myocarditis. Rheumatic heart disease. Sarcoidosis. Lyme disease carditis.',
            icon: '🔥'
          },
          {
            title: 'Degenerative Causes',
            content: 'Lenegre disease (sclerosis). Lev disease (calcification). Age-related fibrosis. Progressive conduction system disease.',
            icon: '⏰'
          },
          {
            title: 'Drug-Induced Causes',
            content: 'Beta blockers overdose. Calcium channel blockers. Digitalis toxicity. Antiarrhythmic drugs.',
            icon: '💊'
          }
        ],
        hint: '🎯 Click to explore causes!'
      },

      {
        id: 'congenital-block-flashcard',
        title: '🧠 Congenital Complete Block',
        content: 'Understanding congenital third degree AV block',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '👶',
          question: 'What causes congenital complete AV block?',
          answer: 'Maternal anti-Ro/anti-La antibodies cross placenta and damage fetal conduction system. Present from birth. Usually requires pacing early in life. Associated with maternal lupus.',
          imageUrl: '/lessonimages/module4/lesson35/congenital-block.jpg'
        },
        hint: '🧠 Flip to learn congenital causes!'
      },

      {
        id: 'progressive-development',
        title: 'Progressive Development Pattern',
        content: 'FIRST DEGREE: PR prolongation develops. SECOND DEGREE: Intermittent block appears. THIRD DEGREE: Complete block occurs. TIME COURSE: May progress over days, months, or years.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson35/progressive-development.jpg',
        hint: '📈 Block can progress over time!'
      },

      {
        id: 'reversible-vs-permanent',
        title: 'Reversible vs Permanent Block',
        content: 'REVERSIBLE: Acute MI, drug toxicity, electrolyte abnormalities, myocarditis. PERMANENT: Degenerative disease, chronic ischemia, surgical damage. DETERMINATION: Response to treatment and time course.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson35/reversible-vs-permanent.jpg',
        hint: '🔄 Some blocks can reverse!'
      },

      {
        id: 'unit2-quiz',
        title: 'Unit 2 Quiz: Mechanisms Check',
        content: 'Test your understanding of complete block mechanisms!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'Which cause of complete AV block is most likely to be reversible?',
        options: [
          'Lenegre disease (degenerative)',
          'Acute inferior MI',
          'Congenital heart block',
          'Chronic ischemic heart disease'
        ],
        correctAnswer: 1,
        explanation: 'Correct! Acute inferior MI can cause reversible complete AV block due to ischemia of the AV node, which may resolve with reperfusion.',
        imageUrl: '/lessonimages/module4/lesson35/unit2-quiz.jpg',
        hint: '🎯 Think about acute vs chronic causes!'
      },

      // ===============================================
      // 🎯 UNIT 3: ECG RECOGNITION (7 slides)  
      // ===============================================
      {
        id: 'unit3-intro',
        title: '🎯 Unit 3: ECG Recognition',
        content: 'Master ECG recognition of complete AV block! Learn to identify the diagnostic ECG features.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/ecg/ecg_dataset_clean/3AVB_third_degree_AV_block/clean_16271_third degree AV block.png',
        hint: '📈 Read complete block patterns!'
      },

      {
        id: 'diagnostic-criteria-steps',
        title: 'Diagnostic ECG Criteria',
        content: 'Step-by-step approach to diagnosing complete AV block',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Identify P Waves',
            description: 'Find regular P waves marching independently'
          },
          {
            number: 2,
            title: 'Identify QRS Complexes',
            description: 'Find regular QRS complexes at slower rate'
          },
          {
            number: 3,
            title: 'Assess Relationship',
            description: 'Verify NO relationship between P waves and QRS'
          },
          {
            number: 4,
            title: 'Rule Out Capture',
            description: 'Confirm NO capture beats are present'
          }
        ],
        hint: '👣 Follow systematic recognition!'
      },

      {
        id: 'narrow-vs-wide-tabs',
        title: 'Narrow vs Wide QRS Analysis',
        content: 'Distinguish between junctional and ventricular escape',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: 'Narrow QRS (<120ms)',
            content: 'Indicates junctional escape rhythm. Rate: 40-60 bpm usually. Better hemodynamic tolerance. AV nodal level block likely.',
            icon: '📏'
          },
          {
            title: 'Wide QRS (>120ms)',
            content: 'Indicates ventricular escape rhythm. Rate: 20-40 bpm usually. Worse hemodynamic tolerance. Infranodal block likely.',
            icon: '📐'
          },
          {
            title: 'Rate Implications',
            content: 'Faster escape = better prognosis. Slower escape = more concerning. No escape = emergency situation.',
            icon: '⏱️'
          }
        ],
        hint: '📑 Analyze QRS width and rate!'
      },

      {
        id: 'rate-analysis-flashcard',
        title: '🧠 Rate Analysis Mastery',
        content: 'Master rate analysis in complete AV block',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '📊',
          question: 'How do you calculate rates in complete AV block?',
          answer: 'Calculate P wave rate (atrial rate) and QRS rate (ventricular rate) SEPARATELY. They are completely independent. Atrial rate usually 60-100 bpm, ventricular rate 20-60 bpm depending on escape origin.',
          imageUrl: '/ecg/ecg_dataset_clean/NORM_normal_ECG/clean_00001_normal ECG.png'
        },
        hint: '🧠 Flip to learn rate calculation!'
      },

      {
        id: 'differential-diagnosis-accordion',
        title: 'Differential Diagnosis Explorer',
        content: 'Distinguish complete AV block from similar rhythms',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'vs Second Degree AV Block',
            content: 'Second degree: Some P waves conduct. Third degree: NO P waves conduct. Second degree: May have capture beats. Third degree: Never has capture.',
            icon: '🔢'
          },
          {
            title: 'vs AV Dissociation',
            content: 'AV dissociation: May have capture beats. Complete block: Never has capture. Dissociation: May be temporary. Complete block: Usually permanent.',
            icon: '🔄'
          },
          {
            title: 'vs Junctional Rhythm',
            content: 'Junctional rhythm: No visible P waves or retrograde P waves. Complete block: Clear independent P waves visible.',
            icon: '🎭'
          }
        ],
        hint: '🎯 Click to explore differential!'
      },

      {
        id: 'common-pitfalls',
        title: 'Recognition Pitfalls',
        content: 'HIDDEN P WAVES: May be buried in QRS or T waves. ISORHYTHMIC: When atrial and ventricular rates similar. VARIABLE ESCAPE: Escape rate may fluctuate. ARTIFACTS: Don not mistake noise for P waves.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson35/recognition-pitfalls.jpg',
        hint: '⚠️ Avoid common mistakes!'
      },

      {
        id: 'unit3-quiz',
        title: 'Unit 3 Quiz: Recognition Check',
        content: 'Test your ECG recognition skills!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'The key ECG finding that distinguishes complete AV block from AV dissociation is:',
        options: [
          'Regular P waves and QRS complexes',
          'Different atrial and ventricular rates',
          'Absence of any capture beats',
          'Wide QRS complexes'
        ],
        correctAnswer: 2,
        explanation: 'Correct! The absence of capture beats is key. In AV dissociation, occasional capture beats may occur, but in complete AV block, NO capture beats are ever seen.',
        imageUrl: '/lessonimages/module4/lesson35/unit3-quiz.jpg',
        hint: '🎯 Think about capture beat presence!'
      },

      // ===============================================
      // 🎯 UNIT 4: HEMODYNAMIC IMPACT + AUDIO (7 slides)
      // ===============================================
      {
        id: 'unit4-intro',
        title: '🎯 Unit 4: Hemodynamic Impact + Audio',
        content: 'Master the hemodynamic consequences of complete AV block! Learn how complete blockade affects circulation.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson35/hemodynamic-overview.jpg',
        hint: '💓 Understand circulatory impact!'
      },

      {
        id: 'hemodynamic-audio',
        title: '🎧 Hemodynamic Consequences',
        content: 'Listen to detailed explanation of hemodynamic impact',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module4/lesson35/hemodynamic-impact-detailed.mp3',
        hint: '🎧 Audio guide to hemodynamic effects!'
      },

      {
        id: 'cardiac-output-impact',
        title: 'Cardiac Output Impact',
        content: 'FORMULA: CO = HR × SV. BRADYCARDIA: Severely reduced heart rate. COMPENSATION: Increased stroke volume attempt. LIMITATION: Maximum compensation possible. RESULT: Often reduced cardiac output.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson35/cardiac-output-impact.jpg',
        hint: '📊 Output = Rate × Volume!'
      },

      {
        id: 'compensation-mechanisms-steps',
        title: 'Compensatory Mechanisms',
        content: 'How the body tries to compensate',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Increased Stroke Volume',
            description: 'Heart pumps more blood per beat'
          },
          {
            number: 2,
            title: 'Sympathetic Activation',
            description: 'Increased contractility and vasoconstriction'
          },
          {
            number: 3,
            title: 'Ventricular Filling',
            description: 'Longer diastole allows better filling'
          },
          {
            number: 4,
            title: 'Compensation Limits',
            description: 'Eventually compensation becomes inadequate'
          }
        ],
        hint: '👣 Follow compensatory sequence!'
      },

      {
        id: 'symptom-severity-tabs',
        title: 'Symptom Severity Analysis',
        content: 'Assess clinical presentation based on escape rhythm',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        tabs: [
          {
            title: 'Junctional Escape (40-60)',
            content: 'Often well tolerated initially. May have fatigue, exercise intolerance. Syncope less common. Better prognosis.',
            icon: '🟡'
          },
          {
            title: 'Ventricular Escape (20-40)',
            content: 'Usually symptomatic. Fatigue, syncope common. Exercise intolerance severe. Requires urgent intervention.',
            icon: '🔴'
          },
          {
            title: 'No Escape (Asystole)',
            content: 'Immediately life-threatening. Loss of consciousness. Requires emergency pacing. May progress to cardiac arrest.',
            icon: '⚫'
          }
        ],
        hint: '📑 Rate determines symptoms!'
      },

      {
        id: 'stokes-adams-attacks-flashcard',
        title: '🧠 Stokes-Adams Attacks',
        content: 'Understanding syncope in complete AV block',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🌀',
          question: 'What are Stokes-Adams attacks?',
          answer: 'Sudden syncope due to ventricular standstill in complete AV block. Occurs when escape rhythm fails temporarily. Classic: Sudden loss of consciousness, pale, may have seizure-like activity. Recovery usually rapid.',
          imageUrl: '/lessonimages/module4/lesson35/stokes-adams.jpg'
        },
        hint: '🧠 Flip to learn about syncope!'
      },

      {
        id: 'unit4-quiz',
        title: 'Unit 4 Quiz: Hemodynamic Check',
        content: 'Test your understanding of hemodynamic impact!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'The most dangerous hemodynamic consequence of complete AV block is:',
        options: [
          'Increased stroke volume',
          'Ventricular standstill periods',
          'Sympathetic activation',
          'Prolonged diastolic filling'
        ],
        correctAnswer: 1,
        explanation: 'Correct! Ventricular standstill (when escape rhythm fails) can cause Stokes-Adams attacks and potentially fatal outcomes.',
        imageUrl: '/lessonimages/module4/lesson35/unit4-quiz.jpg',
        hint: '🎯 Think about worst-case scenarios!'
      },

      // ===============================================
      // 🎯 UNIT 5: CLINICAL APPLICATIONS (6 slides)
      // ===============================================
      {
        id: 'unit5-intro',
        title: '🎯 Unit 5: Clinical Applications',
        content: 'Master clinical assessment and decision-making! Learn when and how to respond to complete AV block.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson35/clinical-overview.jpg',
        hint: '👩‍⚕️ From ECG to bedside!'
      },

      {
        id: 'risk-stratification-accordion',
        title: 'Risk Stratification Explorer',
        content: 'Assess risk levels in complete AV block',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Low Risk',
            content: 'Congenital block, stable junctional escape >50 bpm, asymptomatic, normal exercise tolerance. May monitor initially.',
            icon: '🟢'
          },
          {
            title: 'Moderate Risk',
            content: 'Junctional escape 40-50 bpm, mild symptoms, exercise intolerance. Usually requires pacing within weeks.',
            icon: '🟡'
          },
          {
            title: 'High Risk',
            content: 'Ventricular escape <40 bpm, symptomatic, syncope, wide QRS escape. Requires urgent pacing.',
            icon: '🔴'
          },
          {
            title: 'Emergency Risk',
            content: 'Ventricular standstill, Stokes-Adams attacks, hemodynamic compromise. Immediate pacing needed.',
            icon: '⚫'
          }
        ],
        hint: '🎯 Click to assess risk levels!'
      },

      {
        id: 'pacing-indications-tabs',
        title: 'Pacing Indications Analysis',
        content: 'Understand when pacing is indicated',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: 'Class I (Definite)',
            content: 'Symptomatic complete AV block. Wide QRS escape. Ventricular rate <40 bpm. Syncope or heart failure.',
            icon: '✅'
          },
          {
            title: 'Class IIa (Reasonable)',
            content: 'Asymptomatic complete AV block with escape <40 bpm. Exercise intolerance. Reversible causes treated.',
            icon: '🤔'
          },
          {
            title: 'Class III (Not Indicated)',
            content: 'Asymptomatic congenital block with acceptable escape rate. Temporary block expected to resolve.',
            icon: '❌'
          }
        ],
        hint: '📑 Understand pacing guidelines!'
      },

      {
        id: 'temporary-vs-permanent',
        title: 'Temporary vs Permanent Pacing',
        content: 'TEMPORARY: Bridge to permanent, acute reversible causes, immediate stabilization. PERMANENT: Chronic complete block, failed temporary pacing, long-term solution. TIMING: Temporary first in emergencies.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson35/temporary-vs-permanent.jpg',
        hint: '⏰ Timing of intervention matters!'
      },

      {
        id: 'emergency-management-flashcard',
        title: '🧠 Emergency Management',
        content: 'Master acute management of complete AV block',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🚨',
          question: 'What is the emergency management of symptomatic complete AV block?',
          answer: 'IMMEDIATE: Transcutaneous pacing if available. MEDICATIONS: Atropine rarely effective (may help if nodal). Dopamine or epinephrine for hemodynamic support. DEFINITIVE: Transvenous pacing ASAP.',
          imageUrl: '/lessonimages/module4/lesson35/emergency-management.jpg'
        },
        hint: '🧠 Flip for emergency protocol!'
      },

      {
        id: 'unit5-quiz',
        title: 'Unit 5 Quiz: Clinical Check',
        content: 'Test your clinical application knowledge!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'A patient with complete AV block and ventricular escape rate of 25 bpm requires:',
        options: [
          'Observation only',
          'Atropine trial first',
          'Urgent pacing',
          'Exercise stress test'
        ],
        correctAnswer: 2,
        explanation: 'Correct! Ventricular escape rate <40 bpm (especially <30 bpm) with symptoms requires urgent pacing due to high risk of hemodynamic compromise.',
        imageUrl: '/lessonimages/module4/lesson35/unit5-quiz.jpg',
        hint: '🎯 Consider the escape rate!'
      },

      // ===============================================
      // 🎯 UNIT 6: MANAGEMENT + CELEBRATION AUDIO (7 slides)
      // ===============================================
      {
        id: 'unit6-intro',
        title: '🎯 Unit 6: Management Mastery',
        content: 'Congratulations! Complete your third degree AV block mastery with comprehensive management strategies!',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson35/mastery-celebration.jpg',
        hint: '🏆 You have reached mastery level!'
      },

      {
        id: 'mastery-celebration-audio',
        title: '🎧 Mastery Celebration',
        content: 'Celebrate your third degree AV block mastery achievement!',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module4/lesson35/mastery-celebration.mp3',
        hint: '🎧 Celebration time! You have mastered complete AV block!'
      },

      {
        id: 'pacing-modes-tabs',
        title: 'Pacing Modes Mastery',
        content: 'Understand different pacing modes for complete AV block',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        tabs: [
          {
            title: 'VVI Pacing',
            content: 'Ventricular pacing only. Simple, reliable. No AV synchrony. Used when atrial function poor or AF present.',
            icon: '🔋'
          },
          {
            title: 'DDD Pacing',
            content: 'Dual chamber pacing. Maintains AV synchrony. Physiologic pacing. Preferred when atrial function normal.',
            icon: '🔗'
          },
          {
            title: 'CRT Pacing',
            content: 'Cardiac resynchronization therapy. For heart failure with wide QRS. Biventricular pacing. Improves function.',
            icon: '⚡'
          }
        ],
        hint: '📑 Master pacing options!'
      },

      {
        id: 'long-term-management-accordion',
        title: 'Long-term Management Excellence',
        content: 'Master comprehensive long-term care strategies',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Pacemaker Follow-up',
            content: 'Regular device checks every 3-6 months. Battery monitoring. Lead function assessment. Programming optimization.',
            icon: '🔍'
          },
          {
            title: 'Medical Management',
            content: 'Treat underlying conditions. Avoid bradycardic drugs. Monitor for heart failure. Optimize cardiac medications.',
            icon: '💊'
          },
          {
            title: 'Lifestyle Considerations',
            content: 'Activity restrictions initially. MRI compatibility issues. Device ID card important. Electromagnetic interference awareness.',
            icon: '🏃'
          },
          {
            title: 'Emergency Planning',
            content: 'Device identification. Emergency contact information. Backup pacing availability. Patient education critical.',
            icon: '🚨'
          }
        ],
        hint: '🎯 Click for comprehensive care!'
      },

      {
        id: 'prognosis-factors-flashcard',
        title: '🧠 Prognostic Factors',
        content: 'Master prognostic assessment in complete AV block',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🔮',
          question: 'What factors determine prognosis in complete AV block?',
          answer: 'ESCAPE RATE: Higher is better. QRS WIDTH: Narrow better than wide. UNDERLYING CAUSE: Reversible vs permanent. SYMPTOMS: Asymptomatic better. AGE: Younger patients do better. COMORBIDITIES: Affect outcomes.',
          imageUrl: '/lessonimages/module4/lesson35/prognostic-factors.jpg'
        },
        hint: '🧠 Flip to learn prognosis!'
      },

      {
        id: 'clinical-pearls',
        title: 'Clinical Pearls Collection',
        content: 'PEARL 1: No capture beats in complete block (vs AV dissociation). PEARL 2: Escape rate and QRS width predict prognosis. PEARL 3: Atropine rarely helps (may worsen if infranodal). PEARL 4: Temporary pacing bridge to permanent. PEARL 5: Congenital block may be well tolerated.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson35/clinical-pearls.jpg',
        hint: '💎 Precious clinical wisdom!'
      },

      {
        id: 'unit6-final-quiz',
        title: 'Unit 6 Quiz: Mastery Validation',
        content: 'Validate your third degree AV block mastery!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'The most important factor in determining urgency of pacing in complete AV block is:',
        options: [
          'Age of the patient',
          'Escape rate and symptoms',
          'Duration of block',
          'Underlying cardiac disease'
        ],
        correctAnswer: 1,
        explanation: 'Perfect! Escape rate and symptoms determine urgency. Slow escape rates (<40 bpm) and symptoms (especially syncope) require urgent intervention.',
        imageUrl: '/lessonimages/module4/lesson35/mastery-quiz.jpg',
        hint: '🎯 Think about immediate risk factors!'
      }
    ],
    summary: "🏆 Congratulations! You have achieved third degree AV block mastery! You can recognize complete heart block, understand its mechanisms, assess hemodynamic impact, and manage patients appropriately.",
    keyPoints: [
      "Third degree AV block = NO conduction from atria to ventricles (complete electrical blockade)",
      "No capture beats ever occur (distinguishes from AV dissociation)",
      "Escape rhythm rate and QRS width determine prognosis and urgency",
      "Strategic audio reinforcement in Units 2, 4, and 6 enhanced learning",
      "Symptomatic patients or escape rate <40 bpm require urgent pacing",
      "Long-term management involves pacemaker follow-up and lifestyle modifications"
    ],
    resources: [
      {
        title: "Third Degree AV Block Mastery Reference",
        url: "https://ecgkid.com/complete-av-block-guide",
        type: "video"
      }
    ]
  },
  tasks: [
    {
      id: 'final-complete-av-block-mastery-assessment',
      type: 'final-assessment',
      xp: 50,
      audio: {
        mainNarration: {
          audioUrl: '/lessonaudio/module4/lesson35/mastery-celebration.mp3',
          duration: 12,
          transcript: 'Outstanding achievement! You have mastered third degree AV block completely. You understand complete electrical blockade, can recognize the ECG patterns, assess hemodynamic impact, and manage patients appropriately. Your expertise in complete heart block will serve patients well!'
        }
      },
      images: {
        mainImage: '/lessonimages/module4/lesson35/mastery-achievement.jpg',
        slideImages: []
      },
      content: {
        prerequisiteMessage: '🏆 Final Assessment: Complete all 6 units to unlock this comprehensive third degree AV block mastery evaluation.',
        questions: [
          {
            id: 'complete-block-definition-mastery',
            type: 'multiple-choice',
            question: 'A patient presents with regular P waves at 75 bpm and regular QRS complexes at 35 bpm with no relationship between them. This represents:',
            options: [
              'Second degree AV block Type II',
              'AV dissociation with capture beats',
              'Third degree (complete) AV block',
              'Junctional rhythm with retrograde block'
            ],
            correctAnswer: 2,
            explanation: 'This represents third degree (complete) AV block. The key features are: regular P waves and QRS complexes that are completely independent with no relationship. The slow ventricular rate suggests ventricular escape rhythm.',
            imageUrl: '/lessonimages/module4/lesson35/assessment/definition-mastery.jpg'
          },
          {
            id: 'escape-rhythm-significance-mastery',
            type: 'multiple-choice', 
            question: 'In complete AV block, a wide QRS escape rhythm at 25 bpm indicates:',
            options: [
              'Junctional escape rhythm with good prognosis',
              'Ventricular escape rhythm requiring urgent pacing',
              'Normal compensatory mechanism',
              'Reversible drug-induced block'
            ],
            correctAnswer: 1,
            explanation: 'A wide QRS escape rhythm at 25 bpm indicates ventricular escape with very slow rate, requiring urgent pacing. The combination of wide QRS (ventricular origin) and very slow rate (<30 bpm) indicates high risk for hemodynamic compromise.',
            imageUrl: '/lessonimages/module4/lesson35/assessment/escape-significance.jpg'
          },
          {
            id: 'differential-diagnosis-mastery',
            type: 'multiple-choice',
            question: 'The key feature that distinguishes complete AV block from AV dissociation is:',
            options: [
              'Different atrial and ventricular rates',
              'Regular P waves and QRS complexes',
              'Absence of any capture beats',
              'Wide QRS escape rhythm'
            ],
            correctAnswer: 2,
            explanation: 'The absence of capture beats is the key distinguishing feature. In AV dissociation, occasional capture beats may occur when timing allows, but in complete AV block, NO capture beats ever occur because no conduction is possible.',
            imageUrl: '/lessonimages/module4/lesson35/assessment/differential-diagnosis.jpg'
          },
          {
            id: 'emergency-management-mastery',
            type: 'multiple-choice',
            question: 'A hemodynamically unstable patient with complete AV block and ventricular escape at 20 bpm requires:',
            options: [
              'High-dose atropine trial',
              'Immediate transcutaneous pacing',
              'Observation with continuous monitoring',
              'Beta-blocker to control atrial rate'
            ],
            correctAnswer: 1,
            explanation: 'Immediate transcutaneous pacing is required for hemodynamically unstable patients with complete AV block. The very slow ventricular escape (20 bpm) with instability requires immediate intervention to restore adequate heart rate and cardiac output.',
            imageUrl: '/lessonimages/module4/lesson35/assessment/emergency-management.jpg'
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
