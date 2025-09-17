// Guest progress service for storing event progress locally
export interface GuestEventProgress {
  currentDay: number;
  completedDays: string[];
  completedTasks: string[];
  totalScore: number;
  timeSpent: number;
  attempts: number;
  lastAccessed: Date;
  isCompleted: boolean;
  completedAt?: Date;
}

const GUEST_PROGRESS_KEY = 'ecg-guest-progress';
const GUEST_MODE_KEY = 'ecg-guest-mode';

export class GuestProgressService {
  static setGuestMode(enabled: boolean): void {
    localStorage.setItem(GUEST_MODE_KEY, enabled.toString());
  }

  static isGuestMode(): boolean {
    return localStorage.getItem(GUEST_MODE_KEY) === 'true';
  }

  static getGuestProgress(): Record<string, GuestEventProgress> {
    try {
      const stored = localStorage.getItem(GUEST_PROGRESS_KEY);
      return stored ? JSON.parse(stored) : {};
    } catch (error) {
      console.error('Failed to load guest progress:', error);
      return {};
    }
  }

  static saveGuestProgress(eventId: string, progress: GuestEventProgress): void {
    try {
      const allProgress = this.getGuestProgress();
      allProgress[eventId] = {
        ...progress,
        lastAccessed: new Date()
      };
      localStorage.setItem(GUEST_PROGRESS_KEY, JSON.stringify(allProgress));
    } catch (error) {
      console.error('Failed to save guest progress:', error);
    }
  }

  static updateGuestTaskProgress(eventId: string, taskId: string, score: number): void {
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

  static createDefaultProgress(): GuestEventProgress {
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

  static createGuestProgressForAllEvents(eventIds: string[]): Record<string, GuestEventProgress> {
    const progress: Record<string, GuestEventProgress> = {};
    eventIds.forEach(eventId => {
      progress[eventId] = this.createDefaultProgress();
    });
    return progress;
  }

  static clearGuestProgress(): void {
    localStorage.removeItem(GUEST_PROGRESS_KEY);
    localStorage.removeItem(GUEST_MODE_KEY);
  }

  static transferGuestProgressToUser(userId: string): Record<string, GuestEventProgress> {
    const guestProgress = this.getGuestProgress();
    // In a real app, you'd transfer this to Firebase here
    // For now, just return it so it can be merged
    return guestProgress;
  }
}
