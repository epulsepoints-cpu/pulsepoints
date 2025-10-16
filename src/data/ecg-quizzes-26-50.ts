// ECG Quiz Database - Batch 2 (Quizzes 26-50) - Auto-converted from JSON
const ecgQuizzes2650 = {
    "metadata":  {
                     "version":  "1.0",
                     "created_date":  "2025-10-14",
                     "description":  "ECG Master Quiz Database - Batch 2 (Quizzes 26-50)",
                     "total_quizzes":  25,
                     "batch_number":  2,
                     "categories":  [
                                        "normal_sinus",
                                        "bradycardia",
                                        "tachycardia",
                                        "atrial_fibrillation",
                                        "ventricular_tachycardia",
                                        "bundle_branch_blocks",
                                        "av_blocks",
                                        "other_arrhythmias"
                                    ],
                     "difficulty_levels":  [
                                               "easy",
                                               "medium",
                                               "hard"
                                           ]
                 },
    "quizzes":  [
                    {
                        "id":  "quiz_026",
                        "question":  "What is the rhythm classification in this ECG?",
                        "imageUrl":  "/ecg/medical_accurate/normal_75bpm.png",
                        "options":  [
                                        "Normal Sinus Rhythm",
                                        "Sinus Tachycardia",
                                        "Sinus Bradycardia",
                                        "Atrial Fibrillation"
                                    ],
                        "correctAnswer":  "Normal Sinus Rhythm",
                        "explanation":  "This ECG demonstrates normal sinus rhythm. P waves are upright in lead II, PR interval is normal, QRS complexes are narrow, and the rhythm is regular. The rhythm falls within the normal range.",
                        "category":  "normal_sinus",
                        "difficulty":  "easy",
                        "tags":  [
                                     "normal",
                                     "normal_rate",
                                     "sinus",
                                     "regular"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Normal sinus node function with regular electrical conduction through the heart",
                                               "clinical_significance":  "Normal cardiac rhythm indicating healthy heart function",
                                               "management":  "No intervention required, continue routine cardiac health maintenance"
                                           }
                    },
                    {
                        "id":  "quiz_027",
                        "question":  "What rhythm abnormality is shown in this ECG strip?",
                        "imageUrl":  "/ecg/medical_accurate/bradycardia_45bpm.png",
                        "options":  [
                                        "Mild Sinus Bradycardia",
                                        "Severe Sinus Bradycardia",
                                        "Junctional Bradycardia",
                                        "Complete Heart Block"
                                    ],
                        "correctAnswer":  "Severe Sinus Bradycardia",
                        "explanation":  "This ECG shows severe sinus bradycardia. P waves are present and normal, indicating sinus origin, but the rate is markedly slow . This requires immediate evaluation for hemodynamic compromise and underlying causes.",
                        "category":  "bradycardia",
                        "difficulty":  "medium",
                        "tags":  [
                                     "severe",
                                     "slow_rate",
                                     "sinus",
                                     "concerning"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Marked suppression of sinus node firing or severe conduction delay",
                                               "clinical_significance":  "Risk of syncope, hypotension, and inadequate cardiac output",
                                               "management":  "Immediate evaluation, atropine if symptomatic, consider temporary pacing"
                                           }
                    },
                    {
                        "id":  "quiz_028",
                        "question":  "What is the clinical significance of this tachycardia pattern?",
                        "imageUrl":  "/ecg/medical_accurate/tachycardia_125bpm.png",
                        "options":  [
                                        "Mild elevation requiring monitoring",
                                        "Moderate tachycardia requiring treatment",
                                        "Severe tachycardia requiring urgent intervention",
                                        "Normal response to exercise"
                                    ],
                        "correctAnswer":  "Severe tachycardia requiring urgent intervention",
                        "explanation":  "This ECG shows sinus tachycardia, which is severe (\u003e) and requires urgent evaluation and treatment. At this rate, diastolic filling time is significantly reduced, potentially compromising cardiac output and coronary perfusion.",
                        "category":  "tachycardia",
                        "difficulty":  "hard",
                        "tags":  [
                                     "severe",
                                     "fast_rate",
                                     "urgent",
                                     "intervention"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Excessive sinus node firing due to severe physiologic stress or pathology",
                                               "clinical_significance":  "Risk of hemodynamic instability, myocardial ischemia, heart failure",
                                               "management":  "Urgent evaluation for sepsis, hyperthyroidism, dehydration; consider beta-blockers"
                                           }
                    },
                    {
                        "id":  "quiz_029",
                        "question":  "What is the ventricular response characteristic in this atrial fibrillation?",
                        "imageUrl":  "/ecg/medical_accurate/atrial_fibrillation_110bpm_4.png",
                        "options":  [
                                        "Well-controlled ventricular response",
                                        "Moderately fast ventricular response",
                                        "Rapid ventricular response",
                                        "Slow ventricular response"
                                    ],
                        "correctAnswer":  "Moderately fast ventricular response",
                        "explanation":  "This ECG shows atrial fibrillation with irregularly irregular rhythm. This represents a moderately fast ventricular response (100- range). While not rapidly conducted, rate control optimization may still be beneficial for symptom management.",
                        "category":  "atrial_fibrillation",
                        "difficulty":  "medium",
                        "tags":  [
                                     "afib",
                                     "elevated_rate",
                                     "moderate",
                                     "rate_control"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Atrial fibrillation with moderate AV node conduction velocity",
                                               "clinical_significance":  "May cause symptoms like palpitations, reduced exercise tolerance",
                                               "management":  "Consider rate control optimization, stroke risk assessment with CHA2DS2-VASc"
                                           }
                    },
                    {
                        "id":  "quiz_030",
                        "question":  "What is the morphology pattern of this ventricular tachycardia?",
                        "imageUrl":  "/ecg/medical_accurate/vtach_180bpm.png",
                        "options":  [
                                        "Monomorphic Ventricular Tachycardia",
                                        "Polymorphic Ventricular Tachycardia",
                                        "Torsades de Pointes",
                                        "Ventricular Flutter"
                                    ],
                        "correctAnswer":  "Monomorphic Ventricular Tachycardia",
                        "explanation":  "This ECG demonstrates monomorphic ventricular tachycardia with consistent QRS morphology throughout. The wide QRS complexes have the same shape and amplitude, indicating a single ventricular focus driving the arrhythmia.",
                        "category":  "ventricular_tachycardia",
                        "difficulty":  "hard",
                        "tags":  [
                                     "monomorphic",
                                     "vtach",
                                     "fast_rate",
                                     "single_focus"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Single ectopic ventricular focus firing rapidly with consistent activation pattern",
                                               "clinical_significance":  "Hemodynamically significant, risk of degeneration to ventricular fibrillation",
                                               "management":  "Cardioversion if unstable, antiarrhythmic therapy, treat underlying causes"
                                           }
                    },
                    {
                        "id":  "quiz_031",
                        "question":  "What conduction abnormality is shown in this ECG?",
                        "imageUrl":  "/ecg/medical_accurate/rbbb_80bpm_2.png",
                        "options":  [
                                        "Normal conduction",
                                        "Left bundle branch block",
                                        "Right bundle branch block",
                                        "Bifascicular block"
                                    ],
                        "correctAnswer":  "Right bundle branch block",
                        "explanation":  "This ECG shows right bundle branch block with characteristic RSR\u0027 pattern in V1 and wide S waves in lateral leads, indicating delayed right ventricular activation.",
                        "category":  "bundle_branch_blocks",
                        "difficulty":  "medium",
                        "tags":  [
                                     "rbbb",
                                     "complete",
                                     "rsr_pattern",
                                     "conduction_delay"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Complete conduction block in right bundle branch requiring alternative activation pathway",
                                               "clinical_significance":  "May indicate right heart disease, pulmonary pathology, or congenital abnormalities",
                                               "management":  "Investigate underlying cause, echocardiogram, pulmonary function assessment"
                                           }
                    },
                    {
                        "id":  "quiz_032",
                        "question":  "What is the characteristic lateral lead pattern in this LBBB?",
                        "imageUrl":  "/ecg/medical_accurate/lbbb_75bpm_2.png",
                        "options":  [
                                        "Deep Q waves in I, aVL, V5-V6",
                                        "RSR\u0027 pattern in lateral leads",
                                        "Broad monophasic R waves without septal Q waves",
                                        "Normal R wave progression"
                                    ],
                        "correctAnswer":  "Broad monophasic R waves without septal Q waves",
                        "explanation":  "This ECG demonstrates left bundle branch block with characteristic broad, monophasic R waves in lateral leads (I, aVL, V5-V6) and absence of normal septal Q waves.",
                        "category":  "bundle_branch_blocks",
                        "difficulty":  "medium",
                        "tags":  [
                                     "lbbb",
                                     "monophasic",
                                     "no_septal_q",
                                     "lateral"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Left bundle branch blockade causing delayed left ventricular activation",
                                               "clinical_significance":  "Often indicates structural heart disease, coronary artery disease, or cardiomyopathy",
                                               "management":  "Comprehensive cardiac evaluation, stress testing, consider cardiac resynchronization therapy"
                                           }
                    },
                    {
                        "id":  "quiz_033",
                        "question":  "What AV conduction abnormality is demonstrated in this ECG?",
                        "imageUrl":  "/ecg/medical_accurate/first_degree_av_block_60bpm_1.png",
                        "options":  [
                                        "Normal AV conduction",
                                        "First degree AV block",
                                        "Second degree AV block",
                                        "Third degree AV block"
                                    ],
                        "correctAnswer":  "First degree AV block",
                        "explanation":  "This ECG shows first degree AV block with prolonged PR interval. Every P wave is conducted but with consistent delay. This represents the mildest form of AV conduction delay.",
                        "category":  "av_blocks",
                        "difficulty":  "easy",
                        "tags":  [
                                     "first_degree",
                                     "prolonged_pr",
                                     "mild",
                                     "conducted"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Mild delay in AV node conduction, often due to medications or autonomic influences",
                                               "clinical_significance":  "Generally benign, monitor for progression to higher degree blocks",
                                               "management":  "Review AV-blocking medications, monitor symptoms, routine follow-up"
                                           }
                    },
                    {
                        "id":  "quiz_034",
                        "question":  "What is the coupling interval characteristic of these PVCs?",
                        "imageUrl":  "/ecg/medical_accurate/pvc_70bpm_1.png",
                        "options":  [
                                        "Fixed coupling (same interval)",
                                        "Variable coupling (different intervals)",
                                        "Late-coupled PVCs",
                                        "R-on-T phenomenon"
                                    ],
                        "correctAnswer":  "Fixed coupling (same interval)",
                        "explanation":  "This ECG shows PVCs with fixed coupling intervals, meaning the distance from the preceding normal QRS to the PVC is consistent. This suggests a reentrant mechanism rather than enhanced automaticity. Underlying sinus rate is .",
                        "category":  "other_arrhythmias",
                        "difficulty":  "medium",
                        "tags":  [
                                     "pvc",
                                     "fixed_coupling",
                                     "reentrant",
                                     "consistent"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Reentrant circuit creating PVCs with consistent timing relative to sinus beats",
                                               "clinical_significance":  "Fixed coupling may indicate increased risk of sustained arrhythmias",
                                               "management":  "Evaluate for structural heart disease, consider antiarrhythmic therapy if frequent"
                                           }
                    },
                    {
                        "id":  "quiz_035",
                        "question":  "What is the flutter wave to QRS conduction ratio in this atrial flutter?",
                        "imageUrl":  "/ecg/medical_accurate/atrial_flutter_75bpm_1.png",
                        "options":  [
                                        "2:1 conduction",
                                        "3:1 conduction",
                                        "4:1 conduction",
                                        "Variable conduction"
                                    ],
                        "correctAnswer":  "4:1 conduction",
                        "explanation":  "This ECG shows atrial flutter with 4:1 AV conduction. Flutter waves occur at ~ with ventricular response of  (300Ã·4=75). The sawtooth flutter waves are visible between QRS complexes, particularly in inferior leads.",
                        "category":  "other_arrhythmias",
                        "difficulty":  "medium",
                        "tags":  [
                                     "flutter",
                                     "4to1",
                                     "atrial_rate",
                                     "controlled"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Atrial flutter circuit with 4:1 AV node conduction creating controlled ventricular response",
                                               "clinical_significance":  "Well-controlled rate, but stroke risk similar to atrial fibrillation",
                                               "management":  "Anticoagulation assessment, consider rhythm control vs rate control strategy"
                                           }
                    },
                    {
                        "id":  "quiz_036",
                        "question":  "What is the QRS morphology in this supraventricular tachycardia?",
                        "imageUrl":  "/ecg/medical_accurate/supraventricular_tachycardia_180bpm_2.png",
                        "options":  [
                                        "Wide QRS complexes",
                                        "Narrow QRS complexes",
                                        "Variable QRS width",
                                        "Indeterminate QRS width"
                                    ],
                        "correctAnswer":  "Narrow QRS complexes",
                        "explanation":  "This ECG shows supraventricular tachycardia with narrow QRS complexes, confirming supraventricular origin. The narrow QRS indicates conduction through the normal His-Purkinje system.",
                        "category":  "other_arrhythmias",
                        "difficulty":  "medium",
                        "tags":  [
                                     "svt",
                                     "narrow_qrs",
                                     "rapid_rate",
                                     "supraventricular"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Reentrant circuit above the ventricles using normal conduction system",
                                               "clinical_significance":  "Hemodynamically significant rate, may cause symptoms or compromise",
                                               "management":  "Vagal maneuvers, adenosine, calcium channel blockers, cardioversion if unstable"
                                           }
                    },
                    {
                        "id":  "quiz_037",
                        "question":  "What is the rate classification for this normal sinus rhythm?",
                        "imageUrl":  "/ecg/medical_accurate/normal_90bpm.png",
                        "options":  [
                                        "Upper limit of normal sinus rhythm",
                                        "Mild sinus tachycardia",
                                        "Normal heart rate, mid-range",
                                        "Approaching bradycardia"
                                    ],
                        "correctAnswer":  "Upper limit of normal sinus rhythm",
                        "explanation":  "This ECG shows normal sinus rhythm at exactly , which is the upper limit of normal (normal range: 60-). P waves are normal, PR interval is appropriate, and QRS complexes are narrow and regular.",
                        "category":  "normal_sinus",
                        "difficulty":  "easy",
                        "tags":  [
                                     "upper_normal",
                                     "upper_limit",
                                     "normal",
                                     "borderline"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Sinus node firing at upper limit of normal physiologic range",
                                               "clinical_significance":  "Normal variant, may increase with minimal stress or anxiety",
                                               "management":  "No intervention required, monitor if persistent elevation occurs"
                                           }
                    },
                    {
                        "id":  "quiz_038",
                        "question":  "What is the severity classification of this bradycardia?",
                        "imageUrl":  "/ecg/medical_accurate/bradycardia_50bpm.png",
                        "options":  [
                                        "Mild bradycardia (50-)",
                                        "Moderate bradycardia (40-)",
                                        "Severe bradycardia (\u003c)",
                                        "Normal heart rate"
                                    ],
                        "correctAnswer":  "Moderate bradycardia (40-)",
                        "explanation":  "This ECG shows sinus bradycardia with P waves present and normal, indicating sinus origin. This degree of bradycardia requires evaluation for symptoms and underlying causes.",
                        "category":  "bradycardia",
                        "difficulty":  "easy",
                        "tags":  [
                                     "bradycardic",
                                     "moderate",
                                     "sinus",
                                     "evaluation_needed"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Moderate suppression of sinus node automaticity or conduction",
                                               "clinical_significance":  "May cause fatigue, dizziness, or exercise intolerance",
                                               "management":  "Assess symptoms, review medications, consider pacing if symptomatic"
                                           }
                    },
                    {
                        "id":  "quiz_039",
                        "question":  "What is the hemodynamic significance of this tachycardia rate?",
                        "imageUrl":  "/ecg/medical_accurate/tachycardia_130bpm.png",
                        "options":  [
                                        "Minimal hemodynamic impact",
                                        "Moderate impact on cardiac output",
                                        "Significant reduction in filling time",
                                        "Immediately life-threatening"
                                    ],
                        "correctAnswer":  "Moderate impact on cardiac output",
                        "explanation":  "This ECG shows sinus tachycardia, which has moderate hemodynamic impact. While not immediately dangerous, this rate begins to compromise diastolic filling time and may reduce cardiac efficiency, especially in patients with underlying heart disease.",
                        "category":  "tachycardia",
                        "difficulty":  "medium",
                        "tags":  [
                                     "130bpm",
                                     "moderate_impact",
                                     "filling_time",
                                     "efficiency"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Elevated sinus rate causing moderate reduction in diastolic filling period",
                                               "clinical_significance":  "May cause palpitations, reduced exercise capacity, especially in heart disease",
                                               "management":  "Evaluate underlying cause, consider rate control if symptomatic or persistent"
                                           }
                    },
                    {
                        "id":  "quiz_040",
                        "question":  "What is the stroke risk implication of this atrial fibrillation rate?",
                        "imageUrl":  "/ecg/medical_accurate/atrial_fibrillation_95bpm_3.png",
                        "options":  [
                                        "Rate affects stroke risk significantly",
                                        "Rate does not influence stroke risk",
                                        "Only fast rates increase stroke risk",
                                        "Stroke risk is eliminated at this rate"
                                    ],
                        "correctAnswer":  "Rate does not influence stroke risk",
                        "explanation":  "This ECG shows atrial fibrillation with controlled ventricular response. The stroke risk in atrial fibrillation is primarily determined by clinical risk factors (CHA2DS2-VASc score), not the ventricular rate. Anticoagulation decisions are independent of rate control.",
                        "category":  "atrial_fibrillation",
                        "difficulty":  "medium",
                        "tags":  [
                                     "afib",
                                     "95bpm",
                                     "stroke_risk",
                                     "cha2ds2vasc"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Atrial fibrillation with well-controlled ventricular response via AV node",
                                               "clinical_significance":  "Stroke risk depends on clinical factors, not heart rate",
                                               "management":  "CHA2DS2-VASc assessment for anticoagulation, continue rate control"
                                           }
                    },
                    {
                        "id":  "quiz_041",
                        "question":  "What is the prognosis implication of this ventricular tachycardia morphology?",
                        "imageUrl":  "/ecg/medical_accurate/ventricular_tachycardia_195bpm_4.png",
                        "options":  [
                                        "Excellent prognosis with medication",
                                        "Good prognosis with ablation",
                                        "Guarded prognosis requiring ICD",
                                        "Poor prognosis, terminal arrhythmia"
                                    ],
                        "correctAnswer":  "Guarded prognosis requiring ICD",
                        "explanation":  "This ECG shows sustained monomorphic ventricular tachycardia, which indicates significant underlying heart disease and high risk of sudden cardiac death. This typically requires ICD implantation for secondary prevention after initial treatment and stabilization.",
                        "category":  "ventricular_tachycardia",
                        "difficulty":  "hard",
                        "tags":  [
                                     "vtach",
                                     "195bpm",
                                     "icd_indication",
                                     "high_risk"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Sustained ventricular tachycardia indicating significant myocardial substrate for arrhythmias",
                                               "clinical_significance":  "High risk of recurrent VT and sudden cardiac death",
                                               "management":  "ICD implantation, antiarrhythmic therapy, treatment of underlying heart disease"
                                           }
                    },
                    {
                        "id":  "quiz_042",
                        "question":  "What is the clinical significance of this RBBB pattern at this age?",
                        "imageUrl":  "/ecg/medical_accurate/rbbb_75bpm.png",
                        "options":  [
                                        "Always pathological requiring investigation",
                                        "May be congenital or acquired",
                                        "Indicates acute myocardial infarction",
                                        "Normal variant in all ages"
                                    ],
                        "correctAnswer":  "May be congenital or acquired",
                        "explanation":  "This ECG shows right bundle branch block. RBBB can be congenital (present from birth) or acquired due to various conditions including right heart strain, pulmonary disease, or coronary artery disease. Age and clinical context determine significance.",
                        "category":  "bundle_branch_blocks",
                        "difficulty":  "medium",
                        "tags":  [
                                     "rbbb",
                                     "congenital",
                                     "acquired",
                                     "context_dependent"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Congenital abnormality or acquired damage to right bundle branch",
                                               "clinical_significance":  "Significance depends on age of onset and associated symptoms",
                                               "management":  "Evaluate for underlying heart disease, pulmonary pathology, or congenital conditions"
                                           }
                    },
                    {
                        "id":  "quiz_043",
                        "question":  "What is the cardiac resynchronization therapy relevance of this LBBB?",
                        "imageUrl":  "/ecg/medical_accurate/lbbb_65bpm_1.png",
                        "options":  [
                                        "Not a CRT candidate",
                                        "Possible CRT candidate if heart failure present",
                                        "Definite CRT indication",
                                        "CRT contraindicated"
                                    ],
                        "correctAnswer":  "Possible CRT candidate if heart failure present",
                        "explanation":  "This ECG shows LBBB with QRS \u003e120ms. LBBB creates dyssynchronous ventricular contraction. If associated with heart failure and reduced ejection fraction, this patient may benefit from cardiac resynchronization therapy (CRT).",
                        "category":  "bundle_branch_blocks",
                        "difficulty":  "hard",
                        "tags":  [
                                     "lbbb",
                                     "crt",
                                     "dyssynchrony",
                                     "heart_failure"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Left bundle branch block causing ventricular dyssynchrony",
                                               "clinical_significance":  "May benefit from CRT if heart failure with reduced EF present",
                                               "management":  "Echocardiogram to assess EF, consider CRT evaluation if HF symptoms present"
                                           }
                    },
                    {
                        "id":  "quiz_044",
                        "question":  "What is the pacemaker indication for this degree of AV block?",
                        "imageUrl":  "/ecg/medical_accurate/first_degree_av_block_80bpm_3.png",
                        "options":  [
                                        "Immediate pacemaker required",
                                        "Pacemaker if symptomatic",
                                        "No pacemaker indication",
                                        "Temporary pacing needed"
                                    ],
                        "correctAnswer":  "No pacemaker indication",
                        "explanation":  "This ECG shows first degree AV block (PR \u003e200ms). First degree AV block alone is not an indication for pacemaker therapy, even if markedly prolonged, unless associated with symptoms or progression to higher-degree blocks.",
                        "category":  "av_blocks",
                        "difficulty":  "medium",
                        "tags":  [
                                     "first_degree",
                                     "no_pacing",
                                     "asymptomatic",
                                     "monitoring"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Isolated delay in AV conduction without dropped beats",
                                               "clinical_significance":  "Generally benign, monitor for progression to higher degrees",
                                               "management":  "Clinical monitoring, no pacing indication unless symptoms develop"
                                           }
                    },
                    {
                        "id":  "quiz_045",
                        "question":  "What is the frequency significance of these PVCs per minute?",
                        "imageUrl":  "/ecg/medical_accurate/pvc_95bpm.png",
                        "options":  [
                                        "Rare PVCs (\u003c1% burden)",
                                        "Occasional PVCs (1-10% burden)",
                                        "Frequent PVCs (10-20% burden)",
                                        "Very frequent PVCs (\u003e20% burden)"
                                    ],
                        "correctAnswer":  "Occasional PVCs (1-10% burden)",
                        "explanation":  "This ECG shows PVCs occurring occasionally in the context of sinus rhythm. The frequency appears to be in the 1-10% range (occasional), which is generally benign unless associated with symptoms or underlying heart disease.",
                        "category":  "other_arrhythmias",
                        "difficulty":  "medium",
                        "tags":  [
                                     "pvc",
                                     "occasional",
                                     "low_burden",
                                     "benign"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Infrequent ventricular ectopy with low overall burden",
                                               "clinical_significance":  "Generally benign if structurally normal heart",
                                               "management":  "Reassurance, lifestyle modification, echo if frequent or symptomatic"
                                           }
                    },
                    {
                        "id":  "quiz_046",
                        "question":  "What is the cardioversion success rate for this atrial flutter pattern?",
                        "imageUrl":  "/ecg/medical_accurate/atrial_flutter_150bpm_3.png",
                        "options":  [
                                        "Low success rate (\u003c50%)",
                                        "Moderate success rate (50-80%)",
                                        "High success rate (\u003e90%)",
                                        "Variable success rate"
                                    ],
                        "correctAnswer":  "High success rate (\u003e90%)",
                        "explanation":  "This ECG shows typical atrial flutter with 2:1 conduction (atrial rate ~300, ventricular rate ). Typical atrial flutter has a very high cardioversion success rate (\u003e90%) due to its organized, predictable circuit that responds well to electrical or pharmacological cardioversion.",
                        "category":  "other_arrhythmias",
                        "difficulty":  "hard",
                        "tags":  [
                                     "flutter",
                                     "cardioversion",
                                     "high_success",
                                     "organized"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Organized macro-reentrant atrial circuit amenable to cardioversion",
                                               "clinical_significance":  "Excellent response to cardioversion due to organized circuit",
                                               "management":  "Consider cardioversion if symptomatic, anticoagulation if \u003e48 hours duration"
                                           }
                    },
                    {
                        "id":  "quiz_047",
                        "question":  "What is the termination strategy for this supraventricular tachycardia?",
                        "imageUrl":  "/ecg/medical_accurate/supraventricular_tachycardia_200bpm_3.png",
                        "options":  [
                                        "Observation only",
                                        "Vagal maneuvers first, then adenosine",
                                        "Immediate cardioversion",
                                        "Beta-blockers only"
                                    ],
                        "correctAnswer":  "Immediate cardioversion",
                        "explanation":  "This ECG shows SVT, which is extremely fast and likely causing hemodynamic compromise. At this rate, immediate synchronized cardioversion is indicated rather than attempting vagal maneuvers or medications, which may delay definitive treatment.",
                        "category":  "other_arrhythmias",
                        "difficulty":  "hard",
                        "tags":  [
                                     "svt",
                                     "200bpm",
                                     "cardioversion",
                                     "hemodynamic"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Extremely rapid SVT causing hemodynamic instability",
                                               "clinical_significance":  "High risk of cardiovascular collapse due to excessive heart rate",
                                               "management":  "Immediate synchronized cardioversion, advanced cardiac life support protocols"
                                           }
                    },
                    {
                        "id":  "quiz_048",
                        "question":  "What is the exercise tolerance implication of this normal sinus rhythm?",
                        "imageUrl":  "/ecg/medical_accurate/normal_80bpm.png",
                        "options":  [
                                        "Excellent exercise capacity expected",
                                        "Moderate exercise limitation",
                                        "Severe exercise intolerance",
                                        "Exercise capacity unpredictable"
                                    ],
                        "correctAnswer":  "Excellent exercise capacity expected",
                        "explanation":  "This ECG shows normal sinus rhythm with normal intervals and morphology. In the absence of other cardiac abnormalities, this rhythm pattern predicts excellent exercise capacity with appropriate heart rate response to physical activity.",
                        "category":  "normal_sinus",
                        "difficulty":  "easy",
                        "tags":  [
                                     "80bpm",
                                     "exercise",
                                     "normal",
                                     "capacity"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Normal sinus node function with intact autonomic response capability",
                                               "clinical_significance":  "Predicts normal chronotropic response and exercise tolerance",
                                               "management":  "No restrictions, encourage regular physical activity"
                                           }
                    },
                    {
                        "id":  "quiz_049",
                        "question":  "What is the monitoring requirement for this bradycardia?",
                        "imageUrl":  "/ecg/medical_accurate/bradycardia_55bpm_5.png",
                        "options":  [
                                        "No monitoring required",
                                        "Routine outpatient monitoring",
                                        "Continuous inpatient monitoring",
                                        "Immediate ICU monitoring"
                                    ],
                        "correctAnswer":  "Routine outpatient monitoring",
                        "explanation":  "This ECG shows sinus bradycardia, which is mild bradycardia. In asymptomatic patients, this typically requires only routine outpatient monitoring to ensure stability and watch for progression or development of symptoms.",
                        "category":  "bradycardia",
                        "difficulty":  "easy",
                        "tags":  [
                                     "55bpm",
                                     "mild",
                                     "outpatient",
                                     "routine"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Mild sinus bradycardia, possibly physiologic or medication-related",
                                               "clinical_significance":  "Generally well-tolerated, low risk of acute complications",
                                               "management":  "Routine follow-up, symptom assessment, medication review"
                                           }
                    },
                    {
                        "id":  "quiz_050",
                        "question":  "What is the urgency classification for this tachycardia evaluation?",
                        "imageUrl":  "/ecg/medical_accurate/tachycardia_115bpm_2.png",
                        "options":  [
                                        "Emergent evaluation required",
                                        "Urgent evaluation within hours",
                                        "Routine evaluation within days",
                                        "No evaluation needed"
                                    ],
                        "correctAnswer":  "Routine evaluation within days",
                        "explanation":  "This ECG shows sinus tachycardia, which is mild tachycardia. In stable patients, this typically warrants routine evaluation within days to identify and treat underlying causes such as fever, dehydration, or anxiety.",
                        "category":  "tachycardia",
                        "difficulty":  "medium",
                        "tags":  [
                                     "115bpm",
                                     "mild",
                                     "routine",
                                     "stable"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Mild elevation in sinus rate due to physiologic or pathologic stimulus",
                                               "clinical_significance":  "Usually well-tolerated, may indicate treatable underlying condition",
                                               "management":  "Evaluate for fever, dehydration, medications, thyroid function, anxiety"
                                           }
                    }
                ]
};

export default ecgQuizzes2650;
