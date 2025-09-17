// Digital download files mapping
export const downloadableFiles = {
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
     * Trigger file download
     */
    static async downloadFile(itemId) {
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
            // Track download in analytics
            this.trackDownload(file);
            return {
                success: true,
                message: `${file.name} download started! Check your downloads folder.`
            };
        }
        catch (error) {
            console.error('Download failed:', error);
            return {
                success: false,
                message: 'Download failed. Please try again or contact support.'
            };
        }
    }
    /**
     * Get formatted download filename
     */
    static getDownloadFileName(file) {
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
    static trackDownload(file) {
        // Track download event
        console.log(`📥 Download tracked: ${file.name} (${file.fileSize})`);
        // Could integrate with analytics service here
        try {
            if (typeof window.gtag !== 'undefined') {
                window.gtag('event', 'download', {
                    event_category: 'Digital Product',
                    event_label: file.name,
                    file_type: file.fileType,
                    file_size: file.fileSize
                });
            }
        }
        catch (error) {
            console.warn('Analytics tracking failed:', error);
        }
    }
    /**
     * Check if file exists (for development)
     */
    static async checkFileExists(itemId) {
        const file = downloadableFiles[itemId];
        if (!file)
            return false;
        try {
            const response = await fetch(file.fileUrl, { method: 'HEAD' });
            return response.ok;
        }
        catch {
            // In development, files might not exist
            console.warn(`📁 File not found: ${file.fileUrl} (this is normal in development)`);
            return false;
        }
    }
    /**
     * Get file info for display
     */
    static getFileInfo(itemId) {
        return downloadableFiles[itemId] || null;
    }
    /**
     * Simulate download for development/demo
     */
    static simulateDownload(itemId) {
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
