import { db } from '@/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export const updateUserProgress = async (
  email: string,
  xp: number,
  gems: number,
  streak: number
) => {
  try {
    console.log('🔄 Updating user progress in Firestore...', { email, xp, gems, streak });

    // Use email as document ID (or you can use auth.currentUser.uid if available)
    const userRef = doc(db, 'users', email);
    
    // Check if user exists first
    const userDoc = await getDoc(userRef);
    
    const userData = {
      email,
      xp,
      gems,
      streakCount: streak,
      lastActive: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    if (userDoc.exists()) {
      // Update existing user - merge with existing data
      await setDoc(userRef, userData, { merge: true });
      console.log('✅ User progress updated in Firestore');
    } else {
      // Create new user document
      await setDoc(userRef, {
        ...userData,
        createdAt: new Date().toISOString(),
      });
      console.log('✅ New user created in Firestore');
    }

  } catch (error) {
    console.error('❌ Failed to update user progress in Firestore:', error);
    throw error;
  }
};

// Alternative version using Firebase Auth UID (if you prefer)
export const updateUserProgressByUID = async (
  uid: string,
  email: string,
  xp: number,
  gems: number,
  streak: number
) => {
  try {
    console.log('🔄 Updating user progress by UID...', { uid, email, xp, gems, streak });

    const userRef = doc(db, 'users', uid);
    
    const userData = {
      email,
      xp,
      gems,
      streakCount: streak,
      lastActive: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await setDoc(userRef, userData, { merge: true });
    console.log('✅ User progress updated by UID in Firestore');

  } catch (error) {
    console.error('❌ Failed to update user progress by UID:', error);
    throw error;
  }
};

// Helper function to get user progress
export const getUserProgress = async (email: string) => {
  try {
    const userRef = doc(db, 'users', email);
    const userDoc = await getDoc(userRef);
    
    if (userDoc.exists()) {
      return userDoc.data();
    } else {
      console.log('User not found in Firestore');
      return null;
    }
  } catch (error) {
    console.error('❌ Failed to get user progress:', error);
    throw error;
  }
};
