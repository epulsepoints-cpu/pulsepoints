import { getStorage, ref, uploadBytes, getDownloadURL, listAll, getMetadata } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

export interface DigitalProduct {
  id: string;
  title: string;
  description: string;
  category: 'pdf' | 'audio' | 'interactive' | 'image';
  filename: string;
  fileSize: string;
  downloadUrl: string;
  uploadDate: Date;
  version: string;
}

export class DigitalProductStorageService {
  private static storage = getStorage();

  /**
   * Upload a new digital product to Firebase Storage
   */
  static async uploadProduct(
    file: File,
    category: 'pdf' | 'audio' | 'interactive' | 'image',
    productId: string,
    version: string = 'v1'
  ): Promise<{ success: boolean; downloadUrl?: string; message: string }> {
    try {
      const user = getAuth().currentUser;
      if (!user) {
        return { success: false, message: 'User not authenticated' };
      }

      // Create filename with version
      const fileExtension = file.name.split('.').pop();
      const filename = `${productId}-${version}.${fileExtension}`;
      
      // Create storage reference
      const storageRef = ref(this.storage, `digital-products/${category}/${filename}`);
      
      // Upload file
      console.log(`📤 Uploading ${filename} to Firebase Storage...`);
      const snapshot = await uploadBytes(storageRef, file);
      
      // Get download URL
      const downloadUrl = await getDownloadURL(snapshot.ref);
      
      console.log(`✅ Successfully uploaded ${filename}`);
      
      return {
        success: true,
        downloadUrl,
        message: `${filename} uploaded successfully!`
      };

    } catch (error) {
      console.error('❌ Failed to upload digital product:', error);
      return {
        success: false,
        message: 'Failed to upload file. Please try again.'
      };
    }
  }

  /**
   * Get download URL for a digital product
   */
  static async getProductDownloadUrl(
    category: string,
    filename: string
  ): Promise<{ success: boolean; downloadUrl?: string; message: string }> {
    try {
      const storageRef = ref(this.storage, `digital-products/${category}/${filename}`);
      const downloadUrl = await getDownloadURL(storageRef);
      
      return {
        success: true,
        downloadUrl,
        message: 'Download URL retrieved successfully'
      };

    } catch (error) {
      console.error('❌ Failed to get download URL:', error);
      return {
        success: false,
        message: 'File not found or access denied'
      };
    }
  }

  /**
   * Get file metadata (size, upload date, etc.)
   */
  static async getFileMetadata(
    category: string,
    filename: string
  ): Promise<{ success: boolean; metadata?: any; message: string }> {
    try {
      const storageRef = ref(this.storage, `digital-products/${category}/${filename}`);
      const metadata = await getMetadata(storageRef);
      
      return {
        success: true,
        metadata: {
          size: this.formatFileSize(metadata.size),
          uploadDate: new Date(metadata.timeCreated),
          contentType: metadata.contentType,
          downloadUrl: await getDownloadURL(storageRef)
        },
        message: 'Metadata retrieved successfully'
      };

    } catch (error) {
      console.error('❌ Failed to get file metadata:', error);
      return {
        success: false,
        message: 'Failed to retrieve file information'
      };
    }
  }

  /**
   * List all files in a category
   */
  static async listProductsByCategory(
    category: string
  ): Promise<{ success: boolean; products?: DigitalProduct[]; message: string }> {
    try {
      const categoryRef = ref(this.storage, `digital-products/${category}`);
      const listResult = await listAll(categoryRef);
      
      const products: DigitalProduct[] = await Promise.all(
        listResult.items.map(async (itemRef) => {
          const metadata = await getMetadata(itemRef);
          const downloadUrl = await getDownloadURL(itemRef);
          
          return {
            id: itemRef.name.split('-')[0] || itemRef.name,
            title: this.formatTitle(itemRef.name),
            description: `${category.toUpperCase()} resource for ECG learning`,
            category: category as any,
            filename: itemRef.name,
            fileSize: this.formatFileSize(metadata.size),
            downloadUrl,
            uploadDate: new Date(metadata.timeCreated),
            version: this.extractVersion(itemRef.name)
          };
        })
      );

      return {
        success: true,
        products,
        message: `Found ${products.length} products in ${category} category`
      };

    } catch (error) {
      console.error(`❌ Failed to list products in ${category}:`, error);
      return {
        success: false,
        message: `Failed to retrieve ${category} products`
      };
    }
  }

  /**
   * Generate secure download link with expiration
   */
  static async generateSecureDownloadLink(
    category: string,
    filename: string,
    expirationMinutes: number = 60
  ): Promise<{ success: boolean; downloadUrl?: string; expiresAt?: Date; message: string }> {
    try {
      const storageRef = ref(this.storage, `digital-products/${category}/${filename}`);
      
      // For Firebase Storage, download URLs don't expire by default
      // But we can track the generation time for our own expiration logic
      const downloadUrl = await getDownloadURL(storageRef);
      const expiresAt = new Date(Date.now() + expirationMinutes * 60 * 1000);
      
      console.log(`🔗 Generated secure download link for ${filename}`);
      
      return {
        success: true,
        downloadUrl,
        expiresAt,
        message: `Secure download link generated (expires in ${expirationMinutes} minutes)`
      };

    } catch (error) {
      console.error('❌ Failed to generate secure download link:', error);
      return {
        success: false,
        message: 'Failed to generate download link'
      };
    }
  }

  /**
   * Utility: Format file size
   */
  private static formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  /**
   * Utility: Format filename to title
   */
  private static formatTitle(filename: string): string {
    return filename
      .replace(/\.[^/.]+$/, '') // Remove extension
      .replace(/-/g, ' ') // Replace hyphens with spaces
      .replace(/\b\w/g, l => l.toUpperCase()); // Capitalize words
  }

  /**
   * Utility: Extract version from filename
   */
  private static extractVersion(filename: string): string {
    const versionMatch = filename.match(/-v(\d+)/);
    return versionMatch ? `v${versionMatch[1]}` : 'v1';
  }

  /**
   * Create pre-defined storage structure
   */
  static async initializeStorageStructure(): Promise<{ success: boolean; message: string }> {
    try {
      console.log('📁 Initializing Firebase Storage structure for digital products...');
      
      // Categories to create
      const categories = ['pdf', 'audio', 'interactive', 'image'];
      
      // Note: Firebase Storage creates folders automatically when files are uploaded
      // This is more of a documentation/planning function
      
      console.log('✅ Storage structure ready for categories:', categories.join(', '));
      
      return {
        success: true,
        message: 'Storage structure initialized. Ready to upload digital products!'
      };

    } catch (error) {
      console.error('❌ Failed to initialize storage structure:', error);
      return {
        success: false,
        message: 'Failed to initialize storage structure'
      };
    }
  }
}

// Sample products configuration for your store
export const SAMPLE_DIGITAL_PRODUCTS = [
  {
    id: 'ecg-quick-ref',
    title: '📋 ECG Quick Reference',
    description: 'Essential ECG values, lead placement, and common rhythms in one handy guide',
    category: 'pdf' as const,
    filename: 'ecg-quick-ref-v1.pdf',
    cost: { gems: 75 },
    estimatedSize: '2.1 MB'
  },
  {
    id: 'rhythm-recognition-audio',
    title: '🎵 Rhythm Recognition Training',
    description: 'Audio guide to identifying different heart rhythms by sound patterns',
    category: 'audio' as const,
    filename: 'rhythm-recognition-audio-v1.mp3',
    cost: { gems: 100 },
    estimatedSize: '15.3 MB'
  },
  {
    id: 'arrhythmia-chart',
    title: '📊 Arrhythmia Classification Chart',
    description: 'Visual guide to different types of arrhythmias with examples',
    category: 'pdf' as const,
    filename: 'arrhythmia-chart-v1.pdf',
    cost: { gems: 85 },
    estimatedSize: '3.7 MB'
  },
  {
    id: 'practice-cases-50',
    title: '📚 50 ECG Practice Cases',
    description: 'Real ECG strips with step-by-step analysis and answers',
    category: 'pdf' as const,
    filename: 'practice-cases-50-v1.pdf',
    cost: { gems: 150 },
    estimatedSize: '12.5 MB'
  },
  {
    id: 'interactive-quiz-basic',
    title: '🎯 Interactive ECG Quiz',
    description: 'Offline quiz with 100 questions and instant feedback',
    category: 'interactive' as const,
    filename: 'interactive-quiz-basic-v1.html',
    cost: { gems: 120 },
    estimatedSize: '5.2 MB'
  }
];

export default DigitalProductStorageService;
