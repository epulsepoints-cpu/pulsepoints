// Simple test to verify environment variables work
console.log('Testing environment variables:');
console.log('VITE_FIREBASE_API_KEY:', import.meta.env.VITE_FIREBASE_API_KEY ? 'Found' : 'Missing');
console.log('VITE_FIREBASE_VAPID_KEY:', import.meta.env.VITE_FIREBASE_VAPID_KEY ? 'Found' : 'Missing');

export {};
