/**
 * 🗂️ LESSON DATA MAPPER - Vercel API
 * Maps lesson IDs to actual lesson data for external loading
 */

// Import all optimized lessons (correct path from pages/api/lessons to src/data)
import { optimizedLesson1 } from '../../../src/data/optimized-lesson-1';
import { optimizedLesson2 } from '../../../src/data/optimized-lesson-2';
import { optimizedLesson3 } from '../../../src/data/optimized-lesson-3';
import { optimizedLesson4 } from '../../../src/data/optimized-lesson-4';
import { optimizedLesson5 } from '../../../src/data/optimized-lesson-5';
import { optimizedLesson6 } from '../../../src/data/optimized-lesson-6';
import { optimizedLesson7 } from '../../../src/data/optimized-lesson-7';
import { optimizedLesson8 } from '../../../src/data/optimized-lesson-8';
import { optimizedLesson9 } from '../../../src/data/optimized-lesson-9';
import { optimizedLesson10 } from '../../../src/data/optimized-lesson-10';
import { optimizedLesson11 } from '../../../src/data/optimized-lesson-11';
import { optimizedLesson12 } from '../../../src/data/optimized-lesson-12';
import { optimizedLesson13 } from '../../../src/data/optimized-lesson-13';
import { optimizedLesson14 } from '../../../src/data/optimized-lesson-14';
import { optimizedLesson15 } from '../../../src/data/optimized-lesson-15';
import { optimizedLesson16 } from '../../../src/data/optimized-lesson-16';
import { optimizedLesson17 } from '../../../src/data/optimized-lesson-17';
import { optimizedLesson18 } from '../../../src/data/optimized-lesson-18';
import { optimizedLesson19 } from '../../../src/data/optimized-lesson-19';
import { optimizedLesson20 } from '../../../src/data/optimized-lesson-20';
import { optimizedLesson21 } from '../../../src/data/optimized-lesson-21';
import { optimizedLesson22 } from '../../../src/data/optimized-lesson-22';
import { optimizedLesson23 } from '../../../src/data/optimized-lesson-23';
import { optimizedLesson24 } from '../../../src/data/optimized-lesson-24';
import { optimizedLesson25 } from '../../../src/data/optimized-lesson-25';
import { optimizedLesson26Comprehensive } from '../../../src/data/optimized-lesson-26';
import { optimizedLesson27Comprehensive } from '../../../src/data/optimized-lesson-27';
import { optimizedLesson28 } from '../../../src/data/optimized-lesson-28';
import { optimizedLesson29 } from '../../../src/data/optimized-lesson-29';
import { optimizedLesson30 } from '../../../src/data/optimized-lesson-30';
import { optimizedLesson31 } from '../../../src/data/optimized-lesson-31-6unit';
import { optimizedLesson32 } from '../../../src/data/optimized-lesson-32';
import { optimizedLesson33 } from '../../../src/data/optimized-lesson-33';
import { optimizedLesson34 } from '../../../src/data/optimized-lesson-34';
import { optimizedLesson35 } from '../../../src/data/optimized-lesson-35';
import { optimizedLesson36 } from '../../../src/data/optimized-lesson-36';
import { optimizedLesson37 } from '../../../src/data/optimized-lesson-37';
import { optimizedLesson38 } from '../../../src/data/optimized-lesson-38';
import { optimizedLesson39 } from '../../../src/data/optimized-lesson-39';
import { optimizedLesson40 } from '../../../src/data/optimized-lesson-40';
import { optimizedLesson41 } from '../../../src/data/optimized-lesson-41';
import { optimizedLesson42 } from '../../../src/data/optimized-lesson-42';
import { optimizedLesson43 } from '../../../src/data/optimized-lesson-43';
import { optimizedLesson44 } from '../../../src/data/optimized-lesson-44';
import { optimizedLesson45 } from '../../../src/data/optimized-lesson-45';
import { optimizedLesson46 } from '../../../src/data/optimized-lesson-46';
import { optimizedLesson47 } from '../../../src/data/optimized-lesson-47';
import { optimizedLesson48 } from '../../../src/data/optimized-lesson-48';
import { optimizedLesson49 } from '../../../src/data/optimized-lesson-49';
import { optimizedLesson50 } from '../../../src/data/optimized-lesson-50';
import { optimizedLesson51 } from '../../../src/data/optimized-lesson-51';
import { optimizedLesson52 } from '../../../src/data/optimized-lesson-52';
import { optimizedLesson53 } from '../../../src/data/optimized-lesson-53';
import { optimizedLesson54 } from '../../../src/data/optimized-lesson-54';
import { optimizedLesson55 } from '../../../src/data/optimized-lesson-55';
import { optimizedLesson56 } from '../../../src/data/optimized-lesson-56';
import { optimizedLesson57 } from '../../../src/data/optimized-lesson-57';
import { optimizedLesson58 } from '../../../src/data/optimized-lesson-58';
import { optimizedLesson59 } from '../../../src/data/optimized-lesson-59';
import { optimizedLesson60 } from '../../../src/data/optimized-lesson-60';
import { optimizedLesson61 } from '../../../src/data/optimized-lesson-61';
import { optimizedLesson62 } from '../../../src/data/optimized-lesson-62';
import { optimizedLesson63 } from '../../../src/data/optimized-lesson-63';
import { optimizedLesson64 } from '../../../src/data/optimized-lesson-64';
import { optimizedLesson65 } from '../../../src/data/optimized-lesson-65';
import { optimizedLesson66 } from '../../../src/data/optimized-lesson-66';
import { optimizedLesson67 } from '../../../src/data/optimized-lesson-67';
import { optimizedLesson68 } from '../../../src/data/optimized-lesson-68';
import { optimizedLesson69 } from '../../../src/data/optimized-lesson-69-6unit';
import { optimizedLesson70 } from '../../../src/data/optimized-lesson-70-6unit';
import { optimizedLesson71 } from '../../../src/data/optimized-lesson-71-6unit';
import { optimizedLesson72 } from '../../../src/data/optimized-lesson-72-6unit';
import { optimizedLesson73 } from '../../../src/data/optimized-lesson-73';
import { optimizedLesson74 } from '../../../src/data/optimized-lesson-74';
import { optimizedLesson75 } from '../../../src/data/optimized-lesson-75';
import { optimizedLesson76 } from '../../../src/data/optimized-lesson-76';

// Create lesson mapping object
export const lessonMap = {
  'module-1-lesson-1': optimizedLesson1,
  'module-1-lesson-2': optimizedLesson2,
  'module-1-lesson-3': optimizedLesson3,
  'module-1-lesson-4': optimizedLesson4,
  'module-1-lesson-5': optimizedLesson5,
  'module-1-lesson-6': optimizedLesson6,
  'module-1-lesson-7': optimizedLesson7,
  'module-1-lesson-8': optimizedLesson8,
  'module-1-lesson-9': optimizedLesson9,
  'module-1-lesson-10': optimizedLesson10,
  'module-1-lesson-11': optimizedLesson11,
  'module-1-lesson-12': optimizedLesson12,
  'module-1-lesson-13': optimizedLesson13,
  'module-1-lesson-14': optimizedLesson14,
  'module-1-lesson-15': optimizedLesson15,
  'module-1-lesson-16': optimizedLesson16,
  'module-1-lesson-17': optimizedLesson17,
  'module-1-lesson-18': optimizedLesson18,
  'module-1-lesson-19': optimizedLesson19,
  'module-1-lesson-20': optimizedLesson20,
  'module-1-lesson-21': optimizedLesson21,
  'module-1-lesson-22': optimizedLesson22,
  'module-1-lesson-23': optimizedLesson23,
  'module-1-lesson-24': optimizedLesson24,
  'module-1-lesson-25': optimizedLesson25,
  'module-1-lesson-26': optimizedLesson26Comprehensive,
  'module-1-lesson-27': optimizedLesson27Comprehensive,
  'module-1-lesson-28': optimizedLesson28,
  'module-1-lesson-29': optimizedLesson29,
  'module-1-lesson-30': optimizedLesson30,
  'module-1-lesson-31': optimizedLesson31,
  'module-1-lesson-32': optimizedLesson32,
  'module-1-lesson-33': optimizedLesson33,
  'module-1-lesson-34': optimizedLesson34,
  'module-1-lesson-35': optimizedLesson35,
  'module-1-lesson-36': optimizedLesson36,
  'module-1-lesson-37': optimizedLesson37,
  'module-1-lesson-38': optimizedLesson38,
  'module-1-lesson-39': optimizedLesson39,
  'module-1-lesson-40': optimizedLesson40,
  'module-1-lesson-41': optimizedLesson41,
  'module-1-lesson-42': optimizedLesson42,
  'module-1-lesson-43': optimizedLesson43,
  'module-1-lesson-44': optimizedLesson44,
  'module-1-lesson-45': optimizedLesson45,
  'module-1-lesson-46': optimizedLesson46,
  'module-1-lesson-47': optimizedLesson47,
  'module-1-lesson-48': optimizedLesson48,
  'module-1-lesson-49': optimizedLesson49,
  'module-1-lesson-50': optimizedLesson50,
  'module-1-lesson-51': optimizedLesson51,
  'module-1-lesson-52': optimizedLesson52,
  'module-1-lesson-53': optimizedLesson53,
  'module-1-lesson-54': optimizedLesson54,
  'module-1-lesson-55': optimizedLesson55,
  'module-1-lesson-56': optimizedLesson56,
  'module-1-lesson-57': optimizedLesson57,
  'module-1-lesson-58': optimizedLesson58,
  'module-1-lesson-59': optimizedLesson59,
  'module-1-lesson-60': optimizedLesson60,
  'module-1-lesson-61': optimizedLesson61,
  'module-1-lesson-62': optimizedLesson62,
  'module-1-lesson-63': optimizedLesson63,
  'module-1-lesson-64': optimizedLesson64,
  'module-1-lesson-65': optimizedLesson65,
  'module-1-lesson-66': optimizedLesson66,
  'module-1-lesson-67': optimizedLesson67,
  'module-1-lesson-68': optimizedLesson68,
  'module-1-lesson-69': optimizedLesson69,
  'module-1-lesson-70': optimizedLesson70,
  'module-1-lesson-71': optimizedLesson71,
  'module-1-lesson-72': optimizedLesson72,
  'module-1-lesson-73': optimizedLesson73,
  'module-1-lesson-74': optimizedLesson74,
  'module-1-lesson-75': optimizedLesson75,
  'module-1-lesson-76': optimizedLesson76,
};

// Get all available lesson IDs
export const getAllLessonIds = () => Object.keys(lessonMap);

// Get lessons by module ID
export const getLessonsByModule = (moduleId: string) => {
  return Object.entries(lessonMap)
    .filter(([lessonId]) => lessonId.startsWith(moduleId + '-lesson-'))
    .map(([lessonId, lesson]) => ({ ...lesson, id: lessonId }));
};

// Get lesson by ID
export const getLessonById = (lessonId: string) => {
  const lesson = lessonMap[lessonId as keyof typeof lessonMap];
  return lesson ? { ...lesson, id: lessonId } : null;
};