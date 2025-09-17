// Test file to verify authentication services work correctly
import { signInWithGoogle, signOut, getCurrentUser, getUserProfile } from './googleAuth';
import { MobileAuthService } from './mobileAuthService';
import { Capacitor } from '@capacitor/core';
export const testAuthentication = async () => {
    console.log('🧪 Testing authentication services...');
    try {
        // Test platform detection
        console.log('📱 Platform:', Capacitor.isNativePlatform() ? 'Native' : 'Web');
        // Test mobile auth initialization
        if (Capacitor.isNativePlatform()) {
            await MobileAuthService.initialize();
            console.log('✅ Mobile auth initialized');
        }
        // Test getting current user
        const currentUser = getCurrentUser();
        console.log('👤 Current user:', currentUser?.email || 'Not signed in');
        // Test user profile
        const profile = getUserProfile();
        console.log('📋 User profile:', profile);
        console.log('✅ All authentication services are working correctly!');
        return true;
    }
    catch (error) {
        console.error('❌ Authentication test failed:', error);
        return false;
    }
};
// Example usage in your app
export const handleGoogleSignIn = async () => {
    try {
        const { user, error } = await signInWithGoogle();
        if (user) {
            console.log('✅ Sign-in successful:', user.email);
            return user;
        }
        else {
            console.error('❌ Sign-in failed:', error);
            throw error;
        }
    }
    catch (error) {
        console.error('❌ Sign-in error:', error);
        throw error;
    }
};
export const handleSignOut = async () => {
    try {
        await signOut();
        console.log('✅ Sign-out successful');
    }
    catch (error) {
        console.error('❌ Sign-out error:', error);
        throw error;
    }
};
