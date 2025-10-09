import React, { useState, useEffect, useMemo } from 'react';
import { FileText, Search } from 'lucide-react';

// 📄 This will work from local during dev/build.
const localPdfFiles = import.meta.glob('../assets/Annexures All/*.pdf', { as: 'url', eager: true });

function getLocalAnnexures() {
  return Object.entries(localPdfFiles).map(([path, fileUrl]) => ({
    title: path.split('/').pop().replace(/_/g, ' ').replace(/\.pdf$/, ''),
    fileUrl,
  }));
}

const AnnexuresPage = () => {
  // In the future, you can fetch from API and merge with local data if desired.
  const [annexures, setAnnexures] = useState(getLocalAnnexures());
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // If you want to load from an API:
    // (async () => {
    //   const response = await fetch('/api/annexures');
    //   const data = await response.json();
    //   setAnnexures(data); // Or merge with getLocalAnnexures() as needed
    // })();
  }, []);

  const filteredAnnexures = useMemo(
    () =>
      annexures.filter((doc) =>
        doc.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [searchTerm, annexures]
  );

  const handleView = (fileUrl) => {
    window.open(fileUrl, '_blank');
  };

  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName + '.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Page Title */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto py-6 px-2 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900">Annexures & Documents</h2>
            <p className="mt-1 text-sm text-gray-600">Official documents and institutional records</p>
          </div>
        </div>

        {/* Search Filter Only */}
        <div className="mb-6 flex flex-wrap gap-3">
          <div className="relative flex-1 min-w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search documents..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
            />
          </div>
        </div>

        {/* Documents List */}
        {filteredAnnexures.length === 0 ? (
          <div className="text-center py-16">
            <FileText className="mx-auto h-12 w-12 text-gray-300" />
            <p className="mt-3 text-sm text-gray-500">No documents found</p>
          </div>
        ) : (
          <div className="space-y-0">
            {filteredAnnexures.map((doc, index) => (
              <div
                key={doc.fileUrl}
                className={`flex items-center justify-between py-5 px-6 hover:bg-gray-50 transition-colors ${
                  index !== filteredAnnexures.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                <div className="flex items-center flex-1 min-w-0">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 bg-purple-50 rounded flex items-center justify-center">
                      <FileText className="h-5 w-5 text-purple-400" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-medium text-gray-900">
                      {doc.title}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-3 ml-4">
                  <button
                    onClick={() => handleView(doc.fileUrl)}
                    className="px-5 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleDownload(doc.fileUrl, doc.title)}
                    className="px-5 py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-800 transition-colors"
                  >
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnnexuresPage;