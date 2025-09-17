import { Lesson } from '@/types/learning';

export const optimizedLesson51: Lesson = {
  id: 'lesson-6-7-optimized',
  moduleId: 'module-6',
  title: "Wide Complex Tachycardia Differentiation",
  description: "Advanced differentiation between ventricular tachycardia and SVT with aberrancy",
  order: 7,
  estimatedTime: 20,
  content: {
    type: 'mixed',
    introduction: "Master the critical skill of differentiating VT from SVT with aberrancy - a life-saving clinical decision that affects emergency treatment.",
    sections: [
      {
        id: 'section-overview',
        title: "Wide Complex Tachycardia",
        content: "CRITICAL DIFFERENTIAL: VT vs SVT+Aberrancy → Morphology Clues → AV Dissociation → Treatment Implications",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'wct-intro',
        title: 'Wide Complex Tachycardia Challenge',
        content: 'Wide complex tachycardia (WCT) can be ventricular tachycardia or supraventricular tachycardia with aberrant conduction. This distinction is critical for appropriate emergency treatment.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module6/lesson51/wct-intro.jpg',
        imageAlt: 'Side-by-side comparison of VT vs SVT with aberrancy',
        audio: {
          narrationUrl: 'audio/module6/lesson51/wct-intro.mp3',
          autoPlay: false
        }
      },
      {
        id: 'statistical-likelihood',
        title: 'Statistical Likelihood',
        content: 'In emergency settings, approximately 80% of wide complex tachycardias are ventricular tachycardia. When in doubt, treat as VT until proven otherwise.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module6/lesson51/statistical-likelihood.jpg',
        imageAlt: 'Statistical breakdown showing VT vs SVT+aberrancy prevalence'},
      {
        id: 'av-dissociation-key',
        title: 'AV Dissociation - Key Finding',
        question: 'AV dissociation in wide complex tachycardia strongly suggests:',
        options: [
          'SVT with aberrancy',
          'Atrial fibrillation',
          'Ventricular tachycardia',
          'Sinus tachycardia'
        ],
        correctAnswer: 2,
        explanation: 'AV dissociation (independent P waves and QRS) is highly specific for VT and strongly favors VT over SVT with aberrancy.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module6/lesson51/av-dissociation-key.jpg',
        imageAlt: 'ECG showing AV dissociation in VT with marching P waves'},
      {
        id: 'morphology-clues',
        title: 'QRS Morphology Clues',
        content: 'VT often shows very wide QRS (>140ms), extreme axis deviation, and morphology inconsistent with typical bundle branch blocks. Capture beats and fusion beats are diagnostic of VT.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module6/lesson51/morphology-clues.jpg',
        imageAlt: 'Morphology comparison showing VT vs SVT+aberrancy patterns'},
      {
        id: 'brugada-criteria',
        title: 'Brugada Criteria Application',
        question: 'In Brugada criteria for WCT, absence of RS complex in all precordial leads suggests:',
        options: [
          'SVT with aberrancy',
          'Ventricular tachycardia',
          'Atrial flutter',
          'Cannot determine'
        ],
        correctAnswer: 1,
        explanation: 'Absence of RS complex in all precordial leads is one of the Brugada criteria that strongly suggests VT.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module6/lesson51/brugada-criteria.jpg',
        imageAlt: 'Brugada criteria flowchart for WCT differentiation'},
      {
        id: 'clinical-factors',
        title: 'Clinical Context Factors',
        content: 'Age >35, history of MI or structural heart disease, and hemodynamic instability all increase the likelihood of VT over SVT with aberrancy.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module6/lesson51/clinical-factors.jpg',
        imageAlt: 'Clinical risk factors favoring VT diagnosis in WCT patients',
        audio: {
          narrationUrl: 'audio/module6/lesson51/clinical-factors.mp3',
          autoPlay: false
        }
      },
      {
        id: 'treatment-implications',
        title: 'Treatment Implications',
        question: 'When uncertain about WCT diagnosis, the safest approach is:',
        options: [
          'Adenosine trial first',
          'Treat as VT with amiodarone or cardioversion',
          'Calcium channel blocker trial',
          'Observation only'
        ],
        correctAnswer: 1,
        explanation: 'When uncertain, treat as VT since VT treatments are safer for SVT than SVT treatments are for VT.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module6/lesson51/treatment-implications.jpg',
        imageAlt: 'Treatment algorithm emphasizing safety-first approach for WCT'},
      {
        id: 'wct-mastery',
        title: 'WCT Differentiation Mastered',
        content: 'You now understand the critical importance of differentiating VT from SVT with aberrancy. Remember: when in doubt, treat as VT - it is the safer approach.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module6/lesson51/wct-mastery.jpg',
        imageAlt: 'WCT differentiation mastery emphasizing safety-first VT approach',
        audio: {
          narrationUrl: 'audio/module6/lesson51/wct-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "Wide complex tachycardia differentiation is critical. AV dissociation favors VT. When uncertain, treat as VT for safety.",
    keyPoints: [
      "80% of WCT is ventricular tachycardia in emergency settings",
      "AV dissociation strongly suggests VT",
      "Very wide QRS (>140ms) and atypical morphology favor VT",
      "When uncertain, treat as VT - safer approach"
    ],
    resources: [
      {
        title: "WCT Differentiation Algorithm",
        url: "https://youtube.com/watch?v=wct_differentiation",
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
