import { Lesson } from '@/types/learning';

export const optimizedLesson57: Lesson = {
  id: 'lesson-7-5-optimized',
  moduleId: 'module-7',
  title: "Unstable Bradycardia - Emergency Pacing",
  description: "Recognition and emergency management of hemodynamically unstable bradycardia",
  order: 5,
  estimatedTime: 16,
  content: {
    type: 'mixed',
    introduction: "Master unstable bradycardia recognition and emergency pacing. When bradycardia causes hemodynamic compromise, immediate intervention with medications or pacing is life-saving.",
    sections: [
      {
        id: 'section-overview',
        title: "Unstable Bradycardia Emergency",
        content: "IMMEDIATE THREAT: Bradycardia + Instability → Atropine → Transcutaneous Pacing → Dopamine/Epinephrine → Permanent Pacing",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'unstable-bradycardia-concept',
        title: 'Unstable Bradycardia Definition',
        content: 'Unstable bradycardia combines slow heart rate (<60 bpm with symptoms, or <50 bpm) with hemodynamic compromise: hypotension, altered mental status, chest pain, or acute heart failure.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/bradycardia_48bpm_3.png',
        imageAlt: 'Unstable bradycardia with hemodynamic compromise signs',
        audio: {
          narrationUrl: 'audio/module7/lesson57/unstable-bradycardia-concept.mp3',
          autoPlay: false
        }
      },
      {
        id: 'bradycardia-causes',
        title: 'Unstable Bradycardia Causes',
        question: 'Which condition commonly causes unstable bradycardia?',
        options: [
          'Sinus tachycardia',
          'Complete heart block with slow escape rhythm',
          'Atrial fibrillation with RVR',
          'Normal sinus rhythm'
        ],
        correctAnswer: 1,
        explanation: 'Complete heart block with slow ventricular escape rhythm often causes hemodynamic instability requiring immediate intervention.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/bradycardia_50bpm.png',
        imageAlt: 'Complete heart block causing hemodynamic instability',
        audio: {
          narrationUrl: 'audio/module7/lesson57/bradycardia-causes.mp3',
          autoPlay: false
        }
      },
      {
        id: 'atropine-first-line',
        title: 'Atropine: First-Line Treatment',
        content: 'Atropine 1mg IV is first-line for unstable bradycardia. Can repeat every 3-5 minutes up to 3mg total. Less effective for infranodal blocks (Mobitz II, complete heart block).',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module7/lesson57/atropine-first-line.jpg',
        imageAlt: 'Atropine dosing and administration for unstable bradycardia'},
      {
        id: 'transcutaneous-pacing',
        title: 'Transcutaneous Pacing Setup',
        question: 'For transcutaneous pacing in unstable bradycardia:',
        options: [
          'Start at minimum output',
          'Start at 60 mA and increase until capture',
          'Use only if atropine successful',
          'Wait for permanent pacemaker'
        ],
        correctAnswer: 1,
        explanation: 'Start at 60 mA and increase gradually until electrical capture is achieved, then increase 10 mA above threshold for safety margin.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module7/lesson57/transcutaneous-pacing.jpg',
        imageAlt: 'Transcutaneous pacing setup with proper pad placement'},
      {
        id: 'pacing-capture',
        title: 'Electrical vs Mechanical Capture',
        content: 'Electrical capture: pacing spike followed by wide QRS. Mechanical capture: palpable pulse with each paced beat. Must achieve both for effective pacing.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module7/lesson57/pacing-capture.jpg',
        imageAlt: 'Examples of electrical and mechanical capture in pacing'},
      {
        id: 'vasoactive-drugs',
        title: 'Vasoactive Medications',
        question: 'If atropine and pacing ineffective, next intervention:',
        options: [
          'Adenosine',
          'Dopamine 5-20 mcg/kg/min or epinephrine 2-10 mcg/min',
          'Amiodarone',
          'Cardioversion'
        ],
        correctAnswer: 1,
        explanation: 'Dopamine or epinephrine infusions can support blood pressure and heart rate when atropine and pacing are inadequate.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module7/lesson57/vasoactive-drugs.jpg',
        imageAlt: 'Vasoactive drug dosing for unstable bradycardia'},
      {
        id: 'permanent-pacing-indications',
        title: 'Permanent Pacemaker Indications',
        content: 'Indications: symptomatic bradycardia unresponsive to reversible causes, complete heart block, Mobitz II AV block, symptomatic sinus node dysfunction.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module7/lesson57/permanent-pacing-indications.jpg',
        imageAlt: 'Class I indications for permanent pacemaker implantation'},
      {
        id: 'bradycardia-mastery',
        title: 'Unstable Bradycardia Mastery',
        content: 'You understand unstable bradycardia management. Remember: symptomatic bradycardia = atropine first, then transcutaneous pacing, then vasoactive drugs, then permanent pacing.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/bradycardia_52bpm_4.png',
        imageAlt: 'Bradycardia emergency management algorithm summary',
        audio: {
          narrationUrl: 'audio/module7/lesson57/bradycardia-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "Unstable bradycardia with hemodynamic compromise requires immediate intervention: atropine, transcutaneous pacing, and vasoactive drugs.",
    keyPoints: [
      "Unstable = bradycardia + hemodynamic compromise",
      "Atropine 1mg IV first-line (up to 3mg total)",
      "Transcutaneous pacing for atropine failure",
      "Consider permanent pacing for persistent symptomatic bradycardia"
    ],
    resources: [
      {
        title: "Emergency Bradycardia Management",
        url: "https://youtube.com/watch?v=emergency_bradycardia",
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
