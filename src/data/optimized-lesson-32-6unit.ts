import { Lesson } from '../types/learning';

export const optimizedLesson32: Lesson = {
  id: 'lesson-4-4-optimized',
  moduleId: 'module-4',
  title: "Junctional Tachycardia Mastery",
  description: "Master junctional tachycardia through 6 focused learning units: Tachycardia Definition, ECG Recognition, Mechanism Types, Differential Diagnosis, Clinical Presentation, and Advanced Management",
  order: 4,
  estimatedTime: 45,
  content: {
    type: 'mixed',
    introduction: "🎯 Welcome to Junctional Tachycardia Mastery! Master rapid junctional rhythms through 6 progressive units with slides, audio, interactive content, and quizzes. Build expertise in recognition, mechanism understanding, and clinical management.",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your Junctional Tachycardia Learning Journey",
        content: "UNIT 1: Tachycardia Definition → UNIT 2: ECG Recognition → UNIT 3: Mechanism Types → UNIT 4: Differential Diagnosis → UNIT 5: Clinical Presentation → UNIT 6: Advanced Management",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // ===============================================
      // 🎯 UNIT 1: TACHYCARDIA DEFINITION (7 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: Tachycardia Definition',
        content: 'Start your junctional tachycardia mastery! Learn when the AV junction becomes the dominant pacemaker at rapid rates.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson32/unit1/tachycardia-overview.jpg',
        imageAlt: 'Junctional tachycardia definition overview',
        audio: {
          narrationUrl: 'audio/module4/lesson32/unit1/tachycardia-overview.mp3',
          autoPlay: false
        },
        hint: '⚡ When the junction races!'
      },
      
      {
        id: 'rate-definition',
        title: 'Rate Definition and Classification',
        content: 'DEFINITION: >100 bpm from AV junction. RANGE: Usually 100-180 bpm. UPPER LIMIT: Rarely exceeds 220 bpm. DISTINCTION: Faster than accelerated junctional (60-100 bpm).',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson32/tachycardia_150bpm.png',
        imageAlt: 'ECG showing junctional tachycardia at 150 bpm',hint: '📊 The 100+ bpm threshold!'
      },

      {
        id: 'pacemaker-dominance',
        title: 'Pacemaker Dominance Concept',
        content: 'OVERRIDE: Junction overrides sinus node. MECHANISM: Enhanced automaticity or reentry. SUPPRESSION: Sinus rhythm suppressed. CONTROL: Junction becomes primary pacemaker.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson32/unit1/pacemaker-dominance.jpg',
        imageAlt: 'Pacemaker dominance in junctional tachycardia',hint: '👑 Junction takes the crown!'
      },

      {
        id: 'clinical-spectrum',
        title: 'Clinical Spectrum',
        content: 'PAROXYSMAL: Episodes lasting minutes to hours. INCESSANT: Continuous or nearly continuous. CONGENITAL: Present from birth, often in infants. ACQUIRED: Develops later, often pathologic.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson32/unit1/clinical-spectrum.jpg',
        imageAlt: 'Clinical spectrum of junctional tachycardia',hint: '🌈 Wide range of presentations!'
      },

      {
        id: 'hemodynamic-impact',
        title: 'Hemodynamic Impact',
        content: 'RATE-DEPENDENT: Higher rates more problematic. FILLING TIME: Reduced diastolic filling. AV DISSOCIATION: Loss of atrial kick. TOLERANCE: Variable patient tolerance.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson32/unit1/hemodynamic-impact.jpg',
        imageAlt: 'Hemodynamic effects of junctional tachycardia',hint: '💓 Fast can mean trouble!'
      },

      {
        id: 'unit1-quiz',
        title: 'Unit 1 Quiz: Tachycardia Definition',
        content: 'Test your understanding of junctional tachycardia definition!',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: '/lessonimages/module4/lesson32/unit1/unit1-quiz.jpg',
        imageAlt: 'Tachycardia definition quiz',
        hint: '🧠 Test your definition knowledge!',
        question: "Junctional tachycardia is defined as a junctional rhythm with a rate:",
        options: [
          "Greater than 60 bpm",
          "Greater than 100 bpm", 
          "Greater than 150 bpm",
          "Greater than 200 bpm"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Junctional tachycardia is defined as a junctional rhythm with a rate greater than 100 bpm.",
        audio: {
          narrationUrl: 'audio/module4/lesson32/unit1/unit1-quiz.mp3',
          autoPlay: false
        }
      },

      // ===============================================
      // 🎯 UNIT 2: ECG RECOGNITION (7 slides)  
      // ===============================================
      {
        id: 'unit2-intro',
        title: '🎯 Unit 2: ECG Recognition',
        content: 'Master ECG recognition of junctional tachycardia! Learn the key features that distinguish this rapid rhythm.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson32/unit2/ecg-recognition-overview.jpg',
        imageAlt: 'ECG recognition overview for junctional tachycardia',
        audio: {
          narrationUrl: 'audio/module4/lesson32/unit2/ecg-recognition-overview.mp3',
          autoPlay: false
        },
        hint: '👁️ Spot the rapid junction!'
      },

      {
        id: 'qrs-characteristics',
        title: 'QRS Characteristics',
        content: 'WIDTH: Narrow (<120ms) - supraventricular origin. MORPHOLOGY: Normal unless aberrant conduction. REGULARITY: Usually regular rhythm. RATE: 100-180 bpm typically.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson32/supraventricular_tachycardia_160bpm_1.png',
        imageAlt: 'ECG showing narrow QRS complexes in junctional tachycardia',hint: '📏 Narrow and fast!'
      },

      {
        id: 'p-wave-patterns',
        title: 'P Wave Pattern Analysis',
        content: 'HIDDEN: Most common - buried in QRS or T waves. RETROGRADE: Inverted P waves after QRS. DISSOCIATED: Independent sinus P waves. CAPTURE: Occasional sinus captures.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson32/unit2/p-wave-patterns.jpg',
        imageAlt: 'P wave patterns in junctional tachycardia',hint: '🔍 Where are the P waves?'
      },

      {
        id: 'av-dissociation',
        title: 'AV Dissociation Recognition',
        content: 'DEFINITION: Atria and ventricles beat independently. FREQUENCY: Common in junctional tachycardia. IDENTIFICATION: Look for marching P waves. FUSION: Occasional fusion beats.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson32/unit2/av-dissociation.jpg',
        imageAlt: 'AV dissociation in junctional tachycardia',hint: '🚂 Trains on different tracks!'
      },

      {
        id: 'rhythm-regularity',
        title: 'Rhythm Regularity Assessment',
        content: 'REGULARITY: Usually perfectly regular. VARIABILITY: May have slight rate variations. ONSET: Gradual in automatic type. TERMINATION: Gradual cessation typical.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson32/supraventricular_tachycardia_140bpm_2.png',
        imageAlt: 'ECG showing regular junctional tachycardia pattern',hint: '📐 Steady fast rhythm!'
      },

      {
        id: 'unit2-quiz',
        title: 'Unit 2 Quiz: ECG Recognition',
        content: 'Test your ECG recognition skills!',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'slide',
        imageUrl: '/lessonimages/module4/lesson32/unit2/unit2-quiz.jpg',
        imageAlt: 'ECG recognition quiz',
        hint: '👁️ What do you see?',
        question: "In junctional tachycardia, QRS complexes are typically:",
        options: [
          "Wide due to aberrant conduction",
          "Narrow due to supraventricular origin",
          "Variable depending on the mechanism",
          "Always showing bundle branch block"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! QRS complexes are narrow because junctional tachycardia originates from the supraventricular AV junction."},

      // ===============================================
      // 🎯 UNIT 3: MECHANISM TYPES (7 slides)
      // ===============================================
      {
        id: 'unit3-intro',
        title: '🎯 Unit 3: Mechanism Types',
        content: 'Master the mechanisms of junctional tachycardia! Learn to distinguish automatic from reentrant types.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson32/unit3/mechanism-overview.jpg',
        imageAlt: 'Mechanism types overview',hint: '⚙️ Two different engines!'
      },

      {
        id: 'automatic-mechanism',
        title: 'Automatic Junctional Tachycardia',
        content: 'MECHANISM: Enhanced automaticity of AV junction. ONSET: Gradual warm-up period. TERMINATION: Gradual cool-down. RATE: Variable, may fluctuate slightly.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson32/unit3/automatic-mechanism.jpg',
        imageAlt: 'Automatic junctional tachycardia mechanism',hint: '🌡️ Gradual temperature change!'
      },

      {
        id: 'reentrant-mechanism',
        title: 'Reentrant Junctional Tachycardia',
        content: 'MECHANISM: Re-entry circuit involving AV node. ONSET: Abrupt start with trigger. TERMINATION: Sudden cessation. RATE: Fixed, very regular once established.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson32/unit3/reentrant-mechanism.jpg',
        imageAlt: 'Reentrant junctional tachycardia mechanism',hint: '🔄 Circuit going round and round!'
      },

      {
        id: 'mechanism-comparison',
        title: 'Mechanism Comparison',
        content: 'AUTOMATIC: Warm-up/cool-down, rate variability, enhanced automaticity. REENTRANT: Abrupt onset/offset, fixed rate, re-entry circuit. CLINICAL: Different treatment approaches.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson32/unit3/mechanism-comparison.jpg',
        imageAlt: 'Comparison of automatic vs reentrant mechanisms',hint: '⚖️ Two sides of the coin!'
      },

      {
        id: 'clinical-clues',
        title: 'Clinical Clues to Mechanism',
        content: 'ONSET PATTERN: Gradual vs abrupt. RATE BEHAVIOR: Variable vs fixed. RESPONSE TO MANEUVERS: Variable response in automatic. TRIGGERING: Specific triggers in reentrant.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson32/unit3/clinical-clues.jpg',
        imageAlt: 'Clinical clues to identify mechanism type',hint: '🕵️ Detective work!'
      },

      {
        id: 'unit3-quiz',
        title: 'Unit 3 Quiz: Mechanism Types',
        content: 'Test your mechanism understanding!',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'slide',
        imageUrl: '/lessonimages/module4/lesson32/unit3/unit3-quiz.jpg',
        imageAlt: 'Mechanism types quiz',
        hint: '⚙️ Which mechanism is it?',
        question: "Junctional tachycardia with gradual onset and termination suggests:",
        options: [
          "Reentrant mechanism",
          "Automatic mechanism",
          "Ventricular origin",
          "Atrial flutter with block"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Gradual onset and termination with warm-up and cool-down periods suggest automatic junctional tachycardia."},

      // ===============================================
      // 🎯 UNIT 4: DIFFERENTIAL DIAGNOSIS (7 slides)
      // ===============================================
      {
        id: 'unit4-intro',
        title: '🎯 Unit 4: Differential Diagnosis',
        content: 'Master differential diagnosis of junctional tachycardia! Learn to distinguish it from other supraventricular tachycardias.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson32/unit4/differential-overview.jpg',
        imageAlt: 'Differential diagnosis overview',hint: '🔍 What\'s the difference?'
      },

      {
        id: 'vs-avnrt',
        title: 'vs AV Nodal Reentrant Tachycardia',
        content: 'AVNRT: Abrupt onset/offset, pseudo R\' in V1. JUNCTIONAL: May have gradual onset, AV dissociation. RESPONSE: AVNRT terminates with adenosine. MECHANISM: Different re-entry circuits.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson32/unit4/vs-avnrt.jpg',
        imageAlt: 'Comparison with AVNRT',hint: '🔄 Similar but different circuits!'
      },

      {
        id: 'vs-avrt',
        title: 'vs AV Reentrant Tachycardia',
        content: 'AVRT: Uses accessory pathway, abrupt onset. RETROGRADE P: Clear retrograde P waves in AVRT. JUNCTIONAL: AV dissociation more common. ADENOSINE: AVRT terminates, junctional may not.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson32/unit4/vs-avrt.jpg',
        imageAlt: 'Comparison with AVRT',hint: '🛤️ Different pathways!'
      },

      {
        id: 'vs-atrial-tachycardia',
        title: 'vs Atrial Tachycardia',
        content: 'ATRIAL: P waves precede QRS, may have AV block. JUNCTIONAL: P waves absent/inverted/dissociated. MORPHOLOGY: Different P wave morphology. RESPONSE: Different response to vagal maneuvers.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson32/unit4/vs-atrial-tachycardia.jpg',
        imageAlt: 'Comparison with atrial tachycardia',hint: '📍 Location matters!'
      },

      {
        id: 'vs-sinus-tachycardia',
        title: 'vs Sinus Tachycardia',
        content: 'SINUS: Normal P waves before each QRS. RATE: Sinus rarely >180 bpm in adults. JUNCTIONAL: AV dissociation, different P wave patterns. RESPONSE: Sinus responds to rate control.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson32/sinus_tachycardia_120bpm.png',
        imageAlt: 'Comparison with sinus tachycardia',hint: '🔍 Look for P waves!'
      },

      {
        id: 'unit4-quiz',
        title: 'Unit 4 Quiz: Differential Diagnosis',
        content: 'Test your differential diagnosis skills!',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'slide',
        imageUrl: '/lessonimages/module4/lesson32/unit4/unit4-quiz.jpg',
        imageAlt: 'Differential diagnosis quiz',
        hint: '🔍 What helps distinguish?',
        question: "What feature most helps distinguish junctional tachycardia from AVNRT?",
        options: [
          "QRS width differences",
          "Rate ranges",
          "AV dissociation and gradual onset",
          "Response to exercise"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! AV dissociation and gradual onset/termination help distinguish automatic junctional tachycardia from AVNRT."},

      // ===============================================
      // 🎯 UNIT 5: CLINICAL PRESENTATION (7 slides)
      // ===============================================
      {
        id: 'unit5-intro',
        title: '🎯 Unit 5: Clinical Presentation',
        content: 'Master the clinical presentation of junctional tachycardia! Learn about symptoms, triggers, and patient populations.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson32/unit5/clinical-presentation-overview.jpg',
        imageAlt: 'Clinical presentation overview',hint: '🏥 How patients present!'
      },

      {
        id: 'symptom-spectrum',
        title: 'Symptom Spectrum',
        content: 'PALPITATIONS: Most common complaint. DIZZINESS: Reduced cardiac output. CHEST PAIN: Increased oxygen demand. SYNCOPE: Severe hemodynamic compromise.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson32/unit5/symptom-spectrum.jpg',
        imageAlt: 'Symptom spectrum in junctional tachycardia',hint: '😰 Range of patient experiences!'
      },

      {
        id: 'pediatric-presentation',
        title: 'Pediatric Presentation',
        content: 'CONGENITAL JET: Junctional ectopic tachycardia. POST-SURGICAL: After cardiac surgery. INCESSANT: Nearly continuous rhythm. HEART FAILURE: Can develop rapidly.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson32/unit5/pediatric-presentation.jpg',
        imageAlt: 'Pediatric junctional tachycardia presentation',hint: '👶 Different in children!'
      },

      {
        id: 'adult-triggers',
        title: 'Adult Triggers and Causes',
        content: 'ISCHEMIA: Acute coronary syndromes. DIGITALIS: Toxicity leading to enhanced automaticity. ELECTROLYTES: Hypokalemia, hypomagnesemia. CATECHOLAMINES: Stress, medications.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson32/unit5/adult-triggers.jpg',
        imageAlt: 'Adult triggers and causes',hint: '🎯 What sets it off!'
      },

      {
        id: 'hemodynamic-consequences',
        title: 'Hemodynamic Consequences',
        content: 'RATE-DEPENDENT: Higher rates more problematic. DIASTOLIC FILLING: Reduced filling time. AV DISSOCIATION: Loss of atrial contribution. TOLERANCE: Variable among patients.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson32/unit5/hemodynamic-consequences.jpg',
        imageAlt: 'Hemodynamic consequences',hint: '💓 Impact on circulation!'
      },

      {
        id: 'unit5-quiz',
        title: 'Unit 5 Quiz: Clinical Presentation',
        content: 'Test your clinical knowledge!',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'slide',
        imageUrl: '/lessonimages/module4/lesson32/unit5/unit5-quiz.jpg',
        imageAlt: 'Clinical presentation quiz',
        hint: '🏥 How do patients present?',
        question: "Junctional ectopic tachycardia (JET) is most commonly seen in:",
        options: [
          "Elderly patients with ischemia",
          "Young adults with accessory pathways",
          "Infants and post-cardiac surgery patients",
          "Patients with hyperthyroidism"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! Junctional ectopic tachycardia (JET) is most commonly seen in infants and patients after cardiac surgery."},

      // ===============================================
      // 🎯 UNIT 6: ADVANCED MANAGEMENT (7 slides)
      // ===============================================
      {
        id: 'unit6-intro',
        title: '🎯 Unit 6: Advanced Management',
        content: 'Master advanced management of junctional tachycardia! Learn assessment, treatment strategies, and specialized approaches.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson32/unit6/management-overview.jpg',
        imageAlt: 'Advanced management overview',hint: '⚕️ Treatment mastery!'
      },

      {
        id: 'initial-assessment',
        title: 'Initial Assessment Protocol',
        content: 'HEMODYNAMICS: Blood pressure, perfusion. SYMPTOMS: Palpitations, chest pain, syncope. TRIGGERS: Medications, electrolytes, ischemia. MECHANISM: Automatic vs reentrant clues.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson32/unit6/initial-assessment.jpg',
        imageAlt: 'Initial assessment protocol',hint: '🔍 Systematic evaluation!'
      },

      {
        id: 'acute-management',
        title: 'Acute Management Strategies',
        content: 'VAGAL MANEUVERS: May slow rate temporarily. ADENOSINE: Limited effect, may differentiate. BETA-BLOCKERS: Can be effective for rate control. CALCIUM BLOCKERS: Alternative rate control.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson32/unit6/acute-management.jpg',
        imageAlt: 'Acute management strategies',hint: '🚨 Emergency approaches!'
      },

      {
        id: 'cause-specific-treatment',
        title: 'Cause-Specific Treatment',
        content: 'DIGITALIS TOXICITY: Stop digitalis, Fab fragments. ISCHEMIA: Reperfusion, anti-ischemic therapy. ELECTROLYTES: Correct K+, Mg2+ deficiency. POST-SURGICAL: Cooling, sedation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson32/unit6/cause-specific-treatment.jpg',
        imageAlt: 'Cause-specific treatment approaches',hint: '🎯 Target the cause!'
      },

      {
        id: 'specialized-therapies',
        title: 'Specialized Therapies',
        content: 'OVERDRIVE PACING: For incessant forms. COOLING: Especially in post-surgical JET. AMIODARONE: For refractory cases. ABLATION: Rarely needed, high risk.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson32/unit6/specialized-therapies.jpg',
        imageAlt: 'Specialized therapy options',hint: '🎛️ Advanced techniques!'
      },

      {
        id: 'unit6-quiz',
        title: 'Unit 6 Quiz: Advanced Management',
        content: 'Test your management expertise!',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: '/lessonimages/module4/lesson32/unit6/unit6-quiz.jpg',
        imageAlt: 'Advanced management quiz',
        hint: '⚕️ What\'s the best treatment?',
        question: "First-line treatment for junctional tachycardia should focus on:",
        options: [
          "Immediate cardioversion",
          "Identifying and treating underlying causes",
          "High-dose beta-blockers",
          "Emergency ablation"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! First-line treatment should focus on identifying and treating underlying causes like digitalis toxicity or ischemia."}
    ],
    summary: "🎉 Congratulations! You've mastered comprehensive junctional tachycardia through 6 specialized units. You understand rate definitions, can recognize ECG patterns expertly, differentiate mechanism types, perform differential diagnosis, understand clinical presentations, and implement advanced management strategies. You're now a junctional tachycardia expert!",
    keyPoints: [
      "Junctional tachycardia: >100 bpm from AV junction with narrow QRS complexes",
      "Two mechanisms: automatic (gradual onset) vs reentrant (abrupt onset)",
      "AV dissociation and gradual onset help distinguish from other SVTs",
      "Common in pediatric post-surgical patients and adults with digitalis toxicity",
      "Management focuses on treating underlying causes and rate control",
      "Specialized therapies include cooling, overdrive pacing, and antiarrhythmic drugs"
    ],
    resources: [
      {
        title: "Advanced Junctional Tachycardia Management",
        url: "https://youtube.com/watch?v=junctional_tachycardia_mastery",
        type: "video"
      },
      {
        title: "Pediatric JET Management Guidelines",
        url: "https://cardiology.org/pediatric-jet-guidelines",
        type: "article"
      }
    ]
  },
  tasks: [],

  // ============= LESSON COMPLETION METADATA =============
  completed: false,
  score: 0,
  attempts: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
