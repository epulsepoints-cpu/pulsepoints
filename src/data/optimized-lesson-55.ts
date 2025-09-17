import { Lesson } from '@/types/learning';

export const optimizedLesson55: Lesson = {
  id: 'lesson-7-3-optimized',
  moduleId: 'module-7',
  title: "Unstable Tachycardia - Emergency Cardioversion",
  description: "Recognition and emergency cardioversion of hemodynamically unstable tachycardia",
  order: 3,
  estimatedTime: 18,
  content: {
    type: 'mixed',
    introduction: "Master unstable tachycardia recognition and emergency cardioversion. When tachycardia causes hemodynamic compromise, immediate electrical intervention is life-saving.",
    sections: [
      {
        id: 'section-overview',
        title: "Unstable Tachycardia Emergency",
        content: "IMMEDIATE THREAT: Tachycardia + Instability → Synchronized Cardioversion → Energy Selection → Post-Conversion Care",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'unstable-tachycardia-concept',
        title: 'Unstable Tachycardia Definition',
        content: 'Unstable tachycardia combines rapid heart rate (>150 bpm) with signs of hemodynamic compromise: hypotension, altered mental status, chest pain, or acute heart failure.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/tachycardia_155bpm_6.png',
        imageAlt: 'Unstable tachycardia with hemodynamic compromise indicators',
        audio: {
          narrationUrl: 'audio/module7/lesson55/unstable-tachycardia-concept.mp3',
          autoPlay: false
        }
      },
      {
        id: 'hemodynamic-instability',
        title: 'Hemodynamic Instability Signs',
        question: 'Which finding indicates hemodynamic instability in tachycardia?',
        options: [
          'Heart rate >120 bpm only',
          'Blood pressure 140/90 mmHg',
          'Systolic BP <90 mmHg with altered mental status',
          'Mild chest discomfort'
        ],
        correctAnswer: 2,
        explanation: 'Hypotension (SBP <90) with altered mental status indicates inadequate perfusion requiring immediate cardioversion.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module7/lesson55/hemodynamic-instability.jpg',
        imageAlt: 'Signs of hemodynamic compromise in unstable tachycardia',
        audio: {
          narrationUrl: 'audio/module7/lesson55/hemodynamic-instability.mp3',
          autoPlay: false
        }
      },
      {
        id: 'cardioversion-preparation',
        title: 'Synchronized Cardioversion Preparation',
        content: 'Ensure synchronization mode is ON, confirm sync markers on R waves, sedate if conscious, position pads anteriorly and posteriorly for optimal energy delivery.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module7/lesson55/cardioversion-preparation.jpg',
        imageAlt: 'Synchronized cardioversion setup with proper pad placement'},
      {
        id: 'energy-selection',
        title: 'Cardioversion Energy Selection',
        question: 'Initial energy for synchronized cardioversion of unstable SVT:',
        options: [
          '360 joules',
          '50-100 joules',
          '200 joules',
          '120 joules'
        ],
        correctAnswer: 1,
        explanation: 'Start with 50-100J for SVT, 100J for atrial flutter, 120-200J for atrial fibrillation. Escalate if unsuccessful.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module7/lesson55/energy-selection.jpg',
        imageAlt: 'Energy selection chart for different tachycardia types'},
      {
        id: 'wide-vs-narrow',
        title: 'Wide vs Narrow Complex Approach',
        content: 'Narrow complex: likely SVT, start low energy. Wide complex: likely VT, use higher energy (100-200J). When uncertain about wide complex, treat as VT.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module7/lesson55/wide-vs-narrow.jpg',
        imageAlt: 'Wide vs narrow complex tachycardia cardioversion approach'},
      {
        id: 'post-cardioversion',
        title: 'Post-Cardioversion Assessment',
        question: 'After successful cardioversion, priority assessment includes:',
        options: [
          'Chest X-ray only',
          'Pulse, blood pressure, rhythm, and mental status',
          'Laboratory studies first',
          'Immediate discharge planning'
        ],
        correctAnswer: 1,
        explanation: 'Immediately assess pulse, blood pressure, cardiac rhythm, and mental status to confirm successful conversion and hemodynamic stability.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module7/lesson55/post-cardioversion.jpg',
        imageAlt: 'Post-cardioversion monitoring and assessment protocol'},
      {
        id: 'recurrent-tachycardia',
        title: 'Recurrent Tachycardia Management',
        content: 'If tachycardia recurs after cardioversion, consider antiarrhythmic medications (amiodarone), treat underlying causes, and prepare for repeat cardioversion if unstable.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/tachycardia_165bpm_7.png',
        imageAlt: 'Algorithm for managing recurrent unstable tachycardia'},
      {
        id: 'cardioversion-mastery',
        title: 'Emergency Cardioversion Mastery',
        content: 'You now understand unstable tachycardia recognition and emergency cardioversion. Remember: hemodynamic instability = immediate synchronized cardioversion with appropriate energy selection.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module7/lesson55/cardioversion-mastery.jpg',
        imageAlt: 'Emergency cardioversion mastery summary with safety protocols',
        audio: {
          narrationUrl: 'audio/module7/lesson55/cardioversion-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "Unstable tachycardia with hemodynamic compromise requires immediate synchronized cardioversion with appropriate energy selection.",
    keyPoints: [
      "Unstable = tachycardia + hemodynamic compromise",
      "Immediate synchronized cardioversion for unstable patients",
      "Energy selection based on rhythm type and QRS width",
      "Monitor closely post-cardioversion for recurrence"
    ],
    resources: [
      {
        title: "Emergency Cardioversion Techniques",
        url: "https://youtube.com/watch?v=emergency_cardioversion",
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
