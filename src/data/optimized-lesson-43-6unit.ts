import { Lesson } from '../types/learning';

export const optimizedLesson43: Lesson = {
  id: 'lesson-5-5-optimized',
  moduleId: 'module-5',
  title: "Intraventricular Conduction Delays",
  description: "Master intraventricular conduction delays comprehensively through 6 focused learning units with enhanced interactive elements: IVCD fundamentals and classification, pathophysiology with audio, advanced ECG pattern recognition, clinical significance with audio, management approaches, and expert mastery with celebration audio",
  order: 5,
  estimatedTime: 45,
  content: {
    type: 'mixed',
    introduction: "🎯 Welcome to Intraventricular Conduction Delays Mastery! Master IVCD comprehensively through 6 progressive units with enhanced interactive elements, strategic audio, and real ECG integration from our extensive clinical database.",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your IVCD Learning Journey",
        content: "UNIT 1: IVCD Fundamentals & Classification → UNIT 2: Pathophysiology + Audio → UNIT 3: Advanced ECG Pattern Recognition → UNIT 4: Clinical Significance + Audio → UNIT 5: Management Approaches → UNIT 6: Expert Mastery + Celebration Audio",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // ===============================================
      // 🎯 UNIT 1: IVCD FUNDAMENTALS & CLASSIFICATION (7 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: IVCD Fundamentals & Classification',
        content: 'Master intraventricular conduction delay fundamentals! Understand the spectrum of IVCD patterns and their significance.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/rbbb_70bpm_1.png',
        hint: '⚡ Master IVCD foundations!'
      },
      
      {
        id: 'ivcd-definition-flashcard',
        title: '🧠 IVCD Definition and Scope',
        content: 'Understanding intraventricular conduction delays',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🔄',
          question: 'What constitutes an intraventricular conduction delay (IVCD)?',
          answer: 'IVCD: ANY abnormal delay in ventricular depolarization. QRS DURATION: ≥120ms (some sources ≥110ms). PATTERNS: May be specific (LBBB, RBBB) or nonspecific. MECHANISM: Delayed conduction through ventricular myocardium or specialized conduction system.',
          imageUrl: '/lessonimages/module5/lesson43/ivcd-definition.jpg'
        },
        hint: '🧠 Flip to understand IVCD scope!'
      },

      {
        id: 'ivcd-classification-tabs',
        title: 'IVCD Classification System',
        content: 'Systematic approach to IVCD categorization',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        tabs: [
          {
            title: 'Specific IVCD',
            content: 'Complete LBBB or RBBB patterns. Meets all morphologic criteria. Clear bundle branch involvement. Predictable activation sequence.',
            icon: '🎯'
          },
          {
            title: 'Nonspecific IVCD',
            content: 'Wide QRS without LBBB/RBBB criteria. Various morphology patterns. Multiple conduction abnormalities. Less predictable activation.',
            icon: '❓'
          },
          {
            title: 'Incomplete IVCD',
            content: 'QRS 100-119ms duration. Some morphology features present. Partial conduction delay. May progress to complete block.',
            icon: '🔶'
          }
        ],
        hint: '📑 Systematic IVCD classification!'
      },

      {
        id: 'complete-vs-incomplete-steps',
        title: 'Complete vs Incomplete IVCD',
        content: 'Distinguishing complete from incomplete patterns',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Complete IVCD (≥120ms)',
            description: 'Meets all duration criteria. Full morphologic pattern present. Complete conduction block.'
          },
          {
            number: 2,
            title: 'Incomplete IVCD (100-119ms)',
            description: 'Partial duration prolongation. Some morphologic features. Incomplete conduction delay.'
          },
          {
            number: 3,
            title: 'Clinical Significance',
            description: 'Complete IVCD more clinically significant. Incomplete may progress over time. Both require evaluation.'
          },
          {
            number: 4,
            title: 'Management Implications',
            description: 'Complete IVCD affects CRT eligibility. Incomplete usually observation. Monitor for progression.'
          }
        ],
        hint: '👣 Duration determines classification!'
      },

      {
        id: 'nonspecific-ivcd-characteristics',
        title: 'Nonspecific IVCD Characteristics',
        content: 'DEFINITION: Wide QRS not meeting LBBB/RBBB criteria. MORPHOLOGY: Variable patterns across leads. PREVALENCE: ~30% of wide QRS complexes. SIGNIFICANCE: Often indicates extensive myocardial disease or multiple conduction abnormalities.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson43/nonspecific-ivcd.jpg',
        hint: '🔍 Variable patterns, important implications!'
      },

      {
        id: 'ivcd-mechanisms-accordion',
        title: 'IVCD Development Mechanisms',
        content: 'Understanding how IVCD develops',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Bundle Branch Disease',
            content: 'Fibrosis of conduction system. Age-related degeneration. Ischemic damage. Primary electrical disease.',
            icon: '🌲'
          },
          {
            title: 'Myocardial Disease',
            content: 'Cardiomyopathy with conduction effects. Myocardial scarring from infarction. Infiltrative diseases. Inflammatory conditions.',
            icon: '💔'
          },
          {
            title: 'Metabolic Causes',
            content: 'Electrolyte abnormalities. Drug effects. Toxins. Hypothermia. Usually reversible.',
            icon: '⚗️'
          },
          {
            title: 'Congenital Causes',
            content: 'Congenital heart disease. Inherited conduction disorders. Developmental abnormalities. Present from birth.',
            icon: '🧬'
          }
        ],
        hint: '🎯 Click to explore mechanisms!'
      },

      {
        id: 'ivcd-prevalence-demographics',
        title: 'IVCD Prevalence and Demographics',
        content: 'POPULATION PREVALENCE: 0.5-2% in general population. AGE RELATIONSHIP: Increases significantly with age. GENDER: Slightly more common in males. DISEASE ASSOCIATION: Strong correlation with structural heart disease.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson43/prevalence-demographics.jpg',
        hint: '📊 Age and disease strongly linked!'
      },

      {
        id: 'unit1-quiz',
        title: 'Unit 1 Quiz: IVCD Fundamentals',
        content: 'Test your IVCD classification knowledge!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'Nonspecific intraventricular conduction delay is characterized by:',
        options: [
          'QRS duration <100ms with normal morphology',
          'QRS duration ≥120ms not meeting LBBB or RBBB criteria',
          'QRS duration 100-119ms with RBBB pattern',
          'Normal QRS duration with axis deviation'
        ],
        correctAnswer: 1,
        explanation: 'Correct! Nonspecific IVCD is defined as QRS duration ≥120ms that does not meet the specific morphologic criteria for complete LBBB or RBBB patterns.',
        imageUrl: '/lessonimages/module5/lesson43/unit1-quiz.jpg',
        hint: '🎯 Think about wide QRS without specific pattern!'
      },

      // ===============================================
      // 🎯 UNIT 2: PATHOPHYSIOLOGY + AUDIO (8 slides)
      // ===============================================
      {
        id: 'unit2-intro',
        title: '🎯 Unit 2: IVCD Pathophysiology + Audio',
        content: 'Discover IVCD pathophysiology! Master the electrical and mechanical consequences of intraventricular conduction delays.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson43/pathophysiology-overview.jpg',
        hint: '⚙️ Understand IVCD mechanisms!'
      },

      {
        id: 'ivcd-pathophysiology-audio',
        title: '🎧 IVCD Pathophysiology Explained',
        content: 'Listen to detailed explanation of intraventricular conduction delay mechanisms',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module5/lesson43/ivcd-pathophysiology.mp3',
        hint: '🎧 Audio guide to IVCD mechanisms!'
      },

      {
        id: 'electrical-consequences-steps',
        title: 'Electrical Consequences of IVCD',
        content: 'Understanding electrical effects of conduction delays',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Prolonged Depolarization',
            description: 'QRS duration ≥120ms indicates delayed ventricular activation'
          },
          {
            number: 2,
            title: 'Altered Activation Sequence',
            description: 'Abnormal spread of electrical impulse through ventricles'
          },
          {
            number: 3,
            title: 'QRS Morphology Changes',
            description: 'Various patterns depending on location and extent of delay'
          },
          {
            number: 4,
            title: 'Repolarization Abnormalities',
            description: 'Secondary ST-T changes following altered depolarization'
          }
        ],
        hint: '👣 Electrical cascade of IVCD!'
      },

      {
        id: 'mechanical-consequences-accordion',
        title: 'Mechanical Consequences of IVCD',
        content: 'Understanding hemodynamic effects',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Ventricular Dyssynchrony',
            content: 'Uncoordinated ventricular contraction. Reduced ejection efficiency. Wasted mechanical energy. Primary cause of hemodynamic compromise.',
            icon: '💔'
          },
          {
            title: 'Reduced Stroke Volume',
            content: 'Decreased cardiac output. Impaired ventricular filling. Reduced ejection fraction. Particularly problematic with underlying heart disease.',
            icon: '📉'
          },
          {
            title: 'Mitral Regurgitation',
            content: 'Papillary muscle dysfunction. Altered ventricular geometry. Functional MR development. Worsens hemodynamic status.',
            icon: '🌊'
          },
          {
            title: 'Heart Failure Progression',
            content: 'Accelerated HF development. Worsened symptoms. Increased hospitalization risk. Target for cardiac resynchronization.',
            icon: '🚨'
          }
        ],
        hint: '🎯 Click for mechanical effects!'
      },

      {
        id: 'dyssynchrony-types-flashcard',
        title: '🧠 Types of Cardiac Dyssynchrony',
        content: 'Understanding different dyssynchrony patterns',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🔄',
          question: 'What are the main types of cardiac dyssynchrony in IVCD?',
          answer: 'INTERVENTRICULAR: Delay between RV and LV activation. INTRAVENTRICULAR: Delay within same ventricle (LV most important). AV DYSSYNCHRONY: Timing mismatch between atria and ventricles. COMBINATIONS: Multiple types often coexist.',
          imageUrl: '/lessonimages/module5/lesson43/dyssynchrony-types.jpg'
        },
        hint: '🧠 Flip to understand dyssynchrony!'
      },

      {
        id: 'myocardial-consequences',
        title: 'Myocardial Consequences of Prolonged IVCD',
        content: 'STRUCTURAL REMODELING: Ventricular dilatation and hypertrophy. CELLULAR CHANGES: Altered calcium handling, metabolic stress. FUNCTIONAL DECLINE: Progressive heart failure development. ARRHYTHMOGENIC EFFECTS: Increased ventricular arrhythmia risk.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson43/myocardial-consequences.jpg',
        hint: '🫀 Long-term myocardial effects!'
      },

      {
        id: 'crt-mechanism',
        title: 'Cardiac Resynchronization Therapy Mechanism',
        content: 'CRT PRINCIPLE: Restores synchronized ventricular contraction. BIVENTRICULAR PACING: Stimulates both ventricles simultaneously. HEMODYNAMIC IMPROVEMENT: Increased stroke volume and cardiac output. REVERSE REMODELING: Potential for structural recovery.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson43/crt-mechanism.jpg',
        hint: '⚡ CRT reverses dyssynchrony!'
      },

      {
        id: 'metabolic-electrical-coupling',
        title: 'Metabolic-Electrical Coupling in IVCD',
        content: 'ENERGY INEFFICIENCY: Dyssynchronous contraction wastes energy. METABOLIC STRESS: Increased oxygen consumption. CALCIUM HANDLING: Altered excitation-contraction coupling. OXIDATIVE STRESS: Free radical generation increases.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson43/metabolic-coupling.jpg',
        hint: '🔋 Energy waste in dyssynchrony!'
      },

      {
        id: 'unit2-quiz',
        title: 'Unit 2 Quiz: IVCD Pathophysiology',
        content: 'Test your understanding of IVCD mechanisms!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'The primary hemodynamic consequence of IVCD is:',
        options: [
          'Increased blood pressure',
          'Ventricular dyssynchrony leading to reduced cardiac output',
          'Enhanced ventricular filling',
          'Improved exercise tolerance'
        ],
        correctAnswer: 1,
        explanation: 'Correct! The primary hemodynamic consequence of IVCD is ventricular dyssynchrony, which leads to uncoordinated contraction and reduced cardiac output efficiency.',
        imageUrl: '/lessonimages/module5/lesson43/unit2-quiz.jpg',
        hint: '🎯 Think about coordination loss!'
      },

      // ===============================================
      // 🎯 UNIT 3: ADVANCED ECG PATTERN RECOGNITION (7 slides)  
      // ===============================================
      {
        id: 'unit3-intro',
        title: '🎯 Unit 3: Advanced ECG Pattern Recognition',
        content: 'Master advanced IVCD ECG interpretation! Learn sophisticated pattern recognition for all IVCD types.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/lbbb_90bpm_4.png',
        hint: '📈 Master advanced IVCD patterns!'
      },

      {
        id: 'nonspecific-ivcd-criteria-tabs',
        title: 'Nonspecific IVCD Recognition Criteria',
        content: 'Systematic approach to nonspecific IVCD patterns',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        tabs: [
          {
            title: 'Duration Criteria',
            content: 'QRS duration ≥120ms (some use ≥110ms). Does not meet LBBB/RBBB criteria. Variable morphology patterns.',
            icon: '⏱️'
          },
          {
            title: 'Morphology Features',
            content: 'Notched or slurred QRS. Multiple deflections. Variable R-wave progression. Lacks classic bundle patterns.',
            icon: '📊'
          },
          {
            title: 'Lead-Specific Patterns',
            content: 'V1-V3: Variable patterns. V4-V6: Broad or notched R waves. Limb leads: Variable morphology.',
            icon: '🔍'
          }
        ],
        hint: '📑 Nonspecific but significant patterns!'
      },

      {
        id: 'ivcd-morphology-variants-accordion',
        title: 'IVCD Morphology Variants',
        content: 'Understanding different IVCD patterns',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Predominantly Negative IVCD',
            content: 'QS or rS pattern in multiple leads. Often indicates extensive myocardial damage. May resemble old MI pattern. Poor prognosis implications.',
            icon: '📉'
          },
          {
            title: 'Predominantly Positive IVCD',
            content: 'Broad R waves in lateral leads. May have notching or slurring. Better preserved ventricular function. Often hypertensive heart disease.',
            icon: '📈'
          },
          {
            title: 'Mixed Pattern IVCD',
            content: 'Variable morphology across leads. Complex conduction abnormalities. Multiple areas of delay. Often extensive disease.',
            icon: '🔀'
          },
          {
            title: 'Intermittent IVCD',
            content: 'Rate-dependent patterns. May be exercise-induced. Progressive conduction disease. Monitor for deterioration.',
            icon: '🔄'
          }
        ],
        hint: '🎯 Click for pattern variants!'
      },

      {
        id: 'qrs-duration-significance-flashcard',
        title: '🧠 QRS Duration Clinical Significance',
        content: 'Understanding QRS width implications',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '📏',
          question: 'How does QRS duration correlate with clinical significance in IVCD?',
          answer: 'QRS <120ms: Usually minimal significance. QRS 120-150ms: Moderate dyssynchrony, monitor closely. QRS >150ms: Significant dyssynchrony, CRT candidate if heart failure. QRS >180ms: Severe dyssynchrony, high mortality risk.',
          imageUrl: '/lessonimages/module5/lesson43/qrs-significance.jpg'
        },
        hint: '🧠 Flip for duration significance!'
      },

      {
        id: 'lead-specific-analysis-steps',
        title: 'Lead-Specific IVCD Analysis',
        content: 'Systematic approach to IVCD assessment',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Precordial Lead Assessment',
            description: 'V1-V3: Look for R-wave progression abnormalities and notching patterns'
          },
          {
            number: 2,
            title: 'Lateral Lead Evaluation',
            description: 'V4-V6: Assess for broad R waves, notching, and fragmentation'
          },
          {
            number: 3,
            title: 'Limb Lead Analysis',
            description: 'I, aVL, II, III, aVF: Evaluate axis and morphology patterns'
          },
          {
            number: 4,
            title: 'Overall Pattern Integration',
            description: 'Synthesize findings to classify as specific vs nonspecific IVCD'
          }
        ],
        hint: '👣 Systematic lead analysis!'
      },

      {
        id: 'fragmented-qrs-significance',
        title: 'Fragmented QRS in IVCD',
        content: 'DEFINITION: Additional R waves or notching in 2+ contiguous leads. MECHANISM: Heterogeneous ventricular activation. SIGNIFICANCE: Indicates myocardial scarring. PROGNOSIS: Associated with increased arrhythmia risk and mortality.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson43/fragmented-qrs.jpg',
        hint: '⚡ Fragmentation indicates scarring!'
      },

      {
        id: 'differential-diagnosis-approach',
        title: 'IVCD Differential Diagnosis Approach',
        content: 'EXCLUDE SPECIFIC PATTERNS: Rule out classic LBBB/RBBB first. CONSIDER MIMICS: Ventricular pacing, hyperkalemia, drugs. ASSESS UNDERLYING DISEASE: Look for structural heart disease. REVIEW PREVIOUS ECGs: Determine if new or chronic.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson43/differential-approach.jpg',
        hint: '🔍 Systematic differential approach!'
      },

      {
        id: 'unit3-quiz',
        title: 'Unit 3 Quiz: Pattern Recognition',
        content: 'Test your IVCD pattern recognition skills!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'Fragmented QRS complexes in IVCD typically indicate:',
        options: [
          'Normal ventricular conduction',
          'Myocardial scarring and heterogeneous activation',
          'Improved cardiac function',
          'Electrolyte imbalance only'
        ],
        correctAnswer: 1,
        explanation: 'Correct! Fragmented QRS complexes in IVCD indicate myocardial scarring and heterogeneous ventricular activation, associated with increased arrhythmia risk.',
        imageUrl: '/lessonimages/module5/lesson43/unit3-quiz.jpg',
        hint: '🎯 Think about scarring and heterogeneity!'
      },

      // ===============================================
      // 🎯 UNIT 4: CLINICAL SIGNIFICANCE + AUDIO (7 slides)
      // ===============================================
      {
        id: 'unit4-intro',
        title: '🎯 Unit 4: Clinical Significance + Audio',
        content: 'Master IVCD clinical significance! Learn when IVCD patterns have important clinical implications.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson43/clinical-significance.jpg',
        hint: '👩‍⚕️ Understand clinical impact!'
      },

      {
        id: 'clinical-significance-audio',
        title: '🎧 Clinical Significance Analysis',
        content: 'Listen to detailed explanation of IVCD clinical significance',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module5/lesson43/clinical-significance.mp3',
        hint: '🎧 Audio guide to clinical relevance!'
      },

      {
        id: 'prognostic-implications-accordion',
        title: 'IVCD Prognostic Implications',
        content: 'Understanding IVCD prognosis by type',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Nonspecific IVCD Prognosis',
            content: 'Generally worse prognosis than specific LBBB/RBBB. Higher all-cause mortality. Increased heart failure risk. Less responsive to CRT.',
            icon: '📊'
          },
          {
            title: 'QRS Duration Impact',
            content: 'QRS >120ms: Increased mortality risk. QRS >150ms: Significant CRT benefit potential. QRS >180ms: Very high mortality risk.',
            icon: '⏱️'
          },
          {
            title: 'Heart Failure Correlation',
            content: 'Strong predictor of HF development. Correlates with reduced EF. Independent mortality predictor. CRT consideration important.',
            icon: '💔'
          },
          {
            title: 'Arrhythmia Risk',
            content: 'Increased ventricular arrhythmia risk. Higher sudden cardiac death rate. ICD consideration in appropriate candidates.',
            icon: '⚡'
          }
        ],
        hint: '🎯 Click for prognostic details!'
      },

      {
        id: 'heart-failure-relationship-tabs',
        title: 'IVCD and Heart Failure Relationship',
        content: 'Understanding IVCD-HF interactions',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: 'Causal Relationship',
            content: 'IVCD can CAUSE heart failure through dyssynchrony. Mechanical inefficiency leads to progressive dysfunction.',
            icon: '➡️'
          },
          {
            title: 'Consequence of Disease',
            content: 'Heart failure can CAUSE IVCD through conduction system damage. Progressive cardiomyopathy affects conduction.',
            icon: '⬅️'
          },
          {
            title: 'Bidirectional Effects',
            content: 'Often both cause and consequence. Creates vicious cycle of worsening. Early intervention important.',
            icon: '🔄'
          }
        ],
        hint: '📑 Complex bidirectional relationship!'
      },

      {
        id: 'crt-eligibility-flashcard',
        title: '🧠 CRT Eligibility in IVCD',
        content: 'Understanding CRT candidacy',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '⚡',
          question: 'What are the key CRT eligibility criteria for IVCD patients?',
          answer: 'HEART FAILURE: NYHA Class II-IV despite optimal medical therapy. EJECTION FRACTION: ≤35%. QRS DURATION: ≥120ms (≥150ms preferred). LBBB MORPHOLOGY: Strongest indication. NONSPECIFIC IVCD: Weaker indication but still beneficial.',
          imageUrl: '/lessonimages/module5/lesson43/crt-eligibility.jpg'
        },
        hint: '🧠 Flip for CRT criteria!'
      },

      {
        id: 'mortality-predictors',
        title: 'IVCD Mortality Predictors',
        content: 'QRS DURATION: Stronger predictor than morphology. HEART FAILURE: Additive mortality risk. FRAGMENTED QRS: Independent risk factor. AGE: Elderly patients higher risk. COMORBIDITIES: Diabetes, CKD increase risk.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson43/mortality-predictors.jpg',
        hint: '📈 Multiple interacting risk factors!'
      },

      {
        id: 'acute-settings-significance',
        title: 'IVCD in Acute Settings',
        content: 'NEW IVCD: Always concerning, investigate cause. ACUTE MI: May indicate extensive damage. HEART FAILURE: Sign of decompensation. TOXICITY: Drug or electrolyte effects. INFECTION: Myocarditis consideration.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson43/acute-significance.jpg',
        hint: '🚨 New IVCD requires investigation!'
      },

      {
        id: 'unit4-quiz',
        title: 'Unit 4 Quiz: Clinical Significance',
        content: 'Test your clinical understanding!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'The IVCD pattern associated with the best CRT response is:',
        options: [
          'Nonspecific IVCD with QRS >150ms',
          'LBBB morphology with QRS >150ms',
          'RBBB morphology with QRS >120ms',
          'Any IVCD with fragmented QRS'
        ],
        correctAnswer: 1,
        explanation: 'Correct! LBBB morphology with QRS >150ms has the strongest evidence for CRT benefit, with the best response rates and outcomes.',
        imageUrl: '/lessonimages/module5/lesson43/unit4-quiz.jpg',
        hint: '🎯 Think about LBBB and wide QRS!'
      },

      // ===============================================
      // 🎯 UNIT 5: MANAGEMENT APPROACHES (6 slides)
      // ===============================================
      {
        id: 'unit5-intro',
        title: '🎯 Unit 5: Management Approaches',
        content: 'Master evidence-based IVCD management! Learn systematic approaches to IVCD patient care.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson43/management-approaches.jpg',
        hint: '⚕️ Evidence-based IVCD management!'
      },

      {
        id: 'ivcd-management-algorithm-steps',
        title: 'IVCD Management Algorithm',
        content: 'Systematic approach to IVCD management',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Initial Assessment',
            description: 'Determine if new or chronic IVCD. Assess symptoms and functional status. Evaluate for underlying causes.'
          },
          {
            number: 2,
            title: 'Structural Evaluation',
            description: 'Echocardiogram for function assessment. Look for regional wall motion abnormalities. Assess for dyssynchrony.'
          },
          {
            number: 3,
            title: 'Heart Failure Optimization',
            description: 'Maximize guideline-directed medical therapy. ACE inhibitor, beta-blocker, aldosterone antagonist.'
          },
          {
            number: 4,
            title: 'Device Therapy Consideration',
            description: 'Evaluate CRT eligibility. Consider ICD if indicated. Monitor for progression.'
          }
        ],
        hint: '👣 Systematic management approach!'
      },

      {
        id: 'crt-optimization-tabs',
        title: 'CRT Optimization Strategies',
        content: 'Maximizing CRT benefit in IVCD',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: 'Patient Selection',
            content: 'Optimal candidates: LBBB >150ms, NYHA II-IV, EF ≤35%. Good candidates: Nonspecific IVCD >150ms with HF.',
            icon: '🎯'
          },
          {
            title: 'Lead Placement',
            content: 'Optimal LV lead position crucial. Avoid scarred areas. Target latest activation zone. Echo guidance helpful.',
            icon: '📍'
          },
          {
            title: 'Programming',
            content: 'AV delay optimization. VV delay programming. Rate response settings. Regular follow-up and adjustment.',
            icon: '⚙️'
          }
        ],
        hint: '📑 Optimize CRT outcomes!'
      },

      {
        id: 'medical-therapy-optimization-accordion',
        title: 'Medical Therapy Optimization',
        content: 'Comprehensive medical management',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Heart Failure Medications',
            content: 'ACE inhibitor or ARB titrated to maximum tolerated dose. Beta-blocker (carvedilol, metoprolol, bisoprolol). Aldosterone antagonist if indicated.',
            icon: '💊'
          },
          {
            title: 'Newer Therapies',
            content: 'SGLT2 inhibitors (dapagliflozin, empagliflozin). ARNI (sacubitril/valsartan) if appropriate. Ivabradine for heart rate >70.',
            icon: '🆕'
          },
          {
            title: 'Monitoring Parameters',
            content: 'Renal function and electrolytes. Blood pressure and heart rate. Symptoms and functional status. Device interrogation.',
            icon: '📊'
          }
        ],
        hint: '🎯 Click for medical optimization!'
      },

      {
        id: 'monitoring-surveillance-flashcard',
        title: '🧠 IVCD Monitoring and Surveillance',
        content: 'Long-term IVCD management',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '👁️',
          question: 'What monitoring is required for IVCD patients?',
          answer: 'REGULAR ECG: Monitor QRS progression. ECHO SURVEILLANCE: Assess function changes. SYMPTOM MONITORING: Watch for HF progression. DEVICE FOLLOW-UP: If CRT/ICD implanted. MEDICATION MONITORING: Titrate heart failure therapy.',
          imageUrl: '/lessonimages/module5/lesson43/monitoring-surveillance.jpg'
        },
        hint: '🧠 Flip for monitoring strategy!'
      },

      {
        id: 'special-populations',
        title: 'IVCD in Special Populations',
        content: 'ELDERLY: Higher comorbidity burden, careful CRT selection. WOMEN: Equal benefit from CRT, under-represented in trials. DIABETES: Higher mortality risk, aggressive management. KIDNEY DISEASE: Medication dosing adjustments needed.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson43/special-populations.jpg',
        hint: '👥 Tailored approaches needed!'
      },

      {
        id: 'unit5-quiz',
        title: 'Unit 5 Quiz: Management',
        content: 'Test your management knowledge!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'The first step in managing a patient with new IVCD is:',
        options: [
          'Immediate CRT implantation',
          'Assessment of underlying cause and structural evaluation',
          'High-dose diuretic therapy',
          'Restriction of all physical activity'
        ],
        correctAnswer: 1,
        explanation: 'Correct! The first step in managing new IVCD is assessment of the underlying cause and comprehensive structural evaluation with echocardiography.',
        imageUrl: '/lessonimages/module5/lesson43/unit5-quiz.jpg',
        hint: '🎯 Think about comprehensive evaluation first!'
      },

      // ===============================================
      // 🎯 UNIT 6: EXPERT MASTERY + CELEBRATION AUDIO (7 slides)
      // ===============================================
      {
        id: 'unit6-intro',
        title: '🎯 Unit 6: Expert IVCD Mastery',
        content: 'Congratulations! Achieve expert-level IVCD mastery with advanced concepts and cutting-edge insights!',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson43/expert-mastery.jpg',
        hint: '🏆 Expert-level IVCD achievement!'
      },

      {
        id: 'expert-mastery-audio',
        title: '🎧 Expert Mastery Celebration',
        content: 'Celebrate your comprehensive IVCD mastery achievement!',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module5/lesson43/expert-mastery-celebration.mp3',
        hint: '🎧 Expert achievement celebration!'
      },

      {
        id: 'advanced-ivcd-concepts-accordion',
        title: 'Advanced IVCD Concepts',
        content: 'Cutting-edge IVCD understanding',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'QRS Fragmentation Significance',
            content: 'Reflects myocardial scarring. Predicts arrhythmia risk. Independent mortality predictor. Guide ICD therapy decisions.',
            icon: '⚡'
          },
          {
            title: 'Dyssynchrony Assessment',
            content: 'Echo strain imaging. Tissue Doppler parameters. MRI assessment. Predicts CRT response.',
            icon: '🔍'
          },
          {
            title: 'Genetic Considerations',
            content: 'Familial IVCD patterns. Laminopathies. SCN5A mutations. Genetic counseling considerations.',
            icon: '🧬'
          },
          {
            title: 'Emerging Therapies',
            content: 'Conduction system pacing. Leadless CRT. Multipoint pacing. Gene therapy research.',
            icon: '🚀'
          }
        ],
        hint: '🎯 Click for cutting-edge concepts!'
      },

      {
        id: 'expert-clinical-scenarios-tabs',
        title: 'Expert Clinical Scenarios',
        content: 'Complex IVCD management scenarios',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: 'CRT Non-Response',
            content: 'Optimize medical therapy first. Check lead position. Consider LV lead revision. Evaluate for other causes.',
            icon: '🔄'
          },
          {
            title: 'IVCD Progression',
            content: 'Monitor QRS widening. Assess functional status. Consider device upgrade. Rule out reversible causes.',
            icon: '📈'
          },
          {
            title: 'Acute IVCD Development',
            content: 'Urgent evaluation needed. Rule out MI, toxicity. Consider temporary pacing. Identify reversible causes.',
            icon: '🚨'
          }
        ],
        hint: '📑 Complex management scenarios!'
      },

      {
        id: 'future-directions-flashcard',
        title: '🧠 Future Directions in IVCD',
        content: 'Emerging trends and technologies',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🔮',
          question: 'What are the most promising future directions in IVCD management?',
          answer: 'CONDUCTION SYSTEM PACING: His-bundle and LBBB area pacing. AI-ENHANCED ECG: Better prediction algorithms. PRECISION MEDICINE: Genetic-guided therapy. REGENERATIVE THERAPY: Stem cell and gene therapy approaches. REMOTE MONITORING: Continuous rhythm and function assessment.',
          imageUrl: '/lessonimages/module5/lesson43/future-directions.jpg'
        },
        hint: '🧠 Flip for future innovations!'
      },

      {
        id: 'expert-clinical-pearls',
        title: '💎 Expert IVCD Pearls',
        content: 'PEARL 1: Nonspecific IVCD often indicates more extensive disease than specific patterns. PEARL 2: QRS duration >150ms is key threshold for CRT benefit. PEARL 3: Fragmented QRS predicts arrhythmia risk independently. PEARL 4: New IVCD always requires investigation. PEARL 5: CRT benefit extends beyond heart failure to mortality reduction.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson43/expert-pearls.jpg',
        hint: '💎 Professional wisdom collection!'
      },

      {
        id: 'research-frontiers',
        title: 'IVCD Research Frontiers',
        content: 'ARTIFICIAL INTELLIGENCE: ECG interpretation and risk prediction. MULTIMODAL IMAGING: Advanced dyssynchrony assessment. BIOMARKERS: Novel markers for risk stratification. PRECISION THERAPY: Individualized treatment approaches.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson43/research-frontiers.jpg',
        hint: '🔬 Cutting-edge research directions!'
      },

      {
        id: 'mastery-achievement-summary',
        title: '🏆 IVCD Mastery Achievement',
        content: 'CLASSIFICATION MASTERY: Complete understanding of IVCD types and variants. PATHOPHYSIOLOGY: Expert knowledge of dyssynchrony mechanisms. ECG MASTERY: Advanced pattern recognition across all morphologies. CLINICAL EXPERTISE: Evidence-based management and risk stratification. FUTURE READY: Understanding of emerging technologies and approaches.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module5/lesson43/mastery-achievement.jpg',
        hint: '🏆 Complete IVCD mastery achieved!'
      },

      {
        id: 'unit6-final-quiz',
        title: 'Unit 6 Quiz: Expert Validation',
        content: 'Validate your expert IVCD knowledge!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'The IVCD characteristic most strongly predictive of CRT benefit is:',
        options: [
          'QRS fragmentation in multiple leads',
          'LBBB morphology with QRS duration >150ms',
          'Nonspecific IVCD with normal ejection fraction',
          'RBBB pattern with first-degree AV block'
        ],
        correctAnswer: 1,
        explanation: 'Outstanding! LBBB morphology with QRS duration >150ms is the strongest predictor of CRT benefit, with the best evidence for improved outcomes and reverse remodeling.',
        imageUrl: '/lessonimages/module5/lesson43/expert-quiz.jpg',
        hint: '🎯 Think about optimal CRT response!'
      }
    ],
    summary: "🏆 Exceptional achievement! You have mastered intraventricular conduction delays comprehensively! You understand IVCD classification, pathophysiology, advanced pattern recognition, clinical significance, evidence-based management, and future directions in IVCD care.",
    keyPoints: [
      "IVCD encompasses specific and nonspecific patterns with QRS duration ≥120ms",
      "Nonspecific IVCD often indicates more extensive disease than specific bundle patterns", 
      "Ventricular dyssynchrony is the primary hemodynamic consequence of IVCD",
      "Strategic audio reinforcement in Units 2, 4, and 6 enhanced learning comprehension",
      "QRS duration >150ms is key threshold for optimal CRT benefit, especially with LBBB",
      "Comprehensive evaluation and evidence-based management improve IVCD patient outcomes"
    ],
    resources: [
      {
        title: "IVCD Management Master Class Reference",
        url: "https://ecgkid.com/ivcd-comprehensive-management",
        type: "video"
      }
    ]
  },
  tasks: [
    {
      id: 'expert-ivcd-mastery-assessment',
      type: 'final-assessment',
      xp: 60,
      audio: {
        mainNarration: {
          audioUrl: '/lessonaudio/module5/lesson43/expert-mastery-celebration.mp3',
          duration: 15,
          transcript: 'Remarkable mastery achievement! You have conquered intraventricular conduction delays comprehensively - from classification through cutting-edge management approaches. Your expertise in pattern recognition, dyssynchrony assessment, and evidence-based CRT strategies is now at expert level. This knowledge transforms patient care and outcomes!'
        }
      },
      images: {
        mainImage: '/lessonimages/module5/lesson43/expert-achievement.jpg',
        slideImages: []
      },
      content: {
        prerequisiteMessage: '🏆 Expert Assessment: Complete all 6 comprehensive units to unlock this expert-level IVCD mastery evaluation.',
        questions: [
          {
            id: 'ivcd-classification-expert',
            type: 'multiple-choice',
            question: 'Nonspecific intraventricular conduction delay is defined as:',
            options: [
              'QRS duration <120ms with normal morphology',
              'QRS duration ≥120ms not meeting LBBB or RBBB morphologic criteria',
              'Any wide QRS complex with bundle branch block pattern',
              'QRS duration 100-119ms with axis deviation'
            ],
            correctAnswer: 1,
            explanation: 'Nonspecific IVCD is defined as QRS duration ≥120ms that does not meet the specific morphologic criteria for complete LBBB or RBBB patterns, often indicating complex or extensive conduction abnormalities.',
            imageUrl: '/lessonimages/module5/lesson43/assessment/classification.jpg'
          },
          {
            id: 'dyssynchrony-mechanism-expert',
            type: 'multiple-choice', 
            question: 'The primary hemodynamic consequence of IVCD is:',
            options: [
              'Increased systemic vascular resistance',
              'Ventricular dyssynchrony leading to reduced cardiac efficiency',
              'Enhanced ventricular filling and preload',
              'Improved coronary perfusion pressure'
            ],
            correctAnswer: 1,
            explanation: 'The primary hemodynamic consequence of IVCD is ventricular dyssynchrony, which leads to uncoordinated contraction, reduced mechanical efficiency, and decreased cardiac output.',
            imageUrl: '/lessonimages/module5/lesson43/assessment/dyssynchrony.jpg'
          },
          {
            id: 'crt-optimization-expert',
            type: 'multiple-choice',
            question: 'The IVCD pattern with strongest evidence for CRT benefit is:',
            options: [
              'Nonspecific IVCD with QRS 120-150ms',
              'LBBB morphology with QRS duration >150ms',
              'RBBB pattern with normal ejection fraction',
              'Any IVCD with fragmented QRS complexes'
            ],
            correctAnswer: 1,
            explanation: 'LBBB morphology with QRS duration >150ms has the strongest evidence for CRT benefit, with the best response rates, reverse remodeling, and mortality reduction.',
            imageUrl: '/lessonimages/module5/lesson43/assessment/crt-benefit.jpg'
          },
          {
            id: 'clinical-significance-expert',
            type: 'multiple-choice',
            question: 'Fragmented QRS complexes in IVCD are most significant because they:',
            options: [
              'Indicate normal ventricular conduction patterns',
              'Represent myocardial scarring and predict increased arrhythmia risk',
              'Are always benign findings requiring no follow-up',
              'Only occur in young patients without heart disease'
            ],
            correctAnswer: 1,
            explanation: 'Fragmented QRS complexes in IVCD indicate myocardial scarring and heterogeneous activation, serving as independent predictors of increased arrhythmia risk and mortality.',
            imageUrl: '/lessonimages/module5/lesson43/assessment/fragmentation.jpg'
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
