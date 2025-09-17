import { Lesson } from '@/types/learning';

export const optimizedLesson44: Lesson = {
  id: 'lesson-5-8-optimized',
  moduleId: 'module-5',
  title: "Ventricular Rhythms Integration",
  description: "Comprehensive ventricular rhythm mastery and clinical integration",
  order: 8,
  estimatedTime: 20,
  content: {
    type: 'mixed',
    introduction: "Integrate all ventricular rhythm knowledge for comprehensive clinical decision-making and emergency management.",
    sections: [
      {
        id: 'section-overview',
        title: "Ventricular Mastery Integration",
        content: "COMPLETE MASTERY: All VT Types → Emergency Recognition → Clinical Management → Module 5 Completion",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'integration-intro',
        title: 'Ventricular Rhythms Integration',
        content: 'This lesson integrates all ventricular rhythm knowledge into a comprehensive approach for clinical practice, from benign PVCs to life-threatening emergencies.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module5/lesson44/integration-intro.jpg',
        imageAlt: 'Complete spectrum of ventricular rhythms from escape to fibrillation',
        audio: {
          narrationUrl: 'audio/module5/lesson44/integration-intro.mp3',
          autoPlay: false
        }
      },
      {
        id: 'rhythm-spectrum',
        title: 'Complete Ventricular Spectrum',
        content: 'Ventricular rhythms span from life-saving escape rhythms (20-40 bpm) through accelerated rhythms (50-100 bpm) to life-threatening tachycardia (>100 bpm) and chaotic fibrillation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module5/lesson44/rhythm-spectrum.jpg',
        imageAlt: 'Rate-based classification of all ventricular rhythms with clinical significance',
        audio: {
          narrationUrl: 'audio/module5/lesson44/rhythm-spectrum.mp3',
          autoPlay: false
        }
      },
      {
        id: 'emergency-algorithm',
        title: 'Emergency Recognition Algorithm',
        question: 'In an unconscious patient, the most important initial rhythm assessment is:',
        options: [
          'Measuring exact QRS width',
          'Determining if rhythm is shockable (VF/VT)',
          'Counting PVC frequency',
          'Analyzing QRS morphology'
        ],
        correctAnswer: 1,
        explanation: 'In cardiac arrest, immediately determining if the rhythm is shockable (VF/pulseless VT) is critical for survival.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module5/lesson44/emergency-algorithm.jpg',
        imageAlt: 'ACLS algorithm emphasizing shockable vs non-shockable rhythm determination'},
      {
        id: 'differential-diagnosis',
        title: 'Ventricular Rhythm Differential',
        content: 'Key differentials include: VT vs SVT with aberrancy, VF vs artifact, accelerated ventricular vs accelerated junctional, and PVCs vs PACs with aberrancy.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module5/lesson44/differential-diagnosis.jpg',
        imageAlt: 'Side-by-side comparisons of challenging ventricular rhythm differentials'},
      {
        id: 'treatment-priorities',
        title: 'Treatment Priority Matrix',
        question: 'Treatment priority order for ventricular rhythms should be:',
        options: [
          'VF → Pulseless VT → Stable VT → Frequent PVCs',
          'Frequent PVCs → Stable VT → Pulseless VT → VF',
          'Stable VT → VF → Pulseless VT → Frequent PVCs',
          'All require equal immediate treatment'
        ],
        correctAnswer: 0,
        explanation: 'Treatment priority follows hemodynamic impact: VF (immediate death) → Pulseless VT → Stable VT → PVCs (often benign).',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module5/lesson44/treatment-priorities.jpg',
        imageAlt: 'Treatment priority matrix based on hemodynamic impact and urgency'},
      {
        id: 'long-term-management',
        title: 'Long-term Management Strategies',
        content: 'Long-term management includes risk stratification, lifestyle modifications, medication optimization, device therapy consideration, and regular monitoring based on arrhythmia burden.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module5/lesson44/long-term-management.jpg',
        imageAlt: 'Comprehensive long-term management algorithm for ventricular arrhythmias'},
      {
        id: 'clinical-integration',
        title: 'Clinical Integration Challenge',
        question: 'A patient with ischemic cardiomyopathy has frequent multiform PVCs and NSVT runs. The next step is:',
        options: [
          'Reassurance - PVCs are always benign',
          'Electrophysiology evaluation for ICD',
          'Immediate cardioversion',
          'Beta-blocker discontinuation'
        ],
        correctAnswer: 1,
        explanation: 'In ischemic cardiomyopathy with complex ventricular arrhythmias, electrophysiology evaluation for possible ICD is indicated.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module5/lesson44/clinical-integration.jpg',
        imageAlt: 'Clinical case showing complex decision-making for high-risk patient',
        audio: {
          narrationUrl: 'audio/module5/lesson44/clinical-integration.mp3',
          autoPlay: false
        }
      },
      {
        id: 'module5-completion',
        title: 'Module 5 Mastery Complete',
        content: 'Congratulations! You have mastered ventricular rhythm recognition from basic escape rhythms to complex emergencies. You can now confidently manage the full spectrum of ventricular arrhythmias.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module5/lesson44/module5-completion.jpg',
        imageAlt: 'Module 5 completion certificate with pathway to advanced cardiac rhythm mastery'}
    ],
    summary: "Complete ventricular rhythm mastery achieved. You can now recognize, differentiate, and manage all ventricular arrhythmias from benign to life-threatening.",
    keyPoints: [
      "Emergency recognition prioritizes shockable rhythms (VF/VT)",
      "Treatment priority follows hemodynamic impact",
      "Long-term management requires risk stratification",
      "Clinical context determines significance of ventricular arrhythmias"
    ],
    resources: [
      {
        title: "Module 5 Complete Review",
        url: "https://youtube.com/watch?v=module5_complete_review",
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
