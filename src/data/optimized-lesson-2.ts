import { Lesson } from '@/types/learning';

// ENHANCED LESSON 2: ECG Leads & Views - Duolingo-Style Units
export const optimizedLesson2: Lesson = {
  id: 'module-1-lesson-2',
  moduleId: 'module-1',
  title: "ECG Leads & Views Mastery",
  description: "Master the 12-lead ECG system through 6 focused learning units: System Foundation, Limb Leads, Precordial Leads, Heart Area Views, Lead Interpretation, and Clinical Application - each with interactive content and quizzes",
  order: 2,
  estimatedTime: 35,
  content: {
    type: 'mixed',
    introduction: "📍 Welcome to ECG Leads Mastery! Learn the complete 12-lead system through 6 progressive units with slides, audio, video, and quizzes. Master lead placement, heart area views, and clinical application.",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your ECG Learning Journey",
        content: "UNIT 1: System Foundation → UNIT 2: Limb Leads → UNIT 3: Precordial Leads → UNIT 4: Heart Area Views → UNIT 5: Lead Interpretation → UNIT 6: Clinical Application",
        mediaType: 'image'
      }
    ],
    slides: [
      
      // ===============================================
      // 🎯 UNIT 1: ECG SYSTEM FOUNDATION (7 slides)
      // ===============================================
      {
        id: 'unit1-intro',
        title: '🎯 Unit 1: ECG System Foundation',
        content: 'Start your ECG mastery journey! Learn the 12-lead system basics that unlock complete heart electrical understanding.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/basic-ecg-waveforms.png',
        imageAlt: '12-lead ECG system overview - foundation learning',
        highlights: [
          '📷 ECG leads = electrical cameras viewing heart',
          '🔄 12 leads = complete 360° heart coverage',
          '🎯 6 limb leads + 6 precordial leads = 12 total',
          '📏 Precise placement = accurate diagnosis'
        ],
        hint: '🚀 Your foundation to ECG mastery!'
      },

      // 🎬 YOUTUBE VIDEO: ECG Masterclass - Perfect for Lead Understanding
      {
        id: 'youtube-ecg-masterclass',
        title: '🎬 ECG Fundamentals - Complete Masterclass',
        content: 'Watch this comprehensive 60-minute masterclass from a professional cardiologist! Essential foundation for understanding ECG leads and interpretation.',
        type: 'youtube',
        youtubeId: 'WnrvNGa_bPY',
        videoDuration: 3600,
        minimumWatchTime: 1800,
        requireFullWatch: false,
        backgroundColor: '#fefce8',
        textColor: '#a16207',
        animation: 'fade',
        hint: '📚 Professional-level ECG training - builds perfect foundation for leads!'
      },

      // 🎬 YOUTUBE VIDEO: 30-Day ECG Challenge Introduction
      {
        id: 'youtube-ecg-30day-challenge',
        title: '🎬 30-Day ECG Mastery Challenge',
        content: 'Start your structured ECG learning journey with this comprehensive challenge approach. Perfect complement to this lesson!',
        type: 'youtube',
        youtubeId: 'ZNHKl-eV-8k',
        videoDuration: 900,
        minimumWatchTime: 600,
        requireFullWatch: false,
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        hint: '🏆 Structure your ECG learning with this proven challenge approach!'
      },
      
      {
        id: 'ecg-lead-concept',
        title: 'What is an ECG Lead?',
        type: 'flashcard',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        flashcard: {
          icon: '📷',
          question: 'What is an ECG lead exactly?',
          answer: 'An ECG lead is like a camera 📷 viewing the heart\'s electrical activity from a specific angle!\n\nEach lead shows how electricity flows toward or away from that viewpoint. Think of taking photos of the heart from different positions to see the complete picture!',
          category: 'concept',
          difficulty: 'beginner'
        },
        hint: '📷 Lead = camera viewing electrical activity!'
      },

      {
        id: 'twelve-lead-system',
        title: 'Why 12 Leads?',
        type: 'steps',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'Complete Coverage',
            description: '12 leads give us a complete 360° electrical view of the heart'
          },
          {
            number: 2,
            title: 'Multiple Angles',
            description: 'Like photos of a building - need multiple views to see everything'
          },
          {
            number: 3,
            title: 'Diagnostic Power',
            description: 'Each lead can detect problems the others might miss'
          },
          {
            number: 4,
            title: 'Standard System',
            description: 'Universal 12-lead standard used worldwide for consistency'
          }
        ],
        hint: '🔄 12 leads = complete 360° heart view!'
      },

      {
        id: 'lead-categories',
        title: 'Two Types of Leads',
        type: 'tabs',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        tabs: [
          {
            title: '🦵 Limb Leads (6)',
            content: 'I, II, III, aVR, aVL, aVF\n\n• Attached to arms and legs\n• View heart from FRONT (frontal plane)\n• Show up/down and left/right views'
          },
          {
            title: '📍 Precordial Leads (6)', 
            content: 'V1, V2, V3, V4, V5, V6\n\n• Placed on chest wall\n• View heart from SIDE (horizontal plane)\n• Show front/back and left/right views'
          },
          {
            title: '🎯 Working Together',
            content: 'Limb + Precordial = Complete View\n\n• Frontal plane + Horizontal plane\n• 6 + 6 = 12 total leads\n• No heart area left uncovered!'
          }
        ],
        hint: '🦵 Limb = arms/legs, 📍 Precordial = chest'
      },

      {
        id: 'frontal-horizontal-planes',
        title: 'Heart Viewing Planes',
        type: 'accordion',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        accordionItems: [
          {
            title: '✈️ Frontal Plane (Front View)',
            content: 'Looking at heart from front/back direction\n• Shows superior/inferior (up/down) views\n• Shows left/right views\n• Used by limb leads (I, II, III, aVR, aVL, aVF)'
          },
          {
            title: '🔄 Horizontal Plane (Top View)', 
            content: 'Looking at heart from top/bottom direction\n• Shows anterior/posterior (front/back) views\n• Shows left/right views\n• Used by precordial leads (V1-V6)'
          },
          {
            title: '🎯 Complete Coverage',
            content: 'Two planes = comprehensive heart assessment\n• Every heart wall is visible\n• No electrical activity hidden\n• Complete diagnostic capability'
          }
        ],
        hint: '✈️ Two planes = complete heart coverage!'
      },

      {
        id: 'lead-naming-system',
        title: 'Lead Naming Logic',
        type: 'flashcard',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        flashcard: {
          icon: '🔤',
          question: 'How are ECG leads named?',
          answer: 'Each name tells you exactly what it is! 🎯\n\n• ROMAN NUMERALS (I, II, III): Original limb leads\n• LETTERS (aVR, aVL, aVF): a=augmented, V=voltage, R/L/F=Right/Left/Foot\n• NUMBERS (V1-V6): Precordial leads numbered left to right across chest',
          category: 'terminology',
          difficulty: 'intermediate'
        },
        hint: '🔤 Names tell you location and type!'
      },

      {
        id: 'normal-ecg-example',
        title: 'Normal 12-Lead ECG Example',
        type: 'highlight',
        backgroundColor: '#f0fff4',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lessonimages/normal-sinus-rhythm-overview.png',
        imageAlt: 'Normal 12-lead ECG showing proper lead placement results',
        highlights: [
          '💚 Normal sinus rhythm at 75 BPM',
          '📏 All leads showing proper waveforms',
          '🎯 This is what good lead placement produces',
          '📊 Notice consistent P-QRS-T pattern across leads'
        ],
        hint: '✨ Perfect example of normal 12-lead!'
      },

      {
        id: 'lead-placement-importance',
        title: 'Placement = Diagnosis',
        type: 'highlight',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        highlights: [
          '⚠️ Wrong placement = wrong diagnosis',
          '📏 Even 1-2 cm off changes ECG appearance',
          '🎯 Millimeters matter in clinical practice',
          '💡 Accuracy saves lives!'
        ],
        hint: '📏 Precision = correct diagnosis!'
      },

      // ==================== UNIT 1 QUIZ: ECG SYSTEM FOUNDATION ====================
      {
        id: 'unit1-foundation-quiz',
        title: '🎯 Unit 1 Quiz: ECG System Foundation',
        content: "Test your knowledge of ECG system basics!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: '/lessonimages/normal-sinus-rhythm-overview.png',
        imageAlt: 'ECG system quiz with normal rhythm example',
        hint: '🧠 Test your Unit 1 knowledge!',
        question: "How many leads make up the complete ECG system?",
        options: [
          "6 leads total",
          "10 leads total",
          "12 leads total",
          "15 leads total"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! The standard ECG uses 12 leads total: 6 limb leads (I, II, III, aVR, aVL, aVF) + 6 precordial leads (V1-V6) = 12 complete views of the heart."
      },

      // 🎬 ECGKID MODULE 3: Cardiac Anatomy & Conduction System
      {
        id: 'youtube-ecgkid-module3-essentials',
        title: '🎬 ECGkid Module 3: Cardiac Anatomy & Conduction System',
        content: 'Master cardiac anatomy, coronary circulation, and conduction system before diving into ECG leads! Essential foundation knowledge from ECGkid.',
        type: 'youtube',
        youtubeId: 'FF9Wj_tywhg',
        videoDuration: 340,
        minimumWatchTime: 270,
        requireFullWatch: true,
        backgroundColor: '#f0fdf4',
        textColor: '#166534',
        animation: 'fade',
        hint: '🫀 ECGkid foundation: Anatomy + Coronary + Conduction = ECG mastery!'
      },

      // ================================================
      // 🎯 UNIT 2: LIMB LEADS MASTERY (8 slides)
      // ================================================
      {
        id: 'unit2-intro',
        title: '🎯 Unit 2: Limb Leads Mastery',
        type: 'highlight',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/limb-lead-placement.png',
        imageAlt: 'Limb leads overview - six leads on arms and legs',
        highlights: [
          '🦵 6 limb leads attached to arms and legs',
          '🔺 3 bipolar leads: I, II, III (Einthoven triangle)',
          '📡 3 augmented leads: aVR, aVL, aVF',
          '👁️ All view heart from frontal plane'
        ],
        hint: '🦵 Six limb leads, limitless knowledge!'
      },

      {
        id: 'limb-placement-demo',
        title: 'Limb Lead Placement Demonstration',
        type: 'steps',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lessonimages/lead-placement.gif',
        imageAlt: 'Step-by-step limb lead placement demonstration',
        audioUrl: '/lessonaudio/ecg-leads/limb-lead-placement.mp3',
        steps: [
          {
            number: 1,
            title: '🔴 Right Arm (RA)',
            description: 'Red electrode on right wrist or shoulder'
          },
          {
            number: 2,
            title: '🟡 Left Arm (LA)', 
            description: 'Yellow electrode on left wrist or shoulder'
          },
          {
            number: 3,
            title: '🟢 Left Leg (LL)',
            description: 'Green electrode on left ankle or leg'
          },
          {
            number: 4,
            title: '⚫ Right Leg (RL)',
            description: 'Black electrode on right ankle - ground reference'
          }
        ],
        hint: '🎨 Remember: Red-Yellow-Green traffic light pattern!'
      },

      {
        id: 'limb-leads-overview',
        title: 'The 6 Limb Leads',
        type: 'tabs',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        tabs: [
          {
            title: '🔺 Bipolar (3)',
            content: 'I, II, III\n\n• Between two electrodes\n• Form Einthoven\'s triangle\n• Original ECG leads\n• Strong, clear signals'
          },
          {
            title: '📡 Augmented (3)', 
            content: 'aVR, aVL, aVF\n\n• Unipolar (one positive electrode)\n• Computer amplified\n• Better angle coverage\n• Fill in the gaps'
          },
          {
            title: '🎯 Attachment Points',
            content: 'Four limb electrodes:\n\n• RA: Right arm\n• LA: Left arm\n• LL: Left leg (or foot)\n• RL: Right leg (ground only)'
          }
        ],
        hint: '6️⃣ Six leads, three limbs!'
      },

      {
        id: 'bipolar-leads',
        title: 'Bipolar Leads: I, II, III',
        type: 'accordion',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        accordionItems: [
          {
            title: '➡️ Lead I: Horizontal View',
            content: 'LA(+) to RA(-)\n• Looks horizontally across heart\n• Best view of left vs right walls\n• Strong positive in normal hearts'
          },
          {
            title: '📐 Lead II: Diagonal View', 
            content: 'LL(+) to RA(-)\n• Classic "rhythm strip" lead\n• Diagonal view through heart\n• Usually shows best P waves and QRS'
          },
          {
            title: '📐 Lead III: Other Diagonal',
            content: 'LL(+) to LA(-)\n• Complementary diagonal view\n• Often smaller complexes\n• Helps triangulate electrical activity'
          },
          {
            title: '🔺 Einthoven\'s Triangle',
            content: 'Three leads form triangle around heart\n• Mathematical relationship: I + III = II\n• Complete frontal plane coverage\n• Foundation of ECG theory'
          }
        ],
        hint: '🔺 Three leads form a triangle!'
      },

      {
        id: 'unipolar-limb-leads',
        title: 'Unipolar Limb Leads: aVR, aVL, aVF',
        type: 'steps',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: 'aVR: Right Arm View',
            description: 'Views heart from right shoulder - usually shows negative deflections in normal hearts'
          },
          {
            number: 2,
            title: 'aVL: Left Arm View',
            description: 'Views heart from left shoulder - lateral wall perspective, often positive'
          },
          {
            number: 3,
            title: 'aVF: Foot View',
            description: 'Views heart from below (inferior) - shows bottom wall of heart clearly'
          },
          {
            number: 4,
            title: 'Augmentation Power',
            description: 'Computer amplifies weak unipolar signals by 50% for better visibility'
          }
        ],
        hint: '📡 Augmented = amplified for clarity!'
      },

      {
        id: 'limb-lead-angles',
        title: 'Limb Lead Angles',
        type: 'flashcard',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        flashcard: {
          icon: '🎯',
          question: 'What angles do the limb leads view from?',
          answer: 'Each lead has a specific viewing angle! 📐\n\n• Lead I: 0° (horizontal)\n• Lead II: +60° (down-right)\n• Lead III: +120° (down-left)\n• aVR: -150° (up-right)\n• aVL: -30° (up-left)\n• aVF: +90° (straight down)',
          category: 'anatomy',
          difficulty: 'intermediate'
        },
        hint: '📐 Six angles = complete frontal coverage!'
      },

      {
        id: 'limb-lead-territories',
        title: 'What Heart Areas Do Limb Leads See?',
        type: 'tabs',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        tabs: [
          {
            title: '⬇️ Inferior Wall',
            content: 'Leads II, III, aVF\n\n• Bottom wall of left ventricle\n• Usually supplied by RCA\n• "Inferior MI" pattern here'
          },
          {
            title: '⬅️ Lateral Wall',
            content: 'Leads I, aVL\n\n• Left side wall of left ventricle\n• Usually supplied by LCX\n• "Lateral MI" pattern here'
          },
          {
            title: '➡️ Right-Sided View',
            content: 'Lead aVR\n\n• Unique right-sided perspective\n• Usually negative in normal hearts\n• Can show proximal LAD problems'
          },
          {
            title: '🔄 High Lateral',
            content: 'Lead aVL specifically\n\n• Upper lateral wall view\n• First diagonal LAD territory\n• High lateral MI pattern'
          }
        ],
        hint: '🗺️ Each lead group sees specific heart walls!'
      },

      {
        id: 'limb-lead-placement-tips',
        title: 'Perfect Limb Lead Placement',
        type: 'accordion',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        accordionItems: [
          {
            title: '💪 Arm Placement',
            content: 'Place on shoulders or wrists\n• Avoid muscular areas if possible\n• Shoulders better for tremor/movement\n• Wrists better for comfort'
          },
          {
            title: '🦵 Leg Placement',
            content: 'Place on ankles or lower legs\n• Avoid bony prominences\n• Left leg = actual signal\n• Right leg = ground (anywhere on right leg)'
          },
          {
            title: '🧼 Skin Preparation',
            content: 'Clean skin is critical!\n• Remove oils, lotions, hair\n• Light abrasion if needed\n• Good contact = good signal'
          },
          {
            title: '⚠️ Common Mistakes',
            content: 'Avoid these placement errors:\n• Wrong limb (LA/RA swap)\n• Too much gel (artifact)\n• Loose electrodes (baseline wander)\n• Movement during recording'
          }
        ],
        hint: '📍 Perfect placement = perfect diagnosis!'
      },

      // Add Audio lesson for Unit 2
      {
        id: 'limb-leads-audio-lesson',
        title: '🎵 Limb Leads Audio Review',
        content: 'Listen to this comprehensive review of all 6 limb leads. Hear about their placement, angles, and what heart territories they visualize.',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        audioUrl: '/lessonaudio/ecg-leads/limb-leads-overview.mp3',
        hint: '🔊 Listen and learn about limb leads!'
      },

      // ==================== UNIT 2 QUIZ: LIMB LEADS ====================
      {
        id: 'unit2-limb-leads-quiz',
        title: '🎯 Unit 2 Quiz: Limb Leads',
        content: "Test your knowledge of limb leads!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: '/lessonimages/limb-lead-placement.png',
        imageAlt: 'Limb leads quiz',
        hint: '🧠 Test your Unit 2 knowledge!',
        question: "Which leads are the 6 limb leads in the ECG system?",
        options: [
          "V1, V2, V3, V4, V5, V6",
          "I, II, III, aVR, aVL, aVF",
          "I, II, III, V1, V2, V3",
          "aVR, aVL, aVF, V4, V5, V6"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! The 6 limb leads are I, II, III, aVR, aVL, aVF. They attach to arms and legs and view the heart from the frontal plane."
      },

      {
        id: 'limb-lead-interpretation',
        title: 'Interpreting Limb Lead Rhythms',
        type: 'highlight',
        backgroundColor: '#f0fff4',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lessonimages/normal-sinus-rhythm-overview.png',
        imageAlt: 'Normal limb lead rhythm interpretation example',
        highlights: [
          '👀 Lead II is the GOLD STANDARD for rhythm analysis',
          '📊 Best P wave visibility in most patients', 
          '⚡ Clear QRS complexes for rate calculation',
          '🎯 Use limb leads to identify arrhythmias'
        ],
        hint: '💡 Lead II = rhythm analysis champion!'
      },

      // ================================================
      // 🎯 UNIT 3: PRECORDIAL LEADS MASTERY (8 slides)
      // ================================================
      {
        id: 'unit3-intro',
        title: '🎯 Unit 3: Precordial Leads Mastery',
        type: 'highlight',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/precordial-lead-placement.png',
        imageAlt: 'Precordial leads V1-V6 chest placement overview',
        audioUrl: '/lessonaudio/ecg-leads/precordial-positioning.mp3',
        highlights: [
          '📍 V1-V6: 6 chest leads for horizontal plane views',
          '🎯 Precise anatomical landmarks required',
          '⚡ See electrical activity from front to back',
          '💓 Essential for anterior wall MI detection'
        ],
        hint: '🫀 Chest leads = horizontal heart views!'
      },

      {
        id: 'precordial-overview',
        title: 'Precordial Leads: The Chest Views',
        type: 'flashcard',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        flashcard: {
          icon: '🫀',
          question: 'Why are precordial leads called "chest leads"?',
          answer: 'They sit directly on the chest! 📍\n\n• V1-V6 = 6 electrodes on chest wall\n• "Precordial" = in front of the heart\n• Horizontal plane electrical views\n• Much closer to heart than limb leads\n• See electrical activity layer by layer',
          category: 'anatomy',
          difficulty: 'beginner'
        },
        hint: '📍 Directly over the heart!'
      },

      {
        id: 'v1-v2-septal',
        title: 'V1 & V2: Septal Leads',
        type: 'tabs',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/precordial-lead-placement.png',
        imageAlt: 'V1 and V2 septal lead placement on chest',
        tabs: [
          {
            title: '📍 V1 Placement',
            content: '4th intercostal space, RIGHT sternal border\n\n• Count ribs carefully\n• Right side of sternum\n• Views interventricular septum'
          },
          {
            title: '📍 V2 Placement',
            content: '4th intercostal space, LEFT sternal border\n\n• Mirror position of V1\n• Left side of sternum\n• Complements V1 septal view'
          },
          {
            title: '🏗️ What They See',
            content: 'Interventricular septum (wall between ventricles)\n\n• Septal MI patterns\n• Bundle branch blocks\n• Right ventricular activity'
          },
          {
            title: '🚨 Clinical Importance',
            content: 'Septal MIs often indicate:\n\n• Proximal LAD occlusion\n• Large anterior MI risk\n• Conduction system involvement'
          }
        ],
        hint: '🏗️ The septum watchers!'
      },

      {
        id: 'v3-v4-anterior',
        title: 'V3 & V4: Anterior Leads',
        type: 'accordion',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lessonimages/limb-vs-precordial-leads.png',
        imageAlt: 'V3 and V4 anterior lead placement demonstration',
        accordionItems: [
          {
            title: '📍 V3 Placement',
            content: 'MIDWAY between V2 and V4\n• Don\'t measure intercostal space for V3\n• Simply place halfway between V2 and V4\n• Views anterior wall of left ventricle'
          },
          {
            title: '📍 V4 Placement - CRITICAL!',
            content: '5th intercostal space, LEFT midclavicular line\n• Most important precordial landmark\n• Feel for PMI (point of maximal impulse)\n• Classic anterior wall view'
          },
          {
            title: '🎯 Anterior Wall Territory',
            content: 'V3 & V4 see the front wall of left ventricle:\n• Main LAD territory\n• Classic "anterior MI" location\n• High mortality if complete occlusion'
          },
          {
            title: '⚠️ Placement Precision',
            content: 'V4 placement affects V3, V5, and V6!\n• V4 too high = all leads shifted\n• V4 too low = miss anterior changes\n• Take time to get V4 perfect'
          }
        ],
        hint: '🎯 Get V4 right = everything else follows!'
      },

      {
        id: 'v5-v6-lateral',
        title: 'V5 & V6: Lateral Leads',
        type: 'steps',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        imageUrl: '/lessonimages/limb-vs-precordial-leads.png',
        imageAlt: 'V5 and V6 lateral lead placement on left chest',
        steps: [
          {
            number: 1,
            title: '📍 V5 Location',
            description: 'Same horizontal level as V4, but at LEFT anterior axillary line'
          },
          {
            number: 2,
            title: '📍 V6 Location',
            description: 'Same horizontal level as V4 & V5, but at LEFT midaxillary line'
          },
          {
            number: 3,
            title: '🗺️ Lateral Wall View',
            description: 'V5 & V6 see the lateral (side) wall of left ventricle'
          },
          {
            number: 4,
            title: '💡 Clinical Correlation',
            description: 'Often supplied by circumflex artery - "lateral MI" pattern'
          }
        ],
        hint: '➡️ Moving around the side!'
      },

      {
        id: 'chest-lead-progression',
        title: 'Precordial Lead Progression',
        type: 'flashcard',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        flashcard: {
          icon: '🔄',
          question: 'What is R-wave progression in chest leads?',
          answer: 'R-waves get bigger from V1 → V6! 📈\n\n• V1-V2: Small R, deep S (right side view)\n• V3-V4: R and S about equal (transition)\n• V5-V6: Tall R, small S (left side view)\n\nThis shows electrical "depth" through heart!',
          category: 'physiology',
          difficulty: 'advanced'
        },
        hint: '📈 R-waves grow across the chest!'
      },

      {
        id: 'precordial-placement-tips',
        title: 'Perfect Precordial Placement',
        type: 'accordion',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        accordionItems: [
          {
            title: '🎯 Start with V4',
            content: 'Always find V4 first (5th ICS, MCL)\n• Use it as reference for all others\n• Feel for PMI if possible\n• This is your anchor point'
          },
          {
            title: '📏 Anatomical Landmarks',
            content: 'Key chest landmarks:\n• Sternal border = edge of breastbone\n• Midclavicular line = middle of collarbone\n• Anterior axillary line = front edge of armpit\n• Midaxillary line = middle of armpit'
          },
          {
            title: '👩‍⚕️ Special Considerations',
            content: 'Female patients:\n• Place leads UNDER breast tissue\n• Don\'t place ON breast tissue\n• Maintain proper anatomical position\n• May need gentle breast displacement'
          },
          {
            title: '⚠️ Common Mistakes',
            content: 'Avoid these errors:\n• V1/V2 too high (3rd instead of 4th ICS)\n• V4 too lateral (past MCL)\n• Not maintaining horizontal line for V4-V6\n• Placing leads on breast tissue'
          }
        ],
        hint: '🎯 Precision prevents misdiagnosis!'
      },

      // Add Video lesson for Unit 3
      // ==================== UNIT 3 QUIZ: PRECORDIAL LEADS ====================
      {
        id: 'unit3-precordial-quiz',
        title: '🎯 Unit 3 Quiz: Precordial Leads',
        content: "Test your knowledge of precordial leads!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: '/lessonimages/precordial-lead-placement.png',
        imageAlt: 'Precordial leads knowledge quiz',
        hint: '🧠 Test your Unit 3 knowledge!',
        question: "Where is V4 correctly placed?",
        options: [
          "4th intercostal space, left sternal border",
          "5th intercostal space, left midclavicular line",
          "5th intercostal space, left anterior axillary line",
          "6th intercostal space, left midclavicular line"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! V4 is placed at the 5th intercostal space, left midclavicular line. This is the key reference point for all other precordial leads."
      },

      // ================================================
      // 🎯 UNIT 4: HEART AREA VIEWS (8 slides)
      // ================================================
      {
        id: 'unit4-intro',
        title: '🎯 Unit 4: Heart Area Views',
        type: 'highlight',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/heart-anatomy-overview.png',
        imageAlt: 'Heart wall views - inferior, anterior, lateral, septal territories',highlights: [
          '🗺️ Each lead group views specific heart walls',
          '⬇️ Inferior: II, III, aVF (bottom wall)',
          '➡️ Lateral: I, aVL, V5, V6 (side wall)',
          '⬆️ Anterior: V3, V4 (front wall)',
          '🏗️ Septal: V1, V2 (wall between ventricles)'
        ],
        hint: '🗺️ Map the heart like territories!'
      },

      {
        id: 'heart-wall-anatomy',
        title: 'Heart Wall Territories',
        type: 'tabs',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/coronary-arteries-detailed.png',
        imageAlt: 'Coronary artery territories and corresponding ECG leads',
        tabs: [
          {
            title: '⬇️ Inferior Wall',
            content: 'BOTTOM of left ventricle\n\n• Leads: II, III, aVF\n• Artery: Usually RCA\n• Clinical: "Inferior MI"\n• Often involves right ventricle too'
          },
          {
            title: '⬆️ Anterior Wall',
            content: 'FRONT of left ventricle\n\n• Leads: V3, V4\n• Artery: LAD (left anterior descending)\n• Clinical: "Anterior MI"\n• High mortality if extensive'
          },
          {
            title: '➡️ Lateral Wall',
            content: 'LEFT SIDE of left ventricle\n\n• Leads: I, aVL, V5, V6\n• Artery: Usually circumflex\n• Clinical: "Lateral MI"\n• Can be high or low lateral'
          },
          {
            title: '🏗️ Septal Wall',
            content: 'WALL between ventricles\n\n• Leads: V1, V2\n• Artery: Septal branches of LAD\n• Clinical: "Septal MI"\n• Often part of larger anterior MI'
          }
        ],
        hint: '🗺️ Four main territories!'
      },

      {
        id: 'coronary-lead-correlation',
        title: 'Coronary Artery to Lead Correlation',
        type: 'accordion',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/coronary-arteries-detailed.png',
        imageAlt: 'Detailed coronary arteries with ECG lead correlations',
        accordionItems: [
          {
            title: '💫 LAD Territory',
            content: 'Left Anterior Descending supplies:\n• Anterior wall → V3, V4\n• Septal wall → V1, V2\n• Sometimes lateral → V5, V6\n\n"Widow maker" - most dangerous occlusion!'
          },
          {
            title: '🔄 RCA Territory', 
            content: 'Right Coronary Artery supplies:\n• Inferior wall → II, III, aVF\n• Right ventricle → V3R, V4R\n• Sometimes posterior → V7, V8, V9\n\nMost common dominance pattern (85%)'
          },
          {
            title: '↪️ LCX Territory',
            content: 'Left Circumflex supplies:\n• Lateral wall → I, aVL, V5, V6\n• Sometimes inferior → II, III, aVF\n• High lateral → I, aVL\n\n"Silent" artery - can have subtle changes'
          },
          {
            title: '🎯 Clinical Application',
            content: 'Lead changes help locate blocked artery:\n• Anterior changes → LAD problem\n• Inferior changes → RCA problem\n• Lateral changes → LCX problem\n• Multiple territories → multi-vessel disease'
          }
        ],
        hint: '🛣️ Arteries feed specific territories!'
      },

      {
        id: 'heart-anatomy-3d',
        title: '🫀 3D Heart Anatomy Visualization',
        type: 'video',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        videoUrl: '/lessonvideos/heart-anatomy-3d.mp4',
        content: 'Explore the heart\'s three-dimensional structure and see how each ECG lead views different anatomical regions. This visualization helps you understand the spatial relationship between leads and heart territories.',
        hint: '🌟 See the heart in 3D!'
      },

      {
        id: 'mi-localization',
        title: 'MI Localization by Leads',
        type: 'steps',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lessonimages/inferior-mi.png',
        imageAlt: 'MI localization using ECG lead patterns',
        steps: [
          {
            number: 1,
            title: '🔍 Identify ST Changes',
            description: 'Look for ST elevation or depression in specific lead groups'
          },
          {
            number: 2,
            title: '🗺️ Map to Territory',
            description: 'Match lead changes to heart wall territories'
          },
          {
            number: 3,
            title: '🩸 Predict Artery',
            description: 'Use territory to predict which coronary artery is blocked'
          },
          {
            number: 4,
            title: '⚡ Check Reciprocal',
            description: 'Look for reciprocal changes in opposite leads (confirms diagnosis)'
          }
        ],
        hint: '🎯 Leads tell the story!'
      },

      {
        id: 'reciprocal-changes',
        title: 'Reciprocal Changes',
        type: 'flashcard',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        flashcard: {
          icon: '🔄',
          question: 'What are reciprocal changes in ECG?',
          answer: 'Mirror image changes in opposite leads! 🪞\n\n• If inferior leads show ST elevation\n• Then anterior leads show ST depression\n• Proves the MI is real (not artifact)\n• Helps localize the exact problem area\n\nExample: Inferior MI → ST↑ in II,III,aVF + ST↓ in I,aVL',
          category: 'clinical',
          difficulty: 'advanced'
        },
        hint: '🪞 Mirror images confirm diagnosis!'
      },

      {
        id: 'additional-leads',
        title: 'Additional ECG Leads',
        type: 'tabs',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        tabs: [
          {
            title: '🫁 Right Heart Leads',
            content: 'V3R, V4R, V5R, V6R\n\n• Place on RIGHT chest (mirror V3-V6)\n• View right ventricle\n• Essential for inferior MI with RV involvement\n• V4R most commonly used'
          },
          {
            title: '🔙 Posterior Leads',
            content: 'V7, V8, V9\n\n• Place on left back\n• View posterior wall (back of heart)\n• V7: posterior axillary line\n• V8: scapular line\n• V9: paraspinal'
          },
          {
            title: '🎯 When to Use',
            content: 'Additional leads when:\n\n• Inferior MI suspected of RV involvement\n• Tall R waves in V1-V2 (posterior MI?)\n• Clinical symptoms don\'t match standard 12-lead\n• Need complete heart assessment'
          }
        ],
        hint: '📍 Beyond the standard 12!'
      },

      // Add Audio lesson for Unit 4
      {
        id: 'heart-areas-audio-lesson',
        title: '🎵 Heart Area Views Audio Guide',
        content: 'Listen to a comprehensive review of how ECG leads correlate with heart anatomy, coronary territories, and MI localization patterns.',
        type: 'audio',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',hint: '🔊 Audio tour of heart territories!'
      },

      // ==================== UNIT 4 QUIZ: HEART AREA VIEWS ====================
      {
        id: 'unit4-heart-areas-quiz',
        title: '🎯 Unit 4 Quiz: Heart Area Views',
        content: "Test your knowledge of heart area views!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: '/lessonimages/heart-anatomy-overview.png',
        imageAlt: 'Heart area views assessment',
        hint: '🧠 Test your Unit 4 knowledge!',
        question: "Which leads view the lateral wall of the heart?",
        options: [
          "II, III, aVF",
          "V1, V2, V3",
          "I, aVL, V5, V6",
          "V3, V4"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! Leads I, aVL, V5, and V6 view the lateral wall of the heart. This combines both limb leads and precordial leads for complete lateral coverage."
      },

      // ================================================
      // 🎯 UNIT 5: LEAD INTERPRETATION BASICS (7 slides)
      // ================================================
      {
        id: 'unit5-intro',
        title: '🎯 Unit 5: Lead Interpretation Basics',
        type: 'highlight',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/basic-ecg-waveforms.png',
        imageAlt: 'ECG interpretation basics - waveforms and measurements',
        videoUrl: '/lessonvideos/ecg-waveform-analysis.mp4',
        highlights: [
          '📊 Read systematic approach: Rate, Rhythm, Axis, Intervals',
          '📈 Normal waveforms: P, QRS, T in each lead',
          '⚠️ Artifact recognition: Movement, electrical, technical',
          '🎯 Quality assessment: Lead placement, signal clarity'
        ],
        hint: '🔍 Systematic reading = accurate interpretation!'
      },

      {
        id: 'systematic-approach',
        title: 'Systematic ECG Reading',
        type: 'steps',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/systematic-ecg-reading.png',
        imageAlt: 'Step-by-step ECG interpretation approach',
        steps: [
          {
            number: 1,
            title: '💓 Rate',
            description: 'Count heart rate: 60-100 BPM normal, <60 brady, >100 tachy'
          },
          {
            number: 2,
            title: '🎵 Rhythm',
            description: 'Regular vs irregular, P waves present?, QRS narrow vs wide'
          },
          {
            number: 3,
            title: '📐 Axis',
            description: 'Normal (-30° to +90°), left deviation, right deviation'
          },
          {
            number: 4,
            title: '⏱️ Intervals',
            description: 'PR interval, QRS width, QT interval - all within normal limits?'
          },
          {
            number: 5,
            title: '🔍 Morphology',
            description: 'ST segments, T waves, Q waves - any abnormalities?'
          }
        ],
        hint: '📋 Follow the same steps every time!'
      },

      {
        id: 'normal-waveforms',
        title: 'Normal Waveforms in Each Lead',
        type: 'accordion',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        imageUrl: '/lessonimages/p-qrs-t-wave-sequence.png',
        imageAlt: 'Normal ECG waveforms across all 12 leads',
        accordionItems: [
          {
            title: '👑 Lead II - The Gold Standard',
            content: 'Most commonly used for rhythm strips:\n• Clear P waves\n• Positive QRS complex\n• Normal T waves\n• Best axis for most normal hearts'
          },
          {
            title: '📍 Limb Lead Patterns',
            content: 'Normal limb lead expectations:\n• Lead I: Usually positive\n• Lead II: Usually positive (best)\n• Lead III: Variable\n• aVR: Usually negative (normal!)\n• aVL: Variable\n• aVF: Usually positive'
          },
          {
            title: '🫀 Precordial Progression',
            content: 'V1 → V6 normal progression:\n• V1: rS pattern (small r, large S)\n• V2: RS pattern (R and S equal)\n• V3-V4: Transition zone\n• V5-V6: qRs pattern (large R, small S)'
          },
          {
            title: '⚡ What to Expect',
            content: 'Normal findings:\n• P waves before each QRS\n• QRS <120 ms (3 small boxes)\n• T waves same direction as QRS\n• No ST elevation/depression'
          }
        ],
        hint: '📊 Know normal to spot abnormal!'
      },

      {
        id: 'common-artifacts',
        title: 'ECG Artifacts & Troubleshooting',
        type: 'tabs',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lessonimages/artifact-vs-real-rhythm.png',
        imageAlt: 'Common ECG artifacts and troubleshooting',
        tabs: [
          {
            title: '📳 60Hz Interference',
            content: 'Electrical interference from power lines:\n\n• Thick fuzzy baseline\n• Regular 60 cycles/second\n• Fix: Check connections, move from electrical devices'
          },
          {
            title: '🏃 Movement Artifact',
            content: 'Patient movement or muscle tension:\n\n• Irregular jagged baseline\n• Random spikes and drifts\n• Fix: Patient relaxation, secure leads'
          },
          {
            title: '🔌 Lead Problems',
            content: 'Poor electrode contact:\n\n• Flat line (complete loss)\n• Intermittent signal\n• Fix: Clean skin, fresh electrodes, check connections'
          },
          {
            title: '📱 Electronic Interference',
            content: 'Cell phones, monitors, pumps:\n\n• Regular repetitive spikes\n• Digital noise patterns\n• Fix: Remove electronic devices, check grounding'
          }
        ],
        hint: '🔧 Clean signal = clear diagnosis!'
      },

      {
        id: 'quality-assessment',
        title: 'ECG Quality Assessment',
        type: 'flashcard',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        flashcard: {
          icon: '✅',
          question: 'What makes a good quality ECG?',
          answer: 'Clean, clear, and diagnostic! 🎯\n\n• All 12 leads visible and labeled\n• Minimal artifact or baseline drift\n• Proper calibration (10mm = 1mV)\n• Clear P, QRS, T wave morphology\n• Patient info and timing accurate\n• Lead placement verified',
          category: 'procedure',
          difficulty: 'intermediate'
        },
        hint: '✅ Quality first, interpretation second!'
      },

      {
        id: 'lead-placement-verification',
        title: 'Verifying Correct Lead Placement',
        type: 'accordion',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        accordionItems: [
          {
            title: '🎯 Quick Check Method',
            content: 'Look for expected patterns:\n• aVR should be mostly negative\n• V1 should have small R, large S\n• V6 should have large R, small S\n• No sudden bizarre morphology changes'
          },
          {
            title: '🚨 Red Flags',
            content: 'Signs of incorrect placement:\n• aVR positive (limb lead reversal?)\n• No R wave progression V1-V6\n• Identical waveforms in different leads\n• Impossible electrical axis'
          },
          {
            title: '🔄 Common Errors',
            content: 'Most frequent mistakes:\n• Left/right arm reversal\n• V1/V2 placed too high\n• V4 placed too far left\n• Leads placed on breast tissue'
          },
          {
            title: '✅ Verification Steps',
            content: 'Before interpreting:\n• Check patient position\n• Verify lead labels match placement\n• Confirm normal expected patterns\n• Repeat if suspicious'
          }
        ],
        hint: '🔍 Verify before you interpret!'
      },

      {
        id: 'practical-ecg-tasks',
        title: '📋 Practical ECG Interpretation Tasks',
        type: 'steps',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lesson-media/module-1/lesson-1-1/task-1-primary.png',
        imageAlt: 'Practical ECG interpretation exercise',
        steps: [
          {
            number: 1,
            title: '👀 Task 1: Lead Identification',
            description: 'Identify which leads are shown and verify proper placement patterns'
          },
          {
            number: 2,
            title: '⚡ Task 2: Rhythm Analysis',
            description: 'Determine rate and rhythm using the systematic approach'
          },
          {
            number: 3,
            title: '📊 Task 3: Waveform Assessment',
            description: 'Evaluate P waves, QRS complexes, and T waves for abnormalities'
          },
          {
            number: 4,
            title: '🎯 Task 4: Clinical Correlation',
            description: 'Correlate ECG findings with patient presentation and symptoms'
          }
        ],
        hint: '🎯 Practice makes perfect!'
      },

      // ==================== UNIT 5 QUIZ: LEAD INTERPRETATION ====================
      {
        id: 'unit5-interpretation-quiz',
        title: '🎯 Unit 5 Quiz: Lead Interpretation',
        content: "Test your knowledge of ECG interpretation basics!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: '/lessonimages/ecg-interpretation-overview.png',
        imageAlt: 'ECG interpretation assessment',
        hint: '🧠 Test your Unit 5 knowledge!',
        question: "What is typically the best lead for rhythm analysis?",
        options: [
          "Lead I",
          "Lead II",
          "aVR",
          "V1"
        ],
        correctAnswer: 1,
        explanation: "✅ Correct! Lead II is typically the best for rhythm analysis because it shows clear P waves and has a favorable axis that produces positive deflections in most normal hearts."
      },

      // ================================================
      // 🎯 UNIT 6: CLINICAL APPLICATION (7 slides)
      // ================================================
      {
        id: 'unit6-intro',
        title: '🎯 Unit 6: Clinical Application',
        type: 'highlight',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: '/lessonimages/clinical-applications-overview.png',
        imageAlt: 'Clinical ECG application in healthcare settings',highlights: [
          '🏥 Real-world ECG scenarios and decision making',
          '🚨 Emergency recognition: STEMI, arrhythmias, blocks',
          '📋 Documentation standards and communication',
          '🎯 Integration with clinical symptoms and findings'
        ],
        hint: '🏥 Apply your knowledge in real practice!'
      },

      {
        id: 'stemi-recognition',
        title: 'STEMI Recognition & Action',
        type: 'tabs',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: '/lessonimages/stemi-examples.png',
        imageAlt: 'STEMI ECG examples and recognition patterns',
        tabs: [
          {
            title: '🚨 STEMI Criteria',
            content: 'ST elevation MI criteria:\n\n• ≥1mm ST elevation in 2 contiguous leads\n• OR new LBBB with clinical suspicion\n• Time-sensitive emergency!\n• "Time is muscle"'
          },
          {
            title: '📍 Localization',
            content: 'STEMI by location:\n\n• Anterior: V1-V6 (LAD)\n• Inferior: II, III, aVF (RCA)\n• Lateral: I, aVL, V5-V6 (LCX)\n• Posterior: Tall R in V1-V2'
          },
          {
            title: '⏰ Time Goals',
            content: 'Critical time targets:\n\n• Door-to-balloon: <90 minutes\n• Door-to-needle: <30 minutes\n• First medical contact: <10 minutes\n• Every minute counts!'
          },
          {
            title: '📞 Communication',
            content: 'STEMI alert process:\n\n• Immediate cardiology consult\n• Activate cath lab team\n• Consider transfer if no PCI\n• Clear, urgent communication'
          }
        ],
        hint: '🚨 Time-sensitive emergency!'
      },

      {
        id: 'arrhythmia-basics',
        title: 'Common Arrhythmia Recognition',
        type: 'accordion',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: '/lessonimages/afib-rvr.png',
        imageAlt: 'Common arrhythmia patterns in ECG',
        accordionItems: [
          {
            title: '⚡ Atrial Fibrillation',
            content: 'Most common arrhythmia:\n• Irregularly irregular rhythm\n• No clear P waves\n• Narrow QRS (usually)\n• Variable rate'
          },
          {
            title: '💓 Atrial Flutter',
            content: 'Organized atrial rhythm:\n• "Sawtooth" pattern\n• Regular atrial rate ~300 BPM\n• Variable ventricular response\n• Often 2:1 or 3:1 conduction'
          },
          {
            title: '🏃 SVT (Supraventricular Tachycardia)',
            content: 'Fast narrow complex rhythm:\n• Rate >150 BPM\n• Regular rhythm\n• Narrow QRS\n• May need adenosine to break'
          },
          {
            title: '⚠️ VT (Ventricular Tachycardia)',
            content: 'Fast wide complex rhythm:\n• Rate >150 BPM\n• Wide QRS (>120 ms)\n• Regular or irregular\n• Medical emergency!'
          }
        ],
        hint: '⚡ Rhythm recognition saves lives!'
      },

      {
        id: 'clinical-correlation',
        title: 'Clinical Correlation',
        type: 'flashcard',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'fade',
        flashcard: {
          icon: '🤔',
          question: 'Why must ECG findings match clinical symptoms?',
          answer: 'ECG is just one piece of the puzzle! 🧩\n\n• Chest pain + ST elevation = likely MI\n• Normal ECG + chest pain = still concerning\n• ECG changes + no symptoms = question artifact\n• Always treat the patient, not just the ECG\n\nCombine: History + Exam + ECG + Labs',
          category: 'clinical',
          difficulty: 'advanced'
        },
        hint: '🧩 Complete clinical picture!'
      },

      {
        id: 'documentation-standards',
        title: 'ECG Documentation & Communication',
        type: 'steps',
        backgroundColor: '#ecfdf5',
        textColor: '#065f46',
        animation: 'fade',
        steps: [
          {
            number: 1,
            title: '📋 Systematic Reporting',
            description: 'Rate, rhythm, axis, intervals, morphology, interpretation'
          },
          {
            number: 2,
            title: '🏷️ Clear Labeling',
            description: 'Patient info, date/time, lead placement, calibration verified'
          },
          {
            number: 3,
            title: '🚨 Critical Findings',
            description: 'Immediate notification for STEMI, life-threatening arrhythmias'
          },
          {
            number: 4,
            title: '📞 Professional Communication',
            description: 'SBAR format: Situation, Background, Assessment, Recommendation'
          }
        ],
        hint: '📋 Clear communication saves lives!'
      },

      {
        id: 'pathological-examples',
        title: 'Clinical ECG Examples',
        type: 'tabs',
        backgroundColor: '#fef2f2',
        textColor: '#991b1b',
        animation: 'fade',
        imageUrl: '/lessonimages/normal-sinus-rhythm-overview.png',
        imageAlt: 'Clinical ECG examples for comparison',
        tabs: [
          {
            title: '❤️ Normal Sinus Rhythm',
            content: 'Rate: 60-100 BPM\nRhythm: Regular\nP waves: Present before each QRS\nPR interval: 0.12-0.20 seconds\nQRS: <0.12 seconds'
          },
          {
            title: '🔥 STEMI Pattern',
            content: 'ST elevation >1mm in 2 contiguous leads\nReciprocal ST depression\nQ wave development\nT wave inversion over time'
          },
          {
            title: '⚡ Atrial Fibrillation',
            content: 'Irregularly irregular rhythm\nNo clear P waves\nVariable RR intervals\nNarrow QRS complexes'
          },
          {
            title: '🫀 LBBB Pattern',
            content: 'QRS >120ms\nWide monophasic R in V5, V6\nDeep S waves in V1, V2\nMay mask MI changes'
          }
        ],
        hint: '🔍 Real ECGs in clinical practice!'
      },

      {
        id: 'quality-improvement',
        title: 'Continuous Quality Improvement',
        type: 'accordion',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        accordionItems: [
          {
            title: '📊 Performance Metrics',
            content: 'Track important metrics:\n• Door-to-ECG times\n• STEMI recognition accuracy\n• False positive rates\n• Technical quality scores'
          },
          {
            title: '🎓 Ongoing Education',
            content: 'Stay current with:\n• New guidelines and criteria\n• Technology updates\n• Case study reviews\n• Peer feedback and teaching'
          },
          {
            title: '🔄 Process Improvement',
            content: 'Regular review of:\n• Equipment maintenance\n• Staff competency\n• Workflow efficiency\n• Patient outcomes'
          },
          {
            title: '🎯 Best Practices',
            content: 'Maintain excellence:\n• Standardized procedures\n• Regular competency checks\n• Error analysis and learning\n• Team-based approach'
          }
        ],
        hint: '🎯 Always striving for excellence!'
      },

      // Add final YouTube lesson for clinical application
      {
        id: 'clinical-youtube-lesson',
        title: '📺 Clinical ECG Case Studies',
        content: 'Watch real-world ECG case presentations showing clinical decision-making, STEMI recognition, and multidisciplinary team approaches.',
        type: 'youtube',
        layout: 'centered',
        backgroundColor: '#f3f4f6',
        textColor: '#374151',
        animation: 'fade',
        youtubeId: 'gQkr3GGaXwQ',
        hint: '🎬 Real cases, real decisions!'
      },

      // ==================== UNIT 6 QUIZ: CLINICAL APPLICATION ====================
      {
        id: 'unit6-clinical-quiz',
        title: '🎯 Unit 6 Quiz: Clinical Application',
        content: "Test your knowledge of clinical ECG application!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'slide',
        imageUrl: '/lessonimages/clinical-applications-overview.png',
        imageAlt: 'Clinical application assessment',
        hint: '🧠 Test your Unit 6 knowledge!',
        question: "What is the time goal for door-to-balloon in STEMI patients?",
        options: [
          "30 minutes",
          "60 minutes",
          "90 minutes",
          "120 minutes"
        ],
        correctAnswer: 2,
        explanation: "✅ Correct! The door-to-balloon time goal for STEMI patients is less than 90 minutes. This represents the time from hospital arrival to balloon inflation in the cardiac catheterization lab."
      },

      // ================================================
      // 🎬 COMPREHENSIVE MULTIMEDIA REVIEW
      // ================================================
      {
        id: 'comprehensive-review',
        title: '🎬 Complete ECG Leads Mastery Review',
        type: 'highlight',
        backgroundColor: '#f0fff4',
        textColor: '#065f46',
        animation: 'fade',
        imageUrl: '/lesson-media/module-1/lesson-1-1/task-5-primary.png',
        imageAlt: 'Comprehensive ECG leads mastery review',
        videoUrl: '/lessonvideos/ecg-measurement-techniques.mp4',highlights: [
          '🎯 You\'ve mastered all 6 units of ECG leads!',
          '📍 Lead placement: Limb leads (arms/legs) + Precordial (chest)',
          '🗺️ Heart views: Inferior, Lateral, Anterior, Septal territories',
          '🔍 Interpretation: Systematic approach to quality ECGs',
          '🏥 Clinical application: Real-world decision making',
          '📚 Ready for advanced ECG analysis!'
        ],
        hint: '🏆 You are now an ECG leads expert!'
      },

      {
        id: 'practical-mastery-demo',
        title: '💪 Your ECG Mastery in Action',
        type: 'tabs',
        backgroundColor: '#fdf2f8',
        textColor: '#9d174d',
        animation: 'fade',
        tabs: [
          {
            title: '📍 Perfect Placement',
            content: 'You now know:\n• Precise limb lead positioning\n• Accurate precordial landmarks\n• Common placement errors to avoid\n• Quality verification techniques'
          },
          {
            title: '🗺️ Heart Territories',
            content: 'You can identify:\n• Which leads view each heart wall\n• Coronary artery territories\n• MI localization patterns\n• Lead groupings for diagnosis'
          },
          {
            title: '🔍 Expert Analysis',
            content: 'You can perform:\n• Systematic ECG interpretation\n• Artifact recognition\n• Quality assessment\n• Clinical correlation'
          },
          {
            title: '🏥 Clinical Excellence',
            content: 'You are ready for:\n• Emergency ECG recognition\n• Proper documentation\n• Team communication\n• Advanced ECG learning'
          }
        ],
        hint: '🌟 Your ECG journey continues to grow!'
      }
    ],
    summary: "🎉 Congratulations! You've mastered the complete ECG leads system through 6 progressive units: System Foundation, Limb Leads, Precordial Leads, Heart Area Views, Lead Interpretation, and Clinical Application!",
    keyPoints: [
      "📍 12-lead system: 6 limb leads + 6 precordial leads = complete heart view",
      "🦵 Limb leads (I, II, III, aVR, aVL, aVF): Frontal plane views from arms/legs",
      "📍 Precordial leads (V1-V6): Horizontal plane views across chest",
      "🗺️ Heart areas: Inferior (II,III,aVF), Lateral (I,aVL,V5,V6), Anterior (V3,V4), Septal (V1,V2)",
      "🔍 Lead interpretation: Normal patterns, artifacts, quality assessment",
      "🏥 Clinical application: STEMI localization, arrhythmia detection, documentation"
    ],
    resources: [
      {
        title: "12-Lead ECG Practice Tool",
        url: "/resources/12-lead-practice",
        type: "tool",
        description: "Practice lead placement and interpretation"
      },
      {
        title: "Heart Wall Localization Guide",
        url: "/resources/heart-wall-guide",
        type: "tool", 
        description: "Map ECG leads to heart anatomy"
      },
      {
        title: "Lead Placement Simulator",
        url: "/resources/lead-placement",
        type: "tool",
        description: "Virtual practice for perfect placement"
      }
    ]
  },
  
  // ============= ENHANCED DUOLINGO-STYLE TASKS (Final Assessment Only) =============
  tasks: [
    
    // ==================== FINAL MASTERY ASSESSMENT ====================
    {
      id: 'final-ecg-leads-assessment',
      type: 'final-assessment',
      xp: 50,
      audio: {
        mainNarration: {
          audioUrl: '/lessonaudio/ecg-leads/final-assessment.mp3',
          duration: 10,
          transcript: "Congratulations on completing all 6 units of ECG leads mastery! You've learned the 12-lead system, placement techniques, heart area views, and clinical application. Now prove your mastery with this comprehensive assessment."
        }
      },
      images: {
        mainImage: '/lessonimages/12-lead-ecg-overview.png',
        slideImages: []
      },
      content: {
        prerequisiteMessage: "🏆 Final Assessment: Complete all 6 units to unlock your ECG Leads Mastery Certificate!",
        questions: [
          {
            id: "lead-placement-v4",
            type: "multiple-choice",
            question: "Where is V4 correctly placed?",
            options: [
              "4th intercostal space, right sternal border",
              "4th intercostal space, left sternal border", 
              "5th intercostal space, left midclavicular line",
              "5th intercostal space, left anterior axillary line"
            ],
            correctAnswer: 2,
            explanation: "✅ Correct! V4 is placed at the 5th intercostal space, left midclavicular line - this is the classic anterior lead position.",
            imageUrl: "/lessonimages/precordial-lead-placement.png"
          },
          {
            id: "lateral-wall-leads",
            type: "multiple-choice",
            question: "Which leads view the lateral wall of the heart?",
            options: [
              "II, III, aVF",
              "V1, V2, V3",
              "I, aVL, V5, V6",
              "V3, V4, V5"
            ],
            correctAnswer: 2,
            explanation: "✅ Correct! Leads I, aVL, V5, and V6 view the lateral wall, combining both limb leads and precordial leads for complete lateral coverage.",
            imageUrl: "/lessonimages/heart-anatomy-overview.png"
          },
          {
            id: "rhythm-strip-lead",
            type: "multiple-choice",
            question: "Which lead is best for rhythm analysis?",
            options: [
              "Lead I",
              "Lead II", 
              "aVR",
              "V1"
            ],
            correctAnswer: 1,
            explanation: "✅ Correct! Lead II is typically best for rhythm analysis because it shows clear P waves and has a favorable axis for most normal hearts.",
            imageUrl: "/lessonimages/limb-lead-placement.png"
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
