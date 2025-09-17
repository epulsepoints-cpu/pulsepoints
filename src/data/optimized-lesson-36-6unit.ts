import { Lesson } from '../types/learning';

export const optimizedLesson36: Lesson = {
  id: 'lesson-4-8-optimized',
  moduleId: 'module-4',
  title: "Bundle Branch Blocks Mastery",
  description: "Master bundle branch blocks through 6 focused learning units with enhanced interactive elements: Foundation anatomy, mechanisms with audio, ECG recognition, differential diagnosis with audio, clinical implications, and advanced interpretation with celebration audio",
  order: 8,
  estimatedTime: 45,
  content: {
    type: 'mixed',
    introduction: "🎯 Welcome to Bundle Branch Block Mastery! Master left and right bundle branch blocks through 6 progressive units with enhanced interactive elements, strategic audio, and comprehensive assessments.",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your Bundle Branch Block Learning Journey",
        content: "UNIT 1: Conduction Anatomy → UNIT 2: Block Mechanisms + Audio → UNIT 3: ECG Recognition → UNIT 4: Differential Diagnosis + Audio → UNIT 5: Clinical Implications → UNIT 6: Advanced Interpretation + Celebration Audio",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // ===============================================
      // 🎯 UNIT 1: FOUNDATION ANATOMY (7 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: Foundation Anatomy',
        content: 'Master the anatomy of the bundle branch system! Understand the electrical pathways that can become blocked.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/ecg/ecg_dataset_clean/CRBBB_complete_right_bundle_branch_block/clean_00172_complete right bundle branch block.png',
        hint: '⚡ Electrical highway system!'
      },

      // 🎥 ECGkid Technical Guide: Misplaced Leads Recognition - Essential Foundation
      {
        id: 'ecgkid-misplaced-leads',
        title: '🎥 Technical Guide: How to Identify ECG Patterns Due to Misplaced Leads',
        content: 'Critical ECGkid technical foundation! Before interpreting any bundle branch block, ensure proper lead placement. Learn to identify misplaced leads that can mimic pathological patterns and lead to misdiagnosis.',
        type: 'youtube',
        layout: 'centered',
        backgroundColor: '#0f766e',
        textColor: '#ffffff',
        animation: 'fade',
        youtubeId: 'gyVs-D7Uyk8',
        videoDuration: 160, // 2 minutes, 40 seconds
        minimumWatchTime: 120, // 2 minutes minimum
        requireFullWatch: false, // Technical skill building
        imageUrl: '/ecg/medical_accurate/normal_sinus_75bpm_1.png',
        imageAlt: 'ECGkid misplaced leads identification guide',
        hint: '📡 Essential technical skill - identify recording errors before interpretation!',
        highlights: [
          'Misplaced lead pattern recognition',
          'Prevent diagnostic misinterpretation',
          'Technical recording accuracy',
          'Foundation for proper bundle block analysis'
        ]
      },
      
      {
        id: 'conduction-system-flashcard',
        title: '🧠 Conduction System Anatomy',
        content: 'Master the bundle branch anatomy',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🗺️',
          question: 'What are the main components of the bundle branch system?',
          answer: 'Bundle of His → Right Bundle Branch + Left Bundle Branch. Left branch splits into: Anterior Fascicle + Posterior Fascicle. This creates the "trifascicular" system with three main pathways.',
          imageUrl: '/ecg/ecg_dataset_clean/NORM_normal_ECG/clean_00002_normal ECG.png'
        },
        hint: '🧠 Flip to learn the anatomy!'
      },

      {
        id: 'right-bundle-pathway',
        title: 'Right Bundle Branch Pathway',
        content: 'ORIGIN: Bundle of His. COURSE: Travels down right side of interventricular septum. TARGET: Right ventricular myocardium. CHARACTERISTICS: Single, long, thin fascicle. VULNERABILITY: More prone to damage due to anatomy.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/rbbb_70bpm_1.png',
        hint: '➡️ Right side electrical pathway!'
      },

      {
        id: 'left-bundle-steps',
        title: 'Left Bundle Branch System',
        content: 'Understanding the complex left bundle system',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Main Left Bundle',
            description: 'Originates from Bundle of His, travels left side of septum'
          },
          {
            number: 2,
            title: 'Anterior Fascicle',
            description: 'Activates anterior and superior left ventricle'
          },
          {
            number: 3,
            title: 'Posterior Fascicle',
            description: 'Activates posterior and inferior left ventricle'
          },
          {
            number: 4,
            title: 'Purkinje Network',
            description: 'Fine network spreads throughout left ventricular myocardium'
          }
        ],
        hint: '👣 Follow the left bundle system!'
      },

      {
        id: 'fascicular-system-tabs',
        title: 'Fascicular System Explorer',
        content: 'Explore the trifascicular conduction system',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        tabs: [
          {
            title: 'Right Bundle Branch',
            content: 'Single fascicle. Conducts to entire right ventricle. When blocked: RBBB pattern. Relatively more vulnerable to damage.',
            icon: '1️⃣'
          },
          {
            title: 'Left Anterior Fascicle',
            content: 'Thin, long fascicle. Most vulnerable to block. When blocked: Left anterior hemiblock. Causes left axis deviation.',
            icon: '2️⃣'
          },
          {
            title: 'Left Posterior Fascicle',
            content: 'Short, thick fascicle. Dual blood supply. Less likely to block. When blocked: Right axis deviation pattern.',
            icon: '3️⃣'
          }
        ],
        hint: '📑 Explore the three fascicles!'
      },

      {
        id: 'blood-supply-anatomy',
        title: 'Bundle Branch Blood Supply',
        content: 'RIGHT BUNDLE: Single blood supply from septal perforators. LEFT ANTERIOR: LAD septal branches. LEFT POSTERIOR: Dual supply (LAD + RCA). CLINICAL SIGNIFICANCE: Affects vulnerability to ischemia.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson36/blood-supply.jpg',
        hint: '🩸 Blood supply determines vulnerability!'
      },

      {
        id: 'unit1-quiz',
        title: 'Unit 1 Quiz: Anatomy Check',
        content: 'Test your understanding of bundle branch anatomy!',
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
        explanation: 'Correct! The trifascicular system consists of the right bundle branch, left anterior fascicle, and left posterior fascicle - three separate pathways that can be blocked.',
        imageUrl: '/lessonimages/module4/lesson36/unit1-quiz.jpg',
        hint: '🎯 Think about the three main pathways!'
      },

      // ===============================================
      // 🎯 UNIT 2: BLOCK MECHANISMS + AUDIO (8 slides)
      // ===============================================
      {
        id: 'unit2-intro',
        title: '🎯 Unit 2: Block Mechanisms + Audio',
        content: 'Discover how bundle branch blocks develop! Learn the pathophysiology and mechanisms of conduction block.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson36/mechanisms-overview.jpg',
        hint: '⚙️ Understand block formation!'
      },

      {
        id: 'mechanisms-audio',
        title: '🎧 Bundle Block Mechanisms',
        content: 'Listen to detailed explanation of bundle branch block mechanisms',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module4/lesson36/bundle-block-mechanisms.mp3',
        hint: '🎧 Audio guide to block mechanisms!'
      },

      {
        id: 'ischemic-causes-accordion',
        title: 'Ischemic Causes Explorer',
        content: 'Explore ischemic causes of bundle branch blocks',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Anterior MI',
            content: 'LAD occlusion affects septal branches. Can cause RBBB or LBBB. May progress to complete heart block. Indicates large infarct.',
            icon: '💔'
          },
          {
            title: 'Inferior MI',
            content: 'RCA supplies AV node region. Can cause RBBB with hemiblocks. Risk of trifascicular block. Monitor for progression.',
            icon: '⬇️'
          },
          {
            title: 'Chronic Ischemia',
            content: 'Progressive fibrosis of conduction system. Usually permanent block patterns. May be first sign of coronary disease.',
            icon: '📈'
          }
        ],
        hint: '🎯 Click to explore ischemic causes!'
      },

      {
        id: 'degenerative-causes-flashcard',
        title: '🧠 Degenerative Causes',
        content: 'Understanding degenerative causes of bundle blocks',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '⏰',
          question: 'What are the main degenerative causes of bundle branch block?',
          answer: 'Lev disease (calcific sclerosis), Lenegre disease (primary sclerosis), age-related fibrosis, hypertensive heart disease. These cause progressive conduction system degeneration.',
          imageUrl: '/lessonimages/module4/lesson36/degenerative-causes.jpg'
        },
        hint: '🧠 Flip to learn degenerative causes!'
      },

      {
        id: 'acute-vs-chronic',
        title: 'Acute vs Chronic Block Development',
        content: 'ACUTE: Sudden onset with MI, drugs, electrolytes. May be reversible. Often symptomatic. CHRONIC: Gradual development over months/years. Usually permanent. Often asymptomatic initially.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson36/acute-vs-chronic.jpg',
        hint: '⏱️ Timing affects reversibility!'
      },

      {
        id: 'conduction-consequences',
        title: 'Conduction Consequences',
        content: 'ALTERED SEQUENCE: Abnormal ventricular activation. PROLONGED QRS: Slower spread through myocardium. DYSSYNCHRONY: Ventricles contract out of sequence. HEMODYNAMICS: May affect cardiac output.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson36/conduction-consequences.jpg',
        hint: '🔄 Altered electrical sequence!'
      },

      {
        id: 'unit2-quiz',
        title: 'Unit 2 Quiz: Mechanisms Check',
        content: 'Test your understanding of bundle block mechanisms!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'New bundle branch block in the setting of acute MI indicates:',
        options: [
          'Minor myocardial damage',
          'Significant septal involvement',
          'Favorable prognosis',
          'No intervention needed'
        ],
        correctAnswer: 1,
        explanation: 'Correct! New bundle branch block in acute MI indicates significant septal involvement and usually represents a large infarct with worse prognosis.',
        imageUrl: '/lessonimages/module4/lesson36/unit2-quiz.jpg',
        hint: '🎯 Think about infarct size!'
      },

      // ===============================================
      // 🎯 UNIT 3: ECG RECOGNITION (7 slides)  
      // ===============================================
      {
        id: 'unit3-intro',
        title: '🎯 Unit 3: ECG Recognition',
        content: 'Master ECG recognition of bundle branch blocks! Learn to identify RBBB and LBBB patterns.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/lbbb_75bpm_2.png',
        hint: '📈 Read bundle block patterns!'
      },

      {
        id: 'rbbb-criteria-steps',
        title: 'RBBB Recognition Criteria',
        content: 'Step-by-step RBBB identification',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'QRS Duration ≥120ms',
            description: 'Wide QRS complex due to delayed conduction'
          },
          {
            number: 2,
            title: 'RSR\' Pattern in V1',
            description: 'Classic "bunny ear" or "M" pattern in V1'
          },
          {
            number: 3,
            title: 'Wide S Wave in I, V6',
            description: 'Slurred, wide S waves in lateral leads'
          },
          {
            number: 4,
            title: 'Normal Axis',
            description: 'Usually normal QRS axis (unless hemiblock present)'
          }
        ],
        hint: '👣 Follow RBBB criteria systematically!'
      },

      {
        id: 'lbbb-criteria-steps',
        title: 'LBBB Recognition Criteria',
        content: 'Step-by-step LBBB identification',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'QRS Duration ≥120ms',
            description: 'Wide QRS complex due to delayed left ventricular activation'
          },
          {
            number: 2,
            title: 'No Q Waves in I, V6',
            description: 'Absence of septal Q waves in lateral leads'
          },
          {
            number: 3,
            title: 'Broad R Waves I, V6',
            description: 'Wide, monophasic R waves in lateral leads'
          },
          {
            number: 4,
            title: 'QS or rS in V1',
            description: 'Predominantly negative QRS in V1'
          }
        ],
        hint: '👣 Follow LBBB criteria systematically!'
      },

      {
        id: 'morphology-comparison-tabs',
        title: 'Morphology Comparison Analysis',
        content: 'Compare RBBB vs LBBB morphology patterns',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        tabs: [
          {
            title: 'RBBB Pattern',
            content: 'V1: RSR\' (M pattern). V6: qRS with wide S. Lateral leads: Slurred S waves. Axis: Usually normal.',
            icon: '🐰'
          },
          {
            title: 'LBBB Pattern',
            content: 'V1: QS or rS. V6: Broad R wave. Lateral leads: No septal Q waves. Axis: Often left axis deviation.',
            icon: '🏔️'
          },
          {
            title: 'Incomplete Blocks',
            content: 'QRS 100-119ms. Morphology similar but less pronounced. May represent early conduction delay.',
            icon: '🔸'
          }
        ],
        hint: '📑 Compare the patterns!'
      },

      {
        id: 'fascicular-blocks-accordion',
        title: 'Fascicular Blocks Recognition',
        content: 'Recognize left anterior and posterior fascicular blocks',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Left Anterior Fascicular Block',
            content: 'Left axis deviation (-45° to -90°). qR pattern in I, aVL. rS pattern in II, III, aVF. QRS usually <120ms.',
            icon: '↖️'
          },
          {
            title: 'Left Posterior Fascicular Block',
            content: 'Right axis deviation (+90° to +120°). rS pattern in I, aVL. qR pattern in II, III, aVF. Rule out other causes.',
            icon: '↘️'
          },
          {
            title: 'Bifascicular Block',
            content: 'RBBB + LAFB or RBBB + LPFB. Two of three fascicles blocked. Higher risk of complete heart block.',
            icon: '🔀'
          }
        ],
        hint: '🎯 Click to explore fascicular patterns!'
      },

      {
        id: 'common-mimics-flashcard',
        title: '🧠 Bundle Block Mimics',
        content: 'Learn to distinguish true bundle blocks from mimics',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🎭',
          question: 'What can mimic bundle branch block patterns?',
          answer: 'Ventricular pacing, hyperkalemia, drug effects (class IC antiarrhythmics), ventricular preexcitation (WPW), ventricular tachycardia. Look for specific morphology criteria to distinguish.',
          imageUrl: '/ecg/ecg_dataset_clean/CLBBB_complete_left_bundle_branch_block/clean_00180_complete left bundle branch block.png'
        },
        hint: '🧠 Flip to learn about mimics!'
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
        question: 'The classic ECG finding in RBBB is:',
        options: [
          'Wide Q waves in lateral leads',
          'RSR\' pattern in lead V1',
          'Left axis deviation',
          'ST elevation in precordial leads'
        ],
        correctAnswer: 1,
        explanation: 'Correct! The RSR\' pattern (bunny ears or M pattern) in lead V1 is the classic finding in RBBB, along with wide S waves in lateral leads.',
        imageUrl: '/lessonimages/module4/lesson36/unit3-quiz.jpg',
        hint: '🎯 Think about the V1 pattern!'
      },

      // ===============================================
      // 🎯 UNIT 4: DIFFERENTIAL DIAGNOSIS + AUDIO (7 slides)
      // ===============================================
      {
        id: 'unit4-intro',
        title: '🎯 Unit 4: Differential Diagnosis + Audio',
        content: 'Master differential diagnosis of wide QRS complexes! Learn to distinguish bundle blocks from other causes.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson36/differential-overview.jpg',
        hint: '🔍 Distinguish wide QRS causes!'
      },

      {
        id: 'differential-audio',
        title: '🎧 Wide QRS Differential',
        content: 'Listen to detailed explanation of wide QRS differential diagnosis',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module4/lesson36/wide-qrs-differential.mp3',
        hint: '🎧 Audio guide to differential diagnosis!'
      },

      {
        id: 'wide-qrs-causes-tabs',
        title: 'Wide QRS Causes Analysis',
        content: 'Systematically approach wide QRS differential',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        tabs: [
          {
            title: 'Bundle Branch Blocks',
            content: 'RBBB: RSR\' in V1, wide S in lateral. LBBB: Broad R in lateral, QS in V1. Specific morphology patterns.',
            icon: '🌿'
          },
          {
            title: 'Ventricular Rhythms',
            content: 'VT: AV dissociation, capture beats, fusion beats. Ventricular paced: Spike before QRS, different morphology.',
            icon: '⚡'
          },
          {
            title: 'Metabolic/Drug Effects',
            content: 'Hyperkalemia: Progressive QRS widening. Sodium channel blockers: Use-dependent widening. Reversible causes.',
            icon: '💊'
          },
          {
            title: 'Preexcitation',
            content: 'WPW syndrome: Delta waves, short PR. Antidromic AVRT: Very wide QRS. Accessory pathway conduction.',
            icon: '🔀'
          }
        ],
        hint: '📑 Systematic differential approach!'
      },

      {
        id: 'morphology-clues-accordion',
        title: 'Morphology Clues Explorer',
        content: 'Use morphology clues to distinguish causes',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        accordionItems: [
          {
            title: 'V1 Morphology',
            content: 'RBBB: RSR\' pattern. LBBB: QS or rS. VT: Often monophasic R or QS. Paced: Usually rS or QS.',
            icon: '1️⃣'
          },
          {
            title: 'V6 Morphology',
            content: 'RBBB: qRS with wide S. LBBB: Broad monophasic R. VT: Often QS or rS. Variable with other causes.',
            icon: '6️⃣'
          },
          {
            title: 'Concordance Patterns',
            content: 'Positive concordance V1-V6: Suggests VT. Negative concordance V1-V6: Suggests VT. Mixed: Consider BBB.',
            icon: '🔄'
          }
        ],
        hint: '🎯 Click for morphology clues!'
      },

      {
        id: 'vt-vs-bbb-flashcard',
        title: '🧠 VT vs Bundle Block',
        content: 'Critical distinction between VT and bundle block',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '⚖️',
          question: 'How do you distinguish VT from bundle branch block?',
          answer: 'VT: AV dissociation, capture/fusion beats, very wide QRS (>140ms), atypical morphology. BBB: Sinus rhythm, typical morphology patterns, QRS usually 120-140ms. Hemodynamics help too.',
          imageUrl: '/ecg/medical_accurate/ventricular_tachycardia_180bpm_3.png'
        },
        hint: '🧠 Flip for critical distinction!'
      },

      {
        id: 'age-related-considerations',
        title: 'Age-Related Considerations',
        content: 'ELDERLY: More likely degenerative BBB, less likely VT. YOUNG: Consider metabolic, drug, or genetic causes. MIDDLE-AGE: Consider ischemic causes, early degenerative disease.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson36/age-considerations.jpg',
        hint: '👥 Age affects differential!'
      },

      {
        id: 'unit4-quiz',
        title: 'Unit 4 Quiz: Differential Check',
        content: 'Test your differential diagnosis skills!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'A wide QRS rhythm with AV dissociation and capture beats most likely represents:',
        options: [
          'Right bundle branch block',
          'Left bundle branch block',
          'Ventricular tachycardia',
          'Hyperkalemia'
        ],
        correctAnswer: 2,
        explanation: 'Correct! AV dissociation with capture beats in a wide QRS rhythm strongly suggests ventricular tachycardia rather than bundle branch block.',
        imageUrl: '/lessonimages/module4/lesson36/unit4-quiz.jpg',
        hint: '🎯 Think about rhythm characteristics!'
      },

      // ===============================================
      // 🎯 UNIT 5: CLINICAL IMPLICATIONS (6 slides)
      // ===============================================
      {
        id: 'unit5-intro',
        title: '🎯 Unit 5: Clinical Implications',
        content: 'Master the clinical significance of bundle branch blocks! Learn when they matter and what to do.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson36/clinical-overview.jpg',
        hint: '👩‍⚕️ Clinical significance matters!'
      },

      {
        id: 'prognostic-significance-accordion',
        title: 'Prognostic Significance Explorer',
        content: 'Understand the prognostic implications',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Isolated RBBB',
            content: 'Often benign in healthy individuals. May indicate right heart strain or pulmonary disease. Usually no specific treatment needed.',
            icon: '🟢'
          },
          {
            title: 'Isolated LBBB',
            content: 'More concerning than RBBB. Often indicates left heart disease. May affect prognosis in heart failure. Consider further evaluation.',
            icon: '🟡'
          },
          {
            title: 'New Bundle Block',
            content: 'Always investigate underlying cause. In acute MI: Indicates large infarct. May herald complete heart block.',
            icon: '🔴'
          },
          {
            title: 'Bifascicular Block',
            content: 'Higher risk of complete heart block. Monitor for progression. May need prophylactic pacing in some cases.',
            icon: '⚫'
          }
        ],
        hint: '🎯 Click to assess significance!'
      },

      {
        id: 'heart-failure-implications-tabs',
        title: 'Heart Failure Implications',
        content: 'Understand bundle blocks in heart failure context',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: 'LBBB in HF',
            content: 'Causes dyssynchrony. Worsens heart failure symptoms. May benefit from CRT pacing. QRS >150ms most benefit.',
            icon: '💔'
          },
          {
            title: 'RBBB in HF',
            content: 'Less impact on dyssynchrony. Usually not indication for CRT alone. May indicate right heart involvement.',
            icon: '🫁'
          },
          {
            title: 'CRT Considerations',
            content: 'LBBB + HF + QRS >120ms: Class I indication. Non-LBBB patterns: Less clear benefit. Individual assessment needed.',
            icon: '⚡'
          }
        ],
        hint: '📑 Heart failure context matters!'
      },

      {
        id: 'monitoring-requirements',
        title: 'Monitoring Requirements',
        content: 'NEW BBB: Investigate cause, monitor for progression. BIFASCICULAR: Regular follow-up, watch for symptoms. TRIFASCICULAR: High risk, may need prophylactic pacing. ACUTE MI + BBB: Close monitoring in CCU.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson36/monitoring-requirements.jpg',
        hint: '📊 Different blocks need different monitoring!'
      },

      {
        id: 'pacing-indications-flashcard',
        title: '🧠 Pacing Indications',
        content: 'When do bundle blocks require pacing?',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '⚡',
          question: 'When is pacing indicated in bundle branch block?',
          answer: 'DEFINITE: Alternating LBBB/RBBB, bifascicular block + syncope, trifascicular block with symptoms. POSSIBLE: Bifascicular block + long HV interval. NOT INDICATED: Asymptomatic isolated BBB.',
          imageUrl: '/ecg/ecg_dataset_clean/LAFB_left_anterior_fascicular_block/clean_00041_left anterior fascicular block.png'
        },
        hint: '🧠 Flip for pacing criteria!'
      },

      {
        id: 'unit5-quiz',
        title: 'Unit 5 Quiz: Clinical Check',
        content: 'Test your clinical knowledge!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'New LBBB in a patient with acute chest pain suggests:',
        options: [
          'Minor myocardial injury',
          'Large anterior wall MI',
          'Benign conduction change',
          'No immediate concern'
        ],
        correctAnswer: 1,
        explanation: 'Correct! New LBBB in acute chest pain is considered a STEMI equivalent and suggests large anterior wall MI requiring immediate reperfusion therapy.',
        imageUrl: '/lessonimages/module4/lesson36/unit5-quiz.jpg',
        hint: '🎯 Think about acute MI implications!'
      },

      // ===============================================
      // 🎯 UNIT 6: ADVANCED INTERPRETATION + CELEBRATION AUDIO (7 slides)
      // ===============================================
      {
        id: 'unit6-intro',
        title: '🎯 Unit 6: Advanced Interpretation',
        content: 'Congratulations! Complete your bundle branch block mastery with advanced interpretation skills!',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson36/mastery-celebration.jpg',
        hint: '🏆 You have reached mastery level!'
      },

      {
        id: 'mastery-celebration-audio',
        title: '🎧 Mastery Celebration',
        content: 'Celebrate your bundle branch block mastery achievement!',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module4/lesson36/mastery-celebration.mp3',
        hint: '🎧 Celebration time! You have mastered bundle branch blocks!'
      },

      {
        id: 'advanced-patterns-tabs',
        title: 'Advanced Pattern Recognition',
        content: 'Master complex bundle block patterns',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        tabs: [
          {
            title: 'Rate-Related BBB',
            content: 'Appears only at fast heart rates. Functional block due to refractory period. Usually RBBB pattern. Resolves with slowing.',
            icon: '💨'
          },
          {
            title: 'Alternating BBB',
            content: 'LBBB and RBBB alternate beat-to-beat. Indicates severe conduction disease. High risk for complete heart block.',
            icon: '🔄'
          },
          {
            title: 'Masquerading BBB',
            content: 'BBB pattern obscures other diagnoses. MI patterns altered by BBB. Use modified criteria for diagnosis.',
            icon: '🎭'
          }
        ],
        hint: '📑 Master complex patterns!'
      },

      {
        id: 'mi-diagnosis-accordion',
        title: 'MI Diagnosis with Bundle Blocks',
        content: 'Special considerations for MI diagnosis',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        accordionItems: [
          {
            title: 'STEMI with LBBB',
            content: 'New LBBB = STEMI equivalent. Use Sgarbossa criteria for diagnosis. ST concordance most reliable. Urgent reperfusion needed.',
            icon: '📈'
          },
          {
            title: 'STEMI with RBBB',
            content: 'RBBB does not obscure ST changes. Standard STEMI criteria apply. May indicate large anterior MI.',
            icon: '📊'
          },
          {
            title: 'Sgarbossa Criteria',
            content: '≥1mm ST concordance (most specific). ≥1mm ST depression V1-V3. ≥5mm ST elevation with appropriate discordance.',
            icon: '🎯'
          }
        ],
        hint: '🎯 Click for MI diagnosis tips!'
      },

      {
        id: 'troubleshooting-guide-flashcard',
        title: '🧠 Troubleshooting Guide',
        content: 'Master challenging bundle block scenarios',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🛠️',
          question: 'How do you approach an unclear wide QRS pattern?',
          answer: 'Check QRS duration first. Assess morphology in V1 and V6. Look for AV relationship. Consider patient age and clinical context. Use systematic criteria. When in doubt, treat as more serious diagnosis.',
          imageUrl: '/lessonimages/module4/lesson36/troubleshooting.jpg'
        },
        hint: '🧠 Flip for troubleshooting approach!'
      },

      {
        id: 'clinical-pearls',
        title: 'Clinical Pearls Collection',
        content: 'PEARL 1: New BBB in acute MI = large infarct. PEARL 2: LBBB + heart failure = consider CRT. PEARL 3: Bifascicular block = monitor for progression. PEARL 4: Rate-related BBB is functional. PEARL 5: Use Sgarbossa criteria for LBBB + STEMI.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson36/clinical-pearls.jpg',
        hint: '💎 Precious clinical wisdom!'
      },

      {
        id: 'unit6-final-quiz',
        title: 'Unit 6 Quiz: Mastery Validation',
        content: 'Validate your bundle branch block mastery!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'The most concerning bundle block pattern is:',
        options: [
          'Isolated RBBB in young athlete',
          'Chronic LBBB in elderly patient',
          'Alternating LBBB and RBBB',
          'Rate-related RBBB during exercise'
        ],
        correctAnswer: 2,
        explanation: 'Perfect! Alternating LBBB and RBBB indicates severe conduction system disease with very high risk of complete heart block requiring urgent intervention.',
        imageUrl: '/lessonimages/module4/lesson36/mastery-quiz.jpg',
        hint: '🎯 Think about highest risk pattern!'
      }
    ],
    summary: "🏆 Congratulations! You have achieved bundle branch block mastery! You can recognize RBBB and LBBB patterns, understand their mechanisms, assess clinical significance, and manage patients appropriately.",
    keyPoints: [
      "Bundle branch blocks alter ventricular activation sequence creating wide QRS complexes",
      "RBBB: RSR' in V1, wide S waves in lateral leads. LBBB: Broad R in lateral, QS in V1",
      "New bundle blocks in acute MI indicate large infarcts with worse prognosis",
      "Strategic audio reinforcement in Units 2, 4, and 6 enhanced learning",
      "LBBB in heart failure may benefit from cardiac resynchronization therapy",
      "Bifascicular and alternating bundle blocks require monitoring for complete heart block"
    ],
    resources: [
      {
        title: "Bundle Branch Block Mastery Reference",
        url: "https://ecgkid.com/bundle-branch-block-guide",
        type: "video"
      }
    ]
  },
  tasks: [
    {
      id: 'final-bundle-branch-block-mastery-assessment',
      type: 'final-assessment',
      xp: 50,
      audio: {
        mainNarration: {
          audioUrl: '/lessonaudio/module4/lesson36/mastery-celebration.mp3',
          duration: 12,
          transcript: 'Exceptional work! You have mastered bundle branch blocks completely. You understand conduction anatomy, can recognize ECG patterns, differentiate from other wide QRS causes, and apply clinical knowledge appropriately. Your expertise will greatly benefit patient care!'
        }
      },
      images: {
        mainImage: '/lessonimages/module4/lesson36/mastery-achievement.jpg',
        slideImages: []
      },
      content: {
        prerequisiteMessage: '🏆 Final Assessment: Complete all 6 units to unlock this comprehensive bundle branch block mastery evaluation.',
        questions: [
          {
            id: 'rbbb-recognition-mastery',
            type: 'multiple-choice',
            question: 'An ECG shows QRS duration of 140ms with RSR\' pattern in V1 and wide S waves in I and V6. This represents:',
            options: [
              'Left bundle branch block',
              'Right bundle branch block',
              'Ventricular tachycardia',
              'Left anterior fascicular block'
            ],
            correctAnswer: 1,
            explanation: 'This represents right bundle branch block. The key features are: wide QRS (≥120ms), RSR\' pattern in V1 (bunny ears), and wide S waves in lateral leads I and V6.',
            imageUrl: '/lessonimages/module4/lesson36/assessment/rbbb-recognition.jpg'
          },
          {
            id: 'lbbb-clinical-significance-mastery',
            type: 'multiple-choice', 
            question: 'A patient with heart failure has new LBBB with QRS duration of 160ms. This finding suggests:',
            options: [
              'Benign age-related change',
              'Possible benefit from cardiac resynchronization therapy',
              'Need for immediate cardioversion',
              'Contraindication to heart failure medications'
            ],
            correctAnswer: 1,
            explanation: 'New LBBB in heart failure with QRS >150ms suggests possible benefit from cardiac resynchronization therapy (CRT). LBBB causes ventricular dyssynchrony that can worsen heart failure.',
            imageUrl: '/lessonimages/module4/lesson36/assessment/lbbb-clinical.jpg'
          },
          {
            id: 'differential-diagnosis-mastery',
            type: 'multiple-choice',
            question: 'A wide QRS rhythm shows AV dissociation with occasional capture beats. This most likely represents:',
            options: [
              'Right bundle branch block',
              'Left bundle branch block',
              'Ventricular tachycardia',
              'Hyperkalemia'
            ],
            correctAnswer: 2,
            explanation: 'AV dissociation with capture beats in a wide QRS rhythm strongly suggests ventricular tachycardia rather than bundle branch block, which would maintain normal AV conduction.',
            imageUrl: '/lessonimages/module4/lesson36/assessment/differential.jpg'
          },
          {
            id: 'bifascicular-block-management-mastery',
            type: 'multiple-choice',
            question: 'A patient has RBBB with left anterior fascicular block and experiences syncope. The most appropriate next step is:',
            options: [
              'Observation with follow-up',
              'Exercise stress testing',
              'Electrophysiology study and possible pacing',
              'Antiarrhythmic drug therapy'
            ],
            correctAnswer: 2,
            explanation: 'Bifascicular block with syncope requires electrophysiology study to assess for high-grade AV block and possible prophylactic pacemaker implantation due to high risk of complete heart block.',
            imageUrl: '/lessonimages/module4/lesson36/assessment/bifascicular-management.jpg'
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
