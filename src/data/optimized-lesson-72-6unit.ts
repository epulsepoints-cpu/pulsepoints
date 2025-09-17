import { Lesson } from '@/types/learning';

export const optimizedLesson72: Lesson = {
  id: 'lesson-72-optimized-6unit',
  moduleId: 'module-4',
  title: "ECG Evolution in Acute MI",
  description: "Track the temporal evolution of ECG changes from hyperacute to chronic phases",
  order: 72,
  estimatedTime: 45,
  content: {
    type: 'mixed',
    introduction: "Master ECG evolution in acute myocardial infarction! Learn to recognize and interpret the dynamic changes from hyperacute T waves through chronic Q wave patterns. Understanding evolution timing is crucial for diagnosis, prognosis, and treatment decisions.",
    summary: "ECG evolution mastery: hyperacute phase, ST elevation patterns, Q wave formation, T wave inversion, and chronic changes.",
    keyPoints: [
      "Recognize hyperacute T wave changes",
      "Understand ST elevation evolution", 
      "Identify Q wave formation patterns",
      "Apply evolution timing for clinical decisions"
    ],
    resources: [
      { title: "MI evolution timeline guide", url: "/resources/mi-evolution-timeline", type: "reference", description: "Complete MI evolution timeline reference" },
      { title: "ECG phase recognition atlas", url: "/resources/ecg-phase-atlas", type: "reference", description: "Visual guide to MI phase recognition" },
      { title: "Evolution case studies", url: "/resources/evolution-cases", type: "article", description: "Clinical cases showing MI evolution patterns" }
    ],
    sections: [
      {
        id: 'unit-1-evolution-fundamentals',
        title: "Unit 1: Evolution Fundamentals",
        content: "Master MI pathophysiology and ECG evolution timeline"
      },
      {
        id: 'unit-2-hyperacute-phase',
        title: "Unit 2: Hyperacute Phase", 
        content: "Recognize hyperacute T waves and early changes"
      },
      {
        id: 'unit-3-acute-elevation',
        title: "Unit 3: Acute ST Elevation",
        content: "Understand ST elevation patterns and reciprocal changes"
      },
      {
        id: 'unit-4-q-wave-formation',
        title: "Unit 4: Q Wave Formation",
        content: "Master Q wave development and necrosis patterns"
      },
      {
        id: 'unit-5-t-wave-inversion',
        title: "Unit 5: T Wave Inversion",
        content: "Analyze T wave evolution and reperfusion patterns"
      },
      {
        id: 'unit-6-chronic-changes',
        title: "Unit 6: Chronic Changes",
        content: "Understand chronic MI patterns and long-term implications"
      }
    ],
    slides: [
      
      // ============= UNIT 1: MI EVOLUTION FUNDAMENTALS (Slides 1-7) =============
      {
        id: 'mi-pathophysiology-timeline',
        title: 'MI Pathophysiology Timeline',
        content: 'MI evolution follows predictable phases: Ischemia (minutes) → Injury (hours) → Necrosis (hours-days) → Healing (weeks-months). Each phase has distinct ECG signatures.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade'
      },
      {
        id: 'ecg-changes-sequence',
        title: 'ECG Changes Sequence',
        content: 'Classic evolution: Hyperacute T waves (minutes-hours) → ST elevation (hours) → Q wave formation (hours-days) → T wave inversion (days-weeks) → Chronic Q waves (permanent).',
        type: 'tabs',
        tabs: [
          {
            title: 'What is the first ECG change in acute MI?',
            content: 'Hyperacute T waves - tall, peaked T waves in affected leads, often seen within minutes'
          },
          {
            title: 'When do pathological Q waves typically appear?',
            content: 'Usually 6-24 hours after MI onset, indicating established necrosis'
          }
        ],
        layout: 'centered',
        backgroundColor: '#fef3c7',
        animation: 'slide'
      },
      {
        id: 'cellular-basis-changes',
        title: 'Cellular Basis of ECG Changes',
        content: 'ECG evolution reflects cellular events: Ischemia (T wave changes), injury (ST changes), necrosis (Q waves), inflammation (T inversion), scar formation (chronic Q waves).',
        type: 'accordion',
        accordionItems: [
          {
            title: 'Ischemic Changes',
            content: 'T wave changes (tall, peaked, then flattened) reflect impaired repolarization from oxygen deficit'
          },
          {
            title: 'Injury Pattern',
            content: 'ST elevation from loss of membrane integrity and altered action potential morphology'
          },
          {
            title: 'Necrosis Markers',
            content: 'Q waves from electrically silent necrotic tissue - no depolarization contribution'
          }
        ],
        layout: 'full',
        backgroundColor: '#ecfdf5'
      },
      {
        id: 'transmural-vs-subendocardial',
        title: 'Transmural vs Subendocardial Evolution',
        content: 'Transmural MI (STEMI): Full-thickness, shows all evolution phases. Subendocardial MI (NSTEMI): Partial thickness, may not develop Q waves, different evolution pattern.',
        type: 'highlight',
        highlights: [
          '🔴 Transmural (STEMI) - Full-thickness necrosis, complete evolution pattern with Q waves',
          '🟢 Subendocardial (NSTEMI) - Partial thickness, may lack Q waves, different evolution',
          '🌊 Wavefront phenomenon - Necrosis spreads from endocardium to epicardium over time'
        ],
        layout: 'centered',
        backgroundColor: '#fff7ed'
      },
      {
        id: 'timing-variability-factors',
        title: 'Factors Affecting Evolution Timing',
        content: 'Evolution timing varies with: vessel size, collateral circulation, reperfusion therapy, patient age, medications. Rapid reperfusion can halt or reverse evolution.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#f3f4f6'
      },
      {
        id: 'early-vs-late-presentation',
        title: 'Early vs Late presentation',
        content: 'Early presentation (0-6 hours): Hyperacute T waves, early ST elevation. Late presentation (>6 hours): Established ST elevation, emerging Q waves. Very late (>24 hours): Q waves, T inversion.',
        type: 'tabs',
        tabs: [
          {
            title: 'Hyperacute (0-1 hour)',
            content: 'Peaked T waves, minimal ST elevation, symptoms may precede ECG changes'
          },
          {
            title: 'Acute (1-6 hours)',
            content: 'Frank ST elevation, hyperacute T waves normalize, early Q waves may appear'
          },
          {
            title: 'Established (6-24 hours)',
            content: 'Persistent ST elevation, Q wave development, early T wave changes'
          }
        ],
        layout: 'full',
        backgroundColor: '#f8fafc'
      },
      {
        id: 'unit-1-summary',
        title: 'Unit 1 Summary: Evolution Fundamentals',
        content: 'MASTERED: MI pathophysiology timeline, ECG sequence, cellular basis, transmural vs subendocardial patterns, timing factors, and presentation phases. Foundation set for detailed evolution!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#dcfce7',
        textColor: '#166534',
        animation: 'fade'
      },
      
      // ============= UNIT 2: HYPERACUTE PHASE (Slides 8-14) =============
      {
        id: 'hyperacute-t-wave-recognition',
        title: 'Hyperacute T Wave Recognition',
        content: 'Hyperacute T waves: Tall, peaked, symmetric T waves in affected leads. Often the FIRST ECG sign of MI, may appear within minutes of symptom onset. Easy to miss!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade'
      },
      {
        id: 'hyperacute-criteria',
        title: 'Hyperacute T Wave Criteria',
        content: 'Criteria: T wave height >50% of QRS in same lead, asymmetric morphology, affected territory distribution, clinical correlation (chest pain). Duration: minutes to few hours.',
        type: 'flashcard',
        tabs: [
          {
            title: 'What makes T waves "hyperacute"?',
            content: 'Height >50% of QRS, peaked/asymmetric shape, territory-specific distribution with symptoms'
          },
          {
            title: 'How long do hyperacute T waves typically last?',
            content: 'Minutes to 1-2 hours, then evolve to ST elevation or normalize with reperfusion'
          }
        ],
        layout: 'centered',
        backgroundColor: '#fee2e2',
        animation: 'slide'
      },
      {
        id: 'hyperacute-territories',
        title: 'Hyperacute Changes by Territory',
        content: 'Anterior (V2-V4): Most obvious hyperacute T waves. Inferior (II, III, aVF): May be subtle. Lateral (I, aVL, V5-V6): Often missed. Posterior: Reciprocal changes V1-V2.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'Anterior Territory Hyperacute',
            content: 'V2-V4 show prominent peaked T waves, easily recognizable, often >10mm height'
          },
          {
            title: 'Inferior Territory Hyperacute',
            content: 'II, III, aVF may show subtle peaked T waves, compare to baseline if available'
          },
          {
            title: 'Lateral Territory Hyperacute',
            content: 'I, aVL, V5-V6 changes often subtle, need high suspicion with clinical correlation'
          }
        ],
        layout: 'full',
        backgroundColor: '#fef7ff'
      },
      {
        id: 'hyperacute-vs-normal-variants',
        title: 'Hyperacute vs Normal Variants',
        content: 'Differentiating hyperacute T waves from: benign early repolarization (concave ST), hyperkalemia (narrow base), normal tall T waves (symmetric). Clinical context crucial!',
        type: 'highlight',
        highlights: [
          '🔸 Benign early repolarization - Concave ST elevation, J-point notching, stable over time',
          '🔸 Hyperkalemia - Narrow-based peaked T waves, widened QRS',
          '🔸 True hyperacute - Broad-based, asymmetric, with symptoms and territory distribution'
        ],
        layout: 'centered',
        backgroundColor: '#fef2f2'
      },
      {
        id: 'hyperacute-clinical-correlation',
        title: 'Hyperacute Clinical Correlation',
        content: 'Hyperacute T waves with chest pain = MI until proven otherwise. May be only ECG change initially. Serial ECGs essential - may evolve to ST elevation within hours.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#f0fdfa'
      },
      {
        id: 'hyperacute-management-implications',
        title: 'Hyperacute Management Implications',
        content: 'Hyperacute T waves indicate very early MI - optimal time for reperfusion therapy. Consider thrombolytics if no PCI available. Time is muscle - act fast!',
        type: 'tabs',
        tabs: [
          {
            title: 'Recognition Urgency',
            content: 'Hyperacute changes may be transient - serial ECGs every 15-30 minutes in early presentation'
          },
          {
            title: 'Reperfusion Window',
            content: 'Optimal time for intervention - maximum myocardium salvage potential'
          },
          {
            title: 'Clinical Decision Making',
            content: 'Strong clinical suspicion + hyperacute changes = activate catheterization laboratory'
          }
        ],
        layout: 'full',
        backgroundColor: '#f1f5f9'
      },
      {
        id: 'unit-2-summary',
        title: 'Unit 2 Summary: Hyperacute Phase',
        content: 'MASTERED: Hyperacute T wave recognition, criteria, territorial patterns, differential diagnosis, clinical correlation, and management implications. Earliest MI detection achieved!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#dcfce7',
        textColor: '#166534',
        animation: 'fade'
      },
      
      // ============= UNIT 3: ACUTE STEMI PHASE (Slides 15-21) =============
      {
        id: 'st-elevation-development',
        title: 'ST Elevation Development',
        content: 'ST elevation develops within hours of hyperacute phase. Convex (coved) morphology indicates injury. Height and morphology correlate with infarct size and acuity.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#166534',
        animation: 'fade'
      },
      {
        id: 'st-elevation-morphology',
        title: 'ST Elevation Morphology Types',
        content: 'Convex ST elevation: Acute injury, needs intervention. Concave ST elevation: May be pericarditis, early repolarization. Straight ST elevation: Intermediate, needs clinical correlation.',
        type: 'flashcard',
        tabs: [
          {
            title: 'What ST elevation morphology indicates acute MI?',
            content: 'Convex (coved, upward bowing) ST elevation - indicates acute transmural injury'
          },
          {
            title: 'How does ST morphology help differentiate MI from pericarditis?',
            content: 'MI: Convex ST, territorial. Pericarditis: Concave ST, widespread, PR depression'
          }
        ],
        layout: 'centered',
        backgroundColor: '#d1fae5',
        animation: 'slide'
      },
      {
        id: 'reciprocal-changes-development',
        title: 'Reciprocal Changes Development',
        content: 'Reciprocal ST depression develops opposite to ST elevation. Confirms territorial STEMI, helps exclude pericarditis. More reciprocal changes = larger infarct territory.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'Reciprocal Pattern Recognition',
            content: 'Anterior STEMI: Reciprocal in II, III, aVF. Inferior STEMI: Reciprocal in I, aVL'
          },
          {
            title: 'Clinical Significance',
            content: 'Confirms transmural injury, larger reciprocal changes correlate with worse outcomes'
          },
          {
            title: 'Differential Diagnosis Value',
            content: 'Helps distinguish STEMI from pericarditis, early repolarization, other ST mimics'
          }
        ],
        layout: 'full',
        backgroundColor: '#f0fdf4'
      },
      {
        id: 'acute-phase-evolution-speed',
        title: 'Acute Phase Evolution Speed',
        content: 'ST elevation typically peaks within 6-12 hours. Rapid evolution suggests large vessel occlusion. Slow evolution may indicate collateral circulation or stuttering occlusion.',
        type: 'highlight',
        highlights: [
          '🔸 Rapid evolution - Suggests complete vessel occlusion, large territory at risk',
          '🔸 Gradual evolution - May indicate collaterals, partial occlusion, or reperfusion',
          '🔸 Static pattern - May suggest established occlusion with mature collaterals'
        ],
        layout: 'centered',
        backgroundColor: '#ecfdf5'
      },
      {
        id: 'tombstone-pattern',
        title: 'Tombstone ST Elevation Pattern',
        content: '"Tombstone" pattern: Massive ST elevation (>5mm) with loss of R waves, indicates large transmural MI with poor prognosis. Often seen in proximal LAD occlusion.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#f7fee7'
      },
      {
        id: 'reperfusion-effects-acute',
        title: 'Reperfusion Effects in Acute Phase',
        content: 'Successful reperfusion: Rapid ST resolution (>50% in 90 minutes), hyperacute T waves may return transiently. Failed reperfusion: Persistent ST elevation, Q wave development.',
        type: 'tabs',
        tabs: [
          {
            title: 'Successful Reperfusion Signs',
            content: 'Rapid ST resolution, transient hyperacute T waves, accelerated idioventricular rhythm'
          },
          {
            title: 'Failed Reperfusion Signs',
            content: 'Persistent ST elevation, Q wave development, ongoing symptoms'
          },
          {
            title: 'Partial Reperfusion',
            content: 'Some ST resolution but incomplete, may have stuttering pattern'
          }
        ],
        layout: 'full',
        backgroundColor: '#f0f9ff'
      },
      {
        id: 'unit-3-summary',
        title: 'Unit 3 Summary: Acute STEMI Phase',
        content: 'MASTERED: ST elevation development, morphology types, reciprocal changes, evolution speed, tombstone patterns, and reperfusion effects. Acute injury patterns decoded!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#dcfce7',
        textColor: '#166534',
        animation: 'fade'
      },
      
      // ============= UNIT 4: Q WAVE DEVELOPMENT (Slides 22-28) =============
      {
        id: 'q-wave-pathophysiology',
        title: 'Q Wave Pathophysiology',
        content: 'Q waves represent electrically silent necrotic tissue. Unopposed electrical forces from healthy myocardium create pathological Q waves. Indicates transmural necrosis.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#a16207',
        animation: 'fade'
      },
      {
        id: 'pathological-q-criteria',
        title: 'Pathological Q Wave Criteria',
        content: 'Pathological Q waves: >40ms wide (1mm), >25% of QRS height, or >1mm deep in any lead except III, aVR, V1. Must be in appropriate territory with clinical correlation.',
        type: 'flashcard',
        tabs: [
          {
            title: 'What defines a pathological Q wave?',
            content: '>40ms wide, >25% QRS height, or >1mm deep in leads other than III, aVR, V1'
          },
          {
            title: 'When do Q waves typically appear after MI?',
            content: '6-24 hours after MI onset, sometimes earlier with large transmural infarcts'
          }
        ],
        layout: 'centered',
        backgroundColor: '#fef3c7',
        animation: 'slide'
      },
      {
        id: 'q-wave-development-timeline',
        title: 'Q Wave Development Timeline',
        content: 'Evolution: ST elevation → Loss of R wave amplitude → Q wave appearance → Q wave deepening. Process occurs over 6-48 hours depending on infarct size.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'Early Changes (2-6 hours)',
            content: 'R wave amplitude loss, early Q wave notching in leads facing infarct'
          },
          {
            title: 'Established Q Waves (6-24 hours)',
            content: 'Frank pathological Q waves, persistent ST elevation, early T wave changes'
          },
          {
            title: 'Mature Pattern (24-48 hours)',
            content: 'Deep Q waves, resolving ST elevation, developing T wave inversion'
          }
        ],
        layout: 'full',
        backgroundColor: '#fffbeb'
      },
      {
        id: 'territory-specific-q-patterns',
        title: 'Territory-Specific Q Wave Patterns',
        content: 'Anterior: Q waves V1-V4 (septal V1-V2, anterior V3-V4). Inferior: Q waves II, III, aVF. Lateral: Q waves I, aVL, V5-V6. Posterior: Tall R waves V1-V2.',
        type: 'highlight',
        highlights: [
          '🔸 Anterior Q waves - V1-V4, often deep and wide, correlate with LAD territory',
          '🔸 Inferior Q waves - II, III, aVF, may be deeper in III with RCA occlusion',
          '🔸 Lateral Q waves - I, aVL, V5-V6, often with LCX territory involvement'
        ],
        layout: 'centered',
        backgroundColor: '#fefce8'
      },
      {
        id: 'q-wave-vs-qr-qrs-patterns',
        title: 'Q Wave vs QR vs QS Patterns',
        content: 'QS pattern (no R wave): Large transmural MI, poor residual function. QR pattern (small R wave): Partial thickness or good collaterals. Q wave only: Smaller MI.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#f7fee7'
      },
      {
        id: 'q-wave-regression-potential',
        title: 'Q Wave Regression Potential',
        content: 'Q wave regression possible if: Early reperfusion, good collaterals, stunning vs necrosis. Regression more likely in inferior than anterior MI. May take months to years.',
        type: 'tabs',
        tabs: [
          {
            title: 'Factors Favoring Regression',
            content: 'Early reperfusion, good collaterals, younger age, smaller initial Q waves'
          },
          {
            title: 'Territory Differences',
            content: 'Inferior MI: 30-50% regression rate. Anterior MI: 10-20% regression rate'
          },
          {
            title: 'Clinical Significance',
            content: 'Q wave regression correlates with better LV function and prognosis'
          }
        ],
        layout: 'full',
        backgroundColor: '#f0fdf4'
      },
      {
        id: 'unit-4-summary',
        title: 'Unit 4 Summary: Q Wave Development',
        content: 'MASTERED: Q wave pathophysiology, criteria, development timeline, territorial patterns, QS/QR patterns, and regression potential. Necrosis markers fully understood!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#dcfce7',
        textColor: '#166534',
        animation: 'fade'
      },
      
      // ============= UNIT 5: RECOVERY PHASE (Slides 29-35) =============
      {
        id: 'recovery-phase-timeline',
        title: 'Recovery Phase Timeline',
        content: 'Recovery phase (days-weeks): ST elevation resolves, T waves invert, inflammatory response. This phase reflects healing and scar formation processes.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f4ff',
        textColor: '#3730a3',
        animation: 'fade'
      },
      {
        id: 't-wave-inversion-development',
        title: 'T Wave Inversion Development',
        content: 'T wave inversion develops as ST elevation resolves. Deep, symmetric T wave inversion indicates recent MI. May persist for weeks to months, sometimes permanently.',
        type: 'flashcard',
        tabs: [
          {
            title: 'When do T wave inversions typically appear post-MI?',
            content: 'Days to weeks after MI, as ST elevation resolves and healing begins'
          },
          {
            title: 'What does deep T wave inversion indicate?',
            content: 'Recent MI with ongoing healing process, correlates with infarct age and extent'
          }
        ],
        layout: 'centered',
        backgroundColor: '#e0e7ff',
        animation: 'slide'
      },
      {
        id: 'st-resolution-patterns',
        title: 'ST Resolution Patterns',
        content: 'Normal ST resolution: Gradual return to baseline over days-weeks. Persistent ST elevation: May indicate LV aneurysm, pericarditis, or ongoing injury.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'Normal Resolution',
            content: 'Gradual ST normalization over 1-2 weeks, may have residual elevation <1mm'
          },
          {
            title: 'Persistent ST Elevation',
            content: 'ST elevation >2 weeks may indicate LV aneurysm formation, pericarditis'
          },
          {
            title: 'Biphasic Recovery',
            content: 'Initial resolution followed by re-elevation may suggest complications'
          }
        ],
        layout: 'full',
        backgroundColor: '#f0f9ff'
      },
      {
        id: 'wellens-pattern-evolution',
        title: 'Wellens Pattern in Recovery',
        content: 'Wellens syndrome: Deep T wave inversion V2-V3 during pain-free periods after unstable angina. Indicates critical LAD stenosis, very high re-infarction risk.',
        type: 'highlight',
        highlights: [
          '🔸 Type A Wellens - Biphasic T waves V2-V3, 75% of cases, very high LAD stenosis risk',
          '🔸 Type B Wellens - Deep inverted T waves V2-V3, 25% of cases, critical LAD disease',
          '🔸 Clinical significance - Very high risk of anterior STEMI without intervention'
        ],
        layout: 'centered',
        backgroundColor: '#f0f4ff'
      },
      {
        id: 'recovery-arrhythmia-changes',
        title: 'Recovery Phase Arrhythmias',
        content: 'Recovery arrhythmias: Accelerated idioventricular rhythm (reperfusion), PVCs (healing), atrial fibrillation (atrial involvement). Usually temporary.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#f9fafb'
      },
      {
        id: 'recovery-monitoring-strategy',
        title: 'Recovery Phase Monitoring',
        content: 'Monitor for: ST re-elevation (re-occlusion), new T inversions (extension), arrhythmias, conduction changes. Serial ECGs and clinical correlation essential.',
        type: 'tabs',
        tabs: [
          {
            title: 'ECG Monitoring',
            content: 'Daily ECGs first week, then as clinically indicated, watch for evolution patterns'
          },
          {
            title: 'Warning Signs',
            content: 'ST re-elevation, new Q waves, worsening T inversions suggest complications'
          },
          {
            title: 'Normal Evolution',
            content: 'Gradual ST normalization, T wave inversion development, stable Q waves'
          }
        ],
        layout: 'full',
        backgroundColor: '#f8fafc'
      },
      {
        id: 'unit-5-summary',
        title: 'Unit 5 Summary: Recovery Phase',
        content: 'MASTERED: Recovery timeline, T wave inversion development, ST resolution patterns, Wellens syndrome, recovery arrhythmias, and monitoring strategies. Healing phase decoded!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#dcfce7',
        textColor: '#166534',
        animation: 'fade'
      },
      
      // ============= UNIT 6: CHRONIC PHASE IMPLICATIONS (Slides 36-42) =============
      {
        id: 'chronic-mi-patterns',
        title: 'Chronic MI ECG Patterns',
        content: 'Chronic MI: Persistent Q waves, normalized ST segments, variable T wave patterns. May have poor R wave progression, left axis deviation, conduction abnormalities.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f1f5f9',
        textColor: '#475569',
        animation: 'fade'
      },
      {
        id: 'age-determination-principles',
        title: 'MI Age Determination Principles',
        content: 'Age determination: Acute (ST elevation), Subacute (T inversion), Recent (Q + T inversion), Old (Q waves only), Indeterminate (Q waves + normal T).',
        type: 'flashcard',
        tabs: [
          {
            title: 'How can you estimate MI age from ECG?',
            content: 'ST elevation = acute, T inversion = subacute, Q + T inversion = recent, Q only = old'
          },
          {
            title: 'What indicates an "age indeterminate" MI?',
            content: 'Q waves present but normal or upright T waves, could be weeks to years old'
          }
        ],
        layout: 'centered',
        backgroundColor: '#e2e8f0',
        animation: 'slide'
      },
      {
        id: 'chronic-complications-recognition',
        title: 'Chronic MI Complications',
        content: 'Chronic complications: LV aneurysm (persistent ST elevation), heart failure (poor R progression), arrhythmias (scar-related VT), conduction blocks.',
        type: 'accordion',
        accordionItems: [
          {
            title: 'LV Aneurysm Signs',
            content: 'Persistent ST elevation >2 weeks post-MI, typically anterior territory, poor R wave progression'
          },
          {
            title: 'Scar-Related Arrhythmias',
            content: 'Monomorphic VT, frequent PVCs, may have late potentials on signal-averaged ECG'
          },
          {
            title: 'Conduction System Disease',
            content: 'New bundle branch blocks, AV blocks, especially with septal involvement'
          }
        ],
        layout: 'full',
        backgroundColor: '#f1f5f9'
      },
      {
        id: 'multiple-mi-patterns',
        title: 'Multiple MI Pattern Recognition',
        content: 'Multiple MIs: Q waves in different territories, mixed acute/chronic changes, complex patterns. History and timing crucial for interpretation.',
        type: 'highlight',
        highlights: [
          '🔸 Multi-territory Q waves - Q waves in different vascular territories suggest multiple MIs',
          '🔸 Mixed evolution patterns - Acute changes overlying chronic patterns',
          '🔸 Cumulative dysfunction - Additive effects on LV function and prognosis'
        ],
        layout: 'centered',
        backgroundColor: '#f8fafc'
      },
      {
        id: 'chronic-vs-acute-differentiation',
        title: 'Chronic vs Acute MI Differentiation',
        content: 'Key differentiators: ST elevation (acute), T inversion depth/symmetry (subacute), isolated Q waves (chronic). Clinical history and comparison ECGs invaluable.',
        type: 'text',
        layout: 'split',
        backgroundColor: '#f9fafb'
      },
      {
        id: 'prognostic-implications-chronic',
        title: 'Prognostic Implications of Chronic MI',
        content: 'Chronic MI prognostic factors: Q wave location/extent, LV function, arrhythmia burden, additional coronary disease. Guides long-term management and monitoring.',
        type: 'tabs',
        tabs: [
          {
            title: 'Q Wave Prognostic Value',
            content: 'Extensive Q waves correlate with worse LV function, higher mortality risk'
          },
          {
            title: 'Arrhythmia Risk Stratification',
            content: 'Anterior Q waves higher VT risk, inferior Q waves higher bradycardia risk'
          },
          {
            title: 'Long-term Management',
            content: 'Guides decisions on ICD, revascularization, heart failure therapy'
          }
        ],
        layout: 'full',
        backgroundColor: '#f0f9ff'
      },
      {
        id: 'unit-6-summary',
        title: 'Unit 6 Summary: Chronic Phase',
        content: 'MASTERED: Chronic MI patterns, age determination, complication recognition, multiple MI patterns, acute vs chronic differentiation, and prognostic implications. Complete evolution mastery!',
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
      id: 'final-mi-evolution-mastery-assessment',
      type: 'final-assessment',
      xp: 50,
      audio: {
        mainNarration: {
          audioUrl: '/lessonaudio/mi-evolution/mastery-celebration.mp3',
          duration: 15,
          transcript: "Excellent work mastering MI evolution! You've learned the complete timeline from hyperacute T waves through chronic Q wave patterns. Now demonstrate your expertise with this comprehensive assessment."
        }
      },
      images: {
        mainImage: '/ecg/ecg_dataset_clean/AMI_anterior_myocardial_infarction/clean_00418_anterior myocardial infarction.png',
        slideImages: []
      },
      content: {
        prerequisiteMessage: "🕐 Final Assessment: Complete all 6 units to unlock your MI Evolution Mastery Certificate!",
        questions: [
          {
            id: "hyperacute-recognition-assessment",
            type: "multiple-choice",
            question: "A 45-year-old presents with 30 minutes of chest pain. ECG shows tall, peaked T waves in V2-V4, otherwise normal. Next step?",
            options: [
              "Discharge with cardiology follow-up",
              "Observe and repeat ECG in 4 hours",
              "Immediate cardiology consultation and serial ECGs",
              "Stress test when chest pain resolves"
            ],
            correctAnswer: 2,
            explanation: "Correct! Hyperacute T waves with chest pain = very early MI. This is the optimal time for reperfusion therapy. Immediate cardiology consultation and serial ECGs to monitor evolution to ST elevation.",
            imageUrl: "/lessonimages/hyperacute-t-waves-example.png"
          },
          {
            id: "st-morphology-assessment",
            type: "multiple-choice",
            question: "ECG shows convex ST elevation in V1-V4 with reciprocal depression in II, III, aVF. This pattern indicates:",
            options: [
              "Pericarditis with global inflammation",
              "Benign early repolarization variant",
              "Acute anterior STEMI requiring intervention",
              "Hyperkalemia with peaked T waves"
            ],
            correctAnswer: 2,
            explanation: "Correct! Convex ST elevation with reciprocal changes in opposite territory confirms acute anterior STEMI. Convex morphology distinguishes from pericarditis (concave) and early repolarization.",
            imageUrl: "/ecg/ecg_dataset_clean/AMI_anterior_myocardial_infarction/clean_00486_anterior myocardial infarction.png"
          },
          {
            id: "q-wave-timing-assessment",
            type: "multiple-choice",
            question: "A patient presents 18 hours after chest pain onset. ECG shows Q waves in V1-V4 with persistent ST elevation. This indicates:",
            options: [
              "Chronic MI with stable pattern",
              "Acute MI with established necrosis",
              "Pericarditis with inflammatory changes",
              "Technical artifact requiring repeat ECG"
            ],
            correctAnswer: 1,
            explanation: "Correct! Q waves appearing 6-24 hours post-MI indicate established transmural necrosis. Persistent ST elevation at 18 hours is expected in acute STEMI before gradual resolution.",
            imageUrl: "/ecg/ecg_dataset_clean/AMI_anterior_myocardial_infarction/clean_00311_anterior myocardial infarction.png"
          },
          {
            id: "tombstone-pattern-assessment",
            type: "multiple-choice",
            question: "ECG shows massive ST elevation (8mm) in V2-V4 with loss of R waves. This 'tombstone' pattern suggests:",
            options: [
              "Small, localized anterior MI",
              "Large transmural MI with poor prognosis",
              "Technical error with lead misplacement",
              "Benign early repolarization variant"
            ],
            correctAnswer: 1,
            explanation: "Correct! 'Tombstone' pattern with massive ST elevation and R wave loss indicates large transmural MI, often proximal LAD occlusion. Associated with high mortality and mechanical complications.",
            imageUrl: "/lessonimages/tombstone-st-elevation-pattern.png"
          },
          {
            id: "wellens-syndrome-assessment",
            type: "multiple-choice",
            question: "During a pain-free period, ECG shows deep T wave inversions in V2-V3 with minimal troponin elevation. This pattern indicates:",
            options: [
              "Old anterior MI with chronic changes",
              "Wellens syndrome - critical LAD stenosis",
              "Normal post-exercise T wave changes",
              "Pericarditis with precordial involvement"
            ],
            correctAnswer: 1,
            explanation: "Correct! Wellens syndrome: Deep T inversions V2-V3 during pain-free periods = critical LAD stenosis (>90%) with very high risk of anterior STEMI without urgent intervention.",
            imageUrl: "/lessonimages/wellens-syndrome-pattern.png"
          },
          {
            id: "reperfusion-assessment",
            type: "multiple-choice",
            question: "Post-PCI, ECG shows 70% ST resolution and brief return of hyperacute T waves. This indicates:",
            options: [
              "Failed reperfusion requiring repeat intervention",
              "Successful reperfusion with artery reopening",
              "No-reflow phenomenon with microvascular dysfunction",
              "Peri-procedural MI from side branch occlusion"
            ],
            correctAnswer: 1,
            explanation: "Correct! Rapid ST resolution >50% with transient return of hyperacute T waves indicates successful reperfusion. This is a good prognostic sign showing vessel patency.",
            imageUrl: "/lessonimages/successful-reperfusion-pattern.png"
          },
          {
            id: "mi-age-determination-assessment",
            type: "multiple-choice",
            question: "ECG shows Q waves in II, III, aVF with deep, symmetric T wave inversions. No ST elevation. MI age is most likely:",
            options: [
              "Hyperacute (minutes to hours)",
              "Acute (hours to days)",
              "Recent/subacute (days to weeks)",
              "Chronic/old (weeks to years)"
            ],
            correctAnswer: 2,
            explanation: "Correct! Q waves + deep T inversions without ST elevation = recent/subacute MI (days to weeks old). Deep symmetric T inversions indicate ongoing healing process.",
            imageUrl: "/ecg/ecg_dataset_clean/IMI_inferior_myocardial_infarction/clean_00161_inferior myocardial infarction.png"
          },
          {
            id: "chronic-complications-assessment",
            type: "multiple-choice",
            question: "Patient with anterior MI 6 weeks ago now has persistent ST elevation in V1-V4. Most likely explanation:",
            options: [
              "Re-infarction requiring immediate catheterization",
              "LV aneurysm formation",
              "Pericarditis post-MI (Dressler syndrome)",
              "Technical ECG artifact"
            ],
            correctAnswer: 1,
            explanation: "Correct! Persistent ST elevation >2 weeks post-MI, especially anterior territory, suggests LV aneurysm formation. This is a mechanical complication requiring echocardiographic evaluation.",
            imageUrl: "/lessonimages/lv-aneurysm-persistent-st-elevation.png"
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
