// Firebase messaging service worker for background notifications
// Version 1.2.0 - Enhanced notification handling

// Import Firebase libraries
importScripts('https://www.gstatic.com/firebasejs/9.15.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.15.0/firebase-messaging-compat.js');

// Log service worker start
console.log('ECG Learning App Firebase Service Worker Started');

// Initialize Firebase in the service worker
const firebaseConfig = {
  apiKey: "AIzaSyDA_jAATsA4_W98bkoACjaWDNI3Lupyb4I",
  authDomain: "ecgkid-pulsepoint.firebaseapp.com",
  projectId: "ecgkid-pulsepoint",
  storageBucket: "ecgkid-pulsepoint.firebasestorage.app",
  messagingSenderId: "951967187678",
  appId: "1:951967187678:web:2982df3b09e6a64845f84f"
};

firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message:', payload);

  // Get notification data
  const data = payload.data || {};
  const notificationType = data.type || 'default';
  
  // Default notification assets
  let iconPath = '/notification-assets/notification-icon.png';
  let badgePath = '/notification-assets/notification-badge.png';
  
  // Set fallback paths for icons in case the PNGs don't exist
  const iconFallback = '/notification-assets/notification-icon-fallback.svg';
  const badgeFallback = '/notification-assets/notification-badge-fallback.svg';
  
  // Customize notification based on type
  switch(notificationType) {
    case 'achievement':
    case 'reminder':
    case 'progress':
    case 'streak':
    case 'system':
      // Use the same notification icon for all types until custom icons are created
      iconPath = '/notification-assets/notification-icon.png';
      break;
  }
  
  // Create unique tag for notification to prevent duplicates
  const notificationTag = `ecg-notification-${Date.now()}`;
  
  // Prepare notification
  const notificationTitle = payload.notification?.title || 'ECG Learning App';
  const notificationOptions = {
    body: payload.notification?.body || 'You have a new notification',
    icon: iconPath,
    badge: badgePath,
    tag: notificationTag,
    data: payload.data,
    renotify: true, // Always notify even if using same tag
    requireInteraction: true, // Keep notification until user interacts with it
    vibrate: [200, 100, 200], // Vibration pattern
    timestamp: Date.now(),
    actions: [
      {
        action: 'open',
        title: 'Open',
        icon: '/notification-assets/open-icon.png'
      },
      {
        action: 'dismiss',
        title: 'Dismiss',
        icon: '/notification-assets/close-icon.png'
      }
    ]
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('Notification clicked:', event);
  
  // Get notification data
  const notification = event.notification;
  const data = notification.data || {};
  const action = event.action;
  
  // Close the notification
  notification.close();

  // Return early if dismiss action
  if (action === 'dismiss') {
    console.log('User dismissed notification');
    return;
  }

  // Handle different notification types and determine target URL
  let url = '/';

  try {
    if (data) {
      // Process actionUrl first if it exists
      if (data.actionUrl) {
        url = data.actionUrl;
      } 
      // Then fall back to type-based URLs
      else {
        switch(data.type) {
          case 'achievement':
            url = '/?tab=profile&section=achievements';
            break;
          case 'progress':
            url = '/?tab=dashboard&section=progress';
            break;
          case 'streak':
            url = '/?tab=dashboard&section=stats';
            break;
          case 'reminder':
            url = '/?tab=learn';
            break;
          case 'lesson':
            if (data.lessonId) {
              url = `/lesson/${data.lessonId}`;
            } else {
              url = '/?tab=learn';
            }
            break;
          case 'module':
            if (data.moduleId) {
              url = `/module/${data.moduleId}`;
            } else {
              url = '/?tab=learn';
            }
            break;
        }
      }

      // Add notification tracking parameter
      url = addParamToUrl(url, 'notif', 'true');
      
      // Add notification type parameter if available
      if (data.type) {
        url = addParamToUrl(url, 'notifType', data.type);
      }
      
      // Add timestamp parameter
      url = addParamToUrl(url, 'notifTime', Date.now().toString());
    }
  } catch (error) {
    console.error('Error processing notification URL:', error);
    // Use default URL if there's an error
    url = '/';
  }

  // Open the app at the appropriate URL
  event.waitUntil(
    clients.matchAll({ 
      type: 'window',
      includeUncontrolled: true 
    }).then((clientList) => {
      // Try to find an existing window/tab
      for (const client of clientList) {
        const clientUrl = new URL(client.url);
        const targetUrl = new URL(url, self.location.origin);
        
        // If the app is already open at any URL
        if (clientUrl.origin === targetUrl.origin && 'focus' in client) {
          // Focus the client
          client.focus()
            .then((focusedClient) => {
              // Navigate to the specific page if different from current
              if (clientUrl.pathname !== targetUrl.pathname || 
                  clientUrl.search !== targetUrl.search) {
                return focusedClient.navigate(url);
              }
            })
            .catch(err => console.error('Error focusing client:', err));
          return;
        }
      }
      
      // If no existing client, open a new window
      if (clients.openWindow) {
        return clients.openWindow(url);
      }
    }).catch(error => {
      console.error('Error handling notification click:', error);
    })
  );
});

// Helper function to add parameters to URL
function addParamToUrl(url, param, value) {
  const urlObj = new URL(url, self.location.origin);
  urlObj.searchParams.set(param, value);
  return urlObj.pathname + urlObj.search;
}

// Handle notification close events
self.addEventListener('notificationclose', (event) => {
  console.log('Notification closed without clicking:', event.notification);
});

// Service worker installation
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...');
  self.skipWaiting();
});

// Service worker activation
self.addEventListener('activate', (event) => {
  console.log('Service Worker activated');
  return self.clients.claim();
});
