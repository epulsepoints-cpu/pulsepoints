import React, { useState, useEffect } from 'react';
import { Download, FileText, Archive, Music, RefreshCw, ExternalLink, Calendar, HardDrive, Eye } from 'lucide-react';
import { OrderManagementService, DownloadHistory } from '@/services/OrderManagementService';
import { DownloadService } from '@/services/downloadService';
import { toast } from '@/components/ui/use-toast';

interface DownloadsProps {
  onBack?: () => void;
}

const DownloadsManager: React.FC<DownloadsProps> = ({ onBack }) => {
  const [downloads, setDownloads] = useState<DownloadHistory[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  // Load download history
  const loadDownloads = async () => {
    try {
      setLoading(true);
      const userDownloads = await OrderManagementService.getUserDownloads();
      setDownloads(userDownloads);
    } catch (error) {
      console.error('Failed to load downloads:', error);
      toast({
        title: "Load Failed",
        description: "Unable to load download history. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  // Refresh downloads
  const handleRefresh = async () => {
    setRefreshing(true);
    await loadDownloads();
    setRefreshing(false);
    
    toast({
      title: "Downloads Refreshed",
      description: "Your download history has been updated.",
      duration: 2000
    });
  };

  // Re-download file
  const handleRedownload = async (download: DownloadHistory) => {
    try {
      const result = await DownloadService.downloadFile(download.itemId);
      
      if (result.success) {
        // Record new download
        await OrderManagementService.recordDigitalDownload(
          download.itemId,
          download.itemName,
          download.fileSize,
          download.fileType,
          download.downloadUrl
        );
        
        toast({
          title: "Download Started! 📥",
          description: result.message,
          duration: 4000
        });
        
        // Refresh the list
        await loadDownloads();
      } else {
        // Fallback to demo
        const demoResult = DownloadService.simulateDownload(download.itemId);
        toast({
          title: "Demo Mode 🎭",
          description: demoResult.message,
          duration: 4000
        });
      }
    } catch (error) {
      console.error('Re-download failed:', error);
      toast({
        title: "Download Failed",
        description: "Unable to start download. Please try again.",
        variant: "destructive"
      });
    }
  };

  // Get file type icon
  const getFileIcon = (fileType: string) => {
    switch (fileType.toLowerCase()) {
      case 'pdf':
        return <FileText className="h-5 w-5 text-red-500" />;
      case 'zip':
        return <Archive className="h-5 w-5 text-purple-500" />;
      case 'mp3':
        return <Music className="h-5 w-5 text-green-500" />;
      case 'epub':
        return <FileText className="h-5 w-5 text-blue-500" />;
      default:
        return <FileText className="h-5 w-5 text-gray-500" />;
    }
  };

  // Format date
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  useEffect(() => {
    loadDownloads();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
          <h2 className="text-xl font-bold text-white mb-2">Loading Downloads</h2>
          <p className="text-blue-200">Fetching your download history...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Back Button */}
            {onBack && (
              <button
                onClick={onBack}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 text-white"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back
              </button>
            )}

            {/* Title */}
            <div className="flex items-center gap-3">
              <Download className="h-6 w-6 text-blue-400" />
              <h1 className="text-xl font-bold text-white">My Downloads</h1>
            </div>

            {/* Refresh Button */}
            <button
              onClick={handleRefresh}
              disabled={refreshing}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 backdrop-blur-md border border-blue-400/30 rounded-xl hover:bg-blue-600/30 transition-all duration-300 text-blue-200 disabled:opacity-50"
            >
              <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {downloads.length === 0 ? (
          /* Empty State */
          <div className="text-center py-16">
            <div className="bg-white/10 backdrop-blur-md rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
              <Download className="h-12 w-12 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">No Downloads Yet</h2>
            <p className="text-blue-200 mb-6 max-w-md mx-auto">
              Purchase digital products from the store to start building your ECG learning library.
            </p>
            {onBack && (
              <button
                onClick={onBack}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors"
              >
                Go to Store
              </button>
            )}
          </div>
        ) : (
          /* Downloads List */
          <div className="space-y-4">
            {/* Stats Header */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">Your Digital Library</h2>
                  <p className="text-blue-200">
                    {downloads.length} download{downloads.length !== 1 ? 's' : ''} • 
                    Ready for offline access
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-400">
                    {downloads.reduce((total, d) => {
                      const size = parseFloat(d.fileSize.replace(/[^\d.]/g, ''));
                      return total + (isNaN(size) ? 0 : size);
                    }, 0).toFixed(1)} MB
                  </div>
                  <p className="text-blue-200 text-sm">Total Size</p>
                </div>
              </div>
            </div>

            {/* Downloads Grid */}
            <div className="grid gap-4">
              {downloads.map((download) => (
                <div
                  key={download.id}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* File Icon */}
                    <div className="bg-white/20 rounded-xl p-3 flex-shrink-0">
                      {getFileIcon(download.fileType)}
                    </div>

                    {/* File Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-white text-lg mb-1 truncate">
                        {download.itemName}
                      </h3>
                      
                      {/* File Details */}
                      <div className="flex flex-wrap gap-4 text-sm text-blue-200 mb-3">
                        <div className="flex items-center gap-1">
                          <FileText className="h-4 w-4" />
                          {download.fileType.toUpperCase()}
                        </div>
                        <div className="flex items-center gap-1">
                          <HardDrive className="h-4 w-4" />
                          {download.fileSize}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(download.downloadDate)}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => handleRedownload(download)}
                          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
                        >
                          <Download className="h-4 w-4" />
                          Re-download
                        </button>
                        
                        {download.downloadUrl && (
                          <button
                            onClick={() => window.open(download.downloadUrl, '_blank')}
                            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg transition-colors text-sm font-medium"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Open
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Spacing */}
            <div className="h-8"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DownloadsManager;
