const ONESIGNAL_APP_ID = '924669b3-369b-4eaa-a14c-f4f8f694a5b3';
const ONESIGNAL_REST_API_KEY = 'os_v2_app_sjdgtmzwtnhkvikm6t4pnfffwmily3nkutkuoou2ctss2cn3pg4k6iisqt3ibbjt4l3qrpdky53fmujflrapsxkgk4uu5uzksklx4ba';

export const sendReminderNotification = async (userEmail: string): Promise<void> => {
  try {
    await fetch('https://onesignal.com/api/v1/notifications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${ONESIGNAL_REST_API_KEY}`
      },
      body: JSON.stringify({
        app_id: ONESIGNAL_APP_ID,
        include_external_user_ids: [userEmail],
        headings: { "en": "⏰ Time for your ECG PulsePoints challenge!" },
        contents: { "en": "Let's keep your streak alive. Tap here to take today's quiz 🫀" },
        url: window.location.origin
      })
    });
  } catch (error) {
    console.error('Failed to send OneSignal notification:', error);
    throw error;
  }
};

export const initializeOneSignal = async (userEmail: string): Promise<void> => {
  try {
    // Skip OneSignal initialization for non-production environments
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.log('⚠️ Skipping OneSignal initialization in development environment');
      return;
    }
    
    // Use global singleton guard to prevent multiple initializations
    if (typeof window !== 'undefined' && (window as any).OneSignal) {
      if (!(window as any)._oneSignalInitialized) {
        (window as any).OneSignal = (window as any).OneSignal || [];
        (window as any).OneSignal.push(function () {
          (window as any).OneSignal.init({
            appId: ONESIGNAL_APP_ID,
            // Only enable for production domain
            safari_web_id: "web.onesignal.auto.2c876fa3-2792-435c-a88d-e387f15d28e3",
            notifyButton: {
              enable: false,
            },
            subdomainName: window.location.hostname === 'ecgkid.com' ? undefined : null,
            promptOptions: {
              slidedown: {
                prompts: [
                  {
                    type: "category",
                    autoPrompt: false,
                  }
                ]
              }
            }
          });
        });
        (window as any)._oneSignalInitialized = true;
      }
      
      // Set external user ID for targeting
      (window as any).OneSignal.push(function () {
        (window as any).OneSignal.setExternalUserId(userEmail);
      });
    }
  } catch (error) {
    console.error('Failed to initialize OneSignal:', error);
  }
};

export const scheduleNotification = async (userEmail: string, delayHours: number = 24): Promise<void> => {
  try {
    const sendAfter = new Date();
    sendAfter.setHours(sendAfter.getHours() + delayHours);
    
    await fetch('https://onesignal.com/api/v1/notifications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${ONESIGNAL_REST_API_KEY}`
      },
      body: JSON.stringify({
        app_id: ONESIGNAL_APP_ID,
        include_external_user_ids: [userEmail],
        headings: { "en": "⏰ Time for your ECG PulsePoints challenge!" },
        contents: { "en": "Let's keep your streak alive. Tap here to take today's quiz 🫀" },
        url: window.location.origin,
        send_after: sendAfter.toISOString()
      })
    });
  } catch (error) {
    console.error('Failed to schedule OneSignal notification:', error);
  }
};