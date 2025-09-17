import { Lesson } from '@/types/learning';

export const optimizedLesson30: Lesson = {
  id: 'lesson-4-2-optimized',
  moduleId: 'module-4',
  title: "Junctional Escape Rhythm Mastery",
  description: "Master junctional escape rhythms through 6 comprehensive units with medical-accurate ECGs and expert analysis",
  order: 2,
  estimatedTime: 20,
  
  content: {
    type: 'mixed',
    introduction: "🫀 Welcome to Junctional Escape Rhythm Mastery! Learn the heart's critical backup pacemaker system through 6 progressive units with medical-accurate ECGs, strategic audio, and comprehensive assessments. Master recognition, physiology, and clinical management.",
    sections: [
      {
        id: 'junctional-overview',
        title: '🫀 Junctional Escape Overview',
        content: 'UNIT 1: Foundation → UNIT 2: Physiology → UNIT 3: Recognition → UNIT 4: Clinical Context → UNIT 5: Differential Diagnosis → UNIT 6: Management'
      }
    ],
    slides: [
      
      // ===============================================
      // 🫀 UNIT 1: JUNCTIONAL ESCAPE FOUNDATION (7 slides)
      // ===============================================
      
      // Unit 1: Highlight intro
      {
        id: 'junctional-escape-foundation-intro',
        title: '🫀 Unit 1: Junctional Escape Foundation',
        content: 'Master the fundamentals of junctional escape rhythms - the heart\'s essential backup pacemaker system. Learn recognition, characteristics, and protective mechanisms.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/bradycardia_45bpm.png',
        hint: '🔥 The heart\'s backup safety system!'
      },

      // 🎬 YOUTUBE VIDEO: ACLS Bradycardia Algorithm
      {
        id: 'youtube-bradycardia-acls',
        title: '🎬 Adult Bradycardia Algorithm - ACLS Protocol',
        content: 'ACLS algorithm for adult bradycardia management. Essential protocol for managing junctional escape rhythms in clinical practice!',
        type: 'youtube',
        youtubeId: 'U3926ZrAosM',
        videoDuration: 600,
        minimumWatchTime: 480,
        requireFullWatch: true,
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        hint: '🚨 Critical emergency protocol for bradycardia!'
      },

      // 🎬 YOUTUBE VIDEO: Ventricular Fibrillation
      {
        id: 'youtube-vfib',
        title: '🎬 Ventricular Fibrillation - Terminal Cardiac Rhythm',
        content: 'Understanding ventricular fibrillation - the terminal cardiac rhythm. Important contrast to understand why junctional escape is protective!',
        type: 'youtube',
        youtubeId: 'prcxfvoE4C4',
        videoDuration: 480,
        minimumWatchTime: 420,
        requireFullWatch: true,
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        hint: '⚠️ Terminal rhythm - understand the contrast!'
      },

      // Unit 1: Flashcard - Definition
      {
        id: 'junctional-escape-definition-flashcard',
        title: '🧠 Junctional Escape Definition',
        content: 'Learn the precise definition of junctional escape rhythm',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        flashcard: {
          icon: '🧠',
          question: 'What defines a Junctional Escape Rhythm?',
          answer: 'AV junction acts as pacemaker when SA node fails. RATE: 40-60 bpm. P WAVES: Inverted, absent, or retrograde. QRS: Narrow. MECHANISM: Escape (protective).',
          imageUrl: '/ecg/medical_accurate/bradycardia_48bpm_3.png'
        },
        hint: '🧠 Flip to learn the definition!'
      },

      // Unit 1: Steps - Pacemaker Hierarchy
      {
        id: 'pacemaker-hierarchy-steps',
        title: '👣 Cardiac Pacemaker Hierarchy',
        content: 'Understanding the heart\'s three-tier pacemaker system and backup mechanisms',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'SA Node (Primary)',
            description: 'Rate: 60-100 bpm. Normal cardiac pacemaker. Most reliable.',
            icon: '1️⃣'
          },
          {
            number: 2,
            title: 'AV Junction (Secondary)',
            description: 'Rate: 40-60 bpm. Backup when SA node fails. Escape mechanism.',
            icon: '2️⃣'
          },
          {
            number: 3,
            title: 'Ventricles (Tertiary)',
            description: 'Rate: 20-40 bpm. Last resort pacemaker. Idioventricular rhythm.',
            icon: '3️⃣'
          },
          {
            number: 4,
            title: 'Escape Mechanism',
            description: 'Lower pacemakers activate when higher ones fail to prevent asystole.',
            icon: '4️⃣'
          }
        ],
        hint: '👣 Three-tier safety system!'
      },

      // Unit 1: Tabs - Junctional Characteristics
      {
        id: 'junctional-characteristics-tabs',
        title: '📑 Junctional Escape Characteristics',
        content: 'Explore the key ECG characteristics of junctional escape rhythms',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
{
            title: 'Rate (40-60 bpm)',
            content: 'INHERENT RATE: AV junction\'s natural firing rate\nRANGE: Typically 40-60 bpm\nVARIATIONS: May be slower if diseased\nCLINICAL: Usually hemodynamically stable',
            icon: '💓'
          },
          {
            title: 'P Wave Patterns',
            content: 'INVERTED: In leads II, III, aVF (retrograde)\nABSENT: Hidden in QRS complex\nAFTER QRS: Retrograde P waves\nVARIABLE: Depends on AV conduction timing',
            icon: '📊'
          },
          {
            title: 'QRS Morphology',
            content: 'NARROW: <120ms (supraventricular origin)\nNORMAL: Same as sinus rhythm QRS\nABERRANCY: May be wide if bundle branch block\nCONSISTENT: Regular morphology pattern',
            icon: '📈'
          }
        ],
        hint: '📑 Key identifying features!'
      },

      // Unit 1: Accordion - Escape Mechanisms
      {
        id: 'escape-mechanisms-accordion',
        title: '🎯 Junctional Escape Mechanisms',
        content: 'Understanding the cellular and physiological mechanisms of junctional escape',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        accordionItems: [
{
            title: 'Phase 4 Depolarization',
            content: 'AV junction cells have automaticity due to slow Na+ channels and decreasing K+ efflux. When SA node fails, junctional cells reach threshold and fire spontaneously.',
            icon: '⚡'
          },
          {
            title: 'Overdrive Suppression',
            content: 'Normal SA node suppresses AV junction through faster firing rate. When SA node slows/stops, suppression lifts and junction escapes at its inherent rate.',
            icon: '🔄'
          },
          {
            title: 'Protective Function',
            content: 'Junctional escape prevents asystole and maintains cardiac output. Critical backup system that can sustain life during SA node dysfunction or high-grade heart block.',
            icon: '🛡️'
          }
        ],
        hint: '🎯 Click to explore mechanisms!'
      },

      // Unit 1: Flashcard - Recognition Tips
      {
        id: 'junctional-recognition-flashcard',
        title: '🧠 Quick Recognition Tips',
        content: 'Master rapid junctional escape recognition',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        flashcard: {
          icon: '🧠',
          question: 'Quick way to recognize junctional escape rhythm?',
          answer: 'RATE: 40-60 bpm. REGULAR: Consistent R-R intervals. P WAVES: Inverted/absent/retrograde. QRS: Narrow. CONTEXT: SA node failure or suppression.',
          imageUrl: '/ecg/medical_accurate/bradycardia_42bpm_2.png'
        },
        hint: '🧠 Recognition shortcuts!'
      },

      // Unit 1 Quiz
      {
        id: 'unit1-junctional-foundation-quiz',
        title: '🎯 Unit 1 Quiz: Junctional Foundation',
        content: 'Test your understanding of junctional escape fundamentals',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'zoom',
        question: 'What is the typical heart rate range for junctional escape rhythm?',
        options: [
          '20-40 bpm',
          '40-60 bpm',
          '60-100 bpm',
          '100-150 bpm'
        ],
        correctAnswer: 1,
        explanation: '40-60 bpm is the inherent firing rate of the AV junction. This is slower than SA node (60-100) but faster than ventricular escape (20-40).',
        imageUrl: '/ecg/medical_accurate/bradycardia_55bpm_5.png',
        hint: '🎯 Think backup pacemaker rate!'
      },

      // ===============================================
      // ⚡ UNIT 2: JUNCTIONAL PHYSIOLOGY + AUDIO (8 slides)
      // ===============================================

      // Unit 2: Highlight intro
      {
        id: 'junctional-physiology-intro',
        title: '⚡ Unit 2: Junctional Physiology & Mechanisms',
        content: 'Dive deep into the cellular and electrical mechanisms of junctional escape rhythms. Understand automaticity, conduction pathways, and physiological triggers.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/placeholder/av-junction-anatomy.png',
        hint: '🔥 Cellular mechanisms revealed!'
      },

      // Unit 2: Tabs - AV Junction Anatomy
      {
        id: 'av-junction-anatomy-tabs',
        title: '📑 AV Junction Anatomical Regions',
        content: 'Explore the three anatomical regions of the AV junction',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
{
            title: 'AN Region',
            content: 'LOCATION: Atrial-Nodal interface\nFUNCTION: Receives atrial input\nCELLS: Transitional cells, slow conduction\nAUTOMATICITY: Limited pacemaker ability',
            icon: '🔵'
          },
          {
            title: 'N Region (Compact Node)',
            content: 'LOCATION: Central AV node\nFUNCTION: Primary conduction delay\nCELLS: Small, slow-conducting\nAUTOMATICITY: Main junctional pacemaker site',
            icon: '🟡'
          },
          {
            title: 'NH Region',
            content: 'LOCATION: Nodal-His interface\nFUNCTION: Connects to His bundle\nCELLS: Larger, faster conduction\nAUTOMATICITY: Can serve as backup pacemaker',
            icon: '🟢'
          }
        ],
        hint: '📑 Three functional regions!'
      },

      // Unit 2: Steps - Automaticity Mechanism
      {
        id: 'automaticity-mechanism-steps',
        title: '👣 Junctional Automaticity Process',
        content: 'Step-by-step cellular mechanism of junctional automaticity',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Phase 4 Begins',
            description: 'After repolarization, membrane potential starts slow depolarization',
            icon: '1️⃣'
          },
          {
            number: 2,
            title: 'Pacemaker Current',
            description: 'If channels (HCN) activate, causing gradual depolarization',
            icon: '2️⃣'
          },
          {
            number: 3,
            title: 'Threshold Reached',
            description: 'Membrane reaches -40mV, triggering Ca2+ channel activation',
            icon: '3️⃣'
          },
          {
            number: 4,
            title: 'Action Potential',
            description: 'Ca2+-dependent action potential fires, creating junctional beat',
            icon: '4️⃣'
          }
        ],
        hint: '👣 Cellular firing sequence!'
      },

      // Unit 2: Accordion - Conduction Patterns
      {
        id: 'junctional-conduction-accordion',
        title: '🎯 Junctional Conduction Patterns',
        content: 'Understanding how junctional beats conduct through the heart',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        accordionItems: [
{
            title: 'Antegrade (Forward) Conduction',
            content: 'Impulse travels down His-Purkinje system to ventricles. Results in narrow QRS (<120ms). Normal ventricular activation sequence maintains efficient contraction.',
            icon: '⬇️'
          },
          {
            title: 'Retrograde (Backward) Conduction',
            content: 'Impulse may travel backward to atria. Creates inverted P waves in inferior leads (II, III, aVF). P wave timing varies: before, during, or after QRS.',
            icon: '⬆️'
          },
          {
            title: 'Concealed Conduction',
            content: 'Some junctional impulses fail to reach surface ECG but still affect subsequent beats. Can cause unexpected pauses or alterations in rhythm patterns.',
            icon: '👻'
          }
        ],
        hint: '🎯 Conduction directions matter!'
      },

      // Unit 2: Flashcard - P Wave Timing
      {
        id: 'p-wave-timing-flashcard',
        title: '🧠 P Wave Timing in Junctional Rhythms',
        content: 'Master P wave timing patterns',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        flashcard: {
          icon: '🧠',
          question: 'Where can P waves appear in junctional escape rhythm?',
          answer: 'BEFORE QRS: RP interval <0.12s. HIDDEN: Buried in QRS complex. AFTER QRS: Retrograde P waves. Pattern depends on relative conduction speeds to atria vs ventricles.',
          imageUrl: '/placeholder/p-wave-timing-examples.png'
        },
        hint: '🧠 P wave placement varies!'
      },

      // Unit 2: STRATEGIC AUDIO (Junctional Physiology Expert Review)
      {
        id: 'junctional-physiology-audio-lesson',
        title: '🎵 Junctional Physiology Audio Review',
        content: 'Listen to expert cardiologist explain the cellular mechanisms of junctional automaticity, conduction patterns, and clinical implications.',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        hint: '🎧 Expert physiology insights!'
      },

      // Unit 2: Video - AV Junction Function
      {
        id: 'av-junction-function-video',
        title: '🎥 AV Junction Function Visualization',
        content: 'Watch detailed animation of AV junction automaticity, escape mechanisms, and conduction pathways in real-time.',
        type: 'video',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        videoUrl: '/lessonvideos/av-junction-function.mp4',
        hint: '🎬 See physiology in action!'
      },

      // Unit 2 Quiz// Unit 3 Quiz
      {
        id: 'unit3-variants-quiz',
        title: '🎯 Unit 3 Quiz: Junctional Variants',
        content: 'Test your knowledge of junctional rhythm variants',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'zoom',
        question: 'A junctional rhythm at 70 bpm with inverted P waves in lead II is classified as:',
        options: [
          'Junctional escape rhythm',
          'Accelerated junctional rhythm',
          'Junctional tachycardia',
          'Sinus rhythm with aberrant conduction'
        ],
        correctAnswer: 1,
        explanation: 'Rate 70 bpm (60-100 range) with junctional origin (inverted P waves) = accelerated junctional rhythm. Faster than normal escape rate.',
        imageUrl: '/placeholder/accelerated-junctional-example.png',
        hint: '🎯 Rate 60-100 = accelerated!'
      },

      // ===============================================
      // 🔍 UNIT 4: DIFFERENTIAL DIAGNOSIS + AUDIO (7 slides)
      // ===============================================

      // Unit 4: Highlight intro
      {
        id: 'junctional-differential-intro',
        title: '🔍 Unit 4: Junctional Rhythm Differential Diagnosis',
        content: 'Master the art of distinguishing junctional escape rhythms from other bradyarrhythmias. Learn systematic differential diagnosis approaches and key distinguishing features.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/placeholder/junctional-differential-algorithm.png',
        hint: '🔥 Accurate diagnosis is crucial!'
      },

      // Unit 4: Steps - Differential Diagnosis Algorithm
      {
        id: 'junctional-differential-steps',
        title: '👣 Junctional Rhythm Differential Algorithm',
        content: 'Systematic approach to differentiating junctional rhythms',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Assess Rate',
            description: 'Bradycardia (<60 bpm)? Narrow down to escape rhythms.',
            icon: '1️⃣'
          },
          {
            number: 2,
            title: 'Identify P Waves',
            description: 'Normal P waves = sinus bradycardia. Abnormal/absent = junctional.',
            icon: '2️⃣'
          },
          {
            number: 3,
            title: 'P-QRS Relationship',
            description: 'AV dissociation? Fixed relationship? Variable relationship?',
            icon: '3️⃣'
          },
          {
            number: 4,
            title: 'QRS Morphology',
            description: 'Narrow QRS = supraventricular. Wide QRS = ventricular or aberrancy.',
            icon: '4️⃣'
          }
        ],
        hint: '👣 Systematic approach works!'
      },

      // Unit 4: Accordion - Key Differentials
      {
        id: 'junctional-key-differentials-accordion',
        title: '🎯 Key Junctional Rhythm Differentials',
        content: 'Major differential diagnoses for junctional escape rhythms',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        accordionItems: [
{
            title: 'Sinus Bradycardia',
            content: 'RATE: <60 bpm. P WAVES: Normal, upright in II. PR INTERVAL: Normal (0.12-0.20s). QRS: Narrow. CAUSE: SA node slowing, not failure.',
            icon: '🔵'
          },
          {
            title: 'Complete Heart Block',
            content: 'RATE: Variable (atrial >ventricular). P WAVES: Regular, independent. AV DISSOCIATION: Complete. QRS: May be wide (ventricular escape).',
            icon: '🚫'
          },
          {
            title: 'Idioventricular Rhythm',
            content: 'RATE: 20-40 bpm. P WAVES: Absent/dissociated. QRS: Wide (>120ms). ORIGIN: Ventricular escape pacemaker.',
            icon: '⚡'
          }
        ],
        hint: '🎯 Know the key differences!'
      },

      // Unit 4: Tabs - Diagnostic Features
      {
        id: 'junctional-diagnostic-features-tabs',
        title: '📑 Diagnostic Feature Comparison',
        content: 'Compare key diagnostic features across bradyarrhythmias',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
{
            title: 'P Wave Features',
            content: 'JUNCTIONAL: Inverted/absent/retrograde\nSINUS BRADY: Normal, upright in II\nHEART BLOCK: Present but dissociated\nIDIOVENTRICULAR: Absent or dissociated',
            icon: '📊'
          },
          {
            title: 'Rate Characteristics',
            content: 'JUNCTIONAL: 40-60 bpm (typical escape)\nSINUS BRADY: <60 bpm (variable)\nHEART BLOCK: Ventricular rate <atrial\nIDIOVENTRICULAR: 20-40 bpm',
            icon: '💓'
          },
          {
            title: 'QRS Characteristics',
            content: 'JUNCTIONAL: Narrow (<120ms)\nSINUS BRADY: Narrow (unless BBB)\nHEART BLOCK: Narrow or wide (depends on escape)\nIDIOVENTRICULAR: Wide (>120ms)',
            icon: '📈'
          }
        ],
        hint: '📑 Feature-by-feature comparison!'
      },

      // Unit 4: Flashcard - Quick Differential Tips
      {
        id: 'differential-tips-flashcard',
        title: '🧠 Quick Differential Tips',
        content: 'Rapid differentiation strategies',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        flashcard: {
          icon: '🧠',
          question: 'Quickest way to distinguish junctional escape from sinus bradycardia?',
          answer: 'Look at P waves in lead II: UPRIGHT = sinus bradycardia. INVERTED/ABSENT = junctional escape. Rate alone is not diagnostic.',
          imageUrl: '/placeholder/quick-differential-comparison.png'
        },
        hint: '🧠 P waves tell the story!'
      },

      // Unit 4: STRATEGIC AUDIO (Differential Diagnosis Expert Analysis)
      {
        id: 'junctional-differential-audio-lesson',
        title: '🎵 Junctional Differential Audio Analysis',
        content: 'Listen to expert cardiologist analyze challenging cases of junctional rhythms vs other bradyarrhythmias. Learn clinical pearls and diagnostic shortcuts.',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/junctional-analysis/differential-diagnosis-expert.mp3',
        hint: '🎧 Expert diagnostic insights!'
      },

      // Unit 4 Quiz
      {
        id: 'unit4-differential-quiz',
        title: '🎯 Unit 4 Quiz: Differential Diagnosis',
        content: 'Test your differential diagnosis skills',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'zoom',
        question: 'A rhythm strip shows regular QRS at 45 bpm with inverted P waves in lead II occurring just before each QRS. This is MOST likely:',
        options: [
          'Sinus bradycardia with retrograde P waves',
          'Junctional escape rhythm with retrograde conduction',
          'Complete heart block with junctional escape',
          'Idioventricular rhythm with atrial activity'
        ],
        correctAnswer: 1,
        explanation: 'Inverted P waves in lead II with regular narrow QRS at 45 bpm = junctional escape rhythm with retrograde atrial conduction.',
        imageUrl: '/placeholder/junctional-retrograde-example.png',
        hint: '🎯 Inverted P waves = retrograde conduction!'
      },

      // ===============================================
      // 🏥 UNIT 5: CLINICAL MANAGEMENT (6 slides)
      // ===============================================

      // Unit 5: Highlight intro
      {
        id: 'junctional-management-intro',
        title: '🏥 Unit 5: Junctional Rhythm Clinical Management',
        content: 'Master clinical management of junctional escape rhythms. Learn when to treat, when to observe, and how to address underlying causes while preserving protective mechanisms.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/placeholder/junctional-management-overview.png',
        hint: '🔥 Management preserves protection!'
      },

      // Unit 5: Tabs - Management Principles
      {
        id: 'junctional-management-principles-tabs',
        title: '📑 Junctional Management Principles',
        content: 'Key principles for managing junctional escape rhythms',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
{
            title: 'Protective Mechanism',
            content: 'CONCEPT: Junctional escape is protective\nAPPROACH: Preserve the escape rhythm\nAVOID: Suppressing junctional automaticity\nFOCUS: Treat underlying causes, not the rhythm',
            icon: '🛡️'
          },
          {
            title: 'Hemodynamic Assessment',
            content: 'STABLE: Usually well-tolerated at 40-60 bpm\nUNSTABLE: Rare, consider other causes\nSYMPTOMS: Fatigue, dizziness, syncope\nMONITORING: Continuous ECG, vital signs',
            icon: '💓'
          },
          {
            title: 'Underlying Causes',
            content: 'SA NODE: Sick sinus syndrome, medications\nAV BLOCK: Complete heart block\nMETABOLIC: Hyperkalemia, hypoxia\nDRUGS: Beta-blockers, digitalis, CCBs',
            icon: '🔍'
          }
        ],
        hint: '📑 Preserve, assess, investigate!'
      },

      // Unit 5: Accordion - Treatment Approaches
      {
        id: 'junctional-treatment-approaches-accordion',
        title: '🎯 Junctional Rhythm Treatment Approaches',
        content: 'Specific treatment strategies for junctional escape rhythms',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        accordionItems: [
{
            title: 'Observation and Monitoring',
            content: 'INDICATIONS: Hemodynamically stable, asymptomatic. MONITORING: Telemetry, symptoms, exercise tolerance. DURATION: Until underlying cause resolves or definitive treatment.',
            icon: '👁️'
          },
          {
            title: 'Treat Underlying Causes',
            content: 'MEDICATIONS: Discontinue or reduce AV nodal blockers. METABOLIC: Correct electrolyte imbalances, hypoxia. STRUCTURAL: Address ischemia, inflammation. REVERSIBLE: Many causes are treatable.',
            icon: '🎯'
          },
          {
            title: 'Pacemaker Consideration',
            content: 'INDICATIONS: Symptomatic bradycardia, chronotropic incompetence. TYPE: Usually dual-chamber (DDDR). TIMING: When underlying cause irreversible. BENEFIT: Restores rate responsiveness.',
            icon: '🔋'
          }
        ],
        hint: '🎯 Treatment hierarchy approach!'
      },

      // Unit 5: Steps - Management Algorithm
      {
        id: 'junctional-management-algorithm-steps',
        title: '👣 Junctional Management Algorithm',
        content: 'Step-by-step approach to junctional escape management',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Hemodynamic Assessment',
            description: 'Assess BP, mental status, symptoms. Stable patients rarely need acute intervention.',
            icon: '1️⃣'
          },
          {
            number: 2,
            title: 'Identify Underlying Cause',
            description: 'Review medications, labs (K+, Mg2+), assess for AV block or SA dysfunction.',
            icon: '2️⃣'
          },
          {
            number: 3,
            title: 'Address Reversible Causes',
            description: 'Correct electrolytes, reduce/stop offending drugs, treat ischemia.',
            icon: '3️⃣'
          },
          {
            number: 4,
            title: 'Long-term Management',
            description: 'Consider pacemaker if symptomatic with irreversible cause. Monitor for progression.',
            icon: '4️⃣'
          }
        ],
        hint: '👣 Systematic management approach!'
      },

      // Unit 5 Quiz
      {
        id: 'unit5-management-quiz',
        title: '🎯 Unit 5 Quiz: Clinical Management',
        content: 'Test your junctional rhythm management knowledge',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'zoom',
        question: 'A 70-year-old patient has asymptomatic junctional escape rhythm at 50 bpm after starting metoprolol. What is the BEST initial management?',
        options: [
          'Immediate pacemaker insertion',
          'Atropine administration',
          'Reduce or discontinue metoprolol',
          'Continuous dopamine infusion'
        ],
        correctAnswer: 2,
        explanation: 'Junctional escape likely due to beta-blocker suppressing SA node. Reducing/stopping metoprolol is appropriate first step for asymptomatic patient.',
        imageUrl: '/placeholder/medication-induced-junctional.png',
        hint: '🎯 Address the cause first!'
      },

      // ===============================================
      // 🚨 UNIT 6: ADVANCED CONCEPTS + AUDIO (7 slides)
      // ===============================================

      // Unit 6: Highlight intro
      {
        id: 'junctional-advanced-intro',
        title: '🚨 Unit 6: Advanced Junctional Concepts',
        content: 'Master advanced junctional rhythm concepts including complex presentations, special populations, and challenging clinical scenarios. Become a junctional rhythm expert.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/placeholder/advanced-junctional-concepts.png',
        hint: '🔥 Expert-level mastery!'
      },

      // Unit 6: Steps - Advanced Scenarios
      {
        id: 'advanced-junctional-scenarios-steps',
        title: '👣 Advanced Junctional Scenarios',
        content: 'Complex clinical scenarios involving junctional rhythms',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Junctional-Sinus Competition',
            description: 'Similar rates cause rhythm competition. Look for fusion beats and varying morphology.',
            icon: '1️⃣'
          },
          {
            number: 2,
            title: 'Post-Cardioversion Junctional',
            description: 'Junctional escape common after cardioversion. Usually temporary, resolves as SA recovers.',
            icon: '2️⃣'
          },
          {
            number: 3,
            title: 'Digitalis-Induced Patterns',
            description: 'Digitalis enhances junctional automaticity. May see accelerated junctional with AV block.',
            icon: '3️⃣'
          },
          {
            number: 4,
            title: 'Pediatric Considerations',
            description: 'Children tolerate bradycardia poorly. Lower thresholds for intervention required.',
            icon: '4️⃣'
          }
        ],
        hint: '👣 Complex scenarios require expertise!'
      },

      // Unit 6: Tabs - Special Populations
      {
        id: 'junctional-special-populations-tabs',
        title: '📑 Special Population Considerations',
        content: 'Junctional rhythms in special clinical populations',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
{
            title: 'Athletes',
            content: 'PHYSIOLOGY: High vagal tone, trained heart\nFINDINGS: May have slow junctional rates\nSIGNIFICANCE: Often benign if asymptomatic\nEVALUATION: Exercise testing helpful',
            icon: '🏃'
          },
          {
            title: 'Elderly Patients',
            content: 'PREVALENCE: Higher due to degenerative disease\nTOLERANCE: May be symptomatic at higher rates\nCAUSES: SA node disease, multiple medications\nMANAGEMENT: Lower threshold for pacemaker',
            icon: '👴'
          },
          {
            title: 'Post-Cardiac Surgery',
            content: 'MECHANISM: Surgical trauma, edema, inflammation\nTIMING: Often temporary (hours to days)\nMONITORING: Continuous ECG, pacing wires available\nRECOVERY: Usually resolves as healing occurs',
            icon: '🏥'
          }
        ],
        hint: '📑 Population-specific considerations!'
      },

      // Unit 6: Accordion - Complex Presentations
      {
        id: 'complex-junctional-presentations-accordion',
        title: '🎯 Complex Junctional Presentations',
        content: 'Advanced and complex junctional rhythm presentations',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        accordionItems: [
{
            title: 'Junctional Bigeminy/Trigeminy',
            content: 'PATTERN: Alternating junctional beats with sinus. MECHANISM: Competing pacemakers, exit block. RECOGNITION: Regular irregularity with different P wave morphologies.',
            icon: '🔄'
          },
          {
            title: 'Concealed Junctional Beats',
            content: 'CONCEPT: Junctional impulses that don\'t reach surface ECG. EFFECTS: Cause unexpected pauses, reset timing. RECOGNITION: Requires careful analysis of rhythm patterns.',
            icon: '👻'
          },
          {
            title: 'Junctional Rhythm with Aberrancy',
            content: 'MECHANISM: Bundle branch block with junctional rhythm. RECOGNITION: Wide QRS with junctional rate/P waves. SIGNIFICANCE: May mimic ventricular escape.',
            icon: '📊'
          }
        ],
        hint: '🎯 Advanced pattern recognition!'
      },

      // Unit 6: Flashcard - Expert Tips
      {
        id: 'junctional-expert-tips-flashcard',
        title: '🧠 Expert Junctional Tips',
        content: 'Advanced clinical pearls for junctional rhythms',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        flashcard: {
          icon: '🧠',
          question: 'What\'s the most important principle in managing junctional escape rhythms?',
          answer: 'NEVER suppress the escape rhythm - it\'s protective! Always investigate and treat underlying causes. Suppressing junctional escape without addressing the cause can lead to asystole.',
          imageUrl: '/placeholder/junctional-management-principle.png'
        },
        hint: '🧠 Protect the protector!'
      },

      // Unit 6: STRATEGIC AUDIO (Advanced Junctional Mastery)
      {
        id: 'junctional-mastery-audio-lesson',
        title: '🎵 Junctional Mastery Audio Celebration',
        content: 'Listen to expert electrophysiologist discuss advanced junctional concepts and celebrate your mastery of this critical cardiac rhythm. You\'ve achieved junctional expertise!',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/junctional-analysis/mastery-celebration-expert.mp3',
        hint: '🎧 Expert mastery celebration!'
      },

      // Unit 6 Quiz
      {
        id: 'unit6-advanced-quiz',
        title: '🎯 Unit 6 Quiz: Advanced Concepts',
        content: 'Test your advanced junctional rhythm expertise',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'zoom',
        question: 'In a patient with junctional escape rhythm, which intervention is MOST likely to be harmful?',
        options: [
          'Correcting hyperkalemia',
          'Discontinuing beta-blockers',
          'Administering lidocaine to suppress the rhythm',
          'Monitoring with continuous telemetry'
        ],
        correctAnswer: 2,
        explanation: 'Suppressing junctional escape rhythm with antiarrhythmics is dangerous - it removes the protective mechanism without addressing the underlying cause.',
        imageUrl: '/placeholder/dangerous-junctional-suppression.png',
        hint: '🎯 Never suppress the escape!'
      }
    ],
    
    summary: "🏆 Congratulations on mastering Junctional Escape Rhythms! You've achieved comprehensive expertise in junctional physiology, rhythm recognition, clinical variants, differential diagnosis, management principles, and advanced concepts. You can now confidently identify, analyze, and manage junctional rhythms in clinical practice.",
    
    keyPoints: [
      "Junctional escape rhythm is a protective backup mechanism with rate 40-60 bpm",
      "P waves may be inverted (retrograde), absent (hidden), or follow QRS complex",
      "AV junction fires due to phase 4 depolarization when SA node fails or is suppressed",
      "Never suppress junctional escape rhythms - they are protective mechanisms",
      "Management focuses on treating underlying causes rather than the rhythm itself",
      "Differential diagnosis includes sinus bradycardia, heart block, and ventricular escape",
      "Special populations (athletes, elderly, post-surgery) require tailored approaches",
      "Complex presentations may include rhythm competition and concealed conduction"
    ],
    
    resources: [
      {
        title: "Interactive Junctional ECG Analyzer",
        url: "/resources/junctional-ecg-analyzer",
        type: "tool",
        description: "Practice junctional rhythm recognition with medical-accurate ECGs"
      },
      {
        title: "AV Junction Physiology Simulator",
        url: "/resources/av-junction-physiology",
        type: "tool",
        description: "Explore junctional automaticity and escape mechanisms"
      },
      {
        title: "Junctional Management Guidelines",
        url: "/resources/junctional-management-guidelines",
        type: "reference",
        description: "Evidence-based approaches to junctional rhythm management"
      }
    ]
  },
  
  // ============= ENHANCED FINAL ASSESSMENT =============
  tasks: [
    {
      id: 'final-junctional-mastery-assessment',
      type: 'final-assessment',
      xp: 50,
      audio: {
        mainNarration: {
          audioUrl: '/lessonaudio/junctional-analysis/junctional-mastery-celebration.mp3',
          duration: 12,
          transcript: "Excellent work! You've mastered junctional escape rhythms - one of the heart's most important protective mechanisms. You now understand junctional physiology, can recognize all variants, perform accurate differential diagnosis, and manage these rhythms appropriately. This knowledge is essential for cardiac care."
        }
      },
      images: {
        mainImage: '/ecg/medical_accurate/bradycardia_50bpm.png',
        slideImages: []
      },
      content: {
        prerequisiteMessage: "🏆 Final Assessment: Master all 6 units to earn your Junctional Rhythm Expert Certification!",
        questions: [
          {
            id: "junctional-mechanism-question",
            type: "multiple-choice",
            question: "What is the primary cellular mechanism responsible for junctional escape rhythm automaticity?",
            options: [
              "Fast Na+ channels during phase 0 depolarization",
              "Slow depolarization during phase 4 (pacemaker current)",
              "Ca2+ influx during phase 2 plateau",
              "K+ efflux during phase 3 repolarization"
            ],
            correctAnswer: 1,
            explanation: "Phase 4 slow depolarization due to pacemaker current (If channels) causes junctional automaticity when SA node fails.",
            imageUrl: "/placeholder/junctional-automaticity-mechanism.png"
          },
          {
            id: "junctional-p-wave-question",
            type: "multiple-choice",
            question: "In junctional escape rhythm, inverted P waves in leads II, III, and aVF indicate:",
            options: [
              "Antegrade conduction from SA node to AV node",
              "Retrograde conduction from AV junction to atria",
              "Aberrant atrial depolarization pathway",
              "Technical artifact from electrode placement"
            ],
            correctAnswer: 1,
            explanation: "Inverted P waves in inferior leads indicate retrograde atrial activation from the AV junction back to the atria.",
            imageUrl: "/placeholder/retrograde-p-wave-explanation.png"
          },
          {
            id: "junctional-management-question",
            type: "multiple-choice",
            question: "A patient develops junctional escape rhythm after starting metoprolol. What is the MOST appropriate management?",
            options: [
              "Immediate synchronized cardioversion",
              "Administer atropine to increase heart rate",
              "Reduce or discontinue the metoprolol",
              "Insert temporary pacemaker immediately"
            ],
            correctAnswer: 2,
            explanation: "Drug-induced junctional escape should be managed by addressing the underlying cause (beta-blocker) rather than suppressing the protective rhythm.",
            imageUrl: "/placeholder/medication-induced-management.png"
          },
          {
            id: "junctional-differential-question",
            type: "multiple-choice",
            question: "Which finding BEST distinguishes junctional escape rhythm from sinus bradycardia?",
            options: [
              "Heart rate less than 60 bpm",
              "Regular R-R intervals on ECG",
              "Inverted or absent P waves in lead II",
              "Narrow QRS complex morphology"
            ],
            correctAnswer: 2,
            explanation: "P wave morphology is the key differentiator: sinus bradycardia has upright P waves in lead II, while junctional rhythms have inverted/absent P waves.",
            imageUrl: "/ecg/medical_accurate/bradycardia_45bpm.png"
          }
        ]
      }
    }
  ],
  
  // ============= LESSON COMPLETION METADATA =============
  completed: false,
  attempts: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
