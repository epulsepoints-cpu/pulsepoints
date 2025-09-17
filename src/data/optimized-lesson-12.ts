import { Lesson } from '@/types/learning';

export const optimizedLesson12: Lesson = {
  id: 'optimized-lesson-12',
  moduleId: 'module-2',
  title: 'Complete Sinus Bradycardia Mastery',
  description: 'Master sinus bradycardia with 6 comprehensive units: Definition & Criteria, Recognition Techniques, Causes & Pathophysiology, Clinical Assessment, Treatment Strategies, and Real-World Applications. Build expertise through progressive learning.',
  order: 12,
  estimatedTime: 45,
  
  // Duolingo-style lesson structure
  content: {
    type: 'mixed',
    introduction: 'Welcome to your complete sinus bradycardia mastery journey! 🩺 You\'ll progress through 6 carefully designed units that build upon each other, just like Duolingo lessons. Each unit ends with a quick quiz to ensure understanding before moving forward.',
    sections: [
      {
        id: 'bradycardia-overview',
        title: '🩺 Sinus Bradycardia Learning Journey',
        content: 'UNIT 1: Definition & Criteria → UNIT 2: Recognition Techniques → UNIT 3: Causes & Pathophysiology → UNIT 4: Clinical Assessment → UNIT 5: Treatment Strategies → UNIT 6: Real-World Applications',
        mediaType: 'image'
      }
    ],
    summary: 'Complete mastery of sinus bradycardia through systematic progressive learning with 6 comprehensive units covering all aspects of slow sinus rhythm identification, causes, and clinical management.',
    
    // ===============================================
    // 📚 COMPREHENSIVE SLIDES (6 UNITS × ~8 SLIDES EACH = ~48 SLIDES)
    // ===============================================
    slides: [
      
      // ===============================================
      // 📊 UNIT 1: DEFINITION & CRITERIA (8 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '📊 Unit 1: Definition & Criteria',
        content: 'Begin your sinus bradycardia mastery! Learn the precise definition, diagnostic criteria, and how to differentiate normal from pathological slow heart rates.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/bradycardia_45bpm.png',
        imageAlt: 'Perfect sinus bradycardia example at 45 BPM',
        highlights: [
          '📊 Heart rate <60 BPM definition',
          '🫀 SA node remains the pacemaker',
          '📏 Normal rhythm characteristics maintained',
          '🎯 Diagnostic criteria mastery'
        ],
        hint: '📊 Understanding slow heart rates with purpose!'
      },

      // 🎥 ECGkid Technical Foundation - Lead Placement
      {
        id: 'ecgkid-lead-placement',
        title: '🎥 Technical Foundation: 12 Lead ECG Placement',
        content: 'Before analyzing any rhythm, ensure proper lead placement! This ECGkid technical guide shows exactly how to position leads correctly and which regions of the heart each lead represents. Essential for accurate bradycardia assessment.',
        type: 'youtube',
        layout: 'centered',
        backgroundColor: '#0f766e',
        textColor: '#ffffff',
        animation: 'fade',
        youtubeId: '4xIwZPQwmjY',
        videoDuration: 114, // 1 minute, 54 seconds
        minimumWatchTime: 90, // 1.5 minutes minimum
        requireFullWatch: true, // Technical fundamentals
        imageUrl: '/ecg/medical_accurate/bradycardia_45bpm.png',
        imageAlt: 'ECGkid 12-lead ECG placement guide',
        hint: '🎯 Proper lead placement ensures accurate rhythm analysis!',
        highlights: [
          'Precise 12-lead placement technique',
          'Heart region-to-lead correlation',
          'Technical accuracy foundation',
          'Professional ECG recording standards'
        ]
      },
      
      {
        id: 'bradycardia-definition',
        title: 'Sinus Bradycardia Definition',
        type: 'accordion',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        accordionItems: [
          {
            title: '📝 Core Definition',
            content: 'Sinus rhythm with heart rate <60 beats per minute\nSA node still functions as primary pacemaker\nMaintains all normal sinus rhythm characteristics'
          },
          {
            title: '🫀 SA Node Function',
            content: 'SA node fires slower but maintains dominance\nNormal P wave morphology preserved\nRegular rhythm with consistent intervals'
          },
          {
            title: '🔍 Key Differentiators',
            content: 'Different from junctional bradycardia (no P waves)\nDifferent from heart blocks (AV conduction intact)\nDifferent from escape rhythms (SA node active)'
          },
          {
            title: '⚖️ Normal vs Abnormal',
            content: 'Athletes: Often physiologic and normal\nElderly: May be age-related\nPathologic: Associated with symptoms or disease'
          }
        ],
        hint: '📝 Rate <60 BPM but rhythm stays normal!'
      },

      {
        id: 'diagnostic-criteria',
        title: 'Complete Diagnostic Criteria',
        type: 'steps',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Rate Assessment',
            description: 'Heart rate must be <60 beats per minute (calculated accurately using multiple methods)'
          },
          {
            number: 2,
            title: 'Rhythm Regularity',
            description: 'R-R intervals should be equal (regular rhythm) with <0.12 second variation'
          },
          {
            number: 3,
            title: 'P Wave Analysis',
            description: 'P waves present before each QRS, upright in lead II, consistent morphology'
          },
          {
            number: 4,
            title: 'AV Relationship',
            description: 'Normal PR interval (0.12-0.20 sec), 1:1 P:QRS ratio, consistent conduction'
          },
          {
            number: 5,
            title: 'QRS Assessment',
            description: 'Narrow QRS complexes (<0.12 sec) indicating normal ventricular conduction'
          }
        ],
        hint: '✅ All NSR criteria must be met, just slower!'
      },

      {
        id: 'rate-classifications',
        title: 'Bradycardia Rate Classifications',
        type: 'tabs',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: '🟢 Mild (50-59 BPM)',
            content: 'Often physiologic in athletes\nUsually asymptomatic\nMay be normal for individual\nMonitor for symptoms'
          },
          {
            title: '🟡 Moderate (40-49 BPM)',
            content: 'May cause symptoms at rest\nReduced cardiac output possible\nRequires evaluation for causes\nConsider treatment if symptomatic'
          },
          {
            title: '🔴 Severe (<40 BPM)',
            content: 'Often symptomatic\nSignificant hemodynamic impact\nUrgent evaluation needed\nTreatment usually required'
          },
          {
            title: '⚠️ Clinical Context',
            content: 'Age and fitness level matter\nSymptoms more important than rate\nBaseline rate for comparison\nUnderlying conditions influence'
          }
        ],
        hint: '📊 Severity depends on rate AND symptoms!'
      },

      {
        id: 'physiologic-vs-pathologic',
        title: 'Physiologic vs Pathologic Bradycardia',
        type: 'flashcard',
        backgroundColor: '#ecfdf5',
        textColor: '#047857',
        animation: 'fade',
        flashcardFront: '⚖️ How do you tell normal from abnormal?',
        flashcardBack: 'PHYSIOLOGIC (Normal):\n✅ Athletes and fit individuals\n✅ Sleep-related slowing\n✅ Asymptomatic patients\n✅ Good exercise tolerance\n\nPATHOLOGIC (Abnormal):\n❌ Symptoms: fatigue, dizziness, syncope\n❌ Poor exercise tolerance\n❌ Associated with disease\n❌ Medication-induced',
        hint: '⚖️ Symptoms and context are key!'
      },

      {
        id: 'age-considerations',
        title: 'Age-Related Considerations',
        type: 'accordion',
        backgroundColor: '#fdf4ff',
        textColor: '#86198f',
        animation: 'fade',
        accordionItems: [
          {
            title: '👶 Pediatric Considerations',
            content: 'Different age-based normal ranges\nInfants: >100 BPM normal\nChildren: >80 BPM normal\nBradycardia definitions vary by age'
          },
          {
            title: '🏃 Young Athletes',
            content: 'Resting bradycardia common and normal\nTraining bradycardia due to fitness\nExcellent exercise tolerance\nNo symptoms during activity'
          },
          {
            title: '👵 Elderly Patients',
            content: 'SA node function may decline with age\nHigher prevalence of sinus node disease\nMore likely to be symptomatic\nMedications may contribute'
          },
          {
            title: '🎯 Clinical Assessment',
            content: 'Always consider patient age\nCompare to previous ECGs if available\nAssess functional capacity\nEvaluate for symptoms'
          }
        ],
        hint: '👥 Age changes everything about bradycardia!'
      },

      {
        id: 'measurement-techniques',
        title: 'Accurate Rate Measurement',
        type: 'steps',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Choose the Right Method',
            description: 'Regular rhythm: Use 300 rule or 1500 rule. Irregular rhythm: Use 6-second method'
          },
          {
            number: 2,
            title: 'Verify with Multiple Leads',
            description: 'Check rate in different leads to ensure accuracy and rule out artifacts'
          },
          {
            number: 3,
            title: 'Consider Rhythm Strip Length',
            description: 'Use longer strips for more accurate assessment, especially in borderline cases'
          },
          {
            number: 4,
            title: 'Double-Check Calculations',
            description: 'Always verify your calculation, especially when rate is close to 60 BPM threshold'
          }
        ],
        hint: '🧮 Accurate measurement prevents misdiagnosis!'
      },

      {
        id: 'unit1-summary',
        title: 'Unit 1 Complete! 📊',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/bradycardia_52bpm_4.png',
        imageAlt: 'Unit 1 complete: Sinus bradycardia at 52 BPM',
        highlights: [
          '✅ Bradycardia definition mastered',
          '✅ Diagnostic criteria understood',
          '✅ Rate classifications learned',
          '✅ Physiologic vs pathologic differentiated',
          '✅ Ready for recognition techniques!'
        ],
        hint: '🎉 Bradycardia foundation complete!'
      },

      // ===============================================
      // 🔍 UNIT 2: RECOGNITION TECHNIQUES (8 slides)
      // ===============================================
      {
        id: 'unit2-intro',
        title: '🔍 Unit 2: Recognition Techniques',
        content: 'Master systematic bradycardia recognition! Learn step-by-step techniques to identify sinus bradycardia quickly and accurately.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#c2410c',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/bradycardia_40bpm.png',
        imageAlt: 'Sinus bradycardia recognition example at 40 BPM',
        highlights: [
          '🔍 Systematic assessment approach',
          '📊 Quick rate calculation methods',
          '📈 P wave identification techniques',
          '⚡ Differential diagnosis skills'
        ],
        hint: '🔍 Master the art of bradycardia recognition!'
      },

      {
        id: 'systematic-approach',
        title: 'Systematic Recognition Approach',
        type: 'steps',
        backgroundColor: '#f0fff4',
        textColor: '#047857',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Quick Rate Assessment',
            description: 'First impression: Is the rhythm obviously slow? Use 6-second method for quick screening'
          },
          {
            number: 2,
            title: 'Rhythm Regularity Check',
            description: 'Are R-R intervals equal? Use calipers to walk across the rhythm strip'
          },
          {
            number: 3,
            title: 'P Wave Analysis',
            description: 'Are P waves present before each QRS? Are they upright in lead II? Consistent shape?'
          },
          {
            number: 4,
            title: 'AV Relationship Assessment',
            description: 'Is the PR interval normal and consistent? Is there 1:1 P:QRS relationship?'
          },
          {
            number: 5,
            title: 'Calculate Precise Rate',
            description: 'Use 300 rule or 1500 rule for exact rate calculation and documentation'
          }
        ],
        hint: '🔍 System beats guessing every time!'
      },

      {
        id: 'quick-recognition-tips',
        title: 'Quick Recognition Tips',
        type: 'accordion',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        accordionItems: [
          {
            title: '⚡ Lightning Fast Assessment',
            content: 'Count QRS complexes in 6 seconds\nMultiply by 10 for approximate rate\nIf <6 complexes in 6 seconds = bradycardia'
          },
          {
            title: '📏 Large Box Method',
            content: 'Count large boxes between R waves\n300 ÷ number of boxes = heart rate\nIf >5 large boxes = bradycardia'
          },
          {
            title: '👀 Visual Pattern Recognition',
            content: 'Wide spacing between QRS complexes\nLonger R-R intervals than normal\nFewer complexes per standard strip'
          },
          {
            title: '🎯 Lead Selection',
            content: 'Lead II best for P wave assessment\nLead V1 helpful for atrial activity\nRhythm strip provides longer view'
          }
        ],
        hint: '⚡ Speed and accuracy through practice!'
      },

      {
        id: 'p-wave-analysis',
        title: 'P Wave Recognition Mastery',
        type: 'tabs',
        backgroundColor: '#ecfdf5',
        textColor: '#059669',
        animation: 'fade',
        tabs: [
          {
            title: '📈 Normal P Waves',
            content: 'Upright in leads I, II, aVF\nInverted in aVR (normal)\nConsistent shape and size\nOne P wave per QRS complex'
          },
          {
            title: '🔍 Assessment Techniques',
            content: 'Use lead II as primary assessment lead\nLook for consistent morphology\nMeasure P-P intervals for regularity\nConfirm 1:1 relationship with QRS'
          },
          {
            title: '⚠️ Common Pitfalls',
            content: 'Small P waves can be missed\nBaseline artifacts may mimic P waves\nT waves can be mistaken for P waves\nCheck multiple leads for confirmation'
          },
          {
            title: '💡 Pro Tips',
            content: 'Increase gain if P waves are small\nUse calipers to measure P-P intervals\nCompare with patient\'s previous ECGs\nLook for consistent PR intervals'
          }
        ],
        hint: '📈 P waves prove SA node origin!'
      },

      {
        id: 'differential-diagnosis',
        title: 'Differential Diagnosis of Slow Rhythms',
        type: 'flashcard',
        backgroundColor: '#fdf4ff',
        textColor: '#86198f',
        animation: 'fade',
        flashcardFront: '🤔 How do you differentiate slow rhythms?',
        flashcardBack: 'SINUS BRADYCARDIA:\n✅ P waves present, normal\n✅ Regular rhythm\n✅ Normal PR interval\n\nJUNCTIONAL BRADYCARDIA:\n❌ No P waves or inverted P waves\n❌ Narrow QRS from AV junction\n\nHEART BLOCK:\n❌ P waves present but not conducting\n❌ Variable or absent P:QRS relationship',
        hint: '🤔 P waves are the key differentiator!'
      },

      {
        id: 'measurement-precision',
        title: 'Precise Rate Measurement',
        type: 'steps',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Choose Best Method',
            description: 'Regular rhythm: 300 rule most accurate. Irregular: 6-second method required'
          },
          {
            number: 2,
            title: 'Use Quality Lead',
            description: 'Select lead with clear R waves and minimal artifacts for measurement'
          },
          {
            number: 3,
            title: 'Measure Multiple Cycles',
            description: 'Average several R-R intervals for most accurate rate calculation'
          },
          {
            number: 4,
            title: 'Document Findings',
            description: 'Record exact rate, method used, and any irregular patterns observed'
          }
        ],
        hint: '📏 Precision matters for accurate diagnosis!'
      },

      {
        id: 'common-mistakes',
        title: 'Common Recognition Mistakes',
        type: 'accordion',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        accordionItems: [
          {
            title: '❌ Artifact Misinterpretation',
            content: 'Baseline wander mimicking P waves\nElectrical interference creating false rhythms\nPatient movement causing irregular patterns'
          },
          {
            title: '❌ Rate Calculation Errors',
            content: 'Using wrong formula for rate calculation\nNot accounting for paper speed differences\nMeasuring from wrong points on QRS'
          },
          {
            title: '❌ P Wave Oversight',
            content: 'Missing small or buried P waves\nNot checking multiple leads for P waves\nConfusing T waves with P waves'
          },
          {
            title: '❌ Clinical Context Ignored',
            content: 'Not considering patient age and fitness\nIgnoring medications that cause bradycardia\nFailing to assess symptoms with findings'
          }
        ],
        hint: '❌ Learn from common mistakes!'
      },

      {
        id: 'unit2-summary',
        title: 'Unit 2 Complete! 🔍',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#c2410c',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/bradycardia_35bpm_1.png',
        imageAlt: 'Unit 2 recognition mastery: Severe bradycardia at 35 BPM',
        highlights: [
          '✅ Systematic approach mastered',
          '✅ Quick recognition techniques learned',
          '✅ P wave analysis skills developed',
          '✅ Differential diagnosis understood',
          '✅ Ready for causes and pathophysiology!'
        ],
        hint: '🎉 Recognition expertise achieved!'
      },

      {
        id: 'bradycardia-audio-review',
        title: '🎧 Bradycardia Recognition Audio',
        content: 'Listen to reinforce your bradycardia recognition skills. This 5-minute audio covers systematic assessment, rate calculation methods, and key differentiating features.',
        type: 'audio',
        backgroundColor: '#fdf2f8',
        textColor: '#be185d',
        animation: 'fade',
        audioUrl: '/audio/bradycardia-recognition-mastery.mp3',
        hint: '🎧 Audio reinforcement for recognition mastery!'
      },

      // ===============================================
      // 🧬 UNIT 3: CAUSES & PATHOPHYSIOLOGY (8 slides)
      // ===============================================
      {
        id: 'unit3-intro',
        title: '🧬 Unit 3: Causes & Pathophysiology',
        content: 'Understand the why behind bradycardia! Learn physiologic causes, pathologic conditions, medications, and underlying mechanisms.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fdf4',
        textColor: '#166534',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/bradycardia_48bpm_3.png',
        imageAlt: 'Bradycardia pathophysiology example at 48 BPM',
        highlights: [
          '🏃 Physiologic causes (athletes, sleep)',
          '💊 Medication-induced bradycardia',
          '🫀 Intrinsic sinus node disease',
          '🧬 Understanding the mechanisms'
        ],
        hint: '🧬 Knowledge of causes guides treatment!'
      },

      {
        id: 'physiologic-causes',
        title: 'Physiologic Causes (Normal)',
        type: 'tabs',
        backgroundColor: '#f0fdf4',
        textColor: '#166534',
        animation: 'fade',
        tabs: [
          {
            title: '🏃 Athletic Training',
            content: 'Enhanced parasympathetic tone\nIncreased stroke volume efficiency\nLower resting metabolic demands\nExcellent exercise tolerance maintained'
          },
          {
            title: '😴 Sleep-Related',
            content: 'Normal during sleep cycles\nParasympathetic dominance at night\nREM vs non-REM variations\nReturns to normal when awake'
          },
          {
            title: '🧘 Vagal Stimulation',
            content: 'Valsalva maneuver effects\nCarotid sinus massage\nDeep breathing or meditation\nTransient and reversible'
          },
          {
            title: '👥 Age Considerations',
            content: 'Normal aging process\nDecreased SA node automaticity\nReduced response to beta stimulation\nOften asymptomatic in elderly'
          }
        ],
        hint: '🏃 These are normal and usually harmless!'
      },

      {
        id: 'medication-causes',
        title: 'Medication-Induced Bradycardia',
        type: 'accordion',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        accordionItems: [
          {
            title: '🫀 Beta-Blockers',
            content: 'Block beta-1 receptors in SA node\nDose-dependent effect\nExamples: metoprolol, atenolol, propranolol\nReversible with dose reduction or cessation'
          },
          {
            title: '🔌 Calcium Channel Blockers',
            content: 'Block L-type calcium channels\nDiltiazem and verapamil (non-DHP)\nDirect effect on SA node automaticity\nDose adjustment often helpful'
          },
          {
            title: '💊 Digoxin',
            content: 'Enhances vagal tone\nDirect effect on SA node\nNarrow therapeutic window\nToxicity can cause severe bradycardia'
          },
          {
            title: '⚡ Antiarrhythmic Drugs',
            content: 'Class I: sodium channel blockers\nClass III: potassium channel blockers\nAmiodarone commonly causes bradycardia\nMultiple mechanisms involved'
          }
        ],
        hint: '💊 Always review the medication list!'
      },

      {
        id: 'pathologic-causes',
        title: 'Pathologic Causes',
        type: 'flashcard',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        flashcardFront: '⚠️ What diseases cause bradycardia?',
        flashcardBack: 'CARDIAC CAUSES:\n• Sick sinus syndrome\n• Ischemic heart disease\n• Myocarditis/cardiomyopathy\n• Infiltrative diseases\n\nSYSTEMIC CAUSES:\n• Hypothyroidism\n• Hyperkalemia\n• Hypothermia\n• Increased intracranial pressure\n\nINFECTIOUS:\n• Lyme disease\n• Endocarditis',
        hint: '⚠️ These require investigation and treatment!'
      },

      {
        id: 'sinus-node-disease',
        title: 'Sick Sinus Syndrome Pathophysiology',
        type: 'steps',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'SA Node Degeneration',
            description: 'Age-related fibrosis and calcification of SA node tissue leading to decreased automaticity'
          },
          {
            number: 2,
            title: 'Conduction System Impairment',
            description: 'Damage to internodal pathways affecting impulse transmission from SA node to AV node'
          },
          {
            number: 3,
            title: 'Autonomic Dysfunction',
            description: 'Altered response to sympathetic and parasympathetic stimulation affecting rate control'
          },
          {
            number: 4,
            title: 'Clinical Manifestations',
            description: 'Bradycardia, pauses, chronotropic incompetence, and alternating bradycardia-tachycardia'
          }
        ],
        hint: '🫀 Progressive SA node dysfunction over time!'
      },

      {
        id: 'mechanisms-overview',
        title: 'Bradycardia Mechanisms',
        type: 'accordion',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        accordionItems: [
          {
            title: '⚡ Decreased Automaticity',
            content: 'Reduced SA node firing rate\nImpaired phase 4 depolarization\nCalcium channel dysfunction\nDecreased metabolic activity'
          },
          {
            title: '🧠 Enhanced Vagal Tone',
            content: 'Increased parasympathetic activity\nAcetylcholine release at SA node\nSlowed phase 4 slope\nReversible with atropine'
          },
          {
            title: '💊 Pharmacologic Suppression',
            content: 'Beta-adrenergic blockade\nCalcium channel inhibition\nSodium channel effects\nDirect SA node suppression'
          },
          {
            title: '🔬 Cellular Level Changes',
            content: 'Ion channel abnormalities\nMitochondrial dysfunction\nFibrotic tissue replacement\nInflammatory processes'
          }
        ],
        hint: '🧬 Multiple pathways lead to slow rates!'
      },

      {
        id: 'risk-factors',
        title: 'Risk Factors for Bradycardia',
        type: 'tabs',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: '👥 Demographics',
            content: 'Advanced age (>65 years)\nMale gender slightly higher risk\nFamily history of conduction disease\nGenetic predisposition factors'
          },
          {
            title: '🫀 Cardiac Conditions',
            content: 'Prior myocardial infarction\nCardiomyopathy (ischemic/non-ischemic)\nValvular heart disease\nCongenital heart disease'
          },
          {
            title: '🩺 Systemic Diseases',
            content: 'Hypothyroidism\nSleep apnea syndrome\nCollagen vascular diseases\nNeuromuscular disorders'
          },
          {
            title: '💊 Iatrogenic Factors',
            content: 'Multiple cardiac medications\nElectrolyte imbalances\nRadiation therapy to chest\nCardiac surgery complications'
          }
        ],
        hint: '⚠️ Multiple factors increase bradycardia risk!'
      },

      {
        id: 'unit3-summary',
        title: 'Unit 3 Complete! 🧬',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fdf4',
        textColor: '#166534',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/bradycardia_55bpm_5.png',
        imageAlt: 'Unit 3 pathophysiology mastery: Bradycardia at 55 BPM',
        highlights: [
          '✅ Physiologic causes understood',
          '✅ Medication effects mastered',
          '✅ Pathologic mechanisms learned',
          '✅ Risk factors identified',
          '✅ Ready for clinical assessment!'
        ],
        hint: '🎉 Pathophysiology mastery achieved!'
      },

      // ===============================================
      // 🩺 UNIT 4: CLINICAL ASSESSMENT (8 slides)
      // ===============================================
      {
        id: 'unit4-intro',
        title: '🩺 Unit 4: Clinical Assessment',
        content: 'Master clinical evaluation! Learn systematic patient assessment, symptom correlation, and when bradycardia becomes clinically significant.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/bradycardia_42bpm_2.png',
        imageAlt: 'Clinical assessment example: Symptomatic bradycardia at 42 BPM',
        highlights: [
          '🩺 Systematic patient evaluation',
          '💭 Symptom correlation techniques',
          '📊 Hemodynamic assessment',
          '🎯 Clinical significance determination'
        ],
        hint: '🩺 Patient assessment drives treatment decisions!'
      },

      {
        id: 'symptom-assessment',
        title: 'Bradycardia Symptom Assessment',
        type: 'accordion',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        accordionItems: [
          {
            title: '😵 Cerebral Symptoms',
            content: 'Dizziness and lightheadedness\nSyncope or near-syncope episodes\nConfusion or memory problems\nFatigue and weakness'
          },
          {
            title: '🫁 Cardiopulmonary Symptoms',
            content: 'Shortness of breath on exertion\nChest pain or pressure\nPalpitations (paradoxical)\nReduced exercise tolerance'
          },
          {
            title: '🩸 Perfusion-Related',
            content: 'Cold extremities\nDecreased urine output\nAltered mental status\nSkin color changes'
          },
          {
            title: '📊 Symptom Correlation',
            content: 'Temporal relationship to bradycardia\nActivity level when symptoms occur\nSeverity and frequency assessment\nImpact on daily activities'
          }
        ],
        hint: '💭 Symptoms tell the clinical story!'
      },

      {
        id: 'hemodynamic-evaluation',
        title: 'Hemodynamic Assessment',
        type: 'steps',
        backgroundColor: '#f0fff4',
        textColor: '#047857',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Vital Signs Assessment',
            description: 'Blood pressure measurement, pulse quality assessment, respiratory rate, and oxygen saturation'
          },
          {
            number: 2,
            title: 'Perfusion Evaluation',
            description: 'Capillary refill time, skin temperature, mental status, and urine output monitoring'
          },
          {
            number: 3,
            title: 'Cardiac Output Estimation',
            description: 'Clinical signs of low output: fatigue, weakness, exercise intolerance, peripheral edema'
          },
          {
            number: 4,
            title: 'Compensation Assessment',
            description: 'Body\'s compensation mechanisms: increased stroke volume, vasoconstriction, fluid retention'
          }
        ],
        hint: '🩸 Hemodynamics reveal clinical impact!'
      },

      {
        id: 'clinical-significance',
        title: 'Determining Clinical Significance',
        type: 'flashcard',
        backgroundColor: '#fdf4ff',
        textColor: '#86198f',
        animation: 'fade',
        flashcardFront: '🎯 When is bradycardia clinically significant?',
        flashcardBack: 'SIGNIFICANT BRADYCARDIA:\n\n✅ SYMPTOMS: Dizziness, syncope, fatigue\n✅ HEMODYNAMIC: Low BP, poor perfusion\n✅ FUNCTIONAL: Reduced exercise capacity\n✅ SEVERE: Heart rate <40 BPM\n\nNOT SIGNIFICANT:\n❌ Asymptomatic patients\n❌ Good exercise tolerance\n❌ Normal hemodynamics\n❌ Physiologic causes (athletes)',
        hint: '🎯 Symptoms + hemodynamics = significance!'
      },

      {
        id: 'diagnostic-workup',
        title: 'Comprehensive Diagnostic Workup',
        type: 'tabs',
        backgroundColor: '#ecfdf5',
        textColor: '#059669',
        animation: 'fade',
        tabs: [
          {
            title: '🔬 Laboratory Tests',
            content: 'TSH (thyroid function)\nElectrolytes (K+, Mg2+, Ca2+)\nDigoxin level if applicable\nTroponins if ischemia suspected'
          },
          {
            title: '📊 ECG Studies',
            content: '12-lead ECG analysis\n24-48 hour Holter monitor\nEvent recorder for symptoms\nExercise stress testing'
          },
          {
            title: '🫀 Cardiac Imaging',
            content: 'Echocardiogram for structure\nCoronary angiography if indicated\nCardiac MRI for infiltrative disease\nNuclear studies for perfusion'
          },
          {
            title: '📋 Clinical History',
            content: 'Medication review\nFamily history assessment\nPrevious ECG comparison\nExercise tolerance evaluation'
          }
        ],
        hint: '🔬 Thorough workup guides treatment!'
      },

      {
        id: 'unit4-summary',
        title: 'Unit 4 Complete! 🩺',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/bradycardia_50bpm.png',
        imageAlt: 'Unit 4 clinical assessment complete: Bradycardia at 50 BPM',
        highlights: [
          '✅ Symptom assessment mastered',
          '✅ Hemodynamic evaluation learned',
          '✅ Clinical significance understood',
          '✅ Diagnostic workup planned',
          '✅ Ready for treatment strategies!'
        ],
        hint: '🎉 Clinical assessment expertise achieved!'
      },

      // ===============================================
      // 💊 UNIT 5: TREATMENT STRATEGIES (8 slides)
      // ===============================================
      {
        id: 'unit5-intro',
        title: '💊 Unit 5: Treatment Strategies',
        content: 'Master bradycardia management! Learn acute interventions, chronic treatment options, and evidence-based therapeutic approaches.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef5e7',
        textColor: '#a16207',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/bradycardia_35bpm.png',
        imageAlt: 'Treatment-requiring bradycardia at 35 BPM',
        highlights: [
          '🚨 Acute management protocols',
          '⚡ Pharmacologic interventions',
          '🔧 Pacemaker indications',
          '📊 Evidence-based treatment algorithms'
        ],
        hint: '💊 Right treatment saves lives!'
      },

      {
        id: 'acute-management',
        title: 'Acute Bradycardia Management',
        type: 'steps',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Assess Hemodynamic Stability',
            description: 'Check blood pressure, perfusion, mental status, and presence of symptoms'
          },
          {
            number: 2,
            title: 'Identify Reversible Causes',
            description: 'Review medications, check electrolytes, assess for ischemia or toxicity'
          },
          {
            number: 3,
            title: 'Initiate Pharmacologic Support',
            description: 'Atropine 0.5-1mg IV if symptomatic, may repeat every 3-5 minutes'
          },
          {
            number: 4,
            title: 'Consider Advanced Interventions',
            description: 'Transcutaneous pacing if atropine ineffective, dopamine or epinephrine infusion'
          }
        ],
        hint: '🚨 ABCs first, then specific treatment!'
      },

      {
        id: 'pharmacologic-treatment',
        title: 'Pharmacologic Treatment Options',
        type: 'accordion',
        backgroundColor: '#fef5e7',
        textColor: '#a16207',
        animation: 'fade',
        accordionItems: [
          {
            title: '💉 Atropine',
            content: 'First-line for symptomatic bradycardia\nBlocks vagal effects on SA node\nDose: 0.5-1mg IV, repeat as needed\nMaximum: 3mg total dose'
          },
          {
            title: '💊 Chronotropic Agents',
            content: 'Dopamine: 2-10 mcg/kg/min infusion\nEpinephrine: 2-10 mcg/min infusion\nIsoproterenol: 2-10 mcg/min (rarely used)\nTemporary measures until definitive therapy'
          },
          {
            title: '🔄 Medication Adjustment',
            content: 'Reduce or eliminate bradycardic drugs\nBeta-blocker dose reduction\nCalcium channel blocker adjustment\nDigoxin level optimization'
          },
          {
            title: '⚠️ Contraindications',
            content: 'Atropine may worsen second-degree AV block\nAvoid if transplanted heart (denervated)\nCaution with coronary artery disease\nMonitor for tachycardia complications'
          }
        ],
        hint: '💉 Atropine is usually first choice!'
      },

      {
        id: 'pacemaker-indications',
        title: 'Permanent Pacemaker Indications',
        type: 'flashcard',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcardFront: '🔧 When does bradycardia need a pacemaker?',
        flashcardBack: 'CLASS I INDICATIONS (Definite):\n\n✅ Symptomatic sinus bradycardia\n✅ Chronotropic incompetence\n✅ Sinus node dysfunction with symptoms\n✅ Post-operative bradycardia (permanent)\n\nCLASS II (Reasonable):\n• Asymptomatic severe bradycardia (<40 BPM)\n• Drug-induced symptomatic bradycardia\n\nCLASS III (Not indicated):\n❌ Asymptomatic bradycardia\n❌ Reversible causes only',
        hint: '🔧 Symptoms + irreversible = pacemaker!'
      },

      {
        id: 'treatment-algorithm',
        title: 'Treatment Decision Algorithm',
        type: 'steps',
        backgroundColor: '#ecfdf5',
        textColor: '#059669',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Symptomatic Assessment',
            description: 'Is patient symptomatic? Hemodynamically unstable? Acute or chronic presentation?'
          },
          {
            number: 2,
            title: 'Reversible Cause Evaluation',
            description: 'Medications, electrolytes, ischemia, toxicity - address reversible causes first'
          },
          {
            number: 3,
            title: 'Acute vs Chronic Management',
            description: 'Acute: Atropine, pacing, pressors. Chronic: Medication adjustment, pacemaker evaluation'
          },
          {
            number: 4,
            title: 'Long-term Strategy',
            description: 'Permanent pacing if indicated, medication optimization, ongoing monitoring'
          }
        ],
        hint: '📊 Systematic approach ensures best outcomes!'
      },

      {
        id: 'pacing-modalities',
        title: 'Pacing Options and Selection',
        type: 'tabs',
        backgroundColor: '#fdf4ff',
        textColor: '#86198f',
        animation: 'fade',
        tabs: [
          {
            title: '🔧 Single Chamber (VVI)',
            content: 'Ventricular pacing only\nSimple and reliable\nLoss of AV synchrony\nSuitable for atrial fibrillation'
          },
          {
            title: '🔧 Dual Chamber (DDD)',
            content: 'Atrial and ventricular pacing\nMaintains AV synchrony\nPhysiologic pacing\nPreferred for sinus node disease'
          },
          {
            title: '🔧 Rate-Responsive',
            content: 'Adjusts rate with activity\nMotion or minute ventilation sensors\nImproves exercise capacity\nBeneficial for chronotropic incompetence'
          },
          {
            title: '🎯 Selection Criteria',
            content: 'Patient age and activity level\nUnderlying rhythm disorders\nAtrial function assessment\nLong-term prognosis considerations'
          }
        ],
        hint: '🔧 Right pacemaker for right patient!'
      },

      {
        id: 'unit5-summary',
        title: 'Unit 5 Complete! 💊',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef5e7',
        textColor: '#a16207',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/bradycardia_55bpm.png',
        imageAlt: 'Unit 5 treatment mastery: Managed bradycardia at 55 BPM',
        highlights: [
          '✅ Acute management protocols mastered',
          '✅ Pharmacologic options understood',
          '✅ Pacemaker indications learned',
          '✅ Treatment algorithms memorized',
          '✅ Ready for real-world applications!'
        ],
        hint: '🎉 Treatment expertise achieved!'
      },

      // ===============================================
      // 🌍 UNIT 6: REAL-WORLD APPLICATIONS (8 slides)
      // ===============================================
      {
        id: 'unit6-intro',
        title: '🌍 Unit 6: Real-World Applications',
        content: 'Apply your knowledge! Master case-based learning, clinical scenarios, and evidence-based decision making in real bradycardia situations.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fdf4',
        textColor: '#166534',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/bradycardia_42bpm_2.png',
        imageAlt: 'Real-world bradycardia case at 42 BPM',
        highlights: [
          '📚 Clinical case scenarios',
          '🎯 Decision-making frameworks',
          '⚖️ Risk-benefit analysis',
          '🏥 Multi-disciplinary care coordination'
        ],
        hint: '🌍 Real cases, real decisions, real outcomes!'
      },

      {
        id: 'case-athlete',
        title: 'Case Study: Young Athlete',
        type: 'accordion',
        backgroundColor: '#f0fdf4',
        textColor: '#166534',
        animation: 'fade',
        accordionItems: [
          {
            title: '👤 Patient Presentation',
            content: '22-year-old marathon runner\nResting heart rate: 38 BPM\nAsymptomatic, excellent exercise tolerance\nRoutine physical exam finding'
          },
          {
            title: '📊 Clinical Assessment',
            content: 'Normal blood pressure and perfusion\nNo symptoms at rest or exercise\nExcellent cardiovascular fitness\nNo family history of sudden death'
          },
          {
            title: '🤔 Clinical Reasoning',
            content: 'Training bradycardia (physiologic)\nEnhanced parasympathetic tone\nIncreased stroke volume efficiency\nNormal adaptation to training'
          },
          {
            title: '💡 Management Decision',
            content: 'No treatment required\nReassurance and education\nContinue athletic activities\nAnnual monitoring recommended'
          }
        ],
        hint: '🏃 Athletic bradycardia is usually normal!'
      },

      {
        id: 'case-elderly',
        title: 'Case Study: Elderly Patient',
        type: 'flashcard',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        flashcardFront: '👵 85-year-old with dizziness and falls',
        flashcardBack: 'PRESENTATION:\n• Heart rate: 35 BPM\n• Symptoms: Dizziness, near-syncope\n• Multiple falls in past month\n• On metoprolol for hypertension\n\nMANAGEMENT:\n✅ Reduce metoprolol dose\n✅ Holter monitor evaluation\n✅ Pacemaker consultation\n✅ Fall risk assessment\n\nOUTCOME: Dual-chamber pacemaker implanted, symptoms resolved',
        hint: '👵 Symptomatic elderly need intervention!'
      },

      {
        id: 'case-medication',
        title: 'Case Study: Drug-Induced Bradycardia',
        type: 'steps',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Presentation',
            description: '65-year-old post-MI patient on metoprolol and diltiazem, now with fatigue and HR 42 BPM'
          },
          {
            number: 2,
            title: 'Assessment',
            description: 'Symptomatic bradycardia, medication review reveals excessive beta-blocker dosing'
          },
          {
            number: 3,
            title: 'Intervention',
            description: 'Reduce metoprolol dose, discontinue diltiazem, monitor for 48 hours'
          },
          {
            number: 4,
            title: 'Outcome',
            description: 'Heart rate improved to 58 BPM, symptoms resolved, optimal medical therapy continued'
          }
        ],
        hint: '💊 Always suspect medications first!'
      },

      {
        id: 'emergency-scenarios',
        title: 'Emergency Department Scenarios',
        type: 'tabs',
        backgroundColor: '#fef5e7',
        textColor: '#a16207',
        animation: 'fade',
        tabs: [
          {
            title: '🚨 Unstable Bradycardia',
            content: 'HR 25 BPM, BP 70/40, altered mental status\nImmediate atropine 1mg IV\nTranscutaneous pacing preparation\nEpinephrine infusion if needed'
          },
          {
            title: '⚖️ Borderline Symptomatic',
            content: 'HR 45 BPM, mild dizziness, BP 100/60\nObservation and monitoring\nAtropine available at bedside\nSearch for reversible causes'
          },
          {
            title: '🔍 Diagnostic Challenge',
            content: 'HR 38 BPM, asymptomatic, incidental finding\nComplete medication review\nThyroid function testing\nCardiology consultation'
          },
          {
            title: '📊 Risk Stratification',
            content: 'Age, comorbidities, symptoms\nHemodynamic stability\nReversibility of causes\nNeed for urgent intervention'
          }
        ],
        hint: '🚨 Emergency = unstable bradycardia!'
      },

      {
        id: 'multidisciplinary-care',
        title: 'Multidisciplinary Team Approach',
        type: 'accordion',
        backgroundColor: '#ecfdf5',
        textColor: '#059669',
        animation: 'fade',
        accordionItems: [
          {
            title: '👨‍⚕️ Cardiology Role',
            content: 'Risk stratification and diagnosis\nPacemaker indication assessment\nDevice selection and programming\nLong-term follow-up planning'
          },
          {
            title: '👩‍⚕️ Primary Care Role',
            content: 'Initial evaluation and screening\nMedication management\nSymptom monitoring\nReferral coordination'
          },
          {
            title: '🏥 Emergency Medicine Role',
            content: 'Acute stabilization\nRapid assessment protocols\nTemporary interventions\nDisposition planning'
          },
          {
            title: '👥 Team Communication',
            content: 'Clear documentation standards\nHandoff communication protocols\nShared decision-making\nPatient education coordination'
          }
        ],
        hint: '👥 Teamwork improves patient outcomes!'
      },

      {
        id: 'evidence-based-practice',
        title: 'Evidence-Based Guidelines',
        type: 'flashcard',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcardFront: '📚 What do current guidelines recommend?',
        flashcardBack: 'ACC/AHA/HRS GUIDELINES:\n\n✅ Class I: Symptomatic sinus bradycardia\n✅ Permanent pacing for documented symptoms\n✅ Reversible causes should be addressed first\n\nESC GUIDELINES:\n✅ Similar recommendations\n✅ Emphasis on chronotropic incompetence\n✅ Quality of life considerations\n\nEVIDENCE LEVEL:\n• Most recommendations: Level C (expert consensus)\n• Limited randomized trial data\n• Real-world outcomes studies growing',
        hint: '📚 Guidelines provide framework for decisions!'
      },

      {
        id: 'quality-metrics',
        title: 'Quality Improvement Metrics',
        type: 'steps',
        backgroundColor: '#fdf4ff',
        textColor: '#86198f',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Recognition Accuracy',
            description: 'Proper identification of symptomatic bradycardia requiring intervention'
          },
          {
            number: 2,
            title: 'Time to Treatment',
            description: 'Door-to-intervention time for unstable bradycardia in emergency settings'
          },
          {
            number: 3,
            title: 'Appropriate Pacing',
            description: 'Pacemaker implantation rates meeting guideline indications'
          },
          {
            number: 4,
            title: 'Patient Outcomes',
            description: 'Symptom improvement, quality of life, and functional capacity measures'
          }
        ],
        hint: '📊 Measure what matters for patients!'
      },

      {
        id: 'unit6-summary',
        title: 'Unit 6 Complete! 🌍',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fdf4',
        textColor: '#166534',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/normal_sinus_60bpm_1.png',
        imageAlt: 'Perfect sinus rhythm: Goal of successful bradycardia treatment',
        highlights: [
          '✅ Real-world cases mastered',
          '✅ Clinical decision-making refined',
          '✅ Team-based care understood',
          '✅ Evidence-based practice applied',
          '✅ Bradycardia expertise complete!'
        ],
        hint: '🎉 Real-world mastery achieved!'
      },

      {
        id: 'lesson-completion-audio',
        title: '🎧 Complete Bradycardia Mastery Review',
        content: 'Congratulations on completing all 6 units! This final audio review summarizes your complete bradycardia mastery journey from definition to real-world application.',
        type: 'audio',
        backgroundColor: '#fdf2f8',
        textColor: '#be185d',
        animation: 'fade',
        audioUrl: '/audio/complete-bradycardia-mastery.mp3',
        hint: '🎧 Your complete bradycardia knowledge summary!'
      }
    ],
    
    keyPoints: [
      "Sinus bradycardia is sinus rhythm with heart rate <60 bpm",
      "Differentiate physiologic from pathologic causes",
      "Systematic recognition prevents missing other slow rhythms", 
      "Treatment focuses on reversible causes and symptom relief",
      "Permanent pacing indicated for symptomatic sinus node dysfunction",
      "Clinical context determines significance and treatment approach"
    ],
    
    resources: [
      {
        title: "Bradycardia Assessment Checklist",
        url: "/resources/bradycardia-checklist",
        type: "reference",
        description: "Systematic approach to bradycardia evaluation"
      },
      {
        title: "Treatment Algorithm Guide",
        url: "/resources/bradycardia-treatment",
        type: "reference", 
        description: "Step-by-step treatment decision making"
      },
      {
        title: "Emergency Management Protocol",
        url: "/resources/bradycardia-emergency",
        type: "reference",
        description: "Acute bradycardia management guidelines"
      }
    ]
  },
  
  // ===============================================
  // 🎯 DUOLINGO-STYLE TASKS: BRADYCARDIA MASTERY
  // ===============================================
  tasks: [
    // Unit 1 Quiz: Definition & Criteria
    {
      id: 'unit1-quiz-definition',
      type: 'quiz',
      xp: 10,
      content: {
        question: 'What heart rate defines sinus bradycardia?',
        options: [
          'Less than 50 bpm',
          'Less than 60 bpm', 
          'Less than 70 bpm',
          'Less than 80 bpm'
        ],
        correctAnswer: 1,
        explanation: 'Sinus bradycardia is defined as sinus rhythm with heart rate less than 60 beats per minute.',
        hint: 'Think about the normal adult resting heart rate range',
        completionMessage: 'Perfect! 📊 Bradycardia definition mastered! +10 XP!',
        retryMessage: 'Remember: sinus bradycardia is <60 bpm with normal sinus rhythm characteristics.'
      }
    },
    {
      id: 'final-bradycardia-assessment',
      type: 'final-assessment',
      xp: 25,
      content: {
        question: 'A 68-year-old patient presents with fatigue and dizziness. ECG shows regular rhythm, rate 42 bpm, upright P waves in lead II, PR interval 0.18 seconds, narrow QRS. Blood pressure is 90/60 mmHg. What is the most appropriate immediate management?',
        options: [
          'Observation only - this is normal for elderly patients',
          'Atropine 0.5mg IV and prepare for transcutaneous pacing',
          'Increase beta-blocker dose to improve cardiac output',
          'Discharge home with Holter monitor'
        ],
        correctAnswer: 1,
        explanation: 'This patient has symptomatic sinus bradycardia with hemodynamic compromise (hypotension). Atropine is indicated with preparation for pacing if atropine fails.',
        completionMessage: 'MASTERY ACHIEVED! 🏆 Complete bradycardia expertise unlocked! +25 XP!',
        retryMessage: 'Consider the combination of symptoms, bradycardia, and hemodynamic status requiring immediate treatment.',
        passingScore: 80,
        timeLimit: 3
      }
    }
  ],
  completed: false,
  attempts: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
