import { Lesson } from '@/types/learning';

// COMPREHENSIVE LESSON 23: Supraventricular Tachycardia (SVT) Mastery - Complete Clinical Coverage
export const optimizedLesson23: Lesson = {
  id: 'module-3-lesson-3',
  moduleId: 'module-3',
  title: "Supraventricular Tachycardia (SVT) Mastery",
  description: "Comprehensive SVT mastery through 6 focused learning units: Recognition, Mechanisms, AVNRT Deep Dive, AVRT & WPW, Management & Emergency Care, and Advanced Topics - with extensive multimedia content",
  order: 3,
  estimatedTime: 45,
  completed: false,
  attempts: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  content: {
    type: 'mixed',
    introduction: "⚡ Welcome to Comprehensive SVT Mastery! This is one of the most important arrhythmia lessons - SVT affects millions and requires expert recognition and management. Master all aspects through 6 detailed units with extensive multimedia content including videos, audio, and advanced ECG examples!",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your Complete SVT Learning Journey",
        content: "UNIT 1: Recognition → UNIT 2: Mechanisms → UNIT 3: AVNRT Deep Dive → UNIT 4: AVRT & WPW → UNIT 5: Management & Emergency → UNIT 6: Advanced Topics",
        mediaType: 'video'
      }
    ],
    slides: [
      
      // ===============================================
      // 🎯 UNIT 1: SVT RECOGNITION & CLASSIFICATION (9 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: SVT Recognition & Classification',
        content: 'Master comprehensive SVT identification! Learn the key features, classification systems, and advanced recognition techniques for all forms of supraventricular tachycardia.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/supraventricular_tachycardia_160bpm_1.png',
        imageAlt: 'Classic SVT ECG showing narrow complex tachycardia',
        videoUrl: '/lessonvideo/module3/lesson23/svt-recognition-intro.mp4',
        highlights: [
          '⚡ Narrow QRS complexes (<120ms)',
          '💨 Rapid rate (typically >150 bpm)',
          '🎯 Abrupt onset and termination',
          '🔄 Regular rhythm pattern',
          '📊 Multiple SVT subtypes'
        ],
        hint: '⚡ This is one of the most critical arrhythmia lessons!'
      },

      {
        id: 'svt-definition-comprehensive',
        title: 'Comprehensive SVT Definition',
        type: 'flashcard',
        flashcardFront: '⚡ What comprehensively defines supraventricular tachycardia?',
        flashcardBack: 'SVT is ANY rapid heart rhythm (>100 bpm, typically >150) originating above the ventricles with NARROW QRS complexes (<120ms). Includes AVNRT, AVRT, atrial tachycardia, sinus tachycardia, atrial flutter, and AFib. Key is supraventricular origin + narrow QRS!',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/supraventricular_tachycardia_180bpm_2.png',
        imageAlt: 'SVT definition with ECG example',
        hint: '⚡ Above ventricles + narrow + fast = SVT family!'
      },

      {
        id: 'svt-classification-system',
        title: 'Complete SVT Classification System',
        type: 'tabs',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/svt-classification-chart.png',
        imageAlt: 'Complete SVT classification flowchart',
        videoUrl: '/lessonvideo/module3/lesson23/svt-classification.mp4',
        tabs: [
          {
            title: '🔄 Reentrant SVTs',
            content: '90% of paroxysmal SVTs:\n• AVNRT (60%) - AV nodal reentry\n• AVRT (30%) - Accessory pathway\n• Atrial flutter (5%)\n• Intra-atrial reentry (rare)'
          },
          {
            title: '🎯 Automatic SVTs', 
            content: '10% of paroxysmal SVTs:\n• Focal atrial tachycardia\n• Junctional tachycardia\n• Multifocal atrial tachycardia\n• Inappropriate sinus tachycardia'
          },
          {
            title: '📊 Clinical Categories',
            content: 'Paroxysmal (sudden onset/offset):\n• AVNRT, AVRT, AT\nNon-paroxysmal (gradual):\n• Sinus tach, MAT, JT'
          },
          {
            title: '🏥 Emergency Priority',
            content: 'HIGH: AVNRT, AVRT (hemodynamic impact)\nMODERATE: AT, JT\nLOW: Sinus tach (treat cause)'
          }
        ],
        hint: '🔄 Reentry vs automaticity is key!'
      },

      {
        id: 'narrow-vs-wide-complex-advanced',
        title: 'Advanced: Narrow vs Wide Complex Analysis',
        type: 'accordion',
        backgroundColor: '#fff1f2',
        textColor: '#be185d',
        animation: 'fade',
        imageUrl: '/lessonimages/narrow-wide-complex-comparison.png',
        imageAlt: 'Detailed narrow vs wide complex comparison',
        accordionItems: [
          {
            title: '🎯 Narrow Complex (<120ms)',
            content: 'Origin: Above bundle branches\nTypes: AVNRT, AVRT, AT, sinus tach\nConduction: Normal His-Purkinje\nStability: Usually stable\nTreatment: Vagal, adenosine'
          },
          {
            title: '🚨 Wide Complex (≥120ms)',
            content: 'Origin: Usually ventricular (VT)\nTypes: VT (80%), SVT+aberrancy (20%)\nConduction: Abnormal ventricular\nStability: Often unstable\nTreatment: Assume VT, amiodarone'
          },
          {
            title: '⚠️ SVT with Aberrancy',
            content: 'SVT + bundle branch block\nCan mimic ventricular tachycardia\nLook for AV dissociation (favors VT)\nAdenosine may help diagnose'
          },
          {
            title: '🔍 Diagnostic Clues',
            content: 'Favor SVT: Previous narrow complex\nFavor VT: Previous MI, older patient\nWhen in doubt: Treat as VT (safer)'
          }
        ],
        hint: '📏 QRS width is the critical first decision!'
      },

      {
        id: 'svt-recognition-algorithm',
        title: 'Advanced SVT Recognition Algorithm',
        type: 'steps',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lessonimages/svt-recognition-algorithm.png',
        imageAlt: 'Step-by-step SVT recognition flowchart',
        videoUrl: '/lessonvideo/module3/lesson23/svt-recognition-algorithm.mp4',
        steps: [
          {
            number: 1,
            title: 'Confirm Tachycardia',
            description: 'Heart rate >100 bpm (paroxysmal SVT usually >150 bpm)'
          },
          {
            number: 2,
            title: 'Measure QRS Width',
            description: 'QRS <120ms = narrow complex (supraventricular origin likely)'
          },
          {
            number: 3,
            title: 'Assess Rhythm Regularity',
            description: 'Regular: AVNRT, AVRT, AT. Irregular: AFib, MAT, variable block'
          },
          {
            number: 4,
            title: 'Analyze P Wave Relationship',
            description: 'Hidden: AVNRT. Visible after QRS: AVRT. Before QRS: AT, sinus tach'
          },
          {
            number: 5,
            title: 'Consider Clinical Context',
            description: 'Age, onset pattern, triggers, underlying heart disease'
          },
          {
            number: 6,
            title: 'Response to Interventions',
            description: 'Vagal maneuvers and adenosine help differentiate SVT types'
          }
        ],
        hint: '✅ Systematic approach prevents mistakes!'
      },

      {
        id: 'p-wave-analysis-advanced',
        title: 'Advanced P Wave Analysis in SVT',
        type: 'tabs',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/p-wave-svt-analysis.png',
        imageAlt: 'Detailed P wave patterns in different SVTs',
        videoUrl: '/lessonvideo/module3/lesson23/p-wave-analysis.mp4',
        tabs: [
          {
            title: '👻 Hidden P Waves',
            content: 'AVNRT (typical):\n• P waves buried in QRS\n• Retrograde conduction simultaneous\n• May see pseudo-R prime in V1\n• Pseudo-S waves in inferior leads'
          },
          {
            title: '📍 P Waves After QRS',
            content: 'AVRT & Atypical AVNRT:\n• Visible after QRS complex\n• RP interval analysis crucial\n• Short RP (<70ms): AVRT\n• Long RP (>70ms): Atypical AVNRT'
          },
          {
            title: '📊 P Waves Before QRS',
            content: 'Atrial Tachycardia & Sinus:\n• Different morphology from sinus\n• May have AV block (2:1, 3:1)\n• Gradual onset suggests sinus tach\n• Abnormal axis suggests AT'
          },
          {
            title: '🔄 Variable P Waves',
            content: 'Multifocal AT:\n• Multiple P morphologies\n• Irregular rhythm\n• Often in COPD patients\n• Rate usually <150 bpm'
          }
        ],
        hint: '👁️ P waves tell the SVT story!'
      },

      {
        id: 'svt-vs-sinus-tach-advanced',
        title: 'SVT vs Sinus Tachycardia: Expert Differentiation',
        type: 'flashcard',
        flashcardFront: '🤔 How do experts definitively differentiate SVT from sinus tachycardia?',
        flashcardBack: 'KEY DIFFERENCES: 1) Onset (SVT=abrupt, Sinus=gradual), 2) Rate (SVT usually >150, Sinus <150), 3) P waves (SVT=hidden/abnormal, Sinus=normal), 4) Vagal response (SVT=terminates, Sinus=gradual slowing), 5) Context (SVT=no trigger, Sinus=fever/pain/stress)',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lessonimages/svt-vs-sinus-comparison.png',
        imageAlt: 'Side-by-side comparison of SVT and sinus tachycardia',
        hint: '🔍 Context and P waves are the ultimate differentiators!'
      },

      {
        id: 'pediatric-svt-recognition',
        title: 'Pediatric SVT: Special Considerations',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf4ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/pediatric-svt.png',
        imageAlt: 'Pediatric SVT ECG examples',
        videoUrl: '/lessonvideo/module3/lesson23/pediatric-svt.mp4',
        highlights: [
          '👶 Higher baseline heart rates in children',
          '⚡ SVT rates: 220-300 in infants, 180-250 in children',
          '🚨 Less hemodynamic tolerance than adults',
          '🫀 AVRT more common than AVNRT in pediatrics',
          '🏥 Often presents with feeding problems or irritability'
        ],
        hint: '👶 Children have different SVT presentations!'
      },

      // COMPREHENSIVE UNIT 1 QUIZ
      {
        id: 'unit1-comprehensive-quiz',
        title: '🎯 Unit 1 Quiz: Advanced SVT Recognition',
        content: "Test your comprehensive SVT recognition skills!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: '/ecg/medical_accurate/supraventricular_tachycardia_200bpm_3.png',
        imageAlt: 'Complex SVT ECG for advanced recognition quiz',
        videoUrl: '/lessonvideo/module3/lesson23/unit1-quiz-explanation.mp4',
        hint: '🧠 Test your advanced SVT knowledge!',
        question: "In this narrow complex tachycardia at 180 bpm with no visible P waves, what is the most likely diagnosis?",
        options: [
          "Sinus tachycardia",
          "AVNRT (AV nodal reentrant tachycardia)", 
          "Atrial fibrillation",
          "Atrial flutter"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! AVNRT typically presents with narrow complex tachycardia around 150-220 bpm with P waves hidden within the QRS complexes due to simultaneous atrial and ventricular activation."
      },

      // Audio Lesson after Unit 1
      {
        id: 'svt-recognition-audio',
        title: '🎧 SVT Recognition Audio Mastery',
        content: 'Consolidate your SVT recognition skills through comprehensive audio instruction covering narrow complex criteria, rate assessment, and differentiation from other tachycardias.',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/supraventricular_tachycardia_160bpm_1.png',
        imageAlt: 'SVT with clear narrow complex pattern',
        audioUrl: '/lessonaudio/module3/lesson23/svt-recognition-mastery.mp3',
        hint: '🎧 Master SVT recognition through audio!'
      },

      // ===============================================
      // ⚙️ UNIT 2: SVT MECHANISMS & ELECTROPHYSIOLOGY (10 slides)
      // ===============================================
      {
        id: 'unit2-intro',
        title: '⚙️ Unit 2: SVT Mechanisms & Electrophysiology',
        content: 'Understand how SVTs work! Master the underlying mechanisms, reentry circuits, and electrophysiology that drive supraventricular tachycardias.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/svt-mechanism-overview.png',
        imageAlt: 'Comprehensive SVT mechanisms diagram',
        videoUrl: '/lessonvideo/module3/lesson23/svt-mechanisms-intro.mp4',
        highlights: [
          '🔄 Reentry: The dominant mechanism (90%)',
          '🎯 Automaticity: Enhanced firing (10%)',
          '⚡ Triggered activity: After-depolarizations',
          '🫀 Normal conduction system anatomy',
          '🔬 Cellular electrophysiology basics'
        ],
        hint: '🔄 Reentry is the SVT kingmaker!'
      },

      {
        id: 'reentry-mechanism-comprehensive',
        title: 'Comprehensive Reentry Mechanism',
        type: 'steps',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lessonimages/reentry-mechanism-detailed.png',
        imageAlt: 'Detailed reentry circuit mechanism',
        videoUrl: '/lessonvideo/module3/lesson23/reentry-mechanism.mp4',
        steps: [
          {
            number: 1,
            title: 'Anatomical Substrate',
            description: 'Two pathways with different conduction properties (fast/slow or normal/accessory)'
          },
          {
            number: 2,
            title: 'Triggering Event',
            description: 'Premature beat encounters unidirectional block in one pathway'
          },
          {
            number: 3,
            title: 'Conduction Down Alternative',
            description: 'Impulse travels down the unblocked pathway'
          },
          {
            number: 4,
            title: 'Retrograde Conduction',
            description: 'Impulse travels back up the previously blocked pathway (now recovered)'
          },
          {
            number: 5,
            title: 'Circuit Establishment',
            description: 'Continuous loop creates sustained tachycardia'
          },
          {
            number: 6,
            title: 'Circuit Maintenance',
            description: 'Circuit perpetuates until broken by intervention or spontaneous termination'
          }
        ],
        hint: '🔄 Unidirectional block + slow conduction = reentry!'
      },

      {
        id: 'av-node-anatomy-physiology',
        title: 'AV Node: The SVT Control Center',
        type: 'tabs',
        backgroundColor: '#fff1f2',
        textColor: '#be185d',
        animation: 'fade',
        imageUrl: '/lessonimages/av-node-anatomy.png',
        imageAlt: 'Detailed AV node anatomy and physiology',
        videoUrl: '/lessonvideo/module3/lesson23/av-node-physiology.mp4',
        tabs: [
          {
            title: '🏗️ Anatomical Structure',
            content: 'Triangle of Koch boundaries:\n• Coronary sinus ostium\n• Tricuspid annulus\n• Tendon of Todaro\nCompact node + transitional zones\nDual pathways: fast (β) + slow (α)'
          },
          {
            title: '⚡ Electrophysiology',
            content: 'Slow conduction (0.05 m/s):\n• Calcium-dependent action potentials\n• Decremental conduction\n• Natural pacemaker function\n• AV delay allows ventricular filling'
          },
          {
            title: '🎛️ Autonomic Control',
            content: 'Sympathetic (β-adrenergic):\n• Increases conduction velocity\n• Shortens refractory period\nParasympathetic (muscarinic):\n• Slows conduction\n• Prolongs refractory period'
          },
          {
            title: '💊 Pharmacology',
            content: 'Slowing agents:\n• Adenosine, calcium blockers\n• Beta-blockers, digoxin\nEnhancing agents:\n• Catecholamines, atropine\n• Calcium, magnesium'
          }
        ],
        hint: '🫀 AV node = SVT command center!'
      },

      {
        id: 'avnrt-mechanism-detailed',
        title: 'AVNRT: Dual Pathway Reentry Deep Dive',
        type: 'accordion',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/avnrt-mechanism.png',
        imageAlt: 'Detailed AVNRT dual pathway mechanism',
        videoUrl: '/lessonvideo/module3/lesson23/avnrt-mechanism.mp4',
        accordionItems: [
          {
            title: '🛤️ Dual Pathway Anatomy',
            content: 'Fast Pathway (β): Faster conduction, longer refractory period, anterosuperior\nSlow Pathway (α): Slower conduction, shorter refractory period, posteroinferior\nNormal sinus beats use fast pathway preferentially'
          },
          {
            title: '⚡ Typical AVNRT (90%)',
            content: 'Anterograde: Slow pathway (α)\nRetrograde: Fast pathway (β)\nSimultaneous atrial/ventricular activation\nP waves hidden in QRS or pseudo-R prime V1\nShort RP interval (<70ms)'
          },
          {
            title: '🔄 Atypical AVNRT (10%)',
            content: 'Anterograde: Fast pathway (β)\nRetrograde: Slow pathway (α)\nLong RP interval (>70ms)\nP waves visible after QRS\nSlower heart rates (150-180 bpm)'
          },
          {
            title: '🎯 Initiation Requirements',
            content: 'Critical AH interval prolongation\nPremature atrial beat blocks in fast pathway\nSlow pathway conduction with retrograde fast pathway recovery\nEchoes and sustained AVNRT develop'
          }
        ],
        hint: '🔄 Fast/slow pathway dance creates AVNRT!'
      },

      {
        id: 'avrt-mechanism-detailed',
        title: 'AVRT: Accessory Pathway Reentry',
        type: 'steps',
        backgroundColor: '#fdf4ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/avrt-mechanism.png',
        imageAlt: 'AVRT accessory pathway mechanism diagram',
        videoUrl: '/lessonvideo/module3/lesson23/avrt-mechanism.mp4',
        steps: [
          {
            number: 1,
            title: 'Accessory Pathway Presence',
            description: 'Abnormal muscle bundle bypassing AV node (Bundle of Kent, James, Mahaim)'
          },
          {
            number: 2,
            title: 'Normal Sinus Rhythm',
            description: 'May show preexcitation (delta wave) if accessory pathway conducts anterograde'
          },
          {
            number: 3,
            title: 'AVRT Initiation',
            description: 'Premature beat creates unidirectional block in accessory pathway'
          },
          {
            number: 4,
            title: 'Orthodromic AVRT (95%)',
            description: 'Anterograde: AV node, Retrograde: Accessory pathway. Narrow QRS, visible P waves'
          },
          {
            number: 5,
            title: 'Antidromic AVRT (5%)',
            description: 'Anterograde: Accessory pathway, Retrograde: AV node. Wide QRS (preexcited)'
          },
          {
            number: 6,
            title: 'Clinical Significance',
            description: 'WPW syndrome when preexcitation + symptoms. Risk of rapid AFib conduction'
          }
        ],
        hint: '🔄 Accessory pathway = secret highway!'
      },

      {
        id: 'automaticity-mechanism',
        title: 'Automaticity & Triggered Activity',
        type: 'tabs',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/automaticity-mechanism.png',
        imageAlt: 'Automaticity and triggered activity mechanisms',
        videoUrl: '/lessonvideo/module3/lesson23/automaticity-mechanism.mp4',
        tabs: [
          {
            title: '🎯 Enhanced Automaticity',
            content: 'Mechanism: Accelerated phase 4 depolarization\nCauses: Ischemia, stretch, catecholamines\nTypes: Atrial tachycardia, junctional tachycardia\nCharacteristics: Gradual onset, warm-up period\nTreatment: Address underlying cause'
          },
          {
            title: '⚡ Triggered Activity',
            content: 'Mechanism: After-depolarizations\nEADs: Early (long QT, bradycardia)\nDADs: Delayed (calcium overload, digitalis)\nTypes: Torsades, digitalis toxicity\nCharacteristics: Pause-dependent, catecholamine-sensitive'
          },
          {
            title: '🔬 Cellular Mechanisms',
            content: 'Normal automaticity: SA node, AV node, Purkinje\nAbnormal automaticity: Injured tissue, ischemia\nCalcium handling abnormalities\nIon channel dysfunction\nMetabolic disturbances'
          },
          {
            title: '💊 Therapeutic Targets',
            content: 'Beta-blockers: Reduce cAMP\nCalcium blockers: Reduce calcium\nSodium channel blockers: Membrane stabilization\nMagnesium: Suppress EADs\nCorrect electrolytes, ischemia'
          }
        ],
        hint: '⚡ Not all SVT is reentry - some is automatic!'
      },

      {
        id: 'multifocal-atrial-tachycardia',
        title: 'Multifocal Atrial Tachycardia (MAT) - The COPD Special',
        type: 'flashcard',
        flashcardFront: '🫁 What is Multifocal Atrial Tachycardia and when do we see it?',
        flashcardBack: 'MAT = Multiple (≥3) different atrial foci firing rapidly with different P wave morphologies. Heart rate >100 bpm, irregular rhythm. Classic in COPD exacerbations due to hypoxia, acidosis, theophylline. Treatment = treat underlying COPD, avoid rate control!',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lessonimages/multifocal-atrial-tachycardia.png',
        imageAlt: 'MAT ECG showing multiple P wave morphologies',
        hint: '🫁 COPD + irregular tach + weird P waves = MAT!'
      },

      {
        id: 'conduction-system-review',
        title: 'Conduction System: SVT Highway Map',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fff1f2',
        textColor: '#be185d',
        animation: 'fade',
        imageUrl: '/lessonimages/conduction-system-svt.png',
        imageAlt: 'Cardiac conduction system with SVT circuits highlighted',
        videoUrl: '/lessonvideo/module3/lesson23/conduction-system.mp4',
        highlights: [
          '⚡ SA node: Natural pacemaker (60-100 bpm)',
          '🛤️ Internodal pathways: Atrial conduction routes',
          '🫀 AV node: The gatekeeper and SVT epicenter',
          '⚡ His-Purkinje: Rapid ventricular conduction',
          '🔄 Accessory pathways: Abnormal connections'
        ],
        hint: '🗺️ Know the highways to understand the traffic jams!'
      },

      {
        id: 'svt-initiation-termination',
        title: 'SVT Initiation and Termination Mechanisms',
        type: 'accordion',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/svt-initiation-termination.png',
        imageAlt: 'SVT initiation and termination mechanisms',
        videoUrl: '/lessonvideo/module3/lesson23/svt-initiation-termination.mp4',
        accordionItems: [
          {
            title: '🚀 Initiation Mechanisms',
            content: 'Premature beats (90%): PACs, PVCs creating critical timing\nCritical coupling interval: Just right timing for reentry\nAutonomic triggers: Stress, caffeine, exercise\nElectrolyte abnormalities: Hypokalemia, hypomagnesemia\nDrugs: Sympathomimetics, digitalis'
          },
          {
            title: '🛑 Spontaneous Termination',
            content: 'Conduction block in circuit: Natural circuit failure\nRefractoriness changes: Autonomic fluctuations\nPremature beats: Reset or break the circuit\nFatigue: Circuit elements become refractory\nSpontaneous rate: Higher rates more unstable'
          },
          {
            title: '💊 Pharmacologic Termination',
            content: 'AV node blockers: Adenosine, verapamil, beta-blockers\nSodium channel blockers: Flecainide, propafenone\nPotassium channel blockers: Amiodarone, sotalol\nMechanism: Create conduction block or refractoriness'
          },
          {
            title: '🫀 Non-pharmacologic Methods',
            content: 'Vagal maneuvers: Increase parasympathetic tone\nCardioversion: Reset all cardiac tissue\nPacing: Overdrive pacing to terminate\nCaval massage: Increase vagal tone\nCatheter ablation: Eliminate substrate'
          }
        ],
        hint: '🎯 Understanding mechanisms guides treatment!'
      },

      // COMPREHENSIVE UNIT 2 QUIZ
      {
        id: 'unit2-mechanisms-quiz',
        title: '⚙️ Unit 2 Quiz: SVT Mechanisms',
        content: "Test your SVT mechanism expertise!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'slide',
        imageUrl: '/lessonimages/avnrt-vs-avrt-comparison.png',
        imageAlt: 'AVNRT vs AVRT mechanism comparison',
        videoUrl: '/lessonvideo/module3/lesson23/unit2-quiz-explanation.mp4',
        hint: '🧠 Mechanism mastery time!',
        question: "In typical AVNRT, what is the most likely reason that P waves are not visible on the surface ECG?",
        options: [
          "The atria are not being activated during the tachycardia",
          "Atrial and ventricular activation occur simultaneously", 
          "The P waves are inverted and cancel out the QRS",
          "The heart rate is too fast to see individual P waves"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! In typical AVNRT, the atria and ventricles are activated simultaneously because the reentry circuit involves both fast and slow pathways within the AV node, causing the P waves to be buried within the QRS complexes."
      },

      // Audio Lesson after Unit 2
      {
        id: 'svt-mechanisms-audio',
        title: '🎧 SVT Mechanisms Deep Dive',
        content: 'Master the underlying mechanisms through detailed audio instruction covering reentry circuits, AV nodal anatomy, accessory pathways, and the electrophysiology behind each SVT type.',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/svt-mechanism-overview.png',
        imageAlt: 'Detailed SVT mechanism illustration',
        audioUrl: '/lessonaudio/module3/lesson23/svt-mechanisms-audio.mp3',
        hint: '🎧 Understand the SVT engine!'
      },

      // ===============================================
      // 🫀 UNIT 3: AVNRT DEEP DIVE (8 slides)
      // ===============================================
      {
        id: 'unit3-intro',
        title: '🫀 Unit 3: AVNRT Deep Dive',
        content: 'Master AVNRT completely! Deep dive into the most common SVT with advanced recognition, variants, electrophysiology, and clinical pearls.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/lessonimages/avnrt-deep-dive-intro.png',
        imageAlt: 'AVNRT deep dive comprehensive overview',
        videoUrl: '/lessonvideo/module3/lesson23/avnrt-deep-dive-intro.mp4',
        highlights: [
          '🫀 AVNRT: 60% of all paroxysmal SVTs',
          '🔄 Dual pathway physiology mastery',
          '⚡ Typical vs atypical variants',
          '🎯 Advanced ECG recognition',
          '💊 Treatment response patterns'
        ],
        hint: '🫀 AVNRT is the SVT champion!'
      },

      {
        id: 'avnrt-epidemiology-clinical',
        title: 'AVNRT: Clinical Epidemiology & Demographics',
        type: 'tabs',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lessonimages/avnrt-epidemiology.png',
        imageAlt: 'AVNRT epidemiology and demographics',
        videoUrl: '/lessonvideo/module3/lesson23/avnrt-epidemiology.mp4',
        tabs: [
          {
            title: '📊 Demographics',
            content: 'Female predominance (2:1 ratio)\nPeak incidence: 30-50 years\nCan occur at any age\nOften no structural heart disease\nFamily history occasionally present'
          },
          {
            title: '🏥 Clinical Presentation',
            content: 'Palpitations (100%): "Racing heart"\nDizziness, lightheadedness (60%)\nChest discomfort, dyspnea (40%)\nNeck pounding (25%): Jugular "frog sign"\nPolyuria: ANP release from atrial stretch'
          },
          {
            title: '⚡ Triggers & Patterns',
            content: 'Exercise, stress, caffeine\nAlcohol, hormonal changes\nAbrupt onset/offset (light switch)\nDuration: Minutes to hours\nSpontaneous termination common'
          },
          {
            title: '🔄 Natural History',
            content: 'Episodes may increase over time\nUsually benign prognosis\nRare hemodynamic compromise\nTachycardia-induced cardiomyopathy rare\nExcellent response to ablation'
          }
        ],
        hint: '👩 Female + palpitations + normal heart = think AVNRT!'
      },

      {
        id: 'avnrt-dual-pathway-advanced',
        title: 'AVNRT Dual Pathways: Advanced Anatomy',
        type: 'accordion',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/avnrt-dual-pathway-anatomy.png',
        imageAlt: 'Advanced AVNRT dual pathway anatomy',
        videoUrl: '/lessonvideo/module3/lesson23/avnrt-dual-pathway.mp4',
        accordionItems: [
          {
            title: '🏗️ Anatomical Substrate',
            content: 'Triangle of Koch: Coronary sinus, tricuspid valve, tendon of Todaro\nCompact AV node: Central fibrous body\nTransitional zones: Approach pathways\nDual pathways: Functional vs anatomical debate\nHistological differences in conduction velocity'
          },
          {
            title: '⚡ Fast Pathway (Beta)',
            content: 'Location: Anterosuperior to compact node\nConduction velocity: 1.2-2.0 m/s\nRefractory period: 350-500 ms (long)\nNormal conduction pathway\nShorter ERP at slow heart rates'
          },
          {
            title: '🐌 Slow Pathway (Alpha)',
            content: 'Location: Posteroinferior to compact node\nConduction velocity: 0.5-1.0 m/s\nRefractory period: 200-300 ms (short)\nBackup/reserve pathway\nDecrementally conducting'
          },
          {
            title: '🔬 Electrophysiological Properties',
            content: 'Crossover point: Where fast ERP > slow ERP\nJump phenomenon: AH interval sudden increase\nEcho zones: Single to sustained AVNRT\nAutonomic influence: Beta vs muscarinic effects\nConduction-refractoriness relationship'
          }
        ],
        hint: '🏗️ Architecture determines arrhythmia!'
      },

      {
        id: 'avnrt-variants-comprehensive',
        title: 'AVNRT Variants: Complete Classification',
        type: 'steps',
        backgroundColor: '#fdf4ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/avnrt-variants-all.png',
        imageAlt: 'Complete AVNRT variants classification',
        videoUrl: '/lessonvideo/module3/lesson23/avnrt-variants.mp4',
        steps: [
          {
            number: 1,
            title: 'Typical AVNRT (90%)',
            description: 'Slow-fast conduction. Anterograde slow, retrograde fast pathway. Short RP interval (<70ms). P waves buried in QRS or invisible.'
          },
          {
            number: 2,
            title: 'Atypical AVNRT - Fast-Slow (5%)',
            description: 'Fast-slow conduction. Anterograde fast, retrograde slow pathway. Long RP interval (>70ms). P waves after QRS, often inverted in inferior leads.'
          },
          {
            number: 3,
            title: 'Atypical AVNRT - Slow-Slow (5%)',
            description: 'Slow-slow conduction. Two different slow pathways. Variable RP intervals. P waves may be before, in, or after QRS.'
          },
          {
            number: 4,
            title: 'Upper Common Pathway AVNRT',
            description: 'Rare variant involving upper common pathway. Intermediate RP intervals. Transitional P wave morphology patterns.'
          },
          {
            number: 5,
            title: 'Left Atrial AVNRT',
            description: 'Involving left-sided slow pathways. Different P wave morphology. May require left-sided ablation approach.'
          },
          {
            number: 6,
            title: 'Multiple Pathway AVNRT',
            description: 'More than two functional pathways. Multiple morphologies possible. Complex electrophysiological substrate.'
          }
        ],
        hint: '🎯 Know all the AVNRT flavors!'
      },

      {
        id: 'avnrt-ecg-recognition-advanced',
        title: 'Advanced AVNRT ECG Recognition',
        type: 'tabs',
        backgroundColor: '#fff1f2',
        textColor: '#be185d',
        animation: 'fade',
        imageUrl: '/lessonimages/avnrt-ecg-advanced.png',
        imageAlt: 'Advanced AVNRT ECG recognition features',
        videoUrl: '/lessonvideo/module3/lesson23/avnrt-ecg-recognition.mp4',
        tabs: [
          {
            title: '👻 Hidden P Waves (Typical)',
            content: 'Pseudo R prime (r prime) in V1: Retrograde P wave\nPseudo S waves in II, III, aVF: Negative retrograde P\nQRS morphology changes: Compared to sinus rhythm\nRP interval <70ms: P wave timing\nSimultaneous atrial/ventricular activation'
          },
          {
            title: '📍 Visible P Waves (Atypical)',
            content: 'Long RP tachycardia: RP >70ms\nNegative P waves: II, III, aVF\nPositive P waves: aVR, V1\nP wave axis: Superior (-60° to -90°)\nDifferential: Atrial tachycardia, PJRT'
          },
          {
            title: '⚡ Rate & Rhythm Features',
            content: 'Heart rate: 150-220 bpm (typical)\nRegular rhythm: R-R intervals consistent\nAbrupt onset: Light switch phenomenon\nResponse to maneuvers: Terminates or no effect\nCycle length: Usually stable'
          },
          {
            title: '🔍 Subtle ECG Signs',
            content: 'QRS alternans: Rare, suggests very rapid rate\nST depression: Rate-related ischemia\nT wave changes: Post-tachycardia syndrome\nAV dissociation: Never present in AVNRT\nBundle branch block: May develop during tachycardia'
          }
        ],
        hint: '👁️ Look for the subtle P wave clues!'
      },

      {
        id: 'avnrt-differential-diagnosis',
        title: 'AVNRT Differential Diagnosis Mastery',
        type: 'accordion',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/avnrt-differential.png',
        imageAlt: 'AVNRT differential diagnosis comparison',
        videoUrl: '/lessonvideo/module3/lesson23/avnrt-differential.mp4',
        accordionItems: [
          {
            title: '🆚 AVNRT vs AVRT',
            content: 'AVNRT: P waves hidden/pseudo-R prime, no delta waves in sinus\nAVRT: P waves visible after QRS, may have delta waves in sinus\nRP interval: AVNRT <70ms (typical), AVRT usually >70ms\nAdenosis response: Both terminate, but AVRT may show pre-excitation'
          },
          {
            title: '🆚 AVNRT vs Atrial Tachycardia',
            content: 'AVNRT: P waves hidden or retrograde morphology\nAT: Abnormal P waves before QRS, different from sinus\nAV block: AVNRT cannot have AV block, AT can (2:1, 3:1)\nWarm-up: AT may show gradual rate increase, AVNRT abrupt'
          },
          {
            title: '🆚 AVNRT vs Sinus Tachycardia',
            content: 'AVNRT: Abrupt onset, P waves hidden, rate >150\nSinus tach: Gradual onset, normal P waves, rate <150 usually\nClinical context: AVNRT no clear cause, sinus tach has trigger\nVagal response: AVNRT terminates, sinus tach gradual slowing'
          },
          {
            title: '🆚 AVNRT vs Junctional Tachycardia',
            content: 'AVNRT: Paroxysmal, reentrant mechanism, terminates abruptly\nJT: Non-paroxysmal, automatic mechanism, gradual onset/offset\nRate: AVNRT usually >150, JT usually 100-140\nP waves: Similar patterns but different mechanisms'
          }
        ],
        hint: '🔍 Context and P waves differentiate!'
      },

      {
        id: 'avnrt-treatment-response',
        title: 'AVNRT Treatment Response Patterns',
        type: 'flashcard',
        flashcardFront: '💊 How does AVNRT respond to different treatments?',
        flashcardBack: 'EXCELLENT response to: Valsalva (80%), adenosine (95%), verapamil (90%), cardioversion (100%). POOR response to: Digoxin alone, beta-blockers alone (prevention only). DEFINITIVE: Ablation (98% success, <1% complications).',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lessonimages/avnrt-treatment-response.png',
        imageAlt: 'AVNRT treatment response patterns',
        hint: '💊 AVNRT responds beautifully to AV node blockers!'
      },

      {
        id: 'avnrt-ablation-considerations',
        title: 'AVNRT Ablation: When and Why',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/avnrt-ablation.png',
        imageAlt: 'AVNRT ablation procedure and outcomes',
        videoUrl: '/lessonvideo/module3/lesson23/avnrt-ablation.mp4',
        highlights: [
          '✨ 98% success rate for AVNRT ablation',
          '⚡ Target: Slow pathway modification',
          '🎯 <1% risk of complete heart block',
          '🏥 Same-day discharge usually',
          '💊 Often eliminates need for medications'
        ],
        hint: '⚡ AVNRT ablation is the gold standard cure!'
      },

      // COMPREHENSIVE UNIT 3 QUIZ
      {
        id: 'unit3-avnrt-quiz',
        title: '🫀 Unit 3 Quiz: AVNRT Mastery',
        content: "Test your comprehensive AVNRT knowledge!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'slide',
        imageUrl: '/lessonimages/avnrt-quiz-ecg.png',
        imageAlt: 'Complex AVNRT ECG for mastery quiz',
        videoUrl: '/lessonvideo/module3/lesson23/unit3-quiz-explanation.mp4',
        hint: '🧠 AVNRT expertise test!',
        question: "A 35-year-old woman has paroxysmal palpitations. During tachycardia, you see pseudo-R waves in V1 and pseudo-S waves in the inferior leads. What is the most likely diagnosis?",
        options: [
          "Atrial tachycardia with 1:1 conduction",
          "Typical AVNRT (slow-fast)", 
          "AVRT (orthodromic)",
          "Atypical AVNRT (fast-slow)"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Pseudo-R waves in V1 and pseudo-S waves in inferior leads are classic ECG signs of typical AVNRT, representing retrograde P waves that are simultaneous with the QRS complex due to the slow-fast pathway pattern."
      },

      // Audio Lesson after Unit 3
      {
        id: 'avnrt-mastery-audio',
        title: '🎧 AVNRT Mastery Audio',
        content: 'Comprehensive AVNRT audio instruction covering dual pathways, variants, recognition, and treatment specifics.',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fff7ed', 
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/lessonimages/avnrt-comprehensive.png',
        imageAlt: 'Complete AVNRT mastery overview',hint: '🎧 Master the most common SVT!'
      },

      // ===============================================
      // ⚡ UNIT 4: AVRT & WPW SYNDROME (9 slides)
      // ===============================================
      {
        id: 'unit4-intro',
        title: '⚡ Unit 4: AVRT & WPW Syndrome',
        content: 'Master accessory pathway SVTs! Learn about Wolff-Parkinson-White syndrome, orthodromic/antidromic AVRT, and the dangerous AFib-WPW combination.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf4ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/wpw-avrt-intro.png',
        imageAlt: 'WPW syndrome and AVRT comprehensive overview',
        videoUrl: '/lessonvideo/module3/lesson23/wpw-avrt-intro.mp4',
        highlights: [
          '⚡ Accessory pathways: Extra electrical connections',
          '🔄 AVRT: 30% of paroxysmal SVTs',
          '🚨 WPW syndrome: Preexcitation + symptoms',
          '⚠️ AFib-WPW: Emergency combination',
          '🎯 Ablation: Curative treatment'
        ],
        hint: '⚡ Accessory pathways = bypass highways!'
      },

      {
        id: 'accessory-pathway-anatomy',
        title: 'Accessory Pathway Anatomy & Classification',
        type: 'tabs',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lessonimages/accessory-pathway-anatomy.png',
        imageAlt: 'Detailed accessory pathway anatomy',
        videoUrl: '/lessonvideo/module3/lesson23/accessory-pathway-anatomy.mp4',
        tabs: [
          {
            title: '🏗️ Pathway Types',
            content: 'Kent bundles: AV connections (most common)\nJames bundles: Atrial to His bundle\nMahaim bundles: AV node to ventricle\nConcealed pathways: Only retrograde conduction\nManifest pathways: Anterograde conduction (delta wave)'
          },
          {
            title: '📍 Anatomical Locations',
            content: 'Left free wall (60%): Mitral annulus\nPosteroseptal (25%): CS ostium region\nRight free wall (10%): Tricuspid annulus\nAnteroseptal (5%): High risk location\nMultiple pathways: 5-10% of patients'
          },
          {
            title: '⚡ Conduction Properties',
            content: 'All-or-nothing conduction\nNo decremental properties\nFast conduction velocity\nShorter refractory period than AV node\nAutonomic insensitive'
          },
          {
            title: '🧬 Genetics & Epidemiology',
            content: 'Prevalence: 0.1-0.3% general population\nMale predominance: 60-70%\nCongenital: Present from birth\nFamilial clustering: Some families\nAssociated conditions: Ebstein anomaly, hypertrophic cardiomyopathy'
          }
        ],
        hint: '🗺️ Location determines ECG pattern!'
      },

      {
        id: 'wpw-syndrome-comprehensive',
        title: 'WPW Syndrome: Complete Clinical Picture',
        type: 'accordion',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/wpw-syndrome-complete.png',
        imageAlt: 'Complete WPW syndrome clinical picture',
        videoUrl: '/lessonvideo/module3/lesson23/wpw-syndrome.mp4',
        accordionItems: [
          {
            title: '📋 Diagnostic Criteria',
            content: 'WPW Pattern (asymptomatic): Delta wave + short PR + wide QRS\nWPW Syndrome (symptomatic): WPW pattern + arrhythmias\nArrhythmias: AVRT (95%), AFib (20%), AFlutter (5%)\nSymptoms: Palpitations, chest pain, syncope, cardiac arrest (rare)'
          },
          {
            title: '⚡ ECG Features (Sinus Rhythm)',
            content: 'Delta wave: Slurred QRS upstroke\nShort PR interval: <120ms (bypass AV node delay)\nWide QRS: >120ms (ventricular pre-excitation)\nSecondary ST-T changes: Opposite to QRS\nPseudo-infarction patterns: Can mimic MI'
          },
          {
            title: '📍 Localization by ECG',
            content: 'Left lateral: Positive delta in I, aVL, V5-6\nLeft posterior: Positive delta in II, III, aVF\nRight lateral: Negative delta in I, aVL\nPosteroseptal: Positive delta in V1-2\nAnteroseptal: Negative delta in V1-2'
          },
          {
            title: '🎯 Risk Stratification',
            content: 'High risk: Shortest RR <250ms in AFib\nIntermediate risk: Inducible AVRT, no AFib\nLow risk: No inducible arrhythmias\nSudden death risk: 0.1-0.2% over lifetime\nExercise testing: Loss of preexcitation = good'
          }
        ],
        hint: '⚡ Delta wave = preexcitation signature!'
      },

      {
        id: 'orthodromic-avrt-detailed',
        title: 'Orthodromic AVRT: The Common Form (95%)',
        type: 'steps',
        backgroundColor: '#fff1f2',
        textColor: '#be185d',
        animation: 'fade',
        imageUrl: '/lessonimages/orthodromic-avrt.png',
        imageAlt: 'Orthodromic AVRT mechanism and ECG',
        videoUrl: '/lessonvideo/module3/lesson23/orthodromic-avrt.mp4',
        steps: [
          {
            number: 1,
            title: 'Normal Conduction Path',
            description: 'Impulse travels down AV node and His-Purkinje system normally'
          },
          {
            number: 2,
            title: 'Retrograde Accessory Path',
            description: 'Impulse returns to atria via accessory pathway (retrograde conduction)'
          },
          {
            number: 3,
            title: 'Narrow QRS Complex',
            description: 'Normal ventricular activation = narrow QRS during tachycardia'
          },
          {
            number: 4,
            title: 'Visible P Waves',
            description: 'P waves appear after QRS with RP interval >70ms usually'
          },
          {
            number: 5,
            title: 'Rate Characteristics',
            description: 'Typically 150-220 bpm, regular rhythm, abrupt onset/termination'
          },
          {
            number: 6,
            title: 'Treatment Response',
            description: 'Excellent response to adenosine, vagal maneuvers, AV node blockers'
          }
        ],
        hint: '🔄 Orthodromic = normal down, accessory up!'
      },

      {
        id: 'antidromic-avrt-detailed',
        title: 'Antidromic AVRT: The Dangerous Mimic (5%)',
        type: 'flashcard',
        flashcardFront: '🚨 What is antidromic AVRT and why is it dangerous?',
        flashcardBack: 'Antidromic AVRT: Down accessory pathway, up AV node. Creates WIDE QRS tachycardia that mimics VT! Dangerous because: 1) Often misdiagnosed as VT, 2) AV node blockers can worsen it, 3) Can be very rapid (>300 bpm), 4) May cause hemodynamic collapse.',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: '/lessonimages/antidromic-avrt-danger.png',
        imageAlt: 'Antidromic AVRT - the VT mimic',
        hint: '🚨 Wide complex SVT = think antidromic AVRT!'
      },

      {
        id: 'afib-wpw-emergency',
        title: 'AFib + WPW: The Cardiac Emergency',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: '/lessonimages/afib-wpw-emergency.png',
        imageAlt: 'AFib with WPW - emergency presentation',
        videoUrl: '/lessonvideo/module3/lesson23/afib-wpw-emergency.mp4',
        highlights: [
          '🚨 Extremely rapid ventricular rates (>300 bpm)',
          '⚠️ Can degenerate to ventricular fibrillation',
          '🚫 NEVER give AV node blockers (adenosine, verapamil)',
          '⚡ Treatment: Procainamide or immediate cardioversion',
          '🏥 True cardiac emergency requiring immediate action'
        ],
        hint: '🚨 AFib + WPW = cardiovert or procainamide NOW!'
      },

      {
        id: 'wpw-treatment-strategies',
        title: 'WPW Treatment: Risk-Based Approach',
        type: 'tabs',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/wpw-treatment-algorithm.png',
        imageAlt: 'WPW treatment algorithm by risk',
        videoUrl: '/lessonvideo/module3/lesson23/wpw-treatment.mp4',
        tabs: [
          {
            title: '🔴 High Risk (Ablation)',
            content: 'Indications:\n• Symptomatic AVRT\n• AFib with rapid conduction\n• High-risk occupation\n• Shortest RR <250ms\n• Young athletes'
          },
          {
            title: '🟡 Intermediate Risk',
            content: 'Consider ablation:\n• Inducible AVRT on study\n• Patient preference\n• Frequent symptoms\n• Failed medical therapy\n• Lifestyle limitations'
          },
          {
            title: '🟢 Low Risk (Observe)',
            content: 'WPW pattern only:\n• No symptoms\n• No inducible arrhythmias\n• Older patients\n• Loss of preexcitation on exercise\n• Regular follow-up'
          },
          {
            title: '⚡ Ablation Success',
            content: '95-98% success rate\n<1% major complications\nSame-day discharge\nCure (not just control)\nImmediate return to activities'
          }
        ],
        hint: '🎯 Risk stratification guides treatment!'
      },

      {
        id: 'concealed-pathways',
        title: 'Concealed Accessory Pathways: The Hidden Players',
        type: 'accordion',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/concealed-pathways.png',
        imageAlt: 'Concealed accessory pathways characteristics',
        videoUrl: '/lessonvideo/module3/lesson23/concealed-pathways.mp4',
        accordionItems: [
          {
            title: '👻 Definition & Mechanism',
            content: 'Only retrograde conduction capability\nNo anterograde conduction = no delta wave\nNormal sinus rhythm ECG\nCan still participate in orthodromic AVRT\n30-40% of AVRT patients have concealed pathways'
          },
          {
            title: '🔍 Clinical Recognition',
            content: 'Normal baseline ECG (no preexcitation)\nNarrow complex tachycardia with AVRT features\nP waves after QRS during tachycardia\nRP interval often >70ms\nExcellent response to adenosine'
          },
          {
            title: '⚡ Electrophysiology',
            content: 'Unidirectional block in anterograde direction\nIntact retrograde conduction\nMay have decremental properties\nVA conduction time varies by location\nNo preexcitation during sinus rhythm'
          },
          {
            title: '💊 Treatment Approach',
            content: 'Same as manifest WPW for AVRT\nNo AFib risk (no anterograde conduction)\nAblation highly successful\nMedical therapy if ablation declined\nNo exercise restrictions'
          }
        ],
        hint: '👻 No delta wave doesn\'t mean no accessory pathway!'
      },

      {
        id: 'permanent-junctional-reciprocating-tachycardia',
        title: 'PJRT: The Incessant AVRT Variant',
        type: 'flashcard',
        flashcardFront: '🔄 What is PJRT and why is it concerning?',
        flashcardBack: 'PJRT (Permanent Junctional Reciprocating Tachycardia) = Incessant AVRT using posteroseptal concealed pathway. Concerning because: 1) Runs continuously, 2) Causes tachycardia cardiomyopathy, 3) Often missed diagnosis, 4) Requires ablation for cure. Long RP tachycardia with negative P waves in inferior leads.',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lessonimages/pjrt-characteristics.png',
        imageAlt: 'PJRT ECG characteristics and complications',
        hint: '🔄 Incessant tachycardia = think PJRT!'
      },

      // COMPREHENSIVE UNIT 4 QUIZ
      {
        id: 'unit4-wpw-avrt-quiz',
        title: '⚡ Unit 4 Quiz: AVRT & WPW Mastery',
        content: "Test your comprehensive WPW and AVRT knowledge!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fdf4ff',
        textColor: '#7c3aed',
        animation: 'slide',
        imageUrl: '/lessonimages/wpw-quiz-ecg.png',
        imageAlt: 'Complex WPW ECG for mastery quiz',
        videoUrl: '/lessonvideo/module3/lesson23/unit4-quiz-explanation.mp4',
        hint: '🧠 WPW expertise test!',
        question: "A patient with known WPW syndrome develops irregular wide complex tachycardia at 280 bpm. What is the most appropriate immediate treatment?",
        options: [
          "Adenosine 6mg IV push",
          "Synchronized cardioversion", 
          "Verapamil 5mg IV",
          "Amiodarone 150mg IV"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! This represents AFib with WPW (irregular, wide, very fast). AV node blockers (adenosine, verapamil) are CONTRAINDICATED as they can increase accessory pathway conduction. Immediate cardioversion is the treatment of choice."
      },

      // Audio Lesson after Unit 4
      {
        id: 'wpw-avrt-mastery-audio',
        title: '🎧 WPW & AVRT Mastery Audio',
        content: 'Comprehensive audio covering accessory pathways, WPW syndrome, AVRT variants, and emergency management.',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fdf4ff', 
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/wpw-comprehensive.png',
        imageAlt: 'Complete WPW and AVRT overview',
        audioUrl: '/lessonaudio/module3/lesson23/wpw-avrt-mastery.mp3',
        hint: '🎧 Master the dangerous SVT variant!'
      },

      // ===============================================
      // 🏥 UNIT 5: MANAGEMENT & EMERGENCY (9 slides)
      // ===============================================
      {
        id: 'unit5-intro',
        title: '🏥 Unit 5: Management & Emergency Care',
        content: 'Master comprehensive SVT management! From vagal maneuvers to cardioversion, learn the complete treatment protocols and emergency approaches.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/lessonimages/svt-emergency-management.png',
        imageAlt: 'Comprehensive SVT emergency management',
        videoUrl: '/lessonvideo/module3/lesson23/svt-emergency-intro.mp4',
        highlights: [
          '🤲 Vagal maneuvers: First-line treatment',
          '💉 Adenosine: Chemical cardioversion',
          '⚡ Synchronized cardioversion: When unstable',
          '💊 Alternative medications: When adenosine fails',
          '🏥 Long-term management strategies'
        ],
        hint: '🏥 Systematic approach saves lives!'
      },

      {
        id: 'vagal-maneuvers-comprehensive',
        title: 'Vagal Maneuvers: Comprehensive Techniques',
        type: 'tabs',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lessonimages/vagal-maneuvers-techniques.png',
        imageAlt: 'Comprehensive vagal maneuver techniques',
        videoUrl: '/lessonvideo/module3/lesson23/vagal-maneuvers.mp4',
        tabs: [
          {
            title: '🤲 Valsalva Maneuver (Best)',
            content: 'Patient supine, blow into 10ml syringe for 15 seconds\nLift legs to 45° immediately after\nSuccess rate: 80% when done properly\nMechanism: Increased intrathoracic pressure\nContraindications: Recent MI, unstable patient'
          },
          {
            title: '🫀 Carotid Massage',
            content: 'Only in young patients (<40 years)\nPalpate carotid pulse, massage for 5-10 seconds\nNever bilateral, check for bruits first\nSuccess rate: 60-70%\nContraindications: Carotid disease, elderly'
          },
          {
            title: '❄️ Cold Water Immersion',
            content: 'Ice water on face (especially eyes/nose)\nTriggers mammalian dive reflex\nParticularly effective in young patients\nSuccess rate: 50-60%\nEasy to perform, minimal risk'
          },
          {
            title: '⚠️ Contraindications',
            content: 'Unstable vital signs\nAltered mental status\nActive ischemia\nRecent stroke or MI\nSevere heart failure\nKnown carotid disease (for massage)'
          }
        ],
        hint: '🤲 Modified Valsalva works best!'
      },

      {
        id: 'adenosine-protocol-comprehensive',
        title: 'Adenosine Protocol: The Gold Standard',
        type: 'steps',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/adenosine-protocol-complete.png',
        imageAlt: 'Complete adenosine protocol',
        videoUrl: '/lessonvideo/module3/lesson23/adenosine-protocol.mp4',
        steps: [
          {
            number: 1,
            title: 'Preparation',
            description: 'Large bore IV (18G or larger), close to heart (antecubital preferred), have crash cart ready'
          },
          {
            number: 2,
            title: 'First Dose: 6mg',
            description: 'Rapid IV push followed immediately by 20ml normal saline flush, raise arm'
          },
          {
            number: 3,
            title: 'Wait 2-3 Minutes',
            description: 'Monitor for termination, bradycardia, or brief asystole (normal response)'
          },
          {
            number: 4,
            title: 'Second Dose: 12mg',
            description: 'If no response, give 12mg IV push with same technique'
          },
          {
            number: 5,
            title: 'Third Dose: 12mg',
            description: 'If still no response, consider alternative diagnosis or next-line therapy'
          },
          {
            number: 6,
            title: 'Success Rate',
            description: '90-95% effective for AVNRT/AVRT, ineffective for atrial tachycardia'
          }
        ],
        hint: '💉 Fast push + fast flush = success!'
      },

      {
        id: 'adenosine-special-situations',
        title: 'Adenosine: Special Situations & Modifications',
        type: 'accordion',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/adenosine-special-situations.png',
        imageAlt: 'Adenosine special situations',
        videoUrl: '/lessonvideo/module3/lesson23/adenosine-special.mp4',
        accordionItems: [
          {
            title: '☕ Caffeine/Theophylline Users',
            content: 'Competitive adenosine antagonism\nHigher doses required (up to 18-24mg)\nConsider alternative agents first\nWatch for prolonged effects\nMay need continuous adenosine infusion'
          },
          {
            title: '💔 Heart Transplant Patients',
            content: 'Denervated hearts are hypersensitive\nStart with 1-2mg (not 6mg)\nProlonged asystole possible\nConsult cardiology if available\nHave external pacer ready'
          },
          {
            title: '🫁 Asthma/COPD Patients',
            content: 'Relative contraindication (not absolute)\nCan cause bronchospasm\nHave bronchodilator ready\nConsider verapamil as alternative\nMonitor oxygen saturation closely'
          },
          {
            title: '⚠️ Failed Adenosine',
            content: 'Consider: Wrong diagnosis (AT, not AVNRT/AVRT)\nInadequate dose/technique\nCaffeine antagonism\nAlternative: Verapamil 5-10mg or cardioversion'
          }
        ],
        hint: '⚠️ One size doesn\'t fit all!'
      },

      {
        id: 'alternative-medications',
        title: 'Alternative SVT Medications',
        type: 'tabs',
        backgroundColor: '#fff1f2',
        textColor: '#be185d',
        animation: 'fade',
        imageUrl: '/lessonimages/alternative-svt-medications.png',
        imageAlt: 'Alternative SVT medications',
        videoUrl: '/lessonvideo/module3/lesson23/alternative-medications.mp4',
        tabs: [
          {
            title: '🧪 Verapamil',
            content: 'Dose: 5-10mg IV over 2-3 minutes\nMechanism: Calcium channel blocker\nSuccess rate: 85-90% for AVNRT/AVRT\nOnset: 3-5 minutes\nContraindications: Hypotension, VT, WPW with AFib'
          },
          {
            title: '🛡️ Metoprolol',
            content: 'Dose: 5mg IV every 5 minutes (up to 15mg)\nMechanism: Beta-1 selective blocker\nSuccess rate: 60-70% for SVT\nOnset: 5-10 minutes\nContraindications: Asthma, severe HF, hypotension'
          },
          {
            title: '💊 Diltiazem',
            content: 'Dose: 0.25mg/kg IV (usually 20mg)\nMechanism: Non-dihydropyridine CCB\nSuccess rate: 80-85% for SVT\nOnset: 3-5 minutes\nAdvantage: Better tolerated than verapamil'
          },
          {
            title: '⚡ Procainamide',
            content: 'Dose: 15-20mg/kg IV at 20-30mg/min\nMechanism: Sodium channel blocker\nSpecial use: WPW with AFib\nOnset: 10-20 minutes\nMonitor: QRS widening, hypotension'
          }
        ],
        hint: '💊 When adenosine fails, have alternatives ready!'
      },

      {
        id: 'synchronized-cardioversion-svt',
        title: 'Synchronized Cardioversion for SVT',
        type: 'flashcard',
        flashcardFront: '⚡ When and how do you cardiovert SVT?',
        flashcardBack: 'WHEN: Unstable SVT (hypotension, altered mental status, chest pain, CHF). HOW: Synchronized mode, start 50-100J biphasic, sedate if conscious and stable enough. SUCCESS: Nearly 100% effective. ENERGY: Often converts with low energy due to organized rhythm.',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: '/lessonimages/svt-cardioversion.png',
        imageAlt: 'SVT cardioversion procedure',
        hint: '⚡ Unstable SVT = immediate electricity!'
      },

      {
        id: 'pediatric-svt-management',
        title: 'Pediatric SVT Management Pearls',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf4ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/pediatric-svt-management.png',
        imageAlt: 'Pediatric SVT management guidelines',
        videoUrl: '/lessonvideo/module3/lesson23/pediatric-svt.mp4',
        highlights: [
          '👶 Ice to face most effective vagal maneuver',
          '💉 Adenosine dose: 0.1mg/kg (max 6mg first dose)',
          '⚡ Lower cardioversion energy: 0.5-1 J/kg',
          '🏥 More likely to be unstable than adults',
          '🔄 AVRT more common than AVNRT in children'
        ],
        hint: '👶 Children decompensate faster!'
      },

      {
        id: 'long-term-svt-management',
        title: 'Long-term SVT Management Strategies',
        type: 'tabs',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/long-term-svt-management.png',
        imageAlt: 'Long-term SVT management approaches',
        videoUrl: '/lessonvideo/module3/lesson23/long-term-management.mp4',
        tabs: [
          {
            title: '🔥 Catheter Ablation (Cure)',
            content: 'Success rates: AVNRT 95-98%, AVRT 90-95%\nComplications: <1% major, 2-3% minor\nRecurrence: 5-10% (can re-ablate)\nIndications: Symptomatic SVT, patient preference\nAdvantages: Cure, no medications, lifestyle freedom'
          },
          {
            title: '💊 Daily Medications',
            content: 'Beta-blockers: Metoprolol, atenolol\nCalcium blockers: Verapamil, diltiazem\nClass IC: Flecainide, propafenone\nClass III: Sotalol, amiodarone (last resort)\nSuccess: 60-80% reduction in episodes'
          },
          {
            title: '💊 Pill-in-Pocket',
            content: 'Patient self-treats acute episodes\nVerapamil 120mg or diltiazem 120mg PO\nMust test in hospital first\nFor infrequent, predictable episodes\nPatient education essential'
          },
          {
            title: '🎯 Lifestyle Modifications',
            content: 'Avoid triggers: Caffeine, alcohol, stress\nStay hydrated and maintain electrolytes\nRegular exercise (after clearance)\nLearn effective vagal maneuvers\nStress management techniques'
          }
        ],
        hint: '🎯 Ablation offers cure, medications control!'
      },

      {
        id: 'svt-emergency-pitfalls',
        title: 'SVT Emergency Pitfalls to Avoid',
        type: 'accordion',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: '/lessonimages/svt-pitfalls.png',
        imageAlt: 'Common SVT emergency pitfalls',
        videoUrl: '/lessonvideo/module3/lesson23/svt-pitfalls.mp4',
        accordionItems: [
          {
            title: '🚫 Never Give AV Blockers to AFib+WPW',
            content: 'AFib with WPW looks irregular and wide\nAdenosine/verapamil can cause VF\nTreatment: Procainamide or cardioversion\nWhen unsure: Treat as VT (safer)\nConsult cardiology immediately'
          },
          {
            title: '🚫 Don\'t Assume Narrow = Stable',
            content: 'SVT can cause severe hypotension\nEspecially in elderly or heart disease\nCheck BP and mental status always\nUnstable SVT needs immediate cardioversion\nNarrow QRS doesn\'t guarantee stability'
          },
          {
            title: '🚫 Wrong Adenosine Technique',
            content: 'Small IV, slow push = failure\nNo flush = drug doesn\'t reach heart\nPeripheral IV = drug metabolized\nProper: Large IV, fast push, immediate flush\nRaise arm after injection'
          },
          {
            title: '🚫 Misdiagnosis: Sinus Tach vs SVT',
            content: 'Sinus tach: Gradual onset, normal P waves\nSVT: Abrupt onset, abnormal P waves\nContext matters: Fever, pain, dehydration\nWhen unsure: Gentle vagal maneuver\nSinus tach slows gradually, SVT stops or continues'
          }
        ],
        hint: '🚫 Avoid these common mistakes!'
      },

      // COMPREHENSIVE UNIT 5 QUIZ
      {
        id: 'unit5-management-quiz',
        title: '🏥 Unit 5 Quiz: Emergency Management',
        content: "Test your comprehensive SVT management expertise!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'slide',
        imageUrl: '/lessonimages/svt-emergency-quiz.png',
        imageAlt: 'SVT emergency management quiz scenario',
        videoUrl: '/lessonvideo/module3/lesson23/unit5-quiz-explanation.mp4',
        hint: '🧠 Emergency management mastery!',
        question: "A 45-year-old man presents with narrow complex tachycardia at 180 bpm and BP 70/40. What is the most appropriate immediate management?",
        options: [
          "Valsalva maneuver",
          "Adenosine 6mg IV",
          "Synchronized cardioversion", 
          "Verapamil 10mg IV"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! This patient has unstable SVT (hypotensive) requiring immediate synchronized cardioversion. Hemodynamically unstable patients should receive immediate electrical cardioversion, not medication."
      },

      // Audio Lesson after Unit 5
      {
        id: 'svt-management-mastery-audio',
        title: '🎧 SVT Management Mastery Audio',
        content: 'Complete audio guide to SVT emergency and long-term management strategies.',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fff7ed', 
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/lessonimages/svt-management-complete.png',
        imageAlt: 'Complete SVT management overview',hint: '🎧 Master all SVT treatment approaches!'
      },

      // ===============================================
      // 🎓 UNIT 6: ADVANCED TOPICS & SPECIAL CASES (8 slides)
      // ===============================================
      {
        id: 'unit6-intro',
        title: '🎓 Unit 6: Advanced Topics & Special Cases',
        content: 'Master advanced SVT concepts! Explore special populations, unusual variants, electrophysiology insights, and cutting-edge developments in SVT management.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f8fafc',
        textColor: '#475569',
        animation: 'fade',
        imageUrl: '/lessonimages/svt-advanced-topics.png',
        imageAlt: 'Advanced SVT topics overview',
        videoUrl: '/lessonvideo/module3/lesson23/svt-advanced-intro.mp4',
        highlights: [
          '🏥 Special populations: Pregnancy, athletes, elderly',
          '🔬 Electrophysiology study insights',
          '⚡ Novel ablation techniques',
          '🧬 Genetic considerations',
          '🎯 Future directions in SVT management'
        ],
        hint: '🎓 Advanced knowledge for SVT mastery!'
      },

      {
        id: 'svt-in-pregnancy',
        title: 'SVT in Pregnancy: Special Considerations',
        type: 'tabs',
        backgroundColor: '#fdf2f8',
        textColor: '#be185d',
        animation: 'fade',
        imageUrl: '/lessonimages/pregnancy-svt.png',
        imageAlt: 'SVT management in pregnancy',
        videoUrl: '/lessonvideo/module3/lesson23/pregnancy-svt.mp4',
        tabs: [
          {
            title: '🤰 Physiological Changes',
            content: 'Increased blood volume (40-50%)\nIncreased heart rate baseline\nHormonal influences on arrhythmias\nIncreased SVT susceptibility\nNew onset SVT in 24% during pregnancy'
          },
          {
            title: '💊 Safe Medications',
            content: 'SAFE: Adenosine (first-line), metoprolol\nCAUTION: Verapamil (can cause hypotension)\nAVOID: Atenolol (IUGR risk)\nAVOID: Amiodarone (thyroid, pulmonary toxicity)\nCardioversion: Safe when necessary'
          },
          {
            title: '🤲 Preferred Treatments',
            content: 'First-line: Vagal maneuvers\nSecond-line: Adenosine 6mg IV\nThird-line: Metoprolol 5mg IV\nUnstable: Synchronized cardioversion\nAvoid prolonged tachycardia (fetal compromise)'
          },
          {
            title: '🏥 Delivery Planning',
            content: 'Consider ablation before pregnancy if frequent\nContinue beta-blockers during labor\nHave cardiology backup available\nMonitor fetal heart rate during episodes\nPlan vaginal delivery (unless other indications)'
          }
        ],
        hint: '🤰 Adenosine is pregnancy-safe gold standard!'
      },

      {
        id: 'athletic-heart-svt',
        title: 'SVT in Athletes: Performance & Safety',
        type: 'accordion',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lessonimages/athlete-svt.png',
        imageAlt: 'SVT in athletes management',
        videoUrl: '/lessonvideo/module3/lesson23/athlete-svt.mp4',
        accordionItems: [
          {
            title: '🏃‍♂️ Exercise-Induced SVT',
            content: 'Higher catecholamine levels trigger SVT\nExercise can terminate or initiate episodes\nAthletes may have concealed accessory pathways\nWPW more dangerous in athletes (rapid AFib risk)\nReturn-to-play decisions need cardiology input'
          },
          {
            title: '⚡ Risk Stratification',
            content: 'WPW in athletes: High-risk if shortest RR <250ms\nExercise testing essential for risk stratification\nLoss of preexcitation with exercise = good\nPersistent preexcitation = higher risk\nSport-specific recommendations needed'
          },
          {
            title: '🎯 Treatment Considerations',
            content: 'Ablation preferred over medications\nBeta-blockers may impair performance\nCalcium blockers less performance impact\nSuccessful ablation = full return to sports\nMedication compliance issues in athletes'
          },
          {
            title: '📋 Return-to-Play Guidelines',
            content: 'Post-ablation: 3 months restricted activity\nMedical therapy: Individual assessment\nAsymptomatic WPW: Sport-dependent restrictions\nRecurrent SVT: Ablation recommended\nShared decision-making essential'
          }
        ],
        hint: '🏃‍♂️ Ablation preferred in competitive athletes!'
      },

      {
        id: 'elderly-svt-management',
        title: 'SVT in the Elderly: Modified Approach',
        type: 'flashcard',
        flashcardFront: '👴 How does SVT management differ in elderly patients?',
        flashcardBack: 'DIFFERENT because: 1) Less hemodynamic reserve, 2) More comorbidities, 3) Drug interactions, 4) Altered pharmacokinetics. APPROACH: Lower energy cardioversion, careful drug dosing, consider underlying CAD, higher bleeding risk with anticoagulation, often better candidates for ablation than chronic medications.',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/elderly-svt.png',
        imageAlt: 'Elderly SVT management considerations',
        hint: '👴 Age changes everything!'
      },

      {
        id: 'electrophysiology-study-insights',
        title: 'Electrophysiology Study: Advanced Insights',
        type: 'steps',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/ep-study-insights.png',
        imageAlt: 'Electrophysiology study findings',
        videoUrl: '/lessonvideo/module3/lesson23/ep-study.mp4',
        steps: [
          {
            number: 1,
            title: 'Diagnostic Capabilities',
            description: 'Differentiate AVNRT vs AVRT vs atrial tachycardia definitively'
          },
          {
            number: 2,
            title: 'Pathway Mapping',
            description: 'Locate exact pathway location for targeted ablation'
          },
          {
            number: 3,
            title: 'Risk Assessment',
            description: 'Determine accessory pathway properties and AFib risk'
          },
          {
            number: 4,
            title: 'Therapeutic Ablation',
            description: 'Simultaneous diagnosis and cure in single procedure'
          },
          {
            number: 5,
            title: 'Success Monitoring',
            description: 'Immediate assessment of ablation success and safety'
          },
          {
            number: 6,
            title: 'Future Developments',
            description: 'AI-guided mapping, zero-fluoro procedures, cryoablation advances'
          }
        ],
        hint: '🔬 EP study provides definitive answers!'
      },

      {
        id: 'novel-ablation-techniques',
        title: 'Novel Ablation Techniques & Technologies',
        type: 'tabs',
        backgroundColor: '#fff1f2',
        textColor: '#be185d',
        animation: 'fade',
        imageUrl: '/lessonimages/novel-ablation.png',
        imageAlt: 'Advanced ablation technologies',
        videoUrl: '/lessonvideo/module3/lesson23/novel-ablation.mp4',
        tabs: [
          {
            title: '❄️ Cryoablation',
            content: 'Mechanism: Tissue freezing (-70°C)\nAdvantages: Reversible, less pain, precise\nUses: AVNRT ablation, pediatric patients\nOutcomes: Similar success to radiofrequency\nComplication: Lower risk profile'
          },
          {
            title: '🤖 Robot-Assisted Ablation',
            content: 'Precision catheter manipulation\nReduced radiation exposure\nImproved stability and accuracy\nRemote operation capability\nSteep learning curve'
          },
          {
            title: '🧠 AI-Guided Mapping',
            content: 'Machine learning pathway identification\nPredictive modeling for success\nReduced procedure time\nPersonalized ablation strategies\nReal-time decision support'
          },
          {
            title: '⚡ Zero-Fluoroscopy Procedures',
            content: 'Electroanatomical mapping only\nReduced radiation exposure\nSafe for pregnancy/pediatrics\nIncreased procedure time initially\nGrowing adoption worldwide'
          }
        ],
        hint: '🔬 Technology revolutionizing SVT treatment!'
      },

      {
        id: 'genetic-familial-svt',
        title: 'Genetic & Familial Aspects of SVT',
        type: 'accordion',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/genetic-svt.png',
        imageAlt: 'Genetic and familial SVT patterns',
        videoUrl: '/lessonvideo/module3/lesson23/genetic-svt.mp4',
        accordionItems: [
          {
            title: '🧬 Familial WPW Syndrome',
            content: 'PRKAG2 mutations: WPW + hypertrophic cardiomyopathy\nAutosomal dominant inheritance\nEarly onset, multiple pathways\nHigh sudden death risk\nGenetic counseling recommended'
          },
          {
            title: '👨‍👩‍👧‍👦 Family Screening',
            content: 'Screen first-degree relatives of WPW patients\nECG screening recommended\nGenetic testing in familial cases\nEarly identification prevents complications\nLifestyle counseling for at-risk members'
          },
          {
            title: '🔬 Ion Channel Mutations',
            content: 'Rare causes of SVT susceptibility\nSodium channel variants\nCalcium channel abnormalities\nPotassium channel dysfunction\nPersonalized treatment implications'
          },
          {
            title: '🎯 Future Genetic Therapy',
            content: 'Gene therapy for ion channel disorders\nPersonalized ablation based on genetics\nPharmacogenomics for drug selection\nStem cell therapy for conduction disorders\nPrecision medicine approaches'
          }
        ],
        hint: '🧬 Genetics unlock personalized treatment!'
      },

      {
        id: 'future-svt-developments',
        title: 'Future Directions in SVT Management',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/future-svt-developments.png',
        imageAlt: 'Future developments in SVT care',
        videoUrl: '/lessonvideo/module3/lesson23/future-developments.mp4',
        highlights: [
          '📱 Mobile monitoring & AI diagnosis',
          '💊 Targeted molecular therapies',
          '🔬 Biomarker-guided treatment',
          '⚡ Non-invasive ablation techniques',
          '🧬 Precision medicine approaches'
        ],
        hint: '🚀 The future of SVT care is exciting!'
      },

      {
        id: 'svt-research-frontiers',
        title: 'SVT Research Frontiers & Clinical Trials',
        type: 'flashcard',
        flashcardFront: '🔬 What are the current research frontiers in SVT?',
        flashcardBack: 'KEY AREAS: 1) Wearable monitoring for better episode characterization, 2) Machine learning for ECG interpretation, 3) Personalized ablation strategies, 4) Novel antiarrhythmic targets, 5) Prevention strategies for high-risk patients, 6) Quality of life optimization, 7) Cost-effectiveness of early ablation vs medical therapy.',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lessonimages/svt-research.png',
        imageAlt: 'SVT research frontiers',
        hint: '🔬 Research drives better patient care!'
      },

      // COMPREHENSIVE UNIT 6 QUIZ
      {
        id: 'unit6-advanced-quiz',
        title: '🎓 Unit 6 Quiz: Advanced SVT Concepts',
        content: "Test your advanced SVT knowledge and clinical reasoning!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f8fafc',
        textColor: '#475569',
        animation: 'slide',
        imageUrl: '/lessonimages/advanced-svt-quiz.png',
        imageAlt: 'Advanced SVT concepts quiz',
        videoUrl: '/lessonvideo/module3/lesson23/unit6-quiz-explanation.mp4',
        hint: '🧠 Advanced clinical reasoning test!',
        question: "A 28-year-old pregnant woman at 32 weeks develops SVT at 180 bpm with stable vital signs. What is the most appropriate first-line treatment?",
        options: [
          "Verapamil 10mg IV",
          "Adenosine 6mg IV", 
          "Synchronized cardioversion",
          "Esmolol infusion"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Adenosine is the safest and most effective first-line treatment for SVT in pregnancy. It has a very short half-life, doesn't cross the placenta significantly, and is highly effective for terminating AVNRT and AVRT."
      },

      // Audio Lesson after Unit 6
      {
        id: 'svt-advanced-mastery-audio',
        title: '🎧 Advanced SVT Mastery Audio',
        content: 'Final comprehensive audio covering special populations, advanced techniques, and future directions.',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#f8fafc', 
        textColor: '#475569',
        animation: 'fade',
        imageUrl: '/lessonimages/svt-mastery-final.png',
        imageAlt: 'Complete SVT mastery achievement',hint: '🎧 Complete your SVT mastery journey!'
      },

      // Final completion slide
      {
        id: 'svt-mastery-complete',
        title: '🏆 Comprehensive SVT Mastery Complete!',
        content: 'Outstanding! You\'ve achieved comprehensive SVT mastery through 6 detailed units. You can now expertly recognize all SVT types, understand complex mechanisms, manage emergencies, and apply advanced concepts like a cardiac electrophysiology specialist!',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: '/lessonimages/svt-comprehensive-mastery.png',
        imageAlt: 'Comprehensive SVT mastery achievement celebration',
        highlights: [
          '✅ Advanced SVT recognition & classification mastery',
          '✅ Complete electrophysiology & mechanism expertise',
          '✅ AVNRT deep dive specialist knowledge',
          '✅ WPW & AVRT comprehensive understanding',
          '✅ Emergency management protocol mastery',
          '✅ Advanced topics & special populations expertise'
        ],
        hint: '🎉 You\'re now a comprehensive SVT specialist!'
      }
    ],
    summary: "🎉 Congratulations! You've achieved comprehensive SVT mastery through 6 detailed units covering recognition & classification, mechanisms & electrophysiology, AVNRT deep dive, AVRT & WPW syndrome, management & emergency care, and advanced topics. You can now expertly manage all forms of supraventricular tachycardia with specialist-level knowledge!",
    keyPoints: [
      "SVT classification: AVNRT (60%), AVRT (30%), AT (10%) with narrow QRS <120ms",
      "Reentry mechanisms dominate (90%) with dual AV node pathways and accessory pathway circuits",
      "AVNRT variants: Typical (90%) with hidden P waves, atypical (10%) with visible P waves after QRS",
      "WPW syndrome: Delta waves + symptoms, AFib+WPW is emergency requiring cardioversion/procainamide",
      "Management hierarchy: Vagal maneuvers → adenosine → cardioversion for unstable patients",
      "Advanced concepts: Special populations (pregnancy, athletes, elderly) require modified approaches"
    ],
    resources: [
      {
        title: "Interactive SVT Simulator",
        url: "/resources/svt-simulator", 
        type: "tool",
        description: "Practice SVT recognition with interactive narrow complex tachycardias"
      },
      {
        title: "Adenosine Dosing Calculator",
        url: "/resources/adenosine-calculator",
        type: "tool", 
        description: "Calculate proper adenosine dosing and protocol"
      },
      {
        title: "Advanced SVT Management",
        url: "/resources/advanced-svt",
        type: "reference",
        description: "Complex SVT cases and ablation strategies"
      }
    ]
  },
  
  // Enhanced Duolingo-Style Tasks with Medical Focus
  tasks: []
};
