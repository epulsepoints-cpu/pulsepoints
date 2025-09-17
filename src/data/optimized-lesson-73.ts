import { Lesson } from '@/types/learning';

export const optimizedLesson73: Lesson = {
  id: 'lesson-9-5-optimized',
  moduleId: 'module-9',
  title: "STEMI Mimics and Differential Diagnosis",
  description: "Distinguish true STEMI from conditions that can mimic ST elevation patterns",
  order: 5,
  estimatedTime: 18,
  content: {
    type: 'mixed',
    introduction: "Learn to differentiate true STEMI from STEMI mimics. Several conditions can cause ST elevation that may be mistaken for acute MI, leading to inappropriate treatment.",
    sections: [
      {
        id: 'section-overview',
        title: "STEMI Mimics",
        content: "DIFFERENTIAL DIAGNOSIS: True STEMI → Early Repolarization → Pericarditis → Brugada → Left Bundle Branch → Proper Recognition",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'stemi-mimics-intro',
        title: 'STEMI Mimics Overview',
        content: 'Several conditions mimic STEMI: Early repolarization, pericarditis, Brugada syndrome, LBBB, hyperkalemia. Distinguishing features prevent inappropriate cath lab activation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module9/lesson73/stemi-mimics-intro.jpg',
        imageAlt: 'Overview of conditions that can mimic STEMI patterns',
        audio: {
          narrationUrl: 'audio/module9/lesson73/stemi-mimics-intro.mp3',
          autoPlay: false
        }
      },
      {
        id: 'early-repolarization',
        title: 'Early Repolarization vs STEMI',
        question: 'Early repolarization typically shows:',
        options: [
          'Convex ST elevation with reciprocal changes',
          'Concave ST elevation with J-point notching',
          'Horizontal ST elevation with Q waves',
          'ST depression with T inversion'
        ],
        correctAnswer: 1,
        explanation: 'Early repolarization shows concave ST elevation with J-point notching, no reciprocal changes, and is stable over time. STEMI shows convex elevation.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module9/lesson73/early-repolarization.jpg',
        imageAlt: 'Early repolarization pattern with concave ST elevation'},
      {
        id: 'pericarditis-pattern',
        title: 'Pericarditis vs STEMI',
        content: 'Pericarditis: Diffuse concave ST elevation in multiple territories, PR depression in limb leads, no reciprocal changes. Unlike STEMI, affects all territories simultaneously.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module9/lesson73/pericarditis-pattern.jpg',
        imageAlt: 'Pericarditis showing diffuse ST elevation without reciprocal changes'},
      {
        id: 'brugada-syndrome',
        title: 'Brugada Syndrome Recognition',
        question: 'Brugada Type 1 pattern shows:',
        options: [
          'ST elevation in inferior leads',
          'Coved ST elevation in V1-V3',
          'ST depression in lateral leads',
          'Normal ECG'
        ],
        correctAnswer: 1,
        explanation: 'Brugada Type 1 shows coved ST elevation ≥2mm in V1-V3 with negative T waves. Important to recognize to avoid inappropriate intervention.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module9/lesson73/brugada-syndrome.jpg',
        imageAlt: 'Brugada Type 1 pattern with coved ST elevation in V1-V3'},
      {
        id: 'lbbb-stemi-criteria',
        title: 'STEMI in Left Bundle Branch Block',
        content: 'STEMI with LBBB: Sgarbossa criteria help identify MI. Concordant ST elevation ≥1mm in leads with positive QRS, or concordant ST depression ≥1mm in V1-V3.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/lbbb_70bpm.png',
        imageAlt: 'Sgarbossa criteria for STEMI recognition in LBBB'},
      {
        id: 'hyperkalemia-mimic',
        title: 'Hyperkalemia STEMI Mimic',
        question: 'Severe hyperkalemia can mimic STEMI by showing:',
        options: [
          'Normal ECG',
          'Peaked T waves progressing to sine wave',
          'ST depression only',
          'Isolated Q waves'
        ],
        correctAnswer: 1,
        explanation: 'Severe hyperkalemia causes peaked T waves that can progress to sine wave pattern mimicking STEMI. Check potassium level urgently.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module9/lesson73/hyperkalemia-mimic.jpg',
        imageAlt: 'Hyperkalemia sine wave pattern mimicking STEMI'},
      {
        id: 'clinical-context',
        title: 'Clinical Context Integration',
        content: 'Always integrate ECG with clinical presentation: chest pain character, timeline, risk factors, symptoms. True STEMI has acute chest pain with dynamic ECG changes.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module9/lesson73/clinical-context.jpg',
        imageAlt: 'Clinical integration for accurate STEMI vs mimic differentiation',
        audio: {
          narrationUrl: 'audio/module9/lesson73/clinical-context.mp3',
          autoPlay: false
        }
      },
      {
        id: 'differential-mastery',
        title: 'STEMI Differential Mastery',
        content: 'You can now distinguish true STEMI from mimics using morphology, distribution, clinical context, and serial changes. This prevents inappropriate interventions and ensures correct diagnosis.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module9/lesson73/differential-mastery.jpg',
        imageAlt: 'STEMI differential diagnosis mastery with accurate recognition',
        audio: {
          narrationUrl: 'audio/module9/lesson73/differential-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "STEMI mimics include early repolarization (concave, stable), pericarditis (diffuse), Brugada (V1-V3 coved), LBBB (Sgarbossa criteria), hyperkalemia. Clinical context is crucial.",
    keyPoints: [
      "Early repolarization: concave ST elevation, stable",
      "Pericarditis: diffuse elevation, no reciprocal changes",
      "Brugada: coved elevation in V1-V3",
      "Always integrate clinical presentation with ECG"
    ],
    resources: [
      {
        title: "STEMI Mimics Recognition",
        url: "https://youtube.com/watch?v=stemi_mimics",
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
