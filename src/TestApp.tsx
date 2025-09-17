import React from 'react';

const TestApp = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          ECGkid PulsePoints Test
        </h1>
        <p className="text-gray-600">
          App is loading... This is a test to verify basic functionality.
        </p>
        <div className="mt-4 p-4 bg-green-100 rounded-lg">
          <p className="text-green-800">✅ React is working</p>
          <p className="text-green-800">✅ Tailwind CSS is working</p>
          <p className="text-green-800">✅ Basic routing is working</p>
        </div>
      </div>
    </div>
  );
};

export default TestApp;
