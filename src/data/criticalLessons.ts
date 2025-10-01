import { Lesson } from '@/types/learning';

// 🔥 CRITICAL LESSONS (1-5)
// These lessons stay embedded in mobile app for reliability
// All other lessons load via Vercel API

export const criticalLessons: { [key: string]: Lesson } = {};
