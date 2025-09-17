import { Lesson } from '@/types/learning';

export const optimizedLesson82: Lesson = {
  id: 'lesson-10-6-optimized',
  moduleId: 'module-10',
  title: "Hypertrophic Cardiomyopathy ECG Patterns",
  description: "Recognize HCM ECG patterns and understand their implications for sudden death risk stratification",
  order: 6,
  estimatedTime: 19,
  content: {
    type: 'mixed',
    introduction: "Master hypertrophic cardiomyopathy ECG recognition and risk assessment. HCM patterns vary by location and can predict sudden death risk, especially in young athletes.",
    sections: [
      {
        id: 'section-overview',
        title: "HCM ECG Patterns",
        content: "HCM RECOGNITION: LVH Patterns → Giant T Inversions → Apical HCM → Risk Stratification → Genetic Testing → Sudden Death Prevention",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'hcm-introduction',
        title: 'Hypertrophic Cardiomyopathy Overview',
        content: 'HCM: Most common genetic heart disease (1:500). Asymmetric septal hypertrophy with varied ECG patterns. Leading cause of sudden death in young athletes and adolescents.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module10/lesson82/hcm-introduction.jpg',
        imageAlt: 'HCM overview showing asymmetric septal hypertrophy',
        audio: {
          narrationUrl: 'audio/module10/lesson82/hcm-introduction.mp3',
          autoPlay: false
        }
      },
      {
        id: 'hcm-lvh-patterns',
        title: 'HCM Left Ventricular Hypertrophy',
        question: 'HCM typically shows which LVH pattern:',
        options: [
          'Normal voltage criteria',
          'Extreme LVH with strain pattern',
          'Right ventricular hypertrophy',
          'No voltage changes'
        ],
        correctAnswer: 1,
        explanation: 'HCM: Extreme LVH voltage (often >35mm in limb leads) with strain pattern (ST depression, T inversion in lateral leads). Much more marked than hypertensive LVH.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module10/lesson82/hcm-lvh-patterns.jpg',
        imageAlt: 'HCM showing extreme LVH with strain pattern',
        audio: {
          narrationUrl: 'audio/module10/lesson82/hcm-lvh-patterns.mp3',
          autoPlay: false
        }
      },
      {
        id: 'giant-t-inversions',
        title: 'Giant Negative T Waves in HCM',
        content: 'Giant T inversions (>10mm) in lateral leads (I, aVL, V4-V6) are characteristic of HCM. These dramatic repolarization abnormalities reflect severe hypertrophy and fibrosis.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module10/lesson82/giant-t-inversions.jpg',
        imageAlt: 'Giant negative T waves characteristic of HCM'},
      {
        id: 'apical-hcm',
        title: 'Apical HCM Recognition',
        question: 'Apical HCM characteristically shows:',
        options: [
          'Normal ECG pattern',
          'Giant negative T waves in V4-V6',
          'ST elevation in inferior leads',
          'Right bundle branch block'
        ],
        correctAnswer: 1,
        explanation: 'Apical HCM: Giant negative T waves (>10mm) in V4-V6 with preserved R wave progression. More common in Asian populations. "Yamaguchi" pattern.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module10/lesson82/apical-hcm.jpg',
        imageAlt: 'Apical HCM with giant T inversions in V4-V6'},
      {
        id: 'hcm-q-waves',
        title: 'Pathological Q Waves in HCM',
        content: 'HCM can show pseudo-infarct Q waves in inferior and lateral leads due to septal hypertrophy, not prior MI. These Q waves help distinguish HCM from other LVH causes.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module10/lesson82/hcm-q-waves.jpg',
        imageAlt: 'Pathological Q waves in HCM mimicking prior infarction'},
      {
        id: 'hcm-risk-factors',
        title: 'HCM Sudden Death Risk Factors',
        question: 'Highest risk HCM features include:',
        options: [
          'Mild symptoms only',
          'Massive LVH >30mm, family history SCD, non-sustained VT',
          'Normal wall thickness',
          'No symptoms or family history'
        ],
        correctAnswer: 1,
        explanation: 'High-risk HCM: Massive LVH (>30mm), family history sudden death, non-sustained VT, unexplained syncope, abnormal exercise response. Requires ICD consideration.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module10/lesson82/hcm-risk-factors.jpg',
        imageAlt: 'HCM sudden death risk factors requiring ICD evaluation'},
      {
        id: 'hcm-athletic-screening',
        title: 'HCM Athletic Screening',
        content: 'Athletic screening must identify HCM early. ECG abnormalities in athletes warrant echo evaluation. HCM patients require sports restriction to prevent sudden death.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module10/lesson82/hcm-athletic-screening.jpg',
        imageAlt: 'HCM athletic screening protocol for sudden death prevention'},
      {
        id: 'hcm-mastery',
        title: 'HCM Recognition Mastery',
        content: 'You can now recognize HCM ECG patterns and assess sudden death risk. This knowledge enables early detection, appropriate restrictions, and preventive interventions in high-risk patients.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module10/lesson82/hcm-mastery.jpg',
        imageAlt: 'HCM mastery with comprehensive risk assessment approach',
        audio: {
          narrationUrl: 'audio/module10/lesson82/hcm-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "HCM shows extreme LVH with giant T inversions in lateral leads. Apical HCM has giant T inversions in V4-V6. High-risk features require ICD evaluation and sports restriction.",
    keyPoints: [
      "HCM shows extreme LVH exceeding normal criteria",
      "Giant T inversions (>10mm) are characteristic",
      "Apical HCM affects V4-V6 specifically",
      "High-risk patients need ICD and sports restriction"
    ],
    resources: [
      {
        title: "HCM Recognition and Risk Stratification",
        url: "https://youtube.com/watch?v=hcm_recognition",
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
