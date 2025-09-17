/**
 * Unified Notification Hook
 * 
 * React hook for managing notifications throughout the app.
 * Replaces all other notification hooks to prevent conflicts.
 */

import { useState, useEffect, useCallback } from 'react';
import { useAuth } from './useAuth';
import { unifiedNotificationService, NotificationData } from '@/services/unifiedNotificationService';

interface UseNotificationsReturn {
  notifications: NotificationData[];
  unreadCount: number;
  isLoading: boolean;
  error: string | null;
  markAsRead: (id: string) => Promise<void>;
  createNotification: (data: Omit<NotificationData, 'id' | 'timestamp' | 'read' | 'userId'>) => Promise<void>;
  refreshNotifications: () => Promise<void>;
  clearError: () => void;
  isServiceReady: boolean;
}

export const useNotifications = (): UseNotificationsReturn => {
  const { user, loading: authLoading } = useAuth();
  const [notifications, setNotifications] = useState<NotificationData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isServiceReady, setIsServiceReady] = useState(false);

  // Initialize notification service
  useEffect(() => {
    const initService = async () => {
      try {
        const initialized = await unifiedNotificationService.initialize();
        setIsServiceReady(initialized);
        
        if (initialized && !authLoading && user) {
          // Request FCM token for push notifications
          await unifiedNotificationService.requestFCMToken();
        }
      } catch (err) {
        console.error('Failed to initialize notification service:', err);
        setError('Failed to initialize notifications');
      }
    };

    initService();
  }, [authLoading, user]);

  // Fetch notifications when user changes
  const refreshNotifications = useCallback(async () => {
    if (!user || authLoading) {
      setNotifications([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const userNotifications = await unifiedNotificationService.getUserNotifications(user.uid);
      setNotifications(userNotifications);
    } catch (err) {
      console.error('Error fetching notifications:', err);
      setError('Failed to load notifications');
    } finally {
      setIsLoading(false);
    }
  }, [user, authLoading]);

  // Initial load and setup listener
  useEffect(() => {
    if (!user || authLoading) return;

    // Initial fetch
    refreshNotifications();

    // Listen for new notifications
    const unsubscribe = unifiedNotificationService.addListener((notification) => {
      if (notification.userId === user.uid) {
        setNotifications(prev => [notification, ...prev]);
      }
    });

    return unsubscribe;
  }, [user, authLoading, refreshNotifications]);

  // Mark notification as read
  const markAsRead = useCallback(async (id: string) => {
    try {
      const success = await unifiedNotificationService.markAsRead(id);
      if (success) {
        setNotifications(prev => 
          prev.map(notification => 
            notification.id === id 
              ? { ...notification, read: true }
              : notification
          )
        );
      }
    } catch (err) {
      console.error('Error marking notification as read:', err);
      setError('Failed to mark notification as read');
    }
  }, []);

  // Create new notification
  const createNotification = useCallback(async (data: Omit<NotificationData, 'id' | 'timestamp' | 'read' | 'userId'>) => {
    if (!user) {
      setError('User not authenticated');
      return;
    }

    try {
      await unifiedNotificationService.createNotification({
        ...data,
        userId: user.uid
      });
    } catch (err) {
      console.error('Error creating notification:', err);
      setError('Failed to create notification');
    }
  }, [user]);

  // Clear error
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // Calculate unread count
  const unreadCount = notifications.filter(n => !n.read).length;

  return {
    notifications,
    unreadCount,
    isLoading,
    error,
    markAsRead,
    createNotification,
    refreshNotifications,
    clearError,
    isServiceReady
  };
};

export default useNotifications;
