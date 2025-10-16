import { Lesson } from '../types/learning';

export const optimizedLesson42: Lesson = {
  id: 'lesson-5-4-optimized',
  moduleId: 'module-5',
  title: "Fascicular Blocks",
  description: "Master fascicular blocks comprehensively through 6 focused learning units with enhanced interactive elements: Fascicular anatomy and physiology, pathophysiology with audio, advanced ECG recognition, clinical significance with audio, management strategies, and expert mastery with celebration audio",
  order: 4,
  estimatedTime: 45,
  content: {
    type: 'mixed',
    introduction: "🎯 Welcome to Fascicular Blocks Mastery! Master fascicular blocks comprehensively through 6 progressive units with enhanced interactive elements, strategic audio, and real ECG integration from our extensive clinical database.",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your Fascicular Blocks Learning Journey",
        content: "UNIT 1: Fascicular Anatomy & Physiology → UNIT 2: Pathophysiology + Audio → UNIT 3: Advanced ECG Recognition → UNIT 4: Clinical Significance + Audio → UNIT 5: Management Strategies → UNIT 6: Expert Mastery + Celebration Audio",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // ===============================================
      // 🎯 UNIT 1: FASCICULAR ANATOMY & PHYSIOLOGY (7 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: Fascicular Anatomy & Physiology',
        content: 'Master fascicular anatomy and physiology! Understand the left fascicular system and its critical role.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/lbbb_65bpm_1.png',
        hint: '🌿 Master fascicular foundations!'
      },
      
      {
        id: 'fascicular-anatomy-flashcard',
        title: '🧠 Left Fascicular System Architecture',
        content: 'Understanding fascicular anatomy',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🌲',
          question: 'Describe the anatomical structure of the left fascicular system.',
          answer: 'LEFT BUNDLE TRUNK divides into TWO FASCICLES: ANTERIOR FASCICLE (thin, long, vulnerable) activates anterosuperior LV. POSTERIOR FASCICLE (thick, short, dual blood supply) activates posteroinferior LV. Both create rapid, coordinated LV activation.',
          imageUrl: '/lessonimages/module5/lesson42/fascicular-anatomy.jpg'
        },
        hint: '🧠 Flip to learn the dual system!'
      },

      {
        id: 'anterior-fascicle-characteristics',
        title: 'Left Anterior Fascicle (LAF)',
        content: 'ANATOMY: Thin, long fascicle extending anterosuperiorly. BLOOD SUPPLY: LAD septal branches (vulnerable). ACTIVATION: Anterosuperior and lateral LV walls. VULNERABILITY: Most susceptible to ischemic damage.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson42/anterior-fascicle.jpg',
        hint: '↖️ Thin and vulnerable pathway!'
      },

      {
        id: 'posterior-fascicle-steps',
        title: 'Left Posterior Fascicle (LPF)',
        content: 'Understanding posterior fascicle characteristics',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Anatomical Features',
            description: 'Short, thick fascicle extending posteroinferiorly'
          },
          {
            number: 2,
            title: 'Dual Blood Supply',
            description: 'LAD septal branches + RCA posterior branches'
          },
          {
            number: 3,
            title: 'LV Activation',
            description: 'Activates posteroinferior and inferior LV walls'
          },
          {
            number: 4,
            title: 'Resistance to Block',
            description: 'Most resistant fascicle due to dual supply and thickness'
          }
        ],
        hint: '👣 Strong and resilient pathway!'
      },

      {
        id: 'fascicular-function-tabs',
        title: 'Normal Fascicular Function',
        content: 'Understanding normal fascicular activation',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        tabs: [
          {
            title: 'Synchronized Activation',
            content: 'Both fascicles activate simultaneously. Creates coordinated LV contraction. Optimizes cardiac output and efficiency.',
            icon: '⚡'
          },
          {
            title: 'Electrical Vectors',
            content: 'LAF creates superior-lateral forces. LPF creates inferior forces. Combined result: normal QRS axis.',
            icon: '📐'
          },
          {
            title: 'Conduction Speed',
            content: 'Rapid Purkinje conduction. Activates entire LV in <80ms. Maintains mechanical synchrony.',
            icon: '💨'
          }
        ],
        hint: '📑 Teamwork creates efficiency!'
      },

      {
        id: 'fascicular-block-consequences-accordion',
        title: 'Fascicular Block Consequences',
        content: 'Understanding effects of fascicular blocks',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        accordionItems: [
          {
            title: 'LAF Block (LAFB)',
            content: 'Loss of anterosuperior activation. Activation shifts posteroinferiorly first. Creates left axis deviation pattern. QRS usually <120ms.',
            icon: '↖️'
          },
          {
            title: 'LPF Block (LPFB)',
            content: 'Loss of posteroinferior activation. Activation shifts anterosuperiorly first. Creates right axis deviation. Much less common.',
            icon: '↘️'
          },
          {
            title: 'Hemodynamic Impact',
            content: 'Usually minimal functional impairment. LV function typically preserved. May contribute to dyssynchrony in some cases.',
            icon: '💔'
          }
        ],
        hint: '🎯 Click to understand consequences!'
      },

      {
        id: 'trifascicular-concept-review',
        title: 'Trifascicular System Review',
        content: 'THREE FASCICLES: Right bundle + Left anterior fascicle + Left posterior fascicle. BLOCK COMBINATIONS: Single fascicle = fascicular block. Two fascicles = bifascicular block. Three fascicles = complete heart block.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson42/trifascicular-system.jpg',
        hint: '3️⃣ Three pathways, three possibilities!'
      },

      {
        id: 'unit1-quiz',
        title: 'Unit 1 Quiz: Fascicular Anatomy',
        content: 'Test your fascicular anatomy knowledge!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'The left posterior fascicle is most resistant to block because:',
        options: [
          'It is the longest fascicle',
          'It has dual blood supply from LAD and RCA',
          'It carries the most electrical current',
          'It has the fastest conduction velocity'
        ],
        correctAnswer: 1,
        explanation: 'Correct! The left posterior fascicle has dual blood supply from both LAD septal branches and RCA posterior branches, making it the most resistant fascicle to ischemic damage.',
        imageUrl: '/lessonimages/module5/lesson42/unit1-quiz.jpg',
        hint: '🎯 Think about dual protection!'
      },

      // ===============================================
      // 🎯 UNIT 2: PATHOPHYSIOLOGY + AUDIO (8 slides)
      // ===============================================
      {
        id: 'unit2-intro',
        title: '🎯 Unit 2: Fascicular Block Pathophysiology + Audio',
        content: 'Discover fascicular block pathophysiology! Master the mechanisms behind fascicular conduction disruption.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson42/pathophysiology-overview.jpg',
        hint: '⚙️ Understand block mechanisms!'
      },

      {
        id: 'fascicular-pathophysiology-audio',
        title: '🎧 Fascicular Pathophysiology Explained',
        content: 'Listen to detailed explanation of fascicular block development mechanisms',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module5/lesson42/fascicular-pathophysiology.mp3',
        hint: '🎧 Audio guide to fascicular mechanisms!'
      },

      {
        id: 'lafb-mechanisms-accordion',
        title: 'LAFB Development Mechanisms',
        content: 'Understanding left anterior fascicular block causes',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Ischemic Causes',
            content: 'Anterior MI with LAD involvement. Septal branch occlusion. Progressive coronary disease. Most common cause of LAFB.',
            icon: '🫀'
          },
          {
            title: 'Degenerative Causes',
            content: 'Age-related fibrosis. Progressive conduction system sclerosis. Idiopathic conduction disease. Lenègre disease.',
            icon: '⏳'
          },
          {
            title: 'Inflammatory Causes',
            content: 'Myocarditis affecting conduction. Infiltrative diseases. Autoimmune conditions. Usually reversible if caught early.',
            icon: '🔥'
          },
          {
            title: 'Congenital Causes',
            content: 'Congenital heart disease association. Familial conduction abnormalities. Present from birth or early life.',
            icon: '🧬'
          }
        ],
        hint: '🎯 Click to explore LAFB causes!'
      },

      {
        id: 'lpfb-rarity-flashcard',
        title: '🧠 LPFB Rarity and Causes',
        content: 'Understanding posterior fascicular block',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🔸',
          question: 'Why is left posterior fascicular block (LPFB) so rare?',
          answer: 'LPFB is rare because: DUAL BLOOD SUPPLY provides protection. THICK FASCICLE is more resistant to damage. SHORT LENGTH reduces vulnerability. When LPFB occurs, it usually indicates EXTENSIVE disease affecting both LAD and RCA territories.',
          imageUrl: '/lessonimages/module5/lesson42/lpfb-rarity.jpg'
        },
        hint: '🧠 Flip to understand rarity!'
      },

      {
        id: 'electrical-consequences',
        title: 'Electrical Consequences of Fascicular Blocks',
        content: 'LAFB: Loss of superior forces → left axis deviation. LPFB: Loss of inferior forces → right axis deviation. ALTERED ACTIVATION: Changed ventricular depolarization sequence. AXIS SHIFTS: Diagnostic hallmark of fascicular blocks.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson42/electrical-consequences.jpg',
        hint: '⚡ Axis deviation is key!'
      },

      {
        id: 'age-related-fascicular-disease',
        title: 'Age-Related Fascicular Disease',
        content: 'YOUNG PATIENTS: Consider congenital or acute causes. MIDDLE-AGED: Often ischemic etiology. ELDERLY: Usually degenerative fibrosis. PROGRESSION: May advance to bifascicular or complete block over time.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson42/age-related-disease.jpg',
        hint: '👥 Age influences etiology!'
      },

      {
        id: 'fascicular-vs-bundle-blocks',
        title: 'Fascicular vs Bundle Branch Blocks',
        content: 'FASCICULAR BLOCKS: QRS usually <120ms. Axis deviation prominent. Specific fascicle affected. BUNDLE BRANCH BLOCKS: QRS ≥120ms. Wide complex morphology. Entire bundle affected.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson42/fascicular-vs-bundle.jpg',
        hint: '⚖️ Different mechanisms, different patterns!'
      },

      {
        id: 'progression-patterns',
        title: 'Fascicular Block Progression Patterns',
        content: 'ISOLATED → BIFASCICULAR: LAFB may progress to LAFB + RBBB. BIFASCICULAR → TRIFASCICULAR: Addition of first-degree AV block. TRIFASCICULAR → COMPLETE HEART BLOCK: Final progression in some patients.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson42/progression-patterns.jpg',
        hint: '📈 Progressive conduction disease!'
      },

      {
        id: 'unit2-quiz',
        title: 'Unit 2 Quiz: Fascicular Pathophysiology',
        content: 'Test your understanding of fascicular mechanisms!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'The most common cause of left anterior fascicular block is:',
        options: [
          'Congenital heart disease',
          'Ischemic heart disease affecting LAD',
          'Drug toxicity',
          'Electrolyte abnormalities'
        ],
        correctAnswer: 1,
        explanation: 'Correct! Ischemic heart disease affecting the LAD and its septal branches is the most common cause of LAFB, as the anterior fascicle is supplied by these vulnerable vessels.',
        imageUrl: '/lessonimages/module5/lesson42/unit2-quiz.jpg',
        hint: '🎯 Think about LAD territory!'
      },

      // ===============================================
      // 🎯 UNIT 3: ADVANCED ECG RECOGNITION (7 slides)  
      // ===============================================
      {
        id: 'unit3-intro',
        title: '🎯 Unit 3: Advanced ECG Recognition',
        content: 'Master advanced fascicular block ECG interpretation! Learn sophisticated recognition techniques.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/lbbb_85bpm_3.png',
        hint: '📈 Master advanced fascicular recognition!'
      },

      {
        id: 'lafb-criteria-steps',
        title: 'LAFB ECG Criteria',
        content: 'Systematic approach to LAFB diagnosis',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Left Axis Deviation',
            description: 'QRS axis between -45° to -90° (pathologic left axis)'
          },
          {
            number: 2,
            title: 'Lead I Morphology',
            description: 'qR pattern in lead I (small q, dominant R wave)'
          },
          {
            number: 3,
            title: 'Inferior Lead Morphology',
            description: 'rS pattern in leads II, III, aVF (small r, dominant S)'
          },
          {
            number: 4,
            title: 'QRS Duration',
            description: 'Usually <120ms (incomplete block pattern)'
          }
        ],
        hint: '👣 Systematic LAFB recognition!'
      },

      {
        id: 'lpfb-criteria-steps',
        title: 'LPFB ECG Criteria',
        content: 'Systematic approach to LPFB diagnosis',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Right Axis Deviation',
            description: 'QRS axis between +90° to +120° (pathologic right axis)'
          },
          {
            number: 2,
            title: 'Lead I Morphology',
            description: 'rS pattern in lead I (small r, dominant S wave)'
          },
          {
            number: 3,
            title: 'Inferior Lead Morphology',
            description: 'qR pattern in leads II, III, aVF (small q, dominant R)'
          },
          {
            number: 4,
            title: 'Exclusion Criteria',
            description: 'Rule out RVH, lateral MI, and other causes of RAD'
          }
        ],
        hint: '👣 Systematic LPFB recognition!'
      },

      {
        id: 'axis-calculation-tabs',
        title: 'QRS Axis Calculation for Fascicular Blocks',
        content: 'Mastering axis calculation techniques',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        tabs: [
          {
            title: 'Lead I & aVF Method',
            content: 'Look at leads I and aVF. LAFB: I positive, aVF negative. LPFB: I negative, aVF positive.',
            icon: '🎯'
          },
          {
            title: 'Precise Calculation',
            content: 'Use leads I and III for precise axis. Calculate using isoelectric lead. Confirm degree measurements.',
            icon: '📐'
          },
          {
            title: 'Quick Assessment',
            content: 'LAFB: Left axis <-30°. LPFB: Right axis >+90°. Normal: 0° to +90°.',
            icon: '⚡'
          }
        ],
        hint: '📑 Master axis calculation!'
      },

      {
        id: 'fascicular-morphology-flashcard',
        title: '🧠 Fascicular Block Morphology',
        content: 'Key morphology patterns recognition',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '📊',
          question: 'What are the key morphology differences between LAFB and LPFB?',
          answer: 'LAFB: qR in I, aVL; rS in II, III, aVF; Left axis -45° to -90°. LPFB: rS in I, aVL; qR in II, III, aVF; Right axis +90° to +120°. Both usually have normal QRS width.',
          imageUrl: '/lessonimages/module5/lesson42/morphology-patterns.jpg'
        },
        hint: '🧠 Flip to understand patterns!'
      },

      {
        id: 'bifascicular-patterns-accordion',
        title: 'Bifascicular Block Patterns',
        content: 'Recognizing combined fascicular blocks',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'RBBB + LAFB',
            content: 'Wide QRS with RBBB pattern. Left axis deviation present. RSR\' in V1 + qR in I, rS in inferior leads. Most common bifascicular pattern.',
            icon: '🔀'
          },
          {
            title: 'RBBB + LPFB',
            content: 'Wide QRS with RBBB pattern. Right axis deviation present. RSR\' in V1 + rS in I, qR in inferior leads. Rare combination.',
            icon: '🔄'
          },
          {
            title: 'Clinical Significance',
            content: 'Higher risk for complete heart block. Requires cardiology follow-up. May progress to trifascicular block with PR prolongation.',
            icon: '⚠️'
          }
        ],
        hint: '🎯 Click for bifascicular patterns!'
      },

      {
        id: 'differential-diagnosis-considerations',
        title: 'Fascicular Block Differentials',
        content: 'LAFB MIMICS: LVH with axis deviation, inferior MI, WPW. LPFB MIMICS: RVH, lateral MI, pulmonary disease, normal variant. EXCLUDE OTHER CAUSES: Always consider structural heart disease.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson42/differential-diagnosis.jpg',
        hint: '🔍 Rule out mimics!'
      },

      {
        id: 'unit3-quiz',
        title: 'Unit 3 Quiz: ECG Recognition',
        content: 'Test your fascicular block recognition skills!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'The ECG hallmark of left anterior fascicular block is:',
        options: [
          'Right axis deviation with qR in inferior leads',
          'Left axis deviation with qR in lead I and rS in inferior leads',
          'Wide QRS complex with RSR\' in V1',
          'ST elevation in lateral leads'
        ],
        correctAnswer: 1,
        explanation: 'Correct! LAFB is characterized by left axis deviation (-45° to -90°) with qR pattern in lead I and rS pattern in inferior leads (II, III, aVF).',
        imageUrl: '/lessonimages/module5/lesson42/unit3-quiz.jpg',
        hint: '🎯 Think about axis and morphology!'
      },

      // ===============================================
      // 🎯 UNIT 4: CLINICAL SIGNIFICANCE + AUDIO (7 slides)
      // ===============================================
      {
        id: 'unit4-intro',
        title: '🎯 Unit 4: Clinical Significance + Audio',
        content: 'Master fascicular block clinical significance! Learn when fascicular blocks matter clinically.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson42/clinical-significance.jpg',
        hint: '👩‍⚕️ Understand clinical impact!'
      },

      {
        id: 'clinical-significance-audio',
        title: '🎧 Clinical Significance Analysis',
        content: 'Listen to detailed explanation of fascicular block clinical significance',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module5/lesson42/clinical-significance.mp3',
        hint: '🎧 Audio guide to clinical relevance!'
      },

      {
        id: 'prognostic-implications-tabs',
        title: 'Fascicular Block Prognosis',
        content: 'Understanding long-term implications',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        tabs: [
          {
            title: 'Isolated LAFB',
            content: 'Generally benign prognosis. Minimal symptoms. Normal life expectancy. Routine monitoring sufficient.',
            icon: '🟢'
          },
          {
            title: 'Isolated LPFB',
            content: 'Usually indicates extensive disease. More concerning than LAFB. Requires investigation. May progress.',
            icon: '🟡'
          },
          {
            title: 'Bifascicular Block',
            content: 'Higher risk for complete heart block. Annual progression rate 1-2%. Requires regular monitoring.',
            icon: '🟠'
          }
        ],
        hint: '📑 Prognosis varies by type!'
      },

      {
        id: 'chb-progression-risk-accordion',
        title: 'Complete Heart Block Progression Risk',
        content: 'Understanding CHB development risk',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Low Risk Patterns',
            content: 'Isolated LAFB: <1% yearly CHB risk. Stable for years. Normal PR interval. Asymptomatic patients.',
            icon: '🟢'
          },
          {
            title: 'Moderate Risk Patterns',
            content: 'Bifascicular block: 1-2% yearly progression. Monitor PR interval. Watch for symptoms. Regular follow-up.',
            icon: '🟡'
          },
          {
            title: 'High Risk Patterns',
            content: 'Bifascicular + prolonged PR. Symptomatic bifascicular block. Alternating bundle branch blocks. Consider pacemaker evaluation.',
            icon: '🔴'
          }
        ],
        hint: '🎯 Click for risk stratification!'
      },

      {
        id: 'symptoms-assessment-flashcard',
        title: '🧠 Fascicular Block Symptoms',
        content: 'Recognizing symptomatic presentations',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🩺',
          question: 'What symptoms might indicate progression in fascicular blocks?',
          answer: 'SYNCOPE or presyncope (concerning). FATIGUE or exercise intolerance. DYSPNEA on exertion. CHEST PAIN or palpitations. BRADYCARDIA symptoms. Any NEW symptoms in known bifascicular block require evaluation.',
          imageUrl: '/lessonimages/module5/lesson42/symptoms-assessment.jpg'
        },
        hint: '🧠 Flip for symptom recognition!'
      },

      {
        id: 'acute-mi-implications',
        title: 'Fascicular Blocks in Acute MI',
        content: 'NEW LAFB IN MI: Indicates septal involvement. Often anterior STEMI. May progress to bifascicular. Monitor closely for further conduction abnormalities. EXISTING FASCICULAR BLOCKS: May complicate MI diagnosis.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson42/mi-implications.jpg',
        hint: '🚨 New blocks in MI are concerning!'
      },

      {
        id: 'exercise-functional-capacity',
        title: 'Exercise and Functional Assessment',
        content: 'ISOLATED FASCICULAR BLOCKS: Usually normal exercise capacity. No activity restrictions needed. BIFASCICULAR BLOCKS: May have exercise limitations. Consider stress testing. Monitor chronotropic response.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson42/exercise-capacity.jpg',
        hint: '🏃‍♂️ Function usually preserved!'
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
        question: 'The highest risk for progression to complete heart block is seen in:',
        options: [
          'Isolated left anterior fascicular block',
          'Isolated left posterior fascicular block',
          'Bifascicular block (RBBB + fascicular block)',
          'First-degree AV block alone'
        ],
        correctAnswer: 2,
        explanation: 'Correct! Bifascicular block (RBBB + fascicular block) carries the highest risk for progression to complete heart block, with annual progression rates of 1-2%.',
        imageUrl: '/lessonimages/module5/lesson42/unit4-quiz.jpg',
        hint: '🎯 Think about two fascicles blocked!'
      },

      // ===============================================
      // 🎯 UNIT 5: MANAGEMENT STRATEGIES (6 slides)
      // ===============================================
      {
        id: 'unit5-intro',
        title: '🎯 Unit 5: Management Strategies',
        content: 'Master evidence-based fascicular block management! Learn systematic approaches to fascicular block care.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson42/management-strategies.jpg',
        hint: '⚕️ Evidence-based care approach!'
      },

      {
        id: 'fascicular-management-algorithm-accordion',
        title: 'Fascicular Block Management Algorithm',
        content: 'Systematic management approach',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'New Fascicular Block',
            content: 'Investigate underlying cause. Echocardiogram assessment. Rule out acute MI. Consider cardiology consultation.',
            icon: '🚨'
          },
          {
            title: 'Isolated Asymptomatic',
            content: 'Reassurance often sufficient. Routine follow-up monitoring. Patient education about symptoms to watch.',
            icon: '👁️'
          },
          {
            title: 'Bifascicular Block',
            content: 'Regular cardiology follow-up. Monitor for symptoms. Serial ECGs for progression. Consider pacemaker evaluation if indicated.',
            icon: '⚠️'
          },
          {
            title: 'Symptomatic Fascicular Block',
            content: 'Comprehensive evaluation. Electrophysiology study consideration. Pacemaker evaluation if symptomatic progression.',
            icon: '🔍'
          }
        ],
        hint: '🎯 Click for systematic management!'
      },

      {
        id: 'pacemaker-indications-steps',
        title: 'Pacemaker Indications in Fascicular Blocks',
        content: 'Evidence-based pacing decisions',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Class I Indications',
            description: 'Complete heart block development, symptomatic second-degree AV block'
          },
          {
            number: 2,
            title: 'Class IIa Indications',
            description: 'Bifascicular block with syncope, HV interval >70ms on EP study'
          },
          {
            number: 3,
            title: 'Class IIb Indications',
            description: 'Asymptomatic bifascicular block with very prolonged HV interval'
          },
          {
            number: 4,
            title: 'Not Indicated',
            description: 'Isolated fascicular blocks, asymptomatic bifascicular block with normal HV'
          }
        ],
        hint: '👣 Evidence-based pacing decisions!'
      },

      {
        id: 'monitoring-strategy-tabs',
        title: 'Monitoring Strategy',
        content: 'Tailored follow-up approaches',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        tabs: [
          {
            title: 'Isolated LAFB',
            content: 'Annual follow-up sufficient. Symptom assessment. ECG monitoring for progression. Patient education.',
            icon: '📅'
          },
          {
            title: 'Isolated LPFB',
            content: '6-month follow-up initially. Comprehensive cardiac evaluation. Monitor for progression to bifascicular.',
            icon: '📊'
          },
          {
            title: 'Bifascicular Block',
            content: '3-6 month cardiology follow-up. Serial ECGs. Symptom surveillance. EP study if indicated.',
            icon: '🔍'
          }
        ],
        hint: '📑 Tailored monitoring approaches!'
      },

      {
        id: 'ep-study-considerations-flashcard',
        title: '🧠 Electrophysiology Study Role',
        content: 'When EP study is helpful',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '⚡',
          question: 'When should EP study be considered in fascicular blocks?',
          answer: 'BIFASCICULAR BLOCK + SYNCOPE: To assess CHB risk. PROLONGED HV INTERVAL: >70ms suggests high risk. INTERMITTENT AV BLOCK: Document severity. PACEMAKER DECISION-MAKING: When indication unclear.',
          imageUrl: '/lessonimages/module5/lesson42/ep-study-role.jpg'
        },
        hint: '🧠 Flip for EP study indications!'
      },

      {
        id: 'patient-education',
        title: 'Patient Education and Counseling',
        content: 'SYMPTOM AWARENESS: Teach recognition of syncope, presyncope. ACTIVITY GUIDANCE: Usually no restrictions for isolated blocks. FOLLOW-UP IMPORTANCE: Emphasize regular monitoring. EMERGENCY SITUATIONS: When to seek immediate care.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson42/patient-education.jpg',
        hint: '🎓 Educate for safety!'
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
        question: 'The most appropriate management for asymptomatic isolated LAFB is:',
        options: [
          'Immediate pacemaker implantation',
          'Reassurance and annual follow-up',
          'Urgent electrophysiology study',
          'Antiarrhythmic medication therapy'
        ],
        correctAnswer: 1,
        explanation: 'Correct! Asymptomatic isolated LAFB has a benign prognosis and typically requires only reassurance and annual follow-up monitoring.',
        imageUrl: '/lessonimages/module5/lesson42/unit5-quiz.jpg',
        hint: '🎯 Think about benign prognosis!'
      },

      // ===============================================
      // 🎯 UNIT 6: EXPERT MASTERY + CELEBRATION AUDIO (7 slides)
      // ===============================================
      {
        id: 'unit6-intro',
        title: '🎯 Unit 6: Expert Fascicular Mastery',
        content: 'Congratulations! Achieve expert-level fascicular block mastery with advanced concepts and clinical pearls!',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson42/expert-mastery.jpg',
        hint: '🏆 Expert-level achievement!'
      },

      {
        id: 'expert-mastery-audio',
        title: '🎧 Expert Mastery Celebration',
        content: 'Celebrate your comprehensive fascicular block mastery achievement!',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module5/lesson42/expert-mastery-celebration.mp3',
        hint: '🎧 Expert achievement celebration!'
      },

      {
        id: 'advanced-fascicular-scenarios-tabs',
        title: 'Advanced Fascicular Scenarios',
        content: 'Expert-level clinical scenarios',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        tabs: [
          {
            title: 'Intermittent Fascicular Block',
            content: 'Comes and goes on monitoring. May be rate-dependent. Consider underlying ischemia or progression risk.',
            icon: '🔄'
          },
          {
            title: 'Fascicular Block + Acute MI',
            content: 'New LAFB indicates septal involvement. Monitor for progression to bifascicular. May complicate ECG interpretation.',
            icon: '🚨'
          },
          {
            title: 'Trifascicular Block Evolution',
            content: 'Bifascicular + prolonged PR. Highest CHB risk. Close monitoring required. Pacemaker consideration.',
            icon: '⚠️'
          }
        ],
        hint: '📑 Complex clinical scenarios!'
      },

      {
        id: 'expert-differential-diagnosis-accordion',
        title: 'Expert Differential Diagnosis',
        content: 'Advanced diagnostic considerations',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        accordionItems: [
          {
            title: 'LAFB vs LVH with LAD',
            content: 'LVH has voltage criteria. LAFB has specific morphology. May coexist. Consider both diagnoses.',
            icon: '💪'
          },
          {
            title: 'LPFB vs RVH',
            content: 'RVH has right heart findings. LPFB has specific morphology. Check for pulmonary disease. Rare vs common.',
            icon: '🫁'
          },
          {
            title: 'Normal Variants',
            content: 'Mild axis deviations normal. Age-related changes. Athletic hearts. No pathologic significance.',
            icon: '✅'
          },
          {
            title: 'Drug Effects',
            content: 'Some medications affect conduction. Reversible causes. Check medication history. Consider discontinuation.',
            icon: '💊'
          }
        ],
        hint: '🎯 Click for expert differentials!'
      },

      {
        id: 'expert-clinical-pearls',
        title: '💎 Expert Clinical Pearls',
        content: 'PEARL 1: LPFB is rare; when present, suspect extensive disease. PEARL 2: Bifascicular block progression rate is 1-2% annually. PEARL 3: New LAFB in MI indicates significant septal involvement. PEARL 4: Axis deviation is the hallmark of fascicular blocks. PEARL 5: Isolated LAFB has excellent prognosis.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson42/expert-pearls.jpg',
        hint: '💎 Professional wisdom collection!'
      },

      {
        id: 'emerging-technologies-flashcard',
        title: '🧠 Emerging Technologies',
        content: 'Future of fascicular block management',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🚀',
          question: 'What emerging technologies may impact fascicular block management?',
          answer: 'AI-ENHANCED ECG analysis for progression prediction. CONTINUOUS MONITORING devices for early detection. GENETIC TESTING for familial conduction disease. PHYSIOLOGIC PACING to preserve normal conduction. REMOTE MONITORING for progression surveillance.',
          imageUrl: '/lessonimages/module5/lesson42/emerging-technologies.jpg'
        },
        hint: '🧠 Flip for future innovations!'
      },

      {
        id: 'clinical-practice-integration',
        title: 'Clinical Practice Integration',
        content: 'SYSTEMATIC APPROACH: Always calculate QRS axis. RISK STRATIFICATION: Identify progression risks early. PATIENT COMMUNICATION: Explain prognosis appropriately. FOLLOW-UP PLANNING: Tailor monitoring to risk level.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson42/practice-integration.jpg',
        hint: '🏥 Integrate expert knowledge!'
      },

      {
        id: 'mastery-achievement-summary',
        title: '🏆 Fascicular Block Mastery Achievement',
        content: 'ANATOMY MASTERY: Dual fascicular system expertise. PATHOPHYSIOLOGY: Mechanism understanding complete. ECG MASTERY: Advanced axis and morphology recognition. CLINICAL WISDOM: Risk stratification mastery. MANAGEMENT: Evidence-based approach perfected.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson42/mastery-achievement.jpg',
        hint: '🏆 Complete fascicular mastery achieved!'
      },

      {
        id: 'unit6-final-quiz',
        title: 'Unit 6 Quiz: Expert Validation',
        content: 'Validate your expert fascicular block knowledge!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'The fascicular block pattern with the highest clinical significance is:',
        options: [
          'Isolated left anterior fascicular block',
          'Isolated left posterior fascicular block',
          'Bifascicular block with prolonged PR interval',
          'Normal fascicular conduction'
        ],
        correctAnswer: 2,
        explanation: 'Excellent! Bifascicular block with prolonged PR interval (trifascicular block) has the highest clinical significance, representing the highest risk for progression to complete heart block.',
        imageUrl: '/lessonimages/module5/lesson42/expert-quiz.jpg',
        hint: '🎯 Think about highest CHB risk!'
      }
    ],
    summary: "🏆 Outstanding! You have achieved comprehensive fascicular block mastery! You understand dual fascicular anatomy, pathophysiology, advanced ECG recognition, risk stratification, evidence-based management, and expert-level differential diagnosis.",
    keyPoints: [
      "Fascicular blocks affect left bundle fascicles causing characteristic axis deviations",
      "LAFB creates left axis deviation; LPFB creates right axis deviation with specific morphology", 
      "Bifascicular blocks carry 1-2% annual risk of progression to complete heart block",
      "Strategic audio reinforcement in Units 2, 4, and 6 enhanced learning comprehension",
      "LPFB is rare and indicates extensive disease when present",
      "Isolated fascicular blocks generally have benign prognosis with routine monitoring"
    ],
    resources: [
      {
        title: "Fascicular Blocks Master Class Reference",
        url: "https://ecgkid.com/fascicular-blocks-comprehensive",
        type: "video"
      }
    ]
  },
  tasks: [
    {
      id: 'expert-fascicular-mastery-assessment',
      type: 'final-assessment',
      xp: 60,
      audio: {
        mainNarration: {
          audioUrl: '/lessonaudio/module5/lesson42/expert-mastery-celebration.mp3',
          duration: 15,
          transcript: 'Exceptional mastery achievement! You have mastered fascicular blocks comprehensively - from dual fascicular anatomy through advanced risk stratification. Your expertise in axis calculation, morphology recognition, and evidence-based management is now at expert level. This knowledge serves your patients superbly!'
        }
      },
      images: {
        mainImage: '/lessonimages/module5/lesson42/expert-achievement.jpg',
        slideImages: []
      },
      content: {
        prerequisiteMessage: '🏆 Expert Assessment: Complete all 6 comprehensive units to unlock this expert-level fascicular block mastery evaluation.',
        questions: [
          {
            id: 'fascicular-anatomy-expert',
            type: 'multiple-choice',
            question: 'The left posterior fascicle is most resistant to block because:',
            options: [
              'It is the thickest fascicle',
              'It has dual blood supply from LAD and RCA',
              'It conducts electricity fastest',
              'It has the shortest pathway'
            ],
            correctAnswer: 1,
            explanation: 'The left posterior fascicle has dual blood supply from both LAD septal branches and RCA posterior branches, plus it is thick and short, making it most resistant to ischemic damage.',
            imageUrl: '/lessonimages/module5/lesson42/assessment/resistance.jpg'
          },
          {
            id: 'lafb-criteria-expert',
            type: 'multiple-choice', 
            question: 'Complete criteria for left anterior fascicular block include:',
            options: [
              'Right axis deviation with qR in inferior leads',
              'Left axis deviation (-45° to -90°) with qR in lead I and rS in inferior leads',
              'Wide QRS complex with RSR\' in V1',
              'ST elevation in lateral leads'
            ],
            correctAnswer: 1,
            explanation: 'LAFB criteria include left axis deviation (-45° to -90°), qR pattern in lead I, rS pattern in inferior leads (II, III, aVF), and usually normal QRS duration.',
            imageUrl: '/lessonimages/module5/lesson42/assessment/lafb-criteria.jpg'
          },
          {
            id: 'bifascicular-risk-expert',
            type: 'multiple-choice',
            question: 'The annual risk of progression to complete heart block in bifascicular block is:',
            options: [
              '<0.5% per year',
              '1-2% per year',
              '5-10% per year',
              '>15% per year'
            ],
            correctAnswer: 1,
            explanation: 'Bifascicular block carries a 1-2% annual risk of progression to complete heart block, requiring regular monitoring but not necessarily immediate pacing.',
            imageUrl: '/lessonimages/module5/lesson42/assessment/progression-risk.jpg'
          },
          {
            id: 'management-expert',
            type: 'multiple-choice',
            question: 'The most appropriate management for asymptomatic isolated LAFB is:',
            options: [
              'Immediate pacemaker implantation',
              'Reassurance and annual follow-up monitoring',
              'Urgent electrophysiology study',
              'Prophylactic antiarrhythmic therapy'
            ],
            correctAnswer: 1,
            explanation: 'Asymptomatic isolated LAFB has an excellent prognosis and requires only reassurance and annual follow-up monitoring, as progression risk is minimal.',
            imageUrl: '/lessonimages/module5/lesson42/assessment/management.jpg'
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
