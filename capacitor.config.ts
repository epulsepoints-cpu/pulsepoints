import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ecgkid.pulsepoints',
  appName: 'ECGkid PulsePoints',
  webDir: 'dist',
  server: {
    // � HYBRID: Local app with remote lesson content
    // Remove URL to use local build, but allow navigation to Vercel for lessons
    cleartext: true,
    androidScheme: 'https',
    allowNavigation: [
      'app.ecgkid.com',
      'ecgkid-pulsepoint.firebaseapp.com',
      'accounts.google.com',
      'firebase.google.com',
      '*.googleapis.com',
      '*.vercel.app',
      '*.githubusercontent.com'
    ],
    // 🚀 PERFORMANCE: Enable caching for remote lesson content
    hostname: 'localhost',
    // 🔧 NETWORK: Optimize for hybrid lesson loading
    errorPath: '/error.html'
  },
  android: {
    allowMixedContent: true,
    webContentsDebuggingEnabled: true,
    appendUserAgent: 'ECGkidApp/1.0.0',
    backgroundColor: '#ffffff'
  },
  plugins: {
    FirebaseAuthentication: {
      skipNativeAuth: false,
      providers: ['google.com']
    },
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert']
    },
    SplashScreen: {
      launchShowDuration: 0
    },
    StatusBar: {
      style: 'default'
    }
  }
};

export default config;
