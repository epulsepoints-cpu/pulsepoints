import { GoogleAuthProvider, signInWithPopup, getRedirectResult, signOut as firebaseSignOut, onAuthStateChanged as firebaseOnAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { Capacitor } from '@capacitor/core';
import { MobileAuthService } from './mobileAuthService';
const provider = new GoogleAuthProvider();
// Force select account prompt to always appear
provider.setCustomParameters({
    prompt: 'select_account'
});
// Initialize mobile auth service
const initializeMobileAuth = async () => {
    if (Capacitor.isNativePlatform()) {
        try {
            await MobileAuthService.initialize();
        }
        catch (error) {
            console.error('Failed to initialize mobile auth:', error);
        }
    }
};
// Auto-initialize
initializeMobileAuth();
// Sign in with Google
export const signInWithGoogle = async () => {
    try {
        // Use native mobile auth on Capacitor platforms
        if (Capacitor.isNativePlatform()) {
            console.log('🎯 Using native mobile authentication');
            return await MobileAuthService.signInWithGoogle();
        }
        // Use popup auth flow for web (default)
        console.log('📱 Using popup authentication for web');
        const result = await signInWithPopup(auth, provider);
        return { user: result.user, error: null };
    }
    catch (error) {
        console.error('❌ Error signing in with Google:', error);
        return { user: null, error };
    }
};
// Get result after redirect (only for web)
export const getGoogleRedirectResult = async () => {
    try {
        const result = await getRedirectResult(auth);
        return { user: result?.user || null, error: null };
    }
    catch (error) {
        console.error('Error getting redirect result:', error);
        return { user: null, error };
    }
};
// Sign out
export const signOut = async () => {
    try {
        // Use native sign out on Capacitor platforms
        if (Capacitor.isNativePlatform()) {
            await MobileAuthService.signOut();
        }
        else {
            await firebaseSignOut(auth);
        }
        return { error: null };
    }
    catch (error) {
        console.error('❌ Error signing out:', error);
        return { error };
    }
};
// Get current user
export const getCurrentUser = () => {
    return auth.currentUser;
};
// Check if user is signed in
export const isSignedIn = () => {
    return !!auth.currentUser;
};
// Listen to auth state changes
export const onAuthStateChanged = (callback) => {
    return firebaseOnAuthStateChanged(auth, callback);
};
// Get user profile safely
export const getUserProfile = () => {
    const user = getCurrentUser();
    if (!user)
        return null;
    return {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified
    };
};
