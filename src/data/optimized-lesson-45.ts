import { Lesson } from '@/types/learning';

export const optimizedLesson45: Lesson = {
  id: 'lesson-6-1-optimized',
  moduleId: 'module-6',
  title: "AV Block Fundamentals",
  description: "Understanding atrioventricular conduction blocks and classification system",
  order: 1,
  estimatedTime: 15,
  content: {
    type: 'mixed',
    introduction: "Master the fundamentals of AV blocks, including the conduction system anatomy and classification by degree of block.",
    sections: [
      {
        id: 'section-overview',
        title: "AV Block Foundation",
        content: "CONDUCTION BLOCKS: AV Node Anatomy → Classification System → Degree Assessment → Clinical Impact",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // 🎬 YOUTUBE VIDEO: Complete ECG Course Module 3
      {
        id: 'youtube-ecg-module-3',
        title: '🎬 Complete ECG Course Module 3 - AV Blocks & Conduction (40 minutes)',
        content: 'Comprehensive 40-minute masterclass on AV blocks, conduction disorders, and bundle branch blocks. Complete professional training module!',
        type: 'youtube',
        youtubeId: 'LF0lUmfBjcc',
        videoDuration: 2400,
        minimumWatchTime: 1800,
        requireFullWatch: false,
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        hint: '🎓 40-minute comprehensive AV blocks masterclass!'
      },

      // 🎬 YOUTUBE VIDEO: Third Degree AV Block
      {
        id: 'youtube-third-degree-av-block',
        title: '🎬 Third Degree AV Block - Complete Heart Block Recognition',
        content: 'Master third-degree AV block recognition including complete dissociation, escape rhythms, and emergency management. Critical rhythm recognition!',
        type: 'youtube',
        youtubeId: 'fnPrfMgmW3M',
        videoDuration: 480,
        minimumWatchTime: 420,
        requireFullWatch: true,
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        hint: '🚨 Complete heart block - emergency recognition!'
      },

      {
        id: 'av-block-intro',
        title: 'AV Block Fundamentals',
        content: 'AV blocks represent delays or interruptions in electrical conduction from atria to ventricles. They are classified by degree (1st, 2nd, 3rd) based on the severity of conduction impairment.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/first_degree_av_block_60bpm_1.png',
        imageAlt: 'AV conduction system showing normal pathway and potential block locations',
        audio: {
          narrationUrl: 'audio/module6/lesson45/av-block-intro.mp3',
          autoPlay: false
        }
      },
      {
        id: 'conduction-anatomy',
        title: 'AV Conduction System Anatomy',
        content: 'The AV conduction system includes the AV node, bundle of His, bundle branches, and Purkinje fibers. Blocks can occur at any level, affecting clinical presentation and treatment.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module6/lesson45/conduction-anatomy.jpg',
        imageAlt: 'Detailed anatomy of AV conduction system with potential block sites'},
      {
        id: 'block-classification',
        title: 'AV Block Classification System',
        question: 'AV blocks are primarily classified by:',
        options: [
          'Location of the block only',
          'Degree of conduction impairment',
          'Heart rate response',
          'QRS width only'
        ],
        correctAnswer: 1,
        explanation: 'AV blocks are classified by degree: 1st degree (prolonged conduction), 2nd degree (intermittent block), 3rd degree (complete block).',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module6/lesson45/block-classification.jpg',
        imageAlt: 'Classification system showing 1st, 2nd, and 3rd degree AV blocks'},
      {
        id: 'pr-interval-basics',
        title: 'PR Interval Assessment',
        content: 'Normal PR interval is 0.12-0.20 seconds (3-5 small boxes). Prolonged PR intervals suggest delayed AV conduction, while varying PR intervals may indicate advanced blocks.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module6/lesson45/pr-interval-basics.jpg',
        imageAlt: 'PR interval measurement examples from normal to prolonged',
        audio: {
          narrationUrl: 'audio/module6/lesson45/pr-interval-basics.mp3',
          autoPlay: false
        }
      },
      {
        id: 'block-locations',
        title: 'Block Location Significance',
        question: 'AV blocks occurring at the AV node level typically have:',
        options: [
          'Wide QRS escape rhythms',
          'Narrow QRS escape rhythms',
          'No escape rhythms',
          'Irregular escape rhythms'
        ],
        correctAnswer: 1,
        explanation: 'AV nodal blocks typically have junctional escape rhythms with narrow QRS complexes, while infranodal blocks have wide QRS escape rhythms.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module6/lesson45/block-locations.jpg',
        imageAlt: 'Block location diagram showing nodal vs infranodal with escape rhythm characteristics'},
      {
        id: 'clinical-significance',
        title: 'Clinical Significance Overview',
        content: 'AV block significance depends on degree, location, symptoms, and underlying heart disease. Some blocks are benign while others require immediate intervention or pacing.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module6/lesson45/clinical-significance.jpg',
        imageAlt: 'Clinical spectrum from benign first degree to emergency complete block'},
      {
        id: 'assessment-approach',
        title: 'Systematic Assessment Approach',
        question: 'When evaluating AV blocks, the first step is to assess:',
        options: [
          'QRS width and morphology',
          'Ventricular rate and escape rhythm',
          'PR interval relationship to QRS',
          'P wave morphology'
        ],
        correctAnswer: 2,
        explanation: 'First assess the relationship between P waves and QRS complexes to determine the degree of AV block present.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module6/lesson45/assessment-approach.jpg',
        imageAlt: 'Systematic approach flowchart for AV block evaluation',
        audio: {
          narrationUrl: 'audio/module6/lesson45/assessment-approach.mp3',
          autoPlay: false
        }
      },
      {
        id: 'foundation-complete',
        title: 'AV Block Foundation Complete',
        content: 'You now understand the basic principles of AV blocks and their classification system. Next, we will explore each degree of AV block in detail, starting with first-degree AV block.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module6/lesson45/foundation-complete.jpg',
        imageAlt: 'AV block foundation complete with pathway to detailed block analysis'}
    ],
    summary: "AV blocks are classified by degree of conduction impairment. Understanding the anatomy and classification system is essential for proper recognition and management.",
    keyPoints: [
      "AV blocks classified as 1st, 2nd, or 3rd degree",
      "PR interval assessment is fundamental to diagnosis",
      "Block location affects escape rhythm characteristics",
      "Clinical significance varies from benign to emergency"
    ],
    resources: [
      {
        title: "AV Conduction System Anatomy",
        url: "https://youtube.com/watch?v=av_conduction_anatomy",
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
