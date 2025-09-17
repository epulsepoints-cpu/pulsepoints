import { 
  SimpleEvent, 
  SimpleEventProgress, 
  SimpleUserProgress,
  SimpleTask,
  SimpleDay
} from '../types/simpleEventTypes';
import { generateSimpleEvents } from '../data/simpleEventsData';

const STORAGE_KEYS = {
  EVENTS: 'simple_events_data',
  PROGRESS: 'simple_user_progress',
  VERSION: 'simple_events_version'
};

const CURRENT_VERSION = '1.3.0'; // Updated to fix task ID formats

export class SimpleEventsService {
  private static instance: SimpleEventsService;
  private events: SimpleEvent[] = [];
  private userProgress: SimpleUserProgress = {
    events: {},
    overallStats: {
      totalXP: 0,
      totalGems: 0,
      totalTimeSpent: 0,
      eventsCompleted: 0,
      tasksCompleted: 0,
      averageScore: 0,
      lastActiveDate: new Date()
    }
  };

  private constructor() {
    this.loadEvents();
    this.loadProgress();
  }

  public static getInstance(): SimpleEventsService {
    if (!SimpleEventsService.instance) {
      SimpleEventsService.instance = new SimpleEventsService();
    }
    return SimpleEventsService.instance;
  }

  // Force refresh of events data (for development/debugging)
  public clearCacheAndReload(): void {
    console.log('🗑️ Clearing cache and reloading events...');
    localStorage.removeItem(STORAGE_KEYS.EVENTS);
    localStorage.removeItem(STORAGE_KEYS.VERSION);
    this.loadEvents();
  }

  // Load events from localStorage or generate fresh
  private loadEvents(): void {
    try {
      // TEMPORARY: Force fresh reload to fix task ID issues
      console.log('🔄 FORCING fresh events reload to fix task IDs...');
      this.events = generateSimpleEvents();
      this.saveEvents();
      localStorage.setItem(STORAGE_KEYS.VERSION, CURRENT_VERSION);
      console.log('✅ Generated fresh events');
      return;
      
      const storedVersion = localStorage.getItem(STORAGE_KEYS.VERSION);
      const storedEvents = localStorage.getItem(STORAGE_KEYS.EVENTS);

      // Force fresh generation for new flashcard system
      if (storedVersion !== CURRENT_VERSION || !storedEvents) {
        console.log('🔄 Generating fresh events data with flashcard system...');
        this.events = generateSimpleEvents();
        this.saveEvents();
        localStorage.setItem(STORAGE_KEYS.VERSION, CURRENT_VERSION);
      } else {
        this.events = JSON.parse(storedEvents);
        console.log('✅ Loaded events from storage');
      }
      
      // Debug: Check Day 1 data
      const codePulseEvent = this.events.find(e => e.id === 'code-pulse');
      if (codePulseEvent) {
        const day1 = codePulseEvent.days.find(d => d.dayNumber === 1);
        if (day1) {
          console.log('🔍 Day 1 tasks:', day1.tasks.map(t => ({ id: t.id, type: t.type, title: t.title })));
        }
      }
    } catch (error) {
      console.error('Error loading events:', error);
      this.events = generateSimpleEvents();
      this.saveEvents();
    }
  }

  // Save events to localStorage
  private saveEvents(): void {
    try {
      localStorage.setItem(STORAGE_KEYS.EVENTS, JSON.stringify(this.events));
    } catch (error) {
      console.error('Error saving events:', error);
    }
  }

  // Load user progress
  private loadProgress(): void {
    try {
      const storedProgress = localStorage.getItem(STORAGE_KEYS.PROGRESS);
      if (storedProgress) {
        const parsed = JSON.parse(storedProgress);
        // Convert date strings back to Date objects
        this.userProgress = {
          ...parsed,
          overallStats: {
            ...parsed.overallStats,
            lastActiveDate: new Date(parsed.overallStats.lastActiveDate)
          }
        };
        
        // Convert event progress dates
        Object.keys(this.userProgress.events).forEach(eventId => {
          const eventProgress = this.userProgress.events[eventId];
          eventProgress.lastAccessed = new Date(eventProgress.lastAccessed);
          if (eventProgress.completedAt) {
            eventProgress.completedAt = new Date(eventProgress.completedAt);
          }
        });
        
        console.log('✅ Loaded user progress from storage');
      } else {
        console.log('📝 Creating new user progress');
        this.initializeProgress();
      }
    } catch (error) {
      console.error('Error loading progress:', error);
      this.initializeProgress();
    }
  }

  // Save user progress
  private saveProgress(): void {
    try {
      localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(this.userProgress));
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  }

  // Initialize fresh progress
  private initializeProgress(): void {
    this.userProgress = {
      events: {},
      overallStats: {
        totalXP: 0,
        totalGems: 0,
        totalTimeSpent: 0,
        eventsCompleted: 0,
        tasksCompleted: 0,
        averageScore: 0,
        lastActiveDate: new Date()
      }
    };
    this.saveProgress();
  }

  // Public API methods

  // Get all events with progress applied
  public getEvents(): SimpleEvent[] {
    return this.events.map(event => ({
      ...event,
      userProgress: this.userProgress.events[event.id],
      days: event.days.map(day => ({
        ...day,
        unlocked: this.isDayUnlocked(event.id, day.dayNumber),
        completed: this.isDayCompleted(event.id, day.id),
        tasks: day.tasks.map(task => ({
          ...task,
          unlocked: this.isTaskUnlocked(event.id, day.id, task.id),
          completed: this.isTaskCompleted(event.id, task.id),
          bestScore: this.getTaskScore(event.id, task.id)
        }))
      }))
    }));
  }

  // Get specific event
  public getEvent(eventId: string): SimpleEvent | null {
    const events = this.getEvents();
    return events.find(event => event.id === eventId) || null;
  }

  // Get specific day
  public getDay(eventId: string, dayId: string): SimpleDay | null {
    const event = this.getEvent(eventId);
    if (!event) return null;
    return event.days.find(day => day.id === dayId) || null;
  }

  // Get specific task
  public getTask(eventId: string, dayId: string, taskId: string): SimpleTask | null {
    const day = this.getDay(eventId, dayId);
    if (!day) return null;
    return day.tasks.find(task => task.id === taskId) || null;
  }

  // Check if day is unlocked
  public isDayUnlocked(eventId: string, dayNumber: number): boolean {
    if (dayNumber === 1) return true; // First day always unlocked
    
    const eventProgress = this.userProgress.events[eventId];
    if (!eventProgress) return false;
    
    // Unlock next day if previous day is completed
    const previousDayId = `${eventId}-day-${dayNumber - 1}`;
    return eventProgress.completedDays.includes(previousDayId);
  }

  // Check if day is completed
  public isDayCompleted(eventId: string, dayId: string): boolean {
    const eventProgress = this.userProgress.events[eventId];
    return eventProgress?.completedDays.includes(dayId) || false;
  }

  // Check if task is unlocked (all tasks in a day are unlocked if day is unlocked)
  public isTaskUnlocked(eventId: string, dayId: string, taskId: string): boolean {
    const event = this.events.find(e => e.id === eventId);
    if (!event) return false;
    
    const day = event.days.find(d => d.id === dayId);
    if (!day) return false;
    
    return this.isDayUnlocked(eventId, day.dayNumber);
  }

  // Check if task is completed
  public isTaskCompleted(eventId: string, taskId: string): boolean {
    const eventProgress = this.userProgress.events[eventId];
    return eventProgress?.completedTasks.includes(taskId) || false;
  }

  // Get task score
  public getTaskScore(eventId: string, taskId: string): number | undefined {
    const eventProgress = this.userProgress.events[eventId];
    if (!eventProgress) return undefined;
    
    // Find task score from completed tasks (we'll store it in a map)
    const taskScoreKey = `${eventId}_${taskId}_score`;
    return parseInt(localStorage.getItem(taskScoreKey) || '0') || undefined;
  }

  // Complete a task
  public completeTask(eventId: string, dayId: string, taskId: string, score: number, timeSpent: number = 0): void {
    // Initialize event progress if it doesn't exist
    if (!this.userProgress.events[eventId]) {
      this.userProgress.events[eventId] = {
        eventId,
        currentDay: 1,
        completedDays: [],
        completedTasks: [],
        totalScore: 0,
        timeSpent: 0,
        lastAccessed: new Date(),
        isCompleted: false
      };
    }

    const eventProgress = this.userProgress.events[eventId];
    
    // Add task to completed if not already there
    if (!eventProgress.completedTasks.includes(taskId)) {
      eventProgress.completedTasks.push(taskId);
      eventProgress.totalScore += score;
      eventProgress.timeSpent += timeSpent;
      eventProgress.lastAccessed = new Date();
      
      // Store individual task score
      const taskScoreKey = `${eventId}_${taskId}_score`;
      localStorage.setItem(taskScoreKey, score.toString());
      
      // Update overall stats
      this.userProgress.overallStats.totalXP += score;
      this.userProgress.overallStats.totalTimeSpent += timeSpent;
      this.userProgress.overallStats.tasksCompleted += 1;
      this.userProgress.overallStats.lastActiveDate = new Date();
      
      console.log(`✅ Task completed: ${taskId} (Score: ${score})`);
      
      // Check if day is completed
      this.checkDayCompletion(eventId, dayId);
      
      // Save progress
      this.saveProgress();
    }
  }

  // Check and mark day as completed if all tasks are done
  private checkDayCompletion(eventId: string, dayId: string): void {
    const day = this.getDay(eventId, dayId);
    if (!day) return;
    
    const eventProgress = this.userProgress.events[eventId];
    const allTasksCompleted = day.tasks.every(task => 
      eventProgress.completedTasks.includes(task.id)
    );
    
    if (allTasksCompleted && !eventProgress.completedDays.includes(dayId)) {
      eventProgress.completedDays.push(dayId);
      eventProgress.currentDay = Math.min(day.dayNumber + 1, 30); // Move to next day
      
      console.log(`🎉 Day completed: ${dayId}`);
      
      // Check if event is completed
      this.checkEventCompletion(eventId);
    }
  }

  // Check and mark event as completed
  private checkEventCompletion(eventId: string): void {
    const event = this.events.find(e => e.id === eventId);
    if (!event) return;
    
    const eventProgress = this.userProgress.events[eventId];
    const allDaysCompleted = event.days.every(day => 
      eventProgress.completedDays.includes(day.id)
    );
    
    if (allDaysCompleted && !eventProgress.isCompleted) {
      eventProgress.isCompleted = true;
      eventProgress.completedAt = new Date();
      
      // Update overall stats
      this.userProgress.overallStats.eventsCompleted += 1;
      
      console.log(`🏆 Event completed: ${eventId}`);
    }
  }

  // Get event progress summary
  public getEventProgress(eventId: string): SimpleEventProgress | null {
    return this.userProgress.events[eventId] || null;
  }

  // Get overall user stats
  public getUserStats(): SimpleUserProgress['overallStats'] {
    // Calculate average score
    const totalTasks = this.userProgress.overallStats.tasksCompleted;
    if (totalTasks > 0) {
      this.userProgress.overallStats.averageScore = Math.round(
        this.userProgress.overallStats.totalXP / totalTasks
      );
    }
    
    return this.userProgress.overallStats;
  }

  // Reset all progress (for testing)
  public resetProgress(): void {
    this.initializeProgress();
    // Clear task scores
    Object.keys(localStorage).forEach(key => {
      if (key.includes('_score')) {
        localStorage.removeItem(key);
      }
    });
    console.log('🔄 Progress reset');
  }

  // Export progress (for backup)
  public exportProgress(): string {
    return JSON.stringify(this.userProgress, null, 2);
  }

  // Import progress (for restore)
  public importProgress(progressData: string): boolean {
    try {
      const imported = JSON.parse(progressData);
      this.userProgress = imported;
      this.saveProgress();
      console.log('✅ Progress imported successfully');
      return true;
    } catch (error) {
      console.error('❌ Failed to import progress:', error);
      return false;
    }
  }
}

// Export singleton instance
export const simpleEventsService = SimpleEventsService.getInstance();

// Utility functions for easy access
export const getEvents = () => simpleEventsService.getEvents();
export const getEvent = (eventId: string) => simpleEventsService.getEvent(eventId);
export const getDay = (eventId: string, dayId: string) => simpleEventsService.getDay(eventId, dayId);
export const getTask = (eventId: string, dayId: string, taskId: string) => simpleEventsService.getTask(eventId, dayId, taskId);
export const completeTask = (eventId: string, dayId: string, taskId: string, score: number, timeSpent?: number) => 
  simpleEventsService.completeTask(eventId, dayId, taskId, score, timeSpent);
export const getUserStats = () => simpleEventsService.getUserStats();
export const getEventProgress = (eventId: string) => simpleEventsService.getEventProgress(eventId);
