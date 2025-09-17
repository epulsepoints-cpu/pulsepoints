import { Lesson } from '@/types/learning';

export const optimizedLesson79: Lesson = {
  id: 'lesson-10-3-optimized',
  moduleId: 'module-10',
  title: "Brugada Syndrome & Sudden Death Patterns",
  description: "Recognize Brugada patterns and understand their implications for sudden cardiac death prevention",
  order: 3,
  estimatedTime: 20,
  content: {
    type: 'mixed',
    introduction: "Master Brugada syndrome recognition and risk stratification. This genetic condition causes sudden cardiac death in young, healthy individuals and requires family screening and ICD consideration.",
    sections: [
      {
        id: 'section-overview',
        title: "Brugada Syndrome",
        content: "BRUGADA RECOGNITION: Type 1 Pattern → Genetic Testing → Family Screening → Risk Stratification → ICD Indication → Sudden Death Prevention",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'brugada-introduction',
        title: 'Brugada Syndrome Overview',
        content: 'Brugada syndrome: Genetic sodium channelopathy causing sudden cardiac death in structurally normal hearts. Predominantly affects young Asian males. ECG pattern may be intermittent.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module10/lesson79/brugada-introduction.jpg',
        imageAlt: 'Brugada syndrome overview with genetic and epidemiologic factors',
        audio: {
          narrationUrl: 'audio/module10/lesson79/brugada-introduction.mp3',
          autoPlay: false
        }
      },
      {
        id: 'brugada-type1',
        title: 'Brugada Type 1 Pattern Recognition',
        question: 'Brugada Type 1 pattern shows:',
        options: [
          'Normal ECG in all leads',
          'Coved ST elevation ≥2mm in V1-V3 with negative T waves',
          'ST depression in inferior leads',
          'Positive T waves in V1-V3'
        ],
        correctAnswer: 1,
        explanation: 'Brugada Type 1: Coved "tombstone" ST elevation ≥2mm in V1-V3 followed by negative T waves. Only Type 1 is diagnostic for Brugada syndrome.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module10/lesson79/brugada-type1.jpg',
        imageAlt: 'Brugada Type 1 pattern with characteristic coved ST elevation',
        audio: {
          narrationUrl: 'audio/module10/lesson79/brugada-type1.mp3',
          autoPlay: false
        }
      },
      {
        id: 'brugada-type2-type3',
        title: 'Brugada Type 2 and Type 3 Patterns',
        content: 'Type 2: Saddleback pattern with ST elevation ≥1mm. Type 3: ST elevation <1mm. Types 2 and 3 are suggestive but not diagnostic. May convert to Type 1 with provocation testing.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module10/lesson79/brugada-type2-type3.jpg',
        imageAlt: 'Brugada Type 2 and Type 3 patterns requiring further evaluation'},
      {
        id: 'drug-induced-brugada',
        title: 'Drug-Induced Brugada Unmasking',
        question: 'Sodium channel blockers that can unmask Brugada include:',
        options: [
          'Amiodarone and digoxin',
          'Flecainide and procainamide',
          'Verapamil and diltiazem',
          'Beta-blockers only'
        ],
        correctAnswer: 1,
        explanation: 'Class I antiarrhythmics (flecainide, procainamide, ajmaline) can unmask hidden Brugada patterns. Used in provocation testing and contraindicated in Brugada patients.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module10/lesson79/drug-induced-brugada.jpg',
        imageAlt: 'Drug-induced Brugada pattern unmasking with sodium channel blockers'},
      {
        id: 'fever-induced-brugada',
        title: 'Fever-Induced Brugada',
        content: 'Fever can unmask or worsen Brugada patterns by affecting sodium channel function. Aggressive fever management crucial in Brugada patients. Fever may trigger arrhythmic events.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module10/lesson79/fever-induced-brugada.jpg',
        imageAlt: 'Fever-induced Brugada pattern changes requiring urgent management'},
      {
        id: 'brugada-risk-stratification',
        title: 'Brugada Risk Stratification',
        question: 'Highest risk Brugada patients include those with:',
        options: [
          'Asymptomatic Type 2 pattern',
          'Spontaneous Type 1 pattern + syncope/VT/family history SCD',
          'Drug-induced Type 1 only',
          'Normal ECG with family history only'
        ],
        correctAnswer: 1,
        explanation: 'High-risk: Spontaneous Type 1 pattern + symptoms (syncope, VT) or family history of sudden death. These patients need ICD for primary prevention.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module10/lesson79/brugada-risk-stratification.jpg',
        imageAlt: 'Brugada risk stratification criteria for ICD indication'},
      {
        id: 'family-screening',
        title: 'Brugada Family Screening Protocol',
        content: 'All first-degree relatives need screening: ECG, possible provocation testing, genetic counseling. Sudden death prevention requires comprehensive family evaluation and education.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module10/lesson79/family-screening.jpg',
        imageAlt: 'Comprehensive family screening protocol for Brugada syndrome'},
      {
        id: 'brugada-mastery',
        title: 'Brugada Syndrome Mastery',
        content: 'You can now recognize Brugada patterns and understand their sudden death risk. This knowledge enables appropriate risk stratification, family screening, and preventive interventions.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module10/lesson79/brugada-mastery.jpg',
        imageAlt: 'Brugada syndrome mastery with sudden death prevention protocols',
        audio: {
          narrationUrl: 'audio/module10/lesson79/brugada-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "Brugada syndrome causes sudden death in young, healthy individuals. Type 1 pattern (coved ST elevation V1-V3) is diagnostic. High-risk patients need ICD and comprehensive family screening.",
    keyPoints: [
      "Only Type 1 Brugada pattern is diagnostic",
      "Fever and sodium channel blockers can unmask pattern",
      "High-risk patients need ICD for sudden death prevention",
      "Comprehensive family screening is essential"
    ],
    resources: [
      {
        title: "Brugada Syndrome Recognition and Management",
        url: "https://youtube.com/watch?v=brugada_syndrome",
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
