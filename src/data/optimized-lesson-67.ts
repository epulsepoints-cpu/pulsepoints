import { Lesson } from '@/types/learning';

export const optimizedLesson67: Lesson = {
  id: 'lesson-8-7-optimized',
  moduleId: 'module-8',
  title: "Complex Drug Interactions & Polypharmacy",
  description: "Advanced recognition of multiple drug effects and complex electrolyte-drug interactions",
  order: 7,
  estimatedTime: 20,
  content: {
    type: 'mixed',
    introduction: "Master complex drug interactions and polypharmacy effects on ECG. Real-world patients often take multiple medications with cumulative and synergistic effects requiring careful monitoring.",
    sections: [
      {
        id: 'section-overview',
        title: "Complex Drug Interactions",
        content: "POLYPHARMACY EFFECTS: Multiple Drugs → Additive Effects → Synergistic Toxicity → Metabolic Interactions → Comprehensive Monitoring",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'polypharmacy-reality',
        title: 'Polypharmacy in Clinical Practice',
        content: 'Many patients take multiple medications affecting cardiac conduction. Understanding cumulative effects, drug interactions, and metabolic changes is crucial for safe prescribing.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module8/lesson67/polypharmacy-reality.jpg',
        imageAlt: 'Real-world polypharmacy scenario with multiple cardiac drugs',
        audio: {
          narrationUrl: 'audio/module8/lesson67/polypharmacy-reality.mp3',
          autoPlay: false
        }
      },
      {
        id: 'additive-qt-effects',
        title: 'Additive QT Prolongation',
        question: 'Patient takes amiodarone + fluconazole + ondansetron. Expected ECG effect:',
        options: [
          'No QT change',
          'QT shortening',
          'Significant cumulative QT prolongation',
          'QRS widening only'
        ],
        correctAnswer: 2,
        explanation: 'Multiple QT-prolonging drugs have cumulative effects, significantly increasing torsades risk.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module8/lesson67/additive-qt-effects.jpg',
        imageAlt: 'Cumulative QT prolongation from multiple drugs',
        audio: {
          narrationUrl: 'audio/module8/lesson67/additive-qt-effects.mp3',
          autoPlay: false
        }
      },
      {
        id: 'electrolyte-drug-synergy',
        title: 'Electrolyte-Drug Synergistic Effects',
        content: 'Hypokalemia + digitalis = enhanced toxicity. Hypomagnesemia + QT drugs = increased torsades risk. Electrolyte abnormalities amplify drug effects.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module8/lesson67/electrolyte-drug-synergy.jpg',
        imageAlt: 'Synergistic effects of electrolyte imbalances and drugs'},
      {
        id: 'metabolic-pathway-interactions',
        title: 'Metabolic Pathway Interactions',
        question: 'Quinidine + digoxin interaction results in:',
        options: [
          'Decreased digoxin levels',
          'Doubled digoxin levels',
          'No change in levels',
          'Quinidine inactivation'
        ],
        correctAnswer: 1,
        explanation: 'Quinidine doubles digoxin levels by inhibiting renal clearance, requiring digoxin dose reduction.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module8/lesson67/metabolic-pathway-interactions.jpg',
        imageAlt: 'Quinidine-digoxin interaction affecting drug levels'},
      {
        id: 'case-study-analysis',
        title: 'Complex Case Study Analysis',
        content: '85-year-old with heart failure on: digoxin, amiodarone, furosemide, K+ supplement. ECG shows QTc 520ms, PR 280ms. Multiple drug effects evident.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module8/lesson67/case-study-analysis.jpg',
        imageAlt: 'Complex polypharmacy case with multiple ECG effects'},
      {
        id: 'risk-stratification',
        title: 'Polypharmacy Risk Stratification',
        question: 'Highest risk combination for cardiac toxicity:',
        options: [
          'Aspirin + statin',
          'Beta-blocker + ACE inhibitor',
          'Quinidine + digoxin + hypokalemia',
          'Calcium + vitamin D'
        ],
        correctAnswer: 2,
        explanation: 'Quinidine increases digoxin levels, and hypokalemia enhances digitalis toxicity - extremely high-risk combination.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module8/lesson67/risk-stratification.jpg',
        imageAlt: 'High-risk drug combinations requiring intensive monitoring'},
      {
        id: 'monitoring-strategy',
        title: 'Comprehensive Monitoring Strategy',
        content: 'Regular ECGs, electrolyte panels, drug levels, clinical assessment. Adjust medications based on cumulative effects. Consider drug interactions with new prescriptions.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module8/lesson67/monitoring-strategy.jpg',
        imageAlt: 'Comprehensive monitoring protocol for polypharmacy patients'},
      {
        id: 'polypharmacy-mastery',
        title: 'Complex Drug Interaction Mastery',
        content: 'You understand complex drug interactions and polypharmacy effects. Real-world prescribing requires vigilant monitoring of cumulative cardiac effects and drug-electrolyte interactions.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module8/lesson67/polypharmacy-mastery.jpg',
        imageAlt: 'Polypharmacy management mastery with comprehensive approach',
        audio: {
          narrationUrl: 'audio/module8/lesson67/polypharmacy-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "Polypharmacy creates complex drug interactions with cumulative effects. Monitor ECG parameters, electrolytes, and drug levels comprehensively.",
    keyPoints: [
      "Multiple drugs have cumulative cardiac effects",
      "Electrolyte abnormalities enhance drug toxicity",
      "Drug interactions can double or triple drug levels",
      "Comprehensive monitoring prevents adverse outcomes"
    ],
    resources: [
      {
        title: "Complex Drug Interactions",
        url: "https://youtube.com/watch?v=complex_drug_interactions",
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
