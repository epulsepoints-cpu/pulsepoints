// ECG Quiz Database - MI Focused (50 Questions) - Auto-converted from JSON
const ecgQuizzesMI50 = {
    "metadata":  {
                     "version":  "2.1",
                     "created_date":  "2025-10-17",
                     "description":  "ECG MI Quiz Database - 59 Focused MI Pattern Recognition Questions",
                     "total_quizzes":  59,
                     "categories":  [
                                        "anterior_mi",
                                        "inferior_mi",
                                        "lateral_mi",
                                        "posterior_mi",
                                        "anterolateral_mi",
                                        "post_mi_evolved"
                                    ],
                     "difficulty_levels":  [
                                               "easy",
                                               "medium",
                                               "hard"
                                           ],
                     "focus":  "Myocardial Infarction ECG Patterns"
                 },
    "quizzes":  [
                    {
                        "id":  "quiz_mi_001",
                        "question":  "What type of myocardial infarction is shown in this ECG?",
                        "imageUrl":  "/ecg/MI_ecg_database/Anterior_wall_MI/AMI.jpg",
                        "options":  [
                                        "Anterior Wall MI",
                                        "Inferior Wall MI",
                                        "Lateral Wall MI",
                                        "Posterior Wall MI"
                                    ],
                        "correctAnswer":  "Anterior Wall MI",
                        "explanation":  "This ECG shows classic anterior wall MI with ST elevation in leads V1-V6, indicating occlusion of the left anterior descending (LAD) artery. The anterior wall of the left ventricle is affected.",
                        "category":  "anterior_mi",
                        "difficulty":  "medium",
                        "tags":  [
                                     "anterior",
                                     "mi",
                                     "stemi",
                                     "lad"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "LAD artery occlusion causing anterior wall ischemia",
                                               "clinical_significance":  "Large territory infarction requiring urgent reperfusion",
                                               "management":  "Primary PCI within 90 minutes, dual antiplatelet therapy"
                                           }
                    },
                    {
                        "id":  "quiz_mi_002",
                        "question":  "Which leads typically show ST elevation in anterior MI?",
                        "imageUrl":  "/ecg/MI_ecg_database/Anterior_wall_MI/AMI3.jpg",
                        "options":  [
                                        "II, III, aVF",
                                        "V1, V2, V3, V4",
                                        "I, aVL, V5, V6",
                                        "V7, V8, V9"
                                    ],
                        "correctAnswer":  "V1, V2, V3, V4",
                        "explanation":  "Anterior MI shows ST elevation in the anterior precordial leads V1-V4, with extensive anterior MI extending to V5-V6. This pattern indicates LAD occlusion affecting the anterior wall.",
                        "category":  "anterior_mi",
                        "difficulty":  "easy",
                        "tags":  [
                                     "anterior",
                                     "leads",
                                     "st_elevation"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Anterior leads reflect electrical activity of anterior LV wall",
                                               "clinical_significance":  "Critical area supplied by LAD - widow maker artery",
                                               "management":  "Emergent cardiac catheterization indicated"
                                           }
                    },
                    {
                        "id":  "quiz_mi_003",
                        "question":  "What is the most likely culprit vessel in this MI pattern?",
                        "imageUrl":  "/ecg/MI_ecg_database/Anterior_wall_MI/AMI5.jpg",
                        "options":  [
                                        "Right Coronary Artery (RCA)",
                                        "Left Anterior Descending (LAD)",
                                        "Left Circumflex (LCX)",
                                        "Posterior Descending Artery (PDA)"
                                    ],
                        "correctAnswer":  "Left Anterior Descending (LAD)",
                        "explanation":  "The ST elevation pattern in anterior leads (V1-V4) is classic for LAD occlusion. The LAD supplies the anterior wall of the left ventricle and anterior portion of the interventricular septum.",
                        "category":  "anterior_mi",
                        "difficulty":  "medium",
                        "tags":  [
                                     "lad",
                                     "culprit_vessel",
                                     "anatomy"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "LAD occlusion typically at proximal or mid vessel",
                                               "clinical_significance":  "LAD known as \u0027widow maker\u0027 due to large territory",
                                               "management":  "Primary PCI to LAD with stent placement"
                                           }
                    },
                    {
                        "id":  "quiz_mi_004",
                        "question":  "What reciprocal changes would you expect to see with this anterior MI?",
                        "imageUrl":  "/ecg/MI_ecg_database/Anterior_wall_MI/AMI6.jpg",
                        "options":  [
                                        "ST depression in II, III, aVF",
                                        "ST elevation in II, III, aVF",
                                        "T wave inversion in V1-V4",
                                        "No reciprocal changes"
                                    ],
                        "correctAnswer":  "ST depression in II, III, aVF",
                        "explanation":  "Anterior MI typically shows reciprocal ST depression in the inferior leads (II, III, aVF). This represents the electrical \u0027mirror image\u0027 of the ST elevation occurring in the anterior territory.",
                        "category":  "anterior_mi",
                        "difficulty":  "medium",
                        "tags":  [
                                     "reciprocal_changes",
                                     "st_depression",
                                     "inferior_leads"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Reciprocal changes represent distant electrical effects",
                                               "clinical_significance":  "Confirms transmural MI and helps localize infarct",
                                               "management":  "Look for reciprocal changes to confirm STEMI diagnosis"
                                           }
                    },
                    {
                        "id":  "quiz_mi_005",
                        "question":  "In this anterior MI, what evolutionary change occurs first?",
                        "imageUrl":  "/ecg/MI_ecg_database/Anterior_wall_MI/AMI8.jpg",
                        "options":  [
                                        "Q wave formation",
                                        "ST elevation",
                                        "T wave inversion",
                                        "Loss of R waves"
                                    ],
                        "correctAnswer":  "ST elevation",
                        "explanation":  "ST elevation is the first change in acute MI (hyperacute phase), followed by T wave inversion (hours to days), and finally Q wave formation (hours to days). Loss of R waves occurs with Q wave development.",
                        "category":  "anterior_mi",
                        "difficulty":  "hard",
                        "tags":  [
                                     "evolution",
                                     "acute_phase",
                                     "hyperacute"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "ST elevation represents acute transmural ischemia",
                                               "clinical_significance":  "ST elevation indicates need for immediate reperfusion",
                                               "management":  "Door-to-balloon time critical within 90 minutes"
                                           }
                    },
                    {
                        "id":  "quiz_mi_006",
                        "question":  "What type of MI is demonstrated in this ECG?",
                        "imageUrl":  "/ecg/MI_ecg_database/Inferior_wall_MI/IMI.jpg",
                        "options":  [
                                        "Anterior MI",
                                        "Inferior MI",
                                        "Lateral MI",
                                        "Posterior MI"
                                    ],
                        "correctAnswer":  "Inferior MI",
                        "explanation":  "This ECG shows inferior MI with ST elevation in leads II, III, and aVF. This pattern indicates occlusion of the right coronary artery (RCA) or less commonly the left circumflex artery.",
                        "category":  "inferior_mi",
                        "difficulty":  "easy",
                        "tags":  [
                                     "inferior",
                                     "mi",
                                     "rca",
                                     "st_elevation"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "RCA occlusion causing inferior wall ischemia",
                                               "clinical_significance":  "May involve RV and conduction system",
                                               "management":  "Primary PCI, monitor for bradycardia and heart blocks"
                                           }
                    },
                    {
                        "id":  "quiz_mi_007",
                        "question":  "Which leads show ST elevation in inferior MI?",
                        "imageUrl":  "/ecg/MI_ecg_database/Inferior_wall_MI/IMI4.jpg",
                        "options":  [
                                        "V1, V2, V3",
                                        "I, aVL, V5, V6",
                                        "II, III, aVF",
                                        "V7, V8, V9"
                                    ],
                        "correctAnswer":  "II, III, aVF",
                        "explanation":  "Inferior MI shows ST elevation in the inferior leads II, III, and aVF. These leads look at the inferior (diaphragmatic) surface of the left ventricle.",
                        "category":  "inferior_mi",
                        "difficulty":  "easy",
                        "tags":  [
                                     "inferior_leads",
                                     "st_elevation",
                                     "diaphragmatic"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Inferior leads reflect electrical activity of inferior LV wall",
                                               "clinical_significance":  "RCA supplies inferior wall and often RV",
                                               "management":  "Assess for RV involvement with right-sided leads"
                                           }
                    },
                    {
                        "id":  "quiz_mi_008",
                        "question":  "What reciprocal changes are seen in inferior MI?",
                        "imageUrl":  "/ecg/MI_ecg_database/Inferior_wall_MI/imi (2).jpg",
                        "options":  [
                                        "ST depression in I, aVL",
                                        "ST elevation in V1-V4",
                                        "T wave inversion in II, III, aVF",
                                        "No reciprocal changes"
                                    ],
                        "correctAnswer":  "ST depression in I, aVL",
                        "explanation":  "Inferior MI typically shows reciprocal ST depression in the high lateral leads I and aVL. This helps confirm the diagnosis of transmural inferior MI.",
                        "category":  "inferior_mi",
                        "difficulty":  "medium",
                        "tags":  [
                                     "reciprocal",
                                     "st_depression",
                                     "lateral_leads"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Reciprocal changes in electrically opposite territory",
                                               "clinical_significance":  "Confirms transmural nature of infarction",
                                               "management":  "Reciprocal changes support STEMI diagnosis"
                                           }
                    },
                    {
                        "id":  "quiz_mi_009",
                        "question":  "What complication should you monitor for in inferior MI?",
                        "imageUrl":  "/ecg/MI_ecg_database/Inferior_wall_MI/imi (3).jpg",
                        "options":  [
                                        "Ventricular fibrillation",
                                        "AV blocks and bradycardia",
                                        "Atrial fibrillation",
                                        "Ventricular septal defect"
                                    ],
                        "correctAnswer":  "AV blocks and bradycardia",
                        "explanation":  "Inferior MI often involves the RCA which supplies the AV node in most patients. This can lead to AV blocks, bradycardia, and junctional rhythms requiring monitoring and possible pacing.",
                        "category":  "inferior_mi",
                        "difficulty":  "hard",
                        "tags":  [
                                     "complications",
                                     "av_block",
                                     "bradycardia",
                                     "rca"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "RCA supplies AV node in 85% of population",
                                               "clinical_significance":  "Conduction abnormalities common in inferior MI",
                                               "management":  "Temporary pacing may be needed, avoid beta-blockers initially"
                                           }
                    },
                    {
                        "id":  "quiz_mi_010",
                        "question":  "Which vessel is most likely occluded in this inferior MI?",
                        "imageUrl":  "/ecg/MI_ecg_database/Inferior_wall_MI/imi (4).jpg",
                        "options":  [
                                        "Left Anterior Descending (LAD)",
                                        "Right Coronary Artery (RCA)",
                                        "Left Circumflex (LCX)",
                                        "Diagonal branch"
                                    ],
                        "correctAnswer":  "Right Coronary Artery (RCA)",
                        "explanation":  "The RCA is the most common culprit vessel in inferior MI (80-85% of cases). The RCA typically supplies the inferior wall, RV, and posterior wall in right-dominant systems.",
                        "category":  "inferior_mi",
                        "difficulty":  "medium",
                        "tags":  [
                                     "rca",
                                     "culprit_vessel",
                                     "dominance"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "RCA occlusion in right-dominant circulation",
                                               "clinical_significance":  "Right dominance in 85% of population",
                                               "management":  "Primary PCI to RCA, assess for RV involvement"
                                           }
                    },
                    {
                        "id":  "quiz_mi_011",
                        "question":  "What type of MI pattern is shown in this ECG?",
                        "imageUrl":  "/ecg/MI_ecg_database/Lateral_wall_MI/LMI.jpg",
                        "options":  [
                                        "Anterior MI",
                                        "Inferior MI",
                                        "Lateral MI",
                                        "Posterior MI"
                                    ],
                        "correctAnswer":  "Lateral MI",
                        "explanation":  "This ECG shows lateral MI with ST elevation in the lateral leads I, aVL, V5, and V6. This pattern suggests occlusion of the left circumflex artery or diagonal branches.",
                        "category":  "lateral_mi",
                        "difficulty":  "medium",
                        "tags":  [
                                     "lateral",
                                     "mi",
                                     "lcx",
                                     "diagonal"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "LCX or diagonal branch occlusion",
                                               "clinical_significance":  "May extend to posterior territory",
                                               "management":  "Primary PCI, obtain posterior leads if indicated"
                                           }
                    },
                    {
                        "id":  "quiz_mi_012",
                        "question":  "Which leads show ST elevation in lateral MI?",
                        "imageUrl":  "/ecg/MI_ecg_database/Lateral_wall_MI/lmi.png",
                        "options":  [
                                        "II, III, aVF",
                                        "V1, V2, V3, V4",
                                        "I, aVL, V5, V6",
                                        "All precordial leads"
                                    ],
                        "correctAnswer":  "I, aVL, V5, V6",
                        "explanation":  "Lateral MI shows ST elevation in the high lateral leads (I, aVL) and lateral precordial leads (V5, V6). These leads look at the lateral wall of the left ventricle.",
                        "category":  "lateral_mi",
                        "difficulty":  "easy",
                        "tags":  [
                                     "lateral_leads",
                                     "st_elevation",
                                     "high_lateral"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Lateral leads reflect lateral LV wall electrical activity",
                                               "clinical_significance":  "LCX territory often involved",
                                               "management":  "May require posterior lead assessment"
                                           }
                    },
                    {
                        "id":  "quiz_mi_013",
                        "question":  "What reciprocal changes are typical in lateral MI?",
                        "imageUrl":  "/ecg/MI_ecg_database/Lateral_wall_MI/lmi (2).jpg",
                        "options":  [
                                        "ST depression in II, III, aVF",
                                        "ST elevation in V1-V3",
                                        "T wave inversion in lateral leads",
                                        "No reciprocal changes expected"
                                    ],
                        "correctAnswer":  "ST depression in II, III, aVF",
                        "explanation":  "Lateral MI may show reciprocal ST depression in the inferior leads (II, III, aVF), representing the electrical opposite of the lateral territory ST elevation.",
                        "category":  "lateral_mi",
                        "difficulty":  "medium",
                        "tags":  [
                                     "reciprocal",
                                     "inferior_depression",
                                     "st_changes"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Reciprocal changes in electrically distant leads",
                                               "clinical_significance":  "Helps confirm transmural nature of MI",
                                               "management":  "Look for reciprocal changes to support diagnosis"
                                           }
                    },
                    {
                        "id":  "quiz_mi_014",
                        "question":  "Which vessel is most likely occluded in this lateral MI?",
                        "imageUrl":  "/ecg/MI_ecg_database/Lateral_wall_MI/lmi (3).jpg",
                        "options":  [
                                        "Right Coronary Artery",
                                        "Left Anterior Descending",
                                        "Left Circumflex Artery",
                                        "Posterior Descending Artery"
                                    ],
                        "correctAnswer":  "Left Circumflex Artery",
                        "explanation":  "Lateral MI is most commonly caused by occlusion of the left circumflex artery (LCX) or its marginal branches. The LCX supplies the lateral and often posterior walls of the left ventricle.",
                        "category":  "lateral_mi",
                        "difficulty":  "medium",
                        "tags":  [
                                     "lcx",
                                     "circumflex",
                                     "marginal_branches"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "LCX occlusion affecting lateral wall perfusion",
                                               "clinical_significance":  "May involve posterior wall in some patients",
                                               "management":  "Primary PCI to LCX system"
                                           }
                    },
                    {
                        "id":  "quiz_mi_015",
                        "question":  "What additional leads should be obtained in suspected posterior MI?",
                        "imageUrl":  "/ecg/MI_ecg_database/Posterior_wall_MI/PMI.jpg",
                        "options":  [
                                        "Right-sided leads (V3R-V6R)",
                                        "Posterior leads (V7-V9)",
                                        "High lateral leads",
                                        "Anterior leads only"
                                    ],
                        "correctAnswer":  "Posterior leads (V7-V9)",
                        "explanation":  "Posterior MI requires posterior leads (V7-V9) for diagnosis because standard 12-lead ECG has no posterior leads. V7-V9 are placed on the posterior chest wall.",
                        "category":  "posterior_mi",
                        "difficulty":  "hard",
                        "tags":  [
                                     "posterior_leads",
                                     "v7_v9",
                                     "diagnosis"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Standard ECG cannot directly visualize posterior wall",
                                               "clinical_significance":  "Posterior MI often missed without posterior leads",
                                               "management":  "Always obtain V7-V9 if posterior MI suspected"
                                           }
                    },
                    {
                        "id":  "quiz_mi_016",
                        "question":  "What are the typical reciprocal changes seen in posterior MI?",
                        "imageUrl":  "/ecg/MI_ecg_database/Posterior_wall_MI/PMI2.jpg",
                        "options":  [
                                        "ST elevation in V1-V3",
                                        "Tall R waves and ST depression in V1-V3",
                                        "Q waves in II, III, aVF",
                                        "T wave inversion in lateral leads"
                                    ],
                        "correctAnswer":  "Tall R waves and ST depression in V1-V3",
                        "explanation":  "Posterior MI shows reciprocal changes in anterior leads V1-V3: tall R waves (mirror image of posterior Q waves) and ST depression (reciprocal to posterior ST elevation).",
                        "category":  "posterior_mi",
                        "difficulty":  "hard",
                        "tags":  [
                                     "reciprocal",
                                     "tall_r_waves",
                                     "mirror_image"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Reciprocal changes represent mirror image of posterior events",
                                               "clinical_significance":  "Key diagnostic clue for posterior MI",
                                               "management":  "Tall R waves in V1-V2 should prompt posterior lead placement"
                                           }
                    },
                    {
                        "id":  "quiz_mi_017",
                        "question":  "Which vessel typically causes isolated posterior MI?",
                        "imageUrl":  "/ecg/MI_ecg_database/Posterior_wall_MI/pmi3.jpg",
                        "options":  [
                                        "Right Coronary Artery",
                                        "Left Anterior Descending",
                                        "Left Circumflex Artery",
                                        "Both RCA and LCX"
                                    ],
                        "correctAnswer":  "Both RCA and LCX",
                        "explanation":  "Posterior MI can result from occlusion of either the RCA (in right-dominant systems) or LCX (in left-dominant systems), as both can give rise to posterior descending and posterolateral branches.",
                        "category":  "posterior_mi",
                        "difficulty":  "hard",
                        "tags":  [
                                     "rca",
                                     "lcx",
                                     "dominance",
                                     "pda"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Posterior circulation varies with coronary dominance",
                                               "clinical_significance":  "Dominance determines culprit vessel",
                                               "management":  "Angiography determines specific vessel involvement"
                                           }
                    },
                    {
                        "id":  "quiz_mi_018",
                        "question":  "What makes posterior MI challenging to diagnose?",
                        "imageUrl":  "/ecg/MI_ecg_database/Posterior_wall_MI/PMI.jpg",
                        "options":  [
                                        "No symptoms present",
                                        "No direct posterior leads on standard ECG",
                                        "Always occurs with other MIs",
                                        "ECG changes resolve quickly"
                                    ],
                        "correctAnswer":  "No direct posterior leads on standard ECG",
                        "explanation":  "Posterior MI is challenging because the standard 12-lead ECG has no leads directly viewing the posterior wall. Diagnosis relies on reciprocal changes and requires additional posterior leads.",
                        "category":  "posterior_mi",
                        "difficulty":  "medium",
                        "tags":  [
                                     "diagnostic_challenge",
                                     "standard_ecg",
                                     "missed_diagnosis"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Standard lead placement doesn\u0027t include posterior chest",
                                               "clinical_significance":  "Frequently missed diagnosis",
                                               "management":  "High index of suspicion needed, obtain V7-V9"
                                           }
                    },
                    {
                        "id":  "quiz_mi_019",
                        "question":  "What type of extensive MI is shown in this ECG?",
                        "imageUrl":  "/ecg/MI_ecg_database/Anterolateral_MI/ANTEROLATERAL.jpg",
                        "options":  [
                                        "Anterior MI only",
                                        "Lateral MI only",
                                        "Anterolateral MI",
                                        "Inferior MI"
                                    ],
                        "correctAnswer":  "Anterolateral MI",
                        "explanation":  "This ECG shows anterolateral MI with ST elevation in both anterior leads (V1-V4) and lateral leads (I, aVL, V5-V6). This represents a large territory infarction.",
                        "category":  "anterolateral_mi",
                        "difficulty":  "medium",
                        "tags":  [
                                     "anterolateral",
                                     "extensive",
                                     "large_territory"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Proximal LAD occlusion affecting multiple territories",
                                               "clinical_significance":  "Large myocardial territory at risk",
                                               "management":  "High priority for emergent reperfusion"
                                           }
                    },
                    {
                        "id":  "quiz_mi_020",
                        "question":  "Which leads show ST elevation in anterolateral MI?",
                        "imageUrl":  "/ecg/MI_ecg_database/Anterolateral_MI/anerolateral.jpg",
                        "options":  [
                                        "V1-V4 only",
                                        "I, aVL, V5-V6 only",
                                        "V1-V6, I, aVL",
                                        "II, III, aVF"
                                    ],
                        "correctAnswer":  "V1-V6, I, aVL",
                        "explanation":  "Anterolateral MI shows extensive ST elevation involving both anterior precordial leads (V1-V6) and high lateral leads (I, aVL), representing a large territory infarction.",
                        "category":  "anterolateral_mi",
                        "difficulty":  "easy",
                        "tags":  [
                                     "extensive_elevation",
                                     "anterior_lateral",
                                     "wide_territory"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Large coronary territory involvement",
                                               "clinical_significance":  "High risk for cardiogenic shock",
                                               "management":  "Emergent primary PCI, hemodynamic monitoring"
                                           }
                    },
                    {
                        "id":  "quiz_mi_021",
                        "question":  "What is the most likely culprit vessel in anterolateral MI?",
                        "imageUrl":  "/ecg/MI_ecg_database/Anterolateral_MI/ANTEROLATERAL.jpg",
                        "options":  [
                                        "Right Coronary Artery",
                                        "Proximal Left Anterior Descending",
                                        "Left Circumflex",
                                        "Posterior Descending Artery"
                                    ],
                        "correctAnswer":  "Proximal Left Anterior Descending",
                        "explanation":  "Anterolateral MI typically results from proximal LAD occlusion, which affects both the anterior territory and diagonal branches supplying the lateral wall.",
                        "category":  "anterolateral_mi",
                        "difficulty":  "medium",
                        "tags":  [
                                     "proximal_lad",
                                     "diagonal_branches",
                                     "extensive"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Proximal LAD occlusion before diagonal takeoff",
                                               "clinical_significance":  "Widow maker occlusion with large territory",
                                               "management":  "Primary PCI to proximal LAD, high-risk case"
                                           }
                    },
                    {
                        "id":  "quiz_mi_022",
                        "question":  "What complications are most concerning in anterolateral MI?",
                        "imageUrl":  "/ecg/MI_ecg_database/Anterolateral_MI/anerolateral.jpg",
                        "options":  [
                                        "AV blocks",
                                        "Cardiogenic shock and heart failure",
                                        "Atrial fibrillation",
                                        "Pericarditis"
                                    ],
                        "correctAnswer":  "Cardiogenic shock and heart failure",
                        "explanation":  "Anterolateral MI involves a large territory of myocardium, making cardiogenic shock and acute heart failure the most concerning complications due to significant LV dysfunction.",
                        "category":  "anterolateral_mi",
                        "difficulty":  "hard",
                        "tags":  [
                                     "cardiogenic_shock",
                                     "heart_failure",
                                     "large_territory"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Extensive myocardial loss leading to pump failure",
                                               "clinical_significance":  "High mortality without aggressive intervention",
                                               "management":  "Consider mechanical circulatory support, urgent revascularization"
                                           }
                    },
                    {
                        "id":  "quiz_mi_023",
                        "question":  "What chronic ECG finding is shown in this post-MI ECG?",
                        "imageUrl":  "/ecg/MI_ecg_database/Post_MI_evolved_MI/Post_AWMI.jpg",
                        "options":  [
                                        "ST elevation",
                                        "Pathological Q waves",
                                        "T wave inversion only",
                                        "Normal ECG"
                                    ],
                        "correctAnswer":  "Pathological Q waves",
                        "explanation":  "This post-MI ECG shows pathological Q waves indicating areas of myocardial scar tissue. Q waves typically persist after MI, representing non-viable myocardium.",
                        "category":  "post_mi_evolved",
                        "difficulty":  "easy",
                        "tags":  [
                                     "q_waves",
                                     "scar",
                                     "chronic",
                                     "post_mi"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Scar tissue cannot conduct electrical impulses normally",
                                               "clinical_significance":  "Indicates prior MI and myocardial scar",
                                               "management":  "Long-term post-MI therapy, assess for residual ischemia"
                                           }
                    },
                    {
                        "id":  "quiz_mi_024",
                        "question":  "How long do pathological Q waves typically persist after MI?",
                        "imageUrl":  "/ecg/MI_ecg_database/Post_MI_evolved_MI/Post_IWMI.jpg",
                        "options":  [
                                        "Hours to days",
                                        "Weeks to months",
                                        "Years to permanent",
                                        "They resolve completely"
                                    ],
                        "correctAnswer":  "Years to permanent",
                        "explanation":  "Pathological Q waves typically persist for years and are often permanent, representing areas of myocardial scar tissue that cannot regenerate normal electrical conduction.",
                        "category":  "post_mi_evolved",
                        "difficulty":  "medium",
                        "tags":  [
                                     "persistence",
                                     "permanent",
                                     "scar_tissue"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Fibrous scar tissue replaces necrotic myocardium permanently",
                                               "clinical_significance":  "Marker of prior MI and ischemic cardiomyopathy",
                                               "management":  "Focus on secondary prevention and heart failure management"
                                           }
                    },
                    {
                        "id":  "quiz_mi_025",
                        "question":  "What criteria define pathological Q waves?",
                        "imageUrl":  "/ecg/MI_ecg_database/Post_MI_evolved_MI/Post_LWMI.jpg",
                        "options":  [
                                        "Any Q wave present",
                                        "Q wave \u003e0.04s width or \u003e25% R wave height",
                                        "Q wave in any lead",
                                        "Q wave with T wave inversion"
                                    ],
                        "correctAnswer":  "Q wave \u003e0.04s width or \u003e25% R wave height",
                        "explanation":  "Pathological Q waves are defined as \u003e0.04 seconds (1 mm) in width or \u003e25% of the height of the following R wave. Small septal Q waves in lateral leads are normal.",
                        "category":  "post_mi_evolved",
                        "difficulty":  "hard",
                        "tags":  [
                                     "criteria",
                                     "pathological",
                                     "width",
                                     "height"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Significant scar tissue disrupts normal electrical conduction",
                                               "clinical_significance":  "Distinguishes pathological from normal septal Q waves",
                                               "management":  "Used to identify prior MI in asymptomatic patients"
                                           }
                    },
                    {
                        "id":  "quiz_mi_026",
                        "question":  "What evolutionary phase of MI is demonstrated here?",
                        "imageUrl":  "/ecg/MI_ecg_database/Post_MI_evolved_MI/Post_AWMI (2).jpg",
                        "options":  [
                                        "Hyperacute phase",
                                        "Acute phase",
                                        "Evolutionary phase",
                                        "Chronic/evolved phase"
                                    ],
                        "correctAnswer":  "Chronic/evolved phase",
                        "explanation":  "This ECG shows the chronic/evolved phase of MI with established Q waves, normalized ST segments, and resolved acute changes. This occurs weeks to months after acute MI.",
                        "category":  "post_mi_evolved",
                        "difficulty":  "medium",
                        "tags":  [
                                     "chronic_phase",
                                     "evolved",
                                     "resolved_acute"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Completed healing with scar tissue formation",
                                               "clinical_significance":  "Indicates old MI with stable scar",
                                               "management":  "Focus on long-term secondary prevention"
                                           }
                    },
                    {
                        "id":  "quiz_mi_027",
                        "question":  "In this anterior MI, which coronary territory is affected?",
                        "imageUrl":  "/ecg/MI_ecg_database/Anterior_wall_MI/AMI9.jpg",
                        "options":  [
                                        "Right coronary territory",
                                        "Left anterior descending territory",
                                        "Left circumflex territory",
                                        "Posterior descending territory"
                                    ],
                        "correctAnswer":  "Left anterior descending territory",
                        "explanation":  "The ST elevation in anterior leads (V1-V4) indicates involvement of the LAD territory, which supplies the anterior wall and anterior septum of the left ventricle.",
                        "category":  "anterior_mi",
                        "difficulty":  "medium",
                        "tags":  [
                                     "lad_territory",
                                     "anterior_wall",
                                     "septum"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "LAD supplies anterior LV wall and anterior 2/3 of septum",
                                               "clinical_significance":  "Critical vessel supplying large myocardial territory",
                                               "management":  "Primary PCI to LAD, assess for septal involvement"
                                           }
                    },
                    {
                        "id":  "quiz_mi_028",
                        "question":  "What is the significance of Q waves in multiple leads?",
                        "imageUrl":  "/ecg/MI_ecg_database/Anterior_wall_MI/ami (2).jpg",
                        "options":  [
                                        "Normal variant",
                                        "Large territory MI",
                                        "Multiple separate MIs",
                                        "Technical artifact"
                                    ],
                        "correctAnswer":  "Large territory MI",
                        "explanation":  "Q waves in multiple contiguous leads suggest a large territory MI involving extensive myocardium, often indicating proximal vessel occlusion with poor collateral flow.",
                        "category":  "anterior_mi",
                        "difficulty":  "hard",
                        "tags":  [
                                     "extensive_mi",
                                     "multiple_leads",
                                     "large_territory"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Proximal occlusion affecting large myocardial territory",
                                               "clinical_significance":  "Associated with worse prognosis and LV dysfunction",
                                               "management":  "Aggressive post-MI therapy, assess for heart failure"
                                           }
                    },
                    {
                        "id":  "quiz_mi_029",
                        "question":  "What complication should be monitored in extensive anterior MI?",
                        "imageUrl":  "/ecg/MI_ecg_database/Anterior_wall_MI/ami (3).jpg",
                        "options":  [
                                        "AV block",
                                        "Left ventricular aneurysm",
                                        "Right heart failure",
                                        "Atrial flutter"
                                    ],
                        "correctAnswer":  "Left ventricular aneurysm",
                        "explanation":  "Extensive anterior MI can lead to LV aneurysm formation due to large areas of non-contractile scar tissue. This appears as persistent ST elevation and abnormal wall motion.",
                        "category":  "anterior_mi",
                        "difficulty":  "hard",
                        "tags":  [
                                     "lv_aneurysm",
                                     "complications",
                                     "scar_tissue"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Large scar area leads to wall motion abnormalities",
                                               "clinical_significance":  "Risk for arrhythmias and heart failure",
                                               "management":  "Echocardiogram surveillance, consider ICD evaluation"
                                           }
                    },
                    {
                        "id":  "quiz_mi_030",
                        "question":  "What leads would show reciprocal changes in this inferior MI?",
                        "imageUrl":  "/ecg/MI_ecg_database/Inferior_wall_MI/imi (5).jpg",
                        "options":  [
                                        "V1-V3",
                                        "I, aVL",
                                        "V4-V6",
                                        "II, III, aVF"
                                    ],
                        "correctAnswer":  "I, aVL",
                        "explanation":  "Inferior MI shows reciprocal ST depression in leads I and aVL (high lateral leads), which are electrically opposite to the inferior leads showing ST elevation.",
                        "category":  "inferior_mi",
                        "difficulty":  "medium",
                        "tags":  [
                                     "reciprocal",
                                     "high_lateral",
                                     "st_depression"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Electrical reciprocity between inferior and high lateral territories",
                                               "clinical_significance":  "Confirms transmural nature of inferior MI",
                                               "management":  "Reciprocal changes help distinguish STEMI from non-STEMI"
                                           }
                    },
                    {
                        "id":  "quiz_mi_031",
                        "question":  "In right-dominant circulation, which additional structure might be affected in inferior MI?",
                        "imageUrl":  "/ecg/MI_ecg_database/Inferior_wall_MI/imi (6).jpg",
                        "options":  [
                                        "Left atrium",
                                        "Right ventricle",
                                        "Left anterior wall",
                                        "Pulmonary artery"
                                    ],
                        "correctAnswer":  "Right ventricle",
                        "explanation":  "In right-dominant circulation (85% of people), the RCA supplies both the inferior LV wall and the RV. Inferior MI can therefore involve the right ventricle.",
                        "category":  "inferior_mi",
                        "difficulty":  "hard",
                        "tags":  [
                                     "rv_involvement",
                                     "right_dominance",
                                     "rca"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "RCA supplies RV in right-dominant systems",
                                               "clinical_significance":  "RV MI causes different hemodynamic profile",
                                               "management":  "Obtain right-sided leads, avoid preload reduction"
                                           }
                    },
                    {
                        "id":  "quiz_mi_032",
                        "question":  "How can you assess for RV involvement in inferior MI?",
                        "imageUrl":  "/ecg/MI_ecg_database/Inferior_wall_MI/IMI(2).jpg",
                        "options":  [
                                        "Posterior leads V7-V9",
                                        "Right-sided leads V3R-V6R",
                                        "High lateral leads",
                                        "Additional anterior leads"
                                    ],
                        "correctAnswer":  "Right-sided leads V3R-V6R",
                        "explanation":  "RV involvement in inferior MI is assessed using right-sided chest leads (V3R-V6R), particularly V4R. ST elevation \u003e1mm in V4R suggests RV MI.",
                        "category":  "inferior_mi",
                        "difficulty":  "hard",
                        "tags":  [
                                     "rv_leads",
                                     "v4r",
                                     "assessment"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Right-sided leads directly visualize RV electrical activity",
                                               "clinical_significance":  "RV MI requires different treatment approach",
                                               "management":  "V4R \u003e1mm ST elevation indicates RV involvement"
                                           }
                    },
                    {
                        "id":  "quiz_mi_033",
                        "question":  "What is the key management difference in RV MI?",
                        "imageUrl":  "/ecg/MI_ecg_database/Inferior_wall_MI/imi5.jpg",
                        "options":  [
                                        "Higher dose aspirin",
                                        "Avoid preload reduction",
                                        "Use more beta-blockers",
                                        "Immediate surgery required"
                                    ],
                        "correctAnswer":  "Avoid preload reduction",
                        "explanation":  "RV MI requires adequate preload for RV filling. Avoid nitrates, diuretics, and morphine which can cause dangerous hypotension by reducing preload.",
                        "category":  "inferior_mi",
                        "difficulty":  "hard",
                        "tags":  [
                                     "rv_management",
                                     "preload",
                                     "hypotension"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "RV needs adequate preload due to decreased compliance",
                                               "clinical_significance":  "Preload reduction can cause cardiogenic shock",
                                               "management":  "Fluid resuscitation, avoid nitrates and diuretics"
                                           }
                    },
                    {
                        "id":  "quiz_mi_034",
                        "question":  "Which leads are considered \u0027high lateral\u0027 leads?",
                        "imageUrl":  "/ecg/MI_ecg_database/Lateral_wall_MI/LMI.jpg",
                        "options":  [
                                        "V5, V6",
                                        "I, aVL",
                                        "V1, V2",
                                        "II, III"
                                    ],
                        "correctAnswer":  "I, aVL",
                        "explanation":  "Leads I and aVL are considered the \u0027high lateral\u0027 leads, positioned to view the high lateral wall of the left ventricle. V5 and V6 are \u0027low lateral\u0027 leads.",
                        "category":  "lateral_mi",
                        "difficulty":  "medium",
                        "tags":  [
                                     "high_lateral",
                                     "lead_positioning",
                                     "anatomy"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "High lateral leads view superior aspect of lateral LV wall",
                                               "clinical_significance":  "Different from low lateral leads V5-V6",
                                               "management":  "Both high and low lateral involvement indicates extensive lateral MI"
                                           }
                    },
                    {
                        "id":  "quiz_mi_035",
                        "question":  "What additional territory should be assessed in lateral MI?",
                        "imageUrl":  "/ecg/MI_ecg_database/Lateral_wall_MI/lmi.png",
                        "options":  [
                                        "Right ventricle",
                                        "Posterior wall",
                                        "Anterior septum",
                                        "Inferior wall only"
                                    ],
                        "correctAnswer":  "Posterior wall",
                        "explanation":  "Lateral MI may extend to involve the posterior wall since the LCX often supplies both territories. Posterior leads (V7-V9) should be obtained if clinically indicated.",
                        "category":  "lateral_mi",
                        "difficulty":  "hard",
                        "tags":  [
                                     "posterior_extension",
                                     "lcx_territory",
                                     "v7_v9"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "LCX often supplies both lateral and posterior walls",
                                               "clinical_significance":  "Posterior extension increases infarct size",
                                               "management":  "Consider posterior leads if large lateral MI"
                                           }
                    },
                    {
                        "id":  "quiz_mi_036",
                        "question":  "What ECG finding suggests posterior wall involvement?",
                        "imageUrl":  "/ecg/MI_ecg_database/Posterior_wall_MI/PMI.jpg",
                        "options":  [
                                        "Deep Q waves in V1-V2",
                                        "Tall R waves in V1-V2",
                                        "ST elevation in V1-V2",
                                        "Normal findings in V1-V2"
                                    ],
                        "correctAnswer":  "Tall R waves in V1-V2",
                        "explanation":  "Tall R waves in V1-V2 suggest posterior wall involvement. These represent the \u0027mirror image\u0027 of Q waves that would be seen in posterior leads.",
                        "category":  "posterior_mi",
                        "difficulty":  "hard",
                        "tags":  [
                                     "tall_r_waves",
                                     "mirror_image",
                                     "posterior_q"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Anterior leads show reciprocal image of posterior changes",
                                               "clinical_significance":  "Key diagnostic clue for posterior MI",
                                               "management":  "Tall R waves should trigger posterior lead placement"
                                           }
                    },
                    {
                        "id":  "quiz_mi_037",
                        "question":  "At what R/S ratio in V1 should you suspect posterior MI?",
                        "imageUrl":  "/ecg/MI_ecg_database/Posterior_wall_MI/PMI2.jpg",
                        "options":  [
                                        "R/S \u003e 0.5",
                                        "R/S \u003e 1",
                                        "R/S \u003e 2",
                                        "Any R wave in V1"
                                    ],
                        "correctAnswer":  "R/S \u003e 1",
                        "explanation":  "An R/S ratio \u003e1 in lead V1 (tall R wave) is suspicious for posterior MI, especially with clinical context. Normal V1 typically shows rS or QS pattern.",
                        "category":  "posterior_mi",
                        "difficulty":  "hard",
                        "tags":  [
                                     "r_s_ratio",
                                     "v1_morphology",
                                     "diagnostic_criteria"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Posterior Q waves appear as tall R waves in opposing lead V1",
                                               "clinical_significance":  "Quantitative criterion for posterior MI suspicion",
                                               "management":  "R/S \u003e1 in V1 warrants posterior lead evaluation"
                                           }
                    },
                    {
                        "id":  "quiz_mi_038",
                        "question":  "What is the time course for Q wave development in MI?",
                        "imageUrl":  "/ecg/MI_ecg_database/Post_MI_evolved_MI/post_awmi (3).jpg",
                        "options":  [
                                        "Minutes",
                                        "Hours to days",
                                        "Weeks to months",
                                        "Never develop"
                                    ],
                        "correctAnswer":  "Hours to days",
                        "explanation":  "Pathological Q waves typically develop within hours to days after MI onset, representing established myocardial necrosis and scar tissue formation.",
                        "category":  "post_mi_evolved",
                        "difficulty":  "medium",
                        "tags":  [
                                     "q_wave_timing",
                                     "necrosis",
                                     "development"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Q waves develop as necrotic tissue loses electrical activity",
                                               "clinical_significance":  "Indicates irreversible myocardial damage",
                                               "management":  "Late presentation of MI if Q waves present on admission"
                                           }
                    },
                    {
                        "id":  "quiz_mi_039",
                        "question":  "What does loss of R wave progression indicate in anterior MI?",
                        "imageUrl":  "/ecg/MI_ecg_database/Anterior_wall_MI/AMI(7).jpg",
                        "options":  [
                                        "Normal variant",
                                        "Anterior wall necrosis",
                                        "Posterior involvement",
                                        "Right heart strain"
                                    ],
                        "correctAnswer":  "Anterior wall necrosis",
                        "explanation":  "Loss of R wave progression across precordial leads (V1-V6) in anterior MI indicates anterior wall necrosis, often appearing before frank Q waves develop.",
                        "category":  "anterior_mi",
                        "difficulty":  "hard",
                        "tags":  [
                                     "r_wave_progression",
                                     "necrosis",
                                     "precordial"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Necrotic anterior wall cannot generate normal R wave forces",
                                               "clinical_significance":  "Early sign of significant anterior wall damage",
                                               "management":  "Indicates need for urgent reperfusion therapy"
                                           }
                    },
                    {
                        "id":  "quiz_mi_041",
                        "question":  "In this lateral MI, what vessel bifurcation might be involved?",
                        "imageUrl":  "/ecg/MI_ecg_database/Lateral_wall_MI/lmi (2).jpg",
                        "options":  [
                                        "Left main bifurcation",
                                        "LAD-diagonal bifurcation",
                                        "RCA-PDA bifurcation",
                                        "LCX-marginal bifurcation"
                                    ],
                        "correctAnswer":  "LCX-marginal bifurcation",
                        "explanation":  "Lateral MI often involves the LCX and its marginal branches. Bifurcation lesions at the LCX-marginal branch takeoff can cause lateral territory infarction.",
                        "category":  "lateral_mi",
                        "difficulty":  "hard",
                        "tags":  [
                                     "bifurcation",
                                     "marginal_branches",
                                     "lcx_anatomy"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Bifurcation lesions can compromise multiple vessel territories",
                                               "clinical_significance":  "May require complex PCI techniques",
                                               "management":  "Bifurcation PCI may need specialized stenting techniques"
                                           }
                    },
                    {
                        "id":  "quiz_mi_042",
                        "question":  "What is the significance of persistent ST elevation months after MI?",
                        "imageUrl":  "/ecg/MI_ecg_database/Post_MI_evolved_MI/Post_AWMI.jpg",
                        "options":  [
                                        "Normal healing",
                                        "LV aneurysm formation",
                                        "Reinfarction",
                                        "Pericarditis"
                                    ],
                        "correctAnswer":  "LV aneurysm formation",
                        "explanation":  "Persistent ST elevation months after MI suggests LV aneurysm formation. Normal evolution shows ST normalization within weeks, so persistent elevation indicates abnormal wall motion.",
                        "category":  "post_mi_evolved",
                        "difficulty":  "hard",
                        "tags":  [
                                     "persistent_st",
                                     "lv_aneurysm",
                                     "abnormal_healing"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Aneurysmal scar tissue maintains abnormal electrical forces",
                                               "clinical_significance":  "Risk for arrhythmias and thromboembolism",
                                               "management":  "Echocardiogram, consider anticoagulation, ICD evaluation"
                                           }
                    },
                    {
                        "id":  "quiz_mi_043",
                        "question":  "Which type of MI has the highest risk of cardiogenic shock?",
                        "imageUrl":  "/ecg/MI_ecg_database/Anterolateral_MI/ANTEROLATERAL.jpg",
                        "options":  [
                                        "Inferior MI",
                                        "Lateral MI",
                                        "Anterolateral MI",
                                        "Posterior MI"
                                    ],
                        "correctAnswer":  "Anterolateral MI",
                        "explanation":  "Anterolateral MI has the highest risk of cardiogenic shock due to the large territory of myocardium involved, often resulting from proximal LAD occlusion.",
                        "category":  "anterolateral_mi",
                        "difficulty":  "hard",
                        "tags":  [
                                     "cardiogenic_shock",
                                     "large_territory",
                                     "high_risk"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Extensive myocardial loss leads to pump failure",
                                               "clinical_significance":  "Mortality \u003e50% without aggressive intervention",
                                               "management":  "Consider mechanical circulatory support, urgent revascularization"
                                           }
                    },
                    {
                        "id":  "quiz_mi_044",
                        "question":  "What ECG change occurs first in the evolution of STEMI?",
                        "imageUrl":  "/ecg/MI_ecg_database/Anterior_wall_MI/AMI9 (2).jpg",
                        "options":  [
                                        "Q wave formation",
                                        "Hyperacute T waves",
                                        "ST elevation",
                                        "T wave inversion"
                                    ],
                        "correctAnswer":  "Hyperacute T waves",
                        "explanation":  "Hyperacute T waves (tall, peaked T waves) are the earliest ECG change in STEMI, appearing within minutes of occlusion, even before ST elevation develops.",
                        "category":  "anterior_mi",
                        "difficulty":  "hard",
                        "tags":  [
                                     "hyperacute",
                                     "earliest_change",
                                     "evolution"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Hyperacute phase represents early ischemia before tissue death",
                                               "clinical_significance":  "Earliest opportunity for intervention",
                                               "management":  "Hyperacute T waves should prompt immediate cath lab activation"
                                           }
                    },
                    {
                        "id":  "quiz_mi_045",
                        "question":  "In posterior MI, what is the typical T wave appearance in V1-V3?",
                        "imageUrl":  "/ecg/MI_ecg_database/Posterior_wall_MI/pmi3.jpg",
                        "options":  [
                                        "Inverted T waves",
                                        "Tall, upright T waves",
                                        "Biphasic T waves",
                                        "Flattened T waves"
                                    ],
                        "correctAnswer":  "Tall, upright T waves",
                        "explanation":  "Posterior MI shows tall, upright T waves in V1-V3 as reciprocal changes. These represent the mirror image of the T wave inversion occurring in the posterior territory.",
                        "category":  "posterior_mi",
                        "difficulty":  "hard",
                        "tags":  [
                                     "reciprocal_t_waves",
                                     "upright",
                                     "mirror_image"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Reciprocal T wave changes reflect opposite electrical activity",
                                               "clinical_significance":  "Part of the diagnostic pattern for posterior MI",
                                               "management":  "Upright T waves in V1-V3 support posterior MI diagnosis"
                                           }
                    },
                    {
                        "id":  "quiz_mi_046",
                        "question":  "What is the definition of a STEMI based on ST elevation criteria?",
                        "imageUrl":  "/ecg/MI_ecg_database/Inferior_wall_MI/imi8.jpg",
                        "options":  [
                                        "Any ST elevation",
                                        "â‰¥1mm in limb leads, â‰¥2mm in precordial leads",
                                        "â‰¥2mm in all leads",
                                        "â‰¥0.5mm in any lead"
                                    ],
                        "correctAnswer":  "â‰¥1mm in limb leads, â‰¥2mm in precordial leads",
                        "explanation":  "STEMI criteria require â‰¥1mm (0.1mV) ST elevation in limb leads or â‰¥2mm (0.2mV) in precordial leads in at least two contiguous leads.",
                        "category":  "inferior_mi",
                        "difficulty":  "medium",
                        "tags":  [
                                     "stemi_criteria",
                                     "st_elevation",
                                     "diagnostic"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Standardized criteria ensure appropriate identification of STEMI",
                                               "clinical_significance":  "Determines need for immediate reperfusion therapy",
                                               "management":  "Meeting STEMI criteria triggers primary PCI pathway"
                                           }
                    },
                    {
                        "id":  "quiz_mi_047",
                        "question":  "What does the presence of Q waves indicate about MI timing?",
                        "imageUrl":  "/ecg/MI_ecg_database/Post_MI_evolved_MI/Post_LWMI.jpg",
                        "options":  [
                                        "Very acute MI (\u003c1 hour)",
                                        "Acute MI (hours to days old)",
                                        "Chronic MI (established infarct)",
                                        "Cannot determine timing"
                                    ],
                        "correctAnswer":  "Acute MI (hours to days old)",
                        "explanation":  "Q waves indicate that the MI is at least several hours old, as Q waves develop hours to days after vessel occlusion. Very acute MI shows only ST elevation.",
                        "category":  "post_mi_evolved",
                        "difficulty":  "medium",
                        "tags":  [
                                     "q_wave_timing",
                                     "mi_age",
                                     "acute"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Q waves develop as necrotic tissue loses electrical activity",
                                               "clinical_significance":  "Indicates established necrosis, may be too late for primary PCI benefit",
                                               "management":  "Late presentation, focus on medical management and secondary prevention"
                                           }
                    },
                    {
                        "id":  "quiz_mi_048",
                        "question":  "What percentage of the R wave height constitutes a pathological Q wave?",
                        "imageUrl":  "/ecg/MI_ecg_database/Anterior_wall_MI/ami (3).jpg",
                        "options":  [
                                        "\u003e10%",
                                        "\u003e15%",
                                        "\u003e25%",
                                        "\u003e50%"
                                    ],
                        "correctAnswer":  "\u003e25%",
                        "explanation":  "A pathological Q wave is defined as \u003e25% of the height of the following R wave, or \u003e0.04 seconds in width. This distinguishes pathological from normal septal Q waves.",
                        "category":  "anterior_mi",
                        "difficulty":  "hard",
                        "tags":  [
                                     "q_wave_criteria",
                                     "pathological",
                                     "percentage"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Significant myocardial scar disrupts normal electrical conduction",
                                               "clinical_significance":  "Quantitative criteria distinguish normal from pathological Q waves",
                                               "management":  "Used to identify prior MI in asymptomatic patients"
                                           }
                    },
                    {
                        "id":  "quiz_mi_049",
                        "question":  "In which leads would you expect to see changes in a wraparound LAD MI?",
                        "imageUrl":  "/ecg/MI_ecg_database/Anterolateral_MI/anerolateral.jpg",
                        "options":  [
                                        "V1-V4 only",
                                        "II, III, aVF only",
                                        "V1-V6, I, aVL, and sometimes II, III, aVF",
                                        "Posterior leads only"
                                    ],
                        "correctAnswer":  "V1-V6, I, aVL, and sometimes II, III, aVF",
                        "explanation":  "A wraparound LAD (one that extends to supply inferior territory) can cause changes in anterior, lateral, and sometimes inferior leads, creating an extensive MI pattern.",
                        "category":  "anterolateral_mi",
                        "difficulty":  "hard",
                        "tags":  [
                                     "wraparound_lad",
                                     "extensive",
                                     "multiple_territories"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Anatomical variant where LAD supplies multiple territories",
                                               "clinical_significance":  "Can mimic multivessel disease on ECG",
                                               "management":  "Angiography reveals single vessel occlusion despite extensive ECG changes"
                                           }
                    },
                    {
                        "id":  "quiz_mi_050",
                        "question":  "What is the most common cause of sudden cardiac death post-MI?",
                        "imageUrl":  "/ecg/MI_ecg_database/Post_MI_evolved_MI/post_awmi (3).jpg",
                        "options":  [
                                        "Cardiogenic shock",
                                        "Ventricular arrhythmias",
                                        "Heart block",
                                        "Mechanical complications"
                                    ],
                        "correctAnswer":  "Ventricular arrhythmias",
                        "explanation":  "Ventricular arrhythmias (VT/VF) are the most common cause of sudden cardiac death post-MI, especially in patients with significant LV dysfunction and scar tissue.",
                        "category":  "post_mi_evolved",
                        "difficulty":  "hard",
                        "tags":  [
                                     "sudden_death",
                                     "ventricular_arrhythmias",
                                     "scar"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Scar tissue creates reentrant circuits for VT/VF",
                                               "clinical_significance":  "Leading cause of mortality post-MI",
                                               "management":  "ICD evaluation for primary prevention if EF \u003c35%"
                                           }
                    },
                    {
                        "id":  "quiz_mi_051",
                        "question":  "Evaluate this ECG - what acute MI pattern do you recognize?",
                        "imageUrl":  "/ecg/MI_ecg_database/Posterior_wall_MI/posterior_mi_v7v8v9.jpg",
                        "options":  [
                                        "Anterior STEMI",
                                        "Posterior STEMI",
                                        "Lateral STEMI", 
                                        "Inferior STEMI"
                                    ],
                        "correctAnswer":  "Posterior STEMI",
                        "explanation":  "This ECG demonstrates posterior STEMI with ST elevation in posterior leads V7-V9 and reciprocal ST depression in anterior leads V1-V3. Posterior MI is often missed without posterior lead evaluation.",
                        "category":  "posterior_mi",
                        "difficulty":  "hard",
                        "tags":  [
                                     "posterior_stemi",
                                     "reciprocal_changes",
                                     "v7v8v9",
                                     "missed_diagnosis"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "RCA or LCX occlusion affecting posterior wall of left ventricle",
                                               "clinical_significance":  "Often overlooked without posterior leads, significant territory",
                                               "management":  "Primary PCI, always obtain posterior leads in suspected cases"
                                           }
                    },
                    {
                        "id":  "quiz_mi_052",
                        "question":  "Recognize the infarct pattern - what does this ECG demonstrate?",
                        "imageUrl":  "/ecg/MI_ecg_database/Lateral_wall_MI/lateral_mi_i_avl_v5v6.jpg",
                        "options":  [
                                        "High Lateral MI",
                                        "Low Lateral MI",
                                        "Anterolateral MI",
                                        "Inferolateral MI"
                                    ],
                        "correctAnswer":  "High Lateral MI",
                        "explanation":  "This ECG shows high lateral MI with ST elevation in leads I, aVL, and sometimes V5-V6. This pattern indicates occlusion of a diagonal branch or obtuse marginal artery affecting the high lateral wall.",
                        "category":  "lateral_mi",
                        "difficulty":  "medium",
                        "tags":  [
                                     "high_lateral",
                                     "lead_I_aVL",
                                     "diagonal_branch",
                                     "obtuse_marginal"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Diagonal or obtuse marginal artery occlusion",
                                               "clinical_significance":  "Smaller territory but still requires urgent revascularization",
                                               "management":  "Primary PCI, assess for multivessel disease"
                                           }
                    },
                    {
                        "id":  "quiz_mi_053",
                        "question":  "Diagnose the MI location from this ECG - what do you see?",
                        "imageUrl":  "/ecg/MI_ecg_database/Inferolateral_MI/inferolateral_stemi.jpg",
                        "options":  [
                                        "Isolated Inferior MI",
                                        "Isolated Lateral MI", 
                                        "Inferolateral MI",
                                        "Anterolateral MI"
                                    ],
                        "correctAnswer":  "Inferolateral MI",
                        "explanation":  "This ECG demonstrates inferolateral MI with ST elevation in inferior leads (II, III, aVF) and lateral leads (I, aVL, V5-V6). This suggests a large RCA or dominant LCX occlusion.",
                        "category":  "lateral_mi",
                        "difficulty":  "medium",
                        "tags":  [
                                     "inferolateral",
                                     "large_territory",
                                     "rca_lcx",
                                     "multileads"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Large RCA or dominant LCX occlusion affecting multiple territories",
                                               "clinical_significance":  "Extensive MI with higher risk of complications",
                                               "management":  "Urgent primary PCI, monitor for cardiogenic shock"
                                           }
                    },
                    {
                        "id":  "quiz_mi_054",
                        "question":  "Evaluate this ECG pattern - what hyperacute changes do you identify?",
                        "imageUrl":  "/ecg/MI_ecg_database/Anterior_wall_MI/hyperacute_anterior_mi.jpg",
                        "options":  [
                                        "Normal T waves",
                                        "Hyperacute T waves in V2-V4",
                                        "T wave inversions",
                                        "Pathological Q waves"
                                    ],
                        "correctAnswer":  "Hyperacute T waves in V2-V4",
                        "explanation":  "This ECG shows hyperacute T waves in anterior leads V2-V4, indicating very early anterior MI before ST elevation develops. These tall, peaked T waves are the earliest ECG sign of acute coronary occlusion.",
                        "category":  "anterior_mi",
                        "difficulty":  "hard",
                        "tags":  [
                                     "hyperacute_t_waves",
                                     "early_mi",
                                     "peaked_t_waves",
                                     "pre_stemi"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Earliest phase of myocardial ischemia before cell death",
                                               "clinical_significance":  "Critical window for intervention before irreversible damage",
                                               "management":  "Immediate cath lab activation, do not wait for ST elevation"
                                           }
                    },
                    {
                        "id":  "quiz_mi_055",
                        "question":  "Recognize the evolved MI pattern - what does this ECG show?",
                        "imageUrl":  "/ecg/MI_ecg_database/Post_MI_evolved_MI/old_inferior_mi_q_waves.jpg",
                        "options":  [
                                        "Acute Inferior MI",
                                        "Old Inferior MI with Q waves",
                                        "Inferior Ischemia",
                                        "Normal Variant"
                                    ],
                        "correctAnswer":  "Old Inferior MI with Q waves",
                        "explanation":  "This ECG demonstrates old inferior MI with pathological Q waves in leads II, III, and aVF. The Q waves are \u003e1/3 the height of the R wave and \u003e40ms wide, indicating prior inferior wall infarction with scar tissue.",
                        "category":  "post_mi_evolved", 
                        "difficulty":  "medium",
                        "tags":  [
                                     "old_mi",
                                     "pathological_q_waves",
                                     "inferior_scar",
                                     "prior_infarct"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Scar tissue replacement of infarcted myocardium",
                                               "clinical_significance":  "Indicates prior MI, assess for residual viable myocardium",
                                               "management":  "Optimize medical therapy, assess LV function, consider ICD"
                                           }
                    },
                    {
                        "id":  "quiz_mi_056",
                        "question":  "What specific MI complication is suggested by this ECG?",
                        "imageUrl":  "/ecg/MI_ecg_database/RV_infarction/rv_infarction_v3r_v4r.jpg",
                        "options":  [
                                        "Anterior Extension",
                                        "Right Ventricular Infarction",
                                        "Posterior Extension",
                                        "Lateral Extension"
                                    ],
                        "correctAnswer":  "Right Ventricular Infarction",
                        "explanation":  "This ECG shows ST elevation in right-sided leads V3R and V4R, indicating right ventricular infarction. This commonly accompanies inferior MI and has specific hemodynamic implications requiring careful fluid management.",
                        "category":  "inferior_mi",
                        "difficulty":  "hard",
                        "tags":  [
                                     "rv_infarction",
                                     "right_sided_leads",
                                     "v3r_v4r",
                                     "hemodynamic"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Proximal RCA occlusion affecting both inferior LV and RV",
                                               "clinical_significance":  "Preload dependent, avoid nitrates and diuretics",
                                               "management":  "Maintain preload, avoid venodilators, urgent reperfusion"
                                           }
                    },
                    {
                        "id":  "quiz_mi_057",
                        "question":  "Identify the reperfusion marker in this post-PCI ECG:",
                        "imageUrl":  "/ecg/MI_ecg_database/Reperfusion_markers/st_resolution_post_pci.jpg",
                        "options":  [
                                        "Persistent ST Elevation",
                                        "ST Resolution (\u003e50%)",
                                        "New Q Wave Formation",
                                        "T Wave Inversion"
                                    ],
                        "correctAnswer":  "ST Resolution (\u003e50%)",
                        "explanation":  "This post-PCI ECG shows significant ST resolution (\u003e50%) indicating successful reperfusion. ST resolution is the most reliable ECG marker of restored coronary flow and tissue-level perfusion.",
                        "category":  "anterior_mi",
                        "difficulty":  "medium",
                        "tags":  [
                                     "st_resolution",
                                     "reperfusion_marker",
                                     "successful_pci",
                                     "tissue_perfusion"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Restored coronary flow normalizing transmural electrical activity",
                                               "clinical_significance":  "Indicates successful reperfusion and better prognosis",
                                               "management":  "Continue GDMT, monitor for reperfusion arrhythmias"
                                           }
                    },
                    {
                        "id":  "quiz_mi_058", 
                        "question":  "Evaluate this ECG - what wellens pattern do you recognize?",
                        "imageUrl":  "/ecg/MI_ecg_database/Wellens_pattern/wellens_type_a_v2v3.jpg",
                        "options":  [
                                        "Normal T waves",
                                        "Wellens Type A (Biphasic T waves)",
                                        "Wellens Type B (Deep T inversions)",
                                        "Hyperacute T waves"
                                    ],
                        "correctAnswer":  "Wellens Type A (Biphasic T waves)",
                        "explanation":  "This ECG demonstrates Wellens Type A pattern with biphasic T waves in V2-V3. This indicates critical LAD stenosis with high risk of anterior STEMI within days if not urgently revascularized.",
                        "category":  "anterior_mi",
                        "difficulty":  "hard",
                        "tags":  [
                                     "wellens_type_a",
                                     "biphasic_t_waves",
                                     "critical_lad",
                                     "pre_stemi"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Critical LAD stenosis with transient occlusion and reperfusion",
                                               "clinical_significance":  "High risk of massive anterior MI within hours to days",
                                               "management":  "Urgent cardiology consultation, avoid stress testing, early catheterization"
                                           }
                    },
                    {
                        "id":  "quiz_mi_059",
                        "question":  "Diagnose the territorial extent of this MI from the ECG:",
                        "imageUrl":  "/ecg/MI_ecg_database/Extensive_anterior_MI/extensive_anterior_v1_v6.jpg",
                        "options":  [
                                        "Limited Anterior MI",
                                        "Extensive Anterior MI",
                                        "Anteroseptal MI only",
                                        "Anterolateral MI only"
                                    ],
                        "correctAnswer":  "Extensive Anterior MI",
                        "explanation":  "This ECG shows extensive anterior MI with ST elevation across all anterior leads V1-V6, indicating occlusion of a large LAD (wraparound LAD) supplying a massive territory of the anterior wall.",
                        "category":  "anterior_mi",
                        "difficulty":  "medium",
                        "tags":  [
                                     "extensive_anterior",
                                     "v1_through_v6",
                                     "wraparound_lad",
                                     "large_territory"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Proximal LAD occlusion in large dominant vessel",
                                               "clinical_significance":  "High risk of cardiogenic shock and mechanical complications",
                                               "management":  "Emergent primary PCI, prepare for mechanical circulatory support"
                                           }
                    },
                    {
                        "id":  "quiz_mi_060",
                        "question":  "What evolution phase of MI does this ECG represent?",
                        "imageUrl":  "/ecg/MI_ecg_database/T_wave_inversions/evolving_t_inversions_v2_v4.jpg",
                        "options":  [
                                        "Hyperacute Phase",
                                        "Acute Phase with ST elevation",
                                        "Evolving Phase with T inversions",
                                        "Chronic Phase with Q waves"
                                    ],
                        "correctAnswer":  "Evolving Phase with T inversions",
                        "explanation":  "This ECG shows the evolving phase of anterior MI with symmetric T wave inversions in V2-V4. This typically occurs days to weeks after the acute event as the ST elevation resolves and T waves invert.",
                        "category":  "anterior_mi",
                        "difficulty":  "medium",
                        "tags":  [
                                     "evolving_mi",
                                     "t_wave_inversions",
                                     "symmetric",
                                     "days_to_weeks"
                                 ],
                        "medicalContext":  {
                                               "mechanism":  "Ongoing myocardial healing with electrical remodeling",
                                               "clinical_significance":  "Normal evolution, may normalize over months",
                                               "management":  "Continue optimal medical therapy, cardiac rehabilitation"
                                           }
                    }
                ]
};

export default ecgQuizzesMI50;
