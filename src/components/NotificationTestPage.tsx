import React, { useState, useEffect } from 'react';
import { unifiedNotificationService } from '@/services/unifiedNotificationService';

const NotificationTestPage: React.FC = () => {
  const [status, setStatus] = useState<string>('');
  const [logs, setLogs] = useState<string[]>([]);
  const [fcmToken, setFcmToken] = useState<string | null>(null);

  const addLog = (message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    const logMessage = `[${timestamp}] ${message}`;
    setLogs(prev => [...prev, logMessage]);
    console.log(logMessage);
  };

  useEffect(() => {
    // Initialize logging
    addLog('🔍 Notification Test Page loaded');
    checkNotificationSupport();
  }, []);

  const checkNotificationSupport = () => {
    addLog('🔍 Checking notification support...');
    
    // Environment checks
    addLog(`🌐 HTTPS/Localhost: ${location.protocol === 'https:' || location.hostname === 'localhost' ? '✅' : '❌'}`);
    addLog(`⚙️ Service Worker: ${'serviceWorker' in navigator ? '✅' : '❌'}`);
    addLog(`🔔 Notification API: ${'Notification' in window ? '✅' : '❌'}`);
    addLog(`📱 Push Manager: ${'PushManager' in window ? '✅' : '❌'}`);
    addLog(`🎯 Current permission: ${Notification.permission}`);
    
    // Firebase config check
    const hasApiKey = !!import.meta.env.VITE_FIREBASE_API_KEY;
    const hasVapidKey = !!import.meta.env.VITE_FIREBASE_VAPID_KEY;
    addLog(`🔥 Firebase API Key: ${hasApiKey ? '✅' : '❌'}`);
    addLog(`🔑 VAPID Key: ${hasVapidKey ? '✅' : '❌'}`);
  };

  const checkPermissionStatus = () => {
    addLog('🔍 Checking current permission status...');
    const permission = Notification.permission;
    addLog(`🎯 Current permission: ${permission}`);
    
    switch (permission) {
      case 'granted':
        addLog('✅ Notifications are ALLOWED - ready to test!');
        setStatus('✅ Permission granted');
        break;
      case 'denied':
        addLog('🚨 Notifications are BLOCKED - recovery needed');
        addLog('💡 Follow the red instructions above to enable notifications');
        setStatus('🚨 Permission denied');
        break;
      case 'default':
        addLog('⚠️ Permission not yet requested');
        setStatus('⚠️ Permission pending');
        break;
    }
  };

  const testBasicNotification = async () => {
    setStatus('Testing basic notification...');
    addLog('🧪 Testing basic notification...');
    
    try {
      const currentPermission = Notification.permission;
      addLog(`🎯 Current permission: ${currentPermission}`);
      
      if (currentPermission === 'denied') {
        addLog('🚨 PERMISSION DENIED - Manual recovery required');
        addLog('');
        addLog('📋 HOW TO FIX:');
        addLog('1. 🔒 Click the lock icon in your browser address bar');
        addLog('2. 🔔 Change Notifications from "Block" to "Allow"');
        addLog('3. 🔄 Refresh this page');
        addLog('4. 🧪 Try the test again');
        addLog('');
        addLog('Alternative: Clear browser data for this site and try again');
        setStatus('🚨 Permission denied - see recovery steps above');
        return;
      }
      
      if (currentPermission !== 'granted') {
        addLog('🔐 Requesting permission...');
        const permission = await Notification.requestPermission();
        addLog(`🔐 Permission result: ${permission}`);
        
        if (permission !== 'granted') {
          addLog('❌ Permission denied - cannot test notification');
          addLog('💡 Try clicking the lock icon in address bar to enable notifications');
          setStatus('❌ Permission denied');
          return;
        }
      }
      
      addLog('✅ Permission granted, creating test notification...');
      
      const notification = new Notification('🧠 ECGkid PulsePoints Test', {
        body: 'This is a basic test notification!',
        icon: '/notification-assets/notification-icon.png',
        badge: '/notification-assets/notification-badge.png',
        tag: 'test-basic',
        requireInteraction: true // Keep notification visible
      });
      
      notification.onshow = () => {
        addLog('✅ Basic notification displayed successfully!');
        setStatus('✅ Basic notification works');
      };
      
      notification.onerror = (error) => {
        addLog(`❌ Basic notification error: ${error}`);
        setStatus('❌ Basic notification failed');
      };
      
      notification.onclick = () => {
        addLog('✅ Basic notification clicked!');
        notification.close();
      };
      
      // Auto close after 10 seconds (longer for testing)
      setTimeout(() => {
        notification.close();
        addLog('🔄 Test notification auto-closed');
      }, 10000);
      
    } catch (error) {
      addLog(`❌ Basic notification test failed: ${error.message}`);
      setStatus('❌ Basic notification failed');
    }
  };

  const testServiceWorker = async () => {
    setStatus('Testing service worker...');
    addLog('🧪 Testing service worker...');
    
    try {
      if (!('serviceWorker' in navigator)) {
        addLog('❌ Service Worker not supported');
        setStatus('❌ Service Worker not supported');
        return;
      }
      
      const registrations = await navigator.serviceWorker.getRegistrations();
      addLog(`📊 Found ${registrations.length} service worker(s)`);
      
      registrations.forEach((reg, index) => {
        addLog(`  ${index + 1}. Scope: ${reg.scope}`);
        addLog(`     Active: ${reg.active?.state || 'none'}`);
      });
      
      // Check Firebase messaging SW specifically
      const swResponse = await fetch('/firebase-messaging-sw.js');
      addLog(`📁 Firebase SW file: ${swResponse.ok ? '✅ Found' : '❌ Missing'}`);
      
      if (!swResponse.ok) {
        addLog('💡 Firebase service worker file is missing from /public folder');
        setStatus('❌ Firebase SW missing');
        return;
      }
      
      // Check if SW is controlling the page
      addLog(`🎛️ SW controlling page: ${navigator.serviceWorker.controller ? '✅' : '❌'}`);
      
      setStatus('✅ Service worker OK');
      
    } catch (error) {
      addLog(`❌ Service worker test failed: ${error.message}`);
      setStatus('❌ Service worker failed');
    }
  };

  const testFCMToken = async () => {
    setStatus('Testing FCM token...');
    addLog('🧪 Testing FCM token generation...');
    
    try {
      // Initialize notification service if not already done
      const initialized = await unifiedNotificationService.initialize();
      if (!initialized) {
        addLog('❌ Failed to initialize notification service');
        setStatus('❌ Service init failed');
        return;
      }
      
      addLog('✅ Notification service initialized');
      
      // Request FCM token
      const token = await unifiedNotificationService.requestFCMToken();
      
      if (token) {
        addLog(`✅ FCM token generated successfully!`);
        addLog(`🎫 Token preview: ${token.substring(0, 30)}...`);
        setFcmToken(token);
        setStatus('✅ FCM token OK');
      } else {
        addLog('❌ Failed to generate FCM token');
        setStatus('❌ FCM token failed');
      }
      
    } catch (error) {
      addLog(`❌ FCM token test failed: ${error.message}`);
      setStatus('❌ FCM token failed');
    }
  };

  const testUnifiedService = async () => {
    setStatus('Testing unified service...');
    addLog('🧪 Testing unified notification service...');
    
    try {
      // Test service initialization
      const initialized = await unifiedNotificationService.initialize();
      addLog(`🔧 Service initialized: ${initialized ? '✅' : '❌'}`);
      
      if (!initialized) {
        addLog('❌ Cannot proceed - service not initialized');
        setStatus('❌ Service failed');
        return;
      }
      
      // Test creating a notification (this tests Firestore integration)
      const testNotification = {
        userId: 'test-user-123',
        title: '🧪 Test Notification',
        body: 'This is a test from the unified notification service!',
        type: 'system' as const,
        category: 'info' as const,
        priority: 'normal' as const
      };
      
      const notificationId = await unifiedNotificationService.createNotification(testNotification);
      
      if (notificationId) {
        addLog('✅ Unified service notification created successfully!');
        addLog(`📝 Notification ID: ${notificationId}`);
        setStatus('✅ Unified service OK');
      } else {
        addLog('❌ Failed to create notification via unified service');
        setStatus('❌ Unified service failed');
      }
      
    } catch (error) {
      addLog(`❌ Unified service test failed: ${error.message}`);
      setStatus('❌ Unified service failed');
    }
  };

  const runAllTests = async () => {
    setStatus('Running all tests...');
    setLogs([]);
    addLog('🚀 Starting comprehensive notification tests...');
    
    await checkNotificationSupport();
    await testBasicNotification();
    await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
    await testServiceWorker();
    await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
    await testFCMToken();
    await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
    await testUnifiedService();
    
    addLog('🏁 All tests completed!');
    setStatus('✅ Tests completed');
  };

  const clearLogs = () => {
    setLogs([]);
    setStatus('');
    setFcmToken(null);
    addLog('🗑️ Logs cleared');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            🔍 Push Notification Test Suite
          </h1>
          <p className="text-gray-600 mb-4">
            Test your ECGkid PulsePoints push notification system to identify and fix issues.
          </p>
          
          {status && (
            <div className={`p-3 rounded-md mb-4 ${
              status.includes('✅') 
                ? 'bg-green-100 text-green-800' 
                : status.includes('❌') || status.includes('🚨')
                ? 'bg-red-100 text-red-800'
                : 'bg-blue-100 text-blue-800'
            }`}>
              <strong>Status:</strong> {status}
            </div>
          )}

          {Notification.permission === 'denied' && (
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-red-800 mb-3">🚨 Permission Recovery Required</h2>
              <p className="text-red-700 mb-4">
                Notifications are currently blocked. Follow these steps to enable them:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-md border border-red-200">
                  <h3 className="font-bold text-red-800 mb-2">🌐 Chrome/Edge Method:</h3>
                  <ol className="text-sm text-red-700 space-y-1">
                    <li>1. Click the 🔒 <strong>lock icon</strong> in address bar</li>
                    <li>2. Click <strong>"Notifications"</strong> dropdown</li>
                    <li>3. Select <strong>"Allow"</strong></li>
                    <li>4. <strong>Refresh</strong> this page</li>
                  </ol>
                </div>
                
                <div className="bg-white p-4 rounded-md border border-red-200">
                  <h3 className="font-bold text-red-800 mb-2">🦊 Firefox Method:</h3>
                  <ol className="text-sm text-red-700 space-y-1">
                    <li>1. Click the <strong>shield icon</strong> in address bar</li>
                    <li>2. Click <strong>"Allow"</strong> next to notifications</li>
                    <li>3. <strong>Refresh</strong> this page</li>
                  </ol>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-yellow-100 border border-yellow-300 rounded">
                <p className="text-sm text-yellow-800">
                  <strong>💡 Tip:</strong> If you don't see notification options, try opening a new incognito/private window and testing there first.
                </p>
              </div>
              
              <button
                onClick={() => window.location.reload()}
                className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
              >
                🔄 Refresh Page After Fixing
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <button
            onClick={checkPermissionStatus}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md"
          >
            🔍 Check Permission
          </button>
          
          <button
            onClick={testBasicNotification}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            🔔 Test Basic Notification
          </button>
          
          <button
            onClick={testServiceWorker}
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md"
          >
            ⚙️ Test Service Worker
          </button>
          
          <button
            onClick={testFCMToken}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
          >
            🎫 Test FCM Token
          </button>
          
          <button
            onClick={testUnifiedService}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md"
          >
            🎯 Test Unified Service
          </button>
          
          <button
            onClick={runAllTests}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
          >
            🚀 Run All Tests
          </button>
          
          <button
            onClick={clearLogs}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
          >
            🗑️ Clear Logs
          </button>
          
          <button
            onClick={() => window.location.reload()}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md"
          >
            🔄 Refresh Page
          </button>
        </div>

        {fcmToken && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="font-bold text-blue-800 mb-2">🎫 FCM Token Generated:</h3>
            <div className="bg-white p-2 rounded text-xs font-mono break-all">
              {fcmToken}
            </div>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md">
          <div className="bg-gray-800 text-white px-4 py-2 rounded-t-lg">
            <h3 className="font-bold">📋 Test Logs</h3>
          </div>
          <div className="p-4 h-96 overflow-y-auto bg-gray-900 text-green-400 font-mono text-sm rounded-b-lg">
            {logs.length === 0 ? (
              <div className="text-gray-500">No logs yet. Click a test button to start...</div>
            ) : (
              logs.map((log, index) => (
                <div key={index} className="mb-1">{log}</div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationTestPage;
