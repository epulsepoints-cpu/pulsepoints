/**
 * Enhanced Notification Service
 * 
 * This service ensures all notifications have proper action URLs
 * and provides utilities for creating notifications with correct navigation.
 */

import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '@/firebase';

// Default action URLs based on notification type
export const getDefaultActionUrl = (type: string, data?: any): string => {
  switch (type) {
    case 'lesson':
    case 'lesson_complete':
      return data?.lessonId ? `/learn/${data.lessonId}` : '/learn';
    
    case 'achievement':
    case 'rank_up':
      return '/profile?tab=achievements';
    
    case 'progress':
    case 'streak':
    case 'daily_goal':
      return '/dashboard?tab=progress';
    
    case 'module_unlock':
      return data?.moduleId ? `/modules/${data.moduleId}` : '/learn';
    
    case 'reminder':
      return '/dashboard';
    
    case 'social':
      return '/leaderboard';
    
    case 'reward':
      return '/rewards';
    
    case 'system':
    default:
      return '/dashboard';
  }
};

// Enhanced notification creation with guaranteed action URL
export const createEnhancedNotification = async (
  userId: string,
  type: string,
  title: string,
  body: string,
  options?: {
    data?: any;
    customActionUrl?: string;
    priority?: 'low' | 'normal' | 'high';
    category?: string;
  }
): Promise<string | null> => {
  try {
    // Ensure action URL is always present
    const actionUrl = options?.customActionUrl || getDefaultActionUrl(type, options?.data);
    
    const notificationData = {
      userId,
      type,
      title,
      body,
      data: options?.data || {},
      actionUrl, // Always include action URL
      timestamp: Timestamp.now(),
      read: false,
      priority: options?.priority || 'normal',
      category: options?.category || type
    };

    console.log('📱 Creating enhanced notification:', {
      type,
      title: title.substring(0, 30) + '...',
      actionUrl,
      userId: userId.substring(0, 8) + '...'
    });

    const docRef = await addDoc(collection(db, 'userNotifications'), notificationData);
    
    console.log('✅ Enhanced notification created:', docRef.id);
    return docRef.id;

  } catch (error) {
    console.error('❌ Error creating enhanced notification:', error);
    return null;
  }
};

// Quick notification creators with built-in action URLs
export const notificationCreators = {
  // Lesson-related notifications
  lessonComplete: async (userId: string, lessonTitle: string, score: number, lessonId?: string) => {
    return createEnhancedNotification(
      userId,
      'lesson_complete',
      '🎉 Lesson Complete!',
      `Great job! You completed "${lessonTitle}" with ${score}% score.`,
      {
        data: { lessonId, score },
        customActionUrl: lessonId ? `/learn/${lessonId}` : '/learn'
      }
    );
  },

  // Achievement notifications
  achievement: async (userId: string, achievementTitle: string, achievementId?: string) => {
    return createEnhancedNotification(
      userId,
      'achievement',
      '🏆 Achievement Unlocked!',
      `Congratulations! You earned: ${achievementTitle}`,
      {
        data: { achievementId },
        customActionUrl: '/profile?tab=achievements'
      }
    );
  },

  // Progress notifications
  progress: async (userId: string, milestone: string) => {
    return createEnhancedNotification(
      userId,
      'progress',
      '📈 Progress Update',
      `You've reached a new milestone: ${milestone}`,
      {
        customActionUrl: '/dashboard?tab=progress'
      }
    );
  },

  // Reminder notifications
  reminder: async (userId: string, message: string, targetUrl?: string) => {
    return createEnhancedNotification(
      userId,
      'reminder',
      '⏰ Learning Reminder',
      message,
      {
        customActionUrl: targetUrl || '/dashboard'
      }
    );
  },

  // System notifications
  system: async (userId: string, title: string, message: string, actionUrl?: string) => {
    return createEnhancedNotification(
      userId,
      'system',
      title,
      message,
      {
        customActionUrl: actionUrl || '/dashboard'
      }
    );
  }
};

// Batch notification creator for multiple users
export const createBatchNotifications = async (
  userIds: string[],
  type: string,
  title: string,
  body: string,
  options?: {
    data?: any;
    customActionUrl?: string;
    priority?: 'low' | 'normal' | 'high';
  }
): Promise<number> => {
  let successCount = 0;
  
  for (const userId of userIds) {
    const result = await createEnhancedNotification(userId, type, title, body, options);
    if (result) {
      successCount++;
    }
  }
  
  console.log(`📊 Batch notifications sent: ${successCount}/${userIds.length}`);
  return successCount;
};

export default {
  createEnhancedNotification,
  notificationCreators,
  createBatchNotifications,
  getDefaultActionUrl
};
