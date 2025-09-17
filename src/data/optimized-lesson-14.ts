import { Lesson } from '@/types/learning';

export const optimizedLesson14: Lesson = {
  id: 'lesson-2-4-optimized',
  moduleId: 'module-2',
  title: "Complete Sinus Arrhythmia Mastery",
  description: "Master sinus arrhythmia through 6 focused learning units: Foundation, Physiology, Recognition, Characteristics, Differential Diagnosis, and Clinical Significance - each with interactive content and quizzes",
  order: 4,
  estimatedTime: 35,
  content: {
    type: 'mixed',
    introduction: "💓 Welcome to Sinus Arrhythmia Mastery! Learn this normal respiratory variation through 6 progressive units with slides, ECG strips, and quizzes. Each unit builds on the previous one for complete understanding.",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your Learning Journey",
        content: "UNIT 1: Foundation → UNIT 2: Physiology → UNIT 3: Recognition → UNIT 4: Characteristics → UNIT 5: Differential Diagnosis → UNIT 6: Clinical Significance",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // ===============================================
      // 🎯 UNIT 1: SINUS ARRHYTHMIA FOUNDATION (6 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: Sinus Arrhythmia Foundation',
        content: 'Start your sinus arrhythmia mastery journey! Learn the basics: what it is, why it happens, and why it\'s completely normal. This foundation is essential for everything that follows.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/normal_sinus_75bpm_2.png',
        imageAlt: 'Sinus arrhythmia learning journey overview',
        hint: '🚀 Your first step to understanding this normal rhythm!',
        highlights: [
          'what it is',
          'why it happens',
          'completely normal'
        ],
        audio: {
          narrationUrl: 'audio/module2/lesson14/unit1-intro.mp3',
          autoPlay: false
        }
      },

      {
        id: 'arrhythmia-definition',
        title: 'What is Sinus Arrhythmia?',
        content: 'Sinus arrhythmia is the NORMAL physiologic variation in heart rate with breathing. Heart rate speeds up with inspiration (breathing in) and slows down with expiration (breathing out). It\'s your body working perfectly!',
        type: 'flashcard',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/normal_60bpm.png',
        imageAlt: 'ECG showing cyclical rate variation of sinus arrhythmia with respiratory correlation',
        hint: '🌬️ It\'s all about breathing!',
        flashcardFront: 'What is Sinus Arrhythmia?',
        flashcardBack: 'NORMAL physiologic variation in heart rate with breathing: ↑ rate with inspiration, ↓ rate with expiration'},

      {
        id: 'normal-vs-abnormal',
        title: 'Normal Finding, Not a Disease',
        content: 'Despite the name "arrhythmia," sinus arrhythmia is NOT a heart problem! It\'s a sign of a healthy, responsive cardiovascular system. Young, healthy people show it most prominently.',
        type: 'tabs',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/normal_70bpm.png',
        imageAlt: 'Healthy heart showing normal sinus arrhythmia pattern',
        hint: '✅ Normal = Good!',
        tabs: [
          {
            title: '❌ NOT a Disease',
            content: 'Despite the confusing name "arrhythmia," this is NOT a heart problem or pathology. The name is misleading - it\'s completely normal.'
          },
          {
            title: '✅ Sign of Health',
            content: 'Indicates a healthy, responsive cardiovascular system. Shows good autonomic nervous system function and cardiovascular fitness.'
          },
          {
            title: '👥 Who Shows It Most',
            content: 'Most prominent in young, healthy individuals. Athletes often display pronounced sinus arrhythmia due to excellent cardiovascular conditioning.'
          }
        ]},

      {
        id: 'who-has-it',
        title: 'Who Shows Sinus Arrhythmia?',
        content: 'Most common in: Young adults and children, Athletes with strong hearts, Healthy individuals with good vagal tone. It often decreases with age as the nervous system becomes less responsive.',
        type: 'accordion',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/normal_sinus_85bpm_3.png',
        imageAlt: 'Demographics showing sinus arrhythmia prevalence by age',
        hint: '👶 Youth and fitness favor it!',
        accordionItems: [
          {
            title: '👶 Young Adults & Children',
            content: 'Most prominent in younger populations due to more responsive autonomic nervous systems. Children and young adults show the most pronounced variations.'
          },
          {
            title: '🏃 Athletes & Fit Individuals',
            content: 'Athletes with strong cardiovascular conditioning often display prominent sinus arrhythmia. Enhanced vagal tone from training leads to greater variation.'
          },
          {
            title: '📉 Age-Related Changes',
            content: 'Sinus arrhythmia tends to decrease with age as the autonomic nervous system becomes less responsive. Older adults may show minimal or no variation.'
          }
        ]},

      {
        id: 'breathing-connection',
        title: 'The Breathing Connection',
        content: 'Every time you breathe, your heart rate changes slightly. Breathe IN → heart speeds up. Breathe OUT → heart slows down. This creates the cyclical pattern we see on ECG.',
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/normal_75bpm.png',
        imageAlt: 'Diagram showing relationship between breathing phases and heart rate',
        hint: '💨 In = fast, Out = slow!',
        steps: [
          { 
            number: 1,
            title: 'Inspiration (Breathe IN)',
            description: 'When you breathe in, your heart rate increases. Venous return increases and sympathetic activity rises.',
            icon: '🫁'
          },
          { 
            number: 2,
            title: 'Expiration (Breathe OUT)',
            description: 'When you breathe out, your heart rate decreases. Vagal stimulation causes the heart to slow down.',
            icon: '💨'
          },
          { 
            number: 3,
            title: 'Cyclical Pattern',
            description: 'This creates a repeating cycle on the ECG: faster-slower-faster-slower, synchronized with breathing.',
            icon: '🔄'
          },
          { 
            number: 4,
            title: 'ECG Appearance',
            description: 'On the ECG strip, you see varying R-R intervals that correlate with the respiratory cycle.',
            icon: '📈'
          }
        ]},

      {
        id: 'terminology-clarity',
        title: 'Understanding the Terminology',
        content: 'Don\'t let the word "arrhythmia" confuse you! In this case, it just means "not perfectly regular." The rhythm follows a predictable pattern tied to breathing - that\'s the key difference from true arrhythmias.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/normal_80bpm.png',
        imageAlt: 'Comparison of terminology: normal arrhythmia vs pathologic arrhythmia',
        hint: '📚 Words matter - this is good "arrhythmia"!',
        highlights: [
          'not perfectly regular',
          'predictable pattern',
          'tied to breathing'
        ]},

      // ==================== UNIT 1 QUIZ: FOUNDATION ====================
      {
        id: 'unit1-foundation-quiz',
        title: '🎯 Unit 1 Quiz: Sinus Arrhythmia Foundation',
        content: "Test your knowledge of sinus arrhythmia foundation concepts!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: 'images/module2/lesson14/foundation-quiz.jpg',
        imageAlt: 'Sinus arrhythmia foundation quiz',
        hint: '🧠 Test your Unit 1 knowledge!',
        question: "What is sinus arrhythmia?",
        options: [
          "A dangerous heart rhythm that needs treatment",
          "Normal respiratory variation in heart rate",
          "A sign of heart disease in young people",
          "An irregular rhythm that occurs during sleep"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Sinus arrhythmia is the normal physiologic variation in heart rate that occurs with breathing - it's a sign of a healthy, responsive cardiovascular system.",
        audio: {
          narrationUrl: 'audio/module2/lesson14/unit1-quiz.mp3',
          autoPlay: false
        }
      },

      // ================================================
      // 🎯 UNIT 2: PHYSIOLOGY MECHANISMS (7 slides)
      // ================================================
      {
        id: 'unit2-intro',
        title: '🎯 Unit 2: Physiology Mechanisms',
        content: 'Now dive into HOW sinus arrhythmia works! Learn the autonomic nervous system, vagal tone, and respiratory effects on the heart. Understanding the "why" makes recognition easier.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/normal_sinus_60bpm_1.png',
        imageAlt: 'Physiology mechanisms overview',
        hint: '🧠 Time to understand the science!',
        highlights: [
          'autonomic nervous system',
          'vagal tone',
          'respiratory effects'
        ]},

      {
        id: 'autonomic-nervous-system',
        title: 'Autonomic Nervous System Control',
        content: 'Your heart rate is controlled by two opposing forces: Sympathetic (speed up) and Parasympathetic/Vagal (slow down). During breathing, the balance between these systems shifts cyclically.',
        type: 'tabs',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/normal_90bpm.png',
        imageAlt: 'Autonomic nervous system control of heart rate',
        hint: '⚖️ Balance of two systems!',
        tabs: [
          {
            title: '⚡ Sympathetic System',
            content: 'The "fight or flight" system that speeds up the heart. Releases norepinephrine and epinephrine. Activated during stress, exercise, and inspiration.'
          },
          {
            title: '🧘 Parasympathetic System',
            content: 'The "rest and digest" system that slows down the heart. Mediated by the vagus nerve. Releases acetylcholine and is dominant during expiration.'
          },
          {
            title: '🔄 Dynamic Balance',
            content: 'During normal breathing, these systems constantly shift balance. Inspiration favors sympathetic, expiration favors parasympathetic, creating the rhythm variation.'
          }
        ]},

      {
        id: 'inspiration-mechanism',
        title: 'What Happens During Inspiration',
        content: 'When you breathe IN: 1) Venous return increases (more blood to heart), 2) Vagal tone decreases (less braking), 3) Heart rate increases to handle extra blood, 4) R-R intervals get shorter on ECG.',
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/normal_sinus_95bpm_4.png',
        imageAlt: 'Physiological changes during inspiration affecting heart rate',
        hint: '📈 Breathe in = speed up!',
        steps: [
          { 
            number: 1,
            title: 'Increased Venous Return',
            description: 'Inspiration draws more blood back to the heart from the venous system, increasing preload and stroke volume.',
            icon: '🫀'
          },
          { 
            number: 2,
            title: 'Decreased Vagal Tone',
            description: 'Parasympathetic (vagal) stimulation decreases, removing the "braking" effect on the SA node.',
            icon: '🔓'
          },
          { 
            number: 3,
            title: 'Heart Rate Increases',
            description: 'The SA node fires faster to handle the increased blood volume and maintain cardiac output.',
            icon: '⚡'
          },
          { 
            number: 4,
            title: 'Shorter R-R Intervals',
            description: 'On the ECG, you see shorter distances between R waves during the inspiratory phase.',
            icon: '📏'
          }
        ]},

      {
        id: 'expiration-mechanism',
        title: 'What Happens During Expiration',
        content: 'When you breathe OUT: 1) Venous return decreases (less blood to heart), 2) Vagal tone increases (more braking), 3) Heart rate decreases, 4) R-R intervals get longer on ECG.',
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/normal_sinus_75bpm_2.png',
        imageAlt: 'Physiological changes during expiration affecting heart rate',
        hint: '📉 Breathe out = slow down!',
        steps: [
          { 
            number: 1,
            title: 'Decreased Venous Return',
            description: 'Expiration reduces blood return to the heart from the venous system, decreasing preload and stroke volume requirements.',
            icon: '💔'
          },
          { 
            number: 2,
            title: 'Increased Vagal Tone',
            description: 'Parasympathetic (vagal) stimulation increases, applying the "braking" effect on the SA node firing rate.',
            icon: '🔒'
          },
          { 
            number: 3,
            title: 'Heart Rate Decreases',
            description: 'The SA node fires slower due to increased vagal influence, requiring less cardiac output for the reduced venous return.',
            icon: '📉'
          },
          { 
            number: 4,
            title: 'Longer R-R Intervals',
            description: 'On the ECG, you see longer distances between R waves during the expiratory phase, creating the characteristic pattern.',
            icon: '📐'
          }
        ]},

      {
        id: 'vagal-tone-importance',
        title: 'Vagal Tone: The Key Player',
        content: 'High vagal tone = more pronounced sinus arrhythmia. Athletes and young people have strong vagal tone, making their sinus arrhythmia more visible. It\'s a sign of cardiovascular fitness!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson14/vagal-tone.jpg',
        imageAlt: 'Vagal tone effects on sinus arrhythmia prominence',
        hint: '💪 Strong vagal tone = strong sinus arrhythmia!'},

      {
        id: 'respiratory-sinus-interaction',
        title: 'Respiratory-Cardiac Interaction',
        content: 'The lungs and heart work as a team! Changes in chest pressure during breathing affect venous return. The nervous system fine-tunes heart rate to match. It\'s beautiful physiology in action.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        imageUrl: 'images/module2/lesson14/respiratory-cardiac-interaction.jpg',
        imageAlt: 'Interaction between respiratory and cardiac systems',
        hint: '🤝 Teamwork makes the heart work!'},

      {
        id: 'age-related-changes',
        title: 'Why It Changes with Age',
        content: 'As we age: Vagal tone decreases, Autonomic responsiveness reduces, Sinus arrhythmia becomes less prominent. In elderly patients, absence of sinus arrhythmia is actually normal.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: 'images/module2/lesson14/age-related-changes.jpg',
        imageAlt: 'Changes in sinus arrhythmia with aging',
        hint: '⏰ Time changes everything, including this!'},

      // ==================== UNIT 2 QUIZ: PHYSIOLOGY ====================
      {
        id: 'unit2-physiology-quiz',
        title: '🎯 Unit 2 Quiz: Physiology Mechanisms',
        content: "Test your knowledge of sinus arrhythmia physiology!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: 'images/module2/lesson14/physiology-quiz.jpg',
        imageAlt: 'Sinus arrhythmia physiology quiz',
        hint: '🧠 Test your Unit 2 knowledge!',
        question: "During inspiration, what happens to heart rate?",
        options: [
          "Decreases due to increased vagal tone",
          "Increases due to decreased vagal tone and increased venous return",
          "Stays exactly the same",
          "Becomes completely irregular"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! During inspiration, vagal tone decreases and venous return increases, causing the heart rate to increase as part of the normal respiratory variation."},

      // ===============================================
      // 🎯 UNIT 3: ECG RECOGNITION PATTERNS (7 slides)
      // ===============================================
      {
        id: 'unit3-intro',
        title: '🎯 Unit 3: ECG Recognition Patterns',
        content: 'Time to become an expert at spotting sinus arrhythmia on ECG! Learn the visual patterns, measurement techniques, and key features that make recognition easy.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/normal_sinus_85bpm_3.png',
        imageAlt: 'ECG recognition patterns overview',
        hint: '👁️ Train your eye to see the pattern!',
        highlights: [
          'visual patterns',
          'measurement techniques',
          'key features'
        ]},

      {
        id: 'visual-pattern-recognition',
        title: 'The Visual Pattern',
        content: 'Look for: Cyclical R-R interval variation, Gradually changing rhythm (not abrupt), Pattern repeats every few beats, Rhythm "breathes" like a wave. Once you see it, you\'ll always recognize it!',
        type: 'accordion',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/normal_sinus_95bpm_4.png',
        imageAlt: 'Visual pattern of sinus arrhythmia on ECG strip',
        hint: '🌊 Think waves, not choppy seas!',
        accordionItems: [
          {
            title: '🔄 Cyclical Variation',
            content: 'R-R intervals change in a predictable, cyclical pattern. The variation follows breathing cycles - not random or chaotic like pathologic arrhythmias.'
          },
          {
            title: '📈 Gradual Changes',
            content: 'Heart rate changes gradually, not abruptly. You see smooth transitions between faster and slower rates, creating a "wave-like" appearance.'
          },
          {
            title: '🔁 Repeating Pattern',
            content: 'The pattern repeats every few beats, corresponding to respiratory cycles. Once you identify one cycle, you can predict the next.'
          },
          {
            title: '🌊 Wave-Like Rhythm',
            content: 'The overall appearance is like a gentle wave - the rhythm "breathes" with the patient. This is the classic signature of sinus arrhythmia.'
          }
        ]},

      {
        id: 'measurement-technique',
        title: 'How to Measure the Variation',
        content: 'Measure R-R intervals across the strip. Normal variation: >10% difference between longest and shortest R-R. Calculate: (Longest R-R - Shortest R-R) ÷ Longest R-R × 100 = % variation.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: 'images/module2/lesson14/measurement-technique.jpg',
        imageAlt: 'Technique for measuring R-R interval variation',
        hint: '📏 Measure to confirm what you see!'},

      {
        id: 'p-wave-consistency',
        title: 'P Wave Consistency Check',
        content: 'Key feature: ALL P waves look identical! Same shape, same size, all upright in lead II. This proves the rhythm is still sinus - just with variable timing.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: 'images/module2/lesson14/p-wave-consistency.jpg',
        imageAlt: 'Consistent P wave morphology in sinus arrhythmia',
        hint: '🔍 Same P waves = sinus origin!'},

      {
        id: 'pr-interval-stability',
        title: 'PR Interval Stability',
        content: 'Another key feature: PR intervals remain constant throughout! While R-R intervals vary, the PR interval stays the same, proving normal AV conduction.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson14/pr-interval-stability.jpg',
        imageAlt: 'Stable PR intervals in sinus arrhythmia',
        hint: '⚖️ PR stays steady while R-R varies!'},

      {
        id: 'qrs-morphology',
        title: 'QRS Complex Morphology',
        content: 'QRS complexes: All identical, <0.12 seconds (narrow), Normal ventricular conduction. The only thing changing is the timing between beats, not the beats themselves.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        imageUrl: 'images/module2/lesson14/qrs-morphology.jpg',
        imageAlt: 'Consistent QRS morphology in sinus arrhythmia',
        hint: '🔄 Same shape, different timing!'},

      {
        id: 'pattern-prediction',
        title: 'Predicting the Pattern',
        content: 'Pro tip: If you can predict when the next beat will come based on the breathing pattern, it\'s sinus arrhythmia! Random irregularity suggests something else.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: 'images/module2/lesson14/pattern-prediction.jpg',
        imageAlt: 'Predictable pattern of sinus arrhythmia',
        hint: '🔮 Predictable = sinus arrhythmia!'},

      // ==================== UNIT 3 QUIZ: RECOGNITION ====================
      {
        id: 'unit3-recognition-quiz',
        title: '🎯 Unit 3 Quiz: ECG Recognition',
        content: "Test your ECG recognition skills!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: 'images/module2/lesson14/recognition-quiz.jpg',
        imageAlt: 'ECG recognition quiz',
        hint: '🧠 Test your Unit 3 knowledge!',
        question: "What is the key visual pattern of sinus arrhythmia?",
        options: [
          "Abrupt changes in R-R intervals",
          "Cyclical, gradual variation in R-R intervals",
          "Missing P waves",
          "Irregular QRS complexes"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Sinus arrhythmia shows cyclical, gradual variation in R-R intervals that follows the breathing pattern, not abrupt or random changes."},

      // ================================================
      // 🎯 UNIT 4: KEY CHARACTERISTICS (6 slides)
      // ================================================
      {
        id: 'unit4-intro',
        title: '🎯 Unit 4: Key Characteristics',
        content: 'Master the specific characteristics that define sinus arrhythmia! Learn rate ranges, criteria, and special features that make this rhythm unique.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module2/lesson14/characteristics-overview.jpg',
        imageAlt: 'Key characteristics overview',
        hint: '📋 Know the criteria cold!'},

      {
        id: 'rate-characteristics',
        title: 'Heart Rate Characteristics',
        content: 'Rate range: Usually 60-100 bpm (normal sinus range), Can be slightly bradycardic in athletes, Overall rate follows normal circadian patterns, Rate variation typically 10-30% from baseline.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson14/rate-characteristics.jpg',
        imageAlt: 'Heart rate characteristics of sinus arrhythmia',
        hint: '📊 Normal range with normal variation!'},

      {
        id: 'rhythm-characteristics',
        title: 'Rhythm Characteristics',
        content: 'Rhythm type: "Regularly irregular" - predictable pattern, Cyclical variation tied to respiration, Longest R-R during expiration, Shortest R-R during inspiration, Pattern repeats with each respiratory cycle.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: 'images/module2/lesson14/rhythm-characteristics.jpg',
        imageAlt: 'Rhythm characteristics showing cyclical pattern',
        hint: '🔄 Regularly irregular - key phrase!'},

      {
        id: 'breath-holding-test',
        title: 'The Breath-Holding Test',
        content: 'Gold standard test: Ask patient to hold their breath. If sinus arrhythmia disappears → confirms respiratory origin. If it persists → consider other causes. Simple but definitive!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: 'images/module2/lesson14/breath-holding-test.jpg',
        imageAlt: 'ECG comparison showing sinus arrhythmia before and during breath holding',
        hint: '🫁 Hold breath = rhythm regularizes!'},

      {
        id: 'age-related-features',
        title: 'Age-Related Features',
        content: 'Young patients: Very prominent, Easy to see, Sign of good autonomic function. Older patients: Less prominent, May be absent (normal), Reduced autonomic responsiveness.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson14/age-features.jpg',
        imageAlt: 'Age-related differences in sinus arrhythmia presentation',
        hint: '👶➡️👴 Young = prominent, Old = subtle!'},

      {
        id: 'exercise-response',
        title: 'Response to Exercise',
        content: 'During exercise: Sinus arrhythmia typically disappears, Sympathetic dominance overrides vagal effects, Heart rate becomes more regular, Returns during recovery phase.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        imageUrl: 'images/module2/lesson14/exercise-response.jpg',
        imageAlt: 'Exercise effects on sinus arrhythmia',
        hint: '🏃‍♂️ Exercise = regular rhythm!'},

      // ==================== UNIT 4 QUIZ: CHARACTERISTICS ====================
      {
        id: 'unit4-characteristics-quiz',
        title: '🎯 Unit 4 Quiz: Key Characteristics',
        content: "Test your knowledge of sinus arrhythmia characteristics!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: 'images/module2/lesson14/characteristics-quiz.jpg',
        imageAlt: 'Characteristics quiz',
        hint: '🧠 Test your Unit 4 knowledge!',
        question: "What happens to sinus arrhythmia when a patient holds their breath?",
        options: [
          "It becomes more pronounced",
          "It disappears or significantly decreases",
          "It changes to atrial fibrillation",
          "No change occurs"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Sinus arrhythmia typically disappears or significantly decreases during breath holding, confirming its respiratory origin and helping differentiate it from other arrhythmias."},

      // ================================================
      // 🎯 UNIT 5: DIFFERENTIAL DIAGNOSIS (7 slides)
      // ================================================
      {
        id: 'unit5-intro',
        title: '🎯 Unit 5: Differential Diagnosis',
        content: 'Learn to distinguish sinus arrhythmia from other irregular rhythms! Master the key differences that separate this benign finding from pathologic arrhythmias.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module2/lesson14/differential-overview.jpg',
        imageAlt: 'Differential diagnosis overview',
        hint: '🔍 Know what it\'s NOT!'},

      {
        id: 'vs-atrial-fibrillation',
        title: 'vs Atrial Fibrillation',
        content: 'Sinus Arrhythmia: P waves present, Predictable pattern, Respiratory correlation. Atrial Fibrillation: No P waves, Irregularly irregular, No predictable pattern, Fibrillatory waves.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson14/vs-atrial-fib.jpg',
        imageAlt: 'Comparison between sinus arrhythmia and atrial fibrillation',
        hint: '👀 P waves = sinus arrhythmia!'},

      {
        id: 'vs-wandering-pacemaker',
        title: 'vs Wandering Atrial Pacemaker',
        content: 'Sinus Arrhythmia: P waves identical, Same axis. Wandering Pacemaker: P waves change shape, Different axis, May have different PR intervals, Pacemaker site shifts.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: 'images/module2/lesson14/vs-wandering-pacemaker.jpg',
        imageAlt: 'Comparison with wandering atrial pacemaker',
        hint: '📐 Same P wave shape = sinus!'},

      {
        id: 'vs-sinus-pause',
        title: 'vs Sinus Pause/Arrest',
        content: 'Sinus Arrhythmia: Gradual variation, No missing beats. Sinus Pause: Abrupt pause, Missing P-QRS cycles, Pause >2x normal cycle, Usually pathologic.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: 'images/module2/lesson14/vs-sinus-pause.jpg',
        imageAlt: 'Comparison with sinus pause/arrest',
        hint: '⏸️ No missing beats in sinus arrhythmia!'},

      {
        id: 'vs-second-degree-block',
        title: 'vs Second-Degree AV Block',
        content: 'Sinus Arrhythmia: Every P wave conducted, Normal PR intervals. Second-Degree Block: Some P waves not conducted, May have prolonged PR, Dropped QRS complexes.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/first_degree_av_block_70bpm_2.png',
        imageAlt: 'Comparison with second-degree AV block',
        hint: '🔗 All P waves conducted in sinus arrhythmia!'},

      {
        id: 'vs-premature-beats',
        title: 'vs Premature Atrial Contractions',
        content: 'Sinus Arrhythmia: Regular P wave morphology, Predictable timing. PACs: Early, abnormal P waves, Compensatory pauses, Irregular timing, Different P wave shape.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        imageUrl: 'images/module2/lesson14/vs-pacs.jpg',
        imageAlt: 'Comparison with premature atrial contractions',
        hint: '⚡ No early beats in sinus arrhythmia!'},

      {
        id: 'diagnostic-algorithm',
        title: 'Diagnostic Algorithm',
        content: 'Step 1: Are P waves present and identical? Step 2: Is variation cyclical/predictable? Step 3: Does it correlate with breathing? Step 4: Does breath-holding regularize it? All YES = Sinus Arrhythmia!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: 'images/module2/lesson14/diagnostic-algorithm.jpg',
        imageAlt: 'Step-by-step diagnostic algorithm',
        hint: '✅ Four yes answers = diagnosis confirmed!'},

      // ==================== UNIT 5 QUIZ: DIFFERENTIAL DIAGNOSIS ====================
      {
        id: 'unit5-differential-quiz',
        title: '🎯 Unit 5 Quiz: Differential Diagnosis',
        content: "Test your ability to differentiate sinus arrhythmia!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: 'images/module2/lesson14/differential-quiz.jpg',
        imageAlt: 'Differential diagnosis quiz',
        hint: '🧠 Test your Unit 5 knowledge!',
        question: "How do you differentiate sinus arrhythmia from atrial fibrillation?",
        options: [
          "Both have identical P waves",
          "Sinus arrhythmia has P waves and cyclical pattern; A-fib has no P waves",
          "Rate is the only difference",
          "They cannot be differentiated"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Sinus arrhythmia maintains clear, identical P waves with a predictable cyclical pattern, while atrial fibrillation has no discernible P waves and is irregularly irregular without a pattern."},

      // ===============================================
      // 🎯 UNIT 6: CLINICAL SIGNIFICANCE (6 slides)
      // ===============================================
      {
        id: 'unit6-intro',
        title: '🎯 Unit 6: Clinical Significance',
        content: 'Understand the clinical meaning of sinus arrhythmia! Learn when it\'s normal, when to worry, and how to explain it to patients and colleagues.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module2/lesson14/clinical-overview.jpg',
        imageAlt: 'Clinical significance overview',
        hint: '🏥 Know what it means clinically!'},

      {
        id: 'normal-finding',
        title: 'Normal Finding - No Treatment Needed',
        content: 'Sinus arrhythmia is: Completely normal physiologic finding, Sign of healthy autonomic function, Most prominent in young, fit individuals, Requires NO treatment or intervention, Should be documented as "normal variant".',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/normal_75bpm.png',
        imageAlt: 'Clinical documentation of normal finding',
        hint: '✅ Normal = reassure patient!'},

      {
        id: 'patient-education',
        title: 'Patient Education Points',
        content: 'Tell patients: "Your heart is responding normally to breathing", "This shows your heart is healthy and responsive", "No treatment or follow-up needed", "Athletes often have prominent sinus arrhythmia".',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: 'images/module2/lesson14/patient-education.jpg',
        imageAlt: 'Patient education materials',
        hint: '💬 Reassure and educate!'},

      {
        id: 'when-to-investigate',
        title: 'When to Investigate Further',
        content: 'Consider further workup if: Patient has symptoms (chest pain, syncope), Extreme rate variation (>50%), Doesn\'t disappear with breath holding, Associated with other ECG abnormalities, Patient has known heart disease.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: 'images/module2/lesson14/investigate-further.jpg',
        imageAlt: 'Red flags requiring investigation',
        hint: '🚩 Symptoms change everything!'},

      {
        id: 'documentation-tips',
        title: 'Documentation Best Practices',
        content: 'Document as: "Sinus rhythm with respiratory variation (sinus arrhythmia)", "Normal respiratory sinus arrhythmia", Include: Rate range, Cyclical pattern noted, Patient asymptomatic, No treatment required.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson14/documentation.jpg',
        imageAlt: 'Proper documentation examples',
        hint: '📝 Clear documentation protects everyone!'},

      {
        id: 'prognostic-significance',
        title: 'Prognostic Significance',
        content: 'Sinus arrhythmia presence: Indicates good autonomic function, Associated with cardiovascular fitness, May be protective factor, No adverse outcomes. Absence in young people: May suggest autonomic dysfunction, Worth noting but not alarming.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        imageUrl: 'images/module2/lesson14/prognosis.jpg',
        imageAlt: 'Prognostic significance of sinus arrhythmia',
        hint: '🔮 Good prognosis = good news!'},

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
        imageUrl: 'images/module2/lesson14/clinical-quiz.jpg',
        imageAlt: 'Clinical significance quiz',
        hint: '🧠 Test your Unit 6 knowledge!',
        question: "What is the clinical significance of respiratory sinus arrhythmia?",
        options: [
          "Requires immediate cardiac catheterization",
          "Normal finding indicating healthy autonomic function",
          "Sign of impending heart failure",
          "Requires antiarrhythmic medication"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Respiratory sinus arrhythmia is a normal physiologic finding that indicates healthy autonomic nervous system function. It requires no treatment and is actually a positive sign of cardiovascular health."},

      // ==================== COMPREHENSIVE FINAL ASSESSMENT ====================
      {
        id: 'comprehensive-final-assessment',
        title: '🏆 Comprehensive Sinus Arrhythmia Mastery Assessment',
        content: "Test your complete understanding of sinus arrhythmia!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: 'images/ecg/medical_accurate/normal_sinus_95bpm_4.png',
        imageAlt: 'Comprehensive assessment quiz',
        hint: '🧠 Demonstrate your complete mastery!',
        question: "A 19-year-old college athlete shows an ECG with heart rate varying from 50-80 bpm in a regular pattern. P waves are identical, PR constant. During exercise stress test, the variation disappears and rate increases normally. What is your complete assessment?",
        options: [
          "Abnormal rhythm requiring beta blockers",
          "Sick sinus syndrome needing pacemaker",
          "Normal respiratory sinus arrhythmia - no action needed",
          "Atrial fibrillation requiring anticoagulation"
        ],
        correctAnswer: 2,
        explanation: "✅ Excellent complete assessment! This is classic normal respiratory sinus arrhythmia. Key diagnostic features: young athlete (high vagal tone), regular cyclical pattern, identical P waves, stable PR intervals, and normal response to exercise (variation disappears, appropriate rate increase). No intervention needed - reassure patient this is normal and healthy."},

      {
        id: 'clinical-integration-challenge',
        title: '🎯 Clinical Integration Challenge',
        content: "Apply your knowledge to differentiate from other arrhythmias!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'slide',
        imageUrl: 'images/ecg/medical_accurate/normal_sinus_75bpm_2.png',
        imageAlt: 'Clinical integration challenge',
        hint: '🏥 Real-world differential diagnosis skills!',
        question: "How do you BEST differentiate sinus arrhythmia from early atrial fibrillation in a young patient?",
        options: [
          "Both are equally likely in young patients",
          "Check if variation is random vs cyclical, and if P waves are identical",
          "Order immediate echocardiogram for both conditions",
          "Start anticoagulation for either diagnosis"
        ],
        correctAnswer: 1,
        explanation: "✅ Perfect clinical reasoning! The key differentiators are: 1) Sinus arrhythmia has cyclical/predictable variation vs random in A-fib, 2) Identical P waves vs absent/irregular in A-fib, 3) Normal response to breath-holding vs no change in A-fib. These clinical tests avoid unnecessary testing and anxiety."},

      // Final Integration Slide
      {
        id: 'mastery-complete',
        title: '🏆 Sinus Arrhythmia Mastery Complete!',
        content: 'Congratulations! You\'ve mastered all 6 units of sinus arrhythmia. You now understand the foundation, physiology, recognition, characteristics, differential diagnosis, and clinical significance. You\'re ready to confidently identify and manage this normal finding!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: 'images/module2/lesson14/mastery-complete.jpg',
        imageAlt: 'Completion celebration - sinus arrhythmia mastery achieved',
        hint: '🎉 You\'re now a sinus arrhythmia expert!',
        audio: {
          narrationUrl: 'audio/module2/lesson14/mastery-complete.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "🏆 Congratulations! You've mastered sinus arrhythmia through 6 comprehensive units! You understand it's a normal respiratory variation, know the physiology, can recognize it on ECG, understand its characteristics, can differentiate it from other rhythms, and know its benign clinical significance.",
    keyPoints: [
      "Sinus arrhythmia is normal respiratory variation in heart rate - completely benign",
      "Heart rate increases with inspiration, decreases with expiration due to autonomic changes",
      "Look for cyclical R-R variation with identical P waves and stable PR intervals",
      "Most prominent in young, healthy individuals with good vagal tone",
      "Disappears with breath holding, confirming respiratory origin",
      "Differential diagnosis includes A-fib, wandering pacemaker, and AV blocks",
      "No treatment needed - document as normal variant and reassure patient"
    ],
    resources: [
      {
        title: "Advanced Sinus Arrhythmia Recognition",
        url: "https://youtube.com/watch?v=sinus_arrhythmia_mastery",
        type: "video"
      },
      {
        title: "Autonomic Influences on Heart Rate",
        url: "https://example.com/autonomic-cardiology",
        type: "article"
      },
      {
        title: "ECG Practice: Irregular Rhythms",
        url: "https://example.com/irregular-rhythm-practice",
        type: "tool"
      }
    ]
  },
  tasks: [
    // Tasks will be automatically generated from quiz slides
    {
      id: 'sinus-arrhythmia-mastery-assessment',
      type: 'quiz',
      xp: 50,
      audio: null,
      images: {
        mainImage: 'images/module2/lesson14/final-assessment.jpg',
        slideImages: [
          {
            slideId: 'final-assessment',
            imageUrl: 'images/module2/lesson14/comprehensive-ecg-strip.jpg',
            imageAlt: 'Comprehensive ECG showing various aspects of sinus arrhythmia',
            caption: 'Apply all your knowledge to this final assessment'
          }
        ]
      },
      content: {
        question: 'A 22-year-old athlete shows this ECG pattern. Heart rate varies from 55-75 bpm in a cyclical pattern. P waves are identical, PR intervals constant. During breath holding, the rhythm becomes regular at 65 bpm. What is your diagnosis?',
        options: [
          'Atrial fibrillation with variable conduction',
          'Second-degree AV block Type I',
          'Normal respiratory sinus arrhythmia',
          'Sick sinus syndrome requiring pacemaker'
        ],
        correctAnswer: 2,
        explanation: 'Perfect! This is classic respiratory sinus arrhythmia. Key features: young athlete (high vagal tone), cyclical pattern, identical P waves, stable PR intervals, and most importantly - regularizes with breath holding. This confirms respiratory origin and rules out pathologic arrhythmias.',
        hint: '🏃‍♂️ Young athlete + cyclical pattern + breath-holding test = ?',
        completionMessage: 'Outstanding! 🎉 You\'ve achieved sinus arrhythmia mastery! You can confidently identify, understand, and explain this normal finding. +50 XP! 🏆',
        retryMessage: 'Close! Remember the key features: age, cyclical pattern, breath-holding response, and clinical context.',
        celebrationAnimation: 'heart-rhythm-perfect'
      }
    }
  ],
  completed: false,
  attempts: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
