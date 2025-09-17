import { Lesson } from '@/types/learning';

export const optimizedLesson39Module4: Lesson = {
  id: 'lesson-39-module4-optimized',
  moduleId: 'module-4',
  title: "AV Block Integration and Clinical Mastery",
  description: "Comprehensive integration of all AV block concepts with advanced clinical applications and diagnostic mastery",
  order: 39,
  estimatedTime: 45,
  content: {
    type: 'mixed',
    introduction: "Master the complete spectrum of AV blocks through systematic integration, advanced differential diagnosis, and complex clinical scenarios.",
    sections: [
      {
        id: 'section-overview',
        title: "AV Block Mastery Integration",
        content: "COMPREHENSIVE MASTERY: Systematic Recognition → Advanced Differential → Complex Scenarios → Emergency Protocols → Long-term Management → Clinical Excellence",
        mediaType: 'image'
      }
    ],
    slides: [
      // UNIT 1: SYSTEMATIC RECOGNITION MASTERY (Slides 1-7)
      {
        id: 'unit1-intro',
        title: 'Unit 1: Systematic AV Block Recognition',
        content: 'Master systematic approach to recognizing all degrees of AV block using structured analysis techniques. This unit integrates everything learned about first-degree, second-degree, and third-degree AV blocks.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/unit1-intro.jpg',
        imageAlt: 'Systematic AV block recognition flowchart with all degrees'
      },
      {
        id: 'recognition-algorithm',
        title: 'AV Block Recognition Algorithm',
        content: 'Step 1: Identify P waves and QRS complexes. Step 2: Measure PR intervals. Step 3: Assess P-QRS relationship. Step 4: Classify the block degree. Step 5: Determine clinical significance.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/recognition-algorithm.jpg',
        imageAlt: 'Five-step algorithm for systematic AV block recognition'
      },
      {
        id: 'first-degree-review',
        title: 'First-Degree AV Block Recognition',
        content: 'PR interval >200ms (0.20 seconds) with consistent 1:1 AV conduction. Every P wave followed by QRS. Usually benign but monitor for progression.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson39/av_block_first_degree.png',
        imageAlt: 'First-degree AV block showing prolonged PR interval with 1:1 conduction'
      },
      {
        id: 'second-degree-review',
        title: 'Second-Degree AV Block Types',
        content: 'Mobitz I (Wenckebach): Progressive PR prolongation then dropped beat. Mobitz II: Fixed PR intervals with sudden dropped beats. 2:1 Block: Every other P wave conducts.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson39/av_block_second_degree.png',
        imageAlt: 'Second-degree AV block examples showing Mobitz I and II patterns'
      },
      {
        id: 'third-degree-review',
        title: 'Third-Degree Complete Block',
        content: 'Complete AV dissociation with independent P waves and QRS complexes. P waves march through QRS at different rates. Requires emergency intervention.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson39/av_block_complete.png',
        imageAlt: 'Complete AV block showing independent P waves and QRS complexes'
      },
      {
        id: 'recognition-quiz',
        title: 'Recognition Mastery Challenge',
        question: 'Most critical first step in AV block analysis is:',
        options: [
          'Measuring heart rate',
          'Identifying P wave and QRS relationship',
          'Assessing QRS width',
          'Checking for symptoms'
        ],
        correctAnswer: 1,
        explanation: 'The P wave to QRS relationship is fundamental to determining the degree and type of AV block present.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#ca8a04',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/recognition-challenge.jpg',
        imageAlt: 'AV block recognition challenge with multiple rhythm strips'
      },
      {
        id: 'unit1-summary',
        title: 'Unit 1 Summary: Recognition Mastery',
        content: 'Systematic approach to AV block recognition: P-QRS relationship → PR measurement → Degree classification → Clinical significance assessment.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f8fafc',
        textColor: '#334155',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/unit1-summary.jpg',
        imageAlt: 'Unit 1 systematic recognition mastery summary'
      },

      // UNIT 2: ADVANCED DIFFERENTIAL DIAGNOSIS (Slides 8-14)
      {
        id: 'unit2-intro',
        title: 'Unit 2: Advanced Differential Diagnosis',
        content: 'Master differential diagnosis of complex AV block scenarios, including mimics, variants, and challenging presentations that require expert-level analysis.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/unit2-intro.jpg',
        imageAlt: 'Advanced differential diagnosis flowchart for complex AV blocks'
      },
      {
        id: 'block-mimics',
        title: 'AV Block Mimics',
        content: 'Non-conducted PACs can mimic second-degree AV block. Sinus arrhythmia may appear as variable PR intervals. Always look for hidden P waves in QRS complexes or T waves.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/block-mimics.jpg',
        imageAlt: 'Common AV block mimics including non-conducted PACs'
      },
      {
        id: 'high-grade-blocks',
        title: 'High-Grade AV Blocks',
        content: '3:1 or 4:1 AV blocks represent high-grade second-degree block. More serious than simple 2:1 block and may progress to complete block. Requires urgent evaluation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/high-grade-blocks.jpg',
        imageAlt: 'High-grade AV blocks showing 3:1 and 4:1 conduction patterns'
      },
      {
        id: 'variable-blocks',
        title: 'Variable AV Blocks',
        content: 'Some patients show varying degrees of block on the same strip. Document all patterns present and use the highest degree for clinical decision-making.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/variable-blocks.jpg',
        imageAlt: 'Variable AV blocks showing multiple degrees on same rhythm strip'
      },
      {
        id: 'differential-quiz',
        title: 'Differential Diagnosis Challenge',
        question: 'A rhythm strip shows occasional dropped QRS complexes. The key to differentiating blocked PACs from second-degree AV block is:',
        options: [
          'Measuring the heart rate',
          'Looking for premature P waves before dropped beats',
          'Assessing QRS width',
          'Checking patient symptoms'
        ],
        correctAnswer: 1,
        explanation: 'Blocked PACs have premature P waves that are non-conducted, while second-degree AV block has regular P waves with intermittent block.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/differential-challenge.jpg',
        imageAlt: 'Differential diagnosis challenge comparing blocked PACs vs AV block'
      },
      {
        id: 'complex-scenarios',
        title: 'Complex Clinical Scenarios',
        content: 'Multiple rhythm disturbances can coexist: AV block with atrial fibrillation, bundle branch blocks with AV blocks, or escape rhythms with additional arrhythmias.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#ca8a04',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/complex-scenarios.jpg',
        imageAlt: 'Complex scenarios showing multiple concurrent rhythm disturbances'
      },
      {
        id: 'unit2-summary',
        title: 'Unit 2 Summary: Advanced Differential',
        content: 'Advanced differential diagnosis requires recognition of AV block mimics, high-grade blocks, variable presentations, and complex multi-rhythm scenarios.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f8fafc',
        textColor: '#334155',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/unit2-summary.jpg',
        imageAlt: 'Unit 2 advanced differential diagnosis summary'
      },

      // UNIT 3: COMPLEX CLINICAL SCENARIOS (Slides 15-21)
      {
        id: 'unit3-intro',
        title: 'Unit 3: Complex Clinical Scenarios',
        content: 'Apply AV block knowledge to complex patient presentations including multi-system disease, drug effects, and challenging diagnostic situations.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/unit3-intro.jpg',
        imageAlt: 'Complex clinical scenarios integrating AV blocks with patient care'
      },
      {
        id: 'drug-induced-blocks',
        title: 'Drug-Induced AV Blocks',
        content: 'Beta-blockers, calcium channel blockers, digoxin, and antiarrhythmics can all cause AV blocks. Consider drug effects in any new AV block presentation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/drug-induced-blocks.jpg',
        imageAlt: 'Common medications causing AV blocks with mechanisms'
      },
      {
        id: 'ischemic-blocks',
        title: 'Ischemia-Related AV Blocks',
        content: 'Inferior MI affects AV node (transient blocks), anterior MI affects His-Purkinje system (permanent blocks). Location determines prognosis and management.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/ischemic-blocks.jpg',
        imageAlt: 'MI location correlation with AV block patterns and prognosis'
      },
      {
        id: 'age-related-blocks',
        title: 'Age-Related Considerations',
        content: 'Congenital complete heart block in young patients may be well-tolerated. Degenerative blocks in elderly require different management approach than acute blocks.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/age-related-blocks.jpg',
        imageAlt: 'Age-related AV block considerations from pediatric to elderly'
      },
      {
        id: 'scenario-quiz',
        title: 'Clinical Scenario Challenge',
        question: '70-year-old with new complete heart block post-inferior MI. Most likely prognosis:',
        options: [
          'Permanent block requiring immediate pacemaker',
          'Transient block likely to resolve within days',
          'No intervention needed',
          'Only medications required'
        ],
        correctAnswer: 1,
        explanation: 'Inferior MI complete heart block is typically transient as it affects the AV node, unlike anterior MI which affects His-Purkinje system.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/scenario-challenge.jpg',
        imageAlt: 'Clinical scenario challenge with inferior MI and complete heart block'
      },
      {
        id: 'multisystem-disease',
        title: 'Multi-System Disease Integration',
        content: 'AV blocks can be first sign of systemic diseases: Lyme disease, sarcoidosis, amyloidosis, or autoimmune conditions. Consider broader evaluation when appropriate.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#ca8a04',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/multisystem-disease.jpg',
        imageAlt: 'Systemic diseases causing AV blocks requiring multi-system evaluation'
      },
      {
        id: 'unit3-summary',
        title: 'Unit 3 Summary: Complex Scenarios',
        content: 'Complex scenarios require integration of AV block knowledge with drug effects, ischemic patterns, age considerations, and systemic disease evaluation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f8fafc',
        textColor: '#334155',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/unit3-summary.jpg',
        imageAlt: 'Unit 3 complex clinical scenarios summary'
      },

      // UNIT 4: EMERGENCY PROTOCOLS AND MANAGEMENT (Slides 22-28)
      {
        id: 'unit4-intro',
        title: 'Unit 4: Emergency Protocols and Advanced Management',
        content: 'Master emergency protocols for AV block management, from acute presentations to long-term care planning and follow-up strategies.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/unit4-intro.jpg',
        imageAlt: 'Emergency management protocols for AV blocks'
      },
      {
        id: 'triage-protocols',
        title: 'AV Block Triage Protocols',
        content: 'Immediate: Complete heart block, symptomatic Mobitz II. Urgent: Asymptomatic Mobitz II, high-grade blocks. Routine: First-degree, asymptomatic Mobitz I.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/triage-protocols.jpg',
        imageAlt: 'AV block triage decision tree with urgency levels'
      },
      {
        id: 'acute-management',
        title: 'Acute Management Algorithms',
        content: 'Symptomatic bradycardia: Atropine → Transcutaneous pacing → Transvenous pacing. Monitor for hemodynamic deterioration and prepare for escalation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/acute-management.jpg',
        imageAlt: 'Acute management algorithm for symptomatic AV blocks'
      },
      {
        id: 'pacing-decisions',
        title: 'Pacemaker Decision Making',
        content: 'Permanent pacing indications: Complete heart block, symptomatic Mobitz II, high-grade AV block. Consider reversible causes before permanent implantation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/pacing-decisions.jpg',
        imageAlt: 'Pacemaker decision-making flowchart with clinical indications'
      },
      {
        id: 'management-quiz',
        title: 'Emergency Management Challenge',
        question: 'First-line treatment for symptomatic complete heart block is:',
        options: [
          'Atropine 1mg IV',
          'Immediate transcutaneous pacing',
          'Epinephrine infusion',
          'Urgent cardioversion'
        ],
        correctAnswer: 1,
        explanation: 'Transcutaneous pacing is first-line for symptomatic complete heart block as atropine is ineffective for infranodal blocks.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/management-challenge.jpg',
        imageAlt: 'Emergency management challenge for complete heart block'
      },
      {
        id: 'monitoring-strategies',
        title: 'Monitoring and Follow-up',
        content: 'Post-pacemaker: Device checks, lead function, battery life. Non-paced patients: Progressive monitoring, exercise testing, Holter monitoring as indicated.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#ca8a04',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/monitoring-strategies.jpg',
        imageAlt: 'Long-term monitoring strategies for AV block patients'
      },
      {
        id: 'unit4-summary',
        title: 'Unit 4 Summary: Emergency Management',
        content: 'Emergency protocols require rapid triage, appropriate acute management, informed pacing decisions, and comprehensive long-term monitoring strategies.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f8fafc',
        textColor: '#334155',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/unit4-summary.jpg',
        imageAlt: 'Unit 4 emergency management protocols summary'
      },

      // UNIT 5: LONG-TERM MANAGEMENT AND OUTCOMES (Slides 29-35)
      {
        id: 'unit5-intro',
        title: 'Unit 5: Long-term Management and Outcomes',
        content: 'Understand long-term prognosis, quality of life considerations, device management, and ongoing care for patients with AV blocks.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/unit5-intro.jpg',
        imageAlt: 'Long-term management and outcomes for AV block patients'
      },
      {
        id: 'prognostic-factors',
        title: 'Prognostic Factors',
        content: 'Block location, underlying heart disease, age at presentation, and response to treatment all influence long-term prognosis. Congenital blocks often have better outcomes.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/prognostic-factors.jpg',
        imageAlt: 'Key prognostic factors affecting AV block outcomes'
      },
      {
        id: 'device-management',
        title: 'Pacemaker Management',
        content: 'Regular device checks, lead monitoring, battery replacement planning. Understand pacing modes (VVI, DDD, etc.) and appropriate programming for different block types.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/device-management.jpg',
        imageAlt: 'Comprehensive pacemaker management and follow-up protocols'
      },
      {
        id: 'lifestyle-considerations',
        title: 'Lifestyle and Activity',
        content: 'Most paced patients can return to normal activities. Sports participation depends on underlying heart disease. MRI compatibility varies by device generation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/lifestyle-considerations.jpg',
        imageAlt: 'Lifestyle and activity recommendations for AV block patients'
      },
      {
        id: 'outcomes-quiz',
        title: 'Long-term Outcomes Challenge',
        question: 'Best long-term prognosis is expected in:',
        options: [
          'Elderly patient with acquired complete heart block',
          'Young patient with congenital complete heart block',
          'Patient with ischemic complete heart block',
          'Patient with drug-induced complete heart block'
        ],
        correctAnswer: 1,
        explanation: 'Congenital complete heart block in young patients often has excellent long-term prognosis with appropriate pacing.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/outcomes-challenge.jpg',
        imageAlt: 'Long-term outcomes challenge comparing different AV block scenarios'
      },
      {
        id: 'quality-of-life',
        title: 'Quality of Life Optimization',
        content: 'Proper pacemaker programming, regular follow-up, patient education, and psychological support optimize quality of life. Most patients achieve excellent functional status.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#ca8a04',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/quality-of-life.jpg',
        imageAlt: 'Quality of life optimization strategies for AV block patients'
      },
      {
        id: 'unit5-summary',
        title: 'Unit 5 Summary: Long-term Management',
        content: 'Long-term success requires understanding prognostic factors, optimal device management, lifestyle counseling, and quality of life optimization.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f8fafc',
        textColor: '#334155',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/unit5-summary.jpg',
        imageAlt: 'Unit 5 long-term management summary'
      },

      // UNIT 6: CLINICAL EXCELLENCE AND MODULE 4 MASTERY (Slides 36-42)
      {
        id: 'unit6-intro',
        title: 'Unit 6: Clinical Excellence and AV Block Mastery',
        content: 'Achieve clinical excellence in AV block management through advanced cases, professional development, and complete Module 4 mastery.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/unit6-intro.jpg',
        imageAlt: 'Clinical excellence achievement in AV block mastery'
      },
      {
        id: 'expert-analysis',
        title: 'Expert-Level Analysis',
        content: 'Integrate multiple data sources: ECG, clinical presentation, echo findings, exercise testing. Consider subtle clues and rare presentations.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/expert-analysis.jpg',
        imageAlt: 'Expert-level analysis integrating multiple diagnostic modalities'
      },
      {
        id: 'advanced-cases',
        title: 'Advanced Case Studies',
        content: 'Complex cases requiring sophisticated analysis: intermittent blocks, rate-dependent blocks, drug interactions, and unusual presentations.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/advanced-cases.jpg',
        imageAlt: 'Advanced case studies showcasing complex AV block scenarios'
      },
      {
        id: 'teaching-excellence',
        title: 'Teaching and Mentoring',
        content: 'Share knowledge effectively: structured teaching, case-based learning, simulation training. Help others achieve AV block mastery.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/teaching-excellence.jpg',
        imageAlt: 'Teaching excellence in AV block education and mentoring'
      },
      {
        id: 'mastery-assessment',
        title: 'AV Block Mastery Assessment',
        question: 'The hallmark of AV block clinical mastery is:',
        options: [
          'Memorizing all ECG patterns',
          'Integrating recognition with appropriate management',
          'Using advanced equipment',
          'Making quick decisions'
        ],
        correctAnswer: 1,
        explanation: 'True mastery integrates accurate recognition with appropriate clinical management, considering patient-specific factors.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/mastery-assessment.jpg',
        imageAlt: 'AV block mastery assessment with integrated clinical approach'
      },
      {
        id: 'professional-development',
        title: 'Ongoing Professional Development',
        content: 'Stay current with guidelines, participate in continuing education, engage with professional societies, and maintain certification in advanced cardiac life support.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#ca8a04',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/professional-development.jpg',
        imageAlt: 'Professional development pathways for AV block expertise'
      },
      {
        id: 'module4-mastery',
        title: 'Module 4 Complete - AV Block Mastery Achieved!',
        content: 'Congratulations! You have mastered the complete spectrum of AV blocks from basic recognition to expert management. Module 4 mastery achieved with clinical excellence!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/images/module4/lesson39/module4-mastery.jpg',
        imageAlt: 'Module 4 mastery achievement badge with AV block expertise'
      }
    ],
    summary: "Complete integration of AV block knowledge from systematic recognition through advanced management. This lesson achieves clinical mastery of all AV block types and clinical scenarios.",
    keyPoints: [
      "Systematic recognition algorithm for all AV block degrees",
      "Advanced differential diagnosis including mimics and variants",
      "Complex clinical scenarios with multi-system integration",
      "Emergency protocols and pacing decision-making",
      "Long-term management and quality of life optimization",
      "Clinical excellence through expert-level analysis and teaching"
    ],
    resources: [
      {
        title: "AV Block Mastery Guidelines",
        url: "https://ahajournals.org/av-block-guidelines",
        type: "article"
      },
      {
        title: "Advanced AV Block Management",
        url: "https://youtube.com/watch?v=av_block_mastery",
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
