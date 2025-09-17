import { Lesson } from '@/types/learning';

export const optimizedLesson80: Lesson = {
  id: 'lesson-10-4-optimized',
  moduleId: 'module-10',
  title: "Long QT Syndrome & Torsades Risk",
  description: "Master long QT syndrome recognition and understand torsades de pointes prevention strategies",
  order: 4,
  estimatedTime: 19,
  content: {
    type: 'mixed',
    introduction: "Learn to recognize congenital and acquired long QT syndrome patterns and prevent torsades de pointes. Understanding QT morphology helps predict arrhythmic risk and guide treatment.",
    sections: [
      {
        id: 'section-overview',
        title: "Long QT Syndrome",
        content: "LQTS RECOGNITION: QTc Measurement → T Wave Morphology → Trigger Identification → Torsades Prevention → Genetic Testing → Family Screening",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'lqts-introduction',
        title: 'Long QT Syndrome Overview',
        content: 'LQTS: Genetic or acquired condition causing QT prolongation and torsades de pointes. Can cause syncope, seizures, or sudden death in young, healthy individuals.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module10/lesson80/lqts-introduction.jpg',
        imageAlt: 'Long QT syndrome overview with torsades risk factors',
        audio: {
          narrationUrl: 'audio/module10/lesson80/lqts-introduction.mp3',
          autoPlay: false
        }
      },
      {
        id: 'qtc-measurement',
        title: 'QTc Measurement and Criteria',
        question: 'QTc is considered prolonged when:',
        options: [
          'QTc >400ms in all patients',
          'QTc >440ms (men) or >460ms (women)',
          'QTc >500ms only',
          'QT interval regardless of heart rate'
        ],
        correctAnswer: 1,
        explanation: 'QTc prolonged: >440ms (men), >460ms (women). QTc >500ms indicates high torsades risk. Use Bazett formula: QTc = QT/√RR interval.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module10/lesson80/qtc-measurement.jpg',
        imageAlt: 'QTc measurement technique and normal vs prolonged values',
        audio: {
          narrationUrl: 'audio/module10/lesson80/qtc-measurement.mp3',
          autoPlay: false
        }
      },
      {
        id: 'lqt1-pattern',
        title: 'LQT1 T Wave Morphology',
        content: 'LQT1 (KCNQ1 mutation): Broad-based T waves with late onset. Exercise-triggered events, especially swimming. Beta-blockers highly effective. Most common LQTS subtype.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module10/lesson80/lqt1-pattern.jpg',
        imageAlt: 'LQT1 characteristic T wave morphology and triggers'},
      {
        id: 'lqt2-pattern',
        title: 'LQT2 Recognition and Triggers',
        question: 'LQT2 syndrome typically shows:',
        options: [
          'Broad-based T waves',
          'Bifid/notched T waves',
          'Normal T wave morphology',
          'Inverted T waves only'
        ],
        correctAnswer: 1,
        explanation: 'LQT2 (KCNH2/HERG mutation): Bifid, notched, or low-amplitude T waves. Triggered by acoustic stimuli (alarm clocks, phones). Second most common type.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module10/lesson80/lqt2-pattern.jpg',
        imageAlt: 'LQT2 bifid T wave pattern with acoustic triggers'},
      {
        id: 'lqt3-pattern',
        title: 'LQT3 Late T Wave Pattern',
        content: 'LQT3 (SCN5A mutation): Late-appearing, peaked T waves with long isoelectric ST segment. Bradycardia-triggered events, often during sleep. Pacing may be needed.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module10/lesson80/lqt3-pattern.jpg',
        imageAlt: 'LQT3 late T wave pattern with bradycardia triggers'},
      {
        id: 'acquired-lqts',
        title: 'Acquired Long QT Syndrome',
        question: 'Most common cause of acquired LQTS:',
        options: [
          'Genetic mutations only',
          'Medications (especially antibiotics, antiarrhythmics)',
          'Exercise alone',
          'Normal aging'
        ],
        correctAnswer: 1,
        explanation: 'Acquired LQTS: Medications (quinidine, sotalol, antibiotics), electrolyte abnormalities (hypokalemia, hypomagnesemia), structural heart disease.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module10/lesson80/acquired-lqts.jpg',
        imageAlt: 'Acquired LQTS causes and medication-induced patterns'},
      {
        id: 'torsades-prevention',
        title: 'Torsades de Pointes Prevention',
        content: 'Torsades prevention: Avoid QT-prolonging drugs, maintain K+ >4.0 and Mg2+ >2.0, avoid bradycardia, consider temporary pacing. IV magnesium aborts acute episodes.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module10/lesson80/torsades-prevention.jpg',
        imageAlt: 'Comprehensive torsades prevention strategies and protocols'},
      {
        id: 'lqts-mastery',
        title: 'Long QT Syndrome Mastery',
        content: 'You can now recognize LQTS subtypes by T wave morphology and understand trigger-specific prevention. This knowledge enables personalized treatment and sudden death prevention.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module10/lesson80/lqts-mastery.jpg',
        imageAlt: 'LQTS mastery with comprehensive risk management approach',
        audio: {
          narrationUrl: 'audio/module10/lesson80/lqts-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "LQTS causes QT prolongation and torsades risk. LQT1 (broad T waves, exercise), LQT2 (bifid T waves, acoustic), LQT3 (late T waves, sleep). Prevention focuses on trigger avoidance and electrolyte optimization.",
    keyPoints: [
      "QTc >440ms (men) or >460ms (women) is prolonged",
      "T wave morphology helps identify LQTS subtype",
      "Each LQTS subtype has specific triggers",
      "Torsades prevention requires comprehensive approach"
    ],
    resources: [
      {
        title: "Long QT Syndrome Recognition and Management",
        url: "https://youtube.com/watch?v=long_qt_syndrome",
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
