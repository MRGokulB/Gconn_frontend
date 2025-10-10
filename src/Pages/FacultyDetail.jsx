// src/Pages/FacultyDetail.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Mail, ArrowLeft, User } from 'lucide-react';

const FacultyDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { facultyMember } = location.state || {};

  if (!facultyMember) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="h-10 w-10 text-teal-600" />
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

  const roleTitle = facultyMember.title.split('•')[0]?.trim() || 'Faculty Member';
  const department = facultyMember.title.split('•')[1]?.trim() || 'Nursing Education';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Back Navigation */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 px-8 py-4">
          <button 
            onClick={() => navigate('/faculty')}
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-teal-600 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Faculty
          </button>
        </div>
      </div>

      {/* Profile Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 ">
        {/* Header Card */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-3 bg-gradient-to-br from-teal-50 to-blue-50 gap-8 p-8 shadow-lg ">
            {/* Left Column - Image */}
            <div className="lg:col-span-1">
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute -inset-4 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl"></div>
                
                {/* Image container */}
                <div className="relative aspect-square rounded-xl overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={facultyMember.image}
                    alt={facultyMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-teal-600 text-center" />
                  {facultyMember.email}
                </h3> 
                
              </div>
              
              {/* Contact Info Card */}
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-lg p-5 border border-teal-100">
                <h3 className="text-sm font-semibold text-gray-900  flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-teal-600 text-center" />
                  {facultyMember.email}
                </h3> 
              </div>
            </div>

            {/* Right Column - Info */}
            <div className="lg:col-span-2">
              {/* Name and Title */}
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-3">
                  {facultyMember.name}
                </h1>
                
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-teal-100 text-teal-800">
                    {roleTitle}
                  </span>
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {department}
                  </span>
                </div>
              </div>

              {/* Bio Section */}
              <div className="border-t border-gray-200 pl-4 pt-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-5 flex items-center">
                  About
                  <div className="ml-4 flex-1 h-px bg-gradient-to-r from-teal-200 to-transparent"></div>
                </h2>
                <div className="prose max-w-none">
                  {facultyMember.bio.split('\n').map((paragraph, index) => (
                    paragraph.trim() && (
                      <p key={index} className="text-gray-700 leading-relaxed mb-4 last:mb-0 text-justify">
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