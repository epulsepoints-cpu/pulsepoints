import { Lesson } from '@/types/learning';

export const optimizedLesson63: Lesson = {
  id: 'lesson-8-3-optimized',
  moduleId: 'module-8',
  title: "Calcium Disorders & QT Effects",
  description: "Recognition of hypercalcemia and hypocalcemia effects on QT interval and cardiac conduction",
  order: 3,
  estimatedTime: 14,
  content: {
    type: 'mixed',
    introduction: "Master calcium disorder recognition and QT interval effects. Calcium directly affects cardiac repolarization, causing characteristic QT changes that require prompt recognition.",
    sections: [
      {
        id: 'section-overview',
        title: "Calcium & QT Effects",
        content: "CALCIUM EFFECTS: High Ca++ → Short QT → Low Ca++ → Long QT → Arrhythmia Risk → Correction Required",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'calcium-physiology',
        title: 'Calcium\'s Role in Cardiac Conduction',
        content: 'Calcium affects Phase 2 (plateau) of the cardiac action potential. High calcium shortens repolarization (short QT), while low calcium prolongs it (long QT).',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module8/lesson63/calcium-physiology.jpg',
        imageAlt: 'Calcium effects on cardiac action potential and repolarization',
        audio: {
          narrationUrl: 'audio/module8/lesson63/calcium-physiology.mp3',
          autoPlay: false
        }
      },
      {
        id: 'hypercalcemia-qt',
        title: 'Hypercalcemia: Short QT Syndrome',
        question: 'Hypercalcemia typically causes:',
        options: [
          'QT prolongation',
          'QT shortening (QTc <340ms)',
          'No QT changes',
          'QRS widening only'
        ],
        correctAnswer: 1,
        explanation: 'Hypercalcemia shortens the QT interval (QTc <340ms) by accelerating repolarization.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module8/lesson63/hypercalcemia-qt.jpg',
        imageAlt: 'Short QT interval in hypercalcemia'},
      {
        id: 'hypocalcemia-qt',
        title: 'Hypocalcemia: QT Prolongation',
        content: 'Hypocalcemia prolongs the QT interval by extending the ST segment. The T wave morphology usually remains normal, unlike other causes of QT prolongation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module8/lesson63/hypocalcemia-qt.jpg',
        imageAlt: 'Prolonged QT with long ST segment in hypocalcemia'},
      {
        id: 'qt-morphology-differences',
        title: 'QT Morphology: Calcium vs Other Causes',
        question: 'How does hypocalcemia QT prolongation differ from drug-induced?',
        options: [
          'No difference in morphology',
          'Hypocalcemia: long ST segment, normal T wave',
          'Hypocalcemia: short ST segment, flat T wave',
          'Hypocalcemia: wide QRS complex'
        ],
        correctAnswer: 1,
        explanation: 'Hypocalcemia prolongs QT by extending the ST segment while maintaining normal T wave morphology.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module8/lesson63/qt-morphology-differences.jpg',
        imageAlt: 'QT morphology comparison: calcium vs drug-induced'},
      {
        id: 'arrhythmia-risks',
        title: 'Calcium-Related Arrhythmia Risks',
        content: 'Hypercalcemia: increased digitalis sensitivity, bradyarrhythmias. Hypocalcemia: torsades de pointes risk, tetany-induced arrhythmias.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module8/lesson63/arrhythmia-risks.jpg',
        imageAlt: 'Arrhythmia risks from calcium disorders'},
      {
        id: 'clinical-correlation',
        title: 'Clinical Signs & ECG Correlation',
        question: 'ECG shows QTc 480ms with long ST segments. Patient likely has:',
        options: [
          'Hypercalcemia',
          'Hypocalcemia',
          'Hyperkalemia',
          'Normal calcium'
        ],
        correctAnswer: 1,
        explanation: 'QT prolongation with long ST segments is characteristic of hypocalcemia.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module8/lesson63/clinical-correlation.jpg',
        imageAlt: 'Clinical correlation of calcium levels with ECG findings',
        audio: {
          narrationUrl: 'audio/module8/lesson63/clinical-correlation.mp3',
          autoPlay: false
        }
      },
      {
        id: 'treatment-monitoring',
        title: 'Treatment & ECG Monitoring',
        content: 'Monitor QT interval during calcium correction. Hypocalcemia: IV calcium gluconate. Hypercalcemia: hydration, diuretics, bisphosphonates. ECG normalizes with correction.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module8/lesson63/treatment-monitoring.jpg',
        imageAlt: 'Calcium correction treatment with ECG monitoring'},
      {
        id: 'calcium-mastery',
        title: 'Calcium Disorder Mastery',
        content: 'You understand calcium effects on QT interval. Remember: high calcium = short QT, low calcium = long QT with long ST segments.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module8/lesson63/calcium-mastery.jpg',
        imageAlt: 'Calcium disorder ECG effects mastery summary',
        audio: {
          narrationUrl: 'audio/module8/lesson63/calcium-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "Calcium disorders affect QT interval: hypercalcemia shortens QT, hypocalcemia prolongs QT with characteristic long ST segments.",
    keyPoints: [
      "Hypercalcemia causes QT shortening (QTc <340ms)",
      "Hypocalcemia causes QT prolongation with long ST segments",
      "Hypocalcemia increases torsades risk",
      "Monitor QT interval during calcium correction"
    ],
    resources: [
      {
        title: "Calcium Disorders & ECG Changes",
        url: "https://youtube.com/watch?v=calcium_ecg_changes",
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
