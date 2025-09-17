import { Lesson } from '@/types/learning';

export const optimizedLesson78: Lesson = {
  id: 'lesson-10-2-optimized',
  moduleId: 'module-10',
  title: "Wolff-Parkinson-White (WPW) Syndrome",
  description: "Master WPW pattern recognition and understand the dangerous arrhythmias it can cause",
  order: 2,
  estimatedTime: 19,
  content: {
    type: 'mixed',
    introduction: "Learn to recognize WPW syndrome and understand its life-threatening complications. WPW creates an accessory pathway that can conduct dangerously fast rates during atrial fibrillation.",
    sections: [
      {
        id: 'section-overview',
        title: "WPW Syndrome",
        content: "WPW RECOGNITION: Delta Waves → Short PR → Accessory Pathway → AF with WPW → Sudden Death Risk → Emergency Management",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'wpw-introduction',
        title: 'WPW Syndrome Overview',
        content: 'WPW syndrome involves an accessory pathway (Bundle of Kent) that bypasses the AV node, creating pre-excitation. Can cause life-threatening tachyarrhythmias, especially with atrial fibrillation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module10/lesson78/wpw-introduction.jpg',
        imageAlt: 'WPW syndrome anatomy showing accessory pathway',
        audio: {
          narrationUrl: 'audio/module10/lesson78/wpw-introduction.mp3',
          autoPlay: false
        }
      },
      {
        id: 'wpw-criteria',
        title: 'WPW Diagnostic Criteria',
        question: 'WPW syndrome diagnostic criteria include:',
        options: [
          'Long PR interval with narrow QRS',
          'Short PR (<120ms) + delta wave + wide QRS',
          'Normal PR with bundle branch block',
          'AV block with escape rhythms'
        ],
        correctAnswer: 1,
        explanation: 'WPW triad: Short PR interval (<120ms), delta wave (slurred QRS upstroke), wide QRS complex (>120ms) due to pre-excitation.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module10/lesson78/wpw-criteria.jpg',
        imageAlt: 'WPW pattern showing short PR, delta wave, and wide QRS',
        audio: {
          narrationUrl: 'audio/module10/lesson78/wpw-criteria.mp3',
          autoPlay: false
        }
      },
      {
        id: 'wpw-type-a-b',
        title: 'WPW Type A vs Type B',
        content: 'Type A WPW: Positive delta wave in V1 (left-sided pathway). Type B WPW: Negative delta wave in V1 (right-sided pathway). Location affects ablation approach.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module10/lesson78/wpw-type-a-b.jpg',
        imageAlt: 'WPW Type A and Type B patterns showing delta wave polarity'},
      {
        id: 'wpw-with-af',
        title: 'WPW with Atrial Fibrillation - Emergency!',
        question: 'WPW with atrial fibrillation shows:',
        options: [
          'Regular narrow complex tachycardia',
          'Irregular wide complex tachycardia with varying QRS width',
          'Normal sinus rhythm',
          'Complete heart block'
        ],
        correctAnswer: 1,
        explanation: 'WPW + AF: Irregular wide complex tachycardia with varying QRS morphology. Can exceed 300 bpm and degenerate to VF. NEVER give AV nodal blockers!',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module10/lesson78/wpw-with-af.jpg',
        imageAlt: 'Dangerous WPW with AF showing irregular wide complex tachycardia'},
      {
        id: 'avrt-orthodromic',
        title: 'Orthodromic AVRT in WPW',
        content: 'Orthodromic AVRT: Regular narrow complex tachycardia using AV node antegrade, accessory pathway retrograde. Most common WPW tachycardia. Responds to vagal maneuvers/adenosine.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module10/lesson78/avrt-orthodromic.jpg',
        imageAlt: 'Orthodromic AVRT showing narrow complex tachycardia'},
      {
        id: 'avrt-antidromic',
        title: 'Antidromic AVRT Recognition',
        question: 'Antidromic AVRT in WPW shows:',
        options: [
          'Narrow complex tachycardia',
          'Regular wide complex tachycardia',
          'Atrial fibrillation pattern',
          'Normal sinus rhythm'
        ],
        correctAnswer: 1,
        explanation: 'Antidromic AVRT: Regular wide complex tachycardia using accessory pathway antegrade, AV node retrograde. Less common but can be confused with VT.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module10/lesson78/avrt-antidromic.jpg',
        imageAlt: 'Antidromic AVRT showing regular wide complex tachycardia'},
      {
        id: 'wpw-treatment-contraindications',
        title: 'WPW Treatment Contraindications',
        content: 'NEVER use in WPW + AF: Digoxin, verapamil, diltiazem, beta-blockers. These block AV node, forcing conduction down accessory pathway → faster rates → VF. Use procainamide or cardioversion.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module10/lesson78/wpw-treatment-contraindications.jpg',
        imageAlt: 'WPW treatment contraindications and safe medications'},
      {
        id: 'wpw-mastery',
        title: 'WPW Syndrome Mastery',
        content: 'You can now recognize WPW patterns and understand their dangerous complications. This knowledge prevents inappropriate treatment and enables life-saving emergency management.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module10/lesson78/wpw-mastery.jpg',
        imageAlt: 'WPW syndrome mastery with comprehensive understanding',
        audio: {
          narrationUrl: 'audio/module10/lesson78/wpw-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "WPW syndrome shows short PR, delta waves, and wide QRS. Life-threatening when combined with AF. Never use AV nodal blockers in WPW + AF - use procainamide or cardioversion.",
    keyPoints: [
      "WPW triad: short PR + delta wave + wide QRS",
      "WPW + AF can cause sudden cardiac death",
      "Never use AV nodal blockers in WPW + AF",
      "Orthodromic AVRT is narrow, antidromic is wide"
    ],
    resources: [
      {
        title: "WPW Syndrome Recognition and Management",
        url: "https://youtube.com/watch?v=wpw_syndrome",
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
