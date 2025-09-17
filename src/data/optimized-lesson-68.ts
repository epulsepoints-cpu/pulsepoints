import { Lesson } from '@/types/learning';

export const optimizedLesson68: Lesson = {
  id: 'lesson-8-8-optimized',
  moduleId: 'module-8',
  title: "Module 8 Mastery Assessment",
  description: "Final comprehensive assessment of electrolytes and medications effects on ECG",
  order: 8,
  estimatedTime: 25,
  content: {
    type: 'mixed',
    introduction: "Demonstrate mastery of electrolyte disorders and medication effects on ECG. This comprehensive assessment tests your ability to recognize, interpret, and manage complex metabolic and pharmacological ECG changes.",
    sections: [
      {
        id: 'section-overview',
        title: "Module 8 Mastery Challenge",
        content: "MASTERY ASSESSMENT: Electrolyte Recognition → Drug Effect Analysis → Toxicity Detection → Clinical Management → Emergency Response",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'mastery-introduction',
        title: 'Module 8 Mastery Assessment',
        content: 'Test your expertise in electrolyte disorders and medication effects. Master-level recognition and management of metabolic and pharmacological ECG changes.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module8/lesson68/mastery-introduction.jpg',
        imageAlt: 'Module 8 mastery assessment covering electrolytes and medications',
        audio: {
          narrationUrl: 'audio/module8/lesson68/mastery-introduction.mp3',
          autoPlay: false
        }
      },
      {
        id: 'hyperkalemia-emergency',
        title: 'Hyperkalemia Emergency Recognition',
        question: 'Most urgent ECG finding requiring immediate intervention:',
        options: [
          'Peaked T waves in V3-V6',
          'Sine wave pattern',
          'QRS 120ms',
          'First-degree AV block'
        ],
        correctAnswer: 1,
        explanation: 'Sine wave pattern indicates severe hyperkalemia with imminent cardiac arrest requiring immediate calcium and emergency dialysis.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module8/lesson68/hyperkalemia-emergency.jpg',
        imageAlt: 'Sine wave ECG pattern indicating hyperkalemia emergency'},
      {
        id: 'calcium-qt-correlation',
        title: 'Calcium-QT Interval Correlation',
        question: 'Ionized calcium 0.8 mmol/L (low). Expected QTc:',
        options: [
          '380ms',
          '420ms',
          '510ms',
          'Variable, no correlation'
        ],
        correctAnswer: 2,
        explanation: 'Hypocalcemia prolongs QT interval proportionally. Low calcium (0.8) typically produces QTc >500ms.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module8/lesson68/calcium-qt-correlation.jpg',
        imageAlt: 'Hypocalcemia causing significant QT prolongation'},
      {
        id: 'digitalis-toxicity-spectrum',
        title: 'Digitalis Toxicity Spectrum Recognition',
        question: 'Most specific ECG finding for digitalis toxicity:',
        options: [
          'ST depression',
          'Bidirectional ventricular tachycardia',
          'First-degree AV block',
          'Atrial fibrillation'
        ],
        correctAnswer: 1,
        explanation: 'Bidirectional VT is pathognomonic for digitalis toxicity, requiring immediate digoxin discontinuation and Fab antibodies.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module8/lesson68/digitalis-toxicity-spectrum.jpg',
        imageAlt: 'Bidirectional VT pattern characteristic of digitalis toxicity'},
      {
        id: 'antiarrhythmic-classification',
        title: 'Antiarrhythmic Drug Classification Mastery',
        question: 'Class III antiarrhythmic mechanism:',
        options: [
          'Sodium channel blockade',
          'Beta-adrenergic blockade',
          'Potassium channel blockade',
          'Calcium channel blockade'
        ],
        correctAnswer: 2,
        explanation: 'Class III drugs (amiodarone, sotalol) block potassium channels, prolonging repolarization and QT interval.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module8/lesson68/antiarrhythmic-classification.jpg',
        imageAlt: 'Class III antiarrhythmic effects on action potential'},
      {
        id: 'torsades-prevention',
        title: 'Torsades de Pointes Prevention Protocol',
        question: 'Essential prevention strategy for QT-prolonging drugs:',
        options: [
          'Weekly ECGs only',
          'Baseline QTc + electrolyte optimization + monitoring',
          'Drug level monitoring only',
          'Patient symptoms assessment'
        ],
        correctAnswer: 1,
        explanation: 'Comprehensive prevention requires baseline QTc, electrolyte optimization (Mg>2.0, K>4.0), and serial monitoring.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module8/lesson68/torsades-prevention.jpg',
        imageAlt: 'Comprehensive torsades prevention protocol'},
      {
        id: 'complex-polypharmacy',
        title: 'Complex Polypharmacy Case',
        question: 'Patient on amiodarone + digoxin + furosemide with K+ 2.8. Priority action:',
        options: [
          'Continue current medications',
          'Stop amiodarone only',
          'Aggressive potassium replacement before other interventions',
          'Increase furosemide dose'
        ],
        correctAnswer: 2,
        explanation: 'Severe hypokalemia (K+ 2.8) with digitalis creates extreme toxicity risk. Aggressive K+ replacement is urgent priority.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module8/lesson68/complex-polypharmacy.jpg',
        imageAlt: 'Complex polypharmacy case requiring urgent electrolyte correction'},
      {
        id: 'clinical-mastery-achieved',
        title: 'Clinical Integration Mastery',
        question: 'Most important principle for electrolyte-drug management:',
        options: [
          'Treat ECG changes only',
          'Monitor drug levels only',
          'Integrate clinical context + ECG + lab values + drug effects',
          'Follow protocols rigidly'
        ],
        correctAnswer: 2,
        explanation: 'Master clinicians integrate all data: clinical presentation, ECG changes, laboratory values, and drug effects for optimal patient care.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module8/lesson68/clinical-mastery-achieved.jpg',
        imageAlt: 'Clinical integration of all factors for optimal patient care',
        audio: {
          narrationUrl: 'audio/module8/lesson68/clinical-mastery-achieved.mp3',
          autoPlay: false
        }
      },
      {
        id: 'module-8-completion',
        title: 'Module 8 Mastery Complete',
        content: 'Congratulations! You have mastered electrolyte disorders and medication effects on ECG. You can now recognize emergencies, prevent toxicity, and manage complex polypharmacy safely.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module8/lesson68/module-8-completion.jpg',
        imageAlt: 'Module 8 completion celebrating mastery achievement'},
      {
        id: 'comprehensive-mastery',
        title: 'Comprehensive ECG Learning Mastery',
        content: 'You have completed all 8 modules of the ECG Learning Program. From basic interpretation to advanced electrolyte-drug interactions, you now possess comprehensive ECG expertise for clinical practice.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module8/lesson68/comprehensive-mastery.jpg',
        imageAlt: 'Complete ECG learning program mastery across all 8 modules',
        audio: {
          narrationUrl: 'audio/module8/lesson68/comprehensive-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "Module 8 mastery assessment demonstrates comprehensive understanding of electrolyte disorders and medication effects requiring clinical expertise and emergency recognition.",
    keyPoints: [
      "Emergency recognition of severe electrolyte disorders",
      "Drug classification and toxicity patterns",
      "Comprehensive prevention protocols",
      "Clinical integration of all assessment factors"
    ],
    resources: [
      {
        title: "Module 8 Review Summary",
        url: "https://youtube.com/watch?v=module8_review_summary",
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
