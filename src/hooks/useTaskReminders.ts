import { useEffect } from 'react';
import { useAuth } from './useAuth';
import { db } from '@/firebase';
import { 
  collection, 
  query, 
  where, 
  getDocs, 
  Timestamp, 
  addDoc,
  orderBy,
  limit
} from 'firebase/firestore';

/**
 * A hook that checks for incomplete tasks and lessons and creates
 * reminder notifications for the user
 */
export function useTaskReminders(checkInterval = 86400000) { // Default: check once a day
  const { user } = useAuth();
  
  useEffect(() => {
    if (!user?.uid) return;
    
    const checkIncompleteItems = async () => {
      try {
        // Check if we've sent reminders recently (avoid spamming the user)
        const lastReminderCheck = localStorage.getItem('lastReminderCheck');
        const now = Date.now();
        
        if (lastReminderCheck && (now - parseInt(lastReminderCheck)) < checkInterval) {
          // Don't check again if we checked recently
          return;
        }
        
        // Update the last check time
        localStorage.setItem('lastReminderCheck', now.toString());
        
        // 1. Check for lessons that user started but didn't complete
        const incompleteRef = collection(db, 'userProgress');
        const q = query(
          incompleteRef,
          where('userId', '==', user.uid),
          where('started', '==', true),
          where('completed', '==', false),
          where('lastUpdated', '<', Timestamp.fromDate(new Date(Date.now() - 172800000))) // 2 days ago
        );
        
        const snapshot = await getDocs(q);
        
        for (const doc of snapshot.docs) {
          const progress = doc.data();
          const lessonId = progress.lessonId;
          
          // Check if we already sent a reminder for this lesson recently
          const reminderRef = collection(db, 'userNotifications');
          const reminderQuery = query(
            reminderRef,
            where('userId', '==', user.uid),
            where('type', '==', 'reminder'),
            where('relatedItemId', '==', lessonId),
            where('timestamp', '>', Timestamp.fromDate(new Date(Date.now() - 172800000))) // Last 2 days
          );
          
          const reminderSnapshot = await getDocs(reminderQuery);
          
          if (reminderSnapshot.empty) {
            // Get lesson details if needed
            const lessonDetailsRef = collection(db, 'lessons');
            const lessonDetailsQuery = query(lessonDetailsRef, where('id', '==', lessonId));
            const lessonDetailsSnapshot = await getDocs(lessonDetailsQuery);
            
            let lessonTitle = 'your incomplete lesson';
            if (!lessonDetailsSnapshot.empty) {
              lessonTitle = lessonDetailsSnapshot.docs[0].data().title || lessonTitle;
            }
            
            // Create a reminder notification
            await addDoc(collection(db, 'userNotifications'), {
              userId: user.uid,
              title: '📝 Continue your learning',
              body: `Don't forget to complete "${lessonTitle}". Continue your journey!`,
              type: 'reminder',
              timestamp: Timestamp.now(),
              read: false,
              actionUrl: `/learn/${lessonId}`,
              relatedItemId: lessonId
            });
          }
        }
        
        // 2. Check for daily tasks that haven't been completed
        // This depends on your app structure, but here's an example:
        const tasksRef = collection(db, 'userTasks');
        const tasksQuery = query(
          tasksRef,
          where('userId', '==', user.uid),
          where('completed', '==', false),
          where('dueDate', '<', Timestamp.now()),
          orderBy('dueDate', 'asc'),
          limit(5) // Limit to avoid too many notifications
        );
        
        const tasksSnapshot = await getDocs(tasksQuery);
        
        for (const doc of tasksSnapshot.docs) {
          const task = doc.data();
          
          // Check if we already sent a reminder for this task recently
          const taskReminderQuery = query(
            collection(db, 'userNotifications'),
            where('userId', '==', user.uid),
            where('type', '==', 'reminder'),
            where('relatedItemId', '==', task.id),
            where('timestamp', '>', Timestamp.fromDate(new Date(Date.now() - 86400000))) // Last 24 hours
          );
          
          const taskReminderSnapshot = await getDocs(taskReminderQuery);
          
          if (taskReminderSnapshot.empty) {
            // Create a task reminder notification
            await addDoc(collection(db, 'userNotifications'), {
              userId: user.uid,
              title: '⚠️ Overdue Task',
              body: `Task "${task.title}" is overdue. Complete it now!`,
              type: 'reminder',
              timestamp: Timestamp.now(),
              read: false,
              actionUrl: `/tasks/${task.id}`,
              relatedItemId: task.id
            });
          }
        }
        
        // 3. Check for streak - if user hasn't been active in the last 24 hours
        const userRef = collection(db, 'users');
        const userQuery = query(userRef, where('uid', '==', user.uid));
        const userSnapshot = await getDocs(userQuery);
        
        if (!userSnapshot.empty) {
          const userData = userSnapshot.docs[0].data();
          const lastActiveTimestamp = userData.lastActive?.toDate?.() || new Date(0);
          const hoursSinceActive = (Date.now() - lastActiveTimestamp.getTime()) / 3600000;
          
          // If user has been inactive for 20-24 hours, send a streak reminder
          if (hoursSinceActive >= 20 && hoursSinceActive < 24) {
            // Check if we already sent a streak reminder recently
            const streakReminderQuery = query(
              collection(db, 'userNotifications'),
              where('userId', '==', user.uid),
              where('type', '==', 'reminder'),
              where('title', '==', '🔥 Maintain Your Streak!'),
              where('timestamp', '>', Timestamp.fromDate(new Date(Date.now() - 86400000))) // Last 24 hours
            );
            
            const streakReminderSnapshot = await getDocs(streakReminderQuery);
            
            if (streakReminderSnapshot.empty) {
              // Create a streak reminder notification
              await addDoc(collection(db, 'userNotifications'), {
                userId: user.uid,
                title: '🔥 Maintain Your Streak!',
                body: `Your daily streak is at risk! Complete a task in the next ${Math.floor(24 - hoursSinceActive)} hours to keep it going.`,
                type: 'reminder',
                timestamp: Timestamp.now(),
                read: false,
                actionUrl: `/`,
                relatedItemId: 'streak-reminder'
              });
            }
          }
        }
      } catch (error) {
        console.error('Error checking for incomplete items:', error);
      }
    };
    
    // Check once on mount
    checkIncompleteItems();
    
    // Set up interval for periodic checks
    const intervalId = setInterval(checkIncompleteItems, checkInterval);
    
    return () => clearInterval(intervalId);
  }, [user?.uid, checkInterval]);
  
  // No return value needed - this hook just sets up the reminders
  return null;
}
