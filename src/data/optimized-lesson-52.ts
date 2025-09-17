import { Lesson } from '@/types/learning';

export const optimizedLesson52: Lesson = {
  id: 'lesson-6-8-optimized',
  moduleId: 'module-6',
  title: "Complex Arrhythmia Integration & Emergency Management",
  description: "Advanced integration of multiple arrhythmias and emergency decision-making protocols",
  order: 8,
  estimatedTime: 25,
  content: {
    type: 'mixed',
    introduction: "Master complex arrhythmia scenarios where multiple rhythm disturbances coexist. Develop expert-level emergency management skills for challenging cases.",
    sections: [
      {
        id: 'section-overview',
        title: "Complex Arrhythmia Integration",
        content: "INTEGRATION MASTERY: Multiple Arrhythmias → Risk Stratification → Priority Treatment → Emergency Protocols",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'complex-intro',
        title: 'Complex Arrhythmia Scenarios',
        content: 'Real-world emergency scenarios often involve multiple rhythm disturbances. Mastering these complex cases requires systematic assessment and prioritized intervention.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module6/lesson52/complex-intro.jpg',
        imageAlt: 'Complex ECG showing multiple arrhythmias simultaneously',
        audio: {
          narrationUrl: 'audio/module6/lesson52/complex-intro.mp3',
          autoPlay: false
        }
      },
      {
        id: 'multi-arrhythmia-priority',
        title: 'Multiple Arrhythmia Prioritization',
        question: 'Patient has atrial fibrillation with rapid ventricular response AND frequent PVCs. Priority focus?',
        options: [
          'Treat PVCs first with lidocaine',
          'Control ventricular rate of AF first',
          'Electrical cardioversion immediately',
          'Observe both rhythms'
        ],
        correctAnswer: 1,
        explanation: 'Control the hemodynamically significant rhythm first. Rapid AF with rate control takes priority over isolated PVCs.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module6/lesson52/multi-arrhythmia-priority.jpg',
        imageAlt: 'ECG showing AF with RVR plus frequent PVCs with priority indicators',
        audio: {
          narrationUrl: 'audio/module6/lesson52/multi-arrhythmia-priority.mp3',
          autoPlay: false
        }
      },
      {
        id: 'hemodynamic-stability',
        title: 'Hemodynamic Assessment',
        content: 'Always assess hemodynamic stability first. Unstable patients require immediate electrical intervention regardless of specific rhythm type.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module6/lesson52/hemodynamic-stability.jpg',
        imageAlt: 'Hemodynamic assessment flowchart for arrhythmia management'},
      {
        id: 'drug-interactions',
        title: 'Antiarrhythmic Drug Interactions',
        question: 'Patient on digoxin develops new atrial flutter. Which drug requires extreme caution?',
        options: [
          'Metoprolol',
          'Diltiazem',
          'Amiodarone',
          'Adenosine'
        ],
        correctAnswer: 2,
        explanation: 'Amiodarone increases digoxin levels significantly and can cause dangerous toxicity. Monitor digoxin levels closely.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module6/lesson52/drug-interactions.jpg',
        imageAlt: 'Drug interaction matrix showing digoxin-amiodarone interaction'},
      {
        id: 'electrolyte-arrhythmias',
        title: 'Electrolyte-Induced Arrhythmias',
        content: 'Severe electrolyte imbalances can cause or worsen arrhythmias. Hypokalemia predisposes to VT, while hyperkalemia can cause severe conduction blocks.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module6/lesson52/electrolyte-arrhythmias.jpg',
        imageAlt: 'ECG changes from various electrolyte imbalances'},
      {
        id: 'emergency-algorithms',
        title: 'Emergency Algorithm Integration',
        question: 'Unstable patient with wide complex tachycardia at 220 bpm. First intervention?',
        options: [
          'Amiodarone 150mg IV',
          'Synchronized cardioversion',
          'Adenosine 6mg IV',
          'Procainamide infusion'
        ],
        correctAnswer: 1,
        explanation: 'Unstable wide complex tachycardia requires immediate synchronized cardioversion per ACLS protocols.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module6/lesson52/emergency-algorithms.jpg',
        imageAlt: 'ACLS algorithm for unstable tachycardia with cardioversion emphasis'},
      {
        id: 'post-conversion-care',
        title: 'Post-Conversion Management',
        content: 'After successful rhythm conversion, monitor for recurrence, assess underlying causes, and consider long-term antiarrhythmic therapy or interventional procedures.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module6/lesson52/post-conversion-care.jpg',
        imageAlt: 'Post-cardioversion monitoring and management protocols'},
      {
        id: 'module6-mastery',
        title: 'Module 6 Mastery Achievement',
        content: 'Congratulations! You have mastered AV blocks and complex arrhythmias. You can now handle the most challenging cardiac rhythm emergencies with confidence and expertise.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module6/lesson52/module6-mastery.jpg',
        imageAlt: 'Module 6 completion badge with complex arrhythmia mastery certification',
        audio: {
          narrationUrl: 'audio/module6/lesson52/module6-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "Complex arrhythmias require systematic assessment, hemodynamic prioritization, and integrated emergency management protocols.",
    keyPoints: [
      "Hemodynamic stability determines intervention urgency",
      "Prioritize the most hemodynamically significant rhythm",
      "Consider drug interactions and electrolyte imbalances",
      "Follow ACLS protocols for unstable rhythms"
    ],
    resources: [
      {
        title: "Complex Arrhythmia Management",
        url: "https://youtube.com/watch?v=complex_arrhythmia",
        type: "video"
      },
      {
        title: "ACLS Algorithms Update",
        url: "https://youtube.com/watch?v=acls_algorithms",
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
