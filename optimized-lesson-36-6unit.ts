import { Lesson } from './src/types/learning';

export const optimizedLesson36SixUnit: Lesson = {
  id: 'lesson-4-8-optimized-6unit',
  moduleId: 'module-4',
  title: "Module 4 Junctional Rhythms Integration",
  description: "Master comprehensive integration of junctional rhythms with 6-unit approach: spectrum analysis, differential diagnosis, complex cases, clinical decision-making, emergency management, and mastery assessment",
  order: 8,
  estimatedTime: 30,
  content: {
    type: 'mixed',
    introduction: "Master Junctional Rhythms Integration! Comprehensive synthesis of all Module 4 concepts with advanced clinical applications.",
    sections: [
      {
        id: 'section-overview',
        title: "Integration Mastery Learning Path",
        content: "UNIT 1: Rhythm Spectrum → UNIT 2: Differential Diagnosis → UNIT 3: Complex Cases → UNIT 4: Clinical Decision-Making → UNIT 5: Emergency Management → UNIT 6: Mastery Assessment",
        mediaType: 'image'
      }
    ],
    slides: [
      // UNIT 1: RHYTHM SPECTRUM (Slides 1-7)
      {
        id: 'unit1-spectrum-overview',
        title: 'Unit 1: Rhythm Spectrum Overview',
        content: 'Comprehensive understanding of the complete junctional rhythm spectrum - from escape mechanisms to complex blocks.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit1/spectrum-overview.jpg',
        imageAlt: 'Complete junctional rhythm spectrum overview',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit1/spectrum-overview.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit1-escape-mechanisms',
        title: 'Junctional Escape Mechanisms',
        content: [
          'Junctional escape rhythm: 40-60 bpm',
          'Protective mechanism for heart block',
          'Regular narrow QRS complexes',
          'Absent or inverted P waves',
          'Usually hemodynamically stable',
          'Often reversible with treatment'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/junctional_escape_45bpm.png',
        imageAlt: 'Real ECG showing junctional escape rhythm at 45 bpm',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit1/escape-mechanisms.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit1-accelerated-patterns',
        title: 'Accelerated Junctional Patterns',
        content: [
          'Accelerated junctional rhythm: 60-100 bpm',
          'Enhanced automaticity mechanism',
          'Often drug-induced (digitalis)',
          'May compete with sinus rhythm',
          'AV dissociation common',
          'Usually benign but investigate cause'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit1/accelerated-patterns.jpg',
        imageAlt: 'Accelerated junctional rhythm patterns',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit1/accelerated-patterns.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit1-tachycardia-spectrum',
        title: 'Junctional Tachycardia Spectrum',
        content: [
          'Junctional tachycardia: >100 bpm',
          'Automatic vs reentrant mechanisms',
          'Congenital vs acquired forms',
          'May cause hemodynamic compromise',
          'Requires aggressive management',
          'Higher morbidity potential'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit1/tachycardia-spectrum.jpg',
        imageAlt: 'Junctional tachycardia spectrum analysis',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit1/tachycardia-spectrum.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit1-premature-contractions',
        title: 'Premature Junctional Contractions',
        content: [
          'Early beats from AV junction',
          'Narrow QRS with premature timing',
          'Non-compensatory pause typical',
          'Usually benign and sporadic',
          'May indicate digitalis toxicity',
          'Often caffeine or stress related'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit1/premature-contractions.jpg',
        imageAlt: 'Premature junctional contractions pattern',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit1/premature-contractions.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit1-av-dissociation',
        title: 'AV Dissociation Patterns',
        content: [
          'Independent atrial and ventricular rhythms',
          'Default vs interference dissociation',
          'Marching P waves through QRS',
          'Capture and fusion beats',
          'Diagnostic of junctional focus',
          'Reversible vs permanent forms'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/av_block_complete.png',
        imageAlt: 'Real ECG showing AV dissociation pattern',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit1/av-dissociation.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit1-quiz',
        title: 'Unit 1 Knowledge Check',
        question: 'Which junctional rhythm pattern has the HIGHEST clinical priority for immediate intervention?',
        options: [
          'Junctional escape rhythm at 45 bpm',
          'Accelerated junctional rhythm at 75 bpm',
          'Junctional tachycardia at 150 bpm',
          'Occasional premature junctional contractions'
        ],
        correctAnswer: 2,
        explanation: 'Junctional tachycardia at 150 bpm has the highest clinical priority because it can cause significant hemodynamic compromise and may indicate serious underlying pathology requiring immediate intervention.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit1/unit1-quiz.jpg',
        imageAlt: 'Unit 1 quiz background',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit1/unit1-quiz.mp3',
          autoPlay: false
        }
      },

      // UNIT 2: DIFFERENTIAL DIAGNOSIS (Slides 8-14)
      {
        id: 'unit2-differential-overview',
        title: 'Unit 2: Differential Diagnosis Overview',
        content: 'Systematic approach to differentiating junctional rhythms from other narrow QRS tachycardias and bradycardias.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit2/differential-overview.jpg',
        imageAlt: 'Differential diagnosis overview for junctional rhythms',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit2/differential-overview.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit2-sinus-vs-junctional',
        title: 'Sinus vs Junctional Rhythm',
        content: [
          'P wave morphology and location',
          'PR interval characteristics',
          'Rate range considerations',
          'Response to vagal maneuvers',
          'Atropine sensitivity patterns',
          'Clinical context importance'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit2/sinus-vs-junctional.jpg',
        imageAlt: 'Sinus vs junctional rhythm comparison',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit2/sinus-vs-junctional.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit2-atrial-vs-junctional',
        title: 'Atrial vs Junctional Tachycardia',
        content: [
          'P wave morphology differences',
          'RP vs PR interval relationships',
          'Response to adenosine',
          'Vagal maneuver effects',
          'Rate characteristics',
          'Termination patterns'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit2/atrial-vs-junctional.jpg',
        imageAlt: 'Atrial vs junctional tachycardia differentiation',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit2/atrial-vs-junctional.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit2-ventricular-escape',
        title: 'Junctional vs Ventricular Escape',
        content: [
          'QRS width as key differentiator',
          'Rate range differences',
          'Hemodynamic stability variations',
          'P wave relationship patterns',
          'Response to atropine',
          'Prognosis implications'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit2/ventricular-escape.jpg',
        imageAlt: 'Junctional vs ventricular escape comparison',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit2/ventricular-escape.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit2-av-block-patterns',
        title: 'AV Block vs Junctional Rhythm',
        content: [
          'Presence vs absence of P waves',
          'AV relationship assessment',
          'Block level determination',
          'Escape rhythm characteristics',
          'Progression risk factors',
          'Treatment approach differences'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/av_block_first_degree.png',
        imageAlt: 'Real ECG showing AV block vs junctional rhythm',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit2/av-block-patterns.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit2-diagnostic-algorithm',
        title: 'Systematic Diagnostic Algorithm',
        content: [
          'Step 1: Assess QRS width and morphology',
          'Step 2: Identify P wave presence and morphology',
          'Step 3: Measure rate and assess regularity',
          'Step 4: Evaluate AV relationship',
          'Step 5: Consider clinical context',
          'Step 6: Apply therapeutic maneuvers'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit2/diagnostic-algorithm.jpg',
        imageAlt: 'Systematic diagnostic algorithm flowchart',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit2/diagnostic-algorithm.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit2-quiz',
        title: 'Unit 2 Knowledge Check',
        question: 'What is the MOST reliable ECG feature to differentiate junctional tachycardia from atrial tachycardia?',
        options: [
          'Heart rate >150 bpm',
          'Narrow QRS complexes',
          'RP interval shorter than PR interval',
          'Response to vagal maneuvers'
        ],
        correctAnswer: 2,
        explanation: 'RP interval shorter than PR interval (short RP tachycardia) is the most reliable ECG feature for junctional tachycardia, as the P wave appears closer to the preceding QRS than to the following QRS.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit2/unit2-quiz.jpg',
        imageAlt: 'Unit 2 quiz background',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit2/unit2-quiz.mp3',
          autoPlay: false
        }
      },

      // UNIT 3: COMPLEX CASES (Slides 15-21)
      {
        id: 'unit3-complex-overview',
        title: 'Unit 3: Complex Cases Overview',
        content: 'Advanced case analysis integrating multiple concepts for real-world clinical application and decision-making.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit3/complex-overview.jpg',
        imageAlt: 'Complex case analysis overview',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit3/complex-overview.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit3-case-bradycardia',
        title: 'Case 1: Complex Bradycardia',
        content: [
          'Patient: 75-year-old with chest pain',
          'ECG: Regular rhythm at 42 bpm',
          'Narrow QRS, no visible P waves',
          'Blood pressure 90/60 mmHg',
          'Mild dyspnea on exertion',
          'Recent inferior wall MI'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit3/case-bradycardia.jpg',
        imageAlt: 'Complex bradycardia case ECG',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit3/case-bradycardia.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit3-case-tachycardia',
        title: 'Case 2: Narrow QRS Tachycardia',
        content: [
          'Patient: 45-year-old with palpitations',
          'ECG: Regular rhythm at 165 bpm',
          'Narrow QRS, P waves hard to identify',
          'Blood pressure 110/70 mmHg',
          'No response to vagal maneuvers',
          'History of digitalis use'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit3/case-tachycardia.jpg',
        imageAlt: 'Narrow QRS tachycardia case analysis',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit3/case-tachycardia.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit3-case-dissociation',
        title: 'Case 3: AV Dissociation Pattern',
        content: [
          'Patient: 60-year-old post-cardiac surgery',
          'ECG: Regular rhythm at 85 bpm',
          'Narrow QRS with marching P waves',
          'Occasional capture beats visible',
          'Hemodynamically stable',
          'Temporary epicardial wires in place'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit3/case-dissociation.jpg',
        imageAlt: 'AV dissociation pattern case',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit3/case-dissociation.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit3-case-premature-beats',
        title: 'Case 4: Frequent Premature Beats',
        content: [
          'Patient: 30-year-old with anxiety',
          'ECG: Sinus rhythm with frequent PJCs',
          'Bigeminal pattern present',
          'Normal hemodynamics',
          'High caffeine intake reported',
          'No structural heart disease'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit3/case-premature-beats.jpg',
        imageAlt: 'Frequent premature junctional contractions case',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit3/case-premature-beats.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit3-case-drug-induced',
        title: 'Case 5: Drug-Induced Arrhythmia',
        content: [
          'Patient: 65-year-old with heart failure',
          'ECG: Accelerated junctional at 95 bpm',
          'Inverted P waves in inferior leads',
          'On digoxin, metoprolol, lisinopril',
          'Nausea and visual disturbances',
          'Elevated digoxin level'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit3/case-drug-induced.jpg',
        imageAlt: 'Drug-induced junctional arrhythmia case',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit3/case-drug-induced.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit3-quiz',
        title: 'Unit 3 Knowledge Check',
        question: 'In Case 1 (bradycardia post-MI), what is the MOST appropriate immediate management?',
        options: [
          'Immediate transcutaneous pacing',
          'Atropine 0.5 mg IV',
          'Observation with monitoring',
          'Permanent pacemaker consultation'
        ],
        correctAnswer: 1,
        explanation: 'Atropine 0.5 mg IV is most appropriate for symptomatic junctional bradycardia post-inferior MI, as it may improve AV conduction and heart rate while avoiding the discomfort of immediate pacing in a stable patient.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit3/unit3-quiz.jpg',
        imageAlt: 'Unit 3 quiz background',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit3/unit3-quiz.mp3',
          autoPlay: false
        }
      },

      // UNIT 4: CLINICAL DECISION-MAKING (Slides 22-28)
      {
        id: 'unit4-decision-overview',
        title: 'Unit 4: Clinical Decision-Making Overview',
        content: 'Evidence-based approach to clinical decision-making for junctional rhythms and AV blocks.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit4/decision-overview.jpg',
        imageAlt: 'Clinical decision-making overview',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit4/decision-overview.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit4-hemodynamic-assessment',
        title: 'Hemodynamic Assessment Priority',
        content: [
          'Vital signs stability evaluation',
          'Perfusion status assessment',
          'Symptoms correlation with rhythm',
          'Exercise tolerance evaluation',
          'End-organ function monitoring',
          'Quality of life impact assessment'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit4/hemodynamic-assessment.jpg',
        imageAlt: 'Hemodynamic assessment protocol',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit4/hemodynamic-assessment.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit4-reversible-causes',
        title: 'Reversible Causes Identification',
        content: [
          'Drug-induced arrhythmias (digitalis)',
          'Electrolyte imbalances correction',
          'Ischemia evaluation and treatment',
          'Hypoxia and acidosis correction',
          'Inflammatory process assessment',
          'Metabolic disorder investigation'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit4/reversible-causes.jpg',
        imageAlt: 'Reversible causes identification chart',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit4/reversible-causes.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit4-pacing-indications',
        title: 'Pacing Indication Guidelines',
        content: [
          'Class I: Symptomatic bradycardia',
          'Class I: Complete heart block',
          'Class IIa: Asymptomatic Mobitz II',
          'Class IIb: First degree if symptomatic',
          'Class III: Asymptomatic first degree',
          'Emergency vs elective timing'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/av_block_second_degree.png',
        imageAlt: 'Real ECG showing pacing indication scenario',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit4/pacing-indications.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit4-monitoring-strategies',
        title: 'Monitoring Strategy Selection',
        content: [
          'Continuous telemetry indications',
          'Holter monitoring applications',
          'Event recorder considerations',
          'Exercise testing protocols',
          'Electrophysiology study timing',
          'Follow-up interval determination'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit4/monitoring-strategies.jpg',
        imageAlt: 'Monitoring strategy selection guide',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit4/monitoring-strategies.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit4-treatment-algorithms',
        title: 'Evidence-Based Treatment Algorithms',
        content: [
          'Acute management protocols',
          'Chronic management strategies',
          'Risk stratification approaches',
          'Intervention timing decisions',
          'Multidisciplinary team coordination',
          'Patient education priorities'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit4/treatment-algorithms.jpg',
        imageAlt: 'Evidence-based treatment algorithms',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit4/treatment-algorithms.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit4-quiz',
        title: 'Unit 4 Knowledge Check',
        question: 'What is the PRIMARY factor determining urgency of intervention in junctional rhythms?',
        options: [
          'Heart rate below 60 bpm',
          'Presence of AV dissociation',
          'Hemodynamic stability',
          'QRS width measurement'
        ],
        correctAnswer: 2,
        explanation: 'Hemodynamic stability is the primary factor determining urgency of intervention. A patient with stable hemodynamics can be observed and treated conservatively, while unstable patients require immediate intervention regardless of the specific rhythm type.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit4/unit4-quiz.jpg',
        imageAlt: 'Unit 4 quiz background',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit4/unit4-quiz.mp3',
          autoPlay: false
        }
      },

      // UNIT 5: EMERGENCY MANAGEMENT (Slides 29-35)
      {
        id: 'unit5-emergency-overview',
        title: 'Unit 5: Emergency Management Overview',
        content: 'Rapid assessment and management protocols for life-threatening junctional arrhythmias and AV blocks.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit5/emergency-overview.jpg',
        imageAlt: 'Emergency management overview',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit5/emergency-overview.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit5-immediate-assessment',
        title: 'Immediate Assessment Protocol',
        content: [
          'ABCDE primary survey approach',
          'Hemodynamic stability evaluation',
          'Symptom severity assessment',
          'ECG rhythm identification',
          'Underlying cause investigation',
          'Intervention urgency determination'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit5/immediate-assessment.jpg',
        imageAlt: 'Immediate assessment protocol flowchart',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit5/immediate-assessment.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit5-pharmacologic-interventions',
        title: 'Emergency Pharmacologic Interventions',
        content: [
          'Atropine: 0.5-1.0 mg IV for bradycardia',
          'Isoproterenol: 2-10 μg/min for blocks',
          'Adenosine: 6-12 mg for tachycardia',
          'Digitalis antidote for toxicity',
          'Calcium, magnesium for electrolytes',
          'Contraindications and precautions'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit5/pharmacologic-interventions.jpg',
        imageAlt: 'Emergency pharmacologic intervention guide',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit5/pharmacologic-interventions.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit5-transcutaneous-pacing',
        title: 'Transcutaneous Pacing Protocol',
        content: [
          'Indications for immediate pacing',
          'Equipment setup and preparation',
          'Optimal pad placement technique',
          'Rate and output settings',
          'Capture verification methods',
          'Patient comfort considerations'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit5/transcutaneous-pacing.jpg',
        imageAlt: 'Transcutaneous pacing protocol guide',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit5/transcutaneous-pacing.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit5-temporary-pacing',
        title: 'Temporary Transvenous Pacing',
        content: [
          'Indications for transvenous approach',
          'Venous access considerations',
          'Lead placement techniques',
          'Threshold testing protocols',
          'Complications prevention',
          'Transition to permanent pacing'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit5/temporary-pacing.jpg',
        imageAlt: 'Temporary transvenous pacing procedure',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit5/temporary-pacing.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit5-cardioversion-considerations',
        title: 'Cardioversion and Advanced Care',
        content: [
          'Synchronized cardioversion indications',
          'Energy level recommendations',
          'Sedation and airway management',
          'Post-cardioversion monitoring',
          'Alternative energy sources',
          'Complications management'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit5/cardioversion-considerations.jpg',
        imageAlt: 'Cardioversion and advanced care protocols',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit5/cardioversion-considerations.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit5-quiz',
        title: 'Unit 5 Knowledge Check',
        question: 'In a patient with complete heart block and hemodynamic instability, what is the FIRST intervention?',
        options: [
          'Atropine 1 mg IV',
          'Transcutaneous pacing',
          'Transvenous pacing',
          'Synchronized cardioversion'
        ],
        correctAnswer: 1,
        explanation: 'Transcutaneous pacing is the first intervention for hemodynamically unstable complete heart block because it can be initiated immediately while other interventions are being prepared, providing immediate hemodynamic support.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit5/unit5-quiz.jpg',
        imageAlt: 'Unit 5 quiz background',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit5/unit5-quiz.mp3',
          autoPlay: false
        }
      },

      // UNIT 6: MASTERY ASSESSMENT (Slides 36-42)
      {
        id: 'unit6-mastery-overview',
        title: 'Unit 6: Mastery Assessment Overview',
        content: 'Comprehensive assessment of Module 4 mastery through integrated case scenarios and clinical applications.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit6/mastery-overview.jpg',
        imageAlt: 'Mastery assessment overview',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit6/mastery-overview.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit6-recognition-mastery',
        title: 'Rhythm Recognition Mastery',
        content: [
          'Instant recognition of all junctional patterns',
          'Accurate rate and rhythm assessment',
          'P wave relationship evaluation',
          'QRS morphology interpretation',
          'AV relationship determination',
          'Confident diagnostic conclusions'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit6/recognition-mastery.jpg',
        imageAlt: 'Rhythm recognition mastery assessment',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit6/recognition-mastery.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit6-differential-mastery',
        title: 'Differential Diagnosis Mastery',
        content: [
          'Systematic approach application',
          'Accurate rhythm differentiation',
          'Clinical context integration',
          'Therapeutic maneuver interpretation',
          'Advanced pattern recognition',
          'Confident clinical decision-making'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit6/differential-mastery.jpg',
        imageAlt: 'Differential diagnosis mastery assessment',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit6/differential-mastery.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit6-management-mastery',
        title: 'Clinical Management Mastery',
        content: [
          'Appropriate intervention selection',
          'Risk-benefit analysis skills',
          'Emergency vs elective decisions',
          'Monitoring strategy selection',
          'Patient education competence',
          'Multidisciplinary coordination'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit6/management-mastery.jpg',
        imageAlt: 'Clinical management mastery assessment',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit6/management-mastery.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit6-integration-challenge',
        title: 'Complex Integration Challenge',
        content: [
          'Multi-system patient scenarios',
          'Competing clinical priorities',
          'Resource limitation considerations',
          'Ethical decision-making',
          'Quality improvement initiatives',
          'Advanced clinical reasoning'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit6/integration-challenge.jpg',
        imageAlt: 'Complex integration challenge scenarios',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit6/integration-challenge.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit6-competency-validation',
        title: 'Competency Validation Framework',
        content: [
          'Knowledge assessment completion',
          'Skill demonstration requirements',
          'Clinical reasoning evaluation',
          'Professional behavior assessment',
          'Continuous improvement planning',
          'Advanced learning pathway preparation'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit6/competency-validation.jpg',
        imageAlt: 'Competency validation framework',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit6/competency-validation.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit6-quiz',
        title: 'Unit 6 Final Mastery Check',
        question: 'A patient presents with narrow QRS tachycardia at 180 bpm, no visible P waves, hemodynamically stable. After adenosine 6 mg IV, rhythm converts to sinus at 75 bpm. Most likely diagnosis?',
        options: [
          'Junctional tachycardia',
          'Atrial tachycardia',
          'AVNRT (AV nodal reentrant tachycardia)',
          'Sinus tachycardia with first degree AV block'
        ],
        correctAnswer: 2,
        explanation: 'AVNRT is most likely given the response to adenosine with conversion to sinus rhythm. True junctional tachycardia typically does not terminate with adenosine, while the rapid termination suggests a reentrant mechanism involving the AV node.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module4/lesson36/unit6/unit6-quiz.jpg',
        imageAlt: 'Unit 6 final mastery quiz background',
        audio: {
          narrationUrl: 'audio/module4/lesson36/unit6/unit6-quiz.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "Congratulations! You've achieved mastery of Module 4 - Junctional Rhythms! Complete integration of all concepts with advanced clinical decision-making capabilities.",
    keyPoints: [
      "Systematic approach enables accurate junctional rhythm recognition",
      "Hemodynamic stability determines intervention urgency",
      "Differential diagnosis requires integration of multiple ECG features",
      "Emergency management protocols save lives in critical situations",
      "Clinical decision-making combines evidence with patient-specific factors",
      "Mastery requires continuous practice and application of learned concepts"
    ],
    resources: [
      {
        title: "Junctional Rhythm Integration Masterclass",
        url: "https://youtube.com/watch?v=junctional_integration",
        type: "video"
      },
      {
        title: "Emergency Arrhythmia Management Guidelines",
        url: "https://cardiology.com/emergency-arrhythmia-management",
        type: "article"
      }
    ]
  },
  tasks: [],
  completed: false,
  attempts: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
