import { Lesson } from '@/types/learning';

// ENHANCED LESSON 69: STEMI Recognition Fundamentals - 6-Unit Comprehensive Structure
export const optimizedLesson69: Lesson = {
  id: 'module-4-lesson-1',
  moduleId: 'module-4',
  title: "STEMI Recognition Fundamentals",
  description: "Master STEMI recognition through 6 focused learning units: STEMI Basics, ST Elevation Criteria, Territory Recognition, Time-Critical Recognition, Differential Diagnosis, and Emergency Management - each with medical-accurate ECGs and interactive assessments",
  order: 1,
  estimatedTime: 45,
  content: {
    type: 'mixed',
    introduction: "⚡ Welcome to STEMI Mastery! Learn life-saving STEMI recognition through 6 progressive units with medical-accurate ECGs, strategic audio guidance, and comprehensive assessments. Master the most critical ECG diagnosis in emergency medicine.",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your STEMI Mastery Journey",
        content: "UNIT 1: STEMI Basics → UNIT 2: ST Elevation Criteria → UNIT 3: Territory Recognition → UNIT 4: Time-Critical Recognition → UNIT 5: Differential Diagnosis → UNIT 6: Emergency Management",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // ===============================================
      // 🎯 UNIT 1: STEMI BASICS (7 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: STEMI Basics',
        content: 'Master the fundamental concepts of ST-elevation myocardial infarction! Learn what makes STEMI the most critical ECG emergency.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: '/ecg/MI_ecg_database/Anterior_wall_MI/AMI.jpg',
        imageAlt: 'Classic anterior STEMI pattern showing ST elevation in precordial leads',
        highlights: [
          '⚡ Life-threatening emergency',
          '🕐 Time = muscle principle', 
          '💔 Complete coronary occlusion',
          '🎯 90-minute door-to-balloon goal'
        ],
        hint: '🚨 STEMI recognition saves lives!',
        audioUrl: '/lessonaudio/stemi/stemi-fundamentals-intro.mp3'
      },
      
      {
        id: 'stemi-definition',
        title: 'What is STEMI?',
        type: 'flashcard',
        flashcardFront: '🫀 What does STEMI stand for and what does it represent?',
        flashcardBack: 'ST-Elevation Myocardial Infarction:\n\n⚡ ST-ELEVATION: Acute injury pattern on ECG\n💔 MYOCARDIAL: Heart muscle tissue\n⚰️ INFARCTION: Tissue death from blocked blood flow\n\n🚨 STEMI = Complete coronary artery occlusion causing transmural heart muscle death',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: '/ecg/MI_ecg_database/Anterior_wall_MI/AMI3.jpg',
        imageAlt: 'Anterior STEMI showing classic ST elevation pattern'
      },

      {
        id: 'stemi-pathophysiology',
        title: 'STEMI Pathophysiology',
        type: 'steps',
        backgroundColor: '#fefbf3',
        textColor: '#7c2d12',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Plaque Rupture',
            description: 'Atherosclerotic plaque ruptures in coronary artery, exposing thrombogenic material'
          },
          {
            number: 2,
            title: 'Thrombus Formation', 
            description: 'Large thrombus forms, completely occluding coronary artery (100% blockage)'
          },
          {
            number: 3,
            title: 'Transmural Ischemia',
            description: 'Complete loss of blood flow causes transmural (full thickness) ischemia'
          },
          {
            number: 4,
            title: 'ST Elevation',
            description: 'Injured myocardium creates injury current, manifesting as ST elevation on ECG'
          },
          {
            number: 5,
            title: 'Cell Death Begins',
            description: 'Without reperfusion, myocardial cell death begins within 20-30 minutes'
          }
        ],
        hint: '🩸 Complete occlusion = transmural injury = ST elevation'
      },

      // 🎥 ECGkid Master Class: Deadly ECG Patterns - Sports Medicine Focus
      {
        id: 'ecgkid-deadly-athletes',
        title: '🎥 Master Class: 5 ECG Patterns That Can Be DEADLY for Young Athletes',
        content: 'Critical ECGkid sports medicine masterclass! Learn the 5 most dangerous ECG patterns that can lead to sudden cardiac death in athletes. Essential knowledge for recognizing life-threatening conditions that can present like STEMI.',
        type: 'youtube',
        layout: 'centered',
        backgroundColor: '#dc2626',
        textColor: '#ffffff',
        animation: 'fade',
        youtubeId: 'pYpXANnQMWE',
        videoDuration: 306, // 5 minutes, 6 seconds
        minimumWatchTime: 270, // 4.5 minutes minimum
        requireFullWatch: true, // Critical for sports medicine
        imageUrl: '/ecg/medical_accurate/normal_sinus_60bpm_2.png',
        imageAlt: 'ECGkid deadly ECG patterns in athletes masterclass',
        hint: '⚡ Critical patterns that can mimic STEMI in athletes!',
        highlights: [
          '5 deadly ECG patterns in athletes',
          'Sudden cardiac death prevention',
          'STEMI differential diagnosis',
          'Sports medicine essential knowledge'
        ]
      },

      {
        id: 'stemi-vs-nstemi',
        title: 'STEMI vs NSTEMI',
        type: 'tabs',
        backgroundColor: '#f9fafb',
        textColor: '#111827',
        animation: 'fade',
        tabs: [
          {
            title: 'STEMI',
            content: '⚡ ST ELEVATION present\n🚫 Complete artery occlusion (100%)\n📈 Transmural injury\n🕐 Door-to-balloon <90 min\n💉 Immediate catheterization\n📊 Higher enzyme elevation\n⚠️ Higher mortality risk'
          },
          {
            title: 'NSTEMI',
            content: '⬇️ ST DEPRESSION or normal\n🔸 Partial artery occlusion (70-99%)\n📉 Subendocardial injury\n⏰ Catheterization <24 hrs\n💊 Medical stabilization first\n📊 Lower enzyme elevation\n✅ Lower acute mortality'
          },
          {
            title: 'Clinical Impact',
            content: '🎯 STEMI: Immediate threat\n⚡ Requires emergency PCI\n💔 More muscle at risk\n🏥 Activate cath lab immediately\n\n🎯 NSTEMI: Urgent threat\n⏱️ Risk stratification first\n💡 Less immediate muscle loss\n🏥 Stabilize then catheterization'
          }
        ],
        hint: '📈 ST elevation = complete occlusion = emergency!'
      },

      {
        id: 'time-muscle-principle',
        title: 'Time = Muscle Principle',
        type: 'highlight',
        backgroundColor: '#fff7ed',
        textColor: '#c2410c',
        animation: 'fade',
        content: 'Every minute counts in STEMI! Myocardial cell death begins within 20-30 minutes of complete occlusion. Peak salvage occurs within the first 2-3 hours.',
        imageUrl: '/ecg/MI_ecg_database/Inferior_wall_MI/IMI.jpg',
        imageAlt: 'Inferior STEMI showing time-critical ST elevation',
        highlights: [
          '⏰ 0-20 min: Reversible ischemia',
          '💔 20-60 min: Irreversible injury begins', 
          '⚰️ 2-6 hrs: Progressive cell death',
          '🕐 >12 hrs: Complete infarction'
        ],
        hint: '⏱️ Faster treatment = more muscle saved!'
      },

      {
        id: 'stemi-clinical-presentation',
        title: 'STEMI Clinical Presentation',
        type: 'accordion',
        backgroundColor: '#f0fdf4',
        textColor: '#166534',
        animation: 'fade',
        accordionItems: [
          {
            title: '💔 Typical Chest Pain',
            content: 'Severe, crushing, substernal chest pain lasting >20 minutes. Often described as "elephant on chest" or "worst pain of my life". May radiate to jaw, left arm, or back.'
          },
          {
            title: '😰 Associated Symptoms',
            content: 'Diaphoresis (sweating), nausea, vomiting, shortness of breath, lightheadedness, sense of impending doom. May have palpitations or syncope.'
          },
          {
            title: '⚠️ Atypical Presentations',
            content: 'Diabetes, elderly, women may have atypical symptoms: fatigue, weakness, jaw pain, back pain, indigestion, or silent MI. Always maintain high suspicion.'
          },
          {
            title: '🩺 Physical Findings',
            content: 'May appear anxious, diaphoretic, pale. Vital signs: tachycardia, hypertension (early) or hypotension (cardiogenic shock). Listen for new murmurs or rales.'
          }
        ],
        hint: '🎯 Classic triad: Chest pain + ECG changes + Symptoms'
      },

      {
        id: 'unit1-quiz',
        title: 'Unit 1 Knowledge Check',
        type: 'quiz',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'slide',
        question: 'A 55-year-old male presents with severe chest pain for 45 minutes. ECG shows 3mm ST elevation in leads V1-V4. What is the most critical time-based goal?',
        options: [
          'Obtain cardiac enzymes within 30 minutes',
          'Door-to-balloon time <90 minutes', 
          'Beta-blocker initiation within 2 hours',
          'Echocardiogram within 4 hours'
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! In STEMI, the door-to-balloon time <90 minutes is the most critical goal. This patient has anterior STEMI based on ST elevation in V1-V4, requiring immediate cardiac catheterization for primary PCI."
      },

      // ===============================================
      // 🎯 UNIT 2: ST ELEVATION CRITERIA (7 slides)
      // ===============================================
      {
        id: 'unit2-intro',
        title: '🎯 Unit 2: ST Elevation Criteria',
        content: 'Master the precise criteria for diagnosing STEMI! Learn the millimeter measurements and lead requirements that determine emergency treatment.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/ecg/MI_ecg_database/Anterior_wall_MI/AMI5.jpg',
        imageAlt: 'ECG showing ST elevation meeting STEMI criteria',
        highlights: [
          '📏 Precise millimeter criteria',
          '🎯 Two contiguous leads required',
          '⚖️ Age and gender differences',
          '🔍 J-point measurement technique'
        ],
        hint: '📐 Measurement precision saves lives!',
        audioUrl: '/lessonaudio/stemi/st-elevation-criteria.mp3'
      },

      {
        id: 'st-elevation-measurement',
        title: 'ST Elevation Measurement Technique',
        type: 'steps',
        backgroundColor: '#fefbf3', 
        textColor: '#7c2d12',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Identify J-Point',
            description: 'Locate the J-point: junction between QRS complex and ST segment'
          },
          {
            number: 2,
            title: 'Draw Baseline',
            description: 'Draw isoelectric line using TP segment (between T wave and next P wave)'
          },
          {
            number: 3,
            title: 'Measure Elevation',
            description: 'Measure vertical distance from baseline to J-point in millimeters'
          },
          {
            number: 4,
            title: 'Apply Criteria',
            description: 'Compare measurement to age/gender-specific STEMI criteria'
          },
          {
            number: 5,
            title: 'Check Contiguity',
            description: 'Confirm ST elevation in at least 2 contiguous leads'
          }
        ],
        hint: '📏 J-point measurement is the gold standard'
      },

      {
        id: 'stemi-criteria-table',
        title: 'STEMI Criteria by Lead Group',
        type: 'accordion',
        backgroundColor: '#f9fafb',
        textColor: '#111827',
        animation: 'fade',
        accordionItems: [
          {
            title: '📈 Precordial Leads (V1-V6)',
            content: 'MEN >40 years: ≥2.0mm in V2-V3, ≥1.0mm in V4-V6\nMEN <40 years: ≥2.5mm in V2-V3, ≥1.0mm in V4-V6\nWOMEN all ages: ≥1.5mm in V2-V3, ≥1.0mm in V4-V6\nV1: ≥1.0mm for all groups'
          },
          {
            title: '📊 Limb Leads (I, II, III, aVF, aVL)',
            content: 'ALL PATIENTS: ≥1.0mm ST elevation\nMust be in 2+ contiguous leads\nLeads I + aVL = lateral\nLeads II, III, aVF = inferior\nReciprocal depression may be present'
          },
          {
            title: '🎯 Posterior Leads (V7-V9)',
            content: 'V7-V9: ≥0.5mm ST elevation\nOften missed without posterior leads\nLook for tall R waves in V1-V2\nST depression in V1-V3 may be reciprocal'
          },
          {
            title: '⚡ Special Considerations',
            content: 'Bundle branch blocks may mask ST elevation\nPacemaker rhythms require different criteria\nEarly repolarization pattern must be excluded\nConsider posterior MI if isolated ST depression V1-V3'
          }
        ],
        hint: '📐 Age and gender matter for criteria!'
      },

      {
        id: 'contiguous-leads-concept',
        title: 'Contiguous Leads Requirements',
        type: 'flashcard',
        flashcardFront: '🔗 Why must ST elevation be present in 2+ contiguous leads for STEMI diagnosis?',
        flashcardBack: 'CONTIGUOUS LEADS ensure regional injury:\n\n🎯 ANATOMICAL: Adjacent leads view same cardiac region\n🔍 ACCURACY: Reduces false positives from artifacts\n⚡ EXTENT: Confirms sufficient muscle mass affected\n📊 RELIABILITY: Distinguishes true injury from normal variants\n\nEXAMPLE: V2-V3 elevation = anterior STEMI\nSingle lead elevation often = artifact or normal variant',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/ecg/MI_ecg_database/Anterior_wall_MI/AMI6.jpg',
        imageAlt: 'ECG showing contiguous ST elevation in multiple leads'
      },

      {
        id: 'st-elevation-mimics',
        title: 'ST Elevation Mimics (Non-STEMI)',
        type: 'tabs',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: 'Early Repolarization',
            content: '✅ Benign variant in young athletes\n📈 Concave ST elevation (J-point notching)\n🎯 Most prominent in V2-V5\n💓 High-take off pattern\n⚡ No reciprocal changes\n🏃‍♂️ More common in African Americans'
          },
          {
            title: 'Pericarditis', 
            content: '🔥 Inflammation of pericardium\n📊 Widespread concave ST elevation\n🎯 PR depression (pathognomonic)\n⚡ No reciprocal changes\n🩺 Friction rub on exam\n💔 Chest pain positional'
          },
          {
            title: 'LVH/Strain Pattern',
            content: '💪 Left ventricular hypertrophy\n📈 ST elevation in V1-V3\n⚖️ Opposite to QRS vector\n🔍 Discordant pattern\n📊 Usually with LVH voltage criteria\n🩺 Chronic condition'
          }
        ],
        hint: '🚨 Not all ST elevation is STEMI!'
      },

      {
        id: 'measurement-practice',
        title: 'ST Measurement Practice',
        type: 'highlight',
        backgroundColor: '#f0fdf4',
        textColor: '#166534', 
        animation: 'fade',
        content: 'Practice measuring ST elevation on this anterior STEMI example. Identify the J-point, establish baseline, and measure elevation height.',
        imageUrl: '/ecg/MI_ecg_database/Anterior_wall_MI/AMI8.jpg',
        imageAlt: 'Practice ECG for ST elevation measurement',
        highlights: [
          '📍 Locate J-point precisely',
          '📏 Use TP segment as baseline',
          '📐 Measure in millimeters',
          '✅ Apply appropriate criteria'
        ],
        hint: '🎯 Precision in measurement = accuracy in diagnosis'
      },

      {
        id: 'unit2-quiz',
        title: 'Unit 2 Knowledge Check',
        type: 'quiz',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        question: 'A 35-year-old male presents with chest pain. ECG shows 2.3mm ST elevation in V2-V3 and 1.2mm in V4. Does this meet STEMI criteria?',
        options: [
          'No, requires ≥2.5mm in V2-V3 for men <40',
          'Yes, meets criteria for anterior STEMI',
          'Unclear, need posterior leads',
          'No, needs elevation in limb leads too'
        ],
        correctAnswer: 0,
        explanation: "✅ Correct! For men <40 years, STEMI criteria require ≥2.5mm ST elevation in V2-V3 (this patient has only 2.3mm). This emphasizes the importance of age-specific criteria in STEMI diagnosis."
      },

      // ===============================================
      // 🎯 UNIT 3: TERRITORY RECOGNITION (7 slides) 
      // ===============================================
      {
        id: 'unit3-intro',
        title: '🎯 Unit 3: Territory Recognition',
        content: 'Master coronary territory identification! Learn which leads represent which arteries and predict the culprit vessel.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/ecg/MI_ecg_database/Inferior_wall_MI/imi (2).jpg',
        imageAlt: 'Inferior STEMI showing territory-specific ST elevation',
        highlights: [
          '🗺️ Anatomical correlation',
          '🫀 Culprit artery prediction',
          '⚡ Lead grouping patterns',
          '🎯 Clinical implications'
        ],
        hint: '🗺️ ECG geography predicts coronary anatomy!'
      },

      {
        id: 'coronary-anatomy-overview',
        title: 'Coronary Artery Anatomy',
        type: 'tabs',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        tabs: [
          {
            title: 'LAD Territory',
            content: '🎯 Left Anterior Descending\n📊 Supplies: Anterior wall, septum\n⚡ ECG Leads: V1-V6, I, aVL\n💔 Largest territory\n🚨 "Widow maker" - highest mortality\n🏥 Most common STEMI location'
          },
          {
            title: 'RCA Territory',
            content: '🎯 Right Coronary Artery\n📊 Supplies: Inferior wall, RV\n⚡ ECG Leads: II, III, aVF\n💓 Often supplies posterior wall\n🫀 Usually supplies SA/AV nodes\n⚖️ Right vs left dominant system'
          },
          {
            title: 'LCX Territory',
            content: '🎯 Left Circumflex\n📊 Supplies: Lateral wall, posterior\n⚡ ECG Leads: I, aVL, V5-V6\n🔍 Often "silent" - limited leads\n📈 May need posterior leads (V7-V9)\n⚠️ Easy to miss without high suspicion'
          }
        ],
        hint: '🫀 Three main territories, three main vessels'
      },

      {
        id: 'stemi-territories-detailed',
        title: 'STEMI Territory Classification',
        type: 'accordion',
        backgroundColor: '#f9fafb',
        textColor: '#111827',
        animation: 'fade',
        accordionItems: [
          {
            title: '⚡ Anterior STEMI (LAD)',
            content: 'LEADS: V1-V6, may include I, aVL\nARTERY: Left Anterior Descending (LAD)\nWALL: Anterior and septal walls\nCOMPLICATIONS: Pump failure, VT/VF, heart block\nMORTALITY: Highest (largest territory)\nRECIPROCAL: May see depression in inferior leads'
          },
          {
            title: '⚡ Inferior STEMI (RCA)',
            content: 'LEADS: II, III, aVF\nARTERY: Right Coronary Artery (90%) or LCX (10%)\nWALL: Inferior (diaphragmatic) wall\nCOMPLICATIONS: Bradycardia, AV blocks, RV involvement\nMORTALITY: Lower than anterior\nRECIPROCAL: Often see depression in I, aVL'
          },
          {
            title: '⚡ Lateral STEMI (LCX)',
            content: 'LEADS: I, aVL, V5-V6\nARTERY: Left Circumflex (LCX)\nWALL: Lateral wall\nCOMPLICATIONS: Mitral regurgitation\nMORTALITY: Moderate\nRECIPROCAL: May see depression in inferior leads'
          },
          {
            title: '⚡ Posterior STEMI (RCA/LCX)',
            content: 'LEADS: V7-V9 (often missed!)\nARTERY: RCA (dominant) or LCX\nWALL: Posterior wall\nCLUE: Tall R waves V1-V2, ST depression V1-V3\nMORTALITY: Often underdiagnosed\nRECIPROCAL: ST depression in precordial leads'
          }
        ],
        hint: '🗺️ Each territory has unique signature!'
      },

      {
        id: 'culprit-artery-prediction',
        title: 'Predicting the Culprit Artery',
        type: 'steps',
        backgroundColor: '#fefbf3',
        textColor: '#7c2d12',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Identify ST Elevation Pattern',
            description: 'Look at which leads show ST elevation and group them by territory'
          },
          {
            number: 2,
            title: 'Check Reciprocal Changes',
            description: 'Reciprocal ST depression helps confirm territory and culprit vessel'
          },
          {
            number: 3,
            title: 'Assess Lead Magnitude',
            description: 'Higher ST elevation often indicates more proximal occlusion'
          },
          {
            number: 4,
            title: 'Look for RV Involvement',
            description: 'Right-sided leads (V3R-V6R) help identify RCA vs LCX in inferior MI'
          },
          {
            number: 5,
            title: 'Consider Posterior Leads',
            description: 'V7-V9 may reveal posterior involvement, especially with LCX occlusion'
          }
        ],
        hint: '🎯 Pattern recognition predicts anatomy'
      },

      {
        id: 'territory-complications',
        title: 'Territory-Specific Complications',
        type: 'flashcard',
        flashcardFront: '⚠️ What complications are most likely with inferior STEMI vs anterior STEMI?',
        flashcardBack: 'INFERIOR STEMI (RCA) Complications:\n⚡ Bradycardia & AV blocks (RCA supplies SA/AV nodes)\n🫀 Right ventricular involvement\n💧 Relative hypotension\n🎯 Generally better prognosis\n\nANTERIOR STEMI (LAD) Complications:\n💔 Pump failure & cardiogenic shock (largest territory)\n⚡ Ventricular arrhythmias (VT/VF)\n🚨 Mechanical complications (papillary muscle rupture)\n☠️ Highest mortality rate',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/ecg/MI_ecg_database/Inferior_wall_MI/imi (3).jpg',
        imageAlt: 'Inferior STEMI with characteristic complications'
      },

      {
        id: 'reciprocal-changes',
        title: 'Understanding Reciprocal Changes',
        type: 'highlight',
        backgroundColor: '#fff7ed',
        textColor: '#c2410c',
        animation: 'fade',
        content: 'Reciprocal changes (ST depression) in leads opposite to ST elevation strongly support STEMI diagnosis and help localize the culprit vessel.',
        imageUrl: '/ecg/MI_ecg_database/Lateral_wall_MI/LMI.jpg',
        imageAlt: 'ECG showing reciprocal changes with inferior STEMI',
        highlights: [
          '🔄 Electrical opposite of injury',
          '✅ Confirms true STEMI',
          '🎯 Helps localize culprit vessel',
          '⚠️ Absence doesn\'t rule out STEMI'
        ],
        hint: '🔄 Reciprocal changes = STEMI confirmation'
      },

      {
        id: 'unit3-quiz',
        title: 'Unit 3 Knowledge Check', 
        type: 'quiz',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'slide',
        question: 'ECG shows 4mm ST elevation in II, III, aVF with reciprocal depression in I, aVL. Which artery is most likely occluded?',
        options: [
          'Left anterior descending (LAD)',
          'Left circumflex (LCX)', 
          'Right coronary artery (RCA)',
          'Left main coronary artery'
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! ST elevation in II, III, aVF with reciprocal depression in I, aVL indicates inferior STEMI. The RCA supplies the inferior wall in 90% of patients, making it the most likely culprit vessel."
      },

      // ===============================================
      // 🎯 UNIT 4: TIME-CRITICAL RECOGNITION (7 slides)
      // ===============================================
      {
        id: 'unit4-intro',
        title: '🎯 Unit 4: Time-Critical Recognition',
        content: 'Master rapid STEMI recognition! Learn the systematic approach for emergency decision-making in time-critical situations.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fdf4',
        textColor: '#166534',
        animation: 'fade',
        imageUrl: '/ecg/MI_ecg_database/Inferior_wall_MI/imi (4).jpg',
        imageAlt: 'Time-critical STEMI requiring immediate recognition',
        highlights: [
          '⏱️ Systematic 10-second approach',
          '🚨 Emergency decision-making',
          '📋 Activation criteria',
          '⚡ Rapid interpretation skills'
        ],
        hint: '⏰ Speed + Accuracy = Lives Saved!',
        videoUrl: '/lessonvideos/stemi-recognition-rapid.mp4'
      },

      {
        id: 'rapid-stemi-algorithm',
        title: '10-Second STEMI Recognition Algorithm',
        type: 'steps',
        backgroundColor: '#fefbf3',
        textColor: '#7c2d12', 
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Rate & Rhythm (2 sec)',
            description: 'Quick assessment: Is there an organized rhythm? Severe bradycardia or VT/VF?'
          },
          {
            number: 2,
            title: 'ST Elevation Scan (3 sec)',
            description: 'Rapid visual scan for ST elevation. Look for "tombstone" pattern or obvious elevation'
          },
          {
            number: 3,
            title: 'Lead Grouping (2 sec)',
            description: 'Group elevated leads: Anterior (V1-V6)? Inferior (II,III,aVF)? Lateral (I,aVL,V5-V6)?'
          },
          {
            number: 4,
            title: 'Criteria Check (2 sec)',
            description: 'Quick mental check: Does elevation meet criteria? 2+ contiguous leads?'
          },
          {
            number: 5,
            title: 'Decision (1 sec)',
            description: 'STEMI or not? If yes: ACTIVATE CATH LAB immediately!'
          }
        ],
        hint: '⚡ 10 seconds can save a life!'
      },

      {
        id: 'stemi-alert-criteria',
        title: 'STEMI Alert Activation Criteria',
        type: 'accordion',
        backgroundColor: '#f9fafb',
        textColor: '#111827',
        animation: 'fade',
        accordionItems: [
          {
            title: '✅ Definite STEMI Criteria',
            content: 'ST elevation meeting criteria in 2+ contiguous leads\nSymptoms <12 hours (or ongoing)\nNo contraindications to PCI\nPatient appropriate for aggressive care\n→ ACTIVATE STEMI ALERT IMMEDIATELY'
          },
          {
            title: '🤔 Consider STEMI Equivalent',
            content: 'New LBBB with appropriate clinical context\nPosterior STEMI (ST depression V1-V3 + tall R waves)\nVery wide complex tachycardia in STEMI context\n→ CARDIOLOGY CONSULT, likely activation'
          },
          {
            title: '⚠️ Borderline Cases',
            content: 'ST elevation not quite meeting criteria but high clinical suspicion\nAtypical presentation but concerning ECG changes\nEvolutionary changes on serial ECGs\n→ CARDIOLOGY CONSULTATION required'
          },
          {
            title: '❌ Do Not Activate For',
            content: 'Obvious artifact or electrode placement issues\nClear ST elevation mimics (early repolarization, pericarditis)\nOld STEMI with persistent ST elevation\nPatient not candidate for PCI (comfort care only)'
          }
        ],
        hint: '🚨 When in doubt, cardiology consultation!'
      },

      {
        id: 'serial-ecg-importance',
        title: 'Serial ECG Monitoring',
        type: 'flashcard',
        flashcardFront: '📈 Why are serial ECGs crucial in suspected STEMI patients?',
        flashcardBack: 'SERIAL ECG BENEFITS:\n\n📊 EVOLUTION: STEMI changes evolve over time\n⚡ DYNAMIC: Vessel may reopen/close spontaneously\n🎯 CONFIRMATION: Confirms true changes vs artifact\n📈 PROGRESSION: Shows worsening (need for urgent PCI)\n✅ RESOLUTION: Shows improvement (successful reperfusion)\n\nFREQUENCY: Every 15-30 minutes until definitive treatment\nCOMPARISON: Always compare to prior ECGs',
        backgroundColor: '#f0fdf4',
        textColor: '#166534',
        animation: 'fade'
      },

      {
        id: 'stemi-equivalent-patterns',
        title: 'STEMI Equivalent Patterns',
        type: 'tabs',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: 'New LBBB',
            content: '⚡ New or presumably new LBBB\n💔 In setting of acute chest pain\n🎯 Indicates proximal LAD occlusion\n⏰ Same urgency as classic STEMI\n🏥 Activate cath lab immediately\n📊 May mask ST elevation'
          },
          {
            title: 'Posterior STEMI',
            content: '📈 Tall R waves in V1-V2 (≥R/S ratio >1)\n📉 ST depression V1-V3 (reciprocal)\n🔍 Need posterior leads V7-V9\n🎯 Often LCX or RCA culprit\n⚠️ Easily missed without suspicion\n💡 Consider in isolated ST depression'
          },
          {
            title: 'De Winter Pattern',
            content: '📈 Upsloping ST depression V1-V6\n⚡ Tall, peaked T waves precordial\n🎯 LAD occlusion (no ST elevation yet)\n⏰ Pre-STEMI pattern\n🚨 High specificity for LAD occlusion\n💉 Needs immediate catheterization'
          }
        ],
        hint: '🎯 Not all "STEMI" shows classic ST elevation!'
      },

      {
        id: 'emergency-communication',
        title: 'Emergency Communication Protocol',
        type: 'highlight',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        content: 'Clear, concise communication can save precious minutes. Use standardized STEMI alert language and avoid medical jargon when activating the cath lab.',
        highlights: [
          '📞 "STEMI ALERT ACTIVATION"',
          '👤 Patient age and location',
          '⚡ Territory (anterior/inferior/lateral)',
          '⏰ Symptom onset time'
        ],
        hint: '📞 Clear communication = Faster treatment',
        audioUrl: '/lessonaudio/stemi/emergency-communication.mp3'
      },

      {
        id: 'unit4-quiz',
        title: 'Unit 4 Knowledge Check',
        type: 'quiz',
        backgroundColor: '#f0fdf4',
        textColor: '#166534',
        animation: 'slide',
        question: 'Using the 10-second algorithm, what is your immediate action for a patient with 3mm ST elevation in V2-V4 and chest pain for 2 hours?',
        options: [
          'Order cardiac enzymes first',
          'Get cardiology consultation',
          'Activate STEMI alert immediately',
          'Obtain echocardiogram'
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! This is anterior STEMI (V2-V4 elevation >2mm) with recent symptom onset. The 10-second algorithm leads to immediate STEMI alert activation. Time is muscle!"
      },

      // ===============================================
      // 🎯 UNIT 5: DIFFERENTIAL DIAGNOSIS (7 slides)
      // ===============================================
      {
        id: 'unit5-intro',
        title: '🎯 Unit 5: Differential Diagnosis',
        content: 'Master STEMI mimics and differentials! Learn to distinguish true STEMI from conditions that can mimic ST elevation.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        highlights: [
          '🎭 Common STEMI mimics',
          '🔍 Key differentiating features', 
          '⚖️ Clinical context importance',
          '🎯 Avoiding false activation'
        ],
        hint: '🎭 Not every ST elevation is a heart attack!'
      },

      {
        id: 'stemi-mimic-overview',
        title: 'Common STEMI Mimics',
        type: 'accordion',
        backgroundColor: '#f9fafb',
        textColor: '#111827',
        animation: 'fade',
        accordionItems: [
          {
            title: '🏃‍♂️ Early Repolarization',
            content: 'FEATURES: Concave ST elevation, J-point notching, young athletes\nLOCATION: Usually V2-V5, sometimes limb leads\nCLINICAL: Asymptomatic, stable over time\nKEY: Concave shape vs convex in STEMI'
          },
          {
            title: '🔥 Acute Pericarditis',
            content: 'FEATURES: Widespread concave ST elevation, PR depression\nLOCATION: Multiple territories (not anatomical)\nCLINICAL: Positional chest pain, friction rub\nKEY: PR depression is pathognomonic'
          },
          {
            title: '⚡ LVH with Strain',
            content: 'FEATURES: ST elevation opposite to QRS vector\nLOCATION: Usually V1-V3\nCLINICAL: History of hypertension\nKEY: Discordant to QRS, meets LVH criteria'
          },
          {
            title: '🧠 Cerebral T waves',
            content: 'FEATURES: Deep T wave inversions, sometimes ST elevation\nLOCATION: Precordial leads\nCLINICAL: Recent stroke or brain injury\nKEY: Neurological event preceding ECG changes'
          }
        ],
        hint: '🔍 Shape and clinical context are key!'
      },

      {
        id: 'pericarditis-vs-stemi',
        title: 'Pericarditis vs STEMI Differentiation',
        type: 'tabs',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        tabs: [
          {
            title: 'ST Elevation Pattern',
            content: 'PERICARDITIS:\n📈 Concave ("saddle-shaped")\n🌍 Widespread (multiple territories)\n📊 Usually <3mm elevation\n\nSTEMI:\n📈 Convex ("tombstone")\n🎯 Anatomical distribution\n📊 Often >2-3mm elevation'
          },
          {
            title: 'Associated Changes',
            content: 'PERICARDITIS:\n📉 PR depression (key finding!)\n🚫 No reciprocal ST depression\n⚡ No Q wave development\n\nSTEMI:\n📉 Reciprocal ST depression\n🚫 No PR depression\n⚡ Q waves develop later'
          },
          {
            title: 'Clinical Features',
            content: 'PERICARDITIS:\n💺 Positional chest pain\n🩺 Pericardial friction rub\n🌡️ Often follows viral illness\n\nSTEMI:\n💔 Severe, constant chest pain\n😰 Diaphoresis, nausea\n⚡ Hemodynamic compromise'
          }
        ],
        hint: '🔑 PR depression = pericarditis!'
      },

      {
        id: 'early-repolarization-pattern',
        title: 'Early Repolarization Recognition',
        type: 'flashcard',
        flashcardFront: '🏃‍♂️ How do you distinguish benign early repolarization from STEMI?',
        flashcardBack: 'EARLY REPOLARIZATION features:\n\n📈 CONCAVE ST elevation (vs convex in STEMI)\n🎯 J-point notching or slurring\n📊 Usually <2mm elevation\n🏃‍♂️ Young, athletic patients\n⚡ No reciprocal changes\n📅 Stable over time\n🚫 Asymptomatic\n\nSTEMI features:\n📈 CONVEX elevation, ≥ criteria\n💔 Acute chest pain\n🔄 Reciprocal changes\n📈 Progressive/dynamic changes',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade'
      },

      {
        id: 'clinical-context-importance',
        title: 'Clinical Context in ECG Interpretation',
        type: 'steps',
        backgroundColor: '#fefbf3',
        textColor: '#7c2d12',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Patient Age & Gender',
            description: 'Young athletes more likely early repolarization; older patients more likely STEMI'
          },
          {
            number: 2,
            title: 'Symptom Character',
            description: 'Typical anginal pain supports STEMI; positional pain suggests pericarditis'
          },
          {
            number: 3,
            title: 'Symptom Onset',
            description: 'Acute onset supports STEMI; gradual onset suggests other causes'
          },
          {
            number: 4,
            title: 'Risk Factors',
            description: 'Cardiac risk factors increase STEMI probability; recent illness suggests pericarditis'
          },
          {
            number: 5,
            title: 'Physical Examination',
            description: 'Diaphoresis, S3 gallop support STEMI; friction rub suggests pericarditis'
          }
        ],
        hint: '🧩 ECG + Clinical picture = Accurate diagnosis'
      },

      {
        id: 'hyperacute-t-waves',
        title: 'Hyperacute T Waves - Early STEMI Sign',
        type: 'highlight',
        backgroundColor: '#fff7ed',
        textColor: '#c2410c',
        animation: 'fade',
        content: 'Hyperacute T waves may be the earliest ECG sign of STEMI, appearing before ST elevation. Look for tall, peaked, broad-based T waves in the setting of chest pain.',
        highlights: [
          '⚡ Earliest STEMI sign',
          '📈 Tall, peaked, broad T waves',
          '⏰ Precedes ST elevation',
          '🎯 High specificity for occlusion'
        ],
        hint: '⚡ Hyperacute T waves = Very early STEMI!'
      },

      {
        id: 'posterior-stemi-recognition',
        title: 'Posterior STEMI - The Hidden STEMI',
        type: 'highlight',
        backgroundColor: '#f0fdf4',
        textColor: '#166534',
        animation: 'fade',
        content: 'Posterior STEMI is easily missed because standard ECG leads don\'t directly view the posterior wall. Look for indirect signs and always consider posterior leads V7-V9.',
        highlights: [
          '📈 Tall R waves in V1-V2',
          '📉 ST depression V1-V3 (reciprocal)',
          '🔍 Need posterior leads V7-V9',
          '⚠️ Often missed diagnosis'
        ],
        hint: '🔍 Think posterior with isolated anterior ST depression!'
      },

      {
        id: 'unit5-quiz',
        title: 'Unit 5 Knowledge Check',
        type: 'quiz',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'slide',
        question: 'A 25-year-old athlete has 1.5mm concave ST elevation in V2-V5 with J-point notching. No chest pain. Most likely diagnosis?',
        options: [
          'Anterior STEMI requiring cath lab activation',
          'Acute pericarditis requiring anti-inflammatories',
          'Benign early repolarization - no acute treatment',
          'Posterior STEMI requiring posterior leads'
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! This is classic benign early repolarization: young athlete, concave ST elevation with J-point notching, asymptomatic. No acute treatment needed, but document as baseline pattern."
      },

      // ===============================================
      // 🎯 UNIT 6: EMERGENCY MANAGEMENT (7 slides)
      // ===============================================
      {
        id: 'unit6-intro',
        title: '🎯 Unit 6: Emergency Management',
        content: 'Master emergency STEMI management! Learn the immediate actions and treatment pathways that save lives.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        highlights: [
          '🚨 Immediate interventions',
          '💉 Primary PCI pathway',
          '⚡ Door-to-balloon goals',
          '💊 Adjunctive therapies'
        ],
        hint: '⚡ Time-sensitive interventions save muscle!',
        videoUrl: '/lessonvideos/stemi-emergency-management.mp4'
      },

      {
        id: 'immediate-stemi-management',
        title: 'Immediate STEMI Management Protocol',
        type: 'steps',
        backgroundColor: '#fefbf3',
        textColor: '#7c2d12',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Activate STEMI Alert (0-5 min)',
            description: 'Call cath lab immediately. Notify interventional cardiology team. Start door-to-balloon timer.'
          },
          {
            number: 2,
            title: 'Initial Stabilization (0-10 min)',
            description: 'IV access, continuous monitoring, oxygen if SpO2 <90%, sublingual nitroglycerin (if BP >90), morphine for pain'
          },
          {
            number: 3,
            title: 'Antiplatelet Therapy (0-15 min)',
            description: 'Aspirin 325mg chewed, P2Y12 inhibitor (clopidogrel 600mg or ticagrelor 180mg), consider GPIIb/IIIa inhibitor'
          },
          {
            number: 4,
            title: 'Anticoagulation (0-20 min)',
            description: 'Heparin (UFH or LMWH) or bivalirudin per protocol. Dosing based on weight and renal function.'
          },
          {
            number: 5,
            title: 'Primary PCI Preparation (20-90 min)',
            description: 'Transport to cath lab, final labs, consent if possible, maintain door-to-balloon <90 minutes'
          }
        ],
        hint: '⚡ Parallel processing saves time!'
      },

      {
        id: 'door-to-balloon-goals',
        title: 'Door-to-Balloon Time Goals',
        type: 'flashcard',
        flashcardFront: '⏰ What are the door-to-balloon time goals and why are they critical?',
        flashcardBack: 'DOOR-TO-BALLOON GOALS:\n\n🎯 PRIMARY GOAL: <90 minutes\n🥇 OPTIMAL: <60 minutes\n🏆 EXCEPTIONAL: <30 minutes\n\nWHY CRITICAL:\n💔 Every 30-minute delay = ↑7.5% mortality\n⚡ Peak salvage in first 2-3 hours\n🎯 Greatest benefit when <6 hours\n⏰ Time = muscle = survival\n\nSYSTEMS OF CARE:\n🏥 Pre-hospital ECG transmission\n📞 Cath lab activation from field\n👥 Parallel processing protocols',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade'
      },

      {
        id: 'primary-pci-vs-thrombolysis',
        title: 'Primary PCI vs Thrombolytic Therapy',
        type: 'tabs',
        backgroundColor: '#f9fafb',
        textColor: '#111827',
        animation: 'fade',
        tabs: [
          {
            title: 'Primary PCI (Preferred)',
            content: '✅ ADVANTAGES:\n• Superior outcomes\n• Lower mortality\n• Reduced stroke risk\n• Defines anatomy\n• Treats mechanical complications\n\n⚠️ REQUIREMENTS:\n• Available within 90 minutes\n• 24/7 cath lab capability\n• Experienced team'
          },
          {
            title: 'Thrombolytic Therapy',
            content: '✅ WHEN TO USE:\n• PCI not available <90 minutes\n• Long transport to PCI center\n• No contraindications\n• Symptom onset <12 hours\n\n❌ CONTRAINDICATIONS:\n• Recent surgery/bleeding\n• Previous stroke\n• Active bleeding\n• Severe hypertension'
          },
          {
            title: 'Decision Algorithm',
            content: '🎯 FIRST-LINE: Primary PCI if available <90 min\n\n⚡ IF PCI DELAYED:\n• Consider thrombolytics <3 hours from symptom onset\n• Transfer for rescue PCI if thrombolytics fail\n\n🚑 TRANSFER CONSIDERATIONS:\n• Shock or high-risk features\n• Failed thrombolysis\n• Mechanical complications'
          }
        ],
        hint: '🥇 Primary PCI is gold standard when available!'
      },

      {
        id: 'adjunctive-medical-therapy',
        title: 'Adjunctive Medical Therapies',
        type: 'accordion',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        accordionItems: [
          {
            title: '💊 Antiplatelet Therapy',
            content: 'ASPIRIN: 325mg chewed, then 81mg daily lifelong\nP2Y12 INHIBITOR: Clopidogrel 600mg load, then 75mg daily OR Ticagrelor 180mg load, then 90mg BID\nDURATION: Dual antiplatelet therapy for minimum 12 months'
          },
          {
            title: '🩸 Anticoagulation',
            content: 'UFH: Weight-based dosing, ACT-guided in cath lab\nENOXAPARIN: 1mg/kg SC BID (adjust for renal function)\nBIVALIRUDIN: Direct thrombin inhibitor, lower bleeding risk\nDURATION: Periprocedural, discontinue after PCI unless other indication'
          },
          {
            title: '🫀 Beta-blockers',
            content: 'START: Within 24 hours if hemodynamically stable\nBENEFITS: Reduce mortality, prevent arrhythmias\nCONTRAINDICATIONS: Cardiogenic shock, severe CHF, AV block\nTARGET: Heart rate 50-60 bpm, avoid hypotension'
          },
          {
            title: '💉 ACE Inhibitors',
            content: 'START: Within 24 hours if no contraindications\nBENEFITS: Prevent remodeling, reduce mortality\nCONTRAINDICATIONS: Hypotension, hyperkalemia, renal dysfunction\nTITRATE: To maximum tolerated dose over weeks'
          }
        ],
        hint: '💊 Evidence-based therapies improve outcomes!'
      },

      {
        id: 'complications-monitoring',
        title: 'Monitoring for Complications',
        type: 'highlight',
        backgroundColor: '#fff7ed',
        textColor: '#c2410c',
        animation: 'fade',
        content: 'STEMI patients require intensive monitoring for mechanical complications, arrhythmias, and signs of cardiogenic shock.',
        highlights: [
          '💔 Mechanical complications (rupture)',
          '⚡ Arrhythmias (VT/VF/AV block)',
          '🩸 Bleeding complications',
          '💧 Cardiogenic shock signs'
        ],
        hint: '👁️ Close monitoring prevents secondary complications'},

      {
        id: 'unit6-quiz',
        title: 'Unit 6 Knowledge Check',
        type: 'quiz',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'slide',
        question: 'A STEMI patient received primary PCI 45 minutes after arrival. What is the most appropriate next step regarding antiplatelet therapy?',
        options: [
          'Stop all antiplatelet therapy after PCI',
          'Continue aspirin only for 1 month',
          'Continue dual antiplatelet therapy for at least 12 months',
          'Switch to warfarin immediately'
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! After primary PCI for STEMI, dual antiplatelet therapy (aspirin + P2Y12 inhibitor) should be continued for at least 12 months unless contraindicated, to prevent stent thrombosis and recurrent events."
      },

      // ===============================================
      // 🎯 FINAL COMPLETION SLIDE
      // ===============================================
      {
        id: 'stemi-mastery-complete',
        title: '🏆 STEMI Recognition Mastery Complete!',
        content: 'Outstanding! You\'ve mastered STEMI recognition through comprehensive 6-unit training covering fundamentals, criteria, territories, time-critical recognition, differentials, and emergency management. You can now recognize and manage STEMI like an expert!',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: '/lessonimages/stemi-mastery-complete.png',
        imageAlt: 'Completion celebration - STEMI recognition mastery achieved',
        highlights: [
          '✅ STEMI fundamentals mastery',
          '✅ ST elevation criteria expertise',
          '✅ Territory recognition skills',
          '✅ Time-critical decision making',
          '✅ Differential diagnosis competency', 
          '✅ Emergency management protocols',
          '✅ Ready for advanced cardiac emergencies!'
        ],
        hint: '🎉 You\'re now a STEMI recognition expert!'}
    ],
    
    summary: "🎉 Outstanding! You've achieved mastery of STEMI Recognition Fundamentals with comprehensive 6-unit training covering basics, criteria, territories, time-critical recognition, differentials, and emergency management. You can now recognize, evaluate, and manage STEMI like an expert emergency physician!",
    keyPoints: [
      '⚡ STEMI = Complete coronary occlusion requiring emergency PCI',
      '📏 Age/gender-specific ST elevation criteria must be met',
      '🗺️ Territory recognition predicts culprit vessel',
      '⏰ 10-second recognition algorithm saves lives',
      '🎭 Distinguish true STEMI from mimics',
      '🚨 Door-to-balloon goal <90 minutes'
    ],
    resources: []
  },
  
  // ============= ENHANCED DUOLINGO-STYLE TASKS (Final Assessment Only) =============
  tasks: [
    
    // ==================== FINAL MASTERY ASSESSMENT ====================
    {
      id: 'final-stemi-mastery-assessment',
      type: 'final-assessment',
      xp: 50,
      audio: {
        mainNarration: {
          audioUrl: '/lessonaudio/module5/lesson69/expert-mastery-celebration.mp3',
          duration: 15,
          transcript: "Congratulations on completing all 6 units of STEMI recognition! You've mastered fundamentals, ST elevation criteria, territory recognition, time-critical recognition, differentials, and emergency management. Now prove your mastery with this comprehensive assessment."
        }
      },
      images: {
        mainImage: '/ecg/MI_ecg_database/Anterior_wall_MI/AMI.jpg',
        slideImages: []
      },
      content: {
        prerequisiteMessage: "🏆 Final Assessment: Complete all 6 units to unlock your STEMI Recognition Mastery Certificate!",
        questions: [
          {
            id: "stemi-criteria-assessment",
            type: "multiple-choice",
            question: "A 42-year-old male presents with chest pain. ECG shows 2.8mm ST elevation in V2-V3 and 1.3mm in V4. Does this meet STEMI criteria?",
            options: [
              "No, requires ≥2.5mm in V2-V3 for men <40 years",
              "Yes, meets criteria for anterior STEMI",
              "Unclear, need posterior leads for confirmation",
              "No, needs elevation in limb leads as well"
            ],
            correctAnswer: 1,
            explanation: "Correct! For men >40 years, STEMI criteria require ≥2.0mm in V2-V3 (this patient has 2.8mm) and ≥1.0mm in V4-V6 (has 1.3mm). This is anterior STEMI requiring immediate catheterization.",
            imageUrl: "/ecg/MI_ecg_database/Anterior_wall_MI/AMI3.jpg"
          },
          {
            id: "territory-recognition-assessment",
            type: "multiple-choice",
            question: "ECG shows 3mm ST elevation in II, III, aVF with reciprocal depression in I, aVL. The most likely culprit vessel is:",
            options: [
              "Left anterior descending (LAD)",
              "Left circumflex (LCX)",
              "Right coronary artery (RCA)",
              "Left main coronary artery"
            ],
            correctAnswer: 2,
            explanation: "Correct! ST elevation in II, III, aVF with reciprocal depression in I, aVL indicates inferior STEMI. The RCA supplies the inferior wall in 90% of patients, making it the most likely culprit vessel.",
            imageUrl: "/ecg/MI_ecg_database/Inferior_wall_MI/IMI.jpg"
          },
          {
            id: "time-critical-assessment",
            type: "multiple-choice",
            question: "A patient with anterior STEMI arrives at a PCI-capable hospital. What is the target door-to-balloon time?",
            options: [
              "≤60 minutes for optimal outcomes",
              "≤90 minutes per guidelines",
              "≤120 minutes is acceptable",
              "≤180 minutes for elderly patients"
            ],
            correctAnswer: 1,
            explanation: "Correct! The guideline-recommended door-to-balloon time is ≤90 minutes for STEMI patients at PCI-capable hospitals. Every 30-minute delay increases mortality by 7.5%.",
            imageUrl: "/ecg/MI_ecg_database/Anterior_wall_MI/AMI5.jpg"
          },
          {
            id: "stemi-mimic-assessment",
            type: "multiple-choice",
            question: "A 23-year-old athlete has 1.8mm concave ST elevation in V2-V5 with J-point notching. No chest pain. Most likely diagnosis:",
            options: [
              "Anterior STEMI requiring cath lab activation",
              "Acute pericarditis requiring anti-inflammatories",
              "Benign early repolarization - no acute treatment",
              "Posterior STEMI requiring posterior leads"
            ],
            correctAnswer: 2,
            explanation: "Correct! Young athlete with concave ST elevation, J-point notching, and no symptoms is classic benign early repolarization. No acute treatment needed, but document as baseline pattern.",
            imageUrl: "/lessonimages/early-repolarization-pattern.png"
          },
          {
            id: "wellens-pattern-assessment",
            type: "multiple-choice",
            question: "ECG shows biphasic T waves in V2-V3 during a pain-free period with minimal troponin elevation. This pattern indicates:",
            options: [
              "Normal variant T waves",
              "Wellens Type A syndrome - critical LAD stenosis",
              "Old anterior MI with chronic changes",
              "Pericarditis with precordial involvement"
            ],
            correctAnswer: 1,
            explanation: "Correct! Biphasic T waves in V2-V3 during pain-free periods = Wellens Type A syndrome (75% of cases), indicating critical LAD stenosis >90% and very high risk for anterior STEMI without intervention.",
            imageUrl: "/lessonimages/wellens-syndrome-pattern.png"
          },
          {
            id: "emergency-management-assessment",
            type: "multiple-choice",
            question: "Immediate management priorities for STEMI include all EXCEPT:",
            options: [
              "Aspirin 325mg chewed immediately",
              "Activate cath lab within 90 minutes",
              "Obtain echocardiogram before catheterization",
              "P2Y12 inhibitor loading dose"
            ],
            correctAnswer: 2,
            explanation: "Correct! Echocardiogram should NOT delay catheterization in STEMI. Priority is immediate DAPT, cath lab activation, and primary PCI. Echo can be done post-procedure if needed.",
            imageUrl: "/lessonimages/stemi-emergency-protocol.png"
          },
          {
            id: "complications-assessment",
            type: "multiple-choice",
            question: "Inferior STEMI patients are most likely to develop which complication compared to anterior STEMI?",
            options: [
              "Cardiogenic shock and pump failure",
              "Ventricular fibrillation and sudden death",
              "Bradycardia and AV conduction blocks",
              "Mechanical complications like papillary muscle rupture"
            ],
            correctAnswer: 2,
            explanation: "Correct! Inferior STEMI (RCA territory) commonly causes bradycardia and AV blocks because the RCA typically supplies the SA and AV nodes. Anterior STEMI more commonly causes pump failure and VF.",
            imageUrl: "/ecg/MI_ecg_database/Inferior_wall_MI/imi (2).jpg"
          },
          {
            id: "post-stemi-therapy-assessment",
            type: "multiple-choice",
            question: "After successful primary PCI for STEMI, what is the recommended duration of dual antiplatelet therapy?",
            options: [
              "1 month minimum then stop P2Y12 inhibitor",
              "6 months for high bleeding risk patients only",
              "At least 12 months unless contraindicated",
              "Indefinitely for all STEMI patients"
            ],
            correctAnswer: 2,
            explanation: "Correct! After primary PCI for STEMI, DAPT (aspirin + P2Y12 inhibitor) should continue for at least 12 months unless contraindicated by bleeding risk or other factors.",
            imageUrl: "/lessonimages/post-stemi-treatment-timeline.png"
          }
        ]
      }
    }
  ],
  
  // ============= LESSON COMPLETION METADATA =============
  completed: false,
  score: 0,
  attempts: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
