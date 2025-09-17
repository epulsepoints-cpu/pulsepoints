// YouTube Video Registry
// Centralized metadata for all YouTube videos used in lessons

export interface YouTubeVideoMetadata {
  videoId: string;
  title: string;
  description?: string;
  duration: number; // in seconds (estimated - will be updated when videos load)
  minimumWatchTime?: number; // minimum seconds to watch
  requireFullWatch?: boolean;
  category: 'educational' | 'demonstration' | 'case-study' | 'tutorial' | 'assessment-prep' | 'masterclass' | 'challenge' | 'anatomy';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  tags?: string[];
}

// YouTube Video Registry organized by lesson and topic
export const youtubeRegistry: Record<string, Record<string, YouTubeVideoMetadata>> = {
  // Lesson 1: Introduction to ECG & Anatomy
  'lesson-1': {
    'ecg-from-scratch': {
      videoId: 'WnrvNGa_bPY',
      title: 'Learn The ECG From Scratch With A Pro Cardiologist In This Masterclass',
      description: 'Complete masterclass on ECG fundamentals with professional cardiologist guidance.',
      duration: 3600, // Estimated 60 minutes - masterclass
      minimumWatchTime: 1800, // 30 minutes minimum
      requireFullWatch: false,
      category: 'masterclass',
      difficulty: 'beginner',
      tags: ['ECG', 'fundamentals', 'masterclass', 'cardiologist']
    },
    'heart-anatomy-3d': {
      videoId: 'e37rJqP6-aM',
      title: 'Anatomy & physiology of Human heart: 3D medical animation',
      description: '3D medical animation explaining heart anatomy and physiology.',
      duration: 600, // Estimated 10 minutes
      minimumWatchTime: 480, // 8 minutes minimum - important foundation
      requireFullWatch: false,
      category: 'anatomy',
      difficulty: 'beginner',
      tags: ['anatomy', 'physiology', '3D', 'animation']
    },
    'heart-cells-ion-channels': {
      videoId: 'LgcgooMCxsw',
      title: 'Independently beating Heart cells and ion channels',
      description: 'Understanding cardiac cells and ion channel mechanisms.',
      duration: 480, // Estimated 8 minutes
      minimumWatchTime: 360, // 6 minutes minimum
      requireFullWatch: false,
      category: 'educational',
      difficulty: 'intermediate',
      tags: ['cells', 'ion-channels', 'physiology']
    }
  },

  // Lesson 2: ECG Basics & Components
  'lesson-2': {
    'ecg-30day-intro': {
      videoId: 'ZNHKl-eV-8k',
      title: 'DAY 0 | Mastering ECG Interpretation: 30-Day Challenge',
      description: 'Introduction to the comprehensive 30-day ECG mastery challenge.',
      duration: 900, // Estimated 15 minutes
      minimumWatchTime: 600, // 10 minutes minimum
      requireFullWatch: false,
      category: 'challenge',
      difficulty: 'beginner',
      tags: ['30-day', 'challenge', 'introduction', 'mastery']
    },
    'day1-expertise': {
      videoId: 'u6ISIifO7kA',
      title: 'Day 1: Know Your Expertise in ECG Interpretation | 30-Day ECG challenge',
      description: 'Assess your current ECG interpretation skills and knowledge baseline.',
      duration: 720, // Estimated 12 minutes
      minimumWatchTime: 540, // 9 minutes minimum
      requireFullWatch: false,
      category: 'challenge',
      difficulty: 'beginner',
      tags: ['expertise', 'assessment', 'day1']
    },
    'p-wave-day2': {
      videoId: 'jfRil3V0Wkw',
      title: 'Day 2 - The P Wave on EKG | Join the 30-Day ECG Challenge Now!',
      description: 'Understanding P waves - atrial depolarization and interpretation.',
      duration: 600, // Estimated 10 minutes
      minimumWatchTime: 480, // 8 minutes minimum - fundamental concept
      requireFullWatch: true, // P wave is fundamental
      category: 'challenge',
      difficulty: 'beginner',
      tags: ['P-wave', 'atrial', 'depolarization', 'day2']
    },
    'qrs-complex-day3': {
      videoId: 'XW1sYQSUAs8',
      title: 'Day 3: QRS complex In Action | 30-Day ECG Challenge',
      description: 'QRS complex analysis - ventricular depolarization patterns.',
      duration: 600, // Estimated 10 minutes
      minimumWatchTime: 480, // 8 minutes minimum - critical concept
      requireFullWatch: true, // QRS is critical
      category: 'challenge',
      difficulty: 'intermediate',
      tags: ['QRS', 'ventricular', 'depolarization', 'day3']
    }
  },

  // Lesson 3: Advanced ECG Components
  'lesson-3': {
    'st-segment-day4': {
      videoId: '_lIS_1tUDGQ',
      title: 'Day 4: Decoding the ST Segment | 30-Day ECG Challenge',
      description: 'ST segment analysis - ischemia and injury patterns.',
      duration: 600, // Estimated 10 minutes
      minimumWatchTime: 480, // 8 minutes minimum
      requireFullWatch: true, // ST segment critical for MI
      category: 'challenge',
      difficulty: 'intermediate',
      tags: ['ST-segment', 'ischemia', 'injury', 'day4']
    },
    't-waves-day5': {
      videoId: 'VWS9uTDyaTE',
      title: 'Day 5: Demystifying T Waves | 30-day ECG Challenge',
      description: 'T wave interpretation - repolarization abnormalities.',
      duration: 600, // Estimated 10 minutes
      minimumWatchTime: 420, // 7 minutes minimum
      requireFullWatch: false,
      category: 'challenge',
      difficulty: 'intermediate',
      tags: ['T-waves', 'repolarization', 'day5']
    },
    'pathological-q-day6': {
      videoId: 'CIsKlVXRjnY',
      title: 'Day 6: Pathological Q waves on ECG | 30-Day ECG challenge',
      description: 'Identifying pathological Q waves indicating previous MI.',
      duration: 600, // Estimated 10 minutes
      minimumWatchTime: 480, // 8 minutes minimum - important for MI
      requireFullWatch: true,
      category: 'challenge',
      difficulty: 'advanced',
      tags: ['Q-waves', 'pathological', 'MI', 'day6']
    },
    'heart-activity-day7': {
      videoId: 'HvzLAcynxP4',
      title: 'Day 7: Decoding Heart Activity Through ECG | 30-Day ECG Challenge',
      description: 'Comprehensive heart activity analysis through ECG patterns.',
      duration: 720, // Estimated 12 minutes
      minimumWatchTime: 600, // 10 minutes minimum
      requireFullWatch: false,
      category: 'challenge',
      difficulty: 'intermediate',
      tags: ['heart-activity', 'comprehensive', 'day7']
    }
  },

  // Lesson 4: Arrhythmias & Rhythm Analysis
  'lesson-4': {
    'atrial-fibrillation-basics': {
      videoId: 'Xa-YkT3gJWU',
      title: 'What is Atrial fibrillation?',
      description: 'Basic introduction to atrial fibrillation - causes and mechanisms.',
      duration: 480, // Estimated 8 minutes
      minimumWatchTime: 360, // 6 minutes minimum
      requireFullWatch: false,
      category: 'educational',
      difficulty: 'beginner',
      tags: ['atrial-fibrillation', 'arrhythmia', 'basics']
    },
    'ecg-rhythm-game': {
      videoId: 'C70FLhYihLk',
      title: 'Learn to interpret ECG rhythm with the game',
      description: 'Interactive approach to learning ECG rhythm interpretation.',
      duration: 600, // Estimated 10 minutes
      minimumWatchTime: 420, // 7 minutes minimum
      requireFullWatch: false,
      category: 'tutorial',
      difficulty: 'intermediate',
      tags: ['rhythm', 'game', 'interactive', 'interpretation']
    },
    'pvcs-premature': {
      videoId: 'N3UD7xcECeU',
      title: 'Premature Ventricular contraction (PVCs)',
      description: 'Understanding PVCs - recognition and clinical significance.',
      duration: 480, // Estimated 8 minutes
      minimumWatchTime: 360, // 6 minutes minimum
      requireFullWatch: false,
      category: 'educational',
      difficulty: 'intermediate',
      tags: ['PVCs', 'ventricular', 'premature', 'arrhythmia']
    }
  },

  // Lesson 5: Advanced Arrhythmias
  'lesson-5': {
    'afib-clinical': {
      videoId: 'UYyr0QiY8sM',
      title: 'Atrial Fibrillation: clinical essential and ECG features of AF',
      description: 'Clinical essentials and ECG features of atrial fibrillation.',
      duration: 900, // Estimated 15 minutes
      minimumWatchTime: 720, // 12 minutes minimum - comprehensive
      requireFullWatch: true, // Important clinical content
      category: 'educational',
      difficulty: 'advanced',
      tags: ['atrial-fibrillation', 'clinical', 'ECG-features']
    },
    'afib-vs-aflutter': {
      videoId: 'ppyXFJ-mes4',
      title: 'Atrial Fibrillation (aFib) Vs Atrial Flutter (aFlutter): ECG Review',
      description: 'Comparative analysis of atrial fibrillation vs atrial flutter.',
      duration: 600, // Estimated 10 minutes
      minimumWatchTime: 480, // 8 minutes minimum - important distinction
      requireFullWatch: true,
      category: 'educational',
      difficulty: 'advanced',
      tags: ['atrial-fibrillation', 'atrial-flutter', 'comparison']
    },
    'atrial-flutter': {
      videoId: '9mt8aMxc9U4',
      title: 'Atrial Flutter: symptoms, ECG features and Treatment options',
      description: 'Complete overview of atrial flutter - symptoms, ECG, and treatment.',
      duration: 720, // Estimated 12 minutes
      minimumWatchTime: 600, // 10 minutes minimum
      requireFullWatch: false,
      category: 'educational',
      difficulty: 'advanced',
      tags: ['atrial-flutter', 'symptoms', 'treatment']
    },
    'svt-types': {
      videoId: 'bDyZ76QzA9s',
      title: 'Types and ECG features of Supraventricular Tachycardia (SVT)',
      description: 'Different types of SVT and their ECG characteristics.',
      duration: 600, // Estimated 10 minutes
      minimumWatchTime: 480, // 8 minutes minimum
      requireFullWatch: false,
      category: 'educational',
      difficulty: 'advanced',
      tags: ['SVT', 'supraventricular', 'tachycardia', 'types']
    }
  },

  // Lesson 6: Critical Arrhythmias & Emergency
  'lesson-6': {
    'ventricular-fibrillation': {
      videoId: 'prcxfvoE4C4',
      title: 'Ventricular Fibrillation (V-Fib): Terminal Cardiac Rhythm',
      description: 'Understanding ventricular fibrillation - the terminal cardiac rhythm.',
      duration: 480, // Estimated 8 minutes
      minimumWatchTime: 420, // 7 minutes minimum - critical emergency
      requireFullWatch: true, // Emergency rhythm - must understand fully
      category: 'educational',
      difficulty: 'advanced',
      tags: ['ventricular-fibrillation', 'terminal', 'emergency']
    },
    'bradycardia-algorithm': {
      videoId: 'U3926ZrAosM',
      title: 'Adult bradycardia algorithm By ACLS (AHA 2015)',
      description: 'ACLS algorithm for adult bradycardia management.',
      duration: 600, // Estimated 10 minutes
      minimumWatchTime: 480, // 8 minutes minimum - protocol
      requireFullWatch: true, // Treatment protocol must be understood
      category: 'tutorial',
      difficulty: 'advanced',
      tags: ['bradycardia', 'ACLS', 'algorithm', 'treatment']
    },
    'tachyarrhythmias-diagnosis': {
      videoId: 'MH4eNkcEVjM',
      title: 'How to diagnose Abnormal heart rhythm (Tachyarrhythmias) On ECG : Step by step',
      description: 'Step-by-step approach to diagnosing tachyarrhythmias on ECG.',
      duration: 900, // Estimated 15 minutes
      minimumWatchTime: 720, // 12 minutes minimum - diagnostic approach
      requireFullWatch: false,
      category: 'tutorial',
      difficulty: 'advanced',
      tags: ['tachyarrhythmias', 'diagnosis', 'step-by-step']
    }
  },

  // Lesson 7: Masterclasses & Advanced Topics
  'lesson-7': {
    'atrial-enlargement': {
      videoId: 'Rt6dzeKAUMQ',
      title: 'Masterclass: Atrial Enlargement Decoded with ECG Criteria For LAE & RAE',
      description: 'Masterclass on left and right atrial enlargement ECG criteria.',
      duration: 1800, // Estimated 30 minutes - masterclass
      minimumWatchTime: 1200, // 20 minutes minimum
      requireFullWatch: false,
      category: 'masterclass',
      difficulty: 'advanced',
      tags: ['atrial-enlargement', 'LAE', 'RAE', 'masterclass']
    },
    'lvh-masterclass': {
      videoId: 'zBDkUst6s7M',
      title: 'Masterclass on Left Ventricular Hypertrophy (LVH) and ECG Criteria: clinical Essentials',
      description: 'Comprehensive masterclass on LVH diagnosis and ECG criteria.',
      duration: 1800, // Estimated 30 minutes - masterclass
      minimumWatchTime: 1200, // 20 minutes minimum
      requireFullWatch: false,
      category: 'masterclass',
      difficulty: 'advanced',
      tags: ['LVH', 'ventricular-hypertrophy', 'masterclass', 'criteria']
    }
  },

  // Lesson 8: Electrolyte Abnormalities
  'lesson-8': {
    'hyperkalemia-explained': {
      videoId: 'UqugT5CkSzc',
      title: 'Hyperkalemia Explained: Causes, ECG, Symptoms & Treatment | ICU Essentials',
      description: 'Comprehensive overview of hyperkalemia - ICU essentials.',
      duration: 900, // Estimated 15 minutes
      minimumWatchTime: 600, // 10 minutes minimum
      requireFullWatch: false,
      category: 'educational',
      difficulty: 'advanced',
      tags: ['hyperkalemia', 'electrolytes', 'ICU', 'treatment']
    },
    'hyperkalemia-heart-effects': {
      videoId: 'Flin6VamIlQ',
      title: 'Effect of Hyperkalemia (High Blood potassium) on Heart',
      description: 'How high potassium levels affect cardiac function and ECG.',
      duration: 480, // Estimated 8 minutes
      minimumWatchTime: 360, // 6 minutes minimum
      requireFullWatch: false,
      category: 'educational',
      difficulty: 'intermediate',
      tags: ['hyperkalemia', 'potassium', 'cardiac-effects']
    },
    'potassium-abnormalities': {
      videoId: 'bNiWKlr_ezA',
      title: 'Master ECG: Spot Potassium Abnormalities from Hypo to Hyperkalemia',
      description: 'Complete guide to spotting potassium abnormalities on ECG.',
      duration: 720, // Estimated 12 minutes
      minimumWatchTime: 540, // 9 minutes minimum
      requireFullWatch: false,
      category: 'educational',
      difficulty: 'advanced',
      tags: ['potassium', 'abnormalities', 'hypokalemia', 'hyperkalemia']
    }
  },

  // Lesson 9: Clinical Scenarios & MI
  'lesson-9': {
    'inferior-wall-mi': {
      videoId: 'XtbIg6LChlY',
      title: 'INFERIOR WALL MI',
      description: 'Understanding inferior wall myocardial infarction patterns.',
      duration: 360, // Estimated 6 minutes
      minimumWatchTime: 300, // 5 minutes minimum - critical diagnosis
      requireFullWatch: true, // MI recognition is critical
      category: 'case-study',
      difficulty: 'advanced',
      tags: ['MI', 'inferior-wall', 'myocardial-infarction']
    },
    'wellens-syndrome': {
      videoId: 'H3sYAosz0jM',
      title: 'ECG That Predicts Heart Attack Before It Happens: Wellens Syndrome',
      description: 'Wellens syndrome - predicting heart attacks before they occur.',
      duration: 600, // Estimated 10 minutes
      minimumWatchTime: 480, // 8 minutes minimum - life-saving knowledge
      requireFullWatch: true, // Critical for prevention
      category: 'case-study',
      difficulty: 'advanced',
      tags: ['Wellens-syndrome', 'prediction', 'heart-attack', 'prevention']
    },
    'pulmonary-embolism': {
      videoId: '0ZmSROEpFos',
      title: 'ECG Features of pulmonary Embolism',
      description: 'Recognizing pulmonary embolism patterns on ECG.',
      duration: 480, // Estimated 8 minutes
      minimumWatchTime: 360, // 6 minutes minimum
      requireFullWatch: false,
      category: 'educational',
      difficulty: 'advanced',
      tags: ['pulmonary-embolism', 'ECG-features', 'diagnosis']
    }
  },

  // Lesson 10: Pericardial Disease & Special Conditions
  'lesson-10': {
    'acute-pericarditis': {
      videoId: 'V77OCM7UFnA',
      title: 'ECG Features of Acute Pericarditis',
      description: 'Recognizing acute pericarditis on ECG.',
      duration: 480, // Estimated 8 minutes
      minimumWatchTime: 360, // 6 minutes minimum
      requireFullWatch: false,
      category: 'educational',
      difficulty: 'intermediate',
      tags: ['pericarditis', 'acute', 'ECG-features']
    },
    'pericardial-effusion': {
      videoId: 'J6oFRQF9m2A',
      title: 'ECG features of pericardial effusion & electrical alternans',
      description: 'Pericardial effusion and electrical alternans patterns.',
      duration: 480, // Estimated 8 minutes
      minimumWatchTime: 360, // 6 minutes minimum
      requireFullWatch: false,
      category: 'educational',
      difficulty: 'advanced',
      tags: ['pericardial-effusion', 'electrical-alternans']
    },
    'heart-failure': {
      videoId: 'srnfiieBDds',
      title: 'Congestive heart failure',
      description: 'ECG features and recognition of congestive heart failure.',
      duration: 360, // Estimated 6 minutes
      minimumWatchTime: 300, // 5 minutes minimum
      requireFullWatch: false,
      category: 'educational',
      difficulty: 'intermediate',
      tags: ['heart-failure', 'congestive', 'CHF']
    }
  },

  // Comprehensive Modules (for advanced learners)
  'advanced-modules': {
    'module1-decoding-ecg': {
      videoId: 'RCShRZ396SE',
      title: 'Module 1: Decoding The ECG Code: Interactive ECG interpretation course',
      description: 'Interactive ECG interpretation course - Module 1.',
      duration: 2400, // Estimated 40 minutes - comprehensive module
      minimumWatchTime: 1800, // 30 minutes minimum
      requireFullWatch: false,
      category: 'tutorial',
      difficulty: 'advanced',
      tags: ['module', 'interactive', 'comprehensive', 'decoding']
    },
    'module2-mapping-leads': {
      videoId: '_WBj0P-vJMM',
      title: 'Module 2: Mapping Heart Walls with ECG Leads | ECG Code Pro',
      description: 'Understanding anatomical correlation of ECG leads.',
      duration: 2400, // Estimated 40 minutes
      minimumWatchTime: 1800, // 30 minutes minimum
      requireFullWatch: false,
      category: 'tutorial',
      difficulty: 'advanced',
      tags: ['module', 'leads', 'anatomy', 'mapping']
    },
    'module3-essentials': {
      videoId: 'FF9Wj_tywhg',
      title: 'Module 3: ECG Essentials - Cardiac Anatomy, Coronary Circulation & Conduction System',
      description: 'Essential cardiac anatomy and conduction system.',
      duration: 2400, // Estimated 40 minutes
      minimumWatchTime: 1800, // 30 minutes minimum
      requireFullWatch: false,
      category: 'tutorial',
      difficulty: 'advanced',
      tags: ['module', 'anatomy', 'conduction', 'circulation']
    },
    'module4-correlates': {
      videoId: 'sohPny3r7pA',
      title: 'Module 4: ECG Correlates - Linking Heart Mechanics to Electrical Signals',
      description: 'Linking mechanical heart function to electrical signals.',
      duration: 2400, // Estimated 40 minutes
      minimumWatchTime: 1800, // 30 minutes minimum
      requireFullWatch: false,
      category: 'tutorial',
      difficulty: 'advanced',
      tags: ['module', 'correlates', 'mechanics', 'signals']
    }
  },

  // Special Topics & Quick Reviews
  'special-topics': {
    'ecg-leads-placement': {
      videoId: '4xIwZPQwmjY',
      title: '12 lead ECG: Placement of leads properly',
      description: 'Proper technique for 12-lead ECG placement.',
      duration: 480, // Estimated 8 minutes
      minimumWatchTime: 360, // 6 minutes minimum - practical skill
      requireFullWatch: true, // Proper placement is critical
      category: 'tutorial',
      difficulty: 'beginner',
      tags: ['leads', 'placement', '12-lead', 'technique']
    },
    'adenosine-svt': {
      videoId: 'kbY4jX_EbMs',
      title: 'Adenosine in Supraventricular tachycardia (SVT): How to administer and how it works?',
      description: 'Adenosine administration and mechanism in SVT treatment.',
      duration: 600, // Estimated 10 minutes
      minimumWatchTime: 420, // 7 minutes minimum - treatment protocol
      requireFullWatch: false,
      category: 'tutorial',
      difficulty: 'advanced',
      tags: ['adenosine', 'SVT', 'treatment', 'administration']
    },
    'heart-rate-control': {
      videoId: 'hKWhSIW_9ao',
      title: 'Heart Rate control in our Body: Atropine Vs. Acetylcholine',
      description: 'Understanding autonomic control of heart rate.',
      duration: 480, // Estimated 8 minutes
      minimumWatchTime: 360, // 6 minutes minimum
      requireFullWatch: false,
      category: 'educational',
      difficulty: 'intermediate',
      tags: ['heart-rate', 'atropine', 'acetylcholine', 'autonomic']
    },
    'electrical-impulse-speed': {
      videoId: 'XjOZkeDxIaE',
      title: 'The Hearts Lightning: Speed of Electrical Impulses',
      description: 'Understanding the speed of cardiac electrical conduction.',
      duration: 360, // Estimated 6 minutes
      minimumWatchTime: 300, // 5 minutes minimum
      requireFullWatch: false,
      category: 'educational',
      difficulty: 'intermediate',
      tags: ['conduction', 'impulse', 'speed', 'electrical']
    },
    'ecg-poem': {
      videoId: 'AoAHztqIuUY',
      title: 'The ECG Poem: Just being a little creative 😜',
      description: 'Creative approach to remembering ECG concepts through poetry.',
      duration: 240, // Estimated 4 minutes
      minimumWatchTime: 180, // 3 minutes minimum - fun learning
      requireFullWatch: false,
      category: 'educational',
      difficulty: 'beginner',
      tags: ['poem', 'creative', 'memory', 'fun']
    }
  },

  // Clinical Scenarios & Emergency Cases
  'clinical-cases': {
    'afib-stroke-connection': {
      videoId: '_sGVKgcXoT8',
      title: 'How Atrial Fibrillation Leads to Stroke?',
      description: 'Understanding the connection between atrial fibrillation and stroke risk.',
      duration: 480, // Estimated 8 minutes
      minimumWatchTime: 360, // 6 minutes minimum - important complication
      requireFullWatch: false,
      category: 'educational',
      difficulty: 'intermediate',
      tags: ['atrial-fibrillation', 'stroke', 'complications', 'pathophysiology']
    },
    'rhythm-identification-1': {
      videoId: 'mh8cS3ZDIDw',
      title: 'What is the rhythm #medicaleducation #doctor #ecg #cardiac #neurology',
      description: 'Clinical rhythm identification challenge.',
      duration: 180, // Estimated 3 minutes
      minimumWatchTime: 120, // 2 minutes minimum - quick assessment
      requireFullWatch: false,
      category: 'case-study',
      difficulty: 'intermediate',
      tags: ['rhythm', 'identification', 'challenge']
    },
    'rhythm-treatment': {
      videoId: 'r9_WaSjDZlk',
      title: 'What is the rhythm? and what to do to treat it? #cpr #afib #aed #medicaleducation #doctor',
      description: 'Rhythm identification and treatment decision making.',
      duration: 240, // Estimated 4 minutes
      minimumWatchTime: 180, // 3 minutes minimum - treatment focused
      requireFullWatch: false,
      category: 'case-study',
      difficulty: 'advanced',
      tags: ['rhythm', 'treatment', 'CPR', 'AED']
    },
    'afib-anatomy': {
      videoId: 'dOVMgRoJ6-s',
      title: 'Atrial Fibrillation Anatomy, ECG #icu #medicine #emergencymedicine #atrialfibrillation',
      description: 'Anatomical basis of atrial fibrillation for ICU and emergency medicine.',
      duration: 360, // Estimated 6 minutes
      minimumWatchTime: 300, // 5 minutes minimum - clinical focus
      requireFullWatch: false,
      category: 'educational',
      difficulty: 'advanced',
      tags: ['atrial-fibrillation', 'anatomy', 'ICU', 'emergency']
    },
    'afib-short': {
      videoId: '1oVvAtg4zvI',
      title: 'Atrial fibrillation #af #atrialfibrillation #heartfailure @ecgkid',
      description: 'Quick review of atrial fibrillation essentials.',
      duration: 180, // Estimated 3 minutes
      minimumWatchTime: 120, // 2 minutes minimum - quick review
      requireFullWatch: false,
      category: 'educational',
      difficulty: 'intermediate',
      tags: ['atrial-fibrillation', 'quick-review', 'essentials']
    }
  },

  // ECGkid Original Content - Core Educational Videos
  'ecgkid-core': {
    'wellens-syndrome': {
      videoId: 'H3sYAosz0jM',
      title: 'ECG That Predicts Heart Attack Before It Happens: Wellens Syndrome',
      description: 'Learn how to recognize Wellens Syndrome, a subtle but deadly ECG pattern that signals a high risk of a massive heart attack.',
      duration: 269, // 4 minutes, 29 seconds
      minimumWatchTime: 240, // 4 minutes minimum - critical pattern
      requireFullWatch: true, // Life-saving knowledge
      category: 'educational',
      difficulty: 'advanced',
      tags: ['wellens', 'syndrome', 'heart-attack', 'prediction', 'deadly-pattern']
    },
    'deadly-ecg-athletes': {
      videoId: 'pYpXANnQMWE',
      title: '5 ECG Patterns That Can Be DEADLY for Young Athletes',
      description: 'Learn how to recognize the 5 most dangerous ECG patterns that can lead to sudden cardiac death in athletes.',
      duration: 306, // 5 minutes, 6 seconds
      minimumWatchTime: 270, // 4.5 minutes minimum
      requireFullWatch: true, // Critical for sports medicine
      category: 'educational',
      difficulty: 'advanced',
      tags: ['athletes', 'deadly-patterns', 'sudden-death', 'sports-medicine']
    },
    'sinus-node-fails': {
      videoId: 'l_sA_hdzoUU',
      title: 'What Happens When the Sinus Node Fails? (Full ECG Breakdown)',
      description: 'When the sinus node stops firing — even for a second — the consequences can be serious. Full breakdown of sinus pause and arrest.',
      duration: 424, // 7 minutes, 4 seconds
      minimumWatchTime: 360, // 6 minutes minimum
      requireFullWatch: true, // Important arrhythmia concept
      category: 'educational',
      difficulty: 'intermediate',
      tags: ['sinus-node', 'failure', 'pause', 'arrest', 'arrhythmia']
    },
    'afib-vs-aflutter': {
      videoId: 'ppyXFJ-mes4',
      title: 'Atrial Fibrillation (aFib) Vs Atrial Flutter (aFlutter): ECG Review',
      description: 'Comprehensive comparison of atrial fibrillation and atrial flutter with pathophysiology and ECG differentiation.',
      duration: 247, // 4 minutes, 7 seconds
      minimumWatchTime: 210, // 3.5 minutes minimum
      requireFullWatch: true, // Important differential diagnosis
      category: 'educational',
      difficulty: 'intermediate',
      tags: ['atrial-fibrillation', 'atrial-flutter', 'comparison', 'differential']
    },
    'pericardial-effusion': {
      videoId: 'J6oFRQF9m2A',
      title: 'ECG features of pericardial effusion & electrical alternans',
      description: 'Different types of ECG patterns associated with pericardial effusion and electrical alternans interpretation.',
      duration: 153, // 2 minutes, 33 seconds
      minimumWatchTime: 120, // 2 minutes minimum
      requireFullWatch: false,
      category: 'educational',
      difficulty: 'advanced',
      tags: ['pericardial-effusion', 'electrical-alternans', 'tamponade']
    },
    'misplaced-leads': {
      videoId: 'gyVs-D7Uyk8',
      title: 'How to identify ECG patterns due to misplaced leads on ECG recording',
      description: 'Learn to determine if the ECG was recorded properly and assess for misplaced leads during interpretation.',
      duration: 160, // 2 minutes, 40 seconds
      minimumWatchTime: 120, // 2 minutes minimum
      requireFullWatch: false,
      category: 'tutorial',
      difficulty: 'intermediate',
      tags: ['misplaced-leads', 'technical', 'recording', 'artifacts']
    },
    'ecg-interpretation-steps': {
      videoId: 'iWjZwo7DsNY',
      title: 'Step by step approach to ECG Interpretation',
      description: 'Learn ECG interpretation in 7 easy steps with systematic approach.',
      duration: 218, // 3 minutes, 38 seconds
      minimumWatchTime: 180, // 3 minutes minimum
      requireFullWatch: true, // Fundamental approach
      category: 'tutorial',
      difficulty: 'beginner',
      tags: ['systematic', 'interpretation', '7-steps', 'approach']
    },
    'atrial-rate-rhythm': {
      videoId: 'el0L8zgJl3A',
      title: 'To determine Atrial Rate and Rhythm On ECG: ECG interpretation like a Pro',
      description: 'Learn different types of cardiac rhythms explained with atrial origin, either sinus or ectopic.',
      duration: 369, // 6 minutes, 9 seconds
      minimumWatchTime: 300, // 5 minutes minimum
      requireFullWatch: false,
      category: 'tutorial',
      difficulty: 'intermediate',
      tags: ['atrial-rate', 'rhythm', 'sinus', 'ectopic']
    },
    'lead-placement': {
      videoId: '4xIwZPQwmjY',
      title: '12 lead ECG: Placement of leads properly',
      description: 'Procedure for 12 ECG lead placement in details with which lead corresponds to which region of the heart.',
      duration: 114, // 1 minute, 54 seconds
      minimumWatchTime: 90, // 1.5 minutes minimum
      requireFullWatch: true, // Technical fundamentals
      category: 'tutorial',
      difficulty: 'beginner',
      tags: ['lead-placement', '12-lead', 'technique', 'heart-regions']
    },
    'acls-rhythms': {
      videoId: 'C3Ab00QPF3w',
      title: 'ACLS Rhythm recognition: shockable & Non-shockable rhythms on AED',
      description: 'Discussion of shockable and non-shockable rhythms according to ACLS guidelines. Essential for emergency providers.',
      duration: 287, // 4 minutes, 47 seconds
      minimumWatchTime: 240, // 4 minutes minimum
      requireFullWatch: true, // Critical for emergency medicine
      category: 'educational',
      difficulty: 'intermediate',
      tags: ['ACLS', 'shockable', 'non-shockable', 'AED', 'emergency']
    }
  },

  // ECGkid Modules - Interactive Course Series
  'ecgkid-modules': {
    'module-1-decoding': {
      videoId: 'RCShRZ396SE',
      title: 'Module 1: Decoding The ECG Code: Interactive ECG interpretation course',
      description: 'Welcome to the first module of comprehensive ECG interpretation course, "Decoding The ECG Code" with interactive elements.',
      duration: 182, // 3 minutes, 2 seconds
      minimumWatchTime: 150, // 2.5 minutes minimum
      requireFullWatch: true, // Course introduction
      category: 'educational',
      difficulty: 'beginner',
      tags: ['module-1', 'interactive', 'course', 'decoding']
    },
    'module-2-mapping': {
      videoId: '_WBj0P-vJMM',
      title: 'Module 2: Mapping Heart Walls with ECG Leads | ECG Code Pro',
      description: 'Master one of the most essential skills in ECG interpretation: Mapping heart walls with ECG leads to connect anatomy with electrical signals.',
      duration: 303, // 5 minutes, 3 seconds
      minimumWatchTime: 240, // 4 minutes minimum
      requireFullWatch: true, // Essential mapping skill
      category: 'educational',
      difficulty: 'intermediate',
      tags: ['module-2', 'mapping', 'heart-walls', 'leads', 'anatomy']
    },
    'module-3-essentials': {
      videoId: 'FF9Wj_tywhg',
      title: 'Module 3: ECG Essentials - Cardiac Anatomy, Coronary Circulation & Conduction System',
      description: 'Understand cardiac anatomy, coronary circulation, and conduction system before mastering ECG patterns.',
      duration: 340, // 5 minutes, 40 seconds
      minimumWatchTime: 270, // 4.5 minutes minimum
      requireFullWatch: true, // Foundation knowledge
      category: 'anatomy',
      difficulty: 'beginner',
      tags: ['module-3', 'anatomy', 'coronary', 'conduction', 'essentials']
    },
    'module-4-correlates': {
      videoId: 'sohPny3r7pA',
      title: 'Module 4: ECG Correlates - Linking Heart Mechanics to Electrical Signals',
      description: 'Decode the critical link between electrical signals and muscle response. How ECG squiggly lines reflect real heart movements.',
      duration: 346, // 5 minutes, 46 seconds
      minimumWatchTime: 280, // ~4.5 minutes minimum
      requireFullWatch: true, // Critical correlation concept
      category: 'educational',
      difficulty: 'intermediate',
      tags: ['module-4', 'correlates', 'mechanics', 'electrical', 'physiology']
    }
  },

  // ECGkid Emergency Medicine Content
  'ecgkid-emergency': {
    'code-blue-airway': {
      videoId: 'FTGCPh9EYjM',
      title: 'Lesson 1: CODE BLUE & Airway Emergencies Explained | Anyone can Intubate',
      description: 'Module 1 of the 11-Day Intubation Crash Course: Breaking down critical moments when a patient loses their airway.',
      duration: 484, // 8 minutes, 4 seconds
      minimumWatchTime: 400, // ~6.5 minutes minimum
      requireFullWatch: true, // Emergency medicine essential
      category: 'educational',
      difficulty: 'advanced',
      tags: ['code-blue', 'airway', 'emergency', 'intubation', 'crash-course']
    }
  }
};

// Utility functions for YouTube registry
export const getYouTubeVideo = (lessonId: string, videoKey: string): YouTubeVideoMetadata | null => {
  return youtubeRegistry[lessonId]?.[videoKey] || null;
};

export const getAllVideosForLesson = (lessonId: string): Record<string, YouTubeVideoMetadata> => {
  return youtubeRegistry[lessonId] || {};
};

export const getVideosByCategory = (category: YouTubeVideoMetadata['category']): YouTubeVideoMetadata[] => {
  const videos: YouTubeVideoMetadata[] = [];
  
  Object.values(youtubeRegistry).forEach(lessonVideos => {
    Object.values(lessonVideos).forEach(video => {
      if (video.category === category) {
        videos.push(video);
      }
    });
  });
  
  return videos;
};

export const getVideosByDifficulty = (difficulty: YouTubeVideoMetadata['difficulty']): YouTubeVideoMetadata[] => {
  const videos: YouTubeVideoMetadata[] = [];
  
  Object.values(youtubeRegistry).forEach(lessonVideos => {
    Object.values(lessonVideos).forEach(video => {
      if (video.difficulty === difficulty) {
        videos.push(video);
      }
    });
  });
  
  return videos;
};

// Helper function to format duration
export const formatVideoDuration = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

// Helper function to extract YouTube video ID from URL
export const extractYouTubeVideoId = (url: string): string | null => {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/ // Direct video ID
  ];
  
  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  
  return null;
};

// Helper function to generate YouTube thumbnail URL
export const getYouTubeThumbnail = (videoId: string, quality: 'default' | 'medium' | 'high' | 'standard' | 'maxres' = 'medium'): string => {
  return `https://img.youtube.com/vi/${videoId}/${quality}default.jpg`;
};
