import { Lesson } from './src/types/learning';

export const optimizedLesson35SixUnit: Lesson = {
  id: 'lesson-4-7-optimized-6unit',
  moduleId: 'module-4',
  title: "AV Blocks Introduction",
  description: "Master AV conduction blocks with comprehensive 6-unit approach: anatomy, physiology, classification, pathophysiology, clinical significance, and diagnostic approach",
  order: 7,
  estimatedTime: 25,
  content: {
    type: 'mixed',
    introduction: "Master AV Blocks! Comprehensive understanding of atrioventricular conduction disorders from basic anatomy to clinical diagnosis.",
    sections: [
      {
        id: 'section-overview',
        title: "AV Blocks Mastery Learning Path",
        content: "UNIT 1: Conduction Anatomy → UNIT 2: Normal Physiology → UNIT 3: Block Classification → UNIT 4: Pathophysiology → UNIT 5: Clinical Significance → UNIT 6: Diagnostic Approach",
        mediaType: 'image'
      }
    ],
    slides: [
      // UNIT 1: CONDUCTION ANATOMY (Slides 1-7)
      {
        id: 'unit1-anatomy-overview',
        title: 'Unit 1: Conduction Anatomy Overview',
        content: 'Understanding the anatomical basis of AV conduction - from sinoatrial node to ventricular myocardium.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit1/anatomy-overview.jpg',
        imageAlt: 'Cardiac conduction system anatomy overview',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit1/anatomy-overview.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit1-sa-node-structure',
        title: 'Sinoatrial Node Architecture',
        content: [
          'Location: Right atrial wall near SVC',
          'Pacemaker cell characteristics',
          'Blood supply: RCA or LCX',
          'Autonomic innervation patterns',
          'Connection to atrial myocardium',
          'Natural pacemaker properties'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit1/sa-node-structure.jpg',
        imageAlt: 'Detailed SA node anatomy and connections',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit1/sa-node-structure.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit1-atrial-conduction',
        title: 'Atrial Conduction Pathways',
        content: [
          'Preferential conduction pathways',
          'Anterior, middle, posterior routes',
          'Interatrial conduction (Bachmann bundle)',
          'Conduction velocity variations',
          'Anatomical barriers and channels',
          'Connection to AV node approaches'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit1/atrial-conduction.jpg',
        imageAlt: 'Atrial conduction pathway diagram',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit1/atrial-conduction.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit1-av-node-anatomy',
        title: 'AV Node Detailed Anatomy',
        content: [
          'Location: Triangle of Koch',
          'Compact node structure',
          'Transitional zones (AN, N, NH)',
          'Dual pathway physiology',
          'Blood supply: Posterior descending',
          'Autonomic innervation density'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/av_block_complete.png',
        imageAlt: 'Real ECG showing AV block pattern',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit1/av-node-anatomy.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit1-his-purkinje-system',
        title: 'His-Purkinje System',
        content: [
          'Bundle of His penetrating portion',
          'Left bundle branch anatomy',
          'Right bundle branch characteristics',
          'Fascicular divisions (LAF, LPF)',
          'Purkinje fiber network',
          'Terminal conduction system'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit1/his-purkinje-system.jpg',
        imageAlt: 'His-Purkinje system detailed anatomy',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit1/his-purkinje-system.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit1-ventricular-activation',
        title: 'Ventricular Activation Sequence',
        content: [
          'Septal activation pattern',
          'Left ventricular activation sequence',
          'Right ventricular activation',
          'Apex to base progression',
          'Transmural conduction',
          'Complete depolarization timing'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit1/ventricular-activation.jpg',
        imageAlt: 'Ventricular activation sequence diagram',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit1/ventricular-activation.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit1-quiz',
        title: 'Unit 1 Knowledge Check',
        question: 'Which anatomical structure is MOST commonly affected in AV blocks?',
        options: [
          'Sinoatrial node',
          'Atrial conduction pathways',
          'AV node and His bundle',
          'Purkinje fiber network'
        ],
        correctAnswer: 2,
        explanation: 'The AV node and His bundle are the most commonly affected structures in AV blocks due to their single pathway nature and vulnerability to ischemia, creating the bottleneck for atrioventricular conduction.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit1/unit1-quiz.jpg',
        imageAlt: 'Unit 1 quiz background',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit1/unit1-quiz.mp3',
          autoPlay: false
        }
      },

      // UNIT 2: NORMAL PHYSIOLOGY (Slides 8-14)
      {
        id: 'unit2-physiology-overview',
        title: 'Unit 2: Normal Physiology Overview',
        content: 'Understanding normal AV conduction physiology - the foundation for recognizing pathologic blocks.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit2/physiology-overview.jpg',
        imageAlt: 'Normal AV conduction physiology overview',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit2/physiology-overview.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit2-conduction-timing',
        title: 'Normal Conduction Timing',
        content: [
          'SA node cycle length: 600-1000ms',
          'Atrial conduction time: 80-100ms',
          'AV node delay: 120-200ms',
          'His-Purkinje conduction: 35-55ms',
          'Total PR interval: 120-200ms',
          'QRS duration: 80-100ms'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit2/conduction-timing.jpg',
        imageAlt: 'Normal conduction timing diagram',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit2/conduction-timing.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit2-av-node-function',
        title: 'AV Node Physiologic Function',
        content: [
          'Physiologic delay mechanism',
          'Rate-dependent conduction properties',
          'Decremental conduction characteristics',
          'Refractory period variations',
          'Concealed conduction phenomenon',
          'Autonomic modulation effects'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit2/av-node-function.jpg',
        imageAlt: 'AV node physiologic function illustration',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit2/av-node-function.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit2-action-potentials',
        title: 'Cellular Action Potentials',
        content: [
          'Nodal cell action potential characteristics',
          'His-Purkinje cell properties',
          'Ventricular myocyte activation',
          'Calcium channel dominance in nodes',
          'Sodium channel role in fast tissue',
          'Repolarization and recovery phases'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit2/action-potentials.jpg',
        imageAlt: 'Cellular action potential comparisons',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit2/action-potentials.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit2-conduction-velocity',
        title: 'Conduction Velocity Variations',
        content: [
          'Atrial muscle: 1 m/s',
          'AV node: 0.05 m/s (slowest)',
          'His bundle: 1.5 m/s',
          'Bundle branches: 2 m/s',
          'Purkinje fibers: 4 m/s (fastest)',
          'Ventricular muscle: 0.4 m/s'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit2/conduction-velocity.jpg',
        imageAlt: 'Conduction velocity variations diagram',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit2/conduction-velocity.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit2-refractory-periods',
        title: 'Refractory Period Concepts',
        content: [
          'Absolute refractory period definition',
          'Relative refractory period',
          'Effective refractory period',
          'Functional refractory period',
          'Rate-dependent changes',
          'Clinical significance for blocks'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit2/refractory-periods.jpg',
        imageAlt: 'Refractory period concepts illustration',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit2/refractory-periods.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit2-quiz',
        title: 'Unit 2 Knowledge Check',
        question: 'What is the PRIMARY physiologic purpose of AV node delay?',
        options: [
          'To prevent retrograde conduction',
          'To allow complete atrial emptying before ventricular contraction',
          'To filter rapid atrial rates',
          'To maintain ventricular filling pressure'
        ],
        correctAnswer: 1,
        explanation: 'The primary purpose of AV node delay is to allow complete atrial emptying and filling of the ventricles before ventricular contraction begins, optimizing cardiac output through proper timing of atrial and ventricular events.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit2/unit2-quiz.jpg',
        imageAlt: 'Unit 2 quiz background',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit2/unit2-quiz.mp3',
          autoPlay: false
        }
      },

      // UNIT 3: BLOCK CLASSIFICATION (Slides 15-21)
      {
        id: 'unit3-classification-overview',
        title: 'Unit 3: Block Classification Overview',
        content: 'Systematic classification of AV blocks based on ECG patterns and conduction characteristics.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit3/classification-overview.jpg',
        imageAlt: 'AV block classification overview',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit3/classification-overview.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit3-first-degree-definition',
        title: 'First Degree AV Block',
        content: [
          'Definition: All P waves conduct with delay',
          'PR interval >200ms (5 small boxes)',
          'Constant PR interval duration',
          'Every P wave followed by QRS',
          'Regular rhythm maintained',
          'Represents prolonged AV conduction'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/av_block_first_degree.png',
        imageAlt: 'Real ECG showing first degree AV block',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit3/first-degree-definition.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit3-second-degree-overview',
        title: 'Second Degree AV Block Overview',
        content: [
          'Definition: Some P waves blocked',
          'Intermittent failure of conduction',
          'Two main subtypes: Mobitz I and II',
          'P waves present without QRS',
          'Variable AV conduction ratios',
          'Progressive vs fixed patterns'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit3/second-degree-overview.jpg',
        imageAlt: 'Second degree AV block overview patterns',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit3/second-degree-overview.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit3-mobitz-type-1',
        title: 'Mobitz Type I (Wenckebach)',
        content: [
          'Progressive PR interval prolongation',
          'Eventual dropped QRS complex',
          'Cycle repeats (Wenckebach periodicity)',
          'Usually AV node level block',
          'Often benign and reversible',
          'May be physiologic at high rates'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/av_block_second_degree.png',
        imageAlt: 'Real ECG showing Mobitz Type I pattern',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit3/mobitz-type-1.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit3-mobitz-type-2',
        title: 'Mobitz Type II',
        content: [
          'Fixed PR interval when conducting',
          'Sudden dropped QRS without warning',
          'Usually infranodal (His-bundle) block',
          'Often pathologic and progressive',
          'Higher risk of complete block',
          'May require pacemaker intervention'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit3/mobitz-type-2.jpg',
        imageAlt: 'Mobitz Type II pattern characteristics',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit3/mobitz-type-2.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit3-third-degree-complete',
        title: 'Third Degree (Complete) AV Block',
        content: [
          'No AV conduction (complete dissociation)',
          'P waves and QRS complexes independent',
          'Atrial rate faster than ventricular',
          'Escape rhythm maintains circulation',
          'Junctional (40-60 bpm) or ventricular escape',
          'Requires immediate pacemaker therapy'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit3/third-degree-complete.jpg',
        imageAlt: 'Complete AV block with escape rhythm',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit3/third-degree-complete.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit3-quiz',
        title: 'Unit 3 Knowledge Check',
        question: 'Which AV block type has the HIGHEST risk of progression to complete heart block?',
        options: [
          'First degree AV block',
          'Mobitz Type I (Wenckebach)',
          'Mobitz Type II',
          'All types have equal risk'
        ],
        correctAnswer: 2,
        explanation: 'Mobitz Type II has the highest risk of progression to complete heart block because it represents infranodal disease with unstable conduction, often requiring prophylactic pacemaker implantation.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit3/unit3-quiz.jpg',
        imageAlt: 'Unit 3 quiz background',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit3/unit3-quiz.mp3',
          autoPlay: false
        }
      },

      // UNIT 4: PATHOPHYSIOLOGY (Slides 22-28)
      {
        id: 'unit4-pathophysiology-overview',
        title: 'Unit 4: Pathophysiology Overview',
        content: 'Understanding the mechanisms and causes underlying different types of AV conduction blocks.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit4/pathophysiology-overview.jpg',
        imageAlt: 'AV block pathophysiology overview',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit4/pathophysiology-overview.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit4-ischemic-mechanisms',
        title: 'Ischemic Mechanisms',
        content: [
          'Inferior MI: RCA occlusion affecting AV node',
          'Anterior MI: LAD affecting His bundle',
          'Acute vs chronic ischemic effects',
          'Reversible vs permanent damage',
          'Collateral circulation importance',
          'Reperfusion timing effects'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit4/ischemic-mechanisms.jpg',
        imageAlt: 'Ischemic AV block mechanisms',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit4/ischemic-mechanisms.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit4-degenerative-processes',
        title: 'Degenerative Processes',
        content: [
          'Lenegre disease (His-Purkinje sclerosis)',
          'Lev disease (mitral/aortic calcification)',
          'Age-related fibrosis progression',
          'Idiopathic conduction system disease',
          'Progressive nature of degeneration',
          'Genetic predisposition factors'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit4/degenerative-processes.jpg',
        imageAlt: 'Degenerative conduction system disease',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit4/degenerative-processes.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit4-inflammatory-causes',
        title: 'Inflammatory Causes',
        content: [
          'Myocarditis affecting conduction system',
          'Rheumatic heart disease progression',
          'Sarcoidosis cardiac involvement',
          'Chagas disease (T. cruzi infection)',
          'Lyme carditis manifestations',
          'Autoimmune conduction disorders'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit4/inflammatory-causes.jpg',
        imageAlt: 'Inflammatory causes of AV block',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit4/inflammatory-causes.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit4-drug-induced-blocks',
        title: 'Drug-Induced AV Blocks',
        content: [
          'Beta-blockers and calcium channel blockers',
          'Digitalis toxicity mechanisms',
          'Class I antiarrhythmic effects',
          'Adenosine-induced transient blocks',
          'Drug interaction potentiation',
          'Dose-dependent vs idiosyncratic'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit4/drug-induced-blocks.jpg',
        imageAlt: 'Drug-induced AV block mechanisms',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit4/drug-induced-blocks.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit4-congenital-disorders',
        title: 'Congenital Conduction Disorders',
        content: [
          'Maternal lupus antibody effects',
          'Inherited conduction system defects',
          'Congenital heart disease associations',
          'Progressive familial heart block',
          'Neonatal lupus manifestations',
          'Genetic counseling implications'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit4/congenital-disorders.jpg',
        imageAlt: 'Congenital AV conduction disorders',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit4/congenital-disorders.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit4-quiz',
        title: 'Unit 4 Knowledge Check',
        question: 'Which coronary artery occlusion is MOST likely to cause AV block?',
        options: [
          'Left anterior descending (LAD)',
          'Left circumflex (LCX)',
          'Right coronary artery (RCA)',
          'Posterior descending artery (PDA)'
        ],
        correctAnswer: 2,
        explanation: 'Right coronary artery (RCA) occlusion is most likely to cause AV block because the RCA typically supplies the AV node via the posterior descending artery, making inferior MI a common cause of AV blocks.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit4/unit4-quiz.jpg',
        imageAlt: 'Unit 4 quiz background',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit4/unit4-quiz.mp3',
          autoPlay: false
        }
      },

      // UNIT 5: CLINICAL SIGNIFICANCE (Slides 29-35)
      {
        id: 'unit5-clinical-overview',
        title: 'Unit 5: Clinical Significance Overview',
        content: 'Understanding the clinical implications and prognostic significance of different AV block types.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit5/clinical-overview.jpg',
        imageAlt: 'Clinical significance overview',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit5/clinical-overview.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit5-hemodynamic-effects',
        title: 'Hemodynamic Consequences',
        content: [
          'Bradycardia-induced hypotension',
          'Reduced cardiac output mechanisms',
          'AV synchrony loss effects',
          'Exercise intolerance patterns',
          'Compensatory mechanisms',
          'Heart failure development risk'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit5/hemodynamic-effects.jpg',
        imageAlt: 'Hemodynamic effects of AV blocks',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit5/hemodynamic-effects.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit5-symptom-spectrum',
        title: 'Clinical Symptom Spectrum',
        content: [
          'Asymptomatic (especially first degree)',
          'Fatigue and exercise intolerance',
          'Presyncope and syncope',
          'Chest pain and dyspnea',
          'Heart failure symptoms',
          'Sudden cardiac death risk'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit5/symptom-spectrum.jpg',
        imageAlt: 'Clinical symptom spectrum chart',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit5/symptom-spectrum.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit5-prognostic-factors',
        title: 'Prognostic Factors',
        content: [
          'Block level (nodal vs infranodal)',
          'Underlying heart disease presence',
          'Reversibility potential',
          'Progression rate assessment',
          'Age and comorbidity factors',
          'Response to interventions'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit5/prognostic-factors.jpg',
        imageAlt: 'Prognostic factors assessment',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit5/prognostic-factors.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit5-risk-stratification',
        title: 'Risk Stratification Approach',
        content: [
          'Low risk: First degree, asymptomatic',
          'Intermediate risk: Mobitz I with symptoms',
          'High risk: Mobitz II, any symptoms',
          'Very high risk: Complete block',
          'Emergency assessment criteria',
          'Pacemaker indication guidelines'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit5/risk-stratification.jpg',
        imageAlt: 'Risk stratification approach',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit5/risk-stratification.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit5-quality-of-life',
        title: 'Quality of Life Impact',
        content: [
          'Activity limitation patterns',
          'Psychological effects of symptoms',
          'Social and occupational impact',
          'Driving and safety considerations',
          'Family and caregiver concerns',
          'Post-intervention improvements'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit5/quality-of-life.jpg',
        imageAlt: 'Quality of life impact assessment',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit5/quality-of-life.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit5-quiz',
        title: 'Unit 5 Knowledge Check',
        question: 'Which AV block type is MOST likely to be completely asymptomatic?',
        options: [
          'First degree AV block',
          'Mobitz Type I',
          'Mobitz Type II',
          'Complete AV block'
        ],
        correctAnswer: 0,
        explanation: 'First degree AV block is most likely to be completely asymptomatic because all beats conduct normally with only mild delay, maintaining normal heart rate and AV synchrony without hemodynamic compromise.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit5/unit5-quiz.jpg',
        imageAlt: 'Unit 5 quiz background',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit5/unit5-quiz.mp3',
          autoPlay: false
        }
      },

      // UNIT 6: DIAGNOSTIC APPROACH (Slides 36-42)
      {
        id: 'unit6-diagnostic-overview',
        title: 'Unit 6: Diagnostic Approach Overview',
        content: 'Systematic approach to AV block diagnosis - from ECG analysis to advanced testing strategies.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit6/diagnostic-overview.jpg',
        imageAlt: 'Diagnostic approach overview',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit6/diagnostic-overview.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit6-ecg-analysis-steps',
        title: 'Systematic ECG Analysis',
        content: [
          'Step 1: Assess rhythm regularity',
          'Step 2: Identify P waves and rate',
          'Step 3: Measure PR intervals',
          'Step 4: Evaluate QRS morphology',
          'Step 5: Assess AV relationship',
          'Step 6: Classify block type'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit6/ecg-analysis-steps.jpg',
        imageAlt: 'Systematic ECG analysis steps',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit6/ecg-analysis-steps.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit6-measurement-techniques',
        title: 'Precise Measurement Techniques',
        content: [
          'PR interval measurement methods',
          'P wave identification techniques',
          'QRS width assessment',
          'Rhythm strip analysis importance',
          'Multi-lead confirmation',
          'Digital vs manual measurements'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit6/measurement-techniques.jpg',
        imageAlt: 'ECG measurement techniques',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit6/measurement-techniques.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit6-holter-monitoring',
        title: 'Holter and Event Monitoring',
        content: [
          '24-48 hour Holter monitoring',
          'Event recorder applications',
          'Intermittent block detection',
          'Correlation with symptoms',
          'Activity diary importance',
          'Monitoring duration decisions'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit6/holter-monitoring.jpg',
        imageAlt: 'Holter monitoring applications',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit6/holter-monitoring.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit6-exercise-testing',
        title: 'Exercise Testing Applications',
        content: [
          'Chronotropic incompetence assessment',
          'Exercise-induced AV block',
          'Heart rate response evaluation',
          'Symptom reproduction attempts',
          'Functional capacity assessment',
          'Contraindications and safety'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit6/exercise-testing.jpg',
        imageAlt: 'Exercise testing for AV blocks',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit6/exercise-testing.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit6-electrophysiology-study',
        title: 'Electrophysiology Study Indications',
        content: [
          'His bundle recording techniques',
          'AH and HV interval measurements',
          'Programmed stimulation protocols',
          'Drug challenge testing',
          'Risk stratification applications',
          'Pre-pacemaker evaluation'
        ],
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit6/electrophysiology-study.jpg',
        imageAlt: 'Electrophysiology study techniques',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit6/electrophysiology-study.mp3',
          autoPlay: false
        }
      },
      {
        id: 'unit6-quiz',
        title: 'Unit 6 Knowledge Check',
        question: 'What is the MOST important initial step in diagnosing AV blocks?',
        options: [
          'Ordering an electrophysiology study',
          'Systematic 12-lead ECG analysis',
          'Obtaining Holter monitoring',
          'Performing exercise stress testing'
        ],
        correctAnswer: 1,
        explanation: 'Systematic 12-lead ECG analysis is the most important initial step in diagnosing AV blocks, as it provides the fundamental information needed to classify the block type and guide further testing decisions.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module4/lesson35/unit6/unit6-quiz.jpg',
        imageAlt: 'Unit 6 quiz background',
        audio: {
          narrationUrl: 'audio/module4/lesson35/unit6/unit6-quiz.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "You've mastered AV block fundamentals! Complete understanding from anatomy through diagnostic approach with enhanced 6-unit educational structure.",
    keyPoints: [
      "AV blocks involve disrupted conduction in the AV node or His-Purkinje system",
      "Classification: First degree (delayed), Second degree (intermittent), Third degree (complete)",
      "Mobitz II and complete blocks have highest progression risk",
      "Systematic ECG analysis is fundamental for accurate diagnosis",
      "Clinical significance varies from asymptomatic to life-threatening",
      "Early recognition enables appropriate intervention and prevents complications"
    ],
    resources: [
      {
        title: "AV Blocks Comprehensive Guide",
        url: "https://youtube.com/watch?v=av_blocks_complete",
        type: "video"
      },
      {
        title: "Pacemaker Indications for AV Blocks",
        url: "https://cardiology.com/pacemaker-indications",
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
