import React, { useState, useEffect } from 'react';

interface MedicalECGLoaderProps {
  className?: string;
  loadingText?: string;
}

const MedicalECGLoader: React.FC<MedicalECGLoaderProps> = ({ 
  className = '',
  loadingText = 'Loading ECG...'
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Curated list of medical accurate ECG images for loading states
  const medicalECGImages = [
    '/ecg/medical_accurate/normal_75bpm.png',
    '/ecg/medical_accurate/atrial_fibrillation_120bpm_5.png',
    '/ecg/medical_accurate/tachycardia_125bpm.png',
    '/ecg/medical_accurate/bradycardia_50bpm.png',
    '/ecg/medical_accurate/pvc_70bpm_1.png',
    '/ecg/medical_accurate/rbbb_80bpm_2.png',
    '/ecg/medical_accurate/lbbb_75bpm_2.png',
    '/ecg/medical_accurate/ventricular_tachycardia_180bpm_3.png'
  ];

  // Also include some optimized ECG images as fallback
  const optimizedECGImages = [
    '/ecg/optimized/1_NORM.png',
    '/ecg/optimized/351_AFIB.png',
    '/ecg/optimized/4117_AFIB.png',
    '/ecg/optimized/180_CLBBB.png',
    '/ecg/optimized/172_CRBBB.png',
    '/ecg/optimized/vtach_150bpm.png'
  ];

  const allImages = [...medicalECGImages, ...optimizedECGImages];

  // Rotate through images every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [allImages.length]);

  const currentImage = allImages[currentImageIndex];

  return (
    <div className={`relative overflow-hidden rounded-lg bg-gradient-to-br from-slate-50 to-slate-100 ${className}`}>
      {/* ECG Image Background */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={currentImage}
          alt="Medical ECG Loading"
          className="w-full h-full object-contain filter brightness-110 contrast-125"
          style={{ 
            minHeight: '200px',
            transition: 'opacity 0.5s ease-in-out'
          }}
        />
      </div>
      
      {/* Overlay with loading indicator */}
      <div className="relative z-10 flex items-center justify-center h-full min-h-[200px]">
        <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/40">
          <div className="flex items-center justify-center mb-2">
            {/* Medical pulse animation */}
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <div className="w-1 h-6 bg-emerald-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-1 h-3 bg-emerald-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              <div className="w-1 h-8 bg-emerald-500 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              <div className="w-1 h-2 bg-emerald-500 animate-pulse" style={{ animationDelay: '0.8s' }}></div>
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
          <p className="text-slate-700 text-sm font-medium">{loadingText}</p>
          <p className="text-slate-500 text-xs mt-1">
            Analyzing rhythm patterns...
          </p>
        </div>
      </div>

      {/* Subtle grid overlay for medical feel */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
      </div>
    </div>
  );
};

export default MedicalECGLoader;
