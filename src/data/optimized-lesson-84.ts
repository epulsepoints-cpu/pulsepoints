import { Lesson } from '@/types/learning';

export const optimizedLesson84: Lesson = {
  id: 'lesson-10-8-optimized',
  moduleId: 'module-10',
  title: "Module 10 Mastery Assessment - Advanced Pattern Recognition",
  description: "Final comprehensive assessment of special ECG patterns and advanced diagnostic skills",
  order: 8,
  estimatedTime: 25,
  content: {
    type: 'mixed',
    introduction: "Demonstrate mastery of advanced ECG patterns and special conditions. This expert-level assessment tests your ability to recognize rare but critical patterns that require specialized knowledge.",
    sections: [
      {
        id: 'section-overview',
        title: "Module 10 Expert Challenge",
        content: "EXPERT ASSESSMENT: De Winter Recognition → WPW Management → Brugada Screening → LQTS Subtyping → ARVC Detection → HCM Risk Assessment → Takotsubo Differentiation",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'expert-introduction',
        title: 'Module 10 Expert Assessment',
        content: 'Test your expertise in advanced ECG pattern recognition. Master-level skills in identifying rare but critical conditions that require specialized knowledge and immediate action.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module10/lesson84/expert-introduction.jpg',
        imageAlt: 'Expert-level ECG pattern recognition assessment',
        audio: {
          narrationUrl: 'audio/module10/lesson84/expert-introduction.mp3',
          autoPlay: false
        }
      },
      {
        id: 'dewinter-emergency',
        title: 'De Winter Pattern Emergency Recognition',
        question: 'Patient with chest pain shows upsloping ST depression + tall T waves V1-V6. Action:',
        options: [
          'Discharge with outpatient follow-up',
          'Immediate cath lab activation - De Winter STEMI equivalent',
          'Stress test in 24 hours',
          'Observe for ST elevation development'
        ],
        correctAnswer: 1,
        explanation: 'De Winter pattern = STEMI equivalent requiring immediate cath lab activation. Don\'t wait for classic ST elevation - this pattern indicates acute LAD occlusion.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module10/lesson84/dewinter-emergency.jpg',
        imageAlt: 'De Winter pattern requiring immediate emergency intervention'},
      {
        id: 'wpw-af-crisis',
        title: 'WPW with AF Crisis Management',
        question: 'WPW patient develops irregular wide complex tachycardia 280 bpm. Avoid:',
        options: [
          'Procainamide',
          'Cardioversion',
          'Verapamil and digoxin',
          'Amiodarone'
        ],
        correctAnswer: 2,
        explanation: 'NEVER use AV nodal blockers (verapamil, digoxin, beta-blockers) in WPW + AF. They can accelerate conduction through accessory pathway → VF.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module10/lesson84/wpw-af-crisis.jpg',
        imageAlt: 'Dangerous WPW with AF requiring careful medication selection'},
      {
        id: 'brugada-family-screening',
        title: 'Brugada Family Screening Decision',
        question: '25-year-old with Type 1 Brugada + syncope. Family screening priority:',
        options: [
          'Only if symptoms develop',
          'Immediate screening of all first-degree relatives',
          'Wait for genetic test results',
          'No screening needed'
        ],
        correctAnswer: 1,
        explanation: 'High-risk Brugada (Type 1 + syncope) requires immediate family screening. Sudden death can occur in asymptomatic relatives with hidden Type 1 patterns.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module10/lesson84/brugada-family-screening.jpg',
        imageAlt: 'Brugada family screening protocol for sudden death prevention'},
      {
        id: 'lqts-subtype-recognition',
        title: 'LQTS Subtype Recognition Excellence',
        question: 'Teen swimmer with QTc 480ms + broad-based T waves. Most likely:',
        options: [
          'LQT2 with acoustic triggers',
          'LQT1 with exercise triggers',
          'LQT3 with sleep triggers',
          'Acquired LQTS only'
        ],
        correctAnswer: 1,
        explanation: 'LQT1: Broad-based T waves + exercise triggers (especially swimming). QTc 480ms in teen is significant. Beta-blockers highly effective for LQT1.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module10/lesson84/lqts-subtype-recognition.jpg',
        imageAlt: 'LQT1 pattern recognition with exercise correlation'},
      {
        id: 'arvc-athlete-screening',
        title: 'ARVC Athletic Screening Critical Decision',
        question: 'Young athlete with epsilon waves + T inversions V1-V3. Management:',
        options: [
          'Continue competitive sports with monitoring',
          'Immediate sports restriction + comprehensive evaluation',
          'Reduce training intensity only',
          'No intervention needed'
        ],
        correctAnswer: 1,
        explanation: 'Epsilon waves = pathognomonic ARVC. Immediate sports restriction essential - exercise accelerates disease and increases sudden death risk in athletes.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module10/lesson84/arvc-athlete-screening.jpg',
        imageAlt: 'ARVC requiring immediate athletic restriction for safety'},
      {
        id: 'hcm-risk-stratification',
        title: 'HCM Sudden Death Risk Assessment',
        question: '20-year-old with giant T inversions V4-V6, LVH 32mm, family history SCD:',
        options: [
          'Low risk - observation only',
          'High risk - ICD evaluation indicated',
          'Intermediate risk - annual monitoring',
          'Risk cannot be determined'
        ],
        correctAnswer: 1,
        explanation: 'High-risk HCM: Massive LVH >30mm + family history SCD + young age. Multiple risk factors indicate ICD evaluation for primary prevention.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module10/lesson84/hcm-risk-stratification.jpg',
        imageAlt: 'High-risk HCM requiring ICD evaluation for sudden death prevention'},
      {
        id: 'takotsubo-differentiation',
        title: 'Takotsubo vs STEMI Expert Differentiation',
        question: 'Key feature distinguishing takotsubo from anterior STEMI:',
        options: [
          'ST elevation pattern identical',
          'Clear stress trigger + normal coronaries + complete recovery',
          'Troponin elevation pattern',
          'Initial ECG changes only'
        ],
        correctAnswer: 1,
        explanation: 'Takotsubo differentiation: Clear emotional/physical stress trigger, normal coronary angiography, characteristic wall motion, and complete functional recovery.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module10/lesson84/takotsubo-differentiation.jpg',
        imageAlt: 'Expert differentiation between takotsubo and true STEMI'},
      {
        id: 'clinical-integration-expert',
        title: 'Expert Clinical Integration',
        question: 'Most important principle for advanced ECG pattern recognition:',
        options: [
          'Memorize patterns without context',
          'Integrate ECG + clinical history + family history + genetic risk',
          'Rely on automated interpretation only',
          'Focus on single-lead analysis'
        ],
        correctAnswer: 1,
        explanation: 'Expert practice integrates all data: ECG patterns, clinical presentation, family history, genetic factors, and environmental triggers for comprehensive patient care.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module10/lesson84/clinical-integration-expert.jpg',
        imageAlt: 'Expert clinical integration for comprehensive patient assessment',
        audio: {
          narrationUrl: 'audio/module10/lesson84/clinical-integration-expert.mp3',
          autoPlay: false
        }
      },
      {
        id: 'module-10-completion',
        title: 'Module 10 Expert Mastery Complete',
        content: 'Congratulations! You have achieved expert-level mastery of advanced ECG patterns. You can now recognize rare but critical conditions and make life-saving clinical decisions.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module10/lesson84/module-10-completion.jpg',
        imageAlt: 'Module 10 completion celebrating expert ECG mastery'},
      {
        id: 'comprehensive-ecg-mastery',
        title: 'Comprehensive ECG Expertise Achievement',
        content: 'You have completed the ultimate ECG learning journey. From basic interpretation to expert-level advanced patterns, you now possess comprehensive ECG expertise for any clinical setting.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module10/lesson84/comprehensive-ecg-mastery.jpg',
        imageAlt: 'Complete ECG mastery achievement across all 10 modules',
        audio: {
          narrationUrl: 'audio/module10/lesson84/comprehensive-ecg-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "Expert-level assessment demonstrates mastery of advanced ECG patterns including emergency recognition, genetic screening decisions, risk stratification, and comprehensive clinical integration.",
    keyPoints: [
      "De Winter pattern requires immediate cath lab activation",
      "WPW + AF contraindications can be life-saving",
      "Genetic conditions require family screening protocols",
      "Expert practice integrates all clinical factors"
    ],
    resources: [
      {
        title: "Advanced ECG Patterns Complete Review",
        url: "https://youtube.com/watch?v=advanced_ecg_patterns",
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
