import { Lesson } from '@/types/learning';

export const optimizedLesson39: Lesson = {
  id: 'lesson-5-3-optimized',
  moduleId: 'module-5',
  title: "Accelerated Idioventricular Rhythm (AIVR)",
  description: "Enhanced ventricular automaticity and accelerated idioventricular rhythm recognition",
  order: 3,
  estimatedTime: 15,
  content: {
    type: 'mixed',
    introduction: "Master recognition of accelerated idioventricular rhythm (AIVR), an enhanced ventricular pacemaker that competes with sinus rhythm.",
    sections: [
      {
        id: 'section-overview',
        title: "AIVR Recognition",
        content: "ENHANCED AUTOMATICITY: Rate 50-100 → Wide QRS → Competition → Clinical Benign",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'aivr-intro',
        title: 'Accelerated Idioventricular Rhythm',
        content: 'AIVR occurs when ventricular pacemaker cells fire faster than their normal escape rate (50-100 bpm instead of 20-40 bpm). This enhanced automaticity often competes with sinus rhythm.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module5/lesson39/aivr-intro.jpg',
        imageAlt: 'AIVR ECG showing accelerated ventricular rhythm competing with sinus',
        audio: {
          narrationUrl: 'audio/module5/lesson39/aivr-intro.mp3',
          autoPlay: false
        }
      },
      {
        id: 'enhanced-automaticity',
        title: 'Enhanced Automaticity Mechanism',
        content: 'Enhanced automaticity increases the firing rate of ventricular pacemaker cells. This can result from ischemia, reperfusion, electrolyte imbalances, or increased sympathetic tone.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module5/lesson39/enhanced-automaticity.jpg',
        imageAlt: 'Cellular mechanism showing enhanced automaticity in ventricular cells'},
      {
        id: 'aivr-characteristics',
        title: 'AIVR Characteristics',
        question: 'Which rate range defines accelerated idioventricular rhythm?',
        options: [
          '20-40 beats per minute',
          '50-100 beats per minute',
          '100-150 beats per minute',
          '150-250 beats per minute'
        ],
        correctAnswer: 1,
        explanation: 'AIVR is defined by a ventricular rate of 50-100 bpm, faster than escape (20-40) but slower than VT (>100).',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module5/lesson39/aivr-characteristics.jpg',
        imageAlt: 'ECG strip showing AIVR rate characteristics between 50-100 bpm'},
      {
        id: 'fusion-capture',
        title: 'Fusion and Capture Beats',
        content: 'When AIVR competes with sinus rhythm, you may see fusion beats (hybrid complexes) and capture beats (normal narrow complexes). These features help confirm the diagnosis.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module5/lesson39/fusion-capture.jpg',
        imageAlt: 'ECG showing fusion beats and capture beats during AIVR'},
      {
        id: 'clinical-associations',
        title: 'Clinical Associations of AIVR',
        question: 'AIVR is most commonly associated with:',
        options: [
          'Normal healthy hearts',
          'Myocardial infarction and reperfusion',
          'Atrial fibrillation',
          'Hyperthyroidism'
        ],
        correctAnswer: 1,
        explanation: 'AIVR is commonly seen during acute MI and reperfusion therapy, often indicating successful restoration of blood flow.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module5/lesson39/clinical-associations.jpg',
        imageAlt: 'Clinical scenarios showing AIVR in acute MI and reperfusion settings',
        audio: {
          narrationUrl: 'audio/module5/lesson39/clinical-associations.mp3',
          autoPlay: false
        }
      },
      {
        id: 'hemodynamic-tolerance',
        title: 'Hemodynamic Tolerance',
        content: 'AIVR is usually well-tolerated hemodynamically because the rate (50-100 bpm) is often adequate to maintain cardiac output. Most patients remain asymptomatic.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module5/lesson39/hemodynamic-tolerance.jpg',
        imageAlt: 'Patient monitoring showing stable hemodynamics during AIVR'},
      {
        id: 'aivr-management',
        title: 'AIVR Management',
        question: 'The standard treatment for asymptomatic AIVR is:',
        options: [
          'Immediate cardioversion',
          'Antiarrhythmic medications',
          'Observation only',
          'Emergency pacing'
        ],
        correctAnswer: 2,
        explanation: 'Asymptomatic AIVR typically requires only observation as it is usually self-limiting and hemodynamically stable.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module5/lesson39/aivr-management.jpg',
        imageAlt: 'Management algorithm showing observation approach for stable AIVR'},
      {
        id: 'aivr-mastery',
        title: 'AIVR Recognition Mastered',
        content: 'You now can recognize AIVR as an accelerated ventricular rhythm (50-100 bpm) that often competes with sinus rhythm. Remember: it is usually benign and requires only observation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module5/lesson39/aivr-mastery.jpg',
        imageAlt: 'AIVR mastery summary with key recognition points and management',
        audio: {
          narrationUrl: 'audio/module5/lesson39/aivr-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "AIVR is an accelerated ventricular rhythm (50-100 bpm) often seen with reperfusion. It is usually benign and requires only observation.",
    keyPoints: [
      "Rate 50-100 bpm with wide QRS complexes",
      "Enhanced automaticity in ventricular cells",
      "Often competes with sinus rhythm (fusion/capture beats)",
      "Usually benign and self-limiting"
    ],
    resources: [
      {
        title: "AIVR and Reperfusion Rhythms",
        url: "https://youtube.com/watch?v=aivr_reperfusion_rhythms",
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
