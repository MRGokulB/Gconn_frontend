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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900  tracking-wide mb-3">
          Annexures & Documents
        </h1>
        <div className="w-24 h-1 bg-yellow-500 mx-auto   "></div>
         
      </div>

      {/* Filter & Search Section — layout unchanged */}
      <div className="  sticky top-0 z-10 backdrop-blur-md border-y border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">

          {/* Desktop Layout */}
          <div className="hidden sm:flex sm:flex-row gap-4">
            {/* Year Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 pointer-events-none" />
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white 
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none cursor-pointer 
                hover:border-gray-400 transition-all"
              >
                <option value="All">All Years</option>
                {allYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
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
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent 
                hover:border-gray-400 transition-all"
              />
            </div>

            {/* Results Count */}
            <div className="flex items-center px-4 py-2.5 bg-blue-50 rounded-lg border border-blue-200 shadow-sm">
              <FileText className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-800">
                {totalDocuments} {totalDocuments === 1 ? 'Document' : 'Documents'}
              </span>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex flex-col gap-3 sm:hidden">
            {/* Year Filter */}
            <div className="relative w-full">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 pointer-events-none" />
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white 
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent appearance-none cursor-pointer 
                hover:border-gray-400 transition-all"
              >
                <option value="All">All Years</option>
                {allYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Bar */}
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search documents by title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent 
                hover:border-gray-400 transition-all"
              />
            </div>

            {/* Results Count */}
            <div className="flex items-center px-4 py-2.5 bg-blue-50 rounded-lg border border-blue-200 shadow-sm">
              <FileText className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-800">
                {totalDocuments} {totalDocuments === 1 ? 'Document' : 'Documents'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Documents List — layout preserved */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        {Object.keys(filtered).length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-200 py-12 sm:py-16 shadow-sm text-center">
            <FileText className="mx-auto h-12 sm:h-16 w-12 sm:w-16 text-gray-300" />
            <h3 className="mt-4 text-base sm:text-lg font-medium text-gray-900">No documents found</h3>
            <p className="mt-2 text-sm text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="space-y-6 sm:space-y-10">
            {Object.entries(filtered).map(([year, docs]) => (
              <div key={year}>
                {/* Year Header */}
                <div className="flex items-center mb-4 sm:mb-6">
                  <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600 mr-2 sm:mr-3" />
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{year}</h2>
                </div>

                {/* Documents List */}
                <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 divide-y divide-gray-200 shadow-sm">
                  {docs.map((doc) => (
                    <div
                      key={doc.fileUrl}
                      className="group px-4 py-4 sm:px-6 sm:py-5 transition-all duration-300 ease-out 
                      hover:-translate-y-[1px] hover:shadow-[0_6px_15px_rgba(0,0,0,0.05)] hover:bg-gray-50/60 cursor-pointer"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        {/* Document Info */}
                        <div className="flex items-start flex-1 min-w-0">
                          <div className="flex-shrink-0 mr-3 sm:mr-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-50 rounded-lg flex items-center justify-center shadow-sm">
                              <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600" />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 break-words">
                              {doc.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-500">
                              PDF Document • {year}
                            </p>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 ml-13 sm:ml-0">
                          <button
                            onClick={() => handleView(doc.fileUrl)}
                            className="inline-flex items-center justify-center px-3 py-2 sm:px-4 text-xs sm:text-sm font-medium 
                            text-gray-700 bg-white border border-gray-300 rounded-lg 
                            hover:bg-gray-50 hover:border-gray-400 transition-all"
                          >
                            <Eye className="h-4 w-4 sm:mr-2" />
                            <span className="hidden sm:inline">View</span>
                          </button>
                          <button
                            onClick={() => handleDownload(doc.fileUrl, doc.title)}
                            className="inline-flex items-center justify-center px-3 py-2 sm:px-4 text-xs sm:text-sm font-medium 
                            text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all"
                          >
                            <Download className="h-4 w-4 sm:mr-2" />
                            <span className="hidden sm:inline">Download</span>
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
