import { EventData, DayData, TaskData } from '../types/eventTypes';

// Local event data generation - no Firebase required
export const generateLocalEvents = (): EventData[] => {
  const events: EventData[] = [
    {
      id: 'shock-zone-challenge',
      title: 'Shock Zone Challenge',
      subtitle: 'Emergency Arrhythmias',
      description: 'Master life-threatening rhythms in high-pressure scenarios',
      theme: {
        primary: '#DC2626',
        secondary: '#FEE2E2',
        gradient: 'bg-gradient-to-br from-red-500 via-orange-500 to-red-600',
        borderClass: 'border-red-400 hover:border-red-300',
        textClass: 'text-red-600',
        accentColor: '#EF4444'
      },
      totalDays: 30,
      tasksPerDay: 5,
      bannerImage: '/images/events/shock-zone-banner.jpg',
      badgeIcon: '⚡',
      rewards: {
        daily: { xp: 150, gems: 25, hearts: 0 },
        weekly: { xp: 1200, gems: 200, hearts: 1 },
        completion: { xp: 5000, gems: 1000, hearts: 5, specialBadge: 'Emergency Master' }
      },
      unlocked: true,
      days: generateShockZoneDays()
    },
    {
      id: 'code-pulse-protocol',
      title: 'Code Pulse Protocol',
      subtitle: 'Cardiac Arrest Algorithms',
      description: 'Navigate critical ACLS scenarios with precision timing',
      theme: {
        primary: '#7C2D12',
        secondary: '#FED7AA',
        gradient: 'bg-gradient-to-br from-orange-600 via-red-500 to-orange-700',
        borderClass: 'border-orange-400 hover:border-orange-300',
        textClass: 'text-orange-600',
        accentColor: '#EA580C'
      },
      totalDays: 30,
      tasksPerDay: 5,
      bannerImage: '/images/events/code-pulse-banner.jpg',
      badgeIcon: '🫀',
      rewards: {
        daily: { xp: 175, gems: 30, hearts: 0 },
        weekly: { xp: 1400, gems: 240, hearts: 1 },
        completion: { xp: 6000, gems: 1200, hearts: 6, specialBadge: 'ACLS Expert' }
      },
      unlocked: true,
      days: generateCodePulseDays()
    },
    {
      id: 'lead-master-quest',
      title: 'Lead Master Quest',
      subtitle: '12-Lead Mastery',
      description: 'Decode complex 12-lead patterns and localize pathology',
      theme: {
        primary: '#1E40AF',
        secondary: '#DBEAFE',
        gradient: 'bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600',
        borderClass: 'border-blue-400 hover:border-blue-300',
        textClass: 'text-blue-600',
        accentColor: '#3B82F6'
      },
      totalDays: 30,
      tasksPerDay: 5,
      bannerImage: '/images/events/lead-master-banner.jpg',
      badgeIcon: '🎯',
      rewards: {
        daily: { xp: 200, gems: 35, hearts: 0 },
        weekly: { xp: 1600, gems: 280, hearts: 1 },
        completion: { xp: 7000, gems: 1400, hearts: 7, specialBadge: '12-Lead Master' }
      },
      unlocked: true,
      days: generateLeadMasterDays()
    },
    {
      id: 'rhythm-hunter',
      title: 'Rhythm Hunter',
      subtitle: 'Rare Arrhythmia Recognition',
      description: 'Hunt down the most elusive and complex cardiac rhythms',
      theme: {
        primary: '#581C87',
        secondary: '#F3E8FF',
        gradient: 'bg-gradient-to-br from-purple-600 via-violet-500 to-purple-700',
        borderClass: 'border-purple-400 hover:border-purple-300',
        textClass: 'text-purple-600',
        accentColor: '#8B5CF6'
      },
      totalDays: 30,
      tasksPerDay: 5,
      bannerImage: '/images/events/rhythm-hunter-banner.jpg',
      badgeIcon: '🏹',
      rewards: {
        daily: { xp: 250, gems: 40, hearts: 0 },
        weekly: { xp: 2000, gems: 320, hearts: 2 },
        completion: { xp: 8000, gems: 1600, hearts: 8, specialBadge: 'Rhythm Hunter' }
      },
      unlocked: true,
      days: generateRhythmHunterDays()
    }
  ];

  return events;
};

// ECG Image Library Mapping for Shock Zone Challenge (Emergency Arrhythmias) - Enhanced Medical Accuracy
const shockZoneECGMapping: Record<string, { primary: string; secondary: string; simulator: string }> = {
  'Ventricular Tachycardia Basics': {
    primary: '/ecg/medical_accurate/ventricular_tachycardia_150bpm_1.png',
    secondary: '/ecg/medical_accurate/ventricular_tachycardia_165bpm_2.png',
    simulator: '/ecg/medical_accurate/vtach_150bpm.png'
  },
  'Polymorphic VT': {
    primary: '/ecg/medical_accurate/ventricular_tachycardia_180bpm_3.png',
    secondary: '/ecg/medical_accurate/ventricular_tachycardia_195bpm_4.png',
    simulator: '/ecg/medical_accurate/vtach_170bpm.png'
  },
  'Ventricular Fibrillation': {
    primary: '/ecg/medical_accurate/ventricular_tachycardia_210bpm_5.png',
    secondary: '/ecg/medical_accurate/ventricular_tachycardia_225bpm_6.png',
    simulator: '/ecg/medical_accurate/vtach_200bpm.png'
  },
  'Asystole': {
    primary: '/ecg/medical_accurate/bradycardia_35bpm_1.png',
    secondary: '/ecg/medical_accurate/bradycardia_40bpm.png',
    simulator: '/ecg/medical_accurate/bradycardia_42bpm_2.png'
  },
  'PEA (Pulseless Electrical Activity)': {
    primary: '/ecg/medical_accurate/normal_sinus_75bpm_2.png',
    secondary: '/ecg/medical_accurate/normal_sinus_85bpm_3.png',
    simulator: '/ecg/medical_accurate/normal_sinus_95bpm_4.png'
  },
  'SVT with Instability': {
    primary: '/ecg/medical_accurate/supraventricular_tachycardia_160bpm_1.png',
    secondary: '/ecg/medical_accurate/supraventricular_tachycardia_180bpm_2.png',
    simulator: '/ecg/medical_accurate/supraventricular_tachycardia_200bpm_3.png'
  },
  'Wide Complex Tachycardia': {
    primary: '/ecg/medical_accurate/ventricular_tachycardia_210bpm_5.png',
    secondary: '/ecg/medical_accurate/ventricular_tachycardia_225bpm_6.png',
    simulator: '/ecg/medical_accurate/vtach_190bpm.png'
  },
  'Bradycardia with Shock': {
    primary: '/ecg/medical_accurate/bradycardia_35bpm.png',
    secondary: '/ecg/medical_accurate/bradycardia_40bpm.png',
    simulator: '/ecg/medical_accurate/bradycardia_45bpm.png'
  },
  'Mobitz I (Wenckebach)': {
    primary: '/ecg/medical_accurate/first_degree_av_block_60bpm_1.png',
    secondary: '/ecg/medical_accurate/first_degree_av_block_70bpm_2.png',
    simulator: '/ecg/medical_accurate/first_degree_av_block_80bpm_3.png'
  },
  'Mobitz II': {
    primary: '/ecg/medical_accurate/bradycardia_48bpm_3.png',
    secondary: '/ecg/medical_accurate/bradycardia_50bpm.png',
    simulator: '/ecg/medical_accurate/bradycardia_52bpm_4.png'
  },
  'Complete Heart Block': {
    primary: '/ecg/medical_accurate/bradycardia_55bpm.png',
    secondary: '/ecg/medical_accurate/bradycardia_55bpm_5.png',
    simulator: '/ecg/medical_accurate/bradycardia_35bpm.png'
  },
  'Pacemaker Rhythms': {
    primary: '/ecg/medical_accurate/normal_60bpm.png',
    secondary: '/ecg/medical_accurate/normal_70bpm.png',
    simulator: '/ecg/medical_accurate/normal_75bpm.png'
  },
  'STEMI with VF': {
    primary: '/ecg/medical_accurate/ventricular_tachycardia_180bpm_3.png',
    secondary: '/ecg/medical_accurate/ventricular_tachycardia_195bpm_4.png',
    simulator: '/ecg/medical_accurate/vtach_180bpm.png'
  },
  'Hyperkalemia-induced Arrhythmia': {
    primary: '/ecg/medical_accurate/tachycardia_105bpm.png',
    secondary: '/ecg/medical_accurate/tachycardia_110bpm.png',
    simulator: '/ecg/medical_accurate/tachycardia_115bpm.png'
  },
  'AIVR': {
    primary: '/ecg/medical_accurate/tachycardia_125bpm.png',
    secondary: '/ecg/medical_accurate/tachycardia_130bpm.png',
    simulator: '/ecg/medical_accurate/tachycardia_125bpm_3.png'
  },
  'Junctional Tachycardia': {
    primary: '/ecg/medical_accurate/tachycardia_115bpm.png',
    secondary: '/ecg/medical_accurate/tachycardia_125bpm.png',
    simulator: '/ecg/medical_accurate/tachycardia_135bpm_4.png'
  },
  'WPW with Atrial Fibrillation': {
    primary: '/ecg/medical_accurate/atrial_fibrillation_130bpm_6.png',
    secondary: '/ecg/medical_accurate/atrial_fibrillation_140bpm_7.png',
    simulator: '/ecg/medical_accurate/atrial_fibrillation_150bpm_8.png'
  },
  'Brugada Syndrome': {
    primary: '/ecg/medical_accurate/rbbb_70bpm_1.png',
    secondary: '/ecg/medical_accurate/rbbb_75bpm.png',
    simulator: '/ecg/medical_accurate/rbbb_80bpm_2.png'
  },
  'Hypothermia Rhythms': {
    primary: '/ecg/medical_accurate/bradycardia_42bpm_2.png',
    secondary: '/ecg/medical_accurate/bradycardia_45bpm.png',
    simulator: '/ecg/medical_accurate/bradycardia_48bpm_3.png'
  },
  'Digitalis Toxicity': {
    primary: '/ecg/medical_accurate/atrial_flutter_75bpm_1.png',
    secondary: '/ecg/medical_accurate/atrial_flutter_100bpm_2.png',
    simulator: '/ecg/medical_accurate/atrial_flutter_150bpm_3.png'
  },
  'Long QT Syndrome': {
    primary: '/ecg/medical_accurate/tachycardia_140bpm.png',
    secondary: '/ecg/medical_accurate/tachycardia_145bpm_5.png',
    simulator: '/ecg/medical_accurate/tachycardia_150bpm.png'
  },
  'Catecholaminergic Polymorphic VT': {
    primary: '/ecg/medical_accurate/ventricular_tachycardia_195bpm_4.png',
    secondary: '/ecg/medical_accurate/ventricular_tachycardia_210bpm_5.png',
    simulator: '/ecg/medical_accurate/vtach_180bpm.png'
  },
  'Electrical Storm': {
    primary: '/ecg/medical_accurate/ventricular_tachycardia_225bpm_6.png',
    secondary: '/ecg/medical_accurate/vtach_200bpm.png',
    simulator: '/ecg/medical_accurate/vtach_210bpm.png'
  },
  'Pacemaker-Mediated Tachycardia': {
    primary: '/ecg/optimized/229_ILBBB.png',
    secondary: '/ecg/optimized/23_AFLT.png',
    simulator: '/ecg/teaching/229_ILBBB.png'
  },
  'Ventricular Standstill': {
    primary: '/ecg/optimized/230_LAFB.png',
    secondary: '/ecg/optimized/231_LAFB.png',
    simulator: '/ecg/teaching/230_LAFB.png'
  },
  'Hyperacute STEMI': {
    primary: '/ecg/optimized/232_LVH.png',
    secondary: '/ecg/optimized/233_LVH.png',
    simulator: '/ecg/teaching/232_LVH.png'
  },
  'Pericarditis with Arrhythmia': {
    primary: '/ecg/optimized/234_LVH.png',
    secondary: '/ecg/optimized/235_ASMI.png',
    simulator: '/ecg/teaching/234_LVH.png'
  },
  'Massive PE with PEA': {
    primary: '/ecg/optimized/236_LVH.png',
    secondary: '/ecg/optimized/237_ASMI.png',
    simulator: '/ecg/teaching/236_LVH.png'
  },
  'Severe Hypomagnesemia': {
    primary: '/ecg/medical_accurate/tachycardia_155bpm.png',
    secondary: '/ecg/medical_accurate/tachycardia_155bpm_6.png',
    simulator: '/ecg/medical_accurate/tachycardia_165bpm_7.png'
  },
  'Commotio Cordis': {
    primary: '/ecg/medical_accurate/ventricular_tachycardia_195bpm_4.png',
    secondary: '/ecg/medical_accurate/ventricular_tachycardia_210bpm_5.png',
    simulator: '/ecg/medical_accurate/vtach_200bpm.png'
  },
  'Emergency Shock Protocol': {
    primary: '/ecg/medical_accurate/ventricular_tachycardia_225bpm_6.png',
    secondary: '/ecg/medical_accurate/vtach_210bpm.png',
    simulator: '/ecg/medical_accurate/vtach_190bpm.png'
  },
  'Mega Challenge Day': {
    primary: '/ecg/medical_accurate/ventricular_tachycardia_150bpm_1.png',
    secondary: '/ecg/medical_accurate/atrial_fibrillation_150bpm_8.png',
    simulator: '/ecg/medical_accurate/vtach_180bpm.png'
  }
};

// Generate Shock Zone Challenge days (Emergency Arrhythmias)
function generateShockZoneDays(): DayData[] {
  const topics = [
    'Ventricular Tachycardia Basics', 'Polymorphic VT', 'Ventricular Fibrillation', 'Asystole', 'PEA (Pulseless Electrical Activity)',
    'SVT with Instability', 'Wide Complex Tachycardia', 'Bradycardia with Shock', 'Mobitz I (Wenckebach)', 'Mobitz II',
    'Complete Heart Block', 'Pacemaker Rhythms', 'STEMI with VF', 'Hyperkalemia-induced Arrhythmia', 'AIVR',
    'Junctional Tachycardia', 'WPW with Atrial Fibrillation', 'Brugada Syndrome', 'Hypothermia Rhythms', 'Digitalis Toxicity',
    'Long QT Syndrome', 'Catecholaminergic Polymorphic VT', 'Electrical Storm', 'Pacemaker-Mediated Tachycardia', 'Ventricular Standstill',
    'Hyperacute STEMI', 'Pericarditis with Arrhythmia', 'Massive PE with PEA', 'Severe Hypomagnesemia', 'Mega Challenge Day'
  ];

  return topics.map((topic, index) => ({
    id: `shock-zone-day-${index + 1}`,
    dayNumber: index + 1,
    title: topic,
    description: `Master ${topic.toLowerCase()} recognition and management`,
    tasks: generateShockZoneTasksForTopic(topic, index + 1),
    unlocked: index === 0, // Only first day unlocked
    completed: false,
    rewards: {
      xp: 150 + (index * 5),
      gems: 25 + (index * 2),
      hearts: (index + 1) % 7 === 0 ? 1 : 0
    }
  }));
}

// ECG Image Library Mapping for Code Pulse Protocol (ACLS Algorithms) - Enhanced Medical Accuracy
const codePulseECGMapping: Record<string, { primary: string; secondary: string; simulator: string }> = {
  'Adult Cardiac Arrest Algorithm': {
    primary: '/ecg/medical_accurate/normal_sinus_75bpm_2.png',
    secondary: '/ecg/medical_accurate/normal_sinus_85bpm_3.png',
    simulator: '/ecg/medical_accurate/normal_sinus_95bpm_4.png'
  },
  'VF/VT Algorithm': {
    primary: '/ecg/medical_accurate/ventricular_tachycardia_150bpm_1.png',
    secondary: '/ecg/medical_accurate/ventricular_tachycardia_180bpm_3.png',
    simulator: '/ecg/medical_accurate/vtach_160bpm.png'
  },
  'Asystole/PEA Algorithm': {
    primary: '/ecg/medical_accurate/bradycardia_35bpm_1.png',
    secondary: '/ecg/medical_accurate/bradycardia_40bpm.png',
    simulator: '/ecg/medical_accurate/bradycardia_35bpm.png'
  },
  'Bradycardia Algorithm': {
    primary: '/ecg/medical_accurate/bradycardia_42bpm_2.png',
    secondary: '/ecg/medical_accurate/bradycardia_48bpm_3.png',
    simulator: '/ecg/medical_accurate/bradycardia_52bpm_4.png'
  },
  'Tachycardia Algorithm': {
    primary: '/ecg/medical_accurate/tachycardia_125bpm_3.png',
    secondary: '/ecg/medical_accurate/tachycardia_135bpm_4.png',
    simulator: '/ecg/medical_accurate/tachycardia_145bpm_5.png'
  },
  'Post-Cardiac Arrest Care': {
    primary: '/ecg/medical_accurate/normal_sinus_60bpm_1.png',
    secondary: '/ecg/medical_accurate/normal_60bpm.png',
    simulator: '/ecg/medical_accurate/normal_70bpm.png'
  },
  'Acute Coronary Syndromes': {
    primary: '/ecg/medical_accurate/tachycardia_115bpm_2.png',
    secondary: '/ecg/medical_accurate/tachycardia_125bpm.png',
    simulator: '/ecg/medical_accurate/tachycardia_130bpm.png'
  },
  'Stroke Recognition': {
    primary: '/ecg/medical_accurate/atrial_fibrillation_85bpm_2.png',
    secondary: '/ecg/medical_accurate/atrial_fibrillation_95bpm_3.png',
    simulator: '/ecg/medical_accurate/atrial_fibrillation_110bpm_4.png'
  },
  'Advanced Airway Management': {
    primary: '/ecg/medical_accurate/normal_75bpm.png',
    secondary: '/ecg/medical_accurate/normal_80bpm.png',
    simulator: '/ecg/medical_accurate/normal_90bpm.png'
  },
  'Vascular Access': {
    primary: '/ecg/medical_accurate/normal_sinus_85bpm_3.png',
    secondary: '/ecg/medical_accurate/normal_sinus_95bpm_4.png',
    simulator: '/ecg/medical_accurate/normal_sinus_100bpm_5.png'
  },
  'Pharmacology Review': {
    primary: '/ecg/medical_accurate/tachycardia_105bpm_1.png',
    secondary: '/ecg/medical_accurate/tachycardia_115bpm.png',
    simulator: '/ecg/medical_accurate/tachycardia_125bmp_3.png'
  },
  'Team Dynamics': {
    primary: '/ecg/medical_accurate/normal_sinus_85bpm_3.png',
    secondary: '/ecg/medical_accurate/normal_sinus_95bpm_4.png',
    simulator: '/ecg/medical_accurate/normal_60bpm.png'
  },
  'Quality CPR': {
    primary: '/ecg/medical_accurate/normal_sinus_75bpm_2.png',
    secondary: '/ecg/medical_accurate/normal_70bpm.png',
    simulator: '/ecg/medical_accurate/normal_80bpm.png'
  },
  'Defibrillation Techniques': {
    primary: '/ecg/medical_accurate/ventricular_tachycardia_165bpm_2.png',
    secondary: '/ecg/medical_accurate/ventricular_tachycardia_195bpm_4.png',
    simulator: '/ecg/medical_accurate/vtach_170bpm.png'
  },
  'Cardioversion Procedures': {
    primary: '/ecg/medical_accurate/atrial_fibrillation_120bpm_5.png',
    secondary: '/ecg/medical_accurate/atrial_fibrillation_140bpm_7.png',
    simulator: '/ecg/medical_accurate/atrial_flutter_150bpm_3.png'
  },
  'Transcutaneous Pacing': {
    primary: '/ecg/medical_accurate/bradycardia_35bpm_1.png',
    secondary: '/ecg/medical_accurate/bradycardia_42bpm_2.png',
    simulator: '/ecg/medical_accurate/bradycardia_48bpm_3.png'
  },
  'Therapeutic Hypothermia': {
    primary: '/ecg/medical_accurate/normal_sinus_60bpm_1.png',
    secondary: '/ecg/medical_accurate/bradycardia_55bpm_5.png',
    simulator: '/ecg/medical_accurate/bradycardia_50bpm.png'
  },
  'ECMO Considerations': {
    primary: '/ecg/medical_accurate/normal_75bpm.png',
    secondary: '/ecg/medical_accurate/normal_80bpm.png',
    simulator: '/ecg/medical_accurate/normal_90bpm.png'
  },
  'Pediatric Differences': {
    primary: '/ecg/medical_accurate/tachycardia_140bpm.png',
    secondary: '/ecg/medical_accurate/tachycardia_150bpm.png',
    simulator: '/ecg/medical_accurate/tachycardia_155bpm.png'
  },
  'Pregnancy Modifications': {
    primary: '/ecg/medical_accurate/tachycardia_105bpm.png',
    secondary: '/ecg/medical_accurate/tachycardia_110bpm.png',
    simulator: '/ecg/medical_accurate/tachycardia_115bpm.png'
  },
  'Special Circumstances': {
    primary: '/ecg/medical_accurate/normal_100bpm.png',
    secondary: '/ecg/medical_accurate/normal_sinus_100bpm_5.png',
    simulator: '/ecg/medical_accurate/tachycardia_105bpm_1.png'
  },
  'Toxicological Emergencies': {
    primary: '/ecg/medical_accurate/ventricular_tachycardia_210bpm_5.png',
    secondary: '/ecg/medical_accurate/ventricular_tachycardia_225bpm_6.png',
    simulator: '/ecg/medical_accurate/vtach_200bpm.png'
  },
  'Drowning Management': {
    primary: '/ecg/medical_accurate/bradycardia_35bpm.png',
    secondary: '/ecg/medical_accurate/bradycardia_40bpm.png',
    simulator: '/ecg/medical_accurate/bradycardia_45bpm.png'
  },
  'Electrocution Injuries': {
    primary: '/ecg/medical_accurate/atrial_fibrillation_130bpm_6.png',
    secondary: '/ecg/medical_accurate/atrial_fibrillation_150bpm_8.png',
    simulator: '/ecg/medical_accurate/supraventricular_tachycardia_160bpm_1.png'
  },
  'Anaphylaxis Protocol': {
    primary: '/ecg/medical_accurate/tachycardia_155bpm_6.png',
    secondary: '/ecg/medical_accurate/tachycardia_165bpm_7.png',
    simulator: '/ecg/medical_accurate/supraventricular_tachycardia_180bpm_2.png'
  },
  'Pulmonary Embolism': {
    primary: '/ecg/medical_accurate/tachycardia_125bpm_3.png',
    secondary: '/ecg/medical_accurate/tachycardia_135bpm_4.png',
    simulator: '/ecg/medical_accurate/rbbb_90bpm_3.png'
  },
  'Tension Pneumothorax': {
    primary: '/ecg/medical_accurate/tachycardia_140bpm.png',
    secondary: '/ecg/medical_accurate/tachycardia_150bpm.png',
    simulator: '/ecg/medical_accurate/tachycardia_155bpm.png'
  },
  'Cardiac Tamponade': {
    primary: '/ecg/medical_accurate/tachycardia_115bpm_2.png',
    secondary: '/ecg/medical_accurate/tachycardia_125bpm.png',
    simulator: '/ecg/medical_accurate/tachycardia_135bpm_4.png'
  },
  'Hypovolemia Management': {
    primary: '/ecg/medical_accurate/tachycardia_105bpm_1.png',
    secondary: '/ecg/medical_accurate/tachycardia_115bpm_2.png',
    simulator: '/ecg/medical_accurate/tachycardia_125bpm_3.png'
  },
  'Code Team Leadership': {
    primary: '/ecg/medical_accurate/normal_sinus_75bpm_2.png',
    secondary: '/ecg/medical_accurate/normal_sinus_85bpm_3.png',
    simulator: '/ecg/medical_accurate/normal_sinus_95bpm_4.png'
  }
};

// Generate Code Pulse Protocol days (ACLS)
function generateCodePulseDays(): DayData[] {
  const topics = [
    'Basic ACLS Algorithm', 'VFib/VTach Protocol', 'PEA Management', 'Asystole Protocol', 'Bradycardia Algorithm',
    'Tachycardia Algorithm', 'Post-Cardiac Arrest Care', 'Advanced Airway Management', 'ACLS Medications', 'Defibrillation & Cardioversion',
    'Transcutaneous Pacing', 'Team Dynamics', 'Code Team Leadership', 'Pediatric Advanced Life Support', 'Neonatal Resuscitation',
    'Obstetric Emergencies', 'Drowning Resuscitation', 'Hypothermia Management', 'Toxicology Arrest', 'Trauma Cardiac Arrest',
    'Massive PE Management', 'Tension Pneumothorax', 'Cardiac Tamponade', 'Severe Hyperkalemia', 'Drug Overdose Protocols',
    'Anaphylaxis Management', 'Acute Stroke Protocols', 'STEMI Management', 'Post-Arrest Care', 'Master Code Blue'
  ];

  return topics.map((topic, index) => ({
    id: `code-pulse-day-${index + 1}`,
    dayNumber: index + 1,
    title: topic,
    description: `Master ${topic.toLowerCase()} protocols and procedures`,
    tasks: generateCodePulseTasksForTopic(topic, index + 1),
    unlocked: index === 0,
    completed: false,
    rewards: {
      xp: 175 + (index * 6),
      gems: 30 + (index * 2),
      hearts: (index + 1) % 7 === 0 ? 1 : 0
    }
  }));
}



// ECG Image Library Mapping for Lead Master Quest (12-Lead Analysis)
const leadMasterECGMapping: Record<string, { primary: string; secondary: string; simulator: string }> = {
  'Lead Placement Basics': {
    primary: '/ecg/optimized/241_LVH.png',
    secondary: '/ecg/optimized/242_LVH.png',
    simulator: '/ecg/teaching/241_LVH.png'
  },
  'Axis Determination': {
    primary: '/ecg/optimized/243_LVH.png',
    secondary: '/ecg/optimized/244_LVH.png',
    simulator: '/ecg/teaching/243_LVH.png'
  },
  'Bundle Branch Blocks': {
    primary: '/ecg/medical_accurate/lbbb_75bpm_2.png',
    secondary: '/ecg/medical_accurate/rbbb_80bpm_2.png',
    simulator: '/ecg/medical_accurate/lbbb_85bpm_3.png'
  },
  'Fascicular Blocks': {
    primary: '/ecg/optimized/247_LAFB.png',
    secondary: '/ecg/optimized/248_LAFB.png',
    simulator: '/ecg/teaching/247_LAFB.png'
  },
  'Anterior STEMI Recognition': {
    primary: '/ecg/optimized/249_AMI.png',
    secondary: '/ecg/optimized/25_AFLT.png',
    simulator: '/ecg/teaching/249_AMI.png'
  },
  'Inferior STEMI Patterns': {
    primary: '/ecg/optimized/250_ASMI.png',
    secondary: '/ecg/optimized/251_IMI.png',
    simulator: '/ecg/teaching/250_ASMI.png'
  },
  'Lateral STEMI Analysis': {
    primary: '/ecg/optimized/252_LMI.png',
    secondary: '/ecg/optimized/253_ALMI.png',
    simulator: '/ecg/teaching/252_LMI.png'
  },
  'Posterior STEMI Diagnosis': {
    primary: '/ecg/optimized/254_PMI.png',
    secondary: '/ecg/optimized/255_IPMI.png',
    simulator: '/ecg/teaching/254_PMI.png'
  },
  'Right Heart Strain': {
    primary: '/ecg/optimized/256_RVH.png',
    secondary: '/ecg/optimized/257_RVH.png',
    simulator: '/ecg/teaching/256_RVH.png'
  },
  'LVH Criteria': {
    primary: '/ecg/optimized/258_LVH.png',
    secondary: '/ecg/optimized/259_LVH.png',
    simulator: '/ecg/teaching/258_LVH.png'
  },
  'RVH Recognition': {
    primary: '/ecg/optimized/26_AFLT.png',
    secondary: '/ecg/optimized/260_LNGQT.png',
    simulator: '/ecg/teaching/26_AFLT.png'
  },
  'Atrial Enlargement': {
    primary: '/ecg/optimized/261_LNGQT.png',
    secondary: '/ecg/optimized/262_ISCIL.png',
    simulator: '/ecg/teaching/261_LNGQT.png'
  },
  'Pericarditis vs Early Repol': {
    primary: '/ecg/optimized/263_ISCAS.png',
    secondary: '/ecg/optimized/264_ISCIN.png',
    simulator: '/ecg/teaching/263_ISCAS.png'
  },
  'Brugada Syndrome': {
    primary: '/ecg/optimized/265_CRBBB.png',
    secondary: '/ecg/optimized/266_IRBBB.png',
    simulator: '/ecg/teaching/265_CRBBB.png'
  },
  'Wellens Syndrome': {
    primary: '/ecg/optimized/267_AMI.png',
    secondary: '/ecg/optimized/268_ASMI.png',
    simulator: '/ecg/teaching/267_AMI.png'
  },
  'DeWinter T-Wave Pattern': {
    primary: '/ecg/optimized/269_AMI.png',
    secondary: '/ecg/optimized/27_AFLT.png',
    simulator: '/ecg/teaching/269_AMI.png'
  },
  'Hyperacute T-Waves': {
    primary: '/ecg/optimized/270_AMI.png',
    secondary: '/ecg/optimized/271_ASMI.png',
    simulator: '/ecg/teaching/270_AMI.png'
  },
  'Reciprocal Changes': {
    primary: '/ecg/optimized/272_IMI.png',
    secondary: '/ecg/optimized/273_LMI.png',
    simulator: '/ecg/teaching/272_IMI.png'
  },
  'Multivessel Disease': {
    primary: '/ecg/optimized/274_AMI.png',
    secondary: '/ecg/optimized/275_ASMI.png',
    simulator: '/ecg/teaching/274_AMI.png'
  },
  'Chronic Infarction': {
    primary: '/ecg/optimized/276_ISCAL.png',
    secondary: '/ecg/optimized/277_ISCIN.png',
    simulator: '/ecg/teaching/276_ISCAL.png'
  },
  'Ventricular Aneurysm': {
    primary: '/ecg/optimized/278_ISCAL.png',
    secondary: '/ecg/optimized/279_ISCAS.png',
    simulator: '/ecg/teaching/278_ISCAL.png'
  },
  'Dextrocardia': {
    primary: '/ecg/optimized/28_AFLT.png',
    secondary: '/ecg/optimized/280_ISCIN.png',
    simulator: '/ecg/teaching/28_AFLT.png'
  },
  'Lead Misplacement': {
    primary: '/ecg/optimized/281_LVH.png',
    secondary: '/ecg/optimized/282_NORM.png',
    simulator: '/ecg/teaching/281_LVH.png'
  },
  'Artifact vs Pathology': {
    primary: '/ecg/optimized/283_NORM.png',
    secondary: '/ecg/optimized/284_NST_.png',
    simulator: '/ecg/teaching/283_NORM.png'
  },
  'Electrolyte Effects': {
    primary: '/ecg/optimized/285_LNGQT.png',
    secondary: '/ecg/optimized/286_DIG.png',
    simulator: '/ecg/teaching/285_LNGQT.png'
  },
  'Drug Effect Patterns': {
    primary: '/ecg/optimized/287_DIG.png',
    secondary: '/ecg/optimized/288_LNGQT.png',
    simulator: '/ecg/teaching/287_DIG.png'
  },
  'Congenital Heart Disease': {
    primary: '/ecg/optimized/289_RVH.png',
    secondary: '/ecg/optimized/29_AFLT.png',
    simulator: '/ecg/teaching/289_RVH.png'
  },
  'Complex Conduction Blocks': {
    primary: '/ecg/optimized/290_2AVB.png',
    secondary: '/ecg/optimized/291_3AVB.png',
    simulator: '/ecg/teaching/290_2AVB.png'
  },
  'Advanced STEMI Patterns': {
    primary: '/ecg/optimized/292_AMI.png',
    secondary: '/ecg/optimized/293_ASMI.png',
    simulator: '/ecg/teaching/292_AMI.png'
  },
  'Master 12-Lead': {
    primary: '/ecg/optimized/294_AMI.png',
    secondary: '/ecg/optimized/295_3AVB.png',
    simulator: '/ecg/teaching/294_AMI.png'
  }
};

// ECG Image Library Mapping for Rhythm Hunter Challenge (Rare Arrhythmias)
const rhythmHunterECGMapping: Record<string, { primary: string; secondary: string; simulator: string }> = {
  'Sinus Node Dysfunction': {
    primary: '/ecg/optimized/296_1AVB.png',
    secondary: '/ecg/optimized/297_SR.png',
    simulator: '/ecg/teaching/296_1AVB.png'
  },
  'Wandering Atrial Pacemaker': {
    primary: '/ecg/optimized/298_SR.png',
    secondary: '/ecg/optimized/299_SR.png',
    simulator: '/ecg/teaching/298_SR.png'
  },
  'Multifocal Atrial Tachycardia': {
    primary: '/ecg/optimized/3_NORM.png',
    secondary: '/ecg/optimized/30_AFLT.png',
    simulator: '/ecg/teaching/3_NORM.png'
  },
  'Atrial Escape Rhythms': {
    primary: '/ecg/optimized/300_SR.png',
    secondary: '/ecg/optimized/301_SR.png',
    simulator: '/ecg/teaching/300_SR.png'
  },
  'Junctional Escape': {
    primary: '/ecg/optimized/302_SR.png',
    secondary: '/ecg/optimized/303_SR.png',
    simulator: '/ecg/teaching/302_SR.png'
  },
  'Accelerated Junctional': {
    primary: '/ecg/optimized/304_PSVT.png',
    secondary: '/ecg/optimized/305_PSVT.png',
    simulator: '/ecg/teaching/304_PSVT.png'
  },
  'Idioventricular Rhythm': {
    primary: '/ecg/optimized/306_SR.png',
    secondary: '/ecg/optimized/307_SR.png',
    simulator: '/ecg/teaching/306_SR.png'
  },
  'Accelerated Idioventricular': {
    primary: '/ecg/optimized/308_AMI.png',
    secondary: '/ecg/optimized/309_AMI.png',
    simulator: '/ecg/teaching/308_AMI.png'
  },
  'Parasystole': {
    primary: '/ecg/optimized/31_AFLT.png',
    secondary: '/ecg/optimized/310_AMI.png',
    simulator: '/ecg/teaching/31_AFLT.png'
  },
  'Fusion Beats': {
    primary: '/ecg/optimized/311_AMI.png',
    secondary: '/ecg/optimized/312_ISCAL.png',
    simulator: '/ecg/teaching/311_AMI.png'
  },
  'Capture Beats': {
    primary: '/ecg/optimized/313_ISCAL.png',
    secondary: '/ecg/optimized/314_ISCAL.png',
    simulator: '/ecg/teaching/313_ISCAL.png'
  },
  'Concealed Conduction': {
    primary: '/ecg/optimized/315_ISCAL.png',
    secondary: '/ecg/optimized/316_ISCAL.png',
    simulator: '/ecg/teaching/315_ISCAL.png'
  },
  'Aberrant Conduction': {
    primary: '/ecg/optimized/317_IRBBB.png',
    secondary: '/ecg/optimized/318_CRBBB.png',
    simulator: '/ecg/teaching/317_IRBBB.png'
  },
  'Ashman Phenomenon': {
    primary: '/ecg/optimized/319_AFIB.png',
    secondary: '/ecg/optimized/32_AFLT.png',
    simulator: '/ecg/teaching/319_AFIB.png'
  },
  'Rate-Related BBB': {
    primary: '/ecg/optimized/320_LNGQT.png',
    secondary: '/ecg/optimized/321_CRBBB.png',
    simulator: '/ecg/teaching/320_LNGQT.png'
  },
  'Intermittent BBB': {
    primary: '/ecg/optimized/322_IRBBB.png',
    secondary: '/ecg/optimized/323_CLBBB.png',
    simulator: '/ecg/teaching/322_IRBBB.png'
  },
  'Bifascicular Block': {
    primary: '/ecg/optimized/324_LAFB.png',
    secondary: '/ecg/optimized/325_IRBBB.png',
    simulator: '/ecg/teaching/324_LAFB.png'
  },
  'Trifascicular Block': {
    primary: '/ecg/optimized/326_1AVB.png',
    secondary: '/ecg/optimized/327_LAFB.png',
    simulator: '/ecg/teaching/326_1AVB.png'
  },
  'AV Dissociation': {
    primary: '/ecg/optimized/328_3AVB.png',
    secondary: '/ecg/optimized/329_2AVB.png',
    simulator: '/ecg/teaching/328_3AVB.png'
  },
  'Isorhythmic AV Dissociation': {
    primary: '/ecg/optimized/33_AFLT.png',
    secondary: '/ecg/optimized/330_SR.png',
    simulator: '/ecg/teaching/33_AFLT.png'
  },
  'Exit Block': {
    primary: '/ecg/optimized/331_1AVB.png',
    secondary: '/ecg/optimized/332_2AVB.png',
    simulator: '/ecg/teaching/331_1AVB.png'
  },
  'Entrance Block': {
    primary: '/ecg/optimized/333_SR.png',
    secondary: '/ecg/optimized/334_SR.png',
    simulator: '/ecg/teaching/333_SR.png'
  },
  'Wenckebach Periodicity': {
    primary: '/ecg/optimized/335_2AVB.png',
    secondary: '/ecg/optimized/336_2AVB.png',
    simulator: '/ecg/teaching/335_2AVB.png'
  },
  'Mobitz Type II Variants': {
    primary: '/ecg/optimized/337_2AVB.png',
    secondary: '/ecg/optimized/338_2AVB.png',
    simulator: '/ecg/teaching/337_2AVB.png'
  },
  'High-Grade AV Block': {
    primary: '/ecg/optimized/339_3AVB.png',
    secondary: '/ecg/optimized/34_AFLT.png',
    simulator: '/ecg/teaching/339_3AVB.png'
  },
  'Paroxysmal AV Block': {
    primary: '/ecg/optimized/340_3AVB.png',
    secondary: '/ecg/optimized/341_2AVB.png',
    simulator: '/ecg/teaching/340_3AVB.png'
  },
  'Alternating BBB': {
    primary: '/ecg/optimized/342_CRBBB.png',
    secondary: '/ecg/optimized/343_CLBBB.png',
    simulator: '/ecg/teaching/342_CRBBB.png'
  },
  'Bidirectional VT': {
    primary: '/ecg/optimized/344_PSVT.png',
    secondary: '/ecg/optimized/345_PSVT.png',
    simulator: '/ecg/teaching/344_PSVT.png'
  },
  'Exotic Arrhythmias': {
    primary: '/ecg/optimized/346_WPW.png',
    secondary: '/ecg/optimized/347_PSVT.png',
    simulator: '/ecg/teaching/346_WPW.png'
  },
  'Ultimate Rhythm Challenge': {
    primary: '/ecg/optimized/348_3AVB.png',
    secondary: '/ecg/optimized/349_WPW.png',
    simulator: '/ecg/teaching/348_3AVB.png'
  }
};

// Generate Lead Master Quest days (12-Lead Analysis)
function generateLeadMasterDays(): DayData[] {
  const topics = [
    'Lead Placement Basics', 'Axis Determination', 'Bundle Branch Blocks', 'Fascicular Blocks', 'Anterior STEMI Recognition',
    'Inferior STEMI Patterns', 'Lateral STEMI Analysis', 'Posterior STEMI Diagnosis', 'Right Heart Strain', 'LVH Criteria',
    'RVH Recognition', 'Atrial Enlargement', 'Pericarditis vs Early Repol', 'Brugada Syndrome', 'Wellens Syndrome',
    'DeWinter T-Wave Pattern', 'Hyperacute T-Waves', 'Reciprocal Changes', 'Multivessel Disease', 'Chronic Infarction',
    'Ventricular Aneurysm', 'Dextrocardia', 'Lead Misplacement', 'Artifact vs Pathology', 'Electrolyte Effects',
    'Drug Effect Patterns', 'Congenital Heart Disease', 'Complex Conduction Blocks', 'Advanced STEMI Patterns', 'Master 12-Lead'
  ];

  return topics.map((topic, index) => ({
    id: `lead-master-day-${index + 1}`,
    dayNumber: index + 1,
    title: topic,
    description: `Master ${topic.toLowerCase()} interpretation`,
    tasks: generateLeadMasterTasksForTopic(topic, index + 1),
    unlocked: index === 0,
    completed: false,
    rewards: {
      xp: 200 + (index * 7),
      gems: 35 + (index * 3),
      hearts: (index + 1) % 7 === 0 ? 1 : 0
    }
  }));
}

// Generate Rhythm Hunter days (Rare Arrhythmias)
function generateRhythmHunterDays(): DayData[] {
  const topics = [
    'Sinus Node Dysfunction', 'Wandering Atrial Pacemaker', 'Multifocal Atrial Tachycardia', 'Atrial Escape Rhythms', 'Junctional Escape',
    'Accelerated Junctional', 'Idioventricular Rhythm', 'Accelerated Idioventricular', 'Parasystole', 'Fusion Beats',
    'Capture Beats', 'Concealed Conduction', 'Aberrant Conduction', 'Ashman Phenomenon', 'Rate-Related BBB',
    'Intermittent BBB', 'Bifascicular Block', 'Trifascicular Block', 'AV Dissociation', 'Isorhythmic AV Dissociation',
    'Exit Block', 'Entrance Block', 'Wenckebach Periodicity', 'Mobitz Type II Variants', 'High-Grade AV Block',
    'Paroxysmal AV Block', 'Alternating BBB', 'Bidirectional VT', 'Exotic Arrhythmias', 'Ultimate Rhythm Challenge'
  ];

  return topics.map((topic, index) => ({
    id: `rhythm-hunter-day-${index + 1}`,
    dayNumber: index + 1,
    title: topic,
    description: `Hunt down ${topic.toLowerCase()} patterns`,
    tasks: generateRhythmHunterTasksForTopic(topic, index + 1),
    unlocked: index === 0,
    completed: false,
    rewards: {
      xp: 250 + (index * 8),
      gems: 40 + (index * 3),
      hearts: (index + 1) % 7 === 0 ? 2 : 0
    }
  }));
}

// =====================================================
// SHOCK ZONE CHALLENGE - Emergency Arrhythmias Tasks
// =====================================================
function generateShockZoneTasksForTopic(topic: string, dayNumber: number): TaskData[] {
  const difficulty = getDifficultyForDay(dayNumber);
  const baseId = `shock-zone-day-${dayNumber}`;
  const ecgImages = shockZoneECGMapping[topic] || shockZoneECGMapping['Ventricular Tachycardia Basics'];
  
  return [
    {
      id: `${baseId}-task-1`,
      type: 'ecg-rhythm',
      title: `${topic}: Emergency Strip Analysis`,
      description: `Analyze life-threatening ${topic.toLowerCase()} patterns`,
      difficulty,
      estimatedTime: 8,
      content: {
        ecgRhythm: {
          stripImage: ecgImages.primary,
          stripImageAlt: ecgImages.secondary,
          rhythmType: topic,
          annotations: getShockZoneAnnotations(topic),
          questions: getShockZoneQuestions(topic, difficulty)
        }
      },
      rewards: { xp: 100 + (dayNumber * 2), gems: 15 + dayNumber },
      unlocked: true,
      completed: false
    },
    {
      id: `${baseId}-task-2`,
      type: 'h5p-quiz',
      title: `${topic}: Emergency Protocol Quiz`,
      description: `Test emergency management of ${topic.toLowerCase()}`,
      difficulty,
      estimatedTime: 6,
      content: {
        quiz: {
          questions: getShockZoneQuestions(topic, difficulty),
          passingScore: difficulty === 'expert' ? 95 : difficulty === 'hard' ? 90 : 85,
          timeLimit: 180
        }
      },
      rewards: { xp: 80 + (dayNumber * 2), gems: 12 + dayNumber },
      unlocked: true,
      completed: false
    },
    {
      id: `${baseId}-task-3`,
      type: 'image-hotspot',
      title: `${topic}: Critical Feature Recognition`,
      description: `Identify life-threatening features in ${topic.toLowerCase()}`,
      difficulty,
      estimatedTime: 7,
      content: {
        imageHotspot: {
          image: ecgImages.primary,
          imageAlt: ecgImages.secondary,
          hotspots: getShockZoneHotspots(topic),
          instructions: `Identify critical emergency features of ${topic.toLowerCase()}`
        }
      },
      rewards: { xp: 90 + (dayNumber * 2), gems: 13 + dayNumber },
      unlocked: true,
      completed: false
    },
    {
      id: `${baseId}-task-4`,
      type: 'drag-drop',
      title: `${topic}: Emergency Response Classification`,
      description: `Classify emergency interventions for ${topic.toLowerCase()}`,
      difficulty,
      estimatedTime: 9,
      content: {
        dragDrop: {
          items: getShockZoneDragItems(topic),
          dropZones: getShockZoneDropZones(topic),
          instructions: `Drag emergency interventions to correct urgency levels for ${topic.toLowerCase()}`
        }
      },
      rewards: { xp: 110 + (dayNumber * 2), gems: 16 + dayNumber },
      unlocked: true,
      completed: false
    },
    {
      id: `${baseId}-task-5`,
      type: 'ecg-simulator',
      title: `${topic}: Emergency Code Scenario`,
      description: `Manage emergency code presenting with ${topic.toLowerCase()}`,
      difficulty,
      estimatedTime: 12,
      content: {
        simulator: {
          scenario: `Code Blue: Patient in ${topic.toLowerCase()}`,
          patientInfo: {
            age: 45 + Math.floor(Math.random() * 30),
            gender: Math.random() > 0.5 ? 'male' : 'female',
            chiefComplaint: getShockZoneComplaint(topic),
            vitals: getShockZoneVitals(topic)
          },
          rhythmPattern: topic.toLowerCase().replace(/\s+/g, '_'),
          interactiveElements: [],
          caseImages: [
            ecgImages.simulator
          ]
        }
      },
      rewards: { xp: 130 + (dayNumber * 3), gems: 20 + dayNumber },
      unlocked: true,
      completed: false
    }
  ];
}

// =====================================================
// CODE PULSE PROTOCOL - ACLS Algorithm Tasks  
// =====================================================
function generateCodePulseTasksForTopic(topic: string, dayNumber: number): TaskData[] {
  const difficulty = getDifficultyForDay(dayNumber);
  const baseId = `code-pulse-day-${dayNumber}`;
  const ecgImages = codePulseECGMapping[topic] || codePulseECGMapping['Adult Cardiac Arrest Algorithm'];
  
  return [
    {
      id: `${baseId}-task-1`,
      type: 'ecg-rhythm',
      title: `${topic}: Algorithm Strip Analysis`,
      description: `Analyze ACLS-relevant ${topic.toLowerCase()} patterns`,
      difficulty,
      estimatedTime: 8,
      content: {
        ecgRhythm: {
          stripImage: ecgImages.primary,
          stripImageAlt: ecgImages.secondary,
          rhythmType: topic,
          annotations: getCodePulseAnnotations(topic),
          questions: getCodePulseQuestions(topic, difficulty)
        }
      },
      rewards: { xp: 110 + (dayNumber * 2), gems: 17 + dayNumber },
      unlocked: true,
      completed: false
    },
    {
      id: `${baseId}-task-2`,
      type: 'h5p-quiz',
      title: `${topic}: ACLS Protocol Knowledge`,
      description: `Master ACLS protocols for ${topic.toLowerCase()}`,
      difficulty,
      estimatedTime: 7,
      content: {
        quiz: {
          questions: getCodePulseQuestions(topic, difficulty),
          passingScore: difficulty === 'expert' ? 95 : difficulty === 'hard' ? 90 : 85,
          timeLimit: 200
        }
      },
      rewards: { xp: 90 + (dayNumber * 2), gems: 14 + dayNumber },
      unlocked: true,
      completed: false
    },
    {
      id: `${baseId}-task-3`,
      type: 'image-hotspot',
      title: `${topic}: Algorithm Decision Points`,
      description: `Identify key decision points in ${topic.toLowerCase()}`,
      difficulty,
      estimatedTime: 8,
      content: {
        imageHotspot: {
          image: ecgImages.primary,
          imageAlt: ecgImages.secondary,
          hotspots: getCodePulseHotspots(topic),
          instructions: `Identify critical decision points in ${topic.toLowerCase()} algorithm`
        }
      },
      rewards: { xp: 100 + (dayNumber * 2), gems: 15 + dayNumber },
      unlocked: true,
      completed: false
    },
    {
      id: `${baseId}-task-4`,
      type: 'drag-drop',
      title: `${topic}: Protocol Step Sequencing`,
      description: `Sequence ACLS steps for ${topic.toLowerCase()}`,
      difficulty,
      estimatedTime: 10,
      content: {
        dragDrop: {
          items: getCodePulseDragItems(topic),
          dropZones: getCodePulseDropZones(topic),
          instructions: `Arrange ACLS protocol steps in correct sequence for ${topic.toLowerCase()}`
        }
      },
      rewards: { xp: 120 + (dayNumber * 2), gems: 18 + dayNumber },
      unlocked: true,
      completed: false
    },
    {
      id: `${baseId}-task-5`,
      type: 'ecg-simulator',
      title: `${topic}: ACLS Team Leadership`,
      description: `Lead ACLS team managing ${topic.toLowerCase()}`,
      difficulty,
      estimatedTime: 15,
      content: {
        simulator: {
          scenario: `ACLS Team Leader: ${topic}`,
          patientInfo: {
            age: 35 + Math.floor(Math.random() * 40),
            gender: Math.random() > 0.5 ? 'male' : 'female',
            chiefComplaint: getCodePulseComplaint(topic),
            vitals: getCodePulseVitals(topic)
          },
          rhythmPattern: topic.toLowerCase().replace(/\s+/g, '_'),
          interactiveElements: [],
          caseImages: [
            ecgImages.simulator
          ]
        }
      },
      rewards: { xp: 150 + (dayNumber * 3), gems: 22 + dayNumber },
      unlocked: true,
      completed: false
    }
  ];
}

// =====================================================
// LEAD MASTER QUEST - 12-Lead Analysis Tasks
// =====================================================
function generateLeadMasterTasksForTopic(topic: string, dayNumber: number): TaskData[] {
  const difficulty = getDifficultyForDay(dayNumber);
  const baseId = `lead-master-day-${dayNumber}`;
  const ecgImages = leadMasterECGMapping[topic] || leadMasterECGMapping['Master 12-Lead'];
  
  return [
    {
      id: `${baseId}-task-1`,
      type: 'ecg-rhythm',
      title: `${topic}: 12-Lead Analysis`,
      description: `Analyze 12-lead ECG showing ${topic.toLowerCase()}`,
      difficulty,
      estimatedTime: 10,
      content: {
        ecgRhythm: {
          stripImage: ecgImages.primary,
          stripImageAlt: ecgImages.secondary,
          rhythmType: topic,
          annotations: getLeadMasterAnnotations(topic),
          questions: getLeadMasterQuestions(topic, difficulty)
        }
      },
      rewards: { xp: 120 + (dayNumber * 3), gems: 19 + dayNumber },
      unlocked: true,
      completed: false
    },
    {
      id: `${baseId}-task-2`,
      type: 'h5p-quiz',
      title: `${topic}: Interpretation Mastery`,
      description: `Master advanced interpretation of ${topic.toLowerCase()}`,
      difficulty,
      estimatedTime: 8,
      content: {
        quiz: {
          questions: getLeadMasterQuestions(topic, difficulty),
          passingScore: difficulty === 'expert' ? 95 : difficulty === 'hard' ? 90 : 85,
          timeLimit: 300
        }
      },
      rewards: { xp: 100 + (dayNumber * 3), gems: 16 + dayNumber },
      unlocked: true,
      completed: false
    },
    {
      id: `${baseId}-task-3`,
      type: 'image-hotspot',
      title: `${topic}: Lead-Specific Findings`,
      description: `Identify specific lead findings in ${topic.toLowerCase()}`,
      difficulty,
      estimatedTime: 9,
      content: {
        imageHotspot: {
          image: ecgImages.primary,
          imageAlt: ecgImages.secondary,
          hotspots: getLeadMasterHotspots(topic),
          instructions: `Identify lead-specific findings in ${topic.toLowerCase()}`
        }
      },
      rewards: { xp: 110 + (dayNumber * 3), gems: 17 + dayNumber },
      unlocked: true,
      completed: false
    },
    {
      id: `${baseId}-task-4`,
      type: 'drag-drop',
      title: `${topic}: Lead Territory Mapping`,
      description: `Map anatomical territories for ${topic.toLowerCase()}`,
      difficulty,
      estimatedTime: 11,
      content: {
        dragDrop: {
          items: getLeadMasterDragItems(topic),
          dropZones: getLeadMasterDropZones(topic),
          instructions: `Map ECG leads to anatomical territories for ${topic.toLowerCase()}`
        }
      },
      rewards: { xp: 130 + (dayNumber * 3), gems: 20 + dayNumber },
      unlocked: true,
      completed: false
    },
    {
      id: `${baseId}-task-5`,
      type: 'ecg-simulator',
      title: `${topic}: Clinical Correlation`,
      description: `Correlate 12-lead findings with clinical presentation`,
      difficulty,
      estimatedTime: 15,
      content: {
        simulator: {
          scenario: `12-Lead Clinical Case: ${topic}`,
          patientInfo: {
            age: 40 + Math.floor(Math.random() * 35),
            gender: Math.random() > 0.5 ? 'male' : 'female',
            chiefComplaint: getLeadMasterComplaint(topic),
            vitals: getLeadMasterVitals(topic)
          },
          rhythmPattern: topic.toLowerCase().replace(/\s+/g, '_'),
          interactiveElements: [],
          caseImages: [
            ecgImages.simulator
          ]
        }
      },
      rewards: { xp: 160 + (dayNumber * 4), gems: 25 + dayNumber },
      unlocked: true,
      completed: false
    }
  ];
}

// =====================================================
// RHYTHM HUNTER - Rare Arrhythmias Tasks
// =====================================================
function generateRhythmHunterTasksForTopic(topic: string, dayNumber: number): TaskData[] {
  const difficulty = getDifficultyForDay(dayNumber);
  const baseId = `rhythm-hunter-day-${dayNumber}`;
  const ecgImages = rhythmHunterECGMapping[topic] || rhythmHunterECGMapping['Ultimate Rhythm Challenge'];
  
  return [
    {
      id: `${baseId}-task-1`,
      type: 'ecg-rhythm',
      title: `${topic}: Rare Pattern Hunt`,
      description: `Hunt for subtle ${topic.toLowerCase()} patterns`,
      difficulty,
      estimatedTime: 12,
      content: {
        ecgRhythm: {
          stripImage: ecgImages.primary,
          stripImageAlt: ecgImages.secondary,
          rhythmType: topic,
          annotations: getRhythmHunterAnnotations(topic),
          questions: getRhythmHunterQuestions(topic, difficulty)
        }
      },
      rewards: { xp: 140 + (dayNumber * 4), gems: 22 + dayNumber },
      unlocked: true,
      completed: false
    },
    {
      id: `${baseId}-task-2`,
      type: 'h5p-quiz',
      title: `${topic}: Expert Knowledge Test`,
      description: `Test expert-level knowledge of ${topic.toLowerCase()}`,
      difficulty,
      estimatedTime: 10,
      content: {
        quiz: {
          questions: getRhythmHunterQuestions(topic, difficulty),
          passingScore: difficulty === 'expert' ? 98 : difficulty === 'hard' ? 95 : 90,
          timeLimit: 360
        }
      },
      rewards: { xp: 120 + (dayNumber * 4), gems: 19 + dayNumber },
      unlocked: true,
      completed: false
    },
    {
      id: `${baseId}-task-3`,
      type: 'image-hotspot',
      title: `${topic}: Subtle Feature Detection`,
      description: `Detect subtle features of ${topic.toLowerCase()}`,
      difficulty,
      estimatedTime: 11,
      content: {
        imageHotspot: {
          image: ecgImages.primary,
          imageAlt: ecgImages.secondary,
          hotspots: getRhythmHunterHotspots(topic),
          instructions: `Hunt for subtle diagnostic features of ${topic.toLowerCase()}`
        }
      },
      rewards: { xp: 130 + (dayNumber * 4), gems: 20 + dayNumber },
      unlocked: true,
      completed: false
    },
    {
      id: `${baseId}-task-4`,
      type: 'drag-drop',
      title: `${topic}: Advanced Classification`,
      description: `Classify advanced variants of ${topic.toLowerCase()}`,
      difficulty,
      estimatedTime: 13,
      content: {
        dragDrop: {
          items: getRhythmHunterDragItems(topic),
          dropZones: getRhythmHunterDropZones(topic),
          instructions: `Classify advanced variants and mechanisms of ${topic.toLowerCase()}`
        }
      },
      rewards: { xp: 150 + (dayNumber * 4), gems: 23 + dayNumber },
      unlocked: true,
      completed: false
    },
    {
      id: `${baseId}-task-5`,
      type: 'ecg-simulator',
      title: `${topic}: Complex Case Study`,
      description: `Solve complex case featuring ${topic.toLowerCase()}`,
      difficulty,
      estimatedTime: 18,
      content: {
        simulator: {
          scenario: `Complex Arrhythmia Case: ${topic}`,
          patientInfo: {
            age: 30 + Math.floor(Math.random() * 50),
            gender: Math.random() > 0.5 ? 'male' : 'female',
            chiefComplaint: getRhythmHunterComplaint(topic),
            vitals: getRhythmHunterVitals(topic)
          },
          rhythmPattern: topic.toLowerCase().replace(/\s+/g, '_'),
          interactiveElements: [],
          caseImages: [
            ecgImages.simulator
          ]
        }
      },
      rewards: { xp: 180 + (dayNumber * 5), gems: 28 + dayNumber },
      unlocked: true,
      completed: false
    }
  ];
}

function getDifficultyForDay(dayNumber: number): 'easy' | 'medium' | 'hard' | 'expert' {
  if (dayNumber <= 7) return 'easy';
  if (dayNumber <= 14) return 'medium';
  if (dayNumber <= 25) return 'hard';
  return 'expert';
}

// =====================================================
// SHOCK ZONE CHALLENGE - Event Specific Data
// =====================================================
function getShockZoneAnnotations(topic: string) {
  const shockZoneAnnotations: Record<string, any[]> = {
    'Ventricular Tachycardia Basics': [
      { time: 2.5, label: 'Wide QRS', type: 'morphology' },
      { time: 5.0, label: 'Rate >150', type: 'rate' }
    ],
    'Polymorphic VT': [
      { time: 1.5, label: 'Changing morphology', type: 'polymorphic' },
      { time: 4.0, label: 'Twisting points', type: 'torsade' }
    ],
    'Ventricular Fibrillation': [
      { time: 1.0, label: 'Chaotic rhythm', type: 'vfib' },
      { time: 3.0, label: 'No identifiable QRS', type: 'fibrillation' }
    ]
  };
  return shockZoneAnnotations[topic] || [];
}

function getShockZoneQuestions(topic: string, difficulty: string) {
  const shockZoneQuestions: Record<string, any[]> = {
    'Ventricular Tachycardia Basics': [
      {
        id: 'vtach_emergency_1',
        question: 'What is the immediate priority for unstable VTach?',
        options: ['IV access', 'Synchronized cardioversion', 'Amiodarone', 'CPR'],
        correct: 1,
        explanation: 'Unstable VTach requires immediate synchronized cardioversion.',
        difficulty: difficulty as any
      },
      {
        id: 'vtach_emergency_2',
        question: 'What energy level for initial cardioversion of VTach?',
        options: ['50J', '100J', '150J', '200J'],
        correct: 1,
        explanation: 'Initial synchronized cardioversion for VTach starts at 100J.',
        difficulty: difficulty as any
      }
    ],
    'Polymorphic VT': [
      {
        id: 'polymorphic_vt_1',
        question: 'Polymorphic VT with normal QT suggests what cause?',
        options: ['Long QT syndrome', 'Ischemia', 'Hypomagnesemia', 'Digitalis toxicity'],
        correct: 1,
        explanation: 'Polymorphic VT with normal QT often indicates acute ischemia.',
        difficulty: difficulty as any
      }
    ],
    'Ventricular Fibrillation': [
      {
        id: 'vfib_emergency_1',
        question: 'Initial treatment for ventricular fibrillation?',
        options: ['CPR', 'Defibrillation', 'Epinephrine', 'Intubation'],
        correct: 1,
        explanation: 'VFib requires immediate defibrillation as the priority.',
        difficulty: difficulty as any
      }
    ]
  };
  return shockZoneQuestions[topic] || [
    {
      id: 'default_shock_1',
      question: `What is the emergency management priority for ${topic}?`,
      options: ['Stabilization', 'Cardioversion', 'Medications', 'All of the above'],
      correct: 3,
      explanation: `${topic} requires comprehensive emergency management.`,
      difficulty: difficulty as any
    }
  ];
}

function getShockZoneHotspots(topic: string) {
  const shockZoneHotspots: Record<string, any[]> = {
    'Ventricular Tachycardia Basics': [
      { x: 25, y: 35, radius: 12, label: 'Wide QRS Complex', feedback: 'QRS >120ms indicates ventricular origin', isCorrect: true },
      { x: 75, y: 40, radius: 10, label: 'Regular Rhythm', feedback: 'Monomorphic VT has regular rhythm', isCorrect: true }
    ],
    'Polymorphic VT': [
      { x: 30, y: 30, radius: 15, label: 'Changing QRS morphology', feedback: 'Beat-to-beat morphology changes', isCorrect: true },
      { x: 70, y: 45, radius: 12, label: 'Twisting pattern', feedback: 'Characteristic twisting around baseline', isCorrect: true }
    ]
  };
  return shockZoneHotspots[topic] || [
    { x: 50, y: 40, radius: 15, label: 'Emergency Feature', feedback: `Critical finding in ${topic}`, isCorrect: true }
  ];
}

function getShockZoneDragItems(topic: string) {
  const shockZoneItems: Record<string, any[]> = {
    'Ventricular Tachycardia Basics': [
      { id: 'vtach_immediate', content: 'Synchronized Cardioversion', category: 'immediate', correctZone: 'immediate_zone' },
      { id: 'vtach_urgent', content: 'IV Amiodarone', category: 'urgent', correctZone: 'urgent_zone' },
      { id: 'vtach_supportive', content: 'O2 therapy', category: 'supportive', correctZone: 'supportive_zone' }
    ],
    'Ventricular Fibrillation': [
      { id: 'vfib_immediate', content: 'Defibrillation', category: 'immediate', correctZone: 'immediate_zone' },
      { id: 'vfib_immediate2', content: 'CPR', category: 'immediate', correctZone: 'immediate_zone' },
      { id: 'vfib_urgent', content: 'Epinephrine', category: 'urgent', correctZone: 'urgent_zone' }
    ]
  };
  return shockZoneItems[topic] || [
    { id: 'default1', content: 'Emergency intervention', category: 'immediate', correctZone: 'immediate_zone' }
  ];
}

function getShockZoneDropZones(topic: string) {
  return [
    { id: 'immediate_zone', label: 'Immediate (<1 min)', acceptsCategory: ['immediate'] },
    { id: 'urgent_zone', label: 'Urgent (1-5 min)', acceptsCategory: ['urgent'] },
    { id: 'supportive_zone', label: 'Supportive', acceptsCategory: ['supportive'] }
  ];
}

function getShockZoneComplaint(topic: string): string {
  const complaints: Record<string, string> = {
    'Ventricular Tachycardia Basics': 'Chest pain, palpitations, shortness of breath',
    'Polymorphic VT': 'Syncope, chest discomfort, weakness',
    'Ventricular Fibrillation': 'Cardiac arrest, unresponsive',
    'Asystole': 'Cardiac arrest, no pulse',
    'PEA (Pulseless Electrical Activity)': 'Cardiac arrest with electrical activity'
  };
  return complaints[topic] || 'Emergency cardiac symptoms';
}

function getShockZoneVitals(topic: string) {
  const emergencyVitals: Record<string, any> = {
    'Ventricular Tachycardia Basics': { hr: 180, bp: '80/60', rr: 28, spo2: 88, temp: 98.8 },
    'Ventricular Fibrillation': { hr: 0, bp: '0/0', rr: 0, spo2: 0, temp: 97.2 },
    'Asystole': { hr: 0, bp: '0/0', rr: 0, spo2: 0, temp: 96.8 }
  };
  return emergencyVitals[topic] || { hr: 120, bp: '90/70', rr: 24, spo2: 90, temp: 98.6 };
}

// =====================================================
// CODE PULSE PROTOCOL - Event Specific Data
// =====================================================
function getCodePulseAnnotations(topic: string) {
  const codePulseAnnotations: Record<string, any[]> = {
    'Basic ACLS Algorithm': [
      { time: 1.0, label: 'Check responsiveness', type: 'assessment' },
      { time: 3.0, label: 'Check pulse', type: 'circulation' }
    ],
    'VFib/VTach Protocol': [
      { time: 1.5, label: 'Shockable rhythm', type: 'rhythm' },
      { time: 4.0, label: 'Defibrillation indicated', type: 'intervention' }
    ]
  };
  return codePulseAnnotations[topic] || [];
}

function getCodePulseQuestions(topic: string, difficulty: string) {
  const codePulseQuestions: Record<string, any[]> = {
    'Basic ACLS Algorithm': [
      {
        id: 'acls_basic_1',
        question: 'What is the compression-to-ventilation ratio in adult CPR?',
        options: ['15:2', '30:2', '5:1', '15:1'],
        correct: 1,
        explanation: 'Adult CPR uses 30 compressions to 2 ventilations.',
        difficulty: difficulty as any
      }
    ],
    'VFib/VTach Protocol': [
      {
        id: 'vfib_protocol_1',
        question: 'How long should you continue CPR before checking rhythm?',
        options: ['1 minute', '2 minutes', '5 minutes', 'Until ROSC'],
        correct: 1,
        explanation: 'Continue CPR for 2 minutes before rhythm check.',
        difficulty: difficulty as any
      }
    ]
  };
  return codePulseQuestions[topic] || [
    {
      id: 'default_acls_1',
      question: `What is the key protocol step for ${topic}?`,
      options: ['Assessment', 'Intervention', 'Reassessment', 'All phases important'],
      correct: 3,
      explanation: `${topic} requires systematic approach through all phases.`,
      difficulty: difficulty as any
    }
  ];
}

function getCodePulseHotspots(topic: string) {
  return [
    { x: 30, y: 35, radius: 12, label: 'Decision Point', feedback: `Critical decision in ${topic}`, isCorrect: true },
    { x: 70, y: 45, radius: 10, label: 'Action Step', feedback: `Key action for ${topic}`, isCorrect: true }
  ];
}

function getCodePulseDragItems(topic: string) {
  const codePulseItems: Record<string, any[]> = {
    'Basic ACLS Algorithm': [
      { id: 'step1', content: 'Check responsiveness', category: 'assessment', correctZone: 'step1_zone' },
      { id: 'step2', content: 'Call for help', category: 'assessment', correctZone: 'step2_zone' },
      { id: 'step3', content: 'Check pulse', category: 'assessment', correctZone: 'step3_zone' }
    ]
  };
  return codePulseItems[topic] || [
    { id: 'default1', content: 'Protocol step', category: 'step', correctZone: 'step_zone' }
  ];
}

function getCodePulseDropZones(topic: string) {
  return [
    { id: 'step1_zone', label: 'Step 1', acceptsCategory: ['assessment'] },
    { id: 'step2_zone', label: 'Step 2', acceptsCategory: ['assessment'] },
    { id: 'step3_zone', label: 'Step 3', acceptsCategory: ['assessment'] }
  ];
}

function getCodePulseComplaint(topic: string): string {
  const complaints: Record<string, string> = {
    'Basic ACLS Algorithm': 'Unresponsive, no pulse',
    'VFib/VTach Protocol': 'Cardiac arrest with shockable rhythm',
    'PEA Management': 'Pulseless with electrical activity'
  };
  return complaints[topic] || 'ACLS scenario presentation';
}

function getCodePulseVitals(topic: string) {
  return { hr: 0, bp: '0/0', rr: 0, spo2: 0, temp: 97.0 };
}

// =====================================================
// LEAD MASTER QUEST - Event Specific Data
// =====================================================
function getLeadMasterAnnotations(topic: string) {
  const leadMasterAnnotations: Record<string, any[]> = {
    'Lead Placement Basics': [
      { time: 1.0, label: 'V1-V2 placement', type: 'precordial' },
      { time: 3.0, label: 'V3-V6 placement', type: 'lateral' }
    ],
    'Anterior STEMI Recognition': [
      { time: 2.0, label: 'ST elevation V2-V4', type: 'stemi' },
      { time: 4.5, label: 'Reciprocal changes', type: 'reciprocal' }
    ]
  };
  return leadMasterAnnotations[topic] || [];
}

function getLeadMasterQuestions(topic: string, difficulty: string) {
  const leadMasterQuestions: Record<string, any[]> = {
    'Lead Placement Basics': [
      {
        id: 'leads_placement_1',
        question: 'Which leads view the inferior wall?',
        options: ['I, aVL, V5-V6', 'II, III, aVF', 'V1-V4', 'V7-V9'],
        correct: 1,
        explanation: 'Leads II, III, and aVF view the inferior wall.',
        difficulty: difficulty as any
      }
    ],
    'Anterior STEMI Recognition': [
      {
        id: 'anterior_stemi_1',
        question: 'Which leads show anterior STEMI changes?',
        options: ['II, III, aVF', 'V1-V6', 'V2-V5', 'I, aVL'],
        correct: 2,
        explanation: 'Anterior STEMI typically shows changes in V2-V5.',
        difficulty: difficulty as any
      }
    ]
  };
  return leadMasterQuestions[topic] || [
    {
      id: 'default_lead_1',
      question: `What leads are most important for ${topic}?`,
      options: ['Limb leads', 'Precordial leads', 'All leads', 'Depends on case'],
      correct: 2,
      explanation: `${topic} requires comprehensive 12-lead analysis.`,
      difficulty: difficulty as any
    }
  ];
}

function getLeadMasterHotspots(topic: string) {
  return [
    { x: 25, y: 30, radius: 10, label: 'Lead finding', feedback: `Key finding in ${topic}`, isCorrect: true },
    { x: 75, y: 50, radius: 12, label: 'Territory change', feedback: `Territorial change in ${topic}`, isCorrect: true }
  ];
}

function getLeadMasterDragItems(topic: string) {
  const leadMasterItems: Record<string, any[]> = {
    'Lead Placement Basics': [
      { id: 'v1v2', content: 'V1-V2', category: 'septal', correctZone: 'septal_zone' },
      { id: 'v3v4', content: 'V3-V4', category: 'anterior', correctZone: 'anterior_zone' },
      { id: 'v5v6', content: 'V5-V6', category: 'lateral', correctZone: 'lateral_zone' }
    ]
  };
  return leadMasterItems[topic] || [
    { id: 'default1', content: 'Lead group', category: 'territory', correctZone: 'territory_zone' }
  ];
}

function getLeadMasterDropZones(topic: string) {
  return [
    { id: 'septal_zone', label: 'Septal Territory', acceptsCategory: ['septal'] },
    { id: 'anterior_zone', label: 'Anterior Territory', acceptsCategory: ['anterior'] },
    { id: 'lateral_zone', label: 'Lateral Territory', acceptsCategory: ['lateral'] }
  ];
}

function getLeadMasterComplaint(topic: string): string {
  const complaints: Record<string, string> = {
    'Anterior STEMI Recognition': 'Severe substernal chest pain, diaphoresis',
    'Inferior STEMI Patterns': 'Lower chest pain, nausea, bradycardia',
    'Bundle Branch Blocks': 'Chest discomfort, fatigue'
  };
  return complaints[topic] || 'Chest pain for 12-lead evaluation';
}

function getLeadMasterVitals(topic: string) {
  return { hr: 75, bp: '140/90', rr: 18, spo2: 96, temp: 98.4 };
}

// =====================================================
// RHYTHM HUNTER - Event Specific Data
// =====================================================
function getRhythmHunterAnnotations(topic: string) {
  const rhythmHunterAnnotations: Record<string, any[]> = {
    'Sinus Node Dysfunction': [
      { time: 2.0, label: 'Bradycardia <60', type: 'rate' },
      { time: 5.0, label: 'Pauses >3 sec', type: 'pause' }
    ],
    'Wandering Atrial Pacemaker': [
      { time: 1.5, label: 'Changing P morphology', type: 'p_wave' },
      { time: 4.0, label: 'Variable PR intervals', type: 'pr_variation' }
    ]
  };
  return rhythmHunterAnnotations[topic] || [];
}

function getRhythmHunterQuestions(topic: string, difficulty: string) {
  const rhythmHunterQuestions: Record<string, any[]> = {
    'Sinus Node Dysfunction': [
      {
        id: 'sinus_dysfunction_1',
        question: 'What is the hallmark of sick sinus syndrome?',
        options: ['Bradycardia only', 'Tachycardia only', 'Brady-tachy syndrome', 'AV block'],
        correct: 2,
        explanation: 'Sick sinus syndrome often presents as brady-tachy syndrome.',
        difficulty: difficulty as any
      }
    ],
    'Wandering Atrial Pacemaker': [
      {
        id: 'wap_1',
        question: 'How many different P wave morphologies define WAP?',
        options: ['At least 2', 'At least 3', 'At least 4', 'At least 5'],
        correct: 1,
        explanation: 'WAP requires at least 3 different P wave morphologies.',
        difficulty: difficulty as any
      }
    ]
  };
  return rhythmHunterQuestions[topic] || [
    {
      id: 'default_hunter_1',
      question: `What makes ${topic} challenging to diagnose?`,
      options: ['Subtle changes', 'Rare occurrence', 'Variable presentation', 'All of the above'],
      correct: 3,
      explanation: `${topic} can be challenging due to multiple factors.`,
      difficulty: difficulty as any
    }
  ];
}

function getRhythmHunterHotspots(topic: string) {
  return [
    { x: 20, y: 35, radius: 8, label: 'Subtle finding', feedback: `Subtle diagnostic clue in ${topic}`, isCorrect: true },
    { x: 80, y: 40, radius: 10, label: 'Key feature', feedback: `Pathognomonic feature of ${topic}`, isCorrect: true }
  ];
}

function getRhythmHunterDragItems(topic: string) {
  const rhythmHunterItems: Record<string, any[]> = {
    'Sinus Node Dysfunction': [
      { id: 'brady', content: 'Bradycardia', category: 'manifestation', correctZone: 'manifestation_zone' },
      { id: 'pause', content: 'Sinus pause', category: 'manifestation', correctZone: 'manifestation_zone' },
      { id: 'tachy', content: 'Atrial tachycardia', category: 'manifestation', correctZone: 'manifestation_zone' }
    ]
  };
  return rhythmHunterItems[topic] || [
    { id: 'default1', content: 'Rare feature', category: 'feature', correctZone: 'feature_zone' }
  ];
}

function getRhythmHunterDropZones(topic: string) {
  return [
    { id: 'manifestation_zone', label: 'Clinical Manifestations', acceptsCategory: ['manifestation'] },
    { id: 'mechanism_zone', label: 'Underlying Mechanism', acceptsCategory: ['mechanism'] },
    { id: 'treatment_zone', label: 'Treatment Options', acceptsCategory: ['treatment'] }
  ];
}

function getRhythmHunterComplaint(topic: string): string {
  const complaints: Record<string, string> = {
    'Sinus Node Dysfunction': 'Fatigue, weakness, intermittent dizziness',
    'Wandering Atrial Pacemaker': 'Palpitations, irregular heartbeat',
    'Multifocal Atrial Tachycardia': 'Shortness of breath, chest discomfort'
  };
  return complaints[topic] || 'Subtle cardiac symptoms requiring expert analysis';
}

function getRhythmHunterVitals(topic: string) {
  return { hr: 45, bp: '100/65', rr: 16, spo2: 94, temp: 98.2 };
}
