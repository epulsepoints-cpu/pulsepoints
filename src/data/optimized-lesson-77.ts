import { Lesson } from '@/types/learning';

export const optimizedLesson77: Lesson = {
  id: 'lesson-10-1-optimized',
  moduleId: 'module-10',
  title: "De Winter T Waves & STEMI Equivalents",
  description: "Master recognition of De Winter pattern and other STEMI equivalents that require immediate intervention",
  order: 1,
  estimatedTime: 18,
  content: {
    type: 'mixed',
    introduction: "Learn to recognize De Winter T waves and other STEMI equivalents that don't show classic ST elevation but require immediate cath lab activation. These subtle patterns can be easily missed but are equally urgent.",
    sections: [
      {
        id: 'section-overview',
        title: "STEMI Equivalents",
        content: "CRITICAL RECOGNITION: De Winter Pattern → STEMI Equivalents → Hyperacute Changes → Emergency Activation → Life-Saving Intervention",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'dewinter-introduction',
        title: 'De Winter T Waves: Hidden STEMI',
        content: 'De Winter pattern represents acute LAD occlusion without classic ST elevation. Shows upsloping ST depression + tall symmetric T waves in V1-V6. Requires immediate cath lab activation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module10/lesson77/dewinter-introduction.jpg',
        imageAlt: 'De Winter pattern showing characteristic upsloping ST depression',
        audio: {
          narrationUrl: 'audio/module10/lesson77/dewinter-introduction.mp3',
          autoPlay: false
        }
      },
      {
        id: 'dewinter-criteria',
        title: 'De Winter Pattern Recognition Criteria',
        question: 'De Winter pattern shows:',
        options: [
          'Classic ST elevation in V2-V5',
          'Upsloping ST depression with tall T waves in V1-V6',
          'Deep Q waves in anterior leads',
          'Normal ECG pattern'
        ],
        correctAnswer: 1,
        explanation: 'De Winter: upsloping ST depression at J-point + tall, symmetric, peaked T waves in precordial leads. Often shows subtle ST elevation in aVR.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module10/lesson77/dewinter-criteria.jpg',
        imageAlt: 'Classic De Winter pattern with diagnostic criteria highlighted'},
      {
        id: 'hyperacute-t-waves',
        title: 'Hyperacute T Waves Recognition',
        content: 'Hyperacute T waves: earliest sign of STEMI, appear minutes after occlusion. Tall, broad, peaked T waves before ST elevation develops. Easily missed but require emergency intervention.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module10/lesson77/hyperacute-t-waves.jpg',
        imageAlt: 'Hyperacute T waves in early phase of STEMI'},
      {
        id: 'posterior-stemi-equivalent',
        title: 'Posterior STEMI Recognition',
        question: 'Isolated posterior STEMI typically shows:',
        options: [
          'ST elevation in V1-V3',
          'Tall R waves in V1-V2 with ST depression V1-V3',
          'Deep Q waves in inferior leads',
          'Normal 12-lead ECG'
        ],
        correctAnswer: 1,
        explanation: 'Posterior STEMI: tall R waves V1-V2 (reciprocal of posterior Q waves), ST depression V1-V3 (reciprocal of posterior ST elevation). Get V7-V9!',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module10/lesson77/posterior-stemi-equivalent.jpg',
        imageAlt: 'Posterior STEMI with reciprocal changes in anterior leads'},
      {
        id: 'sgarbossa-criteria',
        title: 'STEMI in Left Bundle Branch Block',
        content: 'Sgarbossa criteria identify STEMI with LBBB: 1) Concordant ST elevation ≥1mm, 2) Concordant ST depression ≥1mm in V1-V3, 3) Discordant ST elevation ≥5mm.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module10/lesson77/sgarbossa-criteria.jpg',
        imageAlt: 'Sgarbossa criteria for STEMI recognition in LBBB'},
      {
        id: 'aVR-elevation',
        title: 'aVR ST Elevation Significance',
        question: 'Isolated ST elevation in aVR with widespread ST depression suggests:',
        options: [
          'Benign early repolarization',
          'Left main or three-vessel disease',
          'Normal variant',
          'Posterior STEMI only'
        ],
        correctAnswer: 1,
        explanation: 'aVR ST elevation + widespread ST depression indicates left main or severe three-vessel disease. Extremely high-risk pattern requiring emergency intervention.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module10/lesson77/aVR-elevation.jpg',
        imageAlt: 'aVR elevation indicating left main coronary disease'},
      {
        id: 'clinical-correlation',
        title: 'Clinical Correlation Critical',
        content: 'STEMI equivalents require clinical correlation: acute chest pain + ECG changes = emergency. Don\'t wait for "classic" ST elevation. Trust the pattern + symptoms combination.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module10/lesson77/clinical-correlation.jpg',
        imageAlt: 'Clinical correlation importance for STEMI equivalent recognition',
        audio: {
          narrationUrl: 'audio/module10/lesson77/clinical-correlation.mp3',
          autoPlay: false
        }
      },
      {
        id: 'stemi-equivalents-mastery',
        title: 'STEMI Equivalents Mastery',
        content: 'You can now recognize subtle STEMI patterns that don\'t show classic ST elevation. These advanced skills prevent missed diagnoses and save lives through early recognition.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module10/lesson77/stemi-equivalents-mastery.jpg',
        imageAlt: 'STEMI equivalents mastery with advanced pattern recognition',
        audio: {
          narrationUrl: 'audio/module10/lesson77/stemi-equivalents-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "STEMI equivalents include De Winter pattern, hyperacute T waves, posterior STEMI, and Sgarbossa criteria in LBBB. These require immediate cath lab activation despite lacking classic ST elevation.",
    keyPoints: [
      "De Winter pattern = upsloping ST depression + tall T waves",
      "Hyperacute T waves are earliest STEMI sign",
      "Posterior STEMI shows reciprocal changes anteriorly",
      "Clinical correlation essential for STEMI equivalents"
    ],
    resources: [
      {
        title: "STEMI Equivalents Recognition",
        url: "https://youtube.com/watch?v=stemi_equivalents",
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
