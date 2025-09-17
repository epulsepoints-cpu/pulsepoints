import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Home, Trophy, Star, Calendar, Clock } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { simpleEventsService } from '../../services/simpleEventsService';
import { SimpleEvent } from '../../types/simpleEventTypes';
import EventsHub from './EventsHub';
import EventView from './EventView';
import TaskRunner from './TaskRunner';

type ViewType = 'hub' | 'event' | 'task';

interface EventsMainState {
  view: ViewType;
  selectedEventId?: string;
  selectedTaskId?: string;
  selectedTaskType?: string;
}

interface EventsMainProps {
  onShowLogin?: () => void;
  onBack?: () => void;
}

export const EventsMain: React.FC<EventsMainProps> = ({ 
  onShowLogin,
  onBack: onMainBack 
}) => {
  const { user } = useAuth();
  const [state, setState] = useState<EventsMainState>({
    view: 'hub'
  });
  const [events, setEvents] = useState<SimpleEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        setLoading(true);
        const eventsData = await simpleEventsService.getEvents();
        setEvents(eventsData);
      } catch (error) {
        console.error('Failed to load events:', error);
      } finally {
        setLoading(false);
      }
    };

    loadEvents();
  }, []);

  const handleEventSelect = (eventId: string) => {
    setState({
      view: 'event',
      selectedEventId: eventId
    });
  };

  const handleTaskSelect = (taskId: string, taskType: string) => {
    setState({
      view: 'task',
      selectedEventId: state.selectedEventId,
      selectedTaskId: taskId,
      selectedTaskType: taskType
    });
  };

  const handleTaskComplete = async (taskId: string, score: number) => {
    if (!state.selectedEventId) return;

    try {
      // Extract dayId from taskId (assuming format like "event-day-X-task-Y")
      const dayId = taskId.split('-task-')[0];
      
      // Save task completion
      await simpleEventsService.completeTask(
        state.selectedEventId,
        dayId,
        taskId,
        score
      );

      // Refresh events data to update progress
      const updatedEvents = await simpleEventsService.getEvents();
      setEvents(updatedEvents);

      // Navigate back to event view
      setState({
        view: 'event',
        selectedEventId: state.selectedEventId
      });
    } catch (error) {
      console.error('Failed to save task completion:', error);
      // Still navigate back on error
      setState({
        view: 'event',
        selectedEventId: state.selectedEventId
      });
    }
  };

  const handleBack = () => {
    switch (state.view) {
      case 'task':
        setState({
          view: 'event',
          selectedEventId: state.selectedEventId
        });
        break;
      case 'event':
        setState({
          view: 'hub'
        });
        break;
      default:
        if (onMainBack) {
          onMainBack();
        } else {
          setState({ view: 'hub' });
        }
    }
  };

  const handleHome = () => {
    setState({
      view: 'hub',
      selectedEventId: undefined,
      selectedTaskId: undefined,
      selectedTaskType: undefined
    });
  };

  const getBreadcrumbs = () => {
    const crumbs = [];
    
    crumbs.push({
      label: 'Events Hub',
      icon: Home,
      active: state.view === 'hub',
      onClick: handleHome
    });

    if (state.selectedEventId) {
      const event = events.find(e => e.id === state.selectedEventId);
      if (event) {
        crumbs.push({
          label: event.title,
          icon: Calendar,
          active: state.view === 'event',
          onClick: () => setState({ ...state, view: 'event' })
        });
      }
    }

    if (state.selectedTaskId) {
      crumbs.push({
        label: 'Task',
        icon: Clock,
        active: state.view === 'task',
        onClick: () => {}
      });
    }

    return crumbs;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading Events...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Full Width Main Content - No Headers */}
      <div className="w-full">
        <AnimatePresence mode="wait">
          {state.view === 'hub' && (
            <motion.div
              key="hub"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <EventsHub 
                onNavigateToEvent={handleEventSelect}
                onShowLogin={onShowLogin}
                onBack={onMainBack}
              />
            </motion.div>
          )}

          {state.view === 'event' && state.selectedEventId && (
            <motion.div
              key="event"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <EventView 
                eventId={state.selectedEventId}
                onStartTask={handleTaskSelect}
                onBack={handleBack}
              />
            </motion.div>
          )}

          {state.view === 'task' && state.selectedTaskId && state.selectedTaskType && state.selectedEventId && (
            <motion.div
              key="task"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TaskRunner 
                taskId={state.selectedTaskId}
                taskType={state.selectedTaskType}
                eventId={state.selectedEventId}
                onComplete={handleTaskComplete}
                onBack={handleBack}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EventsMain;
