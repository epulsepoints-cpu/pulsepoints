import { Lesson } from '@/types/learning';

export const optimizedLesson71: Lesson = {
  id: 'lesson-9-3-optimized',
  moduleId: 'module-9',
  title: "Coronary Territory Mapping",
  description: "Master coronary artery territories and predict vessel occlusion from ECG patterns",
  order: 3,
  estimatedTime: 19,
  content: {
    type: 'mixed',
    introduction: "Learn to map ECG changes to specific coronary arteries. Understanding coronary anatomy and ECG correlation helps predict which vessel is occluded and guides intervention strategy.",
    sections: [
      {
        id: 'section-overview',
        title: "Coronary Territory Mapping",
        content: "CORONARY CORRELATION: ECG Leads → Myocardial Territory → Coronary Artery → Intervention Planning",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'coronary-anatomy',
        title: 'Coronary Artery Anatomy',
        content: 'Three major coronary systems: LAD (anterior wall), RCA (inferior wall), LCX (lateral wall). Understanding anatomy helps predict which artery is occluded from ECG patterns.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module9/lesson71/coronary-anatomy.jpg',
        imageAlt: 'Coronary artery anatomy showing LAD, RCA, and LCX territories',
        audio: {
          narrationUrl: 'audio/module9/lesson71/coronary-anatomy.mp3',
          autoPlay: false
        }
      },
      {
        id: 'lad-territory',
        title: 'LAD Territory Recognition',
        question: 'LAD occlusion typically affects which ECG leads?',
        options: [
          'II, III, aVF',
          'I, aVL, V5-V6',
          'V1-V6 (extensive anterior)',
          'aVR only'
        ],
        correctAnswer: 2,
        explanation: 'LAD supplies the anterior wall, showing changes in V1-V6. Proximal LAD affects V1-V6, mid-LAD affects V3-V4.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module9/lesson71/lad-territory.jpg',
        imageAlt: 'LAD territory showing anterior wall ECG changes',
        audio: {
          narrationUrl: 'audio/module9/lesson71/lad-territory.mp3',
          autoPlay: false
        }
      },
      {
        id: 'rca-territory',
        title: 'RCA Territory Mapping',
        content: 'RCA supplies inferior wall (II, III, aVF) and often posterior wall. RCA dominance also supplies inferior LV and may affect RV. Look for reciprocal changes in I, aVL.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module9/lesson71/rca-territory.jpg',
        imageAlt: 'RCA territory showing inferior wall changes with reciprocal depression'},
      {
        id: 'lcx-territory',
        title: 'LCX Territory Recognition',
        question: 'Isolated LCX occlusion typically shows changes in:',
        options: [
          'V1-V3',
          'II, III, aVF',
          'I, aVL, V5-V6',
          'aVR, V1'
        ],
        correctAnswer: 2,
        explanation: 'LCX supplies the lateral wall, showing changes in I, aVL, V5-V6. Often called the "silent" artery due to subtle ECG changes.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module9/lesson71/lcx-territory.jpg',
        imageAlt: 'LCX territory showing lateral wall ECG changes'},
      {
        id: 'posterior-stemi',
        title: 'Posterior STEMI Recognition',
        content: 'Posterior STEMI: Tall R waves in V1-V2, ST depression in V1-V3. True posterior leads (V7-V9) show ST elevation. Often missed without posterior leads.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module9/lesson71/posterior-stemi.jpg',
        imageAlt: 'Posterior STEMI with tall R waves and reciprocal changes'},
      {
        id: 'right-ventricular-mi',
        title: 'Right Ventricular MI',
        question: 'RV MI should be suspected when inferior STEMI shows:',
        options: [
          'ST depression in V1-V2',
          'ST elevation in V4R',
          'Normal right-sided leads',
          'Isolated inferior changes only'
        ],
        correctAnswer: 1,
        explanation: 'RV MI shows ST elevation in V4R (right-sided lead). Always check V4R with inferior STEMI as RV MI changes management.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module9/lesson71/right-ventricular-mi.jpg',
        imageAlt: 'Right ventricular MI with V4R elevation'},
      {
        id: 'multivessel-patterns',
        title: 'Multivessel Disease Patterns',
        content: 'Extensive STEMI patterns: Anterolateral (LAD + LCX), Inferolateral (RCA + LCX), Inferoposterior (RCA dominant). Multiple territory involvement indicates larger MI.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module9/lesson71/multivessel-patterns.jpg',
        imageAlt: 'Multivessel disease showing extensive territory involvement'},
      {
        id: 'territory-mastery',
        title: 'Coronary Territory Mastery',
        content: 'You can now map ECG changes to specific coronary territories and predict vessel occlusion. This guides intervention strategy and helps identify high-risk patterns.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module9/lesson71/territory-mastery.jpg',
        imageAlt: 'Coronary territory mapping mastery with intervention planning',
        audio: {
          narrationUrl: 'audio/module9/lesson71/territory-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "Coronary territory mapping correlates ECG leads with specific arteries: LAD (anterior V1-V6), RCA (inferior II,III,aVF), LCX (lateral I,aVL,V5-V6). Understanding anatomy guides intervention.",
    keyPoints: [
      "LAD occlusion affects anterior wall (V1-V6)",
      "RCA occlusion affects inferior wall (II, III, aVF)",
      "LCX occlusion affects lateral wall (I, aVL, V5-V6)",
      "Posterior and RV territories require additional leads"
    ],
    resources: [
      {
        title: "Coronary Anatomy and ECG Correlation",
        url: "https://youtube.com/watch?v=coronary_territory_mapping",
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
