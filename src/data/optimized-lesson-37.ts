import { Lesson } from '@/types/learning';

export const optimizedLesson37: Lesson = {
  id: 'lesson-5-1-optimized',
  moduleId: 'module-5',
  title: "Ventricular Rhythm Basics",
  description: "Understanding ventricular pacemakers and basic ventricular rhythms",
  order: 1,
  estimatedTime: 15,
  content: {
    type: 'mixed',
    introduction: "Master the fundamentals of ventricular rhythms, including the ventricular conduction system and basic recognition patterns.",
    sections: [
      {
        id: 'section-overview',
        title: "Ventricular Rhythm Foundation",
        content: "CORE CONCEPTS: Ventricular Pacemakers → Wide QRS Recognition → Rate Classifications → Clinical Significance",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'ventricular-intro',
        title: 'Ventricular Rhythm Fundamentals',
        content: 'Ventricular rhythms originate below the AV junction in the ventricles. They are characterized by wide QRS complexes (>120ms) and typically represent backup pacemaker activity when higher sites fail.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module5/lesson37/ventricular-intro.jpg',
        imageAlt: 'Ventricular conduction system anatomy and pacemaker hierarchy',
        audio: {
          narrationUrl: 'audio/module5/lesson37/ventricular-intro.mp3',
          autoPlay: false
        }
      },
      {
        id: 'ventricular-anatomy',
        title: 'Ventricular Conduction System',
        content: 'The ventricular conduction system includes the bundle of His, bundle branches, and Purkinje fibers. When these areas act as pacemakers, they produce wide QRS complexes due to slower cell-to-cell conduction.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module5/lesson37/ventricular-anatomy.jpg',
        imageAlt: 'Detailed ventricular conduction system with bundle branches and Purkinje network',
        audio: {
          narrationUrl: 'audio/module5/lesson37/ventricular-anatomy.mp3',
          autoPlay: false
        }
      },
      {
        id: 'wide-qrs-recognition',
        title: 'Wide QRS Complex Recognition',
        question: 'What QRS duration defines a wide complex rhythm?',
        options: [
          'Greater than 100 milliseconds',
          'Greater than 120 milliseconds',
          'Greater than 140 milliseconds',
          'Greater than 160 milliseconds'
        ],
        correctAnswer: 1,
        explanation: 'A QRS duration >120 milliseconds (3 small boxes) is considered wide and suggests ventricular origin or aberrant conduction.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module5/lesson37/wide-qrs-recognition.jpg',
        imageAlt: 'QRS width measurement examples showing normal vs wide complexes'},
      {
        id: 'ventricular-rates',
        title: 'Ventricular Rate Classifications',
        content: 'Ventricular rhythms are classified by rate: Escape (20-40 bpm), Accelerated (50-100 bpm), and Tachycardia (>100 bpm). Each category has different clinical implications and urgency levels.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module5/lesson37/ventricular-rates.jpg',
        imageAlt: 'Rate classification chart for ventricular rhythms with clinical implications'},
      {
        id: 'pacemaker-hierarchy',
        title: 'Cardiac Pacemaker Hierarchy',
        question: 'In the normal pacemaker hierarchy, ventricular pacemakers fire at what rate?',
        options: [
          '60-100 beats per minute',
          '40-60 beats per minute',
          '20-40 beats per minute',
          '10-20 beats per minute'
        ],
        correctAnswer: 2,
        explanation: 'Ventricular pacemakers are the lowest in the hierarchy, typically firing at 20-40 bpm as a last resort to maintain cardiac output.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module5/lesson37/pacemaker-hierarchy.jpg',
        imageAlt: 'Complete cardiac pacemaker hierarchy from SA node to ventricular pacemakers'},
      {
        id: 'clinical-significance',
        title: 'Clinical Significance of Ventricular Rhythms',
        content: 'Ventricular rhythms often indicate serious underlying pathology. They may be life-saving escape rhythms or life-threatening tachyarrhythmias requiring immediate intervention.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module5/lesson37/clinical-significance.jpg',
        imageAlt: 'Clinical spectrum from protective escape rhythms to dangerous tachyarrhythmias',
        audio: {
          narrationUrl: 'audio/module5/lesson37/clinical-significance.mp3',
          autoPlay: false
        }
      },
      {
        id: 'recognition-keys',
        title: 'Key Recognition Features',
        question: 'Which feature is most characteristic of ventricular rhythms?',
        options: [
          'Fast heart rate',
          'Wide QRS complexes',
          'Absent P waves',
          'Irregular rhythm'
        ],
        correctAnswer: 1,
        explanation: 'Wide QRS complexes (>120ms) are the hallmark of ventricular rhythms, reflecting slower ventricular depolarization.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module5/lesson37/recognition-keys.jpg',
        imageAlt: 'Key ECG features highlighting wide QRS complexes in ventricular rhythms'},
      {
        id: 'module5-foundation',
        title: 'Module 5 Foundation Complete',
        content: 'You now understand the basics of ventricular rhythms. Next, we will explore specific ventricular rhythm types, starting with life-saving escape rhythms and progressing to emergency arrhythmias.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module5/lesson37/module5-foundation.jpg',
        imageAlt: 'Module 5 foundation complete with pathway to advanced ventricular rhythm recognition'}
    ],
    summary: "Ventricular rhythms are characterized by wide QRS complexes and originate from the ventricles. They range from protective escape rhythms to life-threatening emergencies.",
    keyPoints: [
      "Ventricular rhythms have wide QRS complexes (>120ms)",
      "Rate classifications: Escape (20-40), Accelerated (50-100), Tachycardia (>100)",
      "Represent backup pacemaker activity when higher sites fail",
      "Clinical significance ranges from protective to life-threatening"
    ],
    resources: [
      {
        title: "Ventricular Conduction System",
        url: "https://youtube.com/watch?v=ventricular_conduction_basics",
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
