import { Lesson } from '@/types/learning';

export const optimizedLesson54: Lesson = {
  id: 'lesson-7-2-optimized',
  moduleId: 'module-7',
  title: "Asystole (Flatline) - Terminal Rhythm",
  description: "Recognition and emergency management of asystole - complete absence of electrical activity",
  order: 2,
  estimatedTime: 12,
  content: {
    type: 'mixed',
    introduction: "Master asystole recognition and emergency protocols. Asystole represents complete electrical silence and has the worst prognosis of all cardiac arrest rhythms, requiring immediate CPR and cause identification.",
    sections: [
      {
        id: 'section-overview',
        title: "Asystole Emergency",
        content: "WORST PROGNOSIS: Flatline ECG → Confirm in 2 Leads → Immediate CPR → Epinephrine → Consider Termination",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'asystole-definition',
        title: 'Asystole: Complete Electrical Silence',
        content: 'Asystole shows complete absence of electrical activity - a flat line on ECG. This is the cardiac arrest rhythm with the worst prognosis and requires immediate aggressive resuscitation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module7/lesson54/asystole-definition.jpg',
        imageAlt: 'Asystole showing complete flatline with no electrical activity',
        audio: {
          narrationUrl: 'audio/module7/lesson54/asystole-definition.mp3',
          autoPlay: false
        }
      },
      {
        id: 'asystole-confirmation',
        title: 'Asystole Confirmation Protocol',
        question: 'Before confirming asystole, you must:',
        options: [
          'Check pulse only',
          'Verify flatline in at least 2 leads',
          'Give immediate defibrillation',
          'Wait for blood pressure reading'
        ],
        correctAnswer: 1,
        explanation: 'Asystole must be confirmed in at least 2 leads to rule out fine VF, which requires defibrillation. Also check connections and gain.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module7/lesson54/asystole-confirmation.jpg',
        imageAlt: 'Two-lead confirmation showing true asystole vs fine VF',
        audio: {
          narrationUrl: 'audio/module7/lesson54/asystole-confirmation.mp3',
          autoPlay: false
        }
      },
      {
        id: 'fine-vf-differential',
        title: 'Asystole vs Fine Ventricular Fibrillation',
        content: 'Fine VF can appear as asystole. Increase ECG gain, check multiple leads, and consider defibrillation if any doubt exists. When uncertain, treat as VF.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module7/lesson54/fine-vf-differential.jpg',
        imageAlt: 'Comparison of true asystole vs fine VF with gain adjustment'},
      {
        id: 'asystole-cpr',
        title: 'Asystole CPR Protocol',
        question: 'In confirmed asystole, the first intervention is:',
        options: [
          'Immediate defibrillation',
          'High-quality CPR',
          'Atropine bolus',
          'Synchronized cardioversion'
        ],
        correctAnswer: 1,
        explanation: 'Asystole requires immediate high-quality CPR. Defibrillation is contraindicated in true asystole.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module7/lesson54/asystole-cpr.jpg',
        imageAlt: 'Asystole ACLS algorithm emphasizing immediate CPR'},
      {
        id: 'asystole-medications',
        title: 'Asystole Medication Strategy',
        content: 'Epinephrine 1mg IV every 3-5 minutes. Atropine is no longer recommended for asystole. Focus on high-quality CPR and reversible causes.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module7/lesson54/asystole-medications.jpg',
        imageAlt: 'Asystole medication protocol showing epinephrine timing'},
      {
        id: 'termination-criteria',
        title: 'Resuscitation Termination Criteria',
        question: 'Termination of resuscitation in asystole may be considered when:',
        options: [
          'After 5 minutes of CPR',
          'No response after 20 minutes of quality CPR',
          'Patient is elderly',
          'No IV access obtained'
        ],
        correctAnswer: 1,
        explanation: 'Prolonged asystole (>20 minutes) with adequate CPR and no reversible causes has extremely poor prognosis and termination may be appropriate.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module7/lesson54/termination-criteria.jpg',
        imageAlt: 'Asystole termination criteria and ethical considerations'},
      {
        id: 'asystole-mastery',
        title: 'Asystole Management Mastery',
        content: 'You understand asystole recognition and management. Remember: confirm in 2 leads, rule out fine VF, immediate CPR, and consider termination criteria for prolonged asystole.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module7/lesson54/asystole-mastery.jpg',
        imageAlt: 'Asystole mastery summary with confirmation and management protocols',
        audio: {
          narrationUrl: 'audio/module7/lesson54/asystole-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "Asystole is complete electrical silence with worst prognosis. Confirm in 2 leads, rule out fine VF, and provide immediate CPR.",
    keyPoints: [
      "Asystole = complete absence of electrical activity",
      "Must confirm in at least 2 leads to rule out fine VF",
      "Immediate CPR - no defibrillation for true asystole",
      "Consider termination after prolonged resuscitation"
    ],
    resources: [
      {
        title: "Asystole Emergency Protocols",
        url: "https://youtube.com/watch?v=asystole_emergency",
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
