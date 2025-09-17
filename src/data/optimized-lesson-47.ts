import { Lesson } from '@/types/learning';

export const optimizedLesson47: Lesson = {
  id: 'lesson-6-3-optimized',
  moduleId: 'module-6',
  title: "Second-Degree AV Block Type I (Mobitz I/Wenckebach)",
  description: "Recognition and management of progressive AV conduction delay with Wenckebach phenomenon",
  order: 3,
  estimatedTime: 18,
  content: {
    type: 'mixed',
    introduction: "Master recognition of Mobitz I AV block, characterized by progressive PR prolongation until a beat is dropped, creating the classic Wenckebach pattern.",
    sections: [
      {
        id: 'section-overview',
        title: "Mobitz I AV Block",
        content: "WENCKEBACH PATTERN: Progressive PR Prolongation → Dropped Beat → Cycle Repeats → Usually Benign",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'mobitz1-intro',
        title: 'Mobitz I AV Block (Wenckebach)',
        content: 'Mobitz I AV block shows progressive PR interval prolongation until a P wave fails to conduct, creating a dropped QRS. This creates the characteristic Wenckebach periodicity pattern.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module6/lesson47/mobitz1-intro.jpg',
        imageAlt: 'ECG showing classic Mobitz I pattern with progressive PR prolongation',
        audio: {
          narrationUrl: 'audio/module6/lesson47/mobitz1-intro.mp3',
          autoPlay: false
        }
      },
      {
        id: 'wenckebach-mechanism',
        title: 'Wenckebach Mechanism',
        content: 'The AV node becomes increasingly refractory with each impulse until it fails to conduct. After the dropped beat, the AV node recovers and the cycle repeats, creating the characteristic pattern.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module6/lesson47/wenckebach-mechanism.jpg',
        imageAlt: 'Mechanism diagram showing AV node refractory period and recovery cycle'},
      {
        id: 'pattern-recognition',
        title: 'Wenckebach Pattern Recognition',
        question: 'The hallmark of Mobitz I AV block is:',
        options: [
          'Fixed PR intervals with random dropped beats',
          'Progressive PR prolongation until a beat drops',
          'Complete dissociation of P waves and QRS',
          'Alternating long and short PR intervals'
        ],
        correctAnswer: 1,
        explanation: 'Mobitz I shows progressive PR prolongation with each beat until a P wave fails to conduct, then the pattern repeats.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module6/lesson47/pattern-recognition.jpg',
        imageAlt: 'Step-by-step demonstration of Wenckebach pattern with PR measurements'},
      {
        id: 'cycle-characteristics',
        title: 'Wenckebach Cycle Characteristics',
        content: 'Key features include: 1) Progressive PR prolongation, 2) Decreasing RR interval increments, 3) Dropped QRS after longest PR, 4) Cycle reset with shortest PR interval.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module6/lesson47/cycle-characteristics.jpg',
        imageAlt: 'Detailed Wenckebach cycle analysis showing all characteristic features'},
      {
        id: 'conduction-ratios',
        title: 'AV Conduction Ratios',
        question: 'A Wenckebach pattern with 4 P waves and 3 QRS complexes represents:',
        options: [
          '3:2 AV conduction',
          '4:3 AV conduction',
          '2:1 AV conduction',
          '1:1 AV conduction'
        ],
        correctAnswer: 1,
        explanation: '4 P waves with 3 QRS complexes indicates 4:3 AV conduction, meaning 3 out of 4 atrial impulses conduct to the ventricles.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module6/lesson47/conduction-ratios.jpg',
        imageAlt: 'Examples of different AV conduction ratios in Wenckebach patterns'},
      {
        id: 'location-significance',
        title: 'Block Location and Significance',
        content: 'Mobitz I typically occurs at the AV node level and is often benign, especially in young athletes or during sleep. It may be caused by increased vagal tone or medications.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module6/lesson47/location-significance.jpg',
        imageAlt: 'AV node location and benign vs concerning causes of Mobitz I'},
      {
        id: 'clinical-scenarios',
        title: 'Clinical Scenarios and Management',
        question: 'Asymptomatic Mobitz I in a young athlete typically requires:',
        options: [
          'Immediate pacemaker implantation',
          'Observation and follow-up',
          'Emergency atropine administration',
          'Intensive care monitoring'
        ],
        correctAnswer: 1,
        explanation: 'Asymptomatic Mobitz I in young patients is often physiologic and requires only observation and periodic follow-up.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module6/lesson47/clinical-scenarios.jpg',
        imageAlt: 'Management algorithm for Mobitz I based on symptoms and patient factors',
        audio: {
          narrationUrl: 'audio/module6/lesson47/clinical-scenarios.mp3',
          autoPlay: false
        }
      },
      {
        id: 'mobitz1-mastery',
        title: 'Mobitz I AV Block Mastered',
        content: 'You now recognize Mobitz I AV block by its characteristic Wenckebach pattern of progressive PR prolongation. Remember: usually benign, especially in young patients, but monitor for symptoms.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module6/lesson47/mobitz1-mastery.jpg',
        imageAlt: 'Mobitz I mastery summary with pattern recognition and clinical pearls',
        audio: {
          narrationUrl: 'audio/module6/lesson47/mobitz1-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "Mobitz I AV block shows progressive PR prolongation until a beat drops (Wenckebach). Usually benign but monitor for symptoms.",
    keyPoints: [
      "Progressive PR prolongation until QRS is dropped",
      "Characteristic Wenckebach periodicity pattern",
      "Usually occurs at AV node level",
      "Often benign, especially in young patients"
    ],
    resources: [
      {
        title: "Wenckebach Pattern Recognition",
        url: "https://youtube.com/watch?v=wenckebach_pattern",
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
