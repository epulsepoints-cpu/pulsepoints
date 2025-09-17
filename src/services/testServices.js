// Test Firebase Services Integration
import { getUserProgressStats, updateUserProgressOnLessonComplete } from './progressService';
import { getUserAchievements, claimAchievementReward, checkAchievements } from './achievementService';
import { handleLessonCompletion } from './consolidatedProgressService';
/**
 * Test the Firebase services integration
 * This file can be used to test the services before integrating with components
 *
 * Usage:
 * import testServices from '@/services/testServices';
 * testServices.runAllTests(); // Run all tests
 *
 * Or run individual tests:
 * testServices.testProgressService();
 * testServices.testAchievementService();
 */
const testUserId = 'test-user-123';
// Test progress service
export const testProgressService = async () => {
    try {
        console.log('🧪 Testing Progress Service...');
        // Test getting user progress stats
        const stats = await getUserProgressStats(testUserId);
        console.log('✅ User Progress Stats:', stats);
        // Test updating progress on lesson complete
        await updateUserProgressOnLessonComplete(testUserId, {
            moduleId: 'module-1',
            lessonId: 'lesson-1',
            score: 95,
            timeSpent: 120,
            passed: true
        });
        console.log('✅ Lesson progress updated');
        return true;
    }
    catch (error) {
        console.error('❌ Progress Service Test Failed:', error);
        return false;
    }
};
// Test achievement service
export const testAchievementService = async () => {
    try {
        console.log('🧪 Testing Achievement Service...');
        // Test getting user achievements
        const achievements = await getUserAchievements(testUserId);
        console.log('✅ User Achievements:', achievements);
        // Test checking achievements
        await checkAchievements(testUserId, {
            totalLessons: 5,
            completedModules: ['module-1'],
            currentStreak: 3,
            perfectLessons: 2,
            fastCompletions: 1
        });
        console.log('✅ Achievements checked');
        return true;
    }
    catch (error) {
        console.error('❌ Achievement Service Test Failed:', error);
        return false;
    }
};
// Test reward claiming (use with caution in development)
export const testRewardClaiming = async (userId, achievementId) => {
    try {
        console.log('🧪 Testing Reward Claiming...');
        if (!userId || !achievementId) {
            console.log('⚠️ Reward claiming test skipped - provide userId and achievementId parameters to test');
            console.log('   Example: testRewardClaiming("your-user-id", "first-lesson")');
            return true;
        }
        // This would test claiming a reward for a completed achievement
        const reward = await claimAchievementReward(userId, achievementId);
        console.log('✅ Reward Claimed:', reward);
        return true;
    }
    catch (error) {
        console.error('❌ Reward Claiming Test Failed:', error);
        return false;
    }
};
// Test consolidated progress service
export const testConsolidatedProgressService = async (userId) => {
    try {
        console.log('🧪 Testing Consolidated Progress Service...');
        const testUser = userId || testUserId;
        // Test lesson completion with consolidated service
        await handleLessonCompletion({
            userId: testUser,
            moduleId: 'module-1',
            lessonId: 'lesson-test',
            score: 85,
            timeSpent: 150,
            perfect: false
        });
        console.log('✅ Consolidated lesson completion updated');
        // Get updated stats to verify
        const updatedStats = await getUserProgressStats(testUser);
        console.log('📊 Updated stats after lesson:', updatedStats);
        return true;
    }
    catch (error) {
        console.error('❌ Consolidated Progress Service Test Failed:', error);
        return false;
    }
};
// Main test function
export const runAllTests = async () => {
    console.log('🚀 Starting Firebase Services Tests...');
    const progressTest = await testProgressService();
    const achievementTest = await testAchievementService();
    const consolidatedTest = await testConsolidatedProgressService();
    const rewardTest = await testRewardClaiming();
    console.log('📊 Test Results:', {
        progressService: progressTest ? '✅' : '❌',
        achievementService: achievementTest ? '✅' : '❌',
        consolidatedProgressService: consolidatedTest ? '✅' : '❌',
        rewardClaiming: rewardTest ? '✅' : '❌'
    });
    return progressTest && achievementTest && consolidatedTest && rewardTest;
};
export default {
    testProgressService,
    testAchievementService,
    testConsolidatedProgressService,
    testRewardClaiming,
    runAllTests
};
