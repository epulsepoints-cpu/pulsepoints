import { Lesson } from '@/types/learning';

export const optimizedLesson42: Lesson = {
  id: 'lesson-5-6-optimized',
  moduleId: 'module-5',
  title: "Premature Ventricular Contractions (PVCs)",
  description: "Recognition and clinical significance of premature ventricular contractions",
  order: 6,
  estimatedTime: 15,
  content: {
    type: 'mixed',
    introduction: "Master recognition of PVCs - the most common ventricular arrhythmia with varying clinical significance based on frequency and underlying heart disease.",
    sections: [
      {
        id: 'section-overview',
        title: "PVC Recognition",
        content: "COMMON ARRHYTHMIA: Premature Wide QRS → Compensatory Pause → Clinical Context → Management",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'pvc-intro',
        title: 'Premature Ventricular Contractions',
        content: 'PVCs are premature beats originating from ventricular tissue before the next expected sinus beat. They are characterized by wide QRS complexes and are usually followed by compensatory pauses.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/pvc_80bpm.png',
        imageAlt: 'ECG showing PVC interrupting normal sinus rhythm with compensatory pause',
        audio: {
          narrationUrl: 'audio/module5/lesson42/pvc-intro.mp3',
          autoPlay: false
        }
      },
      {
        id: 'pvc-characteristics',
        title: 'PVC Characteristics',
        content: 'PVCs have three key features: 1) Premature timing, 2) Wide QRS complex (>120ms), and 3) Compensatory pause. The QRS morphology varies depending on the ventricular focus location.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/pvc_85bpm_3.png',
        imageAlt: 'Detailed PVC anatomy showing premature timing, wide QRS, and compensatory pause'},
      {
        id: 'compensatory-pause',
        title: 'Compensatory Pause Recognition',
        question: 'A compensatory pause after a PVC means:',
        options: [
          'The pause is shorter than normal',
          'The pause exactly equals two normal R-R intervals',
          'The pause is irregular and unpredictable',
          'There is no pause after the PVC'
        ],
        correctAnswer: 1,
        explanation: 'A compensatory pause is "fully compensatory" when the interval from the beat before the PVC to the beat after equals exactly two normal R-R intervals.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module5/lesson42/compensatory-pause.jpg',
        imageAlt: 'Measurement demonstrating compensatory pause calculation with calipers'},
      {
        id: 'pvc-morphology',
        title: 'PVC Morphology Patterns',
        content: 'PVCs can be uniform (same shape - monomorphic) or multiform (different shapes - polymorphic). Multiform PVCs may indicate multiple ventricular foci or varying conduction.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/pvc_95bpm.png',
        imageAlt: 'Comparison of uniform vs multiform PVCs showing different morphologies'},
      {
        id: 'pvc-frequency',
        title: 'PVC Frequency and Patterns',
        question: 'Frequent PVCs are generally defined as:',
        options: [
          'More than 1 per minute',
          'More than 10 per hour',
          'More than 30 per hour',
          'More than 100 per day'
        ],
        correctAnswer: 2,
        explanation: 'Frequent PVCs are typically defined as >30 per hour on Holter monitoring, which may warrant further evaluation.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/pvc_65bpm.png',
        imageAlt: 'Holter monitor report showing PVC frequency calculations and patterns'},
      {
        id: 'clinical-significance',
        title: 'Clinical Significance of PVCs',
        content: 'PVC significance depends on frequency, underlying heart disease, and symptoms. In healthy hearts, even frequent PVCs are usually benign. In diseased hearts, they may indicate increased arrhythmia risk.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module5/lesson42/clinical-significance.jpg',
        imageAlt: 'Risk stratification chart for PVCs based on heart disease and frequency',
        audio: {
          narrationUrl: 'audio/module5/lesson42/clinical-significance.mp3',
          autoPlay: false
        }
      },
      {
        id: 'pvc-management',
        title: 'PVC Management Approach',
        question: 'Asymptomatic PVCs in a healthy heart typically require:',
        options: [
          'Immediate antiarrhythmic therapy',
          'Emergency cardioversion',
          'Reassurance and observation',
          'Pacemaker implantation'
        ],
        correctAnswer: 2,
        explanation: 'Asymptomatic PVCs in structurally normal hearts are usually benign and require only reassurance and observation.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/pvc_70bpm_1.png',
        imageAlt: 'Management algorithm for PVCs based on symptoms and heart structure'},
      {
        id: 'pvc-mastery',
        title: 'PVC Recognition Mastered',
        content: 'You now can recognize PVCs as premature wide beats with compensatory pauses. Remember: clinical significance depends on frequency, symptoms, and underlying heart disease.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/pvc_78bpm_2.png',
        imageAlt: 'PVC mastery summary with recognition criteria and clinical decision tree',
        audio: {
          narrationUrl: 'audio/module5/lesson42/pvc-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "PVCs are premature wide beats with compensatory pauses. Clinical significance depends on frequency, symptoms, and underlying heart disease.",
    keyPoints: [
      "Premature wide QRS complexes (>120ms)",
      "Usually followed by compensatory pauses",
      "Can be uniform (monomorphic) or multiform (polymorphic)",
      "Significance depends on heart structure and frequency"
    ],
    resources: [
      {
        title: "PVC Recognition and Risk Stratification",
        url: "https://youtube.com/watch?v=pvc_risk_stratification",
        type: "video"
      }
    ]
  },
  tasks: [],
  completed: false,
  attempts: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
