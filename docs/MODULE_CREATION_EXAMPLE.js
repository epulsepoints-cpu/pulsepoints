// Example: How to add a new learning module to sampleModules.ts

// Add this to the sampleLearningModules array:
{
  title: "Pediatric ECG Interpretation",
  description: "Learn the unique aspects of ECG interpretation in pediatric patients",
  category: 'advanced', // fundamentals | arrhythmias | ischemia | conduction | advanced
  difficulty: 'advanced', // beginner | intermediate | advanced
  estimatedTime: 60, // in minutes
  prerequisites: ["ECG Basics & Anatomy", "Normal Sinus Rhythm"], // Module titles that must be completed first
  lessons: [
    {
      id: 'pediatric-lesson-1',
      moduleId: '', // Will be auto-set
      title: "Age-Related ECG Changes",
      description: "Understanding how ECG patterns change with age in children",
      order: 1,
      estimatedTime: 20,
      content: {
        type: 'mixed', // text | video | interactive | mixed
        introduction: "Pediatric ECGs have unique characteristics that differ significantly from adult patterns...",
        sections: [
          {
            id: 'section-1',
            title: "Normal Pediatric Values",
            content: "Heart rates in children are significantly higher than adults. Newborns: 120-160 bpm, Infants: 100-150 bpm, Toddlers: 90-120 bpm...",
            mediaType: 'text' // text | image | video
          },
          {
            id: 'section-2', 
            title: "QRS Axis Changes",
            content: "The QRS axis in children rotates from right to left as they grow...",
            mediaType: 'image'
          }
        ],
        summary: "You've learned the key differences in pediatric ECG interpretation.",
        keyPoints: [
          "Higher heart rates are normal in children",
          "QRS axis changes with age", 
          "R/S progression differs from adults"
        ],
        resources: [
          {
            title: "Pediatric ECG Reference Values",
            url: "https://example.com/pediatric-ecg-values",
            type: 'external'
          }
        ]
      },
      tasks: [], // Can add quizzes, flashcards, etc.
      completed: false,
      attempts: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'pediatric-lesson-2',
      moduleId: '',
      title: "Common Pediatric Arrhythmias",
      description: "Identifying arrhythmias specific to pediatric patients",
      order: 2,
      estimatedTime: 25,
      content: {
        type: 'video',
        introduction: "Children can develop unique arrhythmias that are rare in adults...",
        sections: [
          {
            id: 'section-1',
            title: "Supraventricular Tachycardia in Infants",
            content: "SVT is the most common arrhythmia requiring treatment in children...",
            mediaType: 'video'
          }
        ],
        summary: "You can now identify common pediatric arrhythmias.",
        keyPoints: [
          "SVT is most common serious arrhythmia in children",
          "Rates can exceed 220 bpm in infants",
          "Treatment differs from adults"
        ],
        resources: []
      },
      tasks: [],
      completed: false,
      attempts: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ],
  unlocked: false, // Will be unlocked when prerequisites are met
  order: 7, // Display order
  tags: ['pediatric', 'children', 'advanced', 'age-specific'],
  featured: false
}
