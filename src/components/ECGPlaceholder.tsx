import React from 'react';

interface ECGPlaceholderProps {
  type: 'afib-rvr' | 'stemi-anterior' | 'complete-heart-block' | 'ventricular-tachycardia' | 'rbbb-pattern' | 'hyperkalemia';
  className?: string;
}

const ECGPlaceholder: React.FC<ECGPlaceholderProps> = ({ type, className = '' }) => {
  const getECGPattern = (type: string) => {
    const baseY = 150;
    const width = 600;
    
    switch (type) {
      case 'afib-rvr':
        // Irregular rhythm, no P waves, fast rate
        return (
          <>
            <path d="M 50 150 L 70 150 L 75 120 L 80 180 L 85 150 L 100 150 L 105 125 L 110 175 L 115 150 L 130 150 L 135 130 L 140 170 L 145 150 L 160 150 L 165 125 L 170 175 L 175 150 L 190 150 L 195 120 L 200 180 L 205 150 L 220 150 L 225 130 L 230 170 L 235 150 L 250 150" stroke="#00FF00" strokeWidth="2" fill="none"/>
            <text x="300" y="50" fill="#00FF00" fontSize="14" textAnchor="middle">Atrial Fibrillation with RVR</text>
            <text x="300" y="280" fill="#00FF00" fontSize="12" textAnchor="middle">Irregularly irregular • No P waves • Rate ~150 bpm</text>
          </>
        );
      
      case 'stemi-anterior':
        // ST elevation pattern
        return (
          <>
            <path d="M 50 150 L 80 150 L 85 120 L 90 180 L 95 150 L 120 150 L 125 100 L 130 200 L 135 150 L 160 120 L 180 120 L 200 150 L 220 150 L 225 120 L 230 180 L 235 150 L 260 150" stroke="#00FF00" strokeWidth="2" fill="none"/>
            <path d="M 95 150 L 120 130 L 160 130" stroke="#FF4444" strokeWidth="3" fill="none"/>
            <text x="300" y="50" fill="#00FF00" fontSize="14" textAnchor="middle">Anterior STEMI</text>
            <text x="300" y="280" fill="#00FF00" fontSize="12" textAnchor="middle">ST elevations V1-V4 • Anterior wall MI</text>
          </>
        );
      
      case 'complete-heart-block':
        // P waves and QRS completely dissociated
        return (
          <>
            <path d="M 50 140 L 80 140 L 100 140 L 120 140 L 140 140 L 160 140 L 180 140 L 200 140 L 220 140 L 240 140" stroke="#00FF00" strokeWidth="1" fill="none"/>
            <path d="M 70 160 L 75 120 L 80 200 L 85 160 L 140 160 L 145 120 L 150 200 L 155 160 L 210 160 L 215 120 L 220 200 L 225 160" stroke="#00FF00" strokeWidth="2" fill="none"/>
            <text x="300" y="50" fill="#00FF00" fontSize="14" textAnchor="middle">Complete Heart Block</text>
            <text x="300" y="280" fill="#00FF00" fontSize="12" textAnchor="middle">P waves independent of QRS • 3rd degree AV block</text>
          </>
        );
      
      case 'ventricular-tachycardia':
        // Wide, fast QRS complexes
        return (
          <>
            <path d="M 50 150 L 60 150 L 65 100 L 75 200 L 85 150 L 95 150 L 100 100 L 110 200 L 120 150 L 130 150 L 135 100 L 145 200 L 155 150 L 165 150 L 170 100 L 180 200 L 190 150 L 200 150 L 205 100 L 215 200 L 225 150" stroke="#00FF00" strokeWidth="2" fill="none"/>
            <text x="300" y="50" fill="#00FF00" fontSize="14" textAnchor="middle">Ventricular Tachycardia</text>
            <text x="300" y="280" fill="#00FF00" fontSize="12" textAnchor="middle">Wide QRS • Rate ~180 bpm • Monomorphic</text>
          </>
        );
      
      case 'rbbb-pattern':
        // RSR' pattern in V1
        return (
          <>
            <path d="M 50 150 L 80 150 L 85 130 L 90 180 L 95 140 L 100 120 L 105 160 L 110 150 L 140 150 L 145 130 L 150 180 L 155 140 L 160 120 L 165 160 L 170 150 L 200 150" stroke="#00FF00" strokeWidth="2" fill="none"/>
            <text x="300" y="50" fill="#00FF00" fontSize="14" textAnchor="middle">Right Bundle Branch Block</text>
            <text x="300" y="280" fill="#00FF00" fontSize="12" textAnchor="middle">RSR' pattern • "Rabbit ears" • Wide QRS</text>
          </>
        );
      
      case 'hyperkalemia':
        // Tall, peaked T waves
        return (
          <>
            <path d="M 50 150 L 80 150 L 85 130 L 90 180 L 95 150 L 110 150 L 115 80 L 120 150 L 140 150 L 145 130 L 150 180 L 155 150 L 170 150 L 175 80 L 180 150 L 200 150" stroke="#00FF00" strokeWidth="2" fill="none"/>
            <text x="300" y="50" fill="#00FF00" fontSize="14" textAnchor="middle">Hyperkalemia</text>
            <text x="300" y="280" fill="#00FF00" fontSize="12" textAnchor="middle">Tall, peaked T waves • Narrow base</text>
          </>
        );
      
      default:
        return (
          <text x="300" y="150" fill="#00FF00" fontSize="16" textAnchor="middle">ECG Pattern</text>
        );
    }
  };

  return (
    <div className={`bg-black rounded-lg overflow-hidden ${className}`}>
      <svg 
        width="100%" 
        height="300" 
        viewBox="0 0 600 300" 
        className="w-full h-auto"
        style={{ background: 'black' }}
      >
        {/* ECG Grid */}
        <defs>
          <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#003300" strokeWidth="0.5"/>
          </pattern>
          <pattern id="largeGrid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#006600" strokeWidth="1"/>
          </pattern>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#smallGrid)"/>
        <rect width="100%" height="100%" fill="url(#largeGrid)"/>
        
        {/* ECG Pattern */}
        {getECGPattern(type)}
        
        {/* Grid lines for reference */}
        <line x1="0" y1="150" x2="600" y2="150" stroke="#004400" strokeWidth="1" opacity="0.5"/>
      </svg>
    </div>
  );
};

export default ECGPlaceholder;
