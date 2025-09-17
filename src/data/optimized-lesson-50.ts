import { Lesson } from '@/types/learning';

export const optimizedLesson50: Lesson = {
  id: 'lesson-6-6-optimized',
  moduleId: 'module-6',
  title: "Bundle Branch Blocks",
  description: "Recognition and clinical significance of right and left bundle branch blocks",
  order: 6,
  estimatedTime: 18,
  content: {
    type: 'mixed',
    introduction: "Learn to recognize bundle branch blocks and understand their impact on ventricular depolarization and clinical significance.",
    sections: [
      {
        id: 'section-overview',
        title: "Bundle Branch Blocks",
        content: "CONDUCTION DELAYS: Wide QRS → RBBB vs LBBB → Morphology Patterns → Clinical Significance",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'bbb-intro',
        title: 'Bundle Branch Block Overview',
        content: 'Bundle branch blocks occur when conduction is delayed or blocked in the right or left bundle branch, causing wide QRS complexes >120ms with characteristic morphology patterns.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module6/lesson50/bbb-intro.jpg',
        imageAlt: 'Bundle branch anatomy showing right and left bundle branch pathways',
        audio: {
          narrationUrl: 'audio/module6/lesson50/bbb-intro.mp3',
          autoPlay: false
        }
      },
      {
        id: 'conduction-mechanism',
        title: 'Altered Conduction Mechanism',
        content: 'When one bundle branch is blocked, the ventricle must depolarize through slower myocyte-to-myocyte conduction, creating wide QRS complexes with specific morphology patterns.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module6/lesson50/conduction-mechanism.jpg',
        imageAlt: 'Diagram showing normal vs blocked bundle branch conduction pathways'},
      {
        id: 'rbbb-recognition',
        title: 'Right Bundle Branch Block (RBBB)',
        question: 'RBBB is best recognized in lead V1 by:',
        options: [
          'Deep S wave only',
          'RSR\' or M-shaped pattern',
          'Deep Q wave',
          'Tall R wave only'
        ],
        correctAnswer: 1,
        explanation: 'RBBB shows RSR\' (M-shaped) pattern in V1, wide S waves in I and V6, and QRS >120ms.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/rbbb_95bpm_4.png',
        imageAlt: 'RBBB pattern showing RSR\' in V1 and wide S waves in lateral leads'},
      {
        id: 'lbbb-recognition',
        title: 'Left Bundle Branch Block (LBBB)',
        content: 'LBBB shows broad R waves in I, aVL, V5-V6 (lateral leads), deep QS or rS in V1-V3, and absent septal Q waves in lateral leads.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/lbbb_65bpm_1.png',
        imageAlt: 'LBBB pattern showing broad R waves laterally and deep QS in V1'},
      {
        id: 'morphology-memory',
        title: 'Morphology Memory Aids',
        question: 'The memory aid "WiLLiaM MaRRoW" helps remember:',
        options: [
          'AV block types',
          'Bundle branch block patterns',
          'Ventricular rhythms',
          'Atrial arrhythmias'
        ],
        correctAnswer: 1,
        explanation: 'WiLLiaM (W in V1, M in V6 = LBBB) and MaRRoW (M in V1, W in V6 = RBBB) helps remember bundle branch patterns.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module6/lesson50/morphology-memory.jpg',
        imageAlt: 'Memory aid diagram showing WiLLiaM MaRRoW patterns for BBB recognition'},
      {
        id: 'clinical-significance',
        title: 'Clinical Significance',
        content: 'RBBB may be benign or associated with congenital heart disease, PE, or RV strain. LBBB is more concerning and often indicates significant structural heart disease.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module6/lesson50/clinical-significance.jpg',
        imageAlt: 'Clinical significance comparison between RBBB and LBBB',
        audio: {
          narrationUrl: 'audio/module6/lesson50/clinical-significance.mp3',
          autoPlay: false
        }
      },
      {
        id: 'fascicular-blocks',
        title: 'Fascicular Blocks',
        question: 'Left anterior fascicular block (LAFB) is characterized by:',
        options: [
          'Right axis deviation',
          'Left axis deviation and small q in I, aVL',
          'No axis deviation',
          'Wide QRS complexes'
        ],
        correctAnswer: 1,
        explanation: 'LAFB causes left axis deviation (-45° to -90°) with small q waves in leads I and aVL.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module6/lesson50/fascicular-blocks.jpg',
        imageAlt: 'Fascicular block patterns showing axis deviations and morphology changes'},
      {
        id: 'bbb-mastery',
        title: 'Bundle Branch Block Mastery',
        content: 'You now can recognize RBBB (RSR\' in V1) and LBBB (broad R in V6, QS in V1). Remember: LBBB is more concerning and often indicates structural heart disease.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module6/lesson50/bbb-mastery.jpg',
        imageAlt: 'Bundle branch block mastery summary with recognition patterns and significance',
        audio: {
          narrationUrl: 'audio/module6/lesson50/bbb-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "Bundle branch blocks cause wide QRS complexes with specific morphology patterns. RBBB shows RSR' in V1, LBBB shows broad R in lateral leads.",
    keyPoints: [
      "QRS width >120ms with characteristic morphology patterns",
      "RBBB: RSR' pattern in V1, wide S in I and V6",
      "LBBB: Broad R in lateral leads, QS in V1",
      "LBBB more concerning than RBBB clinically"
    ],
    resources: [
      {
        title: "Bundle Branch Block Recognition",
        url: "https://youtube.com/watch?v=bundle_branch_blocks",
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
