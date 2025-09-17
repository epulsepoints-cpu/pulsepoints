// Test component to verify Cloudinary setup
import React from 'react';
import { CloudinaryImage, ECGLessonImage } from './CloudinaryImage';
import { getImageUrl, isCloudinaryConfigured } from '../utils/cloudinary';

export const CloudinaryTest: React.FC = () => {
  const isConfigured = isCloudinaryConfigured();
  
  return (
    <div className="p-4 border rounded-lg bg-gray-50">
      <h3 className="text-lg font-bold mb-4">🧪 Cloudinary Test Component</h3>
      
      <div className="mb-4">
        <p className="text-sm">
          <strong>Configuration Status:</strong> 
          <span className={isConfigured ? 'text-green-600' : 'text-red-600'}>
            {isConfigured ? ' ✅ Configured' : ' ❌ Not Configured'}
          </span>
        </p>
        {!isConfigured && (
          <p className="text-xs text-gray-600 mt-1">
            Add VITE_CLOUDINARY_CLOUD_NAME to your .env.local file
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold mb-2">Standard CloudinaryImage:</h4>
          <CloudinaryImage
            src="basic-ecg-waveforms.png"
            alt="ECG Waveforms Test"
            preset="thumbnail"
            className="rounded border"
          />
        </div>

        <div>
          <h4 className="font-semibold mb-2">ECG Lesson Image:</h4>
          <ECGLessonImage
            src="heart-anatomy-overview.png"
            alt="Heart Anatomy Test"
            className="rounded border"
          />
        </div>
      </div>

      <div className="mt-4 p-3 bg-blue-50 rounded">
        <h4 className="font-semibold text-sm">URL Examples:</h4>
        <div className="text-xs mt-2 space-y-1">
          <p><strong>Thumbnail:</strong></p>
          <code className="text-xs bg-white p-1 rounded">
            {getImageUrl('basic-ecg-waveforms', 'thumbnail')}
          </code>
          
          <p className="mt-2"><strong>ECG Detailed:</strong></p>
          <code className="text-xs bg-white p-1 rounded">
            {getImageUrl('heart-anatomy-overview', 'ecgDetailed')}
          </code>
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-600">
        <p>💡 This component helps you test Cloudinary integration.</p>
        <p>Remove this component once everything is working properly.</p>
      </div>
    </div>
  );
};
