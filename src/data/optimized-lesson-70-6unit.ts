import { Lesson } from '@/types/learning';

// ENHANCED LESSON 70: NSTEMI Recognition Mastery - 6-Unit Comprehensive Structure
export const optimizedLesson70: Lesson = {
  id: 'module-4-lesson-2',
  moduleId: 'module-4',
  title: "NSTEMI Recognition Mastery",
  description: "Master NSTEMI recognition through 6 focused learning units: NSTEMI Fundamentals, ST Depression Patterns, Risk Stratification, Dynamic Changes, Troponin Integration, and Treatment Pathways - each with medical-accurate ECGs and interactive assessments",
  order: 2,
  estimatedTime: 45,
  content: {
    type: 'mixed',
    introduction: "💔 Welcome to NSTEMI Mastery! Learn comprehensive NSTEMI recognition through 6 progressive units with medical-accurate ECGs, strategic audio guidance, and risk stratification tools. Master the most common acute coronary syndrome.",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your NSTEMI Mastery Journey",
        content: "UNIT 1: NSTEMI Fundamentals → UNIT 2: ST Depression Patterns → UNIT 3: Risk Stratification → UNIT 4: Dynamic Changes → UNIT 5: Troponin Integration → UNIT 6: Treatment Pathways",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // ===============================================
      // 🎯 UNIT 1: NSTEMI FUNDAMENTALS (7 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: NSTEMI Fundamentals',
        content: 'Master the fundamental concepts of Non-ST-elevation myocardial infarction! Learn what makes NSTEMI the most common acute coronary syndrome.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/ecg/ecg_dataset_clean/ISCAL_ischemic_in_anterolateral_leads/clean_00135_ischemic in anterolateral leads.png',
        imageAlt: 'Classic NSTEMI pattern showing ischemic changes in anterolateral leads',
        highlights: [
          '💔 Most common ACS type',
          '⬇️ ST depression not elevation', 
          '🔬 Troponin-positive MI',
          '⚖️ Risk stratification critical'
        ],
        hint: '💡 NSTEMI: Partial occlusion, full diagnosis!',
        audioUrl: '/lessonaudio/nstemi/nstemi-fundamentals-intro.mp3'
      },
      
      {
        id: 'nstemi-definition',
        title: 'What is NSTEMI?',
        type: 'flashcard',
        flashcardFront: '💔 What does NSTEMI stand for and what does it represent?',
        flashcardBack: 'Non-ST-Elevation Myocardial Infarction:\n\n⬇️ NON-ST-ELEVATION: No ST elevation on ECG\n💔 MYOCARDIAL: Heart muscle tissue\n⚰️ INFARCTION: Tissue death from reduced blood flow\n\n🩸 NSTEMI = Partial coronary occlusion (70-99%) causing subendocardial heart muscle death with positive troponins',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/ecg/ecg_dataset_clean/INJAL_subendocardial_injury_in_anterolateral_leads/clean_00530_subendocardial injury in anterolateral leads.png',
        imageAlt: 'NSTEMI showing subendocardial injury pattern'
      },

      {
        id: 'nstemi-pathophysiology',
        title: 'NSTEMI Pathophysiology',
        type: 'steps',
        backgroundColor: '#fefbf3',
        textColor: '#7c2d12',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Plaque Instability',
            description: 'Atherosclerotic plaque becomes unstable but doesn\'t fully rupture'
          },
          {
            number: 2,
            title: 'Partial Occlusion', 
            description: 'Thrombus forms causing 70-99% coronary artery narrowing (not complete occlusion)'
          },
          {
            number: 3,
            title: 'Subendocardial Ischemia',
            description: 'Reduced blood flow primarily affects inner heart muscle layer (subendocardium)'
          },
          {
            number: 4,
            title: 'ST Depression',
            description: 'Subendocardial ischemia manifests as ST depression, not elevation'
          },
          {
            number: 5,
            title: 'Troponin Release',
            description: 'Myocardial cell death releases troponins into bloodstream'
          }
        ],
        hint: '🩸 Partial occlusion = subendocardial injury = ST depression'
      },

      {
        id: 'nstemi-vs-stemi-detailed',
        title: 'NSTEMI vs STEMI Comparison',
        type: 'tabs',
        backgroundColor: '#f9fafb',
        textColor: '#111827',
        animation: 'fade',
        tabs: [
          {
            title: 'NSTEMI',
            content: '⬇️ ST DEPRESSION or normal ECG\n🔸 Partial artery occlusion (70-99%)\n📉 Subendocardial injury only\n⏰ Catheterization within 24-72 hrs\n💊 Medical stabilization first\n📊 Lower initial troponin peak\n✅ Lower acute mortality risk'
          },
          {
            title: 'STEMI',
            content: '📈 ST ELEVATION present\n🚫 Complete artery occlusion (100%)\n📈 Transmural (full thickness) injury\n🕐 Door-to-balloon <90 min\n💉 Immediate catheterization\n📊 Higher troponin elevation\n⚠️ Higher acute mortality risk'
          },
          {
            title: 'Clinical Management',
            content: '🎯 NSTEMI: Risk stratification first\n⚖️ High risk → urgent catheterization\n📊 Low risk → stress testing\n💊 Aggressive medical therapy\n\n🎯 STEMI: Immediate emergency\n⚡ Activate cath lab immediately\n💔 Time-critical intervention\n🏥 No delay for risk stratification'
          }
        ],
        hint: '📉 ST depression = partial occlusion = risk stratify!'
      },

      {
        id: 'nstemi-epidemiology',
        title: 'NSTEMI Epidemiology & Impact',
        type: 'highlight',
        backgroundColor: '#fff7ed',
        textColor: '#c2410c',
        animation: 'fade',
        content: 'NSTEMI represents 70% of all acute coronary syndromes, making it the most common type of heart attack. While acute mortality is lower than STEMI, long-term prognosis is similar.',
        imageUrl: '/lessonimages/nstemi-epidemiology-chart.png',
        imageAlt: 'Chart showing NSTEMI epidemiology and outcomes compared to STEMI',
        highlights: [
          '📊 70% of all acute coronary syndromes',
          '📈 Increasing incidence with aging population', 
          '💔 Similar long-term mortality to STEMI',
          '⚖️ Early risk stratification crucial'
        ],
        hint: '📊 Most common doesn\'t mean less important!'
      },

      {
        id: 'nstemi-clinical-presentation',
        title: 'NSTEMI Clinical Presentation',
        type: 'accordion',
        backgroundColor: '#f0fdf4',
        textColor: '#166534',
        animation: 'fade',
        accordionItems: [
          {
            title: '💔 Typical Chest Pain',
            content: 'Often less severe than STEMI pain. May be crescendo pattern - increasing frequency and severity over days/weeks. Can be similar quality to stable angina but more prolonged.'
          },
          {
            title: '😰 Associated Symptoms',
            content: 'Diaphoresis, nausea, vomiting, dyspnea, fatigue. Symptoms may be more subtle than STEMI. Elderly patients often have atypical presentations.'
          },
          {
            title: '⚠️ High-Risk Features',
            content: 'Ongoing chest pain at rest, diaphoresis, hypotension, new heart failure signs, new mitral regurgitation murmur, arrhythmias suggest high-risk NSTEMI.'
          },
          {
            title: '🩺 Physical Findings',
            content: 'May appear less acutely ill than STEMI patients. Check for signs of heart failure (S3 gallop, rales), new murmurs, hemodynamic instability.'
          }
        ],
        hint: '🎯 Subtler presentation, same importance'
      },

      {
        id: 'unit1-quiz',
        title: 'Unit 1 Knowledge Check',
        type: 'quiz',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        question: 'A 65-year-old woman has crescendo chest pain over 3 days. ECG shows 1mm ST depression in V4-V6. Troponin I is elevated. What is the most likely diagnosis?',
        options: [
          'Unstable angina without MI',
          'NSTEMI with lateral involvement', 
          'STEMI with posterior territory',
          'Pericarditis with troponin leak'
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! This presentation of crescendo chest pain with ST depression and positive troponin defines NSTEMI. The lateral lead changes (V4-V6) suggest lateral territory involvement from LCX or diagonal vessel disease."
      },

      // ===============================================
      // 🎯 UNIT 2: ST DEPRESSION PATTERNS (7 slides)
      // ===============================================
      {
        id: 'unit2-intro',
        title: '🎯 Unit 2: ST Depression Patterns',
        content: 'Master ST depression recognition! Learn to identify and interpret the various patterns of ST depression in NSTEMI.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/ecg/ecg_dataset_clean/NST__non-specific_ST_changes/clean_00026_non-specific ST changes.png',
        imageAlt: 'ECG showing non-specific ST changes pattern',
        highlights: [
          '⬇️ Horizontal ST depression',
          '📐 Downsloping patterns',
          '📍 Lead distribution analysis',
          '🔍 Subtle change recognition'
        ],
        hint: '👁️ Pattern recognition is key!',
        audioUrl: '/lessonaudio/nstemi/st-depression-patterns.mp3'
      },

      {
        id: 'st-depression-types',
        title: 'Types of ST Depression',
        type: 'tabs',
        backgroundColor: '#fefbf3',
        textColor: '#7c2d12', 
        animation: 'fade',
        tabs: [
          {
            title: 'Horizontal',
            content: '📏 FLAT ST depression ≥1mm\n🎯 Most specific for ischemia\n⚡ High specificity for CAD\n💔 Associated with worse prognosis\n📍 Often in multiple leads\n🔬 Strong correlation with angiographic disease'
          },
          {
            title: 'Downsloping',
            content: '📉 ST slopes downward from J-point\n⚠️ More concerning than horizontal\n💔 Suggests severe ischemia\n🚨 Often indicates high-risk lesion\n📍 May progress to STEMI\n⏰ Requires urgent evaluation'
          },
          {
            title: 'Upsloping',
            content: '📈 ST slopes upward from J-point\n✅ Less specific for ischemia\n🏃‍♂️ Can be exercise-related\n💡 May be early ischemia sign\n⚖️ Clinical context important\n🔍 Monitor for progression'
          }
        ],
        hint: '📐 Horizontal and downsloping = high concern'
      },

      {
        id: 'st-depression-measurement',
        title: 'ST Depression Measurement',
        type: 'steps',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Locate J-Point',
            description: 'Find junction between QRS complex and ST segment'
          },
          {
            number: 2,
            title: 'Establish Baseline',
            description: 'Use TP segment or PR segment as isoelectric baseline'
          },
          {
            number: 3,
            title: 'Measure 80ms After J-Point',
            description: 'Measure ST level 80 milliseconds (2 small boxes) after J-point'
          },
          {
            number: 4,
            title: 'Quantify Depression',
            description: 'Measure vertical distance below baseline in millimeters'
          },
          {
            number: 5,
            title: 'Assess Pattern',
            description: 'Determine if horizontal, downsloping, or upsloping'
          }
        ],
        hint: '📏 80ms after J-point is the measurement standard'
      },

      {
        id: 'nstemi-criteria-ecg',
        title: 'ECG Criteria for NSTEMI Diagnosis',
        type: 'accordion',
        backgroundColor: '#f9fafb',
        textColor: '#111827',
        animation: 'fade',
        accordionItems: [
          {
            title: '⬇️ ST Depression Requirements',
            content: 'HORIZONTAL or DOWNSLOPING ST depression ≥1mm (0.1mV) in 2+ contiguous leads\nMeasured 80ms after J-point\nMust be new or presumably new changes\nUpsloping depression requires ≥2mm to be significant'
          },
          {
            title: '🔄 T Wave Changes',
            content: 'DYNAMIC T wave inversions (new)\nDEEP symmetric T wave inversions ≥2mm\nPSEUDONORMALIZATION of previously inverted T waves\nTransient T wave changes during pain episodes'
          },
          {
            title: '📍 Lead Distribution Significance',
            content: 'CONTIGUOUS leads important for localization\nV1-V4: Anterior/septal territory\nV4-V6, I, aVL: Lateral territory\nII, III, aVF: Inferior territory (reciprocal from posterior)'
          },
          {
            title: '❌ Normal ECG in NSTEMI',
            content: 'Up to 15% of NSTEMI patients have normal initial ECG\nSerial ECGs essential (every 15-30 minutes)\nClinical suspicion remains high despite normal ECG\nTroponins and clinical picture guide diagnosis'
          }
        ],
        hint: '📋 ECG + Troponins + Clinical = NSTEMI diagnosis'
      },

      {
        id: 'wellens-syndrome',
        title: 'Wellens Syndrome Recognition',
        type: 'highlight',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        content: 'Wellens syndrome shows biphasic or deeply inverted T waves in V2-V3, indicating critical LAD stenosis. Often presents during pain-free periods but indicates impending anterior STEMI.',
        imageUrl: '/lessonimages/wellens-syndrome-pattern.png',
        imageAlt: 'ECG showing classic Wellens syndrome T wave patterns in precordial leads',
        highlights: [
          '🚨 Critical LAD stenosis (>90%)',
          '📈 Type A: Biphasic T waves V2-V3',
          '📉 Type B: Deep inverted T waves V2-V3',
          '⚡ High risk for anterior STEMI'
        ],
        hint: '🚨 Wellens = LAD widow maker!'
      },

      {
        id: 'dynamic-st-changes',
        title: 'Dynamic ST Changes',
        type: 'flashcard',
        flashcardFront: '📈 Why are dynamic ST changes more concerning than static changes in NSTEMI?',
        flashcardBack: 'DYNAMIC CHANGES indicate:\n\n🔄 ONGOING ISCHEMIA: Active plaque instability\n⚡ UNSTABLE LESION: High thrombotic burden\n📈 PROGRESSION RISK: May evolve to STEMI\n🚨 HIGH-RISK PATIENT: Needs urgent intervention\n\nSTATIC changes suggest:\n✅ STABLE lesion post-event\n⏰ CHRONIC changes from old MI\n📊 LOWER acute risk profile',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/ecg/ecg_dataset_clean/ISCAS_ischemic_in_anteroseptal_leads/clean_00485_ischemic in anteroseptal leads.png',
        imageAlt: 'ECG showing ischemic changes in anteroseptal leads'
      },

      {
        id: 'unit2-quiz',
        title: 'Unit 2 Knowledge Check',
        type: 'quiz',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'slide',
        question: 'ECG shows 2mm horizontal ST depression in V4-V6 and I, aVL during chest pain episode. What does this pattern suggest?',
        options: [
          'Normal variant in young athlete',
          'High-risk NSTEMI with lateral involvement',
          'Pericarditis with widespread changes',
          'Digitalis effect causing ST depression'
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Horizontal ST depression ≥1mm in contiguous leads (V4-V6, I, aVL = lateral territory) during chest pain indicates high-risk NSTEMI with lateral wall involvement, likely LCX or diagonal vessel disease."
      },

      // ===============================================
      // 🎯 UNIT 3: RISK STRATIFICATION (7 slides) 
      // ===============================================
      {
        id: 'unit3-intro',
        title: '🎯 Unit 3: Risk Stratification',
        content: 'Master NSTEMI risk stratification! Learn to identify high-risk patients who need urgent intervention versus those who can be managed medically.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fdf4',
        textColor: '#166534',
        animation: 'fade',
        imageUrl: '/lessonimages/nstemi-risk-stratification-chart.png',
        imageAlt: 'Risk stratification flowchart for NSTEMI patients',
        highlights: [
          '⚖️ TIMI and GRACE scores',
          '🚨 High-risk indicators',
          '⏰ Timing of intervention',
          '🎯 Treatment pathways'
        ],
        hint: '⚖️ Risk stratification guides treatment timing!'
      },

      {
        id: 'timi-risk-score',
        title: 'TIMI Risk Score for NSTEMI',
        type: 'steps',
        backgroundColor: '#fefbf3',
        textColor: '#7c2d12',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Age ≥65 years (1 point)',
            description: 'Advanced age increases cardiovascular risk and complications'
          },
          {
            number: 2,
            title: '≥3 CAD Risk Factors (1 point)',
            description: 'HTN, DM, smoking, hyperlipidemia, family history'
          },
          {
            number: 3,
            title: 'Prior CAD with ≥50% Stenosis (1 point)',
            description: 'Known coronary disease or previous revascularization'
          },
          {
            number: 4,
            title: 'ST Deviation ≥1mm (1 point)',
            description: 'ST depression or transient ST elevation on ECG'
          },
          {
            number: 5,
            title: 'Severe Angina (≥2 episodes/24h) (1 point)',
            description: 'Recent increase in anginal symptoms'
          },
          {
            number: 6,
            title: 'Aspirin Use in Past 7 Days (1 point)',
            description: 'Prior aspirin use suggests breakthrough event'
          },
          {
            number: 7,
            title: 'Elevated Cardiac Biomarkers (1 point)',
            description: 'Positive troponin or CK-MB confirms myocardial injury'
          }
        ],
        hint: '📊 TIMI 0-2 = Low, 3-4 = Intermediate, 5-7 = High risk'
      },

      {
        id: 'grace-risk-score',
        title: 'GRACE Risk Score Components',
        type: 'tabs',
        backgroundColor: '#f9fafb',
        textColor: '#111827',
        animation: 'fade',
        tabs: [
          {
            title: 'Clinical Variables',
            content: '👤 AGE: Continuous variable (major weight)\n💓 HEART RATE: Tachycardia increases risk\n🩸 SYSTOLIC BP: Hypotension = higher risk\n🫁 CREATININE: Renal function impact\n📊 More complex but more accurate than TIMI'
          },
          {
            title: 'Presentation Factors',
            content: '🚨 CARDIAC ARREST at presentation\n💔 ST DEVIATION on ECG\n📈 ELEVATED BIOMARKERS (troponin)\n💊 DIURETIC USE (heart failure history)\n⚡ Captures acute instability better'
          },
          {
            title: 'Risk Interpretation',
            content: '📊 CONTINUOUS score (not just categories)\n⚖️ LOW: <109 (1.2% mortality)\n📈 INTERMEDIATE: 109-140 (2.5% mortality)\n🚨 HIGH: >140 (8.8% mortality)\n🎯 More precise risk prediction'
          }
        ],
        hint: '📊 GRACE is more accurate but complex'
      },

      {
        id: 'high-risk-indicators',
        title: 'High-Risk NSTEMI Indicators',
        type: 'accordion',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        accordionItems: [
          {
            title: '🚨 Immediate High-Risk Features',
            content: 'ONGOING chest pain despite maximal medical therapy\nHEMODYNAMIC instability (BP <90 or shock)\nARRHYTHMIAS (VT/VF, high-grade AV block)\nACUTE heart failure or pulmonary edema\nMECHANICAL complications (new MR murmur)'
          },
          {
            title: '⚡ ECG High-Risk Features',
            content: 'DYNAMIC ST changes (evolving during monitoring)\nDEEP ST depression >2mm in multiple leads\nTEMPORARY ST elevation episodes\nNEW bundle branch block\nWELLENS syndrome pattern (biphasic T waves V2-V3)'
          },
          {
            title: '🔬 Laboratory High-Risk Features',
            content: 'VERY HIGH troponin elevation (>10x upper limit)\nRISING troponin pattern over serial measurements\nELEVATED BNP/NT-proBNP (heart failure)\nRENAL dysfunction (creatinine >1.5)\nANEMIA (hemoglobin <10 g/dL)'
          },
          {
            title: '👤 Clinical High-Risk Features',
            content: 'DIABETES mellitus (especially insulin-dependent)\nPRIOR MI or revascularization\nPERIPHERAL arterial disease\nCEREBROVASCULAR disease\nADVANCED age (>75 years) with multiple comorbidities'
          }
        ],
        hint: '🚨 High-risk = urgent catheterization (<24 hours)'
      },

      {
        id: 'treatment-timing-pathway',
        title: 'Treatment Timing Based on Risk',
        type: 'highlight',
        backgroundColor: '#fff7ed',
        textColor: '#c2410c',
        animation: 'fade',
        content: 'Risk stratification directly determines treatment timing and intensity in NSTEMI. High-risk patients need urgent intervention, while low-risk patients can be managed conservatively.',
        imageUrl: '/lessonimages/nstemi-treatment-timing-flowchart.png',
        imageAlt: 'Flowchart showing treatment timing based on NSTEMI risk stratification',
        highlights: [
          '🚨 Very high risk: <2 hours',
          '⚡ High risk: <24 hours',
          '⏰ Intermediate risk: <72 hours',
          '📊 Low risk: Conservative management'
        ],
        hint: '⏰ Higher risk = faster intervention'
      },

      {
        id: 'risk-score-limitations',
        title: 'Risk Score Limitations',
        type: 'flashcard',
        flashcardFront: '⚠️ What are the key limitations of TIMI and GRACE risk scores in NSTEMI?',
        flashcardBack: 'RISK SCORE LIMITATIONS:\n\n👥 POPULATION-based (may not apply to individual)\n⏰ DEVELOPED years ago (treatment has evolved)\n📊 MISSING factors (frailty, social support)\n🎯 CLINICAL GESTALT still important\n\nALWAYS consider:\n🧠 CLINICAL judgment\n🔍 INDIVIDUAL patient factors\n⚖️ SHARED decision-making\n💊 CONTRAINDICATIONS to intervention',
        backgroundColor: '#f0fdf4',
        textColor: '#166534',
        animation: 'fade'
      },

      {
        id: 'unit3-quiz',
        title: 'Unit 3 Knowledge Check',
        type: 'quiz',
        backgroundColor: '#f0fdf4',
        textColor: '#166534',
        animation: 'slide',
        question: 'A 70-year-old diabetic man with NSTEMI has ongoing chest pain, 2mm ST depression in V4-V6, and TIMI score 6. What is the appropriate management timing?',
        options: [
          'Conservative management with stress testing',
          'Catheterization within 72 hours',
          'Urgent catheterization within 24 hours',
          'Immediate catheterization within 2 hours'
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! High TIMI score (6), ongoing symptoms, and significant ST depression indicate high-risk NSTEMI requiring urgent catheterization within 24 hours. Very high-risk features would require <2 hours."
      },

      // ===============================================
      // 🎯 UNIT 4: DYNAMIC CHANGES (7 slides)
      // ===============================================
      {
        id: 'unit4-intro',
        title: '🎯 Unit 4: Dynamic Changes',
        content: 'Master dynamic ECG monitoring! Learn to recognize evolving patterns that indicate unstable coronary syndromes requiring urgent intervention.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/dynamic-ecg-changes-timeline.png',
        imageAlt: 'Timeline showing evolution of dynamic ECG changes in NSTEMI',
        highlights: [
          '📈 Evolving ST patterns',
          '🔄 T wave dynamics',
          '⏰ Serial ECG monitoring',
          '🚨 Progression indicators'
        ],
        hint: '📈 Dynamic changes = unstable patient!',
        videoUrl: '/lessonvideos/dynamic-ecg-monitoring.mp4'
      },

      {
        id: 'serial-ecg-monitoring',
        title: 'Serial ECG Monitoring Protocol',
        type: 'steps',
        backgroundColor: '#fefbf3',
        textColor: '#7c2d12',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Baseline ECG (Admission)',
            description: 'Immediate ECG within 10 minutes of arrival. Compare to prior ECGs if available.'
          },
          {
            number: 2,
            title: 'Pain Episode ECGs (PRN)',
            description: 'Obtain ECG during any chest pain episode. Compare to pain-free periods.'
          },
          {
            number: 3,
            title: 'Routine Serial ECGs (q15-30min)',
            description: 'Regular ECGs every 15-30 minutes for first 6 hours in high-risk patients'
          },
          {
            number: 4,
            title: 'Post-Treatment ECGs',
            description: 'ECG after medical interventions (nitro, morphine, anticoagulation)'
          },
          {
            number: 5,
            title: 'Continuous ST Monitoring',
            description: 'Use ST-segment monitoring when available for real-time changes'
          }
        ],
        hint: '📊 Serial ECGs catch dynamic changes'
      },

      {
        id: 'dynamic-change-patterns',
        title: 'Patterns of Dynamic Changes',
        type: 'tabs',
        backgroundColor: '#f9fafb',
        textColor: '#111827',
        animation: 'fade',
        tabs: [
          {
            title: 'ST Depression Evolution',
            content: '📉 WORSENING: Deeper depression = deteriorating\n📈 IMPROVING: Resolving depression = responding\n🔄 FLUCTUATING: Variable depth = unstable plaque\n⚡ NEW territories: Propagating ischemia\n🚨 Progression to STEMI: Complete occlusion'
          },
          {
            title: 'T Wave Dynamics',
            content: '⚡ HYPERACUTE: Tall peaked T waves (early)\n📉 INVERTING: Deep T inversions developing\n🔄 PSEUDONORMALIZATION: Previously inverted become normal\n📈 BIPHASIC: Mixed positive/negative pattern\n⏰ TEMPORAL: Changes over minutes to hours'
          },
          {
            title: 'Arrhythmic Changes',
            content: '💓 NEW arrhythmias during ischemia\n⚡ VPBs increasing with ST changes\n🔄 AV blocks (especially inferior territory)\n📈 AF with rapid ventricular response\n🚨 VT/VF with severe ischemia'
          }
        ],
        hint: '📈 Pattern recognition predicts stability'
      },

      {
        id: 'transient-st-elevation',
        title: 'Transient ST Elevation in NSTEMI',
        type: 'highlight',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        content: 'Transient ST elevation during chest pain episodes in NSTEMI patients indicates very high-risk unstable plaque with intermittent complete occlusion. Requires urgent catheterization.',
        imageUrl: '/lessonimages/transient-st-elevation-pattern.png',
        imageAlt: 'ECG showing transient ST elevation resolving back to baseline',
        highlights: [
          '🚨 Highest risk NSTEMI pattern',
          '🔄 Intermittent complete occlusion',
          '⏰ Urgent catheterization required',
          '💉 Often needs immediate PCI'
        ],
        hint: '⚡ Transient elevation = very high risk!'
      },

      {
        id: 'wellens-progression',
        title: 'Wellens Syndrome Progression',
        type: 'accordion',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        accordionItems: [
          {
            title: '📈 Type A Wellens (75% of cases)',
            content: 'BIPHASIC T waves in V2-V3 (positive then negative)\nOFTEN seen during pain-free periods\nINDICATES critical LAD stenosis (>90%)\nHIGH risk for anterior STEMI if not treated\nREQUIRES urgent catheterization'
          },
          {
            title: '📉 Type B Wellens (25% of cases)',
            content: 'DEEPLY INVERTED symmetric T waves in V2-V3\nMORE ominous than Type A\nOFTEN follows resolution of ST elevation\nINDICATES very critical LAD stenosis\nEXTREMELY high risk for anterior STEMI'
          },
          {
            title: '⚠️ Management Pitfalls',
            content: 'DO NOT stress test (can precipitate STEMI)\nDO NOT discharge without catheterization\nMAY appear "stable" between episodes\nTROPONINS may be only minimally elevated\nECG changes more important than symptoms'
          },
          {
            title: '🎯 Recognition Keys',
            content: 'PAIN-FREE periods when ECG obtained\nPRECORDIAL lead focus (V2-V3 critical)\nSYMMETRIC T wave morphology\nABSENCE of Q waves (pre-infarction)\nCOMPARE to old ECGs when available'
          }
        ],
        hint: '🚨 Wellens = LAD bomb waiting to explode!'
      },

      {
        id: 'ecg-monitoring-technology',
        title: 'Modern ECG Monitoring Technology',
        type: 'flashcard',
        flashcardFront: '📱 How do modern ST-segment monitoring systems improve NSTEMI detection?',
        flashcardBack: 'MODERN ST MONITORING:\n\n📊 CONTINUOUS tracking (not just snapshots)\n⚡ REAL-TIME alerts for changes\n📈 TRENDING over time\n🎯 AUTOMATIC comparison to baseline\n\nBENEFITS:\n👁️ CATCH transient changes missed on routine ECGs\n⏰ EARLIER detection of deterioration\n📱 REMOTE monitoring capability\n🔔 ALARM systems for dangerous changes',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade'
      },

      {
        id: 'unit4-quiz',
        title: 'Unit 4 Knowledge Check',
        type: 'quiz',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'slide',
        question: 'A NSTEMI patient develops transient 3mm ST elevation in V2-V4 during chest pain, resolving to deep T wave inversions when pain-free. What is the significance?',
        options: [
          'Normal evolution of NSTEMI, continue current management',
          'Very high-risk pattern requiring urgent catheterization',
          'Pericarditis developing, start anti-inflammatories',
          'Artifact from patient movement during pain'
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Transient ST elevation followed by deep T inversions (Wellens pattern) indicates very high-risk unstable plaque with intermittent complete LAD occlusion. This requires urgent catheterization to prevent anterior STEMI."
      },

      // ===============================================
      // 🎯 UNIT 5: TROPONIN INTEGRATION (7 slides)
      // ===============================================
      {
        id: 'unit5-intro',
        title: '🎯 Unit 5: Troponin Integration',
        content: 'Master troponin interpretation! Learn to integrate troponin results with ECG findings and clinical presentation for optimal NSTEMI diagnosis and management.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/troponin-integration-diagram.png',
        imageAlt: 'Diagram showing integration of troponin with ECG and clinical findings',
        highlights: [
          '🔬 High-sensitivity troponins',
          '📈 Serial troponin protocols',
          '⚖️ Clinical correlation',
          '🎯 Risk stratification impact'
        ],
        hint: '🔬 Troponins confirm, ECG localizes, clinical guides!',
        audioUrl: '/lessonaudio/nstemi/troponin-integration.mp3'
      },

      {
        id: 'troponin-types-overview',
        title: 'Types of Troponin Assays',
        type: 'tabs',
        backgroundColor: '#f9fafb',
        textColor: '#111827',
        animation: 'fade',
        tabs: [
          {
            title: 'High-Sensitivity Troponin',
            content: '⚡ ULTRA-sensitive detection capability\n⏰ EARLIER detection (3-6 hours vs 6-12 hours)\n📊 BETTER risk stratification\n🎯 MORE precise for small infarcts\n✅ PREFERRED assay type\n🔍 Can detect tiny amounts of myocardial injury'
          },
          {
            title: 'Conventional Troponin',
            content: '📊 STANDARD sensitivity assays\n⏰ LATER peak detection (6-12 hours)\n💊 ADEQUATE for STEMI diagnosis\n⚖️ LESS sensitive for small NSTEMIs\n📈 BEING replaced by high-sensitivity\n🏥 Still used in some hospitals'
          },
          {
            title: 'Clinical Implications',
            content: '🎯 HIGH-SENSITIVITY: Rule-out protocols faster\n⚖️ MORE false positives in stable patients\n🔍 BETTER for detecting small MIs\n⏰ SHORTER observation periods\n📊 IMPROVED early risk stratification\n💊 May change treatment thresholds'
          }
        ],
        hint: '⚡ High-sensitivity = faster, more accurate diagnosis'
      },

      {
        id: 'troponin-kinetics',
        title: 'Troponin Release Kinetics in NSTEMI',
        type: 'steps',
        backgroundColor: '#fefbf3',
        textColor: '#7c2d12',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Initial Release (1-3 hours)',
            description: 'Cytoplasmic troponin released first from damaged myocytes'
          },
          {
            number: 2,
            title: 'Early Detection (3-6 hours)',
            description: 'High-sensitivity assays can detect elevated troponins'
          },
          {
            number: 3,
            title: 'Peak Levels (12-24 hours)',
            description: 'Structural troponin release causes peak concentrations'
          },
          {
            number: 4,
            title: 'Prolonged Elevation (7-14 days)',
            description: 'Troponins remain elevated longer than CK-MB'
          },
          {
            number: 5,
            title: 'Clearance Pattern',
            description: 'Gradual decline over days, useful for timing MI'
          }
        ],
        hint: '⏰ Earlier detection allows faster treatment decisions'
      },

      {
        id: 'troponin-interpretation',
        title: 'Troponin Result Interpretation',
        type: 'accordion',
        backgroundColor: '#f0fdf4',
        textColor: '#166534',
        animation: 'fade',
        accordionItems: [
          {
            title: '📈 Rising Pattern (Diagnostic)',
            content: 'SERIAL increase in troponin levels\nCONFIRMS acute myocardial injury\nTYPICAL pattern: Low → High → Peak → Decline\nDISTINGUISHES acute from chronic elevation\nREQUIRES at least 2 measurements 3-6 hours apart'
          },
          {
            title: '📊 Static Elevation (Chronic)',
            content: 'STABLE elevated troponin levels\nSUGGESTS chronic myocardial injury\nCOMMON in: CHF, CKD, myocarditis\nNOT diagnostic of acute MI\nNEEDS clinical correlation for interpretation'
          },
          {
            title: '⬇️ Falling Pattern (Old MI)',
            content: 'DECLINING troponin levels\nSUGGESTS recent but not acute MI\nTIMING: Usually >24-48 hours from peak\nHELPS determine if MI is acute or recent\nCOMBINE with clinical history for timing'
          },
          {
            title: '🎯 Clinical Correlation',
            content: 'ALWAYS correlate with symptoms\nCONSIDER alternative causes of elevation\nINTEGRATE with ECG findings\nASSESS temporal relationship to symptoms\nCONSIDER magnitude of elevation'
          }
        ],
        hint: '📈 Rising troponins = acute MI, static = chronic injury'
      },

      {
        id: 'troponin-nstemi-diagnosis',
        title: 'Troponin-Based NSTEMI Diagnosis',
        type: 'highlight',
        backgroundColor: '#fff7ed',
        textColor: '#c2410c',
        animation: 'fade',
        content: 'NSTEMI diagnosis requires elevated troponins with clinical evidence of myocardial ischemia. The combination of symptoms, ECG changes, and rising troponins confirms the diagnosis.',
        imageUrl: '/lessonimages/nstemi-diagnostic-triad.png',
        imageAlt: 'Diagnostic triad showing symptoms, ECG changes, and troponins for NSTEMI diagnosis',
        highlights: [
          '🔬 Elevated troponins (rising pattern)',
          '💔 Clinical evidence of ischemia',
          '📊 No ST elevation on ECG',
          '⚖️ Alternative causes excluded'
        ],
        hint: '🎯 Troponins + Clinical + ECG = NSTEMI diagnosis'
      },

      {
        id: 'troponin-risk-stratification',
        title: 'Troponin Levels and Risk Stratification',
        type: 'flashcard',
        flashcardFront: '📊 How do troponin levels help stratify risk in NSTEMI patients?',
        flashcardBack: 'TROPONIN RISK STRATIFICATION:\n\n📈 HIGHER levels = WORSE prognosis\n🎯 >10x upper limit = very high risk\n⚡ PEAK levels correlate with infarct size\n📊 AREA under curve = total myocardial loss\n\nCLINICAL IMPLICATIONS:\n🚨 High troponins → urgent catheterization\n💊 Higher levels → more aggressive therapy\n📅 Affects long-term prognosis\n⚖️ Guides intensity of monitoring',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade'
      },

      {
        id: 'troponin-pitfalls',
        title: 'Troponin Interpretation Pitfalls',
        type: 'steps',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Single Elevated Value',
            description: 'One elevated troponin doesn\'t confirm acute MI - need rising pattern or very high level'
          },
          {
            number: 2,
            title: 'Chronic Kidney Disease',
            description: 'CKD patients often have chronically elevated troponins - look for clinical correlation'
          },
          {
            number: 3,
            title: 'Heart Failure',
            description: 'CHF can cause troponin elevation without acute coronary syndrome'
          },
          {
            number: 4,
            title: 'Non-ACS Causes',
            description: 'PE, myocarditis, sepsis, etc. can elevate troponins - consider differential diagnosis'
          },
          {
            number: 5,
            title: 'Timing Issues',
            description: 'Very early presentation may have normal troponins - serial measurements essential'
          }
        ],
        hint: '⚠️ Always correlate troponins with clinical picture'
      },

      {
        id: 'unit5-quiz',
        title: 'Unit 5 Knowledge Check',
        type: 'quiz',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        question: 'A patient with chest pain has troponin I of 2.3 ng/mL (normal <0.04) at arrival, rising to 8.9 ng/mL at 6 hours. ECG shows 1mm ST depression in V4-V6. What is the significance of the troponin pattern?',
        options: [
          'Chronic elevation from kidney disease',
          'Laboratory error requiring repeat testing',
          'Acute NSTEMI with rising troponin pattern',
          'Normal troponin kinetics for stable angina'
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! The rising troponin pattern (2.3 → 8.9) combined with ischemic symptoms and ST depression confirms acute NSTEMI. High troponin levels (>10x normal) indicate significant myocardial injury and high risk."
      },

      // ===============================================
      // 🎯 UNIT 6: TREATMENT PATHWAYS (7 slides)
      // ===============================================
      {
        id: 'unit6-intro',
        title: '🎯 Unit 6: Treatment Pathways',
        content: 'Master NSTEMI treatment strategies! Learn evidence-based medical management and invasive versus conservative approaches based on risk stratification.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: '/lessonimages/nstemi-treatment-pathways.png',
        imageAlt: 'Treatment pathway flowchart for NSTEMI management',
        highlights: [
          '💊 Evidence-based medical therapy',
          '⚖️ Invasive vs conservative strategy',
          '⏰ Timing of interventions',
          '🎯 Individualized approach'
        ],
        hint: '💊 Right treatment, right time, right patient!',
        videoUrl: '/lessonvideos/nstemi-treatment-overview.mp4'
      },

      {
        id: 'acute-medical-management',
        title: 'Acute Medical Management of NSTEMI',
        type: 'steps',
        backgroundColor: '#fefbf3',
        textColor: '#7c2d12',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Immediate Stabilization',
            description: 'IV access, continuous monitoring, oxygen if SpO2 <90%, pain control with morphine if needed'
          },
          {
            number: 2,
            title: 'Antiplatelet Therapy',
            description: 'Aspirin 325mg chewed, then 81mg daily. P2Y12 inhibitor (clopidogrel 600mg load or ticagrelor 180mg load)'
          },
          {
            number: 3,
            title: 'Anticoagulation',
            description: 'Enoxaparin 1mg/kg SC BID or UFH with anti-Xa monitoring. Consider bivalirudin if high bleeding risk'
          },
          {
            number: 4,
            title: 'Anti-ischemic Therapy',
            description: 'Beta-blocker if no contraindications, sublingual or IV nitroglycerin for ongoing pain'
          },
          {
            number: 5,
            title: 'Risk Stratification',
            description: 'Calculate TIMI or GRACE score, assess for high-risk features, plan invasive strategy timing'
          }
        ],
        hint: '💊 DAPT + anticoagulation + anti-ischemic = foundation'
      },

      {
        id: 'invasive-vs-conservative',
        title: 'Invasive vs Conservative Strategy',
        type: 'tabs',
        backgroundColor: '#f9fafb',
        textColor: '#111827',
        animation: 'fade',
        tabs: [
          {
            title: 'Early Invasive Strategy',
            content: '⚡ CATHETERIZATION within 24-72 hours\n🎯 FOR: High-risk patients (TIMI ≥3)\n✅ IMPROVES outcomes in high-risk patients\n💉 REVASCULARIZATION based on anatomy\n📊 REDUCES recurrent ischemia\n🏥 SHORTER hospital stay typically'
          },
          {
            title: 'Conservative Strategy',
            content: '🔍 MEDICAL management first\n⚖️ FOR: Low-risk patients (TIMI 0-2)\n📋 STRESS testing before discharge\n💊 OPTIMAL medical therapy\n🚨 CATHETERIZATION only if ischemia on stress test\n📅 LONGER monitoring period required'
          },
          {
            title: 'Selection Criteria',
            content: '🚨 IMMEDIATE invasive (<2 hrs): Refractory angina, shock, arrhythmias\n⚡ EARLY invasive (<24 hrs): High TIMI/GRACE score, dynamic changes\n⏰ DELAYED invasive (<72 hrs): Intermediate risk\n💊 CONSERVATIVE: Low risk, high bleeding risk, limited life expectancy'
          }
        ],
        hint: '⚖️ High risk = invasive, low risk = conservative'
      },

      {
        id: 'dual-antiplatelet-therapy',
        title: 'Dual Antiplatelet Therapy (DAPT) Selection',
        type: 'accordion',
        backgroundColor: '#f0fdf4',
        textColor: '#166534',
        animation: 'fade',
        accordionItems: [
          {
            title: '💊 Aspirin (Universal)',
            content: 'LOADING: 325mg chewed (non-enteric coated)\nMAINTENANCE: 81mg daily lifelong\nMECHANISM: COX-1 inhibition, reduces TxA2\nCONTRAINDICATIONS: Active bleeding, severe allergy\nALTERNATIVE: Clopidogrel if aspirin allergic'
          },
          {
            title: '💉 P2Y12 Inhibitor Selection',
            content: 'TICAGRELOR: 180mg load, then 90mg BID (preferred)\nCLOPIDOGREL: 600mg load, then 75mg daily\nPRASUGREL: 60mg load, then 10mg daily (post-PCI)\nSELECTION based on: bleeding risk, prior stroke, age >75'
          },
          {
            title: '⏰ Duration of DAPT',
            content: 'MINIMUM: 12 months after ACS\nHIGH bleeding risk: Consider 6 months\nLOW bleeding risk: May extend to 30 months\nDISCONTINUATION: Gradual, stop P2Y12 first\nMONITORING: For bleeding and ischemic events'
          },
          {
            title: '⚠️ DAPT Complications',
            content: 'BLEEDING: Major concern, especially GI\nBRUISING: Common, usually not dangerous\nTHROMBOCYTOPENIA: Rare but serious\nINTERACTIONS: PPIs with clopidogrel\nSURGERY: Timing of discontinuation crucial'
          }
        ],
        hint: '💊 Aspirin + P2Y12 inhibitor = DAPT foundation'
      },

      {
        id: 'high-risk-nstemi-management',
        title: 'High-Risk NSTEMI Management',
        type: 'highlight',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        content: 'High-risk NSTEMI patients require aggressive management with early invasive strategy, intensive medical therapy, and close monitoring for complications.',
        imageUrl: '/lessonimages/high-risk-nstemi-protocol.png',
        imageAlt: 'Protocol flowchart for high-risk NSTEMI management',
        highlights: [
          '🚨 Urgent catheterization (<24 hours)',
          '💊 Intensive medical therapy',
          '👁️ Continuous monitoring',
          '⚡ GPIIb/IIIa inhibitor consideration'
        ],
        hint: '🚨 High risk = urgent, aggressive, intensive!'
      },

      {
        id: 'discharge-planning-nstemi',
        title: 'NSTEMI Discharge Planning',
        type: 'flashcard',
        flashcardFront: '🏥 What are the key components of discharge planning for NSTEMI patients?',
        flashcardBack: 'DISCHARGE PLANNING ESSENTIALS:\n\n💊 MEDICATIONS: DAPT, statin, ACE-I, beta-blocker\n📚 EDUCATION: Signs/symptoms to watch for\n🏃‍♂️ LIFESTYLE: Diet, exercise, smoking cessation\n📅 FOLLOW-UP: Cardiology within 1-2 weeks\n⚠️ WARNING SIGNS: When to call 911\n\n📋 ENSURE:\n✅ MEDICATION reconciliation\n✅ CARDIAC rehabilitation referral\n✅ RISK factor modification plan\n✅ EMERGENCY contact information',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade'
      },

      {
        id: 'secondary-prevention',
        title: 'Secondary Prevention After NSTEMI',
        type: 'steps',
        backgroundColor: '#f0fdf4',
        textColor: '#166534',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Optimal Medical Therapy',
            description: 'DAPT, high-intensity statin, ACE inhibitor, beta-blocker as tolerated'
          },
          {
            number: 2,
            title: 'Lifestyle Modifications',
            description: 'Smoking cessation, Mediterranean diet, regular exercise, weight management'
          },
          {
            number: 3,
            title: 'Risk Factor Control',
            description: 'Blood pressure <130/80, LDL <70 mg/dL, HbA1c <7% if diabetic'
          },
          {
            number: 4,
            title: 'Cardiac Rehabilitation',
            description: 'Supervised exercise program, education, psychological support'
          },
          {
            number: 5,
            title: 'Long-term Follow-up',
            description: 'Regular cardiology visits, monitoring for complications, medication adjustment'
          }
        ],
        hint: '🎯 Secondary prevention prevents future events'
      },

      {
        id: 'unit6-quiz',
        title: 'Unit 6 Knowledge Check',
        type: 'quiz',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'slide',
        question: 'A 55-year-old man with NSTEMI has TIMI score 5, dynamic ST changes, and elevated troponins. What is the most appropriate management strategy?',
        options: [
          'Conservative management with stress test before discharge',
          'Early invasive strategy with catheterization within 24 hours',
          'Immediate catheterization within 2 hours',
          'Medical management only with outpatient follow-up'
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! High TIMI score (5) with dynamic ST changes indicates high-risk NSTEMI requiring early invasive strategy with catheterization within 24 hours. Very high-risk features would require immediate catheterization."
      },

      // ===============================================
      // 🎯 FINAL COMPLETION SLIDE
      // ===============================================
      {
        id: 'nstemi-mastery-complete',
        title: '🏆 NSTEMI Recognition Mastery Complete!',
        content: 'Outstanding! You\'ve mastered NSTEMI recognition through comprehensive 6-unit training covering fundamentals, ST depression patterns, risk stratification, dynamic changes, troponin integration, and treatment pathways. You can now recognize and manage NSTEMI like an expert cardiologist!',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/nstemi-mastery-complete.png',
        imageAlt: 'Completion celebration - NSTEMI recognition mastery achieved',
        highlights: [
          '✅ NSTEMI fundamentals mastery',
          '✅ ST depression pattern expertise',
          '✅ Risk stratification skills',
          '✅ Dynamic change recognition',
          '✅ Troponin integration competency', 
          '✅ Treatment pathway knowledge',
          '✅ Ready for advanced ACS management!'
        ],
        hint: '🎉 You\'re now an NSTEMI recognition expert!'}
    ],
    
    summary: "🎉 Outstanding! You've achieved mastery of NSTEMI Recognition with comprehensive 6-unit training covering fundamentals, ST depression patterns, risk stratification, dynamic changes, troponin integration, and treatment pathways. You can now recognize, evaluate, and manage NSTEMI like an expert cardiologist!",
    keyPoints: [
      '💔 NSTEMI = Partial occlusion with subendocardial injury',
      '⬇️ ST depression patterns indicate territory and severity',
      '⚖️ Risk stratification (TIMI/GRACE) guides treatment timing',
      '📈 Dynamic changes indicate unstable plaque',
      '🔬 Rising troponins confirm diagnosis and stratify risk',
      '💊 Evidence-based therapy improves outcomes'
    ],
    resources: []
  },
  
  // ============= ENHANCED DUOLINGO-STYLE TASKS (Final Assessment Only) =============
  tasks: [
    
    // ==================== FINAL MASTERY ASSESSMENT ====================
    {
      id: 'final-nstemi-mastery-assessment',
      type: 'final-assessment',
      xp: 50,
      images: {
        mainImage: '/ecg/ecg_dataset_clean/ISCAL_ischemic_in_anterolateral_leads/clean_00135_ischemic in anterolateral leads.png',
        slideImages: []
      },
      content: {
        prerequisiteMessage: "🏆 Final Assessment: Complete all 6 units to unlock your NSTEMI Recognition Mastery Certificate!",
        questions: [
          {
            id: "nstemi-definition-assessment",
            type: "multiple-choice",
            question: "A 58-year-old woman presents with 4 hours of chest pain. ECG shows 1.5mm horizontal ST depression in V4-V6. Troponin I rises from 0.02 to 2.8 ng/mL. What is the most likely diagnosis?",
            options: [
              "Unstable angina without myocardial injury",
              "NSTEMI with lateral territory involvement",
              "STEMI with posterior wall involvement",
              "Pericarditis with troponin elevation"
            ],
            correctAnswer: 1,
            explanation: "Correct! Rising troponin with ST depression and appropriate clinical presentation confirms NSTEMI. The lateral leads (V4-V6) indicate lateral territory involvement.",
            imageUrl: "/ecg/ecg_dataset_clean/INJAL_subendocardial_injury_in_anterolateral_leads/clean_00530_subendocardial injury in anterolateral leads.png"
          },
          {
            id: "st-depression-pattern-assessment",
            type: "multiple-choice",
            question: "Which type of ST depression is most specific for myocardial ischemia in NSTEMI?",
            options: [
              "Upsloping ST depression ≥1mm",
              "Horizontal ST depression ≥1mm",
              "Downsloping ST depression <0.5mm", 
              "Variable ST depression pattern"
            ],
            correctAnswer: 1,
            explanation: "Correct! Horizontal ST depression ≥1mm is most specific for myocardial ischemia and indicates significant coronary artery disease requiring urgent evaluation.",
            imageUrl: "/ecg/ecg_dataset_clean/NST__non-specific_ST_changes/clean_00026_non-specific ST changes.png"
          },
          {
            id: "risk-stratification-assessment",
            type: "multiple-choice",
            question: "A NSTEMI patient has: age 70, diabetes, prior MI, 2mm ST depression in V3-V6, troponin 15x normal, ongoing chest pain. TIMI score is approximately:",
            options: [
              "TIMI 3 (intermediate risk)",
              "TIMI 5 (high risk)",
              "TIMI 7 (very high risk)",
              "TIMI 2 (low risk)"
            ],
            correctAnswer: 2,
            explanation: "Correct! Age ≥65 (1), ≥3 risk factors (1), prior CAD (1), ST deviation (1), severe angina (1), elevated biomarkers (1), plus ongoing pain indicates very high risk = TIMI 7.",
            imageUrl: "/lessonimages/nstemi-risk-stratification-chart.png"
          },
          {
            id: "wellens-syndrome-assessment",
            type: "multiple-choice",
            question: "A patient with resolved chest pain shows deep symmetric T wave inversions in V2-V3 with minimal troponin elevation. This pattern indicates:",
            options: [
              "Normal variant T waves in young athlete",
              "Old anterior MI with chronic changes",
              "Wellens Type B syndrome - critical LAD stenosis",
              "Pericarditis with precordial involvement"
            ],
            correctAnswer: 2,
            explanation: "Correct! Deep symmetric T inversions in V2-V3 during pain-free periods = Wellens Type B syndrome, indicating critical LAD stenosis requiring urgent catheterization to prevent anterior STEMI.",
            imageUrl: "/lessonimages/wellens-syndrome-pattern.png"
          },
          {
            id: "troponin-kinetics-assessment",
            type: "multiple-choice",
            question: "Troponin levels at 0 hrs: 0.05 ng/mL, at 6 hrs: 3.2 ng/mL, at 12 hrs: 8.9 ng/mL. This pattern indicates:",
            options: [
              "Chronic kidney disease with stable elevation",
              "Laboratory error requiring repeat testing",
              "Acute NSTEMI with typical rising pattern",
              "Non-cardiac cause of troponin elevation"
            ],
            correctAnswer: 2,
            explanation: "Correct! The rising troponin pattern (0.05 → 3.2 → 8.9) confirms acute myocardial injury. This kinetic pattern is diagnostic for acute MI when combined with clinical presentation.",
            imageUrl: "/lessonimages/troponin-integration-diagram.png"
          },
          {
            id: "treatment-strategy-assessment",
            type: "multiple-choice",
            question: "A 45-year-old man with NSTEMI has TIMI score 6, dynamic ST changes, and refractory chest pain despite maximal medical therapy. Most appropriate management:",
            options: [
              "Conservative management with stress test",
              "Early invasive strategy within 24 hours",
              "Immediate catheterization within 2 hours",
              "Discharge with outpatient cardiology follow-up"
            ],
            correctAnswer: 2,
            explanation: "Correct! Very high-risk features (refractory pain, dynamic changes, high TIMI score) require immediate catheterization within 2 hours. This patient has unstable coronary syndrome requiring urgent intervention.",
            imageUrl: "/lessonimages/high-risk-nstemi-protocol.png"
          },
          {
            id: "dapt-selection-assessment",
            type: "multiple-choice",
            question: "For a 65-year-old NSTEMI patient with no contraindications, optimal DAPT includes:",
            options: [
              "Aspirin 325mg daily + clopidogrel 75mg daily",
              "Aspirin 81mg daily + ticagrelor 90mg BID",
              "Aspirin alone for 6 months then stop",
              "Warfarin + aspirin combination"
            ],
            correctAnswer: 1,
            explanation: "Correct! Optimal DAPT for NSTEMI is aspirin 81mg daily + ticagrelor 90mg BID for at least 12 months. Ticagrelor is preferred over clopidogrel in ACS patients without contraindications.",
            imageUrl: "/lessonimages/nstemi-treatment-pathways.png"
          },
          {
            id: "dynamic-changes-assessment",
            type: "multiple-choice",
            question: "Serial ECGs in a NSTEMI patient show: Initial 1mm ST depression → 2mm depression during pain → Resolution after nitroglycerin. This indicates:",
            options: [
              "Stable coronary lesion with good prognosis",
              "Dynamic ischemia requiring urgent evaluation",
              "Normal response to medical therapy",
              "Artifact from electrode placement"
            ],
            correctAnswer: 1,
            explanation: "Correct! Dynamic ST changes (varying with symptoms) indicate unstable plaque with ongoing ischemia. This pattern suggests high-risk coronary anatomy requiring urgent catheterization.",
            imageUrl: "/lessonimages/dynamic-ecg-changes-timeline.png"
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
