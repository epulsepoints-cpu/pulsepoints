import { Lesson } from '@/types/learning';

export const optimizedLesson65: Lesson = {
  id: 'lesson-8-5-optimized',
  moduleId: 'module-8',
  title: "Antiarrhythmic Drug Effects",
  description: "Recognition of Class I-IV antiarrhythmic drug effects on ECG parameters",
  order: 5,
  estimatedTime: 22,
  content: {
    type: 'mixed',
    introduction: "Master antiarrhythmic drug ECG effects using the Vaughan Williams classification. Each class has distinct ECG signatures that help monitor therapy and detect toxicity.",
    sections: [
      {
        id: 'section-overview',
        title: "Antiarrhythmic Drug Classes",
        content: "VAUGHAN WILLIAMS: Class I (Na+) → Class II (Beta) → Class III (K+) → Class IV (Ca++) → Specific ECG Effects",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'vaughan-williams-classification',
        title: 'Vaughan Williams Classification',
        content: 'Class I: Sodium channel blockers. Class II: Beta-blockers. Class III: Potassium channel blockers. Class IV: Calcium channel blockers. Each affects different ECG parameters.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module8/lesson65/vaughan-williams-classification.jpg',
        imageAlt: 'Vaughan Williams classification system with mechanisms',
        audio: {
          narrationUrl: 'audio/module8/lesson65/vaughan-williams-classification.mp3',
          autoPlay: false
        }
      },
      {
        id: 'class-i-effects',
        title: 'Class I: Sodium Channel Blockers',
        question: 'Class I antiarrhythmics (quinidine, procainamide, flecainide) primarily cause:',
        options: [
          'QT shortening',
          'QRS widening and PR prolongation',
          'Heart rate increase',
          'ST elevation'
        ],
        correctAnswer: 1,
        explanation: 'Class I drugs block sodium channels, slowing conduction and causing QRS widening and PR prolongation.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module8/lesson65/class-i-effects.jpg',
        imageAlt: 'Class I drug effects showing QRS widening and PR prolongation',
        audio: {
          narrationUrl: 'audio/module8/lesson65/class-i-effects.mp3',
          autoPlay: false
        }
      },
      {
        id: 'class-ii-beta-blockers',
        title: 'Class II: Beta-Blockers',
        content: 'Beta-blockers (metoprolol, propranolol) cause bradycardia, prolonged PR intervals, and can cause AV blocks. They reduce automaticity and slow AV conduction.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module8/lesson65/class-ii-beta-blockers.jpg',
        imageAlt: 'Beta-blocker effects showing bradycardia and PR prolongation'},
      {
        id: 'class-iii-potassium-blockers',
        title: 'Class III: Potassium Channel Blockers',
        question: 'Class III drugs (amiodarone, sotalol) characteristically cause:',
        options: [
          'QRS widening only',
          'QT prolongation',
          'PR shortening',
          'ST depression'
        ],
        correctAnswer: 1,
        explanation: 'Class III drugs block potassium channels, prolonging repolarization and causing QT prolongation.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module8/lesson65/class-iii-potassium-blockers.jpg',
        imageAlt: 'Class III drug effects showing QT prolongation'},
      {
        id: 'class-iv-calcium-blockers',
        title: 'Class IV: Calcium Channel Blockers',
        content: 'Calcium channel blockers (verapamil, diltiazem) slow AV nodal conduction, causing bradycardia, PR prolongation, and potential AV blocks.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module8/lesson65/class-iv-calcium-blockers.jpg',
        imageAlt: 'Calcium channel blocker effects on AV conduction'},
      {
        id: 'amiodarone-special-case',
        title: 'Amiodarone: Multi-Class Effects',
        question: 'Amiodarone has properties of which drug classes?',
        options: [
          'Class III only',
          'Class I and III only',
          'All four classes (I, II, III, IV)',
          'Class II and IV only'
        ],
        correctAnswer: 2,
        explanation: 'Amiodarone has properties of all four classes: sodium, beta, potassium, and calcium channel blocking effects.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module8/lesson65/amiodarone-special-case.jpg',
        imageAlt: 'Amiodarone multi-class effects on ECG parameters'},
      {
        id: 'proarrhythmic-effects',
        title: 'Pro-arrhythmic Drug Effects',
        content: 'Paradoxically, antiarrhythmics can cause arrhythmias: Class I can cause wide complex VT, Class III can cause torsades de pointes.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module8/lesson65/proarrhythmic-effects.jpg',
        imageAlt: 'Pro-arrhythmic effects of antiarrhythmic drugs'},
      {
        id: 'monitoring-strategy',
        title: 'ECG Monitoring Strategy',
        content: 'Monitor specific parameters: Class I - QRS width, Class II - heart rate/PR, Class III - QT interval, Class IV - PR interval/heart rate. Adjust doses based on ECG changes.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module8/lesson65/monitoring-strategy.jpg',
        imageAlt: 'ECG monitoring strategy for each antiarrhythmic class'},
      {
        id: 'antiarrhythmic-mastery',
        title: 'Antiarrhythmic Drug Mastery',
        content: 'You understand antiarrhythmic drug ECG effects. Remember: Class I = QRS widening, Class II = bradycardia, Class III = QT prolongation, Class IV = AV effects.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module8/lesson65/antiarrhythmic-mastery.jpg',
        imageAlt: 'Antiarrhythmic drug effects mastery summary',
        audio: {
          narrationUrl: 'audio/module8/lesson65/antiarrhythmic-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "Antiarrhythmic drugs have class-specific ECG effects: Class I widens QRS, Class II slows rate, Class III prolongs QT, Class IV affects AV conduction.",
    keyPoints: [
      "Class I (Na+ blockers): QRS widening, PR prolongation",
      "Class II (Beta blockers): Bradycardia, AV blocks",
      "Class III (K+ blockers): QT prolongation, torsades risk",
      "Class IV (Ca++ blockers): AV nodal effects"
    ],
    resources: [
      {
        title: "Antiarrhythmic Drug Classifications",
        url: "https://youtube.com/watch?v=antiarrhythmic_classes",
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
