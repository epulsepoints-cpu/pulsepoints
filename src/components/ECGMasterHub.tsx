import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { useGameState } from '@/hooks/useGameState';
import { getUserAchievements, claimAchievementReward, checkAchievements } from '@/services/achievementService';
import { getUserProgressStats, updateUserProgressOnLessonComplete } from '@/services/progressService';
import { handleLessonCompletion } from '@/services/consolidatedProgressService';
import { useUnifiedNotifications } from '@/hooks/useUnifiedNotifications';
import { unifiedNotificationService } from '@/services/unifiedNotificationService';
import { useUISounds } from '@/hooks/useUISounds';
import { 
  BookOpen, 
  Trophy, 
  Target, 
  Settings,
  Crown,
  Flame,
  Zap,
  Heart,
  Diamond,
  Star,
  TrendingUp,
  Award,
  Calendar,
  ChevronRight,
  Play,
  BarChart3,
  Brain,
  Activity,
  Sparkles,
  CheckCircle,
  Lock,
  ArrowLeft,
  Map,
  Bell,
  BellRing,
  Clock,
  GraduationCap,
  Users,
  Lightbulb,
  BookMarked,
  Timer,
  Gauge,
  Check,
  Home,
  ChevronLeft,
  Navigation,
  Compass,
  MapPin,
  Route,
  Stethoscope,
  Activity as Pulse,
  Monitor,
  FileText,
  Image,
  Video,
  Headphones,
  Globe,
  Library,
  School,
  Bookmark
} from 'lucide-react';

// Import our Duolingo components
import ECGLearningPath from './ECGLearningPath';
import EnhancedDuolingoLesson from './EnhancedDuolingoLesson';
import ECGLearningRoadmap from './ECGLearningRoadmap';

// Import the comprehensive sample modules
import { sampleLearningModules } from '@/data/sampleModules';
import { optimizedLesson1 } from '@/data/optimized-lesson-1';
import { optimizedLesson2 } from '@/data/optimized-lesson-2';
import { optimizedLesson3 } from '@/data/optimized-lesson-3';
import { optimizedLesson4 } from '@/data/optimized-lesson-4';
import { optimizedLesson5 } from '@/data/optimized-lesson-5';
import { optimizedLesson6 } from '@/data/optimized-lesson-6';
import { optimizedLesson7 } from '@/data/optimized-lesson-7';
import { optimizedLesson8 } from '@/data/optimized-lesson-8';
import { optimizedLesson9 } from '@/data/optimized-lesson-9';
import { optimizedLesson10 } from '@/data/optimized-lesson-10';
import { optimizedLesson11 } from '@/data/optimized-lesson-11';
import { optimizedLesson12 } from '@/data/optimized-lesson-12';
import { optimizedLesson13 } from '@/data/optimized-lesson-13';
import { optimizedLesson14 } from '@/data/optimized-lesson-14';
import { optimizedLesson15 } from '@/data/optimized-lesson-15';
import { optimizedLesson16 } from '@/data/optimized-lesson-16';
import { optimizedLesson17 } from '@/data/optimized-lesson-17';
import { optimizedLesson18 } from '@/data/optimized-lesson-18';
import { optimizedLesson19 } from '@/data/optimized-lesson-19';
import { optimizedLesson20 } from '@/data/optimized-lesson-20';
import { optimizedLesson21 } from '@/data/optimized-lesson-21';
import { optimizedLesson22 } from '@/data/optimized-lesson-22';
import { optimizedLesson23 } from '@/data/optimized-lesson-23';
import { optimizedLesson24 } from '@/data/optimized-lesson-24';
import { optimizedLesson25 } from '@/data/optimized-lesson-25';
import { optimizedLesson26Comprehensive } from '@/data/optimized-lesson-26';
import { optimizedLesson27Comprehensive } from '@/data/optimized-lesson-27';
import { optimizedLesson28 } from '@/data/optimized-lesson-28';
import { optimizedLesson29 } from '@/data/optimized-lesson-29';
import { optimizedLesson30 } from '@/data/optimized-lesson-30';
import { optimizedLesson31 } from '@/data/optimized-lesson-31-6unit';
import { optimizedLesson32 } from '@/data/optimized-lesson-32';
import { optimizedLesson33 } from '@/data/optimized-lesson-33';
import { optimizedLesson34 } from '@/data/optimized-lesson-34';
// Enhanced 6-Unit Lessons
import { optimizedLesson33 as optimizedLesson33_6Unit } from '@/data/optimized-lesson-33-6unit';
import { optimizedLesson34 as optimizedLesson34_6Unit } from '@/data/optimized-lesson-34-6unit';
import { optimizedLesson35 } from '@/data/optimized-lesson-35';
import { optimizedLesson36 } from '@/data/optimized-lesson-36';
import { optimizedLesson37 } from '@/data/optimized-lesson-37';
import { optimizedLesson37 as optimizedLesson37_6Unit } from '@/data/optimized-lesson-37-6unit';
import { optimizedLesson38 as optimizedLesson38_6Unit } from '@/data/optimized-lesson-38-6unit';
import { optimizedLesson39 as optimizedLesson39_6Unit } from '@/data/optimized-lesson-39-6unit';
import { optimizedLesson40 as optimizedLesson40_6Unit } from '@/data/optimized-lesson-40-6unit';
import { optimizedLesson41 as optimizedLesson41_6Unit } from '@/data/optimized-lesson-41-6unit';
import { optimizedLesson42 as optimizedLesson42_6Unit } from '@/data/optimized-lesson-42-6unit';
import { optimizedLesson43 as optimizedLesson43_6Unit } from '@/data/optimized-lesson-43-6unit';
import { optimizedLesson38 } from '@/data/optimized-lesson-38';
import { optimizedLesson39 } from '@/data/optimized-lesson-39';
import { optimizedLesson39Module4 } from '@/data/optimized-lesson-39-module4';
import { optimizedLesson40 } from '@/data/optimized-lesson-40';
import { optimizedLesson41 } from '@/data/optimized-lesson-41';
import { optimizedLesson42 } from '@/data/optimized-lesson-42';
import { optimizedLesson43 } from '@/data/optimized-lesson-43';
import { optimizedLesson44 } from '@/data/optimized-lesson-44';
import { optimizedLesson45 } from '@/data/optimized-lesson-45';
import { optimizedLesson46 } from '@/data/optimized-lesson-46';
import { optimizedLesson47 } from '@/data/optimized-lesson-47';
import { optimizedLesson48 } from '@/data/optimized-lesson-48';
import { optimizedLesson49 } from '@/data/optimized-lesson-49';
import { optimizedLesson50 } from '@/data/optimized-lesson-50';
import { optimizedLesson51 } from '@/data/optimized-lesson-51';
import { optimizedLesson52 } from '@/data/optimized-lesson-52';
import { optimizedLesson53 } from '@/data/optimized-lesson-53';
import { optimizedLesson54 } from '@/data/optimized-lesson-54';
import { optimizedLesson55 } from '@/data/optimized-lesson-55';
import { optimizedLesson56 } from '@/data/optimized-lesson-56';
import { optimizedLesson57 } from '@/data/optimized-lesson-57';
import { optimizedLesson58 } from '@/data/optimized-lesson-58';
import { optimizedLesson59 } from '@/data/optimized-lesson-59';
import { optimizedLesson60 } from '@/data/optimized-lesson-60';
import { optimizedLesson61 } from '@/data/optimized-lesson-61';
import { optimizedLesson62 } from '@/data/optimized-lesson-62';
import { optimizedLesson63 } from '@/data/optimized-lesson-63';
import { optimizedLesson64 } from '@/data/optimized-lesson-64';
import { optimizedLesson65 } from '@/data/optimized-lesson-65';
import { optimizedLesson66 } from '@/data/optimized-lesson-66';
import { optimizedLesson67 } from '@/data/optimized-lesson-67';
import { optimizedLesson68 } from '@/data/optimized-lesson-68';
import { optimizedLesson69 } from '@/data/optimized-lesson-69-6unit';
import { optimizedLesson70 } from '@/data/optimized-lesson-70-6unit';
import { optimizedLesson71 } from '@/data/optimized-lesson-71-6unit';
import { optimizedLesson72 } from '@/data/optimized-lesson-72-6unit';
import { optimizedLesson73 } from '@/data/optimized-lesson-73';
import { optimizedLesson74 } from '@/data/optimized-lesson-74';
import { optimizedLesson75 } from '@/data/optimized-lesson-75';
import { optimizedLesson76 } from '@/data/optimized-lesson-76';
import { optimizedLesson77 } from '@/data/optimized-lesson-77';
import { optimizedLesson78 } from '@/data/optimized-lesson-78';
import { optimizedLesson79 } from '@/data/optimized-lesson-79';
import { optimizedLesson80 } from '@/data/optimized-lesson-80';
import { optimizedLesson81 } from '@/data/optimized-lesson-81';
import { optimizedLesson82 } from '@/data/optimized-lesson-82';
import { optimizedLesson83 } from '@/data/optimized-lesson-83';
import { optimizedLesson84 } from '@/data/optimized-lesson-84';
import { LearningModule, Lesson, ModuleProgress } from '@/types/learning';
import { GameState } from '@/types/game';

// Convert sample modules to full LearningModule format with proper IDs
const convertToFullModules = (): LearningModule[] => {
  return sampleLearningModules.map((module, index) => ({
    ...module,
    id: `module-${index + 1}`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    unlocked: true, // All modules now unlocked by default
    order: index + 1,
    tags: ['ecg', 'cardiology', module.category],
    featured: false,
    lessons: module.lessons.map((lesson, lessonIndex) => {
      const lessonId = `module-${index + 1}-lesson-${lessonIndex + 1}`;
      
      // Use enhanced lesson for module-1-lesson-1
      if (lessonId === 'module-1-lesson-1') {
        console.log('🎯 CREATING OPTIMIZED LESSON for', lessonId, {
          originalTitle: lesson.title,
          optimizedTitle: optimizedLesson1.title,
          tasksCount: optimizedLesson1.tasks?.length,
          slidesCount: optimizedLesson1.content?.slides?.length
        });
        
        return {
          ...optimizedLesson1,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      // Use enhanced lesson for module-1-lesson-2
      if (lessonId === 'module-1-lesson-2') {
        console.log('🎯 CREATING OPTIMIZED LESSON 2 for', lessonId, {
          originalTitle: lesson.title,
          optimizedTitle: optimizedLesson2.title,
          tasksCount: optimizedLesson2.tasks?.length,
          slidesCount: optimizedLesson2.content?.slides?.length
        });
        
        return {
          ...optimizedLesson2,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      // Use enhanced lesson for module-1-lesson-3
      if (lessonId === 'module-1-lesson-3') {
        console.log('🎯 CREATING OPTIMIZED LESSON 3 for', lessonId, {
          originalTitle: lesson.title,
          optimizedTitle: optimizedLesson3.title,
          tasksCount: optimizedLesson3.tasks?.length,
          slidesCount: optimizedLesson3.content?.slides?.length
        });
        
        return {
          ...optimizedLesson3,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      // Use enhanced lesson for module-1-lesson-4
      if (lessonId === 'module-1-lesson-4') {
        console.log('🎯 CREATING OPTIMIZED LESSON 4 for', lessonId, {
          originalTitle: lesson.title,
          optimizedTitle: optimizedLesson4.title,
          tasksCount: optimizedLesson4.tasks?.length,
          slidesCount: optimizedLesson4.content?.slides?.length
        });
        
        return {
          ...optimizedLesson4,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      // Use enhanced lesson for module-1-lesson-5
      if (lessonId === 'module-1-lesson-5') {
        console.log('🎯 CREATING OPTIMIZED LESSON 5 for', lessonId, {
          originalTitle: lesson.title,
          optimizedTitle: optimizedLesson5.title,
          tasksCount: optimizedLesson5.tasks?.length,
          slidesCount: optimizedLesson5.content?.slides?.length
        });
        
        return {
          ...optimizedLesson5,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      // Use enhanced lesson for module-1-lesson-6
      if (lessonId === 'module-1-lesson-6') {
        console.log('🎯 CREATING OPTIMIZED LESSON 6 for', lessonId, {
          originalTitle: lesson.title,
          optimizedTitle: optimizedLesson6.title,
          tasksCount: optimizedLesson6.tasks?.length,
          slidesCount: optimizedLesson6.content?.slides?.length
        });
        
        return {
          ...optimizedLesson6,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      // Use enhanced lesson for module-1-lesson-7
      if (lessonId === 'module-1-lesson-7') {
        console.log('🎯 CREATING OPTIMIZED LESSON 7 for', lessonId, {
          originalTitle: lesson.title,
          optimizedTitle: optimizedLesson7.title,
          tasksCount: optimizedLesson7.tasks?.length,
          slidesCount: optimizedLesson7.content?.slides?.length
        });
        
        return {
          ...optimizedLesson7,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      // Use enhanced lesson for module-1-lesson-8
      if (lessonId === 'module-1-lesson-8') {
        console.log('🎯 CREATING OPTIMIZED LESSON 8 for', lessonId, {
          originalTitle: lesson.title,
          optimizedTitle: optimizedLesson8.title,
          tasksCount: optimizedLesson8.tasks?.length,
          slidesCount: optimizedLesson8.content?.slides?.length
        });
        
        return {
          ...optimizedLesson8,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      // Use enhanced lesson for module-1-lesson-9
      if (lessonId === 'module-1-lesson-9') {
        console.log('🎯 CREATING OPTIMIZED LESSON 9 for', lessonId, {
          originalTitle: lesson.title,
          optimizedTitle: optimizedLesson9.title,
          tasksCount: optimizedLesson9.tasks?.length,
          slidesCount: optimizedLesson9.content?.slides?.length
        });
        
        return {
          ...optimizedLesson9,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      // Use enhanced lesson for module-1-lesson-10
      if (lessonId === 'module-1-lesson-10') {
        console.log('🎯 CREATING OPTIMIZED LESSON 10 for', lessonId, {
          originalTitle: lesson.title,
          optimizedTitle: optimizedLesson10.title,
          tasksCount: optimizedLesson10.tasks?.length,
          slidesCount: optimizedLesson10.content?.slides?.length
        });
        
        return {
          ...optimizedLesson10,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      // Module 2 optimized lessons (lesson-2-1 through lesson-2-10)
      if (lessonId === 'module-2-lesson-1') {
        return {
          ...optimizedLesson11,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-2-lesson-2') {
        return {
          ...optimizedLesson12,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-2-lesson-3') {
        return {
          ...optimizedLesson13,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-2-lesson-4') {
        return {
          ...optimizedLesson14,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-2-lesson-5') {
        return {
          ...optimizedLesson15,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-2-lesson-6') {
        return {
          ...optimizedLesson16,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-2-lesson-7') {
        return {
          ...optimizedLesson17,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-2-lesson-8') {
        return {
          ...optimizedLesson18,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-2-lesson-9') {
        return {
          ...optimizedLesson19,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-2-lesson-10') {
        return {
          ...optimizedLesson20,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      // Module 3 optimized lessons (lesson-3-1 through lesson-3-8)
      if (lessonId === 'module-3-lesson-1') {
        return {
          ...optimizedLesson21,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-3-lesson-2') {
        return {
          ...optimizedLesson22,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-3-lesson-3') {
        return {
          ...optimizedLesson23,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-3-lesson-4') {
        return {
          ...optimizedLesson24,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-3-lesson-5') {
        return {
          ...optimizedLesson25,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-3-lesson-6') {
        return {
          ...optimizedLesson26Comprehensive,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-3-lesson-7') {
        return {
          ...optimizedLesson27Comprehensive,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-3-lesson-8') {
        return {
          ...optimizedLesson28,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      // Module 4 optimized lessons (lesson-4-1 through lesson-4-8)
      if (lessonId === 'module-4-lesson-1') {
        return {
          ...optimizedLesson69,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-4-lesson-2') {
        return {
          ...optimizedLesson70,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-4-lesson-3') {
        return {
          ...optimizedLesson71,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-4-lesson-4') {
        return {
          ...optimizedLesson72,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-4-lesson-5') {
        return {
          ...optimizedLesson73,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-4-lesson-6') {
        return {
          ...optimizedLesson74,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-4-lesson-7') {
        return {
          ...optimizedLesson75,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-4-lesson-8') {
        return {
          ...optimizedLesson76,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      // Module 5: Ventricular Rhythms - Optimized Lessons 39-44
      if (lessonId === 'module-5-lesson-1') {
        return {
          ...optimizedLesson37_6Unit,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-5-lesson-2') {
        return {
          ...optimizedLesson38_6Unit,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-5-lesson-3') {
        return {
          ...optimizedLesson39_6Unit,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-5-lesson-4') {
        return {
          ...optimizedLesson40_6Unit,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-5-lesson-5') {
        return {
          ...optimizedLesson41_6Unit,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-5-lesson-6') {
        return {
          ...optimizedLesson42_6Unit,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-5-lesson-7') {
        return {
          ...optimizedLesson43_6Unit,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-5-lesson-8') {
        return {
          ...optimizedLesson44,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      // Module 6 - AV Blocks & Complex Arrhythmias
      if (lessonId === 'module-6-lesson-1') {
        return {
          ...optimizedLesson45,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-6-lesson-2') {
        return {
          ...optimizedLesson46,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-6-lesson-3') {
        return {
          ...optimizedLesson47,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-6-lesson-4') {
        return {
          ...optimizedLesson48,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-6-lesson-5') {
        return {
          ...optimizedLesson49,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-6-lesson-6') {
        return {
          ...optimizedLesson50,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-6-lesson-7') {
        return {
          ...optimizedLesson51,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-6-lesson-8') {
        return {
          ...optimizedLesson52,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      // Module 7 - Emergency Arrhythmias
      if (lessonId === 'module-7-lesson-1') {
        return {
          ...optimizedLesson53,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-7-lesson-2') {
        return {
          ...optimizedLesson54,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-7-lesson-3') {
        return {
          ...optimizedLesson55,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-7-lesson-4') {
        return {
          ...optimizedLesson56,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-7-lesson-5') {
        return {
          ...optimizedLesson57,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-7-lesson-6') {
        return {
          ...optimizedLesson58,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-7-lesson-7') {
        return {
          ...optimizedLesson59,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-7-lesson-8') {
        return {
          ...optimizedLesson60,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      // Module 8: Electrolytes & Medications
      if (lessonId === 'module-8-lesson-1') {
        return {
          ...optimizedLesson61,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-8-lesson-2') {
        return {
          ...optimizedLesson62,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-8-lesson-3') {
        return {
          ...optimizedLesson63,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-8-lesson-4') {
        return {
          ...optimizedLesson64,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-8-lesson-5') {
        return {
          ...optimizedLesson65,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-8-lesson-6') {
        return {
          ...optimizedLesson66,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-8-lesson-7') {
        return {
          ...optimizedLesson67,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-8-lesson-8') {
        return {
          ...optimizedLesson68,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      // Module 9: Junctional Rhythms
      if (lessonId === 'module-9-lesson-1') {
        return {
          ...optimizedLesson30,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-9-lesson-2') {
        return {
          ...optimizedLesson31,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-9-lesson-3') {
        return {
          ...optimizedLesson32,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-9-lesson-4') {
        return {
          ...optimizedLesson33_6Unit,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-9-lesson-5') {
        return {
          ...optimizedLesson34_6Unit,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-9-lesson-6') {
        return {
          ...optimizedLesson35,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-9-lesson-7') {
        return {
          ...optimizedLesson36,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-9-lesson-8') {
        return {
          ...optimizedLesson37_6Unit,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      // Module 10: Special ECG Patterns & Advanced Topics
      if (lessonId === 'module-10-lesson-1') {
        return {
          ...optimizedLesson77,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-10-lesson-2') {
        return {
          ...optimizedLesson78,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-10-lesson-3') {
        return {
          ...optimizedLesson79,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-10-lesson-4') {
        return {
          ...optimizedLesson80,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-10-lesson-5') {
        return {
          ...optimizedLesson81,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-10-lesson-6') {
        return {
          ...optimizedLesson82,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-10-lesson-7') {
        return {
          ...optimizedLesson83,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }

      if (lessonId === 'module-10-lesson-8') {
        return {
          ...optimizedLesson84,
          id: lessonId,
          moduleId: `module-${index + 1}`
        };
      }
      
      // For other lessons, create a complete lesson with default properties
      return {
        ...lesson,
        id: lessonId,
        moduleId: `module-${index + 1}`,
        content: {
          type: 'mixed' as const,
          introduction: lesson.description,
          sections: [],
          slides: [],
          summary: `Complete the ${lesson.title} lesson.`,
          keyPoints: [lesson.title],
          resources: []
        },
        tasks: [],
        completed: false,
        attempts: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
    })
  }));
};

const comprehensiveModules = convertToFullModules();

interface ECGMasterHubProps {
  onLessonComplete: (moduleId: string, lessonId: string, score: number, timeSpent: number, perfect?: boolean) => void;
  onHeartLost: () => void;
  onBack: () => void;
  onLessonViewChange?: (isInLessonView: boolean) => void; // New callback for lesson view state
}

// Enhanced progress tracking state
interface ModuleProgressState {
  moduleId: string;
  status: 'locked' | 'available' | 'in-progress' | 'completed' | 'mastered';
  completedLessons: number;
  totalLessons: number;
  lastAccessed?: string;
  averageScore?: number;
  totalTimeSpent?: number;
  streak?: number;
  masteryLevel?: number; // 0-100
}

// Navigation breadcrumb interface
interface Breadcrumb {
  label: string;
  view: string;
  icon?: React.ReactNode;
}

// Enhanced view types
type ViewType = 'home' | 'learn' | 'lesson' | 'notifications' | 'module-detail' | 'learning-path' | 'achievements' | 'profile';

// ECG Mastery Path structure
interface MasteryPath {
  id: string;
  title: string;
  description: string;
  totalModules: number;
  estimatedWeeks: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  prerequisites?: string[];
  modules: string[];
  skillsLearned: string[];
  careerRelevance: string;
  badge?: string;
}

const ECGMasterHub: React.FC<ECGMasterHubProps> = ({
  onLessonComplete,
  onHeartLost,
  onBack,
  onLessonViewChange
}) => {
  // Use useGameState directly to get all the necessary functions and state
  const { gameState, loadLearningProgress, completeLearningLesson } = useGameState();
  const { createNotification } = useUnifiedNotifications();
  
  // Initialize UI sounds
  const { playRewardSound, playClickSound, playSwooshSound, playBrandSound, playCorrectSound, playErrorSound } = useUISounds();
  
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedLesson, setSelectedLesson] = useState<any>(null);
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [currentModuleId, setCurrentModuleId] = useState<number | null>(null);
  const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([
    { label: 'ECG Master', view: 'home', icon: <Home className="w-4 h-4" /> }
  ]);
  
  // New state for Firebase integration
  const [achievements, setAchievements] = useState<any[]>([]);
  const [progressStats, setProgressStats] = useState<any>(null);
  const [isLoadingData, setIsLoadingData] = useState(false); // Changed from true to false initially
  
  // ECG Mastery Paths - structured learning routes
  const masteryPaths: MasteryPath[] = [
    {
      id: 'fundamentals',
      title: 'ECG Fundamentals Mastery',
      description: 'Master the basics of ECG interpretation from anatomy to rhythm recognition',
      totalModules: 2,
      estimatedWeeks: 4,
      difficulty: 'beginner',
      modules: ['module-1', 'module-2'],
      skillsLearned: ['Heart anatomy', 'Lead placement', 'Basic waveforms', 'Normal rhythms'],
      careerRelevance: 'Essential for nurses, EMTs, and medical students',
      badge: '🏆 ECG Foundation'
    },
    {
      id: 'clinical',
      title: 'Clinical ECG Interpretation',
      description: 'Advanced interpretation skills for real clinical scenarios',
      totalModules: 3,
      estimatedWeeks: 8,
      difficulty: 'intermediate',
      prerequisites: ['fundamentals'],
      modules: ['module-3', 'module-4', 'module-5'],
      skillsLearned: ['Arrhythmia recognition', 'Axis calculation', 'MI diagnosis', 'Clinical correlation'],
      careerRelevance: 'For healthcare professionals and residents',
      badge: '👨‍⚕️ Clinical Expert'
    },
    {
      id: 'advanced',
      title: 'Advanced ECG Mastery',
      description: 'Expert-level interpretation and complex cases',
      totalModules: 2,
      estimatedWeeks: 6,
      difficulty: 'advanced',
      prerequisites: ['clinical'],
      modules: ['module-6', 'module-7'],
      skillsLearned: ['Complex arrhythmias', 'Pacemaker rhythms', 'Drug effects', 'Electrolyte disorders'],
      careerRelevance: 'For cardiologists and critical care specialists',
      badge: '👑 ECG Master'
    }
  ];
  
  // Use gameState for user and progress data
  const user = gameState.user;
  const learningProgress = gameState.learningProgress;

  // Initialize learning progress on component mount
  useEffect(() => {
    const initializeLearningProgress = async () => {
      // Check if learning progress is empty or not loaded and user is authenticated
      if (gameState.isAuthenticated && !gameState.isGuestUser && gameState.user?.id) {
        if (!learningProgress || Object.keys(learningProgress).length === 0) {
          console.log('📚 ECG Master Hub: Loading learning progress for user:', gameState.user.id);
          
          try {
            // Call the loadLearningProgress function to initialize or load existing progress
            await loadLearningProgress();
            console.log('✅ ECG Master Hub: Learning progress loaded successfully');
          } catch (error) {
            console.error('❌ ECG Master Hub: Error loading learning progress:', error);
          }
        } else {
          console.log('✅ ECG Master Hub: Learning progress already loaded with', Object.keys(learningProgress).length, 'modules');
        }
      } else {
        console.log('⚠️ ECG Master Hub: Waiting for user authentication...');
      }
    };

    initializeLearningProgress();
  }, [gameState.isAuthenticated, gameState.user?.id, gameState.isGuestUser, loadLearningProgress, learningProgress]);

  // Check for recommended module from assessment and auto-navigate
  useEffect(() => {
    const handleRecommendedModule = async () => {
      const recommendedModule = localStorage.getItem('ecg-recommended-module');
      if (recommendedModule && gameState.isAuthenticated) {
        console.log('🎯 Auto-navigating to recommended module:', recommendedModule);
        
        // Navigate to the specific module
        const moduleId = `module-${recommendedModule}`;
        setSelectedModule(moduleId);
        setCurrentView('module-detail');
        
        // Update breadcrumbs
        setBreadcrumbs([
          { label: 'ECG Master', view: 'home', icon: <Home className="w-4 h-4" /> },
          { label: `Module ${recommendedModule}`, view: 'module-detail', icon: <BookOpen className="w-4 h-4" /> }
        ]);
        
        // Clear the stored recommendation
        localStorage.removeItem('ecg-recommended-module');
        
        // Show success notification
        if (gameState.user?.id) {
          await unifiedNotificationService.createNotification({
            userId: gameState.user.id,
            title: 'Assessment Complete! 🎉',
            body: `Welcome to Module ${recommendedModule}! This module is recommended based on your assessment performance.`,
            type: 'progress',
            actionUrl: `/ecg-master?module=${recommendedModule}`,
            category: 'success',
            priority: 'normal'
          });
        }
      }
    };

    handleRecommendedModule();
  }, [gameState.isAuthenticated, gameState.user?.id]);

  // Load user achievements and progress data
  useEffect(() => {
    if (gameState.isAuthenticated && !gameState.isGuestUser && gameState.user?.id) {
      loadUserData();
    }
  }, [gameState.isAuthenticated, gameState.user?.id]);

  const loadUserData = async () => {
    if (!gameState.user?.id) return;
    
    setIsLoadingData(true);
    try {
      // Load achievements and progress stats in parallel
      const [achievementsData, statsData] = await Promise.all([
        getUserAchievements(gameState.user.id),
        getUserProgressStats(gameState.user.id)
      ]);
      
      // Convert Firebase achievements to array format if needed
      let achievementsArray: any[] = [];
      if (achievementsData && achievementsData.achievements) {
        // Convert object to array format
        achievementsArray = Object.entries(achievementsData.achievements).map(([id, achievement]) => ({
          id,
          ...achievement
        }));
      }
      
      setAchievements(achievementsArray);
      setProgressStats(statsData);
      
      console.log('✅ User data loaded:', { achievementsArray, statsData });
    } catch (error) {
      console.error('❌ Failed to load user data:', error);
    } finally {
      setIsLoadingData(false);
    }
  };

  const loadUserAchievements = async () => {
    if (!gameState.user?.id) return;
    
    try {
      const achievementsData = await getUserAchievements(gameState.user.id);
      
      // Convert Firebase achievements to array format if needed
      let achievementsArray: any[] = [];
      if (achievementsData && achievementsData.achievements) {
        // Convert object to array format
        achievementsArray = Object.entries(achievementsData.achievements).map(([id, achievement]) => ({
          id,
          ...achievement
        }));
      }
      
      setAchievements(achievementsArray);
    } catch (error) {
      console.error('❌ Failed to reload achievements:', error);
    }
  };

  // Calculate user level and enhanced stats from Firebase data or defaults
  const userLevel = progressStats?.level || Math.floor((user?.xp || 0) / 1000) + 1;
  const xpToNextLevel = progressStats?.xpToNextLevel || (userLevel * 1000) - (user?.xp || 0);
  const currentStreak = progressStats?.currentStreak || user?.streakCount || 0;
  const hearts = progressStats?.hearts || user?.hearts || 5;
  const lessonsThisWeek = progressStats?.lessonsThisWeek || 3;
  
  // Calculate real progress from comprehensive modules and gameState
  const totalLessonsAcrossAllModules = comprehensiveModules.reduce((sum, module) => sum + module.lessons.length, 0);
  const completedLessonsAcrossAllModules = Object.values(learningProgress).reduce((sum, progress) => sum + progress.completedLessons, 0);
  
  const totalLessons = progressStats?.totalLessons || user?.totalTasksCompleted || completedLessonsAcrossAllModules;
  const perfectLessons = progressStats?.perfectLessons || user?.lessonsPerfected || 0;
  
  // Weekly learning goal progress
  const weeklyGoal = 7; // lessons per week
  const weeklyProgress = (lessonsThisWeek / weeklyGoal) * 100;

  // Navigation helpers
  const navigateToView = (view: ViewType, label: string, icon?: React.ReactNode, additionalData?: any) => {
    setCurrentView(view);
    
    // Notify parent about lesson view changes
    if (onLessonViewChange) {
      onLessonViewChange(view === 'lesson');
    }
    
    // Update breadcrumbs
    const newBreadcrumbs = [...breadcrumbs];
    const existingIndex = newBreadcrumbs.findIndex(b => b.view === view);
    
    if (existingIndex >= 0) {
      // Remove all breadcrumbs after this view
      newBreadcrumbs.splice(existingIndex + 1);
    } else {
      // Add new breadcrumb
      newBreadcrumbs.push({ label, view, icon });
    }
    
    setBreadcrumbs(newBreadcrumbs);
    
    // Handle additional data
    if (additionalData?.moduleId) {
      setSelectedModule(additionalData.moduleId);
    }
  };

  const navigateBack = () => {
    console.log('🔙 NavigateBack called in ECGMasterHub');
    console.log('📊 Current breadcrumbs:', breadcrumbs);
    console.log('🎯 Current view:', currentView);
    console.log('🔢 Breadcrumbs length:', breadcrumbs.length);
    
    if (breadcrumbs.length > 1) {
      const newBreadcrumbs = [...breadcrumbs];
      newBreadcrumbs.pop();
      setBreadcrumbs(newBreadcrumbs);
      
      const previousView = newBreadcrumbs[newBreadcrumbs.length - 1];
      console.log('⬅️ Navigating back to view:', previousView.view);
      console.log('⬅️ New breadcrumbs:', newBreadcrumbs);
      setCurrentView(previousView.view as ViewType);
      
      // Notify parent about lesson view changes
      if (onLessonViewChange) {
        onLessonViewChange(previousView.view === 'lesson');
      }
    } else {
      console.log('🏠 Exiting hub entirely - no more breadcrumbs');
      // Exiting the hub entirely, not in lesson view
      if (onLessonViewChange) {
        onLessonViewChange(false);
      }
      onBack();
    }
  };

  const renderBreadcrumbs = () => (
    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
      {breadcrumbs.map((crumb, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400" />}
          <button
            onClick={() => {
              if (index < breadcrumbs.length - 1) {
                const newBreadcrumbs = breadcrumbs.slice(0, index + 1);
                setBreadcrumbs(newBreadcrumbs);
                setCurrentView(crumb.view as ViewType);
                
                // Notify parent about lesson view changes
                if (onLessonViewChange) {
                  onLessonViewChange(crumb.view === 'lesson');
                }
              }
            }}
            className={`flex items-center gap-1 hover:text-blue-600 transition-colors ${
              index === breadcrumbs.length - 1 ? 'text-blue-600 font-medium' : 'text-gray-500'
            }`}
          >
            {crumb.icon}
            {crumb.label}
          </button>
        </React.Fragment>
      ))}
    </div>
  );

  // Use Firebase achievements or fallback to local achievements for display
  // Note: Firebase achievements loaded in state will override this if available
  const fallbackAchievements = [
    {
      id: 'first-lesson',
      title: 'ECG Apprentice',
      description: 'Complete your first ECG lesson',
      icon: <BookOpen className="w-6 h-6" />,
      progress: totalLessons > 0 ? 1 : 0,
      total: 1,
      completed: totalLessons > 0,
      rarity: 'common' as const,
      reward: { xp: 50 }
    },
    {
      id: 'fundamentals-master',
      title: 'Fundamentals Master',
      description: 'Complete the ECG Fundamentals module',
      icon: <GraduationCap className="w-6 h-6" />,
      progress: learningProgress['module-1']?.completedLessons || 0,
      total: comprehensiveModules[0]?.lessons.length || 9,
      completed: learningProgress['module-1']?.status === 'completed',
      rarity: 'rare' as const,
      reward: { xp: 200, gems: 50 }
    },
    {
      id: 'week-streak',
      title: 'Rhythm Master',
      description: 'Maintain a 7-day learning streak',
      icon: <Flame className="w-6 h-6" />,
      progress: Math.min(currentStreak, 7),
      total: 7,
      completed: currentStreak >= 7,
      rarity: 'rare' as const,
      reward: { xp: 100, gems: 25 }
    },
    {
      id: 'perfect-score',
      title: 'Perfect Score',
      description: 'Get a perfect score on any lesson',
      icon: <Star className="w-6 h-6" />,
      progress: perfectLessons > 0 ? 1 : 0,
      total: 1,
      completed: perfectLessons > 0,
      rarity: 'rare' as const,
      reward: { xp: 75, gems: 10 }
    },
    {
      id: 'intermediate-unlock',
      title: 'Rhythm Analyzer',
      description: 'Complete Modules 2 & 3 (Sinus Rhythm + Intervals)',
      icon: <BarChart3 className="w-6 h-6" />,
      progress: (learningProgress['module-2']?.status === 'completed' ? 1 : 0) + (learningProgress['module-3']?.status === 'completed' ? 1 : 0),
      total: 2,
      completed: learningProgress['module-2']?.status === 'completed' && learningProgress['module-3']?.status === 'completed',
      rarity: 'rare' as const,
      reward: { xp: 300, gems: 75 }
    },
    {
      id: 'arrhythmia-expert',
      title: 'Arrhythmia Expert',
      description: 'Master both Atrial & Ventricular Arrhythmias',
      icon: <Activity className="w-6 h-6" />,
      progress: (learningProgress['module-4']?.status === 'completed' ? 1 : 0) + (learningProgress['module-5']?.status === 'completed' ? 1 : 0),
      total: 2,
      completed: false,
      rarity: 'epic' as const,
      reward: { xp: 500, gems: 100 }
    },
    {
      id: 'master-title',
      title: 'ECG Master',
      description: 'Complete all 5 comprehensive modules',
      icon: <Crown className="w-6 h-6" />,
      progress: Object.values(learningProgress).filter(p => p.status === 'completed').length,
      total: 5,
      completed: false,
      rarity: 'legendary' as const,
      reward: { xp: 1000, gems: 200, title: 'ECG Master' }
    }
  ];

  // Use Firebase achievements if available, otherwise use fallback
  const displayAchievements = achievements.length > 0 ? achievements : fallbackAchievements;

  // Convert learning progress for compatibility with ECGLearningPath
  const convertToLegacyProgress = (progressData: Record<string, any>): Record<string, ModuleProgress> => {
    const converted: Record<string, ModuleProgress> = {};
    
    Object.entries(progressData).forEach(([moduleId, progress]) => {
      converted[moduleId] = {
        moduleId,
        userId: user?.id || '',
        status: progress.status === 'completed' ? 'completed' :
                progress.status === 'in-progress' ? 'in-progress' : 'not-started', // All modules available by default
        completedLessons: progress.completedLessons,
        totalLessons: progress.totalLessons,
        completedTasks: progress.completedLessons * 3, // Estimate 3 tasks per lesson
        totalTasks: progress.totalLessons * 3,
        totalPoints: progress.averageScore ? progress.averageScore * progress.completedLessons * 10 : 0,
        earnedPoints: progress.averageScore ? progress.averageScore * progress.completedLessons * 10 : 0,
        averageScore: progress.averageScore || 0,
        timeSpent: progress.totalTimeSpent || 0,
        lastAccessedAt: progress.lastAccessed || new Date().toISOString(),
        correctAnswers: progress.averageScore ? Math.round(progress.averageScore * progress.completedLessons / 10) : 0,
        totalAnswers: progress.completedLessons * 10, // Estimate 10 questions per lesson
        accuracy: progress.averageScore || 0,
        streak: 0, // Will be managed separately
        longestStreak: 0,
        reviewCount: 0,
        masteryLevel: progress.masteryLevel || 0
      };
    });
    
    return converted;
  };

  const handleLessonSelect = async (moduleId: string, lessonId: string) => {
    const module = comprehensiveModules.find(m => m.id === moduleId);
    const lesson = module?.lessons.find(l => l.id === lessonId);
    
    if (lesson && module) {
      // Simplified: All lessons are now accessible (no module-based unlocking)
      console.log('✅ Lesson selected:', {
        moduleId,
        lessonId,
        title: lesson.title,
        description: lesson.description,
        currentView,
        breadcrumbs: breadcrumbs.map(b => b.view)
      });

      // 🚨 Debug: Check if this is our optimized lesson
      if (lessonId === 'module-1-lesson-1') {
        console.log('🎯 OPTIMIZED LESSON SELECTED!', {
          title: lesson.title,
          description: lesson.description,
          tasksCount: lesson.tasks?.length,
          hasSlides: lesson.content?.slides?.length,
          isOptimized: lesson.title?.includes('Heart Anatomy'),
          fullLesson: lesson
        });
      }
      
      // Check if user has hearts remaining (only for authenticated users)
      const currentHearts = gameState.user?.hearts || 5;
      if (!gameState.isGuestUser && currentHearts <= 0) {
        if (gameState.user?.id) {
          await unifiedNotificationService.createNotification({
            userId: gameState.user.id,
            title: '💔 No Hearts Left!',
            body: 'Hearts regenerate over time. Take a break and come back later, or practice completed lessons!',
            type: 'system',
            actionUrl: '/dashboard',
            category: 'warning',
            priority: 'high'
          });
        }
        return;
      }
      
      console.log('✅ Setting selected lesson:', lesson);
      playClickSound(); // Play click sound when lesson is selected
      setSelectedLesson(lesson);
      
      // Ensure we have the proper breadcrumb trail
      // If we're not currently in module-detail view, navigate there first
      if (currentView !== 'module-detail' || selectedModule !== moduleId) {
        console.log('🔄 Setting up module context before lesson');
        setSelectedModule(moduleId);
        // Set up breadcrumbs to include module detail
        const moduleLabel = `${module.title}`;
        setBreadcrumbs([
          { label: 'ECG Master', view: 'home', icon: <Home className="w-4 h-4" /> },
          { label: moduleLabel, view: 'module-detail', icon: <BookOpen className="w-4 h-4" /> },
          { label: lesson.title, view: 'lesson', icon: <BookOpen className="w-4 h-4" /> }
        ]);
      } else {
        // We're already in module-detail, just add lesson to breadcrumbs
        navigateToView('lesson', lesson.title, <BookOpen className="w-4 h-4" />);
      }
      
      setCurrentView('lesson');
      
      // Notify parent about lesson view changes
      if (onLessonViewChange) {
        onLessonViewChange(true);
      }
      
      // Lesson start notification with action URL
      if (gameState.user?.id) {
        await unifiedNotificationService.createNotification({
          userId: gameState.user.id,
          title: 'Lesson Started',
          body: `Good luck with "${lesson.title}"! You've got this! 💪`,
          type: 'system',
          actionUrl: `/lesson/${moduleId}/${lessonId}`,
          category: 'info',
          priority: 'normal'
        });
      }
    }
  };

  // Enhanced lesson completion with progress tracking
  const handleLessonComplete = async (score: number, timeSpent: number) => {
    if (selectedLesson && gameState.user?.id) {
      const moduleId = selectedLesson.moduleId;
      const lessonId = selectedLesson.id;
      const passed = score >= 70; // Pass threshold
      const perfect = score >= 95; // Perfect score threshold
      
      // Play swoosh sound for lesson completion
      playSwooshSound();
      
      console.log('🎯 ECGMasterHub: Lesson completion starting', {
        moduleId,
        lessonId,
        score,
        timeSpent,
        passed,
        perfect
      });
      
      try {
        console.log('🎯 ECGMasterHub: Starting consolidated lesson completion');
        
        // Use the new consolidated progress service
        try {
          await handleLessonCompletion({
            userId: gameState.user.id,
            moduleId: moduleId || 'module-1',
            lessonId: lessonId || 'lesson-1',
            score,
            timeSpent,
            perfect
          });
          console.log('✅ ECGMasterHub: Consolidated progress update completed');
        } catch (consolidatedError) {
          console.error('⚠️ Consolidated progress update failed:', consolidatedError);
          // Continue with fallback methods
        }
        
        // Also call the original completeLearningLesson for state management
        try {
          await completeLearningLesson(
            moduleId || 'module-1',
            lessonId || 'lesson-1',
            score,
            timeSpent,
            perfect
          );
          console.log('✅ ECGMasterHub: State management lesson completion successful');
        } catch (stateError) {
          console.error('⚠️ State management update failed:', stateError);
          // This is more critical as it affects UI state
          throw stateError;
        }
        
        // Check for new achievements with updated stats
        try {
          const updatedStats = await getUserProgressStats(gameState.user.id);
          console.log('📊 Updated stats for achievement check:', updatedStats);
          
          const newlyCompletedAchievements = await checkAchievements(gameState.user.id, {
            totalLessons: updatedStats.totalLessons || 0,
            completedModules: updatedStats.completedModules || [],
            currentStreak: updatedStats.currentStreak || 0,
            perfectLessons: updatedStats.perfectLessons || 0,
            fastCompletions: updatedStats.fastCompletions || 0
          });
          
          // Show notifications for newly unlocked achievements with action URLs
          if (newlyCompletedAchievements && newlyCompletedAchievements.length > 0) {
            newlyCompletedAchievements.forEach(async (achievementId) => {
              await unifiedNotificationService.createNotification({
                userId: gameState.user.id,
                title: '🏆 Achievement Unlocked!',
                body: `You've earned a new achievement! Check your achievements to claim your reward.`,
                type: 'achievement',
                actionUrl: `/dashboard?tab=achievements&highlight=${achievementId}`,
                category: 'success',
                priority: 'high'
              });
            });
            console.log('🎉 New achievements unlocked:', newlyCompletedAchievements);
          }
          
          console.log('✅ Achievement check completed successfully');
        } catch (achievementError) {
          console.error('⚠️ Achievement check failed (non-critical):', achievementError);
          // Don't throw - achievements are nice to have but not critical
        }
        
        // Reload user data to reflect changes
        try {
          await loadUserData();
          console.log('✅ User data reloaded successfully');
        } catch (userDataError) {
          console.error('⚠️ Failed to reload user data (non-critical):', userDataError);
          // UI will update on next refresh/navigation
        }
        
        console.log('🎉 ECGMasterHub: All updates completed successfully');
        
        // Small delay to ensure all Firebase writes are complete before notifying other components
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Dispatch custom event to notify other components about progress update
        const progressUpdateEvent = new CustomEvent('progressUpdated', {
          detail: {
            userId: gameState.user.id,
            moduleId,
            lessonId,
            score,
            perfect,
            timestamp: Date.now()
          }
        });
        window.dispatchEvent(progressUpdateEvent);
        console.log('📢 ECGMasterHub: Progress update event dispatched');
        
        // Lesson completion notifications with action URLs
        if (score >= 90) {
          await unifiedNotificationService.createNotification({
            userId: gameState.user.id,
            title: 'Perfect Score! ⭐',
            body: `Amazing! You scored ${score}% on "${selectedLesson.title}"`,
            type: 'achievement',
            actionUrl: `/dashboard?tab=achievements`,
            category: 'success',
            priority: 'high'
          });
        } else if (score >= 80) {
          await unifiedNotificationService.createNotification({
            userId: gameState.user.id,
            title: 'Great Job! 👏',
            body: `Well done! You scored ${score}% on "${selectedLesson.title}"`,
            type: 'achievement',
            actionUrl: `/dashboard?tab=progress`,
            category: 'success',
            priority: 'normal'
          });
        } else {
          await unifiedNotificationService.createNotification({
            userId: gameState.user.id,
            title: 'Lesson Completed! 📚',
            body: `You completed "${selectedLesson.title}" with ${score}%`,
            type: 'lesson',
            actionUrl: `/dashboard?tab=progress`,
            category: 'info',
            priority: 'normal'
          });
        }
        
        // Call parent completion handler with module and lesson IDs
        onLessonComplete(
          moduleId || 'module-1',
          lessonId || `lesson-${Date.now()}`,
          score,
          timeSpent,
          perfect
        );
        
        // Force refresh of learning progress to show newly unlocked lessons
        console.log('🔄 ECGMasterHub: Refreshing learning progress...');
        try {
          await loadLearningProgress();
          console.log('🔄 ECGMasterHub: Learning progress refreshed successfully');
          console.log('📊 Current progress after refresh:', gameState.learningProgress);
        } catch (progressError) {
          console.error('⚠️ Failed to refresh learning progress:', progressError);
          // Continue anyway - user can manually refresh
        }
        
        console.log('🔄 ECGMasterHub: All completion tasks finished, navigating back');
        
        // Navigate back immediately - don't wait for additional delays
        console.log('🔄 ECGMasterHub: Navigating back to module view');
        navigateBack();
        setSelectedLesson(null);
      } catch (error) {
        console.error('❌ Failed to update lesson progress:', error);
        
        // Show specific error message with action URL
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        await unifiedNotificationService.createNotification({
          userId: gameState.user.id,
          title: "Progress Save Error",
          body: `Failed to save progress: ${errorMessage}. Your lesson completion was recorded but some data may not be updated.`,
          type: 'system',
          actionUrl: '/dashboard?tab=support',
          category: 'error',
          priority: 'high'
        });
        
        // Still navigate back even on error - user completed the lesson
        navigateBack();
        setSelectedLesson(null);
      }
    } else {
      navigateBack();
      setSelectedLesson(null);
    }
  };

  const handleClaimReward = async (achievementId: string) => {
    if (!user?.id) {
      await unifiedNotificationService.createNotification({
        userId: 'guest',
        title: "Error",
        body: "Please log in to claim rewards",
        type: 'system',
        actionUrl: '/login',
        category: 'error',
        priority: 'normal'
      });
      return;
    }

    try {
      console.log('🎁 Claiming reward for achievement:', achievementId);
      
      // Use the achievement service to claim the reward
      const result = await claimAchievementReward(user.id, achievementId);
      
      // Achievement reward claim notification with action URL
      await unifiedNotificationService.createNotification({
        userId: user.id,
        title: "Reward Claimed! 🎉",
        body: `You earned ${result.xp || 0} XP${result.gems ? ` and ${result.gems} gems` : ''}!`,
        type: 'achievement',
        actionUrl: '/dashboard?tab=inventory',
        category: 'success',
        priority: 'high'
      });
      
      // Play reward sound for successful claim
      playRewardSound();
      
      // Refresh achievements to show updated claimed status
      loadUserAchievements();
      
    } catch (error) {
      console.error('❌ Failed to claim reward:', error);
      await unifiedNotificationService.createNotification({
        userId: user.id,
        title: "Error",
        body: error instanceof Error ? error.message : "Failed to claim reward. Please try again.",
        type: 'system',
        actionUrl: '/dashboard?tab=support',
        category: 'error',
        priority: 'normal'
      });
    }
  };

  // Render Module Detail View
  const renderModuleDetail = () => {
    const module = comprehensiveModules.find(m => m.id === selectedModule);
    if (!module) return null;

    const progress = learningProgress[module.id];
    const progressPercentage = progress ? (progress.completedLessons / progress.totalLessons) * 100 : 0;
    
    return (
      <div className="space-y-6">
        {/* Module Header */}
        <Card className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <CardContent className="p-8">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <Monitor className="w-10 h-10" />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">{module.title}</h1>
                <p className="text-blue-100 text-lg mb-4">{module.description}</p>
                <div className="flex items-center gap-4 text-sm">
                  <Badge className="bg-white/20 text-white">
                    {module.difficulty}
                  </Badge>
                  <span>⏱️ {module.estimatedTime} minutes</span>
                  <span>📚 {module.lessons.length} lessons</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">{Math.round(progressPercentage)}%</div>
                <div className="text-blue-100">Complete</div>
              </div>
            </div>
            <div className="mt-6">
              <Progress value={progressPercentage} className="h-3 bg-white/20" />
            </div>
          </CardContent>
        </Card>

        {/* Lessons List */}
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-green-500" />
              Module Lessons
            </h3>
            <div className="space-y-4">
              {module.lessons.map((lesson, index) => {
                const lessonOrder = lesson.order || (index + 1);
                const completedLessons = progress?.completedLessons || 0;
                
                // Use proper progression-based unlocking (matching ModuleDetail logic)
                const isCompleted = completedLessons >= lessonOrder;
                const isProgressionUnlocked = lessonOrder === 1 || completedLessons >= (lessonOrder - 1);
                const hasHearts = gameState.isGuestUser || (gameState.user?.hearts || 5) > 0;
                const isAvailable = isProgressionUnlocked && (gameState.isGuestUser || hasHearts || isCompleted);
                const isNext = completedLessons === lessonOrder - 1 && !isCompleted;

                console.log(`🎓 Lesson status for "${lesson.title}" (Order: ${lessonOrder}):`, {
                  completedLessons,
                  isAvailable,
                  isCompleted,
                  isNext,
                  isProgressionUnlocked,
                  hasHearts,
                  moduleId: module.id
                });

                const isLocked = !isAvailable;
                const isHeartLocked = isProgressionUnlocked && !gameState.isGuestUser && !hasHearts && !isCompleted;
                const isProgressLocked = !isProgressionUnlocked;

                return (
                  <Card 
                    key={lesson.id}
                    className={`transition-all duration-300 hover:shadow-md ${
                      isLocked ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                    } ${isCompleted ? 'bg-green-50 border-green-200' :
                      isNext ? 'bg-blue-50 border-blue-200 shadow-md' :
                      'bg-white border-gray-200 hover:bg-gray-50'
                    }`}
                    onClick={() => isAvailable && handleLessonSelect(module.id, lesson.id)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                          isLocked ? 'bg-gray-300' :
                          isCompleted ? 'bg-green-500' :
                          isNext ? 'bg-blue-500' :
                          'bg-gray-400'
                        }`}>
                          {isHeartLocked ? <Heart className="w-6 h-6 text-red-400" /> :
                           isProgressLocked ? <Lock className="w-6 h-6 text-gray-400" /> :
                           isCompleted ? <CheckCircle className="w-6 h-6" /> :
                           isNext ? <Play className="w-6 h-6" /> :
                           index + 1}
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-1">{lesson.title}</h4>
                          <p className="text-gray-600 text-sm mb-2">{lesson.description}</p>
                          <div className="flex items-center gap-3 text-xs text-gray-500">
                            <span>⏱️ {lesson.estimatedTime} min</span>
                            <span>📖 {lesson.content.sections?.length || 1} sections</span>
                            {lesson.content.slides && (
                              <span>🖼️ {lesson.content.slides.length} slides</span>
                            )}
                          </div>
                        </div>

                        <div className="text-right">
                          {isCompleted && (
                            <div className="text-green-600 font-bold">
                              ✓ Completed
                            </div>
                          )}
                          {isNext && isAvailable && (
                            <Badge className="bg-blue-500 text-white">
                              Continue
                            </Badge>
                          )}
                          {isHeartLocked && (
                            <Badge className="bg-red-100 text-red-700">
                              💔 No Hearts
                            </Badge>
                          )}
                          {isProgressLocked && (
                            <Badge className="bg-gray-100 text-gray-700">
                              🔒 Locked
                            </Badge>
                          )}
                          {!isCompleted && !isNext && isAvailable && (
                            <Badge className="bg-gray-500 text-white">
                              Available
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  };

  // Render Learning Path Selection
  const renderLearningPaths = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your ECG Mastery Path</h2>
        <p className="text-gray-600 text-lg">Select a structured learning journey that matches your goals</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {masteryPaths.map((path) => {
          const completedModules = path.modules.filter(moduleId => 
            learningProgress[moduleId]?.status === 'completed'
          ).length;
          const progressPercentage = (completedModules / path.totalModules) * 100;
          const isUnlocked = !path.prerequisites || 
            path.prerequisites.every(prereq => {
              const prereqPath = masteryPaths.find(p => p.id === prereq);
              return prereqPath?.modules.every(modId => 
                learningProgress[modId]?.status === 'completed'
              );
            });
          
          return (
            <Card 
              key={path.id}
              className={`cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                isUnlocked 
                  ? 'bg-gradient-to-br from-white to-blue-50 border-blue-200' 
                  : 'bg-gray-50 border-gray-200 opacity-75'
              }`}
              onClick={() => isUnlocked && navigateToView('learn', 'Quick Learn', <BookOpen className="w-4 h-4" />)}
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center text-white font-bold text-xl mb-3 ${
                    path.difficulty === 'beginner' ? 'bg-green-500' :
                    path.difficulty === 'intermediate' ? 'bg-blue-500' : 'bg-purple-500'
                  }`}>
                    {path.difficulty === 'beginner' ? <School className="w-8 h-8" /> :
                     path.difficulty === 'intermediate' ? <Stethoscope className="w-8 h-8" /> :
                     <Crown className="w-8 h-8" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{path.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{path.description}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium">{completedModules}/{path.totalModules} modules</span>
                  </div>
                  <Progress value={progressPercentage} className="h-2" />
                  
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                    <div>📚 {path.totalModules} modules</div>
                    <div>⏱️ {path.estimatedWeeks} weeks</div>
                  </div>
                  
                  <div className="pt-2 border-t border-gray-200">
                    <p className="text-xs text-gray-500 mb-2">You'll learn:</p>
                    <div className="flex flex-wrap gap-1">
                      {path.skillsLearned.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {path.skillsLearned.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{path.skillsLearned.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  {path.badge && (
                    <div className="text-center pt-2">
                      <Badge className="bg-yellow-100 text-yellow-800">
                        {path.badge}
                      </Badge>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );

  if (currentView === 'lesson' && selectedLesson) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex flex-col">
        {/* Full-screen lesson content - premium scrolling experience */}
        <div className="flex-1 lesson-viewer-scroll mobile-scroll-optimized scroll-indicator">
          <EnhancedDuolingoLesson
            lesson={selectedLesson}
            onComplete={handleLessonComplete}
            onExit={navigateBack}
            userHearts={hearts}
            onHeartLost={onHeartLost}
            isFullScreen={true}
          />
        </div>
      </div>
    );
  }

  if (currentView === 'learning-path') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        {/* Navigation Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Button 
                variant="ghost" 
                onClick={navigateBack}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              <h1 className="text-xl font-bold text-gray-900">Learning Paths</h1>
              <div className="w-16"></div> {/* Spacer */}
            </div>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto p-4">
          {renderLearningPaths()}
        </div>
      </div>
    );
  }

  if (currentView === 'module-detail') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 w-full overflow-x-hidden">
        {/* Navigation Header */}
        <div className="bg-white shadow-sm border-b w-full">
          <div className="w-full max-w-none px-4 py-4 md:max-w-6xl md:mx-auto">
            <div className="flex items-center justify-between">
              <Button 
                variant="ghost" 
                onClick={navigateBack}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              <div className="text-center">
                <h1 className="text-lg sm:text-xl font-bold text-gray-900">Module Details</h1>
              </div>
              <div className="w-16"></div> {/* Spacer */}
            </div>
          </div>
        </div>
        
        <div className="w-full max-w-none px-4 py-4 md:max-w-6xl md:mx-auto">
          {renderModuleDetail()}
        </div>
      </div>
    );
  }

  if (currentView === 'learn') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 w-full overflow-x-hidden">
        {/* Navigation Header */}
        <div className="bg-white shadow-sm border-b w-full">
          <div className="w-full max-w-none px-4 py-4 md:max-w-6xl md:mx-auto">
            <div className="flex items-center justify-between">
              <Button 
                variant="ghost" 
                onClick={navigateBack}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">ECG Learning Path</h1>
              <div className="w-16"></div> {/* Spacer */}
            </div>
          </div>
        </div>
        
        <ECGLearningPath
          modules={comprehensiveModules}
          moduleProgress={convertToLegacyProgress(learningProgress)}
          onLessonSelect={handleLessonSelect}
          onModuleSelect={(moduleId) => {
            setSelectedModule(moduleId);
            navigateToView('module-detail', 'Module Details', <BookOpen className="w-4 h-4" />, { moduleId });
          }}
          userStreak={currentStreak}
          userXP={user?.xp || 0}
          userLevel={userLevel}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 w-full overflow-x-hidden">
      {/* Main Content */}
      <div className="w-full max-w-sm mx-auto px-3 py-4 space-y-4 sm:max-w-2xl sm:px-4 sm:space-y-6 md:max-w-4xl lg:max-w-6xl">
        
        {/* Simple Welcome Section */}
        <Card className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white overflow-hidden relative w-full">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full"></div>
          <CardContent className="p-3 sm:p-4 md:p-6 relative z-10">
            <div className="text-center">
              <h1 className="text-base sm:text-lg md:text-2xl font-bold mb-2">
                Welcome back, {user?.username || 'Student'}! 
                <span className="inline-block animate-bounce ml-2">👋</span>
              </h1>
              <p className="text-purple-100 text-xs sm:text-sm md:text-base">Continue your ECG mastery journey</p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Navigation Actions */}
        <div className="grid grid-cols-2 gap-3 w-full sm:gap-4 lg:grid-cols-4">
          <Card 
            className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-green-400 to-emerald-600 text-white overflow-hidden relative w-full"
            onClick={() => navigateToView('learning-path', 'Learning Paths', <Route className="w-4 h-4" />)}
          >
            <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-white/10 rounded-full"></div>
            <CardContent className="p-3 sm:p-4 md:p-6 text-center relative z-10">
              <Route className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 mx-auto mb-2 sm:mb-4" />
              <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold mb-1 sm:mb-2">Learning Paths</h3>
              <p className="text-green-100 text-[10px] sm:text-xs md:text-sm">Structured ECG mastery journeys</p>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br from-blue-500 to-indigo-600 text-white overflow-hidden relative w-full"
            onClick={() => navigateToView('learn', 'Quick Learn', <BookOpen className="w-4 h-4" />)}
          >
            <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full"></div>
            <CardContent className="p-3 sm:p-4 md:p-6 text-center relative z-10">
              <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 mx-auto mb-2 sm:mb-4" />
              <h3 className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold mb-1 sm:mb-2">Quick Learn</h3>
              <p className="text-blue-100 text-[10px] sm:text-xs md:text-sm">Jump into any module</p>
            </CardContent>
          </Card>
        </div>

        {/* ECG Learning Roadmap Section */}
        <ECGLearningRoadmap 
          onModuleClick={(moduleId) => {
            // Navigate to specific module in learning path
            setCurrentView('learning-path');
            setCurrentModuleId(moduleId);
            // You can add additional logic here to jump to specific module
          }}
          userProgress={(() => {
            // Convert ModuleProgress to percentage-based progress for roadmap
            const convertedProgress: Record<number, number> = {};
            const moduleProgress = progressStats?.moduleProgress || {};
            
            // Map module IDs to roadmap IDs and calculate percentages
            Object.entries(moduleProgress).forEach(([moduleId, progress]) => {
              const roadmapId = parseInt(moduleId.replace('module-', ''));
              if (!isNaN(roadmapId) && progress && typeof progress === 'object') {
                // Safely access properties with fallbacks and proper type checking
                const completedLessons = (progress as any).completedLessons || 0;
                const totalLessons = (progress as any).totalLessons || 1;
                const percentage = Math.round((completedLessons / totalLessons) * 100);
                convertedProgress[roadmapId] = percentage;
              }
            });
            
            return convertedProgress;
          })()}
        />
      </div>
    </div>
  );
};

export default ECGMasterHub;
