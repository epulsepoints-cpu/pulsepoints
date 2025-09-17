import { Lesson } from '@/types/learning';

export const optimizedLesson76: Lesson = {
  id: 'lesson-76-optimized-6unit',
  moduleId: 'module-10',
  title: "Pulmonary Embolism ECG Recognition & Risk Assessment",
  description: "Master PE ECG patterns, differentiate from other conditions, and assess hemodynamic severity",
  order: 76,
  estimatedTime: 45,
  content: {
    type: 'mixed',
    introduction: "Master pulmonary embolism ECG interpretation - a life-saving skill for recognizing acute PE! Learn classic and subtle ECG signs, differentiate from myocardial infarction, assess hemodynamic severity, and integrate ECG findings with clinical probability to guide urgent management decisions.",
    summary: "Pulmonary embolism mastery: ECG pattern recognition, hemodynamic assessment, differential diagnosis, and integrated clinical decision-making.",
    keyPoints: [
      "Recognize classic PE ECG patterns and subtle signs",
      "Differentiate PE from MI and other conditions", 
      "Assess hemodynamic severity from ECG changes",
      "Integrate ECG with clinical probability scoring"
    ],
    resources: [
      { title: "PE ECG pattern analyzer", url: "/resources/pe-ecg-analyzer", type: "tool", description: "Interactive PE ECG pattern recognition tool" },
      { title: "Wells score calculator", url: "/resources/wells-pe-score", type: "tool", description: "Clinical probability assessment for PE" },
      { title: "PE management protocols", url: "/resources/pe-management", type: "reference", description: "Evidence-based PE diagnosis and treatment guidelines" }
    ],
    sections: [
      {
        id: 'unit-1-pe-fundamentals',
        title: "Unit 1: Pulmonary Embolism Fundamentals",
        content: "Understand PE pathophysiology and cardiovascular impact"
      },
      {
        id: 'unit-2-classic-ecg-patterns',
        title: "Unit 2: Classic ECG Patterns", 
        content: "Master S1Q3T3, right heart strain, and acute cor pulmonale signs"
      },
      {
        id: 'unit-3-subtle-ecg-signs',
        title: "Unit 3: Subtle ECG Signs",
        content: "Recognize non-specific but important PE ECG findings"
      },
      {
        id: 'unit-4-differential-diagnosis',
        title: "Unit 4: Differential Diagnosis",
        content: "Differentiate PE from MI, pericarditis, and other conditions"
      },
      {
        id: 'unit-5-severity-assessment',
        title: "Unit 5: Severity Assessment",
        content: "Assess hemodynamic impact and risk stratification from ECG"
      },
      {
        id: 'unit-6-clinical-integration',
        title: "Unit 6: Clinical Integration",
        content: "Integrate ECG findings with clinical scoring and management"
      }
    ],
    slides: [
      
      // ============= UNIT 1: PULMONARY EMBOLISM FUNDAMENTALS (Slides 1-7) =============
      {
        id: 'pe-overview',
        title: 'Pulmonary Embolism Overview',
        content: 'Blockage of pulmonary arteries causing acute right heart strain, increased pulmonary vascular resistance, and potential cardiovascular collapse. ECG changes reflect right heart response to acute pressure overload.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade'
      },
      {
        id: 'pathophysiology-mechanisms',
        title: 'Pathophysiology Mechanisms',
        content: 'Embolic obstruction increases pulmonary vascular resistance → acute right heart strain → right ventricular dilatation → ECG changes reflecting right heart overload and ischemia.',
        type: 'tabs',
        tabs: [
          {
            title: 'Hemodynamic Impact',
            content: 'Increased PVR → Acute RV strain → RV dilatation → Decreased CO → Potential shock'
          },
          {
            title: 'ECG Manifestations',
            content: 'Right axis deviation, RBBB pattern, T wave inversions, S1Q3T3 pattern'
          },
          {
            title: 'Severity Correlation',
            content: 'Larger clot burden → More severe ECG changes → Higher risk of hemodynamic collapse'
          }
        ],
        layout: 'centered',
        backgroundColor: '#fef3c7',
        animation: 'slide'
      },
      {
        id: 'epidemiology-risk-factors',
        title: 'Epidemiology & Risk Factors',
        content: 'PE affects 600,000 Americans annually. Risk factors: immobilization, surgery, malignancy, pregnancy, oral contraceptives, genetic thrombophilia. High mortality if untreated.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'Major Risk Factors',
            content: 'Recent surgery, prolonged immobilization, active malignancy, pregnancy/postpartum, major trauma'
          },
          {
            title: 'Moderate Risk Factors',
            content: 'Oral contraceptives, HRT, long flights, obesity, smoking, heart failure'
          },
          {
            title: 'Clinical Impact',
            content: 'Third leading cardiovascular cause of death, 30% mortality if untreated, <2% if treated promptly'
          }
        ],
        layout: 'full',
        backgroundColor: '#ecfdf5'
      },
      {
        id: 'clinical-presentation-spectrum',
        title: 'Clinical Presentation Spectrum',
        content: 'Ranges from asymptomatic to massive PE with shock. Common symptoms: dyspnea, chest pain, tachycardia. ECG changes correlate with hemodynamic severity.',
        type: 'highlight',
        highlights: [
          '💨 Dyspnea - Most common symptom (80%), often sudden onset',
          '⚡ Tachycardia - Sinus tachycardia most frequent ECG finding',
          '💔 Chest pain - May mimic MI, often pleuritic in nature'
        ],
        layout: 'centered',
        backgroundColor: '#fff7ed'
      },
      {
        id: 'pe-classification-severity',
        title: 'PE Classification by Severity',
        content: 'Massive PE: hemodynamic instability, shock. Submassive PE: RV dysfunction without shock. Low-risk PE: normal hemodynamics. ECG severity correlates with clinical classification.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#f3f4f6'
      },
      {
        id: 'diagnostic-challenges',
        title: 'Diagnostic Challenges',
        content: 'PE is the "great masquerader" - can mimic MI, pneumonia, anxiety. ECG may be normal in 30% of cases. High clinical suspicion essential, ECG supports but rarely diagnostic alone.',
        type: 'tabs',
        tabs: [
          {
            title: 'Diagnostic Difficulty',
            content: 'Non-specific symptoms, normal ECG in 30%, can mimic multiple conditions'
          },
          {
            title: 'ECG Limitations',
            content: 'Neither sensitive nor specific alone, but valuable when integrated with clinical assessment'
          },
          {
            title: 'Clinical Integration',
            content: 'Combine ECG with Wells score, D-dimer, imaging for optimal diagnosis'
          }
        ],
        layout: 'full',
        backgroundColor: '#f8fafc'
      },
      {
        id: 'unit-1-summary',
        title: 'Unit 1 Summary: PE Fundamentals',
        content: 'MASTERED: PE pathophysiology, risk factors, clinical spectrum, severity classification, and diagnostic challenges. Foundation set for ECG pattern recognition!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#dcfce7',
        textColor: '#166534',
        animation: 'fade'
      },
      
      // ============= UNIT 2: CLASSIC ECG PATTERNS (Slides 8-14) =============
      {
        id: 'classic-patterns-overview',
        title: 'Classic PE ECG Patterns',
        content: 'Classic findings include S1Q3T3 pattern, right axis deviation, RBBB, T wave inversions in precordial leads. These patterns reflect acute right heart strain and are more common in severe PE.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade'
      },
      {
        id: 's1q3t3-pattern',
        title: 'S1Q3T3 Pattern',
        content: 'Classic triad: prominent S wave in lead I, Q wave in lead III, T wave inversion in lead III. Seen in 20% of PE cases. Reflects acute right heart strain pattern.',
        type: 'tabs',
        tabs: [
          {
            title: 'Component Analysis',
            content: 'S1: Deep S wave in lead I. Q3: Q wave in lead III. T3: T wave inversion in lead III'
          },
          {
            title: 'Pathophysiology',
            content: 'Reflects acute RV strain → Right axis deviation → Characteristic lead I/III pattern'
          },
          {
            title: 'Clinical Significance',
            content: 'Present in ~20% of PE, more common with larger emboli, indicates significant RV strain'
          }
        ],
        layout: 'centered',
        backgroundColor: '#fee2e2',
        animation: 'slide'
      },
      {
        id: 'right-axis-deviation',
        title: 'Right Axis Deviation',
        content: 'QRS axis >90° indicates acute RV strain. May be new finding compared to prior ECGs. Often accompanies other signs of right heart strain in moderate-severe PE.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'Axis Measurement',
            content: 'Normal axis 0-90°, RAD >90°, extreme RAD >120°. Use leads I and aVF for quick assessment'
          },
          {
            title: 'Acute vs Chronic',
            content: 'New RAD suggests acute process like PE. Chronic RAD from COPD, congenital disease'
          },
          {
            title: 'Severity Correlation',
            content: 'More pronounced RAD often correlates with larger PE and greater hemodynamic impact'
          }
        ],
        layout: 'full',
        backgroundColor: '#fef7ff'
      },
      {
        id: 'rbbb-pattern',
        title: 'Right Bundle Branch Block Pattern',
        content: 'Complete or incomplete RBBB may develop with acute PE. Reflects severe right heart strain. Often transient, may resolve with treatment. More common in massive PE.',
        type: 'highlight',
        highlights: [
          '📈 RSR\' pattern - Classic RBBB morphology in V1-V2 with PE',
          '⏱️ Acute development - New RBBB in appropriate clinical context highly suspicious',
          '🔄 Reversibility - May resolve with successful PE treatment'
        ],
        layout: 'centered',
        backgroundColor: '#fef2f2'
      },
      {
        id: 'precordial-t-inversions',
        title: 'Precordial T Wave Inversions',
        content: 'T wave inversions in V1-V4 (right precordial leads) reflect RV strain. May extend to V5-V6 in severe cases. Pattern differs from anterior MI by lack of ST elevation.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#f0f9ff'
      },
      {
        id: 'p-pulmonale',
        title: 'P Pulmonale Pattern',
        content: 'Peaked P waves in leads II, III, aVF indicating acute right atrial overload. P wave amplitude >2.5mm suggests pulmonary hypertension. May be transient with acute PE.',
        type: 'tabs',
        tabs: [
          {
            title: 'Morphology',
            content: 'Tall, peaked P waves >2.5mm in inferior leads, often narrow and pointed'
          },
          {
            title: 'Pathophysiology',
            content: 'Acute RA pressure overload from increased PVR → Enlarged P waves'
          },
          {
            title: 'Clinical Correlation',
            content: 'Suggests hemodynamically significant PE with right heart involvement'
          }
        ],
        layout: 'full',
        backgroundColor: '#f1f5f9'
      },
      {
        id: 'unit-2-summary',
        title: 'Unit 2 Summary: Classic Patterns',
        content: 'MASTERED: S1Q3T3 pattern, right axis deviation, RBBB, precordial T inversions, and P pulmonale. Classic PE pattern recognition achieved!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#dcfce7',
        textColor: '#166534',
        animation: 'fade'
      },
      
      // ============= UNIT 3: SUBTLE ECG SIGNS (Slides 15-21) =============
      {
        id: 'subtle-signs-overview',
        title: 'Subtle ECG Signs Overview',
        content: 'Many PE cases show subtle, non-specific changes: sinus tachycardia, non-specific ST-T changes, atrial arrhythmias. These findings, while common, require high clinical suspicion.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#166534',
        animation: 'fade'
      },
      {
        id: 'sinus-tachycardia-significance',
        title: 'Sinus Tachycardia Significance',
        content: 'Most common ECG finding in PE (70% of cases). Results from hypoxemia, pain, anxiety, and hemodynamic compromise. Rate often 100-130 bpm, rarely >150 bpm.',
        type: 'tabs',
        tabs: [
          {
            title: 'Prevalence',
            content: 'Present in ~70% of PE cases, most frequent ECG abnormality'
          },
          {
            title: 'Mechanisms',
            content: 'Hypoxemia, sympathetic activation, pain response, hemodynamic compensation'
          },
          {
            title: 'Limitations',
            content: 'Non-specific finding, common in many conditions, requires clinical context'
          }
        ],
        layout: 'centered',
        backgroundColor: '#d1fae5',
        animation: 'slide'
      },
      {
        id: 'non-specific-st-changes',
        title: 'Non-Specific ST-T Changes',
        content: 'Subtle ST depression or T wave flattening, especially in precordial leads. May reflect subendocardial ischemia from reduced cardiac output or hypoxemia.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'ST Depression Patterns',
            content: 'Subtle horizontal or downsloping ST depression, often in V4-V6'
          },
          {
            title: 'T Wave Changes',
            content: 'Flattening or mild inversion, non-specific but may indicate RV strain'
          },
          {
            title: 'Clinical Context',
            content: 'These changes alone not diagnostic, but supportive in appropriate clinical setting'
          }
        ],
        layout: 'full',
        backgroundColor: '#f0fdf4'
      },
      {
        id: 'atrial-arrhythmias',
        title: 'Atrial Arrhythmias',
        content: 'Atrial fibrillation or flutter may occur with PE, especially in elderly patients. Results from acute right atrial pressure overload and hypoxemia.',
        type: 'highlight',
        highlights: [
          '🔄 Atrial fibrillation - May be new-onset with acute PE',
          '📈 Atrial flutter - Less common but can occur with severe PE',
          '👴 Age correlation - More frequent in elderly patients with PE'
        ],
        layout: 'centered',
        backgroundColor: '#ecfdf5'
      },
      {
        id: 'qr-pattern-v1',
        title: 'QR Pattern in V1',
        content: 'Prominent R wave or QR pattern in V1 may indicate acute RV dilatation. This pattern reflects the rightward forces from acutely enlarged right ventricle.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#f0fdfa'
      },
      {
        id: 'clockwise-rotation',
        title: 'Clockwise Rotation',
        content: 'Poor R wave progression V1-V6 with persistent S waves laterally. Reflects RV dilatation pushing heart clockwise. Transition zone shifts rightward (R=S in V5-V6).',
        type: 'tabs',
        tabs: [
          {
            title: 'Pattern Recognition',
            content: 'Poor R progression, persistent S waves in lateral leads, late transition'
          },
          {
            title: 'Mechanism',
            content: 'Acute RV dilatation → Clockwise cardiac rotation → Altered precordial morphology'
          },
          {
            title: 'Differential',
            content: 'Must differentiate from chronic conditions like COPD, anterior MI'
          }
        ],
        layout: 'full',
        backgroundColor: '#f8fafc'
      },
      {
        id: 'unit-3-summary',
        title: 'Unit 3 Summary: Subtle Signs',
        content: 'MASTERED: Sinus tachycardia, non-specific ST-T changes, atrial arrhythmias, QR pattern in V1, and clockwise rotation. Subtle PE sign recognition achieved!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#dcfce7',
        textColor: '#166534',
        animation: 'fade'
      },
      
      // ============= UNIT 4: DIFFERENTIAL DIAGNOSIS (Slides 22-28) =============
      {
        id: 'differential-overview',
        title: 'Differential Diagnosis Overview',
        content: 'PE ECG changes can mimic many conditions: acute MI, pericarditis, pneumonia, anxiety. Systematic approach considering clinical context, timing, and pattern specifics essential.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f1f5f9',
        textColor: '#475569',
        animation: 'fade'
      },
      {
        id: 'pe-vs-acute-mi',
        title: 'PE vs Acute MI Differentiation',
        content: 'Critical distinction: PE shows right heart strain patterns, MI shows territorial changes. PE lacks reciprocal changes, has different T wave patterns, different clinical presentation.',
        type: 'tabs',
        tabs: [
          {
            title: 'ECG Differences',
            content: 'PE: Right heart strain, S1Q3T3. MI: Territorial ST elevation, reciprocal changes'
          },
          {
            title: 'Clinical Context',
            content: 'PE: Sudden dyspnea, risk factors. MI: Chest pressure, cardiac risk factors'
          },
          {
            title: 'Timing',
            content: 'PE: Acute onset dyspnea. MI: Progressive chest discomfort'
          }
        ],
        layout: 'centered',
        backgroundColor: '#e2e8f0',
        animation: 'slide'
      },
      {
        id: 'pe-vs-pericarditis',
        title: 'PE vs Pericarditis Patterns',
        content: 'Pericarditis shows diffuse ST elevation with PR depression. PE shows right heart strain without widespread ST elevation. Clinical presentation differs markedly.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'ECG Patterns',
            content: 'Pericarditis: Diffuse ST elevation, PR depression. PE: Right heart strain, no widespread ST elevation'
          },
          {
            title: 'Clinical Features',
            content: 'Pericarditis: Positional chest pain, friction rub. PE: Sudden dyspnea, tachycardia'
          },
          {
            title: 'Evolution',
            content: 'Pericarditis: Four-stage evolution. PE: Changes resolve with treatment'
          }
        ],
        layout: 'full',
        backgroundColor: '#f1f5f9'
      },
      {
        id: 'pe-vs-anxiety',
        title: 'PE vs Anxiety/Panic Attack',
        content: 'Both cause tachycardia and dyspnea. PE may have specific ECG changes (right heart strain), anxiety typically shows only sinus tachycardia. Clinical risk factors crucial.',
        type: 'highlight',
        highlights: [
          '⚡ Tachycardia - Both conditions, but PE may have other ECG changes',
          '🫁 Dyspnea pattern - PE: sudden severe, Anxiety: gradual with hyperventilation',
          '📊 Risk factors - PE: immobilization, surgery. Anxiety: psychiatric history'
        ],
        layout: 'centered',
        backgroundColor: '#f8fafc'
      },
      {
        id: 'pe-vs-pneumonia',
        title: 'PE vs Pneumonia',
        content: 'Both cause dyspnea and tachycardia. Pneumonia typically lacks specific ECG changes unless severe with right heart involvement. Chest X-ray and clinical presentation help differentiate.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#f9fafb'
      },
      {
        id: 'pe-vs-copd-exacerbation',
        title: 'PE vs COPD Exacerbation',
        content: 'COPD patients at higher PE risk. Chronic COPD shows baseline right heart strain. New ECG changes in COPD patient should raise PE suspicion, especially with clinical deterioration.',
        type: 'tabs',
        tabs: [
          {
            title: 'Baseline Differences',
            content: 'COPD: Chronic RAD, P pulmonale. PE: New changes from baseline ECG'
          },
          {
            title: 'Clinical Clues',
            content: 'COPD: Gradual worsening, sputum. PE: Sudden onset, clear precipitant'
          },
          {
            title: 'Risk Interaction',
            content: 'COPD patients at higher PE risk due to immobilization, inflammation'
          }
        ],
        layout: 'full',
        backgroundColor: '#f0f9ff'
      },
      {
        id: 'unit-4-summary',
        title: 'Unit 4 Summary: Differential Diagnosis',
        content: 'MASTERED: PE vs MI, pericarditis, anxiety, pneumonia, and COPD differentiation. Critical diagnostic differentiation skills achieved!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#dcfce7',
        textColor: '#166534',
        animation: 'fade'
      },
      
      // ============= UNIT 5: SEVERITY ASSESSMENT (Slides 29-35) =============
      {
        id: 'severity-assessment-overview',
        title: 'Severity Assessment Overview',
        content: 'ECG findings correlate with PE severity and hemodynamic impact. More extensive ECG changes suggest larger clot burden and higher risk of adverse outcomes.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f4ff',
        textColor: '#3730a3',
        animation: 'fade'
      },
      {
        id: 'massive-pe-patterns',
        title: 'Massive PE ECG Patterns',
        content: 'Hemodynamically unstable PE: extensive right heart strain, S1Q3T3, RBBB, severe RAD, precordial T inversions. May show signs of RV ischemia or failure.',
        type: 'tabs',
        tabs: [
          {
            title: 'Hemodynamic Criteria',
            content: 'Systolic BP <90mmHg, shock, need for vasopressors - life-threatening presentation'
          },
          {
            title: 'ECG Severity Markers',
            content: 'Multiple findings: S1Q3T3, RBBB, severe RAD, extensive T inversions'
          },
          {
            title: 'Management Urgency',
            content: 'Requires immediate intervention: thrombolysis, embolectomy, or ECMO'
          }
        ],
        layout: 'centered',
        backgroundColor: '#e0e7ff',
        animation: 'slide'
      },
      {
        id: 'submassive-pe-patterns',
        title: 'Submassive PE Patterns',
        content: 'RV dysfunction without shock: moderate right heart strain patterns, some S1Q3T3, T inversions V1-V3, normal hemodynamics but elevated troponin/BNP.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'Definition Criteria',
            content: 'Normal BP but RV dysfunction on echo, elevated troponin/BNP, intermediate mortality risk'
          },
          {
            title: 'ECG Patterns',
            content: 'Moderate right heart strain: some classic findings, T inversions V1-V3, mild-moderate RAD'
          },
          {
            title: 'Risk Stratification',
            content: 'Intermediate risk - may benefit from closer monitoring, consider thrombolysis'
          }
        ],
        layout: 'full',
        backgroundColor: '#f0f9ff'
      },
      {
        id: 'low-risk-pe-patterns',
        title: 'Low-Risk PE ECG Patterns',
        content: 'Normal hemodynamics, minimal ECG changes: sinus tachycardia only, normal axis, no right heart strain. Good prognosis with anticoagulation alone.',
        type: 'highlight',
        highlights: [
          '💓 Sinus tachycardia - May be only ECG finding in low-risk PE',
          '📊 Normal patterns - Absence of right heart strain indicates smaller PE',
          '✅ Good prognosis - Low mortality risk with appropriate anticoagulation'
        ],
        layout: 'centered',
        backgroundColor: '#fef2f2'
      },
      {
        id: 'dynamic-ecg-changes',
        title: 'Dynamic ECG Changes',
        content: 'ECG patterns evolve with treatment: right heart strain improves, RBBB may resolve, T inversions normalize. Serial ECGs help monitor treatment response.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#fafafa'
      },
      {
        id: 'prognostic-ecg-markers',
        title: 'Prognostic ECG Markers',
        content: 'Poor prognosis indicators: complete RBBB, S1Q3T3 pattern, severe RAD (>120°), extensive T inversions (V1-V6), atrial fibrillation, bradycardia.',
        type: 'tabs',
        tabs: [
          {
            title: 'High-Risk Markers',
            content: 'Complete RBBB, S1Q3T3, severe RAD >120°, extensive T inversions V1-V6'
          },
          {
            title: 'Arrhythmia Significance',
            content: 'New atrial fibrillation, bradycardia suggest severe hemodynamic compromise'
          },
          {
            title: 'Serial Monitoring',
            content: 'Worsening ECG patterns indicate treatment failure or progression'
          }
        ],
        layout: 'full',
        backgroundColor: '#f8fafc'
      },
      {
        id: 'unit-5-summary',
        title: 'Unit 5 Summary: Severity Assessment',
        content: 'MASTERED: Massive, submassive, and low-risk PE patterns, dynamic changes, prognostic markers, and treatment monitoring. Comprehensive severity assessment achieved!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#dcfce7',
        textColor: '#166534',
        animation: 'fade'
      },
      
      // ============= UNIT 6: CLINICAL INTEGRATION (Slides 36-42) =============
      {
        id: 'clinical-integration-overview',
        title: 'Clinical Integration Overview',
        content: 'ECG findings must be integrated with clinical probability scores, D-dimer results, and imaging studies for optimal PE diagnosis and management decisions.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f1f5f9',
        textColor: '#475569',
        animation: 'fade'
      },
      {
        id: 'wells-score-integration',
        title: 'Wells Score Integration',
        content: 'Wells criteria assess PE probability: clinical signs of DVT, PE most likely diagnosis, heart rate >100, immobilization, previous PE/DVT, hemoptysis, malignancy. ECG supports clinical assessment.',
        type: 'tabs',
        tabs: [
          {
            title: 'Wells Criteria',
            content: 'Clinical DVT signs (3pts), PE most likely (3pts), HR>100 (1.5pts), immobilization (1.5pts)'
          },
          {
            title: 'Score Interpretation',
            content: 'Low risk <2pts, Moderate 2-6pts, High >6pts. Guides D-dimer and imaging decisions'
          },
          {
            title: 'ECG Role',
            content: 'ECG findings support clinical probability but don\'t change Wells score directly'
          }
        ],
        layout: 'centered',
        backgroundColor: '#e2e8f0',
        animation: 'slide'
      },
      {
        id: 'diagnostic-algorithm-integration',
        title: 'Diagnostic Algorithm Integration',
        content: 'ECG fits into PE diagnostic algorithm: clinical probability → D-dimer (if low/moderate risk) → CT-PA or V/Q scan. ECG findings influence probability assessment.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'Low Clinical Probability',
            content: 'Normal ECG supports low risk, negative D-dimer may rule out PE'
          },
          {
            title: 'Moderate Probability',
            content: 'ECG changes increase suspicion, proceed to imaging regardless of D-dimer'
          },
          {
            title: 'High Probability',
            content: 'Significant ECG changes support high risk, proceed directly to imaging'
          }
        ],
        layout: 'full',
        backgroundColor: '#f1f5f9'
      },
      {
        id: 'treatment-decision-making',
        title: 'Treatment Decision Making',
        content: 'ECG severity helps guide treatment intensity: massive PE needs thrombolysis/embolectomy, submassive PE consider thrombolysis, low-risk PE gets anticoagulation.',
        type: 'highlight',
        highlights: [
          '🚨 Massive PE - ECG shows severe strain → Thrombolysis/embolectomy indicated',
          '⚖️ Submassive PE - Moderate ECG changes → Consider thrombolysis vs anticoagulation',
          '💊 Low-risk PE - Minimal ECG changes → Anticoagulation sufficient'
        ],
        layout: 'centered',
        backgroundColor: '#f8fafc'
      },
      {
        id: 'monitoring-response',
        title: 'Monitoring Treatment Response',
        content: 'Serial ECGs track treatment response: resolution of right heart strain, normalization of T waves, improvement in axis. Persistent changes may indicate treatment failure.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#f9fafb'
      },
      {
        id: 'special-populations',
        title: 'Special Populations',
        content: 'Pregnancy: PE risk increased, ECG changes may be subtle. Elderly: higher mortality, more atrial arrhythmias. Cancer patients: higher risk, may have atypical presentations.',
        type: 'tabs',
        tabs: [
          {
            title: 'Pregnancy Considerations',
            content: 'Increased PE risk, ECG changes may be subtle, avoid radiation exposure, use MRI/echo'
          },
          {
            title: 'Elderly Patients',
            content: 'Higher mortality, more likely to have AF, may have baseline ECG abnormalities'
          },
          {
            title: 'Cancer Patients',
            content: 'Very high PE risk, may have baseline tachycardia, consider prophylactic anticoagulation'
          }
        ],
        layout: 'full',
        backgroundColor: '#f0f9ff'
      },
      {
        id: 'unit-6-summary',
        title: 'Unit 6 Summary: Clinical Integration',
        content: 'MASTERED: Wells score integration, diagnostic algorithms, treatment decisions, response monitoring, and special populations. Complete PE clinical integration achieved!',
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
      id: 'final-pe-mastery-assessment',
      type: 'final-assessment',
      xp: 50,
      audio: {
        mainNarration: {
          audioUrl: '/lessonaudio/pulmonary-embolism/mastery-celebration.mp3',
          duration: 15,
          transcript: "Outstanding work mastering pulmonary embolism ECG patterns! You've learned classic signs, subtle findings, differential diagnosis, severity assessment, and clinical integration. Now demonstrate your expertise with this comprehensive assessment."
        }
      },
      images: {
        mainImage: '/ecg/ecg_dataset_clean/pulmonary_embolism/clean_00234_pulmonary_embolism.png',
        slideImages: []
      },
      content: {
        prerequisiteMessage: "🎯 Final Assessment: Complete all 6 units to unlock your Pulmonary Embolism ECG Mastery Certificate!",
        questions: [
          {
            id: "s1q3t3-pattern-assessment",
            type: "multiple-choice",
            question: "ECG shows prominent S wave in lead I, Q wave in lead III, and T wave inversion in lead III. This S1Q3T3 pattern suggests:",
            options: [
              "Anterior myocardial infarction",
              "Inferior myocardial infarction",
              "Acute pulmonary embolism with right heart strain",
              "Left bundle branch block"
            ],
            correctAnswer: 2,
            explanation: "Correct! S1Q3T3 pattern is classic for acute PE with right heart strain. Seen in ~20% of PE cases and indicates significant pulmonary vascular obstruction.",
            imageUrl: "/ecg/ecg_dataset_clean/pulmonary_embolism/clean_00187_pulmonary_embolism.png"
          },
          {
            id: "pe-severity-assessment",
            type: "multiple-choice",
            question: "A patient with suspected PE has ECG showing sinus tachycardia, complete RBBB, severe right axis deviation, and T inversions V1-V5. This suggests:",
            options: [
              "Low-risk PE with good prognosis",
              "Submassive PE with intermediate risk",
              "Massive PE with high mortality risk",
              "Not consistent with PE diagnosis"
            ],
            correctAnswer: 2,
            explanation: "Correct! Multiple severe ECG findings (complete RBBB, severe RAD, extensive T inversions) indicate massive PE with hemodynamic compromise and high mortality risk requiring urgent intervention.",
            imageUrl: "/lessonimages/massive-pe-ecg-pattern.png"
          },
          {
            id: "pe-vs-mi-differentiation",
            type: "multiple-choice",
            question: "Which ECG finding BEST differentiates acute PE from anterior MI?",
            options: [
              "Presence of Q waves in precordial leads",
              "ST elevation with reciprocal changes",
              "Right heart strain pattern with S1Q3T3",
              "T wave inversions in precordial leads"
            ],
            correctAnswer: 2,
            explanation: "Correct! Right heart strain patterns (S1Q3T3, RAD) are characteristic of PE, while anterior MI shows territorial ST elevation with reciprocal changes and lacks right heart strain.",
            imageUrl: "/lessonimages/pe-vs-mi-differentiation.png"
          },
          {
            id: "subtle-pe-signs-assessment",
            type: "multiple-choice",
            question: "A patient with suspected PE has normal ECG except for sinus tachycardia at 115 bpm. This finding:",
            options: [
              "Rules out pulmonary embolism completely",
              "Indicates low-risk PE only",
              "Is consistent with PE but requires clinical correlation",
              "Suggests anxiety rather than PE"
            ],
            correctAnswer: 2,
            explanation: "Correct! Sinus tachycardia is the most common ECG finding in PE (70% of cases). Normal ECG occurs in 30% of PE cases, so clinical correlation and further testing are essential.",
            imageUrl: "/lessonimages/subtle-pe-tachycardia.png"
          },
          {
            id: "right-heart-strain-assessment",
            type: "multiple-choice",
            question: "ECG shows right axis deviation, T wave inversions V1-V3, and prominent R wave in V1. These findings indicate:",
            options: [
              "Left ventricular hypertrophy",
              "Posterior myocardial infarction", 
              "Acute right heart strain pattern",
              "Normal variant in young athletes"
            ],
            correctAnswer: 2,
            explanation: "Correct! RAD + precordial T inversions + prominent R in V1 = classic acute right heart strain pattern. This combination is highly suggestive of PE in appropriate clinical context.",
            imageUrl: "/lessonimages/right-heart-strain-pattern.png"
          },
          {
            id: "pe-treatment-monitoring-assessment",
            type: "multiple-choice",
            question: "After thrombolysis for massive PE, which ECG change indicates successful treatment?",
            options: [
              "Development of new Q waves",
              "Resolution of right heart strain patterns",
              "New onset atrial fibrillation",
              "Worsening T wave inversions"
            ],
            correctAnswer: 1,
            explanation: "Correct! Successful PE treatment leads to resolution of right heart strain: normalization of axis, resolution of RBBB, improvement in T waves. This indicates reduced pulmonary vascular resistance.",
            imageUrl: "/lessonimages/pe-treatment-response.png"
          },
          {
            id: "pe-risk-stratification-assessment",
            type: "multiple-choice",
            question: "Which ECG finding suggests the HIGHEST risk in acute PE?",
            options: [
              "Isolated sinus tachycardia",
              "T wave inversions in V1-V2 only",
              "Complete RBBB with hemodynamic instability",
              "Non-specific ST-T changes"
            ],
            correctAnswer: 2,
            explanation: "Correct! Complete RBBB in PE indicates severe right heart strain and, combined with hemodynamic instability, defines massive PE requiring urgent thrombolysis or embolectomy.",
            imageUrl: "/lessonimages/high-risk-pe-markers.png"
          },
          {
            id: "wells-score-integration-assessment",
            type: "multiple-choice",
            question: "A patient with high Wells score and ECG showing right heart strain should receive:",
            options: [
              "D-dimer test to rule out PE",
              "Immediate CT pulmonary angiogram",
              "Observation with serial ECGs",
              "Chest X-ray only"
            ],
            correctAnswer: 1,
            explanation: "Correct! High clinical probability (Wells score) plus ECG changes indicating right heart strain warrant immediate CT-PA. D-dimer not needed with high pre-test probability.",
            imageUrl: "/lessonimages/pe-diagnostic-algorithm.png"
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
