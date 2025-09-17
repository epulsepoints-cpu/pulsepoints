import React from 'react';
import ECGViewer from '@/components/ECGViewer';

// Example: Add ECG database to your main dashboard
const ECGDatabasePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          MIT-BIH ECG Database
        </h1>
        
        <ECGViewer 
          onRecordSelect={(record) => {
            console.log('Selected ECG Record:', record);
            // You can now create quizzes, analysis, etc. based on this record
          }}
        />
      </div>
    </div>
  );
};

export default ECGDatabasePage;
