/**
 * 🔔 NOTIFICATION SERVICE HOOKS
 * React hooks for notification management with TypeScript
 * 
 * Updated to use the new unified NotificationManager
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { notificationManager, NotificationData } from '@/services/NotificationManager';
import { auth } from '@/firebase';

// Hook for managing notification state
export const useNotifications = () => {
  const [notifications, setNotifications] = useState<NotificationData[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);
  const listenerRef = useRef<((notification: NotificationData) => void) | null>(null);

  // Initialize notifications
  useEffect(() => {
    const initializeNotificationSystem = async () => {
      try {
        console.log('🔔 Initializing notification system...');
        const success = await notificationManager.initialize();
        setIsInitialized(success);
        
        if (success) {
          await loadNotifications();
        }
      } catch (error) {
        console.error('❌ Failed to initialize notifications:', error);
        setIsInitialized(false);
      } finally {
        setIsLoading(false);
      }
    };

    initializeNotificationSystem();
  }, []);

  // Set up real-time listener
  useEffect(() => {
    if (!isInitialized) return;

    const handleNewNotification = (notification: NotificationData) => {
      console.log('📱 New notification received:', notification);
      
      setNotifications(prev => {
        const exists = prev.find(n => n.id === notification.id);
        if (exists) return prev;
        
        return [notification, ...prev];
      });

      if (!notification.read) {
        setUnreadCount(prev => prev + 1);
      }
    };

    listenerRef.current = handleNewNotification;
    notificationManager.addListener(handleNewNotification);

    return () => {
      if (listenerRef.current) {
        notificationManager.removeListener(listenerRef.current);
      }
    };
  }, [isInitialized]);

  // Load notifications from Firestore
  const loadNotifications = useCallback(async () => {
    if (!auth.currentUser || !isInitialized) return;

    try {
      setIsLoading(true);
      const userNotifications = await notificationManager.getUserNotifications(
        auth.currentUser.uid,
        50
      );
      
      setNotifications(userNotifications);
      
      // Count unread notifications
      const unread = userNotifications.filter(n => !n.read).length;
      setUnreadCount(unread);
      
    } catch (error) {
      console.error('❌ Error loading notifications:', error);
    } finally {
      setIsLoading(false);
    }
  }, [isInitialized]);

  // Mark notification as read
  const markAsRead = useCallback(async (notificationId: string) => {
    try {
      const success = await notificationManager.markAsRead(notificationId);
      
      if (success) {
        setNotifications(prev => 
          prev.map(n => 
            n.id === notificationId 
              ? { ...n, read: true }
              : n
          )
        );
        
        setUnreadCount(prev => Math.max(0, prev - 1));
      }
      
      return success;
    } catch (error) {
      console.error('❌ Error marking notification as read:', error);
      return false;
    }
  }, []);

  // Mark all as read
  const markAllAsRead = useCallback(async () => {
    const unreadNotifications = notifications.filter(n => !n.read && n.id);
    
    try {
      const promises = unreadNotifications.map(n => 
        n.id ? notificationManager.markAsRead(n.id) : Promise.resolve(false)
      );
      
      await Promise.all(promises);
      
      setNotifications(prev => 
        prev.map(n => ({ ...n, read: true }))
      );
      
      setUnreadCount(0);
      
    } catch (error) {
      console.error('❌ Error marking all notifications as read:', error);
    }
  }, [notifications]);

  // Send notification
  const sendNotification = useCallback(async (notificationData: Omit<NotificationData, 'userId'>) => {
    if (!auth.currentUser) {
      console.warn('⚠️ No authenticated user for sending notification');
      return null;
    }

    try {
      const result = await notificationManager.sendNotification({
        ...notificationData,
        userId: auth.currentUser.uid
      });
      
      return result;
    } catch (error) {
      console.error('❌ Error sending notification:', error);
      return null;
    }
  }, []);

  // Send test notification
  const sendTestNotification = useCallback(async () => {
    try {
      await notificationManager.sendTestNotification();
    } catch (error) {
      console.error('❌ Error sending test notification:', error);
    }
  }, []);

  return {
    notifications,
    unreadCount,
    isLoading,
    isInitialized,
    loadNotifications,
    markAsRead,
    markAllAsRead,
    sendNotification,
    sendTestNotification
  };
};

// Hook for notification permissions
export const useNotificationPermissions = () => {
  const [permissionStatus, setPermissionStatus] = useState<'granted' | 'denied' | 'default'>('default');
  const [isChecking, setIsChecking] = useState(false);

  const checkPermissions = useCallback(async () => {
    setIsChecking(true);
    
    try {
      if ('Notification' in window) {
        setPermissionStatus(Notification.permission);
      } else {
        setPermissionStatus('denied');
      }
    } catch (error) {
      console.error('❌ Error checking notification permissions:', error);
      setPermissionStatus('denied');
    } finally {
      setIsChecking(false);
    }
  }, []);

  const requestPermissions = useCallback(async () => {
    if (!('Notification' in window)) {
      console.warn('⚠️ Notifications not supported');
      return 'denied';
    }

    try {
      const permission = await Notification.requestPermission();
      setPermissionStatus(permission);
      return permission;
    } catch (error) {
      console.error('❌ Error requesting notification permissions:', error);
      setPermissionStatus('denied');
      return 'denied';
    }
  }, []);

  useEffect(() => {
    checkPermissions();
  }, [checkPermissions]);

  return {
    permissionStatus,
    isChecking,
    checkPermissions,
    requestPermissions,
    hasPermission: permissionStatus === 'granted'
  };
};

// Hook for notification badge count
export const useNotificationBadge = () => {
  const { unreadCount } = useNotifications();

  useEffect(() => {
    // Update document title with badge count
    const originalTitle = document.title.replace(/^\(\d+\)\s*/, '');
    
    if (unreadCount > 0) {
      document.title = `(${unreadCount}) ${originalTitle}`;
    } else {
      document.title = originalTitle;
    }

    // Update favicon badge (if you have badge-enabled favicon)
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon && unreadCount > 0) {
      // You can implement favicon badge logic here
      favicon.href = '/favicon-with-badge.ico';
    } else if (favicon) {
      favicon.href = '/favicon.ico';
    }

    return () => {
      document.title = originalTitle;
    };
  }, [unreadCount]);

  return { unreadCount };
};

// Hook for typing notification indicators
export const useTypingIndicator = (userId: string) => {
  const [isTyping, setIsTyping] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const setTyping = useCallback((typing: boolean) => {
    setIsTyping(typing);
    
    if (typing) {
      // Clear existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Auto-clear typing after 5 seconds
      timeoutRef.current = setTimeout(() => {
        setIsTyping(false);
      }, 5000);
    } else {
      // Clear timeout when explicitly set to false
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return { isTyping, setTyping };
};
