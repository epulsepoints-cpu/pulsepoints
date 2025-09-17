import { EventData } from '../types/eventTypes';
import { generateLocalEvents } from '../data/localEventsData';

// Local storage key for events data
const EVENTS_STORAGE_KEY = 'ecg_events_data';
const EVENTS_VERSION_KEY = 'ecg_events_version';
const EVENTS_VERSION = '1.5.0'; // Increment to force cache refresh

// Local storage key for user progress
const USER_PROGRESS_KEY = 'ecg_user_progress';

interface UserProgress {
  eventId: string;
  dayId: string;
  taskId: string;
  completed: boolean;
  score?: number;
  completedAt?: string;
}

interface EventsProgress {
  [eventId: string]: {
    [dayId: string]: {
      [taskId: string]: UserProgress;
    };
  };
}

export class LocalEventsService {
  private static instance: LocalEventsService;
  private events: EventData[] = [];
  private progress: EventsProgress = {};

  private constructor() {
    this.loadEvents();
    this.loadProgress();
  }

  public static getInstance(): LocalEventsService {
    if (!LocalEventsService.instance) {
      LocalEventsService.instance = new LocalEventsService();
    }
    return LocalEventsService.instance;
  }

  // Load events from local storage or generate new ones
  private loadEvents(): void {
    try {
      const storedVersion = localStorage.getItem(EVENTS_VERSION_KEY);
      const storedEvents = localStorage.getItem(EVENTS_STORAGE_KEY);

      // If version mismatch or no stored events, generate new ones
      if (storedVersion !== EVENTS_VERSION || !storedEvents) {
        console.log('🔄 Generating fresh events data...');
        this.events = generateLocalEvents();
        this.saveEvents();
        localStorage.setItem(EVENTS_VERSION_KEY, EVENTS_VERSION);
      } else {
        // Load stored events
        this.events = JSON.parse(storedEvents);
        console.log('✅ Loaded events from local storage');
      }
    } catch (error) {
      console.error('Error loading events:', error);
      // Fallback to generated events
      this.events = generateLocalEvents();
      this.saveEvents();
    }
  }

  // Save events to local storage
  private saveEvents(): void {
    try {
      localStorage.setItem(EVENTS_STORAGE_KEY, JSON.stringify(this.events));
      console.log('💾 Events saved to local storage');
    } catch (error) {
      console.error('Error saving events:', error);
    }
  }

  // Load user progress from local storage
  private loadProgress(): void {
    try {
      const storedProgress = localStorage.getItem(USER_PROGRESS_KEY);
      if (storedProgress) {
        this.progress = JSON.parse(storedProgress);
      }
    } catch (error) {
      console.error('Error loading progress:', error);
      this.progress = {};
    }
  }

  // Save user progress to local storage
  private saveProgress(): void {
    try {
      localStorage.setItem(USER_PROGRESS_KEY, JSON.stringify(this.progress));
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  }

  // Get all events
  public getEvents(): EventData[] {
    return this.events.map(event => ({
      ...event,
      days: event.days.map(day => ({
        ...day,
        tasks: day.tasks.map(task => ({
          ...task,
          completed: this.isTaskCompleted(event.id, day.id, task.id),
          unlocked: this.isTaskUnlocked(event.id, day.id, task.id)
        })),
        completed: this.isDayCompleted(event.id, day.id),
        unlocked: this.isDayUnlocked(event.id, day.id)
      }))
    }));
  }

  // Get specific event
  public getEvent(eventId: string): EventData | null {
    const events = this.getEvents();
    return events.find(event => event.id === eventId) || null;
  }

  // Get specific day
  public getDay(eventId: string, dayId: string) {
    const event = this.getEvent(eventId);
    if (!event) return null;
    return event.days.find(day => day.id === dayId) || null;
  }

  // Get specific task
  public getTask(eventId: string, dayId: string, taskId: string) {
    const day = this.getDay(eventId, dayId);
    if (!day) return null;
    return day.tasks.find(task => task.id === taskId) || null;
  }

  // Mark task as completed
  public completeTask(eventId: string, dayId: string, taskId: string, score: number = 100): void {
    if (!this.progress[eventId]) {
      this.progress[eventId] = {};
    }
    if (!this.progress[eventId][dayId]) {
      this.progress[eventId][dayId] = {};
    }

    this.progress[eventId][dayId][taskId] = {
      eventId,
      dayId,
      taskId,
      completed: true,
      score,
      completedAt: new Date().toISOString()
    };

    this.saveProgress();
    console.log(`✅ Task completed: ${taskId} with score ${score}`);

    // Check if day is completed and unlock next day
    if (this.isDayCompleted(eventId, dayId)) {
      this.unlockNextDay(eventId, dayId);
    }
  }

  // Check if task is completed
  public isTaskCompleted(eventId: string, dayId: string, taskId: string): boolean {
    return this.progress[eventId]?.[dayId]?.[taskId]?.completed || false;
  }

  // Check if task is unlocked
  public isTaskUnlocked(eventId: string, dayId: string, taskId: string): boolean {
    // All tasks in a day are unlocked if the day is unlocked
    return this.isDayUnlocked(eventId, dayId);
  }

  // Check if day is completed
  public isDayCompleted(eventId: string, dayId: string): boolean {
    const event = this.events.find(e => e.id === eventId);
    if (!event) return false;

    const day = event.days.find(d => d.id === dayId);
    if (!day) return false;

    // Check if all tasks are completed
    return day.tasks.every(task => this.isTaskCompleted(eventId, dayId, task.id));
  }

  // Check if day is unlocked
  public isDayUnlocked(eventId: string, dayId: string): boolean {
    const event = this.events.find(e => e.id === eventId);
    if (!event) return false;

    const day = event.days.find(d => d.id === dayId);
    if (!day) return false;

    // Day 1 is always unlocked
    if (day.dayNumber === 1) return true;

    // Check if previous day is completed
    const previousDay = event.days.find(d => d.dayNumber === day.dayNumber - 1);
    if (!previousDay) return false;

    return this.isDayCompleted(eventId, previousDay.id);
  }

  // Unlock next day
  private unlockNextDay(eventId: string, currentDayId: string): void {
    const event = this.events.find(e => e.id === eventId);
    if (!event) return;

    const currentDay = event.days.find(d => d.id === currentDayId);
    if (!currentDay) return;

    const nextDay = event.days.find(d => d.dayNumber === currentDay.dayNumber + 1);
    if (nextDay) {
      console.log(`🔓 Day ${nextDay.dayNumber} unlocked for ${eventId}`);
    }
  }

  // Get user statistics
  public getUserStats() {
    const totalTasks = this.events.reduce((sum, event) => 
      sum + event.days.reduce((daySum, day) => daySum + day.tasks.length, 0), 0
    );

    const completedTasks = Object.values(this.progress).reduce((sum, eventProgress) =>
      sum + Object.values(eventProgress).reduce((daySum, dayProgress) =>
        daySum + Object.values(dayProgress).filter(task => task.completed).length, 0
      ), 0
    );

    const totalXP = Object.values(this.progress).reduce((sum, eventProgress) =>
      sum + Object.values(eventProgress).reduce((daySum, dayProgress) =>
        daySum + Object.values(dayProgress).reduce((taskSum, task) =>
          taskSum + (task.completed ? (task.score || 100) : 0), 0
        ), 0
      ), 0
    );

    return {
      totalTasks,
      completedTasks,
      totalXP,
      completionPercentage: Math.round((completedTasks / totalTasks) * 100)
    };
  }

  // Reset all progress
  public resetProgress(): void {
    this.progress = {};
    this.saveProgress();
    console.log('🔄 All progress reset');
  }

  // Reset specific event progress
  public resetEventProgress(eventId: string): void {
    delete this.progress[eventId];
    this.saveProgress();
    console.log(`🔄 Progress reset for event: ${eventId}`);
  }

  // Force regenerate events (for development)
  public regenerateEvents(): void {
    this.events = generateLocalEvents();
    this.saveEvents();
    localStorage.setItem(EVENTS_VERSION_KEY, EVENTS_VERSION);
    console.log('🔄 Events regenerated');
  }

  // Export progress data
  public exportProgress(): string {
    return JSON.stringify({
      version: EVENTS_VERSION,
      progress: this.progress,
      exportedAt: new Date().toISOString()
    }, null, 2);
  }

  // Import progress data
  public importProgress(data: string): boolean {
    try {
      const imported = JSON.parse(data);
      if (imported.progress) {
        this.progress = imported.progress;
        this.saveProgress();
        console.log('✅ Progress imported successfully');
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error importing progress:', error);
      return false;
    }
  }
}

// Export singleton instance
export const localEventsService = LocalEventsService.getInstance();

// Utility functions for easy access
export const getEvents = () => localEventsService.getEvents();
export const getEvent = (eventId: string) => localEventsService.getEvent(eventId);
export const getDay = (eventId: string, dayId: string) => localEventsService.getDay(eventId, dayId);
export const getTask = (eventId: string, dayId: string, taskId: string) => localEventsService.getTask(eventId, dayId, taskId);
export const completeTask = (eventId: string, dayId: string, taskId: string, score?: number) => 
  localEventsService.completeTask(eventId, dayId, taskId, score);
export const getUserStats = () => localEventsService.getUserStats();
export const resetProgress = () => localEventsService.resetProgress();
