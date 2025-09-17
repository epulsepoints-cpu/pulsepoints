/**
 * 🎯 UNIFIED NOTIFICATION HOOK
 * Single hook to replace all conflicting notification hooks
 */

import { useState, useEffect, useCallback } from 'react';
import { unifiedNotificationService, type NotificationData } from '@/services/unifiedNotificationService';
import { useGameState } from '@/hooks/useGameState';

export interface UseNotificationsReturn {
  notifications: NotificationData[];
  unreadCount: number;
  isLoading: boolean;
  createNotification: (title: string, body: string, type?: NotificationData['type']) => Promise<string | null>;
  createProgressNotification: (userId: string, title: string, body: string, data?: Record<string, any>) => Promise<string | null>;
  markAsRead: (notificationId: string) => Promise<void>;
  markAllAsRead: () => Promise<void>;
  clearAll: () => Promise<void>;
  refreshNotifications: () => Promise<void>; // Add this for compatibility
  // Quick notification methods
  notifyLessonComplete: (lessonTitle: string, score: number) => Promise<void>;
  notifyAchievement: (achievementTitle: string) => Promise<void>;
  notifyProgress: (milestone: string) => Promise<void>;
}

export const useUnifiedNotifications = (): UseNotificationsReturn => {
  const { gameState } = useGameState();
  const [notifications, setNotifications] = useState<NotificationData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Calculate unread count
  const unreadCount = notifications.filter(n => !n.read).length;

  // Load notifications when user changes
  useEffect(() => {
    if (gameState.user?.id) {
      loadNotifications();
    } else {
      setNotifications([]);
      setIsLoading(false);
    }
  }, [gameState.user?.id]);

  // Load notifications from service
  const loadNotifications = useCallback(async () => {
    if (!gameState.user?.id) return;

    try {
      setIsLoading(true);
      const userNotifications = await unifiedNotificationService.getUserNotifications(gameState.user.id);
      setNotifications(userNotifications);
    } catch (error) {
      console.error('❌ Failed to load notifications:', error);
    } finally {
      setIsLoading(false);
    }
  }, [gameState.user?.id]);

  // Create notification
  const createNotification = useCallback(async (
    title: string, 
    body: string, 
    type: NotificationData['type'] = 'system'
  ): Promise<string | null> => {
    if (!gameState.user?.id) return null;

    try {
      const notificationId = await unifiedNotificationService.createNotification({
        userId: gameState.user.id,
        title,
        body,
        type
      });
      
      // Reload notifications to show the new one
      await loadNotifications();
      
      return notificationId;
    } catch (error) {
      console.error('❌ Failed to create notification:', error);
      return null;
    }
  }, [gameState.user?.id, loadNotifications]);

  // Mark as read
  const markAsRead = useCallback(async (notificationId: string): Promise<void> => {
    try {
      await unifiedNotificationService.markAsRead(notificationId);
      
      // Update local state
      setNotifications(prev => 
        prev.map(n => n.id === notificationId ? { ...n, read: true } : n)
      );
    } catch (error) {
      console.error('❌ Failed to mark notification as read:', error);
    }
  }, []);

  // Mark all as read
  const markAllAsRead = useCallback(async (): Promise<void> => {
    if (!gameState.user?.id) return;

    try {
      // Mark all unread notifications as read
      const unreadNotifications = notifications.filter(n => !n.read);
      await Promise.all(
        unreadNotifications.map(n => n.id ? unifiedNotificationService.markAsRead(n.id) : Promise.resolve())
      );
      
      // Update local state
      setNotifications(prev => 
        prev.map(n => ({ ...n, read: true }))
      );
    } catch (error) {
      console.error('❌ Failed to mark all notifications as read:', error);
    }
  }, [gameState.user?.id, notifications]);

  // Clear all notifications  
  const clearAll = useCallback(async (): Promise<void> => {
    if (!gameState.user?.id) return;

    try {
      // For now, just mark all as read since we don't have a delete method
      await markAllAsRead();
      // Could also filter out read notifications from local state if desired
      // setNotifications([]);
    } catch (error) {
      console.error('❌ Failed to clear all notifications:', error);
    }
  }, [gameState.user?.id, markAllAsRead]);  // Quick notification methods
  const notifyLessonComplete = useCallback(async (lessonTitle: string, score: number): Promise<void> => {
    await createNotification(
      'Lesson Completed! 🎉',
      `Great job completing "${lessonTitle}"! Score: ${score}%`,
      'lesson'
    );
  }, [createNotification]);

  const notifyAchievement = useCallback(async (achievementTitle: string): Promise<void> => {
    await createNotification(
      'Achievement Unlocked! 🏆',
      `Congratulations! You earned: ${achievementTitle}`,
      'achievement'
    );
  }, [createNotification]);

  const notifyProgress = useCallback(async (milestone: string): Promise<void> => {
    await createNotification(
      'Progress Milestone! 📈',
      milestone,
      'progress'
    );
  }, [createNotification]);

  // Convenience method to match the old createProgressNotification signature
  const createProgressNotification = useCallback(async (
    userId: string,
    title: string,
    body: string,
    data?: Record<string, any>
  ): Promise<string | null> => {
    try {
      const notificationId = await unifiedNotificationService.createNotification({
        userId,
        title,
        body,
        type: 'progress',
        data
      });
      
      // Reload notifications to show the new one
      await loadNotifications();
      
      return notificationId;
    } catch (error) {
      console.error('❌ Failed to create progress notification:', error);
      return null;
    }
  }, [loadNotifications]);

  return {
    notifications,
    unreadCount,
    isLoading,
    createNotification,
    createProgressNotification,
    markAsRead,
    markAllAsRead,
    clearAll,
    refreshNotifications: loadNotifications, // Alias for compatibility
    notifyLessonComplete,
    notifyAchievement,
    notifyProgress
  };
};

export default useUnifiedNotifications;
