import React, { useState, useCallback } from 'react';
import { uploadMediaFile, uploadMultipleFiles, listMediaFiles, deleteMediaFile, STORAGE_FOLDERS } from '../utils/firebaseStorage';

interface MediaUploadProps {
  folder: keyof typeof STORAGE_FOLDERS;
  accept?: string;
  multiple?: boolean;
  onUploadComplete?: (results: any[]) => void;
  className?: string;
}

/**
 * Firebase Storage Media Upload Component
 */
export const MediaUpload: React.FC<MediaUploadProps> = ({
  folder,
  accept,
  multiple = false,
  onUploadComplete,
  className = ''
}) => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState({ completed: 0, total: 0, current: '' });
  const [uploadResults, setUploadResults] = useState<any[]>([]);
  const [error, setError] = useState<string>('');

  const handleFileUpload = useCallback(async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    try {
      setUploading(true);
      setError('');
      setUploadResults([]);

      const fileArray = Array.from(files);
      const folderPath = STORAGE_FOLDERS[folder];

      if (fileArray.length === 1) {
        // Single file upload
        const result = await uploadMediaFile(fileArray[0], folderPath);
        setUploadResults([result]);
        onUploadComplete?.([result]);
      } else {
        // Multiple file upload
        const results = await uploadMultipleFiles(
          fileArray,
          folderPath,
          (completed, total, current) => {
            setProgress({ completed, total, current });
          }
        );
        setUploadResults(results);
        onUploadComplete?.(results);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Upload failed';
      setError(errorMessage);
      console.error('Upload error:', err);
    } finally {
      setUploading(false);
      setProgress({ completed: 0, total: 0, current: '' });
    }
  }, [folder, onUploadComplete]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    handleFileUpload(files);
  }, [handleFileUpload]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  return (
    <div className={`firebase-media-upload ${className}`}>
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <input
          type="file"
          id={`upload-${folder}`}
          accept={accept}
          multiple={multiple}
          onChange={(e) => handleFileUpload(e.target.files)}
          className="hidden"
          disabled={uploading}
        />
        
        <label
          htmlFor={`upload-${folder}`}
          className="cursor-pointer block"
        >
          <div className="text-gray-500">
            {uploading ? (
              <div>
                <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-2"></div>
                <p>Uploading...</p>
                {progress.total > 1 && (
                  <p className="text-sm">
                    {progress.completed} / {progress.total} files
                  </p>
                )}
                {progress.current && (
                  <p className="text-xs text-gray-400">{progress.current}</p>
                )}
              </div>
            ) : (
              <div>
                <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-lg font-medium">
                  Click to upload or drag and drop
                </p>
                <p className="text-sm">
                  {multiple ? 'Select multiple files' : 'Select a file'} for {folder.replace('_', ' ').toLowerCase()}
                </p>
              </div>
            )}
          </div>
        </label>
      </div>

      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded text-red-700">
          <p className="font-medium">Upload Error:</p>
          <p className="text-sm">{error}</p>
        </div>
      )}

      {uploadResults.length > 0 && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
          <p className="font-medium text-green-700 mb-2">
            ✅ Upload Successful ({uploadResults.length} file{uploadResults.length > 1 ? 's' : ''})
          </p>
          <div className="space-y-1">
            {uploadResults.map((result, index) => (
              <div key={index} className="text-sm text-green-600">
                📁 {result.filename || result.path.split('/').pop()} 
                <span className="text-gray-500 ml-2">
                  ({(result.size / 1024).toFixed(1)} KB)
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

interface MediaManagerProps {
  folder: keyof typeof STORAGE_FOLDERS;
  className?: string;
}

/**
 * Firebase Storage Media Manager Component
 */
export const MediaManager: React.FC<MediaManagerProps> = ({
  folder,
  className = ''
}) => {
  const [files, setFiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // Load files
  React.useEffect(() => {
    const loadFiles = async () => {
      setLoading(true);
      try {
        const folderPath = STORAGE_FOLDERS[folder];
        const fileList = await listMediaFiles(folderPath);
        setFiles(fileList);
      } catch (error) {
        console.error('Failed to load files:', error);
      } finally {
        setLoading(false);
      }
    };

    loadFiles();
  }, [folder, refreshTrigger]);

  const handleDelete = async (filePath: string) => {
    if (!confirm('Are you sure you want to delete this file?')) return;

    try {
      await deleteMediaFile(filePath);
      setRefreshTrigger(prev => prev + 1); // Trigger refresh
    } catch (error) {
      console.error('Failed to delete file:', error);
    }
  };

  const handleUploadComplete = () => {
    setRefreshTrigger(prev => prev + 1); // Trigger refresh
  };

  return (
    <div className={`firebase-media-manager ${className}`}>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">
          Upload to {folder.replace('_', ' ').toLowerCase()}
        </h3>
        <MediaUpload
          folder={folder}
          multiple={true}
          onUploadComplete={handleUploadComplete}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">
          Existing Files ({files.length})
        </h3>
        
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-2"></div>
            <p>Loading files...</p>
          </div>
        ) : files.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No files found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {files.map((file, index) => (
              <div key={index} className="border rounded-lg p-4 bg-gray-50">
                <div className="mb-2">
                  <p className="font-medium truncate" title={file.name}>
                    {file.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {(file.size / 1024).toFixed(1)} KB
                  </p>
                  <p className="text-xs text-gray-400">
                    {new Date(file.timeCreated).toLocaleDateString()}
                  </p>
                </div>
                
                <div className="flex gap-2">
                  <a
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 text-center"
                  >
                    View
                  </a>
                  <button
                    onClick={() => handleDelete(file.path)}
                    className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
