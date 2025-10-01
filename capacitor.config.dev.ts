import type { CapacitorConfig } from '@capacitor/cli';

// 🚀 DEVELOPMENT Configuration - Use local dev server
const devConfig: CapacitorConfig = {
  appId: 'com.ecgkid.pulsepoints',
  appName: 'ECGkid PulsePoints (Dev)',
  webDir: 'dist',
  server: {
    url: 'http://localhost:8080',
    cleartext: true,
    androidScheme: 'http',
    allowNavigation: [
      'localhost:8080',
      'ecgkid-pulsepoint.firebaseapp.com',
      'accounts.google.com',
      'firebase.google.com',
      '*.googleapis.com'
    ]
  },
  android: {
    allowMixedContent: true,
    captureInput: true,
    webContentsDebuggingEnabled: true,
    appendUserAgent: 'ECGkidApp/1.0.0-dev',
    backgroundColor: '#ffffff',
    loggingBehavior: 'debug'
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

export default devConfig;