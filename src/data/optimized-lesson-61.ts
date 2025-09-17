import { Lesson } from '@/types/learning';

export const optimizedLesson61: Lesson = {
  id: 'lesson-8-1-optimized',
  moduleId: 'module-8',
  title: "Hyperkalemia Progression - Potassium Emergency",
  description: "Recognition and emergency management of hyperkalemia ECG changes from mild to life-threatening",
  order: 1,
  estimatedTime: 18,
  content: {
    type: 'mixed',
    introduction: "Master hyperkalemia recognition and emergency management. Elevated potassium causes progressive ECG changes that can rapidly progress to cardiac arrest if untreated.",
    sections: [
      {
        id: 'section-overview',
        title: "Hyperkalemia Emergency",
        content: "PROGRESSIVE DANGER: Peaked T waves → QRS Widening → Sine Wave → Cardiac Arrest → Immediate Treatment",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'hyperkalemia-concept',
        title: 'Hyperkalemia: Potassium Emergency',
        content: 'Hyperkalemia (K+ >5.5 mEq/L) causes progressive ECG changes that can rapidly lead to cardiac arrest. Early recognition and immediate treatment are life-saving.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module8/lesson61/hyperkalemia-concept.jpg',
        imageAlt: 'Hyperkalemia progression from mild to severe ECG changes',
        audio: {
          narrationUrl: 'audio/module8/lesson61/hyperkalemia-concept.mp3',
          autoPlay: false
        }
      },
      {
        id: 'early-changes',
        title: 'Early Hyperkalemia (5.5-6.0 mEq/L)',
        question: 'The earliest ECG sign of hyperkalemia is:',
        options: [
          'QRS widening',
          'Tall, peaked T waves',
          'P wave flattening',
          'PR prolongation'
        ],
        correctAnswer: 1,
        explanation: 'Tall, peaked, narrow-based T waves are the earliest and most sensitive sign of hyperkalemia.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module8/lesson61/early-changes.jpg',
        imageAlt: 'Early hyperkalemia showing tall peaked T waves',
        audio: {
          narrationUrl: 'audio/module8/lesson61/early-changes.mp3',
          autoPlay: false
        }
      },
      {
        id: 'moderate-hyperkalemia',
        title: 'Moderate Hyperkalemia (6.0-7.0 mEq/L)',
        content: 'Moderate hyperkalemia shows P wave flattening, PR prolongation, and QRS widening. These changes indicate dangerous potassium levels requiring immediate intervention.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module8/lesson61/moderate-hyperkalemia.jpg',
        imageAlt: 'Moderate hyperkalemia with QRS widening and PR prolongation'},
      {
        id: 'severe-hyperkalemia',
        title: 'Severe Hyperkalemia (>7.0 mEq/L)',
        question: 'The sine wave pattern in severe hyperkalemia indicates:',
        options: [
          'Mild potassium elevation',
          'Imminent cardiac arrest',
          'Normal ECG variant',
          'Hypokalemia'
        ],
        correctAnswer: 1,
        explanation: 'Sine wave pattern indicates severe hyperkalemia with imminent cardiac arrest requiring immediate treatment.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module8/lesson61/severe-hyperkalemia.jpg',
        imageAlt: 'Severe hyperkalemia showing sine wave pattern'},
      {
        id: 'calcium-treatment',
        title: 'Calcium: Membrane Stabilization',
        content: 'Calcium gluconate 10% 10-20ml IV or calcium chloride 10% 5-10ml IV immediately stabilizes cardiac membranes. Effect is rapid but temporary (30-60 minutes).',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module8/lesson61/calcium-treatment.jpg',
        imageAlt: 'Calcium administration for hyperkalemia membrane stabilization'},
      {
        id: 'potassium-shifting',
        title: 'Potassium Shifting Therapies',
        question: 'Which therapy shifts potassium intracellularly?',
        options: [
          'Calcium gluconate',
          'Insulin + glucose',
          'Sodium polystyrene sulfonate',
          'Dialysis'
        ],
        correctAnswer: 1,
        explanation: 'Insulin 10 units IV with 25g glucose (D50) shifts potassium intracellularly within 15-30 minutes.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module8/lesson61/potassium-shifting.jpg',
        imageAlt: 'Potassium shifting therapies with insulin and glucose'},
      {
        id: 'potassium-removal',
        title: 'Potassium Removal Strategies',
        content: 'Sodium polystyrene sulfonate (Kayexalate) binds potassium in GI tract. Dialysis provides definitive removal for severe cases or renal failure.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module8/lesson61/potassium-removal.jpg',
        imageAlt: 'Potassium removal methods including Kayexalate and dialysis'},
      {
        id: 'hyperkalemia-mastery',
        title: 'Hyperkalemia Emergency Mastery',
        content: 'You understand hyperkalemia progression and emergency treatment. Remember: peaked T waves = early sign, sine wave = imminent arrest, calcium + insulin/glucose = immediate treatment.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module8/lesson61/hyperkalemia-mastery.jpg',
        imageAlt: 'Hyperkalemia emergency treatment algorithm summary',
        audio: {
          narrationUrl: 'audio/module8/lesson61/hyperkalemia-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "Hyperkalemia causes progressive ECG changes from peaked T waves to sine wave. Immediate treatment includes calcium, insulin/glucose, and potassium removal.",
    keyPoints: [
      "Peaked T waves are earliest sign of hyperkalemia",
      "Progressive changes: P wave loss → QRS widening → sine wave",
      "Calcium stabilizes membranes immediately",
      "Insulin/glucose shifts potassium intracellularly"
    ],
    resources: [
      {
        title: "Hyperkalemia Emergency Management",
        url: "https://youtube.com/watch?v=hyperkalemia_emergency",
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
