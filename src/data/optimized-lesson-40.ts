import { Lesson } from '@/types/learning';

export const optimizedLesson40: Lesson = {
  id: 'lesson-5-4-optimized',
  moduleId: 'module-5',
  title: "Ventricular Tachycardia (VT)",
  description: "Life-threatening ventricular tachycardia recognition and emergency management",
  order: 4,
  estimatedTime: 20,
  content: {
    type: 'mixed',
    introduction: "Master recognition and emergency management of ventricular tachycardia - a life-threatening arrhythmia requiring immediate intervention.",
    sections: [
      {
        id: 'section-overview',
        title: "VT Emergency Recognition",
        content: "LIFE-THREATENING: Rate >100 → Wide QRS → Hemodynamic Collapse → Emergency Treatment",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // 🎬 YOUTUBE VIDEO: Complete ECG Course Module 2
      {
        id: 'youtube-ecg-module-2',
        title: '🎬 Complete ECG Course Module 2 - Advanced Arrhythmias (40 minutes)',
        content: 'Comprehensive 40-minute masterclass on advanced arrhythmias including ventricular tachycardia, complex rhythms, and emergency recognition. Complete professional training!',
        type: 'youtube',
        youtubeId: 'Esg7gKO4hJo',
        videoDuration: 2400,
        minimumWatchTime: 1800,
        requireFullWatch: false,
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        hint: '🎓 40-minute comprehensive arrhythmia masterclass!'
      },

      // 🎬 YOUTUBE VIDEO: VT vs SVT Differential
      {
        id: 'youtube-vt-svt-differential',
        title: '🎬 VT vs SVT with Aberrancy - Critical Differential Diagnosis',
        content: 'Master the critical distinction between VT and SVT with aberrancy. Life-saving diagnostic skill for emergency situations!',
        type: 'youtube',
        youtubeId: 'iR1MnYlY8TM',
        videoDuration: 720,
        minimumWatchTime: 600,
        requireFullWatch: true,
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        hint: '🚨 Life-saving differential diagnosis!'
      },

      {
        id: 'vt-intro',
        title: 'Ventricular Tachycardia Overview',
        content: 'Ventricular tachycardia (VT) is a rapid ventricular rhythm >100 bpm with wide QRS complexes. It is a medical emergency that can cause hemodynamic collapse and degenerate into ventricular fibrillation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module5/lesson40/vt-intro.jpg',
        imageAlt: 'Ventricular tachycardia ECG showing rapid wide complex rhythm',
        audio: {
          narrationUrl: 'audio/module5/lesson40/vt-intro.mp3',
          autoPlay: false
        }
      },
      {
        id: 'vt-mechanisms',
        title: 'VT Mechanisms',
        content: 'VT can result from reentry circuits (most common), enhanced automaticity, or triggered activity. Reentrant VT typically occurs in areas of scarred myocardium from previous infarction.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module5/lesson40/vt-mechanisms.jpg',
        imageAlt: 'Reentry circuit mechanism in scarred myocardium causing VT'},
      {
        id: 'vt-characteristics',
        title: 'VT Recognition Criteria',
        question: 'Which criteria confirm ventricular tachycardia?',
        options: [
          'Rate >100, narrow QRS, regular',
          'Rate >100, wide QRS (>120ms), usually regular',
          'Rate 60-100, wide QRS, irregular',
          'Rate <60, narrow QRS, regular'
        ],
        correctAnswer: 1,
        explanation: 'VT is defined by rate >100 bpm, wide QRS complexes (>120ms), and is usually regular (may be slightly irregular).',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module5/lesson40/vt-characteristics.jpg',
        imageAlt: 'ECG strip showing classic VT characteristics with rate and QRS width measurements'},
      {
        id: 'vt-types',
        title: 'Types of Ventricular Tachycardia',
        content: 'VT can be monomorphic (uniform QRS shape) or polymorphic (varying QRS shapes). Polymorphic VT includes torsades de pointes, which has a characteristic twisting pattern.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module5/lesson40/vt-types.jpg',
        imageAlt: 'Comparison of monomorphic VT vs polymorphic VT vs torsades de pointes'},
      {
        id: 'hemodynamic-effects',
        title: 'Hemodynamic Effects of VT',
        question: 'VT can cause hemodynamic compromise because:',
        options: [
          'The rate is too slow for adequate output',
          'Rapid rate reduces ventricular filling time',
          'The QRS complexes are too narrow',
          'It only affects the atria'
        ],
        correctAnswer: 1,
        explanation: 'The rapid ventricular rate in VT reduces diastolic filling time, decreasing stroke volume and cardiac output.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module5/lesson40/hemodynamic-effects.jpg',
        imageAlt: 'Diagram showing reduced ventricular filling and cardiac output in VT'},
      {
        id: 'clinical-presentation',
        title: 'Clinical Presentation',
        content: 'VT may present with chest pain, shortness of breath, dizziness, syncope, or cardiac arrest. Some patients may remain conscious and stable, while others rapidly deteriorate.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module5/lesson40/clinical-presentation.jpg',
        imageAlt: 'Spectrum of clinical presentations from stable VT to hemodynamic collapse',
        audio: {
          narrationUrl: 'audio/module5/lesson40/clinical-presentation.mp3',
          autoPlay: false
        }
      },
      {
        id: 'emergency-management',
        title: 'Emergency Management of VT',
        question: 'A patient with VT and hypotension requires:',
        options: [
          'Immediate synchronized cardioversion',
          'Antiarrhythmic medications first',
          'Observation and monitoring',
          'Vagal maneuvers'
        ],
        correctAnswer: 0,
        explanation: 'Unstable VT with hemodynamic compromise requires immediate synchronized cardioversion according to ACLS protocols.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module5/lesson40/emergency-management.jpg',
        imageAlt: 'ACLS algorithm for VT management showing cardioversion for unstable patients'},
      {
        id: 'vt-mastery',
        title: 'Ventricular Tachycardia Mastered',
        content: 'You now can recognize VT as a life-threatening emergency requiring immediate assessment and treatment. Remember: stable VT may allow time for medications, but unstable VT requires immediate cardioversion.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module5/lesson40/vt-mastery.jpg',
        imageAlt: 'VT mastery summary emphasizing emergency recognition and treatment priorities',
        audio: {
          narrationUrl: 'audio/module5/lesson40/vt-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "VT is a life-threatening arrhythmia with rate >100 bpm and wide QRS complexes. Unstable VT requires immediate cardioversion.",
    keyPoints: [
      "Rate >100 bpm with wide QRS complexes (>120ms)",
      "Can be monomorphic or polymorphic",
      "May cause rapid hemodynamic deterioration",
      "Unstable VT requires immediate synchronized cardioversion"
    ],
    resources: [
      {
        title: "VT Recognition and ACLS Management",
        url: "https://youtube.com/watch?v=vt_acls_management",
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
