// ECG Flash Mode Quiz Database - Rapid Analysis (30-second timer)
const ecgFlashModeQuizzes = {
  "metadata": {
    "version": "1.0",
    "created_date": "2025-10-17",
    "description": "ECG Flash Mode - Rapid Pattern Recognition (30 seconds per question)",
    "total_quizzes": 40,
    "time_limit": 30,
    "categories": [
      "rhythm_analysis",
      "mi_recognition", 
      "arrhythmia_identification",
      "conduction_patterns",
      "emergency_patterns"
    ],
    "difficulty_levels": ["medium", "hard"],
    "focus": "Rapid ECG Pattern Recognition"
  },
  "quizzes": [
    {
      "id": "flash_001",
      "question": "Analyze this ECG strip - what rhythm do you see?",
      "imageUrl": "/ecg/medical_accurate/normal_75bpm.png",
      "options": [
        "Normal Sinus Rhythm",
        "Atrial Fibrillation",
        "Sinus Tachycardia"
      ],
      "correctAnswer": "Normal Sinus Rhythm",
      "explanation": "Normal sinus rhythm with regular P waves, normal PR intervals, and narrow QRS complexes.",
      "category": "rhythm_analysis",
      "difficulty": "medium",
      "tags": ["normal", "sinus", "basic_recognition"]
    },
    {
      "id": "flash_002", 
      "question": "Analyze this ECG - what do you diagnose?",
      "imageUrl": "/ecg/medical_accurate/atrial_fibrillation_110bpm_4.png",
      "options": [
        "Atrial Fibrillation",
        "Atrial Flutter", 
        "Multifocal Atrial Tachycardia"
      ],
      "correctAnswer": "Atrial Fibrillation",
      "explanation": "Irregularly irregular rhythm with absent P waves and fibrillatory waves - classic atrial fibrillation.",
      "category": "arrhythmia_identification",
      "difficulty": "medium",
      "tags": ["atrial_fib", "irregular", "fast_recognition"]
    },
    {
      "id": "flash_003",
      "question": "Rapid ECG analysis - identify the rhythm:",
      "imageUrl": "/ecg/medical_accurate/ventricular_tachycardia_180bpm_3.png", 
      "options": [
        "Ventricular Tachycardia",
        "Supraventricular Tachycardia",
        "Atrial Flutter with Aberrancy"
      ],
      "correctAnswer": "Ventricular Tachycardia",
      "explanation": "Wide complex tachycardia with AV dissociation - ventricular tachycardia requiring immediate attention.",
      "category": "emergency_patterns",
      "difficulty": "hard",
      "tags": ["vt", "wide_complex", "emergency"]
    },
    {
      "id": "flash_004",
      "question": "Analyze this ECG strip quickly:",
      "imageUrl": "/ecg/medical_accurate/bradycardia_45bpm.png",
      "options": [
        "Sinus Bradycardia",
        "Junctional Rhythm",
        "Complete Heart Block"
      ],
      "correctAnswer": "Sinus Bradycardia", 
      "explanation": "Slow but regular rhythm with P waves preceding each QRS - sinus bradycardia.",
      "category": "rhythm_analysis",
      "difficulty": "medium",
      "tags": ["bradycardia", "slow", "sinus"]
    },
    {
      "id": "flash_005",
      "question": "Quick diagnosis - what MI pattern is this?",
      "imageUrl": "/ecg/MI_ecg_database/Anterior_wall_MI/AMI.jpg",
      "options": [
        "Anterior STEMI", 
        "Inferior STEMI",
        "Lateral STEMI"
      ],
      "correctAnswer": "Anterior STEMI",
      "explanation": "ST elevation in anterior leads V1-V6 indicating anterior wall MI - urgent PCI needed.",
      "category": "mi_recognition",
      "difficulty": "hard",
      "tags": ["anterior_mi", "stemi", "emergency"]
    },
    {
      "id": "flash_006",
      "question": "Analyze this rhythm pattern:",
      "imageUrl": "/ecg/medical_accurate/atrial_flutter_150bpm_3.png",
      "options": [
        "Atrial Flutter",
        "Atrial Fibrillation",
        "Sinus Tachycardia"
      ],
      "correctAnswer": "Atrial Flutter", 
      "explanation": "Regular rhythm with sawtooth flutter waves - atrial flutter with 2:1 conduction.",
      "category": "arrhythmia_identification",
      "difficulty": "medium",
      "tags": ["flutter", "sawtooth", "regular"]
    },
    {
      "id": "flash_007",
      "question": "Rapid ECG assessment - identify the abnormality:",
      "imageUrl": "/ecg/medical_accurate/first_degree_av_block_60bpm_1.png",
      "options": [
        "Complete Heart Block",
        "Sinus Bradycardia", 
        "Second Degree AV Block"
      ],
      "correctAnswer": "Complete Heart Block",
      "explanation": "Complete AV dissociation with independent P waves and QRS complexes - complete heart block.",
      "category": "conduction_patterns",
      "difficulty": "hard",
      "tags": ["complete_block", "av_dissociation", "emergency"]
    },
    {
      "id": "flash_008",
      "question": "Analyze this ECG - what's the diagnosis?",
      "imageUrl": "/ecg/MI_ecg_database/Inferior_wall_MI/IMI.jpg",
      "options": [
        "Inferior MI",
        "Anterior MI",
        "Posterior MI"
      ],
      "correctAnswer": "Inferior MI",
      "explanation": "ST elevation in inferior leads II, III, aVF - inferior wall myocardial infarction.",
      "category": "mi_recognition", 
      "difficulty": "medium",
      "tags": ["inferior_mi", "stemi", "rca"]
    },
    {
      "id": "flash_009",
      "question": "Quick rhythm analysis needed:",
      "imageUrl": "/ecg/medical_accurate/supraventricular_tachycardia_180bpm_2.png",
      "options": [
        "Supraventricular Tachycardia",
        "Ventricular Tachycardia", 
        "Atrial Flutter"
      ],
      "correctAnswer": "Supraventricular Tachycardia",
      "explanation": "Narrow complex tachycardia without visible P waves - supraventricular tachycardia.",
      "category": "arrhythmia_identification",
      "difficulty": "medium",
      "tags": ["svt", "narrow_complex", "fast"]
    },
    {
      "id": "flash_010",
      "question": "Analyze this ECG pattern rapidly:",
      "imageUrl": "/ecg/medical_accurate/lbbb_85bpm.png",
      "options": [
        "Left Bundle Branch Block",
        "Right Bundle Branch Block",
        "Normal Conduction"
      ],
      "correctAnswer": "Left Bundle Branch Block", 
      "explanation": "Wide QRS with broad R waves in lateral leads - left bundle branch block pattern.",
      "category": "conduction_patterns",
      "difficulty": "medium",
      "tags": ["lbbb", "wide_qrs", "conduction"]
    },
    {
      "id": "flash_011",
      "question": "Emergency ECG analysis - what do you see?",
      "imageUrl": "/ecg/MI_ecg_database/Lateral_wall_MI/lmi (2).jpg",
      "options": [
        "Lateral MI",
        "Anterior MI",
        "Inferior MI"
      ],
      "correctAnswer": "Lateral MI",
      "explanation": "ST elevation in lateral leads I, aVL, V5-V6 - lateral wall MI from LCX occlusion.",
      "category": "mi_recognition",
      "difficulty": "hard",
      "tags": ["lateral_mi", "lcx", "stemi"]
    },
    {
      "id": "flash_012",
      "question": "Analyze this rhythm strip:",
      "imageUrl": "/ecg/medical_accurate/pvc_85bpm_3.png",
      "options": [
        "Ventricular Bigeminy",
        "Atrial Bigeminy",
        "Normal Sinus Rhythm"
      ],
      "correctAnswer": "Ventricular Bigeminy",
      "explanation": "Alternating normal beats and wide PVCs - ventricular bigeminy pattern.",
      "category": "arrhythmia_identification",
      "difficulty": "medium", 
      "tags": ["bigeminy", "pvcs", "pattern"]
    },
    {
      "id": "flash_013",
      "question": "Rapid diagnosis needed - analyze this ECG:",
      "imageUrl": "/ecg/medical_accurate/first_degree_av_block_80bpm_3.png",
      "options": [
        "Mobitz Type II Block",
        "Mobitz Type I Block",
        "First Degree AV Block"
      ],
      "correctAnswer": "Mobitz Type II Block",
      "explanation": "Sudden dropped QRS without PR prolongation - Mobitz Type II, high risk pattern.",
      "category": "conduction_patterns",
      "difficulty": "hard",
      "tags": ["mobitz_2", "high_risk", "pacemaker_needed"]
    },
    {
      "id": "flash_014",
      "question": "Quick ECG assessment:",
      "imageUrl": "/ecg/MI_ecg_database/Posterior_wall_MI/PMI.jpg",
      "options": [
        "Posterior MI",
        "Anterior MI", 
        "Normal ECG"
      ],
      "correctAnswer": "Posterior MI",
      "explanation": "Reciprocal changes in V1-V3 with tall R waves and ST depression - posterior MI.",
      "category": "mi_recognition",
      "difficulty": "hard",
      "tags": ["posterior_mi", "reciprocal", "subtle"]
    },
    {
      "id": "flash_015",
      "question": "Analyze this rhythm immediately:",
      "imageUrl": "/ecg/medical_accurate/ventricular_tachycardia_225bpm_6.png", 
      "options": [
        "Torsades de Pointes",
        "Ventricular Fibrillation",
        "Atrial Fibrillation"
      ],
      "correctAnswer": "Torsades de Pointes",
      "explanation": "Polymorphic VT with twisting morphology - Torsades de Pointes, give magnesium!",
      "category": "emergency_patterns",
      "difficulty": "hard",
      "tags": ["torsades", "polymorphic", "emergency", "magnesium"]
    },
    {
      "id": "flash_016",
      "question": "Flash analysis - what's this pattern?",
      "imageUrl": "/ecg/medical_accurate/rbbb_95bpm_4.png",
      "options": [
        "Right Bundle Branch Block",
        "Left Bundle Branch Block",
        "Normal Conduction"
      ],
      "correctAnswer": "Right Bundle Branch Block",
      "explanation": "RSR' pattern in V1 with wide S waves in lateral leads - RBBB.",
      "category": "conduction_patterns", 
      "difficulty": "medium",
      "tags": ["rbbb", "rsr_prime", "wide_qrs"]
    },
    {
      "id": "flash_017",
      "question": "Emergency rhythm analysis:",
      "imageUrl": "/ecg/medical_accurate/ventricular_tachycardia_210bpm_5.png",
      "options": [
        "Ventricular Fibrillation",
        "Torsades de Pointes",
        "Artifact"
      ],
      "correctAnswer": "Ventricular Fibrillation",
      "explanation": "Chaotic, irregular waveform with no identifiable QRS complexes - VF, defibrillate immediately!",
      "category": "emergency_patterns",
      "difficulty": "hard",
      "tags": ["vf", "chaotic", "defibrillate", "arrest"]
    },
    {
      "id": "flash_018",
      "question": "Analyze this ECG strip quickly:", 
      "imageUrl": "/ecg/medical_accurate/bradycardia_50bpm.png",
      "options": [
        "Junctional Rhythm",
        "Sinus Bradycardia", 
        "Idioventricular Rhythm"
      ],
      "correctAnswer": "Junctional Rhythm",
      "explanation": "Narrow QRS complexes without visible P waves at slow rate - junctional rhythm.",
      "category": "rhythm_analysis",
      "difficulty": "medium",
      "tags": ["junctional", "narrow", "no_p_waves"]
    },
    {
      "id": "flash_019",
      "question": "Rapid MI assessment needed:",
      "imageUrl": "/ecg/MI_ecg_database/Anterolateral_MI/ANTEROLATERAL.jpg",
      "options": [
        "Anterolateral MI",
        "Anterior MI only",
        "Lateral MI only"
      ],
      "correctAnswer": "Anterolateral MI",
      "explanation": "ST elevation in both anterior and lateral leads - extensive anterolateral MI.",
      "category": "mi_recognition",
      "difficulty": "hard",
      "tags": ["anterolateral", "extensive", "lad"]
    },
    {
      "id": "flash_020",
      "question": "Quick rhythm identification:",
      "imageUrl": "/ecg/medical_accurate/atrial_fibrillation_130bpm_6.png",
      "options": [
        "Multifocal Atrial Tachycardia", 
        "Atrial Fibrillation",
        "Sinus Tachycardia with PACs"
      ],
      "correctAnswer": "Multifocal Atrial Tachycardia", 
      "explanation": "Multiple P wave morphologies with irregular rhythm - MAT, often seen in COPD.",
      "category": "arrhythmia_identification",
      "difficulty": "hard",
      "tags": ["mat", "multiple_p", "copd"]
    },
    {
      "id": "flash_021",
      "question": "Analyze this ECG - fast diagnosis needed:",
      "imageUrl": "/ecg/medical_accurate/first_degree_av_block_70bpm_2.png",
      "options": [
        "First Degree AV Block",
        "Normal Sinus Rhythm",
        "Second Degree AV Block"
      ],
      "correctAnswer": "First Degree AV Block",
      "explanation": "Prolonged PR interval >200ms with every P wave conducted - first degree AV block.",
      "category": "conduction_patterns",
      "difficulty": "medium",
      "tags": ["first_degree", "prolonged_pr", "conducted"]
    },
    {
      "id": "flash_022",
      "question": "Emergency ECG interpretation:",
      "imageUrl": "/ecg/MI_ecg_database/Inferior_wall_MI/imi6.jpg",
      "options": [
        "Right Ventricular MI",
        "Inferior MI only",
        "Anterior MI"
      ],
      "correctAnswer": "Right Ventricular MI", 
      "explanation": "ST elevation in right-sided leads V3R, V4R - right ventricular infarction.",
      "category": "mi_recognition",
      "difficulty": "hard",
      "tags": ["rv_mi", "right_sided", "hemodynamic"]
    },
    {
      "id": "flash_023",
      "question": "Flash rhythm analysis:",
      "imageUrl": "/ecg/medical_accurate/junctional_escape.png",
      "options": [
        "Accelerated Idioventricular Rhythm",
        "Ventricular Tachycardia",
        "Junctional Tachycardia"
      ],
      "correctAnswer": "Accelerated Idioventricular Rhythm",
      "explanation": "Wide QRS complexes at moderate rate 60-100 BPM - AIVR, often post-reperfusion.",
      "category": "arrhythmia_identification",
      "difficulty": "medium",
      "tags": ["aivr", "wide", "moderate_rate", "reperfusion"]
    },
    {
      "id": "flash_024",
      "question": "Rapid ECG diagnosis:",
      "imageUrl": "/ecg/medical_accurate/supraventricular_tachycardia_160bpm_1.png",
      "options": [
        "WPW Syndrome",
        "Bundle Branch Block",
        "Normal Variant"
      ],
      "correctAnswer": "WPW Syndrome",
      "explanation": "Short PR interval with delta wave - Wolff-Parkinson-White syndrome with accessory pathway.",
      "category": "conduction_patterns",
      "difficulty": "hard", 
      "tags": ["wpw", "delta_wave", "accessory", "short_pr"]
    },
    {
      "id": "flash_025",
      "question": "Analyze this ECG pattern:",
      "imageUrl": "/ecg/MI_ecg_database/Anterior_wall_MI/AMI(7).jpg",
      "options": [
        "Wellens Pattern Type A",
        "Normal T waves",
        "Anterior STEMI"
      ],
      "correctAnswer": "Wellens Pattern Type A",
      "explanation": "Biphasic T waves in V2-V3 - Wellens Type A, critical LAD stenosis warning sign!",
      "category": "emergency_patterns",
      "difficulty": "hard",
      "tags": ["wellens", "biphasic_t", "critical_lad", "warning"]
    },
    {
      "id": "flash_026", 
      "question": "Quick rhythm assessment:",
      "imageUrl": "/ecg/medical_accurate/sinus_pause.png",
      "options": [
        "Sinus Pause/Arrest",
        "Second Degree AV Block",
        "Artifact"
      ],
      "correctAnswer": "Sinus Pause/Arrest",
      "explanation": "Sudden cessation of P waves for >3 seconds - sinus pause/arrest, evaluate for SSS.",
      "category": "rhythm_analysis",
      "difficulty": "medium",
      "tags": ["sinus_pause", "arrest", "sss", "pacemaker"]
    },
    {
      "id": "flash_027",
      "question": "Flash diagnosis - analyze this ECG:",
      "imageUrl": "/ecg/medical_accurate/tachycardia_150bpm.png",
      "options": [
        "Atrial Tachycardia", 
        "Sinus Tachycardia",
        "Atrial Flutter"
      ],
      "correctAnswer": "Atrial Tachycardia",
      "explanation": "Regular narrow complex tachycardia with abnormal P wave morphology - atrial tachycardia.",
      "category": "arrhythmia_identification",
      "difficulty": "medium",
      "tags": ["atrial_tach", "narrow", "abnormal_p"]
    },
    {
      "id": "flash_028",
      "question": "Emergency pattern recognition:",
      "imageUrl": "/ecg/MI_ecg_database/Anterior_wall_MI/AMI8.jpg", 
      "options": [
        "Hyperacute Anterior MI",
        "Normal T waves",
        "Early Repolarization"
      ],
      "correctAnswer": "Hyperacute Anterior MI",
      "explanation": "Tall, peaked T waves in anterior leads - hyperacute phase of anterior MI, activate cath lab!",
      "category": "emergency_patterns",
      "difficulty": "hard",
      "tags": ["hyperacute", "peaked_t", "early_mi", "urgent"]
    },
    {
      "id": "flash_029",
      "question": "Analyze this conduction pattern:",
      "imageUrl": "/ecg/medical_accurate/left_anterior_fascicular_block.png",
      "options": [
        "Left Anterior Fascicular Block",
        "Left Posterior Fascicular Block", 
        "Normal Axis"
      ],
      "correctAnswer": "Left Anterior Fascicular Block",
      "explanation": "Left axis deviation with qR in aVL, rS in III - left anterior fascicular block.",
      "category": "conduction_patterns",
      "difficulty": "medium",
      "tags": ["lafb", "left_axis", "fascicular"]
    },
    {
      "id": "flash_030",
      "question": "Rapid ECG interpretation needed:",
      "imageUrl": "/ecg/medical_accurate/ventricular_trigeminy.png",
      "options": [
        "Ventricular Trigeminy", 
        "Ventricular Bigeminy",
        "Multifocal PVCs"
      ],
      "correctAnswer": "Ventricular Trigeminy",
      "explanation": "Pattern of two normal beats followed by PVC - ventricular trigeminy.",
      "category": "arrhythmia_identification",
      "difficulty": "medium",
      "tags": ["trigeminy", "pattern", "pvcs"]
    },
    {
      "id": "flash_031",
      "question": "Flash MI analysis:",
      "imageUrl": "/ecg/MI_ecg_database/Anterior_wall_MI/AMI3.jpg",
      "options": [
        "Evolving Anterior MI",
        "Acute Anterior STEMI",
        "Normal Evolution"
      ],
      "correctAnswer": "Evolving Anterior MI",
      "explanation": "Deep T wave inversions in anterior leads - evolving phase of anterior MI.",
      "category": "mi_recognition",
      "difficulty": "medium",
      "tags": ["evolving_mi", "t_inversions", "anterior"]
    },
    {
      "id": "flash_032",
      "question": "Emergency rhythm recognition:",
      "imageUrl": "/ecg/medical_accurate/sinus_pause.png",
      "options": [
        "Asystole",
        "Fine VF", 
        "Artifact"
      ],
      "correctAnswer": "Asystole",
      "explanation": "Flatline rhythm with no electrical activity - asystole, start CPR immediately!",
      "category": "emergency_patterns", 
      "difficulty": "hard",
      "tags": ["asystole", "flatline", "cpr", "arrest"]
    },
    {
      "id": "flash_033",
      "question": "Quick conduction analysis:",
      "imageUrl": "/ecg/medical_accurate/second_degree_type1.png",
      "options": [
        "Wenckebach (Mobitz I)",
        "Mobitz Type II",
        "First Degree Block"
      ],
      "correctAnswer": "Wenckebach (Mobitz I)",
      "explanation": "Progressive PR prolongation with dropped beat - Wenckebach/Mobitz Type I.",
      "category": "conduction_patterns",
      "difficulty": "medium",
      "tags": ["wenckebach", "progressive_pr", "benign"]
    },
    {
      "id": "flash_034", 
      "question": "Analyze this ECG rapidly:",
      "imageUrl": "/ecg/medical_accurate/rbbb_complete.png",
      "options": [
        "Ventricular Paced Rhythm",
        "Bundle Branch Block",
        "Ventricular Tachycardia"
      ],
      "correctAnswer": "Bundle Branch Block",
      "explanation": "Wide QRS complexes with typical RBBB morphology - complete right bundle branch block.",
      "category": "rhythm_analysis",
      "difficulty": "medium", 
      "tags": ["rbbb", "bundle_branch_block", "wide_qrs", "conduction_delay"]
    },
    {
      "id": "flash_035",
      "question": "Flash ECG diagnosis:",
      "imageUrl": "/ecg/MI_ecg_database/Inferior_wall_MI/IMI.jpg",
      "options": [
        "Old Inferior MI",
        "Acute Inferior MI", 
        "Normal Variant"
      ],
      "correctAnswer": "Old Inferior MI",
      "explanation": "Pathologic Q waves in inferior leads without ST changes - old inferior MI.",
      "category": "mi_recognition",
      "difficulty": "medium",
      "tags": ["old_mi", "q_waves", "inferior", "scar"]
    },
    {
      "id": "flash_036",
      "question": "Rapid arrhythmia identification:",
      "imageUrl": "/ecg/medical_accurate/wandering_pacemaker.png",
      "options": [
        "Wandering Atrial Pacemaker",
        "Multifocal Atrial Tachycardia",
        "Sinus Arrhythmia"
      ],
      "correctAnswer": "Wandering Atrial Pacemaker",
      "explanation": "Variable P wave morphology with normal rate - wandering atrial pacemaker.",
      "category": "rhythm_analysis",
      "difficulty": "medium",
      "tags": ["wandering", "variable_p", "benign"]
    },
    {
      "id": "flash_037",
      "question": "Emergency ECG assessment:",
      "imageUrl": "/ecg/medical_accurate/bradycardia_45bpm.png",
      "options": [
        "PEA (Pulseless Electrical Activity)",
        "Normal Sinus Rhythm",
        "Sinus Bradycardia"
      ],
      "correctAnswer": "PEA (Pulseless Electrical Activity)",
      "explanation": "Organized electrical activity but no pulse - PEA, find reversible causes!",
      "category": "emergency_patterns",
      "difficulty": "hard",
      "tags": ["pea", "no_pulse", "reversible", "cpr"]
    },
    {
      "id": "flash_038",
      "question": "Quick pattern analysis:",
      "imageUrl": "/ecg/medical_accurate/prolonged_qt_interval.png", 
      "options": [
        "Prolonged QT Interval",
        "Normal QT Interval",
        "Short QT Interval"
      ],
      "correctAnswer": "Prolonged QT Interval",
      "explanation": "QT interval >440ms (men) or >460ms (women) - prolonged QT, Torsades risk.",
      "category": "emergency_patterns",
      "difficulty": "medium",
      "tags": ["long_qt", "torsades_risk", "drugs"]
    },
    {
      "id": "flash_039",
      "question": "Flash conduction assessment:",
      "imageUrl": "/ecg/medical_accurate/rbbb_complete.png",
      "options": [
        "Bifascicular Block (RBBB + LAFB)",
        "RBBB alone",
        "LAFB alone"
      ],
      "correctAnswer": "Bifascicular Block (RBBB + LAFB)",
      "explanation": "RBBB pattern with left axis deviation - bifascicular block, high CHB risk.",
      "category": "conduction_patterns", 
      "difficulty": "hard",
      "tags": ["bifascicular", "rbbb_lafb", "chb_risk"]
    },
    {
      "id": "flash_040",
      "question": "Final flash challenge - analyze this ECG:",
      "imageUrl": "/ecg/MI_ecg_database/Anterior_wall_MI/AMI9.jpg",
      "options": [
        "Massive Anterior MI",
        "Limited Anterior MI",
        "Old Anterior MI"
      ],
      "correctAnswer": "Massive Anterior MI",
      "explanation": "Extensive ST elevation V1-V6 with reciprocal changes - massive anterior MI, high risk!",
      "category": "emergency_patterns",
      "difficulty": "hard", 
      "tags": ["massive_mi", "extensive", "high_risk", "shock"]
    }
  ]
};

export default ecgFlashModeQuizzes;