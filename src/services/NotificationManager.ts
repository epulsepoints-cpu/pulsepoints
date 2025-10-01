// 🔔 COMPLETE ANDROID NOTIFICATION SERVICE
// This replaces all existing notification services with a unified, working solution

import { Capacitor } from '@capacitor/core';
import { PushNotifications } from '@capacitor/push-notifications';
import { LocalNotifications } from '@capacitor/local-notifications';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { 
  collection, 
  doc, 
  addDoc, 
  updateDoc, 
  getDocs, 
  setDoc, 
  query, 
  where, 
  orderBy, 
  limit, 
  Timestamp 
} from 'firebase/firestore';
import { db, auth } from '@/firebase';

export interface NotificationData {
  id?: string;
  userId: string;
  title: string;
  body: string;
  type: 'system' | 'reminder' | 'achievement' | 'progress' | 'lesson' | 'celebration';
  timestamp?: any;
  read?: boolean;
  data?: Record<string, any>;
}

class UnifiedNotificationManager {
  private static instance: UnifiedNotificationManager;
  private messaging: any = null;
  private fcmToken: string | null = null;
  private isInitialized = false;
  private listeners: ((notification: NotificationData) => void)[] = [];
  private retryCount = 0;
  private maxRetries = 3;

  static getInstance(): UnifiedNotificationManager {
    if (!UnifiedNotificationManager.instance) {
      UnifiedNotificationManager.instance = new UnifiedNotificationManager();
    }
    return UnifiedNotificationManager.instance;
  }

  /**
   * 🚀 MAIN INITIALIZATION - Call this once in your app
   */
  async initialize(): Promise<boolean> {
    if (this.isInitialized) return true;

    try {
      console.log('🔔 Initializing unified notification system...');

      if (Capacitor.isNativePlatform()) {
        await this.initializeAndroidNotifications();
      } else {
        await this.initializeWebNotifications();
      }

      this.isInitialized = true;
      console.log('✅ Notification system initialized successfully');
      return true;

    } catch (error) {
      console.error('❌ Notification initialization failed:', error);
      
      // Retry logic for flaky initialization
      if (this.retryCount < this.maxRetries) {
        this.retryCount++;
        console.log(`🔄 Retrying initialization (${this.retryCount}/${this.maxRetries})...`);
        await new Promise(resolve => setTimeout(resolve, 2000));
        return this.initialize();
      }
      
      return false;
    }
  }

  /**
   * 📱 ANDROID NATIVE NOTIFICATIONS
   */
  private async initializeAndroidNotifications(): Promise<void> {
    console.log('📱 Setting up Android native notifications...');

    try {
      // Step 1: Check permissions
      let permStatus = await PushNotifications.checkPermissions();
      console.log('📊 Current permission status:', permStatus.receive);

      // Step 2: Request permissions if needed
      if (permStatus.receive === 'prompt') {
        console.log('🔐 Requesting push notification permissions...');
        permStatus = await PushNotifications.requestPermissions();
      }

      if (permStatus.receive !== 'granted') {
        console.warn('⚠️ Push notification permission not granted');
        // Fall back to local notifications
        await this.setupLocalNotifications();
        return;
      }

      // Step 3: Register for push notifications
      console.log('📋 Registering for push notifications...');
      await PushNotifications.register();

      // Step 4: Set up event listeners
      this.setupAndroidListeners();

      // Step 5: Setup local notifications as backup
      await this.setupLocalNotifications();

      console.log('✅ Android notifications setup complete');

    } catch (error) {
      console.error('❌ Android notification setup failed:', error);
      
      // Fallback to local notifications
      try {
        await this.setupLocalNotifications();
        console.log('✅ Fallback to local notifications successful');
      } catch (fallbackError) {
        console.error('❌ Local notification fallback failed:', fallbackError);
        throw fallbackError;
      }
    }
  }

  /**
   * 🌐 WEB NOTIFICATIONS (Firebase FCM)
   */
  private async initializeWebNotifications(): Promise<void> {
    console.log('🌐 Setting up web notifications...');

    try {
      // Check if FCM is supported
      if (!('serviceWorker' in navigator) || !('Notification' in window)) {
        throw new Error('FCM not supported in this environment');
      }

      // Initialize Firebase messaging
      this.messaging = getMessaging();

      // Request permission
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') {
        console.warn('⚠️ Web notification permission denied');
        return;
      }

      // Get FCM token
      await this.requestAndSaveFCMToken();

      // Listen for foreground messages
      onMessage(this.messaging, (payload) => {
        console.log('📱 Received foreground message:', payload);
        this.handleForegroundMessage(payload);
      });

      console.log('✅ Web notifications setup complete');

    } catch (error) {
      console.error('❌ Web notification setup failed:', error);
      throw error;
    }
  }

  /**
   * 🔧 Setup Android Event Listeners
   */
  private setupAndroidListeners(): void {
    // Registration success
    PushNotifications.addListener('registration', (token) => {
      console.log('✅ Push registration success:', token.value);
      this.fcmToken = token.value;
      this.saveFCMTokenToFirestore(token.value);
    });

    // Registration error
    PushNotifications.addListener('registrationError', (error) => {
      console.error('❌ Push registration error:', error);
    });

    // Notification received (foreground)
    PushNotifications.addListener('pushNotificationReceived', (notification) => {
      console.log('📱 Push notification received (foreground):', notification);
      this.handleAndroidNotification(notification);
    });

    // Notification action performed (background tap)
    PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
      console.log('👆 Push notification tapped:', notification);
      this.handleNotificationTap(notification);
    });
  }

  /**
   * 🏠 Setup Local Notifications (Fallback)
   */
  private async setupLocalNotifications(): Promise<void> {
    try {
      console.log('🏠 Setting up local notifications...');

      // Request permissions
      const permissions = await LocalNotifications.requestPermissions();
      if (permissions.display !== 'granted') {
        console.warn('⚠️ Local notification permission not granted');
        return;
      }

      // Register action types
      await LocalNotifications.registerActionTypes({
        types: [
          {
            id: 'ECG_ACTION',
            actions: [
              {
                id: 'open',
                title: 'Open App',
                foreground: true
              },
              {
                id: 'dismiss',
                title: 'Dismiss',
                destructive: true
              }
            ]
          }
        ]
      });

      console.log('✅ Local notifications setup complete');

    } catch (error) {
      console.error('❌ Local notifications setup failed:', error);
    }
  }

  /**
   * 🔑 Get and Save FCM Token
   */
  private async requestAndSaveFCMToken(): Promise<string | null> {
    if (!this.messaging) return null;

    try {
      const vapidKey = import.meta.env.VITE_FIREBASE_VAPID_KEY || 
                      'BCEDTv6JWnB-i87nPZjhN8qo3MtpM6wHRw-HlyhsB2im9-9-QXpiTkHWA3KEgPN_EdZnwaYEyxpR415CnERTLbM';

      const token = await getToken(this.messaging, { vapidKey });
      
      if (token) {
        console.log('✅ FCM token obtained:', token.substring(0, 20) + '...');
        this.fcmToken = token;
        await this.saveFCMTokenToFirestore(token);
        return token;
      }

      return null;
    } catch (error) {
      console.error('❌ Error getting FCM token:', error);
      return null;
    }
  }

  /**
   * 💾 Save FCM Token to Firestore
   */
  private async saveFCMTokenToFirestore(token: string): Promise<void> {
    if (!auth.currentUser) {
      console.log('📝 No authenticated user, token will be saved when user logs in');
      localStorage.setItem('pending_fcm_token', token);
      return;
    }

    try {
      const userRef = doc(db, 'users', auth.currentUser.uid);
      await updateDoc(userRef, {
        fcmToken: token,
        fcmTokenUpdatedAt: Timestamp.now(),
        lastActiveAt: Timestamp.now(),
        platform: Capacitor.getPlatform(),
        notificationEnabled: true
      });

      console.log('✅ FCM token saved to Firestore');
      
      // Clear any pending token
      localStorage.removeItem('pending_fcm_token');

    } catch (error) {
      console.error('❌ Error saving FCM token:', error);
      // Save to localStorage as fallback
      localStorage.setItem('pending_fcm_token', token);
    }
  }

  /**
   * 📨 Send Notification (Universal)
   */
  async sendNotification(notificationData: NotificationData): Promise<string | null> {
    try {
      // Save to Firestore first
      const docRef = await addDoc(collection(db, 'notifications'), {
        ...notificationData,
        timestamp: Timestamp.now(),
        read: false
      });

      console.log('✅ Notification saved to Firestore:', docRef.id);

      // For immediate local delivery (if needed)
      if (Capacitor.isNativePlatform()) {
        await this.sendLocalNotification(notificationData);
      } else {
        await this.sendWebNotification(notificationData);
      }

      // Notify listeners
      this.notifyListeners({ ...notificationData, id: docRef.id });

      return docRef.id;

    } catch (error) {
      console.error('❌ Error sending notification:', error);
      return null;
    }
  }

  /**
   * 📱 Send Local Notification (Android Fallback)
   */
  private async sendLocalNotification(notificationData: NotificationData): Promise<void> {
    try {
      await LocalNotifications.schedule({
        notifications: [
          {
            title: notificationData.title,
            body: notificationData.body,
            id: Math.floor(Math.random() * 1000000),
            schedule: { at: new Date(Date.now() + 1000) }, // 1 second delay
            sound: 'default',
            attachments: [],
            actionTypeId: 'ECG_ACTION',
            extra: notificationData.data || {}
          }
        ]
      });

      console.log('✅ Local notification scheduled');

    } catch (error) {
      console.error('❌ Error sending local notification:', error);
    }
  }

  /**
   * 🌐 Send Web Notification
   */
  private async sendWebNotification(notificationData: NotificationData): Promise<void> {
    if (Notification.permission !== 'granted') return;

    try {
      const notification = new Notification(notificationData.title, {
        body: notificationData.body,
        icon: '/notification-assets/notification-icon.png',
        badge: '/notification-assets/notification-badge.png',
        tag: `ecg-${notificationData.type}`,
        requireInteraction: true,
        data: notificationData.data || {}
      });

      notification.onclick = () => {
        window.focus();
        notification.close();
      };

      // Auto-close after 10 seconds
      setTimeout(() => notification.close(), 10000);

    } catch (error) {
      console.error('❌ Error sending web notification:', error);
    }
  }

  /**
   * 📥 Message Handlers
   */
  private handleForegroundMessage(payload: any): void {
    console.log('📱 Handling foreground FCM message:', payload);
    
    const notificationData: NotificationData = {
      userId: payload.data?.userId || auth.currentUser?.uid || '',
      title: payload.notification?.title || 'ECGkid Notification',
      body: payload.notification?.body || '',
      type: payload.data?.type || 'system',
      data: payload.data || {}
    };

    this.notifyListeners(notificationData);
  }

  private handleAndroidNotification(notification: any): void {
    console.log('📱 Handling Android notification:', notification);
    
    const notificationData: NotificationData = {
      userId: notification.data?.userId || auth.currentUser?.uid || '',
      title: notification.title || 'ECGkid Notification',
      body: notification.body || '',
      type: notification.data?.type || 'system',
      data: notification.data || {}
    };

    this.notifyListeners(notificationData);
  }

  private handleNotificationTap(notification: any): void {
    console.log('👆 Notification tapped:', notification);
    
    // Handle notification tap actions here
    // Navigate to specific screens based on notification type
    const type = notification.notification?.data?.type || 'system';
    
    switch (type) {
      case 'lesson':
        // Navigate to lessons
        window.location.href = '/#lessons';
        break;
      case 'achievement':
        // Navigate to achievements
        window.location.href = '/#achievements';
        break;
      default:
        // Navigate to home
        window.location.href = '/';
    }
  }

  /**
   * 👂 Listener Management
   */
  addListener(callback: (notification: NotificationData) => void): void {
    this.listeners.push(callback);
  }

  removeListener(callback: (notification: NotificationData) => void): void {
    this.listeners = this.listeners.filter(listener => listener !== callback);
  }

  private notifyListeners(notification: NotificationData): void {
    this.listeners.forEach(callback => {
      try {
        callback(notification);
      } catch (error) {
        console.error('❌ Error in notification listener:', error);
      }
    });
  }

  /**
   * 📋 Get User Notifications
   */
  async getUserNotifications(userId: string, limitCount = 20): Promise<NotificationData[]> {
    try {
      const q = query(
        collection(db, 'notifications'),
        where('userId', '==', userId),
        orderBy('timestamp', 'desc'),
        limit(limitCount)
      );

      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as NotificationData));

    } catch (error) {
      console.error('❌ Error fetching notifications:', error);
      return [];
    }
  }

  /**
   * ✅ Mark Notification as Read
   */
  async markAsRead(notificationId: string): Promise<boolean> {
    try {
      const notificationRef = doc(db, 'notifications', notificationId);
      await updateDoc(notificationRef, { read: true });
      return true;
    } catch (error) {
      console.error('❌ Error marking notification as read:', error);
      return false;
    }
  }

  /**
   * 🧹 Cleanup and Utils
   */
  async refreshToken(): Promise<string | null> {
    console.log('🔄 Refreshing FCM token...');
    return await this.requestAndSaveFCMToken();
  }

  getToken(): string | null {
    return this.fcmToken;
  }

  isReady(): boolean {
    return this.isInitialized;
  }

  /**
   * 🧪 Test Notification
   */
  async sendTestNotification(): Promise<void> {
    if (!auth.currentUser) {
      console.warn('⚠️ No authenticated user for test notification');
      return;
    }

    const testNotification: NotificationData = {
      userId: auth.currentUser.uid,
      title: '🧪 Test Notification',
      body: 'This is a test notification from ECGkid PulsePoints!',
      type: 'system',
      data: { test: true }
    };

    await this.sendNotification(testNotification);
    console.log('✅ Test notification sent');
  }
}

// Export singleton instance
export const notificationManager = UnifiedNotificationManager.getInstance();

// Convenience functions
export const initializeNotifications = () => notificationManager.initialize();
export const sendNotification = (data: NotificationData) => notificationManager.sendNotification(data);
export const sendTestNotification = () => notificationManager.sendTestNotification();
export const addNotificationListener = (callback: (notification: NotificationData) => void) => 
  notificationManager.addListener(callback);
export const removeNotificationListener = (callback: (notification: NotificationData) => void) => 
  notificationManager.removeListener(callback);

// Auto-initialize if running in browser
if (typeof window !== 'undefined') {
  // Wait for Firebase to be ready, then initialize
  setTimeout(() => {
    notificationManager.initialize().catch(console.error);
  }, 1000);
}