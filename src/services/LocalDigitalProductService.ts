import { OrderManagementService } from './OrderManagementService';

export interface LocalDigitalProduct {
  id: string;
  title: string;
  description: string;
  category: 'pdf' | 'audio' | 'interactive' | 'image';
  filename: string;
  cost: { gems: number };
  fileSize: string;
  filePath: string; // Local path in public folder
  uploadDate: Date;
}

export class LocalDigitalProductService {
  private static readonly STORAGE_KEY = 'ecg_digital_products';
  private static readonly PUBLIC_PATH = '/digital-products/';

  /**
   * Save uploaded file to public folder and register product
   */
  static async uploadProduct(
    file: File,
    productInfo: {
      id: string;
      title: string;
      description: string;
      category: 'pdf' | 'audio' | 'interactive' | 'image';
      gems: number;
    }
  ): Promise<{ success: boolean; product?: LocalDigitalProduct; message: string }> {
    try {
      // Generate filename with timestamp to avoid conflicts
      const timestamp = Date.now();
      const fileExtension = file.name.split('.').pop();
      const filename = `${productInfo.id}-${timestamp}.${fileExtension}`;
      const filePath = `${this.PUBLIC_PATH}${productInfo.category}/${filename}`;

      // Create the product object
      const product: LocalDigitalProduct = {
        id: productInfo.id,
        title: productInfo.title,
        description: productInfo.description,
        category: productInfo.category,
        filename,
        cost: { gems: productInfo.gems },
        fileSize: this.formatFileSize(file.size),
        filePath,
        uploadDate: new Date()
      };

      // Save product info to localStorage
      const existingProducts = this.getStoredProducts();
      const updatedProducts = [...existingProducts, product];
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(updatedProducts));

      // Note: In a real implementation, you would need to handle file upload to server
      // For demo purposes, we'll simulate this
      console.log(`📁 Product registered: ${filename}`);
      console.log(`💡 To complete setup, place file at: public${filePath}`);

      return {
        success: true,
        product,
        message: `Product "${productInfo.title}" registered successfully! Place the file at public${filePath}`
      };

    } catch (error) {
      console.error('❌ Failed to register product:', error);
      return {
        success: false,
        message: 'Failed to register product. Please try again.'
      };
    }
  }

  /**
   * Get all stored products
   */
  static getStoredProducts(): LocalDigitalProduct[] {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (!stored) return [];
      
      const products = JSON.parse(stored);
      return products.map((p: any) => ({
        ...p,
        uploadDate: new Date(p.uploadDate)
      }));
    } catch (error) {
      console.error('❌ Failed to load products:', error);
      return [];
    }
  }

  /**
   * Get products by category
   */
  static getProductsByCategory(category: string): LocalDigitalProduct[] {
    const allProducts = this.getStoredProducts();
    return allProducts.filter(product => product.category === category);
  }

  /**
   * Get single product by ID
   */
  static getProductById(id: string): LocalDigitalProduct | null {
    const allProducts = this.getStoredProducts();
    return allProducts.find(product => product.id === id) || null;
  }

  /**
   * Download product file
   */
  static async downloadProduct(
    productId: string,
    userId?: string
  ): Promise<{ success: boolean; downloadUrl?: string; message: string }> {
    try {
      const product = this.getProductById(productId);
      if (!product) {
        return {
          success: false,
          message: 'Product not found'
        };
      }

      // Create download URL (local file path)
      const downloadUrl = product.filePath;

      // Record the download in OrderManagementService (if user is authenticated)
      if (userId) {
        await OrderManagementService.recordDigitalDownload(
          product.id,
          product.title,
          product.fileSize,
          product.category,
          downloadUrl
        );
      }

      return {
        success: true,
        downloadUrl,
        message: `Download ready: ${product.title}`
      };

    } catch (error) {
      console.error('❌ Failed to prepare download:', error);
      return {
        success: false,
        message: 'Failed to prepare download'
      };
    }
  }

  /**
   * Trigger file download in browser
   */
  static triggerDownload(downloadUrl: string, filename: string): void {
    try {
      // Create temporary link to trigger download
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = filename;
      link.style.display = 'none';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      console.log(`📥 Download triggered: ${filename}`);
    } catch (error) {
      console.error('❌ Failed to trigger download:', error);
      // Fallback: open in new tab
      window.open(downloadUrl, '_blank');
    }
  }

  /**
   * Delete a product
   */
  static deleteProduct(productId: string): { success: boolean; message: string } {
    try {
      const existingProducts = this.getStoredProducts();
      const filteredProducts = existingProducts.filter(p => p.id !== productId);
      
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filteredProducts));
      
      return {
        success: true,
        message: 'Product deleted successfully'
      };
    } catch (error) {
      console.error('❌ Failed to delete product:', error);
      return {
        success: false,
        message: 'Failed to delete product'
      };
    }
  }

  /**
   * Create directory structure guide
   */
  static getDirectoryStructureGuide(): string {
    return `
📁 Required Directory Structure in public folder:

public/
└── digital-products/
    ├── pdf/
    │   ├── ecg-quick-ref-123456789.pdf
    │   └── practice-cases-123456790.pdf
    ├── audio/
    │   ├── rhythm-training-123456791.mp3
    │   └── ecg-basics-123456792.mp3
    ├── interactive/
    │   ├── quiz-basic-123456793.html
    │   └── case-studies-123456794.zip
    └── image/
        ├── charts-123456795.jpg
        └── diagrams-123456796.png

💡 After uploading through the manager, manually place files in these folders.
    `;
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
   * Initialize storage structure (creates sample products)
   */
  static initializeLocalStorage(): { success: boolean; message: string } {
    try {
      const sampleProducts: LocalDigitalProduct[] = [
        {
          id: 'ecg-quick-ref',
          title: '📋 ECG Quick Reference',
          description: 'Essential ECG values, lead placement, and common rhythms in one handy guide',
          category: 'pdf',
          filename: 'ecg-quick-ref-sample.pdf',
          cost: { gems: 75 },
          fileSize: '2.1 MB',
          filePath: '/digital-products/pdf/ecg-quick-ref-sample.pdf',
          uploadDate: new Date()
        },
        {
          id: 'rhythm-chart',
          title: '📊 Rhythm Recognition Chart',
          description: 'Visual guide to identifying different heart rhythms',
          category: 'pdf',
          filename: 'rhythm-chart-sample.pdf',
          cost: { gems: 85 },
          fileSize: '1.8 MB',
          filePath: '/digital-products/pdf/rhythm-chart-sample.pdf',
          uploadDate: new Date()
        },
        {
          id: 'practice-cases-25',
          title: '📚 25 ECG Practice Cases',
          description: 'Real ECG strips with step-by-step analysis and answers',
          category: 'pdf',
          filename: 'practice-cases-25-sample.pdf',
          cost: { gems: 120 },
          fileSize: '8.5 MB',
          filePath: '/digital-products/pdf/practice-cases-25-sample.pdf',
          uploadDate: new Date()
        }
      ];

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(sampleProducts));
      
      return {
        success: true,
        message: 'Local storage initialized with sample products'
      };
    } catch (error) {
      console.error('❌ Failed to initialize local storage:', error);
      return {
        success: false,
        message: 'Failed to initialize local storage'
      };
    }
  }

  /**
   * Export products for backup
   */
  static exportProducts(): string {
    const products = this.getStoredProducts();
    return JSON.stringify(products, null, 2);
  }

  /**
   * Import products from backup
   */
  static importProducts(jsonData: string): { success: boolean; message: string } {
    try {
      const products = JSON.parse(jsonData);
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(products));
      
      return {
        success: true,
        message: `Imported ${products.length} products successfully`
      };
    } catch (error) {
      console.error('❌ Failed to import products:', error);
      return {
        success: false,
        message: 'Failed to import products. Invalid JSON format.'
      };
    }
  }
}

export default LocalDigitalProductService;
