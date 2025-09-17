import { LearningModule, Lesson } from '@/types/learning';

// Simple lesson type for module structure - will be enhanced by ECGMasterHub
type SimpleLessonStructure = Pick<Lesson, 'id' | 'moduleId' | 'title' | 'description' | 'order' | 'estimatedTime'>;

// STREAMLINED 10-MODULE ECG LEARNING SYSTEM
// This replaces the complex conditional system in ECGMasterHub with direct optimized lesson usage
export const sampleLearningModules: (Omit<LearningModule, 'id' | 'createdAt' | 'updatedAt' | 'unlocked' | 'order' | 'tags' | 'featured' | 'lessons'> & { lessons: SimpleLessonStructure[] })[] = [
  // MODULE 1: ECG Fundamentals (Beginner) - Lessons 1-10
  {
    title: "ECG Fundamentals",
    description: "Foundation knowledge for all ECG interpretation",
    category: 'fundamentals',
    difficulty: 'beginner',
    estimatedTime: 450, // 10 lessons × 45 min avg
    prerequisites: [],
    lessons: [
      {
        id: 'module-1-lesson-1',
        moduleId: 'module-1',
        title: "Heart Anatomy & Sounds",
        description: "Master cardiac structure and conduction through interactive multimedia learning",
        order: 1,
        estimatedTime: 45
      },
      {
        id: 'module-1-lesson-2',
        moduleId: 'module-1',
        title: "ECG Leads & Views",
        description: "Understand ECG lead placement and perspectives of the heart",
        order: 2,
        estimatedTime: 45
      },
      {
        id: 'module-1-lesson-3',
        moduleId: 'module-1',
        title: "ECG Paper & Measurements",
        description: "Master ECG grid system and time-voltage relationships",
        order: 3,
        estimatedTime: 45
      },
      {
        id: 'module-1-lesson-4',
        moduleId: 'module-1',
        title: "ECG Waveforms (P, QRS, T)",
        description: "Identify and analyze the fundamental ECG waveforms",
        order: 4,
        estimatedTime: 45
      },
      {
        id: 'module-1-lesson-5',
        moduleId: 'module-1',
        title: "Heart Rate Calculation",
        description: "Learn multiple methods for calculating heart rate from ECGs",
        order: 5,
        estimatedTime: 45
      },
      {
        id: 'module-1-lesson-6',
        moduleId: 'module-1',
        title: "Rhythm vs Rate",
        description: "Distinguish between heart rate and rhythm abnormalities",
        order: 6,
        estimatedTime: 45
      },
      {
        id: 'module-1-lesson-7',
        moduleId: 'module-1',
        title: "Normal ECG Variations",
        description: "Recognize normal variants and age-related changes",
        order: 7,
        estimatedTime: 45
      },
      {
        id: 'module-1-lesson-8',
        moduleId: 'module-1',
        title: "Artifact Recognition",
        description: "Identify and differentiate ECG artifacts from pathology",
        order: 8,
        estimatedTime: 45
      },
      {
        id: 'module-1-lesson-9',
        moduleId: 'module-1',
        title: "Systematic ECG Approach",
        description: "Develop a systematic method for ECG interpretation",
        order: 9,
        estimatedTime: 45
      },
      {
        id: 'module-1-lesson-10',
        moduleId: 'module-1',
        title: "Practice: Normal ECGs",
        description: "Practice identifying normal ECGs and variants",
        order: 10,
        estimatedTime: 45
      }
    ]
  },

  // MODULE 2: Sinus Rhythms & Atrial Rhythms (Intermediate) - Lessons 11-20
  {
    title: "Sinus Rhythms & Atrial Rhythms",
    description: "Master sinus rhythms and common atrial arrhythmias",
    category: 'arrhythmias',
    difficulty: 'intermediate',
    estimatedTime: 450, // 10 lessons × 45 min avg
    prerequisites: ['ECG Fundamentals'],
    lessons: [
      {
        id: 'module-2-lesson-1',
        moduleId: 'module-2',
        title: "Normal Sinus Rhythm Criteria",
        description: "Master the criteria for normal sinus rhythm",
        order: 1,
        estimatedTime: 45
      },
      {
        id: 'module-2-lesson-2',
        moduleId: 'module-2',
        title: "Sinus Bradycardia",
        description: "Recognize sinus bradycardia and understand its causes",
        order: 2,
        estimatedTime: 45
      },
      {
        id: 'module-2-lesson-3',
        moduleId: 'module-2',
        title: "Sinus Tachycardia",
        description: "Identify sinus tachycardia and differentiate from other fast rhythms",
        order: 3,
        estimatedTime: 45
      },
      {
        id: 'module-2-lesson-4',
        moduleId: 'module-2',
        title: "Sinus Arrhythmia",
        description: "Understand respiratory sinus arrhythmia patterns",
        order: 4,
        estimatedTime: 45
      },
      {
        id: 'module-2-lesson-5',
        moduleId: 'module-2',
        title: "Sinus Arrest and Pause",
        description: "Recognize sinus arrest and pause patterns",
        order: 5,
        estimatedTime: 45
      },
      {
        id: 'module-2-lesson-6',
        moduleId: 'module-2',
        title: "Sick Sinus Syndrome",
        description: "Identify sick sinus syndrome and its variations",
        order: 6,
        estimatedTime: 45
      },
      {
        id: 'module-2-lesson-7',
        moduleId: 'module-2',
        title: "Wandering Atrial Pacemaker",
        description: "Recognize wandering atrial pacemaker patterns",
        order: 7,
        estimatedTime: 45
      },
      {
        id: 'module-2-lesson-8',
        moduleId: 'module-2',
        title: "Multifocal Atrial Tachycardia",
        description: "Identify MAT and differentiate from atrial fibrillation",
        order: 8,
        estimatedTime: 45
      },
      {
        id: 'module-2-lesson-9',
        moduleId: 'module-2',
        title: "Premature Atrial Contractions",
        description: "Recognize PACs and understand their significance",
        order: 9,
        estimatedTime: 45
      },
      {
        id: 'module-2-lesson-10',
        moduleId: 'module-2',
        title: "Module 2 Mastery Assessment",
        description: "Comprehensive assessment of sinus and atrial rhythms",
        order: 10,
        estimatedTime: 45
      }
    ]
  },

  // MODULE 3: Atrial Arrhythmias (Intermediate) - Lessons 21-28
  {
    title: "Atrial Arrhythmias",
    description: "Advanced atrial arrhythmias including AFib, Flutter, and SVT",
    category: 'arrhythmias',
    difficulty: 'intermediate',
    estimatedTime: 360, // 8 lessons × 45 min avg
    prerequisites: ['Sinus Rhythms & Atrial Rhythms'],
    lessons: [
      {
        id: 'module-3-lesson-1',
        moduleId: 'module-3',
        title: "Atrial Fibrillation Basics",
        description: "Master atrial fibrillation recognition and management",
        order: 1,
        estimatedTime: 45
      },
      {
        id: 'module-3-lesson-2',
        moduleId: 'module-3',
        title: "Atrial Flutter",
        description: "Recognize atrial flutter patterns and rate calculations",
        order: 2,
        estimatedTime: 45
      },
      {
        id: 'module-3-lesson-3',
        moduleId: 'module-3',
        title: "Supraventricular Tachycardia (SVT)",
        description: "Identify and manage supraventricular tachycardia",
        order: 3,
        estimatedTime: 45
      },
      {
        id: 'module-3-lesson-4',
        moduleId: 'module-3',
        title: "Atrial Fibrillation with RVR",
        description: "Recognize AFib with rapid ventricular response",
        order: 4,
        estimatedTime: 45
      },
      {
        id: 'module-3-lesson-5',
        moduleId: 'module-3',
        title: "Multifocal Atrial Tachycardia (MAT)",
        description: "Advanced MAT recognition and differential diagnosis",
        order: 5,
        estimatedTime: 45
      },
      {
        id: 'module-3-lesson-6',
        moduleId: 'module-3',
        title: "Wolff-Parkinson-White (WPW) Syndrome",
        description: "Identify WPW syndrome and dangerous combinations",
        order: 6,
        estimatedTime: 45
      },
      {
        id: 'module-3-lesson-7',
        moduleId: 'module-3',
        title: "Premature Atrial Contractions (PACs)",
        description: "Advanced PAC recognition and clinical significance",
        order: 7,
        estimatedTime: 45
      },
      {
        id: 'module-3-lesson-8',
        moduleId: 'module-3',
        title: "Atrial Arrhythmias Integration",
        description: "Comprehensive integration of atrial arrhythmia recognition",
        order: 8,
        estimatedTime: 45
      }
    ]
  },

  // MODULE 4: STEMI & NSTEMI (Intermediate) - Lessons 69-76
  {
    title: "STEMI & NSTEMI",
    description: "Acute coronary syndrome recognition and management",
    category: 'ischemia',
    difficulty: 'intermediate',
    estimatedTime: 360, // 8 lessons × 45 min avg
    prerequisites: ['Atrial Arrhythmias'],
    lessons: [
      {
        id: 'module-4-lesson-1',
        moduleId: 'module-4',
        title: "STEMI Recognition Fundamentals",
        description: "Emergency STEMI recognition",
        order: 1,
        estimatedTime: 45
      },
      {
        id: 'module-4-lesson-2',
        moduleId: 'module-4',
        title: "NSTEMI and Unstable Angina Recognition",
        description: "NSTEMI recognition and management",
        order: 2,
        estimatedTime: 45
      },
      {
        id: 'module-4-lesson-3',
        moduleId: 'module-4',
        title: "Coronary Territory Mapping",
        description: "Coronary anatomy and ECG correlation",
        order: 3,
        estimatedTime: 45
      },
      {
        id: 'module-4-lesson-4',
        moduleId: 'module-4',
        title: "ECG Evolution in Acute MI",
        description: "MI ECG evolution patterns",
        order: 4,
        estimatedTime: 45
      },
      {
        id: 'module-4-lesson-5',
        moduleId: 'module-4',
        title: "STEMI Mimics and Differential Diagnosis",
        description: "STEMI mimics recognition",
        order: 5,
        estimatedTime: 45
      },
      {
        id: 'module-4-lesson-6',
        moduleId: 'module-4',
        title: "ACS Risk Stratification and Management",
        description: "ACS risk stratification tools",
        order: 6,
        estimatedTime: 45
      },
      {
        id: 'module-4-lesson-7',
        moduleId: 'module-4',
        title: "Complications and Post-MI ECG Changes",
        description: "MI complications recognition",
        order: 7,
        estimatedTime: 45
      },
      {
        id: 'module-4-lesson-8',
        moduleId: 'module-4',
        title: "Module 4 STEMI/NSTEMI Mastery Assessment",
        description: "ACS mastery assessment",
        order: 8,
        estimatedTime: 45
      }
    ]
  },

  // MODULE 5: Ventricular Rhythms (Advanced) - Lessons 37-44
  {
    title: "Ventricular Rhythms",
    description: "Critical ventricular rhythms and emergency recognition",
    category: 'arrhythmias',
    difficulty: 'advanced',
    estimatedTime: 360, // 8 lessons × 45 min avg
    prerequisites: ['STEMI & NSTEMI'],
    lessons: [
      {
        id: 'module-5-lesson-1',
        moduleId: 'module-5',
        title: "Ventricular Rhythm Basics",
        description: "Foundation of ventricular rhythm recognition",
        order: 1,
        estimatedTime: 45
      },
      {
        id: 'module-5-lesson-2',
        moduleId: 'module-5',
        title: "Ventricular Escape Rhythm",
        description: "Recognize ventricular escape mechanisms",
        order: 2,
        estimatedTime: 45
      },
      {
        id: 'module-5-lesson-3',
        moduleId: 'module-5',
        title: "Accelerated Idioventricular Rhythm (AIVR)",
        description: "Identify AIVR and reperfusion rhythms",
        order: 3,
        estimatedTime: 45
      },
      {
        id: 'module-5-lesson-4',
        moduleId: 'module-5',
        title: "Ventricular Tachycardia (VT)",
        description: "Critical VT recognition and emergency management",
        order: 4,
        estimatedTime: 45
      },
      {
        id: 'module-5-lesson-5',
        moduleId: 'module-5',
        title: "Ventricular Fibrillation (VF)",
        description: "Emergency VF recognition and response",
        order: 5,
        estimatedTime: 45
      },
      {
        id: 'module-5-lesson-6',
        moduleId: 'module-5',
        title: "Premature Ventricular Contractions (PVCs)",
        description: "PVC recognition and risk stratification",
        order: 6,
        estimatedTime: 45
      },
      {
        id: 'module-5-lesson-7',
        moduleId: 'module-5',
        title: "Ventricular Rhythm Patterns & Morphology",
        description: "Advanced ventricular pattern recognition",
        order: 7,
        estimatedTime: 45
      },
      {
        id: 'module-5-lesson-8',
        moduleId: 'module-5',
        title: "Ventricular Rhythms Integration",
        description: "Complete ventricular rhythm mastery",
        order: 8,
        estimatedTime: 45
      }
    ]
  },

  // MODULE 6: AV Blocks & Complex Arrhythmias (Advanced) - Lessons 45-52
  {
    title: "AV Blocks & Complex Arrhythmias",
    description: "Master AV blocks and complex arrhythmia patterns",
    category: 'arrhythmias',
    difficulty: 'advanced',
    estimatedTime: 360, // 8 lessons × 45 min avg
    prerequisites: ['Ventricular Rhythms'],
    lessons: [
      {
        id: 'module-6-lesson-1',
        moduleId: 'module-6',
        title: "AV Block Fundamentals",
        description: "Foundation of AV conduction system",
        order: 1,
        estimatedTime: 45
      },
      {
        id: 'module-6-lesson-2',
        moduleId: 'module-6',
        title: "First-Degree AV Block",
        description: "Recognize first-degree AV block patterns",
        order: 2,
        estimatedTime: 45
      },
      {
        id: 'module-6-lesson-3',
        moduleId: 'module-6',
        title: "Second-Degree AV Block Type I (Mobitz I/Wenckebach)",
        description: "Master Wenckebach pattern recognition",
        order: 3,
        estimatedTime: 45
      },
      {
        id: 'module-6-lesson-4',
        moduleId: 'module-6',
        title: "Second-Degree AV Block Type II (Mobitz II)",
        description: "Critical Mobitz II recognition and management",
        order: 4,
        estimatedTime: 45
      },
      {
        id: 'module-6-lesson-5',
        moduleId: 'module-6',
        title: "Third-Degree AV Block (Complete Heart Block)",
        description: "Emergency complete heart block management",
        order: 5,
        estimatedTime: 45
      },
      {
        id: 'module-6-lesson-6',
        moduleId: 'module-6',
        title: "Bundle Branch Blocks",
        description: "Recognize bundle branch block patterns",
        order: 6,
        estimatedTime: 45
      },
      {
        id: 'module-6-lesson-7',
        moduleId: 'module-6',
        title: "Wide Complex Tachycardia Differentiation",
        description: "Differentiate wide complex tachycardias",
        order: 7,
        estimatedTime: 45
      },
      {
        id: 'module-6-lesson-8',
        moduleId: 'module-6',
        title: "Complex Arrhythmia Integration & Emergency Management",
        description: "Complex arrhythmia emergency management",
        order: 8,
        estimatedTime: 45
      }
    ]
  },

  // MODULE 7: Emergency Arrhythmias (Expert) - Lessons 53-60
  {
    title: "Emergency Arrhythmias",
    description: "Life-threatening arrhythmias and ACLS protocols",
    category: 'arrhythmias',
    difficulty: 'advanced',
    estimatedTime: 360, // 8 lessons × 45 min avg
    prerequisites: ['AV Blocks & Complex Arrhythmias'],
    lessons: [
      {
        id: 'module-7-lesson-1',
        moduleId: 'module-7',
        title: "Pulseless Electrical Activity (PEA)",
        description: "Emergency PEA recognition and management",
        order: 1,
        estimatedTime: 45
      },
      {
        id: 'module-7-lesson-2',
        moduleId: 'module-7',
        title: "Asystole (Flatline) - Terminal Rhythm",
        description: "Asystole emergency protocols",
        order: 2,
        estimatedTime: 45
      },
      {
        id: 'module-7-lesson-3',
        moduleId: 'module-7',
        title: "Unstable Tachycardia - Emergency Cardioversion",
        description: "Emergency cardioversion techniques",
        order: 3,
        estimatedTime: 45
      },
      {
        id: 'module-7-lesson-4',
        moduleId: 'module-7',
        title: "Ventricular Fibrillation & Pulseless VT",
        description: "Shockable rhythms emergency management",
        order: 4,
        estimatedTime: 45
      },
      {
        id: 'module-7-lesson-5',
        moduleId: 'module-7',
        title: "Unstable Bradycardia - Emergency Pacing",
        description: "Emergency bradycardia management",
        order: 5,
        estimatedTime: 45
      },
      {
        id: 'module-7-lesson-6',
        moduleId: 'module-7',
        title: "Torsades de Pointes - Polymorphic VT",
        description: "Torsades emergency management",
        order: 6,
        estimatedTime: 45
      },
      {
        id: 'module-7-lesson-7',
        moduleId: 'module-7',
        title: "ACLS Integration & Team Management",
        description: "ACLS team management skills",
        order: 7,
        estimatedTime: 45
      },
      {
        id: 'module-7-lesson-8',
        moduleId: 'module-7',
        title: "Module 7 Emergency Mastery Assessment",
        description: "Emergency arrhythmia mastery assessment",
        order: 8,
        estimatedTime: 45
      }
    ]
  },

  // MODULE 8: Electrolytes & Medications (Expert) - Lessons 61-68
  {
    title: "Electrolytes & Medications",
    description: "ECG effects of electrolyte disorders and medications",
    category: 'advanced',
    difficulty: 'advanced',
    estimatedTime: 360, // 8 lessons × 45 min avg
    prerequisites: ['Emergency Arrhythmias'],
    lessons: [
      {
        id: 'module-8-lesson-1',
        moduleId: 'module-8',
        title: "Hyperkalemia Progression - Potassium Emergency",
        description: "Hyperkalemia emergency recognition and management",
        order: 1,
        estimatedTime: 45
      },
      {
        id: 'module-8-lesson-2',
        moduleId: 'module-8',
        title: "Hypokalemia & Arrhythmias",
        description: "Hypokalemia arrhythmia risk and prevention",
        order: 2,
        estimatedTime: 45
      },
      {
        id: 'module-8-lesson-3',
        moduleId: 'module-8',
        title: "Calcium Disorders & QT Effects",
        description: "Calcium disorders and ECG changes",
        order: 3,
        estimatedTime: 45
      },
      {
        id: 'module-8-lesson-4',
        moduleId: 'module-8',
        title: "Digitalis Effects & Toxicity",
        description: "Digitalis toxicity recognition",
        order: 4,
        estimatedTime: 45
      },
      {
        id: 'module-8-lesson-5',
        moduleId: 'module-8',
        title: "Antiarrhythmic Drug Effects",
        description: "Antiarrhythmic drug classifications and effects",
        order: 5,
        estimatedTime: 45
      },
      {
        id: 'module-8-lesson-6',
        moduleId: 'module-8',
        title: "QT Prolonging Medications",
        description: "QT drug safety guidelines",
        order: 6,
        estimatedTime: 45
      },
      {
        id: 'module-8-lesson-7',
        moduleId: 'module-8',
        title: "Complex Drug Interactions & Polypharmacy",
        description: "Complex drug interactions and ECG effects",
        order: 7,
        estimatedTime: 45
      },
      {
        id: 'module-8-lesson-8',
        moduleId: 'module-8',
        title: "Module 8 Mastery Assessment",
        description: "Electrolytes and medications mastery assessment",
        order: 8,
        estimatedTime: 45
      }
    ]
  },

  // MODULE 9: Junctional Rhythms (Expert) - Lessons 30-37
  {
    title: "Junctional Rhythms",
    description: "Master junctional rhythms and AV nodal arrhythmias",
    category: 'arrhythmias',
    difficulty: 'advanced',
    estimatedTime: 360, // 8 lessons × 45 min avg
    prerequisites: ['Electrolytes & Medications'],
    lessons: [
      {
        id: 'module-9-lesson-1',
        moduleId: 'module-9',
        title: "Junctional Rhythm Basics",
        description: "Understand junctional rhythm fundamentals",
        order: 1,
        estimatedTime: 45
      },
      {
        id: 'module-9-lesson-2',
        moduleId: 'module-9',
        title: "Junctional Escape Rhythm",
        description: "Recognize junctional escape patterns",
        order: 2,
        estimatedTime: 45
      },
      {
        id: 'module-9-lesson-3',
        moduleId: 'module-9',
        title: "Accelerated Junctional Rhythm",
        description: "Identify accelerated junctional rhythms",
        order: 3,
        estimatedTime: 45
      },
      {
        id: 'module-9-lesson-4',
        moduleId: 'module-9',
        title: "Junctional Tachycardia",
        description: "Recognize and manage junctional tachycardia",
        order: 4,
        estimatedTime: 45
      },
      {
        id: 'module-9-lesson-5',
        moduleId: 'module-9',
        title: "AV Dissociation",
        description: "Understand AV dissociation patterns",
        order: 5,
        estimatedTime: 45
      },
      {
        id: 'module-9-lesson-6',
        moduleId: 'module-9',
        title: "Premature Junctional Contractions (PJCs)",
        description: "Identify PJCs and their clinical significance",
        order: 6,
        estimatedTime: 45
      },
      {
        id: 'module-9-lesson-7',
        moduleId: 'module-9',
        title: "AV Blocks Introduction",
        description: "Introduction to AV conduction blocks",
        order: 7,
        estimatedTime: 45
      },
      {
        id: 'module-9-lesson-8',
        moduleId: 'module-9',
        title: "Module 9 Junctional Mastery Assessment",
        description: "Comprehensive junctional rhythm mastery",
        order: 8,
        estimatedTime: 45
      }
    ]
  },

  // MODULE 10: Special ECG Patterns & Advanced Topics (Expert) - Lessons 77-84
  {
    title: "Special ECG Patterns & Advanced Topics",
    description: "Rare patterns, genetic conditions, and expert-level recognition",
    category: 'advanced',
    difficulty: 'advanced',
    estimatedTime: 360, // 8 lessons × 45 min avg
    prerequisites: ['Junctional Rhythms'],
    lessons: [
      {
        id: 'module-10-lesson-1',
        moduleId: 'module-10',
        title: "De Winter T Waves & STEMI Equivalents",
        description: "STEMI equivalents recognition",
        order: 1,
        estimatedTime: 45
      },
      {
        id: 'module-10-lesson-2',
        moduleId: 'module-10',
        title: "Wolff-Parkinson-White (WPW) Syndrome",
        description: "WPW syndrome recognition and management",
        order: 2,
        estimatedTime: 45
      },
      {
        id: 'module-10-lesson-3',
        moduleId: 'module-10',
        title: "Brugada Syndrome & Sudden Death Patterns",
        description: "Brugada syndrome recognition and management",
        order: 3,
        estimatedTime: 45
      },
      {
        id: 'module-10-lesson-4',
        moduleId: 'module-10',
        title: "Long QT Syndrome & Torsades Risk",
        description: "Long QT syndrome recognition and management",
        order: 4,
        estimatedTime: 45
      },
      {
        id: 'module-10-lesson-5',
        moduleId: 'module-10',
        title: "Arrhythmogenic Right Ventricular Cardiomyopathy (ARVC)",
        description: "ARVC recognition and athletic screening",
        order: 5,
        estimatedTime: 45
      },
      {
        id: 'module-10-lesson-6',
        moduleId: 'module-10',
        title: "Hypertrophic Cardiomyopathy ECG Patterns",
        description: "HCM recognition and risk stratification",
        order: 6,
        estimatedTime: 45
      },
      {
        id: 'module-10-lesson-7',
        moduleId: 'module-10',
        title: "Takotsubo Cardiomyopathy & Stress-Induced Patterns",
        description: "Takotsubo recognition and management",
        order: 7,
        estimatedTime: 45
      },
      {
        id: 'module-10-lesson-8',
        moduleId: 'module-10',
        title: "Module 10 Mastery Assessment - Advanced Pattern Recognition",
        description: "Expert-level advanced pattern recognition mastery",
        order: 8,
        estimatedTime: 45
      }
    ]
  }
];
