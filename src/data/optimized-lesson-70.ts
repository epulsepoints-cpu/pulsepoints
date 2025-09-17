import { Lesson } from '@/types/learning';

export const optimizedLesson70: Lesson = {
  id: 'lesson-9-2-optimized',
  moduleId: 'module-9',
  title: "NSTEMI and Unstable Angina Recognition",
  description: "Identify non-ST elevation acute coronary syndromes and risk stratification",
  order: 2,
  estimatedTime: 17,
  content: {
    type: 'mixed',
    introduction: "Master NSTEMI and unstable angina recognition. These represent partial coronary occlusion requiring urgent but not immediate intervention, with risk stratification guiding treatment timing.",
    sections: [
      {
        id: 'section-overview',
        title: "NSTEMI/Unstable Angina",
        content: "NON-STEMI ACS: ST Depression → T Wave Changes → Troponin Elevation → Risk Stratification → Urgent Intervention",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'nstemi-introduction',
        title: 'NSTEMI vs Unstable Angina',
        content: 'Non-STEMI acute coronary syndromes represent partial coronary occlusion. NSTEMI has troponin elevation, unstable angina does not. Both require urgent evaluation but not immediate cath lab.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module9/lesson70/nstemi-introduction.jpg',
        imageAlt: 'NSTEMI vs unstable angina comparison with partial vessel occlusion',
        audio: {
          narrationUrl: 'audio/module9/lesson70/nstemi-introduction.mp3',
          autoPlay: false
        }
      },
      {
        id: 'st-depression-patterns',
        title: 'ST Depression Patterns in NSTEMI',
        question: 'Horizontal or downsloping ST depression ≥0.5mm in 2 leads suggests:',
        options: [
          'Normal variant',
          'Early repolarization',
          'Acute coronary syndrome',
          'Digitalis effect'
        ],
        correctAnswer: 2,
        explanation: 'Horizontal or downsloping ST depression ≥0.5mm in 2 contiguous leads is highly suggestive of acute coronary syndrome.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module9/lesson70/st-depression-patterns.jpg',
        imageAlt: 'Horizontal ST depression pattern indicating NSTEMI',
        audio: {
          narrationUrl: 'audio/module9/lesson70/st-depression-patterns.mp3',
          autoPlay: false
        }
      },
      {
        id: 't-wave-inversions',
        title: 'T Wave Inversions in ACS',
        content: 'Deep, symmetric T wave inversions (≥2mm) suggest recent ischemia or evolving MI. Wellens syndrome shows characteristic deep T inversions in anterior leads with high LAD stenosis risk.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module9/lesson70/t-wave-inversions.jpg',
        imageAlt: 'Deep symmetric T wave inversions indicating ischemia'},
      {
        id: 'wellens-syndrome',
        title: 'Wellens Syndrome Recognition',
        question: 'Wellens syndrome Type A shows:',
        options: [
          'ST elevation in V2-V4',
          'Deep symmetric T wave inversions in V2-V3',
          'Normal ECG',
          'Q waves in anterior leads'
        ],
        correctAnswer: 1,
        explanation: 'Wellens Type A shows deep, symmetric T wave inversions in V2-V3, indicating critical LAD stenosis requiring urgent intervention.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module9/lesson70/wellens-syndrome.jpg',
        imageAlt: 'Wellens syndrome with characteristic anterior T wave inversions'},

      // 🎥 ECGkid Master Class: Wellens Syndrome - Perfect Match!
      {
        id: 'ecgkid-wellens-syndrome',
        title: '🎥 Master Class: ECG That Predicts Heart Attack Before It Happens',
        content: 'Critical ECGkid video! Learn to recognize Wellens Syndrome - the subtle but deadly ECG pattern that signals a high risk of massive heart attack. This master class covers the exact patterns you just learned, with real-world implications.',
        type: 'youtube',
        layout: 'centered',
        backgroundColor: '#991b1b',
        textColor: '#ffffff',
        animation: 'fade',
        youtubeId: 'H3sYAosz0jM',
        videoDuration: 269, // 4 minutes, 29 seconds
        minimumWatchTime: 240, // 4 minutes minimum - life-saving knowledge
        requireFullWatch: true, // Critical for prevention
        imageUrl: '/lessonimages/wellens-syndrome-pattern.png',
        imageAlt: 'ECGkid Wellens syndrome master class - predicting heart attacks',
        hint: '💡 ECGkid\'s life-saving Wellens syndrome master class!',
        highlights: [
          'Deadly pattern recognition mastery',
          'Heart attack prediction strategy',
          'Critical LAD stenosis warning signs',
          '4.5 minute life-saving masterpiece'
        ]
      },
      {
        id: 'dynamic-changes',
        title: 'Dynamic ECG Changes',
        content: 'NSTEMI/UA often shows dynamic changes: ST depression during chest pain that resolves with symptom relief. Serial ECGs help capture these transient ischemic episodes.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module9/lesson70/dynamic-changes.jpg',
        imageAlt: 'Dynamic ST changes during chest pain episodes'},
      {
        id: 'risk-stratification',
        title: 'NSTEMI Risk Stratification',
        question: 'Highest risk NSTEMI features include:',
        options: [
          'Normal troponin, no ST changes',
          'ST depression >2mm, elevated troponin, ongoing chest pain',
          'Isolated T wave flattening',
          'Single episode of chest pain, normal ECG'
        ],
        correctAnswer: 1,
        explanation: 'High-risk features: ST depression >2mm, elevated troponin, ongoing symptoms, hemodynamic instability requiring urgent intervention within 24 hours.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module9/lesson70/risk-stratification.jpg',
        imageAlt: 'High-risk NSTEMI features requiring urgent intervention'},
      {
        id: 'treatment-timing',
        title: 'NSTEMI Treatment Timing',
        content: 'NSTEMI timing: High risk <24 hours, intermediate risk 24-72 hours, low risk <72 hours. Unlike STEMI, allows time for optimization and risk assessment.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module9/lesson70/treatment-timing.jpg',
        imageAlt: 'NSTEMI treatment timeline based on risk stratification'},
      {
        id: 'nstemi-mastery',
        title: 'NSTEMI Recognition Mastery',
        content: 'You can now recognize and risk-stratify non-ST elevation ACS. Understanding these subtler patterns enables appropriate urgent care and prevents missed diagnoses.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module9/lesson70/nstemi-mastery.jpg',
        imageAlt: 'NSTEMI recognition mastery with risk stratification skills',
        audio: {
          narrationUrl: 'audio/module9/lesson70/nstemi-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "NSTEMI and unstable angina show ST depression, T wave changes, and dynamic patterns. Risk stratification determines intervention timing from urgent (24h) to subacute (72h).",
    keyPoints: [
      "ST depression ≥0.5mm suggests acute coronary syndrome",
      "Deep T wave inversions indicate recent ischemia",
      "Wellens syndrome = critical LAD stenosis",
      "Risk stratification guides treatment timing"
    ],
    resources: [
      {
        title: "NSTEMI Recognition and Management",
        url: "https://youtube.com/watch?v=nstemi_recognition",
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
