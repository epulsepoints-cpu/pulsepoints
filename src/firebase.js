import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, updateDoc, collection, query, limit, getDocs } from 'firebase/firestore';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { getAnalytics } from 'firebase/analytics';
// Firebase Configuration with fallback values
const getFirebaseConfig = () => {
    // First try environment variables, then fallback to hardcoded values
    const config = {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDA_jAATsA4_W98bkoACjaWDNI3Lupyb4I",
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "ecgkid-pulsepoint.firebaseapp.com",
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "ecgkid-pulsepoint",
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "ecgkid-pulsepoint.firebasestorage.app",
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "951967187678",
        appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:951967187678:web:2982df3b09e6a64845f84f",
        measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-KZ066Y7VDC"
    };
    // Log configuration source for debugging
    if (import.meta.env.VITE_FIREBASE_API_KEY) {
        console.log('🔧 Using Firebase config from environment variables');
    }
    else {
        console.log('🔧 Using Firebase config from fallback values');
    }
    // Validate configuration
    if (!config.apiKey || !config.projectId) {
        throw new Error('❌ Firebase configuration is incomplete');
    }
    return config;
};
// Initialize Firebase App
let app;
let auth;
let db;
let messaging = null;
let analytics = null;
const initializeFirebase = () => {
    try {
        // Get or create Firebase app
        if (getApps().length === 0) {
            const config = getFirebaseConfig();
            console.log('🚀 Initializing Firebase with project:', config.projectId);
            app = initializeApp(config);
        }
        else {
            app = getApp();
            console.log('♻️ Using existing Firebase app');
        }
        // Initialize Auth
        auth = getAuth(app);
        console.log('🔐 Firebase Auth initialized');
        // Initialize Firestore
        db = getFirestore(app);
        console.log('🗄️ Firestore initialized');
        // Initialize Messaging (with error handling)
        if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
            try {
                messaging = getMessaging(app);
                console.log('📬 Firebase Messaging initialized');
            }
            catch (error) {
                console.warn('⚠️ Firebase Messaging not supported:', error);
                messaging = null;
            }
        }
        // Initialize Analytics (with error handling)
        if (typeof window !== 'undefined') {
            try {
                analytics = getAnalytics(app);
                console.log('📊 Firebase Analytics initialized');
            }
            catch (error) {
                console.warn('⚠️ Firebase Analytics not supported:', error);
                analytics = null;
            }
        }
        console.log('✅ Firebase initialization complete');
        return true;
    }
    catch (error) {
        console.error('❌ Firebase initialization failed:', error);
        throw error;
    }
};
// Initialize Firebase immediately
initializeFirebase();
// Export initialized services
export { app, auth, db, messaging, analytics };
// Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: 'select_account'
});
// Utility Functions
export const testFirebaseConnection = async () => {
    try {
        console.log('🔄 Testing Firebase connection...');
        // Test Firestore connection by accessing the ecgTasks collection (public read)
        const tasksRef = collection(db, 'ecgTasks');
        const q = query(tasksRef, limit(1));
        await getDocs(q);
        console.log('✅ Firebase connection successful');
        return true;
    }
    catch (error) {
        console.error('❌ Firebase connection failed:', error);
        // If permissions error, try a simpler approach
        if (error.code === 'permission-denied') {
            console.log('🔄 Trying basic connection test...');
            try {
                // Just check if we can initialize Firebase services
                if (db && auth) {
                    console.log('✅ Firebase services initialized (limited permissions)');
                    return true;
                }
            }
            catch (basicError) {
                console.error('❌ Basic Firebase test failed:', basicError);
            }
        }
        return false;
    }
};
// Enhanced User Data Functions
export const getUserData = async (userId) => {
    try {
        if (!userId) {
            throw new Error('User ID is required');
        }
        const userRef = doc(db, 'users', userId);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
            console.log('📖 User data retrieved successfully');
            return userSnap.data();
        }
        else {
            console.log('👤 No user document found for:', userId);
            return null;
        }
    }
    catch (error) {
        console.error('❌ Error getting user data:', error);
        throw error;
    }
};
export const createUserIfNotExists = async (userId, userData) => {
    try {
        if (!userId) {
            throw new Error('User ID is required');
        }
        const userRef = doc(db, 'users', userId);
        const userDoc = await getDoc(userRef);
        if (!userDoc.exists()) {
            const newUserData = {
                ...userData,
                username: userData.username || userData.name || 'User',
                streakCount: userData.streakCount || 0,
                totalPoints: userData.totalPoints || 0,
                xp: userData.xp || 0,
                gems: userData.gems || 50,
                createdAt: new Date().toISOString(),
                lastCompletionDate: null,
                rank: 'Intern'
            };
            await setDoc(userRef, newUserData);
            console.log('👤 New user created successfully');
            return newUserData;
        }
        else {
            console.log('👤 User already exists');
            return userDoc.data();
        }
    }
    catch (error) {
        console.error('❌ Error creating user:', error);
        throw error;
    }
};
export const updateUserStreak = async (userId, streakData) => {
    try {
        if (!userId) {
            throw new Error('User ID is required');
        }
        const userRef = doc(db, 'users', userId);
        await updateDoc(userRef, {
            ...streakData,
            updatedAt: new Date().toISOString()
        });
        console.log('📈 User streak updated successfully');
    }
    catch (error) {
        console.error('❌ Error updating user streak:', error);
        throw error;
    }
};
// Enhanced Authentication Functions
export const signInWithGoogle = async () => {
    try {
        console.log('🔐 Attempting Google sign-in...');
        if (!auth) {
            throw new Error('Firebase Auth not initialized');
        }
        // Use the new native auth service
        const { signInWithGoogle: nativeSignIn } = await import('./services/authService');
        const result = await nativeSignIn();
        if (result.error) {
            return { user: null, userData: null, error: result.error };
        }
        const user = result.user;
        if (!user) {
            throw new Error('No user returned from Google sign-in');
        }
        console.log('✅ Google sign-in successful:', user.uid);
        // Create or update user document
        const userData = await createUserIfNotExists(user.uid, {
            name: user.displayName || 'User',
            email: user.email || '',
            username: user.displayName || 'User'
        });
        return { user, userData, error: null };
    }
    catch (error) {
        console.error('❌ Google sign-in error:', error);
        return { user: null, userData: null, error: handleFirebaseError(error) };
    }
};
export const signInWithEmail = async (email, password) => {
    try {
        console.log('🔐 Attempting email sign-in...');
        if (!auth) {
            throw new Error('Firebase Auth not initialized');
        }
        const result = await signInWithEmailAndPassword(auth, email, password);
        const user = result.user;
        console.log('✅ Email sign-in successful:', user.uid);
        // Get existing user data
        const userData = await getUserData(user.uid);
        return { user, userData, error: null };
    }
    catch (error) {
        console.error('❌ Email sign-in error:', error);
        return { user: null, userData: null, error: handleFirebaseError(error) };
    }
};
export const signUpWithEmail = async (email, password, displayName) => {
    try {
        console.log('🔐 Attempting email sign-up...');
        if (!auth) {
            throw new Error('Firebase Auth not initialized');
        }
        const result = await createUserWithEmailAndPassword(auth, email, password);
        const user = result.user;
        // Update user profile
        await updateProfile(user, { displayName });
        console.log('✅ Email sign-up successful:', user.uid);
        // Create user document
        const userData = await createUserIfNotExists(user.uid, {
            name: displayName,
            email: email,
            username: displayName
        });
        return { user, userData, error: null };
    }
    catch (error) {
        console.error('❌ Email sign-up error:', error);
        return { user: null, userData: null, error: handleFirebaseError(error) };
    }
};
export const signOutUser = async () => {
    try {
        if (!auth) {
            throw new Error('Firebase Auth not initialized');
        }
        await signOut(auth);
        console.log('✅ Sign-out successful');
        return { success: true, error: null };
    }
    catch (error) {
        console.error('❌ Sign-out error:', error);
        return { success: false, error: handleFirebaseError(error) };
    }
};
// Enhanced Error Handling
export const handleFirebaseError = (error) => {
    console.error('🔥 Firebase Error Details:', {
        code: error.code,
        message: error.message,
        stack: error.stack
    });
    // Handle network errors first
    if (!navigator.onLine) {
        return 'No internet connection. Please check your network and try again.';
    }
    switch (error.code) {
        case 'auth/user-not-found':
            return 'No account found with this email. Please check your email or sign up.';
        case 'auth/wrong-password':
            return 'Incorrect password. Please try again.';
        case 'auth/invalid-email':
            return 'Invalid email address format.';
        case 'auth/user-disabled':
            return 'This account has been disabled. Please contact support.';
        case 'auth/too-many-requests':
            return 'Too many failed attempts. Please wait a few minutes and try again.';
        case 'auth/network-request-failed':
            return 'Network error. Please check your internet connection.';
        case 'auth/popup-closed-by-user':
            return 'Sign-in was cancelled. Please try again.';
        case 'auth/popup-blocked':
            return 'Popup was blocked. Please allow popups for this site.';
        case 'permission-denied':
            return 'Permission denied. Please try logging in again.';
        case 'unavailable':
            return 'Service temporarily unavailable. Please try again in a moment.';
        case 'unauthenticated':
            return 'Authentication required. Please sign in.';
        default:
            return error.message || 'An unexpected error occurred. Please try again.';
    }
};
// Push Notification Functions
export const requestNotificationPermission = async () => {
    if (!messaging) {
        console.warn('📬 Firebase Messaging not available');
        return null;
    }
    try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
            console.log('🔔 Notification permission granted');
            const vapidKey = import.meta.env.VITE_FIREBASE_VAPID_KEY || 'BCEDTv6JWnB-i87nPZjhN8qo3MtpM6wHRw-HlyhsB2im9-9-QXpiTkHWA3KEgPN_EdZnwaYEyxpR415CnERTLbM';
            const token = await getToken(messaging, { vapidKey });
            if (token) {
                console.log('📱 FCM Token obtained:', token.substring(0, 20) + '...');
                return token;
            }
            else {
                console.log('📱 No FCM token available');
                return null;
            }
        }
        else {
            console.log('🚫 Notification permission denied');
            return null;
        }
    }
    catch (error) {
        console.error('❌ Error getting notification permission:', error);
        return null;
    }
};
export const onMessageListener = () => {
    if (!messaging) {
        return Promise.reject('Firebase Messaging not initialized');
    }
    return new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            console.log('📬 Foreground message received:', payload);
            resolve(payload);
        });
    });
};
export const saveFCMToken = async (userId, token) => {
    try {
        if (!userId || !token) {
            throw new Error('User ID and token are required');
        }
        const userRef = doc(db, 'users', userId);
        await updateDoc(userRef, {
            fcmToken: token,
            lastTokenUpdate: new Date().toISOString()
        });
        console.log('💾 FCM token saved successfully');
    }
    catch (error) {
        console.error('❌ Error saving FCM token:', error);
        throw error;
    }
};
// Auth State Listener
export const onAuthStateChange = (callback) => {
    if (!auth) {
        console.error('❌ Firebase Auth not initialized');
        return () => { };
    }
    return onAuthStateChanged(auth, callback);
};
// Development utilities
export const getFirebaseStatus = () => {
    return {
        app: !!app,
        auth: !!auth,
        db: !!db,
        messaging: !!messaging,
        analytics: !!analytics,
        online: navigator.onLine
    };
};
// Error logging utility for components
export const logError = (error, errorInfo) => {
    console.error('🚨 Application Error:', error);
    if (errorInfo) {
        console.error('🔍 Error Info:', errorInfo);
    }
    // In production, you might want to send this to a logging service
    if (analytics) {
        try {
            // Log to Firebase Analytics if available
            import('firebase/analytics').then(({ logEvent }) => {
                logEvent(analytics, 'app_error', {
                    error_message: error.message,
                    error_stack: error.stack?.substring(0, 100) // Truncate for analytics
                });
            });
        }
        catch (analyticsError) {
            console.warn('⚠️ Could not log error to analytics:', analyticsError);
        }
    }
};
console.log('🔥 Firebase module loaded. Status:', getFirebaseStatus());
