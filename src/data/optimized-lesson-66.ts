import { Lesson } from '@/types/learning';

export const optimizedLesson66: Lesson = {
  id: 'lesson-8-6-optimized',
  moduleId: 'module-8',
  title: "QT Prolonging Medications",
  description: "Recognition and prevention of drug-induced QT prolongation and torsades de pointes",
  order: 6,
  estimatedTime: 19,
  content: {
    type: 'mixed',
    introduction: "Master QT-prolonging drug recognition and torsades prevention. Many common medications can cause dangerous QT prolongation - early recognition prevents sudden death.",
    sections: [
      {
        id: 'section-overview',
        title: "QT Prolonging Drugs",
        content: "TORSADES PREVENTION: QT Drugs → Risk Factors → Monitoring → Early Recognition → Drug Discontinuation",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'qt-drug-categories',
        title: 'Categories of QT-Prolonging Drugs',
        content: 'Cardiac: Class III antiarrhythmics. Psychiatric: antipsychotics, antidepressants. Antibiotics: fluoroquinolones, macrolides. Others: antihistamines, antifungals, GI drugs.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module8/lesson66/qt-drug-categories.jpg',
        imageAlt: 'Categories of common QT-prolonging medications',
        audio: {
          narrationUrl: 'audio/module8/lesson66/qt-drug-categories.mp3',
          autoPlay: false
        }
      },
      {
        id: 'high-risk-drugs',
        title: 'High-Risk QT-Prolonging Drugs',
        question: 'Which drug has the highest torsades risk?',
        options: [
          'Amoxicillin',
          'Dofetilide (Class III antiarrhythmic)',
          'Acetaminophen',
          'Aspirin'
        ],
        correctAnswer: 1,
        explanation: 'Dofetilide and other Class III antiarrhythmics have the highest torsades risk due to direct potassium channel blockade.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module8/lesson66/high-risk-drugs.jpg',
        imageAlt: 'High-risk QT-prolonging drugs with torsades potential',
        audio: {
          narrationUrl: 'audio/module8/lesson66/high-risk-drugs.mp3',
          autoPlay: false
        }
      },
      {
        id: 'risk-factors',
        title: 'Risk Factors for Drug-Induced Torsades',
        content: 'Female sex, age >65, bradycardia, hypokalemia, hypomagnesemia, heart disease, congenital long QT, multiple QT drugs, CYP450 inhibitors.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module8/lesson66/risk-factors.jpg',
        imageAlt: 'Risk factors predisposing to drug-induced torsades'},
      {
        id: 'qt-monitoring-protocol',
        title: 'QT Monitoring Protocol',
        question: 'When starting a QT-prolonging drug, obtain ECG:',
        options: [
          'Only if symptoms develop',
          'Baseline, then periodic monitoring',
          'After one month only',
          'Never needed'
        ],
        correctAnswer: 1,
        explanation: 'Obtain baseline ECG, then monitor at steady state (usually 5 half-lives) and with dose changes.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module8/lesson66/qt-monitoring-protocol.jpg',
        imageAlt: 'QT monitoring protocol timeline for drug initiation'},
      {
        id: 'qtc-thresholds',
        title: 'QTc Thresholds for Action',
        content: 'QTc >500ms: high torsades risk, consider drug discontinuation. QTc increase >60ms from baseline: significant concern. Monitor more frequently.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module8/lesson66/qtc-thresholds.jpg',
        imageAlt: 'QTc threshold values for clinical decision making'},
      {
        id: 'drug-interactions',
        title: 'CYP450 Interactions & QT',
        question: 'CYP450 inhibitors affect QT-prolonging drugs by:',
        options: [
          'Reducing drug levels',
          'Increasing drug levels and QT prolongation',
          'Having no effect',
          'Shortening QT interval'
        ],
        correctAnswer: 1,
        explanation: 'CYP450 inhibitors increase drug levels, enhancing QT prolongation and torsades risk.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module8/lesson66/drug-interactions.jpg',
        imageAlt: 'CYP450 interactions affecting QT-prolonging drug levels'},
      {
        id: 'prevention-strategies',
        title: 'Torsades Prevention Strategies',
        content: 'Pre-treatment screening: baseline ECG, electrolytes, drug history. Minimize risk factors: correct K+/Mg++, avoid bradycardia, use lowest effective dose.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module8/lesson66/prevention-strategies.jpg',
        imageAlt: 'Comprehensive torsades prevention strategy checklist'},
      {
        id: 'qt-drug-mastery',
        title: 'QT Drug Safety Mastery',
        content: 'You understand QT-prolonging drug risks and prevention. Remember: baseline ECG, monitor QTc <500ms, correct electrolytes, avoid drug interactions.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module8/lesson66/qt-drug-mastery.jpg',
        imageAlt: 'QT drug safety mastery with prevention protocols',
        audio: {
          narrationUrl: 'audio/module8/lesson66/qt-drug-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "Many drugs prolong QT and cause torsades. Prevention requires baseline ECG, electrolyte correction, and monitoring QTc <500ms.",
    keyPoints: [
      "Multiple drug categories can prolong QT interval",
      "Female sex and age >65 increase torsades risk",
      "QTc >500ms indicates high torsades risk",
      "Prevention requires screening and monitoring protocols"
    ],
    resources: [
      {
        title: "QT Drug Safety Guidelines",
        url: "https://youtube.com/watch?v=qt_drug_safety",
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
