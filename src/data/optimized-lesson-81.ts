import { Lesson } from '@/types/learning';

export const optimizedLesson81: Lesson = {
  id: 'lesson-10-5-optimized',
  moduleId: 'module-10',
  title: "Arrhythmogenic Right Ventricular Cardiomyopathy (ARVC)",
  description: "Recognize ARVC ECG patterns and understand their implications for sudden death in athletes",
  order: 5,
  estimatedTime: 18,
  content: {
    type: 'mixed',
    introduction: "Master ARVC recognition and risk assessment. This inherited cardiomyopathy causes sudden death in young athletes and requires comprehensive evaluation using Task Force criteria.",
    sections: [
      {
        id: 'section-overview',
        title: "ARVC Recognition",
        content: "ARVC DETECTION: Epsilon Waves → T Wave Inversions → VT Morphology → Task Force Criteria → Genetic Testing → Exercise Restriction",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'arvc-introduction',
        title: 'ARVC Overview and Athletics',
        content: 'ARVC: Inherited cardiomyopathy causing fibrofatty replacement of RV myocardium. Leading cause of sudden death in young athletes. Progressive disease with exercise-induced deterioration.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module10/lesson81/arvc-introduction.jpg',
        imageAlt: 'ARVC overview showing RV structural changes and athletic risk',
        audio: {
          narrationUrl: 'audio/module10/lesson81/arvc-introduction.mp3',
          autoPlay: false
        }
      },
      {
        id: 'epsilon-waves',
        title: 'Epsilon Waves - Pathognomonic Sign',
        question: 'Epsilon waves in ARVC appear as:',
        options: [
          'Tall R waves in V1-V2',
          'Small deflections after QRS in V1-V3',
          'Deep Q waves in inferior leads',
          'ST elevation in lateral leads'
        ],
        correctAnswer: 1,
        explanation: 'Epsilon waves: Small deflections after QRS complex in V1-V3, representing delayed RV activation through fibrotic tissue. Pathognomonic for ARVC when present.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module10/lesson81/epsilon-waves.jpg',
        imageAlt: 'Epsilon waves in V1-V3 - pathognomonic ARVC sign',
        audio: {
          narrationUrl: 'audio/module10/lesson81/epsilon-waves.mp3',
          autoPlay: false
        }
      },
      {
        id: 'rv-t-wave-inversions',
        title: 'Right Ventricular T Wave Inversions',
        content: 'ARVC T wave inversions in V1-V3 (sometimes extending to V4-V6). In adults >14 years, T inversions beyond V1 are abnormal and suggest RV pathology requiring investigation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module10/lesson81/rv-t-wave-inversions.jpg',
        imageAlt: 'Right precordial T wave inversions characteristic of ARVC'},
      {
        id: 'arvc-vt-morphology',
        title: 'ARVC Ventricular Tachycardia Pattern',
        question: 'VT in ARVC typically shows:',
        options: [
          'Right bundle branch block morphology',
          'Left bundle branch block morphology',
          'Normal narrow complex',
          'Torsades de pointes pattern'
        ],
        correctAnswer: 1,
        explanation: 'ARVC VT: LBBB morphology (positive in V1) because it originates from diseased RV. Often exercise-induced and can be the presenting symptom.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module10/lesson81/arvc-vt-morphology.jpg',
        imageAlt: 'ARVC VT showing LBBB morphology from RV origin'},
      {
        id: 'task-force-criteria',
        title: 'ARVC Task Force Criteria',
        content: 'Diagnosis requires: Major + major, or major + 2 minor, or 4 minor criteria. Includes structural, histologic, ECG, arrhythmic, and genetic factors for comprehensive assessment.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module10/lesson81/task-force-criteria.jpg',
        imageAlt: 'ARVC Task Force criteria for comprehensive diagnosis'},
      {
        id: 'exercise-restriction',
        title: 'Exercise Restriction in ARVC',
        question: 'ARVC patients should avoid:',
        options: [
          'All physical activity',
          'Competitive sports and intense endurance exercise',
          'Only swimming',
          'No restrictions needed'
        ],
        correctAnswer: 1,
        explanation: 'ARVC patients must avoid competitive sports and intense endurance exercise. Exercise accelerates disease progression and increases sudden death risk. Recreational activity may be permitted.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module10/lesson81/exercise-restriction.jpg',
        imageAlt: 'Exercise restriction guidelines for ARVC patients'},
      {
        id: 'family-screening-arvc',
        title: 'ARVC Family Screening',
        content: 'All first-degree relatives need comprehensive screening: ECG, echo, MRI, exercise testing, genetic counseling. Early detection enables preventive measures and lifestyle modifications.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module10/lesson81/family-screening-arvc.jpg',
        imageAlt: 'Comprehensive ARVC family screening protocol'},
      {
        id: 'arvc-mastery',
        title: 'ARVC Recognition Mastery',
        content: 'You can now recognize ARVC patterns and understand their athletic implications. This knowledge enables early detection, appropriate restrictions, and sudden death prevention in young athletes.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module10/lesson81/arvc-mastery.jpg',
        imageAlt: 'ARVC mastery with comprehensive athletic screening approach',
        audio: {
          narrationUrl: 'audio/module10/lesson81/arvc-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "ARVC shows epsilon waves, RV T inversions, and LBBB VT. Leading cause of athletic sudden death. Diagnosis uses Task Force criteria. Requires exercise restriction and family screening.",
    keyPoints: [
      "Epsilon waves are pathognomonic for ARVC",
      "T inversions in V1-V3 suggest RV disease",
      "ARVC VT has LBBB morphology",
      "Exercise restriction essential for prevention"
    ],
    resources: [
      {
        title: "ARVC Recognition and Athletic Screening",
        url: "https://youtube.com/watch?v=arvc_recognition",
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
