import { Lesson } from '../types/learning';

export const optimizedLesson31: Lesson = {
  id: 'lesson-4-3-optimized',
  moduleId: 'module-4',
  title: "Accelerated Junctional Rhythm Mastery",
  description: "Master accelerated junctional rhythms through 6 comprehensive units with medical-accurate ECGs and enhanced automaticity concepts",
  order: 3,
  estimatedTime: 20,

  content: {
    type: 'mixed',
    introduction: "⚡ Welcome to Accelerated Junctional Rhythm Mastery! Learn when the AV junction speeds up beyond its escape rate through 6 progressive units with medical-accurate ECGs, strategic audio, and comprehensive assessments. Master recognition, mechanisms, and clinical management.",
    sections: [
      {
        id: 'accelerated-junctional-overview',
        title: '⚡ Accelerated Junctional Overview',
        content: 'UNIT 1: Foundation → UNIT 2: Enhanced Automaticity → UNIT 3: Rate Recognition → UNIT 4: Differential Diagnosis → UNIT 5: Clinical Context → UNIT 6: Management'
      }
    ],
    slides: [
      
      // ===============================================
      // ⚡ UNIT 1: ACCELERATED JUNCTIONAL FOUNDATION (7 slides)
      // ===============================================
      
      // Unit 1: Highlight intro
      {
        id: 'accelerated-junctional-foundation-intro',
        title: '⚡ Unit 1: Accelerated Junctional Foundation',
        content: 'Master the fundamentals of accelerated junctional rhythm - when the AV junction exceeds its normal escape rate but stays below tachycardia. Learn recognition, characteristics, and enhanced automaticity.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/placeholder/accelerated-junctional-rhythm-foundation.png',
        hint: '🔥 The junction speeds up!'
      },

      // 🎬 YOUTUBE VIDEO: Inferior STEMI Recognition
      {
        id: 'youtube-inferior-stemi',
        title: '🎬 Inferior STEMI Recognition - Lead II, III, aVF Changes',
        content: 'Master inferior STEMI recognition in leads II, III, and aVF. Essential skill for detecting inferior wall myocardial infarction!',
        type: 'youtube',
        youtubeId: 'nkrJKfwqbzU',
        videoDuration: 420,
        minimumWatchTime: 360,
        requireFullWatch: true,
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        hint: '🚨 Critical STEMI recognition skills!'
      },

      // 🎬 YOUTUBE VIDEO: ACLS Rhythms
      {
        id: 'youtube-acls-rhythms',
        title: '🎬 ACLS ECG Rhythm Recognition Training',
        content: 'Comprehensive ACLS rhythm recognition including junctional rhythms. Master emergency cardiac rhythms for clinical practice!',
        type: 'youtube',
        youtubeId: 'SQXl7IqRdpM',
        videoDuration: 900,
        minimumWatchTime: 720,
        requireFullWatch: true,
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        hint: '🏥 Emergency rhythm recognition!'
      },

      // Unit 1: Flashcard - Definition
      {
        id: 'accelerated-junctional-definition-flashcard',
        title: '🧠 Accelerated Junctional Definition',
        content: 'Learn the precise definition of accelerated junctional rhythm',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcardFront: '⚡ What defines Accelerated Junctional Rhythm?',
        flashcardBack: 'AV junction pacing at 60-100 bpm - faster than escape (40-60) but slower than tachycardia (>100).\n\nMECHANISM: Enhanced automaticity\nP WAVES: Inverted/absent/retrograde\nQRS: Narrow (<120ms)',
        imageUrl: '/placeholder/accelerated-junctional-rhythm-ecg.png',
        hint: '🧠 Flip to learn!'
      },

      // Unit 1: Steps - Recognition Process
      {
        id: 'accelerated-junctional-recognition-steps',
        title: '👣 Accelerated Junctional Recognition',
        content: 'Step-by-step approach to identifying accelerated junctional rhythm',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Rate Assessment',
            description: 'Confirm rate 60-100 bpm (accelerated zone)',
            icon: '1️⃣'
          },
          {
            number: 2,
            title: 'P Wave Analysis',
            description: 'Look for inverted, absent, or retrograde P waves',
            icon: '2️⃣'
          },
          {
            number: 3,
            title: 'QRS Assessment',
            description: 'Verify narrow QRS <120ms (supraventricular)',
            icon: '3️⃣'
          },
          {
            number: 4,
            title: 'Regularity Check',
            description: 'Confirm regular rhythm with consistent intervals',
            icon: '4️⃣'
          }
        ],
        hint: '👣 Follow the recognition steps!'
      },

      // Unit 1: Tabs - Rate Classifications
      {
        id: 'junctional-rate-classification-tabs',
        title: '📑 Junctional Rate Classifications',
        content: 'Understanding the complete spectrum of junctional rhythm rates',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: 'Escape (40-60 bpm)',
            content: 'MECHANISM: Backup pacemaker\nTRIGGER: SA node failure or suppression\nCLINICAL: Protective, often well-tolerated\nTREATMENT: Usually observation',
            icon: '🐌'
          },
          {
            title: 'Accelerated (60-100 bpm)',
            content: 'MECHANISM: Enhanced automaticity\nTRIGGER: Increased sympathetic tone, drugs\nCLINICAL: May compete with sinus rhythm\nTREATMENT: Address underlying cause',
            icon: '⚡'
          },
          {
            title: 'Tachycardia (>100 bpm)',
            content: 'MECHANISM: Abnormal enhanced automaticity\nTRIGGER: Digitalis toxicity, ischemia\nCLINICAL: Usually symptomatic\nTREATMENT: Urgent intervention needed',
            icon: '🚀'
          }
        ],
        hint: '📑 Rate determines the category!'
      },

      // Unit 1: Accordion - Enhanced Automaticity Mechanism
      {
        id: 'enhanced-automaticity-accordion',
        title: '🎯 Enhanced Automaticity Mechanism',
        content: 'Understanding how junctional cells increase their firing rate',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Increased Phase 4 Slope',
            content: 'Enhanced automaticity occurs when phase 4 depolarization becomes steeper. Increased sodium influx and decreased potassium efflux accelerate the approach to threshold.',
            icon: '📈'
          },
          {
            title: 'Sympathetic Stimulation',
            content: 'Catecholamines (epinephrine, norepinephrine) increase cAMP levels, enhancing If (funny current) and accelerating spontaneous depolarization rate.',
            icon: '🧬'
          },
          {
            title: 'Drug Effects',
            content: 'Digitalis toxicity, atropine, and other drugs can enhance automaticity by altering sodium-potassium pump activity or increasing intracellular calcium.',
            icon: '💊'
          }
        ],
        hint: '🎯 Click to explore mechanisms!'
      },

      // Unit 1: Flashcard - Rate Memory Aid
      {
        id: 'rate-memory-flashcard',
        title: '🧠 Rate Memory Aid',
        content: 'Easy way to remember junctional rhythm rates',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcardFront: '📊 Memory aid: How to remember accelerated junctional rate?',
        flashcardBack: '"60-100 = Accelerated Zone" - Above escape (40-60) but below tachy (100+).\n\nThink: Normal heart rate range but from wrong place!\n\n40-60: Escape\n60-100: Accelerated\n>100: Tachycardia',
        imageUrl: '/placeholder/junctional-rate-spectrum.png',
        hint: '🧠 Easy memory trick!'
      },

      // Unit 1 Quiz
      {
        id: 'unit1-accelerated-junctional-foundation-quiz',
        title: '🎯 Unit 1 Quiz: Accelerated Junctional Foundation',
        content: 'Test your understanding of accelerated junctional rhythm basics',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'What heart rate range defines accelerated junctional rhythm?',
        options: [
          '40-60 bpm (same as escape rhythm)',
          '60-100 bpm (accelerated but not tachycardia)',
          '100-150 bpm (junctional tachycardia range)',
          '50-80 bpm (overlapping with sinus bradycardia)'
        ],
        correctAnswer: 1,
        explanation: 'Accelerated junctional rhythm is defined as 60-100 bpm - faster than the normal junctional escape rate (40-60 bpm) but slower than tachycardia (>100 bpm).',
        imageUrl: '/placeholder/ajr-quiz-example.png',
        hint: '🎯 Think accelerated zone!'
      },

      // ===============================================
      // 🧬 UNIT 2: ENHANCED AUTOMATICITY MECHANISMS + AUDIO (8 slides)
      // ===============================================

      // Unit 2: Highlight intro
      {
        id: 'enhanced-automaticity-mechanisms-intro',
        title: '🧬 Unit 2: Enhanced Automaticity Mechanisms',
        content: 'Dive deep into the cellular and molecular mechanisms that cause junctional cells to fire faster than their normal escape rate. Understand automaticity, triggers, and pathophysiology.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/placeholder/enhanced-automaticity-intro.png',
        hint: '🔥 Cellular mechanisms revealed!'
      },

      // Unit 2: Tabs - Automaticity Factors
      {
        id: 'automaticity-factors-tabs',
        title: '📑 Automaticity Enhancement Factors',
        content: 'Key factors that increase junctional automaticity',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: 'Sympathetic Drive',
            content: 'MECHANISM: ↑ cAMP → ↑ If current\nTRIGGERS: Stress, exercise, catecholamines\nEFFECT: Steeper phase 4 slope\nCLINICAL: Most common cause of acceleration',
            icon: '🧬'
          },
          {
            title: 'Metabolic Factors',
            content: 'MECHANISM: Altered ion gradients\nTRIGGERS: Hypoxia, acidosis, electrolyte shifts\nEFFECT: Enhanced automaticity\nCLINICAL: Often seen in critically ill patients',
            icon: '⚗️'
          },
          {
            title: 'Pharmacologic',
            content: 'MECHANISM: Na+/K+ pump inhibition\nTRIGGERS: Digitalis, atropine, stimulants\nEFFECT: Increased intracellular calcium\nCLINICAL: Drug-induced acceleration',
            icon: '💊'
          }
        ],
        hint: '📑 Multiple enhancement pathways!'
      },

      // Unit 2: Steps - Cellular Action Potential Changes
      {
        id: 'action-potential-changes-steps',
        title: '👣 Action Potential Changes in Enhanced Automaticity',
        content: 'How enhanced automaticity alters junctional cell action potentials',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Steeper Phase 4',
            description: 'Enhanced If current creates steeper diastolic depolarization',
            icon: '1️⃣'
          },
          {
            number: 2,
            title: 'Faster Threshold Approach',
            description: 'Cells reach threshold potential more quickly',
            icon: '2️⃣'
          },
          {
            number: 3,
            title: 'Shortened Cycle Length',
            description: 'Reduced time between action potentials',
            icon: '3️⃣'
          },
          {
            number: 4,
            title: 'Increased Firing Rate',
            description: 'Results in 60-100 bpm instead of 40-60 bpm',
            icon: '4️⃣'
          }
        ],
        hint: '👣 Cellular changes drive rate!'
      },

      // Unit 2: Accordion - Common Triggers
      {
        id: 'accelerated-junctional-triggers-accordion',
        title: '🎯 Common Clinical Triggers',
        content: 'Real-world conditions that trigger accelerated junctional rhythm',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Digitalis Toxicity',
            content: 'Most classic cause. Digitalis inhibits Na+/K+ ATPase, increasing intracellular calcium and enhanced automaticity. Often presents with accelerated junctional rhythm as early sign.',
            icon: '💊'
          },
          {
            title: 'Acute Myocardial Ischemia',
            content: 'Ischemia affects AV node blood supply, altering cellular metabolism. Results in enhanced automaticity and competition between sinus and junctional pacemakers.',
            icon: '💔'
          },
          {
            title: 'Increased Sympathetic Tone',
            content: 'Stress, fever, hyperthyroidism, or catecholamine administration can enhance junctional automaticity through beta-adrenergic stimulation and increased cAMP.',
            icon: '🔥'
          }
        ],
        hint: '🎯 Know the common triggers!'
      },

      // Unit 2: Flashcard - Digitalis Connection
      {
        id: 'digitalis-connection-flashcard',
        title: '🧠 Digitalis-Accelerated Junctional Connection',
        content: 'Understanding the classic digitalis toxicity presentation',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcardFront: '💊 Why is accelerated junctional rhythm a classic sign of digitalis toxicity?',
        flashcardBack: 'Digitalis blocks Na+/K+ pump → ↑ intracellular Ca2+ → enhanced automaticity.\n\nAJ rhythm is early, reliable sign before more serious arrhythmias develop.\n\nProgression: AJR → Junctional Tachy → VT/VF',
        imageUrl: '/placeholder/digitalis-toxicity-ajr.png',
        hint: '🧠 Classic toxicity sign!'
      },

      // Unit 2: STRATEGIC AUDIO (Enhanced Automaticity Review)
      {
        id: 'enhanced-automaticity-audio-lesson',
        title: '🎵 Enhanced Automaticity Audio Review',
        content: 'Listen to expert explanation of enhanced automaticity mechanisms and clinical triggers. Focus on cellular changes and pathophysiology.',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/junctional-rhythms/enhanced-automaticity-mechanisms.mp3',
        hint: '🎧 Expert automaticity insights!'
      },

      // Unit 2 Quiz
      {
        id: 'unit2-enhanced-automaticity-quiz',
        title: '🎯 Unit 2 Quiz: Enhanced Automaticity',
        content: 'Test your understanding of automaticity mechanisms',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'What is the primary cellular mechanism of enhanced automaticity in accelerated junctional rhythm?',
        options: [
          'Decreased potassium permeability during phase 3',
          'Increased sodium-calcium exchange during phase 0',
          'Steeper phase 4 diastolic depolarization slope',
          'Prolonged phase 2 plateau duration'
        ],
        correctAnswer: 2,
        explanation: 'Enhanced automaticity results from steeper phase 4 diastolic depolarization, primarily due to increased If (funny current) and altered ion channel activity.',
        imageUrl: '/placeholder/phase4-enhanced-automaticity.png',
        hint: '🎯 Think phase 4 slope!'
      },

      // ===============================================
      // 📊 UNIT 3: RATE RECOGNITION AND ECG ANALYSIS + VIDEO (7 slides)
      // ===============================================

      // Unit 3: Highlight intro
      {
        id: 'rate-recognition-intro',
        title: '📊 Unit 3: Rate Recognition and ECG Analysis',
        content: 'Master the art of recognizing accelerated junctional rhythm on ECG. Learn rate measurement techniques, P wave analysis, and morphological characteristics.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/placeholder/ajr-rate-recognition.png',
        hint: '🔥 ECG analysis mastery!'
      },

      // Unit 3: Steps - Rate Measurement Techniques
      {
        id: 'rate-measurement-steps',
        title: '👣 Rate Measurement Techniques',
        content: 'Accurate methods for measuring heart rate in accelerated junctional rhythm',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'R-R Interval Method',
            description: 'Most accurate: Count small squares between R waves, divide 1500',
            icon: '1️⃣'
          },
          {
            number: 2,
            title: '6-Second Rule',
            description: 'Count QRS complexes in 6 seconds, multiply by 10',
            icon: '2️⃣'
          },
          {
            number: 3,
            title: 'Sequence Method',
            description: 'Count R waves: 300-150-100-75-60-50 rule',
            icon: '3️⃣'
          },
          {
            number: 4,
            title: 'Verify Range',
            description: 'Confirm rate falls in 60-100 bpm accelerated zone',
            icon: '4️⃣'
          }
        ],
        hint: '👣 Accurate measurement is key!'
      },

      // Unit 3: Tabs - P Wave Patterns
      {
        id: 'p-wave-patterns-tabs',
        title: '📑 P Wave Patterns in Accelerated Junctional',
        content: 'Different P wave presentations in accelerated junctional rhythm',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: 'Inverted P Waves',
            content: 'LOCATION: Before QRS\nLEADS: II, III, aVF show inversion\nMECHANISM: Retrograde atrial activation\nTIMING: Short PR interval <120ms',
            icon: '🔽'
          },
          {
            title: 'Absent P Waves',
            content: 'APPEARANCE: Hidden in QRS complex\nMECHANISM: Simultaneous AV activation\nCLINICAL: Most common presentation\nDIAGNOSIS: Based on narrow QRS, rate 60-100',
            icon: '👻'
          },
          {
            title: 'Retrograde P Waves',
            content: 'LOCATION: After QRS complex\nAPPEARANCE: Inverted in inferior leads\nMECHANISM: Delayed retrograde conduction\nTIMING: Short RP interval',
            icon: '🔄'
          }
        ],
        hint: '📑 P waves tell the story!'
      },

      // Unit 3: Accordion - ECG Characteristics
      {
        id: 'ecg-characteristics-accordion',
        title: '🎯 Complete ECG Characteristics',
        content: 'Comprehensive ECG features of accelerated junctional rhythm',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Rate: 60-100 bpm',
            content: 'Distinguishing feature from escape (40-60) and tachycardia (>100). Regular rhythm with consistent R-R intervals. Rate may vary slightly with autonomic tone.',
            icon: '📊'
          },
          {
            title: 'QRS: Narrow <120ms',
            content: 'Supraventricular origin produces narrow QRS. Morphology identical to sinus rhythm QRS. May be wide if pre-existing bundle branch block present.',
            icon: '📏'
          },
          {
            title: 'AV Dissociation Possible',
            content: 'May compete with sinus rhythm, creating isorhythmic AV dissociation. Fusion beats possible when rates are similar. Capture beats may occur.',
            icon: '🤝'
          }
        ],
        hint: '🎯 Complete ECG picture!'
      },

      // Unit 3: Flashcard - Competition Recognition
      {
        id: 'competition-recognition-flashcard',
        title: '🧠 Rhythm Competition Recognition',
        content: 'Identifying when accelerated junctional competes with sinus',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcardFront: '🤝 How do you recognize competition between sinus and accelerated junctional rhythms?',
        flashcardBack: 'Look for: Variable P-QRS relationships, fusion beats, capture beats, and rate similarity (both 60-100 bpm).\n\nCalled isorhythmic AV dissociation.',
        imageUrl: '/placeholder/ajr-sinus-competition.png',
        hint: '🧠 Competition creates complexity!'
      },

      // Unit 3: VIDEO - ECG Analysis Demonstration
      {
        id: 'ecg-analysis-video',
        title: '🎥 ECG Analysis Demonstration',
        content: 'Watch detailed analysis of accelerated junctional rhythm ECGs with step-by-step measurement techniques and pattern recognition.',
        type: 'video',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        videoUrl: '/lessonvideos/junctional-rhythms/ajr-ecg-analysis.mp4',
        hint: '🎬 See analysis in action!'
      },

      // Unit 3 Quiz
      {
        id: 'unit3-rate-recognition-quiz',
        title: '🎯 Unit 3 Quiz: Rate Recognition',
        content: 'Test your ECG analysis skills for accelerated junctional rhythm',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'An ECG shows regular narrow QRS complexes at 75 bpm with no visible P waves. What is the most likely rhythm?',
        options: [
          'Sinus rhythm with blocked P waves',
          'Accelerated junctional rhythm',
          'Atrial fibrillation with regular ventricular response',
          'Junctional escape rhythm'
        ],
        correctAnswer: 1,
        explanation: 'Regular narrow QRS at 75 bpm with no visible P waves is classic for accelerated junctional rhythm (60-100 bpm range with absent P waves).',
        imageUrl: '/placeholder/ajr-ecg-analysis-example.png',
        hint: '🎯 Rate and P waves are key!'
      },

      // ===============================================
      // 🔍 UNIT 4: DIFFERENTIAL DIAGNOSIS + AUDIO (7 slides)
      // ===============================================

      // Unit 4: Highlight intro
      {
        id: 'differential-diagnosis-intro',
        title: '🔍 Unit 4: Differential Diagnosis',
        content: 'Master the critical skill of differentiating accelerated junctional rhythm from other similar rhythms. Learn systematic approaches to distinguish from sinus rhythm, junctional escape, and other narrow complex rhythms.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/placeholder/ajr-differential-comparison.png',
        hint: '🔥 Differential diagnosis mastery!'
      },

      // Unit 4: Steps - Diagnostic Algorithm
      {
        id: 'diagnostic-algorithm-steps',
        title: '👣 Accelerated Junctional Diagnostic Algorithm',
        content: 'Systematic approach to diagnosing accelerated junctional rhythm',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Rate Classification',
            description: 'Confirm 60-100 bpm (accelerated zone)',
            icon: '1️⃣'
          },
          {
            number: 2,
            title: 'QRS Analysis',
            description: 'Verify narrow QRS <120ms (supraventricular)',
            icon: '2️⃣'
          },
          {
            number: 3,
            title: 'P Wave Assessment',
            description: 'Look for absent, inverted, or retrograde P waves',
            icon: '3️⃣'
          },
          {
            number: 4,
            title: 'Regularity Check',
            description: 'Confirm regular rhythm vs irregular alternatives',
            icon: '4️⃣'
          }
        ],
        hint: '👣 Systematic diagnosis!'
      },

      // Unit 4: Accordion - Differential Diagnosis
      {
        id: 'differential-diagnosis-accordion',
        title: '🎯 Key Differential Diagnoses',
        content: 'Main rhythms to differentiate from accelerated junctional',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Sinus Rhythm vs AJR',
            content: 'SINUS: Upright P waves in II, rate variable. AJR: Inverted/absent P waves, rate 60-100. KEY: P wave morphology in lead II is diagnostic.',
            icon: '🔄'
          },
          {
            title: 'Junctional Escape vs AJR',
            content: 'ESCAPE: Rate 40-60 bpm, backup mechanism. AJR: Rate 60-100 bpm, enhanced automaticity. KEY: Rate range is the primary differentiator.',
            icon: '⚡'
          },
          {
            title: 'Atrial Fibrillation vs AJR',
            content: 'AFIB: Irregular rhythm, fibrillatory waves. AJR: Regular rhythm, absent/inverted P waves. KEY: Regularity distinguishes these rhythms.',
            icon: '🌊'
          }
        ],
        hint: '🎯 Know the key differences!'
      },

      // Unit 4: Tabs - Comparison Table
      {
        id: 'rhythm-comparison-tabs',
        title: '📑 Rhythm Comparison Table',
        content: 'Side-by-side comparison of similar rhythms',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: 'Rate Comparison',
            content: 'SINUS BRADY: 60-100 (slower end)\nAJR: 60-100 (from junction)\nJUNC ESCAPE: 40-60\nJUNC TACHY: >100',
            icon: '📊'
          },
          {
            title: 'P Wave Comparison',
            content: 'SINUS: Upright in II, III, aVF\nAJR: Inverted/absent/retrograde\nESCAPE: Same as AJR\nTACHY: Same as AJR',
            icon: '👁️'
          },
          {
            title: 'Clinical Context',
            content: 'SINUS: Normal/physiologic\nAJR: Drug toxicity, ischemia\nESCAPE: SA node dysfunction\nTACHY: Serious pathology',
            icon: '🏥'
          }
        ],
        hint: '📑 Compare systematically!'
      },

      // Unit 4: Flashcard - Quick Differentiation
      {
        id: 'quick-differentiation-flashcard',
        title: '🧠 Quick Differentiation Tips',
        content: 'Rapid recognition techniques for accelerated junctional',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcardFront: '⚡ Quick way to distinguish accelerated junctional from sinus bradycardia?',
        flashcardBack: 'Look at P waves in lead II: Upright = Sinus, Inverted/absent = Junctional.\n\nRate 60-100 + no upright P waves in II = AJR.',
        imageUrl: '/placeholder/ajr-vs-sinus-comparison.png',
        hint: '🧠 P waves in lead II!'
      },

      // Unit 4: STRATEGIC AUDIO (Differential Diagnosis Expert Analysis)
      {
        id: 'differential-diagnosis-audio-lesson',
        title: '🎵 Differential Diagnosis Audio Analysis',
        content: 'Listen to expert cardiologist analyze challenging cases and demonstrate systematic approach to differentiating accelerated junctional rhythm from similar rhythms.',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/junctional-rhythms/ajr-differential-diagnosis.mp3',
        hint: '🎧 Expert diagnostic insights!'
      },

      // Unit 4 Quiz
      {
        id: 'unit4-differential-diagnosis-quiz',
        title: '🎯 Unit 4 Quiz: Differential Diagnosis',
        content: 'Test your differential diagnosis skills',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'A patient has a regular rhythm at 80 bpm with narrow QRS and absent P waves. What finding would MOST support accelerated junctional rhythm over atrial fibrillation?',
        options: [
          'Presence of fibrillatory waves between QRS complexes',
          'Regular R-R intervals throughout the rhythm strip',
          'Variable QRS morphology from beat to beat',
          'Heart rate variability with breathing'
        ],
        correctAnswer: 1,
        explanation: 'Regular R-R intervals distinguish accelerated junctional rhythm from atrial fibrillation, which characteristically has irregular ventricular response.',
        imageUrl: '/placeholder/ajr-vs-afib-regularity.png',
        hint: '🎯 Regularity is the key!'
      },

      // ===============================================
      // 🏥 UNIT 5: CLINICAL CONTEXT AND CAUSES (6 slides)
      // ===============================================

      // Unit 5: Highlight intro
      {
        id: 'clinical-context-intro',
        title: '🏥 Unit 5: Clinical Context and Causes',
        content: 'Understand accelerated junctional rhythm in clinical context: common causes, patient presentations, hemodynamic effects, and prognostic implications.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/placeholder/ajr-clinical-context.png',
        hint: '🔥 Clinical correlation is key!'
      },

      // Unit 5: Tabs - Common Causes
      {
        id: 'common-causes-tabs',
        title: '📑 Common Causes of Accelerated Junctional Rhythm',
        content: 'Major etiologies and their mechanisms',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: 'Digitalis Toxicity (Most Common)',
            content: 'MECHANISM: Na+/K+ ATPase inhibition\nPRESENTATION: Often early sign of toxicity\nRISK FACTORS: Elderly, renal impairment\nMANAGEMENT: Stop digitalis, check levels',
            icon: '💊'
          },
          {
            title: 'Acute MI (Especially Inferior)',
            content: 'MECHANISM: AV node ischemia/reperfusion\nTIMING: Often during acute phase\nLOCATION: RCA territory affects AV node\nPROGNOSIS: Usually transient',
            icon: '💔'
          },
          {
            title: 'Enhanced Sympathetic Tone',
            content: 'TRIGGERS: Stress, fever, hyperthyroidism\nMECHANISM: Beta-adrenergic stimulation\nCONTEXT: Often reversible cause\nTREATMENT: Address underlying condition',
            icon: '🔥'
          }
        ],
        hint: '📑 Know the common triggers!'
      },

      // Unit 5: Accordion - Clinical Presentations
      {
        id: 'clinical-presentations-accordion',
        title: '🎯 Clinical Presentations',
        content: 'How patients with accelerated junctional rhythm present',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Asymptomatic (Most Common)',
            content: 'Many patients have no symptoms due to rate in normal range (60-100 bpm). Cardiac output usually maintained. Often discovered incidentally on ECG or monitoring.',
            icon: '😊'
          },
          {
            title: 'Palpitations',
            content: 'Some patients notice rhythm change, especially if competing with sinus rhythm. May feel irregular or "skipping" beats during rhythm competition periods.',
            icon: '💓'
          },
          {
            title: 'Signs of Underlying Disease',
            content: 'Symptoms often related to underlying cause (digitalis toxicity, MI, hyperthyroidism) rather than the rhythm itself. Consider systemic evaluation.',
            icon: '🔍'
          }
        ],
        hint: '🎯 Often asymptomatic!'
      },

      // Unit 5: Steps - Clinical Assessment
      {
        id: 'clinical-assessment-steps',
        title: '👣 Clinical Assessment Approach',
        content: 'Systematic approach to evaluating patients with accelerated junctional rhythm',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Symptom Assessment',
            description: 'Evaluate for palpitations, chest pain, dyspnea, dizziness',
            icon: '1️⃣'
          },
          {
            number: 2,
            title: 'Drug History Review',
            description: 'Specifically check for digitalis, beta-blockers, calcium channel blockers',
            icon: '2️⃣'
          },
          {
            number: 3,
            title: 'Underlying Disease Search',
            description: 'Look for MI, hyperthyroidism, electrolyte abnormalities',
            icon: '3️⃣'
          },
          {
            number: 4,
            title: 'Hemodynamic Evaluation',
            description: 'Assess blood pressure, perfusion, cardiac output',
            icon: '4️⃣'
          }
        ],
        hint: '👣 Systematic clinical approach!'
      },

      // Unit 5: Flashcard - Hemodynamic Impact
      {
        id: 'hemodynamic-impact-flashcard',
        title: '🧠 Hemodynamic Impact Assessment',
        content: 'Understanding the circulatory effects of accelerated junctional rhythm',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcardFront: '💓 Why is accelerated junctional rhythm usually well-tolerated hemodynamically?',
        flashcardBack: 'Rate 60-100 bpm maintains adequate cardiac output.\n\nNo loss of atrial kick (P waves still present, just inverted).\n\nVentricular filling time preserved.',
        imageUrl: '/placeholder/ajr-hemodynamics.png',
        hint: '🧠 Rate matters for tolerance!'
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
        question: 'A 78-year-old patient on digoxin presents with accelerated junctional rhythm at 85 bpm. What is the MOST appropriate initial management?',
        options: [
          'Immediate cardioversion to restore sinus rhythm',
          'Start amiodarone to suppress the junctional rhythm',
          'Hold digoxin and check serum digoxin level',
          'Increase digoxin dose to better control heart rate'
        ],
        correctAnswer: 2,
        explanation: 'Accelerated junctional rhythm in a patient on digoxin is classic for digitalis toxicity. The appropriate response is to hold digoxin and check levels.',
        imageUrl: '/placeholder/digitalis-toxicity-management.png',
        hint: '🎯 Think digitalis toxicity!'
      },

      // ===============================================
      // 🚨 UNIT 6: MANAGEMENT AND FOLLOW-UP + AUDIO (7 slides)
      // ===============================================

      // Unit 6: Highlight intro
      {
        id: 'management-intro',
        title: '🚨 Unit 6: Management and Follow-up',
        content: 'Master evidence-based management of accelerated junctional rhythm. Learn when to observe, when to intervene, and long-term follow-up strategies.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/placeholder/ajr-management-algorithm.png',
        hint: '🔥 Management mastery!'
      },

      // Unit 6: Steps - Management Algorithm
      {
        id: 'management-algorithm-steps',
        title: '👣 Management Algorithm',
        content: 'Systematic approach to managing accelerated junctional rhythm',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Assess Hemodynamic Stability',
            description: 'Check vital signs, perfusion, symptoms',
            icon: '1️⃣'
          },
          {
            number: 2,
            title: 'Identify and Treat Causes',
            description: 'Address digitalis toxicity, ischemia, metabolic causes',
            icon: '2️⃣'
          },
          {
            number: 3,
            title: 'Monitor for Complications',
            description: 'Watch for progression to higher grade rhythms',
            icon: '3️⃣'
          },
          {
            number: 4,
            title: 'Consider Long-term Management',
            description: 'Plan follow-up, medication adjustments, monitoring',
            icon: '4️⃣'
          }
        ],
        hint: '👣 Systematic management approach!'
      },

      // Unit 6: Tabs - Treatment Options
      {
        id: 'treatment-options-tabs',
        title: '📑 Treatment Options',
        content: 'Management strategies based on underlying cause',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: 'Observation (Most Common)',
            content: 'INDICATIONS: Asymptomatic, stable hemodynamics\nMONITORING: Continuous ECG, vital signs\nDURATION: Often self-limited\nFOLLOW-UP: Outpatient monitoring',
            icon: '👁️'
          },
          {
            title: 'Causative Treatment',
            content: 'DIGITALIS: Stop drug, consider Fab fragments\nISCHEMIA: Revascularization, medical management\nMETABOLIC: Correct electrolytes, treat hyperthyroidism\nDRUGS: Discontinue offending agents',
            icon: '🎯'
          },
          {
            title: 'Symptomatic Management',
            content: 'RATE CONTROL: Usually not needed (60-100 range)\nANTICOAGULATION: Not typically required\nPACING: Rarely needed unless progression\nCARDIOVERSION: Not indicated',
            icon: '💊'
          }
        ],
        hint: '📑 Treatment depends on cause!'
      },

      // Unit 6: Accordion - Special Considerations
      {
        id: 'special-considerations-accordion',
        title: '🎯 Special Management Considerations',
        content: 'Important considerations for specific scenarios',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Digitalis Toxicity Management',
            content: 'IMMEDIATE: Stop digitalis, check levels, electrolytes. SEVERE: Consider digoxin Fab fragments. MONITORING: Continuous cardiac monitoring for progression to VT/VF.',
            icon: '💊'
          },
          {
            title: 'Post-MI Accelerated Junctional',
            content: 'MECHANISM: Usually reperfusion-related. PROGNOSIS: Generally benign, self-limited. MONITORING: Watch for higher-grade blocks. TREATMENT: Usually observation only.',
            icon: '💔'
          },
          {
            title: 'Competition with Sinus',
            content: 'PHENOMENON: Isorhythmic AV dissociation. SYMPTOMS: May cause palpitations. MANAGEMENT: Usually observation, address underlying cause. AVOID: Antiarrhythmics typically.',
            icon: '🤝'
          }
        ],
        hint: '🎯 Special scenarios need care!'
      },

      // Unit 6: Flashcard - When to Worry
      {
        id: 'when-to-worry-flashcard',
        title: '🧠 When to Worry About AJR',
        content: 'Red flags that require immediate attention',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcardFront: '🚨 What findings with accelerated junctional rhythm require immediate intervention?',
        flashcardBack: 'Hemodynamic instability, progression to higher rates (>100), signs of digitalis toxicity progression, or development of wide QRS complexes.',
        imageUrl: '/placeholder/ajr-warning-signs.png',
        hint: '🧠 Know the warning signs!'
      },

      // Unit 6: Prognosis Discussion
      {
        id: 'prognosis-discussion',
        title: '📈 Prognosis and Long-term Outlook',
        content: 'Accelerated junctional rhythm generally has excellent prognosis when underlying causes are addressed. Most cases are transient and resolve with treatment of precipitating factors. Long-term cardiac monitoring may be needed in patients with structural heart disease.',
        type: 'text',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        imageUrl: '/placeholder/ajr-prognosis.png',
        hint: '📈 Generally excellent prognosis!'
      },

      // Unit 6: STRATEGIC AUDIO (Management Mastery)
      {
        id: 'management-mastery-audio',
        title: '🎵 Management Mastery Audio',
        content: 'Listen to expert clinician discuss management pearls, common pitfalls, and long-term follow-up strategies. Celebrate your accelerated junctional rhythm mastery!',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/junctional-rhythms/ajr-management-mastery.mp3',
        hint: '🎧 Master AJR management!'
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
        question: 'A patient with accelerated junctional rhythm at 90 bpm is hemodynamically stable. What is the MOST appropriate management?',
        options: [
          'Immediate synchronized cardioversion',
          'Start amiodarone to suppress the rhythm',
          'Observe and identify/treat underlying causes',
          'Insert temporary pacemaker for rate control'
        ],
        correctAnswer: 2,
        explanation: 'Hemodynamically stable accelerated junctional rhythm typically requires observation and treatment of underlying causes rather than rhythm suppression.',
        imageUrl: '/placeholder/ajr-stable-management.png',
        hint: '🎯 Stable = observe and treat cause!'
      }
    ],
    
    summary: "🏆 Congratulations on mastering Accelerated Junctional Rhythm! You've achieved comprehensive expertise in recognition, mechanisms, differential diagnosis, clinical context, and management. You can now confidently identify AJR patterns, understand enhanced automaticity, and implement appropriate clinical management.",
    
    keyPoints: [
      "Accelerated junctional rhythm: 60-100 bpm from AV junction",
      "Enhanced automaticity is the underlying mechanism",
      "P waves are inverted, absent, or retrograde in AJR",
      "Digitalis toxicity is the most common cause",
      "Usually well-tolerated due to rate in normal range",
      "Management focuses on identifying and treating causes",
      "May compete with sinus rhythm (isorhythmic AV dissociation)",
      "Excellent prognosis when underlying causes addressed"
    ],
    
    resources: [
      {
        title: "Advanced AJR Analysis Tool",
        url: "/resources/ajr-analysis-tool",
        type: "tool",
        description: "Interactive accelerated junctional rhythm analysis and recognition"
      },
      {
        title: "Digitalis Toxicity Management",
        url: "/resources/digitalis-toxicity-protocol",
        type: "reference",
        description: "Complete protocol for managing digitalis-induced arrhythmias"
      },
      {
        title: "AJR Case Studies Collection",
        url: "/resources/ajr-case-studies",
        type: "reference",
        description: "Real-world AJR cases with expert analysis and management"
      }
    ]
  },
  
  // ============= ENHANCED FINAL ASSESSMENT =============
  tasks: [
    {
      id: 'final-ajr-mastery-assessment',
      type: 'final-assessment',
      xp: 50,
      audio: {
        mainNarration: {
          audioUrl: '/lessonaudio/junctional-rhythms/ajr-mastery-celebration.mp3',
          duration: 12,
          transcript: "Outstanding! You've mastered accelerated junctional rhythm - a key arrhythmia that bridges normal and abnormal pacing. You can now recognize enhanced automaticity, perform differential diagnosis, and implement appropriate clinical management. This knowledge will serve you well in clinical practice."
        }
      },
      images: {
        mainImage: '/placeholder/ajr-mastery-assessment.png',
        slideImages: []
      },
      content: {
        prerequisiteMessage: "🏆 Final Assessment: Master all 6 units to earn your AJR Expert Certification!",
        questions: [
          {
            id: "ajr-rate-definition",
            type: "multiple-choice",
            question: "What heart rate range defines accelerated junctional rhythm?",
            options: [
              "40-60 bpm (same as junctional escape)",
              "60-100 bpm (accelerated but not tachycardic)",
              "100-150 bpm (junctional tachycardia range)",
              "Any rate >60 bpm from junctional origin"
            ],
            correctAnswer: 1,
            explanation: "Accelerated junctional rhythm is specifically defined as 60-100 bpm - faster than escape (40-60) but slower than tachycardia (>100).",
            imageUrl: "/placeholder/ajr-final-assessment.png"
          },
          {
            id: "ajr-mechanism",
            type: "multiple-choice",
            question: "What is the primary mechanism underlying accelerated junctional rhythm?",
            options: [
              "Reentry circuits within the AV node",
              "Enhanced automaticity of junctional cells",
              "Blocked retrograde conduction to atria",
              "Triggered activity from after-depolarizations"
            ],
            correctAnswer: 1,
            explanation: "Accelerated junctional rhythm results from enhanced automaticity - increased phase 4 diastolic depolarization slope in junctional cells.",
            imageUrl: "/placeholder/enhanced-automaticity-mechanism.png"
          },
          {
            id: "ajr-digitalis-toxicity",
            type: "multiple-choice",
            question: "Why is accelerated junctional rhythm considered a classic early sign of digitalis toxicity?",
            options: [
              "Digitalis directly stimulates junctional pacemaker cells",
              "Digitalis blocks AV conduction forcing junctional escape",
              "Digitalis inhibits Na+/K+ pump enhancing automaticity",
              "Digitalis causes atrial fibrillation with regular ventricular response"
            ],
            correctAnswer: 2,
            explanation: "Digitalis toxicity inhibits the Na+/K+ ATPase pump, increasing intracellular calcium and enhancing automaticity before more serious arrhythmias develop.",
            imageUrl: "/placeholder/digitalis-mechanism-ajr.png"
          },
          {
            id: "ajr-management",
            type: "multiple-choice",
            question: "A hemodynamically stable patient has accelerated junctional rhythm at 85 bpm. What is the most appropriate management?",
            options: [
              "Immediate cardioversion to restore sinus rhythm",
              "Start antiarrhythmic drugs to suppress the rhythm",
              "Observe and identify/treat underlying causes",
              "Insert temporary pacemaker for rate control"
            ],
            correctAnswer: 2,
            explanation: "Hemodynamically stable AJR typically requires observation and treatment of underlying causes rather than rhythm suppression, as the rate is in physiologic range.",
            imageUrl: "/placeholder/ajr-management-stable.png"
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
