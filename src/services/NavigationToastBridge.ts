/**
 * 📱 TOAST INTEGRATION FOR MOBILE NAVIGATION
 * Bridge between navigation manager and your toast system
 */

import { toast } from '@/components/ui/use-toast';

// Set up global toast function for navigation manager
if (typeof window !== 'undefined') {
  window.ecgToast = (options) => {
    toast({
      title: options.title,
      description: options.description,
      duration: options.duration || 3000,
      variant: options.variant || 'default'
    });
  };
}

export {}; // Make this a module