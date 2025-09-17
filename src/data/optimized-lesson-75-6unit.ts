import { Lesson } from '@/types/learning';

export const optimizedLesson75: Lesson = {
  id: 'lesson-75-optimized-6unit',
  moduleId: 'module-10',
  title: "Pericarditis ECG Patterns & Differential Diagnosis",
  description: "Master pericarditis ECG stages, differentiate from STEMI, and recognize complications like tamponade",
  order: 75,
  estimatedTime: 45,
  content: {
    type: 'mixed',
    introduction: "Master pericarditis ECG interpretation - a critical skill for avoiding misdiagnosis as STEMI! Learn the four stages of pericarditis, PR segment changes, differentiate from myocardial infarction, recognize pericardial effusion signs, and identify life-threatening cardiac tamponade patterns.",
    summary: "Pericarditis mastery: four-stage evolution, PR changes, STEMI differentiation, effusion recognition, and tamponade diagnosis.",
    keyPoints: [
      "Recognize four stages of pericarditis evolution",
      "Master PR segment depression patterns", 
      "Differentiate pericarditis from STEMI accurately",
      "Identify pericardial effusion and tamponade signs"
    ],
    resources: [
      { title: "Pericarditis vs STEMI calculator", url: "/resources/pericarditis-stemi", type: "tool", description: "Interactive differentiation tool for pericarditis vs STEMI" },
      { title: "PR segment analysis guide", url: "/resources/pr-segment-analysis", type: "reference", description: "Comprehensive PR segment depression patterns" },
      { title: "Tamponade recognition atlas", url: "/resources/tamponade-ecg", type: "reference", description: "ECG signs of cardiac tamponade" }
    ],
    sections: [
      {
        id: 'unit-1-pericarditis-fundamentals',
        title: "Unit 1: Pericarditis Fundamentals",
        content: "Understand pericarditis pathophysiology and ECG manifestations"
      },
      {
        id: 'unit-2-four-stages',
        title: "Unit 2: Four-Stage Evolution", 
        content: "Master the sequential ECG changes through pericarditis stages"
      },
      {
        id: 'unit-3-pr-segment-changes',
        title: "Unit 3: PR Segment Changes",
        content: "Recognize characteristic PR depression and elevation patterns"
      },
      {
        id: 'unit-4-stemi-differentiation',
        title: "Unit 4: STEMI Differentiation",
        content: "Critical differentiation between pericarditis and myocardial infarction"
      },
      {
        id: 'unit-5-effusion-tamponade',
        title: "Unit 5: Effusion & Tamponade",
        content: "Recognize pericardial effusion and cardiac tamponade ECG signs"
      },
      {
        id: 'unit-6-special-variants',
        title: "Unit 6: Special Variants",
        content: "Identify localized pericarditis, post-cardiac injury, and atypical patterns"
      }
    ],
    slides: [
      
      // ============= UNIT 1: PERICARDITIS FUNDAMENTALS (Slides 1-7) =============
      {
        id: 'pericarditis-overview',
        title: 'Pericarditis Overview',
        content: 'Inflammation of pericardial layers causing characteristic ECG changes: diffuse ST elevation, PR depression, four-stage evolution. Must differentiate from STEMI to avoid inappropriate thrombolysis.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade'
      },
      {
        id: 'pathophysiology-mechanisms',
        title: 'Pathophysiology Mechanisms',
        content: 'Pericardial inflammation causes: current of injury (ST elevation), atrial inflammation (PR depression), eventual fibrosis. Unlike STEMI, affects entire epicardial surface diffusely.',
        type: 'tabs',
        tabs: [
          {
            title: 'Inflammatory Process',
            content: 'Pericardial irritation → Current of injury → Diffuse ST elevation without territorial pattern'
          },
          {
            title: 'Atrial Involvement',
            content: 'Atrial epicardium inflammation → PR segment depression (characteristic finding)'
          },
          {
            title: 'Evolutionary Changes',
            content: 'Acute inflammation → Resolution → Possible chronic constriction or recurrence'
          }
        ],
        layout: 'centered',
        backgroundColor: '#fef3c7',
        animation: 'slide'
      },
      {
        id: 'etiologies-classification',
        title: 'Etiologies & Classification',
        content: 'Causes: Viral (most common), idiopathic, bacterial, uremic, post-MI (Dressler syndrome), radiation, malignancy, autoimmune. Acute vs chronic vs recurrent presentations.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'Infectious Causes',
            content: 'Viral: Coxsackie, EBV, CMV. Bacterial: TB, staph, strep. Fungal in immunocompromised patients'
          },
          {
            title: 'Non-infectious Causes',
            content: 'Uremia, post-MI (Dressler), radiation, malignancy, autoimmune (SLE, RA), drug-induced'
          },
          {
            title: 'Temporal Classification',
            content: 'Acute (<6 weeks), incessant (>6 weeks), recurrent (after symptom-free interval)'
          }
        ],
        layout: 'full',
        backgroundColor: '#ecfdf5'
      },
      {
        id: 'clinical-presentation',
        title: 'Clinical Presentation',
        content: 'Classic triad: chest pain (sharp, pleuritic, positional), pericardial friction rub, ECG changes. Pain worse supine, better sitting forward. May have fever, dyspnea.',
        type: 'highlight',
        highlights: [
          '⚡ Positional chest pain - Sharp, worse supine, better sitting forward',
          '🔊 Pericardial friction rub - Three-component scratchy sound',
          '📊 ECG changes - Diffuse ST elevation with PR depression'
        ],
        layout: 'centered',
        backgroundColor: '#fff7ed'
      },
      {
        id: 'diagnostic-criteria',
        title: 'Diagnostic Criteria',
        content: 'Diagnosis requires ≥2 of 4 criteria: typical chest pain, pericardial friction rub, characteristic ECG changes, pericardial effusion. High clinical suspicion important.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#f3f4f6'
      },
      {
        id: 'laboratory-imaging-correlates',
        title: 'Laboratory & Imaging Correlates',
        content: 'Labs: Elevated inflammatory markers (ESR, CRP), troponin may be mildly elevated. Echo shows effusion. CT/MRI demonstrate pericardial thickening/enhancement.',
        type: 'tabs',
        tabs: [
          {
            title: 'Laboratory Findings',
            content: 'Elevated ESR/CRP, mild troponin elevation (myopericarditis), normal or mild CK elevation'
          },
          {
            title: 'Echocardiography',
            content: 'Pericardial effusion, normal wall motion (unless myopericarditis), tamponade physiology'
          },
          {
            title: 'Advanced Imaging',
            content: 'CT: pericardial thickening. MRI: inflammation/enhancement, tissue characterization'
          }
        ],
        layout: 'full',
        backgroundColor: '#f8fafc'
      },
      {
        id: 'unit-1-summary',
        title: 'Unit 1 Summary: Pericarditis Fundamentals',
        content: 'MASTERED: Pericarditis pathophysiology, etiologies, clinical presentation, diagnostic criteria, and laboratory correlates. Foundation set for ECG pattern recognition!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#dcfce7',
        textColor: '#166534',
        animation: 'fade'
      },
      
      // ============= UNIT 2: FOUR-STAGE EVOLUTION (Slides 8-14) =============
      {
        id: 'four-stage-overview',
        title: 'Four-Stage ECG Evolution',
        content: 'Pericarditis evolves through four distinct ECG stages over days to weeks. Understanding this progression helps differentiate from STEMI and track disease evolution.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade'
      },
      {
        id: 'stage-1-acute-changes',
        title: 'Stage 1: Acute Changes',
        content: 'Diffuse ST elevation (concave upward), PR depression in most leads except aVR/V1 (PR elevation). No reciprocal changes. Occurs hours to days after onset.',
        type: 'tabs',
        tabs: [
          {
            title: 'ST Elevation Pattern',
            content: 'Diffuse, concave upward ST elevation in limb leads and V2-V6. No territorial pattern like STEMI'
          },
          {
            title: 'PR Segment Changes',
            content: 'PR depression in most leads, PR elevation in aVR and sometimes V1. Highly characteristic'
          },
          {
            title: 'Key Differentiators',
            content: 'Concave ST elevation, no reciprocal changes, diffuse distribution, PR depression'
          }
        ],
        layout: 'centered',
        backgroundColor: '#fee2e2',
        animation: 'slide'
      },
      {
        id: 'stage-2-normalization',
        title: 'Stage 2: Normalization',
        content: 'ST segments return toward baseline, PR segments normalize. May see flattening of T waves. This stage can last days to weeks. ECG may appear normal.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'ST Segment Changes',
            content: 'ST elevation resolves, returns to baseline. No Q wave development (unlike STEMI)'
          },
          {
            title: 'PR Segment Recovery',
            content: 'PR depression normalizes, returns to isoelectric baseline'
          },
          {
            title: 'T Wave Evolution',
            content: 'T waves may flatten but typically remain upright, unlike STEMI T wave inversion'
          }
        ],
        layout: 'full',
        backgroundColor: '#fef7ff'
      },
      {
        id: 'stage-3-t-wave-inversion',
        title: 'Stage 3: T Wave Inversion',
        content: 'Widespread T wave inversion develops, may be diffuse or localized. Usually occurs weeks after onset. T waves typically less deep than post-STEMI changes.',
        type: 'highlight',
        highlights: [
          '📉 Diffuse T inversion - Widespread, not territorial like STEMI',
          '⏱️ Timing - Develops weeks after acute phase, slower than STEMI',
          '📊 Morphology - Generally less deep than post-MI T wave inversion'
        ],
        layout: 'centered',
        backgroundColor: '#fef2f2'
      },
      {
        id: 'stage-4-resolution',
        title: 'Stage 4: Resolution',
        content: 'T waves normalize, ECG returns to baseline. May take months to years. Some patients develop persistent T wave changes or progress to chronic/recurrent pericarditis.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#f0f9ff'
      },
      {
        id: 'temporal-variability',
        title: 'Temporal Variability',
        content: 'Stage progression highly variable: some patients skip stages, others have prolonged courses. Recurrent pericarditis may repeat cycle. Not all patients show classic four-stage pattern.',
        type: 'tabs',
        tabs: [
          {
            title: 'Variable Progression',
            content: 'Not all patients follow exact sequence, some skip stages or have atypical evolution'
          },
          {
            title: 'Recurrent Disease',
            content: 'May repeat ECG changes with each recurrence, typically less severe'
          },
          {
            title: 'Chronic Forms',
            content: 'Some develop persistent changes, chronic constriction, or recurrent episodes'
          }
        ],
        layout: 'full',
        backgroundColor: '#f1f5f9'
      },
      {
        id: 'unit-2-summary',
        title: 'Unit 2 Summary: Four-Stage Evolution',
        content: 'MASTERED: Four-stage pericarditis progression, timing of changes, variability patterns, and clinical correlation. Complete ECG evolution understanding achieved!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#dcfce7',
        textColor: '#166534',
        animation: 'fade'
      },
      
      // ============= UNIT 3: PR SEGMENT CHANGES (Slides 15-21) =============
      {
        id: 'pr-segment-overview',
        title: 'PR Segment Changes Overview',
        content: 'PR segment depression in pericarditis reflects atrial epicardial inflammation. Characteristic pattern: PR depression in most leads, PR elevation in aVR (and sometimes V1). Highly specific finding.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#166534',
        animation: 'fade'
      },
      {
        id: 'pr-depression-pattern',
        title: 'PR Depression Pattern',
        content: 'PR depression seen in leads I, II, III, aVF, V2-V6. Reflects atrial current of injury from epicardial inflammation. Usually accompanies ST elevation in Stage 1.',
        type: 'tabs',
        tabs: [
          {
            title: 'Lead Distribution',
            content: 'PR depression: I, II, III, aVF, V2-V6. PR elevation: aVR, sometimes V1'
          },
          {
            title: 'Mechanism',
            content: 'Atrial epicardial inflammation → Atrial current of injury → PR segment depression'
          },
          {
            title: 'Clinical Significance',
            content: 'Highly specific for pericarditis, helps differentiate from STEMI and other causes'
          }
        ],
        layout: 'centered',
        backgroundColor: '#d1fae5',
        animation: 'slide'
      },
      {
        id: 'avr-elevation-significance',
        title: 'aVR Elevation Significance',
        content: 'aVR shows PR elevation (opposite to other leads) and may show ST depression. This reciprocal pattern in aVR is characteristic of pericarditis and helps confirm diagnosis.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'aVR PR Elevation',
            content: 'Reciprocal to widespread PR depression, reflects atrial current of injury from opposite perspective'
          },
          {
            title: 'aVR ST Changes',
            content: 'May show ST depression reciprocal to widespread ST elevation, normal finding in pericarditis'
          },
          {
            title: 'Diagnostic Value',
            content: 'aVR changes support pericarditis diagnosis, help exclude other conditions'
          }
        ],
        layout: 'full',
        backgroundColor: '#f0fdf4'
      },
      {
        id: 'pr-measurement-technique',
        title: 'PR Measurement Technique',
        content: 'Measure PR segment (end of P wave to beginning of QRS), not PR interval. Compare to TP segment baseline. Depression >0.8mm in limb leads significant.',
        type: 'highlight',
        highlights: [
          '📏 Measurement point - PR segment (P wave end to QRS start), not PR interval',
          '📊 Baseline reference - Use TP segment as baseline for comparison',
          '📈 Significance threshold - >0.8mm depression in limb leads considered significant'
        ],
        layout: 'centered',
        backgroundColor: '#ecfdf5'
      },
      {
        id: 'pr-vs-other-conditions',
        title: 'PR Changes vs Other Conditions',
        content: 'PR depression specific to pericarditis among common cardiac conditions. STEMI shows localized ST/PR changes. Atrial infarction rare. Early repolarization lacks PR changes.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#f0fdfa'
      },
      {
        id: 'temporal-pr-evolution',
        title: 'Temporal PR Evolution',
        content: 'PR depression typically appears early (Stage 1), resolves in Stage 2. May recur with pericarditis episodes. Persistent PR changes rare, may suggest ongoing inflammation.',
        type: 'tabs',
        tabs: [
          {
            title: 'Acute Phase',
            content: 'PR depression prominent in Stage 1, usually accompanies ST elevation'
          },
          {
            title: 'Resolution Phase',
            content: 'PR normalizes in Stage 2 as inflammation subsides, faster than ST changes'
          },
          {
            title: 'Recurrent Disease',
            content: 'PR depression may recur with each pericarditis episode, typically milder'
          }
        ],
        layout: 'full',
        backgroundColor: '#f8fafc'
      },
      {
        id: 'unit-3-summary',
        title: 'Unit 3 Summary: PR Segment Changes',
        content: 'MASTERED: PR depression patterns, aVR elevation, measurement techniques, differential diagnosis, and temporal evolution. PR segment expertise achieved!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#dcfce7',
        textColor: '#166534',
        animation: 'fade'
      },
      
      // ============= UNIT 4: STEMI DIFFERENTIATION (Slides 22-28) =============
      {
        id: 'stemi-differentiation-importance',
        title: 'STEMI Differentiation Importance',
        content: 'Critical differential: inappropriate thrombolysis in pericarditis can cause fatal hemorrhagic tamponade. Must accurately distinguish diffuse pericarditis from territorial STEMI patterns.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f1f5f9',
        textColor: '#475569',
        animation: 'fade'
      },
      {
        id: 'st-elevation-morphology',
        title: 'ST Elevation Morphology',
        content: 'Pericarditis: concave upward (saddle-shaped) ST elevation. STEMI: convex upward (tombstone) ST elevation. Pericarditis lacks territorial pattern of STEMI.',
        type: 'tabs',
        tabs: [
          {
            title: 'Pericarditis Morphology',
            content: 'Concave upward (saddle-shaped), diffuse distribution, maintains normal T wave relationship'
          },
          {
            title: 'STEMI Morphology',
            content: 'Convex upward (tombstone), territorial distribution, often with T wave abnormalities'
          },
          {
            title: 'Distribution Pattern',
            content: 'Pericarditis: diffuse. STEMI: territorial (anterior, inferior, lateral)'
          }
        ],
        layout: 'centered',
        backgroundColor: '#e2e8f0',
        animation: 'slide'
      },
      {
        id: 'reciprocal-changes-absence',
        title: 'Reciprocal Changes Absence',
        content: 'Pericarditis lacks reciprocal ST depression (except aVR). STEMI shows reciprocal depression opposite to infarct territory. Absence of reciprocal changes favors pericarditis.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'Pericarditis Pattern',
            content: 'Diffuse ST elevation without reciprocal depression, aVR may show ST depression'
          },
          {
            title: 'STEMI Pattern',
            content: 'Territorial ST elevation with reciprocal depression in opposite leads'
          },
          {
            title: 'Diagnostic Value',
            content: 'Absence of reciprocal changes strongly favors pericarditis over STEMI'
          }
        ],
        layout: 'full',
        backgroundColor: '#f1f5f9'
      },
      {
        id: 'spodick-sign',
        title: "Spodick's Sign",
        content: 'Characteristic pericarditis finding: downsloping TP segment often seen in leads with ST elevation. Named after Charles Spodick. Helps differentiate from STEMI and early repolarization.',
        type: 'highlight',
        highlights: [
          '📉 Downsloping TP segment - Characteristic finding in pericarditis',
          '👨‍⚕️ Spodick\'s sign - Named after cardiologist Charles Spodick',
          '🔍 Differential value - Helps distinguish from STEMI and early repolarization'
        ],
        layout: 'centered',
        backgroundColor: '#f8fafc'
      },
      {
        id: 'clinical-context-importance',
        title: 'Clinical Context Importance',
        content: 'Age, presentation, risk factors help differentiate. Pericarditis: younger patients, pleuritic pain, positional. STEMI: older patients, crushing pain, risk factors.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#f9fafb'
      },
      {
        id: 'biomarker-differences',
        title: 'Biomarker Differences',
        content: 'Pericarditis: normal or mildly elevated troponin, elevated inflammatory markers. STEMI: significantly elevated troponin/CK, reflects myocardial necrosis extent.',
        type: 'tabs',
        tabs: [
          {
            title: 'Pericarditis Biomarkers',
            content: 'Mild troponin elevation (myopericarditis), elevated ESR/CRP, normal CK-MB usually'
          },
          {
            title: 'STEMI Biomarkers',
            content: 'Significant troponin elevation, elevated CK-MB, reflects infarct size'
          },
          {
            title: 'Interpretation',
            content: 'Biomarkers support clinical and ECG differentiation, guide management decisions'
          }
        ],
        layout: 'full',
        backgroundColor: '#f0f9ff'
      },
      {
        id: 'unit-4-summary',
        title: 'Unit 4 Summary: STEMI Differentiation',
        content: 'MASTERED: ST morphology differences, reciprocal pattern absence, Spodick\'s sign, clinical context, and biomarker patterns. Critical STEMI differentiation achieved!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#dcfce7',
        textColor: '#166534',
        animation: 'fade'
      },
      
      // ============= UNIT 5: EFFUSION & TAMPONADE (Slides 29-35) =============
      {
        id: 'pericardial-effusion-overview',
        title: 'Pericardial Effusion Overview',
        content: 'Fluid accumulation in pericardial space. ECG changes: low voltage, electrical alternans (with tamponade). Size and hemodynamic impact vary widely.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f4ff',
        textColor: '#3730a3',
        animation: 'fade'
      },

      // 🎥 ECGkid Master Class: Pericardial Effusion & Electrical Alternans - Perfect Match!
      {
        id: 'ecgkid-pericardial-effusion',
        title: '🎥 Master Class: ECG Features of Pericardial Effusion & Electrical Alternans',
        content: 'Essential ECGkid masterclass! Learn to recognize different ECG patterns associated with pericardial effusion and master electrical alternans interpretation. Critical for tamponade recognition and emergency management.',
        type: 'youtube',
        layout: 'centered',
        backgroundColor: '#1e40af',
        textColor: '#ffffff',
        animation: 'fade',
        youtubeId: 'J6oFRQF9m2A',
        videoDuration: 153, // 2 minutes, 33 seconds
        minimumWatchTime: 120, // 2 minutes minimum
        requireFullWatch: false, // Educational content
        imageUrl: '/ecg/medical_accurate/low_voltage_effusion.png',
        imageAlt: 'ECGkid pericardial effusion and electrical alternans masterclass',
        hint: '💧 Master pericardial effusion ECG patterns with ECGkid!',
        highlights: [
          'Pericardial effusion ECG patterns',
          'Electrical alternans recognition',
          'Tamponade warning signs',
          'Critical emergency patterns'
        ]
      },
      {
        id: 'low-voltage-pattern',
        title: 'Low Voltage Pattern',
        content: 'Pericardial effusion causes low QRS voltage: <5mm in limb leads, <10mm in precordial leads. Results from fluid insulating effect around heart.',
        type: 'tabs',
        tabs: [
          {
            title: 'Voltage Criteria',
            content: 'Low voltage: QRS <5mm in limb leads, <10mm in precordial leads'
          },
          {
            title: 'Mechanism',
            content: 'Pericardial fluid acts as electrical insulator, dampening cardiac electrical signals'
          },
          {
            title: 'Sensitivity',
            content: 'Not always present, depends on effusion size and composition'
          }
        ],
        layout: 'centered',
        backgroundColor: '#e0e7ff',
        animation: 'slide'
      },
      {
        id: 'electrical-alternans',
        title: 'Electrical Alternans',
        content: 'Beat-to-beat QRS amplitude variation. Pathognomonic of cardiac tamponade. Results from heart swinging in fluid-filled pericardial space with respiratory variation.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'Mechanism',
            content: 'Heart swings back and forth in fluid-filled pericardium with each beat and respiratory cycle'
          },
          {
            title: 'ECG Pattern',
            content: 'Alternating QRS amplitude, may affect P waves and T waves, most visible in precordial leads'
          },
          {
            title: 'Clinical Significance',
            content: 'Pathognomonic of tamponade, indicates hemodynamically significant effusion'
          }
        ],
        layout: 'full',
        backgroundColor: '#f0f9ff'
      },
      {
        id: 'cardiac-tamponade-signs',
        title: 'Cardiac Tamponade Signs',
        content: 'Life-threatening condition: electrical alternans, low voltage, tachycardia, may lose pericarditis changes. Clinical: hypotension, elevated JVP, pulsus paradoxus.',
        type: 'highlight',
        highlights: [
          '⚡ Electrical alternans - Pathognomonic ECG finding for tamponade',
          '📉 Hemodynamic compromise - Hypotension, elevated JVP, pulsus paradoxus',
          '🚨 Medical emergency - Requires immediate pericardiocentesis'
        ],
        layout: 'centered',
        backgroundColor: '#fef2f2'
      },
      {
        id: 'effusion-size-correlation',
        title: 'Effusion Size Correlation',
        content: 'Small effusions may cause no ECG changes. Moderate effusions show low voltage. Large effusions risk tamponade with electrical alternans. Rate of accumulation matters more than size.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#fafafa'
      },
      {
        id: 'differential-low-voltage',
        title: 'Differential of Low Voltage',
        content: 'Other causes of low voltage: obesity, COPD, hypothyroidism, infiltrative disease, prior cardiac surgery. Clinical context and echocardiography help differentiate.',
        type: 'tabs',
        tabs: [
          {
            title: 'Extracardiac Causes',
            content: 'Obesity, COPD, pleural effusion, pneumothorax - anatomical factors'
          },
          {
            title: 'Cardiac Causes',
            content: 'Pericardial effusion, infiltrative disease, extensive MI, amyloidosis'
          },
          {
            title: 'Diagnostic Approach',
            content: 'Echocardiography key for detecting effusion, assess hemodynamic significance'
          }
        ],
        layout: 'full',
        backgroundColor: '#f8fafc'
      },
      {
        id: 'unit-5-summary',
        title: 'Unit 5 Summary: Effusion & Tamponade',
        content: 'MASTERED: Low voltage patterns, electrical alternans, tamponade recognition, effusion size correlation, and differential diagnosis. Life-saving tamponade recognition achieved!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#dcfce7',
        textColor: '#166534',
        animation: 'fade'
      },
      
      // ============= UNIT 6: SPECIAL VARIANTS (Slides 36-42) =============
      {
        id: 'localized-pericarditis',
        title: 'Localized Pericarditis',
        content: 'Regional pericardial inflammation may cause localized ECG changes mimicking STEMI. Post-cardiac surgery, post-MI, or infectious spread can cause focal patterns.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f1f5f9',
        textColor: '#475569',
        animation: 'fade'
      },
      {
        id: 'post-cardiac-injury-syndrome',
        title: 'Post-Cardiac Injury Syndrome',
        content: 'Develops weeks to months after cardiac surgery, MI, or trauma. May show typical pericarditis changes or atypical patterns. Higher risk of tamponade and recurrence.',
        type: 'tabs',
        tabs: [
          {
            title: 'Post-Surgical Pericarditis',
            content: 'Common after cardiac surgery, usually develops days to weeks post-operatively'
          },
          {
            title: 'Dressler Syndrome',
            content: 'Post-MI pericarditis, weeks to months after infarction, autoimmune mechanism suspected'
          },
          {
            title: 'Management Considerations',
            content: 'Higher tamponade risk, may require more aggressive treatment, consider prophylaxis'
          }
        ],
        layout: 'centered',
        backgroundColor: '#e2e8f0',
        animation: 'slide'
      },
      {
        id: 'constrictive-pericarditis',
        title: 'Constrictive Pericarditis',
        content: 'Chronic pericardial scarring with impaired filling. ECG shows low voltage, atrial abnormalities, possible AF. Hemodynamics more important than ECG for diagnosis.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'ECG Findings',
            content: 'Low voltage, biatrial enlargement, atrial fibrillation common, non-specific ST-T changes'
          },
          {
            title: 'Pathophysiology',
            content: 'Rigid pericardial shell impairs ventricular filling, equalization of pressures'
          },
          {
            title: 'Diagnosis',
            content: 'Cardiac catheterization, MRI, CT more diagnostic than ECG changes'
          }
        ],
        layout: 'full',
        backgroundColor: '#f1f5f9'
      },
      {
        id: 'myopericarditis',
        title: 'Myopericarditis',
        content: 'Combined myocardial and pericardial inflammation. Higher troponin levels, may show wall motion abnormalities. ECG combines pericarditis features with possible regional changes.',
        type: 'highlight',
        highlights: [
          '💔 Combined inflammation - Both myocardium and pericardium affected',
          '📈 Higher troponin - Reflects myocardial involvement vs pure pericarditis',
          '🔍 Wall motion changes - Echo may show regional abnormalities'
        ],
        layout: 'centered',
        backgroundColor: '#f8fafc'
      },
      {
        id: 'recurrent-pericarditis',
        title: 'Recurrent Pericarditis',
        content: 'Multiple episodes of pericarditis with symptom-free intervals. Each episode may show ECG changes, typically milder than initial presentation. Chronic management challenges.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#f9fafb'
      },
      {
        id: 'special-populations',
        title: 'Special Populations',
        content: 'Pediatric pericarditis often viral, may have atypical presentation. Elderly patients higher risk of bacterial causes. Immunocompromised patients risk unusual pathogens.',
        type: 'tabs',
        tabs: [
          {
            title: 'Pediatric Considerations',
            content: 'Often viral etiology, may present atypically, careful evaluation for underlying conditions'
          },
          {
            title: 'Elderly Patients',
            content: 'Higher risk of bacterial/malignant causes, more likely to develop complications'
          },
          {
            title: 'Immunocompromised',
            content: 'Risk of opportunistic infections, fungal causes, may have atypical presentations'
          }
        ],
        layout: 'full',
        backgroundColor: '#f0f9ff'
      },
      {
        id: 'unit-6-summary',
        title: 'Unit 6 Summary: Special Variants',
        content: 'MASTERED: Localized pericarditis, post-cardiac injury syndrome, constrictive patterns, myopericarditis, recurrent disease, and special populations. Complete pericarditis expertise achieved!',
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
      id: 'final-pericarditis-mastery-assessment',
      type: 'final-assessment',
      xp: 50,
      audio: {
        mainNarration: {
          audioUrl: '/lessonaudio/pericarditis/mastery-celebration.mp3',
          duration: 15,
          transcript: "Outstanding work mastering pericarditis ECG patterns! You've learned four-stage evolution, PR changes, STEMI differentiation, and tamponade recognition. Now demonstrate your expertise with this comprehensive assessment."
        }
      },
      images: {
        mainImage: '/ecg/ecg_dataset_clean/pericarditis/clean_00078_pericarditis.png',
        slideImages: []
      },
      content: {
        prerequisiteMessage: "🎯 Final Assessment: Complete all 6 units to unlock your Pericarditis Mastery Certificate!",
        questions: [
          {
            id: "stage1-pericarditis-assessment",
            type: "multiple-choice",
            question: "ECG shows diffuse concave ST elevation with PR depression in leads I, II, aVF, V2-V6, and PR elevation in aVR. This represents:",
            options: [
              "Anterior STEMI with reciprocal changes",
              "Stage 1 acute pericarditis",
              "Early repolarization variant",
              "Hyperacute T wave changes"
            ],
            correctAnswer: 1,
            explanation: "Correct! Stage 1 pericarditis: diffuse concave ST elevation, PR depression in most leads, PR elevation in aVR. This classic pattern differentiates from STEMI.",
            imageUrl: "/ecg/ecg_dataset_clean/pericarditis/clean_00123_pericarditis.png"
          },
          {
            id: "pericarditis-stemi-differentiation",
            type: "multiple-choice",
            question: "Which feature BEST differentiates pericarditis from STEMI?",
            options: [
              "Chest pain severity and duration",
              "Presence of Q waves on ECG",
              "Concave ST elevation with PR depression vs convex ST with reciprocal changes",
              "Age of patient and risk factors"
            ],
            correctAnswer: 2,
            explanation: "Correct! ECG morphology is key: pericarditis shows concave ST elevation with PR depression and no reciprocal changes, while STEMI shows convex ST elevation with reciprocal depression.",
            imageUrl: "/lessonimages/pericarditis-stemi-comparison.png"
          },
          {
            id: "electrical-alternans-assessment",
            type: "multiple-choice",
            question: "Electrical alternans on ECG is pathognomonic of:",
            options: [
              "Acute pericarditis Stage 1",
              "Cardiac tamponade",
              "Constrictive pericarditis",
              "Myopericarditis"
            ],
            correctAnswer: 1,
            explanation: "Correct! Electrical alternans (beat-to-beat QRS amplitude variation) is pathognomonic of cardiac tamponade, indicating heart swinging in fluid-filled pericardium.",
            imageUrl: "/lessonimages/electrical-alternans-pattern.png"
          },
          {
            id: "spodick-sign-assessment",
            type: "multiple-choice",
            question: "Spodick's sign in pericarditis refers to:",
            options: [
              "PR elevation in lead aVR",
              "Electrical alternans pattern",
              "Downsloping TP segment",
              "Low voltage QRS complexes"
            ],
            correctAnswer: 2,
            explanation: "Correct! Spodick's sign is the downsloping TP segment often seen in pericarditis. This finding helps differentiate from STEMI and early repolarization.",
            imageUrl: "/lessonimages/spodick-sign-demonstration.png"
          },
          {
            id: "four-stage-evolution-assessment",
            type: "multiple-choice",
            question: "In the four-stage evolution of pericarditis, T wave inversion typically occurs in:",
            options: [
              "Stage 1 - Acute changes",
              "Stage 2 - Normalization",
              "Stage 3 - T wave inversion",
              "Stage 4 - Resolution"
            ],
            correctAnswer: 2,
            explanation: "Correct! Stage 3 shows widespread T wave inversion developing weeks after onset. This follows ST normalization in Stage 2 and precedes final resolution in Stage 4.",
            imageUrl: "/lessonimages/pericarditis-stage-3-pattern.png"
          },
          {
            id: "pr-depression-significance",
            type: "multiple-choice",
            question: "PR segment depression in pericarditis results from:",
            options: [
              "Ventricular conduction delay",
              "Atrial epicardial inflammation",
              "AV node dysfunction",
              "Ventricular repolarization abnormality"
            ],
            correctAnswer: 1,
            explanation: "Correct! PR depression reflects atrial epicardial inflammation causing atrial current of injury. This is highly specific for pericarditis among cardiac conditions.",
            imageUrl: "/lessonimages/pr-depression-mechanism.png"
          },
          {
            id: "low-voltage-causes-assessment",
            type: "multiple-choice",
            question: "A patient with chest pain has low voltage QRS complexes (<5mm limb leads). Most likely cardiac cause:",
            options: [
              "Acute myocardial infarction",
              "Pericardial effusion",
              "Ventricular hypertrophy",
              "Bundle branch block"
            ],
            correctAnswer: 1,
            explanation: "Correct! Pericardial effusion causes low voltage by fluid insulation effect around the heart. Other causes include obesity, COPD, but effusion is the most likely cardiac cause.",
            imageUrl: "/lessonimages/low-voltage-pericardial-effusion.png"
          },
          {
            id: "post-cardiac-injury-assessment",
            type: "multiple-choice",
            question: "Dressler syndrome is characterized by:",
            options: [
              "Pericarditis occurring immediately after MI",
              "Post-MI pericarditis developing weeks to months later",
              "Constrictive pericarditis from chronic inflammation",
              "Pericarditis only in anterior wall MI"
            ],
            correctAnswer: 1,
            explanation: "Correct! Dressler syndrome is post-MI pericarditis developing weeks to months after infarction, thought to be autoimmune in mechanism. Higher risk of tamponade and recurrence.",
            imageUrl: "/lessonimages/dressler-syndrome-timeline.png"
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
