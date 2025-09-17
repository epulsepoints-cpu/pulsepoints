import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  setDoc, 
  updateDoc, 
  query, 
  where, 
  orderBy, 
  limit,
  deleteDoc,
  writeBatch,
  Timestamp
} from 'firebase/firestore';
import { db } from '@/firebase';
import { 
  LearningModule, 
  Lesson, 
  LearningTask, 
  ModuleProgress, 
  UserLearningProfile,
  LearningAnalytics,
  ModuleCategory,
  ModuleDifficulty
} from '@/types/learning';
import { sampleLearningModules } from '@/data/sampleModules';
import { cache } from '@/utils/cache';
import { EnhancedLessonService } from './enhancedLessonService';

const COLLECTIONS = {
  MODULES: 'learningModules',
  LESSONS: 'lessons',
  TASKS: 'learningTasks',
  PROGRESS: 'learningProgress',
  PROFILES: 'learningProfiles',
  ANALYTICS: 'learningAnalytics'
} as const;

// Sample Data Import
export async function importSampleModules(): Promise<void> {
  try {
    console.log('🔄 Importing sample learning modules...');
    console.log('Sample modules count:', sampleLearningModules.length);
    console.log('First module title:', sampleLearningModules[0]?.title);
    
    const batch = writeBatch(db);
    const now = new Date().toISOString();
    
    for (let i = 0; i < sampleLearningModules.length; i++) {
      const moduleData = sampleLearningModules[i];
      console.log(`Processing module ${i + 1}: ${moduleData.title}`);
      
      const moduleRef = doc(collection(db, COLLECTIONS.MODULES));
      const module: LearningModule = {
        ...moduleData,
        id: moduleRef.id,
        featured: false,
        unlocked: i === 0, // First module unlocked by default
        order: i + 1,
        tags: ['ecg', 'cardiology', moduleData.category],
        lessons: moduleData.lessons.map(lesson => ({
          ...lesson,
          content: {
            type: 'mixed' as const,
            introduction: '',
            sections: [],
            summary: '',
            keyPoints: [],
            resources: []
          },
          tasks: [],
          completed: false,
          attempts: 0,
          createdAt: now,
          updatedAt: now
        })),
        createdAt: now,
        updatedAt: now
      };
      
      // Update lesson module IDs
      module.lessons.forEach(lesson => {
        lesson.moduleId = module.id;
      });
      
      console.log(`Module ${module.title} prepared with ID: ${module.id}`);
      batch.set(moduleRef, module);
    }
    
    console.log('📤 Committing batch write to Firestore...');
    await batch.commit();
    console.log(`✅ Successfully imported ${sampleLearningModules.length} sample modules`);
  } catch (error) {
    console.error('❌ Error importing sample modules:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    throw error;
  }
}

export async function checkIfSampleDataExists(): Promise<boolean> {
  try {
    console.log('🔍 Checking if sample data exists...');
    const modulesRef = collection(db, COLLECTIONS.MODULES);
    const snapshot = await getDocs(query(modulesRef, limit(1)));
    const exists = !snapshot.empty;
    console.log('Sample data exists:', exists);
    return exists;
  } catch (error) {
    console.error('❌ Error checking sample data:', error);
    return false;
  }
}

// Module Management
export async function createModule(moduleData: Omit<LearningModule, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
  try {
    const moduleRef = doc(collection(db, COLLECTIONS.MODULES));
    const now = new Date().toISOString();
    
    const module: LearningModule = {
      ...moduleData,
      id: moduleRef.id,
      createdAt: now,
      updatedAt: now
    };
    
    await setDoc(moduleRef, module);
    console.log('✅ Module created:', module.id);
    return module.id;
  } catch (error) {
    console.error('❌ Error creating module:', error);
    throw error;
  }
}

export async function getAllModules(): Promise<LearningModule[]> {
  try {
    // First try to get modules from Firestore
    const modulesRef = collection(db, COLLECTIONS.MODULES);
    const q = query(modulesRef, orderBy('order'), orderBy('createdAt'));
    const snapshot = await getDocs(q);
    
    const firestoreModules = snapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    })) as LearningModule[];
    
    // If we have modules in Firestore, return them
    if (firestoreModules.length > 0) {
      console.log(`✅ Fetched ${firestoreModules.length} modules from Firestore`);
      return firestoreModules;
    }
    
    // If no modules in Firestore, return sample modules with generated IDs
    console.log('📚 No modules in Firestore, returning sample modules');
    const now = new Date().toISOString();
    const modulesWithIds = sampleLearningModules.map((moduleData, index) => {
      const moduleId = `sample-module-${index + 1}`;
      const module: LearningModule = {
        ...moduleData,
        id: moduleId,
        featured: false,
        unlocked: index === 0, // First module unlocked by default
        order: index + 1,
        tags: ['ecg', 'cardiology', moduleData.category],
        lessons: moduleData.lessons.map(lesson => ({
          ...lesson,
          content: {
            type: 'mixed' as const,
            introduction: '',
            sections: [],
            summary: '',
            keyPoints: [],
            resources: []
          },
          tasks: [],
          completed: false,
          attempts: 0,
          createdAt: now,
          updatedAt: now
        })),
        createdAt: now,
        updatedAt: now
      };
      
      // Update lesson module IDs
      module.lessons.forEach(lesson => {
        lesson.moduleId = moduleId;
      });
      
      return module;
    });
    
    console.log(`✅ Generated ${modulesWithIds.length} sample modules`);
    return modulesWithIds;
    
  } catch (error) {
    console.error('❌ Error fetching modules, falling back to sample data:', error);
    
    // Fallback to sample modules if Firestore fails
    const now = new Date().toISOString();
    const modulesWithIds = sampleLearningModules.map((moduleData, index) => {
      const moduleId = `sample-module-${index + 1}`;
      const module: LearningModule = {
        ...moduleData,
        id: moduleId,
        featured: false,
        unlocked: index === 0, // First module unlocked by default
        order: index + 1,
        tags: ['ecg', 'cardiology', moduleData.category],
        lessons: moduleData.lessons.map(lesson => ({
          ...lesson,
          content: {
            type: 'mixed' as const,
            introduction: '',
            sections: [],
            summary: '',
            keyPoints: [],
            resources: []
          },
          tasks: [],
          completed: false,
          attempts: 0,
          createdAt: now,
          updatedAt: now
        })),
        createdAt: now,
        updatedAt: now
      };
      
      // Update lesson module IDs
      module.lessons.forEach(lesson => {
        lesson.moduleId = moduleId;
      });
      
      return module;
    });
    
    console.log(`✅ Using ${modulesWithIds.length} sample modules as fallback`);
    return modulesWithIds;
  }
}

export async function getModulesByCategory(category: ModuleCategory): Promise<LearningModule[]> {
  try {
    const modulesRef = collection(db, COLLECTIONS.MODULES);
    const q = query(
      modulesRef, 
      where('category', '==', category),
      orderBy('order'),
      orderBy('createdAt')
    );
    const snapshot = await getDocs(q);
    
    const modules = snapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    })) as LearningModule[];
    
    console.log(`✅ Fetched ${modules.length} modules for category: ${category}`);
    return modules;
  } catch (error) {
    console.error('❌ Error fetching modules by category:', error);
    throw error;
  }
}

/**
 * Fetches a module by ID, using local cache for fast loads/offline support.
 * @param moduleId The module ID
 * @param forceRefresh If true, bypasses cache and fetches fresh data
 */
export async function getModuleById(moduleId: string, forceRefresh = false): Promise<LearningModule | null> {
  try {
    // 1. Try cache first (unless forceRefresh)
    if (!forceRefresh) {
      const cached = cache.get<LearningModule>(moduleId);
      if (cached) {
        console.log(`⚡ Loaded module from cache: ${cached.title}`);
        return cached;
      }
    }

    // 2. Try to get from Firestore
    const moduleRef = doc(db, COLLECTIONS.MODULES, moduleId);
    const snapshot = await getDoc(moduleRef);
    if (snapshot.exists()) {
      const module = {
        ...snapshot.data(),
        id: snapshot.id
      } as LearningModule;
      cache.set(moduleId, module);
      console.log(`✅ Fetched module from Firestore: ${module.title}`);
      return module;
    }

    // 3. If not in Firestore, check if it's a sample module
    if (moduleId.startsWith('sample-module-')) {
      const moduleIndex = parseInt(moduleId.replace('sample-module-', '')) - 1;
      if (moduleIndex >= 0 && moduleIndex < sampleLearningModules.length) {
        const moduleData = sampleLearningModules[moduleIndex];
        const now = new Date().toISOString();
        const module: LearningModule = {
          ...moduleData,
          id: moduleId,
          featured: false,
          unlocked: moduleIndex === 0, // First module unlocked by default
          order: moduleIndex + 1,
          tags: ['ecg', 'cardiology', moduleData.category],
          lessons: moduleData.lessons.map(lesson => ({
            ...lesson,
            content: {
              type: 'mixed' as const,
              introduction: '',
              sections: [],
              summary: '',
              keyPoints: [],
              resources: []
            },
            tasks: [],
            completed: false,
            attempts: 0,
            createdAt: now,
            updatedAt: now
          })),
          createdAt: now,
          updatedAt: now
        };
        module.lessons.forEach(lesson => {
          lesson.moduleId = moduleId;
        });
        cache.set(moduleId, module);
        console.log(`✅ Retrieved sample module: ${module.title}`);
        return module;
      }
    }

    console.warn(`⚠️ Module not found: ${moduleId}`);
    return null;
  } catch (error) {
    console.error('❌ Error fetching module, checking sample modules:', error);
    // Fallback to sample modules
    if (moduleId.startsWith('sample-module-')) {
      const moduleIndex = parseInt(moduleId.replace('sample-module-', '')) - 1;
      if (moduleIndex >= 0 && moduleIndex < sampleLearningModules.length) {
        const moduleData = sampleLearningModules[moduleIndex];
        const now = new Date().toISOString();
        const module: LearningModule = {
          ...moduleData,
          id: moduleId,
          featured: false,
          unlocked: moduleIndex === 0, // First module unlocked by default
          order: moduleIndex + 1,
          tags: ['ecg', 'cardiology', moduleData.category],
          lessons: moduleData.lessons.map(lesson => ({
            ...lesson,
            content: {
              type: 'mixed' as const,
              introduction: '',
              sections: [],
              summary: '',
              keyPoints: [],
              resources: []
            },
            tasks: [],
            completed: false,
            attempts: 0,
            createdAt: now,
            updatedAt: now
          })),
          createdAt: now,
          updatedAt: now
        };
        module.lessons.forEach(lesson => {
          lesson.moduleId = moduleId;
        });
        cache.set(moduleId, module);
        console.log(`✅ Fallback to sample module: ${module.title}`);
        return module;
      }
    }
    return null;
  }
}

export async function updateModule(moduleId: string, updates: Partial<LearningModule>): Promise<void> {
  try {
    const moduleRef = doc(db, COLLECTIONS.MODULES, moduleId);
    await updateDoc(moduleRef, {
      ...updates,
      updatedAt: new Date().toISOString()
    });
    
    console.log('✅ Module updated:', moduleId);
  } catch (error) {
    console.error('❌ Error updating module:', error);
    throw error;
  }
}

// Lesson Management
export async function createLesson(lessonData: Omit<Lesson, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
  try {
    const lessonRef = doc(collection(db, COLLECTIONS.LESSONS));
    const now = new Date().toISOString();
    
    const lesson: Lesson = {
      ...lessonData,
      id: lessonRef.id,
      createdAt: now,
      updatedAt: now
    };
    
    await setDoc(lessonRef, lesson);
    console.log('✅ Lesson created:', lesson.id);
    return lesson.id;
  } catch (error) {
    console.error('❌ Error creating lesson:', error);
    throw error;
  }
}

export async function getLessonsByModule(moduleId: string): Promise<Lesson[]> {
  try {
    console.log(`🔍 Loading lessons for module: ${moduleId}`);
    
    // Use EnhancedLessonService for Firebase-first approach with local fallback
    const lessons = await EnhancedLessonService.getLessonsByModule(moduleId);
    
    if (lessons.length > 0) {
      console.log(`✅ Loaded ${lessons.length} lessons for module: ${moduleId}`);
      return lessons;
    }
    
    // If EnhancedLessonService returns no lessons, check if it's a sample module
    if (moduleId.startsWith('sample-module-')) {
      const moduleIndex = parseInt(moduleId.replace('sample-module-', '')) - 1;
      if (moduleIndex >= 0 && moduleIndex < sampleLearningModules.length) {
        const moduleData = sampleLearningModules[moduleIndex];
        const now = new Date().toISOString();
        const fallbackLessons = moduleData.lessons.map(lesson => ({
          ...lesson,
          moduleId: moduleId,
          content: {
            type: 'mixed' as const,
            introduction: '',
            sections: [],
            summary: '',
            keyPoints: [],
            resources: []
          },
          tasks: [],
          completed: false,
          attempts: 0,
          createdAt: now,
          updatedAt: now
        }));
        
        console.log(`✅ Fallback: Retrieved ${fallbackLessons.length} sample lessons for module: ${moduleId}`);
        return fallbackLessons;
      }
    }
    
    console.log(`⚠️ No lessons found for module: ${moduleId}`);
    return [];
  } catch (error) {
    console.error('❌ Error in getLessonsByModule, using emergency fallback:', error);
    
    // Emergency fallback to sample modules
    if (moduleId.startsWith('sample-module-')) {
      const moduleIndex = parseInt(moduleId.replace('sample-module-', '')) - 1;
      if (moduleIndex >= 0 && moduleIndex < sampleLearningModules.length) {
        const moduleData = sampleLearningModules[moduleIndex];
        const now = new Date().toISOString();
        const emergencyLessons = moduleData.lessons.map(lesson => ({
          ...lesson,
          moduleId: moduleId,
          content: {
            type: 'mixed' as const,
            introduction: '',
            sections: [],
            summary: '',
            keyPoints: [],
            resources: []
          },
          tasks: [],
          completed: false,
          attempts: 0,
          createdAt: now,
          updatedAt: now
        }));
        
        console.log(`🚨 Emergency fallback: ${emergencyLessons.length} sample lessons for module: ${moduleId}`);
        return emergencyLessons;
      }
    }
    
    return [];
  }
}

export async function getLessonById(lessonId: string): Promise<Lesson | null> {
  try {
    console.log(`🔍 Loading lesson: ${lessonId}`);
    
    // Use EnhancedLessonService for Firebase-first approach with local fallback
    const lesson = await EnhancedLessonService.getLesson(lessonId);
    
    if (lesson) {
      console.log(`✅ Loaded lesson: ${lesson.title}`);
      return lesson;
    }
    
    console.warn(`⚠️ Lesson not found: ${lessonId}`);
    return null;
  } catch (error) {
    console.error('❌ Error in getLessonById:', error);
    return null;
  }
}

// Task Management
export async function createLearningTask(taskData: Omit<LearningTask, 'id'>): Promise<string> {
  try {
    const taskRef = doc(collection(db, COLLECTIONS.TASKS));
    
    const task: LearningTask = {
      ...taskData,
      id: taskRef.id
    };
    
    await setDoc(taskRef, task);
    console.log('✅ Learning task created:', task.id);
    return task.id;
  } catch (error) {
    console.error('❌ Error creating learning task:', error);
    throw error;
  }
}

export async function getTasksByLesson(lessonId: string): Promise<LearningTask[]> {
  try {
    const tasksRef = collection(db, COLLECTIONS.TASKS);
    const q = query(
      tasksRef, 
      where('lessonId', '==', lessonId),
      orderBy('createdAt')
    );
    const snapshot = await getDocs(q);
    
    const tasks = snapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    })) as LearningTask[];
    
    console.log(`✅ Fetched ${tasks.length} tasks for lesson: ${lessonId}`);
    return tasks;
  } catch (error) {
    console.error('❌ Error fetching tasks:', error);
    throw error;
  }
}

// Progress Management
export async function getUserModuleProgress(userId: string, moduleId: string): Promise<ModuleProgress | null> {
  try {
    const progressRef = doc(db, COLLECTIONS.PROGRESS, `${userId}_${moduleId}`);
    const snapshot = await getDoc(progressRef);
    
    if (!snapshot.exists()) {
      console.log(`📊 No progress found for user ${userId} in module ${moduleId}`);
      return null;
    }
    
    const progress = snapshot.data() as ModuleProgress;
    console.log(`✅ Fetched progress for user ${userId} in module ${moduleId}`);
    return progress;
  } catch (error) {
    console.error('❌ Error fetching module progress:', error);
    throw error;
  }
}

export async function getAllUserProgress(userId: string): Promise<ModuleProgress[]> {
  try {
    const progressRef = collection(db, COLLECTIONS.PROGRESS);
    const q = query(
      progressRef, 
      where('userId', '==', userId),
      orderBy('lastAccessedAt', 'desc')
    );
    const snapshot = await getDocs(q);
    
    const progress = snapshot.docs.map(doc => doc.data()) as ModuleProgress[];
    console.log(`✅ Fetched ${progress.length} progress records for user: ${userId}`);
    return progress;
  } catch (error) {
    console.error('❌ Error fetching all user progress:', error);
    throw error;
  }
}

export async function updateModuleProgress(
  userId: string, 
  moduleId: string, 
  updates: Partial<ModuleProgress>
): Promise<void> {
  try {
    const progressRef = doc(db, COLLECTIONS.PROGRESS, `${userId}_${moduleId}`);
    
    // Get existing progress or create new one
    const existingProgress = await getUserModuleProgress(userId, moduleId);
    
    // Get module data to calculate totals
    const module = await getModuleById(moduleId);
    const lessons = await getLessonsByModule(moduleId);
    
    const totalLessons = lessons.length;
    const totalTasks = lessons.reduce((sum, lesson) => sum + lesson.tasks.length, 0);
    
    const progressData: ModuleProgress = {
      moduleId,
      userId,
      status: 'in-progress',
      completedLessons: 0,
      totalLessons: totalLessons, // Use actual total
      completedTasks: 0,
      totalTasks: totalTasks, // Use actual total
      totalPoints: 0,
      earnedPoints: 0,
      averageScore: 0,
      timeSpent: 0,
      correctAnswers: 0,
      totalAnswers: 0,
      accuracy: 0,
      streak: 0,
      longestStreak: 0,
      reviewCount: 0,
      masteryLevel: 0,
      ...existingProgress,
      ...updates,
      lastAccessedAt: new Date().toISOString()
    };
    
    // Ensure totals are always current (overwrite any values from existing progress or updates)
    progressData.totalLessons = totalLessons;
    progressData.totalTasks = totalTasks;
    
    // Update status based on completion
    if (progressData.completedLessons >= totalLessons) {
      progressData.status = 'completed';
    } else if (progressData.completedLessons > 0) {
      progressData.status = 'in-progress';
    } else {
      progressData.status = 'not-started';
    }
    
    await setDoc(progressRef, progressData);
    console.log('✅ Module progress updated:', `${userId}_${moduleId}`, {
      completedLessons: progressData.completedLessons,
      totalLessons: progressData.totalLessons,
      status: progressData.status
    });
  } catch (error) {
    console.error('❌ Error updating module progress:', error);
    throw error;
  }
}

// Learning Profile Management
export async function getUserLearningProfile(userId: string): Promise<UserLearningProfile | null> {
  try {
    const profileRef = doc(db, COLLECTIONS.PROFILES, userId);
    const snapshot = await getDoc(profileRef);
    
    if (!snapshot.exists()) {
      console.log(`📊 No learning profile found for user: ${userId}`);
      return null;
    }
    
    const profile = snapshot.data() as UserLearningProfile;
    console.log(`✅ Fetched learning profile for user: ${userId}`);
    return profile;
  } catch (error) {
    console.error('❌ Error fetching learning profile:', error);
    throw error;
  }
}

export async function updateUserLearningProfile(
  userId: string, 
  updates: Partial<UserLearningProfile>
): Promise<void> {
  try {
    const profileRef = doc(db, COLLECTIONS.PROFILES, userId);
    
    // Get existing profile or create new one
    const existingProfile = await getUserLearningProfile(userId);
    
    const profileData: UserLearningProfile = {
      userId,
      learningPath: [],
      completedModules: [],
      unlockedModules: [],
      totalModulesCompleted: 0,
      totalLessonsCompleted: 0,
      totalTasksCompleted: 0,
      totalTimeSpent: 0,
      totalPointsEarned: 0,
      averageAccuracy: 0,
      learningStreak: 0,
      longestLearningStreak: 0,
      preferredDifficulty: 'beginner',
      learningGoals: [],
      studySchedule: {
        daysPerWeek: 3,
        minutesPerDay: 30,
        preferredTimeSlots: [],
        reminderEnabled: false,
        reminderTime: '09:00'
      },
      strengthAreas: [],
      weaknessAreas: [],
      recommendedModules: [],
      ...existingProfile,
      ...updates,
      lastUpdated: new Date().toISOString()
    };
    
    await setDoc(profileRef, profileData);
    console.log('✅ Learning profile updated:', userId);
  } catch (error) {
    console.error('❌ Error updating learning profile:', error);
    throw error;
  }
}

// Analytics
export async function recordLearningActivity(
  userId: string, 
  moduleId: string, 
  analytics: Omit<LearningAnalytics, 'userId' | 'moduleId' | 'createdAt'>
): Promise<void> {
  try {
    const analyticsRef = doc(collection(db, COLLECTIONS.ANALYTICS));
    
    const analyticsData: LearningAnalytics = {
      userId,
      moduleId,
      ...analytics,
      createdAt: new Date().toISOString()
    };
    
    await setDoc(analyticsRef, analyticsData);
    console.log('✅ Learning activity recorded');
  } catch (error) {
    console.error('❌ Error recording learning activity:', error);
    throw error;
  }
}

export async function getUserLearningAnalytics(
  userId: string, 
  moduleId?: string, 
  days: number = 30
): Promise<LearningAnalytics[]> {
  try {
    const analyticsRef = collection(db, COLLECTIONS.ANALYTICS);
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);
    
    let q = query(
      analyticsRef,
      where('userId', '==', userId),
      where('createdAt', '>=', startDate.toISOString()),
      orderBy('createdAt', 'desc')
    );
    
    if (moduleId) {
      q = query(q, where('moduleId', '==', moduleId));
    }
    
    const snapshot = await getDocs(q);
    const analytics = snapshot.docs.map(doc => doc.data()) as LearningAnalytics[];
    
    console.log(`✅ Fetched ${analytics.length} analytics records for user: ${userId}`);
    return analytics;
  } catch (error) {
    console.error('❌ Error fetching learning analytics:', error);
    throw error;
  }
}

// Utility Functions
export async function getUnlockedModules(userId: string): Promise<LearningModule[]> {
  try {
    const profile = await getUserLearningProfile(userId);
    if (!profile) {
      // Return beginner modules if no profile exists
      return await getModulesByCategory('fundamentals');
    }
    
    const allModules = await getAllModules();
    const unlockedModuleIds = profile.unlockedModules;
    
    return allModules.filter(module => 
      unlockedModuleIds.includes(module.id) || 
      module.difficulty === 'beginner'
    );
  } catch (error) {
    console.error('❌ Error getting unlocked modules:', error);
    throw error;
  }
}

export async function checkPrerequisites(userId: string, moduleId: string): Promise<boolean> {
  try {
    const module = await getModuleById(moduleId);
    if (!module || module.prerequisites.length === 0) {
      return true;
    }
    
    const userProgress = await getAllUserProgress(userId);
    const completedModules = userProgress
      .filter(p => p.status === 'completed')
      .map(p => p.moduleId);
    
    return module.prerequisites.every(prereq => 
      completedModules.includes(prereq)
    );
  } catch (error) {
    console.error('❌ Error checking prerequisites:', error);
    return false;
  }
}

export async function unlockNextModules(userId: string, completedModuleId: string): Promise<void> {
  try {
    const allModules = await getAllModules();
    const profile = await getUserLearningProfile(userId);
    
    if (!profile) return;
    
    // Find modules that have the completed module as a prerequisite
    const modulesToUnlock = allModules.filter(module => 
      module.prerequisites.includes(completedModuleId) &&
      !profile.unlockedModules.includes(module.id)
    );
    
    if (modulesToUnlock.length > 0) {
      const updatedUnlockedModules = [
        ...profile.unlockedModules,
        ...modulesToUnlock.map(m => m.id)
      ];
      
      await updateUserLearningProfile(userId, {
        unlockedModules: updatedUnlockedModules
      });
      
      console.log(`✅ Unlocked ${modulesToUnlock.length} new modules for user: ${userId}`);
    }
  } catch (error) {
    console.error('❌ Error unlocking next modules:', error);
    throw error;
  }
}

// Batch Operations
export async function bulkImportModules(modules: Omit<LearningModule, 'id' | 'createdAt' | 'updatedAt'>[]): Promise<void> {
  try {
    const batch = writeBatch(db);
    const now = new Date().toISOString();
    
    modules.forEach(moduleData => {
      const moduleRef = doc(collection(db, COLLECTIONS.MODULES));
      const module: LearningModule = {
        ...moduleData,
        id: moduleRef.id,
        createdAt: now,
        updatedAt: now
      };
      batch.set(moduleRef, module);
    });
    
    await batch.commit();
    console.log(`✅ Bulk imported ${modules.length} modules`);
  } catch (error) {
    console.error('❌ Error bulk importing modules:', error);
    throw error;
  }
}

// Progressive Learning Logic
export async function isModuleUnlocked(
  moduleId: string, 
  userId: string, 
  allModules: LearningModule[]
): Promise<boolean> {
  try {
    const module = allModules.find(m => m.id === moduleId);
    if (!module) return false;
    
    // Modules with no prerequisites are always unlocked
    if (!module.prerequisites || module.prerequisites.length === 0) {
      return true;
    }
    
    // Check if all prerequisite modules are completed
    const userProgress = await getAllUserProgress(userId);
    
    for (const prerequisiteTitle of module.prerequisites) {
      const prerequisiteModule = allModules.find(m => m.title === prerequisiteTitle);
      if (!prerequisiteModule) continue;
      
      const prerequisiteProgress = userProgress.find(p => p.moduleId === prerequisiteModule.id);
      if (!prerequisiteProgress || prerequisiteProgress.status !== 'completed') {
        return false;
      }
    }
    
    return true;
  } catch (error) {
    console.error('❌ Error checking module unlock status:', error);
    return false;
  }
}

export async function getUnlockedModulesForUser(
  userId: string, 
  allModules: LearningModule[]
): Promise<LearningModule[]> {
  try {
    const unlockedModules: LearningModule[] = [];
    
    for (const module of allModules) {
      const isUnlocked = await isModuleUnlocked(module.id, userId, allModules);
      if (isUnlocked) {
        unlockedModules.push({ ...module, unlocked: true });
      } else {
        unlockedModules.push({ ...module, unlocked: false });
      }
    }
    
    return unlockedModules;
  } catch (error) {
    console.error('❌ Error getting unlocked modules:', error);
    return allModules.map(m => ({ ...m, unlocked: false }));
  }
}
