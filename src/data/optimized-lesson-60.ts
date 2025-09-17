import { Lesson } from '@/types/learning';

export const optimizedLesson60: Lesson = {
  id: 'lesson-7-8-optimized',
  moduleId: 'module-7',
  title: "Module 7 Emergency Mastery Assessment",
  description: "Comprehensive emergency arrhythmia and ACLS competency evaluation",
  order: 8,
  estimatedTime: 25,
  content: {
    type: 'mixed',
    introduction: "Demonstrate your mastery of emergency arrhythmias and life-saving interventions. This comprehensive assessment covers all critical emergency scenarios requiring immediate intervention.",
    sections: [
      {
        id: 'section-overview',
        title: "Emergency Mastery Assessment",
        content: "LIFE-SAVING COMPETENCY: PEA/Asystole → VF/VT → Unstable Rhythms → ACLS Integration → Team Leadership",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'emergency-assessment-intro',
        title: 'Emergency Arrhythmia Mastery Test',
        content: 'This comprehensive assessment evaluates your ability to recognize and manage life-threatening arrhythmias. You will demonstrate competency in emergency decision-making and ACLS protocols.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module7/lesson60/emergency-assessment-intro.jpg',
        imageAlt: 'Emergency arrhythmia assessment overview with critical scenarios',
        audio: {
          narrationUrl: 'audio/module7/lesson60/emergency-assessment-intro.mp3',
          autoPlay: false
        }
      },
      {
        id: 'pea-scenario',
        title: 'PEA Emergency Scenario',
        question: 'Patient in cardiac arrest shows organized narrow complex rhythm at 80 bpm with no pulse. Your immediate action:',
        options: [
          'Synchronized cardioversion',
          'Immediate CPR and epinephrine',
          'Atropine administration',
          'Check lead connections only'
        ],
        correctAnswer: 1,
        explanation: 'PEA (organized rhythm without pulse) requires immediate high-quality CPR and epinephrine while searching for reversible causes.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module7/lesson60/pea-scenario.jpg',
        imageAlt: 'PEA scenario with organized ECG but no pulse',
        audio: {
          narrationUrl: 'audio/module7/lesson60/pea-scenario.mp3',
          autoPlay: false
        }
      },
      {
        id: 'vf-recognition',
        title: 'Ventricular Fibrillation Recognition',
        question: 'This chaotic, irregular rhythm with no identifiable complexes requires:',
        options: [
          'Immediate CPR only',
          'Immediate defibrillation at 200J',
          'Atropine administration',
          'Synchronized cardioversion'
        ],
        correctAnswer: 1,
        explanation: 'VF requires immediate unsynchronized defibrillation at 200J (biphasic) followed by immediate CPR.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module7/lesson60/vf-recognition.jpg',
        imageAlt: 'Ventricular fibrillation requiring immediate defibrillation'},
      {
        id: 'unstable-tachycardia',
        title: 'Unstable Tachycardia Decision',
        question: 'SVT at 180 bpm with blood pressure 70/40 and altered mental status requires:',
        options: [
          'Adenosine trial first',
          'Immediate synchronized cardioversion',
          'Beta-blocker administration',
          'Observation only'
        ],
        correctAnswer: 1,
        explanation: 'Hemodynamically unstable tachycardia requires immediate synchronized cardioversion regardless of rhythm type.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/tachycardia_125bpm_3.png',
        imageAlt: 'Unstable SVT requiring immediate cardioversion'},
      {
        id: 'torsades-management',
        title: 'Torsades de Pointes Management',
        question: 'Patient with polymorphic VT showing "twisting" QRS complexes needs:',
        options: [
          'Amiodarone 300mg IV',
          'Magnesium sulfate 2g IV',
          'Procainamide infusion',
          'Beta-blocker therapy'
        ],
        correctAnswer: 1,
        explanation: 'Torsades de pointes requires magnesium sulfate as first-line treatment, even with normal serum magnesium levels.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module7/lesson60/torsades-management.jpg',
        imageAlt: 'Torsades de pointes requiring magnesium therapy'},
      {
        id: 'bradycardia-emergency',
        title: 'Emergency Bradycardia Response',
        question: 'Complete heart block with rate 25 bpm, hypotension, and altered mental status. First intervention:',
        options: [
          'Transcutaneous pacing immediately',
          'Atropine 1mg IV',
          'Dopamine infusion',
          'Observe for improvement'
        ],
        correctAnswer: 1,
        explanation: 'Atropine 1mg IV is first-line for unstable bradycardia, though less effective for complete heart block.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/bradycardia_40bpm.png',
        imageAlt: 'Complete heart block requiring immediate intervention'},
      {
        id: 'team-leadership',
        title: 'ACLS Team Leadership',
        question: 'As ACLS team leader during cardiac arrest, your primary role is:',
        options: [
          'Performing chest compressions',
          'Managing the airway personally',
          'Coordinating team efforts and making decisions',
          'Starting IV access'
        ],
        correctAnswer: 2,
        explanation: 'The team leader coordinates all team efforts, makes clinical decisions, and ensures quality CPR while delegating specific tasks.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module7/lesson60/team-leadership.jpg',
        imageAlt: 'ACLS team leader coordinating emergency response'},
      {
        id: 'module7-mastery-achievement',
        title: 'Module 7 Emergency Mastery Achieved',
        content: 'Congratulations! You have mastered emergency arrhythmia recognition and life-saving interventions. You can now confidently manage the most critical cardiac emergencies and lead ACLS teams.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module7/lesson60/module7-mastery-achievement.jpg',
        imageAlt: 'Module 7 completion certificate for emergency arrhythmia mastery',
        audio: {
          narrationUrl: 'audio/module7/lesson60/module7-mastery-achievement.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "You have achieved mastery of emergency arrhythmias and life-saving interventions. You can now manage critical cardiac emergencies with confidence.",
    keyPoints: [
      "Immediate recognition of life-threatening rhythms",
      "Appropriate emergency interventions for each rhythm type",
      "ACLS algorithm integration and team leadership",
      "Time-critical decision making in cardiac emergencies"
    ],
    resources: [
      {
        title: "Emergency Arrhythmia Mastery Review",
        url: "https://youtube.com/watch?v=emergency_mastery_review",
        type: "video"
      },
      {
        title: "ACLS Team Leadership Skills",
        url: "https://youtube.com/watch?v=acls_leadership",
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
