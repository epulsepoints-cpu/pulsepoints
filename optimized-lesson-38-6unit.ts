import { Lesson } from './src/types/learning';

export const optimizedLesson38: Lesson = {
  id: 'lesson-38-optimized',
  moduleId: 'module-4',
  title: "Third-Degree (Complete) AV Block",
  description: "Master recognition, pathophysiology, and emergency management of complete heart block",
  order: 38,
  estimatedTime: 45,
  content: {
    type: 'mixed',
    introduction: "Comprehensive mastery of third-degree (complete) AV block, including mechanisms, recognition patterns, escape rhythms, hemodynamic consequences, and urgent management protocols.",
    sections: [
      {
        id: 'section-overview',
        title: "Complete AV Block Mastery",
        content: "COMPREHENSIVE APPROACH: Complete Dissociation → Escape Rhythms → Recognition Patterns → Hemodynamic Impact → Emergency Management → Advanced Assessment",
        mediaType: 'image'
      }
    ],
    slides: [
      // UNIT 1: COMPLETE DISSOCIATION (Slides 1-7)
      {
        id: 'unit1-intro',
        title: 'Unit 1: Complete AV Dissociation Mechanisms',
        content: 'Third-degree AV block represents complete failure of conduction between atria and ventricles. Understanding the pathophysiology is critical for recognition and appropriate emergency management.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/unit1-intro.jpg',
        imageAlt: 'Complete AV block anatomical overview with total conduction failure'
      },
      {
        id: 'complete-block-definition',
        title: 'Complete AV Block Definition',
        content: 'No electrical impulses pass from atria to ventricles. The atria and ventricles beat independently, with completely separate and unrelated rhythms throughout the entire recording.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/complete-block-definition.jpg',
        imageAlt: 'Illustration of complete electrical isolation between atria and ventricles'
      },
      {
        id: 'dissociation-patterns',
        title: 'AV Dissociation Characteristics',
        content: 'P waves and QRS complexes occur at completely independent rates. P waves may be seen throughout the rhythm strip, sometimes superimposed on QRS complexes or T waves.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/av_block_complete.png',
        imageAlt: 'Complete AV block showing independent P waves and QRS complexes'
      },
      {
        id: 'anatomical-locations',
        title: 'Anatomical Block Locations',
        content: 'Complete block can occur at AV node, bundle of His, or bundle branches. The location determines the escape rhythm characteristics and prognosis.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/anatomical-locations.jpg',
        imageAlt: 'Anatomical sites of complete AV block with conduction system'
      },
      {
        id: 'congenital-vs-acquired',
        title: 'Congenital vs Acquired Complete Block',
        content: 'Congenital complete heart block often has junctional escape with narrow QRS. Acquired block typically has ventricular escape with wide QRS and worse prognosis.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/congenital-vs-acquired.jpg',
        imageAlt: 'Comparison of congenital vs acquired complete heart block characteristics'
      },
      {
        id: 'pathophysiology-review',
        title: 'Pathophysiological Impact',
        content: 'Complete AV block severely reduces cardiac output due to bradycardia and loss of atrial contribution. Hemodynamic compromise depends on escape rhythm rate and ventricular function.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#ca8a04',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/pathophysiology-impact.jpg',
        imageAlt: 'Hemodynamic consequences of complete AV block with cardiac output analysis'
      },
      {
        id: 'unit1-summary',
        title: 'Unit 1 Summary: Complete Dissociation',
        content: 'Third-degree AV block shows complete electrical isolation between atria and ventricles. Block location determines escape rhythm type and clinical significance.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f8fafc',
        textColor: '#334155',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/unit1-summary.jpg',
        imageAlt: 'Unit 1 key concepts summary with complete block overview'
      },

      // UNIT 2: ESCAPE RHYTHMS (Slides 8-14)
      {
        id: 'unit2-intro',
        title: 'Unit 2: Escape Rhythm Recognition',
        content: 'When complete AV block occurs, subsidiary pacemakers take over to maintain circulation. Recognition of escape rhythm type provides crucial prognostic information.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/unit2-intro.jpg',
        imageAlt: 'Escape rhythm hierarchy in complete AV block'
      },
      {
        id: 'junctional-escape',
        title: 'Junctional Escape in Complete Block',
        content: 'AV nodal complete block may have junctional escape at 40-60 bpm with narrow QRS complexes. This represents the best-case scenario with more stable hemodynamics.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/junctional_escape_45bpm.png',
        imageAlt: 'Junctional escape rhythm with narrow QRS in complete AV block'
      },
      {
        id: 'ventricular-escape',
        title: 'Ventricular Escape Patterns',
        content: 'Infranodal complete block results in ventricular escape at 20-40 bpm with wide QRS complexes. This carries significant risk and requires immediate intervention.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/ventricular_escape_30bpm.png',
        imageAlt: 'Ventricular escape rhythm with wide QRS in complete heart block'
      },
      {
        id: 'escape-quiz',
        title: 'Escape Rhythm Recognition Challenge',
        question: 'In complete AV block, a narrow QRS escape rhythm at 45 bpm indicates:',
        options: [
          'Ventricular escape - poor prognosis',
          'Junctional escape - better prognosis',
          'Sinus rhythm with block',
          'Atrial fibrillation with block'
        ],
        correctAnswer: 1,
        explanation: 'Narrow QRS escape at 45 bpm indicates junctional escape, which has better hemodynamics and prognosis than ventricular escape.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/escape-recognition.jpg',
        imageAlt: 'Escape rhythm comparison chart for complete AV block'
      },
      {
        id: 'escape-rate-significance',
        title: 'Escape Rate Clinical Significance',
        content: 'Higher escape rates (40-60 bpm) usually indicate junctional origin and better tolerance. Lower rates (20-40 bpm) suggest ventricular origin and higher risk.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/escape-rate-significance.jpg',
        imageAlt: 'Clinical significance of escape rhythm rates in complete block'
      },
      {
        id: 'escape-reliability',
        title: 'Escape Rhythm Reliability',
        content: 'Junctional escapes are generally more reliable and stable. Ventricular escapes may be intermittent, leading to periods of asystole and Stokes-Adams attacks.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#ca8a04',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/escape-reliability.jpg',
        imageAlt: 'Reliability patterns of different escape rhythms'
      },
      {
        id: 'unit2-summary',
        title: 'Unit 2 Summary: Escape Rhythms',
        content: 'Escape rhythm type (junctional vs ventricular) provides critical prognostic information. Junctional escape has better rate, stability, and hemodynamic tolerance.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f8fafc',
        textColor: '#334155',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/unit2-summary.jpg',
        imageAlt: 'Unit 2 escape rhythm key points summary'
      },

      // UNIT 3: RECOGNITION PATTERNS (Slides 15-21)
      {
        id: 'unit3-intro',
        title: 'Unit 3: Complete AV Block Recognition',
        content: 'Systematic approach to recognizing complete AV block through careful analysis of P wave and QRS relationships throughout the entire rhythm strip.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/unit3-intro.jpg',
        imageAlt: 'Recognition approach for complete AV block patterns'
      },
      {
        id: 'independent-rhythms',
        title: 'Independent Atrial and Ventricular Rhythms',
        content: 'The hallmark is complete independence of P waves and QRS complexes. P-P intervals are regular, R-R intervals are regular, but no relationship exists between them.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/independent-rhythms.jpg',
        imageAlt: 'Measurement technique showing independent P and QRS rhythms'
      },
      {
        id: 'marching-p-waves',
        title: 'Marching P Waves',
        content: 'P waves "march through" the QRS complexes at their own rate. They may be hidden in QRS complexes or T waves but maintain their regular timing.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/marching-p-waves.jpg',
        imageAlt: 'P waves marching through QRS complexes at independent rate'
      },
      {
        id: 'varying-pr-intervals',
        title: 'Constantly Varying PR Intervals',
        content: 'Since P waves and QRS complexes are unrelated, PR intervals constantly change. This helps differentiate from fixed-ratio AV blocks.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/varying-pr-intervals.jpg',
        imageAlt: 'Demonstration of constantly changing PR intervals in complete block'
      },
      {
        id: 'recognition-quiz',
        title: 'Complete Block Recognition Challenge',
        question: 'The most reliable sign of complete AV block is:',
        options: [
          'Wide QRS complexes',
          'Slow heart rate',
          'P waves marching through QRS at independent rate',
          'Absent P waves'
        ],
        correctAnswer: 2,
        explanation: 'P waves marching through QRS complexes at a completely independent rate is the definitive sign of complete AV dissociation.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/complete_av_dissociation.png',
        imageAlt: 'Classic complete AV block showing marching P waves'
      },
      {
        id: 'rate-calculations',
        title: 'Rate Calculations in Complete Block',
        content: 'Calculate atrial and ventricular rates separately. Atrial rate is usually 60-100 bpm (sinus), while ventricular rate depends on escape pacemaker location.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#ca8a04',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/rate-calculations.jpg',
        imageAlt: 'Technique for calculating separate atrial and ventricular rates'
      },
      {
        id: 'unit3-summary',
        title: 'Unit 3 Summary: Recognition Patterns',
        content: 'Complete AV block shows P waves marching through QRS complexes at independent rates. PR intervals constantly vary, confirming complete dissociation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f8fafc',
        textColor: '#334155',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/unit3-summary.jpg',
        imageAlt: 'Unit 3 recognition criteria summary'
      },

      // UNIT 4: HEMODYNAMIC IMPACT (Slides 22-28)
      {
        id: 'unit4-intro',
        title: 'Unit 4: Hemodynamic Consequences',
        content: 'Complete AV block profoundly affects cardiac output and hemodynamic stability. Understanding these effects guides urgent management decisions.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/unit4-intro.jpg',
        imageAlt: 'Hemodynamic impact assessment in complete AV block'
      },
      {
        id: 'cardiac-output-effects',
        title: 'Cardiac Output Reduction',
        content: 'Severe bradycardia and loss of atrial kick reduce cardiac output by 20-30%. Compensation mechanisms include increased stroke volume and peripheral vasoconstriction.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/cardiac-output-effects.jpg',
        imageAlt: 'Cardiac output analysis in complete heart block'
      },
      {
        id: 'stokes-adams-attacks',
        title: 'Stokes-Adams Attacks',
        content: 'Sudden cessation of ventricular escape leads to syncope or near-syncope. These episodes indicate unstable escape rhythm and require immediate intervention.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/stokes-adams-attacks.jpg',
        imageAlt: 'Stokes-Adams attack mechanism and clinical presentation'
      },
      {
        id: 'exercise-intolerance',
        title: 'Exercise Intolerance Mechanisms',
        content: 'Fixed slow heart rate prevents normal chronotropic response to exercise. Patients develop dyspnea, fatigue, and reduced functional capacity.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/exercise-intolerance.jpg',
        imageAlt: 'Exercise response limitations in complete AV block'
      },
      {
        id: 'hemodynamic-quiz',
        title: 'Hemodynamic Assessment Challenge',
        question: 'The most serious hemodynamic consequence of complete AV block is:',
        options: [
          'Hypertension from increased stroke volume',
          'Tachycardia from compensation',
          'Stokes-Adams attacks from escape failure',
          'Atrial fibrillation development'
        ],
        correctAnswer: 2,
        explanation: 'Stokes-Adams attacks from sudden escape rhythm failure represent the most life-threatening hemodynamic consequence.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/hemodynamic-assessment.jpg',
        imageAlt: 'Hemodynamic complications of complete heart block'
      },
      {
        id: 'compensatory-mechanisms',
        title: 'Compensatory Mechanisms',
        content: 'The body compensates through increased stroke volume, peripheral vasoconstriction, and enhanced ventricular filling. These mechanisms may be insufficient in acute cases.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#ca8a04',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/compensatory-mechanisms.jpg',
        imageAlt: 'Physiological compensation mechanisms in complete AV block'
      },
      {
        id: 'unit4-summary',
        title: 'Unit 4 Summary: Hemodynamic Impact',
        content: 'Complete AV block severely reduces cardiac output and exercise tolerance. Stokes-Adams attacks indicate unstable escape rhythm requiring immediate intervention.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f8fafc',
        textColor: '#334155',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/unit4-summary.jpg',
        imageAlt: 'Unit 4 hemodynamic consequences summary'
      },

      // UNIT 5: EMERGENCY MANAGEMENT (Slides 29-35)
      {
        id: 'unit5-intro',
        title: 'Unit 5: Emergency Management Protocols',
        content: 'Complete AV block requires immediate assessment and often urgent intervention. Systematic approach ensures appropriate pacing and hemodynamic support.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/unit5-intro.jpg',
        imageAlt: 'Emergency management algorithm for complete AV block'
      },
      {
        id: 'immediate-assessment',
        title: 'Immediate Assessment Protocol',
        content: 'Rapid evaluation of hemodynamic stability, symptoms, escape rhythm reliability, and underlying cause. This determines urgency of intervention.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/immediate-assessment.jpg',
        imageAlt: 'Rapid assessment protocol for complete heart block'
      },
      {
        id: 'temporary-pacing',
        title: 'Temporary Pacing Indications',
        content: 'Symptomatic patients, hemodynamic instability, or escape rates <40 bpm require immediate temporary pacing. Transcutaneous pacing can bridge to transvenous.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/temporary-pacing.jpg',
        imageAlt: 'Temporary pacing setup and indications for complete AV block'
      },
      {
        id: 'pharmacologic-support',
        title: 'Pharmacologic Interventions',
        content: 'Atropine is ineffective in infranodal blocks. Dopamine or epinephrine may temporarily increase escape rate while preparing for pacing.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/pharmacologic-support.jpg',
        imageAlt: 'Medication protocols for complete AV block emergency management'
      },
      {
        id: 'management-quiz',
        title: 'Emergency Management Challenge',
        question: 'First-line treatment for symptomatic complete AV block is:',
        options: [
          'Atropine 1mg IV',
          'Immediate transcutaneous pacing',
          'Beta-blocker administration',
          'Cardioversion'
        ],
        correctAnswer: 1,
        explanation: 'Immediate transcutaneous pacing is first-line for symptomatic complete AV block, as atropine is ineffective in infranodal blocks.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/emergency-protocols.jpg',
        imageAlt: 'Emergency treatment algorithm for complete heart block'
      },
      {
        id: 'permanent-pacing',
        title: 'Permanent Pacemaker Indications',
        content: 'Most patients with complete AV block require permanent pacing. Consider reversible causes (drugs, ischemia) but err on side of aggressive treatment.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#ca8a04',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/permanent-pacing.jpg',
        imageAlt: 'Permanent pacemaker indications and timing for complete AV block'
      },
      {
        id: 'unit5-summary',
        title: 'Unit 5 Summary: Emergency Management',
        content: 'Complete AV block requires immediate hemodynamic assessment and often urgent pacing. Transcutaneous pacing bridges to permanent pacemaker placement.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f8fafc',
        textColor: '#334155',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/unit5-summary.jpg',
        imageAlt: 'Unit 5 emergency management summary'
      },

      // UNIT 6: ADVANCED ASSESSMENT (Slides 36-42)
      {
        id: 'unit6-intro',
        title: 'Unit 6: Advanced Assessment and Special Considerations',
        content: 'Specialized evaluation techniques, etiology assessment, and long-term management considerations for patients with complete AV block.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/unit6-intro.jpg',
        imageAlt: 'Advanced assessment approaches for complete AV block'
      },
      {
        id: 'etiology-assessment',
        title: 'Etiology Evaluation',
        content: 'Assess for reversible causes: medications, ischemia, electrolyte abnormalities, infection, or inflammatory conditions. This guides treatment urgency.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/etiology-assessment.jpg',
        imageAlt: 'Systematic evaluation of complete AV block causes'
      },
      {
        id: 'congenital-considerations',
        title: 'Congenital Complete Heart Block',
        content: 'May be well-tolerated with junctional escape. Maternal autoantibodies (anti-Ro/SSA) are common cause. Requires specialized pediatric cardiology management.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/congenital-considerations.jpg',
        imageAlt: 'Congenital complete heart block characteristics and management'
      },
      {
        id: 'pacemaker-programming',
        title: 'Pacemaker Programming Considerations',
        content: 'Dual-chamber pacing preserves AV synchrony. Rate-responsive features accommodate exercise needs. Programming depends on underlying atrial rhythm.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/pacemaker-programming.jpg',
        imageAlt: 'Pacemaker programming options for complete AV block'
      },
      {
        id: 'advanced-quiz',
        title: 'Advanced Assessment Challenge',
        question: 'In a young patient with congenital complete AV block and narrow escape QRS, the best approach is:',
        options: [
          'Immediate pacemaker implantation',
          'Careful monitoring with activity assessment',
          'Medication therapy only',
          'Surgical correction'
        ],
        correctAnswer: 1,
        explanation: 'Congenital complete AV block with narrow QRS may be well-tolerated, requiring careful assessment before pacing decisions.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/advanced-decisions.jpg',
        imageAlt: 'Decision-making for congenital complete heart block'
      },
      {
        id: 'long-term-monitoring',
        title: 'Long-Term Monitoring',
        content: 'Patients require regular pacemaker checks, lead function assessment, and monitoring for device-related complications. Lifestyle counseling is important.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#ca8a04',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/long-term-monitoring.jpg',
        imageAlt: 'Long-term follow-up protocols for complete AV block patients'
      },
      {
        id: 'mastery-assessment',
        title: 'Complete AV Block Mastery',
        content: 'You have mastered complete AV block: recognition, hemodynamic assessment, emergency management, and long-term care. Module 4 AV conduction mastery achieved!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/images/module4/lesson38/mastery-achievement.jpg',
        imageAlt: 'Mastery achievement badge for complete AV block and Module 4'
      }
    ],
    summary: "Third-degree (complete) AV block shows complete electrical dissociation between atria and ventricles with independent rhythms. Emergency management focuses on hemodynamic support and urgent pacing when indicated.",
    keyPoints: [
      "P waves and QRS complexes are completely independent with no relationship",
      "Escape rhythm type (junctional vs ventricular) determines prognosis",
      "Hemodynamic compromise from bradycardia and loss of AV synchrony",
      "Immediate transcutaneous pacing for symptomatic patients",
      "Most patients require permanent pacemaker implantation"
    ],
    resources: [
      {
        title: "Complete Heart Block Management",
        url: "https://youtube.com/watch?v=complete_heart_block_management",
        type: "video"
      },
      {
        title: "Pacemaker Guidelines",
        url: "https://ahajournals.org/pacemaker-indications",
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
