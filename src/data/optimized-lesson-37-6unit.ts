import { Lesson } from '../types/learning';

export const optimizedLesson37: Lesson = {
  id: 'lesson-4-9-optimized',
  moduleId: 'module-4',
  title: "AV Dissociation Mastery",
  description: "Master AV dissociation through 6 focused learning units with enhanced interactive elements: Foundation concepts, mechanisms with audio, ECG recognition, differential diagnosis with audio, clinical management, and advanced interpretation with celebration audio",
  order: 9,
  estimatedTime: 45,
  content: {
    type: 'mixed',
    introduction: "🎯 Welcome to AV Dissociation Mastery! Master complete and incomplete AV dissociation through 6 progressive units with enhanced interactive elements, strategic audio, and comprehensive assessments.",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your AV Dissociation Learning Journey",
        content: "UNIT 1: Foundation Concepts → UNIT 2: Dissociation Mechanisms + Audio → UNIT 3: ECG Recognition → UNIT 4: Differential Diagnosis + Audio → UNIT 5: Clinical Management → UNIT 6: Advanced Interpretation + Celebration Audio",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // ===============================================
      // 🎯 UNIT 1: FOUNDATION CONCEPTS (7 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: Foundation Concepts',
        content: 'Master AV dissociation fundamentals! Understand when atria and ventricles beat independently.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/ecg/ecg_dataset_clean/3AVB_third_degree_AV_block/clean_07688_third degree AV block.png',
        hint: '💔 Independent cardiac chambers!'
      },
      
      {
        id: 'av-dissociation-definition-flashcard',
        title: '🧠 AV Dissociation Definition',
        content: 'Understanding AV dissociation basics',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🔀',
          question: 'What is AV dissociation?',
          answer: 'AV dissociation occurs when atria and ventricles beat independently, each controlled by separate pacemakers. The atrial and ventricular rhythms are not related, with no consistent PR interval.',
          imageUrl: '/ecg/ecg_dataset_clean/NORM_normal_ECG/clean_00003_normal ECG.png'
        },
        hint: '🧠 Flip to understand the concept!'
      },

      {
        id: 'complete-vs-incomplete',
        title: 'Complete vs Incomplete Dissociation',
        content: 'COMPLETE: Atria and ventricles completely independent. No conducted beats. INCOMPLETE: Mostly independent but occasional capture beats. Some AV conduction preserved intermittently.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson37/complete-vs-incomplete.jpg',
        hint: '🔄 Degrees of independence!'
      },

      {
        id: 'normal-av-conduction-steps',
        title: 'Normal AV Conduction Review',
        content: 'Review normal AV conduction before understanding dissociation',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Sinus Node Initiates',
            description: 'SA node fires at 60-100 bpm, creating P waves'
          },
          {
            number: 2,
            title: 'Atrial Conduction',
            description: 'Impulse spreads through atria, causing atrial depolarization'
          },
          {
            number: 3,
            title: 'AV Node Delay',
            description: 'Physiologic delay at AV node allows ventricular filling'
          },
          {
            number: 4,
            title: 'Ventricular Conduction',
            description: 'Impulse continues to ventricles via His-Purkinje system'
          }
        ],
        hint: '👣 Normal sequence first!'
      },

      {
        id: 'causes-tabs',
        title: 'AV Dissociation Causes',
        content: 'Explore different causes of AV dissociation',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        tabs: [
          {
            title: 'AV Block',
            content: 'Complete heart block: No AV conduction. Atria beat normally, ventricles escape at slower rate. Most common cause.',
            icon: '🚫'
          },
          {
            title: 'Accelerated Ventricular Rhythm',
            content: 'Ventricular rate exceeds sinus rate. Ventricles take control. May see capture beats when sinus catches up.',
            icon: '⬆️'
          },
          {
            title: 'VT with Dissociation',
            content: 'Ventricular tachycardia with independent atrial rhythm. Classic finding in VT diagnosis.',
            icon: '⚡'
          },
          {
            title: 'Drug Effects',
            content: 'Digoxin toxicity, beta-blockers, calcium channel blockers. Can enhance AV block or cause ventricular arrhythmias.',
            icon: '💊'
          }
        ],
        hint: '📑 Explore the causes!'
      },

      {
        id: 'escape-rhythms-accordion',
        title: 'Ventricular Escape Rhythms',
        content: 'Understanding ventricular escape mechanisms',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Junctional Escape',
            content: 'Rate 40-60 bpm. Narrow QRS (usually). Origin at AV junction. Backup pacemaker when SA node fails.',
            icon: '🔶'
          },
          {
            title: 'Ventricular Escape',
            content: 'Rate 20-40 bpm. Wide QRS complex. Origin below AV node. Last resort pacemaker.',
            icon: '🔸'
          },
          {
            title: 'Accelerated Rhythms',
            content: 'Faster than usual escape rate. Junctional: 60-100 bpm. Ventricular: 50-100 bpm. Often pathologic.',
            icon: '⚡'
          }
        ],
        hint: '🎯 Click to explore escape rhythms!'
      },

      {
        id: 'unit1-quiz',
        title: 'Unit 1 Quiz: Foundation Check',
        content: 'Test your understanding of AV dissociation basics!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'In complete AV dissociation, the atria and ventricles:',
        options: [
          'Beat in perfect synchrony',
          'Have variable PR intervals',
          'Beat completely independently',
          'Show consistent conduction delay'
        ],
        correctAnswer: 2,
        explanation: 'Correct! In complete AV dissociation, atria and ventricles beat completely independently with no relationship between P waves and QRS complexes.',
        imageUrl: '/lessonimages/module4/lesson37/unit1-quiz.jpg',
        hint: '🎯 Think about independence!'
      },

      // ===============================================
      // 🎯 UNIT 2: DISSOCIATION MECHANISMS + AUDIO (8 slides)
      // ===============================================
      {
        id: 'unit2-intro',
        title: '🎯 Unit 2: Dissociation Mechanisms + Audio',
        content: 'Discover how AV dissociation develops! Learn the pathophysiology behind independent rhythms.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson37/mechanisms-overview.jpg',
        hint: '⚙️ Understand the mechanisms!'
      },

      {
        id: 'mechanisms-audio',
        title: '🎧 AV Dissociation Mechanisms',
        content: 'Listen to detailed explanation of AV dissociation mechanisms',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module4/lesson37/av-dissociation-mechanisms.mp3',
        hint: '🎧 Audio guide to mechanisms!'
      },

      {
        id: 'block-mechanisms-accordion',
        title: 'AV Block Mechanisms',
        content: 'Explore different AV block mechanisms causing dissociation',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Anatomic Block',
            content: 'Physical disruption of AV node or His-Purkinje system. Myocardial infarction, fibrosis, calcification. Usually permanent.',
            icon: '🏗️'
          },
          {
            title: 'Functional Block',
            content: 'Physiologic refractoriness without structural damage. Drug effects, electrolyte abnormalities. Often reversible.',
            icon: '⚙️'
          },
          {
            title: 'Enhanced Automaticity',
            content: 'Lower pacemakers fire faster than normal. Ischemia, digitalis, catecholamines. Creates competition.',
            icon: '⚡'
          }
        ],
        hint: '🎯 Click to understand block types!'
      },

      {
        id: 'pacemaker-hierarchy-flashcard',
        title: '🧠 Pacemaker Hierarchy',
        content: 'Understanding cardiac pacemaker hierarchy',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '📊',
          question: 'What is the normal cardiac pacemaker hierarchy?',
          answer: 'SA Node (60-100 bpm) → AV Junction (40-60 bpm) → Ventricular (20-40 bpm). When higher pacemaker fails or is blocked, lower pacemaker takes over.',
          imageUrl: '/lessonimages/module4/lesson37/pacemaker-hierarchy.jpg'
        },
        hint: '🧠 Flip to learn hierarchy!'
      },

      {
        id: 'capture-fusion-beats',
        title: 'Capture and Fusion Beats',
        content: 'CAPTURE BEATS: Occasional normal QRS when sinus impulse conducts. FUSION BEATS: QRS morphology between normal and escape rhythm. Both prove AV dissociation is incomplete.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson37/capture-fusion.jpg',
        hint: '🔄 Occasional breakthrough conduction!'
      },

      {
        id: 'isorhythmic-dissociation',
        title: 'Isorhythmic AV Dissociation',
        content: 'Special type where atrial and ventricular rates are similar but independent. May appear synchronized but timing analysis reveals dissociation. Often occurs with accelerated junctional rhythms.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson37/isorhythmic-dissociation.jpg',
        hint: '⚖️ Similar but independent rates!'
      },

      {
        id: 'unit2-quiz',
        title: 'Unit 2 Quiz: Mechanisms Check',
        content: 'Test your understanding of AV dissociation mechanisms!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'Capture beats during AV dissociation indicate:',
        options: [
          'Complete AV block',
          'Incomplete AV dissociation',
          'Ventricular tachycardia',
          'Sinus arrest'
        ],
        correctAnswer: 1,
        explanation: 'Correct! Capture beats indicate incomplete AV dissociation because they show that occasional AV conduction is still possible.',
        imageUrl: '/lessonimages/module4/lesson37/unit2-quiz.jpg',
        hint: '🎯 Think about partial conduction!'
      },

      // ===============================================
      // 🎯 UNIT 3: ECG RECOGNITION (7 slides)  
      // ===============================================
      {
        id: 'unit3-intro',
        title: '🎯 Unit 3: ECG Recognition',
        content: 'Master ECG recognition of AV dissociation! Learn to identify the classic patterns and subtle clues.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson37/ecg-recognition-overview.jpg',
        hint: '📈 Recognize dissociation patterns!'
      },

      {
        id: 'recognition-criteria-steps',
        title: 'AV Dissociation Recognition',
        content: 'Step-by-step approach to recognizing AV dissociation',
        type: 'steps',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'slide',
        steps: [
          {
            number: 1,
            title: 'Identify P Waves',
            description: 'Look for regular P waves marching through the rhythm'
          },
          {
            number: 2,
            title: 'Identify QRS Complexes',
            description: 'Note regular ventricular rhythm, often slower than P waves'
          },
          {
            number: 3,
            title: 'Assess P-QRS Relationship',
            description: 'No consistent PR interval - P waves and QRS are independent'
          },
          {
            number: 4,
            title: 'Look for Capture/Fusion',
            description: 'Occasional normal beats prove incomplete dissociation'
          }
        ],
        hint: '👣 Systematic recognition approach!'
      },

      {
        id: 'complete-heart-block-pattern',
        title: 'Complete Heart Block Pattern',
        content: 'ATRIAL RATE: Regular, usually 60-100 bpm. VENTRICULAR RATE: Regular, 20-60 bpm. RELATIONSHIP: No consistent PR intervals. MORPHOLOGY: Wide QRS if ventricular escape, narrow if junctional.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/bradycardia_35bpm.png',
        hint: '🚫 No AV conduction at all!'
      },

      {
        id: 'vt-with-dissociation-tabs',
        title: 'VT with AV Dissociation',
        content: 'Recognize VT patterns with AV dissociation',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        tabs: [
          {
            title: 'Classic VT Pattern',
            content: 'Wide QRS tachycardia >100 bpm. Regular ventricular rhythm. P waves visible but dissociated. AV dissociation proves VT.',
            icon: '⚡'
          },
          {
            title: 'Capture Beats in VT',
            content: 'Occasional narrow QRS during VT. Proves AV conduction intact. Diagnostic of VT with dissociation.',
            icon: '🎯'
          },
          {
            title: 'Fusion Beats in VT',
            content: 'QRS morphology between normal and VT. Results from simultaneous activation. Strong evidence for VT.',
            icon: '🔄'
          }
        ],
        hint: '📑 VT dissociation patterns!'
      },

      {
        id: 'accelerated-rhythms-accordion',
        title: 'Accelerated Rhythm Recognition',
        content: 'Recognize accelerated rhythms with dissociation',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Accelerated Junctional',
            content: 'Rate 60-100 bpm. Narrow QRS complexes. P waves dissociated or retrograde. Often seen with digitalis.',
            icon: '🔶'
          },
          {
            title: 'Accelerated Ventricular',
            content: 'Rate 50-100 bpm. Wide QRS complexes. P waves march independently. Common after MI or with digitalis.',
            icon: '🔸'
          },
          {
            title: 'Isorhythmic Dissociation',
            content: 'Similar atrial and ventricular rates. May appear synchronized but independent timing. Requires careful analysis.',
            icon: '⚖️'
          }
        ],
        hint: '🎯 Click to explore accelerated rhythms!'
      },

      {
        id: 'subtle-clues-flashcard',
        title: '🧠 Subtle Recognition Clues',
        content: 'Master subtle clues for AV dissociation',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🔍',
          question: 'What are subtle clues for AV dissociation?',
          answer: 'Variable P wave visibility (sometimes hidden in QRS or T waves), changing intensity of heart sounds (cannon A waves), variable pulse pressure, occasional capture or fusion beats.',
          imageUrl: '/ecg/medical_accurate/ventricular_tachycardia_150bpm_1.png'
        },
        hint: '🧠 Flip for subtle clues!'
      },

      {
        id: 'unit3-quiz',
        title: 'Unit 3 Quiz: Recognition Check',
        content: 'Test your ECG recognition skills!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'The most reliable ECG sign of AV dissociation is:',
        options: [
          'Wide QRS complexes',
          'P waves marching independently of QRS',
          'Irregular ventricular rhythm',
          'Prolonged PR intervals'
        ],
        correctAnswer: 1,
        explanation: 'Correct! P waves marching independently of QRS complexes (no consistent relationship) is the most reliable ECG sign of AV dissociation.',
        imageUrl: '/lessonimages/module4/lesson37/unit3-quiz.jpg',
        hint: '🎯 Think about independence!'
      },

      // ===============================================
      // 🎯 UNIT 4: DIFFERENTIAL DIAGNOSIS + AUDIO (7 slides)
      // ===============================================
      {
        id: 'unit4-intro',
        title: '🎯 Unit 4: Differential Diagnosis + Audio',
        content: 'Master differential diagnosis of AV dissociation! Learn to distinguish true dissociation from mimics.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson37/differential-overview.jpg',
        hint: '🔍 Distinguish true dissociation!'
      },

      {
        id: 'differential-audio',
        title: '🎧 AV Dissociation Differential',
        content: 'Listen to detailed explanation of AV dissociation differential diagnosis',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module4/lesson37/av-dissociation-differential.mp3',
        hint: '🎧 Audio guide to differential!'
      },

      {
        id: 'true-vs-pseudo-dissociation-tabs',
        title: 'True vs Pseudo-Dissociation',
        content: 'Distinguish true AV dissociation from mimics',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        tabs: [
          {
            title: 'True Dissociation',
            content: 'Independent atrial and ventricular rhythms. No consistent P-QRS relationship. May have capture/fusion beats.',
            icon: '✅'
          },
          {
            title: 'Variable AV Block',
            content: 'Some P waves conduct, others do not. Pattern may appear random. Still some P-QRS relationship.',
            icon: '🔀'
          },
          {
            title: 'Concealed Conduction',
            content: 'Hidden conduction affects subsequent beats. Complex patterns that mimic dissociation.',
            icon: '🎭'
          }
        ],
        hint: '📑 True vs pseudo patterns!'
      },

      {
        id: 'vt-vs-accelerated-rhythms-accordion',
        title: 'VT vs Accelerated Rhythm Differential',
        content: 'Critical distinction between VT and accelerated rhythms',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Ventricular Tachycardia',
            content: 'Rate usually >100 bpm. Wide QRS. AV dissociation present. Hemodynamically unstable. Requires urgent treatment.',
            icon: '⚡'
          },
          {
            title: 'Accelerated Ventricular',
            content: 'Rate 50-100 bpm. Wide QRS. AV dissociation present. Usually hemodynamically stable. Often protective.',
            icon: '🔸'
          },
          {
            title: 'Accelerated Junctional',
            content: 'Rate 60-100 bpm. Narrow QRS (usually). May have dissociation. Often benign. Consider digitalis toxicity.',
            icon: '🔶'
          }
        ],
        hint: '🎯 Click for critical distinctions!'
      },

      {
        id: 'block-vs-usurpation',
        title: 'AV Block vs Usurpation',
        content: 'AV BLOCK: Problem with conduction. Ventricular rate slower than atrial. USURPATION: Faster lower pacemaker takes over. Ventricular rate may equal or exceed atrial rate.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson37/block-vs-usurpation.jpg',
        hint: '⚖️ Block vs takeover!'
      },

      {
        id: 'clinical-context-flashcard',
        title: '🧠 Clinical Context Importance',
        content: 'Using clinical context for differential diagnosis',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '👩‍⚕️',
          question: 'How does clinical context help differentiate AV dissociation causes?',
          answer: 'Age, medications (digitalis), recent MI, hemodynamic status, symptoms. Young patient = more likely congenital. Elderly = more likely degenerative. Post-MI = more likely ischemic block.',
          imageUrl: '/lessonimages/module4/lesson37/clinical-context.jpg'
        },
        hint: '🧠 Flip for context clues!'
      },

      {
        id: 'drug-induced-patterns',
        title: 'Drug-Induced AV Dissociation',
        content: 'DIGITALIS: Accelerated junctional with dissociation. BETA-BLOCKERS: Enhanced AV block. CALCIUM BLOCKERS: AV node depression. ANTIARRHYTHMICS: Variable effects on conduction.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson37/drug-induced.jpg',
        hint: '💊 Drug-related dissociation!'
      },

      {
        id: 'unit4-quiz',
        title: 'Unit 4 Quiz: Differential Check',
        content: 'Test your differential diagnosis skills!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'A wide QRS rhythm at 80 bpm with AV dissociation most likely represents:',
        options: [
          'Ventricular tachycardia',
          'Complete heart block',
          'Accelerated ventricular rhythm',
          'Bundle branch block'
        ],
        correctAnswer: 2,
        explanation: 'Correct! A wide QRS rhythm at 80 bpm with AV dissociation most likely represents accelerated ventricular rhythm (rate 50-100 bpm). VT would typically be >100 bpm.',
        imageUrl: '/lessonimages/module4/lesson37/unit4-quiz.jpg',
        hint: '🎯 Consider the heart rate!'
      },

      // ===============================================
      // 🎯 UNIT 5: CLINICAL MANAGEMENT (6 slides)
      // ===============================================
      {
        id: 'unit5-intro',
        title: '🎯 Unit 5: Clinical Management',
        content: 'Master clinical management of AV dissociation! Learn when and how to intervene appropriately.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson37/management-overview.jpg',
        hint: '👩‍⚕️ Clinical decision making!'
      },

      {
        id: 'management-strategy-accordion',
        title: 'Management Strategy Explorer',
        content: 'Strategic approach to AV dissociation management',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Acute Complete Heart Block',
            content: 'Immediate temporary pacing if symptomatic. Transcutaneous if available. Consider atropine trial. Permanent pacemaker usually needed.',
            icon: '🚨'
          },
          {
            title: 'Accelerated Rhythms',
            content: 'Usually protective - do not suppress. Treat underlying cause. Monitor for hemodynamic compromise. Often self-limited.',
            icon: '🛡️'
          },
          {
            title: 'VT with Dissociation',
            content: 'Urgent cardioversion if unstable. Antiarrhythmics if stable. AV dissociation confirms VT diagnosis.',
            icon: '⚡'
          }
        ],
        hint: '🎯 Click for management strategies!'
      },

      {
        id: 'pacing-indications-tabs',
        title: 'Pacing Indications Analysis',
        content: 'When pacing is needed for AV dissociation',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: 'Definite Indications',
            content: 'Symptomatic complete heart block. Asymptomatic CHB with pauses >3 seconds. CHB with escape rate <40 bpm.',
            icon: '✅'
          },
          {
            title: 'Possible Indications',
            content: 'Asymptomatic CHB with narrow escape. CHB at level of His-Purkinje. Exercise intolerance.',
            icon: '🤔'
          },
          {
            title: 'Not Indicated',
            content: 'Accelerated rhythms with dissociation. Type I second-degree block. Asymptomatic congenital CHB with adequate rate.',
            icon: '❌'
          }
        ],
        hint: '📑 Pacing decision making!'
      },

      {
        id: 'hemodynamic-assessment',
        title: 'Hemodynamic Assessment',
        content: 'STABLE: Normal BP, no chest pain, no dyspnea, good mentation. UNSTABLE: Hypotension, chest pain, heart failure, altered mental status. EMERGENCY: Cardiac arrest, severe bradycardia with symptoms.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson37/hemodynamic-assessment.jpg',
        hint: '💓 Assess hemodynamic impact!'
      },

      {
        id: 'drug-management-flashcard',
        title: '🧠 Drug-Related Management',
        content: 'Managing drug-induced AV dissociation',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '💊',
          question: 'How do you manage drug-induced AV dissociation?',
          answer: 'Identify offending drug. Check drug levels if applicable (digitalis). Discontinue or reduce dose. Support hemodynamics. Consider antidotes (digibind for digitalis). Monitor for resolution.',
          imageUrl: '/lessonimages/module4/lesson37/drug-management.jpg'
        },
        hint: '🧠 Flip for drug management!'
      },

      {
        id: 'unit5-quiz',
        title: 'Unit 5 Quiz: Management Check',
        content: 'Test your management skills!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'An accelerated ventricular rhythm with AV dissociation should be:',
        options: [
          'Immediately cardioverted',
          'Treated with lidocaine',
          'Monitored and not suppressed',
          'Treated with atropine'
        ],
        correctAnswer: 2,
        explanation: 'Correct! Accelerated ventricular rhythms are usually protective escape rhythms and should be monitored but not suppressed unless causing hemodynamic compromise.',
        imageUrl: '/lessonimages/module4/lesson37/unit5-quiz.jpg',
        hint: '🎯 Think about protective rhythms!'
      },

      // ===============================================
      // 🎯 UNIT 6: ADVANCED INTERPRETATION + CELEBRATION AUDIO (7 slides)
      // ===============================================
      {
        id: 'unit6-intro',
        title: '🎯 Unit 6: Advanced Interpretation',
        content: 'Congratulations! Complete your AV dissociation mastery with advanced interpretation skills!',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson37/mastery-celebration.jpg',
        hint: '🏆 You have reached mastery level!'
      },

      {
        id: 'mastery-celebration-audio',
        title: '🎧 Mastery Celebration',
        content: 'Celebrate your AV dissociation mastery achievement!',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'slide',
        audioUrl: '/lessonaudio/module4/lesson37/mastery-celebration.mp3',
        hint: '🎧 Celebration time! You have mastered AV dissociation!'
      },

      {
        id: 'advanced-patterns-tabs',
        title: 'Advanced Pattern Analysis',
        content: 'Master complex AV dissociation patterns',
        type: 'tabs',
        layout: 'full',
        backgroundColor: '#f0fdf4',
        textColor: '#15803d',
        animation: 'fade',
        tabs: [
          {
            title: 'Intermittent Dissociation',
            content: 'Dissociation comes and goes. May be rate-related. Often functional rather than structural. Monitor for progression.',
            icon: '🔄'
          },
          {
            title: 'AV Dissociation with Interference',
            content: 'Complex patterns with concealed conduction. Appears chaotic but has underlying logic. Requires careful analysis.',
            icon: '🌊'
          },
          {
            title: 'Double Tachycardia',
            content: 'Both atrial and ventricular tachycardia present. Extremely rare but dramatic. AV dissociation at fast rates.',
            icon: '⚡'
          }
        ],
        hint: '📑 Master complex patterns!'
      },

      {
        id: 'diagnostic-pearls-accordion',
        title: 'Advanced Diagnostic Pearls',
        content: 'Expert-level diagnostic insights',
        type: 'accordion',
        layout: 'full',
        backgroundColor: '#fffbeb',
        textColor: '#92400e',
        animation: 'fade',
        accordionItems: [
          {
            title: 'Cannon A Waves',
            content: 'Physical finding: Large jugular venous waves when atrium contracts against closed tricuspid valve. Pathognomonic for AV dissociation.',
            icon: '🌊'
          },
          {
            title: 'Variable S1 Intensity',
            content: 'Heart sound varies with P-QRS timing. Loud when P wave precedes QRS. Quiet when simultaneous. Diagnostic clue.',
            icon: '🔊'
          },
          {
            title: 'Mathematical Analysis',
            content: 'Calculate atrial and ventricular rates separately. Plot P-QRS relationships over time. Reveals true independence.',
            icon: '📊'
          }
        ],
        hint: '🎯 Click for expert pearls!'
      },

      {
        id: 'troubleshooting-guide-flashcard',
        title: '🧠 Expert Troubleshooting',
        content: 'Master challenging AV dissociation scenarios',
        type: 'flashcard',
        layout: 'split',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        flashcard: {
          icon: '🛠️',
          question: 'How do you analyze complex AV dissociation patterns?',
          answer: 'Map P waves separately from QRS. Calculate independent rates. Look for capture/fusion beats. Consider underlying rhythm mechanisms. Use clinical context. Sometimes long rhythm strips needed.',
          imageUrl: '/lessonimages/module4/lesson37/expert-troubleshooting.jpg'
        },
        hint: '🧠 Flip for expert analysis!'
      },

      {
        id: 'prognostic-insights',
        title: 'Prognostic Insights',
        content: 'CONGENITAL CHB: Better prognosis if narrow QRS escape. ACQUIRED CHB: Worse prognosis, usually needs pacing. POST-MI CHB: Very poor prognosis without revascularization. DRUG-INDUCED: Usually reversible with good prognosis.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson37/prognostic-insights.jpg',
        hint: '🔮 Understanding prognosis!'
      },

      {
        id: 'clinical-mastery-pearls',
        title: 'Clinical Mastery Pearls',
        content: 'PEARL 1: AV dissociation in VT confirms diagnosis. PEARL 2: Capture beats prove incomplete dissociation. PEARL 3: Accelerated rhythms are usually protective. PEARL 4: Complete CHB needs pacing if symptomatic. PEARL 5: Drug-induced dissociation may be reversible.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/module4/lesson37/clinical-pearls.jpg',
        hint: '💎 Ultimate clinical wisdom!'
      },

      {
        id: 'unit6-final-quiz',
        title: 'Unit 6 Quiz: Mastery Validation',
        content: 'Validate your AV dissociation mastery!',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        question: 'The most concerning type of AV dissociation is:',
        options: [
          'Accelerated junctional rhythm with dissociation',
          'Complete heart block with wide QRS escape',
          'Isorhythmic AV dissociation',
          'VT with AV dissociation in hemodynamically stable patient'
        ],
        correctAnswer: 1,
        explanation: 'Perfect! Complete heart block with wide QRS escape indicates block below the AV node with unreliable ventricular escape rhythm, requiring urgent pacing.',
        imageUrl: '/lessonimages/module4/lesson37/mastery-quiz.jpg',
        hint: '🎯 Think about escape rhythm reliability!'
      }
    ],
    summary: "🏆 Congratulations! You have achieved AV dissociation mastery! You can recognize various forms of dissociation, understand their mechanisms, assess clinical significance, and manage patients appropriately.",
    keyPoints: [
      "AV dissociation occurs when atria and ventricles beat independently with separate pacemakers",
      "Recognition requires identifying independent P waves and QRS complexes without consistent relationship",
      "Complete heart block, accelerated rhythms, and VT are major causes of AV dissociation",
      "Strategic audio reinforcement in Units 2, 4, and 6 enhanced learning retention",
      "Management depends on hemodynamic stability and underlying mechanism",
      "Capture and fusion beats indicate incomplete dissociation with preserved AV conduction"
    ],
    resources: [
      {
        title: "AV Dissociation Mastery Reference",
        url: "https://ecgkid.com/av-dissociation-guide",
        type: "video"
      }
    ]
  },
  tasks: [
    {
      id: 'final-av-dissociation-mastery-assessment',
      type: 'final-assessment',
      xp: 50,
      audio: {
        mainNarration: {
          audioUrl: '/lessonaudio/module4/lesson37/mastery-celebration.mp3',
          duration: 12,
          transcript: 'Outstanding achievement! You have completely mastered AV dissociation. You understand the mechanisms, can recognize ECG patterns, differentiate causes, and manage patients expertly. Your knowledge will greatly enhance your clinical practice!'
        }
      },
      images: {
        mainImage: '/lessonimages/module4/lesson37/mastery-achievement.jpg',
        slideImages: []
      },
      content: {
        prerequisiteMessage: '🏆 Final Assessment: Complete all 6 units to unlock this comprehensive AV dissociation mastery evaluation.',
        questions: [
          {
            id: 'av-dissociation-recognition-mastery',
            type: 'multiple-choice',
            question: 'The most reliable ECG finding to diagnose AV dissociation is:',
            options: [
              'Wide QRS complexes',
              'P waves marching independently of QRS complexes',
              'Irregular ventricular rhythm',
              'Prolonged PR intervals'
            ],
            correctAnswer: 1,
            explanation: 'P waves marching independently of QRS complexes with no consistent relationship is the most reliable ECG sign of AV dissociation. This shows that atria and ventricles are beating independently.',
            imageUrl: '/lessonimages/module4/lesson37/assessment/recognition.jpg'
          },
          {
            id: 'complete-heart-block-management-mastery',
            type: 'multiple-choice', 
            question: 'A patient has complete heart block with ventricular escape rate of 35 bpm and is symptomatic. The most appropriate immediate management is:',
            options: [
              'Atropine 0.5mg IV',
              'Temporary transcutaneous pacing',
              'Observation and monitoring',
              'Permanent pacemaker implantation'
            ],
            correctAnswer: 1,
            explanation: 'Temporary transcutaneous pacing is the most appropriate immediate management for symptomatic complete heart block. This provides immediate hemodynamic support while preparing for permanent pacing.',
            imageUrl: '/lessonimages/module4/lesson37/assessment/chb-management.jpg'
          },
          {
            id: 'vt-dissociation-diagnosis-mastery',
            type: 'multiple-choice',
            question: 'During a wide QRS tachycardia, the presence of AV dissociation suggests:',
            options: [
              'Supraventricular tachycardia with aberrancy',
              'Ventricular tachycardia',
              'Atrial flutter with variable conduction',
              'Sinus tachycardia with bundle branch block'
            ],
            correctAnswer: 1,
            explanation: 'AV dissociation during wide QRS tachycardia strongly suggests ventricular tachycardia. This finding, along with capture or fusion beats, helps differentiate VT from SVT with aberrancy.',
            imageUrl: '/lessonimages/module4/lesson37/assessment/vt-diagnosis.jpg'
          },
          {
            id: 'accelerated-rhythm-management-mastery',
            type: 'multiple-choice',
            question: 'An accelerated ventricular rhythm with AV dissociation should be managed by:',
            options: [
              'Immediate cardioversion',
              'Suppression with lidocaine',
              'Monitoring without suppression',
              'Atropine administration'
            ],
            correctAnswer: 2,
            explanation: 'Accelerated ventricular rhythms are usually protective escape rhythms and should be monitored without suppression unless causing hemodynamic compromise. Suppressing them may lead to asystole.',
            imageUrl: '/lessonimages/module4/lesson37/assessment/avr-management.jpg'
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
