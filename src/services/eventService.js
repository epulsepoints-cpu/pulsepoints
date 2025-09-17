import { db } from '@/firebase';
import { doc, getDoc, setDoc, updateDoc, collection, query, where, orderBy, getDocs, addDoc, serverTimestamp, writeBatch, onSnapshot, Timestamp } from 'firebase/firestore';
// Collection names
export const COLLECTIONS = {
    EVENTS: 'weeklyEvents',
    USER_PROGRESS: 'userEventProgress',
    EVENT_CONFIG: 'eventConfig',
    EVENT_TEMPLATES: 'eventTemplates'
};
/**
 * Event Management Functions
 */
// Get current active event
export const getCurrentActiveEvent = async () => {
    try {
        const now = new Date();
        const eventsRef = collection(db, COLLECTIONS.EVENTS);
        const q = query(eventsRef, where('status', '==', 'active'), where('startDate', '<=', now), where('endDate', '>=', now), orderBy('startDate', 'desc'));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
            const eventData = snapshot.docs[0].data();
            return {
                ...eventData,
                startDate: eventData.startDate instanceof Timestamp ? eventData.startDate.toDate() : new Date(eventData.startDate),
                endDate: eventData.endDate instanceof Timestamp ? eventData.endDate.toDate() : new Date(eventData.endDate)
            };
        }
        return null;
    }
    catch (error) {
        console.error('Error fetching current active event:', error);
        return null;
    }
};
// Get upcoming events
export const getUpcomingEvents = async () => {
    try {
        const now = new Date();
        const eventsRef = collection(db, COLLECTIONS.EVENTS);
        const q = query(eventsRef, where('status', '==', 'upcoming'), where('startDate', '>', now), orderBy('startDate', 'asc'));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => {
            const eventData = doc.data();
            return {
                ...eventData,
                startDate: eventData.startDate instanceof Timestamp ? eventData.startDate.toDate() : new Date(eventData.startDate),
                endDate: eventData.endDate instanceof Timestamp ? eventData.endDate.toDate() : new Date(eventData.endDate)
            };
        });
    }
    catch (error) {
        console.error('Error fetching upcoming events:', error);
        return [];
    }
};
// Create a new weekly event
export const createWeeklyEvent = async (eventData) => {
    try {
        const eventsRef = collection(db, COLLECTIONS.EVENTS);
        const docRef = await addDoc(eventsRef, {
            ...eventData,
            startDate: Timestamp.fromDate(eventData.startDate),
            endDate: Timestamp.fromDate(eventData.endDate),
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
        });
        console.log('✅ Weekly event created:', docRef.id);
        return docRef.id;
    }
    catch (error) {
        console.error('❌ Error creating weekly event:', error);
        throw error;
    }
};
// Update event status (for auto-expiration)
export const updateEventStatus = async (eventId, status) => {
    try {
        const eventRef = doc(db, COLLECTIONS.EVENTS, eventId);
        await updateDoc(eventRef, {
            status,
            updatedAt: serverTimestamp()
        });
        console.log(`✅ Event ${eventId} status updated to: ${status}`);
    }
    catch (error) {
        console.error('❌ Error updating event status:', error);
        throw error;
    }
};
/**
 * User Progress Functions
 */
// Get user's progress for an event
export const getUserEventProgress = async (userId, eventId) => {
    try {
        const progressRef = doc(db, COLLECTIONS.USER_PROGRESS, `${userId}_${eventId}`);
        const progressDoc = await getDoc(progressRef);
        if (progressDoc.exists()) {
            const data = progressDoc.data();
            return {
                ...data,
                startedAt: data.startedAt instanceof Timestamp ? data.startedAt.toDate() : new Date(data.startedAt),
                lastActivityAt: data.lastActivityAt instanceof Timestamp ? data.lastActivityAt.toDate() : new Date(data.lastActivityAt),
                bossCompletedAt: data.bossCompletedAt instanceof Timestamp ? data.bossCompletedAt.toDate() : data.bossCompletedAt ? new Date(data.bossCompletedAt) : undefined
            };
        }
        return null;
    }
    catch (error) {
        console.error('Error fetching user event progress:', error);
        return null;
    }
};
// Initialize user progress for an event
export const initializeUserEventProgress = async (userId, eventId) => {
    try {
        const progressRef = doc(db, COLLECTIONS.USER_PROGRESS, `${userId}_${eventId}`);
        const initialProgress = {
            userId,
            eventId,
            daysCompleted: [],
            totalXpEarned: 0,
            totalGemsEarned: 0,
            badgesEarned: [],
            startedAt: new Date(),
            lastActivityAt: new Date(),
            isEligibleForBoss: false,
            bossCompleted: false,
            dailyProgress: {
                1: { dayNumber: 1, isUnlocked: true, isCompleted: false, tasksCompleted: 0, totalTasks: 0, xpEarned: 0, gemsEarned: 0, timeSpent: 0, accuracy: 0 },
                2: { dayNumber: 2, isUnlocked: false, isCompleted: false, tasksCompleted: 0, totalTasks: 0, xpEarned: 0, gemsEarned: 0, timeSpent: 0, accuracy: 0 },
                3: { dayNumber: 3, isUnlocked: false, isCompleted: false, tasksCompleted: 0, totalTasks: 0, xpEarned: 0, gemsEarned: 0, timeSpent: 0, accuracy: 0 },
                4: { dayNumber: 4, isUnlocked: false, isCompleted: false, tasksCompleted: 0, totalTasks: 0, xpEarned: 0, gemsEarned: 0, timeSpent: 0, accuracy: 0 },
                5: { dayNumber: 5, isUnlocked: false, isCompleted: false, tasksCompleted: 0, totalTasks: 0, xpEarned: 0, gemsEarned: 0, timeSpent: 0, accuracy: 0 },
                6: { dayNumber: 6, isUnlocked: false, isCompleted: false, tasksCompleted: 0, totalTasks: 0, xpEarned: 0, gemsEarned: 0, timeSpent: 0, accuracy: 0 },
                7: { dayNumber: 7, isUnlocked: false, isCompleted: false, tasksCompleted: 0, totalTasks: 0, xpEarned: 0, gemsEarned: 0, timeSpent: 0, accuracy: 0 }
            }
        };
        await setDoc(progressRef, {
            ...initialProgress,
            startedAt: Timestamp.fromDate(initialProgress.startedAt),
            lastActivityAt: Timestamp.fromDate(initialProgress.lastActivityAt)
        });
        console.log('✅ User event progress initialized');
    }
    catch (error) {
        console.error('❌ Error initializing user event progress:', error);
        throw error;
    }
};
// Complete a day and update progress
export const completeDayProgress = async (userId, eventId, dayNumber, xpEarned, gemsEarned, accuracy, timeSpent) => {
    try {
        const progressRef = doc(db, COLLECTIONS.USER_PROGRESS, `${userId}_${eventId}`);
        const progressDoc = await getDoc(progressRef);
        if (!progressDoc.exists()) {
            await initializeUserEventProgress(userId, eventId);
        }
        const currentProgress = progressDoc.data();
        const updatedDaysCompleted = [...currentProgress.daysCompleted];
        if (!updatedDaysCompleted.includes(dayNumber)) {
            updatedDaysCompleted.push(dayNumber);
        }
        // Update daily progress
        const updatedDailyProgress = { ...currentProgress.dailyProgress };
        updatedDailyProgress[dayNumber] = {
            ...updatedDailyProgress[dayNumber],
            isCompleted: true,
            completedAt: new Date(),
            xpEarned,
            gemsEarned,
            accuracy,
            timeSpent,
            tasksCompleted: updatedDailyProgress[dayNumber].totalTasks
        };
        // Unlock next day
        if (dayNumber < 7) {
            updatedDailyProgress[dayNumber + 1] = {
                ...updatedDailyProgress[dayNumber + 1],
                isUnlocked: true
            };
        }
        // Check if eligible for boss challenge (day 7)
        const isEligibleForBoss = updatedDaysCompleted.length >= 4; // Need 4+ days completed
        if (isEligibleForBoss && dayNumber < 7) {
            updatedDailyProgress[7] = {
                ...updatedDailyProgress[7],
                isUnlocked: true
            };
        }
        await updateDoc(progressRef, {
            daysCompleted: updatedDaysCompleted,
            totalXpEarned: currentProgress.totalXpEarned + xpEarned,
            totalGemsEarned: currentProgress.totalGemsEarned + gemsEarned,
            lastActivityAt: Timestamp.fromDate(new Date()),
            isEligibleForBoss,
            dailyProgress: updatedDailyProgress
        });
        console.log(`✅ Day ${dayNumber} completed for user ${userId}`);
    }
    catch (error) {
        console.error('❌ Error completing day progress:', error);
        throw error;
    }
};
// Complete boss challenge
export const completeBossChallenge = async (userId, eventId, xpEarned, gemsEarned, specialBadge) => {
    try {
        const progressRef = doc(db, COLLECTIONS.USER_PROGRESS, `${userId}_${eventId}`);
        const progressDoc = await getDoc(progressRef);
        if (!progressDoc.exists()) {
            throw new Error('User progress not found');
        }
        const currentProgress = progressDoc.data();
        await updateDoc(progressRef, {
            bossCompleted: true,
            bossCompletedAt: Timestamp.fromDate(new Date()),
            totalXpEarned: currentProgress.totalXpEarned + xpEarned,
            totalGemsEarned: currentProgress.totalGemsEarned + gemsEarned,
            badgesEarned: [...currentProgress.badgesEarned, specialBadge],
            lastActivityAt: Timestamp.fromDate(new Date())
        });
        console.log(`✅ Boss challenge completed for user ${userId}`);
    }
    catch (error) {
        console.error('❌ Error completing boss challenge:', error);
        throw error;
    }
};
/**
 * Event Configuration Functions
 */
// Get event configuration
export const getEventConfig = async () => {
    try {
        const configRef = doc(db, COLLECTIONS.EVENT_CONFIG, 'global');
        const configDoc = await getDoc(configRef);
        if (configDoc.exists()) {
            return configDoc.data();
        }
        return null;
    }
    catch (error) {
        console.error('Error fetching event config:', error);
        return null;
    }
};
// Get event templates
export const getEventTemplates = async () => {
    try {
        const templatesRef = collection(db, COLLECTIONS.EVENT_TEMPLATES);
        const snapshot = await getDocs(templatesRef);
        return snapshot.docs.map(doc => doc.data());
    }
    catch (error) {
        console.error('Error fetching event templates:', error);
        return [];
    }
};
/**
 * Real-time Functions
 */
// Subscribe to current event updates
export const subscribeToCurrentEvent = (callback) => {
    const now = new Date();
    const eventsRef = collection(db, COLLECTIONS.EVENTS);
    const q = query(eventsRef, where('status', '==', 'active'), where('startDate', '<=', now), where('endDate', '>=', now), orderBy('startDate', 'desc'));
    return onSnapshot(q, (snapshot) => {
        if (!snapshot.empty) {
            const eventData = snapshot.docs[0].data();
            const event = {
                ...eventData,
                startDate: eventData.startDate instanceof Timestamp ? eventData.startDate.toDate() : new Date(eventData.startDate),
                endDate: eventData.endDate instanceof Timestamp ? eventData.endDate.toDate() : new Date(eventData.endDate)
            };
            callback(event);
        }
        else {
            callback(null);
        }
    });
};
// Subscribe to user progress updates
export const subscribeToUserProgress = (userId, eventId, callback) => {
    const progressRef = doc(db, COLLECTIONS.USER_PROGRESS, `${userId}_${eventId}`);
    return onSnapshot(progressRef, (doc) => {
        if (doc.exists()) {
            const data = doc.data();
            const progress = {
                ...data,
                startedAt: data.startedAt instanceof Timestamp ? data.startedAt.toDate() : new Date(data.startedAt),
                lastActivityAt: data.lastActivityAt instanceof Timestamp ? data.lastActivityAt.toDate() : new Date(data.lastActivityAt),
                bossCompletedAt: data.bossCompletedAt instanceof Timestamp ? data.bossCompletedAt.toDate() : data.bossCompletedAt ? new Date(data.bossCompletedAt) : undefined
            };
            callback(progress);
        }
        else {
            callback(null);
        }
    });
};
/**
 * Auto-expiration and Management Functions
 */
// Check and update expired events
export const updateExpiredEvents = async () => {
    try {
        const now = new Date();
        const eventsRef = collection(db, COLLECTIONS.EVENTS);
        const q = query(eventsRef, where('status', '==', 'active'), where('endDate', '<', now));
        const snapshot = await getDocs(q);
        const batch = writeBatch(db);
        snapshot.docs.forEach(doc => {
            batch.update(doc.ref, {
                status: 'expired',
                updatedAt: serverTimestamp()
            });
        });
        await batch.commit();
        console.log(`✅ Updated ${snapshot.docs.length} expired events`);
    }
    catch (error) {
        console.error('❌ Error updating expired events:', error);
    }
};
// Generate next week's event from templates
export const generateNextWeekEvent = async () => {
    try {
        const templates = await getEventTemplates();
        if (templates.length === 0) {
            console.warn('No event templates found');
            return null;
        }
        // Get last event to determine next template
        const eventsRef = collection(db, COLLECTIONS.EVENTS);
        const lastEventQuery = query(eventsRef, orderBy('startDate', 'desc'));
        const lastEventSnapshot = await getDocs(lastEventQuery);
        let nextTemplateIndex = 0;
        if (!lastEventSnapshot.empty) {
            const lastEvent = lastEventSnapshot.docs[0].data();
            const currentTemplateIndex = templates.findIndex(t => t.theme === lastEvent.theme);
            nextTemplateIndex = (currentTemplateIndex + 1) % templates.length;
        }
        const template = templates[nextTemplateIndex];
        // Calculate start and end dates (next Monday to next Sunday)
        const now = new Date();
        const nextMonday = new Date();
        const daysUntilNextMonday = (8 - now.getDay()) % 7 || 7;
        nextMonday.setDate(now.getDate() + daysUntilNextMonday);
        nextMonday.setHours(0, 0, 0, 0);
        const nextSunday = new Date(nextMonday);
        nextSunday.setDate(nextMonday.getDate() + 6);
        nextSunday.setHours(23, 59, 59, 999);
        // Create event from template
        const newEvent = {
            title: template.title,
            description: template.description,
            theme: template.theme,
            startDate: nextMonday,
            endDate: nextSunday,
            status: 'upcoming',
            backgroundGradient: template.backgroundGradient,
            iconColor: template.iconColor,
            days: template.dayTemplates.map(dayTemplate => ({
                id: `${template.id}_day_${dayTemplate.dayNumber}`,
                eventId: '', // Will be set after event creation
                dayNumber: dayTemplate.dayNumber,
                title: dayTemplate.title,
                description: dayTemplate.description,
                type: dayTemplate.type,
                isUnlocked: dayTemplate.dayNumber === 1,
                isCompleted: false,
                isBossChallenge: dayTemplate.isBossChallenge,
                tasks: [], // Tasks will be generated separately
                rewards: dayTemplate.baseRewards,
                timeLimit: dayTemplate.dayNumber === 3 ? 600 : undefined // 10 minutes for time challenge
            })),
            minDaysRequired: 4,
            participants: 0,
            totalRewards: {
                xp: template.dayTemplates.reduce((sum, day) => sum + day.baseRewards.xp, 0),
                gems: template.dayTemplates.reduce((sum, day) => sum + day.baseRewards.gems, 0),
                badges: ['event_participant', 'boss_challenger']
            }
        };
        const eventId = await createWeeklyEvent(newEvent);
        console.log(`✅ Generated next week event: ${eventId}`);
        return eventId;
    }
    catch (error) {
        console.error('❌ Error generating next week event:', error);
        return null;
    }
};
