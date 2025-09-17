/**
 * Advanced Permission Recovery for ECGkid PulsePoints
 * This script helps recover from denied notification permissions
 */

// Extend window interface for TypeScript
declare global {
  interface Window {
    NotificationPermissionRecovery: typeof NotificationPermissionRecovery;
  }
}

class NotificationPermissionRecovery {
  
  static async checkAndRecoverPermissions() {
    console.log('🔍 PERMISSION RECOVERY ANALYSIS');
    console.log('==============================\n');
    
    // Check current state
    const currentPermission = Notification.permission;
    console.log(`🎯 Current permission state: ${currentPermission}`);
    
    if (currentPermission === 'denied') {
      console.log('🚨 PERMISSION DENIED - Recovery Required');
      console.log('');
      
      this.showPermissionRecoveryGuide();
      return false;
    } else if (currentPermission === 'default') {
      console.log('⚠️ Permission not requested yet');
      return await this.requestPermissionWithGuidance();
    } else {
      console.log('✅ Permission already granted');
      return true;
    }
  }
  
  static showPermissionRecoveryGuide() {
    console.log('📋 PERMISSION RECOVERY STEPS:');
    console.log('============================');
    console.log('');
    console.log('🌐 CHROME/EDGE:');
    console.log('1. Click the 🔒 lock icon in the address bar');
    console.log('2. Click "Notifications" dropdown');
    console.log('3. Select "Allow"');
    console.log('4. Refresh the page');
    console.log('');
    console.log('OR via Settings:');
    console.log('1. Click the three dots menu (⋮)');
    console.log('2. Go to Settings > Privacy and Security > Site Settings');
    console.log('3. Click "Notifications"');
    console.log('4. Find localhost:8080 in the "Block" section');
    console.log('5. Click the trash icon to remove it');
    console.log('6. Refresh the page');
    console.log('');
    console.log('🦊 FIREFOX:');
    console.log('1. Click the shield icon in the address bar');
    console.log('2. Click "Allow" next to notifications');
    console.log('3. Refresh the page');
    console.log('');
    console.log('OR via Settings:');
    console.log('1. Type about:preferences#privacy in address bar');
    console.log('2. Scroll to "Permissions" section');
    console.log('3. Click "Settings..." next to Notifications');
    console.log('4. Find localhost and change to "Allow"');
    console.log('5. Refresh the page');
    console.log('');
    console.log('🔄 AFTER ENABLING: Refresh this page and run tests again');
  }
  
  static async requestPermissionWithGuidance() {
    console.log('🔐 Requesting notification permission...');
    console.log('💡 Please click "Allow" when the permission dialog appears');
    
    try {
      const result = await Notification.requestPermission();
      console.log(`📊 Permission result: ${result}`);
      
      if (result === 'granted') {
        console.log('✅ Permission granted successfully!');
        return true;
      } else {
        console.log('❌ Permission denied by user');
        this.showPermissionRecoveryGuide();
        return false;
      }
    } catch (error) {
      console.error('❌ Error requesting permission:', error);
      this.showPermissionRecoveryGuide();
      return false;
    }
  }
  
  static async testNotificationAfterPermission() {
    if (Notification.permission !== 'granted') {
      console.log('❌ Cannot test - permission still not granted');
      return false;
    }
    
    console.log('🧪 Testing notification with granted permission...');
    
    try {
      const notification = new Notification('🎉 Permission Fixed!', {
        body: 'Great! Your notifications are now working.',
        icon: '/notification-assets/notification-icon.png',
        badge: '/notification-assets/notification-badge.png',
        requireInteraction: true
      });
      
      notification.onshow = () => {
        console.log('✅ Test notification displayed successfully!');
      };
      
      notification.onclick = () => {
        console.log('✅ Notification clicked!');
        notification.close();
      };
      
      // Auto close after 10 seconds
      setTimeout(() => {
        notification.close();
        console.log('🔄 Test notification closed');
      }, 10000);
      
      return true;
      
    } catch (error) {
      console.error('❌ Test notification failed:', error);
      return false;
    }
  }
  
  static createPermissionButton() {
    // Remove existing button if it exists
    const existingBtn = document.getElementById('permission-recovery-btn');
    if (existingBtn) {
      existingBtn.remove();
    }
    
    const button = document.createElement('button');
    button.id = 'permission-recovery-btn';
    button.innerHTML = '🔓 Fix Notification Permissions';
    button.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 9999;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      padding: 12px 20px;
      border-radius: 25px;
      font-weight: bold;
      cursor: pointer;
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      transition: transform 0.2s;
    `;
    
    button.onmouseover = () => {
      button.style.transform = 'scale(1.05)';
    };
    
    button.onmouseout = () => {
      button.style.transform = 'scale(1)';
    };
    
    button.onclick = async () => {
      const success = await this.checkAndRecoverPermissions();
      if (success) {
        button.innerHTML = '✅ Permissions Fixed!';
        button.style.background = 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)';
        
        // Test notification
        await this.testNotificationAfterPermission();
        
        // Remove button after 3 seconds
        setTimeout(() => {
          button.remove();
        }, 3000);
      }
    };
    
    document.body.appendChild(button);
  }
}

// Auto-run when loaded
if (typeof window !== 'undefined') {
  // Add to global scope
  window.NotificationPermissionRecovery = NotificationPermissionRecovery;
  
  // Auto-check permissions and show recovery if needed
  setTimeout(async () => {
    const hasPermission = await NotificationPermissionRecovery.checkAndRecoverPermissions();
    
    if (!hasPermission) {
      // Create floating button for easy recovery
      NotificationPermissionRecovery.createPermissionButton();
    }
  }, 1000);
}

export default NotificationPermissionRecovery;
