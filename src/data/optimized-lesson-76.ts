import { Lesson } from '@/types/learning';

export const optimizedLesson76: Lesson = {
  id: 'lesson-9-8-optimized',
  moduleId: 'module-9',
  title: "Module 9 STEMI/NSTEMI Mastery Assessment",
  description: "Final comprehensive assessment of acute coronary syndrome recognition and management",
  order: 8,
  estimatedTime: 25,
  content: {
    type: 'mixed',
    introduction: "Demonstrate mastery of STEMI and NSTEMI recognition, risk stratification, and management. This assessment tests your ability to rapidly identify ACS and implement appropriate emergency protocols.",
    sections: [
      {
        id: 'section-overview',
        title: "Module 9 Mastery Challenge",
        content: "MASTERY ASSESSMENT: STEMI Recognition → NSTEMI Patterns → Risk Stratification → Complication Detection → Emergency Management",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'mastery-introduction',
        title: 'Module 9 Mastery Assessment',
        content: 'Test your expertise in acute coronary syndrome recognition and management. Master-level skills in STEMI/NSTEMI differentiation and emergency decision-making.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module9/lesson76/mastery-introduction.jpg',
        imageAlt: 'Module 9 mastery assessment covering all ACS scenarios',
        audio: {
          narrationUrl: 'audio/module9/lesson76/mastery-introduction.mp3',
          autoPlay: false
        }
      },
      {
        id: 'stemi-emergency-recognition',
        title: 'STEMI Emergency Recognition',
        question: '65-year-old with crushing chest pain shows ST elevation 3mm in V2-V5. Priority action:',
        options: [
          'Order stress test',
          'Immediate cath lab activation',
          'Discharge home with follow-up',
          'Start medical management only'
        ],
        correctAnswer: 1,
        explanation: 'Anterior STEMI requires immediate cath lab activation for primary PCI within 90 minutes. Every minute of delay increases mortality and infarct size.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module9/lesson76/stemi-emergency-recognition.jpg',
        imageAlt: 'Anterior STEMI requiring immediate emergency intervention'},
      {
        id: 'territory-vessel-correlation',
        title: 'Territory-Vessel Correlation Mastery',
        question: 'ST elevation in II, III, aVF with ST depression in I, aVL indicates:',
        options: [
          'LAD occlusion',
          'LCX occlusion',
          'RCA occlusion with reciprocal changes',
          'Normal variant'
        ],
        correctAnswer: 2,
        explanation: 'Inferior STEMI (II, III, aVF) with reciprocal changes (I, aVL depression) indicates RCA occlusion. Check V4R for RV involvement.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module9/lesson76/territory-vessel-correlation.jpg',
        imageAlt: 'Inferior STEMI with clear reciprocal changes indicating RCA occlusion'},
      {
        id: 'nstemi-risk-stratification',
        title: 'NSTEMI Risk Stratification Excellence',
        question: 'NSTEMI with ST depression 2.5mm, troponin 15 ng/mL, ongoing chest pain. Risk level:',
        options: [
          'Low risk - outpatient management',
          'Intermediate risk - 72 hour window',
          'High risk - urgent intervention <24 hours',
          'No risk - discharge'
        ],
        correctAnswer: 2,
        explanation: 'High-risk features (ST depression >2mm, elevated troponin, ongoing symptoms) require urgent intervention within 24 hours for optimal outcomes.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module9/lesson76/nstemi-risk-stratification.jpg',
        imageAlt: 'High-risk NSTEMI requiring urgent intervention'},
      {
        id: 'stemi-mimic-differentiation',
        title: 'STEMI Mimic Differentiation',
        question: 'Concave ST elevation in multiple leads without reciprocal changes suggests:',
        options: [
          'Anterior STEMI',
          'Inferior STEMI',
          'Pericarditis',
          'NSTEMI'
        ],
        correctAnswer: 2,
        explanation: 'Pericarditis shows diffuse concave ST elevation without reciprocal changes. Unlike STEMI, affects multiple territories simultaneously.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module9/lesson76/stemi-mimic-differentiation.jpg',
        imageAlt: 'Pericarditis pattern distinguishable from true STEMI'},
      {
        id: 'complication-recognition',
        title: 'MI Complication Recognition',
        question: 'Day 3 post-inferior MI: new harsh systolic murmur, acute heart failure. Most likely:',
        options: [
          'Recurrent MI',
          'Papillary muscle rupture',
          'Pericarditis',
          'Medication side effect'
        ],
        correctAnswer: 1,
        explanation: 'New harsh murmur with acute heart failure post-inferior MI suggests papillary muscle rupture causing acute severe MR. Surgical emergency.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module9/lesson76/complication-recognition.jpg',
        imageAlt: 'Papillary muscle rupture complication requiring urgent surgery'},
      {
        id: 'wellens-syndrome-recognition',
        title: 'Wellens Syndrome Critical Recognition',
        question: 'Deep symmetric T inversions in V2-V3 after chest pain episode indicates:',
        options: [
          'Normal recovery',
          'Wellens syndrome - critical LAD stenosis',
          'Chronic changes only',
          'Electrolyte imbalance'
        ],
        correctAnswer: 1,
        explanation: 'Wellens syndrome indicates critical LAD stenosis with high risk of extensive anterior MI. Requires urgent angiography, not stress testing.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module9/lesson76/wellens-syndrome-recognition.jpg',
        imageAlt: 'Wellens syndrome indicating critical LAD stenosis requiring urgent intervention'},
      {
        id: 'clinical-integration-mastery',
        title: 'Clinical Integration Mastery',
        question: 'Most important principle for ACS management:',
        options: [
          'Treat ECG changes only',
          'Wait for troponin results',
          'Integrate clinical presentation + ECG + risk factors + biomarkers',
          'Follow protocols rigidly without clinical judgment'
        ],
        correctAnswer: 2,
        explanation: 'Expert ACS management integrates all data: clinical presentation, ECG changes, risk factors, and biomarkers for optimal patient-centered care.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module9/lesson76/clinical-integration-mastery.jpg',
        imageAlt: 'Comprehensive clinical integration for optimal ACS management',
        audio: {
          narrationUrl: 'audio/module9/lesson76/clinical-integration-mastery.mp3',
          autoPlay: false
        }
      },
      {
        id: 'module-9-completion',
        title: 'Module 9 Mastery Complete',
        content: 'Congratulations! You have mastered STEMI and NSTEMI recognition and management. You can now rapidly identify acute coronary syndromes and implement life-saving emergency protocols.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module9/lesson76/module-9-completion.jpg',
        imageAlt: 'Module 9 completion celebrating ACS mastery achievement'},
      {
        id: 'acs-mastery-achievement',
        title: 'ACS Recognition and Management Mastery',
        content: 'You now possess expert-level skills in acute coronary syndrome recognition, risk stratification, and emergency management. These critical skills save lives in clinical practice.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module9/lesson76/acs-mastery-achievement.jpg',
        imageAlt: 'ACS mastery achievement with life-saving clinical skills',
        audio: {
          narrationUrl: 'audio/module9/lesson76/acs-mastery-achievement.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "Module 9 mastery assessment demonstrates comprehensive ACS expertise including emergency STEMI recognition, NSTEMI risk stratification, complication detection, and integrated clinical management.",
    keyPoints: [
      "STEMI requires immediate intervention within 90 minutes",
      "Risk stratification guides NSTEMI treatment timing",
      "STEMI mimics require careful differentiation",
      "Complication recognition enables rapid intervention"
    ],
    resources: [
      {
        title: "Module 9 ACS Review Summary",
        url: "https://youtube.com/watch?v=module9_acs_review",
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
