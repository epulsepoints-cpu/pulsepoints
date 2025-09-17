import React, { useState, useRef, useEffect } from 'react';
import { LocalDigitalProductService, LocalDigitalProduct } from '../services/LocalDigitalProductService';

interface ProductUploadManagerProps {
  onProductUploaded?: (productId: string, filePath: string) => void;
}

interface ProductItem {
  id: string;
  title: string;
  description: string;
  category: 'pdf' | 'audio' | 'interactive' | 'image';
  filename: string;
  cost: { gems: number };
  estimatedSize: string;
}

export const ProductUploadManager: React.FC<ProductUploadManagerProps> = ({
  onProductUploaded
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState('');
  const [products, setProducts] = useState<LocalDigitalProduct[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load products from localStorage on component mount
  useEffect(() => {
    const storedProducts = LocalDigitalProductService.getStoredProducts();
    setProducts(storedProducts);
    
    // Initialize with sample products if empty
    if (storedProducts.length === 0) {
      LocalDigitalProductService.initializeLocalStorage();
      setProducts(LocalDigitalProductService.getStoredProducts());
    }
  }, []);

  const [newProduct, setNewProduct] = useState({
    id: '',
    title: '',
    description: '',
    category: 'pdf' as 'pdf' | 'audio' | 'interactive' | 'image',
    version: 'v1',
    gems: 75
  });

  const handleFileUpload = async (file: File) => {
    if (!newProduct.id || !newProduct.title) {
      alert('Please fill in product ID and title first');
      return;
    }

    setIsUploading(true);
    setUploadProgress('Registering product in local storage...');

    try {
      const result = await LocalDigitalProductService.uploadProduct(file, {
        id: newProduct.id,
        title: newProduct.title,
        description: newProduct.description,
        category: newProduct.category,
        gems: newProduct.gems
      });

      if (result.success && result.product) {
        setUploadProgress('Product registered successfully! ✅');
        
        // Add to products list
        setProducts(prev => [...prev, result.product!]);
        
        // Reset form
        setNewProduct({
          id: '',
          title: '',
          description: '',
          category: 'pdf',
          version: 'v1',
          gems: 75
        });

        if (onProductUploaded) {
          onProductUploaded(result.product.id, result.product.filePath);
        }

        // Show file placement instructions
        setTimeout(() => {
          setUploadProgress(`📁 Place file at: public${result.product!.filePath}`);
        }, 2000);

        setTimeout(() => setUploadProgress(''), 8000);
      } else {
        setUploadProgress(`Registration failed: ${result.message}`);
      }
    } catch (error) {
      setUploadProgress('Registration failed! Please try again.');
      console.error('Upload error:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'pdf': return '📄';
      case 'audio': return '🎵';
      case 'interactive': return '🎯';
      case 'image': return '🖼️';
      default: return '📁';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'pdf': return 'bg-red-100 text-red-800';
      case 'audio': return 'bg-purple-100 text-purple-800';
      case 'interactive': return 'bg-blue-100 text-blue-800';
      case 'image': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          📦 Digital Product Upload Manager
        </h2>
        <p className="text-gray-600">
          Upload and manage your ECG learning digital products
        </p>
      </div>

      {/* Upload Form */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold mb-4">➕ Add New Product</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product ID *
            </label>
            <input
              type="text"
              value={newProduct.id}
              onChange={(e) => setNewProduct(prev => ({ ...prev, id: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="ecg-quick-ref"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category *
            </label>
            <select
              value={newProduct.category}
              onChange={(e) => setNewProduct(prev => ({ ...prev, category: e.target.value as any }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="pdf">📄 PDF Document</option>
              <option value="audio">🎵 Audio File</option>
              <option value="interactive">🎯 Interactive Content</option>
              <option value="image">🖼️ Image/Chart</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title *
            </label>
            <input
              type="text"
              value={newProduct.title}
              onChange={(e) => setNewProduct(prev => ({ ...prev, title: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="ECG Quick Reference Guide"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price (Gems) *
            </label>
            <input
              type="number"
              value={newProduct.gems}
              onChange={(e) => setNewProduct(prev => ({ ...prev, gems: parseInt(e.target.value) }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              min="1"
              max="1000"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            value={newProduct.description}
            onChange={(e) => setNewProduct(prev => ({ ...prev, description: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            rows={3}
            placeholder="Brief description of what this product contains..."
          />
        </div>

        {/* File Upload Area */}
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            isUploading ? 'border-blue-300 bg-blue-50' : 'border-gray-300 hover:border-gray-400'
          }`}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          {isUploading ? (
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-3"></div>
              <p className="text-blue-600 font-medium">{uploadProgress}</p>
            </div>
          ) : (
            <div>
              <div className="text-4xl mb-4">�</div>
              <p className="text-lg font-medium text-gray-900 mb-2">
                Select your file to register
              </p>
              <p className="text-gray-500 text-sm mb-4">
                Supports PDF, MP3, HTML, JPG, PNG files • Local storage only
              </p>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                disabled={!newProduct.id || !newProduct.title}
              >
                Choose File
              </button>
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept=".pdf,.mp3,.html,.jpg,.jpeg,.png,.zip"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFileUpload(file);
                }}
              />
            </div>
          )}
        </div>

        {uploadProgress && !isUploading && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800">{uploadProgress}</p>
          </div>
        )}
      </div>

      {/* Directory Structure Guide */}
      <div className="bg-blue-50 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold mb-4 text-blue-900">📁 Local Storage Setup</h3>
        <div className="text-sm text-blue-800 space-y-2">
          <p><strong>Step 1:</strong> Register your product using the form above</p>
          <p><strong>Step 2:</strong> Create the required folder structure in your <code>public</code> directory:</p>
          <pre className="bg-white p-3 rounded mt-2 text-xs overflow-x-auto">
{`public/
└── digital-products/
    ├── pdf/           ← Place PDF files here
    ├── audio/         ← Place MP3 files here
    ├── interactive/   ← Place HTML/ZIP files here
    └── image/         ← Place JPG/PNG files here`}
          </pre>
          <p><strong>Step 3:</strong> Place your actual files in the corresponding folders with the exact filename shown</p>
          <p className="text-blue-600"><strong>💡 Tip:</strong> Files will be accessible at <code>yoursite.com/digital-products/category/filename</code></p>
        </div>
      </div>

      {/* Products List */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">📚 Available Products</h3>
          <button
            onClick={() => {
              const products = LocalDigitalProductService.getStoredProducts();
              setProducts(products);
            }}
            className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
          >
            🔄 Refresh
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{getCategoryIcon(product.category)}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(product.category)}`}>
                    {product.category.toUpperCase()}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-blue-600">
                    {product.cost.gems} 💎
                  </div>
                  <div className="text-xs text-gray-500">
                    {product.fileSize}
                  </div>
                </div>
              </div>
              
              <h4 className="font-semibold text-gray-900 mb-2">
                {product.title}
              </h4>
              
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {product.description}
              </p>
              
              <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                <span>ID: {product.id}</span>
                <span>{product.filename}</span>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    LocalDigitalProductService.triggerDownload(
                      product.filePath,
                      product.filename
                    );
                  }}
                  className="flex-1 px-3 py-1 bg-green-100 text-green-700 rounded-md hover:bg-green-200 transition-colors text-xs font-medium"
                >
                  📥 Test Download
                </button>
                <button
                  onClick={() => {
                    if (confirm(`Delete "${product.title}"?`)) {
                      LocalDigitalProductService.deleteProduct(product.id);
                      setProducts(LocalDigitalProductService.getStoredProducts());
                    }
                  }}
                  className="px-3 py-1 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors text-xs font-medium"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <div className="text-4xl mb-4">📝</div>
            <p>No products uploaded yet. Create your first digital product above!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductUploadManager;
