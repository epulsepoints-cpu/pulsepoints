/**
 * Quick Push Notification Test for ECGkid PulsePoints
 * This script tests the most common issues that prevent push notifications
 */

console.log('🔍 ECGkid PulsePoints - Push Notification Quick Test');
console.log('================================================\n');

// Test 1: Environment Check
function testEnvironment() {
    console.log('1️⃣ ENVIRONMENT TEST');
    console.log('------------------');
    
    // Check if we're in a secure context
    const isSecure = location.protocol === 'https:' || location.hostname === 'localhost';
    console.log(`🔒 Secure context: ${isSecure ? '✅ YES' : '❌ NO - HTTPS required'}`);
    
    // Check service worker support
    const swSupported = 'serviceWorker' in navigator;
    console.log(`⚙️ Service Worker: ${swSupported ? '✅ Supported' : '❌ Not supported'}`);
    
    // Check notification API
    const notificationSupported = 'Notification' in window;
    console.log(`🔔 Notification API: ${notificationSupported ? '✅ Supported' : '❌ Not supported'}`);
    
    // Check push manager
    const pushSupported = 'PushManager' in window;
    console.log(`📱 Push Manager: ${pushSupported ? '✅ Supported' : '❌ Not supported'}`);
    
    return isSecure && swSupported && notificationSupported && pushSupported;
}

// Test 2: Notification Permission
async function testPermissions() {
    console.log('\n2️⃣ PERMISSION TEST');
    console.log('-----------------');
    
    if (!('Notification' in window)) {
        console.log('❌ Notification API not available');
        return false;
    }
    
    let permission = Notification.permission;
    console.log(`📊 Current permission: ${permission}`);
    
    if (permission === 'default') {
        console.log('🔄 Requesting permission...');
        try {
            permission = await Notification.requestPermission();
            console.log(`📊 New permission: ${permission}`);
        } catch (error) {
            console.log(`❌ Permission request failed: ${error.message}`);
        }
    }
    
    const isGranted = permission === 'granted';
    console.log(`🔐 Permission status: ${isGranted ? '✅ GRANTED' : '❌ DENIED'}`);
    
    if (!isGranted) {
        console.log('💡 To fix: Enable notifications in browser settings');
        console.log('   Chrome: Settings > Privacy > Site Settings > Notifications');
        console.log('   Firefox: Settings > Privacy > Permissions > Notifications');
    }
    
    return isGranted;
}

// Test 3: Service Worker Registration
async function testServiceWorker() {
    console.log('\n3️⃣ SERVICE WORKER TEST');
    console.log('---------------------');
    
    if (!('serviceWorker' in navigator)) {
        console.log('❌ Service Worker not supported');
        return false;
    }
    
    try {
        // Check existing registrations
        const registrations = await navigator.serviceWorker.getRegistrations();
        console.log(`📊 Active registrations: ${registrations.length}`);
        
        // Check if our Firebase messaging SW is registered
        const messagingSwExists = registrations.find(reg => 
            reg.scope.includes('firebase-messaging-sw') || 
            reg.active?.scriptURL.includes('firebase-messaging-sw')
        );
        
        if (messagingSwExists) {
            console.log('✅ Firebase messaging service worker found');
        } else {
            console.log('⚠️ Firebase messaging service worker not found');
        }
        
        // Check if the SW file exists
        const swResponse = await fetch('/firebase-messaging-sw.js');
        console.log(`📁 SW file exists: ${swResponse.ok ? '✅ YES' : '❌ NO'}`);
        
        if (!swResponse.ok) {
            console.log('💡 To fix: Ensure firebase-messaging-sw.js is in the public folder');
        }
        
        // Check if any SW is controlling the page
        const hasController = !!navigator.serviceWorker.controller;
        console.log(`🎛️ SW controlling page: ${hasController ? '✅ YES' : '⚠️ NO'}`);
        
        return swResponse.ok;
        
    } catch (error) {
        console.log(`❌ Service Worker test failed: ${error.message}`);
        return false;
    }
}

// Test 4: Firebase Configuration
function testFirebaseConfig() {
    console.log('\n4️⃣ FIREBASE CONFIG TEST');
    console.log('-----------------------');
    
    const config = {
        'API Key': import.meta.env.VITE_FIREBASE_API_KEY,
        'Auth Domain': import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        'Project ID': import.meta.env.VITE_FIREBASE_PROJECT_ID,
        'Messaging Sender ID': import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        'App ID': import.meta.env.VITE_FIREBASE_APP_ID,
        'VAPID Key': import.meta.env.VITE_FIREBASE_VAPID_KEY
    };
    
    let allPresent = true;
    Object.entries(config).forEach(([key, value]) => {
        const isPresent = !!value;
        console.log(`${isPresent ? '✅' : '❌'} ${key}: ${isPresent ? 'Found' : 'Missing'}`);
        if (!isPresent) allPresent = false;
    });
    
    if (!allPresent) {
        console.log('\n💡 To fix missing config:');
        console.log('   1. Check your .env file');
        console.log('   2. Ensure all VITE_FIREBASE_* variables are set');
        console.log('   3. Restart your dev server after adding env variables');
    }
    
    return allPresent;
}

// Test 5: FCM Token Generation
async function testFCMToken() {
    console.log('\n5️⃣ FCM TOKEN TEST');
    console.log('-----------------');
    
    try {
        // Dynamic import to avoid loading issues
        const { getMessaging, getToken } = await import('firebase/messaging');
        const { app } = await import('../firebase.ts');
        
        console.log('🔥 Firebase modules loaded');
        
        const messaging = getMessaging(app);
        console.log('📡 Messaging instance created');
        
        // Wait for service worker to be ready
        const registration = await navigator.serviceWorker.ready;
        console.log('⚙️ Service worker ready');
        
        const vapidKey = import.meta.env.VITE_FIREBASE_VAPID_KEY;
        if (!vapidKey) {
            console.log('❌ VAPID key missing');
            return false;
        }
        
        console.log('🔑 VAPID key found');
        console.log('🔄 Generating FCM token...');
        
        const token = await getToken(messaging, { 
            vapidKey,
            serviceWorkerRegistration: registration 
        });
        
        if (token) {
            console.log(`✅ FCM token generated successfully!`);
            console.log(`🎫 Token preview: ${token.substring(0, 30)}...`);
            console.log(`📏 Token length: ${token.length} characters`);
            
            // Try to save token to localStorage for debugging
            localStorage.setItem('fcm-token-debug', token);
            console.log('💾 Token saved to localStorage as "fcm-token-debug"');
            
            return true;
        } else {
            console.log('❌ Failed to generate FCM token');
            return false;
        }
        
    } catch (error) {
        console.log(`❌ FCM token test failed: ${error.message}`);
        
        // Provide specific error guidance
        if (error.message.includes('messaging/unsupported-browser')) {
            console.log('💡 Browser may not support FCM');
        } else if (error.message.includes('messaging/permission-blocked')) {
            console.log('💡 Notifications blocked - check browser permissions');
        } else if (error.message.includes('messaging/vapid-key-required')) {
            console.log('💡 VAPID key issue - check Firebase console settings');
        } else if (error.message.includes('messaging/registration-token-not-registered')) {
            console.log('💡 Service worker registration issue');
        }
        
        return false;
    }
}

// Test 6: Send Test Notification
function testLocalNotification() {
    console.log('\n6️⃣ LOCAL NOTIFICATION TEST');
    console.log('--------------------------');
    
    if (Notification.permission !== 'granted') {
        console.log('❌ Cannot test - permission not granted');
        return false;
    }
    
    try {
        console.log('📢 Sending test notification...');
        
        const notification = new Notification('🧠 ECGkid PulsePoints', {
            body: 'Test notification - your system is working!',
            icon: '/notification-assets/notification-icon.png',
            badge: '/notification-assets/notification-badge.png',
            tag: 'test-notification',
            requireInteraction: false
        });
        
        notification.onshow = () => {
            console.log('✅ Test notification displayed successfully!');
        };
        
        notification.onerror = (error) => {
            console.log(`❌ Test notification error: ${error}`);
        };
        
        notification.onclick = () => {
            console.log('✅ Test notification clicked!');
            notification.close();
        };
        
        // Auto close after 5 seconds
        setTimeout(() => {
            notification.close();
            console.log('🔄 Test notification closed');
        }, 5000);
        
        return true;
        
    } catch (error) {
        console.log(`❌ Local notification test failed: ${error.message}`);
        return false;
    }
}

// Run all tests
async function runAllTests() {
    console.log('🚀 Starting comprehensive push notification tests...\n');
    
    const results = {
        environment: testEnvironment(),
        permissions: await testPermissions(),
        serviceWorker: await testServiceWorker(),
        firebaseConfig: testFirebaseConfig(),
        fcmToken: false,
        localNotification: false
    };
    
    // Only test FCM if basics are working
    if (results.environment && results.permissions && results.serviceWorker && results.firebaseConfig) {
        results.fcmToken = await testFCMToken();
    }
    
    // Only test local notification if permission granted
    if (results.permissions) {
        results.localNotification = testLocalNotification();
    }
    
    // Generate summary
    console.log('\n📋 TEST SUMMARY');
    console.log('===============');
    
    const passed = Object.values(results).filter(Boolean).length;
    const total = Object.keys(results).length;
    
    console.log(`📊 Tests passed: ${passed}/${total}`);
    console.log(`📈 Success rate: ${Math.round((passed/total) * 100)}%\n`);
    
    // Show individual results
    Object.entries(results).forEach(([test, passed]) => {
        console.log(`${passed ? '✅' : '❌'} ${test.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
    });
    
    // Provide overall recommendations
    console.log('\n🎯 RECOMMENDATIONS');
    console.log('==================');
    
    if (passed === total) {
        console.log('🎉 All tests passed! Your notification system should be working.');
        console.log('💡 If you\'re still not receiving notifications:');
        console.log('   • Check your backend/server for sending notifications');
        console.log('   • Verify notification topics and targeting');
        console.log('   • Check Firebase Console message logs');
    } else {
        console.log('⚠️ Some tests failed. Fix these issues in order:');
        
        if (!results.environment) {
            console.log('   1. 🔒 Use HTTPS or localhost for testing');
        }
        if (!results.permissions) {
            console.log('   2. 🔐 Enable notification permissions in browser');
        }
        if (!results.serviceWorker) {
            console.log('   3. ⚙️ Fix service worker registration');
        }
        if (!results.firebaseConfig) {
            console.log('   4. 🔥 Complete Firebase configuration');
        }
        if (!results.fcmToken) {
            console.log('   5. 🎫 Fix FCM token generation');
        }
    }
}

// Auto-run tests when loaded
// Add type declarations for Window extensions
declare global {
  interface Window {
    testPushNotifications: () => Promise<void>;
    testFCMToken: () => Promise<boolean>;
    testLocalNotification: () => boolean;
  }
}

if (typeof window !== 'undefined') {
    // Add to global scope for manual testing
    window.testPushNotifications = runAllTests;
    window.testFCMToken = testFCMToken;
    window.testLocalNotification = testLocalNotification;
    
    // Auto-run after a short delay to ensure page is ready
    setTimeout(runAllTests, 1000);
}

export { runAllTests, testFCMToken, testLocalNotification };
