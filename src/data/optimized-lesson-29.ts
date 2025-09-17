import { Lesson } from '@/types/learning';

export const optimizedLesson29: Lesson = {
  id: 'module-4-lesson-29',
  moduleId: 'module-4',
  title: "VT Diagnosis and Management",
  description: "Master ventricular tachycardia diagnosis and emergency management through focused units",
  order: 29,
  estimatedTime: 30,
  content: {
    type: 'mixed',
    introduction: "🚨 Master VT diagnosis and management! Critical skills for emergency situations.",
    sections: [],
    slides: [
      // Unit 3 Quiz
      {
        id: 'unit3-rate-assessment-quiz',
        title: '🎯 Unit 3 Quiz: VT Rate Assessment',
        content: 'Test your understanding of VT rate assessment',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'zoom',
        question: 'A patient has VT at 220 bpm and is conscious with BP 90/60. What is the MOST appropriate immediate action?',
        options: [
          'Start amiodarone infusion immediately',
          'Prepare for immediate synchronized cardioversion',
          'Obtain 12-lead ECG first for morphology analysis',
          'Give lidocaine bolus and reassess'
        ],
        correctAnswer: 1,
        explanation: 'VT >200 bpm is usually hemodynamically compromising (note low BP). Immediate synchronized cardioversion is indicated for unstable VT.',
        imageUrl: '/placeholder/vt-emergency-management.png',
        hint: '🎯 Speed saves lives!'
      },

      // ===============================================
      // 🔍 UNIT 4: DIFFERENTIAL DIAGNOSIS + AUDIO (7 slides)
      // ===============================================

      // Unit 4: Highlight intro
      {
        id: 'vt-differential-intro',
        title: '🔍 Unit 4: VT Differential Diagnosis',
        content: 'Master the critical skill of differentiating VT from other wide complex tachycardias. Learn systematic algorithms and decision-making approaches.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/placeholder/vt-differential-algorithm.png',
        hint: '🔥 Accurate diagnosis saves lives!'
      },

      // Unit 4: Steps - Brugada Criteria
      {
        id: 'brugada-criteria-steps',
        title: '👣 Brugada Criteria for VT',
        content: 'Apply the systematic Brugada algorithm for wide complex tachycardia',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'AV Dissociation',
            description: 'Look for independent P waves. If present → VT (98% specificity)',
            icon: '1️⃣'
          },
          {
            number: 2,
            title: 'V1/V2 Morphology',
            description: 'RBBB: Triphasic → SVT, Monophasic/Biphasic → VT. LBBB: R>30ms or notched → VT',
            icon: '2️⃣'
          },
          {
            number: 3,
            title: 'V6 Morphology',
            description: 'RBBB pattern: QS or rS → VT. LBBB pattern: QR → VT',
            icon: '3️⃣'
          },
          {
            number: 4,
            title: 'QRS Width',
            description: 'If still uncertain: QRS >140ms suggests VT (especially in RBBB pattern)',
            icon: '4️⃣'
          }
        ],
        hint: '👣 Systematic approach!'
      },

      // Unit 4: Accordion - Wide Complex DDx
      {
        id: 'wide-complex-ddx-accordion',
        title: '🎯 Wide Complex Tachycardia DDx',
        content: 'Comprehensive differential diagnosis for wide complex tachycardia',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        accordionItems: [
{
            title: 'Ventricular Tachycardia (80%)',
            content: 'FEATURES: AV dissociation, extreme axis, concordance, capture/fusion beats. CAUSES: CAD (70%), cardiomyopathy, channelopathies. TREATMENT: Cardioversion if unstable.',
            icon: '⚡'
          },
          {
            title: 'SVT with Aberrancy (15%)',
            content: 'FEATURES: 1:1 AV relationship, typical BBB morphology, response to vagal maneuvers. CAUSES: Pre-existing BBB, rate-related aberrancy. TREATMENT: Adenosine diagnostic/therapeutic.',
            icon: '🔄'
          },
          {
            title: 'Antidromic AVRT (5%)',
            content: 'FEATURES: Anterograde conduction via accessory pathway, 1:1 AV relationship. CAUSES: WPW syndrome. TREATMENT: Avoid AV nodal blockers, use procainamide.',
            icon: '🔀'
          }
        ],
        hint: '🎯 Know the differentials!'
      },

      // Unit 4: Tabs - Morphology-Based Diagnosis
      {
        id: 'morphology-diagnosis-tabs',
        title: '📑 Morphology-Based Diagnosis',
        content: 'Use QRS morphology to distinguish VT from SVT with aberrancy',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
{
            title: 'Lead V1 Analysis',
            content: 'RBBB PATTERN:\n• SVT: Triphasic (rSR)\n• VT: Mono/Biphasic (R, qR)\n\nLBBB PATTERN:\n• SVT: Narrow R, deep S\n• VT: Wide R (>30ms), notched',
            icon: '👁️'
          },
          {
            title: 'Lead V6 Analysis',
            content: 'RBBB PATTERN:\n• SVT: Tall R, small S\n• VT: QS or rS pattern\n\nLBBB PATTERN:\n• SVT: Tall R\n• VT: QR pattern',
            icon: '🔍'
          },
          {
            title: 'Axis Analysis',
            content: 'NORMAL AXIS (-30° to +110°):\n• More likely SVT\n\nEXTREME AXIS (-90° to -180°):\n• Highly suggests VT\n• Northwest axis pathognomonic',
            icon: '🧭'
          }
        ],
        hint: '📑 Morphology is diagnostic!'
      },

      // Unit 4: Flashcard - VT Assumption Rule
      {
        id: 'vt-assumption-flashcard',
        title: '🧠 VT Assumption Rule',
        content: 'Critical clinical decision-making principle',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        flashcard: {
          icon: '🧠',
          question: 'What is the "VT assumption rule" in wide complex tachycardia?',
          answer: 'Always assume VT until proven otherwise. VT is more common (80%) and more dangerous. Treat as VT if uncertain - safer approach.',
          imageUrl: '/placeholder/vt-assumption-rule.png'
        },
        hint: '🧠 When in doubt, assume VT!'
      },

      // Unit 4: STRATEGIC AUDIO (Differential Diagnosis Expert Analysis)
      {
        id: 'vt-differential-audio-lesson',
        title: '🎵 VT Differential Audio Analysis',
        content: 'Listen to expert cardiologist analyze challenging wide complex tachycardia cases. Learn clinical decision-making and diagnostic pearls.',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        hint: '🎧 Expert diagnostic insights!'
      },

      // Unit 4 Quiz
      {
        id: 'unit4-differential-quiz',
        title: '🎯 Unit 4 Quiz: VT Differential',
        content: 'Test your differential diagnosis skills',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'zoom',
        question: 'In wide complex tachycardia, which finding is MOST specific for SVT with aberrancy?',
        options: [
          'QRS width exactly 120ms',
          'Heart rate 160 bpm with 1:1 AV relationship',
          'Typical RBBB morphology with triphasic pattern in V1',
          'Response to carotid sinus massage'
        ],
        correctAnswer: 3,
        explanation: 'Response to vagal maneuvers (carotid massage, adenosine) suggests SVT. VT typically does not respond to these interventions.',
        imageUrl: '/placeholder/svt-response-vagal.png',
        hint: '🎯 VT does not respond to vagal maneuvers!'
      },

      // ===============================================
      // 🏥 UNIT 5: CLINICAL CONTEXT (6 slides)
      // ===============================================

      // Unit 5: Highlight intro
      {
        id: 'vt-clinical-context-intro',
        title: '🏥 Unit 5: VT Clinical Context',
        content: 'Understand VT in clinical context: underlying causes, patient presentation, hemodynamic impact, and prognostic factors. Link ECG findings to patient care.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/placeholder/vt-clinical-context.png',
        hint: '🔥 Context drives treatment!'
      },

      // Unit 5: Tabs - Underlying Etiologies
      {
        id: 'vt-etiology-tabs',
        title: '📑 VT Underlying Etiologies',
        content: 'Major causes of ventricular tachycardia and their characteristics',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
{
            title: 'Ischemic (70%)',
            content: 'CAUSE: CAD, prior MI, scar tissue\nMORPHOLOGY: Usually monomorphic\nPROGNOSIS: Higher mortality risk\nTREATMENT: Revascularization, ICD consideration',
            icon: '💔'
          },
          {
            title: 'Cardiomyopathy (20%)',
            content: 'TYPES: Dilated, hypertrophic, ARVC\nMORPHOLOGY: Variable patterns\nPROGNOSIS: Depends on EF and type\nTREATMENT: Heart failure management, ICD',
            icon: '🫀'
          },
          {
            title: 'Idiopathic (10%)',
            content: 'FEATURES: Structurally normal heart\nTYPES: RVOT, fascicular VT\nPROGNOSIS: Generally good\nTREATMENT: Antiarrhythmics, ablation',
            icon: '❓'
          }
        ],
        hint: '📑 Cause affects treatment!'
      },

      // Unit 5: Accordion - Clinical Presentations
      {
        id: 'vt-clinical-presentations-accordion',
        title: '🎯 VT Clinical Presentations',
        content: 'How VT presents clinically based on rate and underlying function',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        accordionItems: [
{
            title: 'Hemodynamically Stable VT',
            content: 'SYMPTOMS: Palpitations, chest discomfort, dyspnea. VITALS: BP maintained, conscious and alert. RATE: Usually <180 bpm. MANAGEMENT: Antiarrhythmics, time for evaluation.',
            icon: '✅'
          },
          {
            title: 'Hemodynamically Unstable VT', 
            content: 'SYMPTOMS: Chest pain, dyspnea, altered mental status. VITALS: Hypotension, signs of shock. RATE: Usually >180 bpm. MANAGEMENT: Immediate cardioversion.',
            icon: '🚨'
          },
          {
            title: 'VT Storm',
            content: 'DEFINITION: ≥3 VT episodes in 24 hours. CAUSES: Acute MI, electrolyte imbalance, drug toxicity. MORTALITY: Very high. MANAGEMENT: Aggressive antiarrhythmics, sedation.',
            icon: '⛈️'
          }
        ],
        hint: '🎯 Presentation guides urgency!'
      },

      // Unit 5: Steps - Risk Stratification
      {
        id: 'vt-risk-stratification-steps',
        title: '👣 VT Risk Stratification',
        content: 'Systematic approach to assessing VT risk and prognosis',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Structural Assessment',
            description: 'Echo for EF, wall motion, structural disease. Low EF = high risk',
            icon: '1️⃣'
          },
          {
            number: 2,
            title: 'VT Characteristics',
            description: 'Sustained vs non-sustained, monomorphic vs polymorphic, rate',
            icon: '2️⃣'
          },
          {
            number: 3,
            title: 'Clinical Context',
            description: 'Acute vs chronic, precipitating factors, hemodynamic impact',
            icon: '3️⃣'
          },
          {
            number: 4,
            title: 'Risk Stratification',
            description: 'High risk: ICD candidate. Low risk: monitoring, antiarrhythmics',
            icon: '4️⃣'
          }
        ],
        hint: '👣 Risk guides therapy!'
      },

      // Unit 5 Quiz
      {
        id: 'unit5-clinical-context-quiz',
        title: '🎯 Unit 5 Quiz: VT Clinical Context',
        content: 'Test your understanding of VT clinical context',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'zoom',
        question: 'Which underlying condition accounts for approximately 70% of sustained VT cases?',
        options: [
          'Hypertrophic cardiomyopathy',
          'Ischemic heart disease with prior MI',
          'Idiopathic dilated cardiomyopathy',
          'Arrhythmogenic right ventricular cardiomyopathy'
        ],
        correctAnswer: 1,
        explanation: 'Ischemic heart disease with prior MI accounts for ~70% of sustained VT. Scar tissue from healed infarcts creates reentrant circuits.',
        imageUrl: '/placeholder/vt-ischemic-statistics.png',
        hint: '🎯 Scars create circuits!'
      },

      // ===============================================
      // 🚨 UNIT 6: VT MANAGEMENT + AUDIO (7 slides)
      // ===============================================

      // Unit 6: Highlight intro
      {
        id: 'vt-management-intro',
        title: '🚨 Unit 6: VT Emergency Management',
        content: 'Master evidence-based VT management strategies. Learn acute treatment algorithms, medication selection, and long-term prevention approaches.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/placeholder/vt-emergency-management.png',
        hint: '🔥 Management saves lives!'
      },

      // Unit 6: Steps - ACLS VT Algorithm
      {
        id: 'acls-vt-algorithm-steps',
        title: '👣 ACLS VT Management Algorithm',
        content: 'Follow the systematic ACLS approach to VT management',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Assess Stability',
            description: 'Check pulse, BP, consciousness, chest pain, heart failure signs',
            icon: '1️⃣'
          },
          {
            number: 2,
            title: 'Unstable VT',
            description: 'Immediate synchronized cardioversion 100J → 150J → 200J',
            icon: '2️⃣'
          },
          {
            number: 3,
            title: 'Stable VT',
            description: 'Antiarrhythmics: Amiodarone 150mg IV or Lidocaine 1-1.5mg/kg',
            icon: '3️⃣'
          },
          {
            number: 4,
            title: 'Refractory VT',
            description: 'Consider procainamide, magnesium, expert consultation',
            icon: '4️⃣'
          }
        ],
        hint: '👣 Stability determines approach!'
      },

      // Unit 6: Tabs - Medication Management
      {
        id: 'vt-medication-tabs',
        title: '📑 VT Antiarrhythmic Medications',
        content: 'Evidence-based medication choices for VT management',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
{
            title: 'Amiodarone (1st line)',
            content: 'DOSE: 150mg IV over 10min, then 1mg/min × 6h\nEFFICACY: Most effective, broad spectrum\nSIDE EFFECTS: Hypotension, bradycardia, QT prolongation\nINDICATION: Stable VT, recurrent VT',
            icon: '🥇'
          },
          {
            title: 'Lidocaine (Alternative)',
            content: 'DOSE: 1-1.5mg/kg bolus, then 1-4mg/min infusion\nEFFICACY: Good for ischemic VT\nSIDE EFFECTS: CNS toxicity at high levels\nINDICATION: Acute MI-related VT, amiodarone allergy',
            icon: '🥈'
          },
          {
            title: 'Procainamide (Refractory)',
            content: 'DOSE: 20mg/min IV until VT stops or 17mg/kg given\nEFFICACY: Effective for WCT differential\nSIDE EFFECTS: Hypotension, QRS widening\nINDICATION: Refractory VT, WPW with AF',
            icon: '🥉'
          }
        ],
        hint: '📑 Right drug, right dose!'
      },

      // Unit 6: Accordion - Long-term Management
      {
        id: 'vt-longterm-management-accordion',
        title: '🎯 Long-term VT Management',
        content: 'Strategies for preventing VT recurrence and sudden cardiac death',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        accordionItems: [
{
            title: 'ICD Therapy',
            content: 'INDICATION: EF ≤35% with optimal medical therapy, survived VT/VF. BENEFIT: 20-30% mortality reduction. TYPES: Single chamber, dual chamber, CRT-D.',
            icon: '🔋'
          },
          {
            title: 'Catheter Ablation',
            content: 'INDICATION: Recurrent VT despite antiarrhythmics, VT storm. SUCCESS: 70-90% for focal VT, lower for scar-related. COMPLICATIONS: 3-5% major complications.',
            icon: '🔥'
          },
          {
            title: 'Medical Therapy',
            content: 'BETA-BLOCKERS: Reduce VT burden, mortality benefit. ACE/ARB: Remodeling prevention. ANTIARRHYTHMICS: Amiodarone, sotalol for recurrent VT.',
            icon: '💊'
          }
        ],
        hint: '🎯 Prevention is key!'
      },

      // Unit 6: Flashcard - Cardioversion vs Defibrillation
      {
        id: 'cardioversion-vs-defibrillation-flashcard',
        title: '🧠 Cardioversion vs Defibrillation',
        content: 'Critical distinction in VT management',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        flashcard: {
          icon: '🧠',
          question: 'VT with pulse: Synchronized cardioversion or unsynchronized defibrillation?',
          answer: 'SYNCHRONIZED CARDIOVERSION. Synchronization prevents delivery during T wave (which could cause VF). Start with 100J, escalate to 150J, then 200J.',
          imageUrl: '/placeholder/cardioversion-vs-defibrillation.png'
        },
        hint: '🧠 Synchronization matters!'
      },

      // Unit 6: STRATEGIC AUDIO (VT Management Mastery)
      {
        id: 'vt-management-mastery-audio',
        title: '🎵 VT Management Mastery Audio',
        content: 'Listen to expert emergency physician discuss VT management pearls, common mistakes, and advanced treatment strategies. Celebrate your VT mastery!',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/vt-analysis/management-mastery-celebration.mp3',
        hint: '🎧 Master VT management!'
      },

      // Unit 6 Quiz
      {
        id: 'unit6-management-quiz',
        title: '🎯 Unit 6 Quiz: VT Management',
        content: 'Test your VT management expertise',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'zoom',
        question: 'A conscious patient with VT at 200 bpm, BP 80/50, chest pain. What is the MOST appropriate immediate treatment?',
        options: [
          'Amiodarone 150mg IV over 10 minutes',
          'Synchronized cardioversion starting at 100J',
          'Lidocaine 1.5mg/kg IV bolus',
          'Magnesium 2g IV over 15 minutes'
        ],
        correctAnswer: 1,
        explanation: 'Unstable VT (hypotension, chest pain) requires immediate synchronized cardioversion. The patient is unstable despite being conscious.',
        imageUrl: '/placeholder/unstable-vt-treatment.png',
        hint: '🎯 Unstable = electricity first!'
      }
    ],
    
    summary: "🏆 Congratulations on mastering Ventricular Tachycardia! You've achieved comprehensive expertise in VT recognition, morphology analysis, rate assessment, differential diagnosis, clinical context, and emergency management. You can now confidently identify VT patterns, distinguish from other arrhythmias, and implement life-saving treatments.",
    
    keyPoints: [
      "VT is ≥3 consecutive ventricular beats at rate >100 bpm with QRS >120ms",
      "AV dissociation is the strongest ECG evidence for VT (98% specificity)",
      "Always assume VT until proven otherwise in wide complex tachycardia",
      "Hemodynamically unstable VT requires immediate synchronized cardioversion",
      "Ischemic heart disease accounts for ~70% of sustained VT cases",
      "Amiodarone is first-line antiarrhythmic for stable VT",
      "ICD therapy reduces mortality by 20-30% in high-risk patients",
      "VT rates >180-200 bpm typically cause hemodynamic instability"
    ],
    
    resources: [
      {
        title: "Advanced VT Analysis Tool",
        url: "/resources/vt-analysis-tool",
        type: "tool",
        description: "Interactive VT morphology analysis and differential diagnosis"
      },
      {
        title: "ACLS VT Algorithm Reference",
        url: "/resources/acls-vt-algorithm",
        type: "reference",
        description: "Complete ACLS ventricular tachycardia management protocol"
      },
      {
        title: "VT Case Studies Collection",
        url: "/resources/vt-case-studies",
        type: "reference",
        description: "Real-world VT cases with expert analysis and management"
      }
    ]
  },
  
  // ============= ENHANCED FINAL ASSESSMENT =============
  tasks: [
    {
      id: 'final-vt-mastery-assessment',
      type: 'final-assessment',
      xp: 50,
      audio: {
        mainNarration: {
          audioUrl: '/lessonaudio/vt-analysis/vt-mastery-celebration.mp3',
          duration: 12,
          transcript: "Outstanding! You've mastered ventricular tachycardia - one of the most critical arrhythmias in emergency medicine. You can now recognize VT patterns, perform differential diagnosis, assess hemodynamic impact, and implement life-saving treatments. This expertise will serve you well in clinical practice."
        }
      },
      images: {
        mainImage: '/ecg/medical_accurate/ventricular_tachycardia_180bpm_3.png',
        slideImages: []
      },
      content: {
        prerequisiteMessage: "🏆 Final Assessment: Master all 6 units to earn your VT Expert Certification!",
        questions: [
          {
            id: "vt-diagnostic-criterion",
            type: "multiple-choice",
            question: "What is the MOST specific ECG finding for diagnosing VT in wide complex tachycardia?",
            options: [
              "Heart rate greater than 150 bpm with wide QRS",
              "AV dissociation with independent P waves",
              "QRS width greater than 140 milliseconds", 
              "Extreme left axis deviation (-90° to -180°)"
            ],
            correctAnswer: 1,
            explanation: "AV dissociation (independent P waves) is the most specific finding for VT, present in ~70% of VT cases with 98% specificity.",
            imageUrl: "/placeholder/vt-av-dissociation-example.png"
          },
          {
            id: "unstable-vt-management",
            type: "multiple-choice",
            question: "A patient with VT at 220 bpm is unconscious with no palpable pulse. What is the immediate treatment?",
            options: [
              "Synchronized cardioversion at 100 joules",
              "Unsynchronized defibrillation at 200 joules", 
              "Amiodarone 300mg IV bolus immediately",
              "Lidocaine 1.5mg/kg IV followed by cardioversion"
            ],
            correctAnswer: 1,
            explanation: "Pulseless VT is treated as ventricular fibrillation with immediate unsynchronized defibrillation. No pulse = no synchronization needed.",
            imageUrl: "/placeholder/pulseless-vt-treatment.png"
          },
          {
            id: "vt-morphology-origin",
            type: "multiple-choice", 
            question: "VT with LBBB morphology (positive in V1, negative in V6) most likely originates from which location?",
            options: [
              "Left ventricular free wall",
              "Right ventricular outflow tract",
              "Left ventricular septum",
              "Right ventricular free wall"
            ],
            correctAnswer: 1,
            explanation: "LBBB morphology VT (positive V1) originates from the right ventricle or septum, commonly RVOT tachycardia.",
            imageUrl: "/ecg/medical_accurate/ventricular_tachycardia_150bpm_1.png"
          },
          {
            id: "vt-longterm-prevention",
            type: "multiple-choice",
            question: "For a patient with ischemic cardiomyopathy (EF 25%) who survived VT, what provides the greatest mortality reduction?",
            options: [
              "Long-term amiodarone therapy",
              "Implantable cardioverter-defibrillator (ICD)",
              "Catheter ablation of VT focus",
              "High-dose beta-blocker therapy"
            ],
            correctAnswer: 1,
            explanation: "ICD therapy provides 20-30% mortality reduction in patients with EF ≤35% who survive VT/VF, superior to medical therapy alone.",
            imageUrl: "/placeholder/icd-mortality-benefit.png"
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
