import { Lesson } from '@/types/learning';

export const optimizedLesson74: Lesson = {
  id: 'lesson-74-optimized-6unit',
  moduleId: 'module-9',
  title: "Brugada Syndrome Recognition & Risk Stratification",
  description: "Master Brugada syndrome patterns, genetic testing, and sudden cardiac death prevention strategies",
  order: 74,
  estimatedTime: 45,
  content: {
    type: 'mixed',
    introduction: "Master Brugada syndrome - a genetic channelopathy causing characteristic ECG patterns and sudden cardiac death risk! Learn to recognize Type 1-3 patterns, understand genetic testing, assess arrhythmic risk, and apply evidence-based management to prevent sudden death in young, structurally normal hearts.",
    summary: "Brugada syndrome mastery: ECG pattern recognition, genetic classification, risk stratification, and comprehensive management strategies.",
    keyPoints: [
      "Recognize Brugada Type 1, 2, and 3 ECG patterns",
      "Understand genetic testing and family screening", 
      "Assess sudden cardiac death risk factors",
      "Apply evidence-based management and ICD indications"
    ],
    resources: [
      { title: "Brugada pattern analyzer", url: "/resources/brugada-analyzer", type: "tool", description: "Interactive Brugada pattern recognition tool" },
      { title: "Genetic testing guide", url: "/resources/brugada-genetics", type: "reference", description: "Comprehensive Brugada genetic testing protocols" },
      { title: "Risk calculator", url: "/resources/brugada-risk", type: "tool", description: "Brugada syndrome risk stratification calculator" }
    ],
    sections: [
      {
        id: 'unit-1-brugada-fundamentals',
        title: "Unit 1: Brugada Syndrome Fundamentals",
        content: "Understand Brugada syndrome pathophysiology and clinical significance"
      },
      {
        id: 'unit-2-ecg-patterns',
        title: "Unit 2: ECG Pattern Recognition", 
        content: "Master Type 1, 2, and 3 Brugada patterns and dynamic changes"
      },
      {
        id: 'unit-3-genetic-testing',
        title: "Unit 3: Genetic Testing & Inheritance",
        content: "Understand genetic basis, testing strategies, and family screening"
      },
      {
        id: 'unit-4-risk-stratification',
        title: "Unit 4: Risk Stratification",
        content: "Assess sudden cardiac death risk and identify high-risk patients"
      },
      {
        id: 'unit-5-management-strategies',
        title: "Unit 5: Management Strategies",
        content: "Apply pharmacological and device-based management approaches"
      },
      {
        id: 'unit-6-special-considerations',
        title: "Unit 6: Special Considerations",
        content: "Address provocative testing, drug avoidance, and lifestyle modifications"
      }
    ],
    slides: [
      
      // ============= UNIT 1: BRUGADA SYNDROME FUNDAMENTALS (Slides 1-7) =============
      {
        id: 'brugada-syndrome-overview',
        title: 'Brugada Syndrome Overview',
        content: 'Genetic channelopathy causing sodium channel dysfunction, characteristic right precordial ECG patterns, and risk of polymorphic VT/VF leading to sudden cardiac death in structurally normal hearts.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade'
      },
      {
        id: 'pathophysiology-mechanisms',
        title: 'Pathophysiology Mechanisms',
        content: 'Sodium channel mutations (SCN5A most common) reduce INa current, creating transmural voltage gradients in RVOT. Phase 2 reentry mechanism triggers polymorphic VT/VF, especially during vagal stimulation.',
        type: 'tabs',
        tabs: [
          {
            title: 'Sodium Channel Dysfunction',
            content: 'Reduced INa current → Loss of action potential dome → Transmural dispersion of repolarization'
          },
          {
            title: 'Arrhythmia Mechanism',
            content: 'Phase 2 reentry in RVOT → Polymorphic VT/VF → Sudden cardiac death risk'
          },
          {
            title: 'Triggers & Modulation',
            content: 'Vagal stimulation, fever, sodium channel blockers can unmask or worsen pattern'
          }
        ],
        layout: 'centered',
        backgroundColor: '#fef3c7',
        animation: 'slide'
      },
      {
        id: 'epidemiology-demographics',
        title: 'Epidemiology & Demographics',
        content: 'Prevalence varies globally: 0.05% worldwide, up to 0.2% in Southeast Asia. Male predominance (8:1), peak sudden death age 30-40 years. Accounts for 4-12% of sudden cardiac deaths.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'Global Distribution',
            content: 'Higher prevalence in Southeast Asia (Philippines, Thailand, Japan), endemic areas with "sudden unexplained death syndrome"'
          },
          {
            title: 'Demographics',
            content: 'Male predominance 8:1, most sudden deaths occur during sleep/rest, peak age 30-40 years'
          },
          {
            title: 'Clinical Impact',
            content: 'Responsible for 4-12% of sudden cardiac deaths, 20% in structurally normal hearts'
          }
        ],
        layout: 'full',
        backgroundColor: '#ecfdf5'
      },
      {
        id: 'clinical-presentation',
        title: 'Clinical Presentation',
        content: 'Often asymptomatic with incidental ECG findings. Symptomatic patients: syncope, nocturnal agonal respirations, palpitations, aborted sudden death. Family history of sudden death common.',
        type: 'highlight',
        highlights: [
          '😴 Nocturnal events - Sudden death often occurs during sleep due to vagal tone',
          '💔 Family clustering - Strong family history of sudden death in young adults',
          '🚨 Aborted sudden death - Survivors of VF episodes have highest risk'
        ],
        layout: 'centered',
        backgroundColor: '#fff7ed'
      },
      {
        id: 'differential-diagnosis',
        title: 'Differential Diagnosis',
        content: 'Distinguish from: incomplete RBBB, anterior STEMI, pulmonary embolism, pericarditis, ARVD. Key: dynamic pattern changes, family history, structural heart disease absence.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#f3f4f6'
      },
      {
        id: 'historical-context',
        title: 'Historical Context & Discovery',
        content: 'Described by Pedro and Josep Brugada (1992). Previously known as "sudden unexplained death syndrome" in Southeast Asia. First genetic channelopathy linked to sudden death.',
        type: 'tabs',
        tabs: [
          {
            title: 'Historical Recognition',
            content: 'Indigenous names: "lai tai" (Thailand), "bangungut" (Philippines) - sudden death during sleep'
          },
          {
            title: 'Scientific Discovery',
            content: 'Brugada brothers identified syndrome in 1992, SCN5A mutations discovered in 1998'
          },
          {
            title: 'Clinical Significance',
            content: 'First demonstration that pure electrical disease could cause sudden death'
          }
        ],
        layout: 'full',
        backgroundColor: '#f8fafc'
      },
      {
        id: 'unit-1-summary',
        title: 'Unit 1 Summary: Brugada Fundamentals',
        content: 'MASTERED: Brugada syndrome pathophysiology, sodium channel dysfunction, epidemiology, clinical presentation, and historical context. Foundation set for ECG pattern recognition!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#dcfce7',
        textColor: '#166534',
        animation: 'fade'
      },
      
      // ============= UNIT 2: ECG PATTERN RECOGNITION (Slides 8-14) =============
      {
        id: 'brugada-pattern-overview',
        title: 'Brugada ECG Pattern Overview',
        content: 'Three pattern types in right precordial leads (V1-V3): Type 1 (coved), Type 2 (saddleback), Type 3 (subtle saddleback). Only Type 1 diagnostic; Types 2-3 need provocation testing.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade'
      },
      {
        id: 'type-1-pattern',
        title: 'Type 1 Brugada Pattern',
        content: 'DIAGNOSTIC pattern: Coved ST elevation ≥2mm in V1-V2, followed by negative T wave. No isoelectric separation. Spontaneous Type 1 = definite Brugada syndrome diagnosis.',
        type: 'tabs',
        tabs: [
          {
            title: 'Morphology Features',
            content: 'Coved (downward convex) ST elevation ≥2mm, no isoelectric segment, negative T wave, may have terminal conduction delay'
          },
          {
            title: 'Lead Localization',
            content: 'Most prominent V1-V2, may extend to V3, high precordial leads (V1-V2 one intercostal space up) increase sensitivity'
          },
          {
            title: 'Clinical Significance',
            content: 'Only pattern diagnostic for Brugada syndrome, indicates highest arrhythmic risk, warrants ICD consideration'
          }
        ],
        layout: 'centered',
        backgroundColor: '#fee2e2',
        animation: 'slide'
      },
      {
        id: 'type-2-pattern',
        title: 'Type 2 Brugada Pattern',
        content: 'Saddleback morphology: High take-off ST elevation ≥2mm, then descends to ≥1mm at 80ms from J-point. Positive or biphasic T wave. Requires provocation testing for diagnosis.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'Morphological Criteria',
            content: 'Saddleback ST elevation: high take-off ≥2mm, descent to ≥1mm at 80ms, positive/biphasic T wave'
          },
          {
            title: 'Clinical Implications',
            content: 'Not diagnostic alone, requires provocative testing with sodium channel blockers to confirm diagnosis'
          },
          {
            title: 'Risk Assessment',
            content: 'Lower risk than Type 1, but can convert to Type 1 with fever, drugs, or autonomic changes'
          }
        ],
        layout: 'full',
        backgroundColor: '#fef7ff'
      },
      {
        id: 'type-3-pattern',
        title: 'Type 3 Brugada Pattern',
        content: 'Subtle saddleback: ST elevation <1mm, either morphology. Generally not considered clinically significant. May represent normal variant or mild expression in some families.',
        type: 'highlight',
        highlights: [
          '📉 Minimal elevation - ST elevation <1mm, borderline significance',
          '🤔 Clinical uncertainty - May be normal variant vs mild disease expression',
          '🔍 Family context important - Consider in families with known Brugada syndrome'
        ],
        layout: 'centered',
        backgroundColor: '#fef2f2'
      },
      {
        id: 'dynamic-pattern-changes',
        title: 'Dynamic Pattern Changes',
        content: 'Brugada patterns fluctuate with: fever (unmasking), autonomic tone (vagal enhancement), medications (sodium blockers), lead positioning. Serial ECGs essential!',
        type: 'text',
        layout: 'split',
        backgroundColor: '#f0f9ff'
      },
      {
        id: 'lead-positioning-techniques',
        title: 'Lead Positioning Techniques',
        content: 'Standard vs high precordial leads: Place V1-V2 one intercostal space higher to increase sensitivity. May unmask subtle patterns or enhance existing patterns for better recognition.',
        type: 'tabs',
        tabs: [
          {
            title: 'Standard Positioning',
            content: 'V1: 4th intercostal space, right sternal border. V2: 4th intercostal space, left sternal border'
          },
          {
            title: 'High Precordial Leads',
            content: 'Move V1-V2 up one intercostal space (3rd ICS) to increase sensitivity by 10-15%'
          },
          {
            title: 'Clinical Impact',
            content: 'High leads may unmask concealed patterns, especially important in family screening'
          }
        ],
        layout: 'full',
        backgroundColor: '#f1f5f9'
      },
      {
        id: 'unit-2-summary',
        title: 'Unit 2 Summary: ECG Patterns',
        content: 'MASTERED: Type 1-3 Brugada patterns, morphological criteria, dynamic changes, lead positioning techniques, and diagnostic significance. ECG pattern expertise achieved!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#dcfce7',
        textColor: '#166534',
        animation: 'fade'
      },
      
      // ============= UNIT 3: GENETIC TESTING & INHERITANCE (Slides 15-21) =============
      {
        id: 'genetic-basis-overview',
        title: 'Genetic Basis Overview',
        content: 'Autosomal dominant inheritance with incomplete penetrance and variable expressivity. Over 20 genes identified, SCN5A (25% of cases) most common. Many patients have negative genetic testing.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#166534',
        animation: 'fade'
      },
      {
        id: 'scn5a-mutations',
        title: 'SCN5A Gene Mutations',
        content: 'Encodes cardiac sodium channel (Nav1.5). Loss-of-function mutations reduce INa current. Found in 25% of Brugada patients. Associated with conduction abnormalities and other arrhythmia syndromes.',
        type: 'tabs',
        tabs: [
          {
            title: 'Molecular Function',
            content: 'SCN5A encodes Nav1.5 sodium channel, loss-of-function mutations reduce sodium current'
          },
          {
            title: 'Clinical Associations',
            content: 'May cause conduction disease, sick sinus syndrome, atrial fibrillation, LQTS overlap'
          },
          {
            title: 'Penetrance Issues',
            content: 'Age-dependent penetrance, male predominance, variable expressivity even within families'
          }
        ],
        layout: 'centered',
        backgroundColor: '#d1fae5',
        animation: 'slide'
      },
      {
        id: 'other-genetic-causes',
        title: 'Other Genetic Causes',
        content: 'Multiple genes affect sodium, calcium, and potassium channels: SCN1B, CACNA1C, CACNB2, KCNE3, others. Each represents <5% of cases. Polygenic inheritance increasingly recognized.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'Sodium Channel Related',
            content: 'SCN1B, SCN3B, SCN5A - different subunits affecting sodium channel function and trafficking'
          },
          {
            title: 'Calcium Channel Related',
            content: 'CACNA1C, CACNB2, CACNA2D1 - L-type calcium channel subunits affecting action potential balance'
          },
          {
            title: 'Other Mechanisms',
            content: 'KCNE3, HCN4, RANGRF, PKP2 - various effects on repolarization and cell coupling'
          }
        ],
        layout: 'full',
        backgroundColor: '#f0fdf4'
      },
      {
        id: 'inheritance-patterns',
        title: 'Inheritance Patterns',
        content: 'Autosomal dominant with incomplete penetrance (30-35%). Variable expressivity means family members may have different presentations: asymptomatic pattern to sudden death.',
        type: 'highlight',
        highlights: [
          '👨‍👩‍👧‍👦 Autosomal dominant - 50% inheritance risk for children',
          '📊 Incomplete penetrance - Only 30-35% of mutation carriers show ECG pattern',
          '🎭 Variable expressivity - Wide range from asymptomatic to sudden death'
        ],
        layout: 'centered',
        backgroundColor: '#ecfdf5'
      },
      {
        id: 'genetic-testing-indications',
        title: 'Genetic Testing Indications',
        content: 'Test probands with spontaneous Type 1 pattern, family members of known cases, unexplained sudden death <45 years with suggestive family history. Cascade screening recommended.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#f0fdfa'
      },
      {
        id: 'family-screening-protocols',
        title: 'Family Screening Protocols',
        content: 'Screen first-degree relatives: ECG (including high precordial leads), provocative testing if indicated, genetic counseling. Annual screening recommended due to age-dependent penetrance.',
        type: 'tabs',
        tabs: [
          {
            title: 'Initial Evaluation',
            content: 'Detailed family history, ECG with high precordial leads, consider provocative testing'
          },
          {
            title: 'Ongoing Surveillance',
            content: 'Annual ECGs due to age-dependent penetrance, especially males entering 2nd-3rd decade'
          },
          {
            title: 'Genetic Counseling',
            content: 'Risk assessment, reproductive counseling, psychological support for sudden death anxiety'
          }
        ],
        layout: 'full',
        backgroundColor: '#f8fafc'
      },
      {
        id: 'unit-3-summary',
        title: 'Unit 3 Summary: Genetics & Inheritance',
        content: 'MASTERED: Genetic basis, SCN5A mutations, inheritance patterns, testing indications, and family screening protocols. Comprehensive genetic understanding achieved!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#dcfce7',
        textColor: '#166534',
        animation: 'fade'
      },
      
      // ============= UNIT 4: RISK STRATIFICATION (Slides 22-28) =============
      {
        id: 'risk-factors-overview',
        title: 'Risk Factors Overview',
        content: 'Risk stratification critical for ICD decisions. Major factors: spontaneous Type 1 pattern, syncope/VT/VF history, inducible VF, family sudden death history. Male gender, fever episodes.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f1f5f9',
        textColor: '#475569',
        animation: 'fade'
      },
      {
        id: 'high-risk-features',
        title: 'High-Risk Features',
        content: 'Spontaneous Type 1 pattern most important. Syncope history, aborted sudden death, inducible VF on EPS, strong family history. These patients warrant ICD consideration.',
        type: 'tabs',
        tabs: [
          {
            title: 'Spontaneous Type 1',
            content: 'Most important risk factor - spontaneous (non-drug-induced) Type 1 pattern indicates high risk'
          },
          {
            title: 'Clinical Events',
            content: 'Syncope, aborted sudden death, documented VT/VF - major risk factors requiring intervention'
          },
          {
            title: 'Electrophysiology',
            content: 'Inducible VF on programmed stimulation - controversial but may identify additional risk'
          }
        ],
        layout: 'centered',
        backgroundColor: '#e2e8f0',
        animation: 'slide'
      },
      {
        id: 'risk-stratification-algorithms',
        title: 'Risk Stratification Algorithms',
        content: 'Multiple risk scores proposed: Shanghai Score, morphology-based scoring. Consider clinical presentation, ECG pattern, family history, EP study results for comprehensive assessment.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'Shanghai Score',
            content: 'Points for: spontaneous Type 1 (3.5), drug-induced Type 1 (2), clinical history, family history, genetics'
          },
          {
            title: 'Morphology-Based Scoring',
            content: 'Beta angle, base of triangle measurements in V2 - objective morphology quantification'
          },
          {
            title: 'Clinical Integration',
            content: 'Combine multiple factors: pattern type, symptoms, family history, EP study, gender, age'
          }
        ],
        layout: 'full',
        backgroundColor: '#f1f5f9'
      },
      {
        id: 'electrophysiology-role',
        title: 'Role of Electrophysiology Studies',
        content: 'EPS controversial in Brugada syndrome. May help risk stratification in asymptomatic patients, but high false-positive rate. More useful in symptomatic patients for VT/VF inducibility.',
        type: 'highlight',
        highlights: [
          '⚡ Controversial utility - EPS role debated, especially in asymptomatic patients',
          '🎯 False positives - High rate of non-clinical VF induction',
          '📊 Risk refinement - May help stratify intermediate-risk asymptomatic patients'
        ],
        layout: 'centered',
        backgroundColor: '#f8fafc'
      },
      {
        id: 'gender-age-considerations',
        title: 'Gender & Age Considerations',
        content: 'Males have 8x higher event rate than females. Events peak in 3rd-4th decades. Hormonal influences may protect females. Age-dependent penetrance requires lifelong surveillance.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#f9fafb'
      },
      {
        id: 'fever-trigger-significance',
        title: 'Fever as Arrhythmic Trigger',
        content: 'Fever unmasks Brugada patterns and triggers VF. Aggressive fever management essential. May be only manifestation in some patients. Family education about fever management crucial.',
        type: 'tabs',
        tabs: [
          {
            title: 'Fever Effects',
            content: 'Unmasks Type 1 patterns, triggers VF episodes, may be sole manifestation in children'
          },
          {
            title: 'Management Strategy',
            content: 'Aggressive antipyretics, early medical attention for febrile illness, family education'
          },
          {
            title: 'Pediatric Considerations',
            content: 'Fever-related events in children may be first presentation, surveillance during illness'
          }
        ],
        layout: 'full',
        backgroundColor: '#f0f9ff'
      },
      {
        id: 'unit-4-summary',
        title: 'Unit 4 Summary: Risk Stratification',
        content: 'MASTERED: Risk factors, high-risk features, stratification algorithms, EPS role, gender considerations, and fever triggers. Comprehensive risk assessment achieved!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#dcfce7',
        textColor: '#166534',
        animation: 'fade'
      },
      
      // ============= UNIT 5: MANAGEMENT STRATEGIES (Slides 29-35) =============
      {
        id: 'management-overview',
        title: 'Management Overview',
        content: 'No specific pharmacological therapy. Focus on: ICD for high-risk patients, lifestyle modifications, drug avoidance, fever management, family screening and counseling.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f4ff',
        textColor: '#3730a3',
        animation: 'fade'
      },
      {
        id: 'icd-indications',
        title: 'ICD Indications',
        content: 'Class I: Aborted sudden death, sustained VT/VF. Class IIa: Syncope with spontaneous Type 1. Class IIb: Asymptomatic with spontaneous Type 1. Family decision important.',
        type: 'tabs',
        tabs: [
          {
            title: 'Class I (Definite Benefit)',
            content: 'Survivors of VF/VT, hemodynamically significant sustained VT'
          },
          {
            title: 'Class IIa (Reasonable)',
            content: 'Syncope with spontaneous Type 1 pattern - strong consideration for ICD'
          },
          {
            title: 'Class IIb (May Consider)',
            content: 'Asymptomatic with spontaneous Type 1 - individualized decision making'
          }
        ],
        layout: 'centered',
        backgroundColor: '#e0e7ff',
        animation: 'slide'
      },
      {
        id: 'lifestyle-modifications',
        title: 'Lifestyle Modifications',
        content: 'Avoid high-fever states, drugs that worsen Brugada pattern, excessive alcohol. Moderate exercise usually safe. Aggressive fever management. Medical alert identification recommended.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'Activity Restrictions',
            content: 'Moderate exercise generally safe, avoid extreme heat exposure, stay hydrated'
          },
          {
            title: 'Medical Precautions',
            content: 'Medical alert bracelet, carry drug avoidance list, inform all healthcare providers'
          },
          {
            title: 'Fever Management',
            content: 'Aggressive antipyretics, early medical attention, family/school education protocols'
          }
        ],
        layout: 'full',
        backgroundColor: '#f0f9ff'
      },
      {
        id: 'drug-avoidance-list',
        title: 'Drug Avoidance List',
        content: 'Avoid sodium channel blockers: Class IC antiarrhythmics (flecainide, propafenone), some anesthetics (bupivacaine), tricyclic antidepressants. BrugadaDrugs.org reference.',
        type: 'highlight',
        highlights: [
          '🚫 Sodium channel blockers - Flecainide, propafenone, disopyramide',
          '💉 Anesthetic agents - Bupivacaine, lidocaine (high doses)',
          '💊 Psychotropic drugs - Tricyclic antidepressants, lithium'
        ],
        layout: 'centered',
        backgroundColor: '#fef2f2'
      },
      {
        id: 'pharmacological-approaches',
        title: 'Pharmacological Approaches',
        content: 'Limited options: Quinidine may reduce VF inducibility (Ito channel block), isoproterenol for VF storms. Cilostazol experimental. No proven mortality benefit from drugs.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#fafafa'
      },
      {
        id: 'special-circumstances',
        title: 'Special Circumstances',
        content: 'Pregnancy: Generally safe, avoid contraindicated drugs. Surgery: Anesthesia planning, avoid problematic agents. Emergency care: Inform providers, drug allergy alerts.',
        type: 'tabs',
        tabs: [
          {
            title: 'Pregnancy Management',
            content: 'Generally low risk, avoid contraindicated drugs, genetic counseling for offspring'
          },
          {
            title: 'Surgical Considerations',
            content: 'Pre-operative anesthesia consultation, avoid sodium channel blocking agents'
          },
          {
            title: 'Emergency Protocols',
            content: 'Medical alert information, drug allergy documentation, emergency contact cards'
          }
        ],
        layout: 'full',
        backgroundColor: '#f8fafc'
      },
      {
        id: 'unit-5-summary',
        title: 'Unit 5 Summary: Management',
        content: 'MASTERED: ICD indications, lifestyle modifications, drug avoidance, pharmacological options, and special circumstances. Comprehensive management approach achieved!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#dcfce7',
        textColor: '#166534',
        animation: 'fade'
      },
      
      // ============= UNIT 6: SPECIAL CONSIDERATIONS (Slides 36-42) =============
      {
        id: 'provocative-testing-overview',
        title: 'Provocative Testing Overview',
        content: 'Sodium channel blocker challenge to unmask concealed Brugada patterns. Used for family screening, suspected cases with Type 2-3 patterns. Requires intensive monitoring.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f1f5f9',
        textColor: '#475569',
        animation: 'fade'
      },
      {
        id: 'provocative-test-protocols',
        title: 'Provocative Test Protocols',
        content: 'Agents: Flecainide (2mg/kg IV), procainamide (10mg/kg IV), pilsicainide (1mg/kg IV). Monitor continuously, stop if Type 1 emerges or concerning arrhythmias develop.',
        type: 'tabs',
        tabs: [
          {
            title: 'Flecainide Protocol',
            content: 'Most commonly used: 2mg/kg IV over 10 minutes, monitor for 30-60 minutes post-infusion'
          },
          {
            title: 'Safety Monitoring',
            content: 'Continuous telemetry, resuscitation equipment ready, stop if Type 1 pattern or VT/VF occurs'
          },
          {
            title: 'Interpretation',
            content: 'Positive test: emergence of Type 1 pattern. Negative test: no diagnostic pattern change'
          }
        ],
        layout: 'centered',
        backgroundColor: '#e2e8f0',
        animation: 'slide'
      },
      {
        id: 'testing-indications-contraindications',
        title: 'Testing Indications & Contraindications',
        content: 'Indications: Family screening, Type 2-3 patterns needing clarification. Contraindications: Known Type 1 pattern, structural heart disease, heart failure, conduction abnormalities.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'Appropriate Candidates',
            content: 'Family members of probands, patients with Type 2-3 patterns needing diagnosis clarification'
          },
          {
            title: 'Absolute Contraindications',
            content: 'Spontaneous Type 1 pattern, structural heart disease, severe conduction abnormalities'
          },
          {
            title: 'Relative Contraindications',
            content: 'Heart failure, significant LV dysfunction, atrial fibrillation, pregnancy'
          }
        ],
        layout: 'full',
        backgroundColor: '#f1f5f9'
      },
      {
        id: 'pediatric-considerations',
        title: 'Pediatric Brugada Syndrome',
        content: 'Rare in children, usually presents with fever-induced VF. Pattern may not manifest until adulthood. Genetic testing important. Aggressive fever management essential.',
        type: 'highlight',
        highlights: [
          '🧒 Fever presentation - Most pediatric events associated with febrile illness',
          '📅 Age-dependent penetrance - Pattern may not appear until 2nd-3rd decade',
          '🧬 Genetic testing crucial - May identify at-risk children before pattern emergence'
        ],
        layout: 'centered',
        backgroundColor: '#f8fafc'
      },
      {
        id: 'athletic-participation',
        title: 'Athletic Participation',
        content: 'Competitive sports controversial. Asymptomatic patients with ICD may participate with restrictions. Individual risk assessment essential. Avoid extreme environmental conditions.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#f9fafb'
      },
      {
        id: 'pregnancy-family-planning',
        title: 'Pregnancy & Family Planning',
        content: 'Generally well-tolerated in pregnancy. 50% inheritance risk requires genetic counseling. Pre-implantation genetic diagnosis available for known mutations. Partner testing considerations.',
        type: 'tabs',
        tabs: [
          {
            title: 'Pregnancy Safety',
            content: 'Generally safe, avoid contraindicated medications, standard obstetric care'
          },
          {
            title: 'Genetic Counseling',
            content: '50% risk to offspring, pre-implantation genetic diagnosis options available'
          },
          {
            title: 'Family Planning',
            content: 'Partner screening, reproductive options, psychological support for family decisions'
          }
        ],
        layout: 'full',
        backgroundColor: '#f0f9ff'
      },
      {
        id: 'unit-6-summary',
        title: 'Unit 6 Summary: Special Considerations',
        content: 'MASTERED: Provocative testing protocols, pediatric considerations, athletic participation, pregnancy management, and family planning. Complete Brugada expertise achieved!',
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
      id: 'final-brugada-mastery-assessment',
      type: 'final-assessment',
      xp: 50,
      audio: {
        mainNarration: {
          audioUrl: '/lessonaudio/brugada/mastery-celebration.mp3',
          duration: 15,
          transcript: "Outstanding work mastering Brugada syndrome! You've learned pattern recognition, genetic testing, risk stratification, and evidence-based management. Now demonstrate your expertise with this comprehensive assessment."
        }
      },
      images: {
        mainImage: '/ecg/ecg_dataset_clean/Brugada_syndrome/clean_00245_Brugada_syndrome.png',
        slideImages: []
      },
      content: {
        prerequisiteMessage: "🎯 Final Assessment: Complete all 6 units to unlock your Brugada Syndrome Mastery Certificate!",
        questions: [
          {
            id: "type1-pattern-assessment",
            type: "multiple-choice",
            question: "ECG shows coved ST elevation 3mm in V1-V2 with negative T waves and no isoelectric segment. This represents:",
            options: [
              "Type 2 Brugada pattern - needs provocative testing",
              "Type 1 Brugada pattern - diagnostic for Brugada syndrome",
              "Incomplete RBBB with ST changes",
              "Anterior STEMI pattern"
            ],
            correctAnswer: 1,
            explanation: "Correct! Type 1 Brugada pattern: coved ST elevation ≥2mm in V1-V2, negative T wave, no isoelectric separation. This is diagnostic for Brugada syndrome and indicates high arrhythmic risk.",
            imageUrl: "/ecg/ecg_dataset_clean/Brugada_syndrome/clean_00156_Brugada_syndrome.png"
          },
          {
            id: "genetics-inheritance-assessment",
            type: "multiple-choice",
            question: "A patient with Brugada syndrome asks about inheritance risk for children. The inheritance pattern is:",
            options: [
              "Autosomal recessive with complete penetrance",
              "X-linked with male predominance",
              "Autosomal dominant with incomplete penetrance (30-35%)",
              "Mitochondrial inheritance"
            ],
            correctAnswer: 2,
            explanation: "Correct! Brugada syndrome shows autosomal dominant inheritance with incomplete penetrance (30-35%). This means 50% inheritance risk, but only 30-35% of mutation carriers show ECG pattern.",
            imageUrl: "/lessonimages/brugada-inheritance-pattern.png"
          },
          {
            id: "risk-stratification-assessment",
            type: "multiple-choice",
            question: "Which patient has the HIGHEST risk for sudden cardiac death in Brugada syndrome?",
            options: [
              "Asymptomatic male with drug-induced Type 1 pattern",
              "Female with Type 2 pattern and family history",
              "Male with spontaneous Type 1 pattern and syncope history",
              "Asymptomatic female with positive genetic test"
            ],
            correctAnswer: 2,
            explanation: "Correct! Highest risk: male gender + spontaneous Type 1 pattern + syncope history. This combination warrants strong ICD consideration due to very high sudden death risk.",
            imageUrl: "/lessonimages/brugada-risk-stratification.png"
          },
          {
            id: "icd-indications-assessment",
            type: "multiple-choice",
            question: "ICD implantation is Class I indication (definite benefit) in Brugada syndrome for:",
            options: [
              "Asymptomatic patient with spontaneous Type 1",
              "Syncope with drug-induced Type 1 pattern",
              "Survivors of VF or hemodynamically significant VT",
              "Strong family history of sudden death"
            ],
            correctAnswer: 2,
            explanation: "Correct! Class I ICD indication: survivors of VF/VT or hemodynamically significant sustained VT. These patients have proven high risk and definite survival benefit from ICD.",
            imageUrl: "/lessonimages/brugada-icd-indications.png"
          },
          {
            id: "drug-avoidance-assessment",
            type: "multiple-choice",
            question: "A Brugada patient needs antiarrhythmic therapy. Which drug should be AVOIDED?",
            options: [
              "Amiodarone",
              "Flecainide",
              "Beta-blockers",
              "Quinidine"
            ],
            correctAnswer: 1,
            explanation: "Correct! Flecainide (Class IC) is contraindicated in Brugada syndrome as it blocks sodium channels and can worsen the pattern or trigger VF. Quinidine may actually be protective.",
            imageUrl: "/lessonimages/brugada-drug-avoidance.png"
          },
          {
            id: "provocative-testing-assessment",
            type: "multiple-choice",
            question: "Provocative testing with flecainide is indicated for:",
            options: [
              "Patient with known spontaneous Type 1 pattern",
              "Family member with normal ECG needing screening",
              "Patient with structural heart disease",
              "Emergency diagnosis of chest pain"
            ],
            correctAnswer: 1,
            explanation: "Correct! Provocative testing is used for family screening when baseline ECG is normal or shows Type 2-3 patterns. It's contraindicated in known Type 1 patterns or structural heart disease.",
            imageUrl: "/lessonimages/provocative-testing-protocol.png"
          },
          {
            id: "fever-management-assessment",
            type: "multiple-choice",
            question: "Why is aggressive fever management crucial in Brugada syndrome patients?",
            options: [
              "Fever reduces sodium channel function and prolongs QT",
              "Hyperthermia increases calcium channel activity",
              "Fever unmasks Type 1 patterns and can trigger VF",
              "High temperature causes bradycardia and heart blocks"
            ],
            correctAnswer: 2,
            explanation: "Correct! Fever unmasks Brugada patterns by reducing sodium channel function and can trigger VF episodes. Aggressive fever management with antipyretics is essential for all Brugada patients.",
            imageUrl: "/lessonimages/fever-brugada-trigger.png"
          },
          {
            id: "pediatric-brugada-assessment",
            type: "multiple-choice",
            question: "In pediatric Brugada syndrome, the most common presentation is:",
            options: [
              "Asymptomatic ECG abnormalities found on screening",
              "Exercise-induced syncope during sports",
              "Fever-induced ventricular fibrillation episodes",
              "Progressive heart failure symptoms"
            ],
            correctAnswer: 2,
            explanation: "Correct! Pediatric Brugada syndrome most commonly presents with fever-induced VF episodes. The ECG pattern may not manifest until adulthood due to age-dependent penetrance.",
            imageUrl: "/lessonimages/pediatric-brugada-presentation.png"
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
