/**
 * Push Notification System Diagnostic Tool
 * 
 * This script analyzes the entire push notification system to identify issues
 */

import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { Capacitor } from '@capacitor/core';

class PushNotificationDiagnostic {
  private results: Array<{timestamp: string, message: string, type: string}> = [];
  private errors: Array<{timestamp: string, message: string, type: string}> = [];
  private warnings: Array<{timestamp: string, message: string, type: string}> = [];

  constructor() {
    this.results = [];
    this.errors = [];
    this.warnings = [];
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = { timestamp, message, type };
    
    console.log(`[${timestamp}] ${type.toUpperCase()}: ${message}`);
    
    switch(type) {
      case 'error':
        this.errors.push(logEntry);
        break;
      case 'warning':
        this.warnings.push(logEntry);
        break;
      default:
        this.results.push(logEntry);
    }
  }

  async runDiagnostics() {
    console.log('🔍 PUSH NOTIFICATION SYSTEM DIAGNOSTICS');
    console.log('=======================================\n');

    await this.checkEnvironment();
    await this.checkFirebaseConfig();
    await this.checkServiceWorker();
    await this.checkPermissions();
    await this.checkVapidKey();
    await this.checkFCMToken();
    await this.checkCapacitorIntegration();
    await this.checkNotificationAssets();
    
    this.generateReport();
  }

  async checkEnvironment() {
    this.log('🌍 ENVIRONMENT CHECK', 'info');
    
    // Check if running in browser
    if (typeof window === 'undefined') {
      this.log('❌ Not running in browser environment', 'error');
      return;
    }
    
    this.log('✅ Running in browser environment');
    
    // Check platform
    const platform = Capacitor.getPlatform();
    this.log(`📱 Platform: ${platform}`);
    
    // Check if native platform
    if (Capacitor.isNativePlatform()) {
      this.log('📱 Running on native platform (iOS/Android)');
    } else {
      this.log('🌐 Running on web platform');
    }

    // Check service worker support
    if ('serviceWorker' in navigator) {
      this.log('✅ Service Worker supported');
    } else {
      this.log('❌ Service Worker not supported', 'error');
    }

    // Check Notification API support
    if ('Notification' in window) {
      this.log('✅ Notification API supported');
    } else {
      this.log('❌ Notification API not supported', 'error');
    }

    // Check if HTTPS
    if (location.protocol === 'https:' || location.hostname === 'localhost') {
      this.log('✅ Running on secure context (HTTPS)');
    } else {
      this.log('⚠️ Not running on secure context - FCM requires HTTPS', 'warning');
    }
  }

  async checkFirebaseConfig() {
    this.log('\n🔥 FIREBASE CONFIGURATION CHECK', 'info');
    
    try {
      // Check environment variables
      const config = {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_FIREBASE_APP_ID,
        vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY
      };

      // Check each config value
      Object.entries(config).forEach(([key, value]) => {
        if (value) {
          this.log(`✅ ${key}: Found`);
        } else {
          this.log(`❌ ${key}: Missing`, 'error');
        }
      });

      // Check Firebase app initialization
      const { getApps } = await import('firebase/app');
      const apps = getApps();
      
      if (apps.length > 0) {
        this.log('✅ Firebase app initialized');
        this.log(`📊 Firebase apps count: ${apps.length}`);
      } else {
        this.log('❌ Firebase app not initialized', 'error');
      }

    } catch (error) {
      this.log(`❌ Firebase config check failed: ${error.message}`, 'error');
    }
  }

  async checkServiceWorker() {
    this.log('\n⚙️ SERVICE WORKER CHECK', 'info');
    
    if (!('serviceWorker' in navigator)) {
      this.log('❌ Service Worker not supported', 'error');
      return;
    }

    try {
      // Check if service worker is registered
      const registrations = await navigator.serviceWorker.getRegistrations();
      this.log(`📊 Service worker registrations: ${registrations.length}`);

      if (registrations.length === 0) {
        this.log('⚠️ No service worker registered', 'warning');
      } else {
        registrations.forEach((registration, index) => {
          this.log(`✅ Service Worker ${index + 1}: ${registration.scope}`);
        });
      }

      // Check for Firebase messaging service worker specifically
      const messagingSwExists = await fetch('/firebase-messaging-sw.js')
        .then(response => response.ok)
        .catch(() => false);

      if (messagingSwExists) {
        this.log('✅ Firebase messaging service worker file exists');
      } else {
        this.log('❌ Firebase messaging service worker file not found', 'error');
      }

      // Check service worker state
      if (navigator.serviceWorker.controller) {
        this.log('✅ Service worker is controlling the page');
      } else {
        this.log('⚠️ No service worker controlling the page', 'warning');
      }

    } catch (error) {
      this.log(`❌ Service worker check failed: ${error.message}`, 'error');
    }
  }

  async checkPermissions() {
    this.log('\n🔐 NOTIFICATION PERMISSIONS CHECK', 'info');
    
    if (!('Notification' in window)) {
      this.log('❌ Notification API not available', 'error');
      return;
    }

    const permission = Notification.permission;
    this.log(`📊 Current permission status: ${permission}`);

    switch (permission) {
      case 'granted':
        this.log('✅ Notification permission granted');
        break;
      case 'denied':
        this.log('❌ Notification permission denied', 'error');
        this.log('💡 User needs to enable notifications in browser settings', 'warning');
        break;
      case 'default':
        this.log('⚠️ Notification permission not requested yet', 'warning');
        
        // Try to request permission
        try {
          const result = await Notification.requestPermission();
          this.log(`📊 Permission request result: ${result}`);
          
          if (result === 'granted') {
            this.log('✅ Permission granted after request');
          } else {
            this.log('❌ Permission denied after request', 'error');
          }
        } catch (error) {
          this.log(`❌ Failed to request permission: ${error.message}`, 'error');
        }
        break;
    }
  }

  async checkVapidKey() {
    this.log('\n🔑 VAPID KEY CHECK', 'info');
    
    const vapidKey = import.meta.env.VITE_FIREBASE_VAPID_KEY;
    
    if (!vapidKey) {
      this.log('❌ VAPID key not found in environment variables', 'error');
      this.log('💡 Add VITE_FIREBASE_VAPID_KEY to your .env file', 'warning');
      return;
    }

    this.log('✅ VAPID key found in environment');
    
    // Check VAPID key format
    if (vapidKey.length === 88) {
      this.log('✅ VAPID key has correct length');
    } else {
      this.log(`⚠️ VAPID key length is ${vapidKey.length}, expected 88`, 'warning');
    }

    // Check if it's base64url encoded
    const base64urlPattern = /^[A-Za-z0-9_-]+$/;
    if (base64urlPattern.test(vapidKey)) {
      this.log('✅ VAPID key appears to be properly formatted');
    } else {
      this.log('❌ VAPID key format appears invalid', 'error');
    }
  }

  async checkFCMToken() {
    this.log('\n🎫 FCM TOKEN CHECK', 'info');
    
    if (Capacitor.isNativePlatform()) {
      this.log('📱 Skipping FCM token check on native platform');
      return;
    }

    try {
      // Try to get Firebase messaging instance
      const { app } = await import('@/firebase');
      const messaging = getMessaging(app);
      this.log('✅ Firebase messaging instance created');

      // Check service worker registration first
      const registration = await navigator.serviceWorker.ready;
      this.log('✅ Service worker ready');

      // Try to get FCM token
      const vapidKey = import.meta.env.VITE_FIREBASE_VAPID_KEY;
      if (!vapidKey) {
        this.log('❌ Cannot get FCM token - VAPID key missing', 'error');
        return;
      }

      const token = await getToken(messaging, { vapidKey, serviceWorkerRegistration: registration });
      
      if (token) {
        this.log('✅ FCM token generated successfully');
        this.log(`🎫 Token preview: ${token.substring(0, 20)}...`);
        
        // Try to test the token by sending a test message to ourselves
        // (This would require backend implementation)
        
      } else {
        this.log('❌ Failed to generate FCM token', 'error');
      }

    } catch (error) {
      this.log(`❌ FCM token check failed: ${error.message}`, 'error');
      
      if (error.message.includes('messaging/unsupported-browser')) {
        this.log('💡 Browser may not support FCM', 'warning');
      } else if (error.message.includes('messaging/permission-blocked')) {
        this.log('💡 Notification permission blocked by user', 'warning');
      } else if (error.message.includes('messaging/vapid-key-required')) {
        this.log('💡 VAPID key configuration issue', 'warning');
      }
    }
  }

  async checkCapacitorIntegration() {
    this.log('\n📱 CAPACITOR INTEGRATION CHECK', 'info');
    
    if (!Capacitor.isNativePlatform()) {
      this.log('🌐 Skipping Capacitor check - running on web');
      return;
    }

    try {
      const { PushNotifications } = await import('@capacitor/push-notifications');
      this.log('✅ Capacitor Push Notifications plugin available');

      // Check permissions
      const permStatus = await PushNotifications.checkPermissions();
      this.log(`📊 Push permission status: ${permStatus.receive}`);

      if (permStatus.receive === 'granted') {
        this.log('✅ Push notifications permitted');
      } else if (permStatus.receive === 'denied') {
        this.log('❌ Push notifications denied', 'error');
      } else {
        this.log('⚠️ Push notifications permission not determined', 'warning');
      }

      // Check registration status
      // This would require actually registering, which we'll skip in diagnostic mode

    } catch (error) {
      this.log(`❌ Capacitor integration check failed: ${error.message}`, 'error');
    }
  }

  async checkNotificationAssets() {
    this.log('\n🎨 NOTIFICATION ASSETS CHECK', 'info');
    
    const assets = [
      '/notification-assets/notification-icon.png',
      '/notification-assets/notification-badge.png',
      '/notification-assets/notification-icon-fallback.svg',
      '/notification-assets/notification-badge-fallback.svg'
    ];

    for (const asset of assets) {
      try {
        const response = await fetch(asset);
        if (response.ok) {
          this.log(`✅ Asset found: ${asset}`);
        } else {
          this.log(`❌ Asset missing: ${asset} (${response.status})`, 'warning');
        }
      } catch (error) {
        this.log(`❌ Asset check failed: ${asset}`, 'warning');
      }
    }
  }

  generateReport() {
    console.log('\n📋 DIAGNOSTIC SUMMARY');
    console.log('====================');
    
    const totalChecks = this.results.length + this.errors.length + this.warnings.length;
    const successRate = Math.round((this.results.length / totalChecks) * 100);
    
    console.log(`📊 Total checks: ${totalChecks}`);
    console.log(`✅ Successful: ${this.results.length}`);
    console.log(`⚠️ Warnings: ${this.warnings.length}`);
    console.log(`❌ Errors: ${this.errors.length}`);
    console.log(`📈 Success rate: ${successRate}%`);

    if (this.errors.length > 0) {
      console.log('\n🚨 CRITICAL ISSUES TO FIX:');
      this.errors.forEach(error => {
        console.log(`❌ ${error.message}`);
      });
    }

    if (this.warnings.length > 0) {
      console.log('\n⚠️ WARNINGS TO ADDRESS:');
      this.warnings.forEach(warning => {
        console.log(`⚠️ ${warning.message}`);
      });
    }

    console.log('\n💡 RECOMMENDATIONS:');
    
    const recommendations = this.generateRecommendations();
    recommendations.forEach(rec => {
      console.log(`💡 ${rec}`);
    });
  }

  generateRecommendations() {
    const recommendations = [];

    // Check for common issues
    const hasPermissionError = this.errors.some(e => e.message.includes('permission'));
    const hasVapidError = this.errors.some(e => e.message.includes('VAPID') || e.message.includes('vapid'));
    const hasServiceWorkerError = this.errors.some(e => e.message.includes('service worker'));
    const hasFirebaseError = this.errors.some(e => e.message.includes('Firebase'));

    if (hasPermissionError) {
      recommendations.push('Enable notification permissions in browser settings');
      recommendations.push('Check if notifications are blocked at OS level');
    }

    if (hasVapidError) {
      recommendations.push('Verify VAPID key is correctly set in Firebase Console');
      recommendations.push('Ensure VITE_FIREBASE_VAPID_KEY is in .env file');
    }

    if (hasServiceWorkerError) {
      recommendations.push('Ensure firebase-messaging-sw.js exists in public directory');
      recommendations.push('Check service worker registration in main app');
    }

    if (hasFirebaseError) {
      recommendations.push('Verify Firebase configuration in .env file');
      recommendations.push('Check Firebase project settings and API keys');
    }

    if (this.errors.length === 0 && this.warnings.length === 0) {
      recommendations.push('System appears healthy - test with actual notification');
      recommendations.push('Consider implementing notification analytics');
    }

    return recommendations;
  }
}

// Auto-run diagnostics when script is loaded
if (typeof window !== 'undefined') {
  const diagnostic = new PushNotificationDiagnostic();
  diagnostic.runDiagnostics().catch(console.error);
}

export default PushNotificationDiagnostic;
