const ecgQuizzes25 = {
  "metadata": {
    "version": "2.1",
    "created_date": "2025-10-17",
    "description": "ECG Master Quiz Database - 32 Focused Rhythm Recognition Questions",
    "total_quizzes": 32,
    "categories": ["normal_sinus", "bradycardia", "tachycardia", "atrial_fibrillation", "ventricular_tachycardia", "bundle_branch_blocks", "av_blocks", "other_arrhythmias"],
    "difficulty_levels": ["easy", "medium", "hard"]
  },
  "quizzes": [
    {
      "id": "quiz_001",
      "question": "What is the rhythm pattern shown in this ECG strip?",
      "imageUrl": "/ecg/medical_accurate/normal_75bpm.png",
      "options": [
        "Normal Sinus Rhythm",
        "Sinus Bradycardia", 
        "Sinus Tachycardia",
        "First Degree AV Block"
      ],
      "correctAnswer": "Normal Sinus Rhythm",
      "explanation": "This ECG shows normal sinus rhythm with regular P waves present before each QRS complex, normal PR intervals, and narrow QRS complexes. The rhythm is regular and originates from the sinus node.",
      "category": "normal_sinus",
      "difficulty": "easy",
      "tags": ["normal", "sinus_rhythm", "basic"],
      "medicalContext": {
        "mechanism": "Normal electrical conduction through SA node, AV node, and ventricular conduction system",
        "clinical_significance": "Normal cardiac rhythm indicating proper heart function",
        "management": "No intervention required"
      }
    },
    {
      "id": "quiz_002", 
      "question": "What type of rhythm abnormality is shown in this ECG?",
      "imageUrl": "/ecg/medical_accurate/bradycardia_45bpm.png",
      "options": [
        "Normal Sinus Rhythm",
        "Sinus Bradycardia",
        "Junctional Rhythm", 
        "Second Degree AV Block"
      ],
      "correctAnswer": "Sinus Bradycardia",
      "explanation": "This ECG demonstrates sinus bradycardia with P waves present and normal, but the rhythm is noticeably slow. This can be normal in athletes or due to medications, hypothyroidism, or increased intracranial pressure.",
      "category": "bradycardia",
      "difficulty": "easy",
      "tags": ["bradycardia", "slow_rhythm", "sinus"],
      "medicalContext": {
        "mechanism": "Slow firing of SA node or increased parasympathetic tone",
        "clinical_significance": "May be physiologic in athletes or pathologic requiring investigation",
        "management": "Evaluate for underlying causes, atropine if symptomatic"
      }
    },
    {
      "id": "quiz_003",
      "question": "What rhythm pattern is demonstrated in this ECG?",
      "imageUrl": "/ecg/medical_accurate/tachycardia_125bpm.png", 
      "options": [
        "Normal Sinus Rhythm",
        "Sinus Tachycardia",
        "Atrial Flutter",
        "Ventricular Tachycardia"
      ],
      "correctAnswer": "Sinus Tachycardia",
      "explanation": "This ECG shows sinus tachycardia with P waves present and upright in lead II, normal PR intervals, and narrow QRS complexes. The rhythm is regular but faster than normal sinus rhythm.",
      "category": "tachycardia", 
      "difficulty": "easy",
      "tags": ["tachycardia", "fast_rhythm", "sinus"],
      "medicalContext": {
        "mechanism": "Rapid firing of SA node due to physiologic or pathologic causes",
        "clinical_significance": "Response to fever, exercise, anxiety, hypovolemia, or medications",
        "management": "Treat underlying cause, beta-blockers if inappropriate"
      }
    },
    {
      "id": "quiz_004",
      "question": "Analyze this ECG rhythm and select the correct diagnosis:",
      "imageUrl": "/ecg/medical_accurate/atrial_fibrillation_110bpm_4.png",
      "options": [
        "Normal Sinus Rhythm",
        "Atrial Fibrillation", 
        "Atrial Flutter",
        "Multifocal Atrial Tachycardia"
      ],
      "correctAnswer": "Atrial Fibrillation",
      "explanation": "This ECG demonstrates atrial fibrillation with an irregularly irregular rhythm. No distinct P waves are visible, only chaotic fibrillatory waves. QRS complexes are narrow and irregularly spaced.",
      "category": "atrial_fibrillation",
      "difficulty": "medium",
      "tags": ["atrial_fibrillation", "irregular", "no_p_waves"],
      "medicalContext": {
        "mechanism": "Chaotic atrial electrical activity with irregular AV conduction",
        "clinical_significance": "Increased stroke risk, reduced cardiac output, symptom burden",
        "management": "Rate/rhythm control, anticoagulation based on CHA2DS2-VASc score"
      }
    },
    {
      "id": "quiz_005",
      "question": "What is the most likely diagnosis for this wide-complex tachycardia?",
      "imageUrl": "/ecg/medical_accurate/vtach_180bpm.png",
      "options": [
        "Sinus Tachycardia",
        "Supraventricular Tachycardia",
        "Ventricular Tachycardia",
        "Atrial Flutter with Aberrancy"
      ],
      "correctAnswer": "Ventricular Tachycardia",
      "explanation": "This ECG shows ventricular tachycardia with wide QRS complexes and a rapid, regular rhythm. QRS morphology is consistent with ventricular origin. This is a medical emergency requiring immediate cardioversion.",
      "category": "ventricular_tachycardia",
      "difficulty": "hard", 
      "tags": ["vtach", "wide_complex", "emergency", "ventricular"],
      "medicalContext": {
        "mechanism": "Abnormal ventricular electrical focus causing rapid, wide QRS rhythm",
        "clinical_significance": "Life-threatening arrhythmia, can progress to ventricular fibrillation",
        "management": "Immediate cardioversion if unstable, amiodarone if stable"
      }
    },
    {
      "id": "quiz_006",
      "question": "What conduction abnormality is shown in this ECG?",
      "imageUrl": "/ecg/medical_accurate/rbbb_80bpm_2.png",
      "options": [
        "Normal Conduction",
        "Right Bundle Branch Block",
        "Left Bundle Branch Block", 
        "First Degree AV Block"
      ],
      "correctAnswer": "Right Bundle Branch Block",
      "explanation": "This ECG demonstrates right bundle branch block (RBBB) with characteristic RSR' pattern in V1 and wide S waves in leads I, aVL, V5, and V6. The QRS complexes are widened due to delayed right ventricular depolarization.",
      "category": "bundle_branch_blocks",
      "difficulty": "medium",
      "tags": ["rbbb", "conduction_delay", "wide_qrs"],
      "medicalContext": {
        "mechanism": "Delayed conduction through right bundle branch causing late RV activation", 
        "clinical_significance": "May indicate RV strain, pulmonary disease, or congenital heart disease",
        "management": "Investigate underlying cause, generally no specific treatment needed"
      }
    },
    {
      "id": "quiz_007",
      "question": "Identify the bundle branch block pattern in this ECG:",
      "imageUrl": "/ecg/medical_accurate/lbbb_75bpm_2.png", 
      "options": [
        "Right Bundle Branch Block",
        "Left Bundle Branch Block",
        "Bifascicular Block",
        "Normal Conduction"
      ],
      "correctAnswer": "Left Bundle Branch Block", 
      "explanation": "This ECG shows left bundle branch block (LBBB) with widened QRS complexes, broad monophasic R waves in I, aVL, V5, V6, and absence of septal Q waves. LBBB often indicates underlying structural heart disease.",
      "category": "bundle_branch_blocks",
      "difficulty": "medium",
      "tags": ["lbbb", "conduction_delay", "structural_disease"],
      "medicalContext": {
        "mechanism": "Blocked conduction through left bundle branch causing delayed LV activation",
        "clinical_significance": "Often indicates structural heart disease, reduced ejection fraction",
        "management": "Evaluate for CAD, heart failure; consider CRT if indicated"
      }
    },
    {
      "id": "quiz_008",
      "question": "What AV conduction abnormality is present in this ECG?",
      "imageUrl": "/ecg/medical_accurate/first_degree_av_block_70bpm_2.png",
      "options": [
        "Normal AV Conduction", 
        "First Degree AV Block",
        "Second Degree AV Block",
        "Third Degree AV Block"
      ],
      "correctAnswer": "First Degree AV Block",
      "explanation": "This ECG demonstrates first degree AV block with prolonged PR interval. Every P wave is followed by a QRS complex, but conduction is delayed.",
      "category": "av_blocks",
      "difficulty": "easy",
      "tags": ["av_block", "prolonged_pr", "conduction_delay"],
      "medicalContext": {
        "mechanism": "Delayed conduction through AV node, often due to increased vagal tone or medications",
        "clinical_significance": "Usually benign, may progress to higher degree blocks",
        "management": "Monitor for progression, review medications affecting AV conduction"
      }
    },
    {
      "id": "quiz_009",
      "question": "What type of premature complex is shown in this rhythm strip?",
      "imageUrl": "/ecg/medical_accurate/pvc_78bpm_2.png",
      "options": [
        "Premature Atrial Complex (PAC)",
        "Premature Ventricular Complex (PVC)",
        "Premature Junctional Complex", 
        "Aberrantly Conducted Beat"
      ],
      "correctAnswer": "Premature Ventricular Complex (PVC)",
      "explanation": "This ECG shows premature ventricular complexes (PVCs) appearing as wide, bizarre QRS complexes that occur earlier than expected. The underlying rhythm is sinus rhythm. PVCs originate from ventricular tissue below the AV node.",
      "category": "other_arrhythmias",
      "difficulty": "medium", 
      "tags": ["pvc", "premature", "wide_complex", "ventricular"],
      "medicalContext": {
        "mechanism": "Ectopic ventricular focus firing prematurely, disrupting normal rhythm",
        "clinical_significance": "Often benign if infrequent, may indicate underlying heart disease if frequent",
        "management": "Evaluate for reversible causes, beta-blockers if symptomatic"
      }
    },
    {
      "id": "quiz_010",
      "question": "What atrial arrhythmia is demonstrated in this ECG?",
      "imageUrl": "/ecg/medical_accurate/atrial_flutter_100bpm_2.png",
      "options": [
        "Atrial Fibrillation",
        "Atrial Flutter",
        "Multifocal Atrial Tachycardia",
        "Sinus Tachycardia"
      ],
      "correctAnswer": "Atrial Flutter", 
      "explanation": "This ECG shows atrial flutter with characteristic sawtooth flutter waves with variable ventricular conduction. The flutter waves are best seen in inferior leads.",
      "category": "other_arrhythmias",
      "difficulty": "medium",
      "tags": ["atrial_flutter", "sawtooth", "regular", "atrial"],
      "medicalContext": {
        "mechanism": "Macro-reentrant atrial circuit creating organized atrial activity at high frequency",
        "clinical_significance": "Similar stroke risk to atrial fibrillation, often converts to AF",
        "management": "Rate control, rhythm control, anticoagulation based on risk factors"
      }
    },
    {
      "id": "quiz_011",
      "question": "Identify the supraventricular arrhythmia in this ECG:",
      "imageUrl": "/ecg/medical_accurate/supraventricular_tachycardia_180bpm_2.png",
      "options": [
        "Sinus Tachycardia", 
        "Atrial Flutter",
        "Supraventricular Tachycardia",
        "Ventricular Tachycardia"
      ],
      "correctAnswer": "Supraventricular Tachycardia",
      "explanation": "This ECG demonstrates supraventricular tachycardia (SVT) with narrow QRS complexes. The rhythm is regular and P waves are not clearly visible, likely buried in the QRS or T waves. This represents a reentrant mechanism above the ventricles.",
      "category": "other_arrhythmias", 
      "difficulty": "medium",
      "tags": ["svt", "narrow_complex", "reentrant", "fast"],
      "medicalContext": {
        "mechanism": "Reentrant circuit involving AV node or accessory pathway causing rapid narrow-complex rhythm",
        "clinical_significance": "Usually paroxysmal, can cause hemodynamic compromise if prolonged",
        "management": "Vagal maneuvers, adenosine, verapamil; cardioversion if unstable"
      }
    },
    {
      "id": "quiz_012",
      "question": "What is the ventricular rate and rhythm type in this ECG?",
      "imageUrl": "/ecg/medical_accurate/normal_60bpm.png",
      "options": [
        "Normal Sinus Rhythm",
        "Sinus Bradycardia", 
        "Junctional Rhythm",
        "First Degree AV Block"
      ],
      "correctAnswer": "Normal Sinus Rhythm",
      "explanation": "This ECG shows normal sinus rhythm at the lower limit of normal heart rate (60 BPM). P waves are upright and precede each QRS, PR interval is normal, and QRS complexes are narrow. Rate of is at the boundary between normal and bradycardia.",
      "category": "normal_sinus",
      "difficulty": "easy",
      "tags": ["normal", "lower_limit", "sinus", "60bpm"],
      "medicalContext": {
        "mechanism": "Normal sinus node firing at lower limit of normal range",
        "clinical_significance": "Normal variant, especially in fit individuals or at rest",
        "management": "No intervention required unless symptomatic"
      }
    },
    {
      "id": "quiz_014",
      "question": "What irregularity pattern is shown in this atrial fibrillation ECG?",
      "imageUrl": "/ecg/medical_accurate/atrial_fibrillation_85bpm_2.png",
      "options": [
        "Regularly Irregular", 
        "Irregularly Irregular",
        "Regular Rhythm",
        "Paced Rhythm"
      ],
      "correctAnswer": "Irregularly Irregular",
      "explanation": "This ECG demonstrates atrial fibrillation with the classic 'irregularly irregular' pattern. R-R intervals vary randomly with no predictable pattern. Fibrillatory waves are present instead of organized P waves, confirming the diagnosis of atrial fibrillation.",
      "category": "atrial_fibrillation",
      "difficulty": "medium",
      "tags": ["irregular", "chaotic", "fibrillatory_waves", "unpredictable"],
      "medicalContext": {
        "mechanism": "Multiple chaotic atrial impulses with random AV node conduction",
        "clinical_significance": "Stroke risk assessment needed, symptoms may include palpitations",
        "management": "CHA2DS2-VASc scoring, rate vs rhythm control strategy"
      }
    },
    {
      "id": "quiz_015",
      "question": "What is the significance of the QRS width in this ventricular arrhythmia?",
      "imageUrl": "/ecg/medical_accurate/vtach_200bpm.png",
      "options": [
        "Narrow QRS suggests SVT",
        "Wide QRS confirms Ventricular Tachycardia", 
        "QRS width is normal",
        "Variable QRS width"
      ],
      "correctAnswer": "Wide QRS confirms Ventricular Tachycardia",
      "explanation": "This ECG shows ventricular tachycardia with wide QRS complexes (>120ms). The wide QRS morphology confirms ventricular origin, as the electrical impulse must spread through ventricular muscle rather than the normal conduction system, resulting in delayed activation.",
      "category": "ventricular_tachycardia",
      "difficulty": "hard",
      "tags": ["wide_qrs", "ventricular_origin", "emergency", "high_rate"],
      "medicalContext": {
        "mechanism": "Ventricular focus firing rapidly, bypassing normal His-Purkinje system",
        "clinical_significance": "Life-threatening, high risk of cardiovascular collapse",
        "management": "Immediate cardioversion, antiarrhythmic drugs, defibrillation if pulseless"
      }
    },
    {
      "id": "quiz_016",
      "question": "What conduction pattern is demonstrated in leads V1-V2?",
      "imageUrl": "/ecg/medical_accurate/rbbb_95bpm_4.png",
      "options": [
        "Normal R Wave Progression",
        "RSR' Pattern (RBBB)",
        "QS Pattern", 
        "Poor R Wave Progression"
      ],
      "correctAnswer": "RSR' Pattern (RBBB)",
      "explanation": "This ECG shows the classic RSR' (rabbit ear) pattern in leads V1-V2 characteristic of right bundle branch block. The QRS is widened >120ms and there are deep S waves in lateral leads I, aVL, V5, V6. Heart rate is.",
      "category": "bundle_branch_blocks",
      "difficulty": "medium",
      "tags": ["rsr_pattern", "v1_morphology", "rbbb", "classic"],
      "medicalContext": {
        "mechanism": "Right bundle branch conduction delay causing sequential ventricular activation",
        "clinical_significance": "May indicate right heart strain, pulmonary embolism, or congenital disease",
        "management": "Investigate for pulmonary hypertension, structural heart disease"
      }
    },
    {
      "id": "quiz_017",
      "question": "What is the characteristic feature of this left bundle branch block?",
      "imageUrl": "/ecg/medical_accurate/lbbb_85bpm.png", 
      "options": [
        "Narrow QRS Complexes",
        "Broad Monophasic R Waves in Lateral Leads",
        "Deep Q Waves in Lateral Leads",
        "RSR' Pattern in V1"
      ],
      "correctAnswer": "Broad Monophasic R Waves in Lateral Leads",
      "explanation": "This ECG demonstrates left bundle branch block with characteristic broad, monophasic R waves in lateral leads (I, aVL, V5, V6) and absence of septal Q waves. QRS duration is >120ms at a heart rate of.",
      "category": "bundle_branch_blocks", 
      "difficulty": "medium",
      "tags": ["lbbb", "monophasic_r", "lateral_leads", "no_septal_q"],
      "medicalContext": {
        "mechanism": "Left bundle branch blockade causing delayed and abnormal left ventricular activation",
        "clinical_significance": "Often associated with coronary artery disease, cardiomyopathy, hypertension",
        "management": "Echocardiogram, stress testing, consider CRT if heart failure present"
      }
    },
    {
      "id": "quiz_019",
      "question": "How would you classify these premature complexes based on their morphology?",
      "imageUrl": "/ecg/medical_accurate/pvc_85bpm_3.png",
      "options": [
        "Narrow Complex Premature Beats",
        "Wide Complex Ventricular Ectopy",
        "Aberrantly Conducted PACs", 
        "Junctional Premature Beats"
      ],
      "correctAnswer": "Wide Complex Ventricular Ectopy",
      "explanation": "This ECG shows wide complex premature ventricular contractions (PVCs) interrupting the underlying sinus rhythm. The PVCs have wide, bizarre morphology typical of ventricular origin and occur earlier than the expected sinus beat.",
      "category": "other_arrhythmias",
      "difficulty": "medium",
      "tags": ["pvc", "wide_complex", "ectopy", "ventricular_origin"],
      "medicalContext": {
        "mechanism": "Ectopic ventricular focus creating wide QRS complexes outside normal conduction",
        "clinical_significance": "Frequency and complexity determine clinical significance and treatment need",
        "management": "Evaluate for structural heart disease, electrolyte abnormalities, medications"
      }
    },
    {
      "id": "quiz_020",
      "question": "What is the atrial rate in this flutter pattern?",
      "imageUrl": "/ecg/medical_accurate/atrial_flutter_150bpm_3.png",
      "options": [
        "150 BPM", 
        "300 BPM",
        "450 BPM",
        "600 BPM"
      ],
      "correctAnswer": "300 BPM",
      "explanation": "This ECG shows atrial flutter with classic sawtooth flutter waves (typical atrial flutter rate is 280-320 BPM). The ventricular rate is due to 2:1 AV conduction. Flutter waves are most visible in inferior leads.",
      "category": "other_arrhythmias",
      "difficulty": "medium", 
      "tags": ["flutter", "300bpm", "2to1_conduction", "sawtooth"],
      "medicalContext": {
        "mechanism": "Organized atrial macro-reentrant circuit creating regular atrial activity",
        "clinical_significance": "Stroke risk similar to atrial fibrillation, often precedes or follows AF",
        "management": "Rate control, consider rhythm control, anticoagulation assessment"
      }
    },
    {
      "id": "quiz_021",
      "question": "What makes this supraventricular tachycardia concerning?",
      "imageUrl": "/ecg/medical_accurate/supraventricular_tachycardia_200bpm_3.png", 
      "options": [
        "Irregular Rhythm",
        "Very Fast Rate (200 BPM)",
        "Wide QRS Complexes",
        "Visible P Waves"
      ],
      "correctAnswer": "Very Fast Rate (200 BPM)",
      "explanation": "This ECG shows supraventricular tachycardia, which is extremely fast and concerning for hemodynamic compromise. At this rate, diastolic filling time is severely reduced, potentially causing decreased cardiac output and symptoms.",
      "category": "other_arrhythmias",
      "difficulty": "hard",
      "tags": ["svt", "200bpm", "hemodynamic", "emergency"],
      "medicalContext": {
        "mechanism": "Rapid reentrant circuit above ventricles causing extremely fast narrow-complex rhythm",
        "clinical_significance": "High risk of hemodynamic instability, syncope, heart failure",
        "management": "Urgent treatment with adenosine, verapamil, or synchronized cardioversion"
      }
    },
    {
      "id": "quiz_024",
      "question": "What is the ventricular response pattern in this atrial fibrillation?",
      "imageUrl": "/ecg/medical_accurate/atrial_fibrillation_140bpm_7.png",
      "options": [
        "Controlled Ventricular Response",
        "Rapid Ventricular Response", 
        "Slow Ventricular Response",
        "Regular Ventricular Response"
      ],
      "correctAnswer": "Rapid Ventricular Response",
      "explanation": "This ECG shows atrial fibrillation with rapid ventricular response (RVR). The irregularly irregular pattern confirms AF, but the ventricular rate >100 BPM indicates inadequate rate control, requiring intervention to slow AV conduction.",
      "category": "atrial_fibrillation",
      "difficulty": "medium",
      "tags": ["rvr", "140bpm", "rate_control_needed", "irregular"],
      "medicalContext": {
        "mechanism": "Atrial fibrillation with excessive conduction through AV node",
        "clinical_significance": "Poor rate control increases symptoms and reduces cardiac efficiency",
        "management": "Rate control with beta-blockers, calcium channel blockers, or digoxin"
      }
    },
    {
      "id": "quiz_025",
      "question": "What is the most concerning feature of this ventricular tachycardia?",
      "imageUrl": "/ecg/medical_accurate/vtach_210bpm.png",
      "options": [
        "Wide QRS Complexes",
        "Extremely High Rate (210 BPM)",
        "Regular Rhythm", 
        "Monomorphic Pattern"
      ],
      "correctAnswer": "Extremely High Rate (210 BPM)",
      "explanation": "This ECG shows ventricular tachycardia, which is extremely fast and life-threatening. At this rate, there is minimal diastolic filling time, leading to severely compromised cardiac output and high risk of cardiovascular collapse or degeneration to ventricular fibrillation.",
      "category": "ventricular_tachycardia", 
      "difficulty": "hard",
      "tags": ["210bpm", "life_threatening", "collapse_risk", "emergency"],
      "medicalContext": {
        "mechanism": "Very rapid ventricular ectopic focus overwhelming normal conduction",
        "clinical_significance": "Immediately life-threatening, high risk of cardiac arrest",
        "management": "Immediate defibrillation/cardioversion, advanced cardiac life support"
      }
    },
    {
      "id": "quiz_026",
      "question": "Evaluate this ECG strip - what rhythm do you recognize?",
      "imageUrl": "/ecg/medical_accurate/pacs_irregular.png",
      "options": [
        "Normal Sinus Rhythm with PACs",
        "Atrial Fibrillation",
        "Multifocal Atrial Tachycardia",
        "Sinus Arrhythmia"
      ],
      "correctAnswer": "Normal Sinus Rhythm with PACs",
      "explanation": "This ECG shows normal sinus rhythm interrupted by premature atrial contractions (PACs). The PACs have different P wave morphology and come early in the cycle, followed by a compensatory pause.",
      "category": "other_arrhythmias",
      "difficulty": "medium",
      "tags": ["PACs", "premature", "atrial", "irregular"],
      "medicalContext": {
        "mechanism": "Ectopic atrial focus fires prematurely, resetting the sinus cycle",
        "clinical_significance": "Usually benign, may increase with caffeine, stress, or electrolyte imbalance",
        "management": "Usually no treatment needed, address underlying triggers"
      }
    },
    {
      "id": "quiz_027",
      "question": "Recognize the rhythm pattern in this ECG - what is your diagnosis?",
      "imageUrl": "/ecg/medical_accurate/junctional_escape.png",
      "options": [
        "Junctional Escape Rhythm",
        "Idioventricular Rhythm",
        "Sinus Bradycardia",
        "Third Degree AV Block"
      ],
      "correctAnswer": "Junctional Escape Rhythm",
      "explanation": "This ECG demonstrates a junctional escape rhythm. The QRS complexes are narrow and regular but there are no visible P waves, indicating the rhythm originates from the AV junction rather than the sinus node.",
      "category": "bradycardia",
      "difficulty": "medium",
      "tags": ["junctional", "escape", "narrow_QRS", "no_P_waves"],
      "medicalContext": {
        "mechanism": "AV junction acts as pacemaker when sinus node fails or is suppressed",
        "clinical_significance": "Backup rhythm, indicates sinus node dysfunction or high vagal tone",
        "management": "Investigate cause, may need permanent pacing if persistent"
      }
    },
    {
      "id": "quiz_028", 
      "question": "Diagnose the rhythm abnormality shown in this ECG trace:",
      "imageUrl": "/ecg/medical_accurate/complete_heart_block.png",
      "options": [
        "First Degree AV Block",
        "Second Degree AV Block Type I",
        "Second Degree AV Block Type II", 
        "Complete (Third Degree) AV Block"
      ],
      "correctAnswer": "Complete (Third Degree) AV Block",
      "explanation": "This ECG shows complete AV dissociation with P waves and QRS complexes occurring independently. The atrial rate is faster than the ventricular rate, and there is no relationship between P waves and QRS complexes.",
      "category": "av_blocks",
      "difficulty": "hard",
      "tags": ["complete_block", "AV_dissociation", "independent", "emergency"],
      "medicalContext": {
        "mechanism": "Complete interruption of conduction between atria and ventricles",
        "clinical_significance": "High risk of cardiac arrest, syncope, and sudden death",
        "management": "Immediate temporary pacing, urgent permanent pacemaker implantation"
      }
    },
    {
      "id": "quiz_029",
      "question": "Evaluate this ECG - what specific type of tachycardia is present?",
      "imageUrl": "/ecg/medical_accurate/svt_narrow_complex.png", 
      "options": [
        "Sinus Tachycardia",
        "Atrial Flutter",
        "Supraventricular Tachycardia (SVT)",
        "Ventricular Tachycardia"
      ],
      "correctAnswer": "Supraventricular Tachycardia (SVT)",
      "explanation": "This ECG shows a narrow-complex tachycardia with a very regular rhythm and rate around 180 BPM. The QRS complexes are narrow, indicating supraventricular origin, and P waves are not clearly visible, consistent with SVT.",
      "category": "tachycardia",
      "difficulty": "medium", 
      "tags": ["SVT", "narrow_complex", "180bpm", "regular"],
      "medicalContext": {
        "mechanism": "Re-entrant circuit involving AV node or accessory pathway",
        "clinical_significance": "May cause palpitations, chest pain, or hemodynamic compromise",
        "management": "Vagal maneuvers, adenosine, or synchronized cardioversion if unstable"
      }
    },
    {
      "id": "quiz_030",
      "question": "Identify the conduction abnormality in this 12-lead ECG:",
      "imageUrl": "/ecg/medical_accurate/rbbb_complete.png",
      "options": [
        "Left Bundle Branch Block",
        "Right Bundle Branch Block", 
        "Bifascicular Block",
        "Normal Conduction"
      ],
      "correctAnswer": "Right Bundle Branch Block",
      "explanation": "This ECG shows complete right bundle branch block (RBBB) with characteristic RSR' pattern in V1-V2, wide S waves in leads I and V6, and QRS duration >120ms. The right ventricle depolarizes late and separately.",
      "category": "bundle_branch_blocks",
      "difficulty": "medium",
      "tags": ["RBBB", "RSR_prime", "wide_QRS", "conduction_delay"],
      "medicalContext": {
        "mechanism": "Delayed conduction through right bundle branch system",
        "clinical_significance": "May be benign or indicate structural heart disease",
        "management": "Investigate underlying cause, monitor for progression to complete heart block"
      }
    },
    {
      "id": "quiz_031",
      "question": "What is the primary rhythm disturbance in this ECG recording?",
      "imageUrl": "/ecg/medical_accurate/torsades_de_pointes.png",
      "options": [
        "Ventricular Tachycardia",
        "Torsades de Pointes",
        "Atrial Fibrillation with RVR",
        "Polymorphic Ventricular Tachycardia"
      ],
      "correctAnswer": "Torsades de Pointes", 
      "explanation": "This ECG shows Torsades de Pointes, a specific type of polymorphic ventricular tachycardia with characteristic 'twisting' QRS morphology around the baseline. This is associated with prolonged QT interval.",
      "category": "ventricular_tachycardia",
      "difficulty": "hard",
      "tags": ["torsades", "polymorphic", "QT_prolongation", "emergency"],
      "medicalContext": {
        "mechanism": "Triggered activity from early afterdepolarizations in prolonged QT",
        "clinical_significance": "Life-threatening, can degenerate to ventricular fibrillation",
        "management": "IV magnesium, correct electrolytes, temporary pacing, avoid QT-prolonging drugs"
      }
    },
    {
      "id": "quiz_032",
      "question": "Recognize the arrhythmia pattern - what does this ECG demonstrate?",
      "imageUrl": "/ecg/medical_accurate/multifocal_atrial_tach.png",
      "options": [
        "Atrial Fibrillation",
        "Atrial Flutter", 
        "Multifocal Atrial Tachycardia",
        "Sinus Tachycardia with PACs"
      ],
      "correctAnswer": "Multifocal Atrial Tachycardia",
      "explanation": "This ECG shows multifocal atrial tachycardia (MAT) with at least three different P wave morphologies, irregular rhythm, and rapid rate. This is commonly seen in patients with severe COPD or heart failure.",
      "category": "tachycardia", 
      "difficulty": "hard",
      "tags": ["MAT", "multiple_P_waves", "COPD", "irregular"],
      "medicalContext": {
        "mechanism": "Multiple ectopic atrial foci firing at rapid rates",
        "clinical_significance": "Often indicates severe underlying pulmonary or cardiac disease",
        "management": "Treat underlying condition, rate control with calcium channel blockers"
      }
    },
    {
      "id": "quiz_033",
      "question": "Evaluate this rhythm strip - what conduction pattern do you observe?",
      "imageUrl": "/ecg/medical_accurate/second_degree_type1.png",
      "options": [
        "Normal Sinus Rhythm",
        "First Degree AV Block",
        "Second Degree AV Block Type I (Wenckebach)",
        "Second Degree AV Block Type II"
      ],
      "correctAnswer": "Second Degree AV Block Type I (Wenckebach)",
      "explanation": "This ECG shows second degree AV block Type I (Wenckebach) with progressive PR interval prolongation followed by a dropped QRS complex. This creates a group beating pattern with pause.",
      "category": "av_blocks",
      "difficulty": "medium",
      "tags": ["wenckebach", "progressive_PR", "group_beating", "dropped_QRS"],
      "medicalContext": {
        "mechanism": "Progressive fatigue of AV nodal conduction until conduction fails",
        "clinical_significance": "Usually benign, may be seen with increased vagal tone or medications",
        "management": "Monitor, usually no treatment needed unless symptomatic"
      }
    },
    {
      "id": "quiz_034", 
      "question": "Diagnose the rhythm - what abnormality is shown in this ECG?",
      "imageUrl": "/ecg/medical_accurate/ventricular_bigeminy.png",
      "options": [
        "Normal Sinus Rhythm",
        "Ventricular Bigeminy",
        "Atrial Bigeminy", 
        "Sinus Rhythm with PACs"
      ],
      "correctAnswer": "Ventricular Bigeminy",
      "explanation": "This ECG shows ventricular bigeminy with alternating normal sinus beats and premature ventricular contractions (PVCs). Every other beat is a wide, bizarre PVC followed by a compensatory pause.",
      "category": "other_arrhythmias",
      "difficulty": "medium",
      "tags": ["bigeminy", "PVCs", "wide_complex", "compensatory_pause"],
      "medicalContext": {
        "mechanism": "Ectopic ventricular focus fires after every normal sinus beat",
        "clinical_significance": "May indicate underlying heart disease or electrolyte imbalance", 
        "management": "Investigate triggers, antiarrhythmic therapy if symptomatic or frequent"
      }
    },
    {
      "id": "quiz_035",
      "question": "What is the most likely diagnosis for this wide-complex irregular rhythm?",
      "imageUrl": "/ecg/medical_accurate/afib_with_aberrancy.png",
      "options": [
        "Ventricular Tachycardia",
        "Atrial Fibrillation with Aberrant Conduction", 
        "Multifocal Ventricular Tachycardia",
        "Atrial Flutter with Variable Block"
      ],
      "correctAnswer": "Atrial Fibrillation with Aberrant Conduction",
      "explanation": "This ECG shows atrial fibrillation with some beats conducted with aberrancy (wide QRS). The irregularly irregular pattern is characteristic of AF, but some beats are wide due to rate-related bundle branch block.",
      "category": "atrial_fibrillation",
      "difficulty": "hard",
      "tags": ["AF_aberrancy", "wide_narrow_mix", "irregular", "rate_related"],
      "medicalContext": {
        "mechanism": "Atrial fibrillation with intermittent bundle branch block due to rapid rates",
        "clinical_significance": "Important to distinguish from ventricular arrhythmias",
        "management": "Rate control and anticoagulation as per standard AF protocols"
      }
    }
  ]
};

export default ecgQuizzes25;