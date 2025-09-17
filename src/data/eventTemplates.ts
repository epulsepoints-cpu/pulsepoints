import { 
  WeeklyEventTemplate, 
  EventDayTemplate, 
  EventTaskTemplate,
  TaskContent 
} from '@/types/events';

/**
 * Default Event Templates for the Weekly Event System
 * These templates define the structure and content for each themed event
 */

export const defaultEventTemplates: WeeklyEventTemplate[] = [
  {
    id: 'shock-zone-template',
    title: 'Shock Zone',
    description: 'Master emergency arrhythmias and life-threatening ECG patterns',
    theme: 'shock-zone',
    backgroundGradient: 'from-red-500 via-orange-500 to-yellow-500',
    iconColor: 'text-red-500',
    dayTemplates: [
      {
        dayNumber: 1,
        title: 'Emergency Basics',
        description: 'Learn the fundamentals of emergency ECG interpretation',
        type: 'intro-lesson',
        baseRewards: { xp: 50, gems: 10 },
        taskTemplates: [
          {
            type: 'intro-lesson',
            title: 'Emergency ECG Patterns',
            description: 'Introduction to life-threatening ECG patterns',
            difficulty: 'easy',
            points: 25,
            contentTemplate: {
              type: 'intro-lesson',
              text: 'Welcome to Shock Zone! Learn to recognize critical ECG patterns that require immediate intervention.',
              keyPoints: [
                'Ventricular Fibrillation Recognition',
                'Ventricular Tachycardia Identification', 
                'Asystole vs. Artifact',
                'Immediate Response Protocols'
              ]
            }
          },
          {
            type: 'mini-quiz',
            title: 'Quick Assessment',
            description: 'Test your understanding of emergency patterns',
            difficulty: 'easy',
            points: 25,
            contentTemplate: {
              type: 'mini-quiz',
              questions: [
                {
                  question: 'What is the most immediate concern with Ventricular Fibrillation?',
                  options: ['Slow heart rate', 'No cardiac output', 'High blood pressure', 'Chest pain'],
                  correctAnswer: 1,
                  explanation: 'VFib produces no effective cardiac output and requires immediate defibrillation.'
                }
              ]
            }
          }
        ]
      },
      {
        dayNumber: 2,
        title: 'VFib Detective',
        description: 'Identify and analyze Ventricular Fibrillation patterns',
        type: 'ecg-case',
        baseRewards: { xp: 75, gems: 15 },
        taskTemplates: [
          {
            type: 'ecg-case',
            title: 'Emergency Room Case',
            description: 'A patient collapses in the ER - analyze their ECG',
            difficulty: 'medium',
            points: 75,
            contentTemplate: {
              type: 'ecg-case',
              patientInfo: {
                age: 65,
                gender: 'male',
                symptoms: ['sudden collapse', 'unresponsive', 'no pulse'],
                history: 'Previous MI, known CAD'
              },
              questions: [
                {
                  question: 'What is the primary rhythm shown?',
                  options: ['Ventricular Fibrillation', 'Ventricular Tachycardia', 'Asystole', 'Atrial Fibrillation'],
                  correctAnswer: 0,
                  explanation: 'This chaotic, irregular waveform is characteristic of Ventricular Fibrillation.'
                }
              ],
              diagnosis: 'Ventricular Fibrillation',
              explanation: 'This patient requires immediate CPR and defibrillation.'
            }
          }
        ]
      },
      {
        dayNumber: 3,
        title: 'Code Blue Rush',
        description: 'Time-critical ECG interpretation under pressure',
        type: 'time-challenge',
        baseRewards: { xp: 100, gems: 20 },
        taskTemplates: [
          {
            type: 'time-challenge',
            title: '5-Minute Emergency Challenge',
            description: 'Identify critical rhythms as fast as possible',
            difficulty: 'hard',
            points: 100,
            timeLimit: 300, // 5 minutes
            contentTemplate: {
              type: 'time-challenge',
              timeLimit: 300,
              passingScore: 80,
              questions: [
                {
                  question: 'Rhythm identification needed STAT!',
                  options: ['VFib', 'VTach', 'SVT', 'Asystole'],
                  correctAnswer: 0,
                  explanation: 'Quick recognition saves lives!'
                }
              ]
            }
          }
        ]
      },
      {
        dayNumber: 4,
        title: 'Rhythm Sorting',
        description: 'Sort ECG strips by severity and urgency',
        type: 'visual-sorting',
        baseRewards: { xp: 80, gems: 16 },
        taskTemplates: [
          {
            type: 'visual-sorting',
            title: 'Triage Priority',
            description: 'Sort these rhythms by treatment priority',
            difficulty: 'medium',
            points: 80,
            contentTemplate: {
              type: 'visual-sorting',
              title: 'Emergency Triage',
              description: 'Arrange these ECG strips from most to least urgent',
              criteria: 'urgency'
            }
          }
        ]
      },
      {
        dayNumber: 5,
        title: 'ER Scenario',
        description: 'Navigate a real-life emergency scenario',
        type: 'scenario-choice',
        baseRewards: { xp: 90, gems: 18 },
        taskTemplates: [
          {
            type: 'scenario-choice',
            title: 'Code Blue Response',
            description: 'Make critical decisions in an emergency',
            difficulty: 'medium',
            points: 90,
            contentTemplate: {
              type: 'scenario-choice',
              scenario: {
                title: 'Cardiac Arrest in ER',
                description: 'Patient suddenly collapses, monitor shows chaotic rhythm',
                setting: 'Emergency Department',
                patientInfo: '58-year-old female, chest pain history'
              },
              choices: [
                {
                  text: 'Start CPR immediately',
                  isCorrect: true,
                  explanation: 'Correct! CPR is the first priority in cardiac arrest.'
                },
                {
                  text: 'Check pulse for 30 seconds',
                  isCorrect: false,
                  explanation: 'Time is critical - start CPR if no obvious pulse.'
                }
              ]
            }
          }
        ]
      },
      {
        dayNumber: 6,
        title: 'Flash Cards',
        description: 'Master emergency drug dosages and protocols',
        type: 'flashcards',
        baseRewards: { xp: 70, gems: 14 },
        taskTemplates: [
          {
            type: 'flashcards',
            title: 'Emergency Protocols',
            description: 'Study critical emergency procedures',
            difficulty: 'medium',
            points: 70,
            contentTemplate: {
              type: 'flashcards',
              studyMode: 'mixed',
              cards: [
                {
                  front: 'VFib Treatment',
                  back: 'Immediate defibrillation + CPR + Epinephrine',
                  difficulty: 'hard',
                  category: 'Treatment'
                }
              ]
            }
          }
        ]
      },
      {
        dayNumber: 7,
        title: 'Boss: Master Resuscitator',
        description: 'Ultimate challenge - save multiple patients',
        type: 'boss-challenge',
        isBossChallenge: true,
        baseRewards: { xp: 200, gems: 50 },
        taskTemplates: [
          {
            type: 'boss-challenge',
            title: 'Code Team Leader',
            description: 'Lead a full cardiac arrest scenario',
            difficulty: 'hard',
            points: 200,
            contentTemplate: {
              type: 'boss-challenge',
              title: 'Multi-Patient Emergency',
              description: 'Handle 3 consecutive cardiac emergencies',
              phases: [
                {
                  title: 'Patient 1: VFib',
                  description: 'Elderly male in VFib',
                  type: 'ecg-case',
                  passingScore: 85,
                  timeLimit: 180
                },
                {
                  title: 'Patient 2: VTach',
                  description: 'Young female in VTach',
                  type: 'scenario-choice',
                  passingScore: 85,
                  timeLimit: 120
                },
                {
                  title: 'Patient 3: Asystole',
                  description: 'Post-arrest care decisions',
                  type: 'mini-quiz',
                  passingScore: 90
                }
              ],
              finalRewards: {
                xp: 200,
                gems: 50,
                specialBadge: 'Master Resuscitator',
                unlocks: ['Advanced Arrhythmias Module']
              }
            }
          }
        ]
      }
    ]
  },
  
  {
    id: 'pulse-racer-template',
    title: 'Pulse Racer',
    description: 'Master tachyarrhythmias and rapid heart rate disorders',
    theme: 'pulse-racer',
    backgroundGradient: 'from-purple-500 via-pink-500 to-red-500',
    iconColor: 'text-purple-500',
    dayTemplates: [
      {
        dayNumber: 1,
        title: 'Speed Basics',
        description: 'Learn about tachyarrhythmias and rapid rhythms',
        type: 'intro-lesson',
        baseRewards: { xp: 50, gems: 10 },
        taskTemplates: [
          {
            type: 'intro-lesson',
            title: 'Tachyarrhythmia Fundamentals',
            description: 'Understanding fast heart rhythms',
            difficulty: 'easy',
            points: 25,
            contentTemplate: {
              type: 'intro-lesson',
              text: 'Welcome to Pulse Racer! Master the interpretation of rapid heart rhythms and their clinical significance.',
              keyPoints: [
                'SVT vs VT Differentiation',
                'Atrial Flutter Recognition',
                'Rate vs Rhythm Analysis',
                'Hemodynamic Stability Assessment'
              ]
            }
          }
        ]
      },
      {
        dayNumber: 2,
        title: 'SVT Mystery',
        description: 'Unravel supraventricular tachycardia cases',
        type: 'ecg-case',
        baseRewards: { xp: 75, gems: 15 },
        taskTemplates: [
          {
            type: 'ecg-case',
            title: 'Young Athlete Case',
            description: 'A 25-year-old runner with palpitations',
            difficulty: 'medium',
            points: 75,
            contentTemplate: {
              type: 'ecg-case',
              patientInfo: {
                age: 25,
                gender: 'female',
                symptoms: ['palpitations', 'dizziness', 'chest tightness'],
                history: 'Competitive runner, no prior cardiac history'
              },
              diagnosis: 'Supraventricular Tachycardia',
              explanation: 'Regular narrow complex tachycardia consistent with SVT.'
            }
          }
        ]
      },
      {
        dayNumber: 3,
        title: 'Speed Challenge',
        description: 'Rapid rhythm identification under time pressure',
        type: 'time-challenge',
        baseRewards: { xp: 100, gems: 20 },
        taskTemplates: [
          {
            type: 'time-challenge',
            title: 'Tachycardia Sprint',
            description: 'Identify tachyarrhythmias quickly',
            difficulty: 'hard',
            points: 100,
            timeLimit: 300,
            contentTemplate: {
              type: 'time-challenge',
              timeLimit: 300,
              passingScore: 75
            }
          }
        ]
      },
      {
        dayNumber: 4,
        title: 'Rate Sorting',
        description: 'Sort rhythms by heart rate ranges',
        type: 'visual-sorting',
        baseRewards: { xp: 80, gems: 16 },
        taskTemplates: [
          {
            type: 'visual-sorting',
            title: 'Rate Classification',
            description: 'Organize ECGs by heart rate',
            difficulty: 'medium',
            points: 80,
            contentTemplate: {
              type: 'visual-sorting',
              criteria: 'heart-rate'
            }
          }
        ]
      },
      {
        dayNumber: 5,
        title: 'Treatment Choices',
        description: 'Choose appropriate treatments for tachyarrhythmias',
        type: 'scenario-choice',
        baseRewards: { xp: 90, gems: 18 },
        taskTemplates: [
          {
            type: 'scenario-choice',
            title: 'Treatment Selection',
            description: 'Choose the best treatment approach',
            difficulty: 'medium',
            points: 90,
            contentTemplate: {
              type: 'scenario-choice',
              scenario: {
                title: 'Stable SVT Patient',
                description: 'Patient with SVT, stable vitals',
                setting: 'Emergency Department',
                patientInfo: 'Alert, normal blood pressure'
              }
            }
          }
        ]
      },
      {
        dayNumber: 6,
        title: 'Drug Flashcards',
        description: 'Learn antiarrhythmic medications',
        type: 'flashcards',
        baseRewards: { xp: 70, gems: 14 },
        taskTemplates: [
          {
            type: 'flashcards',
            title: 'Antiarrhythmic Drugs',
            description: 'Master medication knowledge',
            difficulty: 'medium',
            points: 70,
            contentTemplate: {
              type: 'flashcards',
              studyMode: 'recognition'
            }
          }
        ]
      },
      {
        dayNumber: 7,
        title: 'Boss: Rhythm Master',
        description: 'Master all types of tachyarrhythmias',
        type: 'boss-challenge',
        isBossChallenge: true,
        baseRewards: { xp: 200, gems: 50 },
        taskTemplates: [
          {
            type: 'boss-challenge',
            title: 'Tachycardia Expert',
            description: 'Prove your mastery of all fast rhythms',
            difficulty: 'hard',
            points: 200,
            contentTemplate: {
              type: 'boss-challenge',
              title: 'Speed Demon Challenge',
              description: 'Handle complex tachyarrhythmia scenarios',
              finalRewards: {
                xp: 200,
                gems: 50,
                specialBadge: 'Rhythm Master',
                unlocks: ['Advanced Rate Control Module']
              }
            }
          }
        ]
      }
    ]
  },

  {
    id: 'code-blue-rush-template',
    title: 'Code Blue Rush',
    description: 'Handle multi-patient emergencies and team coordination',
    theme: 'code-blue-rush',
    backgroundGradient: 'from-blue-600 via-blue-500 to-cyan-400',
    iconColor: 'text-blue-500',
    dayTemplates: [
      {
        dayNumber: 1,
        title: 'Team Basics',
        description: 'Learn code team roles and communication',
        type: 'intro-lesson',
        baseRewards: { xp: 50, gems: 10 },
        taskTemplates: [
          {
            type: 'intro-lesson',
            title: 'Code Team Dynamics',
            description: 'Effective team communication in emergencies',
            difficulty: 'easy',
            points: 25,
            contentTemplate: {
              type: 'intro-lesson',
              text: 'Master the art of code team leadership and emergency coordination.',
              keyPoints: [
                'Code Team Roles',
                'Communication Protocols',
                'Equipment Management',
                'Post-Code Analysis'
              ]
            }
          }
        ]
      },
      {
        dayNumber: 2,
        title: 'Multi-Patient',
        description: 'Handle multiple simultaneous emergencies',
        type: 'ecg-case',
        baseRewards: { xp: 75, gems: 15 },
        taskTemplates: [
          {
            type: 'ecg-case',
            title: 'Busy Night Shift',
            description: 'Multiple patients need immediate attention',
            difficulty: 'hard',
            points: 75,
            contentTemplate: {
              type: 'ecg-case',
              patientInfo: {
                age: 70,
                gender: 'male',
                symptoms: ['chest pain', 'shortness of breath'],
                history: 'COPD, previous stroke'
              },
              diagnosis: 'Acute MI with complications',
              explanation: 'Complex case requiring prioritization skills.'
            }
          }
        ]
      },
      {
        dayNumber: 3,
        title: 'Emergency Sprint',
        description: 'Rapid decision making in crisis situations',
        type: 'time-challenge',
        baseRewards: { xp: 100, gems: 20 },
        taskTemplates: [
          {
            type: 'time-challenge',
            title: 'Crisis Management',
            description: 'Make quick decisions under pressure',
            difficulty: 'hard',
            points: 100,
            timeLimit: 240,
            contentTemplate: {
              type: 'time-challenge',
              timeLimit: 240,
              passingScore: 85
            }
          }
        ]
      },
      {
        dayNumber: 4,
        title: 'Priority Sorting',
        description: 'Triage patients by severity',
        type: 'visual-sorting',
        baseRewards: { xp: 80, gems: 16 },
        taskTemplates: [
          {
            type: 'visual-sorting',
            title: 'Patient Triage',
            description: 'Sort patients by treatment priority',
            difficulty: 'medium',
            points: 80,
            contentTemplate: {
              type: 'visual-sorting',
              criteria: 'urgency'
            }
          }
        ]
      },
      {
        dayNumber: 5,
        title: 'Leadership Test',
        description: 'Lead a code team through complex scenarios',
        type: 'scenario-choice',
        baseRewards: { xp: 90, gems: 18 },
        taskTemplates: [
          {
            type: 'scenario-choice',
            title: 'Code Team Leader',
            description: 'Make leadership decisions',
            difficulty: 'hard',
            points: 90,
            contentTemplate: {
              type: 'scenario-choice',
              scenario: {
                title: 'Mass Casualty Event',
                description: 'Multiple patients arriving simultaneously',
                setting: 'Emergency Department',
                patientInfo: 'Multiple trauma patients'
              }
            }
          }
        ]
      },
      {
        dayNumber: 6,
        title: 'Protocol Cards',
        description: 'Master emergency protocols and procedures',
        type: 'flashcards',
        baseRewards: { xp: 70, gems: 14 },
        taskTemplates: [
          {
            type: 'flashcards',
            title: 'Emergency Protocols',
            description: 'Study critical procedures',
            difficulty: 'hard',
            points: 70,
            contentTemplate: {
              type: 'flashcards',
              studyMode: 'recall'
            }
          }
        ]
      },
      {
        dayNumber: 7,
        title: 'Boss: Code Commander',
        description: 'Ultimate leadership challenge',
        type: 'boss-challenge',
        isBossChallenge: true,
        baseRewards: { xp: 200, gems: 50 },
        taskTemplates: [
          {
            type: 'boss-challenge',
            title: 'Emergency Director',
            description: 'Command multiple emergency scenarios',
            difficulty: 'hard',
            points: 200,
            contentTemplate: {
              type: 'boss-challenge',
              title: 'Crisis Commander',
              description: 'Lead through the ultimate emergency challenge',
              finalRewards: {
                xp: 200,
                gems: 50,
                specialBadge: 'Code Commander',
                unlocks: ['Advanced Team Leadership Module']
              }
            }
          }
        ]
      }
    ]
  },

  {
    id: 'stemi-gauntlet-template',
    title: 'The STEMI Gauntlet',
    description: 'Master heart attack recognition and time-critical interventions',
    theme: 'stemi-gauntlet',
    backgroundGradient: 'from-green-600 via-emerald-500 to-teal-400',
    iconColor: 'text-green-500',
    dayTemplates: [
      {
        dayNumber: 1,
        title: 'STEMI Basics',
        description: 'Learn to recognize ST-elevation myocardial infarction',
        type: 'intro-lesson',
        baseRewards: { xp: 50, gems: 10 },
        taskTemplates: [
          {
            type: 'intro-lesson',
            title: 'STEMI Recognition',
            description: 'Master the art of identifying heart attacks',
            difficulty: 'medium',
            points: 25,
            contentTemplate: {
              type: 'intro-lesson',
              text: 'Welcome to the STEMI Gauntlet! Learn to rapidly identify and treat heart attacks.',
              keyPoints: [
                'ST-Elevation Criteria',
                'Lead Localization',
                'Door-to-Balloon Time',
                'Contraindications'
              ]
            }
          }
        ]
      },
      {
        dayNumber: 2,
        title: 'MI Detective',
        description: 'Identify different types of myocardial infarction',
        type: 'ecg-case',
        baseRewards: { xp: 75, gems: 15 },
        taskTemplates: [
          {
            type: 'ecg-case',
            title: 'Chest Pain Workup',
            description: 'Evaluate a patient with chest pain',
            difficulty: 'medium',
            points: 75,
            contentTemplate: {
              type: 'ecg-case',
              patientInfo: {
                age: 55,
                gender: 'male',
                symptoms: ['crushing chest pain', 'diaphoresis', 'nausea'],
                history: 'Diabetes, hypertension, smoking'
              },
              diagnosis: 'Anterior STEMI',
              explanation: 'Classic presentation of anterior wall myocardial infarction.'
            }
          }
        ]
      },
      {
        dayNumber: 3,
        title: 'Time Critical',
        description: 'Rapid STEMI identification for door-to-balloon goals',
        type: 'time-challenge',
        baseRewards: { xp: 100, gems: 20 },
        taskTemplates: [
          {
            type: 'time-challenge',
            title: 'Door-to-Balloon Challenge',
            description: 'Identify STEMIs within target time',
            difficulty: 'hard',
            points: 100,
            timeLimit: 300,
            contentTemplate: {
              type: 'time-challenge',
              timeLimit: 300,
              passingScore: 90
            }
          }
        ]
      },
      {
        dayNumber: 4,
        title: 'Territory Mapping',
        description: 'Sort MIs by coronary artery territory',
        type: 'visual-sorting',
        baseRewards: { xp: 80, gems: 16 },
        taskTemplates: [
          {
            type: 'visual-sorting',
            title: 'Coronary Territories',
            description: 'Match ECG changes to coronary arteries',
            difficulty: 'medium',
            points: 80,
            contentTemplate: {
              type: 'visual-sorting',
              criteria: 'coronary-territory'
            }
          }
        ]
      },
      {
        dayNumber: 5,
        title: 'Treatment Path',
        description: 'Choose optimal reperfusion strategies',
        type: 'scenario-choice',
        baseRewards: { xp: 90, gems: 18 },
        taskTemplates: [
          {
            type: 'scenario-choice',
            title: 'Reperfusion Decision',
            description: 'Choose the best treatment approach',
            difficulty: 'hard',
            points: 90,
            contentTemplate: {
              type: 'scenario-choice',
              scenario: {
                title: 'STEMI at Community Hospital',
                description: 'Rural hospital with limited cath lab access',
                setting: 'Community Emergency Department',
                patientInfo: 'Elderly patient with acute STEMI'
              }
            }
          }
        ]
      },
      {
        dayNumber: 6,
        title: 'Drug Protocols',
        description: 'Master STEMI medication protocols',
        type: 'flashcards',
        baseRewards: { xp: 70, gems: 14 },
        taskTemplates: [
          {
            type: 'flashcards',
            title: 'STEMI Medications',
            description: 'Learn evidence-based drug protocols',
            difficulty: 'hard',
            points: 70,
            contentTemplate: {
              type: 'flashcards',
              studyMode: 'mixed'
            }
          }
        ]
      },
      {
        dayNumber: 7,
        title: 'Boss: STEMI Master',
        description: 'Handle complex multi-vessel MI scenarios',
        type: 'boss-challenge',
        isBossChallenge: true,
        baseRewards: { xp: 200, gems: 50 },
        taskTemplates: [
          {
            type: 'boss-challenge',
            title: 'MI Expert',
            description: 'Master complex myocardial infarction cases',
            difficulty: 'hard',
            points: 200,
            contentTemplate: {
              type: 'boss-challenge',
              title: 'Ultimate STEMI Challenge',
              description: 'Handle the most complex MI scenarios',
              finalRewards: {
                xp: 200,
                gems: 50,
                specialBadge: 'STEMI Master',
                unlocks: ['Advanced Cardiology Module']
              }
            }
          }
        ]
      }
    ]
  }
];

/**
 * Initialize default event templates in Firebase
 */
export const initializeEventTemplates = async (): Promise<void> => {
  try {
    const { setDoc, doc } = await import('firebase/firestore');
    const { db } = await import('@/firebase');
    
    for (const template of defaultEventTemplates) {
      const templateRef = doc(db, 'eventTemplates', template.id);
      await setDoc(templateRef, template);
    }
    
    console.log('✅ Event templates initialized successfully');
  } catch (error) {
    console.error('❌ Error initializing event templates:', error);
    throw error;
  }
};

/**
 * Get event template by theme
 */
export const getEventTemplateByTheme = (theme: string): WeeklyEventTemplate | null => {
  return defaultEventTemplates.find(template => template.theme === theme) || null;
};

/**
 * Generate sample event content for testing
 */
export const generateSampleEventContent = (eventType: string): TaskContent => {
  // This would generate actual content based on the event type
  // For now, returning basic structure
  return {
    type: 'intro-lesson',
    text: `Sample content for ${eventType}`,
    keyPoints: ['Point 1', 'Point 2', 'Point 3']
  } as TaskContent;
};
