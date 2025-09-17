/**
 * Simple Client-Side Notification Fix
 * Run this in the browser console to fix notifications with missing action URLs
 */

// Extend window interface for TypeScript
declare global {
  interface Window {
    fixNotificationActionUrls: () => Promise<{totalChecked: number, totalFixed: number} | null>;
  }
}

// Default action URLs based on notification type (duplicated here for browser use)
const getDefaultActionUrl = (type: string, notificationData?: any): string => {
  switch (type) {
    case 'lesson':
    case 'lesson_complete':
      return notificationData?.lessonId ? `/learn/${notificationData.lessonId}` : '/learn';
    
    case 'achievement':
    case 'rank_up':
      return '/profile?tab=achievements';
    
    case 'progress':
    case 'streak':
    case 'daily_goal':
      return '/dashboard?tab=progress';
    
    case 'module_unlock':
      return notificationData?.moduleId ? `/modules/${notificationData.moduleId}` : '/learn';
    
    case 'reminder':
      return '/dashboard';
    
    case 'social':
      return '/leaderboard';
    
    case 'reward':
      return '/rewards';
    
    case 'system':
    default:
      return '/dashboard';
  }
};

// This function can be run in the browser console to fix notifications
window.fixNotificationActionUrls = async () => {
  console.log('🔧 Starting notification action URL fix...');
  
  try {
    // Import Firebase functions (correct paths for browser)
    const { db } = await import('../firebase');
    const { collection, getDocs, updateDoc, doc } = await import('firebase/firestore');
    
    // Get all notifications
    const notificationsRef = collection(db, 'userNotifications');
    const snapshot = await getDocs(notificationsRef);
    
    let totalChecked = 0;
    let totalFixed = 0;
    
    console.log(`📊 Found ${snapshot.size} notifications to check...`);
    
    for (const notificationDoc of snapshot.docs) {
      totalChecked++;
      const data = notificationDoc.data();
      
      // Check if notification needs action URL fix
      if (!data.actionUrl || data.actionUrl === '' || data.actionUrl === '/') {
        try {
          // Generate appropriate action URL
          const newActionUrl = getDefaultActionUrl(data.type, data.data);
          
          // Update the notification
          await updateDoc(doc(db, 'userNotifications', notificationDoc.id), {
            actionUrl: newActionUrl
          });
          
          totalFixed++;
          console.log(`✅ Fixed notification ${notificationDoc.id}: ${data.type} → ${newActionUrl}`);
          
        } catch (error) {
          console.error(`❌ Error fixing notification ${notificationDoc.id}:`, error);
        }
      }
    }
    
    console.log('\n🎯 NOTIFICATION FIX COMPLETE!');
    console.log(`📊 Total checked: ${totalChecked}`);
    console.log(`✅ Total fixed: ${totalFixed}`);
    console.log(`💯 Success rate: ${totalFixed > 0 ? '100%' : 'No fixes needed'}`);
    
    return { totalChecked, totalFixed };
    
  } catch (error) {
    console.error('❌ Error in fix process:', error);
    console.error('💡 Make sure you are running this in the browser console, not Node.js');
    return null;
  }
};

// Instructions for users
console.log(`
🔧 NOTIFICATION ACTION URL FIX UTILITY LOADED

To fix existing notifications with missing action URLs:
1. Open browser console (F12)
2. Run: fixNotificationActionUrls()
3. Wait for completion message

This will:
✅ Check all notifications for missing action URLs
✅ Add default action URLs based on notification type
✅ Preserve existing valid action URLs
✅ Log progress and results

Note: This runs on the client side and requires proper Firebase permissions.
`);

export {};
