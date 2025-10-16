import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.epulsepoints.app',
  appName: 'E-Pulsepoints',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    allowNavigation: [
      'e-pulsepoints.firebaseapp.com',
      'accounts.google.com',
      'firebase.google.com',
      '*.googleapis.com'
    ]
  },
  android: {
    allowMixedContent: true,
    captureInput: true,
    webContentsDebuggingEnabled: true,
    appendUserAgent: 'E-Pulsepoints/1.0.0',
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

export default config;
