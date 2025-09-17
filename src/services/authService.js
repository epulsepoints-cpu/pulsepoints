import { Capacitor } from '@capacitor/core';
import { getAuth, GoogleAuthProvider, signInWithCredential, signInWithPopup } from 'firebase/auth';
// Dynamic import for Google Auth plugin to handle cases where it's not installed
let FirebaseAuthentication = null;
// Initialize Google Auth on app start
export const initializeGoogleAuth = async () => {
    if (Capacitor.isNativePlatform()) {
        try {
            // Try to import the Capacitor Firebase Authentication plugin (which you already have)
            const firebaseAuthModule = await import('@capacitor-firebase/authentication').catch(() => null);
            if (firebaseAuthModule) {
                FirebaseAuthentication = firebaseAuthModule.FirebaseAuthentication;
                console.log('✅ Firebase Authentication plugin initialized for native platform');
            }
            else {
                console.warn('⚠️ Firebase Authentication plugin not available');
                FirebaseAuthentication = null;
            }
        }
        catch (error) {
            console.warn('⚠️ Firebase Authentication plugin error:', error);
            FirebaseAuthentication = null;
        }
    }
    else {
        console.log('🌐 Running on web platform - using popup sign-in');
    }
};
export const signInWithGoogle = async () => {
    try {
        if (Capacitor.isNativePlatform() && FirebaseAuthentication) {
            console.log('📱 Attempting native Firebase Google sign-in...');
            // Native mobile login using Firebase Authentication plugin
            const result = await FirebaseAuthentication.signInWithGoogle();
            console.log('📱 Native Firebase sign-in result:', result);
            if (!result.credential?.idToken) {
                throw new Error('No ID token received from Firebase Auth');
            }
            const credential = GoogleAuthProvider.credential(result.credential.idToken, result.credential.accessToken);
            const auth = getAuth();
            const userCredential = await signInWithCredential(auth, credential);
            console.log('✅ Firebase sign-in successful:', userCredential.user.email);
            return { user: userCredential.user, error: null };
        }
        else {
            console.log('🌐 Attempting web Google sign-in...');
            // Web login (existing code)
            const auth = getAuth();
            const provider = new GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            const result = await signInWithPopup(auth, provider);
            console.log('✅ Web sign-in successful:', result.user.email);
            return { user: result.user, error: null };
        }
    }
    catch (error) {
        console.error('❌ Google sign-in error:', error);
        // Provide user-friendly error messages
        let errorMessage = 'Google sign-in failed. Please try again.';
        if (error.code === 'auth/popup-closed-by-user') {
            errorMessage = 'Sign-in was cancelled. Please try again.';
        }
        else if (error.code === 'auth/network-request-failed') {
            errorMessage = 'Network error. Please check your connection and try again.';
        }
        else if (error.message?.includes('No OAuth client')) {
            errorMessage = 'Google authentication not properly configured. Please contact support.';
        }
        else if (error.message?.includes('SHA-1')) {
            errorMessage = 'App configuration issue. Please update the app or contact support.';
        }
        else if (Capacitor.isNativePlatform() && !FirebaseAuthentication) {
            errorMessage = 'Native Google sign-in not available. Using web fallback.';
            // Try web fallback on native if plugin not available
            try {
                const auth = getAuth();
                const provider = new GoogleAuthProvider();
                provider.addScope('profile');
                provider.addScope('email');
                const result = await signInWithPopup(auth, provider);
                return { user: result.user, error: null };
            }
            catch (fallbackError) {
                console.error('Web fallback also failed:', fallbackError);
            }
        }
        return { user: null, error: errorMessage };
    }
};
// Check if Google Auth is available
export const isGoogleAuthAvailable = async () => {
    try {
        if (Capacitor.isNativePlatform()) {
            return FirebaseAuthentication !== null;
        }
        else {
            // On web, Google Auth is always available
            return true;
        }
    }
    catch (error) {
        console.error('Google Auth not available:', error);
        return false;
    }
};
// Sign out from Google Auth
export const signOutFromGoogle = async () => {
    try {
        if (Capacitor.isNativePlatform() && FirebaseAuthentication) {
            await FirebaseAuthentication.signOut();
            console.log('✅ Firebase Auth native sign-out successful');
        }
        // Firebase sign-out is handled elsewhere
    }
    catch (error) {
        console.error('❌ Firebase Auth sign-out error:', error);
    }
};
