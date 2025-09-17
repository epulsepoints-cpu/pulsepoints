import { Lesson } from '@/types/learning';

export const optimizedLesson53: Lesson = {
  id: 'lesson-7-1-optimized',
  moduleId: 'module-7',
  title: "Pulseless Electrical Activity (PEA)",
  description: "Recognition and emergency management of PEA - organized electrical activity without mechanical contraction",
  order: 1,
  estimatedTime: 15,
  content: {
    type: 'mixed',
    introduction: "Master PEA recognition and emergency management. PEA shows organized electrical activity on ECG but no palpable pulse - a true cardiac emergency requiring immediate CPR and reversible cause identification.",
    sections: [
      {
        id: 'section-overview',
        title: "Pulseless Electrical Activity",
        content: "CARDIAC EMERGENCY: Organized ECG + No Pulse → Immediate CPR → Find H's & T's → Treat Cause",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'pea-concept',
        title: 'PEA: Electrical Activity Without Pulse',
        content: 'Pulseless Electrical Activity (PEA) shows organized electrical activity on ECG but no detectable pulse or blood pressure. This is a cardiac arrest rhythm requiring immediate resuscitation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module7/lesson53/pea-concept.jpg',
        imageAlt: 'PEA concept showing normal ECG with no mechanical activity',
        audio: {
          narrationUrl: 'audio/module7/lesson53/pea-concept.mp3',
          autoPlay: false
        }
      },
      {
        id: 'pea-recognition',
        title: 'PEA Recognition Criteria',
        question: 'PEA is confirmed when:',
        options: [
          'ECG shows ventricular fibrillation',
          'Organized ECG rhythm with no palpable pulse',
          'Irregular rhythm with weak pulse',
          'Asystole on monitor'
        ],
        correctAnswer: 1,
        explanation: 'PEA requires organized electrical activity on ECG (any rhythm except VF, VT, or asystole) combined with absence of palpable pulse.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module7/lesson53/pea-recognition.jpg',
        imageAlt: 'Various PEA rhythm patterns with organized electrical activity',
        audio: {
          narrationUrl: 'audio/module7/lesson53/pea-recognition.mp3',
          autoPlay: false
        }
      },
      {
        id: 'reversible-causes',
        title: 'PEA Reversible Causes: H\'s and T\'s',
        content: 'H\'s: Hypovolemia, Hypoxia, Hydrogen ion (acidosis), Hypo/hyperkalemia, Hypothermia. T\'s: Toxins, Tamponade, Tension pneumothorax, Thrombosis (coronary/pulmonary).',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module7/lesson53/reversible-causes.jpg',
        imageAlt: 'H\'s and T\'s of PEA reversible causes with treatment options'},
      {
        id: 'pea-management',
        title: 'PEA Emergency Management',
        question: 'First intervention for confirmed PEA:',
        options: [
          'Defibrillation',
          'Immediate CPR',
          'Atropine administration',
          'Synchronized cardioversion'
        ],
        correctAnswer: 1,
        explanation: 'PEA requires immediate high-quality CPR. Defibrillation is contraindicated as there is organized electrical activity.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module7/lesson53/pea-management.jpg',
        imageAlt: 'PEA ACLS algorithm showing CPR and epinephrine protocol'},
      {
        id: 'pea-medications',
        title: 'PEA Medication Protocol',
        content: 'Epinephrine 1mg IV every 3-5 minutes during CPR. Consider advanced airway, IV access, and aggressive treatment of reversible causes.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module7/lesson53/pea-medications.jpg',
        imageAlt: 'PEA medication protocol with epinephrine timing and dosing'},
      {
        id: 'pea-prognosis',
        title: 'PEA Prognosis Factors',
        question: 'Which factor suggests better prognosis in PEA?',
        options: [
          'Wide QRS complex',
          'Very slow heart rate',
          'Narrow QRS complex',
          'Irregular rhythm'
        ],
        correctAnswer: 2,
        explanation: 'Narrow QRS complexes in PEA suggest better underlying cardiac function and improved survival potential compared to wide complexes.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module7/lesson53/pea-prognosis.jpg',
        imageAlt: 'PEA survival factors including QRS width and underlying cause'},
      {
        id: 'pea-mastery',
        title: 'PEA Emergency Mastery',
        content: 'You now understand PEA recognition and emergency management. Remember: organized electrical activity + no pulse = immediate CPR + aggressive search for reversible causes.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module7/lesson53/pea-mastery.jpg',
        imageAlt: 'PEA mastery summary emphasizing immediate CPR and H\'s & T\'s',
        audio: {
          narrationUrl: 'audio/module7/lesson53/pea-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "PEA shows organized electrical activity without pulse. Immediate CPR and treatment of reversible H's and T's are crucial.",
    keyPoints: [
      "PEA = organized ECG rhythm with no palpable pulse",
      "Immediate high-quality CPR is first intervention",
      "Aggressively search for and treat H's and T's",
      "Narrow QRS complexes suggest better prognosis"
    ],
    resources: [
      {
        title: "PEA Emergency Management",
        url: "https://youtube.com/watch?v=pea_emergency",
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
