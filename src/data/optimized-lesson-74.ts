import { Lesson } from '@/types/learning';

export const optimizedLesson74: Lesson = {
  id: 'lesson-9-6-optimized',
  moduleId: 'module-9',
  title: "ACS Risk Stratification and Management",
  description: "Apply risk stratification tools and understand acute management protocols for ACS",
  order: 6,
  estimatedTime: 19,
  content: {
    type: 'mixed',
    introduction: "Master ACS risk stratification using TIMI, GRACE, and HEART scores. Understanding risk assessment guides appropriate treatment intensity and timing for optimal outcomes.",
    sections: [
      {
        id: 'section-overview',
        title: "ACS Risk Stratification",
        content: "RISK ASSESSMENT: Clinical Presentation → ECG Analysis → Biomarkers → Risk Scores → Treatment Strategy",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'risk-stratification-intro',
        title: 'ACS Risk Stratification Importance',
        content: 'Risk stratification determines treatment urgency: STEMI needs immediate intervention, high-risk NSTEMI within 24 hours, intermediate risk 24-72 hours, low risk observation/stress testing.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module9/lesson74/risk-stratification-intro.jpg',
        imageAlt: 'ACS risk stratification pyramid showing treatment urgency',
        audio: {
          narrationUrl: 'audio/module9/lesson74/risk-stratification-intro.mp3',
          autoPlay: false
        }
      },
      {
        id: 'timi-risk-score',
        title: 'TIMI Risk Score for NSTEMI',
        question: 'TIMI risk factors include all EXCEPT:',
        options: [
          'Age ≥65 years',
          'Three or more CAD risk factors',
          'Known CAD with stenosis ≥50%',
          'Normal blood pressure'
        ],
        correctAnswer: 3,
        explanation: 'TIMI score includes: age ≥65, ≥3 CAD risk factors, known CAD ≥50%, aspirin use within 7 days, severe angina, elevated biomarkers, ST deviation.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module9/lesson74/timi-risk-score.jpg',
        imageAlt: 'TIMI risk score calculation for NSTEMI patients',
        audio: {
          narrationUrl: 'audio/module9/lesson74/timi-risk-score.mp3',
          autoPlay: false
        }
      },
      {
        id: 'grace-score',
        title: 'GRACE Score Assessment',
        content: 'GRACE score predicts in-hospital and 6-month mortality using age, heart rate, blood pressure, creatinine, cardiac arrest, ST deviation, elevated biomarkers, and Killip class.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module9/lesson74/grace-score.jpg',
        imageAlt: 'GRACE score components for comprehensive risk assessment'},
      {
        id: 'heart-score',
        title: 'HEART Score for Chest Pain',
        question: 'HEART score assesses:',
        options: [
          'Only ECG changes',
          'History, ECG, Age, Risk factors, Troponin',
          'Only cardiac biomarkers',
          'Only clinical presentation'
        ],
        correctAnswer: 1,
        explanation: 'HEART score evaluates: History (chest pain character), ECG changes, Age, Risk factors, and Troponin level for comprehensive assessment.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module9/lesson74/heart-score.jpg',
        imageAlt: 'HEART score components for chest pain evaluation'},
      {
        id: 'high-risk-features',
        title: 'High-Risk ACS Features',
        content: 'High-risk features: Ongoing chest pain, ST depression >2mm, elevated troponin, hemodynamic instability, heart failure, sustained VT. Require urgent intervention <24 hours.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module9/lesson74/high-risk-features.jpg',
        imageAlt: 'High-risk ACS features requiring urgent intervention'},
      {
        id: 'treatment-pathways',
        title: 'Risk-Based Treatment Pathways',
        question: 'Low-risk chest pain (HEART score 0-3) typically requires:',
        options: [
          'Immediate cardiac catheterization',
          'Observation and stress testing',
          'Emergency surgery',
          'ICU monitoring'
        ],
        correctAnswer: 1,
        explanation: 'Low-risk patients (HEART 0-3) can be safely managed with observation and outpatient stress testing rather than invasive procedures.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module9/lesson74/treatment-pathways.jpg',
        imageAlt: 'Risk-based treatment pathways for different ACS risk levels'},
      {
        id: 'medication-strategies',
        title: 'Risk-Based Medication Strategies',
        content: 'High-risk: Dual antiplatelet, anticoagulation, intensive statin, beta-blocker. Low-risk: Aspirin, statin, risk factor modification. Intensity matches risk level.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module9/lesson74/medication-strategies.jpg',
        imageAlt: 'Risk-stratified medication protocols for ACS management'},
      {
        id: 'risk-stratification-mastery',
        title: 'ACS Risk Stratification Mastery',
        content: 'You can now apply validated risk scores and stratify ACS patients appropriately. This ensures optimal resource utilization and improves patient outcomes through tailored care.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module9/lesson74/risk-stratification-mastery.jpg',
        imageAlt: 'ACS risk stratification mastery with optimal patient care',
        audio: {
          narrationUrl: 'audio/module9/lesson74/risk-stratification-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "ACS risk stratification uses TIMI, GRACE, and HEART scores to guide treatment intensity. High-risk features require urgent intervention, low-risk allows conservative management.",
    keyPoints: [
      "TIMI score guides NSTEMI management timing",
      "GRACE score predicts mortality risk",
      "HEART score evaluates chest pain patients",
      "Risk stratification optimizes resource utilization"
    ],
    resources: [
      {
        title: "ACS Risk Stratification Tools",
        url: "https://youtube.com/watch?v=acs_risk_stratification",
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
