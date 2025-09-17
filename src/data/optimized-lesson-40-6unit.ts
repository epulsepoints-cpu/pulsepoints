import { Lesson } from '../types/learning';

export const optimizedLesson40: Lesson = {
  id: 'lesson-5-2-optimized',
  moduleId: 'module-5',
  title: "Left Bundle Branch Block",
  description: "Master left bundle branch block comprehensively through 6 focused learning units with enhanced interactive elements: LBBB anatomy and physiology, pathophysiology with audio, advanced ECG recognition, clinical implications with audio, management strategies, and expert mastery with celebration audio",
  order: 2,
  estimatedTime: 45,
  content: {
    type: 'mixed',
    introduction: "🎯 Welcome to Left Bundle Branch Block Mastery! Master LBBB comprehensively through 6 progressive units with enhanced interactive elements, strategic audio, and real ECG integration from our extensive clinical database.",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your LBBB Learning Journey",
        content: "UNIT 1: LBBB Anatomy & Physiology → UNIT 2: Pathophysiology + Audio → UNIT 3: Advanced ECG Recognition → UNIT 4: Clinical Implications + Audio → UNIT 5: Management Strategies → UNIT 6: Expert Mastery + Celebration Audio",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // ===============================================
      // 🎯 UNIT 1: LBBB ANATOMY & PHYSIOLOGY (7 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: LBBB Anatomy & Physiology',
        content: 'Master LBBB anatomy and physiology! Understand the complex left bundle system and why it matters.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/ecg/ecg_dataset_clean/CLBBB_complete_left_bundle_branch_block/clean_00025_complete left bundle branch block.png',
        hint: '🫀 Master LBBB foundations!'
      },
      
      {
        id: 'left-bundle-anatomy-flashcard',
        title: '🧠 Left Bundle System Architecture',
        content: 'Understanding complex left bundle anatomy',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🌳',
          question: 'Describe the anatomical structure of the left bundle branch system.',
          answer: 'Main left bundle trunk originates from Bundle of His, divides into LEFT ANTERIOR FASCICLE (thin, vulnerable) and LEFT POSTERIOR FASCICLE (thick, dual blood supply). Extensive Purkinje network throughout LV myocardium creates rapid, synchronized activation.',
          imageUrl: '/lessonimages/module5/lesson40/left-bundle-anatomy.jpg'
        },
        hint: '🧠 Flip to learn the complex system!'
      },

      {
        id: 'fascicular-blood-supply',
        title: 'Left Bundle Blood Supply',
        content: 'LEFT ANTERIOR FASCICLE: LAD septal branches (vulnerable to anterior MI). LEFT POSTERIOR FASCICLE: Dual supply from LAD + RCA (most resistant). MAIN TRUNK: Multiple septal perforators provide rich supply.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson40/fascicular-blood-supply.jpg',
        hint: '🩸 Dual supply protects posterior fascicle!'
      },

      {
        id: 'normal-lv-activation-steps',
        title: 'Normal LV Activation Sequence',
        content: 'Understanding normal left ventricular activation',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Septal Activation',
            description: 'Left-to-right septal depolarization creates septal Q waves'
          },
          {
            number: 2,
            title: 'Anterior Wall Early',
            description: 'LAF rapidly activates anterior and superior LV regions'
          },
          {
            number: 3,
            title: 'Inferior Wall Early',
            description: 'LPF simultaneously activates inferior and posterior regions'
          },
          {
            number: 4,
            title: 'Synchronized LV',
            description: 'Coordinated activation completes in <80ms for optimal function'
          }
        ],
        hint: '👣 Synchronized activation is key!'
      },

      {
        id: 'lbbb-activation-disruption',
        title: 'LBBB Activation Disruption',
        content: 'BLOCKED LEFT BUNDLE: No direct LV activation via left system. RIGHT-TO-LEFT ACTIVATION: RV activates first, then spreads to LV. PROLONGED CONDUCTION: Cell-to-cell conduction much slower. MECHANICAL DYSSYNCHRONY: Uncoordinated contraction patterns.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson40/lbbb-disruption.jpg',
        hint: '⚡ Disrupted electrical sequence!'
      },

      {
        id: 'hemodynamic-consequences-tabs',
        title: 'Hemodynamic Consequences',
        content: 'Understanding LBBB impact on heart function',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        tabs: [
          {
            title: 'Dyssynchrony',
            content: 'Septal and lateral walls contract at different times. Reduces overall cardiac efficiency. May worsen heart failure.',
            icon: '💔'
          },
          {
            title: 'Paradoxical Motion',
            content: 'Early septal contraction via RV activation. Late lateral wall activation. May see "septal bounce" pattern.',
            icon: '🔄'
          },
          {
            title: 'Reduced EF',
            content: 'Mechanical dyssynchrony reduces ejection fraction. More pronounced with wider QRS. May improve with CRT.',
            icon: '📉'
          }
        ],
        hint: '📑 Mechanical consequences matter!'
      },

      {
        id: 'unit1-quiz',
        title: 'Unit 1 Quiz: Anatomy Check',
        content: 'Test your LBBB anatomy knowledge!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'In LBBB, the left ventricle is activated primarily by:',
        options: [
          'Left anterior fascicle conduction',
          'Left posterior fascicle conduction',
          'Cell-to-cell spread from right ventricle',
          'Retrograde conduction through coronary veins'
        ],
        correctAnswer: 2,
        explanation: 'Correct! In LBBB, the left bundle system is blocked, so the LV is activated by slow cell-to-cell conduction spreading from the normally activated right ventricle.',
        imageUrl: '/lessonimages/module5/lesson40/unit1-quiz.jpg',
        hint: '🎯 Think about alternate pathways!'
      },

      // ===============================================
      // 🎯 UNIT 2: PATHOPHYSIOLOGY + AUDIO (8 slides)
      // ===============================================
      {
        id: 'unit2-intro',
        title: '🎯 Unit 2: LBBB Pathophysiology + Audio',
        content: 'Discover LBBB pathophysiology! Master the mechanisms behind left bundle branch block development.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson40/pathophysiology-overview.jpg',
        hint: '⚙️ Understand disease mechanisms!'
      },

      {
        id: 'pathophysiology-audio',
        title: '🎧 LBBB Pathophysiology Explained',
        content: 'Listen to detailed explanation of LBBB development mechanisms',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module5/lesson40/lbbb-pathophysiology.mp3',
        hint: '🎧 Audio guide to LBBB mechanisms!'
      },

      {
        id: 'lbbb-causes-accordion',
        title: 'LBBB Underlying Causes',
        content: 'Explore the diverse etiologies of LBBB',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Ischemic Heart Disease',
            content: 'Most common cause. Anterior MI affecting LAD septal branches. Chronic ischemia with progressive fibrosis. May be acute or chronic presentation.',
            icon: '🫀'
          },
          {
            title: 'Hypertensive Heart Disease',
            content: 'LV hypertrophy and fibrosis. Progressive conduction system sclerosis. Often develops gradually over years.',
            icon: '⬆️'
          },
          {
            title: 'Cardiomyopathy',
            content: 'Dilated CM: Most common association. Ischemic CM: Post-MI scarring. Infiltrative diseases: Amyloid, sarcoidosis.',
            icon: '💔'
          },
          {
            title: 'Degenerative Disease',
            content: 'Age-related conduction system fibrosis. Lev disease: Isolated conduction abnormalities. Progressive nature.',
            icon: '⏳'
          }
        ],
        hint: '🎯 Click to explore causes!'
      },

      {
        id: 'acute-vs-chronic-lbbb-flashcard',
        title: '🧠 Acute vs Chronic LBBB',
        content: 'Critical distinction in LBBB presentation',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '⚡',
          question: 'How do acute and chronic LBBB presentations differ?',
          answer: 'ACUTE LBBB: Sudden onset with chest pain. Often with STEMI equivalent. Requires urgent cath lab. Poor prognostic sign. CHRONIC LBBB: Gradual development. Often asymptomatic initially. Progressive heart failure. Structural heart disease.',
          imageUrl: '/lessonimages/module5/lesson40/acute-vs-chronic-lbbb.jpg'
        },
        hint: '🧠 Flip to understand timing differences!'
      },

      {
        id: 'metabolic-consequences',
        title: 'Metabolic Consequences of LBBB',
        content: 'INCREASED OXYGEN DEMAND: Inefficient contraction patterns. REDUCED CORONARY PERFUSION: Dyssynchrony affects flow. CELLULAR REMODELING: Molecular changes in affected regions. PROGRESSIVE DYSFUNCTION: Worsening over time without treatment.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson40/metabolic-consequences.jpg',
        hint: '🔥 Metabolic burden of LBBB!'
      },

      {
        id: 'remodeling-process',
        title: 'Cardiac Remodeling in LBBB',
        content: 'STRUCTURAL CHANGES: LV enlargement, wall thinning, fibrosis. FUNCTIONAL CHANGES: Reduced EF, worsening dyssynchrony. MOLECULAR CHANGES: Altered protein expression, calcium handling. PROGRESSIVE NATURE: Self-perpetuating cycle.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson40/remodeling-process.jpg',
        hint: '🔄 Progressive remodeling cycle!'
      },

      {
        id: 'gender-age-considerations',
        title: 'Gender and Age Considerations',
        content: 'GENDER DIFFERENCES: Women: Often non-ischemic causes. Men: More likely ischemic etiology. AGE FACTORS: Young: Consider cardiomyopathy, congenital. Elderly: Often degenerative or ischemic.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson40/demographics.jpg',
        hint: '👥 Demographics influence etiology!'
      },

      {
        id: 'unit2-quiz',
        title: 'Unit 2 Quiz: Pathophysiology Check',
        content: 'Test your understanding of LBBB mechanisms!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'The most common cause of LBBB is:',
        options: [
          'Congenital heart disease',
          'Ischemic heart disease',
          'Valvular heart disease',
          'Pulmonary embolism'
        ],
        correctAnswer: 1,
        explanation: 'Correct! Ischemic heart disease is the most common cause of LBBB, often resulting from anterior MI affecting the LAD and its septal branches that supply the left bundle system.',
        imageUrl: '/lessonimages/module5/lesson40/unit2-quiz.jpg',
        hint: '🎯 Think about coronary artery disease!'
      },

      // ===============================================
      // 🎯 UNIT 3: ADVANCED ECG RECOGNITION (7 slides)  
      // ===============================================
      {
        id: 'unit3-intro',
        title: '🎯 Unit 3: Advanced ECG Recognition',
        content: 'Master advanced LBBB ECG interpretation! Learn sophisticated recognition techniques with real examples.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/lbbb_85bpm.png',
        hint: '📈 Master advanced LBBB recognition!'
      },

      {
        id: 'lbbb-criteria-steps',
        title: 'Complete LBBB Criteria',
        content: 'Systematic approach to LBBB diagnosis',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'QRS Duration ≥120ms',
            description: 'Essential for complete LBBB diagnosis (3 small boxes or more)'
          },
          {
            number: 2,
            title: 'Absence of Septal Q Waves',
            description: 'No Q waves in leads I, aVL, V5, V6 (blocked septal activation)'
          },
          {
            number: 3,
            title: 'Broad R Waves Laterally',
            description: 'Wide, monophasic R waves in I, aVL, V5, V6'
          },
          {
            number: 4,
            title: 'QS or rS in V1',
            description: 'Predominantly negative deflection in right precordial leads'
          }
        ],
        hint: '👣 Systematic LBBB diagnosis!'
      },

      {
        id: 'lbbb-morphology-tabs',
        title: 'LBBB Morphology Details',
        content: 'Deep dive into LBBB ECG patterns',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: 'V1 Pattern',
            content: 'QS complex (no septal Q). Sometimes rS with small r. Deep S wave predominant. Absence of RSR\' pattern.',
            icon: 'V1'
          },
          {
            title: 'V6 Pattern',
            content: 'Broad monophasic R wave. No septal Q wave. Slurred upstroke common. May have notching.',
            icon: 'V6'
          },
          {
            title: 'Lead I Pattern',
            content: 'Broad R wave without Q. Often slurred or notched. Mirror of RBBB pattern. Key diagnostic lead.',
            icon: 'I'
          }
        ],
        hint: '📑 Key morphology patterns!'
      },

      {
        id: 'incomplete-lbbb-flashcard',
        title: '🧠 Incomplete LBBB Recognition',
        content: 'Understanding partial left bundle blocks',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🔸',
          question: 'How is incomplete LBBB different from complete LBBB?',
          answer: 'INCOMPLETE LBBB: QRS 100-119ms. Similar morphology to complete LBBB. Some septal activation may remain. Often progresses to complete block. May be rate-dependent.',
          imageUrl: '/ecg/medical_accurate/lbbb_75bpm_2.png'
        },
        hint: '🧠 Flip to understand incomplete patterns!'
      },

      {
        id: 'lbbb-mimics-accordion',
        title: 'LBBB Mimics and Differentials',
        content: 'Distinguishing LBBB from similar patterns',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Left Ventricular Pacing',
            content: 'Pacing spike present. Similar morphology to LBBB. Rate may be fixed. Check for pacemaker.',
            icon: '⚡'
          },
          {
            title: 'Hyperkalemia',
            content: 'Progressive QRS widening. Associated peaked T waves. Check potassium level. Different morphology.',
            icon: '🧪'
          },
          {
            title: 'Sodium Channel Blockade',
            content: 'Drug-induced widening. Use-dependent effects. Class IC antiarrhythmics. Check medication history.',
            icon: '💊'
          },
          {
            title: 'Left Ventricular Aneurysm',
            content: 'May mimic LBBB morphology. Associated with MI. Wall motion abnormalities on echo.',
            icon: '💔'
          }
        ],
        hint: '🎯 Click for differential diagnosis!'
      },

      {
        id: 'concordance-concept',
        title: 'ST-T Wave Changes in LBBB',
        content: 'DISCORDANT ST-T CHANGES: Normal finding in LBBB. Opposite direction to QRS. CONCORDANT CHANGES: May indicate acute MI. Requires special LBBB MI criteria. SGARBOSSA CRITERIA: Helps identify MI in LBBB.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson40/concordance.jpg',
        hint: '⚖️ Concordance vs discordance!'
      },

      {
        id: 'unit3-quiz',
        title: 'Unit 3 Quiz: ECG Recognition',
        content: 'Test your advanced LBBB recognition skills!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'In complete LBBB, lead V6 typically shows:',
        options: [
          'RSR\' pattern like RBBB',
          'Broad monophasic R wave without septal Q',
          'Deep Q waves with tall R',
          'Narrow QRS complex'
        ],
        correctAnswer: 1,
        explanation: 'Correct! In complete LBBB, lead V6 shows a broad monophasic R wave without the normal septal Q wave, reflecting the altered activation sequence.',
        imageUrl: '/lessonimages/module5/lesson40/unit3-quiz.jpg',
        hint: '🎯 Think about lateral lead morphology!'
      },

      // ===============================================
      // 🎯 UNIT 4: CLINICAL IMPLICATIONS + AUDIO (7 slides)
      // ===============================================
      {
        id: 'unit4-intro',
        title: '🎯 Unit 4: Clinical Implications + Audio',
        content: 'Master LBBB clinical significance! Learn when LBBB truly matters for patient outcomes.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson40/clinical-implications.jpg',
        hint: '👩‍⚕️ Understand clinical significance!'
      },

      {
        id: 'clinical-implications-audio',
        title: '🎧 Clinical Implications Analysis',
        content: 'Listen to detailed explanation of LBBB clinical significance',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module5/lesson40/clinical-implications.mp3',
        hint: '🎧 Audio guide to clinical relevance!'
      },

      {
        id: 'prognostic-significance-tabs',
        title: 'LBBB Prognostic Significance',
        content: 'Understanding long-term implications',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        tabs: [
          {
            title: 'New LBBB',
            content: 'Poor prognostic indicator. Often indicates significant structural heart disease. Requires urgent evaluation. Associated with higher mortality.',
            icon: '🚨'
          },
          {
            title: 'Chronic LBBB',
            content: 'Progressive LV dysfunction risk. Increased sudden death risk. May benefit from CRT. Regular monitoring needed.',
            icon: '⏱️'
          },
          {
            title: 'LBBB + Heart Failure',
            content: 'Mechanical dyssynchrony worsens symptoms. CRT can be transformative. Improved survival with appropriate therapy.',
            icon: '💔'
          }
        ],
        hint: '📑 Prognosis varies by context!'
      },

      {
        id: 'lbbb-stemi-equivalent-accordion',
        title: 'LBBB as STEMI Equivalent',
        content: 'Critical acute management considerations',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        accordionItems: [
          {
            title: 'New/Presumably New LBBB',
            content: 'Consider STEMI equivalent in appropriate clinical context. Age >40 years. Chest pain <12 hours. No prior LBBB documented.',
            icon: '⚡'
          },
          {
            title: 'Acute Management',
            content: 'Activate cath lab if clinically indicated. Consider thrombolysis if PCI not available. Dual antiplatelet therapy.',
            icon: '🏥'
          },
          {
            title: 'Diagnostic Challenges',
            content: 'Cannot see typical STEMI changes. Use clinical presentation. Consider imaging (echo/cath). Serial troponins.',
            icon: '🔍'
          }
        ],
        hint: '🎯 Click for acute management!'
      },

      {
        id: 'heart-failure-implications-flashcard',
        title: '🧠 LBBB and Heart Failure',
        content: 'Critical relationship in cardiac care',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '💔',
          question: 'How does LBBB affect heart failure management?',
          answer: 'LBBB causes mechanical dyssynchrony worsening HF symptoms. Patients with LBBB + HF + EF≤35% + QRS≥130ms are Class I candidates for CRT. CRT can improve symptoms, exercise capacity, and survival significantly.',
          imageUrl: '/lessonimages/module5/lesson40/hf-implications.jpg'
        },
        hint: '🧠 Flip for HF management insights!'
      },

      {
        id: 'sudden-death-risk',
        title: 'Sudden Death Risk in LBBB',
        content: 'INCREASED RISK: LBBB associated with higher sudden death rates. MECHANISMS: Ventricular arrhythmias, progressive CHB. RISK STRATIFICATION: EF, symptoms, QRS width matter. ICD CONSIDERATION: May be indicated based on EF.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson40/sudden-death-risk.jpg',
        hint: '⚠️ Arrhythmic risk consideration!'
      },

      {
        id: 'exercise-limitations',
        title: 'Exercise and Functional Capacity',
        content: 'DYSSYNCHRONY EFFECTS: Reduced exercise capacity in many patients. CHRONOTROPIC RESPONSE: May be impaired. CRT BENEFITS: Often dramatically improves exercise tolerance. INDIVIDUAL VARIATION: Some patients minimally affected.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson40/exercise-capacity.jpg',
        hint: '🏃‍♂️ Variable functional impact!'
      },

      {
        id: 'unit4-quiz',
        title: 'Unit 4 Quiz: Clinical Implications',
        content: 'Test your clinical knowledge!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'New LBBB in the setting of chest pain should be considered:',
        options: [
          'Normal variant requiring no action',
          'STEMI equivalent requiring urgent catheterization',
          'Chronic condition for outpatient follow-up',
          'Indication for immediate cardioversion'
        ],
        correctAnswer: 1,
        explanation: 'Correct! New or presumably new LBBB in the appropriate clinical context (chest pain, age >40) should be considered a STEMI equivalent requiring urgent cardiac catheterization.',
        imageUrl: '/lessonimages/module5/lesson40/unit4-quiz.jpg',
        hint: '🎯 Think about acute coronary syndrome!'
      },

      // ===============================================
      // 🎯 UNIT 5: MANAGEMENT STRATEGIES (6 slides)
      // ===============================================
      {
        id: 'unit5-intro',
        title: '🎯 Unit 5: Management Strategies',
        content: 'Master evidence-based LBBB management! Learn when and how to treat LBBB optimally.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson40/management-strategies.jpg',
        hint: '⚕️ Evidence-based treatment!'
      },

      {
        id: 'management-algorithm-accordion',
        title: 'LBBB Management Algorithm',
        content: 'Systematic approach to LBBB management',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Acute Presentation',
            content: 'New LBBB + chest pain: Activate cath lab. Hemodynamic instability: Support measures. Rule out acute MI. Serial biomarkers.',
            icon: '🚨'
          },
          {
            title: 'Chronic Asymptomatic',
            content: 'Identify underlying cause. Echo to assess LV function. Optimize medical therapy. Regular monitoring.',
            icon: '👁️'
          },
          {
            title: 'Heart Failure Patients',
            content: 'Optimize guideline-directed medical therapy. Assess CRT eligibility. Consider ICD indications. Comprehensive HF care.',
            icon: '💔'
          },
          {
            title: 'High-Risk Features',
            content: 'Bifascicular block progression. Syncope evaluation. EP study consideration. Pacemaker evaluation.',
            icon: '⚠️'
          }
        ],
        hint: '🎯 Click for management steps!'
      },

      {
        id: 'crt-indications-steps',
        title: 'CRT Indications and Selection',
        content: 'Evidence-based CRT patient selection',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'EF ≤35% on Optimal Therapy',
            description: 'Despite 3+ months of guideline-directed medical therapy'
          },
          {
            number: 2,
            title: 'LBBB with QRS ≥130ms',
            description: 'True LBBB morphology preferred over non-LBBB patterns'
          },
          {
            number: 3,
            title: 'Symptomatic Heart Failure',
            description: 'NYHA Class II, III, or ambulatory Class IV symptoms'
          },
          {
            number: 4,
            title: 'Life Expectancy >1 Year',
            description: 'With reasonable functional status expected'
          }
        ],
        hint: '👣 Systematic CRT selection!'
      },

      {
        id: 'medical-optimization-tabs',
        title: 'Medical Therapy Optimization',
        content: 'Comprehensive medical management',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        tabs: [
          {
            title: 'ACE/ARB/ARNI',
            content: 'Maximally tolerated doses. ARNI preferred if tolerated. Monitor renal function and potassium.',
            icon: '💊'
          },
          {
            title: 'Beta Blockers',
            content: 'Evidence-based agents (metoprolol, carvedilol, bisoprolol). Target maximum tolerated dose. Monitor heart rate.',
            icon: '🫀'
          },
          {
            title: 'Aldosterone Antagonists',
            content: 'Spironolactone or eplerenone. Monitor potassium and renal function. Proven mortality benefit.',
            icon: '⚖️'
          }
        ],
        hint: '📑 Comprehensive medical therapy!'
      },

      {
        id: 'device-therapy-flashcard',
        title: '🧠 Device Therapy Options',
        content: 'Understanding LBBB device interventions',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '⚡',
          question: 'What device therapies are available for LBBB patients?',
          answer: 'CRT-P: Pacing only for dyssynchrony. CRT-D: Includes defibrillator function. HIS BUNDLE PACING: Physiologic alternative. ICD ALONE: If no CRT indication but high SCD risk. LEADLESS: Limited role in LBBB.',
          imageUrl: '/lessonimages/module5/lesson40/device-options.jpg'
        },
        hint: '🧠 Flip for device options!'
      },

      {
        id: 'monitoring-follow-up',
        title: 'Monitoring and Follow-up',
        content: 'ECHO MONITORING: Serial assessment of LV function. SYMPTOM TRACKING: Functional status, exercise capacity. DEVICE CHECKS: Regular CRT/ICD optimization. MEDICAL THERAPY: Titration and monitoring.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson40/follow-up.jpg',
        hint: '📊 Systematic monitoring approach!'
      },

      {
        id: 'unit5-quiz',
        title: 'Unit 5 Quiz: Management',
        content: 'Test your management knowledge!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'The strongest indication for CRT in LBBB patients is:',
        options: [
          'Any patient with LBBB regardless of symptoms',
          'LBBB + HF symptoms + EF ≤35% + QRS ≥130ms',
          'LBBB + normal EF + exercise intolerance',
          'New LBBB in acute MI'
        ],
        correctAnswer: 1,
        explanation: 'Correct! The strongest Class I indication for CRT is LBBB with heart failure symptoms, EF ≤35% despite optimal medical therapy, and QRS ≥130ms.',
        imageUrl: '/lessonimages/module5/lesson40/unit5-quiz.jpg',
        hint: '🎯 Think about CRT criteria!'
      },

      // ===============================================
      // 🎯 UNIT 6: EXPERT MASTERY + CELEBRATION AUDIO (7 slides)
      // ===============================================
      {
        id: 'unit6-intro',
        title: '🎯 Unit 6: Expert LBBB Mastery',
        content: 'Congratulations! Achieve expert-level LBBB mastery with advanced concepts and clinical pearls!',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson40/expert-mastery.jpg',
        hint: '🏆 Expert-level achievement!'
      },

      {
        id: 'expert-mastery-audio',
        title: '🎧 Expert Mastery Celebration',
        content: 'Celebrate your comprehensive LBBB mastery achievement!',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module5/lesson40/expert-mastery-celebration.mp3',
        hint: '🎧 Expert achievement celebration!'
      },

      {
        id: 'advanced-lbbb-scenarios-tabs',
        title: 'Advanced LBBB Scenarios',
        content: 'Expert-level clinical scenarios',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        tabs: [
          {
            title: 'LBBB + Acute MI',
            content: 'Sgarbossa criteria for STEMI diagnosis. Modified Smith criteria improvements. Urgent reperfusion strategies.',
            icon: '🚨'
          },
          {
            title: 'Non-Responder CRT',
            content: 'Lead position optimization. AV/VV timing adjustments. His bundle pacing alternative. Troubleshooting approaches.',
            icon: '🔧'
          },
          {
            title: 'LBBB + Atrial Fibrillation',
            content: 'AV junction management. CRT with AF considerations. Rate control strategies. Anticoagulation needs.',
            icon: '🌊'
          }
        ],
        hint: '📑 Complex clinical scenarios!'
      },

      {
        id: 'emerging-therapies-accordion',
        title: 'Emerging LBBB Therapies',
        content: 'Cutting-edge treatment developments',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        accordionItems: [
          {
            title: 'His Bundle Pacing',
            content: 'Physiologic pacing approach. May reverse LBBB in some cases. Challenging implant technique. Promising outcomes.',
            icon: '⚡'
          },
          {
            title: 'Left Bundle Area Pacing',
            content: 'Novel pacing technique. Physiologic activation. Easier than His bundle. Growing evidence base.',
            icon: '🎯'
          },
          {
            title: 'Cardiac Contractility Modulation',
            content: 'Non-excitatory electrical stimulation. For non-CRT candidates. Improving heart failure symptoms.',
            icon: '🔋'
          },
          {
            title: 'Gene/Cell Therapy',
            content: 'Experimental approaches. Conduction system regeneration. Early research phase. Future potential.',
            icon: '🧬'
          }
        ],
        hint: '🎯 Click for future therapies!'
      },

      {
        id: 'expert-clinical-pearls',
        title: '💎 Expert Clinical Pearls',
        content: 'PEARL 1: New LBBB = acute coronary syndrome until proven otherwise. PEARL 2: CRT transforms lives in appropriate candidates. PEARL 3: QRS width >150ms predicts better CRT response. PEARL 4: True LBBB morphology beats other wide QRS patterns for CRT. PEARL 5: His bundle pacing may be the future of physiologic therapy.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson40/expert-pearls.jpg',
        hint: '💎 Professional wisdom collection!'
      },

      {
        id: 'research-frontiers-flashcard',
        title: '🧠 Research Frontiers',
        content: 'Cutting-edge LBBB research areas',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🔬',
          question: 'What are the current research frontiers in LBBB management?',
          answer: 'AI-guided CRT optimization, multi-point pacing systems, leadless CRT development, conduction system pacing advancement, personalized medicine approaches, stem cell therapy for conduction tissue, advanced imaging for patient selection.',
          imageUrl: '/lessonimages/module5/lesson40/research-frontiers.jpg'
        },
        hint: '🧠 Flip for research insights!'
      },

      {
        id: 'practice-integration',
        title: 'Clinical Practice Integration',
        content: 'SYSTEMATIC APPROACH: Always determine if LBBB is new. TEAM CARE: Multidisciplinary heart failure management. PATIENT EDUCATION: Explaining dyssynchrony and treatment options. OUTCOMES TRACKING: Monitor response to interventions.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson40/practice-integration.jpg',
        hint: '🏥 Integrate into practice!'
      },

      {
        id: 'mastery-summary',
        title: '🏆 LBBB Mastery Achievement',
        content: 'ANATOMY MASTERY: Complete understanding of left bundle system. PATHOPHYSIOLOGY: Mechanisms and consequences clear. ECG EXPERTISE: Advanced recognition skills. CLINICAL ACUMEN: Evidence-based management. FUTURE READY: Emerging therapy awareness.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson40/mastery-summary.jpg',
        hint: '🏆 Complete LBBB mastery achieved!'
      },

      {
        id: 'unit6-final-quiz',
        title: 'Unit 6 Quiz: Expert Validation',
        content: 'Validate your expert LBBB knowledge!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'The most promising emerging therapy for LBBB patients is:',
        options: [
          'Permanent atrial fibrillation',
          'His bundle pacing for physiologic activation',
          'Higher energy defibrillation',
          'Complete AV block creation'
        ],
        correctAnswer: 1,
        explanation: 'Excellent! His bundle pacing represents the most promising emerging therapy, providing physiologic activation that may overcome LBBB and avoid the limitations of traditional CRT.',
        imageUrl: '/lessonimages/module5/lesson40/expert-quiz.jpg',
        hint: '🎯 Think about physiologic approaches!'
      }
    ],
    summary: "🏆 Outstanding! You have achieved comprehensive LBBB mastery! You understand complex anatomy, pathophysiology, advanced ECG recognition, clinical implications, evidence-based management, and emerging therapies.",
    keyPoints: [
      "LBBB disrupts normal left ventricular activation causing mechanical dyssynchrony",
      "New LBBB in acute chest pain is a STEMI equivalent requiring urgent catheterization", 
      "Complete LBBB criteria: QRS ≥120ms, no septal Q waves, broad R in lateral leads",
      "Strategic audio reinforcement in Units 2, 4, and 6 enhanced comprehension",
      "CRT is transformative for LBBB patients with heart failure and appropriate criteria",
      "His bundle pacing represents the future of physiologic LBBB management"
    ],
    resources: [
      {
        title: "LBBB Master Class Reference",
        url: "https://ecgkid.com/left-bundle-branch-block-comprehensive",
        type: "video"
      }
    ]
  },
  tasks: [
    {
      id: 'expert-lbbb-mastery-assessment',
      type: 'final-assessment',
      xp: 60,
      audio: {
        mainNarration: {
          audioUrl: '/lessonaudio/module5/lesson40/expert-mastery-celebration.mp3',
          duration: 15,
          transcript: 'Exceptional mastery achievement! You have conquered LBBB comprehensively - from complex anatomy through emerging therapies. Your expertise in recognition, clinical implications, and evidence-based management is now at expert level. This knowledge will serve you and your patients exceptionally well!'
        }
      },
      images: {
        mainImage: '/lessonimages/module5/lesson40/expert-achievement.jpg',
        slideImages: []
      },
      content: {
        prerequisiteMessage: '🏆 Expert Assessment: Complete all 6 comprehensive units to unlock this expert-level LBBB mastery evaluation.',
        questions: [
          {
            id: 'lbbb-anatomy-expert',
            type: 'multiple-choice',
            question: 'In LBBB, left ventricular activation occurs primarily through:',
            options: [
              'Preserved left bundle branch conduction',
              'Cell-to-cell spread from the right ventricle',
              'Retrograde conduction via coronary veins',
              'Accelerated AV nodal conduction'
            ],
            correctAnswer: 1,
            explanation: 'In LBBB, the left bundle system is blocked, so LV activation occurs through slow cell-to-cell conduction spreading from the normally activated right ventricle, causing the characteristic dyssynchrony.',
            imageUrl: '/lessonimages/module5/lesson40/assessment/activation.jpg'
          },
          {
            id: 'lbbb-criteria-expert',
            type: 'multiple-choice', 
            question: 'Essential criteria for complete LBBB include all EXCEPT:',
            options: [
              'QRS duration ≥120 milliseconds',
              'Absence of septal Q waves in I, aVL, V5, V6',
              'RSR\' pattern in lead V1',
              'Broad monophasic R waves in lateral leads'
            ],
            correctAnswer: 2,
            explanation: 'RSR\' pattern in V1 is characteristic of RBBB, not LBBB. In LBBB, V1 typically shows a QS or rS pattern (predominantly negative deflection).',
            imageUrl: '/lessonimages/module5/lesson40/assessment/criteria.jpg'
          },
          {
            id: 'stemi-equivalent-expert',
            type: 'multiple-choice',
            question: 'New LBBB should be considered STEMI equivalent when:',
            options: [
              'Found in any patient regardless of symptoms',
              'Occurring in patient >40 years with chest pain <12 hours',
              'Associated with any chest discomfort',
              'Seen in routine screening ECG'
            ],
            correctAnswer: 1,
            explanation: 'New or presumably new LBBB in patients >40 years presenting with chest pain within 12 hours should be considered STEMI equivalent requiring urgent reperfusion therapy.',
            imageUrl: '/lessonimages/module5/lesson40/assessment/stemi-equivalent.jpg'
          },
          {
            id: 'crt-indication-expert',
            type: 'multiple-choice',
            question: 'The strongest Class I indication for CRT includes:',
            options: [
              'Any LBBB with normal ejection fraction',
              'LBBB + HF symptoms + EF ≤35% + QRS ≥130ms + optimal medical therapy',
              'New LBBB in acute myocardial infarction',
              'LBBB with intermittent symptoms only'
            ],
            correctAnswer: 1,
            explanation: 'Class I CRT indication requires LBBB morphology, heart failure symptoms, EF ≤35% despite ≥3 months optimal medical therapy, QRS ≥130ms, and reasonable life expectancy.',
            imageUrl: '/lessonimages/module5/lesson40/assessment/crt-criteria.jpg'
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
