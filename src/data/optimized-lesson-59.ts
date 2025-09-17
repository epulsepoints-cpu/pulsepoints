import { Lesson } from '@/types/learning';

export const optimizedLesson59: Lesson = {
  id: 'lesson-7-7-optimized',
  moduleId: 'module-7',
  title: "ACLS Integration & Team Management",
  description: "Advanced cardiac life support integration and emergency team coordination",
  order: 7,
  estimatedTime: 22,
  content: {
    type: 'mixed',
    introduction: "Master ACLS integration and emergency team management. Effective resuscitation requires coordinated team effort with clear roles and systematic approaches to cardiac emergencies.",
    sections: [
      {
        id: 'section-overview',
        title: "ACLS Team Management",
        content: "TEAM COORDINATION: Clear Roles → Systematic Approach → Algorithm Integration → Quality CPR → Team Communication",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'acls-team-roles',
        title: 'ACLS Team Roles & Responsibilities',
        content: 'Team Leader: overall coordination, decision-making. CPR Provider: chest compressions. Airway Manager: ventilation, intubation. IV/IO Access: medications, fluids. Monitor/Recorder: rhythm analysis, documentation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module7/lesson59/acls-team-roles.jpg',
        imageAlt: 'ACLS team organization with defined roles and responsibilities',
        audio: {
          narrationUrl: 'audio/module7/lesson59/acls-team-roles.mp3',
          autoPlay: false
        }
      },
      {
        id: 'systematic-approach',
        title: 'Systematic ACLS Approach',
        question: 'The systematic approach to cardiac arrest begins with:',
        options: [
          'Immediate intubation',
          'BLS assessment and high-quality CPR',
          'IV access and medications',
          'Advanced monitoring'
        ],
        correctAnswer: 1,
        explanation: 'BLS assessment (responsiveness, pulse, breathing) and immediate high-quality CPR form the foundation of cardiac arrest management.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module7/lesson59/systematic-approach.jpg',
        imageAlt: 'ACLS systematic approach starting with BLS assessment',
        audio: {
          narrationUrl: 'audio/module7/lesson59/systematic-approach.mp3',
          autoPlay: false
        }
      },
      {
        id: 'cpr-quality-metrics',
        title: 'High-Quality CPR Metrics',
        content: 'Rate: 100-120/min. Depth: 2-2.4 inches. Complete recoil. Minimize interruptions (<10 seconds). Switch compressors every 2 minutes. Avoid hyperventilation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module7/lesson59/cpr-quality-metrics.jpg',
        imageAlt: 'CPR quality metrics with target parameters'},
      {
        id: 'rhythm-algorithm-selection',
        title: 'Rhythm-Based Algorithm Selection',
        question: 'Algorithm selection is based on:',
        options: [
          'Patient age only',
          'Shockable vs non-shockable rhythm',
          'Location of arrest',
          'Time of day'
        ],
        correctAnswer: 1,
        explanation: 'ACLS algorithms are primarily divided into shockable (VF/pulseless VT) and non-shockable (PEA/asystole) pathways.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module7/lesson59/rhythm-algorithm-selection.jpg',
        imageAlt: 'ACLS algorithm decision tree based on rhythm analysis'},
      {
        id: 'medication-timing',
        title: 'ACLS Medication Timing',
        content: 'Epinephrine: every 3-5 minutes for all arrest rhythms. Amiodarone: after 3rd shock for refractory VF/VT. Atropine: for symptomatic bradycardia. All followed by 20ml saline flush.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module7/lesson59/medication-timing.jpg',
        imageAlt: 'ACLS medication timing chart with indications'},
      {
        id: 'reversible-causes-hs-ts',
        title: 'Reversible Causes: H\'s and T\'s',
        question: 'The "T\'s" of reversible causes include all EXCEPT:',
        options: [
          'Tension pneumothorax',
          'Tamponade (cardiac)',
          'Thrombosis (pulmonary/coronary)',
          'Tachycardia'
        ],
        correctAnswer: 3,
        explanation: 'The T\'s are: Toxins, Tamponade, Tension pneumothorax, Thrombosis (pulmonary/coronary). Tachycardia is not a reversible cause.',
        type: 'question',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: 'images/module7/lesson59/reversible-causes-hs-ts.jpg',
        imageAlt: 'Complete H\'s and T\'s reversible causes checklist'},
      {
        id: 'post-rosc-care',
        title: 'Post-ROSC (Return of Spontaneous Circulation)',
        content: 'Post-ROSC priorities: optimize ventilation and oxygenation, treat hypotension, control temperature, neurologic evaluation, consider targeted temperature management.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module7/lesson59/post-rosc-care.jpg',
        imageAlt: 'Post-ROSC care algorithm with priority interventions'},
      {
        id: 'team-communication',
        title: 'Effective Team Communication',
        content: 'Clear, concise communication is vital. Use closed-loop communication: order given → acknowledged → performed → confirmed. Avoid "Please" and "Thank you" during active resuscitation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module7/lesson59/team-communication.jpg',
        imageAlt: 'Closed-loop communication model for emergency teams'},
      {
        id: 'acls-mastery',
        title: 'ACLS Integration Mastery',
        content: 'You have mastered ACLS integration and team management. Effective resuscitation combines systematic algorithms, high-quality CPR, clear communication, and coordinated team effort.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module7/lesson59/acls-mastery.jpg',
        imageAlt: 'ACLS mastery achievement with team coordination excellence',
        audio: {
          narrationUrl: 'audio/module7/lesson59/acls-mastery.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "ACLS integration requires systematic approach, high-quality CPR, clear team roles, and effective communication for optimal resuscitation outcomes.",
    keyPoints: [
      "Systematic approach begins with BLS assessment and CPR",
      "Algorithm selection based on shockable vs non-shockable rhythms",
      "High-quality CPR metrics: rate 100-120, depth 2-2.4 inches",
      "Closed-loop communication essential for team coordination"
    ],
    resources: [
      {
        title: "ACLS Team Management",
        url: "https://youtube.com/watch?v=acls_team_management",
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
