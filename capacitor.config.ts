import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ecgkid.pulsepoints',
  appName: 'ECGkid PulsePoints',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    allowNavigation: [
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
    appendUserAgent: 'ECGkidApp/1.0.0',
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
