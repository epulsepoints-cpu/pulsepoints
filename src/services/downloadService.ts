import React from 'react';
import { OrderManagementService } from './OrderManagementService';

interface DownloadableFile {
  id: string;
  name: string;
  description: string;
  fileUrl: string;
  fileSize: string;
  fileType: 'pdf' | 'zip' | 'epub' | 'mp3';
}

// Digital download files mapping
export const downloadableFiles: Record<string, DownloadableFile> = {
  flashcards_pro: {
    id: 'flashcards_pro',
    name: 'ECG Mastery Flashcards Pack (Pro)',
    description: 'Complete flashcard deck with 200+ ECG patterns',
    fileUrl: '/downloads/ecg-flashcards-pro.pdf',
    fileSize: '15.2 MB',
    fileType: 'pdf'
  },
  bls_acls_bundle: {
    id: 'bls_acls_bundle',
    name: 'BLS + ACLS ECG Algorithm Bundle',
    description: 'Comprehensive algorithm reference guide',
    fileUrl: '/downloads/bls-acls-algorithms.zip',
    fileSize: '8.7 MB',
    fileType: 'zip'
  },
  pocket_book: {
    id: 'pocket_book',
    name: 'ECGKID Pocket Book (PDF)',
    description: 'Handy pocket reference for ECG interpretation',
    fileUrl: '/downloads/ecgkid-pocket-book.pdf',
    fileSize: '12.1 MB',
    fileType: 'pdf'
  },
  case_scenarios: {
    id: 'case_scenarios',
    name: '25 ECG Clinical Case Scenarios',
    description: 'Real-world clinical cases with detailed analysis',
    fileUrl: '/downloads/ecg-clinical-cases.pdf',
    fileSize: '18.5 MB',
    fileType: 'pdf'
  },
  microlearning_pack: {
    id: 'microlearning_pack',
    name: 'ECG Microlearning Challenge Pack',
    description: 'Daily bite-sized challenges and exercises',
    fileUrl: '/downloads/microlearning-challenges.zip',
    fileSize: '6.3 MB',
    fileType: 'zip'
  },
  axis_guide: {
    id: 'axis_guide',
    name: '12-Lead Placement & Axis Guide',
    description: 'Visual guide for electrode placement and axis interpretation',
    fileUrl: '/downloads/12-lead-axis-guide.pdf',
    fileSize: '4.8 MB',
    fileType: 'pdf'
  },
  journal_pages: {
    id: 'journal_pages',
    name: 'ECG Journal Pages & Trackers (PDF)',
    description: 'Printable study journal and progress trackers',
    fileUrl: '/downloads/ecg-journal-pages.pdf',
    fileSize: '3.2 MB',
    fileType: 'pdf'
  }
};

// Download service functions
export class DownloadService {
  
  /**
   * Trigger file download with history tracking
   */
  static async downloadFile(itemId: string): Promise<{ success: boolean; message: string }> {
    const file = downloadableFiles[itemId];
    
    if (!file) {
      return { 
        success: false, 
        message: 'File not found. Please contact support.' 
      };
    }

    try {
      // Create download link
      const link = document.createElement('a');
      link.href = file.fileUrl;
      link.download = this.getDownloadFileName(file);
      link.style.display = 'none';
      
      // Add to DOM and trigger download
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      setTimeout(() => {
        document.body.removeChild(link);
      }, 100);
      
      // Track download in analytics and history
      this.trackDownload(file);
      
      // Record in user's download history
      await this.recordDownloadHistory(file);
      
      return { 
        success: true, 
        message: `${file.name} download started! Check your downloads folder.` 
      };
      
    } catch (error) {
      console.error('Download failed:', error);
      return { 
        success: false, 
        message: 'Download failed. Please try again or contact support.' 
      };
    }
  }

  /**
   * Record download in user's history
   */
  private static async recordDownloadHistory(file: DownloadableFile): Promise<void> {
    try {
      await OrderManagementService.recordDigitalDownload(
        file.id,
        file.name,
        file.fileSize,
        file.fileType,
        file.fileUrl
      );
      console.log('📥 Download recorded in history:', file.name);
    } catch (error) {
      console.warn('Failed to record download history:', error);
      // Don't fail the download if history recording fails
    }
  }
  
  /**
   * Get formatted download filename
   */
  private static getDownloadFileName(file: DownloadableFile): string {
    const timestamp = new Date().toISOString().split('T')[0];
    const cleanName = file.name
      .replace(/[^a-zA-Z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase();
    
    return `ecgkid-${cleanName}-${timestamp}.${file.fileType}`;
  }
  
  /**
   * Track download for analytics
   */
  private static trackDownload(file: DownloadableFile): void {
    // Track download event
    console.log(`📥 Download tracked: ${file.name} (${file.fileSize})`);
    
    // Could integrate with analytics service here
    try {
      if (typeof (window as any).gtag !== 'undefined') {
        (window as any).gtag('event', 'download', {
          event_category: 'Digital Product',
          event_label: file.name,
          file_type: file.fileType,
          file_size: file.fileSize
        });
      }
    } catch (error) {
      console.warn('Analytics tracking failed:', error);
    }
  }
  
  /**
   * Check if file exists (for development)
   */
  static async checkFileExists(itemId: string): Promise<boolean> {
    const file = downloadableFiles[itemId];
    if (!file) return false;
    
    try {
      const response = await fetch(file.fileUrl, { method: 'HEAD' });
      return response.ok;
    } catch {
      // In development, files might not exist
      console.warn(`📁 File not found: ${file.fileUrl} (this is normal in development)`);
      return false;
    }
  }
  
  /**
   * Get file info for display
   */
  static getFileInfo(itemId: string): DownloadableFile | null {
    return downloadableFiles[itemId] || null;
  }
  
  /**
   * Simulate download for development/demo
   */
  static simulateDownload(itemId: string): { success: boolean; message: string } {
    const file = downloadableFiles[itemId];
    
    if (!file) {
      return { 
        success: false, 
        message: 'File not found.' 
      };
    }
    
    console.log(`🎭 DEMO: Simulating download of ${file.name}`);
    
    return { 
      success: true, 
      message: `Demo: ${file.name} would download here! (${file.fileSize})` 
    };
  }
}

export default DownloadService;
