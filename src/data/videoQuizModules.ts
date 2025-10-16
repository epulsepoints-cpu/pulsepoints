// Video-Quiz mapping for Learn Mode Enhancement
// Maps YouTube videos to ECG categories with targeted quizzes

export interface VideoQuizModule {
  videoId: string;
  title: string;
  description: string;
  category: string;
  duration: number;
  questions: {
    id: string;
    question: string;
    imageUrl: string;
    correctAnswer: string;
    options: string[];
    explanation: string;
    difficulty: 'easy' | 'medium' | 'hard';
  }[];
}

export const VIDEO_QUIZ_MODULES: VideoQuizModule[] = [
  // Normal Sinus Rhythm Module
  {
    videoId: 'e37rJqP6-aM',
    title: '3D Heart Anatomy Visualization',
    description: 'Understanding heart structure and normal electrical conduction through 3D animation',
    category: 'basic',
    duration: 600,
    questions: [
      {
        id: 'basic_q1',
        question: 'What is the normal heart rate range for sinus rhythm?',
        imageUrl: '/ecg/medical_accurate/normal_sinus_75bpm_2.png',
        correctAnswer: '60-100 bpm',
        options: ['40-60 bpm', '60-100 bpm', '100-120 bpm', '120-150 bpm'],
        explanation: 'Normal sinus rhythm has a heart rate between 60-100 beats per minute, originating from the SA node.',
        difficulty: 'easy'
      },
      {
        id: 'basic_q2', 
        question: 'Which component represents atrial depolarization?',
        imageUrl: '/ecg/medical_accurate/normal_60bpm.png',
        correctAnswer: 'P wave',
        options: ['P wave', 'QRS complex', 'T wave', 'U wave'],
        explanation: 'The P wave represents atrial depolarization as electrical impulses spread through the atria.',
        difficulty: 'easy'
      },
      {
        id: 'basic_q3',
        question: 'What is the normal PR interval range?',
        imageUrl: '/ecg/medical_accurate/normal_sinus_85bpm_3.png',
        correctAnswer: '120-200 ms',
        options: ['80-120 ms', '120-200 ms', '200-280 ms', '280-400 ms'],
        explanation: 'Normal PR interval is 120-200 ms (3-5 small squares), representing AV conduction time.',
        difficulty: 'medium'
      },
      {
        id: 'basic_q4',
        question: 'In normal sinus rhythm, the QRS duration should be:',
        imageUrl: '/ecg/medical_accurate/normal_90bpm.png',
        correctAnswer: 'Less than 120 ms',
        options: ['Less than 80 ms', 'Less than 120 ms', '120-160 ms', 'More than 160 ms'],
        explanation: 'Normal QRS duration is less than 120 ms (3 small squares), indicating normal ventricular conduction.',
        difficulty: 'medium'
      },
      {
        id: 'basic_q5',
        question: 'What makes this rhythm "sinus" rhythm?',
        imageUrl: '/ecg/medical_accurate/normal_sinus_95bpm_4.png',
        correctAnswer: 'P waves before each QRS',
        options: ['Fast heart rate', 'P waves before each QRS', 'Wide QRS complexes', 'Irregular rhythm'],
        explanation: 'Sinus rhythm is characterized by P waves before each QRS complex, indicating SA node origin.',
        difficulty: 'easy'
      }
    ]
  },

  // Atrial Fibrillation Module
  {
    videoId: 'Xa-YkT3gJWU',
    title: 'What is Atrial Fibrillation?',
    description: 'Understanding atrial fibrillation mechanisms, causes, and ECG recognition',
    category: 'atrial_fibrillation',
    duration: 480,
    questions: [
      {
        id: 'afib_q1',
        question: 'What is the hallmark ECG finding in atrial fibrillation?',
        imageUrl: '/ecg/medical_accurate/atrial_fibrillation_110bpm_4.png',
        correctAnswer: 'Irregularly irregular rhythm',
        options: ['Regular P waves', 'Irregularly irregular rhythm', 'Wide QRS complexes', 'Long PR intervals'],
        explanation: 'Atrial fibrillation shows an irregularly irregular rhythm with no discernible P waves and fibrillatory waves.',
        difficulty: 'medium'
      },
      {
        id: 'afib_q2',
        question: 'In atrial fibrillation, what replaces normal P waves?',
        imageUrl: '/ecg/medical_accurate/atrial_fibrillation_130bpm_6.png',
        correctAnswer: 'Fibrillatory waves',
        options: ['Flutter waves', 'Fibrillatory waves', 'Delta waves', 'J waves'],
        explanation: 'Atrial fibrillation shows fibrillatory (f) waves instead of organized P waves due to chaotic atrial activity.',
        difficulty: 'medium'
      },
      {
        id: 'afib_q3',
        question: 'What is the typical ventricular rate in uncontrolled atrial fibrillation?',
        imageUrl: '/ecg/medical_accurate/atrial_fibrillation_150bpm_8.png',
        correctAnswer: '100-180 bpm',
        options: ['60-100 bpm', '100-180 bpm', '180-250 bpm', '250-350 bpm'],
        explanation: 'Uncontrolled atrial fibrillation typically has ventricular rates of 100-180 bpm due to irregular AV conduction.',
        difficulty: 'medium'
      },
      {
        id: 'afib_q4',
        question: 'Which stroke risk factor is MOST important in atrial fibrillation?',
        imageUrl: '/ecg/medical_accurate/atrial_fibrillation_85bpm_2.png',
        correctAnswer: 'Thromboembolic risk',
        options: ['Heart rate', 'Thromboembolic risk', 'QRS width', 'PR interval'],
        explanation: 'The most critical concern in atrial fibrillation is stroke risk due to thrombus formation in fibrillating atria.',
        difficulty: 'hard'
      },
      {
        id: 'afib_q5',
        question: 'How does atrial fibrillation affect cardiac output?',
        imageUrl: '/ecg/medical_accurate/atrial_fibrillation_140bpm_7.png',
        correctAnswer: 'Loss of atrial kick reduces output',
        options: ['No effect on output', 'Loss of atrial kick reduces output', 'Always increases output', 'Only affects during exercise'],
        explanation: 'Atrial fibrillation causes loss of organized atrial contraction (atrial kick), reducing cardiac output by 15-20%.',
        difficulty: 'hard'
      }
    ]
  },

  // Ventricular Tachycardia Module  
  {
    videoId: 'prcxfvoE4C4',
    title: 'Ventricular Fibrillation - Terminal Rhythm',
    description: 'Understanding life-threatening ventricular arrhythmias and emergency management',
    category: 'ventricular_tachycardia',
    duration: 480,
    questions: [
      {
        id: 'vt_q1',
        question: 'What characterizes ventricular tachycardia on ECG?',
        imageUrl: '/ecg/medical_accurate/ventricular_tachycardia_180bpm_3.png',
        correctAnswer: 'Wide QRS complexes >150 bpm',
        options: ['Narrow QRS <100 bpm', 'Wide QRS complexes >150 bpm', 'Irregular rhythm', 'P waves present'],
        explanation: 'Ventricular tachycardia shows wide QRS complexes (>120 ms) at rates typically >150 bpm with regular rhythm.',
        difficulty: 'medium'
      },
      {
        id: 'vt_q2',
        question: 'What is the immediate treatment for unstable VT?',
        imageUrl: '/ecg/medical_accurate/ventricular_tachycardia_195bpm_4.png',
        correctAnswer: 'Synchronized cardioversion',
        options: ['IV medications', 'Synchronized cardioversion', 'Observation', 'Pacemaker insertion'],
        explanation: 'Unstable ventricular tachycardia requires immediate synchronized cardioversion to restore normal rhythm.',
        difficulty: 'hard'
      },
      {
        id: 'vt_q3',
        question: 'How can you differentiate VT from SVT with aberrancy?',
        imageUrl: '/ecg/medical_accurate/ventricular_tachycardia_210bpm_5.png',
        correctAnswer: 'AV dissociation in VT',
        options: ['Heart rate', 'AV dissociation in VT', 'QRS morphology only', 'Patient symptoms'],
        explanation: 'AV dissociation (independent P waves) is pathognomonic for VT and helps differentiate from SVT with aberrancy.',
        difficulty: 'hard'
      },
      {
        id: 'vt_q4',
        question: 'What is the typical heart rate range in ventricular tachycardia?',
        imageUrl: '/ecg/medical_accurate/vtach_180bpm.png',
        correctAnswer: '150-250 bpm',
        options: ['100-150 bpm', '150-250 bpm', '250-350 bpm', '350-450 bpm'],
        explanation: 'Ventricular tachycardia typically has rates between 150-250 bpm, faster than most supraventricular rhythms.',
        difficulty: 'medium'
      },
      {
        id: 'vt_q5',
        question: 'Which medication is first-line for stable monomorphic VT?',
        imageUrl: '/ecg/medical_accurate/vtach_160bpm.png',
        correctAnswer: 'Amiodarone',
        options: ['Lidocaine', 'Amiodarone', 'Adenosine', 'Digoxin'],
        explanation: 'Amiodarone is the first-line antiarrhythmic for stable monomorphic ventricular tachycardia.',
        difficulty: 'hard'
      }
    ]
  },

  // Bradycardia Module
  {
    videoId: 'U3926ZrAosM',
    title: 'Adult Bradycardia Algorithm (ACLS)',
    description: 'ACLS approach to bradycardia management and treatment protocols',
    category: 'bradycardia',
    duration: 600,
    questions: [
      {
        id: 'brady_q1',
        question: 'At what heart rate is bradycardia typically defined?',
        imageUrl: '/ecg/medical_accurate/bradycardia_45bpm.png',
        correctAnswer: 'Less than 60 bpm',
        options: ['Less than 50 bpm', 'Less than 60 bpm', 'Less than 70 bpm', 'Less than 80 bpm'],
        explanation: 'Bradycardia is typically defined as a heart rate less than 60 beats per minute.',
        difficulty: 'easy'
      },
      {
        id: 'brady_q2',
        question: 'What is the first consideration in bradycardia management?',
        imageUrl: '/ecg/medical_accurate/bradycardia_40bpm.png',
        correctAnswer: 'Assess for symptoms and hemodynamic compromise',
        options: ['Give atropine immediately', 'Assess for symptoms and hemodynamic compromise', 'Insert pacemaker', 'Give epinephrine'],
        explanation: 'The first step is assessing symptoms and hemodynamic stability - not all bradycardia requires treatment.',
        difficulty: 'medium'
      },
      {
        id: 'brady_q3',
        question: 'Which medication is first-line for symptomatic bradycardia?',
        imageUrl: '/ecg/medical_accurate/bradycardia_48bpm_3.png',
        correctAnswer: 'Atropine 0.5-1 mg IV',
        options: ['Epinephrine', 'Atropine 0.5-1 mg IV', 'Dopamine', 'Isoproterenol'],
        explanation: 'Atropine 0.5-1 mg IV is the first-line treatment for symptomatic bradycardia by blocking vagal effects.',
        difficulty: 'medium'
      },
      {
        id: 'brady_q4',
        question: 'When is transcutaneous pacing indicated in bradycardia?',
        imageUrl: '/ecg/medical_accurate/bradycardia_35bpm_1.png',
        correctAnswer: 'Hemodynamically significant bradycardia unresponsive to atropine',
        options: ['All bradycardia <50 bpm', 'Hemodynamically significant bradycardia unresponsive to atropine', 'Asymptomatic bradycardia', 'Before trying medications'],
        explanation: 'Transcutaneous pacing is indicated for hemodynamically significant bradycardia that doesn\'t respond to atropine.',
        difficulty: 'hard'
      },
      {
        id: 'brady_q5',
        question: 'What rhythm is shown with this severe bradycardia?',
        imageUrl: '/ecg/medical_accurate/bradycardia_35bpm.png',
        correctAnswer: 'Severe sinus bradycardia',
        options: ['First degree AV block', 'Severe sinus bradycardia', 'Second degree AV block', 'Complete heart block'],
        explanation: 'This shows severe sinus bradycardia with visible P waves and 1:1 AV conduction at very slow rate.',
        difficulty: 'medium'
      }
    ]
  },

  // Tachycardia Module
  {
    videoId: 'bDyZ76QzA9s',
    title: 'Types and ECG Features of Supraventricular Tachycardia (SVT)',
    description: 'Understanding different types of SVT and their ECG characteristics',
    category: 'tachycardia',
    duration: 420,
    questions: [
      {
        id: 'tachy_q1',
        question: 'What heart rate defines tachycardia?',
        imageUrl: '/ecg/medical_accurate/tachycardia_115bpm_2.png',
        correctAnswer: 'Greater than 100 bpm',
        options: ['Greater than 90 bpm', 'Greater than 100 bpm', 'Greater than 110 bpm', 'Greater than 120 bpm'],
        explanation: 'Tachycardia is defined as a heart rate greater than 100 beats per minute.',
        difficulty: 'easy'
      },
      {
        id: 'tachy_q2',
        question: 'How do you differentiate SVT from sinus tachycardia?',
        imageUrl: '/ecg/medical_accurate/supraventricular_tachycardia_180bpm_2.png',
        correctAnswer: 'P wave morphology and rate',
        options: ['QRS width only', 'P wave morphology and rate', 'Heart rate alone', 'Patient age'],
        explanation: 'SVT typically has abnormal P waves (if visible) and abrupt onset/offset, unlike gradual sinus tachycardia.',
        difficulty: 'hard'
      },
      {
        id: 'tachy_q3',
        question: 'What is the typical heart rate range in SVT?',
        imageUrl: '/ecg/medical_accurate/supraventricular_tachycardia_200bpm_3.png',
        correctAnswer: '150-220 bpm',
        options: ['100-150 bpm', '150-220 bpm', '220-300 bpm', '300-400 bpm'],
        explanation: 'Supraventricular tachycardia typically presents with heart rates between 150-220 bpm.',
        difficulty: 'medium'
      },
      {
        id: 'tachy_q4',
        question: 'What is the first-line treatment for stable SVT?',
        imageUrl: '/ecg/medical_accurate/tachycardia_145bpm_5.png',
        correctAnswer: 'Vagal maneuvers',
        options: ['Cardioversion', 'Vagal maneuvers', 'Beta-blockers', 'Amiodarone'],
        explanation: 'Vagal maneuvers (Valsalva, carotid massage) are first-line for stable SVT by increasing AV block.',
        difficulty: 'medium'
      },
      {
        id: 'tachy_q5',
        question: 'If vagal maneuvers fail in SVT, what medication is next?',
        imageUrl: '/ecg/medical_accurate/tachycardia_155bpm_6.png',
        correctAnswer: 'Adenosine 6 mg IV',
        options: ['Metoprolol', 'Adenosine 6 mg IV', 'Diltiazem', 'Digoxin'],
        explanation: 'Adenosine 6 mg IV rapid push is the next step after failed vagal maneuvers in stable SVT.',
        difficulty: 'medium'
      }
    ]
  }
];

export default VIDEO_QUIZ_MODULES;