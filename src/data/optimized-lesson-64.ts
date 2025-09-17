import { Lesson } from '@/types/learning';

export const optimizedLesson64: Lesson = {
  id: 'lesson-8-4-optimized',
  moduleId: 'module-8',
  title: "Digitalis Effects & Toxicity",
  description: "Recognition of therapeutic digitalis effects and dangerous toxicity patterns",
  order: 4,
  estimatedTime: 20,
  content: {
    type: 'mixed',
    introduction: "Master digitalis effects and toxicity recognition. Digitalis has narrow therapeutic window - understanding ECG changes helps distinguish therapeutic effects from dangerous toxicity.",
    sections: [
      {
        id: 'section-overview',
        title: "Digitalis Effects & Toxicity",
        content: "THERAPEUTIC vs TOXIC: ST Scooping → Increased Ectopy → AV Blocks → Bidirectional VT → Antidote Required",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'digitalis-mechanism',
        title: 'Digitalis Mechanism of Action',
        content: 'Digitalis inhibits Na-K ATPase pump, increasing intracellular calcium and enhancing contractility. It also increases vagal tone, slowing AV conduction.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module8/lesson64/digitalis-mechanism.jpg',
        imageAlt: 'Digitalis mechanism affecting Na-K ATPase and calcium',
        audio: {
          narrationUrl: 'audio/module8/lesson64/digitalis-mechanism.mp3',
          autoPlay: false
        }
      },
      {
        id: 'therapeutic-effects',
        title: 'Therapeutic Digitalis ECG Effects',
        question: 'Classic therapeutic digitalis effect on ECG:',
        options: [
          'QT prolongation',
          'ST elevation',
          'ST depression with "scooping" or "sagging"',
          'QRS widening'
        ],
        correctAnswer: 2,
        explanation: 'Therapeutic digitalis causes characteristic ST depression with a "scooping" or "Salvador Dali mustache" appearance.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module8/lesson64/therapeutic-effects.jpg',
        imageAlt: 'Therapeutic digitalis showing ST scooping pattern',
        audio: {
          narrationUrl: 'audio/module8/lesson64/therapeutic-effects.mp3',
          autoPlay: false
        }
      },
      {
        id: 'early-toxicity-signs',
        title: 'Early Digitalis Toxicity Signs',
        content: 'Early toxicity: increased ventricular ectopy (PVCs, bigeminy), prolonged PR interval, first-degree AV block. These precede dangerous arrhythmias.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module8/lesson64/early-toxicity-signs.jpg',
        imageAlt: 'Early digitalis toxicity with increased PVCs and PR prolongation'},
      {
        id: 'av-block-progression',
        title: 'AV Block in Digitalis Toxicity',
        question: 'Progressive digitalis toxicity causes AV blocks in this order:',
        options: [
          'Complete → Mobitz II → Mobitz I → First-degree',
          'First-degree → Mobitz I → Mobitz II → Complete',
          'First-degree → Mobitz II → Mobitz I → Complete',
          'Mobitz I → First-degree → Complete → Mobitz II'
        ],
        correctAnswer: 1,
        explanation: 'Digitalis toxicity progresses: First-degree → Mobitz I (Wenckebach) → Mobitz II → Complete heart block.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/first_degree_av_block_80bpm_3.png',
        imageAlt: 'Progressive AV block development in digitalis toxicity'},
      {
        id: 'bidirectional-vt',
        title: 'Bidirectional VT: Pathognomonic Sign',
        content: 'Bidirectional ventricular tachycardia (alternating QRS axis) is pathognomonic for digitalis toxicity. This is a medical emergency requiring immediate antidote.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module8/lesson64/bidirectional-vt.jpg',
        imageAlt: 'Bidirectional VT showing alternating QRS morphology'},
      {
        id: 'hypokalemia-interaction',
        title: 'Hypokalemia Enhances Toxicity',
        question: 'Hypokalemia affects digitalis toxicity by:',
        options: [
          'Preventing toxicity completely',
          'Having no effect on toxicity',
          'Greatly increasing toxicity risk',
          'Only affecting therapeutic levels'
        ],
        correctAnswer: 2,
        explanation: 'Hypokalemia greatly increases digitalis toxicity risk. Even therapeutic digitalis levels can be toxic when K+ is low.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module8/lesson64/hypokalemia-interaction.jpg',
        imageAlt: 'Hypokalemia enhancing digitalis toxicity susceptibility'},
      {
        id: 'fab-fragment-antidote',
        title: 'Digitalis Fab Fragment Antidote',
        content: 'Severe digitalis toxicity requires digoxin-specific antibody fragments (Fab). Indications: life-threatening arrhythmias, hemodynamic instability, severe hyperkalemia.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module8/lesson64/fab-fragment-antidote.jpg',
        imageAlt: 'Digitalis Fab fragment antidote mechanism and indications'},
      {
        id: 'digitalis-mastery',
        title: 'Digitalis Toxicity Mastery',
        content: 'You understand digitalis effects and toxicity. Remember: ST scooping = therapeutic, bidirectional VT = pathognomonic toxicity, hypokalemia enhances toxicity.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module8/lesson64/digitalis-mastery.jpg',
        imageAlt: 'Digitalis toxicity recognition and management summary',
        audio: {
          narrationUrl: 'audio/module8/lesson64/digitalis-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "Digitalis causes ST scooping at therapeutic levels. Toxicity progresses from ectopy to AV blocks to bidirectional VT requiring Fab fragments.",
    keyPoints: [
      "ST scooping characteristic of therapeutic digitalis",
      "Toxicity progression: ectopy → AV blocks → bidirectional VT",
      "Hypokalemia greatly enhances toxicity risk",
      "Bidirectional VT is pathognomonic for digitalis toxicity"
    ],
    resources: [
      {
        title: "Digitalis Toxicity Recognition",
        url: "https://youtube.com/watch?v=digitalis_toxicity",
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
