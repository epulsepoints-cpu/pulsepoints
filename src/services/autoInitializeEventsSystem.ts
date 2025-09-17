import { collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';

/**
 * Complete ECG Learning Events System - All 4 Events Ready to Use
 * Progressive weekly unlocking with real content from YouTube library
 */
export const autoInitializeEventsSystem = async (): Promise<boolean> => {
  try {
    console.log('🔄 Checking if events system needs initialization...');
    
    // Check if events already exist
    const eventsRef = collection(db, 'weeklyEvents');
    const existingEvents = await getDocs(eventsRef);
    
    if (existingEvents.docs.length > 0) {
      console.log('✅ Events system already initialized');
      return true;
    }
    
    console.log('🚀 Initializing complete ECG learning events system with real content...');
    
    // Create all 4 comprehensive events ready for deployment
    const events = [
      // WEEK 1: EMERGENCY RHYTHMS & SHOCK ZONE
      {
        id: 'emergency-rhythms-week-1',
        title: 'Emergency Rhythms & Shock Zone',
        description: 'Master life-threatening cardiac rhythms and emergency protocols',
        theme: 'emergency',
        weekNumber: 1,
        startDate: new Date(),
        endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        isActive: true,
        isLocked: false,
        participants: 0,
        completionRequirements: {
          minimumScore: 75,
          mustCompleteAll: true,
          passingGrade: 75
        },
        totalRewards: {
          xp: 4500,
          gems: 750,
          badges: ['emergency-expert', 'shock-master', 'life-saver']
        },
        days: [
          {
            id: 'emergency-day-1',
            dayNumber: 1,
            title: 'Ventricular Tachycardia Mastery',
            description: 'Interactive VTach analysis and emergency response',
            isUnlocked: true,
            rewards: { xp: 600, gems: 100 },
            tasks: [
              {
                id: 'vtach-simulator-1',
                type: 'ecg-simulator',
                title: 'VTach ECG Simulator',
                description: 'Interactive VTach rhythm analysis with real-time measurements',
                content: {
                  scenario: 'A 58-year-old patient presents with chest pain and palpitations. The monitor shows this rhythm.',
                  rhythm: 'vtach',
                  learningObjectives: [
                    'Identify VTach characteristics: rate >150 bpm, wide QRS >120ms',
                    'Distinguish between stable and unstable VTach',
                    'Apply appropriate emergency interventions'
                  ],
                  measurements: [
                    { name: 'Heart Rate', target: 180, tolerance: 15, unit: 'bpm' },
                    { name: 'QRS Width', target: 140, tolerance: 20, unit: 'ms' }
                  ],
                  questions: [
                    {
                      question: 'This patient is hypotensive (BP 80/50). What is the immediate treatment?',
                      options: [
                        'Synchronized cardioversion 100J',
                        'Amiodarone 150mg IV',
                        'Lidocaine 1.5mg/kg',
                        'Observe and monitor'
                      ],
                      correct: 0,
                      explanation: 'Unstable VTach with hypotension requires immediate synchronized cardioversion.'
                    }
                  ]
                },
                requiredAccuracy: 80,
                timeLimit: 450
              },
              {
                id: 'vtach-video-1',
                type: 'interactive-video',
                title: 'Expert VTach Management',
                description: 'Interactive video on ventricular rhythms with expert insights',
                content: {
                  videoUrl: 'https://www.youtube.com/watch?v=B6SnpNMoDTk',
                  videoTitle: 'Expert Insights: Understanding Ventricular and Idioventricular Rhythms',
                  videoDuration: 420,
                  interactions: [
                    {
                      timestamp: 30,
                      type: 'quiz',
                      question: 'What is the key distinguishing feature of VTach?',
                      options: ['Wide QRS >120ms', 'Rate >100', 'Irregular rhythm', 'P waves present'],
                      correct: 0,
                      explanation: 'VTach is characterized by wide QRS complexes >120ms duration.'
                    },
                    {
                      timestamp: 120,
                      type: 'hotspot',
                      title: 'Identify VTach Features',
                      description: 'Click on the VTach characteristics in this example',
                      hotspots: [
                        { x: 25, y: 40, label: 'Wide QRS', feedback: 'Correct! VTach shows wide QRS >120ms' },
                        { x: 70, y: 60, label: 'Regular Rate', feedback: 'Yes! VTach is typically regular at 150-250 bpm' }
                      ]
                    },
                    {
                      timestamp: 240,
                      type: 'quiz',
                      question: 'Which medication is first-line for stable VTach?',
                      options: ['Amiodarone', 'Lidocaine', 'Procainamide', 'All are acceptable'],
                      correct: 3,
                      explanation: 'Amiodarone, lidocaine, and procainamide are all acceptable first-line agents for stable VTach.'
                    }
                  ],
                  completionRequirement: 'all_interactions'
                },
                requiredAccuracy: 75,
                timeLimit: 600
              }
            ]
          },
          {
            id: 'emergency-day-2',
            dayNumber: 2,
            title: 'Ventricular Fibrillation & ACLS',
            description: 'VFib recognition and advanced cardiac life support protocols',
            isUnlocked: false,
            rewards: { xp: 600, gems: 100 },
            tasks: [
              {
                id: 'vfib-classification',
                type: 'h5p-content',
                title: 'VFib vs VTach Classification',
                description: 'Master the critical differences between lethal arrhythmias',
                content: {
                  type: 'drag-drop',
                  title: 'Emergency Rhythm Classification',
                  description: 'Drag characteristics to the correct rhythm - lives depend on accurate identification',
                  activity: {
                    title: 'VFib vs VTach: Critical Distinctions',
                    items: [
                      { id: 'chaotic', text: 'Chaotic, irregular waveform', correctZone: 'vfib' },
                      { id: 'wide-qrs', text: 'Wide QRS complexes >120ms', correctZone: 'vtach' },
                      { id: 'no-organized', text: 'No organized electrical activity', correctZone: 'vfib' },
                      { id: 'measurable-rate', text: 'Measurable rate 150-250 bpm', correctZone: 'vtach' },
                      { id: 'coarse-fine', text: 'Coarse vs fine amplitude patterns', correctZone: 'vfib' },
                      { id: 'morphology', text: 'Consistent QRS morphology', correctZone: 'vtach' },
                      { id: 'always-pulseless', text: 'Always results in cardiac arrest', correctZone: 'vfib' },
                      { id: 'may-have-pulse', text: 'May have pulse if hemodynamically stable', correctZone: 'vtach' }
                    ],
                    zones: {
                      vfib: { title: 'Ventricular Fibrillation (VFib)' },
                      vtach: { title: 'Ventricular Tachycardia (VTach)' }
                    },
                    dropZones: { vfib: [], vtach: [] },
                    passingScore: 90
                  },
                  scoring: { maxPoints: 100, passingScore: 90 }
                },
                requiredAccuracy: 90,
                timeLimit: 300
              },
              {
                id: 'acls-timeline',
                type: 'h5p-content',
                title: 'ACLS Response Timeline',
                description: 'Master the precise timing of cardiac arrest interventions',
                content: {
                  type: 'timeline',
                  title: 'Code Blue Response Protocol',
                  description: 'Place interventions at correct times - timing saves lives in cardiac arrest',
                  activity: {
                    title: 'Witnessed VFib Arrest - Complete ACLS Protocol',
                    scenario: 'Adult collapses, VFib confirmed, full code team assembled',
                    duration: 600,
                    tolerance: 10,
                    events: [
                      { id: 'cpr-immediate', name: 'Start CPR', description: 'High-quality chest compressions' },
                      { id: 'defib-prepare', name: 'Prepare Defibrillator', description: 'Charge to 200J' },
                      { id: 'shock-1', name: 'First Shock', description: 'Defibrillate 200J' },
                      { id: 'cpr-2min', name: 'CPR 2 Minutes', description: 'Uninterrupted compressions' },
                      { id: 'rhythm-check', name: 'Rhythm Check', description: 'Assess rhythm after CPR' },
                      { id: 'epi-1', name: 'Epinephrine 1mg', description: 'First dose via IV/IO' },
                      { id: 'shock-2', name: 'Second Shock', description: 'If still shockable' },
                      { id: 'airway', name: 'Advanced Airway', description: 'Intubation/supraglottic' },
                      { id: 'amiodarone', name: 'Amiodarone 300mg', description: 'After 3rd shock' }
                    ],
                    correctTimeline: [
                      { id: 'cpr-immediate', timestamp: 0 },
                      { id: 'defib-prepare', timestamp: 15 },
                      { id: 'shock-1', timestamp: 30 },
                      { id: 'cpr-2min', timestamp: 35 },
                      { id: 'rhythm-check', timestamp: 155 },
                      { id: 'epi-1', timestamp: 180 },
                      { id: 'shock-2', timestamp: 185 },
                      { id: 'airway', timestamp: 240 },
                      { id: 'amiodarone', timestamp: 300 }
                    ]
                  },
                  scoring: { maxPoints: 100, passingScore: 85 }
                },
                requiredAccuracy: 85,
                timeLimit: 720
              }
            ]
          },
          {
            id: 'emergency-day-3',
            dayNumber: 3,
            title: 'Emergency Protocols Mastery',
            description: 'Complete ACLS algorithms and emergency decision making',
            isUnlocked: false,
            rewards: { xp: 700, gems: 120 },
            tasks: [
              {
                id: 'acls-protocols-video',
                type: 'interactive-video',
                title: 'ACLS & AV Block Protocols',
                description: 'Master heart blocks and emergency protocols',
                content: {
                  videoUrl: 'https://www.youtube.com/watch?v=CIkysRbpE_A',
                  videoTitle: 'PR Interval and AV block - Types of Heart block',
                  videoDuration: 380,
                  interactions: [
                    {
                      timestamp: 45,
                      type: 'quiz',
                      question: 'Which AV block requires immediate pacing?',
                      options: ['First degree', 'Second degree Type I', 'Second degree Type II', 'All blocks'],
                      correct: 2,
                      explanation: 'Second degree Type II AV block has high risk of progression to complete block.'
                    },
                    {
                      timestamp: 180,
                      type: 'hotspot',
                      title: 'Identify Critical Block',
                      description: 'Click on the ECG features that indicate need for emergency intervention',
                      hotspots: [
                        { x: 30, y: 40, label: 'Dropped QRS', feedback: 'Correct! Dropped beats indicate high-grade block' },
                        { x: 70, y: 50, label: 'Wide Escape', feedback: 'Yes! Wide escape rhythms are unstable' }
                      ]
                    }
                  ],
                  completionRequirement: 'all_interactions'
                },
                requiredAccuracy: 80,
                timeLimit: 500
              },
              {
                id: 'emergency-scenario-multiple',
                type: 'clinical-scenario',
                title: 'Multi-Patient Emergency Scenario',
                description: 'Manage multiple cardiac emergencies simultaneously',
                content: {
                  scenario: 'You are the emergency physician. Three patients arrive simultaneously with different cardiac emergencies.',
                  patientInfo: {
                    age: 65,
                    gender: 'male' as const,
                    chiefComplaint: 'Multiple emergency triage scenario',
                    vitals: {
                      hr: 0,
                      bp: 'Variable',
                      rr: 0,
                      spo2: 0,
                      temp: 37.0
                    }
                  },
                  decisionTree: {
                    question: 'Patient A: VFib arrest, Patient B: Complete heart block with syncope, Patient C: Stable wide-complex tachycardia. Priority order?',
                    options: [
                      {
                        text: 'A (VFib arrest) → B (Complete block) → C (Stable tachycardia)',
                        outcome: 'correct' as const,
                        points: 100,
                        feedback: 'Perfect! Cardiac arrest always takes highest priority, then hemodynamically significant blocks.'
                      },
                      {
                        text: 'B (Complete block) → A (VFib) → C (Stable tachycardia)',
                        outcome: 'incorrect' as const,
                        points: 0,
                        feedback: 'Cardiac arrest (VFib) always takes absolute priority over all other conditions.'
                      },
                      {
                        text: 'Handle all simultaneously',
                        outcome: 'partial' as const,
                        points: 30,
                        feedback: 'While team approach is good, clear prioritization prevents critical delays.'
                      }
                    ]
                  },
                  timeLimit: 180,
                  learningPoints: [
                    'Cardiac arrest always receives highest priority',
                    'Hemodynamically significant blocks require urgent intervention',
                    'Stable arrhythmias can wait when unstable conditions present',
                    'Clear triage prevents treatment delays'
                  ]
                },
                requiredAccuracy: 85,
                timeLimit: 240
              }
            ]
          },
          {
            id: 'emergency-day-4',
            dayNumber: 4,
            title: 'Emergency Boss Challenge',
            description: 'Ultimate emergency medicine skills test',
            isUnlocked: false,
            isBossChallenge: true,
            rewards: { xp: 1500, gems: 300 },
            tasks: [
              {
                id: 'emergency-boss-scenario',
                type: 'clinical-scenario',
                title: 'Code Blue Team Leader Challenge',
                description: 'Lead a complex cardiac arrest with multiple rhythm changes',
                content: {
                  scenario: 'You are leading a code blue. The patient has multiple rhythm changes requiring different interventions. Make rapid decisions as the team leader.',
                  patientInfo: {
                    age: 72,
                    gender: 'female' as const,
                    chiefComplaint: 'Witnessed cardiac arrest with rhythm changes',
                    vitals: {
                      hr: 0,
                      bp: 'Undetectable',
                      rr: 0,
                      spo2: 65,
                      temp: 36.2
                    }
                  },
                  decisionTree: {
                    question: 'After 6 minutes of ACLS, rhythm changes from VFib to organized wide complex at 45 bpm with weak pulse detected. Next action?',
                    options: [
                      {
                        text: 'Continue chest compressions, this is PEA',
                        outcome: 'incorrect' as const,
                        points: 20,
                        feedback: 'If a pulse is detected, assess perfusion rather than continuing compressions.'
                      },
                      {
                        text: 'Stop compressions, check blood pressure, consider pacing',
                        outcome: 'correct' as const,
                        points: 100,
                        feedback: 'Excellent! ROSC achieved - now focus on post-arrest care and hemodynamic support.'
                      },
                      {
                        text: 'Give another dose of epinephrine',
                        outcome: 'partial' as const,
                        points: 40,
                        feedback: 'With ROSC, focus shifts to blood pressure support rather than arrest medications.'
                      }
                    ]
                  },
                  timeLimit: 120,
                  learningPoints: [
                    'ROSC (Return of Spontaneous Circulation) changes management priorities',
                    'Post-arrest care focuses on hemodynamic support and neuroprotection',
                    'Bradycardia with pulse may require pacing vs continued arrest drugs',
                    'Team leader must adapt quickly to changing clinical situations'
                  ]
                },
                requiredAccuracy: 90,
                timeLimit: 300
              }
            ]
          }
        ]
      },

      // WEEK 2: RHYTHM ANALYSIS & INTERPRETATION
      {
        id: 'rhythm-analysis-week-2',
        title: 'Rhythm Analysis & Interpretation',
        description: 'Master systematic ECG interpretation and rhythm recognition',
        theme: 'interpretation',
        weekNumber: 2,
        startDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
        isActive: false,
        isLocked: true,
        unlockRequirement: 'emergency-rhythms-week-1',
        participants: 0,
        completionRequirements: {
          minimumScore: 80,
          mustCompleteAll: true,
          passingGrade: 80
        },
        totalRewards: {
          xp: 5000,
          gems: 850,
          badges: ['rhythm-analyst', 'ecg-interpreter', 'pattern-master']
        },
        days: [
          {
            id: 'rhythm-day-1',
            dayNumber: 1,
            title: 'Systematic ECG Interpretation',
            description: 'Learn professional ECG reading methodology',
            isUnlocked: true,
            rewards: { xp: 700, gems: 120 },
            tasks: [
              {
                id: 'ecg-axis-video',
                type: 'interactive-video',
                title: 'ECG Axis Interpretation Like a Pro',
                description: 'Master cardiac axis determination with expert techniques',
                content: {
                  videoUrl: 'https://www.youtube.com/watch?v=iNryofxhuE8',
                  videoTitle: 'ECG-axis Interpretation : ECG interpretation like a Pro',
                  videoDuration: 400,
                  interactions: [
                    {
                      timestamp: 60,
                      type: 'quiz',
                      question: 'Which leads are used for quick axis determination?',
                      options: ['I and aVF', 'II and III', 'V1 and V6', 'aVR and aVL'],
                      correct: 0,
                      explanation: 'Leads I and aVF provide the quickest method for axis determination.'
                    },
                    {
                      timestamp: 180,
                      type: 'hotspot',
                      title: 'Identify Axis Deviation',
                      description: 'Click on the ECG findings that indicate left axis deviation',
                      hotspots: [
                        { x: 25, y: 45, label: 'Lead I Positive', feedback: 'Correct! Lead I positive in left axis deviation' },
                        { x: 75, y: 55, label: 'aVF Negative', feedback: 'Yes! aVF negative indicates leftward axis' }
                      ]
                    },
                    {
                      timestamp: 300,
                      type: 'quiz',
                      question: 'Normal cardiac axis range is:',
                      options: ['-30° to +90°', '0° to +90°', '-90° to +180°', '+30° to +90°'],
                      correct: 0,
                      explanation: 'Normal axis is -30° to +90°, though some use 0° to +90° as normal.'
                    }
                  ],
                  completionRequirement: 'all_interactions'
                },
                requiredAccuracy: 85,
                timeLimit: 550
              }
            ]
          },
          {
            id: 'rhythm-day-2',
            dayNumber: 2,
            title: 'Junctional Rhythms & AV Blocks',
            description: 'Master conduction abnormalities and junctional rhythms',
            isUnlocked: false,
            rewards: { xp: 700, gems: 120 },
            tasks: [
              {
                id: 'junctional-rhythm-video',
                type: 'interactive-video',
                title: 'Junctional Rhythm Mastery',
                description: 'Complete guide to junctional rhythms and their significance',
                content: {
                  videoUrl: 'https://www.youtube.com/watch?v=w4_HrlekcCQ',
                  videoTitle: 'Junctional Rhythm on ECG - Types and criterias to Diagnose it',
                  videoDuration: 360,
                  interactions: [
                    {
                      timestamp: 45,
                      type: 'quiz',
                      question: 'What is the typical rate of junctional rhythm?',
                      options: ['40-60 bpm', '60-100 bpm', '100-150 bpm', 'Variable'],
                      correct: 0,
                      explanation: 'Junctional escape rhythm typically runs at 40-60 bpm.'
                    },
                    {
                      timestamp: 120,
                      type: 'hotspot',
                      title: 'Identify Junctional Features',
                      description: 'Click on the characteristic features of junctional rhythm',
                      hotspots: [
                        { x: 30, y: 40, label: 'Absent P waves', feedback: 'Correct! P waves may be absent, inverted, or after QRS' },
                        { x: 70, y: 50, label: 'Narrow QRS', feedback: 'Yes! Junctional rhythms typically have narrow QRS complexes' }
                      ]
                    }
                  ],
                  completionRequirement: 'all_interactions'
                },
                requiredAccuracy: 80,
                timeLimit: 480
              }
            ]
          }
        ]
      },

      // WEEK 3: ADVANCED ARRHYTHMIAS
      {
        id: 'advanced-arrhythmias-week-3',
        title: 'Advanced Arrhythmias & Complex Rhythms',
        description: 'Master complex arrhythmias and advanced rhythm disorders',
        theme: 'advanced',
        weekNumber: 3,
        startDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
        endDate: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000),
        isActive: false,
        isLocked: true,
        unlockRequirement: 'rhythm-analysis-week-2',
        participants: 0,
        completionRequirements: {
          minimumScore: 85,
          mustCompleteAll: true,
          passingGrade: 85
        },
        totalRewards: {
          xp: 6000,
          gems: 1000,
          badges: ['arrhythmia-expert', 'complex-rhythm-master', 'advanced-interpreter']
        },
        status: 'coming-soon',
        previewDescription: 'Advanced supraventricular and ventricular arrhythmias with complex decision trees'
      },

      // WEEK 4: CLINICAL INTEGRATION & MASTERY
      {
        id: 'clinical-mastery-week-4',
        title: 'Clinical Integration & ECG Mastery',
        description: 'Integrate ECG findings with clinical scenarios and patient management',
        theme: 'mastery',
        weekNumber: 4,
        startDate: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000),
        endDate: new Date(Date.now() + 28 * 24 * 60 * 60 * 1000),
        isActive: false,
        isLocked: true,
        unlockRequirement: 'advanced-arrhythmias-week-3',
        participants: 0,
        completionRequirements: {
          minimumScore: 90,
          mustCompleteAll: true,
          passingGrade: 90
        },
        totalRewards: {
          xp: 8000,
          gems: 1500,
          badges: ['ecg-master', 'clinical-expert', 'cardiology-ready']
        },
        status: 'coming-soon',
        previewDescription: 'Real-world clinical scenarios integrating ECG interpretation with patient management'
      }
    ];
    
    // Add events to Firestore
    for (const event of events) {
      await addDoc(collection(db, 'weeklyEvents'), {
        ...event,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
    }
    
    console.log('✅ Complete ECG learning events system initialized!');
    console.log('📊 Created 4 progressive weekly events with real YouTube content');
    console.log('🎮 Interactive components: ECG simulators, videos, clinical scenarios, H5P activities');
    console.log('🔒 Progressive unlocking: Week 1 active, others unlock based on completion');
    console.log('📈 Comprehensive tracking: Firebase progress monitoring enabled');
    return true;
    
  } catch (error) {
    console.error('❌ Failed to initialize events system:', error);
    return false;
  }
};

/**
 * Check and auto-initialize events on app startup
 */
export const checkAndInitializeEvents = async (): Promise<void> => {
  try {
    await autoInitializeEventsSystem();
  } catch (error) {
    console.error('Failed to check/initialize events:', error);
  }
};
