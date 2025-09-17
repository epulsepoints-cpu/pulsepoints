import { Lesson } from '@/types/learning';

export const optimizedLesson41: Lesson = {
  id: 'lesson-5-5-optimized',
  moduleId: 'module-5',
  title: "Ventricular Fibrillation (VF)",
  description: "Recognition and emergency management of ventricular fibrillation",
  order: 5,
  estimatedTime: 20,
  content: {
    type: 'mixed',
    introduction: "Learn to recognize ventricular fibrillation - the most lethal arrhythmia requiring immediate defibrillation for survival.",
    sections: [
      {
        id: 'section-overview',
        title: "VF Emergency Response",
        content: "CARDIAC ARREST: Chaotic Activity → No Cardiac Output → Immediate Defibrillation → CPR",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'vf-intro',
        title: 'Ventricular Fibrillation Overview',
        content: 'Ventricular fibrillation (VF) is chaotic, disorganized electrical activity in the ventricles with no effective cardiac output. It is incompatible with life and requires immediate defibrillation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module5/lesson41/vf-intro.jpg',
        imageAlt: 'Ventricular fibrillation ECG showing chaotic, disorganized electrical activity',
        audio: {
          narrationUrl: 'audio/module5/lesson41/vf-intro.mp3',
          autoPlay: false
        }
      },
      {
        id: 'vf-mechanism',
        title: 'VF Mechanism',
        content: 'VF results from multiple chaotic reentry circuits firing simultaneously throughout the ventricles. This creates a quivering motion with no coordinated contraction or blood flow.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module5/lesson41/vf-mechanism.jpg',
        imageAlt: 'Multiple chaotic reentry circuits causing ventricular fibrillation'},
      {
        id: 'vf-recognition',
        title: 'VF Recognition',
        question: 'Which ECG pattern confirms ventricular fibrillation?',
        options: [
          'Regular wide QRS complexes at 200 bpm',
          'Chaotic, irregular waveforms with no identifiable complexes',
          'Sawtooth pattern with regular ventricular response',
          'Narrow QRS complexes with irregular rhythm'
        ],
        correctAnswer: 1,
        explanation: 'VF shows chaotic, irregular waveforms with no identifiable P waves, QRS complexes, or T waves - just disorganized electrical activity.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module5/lesson41/vf-recognition.jpg',
        imageAlt: 'Classic VF pattern showing chaotic waveforms without identifiable complexes'},
      {
        id: 'vf-types',
        title: 'Types of Ventricular Fibrillation',
        content: 'VF can be classified as coarse (large amplitude waves) or fine (small amplitude waves). Coarse VF generally responds better to defibrillation than fine VF.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module5/lesson41/vf-types.jpg',
        imageAlt: 'Comparison of coarse VF vs fine VF patterns and amplitude differences'},
      {
        id: 'clinical-presentation',
        title: 'Clinical Presentation of VF',
        question: 'A patient in ventricular fibrillation will present with:',
        options: [
          'Chest pain and shortness of breath',
          'Sudden cardiac arrest with no pulse',
          'Dizziness and near-syncope',
          'Normal vital signs'
        ],
        correctAnswer: 1,
        explanation: 'VF causes immediate cardiac arrest with no pulse, no blood pressure, and unconsciousness within seconds.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module5/lesson41/clinical-presentation.jpg',
        imageAlt: 'Patient in cardiac arrest demonstrating immediate collapse from VF',
        audio: {
          narrationUrl: 'audio/module5/lesson41/clinical-presentation.mp3',
          autoPlay: false
        }
      },
      {
        id: 'immediate-treatment',
        title: 'Immediate Treatment of VF',
        content: 'VF requires immediate unsynchronized defibrillation. Every minute of delay reduces survival by 7-10%. High-quality CPR should be performed between defibrillation attempts.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module5/lesson41/immediate-treatment.jpg',
        imageAlt: 'Emergency defibrillation and CPR protocol for VF management'},
      {
        id: 'survival-factors',
        title: 'Factors Affecting VF Survival',
        question: 'The most important factor for VF survival is:',
        options: [
          'Patient age and comorbidities',
          'Time from collapse to defibrillation',
          'Hospital location',
          'Medication administration'
        ],
        correctAnswer: 1,
        explanation: 'Time to defibrillation is the most critical factor for VF survival. Early defibrillation dramatically improves outcomes.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module5/lesson41/survival-factors.jpg',
        imageAlt: 'Survival curve showing rapid decline with delayed defibrillation'},
      {
        id: 'vf-mastery',
        title: 'Ventricular Fibrillation Mastered',
        content: 'You now recognize VF as the most lethal arrhythmia, showing chaotic electrical activity with no cardiac output. Remember: VF = immediate defibrillation + high-quality CPR.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module5/lesson41/vf-mastery.jpg',
        imageAlt: 'VF mastery summary emphasizing immediate recognition and defibrillation',
        audio: {
          narrationUrl: 'audio/module5/lesson41/vf-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "VF is chaotic ventricular electrical activity with no cardiac output. It requires immediate defibrillation and CPR for survival.",
    keyPoints: [
      "Chaotic, disorganized electrical activity with no identifiable complexes",
      "Immediate cardiac arrest with no pulse or blood pressure",
      "Requires immediate unsynchronized defibrillation",
      "Time to defibrillation is the most critical survival factor"
    ],
    resources: [
      {
        title: "VF Recognition and Emergency Response",
        url: "https://youtube.com/watch?v=vf_emergency_response",
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
