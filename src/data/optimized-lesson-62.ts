import { Lesson } from '@/types/learning';

export const optimizedLesson62: Lesson = {
  id: 'lesson-8-2-optimized',
  moduleId: 'module-8',
  title: "Hypokalemia & Arrhythmias",
  description: "Recognition of hypokalemia ECG changes and associated arrhythmia risks",
  order: 2,
  estimatedTime: 16,
  content: {
    type: 'mixed',
    introduction: "Master hypokalemia recognition and arrhythmia prevention. Low potassium predisposes to dangerous ventricular arrhythmias and must be aggressively corrected.",
    sections: [
      {
        id: 'section-overview',
        title: "Hypokalemia Arrhythmia Risk",
        content: "ARRHYTHMIA TRIGGER: Low K+ → U Waves → QT Prolongation → VT/Torsades → Aggressive Replacement",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'hypokalemia-concept',
        title: 'Hypokalemia: Arrhythmia Substrate',
        content: 'Hypokalemia (K+ <3.5 mEq/L) predisposes to dangerous arrhythmias by prolonging repolarization and creating triggered activity. Aggressive correction is essential.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module8/lesson62/hypokalemia-concept.jpg',
        imageAlt: 'Hypokalemia effects on repolarization and arrhythmia risk',
        audio: {
          narrationUrl: 'audio/module8/lesson62/hypokalemia-concept.mp3',
          autoPlay: false
        }
      },
      {
        id: 'u-wave-recognition',
        title: 'U Wave Recognition',
        question: 'Prominent U waves in hypokalemia are best seen in:',
        options: [
          'Lead aVR only',
          'Lead V1 only',
          'Leads V2-V4',
          'Limb leads only'
        ],
        correctAnswer: 2,
        explanation: 'U waves are most prominent in precordial leads V2-V4 and become more obvious as potassium levels decrease.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module8/lesson62/u-wave-recognition.jpg',
        imageAlt: 'Prominent U waves in precordial leads indicating hypokalemia',
        audio: {
          narrationUrl: 'audio/module8/lesson62/u-wave-recognition.mp3',
          autoPlay: false
        }
      },
      {
        id: 'qt-prolongation',
        title: 'QT vs QTU Interval',
        content: 'Hypokalemia can create prominent U waves that merge with T waves, appearing as QT prolongation. Measure true QT interval by identifying the end of the T wave.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module8/lesson62/qt-prolongation.jpg',
        imageAlt: 'QT vs QTU interval measurement in hypokalemia'},
      {
        id: 'ventricular-arrhythmias',
        title: 'Hypokalemia-Induced VT Risk',
        question: 'Hypokalemia increases risk of which arrhythmia?',
        options: [
          'Atrial fibrillation only',
          'Ventricular tachycardia and torsades',
          'Bradycardia only',
          'AV block only'
        ],
        correctAnswer: 1,
        explanation: 'Hypokalemia significantly increases risk of ventricular tachycardia, torsades de pointes, and sudden cardiac death.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module8/lesson62/ventricular-arrhythmias.jpg',
        imageAlt: 'VT and torsades triggered by hypokalemia'},
      {
        id: 'digitalis-interaction',
        title: 'Hypokalemia + Digitalis = Danger',
        content: 'Hypokalemia greatly increases digitalis toxicity risk. Even therapeutic digitalis levels can cause toxicity when potassium is low. Monitor both levels closely.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module8/lesson62/digitalis-interaction.jpg',
        imageAlt: 'Hypokalemia enhancing digitalis toxicity risk'},
      {
        id: 'replacement-strategy',
        title: 'Potassium Replacement Strategy',
        question: 'Target potassium level for arrhythmia prevention:',
        options: [
          '>3.0 mEq/L',
          '>3.5 mEq/L',
          '>4.0 mEq/L',
          '>5.0 mEq/L'
        ],
        correctAnswer: 2,
        explanation: 'Target K+ >4.0 mEq/L for arrhythmia prevention, especially in cardiac patients or those on digitalis.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module8/lesson62/replacement-strategy.jpg',
        imageAlt: 'Potassium replacement targets for arrhythmia prevention'},
      {
        id: 'magnesium-cofactor',
        title: 'Magnesium: Essential Cofactor',
        content: 'Hypomagnesemia prevents effective potassium repletion. Always check and correct magnesium levels when treating hypokalemia. Target Mg++ >2.0 mg/dL.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module8/lesson62/magnesium-cofactor.jpg',
        imageAlt: 'Magnesium as essential cofactor for potassium repletion'},
      {
        id: 'hypokalemia-mastery',
        title: 'Hypokalemia Arrhythmia Mastery',
        content: 'You understand hypokalemia recognition and arrhythmia prevention. Remember: U waves = early sign, target K+ >4.0 mEq/L, correct magnesium too.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module8/lesson62/hypokalemia-mastery.jpg',
        imageAlt: 'Hypokalemia management summary for arrhythmia prevention',
        audio: {
          narrationUrl: 'audio/module8/lesson62/hypokalemia-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "Hypokalemia causes U waves and predisposes to ventricular arrhythmias. Target K+ >4.0 mEq/L and correct magnesium deficiency.",
    keyPoints: [
      "U waves most prominent in V2-V4 leads",
      "Increases risk of VT, torsades, and sudden death",
      "Target K+ >4.0 mEq/L for arrhythmia prevention",
      "Always correct magnesium deficiency concurrently"
    ],
    resources: [
      {
        title: "Hypokalemia Arrhythmia Prevention",
        url: "https://youtube.com/watch?v=hypokalemia_arrhythmias",
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
