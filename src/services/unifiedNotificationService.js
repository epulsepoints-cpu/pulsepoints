/**
 * Unified Notification Service
 *
 * This service consolidates all notification functionality into a single,
 * conflict-free system that handles:
 * - Firebase Cloud Messaging (FCM) for push notifications
 * - Firestore storage for notification persistence
 * - Capacitor push notifications for mobile
 * - In-app notification display
 * - Notification scheduling and management
 */
import { Capacitor } from '@capacitor/core';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { collection, doc, addDoc, updateDoc, getDocs, getDoc, setDoc, query, where, orderBy, limit, Timestamp } from 'firebase/firestore';
import { db, auth } from '@/firebase';
// Singleton class for unified notification management
class UnifiedNotificationService {
    messaging = null;
    fcmToken = null;
    pushNotifications = null;
    isInitialized = false;
    listeners = [];
    recentNotifications = new Map(); // For deduplication
    NOTIFICATION_COOLDOWN = 86400000; // 24 hours cooldown (was 60000 = 1 minute)
    DAILY_NOTIFICATION_LIMIT = 5; // Max 5 notifications per user per day
    dailyNotificationCounts = new Map();
    // Initialize the service
    async initialize() {
        if (this.isInitialized)
            return true;
        try {
            // Initialize FCM for web
            if (!Capacitor.isNativePlatform()) {
                await this.initializeWebFCM();
            }
            else {
                // Initialize Capacitor push notifications for mobile
                await this.initializeMobilePush();
            }
            this.isInitialized = true;
            console.log('✅ Unified Notification Service initialized');
            return true;
        }
        catch (error) {
            console.error('❌ Failed to initialize notification service:', error);
            return false;
        }
    }
    // Initialize Firebase Cloud Messaging for web
    async initializeWebFCM() {
        if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
            throw new Error('FCM not supported in this environment');
        }
        this.messaging = getMessaging();
        // Listen for foreground messages
        onMessage(this.messaging, (payload) => {
            console.log('📱 Received foreground FCM message:', payload);
            this.handleForegroundMessage(payload);
        });
    }
    // Initialize Capacitor push notifications for mobile
    async initializeMobilePush() {
        try {
            const { PushNotifications } = await import('@capacitor/push-notifications');
            this.pushNotifications = PushNotifications;
            // Request permission
            let permStatus = await PushNotifications.checkPermissions();
            if (permStatus.receive === 'prompt') {
                permStatus = await PushNotifications.requestPermissions();
            }
            if (permStatus.receive !== 'granted') {
                throw new Error('Push notification permission denied');
            }
            // Register for push notifications
            await PushNotifications.register();
            // Set up listeners
            PushNotifications.addListener('registration', (token) => {
                console.log('📱 Mobile push registration success:', token.value);
                this.fcmToken = token.value;
                this.saveFCMToken(token.value);
            });
            PushNotifications.addListener('registrationError', (error) => {
                console.error('❌ Mobile push registration error:', error);
            });
            PushNotifications.addListener('pushNotificationReceived', (notification) => {
                console.log('📱 Push notification received:', notification);
                this.handleMobileNotification(notification);
            });
            PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
                console.log('📱 Push notification action performed:', notification);
                this.handleNotificationAction(notification);
            });
        }
        catch (error) {
            console.error('❌ Failed to initialize mobile push notifications:', error);
            throw error;
        }
    }
    // Request FCM token for web
    async requestFCMToken() {
        if (!this.messaging)
            return null;
        try {
            const permission = await Notification.requestPermission();
            if (permission !== 'granted') {
                console.log('Notification permission denied');
                return null;
            }
            const token = await getToken(this.messaging, {
                vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY
            });
            if (token) {
                this.fcmToken = token;
                await this.saveFCMToken(token);
                console.log('✅ FCM token obtained:', token);
                return token;
            }
            return null;
        }
        catch (error) {
            console.error('❌ Error getting FCM token:', error);
            return null;
        }
    }
    // Save FCM token to Firestore
    async saveFCMToken(token) {
        if (!auth.currentUser)
            return;
        try {
            const userRef = doc(db, 'users', auth.currentUser.uid);
            await updateDoc(userRef, {
                fcmToken: token,
                fcmTokenUpdatedAt: Timestamp.now(),
                lastActiveAt: Timestamp.now()
            });
            console.log('✅ FCM token saved to Firestore');
        }
        catch (error) {
            console.error('❌ Error saving FCM token:', error);
        }
    }
    // Create and store notification with enhanced throttling and daily limits
    async createNotification(data) {
        try {
            // Check daily notification limit
            if (!this.checkDailyLimit(data.userId)) {
                console.log(`🚫 Daily notification limit reached for user ${data.userId}`);
                return null;
            }
            // Check cooldown period
            if (!this.shouldSendNotification(data.userId, data.type)) {
                console.log(`🚫 Notification throttled: ${data.type} for user ${data.userId}`);
                return null;
            }
            const notificationData = {
                ...data,
                timestamp: Timestamp.now(),
                read: false
            };
            const docRef = await addDoc(collection(db, 'userNotifications'), notificationData);
            console.log('✅ Notification stored:', docRef.id);
            // Update daily count
            this.incrementDailyCount(data.userId);
            // Notify listeners
            this.notifyListeners({ ...notificationData, id: docRef.id });
            return docRef.id;
        }
        catch (error) {
            console.error('❌ Error creating notification:', error);
            return null;
        }
    }
    // Get user notifications
    async getUserNotifications(userId, limitCount = 20) {
        try {
            const q = query(collection(db, 'userNotifications'), where('userId', '==', userId), orderBy('timestamp', 'desc'), limit(limitCount));
            const snapshot = await getDocs(q);
            return snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        }
        catch (error) {
            console.error('❌ Error fetching notifications:', error);
            return [];
        }
    }
    // Mark notification as read
    async markAsRead(notificationId) {
        try {
            const notificationRef = doc(db, 'userNotifications', notificationId);
            await updateDoc(notificationRef, { read: true });
            console.log('✅ Notification marked as read:', notificationId);
            return true;
        }
        catch (error) {
            console.error('❌ Error marking notification as read:', error);
            return false;
        }
    }
    // Handle foreground FCM message
    handleForegroundMessage(payload) {
        const { notification, data } = payload;
        if (notification) {
            // Show browser notification if permitted
            if (Notification.permission === 'granted') {
                new Notification(notification.title || 'ECGkid Notification', {
                    body: notification.body,
                    icon: notification.icon || '/ecgkid_logo.png',
                    badge: '/ecgkid_logo.png',
                    data: data
                });
            }
            // Create in-app notification
            this.createNotification({
                userId: auth.currentUser?.uid || 'unknown',
                title: notification.title || 'Notification',
                body: notification.body || '',
                type: data?.type || 'system',
                actionUrl: data?.actionUrl,
                data: data
            });
        }
    }
    // Handle mobile push notification
    handleMobileNotification(notification) {
        // Create in-app notification for mobile
        this.createNotification({
            userId: auth.currentUser?.uid || 'unknown',
            title: notification.title || 'Notification',
            body: notification.body || '',
            type: notification.data?.type || 'system',
            actionUrl: notification.data?.actionUrl,
            data: notification.data
        });
    }
    // Handle notification action (tap/click)
    handleNotificationAction(notification) {
        const actionUrl = notification.notification?.data?.actionUrl;
        if (actionUrl && typeof window !== 'undefined') {
            window.location.href = actionUrl;
        }
    }
    // Add notification listener
    addListener(callback) {
        this.listeners.push(callback);
        return () => {
            const index = this.listeners.indexOf(callback);
            if (index > -1) {
                this.listeners.splice(index, 1);
            }
        };
    }
    // Notify all listeners
    notifyListeners(notification) {
        this.listeners.forEach(callback => {
            try {
                callback(notification);
            }
            catch (error) {
                console.error('❌ Error in notification listener:', error);
            }
        });
    }
    // Send quick notification (for testing)
    /**
     * 🎯 DUOLINGO-STYLE: Track daily goal completion for reminder system
     */
    async trackDailyGoalCompletion(userId) {
        try {
            if (!userId)
                return;
            const progressRef = doc(db, 'userProgress', userId);
            const today = new Date();
            await setDoc(progressRef, {
                lastDailyGoalCompleted: Timestamp.now(),
                lastDailyGoalDate: today.toISOString().split('T')[0], // YYYY-MM-DD
                updatedAt: Timestamp.now()
            }, { merge: true });
            console.log('✅ Daily goal completion tracked for user:', userId);
            // Create celebration notification for completing daily goal
            await this.createNotification({
                userId,
                type: 'celebration',
                title: '🎉 Daily Goal Complete!',
                body: 'Fantastic work! You\'ve completed all your daily ECG tasks. Keep building that learning streak!',
                priority: 'normal',
                actionUrl: '/dashboard'
            });
        }
        catch (error) {
            console.error('Error tracking daily goal completion:', error);
        }
    }
    /**
     * Update user notification preferences (Duolingo-style settings)
     */
    async updateUserPreferences(userId, preferences) {
        try {
            const userRef = doc(db, 'users', userId);
            await updateDoc(userRef, {
                ...preferences,
                preferencesUpdatedAt: Timestamp.now()
            });
            console.log('✅ User preferences updated:', userId);
        }
        catch (error) {
            console.error('Error updating user preferences:', error);
            throw error;
        }
    }
    /**
     * 🔥 DUOLINGO-STYLE: Send immediate notification for achievement
     */
    async sendAchievementNotification(userId, achievementType, details) {
        try {
            if (!userId)
                return;
            let title, body;
            switch (achievementType) {
                case 'streak_milestone':
                    title = `🔥 ${details.streakCount}-Day Streak!`;
                    body = `Amazing! You've maintained a ${details.streakCount}-day learning streak. You're becoming an ECG expert!`;
                    break;
                case 'first_completion':
                    title = '🎯 First Task Complete!';
                    body = 'Congratulations on completing your first ECG task! The journey to mastery begins!';
                    break;
                case 'perfect_week':
                    title = '👑 Perfect Week!';
                    body = 'Incredible! You completed all daily goals this week. You\'re a true ECG champion!';
                    break;
                default:
                    title = '🏆 Achievement Unlocked!';
                    body = 'Great work on your ECG learning progress!';
            }
            // Send push notification if FCM token available
            const userRef = doc(db, 'users', userId);
            const userDoc = await getDoc(userRef);
            if (userDoc.exists() && userDoc.data().fcmToken) {
                // TODO: Implement push notification sending
                console.log('🔔 Would send push notification with FCM token:', userDoc.data().fcmToken);
            }
            // Create in-app notification
            await this.createNotification({
                userId,
                type: 'achievement',
                title,
                body,
                priority: 'high',
                actionUrl: '/dashboard',
                data: {
                    achievementType,
                    ...details
                }
            });
            console.log('🏆 Achievement notification sent:', achievementType, details);
        }
        catch (error) {
            console.error('Error sending achievement notification:', error);
        }
    }
    async sendTestNotification(userId, title, body) {
        await this.createNotification({
            userId,
            title,
            body,
            type: 'system',
            category: 'info',
            priority: 'normal'
        });
    }
    /**
     * 🎯 DUOLINGO-STYLE: Send welcome back notification on login
     */
    async sendLoginWelcomeNotification(userId, userStats) {
        try {
            if (!userId)
                return;
            // Throttle login notifications - only send once per session
            if (!this.shouldSendNotification(userId, 'login-welcome')) {
                return;
            }
            // Calculate remaining tasks
            const completedTasks = userStats.completedTasks || 0;
            const totalTasks = 5;
            const remainingTasks = totalTasks - completedTasks;
            let title, body, actionUrl;
            if (remainingTasks <= 0) {
                // All tasks completed
                title = '🎉 Welcome Back, ECG Champion!';
                body = 'Amazing! You\'ve completed all your daily tasks. Check out the new weekly events and keep your streak alive!';
                actionUrl = '/dashboard?tab=events';
            }
            else if (remainingTasks === 1) {
                // One task remaining
                title = '🔥 Welcome Back! Almost There!';
                body = `You're just 1 task away from completing your daily goal! Finish strong and unlock new events.`;
                actionUrl = '/dashboard?tab=daily-tasks';
            }
            else {
                // Multiple tasks remaining
                title = '💪 Welcome Back to ECGkid!';
                body = `You have ${remainingTasks} ECG tasks remaining today. Complete them to unlock exciting new events and maintain your learning streak!`;
                actionUrl = '/dashboard?tab=daily-tasks';
            }
            // Create welcome notification
            await this.createNotification({
                userId,
                type: 'system',
                category: 'info',
                title,
                body,
                priority: 'high',
                actionUrl
            });
            console.log('🎯 Login welcome notification sent for user:', userId);
        }
        catch (error) {
            console.error('Error sending login welcome notification:', error);
        }
    }
    /**
     * 🌟 DUOLINGO-STYLE: Send new events unlocked notification
     */
    async sendNewEventsNotification(userId, eventCount = 1) {
        try {
            if (!userId)
                return;
            // Throttle events notifications - only send once per hour
            if (!this.shouldSendNotification(userId, 'new-events')) {
                return;
            }
            const title = eventCount === 1
                ? '🚀 New Event Unlocked!'
                : `🚀 ${eventCount} New Events Unlocked!`;
            const body = eventCount === 1
                ? 'Congratulations! You\'ve unlocked a brand new weekly event. Explore exclusive content and earn bonus rewards!'
                : `Amazing progress! You've unlocked ${eventCount} new weekly events with exclusive ECG content and bonus rewards!`;
            // Create events notification
            await this.createNotification({
                userId,
                type: 'achievement',
                category: 'success',
                title,
                body,
                priority: 'high',
                actionUrl: '/dashboard?tab=events'
            });
            console.log('🌟 New events notification sent for user:', userId);
        }
        catch (error) {
            console.error('Error sending new events notification:', error);
        }
    }
    /**
     * 📈 DUOLINGO-STYLE: Send progress encouragement notification
     */
    async sendProgressEncouragementNotification(userId, progressData) {
        try {
            if (!userId)
                return;
            const { completedTasks = 0, currentStreak = 0, totalTasksCompleted = 0 } = progressData;
            const remainingTasks = 5 - completedTasks;
            // Use task count as part of the throttling key to allow one notification per progress level
            const progressKey = `progress-${completedTasks}`;
            if (!this.shouldSendNotification(userId, progressKey)) {
                return;
            }
            let title, body;
            // Different encouraging messages based on progress
            if (remainingTasks === 4) {
                title = '🎯 Great Start!';
                body = `You've completed 1 task today! Keep the momentum going - ${remainingTasks} more tasks to reach your daily goal.`;
            }
            else if (remainingTasks === 3) {
                title = '🔥 You\'re On Fire!';
                body = `2 tasks down, ${remainingTasks} to go! You're building real ECG expertise with every completed task.`;
            }
            else if (remainingTasks === 2) {
                title = '💪 Almost There!';
                body = `3 tasks completed! Just ${remainingTasks} more tasks and you'll unlock new events and maintain your ${currentStreak}-day streak!`;
            }
            else if (remainingTasks === 1) {
                title = '🏆 Final Sprint!';
                body = `So close! Just 1 more task to complete your daily goal and unlock exciting new weekly events!`;
            }
            if (title && body) {
                await this.createNotification({
                    userId,
                    type: 'progress',
                    category: 'success',
                    title,
                    body,
                    priority: 'normal',
                    actionUrl: '/dashboard?tab=daily-tasks'
                });
                console.log('📈 Progress encouragement notification sent for user:', userId);
            }
        }
        catch (error) {
            console.error('Error sending progress encouragement notification:', error);
        }
    }
    // Get FCM token
    getFCMToken() {
        return this.fcmToken;
    }
    // Check if service is ready
    isReady() {
        return this.isInitialized;
    }
    /**
     * Check if notification should be sent (prevents spam)
     */
    shouldSendNotification(userId, type) {
        const key = `${userId}-${type}`;
        const lastSent = this.recentNotifications.get(key);
        const now = Date.now();
        if (lastSent && (now - lastSent) < this.NOTIFICATION_COOLDOWN) {
            console.log(`🚫 Notification throttled: ${type} for user ${userId} (cooldown active)`);
            return false;
        }
        this.recentNotifications.set(key, now);
        // Clean up old entries
        for (const [notifKey, timestamp] of this.recentNotifications.entries()) {
            if ((now - timestamp) > this.NOTIFICATION_COOLDOWN) {
                this.recentNotifications.delete(notifKey);
            }
        }
        return true;
    }
    /**
     * Check if user has reached daily notification limit
     */
    checkDailyLimit(userId) {
        const today = new Date().toDateString();
        const userDaily = this.dailyNotificationCounts.get(userId);
        if (!userDaily || userDaily.date !== today) {
            // New day or first notification for user
            return true;
        }
        if (userDaily.count >= this.DAILY_NOTIFICATION_LIMIT) {
            console.log(`🚫 Daily notification limit (${this.DAILY_NOTIFICATION_LIMIT}) reached for user ${userId}`);
            return false;
        }
        return true;
    }
    /**
     * Increment daily notification count for user
     */
    incrementDailyCount(userId) {
        const today = new Date().toDateString();
        const userDaily = this.dailyNotificationCounts.get(userId);
        if (!userDaily || userDaily.date !== today) {
            // New day or first notification
            this.dailyNotificationCounts.set(userId, { date: today, count: 1 });
        }
        else {
            // Increment count for today
            this.dailyNotificationCounts.set(userId, { date: today, count: userDaily.count + 1 });
        }
        // Clean up old entries (keep only today's counts)
        for (const [uid, daily] of this.dailyNotificationCounts.entries()) {
            if (daily.date !== today) {
                this.dailyNotificationCounts.delete(uid);
            }
        }
    }
}
// Export singleton instance
export const unifiedNotificationService = new UnifiedNotificationService();
// Initialize on import (if in browser environment)
if (typeof window !== 'undefined') {
    unifiedNotificationService.initialize().catch(console.error);
}
export default unifiedNotificationService;
