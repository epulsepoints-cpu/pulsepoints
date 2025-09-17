import { Lesson } from '@/types/learning';

export const optimizedLesson26Comprehensive: Lesson = {
  id: 'lesson-3-6-optimized',
  moduleId: 'module-3',
  title: "Wolff-Parkinson-White (WPW) Syndrome Mastery",
  description: "Master the complete understanding of WPW syndrome - from pathophysiology to emergency management with comprehensive interactive learning",
  order: 6,
  estimatedTime: 45,
  content: {
    type: 'mixed',
    introduction: "Become an expert in Wolff-Parkinson-White Syndrome! Master the complex pathophysiology, ECG recognition, arrhythmia mechanisms, and critical emergency management of this potentially life-threatening preexcitation syndrome through comprehensive interactive learning.",
    
    slides: [
      // ===============================================
      // 🫀 UNIT 1: WPW FOUNDATION & ANATOMY (8 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🫀 Unit 1: WPW Foundation & Anatomy',
        content: 'Master WPW fundamentals! Understand accessory pathway anatomy, preexcitation physiology, classification systems, and the pathophysiological basis of this complex preexcitation syndrome.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/wpw-foundation-anatomy.png',
        imageAlt: 'WPW syndrome foundation and anatomical overview',
        videoUrl: '/lessonvideo/module3/lesson26/wpw-foundation.mp4',
        highlights: [
          '🧬 Bundle of Kent anatomy and location',
          '⚡ Preexcitation physiology vs normal conduction',
          '📊 WPW classification: manifest, concealed, intermittent',
          '🎯 Risk stratification fundamentals',
          '💡 Pathophysiological mechanisms'
        ],
        hint: '🫀 Foundation knowledge is key to WPW mastery!'
      },

      {
        id: 'accessory-pathway-anatomy',
        title: 'Accessory Pathway Anatomy: Bundle of Kent',
        type: 'flashcard',
        flashcardFront: '🧬 Where are accessory pathways (Bundle of Kent) located and what makes them unique?',
        flashcardBack: 'LOCATION: Around mitral/tricuspid valve annuli. STRUCTURE: Microscopic muscle fibers crossing the fibrous AV plane. UNIQUE PROPERTIES: No decremental conduction (unlike AV node), can conduct anterograde/retrograde, bypass normal AV delay. VARIANTS: Left lateral (60%), right lateral (25%), septal (15%). MULTIPLE PATHWAYS: 5-10% of WPW patients!',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/wpw-foundation-anatomy.png',
        imageAlt: 'Bundle of Kent anatomical diagram',
        hint: '🧬 Kent bundles bypass the AV node!'
      },

      {
        id: 'preexcitation-physiology',
        title: 'Normal vs Preexcitation Conduction',
        type: 'tabs',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/wpw-foundation-anatomy.png',
        imageAlt: 'Normal vs preexcitation conduction comparison',
        videoUrl: '/lessonvideo/module3/lesson26/preexcitation-physiology.mp4',
        tabs: [
          {
            title: '⚡ Normal Conduction',
            content: 'SA NODE → Atria (100ms) → AV NODE delay (150ms) → His-Purkinje → Ventricles\nTOTAL TIME: ~200ms from atrial to ventricular activation\nPURPOSE: AV delay allows atrial emptying, ventricular filling\nQRS: Narrow, normal morphology\nPR: 120-200ms normal duration'
          },
          {
            title: '🚀 WPW Preexcitation',
            content: 'SA NODE → Atria → DUAL PATHWAYS:\n1) AV Node → His-Purkinje (200ms)\n2) Accessory pathway → Ventricles (50ms)\nRESULT: Fusion activation of ventricles\nQRS: Wide with delta wave (preexcited portion)\nPR: Short <120ms (due to bypass of AV delay)'
          },
          {
            title: '🔄 Fusion Phenomenon',
            content: 'EARLY: Accessory pathway activates ventricular base\nLATE: AV node activates ventricles via His-Purkinje\nFUSION: Both wavefronts meet in ventricular myocardium\nVARIABLE: Degree depends on pathway conduction speed\nAUTONOMIC: Sympathetic tone affects fusion balance'
          },
          {
            title: '📊 Conduction Properties',
            content: 'ACCESSORY PATHWAY: Fast conduction, no decremental properties\nAV NODE: Slow conduction, decremental (rate-dependent slowing)\nRESULT: At faster rates, more preexcitation occurs\nCLINICAL: Exercise may increase preexcitation degree\nIMPLICATION: Affects arrhythmia mechanisms and treatment'
          }
        ],
        hint: '⚡ Two pathways create the fusion pattern!'
      },

      {
        id: 'wpw-classification-system',
        title: 'WPW Classification & Risk Stratification',
        type: 'accordion',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/lessonimages/wpw-foundation-anatomy.png',
        imageAlt: 'WPW classification and risk stratification system',
        videoUrl: '/lessonvideo/module3/lesson26/wpw-classification.mp4',
        accordionItems: [
          {
            title: '👁️ Manifest WPW',
            content: 'DEFINITION: Visible preexcitation on resting ECG\nECG FEATURES: Short PR (<120ms), delta wave, wide QRS\nPREVALENCE: Most common presentation\nRISK: Variable - depends on pathway properties\nASSESSMENT: Needs further risk stratification\nCLINICAL: May be asymptomatic or have arrhythmias'
          },
          {
            title: '🕵️ Concealed WPW',
            content: 'DEFINITION: No resting preexcitation visible\nPATHWAY: Retrograde conduction only (or very slow anterograde)\nECG: Normal resting ECG appearance\nARRHYTHMIAS: Can still have AVRT (orthodromic)\nDIAGNOSIS: Requires EP study or arrhythmia documentation\nRISK: Generally lower VF risk (no anterograde conduction)'
          },
          {
            title: '🔄 Intermittent WPW',
            content: 'DEFINITION: Preexcitation comes and goes\nPATTERN: Alternating normal and preexcited beats\nSIGNIFICANCE: Suggests poor pathway conduction\nRISK: Generally GOOD prognosis (pathway has decremental properties)\nMECHANISM: Pathway fatigues or has rate-dependent block\nCLINICAL: Lower risk of dangerous arrhythmias'
          },
          {
            title: '⚠️ High-Risk Features',
            content: 'AFIB with WPW: Shortest RR interval <250ms (>240bpm)\nEP STUDY: ERP of accessory pathway <250ms\nCLINICAL: Syncope, cardiac arrest, family history of SCD\nECG: Very short PR intervals, maximum preexcitation\nAGE: Younger patients with symptomatic arrhythmias\nTREATMENT: Consider ablation for high-risk patients'
          }
        ],
        hint: '📊 Classification guides risk and treatment!'
      },

      {
        id: 'unit1-quiz',
        title: '🫀 Unit 1 Quiz: WPW Foundation',
        content: "Test your WPW foundation knowledge!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: '/lessonimages/wpw-foundation-anatomy.png',
        imageAlt: 'WPW foundation quiz illustration',
        videoUrl: '/lessonvideo/module3/lesson26/unit1-quiz-explanation.mp4',
        hint: '🧠 Master the fundamentals first!',
        question: "What is the key distinguishing feature of accessory pathways (Bundle of Kent) compared to the AV node?",
        options: [
          "They conduct more slowly than the AV node",
          "They have no decremental conduction properties", 
          "They only conduct in the retrograde direction",
          "They are located in the ventricular septum"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Accessory pathways have NO decremental conduction properties, unlike the AV node which slows conduction at faster rates. This means accessory pathways can conduct dangerously fast rates during atrial fibrillation, potentially leading to ventricular fibrillation."
      },

      // ===============================================
      // 🫀 UNIT 2: ECG ANALYSIS & DELTA WAVES (8 slides)
      // ===============================================
      {
        id: 'unit2-intro',
        title: '🫀 Unit 2: ECG Analysis & Delta Waves',
        content: 'Master WPW ECG recognition! Learn delta wave morphology, PR interval analysis, QRS patterns, lead-specific changes, and pathway localization techniques.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/wpw_syndrome_pattern_1.png',
        imageAlt: 'WPW ECG analysis and delta wave recognition',
        videoUrl: '/lessonvideo/module3/lesson26/ecg-analysis.mp4',
        highlights: [
          '📈 Delta wave morphology and recognition',
          '⏱️ PR interval shortening patterns',
          '📊 QRS widening and axis changes',
          '🗺️ Lead-by-lead analysis approach',
          '🎯 Accessory pathway localization'
        ],
        hint: '📈 Delta waves are the ECG signature!'
      },

      {
        id: 'delta-wave-analysis',
        title: 'Delta Wave: The WPW Signature',
        type: 'flashcard',
        flashcardFront: '📈 What exactly is a delta wave and how do you recognize it on ECG?',
        flashcardBack: 'DEFINITION: Slurred initial deflection of QRS complex. TIMING: First 20-100ms of QRS. CAUSE: Early ventricular activation via accessory pathway. RECOGNITION: Look for gradual QRS upstroke (not sharp). VARIABILITY: Shape depends on pathway location. FUSION: Represents fusion of accessory + AV nodal conduction!',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/wpw_syndrome_pattern_1.png',
        imageAlt: 'Delta wave detailed analysis',
        hint: '📈 The slurred upstroke is key!'
      },

      {
        id: 'pr-qrs-analysis',
        title: 'PR and QRS Analysis in WPW',
        type: 'tabs',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/wpw_syndrome_pattern_1.png',
        imageAlt: 'PR and QRS interval analysis in WPW',
        videoUrl: '/lessonvideo/module3/lesson26/pr-qrs-analysis.mp4',
        tabs: [
          {
            title: '⏱️ PR Interval',
            content: 'NORMAL PR: 120-200ms\nWPW PR: <120ms (short PR syndrome)\nCAUSE: Accessory pathway bypasses AV nodal delay\nVARIABILITY: Can vary with autonomic tone\nPITFALL: Some WPW can have normal PR if minimal preexcitation\nMEASUREMENT: Start of P wave to start of QRS (including delta wave)'
          },
          {
            title: '📊 QRS Duration',
            content: 'NORMAL QRS: <120ms\nWPW QRS: Usually 120-200ms (wide)\nCAUSE: Abnormal ventricular activation sequence\nFUSION: Part accessory pathway, part normal conduction\nVARIABLE: Degree depends on preexcitation amount\nPITFALL: Minimal WPW may have narrow QRS'
          },
          {
            title: '⚡ Delta Wave Vector',
            content: 'POSITIVE DELTA: Pathway on opposite side\nNEGATIVE DELTA: Pathway on same side as lead\nLEAD V1: Positive = left-sided, Negative = right-sided pathway\nLEAD aVF: Positive = inferior, Negative = superior pathway\nCOMBINATION: Multiple leads help localize pathway\nACCURACY: 85-90% correlation with EP study localization'
          },
          {
            title: '📈 QRS Morphology',
            content: 'BUNDLE BRANCH PATTERN: Can mimic RBBB or LBBB\nAXIS DEVIATION: Often abnormal QRS axis\nQ WAVES: Pseudo-infarct patterns common\nST CHANGES: Secondary repolarization abnormalities\nVARIABILITY: Changes with degree of preexcitation\nNORMALIZATION: Disappears when pathway blocked'
          }
        ],
        hint: '⏱️ Short PR + wide QRS = classic WPW!'
      },

      {
        id: 'pathway-localization',
        title: 'Accessory Pathway Localization',
        type: 'steps',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/wpw_syndrome_pattern_1.png',
        imageAlt: 'Step-by-step pathway localization guide',
        videoUrl: '/lessonvideo/module3/lesson26/pathway-localization.mp4',
        steps: [
          {
            number: 1,
            title: 'Check Lead V1',
            description: 'Positive delta wave = LEFT-sided pathway. Negative delta wave = RIGHT-sided pathway.'
          },
          {
            number: 2,
            title: 'Assess Lead aVF',
            description: 'Positive delta wave = INFERIOR pathway. Negative delta wave = SUPERIOR pathway.'
          },
          {
            number: 3,
            title: 'Examine Lead II',
            description: 'Very positive = posterior pathway. Negative = anterior pathway location.'
          },
          {
            number: 4,
            title: 'Analyze V6',
            description: 'Positive delta and QRS = left lateral. Negative = right posterior/septal.'
          },
          {
            number: 5,
            title: 'Consider Combinations',
            description: 'V1+, aVF+ = left posteroseptal. V1-, aVF- = right anteroseptal pathways.'
          },
          {
            number: 6,
            title: 'Correlate Clinically',
            description: 'ECG localization guides ablation approach but EP study confirms exact location.'
          }
        ],
        hint: '🗺️ Systematic analysis localizes pathways!'
      },

      {
        id: 'unit2-quiz',
        title: '🫀 Unit 2 Quiz: ECG Analysis',
        content: "Test your WPW ECG analysis skills!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'slide',
        imageUrl: '/ecg/medical_accurate/wpw_syndrome_pattern_1.png',
        imageAlt: 'WPW ECG analysis quiz',
        videoUrl: '/lessonvideo/module3/lesson26/unit2-quiz-explanation.mp4',
        hint: '🧠 Master the ECG patterns!',
        question: "A WPW patient shows positive delta waves in V1 and aVF. Where is the accessory pathway most likely located?",
        options: [
          "Right anteroseptal",
          "Left posteroseptal",
          "Right posterolateral", 
          "Left anterolateral"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Positive delta waves in both V1 and aVF indicate a LEFT POSTEROSEPTAL pathway location. V1 positive = left-sided, aVF positive = inferior/posterior location. This combination points to the left posteroseptal region."
      },

      // ===============================================
      // 🫀 UNIT 3: ARRHYTHMIA MECHANISMS (8 slides)
      // ===============================================
      {
        id: 'unit3-intro',
        title: '🫀 Unit 3: WPW Arrhythmia Mechanisms',
        content: 'Master WPW arrhythmias! Understand AVRT circuits, atrial fibrillation conduction, ventricular fibrillation risk, and the life-threatening potential of WPW syndrome.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/wpw-arrhythmia-mechanisms.png',
        imageAlt: 'WPW arrhythmia mechanisms and circuits',
        videoUrl: '/lessonvideo/module3/lesson26/arrhythmia-mechanisms.mp4',
        highlights: [
          '🔄 AVRT: orthodromic and antidromic circuits',
          '⚡ Atrial fibrillation with rapid ventricular response',
          '💀 Ventricular fibrillation risk mechanisms',
          '📊 Rate-dependent conduction changes',
          '🚨 Life-threatening arrhythmia recognition'
        ],
        hint: '🔄 The circuit determines the arrhythmia!'
      },

      {
        id: 'avrt-mechanisms',
        title: 'AVRT: The Reentrant Circuit',
        type: 'accordion',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/wpw-arrhythmia-mechanisms.png',
        imageAlt: 'AVRT circuit mechanisms in WPW',
        videoUrl: '/lessonvideo/module3/lesson26/avrt-mechanisms.mp4',
        accordionItems: [
          {
            title: '🔄 Orthodromic AVRT (95%)',
            content: 'CIRCUIT: Anterograde via AV node → Retrograde via accessory pathway\nQRS: Narrow (normal AV nodal conduction)\nRATE: 150-250 bpm (usually 180-220)\nECG: No delta wave during tachycardia\nTRIGGER: Usually PAC that blocks in accessory pathway\nTREATMENT: AV nodal blockers effective (adenosine, verapamil)'
          },
          {
            title: '⚡ Antidromic AVRT (5%)',
            content: 'CIRCUIT: Anterograde via accessory pathway → Retrograde via AV node\nQRS: Wide (maximum preexcitation)\nRATE: 150-250 bpm\nECG: Looks like VT (wide, regular, fast)\nDIFFERENTIAL: Hard to distinguish from VT\nTREATMENT: AV nodal blockers contraindicated!'
          },
          {
            title: '🚀 Circuit Requirements',
            content: 'DUAL PATHWAYS: Need AV node + accessory pathway\nUNIDIRECTIONAL BLOCK: One pathway must block initially\nSLOW CONDUCTION: Allows recovery of blocked pathway\nRECOVERY: Blocked pathway becomes available for return\nSUSTAINED: Circuit self-perpetuates once established\nTERMINATION: Break any part of circuit'
          },
          {
            title: '⚙️ Initiation Factors',
            content: 'TRIGGER: PAC or PVC with appropriate timing\nCRITICAL INTERVAL: Must hit window for unidirectional block\nAUTONOMIC TONE: Affects pathway conduction properties\nMEDICATIONS: Can alter pathway refractoriness\nEXERCISE: May facilitate or prevent arrhythmia\nEMOTIONAL STRESS: Common trigger for AVRT episodes'
          }
        ],
        hint: '🔄 Circuit direction determines QRS width!'
      },

      {
        id: 'afib-wpw-danger',
        title: 'Atrial Fibrillation + WPW: Maximum Danger',
        type: 'flashcard',
        flashcardFront: '💀 Why is atrial fibrillation particularly dangerous in WPW patients?',
        flashcardBack: 'DANGER: Accessory pathway can conduct 300+ bpm to ventricles! MECHANISM: No AV nodal decremental properties. RESULT: Extremely rapid ventricular response (>250 bpm). RISK: Can degenerate to ventricular fibrillation. DEATH: Leading cause of sudden death in WPW. RECOGNITION: Irregular wide complex tachycardia. TREATMENT: Never use AV nodal blockers!',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/lessonimages/wpw-arrhythmia-mechanisms.png',
        imageAlt: 'Dangerous AFib-WPW combination',
        hint: '💀 AFib + WPW = extreme emergency!'
      },

      {
        id: 'vf-risk-assessment',
        title: 'Ventricular Fibrillation Risk in WPW',
        type: 'tabs',
        backgroundColor: '#fff1f2',
        textColor: '#be185d',
        animation: 'fade',
        imageUrl: '/lessonimages/wpw-arrhythmia-mechanisms.png',
        imageAlt: 'VF risk assessment in WPW syndrome',
        videoUrl: '/lessonvideo/module3/lesson26/vf-risk.mp4',
        tabs: [
          {
            title: '⚠️ High-Risk Features',
            content: 'SHORTEST RR: <250ms during AFib (>240 bpm)\nPATHWAY ERP: <250ms on EP study\nSYNCOPE: Especially if arrhythmia-related\nCARADIAC ARREST: Previous resuscitated VF\nFAMILY HISTORY: Sudden cardiac death\nAGE: Younger patients higher risk\nMULTIPLE PATHWAYS: Increased complexity'
          },
          {
            title: '✅ Low-Risk Features',
            content: 'LONGEST RR: >250ms during AFib\nINTERMITTENT: Loss of preexcitation\nOLDER AGE: >35 years at diagnosis\nASYMPTOMATIC: No arrhythmia symptoms\nNORMAL HEART: No structural disease\nSLOW PATHWAY: Poor conduction properties\nCONCEALED: Retrograde conduction only'
          },
          {
            title: '🔬 Risk Mechanisms',
            content: 'AFib INITIATION: Irregular rates favor AFib development\nRAPID CONDUCTION: Accessory pathway bypasses AV protection\nVENTRICULAR RATE: >250 bpm can trigger VF\nREFRACTORINESS: Short pathway ERP allows fast conduction\nFUNCTIONAL: Conduction improves with catecholamines\nSPIRAL WAVES: Rapid rates promote ventricular arrhythmias'
          },
          {
            title: '📊 Risk Stratification',
            content: 'EXERCISE TEST: Loss of preexcitation = good sign\nHOLTER: Document maximum rates during AFib\nEP STUDY: Gold standard for risk assessment\nPROCAINAMIDE: Can unmask high-risk pathways\nFAMILY SCREENING: Genetic counseling if indicated\nSERIAL FOLLOW-UP: Risk can change over time'
          }
        ],
        hint: '⚠️ Risk stratification guides treatment!'
      },

      {
        id: 'unit3-quiz',
        title: '🫀 Unit 3 Quiz: Arrhythmia Mechanisms',
        content: "Test your WPW arrhythmia knowledge!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'slide',
        imageUrl: '/lessonimages/wpw-arrhythmia-mechanisms.png',
        imageAlt: 'WPW arrhythmia mechanisms quiz',
        videoUrl: '/lessonvideo/module3/lesson26/unit3-quiz-explanation.mp4',
        hint: '🧠 Master the dangerous combinations!',
        question: "What is the most dangerous arrhythmia in WPW syndrome and why?",
        options: [
          "Orthodromic AVRT because it's the most common",
          "Antidromic AVRT because it mimics ventricular tachycardia",
          "Atrial fibrillation because it can conduct extremely fast rates",
          "Atrial flutter because it's regular and sustained"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! Atrial fibrillation is the most dangerous arrhythmia in WPW because the accessory pathway can conduct extremely fast rates (>250-300 bpm) directly to the ventricles, bypassing AV nodal protection. This can degenerate into ventricular fibrillation and cause sudden cardiac death."
      },

      // ===============================================
      // 🫀 UNIT 4: DIFFERENTIAL DIAGNOSIS (8 slides)
      // ===============================================
      {
        id: 'unit4-intro',
        title: '🫀 Unit 4: WPW Differential Diagnosis',
        content: 'Master WPW mimics! Learn to distinguish WPW from bundle branch blocks, other preexcitation syndromes, pseudo-infarct patterns, and metabolic causes of wide QRS.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf4ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/wpw-differential-diagnosis.png',
        imageAlt: 'WPW differential diagnosis and mimics',
        videoUrl: '/lessonvideo/module3/lesson26/differential-diagnosis.mp4',
        highlights: [
          '🆚 WPW vs Bundle Branch Blocks',
          '📈 WPW vs Other Preexcitation Syndromes',
          '💔 Pseudo-infarct pattern recognition',
          '⚗️ Metabolic and toxic wide QRS causes',
          '🎯 Systematic differentiation approach'
        ],
        hint: '🆚 Know the look-alikes!'
      },

      {
        id: 'wpw-vs-bundle-branch',
        title: 'WPW vs Bundle Branch Blocks',
        type: 'tabs',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/wpw-differential-diagnosis.png',
        imageAlt: 'WPW vs bundle branch block comparison',
        videoUrl: '/lessonvideo/module3/lesson26/wpw-vs-bbb.mp4',
        tabs: [
          {
            title: '⚡ WPW Features',
            content: 'PR INTERVAL: Short (<120ms)\nDELTA WAVE: Present (slurred QRS upstroke)\nQRS ONSET: Gradual, not sharp\nAXIS: Often abnormal\nQ WAVES: May have pseudo-infarct patterns\nAGE: Often young, healthy patients\nCONTEXT: May have arrhythmia history'
          },
          {
            title: '🌿 RBBB Features',
            content: 'PR INTERVAL: Normal (120-200ms)\nDELTA WAVE: Absent\nQRS PATTERN: rsR\' in V1, wide S in V6\nAXIS: Usually normal\nONSET: Sharp QRS upstroke\nAGE: Often older patients\nCONTEXT: Often with heart disease'
          },
          {
            title: '🍃 LBBB Features',
            content: 'PR INTERVAL: Normal (120-200ms)\nDELTA WAVE: Absent\nQRS PATTERN: Broad R in V6, QS in V1\nAXIS: Usually left axis deviation\nONSET: Sharp, not slurred\nNOTCH: Often notched in lateral leads\nCONTEXT: Usually significant heart disease'
          },
          {
            title: '🔍 Key Differences',
            content: 'PR LENGTH: WPW short, BBB normal\nUPSTROKE: WPW slurred, BBB sharp\nPATTERN: WPW variable, BBB typical morphology\nAGE: WPW younger, BBB older\nHEART DISEASE: WPW often normal heart\nARRHYTHMIAS: WPW has specific types (AVRT)'
          }
        ],
        hint: '🔍 PR interval + delta wave = key clues!'
      },

      {
        id: 'preexcitation-syndromes',
        title: 'Other Preexcitation Syndromes',
        type: 'accordion',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/lessonimages/wpw-differential-diagnosis.png',
        imageAlt: 'Comparison of preexcitation syndromes',
        videoUrl: '/lessonvideo/module3/lesson26/preexcitation-syndromes.mp4',
        accordionItems: [
          {
            title: '🔥 Lown-Ganong-Levine (LGL)',
            content: 'PATHWAY: James fibers (bypass AV node, not His-Purkinje)\nECG: Short PR, NORMAL QRS width\nDELTA WAVE: Absent (key difference from WPW)\nARRHYTHMIAS: AVNRT more common than AVRT\nRISK: Lower than WPW (no wide QRS tachycardias)\nDIAGNOSIS: Often requires EP study to confirm'
          },
          {
            title: '🌊 Mahaim Fibers',
            content: 'PATHWAY: Atrio-fascicular or nodo-fascicular connections\nCONDUCTION: Decremental properties (unlike typical WPW)\nECG: May show minimal preexcitation at rest\nARRHYTHMIAS: Wide QRS tachycardia (antidromic-like)\nLOCATION: Usually right-sided pathways\nTREATMENT: Often requires specialized ablation'
          },
          {
            title: '⚡ Enhanced AV Conduction',
            content: 'MECHANISM: Faster AV nodal conduction, not bypass\nECG: Short PR, narrow QRS, no delta wave\nCONGENITAL: May be normal variant in young athletes\nCLINICAL: Usually benign, no significant arrhythmias\nDIFFERENTIAL: Must exclude true preexcitation\nFOLLOW-UP: Monitor for development of arrhythmias'
          },
          {
            title: '🔄 Intermittent Preexcitation',
            content: 'DEFINITION: Comes and goes, not always present\nPROGNOSIS: Generally favorable (poor pathway conduction)\nECG: Alternating normal and preexcited patterns\nRISK: Lower risk of dangerous arrhythmias\nMECHANISM: Pathway has decremental or rate-dependent properties\nIMPLICATION: Often observation vs ablation'
          }
        ],
        hint: '🔥 Each syndrome has unique features!'
      },

      {
        id: 'pseudo-infarct-patterns',
        title: 'WPW Pseudo-Infarct Patterns',
        type: 'flashcard',
        flashcardFront: '💔 How does WPW create pseudo-infarct patterns and which leads are commonly affected?',
        flashcardBack: 'MECHANISM: Abnormal depolarization creates Q waves. COMMON PATTERNS: Inferior (II, III, aVF), anterior (V1-V4), lateral (I, aVL, V5-V6). RECOGNITION: Q waves disappear when preexcitation blocked. CLINICAL TRAP: Can mimic old MI in young patients. KEY CLUE: Delta waves present + no chest pain history. RESOLUTION: Normalize during adenosine or vagal maneuvers!',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/lessonimages/wpw-differential-diagnosis.png',
        imageAlt: 'WPW pseudo-infarct patterns',
        hint: '💔 Q waves + delta waves = pseudo-MI!'
      },

      {
        id: 'unit4-quiz',
        title: '🫀 Unit 4 Quiz: Differential Diagnosis',
        content: "Test your WPW differential skills!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fdf4ff',
        textColor: '#7c3aed',
        animation: 'slide',
        imageUrl: '/lessonimages/wpw-differential-diagnosis.png',
        imageAlt: 'WPW differential diagnosis quiz',
        videoUrl: '/lessonvideo/module3/lesson26/unit4-quiz-explanation.mp4',
        hint: '🧠 Master the mimics!',
        question: "What is the key ECG feature that distinguishes WPW from Lown-Ganong-Levine syndrome?",
        options: [
          "PR interval duration",
          "Presence of delta wave and QRS width",
          "Heart rate during tachycardia", 
          "P wave morphology"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! The presence of delta wave and wide QRS distinguishes WPW from LGL syndrome. Both have short PR intervals, but WPW has delta waves and wide QRS due to ventricular preexcitation, while LGL has normal QRS width because only the AV node is bypassed."
      },

      // ===============================================
      // 🫀 UNIT 5: ACUTE MANAGEMENT & TREATMENT (8 slides)  
      // ===============================================
      {
        id: 'unit5-intro',
        title: '🫀 Unit 5: Acute Management & Treatment',
        content: 'Master WPW emergency care! Learn critical treatment decisions, medication choices, cardioversion indications, and dangerous drug combinations to avoid.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/wpw-emergency-management.png',
        imageAlt: 'WPW acute management and treatment strategies',
        videoUrl: '/lessonvideo/module3/lesson26/emergency-management.mp4',
        highlights: [
          '🚨 Emergency recognition and triage',
          '💊 Safe vs dangerous medications',
          '⚡ Cardioversion indications',
          '🎯 Arrhythmia-specific treatments',
          '⚠️ Critical medication contraindications'
        ],
        hint: '🚨 Emergency management saves lives!'
      },

      {
        id: 'emergency-treatment-algorithm',
        title: 'WPW Emergency Treatment Algorithm',
        type: 'steps',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/lessonimages/wpw-emergency-management.png',
        imageAlt: 'WPW emergency treatment decision tree',
        videoUrl: '/lessonvideo/module3/lesson26/treatment-algorithm.mp4',
        steps: [
          {
            number: 1,
            title: 'Assess Hemodynamic Stability',
            description: 'Unstable (hypotension, chest pain, altered mental status): IMMEDIATE cardioversion!'
          },
          {
            number: 2,
            title: 'Identify Arrhythmia Type',
            description: 'Regular narrow = orthodromic AVRT. Irregular wide = AFib with WPW. Regular wide = antidromic AVRT or VT.'
          },
          {
            number: 3,
            title: 'Choose Appropriate Treatment',
            description: 'Orthodromic AVRT: adenosine/verapamil OK. AFib+WPW: procainamide/cardioversion. Never AV blockers for wide/irregular!'
          },
          {
            number: 4,
            title: 'Monitor Response',
            description: 'If no response or deterioration: immediate cardioversion. Success: plan definitive management.'
          },
          {
            number: 5,
            title: 'Post-Conversion Care',
            description: 'Document rhythm, assess for recurrence, cardiology consultation, consider risk stratification.'
          },
          {
            number: 6,
            title: 'Disposition Planning',
            description: 'First episode: cardiology follow-up. High-risk features: urgent EP consultation for ablation.'
            }
        ],
        hint: '🚨 Stability determines urgency of treatment!'
      },

      {
        id: 'medication-safety',
        title: 'WPW Medication Safety: Safe vs Dangerous',
        type: 'tabs',
        backgroundColor: '#fff1f2',
        textColor: '#be185d',
        animation: 'fade',
        imageUrl: '/lessonimages/wpw-emergency-management.png',
        imageAlt: 'WPW medication safety guide',
        videoUrl: '/lessonvideo/module3/lesson26/medication-safety.mp4',
        tabs: [
          {
            title: '✅ SAFE Medications',
            content: 'PROCAINAMIDE: Blocks accessory pathway, first-line for AFib+WPW\nFLECAINIDE: Class IC, effective for pathway block\nPROPAFENONE: Alternative class IC agent\nAMIODARONE: Can be used but slower onset\nIBUTILIDE: Effective for cardioversion\nCARDIOVERSION: Always safe when indicated\nLIDOCAINE: Safe but less effective'
          },
          {
            title: '⛔ DANGEROUS Medications',
            content: 'ADENOSINE: Can precipitate AFib in WPW!\nVERAPAMIL: Blocks AV node, favors accessory pathway\nDILTIAZEM: Same risk as verapamil\nBETA-BLOCKERS: Can increase accessory pathway conduction\nDIGOXIN: May shorten accessory pathway refractory period\nCAUTION: All AV nodal blockers dangerous in AFib+WPW'
          },
          {
            title: '🎯 Context-Dependent',
            content: 'ADENOSINE: Safe for narrow regular (orthodromic AVRT)\nVERAPAMIL: Safe for orthodromic AVRT, dangerous for AFib+WPW\nBETA-BLOCKERS: Safe for orthodromic AVRT maintenance\nKey: Rhythm type determines safety!\nRule: Wide irregular = never use AV nodal blockers\nMemory aid: "When wide and irregular, AV blockers are particular dangerous!"'
          },
          {
            title: '💡 Clinical Pearls',
            content: 'IF UNSURE: Use procainamide or cardioversion\nNARROW REGULAR: AV nodal blockers usually safe\nWIDE IRREGULAR: AV nodal blockers absolutely contraindicated\nADENOSINE PARADOX: Can cause AFib by blocking AV node\nDOCUMENT: Always document rhythm before and after treatment\nCONSULT: When in doubt, call cardiology/EP'
          }
        ],
        hint: '⛔ Wrong drug choice can be fatal!'
      },

      {
        id: 'cardioversion-indications',
        title: 'Cardioversion in WPW',
        type: 'flashcard',
        flashcardFront: '⚡ When is immediate cardioversion indicated in WPW patients?',
        flashcardBack: 'ABSOLUTE: Hemodynamic instability (hypotension, altered mental status, chest pain). RELATIVE: Very fast rates >250 bpm. WIDE IRREGULAR: AFib with WPW conducting >250 bpm. FAILED MEDICAL: No response to appropriate medications. DETERIORATION: Any clinical worsening. SAFEST: When unsure of rhythm or drug safety. Remember: Cardioversion is NEVER wrong in unstable WPW!',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/wpw-emergency-management.png',
        imageAlt: 'Cardioversion indications in WPW',
        hint: '⚡ When in doubt, shock it out!'
      },

      {
        id: 'unit5-quiz',
        title: '🫀 Unit 5 Quiz: Emergency Management',
        content: "Test your WPW emergency skills!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'slide',
        imageUrl: '/lessonimages/wpw-emergency-management.png',
        imageAlt: 'WPW emergency management quiz',
        videoUrl: '/lessonvideo/module3/lesson26/unit5-quiz-explanation.mp4',
        hint: '🧠 Master life-saving decisions!',
        question: "A patient with WPW presents with irregular wide complex tachycardia at 280 bpm. What is the most appropriate treatment?",
        options: [
          "Adenosine 6mg IV push",
          "Verapamil 5mg IV slowly",
          "Procainamide 20mg/min IV or immediate cardioversion",
          "Metoprolol 5mg IV"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! Irregular wide complex tachycardia in WPW represents atrial fibrillation with rapid conduction down the accessory pathway. This is life-threatening and requires procainamide (to block the accessory pathway) or immediate cardioversion. AV nodal blockers (adenosine, verapamil, metoprolol) are absolutely contraindicated as they can accelerate conduction down the accessory pathway."
      },

      // ===============================================
      // 🫀 UNIT 6: SPECIAL CONSIDERATIONS & LONG-TERM CARE (8 slides)
      // ===============================================
      {
        id: 'unit6-intro',
        title: '🫀 Unit 6: Special Considerations & Long-term Care',
        content: 'Master WPW special populations! Learn about pediatric WPW, pregnancy management, athlete screening, ablation indications, and long-term follow-up strategies.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf4ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/wpw-special-considerations.png',
        imageAlt: 'WPW special considerations and long-term care',
        videoUrl: '/lessonvideo/module3/lesson26/special-considerations.mp4',
        highlights: [
          '👶 Pediatric WPW management',
          '🤰 Pregnancy and WPW considerations',
          '🏃 Athletic participation guidelines',
          '🎯 Ablation indications and outcomes',
          '📊 Long-term follow-up strategies'
        ],
        hint: '👥 Different populations need different approaches!'
      },

      {
        id: 'pediatric-wpw',
        title: 'Pediatric WPW Management',
        type: 'accordion',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/wpw-special-considerations.png',
        imageAlt: 'Pediatric WPW management strategies',
        videoUrl: '/lessonvideo/module3/lesson26/pediatric-wpw.mp4',
        accordionItems: [
          {
            title: '👶 Neonates & Infants',
            content: 'PRESENTATION: Often SVT (AVRT) rather than asymptomatic WPW\nEMERGENCY: Vagal maneuvers (ice water to face), then adenosine\nDOSING: Adenosine 0.1mg/kg, max 6mg first dose\nPROGNOSIS: Many pathways disappear by age 1\nFOLLOW-UP: Serial ECGs to monitor preexcitation\nABLATION: Rarely needed in first year of life'
          },
          {
            title: '🧒 Children (1-12 years)',
            content: 'SYMPTOMS: Palpitations, chest pain, exercise intolerance\nRISK FACTORS: Structural heart disease (especially Ebstein)\nMEDICATIONS: Flecainide, propranolol for prevention\nABLATION: Consider if refractory to medications\nGROWTH: Pathway properties may change with development\nSCREENING: Echo to rule out congenital heart disease'
          },
          {
            title: '👦 Adolescents (13-18 years)',
            content: 'HIGH-RISK AGE: Increased sudden death risk\nSPORTS: Participation restrictions if symptomatic\nRISK ASSESSMENT: Exercise testing, EP study consideration\nABLATION: More readily considered than in younger children\nPSYCHOSOCIAL: Impact on activities, self-image\nTRANSITION: Prepare for adult care transition'
          },
          {
            title: '🏥 Management Principles',
            content: 'WEIGHT-BASED DOSING: All medications and cardioversion energy\nFAMILY EDUCATION: Teaching about arrhythmia recognition\nSCHOOL COORDINATION: Activity restrictions, emergency plans\nMULTIDISCIPLINARY: Pediatric cardiology, EP, primary care\nLONG-TERM: Many require lifelong follow-up\nEMERGENCY PLANS: Clear instructions for parents, schools'
          }
        ],
        hint: '👶 Pediatric WPW needs specialized care!'
      },

      {
        id: 'pregnancy-considerations',
        title: 'WPW and Pregnancy',
        type: 'tabs',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/wpw-special-considerations.png',
        imageAlt: 'WPW management during pregnancy',
        videoUrl: '/lessonvideo/module3/lesson26/pregnancy-wpw.mp4',
        tabs: [
          {
            title: '🤰 Physiologic Changes',
            content: 'HORMONAL: Estrogen may affect pathway conduction\nHEMODYNAMIC: Increased cardiac output, decreased SVR\nAUTONOMIC: Increased sympathetic tone\nBLOOD VOLUME: Expansion may affect drug distribution\nRESULT: May see increased arrhythmia frequency\nMONITORING: More frequent cardiology visits'
          },
          {
            title: '💊 Medication Safety',
            content: 'SAFE: Flecainide (Class B), propranolol, cardioversion\nCAUTION: Procainamide (limited data)\nAVOID: Amiodarone (thyroid effects on fetus)\nEMERGENCY: Any life-saving drug acceptable\nBREASTFEEDING: Most antiarrhythmics have limited transfer\nCONSULT: Maternal-fetal medicine coordination'
          },
          {
            title: '🏥 Delivery Planning',
            content: 'ANESTHESIA: Regional preferred over general\nMONITORING: Continuous cardiac monitoring\nEMERGENCY PREP: Drugs and defibrillator available\nPOSITION: Left lateral to avoid aortocaval compression\nSTRESS: Labor may trigger arrhythmias\nPOST-PARTUM: Continued monitoring, medication adjustment'
          },
          {
            title: '🎯 Management Strategy',
            content: 'PRE-CONCEPTION: Risk assessment, medication review\nFIRST TRIMESTER: Teratogen avoidance critical\nSECOND/THIRD: Adjust medications for physiologic changes\nLABOR: Emergency protocols in place\nPOST-PARTUM: Gradual return to pre-pregnancy state\nCONTRACEPTION: Avoid estrogen if high arrhythmia risk'
          }
        ],
        hint: '🤰 Pregnancy changes everything!'
      },

      {
        id: 'athletic-participation',
        title: 'Athletes with WPW: Participation Guidelines',
        type: 'steps',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/wpw-special-considerations.png',
        imageAlt: 'Athletic participation guidelines for WPW',
        videoUrl: '/lessonvideo/module3/lesson26/athletic-wpw.mp4',
        steps: [
          {
            number: 1,
            title: 'Initial Assessment',
            description: 'Complete history, physical exam, 12-lead ECG, echo to rule out structural disease.'
          },
          {
            number: 2,
            title: 'Risk Stratification',
            description: 'Exercise stress test to assess for loss of preexcitation. Consider EP study if high-risk features.'
          },
          {
            number: 3,
            title: 'Asymptomatic WPW',
            description: 'Low-risk: may participate with precautions. High-risk: restrict until ablation considered.'
          },
          {
            number: 4,
            title: 'Symptomatic WPW',
            description: 'Arrhythmia history: restrict participation until definitive treatment (ablation).'
          },
          {
            number: 5,
            title: 'Post-Ablation',
            description: 'Successful ablation: full participation after 3-month waiting period with normal testing.'
          },
          {
            number: 6,
            title: 'Ongoing Monitoring',
            description: 'Annual cardiology follow-up, repeat stress testing, emergency action plans for coaches.'
          }
        ],
        hint: '🏃 Safety first in athletic participation!'
      },

      {
        id: 'ablation-considerations',
        title: 'Catheter Ablation for WPW',
        type: 'flashcard',
        flashcardFront: '🎯 What are the indications for catheter ablation in WPW and what are the success rates?',
        flashcardBack: 'INDICATIONS: Symptomatic arrhythmias, high-risk features, patient preference, athletes. SUCCESS RATES: 95-98% for most pathways. COMPLICATIONS: <1% major (AV block, perforation). RECURRENCE: 5% may need repeat procedure. SPECIAL: Septal pathways have higher AV block risk. BENEFITS: Curative, eliminates need for lifelong medications, allows normal activities!',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/lessonimages/wpw-special-considerations.png',
        imageAlt: 'WPW catheter ablation considerations',
        hint: '🎯 Ablation is often curative!'
      },

      {
        id: 'unit6-quiz',
        title: '🫀 Unit 6 Quiz: Special Considerations',
        content: "Test your WPW special populations knowledge!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fdf4ff',
        textColor: '#7c3aed',
        animation: 'slide',
        imageUrl: '/lessonimages/wpw-special-considerations.png',
        imageAlt: 'WPW special considerations quiz',
        videoUrl: '/lessonvideo/module3/lesson26/unit6-quiz-explanation.mp4',
        hint: '🧠 Master special population care!',
        question: "What is the most important factor determining athletic participation in asymptomatic WPW patients?",
        options: [
          "Age of the athlete",
          "Type of sport (contact vs non-contact)",
          "Risk stratification including loss of preexcitation with exercise",
          "Family history of WPW"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! Risk stratification, particularly assessing for loss of preexcitation during exercise testing, is the most important factor. Athletes who lose preexcitation with exercise have low-risk pathways and may generally participate, while those who maintain preexcitation need further evaluation and possible activity restriction."
      }
    ],

    keyPoints: [
      "🧬 WPW is caused by accessory pathways (Bundle of Kent) that bypass normal AV nodal delay",
      "📈 Classic triad: short PR (<120ms), delta wave, wide QRS with preexcitation pattern",
      "🔄 AVRT is the most common arrhythmia: orthodromic (narrow) 95%, antidromic (wide) 5%",
      "💀 Atrial fibrillation + WPW is life-threatening due to rapid accessory pathway conduction",
      "⛔ AV nodal blockers are contraindicated in irregular wide complex tachycardia (AFib+WPW)",
      "🎯 High-risk features: shortest RR <250ms in AFib, syncope, cardiac arrest, young age",
      "⚡ Emergency treatment: procainamide for AFib+WPW, cardioversion for hemodynamic instability",
      "🏃 Athletes need risk stratification; loss of preexcitation with exercise suggests lower risk",
      "👶 Pediatric WPW often presents with SVT; many pathways disappear in first year",
      "🎯 Catheter ablation is curative in 95-98% with low complication rates for appropriate candidates"
    ],

    totalSlides: 48,
    estimatedDuration: '45-50 minutes',
    difficulty: 'Advanced',
    clinicalRelevance: 'Very High'
  }
};
