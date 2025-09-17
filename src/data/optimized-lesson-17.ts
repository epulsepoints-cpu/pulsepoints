import { Lesson } from '@/types/learning';

export const optimizedLesson17: Lesson = {
  id: 'lesson-2-7-optimized',
  moduleId: 'module-2',
  title: "Complete Wandering Atrial Pacemaker Mastery",
  description: "Master wandering atrial pacemaker through 6 focused learning units: Foundation, Mechanisms, Recognition, Characteristics, Differential Diagnosis, and Clinical Significance - each with interactive content and detailed P wave analysis",
  order: 7,
  estimatedTime: 30,
  content: {
    type: 'mixed',
    introduction: "🎯 Welcome to Wandering Atrial Pacemaker Mastery! Learn this benign but important rhythm through 6 progressive units with detailed P wave analysis, morphology studies, and clinical correlation. Master the art of recognizing shifting atrial pacemakers.",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your Learning Journey",
        content: "UNIT 1: Foundation → UNIT 2: Mechanisms → UNIT 3: Recognition → UNIT 4: Characteristics → UNIT 5: Differential Diagnosis → UNIT 6: Clinical Significance",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // ===============================================
      // 🎯 UNIT 1: WANDERING PACEMAKER FOUNDATION (6 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: Wandering Pacemaker Foundation',
        content: 'Begin your journey to master wandering atrial pacemaker! Learn what it is, why it happens, and why it\'s usually benign. This foundation will help you confidently recognize this common rhythm variant.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/wap-overview.jpg',
        imageAlt: 'Wandering atrial pacemaker learning journey overview',
        hint: '🎯 The wandering pacemaker adventure begins!',
        highlights: ['wandering atrial pacemaker', 'benign', 'confidently recognize', 'rhythm variant'],
        audio: {
          narrationUrl: 'audio/module2/lesson17/unit1-intro.mp3',
          autoPlay: false
        }
      },

      {
        id: 'wap-definition',
        title: 'What is Wandering Atrial Pacemaker?',
        content: 'Wandering atrial pacemaker (WAP) occurs when the dominant pacemaker shifts gradually between different sites in the atria. Instead of the sinus node being the only boss, different atrial locations take turns leading the rhythm. This creates varying P wave shapes on the ECG.',
        type: 'flashcard',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/wap-definition.jpg',
        imageAlt: 'ECG showing varying P wave morphologies in wandering atrial pacemaker',
        hint: '👥 Multiple atrial sites taking turns being the leader!',
        flashcardFront: '🎯 What happens in Wandering Atrial Pacemaker?',
        flashcardBack: '🔄 The dominant pacemaker shifts gradually between different atrial sites! Instead of just the sinus node leading, different atrial locations take turns controlling the rhythm, creating varying P wave shapes on ECG.'},

      {
        id: 'pacemaker-hierarchy',
        title: 'Understanding Pacemaker Hierarchy',
        content: 'Learn how the normal cardiac pacemaker hierarchy becomes more democratic in WAP.',
        type: 'accordion',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/pacemaker-hierarchy.jpg',
        imageAlt: 'Diagram showing atrial pacemaker hierarchy and sites',
        hint: '🏆 Democracy in the atria - everyone gets a turn!',
        accordionItems: [
          {
            title: '👑 Normal Hierarchy',
            content: 'Sinus node is the fastest (60-100 bpm) and dominates. High atrial sites are backup (usually slower). Low atrial sites and AV junction are emergency backups only.'
          },
          {
            title: '🔄 WAP Hierarchy',
            content: 'Hierarchy becomes more equal - sites compete for control. Sinus node doesn\'t always dominate the rhythm. Different atrial sites take turns being the leader.'
          },
          {
            title: '🎭 The Result',
            content: 'Shifting leadership between atrial sites. Gradual changes in P wave morphology. Rate usually stays within normal range (60-100 bpm).'
          }
        ]},

      {
        id: 'why-it-happens',
        title: 'Why Does the Pacemaker Wander?',
        content: 'Understanding the physiologic triggers that cause pacemaker wandering.',
        type: 'tabs',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/why-happens.jpg',
        imageAlt: 'Physiologic mechanisms causing wandering atrial pacemaker',
        hint: '🌙 Often happens during rest and relaxation!',
        tabs: [
          {
            title: '😴 Vagal Triggers',
            content: 'Increased vagal tone during rest, sleep, or relaxation. Enhanced parasympathetic activity. Common in athletes with high baseline vagal tone.',
            icon: '😴'
          },
          {
            title: '⚡ Enhanced Automaticity',
            content: 'Atrial sites become more active and competitive. Multiple sites develop similar firing rates. Normal variation in cellular automaticity.',
            icon: '⚡'
          },
          {
            title: '💊 External Factors',
            content: 'Medications (digoxin, beta-blockers). Age-related conduction changes. Sometimes electrolyte variations. Usually benign causes.',
            icon: '💊'
          }
        ]},

      {
        id: 'wap-vs-wat',
        title: 'WAP vs WAT: Critical Rate Distinction',
        content: 'The heart rate determines whether wandering pacemaker is benign or concerning.',
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/wap-vs-wat.jpg',
        imageAlt: 'Comparison between WAP and WAT showing rate differences',
        hint: '📊 Rate determines whether it\'s benign or concerning!',
        steps: [
          "📊 Check the heart rate first - this is the key discriminator",
          "😊 WAP: Rate <100 bpm - usually benign, no treatment needed",
          "⚠️ WAT: Rate >100 bpm - potentially pathologic, requires evaluation",
          "🎯 Same P wave changes, different clinical significance based on rate",
          "✅ Remember: Rate makes ALL the difference in management!"
        ]},

      {
        id: 'common-populations',
        title: 'Who Shows WAP?',
        content: 'WAP appears in specific populations and situations.',
        type: 'accordion',
        layout: 'centered',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/populations.jpg',
        imageAlt: 'Demographics showing who commonly exhibits WAP',
        hint: '👶👴 Young athletes and relaxed elderly!',
        accordionItems: [
          {
            title: '🏃‍♂️ Young Athletes',
            content: 'High vagal tone from conditioning. Occurs during rest between activities. Sign of excellent cardiac conditioning. Usually completely benign.'
          },
          {
            title: '😴 Sleep & Rest States',
            content: 'Enhanced parasympathetic activity during sleep. Relaxation allows pacemaker competition. Often disappears when awake and active.'
          },
          {
            title: '👴 Elderly Patients',
            content: 'Age-related conduction system changes. Multiple atrial sites become competitive. Usually benign but may need monitoring.'
          },
          {
            title: '💊 Medication Effects',
            content: 'Digoxin can enhance atrial automaticity. Beta-blockers may suppress sinus node. Usually reversible with dose adjustment.'
          }
        ]},

      // ==================== UNIT 1 QUIZ: FOUNDATION ====================
      {
        id: 'unit1-foundation-quiz',
        title: '🎯 Unit 1 Quiz: WAP Foundation',
        content: "Test your knowledge of wandering atrial pacemaker fundamentals!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: 'images/module2/lesson17/foundation-quiz.jpg',
        imageAlt: 'Wandering atrial pacemaker foundation quiz',
        hint: '🧠 Test your Unit 1 knowledge!',
        question: "What distinguishes wandering atrial pacemaker (WAP) from wandering atrial tachycardia (WAT)?",
        options: [
          "P wave morphology differences",
          "Heart rate: WAP <100 bpm, WAT >100 bpm",
          "QRS width variations",
          "PR interval patterns"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! The key distinction is heart rate: WAP occurs at rates <100 bpm and is benign, while WAT occurs at rates >100 bpm and may require evaluation.",
        audio: {
          narrationUrl: 'audio/module2/lesson17/unit1-quiz.mp3',
          autoPlay: false
        }
      },

      // ================================================
      // 🎯 UNIT 2: ELECTROPHYSIOLOGIC MECHANISMS (7 slides)
      // ================================================
      {
        id: 'unit2-intro',
        title: '🎯 Unit 2: Electrophysiologic Mechanisms',
        content: 'Dive into the fascinating science of HOW the pacemaker wanders! Understand automaticity, competing pacemakers, and the delicate balance that creates this rhythm.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/mechanisms-overview.jpg',
        imageAlt: 'Electrophysiologic mechanisms overview',
        hint: '⚡ The electrical democracy of the heart!'},

      {
        id: 'automaticity-principles',
        title: 'Automaticity and Competing Pacemakers',
        content: 'Each atrial site has intrinsic automaticity: Sinus node: 60-100 bpm, High atrial sites: 60-80 bpm, Low atrial sites: 50-70 bpm, AV junction: 40-60 bpm. When rates are similar, sites compete for dominance, creating the wandering pattern.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/automaticity.jpg',
        imageAlt: 'Diagram showing automaticity rates of different cardiac sites',
        hint: '🏃‍♂️ When everyone runs at similar speeds, anyone can lead!'},

      {
        id: 'autonomic-influences',
        title: 'Autonomic Nervous System Effects',
        content: 'Vagal stimulation: Suppresses sinus node slightly, Enhances lower atrial automaticity, Promotes wandering pattern. Sympathetic stimulation: Speeds up sinus node, Suppresses lower sites, Reduces wandering. WAP often occurs during high vagal states (rest, sleep).',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/autonomic-effects.jpg',
        imageAlt: 'Autonomic nervous system effects on pacemaker wandering',
        hint: '😴 Vagal tone = more wandering!'},

      {
        id: 'atrial-anatomy',
        title: 'Atrial Anatomy and Pacemaker Sites',
        content: 'Key pacemaker locations: Sinus node (high right atrium), Crista terminalis pacemakers, Coronary sinus ostium, Low right atrial sites, Left atrial sites (uncommon). Each has distinct P wave morphology based on activation sequence.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/atrial-anatomy.jpg',
        imageAlt: 'Anatomical diagram of atrial pacemaker sites',
        hint: '🗺️ Location determines P wave shape!'},

      {
        id: 'p-wave-morphology-genesis',
        title: 'How P Wave Shape Changes',
        content: 'P wave morphology depends on: Pacemaker site location, Atrial activation sequence, Vector of depolarization, Lead placement perspective. As pacemaker moves: Activation sequence changes, P wave axis shifts, Morphology gradually transforms.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/p-wave-genesis.jpg',
        imageAlt: 'How different pacemaker sites create different P wave morphologies',
        hint: '🎨 Different starting points = different P wave pictures!'},

      {
        id: 'overdrive-suppression',
        title: 'Overdrive Suppression Dynamics',
        content: 'Normal: Fastest pacemaker (sinus) suppresses slower sites. In WAP: Suppression is incomplete or variable, Multiple sites escape suppression, Sites take turns being dominant, Creates the wandering pattern. It\'s a breakdown of normal pacemaker hierarchy!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/overdrive-suppression.jpg',
        imageAlt: 'Overdrive suppression mechanisms in wandering pacemaker',
        hint: '🎭 When the conductor loses control of the orchestra!'},

      {
        id: 'cycle-length-variability',
        title: 'Cycle Length and Rate Variability',
        content: 'WAP characteristics: Slight rate variations as pacemaker shifts, Gradual transitions (not abrupt), Cycle lengths usually within normal range, May have brief pauses during transitions, Overall rhythm remains stable. The key is gradual change, not sudden jumps.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#854d0e',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/cycle-variability.jpg',
        imageAlt: 'Cycle length variability patterns in WAP',
        hint: '🌊 Smooth transitions like gentle waves!'},

      // ==================== UNIT 2 QUIZ: MECHANISMS ====================
      {
        id: 'unit2-mechanisms-quiz',
        title: '🎯 Unit 2 Quiz: Mechanisms',
        content: "Test your understanding of WAP mechanisms!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: 'images/module2/lesson17/mechanisms-quiz.jpg',
        imageAlt: 'Mechanisms quiz',
        hint: '🧠 Test your Unit 2 knowledge!',
        question: "What autonomic condition most commonly promotes wandering atrial pacemaker?",
        options: [
          "High sympathetic tone",
          "High vagal tone",
          "Complete autonomic blockade",
          "Alternating sympathetic and vagal stimulation"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! High vagal tone (often during rest or sleep) slightly suppresses the sinus node while enhancing automaticity of other atrial sites, promoting the wandering pattern."},

      // ===============================================
      // 🎯 UNIT 3: ECG RECOGNITION MASTERY (8 slides)
      // ===============================================
      {
        id: 'unit3-intro',
        title: '🎯 Unit 3: ECG Recognition Mastery',
        content: 'Become an expert at recognizing wandering atrial pacemaker! Master P wave analysis, morphology assessment, and the key features that distinguish WAP from other rhythms.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/recognition-overview.jpg',
        imageAlt: 'ECG recognition mastery overview',
        hint: '👁️ Train your eye to catch the wandering!',
        highlights: ['expert', 'P wave analysis', 'morphology assessment', 'key features', 'distinguish']},

      {
        id: 'systematic-recognition-approach',
        title: '🔍 Systematic Recognition Approach',
        content: "Follow this step-by-step method to never miss wandering atrial pacemaker!",
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'slide',
        imageUrl: 'images/ecg/medical_accurate/normal_sinus_75bpm_2.png',
        imageAlt: 'ECG demonstrating systematic analysis approach',
        hint: '🎯 Systematic analysis prevents missed diagnoses!',
        steps: [
          "📏 Check heart rate: Must be <100 bpm for WAP diagnosis",
          "👁️ Examine P wave morphology: Look for at least 3 different shapes",
          "📐 Measure PR intervals: Should remain constant for each morphology",
          "🔄 Assess rhythm: Should be irregular but not chaotic",
          "✅ Confirm gradual changes: P waves should transition smoothly"
        ]},

      {
        id: 'p-wave-morphology-analysis',
        title: 'P Wave Morphology Mastery',
        content: 'Master the art of P wave analysis in wandering atrial pacemaker.',
        type: 'tabs',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/p-wave-analysis.jpg',
        imageAlt: 'Detailed P wave morphology analysis in WAP',
        hint: '🔍 Count the different P wave shapes!',
        tabs: [
          {
            title: '🎯 Key Features',
            content: 'At least 3 different P wave shapes required for diagnosis. Gradual morphology transitions between beats. All P waves usually upright in lead II.',
            icon: '🎯'
          },
          {
            title: '📐 Morphology Changes',
            content: 'Variable axis creates different shapes. Amplitude changes as pacemaker shifts. Shape transitions are smooth, not abrupt.',
            icon: '📐'
          },
          {
            title: '✅ Recognition Tips',
            content: 'Look for "morphing" patterns. No sudden jumps in P wave shape. May see intermediate transitional forms.',
            icon: '✅'
          }
        ]},

      {
        id: 'lead-specific-changes',
        title: 'Multi-Lead Analysis Strategy',
        content: 'Different ECG leads reveal different aspects of wandering atrial pacemaker.',
        type: 'accordion',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/lead-changes.jpg',
        imageAlt: 'Lead-specific P wave changes in different ECG leads',
        hint: '📊 Different leads show different perspectives!',
        accordionItems: [
          {
            title: '📍 Lead II Analysis',
            content: 'Best lead for P wave analysis. Shows varying heights and shapes. Usually all P waves remain upright. Most dramatic changes visible here.'
          },
          {
            title: '🔄 Lead aVR Changes',
            content: 'May show positive to negative P wave changes. Indicates shift in atrial activation direction. Helps confirm wandering pattern.'
          },
          {
            title: '💡 Lead V1 Insights',
            content: 'Shows different P wave morphologies. Helps identify location of atrial focus. Biphasic patterns may change components.'
          },
          {
            title: '🎯 Multi-Lead Strategy',
            content: 'Compare multiple leads simultaneously. Look for consistent pattern across leads. Confirms true wandering vs artifact.'
          }
        ]},

      {
        id: 'pr-interval-variations',
        title: 'PR Interval Assessment',
        content: 'Understanding how PR intervals change with pacemaker location.',
        type: 'flashcard',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/pr-variations.jpg',
        imageAlt: 'PR interval variations corresponding to different pacemaker sites',
        hint: '📏 Location affects conduction time!',
        flashcardFront: '🎯 How do PR intervals change in WAP?',
        flashcardBack: '📏 PR intervals vary slightly based on pacemaker location! Closer atrial sites = shorter PR intervals. Farther atrial sites = longer PR intervals. All complexes should still conduct normally (no dropped beats).'},

      {
        id: 'rate-assessment',
        title: 'Rate Assessment Techniques',
        content: 'Rate characteristics: Overall rate 60-100 bpm (for WAP), Slight variations as pacemaker shifts, No dramatic rate changes, Calculate rate over longer strips, Look for gradual changes, Document range of rates observed.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/rate-assessment.jpg',
        imageAlt: 'Techniques for assessing heart rate in WAP',
        hint: '📊 Rate stays normal, just varies slightly!'},

      {
        id: 'transition-patterns',
        title: 'Transition Pattern Recognition',
        content: 'Characteristic transitions: Smooth morphology changes, No sudden jumps in shape, Gradual axis shifts, Progressive amplitude changes, May see intermediate forms, Pattern may repeat cyclically. Think "morphing" not "switching"!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/transitions.jpg',
        imageAlt: 'Smooth transition patterns between different P wave morphologies',
        hint: '🌊 Smooth morphing like a wave!'},

      {
        id: 'measurement-techniques',
        title: 'Precise Measurement Techniques',
        content: 'Essential measurements: P wave duration (should be normal), P wave amplitude variations, PR interval range, R-R interval consistency, P wave axis assessment, Morphology categorization. Document all variations systematically.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#854d0e',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/measurements.jpg',
        imageAlt: 'Systematic measurement techniques for WAP analysis',
        hint: '📐 Measure everything systematically!'},

      {
        id: 'common-mistakes',
        title: 'Common Recognition Mistakes',
        content: 'Avoid these errors: Confusing with atrial flutter (P waves too organized), Missing subtle changes (look carefully!), Calling it atrial fibrillation (P waves are present), Ignoring rate differences (WAP vs WAT), Not counting all morphologies, Missing gradual transitions.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/common-mistakes.jpg',
        imageAlt: 'Common mistakes in WAP recognition and how to avoid them',
        hint: '⚠️ Don\'t let these trip you up!'},

      // ==================== UNIT 3 QUIZ: RECOGNITION ====================
      {
        id: 'unit3-recognition-quiz',
        title: '🎯 Unit 3 Quiz: ECG Recognition',
        content: "Test your P wave recognition skills!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: 'images/module2/lesson17/recognition-quiz.jpg',
        imageAlt: 'ECG recognition quiz',
        hint: '🧠 Test your Unit 3 knowledge!',
        question: "What is the minimum number of different P wave morphologies required to diagnose wandering atrial pacemaker?",
        options: [
          "2 different morphologies",
          "3 different morphologies",
          "4 different morphologies",
          "5 different morphologies"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! A minimum of 3 different P wave morphologies is required to diagnose wandering atrial pacemaker, indicating at least 3 different atrial pacemaker sites."},

      // ================================================
      // 🎯 UNIT 4: KEY CHARACTERISTICS (6 slides)
      // ================================================
      {
        id: 'unit4-intro',
        title: '🎯 Unit 4: Key Characteristics',
        content: 'Master the specific characteristics that define wandering atrial pacemaker! Learn the detailed criteria, normal variants, and special features.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/characteristics-overview.jpg',
        imageAlt: 'Key characteristics overview',
        hint: '📋 Know the criteria inside and out!'},

      {
        id: 'diagnostic-criteria',
        title: 'Formal Diagnostic Criteria',
        content: 'Required criteria: Heart rate 60-100 bpm, At least 3 different P wave morphologies, Gradual morphology transitions, Normal QRS complexes, P:QRS ratio 1:1, No significant pauses. Optional: Variable PR intervals, Cyclical pattern, Association with vagal stimulation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/diagnostic-criteria.jpg',
        imageAlt: 'Formal diagnostic criteria for wandering atrial pacemaker',
        hint: '✅ All criteria must be met!'},

      {
        id: 'morphology-patterns',
        title: 'P Wave Morphology Patterns',
        content: 'Typical patterns: Upright to biphasic transitions, Amplitude variations (tall to short), Width changes (narrow to wide), Axis shifts (positive to negative), Intermediate morphologies, Smooth progressive changes. Each reflects different atrial activation sequences.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/morphology-patterns.jpg',
        imageAlt: 'Different P wave morphology patterns in WAP',
        hint: '🎨 Infinite variations, but smooth transitions!'},

      {
        id: 'timing-characteristics',
        title: 'Timing and Cycle Characteristics',
        content: 'Timing features: Regular to slightly irregular rhythm, R-R intervals mostly consistent, No significant pauses, Gradual rate changes only, Cycle length variations <10%, Normal AV conduction throughout. The rhythm stays remarkably stable.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/timing-characteristics.jpg',
        imageAlt: 'Timing and cycle characteristics of WAP',
        hint: '⏱️ Stable timing with gentle variations!'},

      {
        id: 'contextual-features',
        title: 'Contextual Features',
        content: 'When to expect WAP: During rest or sleep, In young athletes, With increased vagal tone, During recovery from exercise, With certain medications, In elderly patients. Context often helps confirm the diagnosis and explains the mechanism.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/contextual-features.jpg',
        imageAlt: 'Clinical contexts where WAP commonly occurs',
        hint: '🌅 Context is key to understanding!'},

      {
        id: 'variants-and-subtypes',
        title: 'Variants and Subtypes',
        content: 'Common variants: Intermittent WAP (comes and goes), Persistent WAP (continuous), Respiratory-related WAP (with breathing), Positional WAP (with position changes), Medication-induced WAP, Age-related WAP. All are typically benign.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/variants.jpg',
        imageAlt: 'Different variants and subtypes of WAP',
        hint: '🌈 Many variations, all usually normal!'},

      // ==================== UNIT 4 QUIZ: CHARACTERISTICS ====================
      {
        id: 'unit4-characteristics-quiz',
        title: '🎯 Unit 4 Quiz: Characteristics',
        content: "Test your knowledge of WAP characteristics!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: 'images/module2/lesson17/characteristics-quiz.jpg',
        imageAlt: 'Characteristics quiz',
        hint: '🧠 Test your Unit 4 knowledge!',
        question: "What is the typical heart rate range for wandering atrial pacemaker?",
        options: [
          "40-60 bpm",
          "60-100 bpm",
          "100-150 bpm",
          "150-200 bpm"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Wandering atrial pacemaker typically occurs at rates of 60-100 bpm. If the rate exceeds 100 bpm with the same morphology changes, it becomes wandering atrial tachycardia (WAT)."},

      // ================================================
      // 🎯 UNIT 5: DIFFERENTIAL DIAGNOSIS (7 slides)
      // ================================================
      {
        id: 'unit5-intro',
        title: '🎯 Unit 5: Differential Diagnosis',
        content: 'Master distinguishing WAP from other atrial rhythms! Learn the key differences that separate this benign finding from pathologic arrhythmias.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/differential-overview.jpg',
        imageAlt: 'Differential diagnosis overview',
        hint: '🔍 Know what it\'s NOT!',
        highlights: ['distinguishing', 'key differences', 'benign finding', 'pathologic arrhythmias']},

      {
        id: 'differential-diagnosis-matrix',
        title: '🔍 Comprehensive Differential Diagnosis',
        content: 'Master the key differentiating features between WAP and similar rhythms.',
        type: 'accordion',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'slide',
        imageUrl: '/ecg/medical_accurate/atrial_fibrillation_140bpm_7.png',
        imageAlt: 'Comprehensive differential diagnosis comparison',
        hint: '🎯 Key features that distinguish each rhythm!',
        accordionItems: [
          {
            title: '🌊 WAP vs Atrial Fibrillation',
            content: 'WAP: Discrete, countable P waves with multiple morphologies, organized rhythm, 1:1 AV conduction. A-Fib: No discrete P waves, chaotic fibrillatory waves, irregularly irregular rhythm, variable ventricular response.'
          },
          {
            title: '🪚 WAP vs Atrial Flutter',
            content: 'WAP: Variable P wave shapes, rate 60-100 bpm, normal AV conduction. Flutter: Uniform sawtooth pattern, atrial rate ~300 bpm, variable AV block (2:1, 3:1, etc.).'
          },
          {
            title: '🏃 WAP vs Multifocal Atrial Tachycardia',
            content: 'WAP: Rate <100 bpm, benign. MAT: Rate >100 bpm, often pathologic, associated with lung disease. Both have multiple P wave morphologies - rate is the key!'
          },
          {
            title: '⚡ WAP vs Premature Atrial Contractions',
            content: 'WAP: Gradual, smooth P wave transitions, regular underlying rhythm. PACs: Early beats that interrupt rhythm, abnormal P waves, compensatory pauses.'
          }
        ]},

      {
        id: 'diagnostic-flowchart',
        title: '📋 Step-by-Step Diagnostic Approach',
        content: "Follow this systematic approach to differentiate WAP from other atrial rhythms!",
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'slide',
        imageUrl: '/ecg/medical_accurate/atrial_flutter_75bpm_1.png',
        imageAlt: 'Step-by-step diagnostic flowchart',
        hint: '🎯 Systematic approach prevents misdiagnosis!',
        steps: [
          "👁️ Step 1: Can you see discrete P waves? (No = A-Fib, Yes = continue)",
          "📊 Step 2: What's the heart rate? (<100 = WAP, >100 = MAT)",
          "🔍 Step 3: Are P waves uniform or variable? (Uniform = Flutter, Variable = continue)",
          "🌊 Step 4: Are changes gradual or abrupt? (Gradual = WAP, Abrupt = PACs)",
          "✅ Step 5: Confirm benign clinical context and reassure patient"
        ]},

      {
        id: 'vs-sinus-arrhythmia',
        title: 'vs Sinus Arrhythmia',
        content: 'WAP: Multiple different P wave shapes, Variable morphologies. Sinus Arrhythmia: Single P wave morphology, Only rate varies with breathing, Respiratory correlation. Both are benign, but P wave shape is the key difference.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/vs-sinus-arrhythmia.jpg',
        imageAlt: 'Comparison between WAP and sinus arrhythmia',
        hint: '📐 Same shape vs different shapes!'},

      {
        id: 'diagnostic-algorithm-wap',
        title: 'WAP Diagnostic Algorithm',
        content: 'Step 1: Are discrete P waves present? Step 2: Are there ≥3 different morphologies? Step 3: Is the rate 60-100 bpm? Step 4: Are transitions gradual? Step 5: Is AV conduction normal? All YES = Wandering Atrial Pacemaker!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#854d0e',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/diagnostic-algorithm.jpg',
        imageAlt: 'Step-by-step diagnostic algorithm for WAP',
        hint: '✅ Five yes answers = confident diagnosis!'},

      // ==================== UNIT 5 QUIZ: DIFFERENTIAL DIAGNOSIS ====================
      {
        id: 'unit5-differential-quiz',
        title: '🎯 Unit 5 Quiz: Differential Diagnosis',
        content: "Test your differential diagnosis skills!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: 'images/module2/lesson17/differential-quiz.jpg',
        imageAlt: 'Differential diagnosis quiz',
        hint: '🧠 Test your Unit 5 knowledge!',
        question: "What is the key difference between wandering atrial pacemaker and atrial fibrillation?",
        options: [
          "Heart rate differences",
          "WAP has discrete, countable P waves; A-fib has no discrete P waves",
          "QRS width variations",
          "PR interval patterns"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! The key difference is that WAP has discrete, countable P waves with varying morphologies, while atrial fibrillation has no discrete P waves and shows chaotic atrial activity."},

      // ===============================================
      // 🎯 UNIT 6: CLINICAL SIGNIFICANCE (6 slides)
      // ===============================================
      {
        id: 'unit6-intro',
        title: '🎯 Unit 6: Clinical Significance',
        content: 'Understand the clinical meaning of wandering atrial pacemaker! Learn when it\'s normal, what it indicates, and how to counsel patients and colleagues.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/clinical-overview.jpg',
        imageAlt: 'Clinical significance overview',
        hint: '🏥 Know what it means for patient care!'},

      {
        id: 'benign-nature',
        title: 'Benign Nature - No Treatment Needed',
        content: 'WAP is typically: Completely benign finding, Normal physiologic variant, No treatment required, No increased cardiac risk, Often sign of healthy autonomic function, May be protective in some cases. Document and reassure!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/benign-nature.jpg',
        imageAlt: 'Clinical documentation of benign nature',
        hint: '✅ Benign = reassure everyone!'},

      {
        id: 'patient-counseling',
        title: 'Patient Education and Counseling',
        content: 'Tell patients: "Your heart is using different starting points - this is normal", "No treatment or restrictions needed", "Often seen in healthy, athletic hearts", "May come and go with rest and activity", "No increased risk of heart problems".',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/patient-counseling.jpg',
        imageAlt: 'Patient education materials and counseling points',
        hint: '💬 Education reduces anxiety!'},

      {
        id: 'when-to-investigate',
        title: 'When to Investigate Further',
        content: 'Consider evaluation if: Patient has symptoms (chest pain, syncope), Rate exceeds 100 bpm (becomes WAT), Associated with other ECG abnormalities, Family history of arrhythmias, Patient has known heart disease. But usually, no workup needed!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/investigate-when.jpg',
        imageAlt: 'Indications for further investigation',
        hint: '🚩 Symptoms or fast rate change everything!'},

      {
        id: 'documentation-best-practices',
        title: 'Documentation Best Practices',
        content: 'Document as: "Wandering atrial pacemaker - benign variant", "Multiple P wave morphologies, rate 60-100 bpm", Include: Number of morphologies observed, Rate range, Patient asymptomatic, No treatment required. Clear documentation prevents unnecessary concern.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/documentation.jpg',
        imageAlt: 'Best practices for clinical documentation',
        hint: '📝 Good documentation prevents confusion!'},

      {
        id: 'prognostic-implications',
        title: 'Prognostic Implications',
        content: 'Long-term outlook: Excellent prognosis, No increased mortality, No progression to serious arrhythmias, May indicate good autonomic balance, Often seen in athletes (positive sign), No lifestyle restrictions needed. WAP = good news!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/prognosis.jpg',
        imageAlt: 'Long-term prognostic implications of WAP',
        hint: '🎯 Excellent prognosis - spread the good news!'},

      // ==================== UNIT 6 QUIZ: CLINICAL SIGNIFICANCE ====================
      {
        id: 'unit6-clinical-quiz',
        title: '🎯 Unit 6 Quiz: Clinical Significance',
        content: "Test your knowledge of clinical significance!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: 'images/module2/lesson17/clinical-quiz.jpg',
        imageAlt: 'Clinical significance quiz',
        hint: '🧠 Test your Unit 6 knowledge!',
        question: "What is the appropriate treatment for wandering atrial pacemaker?",
        options: [
          "Beta-blocker therapy",
          "Antiarrhythmic medication",
          "No treatment required - document as benign",
          "Urgent cardioversion"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! Wandering atrial pacemaker is a benign finding that requires no treatment. It should be documented as a normal variant, and patients should be reassured about its benign nature."},

      // ==================== COMPREHENSIVE FINAL ASSESSMENT ====================
      {
        id: 'comprehensive-final-assessment',
        title: '🏆 Comprehensive WAP Mastery Assessment',
        content: "Test your complete understanding of wandering atrial pacemaker!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: 'images/ecg/medical_accurate/normal_sinus_75bpm_2.png',
        imageAlt: 'Comprehensive WAP assessment quiz',
        hint: '🧠 Demonstrate your complete mastery!',
        question: "A 24-year-old marathon runner shows an ECG with 4 different P wave morphologies, heart rate 65-85 bpm, gradual transitions, and normal PR intervals. What is your complete assessment?",
        options: [
          "Atrial fibrillation requiring anticoagulation",
          "Sick sinus syndrome needing pacemaker evaluation",
          "Normal wandering atrial pacemaker - no action needed",
          "Multifocal atrial tachycardia requiring treatment"
        ],
        correctAnswer: 2,
        explanation: "✅ Excellent comprehensive assessment! This is classic wandering atrial pacemaker. Key features: young athlete (high vagal tone), multiple P wave morphologies (≥3), normal heart rate (<100 bpm), gradual transitions, and normal PR intervals. This is completely benign - reassure the patient and document as normal variant."},

      {
        id: 'clinical-integration-challenge',
        title: '🎯 Clinical Integration Challenge',
        content: "Apply your knowledge to differentiate WAP from similar rhythms!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'slide',
        imageUrl: 'images/ecg/medical_accurate/normal_sinus_95bpm_4.png',
        imageAlt: 'Clinical integration challenge',
        hint: '🏥 Real-world differential diagnosis skills!',
        question: "How do you BEST differentiate wandering atrial pacemaker from multifocal atrial tachycardia?",
        options: [
          "Both conditions are identical and require same treatment",
          "WAP: rate <100 bpm, gradual changes; MAT: rate >100 bpm, abrupt changes",
          "WAP only occurs in elderly; MAT only in young patients",
          "Both require immediate cardioversion"
        ],
        correctAnswer: 1,
        explanation: "✅ Perfect clinical reasoning! The key differentiators are: 1) Heart rate: WAP <100 bpm vs MAT >100 bpm, 2) P wave transitions: WAP shows gradual morphology changes vs MAT shows more abrupt changes, 3) Clinical significance: WAP is benign vs MAT may indicate underlying pathology requiring treatment."},

      {
        id: 'advanced-recognition-quiz',
        title: '🔍 Advanced Recognition Challenge',
        content: "Test your advanced WAP recognition skills!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'slide',
        imageUrl: 'images/ecg/medical_accurate/normal_sinus_60bpm_1.png',
        imageAlt: 'Advanced recognition challenge',
        hint: '👁️ Advanced pattern recognition skills!',
        question: "An ECG shows varying P wave morphologies with heart rate 95 bpm. Some P waves are upright in lead II, others are biphasic. PR intervals vary from 0.14-0.18 seconds. What is the most likely diagnosis?",
        options: [
          "First-degree AV block with variable conduction",
          "Wandering atrial pacemaker with normal rate variation",
          "Atrial fibrillation with intermittent sinus rhythm",
          "Second-degree AV block Type I"
        ],
        correctAnswer: 1,
        explanation: "✅ Excellent advanced recognition! This is wandering atrial pacemaker with normal features: multiple P wave morphologies (requirement met), rate <100 bpm (95 bpm), varying PR intervals based on pacemaker location (normal for WAP), and different P wave shapes indicating shifting atrial focus. The slight PR variation (0.14-0.18) reflects different conduction distances from various atrial sites."},

      // Final Integration Slide
      {
        id: 'wap-mastery-complete',
        title: '🏆 Wandering Atrial Pacemaker Mastery Complete!',
        content: 'Excellent! You\'ve mastered all 6 units of wandering atrial pacemaker. You understand the mechanisms, can recognize the ECG patterns, know the characteristics, can differentiate from other rhythms, and understand its benign clinical significance. You\'re ready to confidently identify and manage this normal variant!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module2/lesson17/wap-mastery-complete.jpg',
        imageAlt: 'Completion celebration - wandering atrial pacemaker mastery achieved',
        hint: '🎉 You\'re now a WAP expert!',
        audio: {
          narrationUrl: 'audio/module2/lesson17/wap-mastery-complete.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "🏆 Congratulations! You've mastered wandering atrial pacemaker through 6 comprehensive units! You understand it's a benign condition with shifting atrial pacemakers, know the mechanisms of competing automaticity, can identify multiple P wave morphologies, understand the characteristics, differentiate from other atrial rhythms, and know its excellent clinical significance.",
    keyPoints: [
      "Wandering atrial pacemaker shows ≥3 different P wave morphologies with gradual transitions",
      "Heart rate remains 60-100 bpm (if >100 bpm, it becomes wandering atrial tachycardia)",
      "Mechanism involves competing automaticity between different atrial pacemaker sites",
      "High vagal tone (rest, sleep) commonly promotes the wandering pattern",
      "Completely benign condition requiring no treatment - excellent prognosis",
      "Key differentiator: discrete P waves (vs A-fib) with multiple morphologies (vs sinus arrhythmia)",
      "Document as normal variant and provide patient reassurance"
    ],
    resources: [
      {
        title: "Advanced P Wave Analysis in WAP",
        url: "https://youtube.com/watch?v=wandering_pacemaker_mastery",
        type: "video"
      },
      {
        title: "Atrial Pacemaker Sites and Morphology",
        url: "https://example.com/atrial-pacemaker-sites",
        type: "article"
      },
      {
        title: "ECG Practice: Atrial Rhythm Recognition",
        url: "https://example.com/atrial-rhythm-practice",
        type: "tool"
      }
    ]
  },
  tasks: [
    // Tasks will be automatically generated from quiz slides
    {
      id: 'wandering-atrial-pacemaker-mastery-assessment',
      type: 'quiz',
      xp: 40,
      audio: null,
      images: {
        mainImage: 'images/module2/lesson17/final-assessment.jpg',
        slideImages: [
          {
            slideId: 'final-assessment',
            imageUrl: 'images/module2/lesson17/comprehensive-wap-strip.jpg',
            imageAlt: 'Comprehensive ECG strip showing wandering atrial pacemaker with multiple morphologies',
            caption: 'Apply all your WAP knowledge to this comprehensive strip'
          }
        ]
      },
      content: {
        question: 'A 25-year-old athlete\'s ECG shows 4 different P wave morphologies during a 10-second strip. Heart rate varies from 65-75 bpm with gradual P wave transitions. All QRS complexes are identical. What is your assessment?',
        options: [
          'Atrial fibrillation requiring anticoagulation',
          'Multifocal atrial tachycardia needing treatment',
          'Normal wandering atrial pacemaker - benign finding',
          'Sick sinus syndrome requiring pacemaker'
        ],
        correctAnswer: 2,
        explanation: 'Perfect! This is classic wandering atrial pacemaker: multiple P wave morphologies (≥3), normal heart rate (60-100 bpm), gradual transitions, and normal QRS complexes. In a young athlete, this is a completely benign finding requiring no treatment or follow-up.',
        hint: '🏃‍♂️ Young athlete + multiple P morphologies + normal rate = ?',
        completionMessage: 'Outstanding! 🎉 You\'ve achieved wandering atrial pacemaker mastery! You can confidently recognize this benign rhythm variant and provide appropriate reassurance. +40 XP! 🏆',
        retryMessage: 'Remember: Multiple P wave morphologies with normal rate in a healthy person is typically benign WAP.',
        celebrationAnimation: 'rhythm-recognition-master'
      }
    }
  ],
  completed: false,
  attempts: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
