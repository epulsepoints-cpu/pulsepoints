import { Lesson } from '@/types/learning';

export const optimizedLesson69: Lesson = {
  id: 'lesson-9-1-optimized',
  moduleId: 'module-9',
  title: "STEMI Recognition Fundamentals",
  description: "Master the critical recognition of ST-elevation myocardial infarction patterns",
  order: 1,
  estimatedTime: 18,
  content: {
    type: 'mixed',
    introduction: "Learn to rapidly identify STEMI patterns on ECG. STEMI recognition is a medical emergency requiring immediate intervention within 90 minutes for optimal outcomes.",
    sections: [
      {
        id: 'section-overview',
        title: "STEMI Recognition",
        content: "EMERGENCY RECOGNITION: ST Elevation → Territory Identification → Door-to-Balloon Time → Life-Saving Intervention",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'stemi-introduction',
        title: 'STEMI: Medical Emergency',
        content: 'ST-elevation myocardial infarction represents complete coronary artery occlusion. Immediate recognition and treatment within 90 minutes dramatically improves survival and reduces heart damage.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module9/lesson69/stemi-introduction.jpg',
        imageAlt: 'STEMI emergency timeline showing critical 90-minute window',
        audio: {
          narrationUrl: 'audio/module9/lesson69/stemi-introduction.mp3',
          autoPlay: false
        }
      },
      {
        id: 'st-elevation-criteria',
        title: 'ST Elevation Diagnostic Criteria',
        question: 'STEMI criteria for limb leads:',
        options: [
          'ST elevation ≥0.5mm in 2 contiguous leads',
          'ST elevation ≥1mm in 2 contiguous leads',
          'ST elevation ≥2mm in any lead',
          'ST elevation ≥3mm in precordial leads only'
        ],
        correctAnswer: 1,
        explanation: 'STEMI requires ≥1mm ST elevation in 2 contiguous limb leads OR ≥2mm in 2 contiguous precordial leads.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module9/lesson69/st-elevation-criteria.jpg',
        imageAlt: 'Clear ST elevation meeting STEMI criteria in multiple leads',
        audio: {
          narrationUrl: 'audio/module9/lesson69/st-elevation-criteria.mp3',
          autoPlay: false
        }
      },
      {
        id: 'anterior-stemi',
        title: 'Anterior STEMI Recognition',
        content: 'Anterior STEMI: ST elevation in V1-V6 (extensive anterior) or V3-V4 (limited anterior). LAD artery occlusion. Often the largest area of myocardium at risk.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module9/lesson69/anterior-stemi.jpg',
        imageAlt: 'Anterior STEMI pattern showing ST elevation in precordial leads'},
      {
        id: 'inferior-stemi',
        title: 'Inferior STEMI Pattern',
        question: 'Inferior STEMI shows ST elevation in which leads?',
        options: [
          'I, aVL, V5-V6',
          'II, III, aVF',
          'V1-V3',
          'aVR, aVL only'
        ],
        correctAnswer: 1,
        explanation: 'Inferior STEMI shows ST elevation in leads II, III, aVF (inferior wall) due to RCA or LCX occlusion.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module9/lesson69/inferior-stemi.jpg',
        imageAlt: 'Inferior STEMI pattern in leads II, III, aVF'},
      {
        id: 'lateral-stemi',
        title: 'Lateral STEMI Recognition',
        content: 'Lateral STEMI: ST elevation in I, aVL, V5-V6. LCX artery territory. Often occurs with inferior STEMI creating inferolateral pattern.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module9/lesson69/lateral-stemi.jpg',
        imageAlt: 'Lateral STEMI showing elevation in lateral leads'},
      {
        id: 'reciprocal-changes',
        title: 'Reciprocal Changes Recognition',
        question: 'Anterior STEMI typically shows reciprocal changes in:',
        options: [
          'V1-V2',
          'II, III, aVF',
          'I, aVL',
          'No reciprocal changes occur'
        ],
        correctAnswer: 1,
        explanation: 'Anterior STEMI often shows reciprocal ST depression in inferior leads (II, III, aVF), confirming the diagnosis.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module9/lesson69/reciprocal-changes.jpg',
        imageAlt: 'Reciprocal ST depression in inferior leads with anterior STEMI'},
      {
        id: 'time-critical-action',
        title: 'Time-Critical Emergency Action',
        content: 'STEMI Protocol: Immediate 12-lead ECG → Cardiology consult → Cath lab activation → Door-to-balloon <90 minutes. Every minute counts for myocardial salvage.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module9/lesson69/time-critical-action.jpg',
        imageAlt: 'STEMI emergency protocol timeline for rapid intervention'},
      {
        id: 'stemi-mastery',
        title: 'STEMI Recognition Mastery',
        content: 'You can now rapidly identify STEMI patterns across all territories. This life-saving skill enables immediate emergency intervention and optimal patient outcomes.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module9/lesson69/stemi-mastery.jpg',
        imageAlt: 'STEMI recognition mastery with emergency response protocols',
        audio: {
          narrationUrl: 'audio/module9/lesson69/stemi-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "STEMI recognition is critical for emergency intervention. ST elevation ≥1mm in limb leads or ≥2mm in precordial leads in 2 contiguous leads indicates complete coronary occlusion requiring immediate treatment.",
    keyPoints: [
      "STEMI = complete coronary artery occlusion",
      "Diagnostic criteria: ST elevation in 2 contiguous leads",
      "Territory recognition: anterior, inferior, lateral",
      "Emergency intervention within 90 minutes saves lives"
    ],
    resources: [
      {
        title: "STEMI Emergency Recognition",
        url: "https://youtube.com/watch?v=stemi_recognition",
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
