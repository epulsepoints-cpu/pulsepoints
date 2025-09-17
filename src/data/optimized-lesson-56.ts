import { Lesson } from '@/types/learning';

export const optimizedLesson56: Lesson = {
  id: 'lesson-7-4-optimized',
  moduleId: 'module-7',
  title: "Ventricular Fibrillation & Pulseless VT",
  description: "Recognition and emergency defibrillation of shockable rhythms - VF and pulseless VT",
  order: 4,
  estimatedTime: 20,
  content: {
    type: 'mixed',
    introduction: "Master VF and pulseless VT recognition and emergency defibrillation. These shockable rhythms require immediate defibrillation for survival - every second counts.",
    sections: [
      {
        id: 'section-overview',
        title: "Shockable Rhythms Emergency",
        content: "IMMEDIATE DEFIBRILLATION: VF/Pulseless VT → Charge to 200J → Clear & Shock → CPR → Epinephrine → Repeat",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'shockable-rhythms-intro',
        title: 'Shockable Rhythms: VF & Pulseless VT',
        content: 'Ventricular fibrillation and pulseless ventricular tachycardia are shockable rhythms requiring immediate defibrillation. Early defibrillation is the most important intervention for survival.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module7/lesson56/shockable-rhythms-intro.jpg',
        imageAlt: 'VF and pulseless VT examples showing shockable rhythms',
        audio: {
          narrationUrl: 'audio/module7/lesson56/shockable-rhythms-intro.mp3',
          autoPlay: false
        }
      },

      // 🎥 ECGkid ACLS Master Class: Shockable vs Non-Shockable Rhythms
      {
        id: 'ecgkid-acls-rhythms',
        title: '🎥 ACLS Master Class: Shockable & Non-Shockable Rhythms Recognition',
        content: 'Essential ECGkid ACLS guide! Master the critical decision: shock or no shock? Learn systematic recognition of shockable (VF/pulseless VT) vs non-shockable rhythms according to ACLS guidelines.',
        type: 'youtube',
        layout: 'centered',
        backgroundColor: '#dc2626',
        textColor: '#ffffff',
        animation: 'fade',
        youtubeId: 'C3Ab00QPF3w',
        videoDuration: 287, // 4 minutes, 47 seconds
        minimumWatchTime: 240, // 4 minutes minimum - critical for emergency
        requireFullWatch: true, // Essential for emergency providers
        imageUrl: '/ecg/medical_accurate/vfib_coarse.png',
        imageAlt: 'ECGkid ACLS rhythms recognition on AED',
        hint: '🚨 Master ACLS rhythm recognition - shock or no shock decision!',
        highlights: [
          'ACLS guidelines rhythm recognition',
          'Shockable vs non-shockable decision',
          'AED operation principles',
          'Emergency provider essential knowledge'
        ]
      },
      {
        id: 'vf-recognition',
        title: 'Ventricular Fibrillation Recognition',
        question: 'Ventricular fibrillation is characterized by:',
        options: [
          'Regular wide QRS complexes',
          'Chaotic, irregular waveforms with no identifiable QRS',
          'Normal P waves with wide QRS',
          'Complete flatline'
        ],
        correctAnswer: 1,
        explanation: 'VF shows chaotic, irregular electrical activity with no identifiable P waves, QRS complexes, or T waves.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module7/lesson56/vf-recognition.jpg',
        imageAlt: 'VF pattern showing chaotic irregular waveforms',
        audio: {
          narrationUrl: 'audio/module7/lesson56/vf-recognition.mp3',
          autoPlay: false
        }
      },
      {
        id: 'coarse-vs-fine-vf',
        title: 'Coarse vs Fine Ventricular Fibrillation',
        content: 'Coarse VF (amplitude >3mm) responds better to defibrillation than fine VF (<3mm). Fine VF may need CPR first to improve myocardial energy stores before shocking.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module7/lesson56/coarse-vs-fine-vf.jpg',
        imageAlt: 'Comparison of coarse VF vs fine VF with amplitude differences'},
      {
        id: 'pulseless-vt',
        title: 'Pulseless Ventricular Tachycardia',
        question: 'Pulseless VT differs from VT with pulse by:',
        options: [
          'Different ECG morphology',
          'Absence of palpable pulse despite organized rhythm',
          'Slower heart rate',
          'Presence of P waves'
        ],
        correctAnswer: 1,
        explanation: 'Pulseless VT shows organized wide complex tachycardia on ECG but no palpable pulse, requiring defibrillation like VF.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module7/lesson56/pulseless-vt.jpg',
        imageAlt: 'Pulseless VT showing organized rhythm without mechanical activity'},
      {
        id: 'immediate-defibrillation',
        title: 'Immediate Defibrillation Protocol',
        content: 'For VF/pulseless VT: Charge to 200J (biphasic) or 360J (monophasic), ensure "all clear", deliver shock immediately. Minimize interruptions to CPR.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module7/lesson56/immediate-defibrillation.jpg',
        imageAlt: 'Defibrillation protocol with energy settings and safety'},
      {
        id: 'post-shock-protocol',
        title: 'Post-Shock Protocol',
        question: 'Immediately after defibrillation for VF:',
        options: [
          'Check pulse immediately',
          'Resume CPR for 2 minutes before pulse check',
          'Give medications first',
          'Repeat shock immediately'
        ],
        correctAnswer: 1,
        explanation: 'Resume CPR immediately for 2 minutes after shock before checking pulse/rhythm to minimize interruptions.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module7/lesson56/post-shock-protocol.jpg',
        imageAlt: 'Post-shock CPR protocol showing 2-minute cycles'},
      {
        id: 'refractory-vf-vt',
        title: 'Refractory VF/VT Management',
        content: 'For persistent VF/VT after 3 shocks: amiodarone 300mg IV or lidocaine 1-1.5mg/kg IV. Consider reversible causes and double sequential defibrillation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module7/lesson56/refractory-vf-vt.jpg',
        imageAlt: 'Refractory VF/VT treatment with antiarrhythmics'},
      {
        id: 'survival-factors',
        title: 'VF/VT Survival Factors',
        content: 'Survival depends on: early recognition, immediate CPR, rapid defibrillation (within 3-5 minutes), and advanced cardiac life support. Each minute delay reduces survival by 7-10%.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module7/lesson56/survival-factors.jpg',
        imageAlt: 'Chain of survival for VF/VT with time-dependent outcomes'},
      {
        id: 'vf-vt-mastery',
        title: 'VF/Pulseless VT Mastery',
        content: 'You now understand shockable rhythm recognition and emergency defibrillation. Remember: VF/pulseless VT = immediate defibrillation, minimize interruptions, time is critical for survival.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module7/lesson56/vf-vt-mastery.jpg',
        imageAlt: 'VF/VT mastery emphasizing immediate defibrillation urgency',
        audio: {
          narrationUrl: 'audio/module7/lesson56/vf-vt-mastery.mp3',
          autoPlay: false
        }
      },

      // 🎬 ECGKID ADVANCED: Code Blue & Airway Emergencies
      {
        id: 'youtube-ecgkid-code-blue-airway',
        title: '🎬 ECGkid Advanced: CODE BLUE & Airway Emergencies',
        content: 'Advanced emergency medicine integration! Module 1 of the 11-Day Intubation Crash Course. When cardiac arrest meets airway compromise - critical moments explained.',
        type: 'youtube',
        youtubeId: 'FTGCPh9EYjM',
        videoDuration: 484,
        minimumWatchTime: 400,
        requireFullWatch: true,
        backgroundColor: '#991b1b',
        textColor: '#ffffff',
        animation: 'fade',
        hint: '🚨 ECGkid Advanced: Code Blue + Airway = Complete Emergency Preparedness!'
      }
    ],
    summary: "VF and pulseless VT are shockable rhythms requiring immediate defibrillation. Early recognition and rapid shock delivery are critical for survival.",
    keyPoints: [
      "VF shows chaotic irregular activity, pulseless VT shows organized wide complex",
      "Immediate defibrillation is the most important intervention",
      "Resume CPR immediately after shock for 2 minutes",
      "Each minute delay reduces survival by 7-10%"
    ],
    resources: [
      {
        title: "VF/VT Emergency Defibrillation",
        url: "https://youtube.com/watch?v=vf_vt_defibrillation",
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
