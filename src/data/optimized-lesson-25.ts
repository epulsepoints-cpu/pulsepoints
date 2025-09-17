import { Lesson } from '../types/learning';

export const optimizedLesson25: Lesson = {
  id: 'lesson-3-5-optimized',
  moduleId: 'module-3',
  title: "Multifocal Atrial Tachycardia (MAT) Mastery",
  description: "Master multifocal atrial tachycardia through 6 focused learning units: MAT Foundation, Multiple P Wave Recognition, Rate Analysis, Differential Diagnosis, Clinical Context, and Management Strategies",
  order: 5,
  estimatedTime: 45,
  completed: false,
  attempts: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  content: {
    type: 'mixed',
    introduction: "Master MAT Mastery! Master the complex arrhythmia with multiple atrial foci through 6 progressive units with slides, audio, interactive content, and quizzes. Build expertise in recognition, analysis, and clinical management.",
    summary: "Master multifocal atrial tachycardia recognition and management through comprehensive units covering definition, mechanisms, ECG characteristics, and clinical applications.",
    keyPoints: [
      "MAT is irregular tachycardia with ≥3 different P wave morphologies",
      "Multiple atrial foci fire independently creating chaotic rhythm",
      "Rate typically 100-150 bpm with varying P-P intervals",
      "Distinguished from other arrhythmias by multifocal P waves",
      "Clinical management focuses on underlying causes"
    ],
    resources: [
      {
        title: "Interactive ECG examples with multifocal P waves",
        url: "images/module3/lesson25/ecg-examples.jpg",
        type: "reference"
      },
      {
        title: "Audio explanations of MAT mechanisms", 
        url: "audio/module3/lesson25/mat-mechanisms.mp3",
        type: "reference"
      },
      {
        title: "Differential diagnosis comparison charts",
        url: "images/module3/lesson25/differential-diagnosis.jpg", 
        type: "reference"
      }
    ],
    sections: [
      {
        id: 'section-overview',
        title: "Your MAT Learning Journey",
        content: "UNIT 1: MAT Foundation → UNIT 2: Multiple P Wave Recognition → UNIT 3: Rate Analysis → UNIT 4: Differential Diagnosis → UNIT 5: Clinical Context → UNIT 6: Management Strategies",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // YouTube Video: SVT Types and Features
      {
        id: 'youtube-svt-types',
        title: 'Types and ECG Features of SVT',
        content: 'Different types of SVT and their ECG characteristics. Essential for understanding supraventricular tachycardias like MAT!',
        type: 'youtube',
        youtubeId: 'bDyZ76QzA9s',
        videoDuration: 600,
        minimumWatchTime: 480,
        requireFullWatch: false,
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        hint: 'Master all types of supraventricular tachycardias!'
      },

      // YouTube Video: PVCs Analysis
      {
        id: 'youtube-pvcs',
        title: 'Premature Ventricular Contractions (PVCs)',
        content: 'Understanding PVCs - recognition and clinical significance. Important for differential diagnosis with MAT!',
        type: 'youtube',
        youtubeId: 'N3UD7xcECeU',
        videoDuration: 480,
        minimumWatchTime: 360,
        requireFullWatch: false,
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        hint: 'Distinguish PVCs from other complex rhythms!'
      },
      
      // UNIT 1: MAT FOUNDATION (7 slides)
      {
        id: 'unit1-intro',
        title: 'Unit 1: MAT Foundation',
        content: 'Start your MAT mastery! Learn the fundamental concepts of multifocal atrial tachycardia - an irregular rhythm with multiple atrial pacemakers firing simultaneously.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module3/lesson25/unit1/mat-foundation.jpg',
        imageAlt: 'MAT foundation overview',
        hint: 'Multiple atrial foci working together!'
      },
      
      {
        id: 'mat-definition',
        title: 'MAT Definition and Characteristics',
        content: 'DEFINITION: Irregular tachycardia with ≥3 different P wave morphologies. RATE: Typically 100-150 bpm. KEY FEATURE: Multiple atrial pacemakers competing. PATTERN: Chaotic atrial activity with varying P-P intervals.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module3/lesson25/unit1/mat-definition.jpg',
        imageAlt: 'MAT definition and key characteristics',
        hint: 'Multiple personalities in one heart!'
      },

      {
        id: 'multifocal-mechanism',
        title: 'Multifocal Mechanism',
        content: 'PATHOPHYSIOLOGY: Multiple ectopic atrial foci fire independently. COMPETING PACEMAKERS: Each focus has different automaticity. CONDUCTION: All impulses conducted through AV node. IRREGULARITY: Results from varying focus activation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: 'images/module3/lesson25/unit1/multifocal-mechanism.jpg',
        imageAlt: 'MAT multifocal mechanism explanation',
        hint: 'Orchestra without a conductor!'
      }
    ]
  },
  tasks: []
};
