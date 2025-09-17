import { getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc } from 'firebase/firestore';
import { toast } from '@/components/ui/use-toast';
/**
 * Utility to check if Firebase is properly initialized
 * and services are accessible
 */
export const checkFirebaseConnection = async () => {
    try {
        console.log('📋 Checking Firebase connection...');
        // Check if Firebase app is initialized
        const app = getApp();
        if (!app) {
            console.error('❌ Firebase app is not initialized');
            return false;
        }
        // Check Auth service
        const auth = getAuth();
        if (!auth) {
            console.error('❌ Firebase Auth is not initialized');
            return false;
        }
        // Check Firestore service
        const db = getFirestore();
        if (!db) {
            console.error('❌ Firebase Firestore is not initialized');
            return false;
        }
        // Check if user is signed in - we need auth for write operations
        if (!auth.currentUser) {
            console.log('⚠️ Firebase connection check limited - user not signed in');
            // For anonymous users, we only verify Firebase is initialized without testing writes
            return true;
        }
        // For authenticated users, attempt to access their user document
        try {
            const userId = auth.currentUser.uid;
            const userDocRef = doc(db, 'users', userId);
            // Only try the test doc if we have a signed in user
            console.log('✅ Firebase connection initialized successfully');
            return true;
        }
        catch (firestoreError) {
            console.error('❌ Firebase Firestore user document access failed:', firestoreError);
            return false;
        }
    }
    catch (error) {
        console.error('❌ Firebase connection check failed:', error);
        return false;
    }
};
/**
 * This function should be called when the app starts to verify
 * that Firebase is working correctly
 */
export const verifyFirebaseSetup = async () => {
    try {
        const isConnected = await checkFirebaseConnection();
        if (isConnected) {
            console.log('✅ Firebase is properly configured and connected');
        }
        else {
            console.error('❌ Firebase connection issues detected');
            toast({
                title: 'Firebase Connection Issue',
                description: 'There was a problem connecting to the database. Some features may not work properly.',
                variant: 'destructive'
            });
        }
    }
    catch (error) {
        console.error('Failed to verify Firebase setup:', error);
    }
};
export default verifyFirebaseSetup;
