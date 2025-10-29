// src/Pages/FacultyDetail.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Mail, ArrowLeft, User, BookOpen, GraduationCap } from 'lucide-react';

const FacultyDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { facultyMember } = location.state || {};

  if (!facultyMember) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="h-10 w-10 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Faculty member not found</h2>
          <p className="text-gray-600 mb-6">The requested faculty profile could not be found.</p>
          <button
            onClick={() => navigate('/faculty')}
            className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Return to Faculty
          </button>
        </div>
      </div>
    );
  }
  
  const getTitleIcon = (title) => {
    const titleLower = title.toLowerCase();
    if (titleLower.includes('principal')) {
      return <GraduationCap className="h-4 w-4 mr-1.5" />;
    }
    return <BookOpen className="h-4 w-4 mr-1.5" />;
  };

  const roleTitle = facultyMember.title.split('•')[0]?.trim() || 'Faculty Member';
  const department = facultyMember.title.split('•')[1]?.trim() || 'Nursing Education';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Back Navigation */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-4 py-2">
          <button
            onClick={() => navigate('/faculty')}
            className="inline-flex items-center text-lg font-medium text-gray-600 hover:text-teal-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Faculty
          </button>
        </div>
      </div>

      {/* Profile Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="">
          <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 p-6 sm:p-8">
            {/* Left Column - Image & Contact */}
            <div className="lg:col-span-1">
              {/* Image */}
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg border-2 border-gray-200 mb-6 bg-gradient-to-br from-indigo-50 to-blue-50">
                <img
                  src={facultyMember.image}
                  alt={facultyMember.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Contact Card */}
              {facultyMember.email && (
                <div className="bg-white rounded-xl p-5 shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-teal-600" />
                    Contact Information
                  </h3>
                  <a 
                    href={`mailto:${facultyMember.email}`}
                    className="text-sm text-teal-600 hover:text-teal-700 transition-colors break-all font-medium"
                  >
                    {facultyMember.email}
                  </a>
                </div>
              )}
            </div>

            {/* Right Column - Info */}
            <div className="lg:col-span-2 shadow-sm rounded-lg bg-white p-6 sm:p-8">
              {/* Name and Title */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  {facultyMember.name}
                </h1>
                
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span
  className="inline-flex items-center px-3 sm:px-4 py-1.5 rounded-lg   text-xs sm:text-sm font-semibold bg-teal-100 text-teal-800   border border-teal-200 shadow-sm   transition">
  {getTitleIcon(facultyMember.title)}
  {facultyMember.title.split('•')[0].trim()}
</span>

                  <span className="inline-flex items-center px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-blue-50 text-blue-800 border border-blue-200 shadow-sm">
                    {department}
                  </span>
                </div>
              </div>

              {/* Bio Section */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <div className="w-1 h-6 bg-teal-500 mr-3 rounded-full"></div>
                  About
                </h2>
                <div className="prose max-w-none">
                  {facultyMember.bio.split('\n').map((paragraph, index) => (
                    paragraph.trim() && (
                      <p key={index} className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 last:mb-0 text-justify">
                        {paragraph.trim()}
                      </p>
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);
};

export default FacultyDetail;