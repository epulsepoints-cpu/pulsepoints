import { Lesson } from '@/types/learning';

export const optimizedLesson43: Lesson = {
  id: 'lesson-5-7-optimized',
  moduleId: 'module-5',
  title: "Ventricular Rhythm Patterns & Morphology",
  description: "Advanced ventricular rhythm pattern recognition and morphology analysis",
  order: 7,
  estimatedTime: 15,
  content: {
    type: 'mixed',
    introduction: "Master advanced ventricular rhythm patterns including bigeminy, trigeminy, couplets, and morphology analysis for clinical decision-making.",
    sections: [
      {
        id: 'section-overview',
        title: "Advanced VT Patterns",
        content: "PATTERN RECOGNITION: Bigeminy/Trigeminy → Couplets/Runs → Morphology Analysis → Risk Assessment",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'patterns-intro',
        title: 'Ventricular Pattern Recognition',
        content: 'Ventricular rhythms occur in specific patterns that have clinical significance. Understanding these patterns helps assess arrhythmia burden and risk stratification.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module5/lesson43/patterns-intro.jpg',
        imageAlt: 'Overview of ventricular rhythm patterns from isolated PVCs to sustained VT',
        audio: {
          narrationUrl: 'audio/module5/lesson43/patterns-intro.mp3',
          autoPlay: false
        }
      },
      {
        id: 'bigeminy-trigeminy',
        title: 'Bigeminy and Trigeminy',
        content: 'Bigeminy is every other beat being a PVC (alternating pattern). Trigeminy is every third beat being a PVC. These patterns suggest enhanced ventricular automaticity.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module5/lesson43/bigeminy-trigeminy.jpg',
        imageAlt: 'ECG strips showing bigeminy pattern and trigeminy pattern clearly labeled',
        audio: {
          narrationUrl: 'audio/module5/lesson43/bigeminy-trigeminy.mp3',
          autoPlay: false
        }
      },
      {
        id: 'pattern-recognition',
        title: 'Pattern Recognition Challenge',
        question: 'A rhythm with normal beat-PVC-normal beat-PVC pattern represents:',
        options: [
          'Ventricular trigeminy',
          'Ventricular bigeminy',
          'Ventricular couplets',
          'Ventricular tachycardia'
        ],
        correctAnswer: 1,
        explanation: 'Alternating normal beats and PVCs in a consistent pattern represents ventricular bigeminy.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module5/lesson43/pattern-recognition.jpg',
        imageAlt: 'ECG example of ventricular bigeminy with clear alternating pattern'},
      {
        id: 'couplets-runs',
        title: 'Couplets and Runs',
        content: 'Ventricular couplets are two consecutive PVCs. Runs (or salvos) are 3 or more consecutive ventricular beats. Runs of VT ≥3 beats have increased clinical significance.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module5/lesson43/couplets-runs.jpg',
        imageAlt: 'Progression from single PVCs to couplets to runs of ventricular tachycardia'},
      {
        id: 'morphology-analysis',
        title: 'QRS Morphology Analysis',
        question: 'Right bundle branch block (RBBB) morphology in ventricular rhythms suggests origin from:',
        options: [
          'Right ventricular free wall',
          'Left ventricular free wall',
          'Interventricular septum',
          'Cannot determine location'
        ],
        correctAnswer: 1,
        explanation: 'RBBB morphology in ventricular rhythms suggests left ventricular origin, as the impulse spreads toward the right ventricle.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module5/lesson43/morphology-analysis.jpg',
        imageAlt: 'QRS morphology patterns showing RBBB vs LBBB patterns in ventricular rhythms'},
      {
        id: 'axis-analysis',
        title: 'Axis and Lead Analysis',
        content: 'The QRS axis in ventricular rhythms can help localize the origin. Superior axis suggests inferior wall origin, while inferior axis suggests superior wall origin.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module5/lesson43/axis-analysis.jpg',
        imageAlt: 'Axis wheel showing how QRS axis relates to ventricular origin location'},
      {
        id: 'risk-stratification',
        title: 'Risk Stratification by Pattern',
        question: 'Which ventricular pattern carries the highest arrhythmic risk?',
        options: [
          'Isolated unifocal PVCs',
          'Ventricular bigeminy',
          'Frequent multiform PVCs with runs',
          'Rare ventricular couplets'
        ],
        correctAnswer: 2,
        explanation: 'Frequent multiform PVCs with runs indicate electrical instability and carry higher risk for sustained ventricular arrhythmias.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module5/lesson43/risk-stratification.jpg',
        imageAlt: 'Risk stratification pyramid showing increasing risk from isolated to complex patterns'},
      {
        id: 'pattern-mastery',
        title: 'Ventricular Pattern Mastery',
        content: 'You now can recognize complex ventricular patterns and understand their clinical significance. Pattern recognition guides risk assessment and treatment decisions.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module5/lesson43/pattern-mastery.jpg',
        imageAlt: 'Comprehensive summary of ventricular patterns with clinical significance',
        audio: {
          narrationUrl: 'audio/module5/lesson43/pattern-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "Ventricular patterns include bigeminy, trigeminy, couplets, and runs. Complex patterns with multiform morphology carry higher arrhythmic risk.",
    keyPoints: [
      "Bigeminy = every other beat is PVC; Trigeminy = every third beat",
      "Couplets = 2 consecutive PVCs; Runs = 3+ consecutive PVCs",
      "QRS morphology helps localize ventricular origin",
      "Complex patterns indicate higher arrhythmic risk"
    ],
    resources: [
      {
        title: "Advanced Ventricular Pattern Recognition",
        url: "https://youtube.com/watch?v=ventricular_patterns_advanced",
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
