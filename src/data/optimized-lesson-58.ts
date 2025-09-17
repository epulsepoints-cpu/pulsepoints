import { Lesson } from '@/types/learning';

export const optimizedLesson58: Lesson = {
  id: 'lesson-7-6-optimized',
  moduleId: 'module-7',
  title: "Torsades de Pointes - Polymorphic VT",
  description: "Recognition and emergency management of torsades de pointes and polymorphic ventricular tachycardia",
  order: 6,
  estimatedTime: 18,
  content: {
    type: 'mixed',
    introduction: "Master torsades de pointes recognition and emergency management. This distinctive polymorphic VT requires specific treatment different from monomorphic VT.",
    sections: [
      {
        id: 'section-overview',
        title: "Torsades de Pointes Emergency",
        content: "UNIQUE VT: QT Prolongation → Twisting QRS → Magnesium → Overdrive Pacing → Avoid Class III Drugs",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'torsades-definition',
        title: 'Torsades de Pointes Definition',
        content: 'Torsades de Pointes is a polymorphic ventricular tachycardia characterized by QRS complexes that appear to "twist" around the baseline, typically in the setting of QT prolongation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module7/lesson58/torsades-definition.jpg',
        imageAlt: 'Torsades pattern showing twisting QRS morphology',
        audio: {
          narrationUrl: 'audio/module7/lesson58/torsades-definition.mp3',
          autoPlay: false
        }
      },
      {
        id: 'qt-prolongation-trigger',
        title: 'QT Prolongation as Trigger',
        question: 'Torsades de pointes is most commonly triggered by:',
        options: [
          'Normal QT interval',
          'QT prolongation (QTc >500ms)',
          'Short QT interval',
          'Wide QRS complex'
        ],
        correctAnswer: 1,
        explanation: 'Prolonged QT interval (especially QTc >500ms) predisposes to torsades through early afterdepolarizations.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module7/lesson58/qt-prolongation-trigger.jpg',
        imageAlt: 'QT prolongation leading to torsades initiation',
        audio: {
          narrationUrl: 'audio/module7/lesson58/qt-prolongation-trigger.mp3',
          autoPlay: false
        }
      },
      {
        id: 'polymorphic-pattern',
        title: 'Polymorphic VT Recognition',
        content: 'Unlike monomorphic VT, torsades shows constantly changing QRS morphology with a characteristic "twisting" appearance around the isoelectric line.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module7/lesson58/polymorphic-pattern.jpg',
        imageAlt: 'Polymorphic vs monomorphic VT comparison'},
      {
        id: 'magnesium-treatment',
        title: 'Magnesium: First-Line Treatment',
        question: 'For torsades de pointes, first-line medication is:',
        options: [
          'Amiodarone',
          'Lidocaine',
          'Magnesium sulfate 2g IV',
          'Procainamide'
        ],
        correctAnswer: 2,
        explanation: 'Magnesium sulfate 2g IV over 1-2 minutes is first-line for torsades, even with normal serum magnesium levels.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module7/lesson58/magnesium-treatment.jpg',
        imageAlt: 'Magnesium administration protocol for torsades'},
      {
        id: 'overdrive-pacing',
        title: 'Overdrive Pacing Strategy',
        content: 'Temporary overdrive pacing at 100-120 bpm can suppress torsades by shortening the QT interval and reducing early afterdepolarizations.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module7/lesson58/overdrive-pacing.jpg',
        imageAlt: 'Overdrive pacing suppressing torsades recurrence'},
      {
        id: 'drug-avoidance',
        title: 'Drugs to Avoid in Torsades',
        question: 'Which medication should be AVOIDED in torsades de pointes?',
        options: [
          'Magnesium',
          'Isoproterenol',
          'Amiodarone (Class III antiarrhythmic)',
          'Potassium'
        ],
        correctAnswer: 2,
        explanation: 'Class III antiarrhythmics (amiodarone, sotalol) prolong QT and can worsen torsades. Avoid all QT-prolonging drugs.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module7/lesson58/drug-avoidance.jpg',
        imageAlt: 'Contraindicated drugs in torsades management'},
      {
        id: 'electrolyte-correction',
        title: 'Electrolyte Correction',
        content: 'Correct hypokalemia (goal K+ >4.0 mEq/L) and hypomagnesemia (goal Mg++ >2.0 mg/dL). These deficiencies predispose to torsades and should be aggressively corrected.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module7/lesson58/electrolyte-correction.jpg',
        imageAlt: 'Electrolyte targets for torsades prevention'},
      {
        id: 'hemodynamic-instability',
        title: 'Hemodynamically Unstable Torsades',
        content: 'If torsades causes loss of consciousness or hemodynamic collapse, immediate unsynchronized defibrillation is indicated, followed by magnesium and electrolyte correction.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module7/lesson58/hemodynamic-instability.jpg',
        imageAlt: 'Unstable torsades requiring immediate defibrillation'},
      {
        id: 'torsades-mastery',
        title: 'Torsades de Pointes Mastery',
        content: 'You understand torsades recognition and management. Remember: QT prolongation triggers, magnesium first-line, avoid Class III drugs, correct electrolytes, consider overdrive pacing.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module7/lesson58/torsades-mastery.jpg',
        imageAlt: 'Torsades management algorithm summary',
        audio: {
          narrationUrl: 'audio/module7/lesson58/torsades-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "Torsades de pointes is polymorphic VT triggered by QT prolongation. Treat with magnesium, avoid Class III drugs, and correct electrolytes.",
    keyPoints: [
      "Polymorphic VT with 'twisting' QRS morphology",
      "Triggered by QT prolongation (QTc >500ms)",
      "Magnesium sulfate 2g IV is first-line treatment",
      "Avoid Class III antiarrhythmics and QT-prolonging drugs"
    ],
    resources: [
      {
        title: "Torsades de Pointes Management",
        url: "https://youtube.com/watch?v=torsades_management",
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
