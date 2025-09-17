import React from 'react';

export default function TestPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Test Page</h1>
      <p className="text-xl">This is a test page to verify routing is working properly.</p>
      <div className="mt-4 p-4 bg-green-100 border border-green-200 rounded-md">
        <p className="text-green-700 font-medium">✅ Test page loaded successfully!</p>
      </div>
    </div>
  );
}
