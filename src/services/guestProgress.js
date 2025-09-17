const GUEST_PROGRESS_KEY = 'ecg-guest-progress';
const GUEST_MODE_KEY = 'ecg-guest-mode';
export class GuestProgressService {
    static setGuestMode(enabled) {
        localStorage.setItem(GUEST_MODE_KEY, enabled.toString());
    }
    static isGuestMode() {
        return localStorage.getItem(GUEST_MODE_KEY) === 'true';
    }
    static getGuestProgress() {
        try {
            const stored = localStorage.getItem(GUEST_PROGRESS_KEY);
            return stored ? JSON.parse(stored) : {};
        }
        catch (error) {
            console.error('Failed to load guest progress:', error);
            return {};
        }
    }
    static saveGuestProgress(eventId, progress) {
        try {
            const allProgress = this.getGuestProgress();
            allProgress[eventId] = {
                ...progress,
                lastAccessed: new Date()
            };
            localStorage.setItem(GUEST_PROGRESS_KEY, JSON.stringify(allProgress));
        }
        catch (error) {
            console.error('Failed to save guest progress:', error);
        }
    }
    static updateGuestTaskProgress(eventId, taskId, score) {
        const allProgress = this.getGuestProgress();
        const eventProgress = allProgress[eventId] || this.createDefaultProgress();
        // Add task if not already completed
        if (!eventProgress.completedTasks.includes(taskId)) {
            eventProgress.completedTasks.push(taskId);
            eventProgress.totalScore += score;
            eventProgress.attempts += 1;
            // Update completed days (every 5 tasks = 1 day)
            const dayNumber = Math.ceil(eventProgress.completedTasks.length / 5);
            const dayId = `day-${dayNumber}`;
            if (!eventProgress.completedDays.includes(dayId) && eventProgress.completedTasks.length % 5 === 0) {
                eventProgress.completedDays.push(dayId);
            }
            eventProgress.currentDay = Math.min(dayNumber, 30);
            eventProgress.lastAccessed = new Date();
        }
        this.saveGuestProgress(eventId, eventProgress);
    }
    static createDefaultProgress() {
        return {
            currentDay: 1,
            completedDays: [],
            completedTasks: [],
            totalScore: 0,
            timeSpent: 0,
            attempts: 0,
            lastAccessed: new Date(),
            isCompleted: false
        };
    }
    static createGuestProgressForAllEvents(eventIds) {
        const progress = {};
        eventIds.forEach(eventId => {
            progress[eventId] = this.createDefaultProgress();
        });
        return progress;
    }
    static clearGuestProgress() {
        localStorage.removeItem(GUEST_PROGRESS_KEY);
        localStorage.removeItem(GUEST_MODE_KEY);
    }
    static transferGuestProgressToUser(userId) {
        const guestProgress = this.getGuestProgress();
        // In a real app, you'd transfer this to Firebase here
        // For now, just return it so it can be merged
        return guestProgress;
    }
}
