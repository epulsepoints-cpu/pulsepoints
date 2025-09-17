import { Lesson } from '@/types/learning';

export const optimizedLesson48: Lesson = {
  id: 'lesson-6-4-optimized',
  moduleId: 'module-6',
  title: "Second-Degree AV Block Type II (Mobitz II)",
  description: "Recognition and emergency management of Mobitz II AV block - a dangerous conduction disorder",
  order: 4,
  estimatedTime: 18,
  content: {
    type: 'mixed',
    introduction: "Learn to recognize Mobitz II AV block, a dangerous form of second-degree block with unpredictable dropped beats and high risk of progression to complete block.",
    sections: [
      {
        id: 'section-overview',
        title: "Mobitz II AV Block",
        content: "DANGEROUS BLOCK: Fixed PR Intervals → Sudden Dropped Beats → Wide QRS → High Risk Progression",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'mobitz2-intro',
        title: 'Mobitz II AV Block - High Risk',
        content: 'Mobitz II AV block shows sudden dropped QRS complexes with fixed PR intervals. Unlike Mobitz I, there is no progressive PR prolongation, making it unpredictable and dangerous.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module6/lesson48/mobitz2-intro.jpg',
        imageAlt: 'ECG showing Mobitz II with sudden dropped beats and fixed PR intervals',
        audio: {
          narrationUrl: 'audio/module6/lesson48/mobitz2-intro.mp3',
          autoPlay: false
        }
      },
      {
        id: 'fixed-pr-pattern',
        title: 'Fixed PR Interval Pattern',
        content: 'In Mobitz II, conducted beats have identical, fixed PR intervals. Dropped beats occur suddenly without warning, unlike the progressive prolongation seen in Mobitz I.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module6/lesson48/fixed-pr-pattern.jpg',
        imageAlt: 'Comparison showing fixed PR intervals in Mobitz II vs progressive in Mobitz I'},
      {
        id: 'mobitz2-recognition',
        title: 'Mobitz II Recognition Criteria',
        question: 'Which pattern confirms Mobitz II AV block?',
        options: [
          'Progressive PR prolongation before dropped beats',
          'Fixed PR intervals with sudden dropped QRS',
          'Variable PR intervals with regular QRS',
          'Complete AV dissociation'
        ],
        correctAnswer: 1,
        explanation: 'Mobitz II is characterized by fixed, constant PR intervals with sudden, unpredictable dropped QRS complexes.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module6/lesson48/mobitz2-recognition.jpg',
        imageAlt: 'ECG examples clearly showing Mobitz II recognition criteria'},
      {
        id: 'qrs-width-significance',
        title: 'QRS Width Significance',
        content: 'Mobitz II often presents with wide QRS complexes, indicating infranodal block location. This makes it more dangerous than Mobitz I, which typically has narrow QRS complexes.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module6/lesson48/qrs-width-significance.jpg',
        imageAlt: 'Block location diagram showing infranodal block with wide QRS escape'},
      {
        id: 'progression-risk',
        title: 'High Risk of Progression',
        question: 'Mobitz II AV block carries high risk for:',
        options: [
          'Spontaneous resolution',
          'Progression to complete heart block',
          'Conversion to atrial fibrillation',
          'Development of ventricular tachycardia'
        ],
        correctAnswer: 1,
        explanation: 'Mobitz II has a high risk of sudden progression to complete (third-degree) AV block, which can cause hemodynamic collapse.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module6/lesson48/progression-risk.jpg',
        imageAlt: 'Risk diagram showing progression from Mobitz II to complete block'},
      {
        id: 'clinical-presentation',
        title: 'Clinical Presentation',
        content: 'Patients may experience syncope, presyncope, fatigue, or sudden cardiac arrest due to unpredictable dropped beats. Symptoms often occur without warning.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module6/lesson48/clinical-presentation.jpg',
        imageAlt: 'Clinical presentation spectrum from asymptomatic to sudden cardiac arrest',
        audio: {
          narrationUrl: 'audio/module6/lesson48/clinical-presentation.mp3',
          autoPlay: false
        }
      },
      {
        id: 'emergency-management',
        title: 'Emergency Management',
        question: 'The primary treatment for Mobitz II AV block is:',
        options: [
          'Observation and monitoring only',
          'Medications to improve conduction',
          'Pacemaker implantation',
          'Cardioversion'
        ],
        correctAnswer: 2,
        explanation: 'Mobitz II requires pacemaker implantation due to the high risk of progression to complete block and sudden cardiac death.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module6/lesson48/emergency-management.jpg',
        imageAlt: 'Emergency management algorithm emphasizing urgent pacing for Mobitz II'},
      {
        id: 'mobitz2-mastery',
        title: 'Mobitz II AV Block Mastered',
        content: 'You now recognize Mobitz II as fixed PR intervals with sudden dropped beats. Remember: this is a dangerous rhythm requiring urgent pacemaker evaluation due to high progression risk.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module6/lesson48/mobitz2-mastery.jpg',
        imageAlt: 'Mobitz II mastery emphasizing danger and urgent pacing requirement',
        audio: {
          narrationUrl: 'audio/module6/lesson48/mobitz2-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "Mobitz II AV block shows fixed PR intervals with sudden dropped beats. It is dangerous and requires urgent pacemaker evaluation.",
    keyPoints: [
      "Fixed, constant PR intervals with sudden dropped QRS",
      "Often associated with wide QRS complexes",
      "High risk of progression to complete heart block",
      "Requires urgent pacemaker evaluation and implantation"
    ],
    resources: [
      {
        title: "Mobitz II Emergency Management",
        url: "https://youtube.com/watch?v=mobitz2_emergency",
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
