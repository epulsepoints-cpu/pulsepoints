import { Lesson } from '@/types/learning';

// ENHANCED LESSON 1: Complete Heart Anatomy - Duolingo-Style Units
export const optimizedLesson1: Lesson = {
  id: 'module-1-lesson-1',
  moduleId: 'module-1',
  title: "Complete Heart Anatomy Mastery",
  description: "Master heart anatomy through 6 focused learning units: Foundation, Chambers, Valves, Coronary System, Electrical System, and Heart Sounds - each with interactive content and quizzes",
  order: 1,
  estimatedTime: 40,
  content: {
    type: 'mixed',
    introduction: "🫀 Welcome to Heart Mastery! Learn cardiac anatomy through 6 progressive units with slides, audio, video, and quizzes. Each unit builds on the previous one for complete understanding.",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your Learning Journey",
        content: "UNIT 1: Foundation → UNIT 2: Chambers → UNIT 3: Valves → UNIT 4: Coronary System → UNIT 5: Electrical System → UNIT 6: Heart Sounds",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // ===============================================
      // 🎯 UNIT 1: HEART FOUNDATION (7 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: Heart Foundation',
        content: 'Start your heart mastery journey! Learn the essential basics that make everything else possible.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/heart-anatomy-overview.png',
        imageAlt: 'Complete heart anatomy overview for foundation learning',
        highlights: [
          '📏 Heart size and location',
          '💓 Pumping function',
          '🔄 Circulation systems', 
          '🏗️ Heart structure layers'
        ],
        hint: '🚀 Your foundation to heart mastery!'
      },

      // 🎬 YOUTUBE VIDEO: 3D Heart Anatomy Foundation
      {
        id: 'youtube-heart-anatomy-3d',
        title: '🎬 3D Heart Anatomy Visualization',
        content: 'Watch this amazing 3D animation to see how the heart works in real-time. Perfect foundation for understanding heart structure!',
        type: 'youtube',
        youtubeId: 'e37rJqP6-aM',
        videoDuration: 600,
        minimumWatchTime: 480,
        requireFullWatch: false,
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        hint: '🫀 This 3D visualization will help you understand heart structure better!'
      },

      // 🎬 YOUTUBE VIDEO: Heart Cells & Ion Channels  
      {
        id: 'youtube-heart-cells',
        title: '🎬 Heart Cells & Ion Channels',
        content: 'Discover how individual heart cells create the electrical activity that makes your heart beat. Essential foundation knowledge!',
        type: 'youtube',
        youtubeId: 'LgcgooMCxsw',
        videoDuration: 480,
        minimumWatchTime: 360,
        requireFullWatch: false,
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        hint: '⚡ Understanding cellular mechanisms is key to ECG interpretation!'
      },
      
      {
        id: 'heart-size-location',
        title: 'Heart Size & Location',
        type: 'flashcard',
        icon: '✊',
        flashcardFront: 'How big is your heart?',
        flashcardBack: 'About the size of your fist! 👊 Weighs 10-12 ounces (300g) and sits slightly left of center in your chest between your lungs.',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        hint: '✊ Make a fist - that\'s your heart size!'
      },

      {
        id: 'heart-function-basics',
        title: 'Heart Function: The Body\'s Pump',
        type: 'steps',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Non-Stop Performance',
            description: 'Your heart beats about 100,000 times per day - it never takes a break!'
          },
          {
            number: 2,
            title: 'Massive Output',
            description: 'Pumps 5 liters of blood every minute, circulating your entire blood volume'
          },
          {
            number: 3,
            title: 'Delivery Service',
            description: 'Delivers oxygen and nutrients to every single cell in your body'
          },
          {
            number: 4,
            title: 'Waste Removal',
            description: 'Picks up carbon dioxide and metabolic waste for elimination'
          }
        ],
        hint: '❤️ Never stops working for you!'
      },

      {
        id: 'double-pump-system',
        title: 'Double Pump System',
        type: 'tabs',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        tabs: [
          {
            title: 'Right Side',
            content: 'Pumps deoxygenated blood to lungs (pulmonary circulation). Lower pressure system.'
          },
          {
            title: 'Left Side', 
            content: 'Pumps oxygenated blood to body (systemic circulation). Higher pressure system.'
          },
          {
            title: 'Teamwork',
            content: 'Both sides work together perfectly in synchronized contractions!'
          }
        ],
        hint: '🔄 Two pumps, one heart!'
      },

      {
        id: 'blood-circulation-overview',
        title: 'Blood Circulation Overview',
        type: 'accordion',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        accordionItems: [
          {
            title: '🫁 Pulmonary Circuit',
            content: 'Heart → Lungs → Heart: Picks up oxygen, drops off carbon dioxide'
          },
          {
            title: '🏃 Systemic Circuit', 
            content: 'Heart → Body → Heart: Delivers oxygen and nutrients, picks up waste'
          },
          {
            title: '🔄 Figure-8 Pattern',
            content: 'Blood flows in a continuous figure-8: never mixes between circuits!'
          }
        ],
        hint: '🩸 Think figure-8 pattern!'
      },

      {
        id: 'heart-layers-structure',
        title: 'Heart Layers & Structure',
        type: 'accordion',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        accordionItems: [
          {
            title: '🌟 Epicardium (Outer)',
            content: 'Protective outer layer - smooth and slippery surface'
          },
          {
            title: '💪 Myocardium (Middle)',
            content: 'Thick muscle layer that does all the pumping work - the powerhouse!'
          },
          {
            title: '✨ Endocardium (Inner)',
            content: 'Smooth inner lining that blood flows over - prevents clotting'
          }
        ],
        hint: '🏗️ Three layers, one powerful structure!'
      },

      {
        id: 'cardiac-cycle-basics',
        title: 'Cardiac Cycle Basics',
        type: 'flashcard',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        flashcardFront: 'What are the 2 phases of each heartbeat?',
        flashcardBack: 'SYSTOLE (contraction - heart squeezes out blood) and DIASTOLE (relaxation - heart fills with blood). This creates your pulse and blood pressure! 💓',
        hint: '💓 Squeeze and relax, repeat!'
      },

      // ==================== UNIT 1 QUIZ: HEART FOUNDATION ====================
      {
        id: 'unit1-foundation-quiz',
        title: '🎯 Unit 1 Quiz: Heart Foundation',
        content: "Test your knowledge of heart foundation concepts!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: '/lessonimages/heart-anatomy-overview.png',
        imageAlt: 'Heart anatomy foundation quiz',
        hint: '🧠 Test your Unit 1 knowledge!',
        question: "What is the heart's main function?",
        options: [
          "To produce hormones for the body",
          "To pump blood throughout the body continuously",
          "To filter toxins from the blood",
          "To store oxygen for emergency use"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! The heart's primary function is to pump blood continuously throughout the body, delivering oxygen and nutrients to tissues and removing waste products."
      },

      // ================================================
      // 🎯 UNIT 2: HEART CHAMBERS (8 slides)
      // ================================================
      {
        id: 'unit2-intro',
        title: '🎯 Unit 2: Heart Chambers',
        type: 'highlight',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/heart-chambers-labeled.png',
        imageAlt: 'Heart chambers clearly labeled - four chambers anatomy',
        highlights: [
          '🏠 2 Atria: Receiving rooms for incoming blood',
          '💪 2 Ventricles: Powerful pumping chambers',
          '➡️ Right Side: Handles deoxygenated blood to lungs',
          '⬅️ Left Side: Handles oxygenated blood to body'
        ],
        hint: '🏠 Four rooms, each with a special job!'
      },

      {
        id: 'chambers-overview',
        title: 'The 4 Heart Chambers',
        type: 'tabs',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        tabs: [
          {
            title: '🔴 Right Side',
            content: 'Right Atrium (receives) → Right Ventricle (pumps)\n\nHandles DEOXYGENATED blood flowing to lungs'
          },
          {
            title: '🔵 Left Side', 
            content: 'Left Atrium (receives) → Left Ventricle (pumps)\n\nHandles OXYGENATED blood flowing to body'
          },
          {
            title: '📥 Atria',
            content: 'TOP chambers that RECEIVE blood:\n• Right Atrium: from body\n• Left Atrium: from lungs'
          },
          {
            title: '📤 Ventricles',
            content: 'BOTTOM chambers that PUMP blood:\n• Right Ventricle: to lungs\n• Left Ventricle: to body'
          }
        ],
        hint: '4️⃣ Four chambers, two jobs each!'
      },

      {
        id: 'right-atrium',
        title: 'Right Atrium: Blood Collector',
        type: 'flashcard',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        flashcardFront: '📥 What does the Right Atrium collect?',
        flashcardBack: 'Deoxygenated blood from the ENTIRE body through:\n\n• Superior vena cava (upper body)\n• Inferior vena cava (lower body)\n\nThen sends it to right ventricle! 🫀',
        hint: '📥 Collection chamber for returning blood!'
      },

      {
        id: 'right-ventricle',
        title: 'Right Ventricle: Lung Pump',
        type: 'steps',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: '📥 Receives Blood',
            description: 'Gets deoxygenated blood from right atrium'
          },
          {
            number: 2,
            title: '💨 Pumps to Lungs', 
            description: 'Sends blood through pulmonary artery to lungs'
          },
          {
            number: 3,
            title: '💪 Thinner Walls',
            description: 'Less muscular than left ventricle - lungs are nearby!'
          },
          {
            number: 4,
            title: '🫁 Low Pressure',
            description: 'Uses less force because lungs need gentle pressure'
          }
        ],
        hint: '🫁 Dedicated lung pump!'
      },

      {
        id: 'left-atrium',
        title: 'Left Atrium: Oxygen-Rich Receiver',
        type: 'flashcard',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        flashcardFront: '🌬️ Where does the Left Atrium get its blood?',
        flashcardBack: 'From the LUNGS! 🫁\n\nReceives oxygen-rich blood through 4 pulmonary veins\n\nFills during diastole (relaxation phase)\nEmpties during atrial contraction',
        hint: '🌬️ Fresh oxygen from the lungs!'
      },

      {
        id: 'left-ventricle',
        title: 'Left Ventricle: Powerhouse Pump',
        type: 'highlight',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        highlights: [
          '💪 STRONGEST chamber - thickest muscular walls',
          '🌍 Pumps to ENTIRE body through aorta',
          '⚡ Generates HIGH pressure for systemic circulation',
          '❤️ The "workhorse" of your cardiovascular system'
        ],
        hint: '💪 The strongest chamber!'
      },

      {
        id: 'atria-vs-ventricles',
        title: 'Atria vs Ventricles: Team Work',
        type: 'tabs',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        tabs: [
          {
            title: '📥 Atria (Primer Pumps)',
            content: '• TOP chambers\n• RECEIVE blood from body/lungs\n• FILL the ventricles below\n• Create gentle pressure\n• Work during atrial systole'
          },
          {
            title: '📤 Ventricles (Main Pumps)',
            content: '• BOTTOM chambers\n• PUMP blood out to body/lungs\n• Generate HIGH pressure\n• Do the heavy lifting\n• Work during ventricular systole'
          },
          {
            title: '🤝 Perfect Coordination',
            content: 'Timing is everything!\n\n1. Atria fill while ventricles pump\n2. Atria contract to top off ventricles\n3. Ventricles contract to pump blood out\n4. Repeat 70+ times per minute!'
          }
        ],
        hint: '🤝 Perfect teamwork!'
      },

      {
        id: 'heart-septum',
        title: 'Heart Septum: The Great Divider',
        type: 'accordion',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        accordionItems: [
          {
            title: '🧱 What is the Septum?',
            content: 'A thick muscular wall that divides the heart into RIGHT and LEFT sides'
          },
          {
            title: '🚫 Why No Mixing?',
            content: 'Prevents oxygenated blood (left) from mixing with deoxygenated blood (right) - keeps circulation efficient!'
          },
          {
            title: '💪 Structure & Strength',
            content: 'Made of cardiac muscle tissue - strong enough to maintain separation during intense pumping'
          },
          {
            title: '👶 Development Note',
            content: 'Babies can be born with septal defects (holes) that usually close naturally or need surgical repair'
          }
        ],
        hint: '🧱 The wall that keeps blood separate!'
      },

      // Add Audio lesson for Unit 2
      {
        id: 'chambers-audio-lesson',
        title: '🎵 Heart Chambers Audio Review',
        content: 'Listen to this comprehensive review of all 4 heart chambers. Hear about their anatomy, function, and how they work together in the cardiac cycle.',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        audioUrl: '/lessonaudio/heart-sounds/lub-dub-detailed.mp3',
        hint: '🔊 Listen and learn about the 4 chambers!'
      },

      // ==================== UNIT 2 QUIZ: HEART CHAMBERS ====================
      {
        id: 'unit2-chambers-quiz',
        title: '🎯 Unit 2 Quiz: Heart Chambers',
        content: "Test your knowledge of heart chambers!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: '/lessonimages/heart-chambers-labeled.png',
        imageAlt: 'Heart chambers knowledge quiz',
        hint: '🧠 Test your Unit 2 knowledge!',
        question: "Which chamber has the thickest muscular walls?",
        options: [
          "Right atrium",
          "Right ventricle", 
          "Left atrium",
          "Left ventricle"
        ],
        correctAnswer: 3,
        explanation: "✅ Correct! The left ventricle has the thickest muscular walls because it must generate enough pressure to pump blood to the entire body through the systemic circulation."
      },

      // ================================================
      // 🎯 UNIT 3: HEART VALVES (8 slides)
      // ================================================
      {
        id: 'unit3-intro',
        title: '🎯 Unit 3: Heart Valves',
        type: 'highlight',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/heart-valves-anatomy.png',
        imageAlt: 'Heart valves anatomy - tricuspid, pulmonary, mitral, aortic',
        highlights: [
          '🚪 4 one-way valves ensure blood flows correctly',
          '💓 AV valves: Tricuspid & Mitral (between chambers)',
          '🌊 Semilunar valves: Pulmonary & Aortic (exits)',
          '🎵 Valve closure creates LUB-DUB heart sounds'
        ],
        hint: '🚪 Four one-way doors!'
      },

      {
        id: 'valves-overview',
        title: 'The 4 Heart Valves',
        type: 'tabs',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        tabs: [
          {
            title: '🚪 AV Valves',
            content: 'Atrioventricular valves between chambers:\n\n• Tricuspid (right side) - 3 cusps\n• Mitral/Bicuspid (left side) - 2 cusps\n\nPrevent backflow to atria'
          },
          {
            title: '🌊 Semilunar Valves',
            content: 'Half-moon shaped exit valves:\n\n• Pulmonary (to lungs) - 3 cusps\n• Aortic (to body) - 3 cusps\n\nGuard the exits from ventricles'
          },
          {
            title: '🔄 Blood Flow Direction',
            content: 'One-way flow pattern:\n\nAtria → AV Valves → Ventricles → Semilunar Valves → Arteries\n\nNo backflow allowed!'
          }
        ],
        hint: '🎯 Two types: AV and Semilunar!'
      },

      {
        id: 'tricuspid-valve',
        title: 'Tricuspid Valve: Right Guardian',
        type: 'flashcard',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        flashcardFront: '3️⃣ Why is it called TRI-cuspid?',
        flashcardBack: 'Because it has 3 CUSPS (leaflets)! 🚪\n\nLocation: Between right atrium & right ventricle\n\nFunction:\n• Opens when atrium contracts\n• Closes when ventricle contracts\n• Prevents backflow to right atrium',
        hint: '3️⃣ Three leaflets on the right!'
      },

      {
        id: 'mitral-valve',
        title: 'Mitral Valve: Left Guardian',
        type: 'accordion',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        accordionItems: [
          {
            title: '👑 Why Called "Mitral"?',
            content: 'Looks like a bishop\'s hat (miter) when closed!'
          },
          {
            title: '2️⃣ Bicuspid Structure',
            content: 'Has 2 cusps (leaflets) - also called bicuspid valve'
          },
          {
            title: '📍 Location & Function',
            content: 'Between left atrium & left ventricle - prevents backflow to left atrium'
          },
          {
            title: '💪 High Pressure Handler',
            content: 'Strongest AV valve - must handle left ventricle\'s powerful contractions'
          }
        ],
        hint: '2️⃣ Two leaflets on the left!'
      },

      {
        id: 'pulmonary-valve',
        title: 'Pulmonary Valve: Lung Gate',
        type: 'steps',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: '🫁 Gateway Location',
            description: 'Guards entrance to pulmonary artery (to lungs)'
          },
          {
            number: 2,
            title: '🌙 Semilunar Shape',
            description: '3 semi-circular cusps shaped like half-moons'
          },
          {
            number: 3,
            title: '▶️ Opening Action',
            description: 'Opens when right ventricle contracts & pumps'
          },
          {
            number: 4,
            title: '🚫 Backflow Prevention',
            description: 'Closes to prevent blood returning from lungs'
          }
        ],
        hint: '🫁 Gateway to the lungs!'
      },

      {
        id: 'aortic-valve',
        title: 'Aortic Valve: Body Gate',
        type: 'flashcard',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        flashcardFront: '🌊 Why is the Aortic Valve the strongest?',
        flashcardBack: 'It handles the HIGHEST pressure in the heart! 💪\n\n• Guards entrance to aorta (main artery)\n• 3 semi-circular cusps\n• Withstands left ventricle\'s powerful pumping\n• Must be strong for systemic circulation',
        hint: '🌊 Strongest valve for highest pressure!'
      },

      {
        id: 'valve-timing',
        title: 'Valve Timing & Heart Sounds',
        type: 'accordion',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        accordionItems: [
          {
            title: '🎵 S1 Sound: "LUB"',
            content: 'AV valves (Tricuspid + Mitral) CLOSE during systole\n• Prevents backflow to atria\n• Marks beginning of ventricular contraction\n• First heart sound you hear'
          },
          {
            title: '🎵 S2 Sound: "DUB"', 
            content: 'Semilunar valves (Pulmonary + Aortic) CLOSE during diastole\n• Prevents backflow from arteries\n• Marks end of ventricular contraction\n• Second heart sound you hear'
          },
          {
            title: '⏰ Perfect Timing',
            content: 'Valve coordination creates the heartbeat rhythm:\n1. AV valves close → LUB\n2. Heart pumps blood out\n3. Semilunar valves close → DUB\n4. Heart fills with blood\n5. Repeat!'
          },
          {
            title: '🩺 Clinical Significance',
            content: 'Abnormal heart sounds (murmurs) can indicate:\n• Valve stenosis (narrow opening)\n• Valve regurgitation (leaky closure)\n• Need for medical evaluation'
          }
        ],
        hint: '🎵 LUB-DUB sounds from valve closure!'
      },

      // ==================== UNIT 3 QUIZ: HEART VALVES ====================
      {
        id: 'unit3-valves-quiz',
        title: '🎯 Unit 3 Quiz: Heart Valves',
        content: "Test your knowledge of heart valves!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: '/lessonimages/heart-valves-anatomy.png',
        imageAlt: 'Heart valves assessment quiz',
        hint: '🧠 Test your Unit 3 knowledge!',
        question: "What creates the 'LUB' sound (S1) of the heartbeat?",
        options: [
          "Aortic and pulmonary valves opening",
          "Tricuspid and mitral valves closing",
          "Blood flowing through the chambers",
          "Aortic and pulmonary valves closing"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! The S1 'LUB' sound is created when the tricuspid and mitral (AV) valves close at the beginning of systole, preventing backflow into the atria."
      },

      // ================================================
      // 🎯 UNIT 4: CORONARY SYSTEM (8 slides)
      // ================================================
      {
        id: 'unit4-intro',
        title: '🎯 Unit 4: Coronary System',
        type: 'highlight',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/coronary-arteries-detailed.png',
        imageAlt: 'Detailed coronary arteries - LAD, LCX, RCA blood supply',
        highlights: [
          '🫀 Heart muscle needs its own blood supply',
          '🛣️ 3 main coronary arteries: LAD, LCX, RCA',
          '⚠️ LAD = "Widowmaker" - most critical artery',
          '👑 Dominance patterns affect heart attack locations'
        ],
        hint: '🫀 The heart feeding itself!'
      },

      {
        id: 'coronary-overview',
        title: 'Coronary Circulation Basics',
        type: 'flashcard',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        flashcardFront: '🤔 Why does the heart muscle need its own blood supply?',
        flashcardBack: 'The heart works 24/7 and needs constant oxygen! 💪\n\n• Myocardium (heart muscle) is very active\n• Coronary arteries branch from aorta\n• Start just above aortic valve\n• Deliver oxygen-rich blood to heart muscle\n• Without them, heart muscle dies (heart attack)',
        hint: '🔄 Heart muscle needs food too!'
      },

      {
        id: 'left-main-artery',
        title: 'Left Main Coronary Artery',
        type: 'tabs',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        tabs: [
          {
            title: '🛣️ Main Highway',
            content: 'Left main = major trunk that splits into 2 branches\n\nShort but crucial - supplies most of left ventricle'
          },
          {
            title: '🔀 LAD Branch',
            content: 'LAD (Left Anterior Descending)\n• Goes down front of heart\n• Supplies front wall & septum\n• "Widowmaker" if blocked'
          },
          {
            title: '↪️ LCX Branch', 
            content: 'LCX (Left Circumflex)\n• Goes around left side\n• Supplies lateral & back walls\n• Works with LAD as team'
          },
          {
            title: '⚠️ Clinical Importance',
            content: 'Left main blockage = emergency!\n• Affects both LAD and LCX\n• Can cause massive heart attack\n• Needs immediate treatment'
          }
        ],
        hint: '🛣️ Main highway splitting into two!'
      },

      {
        id: 'lad-artery',
        title: 'LAD: The Widowmaker',
        type: 'accordion',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        accordionItems: [
          {
            title: '⚠️ Why "Widowmaker"?',
            content: 'LAD blockage can cause massive heart attacks - historically left many widows behind. Most dangerous single vessel to block!'
          },
          {
            title: '📍 Location & Path',
            content: 'Runs down the FRONT of the heart in the anterior interventricular groove, from base to apex'
          },
          {
            title: '🫀 Territory Supplied',
            content: '• Front wall of left ventricle\n• Interventricular septum (wall between ventricles)\n• Often parts of right ventricle\n• Critical conduction system areas'
          },
          {
            title: '🚨 Clinical Significance',
            content: 'LAD heart attacks can cause:\n• Large areas of dead heart muscle\n• Heart failure\n• Dangerous rhythm problems\n• Sudden cardiac death'
          }
        ],
        hint: '⚠️ Most important artery!'
      },

      {
        id: 'lcx-artery',
        title: 'LCX: The Side Supplier',
        type: 'steps',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: '🗺️ Takes the Scenic Route',
            description: 'Travels around LEFT side of heart in circumflex groove'
          },
          {
            number: 2,
            title: '🎯 Territory Coverage',
            description: 'Supplies lateral (side) and posterior (back) walls of left ventricle'
          },
          {
            number: 3,
            title: '🤝 Team Player',
            description: 'Works alongside LAD to supply the powerful left ventricle'
          },
          {
            number: 4,
            title: '📊 Clinical Impact',
            description: 'LCX blockage causes "lateral wall MI" - side heart attack pattern'
          }
        ],
        hint: '↪️ Goes around the side!'
      },

      {
        id: 'rca-artery',
        title: 'RCA: Right Side Ruler',
        type: 'flashcard',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        flashcardFront: '👑 What does the RCA (Right Coronary Artery) rule?',
        flashcardBack: 'The RIGHT side + electrical system! ⚡\n\n• Right ventricle\n• Right atrium  \n• Usually inferior (bottom) wall of left ventricle\n• SA node (pacemaker)\n• AV node (electrical relay)\n\nRCA problems can cause rhythm issues!',
        hint: '➡️ Rules the right side!'
      },

      {
        id: 'coronary-dominance',
        title: 'Coronary Dominance Patterns',
        type: 'tabs',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        tabs: [
          {
            title: '👑 Right Dominant (85%)',
            content: 'Most common pattern:\n\n• RCA supplies inferior wall\n• RCA gives off PDA (posterior descending artery)\n• Right-sided electrical system supply\n• Inferior MIs often involve RCA'
          },
          {
            title: '⬅️ Left Dominant (8%)',
            content: 'Less common pattern:\n\n• LCX supplies inferior wall\n• LCX gives off PDA\n• Left-sided electrical control\n• Different heart attack patterns'
          },
          {
            title: '🤝 Co-Dominant (7%)',
            content: 'Shared responsibility:\n\n• Both RCA and LCX supply inferior wall\n• Balanced electrical supply\n• Mixed heart attack patterns\n• Backup circulation'
          },
          {
            title: '🏥 Clinical Impact',
            content: 'Why dominance matters:\n\n• Predicts heart attack location\n• Affects electrical complications\n• Guides treatment decisions\n• Determines bypass surgery approach'
          }
        ],
        hint: '👑 Who rules the bottom wall?'
      },

      // Add Audio lesson for Unit 4
      {
        id: 'coronary-audio-lesson',
        title: '🎵 Coronary System Audio Guide',
        content: 'Listen to a detailed explanation of coronary anatomy, blood flow patterns, and clinical significance. Perfect for reinforcing your knowledge.',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        audioUrl: '/lessonaudio/coronary-system/coronary-intro.mp3',
        hint: '🔊 Listen to coronary circulation!'
      },

      // ==================== UNIT 4 QUIZ: CORONARY SYSTEM ====================
      {
        id: 'unit4-coronary-quiz',
        title: '🎯 Unit 4 Quiz: Coronary System',
        content: "Test your knowledge of the coronary system!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: '/lessonimages/coronary-arteries-detailed.png',
        imageAlt: 'Coronary system mastery quiz',
        hint: '🧠 Test your Unit 4 knowledge!',
        question: "Which coronary artery is often called the 'widowmaker'?",
        options: [
          "Right coronary artery (RCA)",
          "Left circumflex (LCX)",
          "Left anterior descending (LAD)",
          "Left main coronary artery"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! The LAD (Left Anterior Descending) is called the 'widowmaker' because it supplies a large portion of the left ventricle, and blockage here can cause massive heart attacks."
      },

      // ================================================
      // 🎯 UNIT 5: ELECTRICAL SYSTEM (8 slides)
      // ================================================
      {
        id: 'unit5-intro',
        title: '🎯 Unit 5: Electrical System',
        type: 'highlight',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/electrical-conduction-system.png',
        imageAlt: 'Heart electrical system overview',
        highlights: [
          '⚡ Self-powered electrical network',
          '🥁 SA node = natural pacemaker',
          '⏱️ AV node = timing control center',
          '🛤️ Bundle branches = express lanes to ventricles'
        ],
        hint: '⚡ Heart\'s electrical highway!'
      },

      // 🎬 YOUTUBE VIDEO: ECG Fundamentals Masterclass
      {
        id: 'youtube-ecg-masterclass',
        title: '🎬 ECG Fundamentals - Complete Masterclass',
        content: 'Watch this comprehensive 60-minute masterclass from a professional cardiologist! Perfect timing after learning about the electrical system.',
        type: 'youtube',
        youtubeId: 'WnrvNGa_bPY',
        videoDuration: 3600,
        minimumWatchTime: 1800,
        requireFullWatch: false,
        backgroundColor: '#fefce8',
        textColor: '#a16207',
        animation: 'fade',
        hint: '📚 Professional-level ECG training - this builds on everything you just learned!'
      },

      {
        id: 'electrical-overview',
        title: 'Heart\'s Electrical Highway',
        type: 'flashcard',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        flashcardFront: '🔌 Does the heart need the brain to beat?',
        flashcardBack: 'NO! The heart is self-powered! 🫀⚡\n\n• Specialized cardiac cells generate electricity\n• Electrical impulses coordinate contractions\n• Heart can beat outside the body\n• Brain only modifies heart rate\n• Heart runs itself 24/7!',
        hint: '🔌 Self-powered heart!'
      },

      {
        id: 'sa-node',
        title: 'SA Node: The Pacemaker',
        type: 'accordion',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        accordionItems: [
          {
            title: '🥁 Natural Pacemaker',
            content: 'SA (sinoatrial) node is the heart\'s built-in metronome - sets the rhythm for your entire life!'
          },
          {
            title: '📍 Location & Structure',
            content: 'Located in right atrium wall, made of specialized pacemaker cells that automatically fire electrical impulses'
          },
          {
            title: '⏰ Rate Control',
            content: 'Fires 60-100 times per minute at rest\n• Exercise increases rate\n• Sleep decreases rate\n• Controlled by nervous system'
          },
          {
            title: '🚨 Clinical Significance',
            content: 'SA node problems cause:\n• Bradycardia (slow heart rate)\n• Sick sinus syndrome\n• May need artificial pacemaker'
          }
        ],
        hint: '🥁 The rhythm maker!'
      },

      {
        id: 'av-node',
        title: 'AV Node: The Gatekeeper',
        type: 'steps',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: '🚪 Strategic Location',
            description: 'Sits between atria and ventricles - the only electrical connection!'
          },
          {
            number: 2,
            title: '⏱️ Intelligent Delay',
            description: 'Delays impulse 0.1 seconds - lets atria empty before ventricles contract'
          },
          {
            number: 3,
            title: '🛡️ Protective Filter',
            description: 'Prevents dangerously fast rhythms from reaching ventricles'
          },
          {
            number: 4,
            title: '🔄 Backup Pacemaker',
            description: 'Can take over if SA node fails (but at slower 40-60 BPM rate)'
          }
        ],
        hint: '⏱️ Perfect timing control!'
      },

      {
        id: 'bundle-branches',
        title: 'Bundle Branches: Express Lanes',
        type: 'tabs',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        tabs: [
          {
            title: '🛤️ Bundle of His',
            content: 'Main highway from AV node\n\n• Single trunk that splits\n• Penetrates interventricular septum\n• Divides into left and right branches'
          },
          {
            title: '➡️ Right Bundle Branch',
            content: 'Express lane to right ventricle\n\n• Travels down right side of septum\n• Activates right ventricle\n• Blockage causes RBBB pattern'
          },
          {
            title: '⬅️ Left Bundle Branch',
            content: 'Express lane to left ventricle\n\n• Splits into anterior and posterior fascicles\n• Activates powerful left ventricle\n• Blockage causes LBBB pattern'
          },
          {
            title: '🔍 Clinical Importance',
            content: 'Bundle branch blocks affect:\n\n• QRS width on ECG\n• Ventricular coordination\n• May indicate heart disease\n• Can affect pacemaker placement'
          }
        ],
        hint: '🛤️ Express lanes to ventricles!'
      },

      {
        id: 'purkinje-fibers',
        title: 'Purkinje Fibers: Final Network',
        type: 'flashcard',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        flashcardFront: '🕸️ How do Purkinje fibers ensure coordinated contraction?',
        flashcardBack: 'They\'re the final delivery network! 🚚⚡\n\n• Spread throughout ventricular muscle\n• Conduct electricity very rapidly\n• Activate ventricles from bottom to top\n• Create synchronized "wringing" motion\n• Ensure efficient blood ejection',
        hint: '🕸️ Final distribution network!'
      },

      {
        id: 'ecg-basics',
        title: 'ECG: Reading the Heart\'s Electricity',
        type: 'accordion',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: '/lessonimages/12-lead-ecg-overview.png',
        imageAlt: 'Basic ECG waveforms showing electrical activity',
        accordionItems: [
          {
            title: '📈 What is an ECG?',
            content: 'Electrocardiogram records electrical activity of the heart from skin surface - like eavesdropping on heart\'s electrical conversations!'
          },
          {
            title: '📊 P Wave',
            content: 'Atrial depolarization (electrical activation)\n• Small upward deflection\n• Represents atrial contraction\n• Follows SA node firing'
          },
          {
            title: '⚡ QRS Complex',
            content: 'Ventricular depolarization (electrical activation)\n• Large, sharp deflection\n• Represents ventricular contraction\n• Masks atrial repolarization'
          },
          {
            title: '🔄 T Wave',
            content: 'Ventricular repolarization (electrical recovery)\n• Rounded wave after QRS\n• Heart muscle resets for next beat\n• Vulnerable period for arrhythmias'
          }
        ],
        hint: '📈 Heart\'s electrical signature!'
      },

      // Add YouTube lesson for Unit 5
      {
        id: 'electrical-youtube-lesson',
        title: '📺 Heart Electrical System Deep Dive',
        content: 'Watch this comprehensive YouTube video explaining cardiac electrophysiology, conduction pathways, and how ECG reflects electrical activity.',
        type: 'youtube',
        layout: 'centered',
        backgroundColor: '#fdf4ff',
        textColor: '#86198f',
        animation: 'fade',
        youtubeId: '48Oxvum8fds',
        hint: '🎬 Advanced electrical concepts!'
      },

      // 🎬 ECGKID MODULE 4: ECG Correlates - Heart Mechanics to Electrical Signals
      {
        id: 'youtube-ecgkid-module4-correlates',
        title: '🎬 ECGkid Module 4: ECG Correlates - Heart Mechanics to Electrical',
        content: 'Decode the critical link between electrical signals and muscle response. How ECG squiggly lines reflect real heart movements - essential correlation knowledge!',
        type: 'youtube',
        youtubeId: 'sohPny3r7pA',
        videoDuration: 346,
        minimumWatchTime: 280,
        requireFullWatch: true,
        backgroundColor: '#fef7ff',
        textColor: '#7c2d12',
        animation: 'fade',
        hint: '⚡❤️ ECGkid correlates: Electrical signals ↔ Heart mechanics!'
      },

      // ==================== UNIT 5 QUIZ: ELECTRICAL SYSTEM ====================
      {
        id: 'unit5-electrical-quiz',
        title: '🎯 Unit 5 Quiz: Electrical System',
        content: "Test your knowledge of the heart's electrical system!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: '/lessonimages/electrical-conduction-system.png',
        imageAlt: 'Heart electrical system quiz',
        hint: '🧠 Test your Unit 5 knowledge!',
        question: "What is the heart's natural pacemaker?",
        options: [
          "AV node",
          "SA node",
          "Bundle of His",
          "Purkinje fibers"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! The SA (sinoatrial) node is the heart's natural pacemaker, initiating each heartbeat by firing electrical impulses 60-100 times per minute."
      },

      // ================================================
      // 🎯 UNIT 6: HEART SOUNDS (7 slides)
      // ================================================
      {
        id: 'unit6-intro',
        title: '🎯 Unit 6: Heart Sounds',
        type: 'highlight',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/heart-valves-anatomy.png',
        imageAlt: 'Heart valves creating sounds - lub-dub mechanism',
        highlights: [
          '🎵 Heart sounds = valve closures (not openings!)',
          '1️⃣ S1 "LUB" = AV valves closing',
          '2️⃣ S2 "DUB" = Semilunar valves closing',
          '🩺 Each valve has its best listening location'
        ],
        hint: '🔊 Music of the heart!'
      },

      {
        id: 'heart-sounds-overview',
        title: 'The Heart\'s Music: Lub-Dub',
        type: 'flashcard',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        flashcardFront: '🎵 What creates heart sounds - valve opening or closing?',
        flashcardBack: 'VALVE CLOSURE creates the sounds! 🚪💥\n\n• Opening is silent (like opening a door quietly)\n• Closing makes noise (like slamming a door)\n• S1 "LUB" = AV valves slam shut\n• S2 "DUB" = Semilunar valves slam shut\n• This creates the heartbeat rhythm we hear!',
        hint: '🎵 Valve closure creates sounds!'
      },

      {
        id: 's1-sound',
        title: 'S1 Sound: "LUB"',
        type: 'accordion',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        accordionItems: [
          {
            title: '🎵 What Creates S1?',
            content: 'Tricuspid and Mitral valves SLAM SHUT at the start of systole - like two doors closing at once!'
          },
          {
            title: '⏰ When Does It Happen?',
            content: 'Beginning of systole when ventricles start contracting\n• Prevents backflow to atria\n• Marks start of ventricular pumping'
          },
          {
            title: '📍 Where to Hear It Best?',
            content: 'Loudest at cardiac apex (bottom left of heart)\n• 5th intercostal space\n• Midclavicular line\n• Left ventricle area'
          },
          {
            title: '🩺 Clinical Pearls',
            content: 'S1 abnormalities can indicate:\n• Mitral regurgitation (leaky valve)\n• First-degree heart block\n• Ventricular dysfunction'
          }
        ],
        hint: '1️⃣ First sound of systole!'
      },

      {
        id: 's2-sound',
        title: 'S2 Sound: "DUB"',
        type: 'tabs',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        tabs: [
          {
            title: '🎵 S2 Basics',
            content: 'Aortic and Pulmonary valves close at end of systole\n\n• Higher pitched than S1\n• Shorter duration\n• Marks start of diastole'
          },
          {
            title: '🔀 Physiological Splitting',
            content: 'During inspiration, S2 splits into A2 and P2:\n\n• A2 = Aortic valve closing first\n• P2 = Pulmonary valve closing second\n• Normal in young people\n• Best heard at left sternal border'
          },
          {
            title: '📍 Best Listening Spots',
            content: 'Loudest at heart base (top of heart):\n\n• Aortic area: Right sternal border, 2nd space\n• Pulmonary area: Left sternal border, 2nd space'
          },
          {
            title: '🚨 Abnormal Splitting',
            content: 'Abnormal S2 splitting can indicate:\n\n• Bundle branch blocks\n• Pulmonary hypertension\n• Aortic stenosis\n• Ventricular septal defect'
          }
        ],
        hint: '2️⃣ Second sound of diastole!'
      },

      {
        id: 'sound-timing',
        title: 'Heart Sound Timing',
        type: 'steps',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/basic-ecg-waveforms.png',
        imageAlt: 'ECG waveforms showing heart sound timing relationships',
        steps: [
          {
            number: 1,
            title: '🎵 S1 "LUB"',
            description: 'AV valves close → systole begins → short pumping phase'
          },
          {
            number: 2,
            title: '💨 Systolic Period',
            description: 'Ventricles contract and eject blood → shorter interval'
          },
          {
            number: 3,
            title: '🎵 S2 "DUB"',
            description: 'Semilunar valves close → diastole begins → heart relaxes'
          },
          {
            number: 4,
            title: '💤 Diastolic Period',
            description: 'Heart fills with blood → longer, quieter interval before next S1'
          }
        ],
        hint: '⏰ Timing tells the story!'
      },

      {
        id: 'listening-locations',
        title: 'Where to Listen',
        type: 'accordion',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        imageUrl: '/lessonimages/heart-valves-anatomy.png',
        imageAlt: 'Heart valve locations for optimal stethoscope placement',
        accordionItems: [
          {
            title: '💎 Aortic Area',
            content: 'Right sternal border, 2nd intercostal space\n• Best for aortic valve sounds\n• S2 loudest here\n• Listen for aortic stenosis/regurgitation'
          },
          {
            title: '🫁 Pulmonary Area',
            content: 'Left sternal border, 2nd intercostal space\n• Best for pulmonary valve sounds\n• Physiological S2 splitting heard here\n• Listen for pulmonary stenosis'
          },
          {
            title: '3️⃣ Tricuspid Area',
            content: 'Lower left sternal border, 4th-5th space\n• Best for tricuspid valve sounds\n• Right heart sounds\n• Listen for tricuspid regurgitation'
          },
          {
            title: '❤️ Mitral Area (Apex)',
            content: 'Cardiac apex, 5th intercostal space, midclavicular line\n• Best for mitral valve sounds\n• S1 loudest here\n• Listen for mitral stenosis/regurgitation'
          }
        ],
        hint: '📍 Each valve has its best spot!'
      },

      // Add final audio lesson with celebration
      {
        id: 'heart-sounds-final-audio',
        title: '🎵 Heart Sounds Mastery Audio',
        content: 'Congratulations! Listen to normal heart sounds and celebrate your complete heart anatomy mastery. You\'ve learned chambers, valves, coronary system, electrical system, and sounds!',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        audioUrl: '/lessonaudio/heart-sounds/mastery-celebration.mp3',
        hint: '🎉 You\'ve mastered heart anatomy!'
      },

      // ==================== UNIT 6 QUIZ: HEART SOUNDS ====================
      {
        id: 'unit6-sounds-quiz',
        title: '🎯 Unit 6 Quiz: Heart Sounds',
        content: "Test your knowledge of heart sounds!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: '/lessonimages/heart-valves-anatomy.png',
        imageAlt: 'Heart sounds understanding quiz',
        hint: '🧠 Test your Unit 6 knowledge!',
        question: "When do you hear the S2 'DUB' sound?",
        options: [
          "When AV valves open",
          "When AV valves close",
          "When semilunar valves open", 
          "When semilunar valves close"
        ],
        correctAnswer: 3,
        explanation: "✅ Correct! The S2 'DUB' sound occurs when the semilunar valves (aortic and pulmonary) close at the end of systole, marking the beginning of diastole."
      }
    ],
    summary: "🎉 Congratulations! You've mastered complete cardiac anatomy through 6 progressive units: Foundation, Chambers, Valves, Coronary System, Electrical System, and Heart Sounds!",
    keyPoints: [
      "🫀 Heart basics: Size, location, function, and 3-layer structure",
      "🏠 4 chambers: RA, RV, LA, LV with specialized functions",
      "🚪 4 valves: Tricuspid, Mitral, Pulmonary, Aortic ensuring one-way flow",
      "🛣️ Coronary arteries: LAD, LCX, RCA supplying heart muscle",
      "⚡ Electrical system: SA node → AV node → Bundle branches → Purkinje fibers",
      "🎵 Heart sounds: S1 (LUB) from AV closure, S2 (DUB) from semilunar closure"
    ],
    resources: [
      {
        title: "Interactive 3D Heart Model",
        url: "/resources/heart-model",
        type: "tool",
        description: "Explore heart anatomy in 3D"
      },
      {
        title: "Heart Sound Library",
        url: "/resources/heart-sounds",
        type: "tool", 
        description: "Normal and abnormal heart sound examples"
      },
      {
        title: "ECG Practice Tool",
        url: "/resources/ecg-practice",
        type: "tool",
        description: "Practice reading basic ECG rhythms"
      }
    ]
  },
  
  // ============= ENHANCED DUOLINGO-STYLE TASKS (Final Assessment Only) =============
  tasks: [
    
    // ==================== FINAL MASTERY ASSESSMENT ====================
    {
      id: 'final-heart-mastery-assessment',
      type: 'final-assessment',
      xp: 50,
      audio: {
        mainNarration: {
          audioUrl: '/lessonaudio/heart-sounds/mastery-celebration.mp3',
          duration: 10,
          transcript: "Congratulations on completing all 6 units of heart anatomy! You've mastered chambers, valves, coronary system, electrical conduction, and heart sounds. Now prove your mastery with this comprehensive assessment."
        }
      },
      images: {
        mainImage: '/lessonimages/heart-anatomy-overview.png',
        slideImages: []
      },
      content: {
        prerequisiteMessage: "🏆 Final Assessment: Complete all 6 units to unlock your Heart Anatomy Mastery Certificate!",
        questions: [
          {
            id: "blood-flow-sequence",
            type: "multiple-choice",
            question: "Which sequence correctly describes blood flow through the heart?",
            options: [
              "RA → RV → Lungs → LA → LV → Body",
              "LA → LV → Lungs → RA → RV → Body", 
              "RV → RA → Body → LV → LA → Lungs",
              "Body → RA → LA → Lungs → RV → LV"
            ],
            correctAnswer: 0,
            explanation: "Correct! Blood flows: Body → RA → RV → Lungs → LA → LV → Body",
            imageUrl: "/lessonimages/heart-chambers-labeled.png"
          },
          {
            id: "lv-contraction-valves",
            type: "multiple-choice",
            question: "What happens when the left ventricle contracts?",
            options: [
              "Mitral valve opens, aortic valve closes",
              "Mitral valve closes, aortic valve opens",
              "Both mitral and aortic valves open",
              "Both mitral and aortic valves close"
            ],
            correctAnswer: 1,
            explanation: "Correct! During LV contraction (systole), mitral valve closes to prevent backflow, aortic valve opens to allow blood ejection.",
            imageUrl: "/lessonimages/heart-valves-anatomy.png"
          },
          {
            id: "coronary-filling-phase",
            type: "multiple-choice",
            question: "The coronary arteries fill during which phase?",
            options: [
              "Systole (when ventricles contract)",
              "Diastole (when ventricles relax)",
              "Only during atrial contraction",
              "Continuously throughout the cycle"
            ],
            correctAnswer: 1,
            explanation: "Correct! Coronary arteries fill primarily during diastole when aortic pressure is high and ventricular pressure is low.",
            imageUrl: "/lessonimages/coronary-arteries-detailed.png"
          }
        ]
      }
    }
  ],
  
  // ============= LESSON COMPLETION METADATA =============
  completed: false,
  attempts: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
