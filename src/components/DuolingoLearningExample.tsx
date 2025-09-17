import React from 'react';
import DuolingoHub from '@/components/DuolingoHub';
import { sampleLearningModules } from '@/data/sampleModules';

// Example integration of the new Duolingo-style learning system
const DuolingoLearningExample: React.FC = () => {
  
  // Sample user data
  const sampleUser = {
    id: 'user-123',
    name: 'Alex',
    level: 5,
    xp: 1250,
    xpToNextLevel: 1500,
    currentStreak: 12,
    longestStreak: 28,
    hearts: 5,
    gems: 85,
    totalLessons: 45,
    lessonsThisWeek: 4,
    perfectLessons: 12,
    fastCompletions: 3
  };

  // Convert our streamlined modules to the format expected by DuolingoHub
  const convertToCompatibleModules = () => {
    return sampleLearningModules.map((module, index) => ({
      ...module,
      id: `module-${index + 1}`,
      unlocked: index === 0, // First module unlocked by default
      lessons: module.lessons.map((lesson, lessonIndex) => ({
        ...lesson,
        content: {
          type: 'mixed' as const,
          introduction: lesson.description,
          sections: [
            {
              title: lesson.title,
              content: lesson.description,
              mediaUrl: `/images/ecg-lesson-${lesson.order}.jpg`
            }
          ],
          summary: `Great! You've completed ${lesson.title}.`,
          keyPoints: [lesson.title],
          resources: []
        },
        tasks: [],
        completed: false,
        attempts: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }))
    }));
  };

  const compatibleModules = convertToCompatibleModules();

  // Sample progress data using new module IDs
  const sampleProgress = {
    'module-1': {
      status: 'in-progress',
      completedLessons: 1,
      totalLessons: 10,
      lastAccessed: new Date().toISOString()
    },
    'module-2': {
      status: 'locked',
      completedLessons: 0,
      totalLessons: 10,
      lastAccessed: null
    },
    'module-3': {
      status: 'locked',
      completedLessons: 0,
      totalLessons: 8,
      lastAccessed: null
    }
  };

  const handleLessonComplete = (score: number, timeSpent: number) => {
    console.log('Lesson completed!', { score, timeSpent });
    // Here you would update the user's progress, XP, etc.
    // For example:
    // - Add XP based on score
    // - Update lesson completion status
    // - Check for achievements
    // - Update streak if it's a new day
  };

  const handleHeartLost = () => {
    console.log('Heart lost!');
    // Here you would:
    // - Decrease user's hearts
    // - Show heart refill options if hearts are low
    // - Potentially end lesson if no hearts remain
  };

  return (
    <div className="min-h-screen">
      <DuolingoHub
        user={sampleUser}
        modules={compatibleModules}
        moduleProgress={sampleProgress}
        onLessonComplete={handleLessonComplete}
        onHeartLost={handleHeartLost}
      />
    </div>
  );
};

export default DuolingoLearningExample;
