import { Lesson } from '@/types/learning';

export const optimizedLesson49: Lesson = {
  id: 'lesson-6-5-optimized',
  moduleId: 'module-6',
  title: "Third-Degree AV Block (Complete Heart Block)",
  description: "Recognition and emergency management of complete atrioventricular block",
  order: 5,
  estimatedTime: 20,
  content: {
    type: 'mixed',
    introduction: "Master recognition and emergency management of complete heart block - a life-threatening condition requiring immediate intervention.",
    sections: [
      {
        id: 'section-overview',
        title: "Complete Heart Block",
        content: "COMPLETE BLOCK: AV Dissociation → Independent Rhythms → Escape Pacemaker → Emergency Pacing",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'complete-block-intro',
        title: 'Complete Heart Block Overview',
        content: 'Third-degree (complete) AV block shows complete electrical dissociation between atria and ventricles. P waves and QRS complexes beat independently with no relationship.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module6/lesson49/complete-block-intro.jpg',
        imageAlt: 'ECG showing complete AV dissociation with independent P waves and QRS',
        audio: {
          narrationUrl: 'audio/module6/lesson49/complete-block-intro.mp3',
          autoPlay: false
        }
      },
      {
        id: 'av-dissociation',
        title: 'Complete AV Dissociation',
        content: 'In complete heart block, atrial and ventricular electrical activity are completely independent. The atrial rate is typically faster than the ventricular escape rate.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module6/lesson49/av-dissociation.jpg',
        imageAlt: 'Diagram showing independent atrial and ventricular electrical activity'},
      {
        id: 'recognition-criteria',
        title: 'Complete Block Recognition',
        question: 'Which finding confirms complete (third-degree) AV block?',
        options: [
          'Progressive PR prolongation',
          'Fixed PR intervals with dropped beats',
          'Complete independence of P waves and QRS',
          'Irregular ventricular rhythm only'
        ],
        correctAnswer: 2,
        explanation: 'Complete AV block shows total independence between P waves and QRS complexes with no consistent relationship.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module6/lesson49/recognition-criteria.jpg',
        imageAlt: 'ECG examples demonstrating complete AV dissociation recognition'},
      {
        id: 'escape-rhythms',
        title: 'Ventricular Escape Rhythms',
        content: 'The ventricular rate depends on the escape rhythm location: junctional escape (40-60 bpm, narrow QRS) or ventricular escape (20-40 bpm, wide QRS).',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module6/lesson49/escape-rhythms.jpg',
        imageAlt: 'Comparison of junctional vs ventricular escape rhythms in complete block'},
      {
        id: 'hemodynamic-effects',
        title: 'Hemodynamic Effects',
        question: 'Complete heart block with ventricular escape rhythm typically causes:',
        options: [
          'Normal cardiac output',
          'Mild exercise intolerance only',
          'Severe hemodynamic compromise',
          'Improved cardiac function'
        ],
        correctAnswer: 2,
        explanation: 'The slow ventricular escape rate (20-40 bpm) typically causes severe hemodynamic compromise and symptoms.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module6/lesson49/hemodynamic-effects.jpg',
        imageAlt: 'Hemodynamic consequences of slow escape rhythms in complete block'},
      {
        id: 'clinical-presentation',
        title: 'Clinical Presentation',
        content: 'Patients may present with syncope (Stokes-Adams attacks), heart failure, fatigue, dyspnea, chest pain, or sudden cardiac arrest depending on escape rate and duration.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module6/lesson49/clinical-presentation.jpg',
        imageAlt: 'Clinical presentation spectrum from mild symptoms to cardiac arrest',
        audio: {
          narrationUrl: 'audio/module6/lesson49/clinical-presentation.mp3',
          autoPlay: false
        }
      },
      {
        id: 'emergency-treatment',
        title: 'Emergency Treatment',
        question: 'Immediate treatment for symptomatic complete heart block includes:',
        options: [
          'Observation and monitoring',
          'Temporary pacing and permanent pacemaker',
          'Antiarrhythmic medications',
          'Cardioversion'
        ],
        correctAnswer: 1,
        explanation: 'Symptomatic complete heart block requires immediate temporary pacing followed by permanent pacemaker implantation.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module6/lesson49/emergency-treatment.jpg',
        imageAlt: 'Emergency treatment algorithm for complete heart block'},
      {
        id: 'complete-block-mastery',
        title: 'Complete Heart Block Mastered',
        content: 'You now recognize complete heart block as total AV dissociation with independent P waves and QRS complexes. Remember: this is a medical emergency requiring immediate pacing.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module6/lesson49/complete-block-mastery.jpg',
        imageAlt: 'Complete heart block mastery emphasizing emergency recognition and treatment',
        audio: {
          narrationUrl: 'audio/module6/lesson49/complete-block-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "Complete heart block shows total AV dissociation with independent atrial and ventricular rhythms. It is a medical emergency requiring immediate pacing.",
    keyPoints: [
      "Complete independence between P waves and QRS complexes",
      "Ventricular rate determined by escape rhythm (20-60 bpm)",
      "Often causes severe hemodynamic compromise",
      "Requires emergency temporary and permanent pacing"
    ],
    resources: [
      {
        title: "Complete Heart Block Emergency Management",
        url: "https://youtube.com/watch?v=complete_heart_block_emergency",
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
