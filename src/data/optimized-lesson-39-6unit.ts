import { Lesson } from '../types/learning';

export const optimizedLesson39: Lesson = {
  id: 'lesson-5-1-optimized',
  moduleId: 'module-5',
  title: "Bundle Branch Blocks Overview",
  description: "Master bundle branch block fundamentals through 6 focused learning units with enhanced interactive elements: Conduction system anatomy, block mechanisms with audio, ECG fundamentals, clinical significance with audio, diagnostic approach, and advanced concepts with celebration audio",
  order: 1,
  estimatedTime: 45,
  content: {
    type: 'mixed',
    introduction: "🎯 Welcome to Bundle Branch Block Overview! Master the fundamentals of bundle branch blocks through 6 progressive units with enhanced interactive elements, strategic audio, and comprehensive clinical training.",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your Bundle Branch Block Learning Journey",
        content: "UNIT 1: Conduction System Anatomy → UNIT 2: Block Mechanisms + Audio → UNIT 3: ECG Fundamentals → UNIT 4: Clinical Significance + Audio → UNIT 5: Diagnostic Approach → UNIT 6: Advanced Concepts + Celebration Audio",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // ===============================================
      // 🎯 UNIT 1: CONDUCTION SYSTEM ANATOMY (7 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: Conduction System Anatomy',
        content: 'Master cardiac conduction anatomy! Understand the pathways that can become blocked.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/ecg/ecg_dataset_clean/NORM_normal_ECG/clean_00004_normal ECG.png',
        hint: '🗺️ Map the electrical highway!'
      },
      
      {
        id: 'bundle-anatomy-flashcard',
        title: '🧠 Bundle Branch System',
        content: 'Understanding bundle branch anatomy',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🌿',
          question: 'What are the main components of the bundle branch system?',
          answer: 'Bundle of His → Right Bundle Branch + Left Bundle Branch. The left bundle splits into anterior and posterior fascicles, creating the "trifascicular" system with three main conduction pathways.',
          imageUrl: '/lessonimages/module5/lesson39/bundle-anatomy.jpg'
        },
        hint: '🧠 Flip to learn the system!'
      },

      {
        id: 'right-bundle-characteristics',
        title: 'Right Bundle Branch Anatomy',
        content: 'ORIGIN: Bundle of His. COURSE: Right side of interventricular septum to right ventricle. CHARACTERISTICS: Single, long, thin fascicle. BLOOD SUPPLY: Septal perforators from LAD. VULNERABILITY: More susceptible to damage.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson39/right-bundle.jpg',
        hint: '➡️ Right-sided conduction pathway!'
      },

      {
        id: 'left-bundle-system-steps',
        title: 'Left Bundle Branch System',
        content: 'Understanding the complex left bundle anatomy',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Main Left Bundle Trunk',
            description: 'Originates from Bundle of His, divides into two fascicles'
          },
          {
            number: 2,
            title: 'Anterior Fascicle (LAF)',
            description: 'Activates anterosuperior left ventricle, thin and vulnerable'
          },
          {
            number: 3,
            title: 'Posterior Fascicle (LPF)',
            description: 'Activates posteroinferior left ventricle, thick with dual blood supply'
          },
          {
            number: 4,
            title: 'Purkinje Network',
            description: 'Terminal branches spread throughout left ventricular myocardium'
          }
        ],
        hint: '👣 Complex left-sided system!'
      },

      {
        id: 'trifascicular-concept-tabs',
        title: 'Trifascicular System Concept',
        content: 'Understanding the three-fascicle framework',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        tabs: [
          {
            title: 'Right Bundle Branch',
            content: 'Single fascicle conducting to entire right ventricle. When blocked: RBBB pattern. Rate of block: Intermediate vulnerability.',
            icon: '1️⃣'
          },
          {
            title: 'Left Anterior Fascicle',
            content: 'Thin, long fascicle. Most vulnerable to block. When blocked: Left axis deviation pattern (LAFB).',
            icon: '2️⃣'
          },
          {
            title: 'Left Posterior Fascicle',
            content: 'Short, thick fascicle with dual blood supply. Least likely to block. When blocked: Right axis deviation.',
            icon: '3️⃣'
          }
        ],
        hint: '📑 Three pathways, three patterns!'
      },

      {
        id: 'blood-supply-accordion',
        title: 'Bundle Branch Blood Supply',
        content: 'Understanding vascular anatomy affecting conduction',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Right Bundle Branch',
            content: 'Single blood supply from septal perforators (LAD). Vulnerable to anterior MI. No collateral circulation.',
            icon: '🔴'
          },
          {
            title: 'Left Anterior Fascicle',
            content: 'LAD septal branches primary supply. Vulnerable to LAD occlusion. Often affected in anterior STEMI.',
            icon: '🔵'
          },
          {
            title: 'Left Posterior Fascicle',
            content: 'Dual blood supply: LAD septal branches + RCA posterior branches. Most resistant to ischemic damage.',
            icon: '🟣'
          }
        ],
        hint: '🎯 Click to understand vulnerability!'
      },

      {
        id: 'unit1-quiz',
        title: 'Unit 1 Quiz: Anatomy Check',
        content: 'Test your anatomical knowledge!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'The trifascicular system consists of:',
        options: [
          'SA node, AV node, and Bundle of His',
          'Right bundle, left anterior fascicle, left posterior fascicle',
          'Atrial pathways, nodal pathways, ventricular pathways',
          'Fast pathways, slow pathways, accessory pathways'
        ],
        correctAnswer: 1,
        explanation: 'Correct! The trifascicular system consists of the right bundle branch, left anterior fascicle, and left posterior fascicle - three pathways that can be individually blocked.',
        imageUrl: '/lessonimages/module5/lesson39/unit1-quiz.jpg',
        hint: '🎯 Think about the three main fascicles!'
      },

      // ===============================================
      // 🎯 UNIT 2: BLOCK MECHANISMS + AUDIO (8 slides)
      // ===============================================
      {
        id: 'unit2-intro',
        title: '🎯 Unit 2: Block Mechanisms + Audio',
        content: 'Discover how bundle branch blocks develop! Learn the pathophysiology of conduction interruption.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson39/mechanisms-overview.jpg',
        hint: '⚙️ Understand block formation!'
      },

      {
        id: 'mechanisms-audio',
        title: '🎧 Block Mechanisms Explained',
        content: 'Listen to detailed explanation of bundle branch block mechanisms',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module5/lesson39/block-mechanisms.mp3',
        hint: '🎧 Audio guide to pathophysiology!'
      },

      {
        id: 'pathophysiology-accordion',
        title: 'Block Pathophysiology',
        content: 'Explore mechanisms of conduction block',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Ischemic Block',
            content: 'Hypoxia disrupts cellular metabolism. Membrane potential alterations. Conduction velocity slowing then block. May be reversible with reperfusion.',
            icon: '🩸'
          },
          {
            title: 'Fibrotic Block',
            content: 'Scar tissue replaces conduction tissue. Progressive degenerative process. Usually permanent block. Common in elderly patients.',
            icon: '🧱'
          },
          {
            title: 'Inflammatory Block',
            content: 'Myocarditis, sarcoidosis, infiltrative disease. May respond to anti-inflammatory treatment. Variable reversibility.',
            icon: '🔥'
          }
        ],
        hint: '🎯 Click to understand mechanisms!'
      },

      {
        id: 'acute-vs-chronic-flashcard',
        title: '🧠 Acute vs Chronic Block',
        content: 'Understanding temporal development patterns',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '⏱️',
          question: 'How do acute and chronic bundle branch blocks differ?',
          answer: 'ACUTE: Sudden onset with MI/drugs. Often symptomatic. May be reversible. CHRONIC: Gradual development over months/years. Often asymptomatic initially. Usually permanent structural changes.',
          imageUrl: '/lessonimages/module5/lesson39/acute-vs-chronic.jpg'
        },
        hint: '🧠 Flip to understand timing!'
      },

      {
        id: 'conduction-consequences',
        title: 'Electrical Consequences',
        content: 'ALTERED ACTIVATION: Abnormal ventricular depolarization sequence. PROLONGED QRS: Slower impulse spread through myocardium. MECHANICAL DYSSYNCHRONY: Uncoordinated ventricular contraction.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson39/conduction-consequences.jpg',
        hint: '⚡ Electrical disruption consequences!'
      },

      {
        id: 'compensatory-mechanisms',
        title: 'Compensatory Mechanisms',
        content: 'COLLATERAL CONDUCTION: Alternative pathways may develop. MYOCYTE COUPLING: Cell-to-cell conduction continues. PURKINJE NETWORK: Terminal branches may bypass proximal block.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson39/compensation.jpg',
        hint: '🔄 Body\'s adaptation attempts!'
      },

      {
        id: 'risk-factors-tabs',
        title: 'Bundle Block Risk Factors',
        content: 'Understanding predisposing conditions',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        tabs: [
          {
            title: 'Cardiac Risk Factors',
            content: 'Coronary artery disease, hypertension, cardiomyopathy, valvular disease, congenital heart disease.',
            icon: '💔'
          },
          {
            title: 'Systemic Risk Factors',
            content: 'Diabetes, aging, infiltrative diseases, autoimmune conditions, metabolic disorders.',
            icon: '🌐'
          },
          {
            title: 'Iatrogenic Risk Factors',
            content: 'Cardiac surgery, catheter procedures, medications (digitalis, antiarrhythmics), radiation therapy.',
            icon: '⚕️'
          }
        ],
        hint: '📑 Multiple risk pathways!'
      },

      {
        id: 'unit2-quiz',
        title: 'Unit 2 Quiz: Mechanisms Check',
        content: 'Test your understanding of block mechanisms!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'New bundle branch block in acute MI indicates:',
        options: [
          'Minor myocardial damage',
          'Significant septal involvement',
          'Good prognosis',
          'No intervention needed'
        ],
        correctAnswer: 1,
        explanation: 'Correct! New bundle branch block in acute MI indicates significant septal involvement, usually representing extensive myocardial damage with worse prognosis.',
        imageUrl: '/lessonimages/module5/lesson39/unit2-quiz.jpg',
        hint: '🎯 Think about extent of damage!'
      },

      // ===============================================
      // 🎯 UNIT 3: ECG FUNDAMENTALS (7 slides)  
      // ===============================================
      {
        id: 'unit3-intro',
        title: '🎯 Unit 3: ECG Fundamentals',
        content: 'Master ECG basics of bundle branch blocks! Learn fundamental recognition principles.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/ecg/ecg_dataset_clean/CRBBB_complete_right_bundle_branch_block/clean_00172_complete right bundle branch block.png',
        hint: '📈 Master ECG fundamentals!'
      },

      {
        id: 'qrs-duration-criteria',
        title: 'QRS Duration Criteria',
        content: 'NORMAL QRS: <120 milliseconds (3 small boxes). INCOMPLETE BBB: 100-119 milliseconds. COMPLETE BBB: ≥120 milliseconds. MEASUREMENT: Widest part of QRS complex in any lead.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson39/qrs-duration.jpg',
        hint: '📏 Duration determines completeness!'
      },

      {
        id: 'rbbb-pattern-steps',
        title: 'RBBB Pattern Recognition',
        content: 'Step-by-step RBBB identification',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'QRS Width ≥120ms',
            description: 'Wide QRS due to delayed right ventricular activation'
          },
          {
            number: 2,
            title: 'RSR\' in V1',
            description: 'Classic "bunny ear" or "M" pattern in lead V1'
          },
          {
            number: 3,
            title: 'Wide S in I, V6',
            description: 'Slurred, wide S waves in lateral leads I and V6'
          },
          {
            number: 4,
            title: 'Normal QRS Axis',
            description: 'Usually normal axis unless concurrent fascicular block'
          }
        ],
        imageUrl: '/ecg/medical_accurate/rbbb_90bpm.png',
        hint: '👣 Systematic RBBB recognition!'
      },

      {
        id: 'lbbb-pattern-steps',
        title: 'LBBB Pattern Recognition', 
        content: 'Step-by-step LBBB identification',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'QRS Width ≥120ms',
            description: 'Wide QRS due to delayed left ventricular activation'
          },
          {
            number: 2,
            title: 'No Q Waves I, V6',
            description: 'Absence of septal Q waves in lateral leads'
          },
          {
            number: 3,
            title: 'Broad R in I, V6',
            description: 'Wide, monophasic R waves in lateral leads'
          },
          {
            number: 4,
            title: 'QS or rS in V1',
            description: 'Predominantly negative deflection in V1'
          }
        ],
        hint: '👣 Systematic LBBB recognition!'
      },

      {
        id: 'fascicular-blocks-tabs',
        title: 'Fascicular Block Patterns',
        content: 'Recognizing incomplete conduction blocks',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        tabs: [
          {
            title: 'LAFB (Left Anterior)',
            content: 'Left axis deviation (-45° to -90°). qR in I, aVL. rS in II, III, aVF. QRS usually <120ms.',
            icon: '↖️'
          },
          {
            title: 'LPFB (Left Posterior)',
            content: 'Right axis deviation (+90° to +120°). rS in I, aVL. qR in II, III, aVF. Rule out other causes.',
            icon: '↘️'
          },
          {
            title: 'Bifascicular Block',
            content: 'RBBB + LAFB or RBBB + LPFB. Two of three fascicles blocked. Increased CHB risk.',
            icon: '🔀'
          }
        ],
        hint: '📑 Incomplete block patterns!'
      },

      {
        id: 'morphology-clues-accordion',
        title: 'Key Morphology Clues',
        content: 'Important ECG morphology features',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'V1 Morphology',
            content: 'RBBB: RSR\' (M-shaped). LBBB: QS or rS (negative). VT: Often monophasic R. Key discriminating lead.',
            icon: 'V1'
          },
          {
            title: 'V6 Morphology',
            content: 'RBBB: qRS with wide S. LBBB: Broad monophasic R. Normal: qRS without wide S wave.',
            icon: 'V6'
          },
          {
            title: 'Lead I Morphology',
            content: 'RBBB: Often wide S wave. LBBB: Usually broad R wave. LAFB: qR pattern with left axis.',
            icon: 'I'
          }
        ],
        hint: '🎯 Click for morphology keys!'
      },

      {
        id: 'unit3-quiz',
        title: 'Unit 3 Quiz: ECG Fundamentals',
        content: 'Test your ECG recognition skills!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'The minimum QRS duration for complete bundle branch block is:',
        options: [
          '100 milliseconds',
          '110 milliseconds',
          '120 milliseconds',
          '140 milliseconds'
        ],
        correctAnswer: 2,
        explanation: 'Correct! A QRS duration of 120 milliseconds (3 small boxes) or greater is required for the diagnosis of complete bundle branch block.',
        imageUrl: '/lessonimages/module5/lesson39/unit3-quiz.jpg',
        hint: '🎯 Think about the duration threshold!'
      },

      // ===============================================
      // 🎯 UNIT 4: CLINICAL SIGNIFICANCE + AUDIO (7 slides)
      // ===============================================
      {
        id: 'unit4-intro',
        title: '🎯 Unit 4: Clinical Significance + Audio',
        content: 'Master clinical significance of bundle branch blocks! Learn when they matter clinically.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson39/clinical-significance.jpg',
        hint: '👩‍⚕️ Understand clinical impact!'
      },

      {
        id: 'clinical-significance-audio',
        title: '🎧 Clinical Significance Analysis',
        content: 'Listen to detailed explanation of bundle branch block clinical significance',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module5/lesson39/clinical-significance.mp3',
        hint: '🎧 Audio guide to clinical relevance!'
      },

      {
        id: 'prognostic-implications-tabs',
        title: 'Prognostic Implications',
        content: 'Understanding long-term significance',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        tabs: [
          {
            title: 'Isolated RBBB',
            content: 'Often benign in healthy individuals. May indicate pulmonary disease or right heart strain. Usually no treatment needed.',
            icon: '🟢'
          },
          {
            title: 'Isolated LBBB',
            content: 'More concerning than RBBB. Often indicates left heart disease. Associated with worse prognosis in heart failure.',
            icon: '🟡'
          },
          {
            title: 'New BBB',
            content: 'Always investigate underlying cause. In acute MI: poor prognostic sign. May herald complete heart block.',
            icon: '🔴'
          }
        ],
        hint: '📑 Prognosis varies by type!'
      },

      {
        id: 'heart-failure-implications-accordion',
        title: 'Heart Failure Implications',
        content: 'Bundle blocks in heart failure context',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        accordionItems: [
          {
            title: 'LBBB in Heart Failure',
            content: 'Causes ventricular dyssynchrony. Worsens heart failure symptoms. May benefit from CRT (cardiac resynchronization therapy).',
            icon: '💔'
          },
          {
            title: 'CRT Eligibility',
            content: 'LBBB + HF symptoms + EF ≤35% + QRS ≥130ms. Class I indication for CRT-D. Significant symptom improvement expected.',
            icon: '⚡'
          },
          {
            title: 'RBBB in Heart Failure',
            content: 'Less clear benefit from CRT. May indicate right heart involvement. Individual assessment needed.',
            icon: '🫁'
          }
        ],
        hint: '🎯 Click for HF considerations!'
      },

      {
        id: 'monitoring-requirements-flashcard',
        title: '🧠 Monitoring Requirements',
        content: 'When and how to monitor BBB patients',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '📊',
          question: 'What monitoring is needed for bundle branch blocks?',
          answer: 'NEW BBB: Investigate cause, monitor for progression to CHB. BIFASCICULAR: Regular cardiology follow-up. CHRONIC STABLE: Routine monitoring unless symptoms develop. ACUTE MI + BBB: Intensive monitoring.',
          imageUrl: '/lessonimages/module5/lesson39/monitoring.jpg'
        },
        hint: '🧠 Flip for monitoring guidelines!'
      },

      {
        id: 'exercise-capacity',
        title: 'Exercise Capacity Impact',
        content: 'NORMAL BBB RESPONSE: Usually no exercise limitation. CHRONIC ADAPTATION: Body compensates over time. HEART FAILURE + BBB: Exercise intolerance may worsen. CRT: May dramatically improve exercise capacity.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson39/exercise-capacity.jpg',
        hint: '🏃‍♂️ Usually well tolerated!'
      },

      {
        id: 'special-populations',
        title: 'Special Population Considerations',
        content: 'ATHLETES: May be benign, but requires evaluation. ELDERLY: More likely degenerative, monitor for progression. PREGNANCY: Usually well tolerated, monitor fetal effects. CHILDREN: Often congenital, different prognosis.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson39/special-populations.jpg',
        hint: '👥 Context matters!'
      },

      {
        id: 'unit4-quiz',
        title: 'Unit 4 Quiz: Clinical Significance',
        content: 'Test your clinical knowledge!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'LBBB in a patient with heart failure may indicate need for:',
        options: [
          'Immediate cardioversion',
          'Cardiac resynchronization therapy',
          'Bundle branch ablation',
          'No specific treatment'
        ],
        correctAnswer: 1,
        explanation: 'Correct! LBBB in heart failure patients with appropriate criteria (EF ≤35%, QRS ≥130ms, symptoms) is a Class I indication for cardiac resynchronization therapy.',
        imageUrl: '/lessonimages/module5/lesson39/unit4-quiz.jpg',
        hint: '🎯 Think about dyssynchrony!'
      },

      // ===============================================
      // 🎯 UNIT 5: DIAGNOSTIC APPROACH (6 slides)
      // ===============================================
      {
        id: 'unit5-intro',
        title: '🎯 Unit 5: Diagnostic Approach',
        content: 'Master systematic diagnostic approach to bundle branch blocks! Learn evidence-based evaluation.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson39/diagnostic-approach.jpg',
        hint: '🔍 Systematic evaluation!'
      },

      {
        id: 'diagnostic-algorithm-accordion',
        title: 'Diagnostic Algorithm',
        content: 'Step-by-step diagnostic approach',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Step 1: Confirm BBB',
            content: 'Verify QRS ≥120ms. Identify specific pattern (RBBB vs LBBB vs fascicular). Rule out other wide QRS causes.',
            icon: '1️⃣'
          },
          {
            title: 'Step 2: Assess Acuity',
            content: 'New vs old? Compare with prior ECGs. If new: urgent evaluation needed. If old: routine evaluation.',
            icon: '2️⃣'
          },
          {
            title: 'Step 3: Clinical Context',
            content: 'Symptoms? Underlying heart disease? Medications? Family history? Age and comorbidities?',
            icon: '3️⃣'
          },
          {
            title: 'Step 4: Further Testing',
            content: 'Echo for structural disease. Stress test if indicated. EP study for high-risk features.',
            icon: '4️⃣'
          }
        ],
        hint: '🎯 Click for systematic steps!'
      },

      {
        id: 'echocardiography-role',
        title: 'Role of Echocardiography',
        content: 'STRUCTURAL ASSESSMENT: LV function, wall motion, chamber sizes. DYSSYNCHRONY: Mechanical timing assessment for CRT. UNDERLYING DISEASE: Ischemic vs non-ischemic cardiomyopathy.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson39/echocardiography.jpg',
        hint: '🫀 Structural correlation!'
      },

      {
        id: 'stress-testing-tabs',
        title: 'Stress Testing Indications',
        content: 'When to perform stress testing',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        tabs: [
          {
            title: 'Exercise Testing',
            content: 'Assess functional capacity. Evaluate chronotropic response. Detect exercise-induced arrhythmias.',
            icon: '🏃‍♂️'
          },
          {
            title: 'Pharmacologic Testing',
            content: 'When exercise not possible. Dobutamine or adenosine stress. Assess for ischemia.',
            icon: '💊'
          },
          {
            title: 'Contraindications',
            content: 'Unstable angina. Severe heart failure. High-grade AV block. Acute MI within 48 hours.',
            icon: '⛔'
          }
        ],
        hint: '📑 Functional assessment tools!'
      },

      {
        id: 'risk-stratification-flashcard',
        title: '🧠 Risk Stratification',
        content: 'Identifying high-risk bundle block patients',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '⚠️',
          question: 'Which BBB patients are high-risk for progression to CHB?',
          answer: 'Bifascicular block (RBBB + fascicular block), alternating bundle blocks, new BBB in acute MI, progressive PR prolongation with BBB, syncope with BBB.',
          imageUrl: '/lessonimages/module5/lesson39/risk-stratification.jpg'
        },
        hint: '🧠 Flip for high-risk features!'
      },

      {
        id: 'unit5-quiz',
        title: 'Unit 5 Quiz: Diagnostic Approach',
        content: 'Test your diagnostic skills!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'The most important first step when encountering a bundle branch block is:',
        options: [
          'Order immediate echocardiogram',
          'Determine if the block is new or old',
          'Start cardiac medications',
          'Schedule electrophysiology study'
        ],
        correctAnswer: 1,
        explanation: 'Correct! Determining if the bundle branch block is new or old by comparing with prior ECGs is the most important first step, as new blocks require urgent evaluation.',
        imageUrl: '/lessonimages/module5/lesson39/unit5-quiz.jpg',
        hint: '🎯 Think about acuity assessment!'
      },

      // ===============================================
      // 🎯 UNIT 6: ADVANCED CONCEPTS + CELEBRATION AUDIO (7 slides)
      // ===============================================
      {
        id: 'unit6-intro',
        title: '🎯 Unit 6: Advanced Concepts',
        content: 'Congratulations! Complete your bundle branch block overview with advanced concepts and expert insights!',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson39/mastery-celebration.jpg',
        hint: '🏆 You have reached mastery level!'
      },

      {
        id: 'mastery-celebration-audio',
        title: '🎧 Mastery Celebration',
        content: 'Celebrate your bundle branch block overview mastery!',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module5/lesson39/mastery-celebration.mp3',
        hint: '🎧 Celebration time! You mastered BBB overview!'
      },

      {
        id: 'advanced-patterns-tabs',
        title: 'Advanced BBB Patterns',
        content: 'Complex bundle branch block scenarios',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        tabs: [
          {
            title: 'Rate-Related BBB',
            content: 'Block appears only at fast heart rates. Functional block due to refractory period. Usually RBBB pattern.',
            icon: '💨'
          },
          {
            title: 'Alternating BBB',
            content: 'LBBB and RBBB alternate. Indicates severe conduction disease. High risk for complete heart block.',
            icon: '🔄'
          },
          {
            title: 'Incomplete BBB',
            content: 'QRS 100-119ms with typical morphology. Partial conduction delay. May progress to complete block.',
            icon: '🔸'
          }
        ],
        hint: '📑 Advanced pattern recognition!'
      },

      {
        id: 'differential-diagnosis-accordion',
        title: 'BBB Differential Diagnosis',
        content: 'Distinguishing BBB from mimics',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Ventricular Pacing',
            content: 'Pacing spike before QRS. Different morphology than typical BBB. Rate may be fixed or demand.',
            icon: '⚡'
          },
          {
            title: 'Hyperkalemia',
            content: 'Progressive QRS widening. Other signs: peaked T waves, PR prolongation. Check K+ level.',
            icon: '🧪'
          },
          {
            title: 'Drug Effects',
            content: 'Sodium channel blockers (Class IC). Use-dependent widening. Consider drug levels.',
            icon: '💊'
          },
          {
            title: 'Ventricular Preexcitation',
            content: 'WPW syndrome. Delta waves. Short PR interval. Different morphology.',
            icon: '🔀'
          }
        ],
        hint: '🎯 Click for differential diagnosis!'
      },

      {
        id: 'future-directions-flashcard',
        title: '🧠 Future Directions',
        content: 'Emerging concepts in bundle branch blocks',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🔮',
          question: 'What are emerging therapies for bundle branch blocks?',
          answer: 'His bundle pacing (physiologic), cardiac contractility modulation, gene therapy for conduction tissue, improved CRT algorithms, AI-guided therapy selection.',
          imageUrl: '/lessonimages/module5/lesson39/future-directions.jpg'
        },
        hint: '🧠 Flip for future therapies!'
      },

      {
        id: 'clinical-pearls-collection',
        title: 'Clinical Pearls Collection',
        content: 'PEARL 1: New BBB = investigate cause urgently. PEARL 2: LBBB worse prognosis than RBBB. PEARL 3: Bifascicular block = high CHB risk. PEARL 4: CRT transforms LBBB + HF outcomes. PEARL 5: QRS width determines completeness.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson39/clinical-pearls.jpg',
        hint: '💎 Essential clinical wisdom!'
      },

      {
        id: 'integration-summary',
        title: 'BBB Knowledge Integration',
        content: 'ANATOMY: Trifascicular system understanding. PATHOPHYSIOLOGY: Multiple block mechanisms. ECG: Pattern recognition mastery. CLINICAL: Risk stratification skills. MANAGEMENT: Evidence-based approach.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson39/knowledge-integration.jpg',
        hint: '🧠 Comprehensive understanding!'
      },

      {
        id: 'unit6-final-quiz',
        title: 'Unit 6 Quiz: Mastery Validation',
        content: 'Validate your bundle branch block overview mastery!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'The highest risk bundle branch block pattern is:',
        options: [
          'Isolated RBBB in young athlete',
          'Chronic LBBB in elderly patient',
          'Alternating LBBB and RBBB',
          'Rate-related RBBB during exercise'
        ],
        correctAnswer: 2,
        explanation: 'Perfect! Alternating LBBB and RBBB indicates severe conduction system disease with very high risk of progression to complete heart block.',
        imageUrl: '/lessonimages/module5/lesson39/mastery-quiz.jpg',
        hint: '🎯 Think about highest risk scenario!'
      }
    ],
    summary: "🏆 Congratulations! You have achieved bundle branch block overview mastery! You understand anatomy, mechanisms, ECG recognition, clinical significance, and diagnostic approaches.",
    keyPoints: [
      "Bundle branch blocks result from conduction interruption in the trifascicular system",
      "QRS ≥120ms defines complete block with specific morphology patterns for RBBB vs LBBB",
      "New bundle branch blocks require urgent evaluation for underlying causes",
      "Strategic audio reinforcement in Units 2, 4, and 6 enhanced learning",
      "LBBB in heart failure may benefit from cardiac resynchronization therapy",
      "Bifascicular blocks carry increased risk of progression to complete heart block"
    ],
    resources: [
      {
        title: "Bundle Branch Block Overview Reference",
        url: "https://ecgkid.com/bundle-branch-blocks-overview",
        type: "video"
      }
    ]
  },
  tasks: [
    {
      id: 'final-bbb-overview-mastery-assessment',
      type: 'final-assessment',
      xp: 50,
      audio: {
        mainNarration: {
          audioUrl: '/lessonaudio/module5/lesson39/expert-mastery-celebration.mp3',
          duration: 12,
          transcript: 'Outstanding achievement! You have mastered bundle branch block fundamentals completely. You understand anatomy, pathophysiology, ECG recognition, clinical significance, and diagnostic approaches. This foundation will serve you excellently!'
        }
      },
      images: {
        mainImage: '/lessonimages/module5/lesson39/mastery-achievement.jpg',
        slideImages: []
      },
      content: {
        prerequisiteMessage: '🏆 Final Assessment: Complete all 6 units to unlock this comprehensive BBB overview mastery evaluation.',
        questions: [
          {
            id: 'trifascicular-system-mastery',
            type: 'multiple-choice',
            question: 'The trifascicular conduction system consists of:',
            options: [
              'SA node, AV node, and His bundle',
              'Right bundle, left anterior fascicle, left posterior fascicle',
              'Atrial, junctional, and ventricular pathways',
              'Fast, slow, and accessory pathways'
            ],
            correctAnswer: 1,
            explanation: 'The trifascicular system consists of the right bundle branch, left anterior fascicle, and left posterior fascicle - three pathways that can be individually blocked.',
            imageUrl: '/lessonimages/module5/lesson39/assessment/trifascicular.jpg'
          },
          {
            id: 'qrs-duration-criteria-mastery',
            type: 'multiple-choice', 
            question: 'Complete bundle branch block is diagnosed when QRS duration is:',
            options: [
              '≥100 milliseconds',
              '≥110 milliseconds',
              '≥120 milliseconds',
              '≥140 milliseconds'
            ],
            correctAnswer: 2,
            explanation: 'Complete bundle branch block requires QRS duration ≥120 milliseconds (3 small boxes). This represents significant conduction delay requiring alternate pathways.',
            imageUrl: '/lessonimages/module5/lesson39/assessment/qrs-duration.jpg'
          },
          {
            id: 'clinical-significance-mastery',
            type: 'multiple-choice',
            question: 'LBBB in a heart failure patient with EF 25% suggests consideration of:',
            options: [
              'Immediate cardioversion',
              'Cardiac resynchronization therapy',
              'Antiarrhythmic medications',
              'Observation only'
            ],
            correctAnswer: 1,
            explanation: 'LBBB in heart failure with reduced EF (≤35%) and appropriate QRS width (≥130ms) is a Class I indication for cardiac resynchronization therapy to improve dyssynchrony.',
            imageUrl: '/lessonimages/module5/lesson39/assessment/crt-indication.jpg'
          },
          {
            id: 'high-risk-pattern-mastery',
            type: 'multiple-choice',
            question: 'The bundle branch block pattern with highest risk for complete heart block is:',
            options: [
              'Isolated RBBB',
              'Isolated LBBB', 
              'Bifascicular block (RBBB + fascicular block)',
              'Incomplete RBBB'
            ],
            correctAnswer: 2,
            explanation: 'Bifascicular block (RBBB + fascicular block) represents block in two of three fascicles, leaving only one pathway intact and creating high risk for complete heart block.',
            imageUrl: '/lessonimages/module5/lesson39/assessment/bifascicular-risk.jpg'
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
