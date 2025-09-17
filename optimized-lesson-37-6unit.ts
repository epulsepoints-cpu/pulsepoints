import { Lesson } from './src/types/learning';

export const optimizedLesson37: Lesson = {
  id: 'lesson-37-optimized',
  moduleId: 'module-4',
  title: "Second-Degree AV Blocks",
  description: "Master recognition and management of Mobitz Type I and Type II second-degree AV blocks",
  order: 37,
  estimatedTime: 45,
  content: {
    type: 'mixed',
    introduction: "Comprehensive mastery of second-degree AV blocks, including Mobitz I (Wenckebach) and Mobitz II patterns, pathophysiology, clinical significance, and management approaches.",
    sections: [
      {
        id: 'section-overview',
        title: "Second-Degree AV Block Mastery",
        content: "COMPREHENSIVE APPROACH: Block Mechanisms → Mobitz I Patterns → Mobitz II Recognition → Differential Diagnosis → Clinical Management → Advanced Assessment",
        mediaType: 'image'
      }
    ],
    slides: [
      // UNIT 1: BLOCK MECHANISMS (Slides 1-7)
      {
        id: 'unit1-intro',
        title: 'Unit 1: Second-Degree AV Block Mechanisms',
        content: 'Second-degree AV blocks represent partial conduction impairment between atria and ventricles. Understanding the anatomical and physiological basis is crucial for accurate recognition and appropriate management.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/unit1-intro.jpg',
        imageAlt: 'Second-degree AV block anatomical overview with conduction pathways'
      },
      {
        id: 'av-node-anatomy',
        title: 'AV Node Conduction Physiology',
        content: 'The AV node has intrinsic decremental conduction properties. In second-degree blocks, some impulses are blocked while others conduct, creating intermittent AV dissociation patterns.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/av-node-physiology.jpg',
        imageAlt: 'AV node anatomy with decremental conduction properties illustrated'
      },
      {
        id: 'block-classification',
        title: 'Second-Degree Block Types',
        content: 'Two distinct types exist: Mobitz I (Wenckebach) with progressive PR prolongation and AV node location, and Mobitz II with sudden conduction failure and infranodal location.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/block-classification.jpg',
        imageAlt: 'Comparison chart of Mobitz I vs Mobitz II characteristics'
      },
      {
        id: 'mobitz1-mechanism',
        title: 'Mobitz I (Wenckebach) Mechanism',
        content: 'Mobitz I occurs at the AV node level with progressive prolongation of AV conduction until complete block occurs, followed by recovery. This creates the characteristic grouped beating pattern.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/av_block_second_degree_mobitz1.png',
        imageAlt: 'Mobitz I Wenckebach pattern showing progressive PR prolongation'
      },
      {
        id: 'mobitz2-mechanism',
        title: 'Mobitz II Mechanism',
        content: 'Mobitz II occurs below the AV node (infranodal) with sudden, unpredictable conduction failure. No progressive PR prolongation occurs - normal PR intervals are followed by sudden dropped beats.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/av_block_second_degree_mobitz2.png',
        imageAlt: 'Mobitz II pattern showing sudden dropped QRS without PR prolongation'
      },
      {
        id: 'pathophysiology-review',
        title: 'Pathophysiological Differences',
        content: 'The anatomical location determines the clinical significance: AV nodal blocks (Mobitz I) are often benign and reversible, while infranodal blocks (Mobitz II) indicate serious conduction disease requiring intervention.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#ca8a04',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/pathophysiology-comparison.jpg',
        imageAlt: 'Anatomical basis of different block locations and clinical implications'
      },
      {
        id: 'unit1-summary',
        title: 'Unit 1 Summary: Block Mechanisms',
        content: 'Second-degree AV blocks show partial conduction impairment. Mobitz I occurs at AV node with progressive delay, while Mobitz II occurs infranodally with sudden failure. Location determines prognosis.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f8fafc',
        textColor: '#334155',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/unit1-summary.jpg',
        imageAlt: 'Unit 1 key concepts summary with mechanism overview'
      },

      // UNIT 2: MOBITZ I PATTERNS (Slides 8-14)
      {
        id: 'unit2-intro',
        title: 'Unit 2: Mobitz I (Wenckebach) Pattern Recognition',
        content: 'Master the classic features of Mobitz I: progressive PR prolongation, grouped beating, and the Wenckebach periodicity that creates distinctive rhythm patterns.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/unit2-intro.jpg',
        imageAlt: 'Mobitz I pattern overview with grouped beating illustration'
      },
      {
        id: 'pr-prolongation',
        title: 'Progressive PR Prolongation',
        content: 'The hallmark of Mobitz I is progressive lengthening of PR intervals until a P wave fails to conduct. The degree of prolongation varies, but the pattern is consistent.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/wenckebach_pr_progression.png',
        imageAlt: 'Progressive PR interval lengthening in Wenckebach pattern'
      },
      {
        id: 'grouped-beating',
        title: 'Grouped Beating Pattern',
        content: 'Wenckebach creates groups of QRS complexes separated by pauses. The number of P waves in each group exceeds QRS complexes by one (4:3, 3:2, 5:4 ratios).',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/grouped-beating.jpg',
        imageAlt: 'Grouped beating patterns with various conduction ratios illustrated'
      },
      {
        id: 'wenckebach-quiz',
        title: 'Wenckebach Recognition Challenge',
        question: 'What is the classic pattern seen in Mobitz I (Wenckebach) AV block?',
        options: [
          'Fixed PR intervals with sudden dropped beats',
          'Progressive PR prolongation then dropped beat',
          'Complete AV dissociation',
          'Normal PR intervals throughout'
        ],
        correctAnswer: 1,
        explanation: 'Mobitz I shows progressive PR prolongation until a P wave fails to conduct, creating the characteristic Wenckebach periodicity.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/wenckebach_classic_pattern.png',
        imageAlt: 'Classic Wenckebach pattern showing progressive PR prolongation'
      },
      {
        id: 'conduction-ratios',
        title: 'Understanding Conduction Ratios',
        content: 'Wenckebach can present with various ratios: 3:2 (most common), 4:3, 5:4, etc. The first number represents P waves, the second represents conducted QRS complexes.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/conduction-ratios.jpg',
        imageAlt: 'Various Wenckebach conduction ratios with clear labeling'
      },
      {
        id: 'rr-intervals',
        title: 'RR Interval Patterns in Wenckebach',
        content: 'RR intervals show characteristic changes: progressive shortening within groups, then a long pause. The pause is less than twice the shortest RR interval.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#ca8a04',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/rr-interval-pattern.jpg',
        imageAlt: 'RR interval measurement patterns in Wenckebach blocks'
      },
      {
        id: 'unit2-summary',
        title: 'Unit 2 Summary: Mobitz I Recognition',
        content: 'Mobitz I features progressive PR prolongation, grouped beating, and characteristic RR interval patterns. Recognition requires careful measurement of PR intervals and identification of conduction ratios.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f8fafc',
        textColor: '#334155',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/unit2-summary.jpg',
        imageAlt: 'Unit 2 key recognition features summary'
      },

      // UNIT 3: MOBITZ II RECOGNITION (Slides 15-21)
      {
        id: 'unit3-intro',
        title: 'Unit 3: Mobitz II Pattern Recognition',
        content: 'Mobitz II presents with sudden conduction failure without warning. Recognition is critical as this block type carries significant risk of progression to complete heart block.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/unit3-intro.jpg',
        imageAlt: 'Mobitz II pattern overview emphasizing sudden conduction failure'
      },
      {
        id: 'fixed-pr-intervals',
        title: 'Fixed PR Intervals',
        content: 'Unlike Mobitz I, Mobitz II shows constant PR intervals. Conducted beats have identical PR measurements with no progressive prolongation before the dropped beat.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/mobitz2_fixed_pr.png',
        imageAlt: 'Mobitz II showing fixed PR intervals with sudden dropped beat'
      },
      {
        id: 'sudden-failure',
        title: 'Sudden Conduction Failure',
        content: 'P waves that fail to conduct in Mobitz II occur without warning. There is no gradual deterioration - normal conduction is followed by complete block of the next impulse.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/sudden-failure.jpg',
        imageAlt: 'Illustration of sudden conduction failure in Mobitz II'
      },
      {
        id: 'wide-qrs',
        title: 'Wide QRS Complexes',
        content: 'Mobitz II often presents with wide QRS complexes (>120ms) because the block occurs below the AV node in the His-Purkinje system, indicating infranodal conduction disease.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/wide-qrs-mobitz2.jpg',
        imageAlt: 'Wide QRS complexes associated with Mobitz II blocks'
      },
      {
        id: 'mobitz2-quiz',
        title: 'Mobitz II Recognition Challenge',
        question: 'Which feature distinguishes Mobitz II from Mobitz I AV block?',
        options: [
          'Progressive PR prolongation before dropped beats',
          'Fixed PR intervals with sudden dropped beats', 
          'Complete AV dissociation',
          'Normal QRS width always'
        ],
        correctAnswer: 1,
        explanation: 'Mobitz II shows fixed PR intervals with sudden, unpredictable dropped beats, unlike the progressive PR prolongation in Mobitz I.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/mobitz2_recognition.png',
        imageAlt: 'Mobitz II pattern highlighting fixed PR intervals'
      },
      {
        id: 'infranodal-location',
        title: 'Infranodal Conduction Block',
        content: 'Mobitz II occurs in the His-Purkinje system below the AV node. This location explains the wide QRS complexes and the serious prognostic implications.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#ca8a04',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/infranodal-anatomy.jpg',
        imageAlt: 'Anatomical location of Mobitz II blocks in His-Purkinje system'
      },
      {
        id: 'unit3-summary',
        title: 'Unit 3 Summary: Mobitz II Recognition',
        content: 'Mobitz II shows fixed PR intervals, sudden dropped beats, often wide QRS complexes, and infranodal location. Recognition is critical due to high risk of progression to complete heart block.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f8fafc',
        textColor: '#334155',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/unit3-summary.jpg',
        imageAlt: 'Unit 3 key recognition features for Mobitz II'
      },

      // UNIT 4: DIFFERENTIAL DIAGNOSIS (Slides 22-28)
      {
        id: 'unit4-intro',
        title: 'Unit 4: Differential Diagnosis Approach',
        content: 'Systematic approach to differentiating second-degree AV blocks from similar rhythms and distinguishing between Mobitz I and II patterns.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/unit4-intro.jpg',
        imageAlt: 'Differential diagnosis flowchart for second-degree AV blocks'
      },
      {
        id: 'differential-table',
        title: 'Mobitz I vs Mobitz II Comparison',
        content: 'Key differentiating features: PR intervals (progressive vs fixed), QRS width (narrow vs often wide), location (AV node vs infranodal), and prognosis (benign vs serious).',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/differential-table.jpg',
        imageAlt: 'Comprehensive comparison table of Mobitz I vs Mobitz II features'
      },
      {
        id: 'blocked-pac',
        title: 'Differentiating from Blocked PACs',
        content: 'Blocked premature atrial contractions can mimic second-degree AV blocks. Look for premature P waves with different morphology and compensatory pauses.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/blocked-pac-differential.jpg',
        imageAlt: 'ECG comparison of blocked PAC vs true AV block'
      },
      {
        id: 'sinus-arrest',
        title: 'Distinguishing from Sinus Arrest',
        content: 'Sinus arrest shows absent P waves during pauses, while AV blocks show P waves that fail to conduct. The presence of P waves is the key differentiator.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/sinus-arrest-differential.jpg',
        imageAlt: 'Comparison of sinus arrest vs AV block patterns'
      },
      {
        id: 'differential-quiz',
        title: 'Differential Diagnosis Challenge',
        question: 'What is the most reliable way to distinguish Mobitz I from Mobitz II?',
        options: [
          'Heart rate measurement',
          'QRS width analysis',
          'PR interval pattern analysis',
          'P wave morphology'
        ],
        correctAnswer: 2,
        explanation: 'PR interval pattern analysis is most reliable: progressive lengthening indicates Mobitz I, while fixed intervals indicate Mobitz II.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/differential-challenge.jpg',
        imageAlt: 'Side-by-side comparison for differential diagnosis'
      },
      {
        id: 'rate-considerations',
        title: 'Rate and Ratio Considerations',
        content: 'Consider the conduction ratio and overall heart rate. High-grade AV block (2:1 or 3:1) may be difficult to classify without longer rhythm strips or provocative maneuvers.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#ca8a04',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/rate-considerations.jpg',
        imageAlt: 'High-grade AV block patterns and classification challenges'
      },
      {
        id: 'unit4-summary',
        title: 'Unit 4 Summary: Differential Diagnosis',
        content: 'Systematic analysis of PR patterns, QRS width, and P wave behavior allows accurate differentiation between Mobitz I, Mobitz II, and mimicking rhythms.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f8fafc',
        textColor: '#334155',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/unit4-summary.jpg',
        imageAlt: 'Unit 4 differential diagnosis approach summary'
      },

      // UNIT 5: CLINICAL MANAGEMENT (Slides 29-35)
      {
        id: 'unit5-intro',
        title: 'Unit 5: Clinical Management Strategies',
        content: 'Evidence-based management approaches for second-degree AV blocks, including when to observe, when to intervene, and choice of interventions.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/unit5-intro.jpg',
        imageAlt: 'Clinical management algorithm for second-degree AV blocks'
      },
      {
        id: 'mobitz1-management',
        title: 'Mobitz I Management',
        content: 'Mobitz I is often benign and asymptomatic. Management focuses on identifying reversible causes (medications, ischemia) and monitoring for progression. Pacing rarely needed.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/mobitz1-management.jpg',
        imageAlt: 'Management flowchart for Mobitz I AV block'
      },
      {
        id: 'mobitz2-management',
        title: 'Mobitz II Management',
        content: 'Mobitz II requires aggressive management due to high risk of progression to complete heart block. Permanent pacing is indicated even in asymptomatic patients.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/mobitz2-management.jpg',
        imageAlt: 'Management algorithm for Mobitz II emphasizing pacing'
      },
      {
        id: 'symptomatic-patients',
        title: 'Managing Symptomatic Patients',
        content: 'Symptoms include fatigue, dyspnea, presyncope, or syncope. Symptomatic patients with either type require temporary pacing and evaluation for permanent pacemaker placement.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/symptomatic-management.jpg',
        imageAlt: 'Symptom-based management approach for AV blocks'
      },
      {
        id: 'management-quiz',
        title: 'Management Decision Challenge',
        question: 'An asymptomatic patient with Mobitz II AV block should receive:',
        options: [
          'Observation only',
          'Medical therapy',
          'Permanent pacemaker',
          'Exercise stress test first'
        ],
        correctAnswer: 2,
        explanation: 'Asymptomatic Mobitz II requires permanent pacemaker due to high risk of sudden progression to complete heart block.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/management-decision.jpg',
        imageAlt: 'Clinical decision tree for Mobitz II management'
      },
      {
        id: 'reversible-causes',
        title: 'Identifying Reversible Causes',
        content: 'Always assess for reversible causes: medications (beta-blockers, calcium channel blockers, digitalis), electrolyte imbalances, acute MI, or increased vagal tone.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#ca8a04',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/reversible-causes.jpg',
        imageAlt: 'Checklist of reversible causes of AV blocks'
      },
      {
        id: 'unit5-summary',
        title: 'Unit 5 Summary: Clinical Management',
        content: 'Mobitz I often requires only observation unless symptomatic. Mobitz II requires permanent pacing even when asymptomatic. Always evaluate for reversible causes.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f8fafc',
        textColor: '#334155',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/unit5-summary.jpg',
        imageAlt: 'Unit 5 management strategy summary'
      },

      // UNIT 6: ADVANCED ASSESSMENT (Slides 36-42)
      {
        id: 'unit6-intro',
        title: 'Unit 6: Advanced Assessment and Special Considerations',
        content: 'Advanced diagnostic techniques, special populations, and complex scenarios in second-degree AV block evaluation and management.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/unit6-intro.jpg',
        imageAlt: 'Advanced assessment techniques for complex AV blocks'
      },
      {
        id: 'electrophysiology-studies',
        title: 'Electrophysiology Study Role',
        content: 'EP studies can clarify block location when surface ECG is ambiguous. HV interval measurement helps distinguish nodal from infranodal blocks in challenging cases.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/ep-study-role.jpg',
        imageAlt: 'EP study findings in different types of AV blocks'
      },
      {
        id: 'exercise-testing',
        title: 'Exercise Testing Considerations',
        content: 'Exercise can unmask higher degrees of block or improve AV conduction. Mobitz I may improve with exercise (nodal), while Mobitz II may worsen (infranodal).',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/exercise-testing.jpg',
        imageAlt: 'Exercise response patterns in different AV block types'
      },
      {
        id: 'special-populations',
        title: 'Special Populations',
        content: 'Consider unique factors: athletes may have benign Mobitz I, elderly patients have higher risk of progression, and pregnancy may require modified management approaches.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/special-populations.jpg',
        imageAlt: 'Management considerations for special populations'
      },
      {
        id: 'advanced-quiz',
        title: 'Advanced Assessment Challenge',
        question: 'A young athlete with asymptomatic Mobitz I that resolves with exercise should receive:',
        options: [
          'Immediate permanent pacemaker',
          'Observation with serial monitoring',
          'Beta-blocker therapy',
          'Restriction from sports'
        ],
        correctAnswer: 1,
        explanation: 'Athletic Mobitz I that improves with exercise represents enhanced vagal tone and is benign, requiring only observation.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/athletic-considerations.jpg',
        imageAlt: 'Athletic population AV block management guidelines'
      },
      {
        id: 'holter-monitoring',
        title: 'Holter Monitoring Applications',
        content: 'Extended monitoring helps assess block burden, circadian patterns, and correlation with symptoms. Useful for documenting intermittent high-grade blocks.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#ca8a04',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/holter-applications.jpg',
        imageAlt: 'Holter monitoring findings in second-degree AV blocks'
      },
      {
        id: 'mastery-assessment',
        title: 'Second-Degree AV Block Mastery',
        content: 'You have mastered second-degree AV blocks: mechanism understanding, pattern recognition, differential diagnosis, and evidence-based management. Ready for complete heart block!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/images/module4/lesson37/mastery-achievement.jpg',
        imageAlt: 'Mastery achievement badge for second-degree AV blocks'
      }
    ],
    summary: "Second-degree AV blocks represent partial conduction impairment with two distinct types: Mobitz I (benign, AV nodal) with progressive PR prolongation, and Mobitz II (serious, infranodal) with sudden conduction failure requiring pacing.",
    keyPoints: [
      "Mobitz I shows progressive PR prolongation and grouped beating",
      "Mobitz II shows fixed PR intervals with sudden dropped beats",
      "Mobitz I is usually benign; Mobitz II requires permanent pacing",
      "QRS width and response to exercise help differentiate block location",
      "Always evaluate for reversible causes before permanent intervention"
    ],
    resources: [
      {
        title: "AV Block Guidelines",
        url: "https://youtube.com/watch?v=av_block_guidelines",
        type: "video"
      },
      {
        title: "Pacemaker Indications",
        url: "https://ahajournals.org/pacemaker-guidelines",
        type: "article"
      }
    ]
  },
  tasks: [],
  completed: false,
  attempts: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
