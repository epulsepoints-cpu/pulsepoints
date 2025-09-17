import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './styles/mobile.css';
import { initializeLessonServices } from './services/lessonServiceInitializer';

// Initialize lesson services for Firebase-first loading
initializeLessonServices().catch(error => {
  console.warn('⚠️ Lesson service initialization failed, app will use local fallback:', error);
});

// Register Firebase messaging service worker
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/firebase-messaging-sw.js')
      .then((registration) => {
        console.log('✅ Firebase messaging SW registered:', registration.scope);
      })
      .catch((error) => {
        console.error('❌ Firebase messaging SW registration failed:', error);
      });
  });
}

const container = document.getElementById('root');
if (container) {
  createRoot(container).render(<App />);
} else {
  console.error('Root element not found');
}
