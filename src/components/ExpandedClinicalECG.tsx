import React from 'react';

// Complete list of all 47 clinical diagnoses
const ALL_CLINICAL_DIAGNOSES = [
  // Basic Rhythms
  {
    diagnosisKey: 'normal_sinus_rhythm',
    diagnosisName: 'Normal Sinus Rhythm',
    characteristics: 'Regular rhythm, normal rate (60-100 BPM), normal intervals',
    heartRate: 75,
    category: 'Basic Rhythms'
  },
  {
    diagnosisKey: 'sinus_bradycardia',
    diagnosisName: 'Sinus Bradycardia',
    characteristics: 'Slow heart rate (<60 BPM), regular rhythm',
    heartRate: 45,
    category: 'Basic Rhythms'
  },
  {
    diagnosisKey: 'sinus_tachycardia',
    diagnosisName: 'Sinus Tachycardia',
    characteristics: 'Fast heart rate (>100 BPM), regular rhythm',
    heartRate: 120,
    category: 'Basic Rhythms'
  },
  {
    diagnosisKey: 'sinus_arrhythmia',
    diagnosisName: 'Sinus Arrhythmia',
    characteristics: 'Irregular sinus rhythm, rate varies with respiration',
    heartRate: 70,
    category: 'Basic Rhythms'
  },

  // Atrial Arrhythmias
  {
    diagnosisKey: 'atrial_fibrillation',
    diagnosisName: 'Atrial Fibrillation',
    characteristics: 'Irregularly irregular rhythm, no P waves, fibrillatory waves',
    heartRate: 90,
    category: 'Atrial Arrhythmias'
  },
  {
    diagnosisKey: 'atrial_flutter',
    diagnosisName: 'Atrial Flutter',
    characteristics: 'Regular atrial rate ~300 BPM, sawtooth pattern',
    heartRate: 75,
    category: 'Atrial Arrhythmias'
  },
  {
    diagnosisKey: 'afib_rvr',
    diagnosisName: 'Atrial Fibrillation with RVR',
    characteristics: 'AFib with rapid ventricular response (>100 BPM)',
    heartRate: 140,
    category: 'Atrial Arrhythmias'
  },
  {
    diagnosisKey: 'multifocal_atrial_tachycardia',
    diagnosisName: 'Multifocal Atrial Tachycardia',
    characteristics: 'Multiple P wave morphologies, irregular rhythm',
    heartRate: 110,
    category: 'Atrial Arrhythmias'
  },

  // Ventricular Arrhythmias
  {
    diagnosisKey: 'monomorphic_vt',
    diagnosisName: 'Monomorphic Ventricular Tachycardia',
    characteristics: 'Wide QRS tachycardia, uniform morphology',
    heartRate: 180,
    category: 'Ventricular Arrhythmias'
  },
  {
    diagnosisKey: 'polymorphic_vt',
    diagnosisName: 'Polymorphic Ventricular Tachycardia',
    characteristics: 'Wide QRS tachycardia, varying morphology',
    heartRate: 200,
    category: 'Ventricular Arrhythmias'
  },
  {
    diagnosisKey: 'ventricular_fibrillation',
    diagnosisName: 'Ventricular Fibrillation',
    characteristics: 'Chaotic ventricular activity, no organized QRS',
    heartRate: 0,
    category: 'Ventricular Arrhythmias'
  },
  {
    diagnosisKey: 'monomorphic_pvc',
    diagnosisName: 'Monomorphic PVCs',
    characteristics: 'Premature ventricular contractions, same morphology',
    heartRate: 75,
    category: 'Ventricular Arrhythmias'
  },
  {
    diagnosisKey: 'polymorphic_pvc',
    diagnosisName: 'Polymorphic PVCs',
    characteristics: 'Premature ventricular contractions, different morphologies',
    heartRate: 75,
    category: 'Ventricular Arrhythmias'
  },

  // Supraventricular Tachycardia
  {
    diagnosisKey: 'svt_avnrt',
    diagnosisName: 'SVT (AVNRT)',
    characteristics: 'AV nodal reentrant tachycardia, narrow QRS',
    heartRate: 150,
    category: 'Supraventricular'
  },
  {
    diagnosisKey: 'svt_avrt',
    diagnosisName: 'SVT (AVRT)',
    characteristics: 'AV reentrant tachycardia, accessory pathway',
    heartRate: 160,
    category: 'Supraventricular'
  },

  // Conduction Blocks
  {
    diagnosisKey: 'left_bundle_branch_block',
    diagnosisName: 'Left Bundle Branch Block',
    characteristics: 'Wide QRS, broad R in V6, deep S in V1',
    heartRate: 75,
    category: 'Conduction Blocks'
  },
  {
    diagnosisKey: 'right_bundle_branch_block',
    diagnosisName: 'Right Bundle Branch Block',
    characteristics: 'Wide QRS, RSR\' pattern in V1, wide S in V6',
    heartRate: 75,
    category: 'Conduction Blocks'
  },
  {
    diagnosisKey: 'first_degree_av_block',
    diagnosisName: 'First Degree AV Block',
    characteristics: 'Prolonged PR interval (>200ms), 1:1 conduction',
    heartRate: 70,
    category: 'AV Blocks'
  },
  {
    diagnosisKey: 'second_degree_av_block_type1',
    diagnosisName: 'Second Degree AV Block (Mobitz I)',
    characteristics: 'Progressive PR prolongation, dropped QRS (Wenckebach)',
    heartRate: 55,
    category: 'AV Blocks'
  },
  {
    diagnosisKey: 'second_degree_av_block_type2',
    diagnosisName: 'Second Degree AV Block (Mobitz II)',
    characteristics: 'Fixed PR interval, intermittent dropped QRS',
    heartRate: 50,
    category: 'AV Blocks'
  },
  {
    diagnosisKey: 'third_degree_av_block',
    diagnosisName: 'Third Degree (Complete) AV Block',
    characteristics: 'Complete AV dissociation, independent P and QRS',
    heartRate: 40,
    category: 'AV Blocks'
  },

  // STEMI/MI
  {
    diagnosisKey: 'stemi_anterior',
    diagnosisName: 'STEMI - Anterior',
    characteristics: 'ST elevation in V1-V6, anterior wall MI',
    heartRate: 80,
    category: 'Myocardial Infarction'
  },
  {
    diagnosisKey: 'stemi_inferior',
    diagnosisName: 'STEMI - Inferior',
    characteristics: 'ST elevation in II, III, aVF, inferior wall MI',
    heartRate: 70,
    category: 'Myocardial Infarction'
  },
  {
    diagnosisKey: 'stemi_lateral',
    diagnosisName: 'STEMI - Lateral',
    characteristics: 'ST elevation in I, aVL, V5-V6, lateral wall MI',
    heartRate: 75,
    category: 'Myocardial Infarction'
  },
  {
    diagnosisKey: 'nstemi',
    diagnosisName: 'NSTEMI',
    characteristics: 'ST depression, T wave inversion, no ST elevation',
    heartRate: 85,
    category: 'Myocardial Infarction'
  },
  {
    diagnosisKey: 'inferior_mi',
    diagnosisName: 'Old Inferior MI',
    characteristics: 'Q waves in II, III, aVF, old inferior infarct',
    heartRate: 70,
    category: 'Myocardial Infarction'
  },
  {
    diagnosisKey: 'anterior_mi',
    diagnosisName: 'Old Anterior MI',
    characteristics: 'Q waves in V1-V6, old anterior infarct',
    heartRate: 75,
    category: 'Myocardial Infarction'
  },
  {
    diagnosisKey: 'wellens_syndrome',
    diagnosisName: 'Wellens Syndrome',
    characteristics: 'Biphasic T waves in V2-V3, LAD stenosis pattern',
    heartRate: 75,
    category: 'Myocardial Infarction'
  },

  // Hypertrophy
  {
    diagnosisKey: 'left_ventricular_hypertrophy',
    diagnosisName: 'Left Ventricular Hypertrophy',
    characteristics: 'Tall R waves in V5-V6, deep S in V1-V2',
    heartRate: 70,
    category: 'Hypertrophy'
  },
  {
    diagnosisKey: 'lvh_twi',
    diagnosisName: 'LVH with T Wave Inversions',
    characteristics: 'LVH criteria plus T wave inversions (strain pattern)',
    heartRate: 75,
    category: 'Hypertrophy'
  },
  {
    diagnosisKey: 'right_ventricular_hypertrophy',
    diagnosisName: 'Right Ventricular Hypertrophy',
    characteristics: 'Tall R in V1, deep S in V6, right axis deviation',
    heartRate: 80,
    category: 'Hypertrophy'
  },
  {
    diagnosisKey: 'left_atrial_enlargement',
    diagnosisName: 'Left Atrial Enlargement',
    characteristics: 'Wide P waves (>120ms), notched P in lead II',
    heartRate: 75,
    category: 'Atrial Enlargement'
  },
  {
    diagnosisKey: 'right_atrial_enlargement',
    diagnosisName: 'Right Atrial Enlargement',
    characteristics: 'Tall P waves (>2.5mm) in lead II',
    heartRate: 85,
    category: 'Atrial Enlargement'
  },

  // Electrolyte Abnormalities
  {
    diagnosisKey: 'hyperkalemia',
    diagnosisName: 'Hyperkalemia',
    characteristics: 'Tall peaked T waves, wide QRS, sine wave pattern',
    heartRate: 60,
    category: 'Electrolyte Disorders'
  },
  {
    diagnosisKey: 'hypokalemia',
    diagnosisName: 'Hypokalemia',
    characteristics: 'Flat T waves, prominent U waves, ST depression',
    heartRate: 70,
    category: 'Electrolyte Disorders'
  },
  {
    diagnosisKey: 'hypercalcemia',
    diagnosisName: 'Hypercalcemia',
    characteristics: 'Shortened QT interval, J waves',
    heartRate: 75,
    category: 'Electrolyte Disorders'
  },
  {
    diagnosisKey: 'hypocalcemia',
    diagnosisName: 'Hypocalcemia',
    characteristics: 'Prolonged QT interval due to long ST segment',
    heartRate: 75,
    category: 'Electrolyte Disorders'
  },

  // Other Conditions
  {
    diagnosisKey: 'long_qt_twi',
    diagnosisName: 'Long QT with T Wave Inversion',
    characteristics: 'Prolonged QT interval with inverted T waves',
    heartRate: 70,
    category: 'Other Conditions'
  },
  {
    diagnosisKey: 'brugada_syndrome',
    diagnosisName: 'Brugada Syndrome',
    characteristics: 'ST elevation in V1-V3, coved ST segment',
    heartRate: 75,
    category: 'Other Conditions'
  },
  {
    diagnosisKey: 'acute_pericarditis',
    diagnosisName: 'Acute Pericarditis',
    characteristics: 'Diffuse ST elevation, PR depression',
    heartRate: 90,
    category: 'Other Conditions'
  },
  {
    diagnosisKey: 'pericardial_effusion',
    diagnosisName: 'Pericardial Effusion',
    characteristics: 'Low voltage QRS, electrical alternans possible',
    heartRate: 85,
    category: 'Other Conditions'
  },
  {
    diagnosisKey: 'pulmonary_embolism',
    diagnosisName: 'Pulmonary Embolism',
    characteristics: 'S1Q3T3 pattern, right heart strain',
    heartRate: 110,
    category: 'Other Conditions'
  },
  {
    diagnosisKey: 'digitalis_effect',
    diagnosisName: 'Digitalis Effect',
    characteristics: 'Sagging ST depression, shortened QT',
    heartRate: 60,
    category: 'Drug Effects'
  },

  // Junctional Rhythms
  {
    diagnosisKey: 'junctional_rhythm',
    diagnosisName: 'Junctional Rhythm',
    characteristics: 'Narrow QRS, no P waves or inverted P waves',
    heartRate: 50,
    category: 'Junctional Rhythms'
  },
  {
    diagnosisKey: 'accelerated_junctional',
    diagnosisName: 'Accelerated Junctional Rhythm',
    characteristics: 'Junctional rhythm 60-100 BPM',
    heartRate: 80,
    category: 'Junctional Rhythms'
  },
  {
    diagnosisKey: 'idioventricular_rhythm',
    diagnosisName: 'Idioventricular Rhythm',
    characteristics: 'Wide QRS, rate 30-50 BPM, ventricular escape',
    heartRate: 40,
    category: 'Ventricular Rhythms'
  },
  {
    diagnosisKey: 'accelerated_idioventricular',
    diagnosisName: 'Accelerated Idioventricular Rhythm',
    characteristics: 'Wide QRS, rate 50-100 BPM, ventricular origin',
    heartRate: 75,
    category: 'Ventricular Rhythms'
  }
];

interface ExpandedClinicalECGProps {
  diagnosisKey: string;
  diagnosisName?: string;
  characteristics?: string;
  heartRate?: number;
  showInfo?: boolean;
  className?: string;
}

export const ExpandedClinicalECG: React.FC<ExpandedClinicalECGProps> = ({
  diagnosisKey,
  diagnosisName,
  characteristics,
  heartRate,
  showInfo = false,
  className = ""
}) => {
  // Find diagnosis info if not provided
  const diagnosisInfo = ALL_CLINICAL_DIAGNOSES.find(d => d.diagnosisKey === diagnosisKey);
  const finalDiagnosisName = diagnosisName || diagnosisInfo?.diagnosisName || diagnosisKey;
  const finalCharacteristics = characteristics || diagnosisInfo?.characteristics || '';
  const finalHeartRate = heartRate || diagnosisInfo?.heartRate || 0;

  const imagePath = `/ecg/clinical/clinical_${diagnosisKey}.png`;

  return (
    <div className={`expanded-clinical-ecg ${className}`}>
      {showInfo && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {finalDiagnosisName}
          </h3>
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
            <span className="flex items-center">
              ❤️ <strong className="ml-1">{finalHeartRate} BPM</strong>
            </span>
            <span className="flex items-center">
              📊 <strong className="ml-1">Clinical Standard</strong>
            </span>
          </div>
          <p className="text-gray-700 text-sm bg-gray-50 p-3 rounded-lg">
            {finalCharacteristics}
          </p>
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <img
          src={imagePath}
          alt={`Clinical ECG - ${finalDiagnosisName}`}
          className="w-full h-auto rounded border border-gray-300"
          style={{ 
            maxHeight: '300px', 
            objectFit: 'contain',
            backgroundColor: 'white'
          }}
          onError={(e) => {
            console.error(`Failed to load ECG image: ${imagePath}`);
            e.currentTarget.style.display = 'none';
          }}
        />
        
        {!showInfo && (
          <div className="mt-2 text-center">
            <p className="text-sm font-medium text-gray-800">{finalDiagnosisName}</p>
            <p className="text-xs text-gray-600">{finalHeartRate} BPM</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Component to display all clinical ECGs by category
export const ClinicalECGLibrary: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');
  
  // Group diagnoses by category
  const categories = Array.from(new Set(ALL_CLINICAL_DIAGNOSES.map(d => d.category)));
  
  const filteredDiagnoses = selectedCategory === 'all' 
    ? ALL_CLINICAL_DIAGNOSES 
    : ALL_CLINICAL_DIAGNOSES.filter(d => d.category === selectedCategory);

  return (
    <div className="clinical-ecg-library">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          🏥 Complete Clinical ECG Library
        </h2>
        <p className="text-gray-600 mb-4">
          47 comprehensive clinical ECGs in standard 12-lead format
        </p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All Categories ({ALL_CLINICAL_DIAGNOSES.length})
          </button>
          {categories.map(category => {
            const count = ALL_CLINICAL_DIAGNOSES.filter(d => d.category === category).length;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* ECG Grid */}
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-1">
        {filteredDiagnoses.map((diagnosis, index) => (
          <ExpandedClinicalECG
            key={diagnosis.diagnosisKey}
            diagnosisKey={diagnosis.diagnosisKey}
            diagnosisName={diagnosis.diagnosisName}
            characteristics={diagnosis.characteristics}
            heartRate={diagnosis.heartRate}
            showInfo={true}
            className="transition-transform hover:scale-105"
          />
        ))}
      </div>

      {/* Summary */}
      <div className="mt-12 bg-blue-50 rounded-xl p-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">
          📊 Library Statistics
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">47</div>
            <div className="text-blue-700">Total ECGs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{categories.length}</div>
            <div className="text-blue-700">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">1200×400</div>
            <div className="text-blue-700">Resolution</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">100%</div>
            <div className="text-blue-700">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ALL_CLINICAL_DIAGNOSES };
export default ExpandedClinicalECG;
