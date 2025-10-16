import { Lesson } from '../types/learning';

export const optimizedLesson41: Lesson = {
  id: 'lesson-5-3-optimized',
  moduleId: 'module-5',
  title: "Right Bundle Branch Block",
  description: "Master right bundle branch block comprehensively through 6 focused learning units with enhanced interactive elements: RBBB anatomy and physiology, pathophysiology with audio, advanced ECG recognition, clinical implications with audio, management approaches, and expert mastery with celebration audio",
  order: 3,
  estimatedTime: 45,
  content: {
    type: 'mixed',
    introduction: "🎯 Welcome to Right Bundle Branch Block Mastery! Master RBBB comprehensively through 6 progressive units with enhanced interactive elements, strategic audio, and real ECG integration from our extensive clinical database.",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your RBBB Learning Journey",
        content: "UNIT 1: RBBB Anatomy & Physiology → UNIT 2: Pathophysiology + Audio → UNIT 3: Advanced ECG Recognition → UNIT 4: Clinical Implications + Audio → UNIT 5: Management Approaches → UNIT 6: Expert Mastery + Celebration Audio",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // ===============================================
      // 🎯 UNIT 1: RBBB ANATOMY & PHYSIOLOGY (7 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: RBBB Anatomy & Physiology',
        content: 'Master RBBB anatomy and physiology! Understand the right bundle system and its unique characteristics.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/rbbb_80bpm_2.png',
        hint: '🫀 Master RBBB foundations!'
      },
      
      {
        id: 'right-bundle-anatomy-flashcard',
        title: '🧠 Right Bundle System Architecture',
        content: 'Understanding right bundle anatomy',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '➡️',
          question: 'Describe the anatomical structure of the right bundle branch system.',
          answer: 'RIGHT BUNDLE BRANCH: Single, long, thin fascicle. Originates from Bundle of His. Courses down right side of interventricular septum. Terminates in Purkinje network of right ventricle. More vulnerable to damage than left bundle due to single blood supply.',
          imageUrl: '/lessonimages/module5/lesson41/right-bundle-anatomy.jpg'
        },
        hint: '🧠 Flip to learn the simple system!'
      },

      {
        id: 'rbbb-blood-supply',
        title: 'Right Bundle Blood Supply',
        content: 'SINGLE BLOOD SUPPLY: LAD septal perforators only. NO COLLATERAL CIRCULATION: More vulnerable than left bundle. ANTERIOR MI RISK: Often affected in LAD occlusion. ISOLATED LESION: Can occur with minimal myocardial damage.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson41/rbbb-blood-supply.jpg',
        hint: '🩸 Single supply = vulnerability!'
      },

      {
        id: 'normal-rv-activation-steps',
        title: 'Normal RV Activation Sequence',
        content: 'Understanding normal right ventricular activation',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Bundle of His Conduction',
            description: 'Rapid conduction through His bundle to both branches'
          },
          {
            number: 2,
            title: 'Right Bundle Activation',
            description: 'Fast conduction down right bundle branch to RV'
          },
          {
            number: 3,
            title: 'Purkinje Network Spread',
            description: 'Rapid activation throughout right ventricular myocardium'
          },
          {
            number: 4,
            title: 'Synchronized Contraction',
            description: 'Coordinated RV-LV activation for optimal function'
          }
        ],
        hint: '👣 Normal requires synchrony!'
      },

      {
        id: 'rbbb-activation-disruption',
        title: 'RBBB Activation Disruption',
        content: 'BLOCKED RIGHT BUNDLE: No direct RV activation via right system. LEFT-TO-RIGHT ACTIVATION: LV activates first, then spreads to RV. PROLONGED RV CONDUCTION: Cell-to-cell conduction much slower. DELAYED RV CONTRACTION: Late right ventricular activation.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson41/rbbb-disruption.jpg',
        hint: '⚡ Disrupted right-sided sequence!'
      },

      {
        id: 'hemodynamic-impact-tabs',
        title: 'Hemodynamic Impact of RBBB',
        content: 'Understanding RBBB impact on heart function',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        tabs: [
          {
            title: 'Minimal Impact',
            content: 'Usually well tolerated. LV function preserved. RV function minimally affected. Often asymptomatic.',
            icon: '✅'
          },
          {
            title: 'Pulmonary Effects',
            content: 'May indicate pulmonary disease. RV pressure overload association. Cor pulmonale consideration.',
            icon: '🫁'
          },
          {
            title: 'Exercise Tolerance',
            content: 'Usually normal exercise capacity. Chronotropic response preserved. Functional limitations rare.',
            icon: '🏃‍♂️'
          }
        ],
        hint: '📑 Generally benign hemodynamically!'
      },

      {
        id: 'unit1-quiz',
        title: 'Unit 1 Quiz: RBBB Anatomy',
        content: 'Test your RBBB anatomy knowledge!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'The right bundle branch is supplied by:',
        options: [
          'Dual blood supply from LAD and RCA',
          'Single blood supply from LAD septal branches',
          'Right coronary artery posterior branches',
          'Circumflex artery marginal branches'
        ],
        correctAnswer: 1,
        explanation: 'Correct! The right bundle branch has a single blood supply from LAD septal perforators, making it more vulnerable to ischemia than the left bundle system with its dual supply.',
        imageUrl: '/lessonimages/module5/lesson41/unit1-quiz.jpg',
        hint: '🎯 Think about vulnerability!'
      },

      // ===============================================
      // 🎯 UNIT 2: PATHOPHYSIOLOGY + AUDIO (8 slides)
      // ===============================================
      {
        id: 'unit2-intro',
        title: '🎯 Unit 2: RBBB Pathophysiology + Audio',
        content: 'Discover RBBB pathophysiology! Master the mechanisms behind right bundle branch block development.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson41/pathophysiology-overview.jpg',
        hint: '⚙️ Understand disease mechanisms!'
      },

      {
        id: 'rbbb-pathophysiology-audio',
        title: '🎧 RBBB Pathophysiology Explained',
        content: 'Listen to detailed explanation of RBBB development mechanisms',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module5/lesson41/rbbb-pathophysiology.mp3',
        hint: '🎧 Audio guide to RBBB mechanisms!'
      },

      {
        id: 'rbbb-causes-accordion',
        title: 'RBBB Underlying Causes',
        content: 'Explore the diverse etiologies of RBBB',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Pulmonary Conditions',
            content: 'Pulmonary embolism (acute). Chronic pulmonary hypertension. Cor pulmonale development. COPD with RV strain.',
            icon: '🫁'
          },
          {
            title: 'Cardiac Conditions',
            content: 'Anterior MI affecting septal branches. Cardiomyopathy (dilated, ischemic). Congenital heart disease. Valvular disease.',
            icon: '💔'
          },
          {
            title: 'Structural Abnormalities',
            content: 'Age-related conduction system fibrosis. Infiltrative diseases (sarcoidosis, amyloidosis). Trauma or surgery.',
            icon: '🏗️'
          },
          {
            title: 'Iatrogenic Causes',
            content: 'Cardiac catheterization trauma. Pacemaker lead placement. Cardiac surgery complications. Drug effects (rare).',
            icon: '⚕️'
          }
        ],
        hint: '🎯 Click to explore causes!'
      },

      {
        id: 'rbbb-significance-flashcard',
        title: '🧠 RBBB Clinical Significance',
        content: 'Understanding when RBBB matters',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '⚖️',
          question: 'When is RBBB clinically significant?',
          answer: 'NEW RBBB: May indicate acute pulmonary embolism or anterior MI. YOUNG PATIENT: Consider structural heart disease. WITH SYMPTOMS: Investigate underlying cause. PROGRESSIVE: Monitor for complete heart block risk.',
          imageUrl: '/lessonimages/module5/lesson41/rbbb-significance.jpg'
        },
        hint: '🧠 Flip to understand significance!'
      },

      {
        id: 'congenital-vs-acquired',
        title: 'Congenital vs Acquired RBBB',
        content: 'CONGENITAL RBBB: Present from birth. Often benign. Associated with ASD. Usually stable. ACQUIRED RBBB: Develops later in life. More concerning. Investigate underlying cause. Monitor progression.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson41/congenital-vs-acquired.jpg',
        hint: '🔄 Age of onset matters!'
      },

      {
        id: 'pulmonary-embolism-association',
        title: 'RBBB and Pulmonary Embolism',
        content: 'ACUTE RBBB: Classic sign of massive PE. RIGHT HEART STRAIN: Acute RV pressure overload. S1Q3T3 PATTERN: May coexist with RBBB. CLINICAL CORRELATION: Always consider PE in new RBBB.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson41/pe-association.jpg',
        hint: '🚨 Think PE with new RBBB!'
      },

      {
        id: 'age-considerations',
        title: 'Age-Related RBBB Considerations',
        content: 'CHILDREN/YOUNG ADULTS: Often congenital, investigate structure. MIDDLE-AGED: Consider ischemic or structural causes. ELDERLY: Often degenerative, usually benign. ATHLETES: Requires cardiology evaluation.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson41/age-considerations.jpg',
        hint: '👥 Age influences significance!'
      },

      {
        id: 'unit2-quiz',
        title: 'Unit 2 Quiz: RBBB Pathophysiology',
        content: 'Test your understanding of RBBB mechanisms!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'New RBBB in a young patient should prompt evaluation for:',
        options: [
          'Normal aging process',
          'Congenital heart disease or structural abnormalities',
          'Electrolyte imbalances only',
          'No further evaluation needed'
        ],
        correctAnswer: 1,
        explanation: 'Correct! New RBBB in a young patient should prompt evaluation for congenital heart disease (especially ASD), structural abnormalities, or other underlying cardiac conditions.',
        imageUrl: '/lessonimages/module5/lesson41/unit2-quiz.jpg',
        hint: '🎯 Think about structural causes!'
      },

      // ===============================================
      // 🎯 UNIT 3: ADVANCED ECG RECOGNITION (7 slides)  
      // ===============================================
      {
        id: 'unit3-intro',
        title: '🎯 Unit 3: Advanced ECG Recognition',
        content: 'Master advanced RBBB ECG interpretation! Learn sophisticated recognition techniques with real examples.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/rbbb_90bpm.png',
        hint: '📈 Master advanced RBBB recognition!'
      },

      {
        id: 'rbbb-criteria-steps',
        title: 'Complete RBBB Criteria',
        content: 'Systematic approach to RBBB diagnosis',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'QRS Duration ≥120ms',
            description: 'Essential for complete RBBB diagnosis (3 small boxes or more)'
          },
          {
            number: 2,
            title: 'RSR\' Pattern in V1',
            description: 'Classic "bunny ear" or "M" pattern in lead V1'
          },
          {
            number: 3,
            title: 'Wide S Wave in I, V6',
            description: 'Slurred, wide S waves in lateral leads'
          },
          {
            number: 4,
            title: 'Normal Axis',
            description: 'Usually normal QRS axis unless fascicular block present'
          }
        ],
        hint: '👣 Systematic RBBB diagnosis!'
      },

      {
        id: 'v1-morphology-tabs',
        title: 'V1 Morphology Patterns',
        content: 'Deep dive into V1 RBBB patterns',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: 'Classic RSR\'',
            content: 'Rabbit ear pattern. R-S-R\' morphology. Second R\' is taller. Most common pattern.',
            icon: '🐰'
          },
          {
            title: 'rSR\' Pattern',
            content: 'Small initial r wave. Dominant S wave. Terminal R\'. Alternative morphology.',
            icon: '📈'
          },
          {
            title: 'Broad R Pattern',
            content: 'Wide monophasic R. Less common. May see notching. Still diagnostic.',
            icon: '📊'
          }
        ],
        hint: '📑 V1 is the key lead!'
      },

      {
        id: 'incomplete-rbbb-flashcard',
        title: '🧠 Incomplete RBBB Recognition',
        content: 'Understanding partial right bundle blocks',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🔸',
          question: 'How is incomplete RBBB different from complete RBBB?',
          answer: 'INCOMPLETE RBBB: QRS 100-119ms. Similar V1 morphology (RSR\'). Less prominent S waves in I, V6. May progress to complete block. Often rate-related in some patients.',
          imageUrl: '/ecg/medical_accurate/rbbb_75bpm.png'
        },
        hint: '🧠 Flip to understand incomplete patterns!'
      },

      {
        id: 'rbbb-mimics-accordion',
        title: 'RBBB Mimics and Differentials',
        content: 'Distinguishing RBBB from similar patterns',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Right Ventricular Pacing',
            content: 'Pacing spike present. Different morphology pattern. Rate may be fixed. Check for pacemaker.',
            icon: '⚡'
          },
          {
            title: 'Ventricular Tachycardia',
            content: 'Usually faster rate. AV dissociation present. Different morphology clues. Clinical context important.',
            icon: '💨'
          },
          {
            title: 'WPW Syndrome',
            content: 'Delta waves present. Short PR interval. Different mechanism entirely. Preexcitation pattern.',
            icon: '⚡'
          },
          {
            title: 'Normal Variants',
            content: 'Incomplete RBBB pattern. Terminal R\' in V1. Not pathologic. No treatment needed.',
            icon: '✅'
          }
        ],
        hint: '🎯 Click for differential diagnosis!'
      },

      {
        id: 'axis-deviation-combinations',
        title: 'RBBB with Axis Deviations',
        content: 'RBBB + LEFT AXIS: RBBB + LAFB (bifascicular block). RBBB + RIGHT AXIS: RBBB + LPFB (rare bifascicular). RBBB + NORMAL AXIS: Isolated RBBB only. CLINICAL SIGNIFICANCE: Bifascicular blocks need monitoring.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson41/axis-combinations.jpg',
        hint: '⚖️ Axis tells the story!'
      },

      {
        id: 'unit3-quiz',
        title: 'Unit 3 Quiz: ECG Recognition',
        content: 'Test your advanced RBBB recognition skills!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'The most characteristic feature of RBBB in lead V1 is:',
        options: [
          'Deep Q wave',
          'RSR\' pattern (bunny ears)',
          'Monophasic negative deflection',
          'ST elevation'
        ],
        correctAnswer: 1,
        explanation: 'Correct! The RSR\' pattern ("bunny ears" or "M" shape) in lead V1 is the most characteristic feature of RBBB, representing the delayed right ventricular activation.',
        imageUrl: '/lessonimages/module5/lesson41/unit3-quiz.jpg',
        hint: '🎯 Think about the bunny ears!'
      },

      // ===============================================
      // 🎯 UNIT 4: CLINICAL IMPLICATIONS + AUDIO (7 slides)
      // ===============================================
      {
        id: 'unit4-intro',
        title: '🎯 Unit 4: Clinical Implications + Audio',
        content: 'Master RBBB clinical significance! Learn when RBBB truly matters for patient care.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson41/clinical-implications.jpg',
        hint: '👩‍⚕️ Understand clinical significance!'
      },

      {
        id: 'clinical-implications-audio',
        title: '🎧 Clinical Implications Analysis',
        content: 'Listen to detailed explanation of RBBB clinical significance',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module5/lesson41/clinical-implications.mp3',
        hint: '🎧 Audio guide to clinical relevance!'
      },

      {
        id: 'prognostic-implications-tabs',
        title: 'RBBB Prognostic Implications',
        content: 'Understanding long-term significance',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        tabs: [
          {
            title: 'Isolated RBBB',
            content: 'Generally benign in healthy individuals. Normal life expectancy. Minimal symptoms. Routine monitoring sufficient.',
            icon: '🟢'
          },
          {
            title: 'New RBBB',
            content: 'Requires investigation. May indicate PE, MI, or structural disease. More concerning than chronic RBBB.',
            icon: '🟡'
          },
          {
            title: 'Bifascicular Block',
            content: 'RBBB + fascicular block. Higher risk progression to CHB. Requires closer monitoring and cardiology follow-up.',
            icon: '🔴'
          }
        ],
        hint: '📑 Context determines significance!'
      },

      {
        id: 'pe-recognition-accordion',
        title: 'RBBB and Pulmonary Embolism Recognition',
        content: 'Critical emergency recognition',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Acute RBBB Pattern',
            content: 'New or presumably new RBBB. Associated with chest pain or dyspnea. Right heart strain pattern. Consider massive PE.',
            icon: '⚡'
          },
          {
            title: 'Associated Findings',
            content: 'S1Q3T3 pattern may coexist. Right axis deviation possible. T wave inversions V1-V4. Sinus tachycardia common.',
            icon: '🔍'
          },
          {
            title: 'Clinical Context',
            content: 'Risk factors for VTE. Sudden onset dyspnea. Chest pain, syncope. Hemodynamic instability possible.',
            icon: '🏥'
          }
        ],
        hint: '🎯 Click for PE recognition!'
      },

      {
        id: 'exercise-implications-flashcard',
        title: '🧠 RBBB and Exercise',
        content: 'Activity and exercise considerations',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🏃‍♂️',
          question: 'How does RBBB affect exercise capacity and activities?',
          answer: 'ISOLATED RBBB: Usually no exercise limitation. Normal chronotropic response. No activity restrictions needed. WITH SYMPTOMS: Investigate underlying cause. May need exercise testing to assess functional capacity.',
          imageUrl: '/lessonimages/module5/lesson41/exercise-implications.jpg'
        },
        hint: '🧠 Flip for exercise guidelines!'
      },

      {
        id: 'monitoring-requirements',
        title: 'RBBB Monitoring Requirements',
        content: 'NEW RBBB: Urgent evaluation needed. CHRONIC STABLE: Routine monitoring. BIFASCICULAR: Regular cardiology follow-up. SYMPTOMATIC: Comprehensive evaluation. ASYMPTOMATIC ISOLATED: Reassurance often sufficient.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson41/monitoring-requirements.jpg',
        hint: '📊 Tailored monitoring approach!'
      },

      {
        id: 'special-populations-rbbb',
        title: 'RBBB in Special Populations',
        content: 'ATHLETES: Usually benign but requires evaluation. ELDERLY: Often degenerative, monitor for progression. CHILDREN: Consider congenital heart disease. PREGNANCY: Usually well tolerated, monitor if new.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson41/special-populations.jpg',
        hint: '👥 Population-specific considerations!'
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
        question: 'RBBB combined with left anterior fascicular block is called:',
        options: [
          'Complete heart block',
          'Bifascicular block',
          'Trifascicular block',
          'Multifocal block'
        ],
        correctAnswer: 1,
        explanation: 'Correct! RBBB combined with left anterior fascicular block is called bifascicular block, representing block in two of the three main fascicles of the conduction system.',
        imageUrl: '/lessonimages/module5/lesson41/unit4-quiz.jpg',
        hint: '🎯 Think about two fascicles blocked!'
      },

      // ===============================================
      // 🎯 UNIT 5: MANAGEMENT APPROACHES (6 slides)
      // ===============================================
      {
        id: 'unit5-intro',
        title: '🎯 Unit 5: Management Approaches',
        content: 'Master evidence-based RBBB management! Learn systematic approaches to RBBB care.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson41/management-approaches.jpg',
        hint: '⚕️ Evidence-based care!'
      },

      {
        id: 'rbbb-management-algorithm-accordion',
        title: 'RBBB Management Algorithm',
        content: 'Systematic approach to RBBB management',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'New RBBB Evaluation',
            content: 'Determine acuity and symptoms. Rule out PE and MI. Echocardiogram assessment. Consider cardiology consultation.',
            icon: '🚨'
          },
          {
            title: 'Chronic Asymptomatic RBBB',
            content: 'Reassurance often sufficient. Routine follow-up. No specific treatment needed. Monitor for symptom development.',
            icon: '👁️'
          },
          {
            title: 'Bifascicular Block Management',
            content: 'Regular cardiology follow-up. Monitor for progression to CHB. Consider pacemaker evaluation if symptomatic.',
            icon: '⚠️'
          },
          {
            title: 'Symptomatic RBBB',
            content: 'Comprehensive evaluation for underlying causes. Treat associated conditions. Monitor functional status.',
            icon: '🔍'
          }
        ],
        hint: '🎯 Click for systematic management!'
      },

      {
        id: 'diagnostic-workup-steps',
        title: 'RBBB Diagnostic Workup',
        content: 'Comprehensive evaluation approach',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'History & Physical',
            description: 'Symptom assessment, risk factors, family history, medication review'
          },
          {
            number: 2,
            title: 'Basic Testing',
            description: 'Complete ECG analysis, chest X-ray, basic metabolic panel'
          },
          {
            number: 3,
            title: 'Cardiac Assessment',
            description: 'Echocardiogram for structure/function, consider stress testing'
          },
          {
            number: 4,
            title: 'Specialized Studies',
            description: 'EP study if high-risk features, cardiac MRI if indicated'
          }
        ],
        hint: '👣 Systematic evaluation approach!'
      },

      {
        id: 'pacemaker-indications-tabs',
        title: 'Pacemaker Considerations',
        content: 'When to consider pacing in RBBB',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        tabs: [
          {
            title: 'Class I Indications',
            content: 'Complete heart block development. Symptomatic second-degree AV block. Alternating bundle blocks.',
            icon: '✅'
          },
          {
            title: 'Class II Indications',
            content: 'Bifascicular block with syncope. HV interval >70ms. Asymptomatic complete heart block.',
            icon: '🤔'
          },
          {
            title: 'Not Indicated',
            content: 'Isolated asymptomatic RBBB. Bifascicular block without symptoms. First-degree AV block alone.',
            icon: '❌'
          }
        ],
        hint: '📑 Evidence-based pacing decisions!'
      },

      {
        id: 'treatment-underlying-causes-flashcard',
        title: '🧠 Treating Underlying Causes',
        content: 'Addressing root causes of RBBB',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🎯',
          question: 'What underlying causes of RBBB require specific treatment?',
          answer: 'PULMONARY EMBOLISM: Anticoagulation, thrombolysis. ACUTE MI: Reperfusion therapy. PULMONARY HYPERTENSION: Vasodilators, oxygen. HEART FAILURE: Guideline-directed therapy. STRUCTURAL DISEASE: Specific interventions.',
          imageUrl: '/lessonimages/module5/lesson41/underlying-causes-treatment.jpg'
        },
        hint: '🧠 Flip for treatment strategies!'
      },

      {
        id: 'follow-up-monitoring',
        title: 'Long-term Follow-up Strategy',
        content: 'ISOLATED RBBB: Annual check-ups sufficient. BIFASCICULAR BLOCK: 6-month cardiology follow-up. NEW RBBB: 3-month reassessment. SYMPTOMATIC: Individualized monitoring plan.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson41/follow-up-monitoring.jpg',
        hint: '📅 Tailored follow-up plans!'
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
        question: 'The most appropriate management for asymptomatic isolated RBBB is:',
        options: [
          'Immediate pacemaker implantation',
          'Reassurance and routine follow-up',
          'Antiarrhythmic medications',
          'Urgent cardiac catheterization'
        ],
        correctAnswer: 1,
        explanation: 'Correct! Asymptomatic isolated RBBB typically requires only reassurance and routine follow-up, as it is generally benign and does not require specific treatment.',
        imageUrl: '/lessonimages/module5/lesson41/unit5-quiz.jpg',
        hint: '🎯 Think about benign nature!'
      },

      // ===============================================
      // 🎯 UNIT 6: EXPERT MASTERY + CELEBRATION AUDIO (7 slides)
      // ===============================================
      {
        id: 'unit6-intro',
        title: '🎯 Unit 6: Expert RBBB Mastery',
        content: 'Congratulations! Achieve expert-level RBBB mastery with advanced concepts and clinical pearls!',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson41/expert-mastery.jpg',
        hint: '🏆 Expert-level achievement!'
      },

      {
        id: 'expert-mastery-audio',
        title: '🎧 Expert Mastery Celebration',
        content: 'Celebrate your comprehensive RBBB mastery achievement!',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module5/lesson41/expert-mastery-celebration.mp3',
        hint: '🎧 Expert achievement celebration!'
      },

      {
        id: 'advanced-rbbb-scenarios-tabs',
        title: 'Advanced RBBB Scenarios',
        content: 'Expert-level clinical scenarios',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        tabs: [
          {
            title: 'Rate-Related RBBB',
            content: 'Appears only at fast heart rates. Functional block due to refractory period. Usually resolves with rate control.',
            icon: '💨'
          },
          {
            title: 'RBBB with Acute MI',
            content: 'Indicates septal involvement. Often anterior STEMI. May progress to complete heart block. Monitor closely.',
            icon: '🚨'
          },
          {
            title: 'Intermittent RBBB',
            content: 'Comes and goes on monitoring. May be rate-dependent. Consider underlying ischemia. Requires investigation.',
            icon: '🔄'
          }
        ],
        hint: '📑 Complex clinical scenarios!'
      },

      {
        id: 'differential-diagnosis-mastery-accordion',
        title: 'Advanced Differential Diagnosis',
        content: 'Expert-level diagnostic considerations',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        accordionItems: [
          {
            title: 'RBBB vs VT',
            content: 'VT usually faster. AV dissociation in VT. Capture beats in VT. RBBB has consistent morphology.',
            icon: '⚡'
          },
          {
            title: 'RBBB vs Pacing',
            content: 'Pacing spikes visible. Different morphology pattern. Rate characteristics differ. Check device history.',
            icon: '📱'
          },
          {
            title: 'RBBB vs Hyperkalemia',
            content: 'Hyperkalemia: Progressive widening. Associated tall T waves. Check electrolytes. Different morphology.',
            icon: '🧪'
          },
          {
            title: 'Incomplete vs Complete',
            content: 'QRS duration key differentiator. Similar morphology patterns. Progression potential. Clinical significance.',
            icon: '📏'
          }
        ],
        hint: '🎯 Click for expert differentials!'
      },

      {
        id: 'expert-clinical-pearls',
        title: '💎 Expert Clinical Pearls',
        content: 'PEARL 1: New RBBB = think PE or anterior MI. PEARL 2: RSR\' in V1 is pathognomonic. PEARL 3: Bifascicular block needs monitoring. PEARL 4: Rate-related RBBB suggests CAD. PEARL 5: Isolated RBBB usually benign in healthy individuals.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson41/expert-pearls.jpg',
        hint: '💎 Professional wisdom collection!'
      },

      {
        id: 'research-developments-flashcard',
        title: '🧠 Research Developments',
        content: 'Emerging concepts in RBBB management',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🔬',
          question: 'What are emerging developments in RBBB understanding?',
          answer: 'Advanced imaging (cardiac MRI, CT). Genetic screening for familial causes. Improved risk stratification algorithms. Physiologic pacing techniques. AI-assisted ECG interpretation advances.',
          imageUrl: '/lessonimages/module5/lesson41/research-developments.jpg'
        },
        hint: '🧠 Flip for future directions!'
      },

      {
        id: 'clinical-integration',
        title: 'Clinical Practice Integration',
        content: 'SYSTEMATIC APPROACH: Always determine if RBBB is new. CONTEXT CONSIDERATION: Age, symptoms, associated conditions. RISK STRATIFICATION: Identify high-risk features early. PATIENT EDUCATION: Reassure about benign nature when appropriate.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson41/clinical-integration.jpg',
        hint: '🏥 Integrate into practice!'
      },

      {
        id: 'mastery-achievement-summary',
        title: '🏆 RBBB Mastery Achievement',
        content: 'ANATOMY MASTERY: Single fascicle system understanding. PATHOPHYSIOLOGY: Cause recognition expertise. ECG MASTERY: Advanced pattern recognition. CLINICAL ACUMEN: Risk assessment skills. MANAGEMENT: Evidence-based approach mastery.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson41/mastery-achievement.jpg',
        hint: '🏆 Complete RBBB mastery achieved!'
      },

      {
        id: 'unit6-final-quiz',
        title: 'Unit 6 Quiz: Expert Validation',
        content: 'Validate your expert RBBB knowledge!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'The most concerning RBBB presentation is:',
        options: [
          'Chronic asymptomatic RBBB in elderly',
          'New RBBB with chest pain and dyspnea',
          'Rate-related RBBB during exercise',
          'Incomplete RBBB in young athlete'
        ],
        correctAnswer: 1,
        explanation: 'Excellent! New RBBB with chest pain and dyspnea is most concerning as it may indicate acute pulmonary embolism, anterior MI, or other serious acute conditions requiring urgent evaluation.',
        imageUrl: '/lessonimages/module5/lesson41/expert-quiz.jpg',
        hint: '🎯 Think about acute presentations!'
      }
    ],
    summary: "🏆 Outstanding! You have achieved comprehensive RBBB mastery! You understand anatomy, pathophysiology, advanced ECG recognition, clinical implications, evidence-based management, and expert-level differential diagnosis.",
    keyPoints: [
      "RBBB results from right bundle branch block with RSR' pattern in V1 as key feature",
      "New RBBB requires urgent evaluation for PE, MI, or structural heart disease", 
      "Complete RBBB criteria: QRS ≥120ms, RSR' in V1, wide S waves in I and V6",
      "Strategic audio reinforcement in Units 2, 4, and 6 enhanced learning retention",
      "Isolated RBBB is generally benign; bifascicular blocks require monitoring",
      "RBBB combined with fascicular block creates bifascicular block with CHB risk"
    ],
    resources: [
      {
        title: "RBBB Master Class Reference",
        url: "https://ecgkid.com/right-bundle-branch-block-comprehensive",
        type: "video"
      }
    ]
  },
  tasks: [
    {
      id: 'expert-rbbb-mastery-assessment',
      type: 'final-assessment',
      xp: 60,
      audio: {
        mainNarration: {
          audioUrl: '/lessonaudio/module5/lesson41/expert-mastery-celebration.mp3',
          duration: 15,
          transcript: 'Outstanding mastery achievement! You have conquered RBBB comprehensively - from anatomy through advanced management. Your expertise in recognition, risk stratification, and evidence-based care is now at expert level. This knowledge serves you and your patients excellently!'
        }
      },
      images: {
        mainImage: '/lessonimages/module5/lesson41/expert-achievement.jpg',
        slideImages: []
      },
      content: {
        prerequisiteMessage: '🏆 Expert Assessment: Complete all 6 comprehensive units to unlock this expert-level RBBB mastery evaluation.',
        questions: [
          {
            id: 'rbbb-anatomy-expert',
            type: 'multiple-choice',
            question: 'The right bundle branch is more vulnerable to damage because:',
            options: [
              'It has dual blood supply',
              'It has single blood supply from LAD septal branches',
              'It is shorter than left bundle',
              'It has multiple collateral pathways'
            ],
            correctAnswer: 1,
            explanation: 'The right bundle branch has a single blood supply from LAD septal perforators, making it more vulnerable to ischemic damage compared to the left bundle with its dual blood supply.',
            imageUrl: '/lessonimages/module5/lesson41/assessment/vulnerability.jpg'
          },
          {
            id: 'rbbb-morphology-expert',
            type: 'multiple-choice', 
            question: 'The pathognomonic ECG feature of RBBB is:',
            options: [
              'Deep Q waves in lateral leads',
              'RSR\' pattern in lead V1',
              'ST elevation in precordial leads',
              'Negative T waves in limb leads'
            ],
            correctAnswer: 1,
            explanation: 'The RSR\' pattern ("bunny ears") in lead V1 is pathognomonic for RBBB, representing the delayed right ventricular activation through the blocked right bundle.',
            imageUrl: '/lessonimages/module5/lesson41/assessment/morphology.jpg'
          },
          {
            id: 'new-rbbb-expert',
            type: 'multiple-choice',
            question: 'New RBBB with acute chest pain should prompt immediate consideration of:',
            options: [
              'Routine outpatient cardiology referral',
              'Pulmonary embolism or anterior MI',
              'Electrolyte replacement therapy',
              'Antiarrhythmic medication'
            ],
            correctAnswer: 1,
            explanation: 'New RBBB with acute chest pain should prompt immediate evaluation for pulmonary embolism or anterior MI, both of which can cause acute right bundle branch block.',
            imageUrl: '/lessonimages/module5/lesson41/assessment/new-rbbb.jpg'
          },
          {
            id: 'bifascicular-block-expert',
            type: 'multiple-choice',
            question: 'RBBB combined with left anterior fascicular block represents:',
            options: [
              'Complete heart block',
              'Bifascicular block requiring monitoring for CHB progression',
              'Normal variant requiring no follow-up',
              'Indication for immediate pacing'
            ],
            correctAnswer: 1,
            explanation: 'RBBB + LAFB represents bifascicular block, blocking two of three main fascicles and requiring monitoring for potential progression to complete heart block.',
            imageUrl: '/lessonimages/module5/lesson41/assessment/bifascicular.jpg'
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
