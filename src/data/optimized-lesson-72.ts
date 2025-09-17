import { Lesson } from '@/types/learning';

export const optimizedLesson72: Lesson = {
  id: 'lesson-9-4-optimized',
  moduleId: 'module-9',
  title: "ECG Evolution in Acute MI",
  description: "Track the temporal evolution of ECG changes from hyperacute to chronic phases",
  order: 4,
  estimatedTime: 20,
  content: {
    type: 'mixed',
    introduction: "Understand how ECG changes evolve during myocardial infarction. From hyperacute T waves to chronic Q waves, each phase provides diagnostic and prognostic information.",
    sections: [
      {
        id: 'section-overview',
        title: "MI Evolution Timeline",
        content: "ECG EVOLUTION: Hyperacute T Waves → ST Elevation → Q Wave Formation → T Wave Inversion → Chronic Changes",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'evolution-timeline',
        title: 'MI Evolution Timeline',
        content: 'MI ECG changes follow predictable sequence: Hyperacute T waves (minutes), ST elevation (hours), Q waves (hours-days), T inversion (days-weeks), chronic pattern (permanent).',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module9/lesson72/evolution-timeline.jpg',
        imageAlt: 'Complete MI evolution timeline from hyperacute to chronic phase',
        audio: {
          narrationUrl: 'audio/module9/lesson72/evolution-timeline.mp3',
          autoPlay: false
        }
      },
      {
        id: 'hyperacute-phase',
        title: 'Hyperacute T Waves',
        question: 'Hyperacute T waves appear:',
        options: [
          'Days after MI onset',
          'Weeks after MI onset',
          'Minutes to hours after MI onset',
          'Only in chronic MI'
        ],
        correctAnswer: 2,
        explanation: 'Hyperacute T waves are the earliest ECG sign, appearing within minutes to hours. They are tall, peaked, and broader than normal T waves.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module9/lesson72/hyperacute-phase.jpg',
        imageAlt: 'Hyperacute T waves in early MI phase',
        audio: {
          narrationUrl: 'audio/module9/lesson72/hyperacute-phase.mp3',
          autoPlay: false
        }
      },
      {
        id: 'st-elevation-phase',
        title: 'ST Elevation Phase',
        content: 'ST elevation develops hours after onset, representing transmural ischemia. Classic "tombstone" appearance indicates large territory involvement requiring immediate intervention.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module9/lesson72/st-elevation-phase.jpg',
        imageAlt: 'ST elevation phase showing tombstone pattern'},
      {
        id: 'q-wave-formation',
        title: 'Q Wave Formation',
        question: 'Pathological Q waves indicate:',
        options: [
          'Reversible ischemia',
          'Irreversible myocardial necrosis',
          'Electrolyte imbalance',
          'Normal variant'
        ],
        correctAnswer: 1,
        explanation: 'Pathological Q waves (≥0.04s wide, ≥25% of R wave height) indicate irreversible myocardial necrosis and tissue death.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module9/lesson72/q-wave-formation.jpg',
        imageAlt: 'Pathological Q wave formation indicating necrosis'},
      {
        id: 't-wave-inversion',
        title: 'T Wave Inversion Phase',
        content: 'T wave inversion develops days to weeks after MI, representing repolarization abnormalities in healing myocardium. Deep, symmetric inversions indicate recent large MI.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module9/lesson72/t-wave-inversion.jpg',
        imageAlt: 'Deep T wave inversions in healing phase'},
      {
        id: 'chronic-changes',
        title: 'Chronic MI Changes',
        question: 'Chronic MI typically shows:',
        options: [
          'Persistent ST elevation',
          'Q waves with normalized T waves',
          'Hyperacute T waves',
          'No ECG changes'
        ],
        correctAnswer: 1,
        explanation: 'Chronic MI shows persistent Q waves with normalized or minimally inverted T waves. ST segments return to baseline.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module9/lesson72/chronic-changes.jpg',
        imageAlt: 'Chronic MI with Q waves and normalized T waves'},
      {
        id: 'reperfusion-patterns',
        title: 'Successful Reperfusion Patterns',
        content: 'Successful reperfusion: Rapid ST resolution (>50% in 90 minutes), accelerated T wave inversion, smaller final Q waves. Indicates myocardial salvage.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module9/lesson72/reperfusion-patterns.jpg',
        imageAlt: 'Successful reperfusion with rapid ST resolution'},
      {
        id: 'evolution-mastery',
        title: 'MI Evolution Mastery',
        content: 'You understand the complete evolution of MI ECG changes. This knowledge helps determine MI age, assess reperfusion success, and predict prognosis.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module9/lesson72/evolution-mastery.jpg',
        imageAlt: 'MI evolution mastery with complete understanding of phases',
        audio: {
          narrationUrl: 'audio/module9/lesson72/evolution-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "MI ECG evolution follows predictable sequence: hyperacute T waves → ST elevation → Q waves → T inversion → chronic changes. Understanding evolution helps determine MI timing and reperfusion success.",
    keyPoints: [
      "Hyperacute T waves are earliest sign (minutes-hours)",
      "ST elevation indicates acute transmural MI",
      "Q waves represent irreversible necrosis",
      "Successful reperfusion accelerates normalization"
    ],
    resources: [
      {
        title: "MI ECG Evolution Patterns",
        url: "https://youtube.com/watch?v=mi_ecg_evolution",
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
