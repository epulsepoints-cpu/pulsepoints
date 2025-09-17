// Firebase Integration Test for Progress Saving
import { auth, db, testFirebaseConnection } from '@/firebase';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';

export const testFirebaseProgressIntegration = async () => {
  console.log('🧪 Testing Firebase Progress Integration...');
  console.log('===========================================\n');

  try {
    // Test 1: Basic Firebase Connection
    console.log('1. Testing Firebase Connection...');
    const isConnected = await testFirebaseConnection();
    console.log(`   Connection Status: ${isConnected ? '✅ Connected' : '❌ Failed'}`);
    
    if (!isConnected) {
      console.log('   ❌ Firebase connection failed - cannot proceed with tests');
      return false;
    }

    // Test 2: Authentication Status
    console.log('\n2. Testing Authentication Status...');
    const currentUser = auth.currentUser;
    console.log(`   Current User: ${currentUser ? '✅ Authenticated' : '⚠️ Not authenticated'}`);
    
    if (!currentUser) {
      console.log('   ⚠️ Testing in guest mode - some tests will be skipped');
    }

    // Test 3: Firestore Rules Test
    console.log('\n3. Testing Firestore Rules...');
    try {
      // Test public read access
      const testDoc = doc(db, 'ecgTasks', 'test-doc');
      await getDoc(testDoc);
      console.log('   Public Read Access: ✅ Working');
    } catch (error) {
      console.log(`   Public Read Access: ❌ Failed - ${error.message}`);
    }

    // Test authenticated user access
    if (currentUser) {
      try {
        const userDoc = doc(db, 'users', currentUser.uid);
        await getDoc(userDoc);
        console.log('   User Document Access: ✅ Working');
      } catch (error) {
        console.log(`   User Document Access: ❌ Failed - ${error.message}`);
      }

      try {
        const progressDoc = doc(db, 'learningProgress', currentUser.uid);
        await getDoc(progressDoc);
        console.log('   Learning Progress Access: ✅ Working');
      } catch (error) {
        console.log(`   Learning Progress Access: ❌ Failed - ${error.message}`);
      }
    }

    // Test 4: Test Progress Saving
    console.log('\n4. Testing Progress Saving...');
    if (currentUser) {
      try {
        const testProgress = {
          modules: {
            'test-module': {
              moduleId: 'test-module',
              status: 'in-progress',
              completedLessons: 1,
              totalLessons: 5,
              lastAccessed: new Date().toISOString(),
              averageScore: 85,
              totalTimeSpent: 300,
              streak: 1,
              masteryLevel: 20
            }
          },
          currentModule: 'test-module',
          currentLesson: 'lesson-2',
          lastUpdated: new Date().toISOString(),
          testData: true // Mark as test data
        };

        const progressRef = doc(db, 'learningProgress', currentUser.uid);
        await setDoc(progressRef, testProgress, { merge: true });
        
        // Verify the save
        const savedDoc = await getDoc(progressRef);
        if (savedDoc.exists()) {
          const savedData = savedDoc.data();
          console.log('   Progress Save: ✅ Working');
          console.log(`   Saved Module: ${savedData.modules?.['test-module']?.moduleId || 'None'}`);
          
          // Clean up test data
          await setDoc(progressRef, {
            testData: null,
            modules: {
              'test-module': null
            }
          }, { merge: true });
          console.log('   Test Cleanup: ✅ Complete');
        } else {
          console.log('   Progress Save: ❌ Data not found after save');
        }
      } catch (error) {
        console.log(`   Progress Save: ❌ Failed - ${error.message}`);
      }
    } else {
      console.log('   Progress Save: ⚠️ Skipped (no user authenticated)');
    }

    // Test 5: Test User Stats Saving
    console.log('\n5. Testing User Stats Saving...');
    if (currentUser) {
      try {
        const testStats = {
          xp: 100,
          gems: 10,
          hearts: 4,
          totalLearningTime: 600,
          lessonsPerfected: 1,
          lastUpdated: new Date().toISOString(),
          testData: true
        };

        const userRef = doc(db, 'users', currentUser.uid);
        await setDoc(userRef, testStats, { merge: true });
        
        // Verify the save
        const savedDoc = await getDoc(userRef);
        if (savedDoc.exists()) {
          const savedData = savedDoc.data();
          console.log('   User Stats Save: ✅ Working');
          console.log(`   Saved XP: ${savedData.xp || 'None'}`);
          console.log(`   Saved Hearts: ${savedData.hearts || 'None'}`);
          
          // Clean up test data
          await setDoc(userRef, {
            testData: null
          }, { merge: true });
          console.log('   Test Cleanup: ✅ Complete');
        } else {
          console.log('   User Stats Save: ❌ Data not found after save');
        }
      } catch (error) {
        console.log(`   User Stats Save: ❌ Failed - ${error.message}`);
      }
    } else {
      console.log('   User Stats Save: ⚠️ Skipped (no user authenticated)');
    }

    // Test 6: Real-time Listener Test
    console.log('\n6. Testing Real-time Listeners...');
    if (currentUser) {
      try {
        let listenerReceived = false;
        const progressRef = doc(db, 'learningProgress', currentUser.uid);
        
        const unsubscribe = onSnapshot(progressRef, (snapshot) => {
          listenerReceived = true;
          console.log('   Real-time Update: ✅ Received');
        });

        // Trigger an update
        await setDoc(progressRef, {
          lastListenerTest: new Date().toISOString()
        }, { merge: true });

        // Wait a moment for the listener
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        unsubscribe();
        
        if (listenerReceived) {
          console.log('   Real-time Listeners: ✅ Working');
        } else {
          console.log('   Real-time Listeners: ⚠️ No update received');
        }
      } catch (error) {
        console.log(`   Real-time Listeners: ❌ Failed - ${error.message}`);
      }
    } else {
      console.log('   Real-time Listeners: ⚠️ Skipped (no user authenticated)');
    }

    console.log('\n🏁 Firebase Integration Test Complete!');
    console.log('=====================================');
    
    if (currentUser) {
      console.log('✅ All authenticated user tests completed');
      console.log('💡 Your Firebase integration appears to be working correctly');
    } else {
      console.log('⚠️ Please sign in to test authenticated features');
      console.log('💡 Basic Firebase services are working');
    }

    return true;

  } catch (error) {
    console.error('❌ Firebase Integration Test Failed:', error);
    return false;
  }
};

// Make it available globally for browser console testing
if (typeof window !== 'undefined') {
  (window as any).testFirebaseIntegration = testFirebaseProgressIntegration;
}

export default testFirebaseProgressIntegration;
