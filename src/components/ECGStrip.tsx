import React from 'react';

interface ECGStripProps {
  rhythm: 'normal' | 'vtach' | 'afib' | 'bradycardia' | 'tachycardia';
  rate?: number;
  className?: string;
}

export const ECGStrip: React.FC<ECGStripProps> = ({ rhythm, rate = 75, className = '' }) => {
  const generateECGPath = (rhythm: string, rate: number): string => {
    const width = 800;
    const height = 200;
    const centerY = height / 2;
    const beatsPerSecond = rate / 60;
    const secondsVisible = 10;
    const pixelsPerSecond = width / secondsVisible;
    
    let path = `M 0 ${centerY}`;
    
    switch (rhythm) {
      case 'normal':
        return generateNormalSinusPath(width, centerY, beatsPerSecond, pixelsPerSecond);
      case 'vtach':
        return generateVTachPath(width, centerY, beatsPerSecond, pixelsPerSecond);
      case 'afib':
        return generateAFibPath(width, centerY, beatsPerSecond, pixelsPerSecond);
      case 'bradycardia':
        return generateBradycardiaPath(width, centerY, beatsPerSecond, pixelsPerSecond);
      case 'tachycardia':
        return generateTachycardiaPath(width, centerY, beatsPerSecond, pixelsPerSecond);
      default:
        return generateNormalSinusPath(width, centerY, beatsPerSecond, pixelsPerSecond);
    }
  };

  const generateNormalSinusPath = (width: number, centerY: number, beatsPerSecond: number, pixelsPerSecond: number): string => {
    let path = `M 0 ${centerY}`;
    const beatInterval = pixelsPerSecond / beatsPerSecond;
    
    for (let x = 0; x < width; x += 2) {
      const beatPhase = (x % beatInterval) / beatInterval;
      let y = centerY;
      
      // P wave (0-0.1)
      if (beatPhase < 0.1) {
        y = centerY - 8 * Math.sin((beatPhase / 0.1) * Math.PI);
      }
      // PR segment (0.1-0.2)
      else if (beatPhase < 0.2) {
        y = centerY;
      }
      // QRS complex (0.2-0.3)
      else if (beatPhase < 0.3) {
        const qrsPhase = (beatPhase - 0.2) / 0.1;
        if (qrsPhase < 0.3) {
          y = centerY + 10; // Q wave
        } else if (qrsPhase < 0.7) {
          y = centerY - 40; // R wave
        } else {
          y = centerY + 15; // S wave
        }
      }
      // ST segment (0.3-0.5)
      else if (beatPhase < 0.5) {
        y = centerY;
      }
      // T wave (0.5-0.8)
      else if (beatPhase < 0.8) {
        const tPhase = (beatPhase - 0.5) / 0.3;
        y = centerY - 20 * Math.sin(tPhase * Math.PI);
      }
      // Baseline (0.8-1.0)
      else {
        y = centerY;
      }
      
      path += ` L ${x} ${y}`;
    }
    
    return path;
  };

  const generateVTachPath = (width: number, centerY: number, beatsPerSecond: number, pixelsPerSecond: number): string => {
    let path = `M 0 ${centerY}`;
    const beatInterval = pixelsPerSecond / beatsPerSecond;
    
    for (let x = 0; x < width; x += 2) {
      const beatPhase = (x % beatInterval) / beatInterval;
      let y = centerY;
      
      // Wide, bizarre QRS complexes characteristic of VT
      if (beatPhase < 0.15) { // Wide QRS
        const phase = beatPhase / 0.15;
        y = centerY + 50 * Math.sin(phase * Math.PI * 3) - 30 * Math.cos(phase * Math.PI * 2);
      } else if (beatPhase < 0.4) { // Abnormal repolarization
        const phase = (beatPhase - 0.15) / 0.25;
        y = centerY + 25 * Math.sin(phase * Math.PI);
      } else {
        y = centerY;
      }
      
      path += ` L ${x} ${y}`;
    }
    
    return path;
  };

  const generateAFibPath = (width: number, centerY: number, beatsPerSecond: number, pixelsPerSecond: number): string => {
    let path = `M 0 ${centerY}`;
    
    for (let x = 0; x < width; x += 2) {
      // Irregular baseline with no P waves
      const fibrillation = Math.sin(x * 0.5) * 3 + Math.sin(x * 0.3) * 2;
      
      // Irregular QRS complexes
      const irregularBeat = Math.random() > 0.85;
      let y = centerY + fibrillation;
      
      if (irregularBeat) {
        y += Math.random() > 0.5 ? -25 : 25; // Random QRS
      }
      
      path += ` L ${x} ${y}`;
    }
    
    return path;
  };

  const generateBradycardiaPath = (width: number, centerY: number, beatsPerSecond: number, pixelsPerSecond: number): string => {
    // Similar to normal but with slower rate (rate parameter already adjusted)
    return generateNormalSinusPath(width, centerY, beatsPerSecond, pixelsPerSecond);
  };

  const generateTachycardiaPath = (width: number, centerY: number, beatsPerSecond: number, pixelsPerSecond: number): string => {
    // Similar to normal but with faster rate (rate parameter already adjusted)
    return generateNormalSinusPath(width, centerY, beatsPerSecond, pixelsPerSecond);
  };

  const ecgPath = generateECGPath(rhythm, rate);

  return (
    <div className={`bg-black p-4 rounded-lg ${className}`}>
      <svg width="100%" height="200" viewBox="0 0 800 200" className="border border-green-600">
        {/* ECG Grid */}
        <defs>
          <pattern id="ecgGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#22c55e" strokeWidth="0.5" opacity="0.3"/>
          </pattern>
          <pattern id="ecgGridBold" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#22c55e" strokeWidth="1" opacity="0.5"/>
          </pattern>
        </defs>
        
        {/* Grid background */}
        <rect width="100%" height="100%" fill="url(#ecgGrid)" />
        <rect width="100%" height="100%" fill="url(#ecgGridBold)" />
        
        {/* ECG Waveform */}
        <path
          d={ecgPath}
          fill="none"
          stroke="#22c55e"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Rate and rhythm labels */}
        <text x="10" y="25" fill="#22c55e" fontSize="14" fontFamily="monospace">
          Rate: {rate} bpm
        </text>
        <text x="10" y="45" fill="#22c55e" fontSize="14" fontFamily="monospace">
          Rhythm: {rhythm.charAt(0).toUpperCase() + rhythm.slice(1)}
        </text>
      </svg>
    </div>
  );
};

export default ECGStrip;
