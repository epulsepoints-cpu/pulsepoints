import { eventThemes } from '../types/simpleEventTypes';
// ECG Image mappings using your actual images from both folders plus lesson images
const ECG_IMAGE_MAPPINGS = {
    // Normal Rhythms - Mix of medical_accurate, ecg_dataset_clean, and lesson images
    NORMAL: [
        '/ecg/medical_accurate/normal_60bpm.png',
        '/ecg/medical_accurate/normal_70bpm.png',
        '/ecg/medical_accurate/normal_75bpm.png',
        '/ecg/medical_accurate/normal_80bpm.png',
        '/ecg/medical_accurate/normal_90bpm.png',
        '/ecg/medical_accurate/normal_100bpm.png',
        '/ecg/medical_accurate/normal_sinus_60bpm_1.png',
        '/ecg/medical_accurate/normal_sinus_75bpm_2.png',
        '/ecg/medical_accurate/normal_sinus_85bpm_3.png',
        '/ecg/medical_accurate/normal_sinus_95bpm_4.png',
        '/ecg/medical_accurate/normal_sinus_100bpm_5.png',
        '/ecg/ecg_dataset_clean/normal_rhythm_001.png',
        '/ecg/ecg_dataset_clean/normal_rhythm_002.png',
        '/ecg/ecg_dataset_clean/normal_rhythm_003.png',
        '/ecg/ecg_dataset_clean/normal_rhythm_004.png',
        '/ecg/ecg_dataset_clean/normal_rhythm_005.png',
        '/ecg/ecg_dataset_clean/sinus_rhythm_clean_001.png',
        '/ecg/ecg_dataset_clean/sinus_rhythm_clean_002.png',
        '/ecg/ecg_dataset_clean/sinus_rhythm_clean_003.png',
        '/ecg/ecg_dataset_clean/sinus_rhythm_clean_004.png',
        '/ecg/100_NormalSinusRhythm.png',
        '/ecg/220_NormalSinusRhythm.png'
    ],
    
    // Rate Calculation Images - Using lesson images for better education
    RATE_CALCULATION: [
        '/lessonimages/rate-calculation-methods.png',
        '/lessonimages/300-rule-demonstration.png',
        '/lessonimages/six-second-method.png',
        '/lessonimages/regular-rhythm-intervals.png'
    ],
    
    // P-Wave Analysis Images
    P_WAVE_ANALYSIS: [
        '/lessonimages/p-wave-analysis-overview.png',
        '/lessonimages/p-wave-characteristics-nsr.png',
        '/lessonimages/p-wave-systematic-analysis.png',
        '/lessonimages/normal-p-wave-detailed.png',
        '/lessonimages/p-qrs-t-wave-sequence.png'
    ],
    
    // Interval Measurement Images
    INTERVAL_MEASUREMENTS: [
        '/lessonimages/pr-interval-measurement-nsr.png',
        '/lessonimages/qrs-duration-comparison.png',
        '/lessonimages/qt-measurement-technique.png',
        '/lessonimages/bazett-formula-calculation.png'
    ],
    
    // Age-Related Variations
    AGE_VARIATIONS: [
        '/lessonimages/age-related-ecg-changes.png',
        '/lessonimages/normal-ecg-variations-overview.png',
        '/lessonimages/athlete-vs-elderly-bradycardia.png',
        '/lessonimages/positional-ecg-variations.png'
    ],
    
    // Athletic Heart Patterns
    ATHLETIC_PATTERNS: [
        '/lessonimages/athletic-heart-syndrome.png',
        '/lessonimages/athletic-bradycardia-question.png',
        '/lessonimages/early-repolarization-vs-stemi.png',
        '/lessonimages/symptomatic-vs-asymptomatic-bradycardia.png'
    ],

    // Bradycardia - Enhanced with both folders and lesson images
    BRADYCARDIA: [
        '/ecg/medical_accurate/bradycardia_35bpm.png',
        '/ecg/medical_accurate/bradycardia_35bpm_1.png',
        '/ecg/medical_accurate/bradycardia_40bpm.png',
        '/ecg/medical_accurate/bradycardia_42bpm_2.png',
        '/ecg/medical_accurate/bradycardia_45bpm.png',
        '/ecg/medical_accurate/bradycardia_48bpm_3.png',
        '/ecg/medical_accurate/bradycardia_50bpm.png',
        '/ecg/medical_accurate/bradycardia_52bpm_4.png',
        '/ecg/medical_accurate/bradycardia_55bpm.png',
        '/ecg/medical_accurate/bradycardia_55bpm_5.png',
        '/ecg/ecg_dataset_clean/bradycardia_clean_001.png',
        '/ecg/ecg_dataset_clean/bradycardia_clean_002.png',
        '/ecg/ecg_dataset_clean/bradycardia_clean_003.png',
        '/ecg/ecg_dataset_clean/sinus_bradycardia_001.png',
        '/ecg/ecg_dataset_clean/sinus_bradycardia_002.png',
        '/lessonimages/sinus-bradycardia-overview.png',
        '/lessonimages/pathologic-bradycardia-causes.png'
    ],
    
    // Junctional Rhythms
    JUNCTIONAL_RHYTHMS: [
        '/lessonimages/junctional-escape-rhythm.jpg',
        '/lessonimages/junctional-vs-ventricular-escape-comparison.jpg',
        '/lessonimages/escape-rhythms-intro.jpg',
        '/lessonimages/ventricular-escape-rhythm.jpg',
        '/lessonimages/pacemaker-hierarchy.jpg'
    ],

    // Tachycardia - Enhanced with both folders and lesson images
    TACHYCARDIA: [
        '/ecg/medical_accurate/tachycardia_105bpm.png',
        '/ecg/medical_accurate/tachycardia_105bpm_1.png',
        '/ecg/medical_accurate/tachycardia_110bpm.png',
        '/ecg/medical_accurate/tachycardia_115bpm.png',
        '/ecg/medical_accurate/tachycardia_115bpm_2.png',
        '/ecg/medical_accurate/tachycardia_125bpm.png',
        '/ecg/medical_accurate/tachycardia_125bpm_3.png',
        '/ecg/medical_accurate/tachycardia_130bpm.png',
        '/ecg/medical_accurate/tachycardia_135bpm_4.png',
        '/ecg/medical_accurate/tachycardia_140bpm.png',
        '/ecg/medical_accurate/tachycardia_145bpm_5.png',
        '/ecg/medical_accurate/tachycardia_150bpm.png',
        '/ecg/medical_accurate/tachycardia_155bpm.png',
        '/ecg/medical_accurate/tachycardia_155bpm_6.png',
        '/ecg/medical_accurate/tachycardia_165bpm_7.png',
        '/ecg/ecg_dataset_clean/tachycardia_clean_001.png',
        '/ecg/ecg_dataset_clean/tachycardia_clean_002.png',
        '/ecg/ecg_dataset_clean/tachycardia_clean_003.png',
        '/ecg/ecg_dataset_clean/sinus_tachycardia_001.png',
        '/ecg/ecg_dataset_clean/sinus_tachycardia_002.png',
        '/lessonimages/sinus-tachycardia-overview.png',
        '/lessonimages/sinus-tachycardia.png',
        '/lessonimages/sinus-tachycardia-vs-arrhythmias.png',
        '/lessonimages/pathologic-sinus-tachycardia-causes.png'
    ],
    
    // Atrial Fibrillation - Enhanced
    ATRIAL_FIBRILLATION: [
        '/ecg/medical_accurate/atrial_fibrillation_70bpm_1.png',
        '/ecg/medical_accurate/atrial_fibrillation_85bpm_2.png',
        '/ecg/medical_accurate/atrial_fibrillation_95bpm_3.png',
        '/ecg/medical_accurate/atrial_fibrillation_110bpm_4.png',
        '/ecg/medical_accurate/atrial_fibrillation_120bpm_5.png',
        '/ecg/medical_accurate/atrial_fibrillation_130bpm_6.png',
        '/ecg/medical_accurate/atrial_fibrillation_140bpm_7.png',
        '/ecg/medical_accurate/atrial_fibrillation_150bpm_8.png',
        '/ecg/ecg_dataset_clean/atrial_fibrillation_001.png',
        '/ecg/ecg_dataset_clean/atrial_fibrillation_002.png',
        '/ecg/ecg_dataset_clean/atrial_fibrillation_003.png',
        '/ecg/ecg_dataset_clean/atrial_fib_clean_001.png',
        '/ecg/ecg_dataset_clean/atrial_fib_clean_002.png',
        '/ecg/113_AtrialFibrillation.png',
        '/ecg/114_AtrialFibrillation.png',
        '/lessonimages/afib-rvr.png'
    ],
    
    // Atrial Flutter - Enhanced
    ATRIAL_FLUTTER: [
        '/ecg/medical_accurate/atrial_flutter_75bpm_1.png',
        '/ecg/medical_accurate/atrial_flutter_100bpm_2.png',
        '/ecg/medical_accurate/atrial_flutter_150bpm_3.png',
        '/ecg/ecg_dataset_clean/atrial_flutter_001.png',
        '/ecg/ecg_dataset_clean/atrial_flutter_002.png',
        '/ecg/ecg_dataset_clean/atrial_flutter_clean_001.png'
    ],
    
    // Ventricular Tachycardia - Enhanced
    VENTRICULAR_TACHYCARDIA: [
        '/ecg/medical_accurate/ventricular_tachycardia_150bpm_1.png',
        '/ecg/medical_accurate/ventricular_tachycardia_165bpm_2.png',
        '/ecg/medical_accurate/ventricular_tachycardia_180bpm_3.png',
        '/ecg/medical_accurate/ventricular_tachycardia_195bpm_4.png',
        '/ecg/medical_accurate/ventricular_tachycardia_210bpm_5.png',
        '/ecg/medical_accurate/ventricular_tachycardia_225bpm_6.png',
        '/ecg/medical_accurate/vtach_150bpm.png',
        '/ecg/medical_accurate/vtach_160bpm.png',
        '/ecg/medical_accurate/vtach_170bpm.png',
        '/ecg/medical_accurate/vtach_180bpm.png',
        '/ecg/medical_accurate/vtach_190bpm.png',
        '/ecg/medical_accurate/vtach_200bpm.png',
        '/ecg/medical_accurate/vtach_210bpm.png',
        '/ecg/ecg_dataset_clean/ventricular_tachycardia_001.png',
        '/ecg/ecg_dataset_clean/ventricular_tachycardia_002.png',
        '/ecg/ecg_dataset_clean/vtach_clean_001.png',
        '/ecg/ecg_dataset_clean/vtach_clean_002.png',
        '/lessonimages/monomorphic-vt.png'
    ],
    
    // Bundle Branch Blocks - Enhanced
    BUNDLE_BRANCH_BLOCKS: [
        // LBBB
        '/ecg/medical_accurate/lbbb_65bpm_1.png',
        '/ecg/medical_accurate/lbbb_70bpm.png',
        '/ecg/medical_accurate/lbbb_75bpm_2.png',
        '/ecg/medical_accurate/lbbb_85bpm.png',
        '/ecg/medical_accurate/lbbb_85bpm_3.png',
        '/ecg/medical_accurate/lbbb_90bpm_4.png',
        // RBBB
        '/ecg/medical_accurate/rbbb_70bpm_1.png',
        '/ecg/medical_accurate/rbbb_75bpm.png',
        '/ecg/medical_accurate/rbbb_80bpm_2.png',
        '/ecg/medical_accurate/rbbb_90bpm.png',
        '/ecg/medical_accurate/rbbb_90bpm_3.png',
        '/ecg/medical_accurate/rbbb_95bpm_4.png',
        // From clean dataset
        '/ecg/ecg_dataset_clean/lbbb_clean_001.png',
        '/ecg/ecg_dataset_clean/lbbb_clean_002.png',
        '/ecg/ecg_dataset_clean/rbbb_clean_001.png',
        '/ecg/ecg_dataset_clean/rbbb_clean_002.png',
        '/ecg/ecg_dataset_clean/bundle_branch_block_001.png',
        // From main ECG folder
        '/ecg/118_RightBundleBranchBlock.png',
        '/ecg/124_RightBundleBranchBlock.png',
        '/ecg/231_LeftBundleBranchBlock.png',
        // From lesson images
        '/lessonimages/lbbb.png'
    ],
    
    // AV Blocks - Enhanced
    AV_BLOCKS: [
        '/ecg/medical_accurate/first_degree_av_block_60bpm_1.png',
        '/ecg/medical_accurate/first_degree_av_block_70bpm_2.png',
        '/ecg/medical_accurate/first_degree_av_block_80bpm_3.png',
        '/ecg/ecg_dataset_clean/first_degree_av_block_001.png',
        '/ecg/ecg_dataset_clean/second_degree_av_block_001.png',
        '/ecg/ecg_dataset_clean/third_degree_av_block_001.png',
        '/ecg/ecg_dataset_clean/av_block_clean_001.png',
        '/ecg/ecg_dataset_clean/av_block_clean_002.png'
    ],
    
    // PVCs - Enhanced
    PVC: [
        '/ecg/medical_accurate/pvc_65bpm.png',
        '/ecg/medical_accurate/pvc_70bpm_1.png',
        '/ecg/medical_accurate/pvc_78bpm_2.png',
        '/ecg/medical_accurate/pvc_80bpm.png',
        '/ecg/medical_accurate/pvc_85bpm_3.png',
        '/ecg/medical_accurate/pvc_95bpm.png',
        '/ecg/ecg_dataset_clean/pvc_clean_001.png',
        '/ecg/ecg_dataset_clean/pvc_clean_002.png',
        '/ecg/ecg_dataset_clean/pvc_clean_003.png',
        '/ecg/ecg_dataset_clean/premature_ventricular_001.png',
        '/ecg/ecg_dataset_clean/premature_ventricular_002.png',
        '/ecg/101_VentricularEctopy.png',
        '/ecg/102_VentricularEctopy.png',
        '/ecg/103_VentricularEctopy.png',
        '/ecg/209_AtrialPrematureBeats.png',
        '/lessonimages/monomorphic-pvc.png'
    ],
    
    // SVT - Enhanced
    SVT: [
        '/ecg/medical_accurate/supraventricular_tachycardia_160bpm_1.png',
        '/ecg/medical_accurate/supraventricular_tachycardia_180bpm_2.png',
        '/ecg/medical_accurate/supraventricular_tachycardia_200bpm_3.png',
        '/ecg/ecg_dataset_clean/svt_clean_001.png',
        '/ecg/ecg_dataset_clean/svt_clean_002.png',
        '/ecg/ecg_dataset_clean/supraventricular_tachycardia_001.png',
        '/ecg/228_SupraventricularArrhythmia.png',
        '/lessonimages/svt-avnrt.png'
    ],
    
    // Additional Advanced Rhythms
    PACED_RHYTHMS: [
        '/ecg/ecg_dataset_clean/paced_rhythm_001.png',
        '/ecg/ecg_dataset_clean/paced_rhythm_002.png',
        '/ecg/ecg_dataset_clean/pacemaker_rhythm_001.png',
        '/ecg/ecg_dataset_clean/ventricular_paced_001.png'
    ],
    
    ISCHEMIA: [
        '/ecg/ecg_dataset_clean/ischemia_001.png',
        '/ecg/ecg_dataset_clean/ischemia_002.png',
        '/ecg/ecg_dataset_clean/st_elevation_001.png',
        '/ecg/ecg_dataset_clean/st_depression_001.png',
        '/ecg/ecg_dataset_clean/t_wave_inversion_001.png',
        '/lessonimages/inferior-mi.png',
        '/lessonimages/hyperkalemia.png',
        '/lessonimages/long-qt-torsades.png',
        '/lessonimages/long-qt-twi.png',
        '/lessonimages/lvh-twi.png'
    ],
    
    MIXED_ARRHYTHMIAS: [
        '/ecg/ecg_dataset_clean/mixed_rhythm_001.png',
        '/ecg/ecg_dataset_clean/mixed_rhythm_002.png',
        '/ecg/ecg_dataset_clean/complex_arrhythmia_001.png',
        '/ecg/ecg_dataset_clean/complex_arrhythmia_002.png',
        '/ecg/ecg_dataset_clean/artifact_rhythm_001.png',
        '/lessonimages/artifact-causes-overview.png',
        '/lessonimages/artifact-vs-real-rhythm.png'
    ]
};

// ============= HELPER FUNCTIONS =============
// Helper function to get random ECG image for a specific rhythm type
function getRandomECGImage(rhythmType) {
    const images = ECG_IMAGE_MAPPINGS[rhythmType] || ECG_IMAGE_MAPPINGS.NORMAL;
    if (images.length === 0) {
        console.warn(`No images found for rhythm type: ${rhythmType}`);
        return ECG_IMAGE_MAPPINGS.NORMAL[0] || '/ecg/placeholder.png';
    }
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

// Helper function to get educational image for flashcard content
function getFlashcardEducationalImage(topic) {
    // Map educational topics to appropriate lesson images
    const educationalMappings = {
        'rate_calculation': ECG_IMAGE_MAPPINGS.RATE_CALCULATION,
        'p_wave_analysis': ECG_IMAGE_MAPPINGS.P_WAVE_ANALYSIS,
        'interval_measurements': ECG_IMAGE_MAPPINGS.INTERVAL_MEASUREMENTS,
        'age_variations': ECG_IMAGE_MAPPINGS.AGE_VARIATIONS,
        'athletic_patterns': ECG_IMAGE_MAPPINGS.ATHLETIC_PATTERNS,
        'junctional_rhythms': ECG_IMAGE_MAPPINGS.JUNCTIONAL_RHYTHMS,
        'bradycardia_causes': [...ECG_IMAGE_MAPPINGS.BRADYCARDIA, ...ECG_IMAGE_MAPPINGS.JUNCTIONAL_RHYTHMS],
        'tachycardia_types': [...ECG_IMAGE_MAPPINGS.TACHYCARDIA, ...ECG_IMAGE_MAPPINGS.SVT],
        'bundle_branch_blocks': ECG_IMAGE_MAPPINGS.BUNDLE_BRANCH_BLOCKS,
        'av_blocks': ECG_IMAGE_MAPPINGS.AV_BLOCKS,
        'ischemia_patterns': ECG_IMAGE_MAPPINGS.ISCHEMIA,
        'mixed_arrhythmias': ECG_IMAGE_MAPPINGS.MIXED_ARRHYTHMIAS
    };
    
    const images = educationalMappings[topic] || ECG_IMAGE_MAPPINGS.NORMAL;
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

// ============= TASK CREATION FUNCTIONS =============
// Day 1 Special Tasks with Flashcards
function createDay1Tasks() {
    return [
        {
            id: 'code-pulse-day-1-task-1',
            type: 'flashcard-learning',
            title: 'Interactive ECG Flashcards: Fundamentals',
            description: 'Study 3 interactive flashcards to learn Normal Sinus Rhythm basics',
            difficulty: 'easy',
            estimatedTime: 8,
            ecgImage: ECG_IMAGE_MAPPINGS.NORMAL[0],
            flashcards: [
                {
                    id: 'flashcard-1',
                    title: 'Normal Sinus Rhythm Definition',
                    ecgImage: ECG_IMAGE_MAPPINGS.NORMAL[0],
                    frontContent: 'What is Normal Sinus Rhythm?',
                    backContent: 'NSR is the normal heart rhythm originating from the sinoatrial (SA) node. It has regular P waves before each QRS complex, with a heart rate of 60-100 bpm.',
                    keyPoints: ['Originates from SA node', 'Regular P waves before QRS', 'Heart rate 60-100 bpm', 'Normal PR interval'],
                    difficulty: 'easy'
                },
                {
                    id: 'flashcard-2',
                    title: 'NSR Key Features',
                    ecgImage: ECG_IMAGE_MAPPINGS.NORMAL[1],
                    frontContent: 'What are the key features of NSR?',
                    backContent: 'Key features of Normal Sinus Rhythm include regular rhythm, appropriate heart rate, and normal intervals.',
                    keyPoints: ['Heart rate: 60-100 bpm', 'P waves: Present and upright in lead II', 'PR interval: 0.12-0.20 seconds', 'QRS: <0.12 seconds', 'Regular rhythm'],
                    difficulty: 'easy'
                },
                {
                    id: 'flashcard-3',
                    title: 'Heart Rate Calculation',
                    ecgImage: getFlashcardEducationalImage('rate_calculation'),
                    frontContent: 'How do you calculate heart rate on ECG?',
                    backContent: 'There are several methods to calculate heart rate from an ECG strip.',
                    keyPoints: ['Method 1: Count R waves in 6 seconds and multiply by 10', 'Method 2: 300 divided by number of large boxes between R waves', 'Method 3: 1500 divided by small boxes between R waves'],
                    difficulty: 'easy'
                }
            ],
            questions: [
                {
                    id: 'fc-quiz-1',
                    question: 'What is the normal heart rate range for adults?',
                    options: ['40-60 bpm', '60-100 bpm', '100-150 bpm', '150-200 bpm'],
                    correct: 1,
                    explanation: 'Normal adult heart rate is 60-100 beats per minute.',
                    difficulty: 'easy'
                },
                {
                    id: 'fc-quiz-2',
                    question: 'Where does Normal Sinus Rhythm originate?',
                    options: ['AV node', 'SA node', 'Bundle of His', 'Purkinje fibers'],
                    correct: 1,
                    explanation: 'NSR originates from the sinoatrial (SA) node, the heart\'s natural pacemaker.',
                    difficulty: 'easy'
                },
                {
                    id: 'fc-quiz-3',
                    question: 'What is the normal PR interval duration?',
                    options: ['0.08-0.12 seconds', '0.12-0.20 seconds', '0.20-0.30 seconds', '>0.30 seconds'],
                    correct: 1,
                    explanation: 'Normal PR interval is 0.12-0.20 seconds, representing conduction time from atria to ventricles.',
                    difficulty: 'easy'
                }
            ],
            rewards: { xp: 100, gems: 15 },
            unlocked: true,
            completed: false
        },
        {
            id: 'code-pulse-day-1-task-2',
            type: 'ecg-quiz',
            title: 'Normal Sinus Rhythm: Knowledge Check',
            description: 'Test your understanding of ECG basics',
            difficulty: 'easy',
            estimatedTime: 4,
            ecgImage: ECG_IMAGE_MAPPINGS.NORMAL[1],
            questions: [
                {
                    id: 'nsr-1',
                    question: 'What rhythm is shown in this ECG?',
                    options: ['Atrial fibrillation', 'Normal sinus rhythm', 'Ventricular tachycardia', 'Atrial flutter'],
                    correct: 1,
                    explanation: 'This shows normal sinus rhythm with regular P waves and normal intervals.',
                    difficulty: 'easy'
                },
                {
                    id: 'nsr-2',
                    question: 'The heart rate in this ECG is approximately:',
                    options: ['50 bpm', '75 bpm', '110 bpm', '150 bpm'],
                    correct: 1,
                    explanation: 'The heart rate appears to be around 75 bpm, which is normal.',
                    difficulty: 'easy'
                }
            ],
            rewards: { xp: 80, gems: 10 },
            unlocked: true,
            completed: false
        },
        {
            id: 'code-pulse-day-1-task-3',
            type: 'clinical-scenario',
            title: 'Normal Sinus Rhythm: Clinical Application',
            description: 'Apply your knowledge in real scenarios',
            difficulty: 'easy',
            estimatedTime: 5,
            ecgImage: ECG_IMAGE_MAPPINGS.NORMAL[2],
            questions: [
                {
                    id: 'clinical-1',
                    question: 'A 35-year-old athlete shows this ECG. What is your assessment?',
                    options: ['Abnormal - needs cardiology referral', 'Normal variant for athlete', 'Signs of heart disease', 'Inconclusive'],
                    correct: 1,
                    explanation: 'This is normal sinus rhythm, common in healthy athletes.',
                    difficulty: 'easy'
                }
            ],
            rewards: { xp: 90, gems: 15 },
            unlocked: true,
            completed: false
        }
    ];
}
// Normal Rhythms Tasks (Days 2-7) - Updated to use flashcard-learning as Task 1
function createNormalRhythmTasks(dayNumber, baseXP, baseGems) {
    const normalImages = ECG_IMAGE_MAPPINGS.NORMAL;
    const imageIndex = (dayNumber - 2) % normalImages.length;
    const dayTopics = [
        { title: 'Rate Calculation Methods', concepts: ['6-second method', '300 rule', '1500 rule'], educationalTopic: 'rate_calculation' },
        { title: 'P-wave Morphology', concepts: ['P-wave shape', 'P-wave axis', 'Atrial activity'], educationalTopic: 'p_wave_analysis' },
        { title: 'Interval Measurements', concepts: ['PR interval', 'QRS duration', 'QT interval'], educationalTopic: 'interval_measurements' },
        { title: 'Age-Related Variations', concepts: ['Pediatric norms', 'Adult standards', 'Elderly changes'], educationalTopic: 'age_variations' },
        { title: 'Athletic Heart Patterns', concepts: ['Sinus bradycardia', 'Early repolarization', 'Training adaptations'], educationalTopic: 'athletic_patterns' },
        { title: 'Assessment Skills', concepts: ['Systematic approach', 'Normal variants', 'Clinical correlation'], educationalTopic: 'p_wave_analysis' }
    ];
    const dayFocus = dayTopics[dayNumber - 2];

    return [
        {
            id: `code-pulse-day-${dayNumber}-task-1`,
            type: 'flashcard-learning',
            title: `Interactive ECG Flashcards: ${dayFocus.title}`,
            description: `Study 3 interactive flashcards to master ${dayFocus.title.toLowerCase()}`,
            difficulty: 'easy',
            estimatedTime: 8,
            ecgImage: getFlashcardEducationalImage(dayFocus.educationalTopic),
            flashcards: [
                {
                    id: `flashcard-${dayNumber}-1`,
                    title: `${dayFocus.title} - ${dayFocus.concepts[0]}`,
                    ecgImage: getFlashcardEducationalImage(dayFocus.educationalTopic),
                    frontContent: `What is the key concept of ${dayFocus.concepts[0]}?`,
                    backContent: `${dayFocus.concepts[0]} is a fundamental aspect of ${dayFocus.title.toLowerCase()} that helps in accurate ECG interpretation.`,
                    keyPoints: [
                        `Essential for ${dayFocus.title.toLowerCase()}`,
                        `Critical diagnostic feature`,
                        `Normal range variations`,
                        `Clinical significance`
                    ],
                    difficulty: 'easy'
                },
                {
                    id: `flashcard-${dayNumber}-2`,
                    title: `${dayFocus.title} - ${dayFocus.concepts[1]}`,
                    ecgImage: getFlashcardEducationalImage(dayFocus.educationalTopic),
                    frontContent: `How does ${dayFocus.concepts[1]} relate to ${dayFocus.title.toLowerCase()}?`,
                    backContent: `${dayFocus.concepts[1]} is another important element that provides valuable information for ECG analysis.`,
                    keyPoints: [
                        `Important diagnostic tool`,
                        `Normal vs abnormal patterns`,
                        `Clinical applications`,
                        `Measurement techniques`
                    ],
                    difficulty: 'easy'
                },
                {
                    id: `flashcard-${dayNumber}-3`,
                    title: `${dayFocus.title} - ${dayFocus.concepts[2]}`,
                    ecgImage: getFlashcardEducationalImage(dayFocus.educationalTopic),
                    frontContent: `What should you know about ${dayFocus.concepts[2]}?`,
                    backContent: `${dayFocus.concepts[2]} completes the understanding of ${dayFocus.title.toLowerCase()} and its clinical applications.`,
                    keyPoints: [
                        `Advanced understanding`,
                        `Clinical correlation`,
                        `Practical applications`,
                        `Professional interpretation`
                    ],
                    difficulty: 'easy'
                }
            ],
            questions: [
                {
                    id: `fc-quiz-${dayNumber}-1`,
                    question: `What is the primary focus of ${dayFocus.title.toLowerCase()}?`,
                    options: ['Technical accuracy', 'Clinical relevance', 'Both accuracy and relevance', 'None of the above'],
                    correct: 2,
                    explanation: `${dayFocus.title} requires both technical accuracy and clinical relevance for proper ECG interpretation.`,
                    difficulty: 'easy'
                },
                {
                    id: `fc-quiz-${dayNumber}-2`,
                    question: `Which concept is most important in ${dayFocus.title.toLowerCase()}?`,
                    options: [dayFocus.concepts[0], dayFocus.concepts[1], dayFocus.concepts[2], 'All are equally important'],
                    correct: 3,
                    explanation: `All concepts in ${dayFocus.title.toLowerCase()} work together for comprehensive understanding.`,
                    difficulty: 'easy'
                },
                {
                    id: `fc-quiz-${dayNumber}-3`,
                    question: `How does ${dayFocus.title.toLowerCase()} help in clinical practice?`,
                    options: ['Improves accuracy', 'Enhances understanding', 'Guides treatment', 'All of the above'],
                    correct: 3,
                    explanation: `${dayFocus.title} improves accuracy, enhances understanding, and guides appropriate treatment decisions.`,
                    difficulty: 'easy'
                }
            ],
            rewards: { xp: baseXP, gems: baseGems },
            unlocked: true,
            completed: false
        },
        {
            id: `code-pulse-day-${dayNumber}-task-2`,
            type: 'ecg-quiz',
            title: `${dayFocus.title}: Knowledge Assessment`,
            description: `Test your understanding of ${dayFocus.title.toLowerCase()}`,
            difficulty: 'easy',
            estimatedTime: 5,
            ecgImage: normalImages[(imageIndex + 1) % normalImages.length],
            questions: [
                {
                    id: `quiz-${dayNumber}-1`,
                    question: `What is the key characteristic of ${dayFocus.title.toLowerCase()} in this ECG?`,
                    options: ['Within normal limits', 'Slightly abnormal', 'Concerning finding', 'Cannot determine'],
                    correct: 0,
                    explanation: `The ${dayFocus.title.toLowerCase()} shown here is within normal limits.`,
                    difficulty: 'easy'
                }
            ],
            rewards: { xp: baseXP - 10, gems: baseGems - 2 },
            unlocked: true,
            completed: false
        },
        {
            id: `code-pulse-day-${dayNumber}-task-3`,
            type: 'clinical-scenario',
            title: `${dayFocus.title}: Clinical Application`,
            description: `Apply ${dayFocus.title.toLowerCase()} knowledge clinically`,
            difficulty: 'easy',
            estimatedTime: 4,
            ecgImage: normalImages[(imageIndex + 2) % normalImages.length],
            questions: [
                {
                    id: `clinical-${dayNumber}-1`,
                    question: `How would you interpret ${dayFocus.title.toLowerCase()} in this clinical context?`,
                    options: ['Normal finding', 'Needs follow-up', 'Emergency referral', 'Repeat ECG needed'],
                    correct: 0,
                    explanation: `This represents a normal finding for ${dayFocus.title.toLowerCase()}.`,
                    difficulty: 'easy'
                }
            ],
            rewards: { xp: baseXP + 10, gems: baseGems + 3 },
            unlocked: true,
            completed: false
        }
    ];
}
// Bradycardia Tasks (Days 8-14) - Updated to use flashcard-learning as Task 1
function createBradycardiaTasks(dayNumber, baseXP, baseGems) {
    const bradyImages = ECG_IMAGE_MAPPINGS.BRADYCARDIA;
    const avBlockImages = ECG_IMAGE_MAPPINGS.AV_BLOCKS;
    const imageIndex = (dayNumber - 8) % bradyImages.length;
    const dayTopics = [
        { title: 'Bradycardia Recognition', concepts: ['Rate < 60 bpm', 'Sinus bradycardia', 'Symptomatic assessment'], educationalTopic: 'bradycardia_causes' },
        { title: 'Sinus Bradycardia', concepts: ['SA node origin', 'Athletic heart', 'Medication effects'], educationalTopic: 'athletic_patterns' },
        { title: 'Junctional Rhythms', concepts: ['AV node escape', 'P-wave changes', 'Rate characteristics'], educationalTopic: 'junctional_rhythms' },
        { title: 'AV Block Introduction', concepts: ['Conduction delays', 'Block classifications', 'Clinical significance'], educationalTopic: 'av_blocks' },
        { title: 'First-Degree AV Block', concepts: ['PR prolongation', 'Fixed delay', 'Benign nature'], educationalTopic: 'av_blocks' },
        { title: 'Second-Degree AV Blocks', concepts: ['Mobitz Type I', 'Mobitz Type II', 'Progressive blocks'], educationalTopic: 'av_blocks' },
        { title: 'Clinical Assessment', concepts: ['Hemodynamic impact', 'Treatment decisions', 'Pacing indications'], educationalTopic: 'bradycardia_causes' }
    ];
    const dayFocus = dayTopics[dayNumber - 8];
    const useAVImages = dayNumber >= 11;
    const images = useAVImages ? avBlockImages : bradyImages;

    return [
        {
            id: `code-pulse-day-${dayNumber}-task-1`,
            type: 'flashcard-learning',
            title: `Interactive ECG Flashcards: ${dayFocus.title}`,
            description: `Study 3 interactive flashcards to master ${dayFocus.title.toLowerCase()}`,
            difficulty: 'medium',
            estimatedTime: 8,
            ecgImage: getFlashcardEducationalImage(dayFocus.educationalTopic),
            flashcards: [
                {
                    id: `flashcard-${dayNumber}-1`,
                    title: `${dayFocus.title} - ${dayFocus.concepts[0]}`,
                    ecgImage: getFlashcardEducationalImage(dayFocus.educationalTopic),
                    frontContent: `What is the key concept of ${dayFocus.concepts[0]}?`,
                    backContent: `${dayFocus.concepts[0]} is a fundamental aspect of ${dayFocus.title.toLowerCase()} that requires careful clinical evaluation.`,
                    keyPoints: [
                        `Essential for ${dayFocus.title.toLowerCase()}`,
                        `Critical diagnostic feature`,
                        `Clinical assessment needed`,
                        `Treatment considerations`
                    ],
                    difficulty: 'medium'
                },
                {
                    id: `flashcard-${dayNumber}-2`,
                    title: `${dayFocus.title} - ${dayFocus.concepts[1]}`,
                    ecgImage: getFlashcardEducationalImage(dayFocus.educationalTopic),
                    frontContent: `How does ${dayFocus.concepts[1]} relate to ${dayFocus.title.toLowerCase()}?`,
                    backContent: `${dayFocus.concepts[1]} is an important element that provides crucial information for bradycardia assessment.`,
                    keyPoints: [
                        `Important diagnostic tool`,
                        `Pattern recognition`,
                        `Clinical applications`,
                        `Management implications`
                    ],
                    difficulty: 'medium'
                },
                {
                    id: `flashcard-${dayNumber}-3`,
                    title: `${dayFocus.title} - ${dayFocus.concepts[2]}`,
                    ecgImage: getFlashcardEducationalImage(dayFocus.educationalTopic),
                    frontContent: `What should you know about ${dayFocus.concepts[2]}?`,
                    backContent: `${dayFocus.concepts[2]} completes the understanding of ${dayFocus.title.toLowerCase()} and its clinical management.`,
                    keyPoints: [
                        `Advanced understanding`,
                        `Clinical correlation`,
                        `Treatment planning`,
                        `Professional assessment`
                    ],
                    difficulty: 'medium'
                }
            ],
            questions: [
                {
                    id: `fc-quiz-${dayNumber}-1`,
                    question: `What is the most important aspect of ${dayFocus.title.toLowerCase()}?`,
                    options: ['Rate calculation', 'Symptom assessment', 'Both rate and symptoms', 'ECG pattern only'],
                    correct: 2,
                    explanation: `${dayFocus.title} requires evaluation of both rate and clinical symptoms for proper management.`,
                    difficulty: 'medium'
                },
                {
                    id: `fc-quiz-${dayNumber}-2`,
                    question: `Which factor is crucial in ${dayFocus.title.toLowerCase()}?`,
                    options: [dayFocus.concepts[0], dayFocus.concepts[1], dayFocus.concepts[2], 'All are equally important'],
                    correct: 3,
                    explanation: `All concepts in ${dayFocus.title.toLowerCase()} work together for comprehensive assessment.`,
                    difficulty: 'medium'
                },
                {
                    id: `fc-quiz-${dayNumber}-3`,
                    question: `How does ${dayFocus.title.toLowerCase()} impact patient care?`,
                    options: ['Minimal impact', 'Moderate impact', 'Significant impact', 'Variable impact'],
                    correct: 3,
                    explanation: `${dayFocus.title} has variable impact depending on patient symptoms and underlying conditions.`,
                    difficulty: 'medium'
                }
            ],
            rewards: { xp: baseXP, gems: baseGems },
            unlocked: true,
            completed: false
        },
        {
            id: `code-pulse-day-${dayNumber}-task-2`,
            type: 'ecg-quiz',
            title: `${dayFocus.title}: Comprehensive Analysis`,
            description: `Deep dive into ${dayFocus.title.toLowerCase()} patterns`,
            difficulty: 'medium',
            estimatedTime: 6,
            ecgImage: images[(imageIndex + 1) % images.length],
            questions: [
                {
                    id: `brady-quiz-${dayNumber}-1`,
                    question: `What is the clinical significance of this ${dayFocus.title.toLowerCase()}?`,
                    options: ['Usually benign', 'May need treatment', 'Always pathological', 'Inconclusive'],
                    correct: dayNumber <= 10 ? 0 : 1,
                    explanation: `${dayFocus.title} has varying clinical significance depending on the patient.`,
                    difficulty: 'medium'
                }
            ],
            rewards: { xp: baseXP - 15, gems: baseGems - 3 },
            unlocked: true,
            completed: false
        },
        {
            id: `code-pulse-day-${dayNumber}-task-3`,
            type: 'clinical-scenario',
            title: `${dayFocus.title}: Management Decisions`,
            description: `Clinical decision making for ${dayFocus.title.toLowerCase()}`,
            difficulty: 'medium',
            estimatedTime: 8,
            ecgImage: images[(imageIndex + 2) % images.length],
            questions: [
                {
                    id: `brady-clinical-${dayNumber}-1`,
                    question: `What is the appropriate management for this ${dayFocus.title.toLowerCase()}?`,
                    options: ['Observation only', 'Medication review', 'Pacemaker consideration', 'Emergency treatment'],
                    correct: dayNumber <= 11 ? 1 : 2,
                    explanation: `Management depends on symptoms and underlying rhythm type.`,
                    difficulty: 'medium'
                }
            ],
            rewards: { xp: baseXP + 15, gems: baseGems + 4 },
            unlocked: true,
            completed: false
        }
    ];
}
// Tachycardia Tasks (Days 15-21) - Updated to use flashcard-learning as Task 1
function createTachycardiaTasks(dayNumber, baseXP, baseGems) {
    const tachyImages = ECG_IMAGE_MAPPINGS.TACHYCARDIA;
    const svtImages = ECG_IMAGE_MAPPINGS.SVT;
    const vtImages = ECG_IMAGE_MAPPINGS.VENTRICULAR_TACHYCARDIA;
    const imageIndex = (dayNumber - 15) % tachyImages.length;
    const dayTopics = [
        { title: 'Tachycardia Classification', concepts: ['Rate > 100 bpm', 'Wide vs narrow', 'Regular vs irregular'] },
        { title: 'Sinus Tachycardia', concepts: ['SA node origin', 'Physiologic response', 'Underlying causes'] },
        { title: 'Atrial Tachycardia', concepts: ['Atrial origin', 'P-wave morphology', 'AV conduction'] },
        { title: 'SVT Recognition', concepts: ['Narrow complex', 'Rapid rate', 'Reentrant circuits'] },
        { title: 'VT Introduction', concepts: ['Wide complex', 'Ventricular origin', 'Hemodynamic impact'] },
        { title: 'Wide vs Narrow Complex', concepts: ['QRS width', 'Origin differentiation', 'Treatment implications'] },
        { title: 'Clinical Assessment', concepts: ['Hemodynamic stability', 'Treatment urgency', 'Long-term management'] }
    ];
    const dayFocus = dayTopics[dayNumber - 15];
    let images = tachyImages;
    if (dayNumber === 18) images = svtImages;
    if (dayNumber >= 19) images = vtImages;

    return [
        {
            id: `code-pulse-day-${dayNumber}-task-1`,
            type: 'flashcard-learning',
            title: `Interactive ECG Flashcards: ${dayFocus.title}`,
            description: `Study 3 interactive flashcards to master ${dayFocus.title.toLowerCase()}`,
            difficulty: dayNumber >= 19 ? 'hard' : 'medium',
            estimatedTime: 8,
            ecgImage: images[imageIndex % images.length],
            flashcards: [
                {
                    id: `flashcard-${dayNumber}-1`,
                    title: `${dayFocus.title} - ${dayFocus.concepts[0]}`,
                    ecgImage: images[imageIndex % images.length],
                    frontContent: `What is the key concept of ${dayFocus.concepts[0]}?`,
                    backContent: `${dayFocus.concepts[0]} is a fundamental aspect of ${dayFocus.title.toLowerCase()} that requires immediate recognition and assessment.`,
                    keyPoints: [
                        `Critical for ${dayFocus.title.toLowerCase()}`,
                        `Emergency assessment needed`,
                        `Rapid identification required`,
                        `Treatment implications`
                    ],
                    difficulty: dayNumber >= 19 ? 'hard' : 'medium'
                },
                {
                    id: `flashcard-${dayNumber}-2`,
                    title: `${dayFocus.title} - ${dayFocus.concepts[1]}`,
                    ecgImage: images[(imageIndex + 1) % images.length],
                    frontContent: `How does ${dayFocus.concepts[1]} relate to ${dayFocus.title.toLowerCase()}?`,
                    backContent: `${dayFocus.concepts[1]} is an important element that provides crucial diagnostic information for tachycardia management.`,
                    keyPoints: [
                        `Diagnostic significance`,
                        `Pattern recognition`,
                        `Clinical implications`,
                        `Management guidance`
                    ],
                    difficulty: dayNumber >= 19 ? 'hard' : 'medium'
                },
                {
                    id: `flashcard-${dayNumber}-3`,
                    title: `${dayFocus.title} - ${dayFocus.concepts[2]}`,
                    ecgImage: images[(imageIndex + 2) % images.length],
                    frontContent: `What should you know about ${dayFocus.concepts[2]}?`,
                    backContent: `${dayFocus.concepts[2]} completes the understanding of ${dayFocus.title.toLowerCase()} and guides emergency treatment decisions.`,
                    keyPoints: [
                        `Advanced assessment`,
                        `Emergency protocols`,
                        `Treatment planning`,
                        `Critical care decisions`
                    ],
                    difficulty: dayNumber >= 19 ? 'hard' : 'medium'
                }
            ],
            questions: [
                {
                    id: `fc-quiz-${dayNumber}-1`,
                    question: `What is the most critical aspect of ${dayFocus.title.toLowerCase()}?`,
                    options: ['Rate measurement', 'Hemodynamic assessment', 'Both rate and stability', 'ECG morphology only'],
                    correct: 2,
                    explanation: `${dayFocus.title} requires evaluation of both rhythm characteristics and hemodynamic stability.`,
                    difficulty: dayNumber >= 19 ? 'hard' : 'medium'
                },
                {
                    id: `fc-quiz-${dayNumber}-2`,
                    question: `Which factor determines urgency in ${dayFocus.title.toLowerCase()}?`,
                    options: [dayFocus.concepts[0], dayFocus.concepts[1], dayFocus.concepts[2], 'Patient symptoms'],
                    correct: 3,
                    explanation: `Patient symptoms and hemodynamic stability determine the urgency of treatment in ${dayFocus.title.toLowerCase()}.`,
                    difficulty: dayNumber >= 19 ? 'hard' : 'medium'
                },
                {
                    id: `fc-quiz-${dayNumber}-3`,
                    question: `How does ${dayFocus.title.toLowerCase()} impact emergency care?`,
                    options: ['Low priority', 'Moderate priority', 'High priority', 'Variable priority'],
                    correct: 3,
                    explanation: `${dayFocus.title} has variable priority depending on patient stability and underlying condition.`,
                    difficulty: dayNumber >= 19 ? 'hard' : 'medium'
                }
            ],
            rewards: { xp: baseXP, gems: baseGems },
            unlocked: true,
            completed: false
        },
        {
            id: `code-pulse-day-${dayNumber}-task-2`,
            type: 'ecg-quiz',
            title: `${dayFocus.title}: Pattern Recognition`,
            description: `Advanced ${dayFocus.title.toLowerCase()} analysis`,
            difficulty: dayNumber >= 19 ? 'hard' : 'medium',
            estimatedTime: 7,
            ecgImage: images[(imageIndex + 1) % images.length],
            questions: [
                {
                    id: `tachy-quiz-${dayNumber}-1`,
                    question: `What is the distinguishing feature of this ${dayFocus.title.toLowerCase()}?`,
                    options: ['QRS width', 'Rate pattern', 'P wave morphology', 'All of the above'],
                    correct: 3,
                    explanation: `Multiple ECG features help distinguish different tachycardia types.`,
                    difficulty: dayNumber >= 19 ? 'hard' : 'medium'
                }
            ],
            rewards: { xp: baseXP - 20, gems: baseGems - 4 },
            unlocked: true,
            completed: false
        },
        {
            id: `code-pulse-day-${dayNumber}-task-3`,
            type: 'clinical-scenario',
            title: `${dayFocus.title}: Emergency Management`,
            description: `Critical decision making for ${dayFocus.title.toLowerCase()}`,
            difficulty: dayNumber >= 19 ? 'hard' : 'medium',
            estimatedTime: 9,
            ecgImage: images[(imageIndex + 2) % images.length],
            questions: [
                {
                    id: `tachy-clinical-${dayNumber}-1`,
                    question: `What is the immediate priority for this ${dayFocus.title.toLowerCase()}?`,
                    options: ['Monitor only', 'Medications', 'Cardioversion', 'Detailed assessment'],
                    correct: dayNumber >= 19 ? 2 : 3,
                    explanation: `Treatment urgency depends on stability and rhythm type.`,
                    difficulty: dayNumber >= 19 ? 'hard' : 'medium'
                }
            ],
            rewards: { xp: baseXP + 20, gems: baseGems + 5 },
            unlocked: true,
            completed: false
        }
    ];
}
// Advanced Rhythm Tasks (Days 22-30) - Updated to use flashcard-learning as Task 1
function createAdvancedRhythmTasks(dayNumber, topic, category, baseXP, baseGems) {
    const images = ECG_IMAGE_MAPPINGS[category];
    const imageIndex = (dayNumber - 22) % images.length;
    const advancedTopics = {
        'Atrial Fibrillation': { concepts: ['Irregular irregularity', 'RVR vs controlled', 'Anticoagulation needs'] },
        'Atrial Flutter': { concepts: ['Sawtooth pattern', 'Conduction ratios', 'AV block relationships'] },
        'Bundle Branch Blocks': { concepts: ['LBBB morphology', 'RBBB morphology', 'Clinical significance'] },
        'Premature Contractions': { concepts: ['PVC patterns', 'PAC recognition', 'Clinical assessment'] },
        'Paced Rhythms': { concepts: ['Pacemaker spikes', 'Capture assessment', 'Failure modes'] },
        'Ischemic Changes': { concepts: ['ST elevation', 'ST depression', 'T wave changes'] },
        'Complex Arrhythmias': { concepts: ['Mixed patterns', 'Multiple abnormalities', 'Priority assessment'] }
    };
    const topicData = advancedTopics[topic] || { concepts: ['Advanced pattern', 'Expert recognition', 'Clinical correlation'] };

    return [
        {
            id: `code-pulse-day-${dayNumber}-task-1`,
            type: 'flashcard-learning',
            title: `Interactive ECG Flashcards: ${topic}`,
            description: `Study 3 interactive flashcards to master advanced ${topic.toLowerCase()}`,
            difficulty: dayNumber >= 26 ? 'expert' : 'hard',
            estimatedTime: 10,
            ecgImage: images[imageIndex % images.length],
            flashcards: [
                {
                    id: `flashcard-${dayNumber}-1`,
                    title: `${topic} - ${topicData.concepts[0]}`,
                    ecgImage: images[imageIndex % images.length],
                    frontContent: `What is the key concept of ${topicData.concepts[0]} in ${topic.toLowerCase()}?`,
                    backContent: `${topicData.concepts[0]} is a critical diagnostic feature of ${topic.toLowerCase()} that requires expert-level recognition and immediate assessment.`,
                    keyPoints: [
                        `Advanced diagnostic feature`,
                        `Expert-level recognition`,
                        `Critical clinical significance`,
                        `Immediate assessment needed`
                    ],
                    difficulty: dayNumber >= 26 ? 'expert' : 'hard'
                },
                {
                    id: `flashcard-${dayNumber}-2`,
                    title: `${topic} - ${topicData.concepts[1]}`,
                    ecgImage: images[(imageIndex + 1) % images.length],
                    frontContent: `How does ${topicData.concepts[1]} relate to advanced ${topic.toLowerCase()}?`,
                    backContent: `${topicData.concepts[1]} is a sophisticated element that provides crucial diagnostic information for complex rhythm interpretation.`,
                    keyPoints: [
                        `Advanced pattern recognition`,
                        `Complex diagnostic implications`,
                        `Expert interpretation skills`,
                        `Advanced clinical correlation`
                    ],
                    difficulty: dayNumber >= 26 ? 'expert' : 'hard'
                },
                {
                    id: `flashcard-${dayNumber}-3`,
                    title: `${topic} - ${topicData.concepts[2]}`,
                    ecgImage: images[(imageIndex + 2) % images.length],
                    frontContent: `What should an expert know about ${topicData.concepts[2]} in ${topic.toLowerCase()}?`,
                    backContent: `${topicData.concepts[2]} represents the highest level of understanding in ${topic.toLowerCase()} and guides expert-level clinical decision making.`,
                    keyPoints: [
                        `Expert-level understanding`,
                        `Advanced clinical applications`,
                        `Complex treatment planning`,
                        `Master-level assessment`
                    ],
                    difficulty: dayNumber >= 26 ? 'expert' : 'hard'
                }
            ],
            questions: [
                {
                    id: `fc-quiz-${dayNumber}-1`,
                    question: `What is the most critical aspect of advanced ${topic.toLowerCase()}?`,
                    options: ['Pattern recognition', 'Clinical correlation', 'Both pattern and clinical', 'Technical accuracy only'],
                    correct: 2,
                    explanation: `Advanced ${topic.toLowerCase()} requires integration of pattern recognition with expert clinical correlation.`,
                    difficulty: dayNumber >= 26 ? 'expert' : 'hard'
                },
                {
                    id: `fc-quiz-${dayNumber}-2`,
                    question: `Which concept is most important for expert ${topic.toLowerCase()} interpretation?`,
                    options: [topicData.concepts[0], topicData.concepts[1], topicData.concepts[2], 'All concepts are essential'],
                    correct: 3,
                    explanation: `Expert-level ${topic.toLowerCase()} interpretation requires mastery of all related concepts.`,
                    difficulty: dayNumber >= 26 ? 'expert' : 'hard'
                },
                {
                    id: `fc-quiz-${dayNumber}-3`,
                    question: `How does advanced ${topic.toLowerCase()} impact expert-level care?`,
                    options: ['Limited impact', 'Moderate impact', 'High impact', 'Critical impact'],
                    correct: 3,
                    explanation: `Advanced ${topic.toLowerCase()} has critical impact on expert-level cardiovascular care and outcomes.`,
                    difficulty: dayNumber >= 26 ? 'expert' : 'hard'
                }
            ],
            rewards: { xp: baseXP, gems: baseGems },
            unlocked: true,
            completed: false
        },
        {
            id: `code-pulse-day-${dayNumber}-task-2`,
            type: 'ecg-quiz',
            title: `${topic}: Expert Analysis`,
            description: `Expert-level ${topic.toLowerCase()} interpretation`,
            difficulty: dayNumber >= 26 ? 'expert' : 'hard',
            estimatedTime: 12,
            ecgImage: images[(imageIndex + 1) % images.length],
            questions: [
                {
                    id: `expert-quiz-${dayNumber}-1`,
                    question: `What is the clinical significance of this ${topic.toLowerCase()} variant?`,
                    options: ['Benign finding', 'Moderate concern', 'High risk', 'Emergency'],
                    correct: dayNumber >= 28 ? 3 : dayNumber >= 26 ? 2 : 1,
                    explanation: `Clinical significance increases with complexity and patient factors.`,
                    difficulty: dayNumber >= 26 ? 'expert' : 'hard'
                }
            ],
            rewards: { xp: baseXP + 25, gems: baseGems + 6 },
            unlocked: true,
            completed: false
        },
        {
            id: `code-pulse-day-${dayNumber}-task-3`,
            type: 'clinical-scenario',
            title: `${topic}: Complex Management`,
            description: `Complex clinical scenarios with ${topic.toLowerCase()}`,
            difficulty: dayNumber >= 26 ? 'expert' : 'hard',
            estimatedTime: 15,
            ecgImage: images[(imageIndex + 2) % images.length],
            questions: [
                {
                    id: `complex-clinical-${dayNumber}-1`,
                    question: `What is the optimal management strategy for this complex ${topic.toLowerCase()}?`,
                    options: ['Conservative approach', 'Aggressive treatment', 'Multidisciplinary care', 'Emergency intervention'],
                    correct: dayNumber >= 28 ? 3 : dayNumber >= 26 ? 2 : 1,
                    explanation: `Complex rhythms require sophisticated management approaches.`,
                    difficulty: dayNumber >= 26 ? 'expert' : 'hard'
                }
            ],
            rewards: { xp: baseXP + 35, gems: baseGems + 8 },
            unlocked: true,
            completed: false
        }
    ];
}
// Clinical Integration Tasks (Day 29) - Updated to use flashcard-learning as Task 1
function createClinicalIntegrationTasks(dayNumber, baseXP, baseGems) {
    const mixedImages = ECG_IMAGE_MAPPINGS.MIXED_ARRHYTHMIAS;
    return [
        {
            id: `code-pulse-day-${dayNumber}-task-1`,
            type: 'flashcard-learning',
            title: 'Interactive ECG Flashcards: Clinical Integration',
            description: 'Study 3 interactive flashcards to master comprehensive ECG clinical integration',
            difficulty: 'expert',
            estimatedTime: 15,
            ecgImage: mixedImages[0],
            flashcards: [
                {
                    id: `flashcard-${dayNumber}-1`,
                    title: 'Clinical Integration - Systematic Analysis',
                    ecgImage: mixedImages[0],
                    frontContent: 'What is the key to systematic ECG analysis in complex cases?',
                    backContent: 'Systematic analysis requires methodical evaluation of rate, rhythm, axis, intervals, and morphology while considering the clinical context.',
                    keyPoints: [
                        'Methodical step-by-step approach',
                        'Integration of all ECG elements',
                        'Clinical context consideration',
                        'Prioritization of findings'
                    ],
                    difficulty: 'expert'
                },
                {
                    id: `flashcard-${dayNumber}-2`,
                    title: 'Clinical Integration - Multi-System Assessment',
                    ecgImage: mixedImages[1],
                    frontContent: 'How do you integrate ECG findings with clinical presentation?',
                    backContent: 'Integration requires correlating ECG abnormalities with patient symptoms, history, physical exam, and other diagnostic tests for comprehensive assessment.',
                    keyPoints: [
                        'Symptom-ECG correlation',
                        'Historical context integration',
                        'Physical exam correlation',
                        'Multi-modal assessment'
                    ],
                    difficulty: 'expert'
                },
                {
                    id: `flashcard-${dayNumber}-3`,
                    title: 'Clinical Integration - Decision Making',
                    ecgImage: mixedImages[2],
                    frontContent: 'What guides clinical decision making in complex ECG cases?',
                    backContent: 'Decision making integrates ECG severity, patient stability, risk stratification, and evidence-based guidelines to determine optimal management.',
                    keyPoints: [
                        'Risk stratification',
                        'Patient stability assessment',
                        'Evidence-based guidelines',
                        'Multidisciplinary approach'
                    ],
                    difficulty: 'expert'
                }
            ],
            questions: [
                {
                    id: `fc-quiz-${dayNumber}-1`,
                    question: 'What is the most important aspect of clinical integration?',
                    options: ['ECG pattern recognition', 'Clinical correlation', 'Both pattern and clinical', 'Guideline adherence'],
                    correct: 2,
                    explanation: 'Clinical integration requires both expert ECG interpretation and comprehensive clinical correlation.',
                    difficulty: 'expert'
                },
                {
                    id: `fc-quiz-${dayNumber}-2`,
                    question: 'Which factor is most critical in complex ECG decision making?',
                    options: ['Patient stability', 'ECG complexity', 'Guideline recommendations', 'All factors equally'],
                    correct: 3,
                    explanation: 'Complex ECG decision making requires integration of all clinical and technical factors.',
                    difficulty: 'expert'
                },
                {
                    id: `fc-quiz-${dayNumber}-3`,
                    question: 'How does clinical integration impact patient outcomes?',
                    options: ['Minimal impact', 'Moderate impact', 'Significant impact', 'Critical impact'],
                    correct: 3,
                    explanation: 'Clinical integration has critical impact on patient outcomes through comprehensive assessment and appropriate management.',
                    difficulty: 'expert'
                }
            ],
            rewards: { xp: baseXP, gems: baseGems },
            unlocked: true,
            completed: false
        },
        {
            id: `code-pulse-day-${dayNumber}-task-2`,
            type: 'rhythm-recognition',
            title: 'Advanced Pattern Integration',
            description: 'Recognize complex patterns requiring integrated knowledge',
            difficulty: 'expert',
            estimatedTime: 18,
            ecgImage: mixedImages[1],
            questions: [
                {
                    id: `pattern-integration-${dayNumber}-1`,
                    question: 'This ECG demonstrates which advanced concept?',
                    options: ['Single pathology', 'Combined abnormalities', 'Technical artifacts', 'Normal variants'],
                    correct: 1,
                    explanation: 'Advanced ECGs often show multiple simultaneous abnormalities.',
                    difficulty: 'expert'
                }
            ],
            rewards: { xp: baseXP + 50, gems: baseGems + 10 },
            unlocked: true,
            completed: false
        },
        {
            id: `code-pulse-day-${dayNumber}-task-3`,
            type: 'clinical-scenario',
            title: 'Comprehensive Assessment',
            description: 'Final integration of all ECG concepts',
            difficulty: 'expert',
            estimatedTime: 25,
            ecgImage: mixedImages[2],
            questions: [
                {
                    id: `comprehensive-${dayNumber}-1`,
                    question: 'What is your complete assessment of this complex ECG?',
                    options: ['Normal study', 'Single abnormality', 'Multiple findings requiring intervention', 'Inconclusive'],
                    correct: 2,
                    explanation: 'Expert-level ECG interpretation requires synthesis of all learned concepts.',
                    difficulty: 'expert'
                }
            ],
            rewards: { xp: baseXP + 75, gems: baseGems + 15 },
            unlocked: true,
            completed: false
        }
    ];
}
// Mastery Assessment Tasks (Day 30) - Updated to use flashcard-learning as Task 1
function createMasteryAssessmentTasks(dayNumber, baseXP, baseGems) {
    return [
        {
            id: `code-pulse-day-${dayNumber}-task-1`,
            type: 'flashcard-learning',
            title: 'Interactive ECG Flashcards: Mastery Review',
            description: 'Study 3 interactive flashcards to review mastery-level ECG concepts',
            difficulty: 'expert',
            estimatedTime: 20,
            ecgImage: ECG_IMAGE_MAPPINGS.NORMAL[0],
            flashcards: [
                {
                    id: `flashcard-${dayNumber}-1`,
                    title: 'ECG Mastery - Complete Assessment',
                    ecgImage: ECG_IMAGE_MAPPINGS.NORMAL[0],
                    frontContent: 'What defines true ECG mastery?',
                    backContent: 'ECG mastery combines expert pattern recognition, comprehensive clinical correlation, and confident decision-making across all rhythm types and clinical scenarios.',
                    keyPoints: [
                        'Expert pattern recognition',
                        'Clinical correlation mastery',
                        'Confident decision-making',
                        'Comprehensive knowledge integration'
                    ],
                    difficulty: 'expert'
                },
                {
                    id: `flashcard-${dayNumber}-2`,
                    title: 'ECG Mastery - Emergency Readiness',
                    ecgImage: ECG_IMAGE_MAPPINGS.VENTRICULAR_TACHYCARDIA[0],
                    frontContent: 'How does ECG mastery impact emergency care?',
                    backContent: 'ECG mastery enables rapid rhythm recognition, immediate risk assessment, and life-saving interventions in critical care situations.',
                    keyPoints: [
                        'Rapid rhythm recognition',
                        'Immediate risk assessment',
                        'Life-saving interventions',
                        'Critical care expertise'
                    ],
                    difficulty: 'expert'
                },
                {
                    id: `flashcard-${dayNumber}-3`,
                    title: 'ECG Mastery - Professional Excellence',
                    ecgImage: ECG_IMAGE_MAPPINGS.ATRIAL_FIBRILLATION[0],
                    frontContent: 'What is the ultimate goal of ECG mastery?',
                    backContent: 'The ultimate goal is providing expert-level cardiovascular care through comprehensive ECG interpretation and evidence-based clinical decision-making.',
                    keyPoints: [
                        'Expert-level care provision',
                        'Comprehensive interpretation',
                        'Evidence-based decisions',
                        'Professional excellence'
                    ],
                    difficulty: 'expert'
                }
            ],
            questions: [
                {
                    id: `fc-quiz-${dayNumber}-1`,
                    question: 'What is the hallmark of ECG mastery?',
                    options: ['Perfect pattern recognition', 'Clinical integration', 'Both pattern and clinical mastery', 'Speed of interpretation'],
                    correct: 2,
                    explanation: 'ECG mastery requires both perfect pattern recognition and comprehensive clinical integration.',
                    difficulty: 'expert'
                },
                {
                    id: `fc-quiz-${dayNumber}-2`,
                    question: 'Which skill is most critical for ECG masters?',
                    options: ['Speed', 'Accuracy', 'Confidence', 'All skills combined'],
                    correct: 3,
                    explanation: 'ECG mastery requires the combination of speed, accuracy, and confidence in all clinical situations.',
                    difficulty: 'expert'
                },
                {
                    id: `fc-quiz-${dayNumber}-3`,
                    question: 'How does ECG mastery benefit patient care?',
                    options: ['Improved diagnosis', 'Better outcomes', 'Faster treatment', 'All of the above'],
                    correct: 3,
                    explanation: 'ECG mastery benefits patient care through improved diagnosis, better outcomes, and faster treatment.',
                    difficulty: 'expert'
                }
            ],
            rewards: { xp: baseXP, gems: baseGems },
            unlocked: true,
            completed: false
        },
        {
            id: `code-pulse-day-${dayNumber}-task-2`,
            type: 'ecg-quiz',
            title: 'Comprehensive ECG Mastery',
            description: 'Final comprehensive assessment of all ECG knowledge',
            difficulty: 'expert',
            estimatedTime: 35,
            ecgImage: ECG_IMAGE_MAPPINGS.ATRIAL_FIBRILLATION[0],
            questions: [
                {
                    id: `final-mastery-${dayNumber}-1`,
                    question: 'What is your expert assessment of this complex rhythm?',
                    options: ['Atrial fibrillation with controlled response', 'Atrial fibrillation with rapid response', 'Atrial flutter with variable block', 'Multifocal atrial tachycardia'],
                    correct: 0,
                    explanation: 'This shows atrial fibrillation with controlled ventricular response.',
                    difficulty: 'expert'
                }
            ],
            rewards: { xp: baseXP + 100, gems: baseGems + 20 },
            unlocked: true,
            completed: false
        },
        {
            id: `code-pulse-day-${dayNumber}-task-3`,
            type: 'clinical-scenario',
            title: 'ECG Master Certification',
            description: 'Final clinical integration challenge',
            difficulty: 'expert',
            estimatedTime: 40,
            ecgImage: ECG_IMAGE_MAPPINGS.VENTRICULAR_TACHYCARDIA[0],
            questions: [
                {
                    id: `certification-${dayNumber}-1`,
                    question: 'In this emergency scenario, what is your immediate action?',
                    options: ['Continuous monitoring', 'Medication administration', 'Immediate cardioversion', 'Cardiology consultation'],
                    correct: 2,
                    explanation: 'Ventricular tachycardia with hemodynamic compromise requires immediate cardioversion.',
                    difficulty: 'expert'
                }
            ],
            rewards: { xp: baseXP + 150, gems: baseGems + 25 },
            unlocked: true,
            completed: false
        }
    ];
}
// ============= CRISIS SIMULATOR TASK CREATION FUNCTIONS =============
// WEEK 1: LETHAL ARRHYTHMIAS (Days 1-7)
function createShockWaveDay1Task() {
    return {
        id: 'shock-wave-day-1-task-1',
        type: 'crisis-simulator',
        title: 'Code Blue: Ventricular Fibrillation',
        description: '58-year-old post-MI patient suddenly collapses. Monitor shows chaotic rhythm.',
        difficulty: 'expert',
        estimatedTime: 12,
        ecgImage: '/ecg/medical_accurate/vtach_200bpm.png',
        questions: [],
        crisisScenario: {
            id: 'vf-emergency-day1',
            title: 'Witnessed Ventricular Fibrillation Arrest',
            patientInfo: {
                age: 58,
                gender: 'Male',
                presentation: 'Day 2 post-STEMI, sudden unresponsiveness during ambulation',
                vitalSigns: 'No pulse, agonal respirations, cyanotic'
            },
            timeLimit: 300,
            ecgImage: '/ecg/medical_accurate/vtach_200bpm.png',
            initialFindings: [
                'Witnessed collapse during cardiac rehab',
                'Coarse ventricular fibrillation on monitor',
                'No carotid or femoral pulse palpable',
                'Patient cyanotic, pupils dilating',
                'Defibrillator charging available'
            ],
            decisions: [
                {
                    id: 'phase1-immediate',
                    phase: 1,
                    question: 'Witnessed VF arrest. What is your immediate priority within 10 seconds?',
                    timeAllowed: 10,
                    criticalLevel: 'critical',
                    ecgImage: '/ecg/medical_accurate/vtach_200bpm.png', // VF rhythm
                    options: [
                        {
                            id: 'option1',
                            text: '⚡ Immediate defibrillation 200J biphasic',
                            isCorrect: true,
                            immediateConsequence: 'Shock delivered! Analyzing rhythm...',
                            points: 100,
                            feedback: 'Perfect! Witnessed VF requires immediate defibrillation for best survival.',
                            nextPhase: 2,
                            resultingEcgImage: '/ecg/medical_accurate/vtach_160bpm.png' // Fine VF after shock
                        },
                        {
                            id: 'option2',
                            text: '🫁 Start CPR compressions first',
                            isCorrect: false,
                            immediateConsequence: 'CPR started but valuable time lost',
                            points: 60,
                            feedback: 'In witnessed VF with defibrillator ready, shock first!',
                            nextPhase: 2,
                            resultingEcgImage: '/ecg/medical_accurate/vtach_190bpm.png' // Continuing VF
                        },
                        {
                            id: 'option3',
                            text: '💊 Establish IV access for medications',
                            isCorrect: false,
                            immediateConsequence: 'Critical delay - patient deteriorating',
                            points: 20,
                            feedback: 'VF is a shockable rhythm - electricity first, drugs later!',
                            nextPhase: 2,
                            resultingEcgImage: '/ecg/medical_accurate/vtach_210bpm.png' // Worsening VF
                        }
                    ]
                },
                {
                    id: 'phase2-post-shock',
                    phase: 2,
                    question: 'Post-shock rhythm check shows fine VF. Next action?',
                    timeAllowed: 15,
                    criticalLevel: 'critical',
                    ecgImage: '/ecg/medical_accurate/vtach_160bpm.png', // Fine VF
                    options: [
                        {
                            id: 'option1',
                            text: '🫁 Immediate CPR 30:2 for 2 minutes',
                            isCorrect: true,
                            immediateConsequence: 'High-quality CPR initiated',
                            points: 100,
                            feedback: 'Correct! After shock, immediate CPR before rhythm check.',
                            nextPhase: 3,
                            resultingEcgImage: '/ecg/medical_accurate/normal_75bpm.png' // ROSC achieved
                        },
                        {
                            id: 'option2',
                            text: '⚡ Immediate second shock',
                            isCorrect: false,
                            immediateConsequence: 'Second shock without CPR',
                            points: 40,
                            feedback: 'Need CPR first to perfuse coronaries for better defibrillation.',
                            nextPhase: 3,
                            resultingEcgImage: '/ecg/medical_accurate/normal_85bpm.png' // Weak ROSC
                        },
                        {
                            id: 'option3',
                            text: '💊 Epinephrine 1mg IV',
                            isCorrect: false,
                            immediateConsequence: 'Drug given but compressions needed',
                            points: 60,
                            feedback: 'CPR first, then epinephrine after 2 minutes.',
                            nextPhase: 3,
                            resultingEcgImage: '/ecg/medical_accurate/normal_70bpm.png' // Delayed ROSC
                        }
                    ]
                },
                {
                    id: 'phase3-rosc',
                    phase: 3,
                    question: 'After 2 cycles, patient has weak pulse, BP 70/40. Next priority?',
                    timeAllowed: 20,
                    criticalLevel: 'high',
                    ecgImage: '/ecg/medical_accurate/normal_75bpm.png', // NSR post-ROSC
                    options: [
                        {
                            id: 'option1',
                            text: '🏥 Post-arrest care: 12-lead ECG, hypothermia protocol',
                            isCorrect: true,
                            immediateConsequence: 'ROSC stabilized, comprehensive care initiated',
                            points: 100,
                            feedback: 'Excellent! Post-arrest care crucial for neurological outcome.',
                            nextPhase: 4,
                            resultingEcgImage: '/ecg/medical_accurate/normal_80bpm.png' // Stable NSR
                        },
                        {
                            id: 'option2',
                            text: '💊 Dopamine drip for hypotension',
                            isCorrect: false,
                            immediateConsequence: 'Pressors started but incomplete care',
                            points: 70,
                            feedback: 'Pressors may help, but comprehensive post-arrest care is priority.',
                            nextPhase: 4,
                            resultingEcgImage: '/ecg/medical_accurate/tachycardia_105bpm.png' // Sinus tach from pressors
                        },
                        {
                            id: 'option3',
                            text: '🚪 Transfer to general ward',
                            isCorrect: false,
                            immediateConsequence: 'Inappropriate disposition',
                            points: 30,
                            feedback: 'Post-arrest patients need ICU monitoring and targeted temperature management.',
                            nextPhase: 4,
                            resultingEcgImage: '/ecg/medical_accurate/normal_70bpm.png' // Unstable rhythm
                        }
                    ]
                }
            ],
            learningObjectives: [
                'Recognize ventricular fibrillation immediately',
                'Apply witnessed arrest defibrillation protocols',
                'Understand post-ROSC targeted temperature management',
                'Prioritize interventions in cardiac arrest',
                'Execute high-quality CPR techniques'
            ]
        },
        rewards: { xp: 300, gems: 50 },
        unlocked: true,
        completed: false
    };
}
function createShockWaveDay2Task() {
    return {
        id: 'shock-wave-day-2-task-1',
        type: 'crisis-simulator',
        title: 'Polymorphic VT: Torsades de Pointes',
        description: '45-year-old female on multiple medications develops twisting VT pattern.',
        difficulty: 'expert',
        estimatedTime: 14,
        ecgImage: '/ecg/medical_accurate/ventricular_tachycardia_195bpm_4.png',
        questions: [],
        crisisScenario: {
            id: 'torsades-emergency-day2',
            title: 'Torsades de Pointes - Drug-Induced',
            patientInfo: {
                age: 45,
                gender: 'Female',
                presentation: 'Psychiatric patient on haloperidol, sudden syncope with seizure-like activity',
                vitalSigns: 'HR 240 irregular, BP unmeasurable, unconscious'
            },
            timeLimit: 240,
            ecgImage: '/ecg/medical_accurate/ventricular_tachycardia_195bpm_4.png',
            initialFindings: [
                'Polymorphic VT with twisting QRS axis',
                'Recent QTc measurement was 580ms',
                'Patient on haloperidol, ciprofloxacin, amiodarone',
                'Hypokalemia (K+ 2.8) and hypomagnesemia (Mg 1.2)',
                'Witnessed event, defibrillator available'
            ],
            decisions: [
                {
                    id: 'phase1-recognition',
                    phase: 1,
                    question: 'Polymorphic VT in patient with prolonged QT. Immediate action?',
                    timeAllowed: 15,
                    criticalLevel: 'critical',
                    ecgImage: '/ecg/medical_accurate/ventricular_tachycardia_195bpm_4.png', // Polymorphic VT
                    options: [
                        {
                            id: 'option1',
                            text: '⚡ Immediate synchronized cardioversion',
                            isCorrect: false,
                            immediateConsequence: 'Sync mode fails on polymorphic VT',
                            points: 40,
                            feedback: 'Polymorphic VT needs unsynchronized shock - treat like VF!',
                            nextPhase: 2,
                            resultingEcgImage: '/ecg/medical_accurate/ventricular_tachycardia_180bpm_3.png' // Still VT
                        },
                        {
                            id: 'option2',
                            text: '⚡ Immediate defibrillation (unsynchronized)',
                            isCorrect: true,
                            immediateConsequence: 'Successful defibrillation, rhythm converts',
                            points: 100,
                            feedback: 'Correct! Torsades is hemodynamically unstable - shock like VF.',
                            nextPhase: 2,
                            resultingEcgImage: '/ecg/medical_accurate/normal_80bpm.png' // Converted to NSR
                        },
                        {
                            id: 'option3',
                            text: '💊 IV magnesium 2g push',
                            isCorrect: false,
                            immediateConsequence: 'Drug given but patient still unstable',
                            points: 60,
                            feedback: 'Magnesium is key for Torsades, but shock unstable patients first!',
                            nextPhase: 2,
                            resultingEcgImage: '/ecg/medical_accurate/ventricular_tachycardia_165bpm_2.png' // Slightly improved VT
                        }
                    ]
                },
                {
                    id: 'phase2-conversion',
                    phase: 2,
                    question: 'Converted to sinus rhythm. How do you prevent Torsades recurrence?',
                    timeAllowed: 25,
                    criticalLevel: 'high',
                    ecgImage: '/ecg/medical_accurate/normal_80bpm.png', // NSR post-conversion
                    options: [
                        {
                            id: 'option1',
                            text: '💊 Magnesium 2g IV + discontinue QT-prolonging drugs',
                            isCorrect: true,
                            immediateConsequence: 'Mg repleted, offending drugs stopped',
                            points: 100,
                            feedback: 'Perfect! Magnesium is first-line for Torsades prevention.',
                            nextPhase: 3,
                            resultingEcgImage: '/ecg/medical_accurate/normal_75bpm.png' // Stable NSR
                        },
                        {
                            id: 'option2',
                            text: '💊 Amiodarone bolus for rhythm control',
                            isCorrect: false,
                            immediateConsequence: 'Amiodarone worsens QT prolongation',
                            points: 20,
                            feedback: 'Amiodarone prolongs QT further - contraindicated!',
                            nextPhase: 3,
                            resultingEcgImage: '/ecg/medical_accurate/bradycardia_45bpm.png' // Bradycardia from amio
                        },
                        {
                            id: 'option3',
                            text: '⚡ Prepare for immediate repeat cardioversion',
                            isCorrect: false,
                            immediateConsequence: 'Patient stable but root cause not addressed',
                            points: 50,
                            feedback: 'Need to prevent recurrence with magnesium and drug cessation.',
                            nextPhase: 3,
                            resultingEcgImage: '/ecg/medical_accurate/normal_85bpm.png' // Unstable NSR
                        }
                    ]
                },
                {
                    id: 'phase3-prevention',
                    phase: 3,
                    question: 'Patient stable. What additional interventions prevent recurrence?',
                    timeAllowed: 30,
                    criticalLevel: 'medium',
                    ecgImage: '/ecg/medical_accurate/normal_75bpm.png', // Stable NSR
                    options: [
                        {
                            id: 'option1',
                            text: '⚡ Overdrive pacing at 100-120 bpm',
                            isCorrect: true,
                            immediateConsequence: 'Temporary pacing suppresses ectopy',
                            points: 100,
                            feedback: 'Excellent! Overdrive pacing shortens QT and prevents pause-dependent Torsades.',
                            nextPhase: 4,
                            resultingEcgImage: '/ecg/medical_accurate/tachycardia_110bpm.png' // Paced rhythm
                        },
                        {
                            id: 'option2',
                            text: '💊 Beta-blocker to slow heart rate',
                            isCorrect: false,
                            immediateConsequence: 'Bradycardia may trigger more Torsades',
                            points: 30,
                            feedback: 'Beta-blockers can worsen pause-dependent Torsades!',
                            nextPhase: 4,
                            resultingEcgImage: '/ecg/medical_accurate/bradycardia_50bpm.png' // Dangerous bradycardia
                        },
                        {
                            id: 'option3',
                            text: '🔬 Just monitor electrolytes',
                            isCorrect: false,
                            immediateConsequence: 'Monitoring alone insufficient',
                            points: 60,
                            feedback: 'Need active prevention - overdrive pacing is key.',
                            nextPhase: 4,
                            resultingEcgImage: '/ecg/medical_accurate/normal_70bpm.png' // Unchanged NSR
                        }
                    ]
                }
            ],
            learningObjectives: [
                'Recognize polymorphic VT (Torsades de Pointes)',
                'Understand QT-prolonging drug interactions',
                'Apply magnesium therapy for Torsades',
                'Implement overdrive pacing protocols',
                'Prevent pause-dependent arrhythmias'
            ]
        },
        rewards: { xp: 320, gems: 55 },
        unlocked: false,
        completed: false
    };
}
function createShockWaveDay3Task() {
    return {
        id: 'shock-wave-day-3-task-1',
        type: 'crisis-simulator',
        title: 'Unstable Wide Complex Tachycardia',
        description: '72-year-old with chest pain and wide QRS tachycardia. SVT vs VT dilemma.',
        difficulty: 'expert',
        estimatedTime: 16,
        ecgImage: '/ecg/medical_accurate/ventricular_tachycardia_180bpm_3.png',
        questions: [],
        crisisScenario: {
            id: 'wide-complex-vt-day3',
            title: 'Wide Complex Tachycardia - Hemodynamic Compromise',
            patientInfo: {
                age: 72,
                gender: 'Male',
                presentation: 'Chest pain 2 hours, sudden palpitations, diaphoresis, altered mental status',
                vitalSigns: 'HR 200, BP 85/55, RR 28, O2Sat 89%, confused'
            },
            timeLimit: 280,
            ecgImage: '/ecg/medical_accurate/ventricular_tachycardia_180bpm_3.png',
            initialFindings: [
                'Wide QRS (>120ms) regular tachycardia at 200 bpm',
                'AV dissociation visible in rhythm strip',
                'Patient hypotensive and confused',
                'Troponin elevated, known CAD history',
                'No response to carotid massage'
            ],
            decisions: [
                {
                    id: 'phase1-diagnosis',
                    phase: 1,
                    question: 'Wide complex tachycardia with hemodynamic instability. Most likely diagnosis?',
                    timeAllowed: 20,
                    criticalLevel: 'critical',
                    ecgImage: '/ecg/medical_accurate/ventricular_tachycardia_180bpm_3.png', // Wide complex VT
                    options: [
                        {
                            id: 'option1',
                            text: '⚡ Ventricular tachycardia - treat as VT',
                            isCorrect: true,
                            immediateConsequence: 'Diagnosed as VT, preparing appropriate treatment',
                            points: 100,
                            feedback: 'Correct! Wide QRS + AV dissociation = VT until proven otherwise.',
                            nextPhase: 2,
                            resultingEcgImage: '/ecg/medical_accurate/ventricular_tachycardia_180bpm_3.png' // Same VT
                        },
                        {
                            id: 'option2',
                            text: '💓 SVT with aberrancy - try adenosine',
                            isCorrect: false,
                            immediateConsequence: 'Adenosine ineffective, patient deteriorating',
                            points: 40,
                            feedback: 'AV dissociation rules out SVT. Adenosine dangerous in VT.',
                            nextPhase: 2,
                            resultingEcgImage: '/ecg/medical_accurate/ventricular_tachycardia_200bpm_5.png' // Worsened VT
                        },
                        {
                            id: 'option3',
                            text: '🔬 Need more tests before treatment',
                            isCorrect: false,
                            immediateConsequence: 'Dangerous delay, patient becoming more unstable',
                            points: 20,
                            feedback: 'Unstable patient needs immediate treatment!',
                            nextPhase: 2,
                            resultingEcgImage: '/ecg/medical_accurate/ventricular_tachycardia_210bpm_5.png' // Deteriorating VT
                        }
                    ]
                },
                {
                    id: 'phase2-treatment',
                    phase: 2,
                    question: 'Unstable VT confirmed. Immediate treatment?',
                    timeAllowed: 15,
                    criticalLevel: 'critical',
                    ecgImage: '/ecg/medical_accurate/ventricular_tachycardia_180bpm_3.png', // VT rhythm
                    options: [
                        {
                            id: 'option1',
                            text: '⚡ Synchronized cardioversion 100J',
                            isCorrect: true,
                            immediateConsequence: 'Successful cardioversion to sinus rhythm',
                            points: 100,
                            feedback: 'Perfect! Unstable VT requires immediate synchronized cardioversion.',
                            nextPhase: 3,
                            resultingEcgImage: '/ecg/medical_accurate/normal_90bpm.png' // Converted to NSR
                        },
                        {
                            id: 'option2',
                            text: '💊 Amiodarone 150mg IV over 10 minutes',
                            isCorrect: false,
                            immediateConsequence: 'Drug loading too slow for unstable patient',
                            points: 60,
                            feedback: 'Amiodarone for stable VT. Unstable patients need electricity!',
                            nextPhase: 3,
                            resultingEcgImage: '/ecg/medical_accurate/ventricular_tachycardia_165bpm_2.png' // Slowed VT
                        },
                        {
                            id: 'option3',
                            text: '💊 Lidocaine 1-1.5mg/kg IV bolus',
                            isCorrect: false,
                            immediateConsequence: 'Antiarrhythmic ineffective for unstable VT',
                            points: 50,
                            feedback: 'Lidocaine for stable VT. This patient needs cardioversion.',
                            nextPhase: 3,
                            resultingEcgImage: '/ecg/medical_accurate/ventricular_tachycardia_170bpm.png' // Slightly improved VT
                        }
                    ]
                },
                {
                    id: 'phase3-post-conversion',
                    phase: 3,
                    question: 'Converted to sinus rhythm, BP improving. Next priority?',
                    timeAllowed: 25,
                    criticalLevel: 'high',
                    ecgImage: '/ecg/medical_accurate/normal_90bpm.png', // Post-conversion NSR
                    options: [
                        {
                            id: 'option1',
                            text: '🫀 Urgent cardiac catheterization for acute MI',
                            isCorrect: true,
                            immediateConsequence: 'Cath lab activated, STEMI protocol initiated',
                            points: 100,
                            feedback: 'Excellent! VT often indicates acute MI - urgent revascularization needed.',
                            nextPhase: 4,
                            resultingEcgImage: '/ecg/medical_accurate/normal_80bpm.png' // Stable NSR
                        },
                        {
                            id: 'option2',
                            text: '💊 Maintenance amiodarone drip',
                            isCorrect: false,
                            immediateConsequence: 'Arrhythmia suppressed but underlying cause missed',
                            points: 70,
                            feedback: 'Antiarrhythmics help, but treat the underlying MI first.',
                            nextPhase: 4,
                            resultingEcgImage: '/ecg/medical_accurate/bradycardia_55bpm.png' // Bradycardia from amio
                        },
                        {
                            id: 'option3',
                            text: '📊 Echocardiogram and monitoring',
                            isCorrect: false,
                            immediateConsequence: 'Diagnostic delay for treatable MI',
                            points: 50,
                            feedback: 'VT with elevated troponins needs urgent cath, not just monitoring.',
                            nextPhase: 4,
                            resultingEcgImage: '/ecg/medical_accurate/normal_85bpm.png' // Unchanged NSR
                        }
                    ]
                }
            ],
            learningObjectives: [
                'Differentiate VT from SVT with aberrancy',
                'Recognize hemodynamic instability criteria',
                'Apply synchronized cardioversion techniques',
                'Understand VT as marker of acute MI',
                'Prioritize urgent revascularization'
            ]
        },
        rewards: { xp: 340, gems: 60 },
        unlocked: false,
        completed: false
    };
}
// WEEK 1 CONTINUED: ACUTE CORONARY SYNDROMES (Days 4-7)
function createShockWaveDay4Task() {
    return {
        id: 'shock-wave-day-4-task-1',
        type: 'crisis-simulator',
        title: 'Anterior STEMI with Cardiogenic Shock',
        description: '52-year-old presents with massive anterior MI and cardiogenic shock.',
        difficulty: 'expert',
        estimatedTime: 18,
        ecgImage: '/ecg/medical_accurate/tachycardia_150bpm.png',
        questions: [],
        crisisScenario: {
            id: 'anterior-stemi-shock-day4',
            title: 'Massive Anterior STEMI - Cardiogenic Shock',
            patientInfo: {
                age: 52,
                gender: 'Male',
                presentation: 'Severe chest pain 30 minutes, cold, clammy, weak pulse',
                vitalSigns: 'HR 110, BP 70/45, CI <2.0, PCWP 25, cold extremities'
            },
            timeLimit: 360,
            ecgImage: '/ecg/medical_accurate/tachycardia_150bpm.png',
            initialFindings: [
                'ST elevation >2mm in V1-V6, I, aVL',
                'New Q waves in V2-V4',
                'Reciprocal changes in II, III, aVF',
                'Cardiogenic shock (SBP <90, CI <2.0)',
                'Killip Class IV - pulmonary edema'
            ],
            decisions: [
                {
                    id: 'phase1-recognition',
                    phase: 1,
                    question: 'Anterior STEMI with cardiogenic shock. Most urgent intervention?',
                    timeAllowed: 25,
                    criticalLevel: 'critical',
                    ecgImage: '/ecg/medical_accurate/tachycardia_150bpm.png', // Compensatory tachycardia
                    options: [
                        {
                            id: 'option1',
                            text: '🏥 Emergency PCI within 60 minutes + IABP',
                            isCorrect: true,
                            immediateConsequence: 'Cath lab activated, IABP placed',
                            points: 100,
                            feedback: 'Perfect! Primary PCI + mechanical support for cardiogenic shock.',
                            nextPhase: 2,
                            resultingEcgImage: '/ecg/medical_accurate/tachycardia_125bpm.png' // Improving after IABP
                        },
                        {
                            id: 'option2',
                            text: '💊 Thrombolytics + pressors',
                            isCorrect: false,
                            immediateConsequence: 'Slower reperfusion, shock persists',
                            points: 60,
                            feedback: 'PCI superior to lytics in cardiogenic shock.',
                            nextPhase: 2,
                            resultingEcgImage: '/ecg/medical_accurate/tachycardia_155bpm.png' // Worsening shock
                        },
                        {
                            id: 'option3',
                            text: '💊 Diuretics for pulmonary edema',
                            isCorrect: false,
                            immediateConsequence: 'Further hypotension, worsening shock',
                            points: 20,
                            feedback: 'Cardiogenic shock needs reperfusion, not volume reduction!',
                            nextPhase: 2,
                            resultingEcgImage: '/ecg/medical_accurate/tachycardia_165bpm_7.png' // Severe deterioration
                        }
                    ]
                },
                {
                    id: 'phase2-support',
                    phase: 2,
                    question: 'IABP placed, going to cath lab. Additional support needed?',
                    timeAllowed: 20,
                    criticalLevel: 'critical',
                    ecgImage: '/ecg/medical_accurate/tachycardia_125bpm.png', // Post-IABP rhythm
                    options: [
                        {
                            id: 'option1',
                            text: '💊 Dobutamine + norepinephrine',
                            isCorrect: true,
                            immediateConsequence: 'Inotropic and vasopressor support initiated',
                            points: 100,
                            feedback: 'Correct! Need both inotropic and vasopressor support.',
                            nextPhase: 3,
                            resultingEcgImage: '/ecg/medical_accurate/tachycardia_110bpm.png' // Stabilizing
                        },
                        {
                            id: 'option2',
                            text: '💊 High-dose dopamine only',
                            isCorrect: false,
                            immediateConsequence: 'Inadequate support, arrhythmias risk',
                            points: 70,
                            feedback: 'High-dose dopamine increases arrhythmia risk.',
                            nextPhase: 3,
                            resultingEcgImage: '/ecg/medical_accurate/ventricular_tachycardia_150bpm_1.png' // Dopamine-induced VT
                        },
                        {
                            id: 'option3',
                            text: '🚫 Avoid pressors, IABP sufficient',
                            isCorrect: false,
                            immediateConsequence: 'Persistent hypotension, organ hypoperfusion',
                            points: 40,
                            feedback: 'Severe shock needs pharmacologic support too.',
                            nextPhase: 3,
                            resultingEcgImage: '/ecg/medical_accurate/tachycardia_140bpm.png' // Persistent tachycardia
                        }
                    ]
                },
                {
                    id: 'phase3-post-pci',
                    phase: 3,
                    question: 'LAD opened successfully, but shock persists. Next consideration?',
                    timeAllowed: 30,
                    criticalLevel: 'high',
                    ecgImage: '/ecg/medical_accurate/tachycardia_110bpm.png', // Post-PCI rhythm
                    options: [
                        {
                            id: 'option1',
                            text: '🔧 Impella or ECMO evaluation',
                            isCorrect: true,
                            immediateConsequence: 'Advanced mechanical support considered',
                            points: 100,
                            feedback: 'Excellent! Refractory shock may need advanced MCS.',
                            nextPhase: 4,
                            resultingEcgImage: '/ecg/medical_accurate/normal_90bpm.png' // Improved with MCS
                        },
                        {
                            id: 'option2',
                            text: '💊 Increase inotrope doses',
                            isCorrect: false,
                            immediateConsequence: 'Increased arrhythmias, limited improvement',
                            points: 60,
                            feedback: 'High-dose pressors have limits and increase arrhythmias.',
                            nextPhase: 4,
                            resultingEcgImage: '/ecg/medical_accurate/ventricular_tachycardia_165bpm_2.png' // Drug-induced VT
                        },
                        {
                            id: 'option3',
                            text: '⏰ Wait and see approach',
                            isCorrect: false,
                            immediateConsequence: 'Continued shock, organ failure risk',
                            points: 30,
                            feedback: 'Refractory shock needs escalation, not waiting.',
                            nextPhase: 4,
                            resultingEcgImage: '/ecg/medical_accurate/tachycardia_135bpm_4.png' // Deteriorating
                        }
                    ]
                }
            ],
            learningObjectives: [
                'Recognize cardiogenic shock criteria',
                'Prioritize primary PCI in shock',
                'Understand mechanical circulatory support',
                'Apply appropriate vasoactive agents',
                'Escalate care for refractory shock'
            ]
        },
        rewards: { xp: 360, gems: 65 },
        unlocked: false,
        completed: false
    };
}
function createShockWaveDay5Task() {
    return {
        id: 'shock-wave-day-5-task-1',
        type: 'crisis-simulator',
        title: 'Inferior MI with Complete Heart Block',
        description: '68-year-old with inferior STEMI develops complete AV block and hypotension.',
        difficulty: 'expert',
        estimatedTime: 16,
        ecgImage: '/ecg/medical_accurate/bradycardia_35bpm.png',
        questions: [],
        crisisScenario: {
            id: 'inferior-mi-chb-day5',
            title: 'Inferior STEMI with Complete Heart Block',
            patientInfo: {
                age: 68,
                gender: 'Female',
                presentation: 'Chest pain 45 minutes, sudden bradycardia and hypotension',
                vitalSigns: 'HR 35, BP 80/50, diaphoretic, nauseous'
            },
            timeLimit: 320,
            ecgImage: '/ecg/medical_accurate/bradycardia_35bpm.png',
            initialFindings: [
                'ST elevation in II, III, aVF (>2mm)',
                'Complete AV dissociation, ventricular rate 35',
                'Right ventricular involvement (V4R elevation)',
                'Hypotension with bradycardia',
                'Cannon A waves on examination'
            ],
            decisions: [
                {
                    id: 'phase1-recognition',
                    phase: 1,
                    question: 'Inferior STEMI with complete AV block and hypotension. Priority?',
                    timeAllowed: 20,
                    criticalLevel: 'critical',
                    options: [
                        {
                            id: 'option1',
                            text: '⚡ Immediate transcutaneous pacing',
                            isCorrect: true,
                            immediateConsequence: 'TCP initiated, heart rate increased',
                            points: 100,
                            feedback: 'Correct! Symptomatic CHB needs immediate pacing.',
                            nextPhase: 2
                        },
                        {
                            id: 'option2',
                            text: '💊 Atropine 1mg IV push',
                            isCorrect: false,
                            immediateConsequence: 'Minimal response, still hypotensive',
                            points: 50,
                            feedback: 'Atropine may help nodal blocks but TCP more reliable.',
                            nextPhase: 2
                        },
                        {
                            id: 'option3',
                            text: '🏥 Direct to cath lab first',
                            isCorrect: false,
                            immediateConsequence: 'Unstable during transport',
                            points: 40,
                            feedback: 'Stabilize hemodynamics with pacing first.',
                            nextPhase: 2
                        }
                    ]
                },
                {
                    id: 'phase2-stabilization',
                    phase: 2,
                    question: 'TCP successful, rate 70, BP improving. Next critical step?',
                    timeAllowed: 25,
                    criticalLevel: 'high',
                    options: [
                        {
                            id: 'option1',
                            text: '🏥 Urgent PCI for inferior STEMI',
                            isCorrect: true,
                            immediateConsequence: 'RCA intervention planned',
                            points: 100,
                            feedback: 'Perfect! Reperfusion may restore AV conduction.',
                            nextPhase: 3
                        },
                        {
                            id: 'option2',
                            text: '🔧 Transvenous pacemaker first',
                            isCorrect: false,
                            immediateConsequence: 'Delay in reperfusion therapy',
                            points: 70,
                            feedback: 'TCP adequate for transport. PCI more urgent.',
                            nextPhase: 3
                        },
                        {
                            id: 'option3',
                            text: '💊 Thrombolytics in ED',
                            isCorrect: false,
                            immediateConsequence: 'Inferior to PCI for this scenario',
                            points: 60,
                            feedback: 'PCI preferred, especially with cardiogenic shock.',
                            nextPhase: 3
                        }
                    ]
                },
                {
                    id: 'phase3-post-pci',
                    phase: 3,
                    question: 'RCA opened, but AV block persists. Management?',
                    timeAllowed: 30,
                    criticalLevel: 'medium',
                    options: [
                        {
                            id: 'option1',
                            text: '⏰ Continue TCP, monitor for recovery',
                            isCorrect: true,
                            immediateConsequence: 'AV conduction monitored, may recover',
                            points: 100,
                            feedback: 'Correct! Inferior MI CHB often recovers after reperfusion.',
                            nextPhase: 4
                        },
                        {
                            id: 'option2',
                            text: '🔧 Immediate permanent pacemaker',
                            isCorrect: false,
                            immediateConsequence: 'Premature permanent intervention',
                            points: 50,
                            feedback: 'Most inferior MI CHB recovers - wait 24-48 hours.',
                            nextPhase: 4
                        },
                        {
                            id: 'option3',
                            text: '💊 Stop pacing, try medical therapy',
                            isCorrect: false,
                            immediateConsequence: 'Return of symptomatic bradycardia',
                            points: 30,
                            feedback: 'Continue pacing until spontaneous recovery.',
                            nextPhase: 4
                        }
                    ]
                }
            ],
            learningObjectives: [
                'Recognize inferior STEMI complications',
                'Manage AV block in acute MI',
                'Understand RCA territory involvement',
                'Apply temporary vs permanent pacing',
                'Predict AV conduction recovery'
            ]
        },
        rewards: { xp: 340, gems: 60 },
        unlocked: false,
        completed: false
    };
}
function createShockWaveDay6Task() {
    return {
        id: 'shock-wave-day-6-task-1',
        type: 'crisis-simulator',
        title: 'Massive PE with RV Strain',
        description: 'Post-operative patient with massive pulmonary embolism and hemodynamic collapse.',
        difficulty: 'expert',
        estimatedTime: 16,
        ecgImage: '/ecg/medical_accurate/tachycardia_125bpm.png',
        questions: [],
        crisisScenario: {
            id: 'massive-pe-day6',
            title: 'Massive Pulmonary Embolism - RV Failure',
            patientInfo: {
                age: 64,
                gender: 'Female',
                presentation: 'Post-op day 3, sudden dyspnea, chest pain, hypotension',
                vitalSigns: 'HR 125, BP 75/45, RR 32, O2Sat 85%, JVD'
            },
            timeLimit: 300,
            ecgImage: '/ecg/medical_accurate/tachycardia_125bpm.png',
            initialFindings: [
                'S1Q3T3 pattern, right heart strain',
                'Massive clot burden on CT-PA',
                'RV dysfunction on bedside echo',
                'Elevated troponins, BNP >1000',
                'Contraindications to systemic lysis'
            ],
            decisions: [
                {
                    id: 'phase1-recognition',
                    phase: 1,
                    question: 'Massive PE with hemodynamic instability. Immediate action?',
                    timeAllowed: 20,
                    criticalLevel: 'critical',
                    options: [
                        {
                            id: 'option1',
                            text: '🏥 Emergency pulmonary embolectomy',
                            isCorrect: true,
                            immediateConsequence: 'Surgical consultation emergent',
                            points: 100,
                            feedback: 'Correct! Massive PE with contraindications to lysis needs surgery.',
                            nextPhase: 2
                        },
                        {
                            id: 'option2',
                            text: '💊 Systemic thrombolytics despite risk',
                            isCorrect: false,
                            immediateConsequence: 'High bleeding risk in post-op patient',
                            points: 60,
                            feedback: 'Post-operative bleeding risk too high for systemic lysis.',
                            nextPhase: 2
                        },
                        {
                            id: 'option3',
                            text: '💊 Heparin and supportive care',
                            isCorrect: false,
                            immediateConsequence: 'Continued hemodynamic deterioration',
                            points: 40,
                            feedback: 'Massive PE needs active intervention, not just anticoagulation.',
                            nextPhase: 2
                        }
                    ]
                }
            ],
            learningObjectives: [
                'Recognize massive PE ECG changes',
                'Understand embolectomy indications',
                'Manage RV failure',
                'Risk-stratify PE treatment',
                'Apply emergency interventions'
            ]
        },
        rewards: { xp: 340, gems: 60 },
        unlocked: false,
        completed: false
    };
}
function createShockWaveDay7Task() {
    return {
        id: 'shock-wave-day-7-task-1',
        type: 'crisis-simulator',
        title: 'Aortic Dissection with Tamponade',
        description: 'Hypertensive emergency with acute aortic dissection and cardiac tamponade.',
        difficulty: 'expert',
        estimatedTime: 18,
        ecgImage: '/ecg/medical_accurate/tachycardia_110bpm.png',
        questions: [],
        crisisScenario: {
            id: 'aortic-dissection-day7',
            title: 'Type A Aortic Dissection - Cardiac Tamponade',
            patientInfo: {
                age: 55,
                gender: 'Male',
                presentation: 'Tearing chest pain, syncope, unequal pulses',
                vitalSigns: 'HR 110, BP 90/60 (R arm), 60/40 (L arm), pulsus 25mmHg'
            },
            timeLimit: 240,
            ecgImage: '/ecg/medical_accurate/tachycardia_110bpm.png',
            initialFindings: [
                'Low voltage QRS complexes',
                'Electrical alternans pattern',
                'Pericardial effusion on echo',
                'Type A dissection on CTA',
                'Signs of cardiac tamponade'
            ],
            decisions: [
                {
                    id: 'phase1-recognition',
                    phase: 1,
                    question: 'Type A dissection with tamponade. Most urgent intervention?',
                    timeAllowed: 15,
                    criticalLevel: 'critical',
                    options: [
                        {
                            id: 'option1',
                            text: '🏥 Emergency cardiac surgery',
                            isCorrect: true,
                            immediateConsequence: 'CT surgery activated STAT',
                            points: 100,
                            feedback: 'Correct! Type A dissection with tamponade needs immediate surgery.',
                            nextPhase: 2
                        },
                        {
                            id: 'option2',
                            text: '💉 Pericardiocentesis first',
                            isCorrect: false,
                            immediateConsequence: 'Risk of worsening dissection',
                            points: 50,
                            feedback: 'Pericardiocentesis dangerous in aortic dissection.',
                            nextPhase: 2
                        },
                        {
                            id: 'option3',
                            text: '💊 Control blood pressure first',
                            isCorrect: false,
                            immediateConsequence: 'Tamponade physiology worsens',
                            points: 30,
                            feedback: 'Tamponade needs immediate relief, surgery urgent.',
                            nextPhase: 2
                        }
                    ]
                }
            ],
            learningObjectives: [
                'Recognize tamponade ECG patterns',
                'Diagnose aortic dissection complications',
                'Understand surgical urgency',
                'Manage hemodynamic instability',
                'Avoid dangerous interventions'
            ]
        },
        rewards: { xp: 360, gems: 65 },
        unlocked: false,
        completed: false
    };
}
// WEEK 2: ELECTROLYTE AND DRUG EMERGENCIES (Days 8-14) - PLACEHOLDER FUNCTIONS
// Each day will need to be implemented with detailed medical scenarios
function createShockWaveDay8Task() { return createBasicCrisisTask(8, 'Hyperkalemia Crisis', 'Severe hyperkalemia with sine wave pattern'); }
function createShockWaveDay9Task() { return createBasicCrisisTask(9, 'Digoxin Toxicity', 'Severe digitalis toxicity with bidirectional VT'); }
function createShockWaveDay10Task() { return createBasicCrisisTask(10, 'Hypothermic Arrest', 'Severe hypothermia with Osborn waves and VF'); }
function createShockWaveDay11Task() { return createBasicCrisisTask(11, 'Brugada Storm', 'Brugada syndrome with electrical storm'); }
function createShockWaveDay12Task() { return createBasicCrisisTask(12, 'ARVD Crisis', 'Arrhythmogenic RV dysplasia with VT storm'); }
function createShockWaveDay13Task() { return createBasicCrisisTask(13, 'Long QT Storm', 'Congenital LQTS with recurrent Torsades'); }
function createShockWaveDay14Task() { return createBasicCrisisTask(14, 'Cocaine Overdose', 'Cocaine-induced wide complex VT and seizures'); }
// WEEK 3: COMPLEX ARRHYTHMIAS (Days 15-21) - PLACEHOLDER FUNCTIONS
function createShockWaveDay15Task() { return createBasicCrisisTask(15, 'Tricyclic Overdose', 'TCA poisoning with wide QRS and hypotension'); }
function createShockWaveDay16Task() { return createBasicCrisisTask(16, 'Magnesium Depletion', 'Severe hypomagnesemia with Torsades and seizures'); }
function createShockWaveDay17Task() { return createBasicCrisisTask(17, 'WPW AF Crisis', 'WPW with rapid AF and hemodynamic collapse'); }
function createShockWaveDay18Task() { return createBasicCrisisTask(18, 'Hypercalcemia Crisis', 'Severe hypercalcemia with short QT and arrest'); }
function createShockWaveDay19Task() { return createBasicCrisisTask(19, 'Pacemaker Failure', 'Pacemaker malfunction with loss of capture'); }
function createShockWaveDay20Task() { return createBasicCrisisTask(20, 'ICD Storm', 'ICD electrical storm with multiple shocks'); }
function createShockWaveDay21Task() { return createBasicCrisisTask(21, 'Peripartum Crisis', 'Peripartum cardiomyopathy with VT and shock'); }
// WEEK 4: SPECIALIZED EMERGENCIES (Days 22-28) - PLACEHOLDER FUNCTIONS
function createShockWaveDay22Task() { return createBasicCrisisTask(22, 'Thyroid Storm', 'Thyrotoxicosis with rapid AF and heart failure'); }
function createShockWaveDay23Task() { return createBasicCrisisTask(23, 'Post-Op Tamponade', 'Cardiac surgery tamponade with electrical alternans'); }
function createShockWaveDay24Task() { return createBasicCrisisTask(24, 'Transplant Rejection', 'Heart transplant rejection with VT and failure'); }
function createShockWaveDay25Task() { return createBasicCrisisTask(25, 'Septic Shock AF', 'Sepsis with rapid AF and multiorgan failure'); }
function createShockWaveDay26Task() { return createBasicCrisisTask(26, 'Dialysis Emergency', 'Dialysis disequilibrium with arrhythmias'); }
function createShockWaveDay27Task() { return createBasicCrisisTask(27, 'Electrical Injury', 'High-voltage electrical injury with VF'); }
function createShockWaveDay28Task() { return createBasicCrisisTask(28, 'Commotio Cordis', 'Sudden cardiac arrest from chest impact'); }
// FINAL CHALLENGES (Days 29-30) - PLACEHOLDER FUNCTIONS  
function createShockWaveDay29Task() { return createBasicCrisisTask(29, 'Multi-Drug Toxicity', 'Polypharmacy overdose with complex arrhythmias'); }
function createShockWaveDay30Task() { return createBasicCrisisTask(30, 'Code Blue Master', 'Ultimate crisis simulation - multiple emergencies'); }
// Helper function for placeholder tasks
function createBasicCrisisTask(dayNumber, title, description) {
    return {
        id: `shock-wave-day-${dayNumber}-task-1`,
        type: 'crisis-simulator',
        title,
        description,
        difficulty: 'expert',
        estimatedTime: 15,
        ecgImage: '/ecg/medical_accurate/ventricular_tachycardia_150bpm_1.png',
        questions: [],
        crisisScenario: {
            id: `crisis-day-${dayNumber}`,
            title: `Day ${dayNumber}: ${title}`,
            patientInfo: {
                age: 45 + (dayNumber % 30),
                gender: dayNumber % 2 === 0 ? 'Female' : 'Male',
                presentation: 'Emergency presentation requiring immediate intervention',
                vitalSigns: 'Critical vital signs - unstable patient'
            },
            timeLimit: 300,
            ecgImage: '/ecg/medical_accurate/ventricular_tachycardia_150bpm_1.png',
            initialFindings: [
                'Critical ECG abnormalities detected',
                'Hemodynamic instability present',
                'Urgent intervention required',
                'High-stakes medical emergency',
                'Expert-level decision making needed'
            ],
            decisions: [
                {
                    id: 'phase1-assessment',
                    phase: 1,
                    question: 'Critical emergency situation. What is your immediate priority?',
                    timeAllowed: 30,
                    criticalLevel: 'critical',
                    ecgImage: '/ecg/medical_accurate/ventricular_tachycardia_150bpm_1.png', // Initial critical rhythm
                    options: [
                        {
                            id: 'option1',
                            text: '🏥 Emergency intervention protocol',
                            isCorrect: true,
                            immediateConsequence: 'Appropriate emergency response initiated',
                            points: 100,
                            feedback: 'Correct emergency management approach.',
                            nextPhase: 2,
                            resultingEcgImage: '/ecg/medical_accurate/normal_80bpm.png' // Successful intervention
                        },
                        {
                            id: 'option2',
                            text: '📊 Additional diagnostic tests',
                            isCorrect: false,
                            immediateConsequence: 'Delay in critical intervention',
                            points: 60,
                            feedback: 'Critical patients need immediate action, not more tests.',
                            nextPhase: 2,
                            resultingEcgImage: '/ecg/medical_accurate/ventricular_tachycardia_180bpm_3.png' // Deteriorated rhythm
                        },
                        {
                            id: 'option3',
                            text: '⏰ Observation and monitoring',
                            isCorrect: false,
                            immediateConsequence: 'Patient condition deteriorates',
                            points: 30,
                            feedback: 'This emergency requires immediate intervention!',
                            nextPhase: 2,
                            resultingEcgImage: '/ecg/medical_accurate/ventricular_tachycardia_200bpm_5.png' // Severe deterioration
                        }
                    ]
                },
                {
                    id: 'phase2-stabilization',
                    phase: 2,
                    question: 'Patient response achieved. How do you maintain stability?',
                    timeAllowed: 25,
                    criticalLevel: 'high',
                    ecgImage: '/ecg/medical_accurate/normal_80bpm.png', // Post-intervention rhythm
                    options: [
                        {
                            id: 'option1',
                            text: '📊 Continue monitoring and supportive care',
                            isCorrect: true,
                            immediateConsequence: 'Patient stabilized with appropriate care',
                            points: 100,
                            feedback: 'Excellent crisis management and stabilization.',
                            nextPhase: 3,
                            resultingEcgImage: '/ecg/medical_accurate/normal_75bpm.png' // Stable rhythm
                        },
                        {
                            id: 'option2',
                            text: '💊 Aggressive additional interventions',
                            isCorrect: false,
                            immediateConsequence: 'Overtreatment causes complications',
                            points: 60,
                            feedback: 'Sometimes less is more in crisis management.',
                            nextPhase: 3,
                            resultingEcgImage: '/ecg/medical_accurate/bradycardia_45bpm.png' // Overcorrection
                        },
                        {
                            id: 'option3',
                            text: '🏥 Immediate discharge planning',
                            isCorrect: false,
                            immediateConsequence: 'Premature disposition, patient unstable',
                            points: 40,
                            feedback: 'Crisis patients need continued monitoring.',
                            nextPhase: 3,
                            resultingEcgImage: '/ecg/medical_accurate/tachycardia_120bpm.png' // Unstable rhythm
                        }
                    ]
                }
            ],
            learningObjectives: [
                'Recognize critical emergency patterns',
                'Apply appropriate intervention protocols',
                'Manage hemodynamic instability',
                'Make rapid clinical decisions',
                'Prioritize life-saving interventions'
            ]
        },
        rewards: { xp: 320 + (dayNumber * 2), gems: 55 + dayNumber },
        unlocked: false,
        completed: false
    };
}
// ============= MAIN EVENT GENERATION =============
export function generateSimpleEvents() {
    return [
        {
            id: 'code-pulse',
            title: 'Code Pulse Protocol',
            subtitle: 'Comprehensive ECG Mastery',
            description: 'Master all ECG rhythms through progressive 30-day learning with real medical images',
            theme: eventThemes['code-pulse'],
            totalDays: 30,
            tasksPerDay: 3,
            bannerImage: '/images/events/code-pulse-banner.jpg',
            badgeIcon: '🫀',
            rewards: {
                daily: { xp: 175, gems: 30, hearts: 0 },
                weekly: { xp: 1400, gems: 240, hearts: 1 },
                completion: { xp: 6000, gems: 1200, hearts: 6, specialBadge: 'ECG Master' }
            },
            unlocked: true,
            days: [
                // Week 1: Normal Rhythms Foundation (Days 1-7)
                {
                    id: 'code-pulse-day-1',
                    dayNumber: 1,
                    title: 'ECG Fundamentals',
                    description: 'Master Normal Sinus Rhythm basics with interactive flashcards',
                    topic: 'Normal Sinus Rhythm Fundamentals',
                    tasks: createDay1Tasks(),
                    unlocked: true,
                    completed: false
                },
                {
                    id: 'code-pulse-day-2',
                    dayNumber: 2,
                    title: 'Heart Rate Calculation',
                    description: 'Master rate calculation methods with normal rhythms',
                    topic: 'Normal Rhythms - Rate Variations',
                    tasks: createNormalRhythmTasks(2, 90, 17),
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'code-pulse-day-3',
                    dayNumber: 3,
                    title: 'P-Wave Analysis',
                    description: 'Deep dive into P-wave morphology and atrial activity',
                    topic: 'Normal Rhythms - P-wave Analysis',
                    tasks: createNormalRhythmTasks(3, 95, 19),
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'code-pulse-day-4',
                    dayNumber: 4,
                    title: 'ECG Intervals & Timing',
                    description: 'Study PR intervals, QRS duration, and QT measurements',
                    topic: 'Normal Rhythms - Intervals & Timing',
                    tasks: createNormalRhythmTasks(4, 100, 21),
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'code-pulse-day-5',
                    dayNumber: 5,
                    title: 'Age-Related Variations',
                    description: 'Understand normal rhythm variations across age groups',
                    topic: 'Normal Rhythms - Age Variations',
                    tasks: createNormalRhythmTasks(5, 105, 23),
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'code-pulse-day-6',
                    dayNumber: 6,
                    title: 'Athletic Heart Patterns',
                    description: 'Recognize normal ECG patterns in athletes',
                    topic: 'Normal Rhythms - Athletic Patterns',
                    tasks: createNormalRhythmTasks(6, 110, 25),
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'code-pulse-day-7',
                    dayNumber: 7,
                    title: 'Normal Rhythm Mastery',
                    description: 'Comprehensive assessment and advanced recognition',
                    topic: 'Normal Rhythms - Assessment Skills',
                    tasks: createNormalRhythmTasks(7, 115, 27),
                    unlocked: false,
                    completed: false
                },
                // Week 2: Bradycardia (Days 8-14)
                {
                    id: 'code-pulse-day-8',
                    dayNumber: 8,
                    title: 'Introduction to Bradycardia',
                    description: 'Learn bradycardia fundamentals and recognition',
                    topic: 'Bradycardia - Fundamentals',
                    tasks: createBradycardiaTasks(8, 120, 29),
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'code-pulse-day-9',
                    dayNumber: 9,
                    title: 'Sinus Bradycardia',
                    description: 'Deep dive into sinus bradycardia patterns',
                    topic: 'Bradycardia - Sinus Bradycardia',
                    tasks: createBradycardiaTasks(9, 125, 31),
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'code-pulse-day-10',
                    dayNumber: 10,
                    title: 'Junctional Rhythms',
                    description: 'Study junctional escape rhythms',
                    topic: 'Bradycardia - Junctional Rhythms',
                    tasks: createBradycardiaTasks(10, 130, 33),
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'code-pulse-day-11',
                    dayNumber: 11,
                    title: 'AV Block Introduction',
                    description: 'Introduction to atrioventricular blocks',
                    topic: 'Bradycardia - AV Blocks',
                    tasks: createBradycardiaTasks(11, 135, 35),
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'code-pulse-day-12',
                    dayNumber: 12,
                    title: 'First-Degree AV Block',
                    description: 'Master first-degree AV block recognition',
                    topic: 'Bradycardia - First-Degree AV Block',
                    tasks: createBradycardiaTasks(12, 140, 37),
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'code-pulse-day-13',
                    dayNumber: 13,
                    title: 'Second-Degree AV Blocks',
                    description: 'Differentiate Mobitz Type I and Type II blocks',
                    topic: 'Bradycardia - Second-Degree AV Blocks',
                    tasks: createBradycardiaTasks(13, 145, 39),
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'code-pulse-day-14',
                    dayNumber: 14,
                    title: 'Bradycardia Assessment',
                    description: 'Comprehensive bradycardia clinical decision making',
                    topic: 'Bradycardia - Clinical Assessment',
                    tasks: createBradycardiaTasks(14, 150, 41),
                    unlocked: false,
                    completed: false
                },
                // Week 3: Tachycardia (Days 15-21)
                {
                    id: 'code-pulse-day-15',
                    dayNumber: 15,
                    title: 'Introduction to Tachycardia',
                    description: 'Learn tachycardia fundamentals and classification',
                    topic: 'Tachycardia - Fundamentals',
                    tasks: createTachycardiaTasks(15, 155, 43),
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'code-pulse-day-16',
                    dayNumber: 16,
                    title: 'Sinus Tachycardia',
                    description: 'Study sinus tachycardia patterns and causes',
                    topic: 'Tachycardia - Sinus Tachycardia',
                    tasks: createTachycardiaTasks(16, 160, 45),
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'code-pulse-day-17',
                    dayNumber: 17,
                    title: 'Atrial Tachycardia',
                    description: 'Recognize atrial and multifocal atrial tachycardia',
                    topic: 'Tachycardia - Atrial Tachycardia',
                    tasks: createTachycardiaTasks(17, 165, 47),
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'code-pulse-day-18',
                    dayNumber: 18,
                    title: 'Supraventricular Tachycardia',
                    description: 'Master SVT recognition and differentiation',
                    topic: 'Tachycardia - SVT',
                    tasks: createTachycardiaTasks(18, 170, 49),
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'code-pulse-day-19',
                    dayNumber: 19,
                    title: 'Ventricular Tachycardia Basics',
                    description: 'Introduction to ventricular tachycardia patterns',
                    topic: 'Tachycardia - VT Basics',
                    tasks: createTachycardiaTasks(19, 175, 51),
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'code-pulse-day-20',
                    dayNumber: 20,
                    title: 'Wide vs Narrow Complex',
                    description: 'Differentiate wide and narrow complex tachycardias',
                    topic: 'Tachycardia - Wide vs Narrow',
                    tasks: createTachycardiaTasks(20, 180, 53),
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'code-pulse-day-21',
                    dayNumber: 21,
                    title: 'Tachycardia Assessment',
                    description: 'Comprehensive tachycardia assessment and management',
                    topic: 'Tachycardia - Clinical Assessment',
                    tasks: createTachycardiaTasks(21, 185, 55),
                    unlocked: false,
                    completed: false
                },
                // Week 4: Advanced Arrhythmias (Days 22-30)
                {
                    id: 'code-pulse-day-22',
                    dayNumber: 22,
                    title: 'Atrial Fibrillation',
                    description: 'Master atrial fibrillation recognition and concepts',
                    topic: 'Advanced - Atrial Fibrillation',
                    tasks: createAdvancedRhythmTasks(22, 'Atrial Fibrillation', 'ATRIAL_FIBRILLATION', 190, 57),
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'code-pulse-day-23',
                    dayNumber: 23,
                    title: 'Atrial Flutter',
                    description: 'Study atrial flutter patterns and conduction ratios',
                    topic: 'Advanced - Atrial Flutter',
                    tasks: createAdvancedRhythmTasks(23, 'Atrial Flutter', 'ATRIAL_FLUTTER', 195, 59),
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'code-pulse-day-24',
                    dayNumber: 24,
                    title: 'Bundle Branch Blocks',
                    description: 'Differentiate LBBB and RBBB patterns',
                    topic: 'Advanced - Bundle Branch Blocks',
                    tasks: createAdvancedRhythmTasks(24, 'Bundle Branch Blocks', 'BUNDLE_BRANCH_BLOCKS', 200, 61),
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'code-pulse-day-25',
                    dayNumber: 25,
                    title: 'Premature Contractions',
                    description: 'Study PVCs, PACs, and clinical implications',
                    topic: 'Advanced - Premature Contractions',
                    tasks: createAdvancedRhythmTasks(25, 'Premature Contractions', 'PVC', 205, 63),
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'code-pulse-day-26',
                    dayNumber: 26,
                    title: 'Paced Rhythms',
                    description: 'Recognize pacemaker rhythms and troubleshoot issues',
                    topic: 'Expert - Paced Rhythms',
                    tasks: createAdvancedRhythmTasks(26, 'Paced Rhythms', 'PACED_RHYTHMS', 210, 65),
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'code-pulse-day-27',
                    dayNumber: 27,
                    title: 'Ischemic Changes',
                    description: 'Identify ST-segment changes and ischemic patterns',
                    topic: 'Expert - Ischemic Changes',
                    tasks: createAdvancedRhythmTasks(27, 'Ischemic Changes', 'ISCHEMIA', 215, 67),
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'code-pulse-day-28',
                    dayNumber: 28,
                    title: 'Complex Arrhythmias',
                    description: 'Master complex multi-rhythm scenarios',
                    topic: 'Expert - Complex Arrhythmias',
                    tasks: createAdvancedRhythmTasks(28, 'Complex Arrhythmias', 'MIXED_ARRHYTHMIAS', 220, 69),
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'code-pulse-day-29',
                    dayNumber: 29,
                    title: 'Clinical Integration',
                    description: 'Integrate all ECG knowledge with clinical scenarios',
                    topic: 'Expert - Clinical Integration',
                    tasks: createClinicalIntegrationTasks(29, 225, 71),
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'code-pulse-day-30',
                    dayNumber: 30,
                    title: 'Mastery Assessment',
                    description: 'Final comprehensive assessment of all ECG concepts',
                    topic: 'Expert - Mastery Assessment',
                    tasks: createMasteryAssessmentTasks(30, 250, 75),
                    unlocked: false,
                    completed: false
                }
            ]
        },
        {
            id: 'shock-wave',
            title: 'Shock Wave',
            subtitle: 'Emergency ECG Crisis Simulator',
            description: 'Master critical ECG emergencies with real-time decision making under pressure',
            theme: eventThemes['shock-wave'],
            totalDays: 30,
            tasksPerDay: 1, // Focused: 1 intense crisis simulation per day
            bannerImage: '/images/events/shock-wave-banner.jpg',
            badgeIcon: '⚡',
            rewards: {
                daily: { xp: 225, gems: 40, hearts: 0 },
                weekly: { xp: 1800, gems: 320, hearts: 1 },
                completion: { xp: 7500, gems: 1500, hearts: 8, specialBadge: 'Crisis Master' }
            },
            unlocked: true,
            days: [
                // First 3 days with detailed content
                {
                    id: 'shock-wave-day-1',
                    dayNumber: 1,
                    title: 'VF Emergency Response',
                    description: 'Master ventricular fibrillation emergency protocols',
                    topic: 'Critical - VF/VT Management',
                    tasks: [createShockWaveDay1Task()],
                    unlocked: true,
                    completed: false
                },
                {
                    id: 'shock-wave-day-2',
                    dayNumber: 2,
                    title: 'Unstable SVT Crisis',
                    description: 'Handle unstable supraventricular tachycardia emergencies',
                    topic: 'Critical - SVT Emergency Management',
                    tasks: [createShockWaveDay2Task()],
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'shock-wave-day-3',
                    dayNumber: 3,
                    title: 'Complete Heart Block',
                    description: 'Manage symptomatic complete heart block scenarios',
                    topic: 'Critical - Bradycardia Emergencies',
                    tasks: [createShockWaveDay3Task()],
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'shock-wave-day-4',
                    dayNumber: 4,
                    title: 'Anterior STEMI Shock',
                    description: 'Massive anterior MI with cardiogenic shock management',
                    topic: 'Critical - STEMI Complications',
                    tasks: [createShockWaveDay4Task()],
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'shock-wave-day-5',
                    dayNumber: 5,
                    title: 'Inferior MI Heart Block',
                    description: 'Inferior STEMI with complete AV block and hypotension',
                    topic: 'Critical - MI Conduction Blocks',
                    tasks: [createShockWaveDay5Task()],
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'shock-wave-day-6',
                    dayNumber: 6,
                    title: 'Massive PE Crisis',
                    description: 'Massive pulmonary embolism with RV failure',
                    topic: 'Critical - PE Management',
                    tasks: [createShockWaveDay6Task()],
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'shock-wave-day-7',
                    dayNumber: 7,
                    title: 'Aortic Dissection',
                    description: 'Type A dissection with cardiac tamponade',
                    topic: 'Critical - Aortic Emergency',
                    tasks: [createShockWaveDay7Task()],
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'shock-wave-day-8',
                    dayNumber: 8,
                    title: 'Hyperkalemia Crisis',
                    description: 'Severe hyperkalemia with sine wave pattern',
                    topic: 'Critical - Electrolyte Emergency',
                    tasks: [createShockWaveDay8Task()],
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'shock-wave-day-9',
                    dayNumber: 9,
                    title: 'Digoxin Toxicity',
                    description: 'Severe digitalis toxicity with bidirectional VT',
                    topic: 'Critical - Drug Toxicity',
                    tasks: [createShockWaveDay9Task()],
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'shock-wave-day-10',
                    dayNumber: 10,
                    title: 'Hypothermic Arrest',
                    description: 'Severe hypothermia with Osborn waves and VF',
                    topic: 'Critical - Environmental Emergency',
                    tasks: [createShockWaveDay10Task()],
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'shock-wave-day-11',
                    dayNumber: 11,
                    title: 'Brugada Storm',
                    description: 'Brugada syndrome with electrical storm',
                    topic: 'Critical - Genetic Arrhythmia',
                    tasks: [createShockWaveDay11Task()],
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'shock-wave-day-12',
                    dayNumber: 12,
                    title: 'ARVD Crisis',
                    description: 'Arrhythmogenic RV dysplasia with VT storm',
                    topic: 'Critical - Cardiomyopathy Emergency',
                    tasks: [createShockWaveDay12Task()],
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'shock-wave-day-13',
                    dayNumber: 13,
                    title: 'Long QT Storm',
                    description: 'Congenital LQTS with recurrent Torsades',
                    topic: 'Critical - QT Emergency',
                    tasks: [createShockWaveDay13Task()],
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'shock-wave-day-14',
                    dayNumber: 14,
                    title: 'Cocaine Overdose',
                    description: 'Cocaine-induced wide complex VT and seizures',
                    topic: 'Critical - Toxicology Emergency',
                    tasks: [createShockWaveDay14Task()],
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'shock-wave-day-15',
                    dayNumber: 15,
                    title: 'Tricyclic Overdose',
                    description: 'TCA poisoning with wide QRS and hypotension',
                    topic: 'Critical - TCA Toxicity',
                    tasks: [createShockWaveDay15Task()],
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'shock-wave-day-16',
                    dayNumber: 16,
                    title: 'Magnesium Depletion',
                    description: 'Severe hypomagnesemia with Torsades and seizures',
                    topic: 'Critical - Electrolyte Crisis',
                    tasks: [createShockWaveDay16Task()],
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'shock-wave-day-17',
                    dayNumber: 17,
                    title: 'WPW AF Crisis',
                    description: 'WPW with rapid AF and hemodynamic collapse',
                    topic: 'Critical - Pre-excitation Emergency',
                    tasks: [createShockWaveDay17Task()],
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'shock-wave-day-18',
                    dayNumber: 18,
                    title: 'Hypercalcemia Crisis',
                    description: 'Severe hypercalcemia with short QT and arrest',
                    topic: 'Critical - Calcium Emergency',
                    tasks: [createShockWaveDay18Task()],
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'shock-wave-day-19',
                    dayNumber: 19,
                    title: 'Pacemaker Failure',
                    description: 'Pacemaker malfunction with loss of capture',
                    topic: 'Critical - Device Emergency',
                    tasks: [createShockWaveDay19Task()],
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'shock-wave-day-20',
                    dayNumber: 20,
                    title: 'ICD Storm',
                    description: 'ICD electrical storm with multiple shocks',
                    topic: 'Critical - Device Storm',
                    tasks: [createShockWaveDay20Task()],
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'shock-wave-day-21',
                    dayNumber: 21,
                    title: 'Peripartum Crisis',
                    description: 'Peripartum cardiomyopathy with VT and shock',
                    topic: 'Critical - Pregnancy Emergency',
                    tasks: [createShockWaveDay21Task()],
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'shock-wave-day-22',
                    dayNumber: 22,
                    title: 'Thyroid Storm',
                    description: 'Thyrotoxicosis with rapid AF and heart failure',
                    topic: 'Critical - Endocrine Emergency',
                    tasks: [createShockWaveDay22Task()],
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'shock-wave-day-23',
                    dayNumber: 23,
                    title: 'Post-Op Tamponade',
                    description: 'Cardiac surgery tamponade with electrical alternans',
                    topic: 'Critical - Post-surgical Emergency',
                    tasks: [createShockWaveDay23Task()],
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'shock-wave-day-24',
                    dayNumber: 24,
                    title: 'Transplant Rejection',
                    description: 'Heart transplant rejection with VT and failure',
                    topic: 'Critical - Transplant Emergency',
                    tasks: [createShockWaveDay24Task()],
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'shock-wave-day-25',
                    dayNumber: 25,
                    title: 'Septic Shock AF',
                    description: 'Sepsis with rapid AF and multiorgan failure',
                    topic: 'Critical - Sepsis Cardiology',
                    tasks: [createShockWaveDay25Task()],
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'shock-wave-day-26',
                    dayNumber: 26,
                    title: 'Dialysis Emergency',
                    description: 'Dialysis disequilibrium with arrhythmias',
                    topic: 'Critical - Renal Emergency',
                    tasks: [createShockWaveDay26Task()],
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'shock-wave-day-27',
                    dayNumber: 27,
                    title: 'Electrical Injury',
                    description: 'High-voltage electrical injury with VF',
                    topic: 'Critical - Electrical Trauma',
                    tasks: [createShockWaveDay27Task()],
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'shock-wave-day-28',
                    dayNumber: 28,
                    title: 'Commotio Cordis',
                    description: 'Sudden cardiac arrest from chest impact',
                    topic: 'Critical - Trauma Cardiology',
                    tasks: [createShockWaveDay28Task()],
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'shock-wave-day-29',
                    dayNumber: 29,
                    title: 'Multi-Drug Toxicity',
                    description: 'Polypharmacy overdose with complex arrhythmias',
                    topic: 'Critical - Complex Toxicology',
                    tasks: [createShockWaveDay29Task()],
                    unlocked: false,
                    completed: false
                },
                {
                    id: 'shock-wave-day-30',
                    dayNumber: 30,
                    title: 'Code Blue Master',
                    description: 'Ultimate crisis simulation - multiple emergencies',
                    topic: 'Master - Multi-System Crisis',
                    tasks: [createShockWaveDay30Task()],
                    unlocked: false,
                    completed: false
                }
            ]
        },
        {
            id: 'rhythm-hunter',
            title: 'Rhythm Hunter',
            subtitle: 'Advanced Pattern Recognition Challenge',
            description: 'Hunt down the most elusive ECG patterns and rare arrhythmias in this expert-level challenge',
            theme: eventThemes['rhythm-hunter'],
            totalDays: 21,
            tasksPerDay: 2,
            bannerImage: '/images/events/rhythm-hunter-banner.jpg',
            badgeIcon: '🎯',
            rewards: {
                daily: { xp: 300, gems: 50, hearts: 0 },
                weekly: { xp: 2400, gems: 400, hearts: 2 },
                completion: { xp: 10000, gems: 2000, hearts: 10, specialBadge: 'Rhythm Hunter Master' }
            },
            unlocked: false,
            isUpcoming: true,
            unlockRequirements: {
                completedEvents: ['code-pulse', 'shock-wave'],
                description: 'Complete both Code Pulse Protocol (30 days) and Shock Wave (30 days) to unlock this expert challenge'
            },
            previewDescription: 'Master the art of detecting rare and complex ECG patterns. This expert-level event will challenge even seasoned cardiologists with unusual rhythms, artifact recognition, and differential diagnosis scenarios. Unlocks after completing both foundational events.',
            features: [
                '🎯 Rare arrhythmia patterns',
                '🔍 Advanced pattern recognition',
                '⚡ Real-time diagnosis challenges',
                '🏆 Expert-level difficulty',
                '💎 Exclusive hunter badges',
                '🔓 Unlocks after completing Code Pulse Protocol + Shock Wave'
            ],
            days: [] // Will be populated when event launches
        },
        {
            id: 'pulse-detective',
            title: 'Pulse Detective',
            subtitle: 'Mystery ECG Investigation Series',
            description: 'Solve complex medical mysteries through systematic ECG analysis and clinical correlation',
            theme: eventThemes['pulse-detective'],
            totalDays: 14,
            tasksPerDay: 3,
            bannerImage: '/images/events/pulse-detective-banner.jpg',
            badgeIcon: '🔍',
            rewards: {
                daily: { xp: 275, gems: 45, hearts: 0 },
                weekly: { xp: 2200, gems: 380, hearts: 1 },
                completion: { xp: 8500, gems: 1800, hearts: 7, specialBadge: 'Master Detective' }
            },
            unlocked: false,
            isUpcoming: true,
            unlockRequirements: {
                completedEvents: ['code-pulse', 'shock-wave'],
                description: 'Complete both Code Pulse Protocol (30 days) and Shock Wave (30 days) to unlock this mystery series'
            },
            previewDescription: 'Step into the shoes of a medical detective! Investigate mysterious cases where ECG findings hold the key to diagnosis. Each case presents a clinical puzzle requiring systematic analysis and deductive reasoning. Unlocks after mastering both foundational events.',
            features: [
                '🔍 Medical mystery cases',
                '📋 Clinical correlation challenges',
                '🧩 Progressive difficulty puzzles',
                '⚖️ Differential diagnosis skills',
                '🎖️ Detective achievement system',
                '🔓 Unlocks after completing Code Pulse Protocol + Shock Wave'
            ],
            days: [] // Will be populated when event launches
        }
    ];
}
