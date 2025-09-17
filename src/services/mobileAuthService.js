import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { Capacitor } from '@capacitor/core';
export class MobileAuthService {
    static initialized = false;
    /**
     * Initialize Firebase Authentication for mobile
     */
    static async initialize() {
        if (this.initialized)
            return;
        if (Capacitor.isNativePlatform()) {
            try {
                // The @capacitor-firebase/authentication plugin initializes automatically
                // No manual configuration needed
                this.initialized = true;
                console.log('✅ Firebase Authentication ready for mobile');
            }
            catch (error) {
                console.error('❌ Failed to initialize Firebase Authentication:', error);
                throw error;
            }
        }
        else {
            this.initialized = true;
            console.log('✅ Web platform detected, skipping mobile auth initialization');
        }
    }
    /**
     * Sign in with Google on mobile devices
     */
    static async signInWithGoogle() {
        try {
            if (!Capacitor.isNativePlatform()) {
                return { user: null, error: 'This method is only available on native platforms' };
            }
            console.log('🚀 Starting Google Sign-In on mobile...');
            // Sign in with Google using Capacitor Firebase plugin
            const result = await FirebaseAuthentication.signInWithGoogle();
            if (result.user) {
                console.log('✅ Google Sign-In successful:', result.user.email);
                return {
                    user: {
                        uid: result.user.uid,
                        email: result.user.email,
                        displayName: result.user.displayName,
                        photoURL: result.user.photoUrl
                    }
                };
            }
            else {
                return { user: null, error: 'No user data received' };
            }
        }
        catch (error) {
            console.error('❌ Mobile Google Sign-In failed:', error);
            return {
                user: null,
                error: error.message || 'Google Sign-In failed'
            };
        }
    }
    /**
     * Sign out user on mobile
     */
    static async signOut() {
        try {
            if (Capacitor.isNativePlatform()) {
                await FirebaseAuthentication.signOut();
                console.log('✅ User signed out successfully');
            }
        }
        catch (error) {
            console.error('❌ Sign out failed:', error);
        }
    }
    /**
     * Get current user on mobile
     */
    static async getCurrentUser() {
        try {
            if (!Capacitor.isNativePlatform()) {
                return { user: null, error: 'Not on native platform' };
            }
            const result = await FirebaseAuthentication.getCurrentUser();
            if (result.user) {
                return {
                    user: {
                        uid: result.user.uid,
                        email: result.user.email,
                        displayName: result.user.displayName,
                        photoURL: result.user.photoUrl
                    }
                };
            }
            return { user: null };
        }
        catch (error) {
            console.error('❌ Failed to get current user:', error);
            return { user: null, error: error.message };
        }
    }
    /**
     * Check if user is currently authenticated
     */
    static async isAuthenticated() {
        try {
            const result = await this.getCurrentUser();
            return result.user !== null;
        }
        catch (error) {
            console.error('❌ Authentication check failed:', error);
            return false;
        }
    }
}
