import { Lesson } from '@/types/learning';

export const optimizedLesson13: Lesson = {
  id: 'optimized-lesson-13',
  moduleId: 'module-2',
  title: 'Complete Sinus Tachycardia Mastery',
  description: 'Master sinus tachycardia with 6 comprehensive units: Definition & Criteria, Recognition & Measurement, Causes & Triggers, Clinical Assessment, Management Strategies, and Advanced Applications. Build expertise through progressive learning with 55 comprehensive slides.',
  order: 13,
  estimatedTime: 50,
  
  // Duolingo-style lesson structure
  content: {
    type: 'mixed',
    introduction: 'Welcome to your complete sinus tachycardia mastery journey! 🚀 You\'ll progress through 6 carefully designed units with 55 comprehensive slides that build upon each other, just like Duolingo lessons. Each unit ends with a quick quiz to ensure understanding before moving forward.',
    sections: [
      {
        id: 'tachycardia-overview',
        title: '🚀 Sinus Tachycardia Learning Journey',
        content: 'UNIT 1: Definition & Criteria → UNIT 2: Recognition & Measurement → UNIT 3: Causes & Triggers → UNIT 4: Clinical Assessment → UNIT 5: Management Strategies → UNIT 6: Advanced Applications',
        mediaType: 'image'
      }
    ],
    summary: 'Complete mastery of sinus tachycardia through systematic progressive learning with 6 comprehensive units covering all aspects of fast sinus rhythm identification, causes, and clinical management across 55 detailed slides.',
    
    // ===============================================
    // 📚 COMPREHENSIVE SLIDES (6 UNITS × ~9 SLIDES EACH = 55 SLIDES)
    // ===============================================
    slides: [
      
      // ===============================================
      // 🚀 UNIT 1: DEFINITION & CRITERIA (9 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🚀 Unit 1: Definition & Criteria',
        content: 'Begin your sinus tachycardia mastery! Learn the precise definition, diagnostic criteria, and how to differentiate normal from pathological fast heart rates.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/tachycardia_125bpm_3.png',
        imageAlt: 'Sinus tachycardia overview',
        hint: '🚀 Understanding fast heart rates!',
        highlights: [
          'precise definition',
          'diagnostic criteria',
          'fast heart rates'
        ]
      },
      
      {
        id: 'tachycardia-definition',
        title: 'Sinus Tachycardia Definition',
        content: 'DEFINITION: Sinus rhythm with heart rate >100 beats per minute. SA NODE: Still the primary pacemaker (maintains sinus rhythm). RHYTHM: Regular with normal P-QRS relationship. KEY: Fast rate but normal rhythm characteristics. DIFFERENTIATION: From other fast rhythms (SVT, atrial flutter).',
        type: 'accordion',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/tachycardia_130bpm.png',
        imageAlt: 'Sinus tachycardia definition and characteristics',
        hint: '📝 Rate >100 bpm with sinus rhythm!',
        accordionItems: [
          {
            title: '📖 Basic Definition',
            content: 'Sinus rhythm with heart rate >100 beats per minute. The SA node remains the primary pacemaker, maintaining all normal sinus rhythm characteristics except for the increased rate.'
          },
          {
            title: '🎯 Key Characteristics',
            content: 'Regular rhythm with normal P-QRS relationship. P waves are upright in lead II with consistent morphology. PR interval remains normal (0.12-0.20 seconds).'
          },
          {
            title: '🔍 Differentiation',
            content: 'Unlike SVT or atrial flutter, sinus tachycardia maintains all normal sinus characteristics. The only difference is the increased rate originating from accelerated SA node firing.'
          }
        ]
      },

      // 🎥 ECGkid Module 2: Heart Wall Mapping with ECG Leads - Essential Foundation
      {
        id: 'ecgkid-module-2-mapping',
        title: '🎥 ECGkid Module 2: Mapping Heart Walls with ECG Leads',
        content: 'Master essential ECG foundation! Learn to map heart walls with ECG leads - connecting anatomy with electrical signals. Critical skill for understanding where tachycardia originates and localizing any associated pathology.',
        type: 'youtube',
        layout: 'centered',
        backgroundColor: '#7c3aed',
        textColor: '#ffffff',
        animation: 'fade',
        youtubeId: '_WBj0P-vJMM',
        videoDuration: 303, // 5 minutes, 3 seconds
        minimumWatchTime: 240, // 4 minutes minimum - essential mapping skill
        requireFullWatch: true, // Foundation knowledge
        imageUrl: '/ecg/medical_accurate/normal_sinus_75bpm_1.png',
        imageAlt: 'ECGkid Module 2: Heart wall mapping with leads',
        hint: '🗺️ Master the ECG road map of the heart!',
        highlights: [
          'Heart wall to ECG lead correlation',
          'Anatomical localization skills',
          'Foundation for advanced interpretation',
          'ECGkid\'s systematic approach'
        ]
      },

      {
        id: 'diagnostic-criteria',
        title: 'Diagnostic Criteria',
        content: 'RATE: >100 beats per minute (adults). RHYTHM: Regular (R-R intervals equal). P WAVES: Present, upright in lead II, consistent morphology. PR INTERVAL: Normal (0.12-0.20 seconds), consistent. QRS: Narrow (<0.12 seconds), 1:1 P:QRS ratio. ORIGIN: SA node (maintains sinus characteristics).',
        type: 'tabs',
        layout: 'centered',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/tachycardia_135bpm_4.png',
        imageAlt: 'Diagnostic criteria for sinus tachycardia',
        hint: '✅ NSR criteria + rate >100!',
        tabs: [
          {
            title: '📈 Rate',
            content: 'Heart rate >100 beats per minute in adults. This is the primary distinguishing feature from normal sinus rhythm. The rate typically ranges from 100-180 bpm.'
          },
          {
            title: '🎵 Rhythm',
            content: 'Regular rhythm with equal R-R intervals. The regularity distinguishes it from sinus arrhythmia and other irregular rhythms.'
          },
          {
            title: '📊 Morphology',
            content: 'P waves present and upright in lead II with consistent morphology. PR interval normal (0.12-0.20 sec). QRS narrow (<0.12 sec) with 1:1 P:QRS ratio.'
          }
        ]
      },

      {
        id: 'rate-ranges',
        title: 'Rate Range Classifications',
        content: 'MILD: 100-120 bpm (often well-tolerated). MODERATE: 120-150 bpm (may cause symptoms). SEVERE: 150-180 bpm (usually symptomatic). EXTREME: >180 bpm (concerning, rule out SVT). PHYSIOLOGIC MAXIMUM: 220 - age (theoretical). AGE FACTORS: Higher normal rates in children and infants.',
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/tachycardia_140bpm.png',
        imageAlt: 'Sinus tachycardia rate classifications',
        hint: '📈 Severity based on rate ranges!',
        steps: [
          { 
            number: 1,
            title: 'Mild Tachycardia (100-120 bpm)',
            description: 'Often well-tolerated with minimal symptoms. May be physiologic response to exercise, stress, or fever.',
            icon: '🟢'
          },
          { 
            number: 2,
            title: 'Moderate Tachycardia (120-150 bpm)',
            description: 'May cause symptoms like palpitations, mild shortness of breath, or anxiety. Often requires evaluation of underlying cause.',
            icon: '🟡'
          },
          { 
            number: 3,
            title: 'Severe Tachycardia (150-180 bpm)',
            description: 'Usually symptomatic with chest discomfort, significant shortness of breath, or dizziness. Requires prompt evaluation.',
            icon: '🟠'
          },
          { 
            number: 4,
            title: 'Extreme Tachycardia (>180 bpm)',
            description: 'Concerning for hemodynamic compromise. Must rule out SVT or other arrhythmias. May require immediate intervention.',
            icon: '🔴'
          }
        ]
      },

      {
        id: 'age-specific-criteria',
        title: 'Age-Specific Criteria',
        content: 'NEWBORNS: >160 bpm considered tachycardia. INFANTS (1-12 months): >150 bpm threshold. TODDLERS (1-3 years): >130 bpm diagnostic. CHILDREN (3-12 years): >120 bpm abnormal. ADOLESCENTS (12-18 years): >110 bpm threshold. ADULTS (>18 years): >100 bpm standard definition.',
        type: 'flashcard',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#047857',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/tachycardia_145bpm_5.png',
        imageAlt: 'Age-specific tachycardia criteria',
        hint: '👥 Age affects tachycardia definition!',
        flashcardFront: 'Age-Specific Tachycardia Criteria',
        flashcardBack: 'Newborns: >160 bpm | Infants: >150 bpm | Toddlers: >130 bpm | Children: >120 bpm | Adolescents: >110 bpm | Adults: >100 bpm'
      },

      {
        id: 'physiologic-vs-pathologic',
        title: 'Physiologic vs Pathologic',
        content: 'PHYSIOLOGIC: Exercise, stress, fever, dehydration, normal response. APPROPRIATE: Body\'s normal adaptation to increased demands. REVERSIBLE: Resolves when trigger removed. PATHOLOGIC: Underlying disease, medications, cardiac conditions. INAPPROPRIATE: Excessive response or persistent elevation. INTERVENTION: May require specific treatment.',
        type: 'tabs',
        layout: 'centered',
        backgroundColor: '#fdf4ff',
        textColor: '#86198f',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/tachycardia_150bpm.png',
        imageAlt: 'Physiologic versus pathologic tachycardia',
        hint: '⚖️ Context determines significance!',
        tabs: [
          {
            title: '🏃 Physiologic',
            content: 'Normal response to exercise, stress, fever, or dehydration. Appropriate adaptation to increased metabolic demands. Resolves when the underlying trigger is removed.'
          },
          {
            title: '🚨 Pathologic',
            content: 'Result of underlying disease, medications, or cardiac conditions. Inappropriate or excessive response that may persist despite removal of obvious triggers.'
          },
          {
            title: '🎯 Clinical Decision',
            content: 'Context is crucial - same heart rate may be normal during exercise but pathologic at rest. Consider patient age, activity level, and clinical presentation.'
          }
        ]
      },

      {
        id: 'chronotropic-response',
        title: 'Normal Chronotropic Response',
        content: 'EXERCISE: Gradual rate increase with activity. STRESS: Sympathetic activation increases rate. FEVER: ~10 bpm increase per degree Celsius. EMOTIONS: Fight-or-flight response activation. MEDICATIONS: Stimulants, vasodilators, bronchodilators. RECOVERY: Gradual return to baseline after stimulus.',
        type: 'accordion',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#047857',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/tachycardia_155bpm.png',
        imageAlt: 'Normal chronotropic response patterns',
        hint: '💓 Heart responds to body\'s needs!',
        accordionItems: [
          {
            title: '🏃 Exercise Response',
            content: 'Gradual rate increase with physical activity. Normal physiologic adaptation to increased oxygen demand. Rate should return to baseline during recovery.'
          },
          {
            title: '😰 Stress & Emotions',
            content: 'Sympathetic nervous system activation increases heart rate. Fight-or-flight response is evolutionarily protective. Acute stress can significantly elevate rate.'
          },
          {
            title: '🌡️ Fever Response',
            content: 'Approximately 10 bpm increase per degree Celsius of fever. Helps maintain cardiac output during increased metabolic demands of illness.'
          },
          {
            title: '💊 Medication Effects',
            content: 'Stimulants, vasodilators, and bronchodilators can increase heart rate. Important to consider drug effects when evaluating tachycardia.'
          }
        ]
      },

      {
        id: 'measurement-precision',
        title: 'Precise Rate Measurement',
        content: 'LEAD SELECTION: Use longest continuous strip available. CALCULATION: Multiple methods for verification. DURATION: Measure over at least 6 seconds. ARTIFACT AVOIDANCE: Choose clear, noise-free segments. CONSISTENCY: Verify rate stability over time. DOCUMENTATION: Record measurement method and duration.',
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/tachycardia_155bpm_6.png',
        imageAlt: 'Precise heart rate measurement techniques',
        hint: '📏 Accuracy is crucial!',
        steps: [
          { 
            number: 1,
            title: 'Lead Selection',
            description: 'Use the longest continuous strip available. Lead II is often preferred for clear P waves and consistent rhythm display.',
            icon: '📊'
          },
          { 
            number: 2,
            title: 'Choose Clean Segments',
            description: 'Avoid artifacts, baseline wander, or noise. Select clear, well-defined QRS complexes for accurate counting.',
            icon: '🎯'
          },
          { 
            number: 3,
            title: 'Measure Duration',
            description: 'Count over at least 6 seconds (30 large boxes) for accuracy. Use 10-second strips when available for greater precision.',
            icon: '⏱️'
          },
          { 
            number: 4,
            title: 'Calculate & Verify',
            description: 'Use multiple calculation methods. Verify rate consistency over time. Document your measurement method and findings.',
            icon: '✅'
          }
        ]
      },

      {
        id: 'unit1-summary',
        title: 'Unit 1 Complete! 🚀',
        content: 'MASTERED: Sinus tachycardia definition, diagnostic criteria, rate classifications, age-specific thresholds, physiologic vs pathologic differentiation, chronotropic response, and precise measurement. READY: To learn recognition and measurement techniques. Unit 1 Quiz time!',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/tachycardia_165bpm_7.png',
        imageAlt: 'Unit 1 definition and criteria completed',
        hint: '🎉 Tachycardia definition mastery achieved!',
        highlights: [
          'definition',
          'diagnostic criteria', 
          'rate classifications',
          'age-specific thresholds',
          'physiologic vs pathologic',
          'measurement techniques'
        ]
      },

      // ===============================================
      // 📊 UNIT 2: RECOGNITION & MEASUREMENT (9 slides)
      // ===============================================
      {
        id: 'unit2-intro',
        title: '📊 Unit 2: Recognition & Measurement',
        content: 'Master tachycardia recognition! Learn advanced measurement techniques, systematic approaches, and how to differentiate sinus tachycardia from other fast rhythms.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#c2410c',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/tachycardia_105bpm.png',
        imageAlt: 'Recognition and measurement overview',
        hint: '📊 Advanced recognition skills!',
        highlights: [
          'advanced measurement techniques',
          'systematic approaches',
          'differentiate sinus tachycardia'
        ]
      },

      {
        id: 'systematic-approach',
        title: 'Systematic Recognition Approach',
        content: 'STEP 1: Calculate heart rate (>100 bpm). STEP 2: Assess rhythm regularity. STEP 3: Identify P waves (present, upright). STEP 4: Measure PR interval (normal). STEP 5: Check QRS duration (narrow). STEP 6: Confirm 1:1 P:QRS ratio. STEP 7: Evaluate clinical context. SYSTEMATIC: Never skip steps for accuracy.',
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#047857',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/tachycardia_105bpm_1.png',
        imageAlt: 'Systematic approach to tachycardia recognition',
        hint: '📋 Seven-step systematic method!',
        steps: [
          { 
            number: 1,
            title: 'Calculate Heart Rate',
            description: 'First, determine if rate >100 bpm using your preferred calculation method. This is the primary screening criterion.',
            icon: '📈'
          },
          { 
            number: 2,
            title: 'Assess Rhythm Regularity',
            description: 'Check R-R intervals for consistency. Sinus tachycardia should be regular with equal spacing between beats.',
            icon: '📏'
          },
          { 
            number: 3,
            title: 'Identify P Waves',
            description: 'Look for P waves that are present, upright in lead II, and have consistent morphology. This confirms sinus origin.',
            icon: '🔍'
          },
          { 
            number: 4,
            title: 'Measure PR Interval',
            description: 'Ensure PR interval is normal (0.12-0.20 seconds) and consistent. This rules out conduction abnormalities.',
            icon: '⏱️'
          },
          { 
            number: 5,
            title: 'Check QRS Duration',
            description: 'Verify QRS complexes are narrow (<0.12 seconds). Wide QRS suggests ventricular origin or conduction block.',
            icon: '📊'
          },
          { 
            number: 6,
            title: 'Confirm P:QRS Ratio',
            description: 'Ensure 1:1 relationship between P waves and QRS complexes. Each P wave should be followed by a QRS.',
            icon: '�'
          },
          { 
            number: 7,
            title: 'Evaluate Clinical Context',
            description: 'Consider patient symptoms, activity level, medications, and underlying conditions to determine significance.',
            icon: '🏥'
          }
        ]
      },

      {
        id: 'rate-calculation-methods',
        title: 'Advanced Rate Calculation Methods',
        content: 'LARGE BOX METHOD: 300 ÷ number of large boxes (quick estimate). SMALL BOX METHOD: 1500 ÷ number of small boxes (precise). SIX-SECOND METHOD: Count QRS × 10 (practical). FIFTEEN-SECOND METHOD: Count QRS × 4 (more accurate). R-R INTERVAL: 60 ÷ R-R interval in seconds. CONTINUOUS MONITORING: Real-time rate display.',
        type: 'tabs',
        layout: 'centered',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/tachycardia_110bpm.png',
        imageAlt: 'Advanced rate calculation methods',
        hint: '🧮 Multiple calculation approaches!',
        tabs: [
          {
            title: '📦 Large Box Method',
            content: '300 ÷ number of large boxes between R waves. Quick estimation method ideal for regular rhythms. Example: 2.5 large boxes = 300 ÷ 2.5 = 120 bpm.'
          },
          {
            title: '📏 Small Box Method',
            content: '1500 ÷ number of small boxes between R waves. More precise calculation. Example: 13 small boxes = 1500 ÷ 13 = 115 bpm.'
          },
          {
            title: '⏰ Six-Second Method',
            content: 'Count QRS complexes in 6 seconds, multiply by 10. Practical for irregular rhythms. Works well in clinical settings with rhythm strips.'
          },
          {
            title: '🎯 R-R Interval Method',
            content: 'Measure R-R interval in seconds, calculate 60 ÷ R-R interval. Most accurate for regular rhythms. Use calipers for precise measurement.'
          }
        ]
      },

      {
        id: 'ecg-characteristics',
        title: 'ECG Characteristics Analysis',
        content: 'RHYTHM: Regular R-R intervals (may have slight variation). P WAVES: Normal morphology, upright in lead II, may be hard to see at very fast rates. PR INTERVAL: 0.12-0.20 seconds, consistent. QRS: <0.12 seconds, narrow complex. RATE: >100 bpm but usually <180 bpm. T WAVES: Normal, may merge with P waves at high rates.',
        type: 'accordion',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/tachycardia_115bpm.png',
        imageAlt: 'ECG characteristics of sinus tachycardia',
        hint: '📈 Normal sinus pattern, fast rate!',
        accordionItems: [
          {
            title: '🎵 Rhythm Analysis',
            content: 'Regular R-R intervals with minimal variation. The rhythm maintains the same consistent spacing between beats, distinguishing it from irregular arrhythmias.'
          },
          {
            title: '📊 P Wave Characteristics',
            content: 'Normal P wave morphology, upright in lead II. At very fast rates, P waves may be difficult to see as they can merge with preceding T waves.'
          },
          {
            title: '⏱️ PR Interval & QRS',
            content: 'PR interval remains normal (0.12-0.20 seconds) and consistent. QRS complexes are narrow (<0.12 seconds), confirming supraventricular origin.'
          },
          {
            title: '📈 Rate & T Wave Changes',
            content: 'Rate >100 bpm but typically <180 bpm. T waves are usually normal but may merge with P waves at very high rates, making analysis challenging.'
          }
        ]
      },

      {
        id: 'p-wave-identification',
        title: 'P Wave Identification at High Rates',
        content: 'CHALLENGE: P waves may merge with preceding T waves. TECHNIQUE: Use multiple leads for better visualization. LEAD SELECTION: Lead II best for P wave assessment. MAGNIFICATION: Increase ECG gain if P waves small. TIMING: Look for consistent P-QRS relationship. DIFFERENTIATION: Distinguish from SVT which may have hidden P waves.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/p-wave-identification.png',
        imageAlt: 'P wave identification at high heart rates',
        hint: '🔍 P waves can hide at high rates!'
      },

      {
        id: 'differential-diagnosis',
        title: 'Differential Diagnosis',
        content: 'SUPRAVENTRICULAR TACHYCARDIA: Usually >150 bpm, often no visible P waves. ATRIAL FLUTTER: Saw-tooth pattern, fixed conduction ratios. ATRIAL FIBRILLATION: Irregularly irregular, no P waves. VENTRICULAR TACHYCARDIA: Wide QRS, AV dissociation. MULTIFOCAL ATRIAL TACHYCARDIA: Variable P wave morphology. SINUS TACHYCARDIA: Visible P waves, gradual onset/offset.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf4ff',
        textColor: '#86198f',
        animation: 'fade',
        imageUrl: '/lessonimages/differential-diagnosis-tachy.png',
        imageAlt: 'Differential diagnosis of fast rhythms',
        hint: '🔄 Rule out other fast rhythms!'
      },

      {
        id: 'technology-applications',
        title: 'Technology & Monitoring',
        content: 'CONTINUOUS MONITORING: Real-time rate trending. AUTOMATED ANALYSIS: Verify computer interpretations. ALARM SETTINGS: Appropriate upper rate limits. TELEMETRY: Remote monitoring capabilities. HOLTER MONITORING: 24-48 hour rate documentation. MOBILE ECG: Smartphone-based rhythm detection.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#047857',
        animation: 'fade',
        imageUrl: '/lessonimages/technology-monitoring.png',
        imageAlt: 'Technology applications in tachycardia monitoring',
        hint: '💻 Technology enhances recognition!'
      },

      {
        id: 'common-pitfalls',
        title: 'Common Recognition Pitfalls',
        content: 'ARTIFACT: Motion or electrical interference. P WAVE CONFUSION: Missing P waves merged with T waves. RATE CALCULATION ERROR: Incorrect measurement technique. SVT MISDIAGNOSIS: Assuming all fast rhythms are sinus tachycardia. CONTEXT IGNORANCE: Not considering clinical situation. STABILITY ASSUMPTION: Not verifying rate consistency.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: '/lessonimages/common-pitfalls-tachy.png',
        imageAlt: 'Common pitfalls in tachycardia recognition',
        hint: '⚠️ Avoid these common mistakes!'
      },

      {
        id: 'unit2-summary',
        title: 'Unit 2 Complete! 📊',
        content: 'MASTERED: Systematic recognition approach, advanced rate calculation methods, ECG characteristics, P wave identification, differential diagnosis, technology applications, and common pitfalls. READY: To learn causes and triggers. Unit 2 Quiz time!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#c2410c',
        animation: 'fade',
        imageUrl: '/lessonimages/unit2-complete-tachy.png',
        imageAlt: 'Unit 2 recognition and measurement completed',
        hint: '🎉 Recognition mastery achieved!'
      },

      // ===============================================
      // 🔥 UNIT 3: CAUSES & TRIGGERS (9 slides)
      // ===============================================
      {
        id: 'unit3-intro',
        title: '🔥 Unit 3: Causes & Triggers',
        content: 'Discover what causes sinus tachycardia! Learn to differentiate physiologic from pathologic causes, identify common triggers, and understand when to be concerned.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/causes-triggers-overview.png',
        imageAlt: 'Causes and triggers overview',
        hint: '🔥 Understanding the why behind tachycardia!'
      },

      {
        id: 'physiologic-causes',
        title: 'Physiologic Causes (Normal)',
        content: 'EXERCISE: Physical activity increases oxygen demand. STRESS/ANXIETY: Emotional stress activates sympathetic nervous system. FEVER: Each degree Celsius increases rate ~10 bpm. DEHYDRATION: Reduced blood volume triggers compensatory tachycardia. PREGNANCY: Increased cardiac output demands. CAFFEINE: Stimulant effect on heart rate.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#047857',
        animation: 'fade',
        imageUrl: '/lessonimages/physiologic-causes.png',
        imageAlt: 'Normal physiologic causes of tachycardia',
        hint: '✅ Normal body responses!'
      },

      {
        id: 'pathologic-causes',
        title: 'Pathologic Causes (Disease)',
        content: 'HYPERTHYROIDISM: Excess thyroid hormone increases metabolic rate. ANEMIA: Reduced oxygen-carrying capacity. HEART FAILURE: Compensatory mechanism for poor function. INFECTION/SEPSIS: Systemic inflammatory response. HYPOXIA: Low oxygen triggers increased rate. SHOCK: Blood loss, cardiogenic, or distributive.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: '/lessonimages/pathologic-causes.png',
        imageAlt: 'Disease-related causes of tachycardia',
        hint: '⚠️ Disease processes requiring treatment!'
      },

      {
        id: 'medication-causes',
        title: 'Medication-Induced Causes',
        content: 'SYMPATHOMIMETICS: Epinephrine, norepinephrine, dopamine. BRONCHODILATORS: Albuterol, theophylline. STIMULANTS: Amphetamines, methylphenidate. VASODILATORS: Nifedipine, hydralazine. ANTIDEPRESSANTS: Tricyclics, some SSRIs. WITHDRAWAL: Beta-blocker or alcohol withdrawal.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf4ff',
        textColor: '#86198f',
        animation: 'fade',
        imageUrl: '/lessonimages/medication-causes.png',
        imageAlt: 'Medication-induced tachycardia causes',
        hint: '💊 Drug-related tachycardia!'
      },

      {
        id: 'substance-triggers',
        title: 'Substance & Lifestyle Triggers',
        content: 'CAFFEINE: Coffee, tea, energy drinks, chocolate. NICOTINE: Smoking or vaping tobacco products. ALCOHOL: Acute intoxication or withdrawal. RECREATIONAL DRUGS: Cocaine, amphetamines, MDMA. ENERGY SUPPLEMENTS: High-dose caffeine, taurine. EXCESSIVE EXERCISE: Overtraining syndrome.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#047857',
        animation: 'fade',
        imageUrl: '/lessonimages/substance-triggers.png',
        imageAlt: 'Substance and lifestyle triggers',
        hint: '🥤 Lifestyle factors matter!'
      },

      {
        id: 'environmental-factors',
        title: 'Environmental & Situational Factors',
        content: 'HEAT EXPOSURE: Hot weather, saunas, hot baths. ALTITUDE: High altitude reduces oxygen availability. PAIN: Acute or chronic pain responses. EMOTIONAL STRESS: Anxiety, panic, fear responses. SLEEP DEPRIVATION: Chronic lack of adequate rest. HYPOGLYCEMIA: Low blood sugar episodes.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/environmental-factors.png',
        imageAlt: 'Environmental and situational factors',
        hint: '🌡️ Environment affects heart rate!'
      },

      {
        id: 'hormonal-causes',
        title: 'Hormonal & Metabolic Causes',
        content: 'HYPERTHYROIDISM: Most common endocrine cause. PHEOCHROMOCYTOMA: Rare catecholamine-secreting tumor. MENOPAUSE: Hormonal fluctuations affect heart rate. DIABETES: Diabetic ketoacidosis can cause tachycardia. ADRENAL INSUFFICIENCY: Compensation for low cortisol. ELECTROLYTE IMBALANCES: Hypokalemia, hypomagnesemia.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/hormonal-causes.png',
        imageAlt: 'Hormonal and metabolic causes',
        hint: '⚗️ Hormones control heart rate!'
      },

      {
        id: 'age-related-considerations',
        title: 'Age-Related Considerations',
        content: 'PEDIATRIC: Higher baseline rates, fever more common cause. ADOLESCENT: Anxiety, stress, energy drinks, sports. YOUNG ADULTS: Lifestyle factors, substance use, anxiety disorders. MIDDLE-AGED: Cardiovascular disease emergence, medications. ELDERLY: Multiple comorbidities, polypharmacy, dehydration prone. PREGNANCY: Physiologic changes increase baseline rate.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#c2410c',
        animation: 'fade',
        imageUrl: '/lessonimages/age-considerations.png',
        imageAlt: 'Age-related tachycardia considerations',
        hint: '👥 Age influences causes and significance!'
      },

      {
        id: 'unit3-summary',
        title: 'Unit 3 Complete! 🔥',
        content: 'MASTERED: Physiologic vs pathologic causes, medication triggers, substance factors, environmental influences, hormonal causes, and age considerations. READY: To learn clinical assessment. Unit 3 Quiz time!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/unit3-complete-tachy.png',
        imageAlt: 'Unit 3 causes and triggers completed',
        hint: '🎉 Causes mastery achieved!'
      },

      // ===============================================
      // 🩺 UNIT 4: CLINICAL ASSESSMENT (9 slides)
      // ===============================================
      {
        id: 'unit4-intro',
        title: '🩺 Unit 4: Clinical Assessment',
        content: 'Master clinical evaluation! Learn systematic assessment, symptom recognition, hemodynamic evaluation, and when tachycardia becomes clinically significant.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#047857',
        animation: 'fade',
        imageUrl: '/lessonimages/clinical-assessment-overview.png',
        imageAlt: 'Clinical assessment overview',
        hint: '🩺 Comprehensive patient evaluation!'
      },

      {
        id: 'symptom-assessment',
        title: 'Symptom Assessment',
        content: 'PALPITATIONS: Awareness of fast/irregular heartbeat. CHEST DISCOMFORT: Pressure, tightness, or pain. SHORTNESS OF BREATH: Dyspnea on exertion or at rest. DIZZINESS/LIGHTHEADEDNESS: Reduced cerebral perfusion. FATIGUE: Decreased exercise tolerance. SYNCOPE: Loss of consciousness (concerning sign).',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/symptom-assessment.png',
        imageAlt: 'Tachycardia symptom assessment',
        hint: '💭 What patients experience!'
      },

      {
        id: 'hemodynamic-evaluation',
        title: 'Hemodynamic Evaluation',
        content: 'BLOOD PRESSURE: Normal, hypotensive, or hypertensive. PERFUSION: Capillary refill, skin color, temperature. MENTAL STATUS: Alert, confused, or altered consciousness. URINE OUTPUT: Indicator of organ perfusion. PULSE QUALITY: Strong, weak, or thready. JUGULAR VENOUS PRESSURE: Signs of heart failure.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/hemodynamic-evaluation.png',
        imageAlt: 'Hemodynamic status evaluation',
        hint: '🩸 How well is the body perfused?'
      },

      {
        id: 'severity-classification',
        title: 'Severity Classification',
        content: 'STABLE: Normal BP, good perfusion, minimal symptoms. UNSTABLE: Hypotension, poor perfusion, severe symptoms. HEMODYNAMICALLY SIGNIFICANT: Compromised cardiac output. LIFE-THREATENING: Shock, pulmonary edema, cardiac arrest risk. COMPENSATED: Stable despite underlying pathology. DECOMPENSATED: Failing compensatory mechanisms.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: '/lessonimages/severity-classification.png',
        imageAlt: 'Tachycardia severity classification',
        hint: '⚖️ Stable versus unstable!'
      },

      {
        id: 'vital-signs-patterns',
        title: 'Vital Signs Patterns',
        content: 'COMPENSATED SHOCK: Tachycardia with normal BP initially. DECOMPENSATED SHOCK: Tachycardia with hypotension. FEVER PATTERN: Rate increases with temperature. ANXIETY PATTERN: Tachycardia with hypertension. DEHYDRATION: Tachycardia with orthostatic changes. PAIN RESPONSE: Acute tachycardia with stimulus.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/vital-signs-patterns.png',
        imageAlt: 'Vital signs patterns in tachycardia',
        hint: '📊 Patterns tell the story!'
      },

      {
        id: 'physical-examination',
        title: 'Physical Examination Findings',
        content: 'CARDIAC: Murmurs, gallops, irregular rhythms. PULMONARY: Crackles, wheezes, reduced air entry. EXTREMITIES: Edema, cyanosis, clubbing. NECK: Jugular venous distention, thyroid enlargement. NEUROLOGIC: Tremor, hyperreflexia, confusion. SKIN: Diaphoresis, pallor, warmth, dryness.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf4ff',
        textColor: '#86198f',
        animation: 'fade',
        imageUrl: '/lessonimages/physical-examination.png',
        imageAlt: 'Physical examination in tachycardia',
        hint: '👁️ What you see and hear matters!'
      },

      {
        id: 'diagnostic-workup',
        title: 'Diagnostic Workup',
        content: 'ECG: Rhythm confirmation and morphology analysis. LABS: CBC, electrolytes, thyroid function, cardiac enzymes. ECHOCARDIOGRAM: Cardiac function and structure. CHEST X-RAY: Pulmonary findings, heart size. TOXICOLOGY: If substance abuse suspected. HOLTER MONITOR: For intermittent symptoms.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#047857',
        animation: 'fade',
        imageUrl: '/lessonimages/diagnostic-workup.png',
        imageAlt: 'Diagnostic workup for tachycardia',
        hint: '🔬 Tests guide treatment!'
      },

      {
        id: 'risk-stratification',
        title: 'Risk Stratification',
        content: 'LOW RISK: Young, healthy, obvious trigger, stable vitals. MODERATE RISK: Comorbidities, persistent symptoms, unclear cause. HIGH RISK: Hemodynamic compromise, cardiac disease, elderly. VERY HIGH RISK: Shock, chest pain, altered mental status. IMMEDIATE: Requires urgent intervention. URGENT: Needs prompt evaluation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#c2410c',
        animation: 'fade',
        imageUrl: '/lessonimages/risk-stratification.png',
        imageAlt: 'Risk stratification in tachycardia',
        hint: '⚠️ Risk determines urgency!'
      },

      {
        id: 'unit4-summary',
        title: 'Unit 4 Complete! 🩺',
        content: 'MASTERED: Symptom assessment, hemodynamic evaluation, severity classification, vital signs patterns, physical examination, diagnostic workup, and risk stratification. READY: To learn management strategies. Unit 4 Quiz time!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#047857',
        animation: 'fade',
        imageUrl: '/lessonimages/unit4-complete-tachy.png',
        imageAlt: 'Unit 4 clinical assessment completed',
        hint: '🎉 Clinical assessment mastery achieved!'
      },

      // ===============================================
      // 💊 UNIT 5: MANAGEMENT STRATEGIES (9 slides)
      // ===============================================
      {
        id: 'unit5-intro',
        title: '💊 Unit 5: Management Strategies',
        content: 'Master tachycardia management! Learn treatment priorities, when to treat the rate versus the cause, medications, non-pharmacologic approaches, and emergency interventions.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/management-overview.png',
        imageAlt: 'Management strategies overview',
        hint: '💊 Effective treatment approaches!'
      },

      {
        id: 'treatment-priorities',
        title: 'Treatment Priorities',
        content: 'FIRST: Ensure hemodynamic stability. SECOND: Identify and treat underlying causes. THIRD: Symptom management if needed. EMERGENCY: Immediate intervention if unstable. SUPPORTIVE: Maintain adequate perfusion. MONITORING: Continuous assessment of response.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/treatment-priorities.png',
        imageAlt: 'Treatment priority framework',
        hint: '🎯 ABC approach - stability first!'
      },

      {
        id: 'cause-specific-treatment',
        title: 'Cause-Specific Treatment',
        content: 'FEVER: Antipyretics, cooling measures. DEHYDRATION: IV fluid resuscitation. HYPERTHYROIDISM: Beta-blockers, antithyroid medications. ANEMIA: Blood transfusion, iron supplementation. ANXIETY: Anxiolytics, counseling. MEDICATIONS: Discontinue or adjust causative drugs.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/cause-specific-treatment.png',
        imageAlt: 'Cause-specific treatment approaches',
        hint: '🎯 Treat the root cause!'
      },

      {
        id: 'rate-control-medications',
        title: 'Rate Control Medications',
        content: 'BETA-BLOCKERS: Metoprolol, propranolol (reduce sympathetic stimulation). CALCIUM CHANNEL BLOCKERS: Diltiazem, verapamil (use cautiously). DIGOXIN: Limited role, mainly in heart failure. IVABRADINE: Specific sinus node inhibitor. CONTRAINDICATIONS: Avoid in certain conditions. MONITORING: Watch for bradycardia, hypotension.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: '/lessonimages/rate-control-meds.png',
        imageAlt: 'Rate control medications',
        hint: '💊 Medications to slow heart rate!'
      },

      {
        id: 'non-pharmacologic-approaches',
        title: 'Non-Pharmacologic Approaches',
        content: 'VAGAL MANEUVERS: Valsalva, carotid massage (limited effectiveness). RELAXATION: Deep breathing, meditation. LIFESTYLE: Reduce caffeine, stress management. EXERCISE: Gradual conditioning program. HYDRATION: Adequate fluid intake. SLEEP: Ensure adequate rest.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#047857',
        animation: 'fade',
        imageUrl: '/lessonimages/non-pharmacologic.png',
        imageAlt: 'Non-pharmacologic management approaches',
        hint: '🧘 Natural approaches to management!'
      },

      {
        id: 'emergency-interventions',
        title: 'Emergency Interventions',
        content: 'UNSTABLE PATIENT: Immediate cardioversion consideration. IV ACCESS: Large bore for medications/fluids. OXYGEN: If hypoxic or in distress. MONITORING: Continuous ECG and vital signs. EXPERT CONSULTATION: Cardiology if uncertain. PREPARE: For potential deterioration.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf4ff',
        textColor: '#86198f',
        animation: 'fade',
        imageUrl: '/lessonimages/emergency-interventions.png',
        imageAlt: 'Emergency intervention strategies',
        hint: '🚨 When immediate action is needed!'
      },

      {
        id: 'monitoring-response',
        title: 'Monitoring Treatment Response',
        content: 'HEART RATE: Target reduction to normal range. SYMPTOMS: Improvement in palpitations, dyspnea. HEMODYNAMICS: Blood pressure, perfusion status. FUNCTIONAL: Exercise tolerance, quality of life. SIDE EFFECTS: Monitor for medication adverse effects. FOLLOW-UP: Regular reassessment and adjustment.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#c2410c',
        animation: 'fade',
        imageUrl: '/lessonimages/monitoring-response.png',
        imageAlt: 'Monitoring treatment response',
        hint: '📈 Track improvement over time!'
      },

      {
        id: 'disposition-decisions',
        title: 'Disposition Decisions',
        content: 'DISCHARGE HOME: Stable, known cause, good follow-up. OBSERVATION: Unclear cause, mild symptoms, needs monitoring. ADMISSION: Unstable, serious underlying condition. ICU: Hemodynamic compromise, multiple organ dysfunction. FOLLOW-UP: Cardiology, primary care as appropriate. EDUCATION: Patient instruction on when to return.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/disposition-decisions.png',
        imageAlt: 'Patient disposition decisions',
        hint: '🏥 Where should the patient go?'
      },

      {
        id: 'unit5-summary',
        title: 'Unit 5 Complete! 💊',
        content: 'MASTERED: Treatment priorities, cause-specific treatment, rate control medications, non-pharmacologic approaches, emergency interventions, monitoring response, and disposition decisions. READY: For advanced applications. Unit 5 Quiz time!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/unit5-complete-tachy.png',
        imageAlt: 'Unit 5 management strategies completed',
        hint: '🎉 Management mastery achieved!'
      },

      // ===============================================
      // 🏆 UNIT 6: ADVANCED APPLICATIONS (9 slides)
      // ===============================================
      {
        id: 'unit6-intro',
        title: '🏆 Unit 6: Advanced Applications',
        content: 'Master advanced concepts! Learn special populations, complex scenarios, technology applications, prevention strategies, and become a tachycardia expert.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf4ff',
        textColor: '#86198f',
        animation: 'fade',
        imageUrl: '/lessonimages/advanced-applications-overview.png',
        imageAlt: 'Advanced applications overview',
        hint: '🏆 Expert-level knowledge!'
      },

      {
        id: 'special-populations',
        title: 'Special Populations',
        content: 'PREGNANCY: Physiologic changes, medication safety. ELDERLY: Comorbidities, polypharmacy, frailty. PEDIATRIC: Age-specific normal values, growth considerations. ATHLETES: Trained heart adaptations, performance impact. CHRONIC DISEASE: Heart failure, COPD, diabetes interactions. CRITICAL ILLNESS: ICU considerations, multiple organ effects.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/special-populations.png',
        imageAlt: 'Special population considerations',
        hint: '👥 Special groups need special care!'
      },

      {
        id: 'complex-scenarios',
        title: 'Complex Clinical Scenarios',
        content: 'MULTIFACTORIAL: Multiple contributing causes simultaneously. POST-OPERATIVE: Surgical stress, anesthesia effects, pain. SEPSIS: Systemic infection with hemodynamic instability. TRAUMA: Blood loss, shock, pain responses. DRUG OVERDOSE: Sympathomimetic toxicity. WITHDRAWAL: Alcohol or drug withdrawal syndromes.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/complex-scenarios.png',
        imageAlt: 'Complex clinical scenarios',
        hint: '🧩 Real world is complicated!'
      },

      {
        id: 'technology-integration',
        title: 'Technology Integration',
        content: 'WEARABLE DEVICES: Smartwatches, fitness trackers. REMOTE MONITORING: Home telemetry systems. ARTIFICIAL INTELLIGENCE: Pattern recognition, prediction algorithms. MOBILE APPS: Patient education, symptom tracking. TELEMEDICINE: Remote consultation capabilities. BIG DATA: Population health insights.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#047857',
        animation: 'fade',
        imageUrl: '/lessonimages/technology-integration.png',
        imageAlt: 'Technology integration in care',
        hint: '📱 Technology enhances care!'
      },

      {
        id: 'prevention-strategies',
        title: 'Prevention Strategies',
        content: 'LIFESTYLE MODIFICATION: Diet, exercise, stress management. TRIGGER AVOIDANCE: Identify and eliminate precipitants. MEDICATION OPTIMIZATION: Review and adjust medications. CONDITION MANAGEMENT: Optimal treatment of underlying diseases. EDUCATION: Patient and family understanding. SCREENING: Early detection of risk factors.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: '/lessonimages/prevention-strategies.png',
        imageAlt: 'Prevention strategy approaches',
        hint: '🛡️ Prevention is better than cure!'
      },

      {
        id: 'quality-metrics',
        title: 'Quality Metrics & Outcomes',
        content: 'TIME TO RECOGNITION: Rapid identification of tachycardia. APPROPRIATE TREATMENT: Evidence-based management. PATIENT SATISFACTION: Experience and education quality. CLINICAL OUTCOMES: Symptom resolution, complication rates. RESOURCE UTILIZATION: Efficient care delivery. SAFETY MEASURES: Adverse event prevention.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/quality-metrics.png',
        imageAlt: 'Quality metrics and outcomes',
        hint: '📊 Measure what matters!'
      },

      {
        id: 'research-advances',
        title: 'Research & Future Directions',
        content: 'PRECISION MEDICINE: Personalized treatment approaches. GENETIC FACTORS: Hereditary influences on tachycardia. NEW THERAPIES: Novel medications and interventions. BIOMARKERS: Blood tests for risk stratification. POPULATION STUDIES: Large-scale outcome research. GUIDELINES: Evidence-based recommendations.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf4ff',
        textColor: '#86198f',
        animation: 'fade',
        imageUrl: '/lessonimages/research-advances.png',
        imageAlt: 'Research and future directions',
        hint: '🔬 Science advances care!'
      },

      {
        id: 'expert-consultation',
        title: 'When to Consult Experts',
        content: 'CARDIOLOGY: Unexplained persistent tachycardia, structural heart disease. ENDOCRINOLOGY: Suspected hormonal causes (hyperthyroidism). TOXICOLOGY: Drug overdose or withdrawal syndromes. CRITICAL CARE: Hemodynamically unstable patients. PEDIATRIC CARDIOLOGY: Children with concerning tachycardia. ELECTROPHYSIOLOGY: Complex rhythm disorders.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#c2410c',
        animation: 'fade',
        imageUrl: '/lessonimages/expert-consultation.png',
        imageAlt: 'Expert consultation guidelines',
        hint: '🤝 Know when to ask for help!'
      },

      {
        id: 'unit6-summary',
        title: 'Unit 6 Complete! 🏆',
        content: 'MASTERED: Special populations, complex scenarios, technology integration, prevention strategies, quality metrics, research advances, and expert consultation. READY: For final comprehensive assessment. You are now a sinus tachycardia expert!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf4ff',
        textColor: '#86198f',
        animation: 'fade',
        imageUrl: '/lessonimages/unit6-complete-tachy.png',
        imageAlt: 'Unit 6 advanced applications completed',
        hint: '🎉 Expert-level mastery achieved!'
      }
    ],
    
    keyPoints: [
      "Sinus tachycardia is sinus rhythm with heart rate >100 bpm",
      "Differentiate physiologic from pathologic causes through clinical context",
      "Systematic recognition prevents confusion with other fast rhythms",
      "Treatment focuses on underlying causes rather than rate control alone",
      "P waves may be difficult to identify at very high rates",
      "Hemodynamic stability and symptoms guide management decisions"
    ],
    
    resources: [
      {
        title: "Tachycardia Assessment Protocol",
        url: "/resources/tachycardia-protocol",
        type: "reference",
        description: "Systematic approach to tachycardia evaluation"
      },
      {
        title: "Rate Calculation Mastery Tool",
        url: "/tools/rate-calculator-advanced",
        type: "tool", 
        description: "Advanced rate calculation practice"
      },
      {
        title: "Differential Diagnosis Guide",
        url: "/resources/tachycardia-differential",
        type: "reference",
        description: "Distinguishing sinus tachycardia from other fast rhythms"
      }
    ]
  },
  
  // ===============================================
  // 🎯 DUOLINGO-STYLE TASKS: TACHYCARDIA MASTERY
  // ===============================================
  tasks: [
    // Unit 1 Quiz: Definition & Criteria
    {
      id: 'unit1-quiz-definition',
      type: 'quiz',
      xp: 10,
      content: {
        question: 'What heart rate defines sinus tachycardia in adults?',
        options: [
          'Greater than 90 bpm',
          'Greater than 100 bpm', 
          'Greater than 110 bpm',
          'Greater than 120 bpm'
        ],
        correctAnswer: 1,
        explanation: 'Sinus tachycardia is defined as sinus rhythm with heart rate greater than 100 beats per minute in adults.',
        hint: 'Think about the upper limit of normal adult resting heart rate',
        completionMessage: 'Perfect! 🚀 Tachycardia definition mastered! +10 XP!',
        retryMessage: 'Remember: sinus tachycardia is >100 bpm with normal sinus rhythm characteristics.'
      }
    },
    {
      id: 'unit2-quiz-recognition',
      type: 'quiz',
      xp: 10,
      content: {
        question: 'What makes P wave identification challenging in sinus tachycardia?',
        options: [
          'P waves become inverted',
          'P waves may merge with preceding T waves',
          'P waves disappear completely',
          'P waves change morphology'
        ],
        correctAnswer: 1,
        explanation: 'At high heart rates, P waves may merge with or hide within preceding T waves, making identification challenging.',
        hint: 'Think about what happens when the heart beats very fast',
        completionMessage: 'Excellent! 📊 Recognition skills mastered! +10 XP!',
        retryMessage: 'Remember: fast rates can cause P waves to merge with T waves.'
      }
    },
    {
      id: 'unit3-quiz-causes',
      type: 'quiz',
      xp: 15,
      content: {
        question: 'Which is the most common physiologic cause of sinus tachycardia?',
        options: [
          'Hyperthyroidism',
          'Exercise and physical activity',
          'Medication side effects',
          'Heart failure'
        ],
        correctAnswer: 1,
        explanation: 'Exercise and physical activity are the most common physiologic causes, representing normal adaptive responses to increased oxygen demand.',
        hint: 'Think about normal daily activities that increase heart rate',
        completionMessage: 'Outstanding! 🔥 Causes mastered! +15 XP!',
        retryMessage: 'Remember: exercise is the most common normal cause of sinus tachycardia.'
      }
    },
    {
      id: 'unit4-quiz-assessment',
      type: 'quiz',
      xp: 15,
      content: {
        question: 'Which symptom is most concerning in a patient with sinus tachycardia?',
        options: [
          'Mild palpitations',
          'Chest pain with diaphoresis',
          'Occasional fatigue',
          'Slight shortness of breath'
        ],
        correctAnswer: 1,
        explanation: 'Chest pain with diaphoresis suggests possible cardiac ischemia, which is the most concerning presentation requiring urgent evaluation.',
        hint: 'Consider which symptom suggests heart muscle problems',
        completionMessage: 'Perfect assessment! 🩺 Clinical evaluation mastered! +15 XP!',
        retryMessage: 'Remember: chest pain with sweating suggests ischemia requiring urgent attention.'
      }
    },
    {
      id: 'unit5-quiz-management',
      type: 'quiz',
      xp: 15,
      content: {
        question: 'What is the first priority in managing sinus tachycardia?',
        options: [
          'Immediate rate control with beta-blockers',
          'Identify and treat underlying causes',
          'Cardioversion',
          'Immediate ICU admission'
        ],
        correctAnswer: 1,
        explanation: 'The first priority is identifying and treating underlying causes (fever, dehydration, hyperthyroidism) rather than simply controlling the rate.',
        hint: 'Think about treating the cause versus the symptom',
        completionMessage: 'Excellent! 💊 Management principles mastered! +15 XP!',
        retryMessage: 'Remember: treat underlying causes first, rate control is usually secondary.'
      }
    },
    {
      id: 'unit6-quiz-applications',
      type: 'quiz',
      xp: 15,
      content: {
        question: 'In the emergency department, which sinus tachycardia scenario requires most urgent attention?',
        options: [
          'Anxious patient with rate 110 bpm',
          'Febrile patient with rate 120 bpm',
          'Hypotensive patient with rate 140 bpm and altered mental status',
          'Post-exercise patient with rate 130 bpm'
        ],
        correctAnswer: 2,
        explanation: 'Hypotension with tachycardia and altered mental status suggests hemodynamic compromise requiring immediate intervention.',
        hint: 'Look for signs of poor perfusion and shock',
        completionMessage: 'Perfect clinical judgment! 🏆 Advanced applications mastered! +15 XP!',
        retryMessage: 'Remember: hypotension with altered mental status indicates hemodynamic compromise.'
      }
    },
    {
      id: 'final-tachycardia-assessment',
      type: 'final-assessment',
      xp: 25,
      content: {
        question: 'A 32-year-old teacher presents with palpitations and anxiety. ECG shows regular rhythm, rate 125 bpm, upright P waves in lead II, PR interval 0.14 seconds, narrow QRS. Vital signs: BP 140/90, temp 99.2°F. She reports drinking 6 cups of coffee today due to work stress. What is the most appropriate management?',
        options: [
          'Immediate beta-blocker administration',
          'Caffeine reduction, stress management, and reassurance',
          'Emergency cardioversion',
          'Immediate cardiology consultation'
        ],
        correctAnswer: 1,
        explanation: 'This appears to be sinus tachycardia due to caffeine and stress. Management should focus on reducing triggers (caffeine), stress management, and patient reassurance rather than medications.',
        completionMessage: 'MASTERY ACHIEVED! 🏆 Complete tachycardia expertise unlocked! +25 XP!',
        retryMessage: 'Consider the clinical context: young, healthy patient with clear triggers (caffeine, stress) and stable vital signs.',
        passingScore: 80,
        timeLimit: 3
      }
    }
  ],
  
  completed: false,
  attempts: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
