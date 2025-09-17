import { Lesson } from '@/types/learning';

export const optimizedLesson71: Lesson = {
  id: 'lesson-71-optimized-6unit',
  moduleId: 'module-4',
  title: "Coronary Territory Mapping",
  description: "Master coronary artery territories and predict vessel occlusion from ECG patterns",
  order: 71,
  estimatedTime: 45,
  content: {
    type: 'mixed',
    introduction: "Master the critical skill of coronary territory mapping! Learn to identify which coronary artery is occluded based on ECG patterns. This knowledge is essential for predicting complications, guiding interventions, and optimizing patient outcomes in acute coronary syndromes.",
    summary: "Coronary territory mapping mastery: anatomy, LAD/RCA/LCX patterns, multivessel recognition, and clinical correlation.",
    keyPoints: [
      "Master coronary anatomy and dominance patterns",
      "Recognize territory-specific ECG patterns", 
      "Identify multivessel and complex patterns",
      "Apply clinical correlation for management"
    ],
    resources: [
      { title: "ECG territory mapping guide", url: "/resources/coronary-territory-guide", type: "reference", description: "Comprehensive guide to coronary territory mapping" },
      { title: "Coronary anatomy atlas", url: "/resources/coronary-anatomy-atlas", type: "reference", description: "Interactive coronary anatomy visualization" },
      { title: "Clinical correlation cases", url: "/resources/territory-cases", type: "article", description: "Real-world territory mapping cases" }
    ],
    sections: [
      {
        id: 'unit-1-coronary-anatomy',
        title: "Unit 1: Coronary Anatomy Fundamentals",
        content: "Master coronary artery anatomy and blood supply territories"
      },
      {
        id: 'unit-2-lad-territory',
        title: "Unit 2: LAD Territory Recognition", 
        content: "Identify left anterior descending artery occlusion patterns"
      },
      {
        id: 'unit-3-rca-territory',
        title: "Unit 3: RCA Territory Analysis",
        content: "Recognize right coronary artery occlusion and complications"
      },
      {
        id: 'unit-4-lcx-territory',
        title: "Unit 4: LCX Territory Mapping",
        content: "Master left circumflex artery territory and lateral STEMI"
      },
      {
        id: 'unit-5-multivessel-patterns',
        title: "Unit 5: Multivessel Patterns",
        content: "Analyze complex multivessel occlusion patterns"
      },
      {
        id: 'unit-6-clinical-correlation',
        title: "Unit 6: Clinical Correlation",
        content: "Apply territory mapping to predict complications and outcomes"
      }
    ],
    slides: [
      
      // ============= UNIT 1: CORONARY ANATOMY FUNDAMENTALS (Slides 1-7) =============
      {
        id: 'coronary-system-overview',
        title: 'Coronary System Overview',
        content: 'Three major coronary systems supply the heart: Left Main → LAD + LCX, Right Coronary Artery (RCA). Understanding dominance patterns and anatomical variants is crucial for ECG interpretation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade'
      },
      {
        id: 'coronary-dominance-patterns',
        title: 'Coronary Dominance Patterns',
        content: 'Right dominance (85%): RCA supplies PDA and PLV. Left dominance (8%): LCX supplies posterior circulation. Co-dominance (7%): Shared supply. Dominance affects infarct patterns.',
        type: 'tabs',
        tabs: [
          {
            title: 'Right Dominance (85%)',
            content: 'RCA supplies posterior descending artery (PDA) and posterolateral vessels (PLV). Most common pattern affecting inferior/posterior STEMI presentation.'
          },
          {
            title: 'Left Dominance (8%)',
            content: 'LCX supplies posterior circulation. Determines which vessel supplies inferior/posterior walls, affecting STEMI presentation and complications.'
          }
        ],
        layout: 'centered',
        backgroundColor: '#fef3c7',
        animation: 'slide'
      },
      {
        id: 'lad-anatomy-overview',
        title: 'LAD Anatomy and Branches',
        content: 'LAD supplies anterior wall, anterior septum, and apex. Major branches: septal perforators (septum), diagonal branches (lateral wall). Proximal LAD occlusion = massive anterior STEMI.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'LAD Territory Coverage',
            content: 'Anterior wall (V1-V6), anterior septum, apex, and portions of lateral wall via diagonal branches'
          },
          {
            title: 'Critical LAD Branches',
            content: 'Septal perforators (first major branch), diagonal branches (D1, D2), and sometimes ramus intermedius'
          },
          {
            title: 'Proximal vs Distal LAD',
            content: 'Proximal: Large anterior STEMI with septal involvement. Distal: Smaller anterior MI, often sparing septum'
          }
        ],
        layout: 'full',
        backgroundColor: '#ecfdf5'
      },
      {
        id: 'rca-anatomy-overview',
        title: 'RCA Anatomy and Branches',
        content: 'RCA supplies inferior wall, posterior wall (in right dominance), and often SA/AV nodes. Branches: acute marginal, PDA, PLV. RCA occlusion causes bradycardia and heart blocks.',
        type: 'highlight',
        highlights: [
          '🫀 SA node artery - RCA supplies SA node in 60% of patients',
          '⚡ AV node artery - RCA supplies AV node in 90% of patients', 
          '🔽 Posterior descending artery - Supplies inferior wall and inferior septum'
        ],
        layout: 'centered',
        backgroundColor: '#fff7ed'
      },
      {
        id: 'lcx-anatomy-overview',
        title: 'LCX Anatomy and Branches',
        content: 'LCX supplies lateral wall and posterior wall (in left dominance). Branches: obtuse marginals (OM1, OM2), sometimes PLV. LCX infarcts can be "silent" on ECG - need lateral leads.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#f3f4f6'
      },
      {
        id: 'coronary-collaterals',
        title: 'Coronary Collaterals and Variants',
        content: 'Collateral circulation can modify infarct patterns. Common variants: left main trifurcation, anomalous origins, myocardial bridges. Collaterals may limit infarct size but complicate ECG interpretation.',
        type: 'tabs',
        tabs: [
          {
            title: 'Collateral Types',
            content: 'Homocoronary (same vessel), heterocoronary (different vessel), and extracardiac collaterals'
          },
          {
            title: 'Clinical Impact',
            content: 'Can limit infarct size, preserve function, but may delay ECG changes and complicate diagnosis'
          },
          {
            title: 'Common Variants',
            content: 'Ramus intermedius (15%), anomalous RCA origin (1%), single coronary artery (rare)'
          }
        ],
        layout: 'full',
        backgroundColor: '#f8fafc'
      },
      {
        id: 'unit-1-summary',
        title: 'Unit 1 Summary: Coronary Anatomy',
        content: 'MASTERED: Coronary anatomy fundamentals, dominance patterns, LAD/RCA/LCX territories, collaterals, and anatomical variants. Ready for territory-specific ECG pattern recognition!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#dcfce7',
        textColor: '#166534',
        animation: 'fade'
      },
      
      // ============= UNIT 2: LAD TERRITORY RECOGNITION (Slides 8-14) =============
      {
        id: 'lad-territory-leads',
        title: 'LAD Territory ECG Leads',
        content: 'LAD occlusion affects V1-V6 leads. Proximal LAD: V1-V6 + septal Q waves. Mid-LAD: V2-V5. Distal LAD: V4-V6 only. Diagonal involvement adds I, aVL changes.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade'
      },
      {
        id: 'proximal-lad-pattern',
        title: 'Proximal LAD Occlusion Pattern',
        content: 'MASSIVE ANTERIOR STEMI: ST elevation V1-V6, reciprocal depression II/III/aVF. Often has septal Q waves (V1-V3) and diagonal involvement (I, aVL elevation). High mortality!',
        type: 'tabs',
        tabs: [
          {
            title: 'ECG Pattern',
            content: 'ST elevation V1-V6, reciprocal depression inferiorly, often with I/aVL elevation (diagonal involvement)'
          },
          {
            title: 'Why So Dangerous?',
            content: 'Large territory at risk (40% of LV mass), high risk of cardiogenic shock, mechanical complications'
          }
        ],
        layout: 'centered',
        backgroundColor: '#fee2e2',
        animation: 'slide'
      },
      {
        id: 'mid-lad-pattern',
        title: 'Mid-LAD vs Distal LAD Patterns',
        content: 'Mid-LAD (post-septal): V2-V5 elevation, smaller territory. Distal LAD: V4-V6 elevation, often preserves septal function. Both have better prognosis than proximal LAD.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'Mid-LAD Occlusion (Post-Septal)',
            content: 'ST elevation V2-V5, spares septum (V1 normal), moderate anterior MI, better outcomes than proximal'
          },
          {
            title: 'Distal LAD Occlusion',
            content: 'ST elevation V4-V6 only, small anterior MI, often preserves LV function, good prognosis'
          },
          {
            title: 'Diagonal Branch Occlusion',
            content: 'ST elevation I, aVL, V5-V6 (lateral pattern), may be isolated or part of LAD territory'
          }
        ],
        layout: 'full',
        backgroundColor: '#fef7ff'
      },
      {
        id: 'anterior-stemi-complications',
        title: 'Anterior STEMI Complications',
        content: 'LAD territory infarcts risk: cardiogenic shock (large territory), VF/VT (irritable myocardium), mechanical complications (papillary muscle, free wall rupture), heart failure.',
        type: 'highlight',
        highlights: [
          '💔 Cardiogenic shock - 15% of anterior STEMI, mortality 50%',
          '⚡ Ventricular arrhythmias - VF/VT common in first 24 hours',
          '🔧 Mechanical complications - Papillary muscle rupture, VSR, free wall rupture'
        ],
        layout: 'centered',
        backgroundColor: '#fef2f2'
      },
      {
        id: 'septal-involvement-recognition',
        title: 'Recognizing Septal Involvement',
        content: 'Septal involvement indicated by: ST elevation/Q waves in V1-V2, loss of normal septal R waves, new LBBB (septal perforator occlusion). Suggests proximal LAD occlusion.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#f0f9ff'
      },
      {
        id: 'lad-reciprocal-changes',
        title: 'LAD Territory Reciprocal Changes',
        content: 'Anterior STEMI shows reciprocal ST depression in inferior leads (II, III, aVF). Helps confirm anterior STEMI and exclude other conditions. More reciprocal = larger territory.',
        type: 'tabs',
        tabs: [
          {
            title: 'Reciprocal Patterns',
            content: 'Inferior depression (II/III/aVF) with anterior elevation confirms LAD territory STEMI'
          },
          {
            title: 'Clinical Significance',
            content: 'More reciprocal depression = larger infarct territory and worse prognosis'
          },
          {
            title: 'Differential Diagnosis',
            content: 'Helps distinguish true STEMI from pericarditis, early repolarization, or other mimics'
          }
        ],
        layout: 'full',
        backgroundColor: '#f1f5f9'
      },
      {
        id: 'unit-2-summary',
        title: 'Unit 2 Summary: LAD Territory',
        content: 'MASTERED: LAD territory ECG patterns (V1-V6), proximal vs mid vs distal occlusion, septal involvement, reciprocal changes, and complications. LAD = anterior wall powerhouse!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#dcfce7',
        textColor: '#166534',
        animation: 'fade'
      },
      
      // ============= UNIT 3: RCA TERRITORY ANALYSIS (Slides 15-21) =============
      {
        id: 'rca-territory-leads',
        title: 'RCA Territory ECG Leads',
        content: 'RCA occlusion affects inferior leads (II, III, aVF). In right dominance, also involves posterior wall (V7-V9) and right ventricle (V4R). Look for bradycardia and AV blocks.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#166534',
        animation: 'fade'
      },
      {
        id: 'inferior-stemi-pattern',
        title: 'Inferior STEMI ECG Pattern',
        content: 'ST elevation II, III, aVF (III > II suggests RCA vs LCX). Reciprocal depression I, aVL. Often with bradycardia, AV blocks due to SA/AV node involvement.',
        type: 'tabs',
        tabs: [
          {
            title: 'RCA vs LCX Differentiation',
            content: 'RCA: ST elevation III > II, often with posterior changes. LCX: ST elevation II ≥ III, lateral involvement'
          },
          {
            title: 'Why Bradycardia?',
            content: 'RCA supplies SA node (60%) and AV node (90%), causing sinus bradycardia and AV blocks'
          }
        ],
        layout: 'centered',
        backgroundColor: '#d1fae5',
        animation: 'slide'
      },
      {
        id: 'rca-vs-lcx-inferior',
        title: 'RCA vs LCX Inferior STEMI',
        content: 'RCA inferior STEMI: ST elevation III > II, posterior changes (V8-V9), right heart involvement, more AV blocks. LCX inferior STEMI: ST elevation II ≥ III, lateral changes (I, aVL, V5-V6).',
        type: 'accordion',
        accordionItems: [
          {
            title: 'RCA Inferior STEMI Features',
            content: 'ST elevation III > II, posterior changes, right heart involvement, bradycardia/AV blocks common'
          },
          {
            title: 'LCX Inferior STEMI Features', 
            content: 'ST elevation II ≥ III, lateral involvement (I, aVL, V5-V6), less conduction abnormalities'
          },
          {
            title: 'Clinical Implications',
            content: 'RCA: More conduction issues, posterior extension. LCX: More pump failure, lateral extension'
          }
        ],
        layout: 'full',
        backgroundColor: '#f0fdf4'
      },
      {
        id: 'posterior-wall-involvement',
        title: 'Posterior Wall Recognition',
        content: 'Posterior STEMI signs: Tall R waves V1-V2 (posterior Q waves), ST depression V1-V3, dominant R wave V2. Need posterior leads V7-V9 for confirmation.',
        type: 'highlight',
        highlights: [
          '📈 Tall R waves V1-V2 - Mirror image of posterior Q waves',
          '📉 ST depression V1-V3 - Reciprocal of posterior ST elevation',
          '📊 Posterior leads V7-V9 - Direct evidence of posterior STEMI'
        ],
        layout: 'centered',
        backgroundColor: '#ecfdf5'
      },
      {
        id: 'right-ventricular-involvement',
        title: 'Right Ventricular Involvement',
        content: 'RV infarction with inferior STEMI: ST elevation V4R (>1mm), hemodynamic compromise with clear lungs, responds to fluid/inotropes, not vasodilators.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#f0fdfa'
      },
      {
        id: 'rca-conduction-abnormalities',
        title: 'RCA-Related Conduction Issues',
        content: 'RCA territory infarcts commonly cause: sinus bradycardia, first-degree AV block, Mobitz I (Wenckebach), complete heart block. Usually temporary, may need pacing.',
        type: 'tabs',
        tabs: [
          {
            title: 'Common Rhythms',
            content: 'Sinus bradycardia (most common), first-degree AV block, Mobitz I second-degree AV block'
          },
          {
            title: 'Severe Blocks',
            content: 'Complete heart block (5-10%), usually temporary, narrow QRS escape rhythm'
          },
          {
            title: 'Management',
            content: 'Atropine for symptomatic bradycardia, temporary pacing if hemodynamically unstable'
          }
        ],
        layout: 'full',
        backgroundColor: '#f8fafc'
      },
      {
        id: 'unit-3-summary',
        title: 'Unit 3 Summary: RCA Territory',
        content: 'MASTERED: RCA territory patterns (inferior leads), RCA vs LCX differentiation, posterior wall recognition, RV involvement, and conduction abnormalities. RCA = rhythm master!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#dcfce7',
        textColor: '#166534',
        animation: 'fade'
      },
      
      // ============= UNIT 4: LCX TERRITORY MAPPING (Slides 22-28) =============
      {
        id: 'lcx-territory-challenges',
        title: 'LCX Territory Challenges',
        content: 'LCX infarcts are "electrically silent" - lateral/posterior territory may not show clear ST elevation on standard 12-lead. Need additional leads and high suspicion!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#a16207',
        animation: 'fade'
      },
      {
        id: 'lateral-stemi-pattern',
        title: 'Lateral STEMI Pattern',
        content: 'LCX occlusion: ST elevation I, aVL, V5-V6 (lateral leads). May have reciprocal depression III, aVF. Often subtle - high clinical suspicion needed!',
        type: 'tabs',
        tabs: [
          {
            title: 'Which leads show LCX territory infarction?',
            content: 'Lateral leads: I, aVL, V5-V6. May need V7-V9 for posterior extension'
          },
          {
            title: 'Why are LCX infarcts called "electrically silent"?',
            content: 'Lateral/posterior walls poorly represented on standard 12-lead ECG, changes may be subtle'
          }
        ],
        layout: 'centered',
        backgroundColor: '#fef3c7',
        animation: 'slide'
      },
      {
        id: 'obtuse-marginal-patterns',
        title: 'Obtuse Marginal Branch Patterns',
        content: 'OM1 occlusion: High lateral STEMI (I, aVL, V5-V6). OM2 occlusion: Low lateral changes. Large OM branches can cause significant lateral MI with pump failure.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'OM1 (First Obtuse Marginal)',
            content: 'Supplies high lateral wall, causes ST elevation I, aVL, V5-V6, often with good collaterals'
          },
          {
            title: 'OM2 (Second Obtuse Marginal)',
            content: 'Supplies low lateral wall, may cause more subtle ECG changes, V6 lead most sensitive'
          },
          {
            title: 'Clinical Presentation',
            content: 'May present as heart failure rather than typical chest pain, troponin elevation key'
          }
        ],
        layout: 'full',
        backgroundColor: '#fffbeb'
      },
      {
        id: 'lcx-dominance-patterns',
        title: 'LCX Dominance Patterns',
        content: 'Left dominant system (8%): LCX supplies PDA, PLV, and AV node. LCX occlusion causes inferior + lateral + posterior STEMI. More complex presentation!',
        type: 'highlight',
        highlights: [
          '🫀 Left dominance - LCX supplies posterior circulation (8% of patients)',
          '⚡ Inferior + lateral STEMI - Large territory at risk in LCX dominance',
          '🔄 AV node involvement - LCX supplies AV node in left dominant systems'
        ],
        layout: 'centered',
        backgroundColor: '#fefce8'
      },
      {
        id: 'posterior-lateral-extension',
        title: 'Posterior-Lateral Extension',
        content: 'Large LCX can supply both lateral and posterior walls. Look for: lateral ST elevation + tall R waves V1-V2 + ST depression V1-V3. Need V7-V9 leads.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#f7fee7'
      },
      {
        id: 'lcx-diagnostic-challenges',
        title: 'LCX Diagnostic Challenges',
        content: 'LCX STEMI challenges: Subtle ECG changes, normal troponin early, atypical symptoms (dyspnea > chest pain), need high suspicion and additional leads (V7-V9, V15-V18).',
        type: 'tabs',
        tabs: [
          {
            title: 'ECG Challenges',
            content: 'Subtle changes, need lateral leads (V5-V6) and posterior leads (V7-V9) for full assessment'
          },
          {
            title: 'Clinical Presentation',
            content: 'May present as heart failure, atypical chest pain, or dyspnea rather than classic STEMI'
          },
          {
            title: 'Diagnostic Strategy',
            content: 'High suspicion, additional leads, serial ECGs, early echocardiography'
          }
        ],
        layout: 'full',
        backgroundColor: '#f0fdf4'
      },
      {
        id: 'unit-4-summary',
        title: 'Unit 4 Summary: LCX Territory',
        content: 'MASTERED: LCX territory challenges, lateral STEMI patterns, obtuse marginal branches, left dominance, posterior-lateral extension, and diagnostic strategies. LCX = stealth territory!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#dcfce7',
        textColor: '#166534',
        animation: 'fade'
      },
      
      // ============= UNIT 5: MULTIVESSEL PATTERNS (Slides 29-35) =============
      {
        id: 'multivessel-overview',
        title: 'Multivessel Disease Patterns',
        content: 'Complex presentations: Left main equivalent (LAD + LCX), wraparound LAD (LAD supplies inferior wall), multivessel STEMI. Requires systematic ECG analysis.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f4ff',
        textColor: '#3730a3',
        animation: 'fade'
      },
      {
        id: 'left-main-equivalent',
        title: 'Left Main Equivalent Patterns',
        content: 'Critical left main or LAD+LCX: Widespread ST depression with aVR elevation, anterior + lateral changes, hemodynamic instability. URGENT catheterization needed!',
        type: 'tabs',
        tabs: [
          {
            title: 'ECG pattern of left main equivalent disease?',
            content: 'Widespread ST depression with ST elevation aVR, may have anterior + lateral changes'
          },
          {
            title: 'Clinical significance of aVR elevation?',
            content: 'Suggests left main or severe LAD disease, associated with high mortality, needs urgent intervention'
          }
        ],
        layout: 'centered',
        backgroundColor: '#e0e7ff',
        animation: 'slide'
      },
      {
        id: 'wraparound-lad-pattern',
        title: 'Wraparound LAD Pattern',
        content: 'Long LAD wraps around apex to supply inferior wall. ECG: Anterior STEMI + inferior ST elevation, but no reciprocal depression. Single vessel causing dual territory STEMI.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'Anatomical Variant',
            content: 'LAD extends beyond apex to supply inferior wall (15% of patients), creating confusion'
          },
          {
            title: 'ECG Pattern Recognition',
            content: 'Anterior + inferior ST elevation WITHOUT reciprocal changes (key differentiator)'
          },
          {
            title: 'Clinical Implications',
            content: 'Large territory at risk from single vessel, may need different intervention strategy'
          }
        ],
        layout: 'full',
        backgroundColor: '#f0f9ff'
      },
      {
        id: 'simultaneous-multivessel-stemi',
        title: 'Simultaneous Multivessel STEMI',
        content: 'Rare but devastating: Multiple vessel occlusion simultaneously. ECG shows multiple territory elevation, severe hemodynamic compromise, very high mortality.',
        type: 'highlight',
        highlights: [
          '📈 Multiple territories - ST elevation in anterior + inferior or other combinations',
          '💥 Hemodynamic collapse - Cardiogenic shock common with multivessel STEMI',
          '🚨 Urgent intervention - Requires immediate multivessel PCI or CABG consideration'
        ],
        layout: 'centered',
        backgroundColor: '#fef2f2'
      },
      {
        id: 'chronic-vs-acute-patterns',
        title: 'Chronic vs Acute Multivessel Disease',
        content: 'Chronic multivessel: Q waves in one territory + acute STEMI in another. Acute multivessel: Simultaneous fresh ST elevations. Different management strategies.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#fafafa'
      },
      {
        id: 'complex-interpretation-strategy',
        title: 'Complex Pattern Interpretation',
        content: 'Systematic approach: 1) Identify all ST elevation territories, 2) Look for reciprocal changes, 3) Check for aVR elevation, 4) Assess hemodynamics, 5) Consider anatomical variants.',
        type: 'tabs',
        tabs: [
          {
            title: 'Step-by-Step Analysis',
            content: '1) Territory identification, 2) Reciprocal pattern analysis, 3) aVR assessment, 4) Clinical correlation'
          },
          {
            title: 'Red Flag Patterns',
            content: 'aVR elevation, widespread depression, multiple territories without reciprocal changes'
          },
          {
            title: 'Management Priorities',
            content: 'Hemodynamic support, urgent catheterization, consider multivessel intervention'
          }
        ],
        layout: 'full',
        backgroundColor: '#f8fafc'
      },
      {
        id: 'unit-5-summary',
        title: 'Unit 5 Summary: Multivessel Patterns',
        content: 'MASTERED: Multivessel disease recognition, left main equivalent, wraparound LAD, simultaneous STEMI, chronic vs acute patterns, and systematic interpretation. Complex but conquerable!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#dcfce7',
        textColor: '#166534',
        animation: 'fade'
      },
      
      // ============= UNIT 6: CLINICAL CORRELATION (Slides 36-42) =============
      {
        id: 'territory-complication-prediction',
        title: 'Territory-Based Complication Prediction',
        content: 'Different territories have specific complications: Anterior (pump failure, VF), Inferior (bradycardia, blocks), Lateral (subtle presentation), Posterior (difficult diagnosis).',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f1f5f9',
        textColor: '#475569',
        animation: 'fade'
      },
      {
        id: 'intervention-strategy-by-territory',
        title: 'Intervention Strategy by Territory',
        content: 'Territory guides intervention: Proximal LAD = primary PCI urgently, RCA with blocks = pacing consideration, LCX = high suspicion needed, multivessel = complex intervention.',
        type: 'tabs',
        tabs: [
          {
            title: 'How does coronary territory affect PCI urgency?',
            content: 'Proximal LAD = most urgent (large territory), multivessel = urgent, isolated posterior = moderate urgency'
          },
          {
            title: 'What supportive care varies by territory?',
            content: 'Inferior: atropine/pacing, Anterior: pump support, RV: volume loading, Posterior: high suspicion'
          }
        ],
        layout: 'centered',
        backgroundColor: '#e2e8f0',
        animation: 'slide'
      },
      {
        id: 'prognosis-by-territory',
        title: 'Prognosis by Coronary Territory',
        content: 'Territory affects outcomes: Proximal LAD worst prognosis (cardiogenic shock), inferior better (smaller territory), posterior often missed (delayed treatment), multivessel highest mortality.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'High-Risk Territories',
            content: 'Proximal LAD (cardiogenic shock 15%), multivessel (mortality 20%), left main equivalent (mortality 30%)'
          },
          {
            title: 'Moderate-Risk Territories',
            content: 'Mid-LAD, large RCA, left-dominant LCX - significant but manageable with prompt intervention'
          },
          {
            title: 'Lower-Risk Territories',
            content: 'Distal LAD, small RCA, obtuse marginal branches - better outcomes with standard care'
          }
        ],
        layout: 'full',
        backgroundColor: '#f1f5f9'
      },
      {
        id: 'ecg-evolution-by-territory',
        title: 'ECG Evolution by Territory',
        content: 'Territory affects ECG evolution timeline: Large territories show faster progression, anterior develops Q waves quickly, inferior may have variable evolution, LCX changes subtle.',
        type: 'highlight',
        highlights: [
          '📈 Anterior evolution - Rapid Q wave development, T wave inversion early',
          '📊 Inferior evolution - May have slower progression, AV blocks common',
          '📉 Lateral evolution - Subtle changes, may need serial ECGs'
        ],
        layout: 'centered',
        backgroundColor: '#f8fafc'
      },
      {
        id: 'special-populations-territory',
        title: 'Special Populations and Territory',
        content: 'Territory considerations vary: Elderly (atypical presentation, especially LCX), women (more NSTEMI), diabetes (silent infarcts), young patients (anomalous coronaries).',
        type: 'text',
        layout: 'split',
        backgroundColor: '#f9fafb'
      },
      {
        id: 'integration-with-imaging',
        title: 'Integration with Imaging',
        content: 'Coronary territory mapping integrates with: Echo (wall motion by territory), angiography (vessel anatomy confirmation), cardiac MRI (tissue characterization), nuclear imaging (perfusion).',
        type: 'tabs',
        tabs: [
          {
            title: 'Echocardiography',
            content: 'Wall motion abnormalities correspond to ECG territories - anterior, inferior, lateral, posterior'
          },
          {
            title: 'Angiography Correlation',
            content: 'ECG territory predicts culprit vessel location and guides catheter selection'
          },
          {
            title: 'Advanced Imaging',
            content: 'MRI and nuclear imaging confirm territory involvement and assess viability'
          }
        ],
        layout: 'full',
        backgroundColor: '#f0f9ff'
      },
      {
        id: 'unit-6-summary',
        title: 'Unit 6 Summary: Clinical Correlation',
        content: 'MASTERED: Territory-based complications, intervention strategies, prognosis, ECG evolution, special populations, and imaging integration. Complete coronary territory mastery achieved!',
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
      id: 'final-coronary-territory-mastery-assessment',
      type: 'final-assessment',
      xp: 50,
      audio: {
        mainNarration: {
          audioUrl: '/lessonaudio/coronary-territory/mastery-celebration.mp3',
          duration: 15,
          transcript: "Outstanding work mastering coronary territory mapping! You've learned coronary anatomy, LAD/RCA/LCX territories, multivessel patterns, and clinical correlations. Now demonstrate your expertise with this comprehensive assessment."
        }
      },
      images: {
        mainImage: '/ecg/ecg_dataset_clean/AMI_anterior_myocardial_infarction/clean_00311_anterior myocardial infarction.png',
        slideImages: []
      },
      content: {
        prerequisiteMessage: "🎯 Final Assessment: Complete all 6 units to unlock your Coronary Territory Mapping Mastery Certificate!",
        questions: [
          {
            id: "coronary-dominance-assessment",
            type: "multiple-choice",
            question: "A patient has ST elevation in II, III, aVF with posterior changes (tall R waves V1-V2). Which coronary dominance pattern is most likely?",
            options: [
              "Left dominance - LCX supplies everything",
              "Right dominance - RCA supplies inferior and posterior",
              "Co-dominance - shared supply pattern",
              "Cannot determine dominance from ECG alone"
            ],
            correctAnswer: 1,
            explanation: "Correct! Right dominance (85%) where RCA supplies both inferior wall (II, III, aVF) and posterior wall. This explains both the inferior STEMI and posterior extension pattern.",
            imageUrl: "/ecg/ecg_dataset_clean/IMI_inferior_myocardial_infarction/clean_00008_inferior myocardial infarction.png"
          },
          {
            id: "proximal-lad-assessment",
            type: "multiple-choice",
            question: "ECG shows ST elevation V1-V6 with reciprocal depression II, III, aVF and new LBBB. This pattern indicates:",
            options: [
              "Mid-LAD occlusion with diagonal involvement",
              "Proximal LAD occlusion with large territory at risk",
              "Distal LAD occlusion with septal sparing",
              "LCX occlusion with lateral extension"
            ],
            correctAnswer: 1,
            explanation: "Correct! Proximal LAD occlusion: widespread anterior elevation (V1-V6), reciprocal inferior depression, and new LBBB (septal perforator involvement). This is a massive anterior STEMI requiring urgent intervention.",
            imageUrl: "/ecg/ecg_dataset_clean/AMI_anterior_myocardial_infarction/clean_00418_anterior myocardial infarction.png"
          },
          {
            id: "rca-vs-lcx-assessment",
            type: "multiple-choice",
            question: "Inferior STEMI with ST elevation III > II and first-degree AV block suggests which culprit vessel?",
            options: [
              "Left circumflex artery (LCX)",
              "Right coronary artery (RCA)",
              "Posterior descending artery (PDA)",
              "Left anterior descending (LAD)"
            ],
            correctAnswer: 1,
            explanation: "Correct! RCA occlusion features: ST elevation III > II (vs LCX where II ≥ III), and AV block (RCA supplies AV node in 90%). LCX inferior STEMI typically shows lateral involvement without conduction blocks.",
            imageUrl: "/ecg/ecg_dataset_clean/IMI_inferior_myocardial_infarction/clean_00153_inferior myocardial infarction.png"
          },
          {
            id: "posterior-recognition-assessment",
            type: "multiple-choice",
            question: "A patient has tall R waves in V1-V2 with ST depression V1-V3 during acute chest pain. The most likely diagnosis is:",
            options: [
              "Anterior STEMI with reciprocal changes",
              "Posterior STEMI - need V7-V9 leads",
              "Right ventricular hypertrophy pattern",
              "Normal variant early repolarization"
            ],
            correctAnswer: 1,
            explanation: "Correct! Tall R waves V1-V2 + ST depression V1-V3 = mirror image of posterior STEMI. This is the reciprocal pattern seen from anterior leads. Posterior leads V7-V9 would show direct ST elevation.",
            imageUrl: "/ecg/ecg_dataset_clean/PMI_posterior_myocardial_infarction/clean_01781_posterior myocardial infarction.png"
          },
          {
            id: "left-main-equivalent-assessment",
            type: "multiple-choice",
            question: "ECG shows widespread ST depression with ST elevation in aVR during chest pain. This pattern suggests:",
            options: [
              "Multivessel disease or left main equivalent",
              "Pericarditis with global involvement",
              "Hyperacute T wave changes only",
              "Technical artifact from electrode placement"
            ],
            correctAnswer: 0,
            explanation: "Correct! ST elevation aVR + widespread ST depression = left main or severe LAD disease (left main equivalent). This pattern indicates large territory at risk and requires urgent catheterization with high mortality risk.",
            imageUrl: "/lessonimages/left-main-equivalent-pattern.png"
          },
          {
            id: "wraparound-lad-assessment",
            type: "multiple-choice",
            question: "ECG shows ST elevation in V1-V6 AND II, III, aVF but NO reciprocal depression. This suggests:",
            options: [
              "Simultaneous LAD and RCA occlusion",
              "Wraparound LAD supplying inferior wall",
              "Technical error in ECG recording",
              "Pericarditis with global ST elevation"
            ],
            correctAnswer: 1,
            explanation: "Correct! Wraparound LAD extends beyond apex to supply inferior wall (15% variant). Single vessel causes both anterior and inferior STEMI without reciprocal changes. Key differentiator from dual vessel occlusion.",
            imageUrl: "/lessonimages/wraparound-lad-pattern.png"
          },
          {
            id: "lcx-territory-assessment",
            type: "multiple-choice",
            question: "A patient presents with heart failure and subtle ST elevation in I, aVL, V6 only. Troponins are elevated. Most likely territory:",
            options: [
              "Anterior wall (LAD territory)",
              "Inferior wall (RCA territory)",  
              "Lateral wall (LCX territory)",
              "Posterior wall (posterior circulation)"
            ],
            correctAnswer: 2,
            explanation: "Correct! LCX (lateral) territory is 'electrically silent' - subtle changes in I, aVL, V5-V6, may present as heart failure rather than typical STEMI. High clinical suspicion needed for LCX occlusion.",
            imageUrl: "/lessonimages/lateral-stemi-subtle-changes.png"
          },
          {
            id: "territory-complications-assessment",
            type: "multiple-choice",
            question: "Which coronary territory is MOST likely to cause cardiogenic shock in STEMI?",
            options: [
              "Distal RCA with inferior STEMI",
              "Proximal LAD with large anterior STEMI",
              "LCX with lateral STEMI",
              "Posterior circulation with posterior STEMI"
            ],
            correctAnswer: 1,
            explanation: "Correct! Proximal LAD supplies 40% of LV mass (anterior wall + septum + apex). Large anterior STEMI has highest cardiogenic shock risk (15%) and mechanical complications. Requires urgent revascularization.",
            imageUrl: "/ecg/ecg_dataset_clean/AMI_anterior_myocardial_infarction/clean_00486_anterior myocardial infarction.png"
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
