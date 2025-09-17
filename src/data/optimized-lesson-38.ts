import { Lesson } from '@/types/learning';

export const optimizedLesson38: Lesson = {
  id: 'lesson-5-2-optimized',
  moduleId: 'module-5',
  title: "Ventricular Escape Rhythm",
  description: "Life-saving ventricular escape rhythms and their clinical management",
  order: 2,
  estimatedTime: 15,
  content: {
    type: 'mixed',
    introduction: "Learn to recognize and manage ventricular escape rhythms - the heart's last line of defense against cardiac arrest.",
    sections: [
      {
        id: 'section-overview',
        title: "Ventricular Escape Protection",
        content: "LIFE-SAVING RHYTHM: Escape Mechanism → Rate 20-40 → Wide QRS → Clinical Management",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'escape-intro',
        title: 'Ventricular Escape Rhythm',
        content: 'Ventricular escape rhythm is a life-saving backup mechanism that activates when all higher pacemakers fail. Rate is typically 20-40 bpm with wide QRS complexes, providing minimal but essential cardiac output.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module5/lesson38/escape-intro.jpg',
        imageAlt: 'Ventricular escape rhythm ECG showing slow, wide complexes as backup pacemaker',
        audio: {
          narrationUrl: 'audio/module5/lesson38/escape-intro.mp3',
          autoPlay: false
        }
      },
      {
        id: 'escape-mechanism',
        title: 'Escape Mechanism Activation',
        content: 'When the sinus node and AV junction fail, ventricular pacemaker cells automatically begin firing to prevent asystole. This protective mechanism typically has a built-in delay before activation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module5/lesson38/escape-mechanism.jpg',
        imageAlt: 'Mechanism showing failure of higher pacemakers triggering ventricular escape',
        audio: {
          narrationUrl: 'audio/module5/lesson38/escape-mechanism.mp3',
          autoPlay: false
        }
      },
      {
        id: 'escape-characteristics',
        title: 'Ventricular Escape Characteristics',
        question: 'Which combination best describes ventricular escape rhythm?',
        options: [
          'Rate 40-60, narrow QRS, regular',
          'Rate 20-40, wide QRS, regular',
          'Rate 60-100, wide QRS, irregular',
          'Rate >100, narrow QRS, regular'
        ],
        correctAnswer: 1,
        explanation: 'Ventricular escape rhythm has a slow rate (20-40 bpm), wide QRS complexes (>120ms), and is typically regular.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module5/lesson38/escape-characteristics.jpg',
        imageAlt: 'ECG strip showing classic ventricular escape rhythm characteristics'},
      {
        id: 'qrs-morphology',
        title: 'QRS Morphology in Escape Rhythms',
        content: 'Ventricular escape rhythms produce wide, bizarre QRS complexes that may look different in each lead. The morphology depends on the exact location of the escape focus within the ventricles.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module5/lesson38/qrs-morphology.jpg',
        imageAlt: 'Various QRS morphologies in ventricular escape rhythms from different foci'},
      {
        id: 'clinical-scenarios',
        title: 'Clinical Scenarios for Escape Rhythms',
        question: 'A patient with complete heart block develops ventricular escape rhythm. This rhythm is:',
        options: [
          'Dangerous and requires immediate suppression',
          'Protective and should not be suppressed',
          'Normal and requires no intervention',
          'Always requires cardioversion'
        ],
        correctAnswer: 1,
        explanation: 'Ventricular escape rhythms are protective and potentially life-saving. Suppressing them without backup pacing could cause asystole.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module5/lesson38/clinical-scenarios.jpg',
        imageAlt: 'Clinical scenario showing protective nature of ventricular escape in heart block',
        audio: {
          narrationUrl: 'audio/module5/lesson38/clinical-scenarios.mp3',
          autoPlay: false
        }
      },
      {
        id: 'hemodynamic-effects',
        title: 'Hemodynamic Effects',
        content: 'Due to the slow rate (20-40 bpm), ventricular escape rhythms often cause significant hemodynamic compromise. Patients may experience weakness, dizziness, syncope, or signs of heart failure.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module5/lesson38/hemodynamic-effects.jpg',
        imageAlt: 'Clinical presentation of hemodynamic compromise in ventricular escape rhythm'},
      {
        id: 'management-approach',
        title: 'Management of Ventricular Escape',
        question: 'The primary treatment for symptomatic ventricular escape rhythm is:',
        options: [
          'Antiarrhythmic medications to suppress rhythm',
          'Temporary or permanent pacing',
          'Cardioversion',
          'Beta-blockers to slow the rate'
        ],
        correctAnswer: 1,
        explanation: 'Pacing is the primary treatment for symptomatic ventricular escape rhythm. Never suppress the escape rhythm without backup pacing.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module5/lesson38/management-approach.jpg',
        imageAlt: 'Treatment algorithm showing pacing as primary therapy for ventricular escape'},
      {
        id: 'escape-protection',
        title: 'Ventricular Escape Protection Mastered',
        content: 'You now understand ventricular escape rhythms as life-saving backup mechanisms. Remember: these rhythms are protective and should never be suppressed without adequate backup pacing in place.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module5/lesson38/escape-protection.jpg',
        imageAlt: 'Summary of ventricular escape rhythm protection and clinical importance'}
    ],
    summary: "Ventricular escape rhythms are life-saving backup mechanisms with rates of 20-40 bpm and wide QRS complexes. They should be protected, not suppressed.",
    keyPoints: [
      "Rate 20-40 bpm with wide QRS complexes (>120ms)",
      "Life-saving backup when higher pacemakers fail",
      "Often causes hemodynamic compromise due to slow rate",
      "Requires pacing, never suppress without backup"
    ],
    resources: [
      {
        title: "Ventricular Escape Mechanisms",
        url: "https://youtube.com/watch?v=ventricular_escape_protection",
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
