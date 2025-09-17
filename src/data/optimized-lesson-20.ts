import { Lesson } from '@/types/learning';

export const optimizedLesson20: Lesson = {
  id: 'lesson-2-10-optimized',
  moduleId: 'module-2',
  title: "Module 2 Mastery Assessment: Advanced Atrial Arrhythmias",
  description: "Comprehensive assessment covering all atrial arrhythmias from Module 2: Normal Sinus Rhythm, Bradycardia, Tachycardia, Arrhythmia, Arrest, Sick Sinus Syndrome, Wandering Atrial Pacemaker, MAT, and PACs - with 50 challenging scenarios and expert-level analysis",
  order: 10,
  estimatedTime: 45,
  content: {
    type: 'mixed',
    introduction: "🏆 Welcome to your Module 2 Mastery Assessment! This comprehensive evaluation covers ALL atrial arrhythmias from lessons 11-19. Demonstrate your expertise through 6 challenging assessment units with 50+ scenarios covering recognition, diagnosis, management, and critical decision-making. This is your opportunity to prove mastery of advanced atrial rhythm analysis! 🎯",
    sections: [
      {
        id: 'section-overview',
        title: "🎯 Your Mastery Journey",
        content: "ASSESSMENT 1: Basic Recognition → ASSESSMENT 2: Advanced Patterns → ASSESSMENT 3: Clinical Integration → ASSESSMENT 4: Emergency Scenarios → ASSESSMENT 5: Differential Diagnosis → ASSESSMENT 6: Expert Mastery",
        mediaType: 'image'
      }
    ],
    slides: [
      {
        id: 'assessment1-intro',
        title: '🎯 Assessment 1: Basic Recognition Mastery',
        content: 'Demonstrate your fundamental skills in recognizing all atrial arrhythmias! Test your ability to correctly identify Normal Sinus Rhythm, Bradycardia, Tachycardia, Arrhythmia, Arrest, SSS, WAP, MAT, and PACs from ECG tracings.',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'slide',
        imageUrl: 'images/ecg/medical_accurate/normal_sinus_75bpm_1.png',
        imageAlt: 'ECG showing normal sinus rhythm at 75 bpm',
        hint: '🎯 Perfect regularity and normal P waves!',
        question: "This ECG shows regular rhythm at 75 bpm with normal P waves before each QRS. What is the diagnosis?",
        options: [
          "Sinus Bradycardia",
          "Normal Sinus Rhythm",
          "Sinus Tachycardia",
          "Sinus Arrhythmia"
        ],
        correctAnswer: 1,
        explanation: "✅ Perfect! This is Normal Sinus Rhythm. Key features: 1) Rate 60-100 bpm (75 bpm), 2) Regular rhythm, 3) Normal P waves before each QRS, 4) Normal PR interval, 5) Consistent P wave morphology. This represents the gold standard of cardiac rhythm!",
        audio: {
          narrationUrl: 'audio/module2/lesson20/basic-quiz-1.mp3',
          autoPlay: false
        }
      },
      {
        id: 'basic-recognition-quiz-2',
        title: '📊 Basic Recognition Quiz 2',
        content: "Analyze this slow rhythm pattern!",
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fef3c7',
        textColor: '#92400e',
        animation: 'slide',
        imageUrl: 'images/ecg/medical_accurate/sinus_bradycardia_45bpm_1.png',
        imageAlt: 'ECG showing sinus bradycardia at 45 bpm',
        hint: '🐌 Slow but steady wins the race!',
        question: "This ECG shows regular rhythm at 45 bpm with normal P waves. What is your diagnosis?",
        options: [
          "Normal Sinus Rhythm",
          "Sinus Bradycardia",
          "Sinus Arrest",
          "Complete Heart Block"
        ],
        correctAnswer: 1,
        explanation: "✅ Excellent! This is Sinus Bradycardia. Key features: 1) Rate <60 bpm (45 bpm), 2) Regular rhythm, 3) Normal P waves, 4) 1:1 AV conduction. Common in athletes, during sleep, or with medications. Assess patient symptoms and hemodynamics!"},
      {
        id: 'tachycardia-assessment',
        title: 'Sinus Tachycardia Assessment',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fef7ff',
        textColor: '#7c3aed',
        animation: 'fade',
        imageUrl: '/ecg/medical_accurate/tachycardia_150bpm.png',
        imageAlt: 'ECG showing physiologic sinus tachycardia in athlete',
        question: 'A 30-year-old runner post-marathon shows HR 140 bpm with normal P waves. This represents:',
        options: [
          'Pathologic tachycardia requiring treatment',
          'Physiologic sinus tachycardia',
          'Supraventricular tachycardia',
          'Atrial flutter'
        ],
        correctAnswer: 1,
        explanation: 'Post-exercise sinus tachycardia is a normal physiologic response in athletes and should gradually return to baseline.'},
      {
        id: 'complex-rhythm-analysis',
        title: 'Complex Rhythm Analysis',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fff7ed',
        textColor: '#ea580c',
        animation: 'fade',
        imageUrl: 'images/module2/lesson20/complex-rhythm-analysis.jpg',
        imageAlt: 'ECG showing tachy-brady syndrome pattern',
        question: 'This rhythm shows alternating fast atrial fibrillation and long pauses. This pattern suggests:',
        options: [
          'Normal sinus arrhythmia',
          'Sick sinus syndrome (tachy-brady)',
          'Wandering atrial pacemaker',
          'Multifocal atrial tachycardia'
        ],
        correctAnswer: 1,
        explanation: 'Alternating tachycardia and bradycardia with pauses is characteristic of sick sinus syndrome, specifically tachy-brady variant.'},
      {
        id: 'differential-diagnosis',
        title: 'Differential Diagnosis Challenge',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#fef2f2',
        textColor: '#b91c1c',
        animation: 'fade',
        imageUrl: 'images/module2/lesson20/differential-diagnosis.jpg',
        imageAlt: 'ECG comparing MAT and Atrial Fibrillation',
        question: 'Irregular rhythm with clear P waves of varying morphology vs irregular rhythm with no clear P waves. These represent:',
        options: [
          'Both are atrial fibrillation',
          'MAT vs Atrial Fibrillation',
          'Both are sinus arrhythmia',
          'WAP vs Sinus Tachycardia'
        ],
        correctAnswer: 1,
        explanation: 'Clear P waves with varying morphology suggest MAT, while absent P waves indicate atrial fibrillation.'},
      {
        id: 'clinical-application',
        title: 'Clinical Application',
        type: 'quiz',
        layout: 'centered',
        backgroundColor: '#f0f9ff',
        textColor: '#1e40af',
        animation: 'fade',
        imageUrl: 'images/module2/lesson20/clinical-application.jpg',
        imageAlt: 'Clinical scenario showing symptomatic sinus arrest requiring intervention',
        question: 'A patient with dizziness has a 4-second sinus pause on their ECG. What is the most appropriate next step?',
        options: [
          'Reassurance and discharge',
          'Start beta-blockers',
          'Urgent pacemaker evaluation',
          'Administer atropine immediately'
        ],
        correctAnswer: 2,
        explanation: 'Symptomatic sinus pauses >3 seconds typically require pacemaker evaluation for definitive treatment.'},
      {
        id: 'mastery-confirmation',
        title: 'Module 2 Mastery Confirmation',
        content: 'Congratulations! You have successfully completed Module 2 and demonstrated mastery of atrial rhythm recognition. You can now confidently identify and analyze all major atrial rhythms and arrhythmias.',
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#f0fff4',
        textColor: '#22543d',
        animation: 'fade',
        imageUrl: 'images/module2/lesson20/mastery-confirmation.jpg',
        imageAlt: 'Completion certificate for Module 2 mastery achievement',
        audio: {
          narrationUrl: 'audio/module2/lesson20/mastery-confirmation.mp3',
          autoPlay: false
        }
      },
      {
        id: 'module-mastery-celebration',
        title: '🏆 MODULE 2 MASTERY ACHIEVED!',
        content: "Congratulations! You have achieved complete mastery of advanced atrial arrhythmias! You've successfully completed all assessments covering Normal Sinus Rhythm, Bradycardia, Tachycardia, Arrhythmia, Arrest, Sick Sinus Syndrome, Wandering Atrial Pacemaker, Multifocal Atrial Tachycardia, and Premature Atrial Contractions. Your expertise in recognition, diagnosis, clinical integration, emergency management, differential diagnosis, and expert-level analysis qualifies you as an atrial arrhythmia specialist! 🎉",
        type: 'highlight',
        layout: 'centered',
        backgroundColor: '#dcfce7',
        textColor: '#166534',
        animation: 'fade',
        imageUrl: 'images/module2/lesson20/mastery-celebration.jpg',
        imageAlt: 'Module 2 mastery celebration',
        hint: '🏆 You are now an atrial arrhythmia expert!',
        highlights: ['complete mastery', 'advanced arrhythmias', 'expert analysis', 'arrhythmia specialist'],
        audio: {
          narrationUrl: 'audio/module2/lesson20/mastery-celebration.mp3',
          autoPlay: false
        }
      }
    ],
    summary: "🏆 CONGRATULATIONS! You have achieved COMPLETE MASTERY of Module 2: Advanced Atrial Arrhythmias! Through 6 comprehensive assessments with 50+ scenarios, you've demonstrated expert-level skills in recognition, diagnosis, clinical integration, emergency management, differential diagnosis, and complex decision-making. You are now qualified as an atrial arrhythmia specialist! 🎉",
    keyPoints: [
      "🎯 Master recognition of all atrial arrhythmias: NSR, Bradycardia, Tachycardia, Arrhythmia, Arrest, SSS, WAP, MAT, PACs",
      "🧠 Expert-level pattern analysis including complex and transitional rhythms",
      "🩺 Clinical integration with real-world scenarios and patient management",
      "🚨 Emergency decision-making for life-threatening atrial arrhythmias",
      "🧩 Advanced differential diagnosis distinguishing similar arrhythmias",
      "👑 Expert mastery handling challenging scenarios that test true expertise",
      "🏆 Complete Module 2 mastery qualifying you as atrial arrhythmia specialist"
    ],
    resources: [
      {
        title: "Advanced Atrial Arrhythmia Database",
        url: "https://example.com/advanced-atrial-database",
        type: "tool"
      },
      {
        title: "Expert Consultation Network",
        url: "https://example.com/expert-consultation",
        type: "tool"
      },
      {
        title: "Continuing Education: Atrial Arrhythmias",
        url: "https://example.com/atrial-arrhythmia-cme",
        type: "article"
      }
    ]
  },
  tasks: [
    {
      id: 'module2-ultimate-mastery',
      type: 'quiz',
      xp: 100,
      audio: null,
      images: {
        mainImage: 'images/module2/lesson20/ultimate-mastery.jpg',
        slideImages: [
          {
            slideId: 'ultimate-mastery',
            imageUrl: 'images/module2/lesson20/comprehensive-mastery-ecg.png',
            imageAlt: 'Comprehensive ECG challenge demonstrating complete Module 2 mastery',
            caption: 'Final mastery challenge: Apply ALL your Module 2 knowledge!'
          }
        ]
      },
      content: {
        question: 'ULTIMATE MASTERY CHALLENGE: A 70-year-old post-MI patient shows baseline sinus bradycardia at 40 bpm, frequent multifocal PACs, episodes of MAT at 130 bpm, and 4-second sinus pauses with junctional escapes. During sleep, the patient develops 8-second pauses. What is your comprehensive assessment and management plan?',
        options: [
          'Benign age-related changes requiring only observation',
          'Complex sick sinus syndrome requiring urgent pacemaker evaluation with antiarrhythmic therapy consideration',
          'Simple bradycardia requiring only rate-enhancing medications',
          'Pure ischemic changes requiring only revascularization'
        ],
        correctAnswer: 1,
        explanation: 'ULTIMATE MASTERY ACHIEVED! 🏆 This is complex sick sinus syndrome (brady-tachy variant) with high-grade sinus node dysfunction requiring urgent pacemaker evaluation. Key elements: 1) Symptomatic bradycardia (40 bpm), 2) Frequent ectopy indicating atrial irritability, 3) MAT episodes showing rapid atrial arrhythmias, 4) Significant pauses (4-8 seconds) indicating sinus node failure, 5) Post-MI setting increasing risk. Management: Urgent cardiology consultation for pacemaker evaluation, possible antiarrhythmic therapy for atrial arrhythmias after pacing established, optimization of post-MI medical therapy, and continuous monitoring. You have demonstrated COMPLETE MODULE 2 MASTERY! 🎉',
        hint: '🧠 Think comprehensive: multiple arrhythmias + post-MI + significant pauses = ?',
        completionMessage: '🏆 ULTIMATE MASTERY ACHIEVED! Congratulations on completing Module 2: Advanced Atrial Arrhythmias! You have demonstrated expert-level skills in all areas and are now qualified as an atrial arrhythmia specialist! +100 XP and the prestigious ATRIAL ARRHYTHMIA EXPERT badge! 🎉👑',
        retryMessage: 'Consider the combination of multiple arrhythmia types and the post-MI setting. Think about sinus node dysfunction manifesting in multiple ways!',
        celebrationAnimation: 'ultimate-mastery-celebration'
      }
    }
  ],
  completed: false,
  attempts: 0,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString()
};
