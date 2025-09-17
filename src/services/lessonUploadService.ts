import { 
  collection, 
  doc, 
  setDoc, 
  getDocs, 
  query, 
  where, 
  orderBy,
  writeBatch,
  serverTimestamp,
  getDoc 
} from 'firebase/firestore';
import { db } from '../firebase';
import { Lesson } from '@/types/learning';

const LESSONS_COLLECTION = 'lessons';
const BATCH_SIZE = 10; // Firestore batch limit

export class LessonUploadService {
  
  /**
   * Upload a single lesson to Firestore
   */
  static async uploadLesson(lessonData: Lesson): Promise<string> {
    try {
      // Clean the lesson data for Firestore
      const cleanLessonData = this.cleanLessonForFirestore(lessonData);
      
      // Create lesson document
      const lessonRef = doc(db, LESSONS_COLLECTION, lessonData.id);
      
      await setDoc(lessonRef, {
        ...cleanLessonData,
        uploadedAt: serverTimestamp(),
        version: '1.0'
      });
      
      console.log(`✅ Uploaded lesson: ${lessonData.id} - ${lessonData.title}`);
      return lessonData.id;
      
    } catch (error) {
      console.error(`❌ Error uploading lesson ${lessonData.id}:`, error);
      throw error;
    }
  }
  
  /**
   * Upload multiple lessons in batches
   */
  static async uploadLessonsBatch(lessons: Lesson[]): Promise<void> {
    const batches = this.createBatches(lessons, BATCH_SIZE);
    
    for (let i = 0; i < batches.length; i++) {
      const batch = writeBatch(db);
      const currentBatch = batches[i];
      
      console.log(`📦 Processing batch ${i + 1}/${batches.length} (${currentBatch.length} lessons)`);
      
      for (const lesson of currentBatch) {
        const cleanLessonData = this.cleanLessonForFirestore(lesson);
        const lessonRef = doc(db, LESSONS_COLLECTION, lesson.id);
        
        batch.set(lessonRef, {
          ...cleanLessonData,
          uploadedAt: serverTimestamp(),
          version: '1.0'
        });
      }
      
      await batch.commit();
      console.log(`✅ Batch ${i + 1} uploaded successfully`);
      
      // Small delay between batches to avoid rate limits
      if (i < batches.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
  }
  
  /**
   * Check if lesson exists in Firestore with timeout handling
   */
  static async lessonExists(lessonId: string): Promise<boolean> {
    try {
      const lessonRef = doc(db, LESSONS_COLLECTION, lessonId);
      
      // Add timeout for connection checks
      const existsPromise = getDoc(lessonRef);
      const timeoutPromise = new Promise<never>((_, reject) => 
        setTimeout(() => reject(new Error('Firestore timeout')), 5000)
      );
      
      const lessonSnap = await Promise.race([existsPromise, timeoutPromise]);
      return lessonSnap.exists();
      
    } catch (error) {
      if (error instanceof Error && error.message === 'Firestore timeout') {
        console.warn(`⏰ Firestore timeout checking lesson existence: ${lessonId}`);
      } else {
        console.error(`❌ Error checking lesson existence:`, error);
      }
      return false;
    }
  }
  
  /**
   * Get lessons by module from Firestore with timeout handling
   */
  static async getLessonsByModule(moduleId: string): Promise<Lesson[]> {
    try {
      const lessonsQuery = query(
        collection(db, LESSONS_COLLECTION),
        where('moduleId', '==', moduleId),
        orderBy('order', 'asc')
      );
      
      // Add timeout for Android connection issues
      const queryPromise = getDocs(lessonsQuery);
      const timeoutPromise = new Promise<never>((_, reject) => 
        setTimeout(() => reject(new Error('Firestore timeout')), 10000)
      );
      
      const snapshot = await Promise.race([queryPromise, timeoutPromise]);
      
      const lessons = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      })) as Lesson[];
      
      console.log(`✅ Firebase module loaded: ${lessons.length} lessons for ${moduleId}`);
      return lessons;
      
    } catch (error) {
      if (error instanceof Error && error.message === 'Firestore timeout') {
        console.warn(`⏰ Firestore timeout for module ${moduleId}`);
      } else {
        console.error(`❌ Error fetching lessons for module ${moduleId}:`, error);
      }
      return [];
    }
  }
  
  /**
   * Get a single lesson by ID from Firestore with timeout handling
   */
  static async getLesson(lessonId: string): Promise<Lesson | null> {
    try {
      const lessonRef = doc(db, LESSONS_COLLECTION, lessonId);
      
      // Add timeout for Android connection issues
      const lessonPromise = getDoc(lessonRef);
      const timeoutPromise = new Promise<never>((_, reject) => 
        setTimeout(() => reject(new Error('Firestore timeout')), 8000)
      );
      
      const lessonSnap = await Promise.race([lessonPromise, timeoutPromise]);
      
      if (lessonSnap.exists()) {
        const lessonData = {
          ...lessonSnap.data(),
          id: lessonSnap.id
        } as Lesson;
        
        console.log(`✅ Firebase lesson loaded: ${lessonData.title}`);
        return lessonData;
      }
      
      console.log(`⚠️ Lesson ${lessonId} not found in Firebase`);
      return null;
    } catch (error) {
      if (error instanceof Error && error.message === 'Firestore timeout') {
        console.warn(`⏰ Firestore timeout for lesson ${lessonId}`);
      } else {
        console.error(`❌ Error fetching lesson ${lessonId}:`, error);
      }
      return null;
    }
  }
  
  /**
   * Clean lesson data for Firestore storage
   */
  private static cleanLessonForFirestore(lesson: Lesson): any {
    return {
      ...lesson,
      // Ensure all required fields are present
      createdAt: lesson.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      completed: lesson.completed || false,
      attempts: lesson.attempts || 0,
      
      // Clean up any undefined fields that Firestore doesn't like
      score: lesson.score ?? null,
      completedAt: lesson.completedAt ?? null,
      
      // Ensure content structure is valid
      content: {
        ...lesson.content,
        slides: lesson.content.slides?.map(slide => ({
          ...slide,
          // Clean up any undefined fields in slides
          content: slide.content ?? '',
          imageUrl: slide.imageUrl ?? null,
          audioUrl: slide.audioUrl ?? null,
          videoUrl: slide.videoUrl ?? null,
          youtubeId: slide.youtubeId ?? null,
          hint: slide.hint ?? null,
          question: slide.question ?? null,
          options: slide.options ?? null,
          correctAnswer: slide.correctAnswer ?? null,
          explanation: slide.explanation ?? null,
          
          // Clean up nested objects
          audio: slide.audio ? {
            ...slide.audio,
            narrationUrl: slide.audio.narrationUrl ?? null,
            backgroundMusicUrl: slide.audio.backgroundMusicUrl ?? null,
            transcript: slide.audio.transcript ?? null,
            duration: slide.audio.duration ?? null,
            autoPlay: slide.audio.autoPlay ?? false
          } : null,
          
          diagram: slide.diagram ?? null,
          comparison: slide.comparison ?? null,
          steps: slide.steps ?? null
        })) ?? [],
        
        // Clean up sections
        sections: lesson.content.sections?.map(section => ({
          ...section,
          mediaUrl: section.mediaUrl ?? null,
          mediaType: section.mediaType ?? null,
          interactive: section.interactive ?? null,
          slides: section.slides ?? null
        })) ?? []
      },
      
      // Clean up tasks array - store tasks as-is (progress is tracked separately)
      tasks: lesson.tasks?.map(task => ({
        ...task
      })) ?? []
    };
  }
  
  /**
   * Create batches from lesson array
   */
  private static createBatches<T>(array: T[], batchSize: number): T[][] {
    const batches: T[][] = [];
    for (let i = 0; i < array.length; i += batchSize) {
      batches.push(array.slice(i, i + batchSize));
    }
    return batches;
  }
  
  /**
   * Validate lesson data before upload
   */
  static validateLesson(lesson: Lesson): { valid: boolean; errors: string[] } {
    const errors: string[] = [];
    
    if (!lesson.id) errors.push('Missing lesson ID');
    if (!lesson.moduleId) errors.push('Missing module ID');
    if (!lesson.title) errors.push('Missing lesson title');
    if (!lesson.description) errors.push('Missing lesson description');
    if (typeof lesson.order !== 'number') errors.push('Invalid lesson order');
    if (!lesson.content) errors.push('Missing lesson content');
    if (typeof lesson.estimatedTime !== 'number') errors.push('Invalid estimated time');
    
    // Validate content structure
    if (lesson.content) {
      if (!lesson.content.introduction) errors.push('Missing lesson introduction');
      if (!lesson.content.sections && !lesson.content.slides) {
        errors.push('Lesson must have either sections or slides');
      }
    }
    
    return {
      valid: errors.length === 0,
      errors
    };
  }
  
  /**
   * Get upload statistics
   */
  static async getUploadStats(): Promise<{
    totalLessons: number;
    lessonsByModule: { [moduleId: string]: number };
    lastUploadDate?: string;
  }> {
    try {
      const allLessonsQuery = query(collection(db, LESSONS_COLLECTION));
      const snapshot = await getDocs(allLessonsQuery);
      
      const lessons = snapshot.docs.map(doc => doc.data());
      const lessonsByModule: { [moduleId: string]: number } = {};
      
      lessons.forEach(lesson => {
        const moduleId = lesson.moduleId as string;
        lessonsByModule[moduleId] = (lessonsByModule[moduleId] || 0) + 1;
      });
      
      // Find the most recent upload date
      const uploadDates = lessons
        .map(lesson => lesson.uploadedAt?.toDate?.()?.toISOString?.())
        .filter(Boolean)
        .sort()
        .reverse();
      
      return {
        totalLessons: lessons.length,
        lessonsByModule,
        lastUploadDate: uploadDates[0]
      };
    } catch (error) {
      console.error('Error getting upload stats:', error);
      return {
        totalLessons: 0,
        lessonsByModule: {}
      };
    }
  }
}
