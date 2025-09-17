import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import EnhancedImage from './EnhancedImage';
import { 
  Heart, 
  Activity, 
  Search, 
  Filter, 
  Download,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from 'lucide-react';

// Types
interface ECGRecord {
  file: string;
  condition: string;
  recordId: number;
  diagnosisCode: string;
  age: number;
  sex: number;
  patientId: number;
}

interface ECGViewerProps {
  className?: string;
  onRecordSelect?: (record: ECGRecord) => void;
  selectedConditions?: string[];
}

// Condition color mapping for visual organization
const CONDITION_COLORS: Record<string, string> = {
  'Normal Sinus Rhythm': 'bg-green-100 text-green-800 border-green-200',
  'Ventricular Ectopy': 'bg-red-100 text-red-800 border-red-200',
  'Ventricular Ectopic Beat': 'bg-red-100 text-red-800 border-red-200',
  'Atrial Fibrillation': 'bg-orange-100 text-orange-800 border-orange-200',
  'Atrial Premature Beats': 'bg-blue-100 text-blue-800 border-blue-200',
  'Right Bundle Branch Block': 'bg-purple-100 text-purple-800 border-purple-200',
  'Left Bundle Branch Block': 'bg-purple-100 text-purple-800 border-purple-200',
  'Supraventricular Arrhythmia': 'bg-indigo-100 text-indigo-800 border-indigo-200',
  'Ventricular Ectopy and Fusion Beats': 'bg-pink-100 text-pink-800 border-pink-200'
};

// AAMI annotation descriptions
const AAMI_DESCRIPTIONS: Record<string, string> = {
  'N': 'Normal beat',
  'L': 'Left bundle branch block beat',
  'R': 'Right bundle branch block beat',
  'A': 'Atrial premature beat',
  'V': 'Ventricular ectopic beat',
  'F': 'Fusion of ventricular and normal beat',
  'Q': 'Unclassifiable beat',
  '/': 'Paced beat',
  '!': 'Ventricular flutter wave',
  '[': 'Start of ventricular flutter/fibrillation',
  ']': 'End of ventricular flutter/fibrillation'
};

const ECGViewer: React.FC<ECGViewerProps> = ({ 
  className = '',
  onRecordSelect,
  selectedConditions = []
}) => {
  const [ecgRecords, setEcgRecords] = useState<ECGRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCondition, setSelectedCondition] = useState<string>('all');
  const [selectedRecord, setSelectedRecord] = useState<ECGRecord | null>(null);
  const [imageZoom, setImageZoom] = useState(1);

  // Load ECG data on component mount
  useEffect(() => {
    loadECGData();
  }, []);

  const loadECGData = async () => {
    try {
      setLoading(true);
      
      // Try to import the generated ECG list
      const ecgData = await import('@/data/ecgList.json');
      setEcgRecords(ecgData.default || []);
      
      console.log('✅ Loaded ECG records:', ecgData.default?.length || 0);
    } catch (importError) {
      console.warn('⚠️ No ECG data found, using sample data');
      
      // Fallback sample data for development
      const sampleData: ECGRecord[] = [
        {
          file: 'sample_normal.png',
          condition: 'normal ECG',
          recordId: 1,
          diagnosisCode: 'NORM',
          age: 45,
          sex: 1,
          patientId: 1001
        },
        {
          file: 'sample_vt.png',
          condition: 'ventricular ectopy',
          recordId: 2,
          diagnosisCode: 'VT',
          age: 62,
          sex: 0,
          patientId: 1002
        }
      ];
      
      setEcgRecords(sampleData);
      setError('ECG database not downloaded yet. Run the data processing script to populate real ECG data.');
    } finally {
      setLoading(false);
    }
  };

  // Filter records based on search and condition
  const filteredRecords = ecgRecords.filter(record => {
    const matchesSearch = record.condition.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.recordId.toString().includes(searchTerm) ||
                         record.diagnosisCode.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCondition = selectedCondition === 'all' || 
                           record.condition === selectedCondition ||
                           selectedConditions.includes(record.condition);
    
    return matchesSearch && matchesCondition;
  });

  // Get unique conditions for filter dropdown
  const uniqueConditions = [...new Set(ecgRecords.map(record => record.condition))].sort();

  // Handle record selection
  const handleRecordClick = (record: ECGRecord) => {
    setSelectedRecord(record);
    onRecordSelect?.(record);
  };

  // Download record data as JSON
  const downloadRecordData = (record: ECGRecord) => {
    const dataStr = JSON.stringify(record, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = `${record.recordId}_data.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className={`flex items-center justify-center p-8 ${className}`}>
        <div className="text-center">
          <Activity className="w-8 h-8 animate-pulse text-blue-500 mx-auto mb-4" />
          <p className="text-gray-600">Loading ECG database...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
          <Heart className="w-8 h-8 text-red-500" />
          MIT-BIH ECG Database Viewer
        </h2>
        <p className="text-gray-600 text-lg">
          Explore real ECG recordings from the MIT-BIH Arrhythmia Database
        </p>
        {error && (
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800">{error}</p>
          </div>
        )}
      </div>

      {/* Search and Filter Controls */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by condition or record ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            {/* Condition Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCondition}
                onChange={(e) => setSelectedCondition(e.target.value)}
                className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              >
                <option value="all">All Conditions</option>
                {uniqueConditions.map(condition => (
                  <option key={condition} value={condition}>
                    {condition}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Results count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredRecords.length} of {ecgRecords.length} records
          </div>
        </CardContent>
      </Card>

      {/* ECG Records Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredRecords.map((record) => (
          <Card 
            key={record.recordId}
            className={`cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 ${
              selectedRecord?.recordId === record.recordId 
                ? 'ring-2 ring-blue-500 bg-blue-50' 
                : 'hover:bg-gray-50'
            }`}
            onClick={() => handleRecordClick(record)}
          >
            <CardContent className="p-6">
              {/* Record Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Record {record.recordId}
                  </h3>
                  <Badge 
                    className={`mt-1 ${
                      CONDITION_COLORS[record.condition] || 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {record.condition}
                  </Badge>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    downloadRecordData(record);
                  }}
                  className="text-gray-500 hover:text-blue-600"
                >
                  <Download className="w-4 h-4" />
                </Button>
              </div>

              {/* ECG Image */}
              <div className="mb-4">
                <EnhancedImage
                  src={`/ecg/${record.file}`}
                  alt={`ECG Record ${record.recordId} - ${record.condition}`}
                  className="w-full h-auto bg-white rounded-lg border"
                  downloadFileName={`ecg-record-${record.recordId}-${record.condition.replace(/\s+/g, '-').toLowerCase()}.png`}
                  enableZoom={true}
                  enableRotation={true}
                  enableFullscreen={true}
                  enableDownload={true}
                />
              </div>

              {/* Record Details */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Age:</span>
                  <span className="font-medium">{record.age} years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sex:</span>
                  <span className="font-medium">{record.sex === 1 ? 'Male' : 'Female'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Diagnosis:</span>
                  <span className="font-medium">{record.diagnosisCode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Patient ID:</span>
                  <span className="font-medium">{record.patientId}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No results message */}
      {filteredRecords.length === 0 && (
        <div className="text-center py-12">
          <Activity className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No ECG records found</h3>
          <p className="text-gray-600">
            {ecgRecords.length === 0 
              ? 'Run the data processing script to download ECG data.'
              : 'Try adjusting your search or filter criteria.'
            }
          </p>
        </div>
      )}

      {/* Selected Record Detail Modal */}
      {selectedRecord && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    MIT-BIH Record {selectedRecord.recordId}
                  </h3>
                  <Badge 
                    className={`mt-2 ${
                      CONDITION_COLORS[selectedRecord.condition] || 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {selectedRecord.condition}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setImageZoom(Math.max(0.5, imageZoom - 0.25))}
                  >
                    <ZoomOut className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setImageZoom(Math.min(2, imageZoom + 0.25))}
                  >
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setImageZoom(1)}
                  >
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => setSelectedRecord(null)}
                  >
                    ✕
                  </Button>
                </div>
              </div>

              {/* Large ECG Image */}
              <div className="mb-6">
                <EnhancedImage
                  src={`/ecg/${selectedRecord.file}`}
                  alt={`ECG Record ${selectedRecord.recordId} - ${selectedRecord.condition}`}
                  className="w-full h-auto bg-white rounded-lg border"
                  downloadFileName={`detailed-ecg-record-${selectedRecord.recordId}-${selectedRecord.condition.replace(/\s+/g, '-').toLowerCase()}.png`}
                  enableZoom={true}
                  enableRotation={true}
                  enableFullscreen={true}
                  enableDownload={true}
                />
              </div>

              {/* Detailed Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Record Information</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Record ID:</span>
                      <span className="font-medium">{selectedRecord.recordId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Age:</span>
                      <span className="font-medium">{selectedRecord.age} years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sex:</span>
                      <span className="font-medium">{selectedRecord.sex === 1 ? 'Male' : 'Female'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Diagnosis Code:</span>
                      <span className="font-medium">{selectedRecord.diagnosisCode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Patient ID:</span>
                      <span className="font-medium">{selectedRecord.patientId}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Download Actions */}
              <div className="mt-6 pt-6 border-t border-gray-200 flex gap-3">
                <Button
                  onClick={() => downloadRecordData(selectedRecord)}
                  className="flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download Record Data
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = `/ecg/${selectedRecord.file}`;
                    link.download = selectedRecord.file;
                    link.click();
                  }}
                  className="flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download ECG Image
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ECGViewer;
