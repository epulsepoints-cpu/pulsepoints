import { Lesson } from '@/types/learning';

export const optimizedLesson18: Lesson = {
  id: 'lesson-2-8-optimized',
  moduleId: 'module-2',
  title: "Complete Multifocal Atrial Tachycardia Mastery",
  description: "Master multifocal atrial tachycardia through 6 focused learning units: Foundation, Pathophysiology, Recognition, Classification, Differential Diagnosis, and Clinical Management - each with detailed P wave analysis and critical care applications",
  order: 8,
  estimatedTime: 35,
  content: {
    type: 'mixed',
    introduction: "⚠️ Welcome to Multifocal Atrial Tachycardia Mastery! Learn this critical arrhythmia through 6 progressive units with advanced P wave analysis, differential diagnosis, and emergency management. Master the distinction from atrial fibrillation!",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your Learning Journey",
        content: "UNIT 1: Foundation → UNIT 2: Pathophysiology → UNIT 3: Recognition → UNIT 4: Classification → UNIT 5: Differential Diagnosis → UNIT 6: Clinical Management",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // ===============================================
      // 🎯 UNIT 1: MULTIFOCAL ATRIAL TACHYCARDIA FOUNDATION (7 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: MAT Foundation',
        content: 'Begin your critical arrhythmia mastery! Learn what multifocal atrial tachycardia is, why it\'s dangerous, and who develops it. This foundation will help you distinguish MAT from atrial fibrillation in emergency situations.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/mat-overview.jpg',
        imageAlt: 'Multifocal atrial tachycardia learning journey overview',
        hint: '⚠️ Critical arrhythmia requiring immediate recognition!',
        highlights: ['multifocal atrial tachycardia', 'dangerous', 'distinguish', 'emergency situations'],
        audio: {
          narrationUrl: 'audio/module2/lesson18/unit1-intro.mp3',
          autoPlay: false
        }
      },

      {
        id: 'mat-definition',
        title: 'What is Multifocal Atrial Tachycardia?',
        content: 'MAT: Multiple atrial sites firing independently at rapid rates.',
        type: 'flashcard',
        layout: 'centered',
        backgroundColor: '#fff1f2',
        textColor: '#dc2626',
        animation: 'zoom',
        imageUrl: 'images/ecg/medical_accurate/multifocal_atrial_tach_120bpm_1.png',
        imageAlt: 'ECG showing multifocal atrial tachycardia with multiple P wave morphologies',
        hint: '⚡ Chaotic but organized - controlled chaos!',
        flashcardFront: '🎯 What makes MAT different from atrial fibrillation?',
        flashcardBack: '📊 MAT has discrete, countable P waves with ≥3 different morphologies, rate >100 bpm. A-Fib has no discrete P waves, just chaotic fibrillatory waves. MAT = "organized chaos" vs A-Fib = "complete chaos"!'},
      {
        id: 'who-develops-mat',
        title: 'Who Develops MAT?',
        content: 'Primary associations: COPD exacerbations (most common), Acute respiratory failure, Hypoxemia and hypercapnia, Pneumonia, Pulmonary embolism, Heart failure. MAT is often a sign of severe underlying illness.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/who-gets-mat.jpg',
        imageAlt: 'MAT risk factors',
        hint: '🫁 Think lung disease first!'},

      {
        id: 'mat-diagnostic-criteria',
        title: '📋 MAT Diagnostic Criteria',
        content: "Master the specific criteria needed to diagnose multifocal atrial tachycardia!",
        type: 'steps',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'slide',
        imageUrl: 'images/ecg/medical_accurate/multifocal_atrial_tach_135bpm_2.png',
        imageAlt: 'ECG demonstrating MAT diagnostic criteria',
        hint: '📝 All criteria must be met for MAT diagnosis!',
        steps: [
          "📊 Heart rate >100 bpm (tachycardia component)",
          "👁️ ≥3 different P wave morphologies (multifocal component)",  
          "🔍 Discrete, identifiable P waves (not fibrillatory waves)",
          "📐 Variable PR intervals due to different conduction paths",
          "🎯 Irregular rhythm due to competing atrial foci"
        ]},

      {
        id: 'mat-pathophysiology',
        title: '🧬 MAT Pathophysiology',
        content: "Understanding the mechanisms behind multifocal atrial tachycardia.",
        type: 'accordion',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/pathophysiology.jpg',
        imageAlt: 'Atrial tissue showing multiple ectopic foci in MAT',
        hint: '🔬 Multiple atrial sites competing for control!',
        accordionItems: [
          {
            title: '⚡ Enhanced Automaticity',
            content: 'Multiple atrial sites develop abnormal automaticity. Usually triggered by hypoxemia, electrolyte imbalances, or sympathetic stimulation. Each focus fires independently at different rates.'
          },
          {
            title: '🫁 Pulmonary Disease Connection',
            content: 'Most commonly seen in severe COPD patients. Hypoxemia and hypercapnia trigger ectopic atrial activity. Sympathetic stimulation from respiratory distress contributes.'
          },
          {
            title: '⚖️ Electrolyte Imbalances',
            content: 'Hypokalemia and hypomagnesemia are major triggers. Digitalis toxicity can also cause MAT. These conditions alter cellular membrane stability.'
          },
          {
            title: '💔 Hemodynamic Impact',
            content: 'Loss of atrial kick reduces cardiac output by 15-30%. Irregular ventricular filling compromises hemodynamics. Can precipitate heart failure in vulnerable patients.'
          }
        ]},

      {
        id: 'high-risk-populations',
        title: '👥 High-Risk Populations',
        content: "Who develops MAT and in what clinical contexts?",
        type: 'tabs',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'slide',
        imageUrl: 'images/module2/lesson18/high-risk-populations.jpg',
        imageAlt: 'Clinical settings where MAT commonly occurs',
        hint: '🏥 Know your high-risk patients!',
        tabs: [
          {
            title: '🫁 COPD Patients',
            content: 'Severe chronic obstructive pulmonary disease with exacerbations. Hypoxemia and hypercapnia trigger MAT. Often seen in ICU during respiratory failure.',

            icon: '💊'
          },
          {
            title: '⚖️ Metabolic Disorders',
            content: 'Severe hypokalemia or hypomagnesemia. Hyperthyroidism with cardiac involvement. Diabetic ketoacidosis complications.',
            icon: '⚖️'
          }
        ]},
      {
        id: 'mat-definition',
        title: 'What is Multifocal Atrial Tachycardia?',
        content: 'MAT: Multiple atrial sites firing independently at rapid rates.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fff1f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/mat-definition.jpg',
        imageAlt: 'ECG showing multifocal atrial tachycardia with multiple P wave morphologies',
        hint: '🎯 Multiple P wave shapes at fast rate!'},

      {
        id: 'mat-vs-wap',
        title: 'MAT vs WAP: The Critical Difference',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/mat-vs-wap.jpg',
        imageAlt: 'Comparison showing rate differences between MAT and WAP',
        hint: '🏃‍♂️ Speed makes it dangerous!'},

      {
        id: 'who-gets-mat',
        title: 'Who Develops MAT?',
        content: 'Primary associations: COPD exacerbations (most common), Acute respiratory failure, Hypoxemia and hypercapnia, Pneumonia, Pulmonary embolism, Heart failure. MAT is often a sign of severe systemic illness requiring immediate attention.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/who-gets-mat.jpg',
        imageAlt: 'Patient populations and conditions associated with MAT',
        hint: '🫁 Think lung disease first!'},

      {
        id: 'why-mat-matters',
        title: 'Why MAT Matters Clinically',
        content: 'Clinical significance: Often indicates severe underlying disease, May compromise cardiac output, Can progress to more dangerous rhythms, Reflects systemic stress and illness, Poor prognosis if untreated, Requires aggressive treatment of underlying cause.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/why-matters.jpg',
        imageAlt: 'Clinical implications and importance of MAT recognition',
        hint: '🚨 MAT = sick patient needing help!'},

      {
        id: 'mat-triggers',
        title: 'Common MAT Triggers',
        content: 'Precipitating factors: Hypoxemia (most important), Hypercapnia, Acidosis, Electrolyte abnormalities (Mg, K), Medications (bronchodilators, theophylline), Infection/sepsis, Pulmonary hypertension. Identify and treat triggers!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/triggers.jpg',
        imageAlt: 'Common triggers and precipitating factors for MAT',
        hint: '💨 Fix the lungs, fix the rhythm!'},

      {
        id: 'prognosis-overview',
        title: 'Prognosis and Outcomes',
        content: 'MAT prognosis depends on: Underlying disease severity, Response to treatment, Age and comorbidities, Ability to correct triggers. With appropriate treatment: Often improves as underlying condition resolves, May persist if chronic disease present, Good outcomes possible with early intervention.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#854d0e',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/prognosis.jpg',
        imageAlt: 'Prognosis and outcomes for patients with MAT',
        hint: '🎯 Treat the cause, improve the outcome!',
        audio: {
          narrationUrl: 'audio/module2/lesson18/prognosis-overview.mp3',
          autoPlay: false
        }
      },

      // ==================== UNIT 1 QUIZ: FOUNDATION ====================
      {
        id: 'unit1-foundation-quiz',
        title: '🎯 Unit 1 Quiz: MAT Foundation',
        content: "Test your knowledge of MAT fundamentals!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'slide',
        imageUrl: 'images/module2/lesson18/foundation-quiz.jpg',
        imageAlt: 'MAT foundation quiz',
        hint: '🧠 Test your Unit 1 knowledge!',
        question: "What is the most common underlying condition associated with multifocal atrial tachycardia?",
        options: [
          "Coronary artery disease",
          "COPD exacerbation",
          "Hyperthyroidism",
          "Atrial fibrillation"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! COPD exacerbation is the most common underlying condition associated with MAT, often triggered by hypoxemia, hypercapnia, and respiratory distress."},

      // ================================================
      // 🎯 UNIT 2: PATHOPHYSIOLOGY MECHANISMS (8 slides)
      // ================================================
      {
        id: 'unit2-intro',
        title: '🎯 Unit 2: Pathophysiology Mechanisms',
        content: 'Understand HOW multifocal atrial tachycardia develops! Learn the complex interplay of hypoxia, autonomic stimulation, and atrial irritability that creates this dangerous rhythm.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/pathophysiology-overview.jpg',
        imageAlt: 'Pathophysiology mechanisms overview',
        hint: '🔬 Understanding WHY helps predict WHEN!'},

      {
        id: 'hypoxia-mechanism',
        title: 'Hypoxia: The Primary Driver',
        content: 'Hypoxemia effects on atria: Increased automaticity of atrial foci, Enhanced sensitivity to catecholamines, Shortened refractory periods, Multiple ectopic pacemakers emerge, Loss of sinus node dominance, Chaotic but organized atrial activity. Oxygen is the key to prevention!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/hypoxia-mechanism.jpg',
        imageAlt: 'Effects of hypoxia on atrial electrophysiology',
        hint: '💨 No oxygen = angry atria!'},

      {
        id: 'catecholamine-surge',
        title: 'Catecholamine Surge Effects',
        content: 'Stress response creates: Massive sympathetic stimulation, Increased circulating catecholamines, Enhanced atrial automaticity, Competing pacemaker sites, Loss of normal hierarchy, Multiple foci firing simultaneously. The heart\'s electrical system becomes overwhelmed!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/catecholamine-surge.jpg',
        imageAlt: 'Catecholamine effects on atrial electrophysiology',
        hint: '⚡ Stress hormones = electrical chaos!'},

      {
        id: 'acid-base-effects',
        title: 'Acid-Base and Electrolyte Effects',
        content: 'Metabolic disturbances: Acidosis → Enhanced automaticity, Hypokalemia → Increased ectopy, Hypomagnesemia → Membrane instability, Hypercapnia → Sympathetic stimulation, Hypophosphatemia → Cellular dysfunction. Multiple metabolic hits create perfect storm!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/acid-base-effects.jpg',
        imageAlt: 'Metabolic disturbances contributing to MAT',
        hint: '⚖️ Chemical chaos = electrical chaos!'},

      {
        id: 'multiple-foci-competition',
        title: 'Multiple Foci Competition',
        content: 'Atrial anarchy: Normal: Sinus node dominates, suppresses other sites. In MAT: Multiple sites escape suppression, Each focus fires independently, No single dominant pacemaker, Chaotic but organized rhythm, All trying to be the leader simultaneously!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/multiple-foci.jpg',
        imageAlt: 'Multiple competing atrial foci in MAT',
        hint: '👥 Too many chiefs, no Indians!'},

      {
        id: 'medication-contributions',
        title: 'Medication-Induced MAT',
        content: 'Culprit medications: Bronchodilators (albuterol, isoproterenol), Theophylline (narrow therapeutic window), Dopamine and dobutamine, Digoxin toxicity, Excessive caffeine. These enhance automaticity and lower threshold for ectopy.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/medication-contributions.jpg',
        imageAlt: 'Medications that can precipitate MAT',
        hint: '💊 Some meds make atria hyperexcitable!'},

      {
        id: 'refractory-period-changes',
        title: 'Refractory Period Alterations',
        content: 'Cellular changes in MAT: Shortened effective refractory periods, Dispersion of refractoriness, Enhanced automaticity phase 4, Calcium handling abnormalities, Sodium channel effects, Loss of normal electrical stability. The atria become electrically unstable.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#854d0e',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/refractory-changes.jpg',
        imageAlt: 'Cellular electrophysiologic changes in MAT',
        hint: '⚡ Shortened refractory = more chaos!'},

      {
        id: 'vicious-cycle',
        title: 'The MAT Vicious Cycle',
        content: 'Self-perpetuating cycle: Hypoxia → MAT → Increased oxygen demand → Worsening hypoxia → More MAT. Breaking this cycle requires: Aggressive oxygenation, Treatment of underlying disease, Rate control if needed, Electrolyte correction. Stop the cycle early!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/vicious-cycle.jpg',
        imageAlt: 'Vicious cycle of hypoxia and MAT',
        hint: '🔄 Break the cycle before it gets worse!'},

      // ==================== UNIT 2 QUIZ: PATHOPHYSIOLOGY ====================
      {
        id: 'unit2-pathophysiology-quiz',
        title: '🎯 Unit 2 Quiz: Pathophysiology',
        content: "Test your understanding of MAT mechanisms!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'slide',
        imageUrl: 'images/module2/lesson18/pathophysiology-quiz.jpg',
        imageAlt: 'Pathophysiology quiz',
        hint: '🧠 Test your Unit 2 knowledge!',
        question: "What is the primary pathophysiologic mechanism that triggers multifocal atrial tachycardia?",
        options: [
          "Coronary artery occlusion",
          "Hypoxemia and increased catecholamine stimulation",
          "Electrolyte abnormalities alone",
          "Structural heart disease"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Hypoxemia is the primary trigger, leading to increased catecholamine release and enhanced atrial automaticity, creating multiple competing pacemaker foci in the atria."},

      // ===============================================
      // 🎯 UNIT 3: ECG RECOGNITION MASTERY (8 slides)
      // ===============================================
      {
        id: 'unit3-intro',
        title: '🎯 Unit 3: ECG Recognition Mastery',
        content: 'Become an expert at distinguishing MAT from atrial fibrillation! Master the critical ECG features that separate these two important arrhythmias in emergency situations.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/recognition-overview.jpg',
        imageAlt: 'ECG recognition mastery overview',
        hint: '👁️ Recognition skills save lives!'},

      {
        id: 'p-wave-recognition',
        title: 'P Wave Recognition: The Key',
        content: 'MAT P wave features: ≥3 different morphologies clearly visible, Discrete P waves (not fused), Isoelectric baseline between P waves, Variable shapes, sizes, and axes, All recognizable as distinct P waves. If you can count and categorize P waves = MAT!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/p-wave-recognition.jpg',
        imageAlt: 'Clear P wave morphologies in MAT with annotations',
        hint: '🔍 Count the different P wave shapes!'},

      {
        id: 'rate-assessment-mat',
        title: 'Rate Assessment in MAT',
        content: 'Rate characteristics: Atrial rate >100 bpm (usually 100-180), Ventricular rate usually similar (1:1 conduction), Irregularly irregular pattern, Rate may fluctuate with clinical condition, Fast but not as fast as atrial flutter. Document both atrial and ventricular rates.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/rate-assessment.jpg',
        imageAlt: 'Rate assessment techniques in MAT',
        hint: '📊 Fast and irregular but organized!'},

      {
        id: 'pr-interval-variability',
        title: 'PR Interval Variability',
        content: 'PR characteristics in MAT: Variable PR intervals (different for each morphology), All within normal range (0.12-0.20 sec usually), Reflects different atrial sites and conduction paths, Consistent pattern for each P wave type, No progressive lengthening. Variability is expected and normal.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/pr-variability.jpg',
        imageAlt: 'PR interval variability patterns in MAT',
        hint: '📏 Different P waves = different PR intervals!'},

      {
        id: 'mat-vs-afib-recognition',
        title: 'MAT vs A-Fib: The Critical Distinction',
        content: 'Visual differences: MAT: Clear P waves visible, Isoelectric baseline, Countable morphologies. A-Fib: No clear P waves, Wavy/fibrillatory baseline, Cannot count discrete atrial activity. This distinction determines treatment approach!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/atrial_fibrillation_70bpm_1.png',
        imageAlt: 'Side-by-side visual comparison of MAT and atrial fibrillation',
        hint: '👀 Can you see P waves? = MAT!'},

      {
        id: 'lead-selection-analysis',
        title: 'Optimal Lead Selection',
        content: 'Best leads for MAT analysis: Lead II: Usually best for P wave analysis, Lead V1: Excellent for atrial activity, Lead aVR: May show different morphologies clearly, Rhythm strips: Use longest available strip. Avoid leads with poor P wave visibility.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/lead-selection.jpg',
        imageAlt: 'Optimal ECG lead selection for MAT analysis',
        hint: '📊 Right lead = clear diagnosis!'},

      {
        id: 'measurement-standards',
        title: 'Measurement Standards',
        content: 'Essential measurements: Count distinct P wave morphologies (≥3 required), Measure atrial rate (>100 bpm), Assess R-R irregularity pattern, Document PR interval ranges, Note baseline characteristics, Calculate ventricular response. Systematic approach ensures accuracy.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#854d0e',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/measurement-standards.jpg',
        imageAlt: 'Systematic measurement approach for MAT',
        hint: '📐 Measure systematically for accuracy!'},

      {
        id: 'recognition-pitfalls',
        title: 'Common Recognition Pitfalls',
        content: 'Avoid these mistakes: Confusing with A-fib (look for P waves!), Missing subtle morphology differences, Calling it sinus tach with PACs, Not measuring rate accurately, Ignoring clinical context, Missing underlying disease clues. Stay systematic and careful!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/recognition-pitfalls.jpg',
        imageAlt: 'Common mistakes in MAT recognition and how to avoid them',
        hint: '⚠️ Don\'t fall into these traps!'},

      // ==================== UNIT 3 QUIZ: RECOGNITION ====================
      {
        id: 'unit3-recognition-quiz',
        title: '🎯 Unit 3 Quiz: ECG Recognition',
        content: "Test your MAT recognition skills!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'slide',
        imageUrl: 'images/module2/lesson18/recognition-quiz.jpg',
        imageAlt: 'ECG recognition quiz',
        hint: '🧠 Test your Unit 3 knowledge!',
        question: "What is the key ECG feature that distinguishes MAT from atrial fibrillation?",
        options: [
          "Heart rate differences",
          "Presence of clear, discrete P waves in MAT",
          "QRS width variations",
          "PR interval patterns only"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! The key distinguishing feature is that MAT has clear, discrete P waves with multiple morphologies, while atrial fibrillation has no discrete P waves and shows chaotic fibrillatory activity."},

      // ================================================
      // 🎯 UNIT 4: MAT CLASSIFICATION SYSTEM (6 slides)
      // ================================================
      {
        id: 'unit4-intro',
        title: '🎯 Unit 4: MAT Classification System',
        content: 'Master the classification of multifocal atrial tachycardia! Learn severity grading, underlying cause categories, and prognostic indicators.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/classification-overview.jpg',
        imageAlt: 'MAT classification system overview',
        hint: '📂 Classification guides treatment urgency!'},

      {
        id: 'severity-classification',
        title: 'Severity Classification',
        content: 'Mild MAT: Rate 100-130 bpm, Minimal symptoms, Stable hemodynamics. Moderate MAT: Rate 130-160 bpm, Some symptoms, Stable but concerning. Severe MAT: Rate >160 bpm, Significant symptoms, Hemodynamic compromise, Requires urgent intervention.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/severity-classification.jpg',
        imageAlt: 'Severity grading system for MAT',
        hint: '🌡️ Rate and symptoms determine urgency!'},

      {
        id: 'etiology-based-classification',
        title: 'Etiology-Based Classification',
        content: 'Respiratory MAT: COPD, pneumonia, PE, respiratory failure. Cardiac MAT: Heart failure, ischemia, valvular disease. Metabolic MAT: Electrolyte disorders, acid-base problems. Toxic MAT: Medications, stimulants, toxins. Treatment targets the underlying cause.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/etiology-classification.jpg',
        imageAlt: 'Classification based on underlying etiology',
        hint: '🎯 Know the cause to guide treatment!'},

      {
        id: 'acute-vs-chronic',
        title: 'Acute vs Chronic MAT',
        content: 'Acute MAT: Sudden onset, Often reversible, Associated with acute illness, Good prognosis if cause treated. Chronic MAT: Persistent pattern, Associated with chronic disease, May require long-term management, Prognosis depends on underlying condition.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/acute-chronic.jpg',
        imageAlt: 'Acute versus chronic MAT characteristics',
        hint: '⏰ Timing affects prognosis and treatment!'},

      {
        id: 'hemodynamic-classification',
        title: 'Hemodynamic Classification',
        content: 'Stable MAT: Normal blood pressure, Good perfusion, Minimal symptoms. Unstable MAT: Hypotension, Poor perfusion, Chest pain, dyspnea, Altered mental status, Requires immediate intervention. Stability determines treatment approach urgency.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/hemodynamic-classification.jpg',
        imageAlt: 'Hemodynamic stability classification in MAT',
        hint: '💓 Stable vs unstable = different urgency!'},

      {
        id: 'prognostic-classification',
        title: 'Prognostic Classification',
        content: 'Good prognosis: Reversible cause identified, Responds to treatment, Young patient, Minimal comorbidities. Poor prognosis: Irreversible underlying disease, Multiple organ dysfunction, Advanced age, Multiple comorbidities, Recurrent episodes.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/prognostic-classification.jpg',
        imageAlt: 'Prognostic indicators in MAT',
        hint: '🔮 Prognosis guides goals of care!'},

      // ==================== UNIT 4 QUIZ: CLASSIFICATION ====================
      {
        id: 'unit4-classification-quiz',
        title: '🎯 Unit 4 Quiz: Classification',
        content: "Test your knowledge of MAT classification!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'slide',
        imageUrl: 'images/module2/lesson18/classification-quiz.jpg',
        imageAlt: 'Classification quiz',
        hint: '🧠 Test your Unit 4 knowledge!',
        question: "What determines whether MAT is classified as severe?",
        options: [
          "Number of P wave morphologies only",
          "Rate >160 bpm with hemodynamic compromise",
          "Presence of underlying lung disease",
          "Duration of the arrhythmia"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Severe MAT is classified by rate >160 bpm combined with hemodynamic compromise or significant symptoms, requiring urgent intervention."},

      // ================================================
      // 🎯 UNIT 5: DIFFERENTIAL DIAGNOSIS (7 slides)
      // ================================================
      {
        id: 'unit5-intro',
        title: '🎯 Unit 5: Differential Diagnosis',
        content: 'Master distinguishing MAT from other rapid irregular rhythms! This unit is critical for emergency medicine and preventing misdiagnosis.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/differential-overview.jpg',
        imageAlt: 'Differential diagnosis overview',
        hint: '🔍 Accurate diagnosis = appropriate treatment!'},

      {
        id: 'vs-atrial-fibrillation-detailed',
        title: 'vs Atrial Fibrillation (Detailed)',
        content: 'MAT: Discrete P waves (≥3 morphologies), Isoelectric baseline visible, Organized chaos, Often with lung disease. A-Fib: No discrete P waves, Fibrillatory waves/flat baseline, True chaos, Various etiologies. Treatment approaches are completely different!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/atrial_fibrillation_85bpm_2.png',
        imageAlt: 'Detailed comparison between MAT and atrial fibrillation',
        hint: '🔍 P waves present = MAT, absent = A-fib!'},

      {
        id: 'vs-atrial-flutter-with-block',
        title: 'vs Atrial Flutter with Variable Block',
        content: 'MAT: Multiple P wave morphologies, Rate ~100-180 bpm, 1:1 conduction usually. A-Flutter: Uniform flutter waves, Rate ~300 bpm atrial, Variable AV block (2:1, 3:1, 4:1), Sawtooth pattern. Flutter is much more organized.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/atrial_flutter_75bpm_1.png',
        imageAlt: 'Comparison between MAT and atrial flutter',
        hint: '🪚 Flutter = sawtooth, MAT = multiple shapes!'},

      {
        id: 'vs-sinus-tach-with-pacs',
        title: 'vs Sinus Tachycardia with PACs',
        content: 'MAT: Multiple morphologies throughout, Irregularly irregular, No dominant morphology. Sinus Tach + PACs: Dominant sinus P waves, Regular underlying rhythm, Early beats interrupt, Compensatory pauses, Clear interruption pattern.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/vs-sinus-pacs.jpg',
        imageAlt: 'Comparison between MAT and sinus tachycardia with PACs',
        hint: '⚡ PACs interrupt, MAT is continuously chaotic!'},

      {
        id: 'vs-wandering-atrial-tachycardia',
        title: 'vs Wandering Atrial Tachycardia',
        content: 'These are the SAME condition! WAP: Rate <100 bpm (benign). WAT/MAT: Rate >100 bpm (pathologic). Same mechanism, different rate. The terminology can be confusing, but remember: rate determines clinical significance.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/vs-wat.jpg',
        imageAlt: 'Relationship between WAP, WAT, and MAT',
        hint: '📊 Same condition, different speeds!'},

      {
        id: 'vs-junctional-tachycardia',
        title: 'vs Junctional Tachycardia',
        content: 'MAT: Multiple atrial P wave morphologies, P waves clearly visible. Junctional Tach: No P waves visible (hidden in QRS), OR inverted P waves after QRS, Regular rhythm, Narrow QRS, Different mechanism entirely.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/vs-junctional.jpg',
        imageAlt: 'Comparison between MAT and junctional tachycardia',
        hint: '🔍 P wave location tells the story!'},

      {
        id: 'diagnostic-algorithm-comprehensive',
        title: 'Comprehensive Diagnostic Algorithm',
        content: 'Step 1: Fast rate (>100 bpm)? Step 2: Regular or irregular? Step 3: P waves visible? Step 4: How many P morphologies? Step 5: What\'s the clinical context? MAT = Fast + Irregular + ≥3 P morphologies + Often lung disease!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#854d0e',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/diagnostic-algorithm.jpg',
        imageAlt: 'Comprehensive step-by-step diagnostic algorithm',
        hint: '✅ Systematic approach prevents errors!'},

      // ==================== UNIT 5 QUIZ: DIFFERENTIAL DIAGNOSIS ====================
      {
        id: 'unit5-differential-quiz',
        title: '🎯 Unit 5 Quiz: Differential Diagnosis',
        content: "Test your differential diagnosis mastery!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'slide',
        imageUrl: 'images/module2/lesson18/differential-quiz.jpg',
        imageAlt: 'Differential diagnosis quiz',
        hint: '🧠 Test your Unit 5 knowledge!',
        question: "A patient presents with a rapid irregular rhythm. You see discrete P waves with 4 different morphologies. What is the most likely diagnosis?",
        options: [
          "Atrial fibrillation",
          "Atrial flutter with variable block",
          "Multifocal atrial tachycardia",
          "Sinus tachycardia with PACs"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! The presence of discrete P waves with multiple morphologies (≥3) in a rapid irregular rhythm is diagnostic of multifocal atrial tachycardia."},

      // ===============================================
      // 🎯 UNIT 6: CLINICAL MANAGEMENT (7 slides)
      // ===============================================
      {
        id: 'unit6-intro',
        title: '🎯 Unit 6: Clinical Management',
        content: 'Master the management of multifocal atrial tachycardia! Learn emergency treatment, underlying cause management, and long-term care strategies.',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/management-overview.jpg',
        imageAlt: 'Clinical management overview',
        hint: '⚕️ Treatment saves lives!'},

      {
        id: 'primary-treatment-principles',
        title: 'Primary Treatment Principles',
        content: 'Treatment hierarchy: 1) Treat underlying cause (most important!), 2) Optimize oxygenation and ventilation, 3) Correct electrolyte abnormalities, 4) Rate control if needed, 5) Avoid cardioversion (ineffective). The underlying disease is the real problem!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/treatment-principles.jpg',
        imageAlt: 'Primary treatment principles for MAT',
        hint: '🎯 Treat the cause, not just the rhythm!'},

      {
        id: 'oxygenation-ventilation',
        title: 'Oxygenation and Ventilation',
        content: 'Respiratory management: Supplemental oxygen to SaO2 >90%, Bronchodilators for COPD exacerbation, Diuretics for pulmonary edema, BIPAP/mechanical ventilation if needed, Treat pneumonia aggressively, Address pulmonary embolism. Fix the lungs, fix the rhythm!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/oxygenation.jpg',
        imageAlt: 'Respiratory management strategies for MAT',
        hint: '💨 Oxygen is the best antiarrhythmic!'},

      {
        id: 'electrolyte-correction',
        title: 'Electrolyte Correction',
        content: 'Critical electrolytes: Magnesium: Target >2.0 mg/dL (most important), Potassium: Target 4.0-5.0 mEq/L, Phosphorus: Correct if low, Calcium: Normalize if abnormal. Magnesium is especially important - many patients are deficient and it\'s easily correctable!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/electrolytes.jpg',
        imageAlt: 'Electrolyte correction strategies in MAT',
        hint: '🧪 Magnesium is the magic bullet!'},

      {
        id: 'rate-control-options',
        title: 'Rate Control When Needed',
        content: 'First-line agents: Metoprolol (cardioselective beta-blocker), Diltiazem (calcium channel blocker). Avoid: Non-selective beta-blockers (may worsen bronchospasm), Digoxin (limited efficacy), Amiodarone (not first-line). Use cautiously in COPD patients!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/rate-control.jpg',
        imageAlt: 'Rate control medication options for MAT',
        hint: '💊 Careful drug choice in lung disease!'},

      {
        id: 'what-not-to-do',
        title: 'What NOT to Do in MAT',
        content: 'Avoid these mistakes: Cardioversion (ineffective and dangerous), Non-selective beta-blockers in COPD, Aggressive rate control without treating cause, Ignoring underlying disease, Anticoagulation like A-fib (different rules), Digoxin as first-line. Focus on the fundamentals!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/what-not-to-do.jpg',
        imageAlt: 'Common mistakes to avoid in MAT management',
        hint: '⛔ Don\'t make these dangerous mistakes!'},

      {
        id: 'long-term-management',
        title: 'Long-Term Management',
        content: 'Follow-up strategy: Optimize chronic disease management, Continue appropriate medications, Monitor for recurrence, Address modifiable risk factors, Patient education about triggers, Regular cardiology/pulmonary follow-up. Prevention is better than treatment!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fefce8',
        textColor: '#854d0e',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/long-term.jpg',
        imageAlt: 'Long-term management strategies for MAT',
        hint: '🎯 Prevent recurrence with good chronic care!'},

      // ==================== UNIT 6 QUIZ: CLINICAL MANAGEMENT ====================
      {
        id: 'unit6-management-quiz',
        title: '🎯 Unit 6 Quiz: Clinical Management',
        content: "Test your management knowledge!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'slide',
        imageUrl: 'images/module2/lesson18/management-quiz.jpg',
        imageAlt: 'Clinical management quiz',
        hint: '🧠 Test your Unit 6 knowledge!',
        question: "What is the most important initial treatment for multifocal atrial tachycardia?",
        options: [
          "Immediate cardioversion",
          "High-dose beta-blockers",
          "Treat the underlying cause (especially oxygenation)",
          "Urgent anticoagulation"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! The most important treatment is addressing the underlying cause, especially ensuring adequate oxygenation and treating the precipitating condition (often COPD exacerbation)."},

      // ==================== COMPREHENSIVE FINAL ASSESSMENT ====================
      {
        id: 'comprehensive-final-assessment',
        title: '🏆 Comprehensive MAT Mastery Assessment',
        content: "Test your complete understanding of multifocal atrial tachycardia!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#dc2626',
        animation: 'slide',
        imageUrl: 'images/ecg/medical_accurate/multifocal_atrial_tach_120bpm_1.png',
        imageAlt: 'Comprehensive MAT assessment quiz',
        hint: '🧠 Demonstrate your complete MAT mastery!',
        question: "A 72-year-old COPD patient has a rhythm with rate 125 bpm, 4 different P wave morphologies, irregular intervals. O2 sat 82%, K+ 2.8, Mg 1.4. What is the BEST immediate management approach?",
        options: [
          "Immediate cardioversion for rate control",
          "IV metoprolol 5mg for rate control", 
          "Oxygen therapy + IV magnesium + potassium replacement",
          "Immediate anticoagulation like atrial fibrillation"
        ],
        correctAnswer: 2,
        explanation: "✅ Excellent comprehensive management! This is classic MAT in COPD. Priority is: 1) Oxygen for hypoxemia (primary trigger), 2) Magnesium replacement (critical for MAT), 3) Potassium correction. Treating underlying causes often resolves MAT without rate control medications."},

      {
        id: 'clinical-integration-challenge',
        title: '🎯 Clinical Integration Challenge',
        content: "Apply your knowledge to differentiate MAT from similar rhythms!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'slide',
        imageUrl: 'images/ecg/medical_accurate/multifocal_atrial_tach_135bpm_2.png',
        imageAlt: 'Clinical integration challenge',
        hint: '🏥 Real-world differential diagnosis skills!',
        question: "What is the BEST way to differentiate MAT from atrial fibrillation in a critically ill patient?",
        options: [
          "Both look identical and require same treatment",
          "MAT has discrete P waves with multiple morphologies; A-fib has no discrete P waves",
          "MAT only occurs in young patients; A-fib only in elderly",
          "Rate is always faster in A-fib than MAT"
        ],
        correctAnswer: 1,
        explanation: "✅ Perfect clinical reasoning! The key differentiator is P wave morphology: MAT has discrete, countable P waves with ≥3 different shapes vs A-fib has chaotic fibrillatory waves with no discrete P waves. This distinction is crucial for management decisions."},

      {
        id: 'emergency-management-quiz',
        title: '🚨 Emergency Management Challenge',
        content: "Test your critical care decision-making skills!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'slide',
        imageUrl: 'images/module2/lesson18/emergency-scenario.jpg',
        imageAlt: 'Emergency management challenge',
        hint: '⚡ Critical care priorities matter!',
        question: "A patient with MAT is hemodynamically unstable. What is the MOST important principle?",
        options: [
          "Cardioversion is first-line for hemodynamic instability",
          "Immediate anticoagulation to prevent stroke",
          "Treat underlying causes while providing supportive care",
          "High-dose beta-blockers for aggressive rate control"
        ],
        correctAnswer: 2,
        explanation: "✅ Excellent emergency management! Even when hemodynamically unstable, MAT management focuses on treating underlying causes (hypoxemia, electrolytes, infections) while providing supportive care. Cardioversion is ineffective for MAT, and aggressive rate control can worsen hemodynamics in critically ill patients."},

      // Final Integration Slide
      {
        id: 'mat-mastery-complete',
        title: '🏆 Multifocal Atrial Tachycardia Mastery Complete!',
        content: 'Outstanding! You\'ve mastered all 6 units of multifocal atrial tachycardia. You understand the pathophysiology, can distinguish it from atrial fibrillation, recognize ECG patterns, classify severity, know the differential diagnosis, and can apply appropriate management strategies. You\'re ready for critical arrhythmia care!',
        type: 'text',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: 'images/module2/lesson18/mat-mastery-complete.jpg',
        imageAlt: 'Completion celebration - MAT mastery achieved',
        hint: '🎉 You\'re now a MAT expert - ready for emergency medicine!',
        audio: {
          narrationUrl: 'audio/module2/lesson18/mat-mastery-complete.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "🏆 Congratulations! You've mastered multifocal atrial tachycardia through 6 comprehensive units! You understand it's a serious arrhythmia often indicating severe illness, know the complex pathophysiology, can distinguish it from atrial fibrillation, classify severity, differentiate from other rhythms, and apply appropriate emergency management focusing on underlying causes.",
    keyPoints: [
      "MAT shows ≥3 different P wave morphologies with rate >100 bpm - key distinction from atrial fibrillation",
      "Most commonly associated with COPD exacerbation and respiratory failure",
      "Pathophysiology involves hypoxemia, catecholamine surge, and multiple competing atrial foci",
      "Critical distinction: MAT has discrete P waves, A-fib has no discrete P waves",
      "Treatment focuses on underlying cause: oxygenation, electrolyte correction (especially Mg), bronchodilators",
      "Avoid cardioversion (ineffective) and non-selective beta-blockers in COPD patients",
      "Prognosis depends on successful treatment of underlying disease - often reversible"
    ],
    resources: [
      {
        title: "Advanced MAT vs A-Fib Recognition",
        url: "https://youtube.com/watch?v=mat_mastery_emergency",
        type: "video"
      },
      {
        title: "Emergency Management of Rapid Atrial Rhythms",
        url: "https://example.com/rapid-atrial-management",
        type: "article"
      },
      {
        title: "ECG Practice: Complex Atrial Arrhythmias",
        url: "https://example.com/atrial-arrhythmia-practice",
        type: "tool"
      }
    ]
  },
  tasks: [
    // Tasks will be automatically generated from quiz slides
    {
      id: 'multifocal-atrial-tachycardia-mastery-assessment',
      type: 'quiz',
      xp: 50,
      audio: null,
      images: {
        mainImage: 'images/module2/lesson18/final-assessment.jpg',
        slideImages: [
          {
            slideId: 'final-assessment',
            imageUrl: 'images/module2/lesson18/comprehensive-mat-case.jpg',
            imageAlt: 'Comprehensive MAT case with ECG and clinical scenario',
            caption: 'Apply all your MAT knowledge to this critical case'
          }
        ]
      },
      content: {
        question: 'A 68-year-old COPD patient presents with dyspnea and this rhythm: rate 140 bpm, irregularly irregular, 4 different P wave morphologies visible with isoelectric baseline. Oxygen saturation is 85%. What is your immediate priority?',
        options: [
          'Immediate cardioversion',
          'IV beta-blocker for rate control',
          'Oxygen therapy and bronchodilator treatment',
          'Urgent anticoagulation'
        ],
        correctAnswer: 2,
        explanation: 'Perfect! This is MAT (4 P wave morphologies, fast irregular rate) in a COPD patient. The immediate priority is treating the underlying cause: oxygen therapy for hypoxemia and bronchodilator treatment for COPD exacerbation. MAT often resolves when the underlying respiratory problem is addressed.',
        hint: '🫁 COPD + MAT + hypoxemia = treat the lungs first!',
        completionMessage: 'Outstanding! 🎉 You\'ve achieved multifocal atrial tachycardia mastery! You can distinguish MAT from other arrhythmias and know the critical management priorities. +50 XP! 🏆',
        retryMessage: 'Remember: In MAT, always treat the underlying cause first - especially respiratory issues in COPD patients.',
        celebrationAnimation: 'emergency-medicine-hero'
      }
    }
  ],
  completed: false,
  attempts: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
