import { Lesson } from '@/types/learning';

// COMPREHENSIVE LESSON 24: Atrial Fibrillation with RVR Mastery - 6 Units
export const optimizedLesson24: Lesson = {
  id: 'module-3-lesson-4',
  moduleId: 'module-3',
  title: "Atrial Fibrillation with RVR Mastery",
  description: "Master AFib with rapid ventricular response through 6 comprehensive units: Foundation & Recognition, Pathophysiology & Triggers, Rate Control Strategies, Emergency Management, Complications & Prevention, and Advanced Clinical Scenarios - each with interactive content, quizzes and multimedia",
  order: 4,
  estimatedTime: 45,
  content: {
    type: 'mixed',
    introduction: "🫀 Welcome to AFib with RVR Mastery! Master this critical cardiac emergency through 6 comprehensive units with flashcards, audio, tabs, accordions, steps, and quizzes. From basic recognition to advanced emergency management!",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your AFib RVR Learning Journey",
        content: "UNIT 1: Foundation & Recognition → UNIT 2: Pathophysiology & Triggers → UNIT 3: Rate Control Strategies → UNIT 4: Emergency Management → UNIT 5: Complications & Prevention → UNIT 6: Advanced Clinical Scenarios",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // ===============================================
      // 🫀 UNIT 1: FOUNDATION & RECOGNITION (8 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🫀 Unit 1: AFib RVR Foundation & Recognition',
        content: 'Master AFib with rapid ventricular response fundamentals! Learn rate classifications, instant recognition techniques, and when RVR becomes life-threatening.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/lessonimages/afib-rvr.png',
        imageAlt: 'AFib with rapid ventricular response comprehensive overview',
        videoUrl: '/lessonvideo/module3/lesson24/afib-rvr-intro.mp4',
        highlights: [
          '⚡ RVR = AFib with rate >100 bpm',
          '🚨 Emergency when rate >150 bpm',
          '💓 Hemodynamic compromise risk',
          '🎯 Instant recognition techniques',
          '⚠️ Life-threatening complications'
        ],
        hint: '🚨 Fast AFib can kill - know the signs!'
      },

      {
        id: 'rvr-definition-comprehensive',
        title: 'AFib with RVR: Complete Definition',
        type: 'flashcard',
        flashcardFront: '🚨 What exactly is AFib with rapid ventricular response?',
        flashcardBack: 'AFib with RVR = Atrial fibrillation with ventricular rate >100 bpm. DANGER ZONES: Mild (100-120), Moderate (120-150), Severe (150-180), Critical (>180). MECHANISM: Loss of AV node rate control allows excessive ventricular response. RESULT: Hemodynamic compromise and cardiac emergency!',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/atrial_fibrillation_150bpm_8.png',
        imageAlt: 'AFib with RVR showing rapid irregular rhythm',
        hint: '⚡ Speed kills in AFib!'
      },

      {
        id: 'rate-classification-system',
        title: 'AFib Rate Classification System',
        type: 'steps',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/afib-rvr.png',
        imageAlt: 'AFib rate classification chart showing danger levels',
        videoUrl: '/lessonvideo/module3/lesson24/rate-classification.mp4',
        steps: [
          {
            number: 1,
            title: 'Controlled AFib (60-100 bpm)',
            description: 'Goal achieved! Patient stable, good exercise tolerance, minimal symptoms.'
          },
          {
            number: 2,
            title: 'Mild RVR (100-120 bpm)',
            description: 'Early RVR. Often tolerated but needs rate control intervention.'
          },
          {
            number: 3,
            title: 'Moderate RVR (120-150 bpm)',
            description: 'Symptomatic RVR. Fatigue, palpitations, reduced exercise capacity.'
          },
          {
            number: 4,
            title: 'Severe RVR (150-180 bpm)',
            description: 'Emergency territory! Hemodynamic compromise, urgent intervention needed.'
          },
          {
            number: 5,
            title: 'Critical RVR (>180 bpm)',
            description: 'Life-threatening! Immediate cardioversion may be required.'
          },
          {
            number: 6,
            title: 'Clinical Context',
            description: 'Patient age, heart function, and comorbidities affect tolerance levels.'
          }
        ],
        hint: '📊 Know your danger zones!'
      },

      {
        id: 'instant-rvr-recognition',
        title: 'Instant RVR Recognition Protocol',
        type: 'tabs',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/atrial_fibrillation_140bpm_7.png',
        imageAlt: 'ECG showing clear AFib RVR pattern',
        videoUrl: '/lessonvideo/module3/lesson24/instant-recognition.mp4',
        tabs: [
          {
            title: '👁️ Visual Quick Check',
            content: 'RHYTHM: Irregularly irregular (chaotic)\nRATE: Count R-R intervals >100 bpm\nP WAVES: Absent or fibrillatory waves\nQRS: Usually narrow unless aberrant\nBASELINE: Wavy, no clear P waves'
          },
          {
            title: '⏱️ Rapid Rate Assessment',
            content: '6-SECOND METHOD: Count QRS × 10\nR-R INTERVALS: Highly variable\nRATE >100: Confirms RVR\nRATE >150: Emergency alert\nRATE >180: Critical emergency'
          },
          {
            title: '🚨 Emergency Red Flags',
            content: 'CHEST PAIN: Demand ischemia\nSHORTNESS OF BREATH: Heart failure\nDIZZINESS/SYNCOPE: Hypotension\nALTERED MENTAL STATUS: Poor perfusion\nHYPOTENSION: Hemodynamic collapse'
          },
          {
            title: '🎯 Quick Decision Tree',
            content: 'STABLE + RVR: Rate control medications\nUNSTABLE + RVR: Consider cardioversion\nCRITICAL RVR: Immediate intervention\nABERRANCY: Rule out ventricular arrhythmia\nCOMORBIDITIES: Adjust management approach'
          }
        ],
        hint: '👁️ Seconds count in RVR recognition!'
      },

      {
        id: 'controlled-vs-rvr-comparison',
        title: 'Controlled AFib vs RVR: Critical Differences',
        type: 'accordion',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/atrial_fibrillation_85bpm_2.png',
        imageAlt: 'Comparison of controlled AFib vs RVR',
        videoUrl: '/lessonvideo/module3/lesson24/controlled-vs-rvr.mp4',
        accordionItems: [
          {
            title: '✅ Controlled AFib (Good)',
            content: 'RATE: 60-100 bpm (goal achieved)\nSYMPTOMS: Minimal or absent\nEXERCISE: Good tolerance\nHEMODYNAMICS: Stable blood pressure\nQUALITY OF LIFE: Normal activities\nTREATMENT: Maintain current regimen'
          },
          {
            title: '⚠️ RVR (Concerning)',
            content: 'RATE: >100 bpm (uncontrolled)\nSYMPTOMS: Palpitations, fatigue, dyspnea\nEXERCISE: Limited tolerance\nHEMODYNAMICS: Risk of compromise\nQUALITY OF LIFE: Significantly impacted\nTREATMENT: Urgent rate control needed'
          },
          {
            title: '🔄 Progression Patterns',
            content: 'TRIGGERS: Infection, dehydration, stress\nDETERIORATION: Gradual or sudden onset\nREVERSIBILITY: Often treatable if caught early\nCOMPLICATIONS: Heart failure, stroke risk\nPROGNOSIS: Depends on underlying cause'
          },
          {
            title: '🎯 Management Goals',
            content: 'PRIMARY: Rate control <100 bpm\nSECONDARY: Symptom relief\nTERTIARY: Prevent complications\nLONG-TERM: Rhythm vs rate strategy\nMONITORING: Regular follow-up essential'
          }
        ],
        hint: '⚖️ Speed determines stability!'
      },

      {
        id: 'aberrancy-rvr-recognition',
        title: 'Aberrancy in RVR: Don\'t Miss VT!',
        type: 'flashcard',
        flashcardFront: '🚨 How do you distinguish AFib RVR with aberrancy from ventricular tachycardia?',
        flashcardBack: 'AFib RVR + ABERRANCY: Irregularly irregular, variable QRS width, typical RBBB pattern, rate >120 bpm. VT: Regular or slightly irregular, consistent QRS width, bizarre morphology. KEY: Irregularity = AFib, Regularity = suspect VT. When in doubt, treat as VT!',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/atrial_fibrillation_150bpm_8.png',
        imageAlt: 'AFib RVR with aberrant conduction vs VT comparison',
        hint: '🚨 Irregular = AFib, Regular = VT!'
      },

      {
        id: 'hemodynamic-impact',
        title: 'Hemodynamic Impact of RVR',
        type: 'accordion',
        backgroundColor: '#fff1f2',
        textColor: '#be185d',
        animation: 'fade',
        imageUrl: '/lessonimages/hemodynamic-impact.png',
        imageAlt: 'Hemodynamic consequences of AFib RVR',
        videoUrl: '/lessonvideo/module3/lesson24/hemodynamic-impact.mp4',
        accordionItems: [
          {
            title: '💔 Loss of Atrial Kick',
            content: 'NORMAL CONTRIBUTION: 20-25% of cardiac output\nAFIB EFFECT: Complete loss of coordinated atrial contraction\nIMPACT: Reduced ventricular filling and stroke volume\nCOMPENSATION: Ventricle relies on passive filling only\nCLINICAL: More pronounced in elderly and heart disease'
          },
          {
            title: '⚡ Tachycardia Effects',
            content: 'DIASTOLIC TIME: Shortened filling period\nCORONARY FLOW: Reduced perfusion time\nMYOCARDIAL DEMAND: Increased oxygen consumption\nENERGY EFFICIENCY: Dramatically reduced\nTOLERANCE: Varies by underlying heart function'
          },
          {
            title: '🔄 Vicious Cycle',
            content: 'RATE ↑ → FILLING ↓ → OUTPUT ↓ → COMPENSATION ↑ → RATE ↑\nISCHEMIA: Demand exceeds supply\nFAILURE: Progressive decompensation\nARRHYTHMIA: More AFib, more RVR\nINTERVENTION: Break the cycle early'
          },
          {
            title: '🎯 Clinical Manifestations',
            content: 'FATIGUE: Reduced exercise capacity\nDYSPNEA: Pulmonary congestion\nCHEST PAIN: Demand ischemia\nSYNCOPE: Cerebral hypoperfusion\nEDEMA: Right heart failure signs'
          }
        ],
        hint: '💔 Fast heart = failing heart!'
      },

      // COMPREHENSIVE UNIT 1 QUIZ
      {
        id: 'unit1-comprehensive-quiz',
        title: '🫀 Unit 1 Quiz: AFib RVR Foundation',
        content: "Test your comprehensive AFib RVR knowledge!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'slide',
        imageUrl: '/ecg/medical_accurate/atrial_fibrillation_140bpm_7.png',
        imageAlt: 'AFib RVR quiz ECG example',
        videoUrl: '/lessonvideo/module3/lesson24/unit1-quiz-explanation.mp4',
        hint: '🧠 Test your RVR recognition mastery!',
        question: "At what ventricular rate does AFib become classified as having rapid ventricular response (RVR)?",
        options: [
          "Greater than 80 bpm",
          "Greater than 100 bpm",
          "Greater than 120 bpm",
          "Greater than 150 bpm"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! AFib with RVR is defined as atrial fibrillation with a ventricular rate greater than 100 bpm. However, clinical significance increases dramatically above 120 bpm, and rates above 150 bpm represent emergency situations requiring urgent intervention."
      },

      // ===============================================
      // 🫀 UNIT 2: PATHOPHYSIOLOGY & TRIGGERS (8 slides)
      // ===============================================
      {
        id: 'unit2-intro',
        title: '🫀 Unit 2: RVR Pathophysiology & Triggers',
        content: 'Understand the science behind RVR! Learn why rates become rapid, what triggers loss of AV node control, and how the heart responds to electrical chaos.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/afib-pathophysiology-overview.png',
        imageAlt: 'RVR pathophysiology and trigger mechanisms',
        videoUrl: '/lessonvideo/module3/lesson24/pathophysiology-triggers.mp4',
        highlights: [
          '🔬 AV node overwhelm mechanism',
          '⚡ Catecholamine surge effects',
          '💊 Medication influences',
          '🫀 Structural heart changes',
          '🎯 Trigger identification strategies'
        ],
        hint: '🔬 Understanding creates better treatment!'
      },

      {
        id: 'av-node-overwhelm',
        title: 'AV Node Overwhelm: When the Filter Fails',
        type: 'tabs',
        backgroundColor: '#fdf4ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/av-node-filtering.png',
        imageAlt: 'AV node filtering mechanism in AFib',
        videoUrl: '/lessonvideo/module3/lesson24/av-node-overwhelm.mp4',
        tabs: [
          {
            title: '⚡ Normal AV Function',
            content: 'FILTERING: Blocks excessive atrial impulses\nRATE LIMIT: Maximum ~200 bpm conduction\nREFRACTORY PERIOD: Built-in protection\nSELECTIVE: Conducts some, blocks others\nSTABLE: Consistent rate control'
          },
          {
            title: '🌪️ AFib Overwhelm',
            content: 'INPUT CHAOS: 400-600 atrial impulses/min\nFILTER OVERLOAD: Cannot process all impulses\nRANDOM CONDUCTION: Irregular breakthrough\nVARIABLE REFRACTORINESS: Inconsistent blocking\nRESULT: Irregularly irregular ventricular response'
          },
          {
            title: '🚨 RVR Development',
            content: 'ENHANCED CONDUCTION: AV node allows more through\nSHORTENED REFRACTORY: Faster recovery time\nSYMPATHETIC STIMULATION: Increased conductivity\nCATECHOLAMINE EFFECT: Reduced filtering ability\nCONSEQUENCE: Dangerous ventricular rates'
          },
          {
            title: '💊 Therapeutic Targets',
            content: 'SLOW AV CONDUCTION: Calcium channel blockers\nPROLONG REFRACTORY: Beta-blockers\nREDUCE SYMPATHETIC: Avoid stimulants\nDIGOXIN EFFECT: Enhanced AV block\nCOMBINATION THERAPY: Synergistic effects'
          }
        ],
        hint: '⚡ When the filter fails, chaos emerges!'
      },

      {
        id: 'rvr-triggers-comprehensive',
        title: 'RVR Triggers: What Causes the Storm?',
        type: 'accordion',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/lessonimages/triggers-substrate.png',
        imageAlt: 'Comprehensive RVR trigger mechanisms',
        videoUrl: '/lessonvideo/module3/lesson24/rvr-triggers.mp4',
        accordionItems: [
          {
            title: '🔥 Sympathetic Surge',
            content: 'STRESS: Physical or emotional stress response\nPAIN: Any significant pain stimulus\nFEVER: Increased metabolic demands\nINFECTION: Systemic inflammatory response\nHYPERTHYROIDISM: Excessive thyroid hormone\nEFFECT: Enhanced AV conduction, reduced refractory period'
          },
          {
            title: '💧 Volume & Electrolyte',
            content: 'DEHYDRATION: Increased catecholamine release\nHYPOKALEMIA: Enhanced automaticity\nHYPOMAGNESEMIA: Increased arrhythmogenicity\nHYPERCAPNIA: Respiratory acidosis effects\nALCOHOL WITHDRAWAL: Sympathetic hyperactivity\nEFFECT: Unstable electrical environment'
          },
          {
            title: '💊 Medications & Substances',
            content: 'STIMULANTS: Caffeine, nicotine, amphetamines\nALBUTEROL: Beta-2 agonist effects\nTHEOPHYLLINE: Phosphodiesterase inhibition\nCOCAINE: Sodium channel blockade + sympathetic\nWITHDRAWAL: Beta-blocker or calcium blocker cessation\nEFFECT: Direct proarrhythmic or sympathetic stimulation'
          },
          {
            title: '🫀 Cardiac Causes',
            content: 'ISCHEMIA: Acute coronary syndrome\nHEART FAILURE: Volume overload, sympathetic activation\nPERICARDITIS: Inflammatory mediators\nCARDIOMYOPATHY: Structural remodeling\nVALVULAR DISEASE: Hemodynamic stress\nEFFECT: Direct myocardial irritability'
          },
          {
            title: '🫁 Systemic Causes',
            content: 'PULMONARY EMBOLISM: Acute right heart strain\nCHRONIC LUNG DISEASE: Chronic hypoxemia\nSEPSIS: Systemic inflammatory response\nSURGERY: Stress response and inflammation\nHYPOXIA: Any cause of tissue hypoxia\nEFFECT: Secondary cardiac stress and arrhythmia'
          }
        ],
        hint: '🔥 Find the trigger, control the storm!'
      },

      {
        id: 'unit2-quiz',
        title: '🫀 Unit 2 Quiz: Pathophysiology & Triggers',
        content: "Test your understanding of RVR mechanisms!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'slide',
        imageUrl: '/lessonimages/afib-pathophysiology-quiz.png',
        imageAlt: 'RVR pathophysiology quiz illustration',
        videoUrl: '/lessonvideo/module3/lesson24/unit2-quiz-explanation.mp4',
        hint: '🧠 Test your RVR science knowledge!',
        question: "What is the primary mechanism that allows rapid ventricular response to develop in atrial fibrillation?",
        options: [
          "Increased atrial firing rate",
          "AV node overwhelm and enhanced conduction",
          "Ventricular automaticity enhancement",
          "Bundle branch conduction acceleration"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! RVR develops when the AV node becomes overwhelmed by the chaotic atrial impulses (400-600/min) and its normal filtering function is compromised, allowing excessive ventricular conduction. Sympathetic stimulation and catecholamines further enhance AV node conduction."
      },

      // ===============================================
      // 🫀 UNIT 3: RATE CONTROL STRATEGIES (8 slides)
      // ===============================================
      {
        id: 'unit3-intro',
        title: '🫀 Unit 3: Rate Control Strategies',
        content: 'Master RVR rate control! Learn medication selection, dosing protocols, combination therapy, and when to escalate to cardioversion.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/lessonimages/afib-rvr.png',
        imageAlt: 'Rate control strategy overview for AFib RVR',
        videoUrl: '/lessonvideo/module3/lesson24/rate-control-strategies.mp4',
        highlights: [
          '💊 First-line medication choices',
          '🎯 Target rate goals (<100 bpm)',
          '⚡ Combination therapy strategies',
          '🚨 Emergency cardioversion criteria',
          '🔄 Monitoring and adjustment protocols'
        ],
        hint: '💊 Right drug, right dose, right time!'
      },

      {
        id: 'rate-control-medications',
        title: 'Rate Control Medication Arsenal',
        type: 'tabs',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/afib-rvr.png',
        imageAlt: 'Rate control medication comparison chart',
        videoUrl: '/lessonvideo/module3/lesson24/rate-control-meds.mp4',
        tabs: [
          {
            title: '🛡️ Beta-Blockers',
            content: 'METOPROLOL: 25-50mg BID, increase gradually\nATENOLOL: 50-100mg daily\nPROPRANOLOL: 40-80mg BID\nEFFECT: Reduce AV conduction, sympathetic block\nONSET: 1-2 hours oral, 5-10 min IV\nCAUTIONS: Asthma, COPD, heart failure'
          },
          {
            title: '🚪 Calcium Channel Blockers',
            content: 'DILTIAZEM: 120-240mg daily (CD), 0.25mg/kg IV\nVERAPAMIL: 80-120mg TID, 0.075-0.15mg/kg IV\nEFFECT: AV node calcium channel blockade\nONSET: 30-60 min oral, 3-5 min IV\nCAUTIONS: Hypotension, heart failure, WPW'
          },
          {
            title: '🌱 Digoxin',
            content: 'LOADING: 8-12 mcg/kg IV or PO in divided doses\nMAINTENANCE: 0.125-0.25mg daily\nEFFECT: Vagal stimulation, AV block enhancement\nONSET: 6-8 hours oral, 30 min IV\nBEST FOR: Heart failure patients, elderly'
          },
          {
            title: '⚡ IV Options (Emergency)',
            content: 'ESMOLOL: 50-200 mcg/kg/min (ultra-short acting)\nMETOPROLOL: 2.5-5mg IV every 2-5 minutes\nDILTIAZEM: 0.25mg/kg IV, then 5-15mg/hr\nVERAPAMIL: 0.075-0.15mg/kg IV over 2 minutes\nONSET: Minutes, closer monitoring required'
          }
        ],
        hint: '💊 Match the drug to the patient!'
      },

      {
        id: 'unit3-quiz',
        title: '🫀 Unit 3 Quiz: Rate Control Strategies',
        content: "Test your rate control expertise!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'slide',
        imageUrl: '/ecg/medical_accurate/atrial_fibrillation_120bpm_5.png',
        imageAlt: 'AFib with moderate RVR for rate control quiz',
        videoUrl: '/lessonvideo/module3/lesson24/unit3-quiz-explanation.mp4',
        hint: '🧠 Master the rate control arsenal!',
        question: "What is the target heart rate goal for rate control in AFib with RVR?",
        options: [
          "Less than 80 bpm",
          "Less than 100 bpm",
          "Less than 120 bpm",
          "Less than 60 bpm"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! The target heart rate for rate control in AFib is typically less than 100 bpm at rest. This represents 'rate-controlled' AFib and usually provides good symptom relief and hemodynamic stability. Some guidelines accept <110 bpm in certain patients."
      },

      // ===============================================
      // 🫀 UNIT 4: EMERGENCY MANAGEMENT (8 slides)
      // ===============================================
      {
        id: 'unit4-intro',
        title: '🫀 Unit 4: Emergency RVR Management',
        content: 'Master emergency RVR care! Learn unstable RVR recognition, cardioversion protocols, hemodynamic support, and ICU management strategies.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/lessonimages/afib-rvr.png',
        imageAlt: 'Emergency RVR management protocols',
        videoUrl: '/lessonvideo/module3/lesson24/emergency-management.mp4',
        highlights: [
          '🚨 Unstable RVR criteria',
          '⚡ Cardioversion indications',
          '💊 Emergency medication protocols',
          '🏥 ICU monitoring strategies',
          '🔄 Post-conversion management'
        ],
        hint: '🚨 When RVR becomes life-threatening!'
      },

      {
        id: 'unstable-rvr-recognition',
        title: 'Unstable RVR: When to Act Fast',
        type: 'accordion',
        backgroundColor: '#fff1f2',
        textColor: '#be185d',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/atrial_fibrillation_150bpm_8.png',
        imageAlt: 'Unstable AFib RVR with hemodynamic compromise',
        videoUrl: '/lessonvideo/module3/lesson24/unstable-rvr.mp4',
        accordionItems: [
          {
            title: '🚨 Hemodynamic Instability',
            content: 'HYPOTENSION: SBP <90 mmHg or MAP <65\nSHOCK: Signs of poor perfusion\nALTERED MENTAL STATUS: Confusion, agitation\nCOLD EXTREMITIES: Poor peripheral perfusion\nOLIGURIA: Urine output <0.5 mL/kg/hr\nACTION: Immediate cardioversion consideration'
          },
          {
            title: '💔 Acute Heart Failure',
            content: 'PULMONARY EDEMA: Crackles, frothy sputum\nDYSPNEA: Severe shortness of breath\nORTHOPNEA: Cannot lie flat\nJVD: Jugular venous distention\nS3 GALLOP: Rapid ventricular filling\nACTION: Rate control + diuresis, consider cardioversion'
          },
          {
            title: '⚡ Ongoing Ischemia',
            content: 'CHEST PAIN: Ongoing or recurrent\nST CHANGES: Dynamic ECG changes\nELEVATED TROPONIN: Type 2 MI pattern\nHEMODYNAMIC COMPROMISE: Demand ischemia\nCARDIOGENIC SHOCK: Severe pump failure\nACTION: Urgent cardioversion + PCI if needed'
          },
          {
            title: '🎯 Critical Rate Thresholds',
            content: 'RATE >180 BPM: Almost always unstable\nRATE 150-180: Assess hemodynamics\nDURATION: Sustained >30 minutes\nCOMORBIDITIES: Lower tolerance in CAD/HF\nAGE: Elderly less tolerant\nACTION: Lower threshold for intervention'
          }
        ],
        hint: '🚨 Fast recognition saves lives!'
      },

      {
        id: 'cardioversion-protocols',
        title: 'Emergency Cardioversion Protocols',
        type: 'steps',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/afib-rvr.png',
        imageAlt: 'Step-by-step cardioversion protocol',
        videoUrl: '/lessonvideo/module3/lesson24/cardioversion-protocol.mp4',
        steps: [
          {
            number: 1,
            title: 'Assess Stability',
            description: 'Hemodynamically unstable? Ongoing ischemia? Acute heart failure? If YES → urgent cardioversion.'
          },
          {
            number: 2,
            title: 'Anticoagulation Check',
            description: 'Duration >48 hours or unknown? TEE or therapeutic anticoagulation ≥3 weeks required (unless emergency).'
          },
          {
            number: 3,
            title: 'Preparation',
            description: 'Conscious sedation, synchronized mode, biphasic preferred, start 100-200J.'
          },
          {
            number: 4,
            title: 'Cardioversion',
            description: 'Synchronized shock delivery. If unsuccessful, increase energy to 200J, then 300J.'
          },
          {
            number: 5,
            title: 'Post-Conversion',
            description: 'Monitor for recurrence, continue rate control, assess for anticoagulation.'
          },
          {
            number: 6,
            title: 'If Unsuccessful',
            description: 'Consider chemical cardioversion (amiodarone) or rate control strategy.'
          }
        ],
        hint: '⚡ Electricity resets the chaos!'
      },

      {
        id: 'unit4-quiz',
        title: '🫀 Unit 4 Quiz: Emergency Management',
        content: "Test your emergency RVR management skills!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'slide',
        imageUrl: '/ecg/medical_accurate/atrial_fibrillation_150bpm_8.png',
        imageAlt: 'Emergency RVR scenario for quiz',
        videoUrl: '/lessonvideo/module3/lesson24/unit4-quiz-explanation.mp4',
        hint: '🧠 Master emergency decision-making!',
        question: "A patient with AFib RVR at 160 bpm presents with hypotension (BP 85/50) and altered mental status. What is the most appropriate immediate intervention?",
        options: [
          "IV metoprolol 5mg",
          "Oral diltiazem 120mg",
          "Synchronized cardioversion",
          "IV digoxin loading dose"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! This patient has hemodynamically unstable AFib RVR with hypotension and altered mental status. Synchronized cardioversion is the most appropriate immediate intervention. Rate control medications could worsen hypotension in this unstable patient."
      },

      // ===============================================
      // 🫀 UNIT 5: COMPLICATIONS & PREVENTION (8 slides)
      // ===============================================
      {
        id: 'unit5-intro',
        title: '🫀 Unit 5: RVR Complications & Prevention',
        content: 'Master RVR complications! Learn about tachycardia-induced cardiomyopathy, stroke prevention, heart failure management, and long-term prevention strategies.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/afib-consequences.png',
        imageAlt: 'AFib RVR complications and prevention strategies',
        videoUrl: '/lessonvideo/module3/lesson24/complications-prevention.mp4',
        highlights: [
          '💔 Tachycardia-induced cardiomyopathy',
          '🧠 Stroke risk assessment',
          '💊 Anticoagulation strategies',
          '🔄 Prevention protocols',
          '📊 Long-term monitoring'
        ],
        hint: '🛡️ Prevention is better than treatment!'
      },

      {
        id: 'tachycardia-cardiomyopathy',
        title: 'Tachycardia-Induced Cardiomyopathy',
        type: 'flashcard',
        flashcardFront: '💔 What is tachycardia-induced cardiomyopathy and how does RVR cause it?',
        flashcardBack: 'DEFINITION: Reversible heart failure from sustained tachycardia. MECHANISM: Prolonged RVR (weeks-months) → energy depletion → contractile dysfunction → dilated cardiomyopathy. GOOD NEWS: Often reversible with rate control! TIMELINE: Improvement in days-weeks, full recovery in 3-6 months.',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/lessonimages/afib-consequences.png',
        imageAlt: 'Tachycardia-induced cardiomyopathy progression',
        hint: '💔 Fast rates can break hearts - but it\'s reversible!'
      },

      {
        id: 'stroke-prevention-priority',
        title: 'Stroke Prevention: The Ultimate Priority',
        type: 'tabs',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/stroke-prevention-priority.png',
        imageAlt: 'AFib stroke prevention strategies',
        videoUrl: '/lessonvideo/module3/lesson24/stroke-prevention.mp4',
        tabs: [
          {
            title: '🧠 Stroke Risk Reality',
            content: 'AFIB STROKE RISK: 5x higher than normal\nRVR IMPACT: May increase risk further\nDEVASTATING: Often disabling or fatal\nPREVENTABLE: Anticoagulation reduces risk 60-70%\nLIFETIME: Risk persists even if rhythm restored'
          },
          {
            title: '📊 CHA2DS2-VASc Score',
            content: 'C: CHF/LV dysfunction (1 point)\nH: Hypertension (1 point)\nA2: Age ≥75 (2 points)\nD: Diabetes (1 point)\nS2: Stroke/TIA history (2 points)\nV: Vascular disease (1 point)\nA: Age 65-74 (1 point)\nSc: Sex category (female, 1 point)\nSCORE ≥2: Anticoagulation recommended'
          },
          {
            title: '💊 Anticoagulation Options',
            content: 'WARFARIN: INR 2-3, requires monitoring\nDOACs: Apixaban, rivaroxaban, dabigatran\nDOSING: Based on age, weight, kidney function\nBLEEDING RISK: HAS-BLED score assessment\nMONITORING: Regular follow-up essential'
          },
          {
            title: '🎯 RVR-Specific Considerations',
            content: 'URGENT: Start anticoagulation quickly\nCARDIOVERSION: TEE or 3-week anticoagulation\nPOST-CONVERSION: Continue anticoagulation\nRECURRENCE: High rate of AFib return\nLONG-TERM: Lifelong anticoagulation often needed'
          }
        ],
        hint: '🧠 Prevent strokes - save lives!'
      },

      {
        id: 'unit5-quiz',
        title: '🫀 Unit 5 Quiz: Complications & Prevention',
        content: "Test your knowledge of RVR complications!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: '/lessonimages/stroke-prevention-priority.png',
        imageAlt: 'RVR complications quiz illustration',
        videoUrl: '/lessonvideo/module3/lesson24/unit5-quiz-explanation.mp4',
        hint: '🧠 Master complication prevention!',
        question: "What is the most serious long-term complication of untreated AFib, regardless of ventricular rate?",
        options: [
          "Heart failure",
          "Tachycardia-induced cardiomyopathy",
          "Thromboembolic stroke",
          "Atrial remodeling"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! Thromboembolic stroke is the most serious complication of AFib, increasing stroke risk 5-fold. This risk exists regardless of ventricular rate and requires anticoagulation based on CHA2DS2-VASc score. While heart failure and cardiomyopathy are serious, stroke prevention is the ultimate priority."
      },

      // ===============================================
      // 🫀 UNIT 6: ADVANCED CLINICAL SCENARIOS (8 slides)  
      // ===============================================
      {
        id: 'unit6-intro',
        title: '🫀 Unit 6: Advanced RVR Clinical Scenarios',
        content: 'Master complex RVR cases! Learn special populations, challenging scenarios, refractory RVR management, and advanced therapeutic strategies.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf4ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/afib-comprehensive-case.png',
        imageAlt: 'Advanced RVR clinical scenarios',
        videoUrl: '/lessonvideo/module3/lesson24/advanced-scenarios.mp4',
        highlights: [
          '👴 Elderly population considerations',
          '🫀 Heart failure + RVR management',
          '🚫 Refractory RVR strategies',
          '⚡ Post-operative RVR protocols',
          '🎯 Personalized treatment approaches'
        ],
        hint: '🎯 Every patient is unique - master complexity!'
      },

      {
        id: 'special-populations',
        title: 'Special Population RVR Management',
        type: 'accordion',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/lessonimages/afib-comprehensive-case.png',
        imageAlt: 'Special population RVR management strategies',
        videoUrl: '/lessonvideo/module3/lesson24/special-populations.mp4',
        accordionItems: [
          {
            title: '👴 Elderly Patients (>75 years)',
            content: 'PHYSIOLOGY: Reduced cardiac reserve, multiple comorbidities\nTOLERANCE: Lower rate tolerance (may be symptomatic at 100-120 bpm)\nMEDICATIONS: Start low, go slow; avoid excessive beta-blockade\nTARGET RATE: May accept 100-110 bpm vs <100 bpm\nMONITORING: Close follow-up for orthostatic hypotension\nSPECIAL: Higher bleeding risk but stroke prevention still critical'
          },
          {
            title: '🫀 Heart Failure Patients',
            content: 'CHALLENGE: Rate control vs negative inotropic effects\nFIRST-LINE: Digoxin often preferred (positive inotropic)\nBETA-BLOCKERS: Use carefully - may worsen acute decompensation\nCALCIUM BLOCKERS: Generally avoid in systolic heart failure\nTARGET: Rate control especially important (prevents tachycardia CM)\nDIUREATION: Often needed concurrently with rate control'
          },
          {
            title: '🔪 Post-Operative AFib RVR',
            content: 'INCIDENCE: 20-40% after cardiac surgery, 10-20% non-cardiac\nTIMING: Usually 2-4 days post-operatively\nCAUSES: Inflammation, pain, volume shifts, catecholamines\nMANAGEMENT: Amiodarone often first-line post-cardiac surgery\nPREVENTION: Beta-blockers pre-operatively if not contraindicated\nPROGNOSIS: Often self-limited but may require long-term treatment'
          },
          {
            title: '🚫 Refractory RVR',
            content: 'DEFINITION: Persistent RVR despite adequate rate control attempts\nCAUSES: Underlying triggers not addressed, medication non-adherence\nEVALUATION: Thyroid function, electrolytes, echo, sleep study\nOPTIONS: Combination therapy, amiodarone, ablate-and-pace\nABLATION: AV node ablation + permanent pacemaker\nLAST RESORT: When all medical therapy fails'
          }
        ],
        hint: '🎯 Personalized care for complex patients!'
      },

      {
        id: 'refractory-rvr-management',
        title: 'Refractory RVR: When Nothing Works',
        type: 'steps',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/lessonimages/afib-comprehensive-case.png',
        imageAlt: 'Refractory RVR management algorithm',
        videoUrl: '/lessonvideo/module3/lesson24/refractory-rvr.mp4',
        steps: [
          {
            number: 1,
            title: 'Identify Underlying Causes',
            description: 'Hyperthyroidism, infection, medication non-compliance, sleep apnea, alcohol use'
          },
          {
            number: 2,
            title: 'Optimize Current Therapy',
            description: 'Maximum tolerated doses, check drug levels (digoxin), assess compliance'
          },
          {
            number: 3,
            title: 'Combination Therapy',
            description: 'Beta-blocker + calcium channel blocker, add digoxin, consider amiodarone'
          },
          {
            number: 4,
            title: 'Consider Amiodarone',
            description: 'Loading dose 150mg IV over 10 min, then 1mg/min × 6hr, then 0.5mg/min'
          },
          {
            number: 5,
            title: 'Evaluate for Ablation',
            description: 'Pulmonary vein isolation vs AV node ablation + pacemaker strategy'
          },
          {
            number: 6,
            title: 'AV Node Ablation + Pacemaker',
            description: 'Last resort: "Ablate and pace" strategy for symptom control'
          }
        ],
        hint: '🚫 When medical therapy fails, think procedural!'
      },

      // FINAL UNIT 6 QUIZ
      {
        id: 'unit6-comprehensive-quiz',
        title: '🫀 Unit 6 Quiz: Advanced Clinical Scenarios',
        content: "Test your advanced RVR management expertise!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fdf4ff',
        textColor: '#7c3aed',
        animation: 'slide',
        imageUrl: '/lessonimages/afib-comprehensive-case.png',
        imageAlt: 'Advanced RVR clinical scenario quiz',
        videoUrl: '/lessonvideo/module3/lesson24/unit6-quiz-explanation.mp4',
        hint: '🧠 Master the most complex scenarios!',
        question: "A 78-year-old with systolic heart failure (EF 35%) develops AFib RVR at 130 bpm. What is the most appropriate initial rate control strategy?",
        options: [
          "IV diltiazem",
          "IV metoprolol",
          "IV digoxin",
          "Immediate cardioversion"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! In patients with systolic heart failure, digoxin is often the preferred initial rate control agent because it provides rate control without negative inotropic effects (unlike beta-blockers and calcium channel blockers). Digoxin may even improve contractility slightly."
      }

      // Final completion slide  
      {
        id: 'afib-rvr-mastery-complete',
        title: '🏆 AFib RVR Mastery Complete!',
        content: 'Outstanding! You\'ve mastered AFib with rapid ventricular response through comprehensive understanding of recognition, pathophysiology, and rate control strategies. You can now recognize, evaluate, and manage RVR like an expert!',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: '/lessonimages/afib-mastery-complete.png',
        imageAlt: 'Completion celebration - AFib RVR mastery achieved',
        highlights: [
          '✅ RVR recognition mastery',
          '✅ Pathophysiology understanding',
          '✅ Rate control expertise',
          '✅ Ready for advanced cardiac emergencies!'
        ],
        hint: '🎉 You\'re now an AFib RVR expert!'
      }
    ],
    summary: "🎉 Outstanding! You've mastered AFib with rapid ventricular response through comprehensive 6-unit specialist training covering foundation & recognition, pathophysiology & triggers, rate control strategies, emergency management, complications & prevention, and advanced clinical scenarios. You can now recognize, evaluate, and manage even the most complex RVR cases with expert-level confidence!",
    keyPoints: [
      "AFib with RVR is defined as atrial fibrillation with ventricular rate >100 bpm",
      "Rate classifications: Mild (100-120), Moderate (120-150), Severe (150-180), Critical (>180 bpm)",
      "RVR develops from AV node overwhelm and enhanced conduction due to various triggers", 
      "Instant recognition: irregularly irregular rhythm + rate >100 bpm + absent P waves",
      "Rate control targets <100 bpm using beta-blockers, calcium blockers, or digoxin",
      "Emergency cardioversion indicated for hemodynamically unstable RVR",
      "Stroke prevention with anticoagulation is the ultimate priority in all AFib patients",
      "Special populations require individualized rate control strategies",
      "Tachycardia-induced cardiomyopathy is often reversible with adequate rate control",
      "Refractory RVR may require combination therapy or ablation strategies"
    ],
    resources: [
      {
        title: "Interactive AFib RVR Simulator",
        url: "/resources/afib-rvr-simulator", 
        type: "tool",
        description: "Practice RVR recognition and management with real-time scenarios"
      },
      {
        title: "Rate Control Calculator",
        url: "/resources/rate-control-calculator",
        type: "tool", 
        description: "Calculate appropriate dosing for rate control medications"
      },
      {
        title: "Emergency AFib RVR Protocols",
        url: "/resources/afib-emergency-protocols",
        type: "reference",
        description: "Step-by-step emergency management protocols for RVR"
      }
    ]
  },
  tasks: [],
  completed: false,
  attempts: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
