import { 
  EventData, 
  DayData, 
  TaskData, 
  eventThemes, 
  TaskContent,
  QuizQuestion,
  Hotspot,
  DragItem,
  DropZone,
  PatientInfo
} from '../types/eventTypes';

// Monthly Mastery Tracks – Advance Your ECG Skills
// All content is local-first for instant offline access

export const generateECGEvents = (): EventData[] => [
  {
    id: 'shock-zone-challenge',
    title: 'Shock Zone Challenge',
    subtitle: 'Emergency Arrhythmias',
    description: 'Master life-threatening rhythms in high-pressure scenarios',
    theme: eventThemes.shockZone,
    totalDays: 30,
    tasksPerDay: 5,
    bannerImage: '/images/events/shock-zone-banner.jpg',
    badgeIcon: '⚡',
    rewards: {
      daily: { xp: 150, gems: 25, hearts: 0 },
      weekly: { xp: 1200, gems: 200, hearts: 1 },
      completion: { xp: 5000, gems: 1000, hearts: 5, specialBadge: 'Emergency Master' }
    },
    unlocked: true
  },
  {
    id: 'code-pulse-protocol',
    title: 'Code Pulse Protocol',
    subtitle: 'Cardiac Arrest Algorithms',
    description: 'Navigate critical ACLS scenarios with precision timing',
    theme: eventThemes.codePulse,
    totalDays: 30,
    tasksPerDay: 5,
    bannerImage: '/images/events/code-pulse-banner.jpg',
    badgeIcon: '🫀',
    rewards: {
      daily: { xp: 175, gems: 30, hearts: 0 },
      weekly: { xp: 1400, gems: 240, hearts: 1 },
      completion: { xp: 6000, gems: 1200, hearts: 6, specialBadge: 'ACLS Expert' }
    },
    unlocked: true
  },
  {
    id: 'lead-master-quest',
    title: 'Lead Master Quest',
    subtitle: '12-Lead Mastery',
    description: 'Decode complex 12-lead patterns and localize pathology',
    theme: eventThemes.leadMaster,
    totalDays: 30,
    tasksPerDay: 5,
    bannerImage: '/images/events/lead-master-banner.jpg',
    badgeIcon: '🎯',
    rewards: {
      daily: { xp: 200, gems: 35, hearts: 0 },
      weekly: { xp: 1600, gems: 280, hearts: 1 },
      completion: { xp: 7000, gems: 1400, hearts: 7, specialBadge: '12-Lead Master' }
    },
    unlocked: true
  },
  {
    id: 'rhythm-hunter',
    title: 'Rhythm Hunter',
    subtitle: 'Rare Arrhythmia Recognition',
    description: 'Hunt down the most elusive and complex cardiac rhythms',
    theme: eventThemes.rhythmHunter,
    totalDays: 30,
    tasksPerDay: 5,
    bannerImage: '/images/events/rhythm-hunter-banner.jpg',
    badgeIcon: '🏹',
    rewards: {
      daily: { xp: 250, gems: 40, hearts: 0 },
      weekly: { xp: 2000, gems: 320, hearts: 2 },
      completion: { xp: 8000, gems: 1600, hearts: 8, specialBadge: 'Rhythm Hunter' }
    },
    unlocked: true
  }
];

// Generate 30 days of content for each event
export const generateEventDays = (eventId: string): DayData[] => {
  const eventConfigs = {
    'shock-zone-challenge': {
      baseTheme: 'Emergency Arrhythmias',
      progressionTopics: [
        'Ventricular Tachycardia Basics', 'Polymorphic VT', 'Ventricular Fibrillation', 'Asystole', 'PEA (Pulseless Electrical Activity)',
        'SVT with Instability', 'Wide Complex Tachycardia', 'Bradycardia with Shock', 'Mobitz I (Wenckebach)', 'Mobitz II',
        'Complete Heart Block', 'Pacemaker Rhythms', 'STEMI with VF', 'Hyperkalemia-induced Arrhythmia', 'Accelerated Idioventricular Rhythm (AIVR)',
        'Junctional Tachycardia', 'WPW with Atrial Fibrillation', 'Brugada Syndrome', 'Hypothermia Rhythms', 'Digitalis Toxicity',
        'Long QT Syndrome', 'Catecholaminergic Polymorphic VT', 'Electrical Storm', 'Pacemaker-Mediated Tachycardia', 'Ventricular Standstill',
        'Hyperacute STEMI', 'Pericarditis with Arrhythmia', 'Massive PE with PEA', 'Severe Hypomagnesemia', 'Mega Challenge Day'
      ],
      detailedContent: {
        'Ventricular Tachycardia Basics': {
          caseStrip: 'strip_vtach_monomorphic_01.png',
          caseDescription: 'Identify monomorphic VT pattern',
          quiz: 'First-line treatment for unstable VT',
          hotspot: 'Highlight widened QRS complexes',
          dragDrop: 'Match VT vs SVT with aberrancy criteria',
          simulator: 'Patient collapse → choose intervention'
        },
        'Polymorphic VT': {
          caseStrip: 'strip_torsades_01.png',
          caseDescription: 'Identify torsades de pointes',
          quiz: 'Magnesium dose for torsades',
          hotspot: 'Mark twisting QRS morphology',
          dragDrop: 'Causes of prolonged QT',
          simulator: 'Sudden syncope scenario'
        },
        'Ventricular Fibrillation': {
          caseStrip: 'strip_vfib_01.png',
          caseDescription: 'Identify VF waveform',
          quiz: 'Shock energy for VF',
          hotspot: 'Identify chaotic irregular waves',
          dragDrop: 'Match shockable vs non-shockable rhythms',
          simulator: 'Arrest → choose correct sequence'
        },
        'Asystole': {
          caseStrip: 'strip_asystole_01.png',
          caseDescription: 'Recognize flatline (ensure no lead detachment)',
          quiz: 'Drugs used in asystole',
          hotspot: 'Mark isoelectric baseline',
          dragDrop: 'Match reversible causes (H\'s & T\'s)',
          simulator: 'No pulse scenario'
        },
        'PEA (Pulseless Electrical Activity)': {
          caseStrip: 'strip_pea_01.png',
          caseDescription: 'Organized rhythm, no pulse',
          quiz: 'Initial steps in PEA management',
          hotspot: 'Identify rhythm pattern',
          dragDrop: 'Match PEA causes to interventions',
          simulator: 'Cardiac arrest algorithm walk-through'
        },
        'SVT with Instability': {
          caseStrip: 'strip_svt_unstable_01.png',
          caseDescription: 'Narrow-complex tachycardia with hypotension',
          quiz: 'Indication for synchronized cardioversion',
          hotspot: 'Mark P waves hidden in QRS',
          dragDrop: 'Vagal maneuvers sequence',
          simulator: 'SVT case progression'
        },
        'Wide Complex Tachycardia': {
          caseStrip: 'strip_wct_differential_01.png',
          caseDescription: 'VT vs SVT with aberrancy decision',
          quiz: 'Algorithm step for wide tachy',
          hotspot: 'Mark capture beats',
          dragDrop: 'Match drugs to stable/unstable cases',
          simulator: 'ER presentation → decision making'
        },
        'Bradycardia with Shock': {
          caseStrip: 'strip_severe_brady_01.png',
          caseDescription: 'Severe sinus bradycardia with hypotension',
          quiz: 'First drug for bradycardia',
          hotspot: 'Identify prolonged RR interval',
          dragDrop: 'Match atropine, pacing, epi use cases',
          simulator: 'Hypotensive bradycardia scenario'
        },
        'Mobitz I (Wenckebach)': {
          caseStrip: 'strip_mobitz1_01.png',
          caseDescription: 'Progressive PR prolongation with dropped beat',
          quiz: 'When to treat Mobitz I',
          hotspot: 'Highlight progressively lengthening PR interval',
          dragDrop: 'Match AV block types',
          simulator: 'Stable vs unstable decision'
        },
        'Mobitz II': {
          caseStrip: 'strip_mobitz2_01.png',
          caseDescription: 'Sudden dropped beats without PR change',
          quiz: 'Risk of progression to complete block',
          hotspot: 'Identify dropped QRS without PR change',
          dragDrop: 'Match pacing indications',
          simulator: 'Mobitz II collapse scenario'
        },
        'Complete Heart Block': {
          caseStrip: 'strip_chb_01.png',
          caseDescription: 'Complete AV dissociation',
          quiz: 'Emergency treatment for CHB',
          hotspot: 'Mark independent P & QRS',
          dragDrop: 'Match AV block to strip',
          simulator: 'Bradycardic arrest scenario'
        },
        'Pacemaker Rhythms': {
          caseStrip: 'strip_paced_rhythm_01.png',
          caseDescription: 'Paced rhythm analysis',
          quiz: 'Difference between failure to capture & sense',
          hotspot: 'Mark pacing spikes on strip',
          dragDrop: 'Match pacemaker issues',
          simulator: 'Pacemaker troubleshooting'
        },
        'STEMI with VF': {
          caseStrip: 'strip_stemi_vf_01.png',
          caseDescription: 'VF complicating acute STEMI',
          quiz: 'Immediate step in STEMI with VF',
          hotspot: 'Mark ST elevation areas',
          dragDrop: 'STEMI leads to arteries',
          simulator: 'STEMI complication management'
        },
        'Hyperkalemia-induced Arrhythmia': {
          caseStrip: 'strip_hyperkalemia_01.png',
          caseDescription: 'Tall T-waves, sine wave pattern',
          quiz: 'Calcium gluconate use in hyperkalemia',
          hotspot: 'Mark peaked T waves',
          dragDrop: 'ECG changes by K+ level',
          simulator: 'Hyperkalemia crisis scenario'
        },
        'Accelerated Idioventricular Rhythm (AIVR)': {
          caseStrip: 'strip_aivr_01.png',
          caseDescription: 'Wide QRS rhythm at 40-100 bpm',
          quiz: 'Common cause post-reperfusion',
          hotspot: 'Highlight absence of P waves',
          dragDrop: 'Differentiate AIVR from VT',
          simulator: 'Post-PCI scenario'
        },
        'Junctional Tachycardia': {
          caseStrip: 'strip_junctional_tachy_01.png',
          caseDescription: 'Narrow complex tachy with inverted P waves',
          quiz: 'Common post-cardiac surgery cause',
          hotspot: 'Mark retrograde P waves',
          dragDrop: 'Junctional vs atrial tachycardia',
          simulator: 'Post-op arrhythmia management'
        },
        'WPW with Atrial Fibrillation': {
          caseStrip: 'strip_wpw_af_01.png',
          caseDescription: 'Irregular wide QRS with delta waves',
          quiz: 'Contraindicated drug in WPW with AF',
          hotspot: 'Identify delta waves',
          dragDrop: 'Match accessory pathway patterns',
          simulator: 'Sudden palpitations → unstable AF'
        },
        'Brugada Syndrome': {
          caseStrip: 'strip_brugada_01.png',
          caseDescription: 'Coved ST elevation in V1-V3',
          quiz: 'Risk of sudden death in Brugada',
          hotspot: 'Highlight Brugada pattern',
          dragDrop: 'Genetic arrhythmia syndromes',
          simulator: 'Syncope in young male case'
        },
        'Hypothermia Rhythms': {
          caseStrip: 'strip_hypothermia_01.png',
          caseDescription: 'Osborne waves (J waves)',
          quiz: 'ECG changes with hypothermia',
          hotspot: 'Mark J point elevation',
          dragDrop: 'Hypothermia ECG vs hyperkalemia',
          simulator: 'Cold-water submersion scenario'
        },
        'Digitalis Toxicity': {
          caseStrip: 'strip_dig_toxicity_01.png',
          caseDescription: 'Bidirectional VT pattern',
          quiz: 'Antidote for digoxin toxicity',
          hotspot: 'Identify scooped ST depression',
          dragDrop: 'Drugs causing arrhythmia',
          simulator: 'Elderly patient with visual halos'
        },
        'Long QT Syndrome': {
          caseStrip: 'strip_long_qt_01.png',
          caseDescription: 'Prolonged QT measurement',
          quiz: 'Common triggers for Torsades',
          hotspot: 'Highlight end of T wave',
          dragDrop: 'Drugs prolonging QT',
          simulator: 'Syncope post-exercise'
        },
        'Catecholaminergic Polymorphic VT': {
          caseStrip: 'strip_cpvt_01.png',
          caseDescription: 'Stress-induced bidirectional VT',
          quiz: 'First-line therapy for CPVT',
          hotspot: 'Highlight alternating QRS axis',
          dragDrop: 'Genetic arrhythmias vs acquired',
          simulator: 'Sudden collapse during sports'
        },
        'Electrical Storm': {
          caseStrip: 'strip_electrical_storm_01.png',
          caseDescription: 'Recurrent VT/VF within 24 hrs',
          quiz: 'Antiarrhythmic choice in storm',
          hotspot: 'Mark consecutive VF episodes',
          dragDrop: 'Emergency storm management steps',
          simulator: 'ICU arrhythmia crisis'
        },
        'Pacemaker-Mediated Tachycardia': {
          caseStrip: 'strip_pmt_01.png',
          caseDescription: 'Endless loop tachycardia pattern',
          quiz: 'Device reprogramming solution',
          hotspot: 'Identify pacing spikes before every QRS',
          dragDrop: 'Pacemaker problems classification',
          simulator: 'Clinic pacemaker interrogation'
        },
        'Ventricular Standstill': {
          caseStrip: 'strip_v_standstill_01.png',
          caseDescription: 'Only P waves, no QRS response',
          quiz: 'Immediate management step',
          hotspot: 'Identify absence of ventricular activity',
          dragDrop: 'Causes of ventricular standstill',
          simulator: 'Sudden collapse in telemetry unit'
        },
        'Hyperacute STEMI': {
          caseStrip: 'strip_hyperacute_stemi_01.png',
          caseDescription: 'Tall, broad T waves pre-ST elevation',
          quiz: 'Which artery is occluded?',
          hotspot: 'Highlight hyperacute T waves',
          dragDrop: 'STEMI phase timeline',
          simulator: 'Chest pain to cath lab decision'
        },
        'Pericarditis with Arrhythmia': {
          caseStrip: 'strip_pericarditis_01.png',
          caseDescription: 'Diffuse ST elevation + PR depression',
          quiz: 'Common arrhythmia in pericarditis',
          hotspot: 'Mark ST concavity pattern',
          dragDrop: 'Pericarditis vs STEMI differentiation',
          simulator: 'Post-viral chest pain scenario'
        },
        'Massive PE with PEA': {
          caseStrip: 'strip_massive_pe_01.png',
          caseDescription: 'Sinus tachy → PEA arrest pattern',
          quiz: 'Immediate drug for massive PE',
          hotspot: 'Identify S1Q3T3 pattern',
          dragDrop: 'Reversible causes of PEA',
          simulator: 'Dyspnea → arrest sequence'
        },
        'Severe Hypomagnesemia': {
          caseStrip: 'strip_hypomag_01.png',
          caseDescription: 'Polymorphic VT from low magnesium',
          quiz: 'IV magnesium dose for VT',
          hotspot: 'Mark twisting QRS morphology',
          dragDrop: 'Electrolyte ECG changes',
          simulator: 'ICU electrolyte crisis'
        },
        'Mega Challenge Day': {
          caseStrip: 'strip_mixed_rhythms_01.png',
          caseDescription: 'Multiple rhythm identification challenge',
          quiz: 'Match rhythm to correct algorithm step',
          hotspot: 'Mark key abnormal findings in each rhythm',
          dragDrop: 'Place rhythms in correct urgency order',
          simulator: 'Multi-case rapid fire scenario'
        }
      }
    },
    'code-pulse-protocol': {
      baseTheme: 'ACLS Protocols',
      progressionTopics: [
        'Basic ACLS Algorithm', 'VFib/VTach Protocol', 'PEA Management', 'Asystole Protocol', 'Bradycardia Algorithm',
        'Tachycardia Algorithm', 'Post-Cardiac Arrest Care', 'Advanced Airway Management', 'ACLS Medication Protocols', 'Defibrillation & Cardioversion',
        'Transcutaneous Pacing', 'Team Dynamics & Communication', 'Code Team Leadership', 'Pediatric Advanced Life Support', 'Neonatal Resuscitation',
        'Obstetric Cardiac Emergencies', 'Drowning Resuscitation', 'Hypothermia Management', 'Toxicology-Related Arrest', 'Trauma Cardiac Arrest',
        'Massive PE Management', 'Tension Pneumothorax', 'Cardiac Tamponade', 'Severe Hyperkalemia', 'Drug Overdose Protocols',
        'Anaphylaxis Management', 'Acute Stroke Protocols', 'STEMI Management', 'Post-Arrest Neurological Care', 'Master Code Blue Scenario'
      ],
      detailedContent: {
        'Basic ACLS Algorithm': {
          caseStrip: 'algorithm_basic_acls_01.png',
          caseDescription: 'Step-by-step ACLS algorithm walkthrough',
          quiz: 'First step in unresponsive patient',
          hotspot: 'Identify decision points in algorithm',
          dragDrop: 'Match rhythm to correct algorithm branch',
          simulator: 'Code Blue team response simulation'
        },
        'VFib/VTach Protocol': {
          caseStrip: 'protocol_vfvt_01.png',
          caseDescription: 'Shockable rhythm protocol',
          quiz: 'Energy dose for first shock',
          hotspot: 'Mark shock delivery points',
          dragDrop: 'Sequence of VF/VT interventions',
          simulator: 'Cardiac arrest with shockable rhythm'
        },
        'PEA Management': {
          caseStrip: 'protocol_pea_01.png',
          caseDescription: 'Pulseless electrical activity management',
          quiz: 'Reversible causes of PEA',
          hotspot: 'Identify H\'s and T\'s',
          dragDrop: 'Match cause to treatment',
          simulator: 'PEA arrest scenario'
        }
      }
    },
    'lead-master-quest': {
      baseTheme: '12-Lead Analysis',
      progressionTopics: [
        'Lead Placement Basics', 'Axis Determination', 'Bundle Branch Blocks', 'Fascicular Blocks', 'Anterior STEMI Recognition',
        'Inferior STEMI Patterns', 'Lateral STEMI Analysis', 'Posterior STEMI Diagnosis', 'Right Heart Strain Patterns', 'LVH Criteria & Patterns',
        'RVH Recognition', 'Atrial Enlargement Patterns', 'Pericarditis vs Early Repol', 'Brugada Syndrome Patterns', 'Wellens Syndrome',
        'DeWinter T-Wave Pattern', 'Hyperacute T-Wave Changes', 'Reciprocal Change Analysis', 'Multivessel Disease Recognition', 'Chronic Infarction Patterns',
        'Ventricular Aneurysm Signs', 'Dextrocardia Recognition', 'Lead Misplacement Detection', 'Artifact vs Pathology', 'Electrolyte Effect Recognition',
        'Drug Effect Patterns', 'Congenital Heart Disease', 'Complex Conduction Blocks', 'Advanced STEMI Patterns', 'Master 12-Lead Interpretation'
      ],
      detailedContent: {
        'Lead Placement Basics': {
          caseStrip: 'lead_placement_demo_01.png',
          caseDescription: 'Proper 12-lead electrode positioning',
          quiz: 'Where is V1 placed?',
          hotspot: 'Mark correct V1-V6 positions',
          dragDrop: 'Match leads to anatomical locations',
          simulator: 'Lead placement quality check'
        },
        'Axis Determination': {
          caseStrip: 'axis_normal_01.png',
          caseDescription: 'Normal axis calculation methods',
          quiz: 'QRS axis using lead I and aVF',
          hotspot: 'Identify positive/negative deflections',
          dragDrop: 'Match axis degrees to quadrants',
          simulator: 'Step-by-step axis calculation'
        },
        'Bundle Branch Blocks': {
          caseStrip: 'bbb_rbbb_01.png',
          caseDescription: 'RBBB vs LBBB differentiation',
          quiz: 'QRS width in complete BBB',
          hotspot: 'Mark characteristic morphology',
          dragDrop: 'BBB criteria to lead patterns',
          simulator: 'Bundle block progression analysis'
        },
        'Fascicular Blocks': {
          caseStrip: 'fascicular_lafb_01.png',
          caseDescription: 'Left anterior fascicular block',
          quiz: 'LAFB axis deviation range',
          hotspot: 'Identify axis shift pattern',
          dragDrop: 'Match fascicular blocks to ECG',
          simulator: 'Bifascicular block recognition'
        },
        'Anterior STEMI Recognition': {
          caseStrip: 'stemi_anterior_01.png',
          caseDescription: 'Classic anterior STEMI pattern',
          quiz: 'Which leads show ST elevation?',
          hotspot: 'Mark ST elevation areas',
          dragDrop: 'STEMI territory to vessel',
          simulator: 'STEMI evolution timeline'
        },
        'Inferior STEMI Patterns': {
          caseStrip: 'stemi_inferior_01.png',
          caseDescription: 'Inferior wall STEMI with RV involvement',
          quiz: 'Additional leads for RV infarct',
          hotspot: 'Mark reciprocal changes',
          dragDrop: 'Inferior STEMI complications',
          simulator: 'RCA vs LCX differentiation'
        },
        'Lateral STEMI Analysis': {
          caseStrip: 'stemi_lateral_01.png',
          caseDescription: 'Lateral wall STEMI patterns',
          quiz: 'Which vessel supplies lateral wall?',
          hotspot: 'Identify lateral lead changes',
          dragDrop: 'Lateral STEMI vs other patterns',
          simulator: 'High lateral vs low lateral'
        },
        'Posterior STEMI Diagnosis': {
          caseStrip: 'stemi_posterior_01.png',
          caseDescription: 'Posterior STEMI mirror image',
          quiz: 'V7-V9 lead placement',
          hotspot: 'Mark posterior lead changes',
          dragDrop: 'Posterior STEMI criteria',
          simulator: 'Hidden posterior STEMI case'
        },
        'Right Heart Strain Patterns': {
          caseStrip: 'rhs_acute_pe_01.png',
          caseDescription: 'Acute pulmonary embolism pattern',
          quiz: 'S1Q3T3 significance',
          hotspot: 'Identify right heart strain signs',
          dragDrop: 'PE vs other RV strain causes',
          simulator: 'Massive PE recognition'
        },
        'LVH Criteria & Patterns': {
          caseStrip: 'lvh_cornell_01.png',
          caseDescription: 'Left ventricular hypertrophy criteria',
          quiz: 'Cornell criteria calculation',
          hotspot: 'Mark LVH voltage criteria',
          dragDrop: 'LVH criteria to ECG findings',
          simulator: 'LVH vs other causes of tall R'
        },
        'RVH Recognition': {
          caseStrip: 'rvh_pattern_01.png',
          caseDescription: 'Right ventricular hypertrophy',
          quiz: 'RVH in lead V1 criteria',
          hotspot: 'Identify RVH voltage',
          dragDrop: 'RVH vs normal variant',
          simulator: 'Congenital vs acquired RVH'
        },
        'Atrial Enlargement Patterns': {
          caseStrip: 'atrial_enlargement_01.png',
          caseDescription: 'Left and right atrial enlargement',
          quiz: 'P mitrale vs P pulmonale',
          hotspot: 'Mark abnormal P wave morphology',
          dragDrop: 'Atrial enlargement to causes',
          simulator: 'Biatrial enlargement analysis'
        },
        'Pericarditis vs Early Repol': {
          caseStrip: 'pericarditis_01.png',
          caseDescription: 'Pericarditis ECG evolution',
          quiz: 'PR depression significance',
          hotspot: 'Mark ST elevation pattern',
          dragDrop: 'Pericarditis vs STEMI features',
          simulator: 'Pericarditis stage identification'
        },
        'Brugada Syndrome Patterns': {
          caseStrip: 'brugada_type1_01.png',
          caseDescription: 'Type 1 Brugada pattern',
          quiz: 'High precordial lead placement',
          hotspot: 'Identify coved ST elevation',
          dragDrop: 'Brugada types to morphology',
          simulator: 'Drug challenge test interpretation'
        },
        'Wellens Syndrome': {
          caseStrip: 'wellens_type1_01.png',
          caseDescription: 'Wellens Type A and B patterns',
          quiz: 'LAD stenosis significance',
          hotspot: 'Mark characteristic T waves',
          dragDrop: 'Wellens criteria checklist',
          simulator: 'Wellens vs other T wave abnormalities'
        },
        'DeWinter T-Wave Pattern': {
          caseStrip: 'dewinter_pattern_01.png',
          caseDescription: 'DeWinter T-wave STEMI equivalent',
          quiz: 'Vessel involved in DeWinter pattern',
          hotspot: 'Identify upsloping ST depression',
          dragDrop: 'STEMI equivalents recognition',
          simulator: 'DeWinter pattern urgency'
        },
        'Hyperacute T-Wave Changes': {
          caseStrip: 'hyperacute_t_01.png',
          caseDescription: 'Early STEMI hyperacute T waves',
          quiz: 'Hyperacute T wave timing',
          hotspot: 'Mark tall prominent T waves',
          dragDrop: 'Hyperacute vs normal T waves',
          simulator: 'STEMI evolution recognition'
        },
        'Reciprocal Change Analysis': {
          caseStrip: 'reciprocal_inferior_01.png',
          caseDescription: 'Reciprocal changes in STEMI',
          quiz: 'Reciprocal leads for inferior STEMI',
          hotspot: 'Mark reciprocal depressions',
          dragDrop: 'STEMI territory to reciprocal leads',
          simulator: 'Reciprocal change significance'
        },
        'Multivessel Disease Recognition': {
          caseStrip: 'multivessel_stemi_01.png',
          caseDescription: 'Extensive STEMI pattern',
          quiz: 'Signs of multivessel disease',
          hotspot: 'Identify multiple territory involvement',
          dragDrop: 'Single vs multivessel patterns',
          simulator: 'Complex STEMI management'
        },
        'Chronic Infarction Patterns': {
          caseStrip: 'old_mi_q_waves_01.png',
          caseDescription: 'Pathological Q waves',
          quiz: 'Q wave significance criteria',
          hotspot: 'Mark pathological Q waves',
          dragDrop: 'Age of infarct estimation',
          simulator: 'Old vs new MI differentiation'
        },
        'Ventricular Aneurysm Signs': {
          caseStrip: 'lv_aneurysm_01.png',
          caseDescription: 'Post-MI ventricular aneurysm',
          quiz: 'Persistent ST elevation meaning',
          hotspot: 'Identify aneurysm pattern',
          dragDrop: 'Aneurysm vs acute STEMI',
          simulator: 'Aneurysm complication recognition'
        },
        'Dextrocardia Recognition': {
          caseStrip: 'dextrocardia_01.png',
          caseDescription: 'Mirror image dextrocardia',
          quiz: 'Lead placement for dextrocardia',
          hotspot: 'Identify reversed pattern',
          dragDrop: 'Normal vs dextrocardia ECG',
          simulator: 'Dextrocardia lead correction'
        },
        'Lead Misplacement Detection': {
          caseStrip: 'lead_misplacement_01.png',
          caseDescription: 'Common lead placement errors',
          quiz: 'Limb lead reversal patterns',
          hotspot: 'Identify misplaced leads',
          dragDrop: 'Lead errors to ECG changes',
          simulator: 'Lead troubleshooting guide'
        },
        'Artifact vs Pathology': {
          caseStrip: 'artifact_vs_pathology_01.png',
          caseDescription: 'Distinguishing artifact from disease',
          quiz: 'Common ECG artifacts',
          hotspot: 'Mark artifact vs real findings',
          dragDrop: 'Artifact types to causes',
          simulator: 'Quality control assessment'
        },
        'Electrolyte Effect Recognition': {
          caseStrip: 'electrolyte_hyperK_01.png',
          caseDescription: 'Hyperkalemia ECG progression',
          quiz: 'Potassium level ECG correlation',
          hotspot: 'Mark electrolyte changes',
          dragDrop: 'Electrolyte to ECG finding',
          simulator: 'Electrolyte emergency recognition'
        },
        'Drug Effect Patterns': {
          caseStrip: 'drug_effects_dig_01.png',
          caseDescription: 'Digitalis effect and toxicity',
          quiz: 'Digoxin therapeutic vs toxic effects',
          hotspot: 'Identify drug-induced changes',
          dragDrop: 'Drugs to ECG effects',
          simulator: 'Drug toxicity assessment'
        },
        'Congenital Heart Disease': {
          caseStrip: 'chd_tetralogy_01.png',
          caseDescription: 'Tetralogy of Fallot ECG',
          quiz: 'Congenital heart disease patterns',
          hotspot: 'Mark congenital abnormalities',
          dragDrop: 'CHD lesions to ECG findings',
          simulator: 'Pediatric vs adult CHD'
        },
        'Complex Conduction Blocks': {
          caseStrip: 'complex_blocks_01.png',
          caseDescription: 'Trifascicular and complex blocks',
          quiz: 'High-grade AV block recognition',
          hotspot: 'Identify complex conduction',
          dragDrop: 'Block types to pacing needs',
          simulator: 'Progressive conduction disease'
        },
        'Advanced STEMI Patterns': {
          caseStrip: 'advanced_stemi_01.png',
          caseDescription: 'Complex STEMI presentations',
          quiz: 'Subtle STEMI equivalent patterns',
          hotspot: 'Mark advanced STEMI signs',
          dragDrop: 'Complex patterns to interventions',
          simulator: 'Challenging STEMI cases'
        },
        'Master 12-Lead Interpretation': {
          caseStrip: 'master_interpretation_01.png',
          caseDescription: 'Comprehensive 12-lead analysis',
          quiz: 'Systematic interpretation approach',
          hotspot: 'Identify all abnormalities',
          dragDrop: 'Prioritize findings by urgency',
          simulator: 'Expert-level interpretation challenge'
        }
      }
    },
    'rhythm-hunter': {
      baseTheme: 'Rare Rhythms',
      progressionTopics: [
        'Escape Rhythms', 'Fusion & Capture Beats', 'Ashman Phenomenon', 'Concealed Conduction', 'Parasystole Recognition',
        'Interpolated PVCs', 'Complex Bigeminy Patterns', 'Trigeminy & Quadrigeminy', 'Couplets & Runs', 'R-on-T Phenomenon',
        'Idioventricular Rhythms', 'Accelerated Ventricular Rhythms', 'Agonal Rhythms', 'Pacemaker Rhythm Analysis', 'Pacemaker Malfunction',
        'Magnet Mode Responses', 'Undersensing Patterns', 'Oversensing Issues', 'Failure to Capture', 'Failure to Pace',
        'Pseudofusion Beats', 'Antidromic AVRT', 'Orthodromic AVRT', 'Multiple Accessory Pathways', 'AF with Pre-excitation',
        'Pre-excited Atrial Fibrillation', 'Mahaim Fiber Conduction', 'Atriofascicular Pathways', 'Exotic Arrhythmia Patterns', 'Ultimate Rhythm Challenge'
      ],
      detailedContent: {
        'Escape Rhythms': {
          caseStrip: 'escape_junctional_01.png',
          caseDescription: 'Junctional escape rhythm',
          quiz: 'Normal junctional escape rate',
          hotspot: 'Identify escape beat morphology',
          dragDrop: 'Escape rhythms by rate',
          simulator: 'Escape rhythm hierarchy'
        },
        'Fusion & Capture Beats': {
          caseStrip: 'fusion_beats_01.png',
          caseDescription: 'Fusion and capture beat recognition',
          quiz: 'Fusion beat diagnostic significance',
          hotspot: 'Mark fusion beat morphology',
          dragDrop: 'VT diagnostic clues',
          simulator: 'Fusion beat analysis'
        },
        'Ashman Phenomenon': {
          caseStrip: 'ashman_phenomenon_01.png',
          caseDescription: 'Aberrant conduction in atrial fibrillation',
          quiz: 'Ashman phenomenon mechanism',
          hotspot: 'Identify aberrant beats',
          dragDrop: 'Aberrancy vs ectopy',
          simulator: 'AF with aberrancy analysis'
        },
        'Concealed Conduction': {
          caseStrip: 'concealed_conduction_01.png',
          caseDescription: 'Hidden electrical activity effects',
          quiz: 'Concealed conduction definition',
          hotspot: 'Mark concealed pathway effects',
          dragDrop: 'Concealed vs apparent conduction',
          simulator: 'Complex rhythm analysis'
        },
        'Parasystole Recognition': {
          caseStrip: 'parasystole_01.png',
          caseDescription: 'Independent ectopic pacemaker',
          quiz: 'Parasystole diagnostic criteria',
          hotspot: 'Identify parasystolic beats',
          dragDrop: 'Parasystole vs normal PVCs',
          simulator: 'Parasystole pattern analysis'
        },
        'Interpolated PVCs': {
          caseStrip: 'interpolated_pvcs_01.png',
          caseDescription: 'PVCs between normal beats',
          quiz: 'Interpolated PVC mechanism',
          hotspot: 'Mark interpolated beats',
          dragDrop: 'PVC types classification',
          simulator: 'Complex PVC pattern analysis'
        },
        'Complex Bigeminy Patterns': {
          caseStrip: 'complex_bigeminy_01.png',
          caseDescription: 'Atrial and ventricular bigeminy',
          quiz: 'Bigeminy pattern recognition',
          hotspot: 'Identify bigeminy source',
          dragDrop: 'Bigeminy types to origins',
          simulator: 'Complex ectopy analysis'
        },
        'Trigeminy & Quadrigeminy': {
          caseStrip: 'trigeminy_01.png',
          caseDescription: 'Every third beat ectopic',
          quiz: 'Trigeminy vs trigeminal pattern',
          hotspot: 'Mark trigeminy pattern',
          dragDrop: 'Ectopy patterns classification',
          simulator: 'Complex ectopy recognition'
        },
        'Couplets & Runs': {
          caseStrip: 'pvc_couplets_01.png',
          caseDescription: 'Consecutive ectopic beats',
          quiz: 'VT definition minimum beats',
          hotspot: 'Identify couplets and runs',
          dragDrop: 'Ectopy severity grading',
          simulator: 'Ventricular ectopy assessment'
        },
        'R-on-T Phenomenon': {
          caseStrip: 'r_on_t_01.png',
          caseDescription: 'PVC falling on T wave',
          quiz: 'R-on-T arrhythmia risk',
          hotspot: 'Mark R-on-T timing',
          dragDrop: 'Vulnerable period concepts',
          simulator: 'R-on-T risk assessment'
        },
        'Idioventricular Rhythms': {
          caseStrip: 'idioventricular_01.png',
          caseDescription: 'Slow ventricular escape rhythm',
          quiz: 'Idioventricular rhythm rate range',
          hotspot: 'Identify ventricular origin',
          dragDrop: 'Ventricular rhythm rates',
          simulator: 'Escape rhythm analysis'
        },
        'Accelerated Ventricular Rhythms': {
          caseStrip: 'aivr_01.png',
          caseDescription: 'AIVR in reperfusion',
          quiz: 'AIVR clinical significance',
          hotspot: 'Mark AIVR characteristics',
          dragDrop: 'AIVR vs other wide rhythms',
          simulator: 'Post-reperfusion rhythm'
        },
        'Agonal Rhythms': {
          caseStrip: 'agonal_rhythm_01.png',
          caseDescription: 'Terminal cardiac rhythms',
          quiz: 'Agonal rhythm prognosis',
          hotspot: 'Identify agonal pattern',
          dragDrop: 'Terminal rhythms sequence',
          simulator: 'End-stage rhythm recognition'
        },
        'Pacemaker Rhythm Analysis': {
          caseStrip: 'paced_rhythm_complex_01.png',
          caseDescription: 'Dual chamber pacing',
          quiz: 'Pacing modes nomenclature',
          hotspot: 'Identify pacing spikes',
          dragDrop: 'Pacing modes to indications',
          simulator: 'Pacemaker function assessment'
        },
        'Pacemaker Malfunction': {
          caseStrip: 'pacer_malfunction_01.png',
          caseDescription: 'Failure to capture and sense',
          quiz: 'Pacemaker malfunction types',
          hotspot: 'Mark malfunction signs',
          dragDrop: 'Malfunction to troubleshooting',
          simulator: 'Pacemaker emergency management'
        },
        'Magnet Mode Responses': {
          caseStrip: 'magnet_mode_01.png',
          caseDescription: 'Pacemaker magnet application',
          quiz: 'Magnet mode indications',
          hotspot: 'Identify magnet response',
          dragDrop: 'Device responses to magnet',
          simulator: 'Magnet application scenarios'
        },
        'Undersensing Patterns': {
          caseStrip: 'undersensing_01.png',
          caseDescription: 'Pacemaker undersensing failure',
          quiz: 'Undersensing causes',
          hotspot: 'Mark undersensing beats',
          dragDrop: 'Sensing problems classification',
          simulator: 'Sensing failure analysis'
        },
        'Oversensing Issues': {
          caseStrip: 'oversensing_01.png',
          caseDescription: 'Inappropriate sensing inhibition',
          quiz: 'Oversensing consequences',
          hotspot: 'Identify oversensing effects',
          dragDrop: 'Oversensing to solutions',
          simulator: 'Oversensing troubleshooting'
        },
        'Failure to Capture': {
          caseStrip: 'failure_capture_01.png',
          caseDescription: 'Pacing spikes without capture',
          quiz: 'Capture failure causes',
          hotspot: 'Mark non-captured spikes',
          dragDrop: 'Capture problems to fixes',
          simulator: 'Capture threshold testing'
        },
        'Failure to Pace': {
          caseStrip: 'failure_pace_01.png',
          caseDescription: 'No pacing when expected',
          quiz: 'Pacing failure mechanisms',
          hotspot: 'Identify missing pacing',
          dragDrop: 'Pacing failures classification',
          simulator: 'Pacing system evaluation'
        },
        'Pseudofusion Beats': {
          caseStrip: 'pseudofusion_01.png',
          caseDescription: 'Pacing spike on intrinsic beat',
          quiz: 'Pseudofusion vs true fusion',
          hotspot: 'Mark pseudofusion pattern',
          dragDrop: 'Fusion types recognition',
          simulator: 'Paced rhythm interpretation'
        },
        'Antidromic AVRT': {
          caseStrip: 'antidromic_avrt_01.png',
          caseDescription: 'Wide complex AVRT',
          quiz: 'Antidromic vs orthodromic AVRT',
          hotspot: 'Identify antidromic features',
          dragDrop: 'AVRT types to ECG',
          simulator: 'Complex tachycardia analysis'
        },
        'Orthodromic AVRT': {
          caseStrip: 'orthodromic_avrt_01.png',
          caseDescription: 'Narrow complex AVRT',
          quiz: 'AVRT vs AVNRT differences',
          hotspot: 'Mark orthodromic characteristics',
          dragDrop: 'SVT types differentiation',
          simulator: 'SVT mechanism analysis'
        },
        'Multiple Accessory Pathways': {
          caseStrip: 'multiple_pathways_01.png',
          caseDescription: 'Multiple WPW patterns',
          quiz: 'Multiple pathway recognition',
          hotspot: 'Identify pathway locations',
          dragDrop: 'Pathway types to locations',
          simulator: 'Complex WPW analysis'
        },
        'AF with Pre-excitation': {
          caseStrip: 'af_preexcitation_01.png',
          caseDescription: 'Atrial fibrillation with WPW',
          quiz: 'AF with WPW dangers',
          hotspot: 'Mark pre-excited AF',
          dragDrop: 'WPW AF to treatments',
          simulator: 'High-risk AF management'
        },
        'Pre-excited Atrial Fibrillation': {
          caseStrip: 'preexcited_af_01.png',
          caseDescription: 'Rapidly conducted AF via pathway',
          quiz: 'Contraindicated drugs in WPW AF',
          hotspot: 'Identify rapid pre-excitation',
          dragDrop: 'WPW AF emergency management',
          simulator: 'Life-threatening arrhythmia'
        },
        'Mahaim Fiber Conduction': {
          caseStrip: 'mahaim_fiber_01.png',
          caseDescription: 'Atriofascicular pathway',
          quiz: 'Mahaim fiber characteristics',
          hotspot: 'Mark Mahaim conduction',
          dragDrop: 'Accessory pathway types',
          simulator: 'Unusual pathway analysis'
        },
        'Atriofascicular Pathways': {
          caseStrip: 'atriofascicular_01.png',
          caseDescription: 'Specialized accessory pathways',
          quiz: 'Atriofascicular pathway features',
          hotspot: 'Identify pathway conduction',
          dragDrop: 'Pathway variants classification',
          simulator: 'Rare pathway recognition'
        },
        'Exotic Arrhythmia Patterns': {
          caseStrip: 'exotic_patterns_01.png',
          caseDescription: 'Unusual and rare rhythms',
          quiz: 'Rare arrhythmia recognition',
          hotspot: 'Mark exotic features',
          dragDrop: 'Rare rhythms to causes',
          simulator: 'Expert-level rhythm analysis'
        },
        'Ultimate Rhythm Challenge': {
          caseStrip: 'ultimate_challenge_01.png',
          caseDescription: 'Master-level rhythm interpretation',
          quiz: 'Complex rhythm analysis',
          hotspot: 'Identify all rhythm components',
          dragDrop: 'Rhythm complexity grading',
          simulator: 'Grand master rhythm challenge'
        }
      }
    }
  };

  const config = eventConfigs[eventId as keyof typeof eventConfigs] || eventConfigs['shock-zone-challenge'];

  return Array.from({ length: 30 }, (_, index) => {
    const dayNumber = index + 1;
    const topic = config.progressionTopics[index];
    const difficulty = getDifficultyForDay(dayNumber);
    
    return {
      id: `${eventId}-day-${dayNumber}`,
      dayNumber,
      title: topic,
      description: `Master ${topic.toLowerCase()} with progressive challenges`,
      tasks: generateDayTasks(eventId, dayNumber, topic, difficulty),
      unlocked: dayNumber === 1, // Only Day 1 unlocked initially
      completed: false,
      rewards: {
        xp: 150 + (dayNumber * 5),
        gems: 25 + (dayNumber * 2),
        hearts: dayNumber % 7 === 0 ? 1 : 0 // Weekly heart reward
      }
    };
  });
};

const getDifficultyForDay = (dayNumber: number): ('easy' | 'medium' | 'hard' | 'expert') => {
  if (dayNumber <= 7) return 'easy';
  if (dayNumber <= 14) return 'medium';
  if (dayNumber <= 25) return 'hard';
  return 'expert';
};

const generateDayTasks = (eventId: string, dayNumber: number, topic: string, difficulty: any): TaskData[] => {
  // 5-task structure for each day - removed interactive video
  const taskStructure = [
    {
      type: 'ecg-rhythm' as const,
      title: 'Case Strip Analysis',
      description: `Analyze real ECG strip showing ${topic.toLowerCase()}`,
      estimatedTime: 8
    },
    {
      type: 'h5p-quiz' as const,
      title: 'Interactive Quiz',
      description: `H5P interactive questions on ${topic.toLowerCase()}`,
      estimatedTime: 6
    },
    {
      type: 'image-hotspot' as const,
      title: 'Pattern Recognition',
      description: `Identify key features and abnormalities in ${topic.toLowerCase()}`,
      estimatedTime: 7
    },
    {
      type: 'drag-drop' as const,
      title: 'Classification Challenge',
      description: `Match ECG leads, diagnoses, and treatments for ${topic.toLowerCase()}`,
      estimatedTime: 9
    },
    {
      type: 'ecg-simulator' as const,
      title: 'Clinical Scenario',
      description: `Interactive case study with ${topic.toLowerCase()}`,
      estimatedTime: 12
    }
  ];
  
  return taskStructure.map((taskTemplate, index) => {
    const taskId = `${eventId}-day-${dayNumber}-task-${index + 1}`;
    
    return {
      id: taskId,
      type: taskTemplate.type,
      title: `${topic}: ${taskTemplate.title}`,
      description: taskTemplate.description,
      difficulty,
      estimatedTime: taskTemplate.estimatedTime,
      content: generateTaskContent(taskTemplate.type, topic, difficulty, dayNumber, eventId),
      rewards: {
        xp: getTaskXP(taskTemplate.type, difficulty),
        gems: getTaskGems(taskTemplate.type, difficulty)
      },
      unlocked: true, // All tasks unlocked within a day
      completed: false
    };
  });
};

const getTaskTitle = (taskType: string, taskNumber: number): string => {
  const titles = {
    'h5p-quiz': 'Knowledge Check',
    'ecg-rhythm': 'Strip Analysis',
    'image-hotspot': 'Pattern Recognition',
    'drag-drop': 'Classification Challenge',
    'ecg-simulator': 'Interactive Case'
  };
  return titles[taskType as keyof typeof titles] || `Task ${taskNumber}`;
};

const getTaskDescription = (taskType: string, topic: string): string => {
  const descriptions = {
    'h5p-quiz': `Test your knowledge of ${topic.toLowerCase()} with interactive questions`,
    'ecg-rhythm': `Analyze real ECG strips showing ${topic.toLowerCase()} patterns`,
    'image-hotspot': `Identify key features in ${topic.toLowerCase()} examples`,
    'drag-drop': `Classify different ${topic.toLowerCase()} patterns and characteristics`,
    'ecg-simulator': `Experience ${topic.toLowerCase()} in realistic clinical scenarios`
  };
  return descriptions[taskType as keyof typeof descriptions] || `Practice ${topic.toLowerCase()}`;
};

const getEstimatedTime = (taskType: string, difficulty: string): number => {
  const baseTimes = {
    'h5p-quiz': 5,
    'ecg-rhythm': 7,
    'image-hotspot': 6,
    'drag-drop': 8,
    'ecg-simulator': 12
  };
  
  const difficultyMultiplier = {
    'easy': 1,
    'medium': 1.2,
    'hard': 1.5,
    'expert': 2
  };
  
  const baseTime = baseTimes[taskType as keyof typeof baseTimes] || 8;
  const multiplier = difficultyMultiplier[difficulty as keyof typeof difficultyMultiplier] || 1;
  
  return Math.round(baseTime * multiplier);
};

const getTaskXP = (taskType: string, difficulty: string): number => {
  const baseXP = {
    'h5p-quiz': 25,
    'ecg-rhythm': 35,
    'image-hotspot': 30,
    'drag-drop': 40,
    'ecg-simulator': 50
  };
  
  const difficultyMultiplier = {
    'easy': 1,
    'medium': 1.5,
    'hard': 2,
    'expert': 3
  };
  
  const base = baseXP[taskType as keyof typeof baseXP] || 30;
  const multiplier = difficultyMultiplier[difficulty as keyof typeof difficultyMultiplier] || 1;
  
  return Math.round(base * multiplier);
};

const getTaskGems = (taskType: string, difficulty: string): number => {
  const baseGems = {
    'h5p-quiz': 3,
    'ecg-rhythm': 5,
    'image-hotspot': 4,
    'drag-drop': 6,
    'ecg-simulator': 8
  };
  
  const difficultyMultiplier = {
    'easy': 1,
    'medium': 1.5,
    'hard': 2,
    'expert': 2.5
  };
  
  const base = baseGems[taskType as keyof typeof baseGems] || 5;
  const multiplier = difficultyMultiplier[difficulty as keyof typeof difficultyMultiplier] || 1;
  
  return Math.round(base * multiplier);
};

// Generate quiz points for interactive video based on topic
const generateQuizPointsForTopic = (topic: string, videoDuration: number) => {
  const commonQuestions = {
    'arrhythmia': [
      {
        timestamp: Math.floor(videoDuration * 0.3),
        question: `What is the key identifying feature of ${topic}?`,
        options: ['Regular rhythm', 'Irregular rhythm', 'Wide QRS', 'Absent P waves'],
        correct: 1,
        explanation: `${topic} is characterized by specific rhythm irregularities.`
      },
      {
        timestamp: Math.floor(videoDuration * 0.7),
        question: `What is the primary treatment consideration for ${topic}?`,
        options: ['Rate control', 'Rhythm control', 'Both rate and rhythm', 'No treatment needed'],
        correct: 2,
        explanation: `${topic} management requires comprehensive approach to both rate and rhythm.`
      }
    ],
    'myocardial infarction': [
      {
        timestamp: Math.floor(videoDuration * 0.4),
        question: 'Which leads show changes in anterior MI?',
        options: ['II, III, aVF', 'V1-V6', 'V3-V6', 'I, aVL'],
        correct: 2,
        explanation: 'Anterior MI typically shows changes in leads V3-V6.'
      }
    ],
    'bundle branch block': [
      {
        timestamp: Math.floor(videoDuration * 0.5),
        question: 'What defines a wide QRS complex?',
        options: ['> 80ms', '> 100ms', '> 120ms', '> 140ms'],
        correct: 2,
        explanation: 'QRS width > 120ms indicates delayed ventricular conduction.'
      }
    ]
  };

  // Find matching questions or use default
  const topicKey = Object.keys(commonQuestions).find(key => 
    topic.toLowerCase().includes(key.toLowerCase())
  ) as keyof typeof commonQuestions;

  return commonQuestions[topicKey] || [
    {
      timestamp: Math.floor(videoDuration * 0.5),
      question: `What is the most important feature to identify in ${topic}?`,
      options: ['Heart rate', 'Rhythm pattern', 'QRS width', 'All of the above'],
      correct: 3,
      explanation: `When analyzing ${topic}, a systematic approach examining all components is essential.`
    }
  ];
};

// Get detailed content for a specific topic
const getDetailedContent = (eventId: string, topic: string) => {
  // This will use the same eventConfigs defined in generateEventDays
  // For now, return null and let the existing system work
  return null;
};

const generateTaskContent = (taskType: string, topic: string, difficulty: string, dayNumber: number, eventId?: string): TaskContent => {
  // Get detailed content for this specific topic
  const detailedContent = eventId ? getDetailedContent(eventId, topic) : null;
  
  // Generate specific content based on day and topic
  const stripFileName = detailedContent?.caseStrip || `strip_${topic.toLowerCase().replace(/[^a-z0-9]/g, '_')}_day${dayNumber.toString().padStart(2, '0')}.png`;
  const hotspotImageName = `hotspot_${topic.toLowerCase().replace(/[^a-z0-9]/g, '_')}_day${dayNumber.toString().padStart(2, '0')}.png`;
  
  switch (taskType) {
    case 'ecg-rhythm':
      return {
        ecgRhythm: {
          stripImage: `/images/ecg-strips/${stripFileName}`,
          stripImageAlt: `/images/ecg-strips/alt_${stripFileName}`, // Alternative image if primary not found
          rhythmType: topic,
          annotations: [],
          questions: generateECGQuestions(topic, difficulty)
        }
      };
      
    case 'h5p-quiz':
      return {
        quiz: {
          questions: generateQuizQuestions(topic, difficulty),
          passingScore: difficulty === 'expert' ? 90 : difficulty === 'hard' ? 85 : 80,
          timeLimit: difficulty === 'expert' ? 300 : 240,
          referenceImages: [
            `/images/quiz-references/${topic.toLowerCase().replace(/\s+/g, '_')}_reference_1.png`,
            `/images/quiz-references/${topic.toLowerCase().replace(/\s+/g, '_')}_reference_2.png`,
            `/images/quiz-references/${topic.toLowerCase().replace(/\s+/g, '_')}_reference_3.png`
          ]
        }
      };
      
    case 'image-hotspot':
      return {
        imageHotspot: {
          image: `/images/hotspots/${hotspotImageName}`,
          imageAlt: `/images/hotspots/alt_${hotspotImageName}`, // Alternative image
          hotspots: generateHotspots(topic, difficulty),
          instructions: detailedContent?.hotspot || `Identify the key features of ${topic.toLowerCase()} in this ECG`
        }
      };
      
    case 'drag-drop':
      return {
        dragDrop: {
          items: generateDragItems(topic, difficulty),
          dropZones: generateDropZones(topic),
          instructions: detailedContent?.dragDrop || `Classify and match the ${topic.toLowerCase()} characteristics`,
          referenceImages: [
            `/images/drag-drop/${topic.toLowerCase().replace(/\s+/g, '_')}_example_1.png`,
            `/images/drag-drop/${topic.toLowerCase().replace(/\s+/g, '_')}_example_2.png`,
            `/images/drag-drop/${topic.toLowerCase().replace(/\s+/g, '_')}_example_3.png`
          ]
        }
      };
      
    case 'ecg-simulator':
      return {
        simulator: {
          scenario: `Clinical case presenting with ${topic.toLowerCase()}`,
          patientInfo: generatePatientInfo(topic, difficulty),
          rhythmPattern: topic.toLowerCase().replace(/\s+/g, '_'),
          interactiveElements: [],
          caseImages: [
            `/images/simulator/${topic.toLowerCase().replace(/\s+/g, '_')}_case_ecg.png`,
            `/images/simulator/${topic.toLowerCase().replace(/\s+/g, '_')}_case_xray.png`,
            `/images/simulator/${topic.toLowerCase().replace(/\s+/g, '_')}_case_monitor.png`
          ]
        }
      };
      
    default:
      return {};
  }
};

// Helper functions for content generation with real ECG content
const generateQuizQuestions = (topic: string, difficulty: string): QuizQuestion[] => {
  const questionBank = {
    'Ventricular Tachycardia Basics': {
      easy: [
        {
          id: `vtach_basics_easy_1`,
          question: "What is the heart rate range typically seen in ventricular tachycardia?",
          options: ["60-100 bpm", "100-150 bpm", "150-250 bpm", "Over 300 bpm"],
          correct: 2,
          explanation: "VTach typically presents with rates between 150-250 bpm, though it can occasionally be slower.",
          difficulty: 'easy' as const
        },
        {
          id: `vtach_basics_easy_2`,
          question: "What is the QRS width in ventricular tachycardia?",
          options: ["<0.12 seconds", ">0.12 seconds", "<0.06 seconds", "Variable"],
          correct: 1,
          explanation: "VTach has wide QRS complexes >0.12 seconds because the rhythm originates in the ventricles.",
          difficulty: 'easy' as const
        }
      ],
      medium: [
        {
          id: `vtach_basics_medium_1`,
          question: "Which morphology clue suggests ventricular origin of a wide complex tachycardia?",
          options: ["AV dissociation", "Fusion beats", "Capture beats", "All of the above"],
          correct: 3,
          explanation: "AV dissociation, fusion beats, and capture beats are all classic findings that confirm ventricular origin.",
          difficulty: 'medium' as const
        }
      ]
    },
    'Polymorphic VT': {
      easy: [
        {
          id: `polymorphic_vt_easy_1`,
          question: "What is the first-line treatment for torsades de pointes?",
          options: ["Amiodarone", "Magnesium sulfate", "Lidocaine", "Defibrillation"],
          correct: 1,
          explanation: "Magnesium sulfate 2g IV is the first-line treatment for torsades de pointes.",
          difficulty: 'easy' as const
        },
        {
          id: `polymorphic_vt_easy_2`,
          question: "What ECG finding predisposes to torsades de pointes?",
          options: ["Short QT interval", "Prolonged QT interval", "Wide QRS", "Delta waves"],
          correct: 1,
          explanation: "Prolonged QT interval (>500ms) is the classic predisposing factor for torsades de pointes.",
          difficulty: 'easy' as const
        }
      ]
    },
    'Ventricular Fibrillation': {
      easy: [
        {
          id: `vfib_easy_1`,
          question: "What is the first treatment for ventricular fibrillation?",
          options: ["Amiodarone", "Immediate defibrillation", "Epinephrine", "CPR"],
          correct: 1,
          explanation: "VFib is a shockable rhythm requiring immediate defibrillation as the first intervention.",
          difficulty: 'easy' as const
        },
        {
          id: `vfib_easy_2`,
          question: "What energy level is recommended for the first defibrillation attempt in VFib?",
          options: ["100-120J", "150-200J", "300J", "360J"],
          correct: 1,
          explanation: "Initial biphasic defibrillation should be 150-200J, or follow manufacturer recommendations.",
          difficulty: 'easy' as const
        }
      ]
    },
    'Asystole': {
      easy: [
        {
          id: `asystole_easy_1`,
          question: "What is the most important initial step when asystole is identified?",
          options: ["Give epinephrine", "Check lead connections", "Start CPR", "Give atropine"],
          correct: 1,
          explanation: "Always confirm true asystole by checking lead connections and looking in multiple leads to rule out fine VF.",
          difficulty: 'easy' as const
        },
        {
          id: `asystole_easy_2`,
          question: "Which medication is used in asystole management?",
          options: ["Amiodarone", "Magnesium", "Epinephrine", "Lidocaine"],
          correct: 2,
          explanation: "Epinephrine 1mg IV every 3-5 minutes is the primary medication used in asystole.",
          difficulty: 'easy' as const
        }
      ]
    },
    'PEA (Pulseless Electrical Activity)': {
      easy: [
        {
          id: `pea_easy_1`,
          question: "What defines pulseless electrical activity (PEA)?",
          options: ["No electrical activity", "Electrical activity without pulse", "Slow heart rate", "Irregular rhythm"],
          correct: 1,
          explanation: "PEA is defined as organized electrical activity on the monitor without a detectable pulse.",
          difficulty: 'easy' as const
        },
        {
          id: `pea_easy_2`,
          question: "What is the primary focus in PEA management?",
          options: ["Defibrillation", "Finding reversible causes", "Amiodarone", "Transcutaneous pacing"],
          correct: 1,
          explanation: "PEA management focuses on identifying and treating reversible causes (H's and T's) while providing high-quality CPR.",
          difficulty: 'easy' as const
        }
      ]
    },
    'SVT with Instability': {
      easy: [
        {
          id: `svt_unstable_easy_1`,
          question: "What is the treatment for unstable SVT?",
          options: ["Adenosine", "Synchronized cardioversion", "Amiodarone", "Verapamil"],
          correct: 1,
          explanation: "Unstable SVT requires immediate synchronized cardioversion starting at 50-100J.",
          difficulty: 'easy' as const
        }
      ]
    },
    'Wide Complex Tachycardia': {
      easy: [
        {
          id: `wide_complex_easy_1`,
          question: "What should be assumed about wide complex tachycardia until proven otherwise?",
          options: ["SVT with aberrancy", "Ventricular tachycardia", "Atrial fibrillation", "Sinus tachycardia"],
          correct: 1,
          explanation: "Wide complex tachycardia should be assumed to be VT until proven otherwise due to the higher risk.",
          difficulty: 'easy' as const
        }
      ]
    }
    // Additional topics would continue here...
  };

  const topicQuestions = questionBank[topic as keyof typeof questionBank];
  if (!topicQuestions) {
    return [{
      id: `${topic.toLowerCase().replace(/\s+/g, '_')}_default`,
      question: `What is the key characteristic of ${topic}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correct: 0,
      explanation: "This is a sample question for this topic.",
      difficulty: difficulty as 'easy' | 'medium' | 'hard'
    }];
  }

  const diffQuestions = topicQuestions[difficulty as keyof typeof topicQuestions];
  return diffQuestions || topicQuestions.easy || [];
};

const generateECGQuestions = (topic: string, difficulty: string): QuizQuestion[] => {
  const ecgQuestionBank = {
    'VTach Recognition': [
      {
        id: `vtach_ecg_1`,
        question: "What is the rate of this rhythm?",
        options: ["100-150 bpm", "150-200 bpm", "200-250 bpm", "Over 250 bpm"],
        correct: 1,
        explanation: "This VTach rhythm shows a rate of approximately 180 bpm",
        difficulty: difficulty as 'easy' | 'medium' | 'hard'
      },
      {
        id: `vtach_ecg_2`,
        question: "Are the QRS complexes wide or narrow?",
        options: ["Wide (>0.12s)", "Narrow (<0.12s)", "Variable", "Cannot determine"],
        correct: 0,
        explanation: "VTach always has wide QRS complexes because the rhythm originates in the ventricles",
        difficulty: difficulty as 'easy' | 'medium' | 'hard'
      },
      {
        id: `vtach_ecg_3`,
        question: "Is AV dissociation present?",
        options: ["Yes", "No", "Cannot determine", "Not applicable"],
        correct: 0,
        explanation: "Look for P waves marching independently of QRS complexes - a hallmark of VTach",
        difficulty: difficulty as 'easy' | 'medium' | 'hard'
      }
    ],
    'Anterior STEMI': [
      {
        id: `stemi_ecg_1`,
        question: "Which leads show ST elevation?",
        options: ["V1-V4", "II, III, aVF", "I, aVL, V5-V6", "V7-V9"],
        correct: 0,
        explanation: "Anterior STEMI shows ST elevation in the anterior leads V1-V4",
        difficulty: difficulty as 'easy' | 'medium' | 'hard'
      },
      {
        id: `stemi_ecg_2`,
        question: "What is the likely culprit vessel?",
        options: ["LAD", "RCA", "LCX", "Diagonal"],
        correct: 0,
        explanation: "Anterior STEMI typically involves the LAD (Left Anterior Descending) artery",
        difficulty: difficulty as 'easy' | 'medium' | 'hard'
      }
    ]
  };

  return ecgQuestionBank[topic as keyof typeof ecgQuestionBank] || [
    {
      id: `${topic.toLowerCase().replace(/\s+/g, '_')}_ecg_default`,
      question: "Analyze this ECG strip",
      options: ["Normal", "Abnormal", "Borderline", "Cannot interpret"],
      correct: 1,
      explanation: "This ECG shows abnormal findings consistent with the topic",
      difficulty: difficulty as 'easy' | 'medium' | 'hard'
    }
  ];
};

const generateHotspots = (topic: string, difficulty: string): Hotspot[] => {
  const hotspotBank = {
    'VTach Recognition': [
      {
        x: 25,
        y: 40,
        radius: 15,
        label: "Wide QRS",
        feedback: "Wide QRS complex >0.12 seconds - key feature of ventricular origin",
        isCorrect: true
      },
      {
        x: 50,
        y: 30,
        radius: 12,
        label: "P Wave",
        feedback: "Independent P wave (AV dissociation) - confirms ventricular tachycardia",
        isCorrect: true
      },
      {
        x: 75,
        y: 45,
        radius: 18,
        label: "Fusion Beat",
        feedback: "Fusion beat - confirms ventricular origin when atrial and ventricular impulses meet",
        isCorrect: true
      }
    ],
    'Anterior STEMI': [
      {
        x: 30,
        y: 35,
        radius: 20,
        label: "ST Elevation",
        feedback: "ST elevation in V2 - indicates anterior wall myocardial infarction",
        isCorrect: true
      },
      {
        x: 60,
        y: 60,
        radius: 15,
        label: "Reciprocal Changes",
        feedback: "Reciprocal ST depression in inferior leads - supports anterior STEMI diagnosis",
        isCorrect: true
      }
    ]
  };

  return hotspotBank[topic as keyof typeof hotspotBank] || [
    {
      x: 50,
      y: 50,
      radius: 20,
      label: "Key Feature",
      feedback: "Important diagnostic feature of this condition",
      isCorrect: true
    }
  ];
};

const generateDragItems = (topic: string, difficulty: string): DragItem[] => {
  const dragItemBank = {
    'VTach Recognition': [
      { id: 'wide-qrs', content: 'Wide QRS >0.12s', category: 'morphology', correctZone: 'morphology-zone' },
      { id: 'av-dissociation', content: 'AV Dissociation', category: 'rhythm', correctZone: 'rhythm-zone' },
      { id: 'fusion-beats', content: 'Fusion Beats', category: 'diagnostic', correctZone: 'diagnostic-zone' },
      { id: 'capture-beats', content: 'Capture Beats', category: 'diagnostic', correctZone: 'diagnostic-zone' },
      { id: 'rate-180', content: 'Rate 150-250 bpm', category: 'rate', correctZone: 'rate-zone' }
    ],
    'Bundle Branch Blocks': [
      { id: 'rbbb-v1', content: 'RSR\' in V1', category: 'rbbb', correctZone: 'rbbb-zone' },
      { id: 'rbbb-v6', content: 'Wide S in V6', category: 'rbbb', correctZone: 'rbbb-zone' },
      { id: 'lbbb-v1', content: 'QS in V1', category: 'lbbb', correctZone: 'lbbb-zone' },
      { id: 'lbbb-v6', content: 'Broad R in V6', category: 'lbbb', correctZone: 'lbbb-zone' }
    ]
  };

  return dragItemBank[topic as keyof typeof dragItemBank] || [
    { id: 'item1', content: 'Feature 1', category: 'category1', correctZone: 'zone1' },
    { id: 'item2', content: 'Feature 2', category: 'category2', correctZone: 'zone2' }
  ];
};

const generateDropZones = (topic: string): DropZone[] => {
  const dropZoneBank = {
    'VTach Recognition': [
      { id: 'morphology-zone', label: 'QRS Morphology', acceptsCategory: ['morphology'] },
      { id: 'rhythm-zone', label: 'Rhythm Features', acceptsCategory: ['rhythm'] },
      { id: 'diagnostic-zone', label: 'Diagnostic Clues', acceptsCategory: ['diagnostic'] },
      { id: 'rate-zone', label: 'Rate Characteristics', acceptsCategory: ['rate'] }
    ],
    'Bundle Branch Blocks': [
      { id: 'rbbb-zone', label: 'RBBB Features', acceptsCategory: ['rbbb'] },
      { id: 'lbbb-zone', label: 'LBBB Features', acceptsCategory: ['lbbb'] }
    ]
  };

  return dropZoneBank[topic as keyof typeof dropZoneBank] || [
    { id: 'zone1', label: 'Category 1', acceptsCategory: ['category1'] },
    { id: 'zone2', label: 'Category 2', acceptsCategory: ['category2'] }
  ];
};

const generatePatientInfo = (topic: string, difficulty: string) => {
  const patientScenarios = {
    'VTach Recognition': {
      easy: {
        age: 68,
        gender: 'male' as const,
        chiefComplaint: "Chest pain and palpitations for 2 hours",
        vitals: { hr: 180, bp: '90/60', rr: 22, spo2: 94, temp: 98.8 },
        history: "History of MI 3 years ago, takes metoprolol",
        presentation: "Patient appears anxious, diaphoretic"
      },
      hard: {
        age: 72,
        gender: 'female' as const,
        chiefComplaint: "Syncope with rapid heart rate",
        vitals: { hr: 220, bp: '70/40', rr: 28, spo2: 88, temp: 99.2 },
        history: "CAD, CHF, ICD placed 2 years ago",
        presentation: "Hypotensive, altered mental status"
      }
    },
    'Anterior STEMI': {
      easy: {
        age: 55,
        gender: 'male' as const,
        chiefComplaint: "Crushing chest pain radiating to left arm",
        vitals: { hr: 95, bp: '140/90', rr: 18, spo2: 96, temp: 98.6 },
        history: "Smoker, hypertension, family history of CAD",
        presentation: "Diaphoretic, nauseous, asking for help"
      }
    }
  };

  const scenarios = patientScenarios[topic as keyof typeof patientScenarios];
  if (scenarios) {
    const diffScenario = scenarios[difficulty as keyof typeof scenarios];
    return diffScenario || scenarios.easy || scenarios[Object.keys(scenarios)[0] as keyof typeof scenarios];
  }

  return {
    age: 65,
    gender: 'male' as const,
    chiefComplaint: `Symptoms related to ${topic.toLowerCase()}`,
    vitals: { hr: 80, bp: '120/80', rr: 16, spo2: 98, temp: 98.6 },
    history: "No significant past medical history",
    presentation: "Patient appears stable"
  };
};

// Export helper functions
export const getEventById = (eventId: string): EventData | null => {
  const events = generateECGEvents();
  return events.find(event => event.id === eventId) || null;
};

export const getEventDays = (eventId: string): DayData[] => {
  return generateEventDays(eventId);
};

export const getTaskById = (eventId: string, taskId: string): TaskData | null => {
  const days = generateEventDays(eventId);
  for (const day of days) {
    const task = day.tasks.find(t => t.id === taskId);
    if (task) return task;
  }
  return null;
};
