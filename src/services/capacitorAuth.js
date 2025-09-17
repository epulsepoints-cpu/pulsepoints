import { Capacitor } from '@capacitor/core';
import { GoogleAuthProvider, signInWithCredential, signOut as firebaseSignOut, onAuthStateChanged as firebaseOnAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
export class CapacitorAuthService {
    static instance;
    isInitialized = false;
    // Google OAuth client ID from Firebase config
    CLIENT_ID = '951967187678-sq7bvgpuh186t3uk4dkcnoek9nm93f5r.apps.googleusercontent.com';
    static getInstance() {
        if (!CapacitorAuthService.instance) {
            CapacitorAuthService.instance = new CapacitorAuthService();
        }
        return CapacitorAuthService.instance;
    }
    async initialize() {
        if (this.isInitialized)
            return;
        try {
            if (Capacitor.isNativePlatform()) {
                // Initialize Google Auth plugin for native platforms
                const { GoogleAuth } = Capacitor.Plugins;
                await GoogleAuth.initialize({
                    clientId: this.CLIENT_ID,
                    scopes: ['profile', 'email'],
                    grantOfflineAccess: true
                });
                console.log('✅ Capacitor GoogleAuth initialized for native platform');
            }
            else {
                console.log('✅ Web platform detected, using Firebase Auth directly');
            }
            this.isInitialized = true;
        }
        catch (error) {
            console.error('❌ Failed to initialize CapacitorAuth:', error);
            throw error;
        }
    }
    async signInWithGoogle() {
        try {
            await this.initialize();
            if (Capacitor.isNativePlatform()) {
                return await this.nativeGoogleSignIn();
            }
            else {
                return await this.webGoogleSignIn();
            }
        }
        catch (error) {
            console.error('❌ Google sign-in failed:', error);
            return { user: null, error };
        }
    }
    async nativeGoogleSignIn() {
        try {
            const { GoogleAuth } = Capacitor.Plugins;
            // Sign in with Google using the native plugin
            const googleUser = await GoogleAuth.signIn();
            console.log('✅ Native Google sign-in successful:', googleUser.user.email);
            // Create Firebase credential from Google tokens
            const credential = GoogleAuthProvider.credential(googleUser.authentication.idToken, googleUser.authentication.accessToken);
            // Sign in to Firebase with the Google credential
            const userCredential = await signInWithCredential(auth, credential);
            console.log('✅ Firebase authentication successful:', userCredential.user.email);
            let isNew = false;
            if (userCredential && 'additionalUserInfo' in userCredential && userCredential.additionalUserInfo) {
                // Type assertion to access isNewUser
                isNew = userCredential.additionalUserInfo.isNewUser || false;
            }
            return {
                user: userCredential.user,
                error: null,
                isNew
            };
        }
        catch (error) {
            console.error('❌ Native Google sign-in error:', error);
            throw error;
        }
    }
    async webGoogleSignIn() {
        try {
            // For web, we'll use Firebase Auth directly with popup
            const { signInWithPopup } = await import('firebase/auth');
            const provider = new GoogleAuthProvider();
            // Add scopes and custom parameters
            provider.addScope('profile');
            provider.addScope('email');
            provider.setCustomParameters({
                prompt: 'select_account'
            });
            const result = await signInWithPopup(auth, provider);
            console.log('✅ Web Google sign-in successful:', result.user.email);
            let isNew = false;
            if (result && 'additionalUserInfo' in result && result.additionalUserInfo) {
                isNew = result.additionalUserInfo.isNewUser || false;
            }
            return {
                user: result.user,
                error: null,
                isNew
            };
        }
        catch (error) {
            console.error('❌ Web Google sign-in error:', error);
            throw error;
        }
    }
    async signOut() {
        try {
            // Sign out from Firebase
            await firebaseSignOut(auth);
            // Sign out from Google on native platforms
            if (Capacitor.isNativePlatform()) {
                const { GoogleAuth } = Capacitor.Plugins;
                await GoogleAuth.signOut();
            }
            console.log('✅ Sign-out successful');
            return { error: null };
        }
        catch (error) {
            console.error('❌ Sign-out error:', error);
            return { error };
        }
    }
    getCurrentUser() {
        return auth.currentUser;
    }
    onAuthStateChanged(callback) {
        return firebaseOnAuthStateChanged(auth, callback);
    }
    isSignedIn() {
        return !!auth.currentUser;
    }
    // Helper method to check if running on native platform
    isNativePlatform() {
        return Capacitor.isNativePlatform();
    }
    // Helper method to get user profile info safely
    getUserProfile() {
        const user = this.getCurrentUser();
        if (!user)
            return null;
        return {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL
        };
    }
}
// Export singleton instance
export const capacitorAuth = CapacitorAuthService.getInstance();
// Export convenience functions
export const initializeAuth = () => capacitorAuth.initialize();
export const signInWithGoogle = () => capacitorAuth.signInWithGoogle();
export const signOut = () => capacitorAuth.signOut();
export const getCurrentUser = () => capacitorAuth.getCurrentUser();
export const onAuthStateChanged = (callback) => capacitorAuth.onAuthStateChanged(callback);
export const isSignedIn = () => capacitorAuth.isSignedIn();
export const getUserProfile = () => capacitorAuth.getUserProfile();
