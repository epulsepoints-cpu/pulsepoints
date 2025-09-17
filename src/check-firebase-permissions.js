// Firebase Authentication and Permission Checker
import { auth, db } from '@/firebase';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
export const checkFirebasePermissions = async () => {
    console.log('🔐 CHECKING FIREBASE PERMISSIONS');
    console.log('================================');
    try {
        // Step 1: Check Authentication Status
        console.log('\n1. Authentication Status:');
        const currentUser = auth.currentUser;
        if (!currentUser) {
            console.log('❌ No user authenticated');
            console.log('💡 User must be signed in to access Firestore');
            return {
                authenticated: false,
                permissions: {},
                recommendations: [
                    'Sign in with Google or email/password',
                    'Ensure authentication state is properly managed',
                    'Check if auth.onAuthStateChanged is working'
                ]
            };
        }
        console.log(`✅ User authenticated: ${currentUser.uid}`);
        console.log(`   Email: ${currentUser.email || 'No email'}`);
        console.log(`   Display Name: ${currentUser.displayName || 'No display name'}`);
        console.log(`   Email Verified: ${currentUser.emailVerified}`);
        // Step 2: Test Collection Permissions
        console.log('\n2. Testing Collection Permissions:');
        const permissionTests = {
            users: false,
            userProgress: false,
            learningProgress: false,
            achievements: false,
            progressStats: false,
            userActivities: false
        };
        const userId = currentUser.uid;
        // Test users collection
        try {
            const userRef = doc(db, 'users', userId);
            await getDoc(userRef);
            permissionTests.users = true;
            console.log('   users collection: ✅ READ access');
            // Test write access
            await setDoc(userRef, {
                permissionTest: true,
                lastPermissionCheck: new Date().toISOString()
            }, { merge: true });
            console.log('   users collection: ✅ WRITE access');
            // Clean up test data
            await updateDoc(userRef, {
                permissionTest: null
            });
        }
        catch (error) {
            console.log(`   users collection: ❌ FAILED - ${error.message}`);
        }
        // Test userProgress collection
        try {
            const progressRef = doc(db, 'userProgress', userId);
            await getDoc(progressRef);
            permissionTests.userProgress = true;
            console.log('   userProgress collection: ✅ READ access');
            // Test write access
            await setDoc(progressRef, {
                permissionTest: true,
                lastPermissionCheck: new Date().toISOString()
            }, { merge: true });
            console.log('   userProgress collection: ✅ WRITE access');
            // Clean up
            await updateDoc(progressRef, {
                permissionTest: null
            });
        }
        catch (error) {
            console.log(`   userProgress collection: ❌ FAILED - ${error.message}`);
        }
        // Test learningProgress collection
        try {
            const learningRef = doc(db, 'learningProgress', userId);
            await getDoc(learningRef);
            permissionTests.learningProgress = true;
            console.log('   learningProgress collection: ✅ READ access');
            // Test write access
            await setDoc(learningRef, {
                permissionTest: true,
                lastPermissionCheck: new Date().toISOString()
            }, { merge: true });
            console.log('   learningProgress collection: ✅ WRITE access');
            // Clean up
            await updateDoc(learningRef, {
                permissionTest: null
            });
        }
        catch (error) {
            console.log(`   learningProgress collection: ❌ FAILED - ${error.message}`);
        }
        // Test achievements collection
        try {
            const achievementsRef = doc(db, 'achievements', userId);
            await getDoc(achievementsRef);
            permissionTests.achievements = true;
            console.log('   achievements collection: ✅ READ access');
            // Test write access
            await setDoc(achievementsRef, {
                permissionTest: true,
                lastPermissionCheck: new Date().toISOString()
            }, { merge: true });
            console.log('   achievements collection: ✅ WRITE access');
            // Clean up
            await updateDoc(achievementsRef, {
                permissionTest: null
            });
        }
        catch (error) {
            console.log(`   achievements collection: ❌ FAILED - ${error.message}`);
        }
        // Test progressStats collection
        try {
            const statsRef = doc(db, 'progressStats', userId);
            await getDoc(statsRef);
            permissionTests.progressStats = true;
            console.log('   progressStats collection: ✅ READ access');
            // Test write access
            await setDoc(statsRef, {
                permissionTest: true,
                lastPermissionCheck: new Date().toISOString()
            }, { merge: true });
            console.log('   progressStats collection: ✅ WRITE access');
            // Clean up
            await updateDoc(statsRef, {
                permissionTest: null
            });
        }
        catch (error) {
            console.log(`   progressStats collection: ❌ FAILED - ${error.message}`);
        }
        // Test userActivities collection
        try {
            const activitiesRef = doc(db, 'userActivities', userId);
            await getDoc(activitiesRef);
            permissionTests.userActivities = true;
            console.log('   userActivities collection: ✅ READ access');
            // Test write access
            await setDoc(activitiesRef, {
                permissionTest: true,
                lastPermissionCheck: new Date().toISOString()
            }, { merge: true });
            console.log('   userActivities collection: ✅ WRITE access');
            // Clean up
            await updateDoc(activitiesRef, {
                permissionTest: null
            });
        }
        catch (error) {
            console.log(`   userActivities collection: ❌ FAILED - ${error.message}`);
        }
        // Step 3: Summary and Recommendations
        console.log('\n3. Permission Summary:');
        const passedTests = Object.values(permissionTests).filter(Boolean).length;
        const totalTests = Object.keys(permissionTests).length;
        Object.entries(permissionTests).forEach(([collection, passed]) => {
            console.log(`   ${collection}: ${passed ? '✅ WORKING' : '❌ FAILED'}`);
        });
        console.log(`\nOverall: ${passedTests}/${totalTests} collections accessible`);
        const recommendations = [];
        if (passedTests === 0) {
            recommendations.push('❌ NO COLLECTIONS ACCESSIBLE - Check Firestore rules deployment');
            recommendations.push('Run: firebase deploy --only firestore:rules');
            recommendations.push('Verify user authentication is working properly');
        }
        else if (passedTests < totalTests) {
            recommendations.push('⚠️ Some collections not accessible - Update Firestore rules');
            recommendations.push('Deploy updated rules to Firebase');
        }
        else {
            recommendations.push('✅ All collections accessible - Permissions working correctly!');
        }
        if (recommendations.length > 0) {
            console.log('\n4. Recommendations:');
            recommendations.forEach(rec => console.log(`   ${rec}`));
        }
        return {
            authenticated: true,
            userId: currentUser.uid,
            permissions: permissionTests,
            passedTests,
            totalTests,
            recommendations
        };
    }
    catch (error) {
        console.error('❌ Permission check failed:', error);
        return {
            authenticated: false,
            error: error.message,
            recommendations: [
                'Check Firebase connection',
                'Verify authentication state',
                'Ensure Firestore rules are properly deployed'
            ]
        };
    }
};
// Auto-run when imported
if (typeof window !== 'undefined') {
    window.checkFirebasePermissions = checkFirebasePermissions;
}
export default checkFirebasePermissions;
