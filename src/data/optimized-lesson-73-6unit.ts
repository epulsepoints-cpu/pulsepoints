import { Lesson } from '@/types/learning';

export const optimizedLesson73: Lesson = {
  id: 'lesson-73-optimized-6unit',
  moduleId: 'module-9',
  title: "Long QT Syndrome & Arrhythmic Risk",
  description: "Master Long QT Syndrome recognition, classification, and management to prevent sudden cardiac death",
  order: 73,
  estimatedTime: 45,
  content: {
    type: 'mixed',
    introduction: "Master Long QT Syndrome (LQTS) - a life-threatening condition causing prolonged ventricular repolarization and risk of torsades de pointes! Learn to recognize QT prolongation, classify LQTS types, identify high-risk features, and apply evidence-based management strategies to prevent sudden cardiac death.",
    summary: "Long QT Syndrome mastery: QT measurement, congenital vs acquired causes, risk stratification, and comprehensive management strategies.",
    keyPoints: [
      "Master accurate QT interval measurement and correction",
      "Recognize congenital and acquired LQTS patterns", 
      "Identify high-risk features and arrhythmic triggers",
      "Apply risk stratification and management protocols"
    ],
    resources: [
      { title: "LQTS diagnostic calculator", url: "/resources/lqts-calculator", type: "tool", description: "Interactive QT measurement and risk calculator" },
      { title: "Genetic LQTS atlas", url: "/resources/lqts-genetics", type: "reference", description: "Comprehensive genetic LQTS classification guide" },
      { title: "LQTS management protocols", url: "/resources/lqts-management", type: "article", description: "Evidence-based LQTS treatment guidelines" }
    ],
    sections: [
      {
        id: 'unit-1-qt-fundamentals',
        title: "Unit 1: QT Interval Fundamentals",
        content: "Master QT interval measurement, normal values, and correction formulas"
      },
      {
        id: 'unit-2-congenital-lqts',
        title: "Unit 2: Congenital LQTS", 
        content: "Understand genetic LQTS types, inheritance patterns, and phenotypes"
      },
      {
        id: 'unit-3-acquired-lqts',
        title: "Unit 3: Acquired LQTS",
        content: "Recognize drug-induced and metabolic causes of QT prolongation"
      },
      {
        id: 'unit-4-risk-assessment',
        title: "Unit 4: Risk Assessment",
        content: "Apply risk stratification tools and identify high-risk patients"
      },
      {
        id: 'unit-5-management-strategies',
        title: "Unit 5: Management Strategies",
        content: "Master pharmacological and device-based LQTS management"
      },
      {
        id: 'unit-6-special-considerations',
        title: "Unit 6: Special Considerations",
        content: "Address pregnancy, athletics, and pediatric LQTS management"
      }
    ],
    slides: [
      
      // ============= UNIT 1: QT INTERVAL FUNDAMENTALS (Slides 1-7) =============
      {
        id: 'qt-interval-basics',
        title: 'QT Interval Fundamentals',
        content: 'QT interval represents total ventricular depolarization and repolarization time. Measured from QRS onset to T wave end, it varies with heart rate requiring correction (QTc). Critical for arrhythmia risk assessment.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade'
      },
      {
        id: 'qt-measurement-technique',
        title: 'QT Measurement Technique',
        content: 'Accurate QT measurement: Use lead II or V5, measure from QRS onset to T wave end (not U wave), use tangent method for gradual T wave descent. Measure multiple beats and average.',
        type: 'tabs',
        tabs: [
          {
            title: 'Lead Selection',
            content: 'Lead II or V5 preferred for QT measurement. Avoid leads with prominent U waves or T wave abnormalities'
          },
          {
            title: 'Measurement Points',
            content: 'Start: QRS onset (first deviation from baseline). End: T wave return to baseline using tangent method'
          },
          {
            title: 'Best Practices',
            content: 'Measure multiple beats, avoid PVCs, use calipers for accuracy, consider lead-specific variations'
          }
        ],
        layout: 'centered',
        backgroundColor: '#fef3c7',
        animation: 'slide'
      },
      {
        id: 'qt-correction-formulas',
        title: 'QT Correction Formulas',
        content: 'Heart rate affects QT interval - faster rates shorten QT. Multiple correction formulas exist: Bazett (QTc = QT/√RR), Fridericia (QTc = QT/∛RR), and others. Each has advantages and limitations.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'Bazett Formula (Most Common)',
            content: 'QTc = QT/√RR interval. Simple but over-corrects at extreme heart rates. Normal ≤440ms (men), ≤460ms (women)'
          },
          {
            title: 'Fridericia Formula',
            content: 'QTc = QT/∛RR interval. Better at extreme heart rates but less widely used. Similar normal values'
          },
          {
            title: 'Linear Corrections',
            content: 'Framingham and others use linear corrections. May be more accurate but require specific normal values'
          }
        ],
        layout: 'full',
        backgroundColor: '#ecfdf5'
      },
      {
        id: 'normal-qt-values',
        title: 'Normal QT Values',
        content: 'Normal QTc values: <440ms (men), <460ms (women). Borderline: 440-470ms (men), 460-480ms (women). Prolonged: >470ms (men), >480ms (women). Age, gender, and population affect normal ranges.',
        type: 'highlight',
        highlights: [
          '👨 Men: Normal <440ms, Borderline 440-470ms, Prolonged >470ms',
          '👩 Women: Normal <460ms, Borderline 460-480ms, Prolonged >480ms', 
          '👶 Children: Age-specific nomograms required, generally longer than adults'
        ],
        layout: 'centered',
        backgroundColor: '#fff7ed'
      },
      {
        id: 'qt-variability-factors',
        title: 'QT Interval Variability',
        content: 'QT varies with: autonomic tone (longer during sleep), electrolytes (hypokalemia, hypomagnesemia prolong), temperature (hypothermia prolongs), and individual genetics.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#f3f4f6'
      },
      {
        id: 'qt-measurement-pitfalls',
        title: 'QT Measurement Pitfalls',
        content: 'Common errors: Including U wave in measurement, using inappropriate leads, measuring during arrhythmias, not averaging multiple beats, ignoring rate-dependent changes.',
        type: 'tabs',
        tabs: [
          {
            title: 'Technical Errors',
            content: 'Wrong lead selection, including U waves, poor baseline determination, measurement during arrhythmias'
          },
          {
            title: 'Clinical Errors',
            content: 'Single beat measurement, ignoring rate changes, not considering medications or electrolytes'
          },
          {
            title: 'Interpretation Errors',
            content: 'Using wrong normal values, not considering age/gender, ignoring clinical context'
          }
        ],
        layout: 'full',
        backgroundColor: '#f8fafc'
      },
      {
        id: 'unit-1-summary',
        title: 'Unit 1 Summary: QT Fundamentals',
        content: 'MASTERED: QT interval measurement techniques, correction formulas, normal values, variability factors, and measurement pitfalls. Foundation set for LQTS recognition!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#dcfce7',
        textColor: '#166534',
        animation: 'fade'
      },
      
      // ============= UNIT 2: CONGENITAL LQTS (Slides 8-14) =============
      {
        id: 'congenital-lqts-overview',
        title: 'Congenital LQTS Overview',
        content: 'Inherited channelopathies affecting cardiac repolarization. Over 15 genetic types (LQT1-15), autosomal dominant inheritance, variable penetrance. Affects 1:2000 population with risk of sudden death.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade'
      },
      {
        id: 'lqt1-romano-ward',
        title: 'LQT1 (Romano-Ward Syndrome)',
        content: 'Most common type (40-55%), KCNQ1 gene mutation affecting IKs current. Exercise-triggered arrhythmias, especially swimming. Broad-based T waves, good beta-blocker response.',
        type: 'tabs',
        tabs: [
          {
            title: 'Genetics & Pathophysiology',
            content: 'KCNQ1 gene mutation → Reduced IKs current → Prolonged phase 3 repolarization → QT prolongation'
          },
          {
            title: 'Clinical Features',
            content: 'Exercise-induced syncope, swimming-triggered events, broad-based T waves, good response to beta-blockers'
          },
          {
            title: 'Management',
            content: 'Beta-blockers first-line, exercise restriction for swimming, ICD for high-risk patients'
          }
        ],
        layout: 'centered',
        backgroundColor: '#fee2e2',
        animation: 'slide'
      },
      {
        id: 'lqt2-herg',
        title: 'LQT2 (HERG-related)',
        content: 'Second most common (25-35%), KCNH2 gene mutation affecting IKr current. Triggered by acoustic stimuli, stress, arousal from sleep. Low-amplitude, notched T waves.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'Molecular Mechanism',
            content: 'KCNH2 mutation → Reduced IKr current → Delayed late repolarization → QT prolongation with T wave changes'
          },
          {
            title: 'Trigger Patterns',
            content: 'Acoustic triggers (alarms, phones), emotional stress, post-exercise recovery, arousal from sleep'
          },
          {
            title: 'ECG Morphology',
            content: 'Low-amplitude T waves, bifid/notched T waves, more prominent in precordial leads'
          }
        ],
        layout: 'full',
        backgroundColor: '#fef7ff'
      },
      {
        id: 'lqt3-scn5a',
        title: 'LQT3 (SCN5A-related)',
        content: 'Third most common (5-10%), SCN5A gene mutation affecting sodium channels. Events during sleep/rest, persistent late sodium current, broad-based T waves, poor beta-blocker response.',
        type: 'highlight',
        highlights: [
          '🌙 Sleep/rest-related events - Bradycardia-dependent arrhythmias',
          '⚡ Persistent INa current - Late sodium influx prolongs action potential',
          '💊 Sodium channel blockers - Mexiletine may be more effective than beta-blockers'
        ],
        layout: 'centered',
        backgroundColor: '#fef2f2'
      },
      {
        id: 'rare-lqts-types',
        title: 'Rare LQTS Types',
        content: 'LQT4-15: Various genes affecting calcium handling, potassium channels, and structural proteins. Often associated with syndromic features like deafness (Jervell-Lange-Nielsen) or developmental abnormalities.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#f0fdfa'
      },
      {
        id: 'jervell-lange-nielsen',
        title: 'Jervell-Lange-Nielsen Syndrome',
        content: 'Autosomal recessive LQTS with congenital deafness. Severe phenotype with QTc often >500ms. High risk of cardiac events in childhood. Requires aggressive management including ICD.',
        type: 'tabs',
        tabs: [
          {
            title: 'Genetics',
            content: 'Homozygous or compound heterozygous KCNQ1 or KCNE1 mutations causing severe IKs deficiency'
          },
          {
            title: 'Clinical Presentation',
            content: 'Profound congenital deafness, severe QT prolongation, early-onset syncope, high sudden death risk'
          },
          {
            title: 'Management Approach',
            content: 'Early ICD implantation, high-dose beta-blockers, careful activity restriction, family screening'
          }
        ],
        layout: 'full',
        backgroundColor: '#f1f5f9'
      },
      {
        id: 'unit-2-summary',
        title: 'Unit 2 Summary: Congenital LQTS',
        content: 'MASTERED: Genetic LQTS classification, LQT1-3 characteristics, trigger patterns, inheritance, and syndromic forms. Ready for acquired LQTS recognition!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#dcfce7',
        textColor: '#166534',
        animation: 'fade'
      },
      
      // ============= UNIT 3: ACQUIRED LQTS (Slides 15-21) =============
      {
        id: 'acquired-lqts-overview',
        title: 'Acquired LQTS Overview',
        content: 'Non-genetic QT prolongation from medications, electrolyte abnormalities, medical conditions. Often reversible but can be life-threatening. More common than congenital forms.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#166534',
        animation: 'fade'
      },
      {
        id: 'drug-induced-lqts',
        title: 'Drug-Induced LQTS',
        content: 'Most common acquired cause. Antiarrhythmics (Class IA, III), antibiotics (macrolides, fluoroquinolones), antipsychotics, antihistamines. Blocks HERG channels (IKr current).',
        type: 'tabs',
        tabs: [
          {
            title: 'High-Risk Medications',
            content: 'Antiarrhythmics: quinidine, sotalol, dofetilide. Antibiotics: erythromycin, levofloxacin. Psychiatric: haloperidol, quetiapine'
          },
          {
            title: 'Mechanism',
            content: 'Most block HERG potassium channels → Reduced IKr current → Prolonged repolarization → QT prolongation'
          },
          {
            title: 'Risk Factors',
            content: 'Female gender, bradycardia, hypokalemia, renal impairment, genetic predisposition'
          }
        ],
        layout: 'centered',
        backgroundColor: '#d1fae5',
        animation: 'slide'
      },
      {
        id: 'electrolyte-disorders',
        title: 'Electrolyte-Related QT Prolongation',
        content: 'Hypokalemia and hypomagnesemia most common. Hypocalcemia prolongs QT less commonly. Mechanisms involve altered repolarizing currents and cellular excitability.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'Hypokalemia Effects',
            content: 'Reduced IK1 and IKs currents → Prolonged phase 3 → QT prolongation with U waves and T wave flattening'
          },
          {
            title: 'Hypomagnesemia Impact', 
            content: 'Affects multiple ion channels → Prolongs repolarization → Often coexists with hypokalemia → High torsades risk'
          },
          {
            title: 'Hypocalcemia Pattern',
            content: 'Prolonged ST segment more than T wave → QT prolongation with preserved T wave morphology'
          }
        ],
        layout: 'full',
        backgroundColor: '#f0fdf4'
      },
      {
        id: 'medical-conditions-lqts',
        title: 'Medical Conditions Causing LQTS',
        content: 'Structural heart disease, myocardial infarction, heart failure, hypothyroidism, anorexia nervosa, subarachnoid hemorrhage. Multiple mechanisms affecting repolarization.',
        type: 'highlight',
        highlights: [
          '🫀 Structural heart disease - Fibrosis and remodeling affect repolarization',
          '🧠 CNS conditions - Autonomic imbalance from subarachnoid hemorrhage, stroke',
          '🦋 Endocrine disorders - Hypothyroidism, anorexia affect cellular metabolism'
        ],
        layout: 'centered',
        backgroundColor: '#ecfdf5'
      },
      {
        id: 'drug-drug-interactions',
        title: 'Drug-Drug Interactions',
        content: 'Cytochrome P450 inhibitors increase QT-prolonging drug levels. Common: ketoconazole + terfenadine, grapefruit juice interactions. Always check drug interactions in LQTS patients.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#f0fdfa'
      },
      {
        id: 'acquired-risk-factors',
        title: 'Acquired LQTS Risk Factors',
        content: 'Female gender (2-3x higher risk), age >65, bradycardia, renal/hepatic impairment, genetic predisposition, multiple QT-prolonging drugs. Risk increases with combination of factors.',
        type: 'tabs',
        tabs: [
          {
            title: 'Patient Factors',
            content: 'Female gender, elderly, bradycardia, structural heart disease, genetic susceptibility'
          },
          {
            title: 'Metabolic Factors',
            content: 'Renal impairment, hepatic dysfunction, electrolyte disorders, malnutrition'
          },
          {
            title: 'Pharmacological Factors',
            content: 'Multiple QT drugs, drug interactions, high doses, rapid IV administration'
          }
        ],
        layout: 'full',
        backgroundColor: '#f8fafc'
      },
      {
        id: 'unit-3-summary',
        title: 'Unit 3 Summary: Acquired LQTS',
        content: 'MASTERED: Drug-induced LQTS mechanisms, electrolyte effects, medical conditions, drug interactions, and risk factors. Ready for comprehensive risk assessment!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#dcfce7',
        textColor: '#166534',
        animation: 'fade'
      },
      
      // ============= UNIT 4: RISK ASSESSMENT (Slides 22-28) =============
      {
        id: 'lqts-risk-stratification',
        title: 'LQTS Risk Stratification',
        content: 'Risk assessment guides management decisions. Consider: QTc duration, syncope history, family history of sudden death, trigger identification, age at symptom onset.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f1f5f9',
        textColor: '#475569',
        animation: 'fade'
      },
      {
        id: 'schwartz-score',
        title: 'Schwartz Score for LQTS',
        content: 'Diagnostic scoring system: QTc duration (1-3 points), torsades history (2 points), T wave alternans (1 point), notched T waves (1 point), bradycardia (0.5 points), syncope (2 points), family history (1 point).',
        type: 'tabs',
        tabs: [
          {
            title: 'ECG Criteria (4.5 points max)',
            content: 'QTc ≥480ms (3pts), 460-479ms (2pts), 450-459ms (1pt). Torsades (2pts), T alternans (1pt), notched T (1pt), bradycardia (0.5pt)'
          },
          {
            title: 'Clinical Criteria (4 points max)',
            content: 'Syncope with stress (2pts), syncope without stress (1pt), congenital deafness (0.5pt)'
          },
          {
            title: 'Family History (1 point max)',
            content: 'Definite LQTS in family member (1pt), unexplained sudden death <30 years in family (0.5pt)'
          }
        ],
        layout: 'centered',
        backgroundColor: '#e2e8f0',
        animation: 'slide'
      },
      {
        id: 'high-risk-features',
        title: 'High-Risk LQTS Features',
        content: 'Markedly prolonged QTc (>500ms), recurrent syncope on therapy, family history of sudden death, early symptom onset, LQT2/LQT3 with specific triggers.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'Extreme QT Prolongation',
            content: 'QTc >500ms significantly increases risk. QTc >550ms associated with very high risk, especially in children'
          },
          {
            title: 'Therapy-Refractory Events',
            content: 'Breakthrough syncope on adequate beta-blocker therapy indicates high risk, consider ICD'
          },
          {
            title: 'Familial Factors',
            content: 'Multiple sudden deaths in family, early-onset symptoms, severe mutations increase individual risk'
          }
        ],
        layout: 'full',
        backgroundColor: '#f1f5f9'
      },
      {
        id: 'torsades-risk-factors',
        title: 'Torsades de Pointes Risk Factors',
        content: 'Female gender, hypokalemia, hypomagnesemia, bradycardia, heart disease, recent cardioversion, pause-dependent initiation. Risk highest with acquired LQTS.',
        type: 'highlight',
        highlights: [
          '👩 Female predominance - 70% of drug-induced torsades occur in women',
          '⚡ Electrolyte disorders - Hypokalemia/hypomagnesemia markedly increase risk',
          '💓 Bradycardia dependence - Slow rates predispose to early afterdepolarizations'
        ],
        layout: 'centered',
        backgroundColor: '#f8fafc'
      },
      {
        id: 'age-related-considerations',
        title: 'Age-Related Risk Considerations',
        content: 'Children: Higher risk with longer QTc, symptoms often exercise-related. Adults: Risk varies by genotype and triggers. Elderly: Acquired forms more common, drug sensitivity increased.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#f9fafb'
      },
      {
        id: 'genotype-phenotype-correlation',
        title: 'Genotype-Phenotype Risk Correlation',
        content: 'LQT1: Exercise-related events, good beta-blocker response. LQT2: Stress/acoustic triggers, moderate drug response. LQT3: Rest-related events, poor beta-blocker response.',
        type: 'tabs',
        tabs: [
          {
            title: 'LQT1 Risk Profile',
            content: 'Lower risk overall, exercise-triggered, excellent beta-blocker response, swimming highest risk activity'
          },
          {
            title: 'LQT2 Risk Profile',
            content: 'Moderate risk, stress/acoustic triggers, good beta-blocker response, post-partum risk in women'
          },
          {
            title: 'LQT3 Risk Profile',
            content: 'Higher risk, rest/sleep events, poor beta-blocker response, consider sodium channel blockers'
          }
        ],
        layout: 'full',
        backgroundColor: '#f0f9ff'
      },
      {
        id: 'unit-4-summary',
        title: 'Unit 4 Summary: Risk Assessment',
        content: 'MASTERED: Risk stratification tools, Schwartz scoring, high-risk features, torsades predictors, age considerations, and genotype-phenotype correlations. Ready for management strategies!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#dcfce7',
        textColor: '#166534',
        animation: 'fade'
      },
      
      // ============= UNIT 5: MANAGEMENT STRATEGIES (Slides 29-35) =============
      {
        id: 'lqts-management-overview',
        title: 'LQTS Management Overview',
        content: 'Comprehensive approach: lifestyle modifications, pharmacotherapy, device therapy. Goals: prevent arrhythmic events, improve quality of life, reduce sudden death risk.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f4ff',
        textColor: '#3730a3',
        animation: 'fade'
      },
      {
        id: 'lifestyle-modifications',
        title: 'Lifestyle Modifications',
        content: 'Avoid QT-prolonging drugs, maintain normal electrolytes, avoid triggers (genotype-specific), consider activity restrictions. Critical first-line intervention for all LQTS patients.',
        type: 'tabs',
        tabs: [
          {
            title: 'Drug Avoidance',
            content: 'Comprehensive drug list review, CredibleMeds.org consultation, pharmacy alerts, medical alert bracelet'
          },
          {
            title: 'Electrolyte Management',
            content: 'Maintain K+ >4.0 mEq/L, Mg2+ >2.0 mg/dL, regular monitoring, supplements as needed'
          },
          {
            title: 'Trigger Avoidance',
            content: 'LQT1: Swimming restrictions. LQT2: Avoid loud alarms, acoustic stimuli. LQT3: Avoid bradycardia'
          }
        ],
        layout: 'centered',
        backgroundColor: '#e0e7ff',
        animation: 'slide'
      },
      {
        id: 'beta-blocker-therapy',
        title: 'Beta-Blocker Therapy',
        content: 'First-line pharmacotherapy for congenital LQTS. Nadolol or propranolol preferred (longer half-life). Target heart rate reduction of 20-25%. Most effective in LQT1.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'Beta-Blocker Selection',
            content: 'Nadolol: Longest half-life, better compliance. Propranolol: Well-studied, good efficacy. Avoid atenolol (short half-life)'
          },
          {
            title: 'Dosing Strategy',
            content: 'Start low, increase gradually. Target 20-25% heart rate reduction. Maximum tolerated dose often needed'
          },
          {
            title: 'Efficacy by Genotype',
            content: 'LQT1: Highly effective (80-90% event reduction). LQT2: Moderately effective. LQT3: Least effective'
          }
        ],
        layout: 'full',
        backgroundColor: '#f0f9ff'
      },
      {
        id: 'alternative-medications',
        title: 'Alternative Medications',
        content: 'Sodium channel blockers (mexiletine) for LQT3, potassium supplementation, magnesium, ranolazine. Consider when beta-blockers ineffective or contraindicated.',
        type: 'highlight',
        highlights: [
          '⚡ Mexiletine for LQT3 - Blocks late sodium current, shortens QT interval',
          '🧪 Potassium supplementation - Maintain >4.0 mEq/L, may shorten QT',
          '💊 Ranolazine - Late sodium blocker, may benefit LQT3 patients'
        ],
        layout: 'centered',
        backgroundColor: '#fef2f2'
      },
      {
        id: 'icd-therapy',
        title: 'ICD Therapy for LQTS',
        content: 'Reserved for highest-risk patients: recurrent syncope on therapy, aborted sudden death, high-risk genotypes/phenotypes. Combine with beta-blockers and lifestyle measures.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#fafafa'
      },
      {
        id: 'acquired-lqts-management',
        title: 'Acquired LQTS Management',
        content: 'Identify and eliminate offending agents, correct electrolytes, treat underlying conditions. Temporary pacing for bradycardia-dependent torsades. Usually reversible.',
        type: 'tabs',
        tabs: [
          {
            title: 'Immediate Actions',
            content: 'Discontinue offending drugs, correct K+/Mg2+, increase heart rate if bradycardic, monitor telemetry'
          },
          {
            title: 'Supportive Care',
            content: 'IV magnesium 2g bolus, temporary pacing for recurrent torsades, avoid class IA/III antiarrhythmics'
          },
          {
            title: 'Long-term Prevention',
            content: 'Drug allergy alerts, careful prescribing review, genetic testing if family history suggests congenital form'
          }
        ],
        layout: 'full',
        backgroundColor: '#f8fafc'
      },
      {
        id: 'unit-5-summary',
        title: 'Unit 5 Summary: Management Strategies',
        content: 'MASTERED: Lifestyle modifications, beta-blocker therapy, alternative medications, ICD indications, and acquired LQTS management. Comprehensive treatment approach achieved!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#dcfce7',
        textColor: '#166534',
        animation: 'fade'
      },
      
      // ============= UNIT 6: SPECIAL CONSIDERATIONS (Slides 36-42) =============
      {
        id: 'special-populations-overview',
        title: 'Special Populations in LQTS',
        content: 'Unique considerations for pregnancy, pediatrics, athletes, and elderly patients. Modified risk profiles require tailored management approaches.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f1f5f9',
        textColor: '#475569',
        animation: 'fade'
      },
      {
        id: 'pregnancy-lqts',
        title: 'LQTS in Pregnancy',
        content: 'Increased risk during pregnancy and postpartum, especially LQT2. Beta-blockers (except atenolol) safe in pregnancy. Avoid QT-prolonging medications, monitor electrolytes.',
        type: 'tabs',
        tabs: [
          {
            title: 'Pregnancy Risks',
            content: 'Increased events in LQT2 during pregnancy, highest risk in first 9 months postpartum'
          },
          {
            title: 'Medication Safety',
            content: 'Propranolol and metoprolol safe. Avoid atenolol (IUGR risk). Continue beta-blockers throughout pregnancy'
          },
          {
            title: 'Delivery Planning',
            content: 'Epidural preferred over general anesthesia, avoid QT-prolonging antibiotics, monitor postpartum'
          }
        ],
        layout: 'centered',
        backgroundColor: '#e2e8f0',
        animation: 'slide'
      },
      {
        id: 'pediatric-lqts',
        title: 'Pediatric LQTS Management',
        content: 'Children have higher event rates with longer QTc. Age-specific nomograms for QTc interpretation. Beta-blockers effective but dosing challenging. ICD consideration earlier than adults.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'Age-Specific Assessment',
            content: 'Use pediatric QTc nomograms, higher normal values in infants, consider heart rate variability'
          },
          {
            title: 'Treatment Challenges',
            content: 'Weight-based dosing, liquid formulations, compliance issues, activity restriction acceptance'
          },
          {
            title: 'ICD Considerations',
            content: 'Earlier implantation for high-risk children, epicardial leads if too small, psychological support'
          }
        ],
        layout: 'full',
        backgroundColor: '#f1f5f9'
      },
      {
        id: 'athletes-lqts',
        title: 'Athletes with LQTS',
        content: 'Competitive sports participation controversial. Risk varies by genotype, QTc duration, symptom history. Individualized decisions with shared decision-making approach.',
        type: 'highlight',
        highlights: [
          '🏃 LQT1 highest risk - Swimming and exercise-related triggers most dangerous',
          '⚽ Sport-specific risks - Contact sports, swimming, high-intensity activities need evaluation',
          '🎯 Individual assessment - Consider genotype, symptoms, family history, QTc duration'
        ],
        layout: 'centered',
        backgroundColor: '#f8fafc'
      },
      {
        id: 'elderly-lqts',
        title: 'LQTS in the Elderly',
        content: 'Acquired forms more common, increased drug sensitivity, comorbidities complicate management. Careful medication review essential. Consider age-related pharmacokinetic changes.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#f9fafb'
      },
      {
        id: 'family-screening',
        title: 'Family Screening and Counseling',
        content: 'Genetic testing and cascade screening essential for congenital LQTS families. ECG screening, genetic counseling, reproductive planning. Consider psychological impact.',
        type: 'tabs',
        tabs: [
          {
            title: 'Screening Strategy',
            content: 'First-degree relatives: ECG + genetic testing if proband mutation known. Extend to other relatives if positive'
          },
          {
            title: 'Genetic Counseling',
            content: 'Inheritance patterns, reproductive risks, presymptomatic testing considerations, family planning'
          },
          {
            title: 'Psychological Support',
            content: 'Address anxiety, activity limitations, sudden death fears, family guilt, quality of life'
          }
        ],
        layout: 'full',
        backgroundColor: '#f0f9ff'
      },
      {
        id: 'unit-6-summary',
        title: 'Unit 6 Summary: Special Considerations',
        content: 'MASTERED: Pregnancy management, pediatric considerations, athletic participation, elderly care, and family screening. Complete LQTS expertise achieved!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#dcfce7',
        textColor: '#166534',
        animation: 'fade'
      }
    ]
  },
  
  // ============= ENHANCED DUOLINGO-STYLE TASKS (Final Assessment Only) =============
  tasks: [
    
    // ==================== FINAL MASTERY ASSESSMENT ====================
    {
      id: 'final-lqts-mastery-assessment',
      type: 'final-assessment',
      xp: 50,
      audio: {
        mainNarration: {
          audioUrl: '/lessonaudio/lqts/mastery-celebration.mp3',
          duration: 15,
          transcript: "Outstanding work mastering Long QT Syndrome! You've learned QT measurement, genetic classification, risk assessment, and comprehensive management strategies. Now demonstrate your expertise with this comprehensive assessment."
        }
      },
      images: {
        mainImage: '/ecg/ecg_dataset_clean/LQTS_long_QT_syndrome/clean_00256_long_QT_syndrome.png',
        slideImages: []
      },
      content: {
        prerequisiteMessage: "🎯 Final Assessment: Complete all 6 units to unlock your Long QT Syndrome Mastery Certificate!",
        questions: [
          {
            id: "qtc-calculation-assessment",
            type: "multiple-choice",
            question: "An ECG shows QT interval of 520ms at heart rate 75 bpm (RR = 800ms). Using Bazett formula, the QTc is:",
            options: [
              "480ms - Normal",
              "520ms - No correction needed", 
              "582ms - Significantly prolonged",
              "460ms - Borderline"
            ],
            correctAnswer: 2,
            explanation: "Correct! QTc = QT/√RR = 520/√0.8 = 520/0.894 = 582ms. This is significantly prolonged (>480ms in women, >470ms in men) and indicates high LQTS risk.",
            imageUrl: "/ecg/ecg_dataset_clean/LQTS_long_QT_syndrome/clean_00189_long_QT_syndrome.png"
          },
          {
            id: "lqt1-characteristics-assessment",
            type: "multiple-choice",
            question: "A 16-year-old swimmer has recurrent syncope during training. ECG shows QTc 490ms with broad-based T waves. Most likely LQTS type:",
            options: [
              "LQT1 (KCNQ1 mutation)",
              "LQT2 (KCNH2 mutation)",
              "LQT3 (SCN5A mutation)",
              "Acquired LQTS from electrolyte disorder"
            ],
            correctAnswer: 0,
            explanation: "Correct! LQT1 characteristics: exercise-triggered events (especially swimming), broad-based T waves, KCNQ1 mutation affecting IKs current. Most common congenital type with good beta-blocker response.",
            imageUrl: "/lessonimages/lqt1-ecg-pattern.png"
          },
          {
            id: "drug-induced-lqts-assessment",
            type: "multiple-choice",
            question: "A 65-year-old woman on quinidine develops torsades de pointes. Which factors most likely contributed?",
            options: [
              "Male gender and hyperkalemia",
              "Female gender and hypokalemia",
              "Young age and hypercalcemia",
              "Beta-blocker use and tachycardia"
            ],
            correctAnswer: 1,
            explanation: "Correct! Drug-induced torsades risk factors: female gender (70% of cases), hypokalemia, quinidine (Class IA antiarrhythmic), elderly age. Women have higher drug-induced LQTS susceptibility.",
            imageUrl: "/ecg/ecg_dataset_clean/TDP_Torsades_de_Pointes/clean_00567_Torsades_de_Pointes.png"
          },
          {
            id: "schwartz-score-assessment",
            type: "multiple-choice",
            question: "Patient has QTc 485ms, exercise-induced syncope, and family history of sudden death. Schwartz score is:",
            options: [
              "3 points - Low probability LQTS",
              "4 points - Intermediate probability LQTS",
              "5 points - High probability LQTS", 
              "6 points - Definite LQTS"
            ],
            correctAnswer: 2,
            explanation: "Correct! Schwartz scoring: QTc 485ms = 2 points, syncope with stress = 2 points, family sudden death = 1 point. Total = 5 points = High probability LQTS (≥4 points).",
            imageUrl: "/lessonimages/schwartz-score-calculator.png"
          },
          {
            id: "lqt3-management-assessment",
            type: "multiple-choice",
            question: "A patient with LQT3 (SCN5A mutation) has breakthrough events on beta-blockers. Best additional therapy:",
            options: [
              "Increase beta-blocker dose",
              "Add mexiletine (sodium channel blocker)",
              "Add amiodarone",
              "Recommend exercise increase"
            ],
            correctAnswer: 1,
            explanation: "Correct! LQT3 has poor beta-blocker response due to persistent late sodium current. Mexiletine blocks late INa, shortens QT, and is specifically effective in LQT3 patients.",
            imageUrl: "/lessonimages/lqt3-mexiletine-response.png"
          },
          {
            id: "pregnancy-lqts-assessment",
            type: "multiple-choice",
            question: "A pregnant woman with LQT2 asks about medication safety. Best recommendation:",
            options: [
              "Stop all medications during pregnancy",
              "Continue propranolol, avoid atenolol",
              "Switch to atenolol for better control",
              "Use antiarrhythmics instead of beta-blockers"
            ],
            correctAnswer: 1,
            explanation: "Correct! Propranolol and metoprolol are safe in pregnancy. Avoid atenolol (IUGR risk). LQT2 has increased risk during pregnancy/postpartum, so continue beta-blocker protection.",
            imageUrl: "/lessonimages/pregnancy-lqts-management.png"
          },
          {
            id: "high-risk-features-assessment",
            type: "multiple-choice",
            question: "Which feature indicates highest risk for cardiac events in LQTS?",
            options: [
              "QTc 470ms in asymptomatic patient",
              "QTc 520ms with recurrent syncope on therapy",
              "Family history without personal symptoms",
              "Single syncopal episode with QTc 450ms"
            ],
            correctAnswer: 1,
            explanation: "Correct! QTc >500ms + breakthrough syncope on therapy = very high risk requiring ICD consideration. Extreme QT prolongation with therapy-refractory symptoms indicates severe phenotype.",
            imageUrl: "/lessonimages/high-risk-lqts-features.png"
          },
          {
            id: "acquired-lqts-management-assessment",
            type: "multiple-choice",
            question: "A patient develops torsades after starting erythromycin with hypokalemia. Best immediate management:",
            options: [
              "Continue erythromycin, add beta-blocker",
              "Stop erythromycin, give IV magnesium, correct K+",
              "Add class IA antiarrhythmic",
              "Start immediate beta-blocker therapy"
            ],
            correctAnswer: 1,
            explanation: "Correct! Acquired LQTS management: Remove offending drug (erythromycin), IV magnesium 2g bolus, correct electrolytes (K+ >4.0, Mg2+ >2.0). Avoid class IA/III antiarrhythmics.",
            imageUrl: "/ecg/ecg_dataset_clean/TDP_Torsades_de_Pointes/clean_00623_Torsades_de_Pointes.png"
          }
        ]
      }
    }
  ],
  completed: false,
  attempts: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
