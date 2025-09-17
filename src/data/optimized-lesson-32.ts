import { Lesson } from '@/types/learning';

export const optimizedLesson32: Lesson = {
  id: 'lesson-4-4-optimized',
  moduleId: 'module-4',
  title: "Junctional Tachycardia Mastery",
  description: "Master junctional tachycardia through 6 comprehensive units with medical-accurate ECGs and mechanism understanding",
  order: 4,
  estimatedTime: 20,

  content: {
    type: 'mixed',
    introduction: "🚀 Welcome to Junctional Tachycardia Mastery! Learn when the AV junction races above 100 bpm through 6 progressive units with medical-accurate ECGs, strategic audio, and comprehensive assessments. Master recognition, mechanisms, and clinical management.",
    sections: [
      {
        id: 'junctional-tachycardia-overview',
        title: '🚀 Junctional Tachycardia Overview',
        content: 'UNIT 1: Definition → UNIT 2: Enhanced Automaticity → UNIT 3: ECG Recognition → UNIT 4: Differential Diagnosis → UNIT 5: Clinical Context → UNIT 6: Management'
      }
    ],
    slides: [
      
      // ===============================================
      // 🚀 UNIT 1: JUNCTIONAL TACHYCARDIA DEFINITION (7 slides)
      // ===============================================
      
      // Unit 1: Highlight intro
      {
        id: 'junctional-tachycardia-definition-intro',
        title: '🚀 Unit 1: Junctional Tachycardia Definition',
        content: 'Master the fundamentals of junctional tachycardia - when the AV junction becomes the dominant pacemaker at rates >100 bpm. Learn definition, classification, and pathophysiology.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/placeholder/junctional-tachycardia-foundation.png',
        hint: '🔥 The junction takes over!'
      },

      // 🎬 YOUTUBE VIDEO: Wellens Syndrome
      {
        id: 'youtube-wellens-syndrome',
        title: '🎬 Wellens Syndrome - Critical T-Wave Pattern Recognition',
        content: 'Master Wellens syndrome recognition - critical pre-MI pattern that mimics other conditions. Essential for preventing missed diagnoses!',
        type: 'youtube',
        youtubeId: 'OqOPzOx8ifE',
        videoDuration: 540,
        minimumWatchTime: 450,
        requireFullWatch: true,
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        hint: '⚠️ Critical pre-MI pattern - don\'t miss it!'
      },

      // 🎬 YOUTUBE VIDEO: SVT with Aberrancy
      {
        id: 'youtube-svt-aberrancy',
        title: '🎬 SVT with Aberrancy vs Ventricular Tachycardia',
        content: 'Learn to differentiate SVT with aberrancy from ventricular tachycardia. Critical skill for emergency management decisions!',
        type: 'youtube',
        youtubeId: 'iR1MnYlY8TM',
        videoDuration: 720,
        minimumWatchTime: 600,
        requireFullWatch: true,
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        hint: '🚨 Critical differential diagnosis!'
      },

      // Unit 1: Flashcard - Definition
      {
        id: 'junctional-tachycardia-definition-flashcard',
        title: '🧠 Junctional Tachycardia Definition',
        content: 'Learn the precise definition of junctional tachycardia',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcardFront: '🚀 What defines Junctional Tachycardia?',
        flashcardBack: 'AV junction pacing at >100 bpm, becoming the dominant pacemaker.\n\nRATE: Usually 100-180 bpm\nMECHANISM: Enhanced automaticity or reentry\nP WAVES: Inverted/absent/retrograde\nQRS: Narrow (<120ms)',
        imageUrl: '/placeholder/junctional-tachycardia-ecg.png',
        hint: '🧠 Flip to learn!'
      },

      // Unit 1: Steps - Classification Process
      {
        id: 'junctional-rhythm-classification-steps',
        title: '👣 Junctional Rhythm Classification',
        content: 'Understanding the complete spectrum of junctional rhythms by rate',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Junctional Escape (40-60 bpm)',
            description: 'Backup pacemaker when SA node fails or is suppressed',
            icon: '1️⃣'
          },
          {
            number: 2,
            title: 'Accelerated Junctional (60-100 bpm)',
            description: 'Enhanced automaticity but not yet tachycardic',
            icon: '2️⃣'
          },
          {
            number: 3,
            title: 'Junctional Tachycardia (>100 bpm)',
            description: 'Dominant pacemaker with significant automaticity or reentry',
            icon: '3️⃣'
          },
          {
            number: 4,
            title: 'Rate Assessment Importance',
            description: 'Rate determines mechanism, prognosis, and treatment approach',
            icon: '4️⃣'
          }
        ],
        hint: '👣 Rate classifications matter!'
      },

      // Unit 1: Tabs - Mechanism Types
      {
        id: 'mechanism-types-tabs',
        title: '📑 Junctional Tachycardia Mechanism Types',
        content: 'Understanding automatic vs reentrant mechanisms',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: 'Automatic Type',
            content: 'MECHANISM: Enhanced phase 4 depolarization\nONSET: Gradual warm-up phenomenon\nTERMINATION: Gradual cool-down\nRATE: Variable, may fluctuate\nTREATMENT: Address underlying cause',
            icon: '⚡'
          },
          {
            title: 'Reentrant Type',
            content: 'MECHANISM: AV nodal reentry circuit\nONSET: Abrupt start with trigger\nTERMINATION: Abrupt cessation\nRATE: Fixed, stable once established\nTREATMENT: Rate control, rhythm conversion',
            icon: '🔄'
          },
          {
            title: 'Mixed Features',
            content: 'PRESENTATION: Some cases show both patterns\nVARIABILITY: Rate may vary during episode\nDIAGNOSIS: Requires careful ECG analysis\nMANAGEMENT: Individualized approach',
            icon: '🔀'
          }
        ],
        hint: '📑 Know the mechanisms!'
      },

      // Unit 1: Accordion - Triggers and Causes
      {
        id: 'triggers-causes-accordion',
        title: '🎯 Triggers and Underlying Causes',
        content: 'Common conditions that precipitate junctional tachycardia',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Digitalis Toxicity',
            content: 'Most classic cause of automatic junctional tachycardia. Progressive from accelerated junctional → tachycardia → more serious arrhythmias. Often first sign of toxicity.',
            icon: '💊'
          },
          {
            title: 'Myocardial Ischemia/Infarction',
            content: 'Especially inferior MI affecting AV node blood supply. May be reperfusion-related. Usually transient but can be sustained. Associated with other conduction abnormalities.',
            icon: '💔'
          },
          {
            title: 'Congenital Forms',
            content: 'JET (Junctional Ectopic Tachycardia) in infants and children. Incessant tachycardia leading to cardiomyopathy. Difficult to control, may require aggressive treatment.',
            icon: '👶'
          }
        ],
        hint: '🎯 Know the common triggers!'
      },

      // Unit 1: Flashcard - Rate Memory Aid
      {
        id: 'rate-threshold-flashcard',
        title: '🧠 Rate Threshold Memory Aid',
        content: 'Easy way to remember junctional tachycardia rate threshold',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcardFront: '📊 Memory aid: Junctional tachycardia rate threshold?',
        flashcardBack: 'Think "Century Mark" - 100 bpm!\n\n< 100 bpm: Accelerated junctional\n> 100 bpm: Junctional tachycardia\n\nUsual range: 100-180 bpm\nRarely exceeds 220 bpm',
        imageUrl: '/placeholder/junctional-rate-threshold.png',
        hint: '🧠 Century mark rule!'
      },

      // Unit 1 Quiz
      {
        id: 'unit1-junctional-tachycardia-definition-quiz',
        title: '🎯 Unit 1 Quiz: Junctional Tachycardia Definition',
        content: 'Test your understanding of junctional tachycardia basics',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'What heart rate defines junctional tachycardia?',
        options: [
          '> 80 bpm (faster than normal)',
          '> 100 bpm (true tachycardia threshold)',
          '> 120 bpm (rapid tachycardia)',
          '> 150 bpm (very fast tachycardia)'
        ],
        correctAnswer: 1,
        explanation: 'Junctional tachycardia is defined as >100 bpm from the AV junction, distinguishing it from accelerated junctional rhythm (60-100 bpm).',
        imageUrl: '/ecg/medical_accurate/tachycardia_105bpm.png',
        hint: '🎯 Think century mark!'
      },

      // ===============================================
      // 🧬 UNIT 2: ENHANCED AUTOMATICITY MECHANISMS + AUDIO (8 slides)
      // ===============================================

      // Unit 2: Highlight intro
      {
        id: 'enhanced-automaticity-mechanisms-intro',
        title: '🧬 Unit 2: Enhanced Automaticity Mechanisms',
        content: 'Dive deep into the cellular and molecular mechanisms causing junctional cells to fire at tachycardic rates. Understand automaticity enhancement, triggers, and pathophysiology.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/placeholder/enhanced-automaticity-tachycardia.png',
        hint: '🔥 Cellular tachycardia mechanisms!'
      },

      // Unit 2: Tabs - Automaticity Enhancement
      {
        id: 'automaticity-enhancement-tabs',
        title: '📑 Automaticity Enhancement in Tachycardia',
        content: 'Factors that drive junctional cells to tachycardic rates',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: 'Severe Sympathetic Drive',
            content: 'MECHANISM: Massive ↑ cAMP → ↑ If current\nTRIGGERS: Severe stress, shock, high-dose catecholamines\nEFFECT: Very steep phase 4 slope\nCLINICAL: Often in critically ill patients',
            icon: '🧬'
          },
          {
            title: 'Toxic/Metabolic',
            content: 'MECHANISM: Severe ion gradient disruption\nTRIGGERS: Digitalis toxicity, severe hypoxia, profound acidosis\nEFFECT: Pathologic automaticity enhancement\nCLINICAL: Often life-threatening conditions',
            icon: '☠️'
          },
          {
            title: 'Structural Disease',
            content: 'MECHANISM: Abnormal junctional tissue\nTRIGGERS: Congenital abnormalities, post-surgical\nEFFECT: Intrinsic enhanced automaticity\nCLINICAL: JET in children, post-cardiac surgery',
            icon: '🏗️'
          }
        ],
        hint: '📑 Severe enhancement needed!'
      },

      // Unit 2: Steps - Reentry Mechanism
      {
        id: 'reentry-mechanism-steps',
        title: '👣 AV Nodal Reentry Mechanism',
        content: 'Understanding how reentry circuits create junctional tachycardia',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Dual Pathways',
            description: 'AV node has fast and slow conducting pathways',
            icon: '1️⃣'
          },
          {
            number: 2,
            title: 'Trigger Event',
            description: 'Premature beat encounters pathway with different refractory periods',
            icon: '2️⃣'
          },
          {
            number: 3,
            title: 'Reentry Circuit',
            description: 'Impulse circles through slow-fast or fast-slow pathway',
            icon: '3️⃣'
          },
          {
            number: 4,
            title: 'Sustained Tachycardia',
            description: 'Circuit maintains itself, creating regular rapid rhythm',
            icon: '4️⃣'
          }
        ],
        hint: '👣 Circuit creates rhythm!'
      },

      // Unit 2: Accordion - Warm-up and Cool-down
      {
        id: 'warm-up-cool-down-accordion',
        title: '🎯 Warm-up and Cool-down Phenomena',
        content: 'Characteristic features of automatic junctional tachycardia',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Warm-up Phenomenon',
            content: 'Gradual acceleration from slower to faster rates at tachycardia onset. Reflects progressive enhancement of automaticity. Rate may increase from 80s to 120s over minutes.',
            icon: '📈'
          },
          {
            title: 'Cool-down Phenomenon',
            content: 'Gradual deceleration before termination. Rate slowly decreases as automaticity wanes. May return to accelerated junctional or normal sinus rhythm.',
            icon: '📉'
          },
          {
            title: 'Rate Variability',
            content: 'Unlike reentrant tachycardias, automatic forms show rate fluctuation. May respond to autonomic influences. Diagnostic clue for automatic mechanism.',
            icon: '📊'
          }
        ],
        hint: '🎯 Gradual changes are key!'
      },

      // Unit 2: Flashcard - Digitalis Toxicity Progression
      {
        id: 'digitalis-progression-flashcard',
        title: '🧠 Digitalis Toxicity Progression',
        content: 'Understanding the progressive arrhythmia pattern',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcardFront: '💊 How does digitalis toxicity progress through junctional rhythms?',
        flashcardBack: 'Classic progression:\n\n1. Accelerated junctional (60-100)\n2. Junctional tachycardia (100+)\n3. Bidirectional VT\n4. Ventricular tachycardia/fibrillation\n\nJT is often the turning point!',
        imageUrl: '/placeholder/digitalis-toxicity-progression.png',
        hint: '🧠 Progressive toxicity pattern!'
      },

      // Unit 2: STRATEGIC AUDIO (Mechanism Review)
      {
        id: 'mechanism-review-audio-lesson',
        title: '🎵 Mechanism Review Audio',
        content: 'Listen to expert explanation of automatic vs reentrant mechanisms, warm-up/cool-down phenomena, and clinical triggers for junctional tachycardia.',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/junctional-rhythms/junctional-tachycardia-mechanisms.mp3',
        hint: '🎧 Expert mechanism insights!'
      },

      // Unit 2 Quiz
      {
        id: 'unit2-mechanisms-quiz',
        title: '🎯 Unit 2 Quiz: Mechanisms',
        content: 'Test your understanding of junctional tachycardia mechanisms',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'What distinguishes automatic junctional tachycardia from reentrant forms?',
        options: [
          'QRS width is different between the two types',
          'Automatic forms show gradual warm-up and cool-down',
          'Reentrant forms always have faster rates',
          'P wave morphology differs significantly'
        ],
        correctAnswer: 1,
        explanation: 'Automatic junctional tachycardia characteristically shows gradual warm-up and cool-down, while reentrant forms have abrupt onset and termination.',
        imageUrl: '/placeholder/automatic-vs-reentrant-characteristics.png',
        hint: '🎯 Think gradual vs abrupt!'
      },

      // ===============================================
      // 📊 UNIT 3: ECG RECOGNITION AND ANALYSIS + VIDEO (7 slides)
      // ===============================================

      // Unit 3: Highlight intro
      {
        id: 'ecg-recognition-intro',
        title: '📊 Unit 3: ECG Recognition and Analysis',
        content: 'Master the art of recognizing junctional tachycardia on ECG. Learn rate measurement, P wave analysis, QRS characteristics, and AV dissociation patterns.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/placeholder/junctional-tachycardia-ecg-recognition.png',
        hint: '🔥 ECG analysis mastery!'
      },

      // Unit 3: Steps - ECG Analysis Approach
      {
        id: 'ecg-analysis-steps',
        title: '👣 Junctional Tachycardia ECG Analysis',
        content: 'Systematic approach to analyzing junctional tachycardia',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Rate Assessment',
            description: 'Confirm rate >100 bpm, usually 100-180 range',
            icon: '1️⃣'
          },
          {
            number: 2,
            title: 'QRS Analysis',
            description: 'Verify narrow QRS <120ms (supraventricular origin)',
            icon: '2️⃣'
          },
          {
            number: 3,
            title: 'P Wave Evaluation',
            description: 'Look for inverted, absent, or retrograde P waves',
            icon: '3️⃣'
          },
          {
            number: 4,
            title: 'AV Relationship',
            description: 'Assess for AV dissociation, capture beats, fusion beats',
            icon: '4️⃣'
          }
        ],
        hint: '👣 Systematic ECG approach!'
      },

      // Unit 3: Tabs - P Wave Patterns
      {
        id: 'p-wave-patterns-jt-tabs',
        title: '📑 P Wave Patterns in Junctional Tachycardia',
        content: 'Different P wave presentations and their significance',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: 'AV Dissociation',
            content: 'APPEARANCE: Independent P waves at slower rate\nMECHANISM: Sinus node firing independently\nRATE RATIO: Usually 2:1 or 3:1 JT:sinus\nSIGNIFICANCE: Confirms junctional origin',
            icon: '🔀'
          },
          {
            title: 'Retrograde Conduction',
            content: 'APPEARANCE: Inverted P waves in II, III, aVF\nTIMING: May be before, during, or after QRS\nRP RELATION: Usually short RP interval\nIMPLICATION: 1:1 retrograde VA conduction',
            icon: '🔙'
          },
          {
            title: 'No Visible P Waves',
            content: 'MECHANISM: P waves hidden in QRS or T waves\nAPPEARANCE: Appears as narrow complex tachycardia\nDIAGNOSIS: Based on rate, QRS morphology\nDIFFERENTIAL: Must exclude other SVT causes',
            icon: '👻'
          }
        ],
        hint: '📑 P waves reveal mechanism!'
      },

      // Unit 3: Accordion - QRS and ST Changes
      {
        id: 'qrs-st-changes-accordion',
        title: '🎯 QRS and ST-T Wave Changes',
        content: 'Secondary changes that may accompany junctional tachycardia',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'QRS Morphology',
            content: 'Usually narrow (<120ms) and identical to sinus rhythm QRS. May show aberrancy if pre-existing bundle branch block or rate-related aberrancy occurs.',
            icon: '📏'
          },
          {
            title: 'ST-T Wave Changes',
            content: 'Rate-related changes common. May see ST depression or T wave inversions due to rapid rate. Can mask or mimic ischemic changes.',
            icon: '📈'
          },
          {
            title: 'Capture and Fusion Beats',
            content: 'Capture beats: Occasional sinus beats conducting normally. Fusion beats: Collision between sinus and junctional impulses. Diagnostic of AV dissociation.',
            icon: '🤝'
          }
        ],
        hint: '🎯 Secondary changes matter!'
      },

      // Unit 3: Flashcard - AV Dissociation Recognition
      {
        id: 'av-dissociation-recognition-flashcard',
        title: '🧠 AV Dissociation Recognition',
        content: 'Identifying AV dissociation in junctional tachycardia',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcardFront: '🔀 How do you recognize AV dissociation in junctional tachycardia?',
        flashcardBack: 'Look for:\n\n• Independent P waves (slower rate)\n• Variable P-R intervals\n• Capture beats (sinus breakthrough)\n• Fusion beats (collision complexes)\n\nP rate < QRS rate is the key!',
        imageUrl: '/placeholder/av-dissociation-jt.png',
        hint: '🧠 Independent rhythms!'
      },

      // Unit 3: VIDEO - ECG Analysis Demonstration
      {
        id: 'jt-ecg-analysis-video',
        title: '🎥 Junctional Tachycardia ECG Analysis Demo',
        content: 'Watch detailed analysis of junctional tachycardia ECGs with step-by-step recognition techniques, P wave analysis, and AV dissociation identification.',
        type: 'video',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        videoUrl: '/lessonvideos/junctional-rhythms/junctional-tachycardia-ecg-analysis.mp4',
        hint: '🎬 See JT analysis in action!'
      },

      // Unit 3 Quiz
      {
        id: 'unit3-ecg-recognition-quiz',
        title: '🎯 Unit 3 Quiz: ECG Recognition',
        content: 'Test your ECG analysis skills for junctional tachycardia',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'An ECG shows regular narrow QRS complexes at 140 bpm with AV dissociation. What is the most likely rhythm?',
        options: [
          'Atrial flutter with 2:1 conduction',
          'Junctional tachycardia with AV dissociation',
          'Sinus tachycardia with first-degree AV block',
          'AVNRT (AV nodal reentrant tachycardia)'
        ],
        correctAnswer: 1,
        explanation: 'Regular narrow QRS tachycardia at 140 bpm with AV dissociation is classic for junctional tachycardia. AVNRT typically shows 1:1 conduction.',
        imageUrl: '/ecg/medical_accurate/tachycardia_140bpm.png',
        hint: '🎯 AV dissociation is key!'
      },

      // ===============================================
      // 🔍 UNIT 4: DIFFERENTIAL DIAGNOSIS + AUDIO (7 slides)
      // ===============================================

      // Unit 4: Highlight intro
      {
        id: 'differential-diagnosis-intro',
        title: '🔍 Unit 4: Differential Diagnosis',
        content: 'Master the critical skill of differentiating junctional tachycardia from other supraventricular tachycardias. Learn systematic approaches and key distinguishing features.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/placeholder/junctional-tachycardia-differential.png',
        hint: '🔥 Differential diagnosis mastery!'
      },

      // Unit 4: Steps - Differential Diagnosis Algorithm
      {
        id: 'differential-algorithm-steps',
        title: '👣 SVT Differential Diagnosis Algorithm',
        content: 'Systematic approach to differentiating narrow complex tachycardias',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Rate and Regularity',
            description: 'Assess heart rate and rhythm regularity',
            icon: '1️⃣'
          },
          {
            number: 2,
            title: 'P Wave Analysis',
            description: 'Identify P wave presence, morphology, and timing',
            icon: '2️⃣'
          },
          {
            number: 3,
            title: 'AV Relationship',
            description: 'Determine AV conduction pattern (1:1, 2:1, dissociation)',
            icon: '3️⃣'
          },
          {
            number: 4,
            title: 'Onset/Termination',
            description: 'Assess for abrupt vs gradual onset/termination',
            icon: '4️⃣'
          }
        ],
        hint: '👣 Systematic SVT analysis!'
      },

      // Unit 4: Accordion - Key Differentials
      {
        id: 'svt-differentials-accordion',
        title: '🎯 Key SVT Differentials',
        content: 'Major supraventricular tachycardias to distinguish from junctional tachycardia',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'AVNRT vs Junctional Tachycardia',
            content: 'AVNRT: Abrupt onset/termination, 1:1 conduction, no AV dissociation. JT: Gradual onset/termination possible, AV dissociation common, warm-up/cool-down.',
            icon: '🔄'
          },
          {
            title: 'Atrial Tachycardia vs JT',
            content: 'AT: Distinct P waves (may be abnormal), P rate = QRS rate. JT: Inverted/absent P waves, AV dissociation possible, retrograde conduction pattern.',
            icon: '🔺'
          },
          {
            title: 'Sinus Tachycardia vs JT',
            content: 'SINUS: Upright P waves in II, III, aVF, gradual onset/termination. JT: Inverted/absent P waves, may have AV dissociation, different triggers.',
            icon: '💓'
          }
        ],
        hint: '🎯 Know the key features!'
      },

      // Unit 4: Tabs - Diagnostic Clues
      {
        id: 'diagnostic-clues-tabs',
        title: '📑 Diagnostic Clues for Junctional Tachycardia',
        content: 'Clinical and ECG features that support junctional tachycardia',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: 'ECG Clues',
            content: 'AV dissociation\nRetrograde P waves\nCapture/fusion beats\nWarm-up/cool-down phenomena\nRate 100-180 bpm typical',
            icon: '📊'
          },
          {
            title: 'Clinical Context',
            content: 'Digitalis therapy\nRecent cardiac surgery\nInferior MI\nInfancy/childhood (JET)\nGradual symptom onset',
            icon: '🏥'
          },
          {
            title: 'Response to Maneuvers',
            content: 'Valsalva: May slow rate but not terminate\nAdenosine: May show AV dissociation\nCarotid massage: Variable response\nUnlike AVNRT - rarely terminates',
            icon: '🩺'
          }
        ],
        hint: '📑 Clues point to JT!'
      },

      // Unit 4: Flashcard - Quick Differentiation
      {
        id: 'quick-differentiation-jt-flashcard',
        title: '🧠 Quick JT Differentiation',
        content: 'Rapid recognition techniques for junctional tachycardia',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcardFront: '⚡ Quick way to differentiate junctional tachycardia from AVNRT?',
        flashcardBack: 'Look for AV dissociation!\n\nAVNRT: 1:1 AV conduction, no dissociation\nJT: AV dissociation common, capture beats\n\nAlso: Gradual onset favors JT vs abrupt AVNRT',
        imageUrl: '/placeholder/jt-vs-avnrt-comparison.png',
        hint: '🧠 AV dissociation is key!'
      },

      // Unit 4: STRATEGIC AUDIO (Differential Diagnosis Expert Analysis)
      {
        id: 'differential-diagnosis-jt-audio',
        title: '🎵 Differential Diagnosis Audio Analysis',
        content: 'Listen to expert cardiologist analyze challenging SVT cases and demonstrate systematic approach to differentiating junctional tachycardia from other narrow complex tachycardias.',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/junctional-rhythms/junctional-tachycardia-differential.mp3',
        hint: '🎧 Expert SVT differentiation!'
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
        animation: 'fade',
        question: 'A patient has narrow complex tachycardia at 160 bpm with gradual onset and visible AV dissociation. What is the most likely diagnosis?',
        options: [
          'AVNRT (AV nodal reentrant tachycardia)',
          'Junctional tachycardia with AV dissociation',
          'Atrial flutter with variable conduction',
          'Sinus tachycardia with aberrant conduction'
        ],
        correctAnswer: 1,
        explanation: 'Narrow complex tachycardia with gradual onset and AV dissociation strongly suggests junctional tachycardia. AVNRT typically has abrupt onset and 1:1 conduction.',
        imageUrl: '/placeholder/junctional-tachycardia-av-dissociation.png',
        hint: '🎯 Gradual onset + AV dissociation!'
      },

      // ===============================================
      // 🏥 UNIT 5: CLINICAL CONTEXT AND PRESENTATIONS (6 slides)
      // ===============================================

      // Unit 5: Highlight intro
      {
        id: 'clinical-context-intro',
        title: '🏥 Unit 5: Clinical Context and Presentations',
        content: 'Understand junctional tachycardia in clinical context: patient presentations, hemodynamic effects, age-related considerations, and prognostic implications.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/placeholder/junctional-tachycardia-clinical.png',
        hint: '🔥 Clinical correlation!'
      },

      // Unit 5: Tabs - Clinical Presentations by Age
      {
        id: 'age-presentations-tabs',
        title: '📑 Clinical Presentations by Age Group',
        content: 'How junctional tachycardia presents across different age groups',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: 'Infants/Children (JET)',
            content: 'PRESENTATION: Congenital junctional ectopic tachycardia\nFEATURES: Incessant, difficult to control\nCOMPLICATIONS: Cardiomyopathy, heart failure\nMANAGEMENT: Aggressive rate control, cooling',
            icon: '👶'
          },
          {
            title: 'Adults (Acquired)',
            content: 'CAUSES: Digitalis toxicity, ischemia, surgery\nSYMPTOMS: Palpitations, chest pain, dyspnea\nTOLERANCE: Variable based on underlying heart disease\nPROGNOSIS: Often reversible with treatment',
            icon: '👨'
          },
          {
            title: 'Elderly (High Risk)',
            content: 'CONTEXT: Often digitalis-related\nCOMORBIDITIES: Multiple cardiac conditions\nHEMODYNAMICS: Less well tolerated\nMANAGEMENT: Careful drug monitoring needed',
            icon: '👴'
          }
        ],
        hint: '📑 Age matters for presentation!'
      },

      // Unit 5: Accordion - Hemodynamic Consequences
      {
        id: 'hemodynamic-consequences-accordion',
        title: '🎯 Hemodynamic Consequences',
        content: 'How junctional tachycardia affects cardiac function',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Rate-Related Effects',
            content: 'Higher rates (>150) reduce diastolic filling time. Decreased stroke volume and cardiac output. May precipitate ischemia in coronary disease patients.',
            icon: '💓'
          },
          {
            title: 'AV Dissociation Effects',
            content: 'Loss of AV synchrony reduces atrial contribution to ventricular filling. Decreased preload and cardiac output by 15-20%. May cause cannon A waves in JVP.',
            icon: '🔀'
          },
          {
            title: 'Long-term Consequences',
            content: 'Persistent tachycardia can lead to tachycardia-induced cardiomyopathy. Particularly concerning in children with JET. Reversible with rate control.',
            icon: '⏰'
          }
        ],
        hint: '🎯 Rate and AV synchrony matter!'
      },

      // Unit 5: Steps - Clinical Assessment
      {
        id: 'clinical-assessment-jt-steps',
        title: '👣 Clinical Assessment of Junctional Tachycardia',
        content: 'Systematic approach to evaluating patients with junctional tachycardia',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Hemodynamic Status',
            description: 'Assess blood pressure, perfusion, signs of heart failure',
            icon: '1️⃣'
          },
          {
            number: 2,
            title: 'Symptom Evaluation',
            description: 'Document palpitations, chest pain, dyspnea, syncope',
            icon: '2️⃣'
          },
          {
            number: 3,
            title: 'Underlying Cause Search',
            description: 'Check for digitalis use, recent surgery, ischemia',
            icon: '3️⃣'
          },
          {
            number: 4,
            title: 'Risk Stratification',
            description: 'Assess for structural heart disease, age factors',
            icon: '4️⃣'
          }
        ],
        hint: '👣 Comprehensive assessment!'
      },

      // Unit 5: Flashcard - JET Special Considerations
      {
        id: 'jet-considerations-flashcard',
        title: '🧠 JET Special Considerations',
        content: 'Understanding junctional ectopic tachycardia in children',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcardFront: '👶 What makes JET (Junctional Ectopic Tachycardia) in children special?',
        flashcardBack: 'JET is often INCESSANT (continuous):\n\n• Leads to cardiomyopathy if untreated\n• Very difficult to control pharmacologically\n• May require hypothermia, pacing\n• Can be post-surgical complication\n• Prognosis depends on rate control',
        imageUrl: '/placeholder/jet-pediatric-considerations.png',
        hint: '🧠 Incessant and dangerous!'
      },

      // Unit 5 Quiz
      {
        id: 'unit5-clinical-context-quiz',
        title: '🎯 Unit 5 Quiz: Clinical Context',
        content: 'Test your understanding of clinical aspects',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'A 6-month-old infant has incessant junctional tachycardia at 180 bpm with signs of heart failure. What is the most concerning complication?',
        options: [
          'Immediate risk of sudden cardiac death',
          'Development of tachycardia-induced cardiomyopathy',
          'Progression to ventricular tachycardia',
          'Risk of stroke from atrial thrombus'
        ],
        correctAnswer: 1,
        explanation: 'Incessant junctional tachycardia in infants (JET) commonly leads to tachycardia-induced cardiomyopathy due to persistently elevated heart rates.',
        imageUrl: '/placeholder/jet-cardiomyopathy.png',
        hint: '🎯 Think tachycardia-induced cardiomyopathy!'
      },

      // ===============================================
      // 🚨 UNIT 6: MANAGEMENT AND TREATMENT + AUDIO (7 slides)
      // ===============================================

      // Unit 6: Highlight intro
      {
        id: 'management-intro',
        title: '🚨 Unit 6: Management and Treatment',
        content: 'Master evidence-based management of junctional tachycardia. Learn acute treatment strategies, long-term management, and special considerations for different patient populations.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/placeholder/junctional-tachycardia-management.png',
        hint: '🔥 Management expertise!'
      },

      // Unit 6: Steps - Acute Management Algorithm
      {
        id: 'acute-management-steps',
        title: '👣 Acute Management Algorithm',
        content: 'Systematic approach to acute junctional tachycardia management',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Hemodynamic Assessment',
            description: 'Evaluate stability, blood pressure, perfusion',
            icon: '1️⃣'
          },
          {
            number: 2,
            title: 'Identify Underlying Cause',
            description: 'Check digitalis levels, look for ischemia, recent surgery',
            icon: '2️⃣'
          },
          {
            number: 3,
            title: 'Address Reversible Factors',
            description: 'Stop digitalis, treat ischemia, correct electrolytes',
            icon: '3️⃣'
          },
          {
            number: 4,
            title: 'Consider Rate/Rhythm Control',
            description: 'Based on mechanism, hemodynamics, patient factors',
            icon: '4️⃣'
          }
        ],
        hint: '👣 Systematic acute approach!'
      },

      // Unit 6: Tabs - Treatment Strategies
      {
        id: 'treatment-strategies-tabs',
        title: '📑 Treatment Strategies by Mechanism',
        content: 'Tailored treatment approaches based on underlying mechanism',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: 'Automatic JT Treatment',
            content: 'DIGITALIS TOXICITY: Stop drug, Fab fragments if severe\nISCHEMIA: Revascularization, medical management\nMETABOLIC: Correct underlying abnormalities\nRATE CONTROL: Beta-blockers, calcium channel blockers',
            icon: '⚡'
          },
          {
            title: 'Reentrant JT Treatment',
            content: 'ACUTE: Adenosine may break circuit\nCARDIOVERSION: If hemodynamically unstable\nPREVENTION: Antiarrhythmics (flecainide, propafenone)\nABLATION: Consider for recurrent episodes',
            icon: '🔄'
          },
          {
            title: 'JET in Children',
            content: 'RATE CONTROL: Amiodarone, beta-blockers\nHYPOTHERMIA: Core cooling to 35°C\nPACING: Atrial overdrive pacing\nSURGICAL: Consider if post-operative',
            icon: '👶'
          }
        ],
        hint: '📑 Mechanism-specific treatment!'
      },

      // Unit 6: Accordion - Drug Considerations
      {
        id: 'drug-considerations-accordion',
        title: '🎯 Pharmacologic Considerations',
        content: 'Important drug considerations in junctional tachycardia management',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Adenosine Use',
            content: 'May temporarily terminate reentrant JT. Usually causes AV block revealing underlying rhythm in automatic forms. Can help with diagnostic differentiation.',
            icon: '💉'
          },
          {
            title: 'Beta-blockers/CCBs',
            content: 'Effective for rate control in automatic JT. Avoid in severe heart failure. Verapamil contraindicated in children <1 year. Monitor for excessive bradycardia.',
            icon: '🛡️'
          },
          {
            title: 'Antiarrhythmics',
            content: 'Amiodarone most effective for JET in children. Flecainide for reentrant forms. Avoid class IA drugs (can worsen digitalis toxicity). Monitor for proarrhythmia.',
            icon: '⚗️'
          }
        ],
        hint: '🎯 Drug selection matters!'
      },

      // Unit 6: Flashcard - When to Worry
      {
        id: 'when-worry-jt-flashcard',
        title: '🧠 When to Worry About JT',
        content: 'Red flags requiring urgent intervention',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcardFront: '🚨 When does junctional tachycardia require urgent intervention?',
        flashcardBack: 'URGENT situations:\n\n• Hemodynamic instability\n• Rates >180 bpm (especially children)\n• Signs of heart failure\n• Incessant JET in infants\n• Digitalis toxicity progression\n• Post-cardiac surgery',
        imageUrl: '/placeholder/junctional-tachycardia-emergencies.png',
        hint: '🧠 Know when to act fast!'
      },

      // Unit 6: Long-term Management
      {
        id: 'long-term-management',
        title: '📅 Long-term Management and Follow-up',
        content: 'Most junctional tachycardia episodes are transient and resolve with treatment of underlying causes. Long-term management focuses on preventing recurrence, monitoring for cardiomyopathy (especially in JET), and managing underlying conditions. Regular follow-up with ECG monitoring is essential.',
        type: 'text',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        imageUrl: '/placeholder/long-term-jt-management.png',
        hint: '📅 Long-term strategy important!'
      },

      // Unit 6: STRATEGIC AUDIO (Management Mastery)
      {
        id: 'management-mastery-jt-audio',
        title: '🎵 Management Mastery Audio',
        content: 'Listen to expert clinician discuss management pearls, challenging cases, and long-term follow-up strategies. Celebrate your junctional tachycardia mastery achievement!',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/junctional-rhythms/junctional-tachycardia-mastery.mp3',
        hint: '🎧 Master JT management!'
      },

      // Unit 6 Quiz
      {
        id: 'unit6-management-quiz',
        title: '🎯 Unit 6 Quiz: Management',
        content: 'Test your management expertise',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'A patient with digitalis toxicity develops junctional tachycardia at 160 bpm with hemodynamic instability. What is the MOST appropriate immediate management?',
        options: [
          'Synchronized cardioversion',
          'Stop digitalis and consider digoxin Fab fragments',
          'Adenosine 6 mg IV push',
          'Amiodarone loading dose'
        ],
        correctAnswer: 1,
        explanation: 'In digitalis toxicity with junctional tachycardia, stopping digitalis and considering Fab fragments is the priority. Cardioversion can be dangerous in digitalis toxicity.',
        imageUrl: '/placeholder/digitalis-toxicity-jt-management.png',
        hint: '🎯 Address the cause first!'
      }
    ],
    
    summary: "🏆 Congratulations on mastering Junctional Tachycardia! You've achieved comprehensive expertise in recognition, mechanisms, differential diagnosis, clinical context, and management. You can now confidently identify JT patterns, understand automatic vs reentrant mechanisms, and implement appropriate clinical interventions.",
    
    keyPoints: [
      "Junctional tachycardia: >100 bpm from AV junction (usually 100-180 bpm)",
      "Two mechanisms: Enhanced automaticity vs AV nodal reentry",
      "Automatic forms show warm-up/cool-down, gradual onset/termination",
      "AV dissociation common, helps distinguish from other SVTs",
      "Digitalis toxicity is classic cause of automatic JT",
      "JET in children can cause tachycardia-induced cardiomyopathy",
      "Treatment focuses on underlying cause and rate control",
      "Adenosine may help differentiate mechanism types"
    ],
    
    resources: [
      {
        title: "Advanced JT Analysis Tool",
        url: "/resources/junctional-tachycardia-analyzer",
        type: "tool",
        description: "Interactive junctional tachycardia analysis and differentiation tool"
      },
      {
        title: "JET Management Protocol",
        url: "/resources/jet-pediatric-protocol",
        type: "reference",
        description: "Comprehensive protocol for managing junctional ectopic tachycardia in children"
      },
      {
        title: "SVT Differential Guide",
        url: "/resources/svt-differential-guide",
        type: "reference",
        description: "Complete guide to differentiating supraventricular tachycardias"
      }
    ]
  },
  
  // ============= ENHANCED FINAL ASSESSMENT =============
  tasks: [
    {
      id: 'final-jt-mastery-assessment',
      type: 'final-assessment',
      xp: 50,
      audio: {
        mainNarration: {
          audioUrl: '/lessonaudio/module4/lesson32/mastery-celebration.mp3',
          duration: 12,
          transcript: "Exceptional achievement! You've mastered junctional tachycardia - one of the most complex arrhythmias requiring understanding of both automatic and reentrant mechanisms. Your expertise in differential diagnosis and management will be invaluable in clinical practice."
        }
      },
      images: {
        mainImage: '/placeholder/junctional-tachycardia-mastery-final.png',
        slideImages: []
      },
      content: {
        prerequisiteMessage: "🏆 Final Assessment: Master all 6 units to earn your Junctional Tachycardia Expert Certification!",
        questions: [
          {
            id: "jt-definition",
            type: "multiple-choice",
            question: "What heart rate defines junctional tachycardia?",
            options: [
              "> 80 bpm (faster than normal sinus)",
              "> 100 bpm (true tachycardia threshold)",
              "> 120 bpm (rapid tachycardia)",
              "> 150 bpm (very fast tachycardia)"
            ],
            correctAnswer: 1,
            explanation: "Junctional tachycardia is defined as >100 bpm from the AV junction, distinguishing it from accelerated junctional rhythm (60-100 bpm).",
            imageUrl: "/ecg/medical_accurate/tachycardia_110bpm.png"
          },
          {
            id: "jt-mechanism-differentiation",
            type: "multiple-choice",
            question: "What distinguishes automatic junctional tachycardia from reentrant forms?",
            options: [
              "QRS width differs between the two types",
              "Automatic shows gradual warm-up/cool-down phenomena",
              "Reentrant forms always have faster rates",
              "P wave morphology is completely different"
            ],
            correctAnswer: 1,
            explanation: "Automatic junctional tachycardia characteristically shows gradual warm-up and cool-down, while reentrant forms have abrupt onset and termination.",
            imageUrl: "/placeholder/automatic-vs-reentrant-jt.png"
          },
          {
            id: "jt-differential-diagnosis",
            type: "multiple-choice",
            question: "What ECG finding best distinguishes junctional tachycardia from AVNRT?",
            options: [
              "QRS width differences",
              "Presence of AV dissociation",
              "Different heart rate ranges",
              "P wave axis variations"
            ],
            correctAnswer: 1,
            explanation: "AV dissociation commonly occurs in junctional tachycardia but is rare in AVNRT, which typically shows 1:1 AV conduction.",
            imageUrl: "/placeholder/jt-vs-avnrt-av-dissociation.png"
          },
          {
            id: "jet-management",
            type: "multiple-choice",
            question: "A 6-month-old has incessant junctional tachycardia at 180 bpm with heart failure. What is the most concerning complication?",
            options: [
              "Immediate sudden cardiac death risk",
              "Development of tachycardia-induced cardiomyopathy",
              "Progression to ventricular tachycardia",
              "Risk of embolic stroke"
            ],
            correctAnswer: 1,
            explanation: "Incessant junctional tachycardia in infants (JET) commonly leads to tachycardia-induced cardiomyopathy due to persistently elevated heart rates.",
            imageUrl: "/placeholder/jet-cardiomyopathy-risk.png"
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
