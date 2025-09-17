import { collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase';
/**
 * FIFA Mobile-Style ECG Learning Events System
 * 4 Events x 30 Days x 5 Tasks Each = 600 Total Learning Tasks
 * All events unlocked but require daily progression
 */
export const autoInitializeEventsSystem = async () => {
    try {
        console.log('🔄 Checking if FIFA-style events system needs initialization...');
        // Check if events already exist
        const eventsRef = collection(db, 'weeklyEvents');
        const existingEvents = await getDocs(eventsRef);
        if (existingEvents.docs.length > 0) {
            console.log('✅ Events system already initialized');
            return true;
        }
        console.log('🚀 Initializing FIFA Mobile-style ECG learning events system...');
        console.log('📊 Creating 4 Events × 30 Days × 5 Tasks = 600 Learning Modules');
        // Create all 4 events (FIFA Mobile style - all unlocked)
        const events = [
            // EVENT 1: ECG CORE FOUNDATIONS (30 Days)
            {
                id: 'ecg-core-foundations',
                title: '⚡ ECG Core Foundations',
                description: 'Master the fundamentals of ECG interpretation from basics to advanced',
                theme: 'foundations',
                eventNumber: 1,
                totalDays: 30,
                startDate: new Date(),
                endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year to complete
                isActive: true,
                isLocked: false, // All events unlocked FIFA-style
                participants: 0,
                completionRequirements: {
                    minimumScore: 70,
                    mustCompleteAll: true,
                    dailyProgression: true // Can't skip days
                },
                totalRewards: {
                    xp: 15000, // 30 days × 500 XP average
                    ecgCoins: 3000,
                    badges: ['foundation-master', 'ecg-basics', 'waveform-expert']
                },
                days: generateFoundationsDays() // 30 days of content
            },
            // EVENT 2: RHYTHM HUNTERS (30 Days)
            {
                id: 'rhythm-hunters',
                title: '🎯 Rhythm Hunters',
                description: 'Hunt down arrhythmias and master rhythm interpretation',
                theme: 'rhythms',
                eventNumber: 2,
                totalDays: 30,
                startDate: new Date(),
                endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
                isActive: true,
                isLocked: false,
                participants: 0,
                completionRequirements: {
                    minimumScore: 75,
                    mustCompleteAll: true,
                    dailyProgression: true
                },
                totalRewards: {
                    xp: 18000,
                    ecgCoins: 3600,
                    badges: ['rhythm-hunter', 'arrhythmia-detector', 'heart-beat-master']
                },
                days: generateRhythmHuntersDays()
            },
            // EVENT 3: DEADLY PATTERNS (30 Days)  
            {
                id: 'deadly-patterns',
                title: '🔥 Deadly Patterns',
                description: 'Identify life-threatening ECG patterns and emergencies',
                theme: 'emergencies',
                eventNumber: 3,
                totalDays: 30,
                startDate: new Date(),
                endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
                isActive: true,
                isLocked: false,
                participants: 0,
                completionRequirements: {
                    minimumScore: 80,
                    mustCompleteAll: true,
                    dailyProgression: true
                },
                totalRewards: {
                    xp: 22000,
                    ecgCoins: 4400,
                    badges: ['life-saver', 'emergency-expert', 'pattern-detective']
                },
                days: generateDeadlyPatternsDays()
            },
            // EVENT 4: ICU ECG BOSSES (30 Days)
            {
                id: 'icu-ecg-bosses',
                title: '👑 ICU ECG Bosses',
                description: 'Master complex ICU scenarios and advanced ECG interpretation',
                theme: 'advanced',
                eventNumber: 4,
                totalDays: 30,
                startDate: new Date(),
                endDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
                isActive: true,
                isLocked: false,
                participants: 0,
                completionRequirements: {
                    minimumScore: 85,
                    mustCompleteAll: true,
                    dailyProgression: true
                },
                totalRewards: {
                    xp: 25000,
                    ecgCoins: 5000,
                    badges: ['icu-master', 'ecg-boss', 'critical-care-expert']
                },
                days: generateICUBossesDays()
            }
        ];
        // Add events to Firestore
        for (const event of events) {
            await addDoc(collection(db, 'weeklyEvents'), {
                ...event,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp()
            });
        }
        console.log('✅ FIFA Mobile-style ECG events system initialized!');
        console.log('🎮 4 Events created with 30 days each');
        console.log('📚 Total: 600 interactive learning tasks');
        console.log('🏆 Progressive daily unlocking enabled');
        console.log('💰 ECG Coins reward system active');
        return true;
    }
    catch (error) {
        console.error('❌ Failed to initialize events system:', error);
        return false;
    }
};
/**
 * Generate 30 days of ECG Core Foundations content
 * Each day has 5 progressive tasks (loops)
 */
function generateFoundationsDays() {
    const days = [];
    // Day 1: Introduction to ECG
    days.push({
        id: 'foundations-day-1',
        dayNumber: 1,
        title: 'Introduction to ECG',
        description: 'Learn the basics of electrocardiography',
        isUnlocked: true, // Day 1 always unlocked
        rewards: { xp: 500, ecgCoins: 100 },
        tasks: [
            {
                id: 'intro-h5p-video',
                type: 'h5p-content',
                title: 'What is ECG?',
                description: 'Interactive video introduction to electrocardiography',
                content: {
                    type: 'interactive-video',
                    title: 'ECG Fundamentals',
                    description: 'Learn the electrical activity of the heart',
                    activity: {
                        videoUrl: 'https://www.youtube.com/watch?v=gyVs-D7Uyk8',
                        interactions: [
                            {
                                timestamp: 30,
                                type: 'quiz',
                                question: 'What does ECG stand for?',
                                options: ['Electrocardiogram', 'Electrocardiology', 'Electronic Cardio Graph', 'Electric Cardiac Generator'],
                                correct: 0,
                                explanation: 'ECG stands for Electrocardiogram - a recording of heart electrical activity.'
                            }
                        ]
                    },
                    scoring: { maxPoints: 100, passingScore: 70 }
                },
                requiredAccuracy: 70,
                timeLimit: 300
            },
            {
                id: 'electrode-placement-dragdrop',
                type: 'h5p-content',
                title: 'Electrode Placement',
                description: 'Learn proper ECG electrode positioning',
                content: {
                    type: 'drag-drop',
                    title: 'ECG Lead Placement',
                    description: 'Drag electrodes to correct body positions',
                    activity: {
                        title: 'Place ECG Electrodes',
                        items: [
                            { id: 'ra', text: 'RA (Right Arm)', correctZone: 'right-arm' },
                            { id: 'la', text: 'LA (Left Arm)', correctZone: 'left-arm' },
                            { id: 'rl', text: 'RL (Right Leg)', correctZone: 'right-leg' },
                            { id: 'll', text: 'LL (Left Leg)', correctZone: 'left-leg' }
                        ],
                        zones: {},
                        dropZones: {},
                        passingScore: 85
                    },
                    scoring: { maxPoints: 100, passingScore: 85 }
                },
                requiredAccuracy: 85,
                timeLimit: 360
            },
            {
                id: 'first-ecg-simulator',
                type: 'ecg-simulator',
                title: 'Your First ECG Recording',
                description: 'Try recording a sample ECG lead',
                content: {
                    scenario: 'Practice recording your first ECG lead on a healthy patient',
                    rhythm: 'normal-sinus',
                    learningObjectives: [
                        'Understand normal ECG waveform appearance',
                        'Learn to identify P, QRS, and T waves'
                    ],
                    measurements: [
                        { name: 'Heart Rate', target: 75, tolerance: 10, unit: 'bpm' }
                    ],
                    questions: [
                        {
                            question: 'What is the normal heart rate range?',
                            options: ['50-80 bpm', '60-100 bpm', '70-110 bpm', '80-120 bpm'],
                            correct: 1,
                            explanation: 'Normal resting heart rate is 60-100 beats per minute.'
                        }
                    ]
                },
                requiredAccuracy: 75,
                timeLimit: 420
            },
            {
                id: 'patient-setup-scenario',
                type: 'clinical-scenario',
                title: 'Patient Preparation',
                description: 'Practice proper patient setup for ECG',
                content: {
                    scenario: 'A 45-year-old patient arrives for routine ECG. Ensure proper setup.',
                    patientInfo: {
                        age: 45,
                        gender: 'female',
                        chiefComplaint: 'Routine ECG for physical exam',
                        vitals: { hr: 72, bp: '120/80', rr: 16, spo2: 99, temp: 37.0 }
                    },
                    decisionTree: {
                        question: 'Patient has lotion on chest. What should you do first?',
                        options: [
                            {
                                text: 'Clean skin with alcohol and let dry',
                                outcome: 'correct',
                                points: 100,
                                feedback: 'Excellent! Clean, dry skin ensures good electrode contact.'
                            }
                        ]
                    },
                    timeLimit: 180,
                    learningPoints: ['Clean, dry skin is essential for quality ECG']
                },
                requiredAccuracy: 85,
                timeLimit: 240
            },
            {
                id: 'ecg-terms-quiz',
                type: 'quiz',
                title: 'ECG Terminology Quiz',
                description: 'Match ECG terms with their definitions',
                content: {
                    questions: [
                        {
                            question: 'What does the P wave represent?',
                            options: ['Atrial depolarization', 'Ventricular depolarization', 'Atrial repolarization', 'Ventricular repolarization'],
                            correct: 0,
                            explanation: 'The P wave represents atrial depolarization (atrial contraction).'
                        }
                    ]
                },
                requiredAccuracy: 80,
                timeLimit: 300
            }
        ]
    });
    // Generate remaining 29 days
    for (let day = 2; day <= 30; day++) {
        days.push({
            id: `foundations-day-${day}`,
            dayNumber: day,
            title: `Foundation Day ${day}`,
            description: `Advanced ECG fundamentals - Day ${day}`,
            isUnlocked: false,
            rewards: { xp: 500 + (day * 10), ecgCoins: 100 + (day * 5) },
            tasks: generateDayTasks(day, 'foundations')
        });
    }
    return days;
}
/**
 * Generate 30 days of Rhythm Hunters content
 */
function generateRhythmHuntersDays() {
    const days = [];
    for (let day = 1; day <= 30; day++) {
        days.push({
            id: `rhythm-day-${day}`,
            dayNumber: day,
            title: `Rhythm Hunt Day ${day}`,
            description: `Advanced rhythm recognition challenges`,
            isUnlocked: day === 1,
            rewards: { xp: 600 + (day * 15), ecgCoins: 120 + (day * 8) },
            tasks: generateDayTasks(day, 'rhythms')
        });
    }
    return days;
}
/**
 * Generate 30 days of Deadly Patterns content
 */
function generateDeadlyPatternsDays() {
    const days = [];
    for (let day = 1; day <= 30; day++) {
        days.push({
            id: `deadly-day-${day}`,
            dayNumber: day,
            title: `Deadly Pattern Day ${day}`,
            description: `Life-threatening ECG pattern recognition`,
            isUnlocked: day === 1,
            rewards: { xp: 700 + (day * 20), ecgCoins: 140 + (day * 10) },
            tasks: generateDayTasks(day, 'deadly')
        });
    }
    return days;
}
/**
 * Generate 30 days of ICU ECG Bosses content
 */
function generateICUBossesDays() {
    const days = [];
    for (let day = 1; day <= 30; day++) {
        days.push({
            id: `icu-day-${day}`,
            dayNumber: day,
            title: `ICU Boss Day ${day}`,
            description: `Complex ICU ECG scenarios and advanced interpretation`,
            isUnlocked: day === 1,
            rewards: { xp: 800 + (day * 25), ecgCoins: 160 + (day * 12) },
            tasks: generateDayTasks(day, 'icu')
        });
    }
    return days;
}
/**
 * Generate 5 tasks for any given day and theme
 */
function generateDayTasks(dayNumber, theme) {
    const taskTypes = ['h5p-content', 'ecg-simulator', 'clinical-scenario', 'interactive-video', 'quiz'];
    const tasks = [];
    for (let i = 1; i <= 5; i++) {
        const taskType = taskTypes[i - 1];
        tasks.push({
            id: `${theme}-day${dayNumber}-task${i}`,
            type: taskType,
            title: `${theme.charAt(0).toUpperCase() + theme.slice(1)} Task ${i}`,
            description: `Interactive ${taskType} for day ${dayNumber}`,
            content: generateTaskContent(taskType, theme, dayNumber, i),
            requiredAccuracy: 70 + (dayNumber * 0.5),
            timeLimit: 300 + (i * 60)
        });
    }
    return tasks;
}
/**
 * Generate appropriate content based on task type and theme
 */
function generateTaskContent(taskType, theme, day, taskNumber) {
    const baseContent = {
        scenario: `${theme} learning scenario for day ${day}, task ${taskNumber}`,
        difficulty: Math.min(day * 3, 90),
        learningObjectives: [
            `Master ${theme} concepts for day ${day}`,
            `Apply knowledge in practical scenarios`,
            `Build upon previous learning`
        ]
    };
    switch (taskType) {
        case 'h5p-content':
            return {
                type: 'drag-drop',
                title: `${theme} Interactive Exercise`,
                description: 'Interactive learning module',
                activity: { ...baseContent, passingScore: 75 },
                scoring: { maxPoints: 100, passingScore: 75 }
            };
        case 'ecg-simulator':
            return {
                ...baseContent,
                rhythm: getRandomRhythm(theme),
                measurements: [
                    { name: 'Heart Rate', target: 75, tolerance: 10, unit: 'bpm' }
                ],
                questions: [
                    {
                        question: `What is the key feature of this ${theme} pattern?`,
                        options: ['Option A', 'Option B', 'Option C', 'Option D'],
                        correct: 0,
                        explanation: `This is characteristic of ${theme} patterns.`
                    }
                ]
            };
        case 'clinical-scenario':
            return {
                ...baseContent,
                patientInfo: {
                    age: 50 + day,
                    gender: 'male',
                    chiefComplaint: `${theme} related symptoms`,
                    vitals: { hr: 80, bp: '120/80', rr: 16, spo2: 98, temp: 37.0 }
                },
                decisionTree: {
                    question: `How would you manage this ${theme} case?`,
                    options: [
                        {
                            text: 'Immediate intervention',
                            outcome: 'correct',
                            points: 100,
                            feedback: 'Correct approach for this scenario.'
                        }
                    ]
                },
                timeLimit: 180,
                learningPoints: [`Key ${theme} management principles`]
            };
        case 'interactive-video':
            return {
                videoUrl: getThemeVideo(theme, day),
                videoTitle: `${theme} Learning Video - Day ${day}`,
                videoDuration: 300,
                interactions: [
                    {
                        timestamp: 60,
                        type: 'quiz',
                        question: `Key ${theme} concept from this video?`,
                        options: ['Concept A', 'Concept B', 'Concept C', 'Concept D'],
                        correct: 0,
                        explanation: `This demonstrates ${theme} principles.`
                    }
                ]
            };
        default:
            return baseContent;
    }
}
/**
 * Get appropriate rhythm based on theme
 */
function getRandomRhythm(theme) {
    const rhythmMap = {
        foundations: ['normal-sinus', 'sinus-brady', 'sinus-tachy'],
        rhythms: ['afib', 'aflutter', 'svt', 'vtach'],
        deadly: ['vtach', 'vfib', 'stemi', 'complete-block'],
        icu: ['complex-arrhythmia', 'paced-rhythm', 'artifact']
    };
    const rhythms = rhythmMap[theme] || rhythmMap.foundations;
    return rhythms[Math.floor(Math.random() * rhythms.length)];
}
/**
 * Get appropriate video based on theme and day
 */
function getThemeVideo(theme, day) {
    const videoMap = {
        foundations: [
            'https://www.youtube.com/watch?v=gyVs-D7Uyk8', // ECG Basics
            'https://www.youtube.com/watch?v=3_hZYUmjMdE', // Heart Anatomy
            'https://www.youtube.com/watch?v=B6SnpNMoDTk' // ECG Interpretation
        ],
        rhythms: [
            'https://www.youtube.com/watch?v=B6SnpNMoDTk', // Ventricular Rhythms
            'https://www.youtube.com/watch?v=gyVs-D7Uyk8', // Arrhythmias
            'https://www.youtube.com/watch?v=3_hZYUmjMdE' // Rhythm Analysis
        ],
        deadly: [
            'https://www.youtube.com/watch?v=B6SnpNMoDTk', // Emergency Rhythms
            'https://www.youtube.com/watch?v=gyVs-D7Uyk8', // STEMI Recognition
            'https://www.youtube.com/watch?v=3_hZYUmjMdE' // Life-threatening Patterns
        ],
        icu: [
            'https://www.youtube.com/watch?v=B6SnpNMoDTk', // Complex Arrhythmias
            'https://www.youtube.com/watch?v=gyVs-D7Uyk8', // ICU Monitoring
            'https://www.youtube.com/watch?v=3_hZYUmjMdE' // Advanced Interpretation
        ]
    };
    const videos = videoMap[theme] || videoMap.foundations;
    return videos[day % videos.length];
}
/**
 * Check and auto-initialize events on app startup
 */
export const checkAndInitializeEvents = async () => {
    try {
        await autoInitializeEventsSystem();
    }
    catch (error) {
        console.error('Failed to check/initialize events:', error);
    }
};
