import { Lesson } from '@/types/learning';

export const optimizedLesson46: Lesson = {
  id: 'lesson-6-2-optimized',
  moduleId: 'module-6',
  title: "First-Degree AV Block",
  description: "Recognition and clinical management of first-degree AV block",
  order: 2,
  estimatedTime: 15,
  content: {
    type: 'mixed',
    introduction: "Learn to recognize first-degree AV block, the mildest form of AV conduction delay with consistent PR prolongation.",
    sections: [
      {
        id: 'section-overview',
        title: "First-Degree AV Block",
        content: "MILD DELAY: PR >0.20 seconds → 1:1 Conduction → Usually Benign → Monitoring Approach",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'first-degree-intro',
        title: 'First-Degree AV Block Overview',
        content: 'First-degree AV block is characterized by prolonged but consistent PR intervals >0.20 seconds (>5 small boxes). Every P wave is followed by a QRS complex, maintaining 1:1 AV conduction.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module6/lesson46/first-degree-intro.jpg',
        imageAlt: 'ECG showing first-degree AV block with prolonged PR intervals',
        audio: {
          narrationUrl: 'audio/module6/lesson46/first-degree-intro.mp3',
          autoPlay: false
        }
      },
      {
        id: 'pr-measurement',
        title: 'PR Interval Measurement',
        content: 'Measure PR interval from the beginning of the P wave to the beginning of the QRS complex. In first-degree AV block, this measurement consistently exceeds 0.20 seconds.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module6/lesson46/pr-measurement.jpg',
        imageAlt: 'Detailed PR interval measurement technique with calipers'},
      {
        id: 'recognition-criteria',
        title: 'First-Degree AV Block Recognition',
        question: 'Which criteria confirm first-degree AV block?',
        options: [
          'PR interval >0.20 sec, 1:1 conduction, regular rhythm',
          'Variable PR intervals with dropped beats',
          'No relationship between P waves and QRS',
          'PR interval <0.12 sec with wide QRS'
        ],
        correctAnswer: 0,
        explanation: 'First-degree AV block requires PR interval >0.20 seconds, consistent 1:1 AV conduction, and typically regular rhythm.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module6/lesson46/recognition-criteria.jpg',
        imageAlt: 'ECG examples showing classic first-degree AV block criteria'},
      {
        id: 'causes-associations',
        title: 'Causes and Associations',
        content: 'First-degree AV block can be caused by medications (beta-blockers, calcium channel blockers, digoxin), increased vagal tone, ischemia, or structural heart disease.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module6/lesson46/causes-associations.jpg',
        imageAlt: 'Common causes and associations of first-degree AV block'},
      {
        id: 'clinical-significance',
        title: 'Clinical Significance Assessment',
        question: 'First-degree AV block in an asymptomatic patient typically requires:',
        options: [
          'Immediate pacemaker implantation',
          'Emergency cardioversion',
          'Observation and monitoring',
          'Aggressive antiarrhythmic therapy'
        ],
        correctAnswer: 2,
        explanation: 'Isolated first-degree AV block in asymptomatic patients is usually benign and requires only observation and periodic monitoring.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module6/lesson46/clinical-significance.jpg',
        imageAlt: 'Clinical significance assessment flowchart for first-degree AV block',
        audio: {
          narrationUrl: 'audio/module6/lesson46/clinical-significance.mp3',
          autoPlay: false
        }
      },
      {
        id: 'progression-risk',
        title: 'Risk of Progression',
        content: 'While most first-degree AV blocks remain stable, they may progress to higher degrees, especially in the setting of acute MI, drug toxicity, or degenerative conduction disease.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module6/lesson46/progression-risk.jpg',
        imageAlt: 'Risk factors and monitoring for progression to higher degree blocks'},
      {
        id: 'management-approach',
        title: 'Management Approach',
        question: 'The primary management of asymptomatic first-degree AV block involves:',
        options: [
          'Eliminating causative medications immediately',
          'Treating underlying causes and monitoring',
          'Prophylactic pacemaker placement',
          'High-dose atropine therapy'
        ],
        correctAnswer: 1,
        explanation: 'Management focuses on treating underlying causes, reviewing medications, and monitoring for progression rather than immediate intervention.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module6/lesson46/management-approach.jpg',
        imageAlt: 'Management algorithm for first-degree AV block'},
      {
        id: 'first-degree-mastery',
        title: 'First-Degree AV Block Mastered',
        content: 'You now can recognize first-degree AV block as prolonged but consistent PR intervals >0.20 seconds. Remember: usually benign but monitor for progression, especially with underlying heart disease.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module6/lesson46/first-degree-mastery.jpg',
        imageAlt: 'First-degree AV block mastery summary with key recognition and management points',
        audio: {
          narrationUrl: 'audio/module6/lesson46/first-degree-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "First-degree AV block shows prolonged PR intervals >0.20 seconds with 1:1 conduction. Usually benign but requires monitoring for progression.",
    keyPoints: [
      "PR interval consistently >0.20 seconds (>5 small boxes)",
      "Maintains 1:1 AV conduction (every P wave followed by QRS)",
      "Usually asymptomatic and benign",
      "Monitor for progression, especially with heart disease"
    ],
    resources: [
      {
        title: "First-Degree AV Block Recognition",
        url: "https://youtube.com/watch?v=first_degree_av_block",
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
