// Firebase Connection and Save Test
import { auth, db, testFirebaseConnection } from '@/firebase';
import { doc, getDoc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';

export const comprehensiveFirebaseTest = async () => {
  console.log('🔬 COMPREHENSIVE FIREBASE INTEGRATION TEST');
  console.log('==========================================');
  
  const results = {
    connection: false,
    authentication: false,
    read: false,
    write: false,
    update: false,
    delete: false,
    rules: false,
    progressSave: false,
    userSave: false
  };

  try {
    // Test 1: Basic Connection
    console.log('\n1. Testing Basic Connection...');
    results.connection = await testFirebaseConnection();
    console.log(`   Result: ${results.connection ? '✅ Connected' : '❌ Failed'}`);
    
    if (!results.connection) {
      console.log('❌ Cannot proceed without basic connection');
      return results;
    }

    // Test 2: Authentication
    console.log('\n2. Testing Authentication...');
    const currentUser = auth.currentUser;
    results.authentication = !!currentUser;
    console.log(`   Result: ${results.authentication ? '✅ Authenticated' : '⚠️ Not authenticated'}`);
    
    if (currentUser) {
      console.log(`   User ID: ${currentUser.uid}`);
      console.log(`   Email: ${currentUser.email || 'No email'}`);
    } else {
      console.log('   ⚠️ Some tests will be skipped (authentication required)');
    }

    // Test 3: Public Read Access
    console.log('\n3. Testing Public Read Access...');
    try {
      const testRef = doc(db, 'ecgTasks', 'test-doc');
      await getDoc(testRef);
      results.read = true;
      console.log('   Result: ✅ Public read access working');
    } catch (error) {
      console.log(`   Result: ❌ Public read failed - ${error.message}`);
    }

    if (!currentUser) {
      console.log('\n⚠️ Skipping authenticated tests (no user signed in)');
      console.log('💡 Please sign in to test full Firebase functionality');
      return results;
    }

    // Test 4: Write Access
    console.log('\n4. Testing Write Access...');
    try {
      const testRef = doc(db, 'users', currentUser.uid);
      await setDoc(testRef, {
        testWrite: true,
        timestamp: new Date().toISOString()
      }, { merge: true });
      results.write = true;
      console.log('   Result: ✅ Write access working');
    } catch (error) {
      console.log(`   Result: ❌ Write failed - ${error.message}`);
    }

    // Test 5: Update Access
    console.log('\n5. Testing Update Access...');
    try {
      const testRef = doc(db, 'users', currentUser.uid);
      await updateDoc(testRef, {
        testUpdate: true,
        updateTimestamp: new Date().toISOString()
      });
      results.update = true;
      console.log('   Result: ✅ Update access working');
    } catch (error) {
      console.log(`   Result: ❌ Update failed - ${error.message}`);
    }

    // Test 6: Learning Progress Access
    console.log('\n6. Testing Learning Progress Access...');
    try {
      const progressRef = doc(db, 'learningProgress', currentUser.uid);
      const progressSnap = await getDoc(progressRef);
      
      // Try to write test progress
      await setDoc(progressRef, {
        testModule: {
          moduleId: 'test',
          status: 'in-progress',
          completedLessons: 1,
          totalLessons: 5,
          lastAccessed: new Date().toISOString()
        },
        testSave: true,
        lastUpdated: new Date().toISOString()
      }, { merge: true });
      
      // Verify the write
      const verifySnap = await getDoc(progressRef);
      if (verifySnap.exists() && verifySnap.data()?.testSave) {
        results.progressSave = true;
        console.log('   Result: ✅ Learning progress save/load working');
        
        // Clean up test data
        await updateDoc(progressRef, {
          testModule: null,
          testSave: null
        });
      } else {
        console.log('   Result: ❌ Learning progress verification failed');
      }
    } catch (error) {
      console.log(`   Result: ❌ Learning progress failed - ${error.message}`);
    }

    // Test 7: User Stats Access
    console.log('\n7. Testing User Stats Access...');
    try {
      const userRef = doc(db, 'users', currentUser.uid);
      const originalSnap = await getDoc(userRef);
      const originalData = originalSnap.exists() ? originalSnap.data() : {};
      
      // Test save
      await setDoc(userRef, {
        ...originalData,
        testXP: 999,
        testGems: 99,
        testHearts: 3,
        testSave: true,
        lastUpdated: new Date().toISOString()
      }, { merge: true });
      
      // Verify the save
      const verifySnap = await getDoc(userRef);
      if (verifySnap.exists()) {
        const verifyData = verifySnap.data();
        if (verifyData?.testSave && verifyData?.testXP === 999) {
          results.userSave = true;
          console.log('   Result: ✅ User stats save/load working');
          console.log(`     Test XP: ${verifyData.testXP}`);
          console.log(`     Test Gems: ${verifyData.testGems}`);
          console.log(`     Test Hearts: ${verifyData.testHearts}`);
          
          // Clean up test data
          await updateDoc(userRef, {
            testXP: null,
            testGems: null,
            testHearts: null,
            testSave: null
          });
        } else {
          console.log('   Result: ❌ User stats verification failed');
        }
      } else {
        console.log('   Result: ❌ User stats document not found');
      }
    } catch (error) {
      console.log(`   Result: ❌ User stats failed - ${error.message}`);
    }

    // Test 8: Rules Testing
    console.log('\n8. Testing Firestore Rules...');
    try {
      // Test access to own documents
      const userRef = doc(db, 'users', currentUser.uid);
      const progressRef = doc(db, 'learningProgress', currentUser.uid);
      
      await getDoc(userRef);
      await getDoc(progressRef);
      
      results.rules = true;
      console.log('   Result: ✅ Firestore rules working correctly');
    } catch (error) {
      console.log(`   Result: ❌ Rules test failed - ${error.message}`);
    }

    // Summary
    console.log('\n📊 TEST SUMMARY');
    console.log('===============');
    Object.entries(results).forEach(([test, passed]) => {
      console.log(`${test.padEnd(15)}: ${passed ? '✅ PASS' : '❌ FAIL'}`);
    });
    
    const passedTests = Object.values(results).filter(Boolean).length;
    const totalTests = Object.keys(results).length;
    
    console.log(`\nOverall: ${passedTests}/${totalTests} tests passed`);
    
    if (passedTests === totalTests) {
      console.log('\n🎉 ALL TESTS PASSED - Firebase integration is working perfectly!');
    } else if (passedTests >= totalTests - 2) {
      console.log('\n✅ Most tests passed - Firebase integration is mostly working');
    } else {
      console.log('\n⚠️ Some tests failed - there may be Firebase configuration issues');
    }

    return results;

  } catch (error) {
    console.error('❌ Test suite failed:', error);
    return results;
  }
};

// Make available globally
if (typeof window !== 'undefined') {
  (window as any).testFirebase = comprehensiveFirebaseTest;
}

export default comprehensiveFirebaseTest;
