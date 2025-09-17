import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainDuolingoLayout from "@/components/MainDuolingoLayout";

const SimpleApp = () => (
  <div className="min-h-screen bg-gray-50">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="p-8"><h1 className="text-2xl font-bold">ECGkid PulsePoints Loading...</h1><p>If you see this, the basic routing is working.</p></div>} />
        <Route path="/main" element={<MainDuolingoLayout />} />
        <Route path="*" element={<div className="p-8"><h1 className="text-2xl font-bold">ECGkid PulsePoints</h1><p>App is starting up...</p></div>} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default SimpleApp;
