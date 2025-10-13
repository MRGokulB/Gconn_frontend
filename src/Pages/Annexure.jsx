// src/Pages/AnnexuresPage.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { FileText, Search, Download, Eye, Calendar, Filter } from 'lucide-react';

// Vite glob import for all yearwise PDFs
const localPdfFiles = import.meta.glob(
  '../assets/Annexures All/*/*.pdf',
  { query: '?url', import: 'default', eager: true }
);

function getYearwiseAnnexures() {
  const yearsMap = {};
  Object.entries(localPdfFiles).forEach(([path, fileUrl]) => {
    const parts = path.split('/');
    const year = parts[parts.length - 2];
    const fileName = parts[parts.length - 1];
    if (!yearsMap[year]) yearsMap[year] = [];
    yearsMap[year].push({
      title: fileName.replace(/_/g, ' ').replace(/\.pdf$/i, ''),
      fileUrl,
    });
  });
  // Sort years descending
  return Object.fromEntries(
    Object.entries(yearsMap).sort((a, b) => b[0].localeCompare(a[0]))
  );
}

const AnnexuresPage = () => {
  const [yearwiseAnnexures, setYearwiseAnnexures] = useState(getYearwiseAnnexures());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('All');

  const allYears = Object.keys(yearwiseAnnexures);

  useEffect(() => {
    // For future API
    // fetch and setYearwiseAnnexures(...)
  }, []);

  // Filtering logic
  const filtered = useMemo(() => {
    const result = {};
    Object.entries(yearwiseAnnexures).forEach(([year, docs]) => {
      if (selectedYear !== 'All' && year !== selectedYear) return;
      const filteredDocs = docs.filter((doc) =>
        doc.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filteredDocs.length > 0) result[year] = filteredDocs;
    });
    return result;
  }, [searchTerm, yearwiseAnnexures, selectedYear]);

  const handleView = (fileUrl) => window.open(fileUrl, '_blank');
  const handleDownload = (fileUrl, fileName) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName + '.pdf';
    link.click();
  };

  const totalDocuments = Object.values(filtered).reduce((acc, docs) => acc + docs.length, 0);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Filter & Search Section */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-3xl py-4">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Annexures & Documents
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Access official institutional records, compliance documents, and administrative 
              annexures .
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
          
            {/* Year Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 pointer-events-none" />
              <select
                value={selectedYear}
                onChange={e => setSelectedYear(e.target.value)}
                className="pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer hover:border-gray-400 transition-colors"
              >
                <option value="All">All Years</option>
                {allYears.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            {/* Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search documents by title..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400 transition-colors"
              />
            </div>

            {/* Results Count */}
            <div className="flex items-center px-4 py-2.5 bg-gray-100 rounded-lg border border-gray-200">
              <FileText className="h-4 w-4 text-gray-500 mr-2" />
              <span className="text-sm font-medium text-gray-700">
                {totalDocuments} {totalDocuments === 1 ? 'Document' : 'Documents'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Documents List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {Object.keys(filtered).length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 py-16">
            <div className="text-center">
              <FileText className="mx-auto h-16 w-16 text-gray-300" />
              <h3 className="mt-4 text-lg font-medium text-gray-900">No documents found</h3>
              <p className="mt-2 text-sm text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-10">
            {Object.entries(filtered).map(([year, docs]) => (
              <div key={year}>
                {/* Year Header */}
                <div className="flex items-center mb-6">
                  <Calendar className="h-6 w-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">{year}</h2>
                  {/*<span className="ml-3 px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
                    {docs.length} {docs.length === 1 ? 'Document' : 'Documents'}
                  </span>*/}
                </div>

                {/* Documents Grid */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 divide-y divide-gray-200">
                  {docs.map((doc, i) => (
                    <div
                      key={doc.fileUrl}
                      className="px-6 py-5 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-4">
                        {/* Document Info */}
                        <div className="flex items-start flex-1 min-w-0">
                          <div className="flex-shrink-0 mr-4">
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                              <FileText className="h-6 w-6 text-blue-600" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base font-semibold text-gray-900 mb-1">
                              {doc.title}
                            </h3>
                            <p className="text-sm text-gray-500">
                              PDF Document • {year}
                            </p>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <button
                            onClick={() => handleView(doc.fileUrl)}
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors"
                            title="View document"
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </button>
                          <button
                            onClick={() => handleDownload(doc.fileUrl, doc.title)}
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                            title="Download document"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
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