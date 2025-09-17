import { Lesson } from '@/types/learning';

export const optimizedLesson83: Lesson = {
  id: 'lesson-10-7-optimized',
  moduleId: 'module-10',
  title: "Takotsubo Cardiomyopathy & Stress-Induced Patterns",
  description: "Recognize takotsubo cardiomyopathy evolution and differentiate from acute coronary syndromes",
  order: 7,
  estimatedTime: 18,
  content: {
    type: 'mixed',
    introduction: "Master takotsubo cardiomyopathy recognition and understand its unique ECG evolution. This stress-induced condition mimics STEMI but has different pathophysiology and management.",
    sections: [
      {
        id: 'section-overview',
        title: "Takotsubo Cardiomyopathy",
        content: "TAKOTSUBO RECOGNITION: Stress Trigger → Hyperacute Changes → QT Prolongation → Deep T Inversions → Recovery Pattern → STEMI Differentiation",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'takotsubo-introduction',
        title: 'Takotsubo Cardiomyopathy Overview',
        content: 'Takotsubo: Stress-induced cardiomyopathy with transient LV dysfunction. "Broken heart syndrome" typically affects postmenopausal women after emotional or physical stress.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module10/lesson83/takotsubo-introduction.jpg',
        imageAlt: 'Takotsubo cardiomyopathy overview with stress triggers',
        audio: {
          narrationUrl: 'audio/module10/lesson83/takotsubo-introduction.mp3',
          autoPlay: false
        }
      },
      {
        id: 'stress-triggers',
        title: 'Takotsubo Stress Triggers',
        question: 'Common takotsubo triggers include:',
        options: [
          'Only physical stress',
          'Emotional stress (grief, shock) and physical stress (surgery, illness)',
          'Only cardiac medications',
          'Normal daily activities'
        ],
        correctAnswer: 1,
        explanation: 'Takotsubo triggers: Emotional stress (death, separation, financial loss) or physical stress (surgery, illness, catecholamine excess). Sudden catecholamine surge is key mechanism.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module10/lesson83/stress-triggers.jpg',
        imageAlt: 'Emotional and physical stress triggers for takotsubo',
        audio: {
          narrationUrl: 'audio/module10/lesson83/stress-triggers.mp3',
          autoPlay: false
        }
      },
      {
        id: 'early-ecg-changes',
        title: 'Early Takotsubo ECG Changes',
        content: 'Early phase: ST elevation (often anterior) mimicking STEMI, or hyperacute T waves. Unlike STEMI, often lacks reciprocal changes and may affect multiple territories simultaneously.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module10/lesson83/early-ecg-changes.jpg',
        imageAlt: 'Early takotsubo showing ST elevation mimicking STEMI'},
      {
        id: 'qt-prolongation-phase',
        title: 'QT Prolongation in Takotsubo',
        question: 'During takotsubo evolution, QT interval typically:',
        options: [
          'Remains normal throughout',
          'Shortens progressively',
          'Dramatically prolongs with torsades risk',
          'Shows no consistent pattern'
        ],
        correctAnswer: 2,
        explanation: 'Takotsubo: Marked QT prolongation develops (often >500ms) with high torsades risk. More pronounced than typical post-MI QT changes. Requires careful monitoring.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module10/lesson83/qt-prolongation-phase.jpg',
        imageAlt: 'Marked QT prolongation during takotsubo evolution'},
      {
        id: 'deep-t-inversions',
        title: 'Deep T Wave Inversions',
        content: 'Subacute phase: Development of very deep, symmetric T wave inversions (often >10mm) across multiple leads. Much more extensive than typical post-MI T inversions.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module10/lesson83/deep-t-inversions.jpg',
        imageAlt: 'Characteristic deep T inversions in takotsubo subacute phase'},
      {
        id: 'stemi-differentiation',
        title: 'Takotsubo vs STEMI Differentiation',
        question: 'Key differentiating feature of takotsubo:',
        options: [
          'Always shows Q waves',
          'Absence of coronary artery disease + stress trigger',
          'Never shows ST elevation',
          'Always affects inferior wall only'
        ],
        correctAnswer: 1,
        explanation: 'Takotsubo differentiation: Normal coronaries on angiography, clear stress trigger, characteristic wall motion abnormalities (apical ballooning), and complete recovery.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module10/lesson83/stemi-differentiation.jpg',
        imageAlt: 'Key differences between takotsubo and true STEMI'},
      {
        id: 'recovery-pattern',
        title: 'Takotsubo Recovery Pattern',
        content: 'Recovery: Gradual normalization over weeks to months. T waves become less inverted, QT normalizes, wall motion recovers completely. No residual Q waves unlike MI.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module10/lesson83/recovery-pattern.jpg',
        imageAlt: 'Complete ECG normalization during takotsubo recovery'},
      {
        id: 'takotsubo-mastery',
        title: 'Takotsubo Recognition Mastery',
        content: 'You can now recognize takotsubo evolution and distinguish it from STEMI. This knowledge prevents inappropriate interventions and enables appropriate stress-focused management.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module10/lesson83/takotsubo-mastery.jpg',
        imageAlt: 'Takotsubo mastery with comprehensive pattern recognition',
        audio: {
          narrationUrl: 'audio/module10/lesson83/takotsubo-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "Takotsubo shows stress-triggered ST elevation evolving to marked QT prolongation and deep T inversions. Differentiated from STEMI by normal coronaries, stress trigger, and complete recovery.",
    keyPoints: [
      "Stress-induced cardiomyopathy in postmenopausal women",
      "Marked QT prolongation with torsades risk",
      "Deep T inversions more extensive than post-MI",
      "Complete recovery distinguishes from true MI"
    ],
    resources: [
      {
        title: "Takotsubo Recognition and Management",
        url: "https://youtube.com/watch?v=takotsubo_cardiomyopathy",
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
